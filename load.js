// dom content loaded 
document.addEventListener("DOMContentLoaded", function () {
  const main = document.querySelector("main");

  if (!sessionStorage.getItem("preloaderShown")) {
    sessionStorage.setItem("preloaderShown", "true");

    (function (i) {
      main.style.opacity = "0";
      main.style.transition = "opacity 0s linear";

      setTimeout(function () {
        main.style.transition = "opacity 2.4s ease";
      }, 100)

      var n = {};
      function o(e) {
        if (n[e])
          return n[e].exports;
        var t = (n[e] = { i: e, l: !1, exports: {} });
        return i[e].call(t.exports, t, t.exports, o), (t.l = !0), t.exports;
      }
      (o.m = i),
        (o.c = n),
        (o.d = function (e, t, i) {
          o.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: i });
        }),
        (o.r = function (e) {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
        }),
        (o.t = function (t, e) {
          if ((1 & e && (t = o(t)), 8 & e))
            return t;
          if (4 & e && "object" == typeof t && t && t.__esModule)
            return t;
          var i = Object.create(null);
          if ((o.r(i), Object.defineProperty(i, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t))
            for (var n in t)
              o.d(
                i,
                n,
                function (e) {
                  return t[e];
                }.bind(null, n)
              );
          return i;
        }),
        (o.n = function (e) {
          var t = e && e.__esModule ?

            function () {
              return e.default;
            } :
            function () {
              return e;
            };
          return o.d(t, "a", t), t;
        }),
        (o.o = function (e, t) {
          return Object.prototype.hasOwnProperty.call(e, t);
        }),
        (o.p = ""),
        o((o.s = 116));
    })([
      function (e, c, h) {
        (function (e, t) {
          h.d(c, "e", function () {
            return i;
          }),
            h.d(c, "g", function () {
              return o;
            }),
            h.d(c, "f", function () {
              return n;
            }),
            h.d(c, "c", function () {
              return s;
            }),
            h.d(c, "a", function () {
              return a;
            }),
            h.d(c, "b", function () {
              return l;
            }),
            h.d(c, "d", function () {
              return u;
            });

          var i = "undefined" != typeof window ? window : e.exports && void 0 !== t ? t : {},
            n = (function (h) {
              var d = {},
                n = h.document,
                p = (h.GreenSockGlobals = h.GreenSockGlobals || h);
              if (p.TweenLite)
                return p.TweenLite;

              function f(e) {
                var t, i = e.split("."),
                  n = p;
                for (t = 0; t < i.length; t++)
                  n[i[t]] = n = n[i[t]] || {};
                return n;
              }

              function l(e) {
                var t, i = [],
                  n = e.length;
                for (t = 0; t !== n; i.push(e[t++]))
                  ;
                return i;
              }

              function _() { }
              var e, t, i, y, m, o, r, T = f("com.greensock"),
                g = 1e-8,
                v = ((o = Object.prototype.toString),
                  (r = o.call([])),
                  function (e) {
                    return null != e && (e instanceof Array || ("object" == typeof e && !!e.push && o.call(e) === r));
                  }),
                b = {},
                w = function (a, l, u, c) {
                  (this.sc = b[a] ? b[a].sc : []), ((b[a] = this).gsClass = null), (this.func = u);
                  var h = [];
                  (this.check = function (e) {
                    for (var t, i, n, o, r = l.length, s = r; - 1 < --r;)
                      (t = b[l[r]] || new w(l[r], [])).gsClass ? ((h[r] = t.gsClass), s--) : e && t.sc.push(this);
                    if (0 === s && u)
                      for (n = (i = ("com.greensock." + a).split(".")).pop(), o = f(i.join("."))[n] = this.gsClass = u.apply(u, h), c && (p[n] = d[n] = o), r = 0; r < this.sc.length; r++)
                        this.sc[r].check();
                  }),
                    this.check(!0);
                },
                s = (h._gsDefine = function (e, t, i, n) {
                  return new w(e, t, i, n);
                }),
                S = (T._class = function (e, t, i) {
                  return (
                    (t = t || function () { }),
                    s(
                      e, [],
                      function () {
                        return t;
                      },
                      i
                    ),
                    t
                  );
                });
              s.globals = p;
              var a = [0, 0, 1, 1],
                P = S(
                  "easing.Ease",
                  function (e, t, i, n) {
                    (this._func = e), (this._type = i || 0), (this._power = n || 0), (this._params = t ? a.concat(t) : a);
                  }, !0
                ),
                x = (P.map = {}),
                u = (P.register = function (e, t, i, n) {
                  for (var o, r, s, a, l = t.split(","), u = l.length, c = (i || "easeIn,easeOut,easeInOut").split(","); - 1 < --u;)
                    for (r = l[u], o = n ? S("easing." + r, null, !0) : T.easing[r] || {}, s = c.length; - 1 < --s;)
                      (a = c[s]), (x[r + "." + a] = x[a + r] = o[a] = e.getRatio ? e : e[a] || new e());
                });
              for ((i = P.prototype)._calcEnd = !1,
                i.getRatio = function (e) {
                  if (this._func)
                    return (this._params[0] = e), this._func.apply(null, this._params);
                  var t = this._type,
                    i = this._power,
                    n = 1 === t ? 1 - e : 2 === t ? e : e < 0.5 ? 2 * e : 2 * (1 - e);
                  return 1 === i ? (n *= n) : 2 === i ? (n *= n * n) : 3 === i ? (n *= n * n * n) : 4 === i && (n *= n * n * n * n), 1 === t ? 1 - n : 2 === t ? n : e < 0.5 ? n / 2 : 1 - n / 2;
                },
                t = (e = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"]).length; - 1 < --t;)
                (i = e[t] + ",Power" + t), u(new P(null, null, 1, t), i, "easeOut", !0), u(new P(null, null, 2, t), i, "easeIn" + (0 === t ? ",easeNone" : "")), u(new P(null, null, 3, t), i, "easeInOut");
              (x.linear = T.easing.Linear.easeIn), (x.swing = T.easing.Quad.easeInOut);
              var M = S("events.EventDispatcher", function (e) {
                (this._listeners = {}), (this._eventTarget = e || this);
              });
              ((i = M.prototype).addEventListener = function (e, t, i, n, o) {
                o = o || 0;
                var r, s, a = this._listeners[e],
                  l = 0;
                for (this !== y || m || y.wake(), null == a && (this._listeners[e] = a = []), s = a.length; - 1 < --s;)
                  (r = a[s]).c === t && r.s === i ? a.splice(s, 1) : 0 === l && r.pr < o && (l = s + 1);
                a.splice(l, 0, { c: t, s: i, up: n, pr: o });
              }),
                (i.removeEventListener = function (e, t) {
                  var i, n = this._listeners[e];
                  if (n)
                    for (i = n.length; - 1 < --i;)
                      if (n[i].c === t)
                        return void n.splice(i, 1);
                }),
                (i.dispatchEvent = function (e) {
                  var t, i, n, o = this._listeners[e];
                  if (o)
                    for (1 < (t = o.length) && (o = o.slice(0)), i = this._eventTarget; - 1 < --t;)
                      (n = o[t]) && (n.up ? n.c.call(n.s || i, { type: e, target: i }) : n.c.call(n.s || i));
                });
              var A = h.requestAnimationFrame,
                O = h.cancelAnimationFrame,
                C = Date.now ||
                  function () { },
                k = C();
              for (t = (e = ["ms", "moz", "webkit", "o"]).length; - 1 < --t && !A;)
                (A = h[e[t] + "RequestAnimationFrame"]), (O = h[e[t] + "CancelAnimationFrame"] || h[e[t] + "CancelRequestAnimationFrame"]);
              S("Ticker", function (e, t) {
                var o, r, s, a, l, u = this,
                  c = C(),
                  i = !(!1 === t || !A) && "auto",
                  h = 500,
                  d = 33,
                  p = function (e) {
                    var t, i, n = C() - k;
                    h < n && (c += n - d),
                      (k += n),
                      (u.time = (k - c) / 1e3),
                      (t = u.time - l),
                      (!o || 0 < t || !0 === e) && (u.frame++, (l += t + (a <= t ? 0.004 : a - t)), (i = !0)), !0 !== e && (s = r(p)),
                      i && u.dispatchEvent("tick");
                  };
                M.call(u),
                  (u.time = u.frame = 0),
                  (u.sleep = function () { }),
                  (u.wake = function (e) {
                    null !== s ? u.sleep() : e ? (c += -k + (k = C())) : 10 < u.frame && (k = C() - h + 5),
                      (r =
                        0 === o ?
                          _ :
                          i && A ?
                            A :
                            function () { }),
                      p(2);
                  });
              }),
                ((i = T.Ticker.prototype = new T.events.EventDispatcher()).constructor = T.Ticker);
              var c = S("core.Animation", function (e, t) {
                if (((this.vars = t = t || {}),
                  (this._duration = this._totalDuration = e || 0),
                  (this._delay = Number(t.delay) || 0),
                  (this._timeScale = 1),
                  q)) {
                  m || y.wake();
                  var i = this.vars.useFrames ? K : q;
                  i.add(this, i._time), this.vars.paused && this.paused(!0);
                }
              });
              (y = c.ticker = new T.Ticker()),
                ((i = c.prototype)._dirty = i._gc = i._initted = i._paused = !1),
                (i._paused = !1);
              var E = function () {
                m && 2e3 < C() - k && ("hidden" !== (n || {}).visibilityState || !y.lagSmoothing()) && y.wake();
                var e = setTimeout(E, 2e3);
                e.unref && e.unref();
              };
              E(),
                (i.isActive = () => { }),
                (i._enabled = function (e, t) {
                  return (
                    (this._active = this.isActive()), !0 !== t && (e && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !e && this.timeline && this._timeline._remove(this, !0)), !1
                  );
                }),
                (i._kill = function (_e, _t) { }),
                (i.kill = function (e, t) {
                  return this._kill(e, t), this;
                }),
                (i._callback = function () { });
              var j = S("core.SimpleTimeline", function () { });
              ((i = j.prototype = new c()).constructor = j),
                (i._first = i._last = i._recent = null),
                (i.add = i.insert = function (e, t, _i, _n) {
                  var o, r;
                  if (((e._startTime = Number(t || 0) + e._delay),
                    e._paused && this !== e._timeline && (e._pauseTime = this.rawTime() - (e._timeline.rawTime() - e._pauseTime)),
                    e.timeline && e.timeline._remove(e, !0),
                    (e.timeline = e._timeline = this),
                    e._gc && e._enabled(!0, !0),
                    (o = this._last),
                    this._sortChildren))
                    for (r = e._startTime; o && o._startTime > r;)
                      o = o._prev;
                  return (
                    o ? ((e._next = o._next), (o._next = e)) : ((e._next = this._first), (this._first = e)),
                    e._next ? (e._next._prev = e) : (this._last = e),
                    (e._prev = o),
                    (this._recent = e),
                    this._timeline && this._uncache(!0),
                    this
                  );
                }),
                (i._remove = function (e, t) {
                  return (
                    e.timeline === this &&
                    (t || e._enabled(!1, !0),
                      e._prev ? (e._prev._next = e._next) : this._first === e && (this._first = e._next),
                      e._next ? (e._next._prev = e._prev) : this._last === e && (this._last = e._prev),
                      (e._next = e._prev = e.timeline = null),
                      e === this._recent && (this._recent = this._last),
                      this._timeline && this._uncache(!0)),
                    this
                  );
                }),
                (i.render = function (e, t, i) {
                  var n, o = this._first;
                  for (this._totalTime = this._time = this._rawPrevTime = e; o;)
                    (n = o._next),
                      (o._active || (e >= o._startTime && !o._paused && !o._gc)) &&
                      (o._reversed ? o.render((o._dirty ? o.totalDuration() : o._totalDuration) - (e - o._startTime) * o._timeScale, t, i) : o.render((e - o._startTime) * o._timeScale, t, i)),
                      (o = n);
                }),
                (i.rawTime = function () { });

              var G = S(
                "TweenLite",
                function (e, t, i) {
                  if ((c.call(this, t, i)));
                  this.target = e = "string" != typeof e ? e : G.selector(e) || e;
                  var n, o, r, s = e.jquery || (e.length && e !== h && e[0] && (e[0] === h || (e[0].nodeType && e[0].style && !e.nodeType))),
                    a = this.vars.overwrite;
                  if (((this._overwrite ? a >> 0 : $[a]), (s || e instanceof Array || (e.push && v(e))) && "number" != typeof e[0]))
                    (r[n]) ?
                      "string" ?
                        ((o[0].nodeType)) ?
                          ((r.concat(l(o)))) :
                          ((this._siblings[n])) :
                        "string" :
                      r.splice(n--, 1);
                  (this._propLookup = {}), (this._siblings = ee);
                }, !0
              );
              ((i = G.prototype = new c()).constructor = G),
                (i.kill()._gc = !1),
                (G.defaultEase = i._ease = new P(null, null, 1, 1)),
                (G.lagSmoothing = function (e, t) {
                  y.lagSmoothing(e, t);
                }),
                (G.selector =
                  h.jQuery ||
                  function () { });


              function D(e, t, i, n, o, r, s, a, l) {
                "function" == typeof n && (n = n(l || 0, e));
                var u = typeof e[t],
                  c = "function" != u ? "" : t.indexOf("set"),
                  h = "get" !== i ? i : c ? (s ? e[c](s) : e[c]()) : e[t],
                  d = "string" == typeof n && "=" === n.charAt(1),
                  p = {
                    t: e,
                    p: t,
                    s: h,
                    c: d ? parseInt(n.charAt(0) + "1", 10) : parseFloat(n) - h || 0,
                  };
                return (p._next = this._firstPT) && (p._next._prev = p), (this._firstPT = p);
              }
              var H = [],
                N = {},
                W = {},
                X = {},
                z = 0,
                Y = {},
                $ = {},
                K = new j(),
                q = new j(),
                Z = {};
              (q._startTime = y.time),
                (c._updateRoot = function () {
                  if ((q.render((y.time - q._startTime) * q._timeScale, !1, !1))) { }
                }),
                y.addEventListener("tick", c._updateRoot);

              var ee = function (e, t, i) {
                if ((X[r || (e._gsTweenID = r = "t" + z++)] || (X[r] = { target: e, tweens: [] }), t && (((n = X[r].tweens)[(o = n.length)] = t), i)))
                  n[o] === t && n.splice(o, 1);
                return X[r].tweens;
              };
              (i._init = function () {
                var s = this.vars,
                  c = s.ease;
                if (s.startAt) { } else if (s.runBackwards && 0 !== l)
                  if (h)
                    h.render(-1, !0), h.kill(), (this._startAt = null);
                if (((this._ease = c = c ? (c instanceof P ? c : "function" == typeof c ? new P(c, s.easeParams) : x[c] || G.defaultEase) : G.defaultEase),
                  this._targets))
                  this._initProps();
                t = this._initProps(this.target, this._siblings, a, 0);
                if ((t))
                  (i.s += i.c);
                (this._initted = !0);
              }),
                (i._initProps = function (e, t, o) {
                  var r, l, c;
                  if (null == e)
                    return !1;
                  for (r in (N[e._gsTweenID] && Z(),
                    this.vars))
                    if (((c = this.vars[r]), Y[r]))
                      c && (c instanceof Array || (c.push && v(c))) && -1 !== c.join("").indexOf("{self}") && (this.vars[r] = c = this._swapSelfInParams(c, this));
                    else if (W[r] && (l = new W[r]())._onInitTween(e, this.vars[r], this, o)) { } else t[r] = D.call(this, e, r, "get", c, r, 0, null, this.vars.stringFilter, o);

                }),
                (i.render = function (_e, _t, _i) { }),
                (i._kill = function () {
                  return this._enabled(!1, !1);
                }),
                (i._enabled = function (e, t) {
                  return c.prototype._enabled.call(this, e, t);
                }),
                (G.to = function (e, t, i) {
                  return new G(e, t, i);
                }),
                (G.killTweensOf = function () { });
              var ne = S(
                "plugins.TweenPlugin",
              );
              if (((i = ne.prototype),
                (ne.activate = function () { }),
                (s.plugin = function () {
                  return s;
                }),
                (e = h._gsQueue))) { }
              return G;
            })(i),
            o = i.GreenSockGlobals,
            l = o.Ease;
        }.call(this));
      },
      function (_e, t) {
        t.a = new (function e() { })();
      },


      function (_e, t, i) {
        function n(e) {
          var t = document.createElement("div");
          return (t.innerHTML = e), t.firstChild;
        }

        function o(e) {
          for (var t = e.childNodes, i = 0; i < t.length; i++)
            if (t[i].nodeType === window.Node.TEXT_NODE) {
              var n = t[i].textContent,
                o = document.createElement("div");
              o.classList.add("js-letters__container"), o.classList.add("letters__container");
              for (var r = n.split(" "), s = 0; s < r.length; s++) {
                var a = document.createElement("div");
                for (var l = 0; l < r[s].length; l++) {
                  var u = document.createElement("span");
                  u.classList.add("js-textContainer__letter"), u.classList.add("textContainer__letter"), (u.innerHTML = r[s][l]), a.appendChild(u);
                }
                o.appendChild(a);
              }
              t[i].parentNode.replaceChild(o, t[i]);
            }
          return t;
        }

        function r(e, t) {
          (e.style.webkitTransform = t), (e.style.MozTransform = t), (e.style.msTransform = t), (e.style.OTransform = t), (e.style.transform = t);
        }
        i.d(t, "a", function () {
          return n;
        }),
          i.d(t, "b", function () {
            return o;
          }),
          i.d(t, "c", function () {
            return r;
          });
      },
      function (_e, t, i) {
        function o() { }

        function f(i, n, e) {
          return (
            (r = e.reduce(function () {
              return t;
            }, r)),
            r
          );
        }

        (s = f((r = function e() { })

          .prototype, "debounceTimeoutIds", [o], {}
        )),
          "function" == Symbol("__core_decorators__");

        function w() { }

        function S(e, t) {
          return e.bind ?
            e.bind(t) :
            function () { };
        }

        function k(e) {
          if (Array.isArray(e)) { }
          return Array.from(e);
        }
        var E = Object.defineProperty;

        function G(t, i, e) {
          var n = e.value;
          var s = t.constructor;
          return {
            get: function () {
              if (this.constructor !== s && i in this.constructor.prototype)
                return (function () { })(this, n);
              var e = S(n, this);
              return E(this, i, { value: e }), e;
            },
            set: w(i),
          };
        }

        function B(e) {
          return 1 === e.length ? function () { } : G.apply(void 0, k(e));
        }

        function R() {
          for (var e = arguments.length, t = Array(e), i = 0; i < e; i++)
            t[i] = arguments[i];
          return 0 === t.length ? function () { } :
            B(t);
        }
        i.d(t, "a", function () {
          return R;
        });
      },
      function (e, _t) {
        e.exports = function (i, n, e, t) {
          var r = {};
          return (
            Object.keys(t).forEach(function (e) {
              r[e] = t[e];
            }),
            (r = e
              .reduce(function (e, t) {
                return t(i, n, e) || e;
              }, r)),
            (Object.defineProperty(i, n, r)),
            r
          );
        };
      },
      function (_e) { },
      function (_e, t, i) {

        function n(i) {
          return function (e) {
            (e.prototype[i] = function () { });
          };
        }

        function o() {
          return n("visible");
        }

        function r() {
          return n("active");
        }
        i.d(t, "h", function () {
          return o;
        }),
          i.d(t, "a", function () {
            return r;
          });
      },
      function (e, _t) {
        e.exports = function () { };
      },
      function (e) {
        function n(e, t) {
          for (var i = 0; i < t.length; i++) {
            var n = t[i];
            (n.configurable = !0), Object.defineProperty(e, n.key, n);
          }
        }
        e.exports = function (e, t) {
          n(e.prototype, t);
        };
      },
      function (i, _e, _t) {
        !(function () {
          function e() { }
          var t = e.prototype;
          (t.add = r),
            (t.dispatch = function (_e) { });

          function r() { }
          i.exports = e;
        })();
      },
      function (_t) { },
      function (_t, _i) { },
      function (_t) { },
      function (_e) { },
      function (_e) { },
      function (_e, t, i) {

        i.d(t, "a", function () {
          return c;
        });
        var n, o = i(7),
          r = i.n(o),
          s = i(8),
          a = i.n(s),
          l = i(6),
          u = i(2),
          c = Object(l.h)()(
            (n = (function () {
              function t(e) {
                r()(this, t),
                  (this.el = e.el),
                  (this._showOffset = e.showOffset || 0.8),
                  (this._letterOffset = e.letterOffset || 50),
                  (this._totalDuration = e.totalDuration || 0.7),
                  (this._totalHideDuration = e.totalHideDuration || 0.5),
                  (this._duration = e.duration || 1.25),
                  (this._hideDuraton = e.hideDuration || 0.8),
                  (this._hideOpacityDuration = e.hideOpacityDuration || 0.4),
                  (this._activeViewport = e.activeViewport || !1),
                  (this._hideEase = e.hideEase || "Power4.easeOut"),
                  (this._opacity = 1),
                  (this.needsUpdate = !1),
                  this._setup();
              }
              return (
                a()(t, [{
                  key: "_setup",
                  value: function () {
                    Object(u.b)(this.el), (this._ui = { words: this.el.querySelectorAll(".js-textContainer__word"), letters: this.el.querySelectorAll(".js-textContainer__letter") });
                    for (var e = 0; e < this._ui.letters.length; e++) {
                      var t = this._ui.letters[e];
                      (t._y = this._letterOffset), (t._opacity = 0), (t._rotateX = -90), Object(u.c)(t, "translate3d(0,".concat(t._y, "%,0)"));
                    }
                  },
                },
                {
                  key: "show",
                  value: function (e) {
                    var t = this,
                      i = 0 < arguments.length && void 0 !== e ? e : {},
                      n = i.fade,
                      o = void 0 !== n && n,
                      r = i.delay,
                      s = void 0 === r ? 0 : r,
                      c = void 0 === u ? function () { } : u,
                      h = i.onComplete,
                      d = void 0 === h ? function () { } : h;
                    if ((TweenMax.killTweensOf(this, { _opacity: !0 }), o)) { } else
                      for (var _ = 0; _ < this._ui.letters.length; _++) {
                        var y = this._ui.letters[_],
                          m = (_ / this._ui.letters.length) * this._totalDuration;
                        (this._opacity = 1),
                          TweenMax.killTweensOf(y),
                          TweenMax.fromTo(y, this._duration, { _opacity: 0 }, { _opacity: 1, ease: "Power2.easeOut", delay: s + m }),
                          TweenMax.fromTo(
                            y,
                            this._duration, { _y: this._letterOffset }, {
                            _y: 0,
                            ease: "Power4.easeOut",
                            delay: s + m,
                            onStart: function (e) {
                              0 === e && c(), t.needsUpdate || (t.needsUpdate = !0);
                            },
                          }
                          );
                      }
                  },
                },
                {
                  key: "hide",
                  value: function (e) {
                    var t = this,
                      i = 0 < arguments.length && void 0 !== e ? e : {},
                      n = i.fade,
                      o = void 0 !== n && n,
                      r = i.delay,
                      s = void 0 === r ? 0 : r,
                      a = i.onComplete,
                      l = void 0 === a ? function () { } : a;
                    if (o)
                      (this.needsUpdate = !0),
                        TweenMax.killTweensOf(this, { _opacity: !0 }),
                        TweenMax.to(this, 0.6, {
                          _opacity: 0,
                          ease: "Power2.easeOut",
                          delay: s,
                          onComplete: function () {
                            (t.needsUpdate = !1), l();
                          },
                        });

                    else
                      for (var u = this._ui.letters.length - 1; 0 <= u; u--) {
                        var c = this._ui.letters[u],
                          h = (Math.abs(u - this._ui.letters.length) / this._ui.letters.length) * this._totalHideDuration;
                        TweenMax.killTweensOf(c),
                          TweenMax.to(c, this._hideOpacityDuration, {
                            _opacity: 0,
                            ease: "Power2.easeOut",
                            delay: s + h,
                            onStart: function () {
                              t.needsUpdate || (t.needsUpdate = !0);
                            },
                          });
                      }
                  },
                },
                {
                  key: "update",
                  value: function (_e) {
                    i = void 0 !== t && t;
                    this.needsUpdate && this._updateLetters(), this._activeViewport && !this._visible && i && this._checkViewport();
                  },
                },
                {
                  key: "_updateLetters",
                  value: function () {
                    this.el.style.opacity = this._opacity;
                    for (var e = 0; e < this._ui.letters.length; e++) {
                      var t = this._ui.letters[e];
                      (t.style.opacity = t._opacity), 0 === t._y && 0 === t._rotateX ? Object(u.c)(t, "inherit") : Object(u.c)(t, "translate3d(".concat(t._y, "px,0,0)"));
                    }
                  },
                },
                ]),
                t
              );
            })())
          ) || n;
      },
      function (_e, _H, _N) { },
      function (_e, _t, _i) { },
      function (_e, _t, _i) { },
      function (_e, _t, _i) { },
      function (_e, _t, _i) { },
      function (_e, _t, _i) { },
      function (_e, _t, _i) { },
      function (_e, _t, _i) { },
      function (_e, _t) { },


      function (e, _t, _i) {
        e.exports = (function () {
          var t = [],
            e, i = document,
            n = i.documentElement.doScroll,
            o = "DOMContentLoaded",
            r = (n ? /^loaded|^c/ : /^loaded|^i|^c/).test(i.readyState);
          if (!r)
            i.addEventListener(
              o,
              (e = function () {
                r = 1;
                while ((e = t.shift()))
                  e();
              })
            );
          return function (e) {
            r ? setTimeout(e, 0) : t.push(e);
          };
        })();
      },
      function (_e) { },
      function (_e) { },
      function (_t, _i) { },
      function (_e, t, i) {

        var n = i(7),
          o = i.n(n),
          r = i(9),
          s = i.n(r);
        (window.Signals = new (function e() {
          o()(this, e),
            (this.onAssetLoaded = new s.a()),
            (this.onAssetsLoaded = new s.a());
        })()),
          (t.a = window.Signals);
      },
      function (_e) { },
      function (_t, _i) { },

      function (_e, t, i) {

        i.d(t, "a", function () {
          return T;
        });
        var n, o, a = i(8),
          l = i.n(a),
          u = i(4),
          c = i.n(u),
          h = i(15),
          d = i(1),
          p = i(2),
          f = i(3),
          _ = i(6),
          y = i(33),
          m = i.n(y),
          T = (i(73),
            Object(_.h)()(
              (n =
                Object(_.a)()(
                  ((o = (function () {
                    function t(e) {
                      s()(this, t),
                        (this.el = e.parent.appendChild(Object(p.a)(m()()))),
                        (this._onHide = e.onHide),
                        (this._ui = {
                          container: this.el.querySelector(".js-mainLoader__container"),
                          loading: this.el.querySelector(".js-mainLoader__loading"),
                          title: this.el.querySelector(".js-mainLoader__title"),
                          subtitle: this.el.querySelector(".js-mainLoader__subtitle"),
                          text: this.el.querySelector(".js-mainLoader__text"),
                          line: this.el.querySelector(".js-mainLoader__line"),
                        }),
                        (this._params = { loading: { opacity: 0 } }),
                        (this._ui.subtitle._opacity = 0),
                        (this._ui.subtitle._y = 50),
                        (this._ui.line._scale = 0),
                        (this._ui.text._opacity = 0),
                        (this._ui.text._y = 50),
                        (this._target = 0),
                        (this._current = 0),
                        (this._title = new h.a({ el: this._ui.title })),
                        (this.needsUpdate = !0),
                        this.setupDOM(),
                        this.setupEvents(),
                        this.show({ delay: 1 });
                    }
                    return (
                      l()(t, [
                        { key: "setupDOM", value: function () { } },
                        {
                          key: "setupEvents",
                          value: function () {
                            Signals.onAssetLoaded.add(this.onAssetLoaded), Signals.onAssetsLoaded.add(this.onAssetsLoaded);
                          },
                        },
                        {
                          key: "show",
                          value: function (e) {
                            var t = this,
                              i = (0 < arguments.length && void 0 !== e ? e : {}).delay,
                              n = void 0 === i ? 0 : i;
                            (this.needsUpdate = !0),
                              (this.el.style.display = "block"),
                              this._title.show({ delay: n }),
                              TweenMax.killTweensOf(this._ui.subtitle),
                              TweenMax.to(this._ui.subtitle, 1, { _opacity: 1, delay: n + 1, ease: "Power2.easeOut" }),
                              TweenMax.to(this._ui.subtitle, 1, {
                                _y: 0,
                                delay: n + 1,
                                ease: "Power4.easeOut",
                                onComplete: function () {
                                  t._title.hide({ delay: n + 1 }),
                                    TweenMax.to(t._ui.subtitle, 1, { _opacity: 0, delay: n + 1, ease: "Power2.easeOut" }),
                                    TweenMax.to(t._params.loading, 1, { opacity: 1, delay: n + 2, ease: "Power2.easeOut" }),
                                    TweenMax.to(t._ui.text, 1, { _y: 0, delay: n + 2, ease: "Power4.easeOut" }),
                                    TweenMax.to(t._params.loading, 1, { opacity: 1, delay: 2.8, ease: "easeOut", onComplete: function () { main.style.opacity = "1"; } }),
                                    TweenMax.to(t._ui.text, 1, {
                                      _opacity: 1,
                                      delay: 3,
                                      ease: "Power6.ease",
                                      onComplete: function () {
                                        t.activate();
                                      },
                                    });
                                },
                              });
                          },
                        },
                        {},
                        {
                          key: "activate",
                          value: function () {
                            d.a.global;
                          },
                        },
                        {
                          key: "onAssetLoaded",
                          value: function (_e) { },
                        },
                        {
                          key: "onAssetsLoaded",
                          value: function (e) {
                            var t = e;
                            this._target = t / 100;
                          },
                        },
                        {
                          key: "update",
                          value: function () {
                            if ((this._title.update(), this.needsUpdate)) {
                              var e = this._ui.subtitle._opacity,
                                t = this._ui.subtitle._y;
                              (this._ui.loading.style.opacity = this._params.loading.opacity),
                                (this._ui.subtitle.style.opacity = e),
                                Object(p.c)(this._ui.subtitle, "translate3d(0, ".concat(t, "%, 0)")),
                                (this._ui.text.style.opacity = this._ui.text._opacity),
                                d.a.MOBILE ? Object(p.c)(this._ui.text, "translate3d(-50%, ".concat(-50 + this._ui.text._y, "%, 0)")) : Object(p.c)(this._ui.text, "translate3d(0, ".concat(this._ui.text._y, "%, 0)")),
                                Object(p.c)(this._ui.line, "scale(".concat(this._ui.line._scale, ", 1)"));
                            }
                            this.active() &&
                              this.visible() &&
                              ((this._current += 0.02 * (this._target - this._current)),
                                Math.abs(this._target - this._current) < 0.01 && 0 !== this._target && 1 === this._target && ((this._current = this._target), this.hide({ delay: 1 })),
                                (this._ui.line._scale = this._current));
                          },
                        },
                      ]),
                      t
                    );
                  })()),
                    c()(o.prototype, "onAssetLoaded", [f.a], Object.getOwnPropertyDescriptor(o.prototype, "onAssetLoaded"), o.prototype),
                    c()(o.prototype, "onAssetsLoaded", [f.a], Object.getOwnPropertyDescriptor(o.prototype, "onAssetsLoaded"), o.prototype),
                    (n = o))
                ) || n)
            ) || n);
      },

      function (module, _exports) {
        module.exports = function () {
          var __p = "";
          __p += `<div class="mainLoader">
            <div class="js-mainLoader__loading"></div>
            <div class="js-mainLoader__container">
              <div class="js-mainLoader__title">ALERIUS</div> 
              <div class="js-mainLoader__subtitle">FINANCIAL PARAPLANNING</div>
            </div>
            <div class="js-mainLoader__text"></div>
            <div class="js-mainLoader__line"></div>
          </div>`;

          return __p;
        };
      },
      function (_e, _t) { },
      function (_e, _t, _i) { },
      function (h, _e, d) {
        (function (e) {
          for (var t = "undefined" == typeof window ? e : window, i = ["moz", "webkit"], o = "AnimationFrame", r = t["request" + o], s = t["cancel" + o] || t["cancelRequest" + o], a = 0; !r && a < i.length; a++)
            (r = t[i[a] + "Request" + o]), (s = t[i[a] + "Cancel" + o] || t[i[a] + "CancelRequest" + o]);
          if (!r || !s) { }
          (h.exports = function (e) {
            return r.call(t, e);
          }),
            (h.exports.polyfill = function (_e) { });
        }.call(this, d(10)));
      },
      function (_e, _t, _i) { },
      function (e, _t) {
        e.exports = function (e) {
          if (!e.webpackPolyfill) {
            var t = Object.create(e);
            t.children || (t.children = []),
              Object.defineProperty(t, "loaded", {}),
              (t.webpackPolyfill = 1);
          }
          return t;
        };
      },
      function (_e, _t) { },
      function (_e, _t, _i) { },
      function (_e, _t) { },
      function (_e, _t) { },
      function (_e, _t, _i) { },
      function (_i, _e, _t) { },
      function (_e, _t) { },
      function (_e, _t, _i) { },
      function (_e, _t, _i) { },
      function (_e, _t, _i) { },
      function (_e, _t, _i) { },
      function (_e, _t, _i) { },
      function (_e, _t, _i) { },
      function (_n, _e, _o) { },
      function (_e, _t, _i) { },
      function (_e, _t, _i) { },
      function (_e, _t, _i) { },
      function (_e, _t, _i) { },
      function (_e, _t, _i) { },
      function (_e, _t, _i) { },
      function (_e, _t, _i) { },
      function (_e, _t, _i) { },
      function (_e, _t, _i) { },
      function (_e, _t, _i) { },
      function (_e, _t) { },
      function (_e, _t, _i) { },
      function (_e, _t, _i) { },
      function (_e, _t) { },
      function (_e, _t, _i) { },
      function (_e, _t) { },
      function (_e, _t) { },
      function (_e, _t) { },
      function (_n, _e, _o) { },
      function (_e, _t, _i) { },
      function (_e, _t, _i) { },
      function (_a, _e, _t) { }, ,
      function (_e, _t, i) {

        var nt = i(0);

        nt.e._gsDefine(
          "TweenMax", [],
          function () {
            var T = function (e, t, i) {
              nt.f.call(this, e, t, i),
                (this._cycle = 0),
                (this._yoyo = !0 === this.vars.yoyo || !!this.vars.yoyoEase),
                (this._repeat = this.vars.repeat || 0),
                (this._repeatDelay = this.vars.repeatDelay || 0),
                this._repeat && this._uncache(!0),
                (this.render = T.prototype.render);
            },
              g = 1e-8,
              e = (T.prototype = nt.f.to({}, 0.1, {}));
            (e.kill()._gc = !1),
              (T.killTweensOf = T.killDelayedCallsTo = nt.f.killTweensOf),

              (e.render = function (e, t, i) {
                this._initted || (0 === this._duration && this.vars.repeat && this.invalidate());
                var n,
                  o,
                  r,
                  s,
                  a,
                  l,
                  u,
                  c,
                  h,
                  d = this,
                  p = d._dirty ? d.totalDuration() : d._totalDuration,
                  f = d._time,
                  _ = d._totalTime,
                  y = d._cycle,
                  m = d._duration,
                  T = d._rawPrevTime;
                if (
                  (p - g <= e && 0 <= e ?
                    ((d._totalTime = p),
                      (d._cycle = d._repeat),
                      d._yoyo && 0 != (1 & d._cycle) ? ((d._time = 0), (d.ratio = d._ease._calcEnd ? d._ease.getRatio(0) : 0)) : ((d._time = m), (d.ratio = d._ease._calcEnd ? d._ease.getRatio(1) : 1)),
                      d._reversed || ((n = !0), (o = "onComplete"), (i = i || d._timeline.autoRemoveChildren)),
                      0 === m &&
                      ((!d._initted && d.vars.lazy && !i) ||
                        (d._startTime === d._timeline._duration && (e = 0),
                          (T < 0 || (e <= 0 && -g <= e) || (T === g && "isPause" !== d.data)) && T !== e && ((i = !0), g < T && (o = "onReverseComplete")),
                          (d._rawPrevTime = c = !t || e || T === e ? e : g)))) :
                    e < g ?
                      ((d._totalTime = d._time = d._cycle = 0),
                        (d.ratio = d._ease._calcEnd ? d._ease.getRatio(0) : 0),
                        (0 !== _ || (0 === m && 0 < T)) && ((o = "onReverseComplete"), (n = d._reversed)), -g < e ? (e = 0) : e < 0 && ((d._active = !1), 0 === m && ((!d._initted && d.vars.lazy && !i) || (0 <= T && (i = !0), (d._rawPrevTime = c = !t || e || T === e ? e : g)))),
                        d._initted || (i = !0)) :
                      ((d._totalTime = d._time = e),
                        0 !== d._repeat &&
                        ((s = m + d._repeatDelay),
                          (d._cycle = (d._totalTime / s) >> 0),
                          0 !== d._cycle && d._cycle === d._totalTime / s && _ <= e && d._cycle--,
                          (d._time = d._totalTime - d._cycle * s),
                          d._yoyo &&
                          0 != (1 & d._cycle) &&
                          ((d._time = m - d._time),
                            (h = d._yoyoEase || d.vars.yoyoEase) &&
                            (d._yoyoEase ||
                              (!0 !== h || d._initted ?
                                (d._yoyoEase = h = !0 === h ? d._ease : h instanceof nt.b ? h : nt.b.map[h]) :
                                ((h = d.vars.ease), (d._yoyoEase = h = h ? (h instanceof nt.b ? h : "function" == typeof h ? new nt.b(h, d.vars.easeParams) : nt.b.map[h] || nt.f.defaultEase) : nt.f.defaultEase))),
                              (d.ratio = h ? 1 - h.getRatio((m - d._time) / m) : 0))),
                          d._time > m ? (d._time = m) : d._time < 0 && (d._time = 0)),
                        d._easeType && !h ?
                          ((a = d._time / m),
                            (1 === (l = d._easeType) || (3 === l && 0.5 <= a)) && (a = 1 - a),
                            3 === l && (a *= 2),
                            1 === (u = d._easePower) ? (a *= a) : 2 === u ? (a *= a * a) : 3 === u ? (a *= a * a * a) : 4 === u && (a *= a * a * a * a),
                            (d.ratio = 1 === l ? 1 - a : 2 === l ? a : d._time / m < 0.5 ? a / 2 : 1 - a / 2)) :
                          h || (d.ratio = d._ease.getRatio(d._time / m))),
                    f !== d._time || i || y !== d._cycle)
                ) {
                  if (!d._initted) {
                    if ((d._init(), !d._initted || d._gc)) return;
                    if (!i && d._firstPT && ((!1 !== d.vars.lazy && d._duration) || (d.vars.lazy && !d._duration)))
                      return (d._time = f), (d._totalTime = _), (d._rawPrevTime = T), (d._cycle = y);
                    !d._time || n || h ? n && this._ease._calcEnd && !h && (d.ratio = d._ease.getRatio(0 === d._time ? 0 : 1)) : (d.ratio = d._ease.getRatio(d._time / m));
                  }
                  for (!1 !== d._lazy && (d._lazy = !1),
                    d._active || (!d._paused && d._time !== f && 0 <= e && (d._active = !0)),
                    0 === _ &&
                    (2 === d._initted && 0 < e && d._init(),
                      d._startAt && (0 <= e ? d._startAt.render(e, !0, i) : (o = o || "_dummyGS")),
                      d.vars.onStart && ((0 === d._totalTime && 0 !== m) || t || d._callback("onStart"))),
                    r = d._firstPT; r;

                  )
                    r.f ? r.t[r.p](r.c * d.ratio + r.s) : (r.t[r.p] = r.c * d.ratio + r.s), (r = r._next);
                  d._onUpdate && (e < 0 && d._startAt && d._startTime && d._startAt.render(e, !0, i), t || (d._totalTime === _ && !o) || d._callback("onUpdate")),
                    d._cycle !== y && (t || d._gc || (d.vars.onRepeat && d._callback("onRepeat"))),
                    o &&
                    ((d._gc && !i) ||
                      (e < 0 && d._startAt && !d._onUpdate && d._startTime && d._startAt.render(e, !0, i),
                        n && (d._timeline.autoRemoveChildren && d._enabled(!1, !1), (d._active = !1)), !t && d.vars[o] && d._callback(o),
                        0 === m && d._rawPrevTime === g && c !== g && (d._rawPrevTime = 0)));
                } else _ !== d._totalTime && d._onUpdate && (t || d._callback("onUpdate"));
              }),
              (T.to = function (e, t, i) {
                return new T(e, t, i);
              }),
              (T.from = function (e, t, i) {
                return (i.runBackwards = !0), (i.immediateRender = 0 != i.immediateRender), new T(e, t, i);
              }),
              (T.fromTo = function (e, t, i, n) {
                return (n.startAt = i), (n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender), new T(e, t, n);
              }),
              c = (T.getAllTweens = function (_e) { });
            return (
              T
            );
          }, !0
        );
        var n = nt.g.TweenMax;

        var o = nt.g.CSSPlugin,
          r = nt.e._gsDefine.plugin({
            propName: "attr",
            API: 2,
            init: function () { },
          }),
          a = s.prototype;
        var h = nt.g.TimelineLite;

        var d = nt.g.TimelineMax,
          M = nt.e._gsDefine.plugin({
            propName: "bezier",
            API: 2,
            init: function () { },
          }),
          _ = M.prototype;

        nt.e._gsDefine(
          "easing.Back", ["easing.Ease"],
          function () {
            function t(_o) { }

            function i() {
              var i = h(),
                n = (i.prototype = new nt.b());
              return (
                i
              );
            }
            var n, a = nt.e.GreenSockGlobals || nt.e,
              l = a.com.greensock,
              h = l._class,
              d = nt.b.register || function () { },
              p = t(
                "Back",
                i("BackOut", function () { }),
                i("BackIn", function () { }),
                i("BackInOut", function () { })
              ),
              f = h(
                "easing.SlowMo",
                function () { }, !0
              ),
              _ = (f.prototype = new nt.b());
            return (
              ((_ = (n = h()).prototype = new nt.b()).constructor = n),
              ((_ = (r = h()).prototype = new nt.b()).constructor = r),
              t(
                "Elastic",
                (s = function () {
                  var n = h(),
                    o = (n.prototype = new nt.b());
                  return (
                    n
                  );
                })(),
                s(),
              ),
              h(),

              d(a.SlowMo, "SlowMo", "ease,"),
              d(r, "RoughEase", "ease,"),
              d(n, "SteppedEase", "ease,"),
              p
            );
          }, !0
        );
        var A = nt.g.Back,
          O = nt.g.Elastic,
          C = nt.g.Bounce,
          k = nt.g.RoughEase,
          E = nt.g.SlowMo,
          j = nt.g.SteppedEase,
          I = nt.g.Circ,
          G = nt.g.Expo,
          B = nt.g.Sine,
          R = nt.g.ExpoScaleEase;
        n._autoActivated = [h, d, o, r, M, s, c, A, O, C, k, E, j, I, G, B, R];
      },
      function (_exports) { },
      function (_exports) { },
      function (_exports) { },
      function (_exports) { },
      function (_exports) { },
      function (module, _exports) {
        module.exports = function () {
          var __p = "";
          __p +=
            `<div class="project__loader"> 
            <div class="js-project__loaderBackground project__loaderBackground">
          </div> 
            <div class="js-project__loaderProgressContainer project__loaderProgressContainer"> 
              <div class="js-project__loaderProgress project__loaderProgress"> </div> 
              <div class="js-project__loaderProgressValue project__loaderProgressValue"> </div> 
            </div>
          </div>`;
          return __p;
        };
      },
      function (_exports) { },
      function (_exports) { },
      function (_exports) { },
      function (_module, _exports) { },
      function (_exports) { },
      function (_exports) { }, , , , , , , ,
      function (_e, _t, _i) { },
      function (_e, _t, _i) { },
      function (_e, _t, _i) { },
      function (_e, _t, _i) { },
      function (_e, _t, _i) { },
      function (_e, _t, _i) { },
      function (_e, _t, _i) { },
      function (_e, _t, _i) { },
      function (_e, _t, _i) { },
      function (_e, _t, _i) { },
      function (_e, _t, _i) { },
      function (_e, _t, _i) { },
      function (_e, _t, _i) { }, , , , , , , ,
      function (_e, t, i) {

        i.r(t);
        var S, P = i(7),
          x = i.n(P),
          M = i(8),
          A = i.n(M),
          O = i(4),
          C = i.n(O),
          k = i(3),
          E = i(25),
          j = i.n(E),
          I = (i(76), i(1)),
          B = i(29),
          L = i(32),
          Oe = i(36),
          Ce = i.n(Oe),
          ke = (i(108),
            (S = (function () {
              function e() {
                x()(this, e),
                  this._setupDOMClasses(),
                  (this._loader = this._setupLoader()),
                  B.a.onAssetsLoaded.add(this.onAssetsLoaded),
                  this.update(),
                  this.resize();
              }
              return (
                A()(e, [{
                  key: "_setupDOMClasses",
                  value: function () {
                    I.a.MOBILE ? document.documentElement.classList.add("mobile") : I.a.TABLET ? document.documentElement.classList.add("tablet") : I.a.DESKTOP && document.documentElement.classList.add("desktop"),
                      I.a.IOS && document.documentElement.classList.add("ios"),
                      I.a.ANDROID && document.documentElement.classList.add("android"),
                      I.a.IS_IE && document.documentElement.classList.add("ie"),
                      I.a.IS_SAFARI && document.documentElement.classList.add("safari"),
                      I.a.IS_CHROME && document.documentElement.classList.add("chrome"),
                      I.a.IS_FF && document.documentElement.classList.add("firefox");
                  },
                },
                {
                  key: "_setupLoader",
                  value: function () {
                    var e = this;
                    return new L.a({
                      parent: document.body,
                      onHide: function () {
                        (I.a.router = new R.a({ updatePageCallback: e.updatePage })), I.a.router.navigo.resolve();
                      },
                    });
                  },
                },
                {
                  key: "addEvents",
                  value: function () {
                    window.addEventListener("resize", this._onResize);
                  },
                },
                {
                  key: "_start",
                  value: function () {
                    (this._application = new Ae()), this._onLoadApplication();
                  },
                },
                {
                  key: "_onLoadApplication",
                  value: function () {
                    this._application.start();
                  },
                },
                {
                  key: "_onResize",
                  value: function () {
                    this.resize();
                  },
                },
                {
                  key: "resize",
                  value: function () {
                    var e = window.innerWidth,
                      t = Math.max(40, 62.5 + 0.05 * (e - 1600));
                    1600 < e && (t = 62.5 + 0.045 * (e - 1600)), (document.documentElement.style.fontSize = "");
                  },
                },
                {
                  key: "onAssetsLoaded",
                  value: function () {
                    this._start();
                  },
                },
                {
                  key: "updatePage",
                  value: function (e, t) {
                    this._application && this._application.updatePage(e, t);
                  },
                },
                {
                  key: "update",
                  value: function () {
                    this._loader.update(), this._application && this._application.update(), Ce()(this.update);
                  },
                },
                ]),
                e
              );
            })()),
            C()(S.prototype, "_onResize", [k.a], Object.getOwnPropertyDescriptor(S.prototype, "_onResize"), S.prototype),
            C()(S.prototype, "update", [k.a], Object.getOwnPropertyDescriptor(S.prototype, "update"), S.prototype),
            S);
        j()(function () {
          var t = !1,
            e = document.getElementsByTagName("head")[0],
            i = document.createElement("link");
          (i.type = "text/css"),
            (i.rel = "stylesheet"),
            (i.href = "./desktop.min.css"),
            (i.onload = function () {
              console.log(), (t = t || new ke());
            }),
            i.addEventListener &&
            i.addEventListener(
              "load",
              function () {
                console.log(), (t = t || new ke());
              }, !1
            ),
            (i.onreadystatechange = function () {
              var e = i.readyState;
              ("loaded" !== e && "complete" !== e) || (console.log(), (i.onreadystatechange = null), (t = t || new ke()));
            });
          var n = document.styleSheets.length,
            o = setInterval(function () {
              document.styleSheets.length > n && (console.log(), (t = t || new ke()), clearInterval(o));
            }, 10);
          e.appendChild(i);
        });
      },


    ]);

  } else {
    // Preloader was already shown, so make content visible immediately
    main.style.opacity = "1";
  }
})
