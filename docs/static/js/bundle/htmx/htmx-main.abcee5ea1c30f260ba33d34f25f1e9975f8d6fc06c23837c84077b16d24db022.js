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
          }, version: "1.9.12" };
          var r = { addTriggerHandler: Lt, bodyContains: se, canAccessLocalStorage: U, findThisElement: xe, filterValues: yr, hasAttribute: o, getAttributeValue: te, getClosestAttributeValue: ne, getClosestMatch: c, getExpressionVars: Hr, getHeaders: xr, getInputValues: dr, getInternalData: ae, getSwapSpecification: wr, getTriggerSpecs: it, getTarget: ye, makeFragment: l, mergeObjects: le, makeSettleInfo: T, oobSwap: Ee, querySelectorExt: ue, selectAndSwap: je, settleImmediately: nr, shouldCancel: ut, triggerEvent: ce, triggerErrorEvent: fe, withExtensions: R };
          var w = ["get", "post", "put", "delete", "patch"];
          var i = w.map(function(e2) {
            return "[hx-" + e2 + "], [data-hx-" + e2 + "]";
          }).join(", ");
          var S = e("head"), q = e("title"), H = e("svg", true);
          function e(e2, t2) {
            return new RegExp("<" + e2 + "(\\s[^>]*>|>)([\\s\\S]*?)<\\/" + e2 + ">", !!t2 ? "gim" : "im");
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
          function s(e2, t2) {
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
              var i2 = s("<body><template>" + n2 + "</template></body>", 0);
              var a2 = i2.querySelector("template").content;
              if (Q.config.allowScriptTags) {
                oe(a2.querySelectorAll("script"), function(e3) {
                  if (Q.config.inlineScriptNonce) {
                    e3.nonce = Q.config.inlineScriptNonce;
                  }
                  e3.htmxExecuted = navigator.userAgent.indexOf("Firefox") === -1;
                });
              } else {
                oe(a2.querySelectorAll("script"), function(e3) {
                  _(e3);
                });
              }
              return a2;
            }
            switch (r2) {
              case "thead":
              case "tbody":
              case "tfoot":
              case "colgroup":
              case "caption":
                return s("<table>" + n2 + "</table>", 1);
              case "col":
                return s("<table><colgroup>" + n2 + "</colgroup></table>", 2);
              case "tr":
                return s("<table><tbody>" + n2 + "</tbody></table>", 2);
              case "td":
              case "th":
                return s("<table><tbody><tr>" + n2 + "</tr></tbody></table>", 3);
              case "script":
              case "style":
                return s("<div>" + n2 + "</div>", 1);
              default:
                return s(n2, 0);
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
            e2 = p(e2);
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
            e2 = p(e2);
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
            e2 = p(e2);
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
            e2 = p(e2);
            e2.classList.toggle(t2);
          }
          function W(e2, t2) {
            e2 = p(e2);
            oe(e2.parentElement.children, function(e3) {
              n(e3, t2);
            });
            z(e2, t2);
          }
          function v(e2, t2) {
            e2 = p(e2);
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
          function g(e2, t2) {
            return e2.substring(0, t2.length) === t2;
          }
          function G(e2, t2) {
            return e2.substring(e2.length - t2.length) === t2;
          }
          function J(e2) {
            var t2 = e2.trim();
            if (g(t2, "<") && G(t2, "/>")) {
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
          function p(e2) {
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
              return { target: p(e2), event: t2, listener: r2 };
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
          var pe = re().createElement("output");
          function me(e2, t2) {
            var r2 = ne(e2, t2);
            if (r2) {
              if (r2 === "this") {
                return [xe(e2, t2)];
              } else {
                var n2 = Z(e2, r2);
                if (n2.length === 0) {
                  b('The selector "' + r2 + '" on ' + t2 + " returned no matches!");
                  return [pe];
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
                if (!ce(e3, "htmx:oobBeforeSwap", n2)) return;
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
          function a(e2, t2, r2, n2) {
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
          function m(e2) {
            ce(e2, "htmx:beforeCleanupElement");
            Ne(e2);
            if (e2.children) {
              oe(e2.children, function(e3) {
                m(e3);
              });
            }
          }
          function Ie(t2, e2, r2) {
            if (t2.tagName === "BODY") {
              return Ue(t2, e2, r2);
            } else {
              var n2;
              var i2 = t2.previousSibling;
              a(u(t2), t2, e2, r2);
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
              m(t2);
              u(t2).removeChild(t2);
            }
          }
          function ke(e2, t2, r2) {
            return a(e2, e2.firstChild, t2, r2);
          }
          function Pe(e2, t2, r2) {
            return a(u(e2), e2, t2, r2);
          }
          function Me(e2, t2, r2) {
            return a(e2, null, t2, r2);
          }
          function Xe(e2, t2, r2) {
            return a(u(e2), e2.nextSibling, t2, r2);
          }
          function De(e2, t2, r2) {
            m(e2);
            return u(e2).removeChild(e2);
          }
          function Ue(e2, t2, r2) {
            var n2 = e2.firstChild;
            a(e2, n2, t2, r2);
            if (n2) {
              while (n2.nextSibling) {
                m(n2.nextSibling);
                e2.removeChild(n2.nextSibling);
              }
              m(n2);
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
                    m(e4);
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
                    pt(e2);
                  });
                }
              }, 200);
            }
          }
          function pt(t2) {
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
          function mt(e2, t2, r2) {
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
                      m(e4);
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
              pt(n2);
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
            if (!e2.htmxExecuted && Q.config.allowScriptTags && (e2.type === "text/javascript" || e2.type === "module" || e2.type === "")) {
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
            if (!t2) {
              return false;
            }
            for (var r2 = 0; r2 < t2.length; r2++) {
              var n2 = t2[r2].name;
              if (g(n2, "hx-on:") || g(n2, "data-hx-on:") || g(n2, "hx-on-") || g(n2, "data-hx-on-")) {
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
              while (t2 = n2.iterateNext()) r2.push(t2);
            } else if (typeof e2.getElementsByTagName === "function") {
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
            var r2 = p("#" + ee(t2, "form")) || v(t2, "form");
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
              if (g(r2, "hx-on") || g(r2, "data-hx-on")) {
                var i2 = r2.indexOf("-on") + 3;
                var a2 = r2.slice(i2, i2 + 1);
                if (a2 === "-" || a2 === ":") {
                  var o2 = r2.slice(i2 + 1);
                  if (g(o2, ":")) {
                    o2 = "htmx" + o2;
                  } else if (g(o2, "-")) {
                    o2 = "htmx:" + o2.slice(1);
                  } else if (g(o2, "htmx-")) {
                    o2 = "htmx:" + o2.slice(5);
                  }
                  Ft(e2, o2, n2);
                }
              }
            }
          }
          function _t(t2) {
            if (v(t2, Q.config.disableSelector)) {
              m(t2);
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
                mt(t2, r2, a2);
              }
              ce(t2, "htmx:afterProcessNode");
            }
          }
          function zt(e2) {
            e2 = p(e2);
            if (v(e2, Q.config.disableSelector)) {
              m(e2);
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
            e2 = p(e2);
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
            if (Q.config.historyEnabled) history.replaceState({ htmx: true }, re().title, window.location.href);
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
            if (Q.config.historyEnabled) history.replaceState({ htmx: true }, "", e2);
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
            var t2 = me(e2, "hx-indicator");
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
            var t2 = me(e2, "hx-disabled-elt");
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
            var f2 = me(e2, "hx-include");
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
          function pr(e2) {
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
          function mr(e2) {
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
                return mr(n2);
              } else {
                return pr(n2);
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
                return he(e2, t2, null, null, { targetOverride: p(r2), returnPromise: true });
              } else {
                return he(e2, t2, p(r2.source), r2.event, { handler: r2.handler, headers: r2.headers, values: r2.values, targetOverride: p(r2.target), swapOverride: r2.swap, select: r2.select, returnPromise: true });
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
              n2 = g(t2, document.location.origin);
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
            if (u2 == null || u2 == pe) {
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
            var p2 = ne(n2, "hx-sync");
            var m2 = null;
            var x2 = false;
            if (p2) {
              var B2 = p2.split(":");
              var F2 = B2[0].trim();
              if (F2 === "this") {
                g2 = xe(n2, "hx-sync");
              } else {
                g2 = ue(n2, F2);
              }
              p2 = (B2[1] || "drop").trim();
              f2 = ae(g2);
              if (p2 === "drop" && f2.xhr && f2.abortable !== true) {
                ie(o2);
                return l2;
              } else if (p2 === "abort") {
                if (f2.xhr) {
                  ie(o2);
                  return l2;
                } else {
                  x2 = true;
                }
              } else if (p2 === "replace") {
                ce(g2, "htmx:abort");
              } else if (p2.indexOf("queue") === 0) {
                var V2 = p2.split(" ");
                m2 = (V2[1] || "last").trim();
              }
            }
            if (f2.xhr) {
              if (f2.abortable) {
                ce(g2, "htmx:abort");
              } else {
                if (m2 == null) {
                  if (i2) {
                    var y2 = ae(i2);
                    if (y2 && y2.triggerSpec && y2.triggerSpec.queue) {
                      m2 = y2.triggerSpec.queue;
                    }
                  }
                  if (m2 == null) {
                    m2 = "last";
                  }
                }
                if (f2.queuedRequests == null) {
                  f2.queuedRequests = [];
                }
                if (m2 === "first" && f2.queuedRequests.length === 0) {
                  f2.queuedRequests.push(function() {
                    he(t2, r2, n2, i2, a2);
                  });
                } else if (m2 === "all") {
                  f2.queuedRequests.push(function() {
                    he(t2, r2, n2, i2, a2);
                  });
                } else if (m2 === "last") {
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
                A2 += pr(T2);
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
            if (!ce(l2, "htmx:beforeOnLoad", u2)) return;
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
            var p2 = Q.config.ignoreTitle;
            var o2 = le({ shouldSwap: i2, serverResponse: g2, isError: a2, ignoreTitle: p2 }, u2);
            if (!ce(c2, "htmx:beforeSwap", o2)) return;
            c2 = o2.target;
            g2 = o2.serverResponse;
            a2 = o2.isError;
            p2 = o2.ignoreTitle;
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
                p2 = v2.ignoreTitle;
              }
              c2.classList.add(Q.config.swappingClass);
              var m2 = null;
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
                    if (n3.title && !p2) {
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
                    ie(m2);
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
                  m2 = e3;
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2h0bXgub3JnL2Rpc3QvaHRteC5taW4uanMiLCAiLi4vLi4vaHRteC9odG14LW1haW4uanMiLCAiLi4vLi4vaHRteC9odG14LWV4dGVuZC5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiKGZ1bmN0aW9uKGUsdCl7aWYodHlwZW9mIGRlZmluZT09PVwiZnVuY3Rpb25cIiYmZGVmaW5lLmFtZCl7ZGVmaW5lKFtdLHQpfWVsc2UgaWYodHlwZW9mIG1vZHVsZT09PVwib2JqZWN0XCImJm1vZHVsZS5leHBvcnRzKXttb2R1bGUuZXhwb3J0cz10KCl9ZWxzZXtlLmh0bXg9ZS5odG14fHx0KCl9fSkodHlwZW9mIHNlbGYhPT1cInVuZGVmaW5lZFwiP3NlbGY6dGhpcyxmdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO3ZhciBRPXtvbkxvYWQ6Rixwcm9jZXNzOnp0LG9uOmRlLG9mZjpnZSx0cmlnZ2VyOmNlLGFqYXg6TnIsZmluZDpDLGZpbmRBbGw6ZixjbG9zZXN0OnYsdmFsdWVzOmZ1bmN0aW9uKGUsdCl7dmFyIHI9ZHIoZSx0fHxcInBvc3RcIik7cmV0dXJuIHIudmFsdWVzfSxyZW1vdmU6XyxhZGRDbGFzczp6LHJlbW92ZUNsYXNzOm4sdG9nZ2xlQ2xhc3M6JCx0YWtlQ2xhc3M6VyxkZWZpbmVFeHRlbnNpb246VXIscmVtb3ZlRXh0ZW5zaW9uOkJyLGxvZ0FsbDpWLGxvZ05vbmU6aixsb2dnZXI6bnVsbCxjb25maWc6e2hpc3RvcnlFbmFibGVkOnRydWUsaGlzdG9yeUNhY2hlU2l6ZToxMCxyZWZyZXNoT25IaXN0b3J5TWlzczpmYWxzZSxkZWZhdWx0U3dhcFN0eWxlOlwiaW5uZXJIVE1MXCIsZGVmYXVsdFN3YXBEZWxheTowLGRlZmF1bHRTZXR0bGVEZWxheToyMCxpbmNsdWRlSW5kaWNhdG9yU3R5bGVzOnRydWUsaW5kaWNhdG9yQ2xhc3M6XCJodG14LWluZGljYXRvclwiLHJlcXVlc3RDbGFzczpcImh0bXgtcmVxdWVzdFwiLGFkZGVkQ2xhc3M6XCJodG14LWFkZGVkXCIsc2V0dGxpbmdDbGFzczpcImh0bXgtc2V0dGxpbmdcIixzd2FwcGluZ0NsYXNzOlwiaHRteC1zd2FwcGluZ1wiLGFsbG93RXZhbDp0cnVlLGFsbG93U2NyaXB0VGFnczp0cnVlLGlubGluZVNjcmlwdE5vbmNlOlwiXCIsYXR0cmlidXRlc1RvU2V0dGxlOltcImNsYXNzXCIsXCJzdHlsZVwiLFwid2lkdGhcIixcImhlaWdodFwiXSx3aXRoQ3JlZGVudGlhbHM6ZmFsc2UsdGltZW91dDowLHdzUmVjb25uZWN0RGVsYXk6XCJmdWxsLWppdHRlclwiLHdzQmluYXJ5VHlwZTpcImJsb2JcIixkaXNhYmxlU2VsZWN0b3I6XCJbaHgtZGlzYWJsZV0sIFtkYXRhLWh4LWRpc2FibGVdXCIsdXNlVGVtcGxhdGVGcmFnbWVudHM6ZmFsc2Usc2Nyb2xsQmVoYXZpb3I6XCJzbW9vdGhcIixkZWZhdWx0Rm9jdXNTY3JvbGw6ZmFsc2UsZ2V0Q2FjaGVCdXN0ZXJQYXJhbTpmYWxzZSxnbG9iYWxWaWV3VHJhbnNpdGlvbnM6ZmFsc2UsbWV0aG9kc1RoYXRVc2VVcmxQYXJhbXM6W1wiZ2V0XCJdLHNlbGZSZXF1ZXN0c09ubHk6ZmFsc2UsaWdub3JlVGl0bGU6ZmFsc2Usc2Nyb2xsSW50b1ZpZXdPbkJvb3N0OnRydWUsdHJpZ2dlclNwZWNzQ2FjaGU6bnVsbH0scGFyc2VJbnRlcnZhbDpkLF86dCxjcmVhdGVFdmVudFNvdXJjZTpmdW5jdGlvbihlKXtyZXR1cm4gbmV3IEV2ZW50U291cmNlKGUse3dpdGhDcmVkZW50aWFsczp0cnVlfSl9LGNyZWF0ZVdlYlNvY2tldDpmdW5jdGlvbihlKXt2YXIgdD1uZXcgV2ViU29ja2V0KGUsW10pO3QuYmluYXJ5VHlwZT1RLmNvbmZpZy53c0JpbmFyeVR5cGU7cmV0dXJuIHR9LHZlcnNpb246XCIxLjkuMTJcIn07dmFyIHI9e2FkZFRyaWdnZXJIYW5kbGVyOkx0LGJvZHlDb250YWluczpzZSxjYW5BY2Nlc3NMb2NhbFN0b3JhZ2U6VSxmaW5kVGhpc0VsZW1lbnQ6eGUsZmlsdGVyVmFsdWVzOnlyLGhhc0F0dHJpYnV0ZTpvLGdldEF0dHJpYnV0ZVZhbHVlOnRlLGdldENsb3Nlc3RBdHRyaWJ1dGVWYWx1ZTpuZSxnZXRDbG9zZXN0TWF0Y2g6YyxnZXRFeHByZXNzaW9uVmFyczpIcixnZXRIZWFkZXJzOnhyLGdldElucHV0VmFsdWVzOmRyLGdldEludGVybmFsRGF0YTphZSxnZXRTd2FwU3BlY2lmaWNhdGlvbjp3cixnZXRUcmlnZ2VyU3BlY3M6aXQsZ2V0VGFyZ2V0OnllLG1ha2VGcmFnbWVudDpsLG1lcmdlT2JqZWN0czpsZSxtYWtlU2V0dGxlSW5mbzpULG9vYlN3YXA6RWUscXVlcnlTZWxlY3RvckV4dDp1ZSxzZWxlY3RBbmRTd2FwOmplLHNldHRsZUltbWVkaWF0ZWx5Om5yLHNob3VsZENhbmNlbDp1dCx0cmlnZ2VyRXZlbnQ6Y2UsdHJpZ2dlckVycm9yRXZlbnQ6ZmUsd2l0aEV4dGVuc2lvbnM6Un07dmFyIHc9W1wiZ2V0XCIsXCJwb3N0XCIsXCJwdXRcIixcImRlbGV0ZVwiLFwicGF0Y2hcIl07dmFyIGk9dy5tYXAoZnVuY3Rpb24oZSl7cmV0dXJuXCJbaHgtXCIrZStcIl0sIFtkYXRhLWh4LVwiK2UrXCJdXCJ9KS5qb2luKFwiLCBcIik7dmFyIFM9ZShcImhlYWRcIikscT1lKFwidGl0bGVcIiksSD1lKFwic3ZnXCIsdHJ1ZSk7ZnVuY3Rpb24gZShlLHQpe3JldHVybiBuZXcgUmVnRXhwKFwiPFwiK2UrXCIoXFxcXHNbXj5dKj58PikoW1xcXFxzXFxcXFNdKj8pPFxcXFwvXCIrZStcIj5cIiwhIXQ/XCJnaW1cIjpcImltXCIpfWZ1bmN0aW9uIGQoZSl7aWYoZT09dW5kZWZpbmVkKXtyZXR1cm4gdW5kZWZpbmVkfWxldCB0PU5hTjtpZihlLnNsaWNlKC0yKT09XCJtc1wiKXt0PXBhcnNlRmxvYXQoZS5zbGljZSgwLC0yKSl9ZWxzZSBpZihlLnNsaWNlKC0xKT09XCJzXCIpe3Q9cGFyc2VGbG9hdChlLnNsaWNlKDAsLTEpKSoxZTN9ZWxzZSBpZihlLnNsaWNlKC0xKT09XCJtXCIpe3Q9cGFyc2VGbG9hdChlLnNsaWNlKDAsLTEpKSoxZTMqNjB9ZWxzZXt0PXBhcnNlRmxvYXQoZSl9cmV0dXJuIGlzTmFOKHQpP3VuZGVmaW5lZDp0fWZ1bmN0aW9uIGVlKGUsdCl7cmV0dXJuIGUuZ2V0QXR0cmlidXRlJiZlLmdldEF0dHJpYnV0ZSh0KX1mdW5jdGlvbiBvKGUsdCl7cmV0dXJuIGUuaGFzQXR0cmlidXRlJiYoZS5oYXNBdHRyaWJ1dGUodCl8fGUuaGFzQXR0cmlidXRlKFwiZGF0YS1cIit0KSl9ZnVuY3Rpb24gdGUoZSx0KXtyZXR1cm4gZWUoZSx0KXx8ZWUoZSxcImRhdGEtXCIrdCl9ZnVuY3Rpb24gdShlKXtyZXR1cm4gZS5wYXJlbnRFbGVtZW50fWZ1bmN0aW9uIHJlKCl7cmV0dXJuIGRvY3VtZW50fWZ1bmN0aW9uIGMoZSx0KXt3aGlsZShlJiYhdChlKSl7ZT11KGUpfXJldHVybiBlP2U6bnVsbH1mdW5jdGlvbiBMKGUsdCxyKXt2YXIgbj10ZSh0LHIpO3ZhciBpPXRlKHQsXCJoeC1kaXNpbmhlcml0XCIpO2lmKGUhPT10JiZpJiYoaT09PVwiKlwifHxpLnNwbGl0KFwiIFwiKS5pbmRleE9mKHIpPj0wKSl7cmV0dXJuXCJ1bnNldFwifWVsc2V7cmV0dXJuIG59fWZ1bmN0aW9uIG5lKHQscil7dmFyIG49bnVsbDtjKHQsZnVuY3Rpb24oZSl7cmV0dXJuIG49TCh0LGUscil9KTtpZihuIT09XCJ1bnNldFwiKXtyZXR1cm4gbn19ZnVuY3Rpb24gaChlLHQpe3ZhciByPWUubWF0Y2hlc3x8ZS5tYXRjaGVzU2VsZWN0b3J8fGUubXNNYXRjaGVzU2VsZWN0b3J8fGUubW96TWF0Y2hlc1NlbGVjdG9yfHxlLndlYmtpdE1hdGNoZXNTZWxlY3Rvcnx8ZS5vTWF0Y2hlc1NlbGVjdG9yO3JldHVybiByJiZyLmNhbGwoZSx0KX1mdW5jdGlvbiBBKGUpe3ZhciB0PS88KFthLXpdW15cXC9cXDA+XFx4MjBcXHRcXHJcXG5cXGZdKikvaTt2YXIgcj10LmV4ZWMoZSk7aWYocil7cmV0dXJuIHJbMV0udG9Mb3dlckNhc2UoKX1lbHNle3JldHVyblwiXCJ9fWZ1bmN0aW9uIHMoZSx0KXt2YXIgcj1uZXcgRE9NUGFyc2VyO3ZhciBuPXIucGFyc2VGcm9tU3RyaW5nKGUsXCJ0ZXh0L2h0bWxcIik7dmFyIGk9bi5ib2R5O3doaWxlKHQ+MCl7dC0tO2k9aS5maXJzdENoaWxkfWlmKGk9PW51bGwpe2k9cmUoKS5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCl9cmV0dXJuIGl9ZnVuY3Rpb24gTihlKXtyZXR1cm4vPGJvZHkvLnRlc3QoZSl9ZnVuY3Rpb24gbChlKXt2YXIgdD0hTihlKTt2YXIgcj1BKGUpO3ZhciBuPWU7aWYocj09PVwiaGVhZFwiKXtuPW4ucmVwbGFjZShTLFwiXCIpfWlmKFEuY29uZmlnLnVzZVRlbXBsYXRlRnJhZ21lbnRzJiZ0KXt2YXIgaT1zKFwiPGJvZHk+PHRlbXBsYXRlPlwiK24rXCI8L3RlbXBsYXRlPjwvYm9keT5cIiwwKTt2YXIgYT1pLnF1ZXJ5U2VsZWN0b3IoXCJ0ZW1wbGF0ZVwiKS5jb250ZW50O2lmKFEuY29uZmlnLmFsbG93U2NyaXB0VGFncyl7b2UoYS5xdWVyeVNlbGVjdG9yQWxsKFwic2NyaXB0XCIpLGZ1bmN0aW9uKGUpe2lmKFEuY29uZmlnLmlubGluZVNjcmlwdE5vbmNlKXtlLm5vbmNlPVEuY29uZmlnLmlubGluZVNjcmlwdE5vbmNlfWUuaHRteEV4ZWN1dGVkPW5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZihcIkZpcmVmb3hcIik9PT0tMX0pfWVsc2V7b2UoYS5xdWVyeVNlbGVjdG9yQWxsKFwic2NyaXB0XCIpLGZ1bmN0aW9uKGUpe18oZSl9KX1yZXR1cm4gYX1zd2l0Y2gocil7Y2FzZVwidGhlYWRcIjpjYXNlXCJ0Ym9keVwiOmNhc2VcInRmb290XCI6Y2FzZVwiY29sZ3JvdXBcIjpjYXNlXCJjYXB0aW9uXCI6cmV0dXJuIHMoXCI8dGFibGU+XCIrbitcIjwvdGFibGU+XCIsMSk7Y2FzZVwiY29sXCI6cmV0dXJuIHMoXCI8dGFibGU+PGNvbGdyb3VwPlwiK24rXCI8L2NvbGdyb3VwPjwvdGFibGU+XCIsMik7Y2FzZVwidHJcIjpyZXR1cm4gcyhcIjx0YWJsZT48dGJvZHk+XCIrbitcIjwvdGJvZHk+PC90YWJsZT5cIiwyKTtjYXNlXCJ0ZFwiOmNhc2VcInRoXCI6cmV0dXJuIHMoXCI8dGFibGU+PHRib2R5Pjx0cj5cIituK1wiPC90cj48L3Rib2R5PjwvdGFibGU+XCIsMyk7Y2FzZVwic2NyaXB0XCI6Y2FzZVwic3R5bGVcIjpyZXR1cm4gcyhcIjxkaXY+XCIrbitcIjwvZGl2PlwiLDEpO2RlZmF1bHQ6cmV0dXJuIHMobiwwKX19ZnVuY3Rpb24gaWUoZSl7aWYoZSl7ZSgpfX1mdW5jdGlvbiBJKGUsdCl7cmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChlKT09PVwiW29iamVjdCBcIit0K1wiXVwifWZ1bmN0aW9uIGsoZSl7cmV0dXJuIEkoZSxcIkZ1bmN0aW9uXCIpfWZ1bmN0aW9uIFAoZSl7cmV0dXJuIEkoZSxcIk9iamVjdFwiKX1mdW5jdGlvbiBhZShlKXt2YXIgdD1cImh0bXgtaW50ZXJuYWwtZGF0YVwiO3ZhciByPWVbdF07aWYoIXIpe3I9ZVt0XT17fX1yZXR1cm4gcn1mdW5jdGlvbiBNKGUpe3ZhciB0PVtdO2lmKGUpe2Zvcih2YXIgcj0wO3I8ZS5sZW5ndGg7cisrKXt0LnB1c2goZVtyXSl9fXJldHVybiB0fWZ1bmN0aW9uIG9lKGUsdCl7aWYoZSl7Zm9yKHZhciByPTA7cjxlLmxlbmd0aDtyKyspe3QoZVtyXSl9fX1mdW5jdGlvbiBYKGUpe3ZhciB0PWUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7dmFyIHI9dC50b3A7dmFyIG49dC5ib3R0b207cmV0dXJuIHI8d2luZG93LmlubmVySGVpZ2h0JiZuPj0wfWZ1bmN0aW9uIHNlKGUpe2lmKGUuZ2V0Um9vdE5vZGUmJmUuZ2V0Um9vdE5vZGUoKWluc3RhbmNlb2Ygd2luZG93LlNoYWRvd1Jvb3Qpe3JldHVybiByZSgpLmJvZHkuY29udGFpbnMoZS5nZXRSb290Tm9kZSgpLmhvc3QpfWVsc2V7cmV0dXJuIHJlKCkuYm9keS5jb250YWlucyhlKX19ZnVuY3Rpb24gRChlKXtyZXR1cm4gZS50cmltKCkuc3BsaXQoL1xccysvKX1mdW5jdGlvbiBsZShlLHQpe2Zvcih2YXIgciBpbiB0KXtpZih0Lmhhc093blByb3BlcnR5KHIpKXtlW3JdPXRbcl19fXJldHVybiBlfWZ1bmN0aW9uIEUoZSl7dHJ5e3JldHVybiBKU09OLnBhcnNlKGUpfWNhdGNoKGUpe2IoZSk7cmV0dXJuIG51bGx9fWZ1bmN0aW9uIFUoKXt2YXIgZT1cImh0bXg6bG9jYWxTdG9yYWdlVGVzdFwiO3RyeXtsb2NhbFN0b3JhZ2Uuc2V0SXRlbShlLGUpO2xvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGUpO3JldHVybiB0cnVlfWNhdGNoKGUpe3JldHVybiBmYWxzZX19ZnVuY3Rpb24gQih0KXt0cnl7dmFyIGU9bmV3IFVSTCh0KTtpZihlKXt0PWUucGF0aG5hbWUrZS5zZWFyY2h9aWYoIS9eXFwvJC8udGVzdCh0KSl7dD10LnJlcGxhY2UoL1xcLyskLyxcIlwiKX1yZXR1cm4gdH1jYXRjaChlKXtyZXR1cm4gdH19ZnVuY3Rpb24gdChlKXtyZXR1cm4gVHIocmUoKS5ib2R5LGZ1bmN0aW9uKCl7cmV0dXJuIGV2YWwoZSl9KX1mdW5jdGlvbiBGKHQpe3ZhciBlPVEub24oXCJodG14OmxvYWRcIixmdW5jdGlvbihlKXt0KGUuZGV0YWlsLmVsdCl9KTtyZXR1cm4gZX1mdW5jdGlvbiBWKCl7US5sb2dnZXI9ZnVuY3Rpb24oZSx0LHIpe2lmKGNvbnNvbGUpe2NvbnNvbGUubG9nKHQsZSxyKX19fWZ1bmN0aW9uIGooKXtRLmxvZ2dlcj1udWxsfWZ1bmN0aW9uIEMoZSx0KXtpZih0KXtyZXR1cm4gZS5xdWVyeVNlbGVjdG9yKHQpfWVsc2V7cmV0dXJuIEMocmUoKSxlKX19ZnVuY3Rpb24gZihlLHQpe2lmKHQpe3JldHVybiBlLnF1ZXJ5U2VsZWN0b3JBbGwodCl9ZWxzZXtyZXR1cm4gZihyZSgpLGUpfX1mdW5jdGlvbiBfKGUsdCl7ZT1wKGUpO2lmKHQpe3NldFRpbWVvdXQoZnVuY3Rpb24oKXtfKGUpO2U9bnVsbH0sdCl9ZWxzZXtlLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoZSl9fWZ1bmN0aW9uIHooZSx0LHIpe2U9cChlKTtpZihyKXtzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7eihlLHQpO2U9bnVsbH0scil9ZWxzZXtlLmNsYXNzTGlzdCYmZS5jbGFzc0xpc3QuYWRkKHQpfX1mdW5jdGlvbiBuKGUsdCxyKXtlPXAoZSk7aWYocil7c2V0VGltZW91dChmdW5jdGlvbigpe24oZSx0KTtlPW51bGx9LHIpfWVsc2V7aWYoZS5jbGFzc0xpc3Qpe2UuY2xhc3NMaXN0LnJlbW92ZSh0KTtpZihlLmNsYXNzTGlzdC5sZW5ndGg9PT0wKXtlLnJlbW92ZUF0dHJpYnV0ZShcImNsYXNzXCIpfX19fWZ1bmN0aW9uICQoZSx0KXtlPXAoZSk7ZS5jbGFzc0xpc3QudG9nZ2xlKHQpfWZ1bmN0aW9uIFcoZSx0KXtlPXAoZSk7b2UoZS5wYXJlbnRFbGVtZW50LmNoaWxkcmVuLGZ1bmN0aW9uKGUpe24oZSx0KX0pO3ooZSx0KX1mdW5jdGlvbiB2KGUsdCl7ZT1wKGUpO2lmKGUuY2xvc2VzdCl7cmV0dXJuIGUuY2xvc2VzdCh0KX1lbHNle2Rve2lmKGU9PW51bGx8fGgoZSx0KSl7cmV0dXJuIGV9fXdoaWxlKGU9ZSYmdShlKSk7cmV0dXJuIG51bGx9fWZ1bmN0aW9uIGcoZSx0KXtyZXR1cm4gZS5zdWJzdHJpbmcoMCx0Lmxlbmd0aCk9PT10fWZ1bmN0aW9uIEcoZSx0KXtyZXR1cm4gZS5zdWJzdHJpbmcoZS5sZW5ndGgtdC5sZW5ndGgpPT09dH1mdW5jdGlvbiBKKGUpe3ZhciB0PWUudHJpbSgpO2lmKGcodCxcIjxcIikmJkcodCxcIi8+XCIpKXtyZXR1cm4gdC5zdWJzdHJpbmcoMSx0Lmxlbmd0aC0yKX1lbHNle3JldHVybiB0fX1mdW5jdGlvbiBaKGUsdCl7aWYodC5pbmRleE9mKFwiY2xvc2VzdCBcIik9PT0wKXtyZXR1cm5bdihlLEoodC5zdWJzdHIoOCkpKV19ZWxzZSBpZih0LmluZGV4T2YoXCJmaW5kIFwiKT09PTApe3JldHVybltDKGUsSih0LnN1YnN0cig1KSkpXX1lbHNlIGlmKHQ9PT1cIm5leHRcIil7cmV0dXJuW2UubmV4dEVsZW1lbnRTaWJsaW5nXX1lbHNlIGlmKHQuaW5kZXhPZihcIm5leHQgXCIpPT09MCl7cmV0dXJuW0soZSxKKHQuc3Vic3RyKDUpKSldfWVsc2UgaWYodD09PVwicHJldmlvdXNcIil7cmV0dXJuW2UucHJldmlvdXNFbGVtZW50U2libGluZ119ZWxzZSBpZih0LmluZGV4T2YoXCJwcmV2aW91cyBcIik9PT0wKXtyZXR1cm5bWShlLEoodC5zdWJzdHIoOSkpKV19ZWxzZSBpZih0PT09XCJkb2N1bWVudFwiKXtyZXR1cm5bZG9jdW1lbnRdfWVsc2UgaWYodD09PVwid2luZG93XCIpe3JldHVyblt3aW5kb3ddfWVsc2UgaWYodD09PVwiYm9keVwiKXtyZXR1cm5bZG9jdW1lbnQuYm9keV19ZWxzZXtyZXR1cm4gcmUoKS5xdWVyeVNlbGVjdG9yQWxsKEoodCkpfX12YXIgSz1mdW5jdGlvbihlLHQpe3ZhciByPXJlKCkucXVlcnlTZWxlY3RvckFsbCh0KTtmb3IodmFyIG49MDtuPHIubGVuZ3RoO24rKyl7dmFyIGk9cltuXTtpZihpLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKGUpPT09Tm9kZS5ET0NVTUVOVF9QT1NJVElPTl9QUkVDRURJTkcpe3JldHVybiBpfX19O3ZhciBZPWZ1bmN0aW9uKGUsdCl7dmFyIHI9cmUoKS5xdWVyeVNlbGVjdG9yQWxsKHQpO2Zvcih2YXIgbj1yLmxlbmd0aC0xO24+PTA7bi0tKXt2YXIgaT1yW25dO2lmKGkuY29tcGFyZURvY3VtZW50UG9zaXRpb24oZSk9PT1Ob2RlLkRPQ1VNRU5UX1BPU0lUSU9OX0ZPTExPV0lORyl7cmV0dXJuIGl9fX07ZnVuY3Rpb24gdWUoZSx0KXtpZih0KXtyZXR1cm4gWihlLHQpWzBdfWVsc2V7cmV0dXJuIFoocmUoKS5ib2R5LGUpWzBdfX1mdW5jdGlvbiBwKGUpe2lmKEkoZSxcIlN0cmluZ1wiKSl7cmV0dXJuIEMoZSl9ZWxzZXtyZXR1cm4gZX19ZnVuY3Rpb24gdmUoZSx0LHIpe2lmKGsodCkpe3JldHVybnt0YXJnZXQ6cmUoKS5ib2R5LGV2ZW50OmUsbGlzdGVuZXI6dH19ZWxzZXtyZXR1cm57dGFyZ2V0OnAoZSksZXZlbnQ6dCxsaXN0ZW5lcjpyfX19ZnVuY3Rpb24gZGUodCxyLG4pe2pyKGZ1bmN0aW9uKCl7dmFyIGU9dmUodCxyLG4pO2UudGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoZS5ldmVudCxlLmxpc3RlbmVyKX0pO3ZhciBlPWsocik7cmV0dXJuIGU/cjpufWZ1bmN0aW9uIGdlKHQscixuKXtqcihmdW5jdGlvbigpe3ZhciBlPXZlKHQscixuKTtlLnRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKGUuZXZlbnQsZS5saXN0ZW5lcil9KTtyZXR1cm4gayhyKT9yOm59dmFyIHBlPXJlKCkuY3JlYXRlRWxlbWVudChcIm91dHB1dFwiKTtmdW5jdGlvbiBtZShlLHQpe3ZhciByPW5lKGUsdCk7aWYocil7aWYocj09PVwidGhpc1wiKXtyZXR1cm5beGUoZSx0KV19ZWxzZXt2YXIgbj1aKGUscik7aWYobi5sZW5ndGg9PT0wKXtiKCdUaGUgc2VsZWN0b3IgXCInK3IrJ1wiIG9uICcrdCtcIiByZXR1cm5lZCBubyBtYXRjaGVzIVwiKTtyZXR1cm5bcGVdfWVsc2V7cmV0dXJuIG59fX19ZnVuY3Rpb24geGUoZSx0KXtyZXR1cm4gYyhlLGZ1bmN0aW9uKGUpe3JldHVybiB0ZShlLHQpIT1udWxsfSl9ZnVuY3Rpb24geWUoZSl7dmFyIHQ9bmUoZSxcImh4LXRhcmdldFwiKTtpZih0KXtpZih0PT09XCJ0aGlzXCIpe3JldHVybiB4ZShlLFwiaHgtdGFyZ2V0XCIpfWVsc2V7cmV0dXJuIHVlKGUsdCl9fWVsc2V7dmFyIHI9YWUoZSk7aWYoci5ib29zdGVkKXtyZXR1cm4gcmUoKS5ib2R5fWVsc2V7cmV0dXJuIGV9fX1mdW5jdGlvbiBiZShlKXt2YXIgdD1RLmNvbmZpZy5hdHRyaWJ1dGVzVG9TZXR0bGU7Zm9yKHZhciByPTA7cjx0Lmxlbmd0aDtyKyspe2lmKGU9PT10W3JdKXtyZXR1cm4gdHJ1ZX19cmV0dXJuIGZhbHNlfWZ1bmN0aW9uIHdlKHQscil7b2UodC5hdHRyaWJ1dGVzLGZ1bmN0aW9uKGUpe2lmKCFyLmhhc0F0dHJpYnV0ZShlLm5hbWUpJiZiZShlLm5hbWUpKXt0LnJlbW92ZUF0dHJpYnV0ZShlLm5hbWUpfX0pO29lKHIuYXR0cmlidXRlcyxmdW5jdGlvbihlKXtpZihiZShlLm5hbWUpKXt0LnNldEF0dHJpYnV0ZShlLm5hbWUsZS52YWx1ZSl9fSl9ZnVuY3Rpb24gU2UoZSx0KXt2YXIgcj1Gcih0KTtmb3IodmFyIG49MDtuPHIubGVuZ3RoO24rKyl7dmFyIGk9cltuXTt0cnl7aWYoaS5pc0lubGluZVN3YXAoZSkpe3JldHVybiB0cnVlfX1jYXRjaChlKXtiKGUpfX1yZXR1cm4gZT09PVwib3V0ZXJIVE1MXCJ9ZnVuY3Rpb24gRWUoZSxpLGEpe3ZhciB0PVwiI1wiK2VlKGksXCJpZFwiKTt2YXIgbz1cIm91dGVySFRNTFwiO2lmKGU9PT1cInRydWVcIil7fWVsc2UgaWYoZS5pbmRleE9mKFwiOlwiKT4wKXtvPWUuc3Vic3RyKDAsZS5pbmRleE9mKFwiOlwiKSk7dD1lLnN1YnN0cihlLmluZGV4T2YoXCI6XCIpKzEsZS5sZW5ndGgpfWVsc2V7bz1lfXZhciByPXJlKCkucXVlcnlTZWxlY3RvckFsbCh0KTtpZihyKXtvZShyLGZ1bmN0aW9uKGUpe3ZhciB0O3ZhciByPWkuY2xvbmVOb2RlKHRydWUpO3Q9cmUoKS5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7dC5hcHBlbmRDaGlsZChyKTtpZighU2UobyxlKSl7dD1yfXZhciBuPXtzaG91bGRTd2FwOnRydWUsdGFyZ2V0OmUsZnJhZ21lbnQ6dH07aWYoIWNlKGUsXCJodG14Om9vYkJlZm9yZVN3YXBcIixuKSlyZXR1cm47ZT1uLnRhcmdldDtpZihuW1wic2hvdWxkU3dhcFwiXSl7RmUobyxlLGUsdCxhKX1vZShhLmVsdHMsZnVuY3Rpb24oZSl7Y2UoZSxcImh0bXg6b29iQWZ0ZXJTd2FwXCIsbil9KX0pO2kucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChpKX1lbHNle2kucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChpKTtmZShyZSgpLmJvZHksXCJodG14Om9vYkVycm9yTm9UYXJnZXRcIix7Y29udGVudDppfSl9cmV0dXJuIGV9ZnVuY3Rpb24gQ2UoZSx0LHIpe3ZhciBuPW5lKGUsXCJoeC1zZWxlY3Qtb29iXCIpO2lmKG4pe3ZhciBpPW4uc3BsaXQoXCIsXCIpO2Zvcih2YXIgYT0wO2E8aS5sZW5ndGg7YSsrKXt2YXIgbz1pW2FdLnNwbGl0KFwiOlwiLDIpO3ZhciBzPW9bMF0udHJpbSgpO2lmKHMuaW5kZXhPZihcIiNcIik9PT0wKXtzPXMuc3Vic3RyaW5nKDEpfXZhciBsPW9bMV18fFwidHJ1ZVwiO3ZhciB1PXQucXVlcnlTZWxlY3RvcihcIiNcIitzKTtpZih1KXtFZShsLHUscil9fX1vZShmKHQsXCJbaHgtc3dhcC1vb2JdLCBbZGF0YS1oeC1zd2FwLW9vYl1cIiksZnVuY3Rpb24oZSl7dmFyIHQ9dGUoZSxcImh4LXN3YXAtb29iXCIpO2lmKHQhPW51bGwpe0VlKHQsZSxyKX19KX1mdW5jdGlvbiBSZShlKXtvZShmKGUsXCJbaHgtcHJlc2VydmVdLCBbZGF0YS1oeC1wcmVzZXJ2ZV1cIiksZnVuY3Rpb24oZSl7dmFyIHQ9dGUoZSxcImlkXCIpO3ZhciByPXJlKCkuZ2V0RWxlbWVudEJ5SWQodCk7aWYociE9bnVsbCl7ZS5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChyLGUpfX0pfWZ1bmN0aW9uIFRlKG8sZSxzKXtvZShlLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbaWRdXCIpLGZ1bmN0aW9uKGUpe3ZhciB0PWVlKGUsXCJpZFwiKTtpZih0JiZ0Lmxlbmd0aD4wKXt2YXIgcj10LnJlcGxhY2UoXCInXCIsXCJcXFxcJ1wiKTt2YXIgbj1lLnRhZ05hbWUucmVwbGFjZShcIjpcIixcIlxcXFw6XCIpO3ZhciBpPW8ucXVlcnlTZWxlY3RvcihuK1wiW2lkPSdcIityK1wiJ11cIik7aWYoaSYmaSE9PW8pe3ZhciBhPWUuY2xvbmVOb2RlKCk7d2UoZSxpKTtzLnRhc2tzLnB1c2goZnVuY3Rpb24oKXt3ZShlLGEpfSl9fX0pfWZ1bmN0aW9uIE9lKGUpe3JldHVybiBmdW5jdGlvbigpe24oZSxRLmNvbmZpZy5hZGRlZENsYXNzKTt6dChlKTtOdChlKTtxZShlKTtjZShlLFwiaHRteDpsb2FkXCIpfX1mdW5jdGlvbiBxZShlKXt2YXIgdD1cIlthdXRvZm9jdXNdXCI7dmFyIHI9aChlLHQpP2U6ZS5xdWVyeVNlbGVjdG9yKHQpO2lmKHIhPW51bGwpe3IuZm9jdXMoKX19ZnVuY3Rpb24gYShlLHQscixuKXtUZShlLHIsbik7d2hpbGUoci5jaGlsZE5vZGVzLmxlbmd0aD4wKXt2YXIgaT1yLmZpcnN0Q2hpbGQ7eihpLFEuY29uZmlnLmFkZGVkQ2xhc3MpO2UuaW5zZXJ0QmVmb3JlKGksdCk7aWYoaS5ub2RlVHlwZSE9PU5vZGUuVEVYVF9OT0RFJiZpLm5vZGVUeXBlIT09Tm9kZS5DT01NRU5UX05PREUpe24udGFza3MucHVzaChPZShpKSl9fX1mdW5jdGlvbiBIZShlLHQpe3ZhciByPTA7d2hpbGUocjxlLmxlbmd0aCl7dD0odDw8NSktdCtlLmNoYXJDb2RlQXQocisrKXwwfXJldHVybiB0fWZ1bmN0aW9uIExlKGUpe3ZhciB0PTA7aWYoZS5hdHRyaWJ1dGVzKXtmb3IodmFyIHI9MDtyPGUuYXR0cmlidXRlcy5sZW5ndGg7cisrKXt2YXIgbj1lLmF0dHJpYnV0ZXNbcl07aWYobi52YWx1ZSl7dD1IZShuLm5hbWUsdCk7dD1IZShuLnZhbHVlLHQpfX19cmV0dXJuIHR9ZnVuY3Rpb24gQWUoZSl7dmFyIHQ9YWUoZSk7aWYodC5vbkhhbmRsZXJzKXtmb3IodmFyIHI9MDtyPHQub25IYW5kbGVycy5sZW5ndGg7cisrKXtjb25zdCBuPXQub25IYW5kbGVyc1tyXTtlLnJlbW92ZUV2ZW50TGlzdGVuZXIobi5ldmVudCxuLmxpc3RlbmVyKX1kZWxldGUgdC5vbkhhbmRsZXJzfX1mdW5jdGlvbiBOZShlKXt2YXIgdD1hZShlKTtpZih0LnRpbWVvdXQpe2NsZWFyVGltZW91dCh0LnRpbWVvdXQpfWlmKHQud2ViU29ja2V0KXt0LndlYlNvY2tldC5jbG9zZSgpfWlmKHQuc3NlRXZlbnRTb3VyY2Upe3Quc3NlRXZlbnRTb3VyY2UuY2xvc2UoKX1pZih0Lmxpc3RlbmVySW5mb3Mpe29lKHQubGlzdGVuZXJJbmZvcyxmdW5jdGlvbihlKXtpZihlLm9uKXtlLm9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoZS50cmlnZ2VyLGUubGlzdGVuZXIpfX0pfUFlKGUpO29lKE9iamVjdC5rZXlzKHQpLGZ1bmN0aW9uKGUpe2RlbGV0ZSB0W2VdfSl9ZnVuY3Rpb24gbShlKXtjZShlLFwiaHRteDpiZWZvcmVDbGVhbnVwRWxlbWVudFwiKTtOZShlKTtpZihlLmNoaWxkcmVuKXtvZShlLmNoaWxkcmVuLGZ1bmN0aW9uKGUpe20oZSl9KX19ZnVuY3Rpb24gSWUodCxlLHIpe2lmKHQudGFnTmFtZT09PVwiQk9EWVwiKXtyZXR1cm4gVWUodCxlLHIpfWVsc2V7dmFyIG47dmFyIGk9dC5wcmV2aW91c1NpYmxpbmc7YSh1KHQpLHQsZSxyKTtpZihpPT1udWxsKXtuPXUodCkuZmlyc3RDaGlsZH1lbHNle249aS5uZXh0U2libGluZ31yLmVsdHM9ci5lbHRzLmZpbHRlcihmdW5jdGlvbihlKXtyZXR1cm4gZSE9dH0pO3doaWxlKG4mJm4hPT10KXtpZihuLm5vZGVUeXBlPT09Tm9kZS5FTEVNRU5UX05PREUpe3IuZWx0cy5wdXNoKG4pfW49bi5uZXh0RWxlbWVudFNpYmxpbmd9bSh0KTt1KHQpLnJlbW92ZUNoaWxkKHQpfX1mdW5jdGlvbiBrZShlLHQscil7cmV0dXJuIGEoZSxlLmZpcnN0Q2hpbGQsdCxyKX1mdW5jdGlvbiBQZShlLHQscil7cmV0dXJuIGEodShlKSxlLHQscil9ZnVuY3Rpb24gTWUoZSx0LHIpe3JldHVybiBhKGUsbnVsbCx0LHIpfWZ1bmN0aW9uIFhlKGUsdCxyKXtyZXR1cm4gYSh1KGUpLGUubmV4dFNpYmxpbmcsdCxyKX1mdW5jdGlvbiBEZShlLHQscil7bShlKTtyZXR1cm4gdShlKS5yZW1vdmVDaGlsZChlKX1mdW5jdGlvbiBVZShlLHQscil7dmFyIG49ZS5maXJzdENoaWxkO2EoZSxuLHQscik7aWYobil7d2hpbGUobi5uZXh0U2libGluZyl7bShuLm5leHRTaWJsaW5nKTtlLnJlbW92ZUNoaWxkKG4ubmV4dFNpYmxpbmcpfW0obik7ZS5yZW1vdmVDaGlsZChuKX19ZnVuY3Rpb24gQmUoZSx0LHIpe3ZhciBuPXJ8fG5lKGUsXCJoeC1zZWxlY3RcIik7aWYobil7dmFyIGk9cmUoKS5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7b2UodC5xdWVyeVNlbGVjdG9yQWxsKG4pLGZ1bmN0aW9uKGUpe2kuYXBwZW5kQ2hpbGQoZSl9KTt0PWl9cmV0dXJuIHR9ZnVuY3Rpb24gRmUoZSx0LHIsbixpKXtzd2l0Y2goZSl7Y2FzZVwibm9uZVwiOnJldHVybjtjYXNlXCJvdXRlckhUTUxcIjpJZShyLG4saSk7cmV0dXJuO2Nhc2VcImFmdGVyYmVnaW5cIjprZShyLG4saSk7cmV0dXJuO2Nhc2VcImJlZm9yZWJlZ2luXCI6UGUocixuLGkpO3JldHVybjtjYXNlXCJiZWZvcmVlbmRcIjpNZShyLG4saSk7cmV0dXJuO2Nhc2VcImFmdGVyZW5kXCI6WGUocixuLGkpO3JldHVybjtjYXNlXCJkZWxldGVcIjpEZShyLG4saSk7cmV0dXJuO2RlZmF1bHQ6dmFyIGE9RnIodCk7Zm9yKHZhciBvPTA7bzxhLmxlbmd0aDtvKyspe3ZhciBzPWFbb107dHJ5e3ZhciBsPXMuaGFuZGxlU3dhcChlLHIsbixpKTtpZihsKXtpZih0eXBlb2YgbC5sZW5ndGghPT1cInVuZGVmaW5lZFwiKXtmb3IodmFyIHU9MDt1PGwubGVuZ3RoO3UrKyl7dmFyIGY9bFt1XTtpZihmLm5vZGVUeXBlIT09Tm9kZS5URVhUX05PREUmJmYubm9kZVR5cGUhPT1Ob2RlLkNPTU1FTlRfTk9ERSl7aS50YXNrcy5wdXNoKE9lKGYpKX19fXJldHVybn19Y2F0Y2goZSl7YihlKX19aWYoZT09PVwiaW5uZXJIVE1MXCIpe1VlKHIsbixpKX1lbHNle0ZlKFEuY29uZmlnLmRlZmF1bHRTd2FwU3R5bGUsdCxyLG4saSl9fX1mdW5jdGlvbiBWZShlKXtpZihlLmluZGV4T2YoXCI8dGl0bGVcIik+LTEpe3ZhciB0PWUucmVwbGFjZShILFwiXCIpO3ZhciByPXQubWF0Y2gocSk7aWYocil7cmV0dXJuIHJbMl19fX1mdW5jdGlvbiBqZShlLHQscixuLGksYSl7aS50aXRsZT1WZShuKTt2YXIgbz1sKG4pO2lmKG8pe0NlKHIsbyxpKTtvPUJlKHIsbyxhKTtSZShvKTtyZXR1cm4gRmUoZSxyLHQsbyxpKX19ZnVuY3Rpb24gX2UoZSx0LHIpe3ZhciBuPWUuZ2V0UmVzcG9uc2VIZWFkZXIodCk7aWYobi5pbmRleE9mKFwie1wiKT09PTApe3ZhciBpPUUobik7Zm9yKHZhciBhIGluIGkpe2lmKGkuaGFzT3duUHJvcGVydHkoYSkpe3ZhciBvPWlbYV07aWYoIVAobykpe289e3ZhbHVlOm99fWNlKHIsYSxvKX19fWVsc2V7dmFyIHM9bi5zcGxpdChcIixcIik7Zm9yKHZhciBsPTA7bDxzLmxlbmd0aDtsKyspe2NlKHIsc1tsXS50cmltKCksW10pfX19dmFyIHplPS9cXHMvO3ZhciB4PS9bXFxzLF0vO3ZhciAkZT0vW18kYS16QS1aXS87dmFyIFdlPS9bXyRhLXpBLVowLTldLzt2YXIgR2U9WydcIicsXCInXCIsXCIvXCJdO3ZhciBKZT0vW15cXHNdLzt2YXIgWmU9L1t7KF0vO3ZhciBLZT0vW30pXS87ZnVuY3Rpb24gWWUoZSl7dmFyIHQ9W107dmFyIHI9MDt3aGlsZShyPGUubGVuZ3RoKXtpZigkZS5leGVjKGUuY2hhckF0KHIpKSl7dmFyIG49cjt3aGlsZShXZS5leGVjKGUuY2hhckF0KHIrMSkpKXtyKyt9dC5wdXNoKGUuc3Vic3RyKG4sci1uKzEpKX1lbHNlIGlmKEdlLmluZGV4T2YoZS5jaGFyQXQocikpIT09LTEpe3ZhciBpPWUuY2hhckF0KHIpO3ZhciBuPXI7cisrO3doaWxlKHI8ZS5sZW5ndGgmJmUuY2hhckF0KHIpIT09aSl7aWYoZS5jaGFyQXQocik9PT1cIlxcXFxcIil7cisrfXIrK310LnB1c2goZS5zdWJzdHIobixyLW4rMSkpfWVsc2V7dmFyIGE9ZS5jaGFyQXQocik7dC5wdXNoKGEpfXIrK31yZXR1cm4gdH1mdW5jdGlvbiBRZShlLHQscil7cmV0dXJuICRlLmV4ZWMoZS5jaGFyQXQoMCkpJiZlIT09XCJ0cnVlXCImJmUhPT1cImZhbHNlXCImJmUhPT1cInRoaXNcIiYmZSE9PXImJnQhPT1cIi5cIn1mdW5jdGlvbiBldChlLHQscil7aWYodFswXT09PVwiW1wiKXt0LnNoaWZ0KCk7dmFyIG49MTt2YXIgaT1cIiByZXR1cm4gKGZ1bmN0aW9uKFwiK3IrXCIpeyByZXR1cm4gKFwiO3ZhciBhPW51bGw7d2hpbGUodC5sZW5ndGg+MCl7dmFyIG89dFswXTtpZihvPT09XCJdXCIpe24tLTtpZihuPT09MCl7aWYoYT09PW51bGwpe2k9aStcInRydWVcIn10LnNoaWZ0KCk7aSs9XCIpfSlcIjt0cnl7dmFyIHM9VHIoZSxmdW5jdGlvbigpe3JldHVybiBGdW5jdGlvbihpKSgpfSxmdW5jdGlvbigpe3JldHVybiB0cnVlfSk7cy5zb3VyY2U9aTtyZXR1cm4gc31jYXRjaChlKXtmZShyZSgpLmJvZHksXCJodG14OnN5bnRheDplcnJvclwiLHtlcnJvcjplLHNvdXJjZTppfSk7cmV0dXJuIG51bGx9fX1lbHNlIGlmKG89PT1cIltcIil7bisrfWlmKFFlKG8sYSxyKSl7aSs9XCIoKFwiK3IrXCIuXCIrbytcIikgPyAoXCIrcitcIi5cIitvK1wiKSA6ICh3aW5kb3cuXCIrbytcIikpXCJ9ZWxzZXtpPWkrb31hPXQuc2hpZnQoKX19fWZ1bmN0aW9uIHkoZSx0KXt2YXIgcj1cIlwiO3doaWxlKGUubGVuZ3RoPjAmJiF0LnRlc3QoZVswXSkpe3IrPWUuc2hpZnQoKX1yZXR1cm4gcn1mdW5jdGlvbiB0dChlKXt2YXIgdDtpZihlLmxlbmd0aD4wJiZaZS50ZXN0KGVbMF0pKXtlLnNoaWZ0KCk7dD15KGUsS2UpLnRyaW0oKTtlLnNoaWZ0KCl9ZWxzZXt0PXkoZSx4KX1yZXR1cm4gdH12YXIgcnQ9XCJpbnB1dCwgdGV4dGFyZWEsIHNlbGVjdFwiO2Z1bmN0aW9uIG50KGUsdCxyKXt2YXIgbj1bXTt2YXIgaT1ZZSh0KTtkb3t5KGksSmUpO3ZhciBhPWkubGVuZ3RoO3ZhciBvPXkoaSwvWyxcXFtcXHNdLyk7aWYobyE9PVwiXCIpe2lmKG89PT1cImV2ZXJ5XCIpe3ZhciBzPXt0cmlnZ2VyOlwiZXZlcnlcIn07eShpLEplKTtzLnBvbGxJbnRlcnZhbD1kKHkoaSwvWyxcXFtcXHNdLykpO3koaSxKZSk7dmFyIGw9ZXQoZSxpLFwiZXZlbnRcIik7aWYobCl7cy5ldmVudEZpbHRlcj1sfW4ucHVzaChzKX1lbHNlIGlmKG8uaW5kZXhPZihcInNzZTpcIik9PT0wKXtuLnB1c2goe3RyaWdnZXI6XCJzc2VcIixzc2VFdmVudDpvLnN1YnN0cig0KX0pfWVsc2V7dmFyIHU9e3RyaWdnZXI6b307dmFyIGw9ZXQoZSxpLFwiZXZlbnRcIik7aWYobCl7dS5ldmVudEZpbHRlcj1sfXdoaWxlKGkubGVuZ3RoPjAmJmlbMF0hPT1cIixcIil7eShpLEplKTt2YXIgZj1pLnNoaWZ0KCk7aWYoZj09PVwiY2hhbmdlZFwiKXt1LmNoYW5nZWQ9dHJ1ZX1lbHNlIGlmKGY9PT1cIm9uY2VcIil7dS5vbmNlPXRydWV9ZWxzZSBpZihmPT09XCJjb25zdW1lXCIpe3UuY29uc3VtZT10cnVlfWVsc2UgaWYoZj09PVwiZGVsYXlcIiYmaVswXT09PVwiOlwiKXtpLnNoaWZ0KCk7dS5kZWxheT1kKHkoaSx4KSl9ZWxzZSBpZihmPT09XCJmcm9tXCImJmlbMF09PT1cIjpcIil7aS5zaGlmdCgpO2lmKFplLnRlc3QoaVswXSkpe3ZhciBjPXR0KGkpfWVsc2V7dmFyIGM9eShpLHgpO2lmKGM9PT1cImNsb3Nlc3RcInx8Yz09PVwiZmluZFwifHxjPT09XCJuZXh0XCJ8fGM9PT1cInByZXZpb3VzXCIpe2kuc2hpZnQoKTt2YXIgaD10dChpKTtpZihoLmxlbmd0aD4wKXtjKz1cIiBcIitofX19dS5mcm9tPWN9ZWxzZSBpZihmPT09XCJ0YXJnZXRcIiYmaVswXT09PVwiOlwiKXtpLnNoaWZ0KCk7dS50YXJnZXQ9dHQoaSl9ZWxzZSBpZihmPT09XCJ0aHJvdHRsZVwiJiZpWzBdPT09XCI6XCIpe2kuc2hpZnQoKTt1LnRocm90dGxlPWQoeShpLHgpKX1lbHNlIGlmKGY9PT1cInF1ZXVlXCImJmlbMF09PT1cIjpcIil7aS5zaGlmdCgpO3UucXVldWU9eShpLHgpfWVsc2UgaWYoZj09PVwicm9vdFwiJiZpWzBdPT09XCI6XCIpe2kuc2hpZnQoKTt1W2ZdPXR0KGkpfWVsc2UgaWYoZj09PVwidGhyZXNob2xkXCImJmlbMF09PT1cIjpcIil7aS5zaGlmdCgpO3VbZl09eShpLHgpfWVsc2V7ZmUoZSxcImh0bXg6c3ludGF4OmVycm9yXCIse3Rva2VuOmkuc2hpZnQoKX0pfX1uLnB1c2godSl9fWlmKGkubGVuZ3RoPT09YSl7ZmUoZSxcImh0bXg6c3ludGF4OmVycm9yXCIse3Rva2VuOmkuc2hpZnQoKX0pfXkoaSxKZSl9d2hpbGUoaVswXT09PVwiLFwiJiZpLnNoaWZ0KCkpO2lmKHIpe3JbdF09bn1yZXR1cm4gbn1mdW5jdGlvbiBpdChlKXt2YXIgdD10ZShlLFwiaHgtdHJpZ2dlclwiKTt2YXIgcj1bXTtpZih0KXt2YXIgbj1RLmNvbmZpZy50cmlnZ2VyU3BlY3NDYWNoZTtyPW4mJm5bdF18fG50KGUsdCxuKX1pZihyLmxlbmd0aD4wKXtyZXR1cm4gcn1lbHNlIGlmKGgoZSxcImZvcm1cIikpe3JldHVyblt7dHJpZ2dlcjpcInN1Ym1pdFwifV19ZWxzZSBpZihoKGUsJ2lucHV0W3R5cGU9XCJidXR0b25cIl0sIGlucHV0W3R5cGU9XCJzdWJtaXRcIl0nKSl7cmV0dXJuW3t0cmlnZ2VyOlwiY2xpY2tcIn1dfWVsc2UgaWYoaChlLHJ0KSl7cmV0dXJuW3t0cmlnZ2VyOlwiY2hhbmdlXCJ9XX1lbHNle3JldHVyblt7dHJpZ2dlcjpcImNsaWNrXCJ9XX19ZnVuY3Rpb24gYXQoZSl7YWUoZSkuY2FuY2VsbGVkPXRydWV9ZnVuY3Rpb24gb3QoZSx0LHIpe3ZhciBuPWFlKGUpO24udGltZW91dD1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7aWYoc2UoZSkmJm4uY2FuY2VsbGVkIT09dHJ1ZSl7aWYoIWN0KHIsZSxXdChcImh4OnBvbGw6dHJpZ2dlclwiLHt0cmlnZ2VyU3BlYzpyLHRhcmdldDplfSkpKXt0KGUpfW90KGUsdCxyKX19LHIucG9sbEludGVydmFsKX1mdW5jdGlvbiBzdChlKXtyZXR1cm4gbG9jYXRpb24uaG9zdG5hbWU9PT1lLmhvc3RuYW1lJiZlZShlLFwiaHJlZlwiKSYmZWUoZSxcImhyZWZcIikuaW5kZXhPZihcIiNcIikhPT0wfWZ1bmN0aW9uIGx0KHQscixlKXtpZih0LnRhZ05hbWU9PT1cIkFcIiYmc3QodCkmJih0LnRhcmdldD09PVwiXCJ8fHQudGFyZ2V0PT09XCJfc2VsZlwiKXx8dC50YWdOYW1lPT09XCJGT1JNXCIpe3IuYm9vc3RlZD10cnVlO3ZhciBuLGk7aWYodC50YWdOYW1lPT09XCJBXCIpe249XCJnZXRcIjtpPWVlKHQsXCJocmVmXCIpfWVsc2V7dmFyIGE9ZWUodCxcIm1ldGhvZFwiKTtuPWE/YS50b0xvd2VyQ2FzZSgpOlwiZ2V0XCI7aWYobj09PVwiZ2V0XCIpe31pPWVlKHQsXCJhY3Rpb25cIil9ZS5mb3JFYWNoKGZ1bmN0aW9uKGUpe2h0KHQsZnVuY3Rpb24oZSx0KXtpZih2KGUsUS5jb25maWcuZGlzYWJsZVNlbGVjdG9yKSl7bShlKTtyZXR1cm59aGUobixpLGUsdCl9LHIsZSx0cnVlKX0pfX1mdW5jdGlvbiB1dChlLHQpe2lmKGUudHlwZT09PVwic3VibWl0XCJ8fGUudHlwZT09PVwiY2xpY2tcIil7aWYodC50YWdOYW1lPT09XCJGT1JNXCIpe3JldHVybiB0cnVlfWlmKGgodCwnaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSwgYnV0dG9uJykmJnYodCxcImZvcm1cIikhPT1udWxsKXtyZXR1cm4gdHJ1ZX1pZih0LnRhZ05hbWU9PT1cIkFcIiYmdC5ocmVmJiYodC5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpPT09XCIjXCJ8fHQuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKS5pbmRleE9mKFwiI1wiKSE9PTApKXtyZXR1cm4gdHJ1ZX19cmV0dXJuIGZhbHNlfWZ1bmN0aW9uIGZ0KGUsdCl7cmV0dXJuIGFlKGUpLmJvb3N0ZWQmJmUudGFnTmFtZT09PVwiQVwiJiZ0LnR5cGU9PT1cImNsaWNrXCImJih0LmN0cmxLZXl8fHQubWV0YUtleSl9ZnVuY3Rpb24gY3QoZSx0LHIpe3ZhciBuPWUuZXZlbnRGaWx0ZXI7aWYobil7dHJ5e3JldHVybiBuLmNhbGwodCxyKSE9PXRydWV9Y2F0Y2goZSl7ZmUocmUoKS5ib2R5LFwiaHRteDpldmVudEZpbHRlcjplcnJvclwiLHtlcnJvcjplLHNvdXJjZTpuLnNvdXJjZX0pO3JldHVybiB0cnVlfX1yZXR1cm4gZmFsc2V9ZnVuY3Rpb24gaHQoYSxvLGUscyxsKXt2YXIgdT1hZShhKTt2YXIgdDtpZihzLmZyb20pe3Q9WihhLHMuZnJvbSl9ZWxzZXt0PVthXX1pZihzLmNoYW5nZWQpe3QuZm9yRWFjaChmdW5jdGlvbihlKXt2YXIgdD1hZShlKTt0Lmxhc3RWYWx1ZT1lLnZhbHVlfSl9b2UodCxmdW5jdGlvbihuKXt2YXIgaT1mdW5jdGlvbihlKXtpZighc2UoYSkpe24ucmVtb3ZlRXZlbnRMaXN0ZW5lcihzLnRyaWdnZXIsaSk7cmV0dXJufWlmKGZ0KGEsZSkpe3JldHVybn1pZihsfHx1dChlLGEpKXtlLnByZXZlbnREZWZhdWx0KCl9aWYoY3QocyxhLGUpKXtyZXR1cm59dmFyIHQ9YWUoZSk7dC50cmlnZ2VyU3BlYz1zO2lmKHQuaGFuZGxlZEZvcj09bnVsbCl7dC5oYW5kbGVkRm9yPVtdfWlmKHQuaGFuZGxlZEZvci5pbmRleE9mKGEpPDApe3QuaGFuZGxlZEZvci5wdXNoKGEpO2lmKHMuY29uc3VtZSl7ZS5zdG9wUHJvcGFnYXRpb24oKX1pZihzLnRhcmdldCYmZS50YXJnZXQpe2lmKCFoKGUudGFyZ2V0LHMudGFyZ2V0KSl7cmV0dXJufX1pZihzLm9uY2Upe2lmKHUudHJpZ2dlcmVkT25jZSl7cmV0dXJufWVsc2V7dS50cmlnZ2VyZWRPbmNlPXRydWV9fWlmKHMuY2hhbmdlZCl7dmFyIHI9YWUobik7aWYoci5sYXN0VmFsdWU9PT1uLnZhbHVlKXtyZXR1cm59ci5sYXN0VmFsdWU9bi52YWx1ZX1pZih1LmRlbGF5ZWQpe2NsZWFyVGltZW91dCh1LmRlbGF5ZWQpfWlmKHUudGhyb3R0bGUpe3JldHVybn1pZihzLnRocm90dGxlPjApe2lmKCF1LnRocm90dGxlKXtvKGEsZSk7dS50aHJvdHRsZT1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7dS50aHJvdHRsZT1udWxsfSxzLnRocm90dGxlKX19ZWxzZSBpZihzLmRlbGF5PjApe3UuZGVsYXllZD1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7byhhLGUpfSxzLmRlbGF5KX1lbHNle2NlKGEsXCJodG14OnRyaWdnZXJcIik7byhhLGUpfX19O2lmKGUubGlzdGVuZXJJbmZvcz09bnVsbCl7ZS5saXN0ZW5lckluZm9zPVtdfWUubGlzdGVuZXJJbmZvcy5wdXNoKHt0cmlnZ2VyOnMudHJpZ2dlcixsaXN0ZW5lcjppLG9uOm59KTtuLmFkZEV2ZW50TGlzdGVuZXIocy50cmlnZ2VyLGkpfSl9dmFyIHZ0PWZhbHNlO3ZhciBkdD1udWxsO2Z1bmN0aW9uIGd0KCl7aWYoIWR0KXtkdD1mdW5jdGlvbigpe3Z0PXRydWV9O3dpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsZHQpO3NldEludGVydmFsKGZ1bmN0aW9uKCl7aWYodnQpe3Z0PWZhbHNlO29lKHJlKCkucXVlcnlTZWxlY3RvckFsbChcIltoeC10cmlnZ2VyPSdyZXZlYWxlZCddLFtkYXRhLWh4LXRyaWdnZXI9J3JldmVhbGVkJ11cIiksZnVuY3Rpb24oZSl7cHQoZSl9KX19LDIwMCl9fWZ1bmN0aW9uIHB0KHQpe2lmKCFvKHQsXCJkYXRhLWh4LXJldmVhbGVkXCIpJiZYKHQpKXt0LnNldEF0dHJpYnV0ZShcImRhdGEtaHgtcmV2ZWFsZWRcIixcInRydWVcIik7dmFyIGU9YWUodCk7aWYoZS5pbml0SGFzaCl7Y2UodCxcInJldmVhbGVkXCIpfWVsc2V7dC5hZGRFdmVudExpc3RlbmVyKFwiaHRteDphZnRlclByb2Nlc3NOb2RlXCIsZnVuY3Rpb24oZSl7Y2UodCxcInJldmVhbGVkXCIpfSx7b25jZTp0cnVlfSl9fX1mdW5jdGlvbiBtdChlLHQscil7dmFyIG49RChyKTtmb3IodmFyIGk9MDtpPG4ubGVuZ3RoO2krKyl7dmFyIGE9bltpXS5zcGxpdCgvOiguKykvKTtpZihhWzBdPT09XCJjb25uZWN0XCIpe3h0KGUsYVsxXSwwKX1pZihhWzBdPT09XCJzZW5kXCIpe2J0KGUpfX19ZnVuY3Rpb24geHQocyxyLG4pe2lmKCFzZShzKSl7cmV0dXJufWlmKHIuaW5kZXhPZihcIi9cIik9PTApe3ZhciBlPWxvY2F0aW9uLmhvc3RuYW1lKyhsb2NhdGlvbi5wb3J0P1wiOlwiK2xvY2F0aW9uLnBvcnQ6XCJcIik7aWYobG9jYXRpb24ucHJvdG9jb2w9PVwiaHR0cHM6XCIpe3I9XCJ3c3M6Ly9cIitlK3J9ZWxzZSBpZihsb2NhdGlvbi5wcm90b2NvbD09XCJodHRwOlwiKXtyPVwid3M6Ly9cIitlK3J9fXZhciB0PVEuY3JlYXRlV2ViU29ja2V0KHIpO3Qub25lcnJvcj1mdW5jdGlvbihlKXtmZShzLFwiaHRteDp3c0Vycm9yXCIse2Vycm9yOmUsc29ja2V0OnR9KTt5dChzKX07dC5vbmNsb3NlPWZ1bmN0aW9uKGUpe2lmKFsxMDA2LDEwMTIsMTAxM10uaW5kZXhPZihlLmNvZGUpPj0wKXt2YXIgdD13dChuKTtzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7eHQocyxyLG4rMSl9LHQpfX07dC5vbm9wZW49ZnVuY3Rpb24oZSl7bj0wfTthZShzKS53ZWJTb2NrZXQ9dDt0LmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsZnVuY3Rpb24oZSl7aWYoeXQocykpe3JldHVybn12YXIgdD1lLmRhdGE7UihzLGZ1bmN0aW9uKGUpe3Q9ZS50cmFuc2Zvcm1SZXNwb25zZSh0LG51bGwscyl9KTt2YXIgcj1UKHMpO3ZhciBuPWwodCk7dmFyIGk9TShuLmNoaWxkcmVuKTtmb3IodmFyIGE9MDthPGkubGVuZ3RoO2ErKyl7dmFyIG89aVthXTtFZSh0ZShvLFwiaHgtc3dhcC1vb2JcIil8fFwidHJ1ZVwiLG8scil9bnIoci50YXNrcyl9KX1mdW5jdGlvbiB5dChlKXtpZighc2UoZSkpe2FlKGUpLndlYlNvY2tldC5jbG9zZSgpO3JldHVybiB0cnVlfX1mdW5jdGlvbiBidCh1KXt2YXIgZj1jKHUsZnVuY3Rpb24oZSl7cmV0dXJuIGFlKGUpLndlYlNvY2tldCE9bnVsbH0pO2lmKGYpe3UuYWRkRXZlbnRMaXN0ZW5lcihpdCh1KVswXS50cmlnZ2VyLGZ1bmN0aW9uKGUpe3ZhciB0PWFlKGYpLndlYlNvY2tldDt2YXIgcj14cih1LGYpO3ZhciBuPWRyKHUsXCJwb3N0XCIpO3ZhciBpPW4uZXJyb3JzO3ZhciBhPW4udmFsdWVzO3ZhciBvPUhyKHUpO3ZhciBzPWxlKGEsbyk7dmFyIGw9eXIocyx1KTtsW1wiSEVBREVSU1wiXT1yO2lmKGkmJmkubGVuZ3RoPjApe2NlKHUsXCJodG14OnZhbGlkYXRpb246aGFsdGVkXCIsaSk7cmV0dXJufXQuc2VuZChKU09OLnN0cmluZ2lmeShsKSk7aWYodXQoZSx1KSl7ZS5wcmV2ZW50RGVmYXVsdCgpfX0pfWVsc2V7ZmUodSxcImh0bXg6bm9XZWJTb2NrZXRTb3VyY2VFcnJvclwiKX19ZnVuY3Rpb24gd3QoZSl7dmFyIHQ9US5jb25maWcud3NSZWNvbm5lY3REZWxheTtpZih0eXBlb2YgdD09PVwiZnVuY3Rpb25cIil7cmV0dXJuIHQoZSl9aWYodD09PVwiZnVsbC1qaXR0ZXJcIil7dmFyIHI9TWF0aC5taW4oZSw2KTt2YXIgbj0xZTMqTWF0aC5wb3coMixyKTtyZXR1cm4gbipNYXRoLnJhbmRvbSgpfWIoJ2h0bXguY29uZmlnLndzUmVjb25uZWN0RGVsYXkgbXVzdCBlaXRoZXIgYmUgYSBmdW5jdGlvbiBvciB0aGUgc3RyaW5nIFwiZnVsbC1qaXR0ZXJcIicpfWZ1bmN0aW9uIFN0KGUsdCxyKXt2YXIgbj1EKHIpO2Zvcih2YXIgaT0wO2k8bi5sZW5ndGg7aSsrKXt2YXIgYT1uW2ldLnNwbGl0KC86KC4rKS8pO2lmKGFbMF09PT1cImNvbm5lY3RcIil7RXQoZSxhWzFdKX1pZihhWzBdPT09XCJzd2FwXCIpe0N0KGUsYVsxXSl9fX1mdW5jdGlvbiBFdCh0LGUpe3ZhciByPVEuY3JlYXRlRXZlbnRTb3VyY2UoZSk7ci5vbmVycm9yPWZ1bmN0aW9uKGUpe2ZlKHQsXCJodG14OnNzZUVycm9yXCIse2Vycm9yOmUsc291cmNlOnJ9KTtUdCh0KX07YWUodCkuc3NlRXZlbnRTb3VyY2U9cn1mdW5jdGlvbiBDdChhLG8pe3ZhciBzPWMoYSxPdCk7aWYocyl7dmFyIGw9YWUocykuc3NlRXZlbnRTb3VyY2U7dmFyIHU9ZnVuY3Rpb24oZSl7aWYoVHQocykpe3JldHVybn1pZighc2UoYSkpe2wucmVtb3ZlRXZlbnRMaXN0ZW5lcihvLHUpO3JldHVybn12YXIgdD1lLmRhdGE7UihhLGZ1bmN0aW9uKGUpe3Q9ZS50cmFuc2Zvcm1SZXNwb25zZSh0LG51bGwsYSl9KTt2YXIgcj13cihhKTt2YXIgbj15ZShhKTt2YXIgaT1UKGEpO2plKHIuc3dhcFN0eWxlLG4sYSx0LGkpO25yKGkudGFza3MpO2NlKGEsXCJodG14OnNzZU1lc3NhZ2VcIixlKX07YWUoYSkuc3NlTGlzdGVuZXI9dTtsLmFkZEV2ZW50TGlzdGVuZXIobyx1KX1lbHNle2ZlKGEsXCJodG14Om5vU1NFU291cmNlRXJyb3JcIil9fWZ1bmN0aW9uIFJ0KGUsdCxyKXt2YXIgbj1jKGUsT3QpO2lmKG4pe3ZhciBpPWFlKG4pLnNzZUV2ZW50U291cmNlO3ZhciBhPWZ1bmN0aW9uKCl7aWYoIVR0KG4pKXtpZihzZShlKSl7dChlKX1lbHNle2kucmVtb3ZlRXZlbnRMaXN0ZW5lcihyLGEpfX19O2FlKGUpLnNzZUxpc3RlbmVyPWE7aS5hZGRFdmVudExpc3RlbmVyKHIsYSl9ZWxzZXtmZShlLFwiaHRteDpub1NTRVNvdXJjZUVycm9yXCIpfX1mdW5jdGlvbiBUdChlKXtpZighc2UoZSkpe2FlKGUpLnNzZUV2ZW50U291cmNlLmNsb3NlKCk7cmV0dXJuIHRydWV9fWZ1bmN0aW9uIE90KGUpe3JldHVybiBhZShlKS5zc2VFdmVudFNvdXJjZSE9bnVsbH1mdW5jdGlvbiBxdChlLHQscixuKXt2YXIgaT1mdW5jdGlvbigpe2lmKCFyLmxvYWRlZCl7ci5sb2FkZWQ9dHJ1ZTt0KGUpfX07aWYobj4wKXtzZXRUaW1lb3V0KGksbil9ZWxzZXtpKCl9fWZ1bmN0aW9uIEh0KHQsaSxlKXt2YXIgYT1mYWxzZTtvZSh3LGZ1bmN0aW9uKHIpe2lmKG8odCxcImh4LVwiK3IpKXt2YXIgbj10ZSh0LFwiaHgtXCIrcik7YT10cnVlO2kucGF0aD1uO2kudmVyYj1yO2UuZm9yRWFjaChmdW5jdGlvbihlKXtMdCh0LGUsaSxmdW5jdGlvbihlLHQpe2lmKHYoZSxRLmNvbmZpZy5kaXNhYmxlU2VsZWN0b3IpKXttKGUpO3JldHVybn1oZShyLG4sZSx0KX0pfSl9fSk7cmV0dXJuIGF9ZnVuY3Rpb24gTHQobixlLHQscil7aWYoZS5zc2VFdmVudCl7UnQobixyLGUuc3NlRXZlbnQpfWVsc2UgaWYoZS50cmlnZ2VyPT09XCJyZXZlYWxlZFwiKXtndCgpO2h0KG4scix0LGUpO3B0KG4pfWVsc2UgaWYoZS50cmlnZ2VyPT09XCJpbnRlcnNlY3RcIil7dmFyIGk9e307aWYoZS5yb290KXtpLnJvb3Q9dWUobixlLnJvb3QpfWlmKGUudGhyZXNob2xkKXtpLnRocmVzaG9sZD1wYXJzZUZsb2F0KGUudGhyZXNob2xkKX12YXIgYT1uZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoZnVuY3Rpb24oZSl7Zm9yKHZhciB0PTA7dDxlLmxlbmd0aDt0Kyspe3ZhciByPWVbdF07aWYoci5pc0ludGVyc2VjdGluZyl7Y2UobixcImludGVyc2VjdFwiKTticmVha319fSxpKTthLm9ic2VydmUobik7aHQobixyLHQsZSl9ZWxzZSBpZihlLnRyaWdnZXI9PT1cImxvYWRcIil7aWYoIWN0KGUsbixXdChcImxvYWRcIix7ZWx0Om59KSkpe3F0KG4scix0LGUuZGVsYXkpfX1lbHNlIGlmKGUucG9sbEludGVydmFsPjApe3QucG9sbGluZz10cnVlO290KG4scixlKX1lbHNle2h0KG4scix0LGUpfX1mdW5jdGlvbiBBdChlKXtpZighZS5odG14RXhlY3V0ZWQmJlEuY29uZmlnLmFsbG93U2NyaXB0VGFncyYmKGUudHlwZT09PVwidGV4dC9qYXZhc2NyaXB0XCJ8fGUudHlwZT09PVwibW9kdWxlXCJ8fGUudHlwZT09PVwiXCIpKXt2YXIgdD1yZSgpLmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7b2UoZS5hdHRyaWJ1dGVzLGZ1bmN0aW9uKGUpe3Quc2V0QXR0cmlidXRlKGUubmFtZSxlLnZhbHVlKX0pO3QudGV4dENvbnRlbnQ9ZS50ZXh0Q29udGVudDt0LmFzeW5jPWZhbHNlO2lmKFEuY29uZmlnLmlubGluZVNjcmlwdE5vbmNlKXt0Lm5vbmNlPVEuY29uZmlnLmlubGluZVNjcmlwdE5vbmNlfXZhciByPWUucGFyZW50RWxlbWVudDt0cnl7ci5pbnNlcnRCZWZvcmUodCxlKX1jYXRjaChlKXtiKGUpfWZpbmFsbHl7aWYoZS5wYXJlbnRFbGVtZW50KXtlLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoZSl9fX19ZnVuY3Rpb24gTnQoZSl7aWYoaChlLFwic2NyaXB0XCIpKXtBdChlKX1vZShmKGUsXCJzY3JpcHRcIiksZnVuY3Rpb24oZSl7QXQoZSl9KX1mdW5jdGlvbiBJdChlKXt2YXIgdD1lLmF0dHJpYnV0ZXM7aWYoIXQpe3JldHVybiBmYWxzZX1mb3IodmFyIHI9MDtyPHQubGVuZ3RoO3IrKyl7dmFyIG49dFtyXS5uYW1lO2lmKGcobixcImh4LW9uOlwiKXx8ZyhuLFwiZGF0YS1oeC1vbjpcIil8fGcobixcImh4LW9uLVwiKXx8ZyhuLFwiZGF0YS1oeC1vbi1cIikpe3JldHVybiB0cnVlfX1yZXR1cm4gZmFsc2V9ZnVuY3Rpb24ga3QoZSl7dmFyIHQ9bnVsbDt2YXIgcj1bXTtpZihJdChlKSl7ci5wdXNoKGUpfWlmKGRvY3VtZW50LmV2YWx1YXRlKXt2YXIgbj1kb2N1bWVudC5ldmFsdWF0ZSgnLi8vKltAKlsgc3RhcnRzLXdpdGgobmFtZSgpLCBcImh4LW9uOlwiKSBvciBzdGFydHMtd2l0aChuYW1lKCksIFwiZGF0YS1oeC1vbjpcIikgb3InKycgc3RhcnRzLXdpdGgobmFtZSgpLCBcImh4LW9uLVwiKSBvciBzdGFydHMtd2l0aChuYW1lKCksIFwiZGF0YS1oeC1vbi1cIikgXV0nLGUpO3doaWxlKHQ9bi5pdGVyYXRlTmV4dCgpKXIucHVzaCh0KX1lbHNlIGlmKHR5cGVvZiBlLmdldEVsZW1lbnRzQnlUYWdOYW1lPT09XCJmdW5jdGlvblwiKXt2YXIgaT1lLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiKlwiKTtmb3IodmFyIGE9MDthPGkubGVuZ3RoO2ErKyl7aWYoSXQoaVthXSkpe3IucHVzaChpW2FdKX19fXJldHVybiByfWZ1bmN0aW9uIFB0KGUpe2lmKGUucXVlcnlTZWxlY3RvckFsbCl7dmFyIHQ9XCIsIFtoeC1ib29zdF0gYSwgW2RhdGEtaHgtYm9vc3RdIGEsIGFbaHgtYm9vc3RdLCBhW2RhdGEtaHgtYm9vc3RdXCI7dmFyIHI9ZS5xdWVyeVNlbGVjdG9yQWxsKGkrdCtcIiwgZm9ybSwgW3R5cGU9J3N1Ym1pdCddLCBbaHgtc3NlXSwgW2RhdGEtaHgtc3NlXSwgW2h4LXdzXSxcIitcIiBbZGF0YS1oeC13c10sIFtoeC1leHRdLCBbZGF0YS1oeC1leHRdLCBbaHgtdHJpZ2dlcl0sIFtkYXRhLWh4LXRyaWdnZXJdLCBbaHgtb25dLCBbZGF0YS1oeC1vbl1cIik7cmV0dXJuIHJ9ZWxzZXtyZXR1cm5bXX19ZnVuY3Rpb24gTXQoZSl7dmFyIHQ9dihlLnRhcmdldCxcImJ1dHRvbiwgaW5wdXRbdHlwZT0nc3VibWl0J11cIik7dmFyIHI9RHQoZSk7aWYocil7ci5sYXN0QnV0dG9uQ2xpY2tlZD10fX1mdW5jdGlvbiBYdChlKXt2YXIgdD1EdChlKTtpZih0KXt0Lmxhc3RCdXR0b25DbGlja2VkPW51bGx9fWZ1bmN0aW9uIER0KGUpe3ZhciB0PXYoZS50YXJnZXQsXCJidXR0b24sIGlucHV0W3R5cGU9J3N1Ym1pdCddXCIpO2lmKCF0KXtyZXR1cm59dmFyIHI9cChcIiNcIitlZSh0LFwiZm9ybVwiKSl8fHYodCxcImZvcm1cIik7aWYoIXIpe3JldHVybn1yZXR1cm4gYWUocil9ZnVuY3Rpb24gVXQoZSl7ZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixNdCk7ZS5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNpblwiLE10KTtlLmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c291dFwiLFh0KX1mdW5jdGlvbiBCdChlKXt2YXIgdD1ZZShlKTt2YXIgcj0wO2Zvcih2YXIgbj0wO248dC5sZW5ndGg7bisrKXtjb25zdCBpPXRbbl07aWYoaT09PVwie1wiKXtyKyt9ZWxzZSBpZihpPT09XCJ9XCIpe3ItLX19cmV0dXJuIHJ9ZnVuY3Rpb24gRnQodCxlLHIpe3ZhciBuPWFlKHQpO2lmKCFBcnJheS5pc0FycmF5KG4ub25IYW5kbGVycykpe24ub25IYW5kbGVycz1bXX12YXIgaTt2YXIgYT1mdW5jdGlvbihlKXtyZXR1cm4gVHIodCxmdW5jdGlvbigpe2lmKCFpKXtpPW5ldyBGdW5jdGlvbihcImV2ZW50XCIscil9aS5jYWxsKHQsZSl9KX07dC5hZGRFdmVudExpc3RlbmVyKGUsYSk7bi5vbkhhbmRsZXJzLnB1c2goe2V2ZW50OmUsbGlzdGVuZXI6YX0pfWZ1bmN0aW9uIFZ0KGUpe3ZhciB0PXRlKGUsXCJoeC1vblwiKTtpZih0KXt2YXIgcj17fTt2YXIgbj10LnNwbGl0KFwiXFxuXCIpO3ZhciBpPW51bGw7dmFyIGE9MDt3aGlsZShuLmxlbmd0aD4wKXt2YXIgbz1uLnNoaWZ0KCk7dmFyIHM9by5tYXRjaCgvXlxccyooW2EtekEtWjpcXC1cXC5dKzopKC4qKS8pO2lmKGE9PT0wJiZzKXtvLnNwbGl0KFwiOlwiKTtpPXNbMV0uc2xpY2UoMCwtMSk7cltpXT1zWzJdfWVsc2V7cltpXSs9b31hKz1CdChvKX1mb3IodmFyIGwgaW4gcil7RnQoZSxsLHJbbF0pfX19ZnVuY3Rpb24ganQoZSl7QWUoZSk7Zm9yKHZhciB0PTA7dDxlLmF0dHJpYnV0ZXMubGVuZ3RoO3QrKyl7dmFyIHI9ZS5hdHRyaWJ1dGVzW3RdLm5hbWU7dmFyIG49ZS5hdHRyaWJ1dGVzW3RdLnZhbHVlO2lmKGcocixcImh4LW9uXCIpfHxnKHIsXCJkYXRhLWh4LW9uXCIpKXt2YXIgaT1yLmluZGV4T2YoXCItb25cIikrMzt2YXIgYT1yLnNsaWNlKGksaSsxKTtpZihhPT09XCItXCJ8fGE9PT1cIjpcIil7dmFyIG89ci5zbGljZShpKzEpO2lmKGcobyxcIjpcIikpe289XCJodG14XCIrb31lbHNlIGlmKGcobyxcIi1cIikpe289XCJodG14OlwiK28uc2xpY2UoMSl9ZWxzZSBpZihnKG8sXCJodG14LVwiKSl7bz1cImh0bXg6XCIrby5zbGljZSg1KX1GdChlLG8sbil9fX19ZnVuY3Rpb24gX3QodCl7aWYodih0LFEuY29uZmlnLmRpc2FibGVTZWxlY3Rvcikpe20odCk7cmV0dXJufXZhciByPWFlKHQpO2lmKHIuaW5pdEhhc2ghPT1MZSh0KSl7TmUodCk7ci5pbml0SGFzaD1MZSh0KTtWdCh0KTtjZSh0LFwiaHRteDpiZWZvcmVQcm9jZXNzTm9kZVwiKTtpZih0LnZhbHVlKXtyLmxhc3RWYWx1ZT10LnZhbHVlfXZhciBlPWl0KHQpO3ZhciBuPUh0KHQscixlKTtpZighbil7aWYobmUodCxcImh4LWJvb3N0XCIpPT09XCJ0cnVlXCIpe2x0KHQscixlKX1lbHNlIGlmKG8odCxcImh4LXRyaWdnZXJcIikpe2UuZm9yRWFjaChmdW5jdGlvbihlKXtMdCh0LGUscixmdW5jdGlvbigpe30pfSl9fWlmKHQudGFnTmFtZT09PVwiRk9STVwifHxlZSh0LFwidHlwZVwiKT09PVwic3VibWl0XCImJm8odCxcImZvcm1cIikpe1V0KHQpfXZhciBpPXRlKHQsXCJoeC1zc2VcIik7aWYoaSl7U3QodCxyLGkpfXZhciBhPXRlKHQsXCJoeC13c1wiKTtpZihhKXttdCh0LHIsYSl9Y2UodCxcImh0bXg6YWZ0ZXJQcm9jZXNzTm9kZVwiKX19ZnVuY3Rpb24genQoZSl7ZT1wKGUpO2lmKHYoZSxRLmNvbmZpZy5kaXNhYmxlU2VsZWN0b3IpKXttKGUpO3JldHVybn1fdChlKTtvZShQdChlKSxmdW5jdGlvbihlKXtfdChlKX0pO29lKGt0KGUpLGp0KX1mdW5jdGlvbiAkdChlKXtyZXR1cm4gZS5yZXBsYWNlKC8oW2EtejAtOV0pKFtBLVpdKS9nLFwiJDEtJDJcIikudG9Mb3dlckNhc2UoKX1mdW5jdGlvbiBXdChlLHQpe3ZhciByO2lmKHdpbmRvdy5DdXN0b21FdmVudCYmdHlwZW9mIHdpbmRvdy5DdXN0b21FdmVudD09PVwiZnVuY3Rpb25cIil7cj1uZXcgQ3VzdG9tRXZlbnQoZSx7YnViYmxlczp0cnVlLGNhbmNlbGFibGU6dHJ1ZSxkZXRhaWw6dH0pfWVsc2V7cj1yZSgpLmNyZWF0ZUV2ZW50KFwiQ3VzdG9tRXZlbnRcIik7ci5pbml0Q3VzdG9tRXZlbnQoZSx0cnVlLHRydWUsdCl9cmV0dXJuIHJ9ZnVuY3Rpb24gZmUoZSx0LHIpe2NlKGUsdCxsZSh7ZXJyb3I6dH0scikpfWZ1bmN0aW9uIEd0KGUpe3JldHVybiBlPT09XCJodG14OmFmdGVyUHJvY2Vzc05vZGVcIn1mdW5jdGlvbiBSKGUsdCl7b2UoRnIoZSksZnVuY3Rpb24oZSl7dHJ5e3QoZSl9Y2F0Y2goZSl7YihlKX19KX1mdW5jdGlvbiBiKGUpe2lmKGNvbnNvbGUuZXJyb3Ipe2NvbnNvbGUuZXJyb3IoZSl9ZWxzZSBpZihjb25zb2xlLmxvZyl7Y29uc29sZS5sb2coXCJFUlJPUjogXCIsZSl9fWZ1bmN0aW9uIGNlKGUsdCxyKXtlPXAoZSk7aWYocj09bnVsbCl7cj17fX1yW1wiZWx0XCJdPWU7dmFyIG49V3QodCxyKTtpZihRLmxvZ2dlciYmIUd0KHQpKXtRLmxvZ2dlcihlLHQscil9aWYoci5lcnJvcil7YihyLmVycm9yKTtjZShlLFwiaHRteDplcnJvclwiLHtlcnJvckluZm86cn0pfXZhciBpPWUuZGlzcGF0Y2hFdmVudChuKTt2YXIgYT0kdCh0KTtpZihpJiZhIT09dCl7dmFyIG89V3QoYSxuLmRldGFpbCk7aT1pJiZlLmRpc3BhdGNoRXZlbnQobyl9UihlLGZ1bmN0aW9uKGUpe2k9aSYmKGUub25FdmVudCh0LG4pIT09ZmFsc2UmJiFuLmRlZmF1bHRQcmV2ZW50ZWQpfSk7cmV0dXJuIGl9dmFyIEp0PWxvY2F0aW9uLnBhdGhuYW1lK2xvY2F0aW9uLnNlYXJjaDtmdW5jdGlvbiBadCgpe3ZhciBlPXJlKCkucXVlcnlTZWxlY3RvcihcIltoeC1oaXN0b3J5LWVsdF0sW2RhdGEtaHgtaGlzdG9yeS1lbHRdXCIpO3JldHVybiBlfHxyZSgpLmJvZHl9ZnVuY3Rpb24gS3QoZSx0LHIsbil7aWYoIVUoKSl7cmV0dXJufWlmKFEuY29uZmlnLmhpc3RvcnlDYWNoZVNpemU8PTApe2xvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwiaHRteC1oaXN0b3J5LWNhY2hlXCIpO3JldHVybn1lPUIoZSk7dmFyIGk9RShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImh0bXgtaGlzdG9yeS1jYWNoZVwiKSl8fFtdO2Zvcih2YXIgYT0wO2E8aS5sZW5ndGg7YSsrKXtpZihpW2FdLnVybD09PWUpe2kuc3BsaWNlKGEsMSk7YnJlYWt9fXZhciBvPXt1cmw6ZSxjb250ZW50OnQsdGl0bGU6cixzY3JvbGw6bn07Y2UocmUoKS5ib2R5LFwiaHRteDpoaXN0b3J5SXRlbUNyZWF0ZWRcIix7aXRlbTpvLGNhY2hlOml9KTtpLnB1c2gobyk7d2hpbGUoaS5sZW5ndGg+US5jb25maWcuaGlzdG9yeUNhY2hlU2l6ZSl7aS5zaGlmdCgpfXdoaWxlKGkubGVuZ3RoPjApe3RyeXtsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImh0bXgtaGlzdG9yeS1jYWNoZVwiLEpTT04uc3RyaW5naWZ5KGkpKTticmVha31jYXRjaChlKXtmZShyZSgpLmJvZHksXCJodG14Omhpc3RvcnlDYWNoZUVycm9yXCIse2NhdXNlOmUsY2FjaGU6aX0pO2kuc2hpZnQoKX19fWZ1bmN0aW9uIFl0KGUpe2lmKCFVKCkpe3JldHVybiBudWxsfWU9QihlKTt2YXIgdD1FKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiaHRteC1oaXN0b3J5LWNhY2hlXCIpKXx8W107Zm9yKHZhciByPTA7cjx0Lmxlbmd0aDtyKyspe2lmKHRbcl0udXJsPT09ZSl7cmV0dXJuIHRbcl19fXJldHVybiBudWxsfWZ1bmN0aW9uIFF0KGUpe3ZhciB0PVEuY29uZmlnLnJlcXVlc3RDbGFzczt2YXIgcj1lLmNsb25lTm9kZSh0cnVlKTtvZShmKHIsXCIuXCIrdCksZnVuY3Rpb24oZSl7bihlLHQpfSk7cmV0dXJuIHIuaW5uZXJIVE1MfWZ1bmN0aW9uIGVyKCl7dmFyIGU9WnQoKTt2YXIgdD1KdHx8bG9jYXRpb24ucGF0aG5hbWUrbG9jYXRpb24uc2VhcmNoO3ZhciByO3RyeXtyPXJlKCkucXVlcnlTZWxlY3RvcignW2h4LWhpc3Rvcnk9XCJmYWxzZVwiIGldLFtkYXRhLWh4LWhpc3Rvcnk9XCJmYWxzZVwiIGldJyl9Y2F0Y2goZSl7cj1yZSgpLnF1ZXJ5U2VsZWN0b3IoJ1toeC1oaXN0b3J5PVwiZmFsc2VcIl0sW2RhdGEtaHgtaGlzdG9yeT1cImZhbHNlXCJdJyl9aWYoIXIpe2NlKHJlKCkuYm9keSxcImh0bXg6YmVmb3JlSGlzdG9yeVNhdmVcIix7cGF0aDp0LGhpc3RvcnlFbHQ6ZX0pO0t0KHQsUXQoZSkscmUoKS50aXRsZSx3aW5kb3cuc2Nyb2xsWSl9aWYoUS5jb25maWcuaGlzdG9yeUVuYWJsZWQpaGlzdG9yeS5yZXBsYWNlU3RhdGUoe2h0bXg6dHJ1ZX0scmUoKS50aXRsZSx3aW5kb3cubG9jYXRpb24uaHJlZil9ZnVuY3Rpb24gdHIoZSl7aWYoUS5jb25maWcuZ2V0Q2FjaGVCdXN0ZXJQYXJhbSl7ZT1lLnJlcGxhY2UoL29yZ1xcLmh0bXhcXC5jYWNoZS1idXN0ZXI9W14mXSomPy8sXCJcIik7aWYoRyhlLFwiJlwiKXx8RyhlLFwiP1wiKSl7ZT1lLnNsaWNlKDAsLTEpfX1pZihRLmNvbmZpZy5oaXN0b3J5RW5hYmxlZCl7aGlzdG9yeS5wdXNoU3RhdGUoe2h0bXg6dHJ1ZX0sXCJcIixlKX1KdD1lfWZ1bmN0aW9uIHJyKGUpe2lmKFEuY29uZmlnLmhpc3RvcnlFbmFibGVkKWhpc3RvcnkucmVwbGFjZVN0YXRlKHtodG14OnRydWV9LFwiXCIsZSk7SnQ9ZX1mdW5jdGlvbiBucihlKXtvZShlLGZ1bmN0aW9uKGUpe2UuY2FsbCgpfSl9ZnVuY3Rpb24gaXIoYSl7dmFyIGU9bmV3IFhNTEh0dHBSZXF1ZXN0O3ZhciBvPXtwYXRoOmEseGhyOmV9O2NlKHJlKCkuYm9keSxcImh0bXg6aGlzdG9yeUNhY2hlTWlzc1wiLG8pO2Uub3BlbihcIkdFVFwiLGEsdHJ1ZSk7ZS5zZXRSZXF1ZXN0SGVhZGVyKFwiSFgtUmVxdWVzdFwiLFwidHJ1ZVwiKTtlLnNldFJlcXVlc3RIZWFkZXIoXCJIWC1IaXN0b3J5LVJlc3RvcmUtUmVxdWVzdFwiLFwidHJ1ZVwiKTtlLnNldFJlcXVlc3RIZWFkZXIoXCJIWC1DdXJyZW50LVVSTFwiLHJlKCkubG9jYXRpb24uaHJlZik7ZS5vbmxvYWQ9ZnVuY3Rpb24oKXtpZih0aGlzLnN0YXR1cz49MjAwJiZ0aGlzLnN0YXR1czw0MDApe2NlKHJlKCkuYm9keSxcImh0bXg6aGlzdG9yeUNhY2hlTWlzc0xvYWRcIixvKTt2YXIgZT1sKHRoaXMucmVzcG9uc2UpO2U9ZS5xdWVyeVNlbGVjdG9yKFwiW2h4LWhpc3RvcnktZWx0XSxbZGF0YS1oeC1oaXN0b3J5LWVsdF1cIil8fGU7dmFyIHQ9WnQoKTt2YXIgcj1UKHQpO3ZhciBuPVZlKHRoaXMucmVzcG9uc2UpO2lmKG4pe3ZhciBpPUMoXCJ0aXRsZVwiKTtpZihpKXtpLmlubmVySFRNTD1ufWVsc2V7d2luZG93LmRvY3VtZW50LnRpdGxlPW59fVVlKHQsZSxyKTtucihyLnRhc2tzKTtKdD1hO2NlKHJlKCkuYm9keSxcImh0bXg6aGlzdG9yeVJlc3RvcmVcIix7cGF0aDphLGNhY2hlTWlzczp0cnVlLHNlcnZlclJlc3BvbnNlOnRoaXMucmVzcG9uc2V9KX1lbHNle2ZlKHJlKCkuYm9keSxcImh0bXg6aGlzdG9yeUNhY2hlTWlzc0xvYWRFcnJvclwiLG8pfX07ZS5zZW5kKCl9ZnVuY3Rpb24gYXIoZSl7ZXIoKTtlPWV8fGxvY2F0aW9uLnBhdGhuYW1lK2xvY2F0aW9uLnNlYXJjaDt2YXIgdD1ZdChlKTtpZih0KXt2YXIgcj1sKHQuY29udGVudCk7dmFyIG49WnQoKTt2YXIgaT1UKG4pO1VlKG4scixpKTtucihpLnRhc2tzKTtkb2N1bWVudC50aXRsZT10LnRpdGxlO3NldFRpbWVvdXQoZnVuY3Rpb24oKXt3aW5kb3cuc2Nyb2xsVG8oMCx0LnNjcm9sbCl9LDApO0p0PWU7Y2UocmUoKS5ib2R5LFwiaHRteDpoaXN0b3J5UmVzdG9yZVwiLHtwYXRoOmUsaXRlbTp0fSl9ZWxzZXtpZihRLmNvbmZpZy5yZWZyZXNoT25IaXN0b3J5TWlzcyl7d2luZG93LmxvY2F0aW9uLnJlbG9hZCh0cnVlKX1lbHNle2lyKGUpfX19ZnVuY3Rpb24gb3IoZSl7dmFyIHQ9bWUoZSxcImh4LWluZGljYXRvclwiKTtpZih0PT1udWxsKXt0PVtlXX1vZSh0LGZ1bmN0aW9uKGUpe3ZhciB0PWFlKGUpO3QucmVxdWVzdENvdW50PSh0LnJlcXVlc3RDb3VudHx8MCkrMTtlLmNsYXNzTGlzdFtcImFkZFwiXS5jYWxsKGUuY2xhc3NMaXN0LFEuY29uZmlnLnJlcXVlc3RDbGFzcyl9KTtyZXR1cm4gdH1mdW5jdGlvbiBzcihlKXt2YXIgdD1tZShlLFwiaHgtZGlzYWJsZWQtZWx0XCIpO2lmKHQ9PW51bGwpe3Q9W119b2UodCxmdW5jdGlvbihlKXt2YXIgdD1hZShlKTt0LnJlcXVlc3RDb3VudD0odC5yZXF1ZXN0Q291bnR8fDApKzE7ZS5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLFwiXCIpfSk7cmV0dXJuIHR9ZnVuY3Rpb24gbHIoZSx0KXtvZShlLGZ1bmN0aW9uKGUpe3ZhciB0PWFlKGUpO3QucmVxdWVzdENvdW50PSh0LnJlcXVlc3RDb3VudHx8MCktMTtpZih0LnJlcXVlc3RDb3VudD09PTApe2UuY2xhc3NMaXN0W1wicmVtb3ZlXCJdLmNhbGwoZS5jbGFzc0xpc3QsUS5jb25maWcucmVxdWVzdENsYXNzKX19KTtvZSh0LGZ1bmN0aW9uKGUpe3ZhciB0PWFlKGUpO3QucmVxdWVzdENvdW50PSh0LnJlcXVlc3RDb3VudHx8MCktMTtpZih0LnJlcXVlc3RDb3VudD09PTApe2UucmVtb3ZlQXR0cmlidXRlKFwiZGlzYWJsZWRcIil9fSl9ZnVuY3Rpb24gdXIoZSx0KXtmb3IodmFyIHI9MDtyPGUubGVuZ3RoO3IrKyl7dmFyIG49ZVtyXTtpZihuLmlzU2FtZU5vZGUodCkpe3JldHVybiB0cnVlfX1yZXR1cm4gZmFsc2V9ZnVuY3Rpb24gZnIoZSl7aWYoZS5uYW1lPT09XCJcInx8ZS5uYW1lPT1udWxsfHxlLmRpc2FibGVkfHx2KGUsXCJmaWVsZHNldFtkaXNhYmxlZF1cIikpe3JldHVybiBmYWxzZX1pZihlLnR5cGU9PT1cImJ1dHRvblwifHxlLnR5cGU9PT1cInN1Ym1pdFwifHxlLnRhZ05hbWU9PT1cImltYWdlXCJ8fGUudGFnTmFtZT09PVwicmVzZXRcInx8ZS50YWdOYW1lPT09XCJmaWxlXCIpe3JldHVybiBmYWxzZX1pZihlLnR5cGU9PT1cImNoZWNrYm94XCJ8fGUudHlwZT09PVwicmFkaW9cIil7cmV0dXJuIGUuY2hlY2tlZH1yZXR1cm4gdHJ1ZX1mdW5jdGlvbiBjcihlLHQscil7aWYoZSE9bnVsbCYmdCE9bnVsbCl7dmFyIG49cltlXTtpZihuPT09dW5kZWZpbmVkKXtyW2VdPXR9ZWxzZSBpZihBcnJheS5pc0FycmF5KG4pKXtpZihBcnJheS5pc0FycmF5KHQpKXtyW2VdPW4uY29uY2F0KHQpfWVsc2V7bi5wdXNoKHQpfX1lbHNle2lmKEFycmF5LmlzQXJyYXkodCkpe3JbZV09W25dLmNvbmNhdCh0KX1lbHNle3JbZV09W24sdF19fX19ZnVuY3Rpb24gaHIodCxyLG4sZSxpKXtpZihlPT1udWxsfHx1cih0LGUpKXtyZXR1cm59ZWxzZXt0LnB1c2goZSl9aWYoZnIoZSkpe3ZhciBhPWVlKGUsXCJuYW1lXCIpO3ZhciBvPWUudmFsdWU7aWYoZS5tdWx0aXBsZSYmZS50YWdOYW1lPT09XCJTRUxFQ1RcIil7bz1NKGUucXVlcnlTZWxlY3RvckFsbChcIm9wdGlvbjpjaGVja2VkXCIpKS5tYXAoZnVuY3Rpb24oZSl7cmV0dXJuIGUudmFsdWV9KX1pZihlLmZpbGVzKXtvPU0oZS5maWxlcyl9Y3IoYSxvLHIpO2lmKGkpe3ZyKGUsbil9fWlmKGgoZSxcImZvcm1cIikpe3ZhciBzPWUuZWxlbWVudHM7b2UocyxmdW5jdGlvbihlKXtocih0LHIsbixlLGkpfSl9fWZ1bmN0aW9uIHZyKGUsdCl7aWYoZS53aWxsVmFsaWRhdGUpe2NlKGUsXCJodG14OnZhbGlkYXRpb246dmFsaWRhdGVcIik7aWYoIWUuY2hlY2tWYWxpZGl0eSgpKXt0LnB1c2goe2VsdDplLG1lc3NhZ2U6ZS52YWxpZGF0aW9uTWVzc2FnZSx2YWxpZGl0eTplLnZhbGlkaXR5fSk7Y2UoZSxcImh0bXg6dmFsaWRhdGlvbjpmYWlsZWRcIix7bWVzc2FnZTplLnZhbGlkYXRpb25NZXNzYWdlLHZhbGlkaXR5OmUudmFsaWRpdHl9KX19fWZ1bmN0aW9uIGRyKGUsdCl7dmFyIHI9W107dmFyIG49e307dmFyIGk9e307dmFyIGE9W107dmFyIG89YWUoZSk7aWYoby5sYXN0QnV0dG9uQ2xpY2tlZCYmIXNlKG8ubGFzdEJ1dHRvbkNsaWNrZWQpKXtvLmxhc3RCdXR0b25DbGlja2VkPW51bGx9dmFyIHM9aChlLFwiZm9ybVwiKSYmZS5ub1ZhbGlkYXRlIT09dHJ1ZXx8dGUoZSxcImh4LXZhbGlkYXRlXCIpPT09XCJ0cnVlXCI7aWYoby5sYXN0QnV0dG9uQ2xpY2tlZCl7cz1zJiZvLmxhc3RCdXR0b25DbGlja2VkLmZvcm1Ob1ZhbGlkYXRlIT09dHJ1ZX1pZih0IT09XCJnZXRcIil7aHIocixpLGEsdihlLFwiZm9ybVwiKSxzKX1ocihyLG4sYSxlLHMpO2lmKG8ubGFzdEJ1dHRvbkNsaWNrZWR8fGUudGFnTmFtZT09PVwiQlVUVE9OXCJ8fGUudGFnTmFtZT09PVwiSU5QVVRcIiYmZWUoZSxcInR5cGVcIik9PT1cInN1Ym1pdFwiKXt2YXIgbD1vLmxhc3RCdXR0b25DbGlja2VkfHxlO3ZhciB1PWVlKGwsXCJuYW1lXCIpO2NyKHUsbC52YWx1ZSxpKX12YXIgZj1tZShlLFwiaHgtaW5jbHVkZVwiKTtvZShmLGZ1bmN0aW9uKGUpe2hyKHIsbixhLGUscyk7aWYoIWgoZSxcImZvcm1cIikpe29lKGUucXVlcnlTZWxlY3RvckFsbChydCksZnVuY3Rpb24oZSl7aHIocixuLGEsZSxzKX0pfX0pO249bGUobixpKTtyZXR1cm57ZXJyb3JzOmEsdmFsdWVzOm59fWZ1bmN0aW9uIGdyKGUsdCxyKXtpZihlIT09XCJcIil7ZSs9XCImXCJ9aWYoU3RyaW5nKHIpPT09XCJbb2JqZWN0IE9iamVjdF1cIil7cj1KU09OLnN0cmluZ2lmeShyKX12YXIgbj1lbmNvZGVVUklDb21wb25lbnQocik7ZSs9ZW5jb2RlVVJJQ29tcG9uZW50KHQpK1wiPVwiK247cmV0dXJuIGV9ZnVuY3Rpb24gcHIoZSl7dmFyIHQ9XCJcIjtmb3IodmFyIHIgaW4gZSl7aWYoZS5oYXNPd25Qcm9wZXJ0eShyKSl7dmFyIG49ZVtyXTtpZihBcnJheS5pc0FycmF5KG4pKXtvZShuLGZ1bmN0aW9uKGUpe3Q9Z3IodCxyLGUpfSl9ZWxzZXt0PWdyKHQscixuKX19fXJldHVybiB0fWZ1bmN0aW9uIG1yKGUpe3ZhciB0PW5ldyBGb3JtRGF0YTtmb3IodmFyIHIgaW4gZSl7aWYoZS5oYXNPd25Qcm9wZXJ0eShyKSl7dmFyIG49ZVtyXTtpZihBcnJheS5pc0FycmF5KG4pKXtvZShuLGZ1bmN0aW9uKGUpe3QuYXBwZW5kKHIsZSl9KX1lbHNle3QuYXBwZW5kKHIsbil9fX1yZXR1cm4gdH1mdW5jdGlvbiB4cihlLHQscil7dmFyIG49e1wiSFgtUmVxdWVzdFwiOlwidHJ1ZVwiLFwiSFgtVHJpZ2dlclwiOmVlKGUsXCJpZFwiKSxcIkhYLVRyaWdnZXItTmFtZVwiOmVlKGUsXCJuYW1lXCIpLFwiSFgtVGFyZ2V0XCI6dGUodCxcImlkXCIpLFwiSFgtQ3VycmVudC1VUkxcIjpyZSgpLmxvY2F0aW9uLmhyZWZ9O1JyKGUsXCJoeC1oZWFkZXJzXCIsZmFsc2Usbik7aWYociE9PXVuZGVmaW5lZCl7bltcIkhYLVByb21wdFwiXT1yfWlmKGFlKGUpLmJvb3N0ZWQpe25bXCJIWC1Cb29zdGVkXCJdPVwidHJ1ZVwifXJldHVybiBufWZ1bmN0aW9uIHlyKHQsZSl7dmFyIHI9bmUoZSxcImh4LXBhcmFtc1wiKTtpZihyKXtpZihyPT09XCJub25lXCIpe3JldHVybnt9fWVsc2UgaWYocj09PVwiKlwiKXtyZXR1cm4gdH1lbHNlIGlmKHIuaW5kZXhPZihcIm5vdCBcIik9PT0wKXtvZShyLnN1YnN0cig0KS5zcGxpdChcIixcIiksZnVuY3Rpb24oZSl7ZT1lLnRyaW0oKTtkZWxldGUgdFtlXX0pO3JldHVybiB0fWVsc2V7dmFyIG49e307b2Uoci5zcGxpdChcIixcIiksZnVuY3Rpb24oZSl7ZT1lLnRyaW0oKTtuW2VdPXRbZV19KTtyZXR1cm4gbn19ZWxzZXtyZXR1cm4gdH19ZnVuY3Rpb24gYnIoZSl7cmV0dXJuIGVlKGUsXCJocmVmXCIpJiZlZShlLFwiaHJlZlwiKS5pbmRleE9mKFwiI1wiKT49MH1mdW5jdGlvbiB3cihlLHQpe3ZhciByPXQ/dDpuZShlLFwiaHgtc3dhcFwiKTt2YXIgbj17c3dhcFN0eWxlOmFlKGUpLmJvb3N0ZWQ/XCJpbm5lckhUTUxcIjpRLmNvbmZpZy5kZWZhdWx0U3dhcFN0eWxlLHN3YXBEZWxheTpRLmNvbmZpZy5kZWZhdWx0U3dhcERlbGF5LHNldHRsZURlbGF5OlEuY29uZmlnLmRlZmF1bHRTZXR0bGVEZWxheX07aWYoUS5jb25maWcuc2Nyb2xsSW50b1ZpZXdPbkJvb3N0JiZhZShlKS5ib29zdGVkJiYhYnIoZSkpe25bXCJzaG93XCJdPVwidG9wXCJ9aWYocil7dmFyIGk9RChyKTtpZihpLmxlbmd0aD4wKXtmb3IodmFyIGE9MDthPGkubGVuZ3RoO2ErKyl7dmFyIG89aVthXTtpZihvLmluZGV4T2YoXCJzd2FwOlwiKT09PTApe25bXCJzd2FwRGVsYXlcIl09ZChvLnN1YnN0cig1KSl9ZWxzZSBpZihvLmluZGV4T2YoXCJzZXR0bGU6XCIpPT09MCl7bltcInNldHRsZURlbGF5XCJdPWQoby5zdWJzdHIoNykpfWVsc2UgaWYoby5pbmRleE9mKFwidHJhbnNpdGlvbjpcIik9PT0wKXtuW1widHJhbnNpdGlvblwiXT1vLnN1YnN0cigxMSk9PT1cInRydWVcIn1lbHNlIGlmKG8uaW5kZXhPZihcImlnbm9yZVRpdGxlOlwiKT09PTApe25bXCJpZ25vcmVUaXRsZVwiXT1vLnN1YnN0cigxMik9PT1cInRydWVcIn1lbHNlIGlmKG8uaW5kZXhPZihcInNjcm9sbDpcIik9PT0wKXt2YXIgcz1vLnN1YnN0cig3KTt2YXIgbD1zLnNwbGl0KFwiOlwiKTt2YXIgdT1sLnBvcCgpO3ZhciBmPWwubGVuZ3RoPjA/bC5qb2luKFwiOlwiKTpudWxsO25bXCJzY3JvbGxcIl09dTtuW1wic2Nyb2xsVGFyZ2V0XCJdPWZ9ZWxzZSBpZihvLmluZGV4T2YoXCJzaG93OlwiKT09PTApe3ZhciBjPW8uc3Vic3RyKDUpO3ZhciBsPWMuc3BsaXQoXCI6XCIpO3ZhciBoPWwucG9wKCk7dmFyIGY9bC5sZW5ndGg+MD9sLmpvaW4oXCI6XCIpOm51bGw7bltcInNob3dcIl09aDtuW1wic2hvd1RhcmdldFwiXT1mfWVsc2UgaWYoby5pbmRleE9mKFwiZm9jdXMtc2Nyb2xsOlwiKT09PTApe3ZhciB2PW8uc3Vic3RyKFwiZm9jdXMtc2Nyb2xsOlwiLmxlbmd0aCk7bltcImZvY3VzU2Nyb2xsXCJdPXY9PVwidHJ1ZVwifWVsc2UgaWYoYT09MCl7bltcInN3YXBTdHlsZVwiXT1vfWVsc2V7YihcIlVua25vd24gbW9kaWZpZXIgaW4gaHgtc3dhcDogXCIrbyl9fX19cmV0dXJuIG59ZnVuY3Rpb24gU3IoZSl7cmV0dXJuIG5lKGUsXCJoeC1lbmNvZGluZ1wiKT09PVwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwifHxoKGUsXCJmb3JtXCIpJiZlZShlLFwiZW5jdHlwZVwiKT09PVwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwifWZ1bmN0aW9uIEVyKHQscixuKXt2YXIgaT1udWxsO1IocixmdW5jdGlvbihlKXtpZihpPT1udWxsKXtpPWUuZW5jb2RlUGFyYW1ldGVycyh0LG4scil9fSk7aWYoaSE9bnVsbCl7cmV0dXJuIGl9ZWxzZXtpZihTcihyKSl7cmV0dXJuIG1yKG4pfWVsc2V7cmV0dXJuIHByKG4pfX19ZnVuY3Rpb24gVChlKXtyZXR1cm57dGFza3M6W10sZWx0czpbZV19fWZ1bmN0aW9uIENyKGUsdCl7dmFyIHI9ZVswXTt2YXIgbj1lW2UubGVuZ3RoLTFdO2lmKHQuc2Nyb2xsKXt2YXIgaT1udWxsO2lmKHQuc2Nyb2xsVGFyZ2V0KXtpPXVlKHIsdC5zY3JvbGxUYXJnZXQpfWlmKHQuc2Nyb2xsPT09XCJ0b3BcIiYmKHJ8fGkpKXtpPWl8fHI7aS5zY3JvbGxUb3A9MH1pZih0LnNjcm9sbD09PVwiYm90dG9tXCImJihufHxpKSl7aT1pfHxuO2kuc2Nyb2xsVG9wPWkuc2Nyb2xsSGVpZ2h0fX1pZih0LnNob3cpe3ZhciBpPW51bGw7aWYodC5zaG93VGFyZ2V0KXt2YXIgYT10LnNob3dUYXJnZXQ7aWYodC5zaG93VGFyZ2V0PT09XCJ3aW5kb3dcIil7YT1cImJvZHlcIn1pPXVlKHIsYSl9aWYodC5zaG93PT09XCJ0b3BcIiYmKHJ8fGkpKXtpPWl8fHI7aS5zY3JvbGxJbnRvVmlldyh7YmxvY2s6XCJzdGFydFwiLGJlaGF2aW9yOlEuY29uZmlnLnNjcm9sbEJlaGF2aW9yfSl9aWYodC5zaG93PT09XCJib3R0b21cIiYmKG58fGkpKXtpPWl8fG47aS5zY3JvbGxJbnRvVmlldyh7YmxvY2s6XCJlbmRcIixiZWhhdmlvcjpRLmNvbmZpZy5zY3JvbGxCZWhhdmlvcn0pfX19ZnVuY3Rpb24gUnIoZSx0LHIsbil7aWYobj09bnVsbCl7bj17fX1pZihlPT1udWxsKXtyZXR1cm4gbn12YXIgaT10ZShlLHQpO2lmKGkpe3ZhciBhPWkudHJpbSgpO3ZhciBvPXI7aWYoYT09PVwidW5zZXRcIil7cmV0dXJuIG51bGx9aWYoYS5pbmRleE9mKFwiamF2YXNjcmlwdDpcIik9PT0wKXthPWEuc3Vic3RyKDExKTtvPXRydWV9ZWxzZSBpZihhLmluZGV4T2YoXCJqczpcIik9PT0wKXthPWEuc3Vic3RyKDMpO289dHJ1ZX1pZihhLmluZGV4T2YoXCJ7XCIpIT09MCl7YT1cIntcIithK1wifVwifXZhciBzO2lmKG8pe3M9VHIoZSxmdW5jdGlvbigpe3JldHVybiBGdW5jdGlvbihcInJldHVybiAoXCIrYStcIilcIikoKX0se30pfWVsc2V7cz1FKGEpfWZvcih2YXIgbCBpbiBzKXtpZihzLmhhc093blByb3BlcnR5KGwpKXtpZihuW2xdPT1udWxsKXtuW2xdPXNbbF19fX19cmV0dXJuIFJyKHUoZSksdCxyLG4pfWZ1bmN0aW9uIFRyKGUsdCxyKXtpZihRLmNvbmZpZy5hbGxvd0V2YWwpe3JldHVybiB0KCl9ZWxzZXtmZShlLFwiaHRteDpldmFsRGlzYWxsb3dlZEVycm9yXCIpO3JldHVybiByfX1mdW5jdGlvbiBPcihlLHQpe3JldHVybiBScihlLFwiaHgtdmFyc1wiLHRydWUsdCl9ZnVuY3Rpb24gcXIoZSx0KXtyZXR1cm4gUnIoZSxcImh4LXZhbHNcIixmYWxzZSx0KX1mdW5jdGlvbiBIcihlKXtyZXR1cm4gbGUoT3IoZSkscXIoZSkpfWZ1bmN0aW9uIExyKHQscixuKXtpZihuIT09bnVsbCl7dHJ5e3Quc2V0UmVxdWVzdEhlYWRlcihyLG4pfWNhdGNoKGUpe3Quc2V0UmVxdWVzdEhlYWRlcihyLGVuY29kZVVSSUNvbXBvbmVudChuKSk7dC5zZXRSZXF1ZXN0SGVhZGVyKHIrXCItVVJJLUF1dG9FbmNvZGVkXCIsXCJ0cnVlXCIpfX19ZnVuY3Rpb24gQXIodCl7aWYodC5yZXNwb25zZVVSTCYmdHlwZW9mIFVSTCE9PVwidW5kZWZpbmVkXCIpe3RyeXt2YXIgZT1uZXcgVVJMKHQucmVzcG9uc2VVUkwpO3JldHVybiBlLnBhdGhuYW1lK2Uuc2VhcmNofWNhdGNoKGUpe2ZlKHJlKCkuYm9keSxcImh0bXg6YmFkUmVzcG9uc2VVcmxcIix7dXJsOnQucmVzcG9uc2VVUkx9KX19fWZ1bmN0aW9uIE8oZSx0KXtyZXR1cm4gdC50ZXN0KGUuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCkpfWZ1bmN0aW9uIE5yKGUsdCxyKXtlPWUudG9Mb3dlckNhc2UoKTtpZihyKXtpZihyIGluc3RhbmNlb2YgRWxlbWVudHx8SShyLFwiU3RyaW5nXCIpKXtyZXR1cm4gaGUoZSx0LG51bGwsbnVsbCx7dGFyZ2V0T3ZlcnJpZGU6cChyKSxyZXR1cm5Qcm9taXNlOnRydWV9KX1lbHNle3JldHVybiBoZShlLHQscChyLnNvdXJjZSksci5ldmVudCx7aGFuZGxlcjpyLmhhbmRsZXIsaGVhZGVyczpyLmhlYWRlcnMsdmFsdWVzOnIudmFsdWVzLHRhcmdldE92ZXJyaWRlOnAoci50YXJnZXQpLHN3YXBPdmVycmlkZTpyLnN3YXAsc2VsZWN0OnIuc2VsZWN0LHJldHVyblByb21pc2U6dHJ1ZX0pfX1lbHNle3JldHVybiBoZShlLHQsbnVsbCxudWxsLHtyZXR1cm5Qcm9taXNlOnRydWV9KX19ZnVuY3Rpb24gSXIoZSl7dmFyIHQ9W107d2hpbGUoZSl7dC5wdXNoKGUpO2U9ZS5wYXJlbnRFbGVtZW50fXJldHVybiB0fWZ1bmN0aW9uIGtyKGUsdCxyKXt2YXIgbjt2YXIgaTtpZih0eXBlb2YgVVJMPT09XCJmdW5jdGlvblwiKXtpPW5ldyBVUkwodCxkb2N1bWVudC5sb2NhdGlvbi5ocmVmKTt2YXIgYT1kb2N1bWVudC5sb2NhdGlvbi5vcmlnaW47bj1hPT09aS5vcmlnaW59ZWxzZXtpPXQ7bj1nKHQsZG9jdW1lbnQubG9jYXRpb24ub3JpZ2luKX1pZihRLmNvbmZpZy5zZWxmUmVxdWVzdHNPbmx5KXtpZighbil7cmV0dXJuIGZhbHNlfX1yZXR1cm4gY2UoZSxcImh0bXg6dmFsaWRhdGVVcmxcIixsZSh7dXJsOmksc2FtZUhvc3Q6bn0scikpfWZ1bmN0aW9uIGhlKHQscixuLGksYSxlKXt2YXIgbz1udWxsO3ZhciBzPW51bGw7YT1hIT1udWxsP2E6e307aWYoYS5yZXR1cm5Qcm9taXNlJiZ0eXBlb2YgUHJvbWlzZSE9PVwidW5kZWZpbmVkXCIpe3ZhciBsPW5ldyBQcm9taXNlKGZ1bmN0aW9uKGUsdCl7bz1lO3M9dH0pfWlmKG49PW51bGwpe249cmUoKS5ib2R5fXZhciBNPWEuaGFuZGxlcnx8TXI7dmFyIFg9YS5zZWxlY3R8fG51bGw7aWYoIXNlKG4pKXtpZShvKTtyZXR1cm4gbH12YXIgdT1hLnRhcmdldE92ZXJyaWRlfHx5ZShuKTtpZih1PT1udWxsfHx1PT1wZSl7ZmUobixcImh0bXg6dGFyZ2V0RXJyb3JcIix7dGFyZ2V0OnRlKG4sXCJoeC10YXJnZXRcIil9KTtpZShzKTtyZXR1cm4gbH12YXIgZj1hZShuKTt2YXIgYz1mLmxhc3RCdXR0b25DbGlja2VkO2lmKGMpe3ZhciBoPWVlKGMsXCJmb3JtYWN0aW9uXCIpO2lmKGghPW51bGwpe3I9aH12YXIgdj1lZShjLFwiZm9ybW1ldGhvZFwiKTtpZih2IT1udWxsKXtpZih2LnRvTG93ZXJDYXNlKCkhPT1cImRpYWxvZ1wiKXt0PXZ9fX12YXIgZD1uZShuLFwiaHgtY29uZmlybVwiKTtpZihlPT09dW5kZWZpbmVkKXt2YXIgRD1mdW5jdGlvbihlKXtyZXR1cm4gaGUodCxyLG4saSxhLCEhZSl9O3ZhciBVPXt0YXJnZXQ6dSxlbHQ6bixwYXRoOnIsdmVyYjp0LHRyaWdnZXJpbmdFdmVudDppLGV0YzphLGlzc3VlUmVxdWVzdDpELHF1ZXN0aW9uOmR9O2lmKGNlKG4sXCJodG14OmNvbmZpcm1cIixVKT09PWZhbHNlKXtpZShvKTtyZXR1cm4gbH19dmFyIGc9bjt2YXIgcD1uZShuLFwiaHgtc3luY1wiKTt2YXIgbT1udWxsO3ZhciB4PWZhbHNlO2lmKHApe3ZhciBCPXAuc3BsaXQoXCI6XCIpO3ZhciBGPUJbMF0udHJpbSgpO2lmKEY9PT1cInRoaXNcIil7Zz14ZShuLFwiaHgtc3luY1wiKX1lbHNle2c9dWUobixGKX1wPShCWzFdfHxcImRyb3BcIikudHJpbSgpO2Y9YWUoZyk7aWYocD09PVwiZHJvcFwiJiZmLnhociYmZi5hYm9ydGFibGUhPT10cnVlKXtpZShvKTtyZXR1cm4gbH1lbHNlIGlmKHA9PT1cImFib3J0XCIpe2lmKGYueGhyKXtpZShvKTtyZXR1cm4gbH1lbHNle3g9dHJ1ZX19ZWxzZSBpZihwPT09XCJyZXBsYWNlXCIpe2NlKGcsXCJodG14OmFib3J0XCIpfWVsc2UgaWYocC5pbmRleE9mKFwicXVldWVcIik9PT0wKXt2YXIgVj1wLnNwbGl0KFwiIFwiKTttPShWWzFdfHxcImxhc3RcIikudHJpbSgpfX1pZihmLnhocil7aWYoZi5hYm9ydGFibGUpe2NlKGcsXCJodG14OmFib3J0XCIpfWVsc2V7aWYobT09bnVsbCl7aWYoaSl7dmFyIHk9YWUoaSk7aWYoeSYmeS50cmlnZ2VyU3BlYyYmeS50cmlnZ2VyU3BlYy5xdWV1ZSl7bT15LnRyaWdnZXJTcGVjLnF1ZXVlfX1pZihtPT1udWxsKXttPVwibGFzdFwifX1pZihmLnF1ZXVlZFJlcXVlc3RzPT1udWxsKXtmLnF1ZXVlZFJlcXVlc3RzPVtdfWlmKG09PT1cImZpcnN0XCImJmYucXVldWVkUmVxdWVzdHMubGVuZ3RoPT09MCl7Zi5xdWV1ZWRSZXF1ZXN0cy5wdXNoKGZ1bmN0aW9uKCl7aGUodCxyLG4saSxhKX0pfWVsc2UgaWYobT09PVwiYWxsXCIpe2YucXVldWVkUmVxdWVzdHMucHVzaChmdW5jdGlvbigpe2hlKHQscixuLGksYSl9KX1lbHNlIGlmKG09PT1cImxhc3RcIil7Zi5xdWV1ZWRSZXF1ZXN0cz1bXTtmLnF1ZXVlZFJlcXVlc3RzLnB1c2goZnVuY3Rpb24oKXtoZSh0LHIsbixpLGEpfSl9aWUobyk7cmV0dXJuIGx9fXZhciBiPW5ldyBYTUxIdHRwUmVxdWVzdDtmLnhocj1iO2YuYWJvcnRhYmxlPXg7dmFyIHc9ZnVuY3Rpb24oKXtmLnhocj1udWxsO2YuYWJvcnRhYmxlPWZhbHNlO2lmKGYucXVldWVkUmVxdWVzdHMhPW51bGwmJmYucXVldWVkUmVxdWVzdHMubGVuZ3RoPjApe3ZhciBlPWYucXVldWVkUmVxdWVzdHMuc2hpZnQoKTtlKCl9fTt2YXIgaj1uZShuLFwiaHgtcHJvbXB0XCIpO2lmKGope3ZhciBTPXByb21wdChqKTtpZihTPT09bnVsbHx8IWNlKG4sXCJodG14OnByb21wdFwiLHtwcm9tcHQ6Uyx0YXJnZXQ6dX0pKXtpZShvKTt3KCk7cmV0dXJuIGx9fWlmKGQmJiFlKXtpZighY29uZmlybShkKSl7aWUobyk7dygpO3JldHVybiBsfX12YXIgRT14cihuLHUsUyk7aWYodCE9PVwiZ2V0XCImJiFTcihuKSl7RVtcIkNvbnRlbnQtVHlwZVwiXT1cImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwifWlmKGEuaGVhZGVycyl7RT1sZShFLGEuaGVhZGVycyl9dmFyIF89ZHIobix0KTt2YXIgQz1fLmVycm9yczt2YXIgUj1fLnZhbHVlcztpZihhLnZhbHVlcyl7Uj1sZShSLGEudmFsdWVzKX12YXIgej1IcihuKTt2YXIgJD1sZShSLHopO3ZhciBUPXlyKCQsbik7aWYoUS5jb25maWcuZ2V0Q2FjaGVCdXN0ZXJQYXJhbSYmdD09PVwiZ2V0XCIpe1RbXCJvcmcuaHRteC5jYWNoZS1idXN0ZXJcIl09ZWUodSxcImlkXCIpfHxcInRydWVcIn1pZihyPT1udWxsfHxyPT09XCJcIil7cj1yZSgpLmxvY2F0aW9uLmhyZWZ9dmFyIE89UnIobixcImh4LXJlcXVlc3RcIik7dmFyIFc9YWUobikuYm9vc3RlZDt2YXIgcT1RLmNvbmZpZy5tZXRob2RzVGhhdFVzZVVybFBhcmFtcy5pbmRleE9mKHQpPj0wO3ZhciBIPXtib29zdGVkOlcsdXNlVXJsUGFyYW1zOnEscGFyYW1ldGVyczpULHVuZmlsdGVyZWRQYXJhbWV0ZXJzOiQsaGVhZGVyczpFLHRhcmdldDp1LHZlcmI6dCxlcnJvcnM6Qyx3aXRoQ3JlZGVudGlhbHM6YS5jcmVkZW50aWFsc3x8Ty5jcmVkZW50aWFsc3x8US5jb25maWcud2l0aENyZWRlbnRpYWxzLHRpbWVvdXQ6YS50aW1lb3V0fHxPLnRpbWVvdXR8fFEuY29uZmlnLnRpbWVvdXQscGF0aDpyLHRyaWdnZXJpbmdFdmVudDppfTtpZighY2UobixcImh0bXg6Y29uZmlnUmVxdWVzdFwiLEgpKXtpZShvKTt3KCk7cmV0dXJuIGx9cj1ILnBhdGg7dD1ILnZlcmI7RT1ILmhlYWRlcnM7VD1ILnBhcmFtZXRlcnM7Qz1ILmVycm9ycztxPUgudXNlVXJsUGFyYW1zO2lmKEMmJkMubGVuZ3RoPjApe2NlKG4sXCJodG14OnZhbGlkYXRpb246aGFsdGVkXCIsSCk7aWUobyk7dygpO3JldHVybiBsfXZhciBHPXIuc3BsaXQoXCIjXCIpO3ZhciBKPUdbMF07dmFyIEw9R1sxXTt2YXIgQT1yO2lmKHEpe0E9Sjt2YXIgWj1PYmplY3Qua2V5cyhUKS5sZW5ndGghPT0wO2lmKFope2lmKEEuaW5kZXhPZihcIj9cIik8MCl7QSs9XCI/XCJ9ZWxzZXtBKz1cIiZcIn1BKz1wcihUKTtpZihMKXtBKz1cIiNcIitMfX19aWYoIWtyKG4sQSxIKSl7ZmUobixcImh0bXg6aW52YWxpZFBhdGhcIixIKTtpZShzKTtyZXR1cm4gbH1iLm9wZW4odC50b1VwcGVyQ2FzZSgpLEEsdHJ1ZSk7Yi5vdmVycmlkZU1pbWVUeXBlKFwidGV4dC9odG1sXCIpO2Iud2l0aENyZWRlbnRpYWxzPUgud2l0aENyZWRlbnRpYWxzO2IudGltZW91dD1ILnRpbWVvdXQ7aWYoTy5ub0hlYWRlcnMpe31lbHNle2Zvcih2YXIgTiBpbiBFKXtpZihFLmhhc093blByb3BlcnR5KE4pKXt2YXIgSz1FW05dO0xyKGIsTixLKX19fXZhciBJPXt4aHI6Yix0YXJnZXQ6dSxyZXF1ZXN0Q29uZmlnOkgsZXRjOmEsYm9vc3RlZDpXLHNlbGVjdDpYLHBhdGhJbmZvOntyZXF1ZXN0UGF0aDpyLGZpbmFsUmVxdWVzdFBhdGg6QSxhbmNob3I6TH19O2Iub25sb2FkPWZ1bmN0aW9uKCl7dHJ5e3ZhciBlPUlyKG4pO0kucGF0aEluZm8ucmVzcG9uc2VQYXRoPUFyKGIpO00obixJKTtscihrLFApO2NlKG4sXCJodG14OmFmdGVyUmVxdWVzdFwiLEkpO2NlKG4sXCJodG14OmFmdGVyT25Mb2FkXCIsSSk7aWYoIXNlKG4pKXt2YXIgdD1udWxsO3doaWxlKGUubGVuZ3RoPjAmJnQ9PW51bGwpe3ZhciByPWUuc2hpZnQoKTtpZihzZShyKSl7dD1yfX1pZih0KXtjZSh0LFwiaHRteDphZnRlclJlcXVlc3RcIixJKTtjZSh0LFwiaHRteDphZnRlck9uTG9hZFwiLEkpfX1pZShvKTt3KCl9Y2F0Y2goZSl7ZmUobixcImh0bXg6b25Mb2FkRXJyb3JcIixsZSh7ZXJyb3I6ZX0sSSkpO3Rocm93IGV9fTtiLm9uZXJyb3I9ZnVuY3Rpb24oKXtscihrLFApO2ZlKG4sXCJodG14OmFmdGVyUmVxdWVzdFwiLEkpO2ZlKG4sXCJodG14OnNlbmRFcnJvclwiLEkpO2llKHMpO3coKX07Yi5vbmFib3J0PWZ1bmN0aW9uKCl7bHIoayxQKTtmZShuLFwiaHRteDphZnRlclJlcXVlc3RcIixJKTtmZShuLFwiaHRteDpzZW5kQWJvcnRcIixJKTtpZShzKTt3KCl9O2Iub250aW1lb3V0PWZ1bmN0aW9uKCl7bHIoayxQKTtmZShuLFwiaHRteDphZnRlclJlcXVlc3RcIixJKTtmZShuLFwiaHRteDp0aW1lb3V0XCIsSSk7aWUocyk7dygpfTtpZighY2UobixcImh0bXg6YmVmb3JlUmVxdWVzdFwiLEkpKXtpZShvKTt3KCk7cmV0dXJuIGx9dmFyIGs9b3Iobik7dmFyIFA9c3Iobik7b2UoW1wibG9hZHN0YXJ0XCIsXCJsb2FkZW5kXCIsXCJwcm9ncmVzc1wiLFwiYWJvcnRcIl0sZnVuY3Rpb24odCl7b2UoW2IsYi51cGxvYWRdLGZ1bmN0aW9uKGUpe2UuYWRkRXZlbnRMaXN0ZW5lcih0LGZ1bmN0aW9uKGUpe2NlKG4sXCJodG14OnhocjpcIit0LHtsZW5ndGhDb21wdXRhYmxlOmUubGVuZ3RoQ29tcHV0YWJsZSxsb2FkZWQ6ZS5sb2FkZWQsdG90YWw6ZS50b3RhbH0pfSl9KX0pO2NlKG4sXCJodG14OmJlZm9yZVNlbmRcIixJKTt2YXIgWT1xP251bGw6RXIoYixuLFQpO2Iuc2VuZChZKTtyZXR1cm4gbH1mdW5jdGlvbiBQcihlLHQpe3ZhciByPXQueGhyO3ZhciBuPW51bGw7dmFyIGk9bnVsbDtpZihPKHIsL0hYLVB1c2g6L2kpKXtuPXIuZ2V0UmVzcG9uc2VIZWFkZXIoXCJIWC1QdXNoXCIpO2k9XCJwdXNoXCJ9ZWxzZSBpZihPKHIsL0hYLVB1c2gtVXJsOi9pKSl7bj1yLmdldFJlc3BvbnNlSGVhZGVyKFwiSFgtUHVzaC1VcmxcIik7aT1cInB1c2hcIn1lbHNlIGlmKE8ociwvSFgtUmVwbGFjZS1Vcmw6L2kpKXtuPXIuZ2V0UmVzcG9uc2VIZWFkZXIoXCJIWC1SZXBsYWNlLVVybFwiKTtpPVwicmVwbGFjZVwifWlmKG4pe2lmKG49PT1cImZhbHNlXCIpe3JldHVybnt9fWVsc2V7cmV0dXJue3R5cGU6aSxwYXRoOm59fX12YXIgYT10LnBhdGhJbmZvLmZpbmFsUmVxdWVzdFBhdGg7dmFyIG89dC5wYXRoSW5mby5yZXNwb25zZVBhdGg7dmFyIHM9bmUoZSxcImh4LXB1c2gtdXJsXCIpO3ZhciBsPW5lKGUsXCJoeC1yZXBsYWNlLXVybFwiKTt2YXIgdT1hZShlKS5ib29zdGVkO3ZhciBmPW51bGw7dmFyIGM9bnVsbDtpZihzKXtmPVwicHVzaFwiO2M9c31lbHNlIGlmKGwpe2Y9XCJyZXBsYWNlXCI7Yz1sfWVsc2UgaWYodSl7Zj1cInB1c2hcIjtjPW98fGF9aWYoYyl7aWYoYz09PVwiZmFsc2VcIil7cmV0dXJue319aWYoYz09PVwidHJ1ZVwiKXtjPW98fGF9aWYodC5wYXRoSW5mby5hbmNob3ImJmMuaW5kZXhPZihcIiNcIik9PT0tMSl7Yz1jK1wiI1wiK3QucGF0aEluZm8uYW5jaG9yfXJldHVybnt0eXBlOmYscGF0aDpjfX1lbHNle3JldHVybnt9fX1mdW5jdGlvbiBNcihsLHUpe3ZhciBmPXUueGhyO3ZhciBjPXUudGFyZ2V0O3ZhciBlPXUuZXRjO3ZhciB0PXUucmVxdWVzdENvbmZpZzt2YXIgaD11LnNlbGVjdDtpZighY2UobCxcImh0bXg6YmVmb3JlT25Mb2FkXCIsdSkpcmV0dXJuO2lmKE8oZiwvSFgtVHJpZ2dlcjovaSkpe19lKGYsXCJIWC1UcmlnZ2VyXCIsbCl9aWYoTyhmLC9IWC1Mb2NhdGlvbjovaSkpe2VyKCk7dmFyIHI9Zi5nZXRSZXNwb25zZUhlYWRlcihcIkhYLUxvY2F0aW9uXCIpO3ZhciB2O2lmKHIuaW5kZXhPZihcIntcIik9PT0wKXt2PUUocik7cj12W1wicGF0aFwiXTtkZWxldGUgdltcInBhdGhcIl19TnIoXCJHRVRcIixyLHYpLnRoZW4oZnVuY3Rpb24oKXt0cihyKX0pO3JldHVybn12YXIgbj1PKGYsL0hYLVJlZnJlc2g6L2kpJiZcInRydWVcIj09PWYuZ2V0UmVzcG9uc2VIZWFkZXIoXCJIWC1SZWZyZXNoXCIpO2lmKE8oZiwvSFgtUmVkaXJlY3Q6L2kpKXtsb2NhdGlvbi5ocmVmPWYuZ2V0UmVzcG9uc2VIZWFkZXIoXCJIWC1SZWRpcmVjdFwiKTtuJiZsb2NhdGlvbi5yZWxvYWQoKTtyZXR1cm59aWYobil7bG9jYXRpb24ucmVsb2FkKCk7cmV0dXJufWlmKE8oZiwvSFgtUmV0YXJnZXQ6L2kpKXtpZihmLmdldFJlc3BvbnNlSGVhZGVyKFwiSFgtUmV0YXJnZXRcIik9PT1cInRoaXNcIil7dS50YXJnZXQ9bH1lbHNle3UudGFyZ2V0PXVlKGwsZi5nZXRSZXNwb25zZUhlYWRlcihcIkhYLVJldGFyZ2V0XCIpKX19dmFyIGQ9UHIobCx1KTt2YXIgaT1mLnN0YXR1cz49MjAwJiZmLnN0YXR1czw0MDAmJmYuc3RhdHVzIT09MjA0O3ZhciBnPWYucmVzcG9uc2U7dmFyIGE9Zi5zdGF0dXM+PTQwMDt2YXIgcD1RLmNvbmZpZy5pZ25vcmVUaXRsZTt2YXIgbz1sZSh7c2hvdWxkU3dhcDppLHNlcnZlclJlc3BvbnNlOmcsaXNFcnJvcjphLGlnbm9yZVRpdGxlOnB9LHUpO2lmKCFjZShjLFwiaHRteDpiZWZvcmVTd2FwXCIsbykpcmV0dXJuO2M9by50YXJnZXQ7Zz1vLnNlcnZlclJlc3BvbnNlO2E9by5pc0Vycm9yO3A9by5pZ25vcmVUaXRsZTt1LnRhcmdldD1jO3UuZmFpbGVkPWE7dS5zdWNjZXNzZnVsPSFhO2lmKG8uc2hvdWxkU3dhcCl7aWYoZi5zdGF0dXM9PT0yODYpe2F0KGwpfVIobCxmdW5jdGlvbihlKXtnPWUudHJhbnNmb3JtUmVzcG9uc2UoZyxmLGwpfSk7aWYoZC50eXBlKXtlcigpfXZhciBzPWUuc3dhcE92ZXJyaWRlO2lmKE8oZiwvSFgtUmVzd2FwOi9pKSl7cz1mLmdldFJlc3BvbnNlSGVhZGVyKFwiSFgtUmVzd2FwXCIpfXZhciB2PXdyKGwscyk7aWYodi5oYXNPd25Qcm9wZXJ0eShcImlnbm9yZVRpdGxlXCIpKXtwPXYuaWdub3JlVGl0bGV9Yy5jbGFzc0xpc3QuYWRkKFEuY29uZmlnLnN3YXBwaW5nQ2xhc3MpO3ZhciBtPW51bGw7dmFyIHg9bnVsbDt2YXIgeT1mdW5jdGlvbigpe3RyeXt2YXIgZT1kb2N1bWVudC5hY3RpdmVFbGVtZW50O3ZhciB0PXt9O3RyeXt0PXtlbHQ6ZSxzdGFydDplP2Uuc2VsZWN0aW9uU3RhcnQ6bnVsbCxlbmQ6ZT9lLnNlbGVjdGlvbkVuZDpudWxsfX1jYXRjaChlKXt9dmFyIHI7aWYoaCl7cj1ofWlmKE8oZiwvSFgtUmVzZWxlY3Q6L2kpKXtyPWYuZ2V0UmVzcG9uc2VIZWFkZXIoXCJIWC1SZXNlbGVjdFwiKX1pZihkLnR5cGUpe2NlKHJlKCkuYm9keSxcImh0bXg6YmVmb3JlSGlzdG9yeVVwZGF0ZVwiLGxlKHtoaXN0b3J5OmR9LHUpKTtpZihkLnR5cGU9PT1cInB1c2hcIil7dHIoZC5wYXRoKTtjZShyZSgpLmJvZHksXCJodG14OnB1c2hlZEludG9IaXN0b3J5XCIse3BhdGg6ZC5wYXRofSl9ZWxzZXtycihkLnBhdGgpO2NlKHJlKCkuYm9keSxcImh0bXg6cmVwbGFjZWRJbkhpc3RvcnlcIix7cGF0aDpkLnBhdGh9KX19dmFyIG49VChjKTtqZSh2LnN3YXBTdHlsZSxjLGwsZyxuLHIpO2lmKHQuZWx0JiYhc2UodC5lbHQpJiZlZSh0LmVsdCxcImlkXCIpKXt2YXIgaT1kb2N1bWVudC5nZXRFbGVtZW50QnlJZChlZSh0LmVsdCxcImlkXCIpKTt2YXIgYT17cHJldmVudFNjcm9sbDp2LmZvY3VzU2Nyb2xsIT09dW5kZWZpbmVkPyF2LmZvY3VzU2Nyb2xsOiFRLmNvbmZpZy5kZWZhdWx0Rm9jdXNTY3JvbGx9O2lmKGkpe2lmKHQuc3RhcnQmJmkuc2V0U2VsZWN0aW9uUmFuZ2Upe3RyeXtpLnNldFNlbGVjdGlvblJhbmdlKHQuc3RhcnQsdC5lbmQpfWNhdGNoKGUpe319aS5mb2N1cyhhKX19Yy5jbGFzc0xpc3QucmVtb3ZlKFEuY29uZmlnLnN3YXBwaW5nQ2xhc3MpO29lKG4uZWx0cyxmdW5jdGlvbihlKXtpZihlLmNsYXNzTGlzdCl7ZS5jbGFzc0xpc3QuYWRkKFEuY29uZmlnLnNldHRsaW5nQ2xhc3MpfWNlKGUsXCJodG14OmFmdGVyU3dhcFwiLHUpfSk7aWYoTyhmLC9IWC1UcmlnZ2VyLUFmdGVyLVN3YXA6L2kpKXt2YXIgbz1sO2lmKCFzZShsKSl7bz1yZSgpLmJvZHl9X2UoZixcIkhYLVRyaWdnZXItQWZ0ZXItU3dhcFwiLG8pfXZhciBzPWZ1bmN0aW9uKCl7b2Uobi50YXNrcyxmdW5jdGlvbihlKXtlLmNhbGwoKX0pO29lKG4uZWx0cyxmdW5jdGlvbihlKXtpZihlLmNsYXNzTGlzdCl7ZS5jbGFzc0xpc3QucmVtb3ZlKFEuY29uZmlnLnNldHRsaW5nQ2xhc3MpfWNlKGUsXCJodG14OmFmdGVyU2V0dGxlXCIsdSl9KTtpZih1LnBhdGhJbmZvLmFuY2hvcil7dmFyIGU9cmUoKS5nZXRFbGVtZW50QnlJZCh1LnBhdGhJbmZvLmFuY2hvcik7aWYoZSl7ZS5zY3JvbGxJbnRvVmlldyh7YmxvY2s6XCJzdGFydFwiLGJlaGF2aW9yOlwiYXV0b1wifSl9fWlmKG4udGl0bGUmJiFwKXt2YXIgdD1DKFwidGl0bGVcIik7aWYodCl7dC5pbm5lckhUTUw9bi50aXRsZX1lbHNle3dpbmRvdy5kb2N1bWVudC50aXRsZT1uLnRpdGxlfX1DcihuLmVsdHMsdik7aWYoTyhmLC9IWC1UcmlnZ2VyLUFmdGVyLVNldHRsZTovaSkpe3ZhciByPWw7aWYoIXNlKGwpKXtyPXJlKCkuYm9keX1fZShmLFwiSFgtVHJpZ2dlci1BZnRlci1TZXR0bGVcIixyKX1pZShtKX07aWYodi5zZXR0bGVEZWxheT4wKXtzZXRUaW1lb3V0KHMsdi5zZXR0bGVEZWxheSl9ZWxzZXtzKCl9fWNhdGNoKGUpe2ZlKGwsXCJodG14OnN3YXBFcnJvclwiLHUpO2llKHgpO3Rocm93IGV9fTt2YXIgYj1RLmNvbmZpZy5nbG9iYWxWaWV3VHJhbnNpdGlvbnM7aWYodi5oYXNPd25Qcm9wZXJ0eShcInRyYW5zaXRpb25cIikpe2I9di50cmFuc2l0aW9ufWlmKGImJmNlKGwsXCJodG14OmJlZm9yZVRyYW5zaXRpb25cIix1KSYmdHlwZW9mIFByb21pc2UhPT1cInVuZGVmaW5lZFwiJiZkb2N1bWVudC5zdGFydFZpZXdUcmFuc2l0aW9uKXt2YXIgdz1uZXcgUHJvbWlzZShmdW5jdGlvbihlLHQpe209ZTt4PXR9KTt2YXIgUz15O3k9ZnVuY3Rpb24oKXtkb2N1bWVudC5zdGFydFZpZXdUcmFuc2l0aW9uKGZ1bmN0aW9uKCl7UygpO3JldHVybiB3fSl9fWlmKHYuc3dhcERlbGF5PjApe3NldFRpbWVvdXQoeSx2LnN3YXBEZWxheSl9ZWxzZXt5KCl9fWlmKGEpe2ZlKGwsXCJodG14OnJlc3BvbnNlRXJyb3JcIixsZSh7ZXJyb3I6XCJSZXNwb25zZSBTdGF0dXMgRXJyb3IgQ29kZSBcIitmLnN0YXR1cytcIiBmcm9tIFwiK3UucGF0aEluZm8ucmVxdWVzdFBhdGh9LHUpKX19dmFyIFhyPXt9O2Z1bmN0aW9uIERyKCl7cmV0dXJue2luaXQ6ZnVuY3Rpb24oZSl7cmV0dXJuIG51bGx9LG9uRXZlbnQ6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gdHJ1ZX0sdHJhbnNmb3JtUmVzcG9uc2U6ZnVuY3Rpb24oZSx0LHIpe3JldHVybiBlfSxpc0lubGluZVN3YXA6ZnVuY3Rpb24oZSl7cmV0dXJuIGZhbHNlfSxoYW5kbGVTd2FwOmZ1bmN0aW9uKGUsdCxyLG4pe3JldHVybiBmYWxzZX0sZW5jb2RlUGFyYW1ldGVyczpmdW5jdGlvbihlLHQscil7cmV0dXJuIG51bGx9fX1mdW5jdGlvbiBVcihlLHQpe2lmKHQuaW5pdCl7dC5pbml0KHIpfVhyW2VdPWxlKERyKCksdCl9ZnVuY3Rpb24gQnIoZSl7ZGVsZXRlIFhyW2VdfWZ1bmN0aW9uIEZyKGUscixuKXtpZihlPT11bmRlZmluZWQpe3JldHVybiByfWlmKHI9PXVuZGVmaW5lZCl7cj1bXX1pZihuPT11bmRlZmluZWQpe249W119dmFyIHQ9dGUoZSxcImh4LWV4dFwiKTtpZih0KXtvZSh0LnNwbGl0KFwiLFwiKSxmdW5jdGlvbihlKXtlPWUucmVwbGFjZSgvIC9nLFwiXCIpO2lmKGUuc2xpY2UoMCw3KT09XCJpZ25vcmU6XCIpe24ucHVzaChlLnNsaWNlKDcpKTtyZXR1cm59aWYobi5pbmRleE9mKGUpPDApe3ZhciB0PVhyW2VdO2lmKHQmJnIuaW5kZXhPZih0KTwwKXtyLnB1c2godCl9fX0pfXJldHVybiBGcih1KGUpLHIsbil9dmFyIFZyPWZhbHNlO3JlKCkuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIixmdW5jdGlvbigpe1ZyPXRydWV9KTtmdW5jdGlvbiBqcihlKXtpZihWcnx8cmUoKS5yZWFkeVN0YXRlPT09XCJjb21wbGV0ZVwiKXtlKCl9ZWxzZXtyZSgpLmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsZSl9fWZ1bmN0aW9uIF9yKCl7aWYoUS5jb25maWcuaW5jbHVkZUluZGljYXRvclN0eWxlcyE9PWZhbHNlKXtyZSgpLmhlYWQuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYmVmb3JlZW5kXCIsXCI8c3R5bGU+ICAgICAgICAgICAgICAgICAgICAgIC5cIitRLmNvbmZpZy5pbmRpY2F0b3JDbGFzcytcIntvcGFjaXR5OjB9ICAgICAgICAgICAgICAgICAgICAgIC5cIitRLmNvbmZpZy5yZXF1ZXN0Q2xhc3MrXCIgLlwiK1EuY29uZmlnLmluZGljYXRvckNsYXNzK1wie29wYWNpdHk6MTsgdHJhbnNpdGlvbjogb3BhY2l0eSAyMDBtcyBlYXNlLWluO30gICAgICAgICAgICAgICAgICAgICAgLlwiK1EuY29uZmlnLnJlcXVlc3RDbGFzcytcIi5cIitRLmNvbmZpZy5pbmRpY2F0b3JDbGFzcytcIntvcGFjaXR5OjE7IHRyYW5zaXRpb246IG9wYWNpdHkgMjAwbXMgZWFzZS1pbjt9ICAgICAgICAgICAgICAgICAgICA8L3N0eWxlPlwiKX19ZnVuY3Rpb24genIoKXt2YXIgZT1yZSgpLnF1ZXJ5U2VsZWN0b3IoJ21ldGFbbmFtZT1cImh0bXgtY29uZmlnXCJdJyk7aWYoZSl7cmV0dXJuIEUoZS5jb250ZW50KX1lbHNle3JldHVybiBudWxsfX1mdW5jdGlvbiAkcigpe3ZhciBlPXpyKCk7aWYoZSl7US5jb25maWc9bGUoUS5jb25maWcsZSl9fWpyKGZ1bmN0aW9uKCl7JHIoKTtfcigpO3ZhciBlPXJlKCkuYm9keTt6dChlKTt2YXIgdD1yZSgpLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbaHgtdHJpZ2dlcj0ncmVzdG9yZWQnXSxbZGF0YS1oeC10cmlnZ2VyPSdyZXN0b3JlZCddXCIpO2UuYWRkRXZlbnRMaXN0ZW5lcihcImh0bXg6YWJvcnRcIixmdW5jdGlvbihlKXt2YXIgdD1lLnRhcmdldDt2YXIgcj1hZSh0KTtpZihyJiZyLnhocil7ci54aHIuYWJvcnQoKX19KTtjb25zdCByPXdpbmRvdy5vbnBvcHN0YXRlP3dpbmRvdy5vbnBvcHN0YXRlLmJpbmQod2luZG93KTpudWxsO3dpbmRvdy5vbnBvcHN0YXRlPWZ1bmN0aW9uKGUpe2lmKGUuc3RhdGUmJmUuc3RhdGUuaHRteCl7YXIoKTtvZSh0LGZ1bmN0aW9uKGUpe2NlKGUsXCJodG14OnJlc3RvcmVkXCIse2RvY3VtZW50OnJlKCksdHJpZ2dlckV2ZW50OmNlfSl9KX1lbHNle2lmKHIpe3IoZSl9fX07c2V0VGltZW91dChmdW5jdGlvbigpe2NlKGUsXCJodG14OmxvYWRcIix7fSk7ZT1udWxsfSwwKX0pO3JldHVybiBRfSgpfSk7IiwgImltcG9ydCBIdG14IGZyb20gXCJodG14Lm9yZ1wiO1xuaW1wb3J0IHsganNvbkVuYyB9IGZyb20gXCIuL2h0bXgtZXh0ZW5kXCI7XG5cbndpbmRvdy5IdG14ID0gSHRteDtcbkh0bXguZGVmaW5lRXh0ZW5zaW9uKFwianNvbi1lbmNcIiwganNvbkVuYyk7IiwgImV4cG9ydCBjb25zdCBqc29uRW5jID0ge1xuICBvbkV2ZW50OiBmdW5jdGlvbiAobmFtZSwgZXZ0KSB7XG4gICAgaWYgKG5hbWUgPT09IFwiaHRteDpjb25maWdSZXF1ZXN0XCIpIHtcbiAgICAgIGV2dC5kZXRhaWwuaGVhZGVyc1tcIkNvbnRlbnQtVHlwZVwiXSA9IFwiYXBwbGljYXRpb24vanNvblwiO1xuICAgIH1cbiAgfSxcbiAgZW5jb2RlUGFyYW1ldGVyczogZnVuY3Rpb24gKHhociwgcGFyYW1ldGVycywgZWx0KSB7XG4gICAgeGhyLm92ZXJyaWRlTWltZVR5cGUoXCJ0ZXh0L2pzb25cIik7XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHBhcmFtZXRlcnMpO1xuICB9LFxufTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUEsT0FBQyxTQUFTQSxJQUFFQyxJQUFFO0FBQUMsWUFBRyxPQUFPLFdBQVMsY0FBWSxPQUFPLEtBQUk7QUFBQyxpQkFBTyxDQUFDLEdBQUVBLEVBQUM7QUFBQSxRQUFDLFdBQVMsT0FBTyxXQUFTLFlBQVUsT0FBTyxTQUFRO0FBQUMsaUJBQU8sVUFBUUEsR0FBRTtBQUFBLFFBQUMsT0FBSztBQUFDLFVBQUFELEdBQUUsT0FBS0EsR0FBRSxRQUFNQyxHQUFFO0FBQUEsUUFBQztBQUFBLE1BQUMsR0FBRyxPQUFPLFNBQU8sY0FBWSxPQUFLLFNBQUssV0FBVTtBQUFDLGVBQU8sV0FBVTtBQUFDO0FBQWEsY0FBSSxJQUFFLEVBQUMsUUFBTyxHQUFFLFNBQVEsSUFBRyxJQUFHLElBQUcsS0FBSSxJQUFHLFNBQVEsSUFBRyxNQUFLLElBQUcsTUFBSyxHQUFFLFNBQVEsR0FBRSxTQUFRLEdBQUUsUUFBTyxTQUFTRCxJQUFFQyxJQUFFO0FBQUMsZ0JBQUlDLEtBQUUsR0FBR0YsSUFBRUMsTUFBRyxNQUFNO0FBQUUsbUJBQU9DLEdBQUU7QUFBQSxVQUFNLEdBQUUsUUFBTyxHQUFFLFVBQVMsR0FBRSxhQUFZLEdBQUUsYUFBWSxHQUFFLFdBQVUsR0FBRSxpQkFBZ0IsSUFBRyxpQkFBZ0IsSUFBRyxRQUFPLEdBQUUsU0FBUSxHQUFFLFFBQU8sTUFBSyxRQUFPLEVBQUMsZ0JBQWUsTUFBSyxrQkFBaUIsSUFBRyxzQkFBcUIsT0FBTSxrQkFBaUIsYUFBWSxrQkFBaUIsR0FBRSxvQkFBbUIsSUFBRyx3QkFBdUIsTUFBSyxnQkFBZSxrQkFBaUIsY0FBYSxnQkFBZSxZQUFXLGNBQWEsZUFBYyxpQkFBZ0IsZUFBYyxpQkFBZ0IsV0FBVSxNQUFLLGlCQUFnQixNQUFLLG1CQUFrQixJQUFHLG9CQUFtQixDQUFDLFNBQVEsU0FBUSxTQUFRLFFBQVEsR0FBRSxpQkFBZ0IsT0FBTSxTQUFRLEdBQUUsa0JBQWlCLGVBQWMsY0FBYSxRQUFPLGlCQUFnQixtQ0FBa0Msc0JBQXFCLE9BQU0sZ0JBQWUsVUFBUyxvQkFBbUIsT0FBTSxxQkFBb0IsT0FBTSx1QkFBc0IsT0FBTSx5QkFBd0IsQ0FBQyxLQUFLLEdBQUUsa0JBQWlCLE9BQU0sYUFBWSxPQUFNLHVCQUFzQixNQUFLLG1CQUFrQixLQUFJLEdBQUUsZUFBYyxHQUFFLEdBQUUsR0FBRSxtQkFBa0IsU0FBU0YsSUFBRTtBQUFDLG1CQUFPLElBQUksWUFBWUEsSUFBRSxFQUFDLGlCQUFnQixLQUFJLENBQUM7QUFBQSxVQUFDLEdBQUUsaUJBQWdCLFNBQVNBLElBQUU7QUFBQyxnQkFBSUMsS0FBRSxJQUFJLFVBQVVELElBQUUsQ0FBQyxDQUFDO0FBQUUsWUFBQUMsR0FBRSxhQUFXLEVBQUUsT0FBTztBQUFhLG1CQUFPQTtBQUFBLFVBQUMsR0FBRSxTQUFRLFNBQVE7QUFBRSxjQUFJLElBQUUsRUFBQyxtQkFBa0IsSUFBRyxjQUFhLElBQUcsdUJBQXNCLEdBQUUsaUJBQWdCLElBQUcsY0FBYSxJQUFHLGNBQWEsR0FBRSxtQkFBa0IsSUFBRywwQkFBeUIsSUFBRyxpQkFBZ0IsR0FBRSxtQkFBa0IsSUFBRyxZQUFXLElBQUcsZ0JBQWUsSUFBRyxpQkFBZ0IsSUFBRyxzQkFBcUIsSUFBRyxpQkFBZ0IsSUFBRyxXQUFVLElBQUcsY0FBYSxHQUFFLGNBQWEsSUFBRyxnQkFBZSxHQUFFLFNBQVEsSUFBRyxrQkFBaUIsSUFBRyxlQUFjLElBQUcsbUJBQWtCLElBQUcsY0FBYSxJQUFHLGNBQWEsSUFBRyxtQkFBa0IsSUFBRyxnQkFBZSxFQUFDO0FBQUUsY0FBSSxJQUFFLENBQUMsT0FBTSxRQUFPLE9BQU0sVUFBUyxPQUFPO0FBQUUsY0FBSSxJQUFFLEVBQUUsSUFBSSxTQUFTRCxJQUFFO0FBQUMsbUJBQU0sU0FBT0EsS0FBRSxpQkFBZUEsS0FBRTtBQUFBLFVBQUcsQ0FBQyxFQUFFLEtBQUssSUFBSTtBQUFFLGNBQUksSUFBRSxFQUFFLE1BQU0sR0FBRSxJQUFFLEVBQUUsT0FBTyxHQUFFLElBQUUsRUFBRSxPQUFNLElBQUk7QUFBRSxtQkFBUyxFQUFFQSxJQUFFQyxJQUFFO0FBQUMsbUJBQU8sSUFBSSxPQUFPLE1BQUlELEtBQUUsa0NBQWdDQSxLQUFFLEtBQUksQ0FBQyxDQUFDQyxLQUFFLFFBQU0sSUFBSTtBQUFBLFVBQUM7QUFBQyxtQkFBUyxFQUFFRCxJQUFFO0FBQUMsZ0JBQUdBLE1BQUcsUUFBVTtBQUFDLHFCQUFPO0FBQUEsWUFBUztBQUFDLGdCQUFJQyxLQUFFO0FBQUksZ0JBQUdELEdBQUUsTUFBTSxFQUFFLEtBQUcsTUFBSztBQUFDLGNBQUFDLEtBQUUsV0FBV0QsR0FBRSxNQUFNLEdBQUUsRUFBRSxDQUFDO0FBQUEsWUFBQyxXQUFTQSxHQUFFLE1BQU0sRUFBRSxLQUFHLEtBQUk7QUFBQyxjQUFBQyxLQUFFLFdBQVdELEdBQUUsTUFBTSxHQUFFLEVBQUUsQ0FBQyxJQUFFO0FBQUEsWUFBRyxXQUFTQSxHQUFFLE1BQU0sRUFBRSxLQUFHLEtBQUk7QUFBQyxjQUFBQyxLQUFFLFdBQVdELEdBQUUsTUFBTSxHQUFFLEVBQUUsQ0FBQyxJQUFFLE1BQUk7QUFBQSxZQUFFLE9BQUs7QUFBQyxjQUFBQyxLQUFFLFdBQVdELEVBQUM7QUFBQSxZQUFDO0FBQUMsbUJBQU8sTUFBTUMsRUFBQyxJQUFFLFNBQVVBO0FBQUEsVUFBQztBQUFDLG1CQUFTLEdBQUdELElBQUVDLElBQUU7QUFBQyxtQkFBT0QsR0FBRSxnQkFBY0EsR0FBRSxhQUFhQyxFQUFDO0FBQUEsVUFBQztBQUFDLG1CQUFTLEVBQUVELElBQUVDLElBQUU7QUFBQyxtQkFBT0QsR0FBRSxpQkFBZUEsR0FBRSxhQUFhQyxFQUFDLEtBQUdELEdBQUUsYUFBYSxVQUFRQyxFQUFDO0FBQUEsVUFBRTtBQUFDLG1CQUFTLEdBQUdELElBQUVDLElBQUU7QUFBQyxtQkFBTyxHQUFHRCxJQUFFQyxFQUFDLEtBQUcsR0FBR0QsSUFBRSxVQUFRQyxFQUFDO0FBQUEsVUFBQztBQUFDLG1CQUFTLEVBQUVELElBQUU7QUFBQyxtQkFBT0EsR0FBRTtBQUFBLFVBQWE7QUFBQyxtQkFBUyxLQUFJO0FBQUMsbUJBQU87QUFBQSxVQUFRO0FBQUMsbUJBQVMsRUFBRUEsSUFBRUMsSUFBRTtBQUFDLG1CQUFNRCxNQUFHLENBQUNDLEdBQUVELEVBQUMsR0FBRTtBQUFDLGNBQUFBLEtBQUUsRUFBRUEsRUFBQztBQUFBLFlBQUM7QUFBQyxtQkFBT0EsS0FBRUEsS0FBRTtBQUFBLFVBQUk7QUFBQyxtQkFBUyxFQUFFQSxJQUFFQyxJQUFFQyxJQUFFO0FBQUMsZ0JBQUlDLEtBQUUsR0FBR0YsSUFBRUMsRUFBQztBQUFFLGdCQUFJRSxLQUFFLEdBQUdILElBQUUsZUFBZTtBQUFFLGdCQUFHRCxPQUFJQyxNQUFHRyxPQUFJQSxPQUFJLE9BQUtBLEdBQUUsTUFBTSxHQUFHLEVBQUUsUUFBUUYsRUFBQyxLQUFHLElBQUc7QUFBQyxxQkFBTTtBQUFBLFlBQU8sT0FBSztBQUFDLHFCQUFPQztBQUFBLFlBQUM7QUFBQSxVQUFDO0FBQUMsbUJBQVMsR0FBR0YsSUFBRUMsSUFBRTtBQUFDLGdCQUFJQyxLQUFFO0FBQUssY0FBRUYsSUFBRSxTQUFTRCxJQUFFO0FBQUMscUJBQU9HLEtBQUUsRUFBRUYsSUFBRUQsSUFBRUUsRUFBQztBQUFBLFlBQUMsQ0FBQztBQUFFLGdCQUFHQyxPQUFJLFNBQVE7QUFBQyxxQkFBT0E7QUFBQSxZQUFDO0FBQUEsVUFBQztBQUFDLG1CQUFTLEVBQUVILElBQUVDLElBQUU7QUFBQyxnQkFBSUMsS0FBRUYsR0FBRSxXQUFTQSxHQUFFLG1CQUFpQkEsR0FBRSxxQkFBbUJBLEdBQUUsc0JBQW9CQSxHQUFFLHlCQUF1QkEsR0FBRTtBQUFpQixtQkFBT0UsTUFBR0EsR0FBRSxLQUFLRixJQUFFQyxFQUFDO0FBQUEsVUFBQztBQUFDLG1CQUFTLEVBQUVELElBQUU7QUFBQyxnQkFBSUMsS0FBRTtBQUFpQyxnQkFBSUMsS0FBRUQsR0FBRSxLQUFLRCxFQUFDO0FBQUUsZ0JBQUdFLElBQUU7QUFBQyxxQkFBT0EsR0FBRSxDQUFDLEVBQUUsWUFBWTtBQUFBLFlBQUMsT0FBSztBQUFDLHFCQUFNO0FBQUEsWUFBRTtBQUFBLFVBQUM7QUFBQyxtQkFBUyxFQUFFRixJQUFFQyxJQUFFO0FBQUMsZ0JBQUlDLEtBQUUsSUFBSTtBQUFVLGdCQUFJQyxLQUFFRCxHQUFFLGdCQUFnQkYsSUFBRSxXQUFXO0FBQUUsZ0JBQUlJLEtBQUVELEdBQUU7QUFBSyxtQkFBTUYsS0FBRSxHQUFFO0FBQUMsY0FBQUE7QUFBSSxjQUFBRyxLQUFFQSxHQUFFO0FBQUEsWUFBVTtBQUFDLGdCQUFHQSxNQUFHLE1BQUs7QUFBQyxjQUFBQSxLQUFFLEdBQUcsRUFBRSx1QkFBdUI7QUFBQSxZQUFDO0FBQUMsbUJBQU9BO0FBQUEsVUFBQztBQUFDLG1CQUFTLEVBQUVKLElBQUU7QUFBQyxtQkFBTSxRQUFRLEtBQUtBLEVBQUM7QUFBQSxVQUFDO0FBQUMsbUJBQVMsRUFBRUEsSUFBRTtBQUFDLGdCQUFJQyxLQUFFLENBQUMsRUFBRUQsRUFBQztBQUFFLGdCQUFJRSxLQUFFLEVBQUVGLEVBQUM7QUFBRSxnQkFBSUcsS0FBRUg7QUFBRSxnQkFBR0UsT0FBSSxRQUFPO0FBQUMsY0FBQUMsS0FBRUEsR0FBRSxRQUFRLEdBQUUsRUFBRTtBQUFBLFlBQUM7QUFBQyxnQkFBRyxFQUFFLE9BQU8sd0JBQXNCRixJQUFFO0FBQUMsa0JBQUlHLEtBQUUsRUFBRSxxQkFBbUJELEtBQUUsc0JBQXFCLENBQUM7QUFBRSxrQkFBSUUsS0FBRUQsR0FBRSxjQUFjLFVBQVUsRUFBRTtBQUFRLGtCQUFHLEVBQUUsT0FBTyxpQkFBZ0I7QUFBQyxtQkFBR0MsR0FBRSxpQkFBaUIsUUFBUSxHQUFFLFNBQVNMLElBQUU7QUFBQyxzQkFBRyxFQUFFLE9BQU8sbUJBQWtCO0FBQUMsb0JBQUFBLEdBQUUsUUFBTSxFQUFFLE9BQU87QUFBQSxrQkFBaUI7QUFBQyxrQkFBQUEsR0FBRSxlQUFhLFVBQVUsVUFBVSxRQUFRLFNBQVMsTUFBSTtBQUFBLGdCQUFFLENBQUM7QUFBQSxjQUFDLE9BQUs7QUFBQyxtQkFBR0ssR0FBRSxpQkFBaUIsUUFBUSxHQUFFLFNBQVNMLElBQUU7QUFBQyxvQkFBRUEsRUFBQztBQUFBLGdCQUFDLENBQUM7QUFBQSxjQUFDO0FBQUMscUJBQU9LO0FBQUEsWUFBQztBQUFDLG9CQUFPSCxJQUFFO0FBQUEsY0FBQyxLQUFJO0FBQUEsY0FBUSxLQUFJO0FBQUEsY0FBUSxLQUFJO0FBQUEsY0FBUSxLQUFJO0FBQUEsY0FBVyxLQUFJO0FBQVUsdUJBQU8sRUFBRSxZQUFVQyxLQUFFLFlBQVcsQ0FBQztBQUFBLGNBQUUsS0FBSTtBQUFNLHVCQUFPLEVBQUUsc0JBQW9CQSxLQUFFLHVCQUFzQixDQUFDO0FBQUEsY0FBRSxLQUFJO0FBQUssdUJBQU8sRUFBRSxtQkFBaUJBLEtBQUUsb0JBQW1CLENBQUM7QUFBQSxjQUFFLEtBQUk7QUFBQSxjQUFLLEtBQUk7QUFBSyx1QkFBTyxFQUFFLHVCQUFxQkEsS0FBRSx5QkFBd0IsQ0FBQztBQUFBLGNBQUUsS0FBSTtBQUFBLGNBQVMsS0FBSTtBQUFRLHVCQUFPLEVBQUUsVUFBUUEsS0FBRSxVQUFTLENBQUM7QUFBQSxjQUFFO0FBQVEsdUJBQU8sRUFBRUEsSUFBRSxDQUFDO0FBQUEsWUFBQztBQUFBLFVBQUM7QUFBQyxtQkFBUyxHQUFHSCxJQUFFO0FBQUMsZ0JBQUdBLElBQUU7QUFBQyxjQUFBQSxHQUFFO0FBQUEsWUFBQztBQUFBLFVBQUM7QUFBQyxtQkFBUyxFQUFFQSxJQUFFQyxJQUFFO0FBQUMsbUJBQU8sT0FBTyxVQUFVLFNBQVMsS0FBS0QsRUFBQyxNQUFJLGFBQVdDLEtBQUU7QUFBQSxVQUFHO0FBQUMsbUJBQVMsRUFBRUQsSUFBRTtBQUFDLG1CQUFPLEVBQUVBLElBQUUsVUFBVTtBQUFBLFVBQUM7QUFBQyxtQkFBUyxFQUFFQSxJQUFFO0FBQUMsbUJBQU8sRUFBRUEsSUFBRSxRQUFRO0FBQUEsVUFBQztBQUFDLG1CQUFTLEdBQUdBLElBQUU7QUFBQyxnQkFBSUMsS0FBRTtBQUFxQixnQkFBSUMsS0FBRUYsR0FBRUMsRUFBQztBQUFFLGdCQUFHLENBQUNDLElBQUU7QUFBQyxjQUFBQSxLQUFFRixHQUFFQyxFQUFDLElBQUUsQ0FBQztBQUFBLFlBQUM7QUFBQyxtQkFBT0M7QUFBQSxVQUFDO0FBQUMsbUJBQVMsRUFBRUYsSUFBRTtBQUFDLGdCQUFJQyxLQUFFLENBQUM7QUFBRSxnQkFBR0QsSUFBRTtBQUFDLHVCQUFRRSxLQUFFLEdBQUVBLEtBQUVGLEdBQUUsUUFBT0UsTUFBSTtBQUFDLGdCQUFBRCxHQUFFLEtBQUtELEdBQUVFLEVBQUMsQ0FBQztBQUFBLGNBQUM7QUFBQSxZQUFDO0FBQUMsbUJBQU9EO0FBQUEsVUFBQztBQUFDLG1CQUFTLEdBQUdELElBQUVDLElBQUU7QUFBQyxnQkFBR0QsSUFBRTtBQUFDLHVCQUFRRSxLQUFFLEdBQUVBLEtBQUVGLEdBQUUsUUFBT0UsTUFBSTtBQUFDLGdCQUFBRCxHQUFFRCxHQUFFRSxFQUFDLENBQUM7QUFBQSxjQUFDO0FBQUEsWUFBQztBQUFBLFVBQUM7QUFBQyxtQkFBUyxFQUFFRixJQUFFO0FBQUMsZ0JBQUlDLEtBQUVELEdBQUUsc0JBQXNCO0FBQUUsZ0JBQUlFLEtBQUVELEdBQUU7QUFBSSxnQkFBSUUsS0FBRUYsR0FBRTtBQUFPLG1CQUFPQyxLQUFFLE9BQU8sZUFBYUMsTUFBRztBQUFBLFVBQUM7QUFBQyxtQkFBUyxHQUFHSCxJQUFFO0FBQUMsZ0JBQUdBLEdBQUUsZUFBYUEsR0FBRSxZQUFZLGFBQVksT0FBTyxZQUFXO0FBQUMscUJBQU8sR0FBRyxFQUFFLEtBQUssU0FBU0EsR0FBRSxZQUFZLEVBQUUsSUFBSTtBQUFBLFlBQUMsT0FBSztBQUFDLHFCQUFPLEdBQUcsRUFBRSxLQUFLLFNBQVNBLEVBQUM7QUFBQSxZQUFDO0FBQUEsVUFBQztBQUFDLG1CQUFTLEVBQUVBLElBQUU7QUFBQyxtQkFBT0EsR0FBRSxLQUFLLEVBQUUsTUFBTSxLQUFLO0FBQUEsVUFBQztBQUFDLG1CQUFTLEdBQUdBLElBQUVDLElBQUU7QUFBQyxxQkFBUUMsTUFBS0QsSUFBRTtBQUFDLGtCQUFHQSxHQUFFLGVBQWVDLEVBQUMsR0FBRTtBQUFDLGdCQUFBRixHQUFFRSxFQUFDLElBQUVELEdBQUVDLEVBQUM7QUFBQSxjQUFDO0FBQUEsWUFBQztBQUFDLG1CQUFPRjtBQUFBLFVBQUM7QUFBQyxtQkFBUyxFQUFFQSxJQUFFO0FBQUMsZ0JBQUc7QUFBQyxxQkFBTyxLQUFLLE1BQU1BLEVBQUM7QUFBQSxZQUFDLFNBQU9BLElBQUU7QUFBQyxnQkFBRUEsRUFBQztBQUFFLHFCQUFPO0FBQUEsWUFBSTtBQUFBLFVBQUM7QUFBQyxtQkFBUyxJQUFHO0FBQUMsZ0JBQUlBLEtBQUU7QUFBd0IsZ0JBQUc7QUFBQywyQkFBYSxRQUFRQSxJQUFFQSxFQUFDO0FBQUUsMkJBQWEsV0FBV0EsRUFBQztBQUFFLHFCQUFPO0FBQUEsWUFBSSxTQUFPQSxJQUFFO0FBQUMscUJBQU87QUFBQSxZQUFLO0FBQUEsVUFBQztBQUFDLG1CQUFTLEVBQUVDLElBQUU7QUFBQyxnQkFBRztBQUFDLGtCQUFJRCxLQUFFLElBQUksSUFBSUMsRUFBQztBQUFFLGtCQUFHRCxJQUFFO0FBQUMsZ0JBQUFDLEtBQUVELEdBQUUsV0FBU0EsR0FBRTtBQUFBLGNBQU07QUFBQyxrQkFBRyxDQUFDLE9BQU8sS0FBS0MsRUFBQyxHQUFFO0FBQUMsZ0JBQUFBLEtBQUVBLEdBQUUsUUFBUSxRQUFPLEVBQUU7QUFBQSxjQUFDO0FBQUMscUJBQU9BO0FBQUEsWUFBQyxTQUFPRCxJQUFFO0FBQUMscUJBQU9DO0FBQUEsWUFBQztBQUFBLFVBQUM7QUFBQyxtQkFBUyxFQUFFLEdBQUU7QUFBQyxtQkFBTyxHQUFHLEdBQUcsRUFBRSxNQUFLLFdBQVU7QUFBQyxxQkFBTyxLQUFLLENBQUM7QUFBQSxZQUFDLENBQUM7QUFBQSxVQUFDO0FBQUMsbUJBQVMsRUFBRUEsSUFBRTtBQUFDLGdCQUFJRCxLQUFFLEVBQUUsR0FBRyxhQUFZLFNBQVNBLElBQUU7QUFBQyxjQUFBQyxHQUFFRCxHQUFFLE9BQU8sR0FBRztBQUFBLFlBQUMsQ0FBQztBQUFFLG1CQUFPQTtBQUFBLFVBQUM7QUFBQyxtQkFBUyxJQUFHO0FBQUMsY0FBRSxTQUFPLFNBQVNBLElBQUVDLElBQUVDLElBQUU7QUFBQyxrQkFBRyxTQUFRO0FBQUMsd0JBQVEsSUFBSUQsSUFBRUQsSUFBRUUsRUFBQztBQUFBLGNBQUM7QUFBQSxZQUFDO0FBQUEsVUFBQztBQUFDLG1CQUFTLElBQUc7QUFBQyxjQUFFLFNBQU87QUFBQSxVQUFJO0FBQUMsbUJBQVMsRUFBRUYsSUFBRUMsSUFBRTtBQUFDLGdCQUFHQSxJQUFFO0FBQUMscUJBQU9ELEdBQUUsY0FBY0MsRUFBQztBQUFBLFlBQUMsT0FBSztBQUFDLHFCQUFPLEVBQUUsR0FBRyxHQUFFRCxFQUFDO0FBQUEsWUFBQztBQUFBLFVBQUM7QUFBQyxtQkFBUyxFQUFFQSxJQUFFQyxJQUFFO0FBQUMsZ0JBQUdBLElBQUU7QUFBQyxxQkFBT0QsR0FBRSxpQkFBaUJDLEVBQUM7QUFBQSxZQUFDLE9BQUs7QUFBQyxxQkFBTyxFQUFFLEdBQUcsR0FBRUQsRUFBQztBQUFBLFlBQUM7QUFBQSxVQUFDO0FBQUMsbUJBQVMsRUFBRUEsSUFBRUMsSUFBRTtBQUFDLFlBQUFELEtBQUUsRUFBRUEsRUFBQztBQUFFLGdCQUFHQyxJQUFFO0FBQUMseUJBQVcsV0FBVTtBQUFDLGtCQUFFRCxFQUFDO0FBQUUsZ0JBQUFBLEtBQUU7QUFBQSxjQUFJLEdBQUVDLEVBQUM7QUFBQSxZQUFDLE9BQUs7QUFBQyxjQUFBRCxHQUFFLGNBQWMsWUFBWUEsRUFBQztBQUFBLFlBQUM7QUFBQSxVQUFDO0FBQUMsbUJBQVMsRUFBRUEsSUFBRUMsSUFBRUMsSUFBRTtBQUFDLFlBQUFGLEtBQUUsRUFBRUEsRUFBQztBQUFFLGdCQUFHRSxJQUFFO0FBQUMseUJBQVcsV0FBVTtBQUFDLGtCQUFFRixJQUFFQyxFQUFDO0FBQUUsZ0JBQUFELEtBQUU7QUFBQSxjQUFJLEdBQUVFLEVBQUM7QUFBQSxZQUFDLE9BQUs7QUFBQyxjQUFBRixHQUFFLGFBQVdBLEdBQUUsVUFBVSxJQUFJQyxFQUFDO0FBQUEsWUFBQztBQUFBLFVBQUM7QUFBQyxtQkFBUyxFQUFFRCxJQUFFQyxJQUFFQyxJQUFFO0FBQUMsWUFBQUYsS0FBRSxFQUFFQSxFQUFDO0FBQUUsZ0JBQUdFLElBQUU7QUFBQyx5QkFBVyxXQUFVO0FBQUMsa0JBQUVGLElBQUVDLEVBQUM7QUFBRSxnQkFBQUQsS0FBRTtBQUFBLGNBQUksR0FBRUUsRUFBQztBQUFBLFlBQUMsT0FBSztBQUFDLGtCQUFHRixHQUFFLFdBQVU7QUFBQyxnQkFBQUEsR0FBRSxVQUFVLE9BQU9DLEVBQUM7QUFBRSxvQkFBR0QsR0FBRSxVQUFVLFdBQVMsR0FBRTtBQUFDLGtCQUFBQSxHQUFFLGdCQUFnQixPQUFPO0FBQUEsZ0JBQUM7QUFBQSxjQUFDO0FBQUEsWUFBQztBQUFBLFVBQUM7QUFBQyxtQkFBUyxFQUFFQSxJQUFFQyxJQUFFO0FBQUMsWUFBQUQsS0FBRSxFQUFFQSxFQUFDO0FBQUUsWUFBQUEsR0FBRSxVQUFVLE9BQU9DLEVBQUM7QUFBQSxVQUFDO0FBQUMsbUJBQVMsRUFBRUQsSUFBRUMsSUFBRTtBQUFDLFlBQUFELEtBQUUsRUFBRUEsRUFBQztBQUFFLGVBQUdBLEdBQUUsY0FBYyxVQUFTLFNBQVNBLElBQUU7QUFBQyxnQkFBRUEsSUFBRUMsRUFBQztBQUFBLFlBQUMsQ0FBQztBQUFFLGNBQUVELElBQUVDLEVBQUM7QUFBQSxVQUFDO0FBQUMsbUJBQVMsRUFBRUQsSUFBRUMsSUFBRTtBQUFDLFlBQUFELEtBQUUsRUFBRUEsRUFBQztBQUFFLGdCQUFHQSxHQUFFLFNBQVE7QUFBQyxxQkFBT0EsR0FBRSxRQUFRQyxFQUFDO0FBQUEsWUFBQyxPQUFLO0FBQUMsaUJBQUU7QUFBQyxvQkFBR0QsTUFBRyxRQUFNLEVBQUVBLElBQUVDLEVBQUMsR0FBRTtBQUFDLHlCQUFPRDtBQUFBLGdCQUFDO0FBQUEsY0FBQyxTQUFPQSxLQUFFQSxNQUFHLEVBQUVBLEVBQUM7QUFBRyxxQkFBTztBQUFBLFlBQUk7QUFBQSxVQUFDO0FBQUMsbUJBQVMsRUFBRUEsSUFBRUMsSUFBRTtBQUFDLG1CQUFPRCxHQUFFLFVBQVUsR0FBRUMsR0FBRSxNQUFNLE1BQUlBO0FBQUEsVUFBQztBQUFDLG1CQUFTLEVBQUVELElBQUVDLElBQUU7QUFBQyxtQkFBT0QsR0FBRSxVQUFVQSxHQUFFLFNBQU9DLEdBQUUsTUFBTSxNQUFJQTtBQUFBLFVBQUM7QUFBQyxtQkFBUyxFQUFFRCxJQUFFO0FBQUMsZ0JBQUlDLEtBQUVELEdBQUUsS0FBSztBQUFFLGdCQUFHLEVBQUVDLElBQUUsR0FBRyxLQUFHLEVBQUVBLElBQUUsSUFBSSxHQUFFO0FBQUMscUJBQU9BLEdBQUUsVUFBVSxHQUFFQSxHQUFFLFNBQU8sQ0FBQztBQUFBLFlBQUMsT0FBSztBQUFDLHFCQUFPQTtBQUFBLFlBQUM7QUFBQSxVQUFDO0FBQUMsbUJBQVMsRUFBRUQsSUFBRUMsSUFBRTtBQUFDLGdCQUFHQSxHQUFFLFFBQVEsVUFBVSxNQUFJLEdBQUU7QUFBQyxxQkFBTSxDQUFDLEVBQUVELElBQUUsRUFBRUMsR0FBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFBQSxZQUFDLFdBQVNBLEdBQUUsUUFBUSxPQUFPLE1BQUksR0FBRTtBQUFDLHFCQUFNLENBQUMsRUFBRUQsSUFBRSxFQUFFQyxHQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUFBLFlBQUMsV0FBU0EsT0FBSSxRQUFPO0FBQUMscUJBQU0sQ0FBQ0QsR0FBRSxrQkFBa0I7QUFBQSxZQUFDLFdBQVNDLEdBQUUsUUFBUSxPQUFPLE1BQUksR0FBRTtBQUFDLHFCQUFNLENBQUMsRUFBRUQsSUFBRSxFQUFFQyxHQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUFBLFlBQUMsV0FBU0EsT0FBSSxZQUFXO0FBQUMscUJBQU0sQ0FBQ0QsR0FBRSxzQkFBc0I7QUFBQSxZQUFDLFdBQVNDLEdBQUUsUUFBUSxXQUFXLE1BQUksR0FBRTtBQUFDLHFCQUFNLENBQUMsRUFBRUQsSUFBRSxFQUFFQyxHQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUFBLFlBQUMsV0FBU0EsT0FBSSxZQUFXO0FBQUMscUJBQU0sQ0FBQyxRQUFRO0FBQUEsWUFBQyxXQUFTQSxPQUFJLFVBQVM7QUFBQyxxQkFBTSxDQUFDLE1BQU07QUFBQSxZQUFDLFdBQVNBLE9BQUksUUFBTztBQUFDLHFCQUFNLENBQUMsU0FBUyxJQUFJO0FBQUEsWUFBQyxPQUFLO0FBQUMscUJBQU8sR0FBRyxFQUFFLGlCQUFpQixFQUFFQSxFQUFDLENBQUM7QUFBQSxZQUFDO0FBQUEsVUFBQztBQUFDLGNBQUksSUFBRSxTQUFTRCxJQUFFQyxJQUFFO0FBQUMsZ0JBQUlDLEtBQUUsR0FBRyxFQUFFLGlCQUFpQkQsRUFBQztBQUFFLHFCQUFRRSxLQUFFLEdBQUVBLEtBQUVELEdBQUUsUUFBT0MsTUFBSTtBQUFDLGtCQUFJQyxLQUFFRixHQUFFQyxFQUFDO0FBQUUsa0JBQUdDLEdBQUUsd0JBQXdCSixFQUFDLE1BQUksS0FBSyw2QkFBNEI7QUFBQyx1QkFBT0k7QUFBQSxjQUFDO0FBQUEsWUFBQztBQUFBLFVBQUM7QUFBRSxjQUFJLElBQUUsU0FBU0osSUFBRUMsSUFBRTtBQUFDLGdCQUFJQyxLQUFFLEdBQUcsRUFBRSxpQkFBaUJELEVBQUM7QUFBRSxxQkFBUUUsS0FBRUQsR0FBRSxTQUFPLEdBQUVDLE1BQUcsR0FBRUEsTUFBSTtBQUFDLGtCQUFJQyxLQUFFRixHQUFFQyxFQUFDO0FBQUUsa0JBQUdDLEdBQUUsd0JBQXdCSixFQUFDLE1BQUksS0FBSyw2QkFBNEI7QUFBQyx1QkFBT0k7QUFBQSxjQUFDO0FBQUEsWUFBQztBQUFBLFVBQUM7QUFBRSxtQkFBUyxHQUFHSixJQUFFQyxJQUFFO0FBQUMsZ0JBQUdBLElBQUU7QUFBQyxxQkFBTyxFQUFFRCxJQUFFQyxFQUFDLEVBQUUsQ0FBQztBQUFBLFlBQUMsT0FBSztBQUFDLHFCQUFPLEVBQUUsR0FBRyxFQUFFLE1BQUtELEVBQUMsRUFBRSxDQUFDO0FBQUEsWUFBQztBQUFBLFVBQUM7QUFBQyxtQkFBUyxFQUFFQSxJQUFFO0FBQUMsZ0JBQUcsRUFBRUEsSUFBRSxRQUFRLEdBQUU7QUFBQyxxQkFBTyxFQUFFQSxFQUFDO0FBQUEsWUFBQyxPQUFLO0FBQUMscUJBQU9BO0FBQUEsWUFBQztBQUFBLFVBQUM7QUFBQyxtQkFBUyxHQUFHQSxJQUFFQyxJQUFFQyxJQUFFO0FBQUMsZ0JBQUcsRUFBRUQsRUFBQyxHQUFFO0FBQUMscUJBQU0sRUFBQyxRQUFPLEdBQUcsRUFBRSxNQUFLLE9BQU1ELElBQUUsVUFBU0MsR0FBQztBQUFBLFlBQUMsT0FBSztBQUFDLHFCQUFNLEVBQUMsUUFBTyxFQUFFRCxFQUFDLEdBQUUsT0FBTUMsSUFBRSxVQUFTQyxHQUFDO0FBQUEsWUFBQztBQUFBLFVBQUM7QUFBQyxtQkFBUyxHQUFHRCxJQUFFQyxJQUFFQyxJQUFFO0FBQUMsZUFBRyxXQUFVO0FBQUMsa0JBQUlILEtBQUUsR0FBR0MsSUFBRUMsSUFBRUMsRUFBQztBQUFFLGNBQUFILEdBQUUsT0FBTyxpQkFBaUJBLEdBQUUsT0FBTUEsR0FBRSxRQUFRO0FBQUEsWUFBQyxDQUFDO0FBQUUsZ0JBQUlBLEtBQUUsRUFBRUUsRUFBQztBQUFFLG1CQUFPRixLQUFFRSxLQUFFQztBQUFBLFVBQUM7QUFBQyxtQkFBUyxHQUFHRixJQUFFQyxJQUFFQyxJQUFFO0FBQUMsZUFBRyxXQUFVO0FBQUMsa0JBQUlILEtBQUUsR0FBR0MsSUFBRUMsSUFBRUMsRUFBQztBQUFFLGNBQUFILEdBQUUsT0FBTyxvQkFBb0JBLEdBQUUsT0FBTUEsR0FBRSxRQUFRO0FBQUEsWUFBQyxDQUFDO0FBQUUsbUJBQU8sRUFBRUUsRUFBQyxJQUFFQSxLQUFFQztBQUFBLFVBQUM7QUFBQyxjQUFJLEtBQUcsR0FBRyxFQUFFLGNBQWMsUUFBUTtBQUFFLG1CQUFTLEdBQUdILElBQUVDLElBQUU7QUFBQyxnQkFBSUMsS0FBRSxHQUFHRixJQUFFQyxFQUFDO0FBQUUsZ0JBQUdDLElBQUU7QUFBQyxrQkFBR0EsT0FBSSxRQUFPO0FBQUMsdUJBQU0sQ0FBQyxHQUFHRixJQUFFQyxFQUFDLENBQUM7QUFBQSxjQUFDLE9BQUs7QUFBQyxvQkFBSUUsS0FBRSxFQUFFSCxJQUFFRSxFQUFDO0FBQUUsb0JBQUdDLEdBQUUsV0FBUyxHQUFFO0FBQUMsb0JBQUUsbUJBQWlCRCxLQUFFLFVBQVFELEtBQUUsdUJBQXVCO0FBQUUseUJBQU0sQ0FBQyxFQUFFO0FBQUEsZ0JBQUMsT0FBSztBQUFDLHlCQUFPRTtBQUFBLGdCQUFDO0FBQUEsY0FBQztBQUFBLFlBQUM7QUFBQSxVQUFDO0FBQUMsbUJBQVMsR0FBR0gsSUFBRUMsSUFBRTtBQUFDLG1CQUFPLEVBQUVELElBQUUsU0FBU0EsSUFBRTtBQUFDLHFCQUFPLEdBQUdBLElBQUVDLEVBQUMsS0FBRztBQUFBLFlBQUksQ0FBQztBQUFBLFVBQUM7QUFBQyxtQkFBUyxHQUFHRCxJQUFFO0FBQUMsZ0JBQUlDLEtBQUUsR0FBR0QsSUFBRSxXQUFXO0FBQUUsZ0JBQUdDLElBQUU7QUFBQyxrQkFBR0EsT0FBSSxRQUFPO0FBQUMsdUJBQU8sR0FBR0QsSUFBRSxXQUFXO0FBQUEsY0FBQyxPQUFLO0FBQUMsdUJBQU8sR0FBR0EsSUFBRUMsRUFBQztBQUFBLGNBQUM7QUFBQSxZQUFDLE9BQUs7QUFBQyxrQkFBSUMsS0FBRSxHQUFHRixFQUFDO0FBQUUsa0JBQUdFLEdBQUUsU0FBUTtBQUFDLHVCQUFPLEdBQUcsRUFBRTtBQUFBLGNBQUksT0FBSztBQUFDLHVCQUFPRjtBQUFBLGNBQUM7QUFBQSxZQUFDO0FBQUEsVUFBQztBQUFDLG1CQUFTLEdBQUdBLElBQUU7QUFBQyxnQkFBSUMsS0FBRSxFQUFFLE9BQU87QUFBbUIscUJBQVFDLEtBQUUsR0FBRUEsS0FBRUQsR0FBRSxRQUFPQyxNQUFJO0FBQUMsa0JBQUdGLE9BQUlDLEdBQUVDLEVBQUMsR0FBRTtBQUFDLHVCQUFPO0FBQUEsY0FBSTtBQUFBLFlBQUM7QUFBQyxtQkFBTztBQUFBLFVBQUs7QUFBQyxtQkFBUyxHQUFHRCxJQUFFQyxJQUFFO0FBQUMsZUFBR0QsR0FBRSxZQUFXLFNBQVNELElBQUU7QUFBQyxrQkFBRyxDQUFDRSxHQUFFLGFBQWFGLEdBQUUsSUFBSSxLQUFHLEdBQUdBLEdBQUUsSUFBSSxHQUFFO0FBQUMsZ0JBQUFDLEdBQUUsZ0JBQWdCRCxHQUFFLElBQUk7QUFBQSxjQUFDO0FBQUEsWUFBQyxDQUFDO0FBQUUsZUFBR0UsR0FBRSxZQUFXLFNBQVNGLElBQUU7QUFBQyxrQkFBRyxHQUFHQSxHQUFFLElBQUksR0FBRTtBQUFDLGdCQUFBQyxHQUFFLGFBQWFELEdBQUUsTUFBS0EsR0FBRSxLQUFLO0FBQUEsY0FBQztBQUFBLFlBQUMsQ0FBQztBQUFBLFVBQUM7QUFBQyxtQkFBUyxHQUFHQSxJQUFFQyxJQUFFO0FBQUMsZ0JBQUlDLEtBQUUsR0FBR0QsRUFBQztBQUFFLHFCQUFRRSxLQUFFLEdBQUVBLEtBQUVELEdBQUUsUUFBT0MsTUFBSTtBQUFDLGtCQUFJQyxLQUFFRixHQUFFQyxFQUFDO0FBQUUsa0JBQUc7QUFBQyxvQkFBR0MsR0FBRSxhQUFhSixFQUFDLEdBQUU7QUFBQyx5QkFBTztBQUFBLGdCQUFJO0FBQUEsY0FBQyxTQUFPQSxJQUFFO0FBQUMsa0JBQUVBLEVBQUM7QUFBQSxjQUFDO0FBQUEsWUFBQztBQUFDLG1CQUFPQSxPQUFJO0FBQUEsVUFBVztBQUFDLG1CQUFTLEdBQUdBLElBQUVJLElBQUVDLElBQUU7QUFBQyxnQkFBSUosS0FBRSxNQUFJLEdBQUdHLElBQUUsSUFBSTtBQUFFLGdCQUFJRSxLQUFFO0FBQVksZ0JBQUdOLE9BQUksUUFBTztBQUFBLFlBQUMsV0FBU0EsR0FBRSxRQUFRLEdBQUcsSUFBRSxHQUFFO0FBQUMsY0FBQU0sS0FBRU4sR0FBRSxPQUFPLEdBQUVBLEdBQUUsUUFBUSxHQUFHLENBQUM7QUFBRSxjQUFBQyxLQUFFRCxHQUFFLE9BQU9BLEdBQUUsUUFBUSxHQUFHLElBQUUsR0FBRUEsR0FBRSxNQUFNO0FBQUEsWUFBQyxPQUFLO0FBQUMsY0FBQU0sS0FBRU47QUFBQSxZQUFDO0FBQUMsZ0JBQUlFLEtBQUUsR0FBRyxFQUFFLGlCQUFpQkQsRUFBQztBQUFFLGdCQUFHQyxJQUFFO0FBQUMsaUJBQUdBLElBQUUsU0FBU0YsSUFBRTtBQUFDLG9CQUFJQztBQUFFLG9CQUFJQyxLQUFFRSxHQUFFLFVBQVUsSUFBSTtBQUFFLGdCQUFBSCxLQUFFLEdBQUcsRUFBRSx1QkFBdUI7QUFBRSxnQkFBQUEsR0FBRSxZQUFZQyxFQUFDO0FBQUUsb0JBQUcsQ0FBQyxHQUFHSSxJQUFFTixFQUFDLEdBQUU7QUFBQyxrQkFBQUMsS0FBRUM7QUFBQSxnQkFBQztBQUFDLG9CQUFJQyxLQUFFLEVBQUMsWUFBVyxNQUFLLFFBQU9ILElBQUUsVUFBU0MsR0FBQztBQUFFLG9CQUFHLENBQUMsR0FBR0QsSUFBRSxzQkFBcUJHLEVBQUMsRUFBRTtBQUFPLGdCQUFBSCxLQUFFRyxHQUFFO0FBQU8sb0JBQUdBLEdBQUUsWUFBWSxHQUFFO0FBQUMscUJBQUdHLElBQUVOLElBQUVBLElBQUVDLElBQUVJLEVBQUM7QUFBQSxnQkFBQztBQUFDLG1CQUFHQSxHQUFFLE1BQUssU0FBU0wsSUFBRTtBQUFDLHFCQUFHQSxJQUFFLHFCQUFvQkcsRUFBQztBQUFBLGdCQUFDLENBQUM7QUFBQSxjQUFDLENBQUM7QUFBRSxjQUFBQyxHQUFFLFdBQVcsWUFBWUEsRUFBQztBQUFBLFlBQUMsT0FBSztBQUFDLGNBQUFBLEdBQUUsV0FBVyxZQUFZQSxFQUFDO0FBQUUsaUJBQUcsR0FBRyxFQUFFLE1BQUsseUJBQXdCLEVBQUMsU0FBUUEsR0FBQyxDQUFDO0FBQUEsWUFBQztBQUFDLG1CQUFPSjtBQUFBLFVBQUM7QUFBQyxtQkFBUyxHQUFHQSxJQUFFQyxJQUFFQyxJQUFFO0FBQUMsZ0JBQUlDLEtBQUUsR0FBR0gsSUFBRSxlQUFlO0FBQUUsZ0JBQUdHLElBQUU7QUFBQyxrQkFBSUMsS0FBRUQsR0FBRSxNQUFNLEdBQUc7QUFBRSx1QkFBUUUsS0FBRSxHQUFFQSxLQUFFRCxHQUFFLFFBQU9DLE1BQUk7QUFBQyxvQkFBSUMsS0FBRUYsR0FBRUMsRUFBQyxFQUFFLE1BQU0sS0FBSSxDQUFDO0FBQUUsb0JBQUlFLEtBQUVELEdBQUUsQ0FBQyxFQUFFLEtBQUs7QUFBRSxvQkFBR0MsR0FBRSxRQUFRLEdBQUcsTUFBSSxHQUFFO0FBQUMsa0JBQUFBLEtBQUVBLEdBQUUsVUFBVSxDQUFDO0FBQUEsZ0JBQUM7QUFBQyxvQkFBSUMsS0FBRUYsR0FBRSxDQUFDLEtBQUc7QUFBTyxvQkFBSUcsS0FBRVIsR0FBRSxjQUFjLE1BQUlNLEVBQUM7QUFBRSxvQkFBR0UsSUFBRTtBQUFDLHFCQUFHRCxJQUFFQyxJQUFFUCxFQUFDO0FBQUEsZ0JBQUM7QUFBQSxjQUFDO0FBQUEsWUFBQztBQUFDLGVBQUcsRUFBRUQsSUFBRSxtQ0FBbUMsR0FBRSxTQUFTRCxJQUFFO0FBQUMsa0JBQUlDLEtBQUUsR0FBR0QsSUFBRSxhQUFhO0FBQUUsa0JBQUdDLE1BQUcsTUFBSztBQUFDLG1CQUFHQSxJQUFFRCxJQUFFRSxFQUFDO0FBQUEsY0FBQztBQUFBLFlBQUMsQ0FBQztBQUFBLFVBQUM7QUFBQyxtQkFBUyxHQUFHRixJQUFFO0FBQUMsZUFBRyxFQUFFQSxJQUFFLG1DQUFtQyxHQUFFLFNBQVNBLElBQUU7QUFBQyxrQkFBSUMsS0FBRSxHQUFHRCxJQUFFLElBQUk7QUFBRSxrQkFBSUUsS0FBRSxHQUFHLEVBQUUsZUFBZUQsRUFBQztBQUFFLGtCQUFHQyxNQUFHLE1BQUs7QUFBQyxnQkFBQUYsR0FBRSxXQUFXLGFBQWFFLElBQUVGLEVBQUM7QUFBQSxjQUFDO0FBQUEsWUFBQyxDQUFDO0FBQUEsVUFBQztBQUFDLG1CQUFTLEdBQUdNLElBQUVOLElBQUVPLElBQUU7QUFBQyxlQUFHUCxHQUFFLGlCQUFpQixNQUFNLEdBQUUsU0FBU0EsSUFBRTtBQUFDLGtCQUFJQyxLQUFFLEdBQUdELElBQUUsSUFBSTtBQUFFLGtCQUFHQyxNQUFHQSxHQUFFLFNBQU8sR0FBRTtBQUFDLG9CQUFJQyxLQUFFRCxHQUFFLFFBQVEsS0FBSSxLQUFLO0FBQUUsb0JBQUlFLEtBQUVILEdBQUUsUUFBUSxRQUFRLEtBQUksS0FBSztBQUFFLG9CQUFJSSxLQUFFRSxHQUFFLGNBQWNILEtBQUUsVUFBUUQsS0FBRSxJQUFJO0FBQUUsb0JBQUdFLE1BQUdBLE9BQUlFLElBQUU7QUFBQyxzQkFBSUQsS0FBRUwsR0FBRSxVQUFVO0FBQUUscUJBQUdBLElBQUVJLEVBQUM7QUFBRSxrQkFBQUcsR0FBRSxNQUFNLEtBQUssV0FBVTtBQUFDLHVCQUFHUCxJQUFFSyxFQUFDO0FBQUEsa0JBQUMsQ0FBQztBQUFBLGdCQUFDO0FBQUEsY0FBQztBQUFBLFlBQUMsQ0FBQztBQUFBLFVBQUM7QUFBQyxtQkFBUyxHQUFHTCxJQUFFO0FBQUMsbUJBQU8sV0FBVTtBQUFDLGdCQUFFQSxJQUFFLEVBQUUsT0FBTyxVQUFVO0FBQUUsaUJBQUdBLEVBQUM7QUFBRSxpQkFBR0EsRUFBQztBQUFFLGlCQUFHQSxFQUFDO0FBQUUsaUJBQUdBLElBQUUsV0FBVztBQUFBLFlBQUM7QUFBQSxVQUFDO0FBQUMsbUJBQVMsR0FBR0EsSUFBRTtBQUFDLGdCQUFJQyxLQUFFO0FBQWMsZ0JBQUlDLEtBQUUsRUFBRUYsSUFBRUMsRUFBQyxJQUFFRCxLQUFFQSxHQUFFLGNBQWNDLEVBQUM7QUFBRSxnQkFBR0MsTUFBRyxNQUFLO0FBQUMsY0FBQUEsR0FBRSxNQUFNO0FBQUEsWUFBQztBQUFBLFVBQUM7QUFBQyxtQkFBUyxFQUFFRixJQUFFQyxJQUFFQyxJQUFFQyxJQUFFO0FBQUMsZUFBR0gsSUFBRUUsSUFBRUMsRUFBQztBQUFFLG1CQUFNRCxHQUFFLFdBQVcsU0FBTyxHQUFFO0FBQUMsa0JBQUlFLEtBQUVGLEdBQUU7QUFBVyxnQkFBRUUsSUFBRSxFQUFFLE9BQU8sVUFBVTtBQUFFLGNBQUFKLEdBQUUsYUFBYUksSUFBRUgsRUFBQztBQUFFLGtCQUFHRyxHQUFFLGFBQVcsS0FBSyxhQUFXQSxHQUFFLGFBQVcsS0FBSyxjQUFhO0FBQUMsZ0JBQUFELEdBQUUsTUFBTSxLQUFLLEdBQUdDLEVBQUMsQ0FBQztBQUFBLGNBQUM7QUFBQSxZQUFDO0FBQUEsVUFBQztBQUFDLG1CQUFTLEdBQUdKLElBQUVDLElBQUU7QUFBQyxnQkFBSUMsS0FBRTtBQUFFLG1CQUFNQSxLQUFFRixHQUFFLFFBQU87QUFBQyxjQUFBQyxNQUFHQSxNQUFHLEtBQUdBLEtBQUVELEdBQUUsV0FBV0UsSUFBRyxJQUFFO0FBQUEsWUFBQztBQUFDLG1CQUFPRDtBQUFBLFVBQUM7QUFBQyxtQkFBUyxHQUFHRCxJQUFFO0FBQUMsZ0JBQUlDLEtBQUU7QUFBRSxnQkFBR0QsR0FBRSxZQUFXO0FBQUMsdUJBQVFFLEtBQUUsR0FBRUEsS0FBRUYsR0FBRSxXQUFXLFFBQU9FLE1BQUk7QUFBQyxvQkFBSUMsS0FBRUgsR0FBRSxXQUFXRSxFQUFDO0FBQUUsb0JBQUdDLEdBQUUsT0FBTTtBQUFDLGtCQUFBRixLQUFFLEdBQUdFLEdBQUUsTUFBS0YsRUFBQztBQUFFLGtCQUFBQSxLQUFFLEdBQUdFLEdBQUUsT0FBTUYsRUFBQztBQUFBLGdCQUFDO0FBQUEsY0FBQztBQUFBLFlBQUM7QUFBQyxtQkFBT0E7QUFBQSxVQUFDO0FBQUMsbUJBQVMsR0FBR0QsSUFBRTtBQUFDLGdCQUFJQyxLQUFFLEdBQUdELEVBQUM7QUFBRSxnQkFBR0MsR0FBRSxZQUFXO0FBQUMsdUJBQVFDLEtBQUUsR0FBRUEsS0FBRUQsR0FBRSxXQUFXLFFBQU9DLE1BQUk7QUFBQyxzQkFBTUMsS0FBRUYsR0FBRSxXQUFXQyxFQUFDO0FBQUUsZ0JBQUFGLEdBQUUsb0JBQW9CRyxHQUFFLE9BQU1BLEdBQUUsUUFBUTtBQUFBLGNBQUM7QUFBQyxxQkFBT0YsR0FBRTtBQUFBLFlBQVU7QUFBQSxVQUFDO0FBQUMsbUJBQVMsR0FBR0QsSUFBRTtBQUFDLGdCQUFJQyxLQUFFLEdBQUdELEVBQUM7QUFBRSxnQkFBR0MsR0FBRSxTQUFRO0FBQUMsMkJBQWFBLEdBQUUsT0FBTztBQUFBLFlBQUM7QUFBQyxnQkFBR0EsR0FBRSxXQUFVO0FBQUMsY0FBQUEsR0FBRSxVQUFVLE1BQU07QUFBQSxZQUFDO0FBQUMsZ0JBQUdBLEdBQUUsZ0JBQWU7QUFBQyxjQUFBQSxHQUFFLGVBQWUsTUFBTTtBQUFBLFlBQUM7QUFBQyxnQkFBR0EsR0FBRSxlQUFjO0FBQUMsaUJBQUdBLEdBQUUsZUFBYyxTQUFTRCxJQUFFO0FBQUMsb0JBQUdBLEdBQUUsSUFBRztBQUFDLGtCQUFBQSxHQUFFLEdBQUcsb0JBQW9CQSxHQUFFLFNBQVFBLEdBQUUsUUFBUTtBQUFBLGdCQUFDO0FBQUEsY0FBQyxDQUFDO0FBQUEsWUFBQztBQUFDLGVBQUdBLEVBQUM7QUFBRSxlQUFHLE9BQU8sS0FBS0MsRUFBQyxHQUFFLFNBQVNELElBQUU7QUFBQyxxQkFBT0MsR0FBRUQsRUFBQztBQUFBLFlBQUMsQ0FBQztBQUFBLFVBQUM7QUFBQyxtQkFBUyxFQUFFQSxJQUFFO0FBQUMsZUFBR0EsSUFBRSwyQkFBMkI7QUFBRSxlQUFHQSxFQUFDO0FBQUUsZ0JBQUdBLEdBQUUsVUFBUztBQUFDLGlCQUFHQSxHQUFFLFVBQVMsU0FBU0EsSUFBRTtBQUFDLGtCQUFFQSxFQUFDO0FBQUEsY0FBQyxDQUFDO0FBQUEsWUFBQztBQUFBLFVBQUM7QUFBQyxtQkFBUyxHQUFHQyxJQUFFRCxJQUFFRSxJQUFFO0FBQUMsZ0JBQUdELEdBQUUsWUFBVSxRQUFPO0FBQUMscUJBQU8sR0FBR0EsSUFBRUQsSUFBRUUsRUFBQztBQUFBLFlBQUMsT0FBSztBQUFDLGtCQUFJQztBQUFFLGtCQUFJQyxLQUFFSCxHQUFFO0FBQWdCLGdCQUFFLEVBQUVBLEVBQUMsR0FBRUEsSUFBRUQsSUFBRUUsRUFBQztBQUFFLGtCQUFHRSxNQUFHLE1BQUs7QUFBQyxnQkFBQUQsS0FBRSxFQUFFRixFQUFDLEVBQUU7QUFBQSxjQUFVLE9BQUs7QUFBQyxnQkFBQUUsS0FBRUMsR0FBRTtBQUFBLGNBQVc7QUFBQyxjQUFBRixHQUFFLE9BQUtBLEdBQUUsS0FBSyxPQUFPLFNBQVNGLElBQUU7QUFBQyx1QkFBT0EsTUFBR0M7QUFBQSxjQUFDLENBQUM7QUFBRSxxQkFBTUUsTUFBR0EsT0FBSUYsSUFBRTtBQUFDLG9CQUFHRSxHQUFFLGFBQVcsS0FBSyxjQUFhO0FBQUMsa0JBQUFELEdBQUUsS0FBSyxLQUFLQyxFQUFDO0FBQUEsZ0JBQUM7QUFBQyxnQkFBQUEsS0FBRUEsR0FBRTtBQUFBLGNBQWtCO0FBQUMsZ0JBQUVGLEVBQUM7QUFBRSxnQkFBRUEsRUFBQyxFQUFFLFlBQVlBLEVBQUM7QUFBQSxZQUFDO0FBQUEsVUFBQztBQUFDLG1CQUFTLEdBQUdELElBQUVDLElBQUVDLElBQUU7QUFBQyxtQkFBTyxFQUFFRixJQUFFQSxHQUFFLFlBQVdDLElBQUVDLEVBQUM7QUFBQSxVQUFDO0FBQUMsbUJBQVMsR0FBR0YsSUFBRUMsSUFBRUMsSUFBRTtBQUFDLG1CQUFPLEVBQUUsRUFBRUYsRUFBQyxHQUFFQSxJQUFFQyxJQUFFQyxFQUFDO0FBQUEsVUFBQztBQUFDLG1CQUFTLEdBQUdGLElBQUVDLElBQUVDLElBQUU7QUFBQyxtQkFBTyxFQUFFRixJQUFFLE1BQUtDLElBQUVDLEVBQUM7QUFBQSxVQUFDO0FBQUMsbUJBQVMsR0FBR0YsSUFBRUMsSUFBRUMsSUFBRTtBQUFDLG1CQUFPLEVBQUUsRUFBRUYsRUFBQyxHQUFFQSxHQUFFLGFBQVlDLElBQUVDLEVBQUM7QUFBQSxVQUFDO0FBQUMsbUJBQVMsR0FBR0YsSUFBRUMsSUFBRUMsSUFBRTtBQUFDLGNBQUVGLEVBQUM7QUFBRSxtQkFBTyxFQUFFQSxFQUFDLEVBQUUsWUFBWUEsRUFBQztBQUFBLFVBQUM7QUFBQyxtQkFBUyxHQUFHQSxJQUFFQyxJQUFFQyxJQUFFO0FBQUMsZ0JBQUlDLEtBQUVILEdBQUU7QUFBVyxjQUFFQSxJQUFFRyxJQUFFRixJQUFFQyxFQUFDO0FBQUUsZ0JBQUdDLElBQUU7QUFBQyxxQkFBTUEsR0FBRSxhQUFZO0FBQUMsa0JBQUVBLEdBQUUsV0FBVztBQUFFLGdCQUFBSCxHQUFFLFlBQVlHLEdBQUUsV0FBVztBQUFBLGNBQUM7QUFBQyxnQkFBRUEsRUFBQztBQUFFLGNBQUFILEdBQUUsWUFBWUcsRUFBQztBQUFBLFlBQUM7QUFBQSxVQUFDO0FBQUMsbUJBQVMsR0FBR0gsSUFBRUMsSUFBRUMsSUFBRTtBQUFDLGdCQUFJQyxLQUFFRCxNQUFHLEdBQUdGLElBQUUsV0FBVztBQUFFLGdCQUFHRyxJQUFFO0FBQUMsa0JBQUlDLEtBQUUsR0FBRyxFQUFFLHVCQUF1QjtBQUFFLGlCQUFHSCxHQUFFLGlCQUFpQkUsRUFBQyxHQUFFLFNBQVNILElBQUU7QUFBQyxnQkFBQUksR0FBRSxZQUFZSixFQUFDO0FBQUEsY0FBQyxDQUFDO0FBQUUsY0FBQUMsS0FBRUc7QUFBQSxZQUFDO0FBQUMsbUJBQU9IO0FBQUEsVUFBQztBQUFDLG1CQUFTLEdBQUdELElBQUVDLElBQUVDLElBQUVDLElBQUVDLElBQUU7QUFBQyxvQkFBT0osSUFBRTtBQUFBLGNBQUMsS0FBSTtBQUFPO0FBQUEsY0FBTyxLQUFJO0FBQVksbUJBQUdFLElBQUVDLElBQUVDLEVBQUM7QUFBRTtBQUFBLGNBQU8sS0FBSTtBQUFhLG1CQUFHRixJQUFFQyxJQUFFQyxFQUFDO0FBQUU7QUFBQSxjQUFPLEtBQUk7QUFBYyxtQkFBR0YsSUFBRUMsSUFBRUMsRUFBQztBQUFFO0FBQUEsY0FBTyxLQUFJO0FBQVksbUJBQUdGLElBQUVDLElBQUVDLEVBQUM7QUFBRTtBQUFBLGNBQU8sS0FBSTtBQUFXLG1CQUFHRixJQUFFQyxJQUFFQyxFQUFDO0FBQUU7QUFBQSxjQUFPLEtBQUk7QUFBUyxtQkFBR0YsSUFBRUMsSUFBRUMsRUFBQztBQUFFO0FBQUEsY0FBTztBQUFRLG9CQUFJQyxLQUFFLEdBQUdKLEVBQUM7QUFBRSx5QkFBUUssS0FBRSxHQUFFQSxLQUFFRCxHQUFFLFFBQU9DLE1BQUk7QUFBQyxzQkFBSUMsS0FBRUYsR0FBRUMsRUFBQztBQUFFLHNCQUFHO0FBQUMsd0JBQUlFLEtBQUVELEdBQUUsV0FBV1AsSUFBRUUsSUFBRUMsSUFBRUMsRUFBQztBQUFFLHdCQUFHSSxJQUFFO0FBQUMsMEJBQUcsT0FBT0EsR0FBRSxXQUFTLGFBQVk7QUFBQyxpQ0FBUUMsS0FBRSxHQUFFQSxLQUFFRCxHQUFFLFFBQU9DLE1BQUk7QUFBQyw4QkFBSUMsS0FBRUYsR0FBRUMsRUFBQztBQUFFLDhCQUFHQyxHQUFFLGFBQVcsS0FBSyxhQUFXQSxHQUFFLGFBQVcsS0FBSyxjQUFhO0FBQUMsNEJBQUFOLEdBQUUsTUFBTSxLQUFLLEdBQUdNLEVBQUMsQ0FBQztBQUFBLDBCQUFDO0FBQUEsd0JBQUM7QUFBQSxzQkFBQztBQUFDO0FBQUEsb0JBQU07QUFBQSxrQkFBQyxTQUFPVixJQUFFO0FBQUMsc0JBQUVBLEVBQUM7QUFBQSxrQkFBQztBQUFBLGdCQUFDO0FBQUMsb0JBQUdBLE9BQUksYUFBWTtBQUFDLHFCQUFHRSxJQUFFQyxJQUFFQyxFQUFDO0FBQUEsZ0JBQUMsT0FBSztBQUFDLHFCQUFHLEVBQUUsT0FBTyxrQkFBaUJILElBQUVDLElBQUVDLElBQUVDLEVBQUM7QUFBQSxnQkFBQztBQUFBLFlBQUM7QUFBQSxVQUFDO0FBQUMsbUJBQVMsR0FBR0osSUFBRTtBQUFDLGdCQUFHQSxHQUFFLFFBQVEsUUFBUSxJQUFFLElBQUc7QUFBQyxrQkFBSUMsS0FBRUQsR0FBRSxRQUFRLEdBQUUsRUFBRTtBQUFFLGtCQUFJRSxLQUFFRCxHQUFFLE1BQU0sQ0FBQztBQUFFLGtCQUFHQyxJQUFFO0FBQUMsdUJBQU9BLEdBQUUsQ0FBQztBQUFBLGNBQUM7QUFBQSxZQUFDO0FBQUEsVUFBQztBQUFDLG1CQUFTLEdBQUdGLElBQUVDLElBQUVDLElBQUVDLElBQUVDLElBQUVDLElBQUU7QUFBQyxZQUFBRCxHQUFFLFFBQU0sR0FBR0QsRUFBQztBQUFFLGdCQUFJRyxLQUFFLEVBQUVILEVBQUM7QUFBRSxnQkFBR0csSUFBRTtBQUFDLGlCQUFHSixJQUFFSSxJQUFFRixFQUFDO0FBQUUsY0FBQUUsS0FBRSxHQUFHSixJQUFFSSxJQUFFRCxFQUFDO0FBQUUsaUJBQUdDLEVBQUM7QUFBRSxxQkFBTyxHQUFHTixJQUFFRSxJQUFFRCxJQUFFSyxJQUFFRixFQUFDO0FBQUEsWUFBQztBQUFBLFVBQUM7QUFBQyxtQkFBUyxHQUFHSixJQUFFQyxJQUFFQyxJQUFFO0FBQUMsZ0JBQUlDLEtBQUVILEdBQUUsa0JBQWtCQyxFQUFDO0FBQUUsZ0JBQUdFLEdBQUUsUUFBUSxHQUFHLE1BQUksR0FBRTtBQUFDLGtCQUFJQyxLQUFFLEVBQUVELEVBQUM7QUFBRSx1QkFBUUUsTUFBS0QsSUFBRTtBQUFDLG9CQUFHQSxHQUFFLGVBQWVDLEVBQUMsR0FBRTtBQUFDLHNCQUFJQyxLQUFFRixHQUFFQyxFQUFDO0FBQUUsc0JBQUcsQ0FBQyxFQUFFQyxFQUFDLEdBQUU7QUFBQyxvQkFBQUEsS0FBRSxFQUFDLE9BQU1BLEdBQUM7QUFBQSxrQkFBQztBQUFDLHFCQUFHSixJQUFFRyxJQUFFQyxFQUFDO0FBQUEsZ0JBQUM7QUFBQSxjQUFDO0FBQUEsWUFBQyxPQUFLO0FBQUMsa0JBQUlDLEtBQUVKLEdBQUUsTUFBTSxHQUFHO0FBQUUsdUJBQVFLLEtBQUUsR0FBRUEsS0FBRUQsR0FBRSxRQUFPQyxNQUFJO0FBQUMsbUJBQUdOLElBQUVLLEdBQUVDLEVBQUMsRUFBRSxLQUFLLEdBQUUsQ0FBQyxDQUFDO0FBQUEsY0FBQztBQUFBLFlBQUM7QUFBQSxVQUFDO0FBQUMsY0FBSSxLQUFHO0FBQUssY0FBSSxJQUFFO0FBQVEsY0FBSSxLQUFHO0FBQWEsY0FBSSxLQUFHO0FBQWdCLGNBQUksS0FBRyxDQUFDLEtBQUksS0FBSSxHQUFHO0FBQUUsY0FBSSxLQUFHO0FBQVEsY0FBSSxLQUFHO0FBQU8sY0FBSSxLQUFHO0FBQU8sbUJBQVMsR0FBR1IsSUFBRTtBQUFDLGdCQUFJQyxLQUFFLENBQUM7QUFBRSxnQkFBSUMsS0FBRTtBQUFFLG1CQUFNQSxLQUFFRixHQUFFLFFBQU87QUFBQyxrQkFBRyxHQUFHLEtBQUtBLEdBQUUsT0FBT0UsRUFBQyxDQUFDLEdBQUU7QUFBQyxvQkFBSUMsS0FBRUQ7QUFBRSx1QkFBTSxHQUFHLEtBQUtGLEdBQUUsT0FBT0UsS0FBRSxDQUFDLENBQUMsR0FBRTtBQUFDLGtCQUFBQTtBQUFBLGdCQUFHO0FBQUMsZ0JBQUFELEdBQUUsS0FBS0QsR0FBRSxPQUFPRyxJQUFFRCxLQUFFQyxLQUFFLENBQUMsQ0FBQztBQUFBLGNBQUMsV0FBUyxHQUFHLFFBQVFILEdBQUUsT0FBT0UsRUFBQyxDQUFDLE1BQUksSUFBRztBQUFDLG9CQUFJRSxLQUFFSixHQUFFLE9BQU9FLEVBQUM7QUFBRSxvQkFBSUMsS0FBRUQ7QUFBRSxnQkFBQUE7QUFBSSx1QkFBTUEsS0FBRUYsR0FBRSxVQUFRQSxHQUFFLE9BQU9FLEVBQUMsTUFBSUUsSUFBRTtBQUFDLHNCQUFHSixHQUFFLE9BQU9FLEVBQUMsTUFBSSxNQUFLO0FBQUMsb0JBQUFBO0FBQUEsa0JBQUc7QUFBQyxrQkFBQUE7QUFBQSxnQkFBRztBQUFDLGdCQUFBRCxHQUFFLEtBQUtELEdBQUUsT0FBT0csSUFBRUQsS0FBRUMsS0FBRSxDQUFDLENBQUM7QUFBQSxjQUFDLE9BQUs7QUFBQyxvQkFBSUUsS0FBRUwsR0FBRSxPQUFPRSxFQUFDO0FBQUUsZ0JBQUFELEdBQUUsS0FBS0ksRUFBQztBQUFBLGNBQUM7QUFBQyxjQUFBSDtBQUFBLFlBQUc7QUFBQyxtQkFBT0Q7QUFBQSxVQUFDO0FBQUMsbUJBQVMsR0FBR0QsSUFBRUMsSUFBRUMsSUFBRTtBQUFDLG1CQUFPLEdBQUcsS0FBS0YsR0FBRSxPQUFPLENBQUMsQ0FBQyxLQUFHQSxPQUFJLFVBQVFBLE9BQUksV0FBU0EsT0FBSSxVQUFRQSxPQUFJRSxNQUFHRCxPQUFJO0FBQUEsVUFBRztBQUFDLG1CQUFTLEdBQUdELElBQUVDLElBQUVDLElBQUU7QUFBQyxnQkFBR0QsR0FBRSxDQUFDLE1BQUksS0FBSTtBQUFDLGNBQUFBLEdBQUUsTUFBTTtBQUFFLGtCQUFJRSxLQUFFO0FBQUUsa0JBQUlDLEtBQUUsdUJBQXFCRixLQUFFO0FBQWMsa0JBQUlHLEtBQUU7QUFBSyxxQkFBTUosR0FBRSxTQUFPLEdBQUU7QUFBQyxvQkFBSUssS0FBRUwsR0FBRSxDQUFDO0FBQUUsb0JBQUdLLE9BQUksS0FBSTtBQUFDLGtCQUFBSDtBQUFJLHNCQUFHQSxPQUFJLEdBQUU7QUFBQyx3QkFBR0UsT0FBSSxNQUFLO0FBQUMsc0JBQUFELEtBQUVBLEtBQUU7QUFBQSxvQkFBTTtBQUFDLG9CQUFBSCxHQUFFLE1BQU07QUFBRSxvQkFBQUcsTUFBRztBQUFNLHdCQUFHO0FBQUMsMEJBQUlHLEtBQUUsR0FBR1AsSUFBRSxXQUFVO0FBQUMsK0JBQU8sU0FBU0ksRUFBQyxFQUFFO0FBQUEsc0JBQUMsR0FBRSxXQUFVO0FBQUMsK0JBQU87QUFBQSxzQkFBSSxDQUFDO0FBQUUsc0JBQUFHLEdBQUUsU0FBT0g7QUFBRSw2QkFBT0c7QUFBQSxvQkFBQyxTQUFPUCxJQUFFO0FBQUMseUJBQUcsR0FBRyxFQUFFLE1BQUsscUJBQW9CLEVBQUMsT0FBTUEsSUFBRSxRQUFPSSxHQUFDLENBQUM7QUFBRSw2QkFBTztBQUFBLG9CQUFJO0FBQUEsa0JBQUM7QUFBQSxnQkFBQyxXQUFTRSxPQUFJLEtBQUk7QUFBQyxrQkFBQUg7QUFBQSxnQkFBRztBQUFDLG9CQUFHLEdBQUdHLElBQUVELElBQUVILEVBQUMsR0FBRTtBQUFDLGtCQUFBRSxNQUFHLE9BQUtGLEtBQUUsTUFBSUksS0FBRSxVQUFRSixLQUFFLE1BQUlJLEtBQUUsaUJBQWVBLEtBQUU7QUFBQSxnQkFBSSxPQUFLO0FBQUMsa0JBQUFGLEtBQUVBLEtBQUVFO0FBQUEsZ0JBQUM7QUFBQyxnQkFBQUQsS0FBRUosR0FBRSxNQUFNO0FBQUEsY0FBQztBQUFBLFlBQUM7QUFBQSxVQUFDO0FBQUMsbUJBQVMsRUFBRUQsSUFBRUMsSUFBRTtBQUFDLGdCQUFJQyxLQUFFO0FBQUcsbUJBQU1GLEdBQUUsU0FBTyxLQUFHLENBQUNDLEdBQUUsS0FBS0QsR0FBRSxDQUFDLENBQUMsR0FBRTtBQUFDLGNBQUFFLE1BQUdGLEdBQUUsTUFBTTtBQUFBLFlBQUM7QUFBQyxtQkFBT0U7QUFBQSxVQUFDO0FBQUMsbUJBQVMsR0FBR0YsSUFBRTtBQUFDLGdCQUFJQztBQUFFLGdCQUFHRCxHQUFFLFNBQU8sS0FBRyxHQUFHLEtBQUtBLEdBQUUsQ0FBQyxDQUFDLEdBQUU7QUFBQyxjQUFBQSxHQUFFLE1BQU07QUFBRSxjQUFBQyxLQUFFLEVBQUVELElBQUUsRUFBRSxFQUFFLEtBQUs7QUFBRSxjQUFBQSxHQUFFLE1BQU07QUFBQSxZQUFDLE9BQUs7QUFBQyxjQUFBQyxLQUFFLEVBQUVELElBQUUsQ0FBQztBQUFBLFlBQUM7QUFBQyxtQkFBT0M7QUFBQSxVQUFDO0FBQUMsY0FBSSxLQUFHO0FBQTBCLG1CQUFTLEdBQUdELElBQUVDLElBQUVDLElBQUU7QUFBQyxnQkFBSUMsS0FBRSxDQUFDO0FBQUUsZ0JBQUlDLEtBQUUsR0FBR0gsRUFBQztBQUFFLGVBQUU7QUFBQyxnQkFBRUcsSUFBRSxFQUFFO0FBQUUsa0JBQUlDLEtBQUVELEdBQUU7QUFBTyxrQkFBSUUsS0FBRSxFQUFFRixJQUFFLFNBQVM7QUFBRSxrQkFBR0UsT0FBSSxJQUFHO0FBQUMsb0JBQUdBLE9BQUksU0FBUTtBQUFDLHNCQUFJQyxLQUFFLEVBQUMsU0FBUSxRQUFPO0FBQUUsb0JBQUVILElBQUUsRUFBRTtBQUFFLGtCQUFBRyxHQUFFLGVBQWEsRUFBRSxFQUFFSCxJQUFFLFNBQVMsQ0FBQztBQUFFLG9CQUFFQSxJQUFFLEVBQUU7QUFBRSxzQkFBSUksS0FBRSxHQUFHUixJQUFFSSxJQUFFLE9BQU87QUFBRSxzQkFBR0ksSUFBRTtBQUFDLG9CQUFBRCxHQUFFLGNBQVlDO0FBQUEsa0JBQUM7QUFBQyxrQkFBQUwsR0FBRSxLQUFLSSxFQUFDO0FBQUEsZ0JBQUMsV0FBU0QsR0FBRSxRQUFRLE1BQU0sTUFBSSxHQUFFO0FBQUMsa0JBQUFILEdBQUUsS0FBSyxFQUFDLFNBQVEsT0FBTSxVQUFTRyxHQUFFLE9BQU8sQ0FBQyxFQUFDLENBQUM7QUFBQSxnQkFBQyxPQUFLO0FBQUMsc0JBQUlHLEtBQUUsRUFBQyxTQUFRSCxHQUFDO0FBQUUsc0JBQUlFLEtBQUUsR0FBR1IsSUFBRUksSUFBRSxPQUFPO0FBQUUsc0JBQUdJLElBQUU7QUFBQyxvQkFBQUMsR0FBRSxjQUFZRDtBQUFBLGtCQUFDO0FBQUMseUJBQU1KLEdBQUUsU0FBTyxLQUFHQSxHQUFFLENBQUMsTUFBSSxLQUFJO0FBQUMsc0JBQUVBLElBQUUsRUFBRTtBQUFFLHdCQUFJTSxLQUFFTixHQUFFLE1BQU07QUFBRSx3QkFBR00sT0FBSSxXQUFVO0FBQUMsc0JBQUFELEdBQUUsVUFBUTtBQUFBLG9CQUFJLFdBQVNDLE9BQUksUUFBTztBQUFDLHNCQUFBRCxHQUFFLE9BQUs7QUFBQSxvQkFBSSxXQUFTQyxPQUFJLFdBQVU7QUFBQyxzQkFBQUQsR0FBRSxVQUFRO0FBQUEsb0JBQUksV0FBU0MsT0FBSSxXQUFTTixHQUFFLENBQUMsTUFBSSxLQUFJO0FBQUMsc0JBQUFBLEdBQUUsTUFBTTtBQUFFLHNCQUFBSyxHQUFFLFFBQU0sRUFBRSxFQUFFTCxJQUFFLENBQUMsQ0FBQztBQUFBLG9CQUFDLFdBQVNNLE9BQUksVUFBUU4sR0FBRSxDQUFDLE1BQUksS0FBSTtBQUFDLHNCQUFBQSxHQUFFLE1BQU07QUFBRSwwQkFBRyxHQUFHLEtBQUtBLEdBQUUsQ0FBQyxDQUFDLEdBQUU7QUFBQyw0QkFBSU8sS0FBRSxHQUFHUCxFQUFDO0FBQUEsc0JBQUMsT0FBSztBQUFDLDRCQUFJTyxLQUFFLEVBQUVQLElBQUUsQ0FBQztBQUFFLDRCQUFHTyxPQUFJLGFBQVdBLE9BQUksVUFBUUEsT0FBSSxVQUFRQSxPQUFJLFlBQVc7QUFBQywwQkFBQVAsR0FBRSxNQUFNO0FBQUUsOEJBQUlRLEtBQUUsR0FBR1IsRUFBQztBQUFFLDhCQUFHUSxHQUFFLFNBQU8sR0FBRTtBQUFDLDRCQUFBRCxNQUFHLE1BQUlDO0FBQUEsMEJBQUM7QUFBQSx3QkFBQztBQUFBLHNCQUFDO0FBQUMsc0JBQUFILEdBQUUsT0FBS0U7QUFBQSxvQkFBQyxXQUFTRCxPQUFJLFlBQVVOLEdBQUUsQ0FBQyxNQUFJLEtBQUk7QUFBQyxzQkFBQUEsR0FBRSxNQUFNO0FBQUUsc0JBQUFLLEdBQUUsU0FBTyxHQUFHTCxFQUFDO0FBQUEsb0JBQUMsV0FBU00sT0FBSSxjQUFZTixHQUFFLENBQUMsTUFBSSxLQUFJO0FBQUMsc0JBQUFBLEdBQUUsTUFBTTtBQUFFLHNCQUFBSyxHQUFFLFdBQVMsRUFBRSxFQUFFTCxJQUFFLENBQUMsQ0FBQztBQUFBLG9CQUFDLFdBQVNNLE9BQUksV0FBU04sR0FBRSxDQUFDLE1BQUksS0FBSTtBQUFDLHNCQUFBQSxHQUFFLE1BQU07QUFBRSxzQkFBQUssR0FBRSxRQUFNLEVBQUVMLElBQUUsQ0FBQztBQUFBLG9CQUFDLFdBQVNNLE9BQUksVUFBUU4sR0FBRSxDQUFDLE1BQUksS0FBSTtBQUFDLHNCQUFBQSxHQUFFLE1BQU07QUFBRSxzQkFBQUssR0FBRUMsRUFBQyxJQUFFLEdBQUdOLEVBQUM7QUFBQSxvQkFBQyxXQUFTTSxPQUFJLGVBQWFOLEdBQUUsQ0FBQyxNQUFJLEtBQUk7QUFBQyxzQkFBQUEsR0FBRSxNQUFNO0FBQUUsc0JBQUFLLEdBQUVDLEVBQUMsSUFBRSxFQUFFTixJQUFFLENBQUM7QUFBQSxvQkFBQyxPQUFLO0FBQUMseUJBQUdKLElBQUUscUJBQW9CLEVBQUMsT0FBTUksR0FBRSxNQUFNLEVBQUMsQ0FBQztBQUFBLG9CQUFDO0FBQUEsa0JBQUM7QUFBQyxrQkFBQUQsR0FBRSxLQUFLTSxFQUFDO0FBQUEsZ0JBQUM7QUFBQSxjQUFDO0FBQUMsa0JBQUdMLEdBQUUsV0FBU0MsSUFBRTtBQUFDLG1CQUFHTCxJQUFFLHFCQUFvQixFQUFDLE9BQU1JLEdBQUUsTUFBTSxFQUFDLENBQUM7QUFBQSxjQUFDO0FBQUMsZ0JBQUVBLElBQUUsRUFBRTtBQUFBLFlBQUMsU0FBT0EsR0FBRSxDQUFDLE1BQUksT0FBS0EsR0FBRSxNQUFNO0FBQUcsZ0JBQUdGLElBQUU7QUFBQyxjQUFBQSxHQUFFRCxFQUFDLElBQUVFO0FBQUEsWUFBQztBQUFDLG1CQUFPQTtBQUFBLFVBQUM7QUFBQyxtQkFBUyxHQUFHSCxJQUFFO0FBQUMsZ0JBQUlDLEtBQUUsR0FBR0QsSUFBRSxZQUFZO0FBQUUsZ0JBQUlFLEtBQUUsQ0FBQztBQUFFLGdCQUFHRCxJQUFFO0FBQUMsa0JBQUlFLEtBQUUsRUFBRSxPQUFPO0FBQWtCLGNBQUFELEtBQUVDLE1BQUdBLEdBQUVGLEVBQUMsS0FBRyxHQUFHRCxJQUFFQyxJQUFFRSxFQUFDO0FBQUEsWUFBQztBQUFDLGdCQUFHRCxHQUFFLFNBQU8sR0FBRTtBQUFDLHFCQUFPQTtBQUFBLFlBQUMsV0FBUyxFQUFFRixJQUFFLE1BQU0sR0FBRTtBQUFDLHFCQUFNLENBQUMsRUFBQyxTQUFRLFNBQVEsQ0FBQztBQUFBLFlBQUMsV0FBUyxFQUFFQSxJQUFFLDRDQUE0QyxHQUFFO0FBQUMscUJBQU0sQ0FBQyxFQUFDLFNBQVEsUUFBTyxDQUFDO0FBQUEsWUFBQyxXQUFTLEVBQUVBLElBQUUsRUFBRSxHQUFFO0FBQUMscUJBQU0sQ0FBQyxFQUFDLFNBQVEsU0FBUSxDQUFDO0FBQUEsWUFBQyxPQUFLO0FBQUMscUJBQU0sQ0FBQyxFQUFDLFNBQVEsUUFBTyxDQUFDO0FBQUEsWUFBQztBQUFBLFVBQUM7QUFBQyxtQkFBUyxHQUFHQSxJQUFFO0FBQUMsZUFBR0EsRUFBQyxFQUFFLFlBQVU7QUFBQSxVQUFJO0FBQUMsbUJBQVMsR0FBR0EsSUFBRUMsSUFBRUMsSUFBRTtBQUFDLGdCQUFJQyxLQUFFLEdBQUdILEVBQUM7QUFBRSxZQUFBRyxHQUFFLFVBQVEsV0FBVyxXQUFVO0FBQUMsa0JBQUcsR0FBR0gsRUFBQyxLQUFHRyxHQUFFLGNBQVksTUFBSztBQUFDLG9CQUFHLENBQUMsR0FBR0QsSUFBRUYsSUFBRSxHQUFHLG1CQUFrQixFQUFDLGFBQVlFLElBQUUsUUFBT0YsR0FBQyxDQUFDLENBQUMsR0FBRTtBQUFDLGtCQUFBQyxHQUFFRCxFQUFDO0FBQUEsZ0JBQUM7QUFBQyxtQkFBR0EsSUFBRUMsSUFBRUMsRUFBQztBQUFBLGNBQUM7QUFBQSxZQUFDLEdBQUVBLEdBQUUsWUFBWTtBQUFBLFVBQUM7QUFBQyxtQkFBUyxHQUFHRixJQUFFO0FBQUMsbUJBQU8sU0FBUyxhQUFXQSxHQUFFLFlBQVUsR0FBR0EsSUFBRSxNQUFNLEtBQUcsR0FBR0EsSUFBRSxNQUFNLEVBQUUsUUFBUSxHQUFHLE1BQUk7QUFBQSxVQUFDO0FBQUMsbUJBQVMsR0FBR0MsSUFBRUMsSUFBRUYsSUFBRTtBQUFDLGdCQUFHQyxHQUFFLFlBQVUsT0FBSyxHQUFHQSxFQUFDLE1BQUlBLEdBQUUsV0FBUyxNQUFJQSxHQUFFLFdBQVMsWUFBVUEsR0FBRSxZQUFVLFFBQU87QUFBQyxjQUFBQyxHQUFFLFVBQVE7QUFBSyxrQkFBSUMsSUFBRUM7QUFBRSxrQkFBR0gsR0FBRSxZQUFVLEtBQUk7QUFBQyxnQkFBQUUsS0FBRTtBQUFNLGdCQUFBQyxLQUFFLEdBQUdILElBQUUsTUFBTTtBQUFBLGNBQUMsT0FBSztBQUFDLG9CQUFJSSxLQUFFLEdBQUdKLElBQUUsUUFBUTtBQUFFLGdCQUFBRSxLQUFFRSxLQUFFQSxHQUFFLFlBQVksSUFBRTtBQUFNLG9CQUFHRixPQUFJLE9BQU07QUFBQSxnQkFBQztBQUFDLGdCQUFBQyxLQUFFLEdBQUdILElBQUUsUUFBUTtBQUFBLGNBQUM7QUFBQyxjQUFBRCxHQUFFLFFBQVEsU0FBU0EsSUFBRTtBQUFDLG1CQUFHQyxJQUFFLFNBQVNELElBQUVDLElBQUU7QUFBQyxzQkFBRyxFQUFFRCxJQUFFLEVBQUUsT0FBTyxlQUFlLEdBQUU7QUFBQyxzQkFBRUEsRUFBQztBQUFFO0FBQUEsa0JBQU07QUFBQyxxQkFBR0csSUFBRUMsSUFBRUosSUFBRUMsRUFBQztBQUFBLGdCQUFDLEdBQUVDLElBQUVGLElBQUUsSUFBSTtBQUFBLGNBQUMsQ0FBQztBQUFBLFlBQUM7QUFBQSxVQUFDO0FBQUMsbUJBQVMsR0FBR0EsSUFBRUMsSUFBRTtBQUFDLGdCQUFHRCxHQUFFLFNBQU8sWUFBVUEsR0FBRSxTQUFPLFNBQVE7QUFBQyxrQkFBR0MsR0FBRSxZQUFVLFFBQU87QUFBQyx1QkFBTztBQUFBLGNBQUk7QUFBQyxrQkFBRyxFQUFFQSxJQUFFLDhCQUE4QixLQUFHLEVBQUVBLElBQUUsTUFBTSxNQUFJLE1BQUs7QUFBQyx1QkFBTztBQUFBLGNBQUk7QUFBQyxrQkFBR0EsR0FBRSxZQUFVLE9BQUtBLEdBQUUsU0FBT0EsR0FBRSxhQUFhLE1BQU0sTUFBSSxPQUFLQSxHQUFFLGFBQWEsTUFBTSxFQUFFLFFBQVEsR0FBRyxNQUFJLElBQUc7QUFBQyx1QkFBTztBQUFBLGNBQUk7QUFBQSxZQUFDO0FBQUMsbUJBQU87QUFBQSxVQUFLO0FBQUMsbUJBQVMsR0FBR0QsSUFBRUMsSUFBRTtBQUFDLG1CQUFPLEdBQUdELEVBQUMsRUFBRSxXQUFTQSxHQUFFLFlBQVUsT0FBS0MsR0FBRSxTQUFPLFlBQVVBLEdBQUUsV0FBU0EsR0FBRTtBQUFBLFVBQVE7QUFBQyxtQkFBUyxHQUFHRCxJQUFFQyxJQUFFQyxJQUFFO0FBQUMsZ0JBQUlDLEtBQUVILEdBQUU7QUFBWSxnQkFBR0csSUFBRTtBQUFDLGtCQUFHO0FBQUMsdUJBQU9BLEdBQUUsS0FBS0YsSUFBRUMsRUFBQyxNQUFJO0FBQUEsY0FBSSxTQUFPRixJQUFFO0FBQUMsbUJBQUcsR0FBRyxFQUFFLE1BQUssMEJBQXlCLEVBQUMsT0FBTUEsSUFBRSxRQUFPRyxHQUFFLE9BQU0sQ0FBQztBQUFFLHVCQUFPO0FBQUEsY0FBSTtBQUFBLFlBQUM7QUFBQyxtQkFBTztBQUFBLFVBQUs7QUFBQyxtQkFBUyxHQUFHRSxJQUFFQyxJQUFFTixJQUFFTyxJQUFFQyxJQUFFO0FBQUMsZ0JBQUlDLEtBQUUsR0FBR0osRUFBQztBQUFFLGdCQUFJSjtBQUFFLGdCQUFHTSxHQUFFLE1BQUs7QUFBQyxjQUFBTixLQUFFLEVBQUVJLElBQUVFLEdBQUUsSUFBSTtBQUFBLFlBQUMsT0FBSztBQUFDLGNBQUFOLEtBQUUsQ0FBQ0ksRUFBQztBQUFBLFlBQUM7QUFBQyxnQkFBR0UsR0FBRSxTQUFRO0FBQUMsY0FBQU4sR0FBRSxRQUFRLFNBQVNELElBQUU7QUFBQyxvQkFBSUMsS0FBRSxHQUFHRCxFQUFDO0FBQUUsZ0JBQUFDLEdBQUUsWUFBVUQsR0FBRTtBQUFBLGNBQUssQ0FBQztBQUFBLFlBQUM7QUFBQyxlQUFHQyxJQUFFLFNBQVNFLElBQUU7QUFBQyxrQkFBSUMsS0FBRSxTQUFTSixJQUFFO0FBQUMsb0JBQUcsQ0FBQyxHQUFHSyxFQUFDLEdBQUU7QUFBQyxrQkFBQUYsR0FBRSxvQkFBb0JJLEdBQUUsU0FBUUgsRUFBQztBQUFFO0FBQUEsZ0JBQU07QUFBQyxvQkFBRyxHQUFHQyxJQUFFTCxFQUFDLEdBQUU7QUFBQztBQUFBLGdCQUFNO0FBQUMsb0JBQUdRLE1BQUcsR0FBR1IsSUFBRUssRUFBQyxHQUFFO0FBQUMsa0JBQUFMLEdBQUUsZUFBZTtBQUFBLGdCQUFDO0FBQUMsb0JBQUcsR0FBR08sSUFBRUYsSUFBRUwsRUFBQyxHQUFFO0FBQUM7QUFBQSxnQkFBTTtBQUFDLG9CQUFJQyxLQUFFLEdBQUdELEVBQUM7QUFBRSxnQkFBQUMsR0FBRSxjQUFZTTtBQUFFLG9CQUFHTixHQUFFLGNBQVksTUFBSztBQUFDLGtCQUFBQSxHQUFFLGFBQVcsQ0FBQztBQUFBLGdCQUFDO0FBQUMsb0JBQUdBLEdBQUUsV0FBVyxRQUFRSSxFQUFDLElBQUUsR0FBRTtBQUFDLGtCQUFBSixHQUFFLFdBQVcsS0FBS0ksRUFBQztBQUFFLHNCQUFHRSxHQUFFLFNBQVE7QUFBQyxvQkFBQVAsR0FBRSxnQkFBZ0I7QUFBQSxrQkFBQztBQUFDLHNCQUFHTyxHQUFFLFVBQVFQLEdBQUUsUUFBTztBQUFDLHdCQUFHLENBQUMsRUFBRUEsR0FBRSxRQUFPTyxHQUFFLE1BQU0sR0FBRTtBQUFDO0FBQUEsb0JBQU07QUFBQSxrQkFBQztBQUFDLHNCQUFHQSxHQUFFLE1BQUs7QUFBQyx3QkFBR0UsR0FBRSxlQUFjO0FBQUM7QUFBQSxvQkFBTSxPQUFLO0FBQUMsc0JBQUFBLEdBQUUsZ0JBQWM7QUFBQSxvQkFBSTtBQUFBLGtCQUFDO0FBQUMsc0JBQUdGLEdBQUUsU0FBUTtBQUFDLHdCQUFJTCxLQUFFLEdBQUdDLEVBQUM7QUFBRSx3QkFBR0QsR0FBRSxjQUFZQyxHQUFFLE9BQU07QUFBQztBQUFBLG9CQUFNO0FBQUMsb0JBQUFELEdBQUUsWUFBVUMsR0FBRTtBQUFBLGtCQUFLO0FBQUMsc0JBQUdNLEdBQUUsU0FBUTtBQUFDLGlDQUFhQSxHQUFFLE9BQU87QUFBQSxrQkFBQztBQUFDLHNCQUFHQSxHQUFFLFVBQVM7QUFBQztBQUFBLGtCQUFNO0FBQUMsc0JBQUdGLEdBQUUsV0FBUyxHQUFFO0FBQUMsd0JBQUcsQ0FBQ0UsR0FBRSxVQUFTO0FBQUMsc0JBQUFILEdBQUVELElBQUVMLEVBQUM7QUFBRSxzQkFBQVMsR0FBRSxXQUFTLFdBQVcsV0FBVTtBQUFDLHdCQUFBQSxHQUFFLFdBQVM7QUFBQSxzQkFBSSxHQUFFRixHQUFFLFFBQVE7QUFBQSxvQkFBQztBQUFBLGtCQUFDLFdBQVNBLEdBQUUsUUFBTSxHQUFFO0FBQUMsb0JBQUFFLEdBQUUsVUFBUSxXQUFXLFdBQVU7QUFBQyxzQkFBQUgsR0FBRUQsSUFBRUwsRUFBQztBQUFBLG9CQUFDLEdBQUVPLEdBQUUsS0FBSztBQUFBLGtCQUFDLE9BQUs7QUFBQyx1QkFBR0YsSUFBRSxjQUFjO0FBQUUsb0JBQUFDLEdBQUVELElBQUVMLEVBQUM7QUFBQSxrQkFBQztBQUFBLGdCQUFDO0FBQUEsY0FBQztBQUFFLGtCQUFHQSxHQUFFLGlCQUFlLE1BQUs7QUFBQyxnQkFBQUEsR0FBRSxnQkFBYyxDQUFDO0FBQUEsY0FBQztBQUFDLGNBQUFBLEdBQUUsY0FBYyxLQUFLLEVBQUMsU0FBUU8sR0FBRSxTQUFRLFVBQVNILElBQUUsSUFBR0QsR0FBQyxDQUFDO0FBQUUsY0FBQUEsR0FBRSxpQkFBaUJJLEdBQUUsU0FBUUgsRUFBQztBQUFBLFlBQUMsQ0FBQztBQUFBLFVBQUM7QUFBQyxjQUFJLEtBQUc7QUFBTSxjQUFJLEtBQUc7QUFBSyxtQkFBUyxLQUFJO0FBQUMsZ0JBQUcsQ0FBQyxJQUFHO0FBQUMsbUJBQUcsV0FBVTtBQUFDLHFCQUFHO0FBQUEsY0FBSTtBQUFFLHFCQUFPLGlCQUFpQixVQUFTLEVBQUU7QUFBRSwwQkFBWSxXQUFVO0FBQUMsb0JBQUcsSUFBRztBQUFDLHVCQUFHO0FBQU0scUJBQUcsR0FBRyxFQUFFLGlCQUFpQixzREFBc0QsR0FBRSxTQUFTSixJQUFFO0FBQUMsdUJBQUdBLEVBQUM7QUFBQSxrQkFBQyxDQUFDO0FBQUEsZ0JBQUM7QUFBQSxjQUFDLEdBQUUsR0FBRztBQUFBLFlBQUM7QUFBQSxVQUFDO0FBQUMsbUJBQVMsR0FBR0MsSUFBRTtBQUFDLGdCQUFHLENBQUMsRUFBRUEsSUFBRSxrQkFBa0IsS0FBRyxFQUFFQSxFQUFDLEdBQUU7QUFBQyxjQUFBQSxHQUFFLGFBQWEsb0JBQW1CLE1BQU07QUFBRSxrQkFBSUQsS0FBRSxHQUFHQyxFQUFDO0FBQUUsa0JBQUdELEdBQUUsVUFBUztBQUFDLG1CQUFHQyxJQUFFLFVBQVU7QUFBQSxjQUFDLE9BQUs7QUFBQyxnQkFBQUEsR0FBRSxpQkFBaUIseUJBQXdCLFNBQVNELElBQUU7QUFBQyxxQkFBR0MsSUFBRSxVQUFVO0FBQUEsZ0JBQUMsR0FBRSxFQUFDLE1BQUssS0FBSSxDQUFDO0FBQUEsY0FBQztBQUFBLFlBQUM7QUFBQSxVQUFDO0FBQUMsbUJBQVMsR0FBR0QsSUFBRUMsSUFBRUMsSUFBRTtBQUFDLGdCQUFJQyxLQUFFLEVBQUVELEVBQUM7QUFBRSxxQkFBUUUsS0FBRSxHQUFFQSxLQUFFRCxHQUFFLFFBQU9DLE1BQUk7QUFBQyxrQkFBSUMsS0FBRUYsR0FBRUMsRUFBQyxFQUFFLE1BQU0sT0FBTztBQUFFLGtCQUFHQyxHQUFFLENBQUMsTUFBSSxXQUFVO0FBQUMsbUJBQUdMLElBQUVLLEdBQUUsQ0FBQyxHQUFFLENBQUM7QUFBQSxjQUFDO0FBQUMsa0JBQUdBLEdBQUUsQ0FBQyxNQUFJLFFBQU87QUFBQyxtQkFBR0wsRUFBQztBQUFBLGNBQUM7QUFBQSxZQUFDO0FBQUEsVUFBQztBQUFDLG1CQUFTLEdBQUdPLElBQUVMLElBQUVDLElBQUU7QUFBQyxnQkFBRyxDQUFDLEdBQUdJLEVBQUMsR0FBRTtBQUFDO0FBQUEsWUFBTTtBQUFDLGdCQUFHTCxHQUFFLFFBQVEsR0FBRyxLQUFHLEdBQUU7QUFBQyxrQkFBSUYsS0FBRSxTQUFTLFlBQVUsU0FBUyxPQUFLLE1BQUksU0FBUyxPQUFLO0FBQUksa0JBQUcsU0FBUyxZQUFVLFVBQVM7QUFBQyxnQkFBQUUsS0FBRSxXQUFTRixLQUFFRTtBQUFBLGNBQUMsV0FBUyxTQUFTLFlBQVUsU0FBUTtBQUFDLGdCQUFBQSxLQUFFLFVBQVFGLEtBQUVFO0FBQUEsY0FBQztBQUFBLFlBQUM7QUFBQyxnQkFBSUQsS0FBRSxFQUFFLGdCQUFnQkMsRUFBQztBQUFFLFlBQUFELEdBQUUsVUFBUSxTQUFTRCxJQUFFO0FBQUMsaUJBQUdPLElBQUUsZ0JBQWUsRUFBQyxPQUFNUCxJQUFFLFFBQU9DLEdBQUMsQ0FBQztBQUFFLGlCQUFHTSxFQUFDO0FBQUEsWUFBQztBQUFFLFlBQUFOLEdBQUUsVUFBUSxTQUFTRCxJQUFFO0FBQUMsa0JBQUcsQ0FBQyxNQUFLLE1BQUssSUFBSSxFQUFFLFFBQVFBLEdBQUUsSUFBSSxLQUFHLEdBQUU7QUFBQyxvQkFBSUMsS0FBRSxHQUFHRSxFQUFDO0FBQUUsMkJBQVcsV0FBVTtBQUFDLHFCQUFHSSxJQUFFTCxJQUFFQyxLQUFFLENBQUM7QUFBQSxnQkFBQyxHQUFFRixFQUFDO0FBQUEsY0FBQztBQUFBLFlBQUM7QUFBRSxZQUFBQSxHQUFFLFNBQU8sU0FBU0QsSUFBRTtBQUFDLGNBQUFHLEtBQUU7QUFBQSxZQUFDO0FBQUUsZUFBR0ksRUFBQyxFQUFFLFlBQVVOO0FBQUUsWUFBQUEsR0FBRSxpQkFBaUIsV0FBVSxTQUFTRCxJQUFFO0FBQUMsa0JBQUcsR0FBR08sRUFBQyxHQUFFO0FBQUM7QUFBQSxjQUFNO0FBQUMsa0JBQUlOLEtBQUVELEdBQUU7QUFBSyxnQkFBRU8sSUFBRSxTQUFTUCxJQUFFO0FBQUMsZ0JBQUFDLEtBQUVELEdBQUUsa0JBQWtCQyxJQUFFLE1BQUtNLEVBQUM7QUFBQSxjQUFDLENBQUM7QUFBRSxrQkFBSUwsS0FBRSxFQUFFSyxFQUFDO0FBQUUsa0JBQUlKLEtBQUUsRUFBRUYsRUFBQztBQUFFLGtCQUFJRyxLQUFFLEVBQUVELEdBQUUsUUFBUTtBQUFFLHVCQUFRRSxLQUFFLEdBQUVBLEtBQUVELEdBQUUsUUFBT0MsTUFBSTtBQUFDLG9CQUFJQyxLQUFFRixHQUFFQyxFQUFDO0FBQUUsbUJBQUcsR0FBR0MsSUFBRSxhQUFhLEtBQUcsUUFBT0EsSUFBRUosRUFBQztBQUFBLGNBQUM7QUFBQyxpQkFBR0EsR0FBRSxLQUFLO0FBQUEsWUFBQyxDQUFDO0FBQUEsVUFBQztBQUFDLG1CQUFTLEdBQUdGLElBQUU7QUFBQyxnQkFBRyxDQUFDLEdBQUdBLEVBQUMsR0FBRTtBQUFDLGlCQUFHQSxFQUFDLEVBQUUsVUFBVSxNQUFNO0FBQUUscUJBQU87QUFBQSxZQUFJO0FBQUEsVUFBQztBQUFDLG1CQUFTLEdBQUdTLElBQUU7QUFBQyxnQkFBSUMsS0FBRSxFQUFFRCxJQUFFLFNBQVNULElBQUU7QUFBQyxxQkFBTyxHQUFHQSxFQUFDLEVBQUUsYUFBVztBQUFBLFlBQUksQ0FBQztBQUFFLGdCQUFHVSxJQUFFO0FBQUMsY0FBQUQsR0FBRSxpQkFBaUIsR0FBR0EsRUFBQyxFQUFFLENBQUMsRUFBRSxTQUFRLFNBQVNULElBQUU7QUFBQyxvQkFBSUMsS0FBRSxHQUFHUyxFQUFDLEVBQUU7QUFBVSxvQkFBSVIsS0FBRSxHQUFHTyxJQUFFQyxFQUFDO0FBQUUsb0JBQUlQLEtBQUUsR0FBR00sSUFBRSxNQUFNO0FBQUUsb0JBQUlMLEtBQUVELEdBQUU7QUFBTyxvQkFBSUUsS0FBRUYsR0FBRTtBQUFPLG9CQUFJRyxLQUFFLEdBQUdHLEVBQUM7QUFBRSxvQkFBSUYsS0FBRSxHQUFHRixJQUFFQyxFQUFDO0FBQUUsb0JBQUlFLEtBQUUsR0FBR0QsSUFBRUUsRUFBQztBQUFFLGdCQUFBRCxHQUFFLFNBQVMsSUFBRU47QUFBRSxvQkFBR0UsTUFBR0EsR0FBRSxTQUFPLEdBQUU7QUFBQyxxQkFBR0ssSUFBRSwwQkFBeUJMLEVBQUM7QUFBRTtBQUFBLGdCQUFNO0FBQUMsZ0JBQUFILEdBQUUsS0FBSyxLQUFLLFVBQVVPLEVBQUMsQ0FBQztBQUFFLG9CQUFHLEdBQUdSLElBQUVTLEVBQUMsR0FBRTtBQUFDLGtCQUFBVCxHQUFFLGVBQWU7QUFBQSxnQkFBQztBQUFBLGNBQUMsQ0FBQztBQUFBLFlBQUMsT0FBSztBQUFDLGlCQUFHUyxJQUFFLDZCQUE2QjtBQUFBLFlBQUM7QUFBQSxVQUFDO0FBQUMsbUJBQVMsR0FBR1QsSUFBRTtBQUFDLGdCQUFJQyxLQUFFLEVBQUUsT0FBTztBQUFpQixnQkFBRyxPQUFPQSxPQUFJLFlBQVc7QUFBQyxxQkFBT0EsR0FBRUQsRUFBQztBQUFBLFlBQUM7QUFBQyxnQkFBR0MsT0FBSSxlQUFjO0FBQUMsa0JBQUlDLEtBQUUsS0FBSyxJQUFJRixJQUFFLENBQUM7QUFBRSxrQkFBSUcsS0FBRSxNQUFJLEtBQUssSUFBSSxHQUFFRCxFQUFDO0FBQUUscUJBQU9DLEtBQUUsS0FBSyxPQUFPO0FBQUEsWUFBQztBQUFDLGNBQUUsb0ZBQW9GO0FBQUEsVUFBQztBQUFDLG1CQUFTLEdBQUdILElBQUVDLElBQUVDLElBQUU7QUFBQyxnQkFBSUMsS0FBRSxFQUFFRCxFQUFDO0FBQUUscUJBQVFFLEtBQUUsR0FBRUEsS0FBRUQsR0FBRSxRQUFPQyxNQUFJO0FBQUMsa0JBQUlDLEtBQUVGLEdBQUVDLEVBQUMsRUFBRSxNQUFNLE9BQU87QUFBRSxrQkFBR0MsR0FBRSxDQUFDLE1BQUksV0FBVTtBQUFDLG1CQUFHTCxJQUFFSyxHQUFFLENBQUMsQ0FBQztBQUFBLGNBQUM7QUFBQyxrQkFBR0EsR0FBRSxDQUFDLE1BQUksUUFBTztBQUFDLG1CQUFHTCxJQUFFSyxHQUFFLENBQUMsQ0FBQztBQUFBLGNBQUM7QUFBQSxZQUFDO0FBQUEsVUFBQztBQUFDLG1CQUFTLEdBQUdKLElBQUVELElBQUU7QUFBQyxnQkFBSUUsS0FBRSxFQUFFLGtCQUFrQkYsRUFBQztBQUFFLFlBQUFFLEdBQUUsVUFBUSxTQUFTRixJQUFFO0FBQUMsaUJBQUdDLElBQUUsaUJBQWdCLEVBQUMsT0FBTUQsSUFBRSxRQUFPRSxHQUFDLENBQUM7QUFBRSxpQkFBR0QsRUFBQztBQUFBLFlBQUM7QUFBRSxlQUFHQSxFQUFDLEVBQUUsaUJBQWVDO0FBQUEsVUFBQztBQUFDLG1CQUFTLEdBQUdHLElBQUVDLElBQUU7QUFBQyxnQkFBSUMsS0FBRSxFQUFFRixJQUFFLEVBQUU7QUFBRSxnQkFBR0UsSUFBRTtBQUFDLGtCQUFJQyxLQUFFLEdBQUdELEVBQUMsRUFBRTtBQUFlLGtCQUFJRSxLQUFFLFNBQVNULElBQUU7QUFBQyxvQkFBRyxHQUFHTyxFQUFDLEdBQUU7QUFBQztBQUFBLGdCQUFNO0FBQUMsb0JBQUcsQ0FBQyxHQUFHRixFQUFDLEdBQUU7QUFBQyxrQkFBQUcsR0FBRSxvQkFBb0JGLElBQUVHLEVBQUM7QUFBRTtBQUFBLGdCQUFNO0FBQUMsb0JBQUlSLEtBQUVELEdBQUU7QUFBSyxrQkFBRUssSUFBRSxTQUFTTCxJQUFFO0FBQUMsa0JBQUFDLEtBQUVELEdBQUUsa0JBQWtCQyxJQUFFLE1BQUtJLEVBQUM7QUFBQSxnQkFBQyxDQUFDO0FBQUUsb0JBQUlILEtBQUUsR0FBR0csRUFBQztBQUFFLG9CQUFJRixLQUFFLEdBQUdFLEVBQUM7QUFBRSxvQkFBSUQsS0FBRSxFQUFFQyxFQUFDO0FBQUUsbUJBQUdILEdBQUUsV0FBVUMsSUFBRUUsSUFBRUosSUFBRUcsRUFBQztBQUFFLG1CQUFHQSxHQUFFLEtBQUs7QUFBRSxtQkFBR0MsSUFBRSxtQkFBa0JMLEVBQUM7QUFBQSxjQUFDO0FBQUUsaUJBQUdLLEVBQUMsRUFBRSxjQUFZSTtBQUFFLGNBQUFELEdBQUUsaUJBQWlCRixJQUFFRyxFQUFDO0FBQUEsWUFBQyxPQUFLO0FBQUMsaUJBQUdKLElBQUUsdUJBQXVCO0FBQUEsWUFBQztBQUFBLFVBQUM7QUFBQyxtQkFBUyxHQUFHTCxJQUFFQyxJQUFFQyxJQUFFO0FBQUMsZ0JBQUlDLEtBQUUsRUFBRUgsSUFBRSxFQUFFO0FBQUUsZ0JBQUdHLElBQUU7QUFBQyxrQkFBSUMsS0FBRSxHQUFHRCxFQUFDLEVBQUU7QUFBZSxrQkFBSUUsS0FBRSxXQUFVO0FBQUMsb0JBQUcsQ0FBQyxHQUFHRixFQUFDLEdBQUU7QUFBQyxzQkFBRyxHQUFHSCxFQUFDLEdBQUU7QUFBQyxvQkFBQUMsR0FBRUQsRUFBQztBQUFBLGtCQUFDLE9BQUs7QUFBQyxvQkFBQUksR0FBRSxvQkFBb0JGLElBQUVHLEVBQUM7QUFBQSxrQkFBQztBQUFBLGdCQUFDO0FBQUEsY0FBQztBQUFFLGlCQUFHTCxFQUFDLEVBQUUsY0FBWUs7QUFBRSxjQUFBRCxHQUFFLGlCQUFpQkYsSUFBRUcsRUFBQztBQUFBLFlBQUMsT0FBSztBQUFDLGlCQUFHTCxJQUFFLHVCQUF1QjtBQUFBLFlBQUM7QUFBQSxVQUFDO0FBQUMsbUJBQVMsR0FBR0EsSUFBRTtBQUFDLGdCQUFHLENBQUMsR0FBR0EsRUFBQyxHQUFFO0FBQUMsaUJBQUdBLEVBQUMsRUFBRSxlQUFlLE1BQU07QUFBRSxxQkFBTztBQUFBLFlBQUk7QUFBQSxVQUFDO0FBQUMsbUJBQVMsR0FBR0EsSUFBRTtBQUFDLG1CQUFPLEdBQUdBLEVBQUMsRUFBRSxrQkFBZ0I7QUFBQSxVQUFJO0FBQUMsbUJBQVMsR0FBR0EsSUFBRUMsSUFBRUMsSUFBRUMsSUFBRTtBQUFDLGdCQUFJQyxLQUFFLFdBQVU7QUFBQyxrQkFBRyxDQUFDRixHQUFFLFFBQU87QUFBQyxnQkFBQUEsR0FBRSxTQUFPO0FBQUssZ0JBQUFELEdBQUVELEVBQUM7QUFBQSxjQUFDO0FBQUEsWUFBQztBQUFFLGdCQUFHRyxLQUFFLEdBQUU7QUFBQyx5QkFBV0MsSUFBRUQsRUFBQztBQUFBLFlBQUMsT0FBSztBQUFDLGNBQUFDLEdBQUU7QUFBQSxZQUFDO0FBQUEsVUFBQztBQUFDLG1CQUFTLEdBQUdILElBQUVHLElBQUVKLElBQUU7QUFBQyxnQkFBSUssS0FBRTtBQUFNLGVBQUcsR0FBRSxTQUFTSCxJQUFFO0FBQUMsa0JBQUcsRUFBRUQsSUFBRSxRQUFNQyxFQUFDLEdBQUU7QUFBQyxvQkFBSUMsS0FBRSxHQUFHRixJQUFFLFFBQU1DLEVBQUM7QUFBRSxnQkFBQUcsS0FBRTtBQUFLLGdCQUFBRCxHQUFFLE9BQUtEO0FBQUUsZ0JBQUFDLEdBQUUsT0FBS0Y7QUFBRSxnQkFBQUYsR0FBRSxRQUFRLFNBQVNBLElBQUU7QUFBQyxxQkFBR0MsSUFBRUQsSUFBRUksSUFBRSxTQUFTSixJQUFFQyxJQUFFO0FBQUMsd0JBQUcsRUFBRUQsSUFBRSxFQUFFLE9BQU8sZUFBZSxHQUFFO0FBQUMsd0JBQUVBLEVBQUM7QUFBRTtBQUFBLG9CQUFNO0FBQUMsdUJBQUdFLElBQUVDLElBQUVILElBQUVDLEVBQUM7QUFBQSxrQkFBQyxDQUFDO0FBQUEsZ0JBQUMsQ0FBQztBQUFBLGNBQUM7QUFBQSxZQUFDLENBQUM7QUFBRSxtQkFBT0k7QUFBQSxVQUFDO0FBQUMsbUJBQVMsR0FBR0YsSUFBRUgsSUFBRUMsSUFBRUMsSUFBRTtBQUFDLGdCQUFHRixHQUFFLFVBQVM7QUFBQyxpQkFBR0csSUFBRUQsSUFBRUYsR0FBRSxRQUFRO0FBQUEsWUFBQyxXQUFTQSxHQUFFLFlBQVUsWUFBVztBQUFDLGlCQUFHO0FBQUUsaUJBQUdHLElBQUVELElBQUVELElBQUVELEVBQUM7QUFBRSxpQkFBR0csRUFBQztBQUFBLFlBQUMsV0FBU0gsR0FBRSxZQUFVLGFBQVk7QUFBQyxrQkFBSUksS0FBRSxDQUFDO0FBQUUsa0JBQUdKLEdBQUUsTUFBSztBQUFDLGdCQUFBSSxHQUFFLE9BQUssR0FBR0QsSUFBRUgsR0FBRSxJQUFJO0FBQUEsY0FBQztBQUFDLGtCQUFHQSxHQUFFLFdBQVU7QUFBQyxnQkFBQUksR0FBRSxZQUFVLFdBQVdKLEdBQUUsU0FBUztBQUFBLGNBQUM7QUFBQyxrQkFBSUssS0FBRSxJQUFJLHFCQUFxQixTQUFTTCxJQUFFO0FBQUMseUJBQVFDLEtBQUUsR0FBRUEsS0FBRUQsR0FBRSxRQUFPQyxNQUFJO0FBQUMsc0JBQUlDLEtBQUVGLEdBQUVDLEVBQUM7QUFBRSxzQkFBR0MsR0FBRSxnQkFBZTtBQUFDLHVCQUFHQyxJQUFFLFdBQVc7QUFBRTtBQUFBLGtCQUFLO0FBQUEsZ0JBQUM7QUFBQSxjQUFDLEdBQUVDLEVBQUM7QUFBRSxjQUFBQyxHQUFFLFFBQVFGLEVBQUM7QUFBRSxpQkFBR0EsSUFBRUQsSUFBRUQsSUFBRUQsRUFBQztBQUFBLFlBQUMsV0FBU0EsR0FBRSxZQUFVLFFBQU87QUFBQyxrQkFBRyxDQUFDLEdBQUdBLElBQUVHLElBQUUsR0FBRyxRQUFPLEVBQUMsS0FBSUEsR0FBQyxDQUFDLENBQUMsR0FBRTtBQUFDLG1CQUFHQSxJQUFFRCxJQUFFRCxJQUFFRCxHQUFFLEtBQUs7QUFBQSxjQUFDO0FBQUEsWUFBQyxXQUFTQSxHQUFFLGVBQWEsR0FBRTtBQUFDLGNBQUFDLEdBQUUsVUFBUTtBQUFLLGlCQUFHRSxJQUFFRCxJQUFFRixFQUFDO0FBQUEsWUFBQyxPQUFLO0FBQUMsaUJBQUdHLElBQUVELElBQUVELElBQUVELEVBQUM7QUFBQSxZQUFDO0FBQUEsVUFBQztBQUFDLG1CQUFTLEdBQUdBLElBQUU7QUFBQyxnQkFBRyxDQUFDQSxHQUFFLGdCQUFjLEVBQUUsT0FBTyxvQkFBa0JBLEdBQUUsU0FBTyxxQkFBbUJBLEdBQUUsU0FBTyxZQUFVQSxHQUFFLFNBQU8sS0FBSTtBQUFDLGtCQUFJQyxLQUFFLEdBQUcsRUFBRSxjQUFjLFFBQVE7QUFBRSxpQkFBR0QsR0FBRSxZQUFXLFNBQVNBLElBQUU7QUFBQyxnQkFBQUMsR0FBRSxhQUFhRCxHQUFFLE1BQUtBLEdBQUUsS0FBSztBQUFBLGNBQUMsQ0FBQztBQUFFLGNBQUFDLEdBQUUsY0FBWUQsR0FBRTtBQUFZLGNBQUFDLEdBQUUsUUFBTTtBQUFNLGtCQUFHLEVBQUUsT0FBTyxtQkFBa0I7QUFBQyxnQkFBQUEsR0FBRSxRQUFNLEVBQUUsT0FBTztBQUFBLGNBQWlCO0FBQUMsa0JBQUlDLEtBQUVGLEdBQUU7QUFBYyxrQkFBRztBQUFDLGdCQUFBRSxHQUFFLGFBQWFELElBQUVELEVBQUM7QUFBQSxjQUFDLFNBQU9BLElBQUU7QUFBQyxrQkFBRUEsRUFBQztBQUFBLGNBQUMsVUFBQztBQUFRLG9CQUFHQSxHQUFFLGVBQWM7QUFBQyxrQkFBQUEsR0FBRSxjQUFjLFlBQVlBLEVBQUM7QUFBQSxnQkFBQztBQUFBLGNBQUM7QUFBQSxZQUFDO0FBQUEsVUFBQztBQUFDLG1CQUFTLEdBQUdBLElBQUU7QUFBQyxnQkFBRyxFQUFFQSxJQUFFLFFBQVEsR0FBRTtBQUFDLGlCQUFHQSxFQUFDO0FBQUEsWUFBQztBQUFDLGVBQUcsRUFBRUEsSUFBRSxRQUFRLEdBQUUsU0FBU0EsSUFBRTtBQUFDLGlCQUFHQSxFQUFDO0FBQUEsWUFBQyxDQUFDO0FBQUEsVUFBQztBQUFDLG1CQUFTLEdBQUdBLElBQUU7QUFBQyxnQkFBSUMsS0FBRUQsR0FBRTtBQUFXLGdCQUFHLENBQUNDLElBQUU7QUFBQyxxQkFBTztBQUFBLFlBQUs7QUFBQyxxQkFBUUMsS0FBRSxHQUFFQSxLQUFFRCxHQUFFLFFBQU9DLE1BQUk7QUFBQyxrQkFBSUMsS0FBRUYsR0FBRUMsRUFBQyxFQUFFO0FBQUssa0JBQUcsRUFBRUMsSUFBRSxRQUFRLEtBQUcsRUFBRUEsSUFBRSxhQUFhLEtBQUcsRUFBRUEsSUFBRSxRQUFRLEtBQUcsRUFBRUEsSUFBRSxhQUFhLEdBQUU7QUFBQyx1QkFBTztBQUFBLGNBQUk7QUFBQSxZQUFDO0FBQUMsbUJBQU87QUFBQSxVQUFLO0FBQUMsbUJBQVMsR0FBR0gsSUFBRTtBQUFDLGdCQUFJQyxLQUFFO0FBQUssZ0JBQUlDLEtBQUUsQ0FBQztBQUFFLGdCQUFHLEdBQUdGLEVBQUMsR0FBRTtBQUFDLGNBQUFFLEdBQUUsS0FBS0YsRUFBQztBQUFBLFlBQUM7QUFBQyxnQkFBRyxTQUFTLFVBQVM7QUFBQyxrQkFBSUcsS0FBRSxTQUFTLFNBQVMsMEpBQTRKSCxFQUFDO0FBQUUscUJBQU1DLEtBQUVFLEdBQUUsWUFBWSxFQUFFLENBQUFELEdBQUUsS0FBS0QsRUFBQztBQUFBLFlBQUMsV0FBUyxPQUFPRCxHQUFFLHlCQUF1QixZQUFXO0FBQUMsa0JBQUlJLEtBQUVKLEdBQUUscUJBQXFCLEdBQUc7QUFBRSx1QkFBUUssS0FBRSxHQUFFQSxLQUFFRCxHQUFFLFFBQU9DLE1BQUk7QUFBQyxvQkFBRyxHQUFHRCxHQUFFQyxFQUFDLENBQUMsR0FBRTtBQUFDLGtCQUFBSCxHQUFFLEtBQUtFLEdBQUVDLEVBQUMsQ0FBQztBQUFBLGdCQUFDO0FBQUEsY0FBQztBQUFBLFlBQUM7QUFBQyxtQkFBT0g7QUFBQSxVQUFDO0FBQUMsbUJBQVMsR0FBR0YsSUFBRTtBQUFDLGdCQUFHQSxHQUFFLGtCQUFpQjtBQUFDLGtCQUFJQyxLQUFFO0FBQW1FLGtCQUFJQyxLQUFFRixHQUFFLGlCQUFpQixJQUFFQyxLQUFFLDBKQUE2SjtBQUFFLHFCQUFPQztBQUFBLFlBQUMsT0FBSztBQUFDLHFCQUFNLENBQUM7QUFBQSxZQUFDO0FBQUEsVUFBQztBQUFDLG1CQUFTLEdBQUdGLElBQUU7QUFBQyxnQkFBSUMsS0FBRSxFQUFFRCxHQUFFLFFBQU8sOEJBQThCO0FBQUUsZ0JBQUlFLEtBQUUsR0FBR0YsRUFBQztBQUFFLGdCQUFHRSxJQUFFO0FBQUMsY0FBQUEsR0FBRSxvQkFBa0JEO0FBQUEsWUFBQztBQUFBLFVBQUM7QUFBQyxtQkFBUyxHQUFHRCxJQUFFO0FBQUMsZ0JBQUlDLEtBQUUsR0FBR0QsRUFBQztBQUFFLGdCQUFHQyxJQUFFO0FBQUMsY0FBQUEsR0FBRSxvQkFBa0I7QUFBQSxZQUFJO0FBQUEsVUFBQztBQUFDLG1CQUFTLEdBQUdELElBQUU7QUFBQyxnQkFBSUMsS0FBRSxFQUFFRCxHQUFFLFFBQU8sOEJBQThCO0FBQUUsZ0JBQUcsQ0FBQ0MsSUFBRTtBQUFDO0FBQUEsWUFBTTtBQUFDLGdCQUFJQyxLQUFFLEVBQUUsTUFBSSxHQUFHRCxJQUFFLE1BQU0sQ0FBQyxLQUFHLEVBQUVBLElBQUUsTUFBTTtBQUFFLGdCQUFHLENBQUNDLElBQUU7QUFBQztBQUFBLFlBQU07QUFBQyxtQkFBTyxHQUFHQSxFQUFDO0FBQUEsVUFBQztBQUFDLG1CQUFTLEdBQUdGLElBQUU7QUFBQyxZQUFBQSxHQUFFLGlCQUFpQixTQUFRLEVBQUU7QUFBRSxZQUFBQSxHQUFFLGlCQUFpQixXQUFVLEVBQUU7QUFBRSxZQUFBQSxHQUFFLGlCQUFpQixZQUFXLEVBQUU7QUFBQSxVQUFDO0FBQUMsbUJBQVMsR0FBR0EsSUFBRTtBQUFDLGdCQUFJQyxLQUFFLEdBQUdELEVBQUM7QUFBRSxnQkFBSUUsS0FBRTtBQUFFLHFCQUFRQyxLQUFFLEdBQUVBLEtBQUVGLEdBQUUsUUFBT0UsTUFBSTtBQUFDLG9CQUFNQyxLQUFFSCxHQUFFRSxFQUFDO0FBQUUsa0JBQUdDLE9BQUksS0FBSTtBQUFDLGdCQUFBRjtBQUFBLGNBQUcsV0FBU0UsT0FBSSxLQUFJO0FBQUMsZ0JBQUFGO0FBQUEsY0FBRztBQUFBLFlBQUM7QUFBQyxtQkFBT0E7QUFBQSxVQUFDO0FBQUMsbUJBQVMsR0FBR0QsSUFBRUQsSUFBRUUsSUFBRTtBQUFDLGdCQUFJQyxLQUFFLEdBQUdGLEVBQUM7QUFBRSxnQkFBRyxDQUFDLE1BQU0sUUFBUUUsR0FBRSxVQUFVLEdBQUU7QUFBQyxjQUFBQSxHQUFFLGFBQVcsQ0FBQztBQUFBLFlBQUM7QUFBQyxnQkFBSUM7QUFBRSxnQkFBSUMsS0FBRSxTQUFTTCxJQUFFO0FBQUMscUJBQU8sR0FBR0MsSUFBRSxXQUFVO0FBQUMsb0JBQUcsQ0FBQ0csSUFBRTtBQUFDLGtCQUFBQSxLQUFFLElBQUksU0FBUyxTQUFRRixFQUFDO0FBQUEsZ0JBQUM7QUFBQyxnQkFBQUUsR0FBRSxLQUFLSCxJQUFFRCxFQUFDO0FBQUEsY0FBQyxDQUFDO0FBQUEsWUFBQztBQUFFLFlBQUFDLEdBQUUsaUJBQWlCRCxJQUFFSyxFQUFDO0FBQUUsWUFBQUYsR0FBRSxXQUFXLEtBQUssRUFBQyxPQUFNSCxJQUFFLFVBQVNLLEdBQUMsQ0FBQztBQUFBLFVBQUM7QUFBQyxtQkFBUyxHQUFHTCxJQUFFO0FBQUMsZ0JBQUlDLEtBQUUsR0FBR0QsSUFBRSxPQUFPO0FBQUUsZ0JBQUdDLElBQUU7QUFBQyxrQkFBSUMsS0FBRSxDQUFDO0FBQUUsa0JBQUlDLEtBQUVGLEdBQUUsTUFBTSxJQUFJO0FBQUUsa0JBQUlHLEtBQUU7QUFBSyxrQkFBSUMsS0FBRTtBQUFFLHFCQUFNRixHQUFFLFNBQU8sR0FBRTtBQUFDLG9CQUFJRyxLQUFFSCxHQUFFLE1BQU07QUFBRSxvQkFBSUksS0FBRUQsR0FBRSxNQUFNLDJCQUEyQjtBQUFFLG9CQUFHRCxPQUFJLEtBQUdFLElBQUU7QUFBQyxrQkFBQUQsR0FBRSxNQUFNLEdBQUc7QUFBRSxrQkFBQUYsS0FBRUcsR0FBRSxDQUFDLEVBQUUsTUFBTSxHQUFFLEVBQUU7QUFBRSxrQkFBQUwsR0FBRUUsRUFBQyxJQUFFRyxHQUFFLENBQUM7QUFBQSxnQkFBQyxPQUFLO0FBQUMsa0JBQUFMLEdBQUVFLEVBQUMsS0FBR0U7QUFBQSxnQkFBQztBQUFDLGdCQUFBRCxNQUFHLEdBQUdDLEVBQUM7QUFBQSxjQUFDO0FBQUMsdUJBQVFFLE1BQUtOLElBQUU7QUFBQyxtQkFBR0YsSUFBRVEsSUFBRU4sR0FBRU0sRUFBQyxDQUFDO0FBQUEsY0FBQztBQUFBLFlBQUM7QUFBQSxVQUFDO0FBQUMsbUJBQVMsR0FBR1IsSUFBRTtBQUFDLGVBQUdBLEVBQUM7QUFBRSxxQkFBUUMsS0FBRSxHQUFFQSxLQUFFRCxHQUFFLFdBQVcsUUFBT0MsTUFBSTtBQUFDLGtCQUFJQyxLQUFFRixHQUFFLFdBQVdDLEVBQUMsRUFBRTtBQUFLLGtCQUFJRSxLQUFFSCxHQUFFLFdBQVdDLEVBQUMsRUFBRTtBQUFNLGtCQUFHLEVBQUVDLElBQUUsT0FBTyxLQUFHLEVBQUVBLElBQUUsWUFBWSxHQUFFO0FBQUMsb0JBQUlFLEtBQUVGLEdBQUUsUUFBUSxLQUFLLElBQUU7QUFBRSxvQkFBSUcsS0FBRUgsR0FBRSxNQUFNRSxJQUFFQSxLQUFFLENBQUM7QUFBRSxvQkFBR0MsT0FBSSxPQUFLQSxPQUFJLEtBQUk7QUFBQyxzQkFBSUMsS0FBRUosR0FBRSxNQUFNRSxLQUFFLENBQUM7QUFBRSxzQkFBRyxFQUFFRSxJQUFFLEdBQUcsR0FBRTtBQUFDLG9CQUFBQSxLQUFFLFNBQU9BO0FBQUEsa0JBQUMsV0FBUyxFQUFFQSxJQUFFLEdBQUcsR0FBRTtBQUFDLG9CQUFBQSxLQUFFLFVBQVFBLEdBQUUsTUFBTSxDQUFDO0FBQUEsa0JBQUMsV0FBUyxFQUFFQSxJQUFFLE9BQU8sR0FBRTtBQUFDLG9CQUFBQSxLQUFFLFVBQVFBLEdBQUUsTUFBTSxDQUFDO0FBQUEsa0JBQUM7QUFBQyxxQkFBR04sSUFBRU0sSUFBRUgsRUFBQztBQUFBLGdCQUFDO0FBQUEsY0FBQztBQUFBLFlBQUM7QUFBQSxVQUFDO0FBQUMsbUJBQVMsR0FBR0YsSUFBRTtBQUFDLGdCQUFHLEVBQUVBLElBQUUsRUFBRSxPQUFPLGVBQWUsR0FBRTtBQUFDLGdCQUFFQSxFQUFDO0FBQUU7QUFBQSxZQUFNO0FBQUMsZ0JBQUlDLEtBQUUsR0FBR0QsRUFBQztBQUFFLGdCQUFHQyxHQUFFLGFBQVcsR0FBR0QsRUFBQyxHQUFFO0FBQUMsaUJBQUdBLEVBQUM7QUFBRSxjQUFBQyxHQUFFLFdBQVMsR0FBR0QsRUFBQztBQUFFLGlCQUFHQSxFQUFDO0FBQUUsaUJBQUdBLElBQUUsd0JBQXdCO0FBQUUsa0JBQUdBLEdBQUUsT0FBTTtBQUFDLGdCQUFBQyxHQUFFLFlBQVVELEdBQUU7QUFBQSxjQUFLO0FBQUMsa0JBQUlELEtBQUUsR0FBR0MsRUFBQztBQUFFLGtCQUFJRSxLQUFFLEdBQUdGLElBQUVDLElBQUVGLEVBQUM7QUFBRSxrQkFBRyxDQUFDRyxJQUFFO0FBQUMsb0JBQUcsR0FBR0YsSUFBRSxVQUFVLE1BQUksUUFBTztBQUFDLHFCQUFHQSxJQUFFQyxJQUFFRixFQUFDO0FBQUEsZ0JBQUMsV0FBUyxFQUFFQyxJQUFFLFlBQVksR0FBRTtBQUFDLGtCQUFBRCxHQUFFLFFBQVEsU0FBU0EsSUFBRTtBQUFDLHVCQUFHQyxJQUFFRCxJQUFFRSxJQUFFLFdBQVU7QUFBQSxvQkFBQyxDQUFDO0FBQUEsa0JBQUMsQ0FBQztBQUFBLGdCQUFDO0FBQUEsY0FBQztBQUFDLGtCQUFHRCxHQUFFLFlBQVUsVUFBUSxHQUFHQSxJQUFFLE1BQU0sTUFBSSxZQUFVLEVBQUVBLElBQUUsTUFBTSxHQUFFO0FBQUMsbUJBQUdBLEVBQUM7QUFBQSxjQUFDO0FBQUMsa0JBQUlHLEtBQUUsR0FBR0gsSUFBRSxRQUFRO0FBQUUsa0JBQUdHLElBQUU7QUFBQyxtQkFBR0gsSUFBRUMsSUFBRUUsRUFBQztBQUFBLGNBQUM7QUFBQyxrQkFBSUMsS0FBRSxHQUFHSixJQUFFLE9BQU87QUFBRSxrQkFBR0ksSUFBRTtBQUFDLG1CQUFHSixJQUFFQyxJQUFFRyxFQUFDO0FBQUEsY0FBQztBQUFDLGlCQUFHSixJQUFFLHVCQUF1QjtBQUFBLFlBQUM7QUFBQSxVQUFDO0FBQUMsbUJBQVMsR0FBR0QsSUFBRTtBQUFDLFlBQUFBLEtBQUUsRUFBRUEsRUFBQztBQUFFLGdCQUFHLEVBQUVBLElBQUUsRUFBRSxPQUFPLGVBQWUsR0FBRTtBQUFDLGdCQUFFQSxFQUFDO0FBQUU7QUFBQSxZQUFNO0FBQUMsZUFBR0EsRUFBQztBQUFFLGVBQUcsR0FBR0EsRUFBQyxHQUFFLFNBQVNBLElBQUU7QUFBQyxpQkFBR0EsRUFBQztBQUFBLFlBQUMsQ0FBQztBQUFFLGVBQUcsR0FBR0EsRUFBQyxHQUFFLEVBQUU7QUFBQSxVQUFDO0FBQUMsbUJBQVMsR0FBR0EsSUFBRTtBQUFDLG1CQUFPQSxHQUFFLFFBQVEsc0JBQXFCLE9BQU8sRUFBRSxZQUFZO0FBQUEsVUFBQztBQUFDLG1CQUFTLEdBQUdBLElBQUVDLElBQUU7QUFBQyxnQkFBSUM7QUFBRSxnQkFBRyxPQUFPLGVBQWEsT0FBTyxPQUFPLGdCQUFjLFlBQVc7QUFBQyxjQUFBQSxLQUFFLElBQUksWUFBWUYsSUFBRSxFQUFDLFNBQVEsTUFBSyxZQUFXLE1BQUssUUFBT0MsR0FBQyxDQUFDO0FBQUEsWUFBQyxPQUFLO0FBQUMsY0FBQUMsS0FBRSxHQUFHLEVBQUUsWUFBWSxhQUFhO0FBQUUsY0FBQUEsR0FBRSxnQkFBZ0JGLElBQUUsTUFBSyxNQUFLQyxFQUFDO0FBQUEsWUFBQztBQUFDLG1CQUFPQztBQUFBLFVBQUM7QUFBQyxtQkFBUyxHQUFHRixJQUFFQyxJQUFFQyxJQUFFO0FBQUMsZUFBR0YsSUFBRUMsSUFBRSxHQUFHLEVBQUMsT0FBTUEsR0FBQyxHQUFFQyxFQUFDLENBQUM7QUFBQSxVQUFDO0FBQUMsbUJBQVMsR0FBR0YsSUFBRTtBQUFDLG1CQUFPQSxPQUFJO0FBQUEsVUFBdUI7QUFBQyxtQkFBUyxFQUFFQSxJQUFFQyxJQUFFO0FBQUMsZUFBRyxHQUFHRCxFQUFDLEdBQUUsU0FBU0EsSUFBRTtBQUFDLGtCQUFHO0FBQUMsZ0JBQUFDLEdBQUVELEVBQUM7QUFBQSxjQUFDLFNBQU9BLElBQUU7QUFBQyxrQkFBRUEsRUFBQztBQUFBLGNBQUM7QUFBQSxZQUFDLENBQUM7QUFBQSxVQUFDO0FBQUMsbUJBQVMsRUFBRUEsSUFBRTtBQUFDLGdCQUFHLFFBQVEsT0FBTTtBQUFDLHNCQUFRLE1BQU1BLEVBQUM7QUFBQSxZQUFDLFdBQVMsUUFBUSxLQUFJO0FBQUMsc0JBQVEsSUFBSSxXQUFVQSxFQUFDO0FBQUEsWUFBQztBQUFBLFVBQUM7QUFBQyxtQkFBUyxHQUFHQSxJQUFFQyxJQUFFQyxJQUFFO0FBQUMsWUFBQUYsS0FBRSxFQUFFQSxFQUFDO0FBQUUsZ0JBQUdFLE1BQUcsTUFBSztBQUFDLGNBQUFBLEtBQUUsQ0FBQztBQUFBLFlBQUM7QUFBQyxZQUFBQSxHQUFFLEtBQUssSUFBRUY7QUFBRSxnQkFBSUcsS0FBRSxHQUFHRixJQUFFQyxFQUFDO0FBQUUsZ0JBQUcsRUFBRSxVQUFRLENBQUMsR0FBR0QsRUFBQyxHQUFFO0FBQUMsZ0JBQUUsT0FBT0QsSUFBRUMsSUFBRUMsRUFBQztBQUFBLFlBQUM7QUFBQyxnQkFBR0EsR0FBRSxPQUFNO0FBQUMsZ0JBQUVBLEdBQUUsS0FBSztBQUFFLGlCQUFHRixJQUFFLGNBQWEsRUFBQyxXQUFVRSxHQUFDLENBQUM7QUFBQSxZQUFDO0FBQUMsZ0JBQUlFLEtBQUVKLEdBQUUsY0FBY0csRUFBQztBQUFFLGdCQUFJRSxLQUFFLEdBQUdKLEVBQUM7QUFBRSxnQkFBR0csTUFBR0MsT0FBSUosSUFBRTtBQUFDLGtCQUFJSyxLQUFFLEdBQUdELElBQUVGLEdBQUUsTUFBTTtBQUFFLGNBQUFDLEtBQUVBLE1BQUdKLEdBQUUsY0FBY00sRUFBQztBQUFBLFlBQUM7QUFBQyxjQUFFTixJQUFFLFNBQVNBLElBQUU7QUFBQyxjQUFBSSxLQUFFQSxPQUFJSixHQUFFLFFBQVFDLElBQUVFLEVBQUMsTUFBSSxTQUFPLENBQUNBLEdBQUU7QUFBQSxZQUFpQixDQUFDO0FBQUUsbUJBQU9DO0FBQUEsVUFBQztBQUFDLGNBQUksS0FBRyxTQUFTLFdBQVMsU0FBUztBQUFPLG1CQUFTLEtBQUk7QUFBQyxnQkFBSUosS0FBRSxHQUFHLEVBQUUsY0FBYyx3Q0FBd0M7QUFBRSxtQkFBT0EsTUFBRyxHQUFHLEVBQUU7QUFBQSxVQUFJO0FBQUMsbUJBQVMsR0FBR0EsSUFBRUMsSUFBRUMsSUFBRUMsSUFBRTtBQUFDLGdCQUFHLENBQUMsRUFBRSxHQUFFO0FBQUM7QUFBQSxZQUFNO0FBQUMsZ0JBQUcsRUFBRSxPQUFPLG9CQUFrQixHQUFFO0FBQUMsMkJBQWEsV0FBVyxvQkFBb0I7QUFBRTtBQUFBLFlBQU07QUFBQyxZQUFBSCxLQUFFLEVBQUVBLEVBQUM7QUFBRSxnQkFBSUksS0FBRSxFQUFFLGFBQWEsUUFBUSxvQkFBb0IsQ0FBQyxLQUFHLENBQUM7QUFBRSxxQkFBUUMsS0FBRSxHQUFFQSxLQUFFRCxHQUFFLFFBQU9DLE1BQUk7QUFBQyxrQkFBR0QsR0FBRUMsRUFBQyxFQUFFLFFBQU1MLElBQUU7QUFBQyxnQkFBQUksR0FBRSxPQUFPQyxJQUFFLENBQUM7QUFBRTtBQUFBLGNBQUs7QUFBQSxZQUFDO0FBQUMsZ0JBQUlDLEtBQUUsRUFBQyxLQUFJTixJQUFFLFNBQVFDLElBQUUsT0FBTUMsSUFBRSxRQUFPQyxHQUFDO0FBQUUsZUFBRyxHQUFHLEVBQUUsTUFBSywyQkFBMEIsRUFBQyxNQUFLRyxJQUFFLE9BQU1GLEdBQUMsQ0FBQztBQUFFLFlBQUFBLEdBQUUsS0FBS0UsRUFBQztBQUFFLG1CQUFNRixHQUFFLFNBQU8sRUFBRSxPQUFPLGtCQUFpQjtBQUFDLGNBQUFBLEdBQUUsTUFBTTtBQUFBLFlBQUM7QUFBQyxtQkFBTUEsR0FBRSxTQUFPLEdBQUU7QUFBQyxrQkFBRztBQUFDLDZCQUFhLFFBQVEsc0JBQXFCLEtBQUssVUFBVUEsRUFBQyxDQUFDO0FBQUU7QUFBQSxjQUFLLFNBQU9KLElBQUU7QUFBQyxtQkFBRyxHQUFHLEVBQUUsTUFBSywwQkFBeUIsRUFBQyxPQUFNQSxJQUFFLE9BQU1JLEdBQUMsQ0FBQztBQUFFLGdCQUFBQSxHQUFFLE1BQU07QUFBQSxjQUFDO0FBQUEsWUFBQztBQUFBLFVBQUM7QUFBQyxtQkFBUyxHQUFHSixJQUFFO0FBQUMsZ0JBQUcsQ0FBQyxFQUFFLEdBQUU7QUFBQyxxQkFBTztBQUFBLFlBQUk7QUFBQyxZQUFBQSxLQUFFLEVBQUVBLEVBQUM7QUFBRSxnQkFBSUMsS0FBRSxFQUFFLGFBQWEsUUFBUSxvQkFBb0IsQ0FBQyxLQUFHLENBQUM7QUFBRSxxQkFBUUMsS0FBRSxHQUFFQSxLQUFFRCxHQUFFLFFBQU9DLE1BQUk7QUFBQyxrQkFBR0QsR0FBRUMsRUFBQyxFQUFFLFFBQU1GLElBQUU7QUFBQyx1QkFBT0MsR0FBRUMsRUFBQztBQUFBLGNBQUM7QUFBQSxZQUFDO0FBQUMsbUJBQU87QUFBQSxVQUFJO0FBQUMsbUJBQVMsR0FBR0YsSUFBRTtBQUFDLGdCQUFJQyxLQUFFLEVBQUUsT0FBTztBQUFhLGdCQUFJQyxLQUFFRixHQUFFLFVBQVUsSUFBSTtBQUFFLGVBQUcsRUFBRUUsSUFBRSxNQUFJRCxFQUFDLEdBQUUsU0FBU0QsSUFBRTtBQUFDLGdCQUFFQSxJQUFFQyxFQUFDO0FBQUEsWUFBQyxDQUFDO0FBQUUsbUJBQU9DLEdBQUU7QUFBQSxVQUFTO0FBQUMsbUJBQVMsS0FBSTtBQUFDLGdCQUFJRixLQUFFLEdBQUc7QUFBRSxnQkFBSUMsS0FBRSxNQUFJLFNBQVMsV0FBUyxTQUFTO0FBQU8sZ0JBQUlDO0FBQUUsZ0JBQUc7QUFBQyxjQUFBQSxLQUFFLEdBQUcsRUFBRSxjQUFjLG9EQUFvRDtBQUFBLFlBQUMsU0FBT0YsSUFBRTtBQUFDLGNBQUFFLEtBQUUsR0FBRyxFQUFFLGNBQWMsZ0RBQWdEO0FBQUEsWUFBQztBQUFDLGdCQUFHLENBQUNBLElBQUU7QUFBQyxpQkFBRyxHQUFHLEVBQUUsTUFBSywwQkFBeUIsRUFBQyxNQUFLRCxJQUFFLFlBQVdELEdBQUMsQ0FBQztBQUFFLGlCQUFHQyxJQUFFLEdBQUdELEVBQUMsR0FBRSxHQUFHLEVBQUUsT0FBTSxPQUFPLE9BQU87QUFBQSxZQUFDO0FBQUMsZ0JBQUcsRUFBRSxPQUFPLGVBQWUsU0FBUSxhQUFhLEVBQUMsTUFBSyxLQUFJLEdBQUUsR0FBRyxFQUFFLE9BQU0sT0FBTyxTQUFTLElBQUk7QUFBQSxVQUFDO0FBQUMsbUJBQVMsR0FBR0EsSUFBRTtBQUFDLGdCQUFHLEVBQUUsT0FBTyxxQkFBb0I7QUFBQyxjQUFBQSxLQUFFQSxHQUFFLFFBQVEsbUNBQWtDLEVBQUU7QUFBRSxrQkFBRyxFQUFFQSxJQUFFLEdBQUcsS0FBRyxFQUFFQSxJQUFFLEdBQUcsR0FBRTtBQUFDLGdCQUFBQSxLQUFFQSxHQUFFLE1BQU0sR0FBRSxFQUFFO0FBQUEsY0FBQztBQUFBLFlBQUM7QUFBQyxnQkFBRyxFQUFFLE9BQU8sZ0JBQWU7QUFBQyxzQkFBUSxVQUFVLEVBQUMsTUFBSyxLQUFJLEdBQUUsSUFBR0EsRUFBQztBQUFBLFlBQUM7QUFBQyxpQkFBR0E7QUFBQSxVQUFDO0FBQUMsbUJBQVMsR0FBR0EsSUFBRTtBQUFDLGdCQUFHLEVBQUUsT0FBTyxlQUFlLFNBQVEsYUFBYSxFQUFDLE1BQUssS0FBSSxHQUFFLElBQUdBLEVBQUM7QUFBRSxpQkFBR0E7QUFBQSxVQUFDO0FBQUMsbUJBQVMsR0FBR0EsSUFBRTtBQUFDLGVBQUdBLElBQUUsU0FBU0EsSUFBRTtBQUFDLGNBQUFBLEdBQUUsS0FBSztBQUFBLFlBQUMsQ0FBQztBQUFBLFVBQUM7QUFBQyxtQkFBUyxHQUFHSyxJQUFFO0FBQUMsZ0JBQUlMLEtBQUUsSUFBSTtBQUFlLGdCQUFJTSxLQUFFLEVBQUMsTUFBS0QsSUFBRSxLQUFJTCxHQUFDO0FBQUUsZUFBRyxHQUFHLEVBQUUsTUFBSyx5QkFBd0JNLEVBQUM7QUFBRSxZQUFBTixHQUFFLEtBQUssT0FBTUssSUFBRSxJQUFJO0FBQUUsWUFBQUwsR0FBRSxpQkFBaUIsY0FBYSxNQUFNO0FBQUUsWUFBQUEsR0FBRSxpQkFBaUIsOEJBQTZCLE1BQU07QUFBRSxZQUFBQSxHQUFFLGlCQUFpQixrQkFBaUIsR0FBRyxFQUFFLFNBQVMsSUFBSTtBQUFFLFlBQUFBLEdBQUUsU0FBTyxXQUFVO0FBQUMsa0JBQUcsS0FBSyxVQUFRLE9BQUssS0FBSyxTQUFPLEtBQUk7QUFBQyxtQkFBRyxHQUFHLEVBQUUsTUFBSyw2QkFBNEJNLEVBQUM7QUFBRSxvQkFBSU4sS0FBRSxFQUFFLEtBQUssUUFBUTtBQUFFLGdCQUFBQSxLQUFFQSxHQUFFLGNBQWMsd0NBQXdDLEtBQUdBO0FBQUUsb0JBQUlDLEtBQUUsR0FBRztBQUFFLG9CQUFJQyxLQUFFLEVBQUVELEVBQUM7QUFBRSxvQkFBSUUsS0FBRSxHQUFHLEtBQUssUUFBUTtBQUFFLG9CQUFHQSxJQUFFO0FBQUMsc0JBQUlDLEtBQUUsRUFBRSxPQUFPO0FBQUUsc0JBQUdBLElBQUU7QUFBQyxvQkFBQUEsR0FBRSxZQUFVRDtBQUFBLGtCQUFDLE9BQUs7QUFBQywyQkFBTyxTQUFTLFFBQU1BO0FBQUEsa0JBQUM7QUFBQSxnQkFBQztBQUFDLG1CQUFHRixJQUFFRCxJQUFFRSxFQUFDO0FBQUUsbUJBQUdBLEdBQUUsS0FBSztBQUFFLHFCQUFHRztBQUFFLG1CQUFHLEdBQUcsRUFBRSxNQUFLLHVCQUFzQixFQUFDLE1BQUtBLElBQUUsV0FBVSxNQUFLLGdCQUFlLEtBQUssU0FBUSxDQUFDO0FBQUEsY0FBQyxPQUFLO0FBQUMsbUJBQUcsR0FBRyxFQUFFLE1BQUssa0NBQWlDQyxFQUFDO0FBQUEsY0FBQztBQUFBLFlBQUM7QUFBRSxZQUFBTixHQUFFLEtBQUs7QUFBQSxVQUFDO0FBQUMsbUJBQVMsR0FBR0EsSUFBRTtBQUFDLGVBQUc7QUFBRSxZQUFBQSxLQUFFQSxNQUFHLFNBQVMsV0FBUyxTQUFTO0FBQU8sZ0JBQUlDLEtBQUUsR0FBR0QsRUFBQztBQUFFLGdCQUFHQyxJQUFFO0FBQUMsa0JBQUlDLEtBQUUsRUFBRUQsR0FBRSxPQUFPO0FBQUUsa0JBQUlFLEtBQUUsR0FBRztBQUFFLGtCQUFJQyxLQUFFLEVBQUVELEVBQUM7QUFBRSxpQkFBR0EsSUFBRUQsSUFBRUUsRUFBQztBQUFFLGlCQUFHQSxHQUFFLEtBQUs7QUFBRSx1QkFBUyxRQUFNSCxHQUFFO0FBQU0seUJBQVcsV0FBVTtBQUFDLHVCQUFPLFNBQVMsR0FBRUEsR0FBRSxNQUFNO0FBQUEsY0FBQyxHQUFFLENBQUM7QUFBRSxtQkFBR0Q7QUFBRSxpQkFBRyxHQUFHLEVBQUUsTUFBSyx1QkFBc0IsRUFBQyxNQUFLQSxJQUFFLE1BQUtDLEdBQUMsQ0FBQztBQUFBLFlBQUMsT0FBSztBQUFDLGtCQUFHLEVBQUUsT0FBTyxzQkFBcUI7QUFBQyx1QkFBTyxTQUFTLE9BQU8sSUFBSTtBQUFBLGNBQUMsT0FBSztBQUFDLG1CQUFHRCxFQUFDO0FBQUEsY0FBQztBQUFBLFlBQUM7QUFBQSxVQUFDO0FBQUMsbUJBQVMsR0FBR0EsSUFBRTtBQUFDLGdCQUFJQyxLQUFFLEdBQUdELElBQUUsY0FBYztBQUFFLGdCQUFHQyxNQUFHLE1BQUs7QUFBQyxjQUFBQSxLQUFFLENBQUNELEVBQUM7QUFBQSxZQUFDO0FBQUMsZUFBR0MsSUFBRSxTQUFTRCxJQUFFO0FBQUMsa0JBQUlDLEtBQUUsR0FBR0QsRUFBQztBQUFFLGNBQUFDLEdBQUUsZ0JBQWNBLEdBQUUsZ0JBQWMsS0FBRztBQUFFLGNBQUFELEdBQUUsVUFBVSxLQUFLLEVBQUUsS0FBS0EsR0FBRSxXQUFVLEVBQUUsT0FBTyxZQUFZO0FBQUEsWUFBQyxDQUFDO0FBQUUsbUJBQU9DO0FBQUEsVUFBQztBQUFDLG1CQUFTLEdBQUdELElBQUU7QUFBQyxnQkFBSUMsS0FBRSxHQUFHRCxJQUFFLGlCQUFpQjtBQUFFLGdCQUFHQyxNQUFHLE1BQUs7QUFBQyxjQUFBQSxLQUFFLENBQUM7QUFBQSxZQUFDO0FBQUMsZUFBR0EsSUFBRSxTQUFTRCxJQUFFO0FBQUMsa0JBQUlDLEtBQUUsR0FBR0QsRUFBQztBQUFFLGNBQUFDLEdBQUUsZ0JBQWNBLEdBQUUsZ0JBQWMsS0FBRztBQUFFLGNBQUFELEdBQUUsYUFBYSxZQUFXLEVBQUU7QUFBQSxZQUFDLENBQUM7QUFBRSxtQkFBT0M7QUFBQSxVQUFDO0FBQUMsbUJBQVMsR0FBR0QsSUFBRUMsSUFBRTtBQUFDLGVBQUdELElBQUUsU0FBU0EsSUFBRTtBQUFDLGtCQUFJQyxLQUFFLEdBQUdELEVBQUM7QUFBRSxjQUFBQyxHQUFFLGdCQUFjQSxHQUFFLGdCQUFjLEtBQUc7QUFBRSxrQkFBR0EsR0FBRSxpQkFBZSxHQUFFO0FBQUMsZ0JBQUFELEdBQUUsVUFBVSxRQUFRLEVBQUUsS0FBS0EsR0FBRSxXQUFVLEVBQUUsT0FBTyxZQUFZO0FBQUEsY0FBQztBQUFBLFlBQUMsQ0FBQztBQUFFLGVBQUdDLElBQUUsU0FBU0QsSUFBRTtBQUFDLGtCQUFJQyxLQUFFLEdBQUdELEVBQUM7QUFBRSxjQUFBQyxHQUFFLGdCQUFjQSxHQUFFLGdCQUFjLEtBQUc7QUFBRSxrQkFBR0EsR0FBRSxpQkFBZSxHQUFFO0FBQUMsZ0JBQUFELEdBQUUsZ0JBQWdCLFVBQVU7QUFBQSxjQUFDO0FBQUEsWUFBQyxDQUFDO0FBQUEsVUFBQztBQUFDLG1CQUFTLEdBQUdBLElBQUVDLElBQUU7QUFBQyxxQkFBUUMsS0FBRSxHQUFFQSxLQUFFRixHQUFFLFFBQU9FLE1BQUk7QUFBQyxrQkFBSUMsS0FBRUgsR0FBRUUsRUFBQztBQUFFLGtCQUFHQyxHQUFFLFdBQVdGLEVBQUMsR0FBRTtBQUFDLHVCQUFPO0FBQUEsY0FBSTtBQUFBLFlBQUM7QUFBQyxtQkFBTztBQUFBLFVBQUs7QUFBQyxtQkFBUyxHQUFHRCxJQUFFO0FBQUMsZ0JBQUdBLEdBQUUsU0FBTyxNQUFJQSxHQUFFLFFBQU0sUUFBTUEsR0FBRSxZQUFVLEVBQUVBLElBQUUsb0JBQW9CLEdBQUU7QUFBQyxxQkFBTztBQUFBLFlBQUs7QUFBQyxnQkFBR0EsR0FBRSxTQUFPLFlBQVVBLEdBQUUsU0FBTyxZQUFVQSxHQUFFLFlBQVUsV0FBU0EsR0FBRSxZQUFVLFdBQVNBLEdBQUUsWUFBVSxRQUFPO0FBQUMscUJBQU87QUFBQSxZQUFLO0FBQUMsZ0JBQUdBLEdBQUUsU0FBTyxjQUFZQSxHQUFFLFNBQU8sU0FBUTtBQUFDLHFCQUFPQSxHQUFFO0FBQUEsWUFBTztBQUFDLG1CQUFPO0FBQUEsVUFBSTtBQUFDLG1CQUFTLEdBQUdBLElBQUVDLElBQUVDLElBQUU7QUFBQyxnQkFBR0YsTUFBRyxRQUFNQyxNQUFHLE1BQUs7QUFBQyxrQkFBSUUsS0FBRUQsR0FBRUYsRUFBQztBQUFFLGtCQUFHRyxPQUFJLFFBQVU7QUFBQyxnQkFBQUQsR0FBRUYsRUFBQyxJQUFFQztBQUFBLGNBQUMsV0FBUyxNQUFNLFFBQVFFLEVBQUMsR0FBRTtBQUFDLG9CQUFHLE1BQU0sUUFBUUYsRUFBQyxHQUFFO0FBQUMsa0JBQUFDLEdBQUVGLEVBQUMsSUFBRUcsR0FBRSxPQUFPRixFQUFDO0FBQUEsZ0JBQUMsT0FBSztBQUFDLGtCQUFBRSxHQUFFLEtBQUtGLEVBQUM7QUFBQSxnQkFBQztBQUFBLGNBQUMsT0FBSztBQUFDLG9CQUFHLE1BQU0sUUFBUUEsRUFBQyxHQUFFO0FBQUMsa0JBQUFDLEdBQUVGLEVBQUMsSUFBRSxDQUFDRyxFQUFDLEVBQUUsT0FBT0YsRUFBQztBQUFBLGdCQUFDLE9BQUs7QUFBQyxrQkFBQUMsR0FBRUYsRUFBQyxJQUFFLENBQUNHLElBQUVGLEVBQUM7QUFBQSxnQkFBQztBQUFBLGNBQUM7QUFBQSxZQUFDO0FBQUEsVUFBQztBQUFDLG1CQUFTLEdBQUdBLElBQUVDLElBQUVDLElBQUVILElBQUVJLElBQUU7QUFBQyxnQkFBR0osTUFBRyxRQUFNLEdBQUdDLElBQUVELEVBQUMsR0FBRTtBQUFDO0FBQUEsWUFBTSxPQUFLO0FBQUMsY0FBQUMsR0FBRSxLQUFLRCxFQUFDO0FBQUEsWUFBQztBQUFDLGdCQUFHLEdBQUdBLEVBQUMsR0FBRTtBQUFDLGtCQUFJSyxLQUFFLEdBQUdMLElBQUUsTUFBTTtBQUFFLGtCQUFJTSxLQUFFTixHQUFFO0FBQU0sa0JBQUdBLEdBQUUsWUFBVUEsR0FBRSxZQUFVLFVBQVM7QUFBQyxnQkFBQU0sS0FBRSxFQUFFTixHQUFFLGlCQUFpQixnQkFBZ0IsQ0FBQyxFQUFFLElBQUksU0FBU0EsSUFBRTtBQUFDLHlCQUFPQSxHQUFFO0FBQUEsZ0JBQUssQ0FBQztBQUFBLGNBQUM7QUFBQyxrQkFBR0EsR0FBRSxPQUFNO0FBQUMsZ0JBQUFNLEtBQUUsRUFBRU4sR0FBRSxLQUFLO0FBQUEsY0FBQztBQUFDLGlCQUFHSyxJQUFFQyxJQUFFSixFQUFDO0FBQUUsa0JBQUdFLElBQUU7QUFBQyxtQkFBR0osSUFBRUcsRUFBQztBQUFBLGNBQUM7QUFBQSxZQUFDO0FBQUMsZ0JBQUcsRUFBRUgsSUFBRSxNQUFNLEdBQUU7QUFBQyxrQkFBSU8sS0FBRVAsR0FBRTtBQUFTLGlCQUFHTyxJQUFFLFNBQVNQLElBQUU7QUFBQyxtQkFBR0MsSUFBRUMsSUFBRUMsSUFBRUgsSUFBRUksRUFBQztBQUFBLGNBQUMsQ0FBQztBQUFBLFlBQUM7QUFBQSxVQUFDO0FBQUMsbUJBQVMsR0FBR0osSUFBRUMsSUFBRTtBQUFDLGdCQUFHRCxHQUFFLGNBQWE7QUFBQyxpQkFBR0EsSUFBRSwwQkFBMEI7QUFBRSxrQkFBRyxDQUFDQSxHQUFFLGNBQWMsR0FBRTtBQUFDLGdCQUFBQyxHQUFFLEtBQUssRUFBQyxLQUFJRCxJQUFFLFNBQVFBLEdBQUUsbUJBQWtCLFVBQVNBLEdBQUUsU0FBUSxDQUFDO0FBQUUsbUJBQUdBLElBQUUsMEJBQXlCLEVBQUMsU0FBUUEsR0FBRSxtQkFBa0IsVUFBU0EsR0FBRSxTQUFRLENBQUM7QUFBQSxjQUFDO0FBQUEsWUFBQztBQUFBLFVBQUM7QUFBQyxtQkFBUyxHQUFHQSxJQUFFQyxJQUFFO0FBQUMsZ0JBQUlDLEtBQUUsQ0FBQztBQUFFLGdCQUFJQyxLQUFFLENBQUM7QUFBRSxnQkFBSUMsS0FBRSxDQUFDO0FBQUUsZ0JBQUlDLEtBQUUsQ0FBQztBQUFFLGdCQUFJQyxLQUFFLEdBQUdOLEVBQUM7QUFBRSxnQkFBR00sR0FBRSxxQkFBbUIsQ0FBQyxHQUFHQSxHQUFFLGlCQUFpQixHQUFFO0FBQUMsY0FBQUEsR0FBRSxvQkFBa0I7QUFBQSxZQUFJO0FBQUMsZ0JBQUlDLEtBQUUsRUFBRVAsSUFBRSxNQUFNLEtBQUdBLEdBQUUsZUFBYSxRQUFNLEdBQUdBLElBQUUsYUFBYSxNQUFJO0FBQU8sZ0JBQUdNLEdBQUUsbUJBQWtCO0FBQUMsY0FBQUMsS0FBRUEsTUFBR0QsR0FBRSxrQkFBa0IsbUJBQWlCO0FBQUEsWUFBSTtBQUFDLGdCQUFHTCxPQUFJLE9BQU07QUFBQyxpQkFBR0MsSUFBRUUsSUFBRUMsSUFBRSxFQUFFTCxJQUFFLE1BQU0sR0FBRU8sRUFBQztBQUFBLFlBQUM7QUFBQyxlQUFHTCxJQUFFQyxJQUFFRSxJQUFFTCxJQUFFTyxFQUFDO0FBQUUsZ0JBQUdELEdBQUUscUJBQW1CTixHQUFFLFlBQVUsWUFBVUEsR0FBRSxZQUFVLFdBQVMsR0FBR0EsSUFBRSxNQUFNLE1BQUksVUFBUztBQUFDLGtCQUFJUSxLQUFFRixHQUFFLHFCQUFtQk47QUFBRSxrQkFBSVMsS0FBRSxHQUFHRCxJQUFFLE1BQU07QUFBRSxpQkFBR0MsSUFBRUQsR0FBRSxPQUFNSixFQUFDO0FBQUEsWUFBQztBQUFDLGdCQUFJTSxLQUFFLEdBQUdWLElBQUUsWUFBWTtBQUFFLGVBQUdVLElBQUUsU0FBU1YsSUFBRTtBQUFDLGlCQUFHRSxJQUFFQyxJQUFFRSxJQUFFTCxJQUFFTyxFQUFDO0FBQUUsa0JBQUcsQ0FBQyxFQUFFUCxJQUFFLE1BQU0sR0FBRTtBQUFDLG1CQUFHQSxHQUFFLGlCQUFpQixFQUFFLEdBQUUsU0FBU0EsSUFBRTtBQUFDLHFCQUFHRSxJQUFFQyxJQUFFRSxJQUFFTCxJQUFFTyxFQUFDO0FBQUEsZ0JBQUMsQ0FBQztBQUFBLGNBQUM7QUFBQSxZQUFDLENBQUM7QUFBRSxZQUFBSixLQUFFLEdBQUdBLElBQUVDLEVBQUM7QUFBRSxtQkFBTSxFQUFDLFFBQU9DLElBQUUsUUFBT0YsR0FBQztBQUFBLFVBQUM7QUFBQyxtQkFBUyxHQUFHSCxJQUFFQyxJQUFFQyxJQUFFO0FBQUMsZ0JBQUdGLE9BQUksSUFBRztBQUFDLGNBQUFBLE1BQUc7QUFBQSxZQUFHO0FBQUMsZ0JBQUcsT0FBT0UsRUFBQyxNQUFJLG1CQUFrQjtBQUFDLGNBQUFBLEtBQUUsS0FBSyxVQUFVQSxFQUFDO0FBQUEsWUFBQztBQUFDLGdCQUFJQyxLQUFFLG1CQUFtQkQsRUFBQztBQUFFLFlBQUFGLE1BQUcsbUJBQW1CQyxFQUFDLElBQUUsTUFBSUU7QUFBRSxtQkFBT0g7QUFBQSxVQUFDO0FBQUMsbUJBQVMsR0FBR0EsSUFBRTtBQUFDLGdCQUFJQyxLQUFFO0FBQUcscUJBQVFDLE1BQUtGLElBQUU7QUFBQyxrQkFBR0EsR0FBRSxlQUFlRSxFQUFDLEdBQUU7QUFBQyxvQkFBSUMsS0FBRUgsR0FBRUUsRUFBQztBQUFFLG9CQUFHLE1BQU0sUUFBUUMsRUFBQyxHQUFFO0FBQUMscUJBQUdBLElBQUUsU0FBU0gsSUFBRTtBQUFDLG9CQUFBQyxLQUFFLEdBQUdBLElBQUVDLElBQUVGLEVBQUM7QUFBQSxrQkFBQyxDQUFDO0FBQUEsZ0JBQUMsT0FBSztBQUFDLGtCQUFBQyxLQUFFLEdBQUdBLElBQUVDLElBQUVDLEVBQUM7QUFBQSxnQkFBQztBQUFBLGNBQUM7QUFBQSxZQUFDO0FBQUMsbUJBQU9GO0FBQUEsVUFBQztBQUFDLG1CQUFTLEdBQUdELElBQUU7QUFBQyxnQkFBSUMsS0FBRSxJQUFJO0FBQVMscUJBQVFDLE1BQUtGLElBQUU7QUFBQyxrQkFBR0EsR0FBRSxlQUFlRSxFQUFDLEdBQUU7QUFBQyxvQkFBSUMsS0FBRUgsR0FBRUUsRUFBQztBQUFFLG9CQUFHLE1BQU0sUUFBUUMsRUFBQyxHQUFFO0FBQUMscUJBQUdBLElBQUUsU0FBU0gsSUFBRTtBQUFDLG9CQUFBQyxHQUFFLE9BQU9DLElBQUVGLEVBQUM7QUFBQSxrQkFBQyxDQUFDO0FBQUEsZ0JBQUMsT0FBSztBQUFDLGtCQUFBQyxHQUFFLE9BQU9DLElBQUVDLEVBQUM7QUFBQSxnQkFBQztBQUFBLGNBQUM7QUFBQSxZQUFDO0FBQUMsbUJBQU9GO0FBQUEsVUFBQztBQUFDLG1CQUFTLEdBQUdELElBQUVDLElBQUVDLElBQUU7QUFBQyxnQkFBSUMsS0FBRSxFQUFDLGNBQWEsUUFBTyxjQUFhLEdBQUdILElBQUUsSUFBSSxHQUFFLG1CQUFrQixHQUFHQSxJQUFFLE1BQU0sR0FBRSxhQUFZLEdBQUdDLElBQUUsSUFBSSxHQUFFLGtCQUFpQixHQUFHLEVBQUUsU0FBUyxLQUFJO0FBQUUsZUFBR0QsSUFBRSxjQUFhLE9BQU1HLEVBQUM7QUFBRSxnQkFBR0QsT0FBSSxRQUFVO0FBQUMsY0FBQUMsR0FBRSxXQUFXLElBQUVEO0FBQUEsWUFBQztBQUFDLGdCQUFHLEdBQUdGLEVBQUMsRUFBRSxTQUFRO0FBQUMsY0FBQUcsR0FBRSxZQUFZLElBQUU7QUFBQSxZQUFNO0FBQUMsbUJBQU9BO0FBQUEsVUFBQztBQUFDLG1CQUFTLEdBQUdGLElBQUVELElBQUU7QUFBQyxnQkFBSUUsS0FBRSxHQUFHRixJQUFFLFdBQVc7QUFBRSxnQkFBR0UsSUFBRTtBQUFDLGtCQUFHQSxPQUFJLFFBQU87QUFBQyx1QkFBTSxDQUFDO0FBQUEsY0FBQyxXQUFTQSxPQUFJLEtBQUk7QUFBQyx1QkFBT0Q7QUFBQSxjQUFDLFdBQVNDLEdBQUUsUUFBUSxNQUFNLE1BQUksR0FBRTtBQUFDLG1CQUFHQSxHQUFFLE9BQU8sQ0FBQyxFQUFFLE1BQU0sR0FBRyxHQUFFLFNBQVNGLElBQUU7QUFBQyxrQkFBQUEsS0FBRUEsR0FBRSxLQUFLO0FBQUUseUJBQU9DLEdBQUVELEVBQUM7QUFBQSxnQkFBQyxDQUFDO0FBQUUsdUJBQU9DO0FBQUEsY0FBQyxPQUFLO0FBQUMsb0JBQUlFLEtBQUUsQ0FBQztBQUFFLG1CQUFHRCxHQUFFLE1BQU0sR0FBRyxHQUFFLFNBQVNGLElBQUU7QUFBQyxrQkFBQUEsS0FBRUEsR0FBRSxLQUFLO0FBQUUsa0JBQUFHLEdBQUVILEVBQUMsSUFBRUMsR0FBRUQsRUFBQztBQUFBLGdCQUFDLENBQUM7QUFBRSx1QkFBT0c7QUFBQSxjQUFDO0FBQUEsWUFBQyxPQUFLO0FBQUMscUJBQU9GO0FBQUEsWUFBQztBQUFBLFVBQUM7QUFBQyxtQkFBUyxHQUFHRCxJQUFFO0FBQUMsbUJBQU8sR0FBR0EsSUFBRSxNQUFNLEtBQUcsR0FBR0EsSUFBRSxNQUFNLEVBQUUsUUFBUSxHQUFHLEtBQUc7QUFBQSxVQUFDO0FBQUMsbUJBQVMsR0FBR0EsSUFBRUMsSUFBRTtBQUFDLGdCQUFJQyxLQUFFRCxLQUFFQSxLQUFFLEdBQUdELElBQUUsU0FBUztBQUFFLGdCQUFJRyxLQUFFLEVBQUMsV0FBVSxHQUFHSCxFQUFDLEVBQUUsVUFBUSxjQUFZLEVBQUUsT0FBTyxrQkFBaUIsV0FBVSxFQUFFLE9BQU8sa0JBQWlCLGFBQVksRUFBRSxPQUFPLG1CQUFrQjtBQUFFLGdCQUFHLEVBQUUsT0FBTyx5QkFBdUIsR0FBR0EsRUFBQyxFQUFFLFdBQVMsQ0FBQyxHQUFHQSxFQUFDLEdBQUU7QUFBQyxjQUFBRyxHQUFFLE1BQU0sSUFBRTtBQUFBLFlBQUs7QUFBQyxnQkFBR0QsSUFBRTtBQUFDLGtCQUFJRSxLQUFFLEVBQUVGLEVBQUM7QUFBRSxrQkFBR0UsR0FBRSxTQUFPLEdBQUU7QUFBQyx5QkFBUUMsS0FBRSxHQUFFQSxLQUFFRCxHQUFFLFFBQU9DLE1BQUk7QUFBQyxzQkFBSUMsS0FBRUYsR0FBRUMsRUFBQztBQUFFLHNCQUFHQyxHQUFFLFFBQVEsT0FBTyxNQUFJLEdBQUU7QUFBQyxvQkFBQUgsR0FBRSxXQUFXLElBQUUsRUFBRUcsR0FBRSxPQUFPLENBQUMsQ0FBQztBQUFBLGtCQUFDLFdBQVNBLEdBQUUsUUFBUSxTQUFTLE1BQUksR0FBRTtBQUFDLG9CQUFBSCxHQUFFLGFBQWEsSUFBRSxFQUFFRyxHQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQUEsa0JBQUMsV0FBU0EsR0FBRSxRQUFRLGFBQWEsTUFBSSxHQUFFO0FBQUMsb0JBQUFILEdBQUUsWUFBWSxJQUFFRyxHQUFFLE9BQU8sRUFBRSxNQUFJO0FBQUEsa0JBQU0sV0FBU0EsR0FBRSxRQUFRLGNBQWMsTUFBSSxHQUFFO0FBQUMsb0JBQUFILEdBQUUsYUFBYSxJQUFFRyxHQUFFLE9BQU8sRUFBRSxNQUFJO0FBQUEsa0JBQU0sV0FBU0EsR0FBRSxRQUFRLFNBQVMsTUFBSSxHQUFFO0FBQUMsd0JBQUlDLEtBQUVELEdBQUUsT0FBTyxDQUFDO0FBQUUsd0JBQUlFLEtBQUVELEdBQUUsTUFBTSxHQUFHO0FBQUUsd0JBQUlFLEtBQUVELEdBQUUsSUFBSTtBQUFFLHdCQUFJRSxLQUFFRixHQUFFLFNBQU8sSUFBRUEsR0FBRSxLQUFLLEdBQUcsSUFBRTtBQUFLLG9CQUFBTCxHQUFFLFFBQVEsSUFBRU07QUFBRSxvQkFBQU4sR0FBRSxjQUFjLElBQUVPO0FBQUEsa0JBQUMsV0FBU0osR0FBRSxRQUFRLE9BQU8sTUFBSSxHQUFFO0FBQUMsd0JBQUlLLEtBQUVMLEdBQUUsT0FBTyxDQUFDO0FBQUUsd0JBQUlFLEtBQUVHLEdBQUUsTUFBTSxHQUFHO0FBQUUsd0JBQUlDLEtBQUVKLEdBQUUsSUFBSTtBQUFFLHdCQUFJRSxLQUFFRixHQUFFLFNBQU8sSUFBRUEsR0FBRSxLQUFLLEdBQUcsSUFBRTtBQUFLLG9CQUFBTCxHQUFFLE1BQU0sSUFBRVM7QUFBRSxvQkFBQVQsR0FBRSxZQUFZLElBQUVPO0FBQUEsa0JBQUMsV0FBU0osR0FBRSxRQUFRLGVBQWUsTUFBSSxHQUFFO0FBQUMsd0JBQUlPLEtBQUVQLEdBQUUsT0FBTyxnQkFBZ0IsTUFBTTtBQUFFLG9CQUFBSCxHQUFFLGFBQWEsSUFBRVUsTUFBRztBQUFBLGtCQUFNLFdBQVNSLE1BQUcsR0FBRTtBQUFDLG9CQUFBRixHQUFFLFdBQVcsSUFBRUc7QUFBQSxrQkFBQyxPQUFLO0FBQUMsc0JBQUUsa0NBQWdDQSxFQUFDO0FBQUEsa0JBQUM7QUFBQSxnQkFBQztBQUFBLGNBQUM7QUFBQSxZQUFDO0FBQUMsbUJBQU9IO0FBQUEsVUFBQztBQUFDLG1CQUFTLEdBQUdILElBQUU7QUFBQyxtQkFBTyxHQUFHQSxJQUFFLGFBQWEsTUFBSSx5QkFBdUIsRUFBRUEsSUFBRSxNQUFNLEtBQUcsR0FBR0EsSUFBRSxTQUFTLE1BQUk7QUFBQSxVQUFxQjtBQUFDLG1CQUFTLEdBQUdDLElBQUVDLElBQUVDLElBQUU7QUFBQyxnQkFBSUMsS0FBRTtBQUFLLGNBQUVGLElBQUUsU0FBU0YsSUFBRTtBQUFDLGtCQUFHSSxNQUFHLE1BQUs7QUFBQyxnQkFBQUEsS0FBRUosR0FBRSxpQkFBaUJDLElBQUVFLElBQUVELEVBQUM7QUFBQSxjQUFDO0FBQUEsWUFBQyxDQUFDO0FBQUUsZ0JBQUdFLE1BQUcsTUFBSztBQUFDLHFCQUFPQTtBQUFBLFlBQUMsT0FBSztBQUFDLGtCQUFHLEdBQUdGLEVBQUMsR0FBRTtBQUFDLHVCQUFPLEdBQUdDLEVBQUM7QUFBQSxjQUFDLE9BQUs7QUFBQyx1QkFBTyxHQUFHQSxFQUFDO0FBQUEsY0FBQztBQUFBLFlBQUM7QUFBQSxVQUFDO0FBQUMsbUJBQVMsRUFBRUgsSUFBRTtBQUFDLG1CQUFNLEVBQUMsT0FBTSxDQUFDLEdBQUUsTUFBSyxDQUFDQSxFQUFDLEVBQUM7QUFBQSxVQUFDO0FBQUMsbUJBQVMsR0FBR0EsSUFBRUMsSUFBRTtBQUFDLGdCQUFJQyxLQUFFRixHQUFFLENBQUM7QUFBRSxnQkFBSUcsS0FBRUgsR0FBRUEsR0FBRSxTQUFPLENBQUM7QUFBRSxnQkFBR0MsR0FBRSxRQUFPO0FBQUMsa0JBQUlHLEtBQUU7QUFBSyxrQkFBR0gsR0FBRSxjQUFhO0FBQUMsZ0JBQUFHLEtBQUUsR0FBR0YsSUFBRUQsR0FBRSxZQUFZO0FBQUEsY0FBQztBQUFDLGtCQUFHQSxHQUFFLFdBQVMsVUFBUUMsTUFBR0UsS0FBRztBQUFDLGdCQUFBQSxLQUFFQSxNQUFHRjtBQUFFLGdCQUFBRSxHQUFFLFlBQVU7QUFBQSxjQUFDO0FBQUMsa0JBQUdILEdBQUUsV0FBUyxhQUFXRSxNQUFHQyxLQUFHO0FBQUMsZ0JBQUFBLEtBQUVBLE1BQUdEO0FBQUUsZ0JBQUFDLEdBQUUsWUFBVUEsR0FBRTtBQUFBLGNBQVk7QUFBQSxZQUFDO0FBQUMsZ0JBQUdILEdBQUUsTUFBSztBQUFDLGtCQUFJRyxLQUFFO0FBQUssa0JBQUdILEdBQUUsWUFBVztBQUFDLG9CQUFJSSxLQUFFSixHQUFFO0FBQVcsb0JBQUdBLEdBQUUsZUFBYSxVQUFTO0FBQUMsa0JBQUFJLEtBQUU7QUFBQSxnQkFBTTtBQUFDLGdCQUFBRCxLQUFFLEdBQUdGLElBQUVHLEVBQUM7QUFBQSxjQUFDO0FBQUMsa0JBQUdKLEdBQUUsU0FBTyxVQUFRQyxNQUFHRSxLQUFHO0FBQUMsZ0JBQUFBLEtBQUVBLE1BQUdGO0FBQUUsZ0JBQUFFLEdBQUUsZUFBZSxFQUFDLE9BQU0sU0FBUSxVQUFTLEVBQUUsT0FBTyxlQUFjLENBQUM7QUFBQSxjQUFDO0FBQUMsa0JBQUdILEdBQUUsU0FBTyxhQUFXRSxNQUFHQyxLQUFHO0FBQUMsZ0JBQUFBLEtBQUVBLE1BQUdEO0FBQUUsZ0JBQUFDLEdBQUUsZUFBZSxFQUFDLE9BQU0sT0FBTSxVQUFTLEVBQUUsT0FBTyxlQUFjLENBQUM7QUFBQSxjQUFDO0FBQUEsWUFBQztBQUFBLFVBQUM7QUFBQyxtQkFBUyxHQUFHSixJQUFFQyxJQUFFQyxJQUFFQyxJQUFFO0FBQUMsZ0JBQUdBLE1BQUcsTUFBSztBQUFDLGNBQUFBLEtBQUUsQ0FBQztBQUFBLFlBQUM7QUFBQyxnQkFBR0gsTUFBRyxNQUFLO0FBQUMscUJBQU9HO0FBQUEsWUFBQztBQUFDLGdCQUFJQyxLQUFFLEdBQUdKLElBQUVDLEVBQUM7QUFBRSxnQkFBR0csSUFBRTtBQUFDLGtCQUFJQyxLQUFFRCxHQUFFLEtBQUs7QUFBRSxrQkFBSUUsS0FBRUo7QUFBRSxrQkFBR0csT0FBSSxTQUFRO0FBQUMsdUJBQU87QUFBQSxjQUFJO0FBQUMsa0JBQUdBLEdBQUUsUUFBUSxhQUFhLE1BQUksR0FBRTtBQUFDLGdCQUFBQSxLQUFFQSxHQUFFLE9BQU8sRUFBRTtBQUFFLGdCQUFBQyxLQUFFO0FBQUEsY0FBSSxXQUFTRCxHQUFFLFFBQVEsS0FBSyxNQUFJLEdBQUU7QUFBQyxnQkFBQUEsS0FBRUEsR0FBRSxPQUFPLENBQUM7QUFBRSxnQkFBQUMsS0FBRTtBQUFBLGNBQUk7QUFBQyxrQkFBR0QsR0FBRSxRQUFRLEdBQUcsTUFBSSxHQUFFO0FBQUMsZ0JBQUFBLEtBQUUsTUFBSUEsS0FBRTtBQUFBLGNBQUc7QUFBQyxrQkFBSUU7QUFBRSxrQkFBR0QsSUFBRTtBQUFDLGdCQUFBQyxLQUFFLEdBQUdQLElBQUUsV0FBVTtBQUFDLHlCQUFPLFNBQVMsYUFBV0ssS0FBRSxHQUFHLEVBQUU7QUFBQSxnQkFBQyxHQUFFLENBQUMsQ0FBQztBQUFBLGNBQUMsT0FBSztBQUFDLGdCQUFBRSxLQUFFLEVBQUVGLEVBQUM7QUFBQSxjQUFDO0FBQUMsdUJBQVFHLE1BQUtELElBQUU7QUFBQyxvQkFBR0EsR0FBRSxlQUFlQyxFQUFDLEdBQUU7QUFBQyxzQkFBR0wsR0FBRUssRUFBQyxLQUFHLE1BQUs7QUFBQyxvQkFBQUwsR0FBRUssRUFBQyxJQUFFRCxHQUFFQyxFQUFDO0FBQUEsa0JBQUM7QUFBQSxnQkFBQztBQUFBLGNBQUM7QUFBQSxZQUFDO0FBQUMsbUJBQU8sR0FBRyxFQUFFUixFQUFDLEdBQUVDLElBQUVDLElBQUVDLEVBQUM7QUFBQSxVQUFDO0FBQUMsbUJBQVMsR0FBR0gsSUFBRUMsSUFBRUMsSUFBRTtBQUFDLGdCQUFHLEVBQUUsT0FBTyxXQUFVO0FBQUMscUJBQU9ELEdBQUU7QUFBQSxZQUFDLE9BQUs7QUFBQyxpQkFBR0QsSUFBRSwwQkFBMEI7QUFBRSxxQkFBT0U7QUFBQSxZQUFDO0FBQUEsVUFBQztBQUFDLG1CQUFTLEdBQUdGLElBQUVDLElBQUU7QUFBQyxtQkFBTyxHQUFHRCxJQUFFLFdBQVUsTUFBS0MsRUFBQztBQUFBLFVBQUM7QUFBQyxtQkFBUyxHQUFHRCxJQUFFQyxJQUFFO0FBQUMsbUJBQU8sR0FBR0QsSUFBRSxXQUFVLE9BQU1DLEVBQUM7QUFBQSxVQUFDO0FBQUMsbUJBQVMsR0FBR0QsSUFBRTtBQUFDLG1CQUFPLEdBQUcsR0FBR0EsRUFBQyxHQUFFLEdBQUdBLEVBQUMsQ0FBQztBQUFBLFVBQUM7QUFBQyxtQkFBUyxHQUFHQyxJQUFFQyxJQUFFQyxJQUFFO0FBQUMsZ0JBQUdBLE9BQUksTUFBSztBQUFDLGtCQUFHO0FBQUMsZ0JBQUFGLEdBQUUsaUJBQWlCQyxJQUFFQyxFQUFDO0FBQUEsY0FBQyxTQUFPSCxJQUFFO0FBQUMsZ0JBQUFDLEdBQUUsaUJBQWlCQyxJQUFFLG1CQUFtQkMsRUFBQyxDQUFDO0FBQUUsZ0JBQUFGLEdBQUUsaUJBQWlCQyxLQUFFLG9CQUFtQixNQUFNO0FBQUEsY0FBQztBQUFBLFlBQUM7QUFBQSxVQUFDO0FBQUMsbUJBQVMsR0FBR0QsSUFBRTtBQUFDLGdCQUFHQSxHQUFFLGVBQWEsT0FBTyxRQUFNLGFBQVk7QUFBQyxrQkFBRztBQUFDLG9CQUFJRCxLQUFFLElBQUksSUFBSUMsR0FBRSxXQUFXO0FBQUUsdUJBQU9ELEdBQUUsV0FBU0EsR0FBRTtBQUFBLGNBQU0sU0FBT0EsSUFBRTtBQUFDLG1CQUFHLEdBQUcsRUFBRSxNQUFLLHVCQUFzQixFQUFDLEtBQUlDLEdBQUUsWUFBVyxDQUFDO0FBQUEsY0FBQztBQUFBLFlBQUM7QUFBQSxVQUFDO0FBQUMsbUJBQVMsRUFBRUQsSUFBRUMsSUFBRTtBQUFDLG1CQUFPQSxHQUFFLEtBQUtELEdBQUUsc0JBQXNCLENBQUM7QUFBQSxVQUFDO0FBQUMsbUJBQVMsR0FBR0EsSUFBRUMsSUFBRUMsSUFBRTtBQUFDLFlBQUFGLEtBQUVBLEdBQUUsWUFBWTtBQUFFLGdCQUFHRSxJQUFFO0FBQUMsa0JBQUdBLGNBQWEsV0FBUyxFQUFFQSxJQUFFLFFBQVEsR0FBRTtBQUFDLHVCQUFPLEdBQUdGLElBQUVDLElBQUUsTUFBSyxNQUFLLEVBQUMsZ0JBQWUsRUFBRUMsRUFBQyxHQUFFLGVBQWMsS0FBSSxDQUFDO0FBQUEsY0FBQyxPQUFLO0FBQUMsdUJBQU8sR0FBR0YsSUFBRUMsSUFBRSxFQUFFQyxHQUFFLE1BQU0sR0FBRUEsR0FBRSxPQUFNLEVBQUMsU0FBUUEsR0FBRSxTQUFRLFNBQVFBLEdBQUUsU0FBUSxRQUFPQSxHQUFFLFFBQU8sZ0JBQWUsRUFBRUEsR0FBRSxNQUFNLEdBQUUsY0FBYUEsR0FBRSxNQUFLLFFBQU9BLEdBQUUsUUFBTyxlQUFjLEtBQUksQ0FBQztBQUFBLGNBQUM7QUFBQSxZQUFDLE9BQUs7QUFBQyxxQkFBTyxHQUFHRixJQUFFQyxJQUFFLE1BQUssTUFBSyxFQUFDLGVBQWMsS0FBSSxDQUFDO0FBQUEsWUFBQztBQUFBLFVBQUM7QUFBQyxtQkFBUyxHQUFHRCxJQUFFO0FBQUMsZ0JBQUlDLEtBQUUsQ0FBQztBQUFFLG1CQUFNRCxJQUFFO0FBQUMsY0FBQUMsR0FBRSxLQUFLRCxFQUFDO0FBQUUsY0FBQUEsS0FBRUEsR0FBRTtBQUFBLFlBQWE7QUFBQyxtQkFBT0M7QUFBQSxVQUFDO0FBQUMsbUJBQVMsR0FBR0QsSUFBRUMsSUFBRUMsSUFBRTtBQUFDLGdCQUFJQztBQUFFLGdCQUFJQztBQUFFLGdCQUFHLE9BQU8sUUFBTSxZQUFXO0FBQUMsY0FBQUEsS0FBRSxJQUFJLElBQUlILElBQUUsU0FBUyxTQUFTLElBQUk7QUFBRSxrQkFBSUksS0FBRSxTQUFTLFNBQVM7QUFBTyxjQUFBRixLQUFFRSxPQUFJRCxHQUFFO0FBQUEsWUFBTSxPQUFLO0FBQUMsY0FBQUEsS0FBRUg7QUFBRSxjQUFBRSxLQUFFLEVBQUVGLElBQUUsU0FBUyxTQUFTLE1BQU07QUFBQSxZQUFDO0FBQUMsZ0JBQUcsRUFBRSxPQUFPLGtCQUFpQjtBQUFDLGtCQUFHLENBQUNFLElBQUU7QUFBQyx1QkFBTztBQUFBLGNBQUs7QUFBQSxZQUFDO0FBQUMsbUJBQU8sR0FBR0gsSUFBRSxvQkFBbUIsR0FBRyxFQUFDLEtBQUlJLElBQUUsVUFBU0QsR0FBQyxHQUFFRCxFQUFDLENBQUM7QUFBQSxVQUFDO0FBQUMsbUJBQVMsR0FBR0QsSUFBRUMsSUFBRUMsSUFBRUMsSUFBRUMsSUFBRUwsSUFBRTtBQUFDLGdCQUFJTSxLQUFFO0FBQUssZ0JBQUlDLEtBQUU7QUFBSyxZQUFBRixLQUFFQSxNQUFHLE9BQUtBLEtBQUUsQ0FBQztBQUFFLGdCQUFHQSxHQUFFLGlCQUFlLE9BQU8sWUFBVSxhQUFZO0FBQUMsa0JBQUlHLEtBQUUsSUFBSSxRQUFRLFNBQVNSLElBQUVDLElBQUU7QUFBQyxnQkFBQUssS0FBRU47QUFBRSxnQkFBQU8sS0FBRU47QUFBQSxjQUFDLENBQUM7QUFBQSxZQUFDO0FBQUMsZ0JBQUdFLE1BQUcsTUFBSztBQUFDLGNBQUFBLEtBQUUsR0FBRyxFQUFFO0FBQUEsWUFBSTtBQUFDLGdCQUFJVyxLQUFFVCxHQUFFLFdBQVM7QUFBRyxnQkFBSVUsS0FBRVYsR0FBRSxVQUFRO0FBQUssZ0JBQUcsQ0FBQyxHQUFHRixFQUFDLEdBQUU7QUFBQyxpQkFBR0csRUFBQztBQUFFLHFCQUFPRTtBQUFBLFlBQUM7QUFBQyxnQkFBSUMsS0FBRUosR0FBRSxrQkFBZ0IsR0FBR0YsRUFBQztBQUFFLGdCQUFHTSxNQUFHLFFBQU1BLE1BQUcsSUFBRztBQUFDLGlCQUFHTixJQUFFLG9CQUFtQixFQUFDLFFBQU8sR0FBR0EsSUFBRSxXQUFXLEVBQUMsQ0FBQztBQUFFLGlCQUFHSSxFQUFDO0FBQUUscUJBQU9DO0FBQUEsWUFBQztBQUFDLGdCQUFJRSxLQUFFLEdBQUdQLEVBQUM7QUFBRSxnQkFBSVEsS0FBRUQsR0FBRTtBQUFrQixnQkFBR0MsSUFBRTtBQUFDLGtCQUFJQyxLQUFFLEdBQUdELElBQUUsWUFBWTtBQUFFLGtCQUFHQyxNQUFHLE1BQUs7QUFBQyxnQkFBQVYsS0FBRVU7QUFBQSxjQUFDO0FBQUMsa0JBQUlDLEtBQUUsR0FBR0YsSUFBRSxZQUFZO0FBQUUsa0JBQUdFLE1BQUcsTUFBSztBQUFDLG9CQUFHQSxHQUFFLFlBQVksTUFBSSxVQUFTO0FBQUMsa0JBQUFaLEtBQUVZO0FBQUEsZ0JBQUM7QUFBQSxjQUFDO0FBQUEsWUFBQztBQUFDLGdCQUFJRyxLQUFFLEdBQUdiLElBQUUsWUFBWTtBQUFFLGdCQUFHSCxPQUFJLFFBQVU7QUFBQyxrQkFBSWlCLEtBQUUsU0FBU2pCLElBQUU7QUFBQyx1QkFBTyxHQUFHQyxJQUFFQyxJQUFFQyxJQUFFQyxJQUFFQyxJQUFFLENBQUMsQ0FBQ0wsRUFBQztBQUFBLGNBQUM7QUFBRSxrQkFBSWtCLEtBQUUsRUFBQyxRQUFPVCxJQUFFLEtBQUlOLElBQUUsTUFBS0QsSUFBRSxNQUFLRCxJQUFFLGlCQUFnQkcsSUFBRSxLQUFJQyxJQUFFLGNBQWFZLElBQUUsVUFBU0QsR0FBQztBQUFFLGtCQUFHLEdBQUdiLElBQUUsZ0JBQWVlLEVBQUMsTUFBSSxPQUFNO0FBQUMsbUJBQUdaLEVBQUM7QUFBRSx1QkFBT0U7QUFBQSxjQUFDO0FBQUEsWUFBQztBQUFDLGdCQUFJVyxLQUFFaEI7QUFBRSxnQkFBSWlCLEtBQUUsR0FBR2pCLElBQUUsU0FBUztBQUFFLGdCQUFJa0IsS0FBRTtBQUFLLGdCQUFJQyxLQUFFO0FBQU0sZ0JBQUdGLElBQUU7QUFBQyxrQkFBSUcsS0FBRUgsR0FBRSxNQUFNLEdBQUc7QUFBRSxrQkFBSUksS0FBRUQsR0FBRSxDQUFDLEVBQUUsS0FBSztBQUFFLGtCQUFHQyxPQUFJLFFBQU87QUFBQyxnQkFBQUwsS0FBRSxHQUFHaEIsSUFBRSxTQUFTO0FBQUEsY0FBQyxPQUFLO0FBQUMsZ0JBQUFnQixLQUFFLEdBQUdoQixJQUFFcUIsRUFBQztBQUFBLGNBQUM7QUFBQyxjQUFBSixNQUFHRyxHQUFFLENBQUMsS0FBRyxRQUFRLEtBQUs7QUFBRSxjQUFBYixLQUFFLEdBQUdTLEVBQUM7QUFBRSxrQkFBR0MsT0FBSSxVQUFRVixHQUFFLE9BQUtBLEdBQUUsY0FBWSxNQUFLO0FBQUMsbUJBQUdKLEVBQUM7QUFBRSx1QkFBT0U7QUFBQSxjQUFDLFdBQVNZLE9BQUksU0FBUTtBQUFDLG9CQUFHVixHQUFFLEtBQUk7QUFBQyxxQkFBR0osRUFBQztBQUFFLHlCQUFPRTtBQUFBLGdCQUFDLE9BQUs7QUFBQyxrQkFBQWMsS0FBRTtBQUFBLGdCQUFJO0FBQUEsY0FBQyxXQUFTRixPQUFJLFdBQVU7QUFBQyxtQkFBR0QsSUFBRSxZQUFZO0FBQUEsY0FBQyxXQUFTQyxHQUFFLFFBQVEsT0FBTyxNQUFJLEdBQUU7QUFBQyxvQkFBSUssS0FBRUwsR0FBRSxNQUFNLEdBQUc7QUFBRSxnQkFBQUMsTUFBR0ksR0FBRSxDQUFDLEtBQUcsUUFBUSxLQUFLO0FBQUEsY0FBQztBQUFBLFlBQUM7QUFBQyxnQkFBR2YsR0FBRSxLQUFJO0FBQUMsa0JBQUdBLEdBQUUsV0FBVTtBQUFDLG1CQUFHUyxJQUFFLFlBQVk7QUFBQSxjQUFDLE9BQUs7QUFBQyxvQkFBR0UsTUFBRyxNQUFLO0FBQUMsc0JBQUdqQixJQUFFO0FBQUMsd0JBQUlzQixLQUFFLEdBQUd0QixFQUFDO0FBQUUsd0JBQUdzQixNQUFHQSxHQUFFLGVBQWFBLEdBQUUsWUFBWSxPQUFNO0FBQUMsc0JBQUFMLEtBQUVLLEdBQUUsWUFBWTtBQUFBLG9CQUFLO0FBQUEsa0JBQUM7QUFBQyxzQkFBR0wsTUFBRyxNQUFLO0FBQUMsb0JBQUFBLEtBQUU7QUFBQSxrQkFBTTtBQUFBLGdCQUFDO0FBQUMsb0JBQUdYLEdBQUUsa0JBQWdCLE1BQUs7QUFBQyxrQkFBQUEsR0FBRSxpQkFBZSxDQUFDO0FBQUEsZ0JBQUM7QUFBQyxvQkFBR1csT0FBSSxXQUFTWCxHQUFFLGVBQWUsV0FBUyxHQUFFO0FBQUMsa0JBQUFBLEdBQUUsZUFBZSxLQUFLLFdBQVU7QUFBQyx1QkFBR1QsSUFBRUMsSUFBRUMsSUFBRUMsSUFBRUMsRUFBQztBQUFBLGtCQUFDLENBQUM7QUFBQSxnQkFBQyxXQUFTZ0IsT0FBSSxPQUFNO0FBQUMsa0JBQUFYLEdBQUUsZUFBZSxLQUFLLFdBQVU7QUFBQyx1QkFBR1QsSUFBRUMsSUFBRUMsSUFBRUMsSUFBRUMsRUFBQztBQUFBLGtCQUFDLENBQUM7QUFBQSxnQkFBQyxXQUFTZ0IsT0FBSSxRQUFPO0FBQUMsa0JBQUFYLEdBQUUsaUJBQWUsQ0FBQztBQUFFLGtCQUFBQSxHQUFFLGVBQWUsS0FBSyxXQUFVO0FBQUMsdUJBQUdULElBQUVDLElBQUVDLElBQUVDLElBQUVDLEVBQUM7QUFBQSxrQkFBQyxDQUFDO0FBQUEsZ0JBQUM7QUFBQyxtQkFBR0MsRUFBQztBQUFFLHVCQUFPRTtBQUFBLGNBQUM7QUFBQSxZQUFDO0FBQUMsZ0JBQUltQixLQUFFLElBQUk7QUFBZSxZQUFBakIsR0FBRSxNQUFJaUI7QUFBRSxZQUFBakIsR0FBRSxZQUFVWTtBQUFFLGdCQUFJTSxLQUFFLFdBQVU7QUFBQyxjQUFBbEIsR0FBRSxNQUFJO0FBQUssY0FBQUEsR0FBRSxZQUFVO0FBQU0sa0JBQUdBLEdBQUUsa0JBQWdCLFFBQU1BLEdBQUUsZUFBZSxTQUFPLEdBQUU7QUFBQyxvQkFBSVYsS0FBRVUsR0FBRSxlQUFlLE1BQU07QUFBRSxnQkFBQVYsR0FBRTtBQUFBLGNBQUM7QUFBQSxZQUFDO0FBQUUsZ0JBQUk2QixLQUFFLEdBQUcxQixJQUFFLFdBQVc7QUFBRSxnQkFBRzBCLElBQUU7QUFBQyxrQkFBSUMsS0FBRSxPQUFPRCxFQUFDO0FBQUUsa0JBQUdDLE9BQUksUUFBTSxDQUFDLEdBQUczQixJQUFFLGVBQWMsRUFBQyxRQUFPMkIsSUFBRSxRQUFPckIsR0FBQyxDQUFDLEdBQUU7QUFBQyxtQkFBR0gsRUFBQztBQUFFLGdCQUFBc0IsR0FBRTtBQUFFLHVCQUFPcEI7QUFBQSxjQUFDO0FBQUEsWUFBQztBQUFDLGdCQUFHUSxNQUFHLENBQUNoQixJQUFFO0FBQUMsa0JBQUcsQ0FBQyxRQUFRZ0IsRUFBQyxHQUFFO0FBQUMsbUJBQUdWLEVBQUM7QUFBRSxnQkFBQXNCLEdBQUU7QUFBRSx1QkFBT3BCO0FBQUEsY0FBQztBQUFBLFlBQUM7QUFBQyxnQkFBSXVCLEtBQUUsR0FBRzVCLElBQUVNLElBQUVxQixFQUFDO0FBQUUsZ0JBQUc3QixPQUFJLFNBQU8sQ0FBQyxHQUFHRSxFQUFDLEdBQUU7QUFBQyxjQUFBNEIsR0FBRSxjQUFjLElBQUU7QUFBQSxZQUFtQztBQUFDLGdCQUFHMUIsR0FBRSxTQUFRO0FBQUMsY0FBQTBCLEtBQUUsR0FBR0EsSUFBRTFCLEdBQUUsT0FBTztBQUFBLFlBQUM7QUFBQyxnQkFBSTJCLEtBQUUsR0FBRzdCLElBQUVGLEVBQUM7QUFBRSxnQkFBSWdDLEtBQUVELEdBQUU7QUFBTyxnQkFBSUUsS0FBRUYsR0FBRTtBQUFPLGdCQUFHM0IsR0FBRSxRQUFPO0FBQUMsY0FBQTZCLEtBQUUsR0FBR0EsSUFBRTdCLEdBQUUsTUFBTTtBQUFBLFlBQUM7QUFBQyxnQkFBSThCLEtBQUUsR0FBR2hDLEVBQUM7QUFBRSxnQkFBSWlDLEtBQUUsR0FBR0YsSUFBRUMsRUFBQztBQUFFLGdCQUFJRSxLQUFFLEdBQUdELElBQUVqQyxFQUFDO0FBQUUsZ0JBQUcsRUFBRSxPQUFPLHVCQUFxQkYsT0FBSSxPQUFNO0FBQUMsY0FBQW9DLEdBQUUsdUJBQXVCLElBQUUsR0FBRzVCLElBQUUsSUFBSSxLQUFHO0FBQUEsWUFBTTtBQUFDLGdCQUFHUCxNQUFHLFFBQU1BLE9BQUksSUFBRztBQUFDLGNBQUFBLEtBQUUsR0FBRyxFQUFFLFNBQVM7QUFBQSxZQUFJO0FBQUMsZ0JBQUlvQyxLQUFFLEdBQUduQyxJQUFFLFlBQVk7QUFBRSxnQkFBSW9DLEtBQUUsR0FBR3BDLEVBQUMsRUFBRTtBQUFRLGdCQUFJcUMsS0FBRSxFQUFFLE9BQU8sd0JBQXdCLFFBQVF2QyxFQUFDLEtBQUc7QUFBRSxnQkFBSXdDLEtBQUUsRUFBQyxTQUFRRixJQUFFLGNBQWFDLElBQUUsWUFBV0gsSUFBRSxzQkFBcUJELElBQUUsU0FBUUwsSUFBRSxRQUFPdEIsSUFBRSxNQUFLUixJQUFFLFFBQU9nQyxJQUFFLGlCQUFnQjVCLEdBQUUsZUFBYWlDLEdBQUUsZUFBYSxFQUFFLE9BQU8saUJBQWdCLFNBQVFqQyxHQUFFLFdBQVNpQyxHQUFFLFdBQVMsRUFBRSxPQUFPLFNBQVEsTUFBS3BDLElBQUUsaUJBQWdCRSxHQUFDO0FBQUUsZ0JBQUcsQ0FBQyxHQUFHRCxJQUFFLHNCQUFxQnNDLEVBQUMsR0FBRTtBQUFDLGlCQUFHbkMsRUFBQztBQUFFLGNBQUFzQixHQUFFO0FBQUUscUJBQU9wQjtBQUFBLFlBQUM7QUFBQyxZQUFBTixLQUFFdUMsR0FBRTtBQUFLLFlBQUF4QyxLQUFFd0MsR0FBRTtBQUFLLFlBQUFWLEtBQUVVLEdBQUU7QUFBUSxZQUFBSixLQUFFSSxHQUFFO0FBQVcsWUFBQVIsS0FBRVEsR0FBRTtBQUFPLFlBQUFELEtBQUVDLEdBQUU7QUFBYSxnQkFBR1IsTUFBR0EsR0FBRSxTQUFPLEdBQUU7QUFBQyxpQkFBRzlCLElBQUUsMEJBQXlCc0MsRUFBQztBQUFFLGlCQUFHbkMsRUFBQztBQUFFLGNBQUFzQixHQUFFO0FBQUUscUJBQU9wQjtBQUFBLFlBQUM7QUFBQyxnQkFBSWtDLEtBQUV4QyxHQUFFLE1BQU0sR0FBRztBQUFFLGdCQUFJeUMsS0FBRUQsR0FBRSxDQUFDO0FBQUUsZ0JBQUlFLEtBQUVGLEdBQUUsQ0FBQztBQUFFLGdCQUFJRyxLQUFFM0M7QUFBRSxnQkFBR3NDLElBQUU7QUFBQyxjQUFBSyxLQUFFRjtBQUFFLGtCQUFJRyxLQUFFLE9BQU8sS0FBS1QsRUFBQyxFQUFFLFdBQVM7QUFBRSxrQkFBR1MsSUFBRTtBQUFDLG9CQUFHRCxHQUFFLFFBQVEsR0FBRyxJQUFFLEdBQUU7QUFBQyxrQkFBQUEsTUFBRztBQUFBLGdCQUFHLE9BQUs7QUFBQyxrQkFBQUEsTUFBRztBQUFBLGdCQUFHO0FBQUMsZ0JBQUFBLE1BQUcsR0FBR1IsRUFBQztBQUFFLG9CQUFHTyxJQUFFO0FBQUMsa0JBQUFDLE1BQUcsTUFBSUQ7QUFBQSxnQkFBQztBQUFBLGNBQUM7QUFBQSxZQUFDO0FBQUMsZ0JBQUcsQ0FBQyxHQUFHekMsSUFBRTBDLElBQUVKLEVBQUMsR0FBRTtBQUFDLGlCQUFHdEMsSUFBRSxvQkFBbUJzQyxFQUFDO0FBQUUsaUJBQUdsQyxFQUFDO0FBQUUscUJBQU9DO0FBQUEsWUFBQztBQUFDLFlBQUFtQixHQUFFLEtBQUsxQixHQUFFLFlBQVksR0FBRTRDLElBQUUsSUFBSTtBQUFFLFlBQUFsQixHQUFFLGlCQUFpQixXQUFXO0FBQUUsWUFBQUEsR0FBRSxrQkFBZ0JjLEdBQUU7QUFBZ0IsWUFBQWQsR0FBRSxVQUFRYyxHQUFFO0FBQVEsZ0JBQUdILEdBQUUsV0FBVTtBQUFBLFlBQUMsT0FBSztBQUFDLHVCQUFRUyxNQUFLaEIsSUFBRTtBQUFDLG9CQUFHQSxHQUFFLGVBQWVnQixFQUFDLEdBQUU7QUFBQyxzQkFBSUMsS0FBRWpCLEdBQUVnQixFQUFDO0FBQUUscUJBQUdwQixJQUFFb0IsSUFBRUMsRUFBQztBQUFBLGdCQUFDO0FBQUEsY0FBQztBQUFBLFlBQUM7QUFBQyxnQkFBSUMsS0FBRSxFQUFDLEtBQUl0QixJQUFFLFFBQU9sQixJQUFFLGVBQWNnQyxJQUFFLEtBQUlwQyxJQUFFLFNBQVFrQyxJQUFFLFFBQU94QixJQUFFLFVBQVMsRUFBQyxhQUFZYixJQUFFLGtCQUFpQjJDLElBQUUsUUFBT0QsR0FBQyxFQUFDO0FBQUUsWUFBQWpCLEdBQUUsU0FBTyxXQUFVO0FBQUMsa0JBQUc7QUFBQyxvQkFBSTNCLEtBQUUsR0FBR0csRUFBQztBQUFFLGdCQUFBOEMsR0FBRSxTQUFTLGVBQWEsR0FBR3RCLEVBQUM7QUFBRSxnQkFBQWIsR0FBRVgsSUFBRThDLEVBQUM7QUFBRSxtQkFBR0MsSUFBRUMsRUFBQztBQUFFLG1CQUFHaEQsSUFBRSxxQkFBb0I4QyxFQUFDO0FBQUUsbUJBQUc5QyxJQUFFLG9CQUFtQjhDLEVBQUM7QUFBRSxvQkFBRyxDQUFDLEdBQUc5QyxFQUFDLEdBQUU7QUFBQyxzQkFBSUYsS0FBRTtBQUFLLHlCQUFNRCxHQUFFLFNBQU8sS0FBR0MsTUFBRyxNQUFLO0FBQUMsd0JBQUlDLEtBQUVGLEdBQUUsTUFBTTtBQUFFLHdCQUFHLEdBQUdFLEVBQUMsR0FBRTtBQUFDLHNCQUFBRCxLQUFFQztBQUFBLG9CQUFDO0FBQUEsa0JBQUM7QUFBQyxzQkFBR0QsSUFBRTtBQUFDLHVCQUFHQSxJQUFFLHFCQUFvQmdELEVBQUM7QUFBRSx1QkFBR2hELElBQUUsb0JBQW1CZ0QsRUFBQztBQUFBLGtCQUFDO0FBQUEsZ0JBQUM7QUFBQyxtQkFBRzNDLEVBQUM7QUFBRSxnQkFBQXNCLEdBQUU7QUFBQSxjQUFDLFNBQU81QixJQUFFO0FBQUMsbUJBQUdHLElBQUUsb0JBQW1CLEdBQUcsRUFBQyxPQUFNSCxHQUFDLEdBQUVpRCxFQUFDLENBQUM7QUFBRSxzQkFBTWpEO0FBQUEsY0FBQztBQUFBLFlBQUM7QUFBRSxZQUFBMkIsR0FBRSxVQUFRLFdBQVU7QUFBQyxpQkFBR3VCLElBQUVDLEVBQUM7QUFBRSxpQkFBR2hELElBQUUscUJBQW9COEMsRUFBQztBQUFFLGlCQUFHOUMsSUFBRSxrQkFBaUI4QyxFQUFDO0FBQUUsaUJBQUcxQyxFQUFDO0FBQUUsY0FBQXFCLEdBQUU7QUFBQSxZQUFDO0FBQUUsWUFBQUQsR0FBRSxVQUFRLFdBQVU7QUFBQyxpQkFBR3VCLElBQUVDLEVBQUM7QUFBRSxpQkFBR2hELElBQUUscUJBQW9COEMsRUFBQztBQUFFLGlCQUFHOUMsSUFBRSxrQkFBaUI4QyxFQUFDO0FBQUUsaUJBQUcxQyxFQUFDO0FBQUUsY0FBQXFCLEdBQUU7QUFBQSxZQUFDO0FBQUUsWUFBQUQsR0FBRSxZQUFVLFdBQVU7QUFBQyxpQkFBR3VCLElBQUVDLEVBQUM7QUFBRSxpQkFBR2hELElBQUUscUJBQW9COEMsRUFBQztBQUFFLGlCQUFHOUMsSUFBRSxnQkFBZThDLEVBQUM7QUFBRSxpQkFBRzFDLEVBQUM7QUFBRSxjQUFBcUIsR0FBRTtBQUFBLFlBQUM7QUFBRSxnQkFBRyxDQUFDLEdBQUd6QixJQUFFLHNCQUFxQjhDLEVBQUMsR0FBRTtBQUFDLGlCQUFHM0MsRUFBQztBQUFFLGNBQUFzQixHQUFFO0FBQUUscUJBQU9wQjtBQUFBLFlBQUM7QUFBQyxnQkFBSTBDLEtBQUUsR0FBRy9DLEVBQUM7QUFBRSxnQkFBSWdELEtBQUUsR0FBR2hELEVBQUM7QUFBRSxlQUFHLENBQUMsYUFBWSxXQUFVLFlBQVcsT0FBTyxHQUFFLFNBQVNGLElBQUU7QUFBQyxpQkFBRyxDQUFDMEIsSUFBRUEsR0FBRSxNQUFNLEdBQUUsU0FBUzNCLElBQUU7QUFBQyxnQkFBQUEsR0FBRSxpQkFBaUJDLElBQUUsU0FBU0QsSUFBRTtBQUFDLHFCQUFHRyxJQUFFLGNBQVlGLElBQUUsRUFBQyxrQkFBaUJELEdBQUUsa0JBQWlCLFFBQU9BLEdBQUUsUUFBTyxPQUFNQSxHQUFFLE1BQUssQ0FBQztBQUFBLGdCQUFDLENBQUM7QUFBQSxjQUFDLENBQUM7QUFBQSxZQUFDLENBQUM7QUFBRSxlQUFHRyxJQUFFLG1CQUFrQjhDLEVBQUM7QUFBRSxnQkFBSUcsS0FBRVosS0FBRSxPQUFLLEdBQUdiLElBQUV4QixJQUFFa0MsRUFBQztBQUFFLFlBQUFWLEdBQUUsS0FBS3lCLEVBQUM7QUFBRSxtQkFBTzVDO0FBQUEsVUFBQztBQUFDLG1CQUFTLEdBQUdSLElBQUVDLElBQUU7QUFBQyxnQkFBSUMsS0FBRUQsR0FBRTtBQUFJLGdCQUFJRSxLQUFFO0FBQUssZ0JBQUlDLEtBQUU7QUFBSyxnQkFBRyxFQUFFRixJQUFFLFdBQVcsR0FBRTtBQUFDLGNBQUFDLEtBQUVELEdBQUUsa0JBQWtCLFNBQVM7QUFBRSxjQUFBRSxLQUFFO0FBQUEsWUFBTSxXQUFTLEVBQUVGLElBQUUsZUFBZSxHQUFFO0FBQUMsY0FBQUMsS0FBRUQsR0FBRSxrQkFBa0IsYUFBYTtBQUFFLGNBQUFFLEtBQUU7QUFBQSxZQUFNLFdBQVMsRUFBRUYsSUFBRSxrQkFBa0IsR0FBRTtBQUFDLGNBQUFDLEtBQUVELEdBQUUsa0JBQWtCLGdCQUFnQjtBQUFFLGNBQUFFLEtBQUU7QUFBQSxZQUFTO0FBQUMsZ0JBQUdELElBQUU7QUFBQyxrQkFBR0EsT0FBSSxTQUFRO0FBQUMsdUJBQU0sQ0FBQztBQUFBLGNBQUMsT0FBSztBQUFDLHVCQUFNLEVBQUMsTUFBS0MsSUFBRSxNQUFLRCxHQUFDO0FBQUEsY0FBQztBQUFBLFlBQUM7QUFBQyxnQkFBSUUsS0FBRUosR0FBRSxTQUFTO0FBQWlCLGdCQUFJSyxLQUFFTCxHQUFFLFNBQVM7QUFBYSxnQkFBSU0sS0FBRSxHQUFHUCxJQUFFLGFBQWE7QUFBRSxnQkFBSVEsS0FBRSxHQUFHUixJQUFFLGdCQUFnQjtBQUFFLGdCQUFJUyxLQUFFLEdBQUdULEVBQUMsRUFBRTtBQUFRLGdCQUFJVSxLQUFFO0FBQUssZ0JBQUlDLEtBQUU7QUFBSyxnQkFBR0osSUFBRTtBQUFDLGNBQUFHLEtBQUU7QUFBTyxjQUFBQyxLQUFFSjtBQUFBLFlBQUMsV0FBU0MsSUFBRTtBQUFDLGNBQUFFLEtBQUU7QUFBVSxjQUFBQyxLQUFFSDtBQUFBLFlBQUMsV0FBU0MsSUFBRTtBQUFDLGNBQUFDLEtBQUU7QUFBTyxjQUFBQyxLQUFFTCxNQUFHRDtBQUFBLFlBQUM7QUFBQyxnQkFBR00sSUFBRTtBQUFDLGtCQUFHQSxPQUFJLFNBQVE7QUFBQyx1QkFBTSxDQUFDO0FBQUEsY0FBQztBQUFDLGtCQUFHQSxPQUFJLFFBQU87QUFBQyxnQkFBQUEsS0FBRUwsTUFBR0Q7QUFBQSxjQUFDO0FBQUMsa0JBQUdKLEdBQUUsU0FBUyxVQUFRVSxHQUFFLFFBQVEsR0FBRyxNQUFJLElBQUc7QUFBQyxnQkFBQUEsS0FBRUEsS0FBRSxNQUFJVixHQUFFLFNBQVM7QUFBQSxjQUFNO0FBQUMscUJBQU0sRUFBQyxNQUFLUyxJQUFFLE1BQUtDLEdBQUM7QUFBQSxZQUFDLE9BQUs7QUFBQyxxQkFBTSxDQUFDO0FBQUEsWUFBQztBQUFBLFVBQUM7QUFBQyxtQkFBUyxHQUFHSCxJQUFFQyxJQUFFO0FBQUMsZ0JBQUlDLEtBQUVELEdBQUU7QUFBSSxnQkFBSUUsS0FBRUYsR0FBRTtBQUFPLGdCQUFJVCxLQUFFUyxHQUFFO0FBQUksZ0JBQUlSLEtBQUVRLEdBQUU7QUFBYyxnQkFBSUcsS0FBRUgsR0FBRTtBQUFPLGdCQUFHLENBQUMsR0FBR0QsSUFBRSxxQkFBb0JDLEVBQUMsRUFBRTtBQUFPLGdCQUFHLEVBQUVDLElBQUUsY0FBYyxHQUFFO0FBQUMsaUJBQUdBLElBQUUsY0FBYUYsRUFBQztBQUFBLFlBQUM7QUFBQyxnQkFBRyxFQUFFRSxJQUFFLGVBQWUsR0FBRTtBQUFDLGlCQUFHO0FBQUUsa0JBQUlSLEtBQUVRLEdBQUUsa0JBQWtCLGFBQWE7QUFBRSxrQkFBSUc7QUFBRSxrQkFBR1gsR0FBRSxRQUFRLEdBQUcsTUFBSSxHQUFFO0FBQUMsZ0JBQUFXLEtBQUUsRUFBRVgsRUFBQztBQUFFLGdCQUFBQSxLQUFFVyxHQUFFLE1BQU07QUFBRSx1QkFBT0EsR0FBRSxNQUFNO0FBQUEsY0FBQztBQUFDLGlCQUFHLE9BQU1YLElBQUVXLEVBQUMsRUFBRSxLQUFLLFdBQVU7QUFBQyxtQkFBR1gsRUFBQztBQUFBLGNBQUMsQ0FBQztBQUFFO0FBQUEsWUFBTTtBQUFDLGdCQUFJQyxLQUFFLEVBQUVPLElBQUUsY0FBYyxLQUFHLFdBQVNBLEdBQUUsa0JBQWtCLFlBQVk7QUFBRSxnQkFBRyxFQUFFQSxJQUFFLGVBQWUsR0FBRTtBQUFDLHVCQUFTLE9BQUtBLEdBQUUsa0JBQWtCLGFBQWE7QUFBRSxjQUFBUCxNQUFHLFNBQVMsT0FBTztBQUFFO0FBQUEsWUFBTTtBQUFDLGdCQUFHQSxJQUFFO0FBQUMsdUJBQVMsT0FBTztBQUFFO0FBQUEsWUFBTTtBQUFDLGdCQUFHLEVBQUVPLElBQUUsZUFBZSxHQUFFO0FBQUMsa0JBQUdBLEdBQUUsa0JBQWtCLGFBQWEsTUFBSSxRQUFPO0FBQUMsZ0JBQUFELEdBQUUsU0FBT0Q7QUFBQSxjQUFDLE9BQUs7QUFBQyxnQkFBQUMsR0FBRSxTQUFPLEdBQUdELElBQUVFLEdBQUUsa0JBQWtCLGFBQWEsQ0FBQztBQUFBLGNBQUM7QUFBQSxZQUFDO0FBQUMsZ0JBQUlNLEtBQUUsR0FBR1IsSUFBRUMsRUFBQztBQUFFLGdCQUFJTCxLQUFFTSxHQUFFLFVBQVEsT0FBS0EsR0FBRSxTQUFPLE9BQUtBLEdBQUUsV0FBUztBQUFJLGdCQUFJUyxLQUFFVCxHQUFFO0FBQVMsZ0JBQUlMLEtBQUVLLEdBQUUsVUFBUTtBQUFJLGdCQUFJVSxLQUFFLEVBQUUsT0FBTztBQUFZLGdCQUFJZCxLQUFFLEdBQUcsRUFBQyxZQUFXRixJQUFFLGdCQUFlZSxJQUFFLFNBQVFkLElBQUUsYUFBWWUsR0FBQyxHQUFFWCxFQUFDO0FBQUUsZ0JBQUcsQ0FBQyxHQUFHRSxJQUFFLG1CQUFrQkwsRUFBQyxFQUFFO0FBQU8sWUFBQUssS0FBRUwsR0FBRTtBQUFPLFlBQUFhLEtBQUViLEdBQUU7QUFBZSxZQUFBRCxLQUFFQyxHQUFFO0FBQVEsWUFBQWMsS0FBRWQsR0FBRTtBQUFZLFlBQUFHLEdBQUUsU0FBT0U7QUFBRSxZQUFBRixHQUFFLFNBQU9KO0FBQUUsWUFBQUksR0FBRSxhQUFXLENBQUNKO0FBQUUsZ0JBQUdDLEdBQUUsWUFBVztBQUFDLGtCQUFHSSxHQUFFLFdBQVMsS0FBSTtBQUFDLG1CQUFHRixFQUFDO0FBQUEsY0FBQztBQUFDLGdCQUFFQSxJQUFFLFNBQVNSLElBQUU7QUFBQyxnQkFBQW1CLEtBQUVuQixHQUFFLGtCQUFrQm1CLElBQUVULElBQUVGLEVBQUM7QUFBQSxjQUFDLENBQUM7QUFBRSxrQkFBR1EsR0FBRSxNQUFLO0FBQUMsbUJBQUc7QUFBQSxjQUFDO0FBQUMsa0JBQUlULEtBQUVQLEdBQUU7QUFBYSxrQkFBRyxFQUFFVSxJQUFFLGFBQWEsR0FBRTtBQUFDLGdCQUFBSCxLQUFFRyxHQUFFLGtCQUFrQixXQUFXO0FBQUEsY0FBQztBQUFDLGtCQUFJRyxLQUFFLEdBQUdMLElBQUVELEVBQUM7QUFBRSxrQkFBR00sR0FBRSxlQUFlLGFBQWEsR0FBRTtBQUFDLGdCQUFBTyxLQUFFUCxHQUFFO0FBQUEsY0FBVztBQUFDLGNBQUFGLEdBQUUsVUFBVSxJQUFJLEVBQUUsT0FBTyxhQUFhO0FBQUUsa0JBQUlVLEtBQUU7QUFBSyxrQkFBSUMsS0FBRTtBQUFLLGtCQUFJSSxLQUFFLFdBQVU7QUFBQyxvQkFBRztBQUFDLHNCQUFJMUIsS0FBRSxTQUFTO0FBQWMsc0JBQUlDLEtBQUUsQ0FBQztBQUFFLHNCQUFHO0FBQUMsb0JBQUFBLEtBQUUsRUFBQyxLQUFJRCxJQUFFLE9BQU1BLEtBQUVBLEdBQUUsaUJBQWUsTUFBSyxLQUFJQSxLQUFFQSxHQUFFLGVBQWEsS0FBSTtBQUFBLGtCQUFDLFNBQU9BLElBQUU7QUFBQSxrQkFBQztBQUFDLHNCQUFJRTtBQUFFLHNCQUFHVSxJQUFFO0FBQUMsb0JBQUFWLEtBQUVVO0FBQUEsa0JBQUM7QUFBQyxzQkFBRyxFQUFFRixJQUFFLGVBQWUsR0FBRTtBQUFDLG9CQUFBUixLQUFFUSxHQUFFLGtCQUFrQixhQUFhO0FBQUEsa0JBQUM7QUFBQyxzQkFBR00sR0FBRSxNQUFLO0FBQUMsdUJBQUcsR0FBRyxFQUFFLE1BQUssNEJBQTJCLEdBQUcsRUFBQyxTQUFRQSxHQUFDLEdBQUVQLEVBQUMsQ0FBQztBQUFFLHdCQUFHTyxHQUFFLFNBQU8sUUFBTztBQUFDLHlCQUFHQSxHQUFFLElBQUk7QUFBRSx5QkFBRyxHQUFHLEVBQUUsTUFBSywwQkFBeUIsRUFBQyxNQUFLQSxHQUFFLEtBQUksQ0FBQztBQUFBLG9CQUFDLE9BQUs7QUFBQyx5QkFBR0EsR0FBRSxJQUFJO0FBQUUseUJBQUcsR0FBRyxFQUFFLE1BQUssMEJBQXlCLEVBQUMsTUFBS0EsR0FBRSxLQUFJLENBQUM7QUFBQSxvQkFBQztBQUFBLGtCQUFDO0FBQUMsc0JBQUliLEtBQUUsRUFBRVEsRUFBQztBQUFFLHFCQUFHRSxHQUFFLFdBQVVGLElBQUVILElBQUVXLElBQUVoQixJQUFFRCxFQUFDO0FBQUUsc0JBQUdELEdBQUUsT0FBSyxDQUFDLEdBQUdBLEdBQUUsR0FBRyxLQUFHLEdBQUdBLEdBQUUsS0FBSSxJQUFJLEdBQUU7QUFBQyx3QkFBSUcsS0FBRSxTQUFTLGVBQWUsR0FBR0gsR0FBRSxLQUFJLElBQUksQ0FBQztBQUFFLHdCQUFJSSxLQUFFLEVBQUMsZUFBY1EsR0FBRSxnQkFBYyxTQUFVLENBQUNBLEdBQUUsY0FBWSxDQUFDLEVBQUUsT0FBTyxtQkFBa0I7QUFBRSx3QkFBR1QsSUFBRTtBQUFDLDBCQUFHSCxHQUFFLFNBQU9HLEdBQUUsbUJBQWtCO0FBQUMsNEJBQUc7QUFBQywwQkFBQUEsR0FBRSxrQkFBa0JILEdBQUUsT0FBTUEsR0FBRSxHQUFHO0FBQUEsd0JBQUMsU0FBT0QsSUFBRTtBQUFBLHdCQUFDO0FBQUEsc0JBQUM7QUFBQyxzQkFBQUksR0FBRSxNQUFNQyxFQUFDO0FBQUEsb0JBQUM7QUFBQSxrQkFBQztBQUFDLGtCQUFBTSxHQUFFLFVBQVUsT0FBTyxFQUFFLE9BQU8sYUFBYTtBQUFFLHFCQUFHUixHQUFFLE1BQUssU0FBU0gsSUFBRTtBQUFDLHdCQUFHQSxHQUFFLFdBQVU7QUFBQyxzQkFBQUEsR0FBRSxVQUFVLElBQUksRUFBRSxPQUFPLGFBQWE7QUFBQSxvQkFBQztBQUFDLHVCQUFHQSxJQUFFLGtCQUFpQlMsRUFBQztBQUFBLGtCQUFDLENBQUM7QUFBRSxzQkFBRyxFQUFFQyxJQUFFLHlCQUF5QixHQUFFO0FBQUMsd0JBQUlKLEtBQUVFO0FBQUUsd0JBQUcsQ0FBQyxHQUFHQSxFQUFDLEdBQUU7QUFBQyxzQkFBQUYsS0FBRSxHQUFHLEVBQUU7QUFBQSxvQkFBSTtBQUFDLHVCQUFHSSxJQUFFLHlCQUF3QkosRUFBQztBQUFBLGtCQUFDO0FBQUMsc0JBQUlDLEtBQUUsV0FBVTtBQUFDLHVCQUFHSixHQUFFLE9BQU0sU0FBU0gsSUFBRTtBQUFDLHNCQUFBQSxHQUFFLEtBQUs7QUFBQSxvQkFBQyxDQUFDO0FBQUUsdUJBQUdHLEdBQUUsTUFBSyxTQUFTSCxJQUFFO0FBQUMsMEJBQUdBLEdBQUUsV0FBVTtBQUFDLHdCQUFBQSxHQUFFLFVBQVUsT0FBTyxFQUFFLE9BQU8sYUFBYTtBQUFBLHNCQUFDO0FBQUMseUJBQUdBLElBQUUsb0JBQW1CUyxFQUFDO0FBQUEsb0JBQUMsQ0FBQztBQUFFLHdCQUFHQSxHQUFFLFNBQVMsUUFBTztBQUFDLDBCQUFJVCxLQUFFLEdBQUcsRUFBRSxlQUFlUyxHQUFFLFNBQVMsTUFBTTtBQUFFLDBCQUFHVCxJQUFFO0FBQUMsd0JBQUFBLEdBQUUsZUFBZSxFQUFDLE9BQU0sU0FBUSxVQUFTLE9BQU0sQ0FBQztBQUFBLHNCQUFDO0FBQUEsb0JBQUM7QUFBQyx3QkFBR0csR0FBRSxTQUFPLENBQUNpQixJQUFFO0FBQUMsMEJBQUluQixLQUFFLEVBQUUsT0FBTztBQUFFLDBCQUFHQSxJQUFFO0FBQUMsd0JBQUFBLEdBQUUsWUFBVUUsR0FBRTtBQUFBLHNCQUFLLE9BQUs7QUFBQywrQkFBTyxTQUFTLFFBQU1BLEdBQUU7QUFBQSxzQkFBSztBQUFBLG9CQUFDO0FBQUMsdUJBQUdBLEdBQUUsTUFBS1UsRUFBQztBQUFFLHdCQUFHLEVBQUVILElBQUUsMkJBQTJCLEdBQUU7QUFBQywwQkFBSVIsS0FBRU07QUFBRSwwQkFBRyxDQUFDLEdBQUdBLEVBQUMsR0FBRTtBQUFDLHdCQUFBTixLQUFFLEdBQUcsRUFBRTtBQUFBLHNCQUFJO0FBQUMseUJBQUdRLElBQUUsMkJBQTBCUixFQUFDO0FBQUEsb0JBQUM7QUFBQyx1QkFBR21CLEVBQUM7QUFBQSxrQkFBQztBQUFFLHNCQUFHUixHQUFFLGNBQVksR0FBRTtBQUFDLCtCQUFXTixJQUFFTSxHQUFFLFdBQVc7QUFBQSxrQkFBQyxPQUFLO0FBQUMsb0JBQUFOLEdBQUU7QUFBQSxrQkFBQztBQUFBLGdCQUFDLFNBQU9QLElBQUU7QUFBQyxxQkFBR1EsSUFBRSxrQkFBaUJDLEVBQUM7QUFBRSxxQkFBR2EsRUFBQztBQUFFLHdCQUFNdEI7QUFBQSxnQkFBQztBQUFBLGNBQUM7QUFBRSxrQkFBSTJCLEtBQUUsRUFBRSxPQUFPO0FBQXNCLGtCQUFHZCxHQUFFLGVBQWUsWUFBWSxHQUFFO0FBQUMsZ0JBQUFjLEtBQUVkLEdBQUU7QUFBQSxjQUFVO0FBQUMsa0JBQUdjLE1BQUcsR0FBR25CLElBQUUseUJBQXdCQyxFQUFDLEtBQUcsT0FBTyxZQUFVLGVBQWEsU0FBUyxxQkFBb0I7QUFBQyxvQkFBSW1CLEtBQUUsSUFBSSxRQUFRLFNBQVM1QixJQUFFQyxJQUFFO0FBQUMsa0JBQUFvQixLQUFFckI7QUFBRSxrQkFBQXNCLEtBQUVyQjtBQUFBLGdCQUFDLENBQUM7QUFBRSxvQkFBSTZCLEtBQUVKO0FBQUUsZ0JBQUFBLEtBQUUsV0FBVTtBQUFDLDJCQUFTLG9CQUFvQixXQUFVO0FBQUMsb0JBQUFJLEdBQUU7QUFBRSwyQkFBT0Y7QUFBQSxrQkFBQyxDQUFDO0FBQUEsZ0JBQUM7QUFBQSxjQUFDO0FBQUMsa0JBQUdmLEdBQUUsWUFBVSxHQUFFO0FBQUMsMkJBQVdhLElBQUViLEdBQUUsU0FBUztBQUFBLGNBQUMsT0FBSztBQUFDLGdCQUFBYSxHQUFFO0FBQUEsY0FBQztBQUFBLFlBQUM7QUFBQyxnQkFBR3JCLElBQUU7QUFBQyxpQkFBR0csSUFBRSxzQkFBcUIsR0FBRyxFQUFDLE9BQU0sZ0NBQThCRSxHQUFFLFNBQU8sV0FBU0QsR0FBRSxTQUFTLFlBQVcsR0FBRUEsRUFBQyxDQUFDO0FBQUEsWUFBQztBQUFBLFVBQUM7QUFBQyxjQUFJLEtBQUcsQ0FBQztBQUFFLG1CQUFTLEtBQUk7QUFBQyxtQkFBTSxFQUFDLE1BQUssU0FBU1QsSUFBRTtBQUFDLHFCQUFPO0FBQUEsWUFBSSxHQUFFLFNBQVEsU0FBU0EsSUFBRUMsSUFBRTtBQUFDLHFCQUFPO0FBQUEsWUFBSSxHQUFFLG1CQUFrQixTQUFTRCxJQUFFQyxJQUFFQyxJQUFFO0FBQUMscUJBQU9GO0FBQUEsWUFBQyxHQUFFLGNBQWEsU0FBU0EsSUFBRTtBQUFDLHFCQUFPO0FBQUEsWUFBSyxHQUFFLFlBQVcsU0FBU0EsSUFBRUMsSUFBRUMsSUFBRUMsSUFBRTtBQUFDLHFCQUFPO0FBQUEsWUFBSyxHQUFFLGtCQUFpQixTQUFTSCxJQUFFQyxJQUFFQyxJQUFFO0FBQUMscUJBQU87QUFBQSxZQUFJLEVBQUM7QUFBQSxVQUFDO0FBQUMsbUJBQVMsR0FBR0YsSUFBRUMsSUFBRTtBQUFDLGdCQUFHQSxHQUFFLE1BQUs7QUFBQyxjQUFBQSxHQUFFLEtBQUssQ0FBQztBQUFBLFlBQUM7QUFBQyxlQUFHRCxFQUFDLElBQUUsR0FBRyxHQUFHLEdBQUVDLEVBQUM7QUFBQSxVQUFDO0FBQUMsbUJBQVMsR0FBR0QsSUFBRTtBQUFDLG1CQUFPLEdBQUdBLEVBQUM7QUFBQSxVQUFDO0FBQUMsbUJBQVMsR0FBR0EsSUFBRUUsSUFBRUMsSUFBRTtBQUFDLGdCQUFHSCxNQUFHLFFBQVU7QUFBQyxxQkFBT0U7QUFBQSxZQUFDO0FBQUMsZ0JBQUdBLE1BQUcsUUFBVTtBQUFDLGNBQUFBLEtBQUUsQ0FBQztBQUFBLFlBQUM7QUFBQyxnQkFBR0MsTUFBRyxRQUFVO0FBQUMsY0FBQUEsS0FBRSxDQUFDO0FBQUEsWUFBQztBQUFDLGdCQUFJRixLQUFFLEdBQUdELElBQUUsUUFBUTtBQUFFLGdCQUFHQyxJQUFFO0FBQUMsaUJBQUdBLEdBQUUsTUFBTSxHQUFHLEdBQUUsU0FBU0QsSUFBRTtBQUFDLGdCQUFBQSxLQUFFQSxHQUFFLFFBQVEsTUFBSyxFQUFFO0FBQUUsb0JBQUdBLEdBQUUsTUFBTSxHQUFFLENBQUMsS0FBRyxXQUFVO0FBQUMsa0JBQUFHLEdBQUUsS0FBS0gsR0FBRSxNQUFNLENBQUMsQ0FBQztBQUFFO0FBQUEsZ0JBQU07QUFBQyxvQkFBR0csR0FBRSxRQUFRSCxFQUFDLElBQUUsR0FBRTtBQUFDLHNCQUFJQyxLQUFFLEdBQUdELEVBQUM7QUFBRSxzQkFBR0MsTUFBR0MsR0FBRSxRQUFRRCxFQUFDLElBQUUsR0FBRTtBQUFDLG9CQUFBQyxHQUFFLEtBQUtELEVBQUM7QUFBQSxrQkFBQztBQUFBLGdCQUFDO0FBQUEsY0FBQyxDQUFDO0FBQUEsWUFBQztBQUFDLG1CQUFPLEdBQUcsRUFBRUQsRUFBQyxHQUFFRSxJQUFFQyxFQUFDO0FBQUEsVUFBQztBQUFDLGNBQUksS0FBRztBQUFNLGFBQUcsRUFBRSxpQkFBaUIsb0JBQW1CLFdBQVU7QUFBQyxpQkFBRztBQUFBLFVBQUksQ0FBQztBQUFFLG1CQUFTLEdBQUdILElBQUU7QUFBQyxnQkFBRyxNQUFJLEdBQUcsRUFBRSxlQUFhLFlBQVc7QUFBQyxjQUFBQSxHQUFFO0FBQUEsWUFBQyxPQUFLO0FBQUMsaUJBQUcsRUFBRSxpQkFBaUIsb0JBQW1CQSxFQUFDO0FBQUEsWUFBQztBQUFBLFVBQUM7QUFBQyxtQkFBUyxLQUFJO0FBQUMsZ0JBQUcsRUFBRSxPQUFPLDJCQUF5QixPQUFNO0FBQUMsaUJBQUcsRUFBRSxLQUFLLG1CQUFtQixhQUFZLG1DQUFpQyxFQUFFLE9BQU8saUJBQWUsdUNBQXFDLEVBQUUsT0FBTyxlQUFhLE9BQUssRUFBRSxPQUFPLGlCQUFlLDJFQUF5RSxFQUFFLE9BQU8sZUFBYSxNQUFJLEVBQUUsT0FBTyxpQkFBZSw2RUFBNkU7QUFBQSxZQUFDO0FBQUEsVUFBQztBQUFDLG1CQUFTLEtBQUk7QUFBQyxnQkFBSUEsS0FBRSxHQUFHLEVBQUUsY0FBYywwQkFBMEI7QUFBRSxnQkFBR0EsSUFBRTtBQUFDLHFCQUFPLEVBQUVBLEdBQUUsT0FBTztBQUFBLFlBQUMsT0FBSztBQUFDLHFCQUFPO0FBQUEsWUFBSTtBQUFBLFVBQUM7QUFBQyxtQkFBUyxLQUFJO0FBQUMsZ0JBQUlBLEtBQUUsR0FBRztBQUFFLGdCQUFHQSxJQUFFO0FBQUMsZ0JBQUUsU0FBTyxHQUFHLEVBQUUsUUFBT0EsRUFBQztBQUFBLFlBQUM7QUFBQSxVQUFDO0FBQUMsYUFBRyxXQUFVO0FBQUMsZUFBRztBQUFFLGVBQUc7QUFBRSxnQkFBSUEsS0FBRSxHQUFHLEVBQUU7QUFBSyxlQUFHQSxFQUFDO0FBQUUsZ0JBQUlDLEtBQUUsR0FBRyxFQUFFLGlCQUFpQixzREFBc0Q7QUFBRSxZQUFBRCxHQUFFLGlCQUFpQixjQUFhLFNBQVNBLElBQUU7QUFBQyxrQkFBSUMsS0FBRUQsR0FBRTtBQUFPLGtCQUFJRSxLQUFFLEdBQUdELEVBQUM7QUFBRSxrQkFBR0MsTUFBR0EsR0FBRSxLQUFJO0FBQUMsZ0JBQUFBLEdBQUUsSUFBSSxNQUFNO0FBQUEsY0FBQztBQUFBLFlBQUMsQ0FBQztBQUFFLGtCQUFNQSxLQUFFLE9BQU8sYUFBVyxPQUFPLFdBQVcsS0FBSyxNQUFNLElBQUU7QUFBSyxtQkFBTyxhQUFXLFNBQVNGLElBQUU7QUFBQyxrQkFBR0EsR0FBRSxTQUFPQSxHQUFFLE1BQU0sTUFBSztBQUFDLG1CQUFHO0FBQUUsbUJBQUdDLElBQUUsU0FBU0QsSUFBRTtBQUFDLHFCQUFHQSxJQUFFLGlCQUFnQixFQUFDLFVBQVMsR0FBRyxHQUFFLGNBQWEsR0FBRSxDQUFDO0FBQUEsZ0JBQUMsQ0FBQztBQUFBLGNBQUMsT0FBSztBQUFDLG9CQUFHRSxJQUFFO0FBQUMsa0JBQUFBLEdBQUVGLEVBQUM7QUFBQSxnQkFBQztBQUFBLGNBQUM7QUFBQSxZQUFDO0FBQUUsdUJBQVcsV0FBVTtBQUFDLGlCQUFHQSxJQUFFLGFBQVksQ0FBQyxDQUFDO0FBQUUsY0FBQUEsS0FBRTtBQUFBLFlBQUksR0FBRSxDQUFDO0FBQUEsVUFBQyxDQUFDO0FBQUUsaUJBQU87QUFBQSxRQUFDLEVBQUU7QUFBQSxNQUFDLENBQUM7QUFBQTtBQUFBOzs7QUNBbis5QyxvQkFBaUI7OztBQ0FWLE1BQU0sVUFBVTtBQUFBLElBQ3JCLFNBQVMsU0FBVSxNQUFNLEtBQUs7QUFDNUIsVUFBSSxTQUFTLHNCQUFzQjtBQUNqQyxZQUFJLE9BQU8sUUFBUSxjQUFjLElBQUk7QUFBQSxNQUN2QztBQUFBLElBQ0Y7QUFBQSxJQUNBLGtCQUFrQixTQUFVLEtBQUssWUFBWSxLQUFLO0FBQ2hELFVBQUksaUJBQWlCLFdBQVc7QUFDaEMsYUFBTyxLQUFLLFVBQVUsVUFBVTtBQUFBLElBQ2xDO0FBQUEsRUFDRjs7O0FEUEEsU0FBTyxPQUFPLFlBQUFxRDtBQUNkLGNBQUFBLFFBQUssZ0JBQWdCLFlBQVksT0FBTzsiLAogICJuYW1lcyI6IFsiZSIsICJ0IiwgInIiLCAibiIsICJpIiwgImEiLCAibyIsICJzIiwgImwiLCAidSIsICJmIiwgImMiLCAiaCIsICJ2IiwgIk0iLCAiWCIsICJkIiwgIkQiLCAiVSIsICJnIiwgInAiLCAibSIsICJ4IiwgIkIiLCAiRiIsICJWIiwgInkiLCAiYiIsICJ3IiwgImoiLCAiUyIsICJFIiwgIl8iLCAiQyIsICJSIiwgInoiLCAiJCIsICJUIiwgIk8iLCAiVyIsICJxIiwgIkgiLCAiRyIsICJKIiwgIkwiLCAiQSIsICJaIiwgIk4iLCAiSyIsICJJIiwgImsiLCAiUCIsICJZIiwgIkh0bXgiXQp9Cg==
