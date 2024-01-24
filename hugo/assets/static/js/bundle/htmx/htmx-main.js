(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // node_modules/htmx.org/dist/htmx.min.js
  var require_htmx_min = __commonJS({
    "node_modules/htmx.org/dist/htmx.min.js"(exports, module) {
      (function(e2, t2) {
        if (typeof define === "function" && define.amd) {
          define([], t2);
        } else if (typeof module === "object" && module.exports) {
          module.exports = t2();
        } else {
          e2.htmx = e2.htmx || t2();
        }
      })(typeof self !== "undefined" ? self : exports, function() {
        return function() {
          "use strict";
          var Q = { onLoad: F, process: zt, on: de, off: ge, trigger: ce, ajax: Nr, find: C, findAll: f, closest: v, values: function(e2, t2) {
            var r2 = dr(e2, t2 || "post");
            return r2.values;
          }, remove: _, addClass: z, removeClass: n, toggleClass: $, takeClass: W, defineExtension: Ur, removeExtension: Br, logAll: V, logNone: j, logger: null, config: { historyEnabled: true, historyCacheSize: 10, refreshOnHistoryMiss: false, defaultSwapStyle: "innerHTML", defaultSwapDelay: 0, defaultSettleDelay: 20, includeIndicatorStyles: true, indicatorClass: "htmx-indicator", requestClass: "htmx-request", addedClass: "htmx-added", settlingClass: "htmx-settling", swappingClass: "htmx-swapping", allowEval: true, allowScriptTags: true, inlineScriptNonce: "", attributesToSettle: ["class", "style", "width", "height"], withCredentials: false, timeout: 0, wsReconnectDelay: "full-jitter", wsBinaryType: "blob", disableSelector: "[hx-disable], [data-hx-disable]", useTemplateFragments: false, scrollBehavior: "smooth", defaultFocusScroll: false, getCacheBusterParam: false, globalViewTransitions: false, methodsThatUseUrlParams: ["get"], selfRequestsOnly: false, ignoreTitle: false, scrollIntoViewOnBoost: true, triggerSpecsCache: null }, parseInterval: d, _: t, createEventSource: function(e2) {
            return new EventSource(e2, { withCredentials: true });
          }, createWebSocket: function(e2) {
            var t2 = new WebSocket(e2, []);
            t2.binaryType = Q.config.wsBinaryType;
            return t2;
          }, version: "1.9.10" };
          var r = { addTriggerHandler: Lt, bodyContains: se, canAccessLocalStorage: U, findThisElement: xe, filterValues: yr, hasAttribute: o, getAttributeValue: te, getClosestAttributeValue: ne, getClosestMatch: c, getExpressionVars: Hr, getHeaders: xr, getInputValues: dr, getInternalData: ae, getSwapSpecification: wr, getTriggerSpecs: it, getTarget: ye, makeFragment: l, mergeObjects: le, makeSettleInfo: T, oobSwap: Ee, querySelectorExt: ue, selectAndSwap: je, settleImmediately: nr, shouldCancel: ut, triggerEvent: ce, triggerErrorEvent: fe, withExtensions: R };
          var w = ["get", "post", "put", "delete", "patch"];
          var i = w.map(function(e2) {
            return "[hx-" + e2 + "], [data-hx-" + e2 + "]";
          }).join(", ");
          var S = e("head"), q = e("title"), H = e("svg", true);
          function e(e2, t2 = false) {
            return new RegExp(`<${e2}(\\s[^>]*>|>)([\\s\\S]*?)<\\/${e2}>`, t2 ? "gim" : "im");
          }
          function d(e2) {
            if (e2 == void 0) {
              return void 0;
            }
            let t2 = NaN;
            if (e2.slice(-2) == "ms") {
              t2 = parseFloat(e2.slice(0, -2));
            } else if (e2.slice(-1) == "s") {
              t2 = parseFloat(e2.slice(0, -1)) * 1e3;
            } else if (e2.slice(-1) == "m") {
              t2 = parseFloat(e2.slice(0, -1)) * 1e3 * 60;
            } else {
              t2 = parseFloat(e2);
            }
            return isNaN(t2) ? void 0 : t2;
          }
          function ee(e2, t2) {
            return e2.getAttribute && e2.getAttribute(t2);
          }
          function o(e2, t2) {
            return e2.hasAttribute && (e2.hasAttribute(t2) || e2.hasAttribute("data-" + t2));
          }
          function te(e2, t2) {
            return ee(e2, t2) || ee(e2, "data-" + t2);
          }
          function u(e2) {
            return e2.parentElement;
          }
          function re() {
            return document;
          }
          function c(e2, t2) {
            while (e2 && !t2(e2)) {
              e2 = u(e2);
            }
            return e2 ? e2 : null;
          }
          function L(e2, t2, r2) {
            var n2 = te(t2, r2);
            var i2 = te(t2, "hx-disinherit");
            if (e2 !== t2 && i2 && (i2 === "*" || i2.split(" ").indexOf(r2) >= 0)) {
              return "unset";
            } else {
              return n2;
            }
          }
          function ne(t2, r2) {
            var n2 = null;
            c(t2, function(e2) {
              return n2 = L(t2, e2, r2);
            });
            if (n2 !== "unset") {
              return n2;
            }
          }
          function h(e2, t2) {
            var r2 = e2.matches || e2.matchesSelector || e2.msMatchesSelector || e2.mozMatchesSelector || e2.webkitMatchesSelector || e2.oMatchesSelector;
            return r2 && r2.call(e2, t2);
          }
          function A(e2) {
            var t2 = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i;
            var r2 = t2.exec(e2);
            if (r2) {
              return r2[1].toLowerCase();
            } else {
              return "";
            }
          }
          function a(e2, t2) {
            var r2 = new DOMParser();
            var n2 = r2.parseFromString(e2, "text/html");
            var i2 = n2.body;
            while (t2 > 0) {
              t2--;
              i2 = i2.firstChild;
            }
            if (i2 == null) {
              i2 = re().createDocumentFragment();
            }
            return i2;
          }
          function N(e2) {
            return /<body/.test(e2);
          }
          function l(e2) {
            var t2 = !N(e2);
            var r2 = A(e2);
            var n2 = e2;
            if (r2 === "head") {
              n2 = n2.replace(S, "");
            }
            if (Q.config.useTemplateFragments && t2) {
              var i2 = a("<body><template>" + n2 + "</template></body>", 0);
              return i2.querySelector("template").content;
            }
            switch (r2) {
              case "thead":
              case "tbody":
              case "tfoot":
              case "colgroup":
              case "caption":
                return a("<table>" + n2 + "</table>", 1);
              case "col":
                return a("<table><colgroup>" + n2 + "</colgroup></table>", 2);
              case "tr":
                return a("<table><tbody>" + n2 + "</tbody></table>", 2);
              case "td":
              case "th":
                return a("<table><tbody><tr>" + n2 + "</tr></tbody></table>", 3);
              case "script":
              case "style":
                return a("<div>" + n2 + "</div>", 1);
              default:
                return a(n2, 0);
            }
          }
          function ie(e2) {
            if (e2) {
              e2();
            }
          }
          function I(e2, t2) {
            return Object.prototype.toString.call(e2) === "[object " + t2 + "]";
          }
          function k(e2) {
            return I(e2, "Function");
          }
          function P(e2) {
            return I(e2, "Object");
          }
          function ae(e2) {
            var t2 = "htmx-internal-data";
            var r2 = e2[t2];
            if (!r2) {
              r2 = e2[t2] = {};
            }
            return r2;
          }
          function M(e2) {
            var t2 = [];
            if (e2) {
              for (var r2 = 0; r2 < e2.length; r2++) {
                t2.push(e2[r2]);
              }
            }
            return t2;
          }
          function oe(e2, t2) {
            if (e2) {
              for (var r2 = 0; r2 < e2.length; r2++) {
                t2(e2[r2]);
              }
            }
          }
          function X(e2) {
            var t2 = e2.getBoundingClientRect();
            var r2 = t2.top;
            var n2 = t2.bottom;
            return r2 < window.innerHeight && n2 >= 0;
          }
          function se(e2) {
            if (e2.getRootNode && e2.getRootNode() instanceof window.ShadowRoot) {
              return re().body.contains(e2.getRootNode().host);
            } else {
              return re().body.contains(e2);
            }
          }
          function D(e2) {
            return e2.trim().split(/\s+/);
          }
          function le(e2, t2) {
            for (var r2 in t2) {
              if (t2.hasOwnProperty(r2)) {
                e2[r2] = t2[r2];
              }
            }
            return e2;
          }
          function E(e2) {
            try {
              return JSON.parse(e2);
            } catch (e3) {
              b(e3);
              return null;
            }
          }
          function U() {
            var e2 = "htmx:localStorageTest";
            try {
              localStorage.setItem(e2, e2);
              localStorage.removeItem(e2);
              return true;
            } catch (e3) {
              return false;
            }
          }
          function B(t2) {
            try {
              var e2 = new URL(t2);
              if (e2) {
                t2 = e2.pathname + e2.search;
              }
              if (!/^\/$/.test(t2)) {
                t2 = t2.replace(/\/+$/, "");
              }
              return t2;
            } catch (e3) {
              return t2;
            }
          }
          function t(e) {
            return Tr(re().body, function() {
              return eval(e);
            });
          }
          function F(t2) {
            var e2 = Q.on("htmx:load", function(e3) {
              t2(e3.detail.elt);
            });
            return e2;
          }
          function V() {
            Q.logger = function(e2, t2, r2) {
              if (console) {
                console.log(t2, e2, r2);
              }
            };
          }
          function j() {
            Q.logger = null;
          }
          function C(e2, t2) {
            if (t2) {
              return e2.querySelector(t2);
            } else {
              return C(re(), e2);
            }
          }
          function f(e2, t2) {
            if (t2) {
              return e2.querySelectorAll(t2);
            } else {
              return f(re(), e2);
            }
          }
          function _(e2, t2) {
            e2 = g(e2);
            if (t2) {
              setTimeout(function() {
                _(e2);
                e2 = null;
              }, t2);
            } else {
              e2.parentElement.removeChild(e2);
            }
          }
          function z(e2, t2, r2) {
            e2 = g(e2);
            if (r2) {
              setTimeout(function() {
                z(e2, t2);
                e2 = null;
              }, r2);
            } else {
              e2.classList && e2.classList.add(t2);
            }
          }
          function n(e2, t2, r2) {
            e2 = g(e2);
            if (r2) {
              setTimeout(function() {
                n(e2, t2);
                e2 = null;
              }, r2);
            } else {
              if (e2.classList) {
                e2.classList.remove(t2);
                if (e2.classList.length === 0) {
                  e2.removeAttribute("class");
                }
              }
            }
          }
          function $(e2, t2) {
            e2 = g(e2);
            e2.classList.toggle(t2);
          }
          function W(e2, t2) {
            e2 = g(e2);
            oe(e2.parentElement.children, function(e3) {
              n(e3, t2);
            });
            z(e2, t2);
          }
          function v(e2, t2) {
            e2 = g(e2);
            if (e2.closest) {
              return e2.closest(t2);
            } else {
              do {
                if (e2 == null || h(e2, t2)) {
                  return e2;
                }
              } while (e2 = e2 && u(e2));
              return null;
            }
          }
          function s(e2, t2) {
            return e2.substring(0, t2.length) === t2;
          }
          function G(e2, t2) {
            return e2.substring(e2.length - t2.length) === t2;
          }
          function J(e2) {
            var t2 = e2.trim();
            if (s(t2, "<") && G(t2, "/>")) {
              return t2.substring(1, t2.length - 2);
            } else {
              return t2;
            }
          }
          function Z(e2, t2) {
            if (t2.indexOf("closest ") === 0) {
              return [v(e2, J(t2.substr(8)))];
            } else if (t2.indexOf("find ") === 0) {
              return [C(e2, J(t2.substr(5)))];
            } else if (t2 === "next") {
              return [e2.nextElementSibling];
            } else if (t2.indexOf("next ") === 0) {
              return [K(e2, J(t2.substr(5)))];
            } else if (t2 === "previous") {
              return [e2.previousElementSibling];
            } else if (t2.indexOf("previous ") === 0) {
              return [Y(e2, J(t2.substr(9)))];
            } else if (t2 === "document") {
              return [document];
            } else if (t2 === "window") {
              return [window];
            } else if (t2 === "body") {
              return [document.body];
            } else {
              return re().querySelectorAll(J(t2));
            }
          }
          var K = function(e2, t2) {
            var r2 = re().querySelectorAll(t2);
            for (var n2 = 0; n2 < r2.length; n2++) {
              var i2 = r2[n2];
              if (i2.compareDocumentPosition(e2) === Node.DOCUMENT_POSITION_PRECEDING) {
                return i2;
              }
            }
          };
          var Y = function(e2, t2) {
            var r2 = re().querySelectorAll(t2);
            for (var n2 = r2.length - 1; n2 >= 0; n2--) {
              var i2 = r2[n2];
              if (i2.compareDocumentPosition(e2) === Node.DOCUMENT_POSITION_FOLLOWING) {
                return i2;
              }
            }
          };
          function ue(e2, t2) {
            if (t2) {
              return Z(e2, t2)[0];
            } else {
              return Z(re().body, e2)[0];
            }
          }
          function g(e2) {
            if (I(e2, "String")) {
              return C(e2);
            } else {
              return e2;
            }
          }
          function ve(e2, t2, r2) {
            if (k(t2)) {
              return { target: re().body, event: e2, listener: t2 };
            } else {
              return { target: g(e2), event: t2, listener: r2 };
            }
          }
          function de(t2, r2, n2) {
            jr(function() {
              var e3 = ve(t2, r2, n2);
              e3.target.addEventListener(e3.event, e3.listener);
            });
            var e2 = k(r2);
            return e2 ? r2 : n2;
          }
          function ge(t2, r2, n2) {
            jr(function() {
              var e2 = ve(t2, r2, n2);
              e2.target.removeEventListener(e2.event, e2.listener);
            });
            return k(r2) ? r2 : n2;
          }
          var me = re().createElement("output");
          function pe(e2, t2) {
            var r2 = ne(e2, t2);
            if (r2) {
              if (r2 === "this") {
                return [xe(e2, t2)];
              } else {
                var n2 = Z(e2, r2);
                if (n2.length === 0) {
                  b('The selector "' + r2 + '" on ' + t2 + " returned no matches!");
                  return [me];
                } else {
                  return n2;
                }
              }
            }
          }
          function xe(e2, t2) {
            return c(e2, function(e3) {
              return te(e3, t2) != null;
            });
          }
          function ye(e2) {
            var t2 = ne(e2, "hx-target");
            if (t2) {
              if (t2 === "this") {
                return xe(e2, "hx-target");
              } else {
                return ue(e2, t2);
              }
            } else {
              var r2 = ae(e2);
              if (r2.boosted) {
                return re().body;
              } else {
                return e2;
              }
            }
          }
          function be(e2) {
            var t2 = Q.config.attributesToSettle;
            for (var r2 = 0; r2 < t2.length; r2++) {
              if (e2 === t2[r2]) {
                return true;
              }
            }
            return false;
          }
          function we(t2, r2) {
            oe(t2.attributes, function(e2) {
              if (!r2.hasAttribute(e2.name) && be(e2.name)) {
                t2.removeAttribute(e2.name);
              }
            });
            oe(r2.attributes, function(e2) {
              if (be(e2.name)) {
                t2.setAttribute(e2.name, e2.value);
              }
            });
          }
          function Se(e2, t2) {
            var r2 = Fr(t2);
            for (var n2 = 0; n2 < r2.length; n2++) {
              var i2 = r2[n2];
              try {
                if (i2.isInlineSwap(e2)) {
                  return true;
                }
              } catch (e3) {
                b(e3);
              }
            }
            return e2 === "outerHTML";
          }
          function Ee(e2, i2, a2) {
            var t2 = "#" + ee(i2, "id");
            var o2 = "outerHTML";
            if (e2 === "true") {
            } else if (e2.indexOf(":") > 0) {
              o2 = e2.substr(0, e2.indexOf(":"));
              t2 = e2.substr(e2.indexOf(":") + 1, e2.length);
            } else {
              o2 = e2;
            }
            var r2 = re().querySelectorAll(t2);
            if (r2) {
              oe(r2, function(e3) {
                var t3;
                var r3 = i2.cloneNode(true);
                t3 = re().createDocumentFragment();
                t3.appendChild(r3);
                if (!Se(o2, e3)) {
                  t3 = r3;
                }
                var n2 = { shouldSwap: true, target: e3, fragment: t3 };
                if (!ce(e3, "htmx:oobBeforeSwap", n2))
                  return;
                e3 = n2.target;
                if (n2["shouldSwap"]) {
                  Fe(o2, e3, e3, t3, a2);
                }
                oe(a2.elts, function(e4) {
                  ce(e4, "htmx:oobAfterSwap", n2);
                });
              });
              i2.parentNode.removeChild(i2);
            } else {
              i2.parentNode.removeChild(i2);
              fe(re().body, "htmx:oobErrorNoTarget", { content: i2 });
            }
            return e2;
          }
          function Ce(e2, t2, r2) {
            var n2 = ne(e2, "hx-select-oob");
            if (n2) {
              var i2 = n2.split(",");
              for (var a2 = 0; a2 < i2.length; a2++) {
                var o2 = i2[a2].split(":", 2);
                var s2 = o2[0].trim();
                if (s2.indexOf("#") === 0) {
                  s2 = s2.substring(1);
                }
                var l2 = o2[1] || "true";
                var u2 = t2.querySelector("#" + s2);
                if (u2) {
                  Ee(l2, u2, r2);
                }
              }
            }
            oe(f(t2, "[hx-swap-oob], [data-hx-swap-oob]"), function(e3) {
              var t3 = te(e3, "hx-swap-oob");
              if (t3 != null) {
                Ee(t3, e3, r2);
              }
            });
          }
          function Re(e2) {
            oe(f(e2, "[hx-preserve], [data-hx-preserve]"), function(e3) {
              var t2 = te(e3, "id");
              var r2 = re().getElementById(t2);
              if (r2 != null) {
                e3.parentNode.replaceChild(r2, e3);
              }
            });
          }
          function Te(o2, e2, s2) {
            oe(e2.querySelectorAll("[id]"), function(e3) {
              var t2 = ee(e3, "id");
              if (t2 && t2.length > 0) {
                var r2 = t2.replace("'", "\\'");
                var n2 = e3.tagName.replace(":", "\\:");
                var i2 = o2.querySelector(n2 + "[id='" + r2 + "']");
                if (i2 && i2 !== o2) {
                  var a2 = e3.cloneNode();
                  we(e3, i2);
                  s2.tasks.push(function() {
                    we(e3, a2);
                  });
                }
              }
            });
          }
          function Oe(e2) {
            return function() {
              n(e2, Q.config.addedClass);
              zt(e2);
              Nt(e2);
              qe(e2);
              ce(e2, "htmx:load");
            };
          }
          function qe(e2) {
            var t2 = "[autofocus]";
            var r2 = h(e2, t2) ? e2 : e2.querySelector(t2);
            if (r2 != null) {
              r2.focus();
            }
          }
          function m(e2, t2, r2, n2) {
            Te(e2, r2, n2);
            while (r2.childNodes.length > 0) {
              var i2 = r2.firstChild;
              z(i2, Q.config.addedClass);
              e2.insertBefore(i2, t2);
              if (i2.nodeType !== Node.TEXT_NODE && i2.nodeType !== Node.COMMENT_NODE) {
                n2.tasks.push(Oe(i2));
              }
            }
          }
          function He(e2, t2) {
            var r2 = 0;
            while (r2 < e2.length) {
              t2 = (t2 << 5) - t2 + e2.charCodeAt(r2++) | 0;
            }
            return t2;
          }
          function Le(e2) {
            var t2 = 0;
            if (e2.attributes) {
              for (var r2 = 0; r2 < e2.attributes.length; r2++) {
                var n2 = e2.attributes[r2];
                if (n2.value) {
                  t2 = He(n2.name, t2);
                  t2 = He(n2.value, t2);
                }
              }
            }
            return t2;
          }
          function Ae(e2) {
            var t2 = ae(e2);
            if (t2.onHandlers) {
              for (var r2 = 0; r2 < t2.onHandlers.length; r2++) {
                const n2 = t2.onHandlers[r2];
                e2.removeEventListener(n2.event, n2.listener);
              }
              delete t2.onHandlers;
            }
          }
          function Ne(e2) {
            var t2 = ae(e2);
            if (t2.timeout) {
              clearTimeout(t2.timeout);
            }
            if (t2.webSocket) {
              t2.webSocket.close();
            }
            if (t2.sseEventSource) {
              t2.sseEventSource.close();
            }
            if (t2.listenerInfos) {
              oe(t2.listenerInfos, function(e3) {
                if (e3.on) {
                  e3.on.removeEventListener(e3.trigger, e3.listener);
                }
              });
            }
            Ae(e2);
            oe(Object.keys(t2), function(e3) {
              delete t2[e3];
            });
          }
          function p(e2) {
            ce(e2, "htmx:beforeCleanupElement");
            Ne(e2);
            if (e2.children) {
              oe(e2.children, function(e3) {
                p(e3);
              });
            }
          }
          function Ie(t2, e2, r2) {
            if (t2.tagName === "BODY") {
              return Ue(t2, e2, r2);
            } else {
              var n2;
              var i2 = t2.previousSibling;
              m(u(t2), t2, e2, r2);
              if (i2 == null) {
                n2 = u(t2).firstChild;
              } else {
                n2 = i2.nextSibling;
              }
              r2.elts = r2.elts.filter(function(e3) {
                return e3 != t2;
              });
              while (n2 && n2 !== t2) {
                if (n2.nodeType === Node.ELEMENT_NODE) {
                  r2.elts.push(n2);
                }
                n2 = n2.nextElementSibling;
              }
              p(t2);
              u(t2).removeChild(t2);
            }
          }
          function ke(e2, t2, r2) {
            return m(e2, e2.firstChild, t2, r2);
          }
          function Pe(e2, t2, r2) {
            return m(u(e2), e2, t2, r2);
          }
          function Me(e2, t2, r2) {
            return m(e2, null, t2, r2);
          }
          function Xe(e2, t2, r2) {
            return m(u(e2), e2.nextSibling, t2, r2);
          }
          function De(e2, t2, r2) {
            p(e2);
            return u(e2).removeChild(e2);
          }
          function Ue(e2, t2, r2) {
            var n2 = e2.firstChild;
            m(e2, n2, t2, r2);
            if (n2) {
              while (n2.nextSibling) {
                p(n2.nextSibling);
                e2.removeChild(n2.nextSibling);
              }
              p(n2);
              e2.removeChild(n2);
            }
          }
          function Be(e2, t2, r2) {
            var n2 = r2 || ne(e2, "hx-select");
            if (n2) {
              var i2 = re().createDocumentFragment();
              oe(t2.querySelectorAll(n2), function(e3) {
                i2.appendChild(e3);
              });
              t2 = i2;
            }
            return t2;
          }
          function Fe(e2, t2, r2, n2, i2) {
            switch (e2) {
              case "none":
                return;
              case "outerHTML":
                Ie(r2, n2, i2);
                return;
              case "afterbegin":
                ke(r2, n2, i2);
                return;
              case "beforebegin":
                Pe(r2, n2, i2);
                return;
              case "beforeend":
                Me(r2, n2, i2);
                return;
              case "afterend":
                Xe(r2, n2, i2);
                return;
              case "delete":
                De(r2, n2, i2);
                return;
              default:
                var a2 = Fr(t2);
                for (var o2 = 0; o2 < a2.length; o2++) {
                  var s2 = a2[o2];
                  try {
                    var l2 = s2.handleSwap(e2, r2, n2, i2);
                    if (l2) {
                      if (typeof l2.length !== "undefined") {
                        for (var u2 = 0; u2 < l2.length; u2++) {
                          var f2 = l2[u2];
                          if (f2.nodeType !== Node.TEXT_NODE && f2.nodeType !== Node.COMMENT_NODE) {
                            i2.tasks.push(Oe(f2));
                          }
                        }
                      }
                      return;
                    }
                  } catch (e3) {
                    b(e3);
                  }
                }
                if (e2 === "innerHTML") {
                  Ue(r2, n2, i2);
                } else {
                  Fe(Q.config.defaultSwapStyle, t2, r2, n2, i2);
                }
            }
          }
          function Ve(e2) {
            if (e2.indexOf("<title") > -1) {
              var t2 = e2.replace(H, "");
              var r2 = t2.match(q);
              if (r2) {
                return r2[2];
              }
            }
          }
          function je(e2, t2, r2, n2, i2, a2) {
            i2.title = Ve(n2);
            var o2 = l(n2);
            if (o2) {
              Ce(r2, o2, i2);
              o2 = Be(r2, o2, a2);
              Re(o2);
              return Fe(e2, r2, t2, o2, i2);
            }
          }
          function _e(e2, t2, r2) {
            var n2 = e2.getResponseHeader(t2);
            if (n2.indexOf("{") === 0) {
              var i2 = E(n2);
              for (var a2 in i2) {
                if (i2.hasOwnProperty(a2)) {
                  var o2 = i2[a2];
                  if (!P(o2)) {
                    o2 = { value: o2 };
                  }
                  ce(r2, a2, o2);
                }
              }
            } else {
              var s2 = n2.split(",");
              for (var l2 = 0; l2 < s2.length; l2++) {
                ce(r2, s2[l2].trim(), []);
              }
            }
          }
          var ze = /\s/;
          var x = /[\s,]/;
          var $e = /[_$a-zA-Z]/;
          var We = /[_$a-zA-Z0-9]/;
          var Ge = ['"', "'", "/"];
          var Je = /[^\s]/;
          var Ze = /[{(]/;
          var Ke = /[})]/;
          function Ye(e2) {
            var t2 = [];
            var r2 = 0;
            while (r2 < e2.length) {
              if ($e.exec(e2.charAt(r2))) {
                var n2 = r2;
                while (We.exec(e2.charAt(r2 + 1))) {
                  r2++;
                }
                t2.push(e2.substr(n2, r2 - n2 + 1));
              } else if (Ge.indexOf(e2.charAt(r2)) !== -1) {
                var i2 = e2.charAt(r2);
                var n2 = r2;
                r2++;
                while (r2 < e2.length && e2.charAt(r2) !== i2) {
                  if (e2.charAt(r2) === "\\") {
                    r2++;
                  }
                  r2++;
                }
                t2.push(e2.substr(n2, r2 - n2 + 1));
              } else {
                var a2 = e2.charAt(r2);
                t2.push(a2);
              }
              r2++;
            }
            return t2;
          }
          function Qe(e2, t2, r2) {
            return $e.exec(e2.charAt(0)) && e2 !== "true" && e2 !== "false" && e2 !== "this" && e2 !== r2 && t2 !== ".";
          }
          function et(e2, t2, r2) {
            if (t2[0] === "[") {
              t2.shift();
              var n2 = 1;
              var i2 = " return (function(" + r2 + "){ return (";
              var a2 = null;
              while (t2.length > 0) {
                var o2 = t2[0];
                if (o2 === "]") {
                  n2--;
                  if (n2 === 0) {
                    if (a2 === null) {
                      i2 = i2 + "true";
                    }
                    t2.shift();
                    i2 += ")})";
                    try {
                      var s2 = Tr(e2, function() {
                        return Function(i2)();
                      }, function() {
                        return true;
                      });
                      s2.source = i2;
                      return s2;
                    } catch (e3) {
                      fe(re().body, "htmx:syntax:error", { error: e3, source: i2 });
                      return null;
                    }
                  }
                } else if (o2 === "[") {
                  n2++;
                }
                if (Qe(o2, a2, r2)) {
                  i2 += "((" + r2 + "." + o2 + ") ? (" + r2 + "." + o2 + ") : (window." + o2 + "))";
                } else {
                  i2 = i2 + o2;
                }
                a2 = t2.shift();
              }
            }
          }
          function y(e2, t2) {
            var r2 = "";
            while (e2.length > 0 && !t2.test(e2[0])) {
              r2 += e2.shift();
            }
            return r2;
          }
          function tt(e2) {
            var t2;
            if (e2.length > 0 && Ze.test(e2[0])) {
              e2.shift();
              t2 = y(e2, Ke).trim();
              e2.shift();
            } else {
              t2 = y(e2, x);
            }
            return t2;
          }
          var rt = "input, textarea, select";
          function nt(e2, t2, r2) {
            var n2 = [];
            var i2 = Ye(t2);
            do {
              y(i2, Je);
              var a2 = i2.length;
              var o2 = y(i2, /[,\[\s]/);
              if (o2 !== "") {
                if (o2 === "every") {
                  var s2 = { trigger: "every" };
                  y(i2, Je);
                  s2.pollInterval = d(y(i2, /[,\[\s]/));
                  y(i2, Je);
                  var l2 = et(e2, i2, "event");
                  if (l2) {
                    s2.eventFilter = l2;
                  }
                  n2.push(s2);
                } else if (o2.indexOf("sse:") === 0) {
                  n2.push({ trigger: "sse", sseEvent: o2.substr(4) });
                } else {
                  var u2 = { trigger: o2 };
                  var l2 = et(e2, i2, "event");
                  if (l2) {
                    u2.eventFilter = l2;
                  }
                  while (i2.length > 0 && i2[0] !== ",") {
                    y(i2, Je);
                    var f2 = i2.shift();
                    if (f2 === "changed") {
                      u2.changed = true;
                    } else if (f2 === "once") {
                      u2.once = true;
                    } else if (f2 === "consume") {
                      u2.consume = true;
                    } else if (f2 === "delay" && i2[0] === ":") {
                      i2.shift();
                      u2.delay = d(y(i2, x));
                    } else if (f2 === "from" && i2[0] === ":") {
                      i2.shift();
                      if (Ze.test(i2[0])) {
                        var c2 = tt(i2);
                      } else {
                        var c2 = y(i2, x);
                        if (c2 === "closest" || c2 === "find" || c2 === "next" || c2 === "previous") {
                          i2.shift();
                          var h2 = tt(i2);
                          if (h2.length > 0) {
                            c2 += " " + h2;
                          }
                        }
                      }
                      u2.from = c2;
                    } else if (f2 === "target" && i2[0] === ":") {
                      i2.shift();
                      u2.target = tt(i2);
                    } else if (f2 === "throttle" && i2[0] === ":") {
                      i2.shift();
                      u2.throttle = d(y(i2, x));
                    } else if (f2 === "queue" && i2[0] === ":") {
                      i2.shift();
                      u2.queue = y(i2, x);
                    } else if (f2 === "root" && i2[0] === ":") {
                      i2.shift();
                      u2[f2] = tt(i2);
                    } else if (f2 === "threshold" && i2[0] === ":") {
                      i2.shift();
                      u2[f2] = y(i2, x);
                    } else {
                      fe(e2, "htmx:syntax:error", { token: i2.shift() });
                    }
                  }
                  n2.push(u2);
                }
              }
              if (i2.length === a2) {
                fe(e2, "htmx:syntax:error", { token: i2.shift() });
              }
              y(i2, Je);
            } while (i2[0] === "," && i2.shift());
            if (r2) {
              r2[t2] = n2;
            }
            return n2;
          }
          function it(e2) {
            var t2 = te(e2, "hx-trigger");
            var r2 = [];
            if (t2) {
              var n2 = Q.config.triggerSpecsCache;
              r2 = n2 && n2[t2] || nt(e2, t2, n2);
            }
            if (r2.length > 0) {
              return r2;
            } else if (h(e2, "form")) {
              return [{ trigger: "submit" }];
            } else if (h(e2, 'input[type="button"], input[type="submit"]')) {
              return [{ trigger: "click" }];
            } else if (h(e2, rt)) {
              return [{ trigger: "change" }];
            } else {
              return [{ trigger: "click" }];
            }
          }
          function at(e2) {
            ae(e2).cancelled = true;
          }
          function ot(e2, t2, r2) {
            var n2 = ae(e2);
            n2.timeout = setTimeout(function() {
              if (se(e2) && n2.cancelled !== true) {
                if (!ct(r2, e2, Wt("hx:poll:trigger", { triggerSpec: r2, target: e2 }))) {
                  t2(e2);
                }
                ot(e2, t2, r2);
              }
            }, r2.pollInterval);
          }
          function st(e2) {
            return location.hostname === e2.hostname && ee(e2, "href") && ee(e2, "href").indexOf("#") !== 0;
          }
          function lt(t2, r2, e2) {
            if (t2.tagName === "A" && st(t2) && (t2.target === "" || t2.target === "_self") || t2.tagName === "FORM") {
              r2.boosted = true;
              var n2, i2;
              if (t2.tagName === "A") {
                n2 = "get";
                i2 = ee(t2, "href");
              } else {
                var a2 = ee(t2, "method");
                n2 = a2 ? a2.toLowerCase() : "get";
                if (n2 === "get") {
                }
                i2 = ee(t2, "action");
              }
              e2.forEach(function(e3) {
                ht(t2, function(e4, t3) {
                  if (v(e4, Q.config.disableSelector)) {
                    p(e4);
                    return;
                  }
                  he(n2, i2, e4, t3);
                }, r2, e3, true);
              });
            }
          }
          function ut(e2, t2) {
            if (e2.type === "submit" || e2.type === "click") {
              if (t2.tagName === "FORM") {
                return true;
              }
              if (h(t2, 'input[type="submit"], button') && v(t2, "form") !== null) {
                return true;
              }
              if (t2.tagName === "A" && t2.href && (t2.getAttribute("href") === "#" || t2.getAttribute("href").indexOf("#") !== 0)) {
                return true;
              }
            }
            return false;
          }
          function ft(e2, t2) {
            return ae(e2).boosted && e2.tagName === "A" && t2.type === "click" && (t2.ctrlKey || t2.metaKey);
          }
          function ct(e2, t2, r2) {
            var n2 = e2.eventFilter;
            if (n2) {
              try {
                return n2.call(t2, r2) !== true;
              } catch (e3) {
                fe(re().body, "htmx:eventFilter:error", { error: e3, source: n2.source });
                return true;
              }
            }
            return false;
          }
          function ht(a2, o2, e2, s2, l2) {
            var u2 = ae(a2);
            var t2;
            if (s2.from) {
              t2 = Z(a2, s2.from);
            } else {
              t2 = [a2];
            }
            if (s2.changed) {
              t2.forEach(function(e3) {
                var t3 = ae(e3);
                t3.lastValue = e3.value;
              });
            }
            oe(t2, function(n2) {
              var i2 = function(e3) {
                if (!se(a2)) {
                  n2.removeEventListener(s2.trigger, i2);
                  return;
                }
                if (ft(a2, e3)) {
                  return;
                }
                if (l2 || ut(e3, a2)) {
                  e3.preventDefault();
                }
                if (ct(s2, a2, e3)) {
                  return;
                }
                var t3 = ae(e3);
                t3.triggerSpec = s2;
                if (t3.handledFor == null) {
                  t3.handledFor = [];
                }
                if (t3.handledFor.indexOf(a2) < 0) {
                  t3.handledFor.push(a2);
                  if (s2.consume) {
                    e3.stopPropagation();
                  }
                  if (s2.target && e3.target) {
                    if (!h(e3.target, s2.target)) {
                      return;
                    }
                  }
                  if (s2.once) {
                    if (u2.triggeredOnce) {
                      return;
                    } else {
                      u2.triggeredOnce = true;
                    }
                  }
                  if (s2.changed) {
                    var r2 = ae(n2);
                    if (r2.lastValue === n2.value) {
                      return;
                    }
                    r2.lastValue = n2.value;
                  }
                  if (u2.delayed) {
                    clearTimeout(u2.delayed);
                  }
                  if (u2.throttle) {
                    return;
                  }
                  if (s2.throttle > 0) {
                    if (!u2.throttle) {
                      o2(a2, e3);
                      u2.throttle = setTimeout(function() {
                        u2.throttle = null;
                      }, s2.throttle);
                    }
                  } else if (s2.delay > 0) {
                    u2.delayed = setTimeout(function() {
                      o2(a2, e3);
                    }, s2.delay);
                  } else {
                    ce(a2, "htmx:trigger");
                    o2(a2, e3);
                  }
                }
              };
              if (e2.listenerInfos == null) {
                e2.listenerInfos = [];
              }
              e2.listenerInfos.push({ trigger: s2.trigger, listener: i2, on: n2 });
              n2.addEventListener(s2.trigger, i2);
            });
          }
          var vt = false;
          var dt = null;
          function gt() {
            if (!dt) {
              dt = function() {
                vt = true;
              };
              window.addEventListener("scroll", dt);
              setInterval(function() {
                if (vt) {
                  vt = false;
                  oe(re().querySelectorAll("[hx-trigger='revealed'],[data-hx-trigger='revealed']"), function(e2) {
                    mt(e2);
                  });
                }
              }, 200);
            }
          }
          function mt(t2) {
            if (!o(t2, "data-hx-revealed") && X(t2)) {
              t2.setAttribute("data-hx-revealed", "true");
              var e2 = ae(t2);
              if (e2.initHash) {
                ce(t2, "revealed");
              } else {
                t2.addEventListener("htmx:afterProcessNode", function(e3) {
                  ce(t2, "revealed");
                }, { once: true });
              }
            }
          }
          function pt(e2, t2, r2) {
            var n2 = D(r2);
            for (var i2 = 0; i2 < n2.length; i2++) {
              var a2 = n2[i2].split(/:(.+)/);
              if (a2[0] === "connect") {
                xt(e2, a2[1], 0);
              }
              if (a2[0] === "send") {
                bt(e2);
              }
            }
          }
          function xt(s2, r2, n2) {
            if (!se(s2)) {
              return;
            }
            if (r2.indexOf("/") == 0) {
              var e2 = location.hostname + (location.port ? ":" + location.port : "");
              if (location.protocol == "https:") {
                r2 = "wss://" + e2 + r2;
              } else if (location.protocol == "http:") {
                r2 = "ws://" + e2 + r2;
              }
            }
            var t2 = Q.createWebSocket(r2);
            t2.onerror = function(e3) {
              fe(s2, "htmx:wsError", { error: e3, socket: t2 });
              yt(s2);
            };
            t2.onclose = function(e3) {
              if ([1006, 1012, 1013].indexOf(e3.code) >= 0) {
                var t3 = wt(n2);
                setTimeout(function() {
                  xt(s2, r2, n2 + 1);
                }, t3);
              }
            };
            t2.onopen = function(e3) {
              n2 = 0;
            };
            ae(s2).webSocket = t2;
            t2.addEventListener("message", function(e3) {
              if (yt(s2)) {
                return;
              }
              var t3 = e3.data;
              R(s2, function(e4) {
                t3 = e4.transformResponse(t3, null, s2);
              });
              var r3 = T(s2);
              var n3 = l(t3);
              var i2 = M(n3.children);
              for (var a2 = 0; a2 < i2.length; a2++) {
                var o2 = i2[a2];
                Ee(te(o2, "hx-swap-oob") || "true", o2, r3);
              }
              nr(r3.tasks);
            });
          }
          function yt(e2) {
            if (!se(e2)) {
              ae(e2).webSocket.close();
              return true;
            }
          }
          function bt(u2) {
            var f2 = c(u2, function(e2) {
              return ae(e2).webSocket != null;
            });
            if (f2) {
              u2.addEventListener(it(u2)[0].trigger, function(e2) {
                var t2 = ae(f2).webSocket;
                var r2 = xr(u2, f2);
                var n2 = dr(u2, "post");
                var i2 = n2.errors;
                var a2 = n2.values;
                var o2 = Hr(u2);
                var s2 = le(a2, o2);
                var l2 = yr(s2, u2);
                l2["HEADERS"] = r2;
                if (i2 && i2.length > 0) {
                  ce(u2, "htmx:validation:halted", i2);
                  return;
                }
                t2.send(JSON.stringify(l2));
                if (ut(e2, u2)) {
                  e2.preventDefault();
                }
              });
            } else {
              fe(u2, "htmx:noWebSocketSourceError");
            }
          }
          function wt(e2) {
            var t2 = Q.config.wsReconnectDelay;
            if (typeof t2 === "function") {
              return t2(e2);
            }
            if (t2 === "full-jitter") {
              var r2 = Math.min(e2, 6);
              var n2 = 1e3 * Math.pow(2, r2);
              return n2 * Math.random();
            }
            b('htmx.config.wsReconnectDelay must either be a function or the string "full-jitter"');
          }
          function St(e2, t2, r2) {
            var n2 = D(r2);
            for (var i2 = 0; i2 < n2.length; i2++) {
              var a2 = n2[i2].split(/:(.+)/);
              if (a2[0] === "connect") {
                Et(e2, a2[1]);
              }
              if (a2[0] === "swap") {
                Ct(e2, a2[1]);
              }
            }
          }
          function Et(t2, e2) {
            var r2 = Q.createEventSource(e2);
            r2.onerror = function(e3) {
              fe(t2, "htmx:sseError", { error: e3, source: r2 });
              Tt(t2);
            };
            ae(t2).sseEventSource = r2;
          }
          function Ct(a2, o2) {
            var s2 = c(a2, Ot);
            if (s2) {
              var l2 = ae(s2).sseEventSource;
              var u2 = function(e2) {
                if (Tt(s2)) {
                  return;
                }
                if (!se(a2)) {
                  l2.removeEventListener(o2, u2);
                  return;
                }
                var t2 = e2.data;
                R(a2, function(e3) {
                  t2 = e3.transformResponse(t2, null, a2);
                });
                var r2 = wr(a2);
                var n2 = ye(a2);
                var i2 = T(a2);
                je(r2.swapStyle, n2, a2, t2, i2);
                nr(i2.tasks);
                ce(a2, "htmx:sseMessage", e2);
              };
              ae(a2).sseListener = u2;
              l2.addEventListener(o2, u2);
            } else {
              fe(a2, "htmx:noSSESourceError");
            }
          }
          function Rt(e2, t2, r2) {
            var n2 = c(e2, Ot);
            if (n2) {
              var i2 = ae(n2).sseEventSource;
              var a2 = function() {
                if (!Tt(n2)) {
                  if (se(e2)) {
                    t2(e2);
                  } else {
                    i2.removeEventListener(r2, a2);
                  }
                }
              };
              ae(e2).sseListener = a2;
              i2.addEventListener(r2, a2);
            } else {
              fe(e2, "htmx:noSSESourceError");
            }
          }
          function Tt(e2) {
            if (!se(e2)) {
              ae(e2).sseEventSource.close();
              return true;
            }
          }
          function Ot(e2) {
            return ae(e2).sseEventSource != null;
          }
          function qt(e2, t2, r2, n2) {
            var i2 = function() {
              if (!r2.loaded) {
                r2.loaded = true;
                t2(e2);
              }
            };
            if (n2 > 0) {
              setTimeout(i2, n2);
            } else {
              i2();
            }
          }
          function Ht(t2, i2, e2) {
            var a2 = false;
            oe(w, function(r2) {
              if (o(t2, "hx-" + r2)) {
                var n2 = te(t2, "hx-" + r2);
                a2 = true;
                i2.path = n2;
                i2.verb = r2;
                e2.forEach(function(e3) {
                  Lt(t2, e3, i2, function(e4, t3) {
                    if (v(e4, Q.config.disableSelector)) {
                      p(e4);
                      return;
                    }
                    he(r2, n2, e4, t3);
                  });
                });
              }
            });
            return a2;
          }
          function Lt(n2, e2, t2, r2) {
            if (e2.sseEvent) {
              Rt(n2, r2, e2.sseEvent);
            } else if (e2.trigger === "revealed") {
              gt();
              ht(n2, r2, t2, e2);
              mt(n2);
            } else if (e2.trigger === "intersect") {
              var i2 = {};
              if (e2.root) {
                i2.root = ue(n2, e2.root);
              }
              if (e2.threshold) {
                i2.threshold = parseFloat(e2.threshold);
              }
              var a2 = new IntersectionObserver(function(e3) {
                for (var t3 = 0; t3 < e3.length; t3++) {
                  var r3 = e3[t3];
                  if (r3.isIntersecting) {
                    ce(n2, "intersect");
                    break;
                  }
                }
              }, i2);
              a2.observe(n2);
              ht(n2, r2, t2, e2);
            } else if (e2.trigger === "load") {
              if (!ct(e2, n2, Wt("load", { elt: n2 }))) {
                qt(n2, r2, t2, e2.delay);
              }
            } else if (e2.pollInterval > 0) {
              t2.polling = true;
              ot(n2, r2, e2);
            } else {
              ht(n2, r2, t2, e2);
            }
          }
          function At(e2) {
            if (Q.config.allowScriptTags && (e2.type === "text/javascript" || e2.type === "module" || e2.type === "")) {
              var t2 = re().createElement("script");
              oe(e2.attributes, function(e3) {
                t2.setAttribute(e3.name, e3.value);
              });
              t2.textContent = e2.textContent;
              t2.async = false;
              if (Q.config.inlineScriptNonce) {
                t2.nonce = Q.config.inlineScriptNonce;
              }
              var r2 = e2.parentElement;
              try {
                r2.insertBefore(t2, e2);
              } catch (e3) {
                b(e3);
              } finally {
                if (e2.parentElement) {
                  e2.parentElement.removeChild(e2);
                }
              }
            }
          }
          function Nt(e2) {
            if (h(e2, "script")) {
              At(e2);
            }
            oe(f(e2, "script"), function(e3) {
              At(e3);
            });
          }
          function It(e2) {
            var t2 = e2.attributes;
            for (var r2 = 0; r2 < t2.length; r2++) {
              var n2 = t2[r2].name;
              if (s(n2, "hx-on:") || s(n2, "data-hx-on:") || s(n2, "hx-on-") || s(n2, "data-hx-on-")) {
                return true;
              }
            }
            return false;
          }
          function kt(e2) {
            var t2 = null;
            var r2 = [];
            if (It(e2)) {
              r2.push(e2);
            }
            if (document.evaluate) {
              var n2 = document.evaluate('.//*[@*[ starts-with(name(), "hx-on:") or starts-with(name(), "data-hx-on:") or starts-with(name(), "hx-on-") or starts-with(name(), "data-hx-on-") ]]', e2);
              while (t2 = n2.iterateNext())
                r2.push(t2);
            } else {
              var i2 = e2.getElementsByTagName("*");
              for (var a2 = 0; a2 < i2.length; a2++) {
                if (It(i2[a2])) {
                  r2.push(i2[a2]);
                }
              }
            }
            return r2;
          }
          function Pt(e2) {
            if (e2.querySelectorAll) {
              var t2 = ", [hx-boost] a, [data-hx-boost] a, a[hx-boost], a[data-hx-boost]";
              var r2 = e2.querySelectorAll(i + t2 + ", form, [type='submit'], [hx-sse], [data-hx-sse], [hx-ws], [data-hx-ws], [hx-ext], [data-hx-ext], [hx-trigger], [data-hx-trigger], [hx-on], [data-hx-on]");
              return r2;
            } else {
              return [];
            }
          }
          function Mt(e2) {
            var t2 = v(e2.target, "button, input[type='submit']");
            var r2 = Dt(e2);
            if (r2) {
              r2.lastButtonClicked = t2;
            }
          }
          function Xt(e2) {
            var t2 = Dt(e2);
            if (t2) {
              t2.lastButtonClicked = null;
            }
          }
          function Dt(e2) {
            var t2 = v(e2.target, "button, input[type='submit']");
            if (!t2) {
              return;
            }
            var r2 = g("#" + ee(t2, "form")) || v(t2, "form");
            if (!r2) {
              return;
            }
            return ae(r2);
          }
          function Ut(e2) {
            e2.addEventListener("click", Mt);
            e2.addEventListener("focusin", Mt);
            e2.addEventListener("focusout", Xt);
          }
          function Bt(e2) {
            var t2 = Ye(e2);
            var r2 = 0;
            for (var n2 = 0; n2 < t2.length; n2++) {
              const i2 = t2[n2];
              if (i2 === "{") {
                r2++;
              } else if (i2 === "}") {
                r2--;
              }
            }
            return r2;
          }
          function Ft(t2, e2, r2) {
            var n2 = ae(t2);
            if (!Array.isArray(n2.onHandlers)) {
              n2.onHandlers = [];
            }
            var i2;
            var a2 = function(e3) {
              return Tr(t2, function() {
                if (!i2) {
                  i2 = new Function("event", r2);
                }
                i2.call(t2, e3);
              });
            };
            t2.addEventListener(e2, a2);
            n2.onHandlers.push({ event: e2, listener: a2 });
          }
          function Vt(e2) {
            var t2 = te(e2, "hx-on");
            if (t2) {
              var r2 = {};
              var n2 = t2.split("\n");
              var i2 = null;
              var a2 = 0;
              while (n2.length > 0) {
                var o2 = n2.shift();
                var s2 = o2.match(/^\s*([a-zA-Z:\-\.]+:)(.*)/);
                if (a2 === 0 && s2) {
                  o2.split(":");
                  i2 = s2[1].slice(0, -1);
                  r2[i2] = s2[2];
                } else {
                  r2[i2] += o2;
                }
                a2 += Bt(o2);
              }
              for (var l2 in r2) {
                Ft(e2, l2, r2[l2]);
              }
            }
          }
          function jt(e2) {
            Ae(e2);
            for (var t2 = 0; t2 < e2.attributes.length; t2++) {
              var r2 = e2.attributes[t2].name;
              var n2 = e2.attributes[t2].value;
              if (s(r2, "hx-on") || s(r2, "data-hx-on")) {
                var i2 = r2.indexOf("-on") + 3;
                var a2 = r2.slice(i2, i2 + 1);
                if (a2 === "-" || a2 === ":") {
                  var o2 = r2.slice(i2 + 1);
                  if (s(o2, ":")) {
                    o2 = "htmx" + o2;
                  } else if (s(o2, "-")) {
                    o2 = "htmx:" + o2.slice(1);
                  } else if (s(o2, "htmx-")) {
                    o2 = "htmx:" + o2.slice(5);
                  }
                  Ft(e2, o2, n2);
                }
              }
            }
          }
          function _t(t2) {
            if (v(t2, Q.config.disableSelector)) {
              p(t2);
              return;
            }
            var r2 = ae(t2);
            if (r2.initHash !== Le(t2)) {
              Ne(t2);
              r2.initHash = Le(t2);
              Vt(t2);
              ce(t2, "htmx:beforeProcessNode");
              if (t2.value) {
                r2.lastValue = t2.value;
              }
              var e2 = it(t2);
              var n2 = Ht(t2, r2, e2);
              if (!n2) {
                if (ne(t2, "hx-boost") === "true") {
                  lt(t2, r2, e2);
                } else if (o(t2, "hx-trigger")) {
                  e2.forEach(function(e3) {
                    Lt(t2, e3, r2, function() {
                    });
                  });
                }
              }
              if (t2.tagName === "FORM" || ee(t2, "type") === "submit" && o(t2, "form")) {
                Ut(t2);
              }
              var i2 = te(t2, "hx-sse");
              if (i2) {
                St(t2, r2, i2);
              }
              var a2 = te(t2, "hx-ws");
              if (a2) {
                pt(t2, r2, a2);
              }
              ce(t2, "htmx:afterProcessNode");
            }
          }
          function zt(e2) {
            e2 = g(e2);
            if (v(e2, Q.config.disableSelector)) {
              p(e2);
              return;
            }
            _t(e2);
            oe(Pt(e2), function(e3) {
              _t(e3);
            });
            oe(kt(e2), jt);
          }
          function $t(e2) {
            return e2.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
          }
          function Wt(e2, t2) {
            var r2;
            if (window.CustomEvent && typeof window.CustomEvent === "function") {
              r2 = new CustomEvent(e2, { bubbles: true, cancelable: true, detail: t2 });
            } else {
              r2 = re().createEvent("CustomEvent");
              r2.initCustomEvent(e2, true, true, t2);
            }
            return r2;
          }
          function fe(e2, t2, r2) {
            ce(e2, t2, le({ error: t2 }, r2));
          }
          function Gt(e2) {
            return e2 === "htmx:afterProcessNode";
          }
          function R(e2, t2) {
            oe(Fr(e2), function(e3) {
              try {
                t2(e3);
              } catch (e4) {
                b(e4);
              }
            });
          }
          function b(e2) {
            if (console.error) {
              console.error(e2);
            } else if (console.log) {
              console.log("ERROR: ", e2);
            }
          }
          function ce(e2, t2, r2) {
            e2 = g(e2);
            if (r2 == null) {
              r2 = {};
            }
            r2["elt"] = e2;
            var n2 = Wt(t2, r2);
            if (Q.logger && !Gt(t2)) {
              Q.logger(e2, t2, r2);
            }
            if (r2.error) {
              b(r2.error);
              ce(e2, "htmx:error", { errorInfo: r2 });
            }
            var i2 = e2.dispatchEvent(n2);
            var a2 = $t(t2);
            if (i2 && a2 !== t2) {
              var o2 = Wt(a2, n2.detail);
              i2 = i2 && e2.dispatchEvent(o2);
            }
            R(e2, function(e3) {
              i2 = i2 && (e3.onEvent(t2, n2) !== false && !n2.defaultPrevented);
            });
            return i2;
          }
          var Jt = location.pathname + location.search;
          function Zt() {
            var e2 = re().querySelector("[hx-history-elt],[data-hx-history-elt]");
            return e2 || re().body;
          }
          function Kt(e2, t2, r2, n2) {
            if (!U()) {
              return;
            }
            if (Q.config.historyCacheSize <= 0) {
              localStorage.removeItem("htmx-history-cache");
              return;
            }
            e2 = B(e2);
            var i2 = E(localStorage.getItem("htmx-history-cache")) || [];
            for (var a2 = 0; a2 < i2.length; a2++) {
              if (i2[a2].url === e2) {
                i2.splice(a2, 1);
                break;
              }
            }
            var o2 = { url: e2, content: t2, title: r2, scroll: n2 };
            ce(re().body, "htmx:historyItemCreated", { item: o2, cache: i2 });
            i2.push(o2);
            while (i2.length > Q.config.historyCacheSize) {
              i2.shift();
            }
            while (i2.length > 0) {
              try {
                localStorage.setItem("htmx-history-cache", JSON.stringify(i2));
                break;
              } catch (e3) {
                fe(re().body, "htmx:historyCacheError", { cause: e3, cache: i2 });
                i2.shift();
              }
            }
          }
          function Yt(e2) {
            if (!U()) {
              return null;
            }
            e2 = B(e2);
            var t2 = E(localStorage.getItem("htmx-history-cache")) || [];
            for (var r2 = 0; r2 < t2.length; r2++) {
              if (t2[r2].url === e2) {
                return t2[r2];
              }
            }
            return null;
          }
          function Qt(e2) {
            var t2 = Q.config.requestClass;
            var r2 = e2.cloneNode(true);
            oe(f(r2, "." + t2), function(e3) {
              n(e3, t2);
            });
            return r2.innerHTML;
          }
          function er() {
            var e2 = Zt();
            var t2 = Jt || location.pathname + location.search;
            var r2;
            try {
              r2 = re().querySelector('[hx-history="false" i],[data-hx-history="false" i]');
            } catch (e3) {
              r2 = re().querySelector('[hx-history="false"],[data-hx-history="false"]');
            }
            if (!r2) {
              ce(re().body, "htmx:beforeHistorySave", { path: t2, historyElt: e2 });
              Kt(t2, Qt(e2), re().title, window.scrollY);
            }
            if (Q.config.historyEnabled)
              history.replaceState({ htmx: true }, re().title, window.location.href);
          }
          function tr(e2) {
            if (Q.config.getCacheBusterParam) {
              e2 = e2.replace(/org\.htmx\.cache-buster=[^&]*&?/, "");
              if (G(e2, "&") || G(e2, "?")) {
                e2 = e2.slice(0, -1);
              }
            }
            if (Q.config.historyEnabled) {
              history.pushState({ htmx: true }, "", e2);
            }
            Jt = e2;
          }
          function rr(e2) {
            if (Q.config.historyEnabled)
              history.replaceState({ htmx: true }, "", e2);
            Jt = e2;
          }
          function nr(e2) {
            oe(e2, function(e3) {
              e3.call();
            });
          }
          function ir(a2) {
            var e2 = new XMLHttpRequest();
            var o2 = { path: a2, xhr: e2 };
            ce(re().body, "htmx:historyCacheMiss", o2);
            e2.open("GET", a2, true);
            e2.setRequestHeader("HX-Request", "true");
            e2.setRequestHeader("HX-History-Restore-Request", "true");
            e2.setRequestHeader("HX-Current-URL", re().location.href);
            e2.onload = function() {
              if (this.status >= 200 && this.status < 400) {
                ce(re().body, "htmx:historyCacheMissLoad", o2);
                var e3 = l(this.response);
                e3 = e3.querySelector("[hx-history-elt],[data-hx-history-elt]") || e3;
                var t2 = Zt();
                var r2 = T(t2);
                var n2 = Ve(this.response);
                if (n2) {
                  var i2 = C("title");
                  if (i2) {
                    i2.innerHTML = n2;
                  } else {
                    window.document.title = n2;
                  }
                }
                Ue(t2, e3, r2);
                nr(r2.tasks);
                Jt = a2;
                ce(re().body, "htmx:historyRestore", { path: a2, cacheMiss: true, serverResponse: this.response });
              } else {
                fe(re().body, "htmx:historyCacheMissLoadError", o2);
              }
            };
            e2.send();
          }
          function ar(e2) {
            er();
            e2 = e2 || location.pathname + location.search;
            var t2 = Yt(e2);
            if (t2) {
              var r2 = l(t2.content);
              var n2 = Zt();
              var i2 = T(n2);
              Ue(n2, r2, i2);
              nr(i2.tasks);
              document.title = t2.title;
              setTimeout(function() {
                window.scrollTo(0, t2.scroll);
              }, 0);
              Jt = e2;
              ce(re().body, "htmx:historyRestore", { path: e2, item: t2 });
            } else {
              if (Q.config.refreshOnHistoryMiss) {
                window.location.reload(true);
              } else {
                ir(e2);
              }
            }
          }
          function or(e2) {
            var t2 = pe(e2, "hx-indicator");
            if (t2 == null) {
              t2 = [e2];
            }
            oe(t2, function(e3) {
              var t3 = ae(e3);
              t3.requestCount = (t3.requestCount || 0) + 1;
              e3.classList["add"].call(e3.classList, Q.config.requestClass);
            });
            return t2;
          }
          function sr(e2) {
            var t2 = pe(e2, "hx-disabled-elt");
            if (t2 == null) {
              t2 = [];
            }
            oe(t2, function(e3) {
              var t3 = ae(e3);
              t3.requestCount = (t3.requestCount || 0) + 1;
              e3.setAttribute("disabled", "");
            });
            return t2;
          }
          function lr(e2, t2) {
            oe(e2, function(e3) {
              var t3 = ae(e3);
              t3.requestCount = (t3.requestCount || 0) - 1;
              if (t3.requestCount === 0) {
                e3.classList["remove"].call(e3.classList, Q.config.requestClass);
              }
            });
            oe(t2, function(e3) {
              var t3 = ae(e3);
              t3.requestCount = (t3.requestCount || 0) - 1;
              if (t3.requestCount === 0) {
                e3.removeAttribute("disabled");
              }
            });
          }
          function ur(e2, t2) {
            for (var r2 = 0; r2 < e2.length; r2++) {
              var n2 = e2[r2];
              if (n2.isSameNode(t2)) {
                return true;
              }
            }
            return false;
          }
          function fr(e2) {
            if (e2.name === "" || e2.name == null || e2.disabled || v(e2, "fieldset[disabled]")) {
              return false;
            }
            if (e2.type === "button" || e2.type === "submit" || e2.tagName === "image" || e2.tagName === "reset" || e2.tagName === "file") {
              return false;
            }
            if (e2.type === "checkbox" || e2.type === "radio") {
              return e2.checked;
            }
            return true;
          }
          function cr(e2, t2, r2) {
            if (e2 != null && t2 != null) {
              var n2 = r2[e2];
              if (n2 === void 0) {
                r2[e2] = t2;
              } else if (Array.isArray(n2)) {
                if (Array.isArray(t2)) {
                  r2[e2] = n2.concat(t2);
                } else {
                  n2.push(t2);
                }
              } else {
                if (Array.isArray(t2)) {
                  r2[e2] = [n2].concat(t2);
                } else {
                  r2[e2] = [n2, t2];
                }
              }
            }
          }
          function hr(t2, r2, n2, e2, i2) {
            if (e2 == null || ur(t2, e2)) {
              return;
            } else {
              t2.push(e2);
            }
            if (fr(e2)) {
              var a2 = ee(e2, "name");
              var o2 = e2.value;
              if (e2.multiple && e2.tagName === "SELECT") {
                o2 = M(e2.querySelectorAll("option:checked")).map(function(e3) {
                  return e3.value;
                });
              }
              if (e2.files) {
                o2 = M(e2.files);
              }
              cr(a2, o2, r2);
              if (i2) {
                vr(e2, n2);
              }
            }
            if (h(e2, "form")) {
              var s2 = e2.elements;
              oe(s2, function(e3) {
                hr(t2, r2, n2, e3, i2);
              });
            }
          }
          function vr(e2, t2) {
            if (e2.willValidate) {
              ce(e2, "htmx:validation:validate");
              if (!e2.checkValidity()) {
                t2.push({ elt: e2, message: e2.validationMessage, validity: e2.validity });
                ce(e2, "htmx:validation:failed", { message: e2.validationMessage, validity: e2.validity });
              }
            }
          }
          function dr(e2, t2) {
            var r2 = [];
            var n2 = {};
            var i2 = {};
            var a2 = [];
            var o2 = ae(e2);
            if (o2.lastButtonClicked && !se(o2.lastButtonClicked)) {
              o2.lastButtonClicked = null;
            }
            var s2 = h(e2, "form") && e2.noValidate !== true || te(e2, "hx-validate") === "true";
            if (o2.lastButtonClicked) {
              s2 = s2 && o2.lastButtonClicked.formNoValidate !== true;
            }
            if (t2 !== "get") {
              hr(r2, i2, a2, v(e2, "form"), s2);
            }
            hr(r2, n2, a2, e2, s2);
            if (o2.lastButtonClicked || e2.tagName === "BUTTON" || e2.tagName === "INPUT" && ee(e2, "type") === "submit") {
              var l2 = o2.lastButtonClicked || e2;
              var u2 = ee(l2, "name");
              cr(u2, l2.value, i2);
            }
            var f2 = pe(e2, "hx-include");
            oe(f2, function(e3) {
              hr(r2, n2, a2, e3, s2);
              if (!h(e3, "form")) {
                oe(e3.querySelectorAll(rt), function(e4) {
                  hr(r2, n2, a2, e4, s2);
                });
              }
            });
            n2 = le(n2, i2);
            return { errors: a2, values: n2 };
          }
          function gr(e2, t2, r2) {
            if (e2 !== "") {
              e2 += "&";
            }
            if (String(r2) === "[object Object]") {
              r2 = JSON.stringify(r2);
            }
            var n2 = encodeURIComponent(r2);
            e2 += encodeURIComponent(t2) + "=" + n2;
            return e2;
          }
          function mr(e2) {
            var t2 = "";
            for (var r2 in e2) {
              if (e2.hasOwnProperty(r2)) {
                var n2 = e2[r2];
                if (Array.isArray(n2)) {
                  oe(n2, function(e3) {
                    t2 = gr(t2, r2, e3);
                  });
                } else {
                  t2 = gr(t2, r2, n2);
                }
              }
            }
            return t2;
          }
          function pr(e2) {
            var t2 = new FormData();
            for (var r2 in e2) {
              if (e2.hasOwnProperty(r2)) {
                var n2 = e2[r2];
                if (Array.isArray(n2)) {
                  oe(n2, function(e3) {
                    t2.append(r2, e3);
                  });
                } else {
                  t2.append(r2, n2);
                }
              }
            }
            return t2;
          }
          function xr(e2, t2, r2) {
            var n2 = { "HX-Request": "true", "HX-Trigger": ee(e2, "id"), "HX-Trigger-Name": ee(e2, "name"), "HX-Target": te(t2, "id"), "HX-Current-URL": re().location.href };
            Rr(e2, "hx-headers", false, n2);
            if (r2 !== void 0) {
              n2["HX-Prompt"] = r2;
            }
            if (ae(e2).boosted) {
              n2["HX-Boosted"] = "true";
            }
            return n2;
          }
          function yr(t2, e2) {
            var r2 = ne(e2, "hx-params");
            if (r2) {
              if (r2 === "none") {
                return {};
              } else if (r2 === "*") {
                return t2;
              } else if (r2.indexOf("not ") === 0) {
                oe(r2.substr(4).split(","), function(e3) {
                  e3 = e3.trim();
                  delete t2[e3];
                });
                return t2;
              } else {
                var n2 = {};
                oe(r2.split(","), function(e3) {
                  e3 = e3.trim();
                  n2[e3] = t2[e3];
                });
                return n2;
              }
            } else {
              return t2;
            }
          }
          function br(e2) {
            return ee(e2, "href") && ee(e2, "href").indexOf("#") >= 0;
          }
          function wr(e2, t2) {
            var r2 = t2 ? t2 : ne(e2, "hx-swap");
            var n2 = { swapStyle: ae(e2).boosted ? "innerHTML" : Q.config.defaultSwapStyle, swapDelay: Q.config.defaultSwapDelay, settleDelay: Q.config.defaultSettleDelay };
            if (Q.config.scrollIntoViewOnBoost && ae(e2).boosted && !br(e2)) {
              n2["show"] = "top";
            }
            if (r2) {
              var i2 = D(r2);
              if (i2.length > 0) {
                for (var a2 = 0; a2 < i2.length; a2++) {
                  var o2 = i2[a2];
                  if (o2.indexOf("swap:") === 0) {
                    n2["swapDelay"] = d(o2.substr(5));
                  } else if (o2.indexOf("settle:") === 0) {
                    n2["settleDelay"] = d(o2.substr(7));
                  } else if (o2.indexOf("transition:") === 0) {
                    n2["transition"] = o2.substr(11) === "true";
                  } else if (o2.indexOf("ignoreTitle:") === 0) {
                    n2["ignoreTitle"] = o2.substr(12) === "true";
                  } else if (o2.indexOf("scroll:") === 0) {
                    var s2 = o2.substr(7);
                    var l2 = s2.split(":");
                    var u2 = l2.pop();
                    var f2 = l2.length > 0 ? l2.join(":") : null;
                    n2["scroll"] = u2;
                    n2["scrollTarget"] = f2;
                  } else if (o2.indexOf("show:") === 0) {
                    var c2 = o2.substr(5);
                    var l2 = c2.split(":");
                    var h2 = l2.pop();
                    var f2 = l2.length > 0 ? l2.join(":") : null;
                    n2["show"] = h2;
                    n2["showTarget"] = f2;
                  } else if (o2.indexOf("focus-scroll:") === 0) {
                    var v2 = o2.substr("focus-scroll:".length);
                    n2["focusScroll"] = v2 == "true";
                  } else if (a2 == 0) {
                    n2["swapStyle"] = o2;
                  } else {
                    b("Unknown modifier in hx-swap: " + o2);
                  }
                }
              }
            }
            return n2;
          }
          function Sr(e2) {
            return ne(e2, "hx-encoding") === "multipart/form-data" || h(e2, "form") && ee(e2, "enctype") === "multipart/form-data";
          }
          function Er(t2, r2, n2) {
            var i2 = null;
            R(r2, function(e2) {
              if (i2 == null) {
                i2 = e2.encodeParameters(t2, n2, r2);
              }
            });
            if (i2 != null) {
              return i2;
            } else {
              if (Sr(r2)) {
                return pr(n2);
              } else {
                return mr(n2);
              }
            }
          }
          function T(e2) {
            return { tasks: [], elts: [e2] };
          }
          function Cr(e2, t2) {
            var r2 = e2[0];
            var n2 = e2[e2.length - 1];
            if (t2.scroll) {
              var i2 = null;
              if (t2.scrollTarget) {
                i2 = ue(r2, t2.scrollTarget);
              }
              if (t2.scroll === "top" && (r2 || i2)) {
                i2 = i2 || r2;
                i2.scrollTop = 0;
              }
              if (t2.scroll === "bottom" && (n2 || i2)) {
                i2 = i2 || n2;
                i2.scrollTop = i2.scrollHeight;
              }
            }
            if (t2.show) {
              var i2 = null;
              if (t2.showTarget) {
                var a2 = t2.showTarget;
                if (t2.showTarget === "window") {
                  a2 = "body";
                }
                i2 = ue(r2, a2);
              }
              if (t2.show === "top" && (r2 || i2)) {
                i2 = i2 || r2;
                i2.scrollIntoView({ block: "start", behavior: Q.config.scrollBehavior });
              }
              if (t2.show === "bottom" && (n2 || i2)) {
                i2 = i2 || n2;
                i2.scrollIntoView({ block: "end", behavior: Q.config.scrollBehavior });
              }
            }
          }
          function Rr(e2, t2, r2, n2) {
            if (n2 == null) {
              n2 = {};
            }
            if (e2 == null) {
              return n2;
            }
            var i2 = te(e2, t2);
            if (i2) {
              var a2 = i2.trim();
              var o2 = r2;
              if (a2 === "unset") {
                return null;
              }
              if (a2.indexOf("javascript:") === 0) {
                a2 = a2.substr(11);
                o2 = true;
              } else if (a2.indexOf("js:") === 0) {
                a2 = a2.substr(3);
                o2 = true;
              }
              if (a2.indexOf("{") !== 0) {
                a2 = "{" + a2 + "}";
              }
              var s2;
              if (o2) {
                s2 = Tr(e2, function() {
                  return Function("return (" + a2 + ")")();
                }, {});
              } else {
                s2 = E(a2);
              }
              for (var l2 in s2) {
                if (s2.hasOwnProperty(l2)) {
                  if (n2[l2] == null) {
                    n2[l2] = s2[l2];
                  }
                }
              }
            }
            return Rr(u(e2), t2, r2, n2);
          }
          function Tr(e2, t2, r2) {
            if (Q.config.allowEval) {
              return t2();
            } else {
              fe(e2, "htmx:evalDisallowedError");
              return r2;
            }
          }
          function Or(e2, t2) {
            return Rr(e2, "hx-vars", true, t2);
          }
          function qr(e2, t2) {
            return Rr(e2, "hx-vals", false, t2);
          }
          function Hr(e2) {
            return le(Or(e2), qr(e2));
          }
          function Lr(t2, r2, n2) {
            if (n2 !== null) {
              try {
                t2.setRequestHeader(r2, n2);
              } catch (e2) {
                t2.setRequestHeader(r2, encodeURIComponent(n2));
                t2.setRequestHeader(r2 + "-URI-AutoEncoded", "true");
              }
            }
          }
          function Ar(t2) {
            if (t2.responseURL && typeof URL !== "undefined") {
              try {
                var e2 = new URL(t2.responseURL);
                return e2.pathname + e2.search;
              } catch (e3) {
                fe(re().body, "htmx:badResponseUrl", { url: t2.responseURL });
              }
            }
          }
          function O(e2, t2) {
            return t2.test(e2.getAllResponseHeaders());
          }
          function Nr(e2, t2, r2) {
            e2 = e2.toLowerCase();
            if (r2) {
              if (r2 instanceof Element || I(r2, "String")) {
                return he(e2, t2, null, null, { targetOverride: g(r2), returnPromise: true });
              } else {
                return he(e2, t2, g(r2.source), r2.event, { handler: r2.handler, headers: r2.headers, values: r2.values, targetOverride: g(r2.target), swapOverride: r2.swap, select: r2.select, returnPromise: true });
              }
            } else {
              return he(e2, t2, null, null, { returnPromise: true });
            }
          }
          function Ir(e2) {
            var t2 = [];
            while (e2) {
              t2.push(e2);
              e2 = e2.parentElement;
            }
            return t2;
          }
          function kr(e2, t2, r2) {
            var n2;
            var i2;
            if (typeof URL === "function") {
              i2 = new URL(t2, document.location.href);
              var a2 = document.location.origin;
              n2 = a2 === i2.origin;
            } else {
              i2 = t2;
              n2 = s(t2, document.location.origin);
            }
            if (Q.config.selfRequestsOnly) {
              if (!n2) {
                return false;
              }
            }
            return ce(e2, "htmx:validateUrl", le({ url: i2, sameHost: n2 }, r2));
          }
          function he(t2, r2, n2, i2, a2, e2) {
            var o2 = null;
            var s2 = null;
            a2 = a2 != null ? a2 : {};
            if (a2.returnPromise && typeof Promise !== "undefined") {
              var l2 = new Promise(function(e3, t3) {
                o2 = e3;
                s2 = t3;
              });
            }
            if (n2 == null) {
              n2 = re().body;
            }
            var M2 = a2.handler || Mr;
            var X2 = a2.select || null;
            if (!se(n2)) {
              ie(o2);
              return l2;
            }
            var u2 = a2.targetOverride || ye(n2);
            if (u2 == null || u2 == me) {
              fe(n2, "htmx:targetError", { target: te(n2, "hx-target") });
              ie(s2);
              return l2;
            }
            var f2 = ae(n2);
            var c2 = f2.lastButtonClicked;
            if (c2) {
              var h2 = ee(c2, "formaction");
              if (h2 != null) {
                r2 = h2;
              }
              var v2 = ee(c2, "formmethod");
              if (v2 != null) {
                if (v2.toLowerCase() !== "dialog") {
                  t2 = v2;
                }
              }
            }
            var d2 = ne(n2, "hx-confirm");
            if (e2 === void 0) {
              var D2 = function(e3) {
                return he(t2, r2, n2, i2, a2, !!e3);
              };
              var U2 = { target: u2, elt: n2, path: r2, verb: t2, triggeringEvent: i2, etc: a2, issueRequest: D2, question: d2 };
              if (ce(n2, "htmx:confirm", U2) === false) {
                ie(o2);
                return l2;
              }
            }
            var g2 = n2;
            var m2 = ne(n2, "hx-sync");
            var p2 = null;
            var x2 = false;
            if (m2) {
              var B2 = m2.split(":");
              var F2 = B2[0].trim();
              if (F2 === "this") {
                g2 = xe(n2, "hx-sync");
              } else {
                g2 = ue(n2, F2);
              }
              m2 = (B2[1] || "drop").trim();
              f2 = ae(g2);
              if (m2 === "drop" && f2.xhr && f2.abortable !== true) {
                ie(o2);
                return l2;
              } else if (m2 === "abort") {
                if (f2.xhr) {
                  ie(o2);
                  return l2;
                } else {
                  x2 = true;
                }
              } else if (m2 === "replace") {
                ce(g2, "htmx:abort");
              } else if (m2.indexOf("queue") === 0) {
                var V2 = m2.split(" ");
                p2 = (V2[1] || "last").trim();
              }
            }
            if (f2.xhr) {
              if (f2.abortable) {
                ce(g2, "htmx:abort");
              } else {
                if (p2 == null) {
                  if (i2) {
                    var y2 = ae(i2);
                    if (y2 && y2.triggerSpec && y2.triggerSpec.queue) {
                      p2 = y2.triggerSpec.queue;
                    }
                  }
                  if (p2 == null) {
                    p2 = "last";
                  }
                }
                if (f2.queuedRequests == null) {
                  f2.queuedRequests = [];
                }
                if (p2 === "first" && f2.queuedRequests.length === 0) {
                  f2.queuedRequests.push(function() {
                    he(t2, r2, n2, i2, a2);
                  });
                } else if (p2 === "all") {
                  f2.queuedRequests.push(function() {
                    he(t2, r2, n2, i2, a2);
                  });
                } else if (p2 === "last") {
                  f2.queuedRequests = [];
                  f2.queuedRequests.push(function() {
                    he(t2, r2, n2, i2, a2);
                  });
                }
                ie(o2);
                return l2;
              }
            }
            var b2 = new XMLHttpRequest();
            f2.xhr = b2;
            f2.abortable = x2;
            var w2 = function() {
              f2.xhr = null;
              f2.abortable = false;
              if (f2.queuedRequests != null && f2.queuedRequests.length > 0) {
                var e3 = f2.queuedRequests.shift();
                e3();
              }
            };
            var j2 = ne(n2, "hx-prompt");
            if (j2) {
              var S2 = prompt(j2);
              if (S2 === null || !ce(n2, "htmx:prompt", { prompt: S2, target: u2 })) {
                ie(o2);
                w2();
                return l2;
              }
            }
            if (d2 && !e2) {
              if (!confirm(d2)) {
                ie(o2);
                w2();
                return l2;
              }
            }
            var E2 = xr(n2, u2, S2);
            if (t2 !== "get" && !Sr(n2)) {
              E2["Content-Type"] = "application/x-www-form-urlencoded";
            }
            if (a2.headers) {
              E2 = le(E2, a2.headers);
            }
            var _2 = dr(n2, t2);
            var C2 = _2.errors;
            var R2 = _2.values;
            if (a2.values) {
              R2 = le(R2, a2.values);
            }
            var z2 = Hr(n2);
            var $2 = le(R2, z2);
            var T2 = yr($2, n2);
            if (Q.config.getCacheBusterParam && t2 === "get") {
              T2["org.htmx.cache-buster"] = ee(u2, "id") || "true";
            }
            if (r2 == null || r2 === "") {
              r2 = re().location.href;
            }
            var O2 = Rr(n2, "hx-request");
            var W2 = ae(n2).boosted;
            var q2 = Q.config.methodsThatUseUrlParams.indexOf(t2) >= 0;
            var H2 = { boosted: W2, useUrlParams: q2, parameters: T2, unfilteredParameters: $2, headers: E2, target: u2, verb: t2, errors: C2, withCredentials: a2.credentials || O2.credentials || Q.config.withCredentials, timeout: a2.timeout || O2.timeout || Q.config.timeout, path: r2, triggeringEvent: i2 };
            if (!ce(n2, "htmx:configRequest", H2)) {
              ie(o2);
              w2();
              return l2;
            }
            r2 = H2.path;
            t2 = H2.verb;
            E2 = H2.headers;
            T2 = H2.parameters;
            C2 = H2.errors;
            q2 = H2.useUrlParams;
            if (C2 && C2.length > 0) {
              ce(n2, "htmx:validation:halted", H2);
              ie(o2);
              w2();
              return l2;
            }
            var G2 = r2.split("#");
            var J2 = G2[0];
            var L2 = G2[1];
            var A2 = r2;
            if (q2) {
              A2 = J2;
              var Z2 = Object.keys(T2).length !== 0;
              if (Z2) {
                if (A2.indexOf("?") < 0) {
                  A2 += "?";
                } else {
                  A2 += "&";
                }
                A2 += mr(T2);
                if (L2) {
                  A2 += "#" + L2;
                }
              }
            }
            if (!kr(n2, A2, H2)) {
              fe(n2, "htmx:invalidPath", H2);
              ie(s2);
              return l2;
            }
            b2.open(t2.toUpperCase(), A2, true);
            b2.overrideMimeType("text/html");
            b2.withCredentials = H2.withCredentials;
            b2.timeout = H2.timeout;
            if (O2.noHeaders) {
            } else {
              for (var N2 in E2) {
                if (E2.hasOwnProperty(N2)) {
                  var K2 = E2[N2];
                  Lr(b2, N2, K2);
                }
              }
            }
            var I2 = { xhr: b2, target: u2, requestConfig: H2, etc: a2, boosted: W2, select: X2, pathInfo: { requestPath: r2, finalRequestPath: A2, anchor: L2 } };
            b2.onload = function() {
              try {
                var e3 = Ir(n2);
                I2.pathInfo.responsePath = Ar(b2);
                M2(n2, I2);
                lr(k2, P2);
                ce(n2, "htmx:afterRequest", I2);
                ce(n2, "htmx:afterOnLoad", I2);
                if (!se(n2)) {
                  var t3 = null;
                  while (e3.length > 0 && t3 == null) {
                    var r3 = e3.shift();
                    if (se(r3)) {
                      t3 = r3;
                    }
                  }
                  if (t3) {
                    ce(t3, "htmx:afterRequest", I2);
                    ce(t3, "htmx:afterOnLoad", I2);
                  }
                }
                ie(o2);
                w2();
              } catch (e4) {
                fe(n2, "htmx:onLoadError", le({ error: e4 }, I2));
                throw e4;
              }
            };
            b2.onerror = function() {
              lr(k2, P2);
              fe(n2, "htmx:afterRequest", I2);
              fe(n2, "htmx:sendError", I2);
              ie(s2);
              w2();
            };
            b2.onabort = function() {
              lr(k2, P2);
              fe(n2, "htmx:afterRequest", I2);
              fe(n2, "htmx:sendAbort", I2);
              ie(s2);
              w2();
            };
            b2.ontimeout = function() {
              lr(k2, P2);
              fe(n2, "htmx:afterRequest", I2);
              fe(n2, "htmx:timeout", I2);
              ie(s2);
              w2();
            };
            if (!ce(n2, "htmx:beforeRequest", I2)) {
              ie(o2);
              w2();
              return l2;
            }
            var k2 = or(n2);
            var P2 = sr(n2);
            oe(["loadstart", "loadend", "progress", "abort"], function(t3) {
              oe([b2, b2.upload], function(e3) {
                e3.addEventListener(t3, function(e4) {
                  ce(n2, "htmx:xhr:" + t3, { lengthComputable: e4.lengthComputable, loaded: e4.loaded, total: e4.total });
                });
              });
            });
            ce(n2, "htmx:beforeSend", I2);
            var Y2 = q2 ? null : Er(b2, n2, T2);
            b2.send(Y2);
            return l2;
          }
          function Pr(e2, t2) {
            var r2 = t2.xhr;
            var n2 = null;
            var i2 = null;
            if (O(r2, /HX-Push:/i)) {
              n2 = r2.getResponseHeader("HX-Push");
              i2 = "push";
            } else if (O(r2, /HX-Push-Url:/i)) {
              n2 = r2.getResponseHeader("HX-Push-Url");
              i2 = "push";
            } else if (O(r2, /HX-Replace-Url:/i)) {
              n2 = r2.getResponseHeader("HX-Replace-Url");
              i2 = "replace";
            }
            if (n2) {
              if (n2 === "false") {
                return {};
              } else {
                return { type: i2, path: n2 };
              }
            }
            var a2 = t2.pathInfo.finalRequestPath;
            var o2 = t2.pathInfo.responsePath;
            var s2 = ne(e2, "hx-push-url");
            var l2 = ne(e2, "hx-replace-url");
            var u2 = ae(e2).boosted;
            var f2 = null;
            var c2 = null;
            if (s2) {
              f2 = "push";
              c2 = s2;
            } else if (l2) {
              f2 = "replace";
              c2 = l2;
            } else if (u2) {
              f2 = "push";
              c2 = o2 || a2;
            }
            if (c2) {
              if (c2 === "false") {
                return {};
              }
              if (c2 === "true") {
                c2 = o2 || a2;
              }
              if (t2.pathInfo.anchor && c2.indexOf("#") === -1) {
                c2 = c2 + "#" + t2.pathInfo.anchor;
              }
              return { type: f2, path: c2 };
            } else {
              return {};
            }
          }
          function Mr(l2, u2) {
            var f2 = u2.xhr;
            var c2 = u2.target;
            var e2 = u2.etc;
            var t2 = u2.requestConfig;
            var h2 = u2.select;
            if (!ce(l2, "htmx:beforeOnLoad", u2))
              return;
            if (O(f2, /HX-Trigger:/i)) {
              _e(f2, "HX-Trigger", l2);
            }
            if (O(f2, /HX-Location:/i)) {
              er();
              var r2 = f2.getResponseHeader("HX-Location");
              var v2;
              if (r2.indexOf("{") === 0) {
                v2 = E(r2);
                r2 = v2["path"];
                delete v2["path"];
              }
              Nr("GET", r2, v2).then(function() {
                tr(r2);
              });
              return;
            }
            var n2 = O(f2, /HX-Refresh:/i) && "true" === f2.getResponseHeader("HX-Refresh");
            if (O(f2, /HX-Redirect:/i)) {
              location.href = f2.getResponseHeader("HX-Redirect");
              n2 && location.reload();
              return;
            }
            if (n2) {
              location.reload();
              return;
            }
            if (O(f2, /HX-Retarget:/i)) {
              if (f2.getResponseHeader("HX-Retarget") === "this") {
                u2.target = l2;
              } else {
                u2.target = ue(l2, f2.getResponseHeader("HX-Retarget"));
              }
            }
            var d2 = Pr(l2, u2);
            var i2 = f2.status >= 200 && f2.status < 400 && f2.status !== 204;
            var g2 = f2.response;
            var a2 = f2.status >= 400;
            var m2 = Q.config.ignoreTitle;
            var o2 = le({ shouldSwap: i2, serverResponse: g2, isError: a2, ignoreTitle: m2 }, u2);
            if (!ce(c2, "htmx:beforeSwap", o2))
              return;
            c2 = o2.target;
            g2 = o2.serverResponse;
            a2 = o2.isError;
            m2 = o2.ignoreTitle;
            u2.target = c2;
            u2.failed = a2;
            u2.successful = !a2;
            if (o2.shouldSwap) {
              if (f2.status === 286) {
                at(l2);
              }
              R(l2, function(e3) {
                g2 = e3.transformResponse(g2, f2, l2);
              });
              if (d2.type) {
                er();
              }
              var s2 = e2.swapOverride;
              if (O(f2, /HX-Reswap:/i)) {
                s2 = f2.getResponseHeader("HX-Reswap");
              }
              var v2 = wr(l2, s2);
              if (v2.hasOwnProperty("ignoreTitle")) {
                m2 = v2.ignoreTitle;
              }
              c2.classList.add(Q.config.swappingClass);
              var p2 = null;
              var x2 = null;
              var y2 = function() {
                try {
                  var e3 = document.activeElement;
                  var t3 = {};
                  try {
                    t3 = { elt: e3, start: e3 ? e3.selectionStart : null, end: e3 ? e3.selectionEnd : null };
                  } catch (e4) {
                  }
                  var r3;
                  if (h2) {
                    r3 = h2;
                  }
                  if (O(f2, /HX-Reselect:/i)) {
                    r3 = f2.getResponseHeader("HX-Reselect");
                  }
                  if (d2.type) {
                    ce(re().body, "htmx:beforeHistoryUpdate", le({ history: d2 }, u2));
                    if (d2.type === "push") {
                      tr(d2.path);
                      ce(re().body, "htmx:pushedIntoHistory", { path: d2.path });
                    } else {
                      rr(d2.path);
                      ce(re().body, "htmx:replacedInHistory", { path: d2.path });
                    }
                  }
                  var n3 = T(c2);
                  je(v2.swapStyle, c2, l2, g2, n3, r3);
                  if (t3.elt && !se(t3.elt) && ee(t3.elt, "id")) {
                    var i3 = document.getElementById(ee(t3.elt, "id"));
                    var a3 = { preventScroll: v2.focusScroll !== void 0 ? !v2.focusScroll : !Q.config.defaultFocusScroll };
                    if (i3) {
                      if (t3.start && i3.setSelectionRange) {
                        try {
                          i3.setSelectionRange(t3.start, t3.end);
                        } catch (e4) {
                        }
                      }
                      i3.focus(a3);
                    }
                  }
                  c2.classList.remove(Q.config.swappingClass);
                  oe(n3.elts, function(e4) {
                    if (e4.classList) {
                      e4.classList.add(Q.config.settlingClass);
                    }
                    ce(e4, "htmx:afterSwap", u2);
                  });
                  if (O(f2, /HX-Trigger-After-Swap:/i)) {
                    var o3 = l2;
                    if (!se(l2)) {
                      o3 = re().body;
                    }
                    _e(f2, "HX-Trigger-After-Swap", o3);
                  }
                  var s3 = function() {
                    oe(n3.tasks, function(e5) {
                      e5.call();
                    });
                    oe(n3.elts, function(e5) {
                      if (e5.classList) {
                        e5.classList.remove(Q.config.settlingClass);
                      }
                      ce(e5, "htmx:afterSettle", u2);
                    });
                    if (u2.pathInfo.anchor) {
                      var e4 = re().getElementById(u2.pathInfo.anchor);
                      if (e4) {
                        e4.scrollIntoView({ block: "start", behavior: "auto" });
                      }
                    }
                    if (n3.title && !m2) {
                      var t4 = C("title");
                      if (t4) {
                        t4.innerHTML = n3.title;
                      } else {
                        window.document.title = n3.title;
                      }
                    }
                    Cr(n3.elts, v2);
                    if (O(f2, /HX-Trigger-After-Settle:/i)) {
                      var r4 = l2;
                      if (!se(l2)) {
                        r4 = re().body;
                      }
                      _e(f2, "HX-Trigger-After-Settle", r4);
                    }
                    ie(p2);
                  };
                  if (v2.settleDelay > 0) {
                    setTimeout(s3, v2.settleDelay);
                  } else {
                    s3();
                  }
                } catch (e4) {
                  fe(l2, "htmx:swapError", u2);
                  ie(x2);
                  throw e4;
                }
              };
              var b2 = Q.config.globalViewTransitions;
              if (v2.hasOwnProperty("transition")) {
                b2 = v2.transition;
              }
              if (b2 && ce(l2, "htmx:beforeTransition", u2) && typeof Promise !== "undefined" && document.startViewTransition) {
                var w2 = new Promise(function(e3, t3) {
                  p2 = e3;
                  x2 = t3;
                });
                var S2 = y2;
                y2 = function() {
                  document.startViewTransition(function() {
                    S2();
                    return w2;
                  });
                };
              }
              if (v2.swapDelay > 0) {
                setTimeout(y2, v2.swapDelay);
              } else {
                y2();
              }
            }
            if (a2) {
              fe(l2, "htmx:responseError", le({ error: "Response Status Error Code " + f2.status + " from " + u2.pathInfo.requestPath }, u2));
            }
          }
          var Xr = {};
          function Dr() {
            return { init: function(e2) {
              return null;
            }, onEvent: function(e2, t2) {
              return true;
            }, transformResponse: function(e2, t2, r2) {
              return e2;
            }, isInlineSwap: function(e2) {
              return false;
            }, handleSwap: function(e2, t2, r2, n2) {
              return false;
            }, encodeParameters: function(e2, t2, r2) {
              return null;
            } };
          }
          function Ur(e2, t2) {
            if (t2.init) {
              t2.init(r);
            }
            Xr[e2] = le(Dr(), t2);
          }
          function Br(e2) {
            delete Xr[e2];
          }
          function Fr(e2, r2, n2) {
            if (e2 == void 0) {
              return r2;
            }
            if (r2 == void 0) {
              r2 = [];
            }
            if (n2 == void 0) {
              n2 = [];
            }
            var t2 = te(e2, "hx-ext");
            if (t2) {
              oe(t2.split(","), function(e3) {
                e3 = e3.replace(/ /g, "");
                if (e3.slice(0, 7) == "ignore:") {
                  n2.push(e3.slice(7));
                  return;
                }
                if (n2.indexOf(e3) < 0) {
                  var t3 = Xr[e3];
                  if (t3 && r2.indexOf(t3) < 0) {
                    r2.push(t3);
                  }
                }
              });
            }
            return Fr(u(e2), r2, n2);
          }
          var Vr = false;
          re().addEventListener("DOMContentLoaded", function() {
            Vr = true;
          });
          function jr(e2) {
            if (Vr || re().readyState === "complete") {
              e2();
            } else {
              re().addEventListener("DOMContentLoaded", e2);
            }
          }
          function _r() {
            if (Q.config.includeIndicatorStyles !== false) {
              re().head.insertAdjacentHTML("beforeend", "<style>                      ." + Q.config.indicatorClass + "{opacity:0}                      ." + Q.config.requestClass + " ." + Q.config.indicatorClass + "{opacity:1; transition: opacity 200ms ease-in;}                      ." + Q.config.requestClass + "." + Q.config.indicatorClass + "{opacity:1; transition: opacity 200ms ease-in;}                    </style>");
            }
          }
          function zr() {
            var e2 = re().querySelector('meta[name="htmx-config"]');
            if (e2) {
              return E(e2.content);
            } else {
              return null;
            }
          }
          function $r() {
            var e2 = zr();
            if (e2) {
              Q.config = le(Q.config, e2);
            }
          }
          jr(function() {
            $r();
            _r();
            var e2 = re().body;
            zt(e2);
            var t2 = re().querySelectorAll("[hx-trigger='restored'],[data-hx-trigger='restored']");
            e2.addEventListener("htmx:abort", function(e3) {
              var t3 = e3.target;
              var r3 = ae(t3);
              if (r3 && r3.xhr) {
                r3.xhr.abort();
              }
            });
            const r2 = window.onpopstate ? window.onpopstate.bind(window) : null;
            window.onpopstate = function(e3) {
              if (e3.state && e3.state.htmx) {
                ar();
                oe(t2, function(e4) {
                  ce(e4, "htmx:restored", { document: re(), triggerEvent: ce });
                });
              } else {
                if (r2) {
                  r2(e3);
                }
              }
            };
            setTimeout(function() {
              ce(e2, "htmx:load", {});
              e2 = null;
            }, 0);
          });
          return Q;
        }();
      });
    }
  });

  // assets/static/js/htmx/htmx-main.js
  var import_htmx = __toESM(require_htmx_min());

  // assets/static/js/htmx/htmx-extend.js
  var jsonEnc = {
    onEvent: function(name, evt) {
      if (name === "htmx:configRequest") {
        evt.detail.headers["Content-Type"] = "application/json";
      }
    },
    encodeParameters: function(xhr, parameters, elt) {
      xhr.overrideMimeType("text/json");
      return JSON.stringify(parameters);
    }
  };

  // assets/static/js/htmx/htmx-main.js
  window.Htmx = import_htmx.default;
  import_htmx.default.defineExtension("json-enc", jsonEnc);
})();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2h0bXgub3JnL2Rpc3QvaHRteC5taW4uanMiLCAiLi4vLi4vaHRteC9odG14LW1haW4uanMiLCAiLi4vLi4vaHRteC9odG14LWV4dGVuZC5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiKGZ1bmN0aW9uKGUsdCl7aWYodHlwZW9mIGRlZmluZT09PVwiZnVuY3Rpb25cIiYmZGVmaW5lLmFtZCl7ZGVmaW5lKFtdLHQpfWVsc2UgaWYodHlwZW9mIG1vZHVsZT09PVwib2JqZWN0XCImJm1vZHVsZS5leHBvcnRzKXttb2R1bGUuZXhwb3J0cz10KCl9ZWxzZXtlLmh0bXg9ZS5odG14fHx0KCl9fSkodHlwZW9mIHNlbGYhPT1cInVuZGVmaW5lZFwiP3NlbGY6dGhpcyxmdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO3ZhciBRPXtvbkxvYWQ6Rixwcm9jZXNzOnp0LG9uOmRlLG9mZjpnZSx0cmlnZ2VyOmNlLGFqYXg6TnIsZmluZDpDLGZpbmRBbGw6ZixjbG9zZXN0OnYsdmFsdWVzOmZ1bmN0aW9uKGUsdCl7dmFyIHI9ZHIoZSx0fHxcInBvc3RcIik7cmV0dXJuIHIudmFsdWVzfSxyZW1vdmU6XyxhZGRDbGFzczp6LHJlbW92ZUNsYXNzOm4sdG9nZ2xlQ2xhc3M6JCx0YWtlQ2xhc3M6VyxkZWZpbmVFeHRlbnNpb246VXIscmVtb3ZlRXh0ZW5zaW9uOkJyLGxvZ0FsbDpWLGxvZ05vbmU6aixsb2dnZXI6bnVsbCxjb25maWc6e2hpc3RvcnlFbmFibGVkOnRydWUsaGlzdG9yeUNhY2hlU2l6ZToxMCxyZWZyZXNoT25IaXN0b3J5TWlzczpmYWxzZSxkZWZhdWx0U3dhcFN0eWxlOlwiaW5uZXJIVE1MXCIsZGVmYXVsdFN3YXBEZWxheTowLGRlZmF1bHRTZXR0bGVEZWxheToyMCxpbmNsdWRlSW5kaWNhdG9yU3R5bGVzOnRydWUsaW5kaWNhdG9yQ2xhc3M6XCJodG14LWluZGljYXRvclwiLHJlcXVlc3RDbGFzczpcImh0bXgtcmVxdWVzdFwiLGFkZGVkQ2xhc3M6XCJodG14LWFkZGVkXCIsc2V0dGxpbmdDbGFzczpcImh0bXgtc2V0dGxpbmdcIixzd2FwcGluZ0NsYXNzOlwiaHRteC1zd2FwcGluZ1wiLGFsbG93RXZhbDp0cnVlLGFsbG93U2NyaXB0VGFnczp0cnVlLGlubGluZVNjcmlwdE5vbmNlOlwiXCIsYXR0cmlidXRlc1RvU2V0dGxlOltcImNsYXNzXCIsXCJzdHlsZVwiLFwid2lkdGhcIixcImhlaWdodFwiXSx3aXRoQ3JlZGVudGlhbHM6ZmFsc2UsdGltZW91dDowLHdzUmVjb25uZWN0RGVsYXk6XCJmdWxsLWppdHRlclwiLHdzQmluYXJ5VHlwZTpcImJsb2JcIixkaXNhYmxlU2VsZWN0b3I6XCJbaHgtZGlzYWJsZV0sIFtkYXRhLWh4LWRpc2FibGVdXCIsdXNlVGVtcGxhdGVGcmFnbWVudHM6ZmFsc2Usc2Nyb2xsQmVoYXZpb3I6XCJzbW9vdGhcIixkZWZhdWx0Rm9jdXNTY3JvbGw6ZmFsc2UsZ2V0Q2FjaGVCdXN0ZXJQYXJhbTpmYWxzZSxnbG9iYWxWaWV3VHJhbnNpdGlvbnM6ZmFsc2UsbWV0aG9kc1RoYXRVc2VVcmxQYXJhbXM6W1wiZ2V0XCJdLHNlbGZSZXF1ZXN0c09ubHk6ZmFsc2UsaWdub3JlVGl0bGU6ZmFsc2Usc2Nyb2xsSW50b1ZpZXdPbkJvb3N0OnRydWUsdHJpZ2dlclNwZWNzQ2FjaGU6bnVsbH0scGFyc2VJbnRlcnZhbDpkLF86dCxjcmVhdGVFdmVudFNvdXJjZTpmdW5jdGlvbihlKXtyZXR1cm4gbmV3IEV2ZW50U291cmNlKGUse3dpdGhDcmVkZW50aWFsczp0cnVlfSl9LGNyZWF0ZVdlYlNvY2tldDpmdW5jdGlvbihlKXt2YXIgdD1uZXcgV2ViU29ja2V0KGUsW10pO3QuYmluYXJ5VHlwZT1RLmNvbmZpZy53c0JpbmFyeVR5cGU7cmV0dXJuIHR9LHZlcnNpb246XCIxLjkuMTBcIn07dmFyIHI9e2FkZFRyaWdnZXJIYW5kbGVyOkx0LGJvZHlDb250YWluczpzZSxjYW5BY2Nlc3NMb2NhbFN0b3JhZ2U6VSxmaW5kVGhpc0VsZW1lbnQ6eGUsZmlsdGVyVmFsdWVzOnlyLGhhc0F0dHJpYnV0ZTpvLGdldEF0dHJpYnV0ZVZhbHVlOnRlLGdldENsb3Nlc3RBdHRyaWJ1dGVWYWx1ZTpuZSxnZXRDbG9zZXN0TWF0Y2g6YyxnZXRFeHByZXNzaW9uVmFyczpIcixnZXRIZWFkZXJzOnhyLGdldElucHV0VmFsdWVzOmRyLGdldEludGVybmFsRGF0YTphZSxnZXRTd2FwU3BlY2lmaWNhdGlvbjp3cixnZXRUcmlnZ2VyU3BlY3M6aXQsZ2V0VGFyZ2V0OnllLG1ha2VGcmFnbWVudDpsLG1lcmdlT2JqZWN0czpsZSxtYWtlU2V0dGxlSW5mbzpULG9vYlN3YXA6RWUscXVlcnlTZWxlY3RvckV4dDp1ZSxzZWxlY3RBbmRTd2FwOmplLHNldHRsZUltbWVkaWF0ZWx5Om5yLHNob3VsZENhbmNlbDp1dCx0cmlnZ2VyRXZlbnQ6Y2UsdHJpZ2dlckVycm9yRXZlbnQ6ZmUsd2l0aEV4dGVuc2lvbnM6Un07dmFyIHc9W1wiZ2V0XCIsXCJwb3N0XCIsXCJwdXRcIixcImRlbGV0ZVwiLFwicGF0Y2hcIl07dmFyIGk9dy5tYXAoZnVuY3Rpb24oZSl7cmV0dXJuXCJbaHgtXCIrZStcIl0sIFtkYXRhLWh4LVwiK2UrXCJdXCJ9KS5qb2luKFwiLCBcIik7dmFyIFM9ZShcImhlYWRcIikscT1lKFwidGl0bGVcIiksSD1lKFwic3ZnXCIsdHJ1ZSk7ZnVuY3Rpb24gZShlLHQ9ZmFsc2Upe3JldHVybiBuZXcgUmVnRXhwKGA8JHtlfShcXFxcc1tePl0qPnw+KShbXFxcXHNcXFxcU10qPyk8XFxcXC8ke2V9PmAsdD9cImdpbVwiOlwiaW1cIil9ZnVuY3Rpb24gZChlKXtpZihlPT11bmRlZmluZWQpe3JldHVybiB1bmRlZmluZWR9bGV0IHQ9TmFOO2lmKGUuc2xpY2UoLTIpPT1cIm1zXCIpe3Q9cGFyc2VGbG9hdChlLnNsaWNlKDAsLTIpKX1lbHNlIGlmKGUuc2xpY2UoLTEpPT1cInNcIil7dD1wYXJzZUZsb2F0KGUuc2xpY2UoMCwtMSkpKjFlM31lbHNlIGlmKGUuc2xpY2UoLTEpPT1cIm1cIil7dD1wYXJzZUZsb2F0KGUuc2xpY2UoMCwtMSkpKjFlMyo2MH1lbHNle3Q9cGFyc2VGbG9hdChlKX1yZXR1cm4gaXNOYU4odCk/dW5kZWZpbmVkOnR9ZnVuY3Rpb24gZWUoZSx0KXtyZXR1cm4gZS5nZXRBdHRyaWJ1dGUmJmUuZ2V0QXR0cmlidXRlKHQpfWZ1bmN0aW9uIG8oZSx0KXtyZXR1cm4gZS5oYXNBdHRyaWJ1dGUmJihlLmhhc0F0dHJpYnV0ZSh0KXx8ZS5oYXNBdHRyaWJ1dGUoXCJkYXRhLVwiK3QpKX1mdW5jdGlvbiB0ZShlLHQpe3JldHVybiBlZShlLHQpfHxlZShlLFwiZGF0YS1cIit0KX1mdW5jdGlvbiB1KGUpe3JldHVybiBlLnBhcmVudEVsZW1lbnR9ZnVuY3Rpb24gcmUoKXtyZXR1cm4gZG9jdW1lbnR9ZnVuY3Rpb24gYyhlLHQpe3doaWxlKGUmJiF0KGUpKXtlPXUoZSl9cmV0dXJuIGU/ZTpudWxsfWZ1bmN0aW9uIEwoZSx0LHIpe3ZhciBuPXRlKHQscik7dmFyIGk9dGUodCxcImh4LWRpc2luaGVyaXRcIik7aWYoZSE9PXQmJmkmJihpPT09XCIqXCJ8fGkuc3BsaXQoXCIgXCIpLmluZGV4T2Yocik+PTApKXtyZXR1cm5cInVuc2V0XCJ9ZWxzZXtyZXR1cm4gbn19ZnVuY3Rpb24gbmUodCxyKXt2YXIgbj1udWxsO2ModCxmdW5jdGlvbihlKXtyZXR1cm4gbj1MKHQsZSxyKX0pO2lmKG4hPT1cInVuc2V0XCIpe3JldHVybiBufX1mdW5jdGlvbiBoKGUsdCl7dmFyIHI9ZS5tYXRjaGVzfHxlLm1hdGNoZXNTZWxlY3Rvcnx8ZS5tc01hdGNoZXNTZWxlY3Rvcnx8ZS5tb3pNYXRjaGVzU2VsZWN0b3J8fGUud2Via2l0TWF0Y2hlc1NlbGVjdG9yfHxlLm9NYXRjaGVzU2VsZWN0b3I7cmV0dXJuIHImJnIuY2FsbChlLHQpfWZ1bmN0aW9uIEEoZSl7dmFyIHQ9LzwoW2Etel1bXlxcL1xcMD5cXHgyMFxcdFxcclxcblxcZl0qKS9pO3ZhciByPXQuZXhlYyhlKTtpZihyKXtyZXR1cm4gclsxXS50b0xvd2VyQ2FzZSgpfWVsc2V7cmV0dXJuXCJcIn19ZnVuY3Rpb24gYShlLHQpe3ZhciByPW5ldyBET01QYXJzZXI7dmFyIG49ci5wYXJzZUZyb21TdHJpbmcoZSxcInRleHQvaHRtbFwiKTt2YXIgaT1uLmJvZHk7d2hpbGUodD4wKXt0LS07aT1pLmZpcnN0Q2hpbGR9aWYoaT09bnVsbCl7aT1yZSgpLmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKX1yZXR1cm4gaX1mdW5jdGlvbiBOKGUpe3JldHVybi88Ym9keS8udGVzdChlKX1mdW5jdGlvbiBsKGUpe3ZhciB0PSFOKGUpO3ZhciByPUEoZSk7dmFyIG49ZTtpZihyPT09XCJoZWFkXCIpe249bi5yZXBsYWNlKFMsXCJcIil9aWYoUS5jb25maWcudXNlVGVtcGxhdGVGcmFnbWVudHMmJnQpe3ZhciBpPWEoXCI8Ym9keT48dGVtcGxhdGU+XCIrbitcIjwvdGVtcGxhdGU+PC9ib2R5PlwiLDApO3JldHVybiBpLnF1ZXJ5U2VsZWN0b3IoXCJ0ZW1wbGF0ZVwiKS5jb250ZW50fXN3aXRjaChyKXtjYXNlXCJ0aGVhZFwiOmNhc2VcInRib2R5XCI6Y2FzZVwidGZvb3RcIjpjYXNlXCJjb2xncm91cFwiOmNhc2VcImNhcHRpb25cIjpyZXR1cm4gYShcIjx0YWJsZT5cIituK1wiPC90YWJsZT5cIiwxKTtjYXNlXCJjb2xcIjpyZXR1cm4gYShcIjx0YWJsZT48Y29sZ3JvdXA+XCIrbitcIjwvY29sZ3JvdXA+PC90YWJsZT5cIiwyKTtjYXNlXCJ0clwiOnJldHVybiBhKFwiPHRhYmxlPjx0Ym9keT5cIituK1wiPC90Ym9keT48L3RhYmxlPlwiLDIpO2Nhc2VcInRkXCI6Y2FzZVwidGhcIjpyZXR1cm4gYShcIjx0YWJsZT48dGJvZHk+PHRyPlwiK24rXCI8L3RyPjwvdGJvZHk+PC90YWJsZT5cIiwzKTtjYXNlXCJzY3JpcHRcIjpjYXNlXCJzdHlsZVwiOnJldHVybiBhKFwiPGRpdj5cIituK1wiPC9kaXY+XCIsMSk7ZGVmYXVsdDpyZXR1cm4gYShuLDApfX1mdW5jdGlvbiBpZShlKXtpZihlKXtlKCl9fWZ1bmN0aW9uIEkoZSx0KXtyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGUpPT09XCJbb2JqZWN0IFwiK3QrXCJdXCJ9ZnVuY3Rpb24gayhlKXtyZXR1cm4gSShlLFwiRnVuY3Rpb25cIil9ZnVuY3Rpb24gUChlKXtyZXR1cm4gSShlLFwiT2JqZWN0XCIpfWZ1bmN0aW9uIGFlKGUpe3ZhciB0PVwiaHRteC1pbnRlcm5hbC1kYXRhXCI7dmFyIHI9ZVt0XTtpZighcil7cj1lW3RdPXt9fXJldHVybiByfWZ1bmN0aW9uIE0oZSl7dmFyIHQ9W107aWYoZSl7Zm9yKHZhciByPTA7cjxlLmxlbmd0aDtyKyspe3QucHVzaChlW3JdKX19cmV0dXJuIHR9ZnVuY3Rpb24gb2UoZSx0KXtpZihlKXtmb3IodmFyIHI9MDtyPGUubGVuZ3RoO3IrKyl7dChlW3JdKX19fWZ1bmN0aW9uIFgoZSl7dmFyIHQ9ZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTt2YXIgcj10LnRvcDt2YXIgbj10LmJvdHRvbTtyZXR1cm4gcjx3aW5kb3cuaW5uZXJIZWlnaHQmJm4+PTB9ZnVuY3Rpb24gc2UoZSl7aWYoZS5nZXRSb290Tm9kZSYmZS5nZXRSb290Tm9kZSgpaW5zdGFuY2VvZiB3aW5kb3cuU2hhZG93Um9vdCl7cmV0dXJuIHJlKCkuYm9keS5jb250YWlucyhlLmdldFJvb3ROb2RlKCkuaG9zdCl9ZWxzZXtyZXR1cm4gcmUoKS5ib2R5LmNvbnRhaW5zKGUpfX1mdW5jdGlvbiBEKGUpe3JldHVybiBlLnRyaW0oKS5zcGxpdCgvXFxzKy8pfWZ1bmN0aW9uIGxlKGUsdCl7Zm9yKHZhciByIGluIHQpe2lmKHQuaGFzT3duUHJvcGVydHkocikpe2Vbcl09dFtyXX19cmV0dXJuIGV9ZnVuY3Rpb24gRShlKXt0cnl7cmV0dXJuIEpTT04ucGFyc2UoZSl9Y2F0Y2goZSl7YihlKTtyZXR1cm4gbnVsbH19ZnVuY3Rpb24gVSgpe3ZhciBlPVwiaHRteDpsb2NhbFN0b3JhZ2VUZXN0XCI7dHJ5e2xvY2FsU3RvcmFnZS5zZXRJdGVtKGUsZSk7bG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oZSk7cmV0dXJuIHRydWV9Y2F0Y2goZSl7cmV0dXJuIGZhbHNlfX1mdW5jdGlvbiBCKHQpe3RyeXt2YXIgZT1uZXcgVVJMKHQpO2lmKGUpe3Q9ZS5wYXRobmFtZStlLnNlYXJjaH1pZighL15cXC8kLy50ZXN0KHQpKXt0PXQucmVwbGFjZSgvXFwvKyQvLFwiXCIpfXJldHVybiB0fWNhdGNoKGUpe3JldHVybiB0fX1mdW5jdGlvbiB0KGUpe3JldHVybiBUcihyZSgpLmJvZHksZnVuY3Rpb24oKXtyZXR1cm4gZXZhbChlKX0pfWZ1bmN0aW9uIEYodCl7dmFyIGU9US5vbihcImh0bXg6bG9hZFwiLGZ1bmN0aW9uKGUpe3QoZS5kZXRhaWwuZWx0KX0pO3JldHVybiBlfWZ1bmN0aW9uIFYoKXtRLmxvZ2dlcj1mdW5jdGlvbihlLHQscil7aWYoY29uc29sZSl7Y29uc29sZS5sb2codCxlLHIpfX19ZnVuY3Rpb24gaigpe1EubG9nZ2VyPW51bGx9ZnVuY3Rpb24gQyhlLHQpe2lmKHQpe3JldHVybiBlLnF1ZXJ5U2VsZWN0b3IodCl9ZWxzZXtyZXR1cm4gQyhyZSgpLGUpfX1mdW5jdGlvbiBmKGUsdCl7aWYodCl7cmV0dXJuIGUucXVlcnlTZWxlY3RvckFsbCh0KX1lbHNle3JldHVybiBmKHJlKCksZSl9fWZ1bmN0aW9uIF8oZSx0KXtlPWcoZSk7aWYodCl7c2V0VGltZW91dChmdW5jdGlvbigpe18oZSk7ZT1udWxsfSx0KX1lbHNle2UucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChlKX19ZnVuY3Rpb24geihlLHQscil7ZT1nKGUpO2lmKHIpe3NldFRpbWVvdXQoZnVuY3Rpb24oKXt6KGUsdCk7ZT1udWxsfSxyKX1lbHNle2UuY2xhc3NMaXN0JiZlLmNsYXNzTGlzdC5hZGQodCl9fWZ1bmN0aW9uIG4oZSx0LHIpe2U9ZyhlKTtpZihyKXtzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7bihlLHQpO2U9bnVsbH0scil9ZWxzZXtpZihlLmNsYXNzTGlzdCl7ZS5jbGFzc0xpc3QucmVtb3ZlKHQpO2lmKGUuY2xhc3NMaXN0Lmxlbmd0aD09PTApe2UucmVtb3ZlQXR0cmlidXRlKFwiY2xhc3NcIil9fX19ZnVuY3Rpb24gJChlLHQpe2U9ZyhlKTtlLmNsYXNzTGlzdC50b2dnbGUodCl9ZnVuY3Rpb24gVyhlLHQpe2U9ZyhlKTtvZShlLnBhcmVudEVsZW1lbnQuY2hpbGRyZW4sZnVuY3Rpb24oZSl7bihlLHQpfSk7eihlLHQpfWZ1bmN0aW9uIHYoZSx0KXtlPWcoZSk7aWYoZS5jbG9zZXN0KXtyZXR1cm4gZS5jbG9zZXN0KHQpfWVsc2V7ZG97aWYoZT09bnVsbHx8aChlLHQpKXtyZXR1cm4gZX19d2hpbGUoZT1lJiZ1KGUpKTtyZXR1cm4gbnVsbH19ZnVuY3Rpb24gcyhlLHQpe3JldHVybiBlLnN1YnN0cmluZygwLHQubGVuZ3RoKT09PXR9ZnVuY3Rpb24gRyhlLHQpe3JldHVybiBlLnN1YnN0cmluZyhlLmxlbmd0aC10Lmxlbmd0aCk9PT10fWZ1bmN0aW9uIEooZSl7dmFyIHQ9ZS50cmltKCk7aWYocyh0LFwiPFwiKSYmRyh0LFwiLz5cIikpe3JldHVybiB0LnN1YnN0cmluZygxLHQubGVuZ3RoLTIpfWVsc2V7cmV0dXJuIHR9fWZ1bmN0aW9uIFooZSx0KXtpZih0LmluZGV4T2YoXCJjbG9zZXN0IFwiKT09PTApe3JldHVyblt2KGUsSih0LnN1YnN0cig4KSkpXX1lbHNlIGlmKHQuaW5kZXhPZihcImZpbmQgXCIpPT09MCl7cmV0dXJuW0MoZSxKKHQuc3Vic3RyKDUpKSldfWVsc2UgaWYodD09PVwibmV4dFwiKXtyZXR1cm5bZS5uZXh0RWxlbWVudFNpYmxpbmddfWVsc2UgaWYodC5pbmRleE9mKFwibmV4dCBcIik9PT0wKXtyZXR1cm5bSyhlLEoodC5zdWJzdHIoNSkpKV19ZWxzZSBpZih0PT09XCJwcmV2aW91c1wiKXtyZXR1cm5bZS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nXX1lbHNlIGlmKHQuaW5kZXhPZihcInByZXZpb3VzIFwiKT09PTApe3JldHVybltZKGUsSih0LnN1YnN0cig5KSkpXX1lbHNlIGlmKHQ9PT1cImRvY3VtZW50XCIpe3JldHVybltkb2N1bWVudF19ZWxzZSBpZih0PT09XCJ3aW5kb3dcIil7cmV0dXJuW3dpbmRvd119ZWxzZSBpZih0PT09XCJib2R5XCIpe3JldHVybltkb2N1bWVudC5ib2R5XX1lbHNle3JldHVybiByZSgpLnF1ZXJ5U2VsZWN0b3JBbGwoSih0KSl9fXZhciBLPWZ1bmN0aW9uKGUsdCl7dmFyIHI9cmUoKS5xdWVyeVNlbGVjdG9yQWxsKHQpO2Zvcih2YXIgbj0wO248ci5sZW5ndGg7bisrKXt2YXIgaT1yW25dO2lmKGkuY29tcGFyZURvY3VtZW50UG9zaXRpb24oZSk9PT1Ob2RlLkRPQ1VNRU5UX1BPU0lUSU9OX1BSRUNFRElORyl7cmV0dXJuIGl9fX07dmFyIFk9ZnVuY3Rpb24oZSx0KXt2YXIgcj1yZSgpLnF1ZXJ5U2VsZWN0b3JBbGwodCk7Zm9yKHZhciBuPXIubGVuZ3RoLTE7bj49MDtuLS0pe3ZhciBpPXJbbl07aWYoaS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihlKT09PU5vZGUuRE9DVU1FTlRfUE9TSVRJT05fRk9MTE9XSU5HKXtyZXR1cm4gaX19fTtmdW5jdGlvbiB1ZShlLHQpe2lmKHQpe3JldHVybiBaKGUsdClbMF19ZWxzZXtyZXR1cm4gWihyZSgpLmJvZHksZSlbMF19fWZ1bmN0aW9uIGcoZSl7aWYoSShlLFwiU3RyaW5nXCIpKXtyZXR1cm4gQyhlKX1lbHNle3JldHVybiBlfX1mdW5jdGlvbiB2ZShlLHQscil7aWYoayh0KSl7cmV0dXJue3RhcmdldDpyZSgpLmJvZHksZXZlbnQ6ZSxsaXN0ZW5lcjp0fX1lbHNle3JldHVybnt0YXJnZXQ6ZyhlKSxldmVudDp0LGxpc3RlbmVyOnJ9fX1mdW5jdGlvbiBkZSh0LHIsbil7anIoZnVuY3Rpb24oKXt2YXIgZT12ZSh0LHIsbik7ZS50YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihlLmV2ZW50LGUubGlzdGVuZXIpfSk7dmFyIGU9ayhyKTtyZXR1cm4gZT9yOm59ZnVuY3Rpb24gZ2UodCxyLG4pe2pyKGZ1bmN0aW9uKCl7dmFyIGU9dmUodCxyLG4pO2UudGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoZS5ldmVudCxlLmxpc3RlbmVyKX0pO3JldHVybiBrKHIpP3I6bn12YXIgbWU9cmUoKS5jcmVhdGVFbGVtZW50KFwib3V0cHV0XCIpO2Z1bmN0aW9uIHBlKGUsdCl7dmFyIHI9bmUoZSx0KTtpZihyKXtpZihyPT09XCJ0aGlzXCIpe3JldHVyblt4ZShlLHQpXX1lbHNle3ZhciBuPVooZSxyKTtpZihuLmxlbmd0aD09PTApe2IoJ1RoZSBzZWxlY3RvciBcIicrcisnXCIgb24gJyt0K1wiIHJldHVybmVkIG5vIG1hdGNoZXMhXCIpO3JldHVyblttZV19ZWxzZXtyZXR1cm4gbn19fX1mdW5jdGlvbiB4ZShlLHQpe3JldHVybiBjKGUsZnVuY3Rpb24oZSl7cmV0dXJuIHRlKGUsdCkhPW51bGx9KX1mdW5jdGlvbiB5ZShlKXt2YXIgdD1uZShlLFwiaHgtdGFyZ2V0XCIpO2lmKHQpe2lmKHQ9PT1cInRoaXNcIil7cmV0dXJuIHhlKGUsXCJoeC10YXJnZXRcIil9ZWxzZXtyZXR1cm4gdWUoZSx0KX19ZWxzZXt2YXIgcj1hZShlKTtpZihyLmJvb3N0ZWQpe3JldHVybiByZSgpLmJvZHl9ZWxzZXtyZXR1cm4gZX19fWZ1bmN0aW9uIGJlKGUpe3ZhciB0PVEuY29uZmlnLmF0dHJpYnV0ZXNUb1NldHRsZTtmb3IodmFyIHI9MDtyPHQubGVuZ3RoO3IrKyl7aWYoZT09PXRbcl0pe3JldHVybiB0cnVlfX1yZXR1cm4gZmFsc2V9ZnVuY3Rpb24gd2UodCxyKXtvZSh0LmF0dHJpYnV0ZXMsZnVuY3Rpb24oZSl7aWYoIXIuaGFzQXR0cmlidXRlKGUubmFtZSkmJmJlKGUubmFtZSkpe3QucmVtb3ZlQXR0cmlidXRlKGUubmFtZSl9fSk7b2Uoci5hdHRyaWJ1dGVzLGZ1bmN0aW9uKGUpe2lmKGJlKGUubmFtZSkpe3Quc2V0QXR0cmlidXRlKGUubmFtZSxlLnZhbHVlKX19KX1mdW5jdGlvbiBTZShlLHQpe3ZhciByPUZyKHQpO2Zvcih2YXIgbj0wO248ci5sZW5ndGg7bisrKXt2YXIgaT1yW25dO3RyeXtpZihpLmlzSW5saW5lU3dhcChlKSl7cmV0dXJuIHRydWV9fWNhdGNoKGUpe2IoZSl9fXJldHVybiBlPT09XCJvdXRlckhUTUxcIn1mdW5jdGlvbiBFZShlLGksYSl7dmFyIHQ9XCIjXCIrZWUoaSxcImlkXCIpO3ZhciBvPVwib3V0ZXJIVE1MXCI7aWYoZT09PVwidHJ1ZVwiKXt9ZWxzZSBpZihlLmluZGV4T2YoXCI6XCIpPjApe289ZS5zdWJzdHIoMCxlLmluZGV4T2YoXCI6XCIpKTt0PWUuc3Vic3RyKGUuaW5kZXhPZihcIjpcIikrMSxlLmxlbmd0aCl9ZWxzZXtvPWV9dmFyIHI9cmUoKS5xdWVyeVNlbGVjdG9yQWxsKHQpO2lmKHIpe29lKHIsZnVuY3Rpb24oZSl7dmFyIHQ7dmFyIHI9aS5jbG9uZU5vZGUodHJ1ZSk7dD1yZSgpLmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTt0LmFwcGVuZENoaWxkKHIpO2lmKCFTZShvLGUpKXt0PXJ9dmFyIG49e3Nob3VsZFN3YXA6dHJ1ZSx0YXJnZXQ6ZSxmcmFnbWVudDp0fTtpZighY2UoZSxcImh0bXg6b29iQmVmb3JlU3dhcFwiLG4pKXJldHVybjtlPW4udGFyZ2V0O2lmKG5bXCJzaG91bGRTd2FwXCJdKXtGZShvLGUsZSx0LGEpfW9lKGEuZWx0cyxmdW5jdGlvbihlKXtjZShlLFwiaHRteDpvb2JBZnRlclN3YXBcIixuKX0pfSk7aS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGkpfWVsc2V7aS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGkpO2ZlKHJlKCkuYm9keSxcImh0bXg6b29iRXJyb3JOb1RhcmdldFwiLHtjb250ZW50Oml9KX1yZXR1cm4gZX1mdW5jdGlvbiBDZShlLHQscil7dmFyIG49bmUoZSxcImh4LXNlbGVjdC1vb2JcIik7aWYobil7dmFyIGk9bi5zcGxpdChcIixcIik7Zm9yKHZhciBhPTA7YTxpLmxlbmd0aDthKyspe3ZhciBvPWlbYV0uc3BsaXQoXCI6XCIsMik7dmFyIHM9b1swXS50cmltKCk7aWYocy5pbmRleE9mKFwiI1wiKT09PTApe3M9cy5zdWJzdHJpbmcoMSl9dmFyIGw9b1sxXXx8XCJ0cnVlXCI7dmFyIHU9dC5xdWVyeVNlbGVjdG9yKFwiI1wiK3MpO2lmKHUpe0VlKGwsdSxyKX19fW9lKGYodCxcIltoeC1zd2FwLW9vYl0sIFtkYXRhLWh4LXN3YXAtb29iXVwiKSxmdW5jdGlvbihlKXt2YXIgdD10ZShlLFwiaHgtc3dhcC1vb2JcIik7aWYodCE9bnVsbCl7RWUodCxlLHIpfX0pfWZ1bmN0aW9uIFJlKGUpe29lKGYoZSxcIltoeC1wcmVzZXJ2ZV0sIFtkYXRhLWh4LXByZXNlcnZlXVwiKSxmdW5jdGlvbihlKXt2YXIgdD10ZShlLFwiaWRcIik7dmFyIHI9cmUoKS5nZXRFbGVtZW50QnlJZCh0KTtpZihyIT1udWxsKXtlLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKHIsZSl9fSl9ZnVuY3Rpb24gVGUobyxlLHMpe29lKGUucXVlcnlTZWxlY3RvckFsbChcIltpZF1cIiksZnVuY3Rpb24oZSl7dmFyIHQ9ZWUoZSxcImlkXCIpO2lmKHQmJnQubGVuZ3RoPjApe3ZhciByPXQucmVwbGFjZShcIidcIixcIlxcXFwnXCIpO3ZhciBuPWUudGFnTmFtZS5yZXBsYWNlKFwiOlwiLFwiXFxcXDpcIik7dmFyIGk9by5xdWVyeVNlbGVjdG9yKG4rXCJbaWQ9J1wiK3IrXCInXVwiKTtpZihpJiZpIT09byl7dmFyIGE9ZS5jbG9uZU5vZGUoKTt3ZShlLGkpO3MudGFza3MucHVzaChmdW5jdGlvbigpe3dlKGUsYSl9KX19fSl9ZnVuY3Rpb24gT2UoZSl7cmV0dXJuIGZ1bmN0aW9uKCl7bihlLFEuY29uZmlnLmFkZGVkQ2xhc3MpO3p0KGUpO050KGUpO3FlKGUpO2NlKGUsXCJodG14OmxvYWRcIil9fWZ1bmN0aW9uIHFlKGUpe3ZhciB0PVwiW2F1dG9mb2N1c11cIjt2YXIgcj1oKGUsdCk/ZTplLnF1ZXJ5U2VsZWN0b3IodCk7aWYociE9bnVsbCl7ci5mb2N1cygpfX1mdW5jdGlvbiBtKGUsdCxyLG4pe1RlKGUscixuKTt3aGlsZShyLmNoaWxkTm9kZXMubGVuZ3RoPjApe3ZhciBpPXIuZmlyc3RDaGlsZDt6KGksUS5jb25maWcuYWRkZWRDbGFzcyk7ZS5pbnNlcnRCZWZvcmUoaSx0KTtpZihpLm5vZGVUeXBlIT09Tm9kZS5URVhUX05PREUmJmkubm9kZVR5cGUhPT1Ob2RlLkNPTU1FTlRfTk9ERSl7bi50YXNrcy5wdXNoKE9lKGkpKX19fWZ1bmN0aW9uIEhlKGUsdCl7dmFyIHI9MDt3aGlsZShyPGUubGVuZ3RoKXt0PSh0PDw1KS10K2UuY2hhckNvZGVBdChyKyspfDB9cmV0dXJuIHR9ZnVuY3Rpb24gTGUoZSl7dmFyIHQ9MDtpZihlLmF0dHJpYnV0ZXMpe2Zvcih2YXIgcj0wO3I8ZS5hdHRyaWJ1dGVzLmxlbmd0aDtyKyspe3ZhciBuPWUuYXR0cmlidXRlc1tyXTtpZihuLnZhbHVlKXt0PUhlKG4ubmFtZSx0KTt0PUhlKG4udmFsdWUsdCl9fX1yZXR1cm4gdH1mdW5jdGlvbiBBZShlKXt2YXIgdD1hZShlKTtpZih0Lm9uSGFuZGxlcnMpe2Zvcih2YXIgcj0wO3I8dC5vbkhhbmRsZXJzLmxlbmd0aDtyKyspe2NvbnN0IG49dC5vbkhhbmRsZXJzW3JdO2UucmVtb3ZlRXZlbnRMaXN0ZW5lcihuLmV2ZW50LG4ubGlzdGVuZXIpfWRlbGV0ZSB0Lm9uSGFuZGxlcnN9fWZ1bmN0aW9uIE5lKGUpe3ZhciB0PWFlKGUpO2lmKHQudGltZW91dCl7Y2xlYXJUaW1lb3V0KHQudGltZW91dCl9aWYodC53ZWJTb2NrZXQpe3Qud2ViU29ja2V0LmNsb3NlKCl9aWYodC5zc2VFdmVudFNvdXJjZSl7dC5zc2VFdmVudFNvdXJjZS5jbG9zZSgpfWlmKHQubGlzdGVuZXJJbmZvcyl7b2UodC5saXN0ZW5lckluZm9zLGZ1bmN0aW9uKGUpe2lmKGUub24pe2Uub24ucmVtb3ZlRXZlbnRMaXN0ZW5lcihlLnRyaWdnZXIsZS5saXN0ZW5lcil9fSl9QWUoZSk7b2UoT2JqZWN0LmtleXModCksZnVuY3Rpb24oZSl7ZGVsZXRlIHRbZV19KX1mdW5jdGlvbiBwKGUpe2NlKGUsXCJodG14OmJlZm9yZUNsZWFudXBFbGVtZW50XCIpO05lKGUpO2lmKGUuY2hpbGRyZW4pe29lKGUuY2hpbGRyZW4sZnVuY3Rpb24oZSl7cChlKX0pfX1mdW5jdGlvbiBJZSh0LGUscil7aWYodC50YWdOYW1lPT09XCJCT0RZXCIpe3JldHVybiBVZSh0LGUscil9ZWxzZXt2YXIgbjt2YXIgaT10LnByZXZpb3VzU2libGluZzttKHUodCksdCxlLHIpO2lmKGk9PW51bGwpe249dSh0KS5maXJzdENoaWxkfWVsc2V7bj1pLm5leHRTaWJsaW5nfXIuZWx0cz1yLmVsdHMuZmlsdGVyKGZ1bmN0aW9uKGUpe3JldHVybiBlIT10fSk7d2hpbGUobiYmbiE9PXQpe2lmKG4ubm9kZVR5cGU9PT1Ob2RlLkVMRU1FTlRfTk9ERSl7ci5lbHRzLnB1c2gobil9bj1uLm5leHRFbGVtZW50U2libGluZ31wKHQpO3UodCkucmVtb3ZlQ2hpbGQodCl9fWZ1bmN0aW9uIGtlKGUsdCxyKXtyZXR1cm4gbShlLGUuZmlyc3RDaGlsZCx0LHIpfWZ1bmN0aW9uIFBlKGUsdCxyKXtyZXR1cm4gbSh1KGUpLGUsdCxyKX1mdW5jdGlvbiBNZShlLHQscil7cmV0dXJuIG0oZSxudWxsLHQscil9ZnVuY3Rpb24gWGUoZSx0LHIpe3JldHVybiBtKHUoZSksZS5uZXh0U2libGluZyx0LHIpfWZ1bmN0aW9uIERlKGUsdCxyKXtwKGUpO3JldHVybiB1KGUpLnJlbW92ZUNoaWxkKGUpfWZ1bmN0aW9uIFVlKGUsdCxyKXt2YXIgbj1lLmZpcnN0Q2hpbGQ7bShlLG4sdCxyKTtpZihuKXt3aGlsZShuLm5leHRTaWJsaW5nKXtwKG4ubmV4dFNpYmxpbmcpO2UucmVtb3ZlQ2hpbGQobi5uZXh0U2libGluZyl9cChuKTtlLnJlbW92ZUNoaWxkKG4pfX1mdW5jdGlvbiBCZShlLHQscil7dmFyIG49cnx8bmUoZSxcImh4LXNlbGVjdFwiKTtpZihuKXt2YXIgaT1yZSgpLmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtvZSh0LnF1ZXJ5U2VsZWN0b3JBbGwobiksZnVuY3Rpb24oZSl7aS5hcHBlbmRDaGlsZChlKX0pO3Q9aX1yZXR1cm4gdH1mdW5jdGlvbiBGZShlLHQscixuLGkpe3N3aXRjaChlKXtjYXNlXCJub25lXCI6cmV0dXJuO2Nhc2VcIm91dGVySFRNTFwiOkllKHIsbixpKTtyZXR1cm47Y2FzZVwiYWZ0ZXJiZWdpblwiOmtlKHIsbixpKTtyZXR1cm47Y2FzZVwiYmVmb3JlYmVnaW5cIjpQZShyLG4saSk7cmV0dXJuO2Nhc2VcImJlZm9yZWVuZFwiOk1lKHIsbixpKTtyZXR1cm47Y2FzZVwiYWZ0ZXJlbmRcIjpYZShyLG4saSk7cmV0dXJuO2Nhc2VcImRlbGV0ZVwiOkRlKHIsbixpKTtyZXR1cm47ZGVmYXVsdDp2YXIgYT1Gcih0KTtmb3IodmFyIG89MDtvPGEubGVuZ3RoO28rKyl7dmFyIHM9YVtvXTt0cnl7dmFyIGw9cy5oYW5kbGVTd2FwKGUscixuLGkpO2lmKGwpe2lmKHR5cGVvZiBsLmxlbmd0aCE9PVwidW5kZWZpbmVkXCIpe2Zvcih2YXIgdT0wO3U8bC5sZW5ndGg7dSsrKXt2YXIgZj1sW3VdO2lmKGYubm9kZVR5cGUhPT1Ob2RlLlRFWFRfTk9ERSYmZi5ub2RlVHlwZSE9PU5vZGUuQ09NTUVOVF9OT0RFKXtpLnRhc2tzLnB1c2goT2UoZikpfX19cmV0dXJufX1jYXRjaChlKXtiKGUpfX1pZihlPT09XCJpbm5lckhUTUxcIil7VWUocixuLGkpfWVsc2V7RmUoUS5jb25maWcuZGVmYXVsdFN3YXBTdHlsZSx0LHIsbixpKX19fWZ1bmN0aW9uIFZlKGUpe2lmKGUuaW5kZXhPZihcIjx0aXRsZVwiKT4tMSl7dmFyIHQ9ZS5yZXBsYWNlKEgsXCJcIik7dmFyIHI9dC5tYXRjaChxKTtpZihyKXtyZXR1cm4gclsyXX19fWZ1bmN0aW9uIGplKGUsdCxyLG4saSxhKXtpLnRpdGxlPVZlKG4pO3ZhciBvPWwobik7aWYobyl7Q2UocixvLGkpO289QmUocixvLGEpO1JlKG8pO3JldHVybiBGZShlLHIsdCxvLGkpfX1mdW5jdGlvbiBfZShlLHQscil7dmFyIG49ZS5nZXRSZXNwb25zZUhlYWRlcih0KTtpZihuLmluZGV4T2YoXCJ7XCIpPT09MCl7dmFyIGk9RShuKTtmb3IodmFyIGEgaW4gaSl7aWYoaS5oYXNPd25Qcm9wZXJ0eShhKSl7dmFyIG89aVthXTtpZighUChvKSl7bz17dmFsdWU6b319Y2UocixhLG8pfX19ZWxzZXt2YXIgcz1uLnNwbGl0KFwiLFwiKTtmb3IodmFyIGw9MDtsPHMubGVuZ3RoO2wrKyl7Y2UocixzW2xdLnRyaW0oKSxbXSl9fX12YXIgemU9L1xccy87dmFyIHg9L1tcXHMsXS87dmFyICRlPS9bXyRhLXpBLVpdLzt2YXIgV2U9L1tfJGEtekEtWjAtOV0vO3ZhciBHZT1bJ1wiJyxcIidcIixcIi9cIl07dmFyIEplPS9bXlxcc10vO3ZhciBaZT0vW3soXS87dmFyIEtlPS9bfSldLztmdW5jdGlvbiBZZShlKXt2YXIgdD1bXTt2YXIgcj0wO3doaWxlKHI8ZS5sZW5ndGgpe2lmKCRlLmV4ZWMoZS5jaGFyQXQocikpKXt2YXIgbj1yO3doaWxlKFdlLmV4ZWMoZS5jaGFyQXQocisxKSkpe3IrK310LnB1c2goZS5zdWJzdHIobixyLW4rMSkpfWVsc2UgaWYoR2UuaW5kZXhPZihlLmNoYXJBdChyKSkhPT0tMSl7dmFyIGk9ZS5jaGFyQXQocik7dmFyIG49cjtyKys7d2hpbGUocjxlLmxlbmd0aCYmZS5jaGFyQXQocikhPT1pKXtpZihlLmNoYXJBdChyKT09PVwiXFxcXFwiKXtyKyt9cisrfXQucHVzaChlLnN1YnN0cihuLHItbisxKSl9ZWxzZXt2YXIgYT1lLmNoYXJBdChyKTt0LnB1c2goYSl9cisrfXJldHVybiB0fWZ1bmN0aW9uIFFlKGUsdCxyKXtyZXR1cm4gJGUuZXhlYyhlLmNoYXJBdCgwKSkmJmUhPT1cInRydWVcIiYmZSE9PVwiZmFsc2VcIiYmZSE9PVwidGhpc1wiJiZlIT09ciYmdCE9PVwiLlwifWZ1bmN0aW9uIGV0KGUsdCxyKXtpZih0WzBdPT09XCJbXCIpe3Quc2hpZnQoKTt2YXIgbj0xO3ZhciBpPVwiIHJldHVybiAoZnVuY3Rpb24oXCIrcitcIil7IHJldHVybiAoXCI7dmFyIGE9bnVsbDt3aGlsZSh0Lmxlbmd0aD4wKXt2YXIgbz10WzBdO2lmKG89PT1cIl1cIil7bi0tO2lmKG49PT0wKXtpZihhPT09bnVsbCl7aT1pK1widHJ1ZVwifXQuc2hpZnQoKTtpKz1cIil9KVwiO3RyeXt2YXIgcz1UcihlLGZ1bmN0aW9uKCl7cmV0dXJuIEZ1bmN0aW9uKGkpKCl9LGZ1bmN0aW9uKCl7cmV0dXJuIHRydWV9KTtzLnNvdXJjZT1pO3JldHVybiBzfWNhdGNoKGUpe2ZlKHJlKCkuYm9keSxcImh0bXg6c3ludGF4OmVycm9yXCIse2Vycm9yOmUsc291cmNlOml9KTtyZXR1cm4gbnVsbH19fWVsc2UgaWYobz09PVwiW1wiKXtuKyt9aWYoUWUobyxhLHIpKXtpKz1cIigoXCIrcitcIi5cIitvK1wiKSA/IChcIityK1wiLlwiK28rXCIpIDogKHdpbmRvdy5cIitvK1wiKSlcIn1lbHNle2k9aStvfWE9dC5zaGlmdCgpfX19ZnVuY3Rpb24geShlLHQpe3ZhciByPVwiXCI7d2hpbGUoZS5sZW5ndGg+MCYmIXQudGVzdChlWzBdKSl7cis9ZS5zaGlmdCgpfXJldHVybiByfWZ1bmN0aW9uIHR0KGUpe3ZhciB0O2lmKGUubGVuZ3RoPjAmJlplLnRlc3QoZVswXSkpe2Uuc2hpZnQoKTt0PXkoZSxLZSkudHJpbSgpO2Uuc2hpZnQoKX1lbHNle3Q9eShlLHgpfXJldHVybiB0fXZhciBydD1cImlucHV0LCB0ZXh0YXJlYSwgc2VsZWN0XCI7ZnVuY3Rpb24gbnQoZSx0LHIpe3ZhciBuPVtdO3ZhciBpPVllKHQpO2Rve3koaSxKZSk7dmFyIGE9aS5sZW5ndGg7dmFyIG89eShpLC9bLFxcW1xcc10vKTtpZihvIT09XCJcIil7aWYobz09PVwiZXZlcnlcIil7dmFyIHM9e3RyaWdnZXI6XCJldmVyeVwifTt5KGksSmUpO3MucG9sbEludGVydmFsPWQoeShpLC9bLFxcW1xcc10vKSk7eShpLEplKTt2YXIgbD1ldChlLGksXCJldmVudFwiKTtpZihsKXtzLmV2ZW50RmlsdGVyPWx9bi5wdXNoKHMpfWVsc2UgaWYoby5pbmRleE9mKFwic3NlOlwiKT09PTApe24ucHVzaCh7dHJpZ2dlcjpcInNzZVwiLHNzZUV2ZW50Om8uc3Vic3RyKDQpfSl9ZWxzZXt2YXIgdT17dHJpZ2dlcjpvfTt2YXIgbD1ldChlLGksXCJldmVudFwiKTtpZihsKXt1LmV2ZW50RmlsdGVyPWx9d2hpbGUoaS5sZW5ndGg+MCYmaVswXSE9PVwiLFwiKXt5KGksSmUpO3ZhciBmPWkuc2hpZnQoKTtpZihmPT09XCJjaGFuZ2VkXCIpe3UuY2hhbmdlZD10cnVlfWVsc2UgaWYoZj09PVwib25jZVwiKXt1Lm9uY2U9dHJ1ZX1lbHNlIGlmKGY9PT1cImNvbnN1bWVcIil7dS5jb25zdW1lPXRydWV9ZWxzZSBpZihmPT09XCJkZWxheVwiJiZpWzBdPT09XCI6XCIpe2kuc2hpZnQoKTt1LmRlbGF5PWQoeShpLHgpKX1lbHNlIGlmKGY9PT1cImZyb21cIiYmaVswXT09PVwiOlwiKXtpLnNoaWZ0KCk7aWYoWmUudGVzdChpWzBdKSl7dmFyIGM9dHQoaSl9ZWxzZXt2YXIgYz15KGkseCk7aWYoYz09PVwiY2xvc2VzdFwifHxjPT09XCJmaW5kXCJ8fGM9PT1cIm5leHRcInx8Yz09PVwicHJldmlvdXNcIil7aS5zaGlmdCgpO3ZhciBoPXR0KGkpO2lmKGgubGVuZ3RoPjApe2MrPVwiIFwiK2h9fX11LmZyb209Y31lbHNlIGlmKGY9PT1cInRhcmdldFwiJiZpWzBdPT09XCI6XCIpe2kuc2hpZnQoKTt1LnRhcmdldD10dChpKX1lbHNlIGlmKGY9PT1cInRocm90dGxlXCImJmlbMF09PT1cIjpcIil7aS5zaGlmdCgpO3UudGhyb3R0bGU9ZCh5KGkseCkpfWVsc2UgaWYoZj09PVwicXVldWVcIiYmaVswXT09PVwiOlwiKXtpLnNoaWZ0KCk7dS5xdWV1ZT15KGkseCl9ZWxzZSBpZihmPT09XCJyb290XCImJmlbMF09PT1cIjpcIil7aS5zaGlmdCgpO3VbZl09dHQoaSl9ZWxzZSBpZihmPT09XCJ0aHJlc2hvbGRcIiYmaVswXT09PVwiOlwiKXtpLnNoaWZ0KCk7dVtmXT15KGkseCl9ZWxzZXtmZShlLFwiaHRteDpzeW50YXg6ZXJyb3JcIix7dG9rZW46aS5zaGlmdCgpfSl9fW4ucHVzaCh1KX19aWYoaS5sZW5ndGg9PT1hKXtmZShlLFwiaHRteDpzeW50YXg6ZXJyb3JcIix7dG9rZW46aS5zaGlmdCgpfSl9eShpLEplKX13aGlsZShpWzBdPT09XCIsXCImJmkuc2hpZnQoKSk7aWYocil7clt0XT1ufXJldHVybiBufWZ1bmN0aW9uIGl0KGUpe3ZhciB0PXRlKGUsXCJoeC10cmlnZ2VyXCIpO3ZhciByPVtdO2lmKHQpe3ZhciBuPVEuY29uZmlnLnRyaWdnZXJTcGVjc0NhY2hlO3I9biYmblt0XXx8bnQoZSx0LG4pfWlmKHIubGVuZ3RoPjApe3JldHVybiByfWVsc2UgaWYoaChlLFwiZm9ybVwiKSl7cmV0dXJuW3t0cmlnZ2VyOlwic3VibWl0XCJ9XX1lbHNlIGlmKGgoZSwnaW5wdXRbdHlwZT1cImJ1dHRvblwiXSwgaW5wdXRbdHlwZT1cInN1Ym1pdFwiXScpKXtyZXR1cm5be3RyaWdnZXI6XCJjbGlja1wifV19ZWxzZSBpZihoKGUscnQpKXtyZXR1cm5be3RyaWdnZXI6XCJjaGFuZ2VcIn1dfWVsc2V7cmV0dXJuW3t0cmlnZ2VyOlwiY2xpY2tcIn1dfX1mdW5jdGlvbiBhdChlKXthZShlKS5jYW5jZWxsZWQ9dHJ1ZX1mdW5jdGlvbiBvdChlLHQscil7dmFyIG49YWUoZSk7bi50aW1lb3V0PXNldFRpbWVvdXQoZnVuY3Rpb24oKXtpZihzZShlKSYmbi5jYW5jZWxsZWQhPT10cnVlKXtpZighY3QocixlLFd0KFwiaHg6cG9sbDp0cmlnZ2VyXCIse3RyaWdnZXJTcGVjOnIsdGFyZ2V0OmV9KSkpe3QoZSl9b3QoZSx0LHIpfX0sci5wb2xsSW50ZXJ2YWwpfWZ1bmN0aW9uIHN0KGUpe3JldHVybiBsb2NhdGlvbi5ob3N0bmFtZT09PWUuaG9zdG5hbWUmJmVlKGUsXCJocmVmXCIpJiZlZShlLFwiaHJlZlwiKS5pbmRleE9mKFwiI1wiKSE9PTB9ZnVuY3Rpb24gbHQodCxyLGUpe2lmKHQudGFnTmFtZT09PVwiQVwiJiZzdCh0KSYmKHQudGFyZ2V0PT09XCJcInx8dC50YXJnZXQ9PT1cIl9zZWxmXCIpfHx0LnRhZ05hbWU9PT1cIkZPUk1cIil7ci5ib29zdGVkPXRydWU7dmFyIG4saTtpZih0LnRhZ05hbWU9PT1cIkFcIil7bj1cImdldFwiO2k9ZWUodCxcImhyZWZcIil9ZWxzZXt2YXIgYT1lZSh0LFwibWV0aG9kXCIpO249YT9hLnRvTG93ZXJDYXNlKCk6XCJnZXRcIjtpZihuPT09XCJnZXRcIil7fWk9ZWUodCxcImFjdGlvblwiKX1lLmZvckVhY2goZnVuY3Rpb24oZSl7aHQodCxmdW5jdGlvbihlLHQpe2lmKHYoZSxRLmNvbmZpZy5kaXNhYmxlU2VsZWN0b3IpKXtwKGUpO3JldHVybn1oZShuLGksZSx0KX0scixlLHRydWUpfSl9fWZ1bmN0aW9uIHV0KGUsdCl7aWYoZS50eXBlPT09XCJzdWJtaXRcInx8ZS50eXBlPT09XCJjbGlja1wiKXtpZih0LnRhZ05hbWU9PT1cIkZPUk1cIil7cmV0dXJuIHRydWV9aWYoaCh0LCdpbnB1dFt0eXBlPVwic3VibWl0XCJdLCBidXR0b24nKSYmdih0LFwiZm9ybVwiKSE9PW51bGwpe3JldHVybiB0cnVlfWlmKHQudGFnTmFtZT09PVwiQVwiJiZ0LmhyZWYmJih0LmdldEF0dHJpYnV0ZShcImhyZWZcIik9PT1cIiNcInx8dC5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpLmluZGV4T2YoXCIjXCIpIT09MCkpe3JldHVybiB0cnVlfX1yZXR1cm4gZmFsc2V9ZnVuY3Rpb24gZnQoZSx0KXtyZXR1cm4gYWUoZSkuYm9vc3RlZCYmZS50YWdOYW1lPT09XCJBXCImJnQudHlwZT09PVwiY2xpY2tcIiYmKHQuY3RybEtleXx8dC5tZXRhS2V5KX1mdW5jdGlvbiBjdChlLHQscil7dmFyIG49ZS5ldmVudEZpbHRlcjtpZihuKXt0cnl7cmV0dXJuIG4uY2FsbCh0LHIpIT09dHJ1ZX1jYXRjaChlKXtmZShyZSgpLmJvZHksXCJodG14OmV2ZW50RmlsdGVyOmVycm9yXCIse2Vycm9yOmUsc291cmNlOm4uc291cmNlfSk7cmV0dXJuIHRydWV9fXJldHVybiBmYWxzZX1mdW5jdGlvbiBodChhLG8sZSxzLGwpe3ZhciB1PWFlKGEpO3ZhciB0O2lmKHMuZnJvbSl7dD1aKGEscy5mcm9tKX1lbHNle3Q9W2FdfWlmKHMuY2hhbmdlZCl7dC5mb3JFYWNoKGZ1bmN0aW9uKGUpe3ZhciB0PWFlKGUpO3QubGFzdFZhbHVlPWUudmFsdWV9KX1vZSh0LGZ1bmN0aW9uKG4pe3ZhciBpPWZ1bmN0aW9uKGUpe2lmKCFzZShhKSl7bi5yZW1vdmVFdmVudExpc3RlbmVyKHMudHJpZ2dlcixpKTtyZXR1cm59aWYoZnQoYSxlKSl7cmV0dXJufWlmKGx8fHV0KGUsYSkpe2UucHJldmVudERlZmF1bHQoKX1pZihjdChzLGEsZSkpe3JldHVybn12YXIgdD1hZShlKTt0LnRyaWdnZXJTcGVjPXM7aWYodC5oYW5kbGVkRm9yPT1udWxsKXt0LmhhbmRsZWRGb3I9W119aWYodC5oYW5kbGVkRm9yLmluZGV4T2YoYSk8MCl7dC5oYW5kbGVkRm9yLnB1c2goYSk7aWYocy5jb25zdW1lKXtlLnN0b3BQcm9wYWdhdGlvbigpfWlmKHMudGFyZ2V0JiZlLnRhcmdldCl7aWYoIWgoZS50YXJnZXQscy50YXJnZXQpKXtyZXR1cm59fWlmKHMub25jZSl7aWYodS50cmlnZ2VyZWRPbmNlKXtyZXR1cm59ZWxzZXt1LnRyaWdnZXJlZE9uY2U9dHJ1ZX19aWYocy5jaGFuZ2VkKXt2YXIgcj1hZShuKTtpZihyLmxhc3RWYWx1ZT09PW4udmFsdWUpe3JldHVybn1yLmxhc3RWYWx1ZT1uLnZhbHVlfWlmKHUuZGVsYXllZCl7Y2xlYXJUaW1lb3V0KHUuZGVsYXllZCl9aWYodS50aHJvdHRsZSl7cmV0dXJufWlmKHMudGhyb3R0bGU+MCl7aWYoIXUudGhyb3R0bGUpe28oYSxlKTt1LnRocm90dGxlPXNldFRpbWVvdXQoZnVuY3Rpb24oKXt1LnRocm90dGxlPW51bGx9LHMudGhyb3R0bGUpfX1lbHNlIGlmKHMuZGVsYXk+MCl7dS5kZWxheWVkPXNldFRpbWVvdXQoZnVuY3Rpb24oKXtvKGEsZSl9LHMuZGVsYXkpfWVsc2V7Y2UoYSxcImh0bXg6dHJpZ2dlclwiKTtvKGEsZSl9fX07aWYoZS5saXN0ZW5lckluZm9zPT1udWxsKXtlLmxpc3RlbmVySW5mb3M9W119ZS5saXN0ZW5lckluZm9zLnB1c2goe3RyaWdnZXI6cy50cmlnZ2VyLGxpc3RlbmVyOmksb246bn0pO24uYWRkRXZlbnRMaXN0ZW5lcihzLnRyaWdnZXIsaSl9KX12YXIgdnQ9ZmFsc2U7dmFyIGR0PW51bGw7ZnVuY3Rpb24gZ3QoKXtpZighZHQpe2R0PWZ1bmN0aW9uKCl7dnQ9dHJ1ZX07d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIixkdCk7c2V0SW50ZXJ2YWwoZnVuY3Rpb24oKXtpZih2dCl7dnQ9ZmFsc2U7b2UocmUoKS5xdWVyeVNlbGVjdG9yQWxsKFwiW2h4LXRyaWdnZXI9J3JldmVhbGVkJ10sW2RhdGEtaHgtdHJpZ2dlcj0ncmV2ZWFsZWQnXVwiKSxmdW5jdGlvbihlKXttdChlKX0pfX0sMjAwKX19ZnVuY3Rpb24gbXQodCl7aWYoIW8odCxcImRhdGEtaHgtcmV2ZWFsZWRcIikmJlgodCkpe3Quc2V0QXR0cmlidXRlKFwiZGF0YS1oeC1yZXZlYWxlZFwiLFwidHJ1ZVwiKTt2YXIgZT1hZSh0KTtpZihlLmluaXRIYXNoKXtjZSh0LFwicmV2ZWFsZWRcIil9ZWxzZXt0LmFkZEV2ZW50TGlzdGVuZXIoXCJodG14OmFmdGVyUHJvY2Vzc05vZGVcIixmdW5jdGlvbihlKXtjZSh0LFwicmV2ZWFsZWRcIil9LHtvbmNlOnRydWV9KX19fWZ1bmN0aW9uIHB0KGUsdCxyKXt2YXIgbj1EKHIpO2Zvcih2YXIgaT0wO2k8bi5sZW5ndGg7aSsrKXt2YXIgYT1uW2ldLnNwbGl0KC86KC4rKS8pO2lmKGFbMF09PT1cImNvbm5lY3RcIil7eHQoZSxhWzFdLDApfWlmKGFbMF09PT1cInNlbmRcIil7YnQoZSl9fX1mdW5jdGlvbiB4dChzLHIsbil7aWYoIXNlKHMpKXtyZXR1cm59aWYoci5pbmRleE9mKFwiL1wiKT09MCl7dmFyIGU9bG9jYXRpb24uaG9zdG5hbWUrKGxvY2F0aW9uLnBvcnQ/XCI6XCIrbG9jYXRpb24ucG9ydDpcIlwiKTtpZihsb2NhdGlvbi5wcm90b2NvbD09XCJodHRwczpcIil7cj1cIndzczovL1wiK2Urcn1lbHNlIGlmKGxvY2F0aW9uLnByb3RvY29sPT1cImh0dHA6XCIpe3I9XCJ3czovL1wiK2Urcn19dmFyIHQ9US5jcmVhdGVXZWJTb2NrZXQocik7dC5vbmVycm9yPWZ1bmN0aW9uKGUpe2ZlKHMsXCJodG14OndzRXJyb3JcIix7ZXJyb3I6ZSxzb2NrZXQ6dH0pO3l0KHMpfTt0Lm9uY2xvc2U9ZnVuY3Rpb24oZSl7aWYoWzEwMDYsMTAxMiwxMDEzXS5pbmRleE9mKGUuY29kZSk+PTApe3ZhciB0PXd0KG4pO3NldFRpbWVvdXQoZnVuY3Rpb24oKXt4dChzLHIsbisxKX0sdCl9fTt0Lm9ub3Blbj1mdW5jdGlvbihlKXtuPTB9O2FlKHMpLndlYlNvY2tldD10O3QuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIixmdW5jdGlvbihlKXtpZih5dChzKSl7cmV0dXJufXZhciB0PWUuZGF0YTtSKHMsZnVuY3Rpb24oZSl7dD1lLnRyYW5zZm9ybVJlc3BvbnNlKHQsbnVsbCxzKX0pO3ZhciByPVQocyk7dmFyIG49bCh0KTt2YXIgaT1NKG4uY2hpbGRyZW4pO2Zvcih2YXIgYT0wO2E8aS5sZW5ndGg7YSsrKXt2YXIgbz1pW2FdO0VlKHRlKG8sXCJoeC1zd2FwLW9vYlwiKXx8XCJ0cnVlXCIsbyxyKX1ucihyLnRhc2tzKX0pfWZ1bmN0aW9uIHl0KGUpe2lmKCFzZShlKSl7YWUoZSkud2ViU29ja2V0LmNsb3NlKCk7cmV0dXJuIHRydWV9fWZ1bmN0aW9uIGJ0KHUpe3ZhciBmPWModSxmdW5jdGlvbihlKXtyZXR1cm4gYWUoZSkud2ViU29ja2V0IT1udWxsfSk7aWYoZil7dS5hZGRFdmVudExpc3RlbmVyKGl0KHUpWzBdLnRyaWdnZXIsZnVuY3Rpb24oZSl7dmFyIHQ9YWUoZikud2ViU29ja2V0O3ZhciByPXhyKHUsZik7dmFyIG49ZHIodSxcInBvc3RcIik7dmFyIGk9bi5lcnJvcnM7dmFyIGE9bi52YWx1ZXM7dmFyIG89SHIodSk7dmFyIHM9bGUoYSxvKTt2YXIgbD15cihzLHUpO2xbXCJIRUFERVJTXCJdPXI7aWYoaSYmaS5sZW5ndGg+MCl7Y2UodSxcImh0bXg6dmFsaWRhdGlvbjpoYWx0ZWRcIixpKTtyZXR1cm59dC5zZW5kKEpTT04uc3RyaW5naWZ5KGwpKTtpZih1dChlLHUpKXtlLnByZXZlbnREZWZhdWx0KCl9fSl9ZWxzZXtmZSh1LFwiaHRteDpub1dlYlNvY2tldFNvdXJjZUVycm9yXCIpfX1mdW5jdGlvbiB3dChlKXt2YXIgdD1RLmNvbmZpZy53c1JlY29ubmVjdERlbGF5O2lmKHR5cGVvZiB0PT09XCJmdW5jdGlvblwiKXtyZXR1cm4gdChlKX1pZih0PT09XCJmdWxsLWppdHRlclwiKXt2YXIgcj1NYXRoLm1pbihlLDYpO3ZhciBuPTFlMypNYXRoLnBvdygyLHIpO3JldHVybiBuKk1hdGgucmFuZG9tKCl9YignaHRteC5jb25maWcud3NSZWNvbm5lY3REZWxheSBtdXN0IGVpdGhlciBiZSBhIGZ1bmN0aW9uIG9yIHRoZSBzdHJpbmcgXCJmdWxsLWppdHRlclwiJyl9ZnVuY3Rpb24gU3QoZSx0LHIpe3ZhciBuPUQocik7Zm9yKHZhciBpPTA7aTxuLmxlbmd0aDtpKyspe3ZhciBhPW5baV0uc3BsaXQoLzooLispLyk7aWYoYVswXT09PVwiY29ubmVjdFwiKXtFdChlLGFbMV0pfWlmKGFbMF09PT1cInN3YXBcIil7Q3QoZSxhWzFdKX19fWZ1bmN0aW9uIEV0KHQsZSl7dmFyIHI9US5jcmVhdGVFdmVudFNvdXJjZShlKTtyLm9uZXJyb3I9ZnVuY3Rpb24oZSl7ZmUodCxcImh0bXg6c3NlRXJyb3JcIix7ZXJyb3I6ZSxzb3VyY2U6cn0pO1R0KHQpfTthZSh0KS5zc2VFdmVudFNvdXJjZT1yfWZ1bmN0aW9uIEN0KGEsbyl7dmFyIHM9YyhhLE90KTtpZihzKXt2YXIgbD1hZShzKS5zc2VFdmVudFNvdXJjZTt2YXIgdT1mdW5jdGlvbihlKXtpZihUdChzKSl7cmV0dXJufWlmKCFzZShhKSl7bC5yZW1vdmVFdmVudExpc3RlbmVyKG8sdSk7cmV0dXJufXZhciB0PWUuZGF0YTtSKGEsZnVuY3Rpb24oZSl7dD1lLnRyYW5zZm9ybVJlc3BvbnNlKHQsbnVsbCxhKX0pO3ZhciByPXdyKGEpO3ZhciBuPXllKGEpO3ZhciBpPVQoYSk7amUoci5zd2FwU3R5bGUsbixhLHQsaSk7bnIoaS50YXNrcyk7Y2UoYSxcImh0bXg6c3NlTWVzc2FnZVwiLGUpfTthZShhKS5zc2VMaXN0ZW5lcj11O2wuYWRkRXZlbnRMaXN0ZW5lcihvLHUpfWVsc2V7ZmUoYSxcImh0bXg6bm9TU0VTb3VyY2VFcnJvclwiKX19ZnVuY3Rpb24gUnQoZSx0LHIpe3ZhciBuPWMoZSxPdCk7aWYobil7dmFyIGk9YWUobikuc3NlRXZlbnRTb3VyY2U7dmFyIGE9ZnVuY3Rpb24oKXtpZighVHQobikpe2lmKHNlKGUpKXt0KGUpfWVsc2V7aS5yZW1vdmVFdmVudExpc3RlbmVyKHIsYSl9fX07YWUoZSkuc3NlTGlzdGVuZXI9YTtpLmFkZEV2ZW50TGlzdGVuZXIocixhKX1lbHNle2ZlKGUsXCJodG14Om5vU1NFU291cmNlRXJyb3JcIil9fWZ1bmN0aW9uIFR0KGUpe2lmKCFzZShlKSl7YWUoZSkuc3NlRXZlbnRTb3VyY2UuY2xvc2UoKTtyZXR1cm4gdHJ1ZX19ZnVuY3Rpb24gT3QoZSl7cmV0dXJuIGFlKGUpLnNzZUV2ZW50U291cmNlIT1udWxsfWZ1bmN0aW9uIHF0KGUsdCxyLG4pe3ZhciBpPWZ1bmN0aW9uKCl7aWYoIXIubG9hZGVkKXtyLmxvYWRlZD10cnVlO3QoZSl9fTtpZihuPjApe3NldFRpbWVvdXQoaSxuKX1lbHNle2koKX19ZnVuY3Rpb24gSHQodCxpLGUpe3ZhciBhPWZhbHNlO29lKHcsZnVuY3Rpb24ocil7aWYobyh0LFwiaHgtXCIrcikpe3ZhciBuPXRlKHQsXCJoeC1cIityKTthPXRydWU7aS5wYXRoPW47aS52ZXJiPXI7ZS5mb3JFYWNoKGZ1bmN0aW9uKGUpe0x0KHQsZSxpLGZ1bmN0aW9uKGUsdCl7aWYodihlLFEuY29uZmlnLmRpc2FibGVTZWxlY3Rvcikpe3AoZSk7cmV0dXJufWhlKHIsbixlLHQpfSl9KX19KTtyZXR1cm4gYX1mdW5jdGlvbiBMdChuLGUsdCxyKXtpZihlLnNzZUV2ZW50KXtSdChuLHIsZS5zc2VFdmVudCl9ZWxzZSBpZihlLnRyaWdnZXI9PT1cInJldmVhbGVkXCIpe2d0KCk7aHQobixyLHQsZSk7bXQobil9ZWxzZSBpZihlLnRyaWdnZXI9PT1cImludGVyc2VjdFwiKXt2YXIgaT17fTtpZihlLnJvb3Qpe2kucm9vdD11ZShuLGUucm9vdCl9aWYoZS50aHJlc2hvbGQpe2kudGhyZXNob2xkPXBhcnNlRmxvYXQoZS50aHJlc2hvbGQpfXZhciBhPW5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihmdW5jdGlvbihlKXtmb3IodmFyIHQ9MDt0PGUubGVuZ3RoO3QrKyl7dmFyIHI9ZVt0XTtpZihyLmlzSW50ZXJzZWN0aW5nKXtjZShuLFwiaW50ZXJzZWN0XCIpO2JyZWFrfX19LGkpO2Eub2JzZXJ2ZShuKTtodChuLHIsdCxlKX1lbHNlIGlmKGUudHJpZ2dlcj09PVwibG9hZFwiKXtpZighY3QoZSxuLFd0KFwibG9hZFwiLHtlbHQ6bn0pKSl7cXQobixyLHQsZS5kZWxheSl9fWVsc2UgaWYoZS5wb2xsSW50ZXJ2YWw+MCl7dC5wb2xsaW5nPXRydWU7b3QobixyLGUpfWVsc2V7aHQobixyLHQsZSl9fWZ1bmN0aW9uIEF0KGUpe2lmKFEuY29uZmlnLmFsbG93U2NyaXB0VGFncyYmKGUudHlwZT09PVwidGV4dC9qYXZhc2NyaXB0XCJ8fGUudHlwZT09PVwibW9kdWxlXCJ8fGUudHlwZT09PVwiXCIpKXt2YXIgdD1yZSgpLmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7b2UoZS5hdHRyaWJ1dGVzLGZ1bmN0aW9uKGUpe3Quc2V0QXR0cmlidXRlKGUubmFtZSxlLnZhbHVlKX0pO3QudGV4dENvbnRlbnQ9ZS50ZXh0Q29udGVudDt0LmFzeW5jPWZhbHNlO2lmKFEuY29uZmlnLmlubGluZVNjcmlwdE5vbmNlKXt0Lm5vbmNlPVEuY29uZmlnLmlubGluZVNjcmlwdE5vbmNlfXZhciByPWUucGFyZW50RWxlbWVudDt0cnl7ci5pbnNlcnRCZWZvcmUodCxlKX1jYXRjaChlKXtiKGUpfWZpbmFsbHl7aWYoZS5wYXJlbnRFbGVtZW50KXtlLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoZSl9fX19ZnVuY3Rpb24gTnQoZSl7aWYoaChlLFwic2NyaXB0XCIpKXtBdChlKX1vZShmKGUsXCJzY3JpcHRcIiksZnVuY3Rpb24oZSl7QXQoZSl9KX1mdW5jdGlvbiBJdChlKXt2YXIgdD1lLmF0dHJpYnV0ZXM7Zm9yKHZhciByPTA7cjx0Lmxlbmd0aDtyKyspe3ZhciBuPXRbcl0ubmFtZTtpZihzKG4sXCJoeC1vbjpcIil8fHMobixcImRhdGEtaHgtb246XCIpfHxzKG4sXCJoeC1vbi1cIil8fHMobixcImRhdGEtaHgtb24tXCIpKXtyZXR1cm4gdHJ1ZX19cmV0dXJuIGZhbHNlfWZ1bmN0aW9uIGt0KGUpe3ZhciB0PW51bGw7dmFyIHI9W107aWYoSXQoZSkpe3IucHVzaChlKX1pZihkb2N1bWVudC5ldmFsdWF0ZSl7dmFyIG49ZG9jdW1lbnQuZXZhbHVhdGUoJy4vLypbQCpbIHN0YXJ0cy13aXRoKG5hbWUoKSwgXCJoeC1vbjpcIikgb3Igc3RhcnRzLXdpdGgobmFtZSgpLCBcImRhdGEtaHgtb246XCIpIG9yJysnIHN0YXJ0cy13aXRoKG5hbWUoKSwgXCJoeC1vbi1cIikgb3Igc3RhcnRzLXdpdGgobmFtZSgpLCBcImRhdGEtaHgtb24tXCIpIF1dJyxlKTt3aGlsZSh0PW4uaXRlcmF0ZU5leHQoKSlyLnB1c2godCl9ZWxzZXt2YXIgaT1lLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiKlwiKTtmb3IodmFyIGE9MDthPGkubGVuZ3RoO2ErKyl7aWYoSXQoaVthXSkpe3IucHVzaChpW2FdKX19fXJldHVybiByfWZ1bmN0aW9uIFB0KGUpe2lmKGUucXVlcnlTZWxlY3RvckFsbCl7dmFyIHQ9XCIsIFtoeC1ib29zdF0gYSwgW2RhdGEtaHgtYm9vc3RdIGEsIGFbaHgtYm9vc3RdLCBhW2RhdGEtaHgtYm9vc3RdXCI7dmFyIHI9ZS5xdWVyeVNlbGVjdG9yQWxsKGkrdCtcIiwgZm9ybSwgW3R5cGU9J3N1Ym1pdCddLCBbaHgtc3NlXSwgW2RhdGEtaHgtc3NlXSwgW2h4LXdzXSxcIitcIiBbZGF0YS1oeC13c10sIFtoeC1leHRdLCBbZGF0YS1oeC1leHRdLCBbaHgtdHJpZ2dlcl0sIFtkYXRhLWh4LXRyaWdnZXJdLCBbaHgtb25dLCBbZGF0YS1oeC1vbl1cIik7cmV0dXJuIHJ9ZWxzZXtyZXR1cm5bXX19ZnVuY3Rpb24gTXQoZSl7dmFyIHQ9dihlLnRhcmdldCxcImJ1dHRvbiwgaW5wdXRbdHlwZT0nc3VibWl0J11cIik7dmFyIHI9RHQoZSk7aWYocil7ci5sYXN0QnV0dG9uQ2xpY2tlZD10fX1mdW5jdGlvbiBYdChlKXt2YXIgdD1EdChlKTtpZih0KXt0Lmxhc3RCdXR0b25DbGlja2VkPW51bGx9fWZ1bmN0aW9uIER0KGUpe3ZhciB0PXYoZS50YXJnZXQsXCJidXR0b24sIGlucHV0W3R5cGU9J3N1Ym1pdCddXCIpO2lmKCF0KXtyZXR1cm59dmFyIHI9ZyhcIiNcIitlZSh0LFwiZm9ybVwiKSl8fHYodCxcImZvcm1cIik7aWYoIXIpe3JldHVybn1yZXR1cm4gYWUocil9ZnVuY3Rpb24gVXQoZSl7ZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixNdCk7ZS5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNpblwiLE10KTtlLmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c291dFwiLFh0KX1mdW5jdGlvbiBCdChlKXt2YXIgdD1ZZShlKTt2YXIgcj0wO2Zvcih2YXIgbj0wO248dC5sZW5ndGg7bisrKXtjb25zdCBpPXRbbl07aWYoaT09PVwie1wiKXtyKyt9ZWxzZSBpZihpPT09XCJ9XCIpe3ItLX19cmV0dXJuIHJ9ZnVuY3Rpb24gRnQodCxlLHIpe3ZhciBuPWFlKHQpO2lmKCFBcnJheS5pc0FycmF5KG4ub25IYW5kbGVycykpe24ub25IYW5kbGVycz1bXX12YXIgaTt2YXIgYT1mdW5jdGlvbihlKXtyZXR1cm4gVHIodCxmdW5jdGlvbigpe2lmKCFpKXtpPW5ldyBGdW5jdGlvbihcImV2ZW50XCIscil9aS5jYWxsKHQsZSl9KX07dC5hZGRFdmVudExpc3RlbmVyKGUsYSk7bi5vbkhhbmRsZXJzLnB1c2goe2V2ZW50OmUsbGlzdGVuZXI6YX0pfWZ1bmN0aW9uIFZ0KGUpe3ZhciB0PXRlKGUsXCJoeC1vblwiKTtpZih0KXt2YXIgcj17fTt2YXIgbj10LnNwbGl0KFwiXFxuXCIpO3ZhciBpPW51bGw7dmFyIGE9MDt3aGlsZShuLmxlbmd0aD4wKXt2YXIgbz1uLnNoaWZ0KCk7dmFyIHM9by5tYXRjaCgvXlxccyooW2EtekEtWjpcXC1cXC5dKzopKC4qKS8pO2lmKGE9PT0wJiZzKXtvLnNwbGl0KFwiOlwiKTtpPXNbMV0uc2xpY2UoMCwtMSk7cltpXT1zWzJdfWVsc2V7cltpXSs9b31hKz1CdChvKX1mb3IodmFyIGwgaW4gcil7RnQoZSxsLHJbbF0pfX19ZnVuY3Rpb24ganQoZSl7QWUoZSk7Zm9yKHZhciB0PTA7dDxlLmF0dHJpYnV0ZXMubGVuZ3RoO3QrKyl7dmFyIHI9ZS5hdHRyaWJ1dGVzW3RdLm5hbWU7dmFyIG49ZS5hdHRyaWJ1dGVzW3RdLnZhbHVlO2lmKHMocixcImh4LW9uXCIpfHxzKHIsXCJkYXRhLWh4LW9uXCIpKXt2YXIgaT1yLmluZGV4T2YoXCItb25cIikrMzt2YXIgYT1yLnNsaWNlKGksaSsxKTtpZihhPT09XCItXCJ8fGE9PT1cIjpcIil7dmFyIG89ci5zbGljZShpKzEpO2lmKHMobyxcIjpcIikpe289XCJodG14XCIrb31lbHNlIGlmKHMobyxcIi1cIikpe289XCJodG14OlwiK28uc2xpY2UoMSl9ZWxzZSBpZihzKG8sXCJodG14LVwiKSl7bz1cImh0bXg6XCIrby5zbGljZSg1KX1GdChlLG8sbil9fX19ZnVuY3Rpb24gX3QodCl7aWYodih0LFEuY29uZmlnLmRpc2FibGVTZWxlY3Rvcikpe3AodCk7cmV0dXJufXZhciByPWFlKHQpO2lmKHIuaW5pdEhhc2ghPT1MZSh0KSl7TmUodCk7ci5pbml0SGFzaD1MZSh0KTtWdCh0KTtjZSh0LFwiaHRteDpiZWZvcmVQcm9jZXNzTm9kZVwiKTtpZih0LnZhbHVlKXtyLmxhc3RWYWx1ZT10LnZhbHVlfXZhciBlPWl0KHQpO3ZhciBuPUh0KHQscixlKTtpZighbil7aWYobmUodCxcImh4LWJvb3N0XCIpPT09XCJ0cnVlXCIpe2x0KHQscixlKX1lbHNlIGlmKG8odCxcImh4LXRyaWdnZXJcIikpe2UuZm9yRWFjaChmdW5jdGlvbihlKXtMdCh0LGUscixmdW5jdGlvbigpe30pfSl9fWlmKHQudGFnTmFtZT09PVwiRk9STVwifHxlZSh0LFwidHlwZVwiKT09PVwic3VibWl0XCImJm8odCxcImZvcm1cIikpe1V0KHQpfXZhciBpPXRlKHQsXCJoeC1zc2VcIik7aWYoaSl7U3QodCxyLGkpfXZhciBhPXRlKHQsXCJoeC13c1wiKTtpZihhKXtwdCh0LHIsYSl9Y2UodCxcImh0bXg6YWZ0ZXJQcm9jZXNzTm9kZVwiKX19ZnVuY3Rpb24genQoZSl7ZT1nKGUpO2lmKHYoZSxRLmNvbmZpZy5kaXNhYmxlU2VsZWN0b3IpKXtwKGUpO3JldHVybn1fdChlKTtvZShQdChlKSxmdW5jdGlvbihlKXtfdChlKX0pO29lKGt0KGUpLGp0KX1mdW5jdGlvbiAkdChlKXtyZXR1cm4gZS5yZXBsYWNlKC8oW2EtejAtOV0pKFtBLVpdKS9nLFwiJDEtJDJcIikudG9Mb3dlckNhc2UoKX1mdW5jdGlvbiBXdChlLHQpe3ZhciByO2lmKHdpbmRvdy5DdXN0b21FdmVudCYmdHlwZW9mIHdpbmRvdy5DdXN0b21FdmVudD09PVwiZnVuY3Rpb25cIil7cj1uZXcgQ3VzdG9tRXZlbnQoZSx7YnViYmxlczp0cnVlLGNhbmNlbGFibGU6dHJ1ZSxkZXRhaWw6dH0pfWVsc2V7cj1yZSgpLmNyZWF0ZUV2ZW50KFwiQ3VzdG9tRXZlbnRcIik7ci5pbml0Q3VzdG9tRXZlbnQoZSx0cnVlLHRydWUsdCl9cmV0dXJuIHJ9ZnVuY3Rpb24gZmUoZSx0LHIpe2NlKGUsdCxsZSh7ZXJyb3I6dH0scikpfWZ1bmN0aW9uIEd0KGUpe3JldHVybiBlPT09XCJodG14OmFmdGVyUHJvY2Vzc05vZGVcIn1mdW5jdGlvbiBSKGUsdCl7b2UoRnIoZSksZnVuY3Rpb24oZSl7dHJ5e3QoZSl9Y2F0Y2goZSl7YihlKX19KX1mdW5jdGlvbiBiKGUpe2lmKGNvbnNvbGUuZXJyb3Ipe2NvbnNvbGUuZXJyb3IoZSl9ZWxzZSBpZihjb25zb2xlLmxvZyl7Y29uc29sZS5sb2coXCJFUlJPUjogXCIsZSl9fWZ1bmN0aW9uIGNlKGUsdCxyKXtlPWcoZSk7aWYocj09bnVsbCl7cj17fX1yW1wiZWx0XCJdPWU7dmFyIG49V3QodCxyKTtpZihRLmxvZ2dlciYmIUd0KHQpKXtRLmxvZ2dlcihlLHQscil9aWYoci5lcnJvcil7YihyLmVycm9yKTtjZShlLFwiaHRteDplcnJvclwiLHtlcnJvckluZm86cn0pfXZhciBpPWUuZGlzcGF0Y2hFdmVudChuKTt2YXIgYT0kdCh0KTtpZihpJiZhIT09dCl7dmFyIG89V3QoYSxuLmRldGFpbCk7aT1pJiZlLmRpc3BhdGNoRXZlbnQobyl9UihlLGZ1bmN0aW9uKGUpe2k9aSYmKGUub25FdmVudCh0LG4pIT09ZmFsc2UmJiFuLmRlZmF1bHRQcmV2ZW50ZWQpfSk7cmV0dXJuIGl9dmFyIEp0PWxvY2F0aW9uLnBhdGhuYW1lK2xvY2F0aW9uLnNlYXJjaDtmdW5jdGlvbiBadCgpe3ZhciBlPXJlKCkucXVlcnlTZWxlY3RvcihcIltoeC1oaXN0b3J5LWVsdF0sW2RhdGEtaHgtaGlzdG9yeS1lbHRdXCIpO3JldHVybiBlfHxyZSgpLmJvZHl9ZnVuY3Rpb24gS3QoZSx0LHIsbil7aWYoIVUoKSl7cmV0dXJufWlmKFEuY29uZmlnLmhpc3RvcnlDYWNoZVNpemU8PTApe2xvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwiaHRteC1oaXN0b3J5LWNhY2hlXCIpO3JldHVybn1lPUIoZSk7dmFyIGk9RShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImh0bXgtaGlzdG9yeS1jYWNoZVwiKSl8fFtdO2Zvcih2YXIgYT0wO2E8aS5sZW5ndGg7YSsrKXtpZihpW2FdLnVybD09PWUpe2kuc3BsaWNlKGEsMSk7YnJlYWt9fXZhciBvPXt1cmw6ZSxjb250ZW50OnQsdGl0bGU6cixzY3JvbGw6bn07Y2UocmUoKS5ib2R5LFwiaHRteDpoaXN0b3J5SXRlbUNyZWF0ZWRcIix7aXRlbTpvLGNhY2hlOml9KTtpLnB1c2gobyk7d2hpbGUoaS5sZW5ndGg+US5jb25maWcuaGlzdG9yeUNhY2hlU2l6ZSl7aS5zaGlmdCgpfXdoaWxlKGkubGVuZ3RoPjApe3RyeXtsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImh0bXgtaGlzdG9yeS1jYWNoZVwiLEpTT04uc3RyaW5naWZ5KGkpKTticmVha31jYXRjaChlKXtmZShyZSgpLmJvZHksXCJodG14Omhpc3RvcnlDYWNoZUVycm9yXCIse2NhdXNlOmUsY2FjaGU6aX0pO2kuc2hpZnQoKX19fWZ1bmN0aW9uIFl0KGUpe2lmKCFVKCkpe3JldHVybiBudWxsfWU9QihlKTt2YXIgdD1FKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiaHRteC1oaXN0b3J5LWNhY2hlXCIpKXx8W107Zm9yKHZhciByPTA7cjx0Lmxlbmd0aDtyKyspe2lmKHRbcl0udXJsPT09ZSl7cmV0dXJuIHRbcl19fXJldHVybiBudWxsfWZ1bmN0aW9uIFF0KGUpe3ZhciB0PVEuY29uZmlnLnJlcXVlc3RDbGFzczt2YXIgcj1lLmNsb25lTm9kZSh0cnVlKTtvZShmKHIsXCIuXCIrdCksZnVuY3Rpb24oZSl7bihlLHQpfSk7cmV0dXJuIHIuaW5uZXJIVE1MfWZ1bmN0aW9uIGVyKCl7dmFyIGU9WnQoKTt2YXIgdD1KdHx8bG9jYXRpb24ucGF0aG5hbWUrbG9jYXRpb24uc2VhcmNoO3ZhciByO3RyeXtyPXJlKCkucXVlcnlTZWxlY3RvcignW2h4LWhpc3Rvcnk9XCJmYWxzZVwiIGldLFtkYXRhLWh4LWhpc3Rvcnk9XCJmYWxzZVwiIGldJyl9Y2F0Y2goZSl7cj1yZSgpLnF1ZXJ5U2VsZWN0b3IoJ1toeC1oaXN0b3J5PVwiZmFsc2VcIl0sW2RhdGEtaHgtaGlzdG9yeT1cImZhbHNlXCJdJyl9aWYoIXIpe2NlKHJlKCkuYm9keSxcImh0bXg6YmVmb3JlSGlzdG9yeVNhdmVcIix7cGF0aDp0LGhpc3RvcnlFbHQ6ZX0pO0t0KHQsUXQoZSkscmUoKS50aXRsZSx3aW5kb3cuc2Nyb2xsWSl9aWYoUS5jb25maWcuaGlzdG9yeUVuYWJsZWQpaGlzdG9yeS5yZXBsYWNlU3RhdGUoe2h0bXg6dHJ1ZX0scmUoKS50aXRsZSx3aW5kb3cubG9jYXRpb24uaHJlZil9ZnVuY3Rpb24gdHIoZSl7aWYoUS5jb25maWcuZ2V0Q2FjaGVCdXN0ZXJQYXJhbSl7ZT1lLnJlcGxhY2UoL29yZ1xcLmh0bXhcXC5jYWNoZS1idXN0ZXI9W14mXSomPy8sXCJcIik7aWYoRyhlLFwiJlwiKXx8RyhlLFwiP1wiKSl7ZT1lLnNsaWNlKDAsLTEpfX1pZihRLmNvbmZpZy5oaXN0b3J5RW5hYmxlZCl7aGlzdG9yeS5wdXNoU3RhdGUoe2h0bXg6dHJ1ZX0sXCJcIixlKX1KdD1lfWZ1bmN0aW9uIHJyKGUpe2lmKFEuY29uZmlnLmhpc3RvcnlFbmFibGVkKWhpc3RvcnkucmVwbGFjZVN0YXRlKHtodG14OnRydWV9LFwiXCIsZSk7SnQ9ZX1mdW5jdGlvbiBucihlKXtvZShlLGZ1bmN0aW9uKGUpe2UuY2FsbCgpfSl9ZnVuY3Rpb24gaXIoYSl7dmFyIGU9bmV3IFhNTEh0dHBSZXF1ZXN0O3ZhciBvPXtwYXRoOmEseGhyOmV9O2NlKHJlKCkuYm9keSxcImh0bXg6aGlzdG9yeUNhY2hlTWlzc1wiLG8pO2Uub3BlbihcIkdFVFwiLGEsdHJ1ZSk7ZS5zZXRSZXF1ZXN0SGVhZGVyKFwiSFgtUmVxdWVzdFwiLFwidHJ1ZVwiKTtlLnNldFJlcXVlc3RIZWFkZXIoXCJIWC1IaXN0b3J5LVJlc3RvcmUtUmVxdWVzdFwiLFwidHJ1ZVwiKTtlLnNldFJlcXVlc3RIZWFkZXIoXCJIWC1DdXJyZW50LVVSTFwiLHJlKCkubG9jYXRpb24uaHJlZik7ZS5vbmxvYWQ9ZnVuY3Rpb24oKXtpZih0aGlzLnN0YXR1cz49MjAwJiZ0aGlzLnN0YXR1czw0MDApe2NlKHJlKCkuYm9keSxcImh0bXg6aGlzdG9yeUNhY2hlTWlzc0xvYWRcIixvKTt2YXIgZT1sKHRoaXMucmVzcG9uc2UpO2U9ZS5xdWVyeVNlbGVjdG9yKFwiW2h4LWhpc3RvcnktZWx0XSxbZGF0YS1oeC1oaXN0b3J5LWVsdF1cIil8fGU7dmFyIHQ9WnQoKTt2YXIgcj1UKHQpO3ZhciBuPVZlKHRoaXMucmVzcG9uc2UpO2lmKG4pe3ZhciBpPUMoXCJ0aXRsZVwiKTtpZihpKXtpLmlubmVySFRNTD1ufWVsc2V7d2luZG93LmRvY3VtZW50LnRpdGxlPW59fVVlKHQsZSxyKTtucihyLnRhc2tzKTtKdD1hO2NlKHJlKCkuYm9keSxcImh0bXg6aGlzdG9yeVJlc3RvcmVcIix7cGF0aDphLGNhY2hlTWlzczp0cnVlLHNlcnZlclJlc3BvbnNlOnRoaXMucmVzcG9uc2V9KX1lbHNle2ZlKHJlKCkuYm9keSxcImh0bXg6aGlzdG9yeUNhY2hlTWlzc0xvYWRFcnJvclwiLG8pfX07ZS5zZW5kKCl9ZnVuY3Rpb24gYXIoZSl7ZXIoKTtlPWV8fGxvY2F0aW9uLnBhdGhuYW1lK2xvY2F0aW9uLnNlYXJjaDt2YXIgdD1ZdChlKTtpZih0KXt2YXIgcj1sKHQuY29udGVudCk7dmFyIG49WnQoKTt2YXIgaT1UKG4pO1VlKG4scixpKTtucihpLnRhc2tzKTtkb2N1bWVudC50aXRsZT10LnRpdGxlO3NldFRpbWVvdXQoZnVuY3Rpb24oKXt3aW5kb3cuc2Nyb2xsVG8oMCx0LnNjcm9sbCl9LDApO0p0PWU7Y2UocmUoKS5ib2R5LFwiaHRteDpoaXN0b3J5UmVzdG9yZVwiLHtwYXRoOmUsaXRlbTp0fSl9ZWxzZXtpZihRLmNvbmZpZy5yZWZyZXNoT25IaXN0b3J5TWlzcyl7d2luZG93LmxvY2F0aW9uLnJlbG9hZCh0cnVlKX1lbHNle2lyKGUpfX19ZnVuY3Rpb24gb3IoZSl7dmFyIHQ9cGUoZSxcImh4LWluZGljYXRvclwiKTtpZih0PT1udWxsKXt0PVtlXX1vZSh0LGZ1bmN0aW9uKGUpe3ZhciB0PWFlKGUpO3QucmVxdWVzdENvdW50PSh0LnJlcXVlc3RDb3VudHx8MCkrMTtlLmNsYXNzTGlzdFtcImFkZFwiXS5jYWxsKGUuY2xhc3NMaXN0LFEuY29uZmlnLnJlcXVlc3RDbGFzcyl9KTtyZXR1cm4gdH1mdW5jdGlvbiBzcihlKXt2YXIgdD1wZShlLFwiaHgtZGlzYWJsZWQtZWx0XCIpO2lmKHQ9PW51bGwpe3Q9W119b2UodCxmdW5jdGlvbihlKXt2YXIgdD1hZShlKTt0LnJlcXVlc3RDb3VudD0odC5yZXF1ZXN0Q291bnR8fDApKzE7ZS5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLFwiXCIpfSk7cmV0dXJuIHR9ZnVuY3Rpb24gbHIoZSx0KXtvZShlLGZ1bmN0aW9uKGUpe3ZhciB0PWFlKGUpO3QucmVxdWVzdENvdW50PSh0LnJlcXVlc3RDb3VudHx8MCktMTtpZih0LnJlcXVlc3RDb3VudD09PTApe2UuY2xhc3NMaXN0W1wicmVtb3ZlXCJdLmNhbGwoZS5jbGFzc0xpc3QsUS5jb25maWcucmVxdWVzdENsYXNzKX19KTtvZSh0LGZ1bmN0aW9uKGUpe3ZhciB0PWFlKGUpO3QucmVxdWVzdENvdW50PSh0LnJlcXVlc3RDb3VudHx8MCktMTtpZih0LnJlcXVlc3RDb3VudD09PTApe2UucmVtb3ZlQXR0cmlidXRlKFwiZGlzYWJsZWRcIil9fSl9ZnVuY3Rpb24gdXIoZSx0KXtmb3IodmFyIHI9MDtyPGUubGVuZ3RoO3IrKyl7dmFyIG49ZVtyXTtpZihuLmlzU2FtZU5vZGUodCkpe3JldHVybiB0cnVlfX1yZXR1cm4gZmFsc2V9ZnVuY3Rpb24gZnIoZSl7aWYoZS5uYW1lPT09XCJcInx8ZS5uYW1lPT1udWxsfHxlLmRpc2FibGVkfHx2KGUsXCJmaWVsZHNldFtkaXNhYmxlZF1cIikpe3JldHVybiBmYWxzZX1pZihlLnR5cGU9PT1cImJ1dHRvblwifHxlLnR5cGU9PT1cInN1Ym1pdFwifHxlLnRhZ05hbWU9PT1cImltYWdlXCJ8fGUudGFnTmFtZT09PVwicmVzZXRcInx8ZS50YWdOYW1lPT09XCJmaWxlXCIpe3JldHVybiBmYWxzZX1pZihlLnR5cGU9PT1cImNoZWNrYm94XCJ8fGUudHlwZT09PVwicmFkaW9cIil7cmV0dXJuIGUuY2hlY2tlZH1yZXR1cm4gdHJ1ZX1mdW5jdGlvbiBjcihlLHQscil7aWYoZSE9bnVsbCYmdCE9bnVsbCl7dmFyIG49cltlXTtpZihuPT09dW5kZWZpbmVkKXtyW2VdPXR9ZWxzZSBpZihBcnJheS5pc0FycmF5KG4pKXtpZihBcnJheS5pc0FycmF5KHQpKXtyW2VdPW4uY29uY2F0KHQpfWVsc2V7bi5wdXNoKHQpfX1lbHNle2lmKEFycmF5LmlzQXJyYXkodCkpe3JbZV09W25dLmNvbmNhdCh0KX1lbHNle3JbZV09W24sdF19fX19ZnVuY3Rpb24gaHIodCxyLG4sZSxpKXtpZihlPT1udWxsfHx1cih0LGUpKXtyZXR1cm59ZWxzZXt0LnB1c2goZSl9aWYoZnIoZSkpe3ZhciBhPWVlKGUsXCJuYW1lXCIpO3ZhciBvPWUudmFsdWU7aWYoZS5tdWx0aXBsZSYmZS50YWdOYW1lPT09XCJTRUxFQ1RcIil7bz1NKGUucXVlcnlTZWxlY3RvckFsbChcIm9wdGlvbjpjaGVja2VkXCIpKS5tYXAoZnVuY3Rpb24oZSl7cmV0dXJuIGUudmFsdWV9KX1pZihlLmZpbGVzKXtvPU0oZS5maWxlcyl9Y3IoYSxvLHIpO2lmKGkpe3ZyKGUsbil9fWlmKGgoZSxcImZvcm1cIikpe3ZhciBzPWUuZWxlbWVudHM7b2UocyxmdW5jdGlvbihlKXtocih0LHIsbixlLGkpfSl9fWZ1bmN0aW9uIHZyKGUsdCl7aWYoZS53aWxsVmFsaWRhdGUpe2NlKGUsXCJodG14OnZhbGlkYXRpb246dmFsaWRhdGVcIik7aWYoIWUuY2hlY2tWYWxpZGl0eSgpKXt0LnB1c2goe2VsdDplLG1lc3NhZ2U6ZS52YWxpZGF0aW9uTWVzc2FnZSx2YWxpZGl0eTplLnZhbGlkaXR5fSk7Y2UoZSxcImh0bXg6dmFsaWRhdGlvbjpmYWlsZWRcIix7bWVzc2FnZTplLnZhbGlkYXRpb25NZXNzYWdlLHZhbGlkaXR5OmUudmFsaWRpdHl9KX19fWZ1bmN0aW9uIGRyKGUsdCl7dmFyIHI9W107dmFyIG49e307dmFyIGk9e307dmFyIGE9W107dmFyIG89YWUoZSk7aWYoby5sYXN0QnV0dG9uQ2xpY2tlZCYmIXNlKG8ubGFzdEJ1dHRvbkNsaWNrZWQpKXtvLmxhc3RCdXR0b25DbGlja2VkPW51bGx9dmFyIHM9aChlLFwiZm9ybVwiKSYmZS5ub1ZhbGlkYXRlIT09dHJ1ZXx8dGUoZSxcImh4LXZhbGlkYXRlXCIpPT09XCJ0cnVlXCI7aWYoby5sYXN0QnV0dG9uQ2xpY2tlZCl7cz1zJiZvLmxhc3RCdXR0b25DbGlja2VkLmZvcm1Ob1ZhbGlkYXRlIT09dHJ1ZX1pZih0IT09XCJnZXRcIil7aHIocixpLGEsdihlLFwiZm9ybVwiKSxzKX1ocihyLG4sYSxlLHMpO2lmKG8ubGFzdEJ1dHRvbkNsaWNrZWR8fGUudGFnTmFtZT09PVwiQlVUVE9OXCJ8fGUudGFnTmFtZT09PVwiSU5QVVRcIiYmZWUoZSxcInR5cGVcIik9PT1cInN1Ym1pdFwiKXt2YXIgbD1vLmxhc3RCdXR0b25DbGlja2VkfHxlO3ZhciB1PWVlKGwsXCJuYW1lXCIpO2NyKHUsbC52YWx1ZSxpKX12YXIgZj1wZShlLFwiaHgtaW5jbHVkZVwiKTtvZShmLGZ1bmN0aW9uKGUpe2hyKHIsbixhLGUscyk7aWYoIWgoZSxcImZvcm1cIikpe29lKGUucXVlcnlTZWxlY3RvckFsbChydCksZnVuY3Rpb24oZSl7aHIocixuLGEsZSxzKX0pfX0pO249bGUobixpKTtyZXR1cm57ZXJyb3JzOmEsdmFsdWVzOm59fWZ1bmN0aW9uIGdyKGUsdCxyKXtpZihlIT09XCJcIil7ZSs9XCImXCJ9aWYoU3RyaW5nKHIpPT09XCJbb2JqZWN0IE9iamVjdF1cIil7cj1KU09OLnN0cmluZ2lmeShyKX12YXIgbj1lbmNvZGVVUklDb21wb25lbnQocik7ZSs9ZW5jb2RlVVJJQ29tcG9uZW50KHQpK1wiPVwiK247cmV0dXJuIGV9ZnVuY3Rpb24gbXIoZSl7dmFyIHQ9XCJcIjtmb3IodmFyIHIgaW4gZSl7aWYoZS5oYXNPd25Qcm9wZXJ0eShyKSl7dmFyIG49ZVtyXTtpZihBcnJheS5pc0FycmF5KG4pKXtvZShuLGZ1bmN0aW9uKGUpe3Q9Z3IodCxyLGUpfSl9ZWxzZXt0PWdyKHQscixuKX19fXJldHVybiB0fWZ1bmN0aW9uIHByKGUpe3ZhciB0PW5ldyBGb3JtRGF0YTtmb3IodmFyIHIgaW4gZSl7aWYoZS5oYXNPd25Qcm9wZXJ0eShyKSl7dmFyIG49ZVtyXTtpZihBcnJheS5pc0FycmF5KG4pKXtvZShuLGZ1bmN0aW9uKGUpe3QuYXBwZW5kKHIsZSl9KX1lbHNle3QuYXBwZW5kKHIsbil9fX1yZXR1cm4gdH1mdW5jdGlvbiB4cihlLHQscil7dmFyIG49e1wiSFgtUmVxdWVzdFwiOlwidHJ1ZVwiLFwiSFgtVHJpZ2dlclwiOmVlKGUsXCJpZFwiKSxcIkhYLVRyaWdnZXItTmFtZVwiOmVlKGUsXCJuYW1lXCIpLFwiSFgtVGFyZ2V0XCI6dGUodCxcImlkXCIpLFwiSFgtQ3VycmVudC1VUkxcIjpyZSgpLmxvY2F0aW9uLmhyZWZ9O1JyKGUsXCJoeC1oZWFkZXJzXCIsZmFsc2Usbik7aWYociE9PXVuZGVmaW5lZCl7bltcIkhYLVByb21wdFwiXT1yfWlmKGFlKGUpLmJvb3N0ZWQpe25bXCJIWC1Cb29zdGVkXCJdPVwidHJ1ZVwifXJldHVybiBufWZ1bmN0aW9uIHlyKHQsZSl7dmFyIHI9bmUoZSxcImh4LXBhcmFtc1wiKTtpZihyKXtpZihyPT09XCJub25lXCIpe3JldHVybnt9fWVsc2UgaWYocj09PVwiKlwiKXtyZXR1cm4gdH1lbHNlIGlmKHIuaW5kZXhPZihcIm5vdCBcIik9PT0wKXtvZShyLnN1YnN0cig0KS5zcGxpdChcIixcIiksZnVuY3Rpb24oZSl7ZT1lLnRyaW0oKTtkZWxldGUgdFtlXX0pO3JldHVybiB0fWVsc2V7dmFyIG49e307b2Uoci5zcGxpdChcIixcIiksZnVuY3Rpb24oZSl7ZT1lLnRyaW0oKTtuW2VdPXRbZV19KTtyZXR1cm4gbn19ZWxzZXtyZXR1cm4gdH19ZnVuY3Rpb24gYnIoZSl7cmV0dXJuIGVlKGUsXCJocmVmXCIpJiZlZShlLFwiaHJlZlwiKS5pbmRleE9mKFwiI1wiKT49MH1mdW5jdGlvbiB3cihlLHQpe3ZhciByPXQ/dDpuZShlLFwiaHgtc3dhcFwiKTt2YXIgbj17c3dhcFN0eWxlOmFlKGUpLmJvb3N0ZWQ/XCJpbm5lckhUTUxcIjpRLmNvbmZpZy5kZWZhdWx0U3dhcFN0eWxlLHN3YXBEZWxheTpRLmNvbmZpZy5kZWZhdWx0U3dhcERlbGF5LHNldHRsZURlbGF5OlEuY29uZmlnLmRlZmF1bHRTZXR0bGVEZWxheX07aWYoUS5jb25maWcuc2Nyb2xsSW50b1ZpZXdPbkJvb3N0JiZhZShlKS5ib29zdGVkJiYhYnIoZSkpe25bXCJzaG93XCJdPVwidG9wXCJ9aWYocil7dmFyIGk9RChyKTtpZihpLmxlbmd0aD4wKXtmb3IodmFyIGE9MDthPGkubGVuZ3RoO2ErKyl7dmFyIG89aVthXTtpZihvLmluZGV4T2YoXCJzd2FwOlwiKT09PTApe25bXCJzd2FwRGVsYXlcIl09ZChvLnN1YnN0cig1KSl9ZWxzZSBpZihvLmluZGV4T2YoXCJzZXR0bGU6XCIpPT09MCl7bltcInNldHRsZURlbGF5XCJdPWQoby5zdWJzdHIoNykpfWVsc2UgaWYoby5pbmRleE9mKFwidHJhbnNpdGlvbjpcIik9PT0wKXtuW1widHJhbnNpdGlvblwiXT1vLnN1YnN0cigxMSk9PT1cInRydWVcIn1lbHNlIGlmKG8uaW5kZXhPZihcImlnbm9yZVRpdGxlOlwiKT09PTApe25bXCJpZ25vcmVUaXRsZVwiXT1vLnN1YnN0cigxMik9PT1cInRydWVcIn1lbHNlIGlmKG8uaW5kZXhPZihcInNjcm9sbDpcIik9PT0wKXt2YXIgcz1vLnN1YnN0cig3KTt2YXIgbD1zLnNwbGl0KFwiOlwiKTt2YXIgdT1sLnBvcCgpO3ZhciBmPWwubGVuZ3RoPjA/bC5qb2luKFwiOlwiKTpudWxsO25bXCJzY3JvbGxcIl09dTtuW1wic2Nyb2xsVGFyZ2V0XCJdPWZ9ZWxzZSBpZihvLmluZGV4T2YoXCJzaG93OlwiKT09PTApe3ZhciBjPW8uc3Vic3RyKDUpO3ZhciBsPWMuc3BsaXQoXCI6XCIpO3ZhciBoPWwucG9wKCk7dmFyIGY9bC5sZW5ndGg+MD9sLmpvaW4oXCI6XCIpOm51bGw7bltcInNob3dcIl09aDtuW1wic2hvd1RhcmdldFwiXT1mfWVsc2UgaWYoby5pbmRleE9mKFwiZm9jdXMtc2Nyb2xsOlwiKT09PTApe3ZhciB2PW8uc3Vic3RyKFwiZm9jdXMtc2Nyb2xsOlwiLmxlbmd0aCk7bltcImZvY3VzU2Nyb2xsXCJdPXY9PVwidHJ1ZVwifWVsc2UgaWYoYT09MCl7bltcInN3YXBTdHlsZVwiXT1vfWVsc2V7YihcIlVua25vd24gbW9kaWZpZXIgaW4gaHgtc3dhcDogXCIrbyl9fX19cmV0dXJuIG59ZnVuY3Rpb24gU3IoZSl7cmV0dXJuIG5lKGUsXCJoeC1lbmNvZGluZ1wiKT09PVwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwifHxoKGUsXCJmb3JtXCIpJiZlZShlLFwiZW5jdHlwZVwiKT09PVwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwifWZ1bmN0aW9uIEVyKHQscixuKXt2YXIgaT1udWxsO1IocixmdW5jdGlvbihlKXtpZihpPT1udWxsKXtpPWUuZW5jb2RlUGFyYW1ldGVycyh0LG4scil9fSk7aWYoaSE9bnVsbCl7cmV0dXJuIGl9ZWxzZXtpZihTcihyKSl7cmV0dXJuIHByKG4pfWVsc2V7cmV0dXJuIG1yKG4pfX19ZnVuY3Rpb24gVChlKXtyZXR1cm57dGFza3M6W10sZWx0czpbZV19fWZ1bmN0aW9uIENyKGUsdCl7dmFyIHI9ZVswXTt2YXIgbj1lW2UubGVuZ3RoLTFdO2lmKHQuc2Nyb2xsKXt2YXIgaT1udWxsO2lmKHQuc2Nyb2xsVGFyZ2V0KXtpPXVlKHIsdC5zY3JvbGxUYXJnZXQpfWlmKHQuc2Nyb2xsPT09XCJ0b3BcIiYmKHJ8fGkpKXtpPWl8fHI7aS5zY3JvbGxUb3A9MH1pZih0LnNjcm9sbD09PVwiYm90dG9tXCImJihufHxpKSl7aT1pfHxuO2kuc2Nyb2xsVG9wPWkuc2Nyb2xsSGVpZ2h0fX1pZih0LnNob3cpe3ZhciBpPW51bGw7aWYodC5zaG93VGFyZ2V0KXt2YXIgYT10LnNob3dUYXJnZXQ7aWYodC5zaG93VGFyZ2V0PT09XCJ3aW5kb3dcIil7YT1cImJvZHlcIn1pPXVlKHIsYSl9aWYodC5zaG93PT09XCJ0b3BcIiYmKHJ8fGkpKXtpPWl8fHI7aS5zY3JvbGxJbnRvVmlldyh7YmxvY2s6XCJzdGFydFwiLGJlaGF2aW9yOlEuY29uZmlnLnNjcm9sbEJlaGF2aW9yfSl9aWYodC5zaG93PT09XCJib3R0b21cIiYmKG58fGkpKXtpPWl8fG47aS5zY3JvbGxJbnRvVmlldyh7YmxvY2s6XCJlbmRcIixiZWhhdmlvcjpRLmNvbmZpZy5zY3JvbGxCZWhhdmlvcn0pfX19ZnVuY3Rpb24gUnIoZSx0LHIsbil7aWYobj09bnVsbCl7bj17fX1pZihlPT1udWxsKXtyZXR1cm4gbn12YXIgaT10ZShlLHQpO2lmKGkpe3ZhciBhPWkudHJpbSgpO3ZhciBvPXI7aWYoYT09PVwidW5zZXRcIil7cmV0dXJuIG51bGx9aWYoYS5pbmRleE9mKFwiamF2YXNjcmlwdDpcIik9PT0wKXthPWEuc3Vic3RyKDExKTtvPXRydWV9ZWxzZSBpZihhLmluZGV4T2YoXCJqczpcIik9PT0wKXthPWEuc3Vic3RyKDMpO289dHJ1ZX1pZihhLmluZGV4T2YoXCJ7XCIpIT09MCl7YT1cIntcIithK1wifVwifXZhciBzO2lmKG8pe3M9VHIoZSxmdW5jdGlvbigpe3JldHVybiBGdW5jdGlvbihcInJldHVybiAoXCIrYStcIilcIikoKX0se30pfWVsc2V7cz1FKGEpfWZvcih2YXIgbCBpbiBzKXtpZihzLmhhc093blByb3BlcnR5KGwpKXtpZihuW2xdPT1udWxsKXtuW2xdPXNbbF19fX19cmV0dXJuIFJyKHUoZSksdCxyLG4pfWZ1bmN0aW9uIFRyKGUsdCxyKXtpZihRLmNvbmZpZy5hbGxvd0V2YWwpe3JldHVybiB0KCl9ZWxzZXtmZShlLFwiaHRteDpldmFsRGlzYWxsb3dlZEVycm9yXCIpO3JldHVybiByfX1mdW5jdGlvbiBPcihlLHQpe3JldHVybiBScihlLFwiaHgtdmFyc1wiLHRydWUsdCl9ZnVuY3Rpb24gcXIoZSx0KXtyZXR1cm4gUnIoZSxcImh4LXZhbHNcIixmYWxzZSx0KX1mdW5jdGlvbiBIcihlKXtyZXR1cm4gbGUoT3IoZSkscXIoZSkpfWZ1bmN0aW9uIExyKHQscixuKXtpZihuIT09bnVsbCl7dHJ5e3Quc2V0UmVxdWVzdEhlYWRlcihyLG4pfWNhdGNoKGUpe3Quc2V0UmVxdWVzdEhlYWRlcihyLGVuY29kZVVSSUNvbXBvbmVudChuKSk7dC5zZXRSZXF1ZXN0SGVhZGVyKHIrXCItVVJJLUF1dG9FbmNvZGVkXCIsXCJ0cnVlXCIpfX19ZnVuY3Rpb24gQXIodCl7aWYodC5yZXNwb25zZVVSTCYmdHlwZW9mIFVSTCE9PVwidW5kZWZpbmVkXCIpe3RyeXt2YXIgZT1uZXcgVVJMKHQucmVzcG9uc2VVUkwpO3JldHVybiBlLnBhdGhuYW1lK2Uuc2VhcmNofWNhdGNoKGUpe2ZlKHJlKCkuYm9keSxcImh0bXg6YmFkUmVzcG9uc2VVcmxcIix7dXJsOnQucmVzcG9uc2VVUkx9KX19fWZ1bmN0aW9uIE8oZSx0KXtyZXR1cm4gdC50ZXN0KGUuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCkpfWZ1bmN0aW9uIE5yKGUsdCxyKXtlPWUudG9Mb3dlckNhc2UoKTtpZihyKXtpZihyIGluc3RhbmNlb2YgRWxlbWVudHx8SShyLFwiU3RyaW5nXCIpKXtyZXR1cm4gaGUoZSx0LG51bGwsbnVsbCx7dGFyZ2V0T3ZlcnJpZGU6ZyhyKSxyZXR1cm5Qcm9taXNlOnRydWV9KX1lbHNle3JldHVybiBoZShlLHQsZyhyLnNvdXJjZSksci5ldmVudCx7aGFuZGxlcjpyLmhhbmRsZXIsaGVhZGVyczpyLmhlYWRlcnMsdmFsdWVzOnIudmFsdWVzLHRhcmdldE92ZXJyaWRlOmcoci50YXJnZXQpLHN3YXBPdmVycmlkZTpyLnN3YXAsc2VsZWN0OnIuc2VsZWN0LHJldHVyblByb21pc2U6dHJ1ZX0pfX1lbHNle3JldHVybiBoZShlLHQsbnVsbCxudWxsLHtyZXR1cm5Qcm9taXNlOnRydWV9KX19ZnVuY3Rpb24gSXIoZSl7dmFyIHQ9W107d2hpbGUoZSl7dC5wdXNoKGUpO2U9ZS5wYXJlbnRFbGVtZW50fXJldHVybiB0fWZ1bmN0aW9uIGtyKGUsdCxyKXt2YXIgbjt2YXIgaTtpZih0eXBlb2YgVVJMPT09XCJmdW5jdGlvblwiKXtpPW5ldyBVUkwodCxkb2N1bWVudC5sb2NhdGlvbi5ocmVmKTt2YXIgYT1kb2N1bWVudC5sb2NhdGlvbi5vcmlnaW47bj1hPT09aS5vcmlnaW59ZWxzZXtpPXQ7bj1zKHQsZG9jdW1lbnQubG9jYXRpb24ub3JpZ2luKX1pZihRLmNvbmZpZy5zZWxmUmVxdWVzdHNPbmx5KXtpZighbil7cmV0dXJuIGZhbHNlfX1yZXR1cm4gY2UoZSxcImh0bXg6dmFsaWRhdGVVcmxcIixsZSh7dXJsOmksc2FtZUhvc3Q6bn0scikpfWZ1bmN0aW9uIGhlKHQscixuLGksYSxlKXt2YXIgbz1udWxsO3ZhciBzPW51bGw7YT1hIT1udWxsP2E6e307aWYoYS5yZXR1cm5Qcm9taXNlJiZ0eXBlb2YgUHJvbWlzZSE9PVwidW5kZWZpbmVkXCIpe3ZhciBsPW5ldyBQcm9taXNlKGZ1bmN0aW9uKGUsdCl7bz1lO3M9dH0pfWlmKG49PW51bGwpe249cmUoKS5ib2R5fXZhciBNPWEuaGFuZGxlcnx8TXI7dmFyIFg9YS5zZWxlY3R8fG51bGw7aWYoIXNlKG4pKXtpZShvKTtyZXR1cm4gbH12YXIgdT1hLnRhcmdldE92ZXJyaWRlfHx5ZShuKTtpZih1PT1udWxsfHx1PT1tZSl7ZmUobixcImh0bXg6dGFyZ2V0RXJyb3JcIix7dGFyZ2V0OnRlKG4sXCJoeC10YXJnZXRcIil9KTtpZShzKTtyZXR1cm4gbH12YXIgZj1hZShuKTt2YXIgYz1mLmxhc3RCdXR0b25DbGlja2VkO2lmKGMpe3ZhciBoPWVlKGMsXCJmb3JtYWN0aW9uXCIpO2lmKGghPW51bGwpe3I9aH12YXIgdj1lZShjLFwiZm9ybW1ldGhvZFwiKTtpZih2IT1udWxsKXtpZih2LnRvTG93ZXJDYXNlKCkhPT1cImRpYWxvZ1wiKXt0PXZ9fX12YXIgZD1uZShuLFwiaHgtY29uZmlybVwiKTtpZihlPT09dW5kZWZpbmVkKXt2YXIgRD1mdW5jdGlvbihlKXtyZXR1cm4gaGUodCxyLG4saSxhLCEhZSl9O3ZhciBVPXt0YXJnZXQ6dSxlbHQ6bixwYXRoOnIsdmVyYjp0LHRyaWdnZXJpbmdFdmVudDppLGV0YzphLGlzc3VlUmVxdWVzdDpELHF1ZXN0aW9uOmR9O2lmKGNlKG4sXCJodG14OmNvbmZpcm1cIixVKT09PWZhbHNlKXtpZShvKTtyZXR1cm4gbH19dmFyIGc9bjt2YXIgbT1uZShuLFwiaHgtc3luY1wiKTt2YXIgcD1udWxsO3ZhciB4PWZhbHNlO2lmKG0pe3ZhciBCPW0uc3BsaXQoXCI6XCIpO3ZhciBGPUJbMF0udHJpbSgpO2lmKEY9PT1cInRoaXNcIil7Zz14ZShuLFwiaHgtc3luY1wiKX1lbHNle2c9dWUobixGKX1tPShCWzFdfHxcImRyb3BcIikudHJpbSgpO2Y9YWUoZyk7aWYobT09PVwiZHJvcFwiJiZmLnhociYmZi5hYm9ydGFibGUhPT10cnVlKXtpZShvKTtyZXR1cm4gbH1lbHNlIGlmKG09PT1cImFib3J0XCIpe2lmKGYueGhyKXtpZShvKTtyZXR1cm4gbH1lbHNle3g9dHJ1ZX19ZWxzZSBpZihtPT09XCJyZXBsYWNlXCIpe2NlKGcsXCJodG14OmFib3J0XCIpfWVsc2UgaWYobS5pbmRleE9mKFwicXVldWVcIik9PT0wKXt2YXIgVj1tLnNwbGl0KFwiIFwiKTtwPShWWzFdfHxcImxhc3RcIikudHJpbSgpfX1pZihmLnhocil7aWYoZi5hYm9ydGFibGUpe2NlKGcsXCJodG14OmFib3J0XCIpfWVsc2V7aWYocD09bnVsbCl7aWYoaSl7dmFyIHk9YWUoaSk7aWYoeSYmeS50cmlnZ2VyU3BlYyYmeS50cmlnZ2VyU3BlYy5xdWV1ZSl7cD15LnRyaWdnZXJTcGVjLnF1ZXVlfX1pZihwPT1udWxsKXtwPVwibGFzdFwifX1pZihmLnF1ZXVlZFJlcXVlc3RzPT1udWxsKXtmLnF1ZXVlZFJlcXVlc3RzPVtdfWlmKHA9PT1cImZpcnN0XCImJmYucXVldWVkUmVxdWVzdHMubGVuZ3RoPT09MCl7Zi5xdWV1ZWRSZXF1ZXN0cy5wdXNoKGZ1bmN0aW9uKCl7aGUodCxyLG4saSxhKX0pfWVsc2UgaWYocD09PVwiYWxsXCIpe2YucXVldWVkUmVxdWVzdHMucHVzaChmdW5jdGlvbigpe2hlKHQscixuLGksYSl9KX1lbHNlIGlmKHA9PT1cImxhc3RcIil7Zi5xdWV1ZWRSZXF1ZXN0cz1bXTtmLnF1ZXVlZFJlcXVlc3RzLnB1c2goZnVuY3Rpb24oKXtoZSh0LHIsbixpLGEpfSl9aWUobyk7cmV0dXJuIGx9fXZhciBiPW5ldyBYTUxIdHRwUmVxdWVzdDtmLnhocj1iO2YuYWJvcnRhYmxlPXg7dmFyIHc9ZnVuY3Rpb24oKXtmLnhocj1udWxsO2YuYWJvcnRhYmxlPWZhbHNlO2lmKGYucXVldWVkUmVxdWVzdHMhPW51bGwmJmYucXVldWVkUmVxdWVzdHMubGVuZ3RoPjApe3ZhciBlPWYucXVldWVkUmVxdWVzdHMuc2hpZnQoKTtlKCl9fTt2YXIgaj1uZShuLFwiaHgtcHJvbXB0XCIpO2lmKGope3ZhciBTPXByb21wdChqKTtpZihTPT09bnVsbHx8IWNlKG4sXCJodG14OnByb21wdFwiLHtwcm9tcHQ6Uyx0YXJnZXQ6dX0pKXtpZShvKTt3KCk7cmV0dXJuIGx9fWlmKGQmJiFlKXtpZighY29uZmlybShkKSl7aWUobyk7dygpO3JldHVybiBsfX12YXIgRT14cihuLHUsUyk7aWYodCE9PVwiZ2V0XCImJiFTcihuKSl7RVtcIkNvbnRlbnQtVHlwZVwiXT1cImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwifWlmKGEuaGVhZGVycyl7RT1sZShFLGEuaGVhZGVycyl9dmFyIF89ZHIobix0KTt2YXIgQz1fLmVycm9yczt2YXIgUj1fLnZhbHVlcztpZihhLnZhbHVlcyl7Uj1sZShSLGEudmFsdWVzKX12YXIgej1IcihuKTt2YXIgJD1sZShSLHopO3ZhciBUPXlyKCQsbik7aWYoUS5jb25maWcuZ2V0Q2FjaGVCdXN0ZXJQYXJhbSYmdD09PVwiZ2V0XCIpe1RbXCJvcmcuaHRteC5jYWNoZS1idXN0ZXJcIl09ZWUodSxcImlkXCIpfHxcInRydWVcIn1pZihyPT1udWxsfHxyPT09XCJcIil7cj1yZSgpLmxvY2F0aW9uLmhyZWZ9dmFyIE89UnIobixcImh4LXJlcXVlc3RcIik7dmFyIFc9YWUobikuYm9vc3RlZDt2YXIgcT1RLmNvbmZpZy5tZXRob2RzVGhhdFVzZVVybFBhcmFtcy5pbmRleE9mKHQpPj0wO3ZhciBIPXtib29zdGVkOlcsdXNlVXJsUGFyYW1zOnEscGFyYW1ldGVyczpULHVuZmlsdGVyZWRQYXJhbWV0ZXJzOiQsaGVhZGVyczpFLHRhcmdldDp1LHZlcmI6dCxlcnJvcnM6Qyx3aXRoQ3JlZGVudGlhbHM6YS5jcmVkZW50aWFsc3x8Ty5jcmVkZW50aWFsc3x8US5jb25maWcud2l0aENyZWRlbnRpYWxzLHRpbWVvdXQ6YS50aW1lb3V0fHxPLnRpbWVvdXR8fFEuY29uZmlnLnRpbWVvdXQscGF0aDpyLHRyaWdnZXJpbmdFdmVudDppfTtpZighY2UobixcImh0bXg6Y29uZmlnUmVxdWVzdFwiLEgpKXtpZShvKTt3KCk7cmV0dXJuIGx9cj1ILnBhdGg7dD1ILnZlcmI7RT1ILmhlYWRlcnM7VD1ILnBhcmFtZXRlcnM7Qz1ILmVycm9ycztxPUgudXNlVXJsUGFyYW1zO2lmKEMmJkMubGVuZ3RoPjApe2NlKG4sXCJodG14OnZhbGlkYXRpb246aGFsdGVkXCIsSCk7aWUobyk7dygpO3JldHVybiBsfXZhciBHPXIuc3BsaXQoXCIjXCIpO3ZhciBKPUdbMF07dmFyIEw9R1sxXTt2YXIgQT1yO2lmKHEpe0E9Sjt2YXIgWj1PYmplY3Qua2V5cyhUKS5sZW5ndGghPT0wO2lmKFope2lmKEEuaW5kZXhPZihcIj9cIik8MCl7QSs9XCI/XCJ9ZWxzZXtBKz1cIiZcIn1BKz1tcihUKTtpZihMKXtBKz1cIiNcIitMfX19aWYoIWtyKG4sQSxIKSl7ZmUobixcImh0bXg6aW52YWxpZFBhdGhcIixIKTtpZShzKTtyZXR1cm4gbH1iLm9wZW4odC50b1VwcGVyQ2FzZSgpLEEsdHJ1ZSk7Yi5vdmVycmlkZU1pbWVUeXBlKFwidGV4dC9odG1sXCIpO2Iud2l0aENyZWRlbnRpYWxzPUgud2l0aENyZWRlbnRpYWxzO2IudGltZW91dD1ILnRpbWVvdXQ7aWYoTy5ub0hlYWRlcnMpe31lbHNle2Zvcih2YXIgTiBpbiBFKXtpZihFLmhhc093blByb3BlcnR5KE4pKXt2YXIgSz1FW05dO0xyKGIsTixLKX19fXZhciBJPXt4aHI6Yix0YXJnZXQ6dSxyZXF1ZXN0Q29uZmlnOkgsZXRjOmEsYm9vc3RlZDpXLHNlbGVjdDpYLHBhdGhJbmZvOntyZXF1ZXN0UGF0aDpyLGZpbmFsUmVxdWVzdFBhdGg6QSxhbmNob3I6TH19O2Iub25sb2FkPWZ1bmN0aW9uKCl7dHJ5e3ZhciBlPUlyKG4pO0kucGF0aEluZm8ucmVzcG9uc2VQYXRoPUFyKGIpO00obixJKTtscihrLFApO2NlKG4sXCJodG14OmFmdGVyUmVxdWVzdFwiLEkpO2NlKG4sXCJodG14OmFmdGVyT25Mb2FkXCIsSSk7aWYoIXNlKG4pKXt2YXIgdD1udWxsO3doaWxlKGUubGVuZ3RoPjAmJnQ9PW51bGwpe3ZhciByPWUuc2hpZnQoKTtpZihzZShyKSl7dD1yfX1pZih0KXtjZSh0LFwiaHRteDphZnRlclJlcXVlc3RcIixJKTtjZSh0LFwiaHRteDphZnRlck9uTG9hZFwiLEkpfX1pZShvKTt3KCl9Y2F0Y2goZSl7ZmUobixcImh0bXg6b25Mb2FkRXJyb3JcIixsZSh7ZXJyb3I6ZX0sSSkpO3Rocm93IGV9fTtiLm9uZXJyb3I9ZnVuY3Rpb24oKXtscihrLFApO2ZlKG4sXCJodG14OmFmdGVyUmVxdWVzdFwiLEkpO2ZlKG4sXCJodG14OnNlbmRFcnJvclwiLEkpO2llKHMpO3coKX07Yi5vbmFib3J0PWZ1bmN0aW9uKCl7bHIoayxQKTtmZShuLFwiaHRteDphZnRlclJlcXVlc3RcIixJKTtmZShuLFwiaHRteDpzZW5kQWJvcnRcIixJKTtpZShzKTt3KCl9O2Iub250aW1lb3V0PWZ1bmN0aW9uKCl7bHIoayxQKTtmZShuLFwiaHRteDphZnRlclJlcXVlc3RcIixJKTtmZShuLFwiaHRteDp0aW1lb3V0XCIsSSk7aWUocyk7dygpfTtpZighY2UobixcImh0bXg6YmVmb3JlUmVxdWVzdFwiLEkpKXtpZShvKTt3KCk7cmV0dXJuIGx9dmFyIGs9b3Iobik7dmFyIFA9c3Iobik7b2UoW1wibG9hZHN0YXJ0XCIsXCJsb2FkZW5kXCIsXCJwcm9ncmVzc1wiLFwiYWJvcnRcIl0sZnVuY3Rpb24odCl7b2UoW2IsYi51cGxvYWRdLGZ1bmN0aW9uKGUpe2UuYWRkRXZlbnRMaXN0ZW5lcih0LGZ1bmN0aW9uKGUpe2NlKG4sXCJodG14OnhocjpcIit0LHtsZW5ndGhDb21wdXRhYmxlOmUubGVuZ3RoQ29tcHV0YWJsZSxsb2FkZWQ6ZS5sb2FkZWQsdG90YWw6ZS50b3RhbH0pfSl9KX0pO2NlKG4sXCJodG14OmJlZm9yZVNlbmRcIixJKTt2YXIgWT1xP251bGw6RXIoYixuLFQpO2Iuc2VuZChZKTtyZXR1cm4gbH1mdW5jdGlvbiBQcihlLHQpe3ZhciByPXQueGhyO3ZhciBuPW51bGw7dmFyIGk9bnVsbDtpZihPKHIsL0hYLVB1c2g6L2kpKXtuPXIuZ2V0UmVzcG9uc2VIZWFkZXIoXCJIWC1QdXNoXCIpO2k9XCJwdXNoXCJ9ZWxzZSBpZihPKHIsL0hYLVB1c2gtVXJsOi9pKSl7bj1yLmdldFJlc3BvbnNlSGVhZGVyKFwiSFgtUHVzaC1VcmxcIik7aT1cInB1c2hcIn1lbHNlIGlmKE8ociwvSFgtUmVwbGFjZS1Vcmw6L2kpKXtuPXIuZ2V0UmVzcG9uc2VIZWFkZXIoXCJIWC1SZXBsYWNlLVVybFwiKTtpPVwicmVwbGFjZVwifWlmKG4pe2lmKG49PT1cImZhbHNlXCIpe3JldHVybnt9fWVsc2V7cmV0dXJue3R5cGU6aSxwYXRoOm59fX12YXIgYT10LnBhdGhJbmZvLmZpbmFsUmVxdWVzdFBhdGg7dmFyIG89dC5wYXRoSW5mby5yZXNwb25zZVBhdGg7dmFyIHM9bmUoZSxcImh4LXB1c2gtdXJsXCIpO3ZhciBsPW5lKGUsXCJoeC1yZXBsYWNlLXVybFwiKTt2YXIgdT1hZShlKS5ib29zdGVkO3ZhciBmPW51bGw7dmFyIGM9bnVsbDtpZihzKXtmPVwicHVzaFwiO2M9c31lbHNlIGlmKGwpe2Y9XCJyZXBsYWNlXCI7Yz1sfWVsc2UgaWYodSl7Zj1cInB1c2hcIjtjPW98fGF9aWYoYyl7aWYoYz09PVwiZmFsc2VcIil7cmV0dXJue319aWYoYz09PVwidHJ1ZVwiKXtjPW98fGF9aWYodC5wYXRoSW5mby5hbmNob3ImJmMuaW5kZXhPZihcIiNcIik9PT0tMSl7Yz1jK1wiI1wiK3QucGF0aEluZm8uYW5jaG9yfXJldHVybnt0eXBlOmYscGF0aDpjfX1lbHNle3JldHVybnt9fX1mdW5jdGlvbiBNcihsLHUpe3ZhciBmPXUueGhyO3ZhciBjPXUudGFyZ2V0O3ZhciBlPXUuZXRjO3ZhciB0PXUucmVxdWVzdENvbmZpZzt2YXIgaD11LnNlbGVjdDtpZighY2UobCxcImh0bXg6YmVmb3JlT25Mb2FkXCIsdSkpcmV0dXJuO2lmKE8oZiwvSFgtVHJpZ2dlcjovaSkpe19lKGYsXCJIWC1UcmlnZ2VyXCIsbCl9aWYoTyhmLC9IWC1Mb2NhdGlvbjovaSkpe2VyKCk7dmFyIHI9Zi5nZXRSZXNwb25zZUhlYWRlcihcIkhYLUxvY2F0aW9uXCIpO3ZhciB2O2lmKHIuaW5kZXhPZihcIntcIik9PT0wKXt2PUUocik7cj12W1wicGF0aFwiXTtkZWxldGUgdltcInBhdGhcIl19TnIoXCJHRVRcIixyLHYpLnRoZW4oZnVuY3Rpb24oKXt0cihyKX0pO3JldHVybn12YXIgbj1PKGYsL0hYLVJlZnJlc2g6L2kpJiZcInRydWVcIj09PWYuZ2V0UmVzcG9uc2VIZWFkZXIoXCJIWC1SZWZyZXNoXCIpO2lmKE8oZiwvSFgtUmVkaXJlY3Q6L2kpKXtsb2NhdGlvbi5ocmVmPWYuZ2V0UmVzcG9uc2VIZWFkZXIoXCJIWC1SZWRpcmVjdFwiKTtuJiZsb2NhdGlvbi5yZWxvYWQoKTtyZXR1cm59aWYobil7bG9jYXRpb24ucmVsb2FkKCk7cmV0dXJufWlmKE8oZiwvSFgtUmV0YXJnZXQ6L2kpKXtpZihmLmdldFJlc3BvbnNlSGVhZGVyKFwiSFgtUmV0YXJnZXRcIik9PT1cInRoaXNcIil7dS50YXJnZXQ9bH1lbHNle3UudGFyZ2V0PXVlKGwsZi5nZXRSZXNwb25zZUhlYWRlcihcIkhYLVJldGFyZ2V0XCIpKX19dmFyIGQ9UHIobCx1KTt2YXIgaT1mLnN0YXR1cz49MjAwJiZmLnN0YXR1czw0MDAmJmYuc3RhdHVzIT09MjA0O3ZhciBnPWYucmVzcG9uc2U7dmFyIGE9Zi5zdGF0dXM+PTQwMDt2YXIgbT1RLmNvbmZpZy5pZ25vcmVUaXRsZTt2YXIgbz1sZSh7c2hvdWxkU3dhcDppLHNlcnZlclJlc3BvbnNlOmcsaXNFcnJvcjphLGlnbm9yZVRpdGxlOm19LHUpO2lmKCFjZShjLFwiaHRteDpiZWZvcmVTd2FwXCIsbykpcmV0dXJuO2M9by50YXJnZXQ7Zz1vLnNlcnZlclJlc3BvbnNlO2E9by5pc0Vycm9yO209by5pZ25vcmVUaXRsZTt1LnRhcmdldD1jO3UuZmFpbGVkPWE7dS5zdWNjZXNzZnVsPSFhO2lmKG8uc2hvdWxkU3dhcCl7aWYoZi5zdGF0dXM9PT0yODYpe2F0KGwpfVIobCxmdW5jdGlvbihlKXtnPWUudHJhbnNmb3JtUmVzcG9uc2UoZyxmLGwpfSk7aWYoZC50eXBlKXtlcigpfXZhciBzPWUuc3dhcE92ZXJyaWRlO2lmKE8oZiwvSFgtUmVzd2FwOi9pKSl7cz1mLmdldFJlc3BvbnNlSGVhZGVyKFwiSFgtUmVzd2FwXCIpfXZhciB2PXdyKGwscyk7aWYodi5oYXNPd25Qcm9wZXJ0eShcImlnbm9yZVRpdGxlXCIpKXttPXYuaWdub3JlVGl0bGV9Yy5jbGFzc0xpc3QuYWRkKFEuY29uZmlnLnN3YXBwaW5nQ2xhc3MpO3ZhciBwPW51bGw7dmFyIHg9bnVsbDt2YXIgeT1mdW5jdGlvbigpe3RyeXt2YXIgZT1kb2N1bWVudC5hY3RpdmVFbGVtZW50O3ZhciB0PXt9O3RyeXt0PXtlbHQ6ZSxzdGFydDplP2Uuc2VsZWN0aW9uU3RhcnQ6bnVsbCxlbmQ6ZT9lLnNlbGVjdGlvbkVuZDpudWxsfX1jYXRjaChlKXt9dmFyIHI7aWYoaCl7cj1ofWlmKE8oZiwvSFgtUmVzZWxlY3Q6L2kpKXtyPWYuZ2V0UmVzcG9uc2VIZWFkZXIoXCJIWC1SZXNlbGVjdFwiKX1pZihkLnR5cGUpe2NlKHJlKCkuYm9keSxcImh0bXg6YmVmb3JlSGlzdG9yeVVwZGF0ZVwiLGxlKHtoaXN0b3J5OmR9LHUpKTtpZihkLnR5cGU9PT1cInB1c2hcIil7dHIoZC5wYXRoKTtjZShyZSgpLmJvZHksXCJodG14OnB1c2hlZEludG9IaXN0b3J5XCIse3BhdGg6ZC5wYXRofSl9ZWxzZXtycihkLnBhdGgpO2NlKHJlKCkuYm9keSxcImh0bXg6cmVwbGFjZWRJbkhpc3RvcnlcIix7cGF0aDpkLnBhdGh9KX19dmFyIG49VChjKTtqZSh2LnN3YXBTdHlsZSxjLGwsZyxuLHIpO2lmKHQuZWx0JiYhc2UodC5lbHQpJiZlZSh0LmVsdCxcImlkXCIpKXt2YXIgaT1kb2N1bWVudC5nZXRFbGVtZW50QnlJZChlZSh0LmVsdCxcImlkXCIpKTt2YXIgYT17cHJldmVudFNjcm9sbDp2LmZvY3VzU2Nyb2xsIT09dW5kZWZpbmVkPyF2LmZvY3VzU2Nyb2xsOiFRLmNvbmZpZy5kZWZhdWx0Rm9jdXNTY3JvbGx9O2lmKGkpe2lmKHQuc3RhcnQmJmkuc2V0U2VsZWN0aW9uUmFuZ2Upe3RyeXtpLnNldFNlbGVjdGlvblJhbmdlKHQuc3RhcnQsdC5lbmQpfWNhdGNoKGUpe319aS5mb2N1cyhhKX19Yy5jbGFzc0xpc3QucmVtb3ZlKFEuY29uZmlnLnN3YXBwaW5nQ2xhc3MpO29lKG4uZWx0cyxmdW5jdGlvbihlKXtpZihlLmNsYXNzTGlzdCl7ZS5jbGFzc0xpc3QuYWRkKFEuY29uZmlnLnNldHRsaW5nQ2xhc3MpfWNlKGUsXCJodG14OmFmdGVyU3dhcFwiLHUpfSk7aWYoTyhmLC9IWC1UcmlnZ2VyLUFmdGVyLVN3YXA6L2kpKXt2YXIgbz1sO2lmKCFzZShsKSl7bz1yZSgpLmJvZHl9X2UoZixcIkhYLVRyaWdnZXItQWZ0ZXItU3dhcFwiLG8pfXZhciBzPWZ1bmN0aW9uKCl7b2Uobi50YXNrcyxmdW5jdGlvbihlKXtlLmNhbGwoKX0pO29lKG4uZWx0cyxmdW5jdGlvbihlKXtpZihlLmNsYXNzTGlzdCl7ZS5jbGFzc0xpc3QucmVtb3ZlKFEuY29uZmlnLnNldHRsaW5nQ2xhc3MpfWNlKGUsXCJodG14OmFmdGVyU2V0dGxlXCIsdSl9KTtpZih1LnBhdGhJbmZvLmFuY2hvcil7dmFyIGU9cmUoKS5nZXRFbGVtZW50QnlJZCh1LnBhdGhJbmZvLmFuY2hvcik7aWYoZSl7ZS5zY3JvbGxJbnRvVmlldyh7YmxvY2s6XCJzdGFydFwiLGJlaGF2aW9yOlwiYXV0b1wifSl9fWlmKG4udGl0bGUmJiFtKXt2YXIgdD1DKFwidGl0bGVcIik7aWYodCl7dC5pbm5lckhUTUw9bi50aXRsZX1lbHNle3dpbmRvdy5kb2N1bWVudC50aXRsZT1uLnRpdGxlfX1DcihuLmVsdHMsdik7aWYoTyhmLC9IWC1UcmlnZ2VyLUFmdGVyLVNldHRsZTovaSkpe3ZhciByPWw7aWYoIXNlKGwpKXtyPXJlKCkuYm9keX1fZShmLFwiSFgtVHJpZ2dlci1BZnRlci1TZXR0bGVcIixyKX1pZShwKX07aWYodi5zZXR0bGVEZWxheT4wKXtzZXRUaW1lb3V0KHMsdi5zZXR0bGVEZWxheSl9ZWxzZXtzKCl9fWNhdGNoKGUpe2ZlKGwsXCJodG14OnN3YXBFcnJvclwiLHUpO2llKHgpO3Rocm93IGV9fTt2YXIgYj1RLmNvbmZpZy5nbG9iYWxWaWV3VHJhbnNpdGlvbnM7aWYodi5oYXNPd25Qcm9wZXJ0eShcInRyYW5zaXRpb25cIikpe2I9di50cmFuc2l0aW9ufWlmKGImJmNlKGwsXCJodG14OmJlZm9yZVRyYW5zaXRpb25cIix1KSYmdHlwZW9mIFByb21pc2UhPT1cInVuZGVmaW5lZFwiJiZkb2N1bWVudC5zdGFydFZpZXdUcmFuc2l0aW9uKXt2YXIgdz1uZXcgUHJvbWlzZShmdW5jdGlvbihlLHQpe3A9ZTt4PXR9KTt2YXIgUz15O3k9ZnVuY3Rpb24oKXtkb2N1bWVudC5zdGFydFZpZXdUcmFuc2l0aW9uKGZ1bmN0aW9uKCl7UygpO3JldHVybiB3fSl9fWlmKHYuc3dhcERlbGF5PjApe3NldFRpbWVvdXQoeSx2LnN3YXBEZWxheSl9ZWxzZXt5KCl9fWlmKGEpe2ZlKGwsXCJodG14OnJlc3BvbnNlRXJyb3JcIixsZSh7ZXJyb3I6XCJSZXNwb25zZSBTdGF0dXMgRXJyb3IgQ29kZSBcIitmLnN0YXR1cytcIiBmcm9tIFwiK3UucGF0aEluZm8ucmVxdWVzdFBhdGh9LHUpKX19dmFyIFhyPXt9O2Z1bmN0aW9uIERyKCl7cmV0dXJue2luaXQ6ZnVuY3Rpb24oZSl7cmV0dXJuIG51bGx9LG9uRXZlbnQ6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gdHJ1ZX0sdHJhbnNmb3JtUmVzcG9uc2U6ZnVuY3Rpb24oZSx0LHIpe3JldHVybiBlfSxpc0lubGluZVN3YXA6ZnVuY3Rpb24oZSl7cmV0dXJuIGZhbHNlfSxoYW5kbGVTd2FwOmZ1bmN0aW9uKGUsdCxyLG4pe3JldHVybiBmYWxzZX0sZW5jb2RlUGFyYW1ldGVyczpmdW5jdGlvbihlLHQscil7cmV0dXJuIG51bGx9fX1mdW5jdGlvbiBVcihlLHQpe2lmKHQuaW5pdCl7dC5pbml0KHIpfVhyW2VdPWxlKERyKCksdCl9ZnVuY3Rpb24gQnIoZSl7ZGVsZXRlIFhyW2VdfWZ1bmN0aW9uIEZyKGUscixuKXtpZihlPT11bmRlZmluZWQpe3JldHVybiByfWlmKHI9PXVuZGVmaW5lZCl7cj1bXX1pZihuPT11bmRlZmluZWQpe249W119dmFyIHQ9dGUoZSxcImh4LWV4dFwiKTtpZih0KXtvZSh0LnNwbGl0KFwiLFwiKSxmdW5jdGlvbihlKXtlPWUucmVwbGFjZSgvIC9nLFwiXCIpO2lmKGUuc2xpY2UoMCw3KT09XCJpZ25vcmU6XCIpe24ucHVzaChlLnNsaWNlKDcpKTtyZXR1cm59aWYobi5pbmRleE9mKGUpPDApe3ZhciB0PVhyW2VdO2lmKHQmJnIuaW5kZXhPZih0KTwwKXtyLnB1c2godCl9fX0pfXJldHVybiBGcih1KGUpLHIsbil9dmFyIFZyPWZhbHNlO3JlKCkuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIixmdW5jdGlvbigpe1ZyPXRydWV9KTtmdW5jdGlvbiBqcihlKXtpZihWcnx8cmUoKS5yZWFkeVN0YXRlPT09XCJjb21wbGV0ZVwiKXtlKCl9ZWxzZXtyZSgpLmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsZSl9fWZ1bmN0aW9uIF9yKCl7aWYoUS5jb25maWcuaW5jbHVkZUluZGljYXRvclN0eWxlcyE9PWZhbHNlKXtyZSgpLmhlYWQuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYmVmb3JlZW5kXCIsXCI8c3R5bGU+ICAgICAgICAgICAgICAgICAgICAgIC5cIitRLmNvbmZpZy5pbmRpY2F0b3JDbGFzcytcIntvcGFjaXR5OjB9ICAgICAgICAgICAgICAgICAgICAgIC5cIitRLmNvbmZpZy5yZXF1ZXN0Q2xhc3MrXCIgLlwiK1EuY29uZmlnLmluZGljYXRvckNsYXNzK1wie29wYWNpdHk6MTsgdHJhbnNpdGlvbjogb3BhY2l0eSAyMDBtcyBlYXNlLWluO30gICAgICAgICAgICAgICAgICAgICAgLlwiK1EuY29uZmlnLnJlcXVlc3RDbGFzcytcIi5cIitRLmNvbmZpZy5pbmRpY2F0b3JDbGFzcytcIntvcGFjaXR5OjE7IHRyYW5zaXRpb246IG9wYWNpdHkgMjAwbXMgZWFzZS1pbjt9ICAgICAgICAgICAgICAgICAgICA8L3N0eWxlPlwiKX19ZnVuY3Rpb24genIoKXt2YXIgZT1yZSgpLnF1ZXJ5U2VsZWN0b3IoJ21ldGFbbmFtZT1cImh0bXgtY29uZmlnXCJdJyk7aWYoZSl7cmV0dXJuIEUoZS5jb250ZW50KX1lbHNle3JldHVybiBudWxsfX1mdW5jdGlvbiAkcigpe3ZhciBlPXpyKCk7aWYoZSl7US5jb25maWc9bGUoUS5jb25maWcsZSl9fWpyKGZ1bmN0aW9uKCl7JHIoKTtfcigpO3ZhciBlPXJlKCkuYm9keTt6dChlKTt2YXIgdD1yZSgpLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbaHgtdHJpZ2dlcj0ncmVzdG9yZWQnXSxbZGF0YS1oeC10cmlnZ2VyPSdyZXN0b3JlZCddXCIpO2UuYWRkRXZlbnRMaXN0ZW5lcihcImh0bXg6YWJvcnRcIixmdW5jdGlvbihlKXt2YXIgdD1lLnRhcmdldDt2YXIgcj1hZSh0KTtpZihyJiZyLnhocil7ci54aHIuYWJvcnQoKX19KTtjb25zdCByPXdpbmRvdy5vbnBvcHN0YXRlP3dpbmRvdy5vbnBvcHN0YXRlLmJpbmQod2luZG93KTpudWxsO3dpbmRvdy5vbnBvcHN0YXRlPWZ1bmN0aW9uKGUpe2lmKGUuc3RhdGUmJmUuc3RhdGUuaHRteCl7YXIoKTtvZSh0LGZ1bmN0aW9uKGUpe2NlKGUsXCJodG14OnJlc3RvcmVkXCIse2RvY3VtZW50OnJlKCksdHJpZ2dlckV2ZW50OmNlfSl9KX1lbHNle2lmKHIpe3IoZSl9fX07c2V0VGltZW91dChmdW5jdGlvbigpe2NlKGUsXCJodG14OmxvYWRcIix7fSk7ZT1udWxsfSwwKX0pO3JldHVybiBRfSgpfSk7IiwgImltcG9ydCBIdG14IGZyb20gXCJodG14Lm9yZ1wiO1xuaW1wb3J0IHsganNvbkVuYyB9IGZyb20gXCIuL2h0bXgtZXh0ZW5kXCI7XG5cbndpbmRvdy5IdG14ID0gSHRteDtcbkh0bXguZGVmaW5lRXh0ZW5zaW9uKFwianNvbi1lbmNcIiwganNvbkVuYyk7IiwgImV4cG9ydCBjb25zdCBqc29uRW5jID0ge1xuICBvbkV2ZW50OiBmdW5jdGlvbiAobmFtZSwgZXZ0KSB7XG4gICAgaWYgKG5hbWUgPT09IFwiaHRteDpjb25maWdSZXF1ZXN0XCIpIHtcbiAgICAgIGV2dC5kZXRhaWwuaGVhZGVyc1tcIkNvbnRlbnQtVHlwZVwiXSA9IFwiYXBwbGljYXRpb24vanNvblwiO1xuICAgIH1cbiAgfSxcbiAgZW5jb2RlUGFyYW1ldGVyczogZnVuY3Rpb24gKHhociwgcGFyYW1ldGVycywgZWx0KSB7XG4gICAgeGhyLm92ZXJyaWRlTWltZVR5cGUoXCJ0ZXh0L2pzb25cIik7XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHBhcmFtZXRlcnMpO1xuICB9LFxufTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUEsT0FBQyxTQUFTQSxJQUFFQyxJQUFFO0FBQUMsWUFBRyxPQUFPLFdBQVMsY0FBWSxPQUFPLEtBQUk7QUFBQyxpQkFBTyxDQUFDLEdBQUVBLEVBQUM7QUFBQSxRQUFDLFdBQVMsT0FBTyxXQUFTLFlBQVUsT0FBTyxTQUFRO0FBQUMsaUJBQU8sVUFBUUEsR0FBRTtBQUFBLFFBQUMsT0FBSztBQUFDLFVBQUFELEdBQUUsT0FBS0EsR0FBRSxRQUFNQyxHQUFFO0FBQUEsUUFBQztBQUFBLE1BQUMsR0FBRyxPQUFPLFNBQU8sY0FBWSxPQUFLLFNBQUssV0FBVTtBQUFDLGVBQU8sV0FBVTtBQUFDO0FBQWEsY0FBSSxJQUFFLEVBQUMsUUFBTyxHQUFFLFNBQVEsSUFBRyxJQUFHLElBQUcsS0FBSSxJQUFHLFNBQVEsSUFBRyxNQUFLLElBQUcsTUFBSyxHQUFFLFNBQVEsR0FBRSxTQUFRLEdBQUUsUUFBTyxTQUFTRCxJQUFFQyxJQUFFO0FBQUMsZ0JBQUlDLEtBQUUsR0FBR0YsSUFBRUMsTUFBRyxNQUFNO0FBQUUsbUJBQU9DLEdBQUU7QUFBQSxVQUFNLEdBQUUsUUFBTyxHQUFFLFVBQVMsR0FBRSxhQUFZLEdBQUUsYUFBWSxHQUFFLFdBQVUsR0FBRSxpQkFBZ0IsSUFBRyxpQkFBZ0IsSUFBRyxRQUFPLEdBQUUsU0FBUSxHQUFFLFFBQU8sTUFBSyxRQUFPLEVBQUMsZ0JBQWUsTUFBSyxrQkFBaUIsSUFBRyxzQkFBcUIsT0FBTSxr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QUU7QUFBQyxnQkFBSUMsS0FBRUQsR0FBRSxLQUFLO0FBQUUsZ0JBQUcsRUFBRUMsSUFBRSxHQUFHLEtBQUcsRUFBRUEsSUFBRSxJQUFJLEdBQUU7QUFBQyxxQkFBT0EsR0FBRSxVQUFVLEdBQUVBLEdBQUUsU0FBTyxDQUFDO0FBQUEsWUFBQyxPQUFLO0FBQUMscUJBQU9BO0FBQUEsWUFBQztBQUFBLFVBQUM7QUFBQyxtQkFBUyxFQUFFRCxJQUFFQyxJQUFFO0FBQUMsZ0JBQUdBLEdBQUUsUUFBUSxVQUFVLE1BQUksR0FBRTtBQUFDLHFCQUFNLENBQUMsRUFBRUQsSUFBRSxFQUFFQyxHQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUFBLFlBQUMsV0FBU0EsR0FBRSxRQUFRLE9BQU8sTUFBSSxHQUFFO0FBQUMscUJBQU0sQ0FBQyxFQUFFRCxJQUFFLEVBQUVDLEdBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQUEsWUFBQyxXQUFTQSxPQUFJLFFBQU87QUFBQyxxQkFBTSxDQUFDRCxHQUFFLGtCQUFrQjtBQUFBLFlBQUMsV0FBU0MsR0FBRSxRQUFRLE9BQU8sTUFBSSxHQUFFO0FBQUMscUJBQU0sQ0FBQyxFQUFFRCxJQUFFLEVBQUVDLEdBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQUEsWUFBQyxXQUFTQSxPQUFJLFlBQVc7QUFBQyxxQkFBTSxDQUFDRCxHQUFFLHNCQUFzQjtBQUFBLFlBQUMsV0FBU0MsR0FBRSxRQUFRLFdBQVcsTUFBSSxHQUFFO0FBQUMscUJBQU0sQ0FBQyxFQUFFRCxJQUFFLEVBQUVDLEdBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQUEsWUFBQyxXQUFTQSxPQUFJLFlBQVc7QUFBQyxxQkFBTSxDQUFDLFFBQVE7QUFBQSxZQUFDLFdBQVNBLE9BQUksVUFBUztBQUFDLHFCQUFNLENBQUMsTUFBTTtBQUFBLFlBQUMsV0FBU0EsT0FBSSxRQUFPO0FBQUMscUJBQU0sQ0FBQyxTQUFTLElBQUk7QUFBQSxZQUFDLE9BQUs7QUFBQyxxQkFBTyxHQUFH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QUMsQ0FBQztBQUFFLGtCQUFNQSxLQUFFLE9BQU8sYUFBVyxPQUFPLFdBQVcsS0FBSyxNQUFNLElBQUU7QUFBSyxtQkFBTyxhQUFXLFNBQVNGLElBQUU7QUFBQyxrQkFBR0EsR0FBRSxTQUFPQSxHQUFFLE1BQU0sTUFBSztBQUFDLG1CQUFHO0FBQUUsbUJBQUdDLElBQUUsU0FBU0QsSUFBRTtBQUFDLHFCQUFHQSxJQUFFLGlCQUFnQixFQUFDLFVBQVMsR0FBRyxHQUFFLGNBQWEsR0FBRSxDQUFDO0FBQUEsZ0JBQUMsQ0FBQztBQUFBLGNBQUMsT0FBSztBQUFDLG9CQUFHRSxJQUFFO0FBQUMsa0JBQUFBLEdBQUVGLEVBQUM7QUFBQSxnQkFBQztBQUFBLGNBQUM7QUFBQSxZQUFDO0FBQUUsdUJBQVcsV0FBVTtBQUFDLGlCQUFHQSxJQUFFLGFBQVksQ0FBQyxDQUFDO0FBQUUsY0FBQUEsS0FBRTtBQUFBLFlBQUksR0FBRSxDQUFDO0FBQUEsVUFBQyxDQUFDO0FBQUUsaUJBQU87QUFBQSxRQUFDLEVBQUU7QUFBQSxNQUFDLENBQUM7QUFBQTtBQUFBOzs7QUNBem85QyxvQkFBaUI7OztBQ0FWLE1BQU0sVUFBVTtBQUFBLElBQ3JCLFNBQVMsU0FBVSxNQUFNLEtBQUs7QUFDNUIsVUFBSSxTQUFTLHNCQUFzQjtBQUNqQyxZQUFJLE9BQU8sUUFBUSxjQUFjLElBQUk7QUFBQSxNQUN2QztBQUFBLElBQ0Y7QUFBQSxJQUNBLGtCQUFrQixTQUFVLEtBQUssWUFBWSxLQUFLO0FBQ2hELFVBQUksaUJBQWlCLFdBQVc7QUFDaEMsYUFBTyxLQUFLLFVBQVUsVUFBVTtBQUFBLElBQ2xDO0FBQUEsRUFDRjs7O0FEUEEsU0FBTyxPQUFPLFlBQUFxRDtBQUNkLGNBQUFBLFFBQUssZ0JBQWdCLFlBQVksT0FBTzsiLAogICJuYW1lcyI6IFsiZSIsICJ0IiwgInIiLCAibiIsICJpIiwgImEiLCAibyIsICJzIiwgImwiLCAidSIsICJmIiwgImMiLCAiaCIsICJ2IiwgIk0iLCAiWCIsICJkIiwgIkQiLCAiVSIsICJnIiwgIm0iLCAicCIsICJ4IiwgIkIiLCAiRiIsICJWIiwgInkiLCAiYiIsICJ3IiwgImoiLCAiUyIsICJFIiwgIl8iLCAiQyIsICJSIiwgInoiLCAiJCIsICJUIiwgIk8iLCAiVyIsICJxIiwgIkgiLCAiRyIsICJKIiwgIkwiLCAiQSIsICJaIiwgIk4iLCAiSyIsICJJIiwgImsiLCAiUCIsICJZIiwgIkh0bXgiXQp9Cg==
