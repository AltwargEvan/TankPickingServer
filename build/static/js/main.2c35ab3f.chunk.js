(this.webpackJsonpclient = this.webpackJsonpclient || []).push([
  [0],
  {
    109: function (t, a, s) {
      "use strict";
      s.r(a);
      var e,
        n,
        c,
        g,
        m,
        i,
        r = s(3),
        p = s(68),
        o = s.n(p),
        l = s(56),
        h = s(11),
        d = s(35),
        k = s.n(d),
        u = s(43),
        _ = s(12),
        b = s(28),
        j = s(121),
        O = s(124),
        I = s(2),
        f = Object(j.a)(
          e ||
            (e = Object(b.a)([
              "\nmutation createMatch($T1Name: String!, $T2Name: String!, $PlayersPerTeam: Int!, $TankPickOrder: [String]!, $NoahsArkCount: Int!, $T1Logo: String!, $T2Logo: String!) {\n  createMatch(team1Name: $T1Name, team2Name: $T2Name, playersPerTeam: $PlayersPerTeam, tankPickOrder: $TankPickOrder, noahsArkCount: $NoahsArkCount, team1Logo: $T1Logo, team2Logo: $T2Logo) {\n    keys {\n      team1\n      team2\n      admin\n      spectate\n    }\n    teams {\n      name\n    }\n  }\n}\n",
            ]))
        ),
        y = function () {
          var t = Object(O.a)(f),
            a = Object(_.a)(t, 1)[0],
            s = Object(r.useState)("Team 1"),
            e = Object(_.a)(s, 2),
            n = e[0],
            c = (e[1], Object(r.useState)("Team 2")),
            g = Object(_.a)(c, 2),
            m = g[0],
            i =
              (g[1],
              Object(r.useState)(
                "https://cdn.discordapp.com/attachments/629193283091955733/769091738013925386/0reopbN.png"
              )),
            p = Object(_.a)(i, 2),
            o = p[0],
            l = p[1],
            h = Object(r.useState)(
              "https://cdn.discordapp.com/attachments/581953548666011661/768684847388426281/Bear_Force_One_Website.png"
            ),
            d = Object(_.a)(h, 2),
            b = d[0],
            j = d[1],
            y = ["2A", "4D", "3A", "2D", "1A"],
            x = Object(r.useState)(""),
            v = Object(_.a)(x, 2),
            T = v[0],
            M = v[1],
            A = Object(r.useState)(""),
            S = Object(_.a)(A, 2),
            w = S[0],
            C = S[1],
            N = Object(r.useState)(""),
            P = Object(_.a)(N, 2),
            L = P[0],
            K = P[1],
            F = Object(r.useState)(""),
            R = Object(_.a)(F, 2),
            H = R[0],
            $ = R[1],
            G = (function () {
              var t = Object(u.a)(
                k.a.mark(function t() {
                  var s;
                  return k.a.wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (t.prev = 0),
                              (t.next = 3),
                              a({
                                variables: {
                                  T1Name: n,
                                  T2Name: m,
                                  PlayersPerTeam: 6,
                                  TankPickOrder: y,
                                  NoahsArkCount: 2,
                                  T1Logo: o,
                                  T2Logo: b,
                                },
                              })
                            );
                          case 3:
                            (s = t.sent),
                              M(
                                ""
                                  .concat(window.location.href, "team/")
                                  .concat(s.data.createMatch.keys.team1)
                              ),
                              C(
                                ""
                                  .concat(window.location.href, "team/")
                                  .concat(s.data.createMatch.keys.team2)
                              ),
                              K(
                                ""
                                  .concat(window.location.href, "spectate/")
                                  .concat(s.data.createMatch.keys.spectate)
                              ),
                              $(
                                ""
                                  .concat(window.location.href, "admin/")
                                  .concat(s.data.createMatch.keys.admin)
                              ),
                              (t.next = 13);
                            break;
                          case 10:
                            (t.prev = 10),
                              (t.t0 = t.catch(0)),
                              console.log(t.t0.message);
                          case 13:
                          case "end":
                            return t.stop();
                        }
                    },
                    t,
                    null,
                    [[0, 10]]
                  );
                })
              );
              return function () {
                return t.apply(this, arguments);
              };
            })();
          return Object(I.jsxs)(I.Fragment, {
            children: [
              Object(I.jsx)("b", { children: "Team 1 Logo URL:" }),
              " ",
              Object(I.jsx)("input", {
                type: "text",
                value: o,
                onChange: function (t) {
                  l(t.target.value);
                },
              }),
              Object(I.jsx)("br", {}),
              Object(I.jsx)("b", { children: "Team 2 Logo URL:" }),
              " ",
              Object(I.jsx)("input", {
                type: "text",
                value: b,
                onChange: function (t) {
                  j(t.target.value);
                },
              }),
              Object(I.jsx)("br", {}),
              Object(I.jsxs)("div", {
                children: [
                  Object(I.jsx)("button", {
                    onClick: G,
                    children: "create new test match",
                  }),
                  Object(I.jsx)("table", {
                    children: Object(I.jsxs)("tbody", {
                      children: [
                        Object(I.jsxs)("tr", {
                          children: [
                            Object(I.jsx)("th", { children: "Team 1 Key" }),
                            Object(I.jsx)("th", {
                              children: Object(I.jsx)("a", {
                                href: T,
                                target: "_blank",
                                rel: "noreferrer",
                                children: T,
                              }),
                            }),
                          ],
                        }),
                        Object(I.jsxs)("tr", {
                          children: [
                            Object(I.jsx)("th", { children: "Team 2 Key" }),
                            Object(I.jsx)("th", {
                              children: Object(I.jsx)("a", {
                                href: w,
                                target: "_blank",
                                rel: "noreferrer",
                                children: w,
                              }),
                            }),
                          ],
                        }),
                        Object(I.jsxs)("tr", {
                          children: [
                            Object(I.jsx)("th", { children: "Spectator Key" }),
                            Object(I.jsx)("th", {
                              children: Object(I.jsx)("a", {
                                href: L,
                                target: "_blank",
                                rel: "noreferrer",
                                children: L,
                              }),
                            }),
                          ],
                        }),
                        Object(I.jsxs)("tr", {
                          children: [
                            Object(I.jsx)("th", { children: "Admin Key" }),
                            Object(I.jsx)("th", {
                              children: Object(I.jsx)("a", {
                                href: H,
                                target: "_blank",
                                rel: "noreferrer",
                                children: H,
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          });
        },
        x = s(49),
        v =
          (s(66),
          function (t) {
            var a = t.match,
              s = t.tank,
              e = t.side,
              n = t.tankNum,
              c = a.teams[0].side === e ? a.teams[0] : a.teams[1],
              g =
                "A" === e
                  ? a.tankPicks.attack.length
                  : a.tankPicks.defense.length,
              m =
                a.turn < a.format.tankPickOrder.length &&
                e == a.format.tankPickOrder[a.turn].charAt(1) &&
                parseInt(a.format.tankPickOrder[a.turn].charAt(0)) + g > n
                  ? "https://cdn.discordapp.com/attachments/878081032992227390/880259741484449802/noImage.png"
                  : "https://cdn.discordapp.com/attachments/878081032992227390/880259463284686878/player_in_garage_alt.png",
              i = x.Tanks.find(function (t) {
                return t.label === s;
              }),
              r = i ? (i.customImg ? i.customImg : i.tanksggImg) : m,
              p =
                "blue" === c.color
                  ? "https://media.discordapp.net/attachments/517444716082626573/1012358426803830825/Hexagon_Blue.png"
                  : "https://media.discordapp.net/attachments/517444716082626573/1012358427135193169/Hexagon_Red.png";
            return Object(I.jsxs)("div", {
              className: "container",
              children: [
                Object(I.jsx)("h1", { className: "label", children: s }),
                Object(I.jsx)("img", {
                  className: "imageOne tankImg img",
                  src: p,
                }),
                Object(I.jsx)("img", {
                  className: "imageTwo tankImg img",
                  src: r,
                }),
              ],
            });
          }),
        T = function (t) {
          var a = t.match,
            s = t.side,
            e = "A" === s ? a.tankPicks.attack : a.tankPicks.defense,
            n = a.teams[0].side === s ? a.teams[0] : a.teams[1];
          return Object(I.jsxs)(I.Fragment, {
            children: [
              Object(I.jsx)("img", { className: "logo img", src: n.logo }),
              Object(I.jsx)(v, { side: s, tank: e[0], match: a, tankNum: 0 }),
              Object(I.jsx)(v, { side: s, tank: e[1], match: a, tankNum: 1 }),
              Object(I.jsx)(v, { side: s, tank: e[2], match: a, tankNum: 2 }),
              Object(I.jsx)(v, { side: s, tank: e[3], match: a, tankNum: 3 }),
              Object(I.jsx)(v, { side: s, tank: e[4], match: a, tankNum: 4 }),
              Object(I.jsx)(v, { side: s, tank: e[5], match: a, tankNum: 5 }),
            ],
          });
        },
        M =
          (s(84),
          s(67),
          function (t) {
            var a = t.match;
            return Object(I.jsxs)("div", {
              className: "container-spectate",
              children: [
                Object(I.jsx)("div", { className: "Spacer" }),
                Object(I.jsx)("div", {
                  className: "container",
                  children: Object(I.jsx)("img", {
                    className: "sideLogo",
                    src: "https://cdn.discordapp.com/attachments/878081032992227390/887092150477668402/attack.png",
                  }),
                }),
                Object(I.jsx)("div", { className: "Spacer2" }),
                Object(I.jsx)(T, {
                  className: "Attack-Tanks",
                  match: a,
                  side: "A",
                }),
                Object(I.jsx)(T, {
                  className: "Defense-Tanks",
                  match: a,
                  side: "D",
                }),
                Object(I.jsx)("div", { className: "Spacer3" }),
                Object(I.jsx)("div", {
                  className: "container",
                  children: Object(I.jsx)("img", {
                    className: "sideLogo",
                    src: "https://cdn.discordapp.com/attachments/878081032992227390/887092145004093440/defense.png",
                  }),
                }),
                Object(I.jsx)("div", { className: "Spacer4" }),
              ],
            });
          }),
        A = Object(j.a)(
          n ||
            (n = Object(b.a)([
              "\n    query OnGetMatch($userKey: String!) {\n        getMatch(key: $userKey) {\n        tankPicks {\n            attack\n            defense\n        }\n        format {\n            playersPerTeam\n            tankPickOrder\n            noahsArkCount\n        }\n        teams {\n            name\n            side\n            logo\n            color\n        }\n        keys {\n            team1\n            team2\n        }\n        turn\n  }\n}\n",
            ]))
        ),
        S = Object(j.a)(
          c ||
            (c = Object(b.a)([
              "\nsubscription Subscription ($userKey: String!) {\n  matchUpdated(key: $userKey) {\n    tankPicks {\n            attack\n            defense\n        }\n        format {\n            playersPerTeam\n            tankPickOrder\n            noahsArkCount\n        }\n        teams {\n            name\n            side\n            logo\n            color\n        }\n        keys {\n            team1\n            team2\n        }\n        turn\n  }\n}\n",
            ]))
        ),
        w = Object(j.a)(
          g ||
            (g = Object(b.a)([
              "\nmutation OnPickTanks($userKey: String!, $TTA: [String]!) {\n    pickTanks(key: $userKey, tanks: $TTA) \n}\n",
            ]))
        ),
        C = Object(j.a)(
          m ||
            (m = Object(b.a)([
              "\nmutation AdminResetRoundMutation($userKey: String!, $switchSides: Boolean!) {\nAdminResetRound(key: $userKey, switchSides: $switchSides)\n}\n",
            ]))
        ),
        N = Object(j.a)(
          i ||
            (i = Object(b.a)([
              "\nmutation AdminUndoMutation($userKey: String!) {\n  AdminUndo(key: $userKey)\n}\n",
            ]))
        ),
        P = function (t) {
          var a = t.userKey,
            s = Object(O.a)(C),
            e = Object(_.a)(s, 1)[0],
            n = Object(O.a)(N),
            c = Object(_.a)(n, 1)[0],
            g = function (t) {
              e({ variables: { userKey: a, switchSides: t } });
            };
          return Object(I.jsxs)(I.Fragment, {
            children: [
              Object(I.jsx)("button", {
                onClick: function () {
                  c({ variables: { userKey: a } });
                },
                className: "Admin-Reset1",
                children: Object(I.jsx)("h2", { children: "Undo" }),
              }),
              Object(I.jsx)("button", {
                onClick: function () {
                  return g(!1);
                },
                className: "Admin-Reset2",
                children: Object(I.jsx)("h2", { children: "RESET" }),
              }),
              Object(I.jsx)("button", {
                onClick: function () {
                  return g(!0);
                },
                className: "Admin-Reset3",
                children: Object(I.jsx)("h2", {
                  children: "RESET AND SWITCH SIDES",
                }),
              }),
            ],
          });
        },
        L = function (t) {
          t.match;
          var a = t.userKey,
            s = Object(r.useState)("All"),
            e = Object(_.a)(s, 2),
            n = e[0],
            c = e[1],
            g = Object(r.useState)(!1),
            m = Object(_.a)(g, 2),
            i = m[0],
            p = m[1],
            o = function (t) {
              c(n === t ? "All" : t);
            },
            l = Object(r.useState)(""),
            h = Object(_.a)(l, 2),
            d = h[0],
            b = h[1],
            j = Object(r.useState)([]),
            f = Object(_.a)(j, 2),
            y = f[0],
            v = f[1],
            T = Object(O.a)(w),
            M = Object(_.a)(T, 1)[0],
            A = (function () {
              var t = Object(u.a)(
                k.a.mark(function t() {
                  return k.a.wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (t.prev = 0),
                              (t.next = 3),
                              M({ variables: { userKey: a, TTA: y } })
                            );
                          case 3:
                            v([]), (t.next = 9);
                            break;
                          case 6:
                            (t.prev = 6),
                              (t.t0 = t.catch(0)),
                              window.alert(t.t0.message);
                          case 9:
                          case "end":
                            return t.stop();
                        }
                    },
                    t,
                    null,
                    [[0, 6]]
                  );
                })
              );
              return function () {
                return t.apply(this, arguments);
              };
            })(),
            S = function (t) {
              var a = t.tank,
                s = t.index;
              return Object(I.jsxs)("div", {
                children: [
                  Object(I.jsx)("b", { children: a }),
                  Object(I.jsx)("button", {
                    onClick: function () {
                      return (function (t) {
                        if (1 === y.length) v([]);
                        else {
                          var a = y.slice(0, t).concat(y.slice(t + 1));
                          v(a);
                        }
                      })(s);
                    },
                    children: "X",
                  }),
                ],
              });
            };
          return Object(I.jsxs)(I.Fragment, {
            children: [
              Object(I.jsx)("div", {
                className: "Carousel",
                children: x.Tanks.filter(function (t) {
                  return !i || t.isMeta;
                })
                  .filter(function (t) {
                    return (
                      t.label.toLowerCase().includes(d.toLowerCase()) &&
                      ("All" === n || t.class === n)
                    );
                  })
                  .map(function (t) {
                    return Object(I.jsx)("button", {
                      onClick: function () {
                        return v(y.concat(t.label));
                      },
                      children: Object(I.jsx)("h3", { children: t.label }),
                    });
                  }),
              }),
              Object(I.jsxs)("div", {
                className: "Carousel-Filter",
                children: [
                  Object(I.jsx)("button", {
                    onClick: function () {
                      return o("Heavy");
                    },
                    children: "Heavy",
                  }),
                  Object(I.jsx)("button", {
                    onClick: function () {
                      return o("Medium");
                    },
                    children: "Medium",
                  }),
                  Object(I.jsx)("button", {
                    onClick: function () {
                      return o("Light");
                    },
                    children: "Light",
                  }),
                  Object(I.jsx)("button", {
                    onClick: function () {
                      return o("Tank Destroyer");
                    },
                    children: "Tank Destroyer",
                  }),
                  Object(I.jsx)("button", {
                    onClick: function () {
                      return o("Artillery");
                    },
                    children: "Artillery",
                  }),
                  Object(I.jsx)("button", {
                    onClick: function () {
                      return p(!i);
                    },
                    children: "Meta Tanks",
                  }),
                  Object(I.jsx)("button", {
                    onClick: function () {
                      return c("All"), p(!1), void b("");
                    },
                    children: "Reset Filter",
                  }),
                  Object(I.jsx)("input", {
                    type: "text",
                    value: d,
                    onChange: function (t) {
                      b(t.target.value);
                    },
                  }),
                ],
              }),
              Object(I.jsx)("div", {
                className: "Carousel-Selected",
                children: y.map(function (t, a) {
                  return Object(I.jsx)(S, { tank: t, index: a }, a);
                }),
              }),
              Object(I.jsx)("button", {
                className: "Pick-Tanks",
                onClick: A,
                children: Object(I.jsx)("h2", { children: "PICK TANKS" }),
              }),
            ],
          });
        },
        K =
          (s(85),
          function (t) {
            var a = t.match,
              s = t.userKey;
            return (
              console.log("match", a),
              Object(I.jsx)(I.Fragment, {
                children: Object(I.jsxs)("div", {
                  className: "container-admin",
                  children: [
                    Object(I.jsx)(T, {
                      className: "Attack-Tanks",
                      match: a,
                      side: "A",
                    }),
                    Object(I.jsx)(T, {
                      className: "Defense-Tanks",
                      match: a,
                      side: "D",
                    }),
                    Object(I.jsx)(P, { userKey: s }),
                    Object(I.jsx)(L, { match: a, userKey: s }),
                  ],
                }),
              })
            );
          }),
        F = s(122),
        R = s(125),
        H = function () {
          var t = Object(r.useState)(null),
            a = Object(_.a)(t, 2),
            s = a[0],
            e = a[1],
            n = Object(h.f)().key,
            c = Object(h.f)().userType,
            g = Object(F.a)(A, { variables: { userKey: n } }).data;
          Object(r.useEffect)(
            function () {
              g && g.getMatch && e(g.getMatch);
            },
            [g]
          );
          var m = Object(R.a)(S, { variables: { userKey: n } }).data;
          if (
            (Object(r.useEffect)(
              function () {
                m && m.matchUpdated && e(m.matchUpdated);
              },
              [m]
            ),
            !s)
          )
            return "Loading...";
          switch (c) {
            case "admin":
              return Object(I.jsx)(K, { match: s, userKey: n });
            case "spectate":
              return Object(I.jsx)(M, { match: s });
            default:
              return "Page Not Found";
          }
        },
        $ =
          (s(93),
          s(94),
          function () {
            return Object(I.jsx)(I.Fragment, {
              children: Object(I.jsxs)("div", {
                className: "full-screen-div blur-bg",
                children: [
                  Object(I.jsx)(l.a, {
                    children: Object(I.jsxs)(h.c, {
                      children: [
                        Object(I.jsx)(h.a, {
                          path: "/:userType/:key",
                          children: Object(I.jsx)(H, {}),
                        }),
                        Object(I.jsx)(h.a, {
                          path: "/",
                          children: Object(I.jsx)(y, {}),
                        }),
                      ],
                    }),
                  }),
                  Object(I.jsx)("div", { class: "blur" }),
                ],
              }),
            });
          }),
        G = s(119),
        B = s(116),
        D = s(118),
        E = s(120),
        z = s(117),
        V = s(31),
        X = s(73);
      s(95).config();
      var U = new G.a({ uri: "http://wottankpicktool.herokuapp.com/graphql" }),
        q = new X.a({
          uri: "ws://wottankpicktool.herokuapp.com/subscriptions",
          options: { reconnect: !0 },
        }),
        W = Object(B.a)(
          function (t) {
            var a = t.query,
              s = Object(V.e)(a);
            return (
              "OperationDefinition" === s.kind && "subscription" === s.operation
            );
          },
          q,
          U
        ),
        J = new D.a({ cache: new E.a(), link: W });
      o.a.render(
        Object(I.jsx)(z.a, { client: J, children: Object(I.jsx)($, {}) }),
        document.getElementById("root")
      );
    },
    49: function (t, a) {
      t.exports = {
        Maps: [
          {
            label: "Cliff",
            mapImg: "https://stratsketch.com/maps/wot/thumb/18_cliff.jpg",
            active: !0,
            bgImg:
              "https://cdn.discordapp.com/attachments/707746580416954419/851356203442765824/shot_017.jpg",
          },
          {
            label: "Ghost Town",
            mapImg:
              "https://stratsketch.com/maps/wot/thumb/95_lost_city_ctf.jpg",
            active: !1,
          },
          {
            label: "Himmelsdorf",
            mapImg: "https://stratsketch.com/maps/wot/thumb/04_himmelsdorf.jpg",
            active: !0,
            bgImg:
              "https://cdn.discordapp.com/attachments/707746580416954419/851356206924169246/shot_018.jpg",
          },
          {
            label: "Lakeville",
            mapImg: "https://stratsketch.com/maps/wot/thumb/07_lakeville.jpg",
            active: !1,
          },
          {
            label: "Mannerheim Line",
            mapImg:
              "https://stratsketch.com/maps/wot/thumb/38_mannerheim_line.jpg",
            active: !1,
          },
          {
            label: "Mines",
            mapImg: "https://stratsketch.com/maps/wot/thumb/10_hills.jpg",
            bgImg:
              "https://cdn.discordapp.com/attachments/709137404115681312/854948620339380244/shot_005.jpg",
            active: !1,
          },
          {
            label: "Murovanka",
            mapImg: "https://stratsketch.com/maps/wot/thumb/11_murovanka.jpg",
            active: !0,
          },
          {
            label: "Prokhorovka",
            mapImg: "https://stratsketch.com/maps/wot/thumb/05_prohorovka.jpg",
            active: !0,
            bgImg:
              "https://media.discordapp.net/attachments/707746580416954419/851356213634924584/shot_020.jpg",
          },
          {
            label: "Ruinberg",
            mapImg: "https://stratsketch.com/maps/wot/thumb/08_ruinberg.jpg",
            bgImg:
              "https://cdn.discordapp.com/attachments/709137404115681312/854949328690216960/shot_006.jpg",
            active: !1,
          },
          {
            label: "Sand River",
            mapImg: "https://stratsketch.com/maps/wot/thumb/28_desert.jpg",
            active: !0,
            bgImg:
              "https://media.discordapp.net/attachments/707746580416954419/851356213950414878/shot_021.jpg",
          },
          {
            label: "Siegfried Line",
            mapImg:
              "https://stratsketch.com/maps/wot/thumb/14_siegfried_line.jpg",
            active: !1,
          },
          {
            label: "Steppes",
            mapImg: "https://stratsketch.com/maps/wot/thumb/35_steppes.jpg",
            active: !0,
          },
          {
            label: "Tundra",
            mapImg: "https://stratsketch.com/maps/wot/thumb/63_tundra.jpg",
            active: !0,
            bgImg:
              "https://media.discordapp.net/attachments/707746580416954419/851356167778598972/shot_023.jpg",
          },
        ],
        Tanks: [
          {
            label: "AMX 13 105",
            tanksggImg: "https://tanks.gg/img/tanks/france-F88_AMX_13_105.png",
            class: "Light",
            customImg:
              "https://cdn.discordapp.com/attachments/883788051564855336/883803217836785734/f88_amx_13_105_image2.png",
          },
          {
            label: "Manticore",
            tanksggImg: "https://tanks.gg/img/tanks/uk-GB100_Manticore.png",
            class: "Light",
            customImg:
              "https://cdn.discordapp.com/attachments/883788051564855336/883793346814955560/gb100_manticore_image2.png",
          },
          {
            label: "Rhm. Pzw.",
            tanksggImg: "https://tanks.gg/img/tanks/germany-G125_Spz_57_Rh.png",
            class: "Light",
            customImg:
              "https://cdn.discordapp.com/attachments/883788051564855336/883807095235960942/g125_spz_57_rh_image2.png",
          },
          {
            label: "T-100 LT",
            tanksggImg: "https://tanks.gg/img/tanks/ussr-R132_VNII_100LT.png",
            class: "Light",
            customImg:
              "https://cdn.discordapp.com/attachments/883788051564855336/883796694108618792/r132_vnii_100lt_image2.png",
            isMeta: !0,
          },
          {
            label: "WZ-132-1",
            tanksggImg:
              "https://tanks.gg/img/tanks/china-Ch29_Type_62C_prot.png",
            class: "Light",
            customImg:
              "https://cdn.discordapp.com/attachments/883788051564855336/883800587374854194/ch29_type_62c_prot_image2.png",
          },
          {
            label: "Sheridan",
            tanksggImg: "https://tanks.gg/img/tanks/usa-A116_XM551.png",
            class: "Light",
            customImg:
              "https://cdn.discordapp.com/attachments/883788051564855336/883799323131908096/a116_xm551_image2.png",
          },
          {
            label: "121",
            tanksggImg: "https://tanks.gg/img/tanks/china-Ch19_121.png",
            class: "Medium",
            customImg:
              "https://cdn.discordapp.com/attachments/883788051564855336/883800122390093874/ch19_121_image2.png",
          },
          {
            label: "AMX 30 B",
            tanksggImg: "https://tanks.gg/img/tanks/france-F72_AMX_30.png",
            class: "Medium",
            customImg:
              "https://cdn.discordapp.com/attachments/883788051564855336/883805170776047646/f72_amx_30_image2.png",
          },
          {
            label: "B-C 25t",
            tanksggImg:
              "https://tanks.gg/img/tanks/france-F18_Bat_Chatillon25t.png",
            class: "Medium",
            customImg:
              "https://cdn.discordapp.com/attachments/883788051564855336/883802358616842260/f18_bat_chatillon25t_image2.png",
            isMeta: !0,
          },
          {
            label: "Cent. AX",
            tanksggImg:
              "https://tanks.gg/img/tanks/uk-GB86_Centurion_Action_X.png",
            class: "Medium",
            customImg:
              "https://cdn.discordapp.com/attachments/883788051564855336/883812495926648832/gb86_centurion_action_x_image2.png",
          },
          {
            label: "CS-63",
            tanksggImg: "https://tanks.gg/img/tanks/poland-Pl21_CS_63.png",
            class: "Medium",
            customImg:
              "https://cdn.discordapp.com/attachments/883788051564855336/883810413685383238/pl21_cs_63_image2.png",
            isMeta: !0,
          },
          {
            label: "E 50 Ausf. M",
            tanksggImg: "https://tanks.gg/img/tanks/germany-G73_E50_Ausf_M.png",
            class: "Medium",
            customImg:
              "https://cdn.discordapp.com/attachments/883788051564855336/883806657547739186/g73_e50_ausf_m_image2.png",
          },
          {
            label: "K-91",
            tanksggImg: "https://tanks.gg/img/tanks/ussr-R144_K_91.png",
            class: "Medium",
            customImg:
              "https://cdn.discordapp.com/attachments/883788051564855336/883796719593214003/r144_k_91_image2.png",
          },
          {
            label: "Leopard 1",
            tanksggImg: "https://tanks.gg/img/tanks/germany-G89_Leopard1.png",
            class: "Medium",
            customImg:
              "https://cdn.discordapp.com/attachments/883788051564855336/883806770047357039/g89_leopard1_image2.png",
          },
          {
            label: "M48A5 Patton",
            tanksggImg: "https://tanks.gg/img/tanks/usa-A120_M48A5.png",
            class: "Medium",
            customImg:
              "https://cdn.discordapp.com/attachments/883788051564855336/883799475699712040/a120_m48a5_image2.png",
          },
          {
            label: "Object 140",
            tanksggImg: "https://tanks.gg/img/tanks/ussr-R97_Object_140.png",
            class: "Medium",
            customImg:
              "https://cdn.discordapp.com/attachments/883788051564855336/883793687010758666/r97_object_140_image2.png",
          },
          {
            label: "Object 430U",
            tanksggImg: "https://tanks.gg/img/tanks/ussr-R148_Object_430_U.png",
            class: "Medium",
            customImg:
              "https://cdn.discordapp.com/attachments/883788051564855336/883793726164582400/r148_object_430_u_image2.png",
          },
          {
            label: "Progetto 65",
            tanksggImg:
              "https://tanks.gg/img/tanks/italy-It08_Progetto_M40_mod_65.png",
            class: "Medium",
            customImg:
              "https://cdn.discordapp.com/attachments/883788051564855336/883792288394932264/it08_progetto_m40_mod_65_image2.png",
          },
          {
            label: "STB-1",
            tanksggImg: "https://tanks.gg/img/tanks/japan-J16_ST_B1.png",
            class: "Medium",
            customImg:
              "https://cdn.discordapp.com/attachments/883788051564855336/883808550818836520/j16_st_b1_image2.png",
            isMeta: !0,
          },
          {
            label: "T-62A",
            tanksggImg: "https://tanks.gg/img/tanks/ussr-R87_T62A.png",
            class: "Medium",
            customImg:
              "https://cdn.discordapp.com/attachments/883788051564855336/883793676680192100/r87_t62a_image2.png",
          },
          {
            label: "TVP T 50/51",
            tanksggImg: "https://tanks.gg/img/tanks/czech-Cz04_T50_51.png",
            class: "Medium",
            customImg:
              "https://cdn.discordapp.com/attachments/883788051564855336/883791305514299462/cz04_t50_51_image2.png",
          },
          {
            label: "UDES 15/16",
            tanksggImg: "https://tanks.gg/img/tanks/sweden-S28_UDES_15_16.png",
            class: "Medium",
            customImg:
              "https://cdn.discordapp.com/attachments/883788051564855336/883810827164057620/s28_udes_15_16_image2.png",
          },
          {
            label: "113",
            tanksggImg: "https://tanks.gg/img/tanks/china-Ch22_113.png",
            class: "Heavy",
            customImg:
              "https://cdn.discordapp.com/attachments/883788051564855336/883800171027239003/ch22_113_image2.png",
            isMeta: !0,
          },
          {
            label: "60TP",
            tanksggImg:
              "https://tanks.gg/img/tanks/poland-Pl15_60TP_Lewandowskiego.png",
            class: "Heavy",
            customImg:
              "https://cdn.discordapp.com/attachments/883788051564855336/883810411869245460/pl15_60tp_lewandowskiego_image2.png",
          },
          {
            label: "AMX 50 B",
            tanksggImg: "https://tanks.gg/img/tanks/france-F10_AMX_50B.png",
            class: "Heavy",
            customImg:
              "https://cdn.discordapp.com/attachments/883788051564855336/883802074805051463/f10_amx_50b_image2.png",
            isMeta: !0,
          },
          {
            label: "AMX M4 54",
            tanksggImg:
              "https://tanks.gg/img/tanks/france-F82_AMX_M4_Mle1949_Ter.png",
            class: "Heavy",
            customImg:
              "https://cdn.discordapp.com/attachments/883788051564855336/883803450415120424/f82_amx_m4_mle1949_ter_image2.png",
            isMeta: !0,
          },
          {
            label: "E 100",
            tanksggImg: "https://tanks.gg/img/tanks/germany-G56_E-100.png",
            class: "Heavy",
            customImg:
              "https://cdn.discordapp.com/attachments/883788051564855336/883806049470148678/g56_e-100_image2.png",
            isMeta: !0,
          },
          {
            label: "IS-4",
            tanksggImg: "https://tanks.gg/img/tanks/ussr-R90_IS_4M.png",
            class: "Heavy",
            customImg:
              "https://cdn.discordapp.com/attachments/883788051564855336/883796515355783268/r90_is_4m_image2.png",
            isMeta: !0,
          },
          {
            label: "IS-7",
            tanksggImg: "https://tanks.gg/img/tanks/ussr-R45_IS-7.png",
            class: "Heavy",
            customImg:
              "https://cdn.discordapp.com/attachments/883788051564855336/883795957093912586/r45_is-7_image2.png",
            isMeta: !0,
          },
          {
            label: "Kranvagn",
            tanksggImg: "https://tanks.gg/img/tanks/sweden-S16_Kranvagn.png",
            class: "Heavy",
            customImg:
              "https://cdn.discordapp.com/attachments/883788051564855336/883810829542240316/s16_kranvagn_image2.png",
            isMeta: !0,
          },
          {
            label: "Maus",
            tanksggImg: "https://tanks.gg/img/tanks/germany-G42_Maus.png",
            class: "Heavy",
            customImg:
              "https://cdn.discordapp.com/attachments/883788051564855336/883805810692591616/g42_maus_image2.png",
          },
          {
            label: "Object 277",
            tanksggImg: "https://tanks.gg/img/tanks/ussr-R155_Object_277.png",
            class: "Heavy",
            customImg:
              "https://cdn.discordapp.com/attachments/883788051564855336/883797306820931584/r155_object_277_image2.png",
            isMeta: !0,
          },
          {
            label: "Object 705A",
            tanksggImg: "https://tanks.gg/img/tanks/ussr-R145_Object_705_A.png",
            class: "Heavy",
            customImg:
              "https://cdn.discordapp.com/attachments/883788051564855336/883793719776665680/r145_object_705_a_image2.png",
          },
          {
            label: "Pz.Kpfw. VII",
            tanksggImg:
              "https://tanks.gg/img/tanks/germany-G134_PzKpfw_VII.png",
            class: "Heavy",
            customImg:
              "https://cdn.discordapp.com/attachments/883788051564855336/883807096234192936/g134_pzkpfw_vii_image2.png",
          },
          {
            label: "Rinoceronte",
            tanksggImg: "https://tanks.gg/img/tanks/italy-It15_Rinoceronte.png",
            class: "Heavy",
            customImg:
              "https://cdn.discordapp.com/attachments/883788051564855336/883807624657772624/it15_rinoceronte_image2.png",
          },
          {
            label: "ST-II",
            tanksggImg: "https://tanks.gg/img/tanks/ussr-R169_ST_II.png",
            class: "Heavy",
            customImg:
              "https://cdn.discordapp.com/attachments/883788051564855336/883793735681454150/r169_st_ii_image2.png",
          },
          {
            label: "S. Conqueror",
            tanksggImg:
              "https://tanks.gg/img/tanks/uk-GB91_Super_Conqueror.png",
            class: "Heavy",
            customImg:
              "https://cdn.discordapp.com/attachments/883788051564855336/883812658917302312/gb91_super_conqueror_image2.png",
            isMeta: !0,
          },
          {
            label: "Minotauro",
            tanksggImg: "https://tanks.gg/img/tanks/italy-It23_CC_3.png",
            class: "Tank Destroyer",
            customImg: "https://tanks.gg/img/tanks/italy-It23_CC_3.png",
            isMeta: !0,
          },
          {
            label: "T110E5",
            tanksggImg: "https://tanks.gg/img/tanks/usa-A69_T110E5.png",
            class: "Heavy",
            customImg:
              "https://cdn.discordapp.com/attachments/883788051564855336/883798946219167786/a69_t110e5_image2.png",
          },
          {
            label: "T57 Heavy",
            tanksggImg: "https://tanks.gg/img/tanks/usa-A67_T57_58.png",
            class: "Heavy",
            customImg:
              "https://cdn.discordapp.com/attachments/883788051564855336/883797925623398400/a67_t57_58_image2.png",
          },
          {
            label: "Type 5 Heavy",
            tanksggImg: "https://tanks.gg/img/tanks/japan-J20_Type_2605.png",
            class: "Heavy",
            customImg:
              "https://cdn.discordapp.com/attachments/883788051564855336/883808024425300058/j20_type_2605_image2.png",
          },
          {
            label: "WZ-111 5A",
            tanksggImg: "https://tanks.gg/img/tanks/china-Ch41_WZ_111_5A.png",
            class: "Heavy",
            customImg:
              "https://cdn.discordapp.com/attachments/883788051564855336/883800454549635132/ch41_wz_111_5a_image2.png",
          },
          {
            label: "Foch B",
            tanksggImg:
              "https://tanks.gg/img/tanks/france-F64_AMX_50Fosh_B.png",
            class: "Tank Destroyer",
            customImg:
              "https://cdn.discordapp.com/attachments/883788051564855336/883802991168204882/f64_amx_50fosh_b_image2.png",
          },
          {
            label: "FV215b",
            tanksggImg: "https://tanks.gg/img/tanks/uk-GB13_FV215b.png",
            class: "Heavy",
            customImg:
              "https://cdn.discordapp.com/attachments/883788051564855336/883812053142356028/gb13_fv215b_image2.png",
          },
          {
            label: "Foch 155",
            tanksggImg:
              "https://tanks.gg/img/tanks/france-F64_AMX_50Fosh_155.png",
            class: "Tank Destroyer",
            customImg:
              "https://media.discordapp.net/attachments/883788051564855336/883802705766809600/f64_amx_50fosh_155_image2.png?width=784&height=670",
          },
          {
            label: "FV215b 183",
            tanksggImg: "https://tanks.gg/img/tanks/uk-GB48_FV215b_183.png",
            class: "Tank Destroyer",
            customImg:
              "https://cdn.discordapp.com/attachments/883788051564855336/883812269635551252/gb48_fv215b_183_image2.png",
          },
          {
            label: "FV217 Badger",
            tanksggImg: "https://tanks.gg/img/tanks/uk-GB92_FV217.png",
            class: "Tank Destroyer",
            customImg:
              "https://cdn.discordapp.com/attachments/883788051564855336/883812745663893554/gb92_fv217_image2.png",
          },
          {
            label: "FV4005",
            tanksggImg: "https://tanks.gg/img/tanks/uk-GB83_FV4005.png",
            class: "Tank Destroyer",
            customImg:
              "https://cdn.discordapp.com/attachments/883788051564855336/883812356151447612/gb83_fv4005_image2.png",
          },
          {
            label: "Grille 15",
            tanksggImg:
              "https://tanks.gg/img/tanks/germany-G121_Grille_15_L63.png",
            class: "Tank Destroyer",
            customImg:
              "https://cdn.discordapp.com/attachments/883788051564855336/883807097643475004/g121_grille_15_l63_image2.png",
          },
          {
            label: "Jg.Pz. E 100",
            tanksggImg:
              "https://tanks.gg/img/tanks/germany-G72_JagdPz_E100.png",
            class: "Tank Destroyer",
            customImg:
              "https://cdn.discordapp.com/attachments/883788051564855336/883806446960119858/g72_jagdpz_e100_image2.png",
          },
          {
            label: "Obj. 268",
            tanksggImg: "https://tanks.gg/img/tanks/ussr-R88_Object268.png",
            class: "Tank Destroyer",
            customImg:
              "https://cdn.discordapp.com/attachments/883788051564855336/883796377426087976/r88_object268_image2.png",
          },
          {
            label: "Obj. 268 4",
            tanksggImg: "https://tanks.gg/img/tanks/ussr-R149_Object_268_4.png",
            class: "Tank Destroyer",
            customImg:
              "https://cdn.discordapp.com/attachments/883788051564855336/883793729104781352/r149_object_268_4_image2.png",
          },
          {
            label: "Strv 103B",
            tanksggImg: "https://tanks.gg/img/tanks/sweden-S11_Strv_103B.png",
            class: "Tank Destroyer",
            customImg:
              "https://cdn.discordapp.com/attachments/883788051564855336/883811052465291294/s11_strv_103b_image2.png",
          },
          {
            label: "T110E3",
            tanksggImg: "https://tanks.gg/img/tanks/usa-A85_T110E3.png",
            class: "Tank Destroyer",
            customImg:
              "https://cdn.discordapp.com/attachments/883788051564855336/883798328670842980/a85_t110e3_image2.png",
          },
          {
            label: "T110E4",
            tanksggImg: "https://tanks.gg/img/tanks/usa-A83_T110E4.png",
            class: "Tank Destroyer",
            customImg:
              "https://cdn.discordapp.com/attachments/883788051564855336/883798278502748261/a83_t110e4_image2.png",
          },
          {
            label: "WZ-113G FT",
            tanksggImg: "https://tanks.gg/img/tanks/china-Ch38_WZ113G_FT.png",
            class: "Tank Destroyer",
            customImg:
              "https://cdn.discordapp.com/attachments/883788051564855336/883800300190855268/ch38_wz113g_ft_image2.png",
          },
          {
            label: "B-C 155 58",
            tanksggImg:
              "https://tanks.gg/img/tanks/france-F38_Bat_Chatillon155_58.png",
            class: "Artillery",
            customImg:
              "https://cdn.discordapp.com/attachments/883788051564855336/883791467280203816/f38_bat_chatillon155_58_image2.png",
          },
          {
            label: "ConquerorGC",
            tanksggImg: "https://tanks.gg/img/tanks/uk-GB31_Conqueror_Gun.png",
            class: "Artillery",
            customImg:
              "https://cdn.discordapp.com/attachments/883788051564855336/883812153163939961/gb31_conqueror_gun_image2.png",
          },
          {
            label: "G.W. E 100",
            tanksggImg: "https://tanks.gg/img/tanks/germany-G61_G_E.png",
            class: "Artillery",
            customImg:
              "https://cdn.discordapp.com/attachments/883788051564855336/883806315560968272/g61_g_e_image2.png",
          },
          {
            label: "Object 261",
            tanksggImg: "https://tanks.gg/img/tanks/ussr-R52_Object_261.png",
            class: "Artillery",
            customImg:
              "https://cdn.discordapp.com/attachments/883788051564855336/883793675132469308/r52_object_261_image2.png",
          },
          {
            label: "T92 HMC",
            tanksggImg: "https://tanks.gg/img/tanks/usa-A38_T92.png",
            class: "Artillery",
            customImg:
              "https://cdn.discordapp.com/attachments/883788051564855336/883799074875256893/a38_t92_image2.png",
          },
          {
            label: "Vz. 55",
            tanksggImg: "https://tanks.gg/img/tanks/czech-Cz17_Vz_55.png",
            class: "Heavy",
            customImg:
              "https://cdn.discordapp.com/attachments/883788051564855336/883800986211192852/cz17_vz_55_image2.png",
            isMeta: !0,
          },
        ],
      };
    },
    66: function (t, a, s) {},
    67: function (t, a, s) {},
    84: function (t, a, s) {},
    85: function (t, a, s) {},
    93: function (t, a, s) {},
    94: function (t, a, s) {},
  },
  [[109, 1, 2]],
]);
//# sourceMappingURL=main.2c35ab3f.chunk.js.map
