const { gql } = require('apollo-server-express')
const typeDefs = gql`
  type Match {
    maps: [String]
    tankPicks: TankPicks
    format: Format
    teams: [Team]
    keys: Keys
    turn: String
    MatchDataExportable: MatchDataExportable
  }
  
  type MatchDataExportable {
    tankPicks: [TankPicks]
  }

  type TankPicks {
    attack: [String]
    defense: [String]
  }

  type Format {
    playersPerTeam: Int
    tankPickOrder: [String]!
    noahsArkCount: Int!
  }

  type Team {
    name: String
    side: String
    logo: String
  }

  type Keys {
    team1: String
    team2: String
    admin: String
    spectate: String
  }

  type Query {
    getMatch(key: String!): Match
    getAllMatches: [Match]
  }

  type Mutation {
    createMatch(
      team1Name: String!
      team2Name: String!
      team1Logo: String!
      team2Logo: String!
      playersPerTeam: Int!
      tankPickOrder: [String]!
      noahsArkCount: Int!

    ): Match
    pickTanks(
      key: String!
      tanks: [String]!
    ): String
    AdminResetRound(
      key: String!
      switchSides: Boolean!
    ): String
  }

  type Subscription {
    matchUpdated(key: String!): Match!
  }
`

module.exports = typeDefs