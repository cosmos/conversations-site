!(function (e) {
  function t(t) {
    for (
      var r, o, s = t[0], c = t[1], l = t[2], d = 0, f = [];
      d < s.length;
      d++
    )
      (o = s[d]),
        Object.prototype.hasOwnProperty.call(i, o) && i[o] && f.push(i[o][0]),
        (i[o] = 0);
    for (r in c) Object.prototype.hasOwnProperty.call(c, r) && (e[r] = c[r]);
    for (u && u(t); f.length; ) f.shift()();
    return a.push.apply(a, l || []), n();
  }
  function n() {
    for (var e, t = 0; t < a.length; t++) {
      for (var n = a[t], r = !0, s = 1; s < n.length; s++) {
        var c = n[s];
        0 !== i[c] && (r = !1);
      }
      r && (a.splice(t--, 1), (e = o((o.s = n[0]))));
    }
    return e;
  }
  var r = {},
    i = { 1: 0 },
    a = [];
  function o(t) {
    if (r[t]) return r[t].exports;
    var n = (r[t] = { i: t, l: !1, exports: {} });
    return e[t].call(n.exports, n, n.exports, o), (n.l = !0), n.exports;
  }
  (o.m = e),
    (o.c = r),
    (o.d = function (e, t, n) {
      o.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (o.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (o.t = function (e, t) {
      if ((1 & t && (e = o(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (o.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var r in e)
          o.d(
            n,
            r,
            function (t) {
              return e[t];
            }.bind(null, r)
          );
      return n;
    }),
    (o.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return o.d(t, "a", t), t;
    }),
    (o.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (o.p = "");
  var s = (window.webpackJsonp = window.webpackJsonp || []),
    c = s.push.bind(s);
  (s.push = t), (s = s.slice());
  for (var l = 0; l < s.length; l++) t(s[l]);
  var u = c;
  a.push(["BRek", 0]), n();
})({
  BRek: function (e, t, n) {
    "use strict";
    n.r(t);
    var r = n("7Qib");
    function i(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
          (r = r.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function a(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    function o(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    var s = (function () {
      function e(t) {
        var n = t.rootElement,
          r = void 0 === n ? document.body : n,
          o = t.url,
          s = t.staticData,
          c = void 0 === s ? {} : s,
          l = t.sessionData,
          u = void 0 === l ? {} : l,
          d = t.conversionData,
          f = void 0 === d ? {} : d,
          g = t.isLead,
          v = t.isConversion,
          p = t.isLink,
          h = t.isExternal;
        !(function (e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, e),
          (this.isLead = !!g),
          (this.isLink = !!p),
          (this.isExternal = !!h),
          (this.isConversion = !!v),
          (this.isVisit = !this.isConversion),
          (this.urlBase = o),
          (this.rootElement = r),
          (this.apiKey = c.anthillApiKey),
          (this.payload = (function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? i(Object(n), !0).forEach(function (t) {
                    a(e, t, n[t]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(n)
                  )
                : i(Object(n)).forEach(function (t) {
                    Object.defineProperty(
                      e,
                      t,
                      Object.getOwnPropertyDescriptor(n, t)
                    );
                  });
            }
            return e;
          })(
            {},
            this._preparePageData(c),
            {},
            this._prepareCampaignData(u),
            {},
            this._prepareUniquenessData(u),
            {},
            this._prepareConversionData(f),
            {
              responsive_mode: u.mobile ? "mobile" : null,
              ref: u.referrer || null,
            }
          ));
      }
      var t, n, s;
      return (
        (t = e),
        (n = [
          {
            key: "encode",
            value: function () {
              var e = Object(r.f)(JSON.stringify(this.payload));
              return ""
                .concat(this.urlBase, "?api_key=")
                .concat(this.apiKey, "&data=")
                .concat(e, "&t=")
                .concat(Date.now());
            },
          },
          {
            key: "render",
            value: function () {
              var e = Object(r.h)("img", {
                src: this.encode(),
                width: 1,
                height: 1,
                alt: "",
                title: "",
                style:
                  "display: table-cell; height: 0; position: absolute; left: -9999999px; top: -999999px;",
              });
              this.rootElement.appendChild(e);
            },
          },
          {
            key: "_preparePageData",
            value: function (e) {
              return {
                page_url: window.location.href || null,
                owner_id: e.ownerId,
                customer_id: e.customerId,
                page_id: e.pageId,
                published_version: e.publishedVersion,
                variation_name: e.variationName,
                variation_id: e.variationId,
                linked_variation_id: e.linkedVariationId,
                variation: e.variationName,
                quantity: 1,
                initial_responsive_mode: null,
                static_page: !1,
                javascript: !0,
                viewport_height: window.innerHeight,
                viewport_width: window.innerWidth,
              };
            },
          },
          {
            key: "_prepareCampaignData",
            value: function (e) {
              return {
                campaign_id: e.campaign.id,
                ad_id: e.campaign.adid,
                campaign_source: e.campaign.source,
              };
            },
          },
          {
            key: "_prepareConversionData",
            value: function (e) {
              if (!this.isConversion) return {};
              var t = {};
              return (
                this.isLead && (t.conversion_type = "form"),
                this.isLink &&
                  ((t.conversion_type = "link"), (t.href = e.href)),
                this.isExternal &&
                  ((t.type = "external"), (t.conversion_type = "external")),
                t
              );
            },
          },
          {
            key: "_prepareUniquenessData",
            value: function (e) {
              var t = {};
              return (
                this.isVisit
                  ? (t.visited = !!e.visited || 0)
                  : (t.visited = !!e.converted || 0),
                this.isLead && (t.lead_converted = !!e.leadConverted || 0),
                t
              );
            },
          },
        ]) && o(t.prototype, n),
        s && o(t, s),
        e
      );
    })();
    function c(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
          (r = r.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function l(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? c(Object(n), !0).forEach(function (t) {
              u(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : c(Object(n)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t)
              );
            });
      }
      return e;
    }
    function u(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    function d(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    var f = (function () {
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
            key: "setupVisitTracking",
            value: function (e, t) {
              var n = e.trackingData,
                r = e.visitUrl;
              new s({ url: r, staticData: n, sessionData: l({}, t) }).render(),
                t.setVisited();
            },
          },
          {
            key: "setupSubmissionTracking",
            value: function (e, t) {
              var n = e.trackingData,
                i = e.conversionUrl;
              r.a.get().on("formSubmit", function () {
                new s({
                  url: i,
                  staticData: n,
                  sessionData: l({}, t),
                  isConversion: !0,
                  isLead: !0,
                }).render(),
                  t.setConverted(),
                  t.setLeadConverted();
                try {
                  window._instapageSnowplow("trackLeadConversion");
                } catch (e) {
                  console.warn("Snowplow trackLeadConversion", e);
                }
              });
            },
          },
          {
            key: "setupLinkTracking",
            value: function (e, t) {
              var n = e.trackingData,
                i = e.conversionUrl;
              n.trackedLinks.forEach(function (e) {
                var a = e.id,
                  o = e.href,
                  c = Object(r.t)("#link-".concat(a))[0];
                c &&
                  Object(r.d)(c, "click", function () {
                    new s({
                      url: i,
                      staticData: n,
                      conversionData: { href: o },
                      sessionData: l({}, t),
                      isConversion: !0,
                      isLink: !0,
                    }).render(),
                      t.setConverted();
                    try {
                      window._instapageSnowplow("trackLinkConversion", {
                        href: o,
                        linkId: a,
                      });
                    } catch (e) {
                      console.warn("Snowplow trackLinkConversion", e);
                    }
                  });
              });
            },
          },
          {
            key: "setupExternalTracking",
            value: function (e, t) {
              var n = e.trackingData,
                r = e.conversionUrl,
                i = new s({
                  url: r,
                  staticData: n,
                  sessionData: l({}, t),
                  isConversion: !0,
                  isExternal: !0,
                }).encode();
              t.setExternalConversionPixel(i);
            },
          },
        ]),
        (n = null) && d(t.prototype, n),
        i && d(t, i),
        e
      );
    })();
    function g(e) {
      return (g =
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
    function v(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function p(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function h(e) {
      try {
        return decodeURIComponent(e.replace(/\+/g, " "));
      } catch (e) {
        return null;
      }
    }
    var y = (function () {
      function e() {
        var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          n = t.storageKey,
          r = t.daysToExpire,
          i = void 0 === r ? 365 : r,
          a = t.reset,
          o = void 0 === a ? {} : a;
        v(this, e),
          (this.config = { storageKey: n, daysToExpire: i, reset: o }),
          (this.storageObject = this.load()),
          this._clearExpiredStorage();
      }
      var t, n, i;
      return (
        (t = e),
        (n = [
          {
            key: "setValue",
            value: function (e, t) {
              this._updateBinaryFlag(e, { value: t, updateTime: !0 });
            },
          },
          {
            key: "getValue",
            value: function (e) {
              return !(!this._hasBinaryFlag(e) || !this._checkResetDate());
            },
          },
          {
            key: "setReferrer",
            value: function () {
              var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : null;
              this.storageObject.ref = e;
            },
          },
          {
            key: "load",
            value: function () {
              var e = this._getStoreContents(this.config.storageKey),
                t = null;
              try {
                if ((t = JSON.parse(e)) && "object" === g(t)) return t;
              } catch (e) {
                return {};
              }
              return {};
            },
          },
          {
            key: "save",
            value: function () {
              var e = this.config.storageKey,
                t = "".concat(this.config.storageKey, "-expires");
              this._setStoreContents(e, JSON.stringify(this.storageObject)),
                this._setStoreContents(t, this._getExpirationTime());
            },
          },
          {
            key: "_checkResetDate",
            value: function (e) {
              var t = this.storageObject[this._getCurrentVariation()];
              return t && t.d && this.config.reset[e]
                ? t.d > this.config.reset[e]
                : !this.config.reset[e];
            },
          },
          {
            key: "_getExpirationTime",
            value: function () {
              var e = this.config.daysToExpire,
                t = new Date();
              return t.setTime(t.getTime() + 864e5 * e), t.toUTCString();
            },
          },
          {
            key: "_hasBinaryFlag",
            value: function (e) {
              var t = this._getCurrentVariation();
              return (this.storageObject[t] || {}).b & e;
            },
          },
          {
            key: "_updateBinaryFlag",
            value: function (e) {
              var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
                n = t.value,
                r = t.updateTime,
                i = t.variant,
                a = this.storageObject[i || this._getCurrentVariation()] || {};
              n ? (a.b |= e) : (a.b &= ~e),
                (a.d = r ? Math.round(Date.now() / 1e3) : a.d),
                (this.storageObject[i || this._getCurrentVariation()] = a);
            },
          },
          {
            key: "_getCurrentVariation",
            value: function () {
              return r.b.getPageData().variation;
            },
          },
          {
            key: "_getStoreContents",
            value: function (e) {
              try {
                return h(window.localStorage.getItem(h(e)));
              } catch (e) {
                return {};
              }
            },
          },
          {
            key: "_setStoreContents",
            value: function (e, t) {
              try {
                return h(
                  window.localStorage.setItem(
                    encodeURIComponent(e),
                    encodeURIComponent(t)
                  )
                );
              } catch (e) {
                return null;
              }
            },
          },
          {
            key: "_clearExpiredStorage",
            value: function () {
              try {
                for (
                  var e = [], t = new Date(), n = 0;
                  n < window.localStorage.length;
                  n++
                ) {
                  var r = window.localStorage.key(n);
                  if (r.match(/.-expires/g)) {
                    var i = this._getStoreContents(r),
                      a = new Date(i);
                    t.getTime() >= a.getTime() &&
                      e.push(r, r.replace("-expires", ""));
                  }
                }
                e.forEach(function (e) {
                  window.localStorage.removeItem(e);
                });
              } catch (e) {
                return null;
              }
            },
          },
        ]) && p(t.prototype, n),
        i && p(t, i),
        e
      );
    })();
    function b(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    (y.FLAG_VISIT = 1),
      (y.FLAG_CONVERSION = 2),
      (y.FLAG_RESPONSIVE_MODE = 4),
      (y.FLAG_LEAD_CONVERSION = 8);
    var w = (function () {
      function e(t) {
        !(function (e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, e),
          (this.storage = t),
          (this.mobile = this.isMobile()),
          (this.visited = this.isVisited()),
          (this.converted = this.isConverted()),
          (this.leadConverted = this.isLeadConverted()),
          (this.campaign = this._detectCampaign()),
          (this.referrer = this._detectReferrer()),
          this._removeCampaignParamsFromUrl(),
          this.storage.setValue(y.FLAG_RESPONSIVE_MODE, this.isMobile),
          this.storage.save();
      }
      var t, n, i;
      return (
        (t = e),
        (n = [
          {
            key: "setVisited",
            value: function () {
              (this.visited = !0),
                this.storage.setValue(y.FLAG_VISIT, !0),
                this.storage.save();
            },
          },
          {
            key: "setConverted",
            value: function () {
              (this.converted = !0),
                this.storage.setValue(y.FLAG_CONVERSION, !0),
                this.storage.save();
            },
          },
          {
            key: "setLeadConverted",
            value: function () {
              (this.leadConverted = !0),
                this.storage.setValue(y.FLAG_LEAD_CONVERSION, !0),
                this.storage.save();
            },
          },
          {
            key: "setExternalConversionPixel",
            value: function (e) {
              this.externalConversionPixel = e;
            },
          },
          {
            key: "getExternalConversionPixel",
            value: function () {
              return this.externalConversionPixel || "";
            },
          },
          {
            key: "isMobile",
            value: function () {
              return Object(r.o)();
            },
          },
          {
            key: "isVisited",
            value: function () {
              return this.storage.getValue(y.FLAG_VISIT);
            },
          },
          {
            key: "isConverted",
            value: function () {
              return this.storage.getValue(y.FLAG_CONVERSION);
            },
          },
          {
            key: "isLeadConverted",
            value: function () {
              return this.storage.getValue(y.FLAG_LEAD_CONVERSION);
            },
          },
          {
            key: "_detectReferrer",
            value: function () {
              return (
                this.storage.setReferrer(document.referrer || null),
                document.referrer
              );
            },
          },
          {
            key: "_detectCampaign",
            value: function () {
              var e = Object(r.m)("campaignid"),
                t = Object(r.m)("campaignsource"),
                n = Object(r.m)("adid");
              return (
                this.visited && e && !n && ((e = !1), (t = ""), (n = !1)),
                {
                  id: e || !1,
                  adid: n || !1,
                  source: t || (e && "adwords") || !1,
                }
              );
            },
          },
          {
            key: "_removeCampaignParamsFromUrl",
            value: function () {
              if (
                window.history &&
                "function" == typeof window.history.replaceState
              ) {
                var e = Object(r.u)(window.location.href, "adid");
                window.history.replaceState(null, window.document.title, e);
              }
            },
          },
        ]) && b(t.prototype, n),
        i && b(t, i),
        e
      );
    })();
    function m(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    var O = (function () {
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
              var e = r.b.getPageData(),
                t = e.pageId,
                n = e.preview,
                i = r.b.getConfig();
              if (!n) {
                var a = JSON.parse(Object(r.t)("script#ip-analytics")[0].text),
                  o = new y({
                    storageKey: "instapage-visit-".concat(t),
                    reset: a.resetData,
                  }),
                  s = new w(o);
                r.c.init(s),
                  f.setupVisitTracking(a, s, i),
                  a.conversionSettings.external
                    ? f.setupExternalTracking(a, s, i)
                    : (a.conversionSettings.forms &&
                        f.setupSubmissionTracking(a, s, i),
                      a.conversionSettings.links &&
                        f.setupLinkTracking(a, s, i)),
                  Object(r.t)("a").forEach(function (e) {
                    Object(r.d)(e, "click", function () {
                      if ("function" == typeof window.instapageAnchorClick)
                        try {
                          window.instapageAnchorClick(e);
                        } catch (e) {
                          console.error(
                            "Error when executing user-defined callback: ",
                            e
                          );
                        }
                    });
                  });
              }
            },
          },
        ]),
        (n = null) && m(t.prototype, n),
        i && m(t, i),
        e
      );
    })();
    function k(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    var _ = (function () {
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
              (this.root = document.documentElement),
                this.root.classList.add("js-text-scaling"),
                (this.main = document.querySelector("main")),
                (this.a11yWidgetWrapper = Object(r.t)(
                  ".a11y-widget-wrapper"
                )[0]),
                (this.a11yTrigger = Object(r.t)("#a11y-widget-trigger")[0]),
                (this.a11yWidget = Object(r.t)("#a11y-widget")[0]),
                (this.a11yWidgetControls = Object(r.t)(
                  "#a11y-widget-controls"
                )[0]),
                (this.decreaseTextTrigger = Object(r.t)(
                  "#a11y-widget-text-decrease"
                )[0]),
                (this.increaseTextTrigger = Object(r.t)(
                  "#a11y-widget-text-increase"
                )[0]),
                Object(r.d)(this.a11yTrigger, "click", e._showWidgetControls),
                Object(r.d)(this.main, "click", e._hideWidgetControls),
                Object(r.d)(
                  this.decreaseTextTrigger,
                  "click",
                  e._handleLevelChange
                ),
                Object(r.d)(
                  this.increaseTextTrigger,
                  "click",
                  e._handleLevelChange
                ),
                Object(r.d)(
                  this.a11yTrigger,
                  "keyup",
                  e._handleTriggerKeyboardEvents
                ),
                Object(r.d)(
                  this.decreaseTextTrigger,
                  "keyup",
                  e._handleControlsKeyboardEvents
                ),
                Object(r.d)(
                  this.increaseTextTrigger,
                  "keyup",
                  e._handleControlsKeyboardEvents
                ),
                this.a11yWidgetWrapper.style.setProperty("display", "block");
            },
          },
          {
            key: "_showWidgetControls",
            value: function () {
              e.a11yTrigger.setAttribute("aria-pressed", "true"),
                e.a11yTrigger.setAttribute("aria-hidden", "true"),
                e.a11yWidget.setAttribute("aria-expanded", "true");
            },
          },
          {
            key: "_hideWidgetControls",
            value: function (t) {
              (!Object(r.g)(t.target, "#a11y-widget-trigger") ||
                27 === t.keyCode) &&
                (e.a11yTrigger.setAttribute("aria-pressed", "false"),
                e.a11yTrigger.setAttribute("aria-hidden", "false"),
                e.a11yWidget.setAttribute("aria-expanded", "false"));
            },
          },
          {
            key: "_handleTriggerKeyboardEvents",
            value: function (t) {
              (0 !== t.keyCode && 13 !== t.keyCode) || e._showWidgetControls(),
                27 === t.keyCode && e._hideWidgetControls(t);
            },
          },
          {
            key: "_handleControlsKeyboardEvents",
            value: function (t) {
              (0 !== t.keyCode && 13 !== t.keyCode) || e._handleLevelChange(t),
                27 === t.keyCode && e._hideWidgetControls(t);
            },
          },
          {
            key: "_handleLevelChange",
            value: function (t) {
              var n = e.a11yWidgetControls.getAttribute("data-current-level");
              t.currentTarget === e.increaseTextTrigger ? n++ : n--,
                n >= 0 &&
                  n < 5 &&
                  (e.a11yWidgetControls.setAttribute("data-current-level", n),
                  e._activateIndicators(n),
                  e._changeTextSize(n),
                  e.a11yWidgetControls.setAttribute(
                    "aria-label",
                    "Current text size level is ".concat(n, " out of 4")
                  ));
            },
          },
          {
            key: "_activateIndicators",
            value: function (e) {
              var t = Object(r.t)("#a11y-widget-indicators span");
              t.forEach(function (e) {
                e.classList.remove("activated");
              });
              for (var n = 0; n <= e; n++) t[n].classList.add("activated");
            },
          },
          {
            key: "_changeTextSize",
            value: function (t) {
              e.root.style.setProperty(
                "--mobile-font-size",
                "".concat(4 + t, "vw")
              ),
                e.root.style.setProperty(
                  "--default-font-size",
                  "".concat(16 + 4 * t, "px")
                ),
                t > 0
                  ? (e.main.style.setProperty("width", "24.75rem"),
                    e.root.style.setProperty("--section-relative-margin", "0"),
                    e.main.style.setProperty("overflow", "visible"))
                  : (e.root.style.setProperty(
                      "--section-relative-margin",
                      "0 auto"
                    ),
                    e.main.style.setProperty("overflow", "hidden"),
                    e.main.style.setProperty("width", "initial"));
            },
          },
        ]),
        (n = null) && k(t.prototype, n),
        i && k(t, i),
        e
      );
    })();
    function C(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    var j = (function () {
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
              Object(r.t)('a[href^="#"]').forEach(function (t) {
                return t.addEventListener("click", function (t) {
                  t.preventDefault();
                  var n = t.currentTarget;
                  e._scrollIt(
                    document
                      .getElementById(n.hash.substr(1))
                      .getBoundingClientRect().top + window.pageYOffset
                  );
                });
              });
            },
          },
          {
            key: "_scrollIt",
            value: function (e) {
              var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : 300,
                n = window.pageYOffset,
                r =
                  "now" in window.performance
                    ? performance.now()
                    : new Date().getTime(),
                i = Math.max(
                  document.body.scrollHeight,
                  document.body.offsetHeight,
                  document.documentElement.clientHeight,
                  document.documentElement.scrollHeight,
                  document.documentElement.offsetHeight
                ),
                a =
                  window.innerHeight ||
                  document.documentElement.clientHeight ||
                  document.getElementsByTagName("body")[0].clientHeight,
                o = "number" == typeof e ? e : e.offsetTop,
                s = Math.round(i - o < a ? i - a : o);
              function c() {
                var e =
                    "now" in window.performance
                      ? performance.now()
                      : new Date().getTime(),
                  i = Math.min(1, (e - r) / t);
                window.scroll(0, Math.ceil(i * (s - n) + n)),
                  Math.abs(window.pageYOffset - s) <= 1 ||
                    requestAnimationFrame(c);
              }
              "requestAnimationFrame" in window != 0
                ? c()
                : window.scroll(0, s);
            },
          },
        ]),
        (n = null) && C(t.prototype, n),
        i && C(t, i),
        e
      );
    })();
    function S() {
      var e = { left: 0, right: 0 },
        t = Object(r.t)(".section .section-inner").find(function (e) {
          return e.offsetWidth > 0;
        }),
        n = t ? t.offsetWidth : 0;
      Object(r.t)('.widget:not([class*="hidden"])').forEach(function (t) {
        var r = t.offsetLeft,
          i = r + t.offsetWidth;
        r < 0 && e.left > r && (e.left = r),
          i > n && e.right < i && (e.right = i);
      });
      var i = Math.max(Math.abs(e.left), e.right - n);
      return n + 2 * i;
    }
    function E(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    var T = (function () {
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
              var t = navigator.userAgent || navigator.vendor || window.opera,
                n = JSON.parse(Object(r.t)("script#ip-config")[0].text);
              r.b.setConfig(n);
              var i = r.b.getPageData().variation;
              r.b.setPageData({
                workspaceWidth: S(),
                variation: Object(r.o)() ? "".concat(i, "-mobile") : i,
              }),
                Object(r.d)(
                  window,
                  "resize",
                  Object(r.x)(function () {
                    r.b.setPageData({
                      variation: Object(r.o)() ? "".concat(i, "-mobile") : i,
                    });
                  }, 250)
                );
              var a = Boolean(document.querySelector("#a11y-widget"));
              Object(r.o)() && a && Object(r.p)() && _.init(),
                e._blockBrowserTextScaling(t),
                O.init(),
                j.init(),
                Object(r.i)();
            },
          },
          {
            key: "_blockBrowserTextScaling",
            value: function (e) {
              var t = /FBAN|FBAV|Instagram/gi.test(e),
                n = /(android)/i.test(e),
                i = /iPhone|iPod/i.test(e);
              if (Object(r.o)() && (t || n || i)) {
                var a = document.querySelector(":root"),
                  o = parseFloat(
                    window.getComputedStyle(a).getPropertyValue("font-size")
                  ),
                  s =
                    parseFloat(
                      window.getComputedStyle(a).getPropertyValue("width")
                    ) / 25;
                s > 16 && (s = 16);
                var c = o / s;
                s !== o &&
                  document
                    .querySelectorAll(".btn, .contents p, form, ul, ol")
                    .forEach(function (e) {
                      var t = parseInt(window.getComputedStyle(e).fontSize, 10),
                        n = parseInt(window.getComputedStyle(e).lineHeight, 10);
                      (e.style.fontSize = "".concat(
                        (t / Math.pow(c, 2)).toFixed(2),
                        "px"
                      )),
                        (e.style.lineHeight = "".concat(
                          (n / Math.pow(c, 2)).toFixed(2),
                          "px"
                        ));
                    });
              }
            },
          },
        ]),
        (n = null) && E(t.prototype, n),
        i && E(t, i),
        e
      );
    })();
    Object(r.s)(function () {
      T.init();
    });
  },
});
