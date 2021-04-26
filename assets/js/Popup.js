!(function (e) {
  function t(t) {
    for (
      var r, a, l = t[0], u = t[1], s = t[2], f = 0, p = [];
      f < l.length;
      f++
    )
      (a = l[f]),
        Object.prototype.hasOwnProperty.call(i, a) && i[a] && p.push(i[a][0]),
        (i[a] = 0);
    for (r in u) Object.prototype.hasOwnProperty.call(u, r) && (e[r] = u[r]);
    for (c && c(t); p.length; ) p.shift()();
    return o.push.apply(o, s || []), n();
  }
  function n() {
    for (var e, t = 0; t < o.length; t++) {
      for (var n = o[t], r = !0, l = 1; l < n.length; l++) {
        var u = n[l];
        0 !== i[u] && (r = !1);
      }
      r && (o.splice(t--, 1), (e = a((a.s = n[0]))));
    }
    return e;
  }
  var r = {},
    i = { 6: 0 },
    o = [];
  function a(t) {
    if (r[t]) return r[t].exports;
    var n = (r[t] = { i: t, l: !1, exports: {} });
    return e[t].call(n.exports, n, n.exports, a), (n.l = !0), n.exports;
  }
  (a.m = e),
    (a.c = r),
    (a.d = function (e, t, n) {
      a.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (a.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (a.t = function (e, t) {
      if ((1 & t && (e = a(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (a.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var r in e)
          a.d(
            n,
            r,
            function (t) {
              return e[t];
            }.bind(null, r)
          );
      return n;
    }),
    (a.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return a.d(t, "a", t), t;
    }),
    (a.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (a.p = "");
  var l = (window.webpackJsonp = window.webpackJsonp || []),
    u = l.push.bind(l);
  (l.push = t), (l = l.slice());
  for (var s = 0; s < l.length; s++) t(l[s]);
  var c = u;
  o.push(["c9aP", 0]), n();
})({
  c9aP: function (e, t, n) {
    "use strict";
    n.r(t);
    var r = n("7Qib");
    function i(e, t) {
      return (
        (function (e) {
          if (Array.isArray(e)) return e;
        })(e) ||
        (function (e, t) {
          if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))
            return;
          var n = [],
            r = !0,
            i = !1,
            o = void 0;
          try {
            for (
              var a, l = e[Symbol.iterator]();
              !(r = (a = l.next()).done) &&
              (n.push(a.value), !t || n.length !== t);
              r = !0
            );
          } catch (e) {
            (i = !0), (o = e);
          } finally {
            try {
              r || null == l.return || l.return();
            } finally {
              if (i) throw o;
            }
          }
          return n;
        })(e, t) ||
        (function (e, t) {
          if (!e) return;
          if ("string" == typeof e) return o(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          "Object" === n && e.constructor && (n = e.constructor.name);
          if ("Map" === n || "Set" === n) return Array.from(n);
          if (
            "Arguments" === n ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          )
            return o(e, t);
        })(e, t) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    function o(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
      return r;
    }
    function a(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    var l = (function () {
      function e(t, n) {
        var o = n.previewAdapter;
        !(function (e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, e),
          (this.element = t),
          (this.viewportPosition = 0),
          (this.id = t.id.replace("popup-", "")),
          (this.previewAdapter = o);
        var a = i(Object(r.t)("#link-".concat(this.id)), 1);
        this.openLink = a[0];
        var l = i(Object(r.t)(this.element, "button.lightbox-close"), 1);
        (this.closeButton = l[0]),
          (this.videos = Object(r.t)(this.element, ".video")),
          (this.handleKeyEvent = this.handleKeyEvent.bind(this)),
          (this.focusableElements = this.getFocusableElements());
        var u = i(this.focusableElements, 1);
        (this.firstFocusableEl = u[0]),
          (this.lastFocusableEl = this.focusableElements[
            this.focusableElements.length - 1
          ]),
          (this.openPopupButton = document.activeElement),
          Object(r.d)(this.openLink, "click", this.open.bind(this)),
          Object(r.d)(this.openLink, "keydown", this.open.bind(this)),
          Object(r.d)(this.element, "click", this._handleClick.bind(this));
      }
      var t, n, o;
      return (
        (t = e),
        (n = [
          {
            key: "close",
            value: function () {
              (this.element.style.display = "none"),
                document.body.classList.remove("modal-on"),
                /iPad|iPhone|iPod/.test(navigator.userAgent) &&
                  window.scrollTo(0, this.viewportPosition),
                this.previewAdapter.onClose(),
                document.removeEventListener("keydown", this.handleKeyEvent),
                this.videos.forEach(function (e) {
                  e.src = "";
                }),
                this.openPopupButton.focus();
            },
          },
          {
            key: "open",
            value: function (e) {
              ("keydown" === e.type && 13 !== e.keyCode && 32 !== e.keyCode) ||
                (/iPad|iPhone|iPod/.test(navigator.userAgent) &&
                  ((this.viewportPosition = window.pageYOffset),
                  (document.body.style.top = "-".concat(
                    this.viewportPosition,
                    "px"
                  ))),
                (this.element.style.display = "block"),
                this.element.setAttribute("tabIndex", "-1"),
                document.body.classList.add("modal-on"),
                (this.openPopupButton = document.activeElement),
                this.previewAdapter.onOpen(),
                this.videos.forEach(function (e) {
                  e.src = e.getAttribute("data-src");
                }),
                this.element.focus(),
                document.addEventListener("keydown", this.handleKeyEvent));
            },
          },
          {
            key: "_handleClick",
            value: function (e) {
              var t = e.target;
              t &&
                (Object(r.q)(t, ".lightbox-dim") ||
                  this.closeButton.contains(t)) &&
                this.close();
            },
          },
          {
            key: "handleKeyEvent",
            value: function (e) {
              switch (e.keyCode) {
                case 27:
                  this.close();
                  break;
                case 9:
                  this.handleTabKeyDown(e);
              }
            },
          },
          {
            key: "handleTabKeyDown",
            value: function (e) {
              1 !== this.focusableElements.length
                ? e.shiftKey
                  ? this.handleBackwardTab(e)
                  : this.handleForwardTab(e)
                : e.preventDefault();
            },
          },
          {
            key: "getFocusableElements",
            value: function () {
              var e = this.element.querySelectorAll(
                  'a[href],a.btn, area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]'
                ),
                t = [];
              return Array.prototype.push.apply(t, e), t;
            },
          },
          {
            key: "handleBackwardTab",
            value: function (e) {
              document.activeElement === this.firstFocusableEl &&
                (e.preventDefault(), this.lastFocusableEl.focus());
            },
          },
          {
            key: "handleForwardTab",
            value: function (e) {
              document.activeElement === this.lastFocusableEl &&
                (e.preventDefault(), this.firstFocusableEl.focus());
            },
          },
        ]) && a(t.prototype, n),
        o && a(t, o),
        e
      );
    })();
    function u(e) {
      return (u =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function s(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    var c = (function () {
      function e(t) {
        !(function (e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, e),
          (this.element = t),
          (this.id = this._parseElementHtmlId());
      }
      var t, n, i;
      return (
        (t = e),
        (n = [
          {
            key: "isPreview",
            value: function () {
              return (
                "object" === u(window.previewMode) || r.b.getPageData().preview
              );
            },
          },
          {
            key: "onOpen",
            value: function () {
              var e = this.element.querySelector(".lightbox-content"),
                t = parseInt(e.style.marginTop, 10) || 0,
                n = e.clientHeight,
                r = e.offsetHeight,
                i = e.scrollHeight,
                o = e.clientWidth,
                a = e.offsetWidth,
                l = e.scrollWidth,
                u = e.offsetLeft,
                s = e.offsetTop,
                c = {
                  id: this.id,
                  marginTop: t,
                  dimensions: {
                    clientHeight: n,
                    offsetHeight: r,
                    scrollHeight: i,
                    clientWidth: o,
                    offsetWidth: a,
                    scrollWidth: l,
                  },
                  position: { offsetLeft: u, offsetTop: s },
                };
              this._dispatchCustomEvent("init", { data: c }),
                this._dispatchCustomEvent("show", { data: c }),
                this._dispatchCustomEvent("shown", { data: c });
            },
          },
          {
            key: "onClose",
            value: function () {
              this._dispatchCustomEvent("hide", { id: this.id });
            },
          },
          {
            key: "_dispatchCustomEvent",
            value: function (e, t) {
              var n = new CustomEvent("preview.popup.".concat(e), {
                detail: t,
              });
              window.dispatchEvent(n);
            },
          },
          {
            key: "_parseElementHtmlId",
            value: function () {
              return this.element.id.split("-")[1];
            },
          },
        ]) && s(t.prototype, n),
        i && s(t, i),
        e
      );
    })();
    function f(e, t) {
      return (
        (function (e) {
          if (Array.isArray(e)) return e;
        })(e) ||
        (function (e, t) {
          if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))
            return;
          var n = [],
            r = !0,
            i = !1,
            o = void 0;
          try {
            for (
              var a, l = e[Symbol.iterator]();
              !(r = (a = l.next()).done) &&
              (n.push(a.value), !t || n.length !== t);
              r = !0
            );
          } catch (e) {
            (i = !0), (o = e);
          } finally {
            try {
              r || null == l.return || l.return();
            } finally {
              if (i) throw o;
            }
          }
          return n;
        })(e, t) ||
        (function (e, t) {
          if (!e) return;
          if ("string" == typeof e) return p(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          "Object" === n && e.constructor && (n = e.constructor.name);
          if ("Map" === n || "Set" === n) return Array.from(n);
          if (
            "Arguments" === n ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          )
            return p(e, t);
        })(e, t) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    function p(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
      return r;
    }
    function h(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    var d = (function () {
      function e(t) {
        !(function (e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, e),
          (this.element = t),
          (this.id = this._parseElementHtmlId());
      }
      var t, n, r;
      return (
        (t = e),
        (n = [
          {
            key: "onOpen",
            value: function () {
              var e = this.element.querySelector(".lightbox-content"),
                t = parseInt(e.style.marginTop, 10) || 0,
                n = e.clientHeight,
                r = e.offsetHeight,
                i = e.scrollHeight,
                o = e.clientWidth,
                a = e.offsetWidth,
                l = e.scrollWidth,
                u = {
                  id: this.id,
                  marginTop: t,
                  dimensions: {
                    clientHeight: n,
                    offsetHeight: r,
                    scrollHeight: i,
                    clientWidth: o,
                    offsetWidth: a,
                    scrollWidth: l,
                  },
                };
              this._dispatchCustomEvent("init", { data: u }),
                this._dispatchCustomEvent("show", { data: u }),
                this._dispatchCustomEvent("shown", { data: u });
            },
          },
          {
            key: "onClose",
            value: function () {
              this._dispatchCustomEvent("hide", { id: this.id });
            },
          },
          {
            key: "_dispatchCustomEvent",
            value: function (e, t) {
              var n = new CustomEvent("preview.popup.".concat(e), {
                detail: t,
              });
              window.dispatchEvent(n);
            },
          },
          {
            key: "_parseElementHtmlId",
            value: function () {
              var e = this.element.id;
              return f(/p-[a-z]-([a-z0-9]+)/gim.exec(e), 2)[1];
            },
          },
        ]) && h(t.prototype, n),
        r && h(t, r),
        e
      );
    })();
    function v(e, t) {
      return (
        (function (e) {
          if (Array.isArray(e)) return e;
        })(e) ||
        (function (e, t) {
          if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))
            return;
          var n = [],
            r = !0,
            i = !1,
            o = void 0;
          try {
            for (
              var a, l = e[Symbol.iterator]();
              !(r = (a = l.next()).done) &&
              (n.push(a.value), !t || n.length !== t);
              r = !0
            );
          } catch (e) {
            (i = !0), (o = e);
          } finally {
            try {
              r || null == l.return || l.return();
            } finally {
              if (i) throw o;
            }
          }
          return n;
        })(e, t) ||
        (function (e, t) {
          if (!e) return;
          if ("string" == typeof e) return y(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          "Object" === n && e.constructor && (n = e.constructor.name);
          if ("Map" === n || "Set" === n) return Array.from(n);
          if (
            "Arguments" === n ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          )
            return y(e, t);
        })(e, t) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    function y(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
      return r;
    }
    function b(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    var m = /p-([a-z])-([a-z0-9]+)/gim,
      w = (function () {
        function e(t, n) {
          var r = n.previewAdapter;
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e),
            (this.element = t),
            (this.previewAdapter = r);
          var i = this.parseElementHtmlId(),
            o = i.variationId,
            a = i.popupId;
          (this.id = a),
            (this.variationId = o),
            new MutationObserver(this._onNodeChange.bind(this)).observe(
              this.element,
              { attributes: !0 }
            );
        }
        var t, n, i;
        return (
          (t = e),
          (n = [
            {
              key: "close",
              value: function () {
                var e = "#p-"
                    .concat(this.variationId, "-")
                    .concat(this.id, " .lightbox-dim"),
                  t = v(Object(r.t)(e), 1)[0];
                t && t.click();
              },
            },
            {
              key: "open",
              value: function () {
                var e = "#link-".concat(this.id),
                  t = v(Object(r.t)(e), 1)[0];
                t && t.click();
              },
            },
            {
              key: "parseElementHtmlId",
              value: function () {
                var e = this.element.id,
                  t = v(m.exec(e), 3);
                return { variationId: t[1], popupId: t[2] };
              },
            },
            {
              key: "_onNodeChange",
              value: function (e) {
                var t = e.find(function (e) {
                  return "hidden" === e.attributeName;
                });
                t &&
                  (t.target.hidden
                    ? this.previewAdapter.onClose()
                    : this.previewAdapter.onOpen());
              },
            },
          ]) && b(t.prototype, n),
          i && b(t, i),
          e
        );
      })();
    function g(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    var E = (function () {
      function e() {
        !(function (e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, e);
      }
      var t, n, i;
      return (
        (t = e),
        (i = [
          {
            key: "init",
            value: function () {
              var t = e.getPopups();
              r.a.get().on("closePopup", function (e) {
                var n = e.popupId;
                if (n) {
                  var r = t.find(function (e) {
                    return e.id === n;
                  });
                  r && r.close();
                }
              }),
                r.a.get().on("openPopup", function (e) {
                  var n = e.popupId;
                  if (n) {
                    var r = t.find(function (e) {
                      return e.id === n;
                    });
                    r && r.open();
                  }
                });
            },
          },
          {
            key: "getPopups",
            value: function () {
              var t = [],
                n = Object(r.n)() ? "amp-lightbox" : "div.popup";
              return (
                Object(r.t)(n).forEach(function (n) {
                  t.push(e.createPopupInstance(n));
                }),
                t
              );
            },
          },
          {
            key: "createPopupInstance",
            value: function (e) {
              if (Object(r.n)()) {
                var t = new d(e);
                return new w(e, { previewAdapter: t });
              }
              var n = new c(e);
              return new l(e, { previewAdapter: n });
            },
          },
          {
            key: "createPopupPreviewAdapter",
            value: function (e) {
              return Object(r.n)() ? new d(e) : new c(e);
            },
          },
        ]),
        (n = null) && g(t.prototype, n),
        i && g(t, i),
        e
      );
    })();
    Object(r.r)(function () {
      E.init(), Object(r.j)("Popup");
    });
  },
});
