export function PhylloConnect() {
    "use strict";
    var e = {
      d: (o, t) => {
        for (var n in t) e.o(t, n) && !e.o(o, n) && Object.defineProperty(o, n, {
          enumerable: !0,
          get: t[n]
        });
      },
      o: (e, o) => Object.prototype.hasOwnProperty.call(e, o),
      r: e => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
          value: "Module"
        }), Object.defineProperty(e, "__esModule", {
          value: !0
        })
      }
    };
    var o = {};
    e.r(o), e.d(o, {
      clientConnect: () => s,
      initialize: () => i,
      version: () => d
    });
    const t = {
      sandbox: "https://connect.sandbox.getphyllo.com",
      production: "https://connect.getphyllo.com",
      preprod: "https://connect.preprod.getphyllo.com",
      staging: "https://connect.staging.getphyllo.com",
      dev: "https://connect.dev.getphyllo.com",
      dev2: "https://connect.dev2.getphyllo.com",
      dev3: "https://connect.dev3.getphyllo.com",
      dev4: "https://connect.dev4.getphyllo.com"
    };
    const n = ["en", "id", "ja", "cn"];
    const r = {
      callbackName: "tokenExpired",
      argsArr: ["userId"],
      argsLength: 1
    };
    const l = {
      callbackName: "exit",
      argsArr: ["reason", "userId"],
      argsLength: 2
    };
    const a = {
      mandatoryCallbacks: new Array({
        callbackName: "accountConnected",
        argsArr: ["accountId", "workplatformId", "userId"],
        argsLength: 3
      }, {
        callbackName: "accountDisconnected",
        argsArr: ["accountId", "workplatformId", "userId"],
        argsLength: 3
      }, r, l),
      optionalCallbacks: new Array({
        callbackName: "connectionFailure",
        argsArr: ["reason", "workplatformId", "userId"],
        argsLength: 3
      })
    };
    const c = e => {
      if (!e.env || !Object.keys(t).includes(e.env)) throw new Error("Please provide a valid environment in config");
      if (!e.userId) throw new Error("Please provide a user id in config");
      if (!e.appName) throw new Error("Please provide an app name in config");
      if (!e.token) throw new Error("Please add a token in config")
    };
    const s = async (e, o, n, r, l = null) => {
      try {
        return c({
          env: e,
          userId: o,
          token: n,
          appName: r
        }), `${t[e]}?userId=${o}&appName=${r}&workPlatformId=${l}&redirectURL=${window.location.href}&token=${n}&env=${e}`
      } catch (e) {
        console.error(e)
      }
    };
    const d = () => ({
      connect_web_sdk_version: "2.1.0"
    });
    const i = e => {
      var o = e.environment,
        s = e.userId,
        d = e.token,
        i = e.clientDisplayName,
        p = e.workPlatformId ? e.workPlatformId : null,
        m = !!e.mobile,
        h = e.mobileVersion ? e.mobileVersion : null,
        g = e.sdk ? e.sdk : "web",
        u = e.redirect,
        y = e.redirectURL ? e.redirectURL : null,
        f = !!e.singleAccount,
        b = e.language,
        k = {};
      [...a.mandatoryCallbacks, ...a.optionalCallbacks].forEach((e => {
        k[e.callbackName] = null
      }));
      try {
        if (c({
            env: o,
            userId: s,
            token: d,
            appName: i
          }), u = !!u) {
          if (!y) throw new Error("Please provide a redirectURL in config for the redirect flow");
          y = encodeURIComponent(y)
        } else if (y) throw new Error("Please set the redirect param along with the redirect URL in config for the redirect flow");
        if (b || (b = n[0]), b && !n.includes(b)) throw new Error("Invalid language type. Only en, id are supported. Please refer to docs.getphyllo.com");
        return {
          open: () => {
            var e;
            u ? (e = `${t[o]}?userId=${s}&appName=${i}&workPlatformId=${p}&redirectURL=${y}&token=${d}&env=${o}&singleAccount=${f}&language=${b}&version=2`, window.location.href = e) : ((e => {
              const o = Object.keys(e);
              for (var t = 0; t < o.length; t++) {
                if (!e[o[t]] && a.mandatoryCallbacks.filter((e => e.callbackName === o[t])).length > 0) throw new Error("Please add the callback: " + o[t]);
                if (e[o[t]] && e[o[t]].length < [...a.mandatoryCallbacks, ...a.optionalCallbacks].filter((e => e.callbackName === o[t]))[0].argsLength) throw new Error("Please add the required number of parameters in callback: " + o[t])
              }
            })(k), ((e, o) => {
              const n = c => {
                if (c.origin !== t[o]) return;
                const s = c.data;
                if (Object.keys(s)[0] !== l.callbackName && Object.keys(s)[0] !== r.callbackName || (document.getElementsByClassName("modal-phyllo")[0].remove(), window.removeEventListener("message", n)), !(Object.keys(s)[0] in e) || null !== e[Object.keys(s)[0]]) {
                  const o = Object.values(s)[0],
                    t = [...a.mandatoryCallbacks, ...a.optionalCallbacks].filter((e => e.callbackName === Object.keys(s)[0]))[0].argsArr,
                    n = [];
                  for (var d = 0; d < t.length; d++) t[d] in o ? n.push(o[t[d]]) : n.push(null);
                  e[Object.keys(s)[0]](...n)
                }
              };
              window.addEventListener("message", n)
            })(k, o), (e => {
              var o, t = document.createElement("div");
              t.className = "modal-phyllo", (o = document.createElement("style")).innerText = "\n.modal-phyllo {\n  position: fixed; /* Stay in place */\n  z-index: 2147483647; /* Sit on top */\n  /* padding-top: 100px; Location of the box */\n  left: 0;\n  top: 0;\n  width: 100%; /* Full width */\n  height: 100%; /* Full height */\n  overflow: auto; /* Enable scroll if needed */\n}", document.head.appendChild(o);
              var n = document.createElement("iframe");
              n.src = e, n.width = "100%", n.height = "100%", n.allowtransparency = "true", n.style.border = "none", n.allow = "fullscreen self https://connect.dev.getphyllo.com https://connect.dev2.getphyllo.com https://connect.dev3.getphyllo.com https://connect.dev4.getphyllo.com https://connect.sandbox.getphyllo.com https://connect.preprod.getphyllo.com https://connect.staging.getphyllo.com https://connect.getphyllo.com", n.allowFullscreen = "true", t.appendChild(n), document.body.appendChild(t), t.style.display = "block"
            })(e = `${t[o]}?userId=${s}&appName=${i}&workPlatformId=${p}&redirectURL=null&token=${d}&env=${o}&mobile=${m}&mobileVersion=${h}&sdk=${g}&singleAccount=${f}&language=${b}&version=2`))
          },
          exit: () => {
            document.getElementsByClassName("modal-phyllo")[0].remove()
          },
          on: (e, o) => {
            k[e] = o
          }
        }
      } catch (e) {
        console.error(e)
      }
    };
    return o;
  }
  