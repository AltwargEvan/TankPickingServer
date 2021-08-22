let matches = [] //data holder. very secure

const { withFilter } = require('graphql-subscriptions')
const { nanoid } = require('nanoid')
const { PubSub } = require('graphql-subscriptions')
const pubsub = new PubSub()


//takes a key and returns the index of the corresponding match
const findMatchIndexByKey = (key) => {
    const index = matches.findIndex((m) => {
        const keys = [m.keys.team1, m.keys.team2, m.keys.admin, m.keys.spectate]
        return keys.includes(key.toString())
    })
    if (index === -1) throw 'Error: match with given key not found.'
    return index
}

//Takes a match  and returns the match with removed access keys
const removeMatchKeys = (match) => {
    if (match) return { ...match, keys: null }
}

//takes a key and returns a corresponding match if the key is the admin key. otherwises throws exception
const confirmMatchAdmin = (key) => {
    const match = matches[findMatchIndexByKey(key)]
    if (match.keys.admin !== key) throw 'Error: This is not an Admin Key'
    return match
}

const publishMatchUpdate = (match) => {
    pubsub.publish('MATCH_UPDATED', match)
}

const modeFrequency = (arr1) => {
    let mf = 1;
    let m = 0;
    let item;
    for (let i = 0; i < arr1.length; i++) {
        for (let j = i; j < arr1.length; j++) {
            if (arr1[i] == arr1[j])
                m++;
            if (mf < m) {
                mf = m;
                item = arr1[i];
            }
        }
        m = 0;
    }
    return mf
}

const resolvers = {
    Query: {
        getAllMatches: (root, args) => matches,
        getMatch: (root, args) => {
            const index = findMatchIndexByKey(args.key)
            const match = matches[index]
            return args.key === match.keys.admin ? match : removeMatchKeys(match)
        }
    },
    Mutation: {
        createMatch: (_root, args) => {
            const IDL = 8 //lenght of access keys
            //generate access keys
            const Keys = {
                team1: nanoid(IDL),
                team2: nanoid(IDL),
                admin: nanoid(IDL),
                spectate: nanoid(IDL)
            }

            //handle args
            const Team1 = { name: args.team1Name, side: "A", logo: args.team1Logo}
            const Team2 = { name: args.team2Name, side: "D", logo: args.team2Logo }
            const Format = {
                playersPerTeam: args.playersPerTeam,
                tankPickOrder: args.tankPickOrder,
                noahsArkCount: args.noahsArkCount
            }
            const TankPicks = { attack: [], defense: [] }
            const match = {
                teams: [Team1, Team2],
                format: Format,
                keys: Keys,
                id: 5,
                turn: 0,
                tankPicks: TankPicks
            }
            matches = matches.concat(match)
            return match
        },
        pickTanks: (_root, args) => {
            const index = findMatchIndexByKey(args.key)
            const match = matches[index]

            if (args.key !== match.keys.team1 && args.key !== match.keys.team2 && args.key !== match.keys.admin) throw 'Error: Action Denied. Key is not valid'

            const turnNum = match.turn
            const pickedTanks = args.tanks
            const tankPickOrder = match.format.tankPickOrder

            if (!tankPickOrder[turnNum]) throw 'UwU: SENPAI YAMETE KUDASAI. PLEASE RESET ME!'

            const expectedTanks = tankPickOrder[turnNum].charAt(0)
            const expectedTurn = tankPickOrder[turnNum].charAt(1)

            if (pickedTanks.length != expectedTanks)
                throw `Error: Expected array length of ${expectedTanks} for TANKS. Recieved an array of length ${pickedTanks.length}`

            const teamIndex = match.keys.team1 === args.key ? 0 : 1
            if (args.key !== match.keys.admin && expectedTurn !== match.teams[teamIndex].side)
                throw 'Error: Invalid Key. You do not have permssion to pick tanks at this time.'

            const testNoahsArk = (newPicks) => {
                if (modeFrequency(newPicks) > match.format.noahsArkCount) throw 'Error: Tank selection breaks the Noahs Ark Limit'
            }

            switch (expectedTurn) {
                case 'A':
                    const newAPicks = match.tankPicks.attack.concat(pickedTanks)
                    testNoahsArk(newAPicks)
                    match.tankPicks.attack = newAPicks
                    break;
                case 'D':
                    const newDPicks = match.tankPicks.defense.concat(pickedTanks)
                    testNoahsArk(newDPicks)
                    match.tankPicks.defense = newDPicks
                    break;
                default:
                    throw 'Error: Something went wrong on the backend.'
            }

            match.turn = match.turn + 1
            publishMatchUpdate(match)
            return 'Operation Successful'
        },
        AdminResetRound: (_root, args) => {
            const match = confirmMatchAdmin(args.key)
            match.tankPicks = { attack: [], defense: [] }
            match.turn = 0
            if (args.switchSides)
                match.teams[0].side = [match.teams[1].side, match.teams[1].side = match.teams[0].side][0]
            publishMatchUpdate(match)
            return 'Operation Successful'
        },
    },
    Subscription: {
        matchUpdated: {
            resolve: (payload) => {
                return removeMatchKeys(payload)
            },
            subscribe: withFilter(
                () => pubsub.asyncIterator('MATCH_UPDATED'),
                (m, vars) => {
                    const keys = [m.keys.team1, m.keys.team2, m.keys.admin, m.keys.spectate]
                    return (keys.includes(vars.key))
                }
            )
        }
    }
}

module.exports = resolvers