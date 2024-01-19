(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a2, b2) => {
    for (var prop in b2 || (b2 = {}))
      if (__hasOwnProp.call(b2, prop))
        __defNormalProp(a2, prop, b2[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b2)) {
        if (__propIsEnum.call(b2, prop))
          __defNormalProp(a2, prop, b2[prop]);
      }
    return a2;
  };
  var __spreadProps = (a2, b2) => __defProps(a2, __getOwnPropDescs(b2));
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

  // assets/static/js/main.js
  var import_htmx = __toESM(require_htmx_min());

  // node_modules/alpinejs/dist/module.esm.js
  var flushPending = false;
  var flushing = false;
  var queue = [];
  var lastFlushedIndex = -1;
  function scheduler(callback) {
    queueJob(callback);
  }
  function queueJob(job) {
    if (!queue.includes(job))
      queue.push(job);
    queueFlush();
  }
  function dequeueJob(job) {
    let index = queue.indexOf(job);
    if (index !== -1 && index > lastFlushedIndex)
      queue.splice(index, 1);
  }
  function queueFlush() {
    if (!flushing && !flushPending) {
      flushPending = true;
      queueMicrotask(flushJobs);
    }
  }
  function flushJobs() {
    flushPending = false;
    flushing = true;
    for (let i2 = 0; i2 < queue.length; i2++) {
      queue[i2]();
      lastFlushedIndex = i2;
    }
    queue.length = 0;
    lastFlushedIndex = -1;
    flushing = false;
  }
  var reactive;
  var effect;
  var release;
  var raw;
  var shouldSchedule = true;
  function disableEffectScheduling(callback) {
    shouldSchedule = false;
    callback();
    shouldSchedule = true;
  }
  function setReactivityEngine(engine) {
    reactive = engine.reactive;
    release = engine.release;
    effect = (callback) => engine.effect(callback, { scheduler: (task) => {
      if (shouldSchedule) {
        scheduler(task);
      } else {
        task();
      }
    } });
    raw = engine.raw;
  }
  function overrideEffect(override) {
    effect = override;
  }
  function elementBoundEffect(el) {
    let cleanup2 = () => {
    };
    let wrappedEffect = (callback) => {
      let effectReference = effect(callback);
      if (!el._x_effects) {
        el._x_effects = /* @__PURE__ */ new Set();
        el._x_runEffects = () => {
          el._x_effects.forEach((i2) => i2());
        };
      }
      el._x_effects.add(effectReference);
      cleanup2 = () => {
        if (effectReference === void 0)
          return;
        el._x_effects.delete(effectReference);
        release(effectReference);
      };
      return effectReference;
    };
    return [wrappedEffect, () => {
      cleanup2();
    }];
  }
  function dispatch(el, name, detail = {}) {
    el.dispatchEvent(
      new CustomEvent(name, {
        detail,
        bubbles: true,
        // Allows events to pass the shadow DOM barrier.
        composed: true,
        cancelable: true
      })
    );
  }
  function walk(el, callback) {
    if (typeof ShadowRoot === "function" && el instanceof ShadowRoot) {
      Array.from(el.children).forEach((el2) => walk(el2, callback));
      return;
    }
    let skip = false;
    callback(el, () => skip = true);
    if (skip)
      return;
    let node = el.firstElementChild;
    while (node) {
      walk(node, callback, false);
      node = node.nextElementSibling;
    }
  }
  function warn(message, ...args) {
    console.warn(`Alpine Warning: ${message}`, ...args);
  }
  var started = false;
  function start() {
    if (started)
      warn("Alpine has already been initialized on this page. Calling Alpine.start() more than once can cause problems.");
    started = true;
    if (!document.body)
      warn("Unable to initialize. Trying to load Alpine before `<body>` is available. Did you forget to add `defer` in Alpine's `<script>` tag?");
    dispatch(document, "alpine:init");
    dispatch(document, "alpine:initializing");
    startObservingMutations();
    onElAdded((el) => initTree(el, walk));
    onElRemoved((el) => destroyTree(el));
    onAttributesAdded((el, attrs) => {
      directives(el, attrs).forEach((handle) => handle());
    });
    let outNestedComponents = (el) => !closestRoot(el.parentElement, true);
    Array.from(document.querySelectorAll(allSelectors().join(","))).filter(outNestedComponents).forEach((el) => {
      initTree(el);
    });
    dispatch(document, "alpine:initialized");
  }
  var rootSelectorCallbacks = [];
  var initSelectorCallbacks = [];
  function rootSelectors() {
    return rootSelectorCallbacks.map((fn) => fn());
  }
  function allSelectors() {
    return rootSelectorCallbacks.concat(initSelectorCallbacks).map((fn) => fn());
  }
  function addRootSelector(selectorCallback) {
    rootSelectorCallbacks.push(selectorCallback);
  }
  function addInitSelector(selectorCallback) {
    initSelectorCallbacks.push(selectorCallback);
  }
  function closestRoot(el, includeInitSelectors = false) {
    return findClosest(el, (element) => {
      const selectors = includeInitSelectors ? allSelectors() : rootSelectors();
      if (selectors.some((selector) => element.matches(selector)))
        return true;
    });
  }
  function findClosest(el, callback) {
    if (!el)
      return;
    if (callback(el))
      return el;
    if (el._x_teleportBack)
      el = el._x_teleportBack;
    if (!el.parentElement)
      return;
    return findClosest(el.parentElement, callback);
  }
  function isRoot(el) {
    return rootSelectors().some((selector) => el.matches(selector));
  }
  var initInterceptors = [];
  function interceptInit(callback) {
    initInterceptors.push(callback);
  }
  function initTree(el, walker = walk, intercept = () => {
  }) {
    deferHandlingDirectives(() => {
      walker(el, (el2, skip) => {
        intercept(el2, skip);
        initInterceptors.forEach((i2) => i2(el2, skip));
        directives(el2, el2.attributes).forEach((handle) => handle());
        el2._x_ignore && skip();
      });
    });
  }
  function destroyTree(root) {
    walk(root, (el) => {
      cleanupAttributes(el);
      cleanupElement(el);
    });
  }
  var onAttributeAddeds = [];
  var onElRemoveds = [];
  var onElAddeds = [];
  function onElAdded(callback) {
    onElAddeds.push(callback);
  }
  function onElRemoved(el, callback) {
    if (typeof callback === "function") {
      if (!el._x_cleanups)
        el._x_cleanups = [];
      el._x_cleanups.push(callback);
    } else {
      callback = el;
      onElRemoveds.push(callback);
    }
  }
  function onAttributesAdded(callback) {
    onAttributeAddeds.push(callback);
  }
  function onAttributeRemoved(el, name, callback) {
    if (!el._x_attributeCleanups)
      el._x_attributeCleanups = {};
    if (!el._x_attributeCleanups[name])
      el._x_attributeCleanups[name] = [];
    el._x_attributeCleanups[name].push(callback);
  }
  function cleanupAttributes(el, names) {
    if (!el._x_attributeCleanups)
      return;
    Object.entries(el._x_attributeCleanups).forEach(([name, value]) => {
      if (names === void 0 || names.includes(name)) {
        value.forEach((i2) => i2());
        delete el._x_attributeCleanups[name];
      }
    });
  }
  function cleanupElement(el) {
    if (el._x_cleanups) {
      while (el._x_cleanups.length)
        el._x_cleanups.pop()();
    }
  }
  var observer = new MutationObserver(onMutate);
  var currentlyObserving = false;
  function startObservingMutations() {
    observer.observe(document, { subtree: true, childList: true, attributes: true, attributeOldValue: true });
    currentlyObserving = true;
  }
  function stopObservingMutations() {
    flushObserver();
    observer.disconnect();
    currentlyObserving = false;
  }
  var recordQueue = [];
  var willProcessRecordQueue = false;
  function flushObserver() {
    recordQueue = recordQueue.concat(observer.takeRecords());
    if (recordQueue.length && !willProcessRecordQueue) {
      willProcessRecordQueue = true;
      queueMicrotask(() => {
        processRecordQueue();
        willProcessRecordQueue = false;
      });
    }
  }
  function processRecordQueue() {
    onMutate(recordQueue);
    recordQueue.length = 0;
  }
  function mutateDom(callback) {
    if (!currentlyObserving)
      return callback();
    stopObservingMutations();
    let result = callback();
    startObservingMutations();
    return result;
  }
  var isCollecting = false;
  var deferredMutations = [];
  function deferMutations() {
    isCollecting = true;
  }
  function flushAndStopDeferringMutations() {
    isCollecting = false;
    onMutate(deferredMutations);
    deferredMutations = [];
  }
  function onMutate(mutations) {
    if (isCollecting) {
      deferredMutations = deferredMutations.concat(mutations);
      return;
    }
    let addedNodes = [];
    let removedNodes = [];
    let addedAttributes = /* @__PURE__ */ new Map();
    let removedAttributes = /* @__PURE__ */ new Map();
    for (let i2 = 0; i2 < mutations.length; i2++) {
      if (mutations[i2].target._x_ignoreMutationObserver)
        continue;
      if (mutations[i2].type === "childList") {
        mutations[i2].addedNodes.forEach((node) => node.nodeType === 1 && addedNodes.push(node));
        mutations[i2].removedNodes.forEach((node) => node.nodeType === 1 && removedNodes.push(node));
      }
      if (mutations[i2].type === "attributes") {
        let el = mutations[i2].target;
        let name = mutations[i2].attributeName;
        let oldValue = mutations[i2].oldValue;
        let add2 = () => {
          if (!addedAttributes.has(el))
            addedAttributes.set(el, []);
          addedAttributes.get(el).push({ name, value: el.getAttribute(name) });
        };
        let remove = () => {
          if (!removedAttributes.has(el))
            removedAttributes.set(el, []);
          removedAttributes.get(el).push(name);
        };
        if (el.hasAttribute(name) && oldValue === null) {
          add2();
        } else if (el.hasAttribute(name)) {
          remove();
          add2();
        } else {
          remove();
        }
      }
    }
    removedAttributes.forEach((attrs, el) => {
      cleanupAttributes(el, attrs);
    });
    addedAttributes.forEach((attrs, el) => {
      onAttributeAddeds.forEach((i2) => i2(el, attrs));
    });
    for (let node of removedNodes) {
      if (addedNodes.includes(node))
        continue;
      onElRemoveds.forEach((i2) => i2(node));
      destroyTree(node);
    }
    addedNodes.forEach((node) => {
      node._x_ignoreSelf = true;
      node._x_ignore = true;
    });
    for (let node of addedNodes) {
      if (removedNodes.includes(node))
        continue;
      if (!node.isConnected)
        continue;
      delete node._x_ignoreSelf;
      delete node._x_ignore;
      onElAddeds.forEach((i2) => i2(node));
      node._x_ignore = true;
      node._x_ignoreSelf = true;
    }
    addedNodes.forEach((node) => {
      delete node._x_ignoreSelf;
      delete node._x_ignore;
    });
    addedNodes = null;
    removedNodes = null;
    addedAttributes = null;
    removedAttributes = null;
  }
  function scope(node) {
    return mergeProxies(closestDataStack(node));
  }
  function addScopeToNode(node, data2, referenceNode) {
    node._x_dataStack = [data2, ...closestDataStack(referenceNode || node)];
    return () => {
      node._x_dataStack = node._x_dataStack.filter((i2) => i2 !== data2);
    };
  }
  function closestDataStack(node) {
    if (node._x_dataStack)
      return node._x_dataStack;
    if (typeof ShadowRoot === "function" && node instanceof ShadowRoot) {
      return closestDataStack(node.host);
    }
    if (!node.parentNode) {
      return [];
    }
    return closestDataStack(node.parentNode);
  }
  function mergeProxies(objects) {
    return new Proxy({ objects }, mergeProxyTrap);
  }
  var mergeProxyTrap = {
    ownKeys({ objects }) {
      return Array.from(
        new Set(objects.flatMap((i2) => Object.keys(i2)))
      );
    },
    has({ objects }, name) {
      if (name == Symbol.unscopables)
        return false;
      return objects.some(
        (obj) => Object.prototype.hasOwnProperty.call(obj, name)
      );
    },
    get({ objects }, name, thisProxy) {
      if (name == "toJSON")
        return collapseProxies;
      return Reflect.get(
        objects.find(
          (obj) => Object.prototype.hasOwnProperty.call(obj, name)
        ) || {},
        name,
        thisProxy
      );
    },
    set({ objects }, name, value, thisProxy) {
      const target = objects.find(
        (obj) => Object.prototype.hasOwnProperty.call(obj, name)
      ) || objects[objects.length - 1];
      const descriptor = Object.getOwnPropertyDescriptor(target, name);
      if ((descriptor == null ? void 0 : descriptor.set) && (descriptor == null ? void 0 : descriptor.get))
        return Reflect.set(target, name, value, thisProxy);
      return Reflect.set(target, name, value);
    }
  };
  function collapseProxies() {
    let keys = Reflect.ownKeys(this);
    return keys.reduce((acc, key) => {
      acc[key] = Reflect.get(this, key);
      return acc;
    }, {});
  }
  function initInterceptors2(data2) {
    let isObject2 = (val) => typeof val === "object" && !Array.isArray(val) && val !== null;
    let recurse = (obj, basePath = "") => {
      Object.entries(Object.getOwnPropertyDescriptors(obj)).forEach(([key, { value, enumerable }]) => {
        if (enumerable === false || value === void 0)
          return;
        let path = basePath === "" ? key : `${basePath}.${key}`;
        if (typeof value === "object" && value !== null && value._x_interceptor) {
          obj[key] = value.initialize(data2, path, key);
        } else {
          if (isObject2(value) && value !== obj && !(value instanceof Element)) {
            recurse(value, path);
          }
        }
      });
    };
    return recurse(data2);
  }
  function interceptor(callback, mutateObj = () => {
  }) {
    let obj = {
      initialValue: void 0,
      _x_interceptor: true,
      initialize(data2, path, key) {
        return callback(this.initialValue, () => get(data2, path), (value) => set(data2, path, value), path, key);
      }
    };
    mutateObj(obj);
    return (initialValue) => {
      if (typeof initialValue === "object" && initialValue !== null && initialValue._x_interceptor) {
        let initialize = obj.initialize.bind(obj);
        obj.initialize = (data2, path, key) => {
          let innerValue = initialValue.initialize(data2, path, key);
          obj.initialValue = innerValue;
          return initialize(data2, path, key);
        };
      } else {
        obj.initialValue = initialValue;
      }
      return obj;
    };
  }
  function get(obj, path) {
    return path.split(".").reduce((carry, segment) => carry[segment], obj);
  }
  function set(obj, path, value) {
    if (typeof path === "string")
      path = path.split(".");
    if (path.length === 1)
      obj[path[0]] = value;
    else if (path.length === 0)
      throw error;
    else {
      if (obj[path[0]])
        return set(obj[path[0]], path.slice(1), value);
      else {
        obj[path[0]] = {};
        return set(obj[path[0]], path.slice(1), value);
      }
    }
  }
  var magics = {};
  function magic(name, callback) {
    magics[name] = callback;
  }
  function injectMagics(obj, el) {
    Object.entries(magics).forEach(([name, callback]) => {
      let memoizedUtilities = null;
      function getUtilities() {
        if (memoizedUtilities) {
          return memoizedUtilities;
        } else {
          let [utilities, cleanup2] = getElementBoundUtilities(el);
          memoizedUtilities = __spreadValues({ interceptor }, utilities);
          onElRemoved(el, cleanup2);
          return memoizedUtilities;
        }
      }
      Object.defineProperty(obj, `$${name}`, {
        get() {
          return callback(el, getUtilities());
        },
        enumerable: false
      });
    });
    return obj;
  }
  function tryCatch(el, expression, callback, ...args) {
    try {
      return callback(...args);
    } catch (e2) {
      handleError(e2, el, expression);
    }
  }
  function handleError(error2, el, expression = void 0) {
    Object.assign(error2, { el, expression });
    console.warn(`Alpine Expression Error: ${error2.message}

${expression ? 'Expression: "' + expression + '"\n\n' : ""}`, el);
    setTimeout(() => {
      throw error2;
    }, 0);
  }
  var shouldAutoEvaluateFunctions = true;
  function dontAutoEvaluateFunctions(callback) {
    let cache = shouldAutoEvaluateFunctions;
    shouldAutoEvaluateFunctions = false;
    let result = callback();
    shouldAutoEvaluateFunctions = cache;
    return result;
  }
  function evaluate(el, expression, extras = {}) {
    let result;
    evaluateLater(el, expression)((value) => result = value, extras);
    return result;
  }
  function evaluateLater(...args) {
    return theEvaluatorFunction(...args);
  }
  var theEvaluatorFunction = normalEvaluator;
  function setEvaluator(newEvaluator) {
    theEvaluatorFunction = newEvaluator;
  }
  function normalEvaluator(el, expression) {
    let overriddenMagics = {};
    injectMagics(overriddenMagics, el);
    let dataStack = [overriddenMagics, ...closestDataStack(el)];
    let evaluator = typeof expression === "function" ? generateEvaluatorFromFunction(dataStack, expression) : generateEvaluatorFromString(dataStack, expression, el);
    return tryCatch.bind(null, el, expression, evaluator);
  }
  function generateEvaluatorFromFunction(dataStack, func) {
    return (receiver = () => {
    }, { scope: scope2 = {}, params = [] } = {}) => {
      let result = func.apply(mergeProxies([scope2, ...dataStack]), params);
      runIfTypeOfFunction(receiver, result);
    };
  }
  var evaluatorMemo = {};
  function generateFunctionFromString(expression, el) {
    if (evaluatorMemo[expression]) {
      return evaluatorMemo[expression];
    }
    let AsyncFunction = Object.getPrototypeOf(async function() {
    }).constructor;
    let rightSideSafeExpression = /^[\n\s]*if.*\(.*\)/.test(expression.trim()) || /^(let|const)\s/.test(expression.trim()) ? `(async()=>{ ${expression} })()` : expression;
    const safeAsyncFunction = () => {
      try {
        let func2 = new AsyncFunction(
          ["__self", "scope"],
          `with (scope) { __self.result = ${rightSideSafeExpression} }; __self.finished = true; return __self.result;`
        );
        Object.defineProperty(func2, "name", {
          value: `[Alpine] ${expression}`
        });
        return func2;
      } catch (error2) {
        handleError(error2, el, expression);
        return Promise.resolve();
      }
    };
    let func = safeAsyncFunction();
    evaluatorMemo[expression] = func;
    return func;
  }
  function generateEvaluatorFromString(dataStack, expression, el) {
    let func = generateFunctionFromString(expression, el);
    return (receiver = () => {
    }, { scope: scope2 = {}, params = [] } = {}) => {
      func.result = void 0;
      func.finished = false;
      let completeScope = mergeProxies([scope2, ...dataStack]);
      if (typeof func === "function") {
        let promise = func(func, completeScope).catch((error2) => handleError(error2, el, expression));
        if (func.finished) {
          runIfTypeOfFunction(receiver, func.result, completeScope, params, el);
          func.result = void 0;
        } else {
          promise.then((result) => {
            runIfTypeOfFunction(receiver, result, completeScope, params, el);
          }).catch((error2) => handleError(error2, el, expression)).finally(() => func.result = void 0);
        }
      }
    };
  }
  function runIfTypeOfFunction(receiver, value, scope2, params, el) {
    if (shouldAutoEvaluateFunctions && typeof value === "function") {
      let result = value.apply(scope2, params);
      if (result instanceof Promise) {
        result.then((i2) => runIfTypeOfFunction(receiver, i2, scope2, params)).catch((error2) => handleError(error2, el, value));
      } else {
        receiver(result);
      }
    } else if (typeof value === "object" && value instanceof Promise) {
      value.then((i2) => receiver(i2));
    } else {
      receiver(value);
    }
  }
  var prefixAsString = "x-";
  function prefix(subject = "") {
    return prefixAsString + subject;
  }
  function setPrefix(newPrefix) {
    prefixAsString = newPrefix;
  }
  var directiveHandlers = {};
  function directive(name, callback) {
    directiveHandlers[name] = callback;
    return {
      before(directive2) {
        if (!directiveHandlers[directive2]) {
          console.warn(
            "Cannot find directive `${directive}`. `${name}` will use the default order of execution"
          );
          return;
        }
        const pos = directiveOrder.indexOf(directive2);
        directiveOrder.splice(pos >= 0 ? pos : directiveOrder.indexOf("DEFAULT"), 0, name);
      }
    };
  }
  function directives(el, attributes, originalAttributeOverride) {
    attributes = Array.from(attributes);
    if (el._x_virtualDirectives) {
      let vAttributes = Object.entries(el._x_virtualDirectives).map(([name, value]) => ({ name, value }));
      let staticAttributes = attributesOnly(vAttributes);
      vAttributes = vAttributes.map((attribute) => {
        if (staticAttributes.find((attr) => attr.name === attribute.name)) {
          return {
            name: `x-bind:${attribute.name}`,
            value: `"${attribute.value}"`
          };
        }
        return attribute;
      });
      attributes = attributes.concat(vAttributes);
    }
    let transformedAttributeMap = {};
    let directives2 = attributes.map(toTransformedAttributes((newName, oldName) => transformedAttributeMap[newName] = oldName)).filter(outNonAlpineAttributes).map(toParsedDirectives(transformedAttributeMap, originalAttributeOverride)).sort(byPriority);
    return directives2.map((directive2) => {
      return getDirectiveHandler(el, directive2);
    });
  }
  function attributesOnly(attributes) {
    return Array.from(attributes).map(toTransformedAttributes()).filter((attr) => !outNonAlpineAttributes(attr));
  }
  var isDeferringHandlers = false;
  var directiveHandlerStacks = /* @__PURE__ */ new Map();
  var currentHandlerStackKey = Symbol();
  function deferHandlingDirectives(callback) {
    isDeferringHandlers = true;
    let key = Symbol();
    currentHandlerStackKey = key;
    directiveHandlerStacks.set(key, []);
    let flushHandlers = () => {
      while (directiveHandlerStacks.get(key).length)
        directiveHandlerStacks.get(key).shift()();
      directiveHandlerStacks.delete(key);
    };
    let stopDeferring = () => {
      isDeferringHandlers = false;
      flushHandlers();
    };
    callback(flushHandlers);
    stopDeferring();
  }
  function getElementBoundUtilities(el) {
    let cleanups = [];
    let cleanup2 = (callback) => cleanups.push(callback);
    let [effect3, cleanupEffect] = elementBoundEffect(el);
    cleanups.push(cleanupEffect);
    let utilities = {
      Alpine: alpine_default,
      effect: effect3,
      cleanup: cleanup2,
      evaluateLater: evaluateLater.bind(evaluateLater, el),
      evaluate: evaluate.bind(evaluate, el)
    };
    let doCleanup = () => cleanups.forEach((i2) => i2());
    return [utilities, doCleanup];
  }
  function getDirectiveHandler(el, directive2) {
    let noop = () => {
    };
    let handler4 = directiveHandlers[directive2.type] || noop;
    let [utilities, cleanup2] = getElementBoundUtilities(el);
    onAttributeRemoved(el, directive2.original, cleanup2);
    let fullHandler = () => {
      if (el._x_ignore || el._x_ignoreSelf)
        return;
      handler4.inline && handler4.inline(el, directive2, utilities);
      handler4 = handler4.bind(handler4, el, directive2, utilities);
      isDeferringHandlers ? directiveHandlerStacks.get(currentHandlerStackKey).push(handler4) : handler4();
    };
    fullHandler.runCleanups = cleanup2;
    return fullHandler;
  }
  var startingWith = (subject, replacement) => ({ name, value }) => {
    if (name.startsWith(subject))
      name = name.replace(subject, replacement);
    return { name, value };
  };
  var into = (i2) => i2;
  function toTransformedAttributes(callback = () => {
  }) {
    return ({ name, value }) => {
      let { name: newName, value: newValue } = attributeTransformers.reduce((carry, transform) => {
        return transform(carry);
      }, { name, value });
      if (newName !== name)
        callback(newName, name);
      return { name: newName, value: newValue };
    };
  }
  var attributeTransformers = [];
  function mapAttributes(callback) {
    attributeTransformers.push(callback);
  }
  function outNonAlpineAttributes({ name }) {
    return alpineAttributeRegex().test(name);
  }
  var alpineAttributeRegex = () => new RegExp(`^${prefixAsString}([^:^.]+)\\b`);
  function toParsedDirectives(transformedAttributeMap, originalAttributeOverride) {
    return ({ name, value }) => {
      let typeMatch = name.match(alpineAttributeRegex());
      let valueMatch = name.match(/:([a-zA-Z0-9\-_:]+)/);
      let modifiers = name.match(/\.[^.\]]+(?=[^\]]*$)/g) || [];
      let original = originalAttributeOverride || transformedAttributeMap[name] || name;
      return {
        type: typeMatch ? typeMatch[1] : null,
        value: valueMatch ? valueMatch[1] : null,
        modifiers: modifiers.map((i2) => i2.replace(".", "")),
        expression: value,
        original
      };
    };
  }
  var DEFAULT = "DEFAULT";
  var directiveOrder = [
    "ignore",
    "ref",
    "data",
    "id",
    "anchor",
    "bind",
    "init",
    "for",
    "model",
    "modelable",
    "transition",
    "show",
    "if",
    DEFAULT,
    "teleport"
  ];
  function byPriority(a2, b2) {
    let typeA = directiveOrder.indexOf(a2.type) === -1 ? DEFAULT : a2.type;
    let typeB = directiveOrder.indexOf(b2.type) === -1 ? DEFAULT : b2.type;
    return directiveOrder.indexOf(typeA) - directiveOrder.indexOf(typeB);
  }
  var tickStack = [];
  var isHolding = false;
  function nextTick(callback = () => {
  }) {
    queueMicrotask(() => {
      isHolding || setTimeout(() => {
        releaseNextTicks();
      });
    });
    return new Promise((res) => {
      tickStack.push(() => {
        callback();
        res();
      });
    });
  }
  function releaseNextTicks() {
    isHolding = false;
    while (tickStack.length)
      tickStack.shift()();
  }
  function holdNextTicks() {
    isHolding = true;
  }
  function setClasses(el, value) {
    if (Array.isArray(value)) {
      return setClassesFromString(el, value.join(" "));
    } else if (typeof value === "object" && value !== null) {
      return setClassesFromObject(el, value);
    } else if (typeof value === "function") {
      return setClasses(el, value());
    }
    return setClassesFromString(el, value);
  }
  function setClassesFromString(el, classString) {
    let split = (classString2) => classString2.split(" ").filter(Boolean);
    let missingClasses = (classString2) => classString2.split(" ").filter((i2) => !el.classList.contains(i2)).filter(Boolean);
    let addClassesAndReturnUndo = (classes) => {
      el.classList.add(...classes);
      return () => {
        el.classList.remove(...classes);
      };
    };
    classString = classString === true ? classString = "" : classString || "";
    return addClassesAndReturnUndo(missingClasses(classString));
  }
  function setClassesFromObject(el, classObject) {
    let split = (classString) => classString.split(" ").filter(Boolean);
    let forAdd = Object.entries(classObject).flatMap(([classString, bool]) => bool ? split(classString) : false).filter(Boolean);
    let forRemove = Object.entries(classObject).flatMap(([classString, bool]) => !bool ? split(classString) : false).filter(Boolean);
    let added = [];
    let removed = [];
    forRemove.forEach((i2) => {
      if (el.classList.contains(i2)) {
        el.classList.remove(i2);
        removed.push(i2);
      }
    });
    forAdd.forEach((i2) => {
      if (!el.classList.contains(i2)) {
        el.classList.add(i2);
        added.push(i2);
      }
    });
    return () => {
      removed.forEach((i2) => el.classList.add(i2));
      added.forEach((i2) => el.classList.remove(i2));
    };
  }
  function setStyles(el, value) {
    if (typeof value === "object" && value !== null) {
      return setStylesFromObject(el, value);
    }
    return setStylesFromString(el, value);
  }
  function setStylesFromObject(el, value) {
    let previousStyles = {};
    Object.entries(value).forEach(([key, value2]) => {
      previousStyles[key] = el.style[key];
      if (!key.startsWith("--")) {
        key = kebabCase(key);
      }
      el.style.setProperty(key, value2);
    });
    setTimeout(() => {
      if (el.style.length === 0) {
        el.removeAttribute("style");
      }
    });
    return () => {
      setStyles(el, previousStyles);
    };
  }
  function setStylesFromString(el, value) {
    let cache = el.getAttribute("style", value);
    el.setAttribute("style", value);
    return () => {
      el.setAttribute("style", cache || "");
    };
  }
  function kebabCase(subject) {
    return subject.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
  }
  function once(callback, fallback = () => {
  }) {
    let called = false;
    return function() {
      if (!called) {
        called = true;
        callback.apply(this, arguments);
      } else {
        fallback.apply(this, arguments);
      }
    };
  }
  directive("transition", (el, { value, modifiers, expression }, { evaluate: evaluate2 }) => {
    if (typeof expression === "function")
      expression = evaluate2(expression);
    if (expression === false)
      return;
    if (!expression || typeof expression === "boolean") {
      registerTransitionsFromHelper(el, modifiers, value);
    } else {
      registerTransitionsFromClassString(el, expression, value);
    }
  });
  function registerTransitionsFromClassString(el, classString, stage) {
    registerTransitionObject(el, setClasses, "");
    let directiveStorageMap = {
      "enter": (classes) => {
        el._x_transition.enter.during = classes;
      },
      "enter-start": (classes) => {
        el._x_transition.enter.start = classes;
      },
      "enter-end": (classes) => {
        el._x_transition.enter.end = classes;
      },
      "leave": (classes) => {
        el._x_transition.leave.during = classes;
      },
      "leave-start": (classes) => {
        el._x_transition.leave.start = classes;
      },
      "leave-end": (classes) => {
        el._x_transition.leave.end = classes;
      }
    };
    directiveStorageMap[stage](classString);
  }
  function registerTransitionsFromHelper(el, modifiers, stage) {
    registerTransitionObject(el, setStyles);
    let doesntSpecify = !modifiers.includes("in") && !modifiers.includes("out") && !stage;
    let transitioningIn = doesntSpecify || modifiers.includes("in") || ["enter"].includes(stage);
    let transitioningOut = doesntSpecify || modifiers.includes("out") || ["leave"].includes(stage);
    if (modifiers.includes("in") && !doesntSpecify) {
      modifiers = modifiers.filter((i2, index) => index < modifiers.indexOf("out"));
    }
    if (modifiers.includes("out") && !doesntSpecify) {
      modifiers = modifiers.filter((i2, index) => index > modifiers.indexOf("out"));
    }
    let wantsAll = !modifiers.includes("opacity") && !modifiers.includes("scale");
    let wantsOpacity = wantsAll || modifiers.includes("opacity");
    let wantsScale = wantsAll || modifiers.includes("scale");
    let opacityValue = wantsOpacity ? 0 : 1;
    let scaleValue = wantsScale ? modifierValue(modifiers, "scale", 95) / 100 : 1;
    let delay = modifierValue(modifiers, "delay", 0) / 1e3;
    let origin = modifierValue(modifiers, "origin", "center");
    let property = "opacity, transform";
    let durationIn = modifierValue(modifiers, "duration", 150) / 1e3;
    let durationOut = modifierValue(modifiers, "duration", 75) / 1e3;
    let easing = `cubic-bezier(0.4, 0.0, 0.2, 1)`;
    if (transitioningIn) {
      el._x_transition.enter.during = {
        transformOrigin: origin,
        transitionDelay: `${delay}s`,
        transitionProperty: property,
        transitionDuration: `${durationIn}s`,
        transitionTimingFunction: easing
      };
      el._x_transition.enter.start = {
        opacity: opacityValue,
        transform: `scale(${scaleValue})`
      };
      el._x_transition.enter.end = {
        opacity: 1,
        transform: `scale(1)`
      };
    }
    if (transitioningOut) {
      el._x_transition.leave.during = {
        transformOrigin: origin,
        transitionDelay: `${delay}s`,
        transitionProperty: property,
        transitionDuration: `${durationOut}s`,
        transitionTimingFunction: easing
      };
      el._x_transition.leave.start = {
        opacity: 1,
        transform: `scale(1)`
      };
      el._x_transition.leave.end = {
        opacity: opacityValue,
        transform: `scale(${scaleValue})`
      };
    }
  }
  function registerTransitionObject(el, setFunction, defaultValue = {}) {
    if (!el._x_transition)
      el._x_transition = {
        enter: { during: defaultValue, start: defaultValue, end: defaultValue },
        leave: { during: defaultValue, start: defaultValue, end: defaultValue },
        in(before = () => {
        }, after = () => {
        }) {
          transition(el, setFunction, {
            during: this.enter.during,
            start: this.enter.start,
            end: this.enter.end
          }, before, after);
        },
        out(before = () => {
        }, after = () => {
        }) {
          transition(el, setFunction, {
            during: this.leave.during,
            start: this.leave.start,
            end: this.leave.end
          }, before, after);
        }
      };
  }
  window.Element.prototype._x_toggleAndCascadeWithTransitions = function(el, value, show, hide) {
    const nextTick2 = document.visibilityState === "visible" ? requestAnimationFrame : setTimeout;
    let clickAwayCompatibleShow = () => nextTick2(show);
    if (value) {
      if (el._x_transition && (el._x_transition.enter || el._x_transition.leave)) {
        el._x_transition.enter && (Object.entries(el._x_transition.enter.during).length || Object.entries(el._x_transition.enter.start).length || Object.entries(el._x_transition.enter.end).length) ? el._x_transition.in(show) : clickAwayCompatibleShow();
      } else {
        el._x_transition ? el._x_transition.in(show) : clickAwayCompatibleShow();
      }
      return;
    }
    el._x_hidePromise = el._x_transition ? new Promise((resolve, reject) => {
      el._x_transition.out(() => {
      }, () => resolve(hide));
      el._x_transitioning && el._x_transitioning.beforeCancel(() => reject({ isFromCancelledTransition: true }));
    }) : Promise.resolve(hide);
    queueMicrotask(() => {
      let closest = closestHide(el);
      if (closest) {
        if (!closest._x_hideChildren)
          closest._x_hideChildren = [];
        closest._x_hideChildren.push(el);
      } else {
        nextTick2(() => {
          let hideAfterChildren = (el2) => {
            let carry = Promise.all([
              el2._x_hidePromise,
              ...(el2._x_hideChildren || []).map(hideAfterChildren)
            ]).then(([i2]) => i2());
            delete el2._x_hidePromise;
            delete el2._x_hideChildren;
            return carry;
          };
          hideAfterChildren(el).catch((e2) => {
            if (!e2.isFromCancelledTransition)
              throw e2;
          });
        });
      }
    });
  };
  function closestHide(el) {
    let parent = el.parentNode;
    if (!parent)
      return;
    return parent._x_hidePromise ? parent : closestHide(parent);
  }
  function transition(el, setFunction, { during, start: start2, end } = {}, before = () => {
  }, after = () => {
  }) {
    if (el._x_transitioning)
      el._x_transitioning.cancel();
    if (Object.keys(during).length === 0 && Object.keys(start2).length === 0 && Object.keys(end).length === 0) {
      before();
      after();
      return;
    }
    let undoStart, undoDuring, undoEnd;
    performTransition(el, {
      start() {
        undoStart = setFunction(el, start2);
      },
      during() {
        undoDuring = setFunction(el, during);
      },
      before,
      end() {
        undoStart();
        undoEnd = setFunction(el, end);
      },
      after,
      cleanup() {
        undoDuring();
        undoEnd();
      }
    });
  }
  function performTransition(el, stages) {
    let interrupted, reachedBefore, reachedEnd;
    let finish = once(() => {
      mutateDom(() => {
        interrupted = true;
        if (!reachedBefore)
          stages.before();
        if (!reachedEnd) {
          stages.end();
          releaseNextTicks();
        }
        stages.after();
        if (el.isConnected)
          stages.cleanup();
        delete el._x_transitioning;
      });
    });
    el._x_transitioning = {
      beforeCancels: [],
      beforeCancel(callback) {
        this.beforeCancels.push(callback);
      },
      cancel: once(function() {
        while (this.beforeCancels.length) {
          this.beforeCancels.shift()();
        }
        ;
        finish();
      }),
      finish
    };
    mutateDom(() => {
      stages.start();
      stages.during();
    });
    holdNextTicks();
    requestAnimationFrame(() => {
      if (interrupted)
        return;
      let duration = Number(getComputedStyle(el).transitionDuration.replace(/,.*/, "").replace("s", "")) * 1e3;
      let delay = Number(getComputedStyle(el).transitionDelay.replace(/,.*/, "").replace("s", "")) * 1e3;
      if (duration === 0)
        duration = Number(getComputedStyle(el).animationDuration.replace("s", "")) * 1e3;
      mutateDom(() => {
        stages.before();
      });
      reachedBefore = true;
      requestAnimationFrame(() => {
        if (interrupted)
          return;
        mutateDom(() => {
          stages.end();
        });
        releaseNextTicks();
        setTimeout(el._x_transitioning.finish, duration + delay);
        reachedEnd = true;
      });
    });
  }
  function modifierValue(modifiers, key, fallback) {
    if (modifiers.indexOf(key) === -1)
      return fallback;
    const rawValue = modifiers[modifiers.indexOf(key) + 1];
    if (!rawValue)
      return fallback;
    if (key === "scale") {
      if (isNaN(rawValue))
        return fallback;
    }
    if (key === "duration" || key === "delay") {
      let match = rawValue.match(/([0-9]+)ms/);
      if (match)
        return match[1];
    }
    if (key === "origin") {
      if (["top", "right", "left", "center", "bottom"].includes(modifiers[modifiers.indexOf(key) + 2])) {
        return [rawValue, modifiers[modifiers.indexOf(key) + 2]].join(" ");
      }
    }
    return rawValue;
  }
  var isCloning = false;
  function skipDuringClone(callback, fallback = () => {
  }) {
    return (...args) => isCloning ? fallback(...args) : callback(...args);
  }
  function onlyDuringClone(callback) {
    return (...args) => isCloning && callback(...args);
  }
  var interceptors = [];
  function interceptClone(callback) {
    interceptors.push(callback);
  }
  function cloneNode(from, to) {
    interceptors.forEach((i2) => i2(from, to));
    isCloning = true;
    dontRegisterReactiveSideEffects(() => {
      initTree(to, (el, callback) => {
        callback(el, () => {
        });
      });
    });
    isCloning = false;
  }
  var isCloningLegacy = false;
  function clone(oldEl, newEl) {
    if (!newEl._x_dataStack)
      newEl._x_dataStack = oldEl._x_dataStack;
    isCloning = true;
    isCloningLegacy = true;
    dontRegisterReactiveSideEffects(() => {
      cloneTree(newEl);
    });
    isCloning = false;
    isCloningLegacy = false;
  }
  function cloneTree(el) {
    let hasRunThroughFirstEl = false;
    let shallowWalker = (el2, callback) => {
      walk(el2, (el3, skip) => {
        if (hasRunThroughFirstEl && isRoot(el3))
          return skip();
        hasRunThroughFirstEl = true;
        callback(el3, skip);
      });
    };
    initTree(el, shallowWalker);
  }
  function dontRegisterReactiveSideEffects(callback) {
    let cache = effect;
    overrideEffect((callback2, el) => {
      let storedEffect = cache(callback2);
      release(storedEffect);
      return () => {
      };
    });
    callback();
    overrideEffect(cache);
  }
  function bind(el, name, value, modifiers = []) {
    if (!el._x_bindings)
      el._x_bindings = reactive({});
    el._x_bindings[name] = value;
    name = modifiers.includes("camel") ? camelCase(name) : name;
    switch (name) {
      case "value":
        bindInputValue(el, value);
        break;
      case "style":
        bindStyles(el, value);
        break;
      case "class":
        bindClasses(el, value);
        break;
      case "selected":
      case "checked":
        bindAttributeAndProperty(el, name, value);
        break;
      default:
        bindAttribute(el, name, value);
        break;
    }
  }
  function bindInputValue(el, value) {
    if (el.type === "radio") {
      if (el.attributes.value === void 0) {
        el.value = value;
      }
      if (window.fromModel) {
        if (typeof value === "boolean") {
          el.checked = safeParseBoolean(el.value) === value;
        } else {
          el.checked = checkedAttrLooseCompare(el.value, value);
        }
      }
    } else if (el.type === "checkbox") {
      if (Number.isInteger(value)) {
        el.value = value;
      } else if (!Array.isArray(value) && typeof value !== "boolean" && ![null, void 0].includes(value)) {
        el.value = String(value);
      } else {
        if (Array.isArray(value)) {
          el.checked = value.some((val) => checkedAttrLooseCompare(val, el.value));
        } else {
          el.checked = !!value;
        }
      }
    } else if (el.tagName === "SELECT") {
      updateSelect(el, value);
    } else {
      if (el.value === value)
        return;
      el.value = value === void 0 ? "" : value;
    }
  }
  function bindClasses(el, value) {
    if (el._x_undoAddedClasses)
      el._x_undoAddedClasses();
    el._x_undoAddedClasses = setClasses(el, value);
  }
  function bindStyles(el, value) {
    if (el._x_undoAddedStyles)
      el._x_undoAddedStyles();
    el._x_undoAddedStyles = setStyles(el, value);
  }
  function bindAttributeAndProperty(el, name, value) {
    bindAttribute(el, name, value);
    setPropertyIfChanged(el, name, value);
  }
  function bindAttribute(el, name, value) {
    if ([null, void 0, false].includes(value) && attributeShouldntBePreservedIfFalsy(name)) {
      el.removeAttribute(name);
    } else {
      if (isBooleanAttr(name))
        value = name;
      setIfChanged(el, name, value);
    }
  }
  function setIfChanged(el, attrName, value) {
    if (el.getAttribute(attrName) != value) {
      el.setAttribute(attrName, value);
    }
  }
  function setPropertyIfChanged(el, propName, value) {
    if (el[propName] !== value) {
      el[propName] = value;
    }
  }
  function updateSelect(el, value) {
    const arrayWrappedValue = [].concat(value).map((value2) => {
      return value2 + "";
    });
    Array.from(el.options).forEach((option) => {
      option.selected = arrayWrappedValue.includes(option.value);
    });
  }
  function camelCase(subject) {
    return subject.toLowerCase().replace(/-(\w)/g, (match, char) => char.toUpperCase());
  }
  function checkedAttrLooseCompare(valueA, valueB) {
    return valueA == valueB;
  }
  function safeParseBoolean(rawValue) {
    if ([1, "1", "true", "on", "yes", true].includes(rawValue)) {
      return true;
    }
    if ([0, "0", "false", "off", "no", false].includes(rawValue)) {
      return false;
    }
    return rawValue ? Boolean(rawValue) : null;
  }
  function isBooleanAttr(attrName) {
    const booleanAttributes = [
      "disabled",
      "checked",
      "required",
      "readonly",
      "hidden",
      "open",
      "selected",
      "autofocus",
      "itemscope",
      "multiple",
      "novalidate",
      "allowfullscreen",
      "allowpaymentrequest",
      "formnovalidate",
      "autoplay",
      "controls",
      "loop",
      "muted",
      "playsinline",
      "default",
      "ismap",
      "reversed",
      "async",
      "defer",
      "nomodule"
    ];
    return booleanAttributes.includes(attrName);
  }
  function attributeShouldntBePreservedIfFalsy(name) {
    return !["aria-pressed", "aria-checked", "aria-expanded", "aria-selected"].includes(name);
  }
  function getBinding(el, name, fallback) {
    if (el._x_bindings && el._x_bindings[name] !== void 0)
      return el._x_bindings[name];
    return getAttributeBinding(el, name, fallback);
  }
  function extractProp(el, name, fallback, extract = true) {
    if (el._x_bindings && el._x_bindings[name] !== void 0)
      return el._x_bindings[name];
    if (el._x_inlineBindings && el._x_inlineBindings[name] !== void 0) {
      let binding = el._x_inlineBindings[name];
      binding.extract = extract;
      return dontAutoEvaluateFunctions(() => {
        return evaluate(el, binding.expression);
      });
    }
    return getAttributeBinding(el, name, fallback);
  }
  function getAttributeBinding(el, name, fallback) {
    let attr = el.getAttribute(name);
    if (attr === null)
      return typeof fallback === "function" ? fallback() : fallback;
    if (attr === "")
      return true;
    if (isBooleanAttr(name)) {
      return !![name, "true"].includes(attr);
    }
    return attr;
  }
  function debounce(func, wait) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        func.apply(context, args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }
  function throttle(func, limit) {
    let inThrottle;
    return function() {
      let context = this, args = arguments;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  }
  function entangle({ get: outerGet, set: outerSet }, { get: innerGet, set: innerSet }) {
    let firstRun = true;
    let outerHash;
    let reference = effect(() => {
      const outer = outerGet();
      const inner = innerGet();
      if (firstRun) {
        innerSet(cloneIfObject(outer));
        firstRun = false;
        outerHash = JSON.stringify(outer);
      } else {
        const outerHashLatest = JSON.stringify(outer);
        if (outerHashLatest !== outerHash) {
          innerSet(cloneIfObject(outer));
          outerHash = outerHashLatest;
        } else {
          outerSet(cloneIfObject(inner));
          outerHash = JSON.stringify(inner);
        }
      }
      JSON.stringify(innerGet());
      JSON.stringify(outerGet());
    });
    return () => {
      release(reference);
    };
  }
  function cloneIfObject(value) {
    return typeof value === "object" ? JSON.parse(JSON.stringify(value)) : value;
  }
  function plugin(callback) {
    let callbacks = Array.isArray(callback) ? callback : [callback];
    callbacks.forEach((i2) => i2(alpine_default));
  }
  var stores = {};
  var isReactive = false;
  function store(name, value) {
    if (!isReactive) {
      stores = reactive(stores);
      isReactive = true;
    }
    if (value === void 0) {
      return stores[name];
    }
    stores[name] = value;
    if (typeof value === "object" && value !== null && value.hasOwnProperty("init") && typeof value.init === "function") {
      stores[name].init();
    }
    initInterceptors2(stores[name]);
  }
  function getStores() {
    return stores;
  }
  var binds = {};
  function bind2(name, bindings) {
    let getBindings = typeof bindings !== "function" ? () => bindings : bindings;
    if (name instanceof Element) {
      return applyBindingsObject(name, getBindings());
    } else {
      binds[name] = getBindings;
    }
    return () => {
    };
  }
  function injectBindingProviders(obj) {
    Object.entries(binds).forEach(([name, callback]) => {
      Object.defineProperty(obj, name, {
        get() {
          return (...args) => {
            return callback(...args);
          };
        }
      });
    });
    return obj;
  }
  function applyBindingsObject(el, obj, original) {
    let cleanupRunners = [];
    while (cleanupRunners.length)
      cleanupRunners.pop()();
    let attributes = Object.entries(obj).map(([name, value]) => ({ name, value }));
    let staticAttributes = attributesOnly(attributes);
    attributes = attributes.map((attribute) => {
      if (staticAttributes.find((attr) => attr.name === attribute.name)) {
        return {
          name: `x-bind:${attribute.name}`,
          value: `"${attribute.value}"`
        };
      }
      return attribute;
    });
    directives(el, attributes, original).map((handle) => {
      cleanupRunners.push(handle.runCleanups);
      handle();
    });
    return () => {
      while (cleanupRunners.length)
        cleanupRunners.pop()();
    };
  }
  var datas = {};
  function data(name, callback) {
    datas[name] = callback;
  }
  function injectDataProviders(obj, context) {
    Object.entries(datas).forEach(([name, callback]) => {
      Object.defineProperty(obj, name, {
        get() {
          return (...args) => {
            return callback.bind(context)(...args);
          };
        },
        enumerable: false
      });
    });
    return obj;
  }
  var Alpine = {
    get reactive() {
      return reactive;
    },
    get release() {
      return release;
    },
    get effect() {
      return effect;
    },
    get raw() {
      return raw;
    },
    version: "3.13.3",
    flushAndStopDeferringMutations,
    dontAutoEvaluateFunctions,
    disableEffectScheduling,
    startObservingMutations,
    stopObservingMutations,
    setReactivityEngine,
    onAttributeRemoved,
    onAttributesAdded,
    closestDataStack,
    skipDuringClone,
    onlyDuringClone,
    addRootSelector,
    addInitSelector,
    interceptClone,
    addScopeToNode,
    deferMutations,
    mapAttributes,
    evaluateLater,
    interceptInit,
    setEvaluator,
    mergeProxies,
    extractProp,
    findClosest,
    onElRemoved,
    closestRoot,
    destroyTree,
    interceptor,
    // INTERNAL: not public API and is subject to change without major release.
    transition,
    // INTERNAL
    setStyles,
    // INTERNAL
    mutateDom,
    directive,
    entangle,
    throttle,
    debounce,
    evaluate,
    initTree,
    nextTick,
    prefixed: prefix,
    prefix: setPrefix,
    plugin,
    magic,
    store,
    start,
    clone,
    // INTERNAL
    cloneNode,
    // INTERNAL
    bound: getBinding,
    $data: scope,
    walk,
    data,
    bind: bind2
  };
  var alpine_default = Alpine;
  function makeMap(str, expectsLowerCase) {
    const map = /* @__PURE__ */ Object.create(null);
    const list = str.split(",");
    for (let i2 = 0; i2 < list.length; i2++) {
      map[list[i2]] = true;
    }
    return expectsLowerCase ? (val) => !!map[val.toLowerCase()] : (val) => !!map[val];
  }
  var specialBooleanAttrs = `itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`;
  var isBooleanAttr2 = /* @__PURE__ */ makeMap(specialBooleanAttrs + `,async,autofocus,autoplay,controls,default,defer,disabled,hidden,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected`);
  var EMPTY_OBJ = true ? Object.freeze({}) : {};
  var EMPTY_ARR = true ? Object.freeze([]) : [];
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  var hasOwn = (val, key) => hasOwnProperty.call(val, key);
  var isArray = Array.isArray;
  var isMap = (val) => toTypeString(val) === "[object Map]";
  var isString = (val) => typeof val === "string";
  var isSymbol = (val) => typeof val === "symbol";
  var isObject = (val) => val !== null && typeof val === "object";
  var objectToString = Object.prototype.toString;
  var toTypeString = (value) => objectToString.call(value);
  var toRawType = (value) => {
    return toTypeString(value).slice(8, -1);
  };
  var isIntegerKey = (key) => isString(key) && key !== "NaN" && key[0] !== "-" && "" + parseInt(key, 10) === key;
  var cacheStringFunction = (fn) => {
    const cache = /* @__PURE__ */ Object.create(null);
    return (str) => {
      const hit = cache[str];
      return hit || (cache[str] = fn(str));
    };
  };
  var camelizeRE = /-(\w)/g;
  var camelize = cacheStringFunction((str) => {
    return str.replace(camelizeRE, (_2, c2) => c2 ? c2.toUpperCase() : "");
  });
  var hyphenateRE = /\B([A-Z])/g;
  var hyphenate = cacheStringFunction((str) => str.replace(hyphenateRE, "-$1").toLowerCase());
  var capitalize = cacheStringFunction((str) => str.charAt(0).toUpperCase() + str.slice(1));
  var toHandlerKey = cacheStringFunction((str) => str ? `on${capitalize(str)}` : ``);
  var hasChanged = (value, oldValue) => value !== oldValue && (value === value || oldValue === oldValue);
  var targetMap = /* @__PURE__ */ new WeakMap();
  var effectStack = [];
  var activeEffect;
  var ITERATE_KEY = Symbol(true ? "iterate" : "");
  var MAP_KEY_ITERATE_KEY = Symbol(true ? "Map key iterate" : "");
  function isEffect(fn) {
    return fn && fn._isEffect === true;
  }
  function effect2(fn, options = EMPTY_OBJ) {
    if (isEffect(fn)) {
      fn = fn.raw;
    }
    const effect3 = createReactiveEffect(fn, options);
    if (!options.lazy) {
      effect3();
    }
    return effect3;
  }
  function stop(effect3) {
    if (effect3.active) {
      cleanup(effect3);
      if (effect3.options.onStop) {
        effect3.options.onStop();
      }
      effect3.active = false;
    }
  }
  var uid = 0;
  function createReactiveEffect(fn, options) {
    const effect3 = function reactiveEffect() {
      if (!effect3.active) {
        return fn();
      }
      if (!effectStack.includes(effect3)) {
        cleanup(effect3);
        try {
          enableTracking();
          effectStack.push(effect3);
          activeEffect = effect3;
          return fn();
        } finally {
          effectStack.pop();
          resetTracking();
          activeEffect = effectStack[effectStack.length - 1];
        }
      }
    };
    effect3.id = uid++;
    effect3.allowRecurse = !!options.allowRecurse;
    effect3._isEffect = true;
    effect3.active = true;
    effect3.raw = fn;
    effect3.deps = [];
    effect3.options = options;
    return effect3;
  }
  function cleanup(effect3) {
    const { deps } = effect3;
    if (deps.length) {
      for (let i2 = 0; i2 < deps.length; i2++) {
        deps[i2].delete(effect3);
      }
      deps.length = 0;
    }
  }
  var shouldTrack = true;
  var trackStack = [];
  function pauseTracking() {
    trackStack.push(shouldTrack);
    shouldTrack = false;
  }
  function enableTracking() {
    trackStack.push(shouldTrack);
    shouldTrack = true;
  }
  function resetTracking() {
    const last = trackStack.pop();
    shouldTrack = last === void 0 ? true : last;
  }
  function track(target, type, key) {
    if (!shouldTrack || activeEffect === void 0) {
      return;
    }
    let depsMap = targetMap.get(target);
    if (!depsMap) {
      targetMap.set(target, depsMap = /* @__PURE__ */ new Map());
    }
    let dep = depsMap.get(key);
    if (!dep) {
      depsMap.set(key, dep = /* @__PURE__ */ new Set());
    }
    if (!dep.has(activeEffect)) {
      dep.add(activeEffect);
      activeEffect.deps.push(dep);
      if (activeEffect.options.onTrack) {
        activeEffect.options.onTrack({
          effect: activeEffect,
          target,
          type,
          key
        });
      }
    }
  }
  function trigger(target, type, key, newValue, oldValue, oldTarget) {
    const depsMap = targetMap.get(target);
    if (!depsMap) {
      return;
    }
    const effects = /* @__PURE__ */ new Set();
    const add2 = (effectsToAdd) => {
      if (effectsToAdd) {
        effectsToAdd.forEach((effect3) => {
          if (effect3 !== activeEffect || effect3.allowRecurse) {
            effects.add(effect3);
          }
        });
      }
    };
    if (type === "clear") {
      depsMap.forEach(add2);
    } else if (key === "length" && isArray(target)) {
      depsMap.forEach((dep, key2) => {
        if (key2 === "length" || key2 >= newValue) {
          add2(dep);
        }
      });
    } else {
      if (key !== void 0) {
        add2(depsMap.get(key));
      }
      switch (type) {
        case "add":
          if (!isArray(target)) {
            add2(depsMap.get(ITERATE_KEY));
            if (isMap(target)) {
              add2(depsMap.get(MAP_KEY_ITERATE_KEY));
            }
          } else if (isIntegerKey(key)) {
            add2(depsMap.get("length"));
          }
          break;
        case "delete":
          if (!isArray(target)) {
            add2(depsMap.get(ITERATE_KEY));
            if (isMap(target)) {
              add2(depsMap.get(MAP_KEY_ITERATE_KEY));
            }
          }
          break;
        case "set":
          if (isMap(target)) {
            add2(depsMap.get(ITERATE_KEY));
          }
          break;
      }
    }
    const run = (effect3) => {
      if (effect3.options.onTrigger) {
        effect3.options.onTrigger({
          effect: effect3,
          target,
          key,
          type,
          newValue,
          oldValue,
          oldTarget
        });
      }
      if (effect3.options.scheduler) {
        effect3.options.scheduler(effect3);
      } else {
        effect3();
      }
    };
    effects.forEach(run);
  }
  var isNonTrackableKeys = /* @__PURE__ */ makeMap(`__proto__,__v_isRef,__isVue`);
  var builtInSymbols = new Set(Object.getOwnPropertyNames(Symbol).map((key) => Symbol[key]).filter(isSymbol));
  var get2 = /* @__PURE__ */ createGetter();
  var readonlyGet = /* @__PURE__ */ createGetter(true);
  var arrayInstrumentations = /* @__PURE__ */ createArrayInstrumentations();
  function createArrayInstrumentations() {
    const instrumentations = {};
    ["includes", "indexOf", "lastIndexOf"].forEach((key) => {
      instrumentations[key] = function(...args) {
        const arr = toRaw(this);
        for (let i2 = 0, l2 = this.length; i2 < l2; i2++) {
          track(arr, "get", i2 + "");
        }
        const res = arr[key](...args);
        if (res === -1 || res === false) {
          return arr[key](...args.map(toRaw));
        } else {
          return res;
        }
      };
    });
    ["push", "pop", "shift", "unshift", "splice"].forEach((key) => {
      instrumentations[key] = function(...args) {
        pauseTracking();
        const res = toRaw(this)[key].apply(this, args);
        resetTracking();
        return res;
      };
    });
    return instrumentations;
  }
  function createGetter(isReadonly = false, shallow = false) {
    return function get3(target, key, receiver) {
      if (key === "__v_isReactive") {
        return !isReadonly;
      } else if (key === "__v_isReadonly") {
        return isReadonly;
      } else if (key === "__v_raw" && receiver === (isReadonly ? shallow ? shallowReadonlyMap : readonlyMap : shallow ? shallowReactiveMap : reactiveMap).get(target)) {
        return target;
      }
      const targetIsArray = isArray(target);
      if (!isReadonly && targetIsArray && hasOwn(arrayInstrumentations, key)) {
        return Reflect.get(arrayInstrumentations, key, receiver);
      }
      const res = Reflect.get(target, key, receiver);
      if (isSymbol(key) ? builtInSymbols.has(key) : isNonTrackableKeys(key)) {
        return res;
      }
      if (!isReadonly) {
        track(target, "get", key);
      }
      if (shallow) {
        return res;
      }
      if (isRef(res)) {
        const shouldUnwrap = !targetIsArray || !isIntegerKey(key);
        return shouldUnwrap ? res.value : res;
      }
      if (isObject(res)) {
        return isReadonly ? readonly(res) : reactive2(res);
      }
      return res;
    };
  }
  var set2 = /* @__PURE__ */ createSetter();
  function createSetter(shallow = false) {
    return function set3(target, key, value, receiver) {
      let oldValue = target[key];
      if (!shallow) {
        value = toRaw(value);
        oldValue = toRaw(oldValue);
        if (!isArray(target) && isRef(oldValue) && !isRef(value)) {
          oldValue.value = value;
          return true;
        }
      }
      const hadKey = isArray(target) && isIntegerKey(key) ? Number(key) < target.length : hasOwn(target, key);
      const result = Reflect.set(target, key, value, receiver);
      if (target === toRaw(receiver)) {
        if (!hadKey) {
          trigger(target, "add", key, value);
        } else if (hasChanged(value, oldValue)) {
          trigger(target, "set", key, value, oldValue);
        }
      }
      return result;
    };
  }
  function deleteProperty(target, key) {
    const hadKey = hasOwn(target, key);
    const oldValue = target[key];
    const result = Reflect.deleteProperty(target, key);
    if (result && hadKey) {
      trigger(target, "delete", key, void 0, oldValue);
    }
    return result;
  }
  function has(target, key) {
    const result = Reflect.has(target, key);
    if (!isSymbol(key) || !builtInSymbols.has(key)) {
      track(target, "has", key);
    }
    return result;
  }
  function ownKeys(target) {
    track(target, "iterate", isArray(target) ? "length" : ITERATE_KEY);
    return Reflect.ownKeys(target);
  }
  var mutableHandlers = {
    get: get2,
    set: set2,
    deleteProperty,
    has,
    ownKeys
  };
  var readonlyHandlers = {
    get: readonlyGet,
    set(target, key) {
      if (true) {
        console.warn(`Set operation on key "${String(key)}" failed: target is readonly.`, target);
      }
      return true;
    },
    deleteProperty(target, key) {
      if (true) {
        console.warn(`Delete operation on key "${String(key)}" failed: target is readonly.`, target);
      }
      return true;
    }
  };
  var toReactive = (value) => isObject(value) ? reactive2(value) : value;
  var toReadonly = (value) => isObject(value) ? readonly(value) : value;
  var toShallow = (value) => value;
  var getProto = (v2) => Reflect.getPrototypeOf(v2);
  function get$1(target, key, isReadonly = false, isShallow = false) {
    target = target[
      "__v_raw"
      /* RAW */
    ];
    const rawTarget = toRaw(target);
    const rawKey = toRaw(key);
    if (key !== rawKey) {
      !isReadonly && track(rawTarget, "get", key);
    }
    !isReadonly && track(rawTarget, "get", rawKey);
    const { has: has2 } = getProto(rawTarget);
    const wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;
    if (has2.call(rawTarget, key)) {
      return wrap(target.get(key));
    } else if (has2.call(rawTarget, rawKey)) {
      return wrap(target.get(rawKey));
    } else if (target !== rawTarget) {
      target.get(key);
    }
  }
  function has$1(key, isReadonly = false) {
    const target = this[
      "__v_raw"
      /* RAW */
    ];
    const rawTarget = toRaw(target);
    const rawKey = toRaw(key);
    if (key !== rawKey) {
      !isReadonly && track(rawTarget, "has", key);
    }
    !isReadonly && track(rawTarget, "has", rawKey);
    return key === rawKey ? target.has(key) : target.has(key) || target.has(rawKey);
  }
  function size(target, isReadonly = false) {
    target = target[
      "__v_raw"
      /* RAW */
    ];
    !isReadonly && track(toRaw(target), "iterate", ITERATE_KEY);
    return Reflect.get(target, "size", target);
  }
  function add(value) {
    value = toRaw(value);
    const target = toRaw(this);
    const proto = getProto(target);
    const hadKey = proto.has.call(target, value);
    if (!hadKey) {
      target.add(value);
      trigger(target, "add", value, value);
    }
    return this;
  }
  function set$1(key, value) {
    value = toRaw(value);
    const target = toRaw(this);
    const { has: has2, get: get3 } = getProto(target);
    let hadKey = has2.call(target, key);
    if (!hadKey) {
      key = toRaw(key);
      hadKey = has2.call(target, key);
    } else if (true) {
      checkIdentityKeys(target, has2, key);
    }
    const oldValue = get3.call(target, key);
    target.set(key, value);
    if (!hadKey) {
      trigger(target, "add", key, value);
    } else if (hasChanged(value, oldValue)) {
      trigger(target, "set", key, value, oldValue);
    }
    return this;
  }
  function deleteEntry(key) {
    const target = toRaw(this);
    const { has: has2, get: get3 } = getProto(target);
    let hadKey = has2.call(target, key);
    if (!hadKey) {
      key = toRaw(key);
      hadKey = has2.call(target, key);
    } else if (true) {
      checkIdentityKeys(target, has2, key);
    }
    const oldValue = get3 ? get3.call(target, key) : void 0;
    const result = target.delete(key);
    if (hadKey) {
      trigger(target, "delete", key, void 0, oldValue);
    }
    return result;
  }
  function clear() {
    const target = toRaw(this);
    const hadItems = target.size !== 0;
    const oldTarget = true ? isMap(target) ? new Map(target) : new Set(target) : void 0;
    const result = target.clear();
    if (hadItems) {
      trigger(target, "clear", void 0, void 0, oldTarget);
    }
    return result;
  }
  function createForEach(isReadonly, isShallow) {
    return function forEach(callback, thisArg) {
      const observed = this;
      const target = observed[
        "__v_raw"
        /* RAW */
      ];
      const rawTarget = toRaw(target);
      const wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;
      !isReadonly && track(rawTarget, "iterate", ITERATE_KEY);
      return target.forEach((value, key) => {
        return callback.call(thisArg, wrap(value), wrap(key), observed);
      });
    };
  }
  function createIterableMethod(method, isReadonly, isShallow) {
    return function(...args) {
      const target = this[
        "__v_raw"
        /* RAW */
      ];
      const rawTarget = toRaw(target);
      const targetIsMap = isMap(rawTarget);
      const isPair = method === "entries" || method === Symbol.iterator && targetIsMap;
      const isKeyOnly = method === "keys" && targetIsMap;
      const innerIterator = target[method](...args);
      const wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;
      !isReadonly && track(rawTarget, "iterate", isKeyOnly ? MAP_KEY_ITERATE_KEY : ITERATE_KEY);
      return {
        // iterator protocol
        next() {
          const { value, done } = innerIterator.next();
          return done ? { value, done } : {
            value: isPair ? [wrap(value[0]), wrap(value[1])] : wrap(value),
            done
          };
        },
        // iterable protocol
        [Symbol.iterator]() {
          return this;
        }
      };
    };
  }
  function createReadonlyMethod(type) {
    return function(...args) {
      if (true) {
        const key = args[0] ? `on key "${args[0]}" ` : ``;
        console.warn(`${capitalize(type)} operation ${key}failed: target is readonly.`, toRaw(this));
      }
      return type === "delete" ? false : this;
    };
  }
  function createInstrumentations() {
    const mutableInstrumentations2 = {
      get(key) {
        return get$1(this, key);
      },
      get size() {
        return size(this);
      },
      has: has$1,
      add,
      set: set$1,
      delete: deleteEntry,
      clear,
      forEach: createForEach(false, false)
    };
    const shallowInstrumentations2 = {
      get(key) {
        return get$1(this, key, false, true);
      },
      get size() {
        return size(this);
      },
      has: has$1,
      add,
      set: set$1,
      delete: deleteEntry,
      clear,
      forEach: createForEach(false, true)
    };
    const readonlyInstrumentations2 = {
      get(key) {
        return get$1(this, key, true);
      },
      get size() {
        return size(this, true);
      },
      has(key) {
        return has$1.call(this, key, true);
      },
      add: createReadonlyMethod(
        "add"
        /* ADD */
      ),
      set: createReadonlyMethod(
        "set"
        /* SET */
      ),
      delete: createReadonlyMethod(
        "delete"
        /* DELETE */
      ),
      clear: createReadonlyMethod(
        "clear"
        /* CLEAR */
      ),
      forEach: createForEach(true, false)
    };
    const shallowReadonlyInstrumentations2 = {
      get(key) {
        return get$1(this, key, true, true);
      },
      get size() {
        return size(this, true);
      },
      has(key) {
        return has$1.call(this, key, true);
      },
      add: createReadonlyMethod(
        "add"
        /* ADD */
      ),
      set: createReadonlyMethod(
        "set"
        /* SET */
      ),
      delete: createReadonlyMethod(
        "delete"
        /* DELETE */
      ),
      clear: createReadonlyMethod(
        "clear"
        /* CLEAR */
      ),
      forEach: createForEach(true, true)
    };
    const iteratorMethods = ["keys", "values", "entries", Symbol.iterator];
    iteratorMethods.forEach((method) => {
      mutableInstrumentations2[method] = createIterableMethod(method, false, false);
      readonlyInstrumentations2[method] = createIterableMethod(method, true, false);
      shallowInstrumentations2[method] = createIterableMethod(method, false, true);
      shallowReadonlyInstrumentations2[method] = createIterableMethod(method, true, true);
    });
    return [
      mutableInstrumentations2,
      readonlyInstrumentations2,
      shallowInstrumentations2,
      shallowReadonlyInstrumentations2
    ];
  }
  var [mutableInstrumentations, readonlyInstrumentations, shallowInstrumentations, shallowReadonlyInstrumentations] = /* @__PURE__ */ createInstrumentations();
  function createInstrumentationGetter(isReadonly, shallow) {
    const instrumentations = shallow ? isReadonly ? shallowReadonlyInstrumentations : shallowInstrumentations : isReadonly ? readonlyInstrumentations : mutableInstrumentations;
    return (target, key, receiver) => {
      if (key === "__v_isReactive") {
        return !isReadonly;
      } else if (key === "__v_isReadonly") {
        return isReadonly;
      } else if (key === "__v_raw") {
        return target;
      }
      return Reflect.get(hasOwn(instrumentations, key) && key in target ? instrumentations : target, key, receiver);
    };
  }
  var mutableCollectionHandlers = {
    get: /* @__PURE__ */ createInstrumentationGetter(false, false)
  };
  var readonlyCollectionHandlers = {
    get: /* @__PURE__ */ createInstrumentationGetter(true, false)
  };
  function checkIdentityKeys(target, has2, key) {
    const rawKey = toRaw(key);
    if (rawKey !== key && has2.call(target, rawKey)) {
      const type = toRawType(target);
      console.warn(`Reactive ${type} contains both the raw and reactive versions of the same object${type === `Map` ? ` as keys` : ``}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`);
    }
  }
  var reactiveMap = /* @__PURE__ */ new WeakMap();
  var shallowReactiveMap = /* @__PURE__ */ new WeakMap();
  var readonlyMap = /* @__PURE__ */ new WeakMap();
  var shallowReadonlyMap = /* @__PURE__ */ new WeakMap();
  function targetTypeMap(rawType) {
    switch (rawType) {
      case "Object":
      case "Array":
        return 1;
      case "Map":
      case "Set":
      case "WeakMap":
      case "WeakSet":
        return 2;
      default:
        return 0;
    }
  }
  function getTargetType(value) {
    return value[
      "__v_skip"
      /* SKIP */
    ] || !Object.isExtensible(value) ? 0 : targetTypeMap(toRawType(value));
  }
  function reactive2(target) {
    if (target && target[
      "__v_isReadonly"
      /* IS_READONLY */
    ]) {
      return target;
    }
    return createReactiveObject(target, false, mutableHandlers, mutableCollectionHandlers, reactiveMap);
  }
  function readonly(target) {
    return createReactiveObject(target, true, readonlyHandlers, readonlyCollectionHandlers, readonlyMap);
  }
  function createReactiveObject(target, isReadonly, baseHandlers, collectionHandlers, proxyMap) {
    if (!isObject(target)) {
      if (true) {
        console.warn(`value cannot be made reactive: ${String(target)}`);
      }
      return target;
    }
    if (target[
      "__v_raw"
      /* RAW */
    ] && !(isReadonly && target[
      "__v_isReactive"
      /* IS_REACTIVE */
    ])) {
      return target;
    }
    const existingProxy = proxyMap.get(target);
    if (existingProxy) {
      return existingProxy;
    }
    const targetType = getTargetType(target);
    if (targetType === 0) {
      return target;
    }
    const proxy = new Proxy(target, targetType === 2 ? collectionHandlers : baseHandlers);
    proxyMap.set(target, proxy);
    return proxy;
  }
  function toRaw(observed) {
    return observed && toRaw(observed[
      "__v_raw"
      /* RAW */
    ]) || observed;
  }
  function isRef(r2) {
    return Boolean(r2 && r2.__v_isRef === true);
  }
  magic("nextTick", () => nextTick);
  magic("dispatch", (el) => dispatch.bind(dispatch, el));
  magic("watch", (el, { evaluateLater: evaluateLater2, effect: effect3 }) => (key, callback) => {
    let evaluate2 = evaluateLater2(key);
    let firstTime = true;
    let oldValue;
    let effectReference = effect3(() => evaluate2((value) => {
      JSON.stringify(value);
      if (!firstTime) {
        queueMicrotask(() => {
          callback(value, oldValue);
          oldValue = value;
        });
      } else {
        oldValue = value;
      }
      firstTime = false;
    }));
    el._x_effects.delete(effectReference);
  });
  magic("store", getStores);
  magic("data", (el) => scope(el));
  magic("root", (el) => closestRoot(el));
  magic("refs", (el) => {
    if (el._x_refs_proxy)
      return el._x_refs_proxy;
    el._x_refs_proxy = mergeProxies(getArrayOfRefObject(el));
    return el._x_refs_proxy;
  });
  function getArrayOfRefObject(el) {
    let refObjects = [];
    let currentEl = el;
    while (currentEl) {
      if (currentEl._x_refs)
        refObjects.push(currentEl._x_refs);
      currentEl = currentEl.parentNode;
    }
    return refObjects;
  }
  var globalIdMemo = {};
  function findAndIncrementId(name) {
    if (!globalIdMemo[name])
      globalIdMemo[name] = 0;
    return ++globalIdMemo[name];
  }
  function closestIdRoot(el, name) {
    return findClosest(el, (element) => {
      if (element._x_ids && element._x_ids[name])
        return true;
    });
  }
  function setIdRoot(el, name) {
    if (!el._x_ids)
      el._x_ids = {};
    if (!el._x_ids[name])
      el._x_ids[name] = findAndIncrementId(name);
  }
  magic("id", (el) => (name, key = null) => {
    let root = closestIdRoot(el, name);
    let id = root ? root._x_ids[name] : findAndIncrementId(name);
    return key ? `${name}-${id}-${key}` : `${name}-${id}`;
  });
  magic("el", (el) => el);
  warnMissingPluginMagic("Focus", "focus", "focus");
  warnMissingPluginMagic("Persist", "persist", "persist");
  function warnMissingPluginMagic(name, magicName, slug) {
    magic(magicName, (el) => warn(`You can't use [$${magicName}] without first installing the "${name}" plugin here: https://alpinejs.dev/plugins/${slug}`, el));
  }
  directive("modelable", (el, { expression }, { effect: effect3, evaluateLater: evaluateLater2, cleanup: cleanup2 }) => {
    let func = evaluateLater2(expression);
    let innerGet = () => {
      let result;
      func((i2) => result = i2);
      return result;
    };
    let evaluateInnerSet = evaluateLater2(`${expression} = __placeholder`);
    let innerSet = (val) => evaluateInnerSet(() => {
    }, { scope: { "__placeholder": val } });
    let initialValue = innerGet();
    innerSet(initialValue);
    queueMicrotask(() => {
      if (!el._x_model)
        return;
      el._x_removeModelListeners["default"]();
      let outerGet = el._x_model.get;
      let outerSet = el._x_model.set;
      let releaseEntanglement = entangle(
        {
          get() {
            return outerGet();
          },
          set(value) {
            outerSet(value);
          }
        },
        {
          get() {
            return innerGet();
          },
          set(value) {
            innerSet(value);
          }
        }
      );
      cleanup2(releaseEntanglement);
    });
  });
  directive("teleport", (el, { modifiers, expression }, { cleanup: cleanup2 }) => {
    if (el.tagName.toLowerCase() !== "template")
      warn("x-teleport can only be used on a <template> tag", el);
    let target = getTarget(expression);
    let clone2 = el.content.cloneNode(true).firstElementChild;
    el._x_teleport = clone2;
    clone2._x_teleportBack = el;
    el.setAttribute("data-teleport-template", true);
    clone2.setAttribute("data-teleport-target", true);
    if (el._x_forwardEvents) {
      el._x_forwardEvents.forEach((eventName) => {
        clone2.addEventListener(eventName, (e2) => {
          e2.stopPropagation();
          el.dispatchEvent(new e2.constructor(e2.type, e2));
        });
      });
    }
    addScopeToNode(clone2, {}, el);
    let placeInDom = (clone3, target2, modifiers2) => {
      if (modifiers2.includes("prepend")) {
        target2.parentNode.insertBefore(clone3, target2);
      } else if (modifiers2.includes("append")) {
        target2.parentNode.insertBefore(clone3, target2.nextSibling);
      } else {
        target2.appendChild(clone3);
      }
    };
    mutateDom(() => {
      placeInDom(clone2, target, modifiers);
      initTree(clone2);
      clone2._x_ignore = true;
    });
    el._x_teleportPutBack = () => {
      let target2 = getTarget(expression);
      mutateDom(() => {
        placeInDom(el._x_teleport, target2, modifiers);
      });
    };
    cleanup2(() => clone2.remove());
  });
  var teleportContainerDuringClone = document.createElement("div");
  function getTarget(expression) {
    let target = skipDuringClone(() => {
      return document.querySelector(expression);
    }, () => {
      return teleportContainerDuringClone;
    })();
    if (!target)
      warn(`Cannot find x-teleport element for selector: "${expression}"`);
    return target;
  }
  var handler = () => {
  };
  handler.inline = (el, { modifiers }, { cleanup: cleanup2 }) => {
    modifiers.includes("self") ? el._x_ignoreSelf = true : el._x_ignore = true;
    cleanup2(() => {
      modifiers.includes("self") ? delete el._x_ignoreSelf : delete el._x_ignore;
    });
  };
  directive("ignore", handler);
  directive("effect", skipDuringClone((el, { expression }, { effect: effect3 }) => {
    effect3(evaluateLater(el, expression));
  }));
  function on(el, event, modifiers, callback) {
    let listenerTarget = el;
    let handler4 = (e2) => callback(e2);
    let options = {};
    let wrapHandler = (callback2, wrapper) => (e2) => wrapper(callback2, e2);
    if (modifiers.includes("dot"))
      event = dotSyntax(event);
    if (modifiers.includes("camel"))
      event = camelCase2(event);
    if (modifiers.includes("passive"))
      options.passive = true;
    if (modifiers.includes("capture"))
      options.capture = true;
    if (modifiers.includes("window"))
      listenerTarget = window;
    if (modifiers.includes("document"))
      listenerTarget = document;
    if (modifiers.includes("debounce")) {
      let nextModifier = modifiers[modifiers.indexOf("debounce") + 1] || "invalid-wait";
      let wait = isNumeric(nextModifier.split("ms")[0]) ? Number(nextModifier.split("ms")[0]) : 250;
      handler4 = debounce(handler4, wait);
    }
    if (modifiers.includes("throttle")) {
      let nextModifier = modifiers[modifiers.indexOf("throttle") + 1] || "invalid-wait";
      let wait = isNumeric(nextModifier.split("ms")[0]) ? Number(nextModifier.split("ms")[0]) : 250;
      handler4 = throttle(handler4, wait);
    }
    if (modifiers.includes("prevent"))
      handler4 = wrapHandler(handler4, (next, e2) => {
        e2.preventDefault();
        next(e2);
      });
    if (modifiers.includes("stop"))
      handler4 = wrapHandler(handler4, (next, e2) => {
        e2.stopPropagation();
        next(e2);
      });
    if (modifiers.includes("self"))
      handler4 = wrapHandler(handler4, (next, e2) => {
        e2.target === el && next(e2);
      });
    if (modifiers.includes("away") || modifiers.includes("outside")) {
      listenerTarget = document;
      handler4 = wrapHandler(handler4, (next, e2) => {
        if (el.contains(e2.target))
          return;
        if (e2.target.isConnected === false)
          return;
        if (el.offsetWidth < 1 && el.offsetHeight < 1)
          return;
        if (el._x_isShown === false)
          return;
        next(e2);
      });
    }
    if (modifiers.includes("once")) {
      handler4 = wrapHandler(handler4, (next, e2) => {
        next(e2);
        listenerTarget.removeEventListener(event, handler4, options);
      });
    }
    handler4 = wrapHandler(handler4, (next, e2) => {
      if (isKeyEvent(event)) {
        if (isListeningForASpecificKeyThatHasntBeenPressed(e2, modifiers)) {
          return;
        }
      }
      next(e2);
    });
    listenerTarget.addEventListener(event, handler4, options);
    return () => {
      listenerTarget.removeEventListener(event, handler4, options);
    };
  }
  function dotSyntax(subject) {
    return subject.replace(/-/g, ".");
  }
  function camelCase2(subject) {
    return subject.toLowerCase().replace(/-(\w)/g, (match, char) => char.toUpperCase());
  }
  function isNumeric(subject) {
    return !Array.isArray(subject) && !isNaN(subject);
  }
  function kebabCase2(subject) {
    if ([" ", "_"].includes(
      subject
    ))
      return subject;
    return subject.replace(/([a-z])([A-Z])/g, "$1-$2").replace(/[_\s]/, "-").toLowerCase();
  }
  function isKeyEvent(event) {
    return ["keydown", "keyup"].includes(event);
  }
  function isListeningForASpecificKeyThatHasntBeenPressed(e2, modifiers) {
    let keyModifiers = modifiers.filter((i2) => {
      return !["window", "document", "prevent", "stop", "once", "capture"].includes(i2);
    });
    if (keyModifiers.includes("debounce")) {
      let debounceIndex = keyModifiers.indexOf("debounce");
      keyModifiers.splice(debounceIndex, isNumeric((keyModifiers[debounceIndex + 1] || "invalid-wait").split("ms")[0]) ? 2 : 1);
    }
    if (keyModifiers.includes("throttle")) {
      let debounceIndex = keyModifiers.indexOf("throttle");
      keyModifiers.splice(debounceIndex, isNumeric((keyModifiers[debounceIndex + 1] || "invalid-wait").split("ms")[0]) ? 2 : 1);
    }
    if (keyModifiers.length === 0)
      return false;
    if (keyModifiers.length === 1 && keyToModifiers(e2.key).includes(keyModifiers[0]))
      return false;
    const systemKeyModifiers = ["ctrl", "shift", "alt", "meta", "cmd", "super"];
    const selectedSystemKeyModifiers = systemKeyModifiers.filter((modifier) => keyModifiers.includes(modifier));
    keyModifiers = keyModifiers.filter((i2) => !selectedSystemKeyModifiers.includes(i2));
    if (selectedSystemKeyModifiers.length > 0) {
      const activelyPressedKeyModifiers = selectedSystemKeyModifiers.filter((modifier) => {
        if (modifier === "cmd" || modifier === "super")
          modifier = "meta";
        return e2[`${modifier}Key`];
      });
      if (activelyPressedKeyModifiers.length === selectedSystemKeyModifiers.length) {
        if (keyToModifiers(e2.key).includes(keyModifiers[0]))
          return false;
      }
    }
    return true;
  }
  function keyToModifiers(key) {
    if (!key)
      return [];
    key = kebabCase2(key);
    let modifierToKeyMap = {
      "ctrl": "control",
      "slash": "/",
      "space": " ",
      "spacebar": " ",
      "cmd": "meta",
      "esc": "escape",
      "up": "arrow-up",
      "down": "arrow-down",
      "left": "arrow-left",
      "right": "arrow-right",
      "period": ".",
      "equal": "=",
      "minus": "-",
      "underscore": "_"
    };
    modifierToKeyMap[key] = key;
    return Object.keys(modifierToKeyMap).map((modifier) => {
      if (modifierToKeyMap[modifier] === key)
        return modifier;
    }).filter((modifier) => modifier);
  }
  directive("model", (el, { modifiers, expression }, { effect: effect3, cleanup: cleanup2 }) => {
    let scopeTarget = el;
    if (modifiers.includes("parent")) {
      scopeTarget = el.parentNode;
    }
    let evaluateGet = evaluateLater(scopeTarget, expression);
    let evaluateSet;
    if (typeof expression === "string") {
      evaluateSet = evaluateLater(scopeTarget, `${expression} = __placeholder`);
    } else if (typeof expression === "function" && typeof expression() === "string") {
      evaluateSet = evaluateLater(scopeTarget, `${expression()} = __placeholder`);
    } else {
      evaluateSet = () => {
      };
    }
    let getValue = () => {
      let result;
      evaluateGet((value) => result = value);
      return isGetterSetter(result) ? result.get() : result;
    };
    let setValue = (value) => {
      let result;
      evaluateGet((value2) => result = value2);
      if (isGetterSetter(result)) {
        result.set(value);
      } else {
        evaluateSet(() => {
        }, {
          scope: { "__placeholder": value }
        });
      }
    };
    if (typeof expression === "string" && el.type === "radio") {
      mutateDom(() => {
        if (!el.hasAttribute("name"))
          el.setAttribute("name", expression);
      });
    }
    var event = el.tagName.toLowerCase() === "select" || ["checkbox", "radio"].includes(el.type) || modifiers.includes("lazy") ? "change" : "input";
    let removeListener = isCloning ? () => {
    } : on(el, event, modifiers, (e2) => {
      setValue(getInputValue(el, modifiers, e2, getValue()));
    });
    if (modifiers.includes("fill")) {
      if ([null, ""].includes(getValue()) || el.type === "checkbox" && Array.isArray(getValue())) {
        el.dispatchEvent(new Event(event, {}));
      }
    }
    if (!el._x_removeModelListeners)
      el._x_removeModelListeners = {};
    el._x_removeModelListeners["default"] = removeListener;
    cleanup2(() => el._x_removeModelListeners["default"]());
    if (el.form) {
      let removeResetListener = on(el.form, "reset", [], (e2) => {
        nextTick(() => el._x_model && el._x_model.set(el.value));
      });
      cleanup2(() => removeResetListener());
    }
    el._x_model = {
      get() {
        return getValue();
      },
      set(value) {
        setValue(value);
      }
    };
    el._x_forceModelUpdate = (value) => {
      if (value === void 0 && typeof expression === "string" && expression.match(/\./))
        value = "";
      window.fromModel = true;
      mutateDom(() => bind(el, "value", value));
      delete window.fromModel;
    };
    effect3(() => {
      let value = getValue();
      if (modifiers.includes("unintrusive") && document.activeElement.isSameNode(el))
        return;
      el._x_forceModelUpdate(value);
    });
  });
  function getInputValue(el, modifiers, event, currentValue) {
    return mutateDom(() => {
      if (event instanceof CustomEvent && event.detail !== void 0)
        return event.detail !== null && event.detail !== void 0 ? event.detail : event.target.value;
      else if (el.type === "checkbox") {
        if (Array.isArray(currentValue)) {
          let newValue = null;
          if (modifiers.includes("number")) {
            newValue = safeParseNumber(event.target.value);
          } else if (modifiers.includes("boolean")) {
            newValue = safeParseBoolean(event.target.value);
          } else {
            newValue = event.target.value;
          }
          return event.target.checked ? currentValue.concat([newValue]) : currentValue.filter((el2) => !checkedAttrLooseCompare2(el2, newValue));
        } else {
          return event.target.checked;
        }
      } else if (el.tagName.toLowerCase() === "select" && el.multiple) {
        if (modifiers.includes("number")) {
          return Array.from(event.target.selectedOptions).map((option) => {
            let rawValue = option.value || option.text;
            return safeParseNumber(rawValue);
          });
        } else if (modifiers.includes("boolean")) {
          return Array.from(event.target.selectedOptions).map((option) => {
            let rawValue = option.value || option.text;
            return safeParseBoolean(rawValue);
          });
        }
        return Array.from(event.target.selectedOptions).map((option) => {
          return option.value || option.text;
        });
      } else {
        if (modifiers.includes("number")) {
          return safeParseNumber(event.target.value);
        } else if (modifiers.includes("boolean")) {
          return safeParseBoolean(event.target.value);
        }
        return modifiers.includes("trim") ? event.target.value.trim() : event.target.value;
      }
    });
  }
  function safeParseNumber(rawValue) {
    let number = rawValue ? parseFloat(rawValue) : null;
    return isNumeric2(number) ? number : rawValue;
  }
  function checkedAttrLooseCompare2(valueA, valueB) {
    return valueA == valueB;
  }
  function isNumeric2(subject) {
    return !Array.isArray(subject) && !isNaN(subject);
  }
  function isGetterSetter(value) {
    return value !== null && typeof value === "object" && typeof value.get === "function" && typeof value.set === "function";
  }
  directive("cloak", (el) => queueMicrotask(() => mutateDom(() => el.removeAttribute(prefix("cloak")))));
  addInitSelector(() => `[${prefix("init")}]`);
  directive("init", skipDuringClone((el, { expression }, { evaluate: evaluate2 }) => {
    if (typeof expression === "string") {
      return !!expression.trim() && evaluate2(expression, {}, false);
    }
    return evaluate2(expression, {}, false);
  }));
  directive("text", (el, { expression }, { effect: effect3, evaluateLater: evaluateLater2 }) => {
    let evaluate2 = evaluateLater2(expression);
    effect3(() => {
      evaluate2((value) => {
        mutateDom(() => {
          el.textContent = value;
        });
      });
    });
  });
  directive("html", (el, { expression }, { effect: effect3, evaluateLater: evaluateLater2 }) => {
    let evaluate2 = evaluateLater2(expression);
    effect3(() => {
      evaluate2((value) => {
        mutateDom(() => {
          el.innerHTML = value;
          el._x_ignoreSelf = true;
          initTree(el);
          delete el._x_ignoreSelf;
        });
      });
    });
  });
  mapAttributes(startingWith(":", into(prefix("bind:"))));
  var handler2 = (el, { value, modifiers, expression, original }, { effect: effect3 }) => {
    if (!value) {
      let bindingProviders = {};
      injectBindingProviders(bindingProviders);
      let getBindings = evaluateLater(el, expression);
      getBindings((bindings) => {
        applyBindingsObject(el, bindings, original);
      }, { scope: bindingProviders });
      return;
    }
    if (value === "key")
      return storeKeyForXFor(el, expression);
    if (el._x_inlineBindings && el._x_inlineBindings[value] && el._x_inlineBindings[value].extract) {
      return;
    }
    let evaluate2 = evaluateLater(el, expression);
    effect3(() => evaluate2((result) => {
      if (result === void 0 && typeof expression === "string" && expression.match(/\./)) {
        result = "";
      }
      mutateDom(() => bind(el, value, result, modifiers));
    }));
  };
  handler2.inline = (el, { value, modifiers, expression }) => {
    if (!value)
      return;
    if (!el._x_inlineBindings)
      el._x_inlineBindings = {};
    el._x_inlineBindings[value] = { expression, extract: false };
  };
  directive("bind", handler2);
  function storeKeyForXFor(el, expression) {
    el._x_keyExpression = expression;
  }
  addRootSelector(() => `[${prefix("data")}]`);
  directive("data", (el, { expression }, { cleanup: cleanup2 }) => {
    if (shouldSkipRegisteringDataDuringClone(el))
      return;
    expression = expression === "" ? "{}" : expression;
    let magicContext = {};
    injectMagics(magicContext, el);
    let dataProviderContext = {};
    injectDataProviders(dataProviderContext, magicContext);
    let data2 = evaluate(el, expression, { scope: dataProviderContext });
    if (data2 === void 0 || data2 === true)
      data2 = {};
    injectMagics(data2, el);
    let reactiveData = reactive(data2);
    initInterceptors2(reactiveData);
    let undo = addScopeToNode(el, reactiveData);
    reactiveData["init"] && evaluate(el, reactiveData["init"]);
    cleanup2(() => {
      reactiveData["destroy"] && evaluate(el, reactiveData["destroy"]);
      undo();
    });
  });
  interceptClone((from, to) => {
    if (from._x_dataStack) {
      to._x_dataStack = from._x_dataStack;
      to.setAttribute("data-has-alpine-state", true);
    }
  });
  function shouldSkipRegisteringDataDuringClone(el) {
    if (!isCloning)
      return false;
    if (isCloningLegacy)
      return true;
    return el.hasAttribute("data-has-alpine-state");
  }
  directive("show", (el, { modifiers, expression }, { effect: effect3 }) => {
    let evaluate2 = evaluateLater(el, expression);
    if (!el._x_doHide)
      el._x_doHide = () => {
        mutateDom(() => {
          el.style.setProperty("display", "none", modifiers.includes("important") ? "important" : void 0);
        });
      };
    if (!el._x_doShow)
      el._x_doShow = () => {
        mutateDom(() => {
          if (el.style.length === 1 && el.style.display === "none") {
            el.removeAttribute("style");
          } else {
            el.style.removeProperty("display");
          }
        });
      };
    let hide = () => {
      el._x_doHide();
      el._x_isShown = false;
    };
    let show = () => {
      el._x_doShow();
      el._x_isShown = true;
    };
    let clickAwayCompatibleShow = () => setTimeout(show);
    let toggle = once(
      (value) => value ? show() : hide(),
      (value) => {
        if (typeof el._x_toggleAndCascadeWithTransitions === "function") {
          el._x_toggleAndCascadeWithTransitions(el, value, show, hide);
        } else {
          value ? clickAwayCompatibleShow() : hide();
        }
      }
    );
    let oldValue;
    let firstTime = true;
    effect3(() => evaluate2((value) => {
      if (!firstTime && value === oldValue)
        return;
      if (modifiers.includes("immediate"))
        value ? clickAwayCompatibleShow() : hide();
      toggle(value);
      oldValue = value;
      firstTime = false;
    }));
  });
  directive("for", (el, { expression }, { effect: effect3, cleanup: cleanup2 }) => {
    let iteratorNames = parseForExpression(expression);
    let evaluateItems = evaluateLater(el, iteratorNames.items);
    let evaluateKey = evaluateLater(
      el,
      // the x-bind:key expression is stored for our use instead of evaluated.
      el._x_keyExpression || "index"
    );
    el._x_prevKeys = [];
    el._x_lookup = {};
    effect3(() => loop(el, iteratorNames, evaluateItems, evaluateKey));
    cleanup2(() => {
      Object.values(el._x_lookup).forEach((el2) => el2.remove());
      delete el._x_prevKeys;
      delete el._x_lookup;
    });
  });
  function loop(el, iteratorNames, evaluateItems, evaluateKey) {
    let isObject2 = (i2) => typeof i2 === "object" && !Array.isArray(i2);
    let templateEl = el;
    evaluateItems((items) => {
      if (isNumeric3(items) && items >= 0) {
        items = Array.from(Array(items).keys(), (i2) => i2 + 1);
      }
      if (items === void 0)
        items = [];
      let lookup = el._x_lookup;
      let prevKeys = el._x_prevKeys;
      let scopes = [];
      let keys = [];
      if (isObject2(items)) {
        items = Object.entries(items).map(([key, value]) => {
          let scope2 = getIterationScopeVariables(iteratorNames, value, key, items);
          evaluateKey((value2) => keys.push(value2), { scope: __spreadValues({ index: key }, scope2) });
          scopes.push(scope2);
        });
      } else {
        for (let i2 = 0; i2 < items.length; i2++) {
          let scope2 = getIterationScopeVariables(iteratorNames, items[i2], i2, items);
          evaluateKey((value) => keys.push(value), { scope: __spreadValues({ index: i2 }, scope2) });
          scopes.push(scope2);
        }
      }
      let adds = [];
      let moves = [];
      let removes = [];
      let sames = [];
      for (let i2 = 0; i2 < prevKeys.length; i2++) {
        let key = prevKeys[i2];
        if (keys.indexOf(key) === -1)
          removes.push(key);
      }
      prevKeys = prevKeys.filter((key) => !removes.includes(key));
      let lastKey = "template";
      for (let i2 = 0; i2 < keys.length; i2++) {
        let key = keys[i2];
        let prevIndex = prevKeys.indexOf(key);
        if (prevIndex === -1) {
          prevKeys.splice(i2, 0, key);
          adds.push([lastKey, i2]);
        } else if (prevIndex !== i2) {
          let keyInSpot = prevKeys.splice(i2, 1)[0];
          let keyForSpot = prevKeys.splice(prevIndex - 1, 1)[0];
          prevKeys.splice(i2, 0, keyForSpot);
          prevKeys.splice(prevIndex, 0, keyInSpot);
          moves.push([keyInSpot, keyForSpot]);
        } else {
          sames.push(key);
        }
        lastKey = key;
      }
      for (let i2 = 0; i2 < removes.length; i2++) {
        let key = removes[i2];
        if (!!lookup[key]._x_effects) {
          lookup[key]._x_effects.forEach(dequeueJob);
        }
        lookup[key].remove();
        lookup[key] = null;
        delete lookup[key];
      }
      for (let i2 = 0; i2 < moves.length; i2++) {
        let [keyInSpot, keyForSpot] = moves[i2];
        let elInSpot = lookup[keyInSpot];
        let elForSpot = lookup[keyForSpot];
        let marker = document.createElement("div");
        mutateDom(() => {
          if (!elForSpot)
            warn(`x-for ":key" is undefined or invalid`, templateEl);
          elForSpot.after(marker);
          elInSpot.after(elForSpot);
          elForSpot._x_currentIfEl && elForSpot.after(elForSpot._x_currentIfEl);
          marker.before(elInSpot);
          elInSpot._x_currentIfEl && elInSpot.after(elInSpot._x_currentIfEl);
          marker.remove();
        });
        elForSpot._x_refreshXForScope(scopes[keys.indexOf(keyForSpot)]);
      }
      for (let i2 = 0; i2 < adds.length; i2++) {
        let [lastKey2, index] = adds[i2];
        let lastEl = lastKey2 === "template" ? templateEl : lookup[lastKey2];
        if (lastEl._x_currentIfEl)
          lastEl = lastEl._x_currentIfEl;
        let scope2 = scopes[index];
        let key = keys[index];
        let clone2 = document.importNode(templateEl.content, true).firstElementChild;
        let reactiveScope = reactive(scope2);
        addScopeToNode(clone2, reactiveScope, templateEl);
        clone2._x_refreshXForScope = (newScope) => {
          Object.entries(newScope).forEach(([key2, value]) => {
            reactiveScope[key2] = value;
          });
        };
        mutateDom(() => {
          lastEl.after(clone2);
          initTree(clone2);
        });
        if (typeof key === "object") {
          warn("x-for key cannot be an object, it must be a string or an integer", templateEl);
        }
        lookup[key] = clone2;
      }
      for (let i2 = 0; i2 < sames.length; i2++) {
        lookup[sames[i2]]._x_refreshXForScope(scopes[keys.indexOf(sames[i2])]);
      }
      templateEl._x_prevKeys = keys;
    });
  }
  function parseForExpression(expression) {
    let forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
    let stripParensRE = /^\s*\(|\)\s*$/g;
    let forAliasRE = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/;
    let inMatch = expression.match(forAliasRE);
    if (!inMatch)
      return;
    let res = {};
    res.items = inMatch[2].trim();
    let item = inMatch[1].replace(stripParensRE, "").trim();
    let iteratorMatch = item.match(forIteratorRE);
    if (iteratorMatch) {
      res.item = item.replace(forIteratorRE, "").trim();
      res.index = iteratorMatch[1].trim();
      if (iteratorMatch[2]) {
        res.collection = iteratorMatch[2].trim();
      }
    } else {
      res.item = item;
    }
    return res;
  }
  function getIterationScopeVariables(iteratorNames, item, index, items) {
    let scopeVariables = {};
    if (/^\[.*\]$/.test(iteratorNames.item) && Array.isArray(item)) {
      let names = iteratorNames.item.replace("[", "").replace("]", "").split(",").map((i2) => i2.trim());
      names.forEach((name, i2) => {
        scopeVariables[name] = item[i2];
      });
    } else if (/^\{.*\}$/.test(iteratorNames.item) && !Array.isArray(item) && typeof item === "object") {
      let names = iteratorNames.item.replace("{", "").replace("}", "").split(",").map((i2) => i2.trim());
      names.forEach((name) => {
        scopeVariables[name] = item[name];
      });
    } else {
      scopeVariables[iteratorNames.item] = item;
    }
    if (iteratorNames.index)
      scopeVariables[iteratorNames.index] = index;
    if (iteratorNames.collection)
      scopeVariables[iteratorNames.collection] = items;
    return scopeVariables;
  }
  function isNumeric3(subject) {
    return !Array.isArray(subject) && !isNaN(subject);
  }
  function handler3() {
  }
  handler3.inline = (el, { expression }, { cleanup: cleanup2 }) => {
    let root = closestRoot(el);
    if (!root._x_refs)
      root._x_refs = {};
    root._x_refs[expression] = el;
    cleanup2(() => delete root._x_refs[expression]);
  };
  directive("ref", handler3);
  directive("if", (el, { expression }, { effect: effect3, cleanup: cleanup2 }) => {
    if (el.tagName.toLowerCase() !== "template")
      warn("x-if can only be used on a <template> tag", el);
    let evaluate2 = evaluateLater(el, expression);
    let show = () => {
      if (el._x_currentIfEl)
        return el._x_currentIfEl;
      let clone2 = el.content.cloneNode(true).firstElementChild;
      addScopeToNode(clone2, {}, el);
      mutateDom(() => {
        el.after(clone2);
        initTree(clone2);
      });
      el._x_currentIfEl = clone2;
      el._x_undoIf = () => {
        walk(clone2, (node) => {
          if (!!node._x_effects) {
            node._x_effects.forEach(dequeueJob);
          }
        });
        clone2.remove();
        delete el._x_currentIfEl;
      };
      return clone2;
    };
    let hide = () => {
      if (!el._x_undoIf)
        return;
      el._x_undoIf();
      delete el._x_undoIf;
    };
    effect3(() => evaluate2((value) => {
      value ? show() : hide();
    }));
    cleanup2(() => el._x_undoIf && el._x_undoIf());
  });
  directive("id", (el, { expression }, { evaluate: evaluate2 }) => {
    let names = evaluate2(expression);
    names.forEach((name) => setIdRoot(el, name));
  });
  mapAttributes(startingWith("@", into(prefix("on:"))));
  directive("on", skipDuringClone((el, { value, modifiers, expression }, { cleanup: cleanup2 }) => {
    let evaluate2 = expression ? evaluateLater(el, expression) : () => {
    };
    if (el.tagName.toLowerCase() === "template") {
      if (!el._x_forwardEvents)
        el._x_forwardEvents = [];
      if (!el._x_forwardEvents.includes(value))
        el._x_forwardEvents.push(value);
    }
    let removeListener = on(el, value, modifiers, (e2) => {
      evaluate2(() => {
      }, { scope: { "$event": e2 }, params: [e2] });
    });
    cleanup2(() => removeListener());
  }));
  warnMissingPluginDirective("Collapse", "collapse", "collapse");
  warnMissingPluginDirective("Intersect", "intersect", "intersect");
  warnMissingPluginDirective("Focus", "trap", "focus");
  warnMissingPluginDirective("Mask", "mask", "mask");
  function warnMissingPluginDirective(name, directiveName, slug) {
    directive(directiveName, (el) => warn(`You can't use [x-${directiveName}] without first installing the "${name}" plugin here: https://alpinejs.dev/plugins/${slug}`, el));
  }
  alpine_default.setEvaluator(normalEvaluator);
  alpine_default.setReactivityEngine({ reactive: reactive2, effect: effect2, release: stop, raw: toRaw });
  var src_default = alpine_default;
  var module_default = src_default;

  // node_modules/@alpinejs/persist/dist/module.esm.js
  function src_default2(Alpine2) {
    let persist = () => {
      let alias;
      let storage;
      try {
        storage = localStorage;
      } catch (e2) {
        console.error(e2);
        console.warn("Alpine: $persist is using temporary storage since localStorage is unavailable.");
        let dummy = /* @__PURE__ */ new Map();
        storage = {
          getItem: dummy.get.bind(dummy),
          setItem: dummy.set.bind(dummy)
        };
      }
      return Alpine2.interceptor((initialValue, getter, setter, path, key) => {
        let lookup = alias || `_x_${path}`;
        let initial = storageHas(lookup, storage) ? storageGet(lookup, storage) : initialValue;
        setter(initial);
        Alpine2.effect(() => {
          let value = getter();
          storageSet(lookup, value, storage);
          setter(value);
        });
        return initial;
      }, (func) => {
        func.as = (key) => {
          alias = key;
          return func;
        }, func.using = (target) => {
          storage = target;
          return func;
        };
      });
    };
    Object.defineProperty(Alpine2, "$persist", { get: () => persist() });
    Alpine2.magic("persist", persist);
    Alpine2.persist = (key, { get: get3, set: set3 }, storage = localStorage) => {
      let initial = storageHas(key, storage) ? storageGet(key, storage) : get3();
      set3(initial);
      Alpine2.effect(() => {
        let value = get3();
        storageSet(key, value, storage);
        set3(value);
      });
    };
  }
  function storageHas(key, storage) {
    return storage.getItem(key) !== null;
  }
  function storageGet(key, storage) {
    return JSON.parse(storage.getItem(key, storage));
  }
  function storageSet(key, value, storage) {
    storage.setItem(key, JSON.stringify(value));
  }
  var module_default2 = src_default2;

  // assets/static/js/cartStore.js
  var cartStore_default = (Alpine2) => ({
    items: Alpine2.$persist([]),
    stripeSessionId: Alpine2.$persist(null),
    stripeSessionUrl: Alpine2.$persist(null),
    get cartTotal() {
      return this.items.reduce((a2, i2) => a2 += i2.price * i2.quantity, 0);
    },
    get cartForStripe() {
      return this.items.map((item) => ({
        sku: item.sku,
        price_id: item.stripe_price_id,
        quantity: item.quantity
      }));
    },
    findItem(itemToFind) {
      return {
        item: this.items.find((i2) => i2.sku === itemToFind.sku),
        itemIndex: this.items.findIndex((i2) => i2.sku === itemToFind.sku)
      };
    },
    getItemProp(itemToGet, prop = "quantity") {
      const { item } = this.findItem(itemToGet);
      return item == null ? void 0 : item[prop];
    },
    addItem(itemToAdd) {
      const { item } = this.findItem(itemToAdd);
      item ? item.quantity = Math.min(10, item.quantity + 1) : this.items.push(__spreadProps(__spreadValues({}, itemToAdd), { quantity: 1 }));
    },
    removeItem(itemToRemove, wipeOut = false) {
      const { item, itemIndex } = this.findItem(itemToRemove);
      let updatedWipeOut = wipeOut || (item == null ? void 0 : item.quantity) === 1;
      if (item && !updatedWipeOut)
        item.quantity -= 1;
      if (item && updatedWipeOut)
        this.items.splice(itemIndex, 1);
    },
    wipeCart() {
      this.items = [];
    }
  });

  // assets/static/js/useCart.js
  var useCart_default = () => ({
    cart: null,
    init() {
      this.cart = this.$store.cartStore;
    }
  });

  // assets/static/js/useCartSummary.js
  var useCartSummary_default = () => ({
    total: 0,
    timeoutId: null,
    init() {
      const glowClass = "bg-green-200";
      this.total = this.$store.cartStore.cartTotal;
      this.$watch("$store.cartStore.items", () => {
        this.total = this.$store.cartStore.cartTotal;
        this.$el.classList.add(glowClass);
        this.timeoutId = setTimeout(() => {
          this.$el.classList.remove(glowClass);
        }, 300);
      });
    },
    destroy() {
      clearTimeout(this.timeoutId);
    }
  });

  // assets/static/js/useSearch.js
  var useSearch_default = () => ({
    open: false,
    init() {
      new PagefindUI({ element: "#search", showSubResults: false, showImages: true, highlightParam: "highlight" });
      this.$watch("open", (open) => {
        this.$nextTick(() => open && this.$refs["search-component"].getElementsByTagName("input")[0].focus());
      });
    },
    trigger: {
      ["x-show"]() {
        return this.open;
      },
      ["@keydown.window.escape"]() {
        this.open = false;
      },
      ["@canvas-open.window"]() {
        this.open = true;
      }
    }
  });

  // assets/static/js/useCarousel.js
  var useCarousel_default = (durationOfAnimation = 5e3) => ({
    durationOfAnimation,
    intervalID: null,
    currentSlide: 0,
    numberOfSlides: 0,
    baseScroll: 0,
    init() {
      const slider = this.$refs.slider;
      this.numberOfSlides = slider.children.length;
      this.baseScroll = slider.getBoundingClientRect().width;
      this.$watch("currentSlide", (value) => {
        slider.scrollTo({ left: value * this.baseScroll, behavior: "smooth" });
      });
      this.startAutoSlide();
    },
    destroy() {
      this.stopAutoSlide();
    },
    startAutoSlide() {
      this.intervalID = setInterval(() => {
        this.next();
      }, this.durationOfAnimation);
    },
    stopAutoSlide() {
      clearInterval(this.intervalID);
    },
    goToSlide(index) {
      this.currentSlide = index;
    },
    next() {
      this.currentSlide = this.currentSlide + 1 === this.numberOfSlides ? 0 : ++this.currentSlide;
    },
    prev() {
      this.currentSlide = this.currentSlide === 0 ? this.numberOfSlides - 1 : --this.currentSlide;
    }
  });

  // assets/static/js/custom-htmx.js
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

  // assets/static/js/custom-alpine.js
  var formatCurrency = (el, { expression }, { evaluateLater: evaluateLater2, effect: effect3 }) => {
    const formatCurrency2 = evaluateLater2(expression);
    effect3(() => {
      formatCurrency2((amount) => {
        const formattedAmount = typeof amount == "number" ? `$${amount.toFixed(2)}` : amount;
        el.innerHTML = formattedAmount;
      });
    });
  };

  // assets/static/js/main.js
  window.Htmx = import_htmx.default;
  import_htmx.default.defineExtension("json-enc", jsonEnc);
  window.Alpine = module_default;
  module_default.directive("currency", formatCurrency);
  module_default.plugin(module_default2);
  module_default.store("cartStore", cartStore_default(module_default));
  module_default.data("useCart", useCart_default);
  module_default.data("useCartSummary", useCartSummary_default);
  module_default.data("useSearch", useSearch_default);
  module_default.data("useCarousel", useCarousel_default);
  module_default.start();
})();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2h0bXgub3JnL2Rpc3QvaHRteC5taW4uanMiLCAibWFpbi5qcyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvYWxwaW5lanMvZGlzdC9tb2R1bGUuZXNtLmpzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9AYWxwaW5lanMvcGVyc2lzdC9kaXN0L21vZHVsZS5lc20uanMiLCAiY2FydFN0b3JlLmpzIiwgInVzZUNhcnQuanMiLCAidXNlQ2FydFN1bW1hcnkuanMiLCAidXNlU2VhcmNoLmpzIiwgInVzZUNhcm91c2VsLmpzIiwgImN1c3RvbS1odG14LmpzIiwgImN1c3RvbS1hbHBpbmUuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIihmdW5jdGlvbihlLHQpe2lmKHR5cGVvZiBkZWZpbmU9PT1cImZ1bmN0aW9uXCImJmRlZmluZS5hbWQpe2RlZmluZShbXSx0KX1lbHNlIGlmKHR5cGVvZiBtb2R1bGU9PT1cIm9iamVjdFwiJiZtb2R1bGUuZXhwb3J0cyl7bW9kdWxlLmV4cG9ydHM9dCgpfWVsc2V7ZS5odG14PWUuaHRteHx8dCgpfX0pKHR5cGVvZiBzZWxmIT09XCJ1bmRlZmluZWRcIj9zZWxmOnRoaXMsZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjt2YXIgUT17b25Mb2FkOkYscHJvY2Vzczp6dCxvbjpkZSxvZmY6Z2UsdHJpZ2dlcjpjZSxhamF4Ok5yLGZpbmQ6QyxmaW5kQWxsOmYsY2xvc2VzdDp2LHZhbHVlczpmdW5jdGlvbihlLHQpe3ZhciByPWRyKGUsdHx8XCJwb3N0XCIpO3JldHVybiByLnZhbHVlc30scmVtb3ZlOl8sYWRkQ2xhc3M6eixyZW1vdmVDbGFzczpuLHRvZ2dsZUNsYXNzOiQsdGFrZUNsYXNzOlcsZGVmaW5lRXh0ZW5zaW9uOlVyLHJlbW92ZUV4dGVuc2lvbjpCcixsb2dBbGw6Vixsb2dOb25lOmosbG9nZ2VyOm51bGwsY29uZmlnOntoaXN0b3J5RW5hYmxlZDp0cnVlLGhpc3RvcnlDYWNoZVNpemU6MTAscmVmcmVzaE9uSGlzdG9yeU1pc3M6ZmFsc2UsZGVmYXVsdFN3YXBTdHlsZTpcImlubmVySFRNTFwiLGRlZmF1bHRTd2FwRGVsYXk6MCxkZWZhdWx0U2V0dGxlRGVsYXk6MjAsaW5jbHVkZUluZGljYXRvclN0eWxlczp0cnVlLGluZGljYXRvckNsYXNzOlwiaHRteC1pbmRpY2F0b3JcIixyZXF1ZXN0Q2xhc3M6XCJodG14LXJlcXVlc3RcIixhZGRlZENsYXNzOlwiaHRteC1hZGRlZFwiLHNldHRsaW5nQ2xhc3M6XCJodG14LXNldHRsaW5nXCIsc3dhcHBpbmdDbGFzczpcImh0bXgtc3dhcHBpbmdcIixhbGxvd0V2YWw6dHJ1ZSxhbGxvd1NjcmlwdFRhZ3M6dHJ1ZSxpbmxpbmVTY3JpcHROb25jZTpcIlwiLGF0dHJpYnV0ZXNUb1NldHRsZTpbXCJjbGFzc1wiLFwic3R5bGVcIixcIndpZHRoXCIsXCJoZWlnaHRcIl0sd2l0aENyZWRlbnRpYWxzOmZhbHNlLHRpbWVvdXQ6MCx3c1JlY29ubmVjdERlbGF5OlwiZnVsbC1qaXR0ZXJcIix3c0JpbmFyeVR5cGU6XCJibG9iXCIsZGlzYWJsZVNlbGVjdG9yOlwiW2h4LWRpc2FibGVdLCBbZGF0YS1oeC1kaXNhYmxlXVwiLHVzZVRlbXBsYXRlRnJhZ21lbnRzOmZhbHNlLHNjcm9sbEJlaGF2aW9yOlwic21vb3RoXCIsZGVmYXVsdEZvY3VzU2Nyb2xsOmZhbHNlLGdldENhY2hlQnVzdGVyUGFyYW06ZmFsc2UsZ2xvYmFsVmlld1RyYW5zaXRpb25zOmZhbHNlLG1ldGhvZHNUaGF0VXNlVXJsUGFyYW1zOltcImdldFwiXSxzZWxmUmVxdWVzdHNPbmx5OmZhbHNlLGlnbm9yZVRpdGxlOmZhbHNlLHNjcm9sbEludG9WaWV3T25Cb29zdDp0cnVlLHRyaWdnZXJTcGVjc0NhY2hlOm51bGx9LHBhcnNlSW50ZXJ2YWw6ZCxfOnQsY3JlYXRlRXZlbnRTb3VyY2U6ZnVuY3Rpb24oZSl7cmV0dXJuIG5ldyBFdmVudFNvdXJjZShlLHt3aXRoQ3JlZGVudGlhbHM6dHJ1ZX0pfSxjcmVhdGVXZWJTb2NrZXQ6ZnVuY3Rpb24oZSl7dmFyIHQ9bmV3IFdlYlNvY2tldChlLFtdKTt0LmJpbmFyeVR5cGU9US5jb25maWcud3NCaW5hcnlUeXBlO3JldHVybiB0fSx2ZXJzaW9uOlwiMS45LjEwXCJ9O3ZhciByPXthZGRUcmlnZ2VySGFuZGxlcjpMdCxib2R5Q29udGFpbnM6c2UsY2FuQWNjZXNzTG9jYWxTdG9yYWdlOlUsZmluZFRoaXNFbGVtZW50OnhlLGZpbHRlclZhbHVlczp5cixoYXNBdHRyaWJ1dGU6byxnZXRBdHRyaWJ1dGVWYWx1ZTp0ZSxnZXRDbG9zZXN0QXR0cmlidXRlVmFsdWU6bmUsZ2V0Q2xvc2VzdE1hdGNoOmMsZ2V0RXhwcmVzc2lvblZhcnM6SHIsZ2V0SGVhZGVyczp4cixnZXRJbnB1dFZhbHVlczpkcixnZXRJbnRlcm5hbERhdGE6YWUsZ2V0U3dhcFNwZWNpZmljYXRpb246d3IsZ2V0VHJpZ2dlclNwZWNzOml0LGdldFRhcmdldDp5ZSxtYWtlRnJhZ21lbnQ6bCxtZXJnZU9iamVjdHM6bGUsbWFrZVNldHRsZUluZm86VCxvb2JTd2FwOkVlLHF1ZXJ5U2VsZWN0b3JFeHQ6dWUsc2VsZWN0QW5kU3dhcDpqZSxzZXR0bGVJbW1lZGlhdGVseTpucixzaG91bGRDYW5jZWw6dXQsdHJpZ2dlckV2ZW50OmNlLHRyaWdnZXJFcnJvckV2ZW50OmZlLHdpdGhFeHRlbnNpb25zOlJ9O3ZhciB3PVtcImdldFwiLFwicG9zdFwiLFwicHV0XCIsXCJkZWxldGVcIixcInBhdGNoXCJdO3ZhciBpPXcubWFwKGZ1bmN0aW9uKGUpe3JldHVyblwiW2h4LVwiK2UrXCJdLCBbZGF0YS1oeC1cIitlK1wiXVwifSkuam9pbihcIiwgXCIpO3ZhciBTPWUoXCJoZWFkXCIpLHE9ZShcInRpdGxlXCIpLEg9ZShcInN2Z1wiLHRydWUpO2Z1bmN0aW9uIGUoZSx0PWZhbHNlKXtyZXR1cm4gbmV3IFJlZ0V4cChgPCR7ZX0oXFxcXHNbXj5dKj58PikoW1xcXFxzXFxcXFNdKj8pPFxcXFwvJHtlfT5gLHQ/XCJnaW1cIjpcImltXCIpfWZ1bmN0aW9uIGQoZSl7aWYoZT09dW5kZWZpbmVkKXtyZXR1cm4gdW5kZWZpbmVkfWxldCB0PU5hTjtpZihlLnNsaWNlKC0yKT09XCJtc1wiKXt0PXBhcnNlRmxvYXQoZS5zbGljZSgwLC0yKSl9ZWxzZSBpZihlLnNsaWNlKC0xKT09XCJzXCIpe3Q9cGFyc2VGbG9hdChlLnNsaWNlKDAsLTEpKSoxZTN9ZWxzZSBpZihlLnNsaWNlKC0xKT09XCJtXCIpe3Q9cGFyc2VGbG9hdChlLnNsaWNlKDAsLTEpKSoxZTMqNjB9ZWxzZXt0PXBhcnNlRmxvYXQoZSl9cmV0dXJuIGlzTmFOKHQpP3VuZGVmaW5lZDp0fWZ1bmN0aW9uIGVlKGUsdCl7cmV0dXJuIGUuZ2V0QXR0cmlidXRlJiZlLmdldEF0dHJpYnV0ZSh0KX1mdW5jdGlvbiBvKGUsdCl7cmV0dXJuIGUuaGFzQXR0cmlidXRlJiYoZS5oYXNBdHRyaWJ1dGUodCl8fGUuaGFzQXR0cmlidXRlKFwiZGF0YS1cIit0KSl9ZnVuY3Rpb24gdGUoZSx0KXtyZXR1cm4gZWUoZSx0KXx8ZWUoZSxcImRhdGEtXCIrdCl9ZnVuY3Rpb24gdShlKXtyZXR1cm4gZS5wYXJlbnRFbGVtZW50fWZ1bmN0aW9uIHJlKCl7cmV0dXJuIGRvY3VtZW50fWZ1bmN0aW9uIGMoZSx0KXt3aGlsZShlJiYhdChlKSl7ZT11KGUpfXJldHVybiBlP2U6bnVsbH1mdW5jdGlvbiBMKGUsdCxyKXt2YXIgbj10ZSh0LHIpO3ZhciBpPXRlKHQsXCJoeC1kaXNpbmhlcml0XCIpO2lmKGUhPT10JiZpJiYoaT09PVwiKlwifHxpLnNwbGl0KFwiIFwiKS5pbmRleE9mKHIpPj0wKSl7cmV0dXJuXCJ1bnNldFwifWVsc2V7cmV0dXJuIG59fWZ1bmN0aW9uIG5lKHQscil7dmFyIG49bnVsbDtjKHQsZnVuY3Rpb24oZSl7cmV0dXJuIG49TCh0LGUscil9KTtpZihuIT09XCJ1bnNldFwiKXtyZXR1cm4gbn19ZnVuY3Rpb24gaChlLHQpe3ZhciByPWUubWF0Y2hlc3x8ZS5tYXRjaGVzU2VsZWN0b3J8fGUubXNNYXRjaGVzU2VsZWN0b3J8fGUubW96TWF0Y2hlc1NlbGVjdG9yfHxlLndlYmtpdE1hdGNoZXNTZWxlY3Rvcnx8ZS5vTWF0Y2hlc1NlbGVjdG9yO3JldHVybiByJiZyLmNhbGwoZSx0KX1mdW5jdGlvbiBBKGUpe3ZhciB0PS88KFthLXpdW15cXC9cXDA+XFx4MjBcXHRcXHJcXG5cXGZdKikvaTt2YXIgcj10LmV4ZWMoZSk7aWYocil7cmV0dXJuIHJbMV0udG9Mb3dlckNhc2UoKX1lbHNle3JldHVyblwiXCJ9fWZ1bmN0aW9uIGEoZSx0KXt2YXIgcj1uZXcgRE9NUGFyc2VyO3ZhciBuPXIucGFyc2VGcm9tU3RyaW5nKGUsXCJ0ZXh0L2h0bWxcIik7dmFyIGk9bi5ib2R5O3doaWxlKHQ+MCl7dC0tO2k9aS5maXJzdENoaWxkfWlmKGk9PW51bGwpe2k9cmUoKS5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCl9cmV0dXJuIGl9ZnVuY3Rpb24gTihlKXtyZXR1cm4vPGJvZHkvLnRlc3QoZSl9ZnVuY3Rpb24gbChlKXt2YXIgdD0hTihlKTt2YXIgcj1BKGUpO3ZhciBuPWU7aWYocj09PVwiaGVhZFwiKXtuPW4ucmVwbGFjZShTLFwiXCIpfWlmKFEuY29uZmlnLnVzZVRlbXBsYXRlRnJhZ21lbnRzJiZ0KXt2YXIgaT1hKFwiPGJvZHk+PHRlbXBsYXRlPlwiK24rXCI8L3RlbXBsYXRlPjwvYm9keT5cIiwwKTtyZXR1cm4gaS5xdWVyeVNlbGVjdG9yKFwidGVtcGxhdGVcIikuY29udGVudH1zd2l0Y2gocil7Y2FzZVwidGhlYWRcIjpjYXNlXCJ0Ym9keVwiOmNhc2VcInRmb290XCI6Y2FzZVwiY29sZ3JvdXBcIjpjYXNlXCJjYXB0aW9uXCI6cmV0dXJuIGEoXCI8dGFibGU+XCIrbitcIjwvdGFibGU+XCIsMSk7Y2FzZVwiY29sXCI6cmV0dXJuIGEoXCI8dGFibGU+PGNvbGdyb3VwPlwiK24rXCI8L2NvbGdyb3VwPjwvdGFibGU+XCIsMik7Y2FzZVwidHJcIjpyZXR1cm4gYShcIjx0YWJsZT48dGJvZHk+XCIrbitcIjwvdGJvZHk+PC90YWJsZT5cIiwyKTtjYXNlXCJ0ZFwiOmNhc2VcInRoXCI6cmV0dXJuIGEoXCI8dGFibGU+PHRib2R5Pjx0cj5cIituK1wiPC90cj48L3Rib2R5PjwvdGFibGU+XCIsMyk7Y2FzZVwic2NyaXB0XCI6Y2FzZVwic3R5bGVcIjpyZXR1cm4gYShcIjxkaXY+XCIrbitcIjwvZGl2PlwiLDEpO2RlZmF1bHQ6cmV0dXJuIGEobiwwKX19ZnVuY3Rpb24gaWUoZSl7aWYoZSl7ZSgpfX1mdW5jdGlvbiBJKGUsdCl7cmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChlKT09PVwiW29iamVjdCBcIit0K1wiXVwifWZ1bmN0aW9uIGsoZSl7cmV0dXJuIEkoZSxcIkZ1bmN0aW9uXCIpfWZ1bmN0aW9uIFAoZSl7cmV0dXJuIEkoZSxcIk9iamVjdFwiKX1mdW5jdGlvbiBhZShlKXt2YXIgdD1cImh0bXgtaW50ZXJuYWwtZGF0YVwiO3ZhciByPWVbdF07aWYoIXIpe3I9ZVt0XT17fX1yZXR1cm4gcn1mdW5jdGlvbiBNKGUpe3ZhciB0PVtdO2lmKGUpe2Zvcih2YXIgcj0wO3I8ZS5sZW5ndGg7cisrKXt0LnB1c2goZVtyXSl9fXJldHVybiB0fWZ1bmN0aW9uIG9lKGUsdCl7aWYoZSl7Zm9yKHZhciByPTA7cjxlLmxlbmd0aDtyKyspe3QoZVtyXSl9fX1mdW5jdGlvbiBYKGUpe3ZhciB0PWUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7dmFyIHI9dC50b3A7dmFyIG49dC5ib3R0b207cmV0dXJuIHI8d2luZG93LmlubmVySGVpZ2h0JiZuPj0wfWZ1bmN0aW9uIHNlKGUpe2lmKGUuZ2V0Um9vdE5vZGUmJmUuZ2V0Um9vdE5vZGUoKWluc3RhbmNlb2Ygd2luZG93LlNoYWRvd1Jvb3Qpe3JldHVybiByZSgpLmJvZHkuY29udGFpbnMoZS5nZXRSb290Tm9kZSgpLmhvc3QpfWVsc2V7cmV0dXJuIHJlKCkuYm9keS5jb250YWlucyhlKX19ZnVuY3Rpb24gRChlKXtyZXR1cm4gZS50cmltKCkuc3BsaXQoL1xccysvKX1mdW5jdGlvbiBsZShlLHQpe2Zvcih2YXIgciBpbiB0KXtpZih0Lmhhc093blByb3BlcnR5KHIpKXtlW3JdPXRbcl19fXJldHVybiBlfWZ1bmN0aW9uIEUoZSl7dHJ5e3JldHVybiBKU09OLnBhcnNlKGUpfWNhdGNoKGUpe2IoZSk7cmV0dXJuIG51bGx9fWZ1bmN0aW9uIFUoKXt2YXIgZT1cImh0bXg6bG9jYWxTdG9yYWdlVGVzdFwiO3RyeXtsb2NhbFN0b3JhZ2Uuc2V0SXRlbShlLGUpO2xvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGUpO3JldHVybiB0cnVlfWNhdGNoKGUpe3JldHVybiBmYWxzZX19ZnVuY3Rpb24gQih0KXt0cnl7dmFyIGU9bmV3IFVSTCh0KTtpZihlKXt0PWUucGF0aG5hbWUrZS5zZWFyY2h9aWYoIS9eXFwvJC8udGVzdCh0KSl7dD10LnJlcGxhY2UoL1xcLyskLyxcIlwiKX1yZXR1cm4gdH1jYXRjaChlKXtyZXR1cm4gdH19ZnVuY3Rpb24gdChlKXtyZXR1cm4gVHIocmUoKS5ib2R5LGZ1bmN0aW9uKCl7cmV0dXJuIGV2YWwoZSl9KX1mdW5jdGlvbiBGKHQpe3ZhciBlPVEub24oXCJodG14OmxvYWRcIixmdW5jdGlvbihlKXt0KGUuZGV0YWlsLmVsdCl9KTtyZXR1cm4gZX1mdW5jdGlvbiBWKCl7US5sb2dnZXI9ZnVuY3Rpb24oZSx0LHIpe2lmKGNvbnNvbGUpe2NvbnNvbGUubG9nKHQsZSxyKX19fWZ1bmN0aW9uIGooKXtRLmxvZ2dlcj1udWxsfWZ1bmN0aW9uIEMoZSx0KXtpZih0KXtyZXR1cm4gZS5xdWVyeVNlbGVjdG9yKHQpfWVsc2V7cmV0dXJuIEMocmUoKSxlKX19ZnVuY3Rpb24gZihlLHQpe2lmKHQpe3JldHVybiBlLnF1ZXJ5U2VsZWN0b3JBbGwodCl9ZWxzZXtyZXR1cm4gZihyZSgpLGUpfX1mdW5jdGlvbiBfKGUsdCl7ZT1nKGUpO2lmKHQpe3NldFRpbWVvdXQoZnVuY3Rpb24oKXtfKGUpO2U9bnVsbH0sdCl9ZWxzZXtlLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoZSl9fWZ1bmN0aW9uIHooZSx0LHIpe2U9ZyhlKTtpZihyKXtzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7eihlLHQpO2U9bnVsbH0scil9ZWxzZXtlLmNsYXNzTGlzdCYmZS5jbGFzc0xpc3QuYWRkKHQpfX1mdW5jdGlvbiBuKGUsdCxyKXtlPWcoZSk7aWYocil7c2V0VGltZW91dChmdW5jdGlvbigpe24oZSx0KTtlPW51bGx9LHIpfWVsc2V7aWYoZS5jbGFzc0xpc3Qpe2UuY2xhc3NMaXN0LnJlbW92ZSh0KTtpZihlLmNsYXNzTGlzdC5sZW5ndGg9PT0wKXtlLnJlbW92ZUF0dHJpYnV0ZShcImNsYXNzXCIpfX19fWZ1bmN0aW9uICQoZSx0KXtlPWcoZSk7ZS5jbGFzc0xpc3QudG9nZ2xlKHQpfWZ1bmN0aW9uIFcoZSx0KXtlPWcoZSk7b2UoZS5wYXJlbnRFbGVtZW50LmNoaWxkcmVuLGZ1bmN0aW9uKGUpe24oZSx0KX0pO3ooZSx0KX1mdW5jdGlvbiB2KGUsdCl7ZT1nKGUpO2lmKGUuY2xvc2VzdCl7cmV0dXJuIGUuY2xvc2VzdCh0KX1lbHNle2Rve2lmKGU9PW51bGx8fGgoZSx0KSl7cmV0dXJuIGV9fXdoaWxlKGU9ZSYmdShlKSk7cmV0dXJuIG51bGx9fWZ1bmN0aW9uIHMoZSx0KXtyZXR1cm4gZS5zdWJzdHJpbmcoMCx0Lmxlbmd0aCk9PT10fWZ1bmN0aW9uIEcoZSx0KXtyZXR1cm4gZS5zdWJzdHJpbmcoZS5sZW5ndGgtdC5sZW5ndGgpPT09dH1mdW5jdGlvbiBKKGUpe3ZhciB0PWUudHJpbSgpO2lmKHModCxcIjxcIikmJkcodCxcIi8+XCIpKXtyZXR1cm4gdC5zdWJzdHJpbmcoMSx0Lmxlbmd0aC0yKX1lbHNle3JldHVybiB0fX1mdW5jdGlvbiBaKGUsdCl7aWYodC5pbmRleE9mKFwiY2xvc2VzdCBcIik9PT0wKXtyZXR1cm5bdihlLEoodC5zdWJzdHIoOCkpKV19ZWxzZSBpZih0LmluZGV4T2YoXCJmaW5kIFwiKT09PTApe3JldHVybltDKGUsSih0LnN1YnN0cig1KSkpXX1lbHNlIGlmKHQ9PT1cIm5leHRcIil7cmV0dXJuW2UubmV4dEVsZW1lbnRTaWJsaW5nXX1lbHNlIGlmKHQuaW5kZXhPZihcIm5leHQgXCIpPT09MCl7cmV0dXJuW0soZSxKKHQuc3Vic3RyKDUpKSldfWVsc2UgaWYodD09PVwicHJldmlvdXNcIil7cmV0dXJuW2UucHJldmlvdXNFbGVtZW50U2libGluZ119ZWxzZSBpZih0LmluZGV4T2YoXCJwcmV2aW91cyBcIik9PT0wKXtyZXR1cm5bWShlLEoodC5zdWJzdHIoOSkpKV19ZWxzZSBpZih0PT09XCJkb2N1bWVudFwiKXtyZXR1cm5bZG9jdW1lbnRdfWVsc2UgaWYodD09PVwid2luZG93XCIpe3JldHVyblt3aW5kb3ddfWVsc2UgaWYodD09PVwiYm9keVwiKXtyZXR1cm5bZG9jdW1lbnQuYm9keV19ZWxzZXtyZXR1cm4gcmUoKS5xdWVyeVNlbGVjdG9yQWxsKEoodCkpfX12YXIgSz1mdW5jdGlvbihlLHQpe3ZhciByPXJlKCkucXVlcnlTZWxlY3RvckFsbCh0KTtmb3IodmFyIG49MDtuPHIubGVuZ3RoO24rKyl7dmFyIGk9cltuXTtpZihpLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKGUpPT09Tm9kZS5ET0NVTUVOVF9QT1NJVElPTl9QUkVDRURJTkcpe3JldHVybiBpfX19O3ZhciBZPWZ1bmN0aW9uKGUsdCl7dmFyIHI9cmUoKS5xdWVyeVNlbGVjdG9yQWxsKHQpO2Zvcih2YXIgbj1yLmxlbmd0aC0xO24+PTA7bi0tKXt2YXIgaT1yW25dO2lmKGkuY29tcGFyZURvY3VtZW50UG9zaXRpb24oZSk9PT1Ob2RlLkRPQ1VNRU5UX1BPU0lUSU9OX0ZPTExPV0lORyl7cmV0dXJuIGl9fX07ZnVuY3Rpb24gdWUoZSx0KXtpZih0KXtyZXR1cm4gWihlLHQpWzBdfWVsc2V7cmV0dXJuIFoocmUoKS5ib2R5LGUpWzBdfX1mdW5jdGlvbiBnKGUpe2lmKEkoZSxcIlN0cmluZ1wiKSl7cmV0dXJuIEMoZSl9ZWxzZXtyZXR1cm4gZX19ZnVuY3Rpb24gdmUoZSx0LHIpe2lmKGsodCkpe3JldHVybnt0YXJnZXQ6cmUoKS5ib2R5LGV2ZW50OmUsbGlzdGVuZXI6dH19ZWxzZXtyZXR1cm57dGFyZ2V0OmcoZSksZXZlbnQ6dCxsaXN0ZW5lcjpyfX19ZnVuY3Rpb24gZGUodCxyLG4pe2pyKGZ1bmN0aW9uKCl7dmFyIGU9dmUodCxyLG4pO2UudGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoZS5ldmVudCxlLmxpc3RlbmVyKX0pO3ZhciBlPWsocik7cmV0dXJuIGU/cjpufWZ1bmN0aW9uIGdlKHQscixuKXtqcihmdW5jdGlvbigpe3ZhciBlPXZlKHQscixuKTtlLnRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKGUuZXZlbnQsZS5saXN0ZW5lcil9KTtyZXR1cm4gayhyKT9yOm59dmFyIG1lPXJlKCkuY3JlYXRlRWxlbWVudChcIm91dHB1dFwiKTtmdW5jdGlvbiBwZShlLHQpe3ZhciByPW5lKGUsdCk7aWYocil7aWYocj09PVwidGhpc1wiKXtyZXR1cm5beGUoZSx0KV19ZWxzZXt2YXIgbj1aKGUscik7aWYobi5sZW5ndGg9PT0wKXtiKCdUaGUgc2VsZWN0b3IgXCInK3IrJ1wiIG9uICcrdCtcIiByZXR1cm5lZCBubyBtYXRjaGVzIVwiKTtyZXR1cm5bbWVdfWVsc2V7cmV0dXJuIG59fX19ZnVuY3Rpb24geGUoZSx0KXtyZXR1cm4gYyhlLGZ1bmN0aW9uKGUpe3JldHVybiB0ZShlLHQpIT1udWxsfSl9ZnVuY3Rpb24geWUoZSl7dmFyIHQ9bmUoZSxcImh4LXRhcmdldFwiKTtpZih0KXtpZih0PT09XCJ0aGlzXCIpe3JldHVybiB4ZShlLFwiaHgtdGFyZ2V0XCIpfWVsc2V7cmV0dXJuIHVlKGUsdCl9fWVsc2V7dmFyIHI9YWUoZSk7aWYoci5ib29zdGVkKXtyZXR1cm4gcmUoKS5ib2R5fWVsc2V7cmV0dXJuIGV9fX1mdW5jdGlvbiBiZShlKXt2YXIgdD1RLmNvbmZpZy5hdHRyaWJ1dGVzVG9TZXR0bGU7Zm9yKHZhciByPTA7cjx0Lmxlbmd0aDtyKyspe2lmKGU9PT10W3JdKXtyZXR1cm4gdHJ1ZX19cmV0dXJuIGZhbHNlfWZ1bmN0aW9uIHdlKHQscil7b2UodC5hdHRyaWJ1dGVzLGZ1bmN0aW9uKGUpe2lmKCFyLmhhc0F0dHJpYnV0ZShlLm5hbWUpJiZiZShlLm5hbWUpKXt0LnJlbW92ZUF0dHJpYnV0ZShlLm5hbWUpfX0pO29lKHIuYXR0cmlidXRlcyxmdW5jdGlvbihlKXtpZihiZShlLm5hbWUpKXt0LnNldEF0dHJpYnV0ZShlLm5hbWUsZS52YWx1ZSl9fSl9ZnVuY3Rpb24gU2UoZSx0KXt2YXIgcj1Gcih0KTtmb3IodmFyIG49MDtuPHIubGVuZ3RoO24rKyl7dmFyIGk9cltuXTt0cnl7aWYoaS5pc0lubGluZVN3YXAoZSkpe3JldHVybiB0cnVlfX1jYXRjaChlKXtiKGUpfX1yZXR1cm4gZT09PVwib3V0ZXJIVE1MXCJ9ZnVuY3Rpb24gRWUoZSxpLGEpe3ZhciB0PVwiI1wiK2VlKGksXCJpZFwiKTt2YXIgbz1cIm91dGVySFRNTFwiO2lmKGU9PT1cInRydWVcIil7fWVsc2UgaWYoZS5pbmRleE9mKFwiOlwiKT4wKXtvPWUuc3Vic3RyKDAsZS5pbmRleE9mKFwiOlwiKSk7dD1lLnN1YnN0cihlLmluZGV4T2YoXCI6XCIpKzEsZS5sZW5ndGgpfWVsc2V7bz1lfXZhciByPXJlKCkucXVlcnlTZWxlY3RvckFsbCh0KTtpZihyKXtvZShyLGZ1bmN0aW9uKGUpe3ZhciB0O3ZhciByPWkuY2xvbmVOb2RlKHRydWUpO3Q9cmUoKS5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7dC5hcHBlbmRDaGlsZChyKTtpZighU2UobyxlKSl7dD1yfXZhciBuPXtzaG91bGRTd2FwOnRydWUsdGFyZ2V0OmUsZnJhZ21lbnQ6dH07aWYoIWNlKGUsXCJodG14Om9vYkJlZm9yZVN3YXBcIixuKSlyZXR1cm47ZT1uLnRhcmdldDtpZihuW1wic2hvdWxkU3dhcFwiXSl7RmUobyxlLGUsdCxhKX1vZShhLmVsdHMsZnVuY3Rpb24oZSl7Y2UoZSxcImh0bXg6b29iQWZ0ZXJTd2FwXCIsbil9KX0pO2kucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChpKX1lbHNle2kucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChpKTtmZShyZSgpLmJvZHksXCJodG14Om9vYkVycm9yTm9UYXJnZXRcIix7Y29udGVudDppfSl9cmV0dXJuIGV9ZnVuY3Rpb24gQ2UoZSx0LHIpe3ZhciBuPW5lKGUsXCJoeC1zZWxlY3Qtb29iXCIpO2lmKG4pe3ZhciBpPW4uc3BsaXQoXCIsXCIpO2Zvcih2YXIgYT0wO2E8aS5sZW5ndGg7YSsrKXt2YXIgbz1pW2FdLnNwbGl0KFwiOlwiLDIpO3ZhciBzPW9bMF0udHJpbSgpO2lmKHMuaW5kZXhPZihcIiNcIik9PT0wKXtzPXMuc3Vic3RyaW5nKDEpfXZhciBsPW9bMV18fFwidHJ1ZVwiO3ZhciB1PXQucXVlcnlTZWxlY3RvcihcIiNcIitzKTtpZih1KXtFZShsLHUscil9fX1vZShmKHQsXCJbaHgtc3dhcC1vb2JdLCBbZGF0YS1oeC1zd2FwLW9vYl1cIiksZnVuY3Rpb24oZSl7dmFyIHQ9dGUoZSxcImh4LXN3YXAtb29iXCIpO2lmKHQhPW51bGwpe0VlKHQsZSxyKX19KX1mdW5jdGlvbiBSZShlKXtvZShmKGUsXCJbaHgtcHJlc2VydmVdLCBbZGF0YS1oeC1wcmVzZXJ2ZV1cIiksZnVuY3Rpb24oZSl7dmFyIHQ9dGUoZSxcImlkXCIpO3ZhciByPXJlKCkuZ2V0RWxlbWVudEJ5SWQodCk7aWYociE9bnVsbCl7ZS5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChyLGUpfX0pfWZ1bmN0aW9uIFRlKG8sZSxzKXtvZShlLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbaWRdXCIpLGZ1bmN0aW9uKGUpe3ZhciB0PWVlKGUsXCJpZFwiKTtpZih0JiZ0Lmxlbmd0aD4wKXt2YXIgcj10LnJlcGxhY2UoXCInXCIsXCJcXFxcJ1wiKTt2YXIgbj1lLnRhZ05hbWUucmVwbGFjZShcIjpcIixcIlxcXFw6XCIpO3ZhciBpPW8ucXVlcnlTZWxlY3RvcihuK1wiW2lkPSdcIityK1wiJ11cIik7aWYoaSYmaSE9PW8pe3ZhciBhPWUuY2xvbmVOb2RlKCk7d2UoZSxpKTtzLnRhc2tzLnB1c2goZnVuY3Rpb24oKXt3ZShlLGEpfSl9fX0pfWZ1bmN0aW9uIE9lKGUpe3JldHVybiBmdW5jdGlvbigpe24oZSxRLmNvbmZpZy5hZGRlZENsYXNzKTt6dChlKTtOdChlKTtxZShlKTtjZShlLFwiaHRteDpsb2FkXCIpfX1mdW5jdGlvbiBxZShlKXt2YXIgdD1cIlthdXRvZm9jdXNdXCI7dmFyIHI9aChlLHQpP2U6ZS5xdWVyeVNlbGVjdG9yKHQpO2lmKHIhPW51bGwpe3IuZm9jdXMoKX19ZnVuY3Rpb24gbShlLHQscixuKXtUZShlLHIsbik7d2hpbGUoci5jaGlsZE5vZGVzLmxlbmd0aD4wKXt2YXIgaT1yLmZpcnN0Q2hpbGQ7eihpLFEuY29uZmlnLmFkZGVkQ2xhc3MpO2UuaW5zZXJ0QmVmb3JlKGksdCk7aWYoaS5ub2RlVHlwZSE9PU5vZGUuVEVYVF9OT0RFJiZpLm5vZGVUeXBlIT09Tm9kZS5DT01NRU5UX05PREUpe24udGFza3MucHVzaChPZShpKSl9fX1mdW5jdGlvbiBIZShlLHQpe3ZhciByPTA7d2hpbGUocjxlLmxlbmd0aCl7dD0odDw8NSktdCtlLmNoYXJDb2RlQXQocisrKXwwfXJldHVybiB0fWZ1bmN0aW9uIExlKGUpe3ZhciB0PTA7aWYoZS5hdHRyaWJ1dGVzKXtmb3IodmFyIHI9MDtyPGUuYXR0cmlidXRlcy5sZW5ndGg7cisrKXt2YXIgbj1lLmF0dHJpYnV0ZXNbcl07aWYobi52YWx1ZSl7dD1IZShuLm5hbWUsdCk7dD1IZShuLnZhbHVlLHQpfX19cmV0dXJuIHR9ZnVuY3Rpb24gQWUoZSl7dmFyIHQ9YWUoZSk7aWYodC5vbkhhbmRsZXJzKXtmb3IodmFyIHI9MDtyPHQub25IYW5kbGVycy5sZW5ndGg7cisrKXtjb25zdCBuPXQub25IYW5kbGVyc1tyXTtlLnJlbW92ZUV2ZW50TGlzdGVuZXIobi5ldmVudCxuLmxpc3RlbmVyKX1kZWxldGUgdC5vbkhhbmRsZXJzfX1mdW5jdGlvbiBOZShlKXt2YXIgdD1hZShlKTtpZih0LnRpbWVvdXQpe2NsZWFyVGltZW91dCh0LnRpbWVvdXQpfWlmKHQud2ViU29ja2V0KXt0LndlYlNvY2tldC5jbG9zZSgpfWlmKHQuc3NlRXZlbnRTb3VyY2Upe3Quc3NlRXZlbnRTb3VyY2UuY2xvc2UoKX1pZih0Lmxpc3RlbmVySW5mb3Mpe29lKHQubGlzdGVuZXJJbmZvcyxmdW5jdGlvbihlKXtpZihlLm9uKXtlLm9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoZS50cmlnZ2VyLGUubGlzdGVuZXIpfX0pfUFlKGUpO29lKE9iamVjdC5rZXlzKHQpLGZ1bmN0aW9uKGUpe2RlbGV0ZSB0W2VdfSl9ZnVuY3Rpb24gcChlKXtjZShlLFwiaHRteDpiZWZvcmVDbGVhbnVwRWxlbWVudFwiKTtOZShlKTtpZihlLmNoaWxkcmVuKXtvZShlLmNoaWxkcmVuLGZ1bmN0aW9uKGUpe3AoZSl9KX19ZnVuY3Rpb24gSWUodCxlLHIpe2lmKHQudGFnTmFtZT09PVwiQk9EWVwiKXtyZXR1cm4gVWUodCxlLHIpfWVsc2V7dmFyIG47dmFyIGk9dC5wcmV2aW91c1NpYmxpbmc7bSh1KHQpLHQsZSxyKTtpZihpPT1udWxsKXtuPXUodCkuZmlyc3RDaGlsZH1lbHNle249aS5uZXh0U2libGluZ31yLmVsdHM9ci5lbHRzLmZpbHRlcihmdW5jdGlvbihlKXtyZXR1cm4gZSE9dH0pO3doaWxlKG4mJm4hPT10KXtpZihuLm5vZGVUeXBlPT09Tm9kZS5FTEVNRU5UX05PREUpe3IuZWx0cy5wdXNoKG4pfW49bi5uZXh0RWxlbWVudFNpYmxpbmd9cCh0KTt1KHQpLnJlbW92ZUNoaWxkKHQpfX1mdW5jdGlvbiBrZShlLHQscil7cmV0dXJuIG0oZSxlLmZpcnN0Q2hpbGQsdCxyKX1mdW5jdGlvbiBQZShlLHQscil7cmV0dXJuIG0odShlKSxlLHQscil9ZnVuY3Rpb24gTWUoZSx0LHIpe3JldHVybiBtKGUsbnVsbCx0LHIpfWZ1bmN0aW9uIFhlKGUsdCxyKXtyZXR1cm4gbSh1KGUpLGUubmV4dFNpYmxpbmcsdCxyKX1mdW5jdGlvbiBEZShlLHQscil7cChlKTtyZXR1cm4gdShlKS5yZW1vdmVDaGlsZChlKX1mdW5jdGlvbiBVZShlLHQscil7dmFyIG49ZS5maXJzdENoaWxkO20oZSxuLHQscik7aWYobil7d2hpbGUobi5uZXh0U2libGluZyl7cChuLm5leHRTaWJsaW5nKTtlLnJlbW92ZUNoaWxkKG4ubmV4dFNpYmxpbmcpfXAobik7ZS5yZW1vdmVDaGlsZChuKX19ZnVuY3Rpb24gQmUoZSx0LHIpe3ZhciBuPXJ8fG5lKGUsXCJoeC1zZWxlY3RcIik7aWYobil7dmFyIGk9cmUoKS5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7b2UodC5xdWVyeVNlbGVjdG9yQWxsKG4pLGZ1bmN0aW9uKGUpe2kuYXBwZW5kQ2hpbGQoZSl9KTt0PWl9cmV0dXJuIHR9ZnVuY3Rpb24gRmUoZSx0LHIsbixpKXtzd2l0Y2goZSl7Y2FzZVwibm9uZVwiOnJldHVybjtjYXNlXCJvdXRlckhUTUxcIjpJZShyLG4saSk7cmV0dXJuO2Nhc2VcImFmdGVyYmVnaW5cIjprZShyLG4saSk7cmV0dXJuO2Nhc2VcImJlZm9yZWJlZ2luXCI6UGUocixuLGkpO3JldHVybjtjYXNlXCJiZWZvcmVlbmRcIjpNZShyLG4saSk7cmV0dXJuO2Nhc2VcImFmdGVyZW5kXCI6WGUocixuLGkpO3JldHVybjtjYXNlXCJkZWxldGVcIjpEZShyLG4saSk7cmV0dXJuO2RlZmF1bHQ6dmFyIGE9RnIodCk7Zm9yKHZhciBvPTA7bzxhLmxlbmd0aDtvKyspe3ZhciBzPWFbb107dHJ5e3ZhciBsPXMuaGFuZGxlU3dhcChlLHIsbixpKTtpZihsKXtpZih0eXBlb2YgbC5sZW5ndGghPT1cInVuZGVmaW5lZFwiKXtmb3IodmFyIHU9MDt1PGwubGVuZ3RoO3UrKyl7dmFyIGY9bFt1XTtpZihmLm5vZGVUeXBlIT09Tm9kZS5URVhUX05PREUmJmYubm9kZVR5cGUhPT1Ob2RlLkNPTU1FTlRfTk9ERSl7aS50YXNrcy5wdXNoKE9lKGYpKX19fXJldHVybn19Y2F0Y2goZSl7YihlKX19aWYoZT09PVwiaW5uZXJIVE1MXCIpe1VlKHIsbixpKX1lbHNle0ZlKFEuY29uZmlnLmRlZmF1bHRTd2FwU3R5bGUsdCxyLG4saSl9fX1mdW5jdGlvbiBWZShlKXtpZihlLmluZGV4T2YoXCI8dGl0bGVcIik+LTEpe3ZhciB0PWUucmVwbGFjZShILFwiXCIpO3ZhciByPXQubWF0Y2gocSk7aWYocil7cmV0dXJuIHJbMl19fX1mdW5jdGlvbiBqZShlLHQscixuLGksYSl7aS50aXRsZT1WZShuKTt2YXIgbz1sKG4pO2lmKG8pe0NlKHIsbyxpKTtvPUJlKHIsbyxhKTtSZShvKTtyZXR1cm4gRmUoZSxyLHQsbyxpKX19ZnVuY3Rpb24gX2UoZSx0LHIpe3ZhciBuPWUuZ2V0UmVzcG9uc2VIZWFkZXIodCk7aWYobi5pbmRleE9mKFwie1wiKT09PTApe3ZhciBpPUUobik7Zm9yKHZhciBhIGluIGkpe2lmKGkuaGFzT3duUHJvcGVydHkoYSkpe3ZhciBvPWlbYV07aWYoIVAobykpe289e3ZhbHVlOm99fWNlKHIsYSxvKX19fWVsc2V7dmFyIHM9bi5zcGxpdChcIixcIik7Zm9yKHZhciBsPTA7bDxzLmxlbmd0aDtsKyspe2NlKHIsc1tsXS50cmltKCksW10pfX19dmFyIHplPS9cXHMvO3ZhciB4PS9bXFxzLF0vO3ZhciAkZT0vW18kYS16QS1aXS87dmFyIFdlPS9bXyRhLXpBLVowLTldLzt2YXIgR2U9WydcIicsXCInXCIsXCIvXCJdO3ZhciBKZT0vW15cXHNdLzt2YXIgWmU9L1t7KF0vO3ZhciBLZT0vW30pXS87ZnVuY3Rpb24gWWUoZSl7dmFyIHQ9W107dmFyIHI9MDt3aGlsZShyPGUubGVuZ3RoKXtpZigkZS5leGVjKGUuY2hhckF0KHIpKSl7dmFyIG49cjt3aGlsZShXZS5leGVjKGUuY2hhckF0KHIrMSkpKXtyKyt9dC5wdXNoKGUuc3Vic3RyKG4sci1uKzEpKX1lbHNlIGlmKEdlLmluZGV4T2YoZS5jaGFyQXQocikpIT09LTEpe3ZhciBpPWUuY2hhckF0KHIpO3ZhciBuPXI7cisrO3doaWxlKHI8ZS5sZW5ndGgmJmUuY2hhckF0KHIpIT09aSl7aWYoZS5jaGFyQXQocik9PT1cIlxcXFxcIil7cisrfXIrK310LnB1c2goZS5zdWJzdHIobixyLW4rMSkpfWVsc2V7dmFyIGE9ZS5jaGFyQXQocik7dC5wdXNoKGEpfXIrK31yZXR1cm4gdH1mdW5jdGlvbiBRZShlLHQscil7cmV0dXJuICRlLmV4ZWMoZS5jaGFyQXQoMCkpJiZlIT09XCJ0cnVlXCImJmUhPT1cImZhbHNlXCImJmUhPT1cInRoaXNcIiYmZSE9PXImJnQhPT1cIi5cIn1mdW5jdGlvbiBldChlLHQscil7aWYodFswXT09PVwiW1wiKXt0LnNoaWZ0KCk7dmFyIG49MTt2YXIgaT1cIiByZXR1cm4gKGZ1bmN0aW9uKFwiK3IrXCIpeyByZXR1cm4gKFwiO3ZhciBhPW51bGw7d2hpbGUodC5sZW5ndGg+MCl7dmFyIG89dFswXTtpZihvPT09XCJdXCIpe24tLTtpZihuPT09MCl7aWYoYT09PW51bGwpe2k9aStcInRydWVcIn10LnNoaWZ0KCk7aSs9XCIpfSlcIjt0cnl7dmFyIHM9VHIoZSxmdW5jdGlvbigpe3JldHVybiBGdW5jdGlvbihpKSgpfSxmdW5jdGlvbigpe3JldHVybiB0cnVlfSk7cy5zb3VyY2U9aTtyZXR1cm4gc31jYXRjaChlKXtmZShyZSgpLmJvZHksXCJodG14OnN5bnRheDplcnJvclwiLHtlcnJvcjplLHNvdXJjZTppfSk7cmV0dXJuIG51bGx9fX1lbHNlIGlmKG89PT1cIltcIil7bisrfWlmKFFlKG8sYSxyKSl7aSs9XCIoKFwiK3IrXCIuXCIrbytcIikgPyAoXCIrcitcIi5cIitvK1wiKSA6ICh3aW5kb3cuXCIrbytcIikpXCJ9ZWxzZXtpPWkrb31hPXQuc2hpZnQoKX19fWZ1bmN0aW9uIHkoZSx0KXt2YXIgcj1cIlwiO3doaWxlKGUubGVuZ3RoPjAmJiF0LnRlc3QoZVswXSkpe3IrPWUuc2hpZnQoKX1yZXR1cm4gcn1mdW5jdGlvbiB0dChlKXt2YXIgdDtpZihlLmxlbmd0aD4wJiZaZS50ZXN0KGVbMF0pKXtlLnNoaWZ0KCk7dD15KGUsS2UpLnRyaW0oKTtlLnNoaWZ0KCl9ZWxzZXt0PXkoZSx4KX1yZXR1cm4gdH12YXIgcnQ9XCJpbnB1dCwgdGV4dGFyZWEsIHNlbGVjdFwiO2Z1bmN0aW9uIG50KGUsdCxyKXt2YXIgbj1bXTt2YXIgaT1ZZSh0KTtkb3t5KGksSmUpO3ZhciBhPWkubGVuZ3RoO3ZhciBvPXkoaSwvWyxcXFtcXHNdLyk7aWYobyE9PVwiXCIpe2lmKG89PT1cImV2ZXJ5XCIpe3ZhciBzPXt0cmlnZ2VyOlwiZXZlcnlcIn07eShpLEplKTtzLnBvbGxJbnRlcnZhbD1kKHkoaSwvWyxcXFtcXHNdLykpO3koaSxKZSk7dmFyIGw9ZXQoZSxpLFwiZXZlbnRcIik7aWYobCl7cy5ldmVudEZpbHRlcj1sfW4ucHVzaChzKX1lbHNlIGlmKG8uaW5kZXhPZihcInNzZTpcIik9PT0wKXtuLnB1c2goe3RyaWdnZXI6XCJzc2VcIixzc2VFdmVudDpvLnN1YnN0cig0KX0pfWVsc2V7dmFyIHU9e3RyaWdnZXI6b307dmFyIGw9ZXQoZSxpLFwiZXZlbnRcIik7aWYobCl7dS5ldmVudEZpbHRlcj1sfXdoaWxlKGkubGVuZ3RoPjAmJmlbMF0hPT1cIixcIil7eShpLEplKTt2YXIgZj1pLnNoaWZ0KCk7aWYoZj09PVwiY2hhbmdlZFwiKXt1LmNoYW5nZWQ9dHJ1ZX1lbHNlIGlmKGY9PT1cIm9uY2VcIil7dS5vbmNlPXRydWV9ZWxzZSBpZihmPT09XCJjb25zdW1lXCIpe3UuY29uc3VtZT10cnVlfWVsc2UgaWYoZj09PVwiZGVsYXlcIiYmaVswXT09PVwiOlwiKXtpLnNoaWZ0KCk7dS5kZWxheT1kKHkoaSx4KSl9ZWxzZSBpZihmPT09XCJmcm9tXCImJmlbMF09PT1cIjpcIil7aS5zaGlmdCgpO2lmKFplLnRlc3QoaVswXSkpe3ZhciBjPXR0KGkpfWVsc2V7dmFyIGM9eShpLHgpO2lmKGM9PT1cImNsb3Nlc3RcInx8Yz09PVwiZmluZFwifHxjPT09XCJuZXh0XCJ8fGM9PT1cInByZXZpb3VzXCIpe2kuc2hpZnQoKTt2YXIgaD10dChpKTtpZihoLmxlbmd0aD4wKXtjKz1cIiBcIitofX19dS5mcm9tPWN9ZWxzZSBpZihmPT09XCJ0YXJnZXRcIiYmaVswXT09PVwiOlwiKXtpLnNoaWZ0KCk7dS50YXJnZXQ9dHQoaSl9ZWxzZSBpZihmPT09XCJ0aHJvdHRsZVwiJiZpWzBdPT09XCI6XCIpe2kuc2hpZnQoKTt1LnRocm90dGxlPWQoeShpLHgpKX1lbHNlIGlmKGY9PT1cInF1ZXVlXCImJmlbMF09PT1cIjpcIil7aS5zaGlmdCgpO3UucXVldWU9eShpLHgpfWVsc2UgaWYoZj09PVwicm9vdFwiJiZpWzBdPT09XCI6XCIpe2kuc2hpZnQoKTt1W2ZdPXR0KGkpfWVsc2UgaWYoZj09PVwidGhyZXNob2xkXCImJmlbMF09PT1cIjpcIil7aS5zaGlmdCgpO3VbZl09eShpLHgpfWVsc2V7ZmUoZSxcImh0bXg6c3ludGF4OmVycm9yXCIse3Rva2VuOmkuc2hpZnQoKX0pfX1uLnB1c2godSl9fWlmKGkubGVuZ3RoPT09YSl7ZmUoZSxcImh0bXg6c3ludGF4OmVycm9yXCIse3Rva2VuOmkuc2hpZnQoKX0pfXkoaSxKZSl9d2hpbGUoaVswXT09PVwiLFwiJiZpLnNoaWZ0KCkpO2lmKHIpe3JbdF09bn1yZXR1cm4gbn1mdW5jdGlvbiBpdChlKXt2YXIgdD10ZShlLFwiaHgtdHJpZ2dlclwiKTt2YXIgcj1bXTtpZih0KXt2YXIgbj1RLmNvbmZpZy50cmlnZ2VyU3BlY3NDYWNoZTtyPW4mJm5bdF18fG50KGUsdCxuKX1pZihyLmxlbmd0aD4wKXtyZXR1cm4gcn1lbHNlIGlmKGgoZSxcImZvcm1cIikpe3JldHVyblt7dHJpZ2dlcjpcInN1Ym1pdFwifV19ZWxzZSBpZihoKGUsJ2lucHV0W3R5cGU9XCJidXR0b25cIl0sIGlucHV0W3R5cGU9XCJzdWJtaXRcIl0nKSl7cmV0dXJuW3t0cmlnZ2VyOlwiY2xpY2tcIn1dfWVsc2UgaWYoaChlLHJ0KSl7cmV0dXJuW3t0cmlnZ2VyOlwiY2hhbmdlXCJ9XX1lbHNle3JldHVyblt7dHJpZ2dlcjpcImNsaWNrXCJ9XX19ZnVuY3Rpb24gYXQoZSl7YWUoZSkuY2FuY2VsbGVkPXRydWV9ZnVuY3Rpb24gb3QoZSx0LHIpe3ZhciBuPWFlKGUpO24udGltZW91dD1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7aWYoc2UoZSkmJm4uY2FuY2VsbGVkIT09dHJ1ZSl7aWYoIWN0KHIsZSxXdChcImh4OnBvbGw6dHJpZ2dlclwiLHt0cmlnZ2VyU3BlYzpyLHRhcmdldDplfSkpKXt0KGUpfW90KGUsdCxyKX19LHIucG9sbEludGVydmFsKX1mdW5jdGlvbiBzdChlKXtyZXR1cm4gbG9jYXRpb24uaG9zdG5hbWU9PT1lLmhvc3RuYW1lJiZlZShlLFwiaHJlZlwiKSYmZWUoZSxcImhyZWZcIikuaW5kZXhPZihcIiNcIikhPT0wfWZ1bmN0aW9uIGx0KHQscixlKXtpZih0LnRhZ05hbWU9PT1cIkFcIiYmc3QodCkmJih0LnRhcmdldD09PVwiXCJ8fHQudGFyZ2V0PT09XCJfc2VsZlwiKXx8dC50YWdOYW1lPT09XCJGT1JNXCIpe3IuYm9vc3RlZD10cnVlO3ZhciBuLGk7aWYodC50YWdOYW1lPT09XCJBXCIpe249XCJnZXRcIjtpPWVlKHQsXCJocmVmXCIpfWVsc2V7dmFyIGE9ZWUodCxcIm1ldGhvZFwiKTtuPWE/YS50b0xvd2VyQ2FzZSgpOlwiZ2V0XCI7aWYobj09PVwiZ2V0XCIpe31pPWVlKHQsXCJhY3Rpb25cIil9ZS5mb3JFYWNoKGZ1bmN0aW9uKGUpe2h0KHQsZnVuY3Rpb24oZSx0KXtpZih2KGUsUS5jb25maWcuZGlzYWJsZVNlbGVjdG9yKSl7cChlKTtyZXR1cm59aGUobixpLGUsdCl9LHIsZSx0cnVlKX0pfX1mdW5jdGlvbiB1dChlLHQpe2lmKGUudHlwZT09PVwic3VibWl0XCJ8fGUudHlwZT09PVwiY2xpY2tcIil7aWYodC50YWdOYW1lPT09XCJGT1JNXCIpe3JldHVybiB0cnVlfWlmKGgodCwnaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSwgYnV0dG9uJykmJnYodCxcImZvcm1cIikhPT1udWxsKXtyZXR1cm4gdHJ1ZX1pZih0LnRhZ05hbWU9PT1cIkFcIiYmdC5ocmVmJiYodC5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpPT09XCIjXCJ8fHQuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKS5pbmRleE9mKFwiI1wiKSE9PTApKXtyZXR1cm4gdHJ1ZX19cmV0dXJuIGZhbHNlfWZ1bmN0aW9uIGZ0KGUsdCl7cmV0dXJuIGFlKGUpLmJvb3N0ZWQmJmUudGFnTmFtZT09PVwiQVwiJiZ0LnR5cGU9PT1cImNsaWNrXCImJih0LmN0cmxLZXl8fHQubWV0YUtleSl9ZnVuY3Rpb24gY3QoZSx0LHIpe3ZhciBuPWUuZXZlbnRGaWx0ZXI7aWYobil7dHJ5e3JldHVybiBuLmNhbGwodCxyKSE9PXRydWV9Y2F0Y2goZSl7ZmUocmUoKS5ib2R5LFwiaHRteDpldmVudEZpbHRlcjplcnJvclwiLHtlcnJvcjplLHNvdXJjZTpuLnNvdXJjZX0pO3JldHVybiB0cnVlfX1yZXR1cm4gZmFsc2V9ZnVuY3Rpb24gaHQoYSxvLGUscyxsKXt2YXIgdT1hZShhKTt2YXIgdDtpZihzLmZyb20pe3Q9WihhLHMuZnJvbSl9ZWxzZXt0PVthXX1pZihzLmNoYW5nZWQpe3QuZm9yRWFjaChmdW5jdGlvbihlKXt2YXIgdD1hZShlKTt0Lmxhc3RWYWx1ZT1lLnZhbHVlfSl9b2UodCxmdW5jdGlvbihuKXt2YXIgaT1mdW5jdGlvbihlKXtpZighc2UoYSkpe24ucmVtb3ZlRXZlbnRMaXN0ZW5lcihzLnRyaWdnZXIsaSk7cmV0dXJufWlmKGZ0KGEsZSkpe3JldHVybn1pZihsfHx1dChlLGEpKXtlLnByZXZlbnREZWZhdWx0KCl9aWYoY3QocyxhLGUpKXtyZXR1cm59dmFyIHQ9YWUoZSk7dC50cmlnZ2VyU3BlYz1zO2lmKHQuaGFuZGxlZEZvcj09bnVsbCl7dC5oYW5kbGVkRm9yPVtdfWlmKHQuaGFuZGxlZEZvci5pbmRleE9mKGEpPDApe3QuaGFuZGxlZEZvci5wdXNoKGEpO2lmKHMuY29uc3VtZSl7ZS5zdG9wUHJvcGFnYXRpb24oKX1pZihzLnRhcmdldCYmZS50YXJnZXQpe2lmKCFoKGUudGFyZ2V0LHMudGFyZ2V0KSl7cmV0dXJufX1pZihzLm9uY2Upe2lmKHUudHJpZ2dlcmVkT25jZSl7cmV0dXJufWVsc2V7dS50cmlnZ2VyZWRPbmNlPXRydWV9fWlmKHMuY2hhbmdlZCl7dmFyIHI9YWUobik7aWYoci5sYXN0VmFsdWU9PT1uLnZhbHVlKXtyZXR1cm59ci5sYXN0VmFsdWU9bi52YWx1ZX1pZih1LmRlbGF5ZWQpe2NsZWFyVGltZW91dCh1LmRlbGF5ZWQpfWlmKHUudGhyb3R0bGUpe3JldHVybn1pZihzLnRocm90dGxlPjApe2lmKCF1LnRocm90dGxlKXtvKGEsZSk7dS50aHJvdHRsZT1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7dS50aHJvdHRsZT1udWxsfSxzLnRocm90dGxlKX19ZWxzZSBpZihzLmRlbGF5PjApe3UuZGVsYXllZD1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7byhhLGUpfSxzLmRlbGF5KX1lbHNle2NlKGEsXCJodG14OnRyaWdnZXJcIik7byhhLGUpfX19O2lmKGUubGlzdGVuZXJJbmZvcz09bnVsbCl7ZS5saXN0ZW5lckluZm9zPVtdfWUubGlzdGVuZXJJbmZvcy5wdXNoKHt0cmlnZ2VyOnMudHJpZ2dlcixsaXN0ZW5lcjppLG9uOm59KTtuLmFkZEV2ZW50TGlzdGVuZXIocy50cmlnZ2VyLGkpfSl9dmFyIHZ0PWZhbHNlO3ZhciBkdD1udWxsO2Z1bmN0aW9uIGd0KCl7aWYoIWR0KXtkdD1mdW5jdGlvbigpe3Z0PXRydWV9O3dpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsZHQpO3NldEludGVydmFsKGZ1bmN0aW9uKCl7aWYodnQpe3Z0PWZhbHNlO29lKHJlKCkucXVlcnlTZWxlY3RvckFsbChcIltoeC10cmlnZ2VyPSdyZXZlYWxlZCddLFtkYXRhLWh4LXRyaWdnZXI9J3JldmVhbGVkJ11cIiksZnVuY3Rpb24oZSl7bXQoZSl9KX19LDIwMCl9fWZ1bmN0aW9uIG10KHQpe2lmKCFvKHQsXCJkYXRhLWh4LXJldmVhbGVkXCIpJiZYKHQpKXt0LnNldEF0dHJpYnV0ZShcImRhdGEtaHgtcmV2ZWFsZWRcIixcInRydWVcIik7dmFyIGU9YWUodCk7aWYoZS5pbml0SGFzaCl7Y2UodCxcInJldmVhbGVkXCIpfWVsc2V7dC5hZGRFdmVudExpc3RlbmVyKFwiaHRteDphZnRlclByb2Nlc3NOb2RlXCIsZnVuY3Rpb24oZSl7Y2UodCxcInJldmVhbGVkXCIpfSx7b25jZTp0cnVlfSl9fX1mdW5jdGlvbiBwdChlLHQscil7dmFyIG49RChyKTtmb3IodmFyIGk9MDtpPG4ubGVuZ3RoO2krKyl7dmFyIGE9bltpXS5zcGxpdCgvOiguKykvKTtpZihhWzBdPT09XCJjb25uZWN0XCIpe3h0KGUsYVsxXSwwKX1pZihhWzBdPT09XCJzZW5kXCIpe2J0KGUpfX19ZnVuY3Rpb24geHQocyxyLG4pe2lmKCFzZShzKSl7cmV0dXJufWlmKHIuaW5kZXhPZihcIi9cIik9PTApe3ZhciBlPWxvY2F0aW9uLmhvc3RuYW1lKyhsb2NhdGlvbi5wb3J0P1wiOlwiK2xvY2F0aW9uLnBvcnQ6XCJcIik7aWYobG9jYXRpb24ucHJvdG9jb2w9PVwiaHR0cHM6XCIpe3I9XCJ3c3M6Ly9cIitlK3J9ZWxzZSBpZihsb2NhdGlvbi5wcm90b2NvbD09XCJodHRwOlwiKXtyPVwid3M6Ly9cIitlK3J9fXZhciB0PVEuY3JlYXRlV2ViU29ja2V0KHIpO3Qub25lcnJvcj1mdW5jdGlvbihlKXtmZShzLFwiaHRteDp3c0Vycm9yXCIse2Vycm9yOmUsc29ja2V0OnR9KTt5dChzKX07dC5vbmNsb3NlPWZ1bmN0aW9uKGUpe2lmKFsxMDA2LDEwMTIsMTAxM10uaW5kZXhPZihlLmNvZGUpPj0wKXt2YXIgdD13dChuKTtzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7eHQocyxyLG4rMSl9LHQpfX07dC5vbm9wZW49ZnVuY3Rpb24oZSl7bj0wfTthZShzKS53ZWJTb2NrZXQ9dDt0LmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsZnVuY3Rpb24oZSl7aWYoeXQocykpe3JldHVybn12YXIgdD1lLmRhdGE7UihzLGZ1bmN0aW9uKGUpe3Q9ZS50cmFuc2Zvcm1SZXNwb25zZSh0LG51bGwscyl9KTt2YXIgcj1UKHMpO3ZhciBuPWwodCk7dmFyIGk9TShuLmNoaWxkcmVuKTtmb3IodmFyIGE9MDthPGkubGVuZ3RoO2ErKyl7dmFyIG89aVthXTtFZSh0ZShvLFwiaHgtc3dhcC1vb2JcIil8fFwidHJ1ZVwiLG8scil9bnIoci50YXNrcyl9KX1mdW5jdGlvbiB5dChlKXtpZighc2UoZSkpe2FlKGUpLndlYlNvY2tldC5jbG9zZSgpO3JldHVybiB0cnVlfX1mdW5jdGlvbiBidCh1KXt2YXIgZj1jKHUsZnVuY3Rpb24oZSl7cmV0dXJuIGFlKGUpLndlYlNvY2tldCE9bnVsbH0pO2lmKGYpe3UuYWRkRXZlbnRMaXN0ZW5lcihpdCh1KVswXS50cmlnZ2VyLGZ1bmN0aW9uKGUpe3ZhciB0PWFlKGYpLndlYlNvY2tldDt2YXIgcj14cih1LGYpO3ZhciBuPWRyKHUsXCJwb3N0XCIpO3ZhciBpPW4uZXJyb3JzO3ZhciBhPW4udmFsdWVzO3ZhciBvPUhyKHUpO3ZhciBzPWxlKGEsbyk7dmFyIGw9eXIocyx1KTtsW1wiSEVBREVSU1wiXT1yO2lmKGkmJmkubGVuZ3RoPjApe2NlKHUsXCJodG14OnZhbGlkYXRpb246aGFsdGVkXCIsaSk7cmV0dXJufXQuc2VuZChKU09OLnN0cmluZ2lmeShsKSk7aWYodXQoZSx1KSl7ZS5wcmV2ZW50RGVmYXVsdCgpfX0pfWVsc2V7ZmUodSxcImh0bXg6bm9XZWJTb2NrZXRTb3VyY2VFcnJvclwiKX19ZnVuY3Rpb24gd3QoZSl7dmFyIHQ9US5jb25maWcud3NSZWNvbm5lY3REZWxheTtpZih0eXBlb2YgdD09PVwiZnVuY3Rpb25cIil7cmV0dXJuIHQoZSl9aWYodD09PVwiZnVsbC1qaXR0ZXJcIil7dmFyIHI9TWF0aC5taW4oZSw2KTt2YXIgbj0xZTMqTWF0aC5wb3coMixyKTtyZXR1cm4gbipNYXRoLnJhbmRvbSgpfWIoJ2h0bXguY29uZmlnLndzUmVjb25uZWN0RGVsYXkgbXVzdCBlaXRoZXIgYmUgYSBmdW5jdGlvbiBvciB0aGUgc3RyaW5nIFwiZnVsbC1qaXR0ZXJcIicpfWZ1bmN0aW9uIFN0KGUsdCxyKXt2YXIgbj1EKHIpO2Zvcih2YXIgaT0wO2k8bi5sZW5ndGg7aSsrKXt2YXIgYT1uW2ldLnNwbGl0KC86KC4rKS8pO2lmKGFbMF09PT1cImNvbm5lY3RcIil7RXQoZSxhWzFdKX1pZihhWzBdPT09XCJzd2FwXCIpe0N0KGUsYVsxXSl9fX1mdW5jdGlvbiBFdCh0LGUpe3ZhciByPVEuY3JlYXRlRXZlbnRTb3VyY2UoZSk7ci5vbmVycm9yPWZ1bmN0aW9uKGUpe2ZlKHQsXCJodG14OnNzZUVycm9yXCIse2Vycm9yOmUsc291cmNlOnJ9KTtUdCh0KX07YWUodCkuc3NlRXZlbnRTb3VyY2U9cn1mdW5jdGlvbiBDdChhLG8pe3ZhciBzPWMoYSxPdCk7aWYocyl7dmFyIGw9YWUocykuc3NlRXZlbnRTb3VyY2U7dmFyIHU9ZnVuY3Rpb24oZSl7aWYoVHQocykpe3JldHVybn1pZighc2UoYSkpe2wucmVtb3ZlRXZlbnRMaXN0ZW5lcihvLHUpO3JldHVybn12YXIgdD1lLmRhdGE7UihhLGZ1bmN0aW9uKGUpe3Q9ZS50cmFuc2Zvcm1SZXNwb25zZSh0LG51bGwsYSl9KTt2YXIgcj13cihhKTt2YXIgbj15ZShhKTt2YXIgaT1UKGEpO2plKHIuc3dhcFN0eWxlLG4sYSx0LGkpO25yKGkudGFza3MpO2NlKGEsXCJodG14OnNzZU1lc3NhZ2VcIixlKX07YWUoYSkuc3NlTGlzdGVuZXI9dTtsLmFkZEV2ZW50TGlzdGVuZXIobyx1KX1lbHNle2ZlKGEsXCJodG14Om5vU1NFU291cmNlRXJyb3JcIil9fWZ1bmN0aW9uIFJ0KGUsdCxyKXt2YXIgbj1jKGUsT3QpO2lmKG4pe3ZhciBpPWFlKG4pLnNzZUV2ZW50U291cmNlO3ZhciBhPWZ1bmN0aW9uKCl7aWYoIVR0KG4pKXtpZihzZShlKSl7dChlKX1lbHNle2kucmVtb3ZlRXZlbnRMaXN0ZW5lcihyLGEpfX19O2FlKGUpLnNzZUxpc3RlbmVyPWE7aS5hZGRFdmVudExpc3RlbmVyKHIsYSl9ZWxzZXtmZShlLFwiaHRteDpub1NTRVNvdXJjZUVycm9yXCIpfX1mdW5jdGlvbiBUdChlKXtpZighc2UoZSkpe2FlKGUpLnNzZUV2ZW50U291cmNlLmNsb3NlKCk7cmV0dXJuIHRydWV9fWZ1bmN0aW9uIE90KGUpe3JldHVybiBhZShlKS5zc2VFdmVudFNvdXJjZSE9bnVsbH1mdW5jdGlvbiBxdChlLHQscixuKXt2YXIgaT1mdW5jdGlvbigpe2lmKCFyLmxvYWRlZCl7ci5sb2FkZWQ9dHJ1ZTt0KGUpfX07aWYobj4wKXtzZXRUaW1lb3V0KGksbil9ZWxzZXtpKCl9fWZ1bmN0aW9uIEh0KHQsaSxlKXt2YXIgYT1mYWxzZTtvZSh3LGZ1bmN0aW9uKHIpe2lmKG8odCxcImh4LVwiK3IpKXt2YXIgbj10ZSh0LFwiaHgtXCIrcik7YT10cnVlO2kucGF0aD1uO2kudmVyYj1yO2UuZm9yRWFjaChmdW5jdGlvbihlKXtMdCh0LGUsaSxmdW5jdGlvbihlLHQpe2lmKHYoZSxRLmNvbmZpZy5kaXNhYmxlU2VsZWN0b3IpKXtwKGUpO3JldHVybn1oZShyLG4sZSx0KX0pfSl9fSk7cmV0dXJuIGF9ZnVuY3Rpb24gTHQobixlLHQscil7aWYoZS5zc2VFdmVudCl7UnQobixyLGUuc3NlRXZlbnQpfWVsc2UgaWYoZS50cmlnZ2VyPT09XCJyZXZlYWxlZFwiKXtndCgpO2h0KG4scix0LGUpO210KG4pfWVsc2UgaWYoZS50cmlnZ2VyPT09XCJpbnRlcnNlY3RcIil7dmFyIGk9e307aWYoZS5yb290KXtpLnJvb3Q9dWUobixlLnJvb3QpfWlmKGUudGhyZXNob2xkKXtpLnRocmVzaG9sZD1wYXJzZUZsb2F0KGUudGhyZXNob2xkKX12YXIgYT1uZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoZnVuY3Rpb24oZSl7Zm9yKHZhciB0PTA7dDxlLmxlbmd0aDt0Kyspe3ZhciByPWVbdF07aWYoci5pc0ludGVyc2VjdGluZyl7Y2UobixcImludGVyc2VjdFwiKTticmVha319fSxpKTthLm9ic2VydmUobik7aHQobixyLHQsZSl9ZWxzZSBpZihlLnRyaWdnZXI9PT1cImxvYWRcIil7aWYoIWN0KGUsbixXdChcImxvYWRcIix7ZWx0Om59KSkpe3F0KG4scix0LGUuZGVsYXkpfX1lbHNlIGlmKGUucG9sbEludGVydmFsPjApe3QucG9sbGluZz10cnVlO290KG4scixlKX1lbHNle2h0KG4scix0LGUpfX1mdW5jdGlvbiBBdChlKXtpZihRLmNvbmZpZy5hbGxvd1NjcmlwdFRhZ3MmJihlLnR5cGU9PT1cInRleHQvamF2YXNjcmlwdFwifHxlLnR5cGU9PT1cIm1vZHVsZVwifHxlLnR5cGU9PT1cIlwiKSl7dmFyIHQ9cmUoKS5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO29lKGUuYXR0cmlidXRlcyxmdW5jdGlvbihlKXt0LnNldEF0dHJpYnV0ZShlLm5hbWUsZS52YWx1ZSl9KTt0LnRleHRDb250ZW50PWUudGV4dENvbnRlbnQ7dC5hc3luYz1mYWxzZTtpZihRLmNvbmZpZy5pbmxpbmVTY3JpcHROb25jZSl7dC5ub25jZT1RLmNvbmZpZy5pbmxpbmVTY3JpcHROb25jZX12YXIgcj1lLnBhcmVudEVsZW1lbnQ7dHJ5e3IuaW5zZXJ0QmVmb3JlKHQsZSl9Y2F0Y2goZSl7YihlKX1maW5hbGx5e2lmKGUucGFyZW50RWxlbWVudCl7ZS5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKGUpfX19fWZ1bmN0aW9uIE50KGUpe2lmKGgoZSxcInNjcmlwdFwiKSl7QXQoZSl9b2UoZihlLFwic2NyaXB0XCIpLGZ1bmN0aW9uKGUpe0F0KGUpfSl9ZnVuY3Rpb24gSXQoZSl7dmFyIHQ9ZS5hdHRyaWJ1dGVzO2Zvcih2YXIgcj0wO3I8dC5sZW5ndGg7cisrKXt2YXIgbj10W3JdLm5hbWU7aWYocyhuLFwiaHgtb246XCIpfHxzKG4sXCJkYXRhLWh4LW9uOlwiKXx8cyhuLFwiaHgtb24tXCIpfHxzKG4sXCJkYXRhLWh4LW9uLVwiKSl7cmV0dXJuIHRydWV9fXJldHVybiBmYWxzZX1mdW5jdGlvbiBrdChlKXt2YXIgdD1udWxsO3ZhciByPVtdO2lmKEl0KGUpKXtyLnB1c2goZSl9aWYoZG9jdW1lbnQuZXZhbHVhdGUpe3ZhciBuPWRvY3VtZW50LmV2YWx1YXRlKCcuLy8qW0AqWyBzdGFydHMtd2l0aChuYW1lKCksIFwiaHgtb246XCIpIG9yIHN0YXJ0cy13aXRoKG5hbWUoKSwgXCJkYXRhLWh4LW9uOlwiKSBvcicrJyBzdGFydHMtd2l0aChuYW1lKCksIFwiaHgtb24tXCIpIG9yIHN0YXJ0cy13aXRoKG5hbWUoKSwgXCJkYXRhLWh4LW9uLVwiKSBdXScsZSk7d2hpbGUodD1uLml0ZXJhdGVOZXh0KCkpci5wdXNoKHQpfWVsc2V7dmFyIGk9ZS5nZXRFbGVtZW50c0J5VGFnTmFtZShcIipcIik7Zm9yKHZhciBhPTA7YTxpLmxlbmd0aDthKyspe2lmKEl0KGlbYV0pKXtyLnB1c2goaVthXSl9fX1yZXR1cm4gcn1mdW5jdGlvbiBQdChlKXtpZihlLnF1ZXJ5U2VsZWN0b3JBbGwpe3ZhciB0PVwiLCBbaHgtYm9vc3RdIGEsIFtkYXRhLWh4LWJvb3N0XSBhLCBhW2h4LWJvb3N0XSwgYVtkYXRhLWh4LWJvb3N0XVwiO3ZhciByPWUucXVlcnlTZWxlY3RvckFsbChpK3QrXCIsIGZvcm0sIFt0eXBlPSdzdWJtaXQnXSwgW2h4LXNzZV0sIFtkYXRhLWh4LXNzZV0sIFtoeC13c10sXCIrXCIgW2RhdGEtaHgtd3NdLCBbaHgtZXh0XSwgW2RhdGEtaHgtZXh0XSwgW2h4LXRyaWdnZXJdLCBbZGF0YS1oeC10cmlnZ2VyXSwgW2h4LW9uXSwgW2RhdGEtaHgtb25dXCIpO3JldHVybiByfWVsc2V7cmV0dXJuW119fWZ1bmN0aW9uIE10KGUpe3ZhciB0PXYoZS50YXJnZXQsXCJidXR0b24sIGlucHV0W3R5cGU9J3N1Ym1pdCddXCIpO3ZhciByPUR0KGUpO2lmKHIpe3IubGFzdEJ1dHRvbkNsaWNrZWQ9dH19ZnVuY3Rpb24gWHQoZSl7dmFyIHQ9RHQoZSk7aWYodCl7dC5sYXN0QnV0dG9uQ2xpY2tlZD1udWxsfX1mdW5jdGlvbiBEdChlKXt2YXIgdD12KGUudGFyZ2V0LFwiYnV0dG9uLCBpbnB1dFt0eXBlPSdzdWJtaXQnXVwiKTtpZighdCl7cmV0dXJufXZhciByPWcoXCIjXCIrZWUodCxcImZvcm1cIikpfHx2KHQsXCJmb3JtXCIpO2lmKCFyKXtyZXR1cm59cmV0dXJuIGFlKHIpfWZ1bmN0aW9uIFV0KGUpe2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsTXQpO2UuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzaW5cIixNdCk7ZS5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNvdXRcIixYdCl9ZnVuY3Rpb24gQnQoZSl7dmFyIHQ9WWUoZSk7dmFyIHI9MDtmb3IodmFyIG49MDtuPHQubGVuZ3RoO24rKyl7Y29uc3QgaT10W25dO2lmKGk9PT1cIntcIil7cisrfWVsc2UgaWYoaT09PVwifVwiKXtyLS19fXJldHVybiByfWZ1bmN0aW9uIEZ0KHQsZSxyKXt2YXIgbj1hZSh0KTtpZighQXJyYXkuaXNBcnJheShuLm9uSGFuZGxlcnMpKXtuLm9uSGFuZGxlcnM9W119dmFyIGk7dmFyIGE9ZnVuY3Rpb24oZSl7cmV0dXJuIFRyKHQsZnVuY3Rpb24oKXtpZighaSl7aT1uZXcgRnVuY3Rpb24oXCJldmVudFwiLHIpfWkuY2FsbCh0LGUpfSl9O3QuYWRkRXZlbnRMaXN0ZW5lcihlLGEpO24ub25IYW5kbGVycy5wdXNoKHtldmVudDplLGxpc3RlbmVyOmF9KX1mdW5jdGlvbiBWdChlKXt2YXIgdD10ZShlLFwiaHgtb25cIik7aWYodCl7dmFyIHI9e307dmFyIG49dC5zcGxpdChcIlxcblwiKTt2YXIgaT1udWxsO3ZhciBhPTA7d2hpbGUobi5sZW5ndGg+MCl7dmFyIG89bi5zaGlmdCgpO3ZhciBzPW8ubWF0Y2goL15cXHMqKFthLXpBLVo6XFwtXFwuXSs6KSguKikvKTtpZihhPT09MCYmcyl7by5zcGxpdChcIjpcIik7aT1zWzFdLnNsaWNlKDAsLTEpO3JbaV09c1syXX1lbHNle3JbaV0rPW99YSs9QnQobyl9Zm9yKHZhciBsIGluIHIpe0Z0KGUsbCxyW2xdKX19fWZ1bmN0aW9uIGp0KGUpe0FlKGUpO2Zvcih2YXIgdD0wO3Q8ZS5hdHRyaWJ1dGVzLmxlbmd0aDt0Kyspe3ZhciByPWUuYXR0cmlidXRlc1t0XS5uYW1lO3ZhciBuPWUuYXR0cmlidXRlc1t0XS52YWx1ZTtpZihzKHIsXCJoeC1vblwiKXx8cyhyLFwiZGF0YS1oeC1vblwiKSl7dmFyIGk9ci5pbmRleE9mKFwiLW9uXCIpKzM7dmFyIGE9ci5zbGljZShpLGkrMSk7aWYoYT09PVwiLVwifHxhPT09XCI6XCIpe3ZhciBvPXIuc2xpY2UoaSsxKTtpZihzKG8sXCI6XCIpKXtvPVwiaHRteFwiK299ZWxzZSBpZihzKG8sXCItXCIpKXtvPVwiaHRteDpcIitvLnNsaWNlKDEpfWVsc2UgaWYocyhvLFwiaHRteC1cIikpe289XCJodG14OlwiK28uc2xpY2UoNSl9RnQoZSxvLG4pfX19fWZ1bmN0aW9uIF90KHQpe2lmKHYodCxRLmNvbmZpZy5kaXNhYmxlU2VsZWN0b3IpKXtwKHQpO3JldHVybn12YXIgcj1hZSh0KTtpZihyLmluaXRIYXNoIT09TGUodCkpe05lKHQpO3IuaW5pdEhhc2g9TGUodCk7VnQodCk7Y2UodCxcImh0bXg6YmVmb3JlUHJvY2Vzc05vZGVcIik7aWYodC52YWx1ZSl7ci5sYXN0VmFsdWU9dC52YWx1ZX12YXIgZT1pdCh0KTt2YXIgbj1IdCh0LHIsZSk7aWYoIW4pe2lmKG5lKHQsXCJoeC1ib29zdFwiKT09PVwidHJ1ZVwiKXtsdCh0LHIsZSl9ZWxzZSBpZihvKHQsXCJoeC10cmlnZ2VyXCIpKXtlLmZvckVhY2goZnVuY3Rpb24oZSl7THQodCxlLHIsZnVuY3Rpb24oKXt9KX0pfX1pZih0LnRhZ05hbWU9PT1cIkZPUk1cInx8ZWUodCxcInR5cGVcIik9PT1cInN1Ym1pdFwiJiZvKHQsXCJmb3JtXCIpKXtVdCh0KX12YXIgaT10ZSh0LFwiaHgtc3NlXCIpO2lmKGkpe1N0KHQscixpKX12YXIgYT10ZSh0LFwiaHgtd3NcIik7aWYoYSl7cHQodCxyLGEpfWNlKHQsXCJodG14OmFmdGVyUHJvY2Vzc05vZGVcIil9fWZ1bmN0aW9uIHp0KGUpe2U9ZyhlKTtpZih2KGUsUS5jb25maWcuZGlzYWJsZVNlbGVjdG9yKSl7cChlKTtyZXR1cm59X3QoZSk7b2UoUHQoZSksZnVuY3Rpb24oZSl7X3QoZSl9KTtvZShrdChlKSxqdCl9ZnVuY3Rpb24gJHQoZSl7cmV0dXJuIGUucmVwbGFjZSgvKFthLXowLTldKShbQS1aXSkvZyxcIiQxLSQyXCIpLnRvTG93ZXJDYXNlKCl9ZnVuY3Rpb24gV3QoZSx0KXt2YXIgcjtpZih3aW5kb3cuQ3VzdG9tRXZlbnQmJnR5cGVvZiB3aW5kb3cuQ3VzdG9tRXZlbnQ9PT1cImZ1bmN0aW9uXCIpe3I9bmV3IEN1c3RvbUV2ZW50KGUse2J1YmJsZXM6dHJ1ZSxjYW5jZWxhYmxlOnRydWUsZGV0YWlsOnR9KX1lbHNle3I9cmUoKS5jcmVhdGVFdmVudChcIkN1c3RvbUV2ZW50XCIpO3IuaW5pdEN1c3RvbUV2ZW50KGUsdHJ1ZSx0cnVlLHQpfXJldHVybiByfWZ1bmN0aW9uIGZlKGUsdCxyKXtjZShlLHQsbGUoe2Vycm9yOnR9LHIpKX1mdW5jdGlvbiBHdChlKXtyZXR1cm4gZT09PVwiaHRteDphZnRlclByb2Nlc3NOb2RlXCJ9ZnVuY3Rpb24gUihlLHQpe29lKEZyKGUpLGZ1bmN0aW9uKGUpe3RyeXt0KGUpfWNhdGNoKGUpe2IoZSl9fSl9ZnVuY3Rpb24gYihlKXtpZihjb25zb2xlLmVycm9yKXtjb25zb2xlLmVycm9yKGUpfWVsc2UgaWYoY29uc29sZS5sb2cpe2NvbnNvbGUubG9nKFwiRVJST1I6IFwiLGUpfX1mdW5jdGlvbiBjZShlLHQscil7ZT1nKGUpO2lmKHI9PW51bGwpe3I9e319cltcImVsdFwiXT1lO3ZhciBuPVd0KHQscik7aWYoUS5sb2dnZXImJiFHdCh0KSl7US5sb2dnZXIoZSx0LHIpfWlmKHIuZXJyb3Ipe2Ioci5lcnJvcik7Y2UoZSxcImh0bXg6ZXJyb3JcIix7ZXJyb3JJbmZvOnJ9KX12YXIgaT1lLmRpc3BhdGNoRXZlbnQobik7dmFyIGE9JHQodCk7aWYoaSYmYSE9PXQpe3ZhciBvPVd0KGEsbi5kZXRhaWwpO2k9aSYmZS5kaXNwYXRjaEV2ZW50KG8pfVIoZSxmdW5jdGlvbihlKXtpPWkmJihlLm9uRXZlbnQodCxuKSE9PWZhbHNlJiYhbi5kZWZhdWx0UHJldmVudGVkKX0pO3JldHVybiBpfXZhciBKdD1sb2NhdGlvbi5wYXRobmFtZStsb2NhdGlvbi5zZWFyY2g7ZnVuY3Rpb24gWnQoKXt2YXIgZT1yZSgpLnF1ZXJ5U2VsZWN0b3IoXCJbaHgtaGlzdG9yeS1lbHRdLFtkYXRhLWh4LWhpc3RvcnktZWx0XVwiKTtyZXR1cm4gZXx8cmUoKS5ib2R5fWZ1bmN0aW9uIEt0KGUsdCxyLG4pe2lmKCFVKCkpe3JldHVybn1pZihRLmNvbmZpZy5oaXN0b3J5Q2FjaGVTaXplPD0wKXtsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcImh0bXgtaGlzdG9yeS1jYWNoZVwiKTtyZXR1cm59ZT1CKGUpO3ZhciBpPUUobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJodG14LWhpc3RvcnktY2FjaGVcIikpfHxbXTtmb3IodmFyIGE9MDthPGkubGVuZ3RoO2ErKyl7aWYoaVthXS51cmw9PT1lKXtpLnNwbGljZShhLDEpO2JyZWFrfX12YXIgbz17dXJsOmUsY29udGVudDp0LHRpdGxlOnIsc2Nyb2xsOm59O2NlKHJlKCkuYm9keSxcImh0bXg6aGlzdG9yeUl0ZW1DcmVhdGVkXCIse2l0ZW06byxjYWNoZTppfSk7aS5wdXNoKG8pO3doaWxlKGkubGVuZ3RoPlEuY29uZmlnLmhpc3RvcnlDYWNoZVNpemUpe2kuc2hpZnQoKX13aGlsZShpLmxlbmd0aD4wKXt0cnl7bG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJodG14LWhpc3RvcnktY2FjaGVcIixKU09OLnN0cmluZ2lmeShpKSk7YnJlYWt9Y2F0Y2goZSl7ZmUocmUoKS5ib2R5LFwiaHRteDpoaXN0b3J5Q2FjaGVFcnJvclwiLHtjYXVzZTplLGNhY2hlOml9KTtpLnNoaWZ0KCl9fX1mdW5jdGlvbiBZdChlKXtpZighVSgpKXtyZXR1cm4gbnVsbH1lPUIoZSk7dmFyIHQ9RShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImh0bXgtaGlzdG9yeS1jYWNoZVwiKSl8fFtdO2Zvcih2YXIgcj0wO3I8dC5sZW5ndGg7cisrKXtpZih0W3JdLnVybD09PWUpe3JldHVybiB0W3JdfX1yZXR1cm4gbnVsbH1mdW5jdGlvbiBRdChlKXt2YXIgdD1RLmNvbmZpZy5yZXF1ZXN0Q2xhc3M7dmFyIHI9ZS5jbG9uZU5vZGUodHJ1ZSk7b2UoZihyLFwiLlwiK3QpLGZ1bmN0aW9uKGUpe24oZSx0KX0pO3JldHVybiByLmlubmVySFRNTH1mdW5jdGlvbiBlcigpe3ZhciBlPVp0KCk7dmFyIHQ9SnR8fGxvY2F0aW9uLnBhdGhuYW1lK2xvY2F0aW9uLnNlYXJjaDt2YXIgcjt0cnl7cj1yZSgpLnF1ZXJ5U2VsZWN0b3IoJ1toeC1oaXN0b3J5PVwiZmFsc2VcIiBpXSxbZGF0YS1oeC1oaXN0b3J5PVwiZmFsc2VcIiBpXScpfWNhdGNoKGUpe3I9cmUoKS5xdWVyeVNlbGVjdG9yKCdbaHgtaGlzdG9yeT1cImZhbHNlXCJdLFtkYXRhLWh4LWhpc3Rvcnk9XCJmYWxzZVwiXScpfWlmKCFyKXtjZShyZSgpLmJvZHksXCJodG14OmJlZm9yZUhpc3RvcnlTYXZlXCIse3BhdGg6dCxoaXN0b3J5RWx0OmV9KTtLdCh0LFF0KGUpLHJlKCkudGl0bGUsd2luZG93LnNjcm9sbFkpfWlmKFEuY29uZmlnLmhpc3RvcnlFbmFibGVkKWhpc3RvcnkucmVwbGFjZVN0YXRlKHtodG14OnRydWV9LHJlKCkudGl0bGUsd2luZG93LmxvY2F0aW9uLmhyZWYpfWZ1bmN0aW9uIHRyKGUpe2lmKFEuY29uZmlnLmdldENhY2hlQnVzdGVyUGFyYW0pe2U9ZS5yZXBsYWNlKC9vcmdcXC5odG14XFwuY2FjaGUtYnVzdGVyPVteJl0qJj8vLFwiXCIpO2lmKEcoZSxcIiZcIil8fEcoZSxcIj9cIikpe2U9ZS5zbGljZSgwLC0xKX19aWYoUS5jb25maWcuaGlzdG9yeUVuYWJsZWQpe2hpc3RvcnkucHVzaFN0YXRlKHtodG14OnRydWV9LFwiXCIsZSl9SnQ9ZX1mdW5jdGlvbiBycihlKXtpZihRLmNvbmZpZy5oaXN0b3J5RW5hYmxlZCloaXN0b3J5LnJlcGxhY2VTdGF0ZSh7aHRteDp0cnVlfSxcIlwiLGUpO0p0PWV9ZnVuY3Rpb24gbnIoZSl7b2UoZSxmdW5jdGlvbihlKXtlLmNhbGwoKX0pfWZ1bmN0aW9uIGlyKGEpe3ZhciBlPW5ldyBYTUxIdHRwUmVxdWVzdDt2YXIgbz17cGF0aDphLHhocjplfTtjZShyZSgpLmJvZHksXCJodG14Omhpc3RvcnlDYWNoZU1pc3NcIixvKTtlLm9wZW4oXCJHRVRcIixhLHRydWUpO2Uuc2V0UmVxdWVzdEhlYWRlcihcIkhYLVJlcXVlc3RcIixcInRydWVcIik7ZS5zZXRSZXF1ZXN0SGVhZGVyKFwiSFgtSGlzdG9yeS1SZXN0b3JlLVJlcXVlc3RcIixcInRydWVcIik7ZS5zZXRSZXF1ZXN0SGVhZGVyKFwiSFgtQ3VycmVudC1VUkxcIixyZSgpLmxvY2F0aW9uLmhyZWYpO2Uub25sb2FkPWZ1bmN0aW9uKCl7aWYodGhpcy5zdGF0dXM+PTIwMCYmdGhpcy5zdGF0dXM8NDAwKXtjZShyZSgpLmJvZHksXCJodG14Omhpc3RvcnlDYWNoZU1pc3NMb2FkXCIsbyk7dmFyIGU9bCh0aGlzLnJlc3BvbnNlKTtlPWUucXVlcnlTZWxlY3RvcihcIltoeC1oaXN0b3J5LWVsdF0sW2RhdGEtaHgtaGlzdG9yeS1lbHRdXCIpfHxlO3ZhciB0PVp0KCk7dmFyIHI9VCh0KTt2YXIgbj1WZSh0aGlzLnJlc3BvbnNlKTtpZihuKXt2YXIgaT1DKFwidGl0bGVcIik7aWYoaSl7aS5pbm5lckhUTUw9bn1lbHNle3dpbmRvdy5kb2N1bWVudC50aXRsZT1ufX1VZSh0LGUscik7bnIoci50YXNrcyk7SnQ9YTtjZShyZSgpLmJvZHksXCJodG14Omhpc3RvcnlSZXN0b3JlXCIse3BhdGg6YSxjYWNoZU1pc3M6dHJ1ZSxzZXJ2ZXJSZXNwb25zZTp0aGlzLnJlc3BvbnNlfSl9ZWxzZXtmZShyZSgpLmJvZHksXCJodG14Omhpc3RvcnlDYWNoZU1pc3NMb2FkRXJyb3JcIixvKX19O2Uuc2VuZCgpfWZ1bmN0aW9uIGFyKGUpe2VyKCk7ZT1lfHxsb2NhdGlvbi5wYXRobmFtZStsb2NhdGlvbi5zZWFyY2g7dmFyIHQ9WXQoZSk7aWYodCl7dmFyIHI9bCh0LmNvbnRlbnQpO3ZhciBuPVp0KCk7dmFyIGk9VChuKTtVZShuLHIsaSk7bnIoaS50YXNrcyk7ZG9jdW1lbnQudGl0bGU9dC50aXRsZTtzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7d2luZG93LnNjcm9sbFRvKDAsdC5zY3JvbGwpfSwwKTtKdD1lO2NlKHJlKCkuYm9keSxcImh0bXg6aGlzdG9yeVJlc3RvcmVcIix7cGF0aDplLGl0ZW06dH0pfWVsc2V7aWYoUS5jb25maWcucmVmcmVzaE9uSGlzdG9yeU1pc3Mpe3dpbmRvdy5sb2NhdGlvbi5yZWxvYWQodHJ1ZSl9ZWxzZXtpcihlKX19fWZ1bmN0aW9uIG9yKGUpe3ZhciB0PXBlKGUsXCJoeC1pbmRpY2F0b3JcIik7aWYodD09bnVsbCl7dD1bZV19b2UodCxmdW5jdGlvbihlKXt2YXIgdD1hZShlKTt0LnJlcXVlc3RDb3VudD0odC5yZXF1ZXN0Q291bnR8fDApKzE7ZS5jbGFzc0xpc3RbXCJhZGRcIl0uY2FsbChlLmNsYXNzTGlzdCxRLmNvbmZpZy5yZXF1ZXN0Q2xhc3MpfSk7cmV0dXJuIHR9ZnVuY3Rpb24gc3IoZSl7dmFyIHQ9cGUoZSxcImh4LWRpc2FibGVkLWVsdFwiKTtpZih0PT1udWxsKXt0PVtdfW9lKHQsZnVuY3Rpb24oZSl7dmFyIHQ9YWUoZSk7dC5yZXF1ZXN0Q291bnQ9KHQucmVxdWVzdENvdW50fHwwKSsxO2Uuc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIixcIlwiKX0pO3JldHVybiB0fWZ1bmN0aW9uIGxyKGUsdCl7b2UoZSxmdW5jdGlvbihlKXt2YXIgdD1hZShlKTt0LnJlcXVlc3RDb3VudD0odC5yZXF1ZXN0Q291bnR8fDApLTE7aWYodC5yZXF1ZXN0Q291bnQ9PT0wKXtlLmNsYXNzTGlzdFtcInJlbW92ZVwiXS5jYWxsKGUuY2xhc3NMaXN0LFEuY29uZmlnLnJlcXVlc3RDbGFzcyl9fSk7b2UodCxmdW5jdGlvbihlKXt2YXIgdD1hZShlKTt0LnJlcXVlc3RDb3VudD0odC5yZXF1ZXN0Q291bnR8fDApLTE7aWYodC5yZXF1ZXN0Q291bnQ9PT0wKXtlLnJlbW92ZUF0dHJpYnV0ZShcImRpc2FibGVkXCIpfX0pfWZ1bmN0aW9uIHVyKGUsdCl7Zm9yKHZhciByPTA7cjxlLmxlbmd0aDtyKyspe3ZhciBuPWVbcl07aWYobi5pc1NhbWVOb2RlKHQpKXtyZXR1cm4gdHJ1ZX19cmV0dXJuIGZhbHNlfWZ1bmN0aW9uIGZyKGUpe2lmKGUubmFtZT09PVwiXCJ8fGUubmFtZT09bnVsbHx8ZS5kaXNhYmxlZHx8dihlLFwiZmllbGRzZXRbZGlzYWJsZWRdXCIpKXtyZXR1cm4gZmFsc2V9aWYoZS50eXBlPT09XCJidXR0b25cInx8ZS50eXBlPT09XCJzdWJtaXRcInx8ZS50YWdOYW1lPT09XCJpbWFnZVwifHxlLnRhZ05hbWU9PT1cInJlc2V0XCJ8fGUudGFnTmFtZT09PVwiZmlsZVwiKXtyZXR1cm4gZmFsc2V9aWYoZS50eXBlPT09XCJjaGVja2JveFwifHxlLnR5cGU9PT1cInJhZGlvXCIpe3JldHVybiBlLmNoZWNrZWR9cmV0dXJuIHRydWV9ZnVuY3Rpb24gY3IoZSx0LHIpe2lmKGUhPW51bGwmJnQhPW51bGwpe3ZhciBuPXJbZV07aWYobj09PXVuZGVmaW5lZCl7cltlXT10fWVsc2UgaWYoQXJyYXkuaXNBcnJheShuKSl7aWYoQXJyYXkuaXNBcnJheSh0KSl7cltlXT1uLmNvbmNhdCh0KX1lbHNle24ucHVzaCh0KX19ZWxzZXtpZihBcnJheS5pc0FycmF5KHQpKXtyW2VdPVtuXS5jb25jYXQodCl9ZWxzZXtyW2VdPVtuLHRdfX19fWZ1bmN0aW9uIGhyKHQscixuLGUsaSl7aWYoZT09bnVsbHx8dXIodCxlKSl7cmV0dXJufWVsc2V7dC5wdXNoKGUpfWlmKGZyKGUpKXt2YXIgYT1lZShlLFwibmFtZVwiKTt2YXIgbz1lLnZhbHVlO2lmKGUubXVsdGlwbGUmJmUudGFnTmFtZT09PVwiU0VMRUNUXCIpe289TShlLnF1ZXJ5U2VsZWN0b3JBbGwoXCJvcHRpb246Y2hlY2tlZFwiKSkubWFwKGZ1bmN0aW9uKGUpe3JldHVybiBlLnZhbHVlfSl9aWYoZS5maWxlcyl7bz1NKGUuZmlsZXMpfWNyKGEsbyxyKTtpZihpKXt2cihlLG4pfX1pZihoKGUsXCJmb3JtXCIpKXt2YXIgcz1lLmVsZW1lbnRzO29lKHMsZnVuY3Rpb24oZSl7aHIodCxyLG4sZSxpKX0pfX1mdW5jdGlvbiB2cihlLHQpe2lmKGUud2lsbFZhbGlkYXRlKXtjZShlLFwiaHRteDp2YWxpZGF0aW9uOnZhbGlkYXRlXCIpO2lmKCFlLmNoZWNrVmFsaWRpdHkoKSl7dC5wdXNoKHtlbHQ6ZSxtZXNzYWdlOmUudmFsaWRhdGlvbk1lc3NhZ2UsdmFsaWRpdHk6ZS52YWxpZGl0eX0pO2NlKGUsXCJodG14OnZhbGlkYXRpb246ZmFpbGVkXCIse21lc3NhZ2U6ZS52YWxpZGF0aW9uTWVzc2FnZSx2YWxpZGl0eTplLnZhbGlkaXR5fSl9fX1mdW5jdGlvbiBkcihlLHQpe3ZhciByPVtdO3ZhciBuPXt9O3ZhciBpPXt9O3ZhciBhPVtdO3ZhciBvPWFlKGUpO2lmKG8ubGFzdEJ1dHRvbkNsaWNrZWQmJiFzZShvLmxhc3RCdXR0b25DbGlja2VkKSl7by5sYXN0QnV0dG9uQ2xpY2tlZD1udWxsfXZhciBzPWgoZSxcImZvcm1cIikmJmUubm9WYWxpZGF0ZSE9PXRydWV8fHRlKGUsXCJoeC12YWxpZGF0ZVwiKT09PVwidHJ1ZVwiO2lmKG8ubGFzdEJ1dHRvbkNsaWNrZWQpe3M9cyYmby5sYXN0QnV0dG9uQ2xpY2tlZC5mb3JtTm9WYWxpZGF0ZSE9PXRydWV9aWYodCE9PVwiZ2V0XCIpe2hyKHIsaSxhLHYoZSxcImZvcm1cIikscyl9aHIocixuLGEsZSxzKTtpZihvLmxhc3RCdXR0b25DbGlja2VkfHxlLnRhZ05hbWU9PT1cIkJVVFRPTlwifHxlLnRhZ05hbWU9PT1cIklOUFVUXCImJmVlKGUsXCJ0eXBlXCIpPT09XCJzdWJtaXRcIil7dmFyIGw9by5sYXN0QnV0dG9uQ2xpY2tlZHx8ZTt2YXIgdT1lZShsLFwibmFtZVwiKTtjcih1LGwudmFsdWUsaSl9dmFyIGY9cGUoZSxcImh4LWluY2x1ZGVcIik7b2UoZixmdW5jdGlvbihlKXtocihyLG4sYSxlLHMpO2lmKCFoKGUsXCJmb3JtXCIpKXtvZShlLnF1ZXJ5U2VsZWN0b3JBbGwocnQpLGZ1bmN0aW9uKGUpe2hyKHIsbixhLGUscyl9KX19KTtuPWxlKG4saSk7cmV0dXJue2Vycm9yczphLHZhbHVlczpufX1mdW5jdGlvbiBncihlLHQscil7aWYoZSE9PVwiXCIpe2UrPVwiJlwifWlmKFN0cmluZyhyKT09PVwiW29iamVjdCBPYmplY3RdXCIpe3I9SlNPTi5zdHJpbmdpZnkocil9dmFyIG49ZW5jb2RlVVJJQ29tcG9uZW50KHIpO2UrPWVuY29kZVVSSUNvbXBvbmVudCh0KStcIj1cIituO3JldHVybiBlfWZ1bmN0aW9uIG1yKGUpe3ZhciB0PVwiXCI7Zm9yKHZhciByIGluIGUpe2lmKGUuaGFzT3duUHJvcGVydHkocikpe3ZhciBuPWVbcl07aWYoQXJyYXkuaXNBcnJheShuKSl7b2UobixmdW5jdGlvbihlKXt0PWdyKHQscixlKX0pfWVsc2V7dD1ncih0LHIsbil9fX1yZXR1cm4gdH1mdW5jdGlvbiBwcihlKXt2YXIgdD1uZXcgRm9ybURhdGE7Zm9yKHZhciByIGluIGUpe2lmKGUuaGFzT3duUHJvcGVydHkocikpe3ZhciBuPWVbcl07aWYoQXJyYXkuaXNBcnJheShuKSl7b2UobixmdW5jdGlvbihlKXt0LmFwcGVuZChyLGUpfSl9ZWxzZXt0LmFwcGVuZChyLG4pfX19cmV0dXJuIHR9ZnVuY3Rpb24geHIoZSx0LHIpe3ZhciBuPXtcIkhYLVJlcXVlc3RcIjpcInRydWVcIixcIkhYLVRyaWdnZXJcIjplZShlLFwiaWRcIiksXCJIWC1UcmlnZ2VyLU5hbWVcIjplZShlLFwibmFtZVwiKSxcIkhYLVRhcmdldFwiOnRlKHQsXCJpZFwiKSxcIkhYLUN1cnJlbnQtVVJMXCI6cmUoKS5sb2NhdGlvbi5ocmVmfTtScihlLFwiaHgtaGVhZGVyc1wiLGZhbHNlLG4pO2lmKHIhPT11bmRlZmluZWQpe25bXCJIWC1Qcm9tcHRcIl09cn1pZihhZShlKS5ib29zdGVkKXtuW1wiSFgtQm9vc3RlZFwiXT1cInRydWVcIn1yZXR1cm4gbn1mdW5jdGlvbiB5cih0LGUpe3ZhciByPW5lKGUsXCJoeC1wYXJhbXNcIik7aWYocil7aWYocj09PVwibm9uZVwiKXtyZXR1cm57fX1lbHNlIGlmKHI9PT1cIipcIil7cmV0dXJuIHR9ZWxzZSBpZihyLmluZGV4T2YoXCJub3QgXCIpPT09MCl7b2Uoci5zdWJzdHIoNCkuc3BsaXQoXCIsXCIpLGZ1bmN0aW9uKGUpe2U9ZS50cmltKCk7ZGVsZXRlIHRbZV19KTtyZXR1cm4gdH1lbHNle3ZhciBuPXt9O29lKHIuc3BsaXQoXCIsXCIpLGZ1bmN0aW9uKGUpe2U9ZS50cmltKCk7bltlXT10W2VdfSk7cmV0dXJuIG59fWVsc2V7cmV0dXJuIHR9fWZ1bmN0aW9uIGJyKGUpe3JldHVybiBlZShlLFwiaHJlZlwiKSYmZWUoZSxcImhyZWZcIikuaW5kZXhPZihcIiNcIik+PTB9ZnVuY3Rpb24gd3IoZSx0KXt2YXIgcj10P3Q6bmUoZSxcImh4LXN3YXBcIik7dmFyIG49e3N3YXBTdHlsZTphZShlKS5ib29zdGVkP1wiaW5uZXJIVE1MXCI6US5jb25maWcuZGVmYXVsdFN3YXBTdHlsZSxzd2FwRGVsYXk6US5jb25maWcuZGVmYXVsdFN3YXBEZWxheSxzZXR0bGVEZWxheTpRLmNvbmZpZy5kZWZhdWx0U2V0dGxlRGVsYXl9O2lmKFEuY29uZmlnLnNjcm9sbEludG9WaWV3T25Cb29zdCYmYWUoZSkuYm9vc3RlZCYmIWJyKGUpKXtuW1wic2hvd1wiXT1cInRvcFwifWlmKHIpe3ZhciBpPUQocik7aWYoaS5sZW5ndGg+MCl7Zm9yKHZhciBhPTA7YTxpLmxlbmd0aDthKyspe3ZhciBvPWlbYV07aWYoby5pbmRleE9mKFwic3dhcDpcIik9PT0wKXtuW1wic3dhcERlbGF5XCJdPWQoby5zdWJzdHIoNSkpfWVsc2UgaWYoby5pbmRleE9mKFwic2V0dGxlOlwiKT09PTApe25bXCJzZXR0bGVEZWxheVwiXT1kKG8uc3Vic3RyKDcpKX1lbHNlIGlmKG8uaW5kZXhPZihcInRyYW5zaXRpb246XCIpPT09MCl7bltcInRyYW5zaXRpb25cIl09by5zdWJzdHIoMTEpPT09XCJ0cnVlXCJ9ZWxzZSBpZihvLmluZGV4T2YoXCJpZ25vcmVUaXRsZTpcIik9PT0wKXtuW1wiaWdub3JlVGl0bGVcIl09by5zdWJzdHIoMTIpPT09XCJ0cnVlXCJ9ZWxzZSBpZihvLmluZGV4T2YoXCJzY3JvbGw6XCIpPT09MCl7dmFyIHM9by5zdWJzdHIoNyk7dmFyIGw9cy5zcGxpdChcIjpcIik7dmFyIHU9bC5wb3AoKTt2YXIgZj1sLmxlbmd0aD4wP2wuam9pbihcIjpcIik6bnVsbDtuW1wic2Nyb2xsXCJdPXU7bltcInNjcm9sbFRhcmdldFwiXT1mfWVsc2UgaWYoby5pbmRleE9mKFwic2hvdzpcIik9PT0wKXt2YXIgYz1vLnN1YnN0cig1KTt2YXIgbD1jLnNwbGl0KFwiOlwiKTt2YXIgaD1sLnBvcCgpO3ZhciBmPWwubGVuZ3RoPjA/bC5qb2luKFwiOlwiKTpudWxsO25bXCJzaG93XCJdPWg7bltcInNob3dUYXJnZXRcIl09Zn1lbHNlIGlmKG8uaW5kZXhPZihcImZvY3VzLXNjcm9sbDpcIik9PT0wKXt2YXIgdj1vLnN1YnN0cihcImZvY3VzLXNjcm9sbDpcIi5sZW5ndGgpO25bXCJmb2N1c1Njcm9sbFwiXT12PT1cInRydWVcIn1lbHNlIGlmKGE9PTApe25bXCJzd2FwU3R5bGVcIl09b31lbHNle2IoXCJVbmtub3duIG1vZGlmaWVyIGluIGh4LXN3YXA6IFwiK28pfX19fXJldHVybiBufWZ1bmN0aW9uIFNyKGUpe3JldHVybiBuZShlLFwiaHgtZW5jb2RpbmdcIik9PT1cIm11bHRpcGFydC9mb3JtLWRhdGFcInx8aChlLFwiZm9ybVwiKSYmZWUoZSxcImVuY3R5cGVcIik9PT1cIm11bHRpcGFydC9mb3JtLWRhdGFcIn1mdW5jdGlvbiBFcih0LHIsbil7dmFyIGk9bnVsbDtSKHIsZnVuY3Rpb24oZSl7aWYoaT09bnVsbCl7aT1lLmVuY29kZVBhcmFtZXRlcnModCxuLHIpfX0pO2lmKGkhPW51bGwpe3JldHVybiBpfWVsc2V7aWYoU3Iocikpe3JldHVybiBwcihuKX1lbHNle3JldHVybiBtcihuKX19fWZ1bmN0aW9uIFQoZSl7cmV0dXJue3Rhc2tzOltdLGVsdHM6W2VdfX1mdW5jdGlvbiBDcihlLHQpe3ZhciByPWVbMF07dmFyIG49ZVtlLmxlbmd0aC0xXTtpZih0LnNjcm9sbCl7dmFyIGk9bnVsbDtpZih0LnNjcm9sbFRhcmdldCl7aT11ZShyLHQuc2Nyb2xsVGFyZ2V0KX1pZih0LnNjcm9sbD09PVwidG9wXCImJihyfHxpKSl7aT1pfHxyO2kuc2Nyb2xsVG9wPTB9aWYodC5zY3JvbGw9PT1cImJvdHRvbVwiJiYobnx8aSkpe2k9aXx8bjtpLnNjcm9sbFRvcD1pLnNjcm9sbEhlaWdodH19aWYodC5zaG93KXt2YXIgaT1udWxsO2lmKHQuc2hvd1RhcmdldCl7dmFyIGE9dC5zaG93VGFyZ2V0O2lmKHQuc2hvd1RhcmdldD09PVwid2luZG93XCIpe2E9XCJib2R5XCJ9aT11ZShyLGEpfWlmKHQuc2hvdz09PVwidG9wXCImJihyfHxpKSl7aT1pfHxyO2kuc2Nyb2xsSW50b1ZpZXcoe2Jsb2NrOlwic3RhcnRcIixiZWhhdmlvcjpRLmNvbmZpZy5zY3JvbGxCZWhhdmlvcn0pfWlmKHQuc2hvdz09PVwiYm90dG9tXCImJihufHxpKSl7aT1pfHxuO2kuc2Nyb2xsSW50b1ZpZXcoe2Jsb2NrOlwiZW5kXCIsYmVoYXZpb3I6US5jb25maWcuc2Nyb2xsQmVoYXZpb3J9KX19fWZ1bmN0aW9uIFJyKGUsdCxyLG4pe2lmKG49PW51bGwpe249e319aWYoZT09bnVsbCl7cmV0dXJuIG59dmFyIGk9dGUoZSx0KTtpZihpKXt2YXIgYT1pLnRyaW0oKTt2YXIgbz1yO2lmKGE9PT1cInVuc2V0XCIpe3JldHVybiBudWxsfWlmKGEuaW5kZXhPZihcImphdmFzY3JpcHQ6XCIpPT09MCl7YT1hLnN1YnN0cigxMSk7bz10cnVlfWVsc2UgaWYoYS5pbmRleE9mKFwianM6XCIpPT09MCl7YT1hLnN1YnN0cigzKTtvPXRydWV9aWYoYS5pbmRleE9mKFwie1wiKSE9PTApe2E9XCJ7XCIrYStcIn1cIn12YXIgcztpZihvKXtzPVRyKGUsZnVuY3Rpb24oKXtyZXR1cm4gRnVuY3Rpb24oXCJyZXR1cm4gKFwiK2ErXCIpXCIpKCl9LHt9KX1lbHNle3M9RShhKX1mb3IodmFyIGwgaW4gcyl7aWYocy5oYXNPd25Qcm9wZXJ0eShsKSl7aWYobltsXT09bnVsbCl7bltsXT1zW2xdfX19fXJldHVybiBScih1KGUpLHQscixuKX1mdW5jdGlvbiBUcihlLHQscil7aWYoUS5jb25maWcuYWxsb3dFdmFsKXtyZXR1cm4gdCgpfWVsc2V7ZmUoZSxcImh0bXg6ZXZhbERpc2FsbG93ZWRFcnJvclwiKTtyZXR1cm4gcn19ZnVuY3Rpb24gT3IoZSx0KXtyZXR1cm4gUnIoZSxcImh4LXZhcnNcIix0cnVlLHQpfWZ1bmN0aW9uIHFyKGUsdCl7cmV0dXJuIFJyKGUsXCJoeC12YWxzXCIsZmFsc2UsdCl9ZnVuY3Rpb24gSHIoZSl7cmV0dXJuIGxlKE9yKGUpLHFyKGUpKX1mdW5jdGlvbiBMcih0LHIsbil7aWYobiE9PW51bGwpe3RyeXt0LnNldFJlcXVlc3RIZWFkZXIocixuKX1jYXRjaChlKXt0LnNldFJlcXVlc3RIZWFkZXIocixlbmNvZGVVUklDb21wb25lbnQobikpO3Quc2V0UmVxdWVzdEhlYWRlcihyK1wiLVVSSS1BdXRvRW5jb2RlZFwiLFwidHJ1ZVwiKX19fWZ1bmN0aW9uIEFyKHQpe2lmKHQucmVzcG9uc2VVUkwmJnR5cGVvZiBVUkwhPT1cInVuZGVmaW5lZFwiKXt0cnl7dmFyIGU9bmV3IFVSTCh0LnJlc3BvbnNlVVJMKTtyZXR1cm4gZS5wYXRobmFtZStlLnNlYXJjaH1jYXRjaChlKXtmZShyZSgpLmJvZHksXCJodG14OmJhZFJlc3BvbnNlVXJsXCIse3VybDp0LnJlc3BvbnNlVVJMfSl9fX1mdW5jdGlvbiBPKGUsdCl7cmV0dXJuIHQudGVzdChlLmdldEFsbFJlc3BvbnNlSGVhZGVycygpKX1mdW5jdGlvbiBOcihlLHQscil7ZT1lLnRvTG93ZXJDYXNlKCk7aWYocil7aWYociBpbnN0YW5jZW9mIEVsZW1lbnR8fEkocixcIlN0cmluZ1wiKSl7cmV0dXJuIGhlKGUsdCxudWxsLG51bGwse3RhcmdldE92ZXJyaWRlOmcocikscmV0dXJuUHJvbWlzZTp0cnVlfSl9ZWxzZXtyZXR1cm4gaGUoZSx0LGcoci5zb3VyY2UpLHIuZXZlbnQse2hhbmRsZXI6ci5oYW5kbGVyLGhlYWRlcnM6ci5oZWFkZXJzLHZhbHVlczpyLnZhbHVlcyx0YXJnZXRPdmVycmlkZTpnKHIudGFyZ2V0KSxzd2FwT3ZlcnJpZGU6ci5zd2FwLHNlbGVjdDpyLnNlbGVjdCxyZXR1cm5Qcm9taXNlOnRydWV9KX19ZWxzZXtyZXR1cm4gaGUoZSx0LG51bGwsbnVsbCx7cmV0dXJuUHJvbWlzZTp0cnVlfSl9fWZ1bmN0aW9uIElyKGUpe3ZhciB0PVtdO3doaWxlKGUpe3QucHVzaChlKTtlPWUucGFyZW50RWxlbWVudH1yZXR1cm4gdH1mdW5jdGlvbiBrcihlLHQscil7dmFyIG47dmFyIGk7aWYodHlwZW9mIFVSTD09PVwiZnVuY3Rpb25cIil7aT1uZXcgVVJMKHQsZG9jdW1lbnQubG9jYXRpb24uaHJlZik7dmFyIGE9ZG9jdW1lbnQubG9jYXRpb24ub3JpZ2luO249YT09PWkub3JpZ2lufWVsc2V7aT10O249cyh0LGRvY3VtZW50LmxvY2F0aW9uLm9yaWdpbil9aWYoUS5jb25maWcuc2VsZlJlcXVlc3RzT25seSl7aWYoIW4pe3JldHVybiBmYWxzZX19cmV0dXJuIGNlKGUsXCJodG14OnZhbGlkYXRlVXJsXCIsbGUoe3VybDppLHNhbWVIb3N0Om59LHIpKX1mdW5jdGlvbiBoZSh0LHIsbixpLGEsZSl7dmFyIG89bnVsbDt2YXIgcz1udWxsO2E9YSE9bnVsbD9hOnt9O2lmKGEucmV0dXJuUHJvbWlzZSYmdHlwZW9mIFByb21pc2UhPT1cInVuZGVmaW5lZFwiKXt2YXIgbD1uZXcgUHJvbWlzZShmdW5jdGlvbihlLHQpe289ZTtzPXR9KX1pZihuPT1udWxsKXtuPXJlKCkuYm9keX12YXIgTT1hLmhhbmRsZXJ8fE1yO3ZhciBYPWEuc2VsZWN0fHxudWxsO2lmKCFzZShuKSl7aWUobyk7cmV0dXJuIGx9dmFyIHU9YS50YXJnZXRPdmVycmlkZXx8eWUobik7aWYodT09bnVsbHx8dT09bWUpe2ZlKG4sXCJodG14OnRhcmdldEVycm9yXCIse3RhcmdldDp0ZShuLFwiaHgtdGFyZ2V0XCIpfSk7aWUocyk7cmV0dXJuIGx9dmFyIGY9YWUobik7dmFyIGM9Zi5sYXN0QnV0dG9uQ2xpY2tlZDtpZihjKXt2YXIgaD1lZShjLFwiZm9ybWFjdGlvblwiKTtpZihoIT1udWxsKXtyPWh9dmFyIHY9ZWUoYyxcImZvcm1tZXRob2RcIik7aWYodiE9bnVsbCl7aWYodi50b0xvd2VyQ2FzZSgpIT09XCJkaWFsb2dcIil7dD12fX19dmFyIGQ9bmUobixcImh4LWNvbmZpcm1cIik7aWYoZT09PXVuZGVmaW5lZCl7dmFyIEQ9ZnVuY3Rpb24oZSl7cmV0dXJuIGhlKHQscixuLGksYSwhIWUpfTt2YXIgVT17dGFyZ2V0OnUsZWx0Om4scGF0aDpyLHZlcmI6dCx0cmlnZ2VyaW5nRXZlbnQ6aSxldGM6YSxpc3N1ZVJlcXVlc3Q6RCxxdWVzdGlvbjpkfTtpZihjZShuLFwiaHRteDpjb25maXJtXCIsVSk9PT1mYWxzZSl7aWUobyk7cmV0dXJuIGx9fXZhciBnPW47dmFyIG09bmUobixcImh4LXN5bmNcIik7dmFyIHA9bnVsbDt2YXIgeD1mYWxzZTtpZihtKXt2YXIgQj1tLnNwbGl0KFwiOlwiKTt2YXIgRj1CWzBdLnRyaW0oKTtpZihGPT09XCJ0aGlzXCIpe2c9eGUobixcImh4LXN5bmNcIil9ZWxzZXtnPXVlKG4sRil9bT0oQlsxXXx8XCJkcm9wXCIpLnRyaW0oKTtmPWFlKGcpO2lmKG09PT1cImRyb3BcIiYmZi54aHImJmYuYWJvcnRhYmxlIT09dHJ1ZSl7aWUobyk7cmV0dXJuIGx9ZWxzZSBpZihtPT09XCJhYm9ydFwiKXtpZihmLnhocil7aWUobyk7cmV0dXJuIGx9ZWxzZXt4PXRydWV9fWVsc2UgaWYobT09PVwicmVwbGFjZVwiKXtjZShnLFwiaHRteDphYm9ydFwiKX1lbHNlIGlmKG0uaW5kZXhPZihcInF1ZXVlXCIpPT09MCl7dmFyIFY9bS5zcGxpdChcIiBcIik7cD0oVlsxXXx8XCJsYXN0XCIpLnRyaW0oKX19aWYoZi54aHIpe2lmKGYuYWJvcnRhYmxlKXtjZShnLFwiaHRteDphYm9ydFwiKX1lbHNle2lmKHA9PW51bGwpe2lmKGkpe3ZhciB5PWFlKGkpO2lmKHkmJnkudHJpZ2dlclNwZWMmJnkudHJpZ2dlclNwZWMucXVldWUpe3A9eS50cmlnZ2VyU3BlYy5xdWV1ZX19aWYocD09bnVsbCl7cD1cImxhc3RcIn19aWYoZi5xdWV1ZWRSZXF1ZXN0cz09bnVsbCl7Zi5xdWV1ZWRSZXF1ZXN0cz1bXX1pZihwPT09XCJmaXJzdFwiJiZmLnF1ZXVlZFJlcXVlc3RzLmxlbmd0aD09PTApe2YucXVldWVkUmVxdWVzdHMucHVzaChmdW5jdGlvbigpe2hlKHQscixuLGksYSl9KX1lbHNlIGlmKHA9PT1cImFsbFwiKXtmLnF1ZXVlZFJlcXVlc3RzLnB1c2goZnVuY3Rpb24oKXtoZSh0LHIsbixpLGEpfSl9ZWxzZSBpZihwPT09XCJsYXN0XCIpe2YucXVldWVkUmVxdWVzdHM9W107Zi5xdWV1ZWRSZXF1ZXN0cy5wdXNoKGZ1bmN0aW9uKCl7aGUodCxyLG4saSxhKX0pfWllKG8pO3JldHVybiBsfX12YXIgYj1uZXcgWE1MSHR0cFJlcXVlc3Q7Zi54aHI9YjtmLmFib3J0YWJsZT14O3ZhciB3PWZ1bmN0aW9uKCl7Zi54aHI9bnVsbDtmLmFib3J0YWJsZT1mYWxzZTtpZihmLnF1ZXVlZFJlcXVlc3RzIT1udWxsJiZmLnF1ZXVlZFJlcXVlc3RzLmxlbmd0aD4wKXt2YXIgZT1mLnF1ZXVlZFJlcXVlc3RzLnNoaWZ0KCk7ZSgpfX07dmFyIGo9bmUobixcImh4LXByb21wdFwiKTtpZihqKXt2YXIgUz1wcm9tcHQoaik7aWYoUz09PW51bGx8fCFjZShuLFwiaHRteDpwcm9tcHRcIix7cHJvbXB0OlMsdGFyZ2V0OnV9KSl7aWUobyk7dygpO3JldHVybiBsfX1pZihkJiYhZSl7aWYoIWNvbmZpcm0oZCkpe2llKG8pO3coKTtyZXR1cm4gbH19dmFyIEU9eHIobix1LFMpO2lmKHQhPT1cImdldFwiJiYhU3Iobikpe0VbXCJDb250ZW50LVR5cGVcIl09XCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIn1pZihhLmhlYWRlcnMpe0U9bGUoRSxhLmhlYWRlcnMpfXZhciBfPWRyKG4sdCk7dmFyIEM9Xy5lcnJvcnM7dmFyIFI9Xy52YWx1ZXM7aWYoYS52YWx1ZXMpe1I9bGUoUixhLnZhbHVlcyl9dmFyIHo9SHIobik7dmFyICQ9bGUoUix6KTt2YXIgVD15cigkLG4pO2lmKFEuY29uZmlnLmdldENhY2hlQnVzdGVyUGFyYW0mJnQ9PT1cImdldFwiKXtUW1wib3JnLmh0bXguY2FjaGUtYnVzdGVyXCJdPWVlKHUsXCJpZFwiKXx8XCJ0cnVlXCJ9aWYocj09bnVsbHx8cj09PVwiXCIpe3I9cmUoKS5sb2NhdGlvbi5ocmVmfXZhciBPPVJyKG4sXCJoeC1yZXF1ZXN0XCIpO3ZhciBXPWFlKG4pLmJvb3N0ZWQ7dmFyIHE9US5jb25maWcubWV0aG9kc1RoYXRVc2VVcmxQYXJhbXMuaW5kZXhPZih0KT49MDt2YXIgSD17Ym9vc3RlZDpXLHVzZVVybFBhcmFtczpxLHBhcmFtZXRlcnM6VCx1bmZpbHRlcmVkUGFyYW1ldGVyczokLGhlYWRlcnM6RSx0YXJnZXQ6dSx2ZXJiOnQsZXJyb3JzOkMsd2l0aENyZWRlbnRpYWxzOmEuY3JlZGVudGlhbHN8fE8uY3JlZGVudGlhbHN8fFEuY29uZmlnLndpdGhDcmVkZW50aWFscyx0aW1lb3V0OmEudGltZW91dHx8Ty50aW1lb3V0fHxRLmNvbmZpZy50aW1lb3V0LHBhdGg6cix0cmlnZ2VyaW5nRXZlbnQ6aX07aWYoIWNlKG4sXCJodG14OmNvbmZpZ1JlcXVlc3RcIixIKSl7aWUobyk7dygpO3JldHVybiBsfXI9SC5wYXRoO3Q9SC52ZXJiO0U9SC5oZWFkZXJzO1Q9SC5wYXJhbWV0ZXJzO0M9SC5lcnJvcnM7cT1ILnVzZVVybFBhcmFtcztpZihDJiZDLmxlbmd0aD4wKXtjZShuLFwiaHRteDp2YWxpZGF0aW9uOmhhbHRlZFwiLEgpO2llKG8pO3coKTtyZXR1cm4gbH12YXIgRz1yLnNwbGl0KFwiI1wiKTt2YXIgSj1HWzBdO3ZhciBMPUdbMV07dmFyIEE9cjtpZihxKXtBPUo7dmFyIFo9T2JqZWN0LmtleXMoVCkubGVuZ3RoIT09MDtpZihaKXtpZihBLmluZGV4T2YoXCI/XCIpPDApe0ErPVwiP1wifWVsc2V7QSs9XCImXCJ9QSs9bXIoVCk7aWYoTCl7QSs9XCIjXCIrTH19fWlmKCFrcihuLEEsSCkpe2ZlKG4sXCJodG14OmludmFsaWRQYXRoXCIsSCk7aWUocyk7cmV0dXJuIGx9Yi5vcGVuKHQudG9VcHBlckNhc2UoKSxBLHRydWUpO2Iub3ZlcnJpZGVNaW1lVHlwZShcInRleHQvaHRtbFwiKTtiLndpdGhDcmVkZW50aWFscz1ILndpdGhDcmVkZW50aWFscztiLnRpbWVvdXQ9SC50aW1lb3V0O2lmKE8ubm9IZWFkZXJzKXt9ZWxzZXtmb3IodmFyIE4gaW4gRSl7aWYoRS5oYXNPd25Qcm9wZXJ0eShOKSl7dmFyIEs9RVtOXTtMcihiLE4sSyl9fX12YXIgST17eGhyOmIsdGFyZ2V0OnUscmVxdWVzdENvbmZpZzpILGV0YzphLGJvb3N0ZWQ6VyxzZWxlY3Q6WCxwYXRoSW5mbzp7cmVxdWVzdFBhdGg6cixmaW5hbFJlcXVlc3RQYXRoOkEsYW5jaG9yOkx9fTtiLm9ubG9hZD1mdW5jdGlvbigpe3RyeXt2YXIgZT1JcihuKTtJLnBhdGhJbmZvLnJlc3BvbnNlUGF0aD1BcihiKTtNKG4sSSk7bHIoayxQKTtjZShuLFwiaHRteDphZnRlclJlcXVlc3RcIixJKTtjZShuLFwiaHRteDphZnRlck9uTG9hZFwiLEkpO2lmKCFzZShuKSl7dmFyIHQ9bnVsbDt3aGlsZShlLmxlbmd0aD4wJiZ0PT1udWxsKXt2YXIgcj1lLnNoaWZ0KCk7aWYoc2Uocikpe3Q9cn19aWYodCl7Y2UodCxcImh0bXg6YWZ0ZXJSZXF1ZXN0XCIsSSk7Y2UodCxcImh0bXg6YWZ0ZXJPbkxvYWRcIixJKX19aWUobyk7dygpfWNhdGNoKGUpe2ZlKG4sXCJodG14Om9uTG9hZEVycm9yXCIsbGUoe2Vycm9yOmV9LEkpKTt0aHJvdyBlfX07Yi5vbmVycm9yPWZ1bmN0aW9uKCl7bHIoayxQKTtmZShuLFwiaHRteDphZnRlclJlcXVlc3RcIixJKTtmZShuLFwiaHRteDpzZW5kRXJyb3JcIixJKTtpZShzKTt3KCl9O2Iub25hYm9ydD1mdW5jdGlvbigpe2xyKGssUCk7ZmUobixcImh0bXg6YWZ0ZXJSZXF1ZXN0XCIsSSk7ZmUobixcImh0bXg6c2VuZEFib3J0XCIsSSk7aWUocyk7dygpfTtiLm9udGltZW91dD1mdW5jdGlvbigpe2xyKGssUCk7ZmUobixcImh0bXg6YWZ0ZXJSZXF1ZXN0XCIsSSk7ZmUobixcImh0bXg6dGltZW91dFwiLEkpO2llKHMpO3coKX07aWYoIWNlKG4sXCJodG14OmJlZm9yZVJlcXVlc3RcIixJKSl7aWUobyk7dygpO3JldHVybiBsfXZhciBrPW9yKG4pO3ZhciBQPXNyKG4pO29lKFtcImxvYWRzdGFydFwiLFwibG9hZGVuZFwiLFwicHJvZ3Jlc3NcIixcImFib3J0XCJdLGZ1bmN0aW9uKHQpe29lKFtiLGIudXBsb2FkXSxmdW5jdGlvbihlKXtlLmFkZEV2ZW50TGlzdGVuZXIodCxmdW5jdGlvbihlKXtjZShuLFwiaHRteDp4aHI6XCIrdCx7bGVuZ3RoQ29tcHV0YWJsZTplLmxlbmd0aENvbXB1dGFibGUsbG9hZGVkOmUubG9hZGVkLHRvdGFsOmUudG90YWx9KX0pfSl9KTtjZShuLFwiaHRteDpiZWZvcmVTZW5kXCIsSSk7dmFyIFk9cT9udWxsOkVyKGIsbixUKTtiLnNlbmQoWSk7cmV0dXJuIGx9ZnVuY3Rpb24gUHIoZSx0KXt2YXIgcj10Lnhocjt2YXIgbj1udWxsO3ZhciBpPW51bGw7aWYoTyhyLC9IWC1QdXNoOi9pKSl7bj1yLmdldFJlc3BvbnNlSGVhZGVyKFwiSFgtUHVzaFwiKTtpPVwicHVzaFwifWVsc2UgaWYoTyhyLC9IWC1QdXNoLVVybDovaSkpe249ci5nZXRSZXNwb25zZUhlYWRlcihcIkhYLVB1c2gtVXJsXCIpO2k9XCJwdXNoXCJ9ZWxzZSBpZihPKHIsL0hYLVJlcGxhY2UtVXJsOi9pKSl7bj1yLmdldFJlc3BvbnNlSGVhZGVyKFwiSFgtUmVwbGFjZS1VcmxcIik7aT1cInJlcGxhY2VcIn1pZihuKXtpZihuPT09XCJmYWxzZVwiKXtyZXR1cm57fX1lbHNle3JldHVybnt0eXBlOmkscGF0aDpufX19dmFyIGE9dC5wYXRoSW5mby5maW5hbFJlcXVlc3RQYXRoO3ZhciBvPXQucGF0aEluZm8ucmVzcG9uc2VQYXRoO3ZhciBzPW5lKGUsXCJoeC1wdXNoLXVybFwiKTt2YXIgbD1uZShlLFwiaHgtcmVwbGFjZS11cmxcIik7dmFyIHU9YWUoZSkuYm9vc3RlZDt2YXIgZj1udWxsO3ZhciBjPW51bGw7aWYocyl7Zj1cInB1c2hcIjtjPXN9ZWxzZSBpZihsKXtmPVwicmVwbGFjZVwiO2M9bH1lbHNlIGlmKHUpe2Y9XCJwdXNoXCI7Yz1vfHxhfWlmKGMpe2lmKGM9PT1cImZhbHNlXCIpe3JldHVybnt9fWlmKGM9PT1cInRydWVcIil7Yz1vfHxhfWlmKHQucGF0aEluZm8uYW5jaG9yJiZjLmluZGV4T2YoXCIjXCIpPT09LTEpe2M9YytcIiNcIit0LnBhdGhJbmZvLmFuY2hvcn1yZXR1cm57dHlwZTpmLHBhdGg6Y319ZWxzZXtyZXR1cm57fX19ZnVuY3Rpb24gTXIobCx1KXt2YXIgZj11Lnhocjt2YXIgYz11LnRhcmdldDt2YXIgZT11LmV0Yzt2YXIgdD11LnJlcXVlc3RDb25maWc7dmFyIGg9dS5zZWxlY3Q7aWYoIWNlKGwsXCJodG14OmJlZm9yZU9uTG9hZFwiLHUpKXJldHVybjtpZihPKGYsL0hYLVRyaWdnZXI6L2kpKXtfZShmLFwiSFgtVHJpZ2dlclwiLGwpfWlmKE8oZiwvSFgtTG9jYXRpb246L2kpKXtlcigpO3ZhciByPWYuZ2V0UmVzcG9uc2VIZWFkZXIoXCJIWC1Mb2NhdGlvblwiKTt2YXIgdjtpZihyLmluZGV4T2YoXCJ7XCIpPT09MCl7dj1FKHIpO3I9dltcInBhdGhcIl07ZGVsZXRlIHZbXCJwYXRoXCJdfU5yKFwiR0VUXCIscix2KS50aGVuKGZ1bmN0aW9uKCl7dHIocil9KTtyZXR1cm59dmFyIG49TyhmLC9IWC1SZWZyZXNoOi9pKSYmXCJ0cnVlXCI9PT1mLmdldFJlc3BvbnNlSGVhZGVyKFwiSFgtUmVmcmVzaFwiKTtpZihPKGYsL0hYLVJlZGlyZWN0Oi9pKSl7bG9jYXRpb24uaHJlZj1mLmdldFJlc3BvbnNlSGVhZGVyKFwiSFgtUmVkaXJlY3RcIik7biYmbG9jYXRpb24ucmVsb2FkKCk7cmV0dXJufWlmKG4pe2xvY2F0aW9uLnJlbG9hZCgpO3JldHVybn1pZihPKGYsL0hYLVJldGFyZ2V0Oi9pKSl7aWYoZi5nZXRSZXNwb25zZUhlYWRlcihcIkhYLVJldGFyZ2V0XCIpPT09XCJ0aGlzXCIpe3UudGFyZ2V0PWx9ZWxzZXt1LnRhcmdldD11ZShsLGYuZ2V0UmVzcG9uc2VIZWFkZXIoXCJIWC1SZXRhcmdldFwiKSl9fXZhciBkPVByKGwsdSk7dmFyIGk9Zi5zdGF0dXM+PTIwMCYmZi5zdGF0dXM8NDAwJiZmLnN0YXR1cyE9PTIwNDt2YXIgZz1mLnJlc3BvbnNlO3ZhciBhPWYuc3RhdHVzPj00MDA7dmFyIG09US5jb25maWcuaWdub3JlVGl0bGU7dmFyIG89bGUoe3Nob3VsZFN3YXA6aSxzZXJ2ZXJSZXNwb25zZTpnLGlzRXJyb3I6YSxpZ25vcmVUaXRsZTptfSx1KTtpZighY2UoYyxcImh0bXg6YmVmb3JlU3dhcFwiLG8pKXJldHVybjtjPW8udGFyZ2V0O2c9by5zZXJ2ZXJSZXNwb25zZTthPW8uaXNFcnJvcjttPW8uaWdub3JlVGl0bGU7dS50YXJnZXQ9Yzt1LmZhaWxlZD1hO3Uuc3VjY2Vzc2Z1bD0hYTtpZihvLnNob3VsZFN3YXApe2lmKGYuc3RhdHVzPT09Mjg2KXthdChsKX1SKGwsZnVuY3Rpb24oZSl7Zz1lLnRyYW5zZm9ybVJlc3BvbnNlKGcsZixsKX0pO2lmKGQudHlwZSl7ZXIoKX12YXIgcz1lLnN3YXBPdmVycmlkZTtpZihPKGYsL0hYLVJlc3dhcDovaSkpe3M9Zi5nZXRSZXNwb25zZUhlYWRlcihcIkhYLVJlc3dhcFwiKX12YXIgdj13cihsLHMpO2lmKHYuaGFzT3duUHJvcGVydHkoXCJpZ25vcmVUaXRsZVwiKSl7bT12Lmlnbm9yZVRpdGxlfWMuY2xhc3NMaXN0LmFkZChRLmNvbmZpZy5zd2FwcGluZ0NsYXNzKTt2YXIgcD1udWxsO3ZhciB4PW51bGw7dmFyIHk9ZnVuY3Rpb24oKXt0cnl7dmFyIGU9ZG9jdW1lbnQuYWN0aXZlRWxlbWVudDt2YXIgdD17fTt0cnl7dD17ZWx0OmUsc3RhcnQ6ZT9lLnNlbGVjdGlvblN0YXJ0Om51bGwsZW5kOmU/ZS5zZWxlY3Rpb25FbmQ6bnVsbH19Y2F0Y2goZSl7fXZhciByO2lmKGgpe3I9aH1pZihPKGYsL0hYLVJlc2VsZWN0Oi9pKSl7cj1mLmdldFJlc3BvbnNlSGVhZGVyKFwiSFgtUmVzZWxlY3RcIil9aWYoZC50eXBlKXtjZShyZSgpLmJvZHksXCJodG14OmJlZm9yZUhpc3RvcnlVcGRhdGVcIixsZSh7aGlzdG9yeTpkfSx1KSk7aWYoZC50eXBlPT09XCJwdXNoXCIpe3RyKGQucGF0aCk7Y2UocmUoKS5ib2R5LFwiaHRteDpwdXNoZWRJbnRvSGlzdG9yeVwiLHtwYXRoOmQucGF0aH0pfWVsc2V7cnIoZC5wYXRoKTtjZShyZSgpLmJvZHksXCJodG14OnJlcGxhY2VkSW5IaXN0b3J5XCIse3BhdGg6ZC5wYXRofSl9fXZhciBuPVQoYyk7amUodi5zd2FwU3R5bGUsYyxsLGcsbixyKTtpZih0LmVsdCYmIXNlKHQuZWx0KSYmZWUodC5lbHQsXCJpZFwiKSl7dmFyIGk9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWUodC5lbHQsXCJpZFwiKSk7dmFyIGE9e3ByZXZlbnRTY3JvbGw6di5mb2N1c1Njcm9sbCE9PXVuZGVmaW5lZD8hdi5mb2N1c1Njcm9sbDohUS5jb25maWcuZGVmYXVsdEZvY3VzU2Nyb2xsfTtpZihpKXtpZih0LnN0YXJ0JiZpLnNldFNlbGVjdGlvblJhbmdlKXt0cnl7aS5zZXRTZWxlY3Rpb25SYW5nZSh0LnN0YXJ0LHQuZW5kKX1jYXRjaChlKXt9fWkuZm9jdXMoYSl9fWMuY2xhc3NMaXN0LnJlbW92ZShRLmNvbmZpZy5zd2FwcGluZ0NsYXNzKTtvZShuLmVsdHMsZnVuY3Rpb24oZSl7aWYoZS5jbGFzc0xpc3Qpe2UuY2xhc3NMaXN0LmFkZChRLmNvbmZpZy5zZXR0bGluZ0NsYXNzKX1jZShlLFwiaHRteDphZnRlclN3YXBcIix1KX0pO2lmKE8oZiwvSFgtVHJpZ2dlci1BZnRlci1Td2FwOi9pKSl7dmFyIG89bDtpZighc2UobCkpe289cmUoKS5ib2R5fV9lKGYsXCJIWC1UcmlnZ2VyLUFmdGVyLVN3YXBcIixvKX12YXIgcz1mdW5jdGlvbigpe29lKG4udGFza3MsZnVuY3Rpb24oZSl7ZS5jYWxsKCl9KTtvZShuLmVsdHMsZnVuY3Rpb24oZSl7aWYoZS5jbGFzc0xpc3Qpe2UuY2xhc3NMaXN0LnJlbW92ZShRLmNvbmZpZy5zZXR0bGluZ0NsYXNzKX1jZShlLFwiaHRteDphZnRlclNldHRsZVwiLHUpfSk7aWYodS5wYXRoSW5mby5hbmNob3Ipe3ZhciBlPXJlKCkuZ2V0RWxlbWVudEJ5SWQodS5wYXRoSW5mby5hbmNob3IpO2lmKGUpe2Uuc2Nyb2xsSW50b1ZpZXcoe2Jsb2NrOlwic3RhcnRcIixiZWhhdmlvcjpcImF1dG9cIn0pfX1pZihuLnRpdGxlJiYhbSl7dmFyIHQ9QyhcInRpdGxlXCIpO2lmKHQpe3QuaW5uZXJIVE1MPW4udGl0bGV9ZWxzZXt3aW5kb3cuZG9jdW1lbnQudGl0bGU9bi50aXRsZX19Q3Iobi5lbHRzLHYpO2lmKE8oZiwvSFgtVHJpZ2dlci1BZnRlci1TZXR0bGU6L2kpKXt2YXIgcj1sO2lmKCFzZShsKSl7cj1yZSgpLmJvZHl9X2UoZixcIkhYLVRyaWdnZXItQWZ0ZXItU2V0dGxlXCIscil9aWUocCl9O2lmKHYuc2V0dGxlRGVsYXk+MCl7c2V0VGltZW91dChzLHYuc2V0dGxlRGVsYXkpfWVsc2V7cygpfX1jYXRjaChlKXtmZShsLFwiaHRteDpzd2FwRXJyb3JcIix1KTtpZSh4KTt0aHJvdyBlfX07dmFyIGI9US5jb25maWcuZ2xvYmFsVmlld1RyYW5zaXRpb25zO2lmKHYuaGFzT3duUHJvcGVydHkoXCJ0cmFuc2l0aW9uXCIpKXtiPXYudHJhbnNpdGlvbn1pZihiJiZjZShsLFwiaHRteDpiZWZvcmVUcmFuc2l0aW9uXCIsdSkmJnR5cGVvZiBQcm9taXNlIT09XCJ1bmRlZmluZWRcIiYmZG9jdW1lbnQuc3RhcnRWaWV3VHJhbnNpdGlvbil7dmFyIHc9bmV3IFByb21pc2UoZnVuY3Rpb24oZSx0KXtwPWU7eD10fSk7dmFyIFM9eTt5PWZ1bmN0aW9uKCl7ZG9jdW1lbnQuc3RhcnRWaWV3VHJhbnNpdGlvbihmdW5jdGlvbigpe1MoKTtyZXR1cm4gd30pfX1pZih2LnN3YXBEZWxheT4wKXtzZXRUaW1lb3V0KHksdi5zd2FwRGVsYXkpfWVsc2V7eSgpfX1pZihhKXtmZShsLFwiaHRteDpyZXNwb25zZUVycm9yXCIsbGUoe2Vycm9yOlwiUmVzcG9uc2UgU3RhdHVzIEVycm9yIENvZGUgXCIrZi5zdGF0dXMrXCIgZnJvbSBcIit1LnBhdGhJbmZvLnJlcXVlc3RQYXRofSx1KSl9fXZhciBYcj17fTtmdW5jdGlvbiBEcigpe3JldHVybntpbml0OmZ1bmN0aW9uKGUpe3JldHVybiBudWxsfSxvbkV2ZW50OmZ1bmN0aW9uKGUsdCl7cmV0dXJuIHRydWV9LHRyYW5zZm9ybVJlc3BvbnNlOmZ1bmN0aW9uKGUsdCxyKXtyZXR1cm4gZX0saXNJbmxpbmVTd2FwOmZ1bmN0aW9uKGUpe3JldHVybiBmYWxzZX0saGFuZGxlU3dhcDpmdW5jdGlvbihlLHQscixuKXtyZXR1cm4gZmFsc2V9LGVuY29kZVBhcmFtZXRlcnM6ZnVuY3Rpb24oZSx0LHIpe3JldHVybiBudWxsfX19ZnVuY3Rpb24gVXIoZSx0KXtpZih0LmluaXQpe3QuaW5pdChyKX1YcltlXT1sZShEcigpLHQpfWZ1bmN0aW9uIEJyKGUpe2RlbGV0ZSBYcltlXX1mdW5jdGlvbiBGcihlLHIsbil7aWYoZT09dW5kZWZpbmVkKXtyZXR1cm4gcn1pZihyPT11bmRlZmluZWQpe3I9W119aWYobj09dW5kZWZpbmVkKXtuPVtdfXZhciB0PXRlKGUsXCJoeC1leHRcIik7aWYodCl7b2UodC5zcGxpdChcIixcIiksZnVuY3Rpb24oZSl7ZT1lLnJlcGxhY2UoLyAvZyxcIlwiKTtpZihlLnNsaWNlKDAsNyk9PVwiaWdub3JlOlwiKXtuLnB1c2goZS5zbGljZSg3KSk7cmV0dXJufWlmKG4uaW5kZXhPZihlKTwwKXt2YXIgdD1YcltlXTtpZih0JiZyLmluZGV4T2YodCk8MCl7ci5wdXNoKHQpfX19KX1yZXR1cm4gRnIodShlKSxyLG4pfXZhciBWcj1mYWxzZTtyZSgpLmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsZnVuY3Rpb24oKXtWcj10cnVlfSk7ZnVuY3Rpb24ganIoZSl7aWYoVnJ8fHJlKCkucmVhZHlTdGF0ZT09PVwiY29tcGxldGVcIil7ZSgpfWVsc2V7cmUoKS5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLGUpfX1mdW5jdGlvbiBfcigpe2lmKFEuY29uZmlnLmluY2x1ZGVJbmRpY2F0b3JTdHlsZXMhPT1mYWxzZSl7cmUoKS5oZWFkLmluc2VydEFkamFjZW50SFRNTChcImJlZm9yZWVuZFwiLFwiPHN0eWxlPiAgICAgICAgICAgICAgICAgICAgICAuXCIrUS5jb25maWcuaW5kaWNhdG9yQ2xhc3MrXCJ7b3BhY2l0eTowfSAgICAgICAgICAgICAgICAgICAgICAuXCIrUS5jb25maWcucmVxdWVzdENsYXNzK1wiIC5cIitRLmNvbmZpZy5pbmRpY2F0b3JDbGFzcytcIntvcGFjaXR5OjE7IHRyYW5zaXRpb246IG9wYWNpdHkgMjAwbXMgZWFzZS1pbjt9ICAgICAgICAgICAgICAgICAgICAgIC5cIitRLmNvbmZpZy5yZXF1ZXN0Q2xhc3MrXCIuXCIrUS5jb25maWcuaW5kaWNhdG9yQ2xhc3MrXCJ7b3BhY2l0eToxOyB0cmFuc2l0aW9uOiBvcGFjaXR5IDIwMG1zIGVhc2UtaW47fSAgICAgICAgICAgICAgICAgICAgPC9zdHlsZT5cIil9fWZ1bmN0aW9uIHpyKCl7dmFyIGU9cmUoKS5xdWVyeVNlbGVjdG9yKCdtZXRhW25hbWU9XCJodG14LWNvbmZpZ1wiXScpO2lmKGUpe3JldHVybiBFKGUuY29udGVudCl9ZWxzZXtyZXR1cm4gbnVsbH19ZnVuY3Rpb24gJHIoKXt2YXIgZT16cigpO2lmKGUpe1EuY29uZmlnPWxlKFEuY29uZmlnLGUpfX1qcihmdW5jdGlvbigpeyRyKCk7X3IoKTt2YXIgZT1yZSgpLmJvZHk7enQoZSk7dmFyIHQ9cmUoKS5xdWVyeVNlbGVjdG9yQWxsKFwiW2h4LXRyaWdnZXI9J3Jlc3RvcmVkJ10sW2RhdGEtaHgtdHJpZ2dlcj0ncmVzdG9yZWQnXVwiKTtlLmFkZEV2ZW50TGlzdGVuZXIoXCJodG14OmFib3J0XCIsZnVuY3Rpb24oZSl7dmFyIHQ9ZS50YXJnZXQ7dmFyIHI9YWUodCk7aWYociYmci54aHIpe3IueGhyLmFib3J0KCl9fSk7Y29uc3Qgcj13aW5kb3cub25wb3BzdGF0ZT93aW5kb3cub25wb3BzdGF0ZS5iaW5kKHdpbmRvdyk6bnVsbDt3aW5kb3cub25wb3BzdGF0ZT1mdW5jdGlvbihlKXtpZihlLnN0YXRlJiZlLnN0YXRlLmh0bXgpe2FyKCk7b2UodCxmdW5jdGlvbihlKXtjZShlLFwiaHRteDpyZXN0b3JlZFwiLHtkb2N1bWVudDpyZSgpLHRyaWdnZXJFdmVudDpjZX0pfSl9ZWxzZXtpZihyKXtyKGUpfX19O3NldFRpbWVvdXQoZnVuY3Rpb24oKXtjZShlLFwiaHRteDpsb2FkXCIse30pO2U9bnVsbH0sMCl9KTtyZXR1cm4gUX0oKX0pOyIsICJpbXBvcnQgSHRteCBmcm9tIFwiaHRteC5vcmdcIjtcbmltcG9ydCBBbHBpbmUgZnJvbSBcImFscGluZWpzXCI7XG5pbXBvcnQgcGVyc2lzdCBmcm9tIFwiQGFscGluZWpzL3BlcnNpc3RcIjtcbmltcG9ydCBjYXJ0U3RvcmUgZnJvbSBcIi4vY2FydFN0b3JlXCI7XG5pbXBvcnQgdXNlQ2FydCBmcm9tIFwiLi91c2VDYXJ0XCI7XG5pbXBvcnQgdXNlQ2FydFN1bW1hcnkgZnJvbSBcIi4vdXNlQ2FydFN1bW1hcnlcIjtcbmltcG9ydCB1c2VTZWFyY2ggZnJvbSBcIi4vdXNlU2VhcmNoXCI7XG5pbXBvcnQgdXNlQ2Fyb3VzZWwgZnJvbSBcIi4vdXNlQ2Fyb3VzZWxcIjtcbmltcG9ydCB7IGpzb25FbmMgfSBmcm9tIFwiLi9jdXN0b20taHRteFwiO1xuaW1wb3J0IHsgZm9ybWF0Q3VycmVuY3kgfSBmcm9tIFwiLi9jdXN0b20tYWxwaW5lXCI7XG5cbndpbmRvdy5IdG14ID0gSHRteDtcbkh0bXguZGVmaW5lRXh0ZW5zaW9uKCdqc29uLWVuYycsIGpzb25FbmMpO1xuXG53aW5kb3cuQWxwaW5lID0gQWxwaW5lO1xuQWxwaW5lLmRpcmVjdGl2ZShcImN1cnJlbmN5XCIsIGZvcm1hdEN1cnJlbmN5KTtcbkFscGluZS5wbHVnaW4ocGVyc2lzdCk7XG5BbHBpbmUuc3RvcmUoXCJjYXJ0U3RvcmVcIiwgY2FydFN0b3JlKEFscGluZSkpO1xuQWxwaW5lLmRhdGEoXCJ1c2VDYXJ0XCIsIHVzZUNhcnQpO1xuQWxwaW5lLmRhdGEoXCJ1c2VDYXJ0U3VtbWFyeVwiLCB1c2VDYXJ0U3VtbWFyeSk7XG5BbHBpbmUuZGF0YShcInVzZVNlYXJjaFwiLCB1c2VTZWFyY2gpO1xuQWxwaW5lLmRhdGEoXCJ1c2VDYXJvdXNlbFwiLCB1c2VDYXJvdXNlbCk7XG5BbHBpbmUuc3RhcnQoKTtcbiIsICIvLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvc2NoZWR1bGVyLmpzXG52YXIgZmx1c2hQZW5kaW5nID0gZmFsc2U7XG52YXIgZmx1c2hpbmcgPSBmYWxzZTtcbnZhciBxdWV1ZSA9IFtdO1xudmFyIGxhc3RGbHVzaGVkSW5kZXggPSAtMTtcbmZ1bmN0aW9uIHNjaGVkdWxlcihjYWxsYmFjaykge1xuICBxdWV1ZUpvYihjYWxsYmFjayk7XG59XG5mdW5jdGlvbiBxdWV1ZUpvYihqb2IpIHtcbiAgaWYgKCFxdWV1ZS5pbmNsdWRlcyhqb2IpKVxuICAgIHF1ZXVlLnB1c2goam9iKTtcbiAgcXVldWVGbHVzaCgpO1xufVxuZnVuY3Rpb24gZGVxdWV1ZUpvYihqb2IpIHtcbiAgbGV0IGluZGV4ID0gcXVldWUuaW5kZXhPZihqb2IpO1xuICBpZiAoaW5kZXggIT09IC0xICYmIGluZGV4ID4gbGFzdEZsdXNoZWRJbmRleClcbiAgICBxdWV1ZS5zcGxpY2UoaW5kZXgsIDEpO1xufVxuZnVuY3Rpb24gcXVldWVGbHVzaCgpIHtcbiAgaWYgKCFmbHVzaGluZyAmJiAhZmx1c2hQZW5kaW5nKSB7XG4gICAgZmx1c2hQZW5kaW5nID0gdHJ1ZTtcbiAgICBxdWV1ZU1pY3JvdGFzayhmbHVzaEpvYnMpO1xuICB9XG59XG5mdW5jdGlvbiBmbHVzaEpvYnMoKSB7XG4gIGZsdXNoUGVuZGluZyA9IGZhbHNlO1xuICBmbHVzaGluZyA9IHRydWU7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcXVldWUubGVuZ3RoOyBpKyspIHtcbiAgICBxdWV1ZVtpXSgpO1xuICAgIGxhc3RGbHVzaGVkSW5kZXggPSBpO1xuICB9XG4gIHF1ZXVlLmxlbmd0aCA9IDA7XG4gIGxhc3RGbHVzaGVkSW5kZXggPSAtMTtcbiAgZmx1c2hpbmcgPSBmYWxzZTtcbn1cblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL3JlYWN0aXZpdHkuanNcbnZhciByZWFjdGl2ZTtcbnZhciBlZmZlY3Q7XG52YXIgcmVsZWFzZTtcbnZhciByYXc7XG52YXIgc2hvdWxkU2NoZWR1bGUgPSB0cnVlO1xuZnVuY3Rpb24gZGlzYWJsZUVmZmVjdFNjaGVkdWxpbmcoY2FsbGJhY2spIHtcbiAgc2hvdWxkU2NoZWR1bGUgPSBmYWxzZTtcbiAgY2FsbGJhY2soKTtcbiAgc2hvdWxkU2NoZWR1bGUgPSB0cnVlO1xufVxuZnVuY3Rpb24gc2V0UmVhY3Rpdml0eUVuZ2luZShlbmdpbmUpIHtcbiAgcmVhY3RpdmUgPSBlbmdpbmUucmVhY3RpdmU7XG4gIHJlbGVhc2UgPSBlbmdpbmUucmVsZWFzZTtcbiAgZWZmZWN0ID0gKGNhbGxiYWNrKSA9PiBlbmdpbmUuZWZmZWN0KGNhbGxiYWNrLCB7IHNjaGVkdWxlcjogKHRhc2spID0+IHtcbiAgICBpZiAoc2hvdWxkU2NoZWR1bGUpIHtcbiAgICAgIHNjaGVkdWxlcih0YXNrKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGFzaygpO1xuICAgIH1cbiAgfSB9KTtcbiAgcmF3ID0gZW5naW5lLnJhdztcbn1cbmZ1bmN0aW9uIG92ZXJyaWRlRWZmZWN0KG92ZXJyaWRlKSB7XG4gIGVmZmVjdCA9IG92ZXJyaWRlO1xufVxuZnVuY3Rpb24gZWxlbWVudEJvdW5kRWZmZWN0KGVsKSB7XG4gIGxldCBjbGVhbnVwMiA9ICgpID0+IHtcbiAgfTtcbiAgbGV0IHdyYXBwZWRFZmZlY3QgPSAoY2FsbGJhY2spID0+IHtcbiAgICBsZXQgZWZmZWN0UmVmZXJlbmNlID0gZWZmZWN0KGNhbGxiYWNrKTtcbiAgICBpZiAoIWVsLl94X2VmZmVjdHMpIHtcbiAgICAgIGVsLl94X2VmZmVjdHMgPSAvKiBAX19QVVJFX18gKi8gbmV3IFNldCgpO1xuICAgICAgZWwuX3hfcnVuRWZmZWN0cyA9ICgpID0+IHtcbiAgICAgICAgZWwuX3hfZWZmZWN0cy5mb3JFYWNoKChpKSA9PiBpKCkpO1xuICAgICAgfTtcbiAgICB9XG4gICAgZWwuX3hfZWZmZWN0cy5hZGQoZWZmZWN0UmVmZXJlbmNlKTtcbiAgICBjbGVhbnVwMiA9ICgpID0+IHtcbiAgICAgIGlmIChlZmZlY3RSZWZlcmVuY2UgPT09IHZvaWQgMClcbiAgICAgICAgcmV0dXJuO1xuICAgICAgZWwuX3hfZWZmZWN0cy5kZWxldGUoZWZmZWN0UmVmZXJlbmNlKTtcbiAgICAgIHJlbGVhc2UoZWZmZWN0UmVmZXJlbmNlKTtcbiAgICB9O1xuICAgIHJldHVybiBlZmZlY3RSZWZlcmVuY2U7XG4gIH07XG4gIHJldHVybiBbd3JhcHBlZEVmZmVjdCwgKCkgPT4ge1xuICAgIGNsZWFudXAyKCk7XG4gIH1dO1xufVxuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvdXRpbHMvZGlzcGF0Y2guanNcbmZ1bmN0aW9uIGRpc3BhdGNoKGVsLCBuYW1lLCBkZXRhaWwgPSB7fSkge1xuICBlbC5kaXNwYXRjaEV2ZW50KFxuICAgIG5ldyBDdXN0b21FdmVudChuYW1lLCB7XG4gICAgICBkZXRhaWwsXG4gICAgICBidWJibGVzOiB0cnVlLFxuICAgICAgLy8gQWxsb3dzIGV2ZW50cyB0byBwYXNzIHRoZSBzaGFkb3cgRE9NIGJhcnJpZXIuXG4gICAgICBjb21wb3NlZDogdHJ1ZSxcbiAgICAgIGNhbmNlbGFibGU6IHRydWVcbiAgICB9KVxuICApO1xufVxuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvdXRpbHMvd2Fsay5qc1xuZnVuY3Rpb24gd2FsayhlbCwgY2FsbGJhY2spIHtcbiAgaWYgKHR5cGVvZiBTaGFkb3dSb290ID09PSBcImZ1bmN0aW9uXCIgJiYgZWwgaW5zdGFuY2VvZiBTaGFkb3dSb290KSB7XG4gICAgQXJyYXkuZnJvbShlbC5jaGlsZHJlbikuZm9yRWFjaCgoZWwyKSA9PiB3YWxrKGVsMiwgY2FsbGJhY2spKTtcbiAgICByZXR1cm47XG4gIH1cbiAgbGV0IHNraXAgPSBmYWxzZTtcbiAgY2FsbGJhY2soZWwsICgpID0+IHNraXAgPSB0cnVlKTtcbiAgaWYgKHNraXApXG4gICAgcmV0dXJuO1xuICBsZXQgbm9kZSA9IGVsLmZpcnN0RWxlbWVudENoaWxkO1xuICB3aGlsZSAobm9kZSkge1xuICAgIHdhbGsobm9kZSwgY2FsbGJhY2ssIGZhbHNlKTtcbiAgICBub2RlID0gbm9kZS5uZXh0RWxlbWVudFNpYmxpbmc7XG4gIH1cbn1cblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL3V0aWxzL3dhcm4uanNcbmZ1bmN0aW9uIHdhcm4obWVzc2FnZSwgLi4uYXJncykge1xuICBjb25zb2xlLndhcm4oYEFscGluZSBXYXJuaW5nOiAke21lc3NhZ2V9YCwgLi4uYXJncyk7XG59XG5cbi8vIHBhY2thZ2VzL2FscGluZWpzL3NyYy9saWZlY3ljbGUuanNcbnZhciBzdGFydGVkID0gZmFsc2U7XG5mdW5jdGlvbiBzdGFydCgpIHtcbiAgaWYgKHN0YXJ0ZWQpXG4gICAgd2FybihcIkFscGluZSBoYXMgYWxyZWFkeSBiZWVuIGluaXRpYWxpemVkIG9uIHRoaXMgcGFnZS4gQ2FsbGluZyBBbHBpbmUuc3RhcnQoKSBtb3JlIHRoYW4gb25jZSBjYW4gY2F1c2UgcHJvYmxlbXMuXCIpO1xuICBzdGFydGVkID0gdHJ1ZTtcbiAgaWYgKCFkb2N1bWVudC5ib2R5KVxuICAgIHdhcm4oXCJVbmFibGUgdG8gaW5pdGlhbGl6ZS4gVHJ5aW5nIHRvIGxvYWQgQWxwaW5lIGJlZm9yZSBgPGJvZHk+YCBpcyBhdmFpbGFibGUuIERpZCB5b3UgZm9yZ2V0IHRvIGFkZCBgZGVmZXJgIGluIEFscGluZSdzIGA8c2NyaXB0PmAgdGFnP1wiKTtcbiAgZGlzcGF0Y2goZG9jdW1lbnQsIFwiYWxwaW5lOmluaXRcIik7XG4gIGRpc3BhdGNoKGRvY3VtZW50LCBcImFscGluZTppbml0aWFsaXppbmdcIik7XG4gIHN0YXJ0T2JzZXJ2aW5nTXV0YXRpb25zKCk7XG4gIG9uRWxBZGRlZCgoZWwpID0+IGluaXRUcmVlKGVsLCB3YWxrKSk7XG4gIG9uRWxSZW1vdmVkKChlbCkgPT4gZGVzdHJveVRyZWUoZWwpKTtcbiAgb25BdHRyaWJ1dGVzQWRkZWQoKGVsLCBhdHRycykgPT4ge1xuICAgIGRpcmVjdGl2ZXMoZWwsIGF0dHJzKS5mb3JFYWNoKChoYW5kbGUpID0+IGhhbmRsZSgpKTtcbiAgfSk7XG4gIGxldCBvdXROZXN0ZWRDb21wb25lbnRzID0gKGVsKSA9PiAhY2xvc2VzdFJvb3QoZWwucGFyZW50RWxlbWVudCwgdHJ1ZSk7XG4gIEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChhbGxTZWxlY3RvcnMoKS5qb2luKFwiLFwiKSkpLmZpbHRlcihvdXROZXN0ZWRDb21wb25lbnRzKS5mb3JFYWNoKChlbCkgPT4ge1xuICAgIGluaXRUcmVlKGVsKTtcbiAgfSk7XG4gIGRpc3BhdGNoKGRvY3VtZW50LCBcImFscGluZTppbml0aWFsaXplZFwiKTtcbn1cbnZhciByb290U2VsZWN0b3JDYWxsYmFja3MgPSBbXTtcbnZhciBpbml0U2VsZWN0b3JDYWxsYmFja3MgPSBbXTtcbmZ1bmN0aW9uIHJvb3RTZWxlY3RvcnMoKSB7XG4gIHJldHVybiByb290U2VsZWN0b3JDYWxsYmFja3MubWFwKChmbikgPT4gZm4oKSk7XG59XG5mdW5jdGlvbiBhbGxTZWxlY3RvcnMoKSB7XG4gIHJldHVybiByb290U2VsZWN0b3JDYWxsYmFja3MuY29uY2F0KGluaXRTZWxlY3RvckNhbGxiYWNrcykubWFwKChmbikgPT4gZm4oKSk7XG59XG5mdW5jdGlvbiBhZGRSb290U2VsZWN0b3Ioc2VsZWN0b3JDYWxsYmFjaykge1xuICByb290U2VsZWN0b3JDYWxsYmFja3MucHVzaChzZWxlY3RvckNhbGxiYWNrKTtcbn1cbmZ1bmN0aW9uIGFkZEluaXRTZWxlY3RvcihzZWxlY3RvckNhbGxiYWNrKSB7XG4gIGluaXRTZWxlY3RvckNhbGxiYWNrcy5wdXNoKHNlbGVjdG9yQ2FsbGJhY2spO1xufVxuZnVuY3Rpb24gY2xvc2VzdFJvb3QoZWwsIGluY2x1ZGVJbml0U2VsZWN0b3JzID0gZmFsc2UpIHtcbiAgcmV0dXJuIGZpbmRDbG9zZXN0KGVsLCAoZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IHNlbGVjdG9ycyA9IGluY2x1ZGVJbml0U2VsZWN0b3JzID8gYWxsU2VsZWN0b3JzKCkgOiByb290U2VsZWN0b3JzKCk7XG4gICAgaWYgKHNlbGVjdG9ycy5zb21lKChzZWxlY3RvcikgPT4gZWxlbWVudC5tYXRjaGVzKHNlbGVjdG9yKSkpXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgfSk7XG59XG5mdW5jdGlvbiBmaW5kQ2xvc2VzdChlbCwgY2FsbGJhY2spIHtcbiAgaWYgKCFlbClcbiAgICByZXR1cm47XG4gIGlmIChjYWxsYmFjayhlbCkpXG4gICAgcmV0dXJuIGVsO1xuICBpZiAoZWwuX3hfdGVsZXBvcnRCYWNrKVxuICAgIGVsID0gZWwuX3hfdGVsZXBvcnRCYWNrO1xuICBpZiAoIWVsLnBhcmVudEVsZW1lbnQpXG4gICAgcmV0dXJuO1xuICByZXR1cm4gZmluZENsb3Nlc3QoZWwucGFyZW50RWxlbWVudCwgY2FsbGJhY2spO1xufVxuZnVuY3Rpb24gaXNSb290KGVsKSB7XG4gIHJldHVybiByb290U2VsZWN0b3JzKCkuc29tZSgoc2VsZWN0b3IpID0+IGVsLm1hdGNoZXMoc2VsZWN0b3IpKTtcbn1cbnZhciBpbml0SW50ZXJjZXB0b3JzID0gW107XG5mdW5jdGlvbiBpbnRlcmNlcHRJbml0KGNhbGxiYWNrKSB7XG4gIGluaXRJbnRlcmNlcHRvcnMucHVzaChjYWxsYmFjayk7XG59XG5mdW5jdGlvbiBpbml0VHJlZShlbCwgd2Fsa2VyID0gd2FsaywgaW50ZXJjZXB0ID0gKCkgPT4ge1xufSkge1xuICBkZWZlckhhbmRsaW5nRGlyZWN0aXZlcygoKSA9PiB7XG4gICAgd2Fsa2VyKGVsLCAoZWwyLCBza2lwKSA9PiB7XG4gICAgICBpbnRlcmNlcHQoZWwyLCBza2lwKTtcbiAgICAgIGluaXRJbnRlcmNlcHRvcnMuZm9yRWFjaCgoaSkgPT4gaShlbDIsIHNraXApKTtcbiAgICAgIGRpcmVjdGl2ZXMoZWwyLCBlbDIuYXR0cmlidXRlcykuZm9yRWFjaCgoaGFuZGxlKSA9PiBoYW5kbGUoKSk7XG4gICAgICBlbDIuX3hfaWdub3JlICYmIHNraXAoKTtcbiAgICB9KTtcbiAgfSk7XG59XG5mdW5jdGlvbiBkZXN0cm95VHJlZShyb290KSB7XG4gIHdhbGsocm9vdCwgKGVsKSA9PiB7XG4gICAgY2xlYW51cEF0dHJpYnV0ZXMoZWwpO1xuICAgIGNsZWFudXBFbGVtZW50KGVsKTtcbiAgfSk7XG59XG5cbi8vIHBhY2thZ2VzL2FscGluZWpzL3NyYy9tdXRhdGlvbi5qc1xudmFyIG9uQXR0cmlidXRlQWRkZWRzID0gW107XG52YXIgb25FbFJlbW92ZWRzID0gW107XG52YXIgb25FbEFkZGVkcyA9IFtdO1xuZnVuY3Rpb24gb25FbEFkZGVkKGNhbGxiYWNrKSB7XG4gIG9uRWxBZGRlZHMucHVzaChjYWxsYmFjayk7XG59XG5mdW5jdGlvbiBvbkVsUmVtb3ZlZChlbCwgY2FsbGJhY2spIHtcbiAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgaWYgKCFlbC5feF9jbGVhbnVwcylcbiAgICAgIGVsLl94X2NsZWFudXBzID0gW107XG4gICAgZWwuX3hfY2xlYW51cHMucHVzaChjYWxsYmFjayk7XG4gIH0gZWxzZSB7XG4gICAgY2FsbGJhY2sgPSBlbDtcbiAgICBvbkVsUmVtb3ZlZHMucHVzaChjYWxsYmFjayk7XG4gIH1cbn1cbmZ1bmN0aW9uIG9uQXR0cmlidXRlc0FkZGVkKGNhbGxiYWNrKSB7XG4gIG9uQXR0cmlidXRlQWRkZWRzLnB1c2goY2FsbGJhY2spO1xufVxuZnVuY3Rpb24gb25BdHRyaWJ1dGVSZW1vdmVkKGVsLCBuYW1lLCBjYWxsYmFjaykge1xuICBpZiAoIWVsLl94X2F0dHJpYnV0ZUNsZWFudXBzKVxuICAgIGVsLl94X2F0dHJpYnV0ZUNsZWFudXBzID0ge307XG4gIGlmICghZWwuX3hfYXR0cmlidXRlQ2xlYW51cHNbbmFtZV0pXG4gICAgZWwuX3hfYXR0cmlidXRlQ2xlYW51cHNbbmFtZV0gPSBbXTtcbiAgZWwuX3hfYXR0cmlidXRlQ2xlYW51cHNbbmFtZV0ucHVzaChjYWxsYmFjayk7XG59XG5mdW5jdGlvbiBjbGVhbnVwQXR0cmlidXRlcyhlbCwgbmFtZXMpIHtcbiAgaWYgKCFlbC5feF9hdHRyaWJ1dGVDbGVhbnVwcylcbiAgICByZXR1cm47XG4gIE9iamVjdC5lbnRyaWVzKGVsLl94X2F0dHJpYnV0ZUNsZWFudXBzKS5mb3JFYWNoKChbbmFtZSwgdmFsdWVdKSA9PiB7XG4gICAgaWYgKG5hbWVzID09PSB2b2lkIDAgfHwgbmFtZXMuaW5jbHVkZXMobmFtZSkpIHtcbiAgICAgIHZhbHVlLmZvckVhY2goKGkpID0+IGkoKSk7XG4gICAgICBkZWxldGUgZWwuX3hfYXR0cmlidXRlQ2xlYW51cHNbbmFtZV07XG4gICAgfVxuICB9KTtcbn1cbmZ1bmN0aW9uIGNsZWFudXBFbGVtZW50KGVsKSB7XG4gIGlmIChlbC5feF9jbGVhbnVwcykge1xuICAgIHdoaWxlIChlbC5feF9jbGVhbnVwcy5sZW5ndGgpXG4gICAgICBlbC5feF9jbGVhbnVwcy5wb3AoKSgpO1xuICB9XG59XG52YXIgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihvbk11dGF0ZSk7XG52YXIgY3VycmVudGx5T2JzZXJ2aW5nID0gZmFsc2U7XG5mdW5jdGlvbiBzdGFydE9ic2VydmluZ011dGF0aW9ucygpIHtcbiAgb2JzZXJ2ZXIub2JzZXJ2ZShkb2N1bWVudCwgeyBzdWJ0cmVlOiB0cnVlLCBjaGlsZExpc3Q6IHRydWUsIGF0dHJpYnV0ZXM6IHRydWUsIGF0dHJpYnV0ZU9sZFZhbHVlOiB0cnVlIH0pO1xuICBjdXJyZW50bHlPYnNlcnZpbmcgPSB0cnVlO1xufVxuZnVuY3Rpb24gc3RvcE9ic2VydmluZ011dGF0aW9ucygpIHtcbiAgZmx1c2hPYnNlcnZlcigpO1xuICBvYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gIGN1cnJlbnRseU9ic2VydmluZyA9IGZhbHNlO1xufVxudmFyIHJlY29yZFF1ZXVlID0gW107XG52YXIgd2lsbFByb2Nlc3NSZWNvcmRRdWV1ZSA9IGZhbHNlO1xuZnVuY3Rpb24gZmx1c2hPYnNlcnZlcigpIHtcbiAgcmVjb3JkUXVldWUgPSByZWNvcmRRdWV1ZS5jb25jYXQob2JzZXJ2ZXIudGFrZVJlY29yZHMoKSk7XG4gIGlmIChyZWNvcmRRdWV1ZS5sZW5ndGggJiYgIXdpbGxQcm9jZXNzUmVjb3JkUXVldWUpIHtcbiAgICB3aWxsUHJvY2Vzc1JlY29yZFF1ZXVlID0gdHJ1ZTtcbiAgICBxdWV1ZU1pY3JvdGFzaygoKSA9PiB7XG4gICAgICBwcm9jZXNzUmVjb3JkUXVldWUoKTtcbiAgICAgIHdpbGxQcm9jZXNzUmVjb3JkUXVldWUgPSBmYWxzZTtcbiAgICB9KTtcbiAgfVxufVxuZnVuY3Rpb24gcHJvY2Vzc1JlY29yZFF1ZXVlKCkge1xuICBvbk11dGF0ZShyZWNvcmRRdWV1ZSk7XG4gIHJlY29yZFF1ZXVlLmxlbmd0aCA9IDA7XG59XG5mdW5jdGlvbiBtdXRhdGVEb20oY2FsbGJhY2spIHtcbiAgaWYgKCFjdXJyZW50bHlPYnNlcnZpbmcpXG4gICAgcmV0dXJuIGNhbGxiYWNrKCk7XG4gIHN0b3BPYnNlcnZpbmdNdXRhdGlvbnMoKTtcbiAgbGV0IHJlc3VsdCA9IGNhbGxiYWNrKCk7XG4gIHN0YXJ0T2JzZXJ2aW5nTXV0YXRpb25zKCk7XG4gIHJldHVybiByZXN1bHQ7XG59XG52YXIgaXNDb2xsZWN0aW5nID0gZmFsc2U7XG52YXIgZGVmZXJyZWRNdXRhdGlvbnMgPSBbXTtcbmZ1bmN0aW9uIGRlZmVyTXV0YXRpb25zKCkge1xuICBpc0NvbGxlY3RpbmcgPSB0cnVlO1xufVxuZnVuY3Rpb24gZmx1c2hBbmRTdG9wRGVmZXJyaW5nTXV0YXRpb25zKCkge1xuICBpc0NvbGxlY3RpbmcgPSBmYWxzZTtcbiAgb25NdXRhdGUoZGVmZXJyZWRNdXRhdGlvbnMpO1xuICBkZWZlcnJlZE11dGF0aW9ucyA9IFtdO1xufVxuZnVuY3Rpb24gb25NdXRhdGUobXV0YXRpb25zKSB7XG4gIGlmIChpc0NvbGxlY3RpbmcpIHtcbiAgICBkZWZlcnJlZE11dGF0aW9ucyA9IGRlZmVycmVkTXV0YXRpb25zLmNvbmNhdChtdXRhdGlvbnMpO1xuICAgIHJldHVybjtcbiAgfVxuICBsZXQgYWRkZWROb2RlcyA9IFtdO1xuICBsZXQgcmVtb3ZlZE5vZGVzID0gW107XG4gIGxldCBhZGRlZEF0dHJpYnV0ZXMgPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpO1xuICBsZXQgcmVtb3ZlZEF0dHJpYnV0ZXMgPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG11dGF0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChtdXRhdGlvbnNbaV0udGFyZ2V0Ll94X2lnbm9yZU11dGF0aW9uT2JzZXJ2ZXIpXG4gICAgICBjb250aW51ZTtcbiAgICBpZiAobXV0YXRpb25zW2ldLnR5cGUgPT09IFwiY2hpbGRMaXN0XCIpIHtcbiAgICAgIG11dGF0aW9uc1tpXS5hZGRlZE5vZGVzLmZvckVhY2goKG5vZGUpID0+IG5vZGUubm9kZVR5cGUgPT09IDEgJiYgYWRkZWROb2Rlcy5wdXNoKG5vZGUpKTtcbiAgICAgIG11dGF0aW9uc1tpXS5yZW1vdmVkTm9kZXMuZm9yRWFjaCgobm9kZSkgPT4gbm9kZS5ub2RlVHlwZSA9PT0gMSAmJiByZW1vdmVkTm9kZXMucHVzaChub2RlKSk7XG4gICAgfVxuICAgIGlmIChtdXRhdGlvbnNbaV0udHlwZSA9PT0gXCJhdHRyaWJ1dGVzXCIpIHtcbiAgICAgIGxldCBlbCA9IG11dGF0aW9uc1tpXS50YXJnZXQ7XG4gICAgICBsZXQgbmFtZSA9IG11dGF0aW9uc1tpXS5hdHRyaWJ1dGVOYW1lO1xuICAgICAgbGV0IG9sZFZhbHVlID0gbXV0YXRpb25zW2ldLm9sZFZhbHVlO1xuICAgICAgbGV0IGFkZDIgPSAoKSA9PiB7XG4gICAgICAgIGlmICghYWRkZWRBdHRyaWJ1dGVzLmhhcyhlbCkpXG4gICAgICAgICAgYWRkZWRBdHRyaWJ1dGVzLnNldChlbCwgW10pO1xuICAgICAgICBhZGRlZEF0dHJpYnV0ZXMuZ2V0KGVsKS5wdXNoKHsgbmFtZSwgdmFsdWU6IGVsLmdldEF0dHJpYnV0ZShuYW1lKSB9KTtcbiAgICAgIH07XG4gICAgICBsZXQgcmVtb3ZlID0gKCkgPT4ge1xuICAgICAgICBpZiAoIXJlbW92ZWRBdHRyaWJ1dGVzLmhhcyhlbCkpXG4gICAgICAgICAgcmVtb3ZlZEF0dHJpYnV0ZXMuc2V0KGVsLCBbXSk7XG4gICAgICAgIHJlbW92ZWRBdHRyaWJ1dGVzLmdldChlbCkucHVzaChuYW1lKTtcbiAgICAgIH07XG4gICAgICBpZiAoZWwuaGFzQXR0cmlidXRlKG5hbWUpICYmIG9sZFZhbHVlID09PSBudWxsKSB7XG4gICAgICAgIGFkZDIoKTtcbiAgICAgIH0gZWxzZSBpZiAoZWwuaGFzQXR0cmlidXRlKG5hbWUpKSB7XG4gICAgICAgIHJlbW92ZSgpO1xuICAgICAgICBhZGQyKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZW1vdmUoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmVtb3ZlZEF0dHJpYnV0ZXMuZm9yRWFjaCgoYXR0cnMsIGVsKSA9PiB7XG4gICAgY2xlYW51cEF0dHJpYnV0ZXMoZWwsIGF0dHJzKTtcbiAgfSk7XG4gIGFkZGVkQXR0cmlidXRlcy5mb3JFYWNoKChhdHRycywgZWwpID0+IHtcbiAgICBvbkF0dHJpYnV0ZUFkZGVkcy5mb3JFYWNoKChpKSA9PiBpKGVsLCBhdHRycykpO1xuICB9KTtcbiAgZm9yIChsZXQgbm9kZSBvZiByZW1vdmVkTm9kZXMpIHtcbiAgICBpZiAoYWRkZWROb2Rlcy5pbmNsdWRlcyhub2RlKSlcbiAgICAgIGNvbnRpbnVlO1xuICAgIG9uRWxSZW1vdmVkcy5mb3JFYWNoKChpKSA9PiBpKG5vZGUpKTtcbiAgICBkZXN0cm95VHJlZShub2RlKTtcbiAgfVxuICBhZGRlZE5vZGVzLmZvckVhY2goKG5vZGUpID0+IHtcbiAgICBub2RlLl94X2lnbm9yZVNlbGYgPSB0cnVlO1xuICAgIG5vZGUuX3hfaWdub3JlID0gdHJ1ZTtcbiAgfSk7XG4gIGZvciAobGV0IG5vZGUgb2YgYWRkZWROb2Rlcykge1xuICAgIGlmIChyZW1vdmVkTm9kZXMuaW5jbHVkZXMobm9kZSkpXG4gICAgICBjb250aW51ZTtcbiAgICBpZiAoIW5vZGUuaXNDb25uZWN0ZWQpXG4gICAgICBjb250aW51ZTtcbiAgICBkZWxldGUgbm9kZS5feF9pZ25vcmVTZWxmO1xuICAgIGRlbGV0ZSBub2RlLl94X2lnbm9yZTtcbiAgICBvbkVsQWRkZWRzLmZvckVhY2goKGkpID0+IGkobm9kZSkpO1xuICAgIG5vZGUuX3hfaWdub3JlID0gdHJ1ZTtcbiAgICBub2RlLl94X2lnbm9yZVNlbGYgPSB0cnVlO1xuICB9XG4gIGFkZGVkTm9kZXMuZm9yRWFjaCgobm9kZSkgPT4ge1xuICAgIGRlbGV0ZSBub2RlLl94X2lnbm9yZVNlbGY7XG4gICAgZGVsZXRlIG5vZGUuX3hfaWdub3JlO1xuICB9KTtcbiAgYWRkZWROb2RlcyA9IG51bGw7XG4gIHJlbW92ZWROb2RlcyA9IG51bGw7XG4gIGFkZGVkQXR0cmlidXRlcyA9IG51bGw7XG4gIHJlbW92ZWRBdHRyaWJ1dGVzID0gbnVsbDtcbn1cblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL3Njb3BlLmpzXG5mdW5jdGlvbiBzY29wZShub2RlKSB7XG4gIHJldHVybiBtZXJnZVByb3hpZXMoY2xvc2VzdERhdGFTdGFjayhub2RlKSk7XG59XG5mdW5jdGlvbiBhZGRTY29wZVRvTm9kZShub2RlLCBkYXRhMiwgcmVmZXJlbmNlTm9kZSkge1xuICBub2RlLl94X2RhdGFTdGFjayA9IFtkYXRhMiwgLi4uY2xvc2VzdERhdGFTdGFjayhyZWZlcmVuY2VOb2RlIHx8IG5vZGUpXTtcbiAgcmV0dXJuICgpID0+IHtcbiAgICBub2RlLl94X2RhdGFTdGFjayA9IG5vZGUuX3hfZGF0YVN0YWNrLmZpbHRlcigoaSkgPT4gaSAhPT0gZGF0YTIpO1xuICB9O1xufVxuZnVuY3Rpb24gY2xvc2VzdERhdGFTdGFjayhub2RlKSB7XG4gIGlmIChub2RlLl94X2RhdGFTdGFjaylcbiAgICByZXR1cm4gbm9kZS5feF9kYXRhU3RhY2s7XG4gIGlmICh0eXBlb2YgU2hhZG93Um9vdCA9PT0gXCJmdW5jdGlvblwiICYmIG5vZGUgaW5zdGFuY2VvZiBTaGFkb3dSb290KSB7XG4gICAgcmV0dXJuIGNsb3Nlc3REYXRhU3RhY2sobm9kZS5ob3N0KTtcbiAgfVxuICBpZiAoIW5vZGUucGFyZW50Tm9kZSkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuICByZXR1cm4gY2xvc2VzdERhdGFTdGFjayhub2RlLnBhcmVudE5vZGUpO1xufVxuZnVuY3Rpb24gbWVyZ2VQcm94aWVzKG9iamVjdHMpIHtcbiAgcmV0dXJuIG5ldyBQcm94eSh7IG9iamVjdHMgfSwgbWVyZ2VQcm94eVRyYXApO1xufVxudmFyIG1lcmdlUHJveHlUcmFwID0ge1xuICBvd25LZXlzKHsgb2JqZWN0cyB9KSB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20oXG4gICAgICBuZXcgU2V0KG9iamVjdHMuZmxhdE1hcCgoaSkgPT4gT2JqZWN0LmtleXMoaSkpKVxuICAgICk7XG4gIH0sXG4gIGhhcyh7IG9iamVjdHMgfSwgbmFtZSkge1xuICAgIGlmIChuYW1lID09IFN5bWJvbC51bnNjb3BhYmxlcylcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gb2JqZWN0cy5zb21lKFxuICAgICAgKG9iaikgPT4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgbmFtZSlcbiAgICApO1xuICB9LFxuICBnZXQoeyBvYmplY3RzIH0sIG5hbWUsIHRoaXNQcm94eSkge1xuICAgIGlmIChuYW1lID09IFwidG9KU09OXCIpXG4gICAgICByZXR1cm4gY29sbGFwc2VQcm94aWVzO1xuICAgIHJldHVybiBSZWZsZWN0LmdldChcbiAgICAgIG9iamVjdHMuZmluZChcbiAgICAgICAgKG9iaikgPT4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgbmFtZSlcbiAgICAgICkgfHwge30sXG4gICAgICBuYW1lLFxuICAgICAgdGhpc1Byb3h5XG4gICAgKTtcbiAgfSxcbiAgc2V0KHsgb2JqZWN0cyB9LCBuYW1lLCB2YWx1ZSwgdGhpc1Byb3h5KSB7XG4gICAgY29uc3QgdGFyZ2V0ID0gb2JqZWN0cy5maW5kKFxuICAgICAgKG9iaikgPT4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgbmFtZSlcbiAgICApIHx8IG9iamVjdHNbb2JqZWN0cy5sZW5ndGggLSAxXTtcbiAgICBjb25zdCBkZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIG5hbWUpO1xuICAgIGlmIChkZXNjcmlwdG9yPy5zZXQgJiYgZGVzY3JpcHRvcj8uZ2V0KVxuICAgICAgcmV0dXJuIFJlZmxlY3Quc2V0KHRhcmdldCwgbmFtZSwgdmFsdWUsIHRoaXNQcm94eSk7XG4gICAgcmV0dXJuIFJlZmxlY3Quc2V0KHRhcmdldCwgbmFtZSwgdmFsdWUpO1xuICB9XG59O1xuZnVuY3Rpb24gY29sbGFwc2VQcm94aWVzKCkge1xuICBsZXQga2V5cyA9IFJlZmxlY3Qub3duS2V5cyh0aGlzKTtcbiAgcmV0dXJuIGtleXMucmVkdWNlKChhY2MsIGtleSkgPT4ge1xuICAgIGFjY1trZXldID0gUmVmbGVjdC5nZXQodGhpcywga2V5KTtcbiAgICByZXR1cm4gYWNjO1xuICB9LCB7fSk7XG59XG5cbi8vIHBhY2thZ2VzL2FscGluZWpzL3NyYy9pbnRlcmNlcHRvci5qc1xuZnVuY3Rpb24gaW5pdEludGVyY2VwdG9yczIoZGF0YTIpIHtcbiAgbGV0IGlzT2JqZWN0MiA9ICh2YWwpID0+IHR5cGVvZiB2YWwgPT09IFwib2JqZWN0XCIgJiYgIUFycmF5LmlzQXJyYXkodmFsKSAmJiB2YWwgIT09IG51bGw7XG4gIGxldCByZWN1cnNlID0gKG9iaiwgYmFzZVBhdGggPSBcIlwiKSA9PiB7XG4gICAgT2JqZWN0LmVudHJpZXMoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMob2JqKSkuZm9yRWFjaCgoW2tleSwgeyB2YWx1ZSwgZW51bWVyYWJsZSB9XSkgPT4ge1xuICAgICAgaWYgKGVudW1lcmFibGUgPT09IGZhbHNlIHx8IHZhbHVlID09PSB2b2lkIDApXG4gICAgICAgIHJldHVybjtcbiAgICAgIGxldCBwYXRoID0gYmFzZVBhdGggPT09IFwiXCIgPyBrZXkgOiBgJHtiYXNlUGF0aH0uJHtrZXl9YDtcbiAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiYgdmFsdWUgIT09IG51bGwgJiYgdmFsdWUuX3hfaW50ZXJjZXB0b3IpIHtcbiAgICAgICAgb2JqW2tleV0gPSB2YWx1ZS5pbml0aWFsaXplKGRhdGEyLCBwYXRoLCBrZXkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGlzT2JqZWN0Mih2YWx1ZSkgJiYgdmFsdWUgIT09IG9iaiAmJiAhKHZhbHVlIGluc3RhbmNlb2YgRWxlbWVudCkpIHtcbiAgICAgICAgICByZWN1cnNlKHZhbHVlLCBwYXRoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9O1xuICByZXR1cm4gcmVjdXJzZShkYXRhMik7XG59XG5mdW5jdGlvbiBpbnRlcmNlcHRvcihjYWxsYmFjaywgbXV0YXRlT2JqID0gKCkgPT4ge1xufSkge1xuICBsZXQgb2JqID0ge1xuICAgIGluaXRpYWxWYWx1ZTogdm9pZCAwLFxuICAgIF94X2ludGVyY2VwdG9yOiB0cnVlLFxuICAgIGluaXRpYWxpemUoZGF0YTIsIHBhdGgsIGtleSkge1xuICAgICAgcmV0dXJuIGNhbGxiYWNrKHRoaXMuaW5pdGlhbFZhbHVlLCAoKSA9PiBnZXQoZGF0YTIsIHBhdGgpLCAodmFsdWUpID0+IHNldChkYXRhMiwgcGF0aCwgdmFsdWUpLCBwYXRoLCBrZXkpO1xuICAgIH1cbiAgfTtcbiAgbXV0YXRlT2JqKG9iaik7XG4gIHJldHVybiAoaW5pdGlhbFZhbHVlKSA9PiB7XG4gICAgaWYgKHR5cGVvZiBpbml0aWFsVmFsdWUgPT09IFwib2JqZWN0XCIgJiYgaW5pdGlhbFZhbHVlICE9PSBudWxsICYmIGluaXRpYWxWYWx1ZS5feF9pbnRlcmNlcHRvcikge1xuICAgICAgbGV0IGluaXRpYWxpemUgPSBvYmouaW5pdGlhbGl6ZS5iaW5kKG9iaik7XG4gICAgICBvYmouaW5pdGlhbGl6ZSA9IChkYXRhMiwgcGF0aCwga2V5KSA9PiB7XG4gICAgICAgIGxldCBpbm5lclZhbHVlID0gaW5pdGlhbFZhbHVlLmluaXRpYWxpemUoZGF0YTIsIHBhdGgsIGtleSk7XG4gICAgICAgIG9iai5pbml0aWFsVmFsdWUgPSBpbm5lclZhbHVlO1xuICAgICAgICByZXR1cm4gaW5pdGlhbGl6ZShkYXRhMiwgcGF0aCwga2V5KTtcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIG9iai5pbml0aWFsVmFsdWUgPSBpbml0aWFsVmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBvYmo7XG4gIH07XG59XG5mdW5jdGlvbiBnZXQob2JqLCBwYXRoKSB7XG4gIHJldHVybiBwYXRoLnNwbGl0KFwiLlwiKS5yZWR1Y2UoKGNhcnJ5LCBzZWdtZW50KSA9PiBjYXJyeVtzZWdtZW50XSwgb2JqKTtcbn1cbmZ1bmN0aW9uIHNldChvYmosIHBhdGgsIHZhbHVlKSB7XG4gIGlmICh0eXBlb2YgcGF0aCA9PT0gXCJzdHJpbmdcIilcbiAgICBwYXRoID0gcGF0aC5zcGxpdChcIi5cIik7XG4gIGlmIChwYXRoLmxlbmd0aCA9PT0gMSlcbiAgICBvYmpbcGF0aFswXV0gPSB2YWx1ZTtcbiAgZWxzZSBpZiAocGF0aC5sZW5ndGggPT09IDApXG4gICAgdGhyb3cgZXJyb3I7XG4gIGVsc2Uge1xuICAgIGlmIChvYmpbcGF0aFswXV0pXG4gICAgICByZXR1cm4gc2V0KG9ialtwYXRoWzBdXSwgcGF0aC5zbGljZSgxKSwgdmFsdWUpO1xuICAgIGVsc2Uge1xuICAgICAgb2JqW3BhdGhbMF1dID0ge307XG4gICAgICByZXR1cm4gc2V0KG9ialtwYXRoWzBdXSwgcGF0aC5zbGljZSgxKSwgdmFsdWUpO1xuICAgIH1cbiAgfVxufVxuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvbWFnaWNzLmpzXG52YXIgbWFnaWNzID0ge307XG5mdW5jdGlvbiBtYWdpYyhuYW1lLCBjYWxsYmFjaykge1xuICBtYWdpY3NbbmFtZV0gPSBjYWxsYmFjaztcbn1cbmZ1bmN0aW9uIGluamVjdE1hZ2ljcyhvYmosIGVsKSB7XG4gIE9iamVjdC5lbnRyaWVzKG1hZ2ljcykuZm9yRWFjaCgoW25hbWUsIGNhbGxiYWNrXSkgPT4ge1xuICAgIGxldCBtZW1vaXplZFV0aWxpdGllcyA9IG51bGw7XG4gICAgZnVuY3Rpb24gZ2V0VXRpbGl0aWVzKCkge1xuICAgICAgaWYgKG1lbW9pemVkVXRpbGl0aWVzKSB7XG4gICAgICAgIHJldHVybiBtZW1vaXplZFV0aWxpdGllcztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBbdXRpbGl0aWVzLCBjbGVhbnVwMl0gPSBnZXRFbGVtZW50Qm91bmRVdGlsaXRpZXMoZWwpO1xuICAgICAgICBtZW1vaXplZFV0aWxpdGllcyA9IHsgaW50ZXJjZXB0b3IsIC4uLnV0aWxpdGllcyB9O1xuICAgICAgICBvbkVsUmVtb3ZlZChlbCwgY2xlYW51cDIpO1xuICAgICAgICByZXR1cm4gbWVtb2l6ZWRVdGlsaXRpZXM7XG4gICAgICB9XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGAkJHtuYW1lfWAsIHtcbiAgICAgIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIGNhbGxiYWNrKGVsLCBnZXRVdGlsaXRpZXMoKSk7XG4gICAgICB9LFxuICAgICAgZW51bWVyYWJsZTogZmFsc2VcbiAgICB9KTtcbiAgfSk7XG4gIHJldHVybiBvYmo7XG59XG5cbi8vIHBhY2thZ2VzL2FscGluZWpzL3NyYy91dGlscy9lcnJvci5qc1xuZnVuY3Rpb24gdHJ5Q2F0Y2goZWwsIGV4cHJlc3Npb24sIGNhbGxiYWNrLCAuLi5hcmdzKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGNhbGxiYWNrKC4uLmFyZ3MpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgaGFuZGxlRXJyb3IoZSwgZWwsIGV4cHJlc3Npb24pO1xuICB9XG59XG5mdW5jdGlvbiBoYW5kbGVFcnJvcihlcnJvcjIsIGVsLCBleHByZXNzaW9uID0gdm9pZCAwKSB7XG4gIE9iamVjdC5hc3NpZ24oZXJyb3IyLCB7IGVsLCBleHByZXNzaW9uIH0pO1xuICBjb25zb2xlLndhcm4oYEFscGluZSBFeHByZXNzaW9uIEVycm9yOiAke2Vycm9yMi5tZXNzYWdlfVxuXG4ke2V4cHJlc3Npb24gPyAnRXhwcmVzc2lvbjogXCInICsgZXhwcmVzc2lvbiArICdcIlxcblxcbicgOiBcIlwifWAsIGVsKTtcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgdGhyb3cgZXJyb3IyO1xuICB9LCAwKTtcbn1cblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL2V2YWx1YXRvci5qc1xudmFyIHNob3VsZEF1dG9FdmFsdWF0ZUZ1bmN0aW9ucyA9IHRydWU7XG5mdW5jdGlvbiBkb250QXV0b0V2YWx1YXRlRnVuY3Rpb25zKGNhbGxiYWNrKSB7XG4gIGxldCBjYWNoZSA9IHNob3VsZEF1dG9FdmFsdWF0ZUZ1bmN0aW9ucztcbiAgc2hvdWxkQXV0b0V2YWx1YXRlRnVuY3Rpb25zID0gZmFsc2U7XG4gIGxldCByZXN1bHQgPSBjYWxsYmFjaygpO1xuICBzaG91bGRBdXRvRXZhbHVhdGVGdW5jdGlvbnMgPSBjYWNoZTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIGV2YWx1YXRlKGVsLCBleHByZXNzaW9uLCBleHRyYXMgPSB7fSkge1xuICBsZXQgcmVzdWx0O1xuICBldmFsdWF0ZUxhdGVyKGVsLCBleHByZXNzaW9uKSgodmFsdWUpID0+IHJlc3VsdCA9IHZhbHVlLCBleHRyYXMpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gZXZhbHVhdGVMYXRlciguLi5hcmdzKSB7XG4gIHJldHVybiB0aGVFdmFsdWF0b3JGdW5jdGlvbiguLi5hcmdzKTtcbn1cbnZhciB0aGVFdmFsdWF0b3JGdW5jdGlvbiA9IG5vcm1hbEV2YWx1YXRvcjtcbmZ1bmN0aW9uIHNldEV2YWx1YXRvcihuZXdFdmFsdWF0b3IpIHtcbiAgdGhlRXZhbHVhdG9yRnVuY3Rpb24gPSBuZXdFdmFsdWF0b3I7XG59XG5mdW5jdGlvbiBub3JtYWxFdmFsdWF0b3IoZWwsIGV4cHJlc3Npb24pIHtcbiAgbGV0IG92ZXJyaWRkZW5NYWdpY3MgPSB7fTtcbiAgaW5qZWN0TWFnaWNzKG92ZXJyaWRkZW5NYWdpY3MsIGVsKTtcbiAgbGV0IGRhdGFTdGFjayA9IFtvdmVycmlkZGVuTWFnaWNzLCAuLi5jbG9zZXN0RGF0YVN0YWNrKGVsKV07XG4gIGxldCBldmFsdWF0b3IgPSB0eXBlb2YgZXhwcmVzc2lvbiA9PT0gXCJmdW5jdGlvblwiID8gZ2VuZXJhdGVFdmFsdWF0b3JGcm9tRnVuY3Rpb24oZGF0YVN0YWNrLCBleHByZXNzaW9uKSA6IGdlbmVyYXRlRXZhbHVhdG9yRnJvbVN0cmluZyhkYXRhU3RhY2ssIGV4cHJlc3Npb24sIGVsKTtcbiAgcmV0dXJuIHRyeUNhdGNoLmJpbmQobnVsbCwgZWwsIGV4cHJlc3Npb24sIGV2YWx1YXRvcik7XG59XG5mdW5jdGlvbiBnZW5lcmF0ZUV2YWx1YXRvckZyb21GdW5jdGlvbihkYXRhU3RhY2ssIGZ1bmMpIHtcbiAgcmV0dXJuIChyZWNlaXZlciA9ICgpID0+IHtcbiAgfSwgeyBzY29wZTogc2NvcGUyID0ge30sIHBhcmFtcyA9IFtdIH0gPSB7fSkgPT4ge1xuICAgIGxldCByZXN1bHQgPSBmdW5jLmFwcGx5KG1lcmdlUHJveGllcyhbc2NvcGUyLCAuLi5kYXRhU3RhY2tdKSwgcGFyYW1zKTtcbiAgICBydW5JZlR5cGVPZkZ1bmN0aW9uKHJlY2VpdmVyLCByZXN1bHQpO1xuICB9O1xufVxudmFyIGV2YWx1YXRvck1lbW8gPSB7fTtcbmZ1bmN0aW9uIGdlbmVyYXRlRnVuY3Rpb25Gcm9tU3RyaW5nKGV4cHJlc3Npb24sIGVsKSB7XG4gIGlmIChldmFsdWF0b3JNZW1vW2V4cHJlc3Npb25dKSB7XG4gICAgcmV0dXJuIGV2YWx1YXRvck1lbW9bZXhwcmVzc2lvbl07XG4gIH1cbiAgbGV0IEFzeW5jRnVuY3Rpb24gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoYXN5bmMgZnVuY3Rpb24oKSB7XG4gIH0pLmNvbnN0cnVjdG9yO1xuICBsZXQgcmlnaHRTaWRlU2FmZUV4cHJlc3Npb24gPSAvXltcXG5cXHNdKmlmLipcXCguKlxcKS8udGVzdChleHByZXNzaW9uLnRyaW0oKSkgfHwgL14obGV0fGNvbnN0KVxccy8udGVzdChleHByZXNzaW9uLnRyaW0oKSkgPyBgKGFzeW5jKCk9PnsgJHtleHByZXNzaW9ufSB9KSgpYCA6IGV4cHJlc3Npb247XG4gIGNvbnN0IHNhZmVBc3luY0Z1bmN0aW9uID0gKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBsZXQgZnVuYzIgPSBuZXcgQXN5bmNGdW5jdGlvbihcbiAgICAgICAgW1wiX19zZWxmXCIsIFwic2NvcGVcIl0sXG4gICAgICAgIGB3aXRoIChzY29wZSkgeyBfX3NlbGYucmVzdWx0ID0gJHtyaWdodFNpZGVTYWZlRXhwcmVzc2lvbn0gfTsgX19zZWxmLmZpbmlzaGVkID0gdHJ1ZTsgcmV0dXJuIF9fc2VsZi5yZXN1bHQ7YFxuICAgICAgKTtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmdW5jMiwgXCJuYW1lXCIsIHtcbiAgICAgICAgdmFsdWU6IGBbQWxwaW5lXSAke2V4cHJlc3Npb259YFxuICAgICAgfSk7XG4gICAgICByZXR1cm4gZnVuYzI7XG4gICAgfSBjYXRjaCAoZXJyb3IyKSB7XG4gICAgICBoYW5kbGVFcnJvcihlcnJvcjIsIGVsLCBleHByZXNzaW9uKTtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICB9XG4gIH07XG4gIGxldCBmdW5jID0gc2FmZUFzeW5jRnVuY3Rpb24oKTtcbiAgZXZhbHVhdG9yTWVtb1tleHByZXNzaW9uXSA9IGZ1bmM7XG4gIHJldHVybiBmdW5jO1xufVxuZnVuY3Rpb24gZ2VuZXJhdGVFdmFsdWF0b3JGcm9tU3RyaW5nKGRhdGFTdGFjaywgZXhwcmVzc2lvbiwgZWwpIHtcbiAgbGV0IGZ1bmMgPSBnZW5lcmF0ZUZ1bmN0aW9uRnJvbVN0cmluZyhleHByZXNzaW9uLCBlbCk7XG4gIHJldHVybiAocmVjZWl2ZXIgPSAoKSA9PiB7XG4gIH0sIHsgc2NvcGU6IHNjb3BlMiA9IHt9LCBwYXJhbXMgPSBbXSB9ID0ge30pID0+IHtcbiAgICBmdW5jLnJlc3VsdCA9IHZvaWQgMDtcbiAgICBmdW5jLmZpbmlzaGVkID0gZmFsc2U7XG4gICAgbGV0IGNvbXBsZXRlU2NvcGUgPSBtZXJnZVByb3hpZXMoW3Njb3BlMiwgLi4uZGF0YVN0YWNrXSk7XG4gICAgaWYgKHR5cGVvZiBmdW5jID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIGxldCBwcm9taXNlID0gZnVuYyhmdW5jLCBjb21wbGV0ZVNjb3BlKS5jYXRjaCgoZXJyb3IyKSA9PiBoYW5kbGVFcnJvcihlcnJvcjIsIGVsLCBleHByZXNzaW9uKSk7XG4gICAgICBpZiAoZnVuYy5maW5pc2hlZCkge1xuICAgICAgICBydW5JZlR5cGVPZkZ1bmN0aW9uKHJlY2VpdmVyLCBmdW5jLnJlc3VsdCwgY29tcGxldGVTY29wZSwgcGFyYW1zLCBlbCk7XG4gICAgICAgIGZ1bmMucmVzdWx0ID0gdm9pZCAwO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcHJvbWlzZS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgICBydW5JZlR5cGVPZkZ1bmN0aW9uKHJlY2VpdmVyLCByZXN1bHQsIGNvbXBsZXRlU2NvcGUsIHBhcmFtcywgZWwpO1xuICAgICAgICB9KS5jYXRjaCgoZXJyb3IyKSA9PiBoYW5kbGVFcnJvcihlcnJvcjIsIGVsLCBleHByZXNzaW9uKSkuZmluYWxseSgoKSA9PiBmdW5jLnJlc3VsdCA9IHZvaWQgMCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xufVxuZnVuY3Rpb24gcnVuSWZUeXBlT2ZGdW5jdGlvbihyZWNlaXZlciwgdmFsdWUsIHNjb3BlMiwgcGFyYW1zLCBlbCkge1xuICBpZiAoc2hvdWxkQXV0b0V2YWx1YXRlRnVuY3Rpb25zICYmIHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgbGV0IHJlc3VsdCA9IHZhbHVlLmFwcGx5KHNjb3BlMiwgcGFyYW1zKTtcbiAgICBpZiAocmVzdWx0IGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgICAgcmVzdWx0LnRoZW4oKGkpID0+IHJ1bklmVHlwZU9mRnVuY3Rpb24ocmVjZWl2ZXIsIGksIHNjb3BlMiwgcGFyYW1zKSkuY2F0Y2goKGVycm9yMikgPT4gaGFuZGxlRXJyb3IoZXJyb3IyLCBlbCwgdmFsdWUpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVjZWl2ZXIocmVzdWx0KTtcbiAgICB9XG4gIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmIHZhbHVlIGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgIHZhbHVlLnRoZW4oKGkpID0+IHJlY2VpdmVyKGkpKTtcbiAgfSBlbHNlIHtcbiAgICByZWNlaXZlcih2YWx1ZSk7XG4gIH1cbn1cblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL2RpcmVjdGl2ZXMuanNcbnZhciBwcmVmaXhBc1N0cmluZyA9IFwieC1cIjtcbmZ1bmN0aW9uIHByZWZpeChzdWJqZWN0ID0gXCJcIikge1xuICByZXR1cm4gcHJlZml4QXNTdHJpbmcgKyBzdWJqZWN0O1xufVxuZnVuY3Rpb24gc2V0UHJlZml4KG5ld1ByZWZpeCkge1xuICBwcmVmaXhBc1N0cmluZyA9IG5ld1ByZWZpeDtcbn1cbnZhciBkaXJlY3RpdmVIYW5kbGVycyA9IHt9O1xuZnVuY3Rpb24gZGlyZWN0aXZlKG5hbWUsIGNhbGxiYWNrKSB7XG4gIGRpcmVjdGl2ZUhhbmRsZXJzW25hbWVdID0gY2FsbGJhY2s7XG4gIHJldHVybiB7XG4gICAgYmVmb3JlKGRpcmVjdGl2ZTIpIHtcbiAgICAgIGlmICghZGlyZWN0aXZlSGFuZGxlcnNbZGlyZWN0aXZlMl0pIHtcbiAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgIFwiQ2Fubm90IGZpbmQgZGlyZWN0aXZlIGAke2RpcmVjdGl2ZX1gLiBgJHtuYW1lfWAgd2lsbCB1c2UgdGhlIGRlZmF1bHQgb3JkZXIgb2YgZXhlY3V0aW9uXCJcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgcG9zID0gZGlyZWN0aXZlT3JkZXIuaW5kZXhPZihkaXJlY3RpdmUyKTtcbiAgICAgIGRpcmVjdGl2ZU9yZGVyLnNwbGljZShwb3MgPj0gMCA/IHBvcyA6IGRpcmVjdGl2ZU9yZGVyLmluZGV4T2YoXCJERUZBVUxUXCIpLCAwLCBuYW1lKTtcbiAgICB9XG4gIH07XG59XG5mdW5jdGlvbiBkaXJlY3RpdmVzKGVsLCBhdHRyaWJ1dGVzLCBvcmlnaW5hbEF0dHJpYnV0ZU92ZXJyaWRlKSB7XG4gIGF0dHJpYnV0ZXMgPSBBcnJheS5mcm9tKGF0dHJpYnV0ZXMpO1xuICBpZiAoZWwuX3hfdmlydHVhbERpcmVjdGl2ZXMpIHtcbiAgICBsZXQgdkF0dHJpYnV0ZXMgPSBPYmplY3QuZW50cmllcyhlbC5feF92aXJ0dWFsRGlyZWN0aXZlcykubWFwKChbbmFtZSwgdmFsdWVdKSA9PiAoeyBuYW1lLCB2YWx1ZSB9KSk7XG4gICAgbGV0IHN0YXRpY0F0dHJpYnV0ZXMgPSBhdHRyaWJ1dGVzT25seSh2QXR0cmlidXRlcyk7XG4gICAgdkF0dHJpYnV0ZXMgPSB2QXR0cmlidXRlcy5tYXAoKGF0dHJpYnV0ZSkgPT4ge1xuICAgICAgaWYgKHN0YXRpY0F0dHJpYnV0ZXMuZmluZCgoYXR0cikgPT4gYXR0ci5uYW1lID09PSBhdHRyaWJ1dGUubmFtZSkpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBuYW1lOiBgeC1iaW5kOiR7YXR0cmlidXRlLm5hbWV9YCxcbiAgICAgICAgICB2YWx1ZTogYFwiJHthdHRyaWJ1dGUudmFsdWV9XCJgXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICByZXR1cm4gYXR0cmlidXRlO1xuICAgIH0pO1xuICAgIGF0dHJpYnV0ZXMgPSBhdHRyaWJ1dGVzLmNvbmNhdCh2QXR0cmlidXRlcyk7XG4gIH1cbiAgbGV0IHRyYW5zZm9ybWVkQXR0cmlidXRlTWFwID0ge307XG4gIGxldCBkaXJlY3RpdmVzMiA9IGF0dHJpYnV0ZXMubWFwKHRvVHJhbnNmb3JtZWRBdHRyaWJ1dGVzKChuZXdOYW1lLCBvbGROYW1lKSA9PiB0cmFuc2Zvcm1lZEF0dHJpYnV0ZU1hcFtuZXdOYW1lXSA9IG9sZE5hbWUpKS5maWx0ZXIob3V0Tm9uQWxwaW5lQXR0cmlidXRlcykubWFwKHRvUGFyc2VkRGlyZWN0aXZlcyh0cmFuc2Zvcm1lZEF0dHJpYnV0ZU1hcCwgb3JpZ2luYWxBdHRyaWJ1dGVPdmVycmlkZSkpLnNvcnQoYnlQcmlvcml0eSk7XG4gIHJldHVybiBkaXJlY3RpdmVzMi5tYXAoKGRpcmVjdGl2ZTIpID0+IHtcbiAgICByZXR1cm4gZ2V0RGlyZWN0aXZlSGFuZGxlcihlbCwgZGlyZWN0aXZlMik7XG4gIH0pO1xufVxuZnVuY3Rpb24gYXR0cmlidXRlc09ubHkoYXR0cmlidXRlcykge1xuICByZXR1cm4gQXJyYXkuZnJvbShhdHRyaWJ1dGVzKS5tYXAodG9UcmFuc2Zvcm1lZEF0dHJpYnV0ZXMoKSkuZmlsdGVyKChhdHRyKSA9PiAhb3V0Tm9uQWxwaW5lQXR0cmlidXRlcyhhdHRyKSk7XG59XG52YXIgaXNEZWZlcnJpbmdIYW5kbGVycyA9IGZhbHNlO1xudmFyIGRpcmVjdGl2ZUhhbmRsZXJTdGFja3MgPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpO1xudmFyIGN1cnJlbnRIYW5kbGVyU3RhY2tLZXkgPSBTeW1ib2woKTtcbmZ1bmN0aW9uIGRlZmVySGFuZGxpbmdEaXJlY3RpdmVzKGNhbGxiYWNrKSB7XG4gIGlzRGVmZXJyaW5nSGFuZGxlcnMgPSB0cnVlO1xuICBsZXQga2V5ID0gU3ltYm9sKCk7XG4gIGN1cnJlbnRIYW5kbGVyU3RhY2tLZXkgPSBrZXk7XG4gIGRpcmVjdGl2ZUhhbmRsZXJTdGFja3Muc2V0KGtleSwgW10pO1xuICBsZXQgZmx1c2hIYW5kbGVycyA9ICgpID0+IHtcbiAgICB3aGlsZSAoZGlyZWN0aXZlSGFuZGxlclN0YWNrcy5nZXQoa2V5KS5sZW5ndGgpXG4gICAgICBkaXJlY3RpdmVIYW5kbGVyU3RhY2tzLmdldChrZXkpLnNoaWZ0KCkoKTtcbiAgICBkaXJlY3RpdmVIYW5kbGVyU3RhY2tzLmRlbGV0ZShrZXkpO1xuICB9O1xuICBsZXQgc3RvcERlZmVycmluZyA9ICgpID0+IHtcbiAgICBpc0RlZmVycmluZ0hhbmRsZXJzID0gZmFsc2U7XG4gICAgZmx1c2hIYW5kbGVycygpO1xuICB9O1xuICBjYWxsYmFjayhmbHVzaEhhbmRsZXJzKTtcbiAgc3RvcERlZmVycmluZygpO1xufVxuZnVuY3Rpb24gZ2V0RWxlbWVudEJvdW5kVXRpbGl0aWVzKGVsKSB7XG4gIGxldCBjbGVhbnVwcyA9IFtdO1xuICBsZXQgY2xlYW51cDIgPSAoY2FsbGJhY2spID0+IGNsZWFudXBzLnB1c2goY2FsbGJhY2spO1xuICBsZXQgW2VmZmVjdDMsIGNsZWFudXBFZmZlY3RdID0gZWxlbWVudEJvdW5kRWZmZWN0KGVsKTtcbiAgY2xlYW51cHMucHVzaChjbGVhbnVwRWZmZWN0KTtcbiAgbGV0IHV0aWxpdGllcyA9IHtcbiAgICBBbHBpbmU6IGFscGluZV9kZWZhdWx0LFxuICAgIGVmZmVjdDogZWZmZWN0MyxcbiAgICBjbGVhbnVwOiBjbGVhbnVwMixcbiAgICBldmFsdWF0ZUxhdGVyOiBldmFsdWF0ZUxhdGVyLmJpbmQoZXZhbHVhdGVMYXRlciwgZWwpLFxuICAgIGV2YWx1YXRlOiBldmFsdWF0ZS5iaW5kKGV2YWx1YXRlLCBlbClcbiAgfTtcbiAgbGV0IGRvQ2xlYW51cCA9ICgpID0+IGNsZWFudXBzLmZvckVhY2goKGkpID0+IGkoKSk7XG4gIHJldHVybiBbdXRpbGl0aWVzLCBkb0NsZWFudXBdO1xufVxuZnVuY3Rpb24gZ2V0RGlyZWN0aXZlSGFuZGxlcihlbCwgZGlyZWN0aXZlMikge1xuICBsZXQgbm9vcCA9ICgpID0+IHtcbiAgfTtcbiAgbGV0IGhhbmRsZXI0ID0gZGlyZWN0aXZlSGFuZGxlcnNbZGlyZWN0aXZlMi50eXBlXSB8fCBub29wO1xuICBsZXQgW3V0aWxpdGllcywgY2xlYW51cDJdID0gZ2V0RWxlbWVudEJvdW5kVXRpbGl0aWVzKGVsKTtcbiAgb25BdHRyaWJ1dGVSZW1vdmVkKGVsLCBkaXJlY3RpdmUyLm9yaWdpbmFsLCBjbGVhbnVwMik7XG4gIGxldCBmdWxsSGFuZGxlciA9ICgpID0+IHtcbiAgICBpZiAoZWwuX3hfaWdub3JlIHx8IGVsLl94X2lnbm9yZVNlbGYpXG4gICAgICByZXR1cm47XG4gICAgaGFuZGxlcjQuaW5saW5lICYmIGhhbmRsZXI0LmlubGluZShlbCwgZGlyZWN0aXZlMiwgdXRpbGl0aWVzKTtcbiAgICBoYW5kbGVyNCA9IGhhbmRsZXI0LmJpbmQoaGFuZGxlcjQsIGVsLCBkaXJlY3RpdmUyLCB1dGlsaXRpZXMpO1xuICAgIGlzRGVmZXJyaW5nSGFuZGxlcnMgPyBkaXJlY3RpdmVIYW5kbGVyU3RhY2tzLmdldChjdXJyZW50SGFuZGxlclN0YWNrS2V5KS5wdXNoKGhhbmRsZXI0KSA6IGhhbmRsZXI0KCk7XG4gIH07XG4gIGZ1bGxIYW5kbGVyLnJ1bkNsZWFudXBzID0gY2xlYW51cDI7XG4gIHJldHVybiBmdWxsSGFuZGxlcjtcbn1cbnZhciBzdGFydGluZ1dpdGggPSAoc3ViamVjdCwgcmVwbGFjZW1lbnQpID0+ICh7IG5hbWUsIHZhbHVlIH0pID0+IHtcbiAgaWYgKG5hbWUuc3RhcnRzV2l0aChzdWJqZWN0KSlcbiAgICBuYW1lID0gbmFtZS5yZXBsYWNlKHN1YmplY3QsIHJlcGxhY2VtZW50KTtcbiAgcmV0dXJuIHsgbmFtZSwgdmFsdWUgfTtcbn07XG52YXIgaW50byA9IChpKSA9PiBpO1xuZnVuY3Rpb24gdG9UcmFuc2Zvcm1lZEF0dHJpYnV0ZXMoY2FsbGJhY2sgPSAoKSA9PiB7XG59KSB7XG4gIHJldHVybiAoeyBuYW1lLCB2YWx1ZSB9KSA9PiB7XG4gICAgbGV0IHsgbmFtZTogbmV3TmFtZSwgdmFsdWU6IG5ld1ZhbHVlIH0gPSBhdHRyaWJ1dGVUcmFuc2Zvcm1lcnMucmVkdWNlKChjYXJyeSwgdHJhbnNmb3JtKSA9PiB7XG4gICAgICByZXR1cm4gdHJhbnNmb3JtKGNhcnJ5KTtcbiAgICB9LCB7IG5hbWUsIHZhbHVlIH0pO1xuICAgIGlmIChuZXdOYW1lICE9PSBuYW1lKVxuICAgICAgY2FsbGJhY2sobmV3TmFtZSwgbmFtZSk7XG4gICAgcmV0dXJuIHsgbmFtZTogbmV3TmFtZSwgdmFsdWU6IG5ld1ZhbHVlIH07XG4gIH07XG59XG52YXIgYXR0cmlidXRlVHJhbnNmb3JtZXJzID0gW107XG5mdW5jdGlvbiBtYXBBdHRyaWJ1dGVzKGNhbGxiYWNrKSB7XG4gIGF0dHJpYnV0ZVRyYW5zZm9ybWVycy5wdXNoKGNhbGxiYWNrKTtcbn1cbmZ1bmN0aW9uIG91dE5vbkFscGluZUF0dHJpYnV0ZXMoeyBuYW1lIH0pIHtcbiAgcmV0dXJuIGFscGluZUF0dHJpYnV0ZVJlZ2V4KCkudGVzdChuYW1lKTtcbn1cbnZhciBhbHBpbmVBdHRyaWJ1dGVSZWdleCA9ICgpID0+IG5ldyBSZWdFeHAoYF4ke3ByZWZpeEFzU3RyaW5nfShbXjpeLl0rKVxcXFxiYCk7XG5mdW5jdGlvbiB0b1BhcnNlZERpcmVjdGl2ZXModHJhbnNmb3JtZWRBdHRyaWJ1dGVNYXAsIG9yaWdpbmFsQXR0cmlidXRlT3ZlcnJpZGUpIHtcbiAgcmV0dXJuICh7IG5hbWUsIHZhbHVlIH0pID0+IHtcbiAgICBsZXQgdHlwZU1hdGNoID0gbmFtZS5tYXRjaChhbHBpbmVBdHRyaWJ1dGVSZWdleCgpKTtcbiAgICBsZXQgdmFsdWVNYXRjaCA9IG5hbWUubWF0Y2goLzooW2EtekEtWjAtOVxcLV86XSspLyk7XG4gICAgbGV0IG1vZGlmaWVycyA9IG5hbWUubWF0Y2goL1xcLlteLlxcXV0rKD89W15cXF1dKiQpL2cpIHx8IFtdO1xuICAgIGxldCBvcmlnaW5hbCA9IG9yaWdpbmFsQXR0cmlidXRlT3ZlcnJpZGUgfHwgdHJhbnNmb3JtZWRBdHRyaWJ1dGVNYXBbbmFtZV0gfHwgbmFtZTtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogdHlwZU1hdGNoID8gdHlwZU1hdGNoWzFdIDogbnVsbCxcbiAgICAgIHZhbHVlOiB2YWx1ZU1hdGNoID8gdmFsdWVNYXRjaFsxXSA6IG51bGwsXG4gICAgICBtb2RpZmllcnM6IG1vZGlmaWVycy5tYXAoKGkpID0+IGkucmVwbGFjZShcIi5cIiwgXCJcIikpLFxuICAgICAgZXhwcmVzc2lvbjogdmFsdWUsXG4gICAgICBvcmlnaW5hbFxuICAgIH07XG4gIH07XG59XG52YXIgREVGQVVMVCA9IFwiREVGQVVMVFwiO1xudmFyIGRpcmVjdGl2ZU9yZGVyID0gW1xuICBcImlnbm9yZVwiLFxuICBcInJlZlwiLFxuICBcImRhdGFcIixcbiAgXCJpZFwiLFxuICBcImFuY2hvclwiLFxuICBcImJpbmRcIixcbiAgXCJpbml0XCIsXG4gIFwiZm9yXCIsXG4gIFwibW9kZWxcIixcbiAgXCJtb2RlbGFibGVcIixcbiAgXCJ0cmFuc2l0aW9uXCIsXG4gIFwic2hvd1wiLFxuICBcImlmXCIsXG4gIERFRkFVTFQsXG4gIFwidGVsZXBvcnRcIlxuXTtcbmZ1bmN0aW9uIGJ5UHJpb3JpdHkoYSwgYikge1xuICBsZXQgdHlwZUEgPSBkaXJlY3RpdmVPcmRlci5pbmRleE9mKGEudHlwZSkgPT09IC0xID8gREVGQVVMVCA6IGEudHlwZTtcbiAgbGV0IHR5cGVCID0gZGlyZWN0aXZlT3JkZXIuaW5kZXhPZihiLnR5cGUpID09PSAtMSA/IERFRkFVTFQgOiBiLnR5cGU7XG4gIHJldHVybiBkaXJlY3RpdmVPcmRlci5pbmRleE9mKHR5cGVBKSAtIGRpcmVjdGl2ZU9yZGVyLmluZGV4T2YodHlwZUIpO1xufVxuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvbmV4dFRpY2suanNcbnZhciB0aWNrU3RhY2sgPSBbXTtcbnZhciBpc0hvbGRpbmcgPSBmYWxzZTtcbmZ1bmN0aW9uIG5leHRUaWNrKGNhbGxiYWNrID0gKCkgPT4ge1xufSkge1xuICBxdWV1ZU1pY3JvdGFzaygoKSA9PiB7XG4gICAgaXNIb2xkaW5nIHx8IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgcmVsZWFzZU5leHRUaWNrcygpO1xuICAgIH0pO1xuICB9KTtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXMpID0+IHtcbiAgICB0aWNrU3RhY2sucHVzaCgoKSA9PiB7XG4gICAgICBjYWxsYmFjaygpO1xuICAgICAgcmVzKCk7XG4gICAgfSk7XG4gIH0pO1xufVxuZnVuY3Rpb24gcmVsZWFzZU5leHRUaWNrcygpIHtcbiAgaXNIb2xkaW5nID0gZmFsc2U7XG4gIHdoaWxlICh0aWNrU3RhY2subGVuZ3RoKVxuICAgIHRpY2tTdGFjay5zaGlmdCgpKCk7XG59XG5mdW5jdGlvbiBob2xkTmV4dFRpY2tzKCkge1xuICBpc0hvbGRpbmcgPSB0cnVlO1xufVxuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvdXRpbHMvY2xhc3Nlcy5qc1xuZnVuY3Rpb24gc2V0Q2xhc3NlcyhlbCwgdmFsdWUpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgcmV0dXJuIHNldENsYXNzZXNGcm9tU3RyaW5nKGVsLCB2YWx1ZS5qb2luKFwiIFwiKSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmIHZhbHVlICE9PSBudWxsKSB7XG4gICAgcmV0dXJuIHNldENsYXNzZXNGcm9tT2JqZWN0KGVsLCB2YWx1ZSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4gc2V0Q2xhc3NlcyhlbCwgdmFsdWUoKSk7XG4gIH1cbiAgcmV0dXJuIHNldENsYXNzZXNGcm9tU3RyaW5nKGVsLCB2YWx1ZSk7XG59XG5mdW5jdGlvbiBzZXRDbGFzc2VzRnJvbVN0cmluZyhlbCwgY2xhc3NTdHJpbmcpIHtcbiAgbGV0IHNwbGl0ID0gKGNsYXNzU3RyaW5nMikgPT4gY2xhc3NTdHJpbmcyLnNwbGl0KFwiIFwiKS5maWx0ZXIoQm9vbGVhbik7XG4gIGxldCBtaXNzaW5nQ2xhc3NlcyA9IChjbGFzc1N0cmluZzIpID0+IGNsYXNzU3RyaW5nMi5zcGxpdChcIiBcIikuZmlsdGVyKChpKSA9PiAhZWwuY2xhc3NMaXN0LmNvbnRhaW5zKGkpKS5maWx0ZXIoQm9vbGVhbik7XG4gIGxldCBhZGRDbGFzc2VzQW5kUmV0dXJuVW5kbyA9IChjbGFzc2VzKSA9PiB7XG4gICAgZWwuY2xhc3NMaXN0LmFkZCguLi5jbGFzc2VzKTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZSguLi5jbGFzc2VzKTtcbiAgICB9O1xuICB9O1xuICBjbGFzc1N0cmluZyA9IGNsYXNzU3RyaW5nID09PSB0cnVlID8gY2xhc3NTdHJpbmcgPSBcIlwiIDogY2xhc3NTdHJpbmcgfHwgXCJcIjtcbiAgcmV0dXJuIGFkZENsYXNzZXNBbmRSZXR1cm5VbmRvKG1pc3NpbmdDbGFzc2VzKGNsYXNzU3RyaW5nKSk7XG59XG5mdW5jdGlvbiBzZXRDbGFzc2VzRnJvbU9iamVjdChlbCwgY2xhc3NPYmplY3QpIHtcbiAgbGV0IHNwbGl0ID0gKGNsYXNzU3RyaW5nKSA9PiBjbGFzc1N0cmluZy5zcGxpdChcIiBcIikuZmlsdGVyKEJvb2xlYW4pO1xuICBsZXQgZm9yQWRkID0gT2JqZWN0LmVudHJpZXMoY2xhc3NPYmplY3QpLmZsYXRNYXAoKFtjbGFzc1N0cmluZywgYm9vbF0pID0+IGJvb2wgPyBzcGxpdChjbGFzc1N0cmluZykgOiBmYWxzZSkuZmlsdGVyKEJvb2xlYW4pO1xuICBsZXQgZm9yUmVtb3ZlID0gT2JqZWN0LmVudHJpZXMoY2xhc3NPYmplY3QpLmZsYXRNYXAoKFtjbGFzc1N0cmluZywgYm9vbF0pID0+ICFib29sID8gc3BsaXQoY2xhc3NTdHJpbmcpIDogZmFsc2UpLmZpbHRlcihCb29sZWFuKTtcbiAgbGV0IGFkZGVkID0gW107XG4gIGxldCByZW1vdmVkID0gW107XG4gIGZvclJlbW92ZS5mb3JFYWNoKChpKSA9PiB7XG4gICAgaWYgKGVsLmNsYXNzTGlzdC5jb250YWlucyhpKSkge1xuICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZShpKTtcbiAgICAgIHJlbW92ZWQucHVzaChpKTtcbiAgICB9XG4gIH0pO1xuICBmb3JBZGQuZm9yRWFjaCgoaSkgPT4ge1xuICAgIGlmICghZWwuY2xhc3NMaXN0LmNvbnRhaW5zKGkpKSB7XG4gICAgICBlbC5jbGFzc0xpc3QuYWRkKGkpO1xuICAgICAgYWRkZWQucHVzaChpKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gKCkgPT4ge1xuICAgIHJlbW92ZWQuZm9yRWFjaCgoaSkgPT4gZWwuY2xhc3NMaXN0LmFkZChpKSk7XG4gICAgYWRkZWQuZm9yRWFjaCgoaSkgPT4gZWwuY2xhc3NMaXN0LnJlbW92ZShpKSk7XG4gIH07XG59XG5cbi8vIHBhY2thZ2VzL2FscGluZWpzL3NyYy91dGlscy9zdHlsZXMuanNcbmZ1bmN0aW9uIHNldFN0eWxlcyhlbCwgdmFsdWUpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJiB2YWx1ZSAhPT0gbnVsbCkge1xuICAgIHJldHVybiBzZXRTdHlsZXNGcm9tT2JqZWN0KGVsLCB2YWx1ZSk7XG4gIH1cbiAgcmV0dXJuIHNldFN0eWxlc0Zyb21TdHJpbmcoZWwsIHZhbHVlKTtcbn1cbmZ1bmN0aW9uIHNldFN0eWxlc0Zyb21PYmplY3QoZWwsIHZhbHVlKSB7XG4gIGxldCBwcmV2aW91c1N0eWxlcyA9IHt9O1xuICBPYmplY3QuZW50cmllcyh2YWx1ZSkuZm9yRWFjaCgoW2tleSwgdmFsdWUyXSkgPT4ge1xuICAgIHByZXZpb3VzU3R5bGVzW2tleV0gPSBlbC5zdHlsZVtrZXldO1xuICAgIGlmICgha2V5LnN0YXJ0c1dpdGgoXCItLVwiKSkge1xuICAgICAga2V5ID0ga2ViYWJDYXNlKGtleSk7XG4gICAgfVxuICAgIGVsLnN0eWxlLnNldFByb3BlcnR5KGtleSwgdmFsdWUyKTtcbiAgfSk7XG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGlmIChlbC5zdHlsZS5sZW5ndGggPT09IDApIHtcbiAgICAgIGVsLnJlbW92ZUF0dHJpYnV0ZShcInN0eWxlXCIpO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiAoKSA9PiB7XG4gICAgc2V0U3R5bGVzKGVsLCBwcmV2aW91c1N0eWxlcyk7XG4gIH07XG59XG5mdW5jdGlvbiBzZXRTdHlsZXNGcm9tU3RyaW5nKGVsLCB2YWx1ZSkge1xuICBsZXQgY2FjaGUgPSBlbC5nZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCB2YWx1ZSk7XG4gIGVsLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIHZhbHVlKTtcbiAgcmV0dXJuICgpID0+IHtcbiAgICBlbC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBjYWNoZSB8fCBcIlwiKTtcbiAgfTtcbn1cbmZ1bmN0aW9uIGtlYmFiQ2FzZShzdWJqZWN0KSB7XG4gIHJldHVybiBzdWJqZWN0LnJlcGxhY2UoLyhbYS16XSkoW0EtWl0pL2csIFwiJDEtJDJcIikudG9Mb3dlckNhc2UoKTtcbn1cblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL3V0aWxzL29uY2UuanNcbmZ1bmN0aW9uIG9uY2UoY2FsbGJhY2ssIGZhbGxiYWNrID0gKCkgPT4ge1xufSkge1xuICBsZXQgY2FsbGVkID0gZmFsc2U7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICBpZiAoIWNhbGxlZCkge1xuICAgICAgY2FsbGVkID0gdHJ1ZTtcbiAgICAgIGNhbGxiYWNrLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZhbGxiYWNrLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9O1xufVxuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvZGlyZWN0aXZlcy94LXRyYW5zaXRpb24uanNcbmRpcmVjdGl2ZShcInRyYW5zaXRpb25cIiwgKGVsLCB7IHZhbHVlLCBtb2RpZmllcnMsIGV4cHJlc3Npb24gfSwgeyBldmFsdWF0ZTogZXZhbHVhdGUyIH0pID0+IHtcbiAgaWYgKHR5cGVvZiBleHByZXNzaW9uID09PSBcImZ1bmN0aW9uXCIpXG4gICAgZXhwcmVzc2lvbiA9IGV2YWx1YXRlMihleHByZXNzaW9uKTtcbiAgaWYgKGV4cHJlc3Npb24gPT09IGZhbHNlKVxuICAgIHJldHVybjtcbiAgaWYgKCFleHByZXNzaW9uIHx8IHR5cGVvZiBleHByZXNzaW9uID09PSBcImJvb2xlYW5cIikge1xuICAgIHJlZ2lzdGVyVHJhbnNpdGlvbnNGcm9tSGVscGVyKGVsLCBtb2RpZmllcnMsIHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICByZWdpc3RlclRyYW5zaXRpb25zRnJvbUNsYXNzU3RyaW5nKGVsLCBleHByZXNzaW9uLCB2YWx1ZSk7XG4gIH1cbn0pO1xuZnVuY3Rpb24gcmVnaXN0ZXJUcmFuc2l0aW9uc0Zyb21DbGFzc1N0cmluZyhlbCwgY2xhc3NTdHJpbmcsIHN0YWdlKSB7XG4gIHJlZ2lzdGVyVHJhbnNpdGlvbk9iamVjdChlbCwgc2V0Q2xhc3NlcywgXCJcIik7XG4gIGxldCBkaXJlY3RpdmVTdG9yYWdlTWFwID0ge1xuICAgIFwiZW50ZXJcIjogKGNsYXNzZXMpID0+IHtcbiAgICAgIGVsLl94X3RyYW5zaXRpb24uZW50ZXIuZHVyaW5nID0gY2xhc3NlcztcbiAgICB9LFxuICAgIFwiZW50ZXItc3RhcnRcIjogKGNsYXNzZXMpID0+IHtcbiAgICAgIGVsLl94X3RyYW5zaXRpb24uZW50ZXIuc3RhcnQgPSBjbGFzc2VzO1xuICAgIH0sXG4gICAgXCJlbnRlci1lbmRcIjogKGNsYXNzZXMpID0+IHtcbiAgICAgIGVsLl94X3RyYW5zaXRpb24uZW50ZXIuZW5kID0gY2xhc3NlcztcbiAgICB9LFxuICAgIFwibGVhdmVcIjogKGNsYXNzZXMpID0+IHtcbiAgICAgIGVsLl94X3RyYW5zaXRpb24ubGVhdmUuZHVyaW5nID0gY2xhc3NlcztcbiAgICB9LFxuICAgIFwibGVhdmUtc3RhcnRcIjogKGNsYXNzZXMpID0+IHtcbiAgICAgIGVsLl94X3RyYW5zaXRpb24ubGVhdmUuc3RhcnQgPSBjbGFzc2VzO1xuICAgIH0sXG4gICAgXCJsZWF2ZS1lbmRcIjogKGNsYXNzZXMpID0+IHtcbiAgICAgIGVsLl94X3RyYW5zaXRpb24ubGVhdmUuZW5kID0gY2xhc3NlcztcbiAgICB9XG4gIH07XG4gIGRpcmVjdGl2ZVN0b3JhZ2VNYXBbc3RhZ2VdKGNsYXNzU3RyaW5nKTtcbn1cbmZ1bmN0aW9uIHJlZ2lzdGVyVHJhbnNpdGlvbnNGcm9tSGVscGVyKGVsLCBtb2RpZmllcnMsIHN0YWdlKSB7XG4gIHJlZ2lzdGVyVHJhbnNpdGlvbk9iamVjdChlbCwgc2V0U3R5bGVzKTtcbiAgbGV0IGRvZXNudFNwZWNpZnkgPSAhbW9kaWZpZXJzLmluY2x1ZGVzKFwiaW5cIikgJiYgIW1vZGlmaWVycy5pbmNsdWRlcyhcIm91dFwiKSAmJiAhc3RhZ2U7XG4gIGxldCB0cmFuc2l0aW9uaW5nSW4gPSBkb2VzbnRTcGVjaWZ5IHx8IG1vZGlmaWVycy5pbmNsdWRlcyhcImluXCIpIHx8IFtcImVudGVyXCJdLmluY2x1ZGVzKHN0YWdlKTtcbiAgbGV0IHRyYW5zaXRpb25pbmdPdXQgPSBkb2VzbnRTcGVjaWZ5IHx8IG1vZGlmaWVycy5pbmNsdWRlcyhcIm91dFwiKSB8fCBbXCJsZWF2ZVwiXS5pbmNsdWRlcyhzdGFnZSk7XG4gIGlmIChtb2RpZmllcnMuaW5jbHVkZXMoXCJpblwiKSAmJiAhZG9lc250U3BlY2lmeSkge1xuICAgIG1vZGlmaWVycyA9IG1vZGlmaWVycy5maWx0ZXIoKGksIGluZGV4KSA9PiBpbmRleCA8IG1vZGlmaWVycy5pbmRleE9mKFwib3V0XCIpKTtcbiAgfVxuICBpZiAobW9kaWZpZXJzLmluY2x1ZGVzKFwib3V0XCIpICYmICFkb2VzbnRTcGVjaWZ5KSB7XG4gICAgbW9kaWZpZXJzID0gbW9kaWZpZXJzLmZpbHRlcigoaSwgaW5kZXgpID0+IGluZGV4ID4gbW9kaWZpZXJzLmluZGV4T2YoXCJvdXRcIikpO1xuICB9XG4gIGxldCB3YW50c0FsbCA9ICFtb2RpZmllcnMuaW5jbHVkZXMoXCJvcGFjaXR5XCIpICYmICFtb2RpZmllcnMuaW5jbHVkZXMoXCJzY2FsZVwiKTtcbiAgbGV0IHdhbnRzT3BhY2l0eSA9IHdhbnRzQWxsIHx8IG1vZGlmaWVycy5pbmNsdWRlcyhcIm9wYWNpdHlcIik7XG4gIGxldCB3YW50c1NjYWxlID0gd2FudHNBbGwgfHwgbW9kaWZpZXJzLmluY2x1ZGVzKFwic2NhbGVcIik7XG4gIGxldCBvcGFjaXR5VmFsdWUgPSB3YW50c09wYWNpdHkgPyAwIDogMTtcbiAgbGV0IHNjYWxlVmFsdWUgPSB3YW50c1NjYWxlID8gbW9kaWZpZXJWYWx1ZShtb2RpZmllcnMsIFwic2NhbGVcIiwgOTUpIC8gMTAwIDogMTtcbiAgbGV0IGRlbGF5ID0gbW9kaWZpZXJWYWx1ZShtb2RpZmllcnMsIFwiZGVsYXlcIiwgMCkgLyAxZTM7XG4gIGxldCBvcmlnaW4gPSBtb2RpZmllclZhbHVlKG1vZGlmaWVycywgXCJvcmlnaW5cIiwgXCJjZW50ZXJcIik7XG4gIGxldCBwcm9wZXJ0eSA9IFwib3BhY2l0eSwgdHJhbnNmb3JtXCI7XG4gIGxldCBkdXJhdGlvbkluID0gbW9kaWZpZXJWYWx1ZShtb2RpZmllcnMsIFwiZHVyYXRpb25cIiwgMTUwKSAvIDFlMztcbiAgbGV0IGR1cmF0aW9uT3V0ID0gbW9kaWZpZXJWYWx1ZShtb2RpZmllcnMsIFwiZHVyYXRpb25cIiwgNzUpIC8gMWUzO1xuICBsZXQgZWFzaW5nID0gYGN1YmljLWJlemllcigwLjQsIDAuMCwgMC4yLCAxKWA7XG4gIGlmICh0cmFuc2l0aW9uaW5nSW4pIHtcbiAgICBlbC5feF90cmFuc2l0aW9uLmVudGVyLmR1cmluZyA9IHtcbiAgICAgIHRyYW5zZm9ybU9yaWdpbjogb3JpZ2luLFxuICAgICAgdHJhbnNpdGlvbkRlbGF5OiBgJHtkZWxheX1zYCxcbiAgICAgIHRyYW5zaXRpb25Qcm9wZXJ0eTogcHJvcGVydHksXG4gICAgICB0cmFuc2l0aW9uRHVyYXRpb246IGAke2R1cmF0aW9uSW59c2AsXG4gICAgICB0cmFuc2l0aW9uVGltaW5nRnVuY3Rpb246IGVhc2luZ1xuICAgIH07XG4gICAgZWwuX3hfdHJhbnNpdGlvbi5lbnRlci5zdGFydCA9IHtcbiAgICAgIG9wYWNpdHk6IG9wYWNpdHlWYWx1ZSxcbiAgICAgIHRyYW5zZm9ybTogYHNjYWxlKCR7c2NhbGVWYWx1ZX0pYFxuICAgIH07XG4gICAgZWwuX3hfdHJhbnNpdGlvbi5lbnRlci5lbmQgPSB7XG4gICAgICBvcGFjaXR5OiAxLFxuICAgICAgdHJhbnNmb3JtOiBgc2NhbGUoMSlgXG4gICAgfTtcbiAgfVxuICBpZiAodHJhbnNpdGlvbmluZ091dCkge1xuICAgIGVsLl94X3RyYW5zaXRpb24ubGVhdmUuZHVyaW5nID0ge1xuICAgICAgdHJhbnNmb3JtT3JpZ2luOiBvcmlnaW4sXG4gICAgICB0cmFuc2l0aW9uRGVsYXk6IGAke2RlbGF5fXNgLFxuICAgICAgdHJhbnNpdGlvblByb3BlcnR5OiBwcm9wZXJ0eSxcbiAgICAgIHRyYW5zaXRpb25EdXJhdGlvbjogYCR7ZHVyYXRpb25PdXR9c2AsXG4gICAgICB0cmFuc2l0aW9uVGltaW5nRnVuY3Rpb246IGVhc2luZ1xuICAgIH07XG4gICAgZWwuX3hfdHJhbnNpdGlvbi5sZWF2ZS5zdGFydCA9IHtcbiAgICAgIG9wYWNpdHk6IDEsXG4gICAgICB0cmFuc2Zvcm06IGBzY2FsZSgxKWBcbiAgICB9O1xuICAgIGVsLl94X3RyYW5zaXRpb24ubGVhdmUuZW5kID0ge1xuICAgICAgb3BhY2l0eTogb3BhY2l0eVZhbHVlLFxuICAgICAgdHJhbnNmb3JtOiBgc2NhbGUoJHtzY2FsZVZhbHVlfSlgXG4gICAgfTtcbiAgfVxufVxuZnVuY3Rpb24gcmVnaXN0ZXJUcmFuc2l0aW9uT2JqZWN0KGVsLCBzZXRGdW5jdGlvbiwgZGVmYXVsdFZhbHVlID0ge30pIHtcbiAgaWYgKCFlbC5feF90cmFuc2l0aW9uKVxuICAgIGVsLl94X3RyYW5zaXRpb24gPSB7XG4gICAgICBlbnRlcjogeyBkdXJpbmc6IGRlZmF1bHRWYWx1ZSwgc3RhcnQ6IGRlZmF1bHRWYWx1ZSwgZW5kOiBkZWZhdWx0VmFsdWUgfSxcbiAgICAgIGxlYXZlOiB7IGR1cmluZzogZGVmYXVsdFZhbHVlLCBzdGFydDogZGVmYXVsdFZhbHVlLCBlbmQ6IGRlZmF1bHRWYWx1ZSB9LFxuICAgICAgaW4oYmVmb3JlID0gKCkgPT4ge1xuICAgICAgfSwgYWZ0ZXIgPSAoKSA9PiB7XG4gICAgICB9KSB7XG4gICAgICAgIHRyYW5zaXRpb24oZWwsIHNldEZ1bmN0aW9uLCB7XG4gICAgICAgICAgZHVyaW5nOiB0aGlzLmVudGVyLmR1cmluZyxcbiAgICAgICAgICBzdGFydDogdGhpcy5lbnRlci5zdGFydCxcbiAgICAgICAgICBlbmQ6IHRoaXMuZW50ZXIuZW5kXG4gICAgICAgIH0sIGJlZm9yZSwgYWZ0ZXIpO1xuICAgICAgfSxcbiAgICAgIG91dChiZWZvcmUgPSAoKSA9PiB7XG4gICAgICB9LCBhZnRlciA9ICgpID0+IHtcbiAgICAgIH0pIHtcbiAgICAgICAgdHJhbnNpdGlvbihlbCwgc2V0RnVuY3Rpb24sIHtcbiAgICAgICAgICBkdXJpbmc6IHRoaXMubGVhdmUuZHVyaW5nLFxuICAgICAgICAgIHN0YXJ0OiB0aGlzLmxlYXZlLnN0YXJ0LFxuICAgICAgICAgIGVuZDogdGhpcy5sZWF2ZS5lbmRcbiAgICAgICAgfSwgYmVmb3JlLCBhZnRlcik7XG4gICAgICB9XG4gICAgfTtcbn1cbndpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5feF90b2dnbGVBbmRDYXNjYWRlV2l0aFRyYW5zaXRpb25zID0gZnVuY3Rpb24oZWwsIHZhbHVlLCBzaG93LCBoaWRlKSB7XG4gIGNvbnN0IG5leHRUaWNrMiA9IGRvY3VtZW50LnZpc2liaWxpdHlTdGF0ZSA9PT0gXCJ2aXNpYmxlXCIgPyByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgOiBzZXRUaW1lb3V0O1xuICBsZXQgY2xpY2tBd2F5Q29tcGF0aWJsZVNob3cgPSAoKSA9PiBuZXh0VGljazIoc2hvdyk7XG4gIGlmICh2YWx1ZSkge1xuICAgIGlmIChlbC5feF90cmFuc2l0aW9uICYmIChlbC5feF90cmFuc2l0aW9uLmVudGVyIHx8IGVsLl94X3RyYW5zaXRpb24ubGVhdmUpKSB7XG4gICAgICBlbC5feF90cmFuc2l0aW9uLmVudGVyICYmIChPYmplY3QuZW50cmllcyhlbC5feF90cmFuc2l0aW9uLmVudGVyLmR1cmluZykubGVuZ3RoIHx8IE9iamVjdC5lbnRyaWVzKGVsLl94X3RyYW5zaXRpb24uZW50ZXIuc3RhcnQpLmxlbmd0aCB8fCBPYmplY3QuZW50cmllcyhlbC5feF90cmFuc2l0aW9uLmVudGVyLmVuZCkubGVuZ3RoKSA/IGVsLl94X3RyYW5zaXRpb24uaW4oc2hvdykgOiBjbGlja0F3YXlDb21wYXRpYmxlU2hvdygpO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbC5feF90cmFuc2l0aW9uID8gZWwuX3hfdHJhbnNpdGlvbi5pbihzaG93KSA6IGNsaWNrQXdheUNvbXBhdGlibGVTaG93KCk7XG4gICAgfVxuICAgIHJldHVybjtcbiAgfVxuICBlbC5feF9oaWRlUHJvbWlzZSA9IGVsLl94X3RyYW5zaXRpb24gPyBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgZWwuX3hfdHJhbnNpdGlvbi5vdXQoKCkgPT4ge1xuICAgIH0sICgpID0+IHJlc29sdmUoaGlkZSkpO1xuICAgIGVsLl94X3RyYW5zaXRpb25pbmcgJiYgZWwuX3hfdHJhbnNpdGlvbmluZy5iZWZvcmVDYW5jZWwoKCkgPT4gcmVqZWN0KHsgaXNGcm9tQ2FuY2VsbGVkVHJhbnNpdGlvbjogdHJ1ZSB9KSk7XG4gIH0pIDogUHJvbWlzZS5yZXNvbHZlKGhpZGUpO1xuICBxdWV1ZU1pY3JvdGFzaygoKSA9PiB7XG4gICAgbGV0IGNsb3Nlc3QgPSBjbG9zZXN0SGlkZShlbCk7XG4gICAgaWYgKGNsb3Nlc3QpIHtcbiAgICAgIGlmICghY2xvc2VzdC5feF9oaWRlQ2hpbGRyZW4pXG4gICAgICAgIGNsb3Nlc3QuX3hfaGlkZUNoaWxkcmVuID0gW107XG4gICAgICBjbG9zZXN0Ll94X2hpZGVDaGlsZHJlbi5wdXNoKGVsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbmV4dFRpY2syKCgpID0+IHtcbiAgICAgICAgbGV0IGhpZGVBZnRlckNoaWxkcmVuID0gKGVsMikgPT4ge1xuICAgICAgICAgIGxldCBjYXJyeSA9IFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgIGVsMi5feF9oaWRlUHJvbWlzZSxcbiAgICAgICAgICAgIC4uLihlbDIuX3hfaGlkZUNoaWxkcmVuIHx8IFtdKS5tYXAoaGlkZUFmdGVyQ2hpbGRyZW4pXG4gICAgICAgICAgXSkudGhlbigoW2ldKSA9PiBpKCkpO1xuICAgICAgICAgIGRlbGV0ZSBlbDIuX3hfaGlkZVByb21pc2U7XG4gICAgICAgICAgZGVsZXRlIGVsMi5feF9oaWRlQ2hpbGRyZW47XG4gICAgICAgICAgcmV0dXJuIGNhcnJ5O1xuICAgICAgICB9O1xuICAgICAgICBoaWRlQWZ0ZXJDaGlsZHJlbihlbCkuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgICBpZiAoIWUuaXNGcm9tQ2FuY2VsbGVkVHJhbnNpdGlvbilcbiAgICAgICAgICAgIHRocm93IGU7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9KTtcbn07XG5mdW5jdGlvbiBjbG9zZXN0SGlkZShlbCkge1xuICBsZXQgcGFyZW50ID0gZWwucGFyZW50Tm9kZTtcbiAgaWYgKCFwYXJlbnQpXG4gICAgcmV0dXJuO1xuICByZXR1cm4gcGFyZW50Ll94X2hpZGVQcm9taXNlID8gcGFyZW50IDogY2xvc2VzdEhpZGUocGFyZW50KTtcbn1cbmZ1bmN0aW9uIHRyYW5zaXRpb24oZWwsIHNldEZ1bmN0aW9uLCB7IGR1cmluZywgc3RhcnQ6IHN0YXJ0MiwgZW5kIH0gPSB7fSwgYmVmb3JlID0gKCkgPT4ge1xufSwgYWZ0ZXIgPSAoKSA9PiB7XG59KSB7XG4gIGlmIChlbC5feF90cmFuc2l0aW9uaW5nKVxuICAgIGVsLl94X3RyYW5zaXRpb25pbmcuY2FuY2VsKCk7XG4gIGlmIChPYmplY3Qua2V5cyhkdXJpbmcpLmxlbmd0aCA9PT0gMCAmJiBPYmplY3Qua2V5cyhzdGFydDIpLmxlbmd0aCA9PT0gMCAmJiBPYmplY3Qua2V5cyhlbmQpLmxlbmd0aCA9PT0gMCkge1xuICAgIGJlZm9yZSgpO1xuICAgIGFmdGVyKCk7XG4gICAgcmV0dXJuO1xuICB9XG4gIGxldCB1bmRvU3RhcnQsIHVuZG9EdXJpbmcsIHVuZG9FbmQ7XG4gIHBlcmZvcm1UcmFuc2l0aW9uKGVsLCB7XG4gICAgc3RhcnQoKSB7XG4gICAgICB1bmRvU3RhcnQgPSBzZXRGdW5jdGlvbihlbCwgc3RhcnQyKTtcbiAgICB9LFxuICAgIGR1cmluZygpIHtcbiAgICAgIHVuZG9EdXJpbmcgPSBzZXRGdW5jdGlvbihlbCwgZHVyaW5nKTtcbiAgICB9LFxuICAgIGJlZm9yZSxcbiAgICBlbmQoKSB7XG4gICAgICB1bmRvU3RhcnQoKTtcbiAgICAgIHVuZG9FbmQgPSBzZXRGdW5jdGlvbihlbCwgZW5kKTtcbiAgICB9LFxuICAgIGFmdGVyLFxuICAgIGNsZWFudXAoKSB7XG4gICAgICB1bmRvRHVyaW5nKCk7XG4gICAgICB1bmRvRW5kKCk7XG4gICAgfVxuICB9KTtcbn1cbmZ1bmN0aW9uIHBlcmZvcm1UcmFuc2l0aW9uKGVsLCBzdGFnZXMpIHtcbiAgbGV0IGludGVycnVwdGVkLCByZWFjaGVkQmVmb3JlLCByZWFjaGVkRW5kO1xuICBsZXQgZmluaXNoID0gb25jZSgoKSA9PiB7XG4gICAgbXV0YXRlRG9tKCgpID0+IHtcbiAgICAgIGludGVycnVwdGVkID0gdHJ1ZTtcbiAgICAgIGlmICghcmVhY2hlZEJlZm9yZSlcbiAgICAgICAgc3RhZ2VzLmJlZm9yZSgpO1xuICAgICAgaWYgKCFyZWFjaGVkRW5kKSB7XG4gICAgICAgIHN0YWdlcy5lbmQoKTtcbiAgICAgICAgcmVsZWFzZU5leHRUaWNrcygpO1xuICAgICAgfVxuICAgICAgc3RhZ2VzLmFmdGVyKCk7XG4gICAgICBpZiAoZWwuaXNDb25uZWN0ZWQpXG4gICAgICAgIHN0YWdlcy5jbGVhbnVwKCk7XG4gICAgICBkZWxldGUgZWwuX3hfdHJhbnNpdGlvbmluZztcbiAgICB9KTtcbiAgfSk7XG4gIGVsLl94X3RyYW5zaXRpb25pbmcgPSB7XG4gICAgYmVmb3JlQ2FuY2VsczogW10sXG4gICAgYmVmb3JlQ2FuY2VsKGNhbGxiYWNrKSB7XG4gICAgICB0aGlzLmJlZm9yZUNhbmNlbHMucHVzaChjYWxsYmFjayk7XG4gICAgfSxcbiAgICBjYW5jZWw6IG9uY2UoZnVuY3Rpb24oKSB7XG4gICAgICB3aGlsZSAodGhpcy5iZWZvcmVDYW5jZWxzLmxlbmd0aCkge1xuICAgICAgICB0aGlzLmJlZm9yZUNhbmNlbHMuc2hpZnQoKSgpO1xuICAgICAgfVxuICAgICAgO1xuICAgICAgZmluaXNoKCk7XG4gICAgfSksXG4gICAgZmluaXNoXG4gIH07XG4gIG11dGF0ZURvbSgoKSA9PiB7XG4gICAgc3RhZ2VzLnN0YXJ0KCk7XG4gICAgc3RhZ2VzLmR1cmluZygpO1xuICB9KTtcbiAgaG9sZE5leHRUaWNrcygpO1xuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgIGlmIChpbnRlcnJ1cHRlZClcbiAgICAgIHJldHVybjtcbiAgICBsZXQgZHVyYXRpb24gPSBOdW1iZXIoZ2V0Q29tcHV0ZWRTdHlsZShlbCkudHJhbnNpdGlvbkR1cmF0aW9uLnJlcGxhY2UoLywuKi8sIFwiXCIpLnJlcGxhY2UoXCJzXCIsIFwiXCIpKSAqIDFlMztcbiAgICBsZXQgZGVsYXkgPSBOdW1iZXIoZ2V0Q29tcHV0ZWRTdHlsZShlbCkudHJhbnNpdGlvbkRlbGF5LnJlcGxhY2UoLywuKi8sIFwiXCIpLnJlcGxhY2UoXCJzXCIsIFwiXCIpKSAqIDFlMztcbiAgICBpZiAoZHVyYXRpb24gPT09IDApXG4gICAgICBkdXJhdGlvbiA9IE51bWJlcihnZXRDb21wdXRlZFN0eWxlKGVsKS5hbmltYXRpb25EdXJhdGlvbi5yZXBsYWNlKFwic1wiLCBcIlwiKSkgKiAxZTM7XG4gICAgbXV0YXRlRG9tKCgpID0+IHtcbiAgICAgIHN0YWdlcy5iZWZvcmUoKTtcbiAgICB9KTtcbiAgICByZWFjaGVkQmVmb3JlID0gdHJ1ZTtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgaWYgKGludGVycnVwdGVkKVxuICAgICAgICByZXR1cm47XG4gICAgICBtdXRhdGVEb20oKCkgPT4ge1xuICAgICAgICBzdGFnZXMuZW5kKCk7XG4gICAgICB9KTtcbiAgICAgIHJlbGVhc2VOZXh0VGlja3MoKTtcbiAgICAgIHNldFRpbWVvdXQoZWwuX3hfdHJhbnNpdGlvbmluZy5maW5pc2gsIGR1cmF0aW9uICsgZGVsYXkpO1xuICAgICAgcmVhY2hlZEVuZCA9IHRydWU7XG4gICAgfSk7XG4gIH0pO1xufVxuZnVuY3Rpb24gbW9kaWZpZXJWYWx1ZShtb2RpZmllcnMsIGtleSwgZmFsbGJhY2spIHtcbiAgaWYgKG1vZGlmaWVycy5pbmRleE9mKGtleSkgPT09IC0xKVxuICAgIHJldHVybiBmYWxsYmFjaztcbiAgY29uc3QgcmF3VmFsdWUgPSBtb2RpZmllcnNbbW9kaWZpZXJzLmluZGV4T2Yoa2V5KSArIDFdO1xuICBpZiAoIXJhd1ZhbHVlKVxuICAgIHJldHVybiBmYWxsYmFjaztcbiAgaWYgKGtleSA9PT0gXCJzY2FsZVwiKSB7XG4gICAgaWYgKGlzTmFOKHJhd1ZhbHVlKSlcbiAgICAgIHJldHVybiBmYWxsYmFjaztcbiAgfVxuICBpZiAoa2V5ID09PSBcImR1cmF0aW9uXCIgfHwga2V5ID09PSBcImRlbGF5XCIpIHtcbiAgICBsZXQgbWF0Y2ggPSByYXdWYWx1ZS5tYXRjaCgvKFswLTldKyltcy8pO1xuICAgIGlmIChtYXRjaClcbiAgICAgIHJldHVybiBtYXRjaFsxXTtcbiAgfVxuICBpZiAoa2V5ID09PSBcIm9yaWdpblwiKSB7XG4gICAgaWYgKFtcInRvcFwiLCBcInJpZ2h0XCIsIFwibGVmdFwiLCBcImNlbnRlclwiLCBcImJvdHRvbVwiXS5pbmNsdWRlcyhtb2RpZmllcnNbbW9kaWZpZXJzLmluZGV4T2Yoa2V5KSArIDJdKSkge1xuICAgICAgcmV0dXJuIFtyYXdWYWx1ZSwgbW9kaWZpZXJzW21vZGlmaWVycy5pbmRleE9mKGtleSkgKyAyXV0uam9pbihcIiBcIik7XG4gICAgfVxuICB9XG4gIHJldHVybiByYXdWYWx1ZTtcbn1cblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL2Nsb25lLmpzXG52YXIgaXNDbG9uaW5nID0gZmFsc2U7XG5mdW5jdGlvbiBza2lwRHVyaW5nQ2xvbmUoY2FsbGJhY2ssIGZhbGxiYWNrID0gKCkgPT4ge1xufSkge1xuICByZXR1cm4gKC4uLmFyZ3MpID0+IGlzQ2xvbmluZyA/IGZhbGxiYWNrKC4uLmFyZ3MpIDogY2FsbGJhY2soLi4uYXJncyk7XG59XG5mdW5jdGlvbiBvbmx5RHVyaW5nQ2xvbmUoY2FsbGJhY2spIHtcbiAgcmV0dXJuICguLi5hcmdzKSA9PiBpc0Nsb25pbmcgJiYgY2FsbGJhY2soLi4uYXJncyk7XG59XG52YXIgaW50ZXJjZXB0b3JzID0gW107XG5mdW5jdGlvbiBpbnRlcmNlcHRDbG9uZShjYWxsYmFjaykge1xuICBpbnRlcmNlcHRvcnMucHVzaChjYWxsYmFjayk7XG59XG5mdW5jdGlvbiBjbG9uZU5vZGUoZnJvbSwgdG8pIHtcbiAgaW50ZXJjZXB0b3JzLmZvckVhY2goKGkpID0+IGkoZnJvbSwgdG8pKTtcbiAgaXNDbG9uaW5nID0gdHJ1ZTtcbiAgZG9udFJlZ2lzdGVyUmVhY3RpdmVTaWRlRWZmZWN0cygoKSA9PiB7XG4gICAgaW5pdFRyZWUodG8sIChlbCwgY2FsbGJhY2spID0+IHtcbiAgICAgIGNhbGxiYWNrKGVsLCAoKSA9PiB7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSk7XG4gIGlzQ2xvbmluZyA9IGZhbHNlO1xufVxudmFyIGlzQ2xvbmluZ0xlZ2FjeSA9IGZhbHNlO1xuZnVuY3Rpb24gY2xvbmUob2xkRWwsIG5ld0VsKSB7XG4gIGlmICghbmV3RWwuX3hfZGF0YVN0YWNrKVxuICAgIG5ld0VsLl94X2RhdGFTdGFjayA9IG9sZEVsLl94X2RhdGFTdGFjaztcbiAgaXNDbG9uaW5nID0gdHJ1ZTtcbiAgaXNDbG9uaW5nTGVnYWN5ID0gdHJ1ZTtcbiAgZG9udFJlZ2lzdGVyUmVhY3RpdmVTaWRlRWZmZWN0cygoKSA9PiB7XG4gICAgY2xvbmVUcmVlKG5ld0VsKTtcbiAgfSk7XG4gIGlzQ2xvbmluZyA9IGZhbHNlO1xuICBpc0Nsb25pbmdMZWdhY3kgPSBmYWxzZTtcbn1cbmZ1bmN0aW9uIGNsb25lVHJlZShlbCkge1xuICBsZXQgaGFzUnVuVGhyb3VnaEZpcnN0RWwgPSBmYWxzZTtcbiAgbGV0IHNoYWxsb3dXYWxrZXIgPSAoZWwyLCBjYWxsYmFjaykgPT4ge1xuICAgIHdhbGsoZWwyLCAoZWwzLCBza2lwKSA9PiB7XG4gICAgICBpZiAoaGFzUnVuVGhyb3VnaEZpcnN0RWwgJiYgaXNSb290KGVsMykpXG4gICAgICAgIHJldHVybiBza2lwKCk7XG4gICAgICBoYXNSdW5UaHJvdWdoRmlyc3RFbCA9IHRydWU7XG4gICAgICBjYWxsYmFjayhlbDMsIHNraXApO1xuICAgIH0pO1xuICB9O1xuICBpbml0VHJlZShlbCwgc2hhbGxvd1dhbGtlcik7XG59XG5mdW5jdGlvbiBkb250UmVnaXN0ZXJSZWFjdGl2ZVNpZGVFZmZlY3RzKGNhbGxiYWNrKSB7XG4gIGxldCBjYWNoZSA9IGVmZmVjdDtcbiAgb3ZlcnJpZGVFZmZlY3QoKGNhbGxiYWNrMiwgZWwpID0+IHtcbiAgICBsZXQgc3RvcmVkRWZmZWN0ID0gY2FjaGUoY2FsbGJhY2syKTtcbiAgICByZWxlYXNlKHN0b3JlZEVmZmVjdCk7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICB9O1xuICB9KTtcbiAgY2FsbGJhY2soKTtcbiAgb3ZlcnJpZGVFZmZlY3QoY2FjaGUpO1xufVxuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvdXRpbHMvYmluZC5qc1xuZnVuY3Rpb24gYmluZChlbCwgbmFtZSwgdmFsdWUsIG1vZGlmaWVycyA9IFtdKSB7XG4gIGlmICghZWwuX3hfYmluZGluZ3MpXG4gICAgZWwuX3hfYmluZGluZ3MgPSByZWFjdGl2ZSh7fSk7XG4gIGVsLl94X2JpbmRpbmdzW25hbWVdID0gdmFsdWU7XG4gIG5hbWUgPSBtb2RpZmllcnMuaW5jbHVkZXMoXCJjYW1lbFwiKSA/IGNhbWVsQ2FzZShuYW1lKSA6IG5hbWU7XG4gIHN3aXRjaCAobmFtZSkge1xuICAgIGNhc2UgXCJ2YWx1ZVwiOlxuICAgICAgYmluZElucHV0VmFsdWUoZWwsIHZhbHVlKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJzdHlsZVwiOlxuICAgICAgYmluZFN0eWxlcyhlbCwgdmFsdWUpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImNsYXNzXCI6XG4gICAgICBiaW5kQ2xhc3NlcyhlbCwgdmFsdWUpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcInNlbGVjdGVkXCI6XG4gICAgY2FzZSBcImNoZWNrZWRcIjpcbiAgICAgIGJpbmRBdHRyaWJ1dGVBbmRQcm9wZXJ0eShlbCwgbmFtZSwgdmFsdWUpO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIGJpbmRBdHRyaWJ1dGUoZWwsIG5hbWUsIHZhbHVlKTtcbiAgICAgIGJyZWFrO1xuICB9XG59XG5mdW5jdGlvbiBiaW5kSW5wdXRWYWx1ZShlbCwgdmFsdWUpIHtcbiAgaWYgKGVsLnR5cGUgPT09IFwicmFkaW9cIikge1xuICAgIGlmIChlbC5hdHRyaWJ1dGVzLnZhbHVlID09PSB2b2lkIDApIHtcbiAgICAgIGVsLnZhbHVlID0gdmFsdWU7XG4gICAgfVxuICAgIGlmICh3aW5kb3cuZnJvbU1vZGVsKSB7XG4gICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcImJvb2xlYW5cIikge1xuICAgICAgICBlbC5jaGVja2VkID0gc2FmZVBhcnNlQm9vbGVhbihlbC52YWx1ZSkgPT09IHZhbHVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWwuY2hlY2tlZCA9IGNoZWNrZWRBdHRyTG9vc2VDb21wYXJlKGVsLnZhbHVlLCB2YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2UgaWYgKGVsLnR5cGUgPT09IFwiY2hlY2tib3hcIikge1xuICAgIGlmIChOdW1iZXIuaXNJbnRlZ2VyKHZhbHVlKSkge1xuICAgICAgZWwudmFsdWUgPSB2YWx1ZTtcbiAgICB9IGVsc2UgaWYgKCFBcnJheS5pc0FycmF5KHZhbHVlKSAmJiB0eXBlb2YgdmFsdWUgIT09IFwiYm9vbGVhblwiICYmICFbbnVsbCwgdm9pZCAwXS5pbmNsdWRlcyh2YWx1ZSkpIHtcbiAgICAgIGVsLnZhbHVlID0gU3RyaW5nKHZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgIGVsLmNoZWNrZWQgPSB2YWx1ZS5zb21lKCh2YWwpID0+IGNoZWNrZWRBdHRyTG9vc2VDb21wYXJlKHZhbCwgZWwudmFsdWUpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVsLmNoZWNrZWQgPSAhIXZhbHVlO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIGlmIChlbC50YWdOYW1lID09PSBcIlNFTEVDVFwiKSB7XG4gICAgdXBkYXRlU2VsZWN0KGVsLCB2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKGVsLnZhbHVlID09PSB2YWx1ZSlcbiAgICAgIHJldHVybjtcbiAgICBlbC52YWx1ZSA9IHZhbHVlID09PSB2b2lkIDAgPyBcIlwiIDogdmFsdWU7XG4gIH1cbn1cbmZ1bmN0aW9uIGJpbmRDbGFzc2VzKGVsLCB2YWx1ZSkge1xuICBpZiAoZWwuX3hfdW5kb0FkZGVkQ2xhc3NlcylcbiAgICBlbC5feF91bmRvQWRkZWRDbGFzc2VzKCk7XG4gIGVsLl94X3VuZG9BZGRlZENsYXNzZXMgPSBzZXRDbGFzc2VzKGVsLCB2YWx1ZSk7XG59XG5mdW5jdGlvbiBiaW5kU3R5bGVzKGVsLCB2YWx1ZSkge1xuICBpZiAoZWwuX3hfdW5kb0FkZGVkU3R5bGVzKVxuICAgIGVsLl94X3VuZG9BZGRlZFN0eWxlcygpO1xuICBlbC5feF91bmRvQWRkZWRTdHlsZXMgPSBzZXRTdHlsZXMoZWwsIHZhbHVlKTtcbn1cbmZ1bmN0aW9uIGJpbmRBdHRyaWJ1dGVBbmRQcm9wZXJ0eShlbCwgbmFtZSwgdmFsdWUpIHtcbiAgYmluZEF0dHJpYnV0ZShlbCwgbmFtZSwgdmFsdWUpO1xuICBzZXRQcm9wZXJ0eUlmQ2hhbmdlZChlbCwgbmFtZSwgdmFsdWUpO1xufVxuZnVuY3Rpb24gYmluZEF0dHJpYnV0ZShlbCwgbmFtZSwgdmFsdWUpIHtcbiAgaWYgKFtudWxsLCB2b2lkIDAsIGZhbHNlXS5pbmNsdWRlcyh2YWx1ZSkgJiYgYXR0cmlidXRlU2hvdWxkbnRCZVByZXNlcnZlZElmRmFsc3kobmFtZSkpIHtcbiAgICBlbC5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKGlzQm9vbGVhbkF0dHIobmFtZSkpXG4gICAgICB2YWx1ZSA9IG5hbWU7XG4gICAgc2V0SWZDaGFuZ2VkKGVsLCBuYW1lLCB2YWx1ZSk7XG4gIH1cbn1cbmZ1bmN0aW9uIHNldElmQ2hhbmdlZChlbCwgYXR0ck5hbWUsIHZhbHVlKSB7XG4gIGlmIChlbC5nZXRBdHRyaWJ1dGUoYXR0ck5hbWUpICE9IHZhbHVlKSB7XG4gICAgZWwuc2V0QXR0cmlidXRlKGF0dHJOYW1lLCB2YWx1ZSk7XG4gIH1cbn1cbmZ1bmN0aW9uIHNldFByb3BlcnR5SWZDaGFuZ2VkKGVsLCBwcm9wTmFtZSwgdmFsdWUpIHtcbiAgaWYgKGVsW3Byb3BOYW1lXSAhPT0gdmFsdWUpIHtcbiAgICBlbFtwcm9wTmFtZV0gPSB2YWx1ZTtcbiAgfVxufVxuZnVuY3Rpb24gdXBkYXRlU2VsZWN0KGVsLCB2YWx1ZSkge1xuICBjb25zdCBhcnJheVdyYXBwZWRWYWx1ZSA9IFtdLmNvbmNhdCh2YWx1ZSkubWFwKCh2YWx1ZTIpID0+IHtcbiAgICByZXR1cm4gdmFsdWUyICsgXCJcIjtcbiAgfSk7XG4gIEFycmF5LmZyb20oZWwub3B0aW9ucykuZm9yRWFjaCgob3B0aW9uKSA9PiB7XG4gICAgb3B0aW9uLnNlbGVjdGVkID0gYXJyYXlXcmFwcGVkVmFsdWUuaW5jbHVkZXMob3B0aW9uLnZhbHVlKTtcbiAgfSk7XG59XG5mdW5jdGlvbiBjYW1lbENhc2Uoc3ViamVjdCkge1xuICByZXR1cm4gc3ViamVjdC50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoLy0oXFx3KS9nLCAobWF0Y2gsIGNoYXIpID0+IGNoYXIudG9VcHBlckNhc2UoKSk7XG59XG5mdW5jdGlvbiBjaGVja2VkQXR0ckxvb3NlQ29tcGFyZSh2YWx1ZUEsIHZhbHVlQikge1xuICByZXR1cm4gdmFsdWVBID09IHZhbHVlQjtcbn1cbmZ1bmN0aW9uIHNhZmVQYXJzZUJvb2xlYW4ocmF3VmFsdWUpIHtcbiAgaWYgKFsxLCBcIjFcIiwgXCJ0cnVlXCIsIFwib25cIiwgXCJ5ZXNcIiwgdHJ1ZV0uaW5jbHVkZXMocmF3VmFsdWUpKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgaWYgKFswLCBcIjBcIiwgXCJmYWxzZVwiLCBcIm9mZlwiLCBcIm5vXCIsIGZhbHNlXS5pbmNsdWRlcyhyYXdWYWx1ZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIHJhd1ZhbHVlID8gQm9vbGVhbihyYXdWYWx1ZSkgOiBudWxsO1xufVxuZnVuY3Rpb24gaXNCb29sZWFuQXR0cihhdHRyTmFtZSkge1xuICBjb25zdCBib29sZWFuQXR0cmlidXRlcyA9IFtcbiAgICBcImRpc2FibGVkXCIsXG4gICAgXCJjaGVja2VkXCIsXG4gICAgXCJyZXF1aXJlZFwiLFxuICAgIFwicmVhZG9ubHlcIixcbiAgICBcImhpZGRlblwiLFxuICAgIFwib3BlblwiLFxuICAgIFwic2VsZWN0ZWRcIixcbiAgICBcImF1dG9mb2N1c1wiLFxuICAgIFwiaXRlbXNjb3BlXCIsXG4gICAgXCJtdWx0aXBsZVwiLFxuICAgIFwibm92YWxpZGF0ZVwiLFxuICAgIFwiYWxsb3dmdWxsc2NyZWVuXCIsXG4gICAgXCJhbGxvd3BheW1lbnRyZXF1ZXN0XCIsXG4gICAgXCJmb3Jtbm92YWxpZGF0ZVwiLFxuICAgIFwiYXV0b3BsYXlcIixcbiAgICBcImNvbnRyb2xzXCIsXG4gICAgXCJsb29wXCIsXG4gICAgXCJtdXRlZFwiLFxuICAgIFwicGxheXNpbmxpbmVcIixcbiAgICBcImRlZmF1bHRcIixcbiAgICBcImlzbWFwXCIsXG4gICAgXCJyZXZlcnNlZFwiLFxuICAgIFwiYXN5bmNcIixcbiAgICBcImRlZmVyXCIsXG4gICAgXCJub21vZHVsZVwiXG4gIF07XG4gIHJldHVybiBib29sZWFuQXR0cmlidXRlcy5pbmNsdWRlcyhhdHRyTmFtZSk7XG59XG5mdW5jdGlvbiBhdHRyaWJ1dGVTaG91bGRudEJlUHJlc2VydmVkSWZGYWxzeShuYW1lKSB7XG4gIHJldHVybiAhW1wiYXJpYS1wcmVzc2VkXCIsIFwiYXJpYS1jaGVja2VkXCIsIFwiYXJpYS1leHBhbmRlZFwiLCBcImFyaWEtc2VsZWN0ZWRcIl0uaW5jbHVkZXMobmFtZSk7XG59XG5mdW5jdGlvbiBnZXRCaW5kaW5nKGVsLCBuYW1lLCBmYWxsYmFjaykge1xuICBpZiAoZWwuX3hfYmluZGluZ3MgJiYgZWwuX3hfYmluZGluZ3NbbmFtZV0gIT09IHZvaWQgMClcbiAgICByZXR1cm4gZWwuX3hfYmluZGluZ3NbbmFtZV07XG4gIHJldHVybiBnZXRBdHRyaWJ1dGVCaW5kaW5nKGVsLCBuYW1lLCBmYWxsYmFjayk7XG59XG5mdW5jdGlvbiBleHRyYWN0UHJvcChlbCwgbmFtZSwgZmFsbGJhY2ssIGV4dHJhY3QgPSB0cnVlKSB7XG4gIGlmIChlbC5feF9iaW5kaW5ncyAmJiBlbC5feF9iaW5kaW5nc1tuYW1lXSAhPT0gdm9pZCAwKVxuICAgIHJldHVybiBlbC5feF9iaW5kaW5nc1tuYW1lXTtcbiAgaWYgKGVsLl94X2lubGluZUJpbmRpbmdzICYmIGVsLl94X2lubGluZUJpbmRpbmdzW25hbWVdICE9PSB2b2lkIDApIHtcbiAgICBsZXQgYmluZGluZyA9IGVsLl94X2lubGluZUJpbmRpbmdzW25hbWVdO1xuICAgIGJpbmRpbmcuZXh0cmFjdCA9IGV4dHJhY3Q7XG4gICAgcmV0dXJuIGRvbnRBdXRvRXZhbHVhdGVGdW5jdGlvbnMoKCkgPT4ge1xuICAgICAgcmV0dXJuIGV2YWx1YXRlKGVsLCBiaW5kaW5nLmV4cHJlc3Npb24pO1xuICAgIH0pO1xuICB9XG4gIHJldHVybiBnZXRBdHRyaWJ1dGVCaW5kaW5nKGVsLCBuYW1lLCBmYWxsYmFjayk7XG59XG5mdW5jdGlvbiBnZXRBdHRyaWJ1dGVCaW5kaW5nKGVsLCBuYW1lLCBmYWxsYmFjaykge1xuICBsZXQgYXR0ciA9IGVsLmdldEF0dHJpYnV0ZShuYW1lKTtcbiAgaWYgKGF0dHIgPT09IG51bGwpXG4gICAgcmV0dXJuIHR5cGVvZiBmYWxsYmFjayA9PT0gXCJmdW5jdGlvblwiID8gZmFsbGJhY2soKSA6IGZhbGxiYWNrO1xuICBpZiAoYXR0ciA9PT0gXCJcIilcbiAgICByZXR1cm4gdHJ1ZTtcbiAgaWYgKGlzQm9vbGVhbkF0dHIobmFtZSkpIHtcbiAgICByZXR1cm4gISFbbmFtZSwgXCJ0cnVlXCJdLmluY2x1ZGVzKGF0dHIpO1xuICB9XG4gIHJldHVybiBhdHRyO1xufVxuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvdXRpbHMvZGVib3VuY2UuanNcbmZ1bmN0aW9uIGRlYm91bmNlKGZ1bmMsIHdhaXQpIHtcbiAgdmFyIHRpbWVvdXQ7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgY29udGV4dCA9IHRoaXMsIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgdmFyIGxhdGVyID0gZnVuY3Rpb24oKSB7XG4gICAgICB0aW1lb3V0ID0gbnVsbDtcbiAgICAgIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgfTtcbiAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgdGltZW91dCA9IHNldFRpbWVvdXQobGF0ZXIsIHdhaXQpO1xuICB9O1xufVxuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvdXRpbHMvdGhyb3R0bGUuanNcbmZ1bmN0aW9uIHRocm90dGxlKGZ1bmMsIGxpbWl0KSB7XG4gIGxldCBpblRocm90dGxlO1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgbGV0IGNvbnRleHQgPSB0aGlzLCBhcmdzID0gYXJndW1lbnRzO1xuICAgIGlmICghaW5UaHJvdHRsZSkge1xuICAgICAgZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICAgIGluVGhyb3R0bGUgPSB0cnVlO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiBpblRocm90dGxlID0gZmFsc2UsIGxpbWl0KTtcbiAgICB9XG4gIH07XG59XG5cbi8vIHBhY2thZ2VzL2FscGluZWpzL3NyYy9lbnRhbmdsZS5qc1xuZnVuY3Rpb24gZW50YW5nbGUoeyBnZXQ6IG91dGVyR2V0LCBzZXQ6IG91dGVyU2V0IH0sIHsgZ2V0OiBpbm5lckdldCwgc2V0OiBpbm5lclNldCB9KSB7XG4gIGxldCBmaXJzdFJ1biA9IHRydWU7XG4gIGxldCBvdXRlckhhc2g7XG4gIGxldCByZWZlcmVuY2UgPSBlZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IG91dGVyID0gb3V0ZXJHZXQoKTtcbiAgICBjb25zdCBpbm5lciA9IGlubmVyR2V0KCk7XG4gICAgaWYgKGZpcnN0UnVuKSB7XG4gICAgICBpbm5lclNldChjbG9uZUlmT2JqZWN0KG91dGVyKSk7XG4gICAgICBmaXJzdFJ1biA9IGZhbHNlO1xuICAgICAgb3V0ZXJIYXNoID0gSlNPTi5zdHJpbmdpZnkob3V0ZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBvdXRlckhhc2hMYXRlc3QgPSBKU09OLnN0cmluZ2lmeShvdXRlcik7XG4gICAgICBpZiAob3V0ZXJIYXNoTGF0ZXN0ICE9PSBvdXRlckhhc2gpIHtcbiAgICAgICAgaW5uZXJTZXQoY2xvbmVJZk9iamVjdChvdXRlcikpO1xuICAgICAgICBvdXRlckhhc2ggPSBvdXRlckhhc2hMYXRlc3Q7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvdXRlclNldChjbG9uZUlmT2JqZWN0KGlubmVyKSk7XG4gICAgICAgIG91dGVySGFzaCA9IEpTT04uc3RyaW5naWZ5KGlubmVyKTtcbiAgICAgIH1cbiAgICB9XG4gICAgSlNPTi5zdHJpbmdpZnkoaW5uZXJHZXQoKSk7XG4gICAgSlNPTi5zdHJpbmdpZnkob3V0ZXJHZXQoKSk7XG4gIH0pO1xuICByZXR1cm4gKCkgPT4ge1xuICAgIHJlbGVhc2UocmVmZXJlbmNlKTtcbiAgfTtcbn1cbmZ1bmN0aW9uIGNsb25lSWZPYmplY3QodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiA/IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodmFsdWUpKSA6IHZhbHVlO1xufVxuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvcGx1Z2luLmpzXG5mdW5jdGlvbiBwbHVnaW4oY2FsbGJhY2spIHtcbiAgbGV0IGNhbGxiYWNrcyA9IEFycmF5LmlzQXJyYXkoY2FsbGJhY2spID8gY2FsbGJhY2sgOiBbY2FsbGJhY2tdO1xuICBjYWxsYmFja3MuZm9yRWFjaCgoaSkgPT4gaShhbHBpbmVfZGVmYXVsdCkpO1xufVxuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvc3RvcmUuanNcbnZhciBzdG9yZXMgPSB7fTtcbnZhciBpc1JlYWN0aXZlID0gZmFsc2U7XG5mdW5jdGlvbiBzdG9yZShuYW1lLCB2YWx1ZSkge1xuICBpZiAoIWlzUmVhY3RpdmUpIHtcbiAgICBzdG9yZXMgPSByZWFjdGl2ZShzdG9yZXMpO1xuICAgIGlzUmVhY3RpdmUgPSB0cnVlO1xuICB9XG4gIGlmICh2YWx1ZSA9PT0gdm9pZCAwKSB7XG4gICAgcmV0dXJuIHN0b3Jlc1tuYW1lXTtcbiAgfVxuICBzdG9yZXNbbmFtZV0gPSB2YWx1ZTtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJiB2YWx1ZSAhPT0gbnVsbCAmJiB2YWx1ZS5oYXNPd25Qcm9wZXJ0eShcImluaXRcIikgJiYgdHlwZW9mIHZhbHVlLmluaXQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHN0b3Jlc1tuYW1lXS5pbml0KCk7XG4gIH1cbiAgaW5pdEludGVyY2VwdG9yczIoc3RvcmVzW25hbWVdKTtcbn1cbmZ1bmN0aW9uIGdldFN0b3JlcygpIHtcbiAgcmV0dXJuIHN0b3Jlcztcbn1cblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL2JpbmRzLmpzXG52YXIgYmluZHMgPSB7fTtcbmZ1bmN0aW9uIGJpbmQyKG5hbWUsIGJpbmRpbmdzKSB7XG4gIGxldCBnZXRCaW5kaW5ncyA9IHR5cGVvZiBiaW5kaW5ncyAhPT0gXCJmdW5jdGlvblwiID8gKCkgPT4gYmluZGluZ3MgOiBiaW5kaW5ncztcbiAgaWYgKG5hbWUgaW5zdGFuY2VvZiBFbGVtZW50KSB7XG4gICAgcmV0dXJuIGFwcGx5QmluZGluZ3NPYmplY3QobmFtZSwgZ2V0QmluZGluZ3MoKSk7XG4gIH0gZWxzZSB7XG4gICAgYmluZHNbbmFtZV0gPSBnZXRCaW5kaW5ncztcbiAgfVxuICByZXR1cm4gKCkgPT4ge1xuICB9O1xufVxuZnVuY3Rpb24gaW5qZWN0QmluZGluZ1Byb3ZpZGVycyhvYmopIHtcbiAgT2JqZWN0LmVudHJpZXMoYmluZHMpLmZvckVhY2goKFtuYW1lLCBjYWxsYmFja10pID0+IHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBuYW1lLCB7XG4gICAgICBnZXQoKSB7XG4gICAgICAgIHJldHVybiAoLi4uYXJncykgPT4ge1xuICAgICAgICAgIHJldHVybiBjYWxsYmFjayguLi5hcmdzKTtcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG4gIHJldHVybiBvYmo7XG59XG5mdW5jdGlvbiBhcHBseUJpbmRpbmdzT2JqZWN0KGVsLCBvYmosIG9yaWdpbmFsKSB7XG4gIGxldCBjbGVhbnVwUnVubmVycyA9IFtdO1xuICB3aGlsZSAoY2xlYW51cFJ1bm5lcnMubGVuZ3RoKVxuICAgIGNsZWFudXBSdW5uZXJzLnBvcCgpKCk7XG4gIGxldCBhdHRyaWJ1dGVzID0gT2JqZWN0LmVudHJpZXMob2JqKS5tYXAoKFtuYW1lLCB2YWx1ZV0pID0+ICh7IG5hbWUsIHZhbHVlIH0pKTtcbiAgbGV0IHN0YXRpY0F0dHJpYnV0ZXMgPSBhdHRyaWJ1dGVzT25seShhdHRyaWJ1dGVzKTtcbiAgYXR0cmlidXRlcyA9IGF0dHJpYnV0ZXMubWFwKChhdHRyaWJ1dGUpID0+IHtcbiAgICBpZiAoc3RhdGljQXR0cmlidXRlcy5maW5kKChhdHRyKSA9PiBhdHRyLm5hbWUgPT09IGF0dHJpYnV0ZS5uYW1lKSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbmFtZTogYHgtYmluZDoke2F0dHJpYnV0ZS5uYW1lfWAsXG4gICAgICAgIHZhbHVlOiBgXCIke2F0dHJpYnV0ZS52YWx1ZX1cImBcbiAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiBhdHRyaWJ1dGU7XG4gIH0pO1xuICBkaXJlY3RpdmVzKGVsLCBhdHRyaWJ1dGVzLCBvcmlnaW5hbCkubWFwKChoYW5kbGUpID0+IHtcbiAgICBjbGVhbnVwUnVubmVycy5wdXNoKGhhbmRsZS5ydW5DbGVhbnVwcyk7XG4gICAgaGFuZGxlKCk7XG4gIH0pO1xuICByZXR1cm4gKCkgPT4ge1xuICAgIHdoaWxlIChjbGVhbnVwUnVubmVycy5sZW5ndGgpXG4gICAgICBjbGVhbnVwUnVubmVycy5wb3AoKSgpO1xuICB9O1xufVxuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvZGF0YXMuanNcbnZhciBkYXRhcyA9IHt9O1xuZnVuY3Rpb24gZGF0YShuYW1lLCBjYWxsYmFjaykge1xuICBkYXRhc1tuYW1lXSA9IGNhbGxiYWNrO1xufVxuZnVuY3Rpb24gaW5qZWN0RGF0YVByb3ZpZGVycyhvYmosIGNvbnRleHQpIHtcbiAgT2JqZWN0LmVudHJpZXMoZGF0YXMpLmZvckVhY2goKFtuYW1lLCBjYWxsYmFja10pID0+IHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBuYW1lLCB7XG4gICAgICBnZXQoKSB7XG4gICAgICAgIHJldHVybiAoLi4uYXJncykgPT4ge1xuICAgICAgICAgIHJldHVybiBjYWxsYmFjay5iaW5kKGNvbnRleHQpKC4uLmFyZ3MpO1xuICAgICAgICB9O1xuICAgICAgfSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlXG4gICAgfSk7XG4gIH0pO1xuICByZXR1cm4gb2JqO1xufVxuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvYWxwaW5lLmpzXG52YXIgQWxwaW5lID0ge1xuICBnZXQgcmVhY3RpdmUoKSB7XG4gICAgcmV0dXJuIHJlYWN0aXZlO1xuICB9LFxuICBnZXQgcmVsZWFzZSgpIHtcbiAgICByZXR1cm4gcmVsZWFzZTtcbiAgfSxcbiAgZ2V0IGVmZmVjdCgpIHtcbiAgICByZXR1cm4gZWZmZWN0O1xuICB9LFxuICBnZXQgcmF3KCkge1xuICAgIHJldHVybiByYXc7XG4gIH0sXG4gIHZlcnNpb246IFwiMy4xMy4zXCIsXG4gIGZsdXNoQW5kU3RvcERlZmVycmluZ011dGF0aW9ucyxcbiAgZG9udEF1dG9FdmFsdWF0ZUZ1bmN0aW9ucyxcbiAgZGlzYWJsZUVmZmVjdFNjaGVkdWxpbmcsXG4gIHN0YXJ0T2JzZXJ2aW5nTXV0YXRpb25zLFxuICBzdG9wT2JzZXJ2aW5nTXV0YXRpb25zLFxuICBzZXRSZWFjdGl2aXR5RW5naW5lLFxuICBvbkF0dHJpYnV0ZVJlbW92ZWQsXG4gIG9uQXR0cmlidXRlc0FkZGVkLFxuICBjbG9zZXN0RGF0YVN0YWNrLFxuICBza2lwRHVyaW5nQ2xvbmUsXG4gIG9ubHlEdXJpbmdDbG9uZSxcbiAgYWRkUm9vdFNlbGVjdG9yLFxuICBhZGRJbml0U2VsZWN0b3IsXG4gIGludGVyY2VwdENsb25lLFxuICBhZGRTY29wZVRvTm9kZSxcbiAgZGVmZXJNdXRhdGlvbnMsXG4gIG1hcEF0dHJpYnV0ZXMsXG4gIGV2YWx1YXRlTGF0ZXIsXG4gIGludGVyY2VwdEluaXQsXG4gIHNldEV2YWx1YXRvcixcbiAgbWVyZ2VQcm94aWVzLFxuICBleHRyYWN0UHJvcCxcbiAgZmluZENsb3Nlc3QsXG4gIG9uRWxSZW1vdmVkLFxuICBjbG9zZXN0Um9vdCxcbiAgZGVzdHJveVRyZWUsXG4gIGludGVyY2VwdG9yLFxuICAvLyBJTlRFUk5BTDogbm90IHB1YmxpYyBBUEkgYW5kIGlzIHN1YmplY3QgdG8gY2hhbmdlIHdpdGhvdXQgbWFqb3IgcmVsZWFzZS5cbiAgdHJhbnNpdGlvbixcbiAgLy8gSU5URVJOQUxcbiAgc2V0U3R5bGVzLFxuICAvLyBJTlRFUk5BTFxuICBtdXRhdGVEb20sXG4gIGRpcmVjdGl2ZSxcbiAgZW50YW5nbGUsXG4gIHRocm90dGxlLFxuICBkZWJvdW5jZSxcbiAgZXZhbHVhdGUsXG4gIGluaXRUcmVlLFxuICBuZXh0VGljayxcbiAgcHJlZml4ZWQ6IHByZWZpeCxcbiAgcHJlZml4OiBzZXRQcmVmaXgsXG4gIHBsdWdpbixcbiAgbWFnaWMsXG4gIHN0b3JlLFxuICBzdGFydCxcbiAgY2xvbmUsXG4gIC8vIElOVEVSTkFMXG4gIGNsb25lTm9kZSxcbiAgLy8gSU5URVJOQUxcbiAgYm91bmQ6IGdldEJpbmRpbmcsXG4gICRkYXRhOiBzY29wZSxcbiAgd2FsayxcbiAgZGF0YSxcbiAgYmluZDogYmluZDJcbn07XG52YXIgYWxwaW5lX2RlZmF1bHQgPSBBbHBpbmU7XG5cbi8vIG5vZGVfbW9kdWxlcy9AdnVlL3NoYXJlZC9kaXN0L3NoYXJlZC5lc20tYnVuZGxlci5qc1xuZnVuY3Rpb24gbWFrZU1hcChzdHIsIGV4cGVjdHNMb3dlckNhc2UpIHtcbiAgY29uc3QgbWFwID0gLyogQF9fUFVSRV9fICovIE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIGNvbnN0IGxpc3QgPSBzdHIuc3BsaXQoXCIsXCIpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICBtYXBbbGlzdFtpXV0gPSB0cnVlO1xuICB9XG4gIHJldHVybiBleHBlY3RzTG93ZXJDYXNlID8gKHZhbCkgPT4gISFtYXBbdmFsLnRvTG93ZXJDYXNlKCldIDogKHZhbCkgPT4gISFtYXBbdmFsXTtcbn1cbnZhciBzcGVjaWFsQm9vbGVhbkF0dHJzID0gYGl0ZW1zY29wZSxhbGxvd2Z1bGxzY3JlZW4sZm9ybW5vdmFsaWRhdGUsaXNtYXAsbm9tb2R1bGUsbm92YWxpZGF0ZSxyZWFkb25seWA7XG52YXIgaXNCb29sZWFuQXR0cjIgPSAvKiBAX19QVVJFX18gKi8gbWFrZU1hcChzcGVjaWFsQm9vbGVhbkF0dHJzICsgYCxhc3luYyxhdXRvZm9jdXMsYXV0b3BsYXksY29udHJvbHMsZGVmYXVsdCxkZWZlcixkaXNhYmxlZCxoaWRkZW4sbG9vcCxvcGVuLHJlcXVpcmVkLHJldmVyc2VkLHNjb3BlZCxzZWFtbGVzcyxjaGVja2VkLG11dGVkLG11bHRpcGxlLHNlbGVjdGVkYCk7XG52YXIgRU1QVFlfT0JKID0gdHJ1ZSA/IE9iamVjdC5mcmVlemUoe30pIDoge307XG52YXIgRU1QVFlfQVJSID0gdHJ1ZSA/IE9iamVjdC5mcmVlemUoW10pIDogW107XG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIGhhc093biA9ICh2YWwsIGtleSkgPT4gaGFzT3duUHJvcGVydHkuY2FsbCh2YWwsIGtleSk7XG52YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXk7XG52YXIgaXNNYXAgPSAodmFsKSA9PiB0b1R5cGVTdHJpbmcodmFsKSA9PT0gXCJbb2JqZWN0IE1hcF1cIjtcbnZhciBpc1N0cmluZyA9ICh2YWwpID0+IHR5cGVvZiB2YWwgPT09IFwic3RyaW5nXCI7XG52YXIgaXNTeW1ib2wgPSAodmFsKSA9PiB0eXBlb2YgdmFsID09PSBcInN5bWJvbFwiO1xudmFyIGlzT2JqZWN0ID0gKHZhbCkgPT4gdmFsICE9PSBudWxsICYmIHR5cGVvZiB2YWwgPT09IFwib2JqZWN0XCI7XG52YXIgb2JqZWN0VG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xudmFyIHRvVHlwZVN0cmluZyA9ICh2YWx1ZSkgPT4gb2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG52YXIgdG9SYXdUeXBlID0gKHZhbHVlKSA9PiB7XG4gIHJldHVybiB0b1R5cGVTdHJpbmcodmFsdWUpLnNsaWNlKDgsIC0xKTtcbn07XG52YXIgaXNJbnRlZ2VyS2V5ID0gKGtleSkgPT4gaXNTdHJpbmcoa2V5KSAmJiBrZXkgIT09IFwiTmFOXCIgJiYga2V5WzBdICE9PSBcIi1cIiAmJiBcIlwiICsgcGFyc2VJbnQoa2V5LCAxMCkgPT09IGtleTtcbnZhciBjYWNoZVN0cmluZ0Z1bmN0aW9uID0gKGZuKSA9PiB7XG4gIGNvbnN0IGNhY2hlID0gLyogQF9fUFVSRV9fICovIE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIHJldHVybiAoc3RyKSA9PiB7XG4gICAgY29uc3QgaGl0ID0gY2FjaGVbc3RyXTtcbiAgICByZXR1cm4gaGl0IHx8IChjYWNoZVtzdHJdID0gZm4oc3RyKSk7XG4gIH07XG59O1xudmFyIGNhbWVsaXplUkUgPSAvLShcXHcpL2c7XG52YXIgY2FtZWxpemUgPSBjYWNoZVN0cmluZ0Z1bmN0aW9uKChzdHIpID0+IHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKGNhbWVsaXplUkUsIChfLCBjKSA9PiBjID8gYy50b1VwcGVyQ2FzZSgpIDogXCJcIik7XG59KTtcbnZhciBoeXBoZW5hdGVSRSA9IC9cXEIoW0EtWl0pL2c7XG52YXIgaHlwaGVuYXRlID0gY2FjaGVTdHJpbmdGdW5jdGlvbigoc3RyKSA9PiBzdHIucmVwbGFjZShoeXBoZW5hdGVSRSwgXCItJDFcIikudG9Mb3dlckNhc2UoKSk7XG52YXIgY2FwaXRhbGl6ZSA9IGNhY2hlU3RyaW5nRnVuY3Rpb24oKHN0cikgPT4gc3RyLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyLnNsaWNlKDEpKTtcbnZhciB0b0hhbmRsZXJLZXkgPSBjYWNoZVN0cmluZ0Z1bmN0aW9uKChzdHIpID0+IHN0ciA/IGBvbiR7Y2FwaXRhbGl6ZShzdHIpfWAgOiBgYCk7XG52YXIgaGFzQ2hhbmdlZCA9ICh2YWx1ZSwgb2xkVmFsdWUpID0+IHZhbHVlICE9PSBvbGRWYWx1ZSAmJiAodmFsdWUgPT09IHZhbHVlIHx8IG9sZFZhbHVlID09PSBvbGRWYWx1ZSk7XG5cbi8vIG5vZGVfbW9kdWxlcy9AdnVlL3JlYWN0aXZpdHkvZGlzdC9yZWFjdGl2aXR5LmVzbS1idW5kbGVyLmpzXG52YXIgdGFyZ2V0TWFwID0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7XG52YXIgZWZmZWN0U3RhY2sgPSBbXTtcbnZhciBhY3RpdmVFZmZlY3Q7XG52YXIgSVRFUkFURV9LRVkgPSBTeW1ib2wodHJ1ZSA/IFwiaXRlcmF0ZVwiIDogXCJcIik7XG52YXIgTUFQX0tFWV9JVEVSQVRFX0tFWSA9IFN5bWJvbCh0cnVlID8gXCJNYXAga2V5IGl0ZXJhdGVcIiA6IFwiXCIpO1xuZnVuY3Rpb24gaXNFZmZlY3QoZm4pIHtcbiAgcmV0dXJuIGZuICYmIGZuLl9pc0VmZmVjdCA9PT0gdHJ1ZTtcbn1cbmZ1bmN0aW9uIGVmZmVjdDIoZm4sIG9wdGlvbnMgPSBFTVBUWV9PQkopIHtcbiAgaWYgKGlzRWZmZWN0KGZuKSkge1xuICAgIGZuID0gZm4ucmF3O1xuICB9XG4gIGNvbnN0IGVmZmVjdDMgPSBjcmVhdGVSZWFjdGl2ZUVmZmVjdChmbiwgb3B0aW9ucyk7XG4gIGlmICghb3B0aW9ucy5sYXp5KSB7XG4gICAgZWZmZWN0MygpO1xuICB9XG4gIHJldHVybiBlZmZlY3QzO1xufVxuZnVuY3Rpb24gc3RvcChlZmZlY3QzKSB7XG4gIGlmIChlZmZlY3QzLmFjdGl2ZSkge1xuICAgIGNsZWFudXAoZWZmZWN0Myk7XG4gICAgaWYgKGVmZmVjdDMub3B0aW9ucy5vblN0b3ApIHtcbiAgICAgIGVmZmVjdDMub3B0aW9ucy5vblN0b3AoKTtcbiAgICB9XG4gICAgZWZmZWN0My5hY3RpdmUgPSBmYWxzZTtcbiAgfVxufVxudmFyIHVpZCA9IDA7XG5mdW5jdGlvbiBjcmVhdGVSZWFjdGl2ZUVmZmVjdChmbiwgb3B0aW9ucykge1xuICBjb25zdCBlZmZlY3QzID0gZnVuY3Rpb24gcmVhY3RpdmVFZmZlY3QoKSB7XG4gICAgaWYgKCFlZmZlY3QzLmFjdGl2ZSkge1xuICAgICAgcmV0dXJuIGZuKCk7XG4gICAgfVxuICAgIGlmICghZWZmZWN0U3RhY2suaW5jbHVkZXMoZWZmZWN0MykpIHtcbiAgICAgIGNsZWFudXAoZWZmZWN0Myk7XG4gICAgICB0cnkge1xuICAgICAgICBlbmFibGVUcmFja2luZygpO1xuICAgICAgICBlZmZlY3RTdGFjay5wdXNoKGVmZmVjdDMpO1xuICAgICAgICBhY3RpdmVFZmZlY3QgPSBlZmZlY3QzO1xuICAgICAgICByZXR1cm4gZm4oKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGVmZmVjdFN0YWNrLnBvcCgpO1xuICAgICAgICByZXNldFRyYWNraW5nKCk7XG4gICAgICAgIGFjdGl2ZUVmZmVjdCA9IGVmZmVjdFN0YWNrW2VmZmVjdFN0YWNrLmxlbmd0aCAtIDFdO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgZWZmZWN0My5pZCA9IHVpZCsrO1xuICBlZmZlY3QzLmFsbG93UmVjdXJzZSA9ICEhb3B0aW9ucy5hbGxvd1JlY3Vyc2U7XG4gIGVmZmVjdDMuX2lzRWZmZWN0ID0gdHJ1ZTtcbiAgZWZmZWN0My5hY3RpdmUgPSB0cnVlO1xuICBlZmZlY3QzLnJhdyA9IGZuO1xuICBlZmZlY3QzLmRlcHMgPSBbXTtcbiAgZWZmZWN0My5vcHRpb25zID0gb3B0aW9ucztcbiAgcmV0dXJuIGVmZmVjdDM7XG59XG5mdW5jdGlvbiBjbGVhbnVwKGVmZmVjdDMpIHtcbiAgY29uc3QgeyBkZXBzIH0gPSBlZmZlY3QzO1xuICBpZiAoZGVwcy5sZW5ndGgpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRlcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGRlcHNbaV0uZGVsZXRlKGVmZmVjdDMpO1xuICAgIH1cbiAgICBkZXBzLmxlbmd0aCA9IDA7XG4gIH1cbn1cbnZhciBzaG91bGRUcmFjayA9IHRydWU7XG52YXIgdHJhY2tTdGFjayA9IFtdO1xuZnVuY3Rpb24gcGF1c2VUcmFja2luZygpIHtcbiAgdHJhY2tTdGFjay5wdXNoKHNob3VsZFRyYWNrKTtcbiAgc2hvdWxkVHJhY2sgPSBmYWxzZTtcbn1cbmZ1bmN0aW9uIGVuYWJsZVRyYWNraW5nKCkge1xuICB0cmFja1N0YWNrLnB1c2goc2hvdWxkVHJhY2spO1xuICBzaG91bGRUcmFjayA9IHRydWU7XG59XG5mdW5jdGlvbiByZXNldFRyYWNraW5nKCkge1xuICBjb25zdCBsYXN0ID0gdHJhY2tTdGFjay5wb3AoKTtcbiAgc2hvdWxkVHJhY2sgPSBsYXN0ID09PSB2b2lkIDAgPyB0cnVlIDogbGFzdDtcbn1cbmZ1bmN0aW9uIHRyYWNrKHRhcmdldCwgdHlwZSwga2V5KSB7XG4gIGlmICghc2hvdWxkVHJhY2sgfHwgYWN0aXZlRWZmZWN0ID09PSB2b2lkIDApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgbGV0IGRlcHNNYXAgPSB0YXJnZXRNYXAuZ2V0KHRhcmdldCk7XG4gIGlmICghZGVwc01hcCkge1xuICAgIHRhcmdldE1hcC5zZXQodGFyZ2V0LCBkZXBzTWFwID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKSk7XG4gIH1cbiAgbGV0IGRlcCA9IGRlcHNNYXAuZ2V0KGtleSk7XG4gIGlmICghZGVwKSB7XG4gICAgZGVwc01hcC5zZXQoa2V5LCBkZXAgPSAvKiBAX19QVVJFX18gKi8gbmV3IFNldCgpKTtcbiAgfVxuICBpZiAoIWRlcC5oYXMoYWN0aXZlRWZmZWN0KSkge1xuICAgIGRlcC5hZGQoYWN0aXZlRWZmZWN0KTtcbiAgICBhY3RpdmVFZmZlY3QuZGVwcy5wdXNoKGRlcCk7XG4gICAgaWYgKGFjdGl2ZUVmZmVjdC5vcHRpb25zLm9uVHJhY2spIHtcbiAgICAgIGFjdGl2ZUVmZmVjdC5vcHRpb25zLm9uVHJhY2soe1xuICAgICAgICBlZmZlY3Q6IGFjdGl2ZUVmZmVjdCxcbiAgICAgICAgdGFyZ2V0LFxuICAgICAgICB0eXBlLFxuICAgICAgICBrZXlcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuZnVuY3Rpb24gdHJpZ2dlcih0YXJnZXQsIHR5cGUsIGtleSwgbmV3VmFsdWUsIG9sZFZhbHVlLCBvbGRUYXJnZXQpIHtcbiAgY29uc3QgZGVwc01hcCA9IHRhcmdldE1hcC5nZXQodGFyZ2V0KTtcbiAgaWYgKCFkZXBzTWFwKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IGVmZmVjdHMgPSAvKiBAX19QVVJFX18gKi8gbmV3IFNldCgpO1xuICBjb25zdCBhZGQyID0gKGVmZmVjdHNUb0FkZCkgPT4ge1xuICAgIGlmIChlZmZlY3RzVG9BZGQpIHtcbiAgICAgIGVmZmVjdHNUb0FkZC5mb3JFYWNoKChlZmZlY3QzKSA9PiB7XG4gICAgICAgIGlmIChlZmZlY3QzICE9PSBhY3RpdmVFZmZlY3QgfHwgZWZmZWN0My5hbGxvd1JlY3Vyc2UpIHtcbiAgICAgICAgICBlZmZlY3RzLmFkZChlZmZlY3QzKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuICBpZiAodHlwZSA9PT0gXCJjbGVhclwiKSB7XG4gICAgZGVwc01hcC5mb3JFYWNoKGFkZDIpO1xuICB9IGVsc2UgaWYgKGtleSA9PT0gXCJsZW5ndGhcIiAmJiBpc0FycmF5KHRhcmdldCkpIHtcbiAgICBkZXBzTWFwLmZvckVhY2goKGRlcCwga2V5MikgPT4ge1xuICAgICAgaWYgKGtleTIgPT09IFwibGVuZ3RoXCIgfHwga2V5MiA+PSBuZXdWYWx1ZSkge1xuICAgICAgICBhZGQyKGRlcCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKGtleSAhPT0gdm9pZCAwKSB7XG4gICAgICBhZGQyKGRlcHNNYXAuZ2V0KGtleSkpO1xuICAgIH1cbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgXCJhZGRcIjpcbiAgICAgICAgaWYgKCFpc0FycmF5KHRhcmdldCkpIHtcbiAgICAgICAgICBhZGQyKGRlcHNNYXAuZ2V0KElURVJBVEVfS0VZKSk7XG4gICAgICAgICAgaWYgKGlzTWFwKHRhcmdldCkpIHtcbiAgICAgICAgICAgIGFkZDIoZGVwc01hcC5nZXQoTUFQX0tFWV9JVEVSQVRFX0tFWSkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChpc0ludGVnZXJLZXkoa2V5KSkge1xuICAgICAgICAgIGFkZDIoZGVwc01hcC5nZXQoXCJsZW5ndGhcIikpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcImRlbGV0ZVwiOlxuICAgICAgICBpZiAoIWlzQXJyYXkodGFyZ2V0KSkge1xuICAgICAgICAgIGFkZDIoZGVwc01hcC5nZXQoSVRFUkFURV9LRVkpKTtcbiAgICAgICAgICBpZiAoaXNNYXAodGFyZ2V0KSkge1xuICAgICAgICAgICAgYWRkMihkZXBzTWFwLmdldChNQVBfS0VZX0lURVJBVEVfS0VZKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcInNldFwiOlxuICAgICAgICBpZiAoaXNNYXAodGFyZ2V0KSkge1xuICAgICAgICAgIGFkZDIoZGVwc01hcC5nZXQoSVRFUkFURV9LRVkpKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgY29uc3QgcnVuID0gKGVmZmVjdDMpID0+IHtcbiAgICBpZiAoZWZmZWN0My5vcHRpb25zLm9uVHJpZ2dlcikge1xuICAgICAgZWZmZWN0My5vcHRpb25zLm9uVHJpZ2dlcih7XG4gICAgICAgIGVmZmVjdDogZWZmZWN0MyxcbiAgICAgICAgdGFyZ2V0LFxuICAgICAgICBrZXksXG4gICAgICAgIHR5cGUsXG4gICAgICAgIG5ld1ZhbHVlLFxuICAgICAgICBvbGRWYWx1ZSxcbiAgICAgICAgb2xkVGFyZ2V0XG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKGVmZmVjdDMub3B0aW9ucy5zY2hlZHVsZXIpIHtcbiAgICAgIGVmZmVjdDMub3B0aW9ucy5zY2hlZHVsZXIoZWZmZWN0Myk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVmZmVjdDMoKTtcbiAgICB9XG4gIH07XG4gIGVmZmVjdHMuZm9yRWFjaChydW4pO1xufVxudmFyIGlzTm9uVHJhY2thYmxlS2V5cyA9IC8qIEBfX1BVUkVfXyAqLyBtYWtlTWFwKGBfX3Byb3RvX18sX192X2lzUmVmLF9faXNWdWVgKTtcbnZhciBidWlsdEluU3ltYm9scyA9IG5ldyBTZXQoT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoU3ltYm9sKS5tYXAoKGtleSkgPT4gU3ltYm9sW2tleV0pLmZpbHRlcihpc1N5bWJvbCkpO1xudmFyIGdldDIgPSAvKiBAX19QVVJFX18gKi8gY3JlYXRlR2V0dGVyKCk7XG52YXIgcmVhZG9ubHlHZXQgPSAvKiBAX19QVVJFX18gKi8gY3JlYXRlR2V0dGVyKHRydWUpO1xudmFyIGFycmF5SW5zdHJ1bWVudGF0aW9ucyA9IC8qIEBfX1BVUkVfXyAqLyBjcmVhdGVBcnJheUluc3RydW1lbnRhdGlvbnMoKTtcbmZ1bmN0aW9uIGNyZWF0ZUFycmF5SW5zdHJ1bWVudGF0aW9ucygpIHtcbiAgY29uc3QgaW5zdHJ1bWVudGF0aW9ucyA9IHt9O1xuICBbXCJpbmNsdWRlc1wiLCBcImluZGV4T2ZcIiwgXCJsYXN0SW5kZXhPZlwiXS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICBpbnN0cnVtZW50YXRpb25zW2tleV0gPSBmdW5jdGlvbiguLi5hcmdzKSB7XG4gICAgICBjb25zdCBhcnIgPSB0b1Jhdyh0aGlzKTtcbiAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gdGhpcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgdHJhY2soYXJyLCBcImdldFwiLCBpICsgXCJcIik7XG4gICAgICB9XG4gICAgICBjb25zdCByZXMgPSBhcnJba2V5XSguLi5hcmdzKTtcbiAgICAgIGlmIChyZXMgPT09IC0xIHx8IHJlcyA9PT0gZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuIGFycltrZXldKC4uLmFyZ3MubWFwKHRvUmF3KSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgfVxuICAgIH07XG4gIH0pO1xuICBbXCJwdXNoXCIsIFwicG9wXCIsIFwic2hpZnRcIiwgXCJ1bnNoaWZ0XCIsIFwic3BsaWNlXCJdLmZvckVhY2goKGtleSkgPT4ge1xuICAgIGluc3RydW1lbnRhdGlvbnNba2V5XSA9IGZ1bmN0aW9uKC4uLmFyZ3MpIHtcbiAgICAgIHBhdXNlVHJhY2tpbmcoKTtcbiAgICAgIGNvbnN0IHJlcyA9IHRvUmF3KHRoaXMpW2tleV0uYXBwbHkodGhpcywgYXJncyk7XG4gICAgICByZXNldFRyYWNraW5nKCk7XG4gICAgICByZXR1cm4gcmVzO1xuICAgIH07XG4gIH0pO1xuICByZXR1cm4gaW5zdHJ1bWVudGF0aW9ucztcbn1cbmZ1bmN0aW9uIGNyZWF0ZUdldHRlcihpc1JlYWRvbmx5ID0gZmFsc2UsIHNoYWxsb3cgPSBmYWxzZSkge1xuICByZXR1cm4gZnVuY3Rpb24gZ2V0Myh0YXJnZXQsIGtleSwgcmVjZWl2ZXIpIHtcbiAgICBpZiAoa2V5ID09PSBcIl9fdl9pc1JlYWN0aXZlXCIpIHtcbiAgICAgIHJldHVybiAhaXNSZWFkb25seTtcbiAgICB9IGVsc2UgaWYgKGtleSA9PT0gXCJfX3ZfaXNSZWFkb25seVwiKSB7XG4gICAgICByZXR1cm4gaXNSZWFkb25seTtcbiAgICB9IGVsc2UgaWYgKGtleSA9PT0gXCJfX3ZfcmF3XCIgJiYgcmVjZWl2ZXIgPT09IChpc1JlYWRvbmx5ID8gc2hhbGxvdyA/IHNoYWxsb3dSZWFkb25seU1hcCA6IHJlYWRvbmx5TWFwIDogc2hhbGxvdyA/IHNoYWxsb3dSZWFjdGl2ZU1hcCA6IHJlYWN0aXZlTWFwKS5nZXQodGFyZ2V0KSkge1xuICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICB9XG4gICAgY29uc3QgdGFyZ2V0SXNBcnJheSA9IGlzQXJyYXkodGFyZ2V0KTtcbiAgICBpZiAoIWlzUmVhZG9ubHkgJiYgdGFyZ2V0SXNBcnJheSAmJiBoYXNPd24oYXJyYXlJbnN0cnVtZW50YXRpb25zLCBrZXkpKSB7XG4gICAgICByZXR1cm4gUmVmbGVjdC5nZXQoYXJyYXlJbnN0cnVtZW50YXRpb25zLCBrZXksIHJlY2VpdmVyKTtcbiAgICB9XG4gICAgY29uc3QgcmVzID0gUmVmbGVjdC5nZXQodGFyZ2V0LCBrZXksIHJlY2VpdmVyKTtcbiAgICBpZiAoaXNTeW1ib2woa2V5KSA/IGJ1aWx0SW5TeW1ib2xzLmhhcyhrZXkpIDogaXNOb25UcmFja2FibGVLZXlzKGtleSkpIHtcbiAgICAgIHJldHVybiByZXM7XG4gICAgfVxuICAgIGlmICghaXNSZWFkb25seSkge1xuICAgICAgdHJhY2sodGFyZ2V0LCBcImdldFwiLCBrZXkpO1xuICAgIH1cbiAgICBpZiAoc2hhbGxvdykge1xuICAgICAgcmV0dXJuIHJlcztcbiAgICB9XG4gICAgaWYgKGlzUmVmKHJlcykpIHtcbiAgICAgIGNvbnN0IHNob3VsZFVud3JhcCA9ICF0YXJnZXRJc0FycmF5IHx8ICFpc0ludGVnZXJLZXkoa2V5KTtcbiAgICAgIHJldHVybiBzaG91bGRVbndyYXAgPyByZXMudmFsdWUgOiByZXM7XG4gICAgfVxuICAgIGlmIChpc09iamVjdChyZXMpKSB7XG4gICAgICByZXR1cm4gaXNSZWFkb25seSA/IHJlYWRvbmx5KHJlcykgOiByZWFjdGl2ZTIocmVzKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlcztcbiAgfTtcbn1cbnZhciBzZXQyID0gLyogQF9fUFVSRV9fICovIGNyZWF0ZVNldHRlcigpO1xuZnVuY3Rpb24gY3JlYXRlU2V0dGVyKHNoYWxsb3cgPSBmYWxzZSkge1xuICByZXR1cm4gZnVuY3Rpb24gc2V0Myh0YXJnZXQsIGtleSwgdmFsdWUsIHJlY2VpdmVyKSB7XG4gICAgbGV0IG9sZFZhbHVlID0gdGFyZ2V0W2tleV07XG4gICAgaWYgKCFzaGFsbG93KSB7XG4gICAgICB2YWx1ZSA9IHRvUmF3KHZhbHVlKTtcbiAgICAgIG9sZFZhbHVlID0gdG9SYXcob2xkVmFsdWUpO1xuICAgICAgaWYgKCFpc0FycmF5KHRhcmdldCkgJiYgaXNSZWYob2xkVmFsdWUpICYmICFpc1JlZih2YWx1ZSkpIHtcbiAgICAgICAgb2xkVmFsdWUudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IGhhZEtleSA9IGlzQXJyYXkodGFyZ2V0KSAmJiBpc0ludGVnZXJLZXkoa2V5KSA/IE51bWJlcihrZXkpIDwgdGFyZ2V0Lmxlbmd0aCA6IGhhc093bih0YXJnZXQsIGtleSk7XG4gICAgY29uc3QgcmVzdWx0ID0gUmVmbGVjdC5zZXQodGFyZ2V0LCBrZXksIHZhbHVlLCByZWNlaXZlcik7XG4gICAgaWYgKHRhcmdldCA9PT0gdG9SYXcocmVjZWl2ZXIpKSB7XG4gICAgICBpZiAoIWhhZEtleSkge1xuICAgICAgICB0cmlnZ2VyKHRhcmdldCwgXCJhZGRcIiwga2V5LCB2YWx1ZSk7XG4gICAgICB9IGVsc2UgaWYgKGhhc0NoYW5nZWQodmFsdWUsIG9sZFZhbHVlKSkge1xuICAgICAgICB0cmlnZ2VyKHRhcmdldCwgXCJzZXRcIiwga2V5LCB2YWx1ZSwgb2xkVmFsdWUpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xufVxuZnVuY3Rpb24gZGVsZXRlUHJvcGVydHkodGFyZ2V0LCBrZXkpIHtcbiAgY29uc3QgaGFkS2V5ID0gaGFzT3duKHRhcmdldCwga2V5KTtcbiAgY29uc3Qgb2xkVmFsdWUgPSB0YXJnZXRba2V5XTtcbiAgY29uc3QgcmVzdWx0ID0gUmVmbGVjdC5kZWxldGVQcm9wZXJ0eSh0YXJnZXQsIGtleSk7XG4gIGlmIChyZXN1bHQgJiYgaGFkS2V5KSB7XG4gICAgdHJpZ2dlcih0YXJnZXQsIFwiZGVsZXRlXCIsIGtleSwgdm9pZCAwLCBvbGRWYWx1ZSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIGhhcyh0YXJnZXQsIGtleSkge1xuICBjb25zdCByZXN1bHQgPSBSZWZsZWN0Lmhhcyh0YXJnZXQsIGtleSk7XG4gIGlmICghaXNTeW1ib2woa2V5KSB8fCAhYnVpbHRJblN5bWJvbHMuaGFzKGtleSkpIHtcbiAgICB0cmFjayh0YXJnZXQsIFwiaGFzXCIsIGtleSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG93bktleXModGFyZ2V0KSB7XG4gIHRyYWNrKHRhcmdldCwgXCJpdGVyYXRlXCIsIGlzQXJyYXkodGFyZ2V0KSA/IFwibGVuZ3RoXCIgOiBJVEVSQVRFX0tFWSk7XG4gIHJldHVybiBSZWZsZWN0Lm93bktleXModGFyZ2V0KTtcbn1cbnZhciBtdXRhYmxlSGFuZGxlcnMgPSB7XG4gIGdldDogZ2V0MixcbiAgc2V0OiBzZXQyLFxuICBkZWxldGVQcm9wZXJ0eSxcbiAgaGFzLFxuICBvd25LZXlzXG59O1xudmFyIHJlYWRvbmx5SGFuZGxlcnMgPSB7XG4gIGdldDogcmVhZG9ubHlHZXQsXG4gIHNldCh0YXJnZXQsIGtleSkge1xuICAgIGlmICh0cnVlKSB7XG4gICAgICBjb25zb2xlLndhcm4oYFNldCBvcGVyYXRpb24gb24ga2V5IFwiJHtTdHJpbmcoa2V5KX1cIiBmYWlsZWQ6IHRhcmdldCBpcyByZWFkb25seS5gLCB0YXJnZXQpO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSxcbiAgZGVsZXRlUHJvcGVydHkodGFyZ2V0LCBrZXkpIHtcbiAgICBpZiAodHJ1ZSkge1xuICAgICAgY29uc29sZS53YXJuKGBEZWxldGUgb3BlcmF0aW9uIG9uIGtleSBcIiR7U3RyaW5nKGtleSl9XCIgZmFpbGVkOiB0YXJnZXQgaXMgcmVhZG9ubHkuYCwgdGFyZ2V0KTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG52YXIgdG9SZWFjdGl2ZSA9ICh2YWx1ZSkgPT4gaXNPYmplY3QodmFsdWUpID8gcmVhY3RpdmUyKHZhbHVlKSA6IHZhbHVlO1xudmFyIHRvUmVhZG9ubHkgPSAodmFsdWUpID0+IGlzT2JqZWN0KHZhbHVlKSA/IHJlYWRvbmx5KHZhbHVlKSA6IHZhbHVlO1xudmFyIHRvU2hhbGxvdyA9ICh2YWx1ZSkgPT4gdmFsdWU7XG52YXIgZ2V0UHJvdG8gPSAodikgPT4gUmVmbGVjdC5nZXRQcm90b3R5cGVPZih2KTtcbmZ1bmN0aW9uIGdldCQxKHRhcmdldCwga2V5LCBpc1JlYWRvbmx5ID0gZmFsc2UsIGlzU2hhbGxvdyA9IGZhbHNlKSB7XG4gIHRhcmdldCA9IHRhcmdldFtcbiAgICBcIl9fdl9yYXdcIlxuICAgIC8qIFJBVyAqL1xuICBdO1xuICBjb25zdCByYXdUYXJnZXQgPSB0b1Jhdyh0YXJnZXQpO1xuICBjb25zdCByYXdLZXkgPSB0b1JhdyhrZXkpO1xuICBpZiAoa2V5ICE9PSByYXdLZXkpIHtcbiAgICAhaXNSZWFkb25seSAmJiB0cmFjayhyYXdUYXJnZXQsIFwiZ2V0XCIsIGtleSk7XG4gIH1cbiAgIWlzUmVhZG9ubHkgJiYgdHJhY2socmF3VGFyZ2V0LCBcImdldFwiLCByYXdLZXkpO1xuICBjb25zdCB7IGhhczogaGFzMiB9ID0gZ2V0UHJvdG8ocmF3VGFyZ2V0KTtcbiAgY29uc3Qgd3JhcCA9IGlzU2hhbGxvdyA/IHRvU2hhbGxvdyA6IGlzUmVhZG9ubHkgPyB0b1JlYWRvbmx5IDogdG9SZWFjdGl2ZTtcbiAgaWYgKGhhczIuY2FsbChyYXdUYXJnZXQsIGtleSkpIHtcbiAgICByZXR1cm4gd3JhcCh0YXJnZXQuZ2V0KGtleSkpO1xuICB9IGVsc2UgaWYgKGhhczIuY2FsbChyYXdUYXJnZXQsIHJhd0tleSkpIHtcbiAgICByZXR1cm4gd3JhcCh0YXJnZXQuZ2V0KHJhd0tleSkpO1xuICB9IGVsc2UgaWYgKHRhcmdldCAhPT0gcmF3VGFyZ2V0KSB7XG4gICAgdGFyZ2V0LmdldChrZXkpO1xuICB9XG59XG5mdW5jdGlvbiBoYXMkMShrZXksIGlzUmVhZG9ubHkgPSBmYWxzZSkge1xuICBjb25zdCB0YXJnZXQgPSB0aGlzW1xuICAgIFwiX192X3Jhd1wiXG4gICAgLyogUkFXICovXG4gIF07XG4gIGNvbnN0IHJhd1RhcmdldCA9IHRvUmF3KHRhcmdldCk7XG4gIGNvbnN0IHJhd0tleSA9IHRvUmF3KGtleSk7XG4gIGlmIChrZXkgIT09IHJhd0tleSkge1xuICAgICFpc1JlYWRvbmx5ICYmIHRyYWNrKHJhd1RhcmdldCwgXCJoYXNcIiwga2V5KTtcbiAgfVxuICAhaXNSZWFkb25seSAmJiB0cmFjayhyYXdUYXJnZXQsIFwiaGFzXCIsIHJhd0tleSk7XG4gIHJldHVybiBrZXkgPT09IHJhd0tleSA/IHRhcmdldC5oYXMoa2V5KSA6IHRhcmdldC5oYXMoa2V5KSB8fCB0YXJnZXQuaGFzKHJhd0tleSk7XG59XG5mdW5jdGlvbiBzaXplKHRhcmdldCwgaXNSZWFkb25seSA9IGZhbHNlKSB7XG4gIHRhcmdldCA9IHRhcmdldFtcbiAgICBcIl9fdl9yYXdcIlxuICAgIC8qIFJBVyAqL1xuICBdO1xuICAhaXNSZWFkb25seSAmJiB0cmFjayh0b1Jhdyh0YXJnZXQpLCBcIml0ZXJhdGVcIiwgSVRFUkFURV9LRVkpO1xuICByZXR1cm4gUmVmbGVjdC5nZXQodGFyZ2V0LCBcInNpemVcIiwgdGFyZ2V0KTtcbn1cbmZ1bmN0aW9uIGFkZCh2YWx1ZSkge1xuICB2YWx1ZSA9IHRvUmF3KHZhbHVlKTtcbiAgY29uc3QgdGFyZ2V0ID0gdG9SYXcodGhpcyk7XG4gIGNvbnN0IHByb3RvID0gZ2V0UHJvdG8odGFyZ2V0KTtcbiAgY29uc3QgaGFkS2V5ID0gcHJvdG8uaGFzLmNhbGwodGFyZ2V0LCB2YWx1ZSk7XG4gIGlmICghaGFkS2V5KSB7XG4gICAgdGFyZ2V0LmFkZCh2YWx1ZSk7XG4gICAgdHJpZ2dlcih0YXJnZXQsIFwiYWRkXCIsIHZhbHVlLCB2YWx1ZSk7XG4gIH1cbiAgcmV0dXJuIHRoaXM7XG59XG5mdW5jdGlvbiBzZXQkMShrZXksIHZhbHVlKSB7XG4gIHZhbHVlID0gdG9SYXcodmFsdWUpO1xuICBjb25zdCB0YXJnZXQgPSB0b1Jhdyh0aGlzKTtcbiAgY29uc3QgeyBoYXM6IGhhczIsIGdldDogZ2V0MyB9ID0gZ2V0UHJvdG8odGFyZ2V0KTtcbiAgbGV0IGhhZEtleSA9IGhhczIuY2FsbCh0YXJnZXQsIGtleSk7XG4gIGlmICghaGFkS2V5KSB7XG4gICAga2V5ID0gdG9SYXcoa2V5KTtcbiAgICBoYWRLZXkgPSBoYXMyLmNhbGwodGFyZ2V0LCBrZXkpO1xuICB9IGVsc2UgaWYgKHRydWUpIHtcbiAgICBjaGVja0lkZW50aXR5S2V5cyh0YXJnZXQsIGhhczIsIGtleSk7XG4gIH1cbiAgY29uc3Qgb2xkVmFsdWUgPSBnZXQzLmNhbGwodGFyZ2V0LCBrZXkpO1xuICB0YXJnZXQuc2V0KGtleSwgdmFsdWUpO1xuICBpZiAoIWhhZEtleSkge1xuICAgIHRyaWdnZXIodGFyZ2V0LCBcImFkZFwiLCBrZXksIHZhbHVlKTtcbiAgfSBlbHNlIGlmIChoYXNDaGFuZ2VkKHZhbHVlLCBvbGRWYWx1ZSkpIHtcbiAgICB0cmlnZ2VyKHRhcmdldCwgXCJzZXRcIiwga2V5LCB2YWx1ZSwgb2xkVmFsdWUpO1xuICB9XG4gIHJldHVybiB0aGlzO1xufVxuZnVuY3Rpb24gZGVsZXRlRW50cnkoa2V5KSB7XG4gIGNvbnN0IHRhcmdldCA9IHRvUmF3KHRoaXMpO1xuICBjb25zdCB7IGhhczogaGFzMiwgZ2V0OiBnZXQzIH0gPSBnZXRQcm90byh0YXJnZXQpO1xuICBsZXQgaGFkS2V5ID0gaGFzMi5jYWxsKHRhcmdldCwga2V5KTtcbiAgaWYgKCFoYWRLZXkpIHtcbiAgICBrZXkgPSB0b1JhdyhrZXkpO1xuICAgIGhhZEtleSA9IGhhczIuY2FsbCh0YXJnZXQsIGtleSk7XG4gIH0gZWxzZSBpZiAodHJ1ZSkge1xuICAgIGNoZWNrSWRlbnRpdHlLZXlzKHRhcmdldCwgaGFzMiwga2V5KTtcbiAgfVxuICBjb25zdCBvbGRWYWx1ZSA9IGdldDMgPyBnZXQzLmNhbGwodGFyZ2V0LCBrZXkpIDogdm9pZCAwO1xuICBjb25zdCByZXN1bHQgPSB0YXJnZXQuZGVsZXRlKGtleSk7XG4gIGlmIChoYWRLZXkpIHtcbiAgICB0cmlnZ2VyKHRhcmdldCwgXCJkZWxldGVcIiwga2V5LCB2b2lkIDAsIG9sZFZhbHVlKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gY2xlYXIoKSB7XG4gIGNvbnN0IHRhcmdldCA9IHRvUmF3KHRoaXMpO1xuICBjb25zdCBoYWRJdGVtcyA9IHRhcmdldC5zaXplICE9PSAwO1xuICBjb25zdCBvbGRUYXJnZXQgPSB0cnVlID8gaXNNYXAodGFyZ2V0KSA/IG5ldyBNYXAodGFyZ2V0KSA6IG5ldyBTZXQodGFyZ2V0KSA6IHZvaWQgMDtcbiAgY29uc3QgcmVzdWx0ID0gdGFyZ2V0LmNsZWFyKCk7XG4gIGlmIChoYWRJdGVtcykge1xuICAgIHRyaWdnZXIodGFyZ2V0LCBcImNsZWFyXCIsIHZvaWQgMCwgdm9pZCAwLCBvbGRUYXJnZXQpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBjcmVhdGVGb3JFYWNoKGlzUmVhZG9ubHksIGlzU2hhbGxvdykge1xuICByZXR1cm4gZnVuY3Rpb24gZm9yRWFjaChjYWxsYmFjaywgdGhpc0FyZykge1xuICAgIGNvbnN0IG9ic2VydmVkID0gdGhpcztcbiAgICBjb25zdCB0YXJnZXQgPSBvYnNlcnZlZFtcbiAgICAgIFwiX192X3Jhd1wiXG4gICAgICAvKiBSQVcgKi9cbiAgICBdO1xuICAgIGNvbnN0IHJhd1RhcmdldCA9IHRvUmF3KHRhcmdldCk7XG4gICAgY29uc3Qgd3JhcCA9IGlzU2hhbGxvdyA/IHRvU2hhbGxvdyA6IGlzUmVhZG9ubHkgPyB0b1JlYWRvbmx5IDogdG9SZWFjdGl2ZTtcbiAgICAhaXNSZWFkb25seSAmJiB0cmFjayhyYXdUYXJnZXQsIFwiaXRlcmF0ZVwiLCBJVEVSQVRFX0tFWSk7XG4gICAgcmV0dXJuIHRhcmdldC5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgICByZXR1cm4gY2FsbGJhY2suY2FsbCh0aGlzQXJnLCB3cmFwKHZhbHVlKSwgd3JhcChrZXkpLCBvYnNlcnZlZCk7XG4gICAgfSk7XG4gIH07XG59XG5mdW5jdGlvbiBjcmVhdGVJdGVyYWJsZU1ldGhvZChtZXRob2QsIGlzUmVhZG9ubHksIGlzU2hhbGxvdykge1xuICByZXR1cm4gZnVuY3Rpb24oLi4uYXJncykge1xuICAgIGNvbnN0IHRhcmdldCA9IHRoaXNbXG4gICAgICBcIl9fdl9yYXdcIlxuICAgICAgLyogUkFXICovXG4gICAgXTtcbiAgICBjb25zdCByYXdUYXJnZXQgPSB0b1Jhdyh0YXJnZXQpO1xuICAgIGNvbnN0IHRhcmdldElzTWFwID0gaXNNYXAocmF3VGFyZ2V0KTtcbiAgICBjb25zdCBpc1BhaXIgPSBtZXRob2QgPT09IFwiZW50cmllc1wiIHx8IG1ldGhvZCA9PT0gU3ltYm9sLml0ZXJhdG9yICYmIHRhcmdldElzTWFwO1xuICAgIGNvbnN0IGlzS2V5T25seSA9IG1ldGhvZCA9PT0gXCJrZXlzXCIgJiYgdGFyZ2V0SXNNYXA7XG4gICAgY29uc3QgaW5uZXJJdGVyYXRvciA9IHRhcmdldFttZXRob2RdKC4uLmFyZ3MpO1xuICAgIGNvbnN0IHdyYXAgPSBpc1NoYWxsb3cgPyB0b1NoYWxsb3cgOiBpc1JlYWRvbmx5ID8gdG9SZWFkb25seSA6IHRvUmVhY3RpdmU7XG4gICAgIWlzUmVhZG9ubHkgJiYgdHJhY2socmF3VGFyZ2V0LCBcIml0ZXJhdGVcIiwgaXNLZXlPbmx5ID8gTUFQX0tFWV9JVEVSQVRFX0tFWSA6IElURVJBVEVfS0VZKTtcbiAgICByZXR1cm4ge1xuICAgICAgLy8gaXRlcmF0b3IgcHJvdG9jb2xcbiAgICAgIG5leHQoKSB7XG4gICAgICAgIGNvbnN0IHsgdmFsdWUsIGRvbmUgfSA9IGlubmVySXRlcmF0b3IubmV4dCgpO1xuICAgICAgICByZXR1cm4gZG9uZSA/IHsgdmFsdWUsIGRvbmUgfSA6IHtcbiAgICAgICAgICB2YWx1ZTogaXNQYWlyID8gW3dyYXAodmFsdWVbMF0pLCB3cmFwKHZhbHVlWzFdKV0gOiB3cmFwKHZhbHVlKSxcbiAgICAgICAgICBkb25lXG4gICAgICAgIH07XG4gICAgICB9LFxuICAgICAgLy8gaXRlcmFibGUgcHJvdG9jb2xcbiAgICAgIFtTeW1ib2wuaXRlcmF0b3JdKCkge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cbiAgICB9O1xuICB9O1xufVxuZnVuY3Rpb24gY3JlYXRlUmVhZG9ubHlNZXRob2QodHlwZSkge1xuICByZXR1cm4gZnVuY3Rpb24oLi4uYXJncykge1xuICAgIGlmICh0cnVlKSB7XG4gICAgICBjb25zdCBrZXkgPSBhcmdzWzBdID8gYG9uIGtleSBcIiR7YXJnc1swXX1cIiBgIDogYGA7XG4gICAgICBjb25zb2xlLndhcm4oYCR7Y2FwaXRhbGl6ZSh0eXBlKX0gb3BlcmF0aW9uICR7a2V5fWZhaWxlZDogdGFyZ2V0IGlzIHJlYWRvbmx5LmAsIHRvUmF3KHRoaXMpKTtcbiAgICB9XG4gICAgcmV0dXJuIHR5cGUgPT09IFwiZGVsZXRlXCIgPyBmYWxzZSA6IHRoaXM7XG4gIH07XG59XG5mdW5jdGlvbiBjcmVhdGVJbnN0cnVtZW50YXRpb25zKCkge1xuICBjb25zdCBtdXRhYmxlSW5zdHJ1bWVudGF0aW9uczIgPSB7XG4gICAgZ2V0KGtleSkge1xuICAgICAgcmV0dXJuIGdldCQxKHRoaXMsIGtleSk7XG4gICAgfSxcbiAgICBnZXQgc2l6ZSgpIHtcbiAgICAgIHJldHVybiBzaXplKHRoaXMpO1xuICAgIH0sXG4gICAgaGFzOiBoYXMkMSxcbiAgICBhZGQsXG4gICAgc2V0OiBzZXQkMSxcbiAgICBkZWxldGU6IGRlbGV0ZUVudHJ5LFxuICAgIGNsZWFyLFxuICAgIGZvckVhY2g6IGNyZWF0ZUZvckVhY2goZmFsc2UsIGZhbHNlKVxuICB9O1xuICBjb25zdCBzaGFsbG93SW5zdHJ1bWVudGF0aW9uczIgPSB7XG4gICAgZ2V0KGtleSkge1xuICAgICAgcmV0dXJuIGdldCQxKHRoaXMsIGtleSwgZmFsc2UsIHRydWUpO1xuICAgIH0sXG4gICAgZ2V0IHNpemUoKSB7XG4gICAgICByZXR1cm4gc2l6ZSh0aGlzKTtcbiAgICB9LFxuICAgIGhhczogaGFzJDEsXG4gICAgYWRkLFxuICAgIHNldDogc2V0JDEsXG4gICAgZGVsZXRlOiBkZWxldGVFbnRyeSxcbiAgICBjbGVhcixcbiAgICBmb3JFYWNoOiBjcmVhdGVGb3JFYWNoKGZhbHNlLCB0cnVlKVxuICB9O1xuICBjb25zdCByZWFkb25seUluc3RydW1lbnRhdGlvbnMyID0ge1xuICAgIGdldChrZXkpIHtcbiAgICAgIHJldHVybiBnZXQkMSh0aGlzLCBrZXksIHRydWUpO1xuICAgIH0sXG4gICAgZ2V0IHNpemUoKSB7XG4gICAgICByZXR1cm4gc2l6ZSh0aGlzLCB0cnVlKTtcbiAgICB9LFxuICAgIGhhcyhrZXkpIHtcbiAgICAgIHJldHVybiBoYXMkMS5jYWxsKHRoaXMsIGtleSwgdHJ1ZSk7XG4gICAgfSxcbiAgICBhZGQ6IGNyZWF0ZVJlYWRvbmx5TWV0aG9kKFxuICAgICAgXCJhZGRcIlxuICAgICAgLyogQUREICovXG4gICAgKSxcbiAgICBzZXQ6IGNyZWF0ZVJlYWRvbmx5TWV0aG9kKFxuICAgICAgXCJzZXRcIlxuICAgICAgLyogU0VUICovXG4gICAgKSxcbiAgICBkZWxldGU6IGNyZWF0ZVJlYWRvbmx5TWV0aG9kKFxuICAgICAgXCJkZWxldGVcIlxuICAgICAgLyogREVMRVRFICovXG4gICAgKSxcbiAgICBjbGVhcjogY3JlYXRlUmVhZG9ubHlNZXRob2QoXG4gICAgICBcImNsZWFyXCJcbiAgICAgIC8qIENMRUFSICovXG4gICAgKSxcbiAgICBmb3JFYWNoOiBjcmVhdGVGb3JFYWNoKHRydWUsIGZhbHNlKVxuICB9O1xuICBjb25zdCBzaGFsbG93UmVhZG9ubHlJbnN0cnVtZW50YXRpb25zMiA9IHtcbiAgICBnZXQoa2V5KSB7XG4gICAgICByZXR1cm4gZ2V0JDEodGhpcywga2V5LCB0cnVlLCB0cnVlKTtcbiAgICB9LFxuICAgIGdldCBzaXplKCkge1xuICAgICAgcmV0dXJuIHNpemUodGhpcywgdHJ1ZSk7XG4gICAgfSxcbiAgICBoYXMoa2V5KSB7XG4gICAgICByZXR1cm4gaGFzJDEuY2FsbCh0aGlzLCBrZXksIHRydWUpO1xuICAgIH0sXG4gICAgYWRkOiBjcmVhdGVSZWFkb25seU1ldGhvZChcbiAgICAgIFwiYWRkXCJcbiAgICAgIC8qIEFERCAqL1xuICAgICksXG4gICAgc2V0OiBjcmVhdGVSZWFkb25seU1ldGhvZChcbiAgICAgIFwic2V0XCJcbiAgICAgIC8qIFNFVCAqL1xuICAgICksXG4gICAgZGVsZXRlOiBjcmVhdGVSZWFkb25seU1ldGhvZChcbiAgICAgIFwiZGVsZXRlXCJcbiAgICAgIC8qIERFTEVURSAqL1xuICAgICksXG4gICAgY2xlYXI6IGNyZWF0ZVJlYWRvbmx5TWV0aG9kKFxuICAgICAgXCJjbGVhclwiXG4gICAgICAvKiBDTEVBUiAqL1xuICAgICksXG4gICAgZm9yRWFjaDogY3JlYXRlRm9yRWFjaCh0cnVlLCB0cnVlKVxuICB9O1xuICBjb25zdCBpdGVyYXRvck1ldGhvZHMgPSBbXCJrZXlzXCIsIFwidmFsdWVzXCIsIFwiZW50cmllc1wiLCBTeW1ib2wuaXRlcmF0b3JdO1xuICBpdGVyYXRvck1ldGhvZHMuZm9yRWFjaCgobWV0aG9kKSA9PiB7XG4gICAgbXV0YWJsZUluc3RydW1lbnRhdGlvbnMyW21ldGhvZF0gPSBjcmVhdGVJdGVyYWJsZU1ldGhvZChtZXRob2QsIGZhbHNlLCBmYWxzZSk7XG4gICAgcmVhZG9ubHlJbnN0cnVtZW50YXRpb25zMlttZXRob2RdID0gY3JlYXRlSXRlcmFibGVNZXRob2QobWV0aG9kLCB0cnVlLCBmYWxzZSk7XG4gICAgc2hhbGxvd0luc3RydW1lbnRhdGlvbnMyW21ldGhvZF0gPSBjcmVhdGVJdGVyYWJsZU1ldGhvZChtZXRob2QsIGZhbHNlLCB0cnVlKTtcbiAgICBzaGFsbG93UmVhZG9ubHlJbnN0cnVtZW50YXRpb25zMlttZXRob2RdID0gY3JlYXRlSXRlcmFibGVNZXRob2QobWV0aG9kLCB0cnVlLCB0cnVlKTtcbiAgfSk7XG4gIHJldHVybiBbXG4gICAgbXV0YWJsZUluc3RydW1lbnRhdGlvbnMyLFxuICAgIHJlYWRvbmx5SW5zdHJ1bWVudGF0aW9uczIsXG4gICAgc2hhbGxvd0luc3RydW1lbnRhdGlvbnMyLFxuICAgIHNoYWxsb3dSZWFkb25seUluc3RydW1lbnRhdGlvbnMyXG4gIF07XG59XG52YXIgW211dGFibGVJbnN0cnVtZW50YXRpb25zLCByZWFkb25seUluc3RydW1lbnRhdGlvbnMsIHNoYWxsb3dJbnN0cnVtZW50YXRpb25zLCBzaGFsbG93UmVhZG9ubHlJbnN0cnVtZW50YXRpb25zXSA9IC8qIEBfX1BVUkVfXyAqLyBjcmVhdGVJbnN0cnVtZW50YXRpb25zKCk7XG5mdW5jdGlvbiBjcmVhdGVJbnN0cnVtZW50YXRpb25HZXR0ZXIoaXNSZWFkb25seSwgc2hhbGxvdykge1xuICBjb25zdCBpbnN0cnVtZW50YXRpb25zID0gc2hhbGxvdyA/IGlzUmVhZG9ubHkgPyBzaGFsbG93UmVhZG9ubHlJbnN0cnVtZW50YXRpb25zIDogc2hhbGxvd0luc3RydW1lbnRhdGlvbnMgOiBpc1JlYWRvbmx5ID8gcmVhZG9ubHlJbnN0cnVtZW50YXRpb25zIDogbXV0YWJsZUluc3RydW1lbnRhdGlvbnM7XG4gIHJldHVybiAodGFyZ2V0LCBrZXksIHJlY2VpdmVyKSA9PiB7XG4gICAgaWYgKGtleSA9PT0gXCJfX3ZfaXNSZWFjdGl2ZVwiKSB7XG4gICAgICByZXR1cm4gIWlzUmVhZG9ubHk7XG4gICAgfSBlbHNlIGlmIChrZXkgPT09IFwiX192X2lzUmVhZG9ubHlcIikge1xuICAgICAgcmV0dXJuIGlzUmVhZG9ubHk7XG4gICAgfSBlbHNlIGlmIChrZXkgPT09IFwiX192X3Jhd1wiKSB7XG4gICAgICByZXR1cm4gdGFyZ2V0O1xuICAgIH1cbiAgICByZXR1cm4gUmVmbGVjdC5nZXQoaGFzT3duKGluc3RydW1lbnRhdGlvbnMsIGtleSkgJiYga2V5IGluIHRhcmdldCA/IGluc3RydW1lbnRhdGlvbnMgOiB0YXJnZXQsIGtleSwgcmVjZWl2ZXIpO1xuICB9O1xufVxudmFyIG11dGFibGVDb2xsZWN0aW9uSGFuZGxlcnMgPSB7XG4gIGdldDogLyogQF9fUFVSRV9fICovIGNyZWF0ZUluc3RydW1lbnRhdGlvbkdldHRlcihmYWxzZSwgZmFsc2UpXG59O1xudmFyIHJlYWRvbmx5Q29sbGVjdGlvbkhhbmRsZXJzID0ge1xuICBnZXQ6IC8qIEBfX1BVUkVfXyAqLyBjcmVhdGVJbnN0cnVtZW50YXRpb25HZXR0ZXIodHJ1ZSwgZmFsc2UpXG59O1xuZnVuY3Rpb24gY2hlY2tJZGVudGl0eUtleXModGFyZ2V0LCBoYXMyLCBrZXkpIHtcbiAgY29uc3QgcmF3S2V5ID0gdG9SYXcoa2V5KTtcbiAgaWYgKHJhd0tleSAhPT0ga2V5ICYmIGhhczIuY2FsbCh0YXJnZXQsIHJhd0tleSkpIHtcbiAgICBjb25zdCB0eXBlID0gdG9SYXdUeXBlKHRhcmdldCk7XG4gICAgY29uc29sZS53YXJuKGBSZWFjdGl2ZSAke3R5cGV9IGNvbnRhaW5zIGJvdGggdGhlIHJhdyBhbmQgcmVhY3RpdmUgdmVyc2lvbnMgb2YgdGhlIHNhbWUgb2JqZWN0JHt0eXBlID09PSBgTWFwYCA/IGAgYXMga2V5c2AgOiBgYH0sIHdoaWNoIGNhbiBsZWFkIHRvIGluY29uc2lzdGVuY2llcy4gQXZvaWQgZGlmZmVyZW50aWF0aW5nIGJldHdlZW4gdGhlIHJhdyBhbmQgcmVhY3RpdmUgdmVyc2lvbnMgb2YgYW4gb2JqZWN0IGFuZCBvbmx5IHVzZSB0aGUgcmVhY3RpdmUgdmVyc2lvbiBpZiBwb3NzaWJsZS5gKTtcbiAgfVxufVxudmFyIHJlYWN0aXZlTWFwID0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7XG52YXIgc2hhbGxvd1JlYWN0aXZlTWFwID0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7XG52YXIgcmVhZG9ubHlNYXAgPSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcbnZhciBzaGFsbG93UmVhZG9ubHlNYXAgPSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcbmZ1bmN0aW9uIHRhcmdldFR5cGVNYXAocmF3VHlwZSkge1xuICBzd2l0Y2ggKHJhd1R5cGUpIHtcbiAgICBjYXNlIFwiT2JqZWN0XCI6XG4gICAgY2FzZSBcIkFycmF5XCI6XG4gICAgICByZXR1cm4gMTtcbiAgICBjYXNlIFwiTWFwXCI6XG4gICAgY2FzZSBcIlNldFwiOlxuICAgIGNhc2UgXCJXZWFrTWFwXCI6XG4gICAgY2FzZSBcIldlYWtTZXRcIjpcbiAgICAgIHJldHVybiAyO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gMDtcbiAgfVxufVxuZnVuY3Rpb24gZ2V0VGFyZ2V0VHlwZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWVbXG4gICAgXCJfX3Zfc2tpcFwiXG4gICAgLyogU0tJUCAqL1xuICBdIHx8ICFPYmplY3QuaXNFeHRlbnNpYmxlKHZhbHVlKSA/IDAgOiB0YXJnZXRUeXBlTWFwKHRvUmF3VHlwZSh2YWx1ZSkpO1xufVxuZnVuY3Rpb24gcmVhY3RpdmUyKHRhcmdldCkge1xuICBpZiAodGFyZ2V0ICYmIHRhcmdldFtcbiAgICBcIl9fdl9pc1JlYWRvbmx5XCJcbiAgICAvKiBJU19SRUFET05MWSAqL1xuICBdKSB7XG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfVxuICByZXR1cm4gY3JlYXRlUmVhY3RpdmVPYmplY3QodGFyZ2V0LCBmYWxzZSwgbXV0YWJsZUhhbmRsZXJzLCBtdXRhYmxlQ29sbGVjdGlvbkhhbmRsZXJzLCByZWFjdGl2ZU1hcCk7XG59XG5mdW5jdGlvbiByZWFkb25seSh0YXJnZXQpIHtcbiAgcmV0dXJuIGNyZWF0ZVJlYWN0aXZlT2JqZWN0KHRhcmdldCwgdHJ1ZSwgcmVhZG9ubHlIYW5kbGVycywgcmVhZG9ubHlDb2xsZWN0aW9uSGFuZGxlcnMsIHJlYWRvbmx5TWFwKTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZVJlYWN0aXZlT2JqZWN0KHRhcmdldCwgaXNSZWFkb25seSwgYmFzZUhhbmRsZXJzLCBjb2xsZWN0aW9uSGFuZGxlcnMsIHByb3h5TWFwKSB7XG4gIGlmICghaXNPYmplY3QodGFyZ2V0KSkge1xuICAgIGlmICh0cnVlKSB7XG4gICAgICBjb25zb2xlLndhcm4oYHZhbHVlIGNhbm5vdCBiZSBtYWRlIHJlYWN0aXZlOiAke1N0cmluZyh0YXJnZXQpfWApO1xuICAgIH1cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9XG4gIGlmICh0YXJnZXRbXG4gICAgXCJfX3ZfcmF3XCJcbiAgICAvKiBSQVcgKi9cbiAgXSAmJiAhKGlzUmVhZG9ubHkgJiYgdGFyZ2V0W1xuICAgIFwiX192X2lzUmVhY3RpdmVcIlxuICAgIC8qIElTX1JFQUNUSVZFICovXG4gIF0pKSB7XG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfVxuICBjb25zdCBleGlzdGluZ1Byb3h5ID0gcHJveHlNYXAuZ2V0KHRhcmdldCk7XG4gIGlmIChleGlzdGluZ1Byb3h5KSB7XG4gICAgcmV0dXJuIGV4aXN0aW5nUHJveHk7XG4gIH1cbiAgY29uc3QgdGFyZ2V0VHlwZSA9IGdldFRhcmdldFR5cGUodGFyZ2V0KTtcbiAgaWYgKHRhcmdldFR5cGUgPT09IDApIHtcbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9XG4gIGNvbnN0IHByb3h5ID0gbmV3IFByb3h5KHRhcmdldCwgdGFyZ2V0VHlwZSA9PT0gMiA/IGNvbGxlY3Rpb25IYW5kbGVycyA6IGJhc2VIYW5kbGVycyk7XG4gIHByb3h5TWFwLnNldCh0YXJnZXQsIHByb3h5KTtcbiAgcmV0dXJuIHByb3h5O1xufVxuZnVuY3Rpb24gdG9SYXcob2JzZXJ2ZWQpIHtcbiAgcmV0dXJuIG9ic2VydmVkICYmIHRvUmF3KG9ic2VydmVkW1xuICAgIFwiX192X3Jhd1wiXG4gICAgLyogUkFXICovXG4gIF0pIHx8IG9ic2VydmVkO1xufVxuZnVuY3Rpb24gaXNSZWYocikge1xuICByZXR1cm4gQm9vbGVhbihyICYmIHIuX192X2lzUmVmID09PSB0cnVlKTtcbn1cblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL21hZ2ljcy8kbmV4dFRpY2suanNcbm1hZ2ljKFwibmV4dFRpY2tcIiwgKCkgPT4gbmV4dFRpY2spO1xuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvbWFnaWNzLyRkaXNwYXRjaC5qc1xubWFnaWMoXCJkaXNwYXRjaFwiLCAoZWwpID0+IGRpc3BhdGNoLmJpbmQoZGlzcGF0Y2gsIGVsKSk7XG5cbi8vIHBhY2thZ2VzL2FscGluZWpzL3NyYy9tYWdpY3MvJHdhdGNoLmpzXG5tYWdpYyhcIndhdGNoXCIsIChlbCwgeyBldmFsdWF0ZUxhdGVyOiBldmFsdWF0ZUxhdGVyMiwgZWZmZWN0OiBlZmZlY3QzIH0pID0+IChrZXksIGNhbGxiYWNrKSA9PiB7XG4gIGxldCBldmFsdWF0ZTIgPSBldmFsdWF0ZUxhdGVyMihrZXkpO1xuICBsZXQgZmlyc3RUaW1lID0gdHJ1ZTtcbiAgbGV0IG9sZFZhbHVlO1xuICBsZXQgZWZmZWN0UmVmZXJlbmNlID0gZWZmZWN0MygoKSA9PiBldmFsdWF0ZTIoKHZhbHVlKSA9PiB7XG4gICAgSlNPTi5zdHJpbmdpZnkodmFsdWUpO1xuICAgIGlmICghZmlyc3RUaW1lKSB7XG4gICAgICBxdWV1ZU1pY3JvdGFzaygoKSA9PiB7XG4gICAgICAgIGNhbGxiYWNrKHZhbHVlLCBvbGRWYWx1ZSk7XG4gICAgICAgIG9sZFZhbHVlID0gdmFsdWU7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgb2xkVmFsdWUgPSB2YWx1ZTtcbiAgICB9XG4gICAgZmlyc3RUaW1lID0gZmFsc2U7XG4gIH0pKTtcbiAgZWwuX3hfZWZmZWN0cy5kZWxldGUoZWZmZWN0UmVmZXJlbmNlKTtcbn0pO1xuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvbWFnaWNzLyRzdG9yZS5qc1xubWFnaWMoXCJzdG9yZVwiLCBnZXRTdG9yZXMpO1xuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvbWFnaWNzLyRkYXRhLmpzXG5tYWdpYyhcImRhdGFcIiwgKGVsKSA9PiBzY29wZShlbCkpO1xuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvbWFnaWNzLyRyb290LmpzXG5tYWdpYyhcInJvb3RcIiwgKGVsKSA9PiBjbG9zZXN0Um9vdChlbCkpO1xuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvbWFnaWNzLyRyZWZzLmpzXG5tYWdpYyhcInJlZnNcIiwgKGVsKSA9PiB7XG4gIGlmIChlbC5feF9yZWZzX3Byb3h5KVxuICAgIHJldHVybiBlbC5feF9yZWZzX3Byb3h5O1xuICBlbC5feF9yZWZzX3Byb3h5ID0gbWVyZ2VQcm94aWVzKGdldEFycmF5T2ZSZWZPYmplY3QoZWwpKTtcbiAgcmV0dXJuIGVsLl94X3JlZnNfcHJveHk7XG59KTtcbmZ1bmN0aW9uIGdldEFycmF5T2ZSZWZPYmplY3QoZWwpIHtcbiAgbGV0IHJlZk9iamVjdHMgPSBbXTtcbiAgbGV0IGN1cnJlbnRFbCA9IGVsO1xuICB3aGlsZSAoY3VycmVudEVsKSB7XG4gICAgaWYgKGN1cnJlbnRFbC5feF9yZWZzKVxuICAgICAgcmVmT2JqZWN0cy5wdXNoKGN1cnJlbnRFbC5feF9yZWZzKTtcbiAgICBjdXJyZW50RWwgPSBjdXJyZW50RWwucGFyZW50Tm9kZTtcbiAgfVxuICByZXR1cm4gcmVmT2JqZWN0cztcbn1cblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL2lkcy5qc1xudmFyIGdsb2JhbElkTWVtbyA9IHt9O1xuZnVuY3Rpb24gZmluZEFuZEluY3JlbWVudElkKG5hbWUpIHtcbiAgaWYgKCFnbG9iYWxJZE1lbW9bbmFtZV0pXG4gICAgZ2xvYmFsSWRNZW1vW25hbWVdID0gMDtcbiAgcmV0dXJuICsrZ2xvYmFsSWRNZW1vW25hbWVdO1xufVxuZnVuY3Rpb24gY2xvc2VzdElkUm9vdChlbCwgbmFtZSkge1xuICByZXR1cm4gZmluZENsb3Nlc3QoZWwsIChlbGVtZW50KSA9PiB7XG4gICAgaWYgKGVsZW1lbnQuX3hfaWRzICYmIGVsZW1lbnQuX3hfaWRzW25hbWVdKVxuICAgICAgcmV0dXJuIHRydWU7XG4gIH0pO1xufVxuZnVuY3Rpb24gc2V0SWRSb290KGVsLCBuYW1lKSB7XG4gIGlmICghZWwuX3hfaWRzKVxuICAgIGVsLl94X2lkcyA9IHt9O1xuICBpZiAoIWVsLl94X2lkc1tuYW1lXSlcbiAgICBlbC5feF9pZHNbbmFtZV0gPSBmaW5kQW5kSW5jcmVtZW50SWQobmFtZSk7XG59XG5cbi8vIHBhY2thZ2VzL2FscGluZWpzL3NyYy9tYWdpY3MvJGlkLmpzXG5tYWdpYyhcImlkXCIsIChlbCkgPT4gKG5hbWUsIGtleSA9IG51bGwpID0+IHtcbiAgbGV0IHJvb3QgPSBjbG9zZXN0SWRSb290KGVsLCBuYW1lKTtcbiAgbGV0IGlkID0gcm9vdCA/IHJvb3QuX3hfaWRzW25hbWVdIDogZmluZEFuZEluY3JlbWVudElkKG5hbWUpO1xuICByZXR1cm4ga2V5ID8gYCR7bmFtZX0tJHtpZH0tJHtrZXl9YCA6IGAke25hbWV9LSR7aWR9YDtcbn0pO1xuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvbWFnaWNzLyRlbC5qc1xubWFnaWMoXCJlbFwiLCAoZWwpID0+IGVsKTtcblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL21hZ2ljcy9pbmRleC5qc1xud2Fybk1pc3NpbmdQbHVnaW5NYWdpYyhcIkZvY3VzXCIsIFwiZm9jdXNcIiwgXCJmb2N1c1wiKTtcbndhcm5NaXNzaW5nUGx1Z2luTWFnaWMoXCJQZXJzaXN0XCIsIFwicGVyc2lzdFwiLCBcInBlcnNpc3RcIik7XG5mdW5jdGlvbiB3YXJuTWlzc2luZ1BsdWdpbk1hZ2ljKG5hbWUsIG1hZ2ljTmFtZSwgc2x1Zykge1xuICBtYWdpYyhtYWdpY05hbWUsIChlbCkgPT4gd2FybihgWW91IGNhbid0IHVzZSBbJCR7bWFnaWNOYW1lfV0gd2l0aG91dCBmaXJzdCBpbnN0YWxsaW5nIHRoZSBcIiR7bmFtZX1cIiBwbHVnaW4gaGVyZTogaHR0cHM6Ly9hbHBpbmVqcy5kZXYvcGx1Z2lucy8ke3NsdWd9YCwgZWwpKTtcbn1cblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL2RpcmVjdGl2ZXMveC1tb2RlbGFibGUuanNcbmRpcmVjdGl2ZShcIm1vZGVsYWJsZVwiLCAoZWwsIHsgZXhwcmVzc2lvbiB9LCB7IGVmZmVjdDogZWZmZWN0MywgZXZhbHVhdGVMYXRlcjogZXZhbHVhdGVMYXRlcjIsIGNsZWFudXA6IGNsZWFudXAyIH0pID0+IHtcbiAgbGV0IGZ1bmMgPSBldmFsdWF0ZUxhdGVyMihleHByZXNzaW9uKTtcbiAgbGV0IGlubmVyR2V0ID0gKCkgPT4ge1xuICAgIGxldCByZXN1bHQ7XG4gICAgZnVuYygoaSkgPT4gcmVzdWx0ID0gaSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbiAgbGV0IGV2YWx1YXRlSW5uZXJTZXQgPSBldmFsdWF0ZUxhdGVyMihgJHtleHByZXNzaW9ufSA9IF9fcGxhY2Vob2xkZXJgKTtcbiAgbGV0IGlubmVyU2V0ID0gKHZhbCkgPT4gZXZhbHVhdGVJbm5lclNldCgoKSA9PiB7XG4gIH0sIHsgc2NvcGU6IHsgXCJfX3BsYWNlaG9sZGVyXCI6IHZhbCB9IH0pO1xuICBsZXQgaW5pdGlhbFZhbHVlID0gaW5uZXJHZXQoKTtcbiAgaW5uZXJTZXQoaW5pdGlhbFZhbHVlKTtcbiAgcXVldWVNaWNyb3Rhc2soKCkgPT4ge1xuICAgIGlmICghZWwuX3hfbW9kZWwpXG4gICAgICByZXR1cm47XG4gICAgZWwuX3hfcmVtb3ZlTW9kZWxMaXN0ZW5lcnNbXCJkZWZhdWx0XCJdKCk7XG4gICAgbGV0IG91dGVyR2V0ID0gZWwuX3hfbW9kZWwuZ2V0O1xuICAgIGxldCBvdXRlclNldCA9IGVsLl94X21vZGVsLnNldDtcbiAgICBsZXQgcmVsZWFzZUVudGFuZ2xlbWVudCA9IGVudGFuZ2xlKFxuICAgICAge1xuICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgcmV0dXJuIG91dGVyR2V0KCk7XG4gICAgICAgIH0sXG4gICAgICAgIHNldCh2YWx1ZSkge1xuICAgICAgICAgIG91dGVyU2V0KHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgZ2V0KCkge1xuICAgICAgICAgIHJldHVybiBpbm5lckdldCgpO1xuICAgICAgICB9LFxuICAgICAgICBzZXQodmFsdWUpIHtcbiAgICAgICAgICBpbm5lclNldCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICApO1xuICAgIGNsZWFudXAyKHJlbGVhc2VFbnRhbmdsZW1lbnQpO1xuICB9KTtcbn0pO1xuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvZGlyZWN0aXZlcy94LXRlbGVwb3J0LmpzXG5kaXJlY3RpdmUoXCJ0ZWxlcG9ydFwiLCAoZWwsIHsgbW9kaWZpZXJzLCBleHByZXNzaW9uIH0sIHsgY2xlYW51cDogY2xlYW51cDIgfSkgPT4ge1xuICBpZiAoZWwudGFnTmFtZS50b0xvd2VyQ2FzZSgpICE9PSBcInRlbXBsYXRlXCIpXG4gICAgd2FybihcIngtdGVsZXBvcnQgY2FuIG9ubHkgYmUgdXNlZCBvbiBhIDx0ZW1wbGF0ZT4gdGFnXCIsIGVsKTtcbiAgbGV0IHRhcmdldCA9IGdldFRhcmdldChleHByZXNzaW9uKTtcbiAgbGV0IGNsb25lMiA9IGVsLmNvbnRlbnQuY2xvbmVOb2RlKHRydWUpLmZpcnN0RWxlbWVudENoaWxkO1xuICBlbC5feF90ZWxlcG9ydCA9IGNsb25lMjtcbiAgY2xvbmUyLl94X3RlbGVwb3J0QmFjayA9IGVsO1xuICBlbC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXRlbGVwb3J0LXRlbXBsYXRlXCIsIHRydWUpO1xuICBjbG9uZTIuc2V0QXR0cmlidXRlKFwiZGF0YS10ZWxlcG9ydC10YXJnZXRcIiwgdHJ1ZSk7XG4gIGlmIChlbC5feF9mb3J3YXJkRXZlbnRzKSB7XG4gICAgZWwuX3hfZm9yd2FyZEV2ZW50cy5mb3JFYWNoKChldmVudE5hbWUpID0+IHtcbiAgICAgIGNsb25lMi5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgKGUpID0+IHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgZWwuZGlzcGF0Y2hFdmVudChuZXcgZS5jb25zdHJ1Y3RvcihlLnR5cGUsIGUpKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG4gIGFkZFNjb3BlVG9Ob2RlKGNsb25lMiwge30sIGVsKTtcbiAgbGV0IHBsYWNlSW5Eb20gPSAoY2xvbmUzLCB0YXJnZXQyLCBtb2RpZmllcnMyKSA9PiB7XG4gICAgaWYgKG1vZGlmaWVyczIuaW5jbHVkZXMoXCJwcmVwZW5kXCIpKSB7XG4gICAgICB0YXJnZXQyLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGNsb25lMywgdGFyZ2V0Mik7XG4gICAgfSBlbHNlIGlmIChtb2RpZmllcnMyLmluY2x1ZGVzKFwiYXBwZW5kXCIpKSB7XG4gICAgICB0YXJnZXQyLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGNsb25lMywgdGFyZ2V0Mi5uZXh0U2libGluZyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRhcmdldDIuYXBwZW5kQ2hpbGQoY2xvbmUzKTtcbiAgICB9XG4gIH07XG4gIG11dGF0ZURvbSgoKSA9PiB7XG4gICAgcGxhY2VJbkRvbShjbG9uZTIsIHRhcmdldCwgbW9kaWZpZXJzKTtcbiAgICBpbml0VHJlZShjbG9uZTIpO1xuICAgIGNsb25lMi5feF9pZ25vcmUgPSB0cnVlO1xuICB9KTtcbiAgZWwuX3hfdGVsZXBvcnRQdXRCYWNrID0gKCkgPT4ge1xuICAgIGxldCB0YXJnZXQyID0gZ2V0VGFyZ2V0KGV4cHJlc3Npb24pO1xuICAgIG11dGF0ZURvbSgoKSA9PiB7XG4gICAgICBwbGFjZUluRG9tKGVsLl94X3RlbGVwb3J0LCB0YXJnZXQyLCBtb2RpZmllcnMpO1xuICAgIH0pO1xuICB9O1xuICBjbGVhbnVwMigoKSA9PiBjbG9uZTIucmVtb3ZlKCkpO1xufSk7XG52YXIgdGVsZXBvcnRDb250YWluZXJEdXJpbmdDbG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5mdW5jdGlvbiBnZXRUYXJnZXQoZXhwcmVzc2lvbikge1xuICBsZXQgdGFyZ2V0ID0gc2tpcER1cmluZ0Nsb25lKCgpID0+IHtcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihleHByZXNzaW9uKTtcbiAgfSwgKCkgPT4ge1xuICAgIHJldHVybiB0ZWxlcG9ydENvbnRhaW5lckR1cmluZ0Nsb25lO1xuICB9KSgpO1xuICBpZiAoIXRhcmdldClcbiAgICB3YXJuKGBDYW5ub3QgZmluZCB4LXRlbGVwb3J0IGVsZW1lbnQgZm9yIHNlbGVjdG9yOiBcIiR7ZXhwcmVzc2lvbn1cImApO1xuICByZXR1cm4gdGFyZ2V0O1xufVxuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvZGlyZWN0aXZlcy94LWlnbm9yZS5qc1xudmFyIGhhbmRsZXIgPSAoKSA9PiB7XG59O1xuaGFuZGxlci5pbmxpbmUgPSAoZWwsIHsgbW9kaWZpZXJzIH0sIHsgY2xlYW51cDogY2xlYW51cDIgfSkgPT4ge1xuICBtb2RpZmllcnMuaW5jbHVkZXMoXCJzZWxmXCIpID8gZWwuX3hfaWdub3JlU2VsZiA9IHRydWUgOiBlbC5feF9pZ25vcmUgPSB0cnVlO1xuICBjbGVhbnVwMigoKSA9PiB7XG4gICAgbW9kaWZpZXJzLmluY2x1ZGVzKFwic2VsZlwiKSA/IGRlbGV0ZSBlbC5feF9pZ25vcmVTZWxmIDogZGVsZXRlIGVsLl94X2lnbm9yZTtcbiAgfSk7XG59O1xuZGlyZWN0aXZlKFwiaWdub3JlXCIsIGhhbmRsZXIpO1xuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvZGlyZWN0aXZlcy94LWVmZmVjdC5qc1xuZGlyZWN0aXZlKFwiZWZmZWN0XCIsIHNraXBEdXJpbmdDbG9uZSgoZWwsIHsgZXhwcmVzc2lvbiB9LCB7IGVmZmVjdDogZWZmZWN0MyB9KSA9PiB7XG4gIGVmZmVjdDMoZXZhbHVhdGVMYXRlcihlbCwgZXhwcmVzc2lvbikpO1xufSkpO1xuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvdXRpbHMvb24uanNcbmZ1bmN0aW9uIG9uKGVsLCBldmVudCwgbW9kaWZpZXJzLCBjYWxsYmFjaykge1xuICBsZXQgbGlzdGVuZXJUYXJnZXQgPSBlbDtcbiAgbGV0IGhhbmRsZXI0ID0gKGUpID0+IGNhbGxiYWNrKGUpO1xuICBsZXQgb3B0aW9ucyA9IHt9O1xuICBsZXQgd3JhcEhhbmRsZXIgPSAoY2FsbGJhY2syLCB3cmFwcGVyKSA9PiAoZSkgPT4gd3JhcHBlcihjYWxsYmFjazIsIGUpO1xuICBpZiAobW9kaWZpZXJzLmluY2x1ZGVzKFwiZG90XCIpKVxuICAgIGV2ZW50ID0gZG90U3ludGF4KGV2ZW50KTtcbiAgaWYgKG1vZGlmaWVycy5pbmNsdWRlcyhcImNhbWVsXCIpKVxuICAgIGV2ZW50ID0gY2FtZWxDYXNlMihldmVudCk7XG4gIGlmIChtb2RpZmllcnMuaW5jbHVkZXMoXCJwYXNzaXZlXCIpKVxuICAgIG9wdGlvbnMucGFzc2l2ZSA9IHRydWU7XG4gIGlmIChtb2RpZmllcnMuaW5jbHVkZXMoXCJjYXB0dXJlXCIpKVxuICAgIG9wdGlvbnMuY2FwdHVyZSA9IHRydWU7XG4gIGlmIChtb2RpZmllcnMuaW5jbHVkZXMoXCJ3aW5kb3dcIikpXG4gICAgbGlzdGVuZXJUYXJnZXQgPSB3aW5kb3c7XG4gIGlmIChtb2RpZmllcnMuaW5jbHVkZXMoXCJkb2N1bWVudFwiKSlcbiAgICBsaXN0ZW5lclRhcmdldCA9IGRvY3VtZW50O1xuICBpZiAobW9kaWZpZXJzLmluY2x1ZGVzKFwiZGVib3VuY2VcIikpIHtcbiAgICBsZXQgbmV4dE1vZGlmaWVyID0gbW9kaWZpZXJzW21vZGlmaWVycy5pbmRleE9mKFwiZGVib3VuY2VcIikgKyAxXSB8fCBcImludmFsaWQtd2FpdFwiO1xuICAgIGxldCB3YWl0ID0gaXNOdW1lcmljKG5leHRNb2RpZmllci5zcGxpdChcIm1zXCIpWzBdKSA/IE51bWJlcihuZXh0TW9kaWZpZXIuc3BsaXQoXCJtc1wiKVswXSkgOiAyNTA7XG4gICAgaGFuZGxlcjQgPSBkZWJvdW5jZShoYW5kbGVyNCwgd2FpdCk7XG4gIH1cbiAgaWYgKG1vZGlmaWVycy5pbmNsdWRlcyhcInRocm90dGxlXCIpKSB7XG4gICAgbGV0IG5leHRNb2RpZmllciA9IG1vZGlmaWVyc1ttb2RpZmllcnMuaW5kZXhPZihcInRocm90dGxlXCIpICsgMV0gfHwgXCJpbnZhbGlkLXdhaXRcIjtcbiAgICBsZXQgd2FpdCA9IGlzTnVtZXJpYyhuZXh0TW9kaWZpZXIuc3BsaXQoXCJtc1wiKVswXSkgPyBOdW1iZXIobmV4dE1vZGlmaWVyLnNwbGl0KFwibXNcIilbMF0pIDogMjUwO1xuICAgIGhhbmRsZXI0ID0gdGhyb3R0bGUoaGFuZGxlcjQsIHdhaXQpO1xuICB9XG4gIGlmIChtb2RpZmllcnMuaW5jbHVkZXMoXCJwcmV2ZW50XCIpKVxuICAgIGhhbmRsZXI0ID0gd3JhcEhhbmRsZXIoaGFuZGxlcjQsIChuZXh0LCBlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBuZXh0KGUpO1xuICAgIH0pO1xuICBpZiAobW9kaWZpZXJzLmluY2x1ZGVzKFwic3RvcFwiKSlcbiAgICBoYW5kbGVyNCA9IHdyYXBIYW5kbGVyKGhhbmRsZXI0LCAobmV4dCwgZSkgPT4ge1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIG5leHQoZSk7XG4gICAgfSk7XG4gIGlmIChtb2RpZmllcnMuaW5jbHVkZXMoXCJzZWxmXCIpKVxuICAgIGhhbmRsZXI0ID0gd3JhcEhhbmRsZXIoaGFuZGxlcjQsIChuZXh0LCBlKSA9PiB7XG4gICAgICBlLnRhcmdldCA9PT0gZWwgJiYgbmV4dChlKTtcbiAgICB9KTtcbiAgaWYgKG1vZGlmaWVycy5pbmNsdWRlcyhcImF3YXlcIikgfHwgbW9kaWZpZXJzLmluY2x1ZGVzKFwib3V0c2lkZVwiKSkge1xuICAgIGxpc3RlbmVyVGFyZ2V0ID0gZG9jdW1lbnQ7XG4gICAgaGFuZGxlcjQgPSB3cmFwSGFuZGxlcihoYW5kbGVyNCwgKG5leHQsIGUpID0+IHtcbiAgICAgIGlmIChlbC5jb250YWlucyhlLnRhcmdldCkpXG4gICAgICAgIHJldHVybjtcbiAgICAgIGlmIChlLnRhcmdldC5pc0Nvbm5lY3RlZCA9PT0gZmFsc2UpXG4gICAgICAgIHJldHVybjtcbiAgICAgIGlmIChlbC5vZmZzZXRXaWR0aCA8IDEgJiYgZWwub2Zmc2V0SGVpZ2h0IDwgMSlcbiAgICAgICAgcmV0dXJuO1xuICAgICAgaWYgKGVsLl94X2lzU2hvd24gPT09IGZhbHNlKVxuICAgICAgICByZXR1cm47XG4gICAgICBuZXh0KGUpO1xuICAgIH0pO1xuICB9XG4gIGlmIChtb2RpZmllcnMuaW5jbHVkZXMoXCJvbmNlXCIpKSB7XG4gICAgaGFuZGxlcjQgPSB3cmFwSGFuZGxlcihoYW5kbGVyNCwgKG5leHQsIGUpID0+IHtcbiAgICAgIG5leHQoZSk7XG4gICAgICBsaXN0ZW5lclRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVyNCwgb3B0aW9ucyk7XG4gICAgfSk7XG4gIH1cbiAgaGFuZGxlcjQgPSB3cmFwSGFuZGxlcihoYW5kbGVyNCwgKG5leHQsIGUpID0+IHtcbiAgICBpZiAoaXNLZXlFdmVudChldmVudCkpIHtcbiAgICAgIGlmIChpc0xpc3RlbmluZ0ZvckFTcGVjaWZpY0tleVRoYXRIYXNudEJlZW5QcmVzc2VkKGUsIG1vZGlmaWVycykpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgICBuZXh0KGUpO1xuICB9KTtcbiAgbGlzdGVuZXJUYXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgaGFuZGxlcjQsIG9wdGlvbnMpO1xuICByZXR1cm4gKCkgPT4ge1xuICAgIGxpc3RlbmVyVGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGhhbmRsZXI0LCBvcHRpb25zKTtcbiAgfTtcbn1cbmZ1bmN0aW9uIGRvdFN5bnRheChzdWJqZWN0KSB7XG4gIHJldHVybiBzdWJqZWN0LnJlcGxhY2UoLy0vZywgXCIuXCIpO1xufVxuZnVuY3Rpb24gY2FtZWxDYXNlMihzdWJqZWN0KSB7XG4gIHJldHVybiBzdWJqZWN0LnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvLShcXHcpL2csIChtYXRjaCwgY2hhcikgPT4gY2hhci50b1VwcGVyQ2FzZSgpKTtcbn1cbmZ1bmN0aW9uIGlzTnVtZXJpYyhzdWJqZWN0KSB7XG4gIHJldHVybiAhQXJyYXkuaXNBcnJheShzdWJqZWN0KSAmJiAhaXNOYU4oc3ViamVjdCk7XG59XG5mdW5jdGlvbiBrZWJhYkNhc2UyKHN1YmplY3QpIHtcbiAgaWYgKFtcIiBcIiwgXCJfXCJdLmluY2x1ZGVzKFxuICAgIHN1YmplY3RcbiAgKSlcbiAgICByZXR1cm4gc3ViamVjdDtcbiAgcmV0dXJuIHN1YmplY3QucmVwbGFjZSgvKFthLXpdKShbQS1aXSkvZywgXCIkMS0kMlwiKS5yZXBsYWNlKC9bX1xcc10vLCBcIi1cIikudG9Mb3dlckNhc2UoKTtcbn1cbmZ1bmN0aW9uIGlzS2V5RXZlbnQoZXZlbnQpIHtcbiAgcmV0dXJuIFtcImtleWRvd25cIiwgXCJrZXl1cFwiXS5pbmNsdWRlcyhldmVudCk7XG59XG5mdW5jdGlvbiBpc0xpc3RlbmluZ0ZvckFTcGVjaWZpY0tleVRoYXRIYXNudEJlZW5QcmVzc2VkKGUsIG1vZGlmaWVycykge1xuICBsZXQga2V5TW9kaWZpZXJzID0gbW9kaWZpZXJzLmZpbHRlcigoaSkgPT4ge1xuICAgIHJldHVybiAhW1wid2luZG93XCIsIFwiZG9jdW1lbnRcIiwgXCJwcmV2ZW50XCIsIFwic3RvcFwiLCBcIm9uY2VcIiwgXCJjYXB0dXJlXCJdLmluY2x1ZGVzKGkpO1xuICB9KTtcbiAgaWYgKGtleU1vZGlmaWVycy5pbmNsdWRlcyhcImRlYm91bmNlXCIpKSB7XG4gICAgbGV0IGRlYm91bmNlSW5kZXggPSBrZXlNb2RpZmllcnMuaW5kZXhPZihcImRlYm91bmNlXCIpO1xuICAgIGtleU1vZGlmaWVycy5zcGxpY2UoZGVib3VuY2VJbmRleCwgaXNOdW1lcmljKChrZXlNb2RpZmllcnNbZGVib3VuY2VJbmRleCArIDFdIHx8IFwiaW52YWxpZC13YWl0XCIpLnNwbGl0KFwibXNcIilbMF0pID8gMiA6IDEpO1xuICB9XG4gIGlmIChrZXlNb2RpZmllcnMuaW5jbHVkZXMoXCJ0aHJvdHRsZVwiKSkge1xuICAgIGxldCBkZWJvdW5jZUluZGV4ID0ga2V5TW9kaWZpZXJzLmluZGV4T2YoXCJ0aHJvdHRsZVwiKTtcbiAgICBrZXlNb2RpZmllcnMuc3BsaWNlKGRlYm91bmNlSW5kZXgsIGlzTnVtZXJpYygoa2V5TW9kaWZpZXJzW2RlYm91bmNlSW5kZXggKyAxXSB8fCBcImludmFsaWQtd2FpdFwiKS5zcGxpdChcIm1zXCIpWzBdKSA/IDIgOiAxKTtcbiAgfVxuICBpZiAoa2V5TW9kaWZpZXJzLmxlbmd0aCA9PT0gMClcbiAgICByZXR1cm4gZmFsc2U7XG4gIGlmIChrZXlNb2RpZmllcnMubGVuZ3RoID09PSAxICYmIGtleVRvTW9kaWZpZXJzKGUua2V5KS5pbmNsdWRlcyhrZXlNb2RpZmllcnNbMF0pKVxuICAgIHJldHVybiBmYWxzZTtcbiAgY29uc3Qgc3lzdGVtS2V5TW9kaWZpZXJzID0gW1wiY3RybFwiLCBcInNoaWZ0XCIsIFwiYWx0XCIsIFwibWV0YVwiLCBcImNtZFwiLCBcInN1cGVyXCJdO1xuICBjb25zdCBzZWxlY3RlZFN5c3RlbUtleU1vZGlmaWVycyA9IHN5c3RlbUtleU1vZGlmaWVycy5maWx0ZXIoKG1vZGlmaWVyKSA9PiBrZXlNb2RpZmllcnMuaW5jbHVkZXMobW9kaWZpZXIpKTtcbiAga2V5TW9kaWZpZXJzID0ga2V5TW9kaWZpZXJzLmZpbHRlcigoaSkgPT4gIXNlbGVjdGVkU3lzdGVtS2V5TW9kaWZpZXJzLmluY2x1ZGVzKGkpKTtcbiAgaWYgKHNlbGVjdGVkU3lzdGVtS2V5TW9kaWZpZXJzLmxlbmd0aCA+IDApIHtcbiAgICBjb25zdCBhY3RpdmVseVByZXNzZWRLZXlNb2RpZmllcnMgPSBzZWxlY3RlZFN5c3RlbUtleU1vZGlmaWVycy5maWx0ZXIoKG1vZGlmaWVyKSA9PiB7XG4gICAgICBpZiAobW9kaWZpZXIgPT09IFwiY21kXCIgfHwgbW9kaWZpZXIgPT09IFwic3VwZXJcIilcbiAgICAgICAgbW9kaWZpZXIgPSBcIm1ldGFcIjtcbiAgICAgIHJldHVybiBlW2Ake21vZGlmaWVyfUtleWBdO1xuICAgIH0pO1xuICAgIGlmIChhY3RpdmVseVByZXNzZWRLZXlNb2RpZmllcnMubGVuZ3RoID09PSBzZWxlY3RlZFN5c3RlbUtleU1vZGlmaWVycy5sZW5ndGgpIHtcbiAgICAgIGlmIChrZXlUb01vZGlmaWVycyhlLmtleSkuaW5jbHVkZXMoa2V5TW9kaWZpZXJzWzBdKSlcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cbmZ1bmN0aW9uIGtleVRvTW9kaWZpZXJzKGtleSkge1xuICBpZiAoIWtleSlcbiAgICByZXR1cm4gW107XG4gIGtleSA9IGtlYmFiQ2FzZTIoa2V5KTtcbiAgbGV0IG1vZGlmaWVyVG9LZXlNYXAgPSB7XG4gICAgXCJjdHJsXCI6IFwiY29udHJvbFwiLFxuICAgIFwic2xhc2hcIjogXCIvXCIsXG4gICAgXCJzcGFjZVwiOiBcIiBcIixcbiAgICBcInNwYWNlYmFyXCI6IFwiIFwiLFxuICAgIFwiY21kXCI6IFwibWV0YVwiLFxuICAgIFwiZXNjXCI6IFwiZXNjYXBlXCIsXG4gICAgXCJ1cFwiOiBcImFycm93LXVwXCIsXG4gICAgXCJkb3duXCI6IFwiYXJyb3ctZG93blwiLFxuICAgIFwibGVmdFwiOiBcImFycm93LWxlZnRcIixcbiAgICBcInJpZ2h0XCI6IFwiYXJyb3ctcmlnaHRcIixcbiAgICBcInBlcmlvZFwiOiBcIi5cIixcbiAgICBcImVxdWFsXCI6IFwiPVwiLFxuICAgIFwibWludXNcIjogXCItXCIsXG4gICAgXCJ1bmRlcnNjb3JlXCI6IFwiX1wiXG4gIH07XG4gIG1vZGlmaWVyVG9LZXlNYXBba2V5XSA9IGtleTtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKG1vZGlmaWVyVG9LZXlNYXApLm1hcCgobW9kaWZpZXIpID0+IHtcbiAgICBpZiAobW9kaWZpZXJUb0tleU1hcFttb2RpZmllcl0gPT09IGtleSlcbiAgICAgIHJldHVybiBtb2RpZmllcjtcbiAgfSkuZmlsdGVyKChtb2RpZmllcikgPT4gbW9kaWZpZXIpO1xufVxuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvZGlyZWN0aXZlcy94LW1vZGVsLmpzXG5kaXJlY3RpdmUoXCJtb2RlbFwiLCAoZWwsIHsgbW9kaWZpZXJzLCBleHByZXNzaW9uIH0sIHsgZWZmZWN0OiBlZmZlY3QzLCBjbGVhbnVwOiBjbGVhbnVwMiB9KSA9PiB7XG4gIGxldCBzY29wZVRhcmdldCA9IGVsO1xuICBpZiAobW9kaWZpZXJzLmluY2x1ZGVzKFwicGFyZW50XCIpKSB7XG4gICAgc2NvcGVUYXJnZXQgPSBlbC5wYXJlbnROb2RlO1xuICB9XG4gIGxldCBldmFsdWF0ZUdldCA9IGV2YWx1YXRlTGF0ZXIoc2NvcGVUYXJnZXQsIGV4cHJlc3Npb24pO1xuICBsZXQgZXZhbHVhdGVTZXQ7XG4gIGlmICh0eXBlb2YgZXhwcmVzc2lvbiA9PT0gXCJzdHJpbmdcIikge1xuICAgIGV2YWx1YXRlU2V0ID0gZXZhbHVhdGVMYXRlcihzY29wZVRhcmdldCwgYCR7ZXhwcmVzc2lvbn0gPSBfX3BsYWNlaG9sZGVyYCk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGV4cHJlc3Npb24gPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgZXhwcmVzc2lvbigpID09PSBcInN0cmluZ1wiKSB7XG4gICAgZXZhbHVhdGVTZXQgPSBldmFsdWF0ZUxhdGVyKHNjb3BlVGFyZ2V0LCBgJHtleHByZXNzaW9uKCl9ID0gX19wbGFjZWhvbGRlcmApO1xuICB9IGVsc2Uge1xuICAgIGV2YWx1YXRlU2V0ID0gKCkgPT4ge1xuICAgIH07XG4gIH1cbiAgbGV0IGdldFZhbHVlID0gKCkgPT4ge1xuICAgIGxldCByZXN1bHQ7XG4gICAgZXZhbHVhdGVHZXQoKHZhbHVlKSA9PiByZXN1bHQgPSB2YWx1ZSk7XG4gICAgcmV0dXJuIGlzR2V0dGVyU2V0dGVyKHJlc3VsdCkgPyByZXN1bHQuZ2V0KCkgOiByZXN1bHQ7XG4gIH07XG4gIGxldCBzZXRWYWx1ZSA9ICh2YWx1ZSkgPT4ge1xuICAgIGxldCByZXN1bHQ7XG4gICAgZXZhbHVhdGVHZXQoKHZhbHVlMikgPT4gcmVzdWx0ID0gdmFsdWUyKTtcbiAgICBpZiAoaXNHZXR0ZXJTZXR0ZXIocmVzdWx0KSkge1xuICAgICAgcmVzdWx0LnNldCh2YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGV2YWx1YXRlU2V0KCgpID0+IHtcbiAgICAgIH0sIHtcbiAgICAgICAgc2NvcGU6IHsgXCJfX3BsYWNlaG9sZGVyXCI6IHZhbHVlIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcbiAgaWYgKHR5cGVvZiBleHByZXNzaW9uID09PSBcInN0cmluZ1wiICYmIGVsLnR5cGUgPT09IFwicmFkaW9cIikge1xuICAgIG11dGF0ZURvbSgoKSA9PiB7XG4gICAgICBpZiAoIWVsLmhhc0F0dHJpYnV0ZShcIm5hbWVcIikpXG4gICAgICAgIGVsLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgZXhwcmVzc2lvbik7XG4gICAgfSk7XG4gIH1cbiAgdmFyIGV2ZW50ID0gZWwudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSBcInNlbGVjdFwiIHx8IFtcImNoZWNrYm94XCIsIFwicmFkaW9cIl0uaW5jbHVkZXMoZWwudHlwZSkgfHwgbW9kaWZpZXJzLmluY2x1ZGVzKFwibGF6eVwiKSA/IFwiY2hhbmdlXCIgOiBcImlucHV0XCI7XG4gIGxldCByZW1vdmVMaXN0ZW5lciA9IGlzQ2xvbmluZyA/ICgpID0+IHtcbiAgfSA6IG9uKGVsLCBldmVudCwgbW9kaWZpZXJzLCAoZSkgPT4ge1xuICAgIHNldFZhbHVlKGdldElucHV0VmFsdWUoZWwsIG1vZGlmaWVycywgZSwgZ2V0VmFsdWUoKSkpO1xuICB9KTtcbiAgaWYgKG1vZGlmaWVycy5pbmNsdWRlcyhcImZpbGxcIikpIHtcbiAgICBpZiAoW251bGwsIFwiXCJdLmluY2x1ZGVzKGdldFZhbHVlKCkpIHx8IGVsLnR5cGUgPT09IFwiY2hlY2tib3hcIiAmJiBBcnJheS5pc0FycmF5KGdldFZhbHVlKCkpKSB7XG4gICAgICBlbC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChldmVudCwge30pKTtcbiAgICB9XG4gIH1cbiAgaWYgKCFlbC5feF9yZW1vdmVNb2RlbExpc3RlbmVycylcbiAgICBlbC5feF9yZW1vdmVNb2RlbExpc3RlbmVycyA9IHt9O1xuICBlbC5feF9yZW1vdmVNb2RlbExpc3RlbmVyc1tcImRlZmF1bHRcIl0gPSByZW1vdmVMaXN0ZW5lcjtcbiAgY2xlYW51cDIoKCkgPT4gZWwuX3hfcmVtb3ZlTW9kZWxMaXN0ZW5lcnNbXCJkZWZhdWx0XCJdKCkpO1xuICBpZiAoZWwuZm9ybSkge1xuICAgIGxldCByZW1vdmVSZXNldExpc3RlbmVyID0gb24oZWwuZm9ybSwgXCJyZXNldFwiLCBbXSwgKGUpID0+IHtcbiAgICAgIG5leHRUaWNrKCgpID0+IGVsLl94X21vZGVsICYmIGVsLl94X21vZGVsLnNldChlbC52YWx1ZSkpO1xuICAgIH0pO1xuICAgIGNsZWFudXAyKCgpID0+IHJlbW92ZVJlc2V0TGlzdGVuZXIoKSk7XG4gIH1cbiAgZWwuX3hfbW9kZWwgPSB7XG4gICAgZ2V0KCkge1xuICAgICAgcmV0dXJuIGdldFZhbHVlKCk7XG4gICAgfSxcbiAgICBzZXQodmFsdWUpIHtcbiAgICAgIHNldFZhbHVlKHZhbHVlKTtcbiAgICB9XG4gIH07XG4gIGVsLl94X2ZvcmNlTW9kZWxVcGRhdGUgPSAodmFsdWUpID0+IHtcbiAgICBpZiAodmFsdWUgPT09IHZvaWQgMCAmJiB0eXBlb2YgZXhwcmVzc2lvbiA9PT0gXCJzdHJpbmdcIiAmJiBleHByZXNzaW9uLm1hdGNoKC9cXC4vKSlcbiAgICAgIHZhbHVlID0gXCJcIjtcbiAgICB3aW5kb3cuZnJvbU1vZGVsID0gdHJ1ZTtcbiAgICBtdXRhdGVEb20oKCkgPT4gYmluZChlbCwgXCJ2YWx1ZVwiLCB2YWx1ZSkpO1xuICAgIGRlbGV0ZSB3aW5kb3cuZnJvbU1vZGVsO1xuICB9O1xuICBlZmZlY3QzKCgpID0+IHtcbiAgICBsZXQgdmFsdWUgPSBnZXRWYWx1ZSgpO1xuICAgIGlmIChtb2RpZmllcnMuaW5jbHVkZXMoXCJ1bmludHJ1c2l2ZVwiKSAmJiBkb2N1bWVudC5hY3RpdmVFbGVtZW50LmlzU2FtZU5vZGUoZWwpKVxuICAgICAgcmV0dXJuO1xuICAgIGVsLl94X2ZvcmNlTW9kZWxVcGRhdGUodmFsdWUpO1xuICB9KTtcbn0pO1xuZnVuY3Rpb24gZ2V0SW5wdXRWYWx1ZShlbCwgbW9kaWZpZXJzLCBldmVudCwgY3VycmVudFZhbHVlKSB7XG4gIHJldHVybiBtdXRhdGVEb20oKCkgPT4ge1xuICAgIGlmIChldmVudCBpbnN0YW5jZW9mIEN1c3RvbUV2ZW50ICYmIGV2ZW50LmRldGFpbCAhPT0gdm9pZCAwKVxuICAgICAgcmV0dXJuIGV2ZW50LmRldGFpbCAhPT0gbnVsbCAmJiBldmVudC5kZXRhaWwgIT09IHZvaWQgMCA/IGV2ZW50LmRldGFpbCA6IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICBlbHNlIGlmIChlbC50eXBlID09PSBcImNoZWNrYm94XCIpIHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGN1cnJlbnRWYWx1ZSkpIHtcbiAgICAgICAgbGV0IG5ld1ZhbHVlID0gbnVsbDtcbiAgICAgICAgaWYgKG1vZGlmaWVycy5pbmNsdWRlcyhcIm51bWJlclwiKSkge1xuICAgICAgICAgIG5ld1ZhbHVlID0gc2FmZVBhcnNlTnVtYmVyKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgICAgIH0gZWxzZSBpZiAobW9kaWZpZXJzLmluY2x1ZGVzKFwiYm9vbGVhblwiKSkge1xuICAgICAgICAgIG5ld1ZhbHVlID0gc2FmZVBhcnNlQm9vbGVhbihldmVudC50YXJnZXQudmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5ld1ZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBldmVudC50YXJnZXQuY2hlY2tlZCA/IGN1cnJlbnRWYWx1ZS5jb25jYXQoW25ld1ZhbHVlXSkgOiBjdXJyZW50VmFsdWUuZmlsdGVyKChlbDIpID0+ICFjaGVja2VkQXR0ckxvb3NlQ29tcGFyZTIoZWwyLCBuZXdWYWx1ZSkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGV2ZW50LnRhcmdldC5jaGVja2VkO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZWwudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSBcInNlbGVjdFwiICYmIGVsLm11bHRpcGxlKSB7XG4gICAgICBpZiAobW9kaWZpZXJzLmluY2x1ZGVzKFwibnVtYmVyXCIpKSB7XG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKGV2ZW50LnRhcmdldC5zZWxlY3RlZE9wdGlvbnMpLm1hcCgob3B0aW9uKSA9PiB7XG4gICAgICAgICAgbGV0IHJhd1ZhbHVlID0gb3B0aW9uLnZhbHVlIHx8IG9wdGlvbi50ZXh0O1xuICAgICAgICAgIHJldHVybiBzYWZlUGFyc2VOdW1iZXIocmF3VmFsdWUpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAobW9kaWZpZXJzLmluY2x1ZGVzKFwiYm9vbGVhblwiKSkge1xuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbShldmVudC50YXJnZXQuc2VsZWN0ZWRPcHRpb25zKS5tYXAoKG9wdGlvbikgPT4ge1xuICAgICAgICAgIGxldCByYXdWYWx1ZSA9IG9wdGlvbi52YWx1ZSB8fCBvcHRpb24udGV4dDtcbiAgICAgICAgICByZXR1cm4gc2FmZVBhcnNlQm9vbGVhbihyYXdWYWx1ZSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIEFycmF5LmZyb20oZXZlbnQudGFyZ2V0LnNlbGVjdGVkT3B0aW9ucykubWFwKChvcHRpb24pID0+IHtcbiAgICAgICAgcmV0dXJuIG9wdGlvbi52YWx1ZSB8fCBvcHRpb24udGV4dDtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAobW9kaWZpZXJzLmluY2x1ZGVzKFwibnVtYmVyXCIpKSB7XG4gICAgICAgIHJldHVybiBzYWZlUGFyc2VOdW1iZXIoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICAgIH0gZWxzZSBpZiAobW9kaWZpZXJzLmluY2x1ZGVzKFwiYm9vbGVhblwiKSkge1xuICAgICAgICByZXR1cm4gc2FmZVBhcnNlQm9vbGVhbihldmVudC50YXJnZXQudmFsdWUpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG1vZGlmaWVycy5pbmNsdWRlcyhcInRyaW1cIikgPyBldmVudC50YXJnZXQudmFsdWUudHJpbSgpIDogZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgIH1cbiAgfSk7XG59XG5mdW5jdGlvbiBzYWZlUGFyc2VOdW1iZXIocmF3VmFsdWUpIHtcbiAgbGV0IG51bWJlciA9IHJhd1ZhbHVlID8gcGFyc2VGbG9hdChyYXdWYWx1ZSkgOiBudWxsO1xuICByZXR1cm4gaXNOdW1lcmljMihudW1iZXIpID8gbnVtYmVyIDogcmF3VmFsdWU7XG59XG5mdW5jdGlvbiBjaGVja2VkQXR0ckxvb3NlQ29tcGFyZTIodmFsdWVBLCB2YWx1ZUIpIHtcbiAgcmV0dXJuIHZhbHVlQSA9PSB2YWx1ZUI7XG59XG5mdW5jdGlvbiBpc051bWVyaWMyKHN1YmplY3QpIHtcbiAgcmV0dXJuICFBcnJheS5pc0FycmF5KHN1YmplY3QpICYmICFpc05hTihzdWJqZWN0KTtcbn1cbmZ1bmN0aW9uIGlzR2V0dGVyU2V0dGVyKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIHZhbHVlLmdldCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiB2YWx1ZS5zZXQgPT09IFwiZnVuY3Rpb25cIjtcbn1cblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL2RpcmVjdGl2ZXMveC1jbG9hay5qc1xuZGlyZWN0aXZlKFwiY2xvYWtcIiwgKGVsKSA9PiBxdWV1ZU1pY3JvdGFzaygoKSA9PiBtdXRhdGVEb20oKCkgPT4gZWwucmVtb3ZlQXR0cmlidXRlKHByZWZpeChcImNsb2FrXCIpKSkpKTtcblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL2RpcmVjdGl2ZXMveC1pbml0LmpzXG5hZGRJbml0U2VsZWN0b3IoKCkgPT4gYFske3ByZWZpeChcImluaXRcIil9XWApO1xuZGlyZWN0aXZlKFwiaW5pdFwiLCBza2lwRHVyaW5nQ2xvbmUoKGVsLCB7IGV4cHJlc3Npb24gfSwgeyBldmFsdWF0ZTogZXZhbHVhdGUyIH0pID0+IHtcbiAgaWYgKHR5cGVvZiBleHByZXNzaW9uID09PSBcInN0cmluZ1wiKSB7XG4gICAgcmV0dXJuICEhZXhwcmVzc2lvbi50cmltKCkgJiYgZXZhbHVhdGUyKGV4cHJlc3Npb24sIHt9LCBmYWxzZSk7XG4gIH1cbiAgcmV0dXJuIGV2YWx1YXRlMihleHByZXNzaW9uLCB7fSwgZmFsc2UpO1xufSkpO1xuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvZGlyZWN0aXZlcy94LXRleHQuanNcbmRpcmVjdGl2ZShcInRleHRcIiwgKGVsLCB7IGV4cHJlc3Npb24gfSwgeyBlZmZlY3Q6IGVmZmVjdDMsIGV2YWx1YXRlTGF0ZXI6IGV2YWx1YXRlTGF0ZXIyIH0pID0+IHtcbiAgbGV0IGV2YWx1YXRlMiA9IGV2YWx1YXRlTGF0ZXIyKGV4cHJlc3Npb24pO1xuICBlZmZlY3QzKCgpID0+IHtcbiAgICBldmFsdWF0ZTIoKHZhbHVlKSA9PiB7XG4gICAgICBtdXRhdGVEb20oKCkgPT4ge1xuICAgICAgICBlbC50ZXh0Q29udGVudCA9IHZhbHVlO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xufSk7XG5cbi8vIHBhY2thZ2VzL2FscGluZWpzL3NyYy9kaXJlY3RpdmVzL3gtaHRtbC5qc1xuZGlyZWN0aXZlKFwiaHRtbFwiLCAoZWwsIHsgZXhwcmVzc2lvbiB9LCB7IGVmZmVjdDogZWZmZWN0MywgZXZhbHVhdGVMYXRlcjogZXZhbHVhdGVMYXRlcjIgfSkgPT4ge1xuICBsZXQgZXZhbHVhdGUyID0gZXZhbHVhdGVMYXRlcjIoZXhwcmVzc2lvbik7XG4gIGVmZmVjdDMoKCkgPT4ge1xuICAgIGV2YWx1YXRlMigodmFsdWUpID0+IHtcbiAgICAgIG11dGF0ZURvbSgoKSA9PiB7XG4gICAgICAgIGVsLmlubmVySFRNTCA9IHZhbHVlO1xuICAgICAgICBlbC5feF9pZ25vcmVTZWxmID0gdHJ1ZTtcbiAgICAgICAgaW5pdFRyZWUoZWwpO1xuICAgICAgICBkZWxldGUgZWwuX3hfaWdub3JlU2VsZjtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9KTtcbn0pO1xuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvZGlyZWN0aXZlcy94LWJpbmQuanNcbm1hcEF0dHJpYnV0ZXMoc3RhcnRpbmdXaXRoKFwiOlwiLCBpbnRvKHByZWZpeChcImJpbmQ6XCIpKSkpO1xudmFyIGhhbmRsZXIyID0gKGVsLCB7IHZhbHVlLCBtb2RpZmllcnMsIGV4cHJlc3Npb24sIG9yaWdpbmFsIH0sIHsgZWZmZWN0OiBlZmZlY3QzIH0pID0+IHtcbiAgaWYgKCF2YWx1ZSkge1xuICAgIGxldCBiaW5kaW5nUHJvdmlkZXJzID0ge307XG4gICAgaW5qZWN0QmluZGluZ1Byb3ZpZGVycyhiaW5kaW5nUHJvdmlkZXJzKTtcbiAgICBsZXQgZ2V0QmluZGluZ3MgPSBldmFsdWF0ZUxhdGVyKGVsLCBleHByZXNzaW9uKTtcbiAgICBnZXRCaW5kaW5ncygoYmluZGluZ3MpID0+IHtcbiAgICAgIGFwcGx5QmluZGluZ3NPYmplY3QoZWwsIGJpbmRpbmdzLCBvcmlnaW5hbCk7XG4gICAgfSwgeyBzY29wZTogYmluZGluZ1Byb3ZpZGVycyB9KTtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKHZhbHVlID09PSBcImtleVwiKVxuICAgIHJldHVybiBzdG9yZUtleUZvclhGb3IoZWwsIGV4cHJlc3Npb24pO1xuICBpZiAoZWwuX3hfaW5saW5lQmluZGluZ3MgJiYgZWwuX3hfaW5saW5lQmluZGluZ3NbdmFsdWVdICYmIGVsLl94X2lubGluZUJpbmRpbmdzW3ZhbHVlXS5leHRyYWN0KSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGxldCBldmFsdWF0ZTIgPSBldmFsdWF0ZUxhdGVyKGVsLCBleHByZXNzaW9uKTtcbiAgZWZmZWN0MygoKSA9PiBldmFsdWF0ZTIoKHJlc3VsdCkgPT4ge1xuICAgIGlmIChyZXN1bHQgPT09IHZvaWQgMCAmJiB0eXBlb2YgZXhwcmVzc2lvbiA9PT0gXCJzdHJpbmdcIiAmJiBleHByZXNzaW9uLm1hdGNoKC9cXC4vKSkge1xuICAgICAgcmVzdWx0ID0gXCJcIjtcbiAgICB9XG4gICAgbXV0YXRlRG9tKCgpID0+IGJpbmQoZWwsIHZhbHVlLCByZXN1bHQsIG1vZGlmaWVycykpO1xuICB9KSk7XG59O1xuaGFuZGxlcjIuaW5saW5lID0gKGVsLCB7IHZhbHVlLCBtb2RpZmllcnMsIGV4cHJlc3Npb24gfSkgPT4ge1xuICBpZiAoIXZhbHVlKVxuICAgIHJldHVybjtcbiAgaWYgKCFlbC5feF9pbmxpbmVCaW5kaW5ncylcbiAgICBlbC5feF9pbmxpbmVCaW5kaW5ncyA9IHt9O1xuICBlbC5feF9pbmxpbmVCaW5kaW5nc1t2YWx1ZV0gPSB7IGV4cHJlc3Npb24sIGV4dHJhY3Q6IGZhbHNlIH07XG59O1xuZGlyZWN0aXZlKFwiYmluZFwiLCBoYW5kbGVyMik7XG5mdW5jdGlvbiBzdG9yZUtleUZvclhGb3IoZWwsIGV4cHJlc3Npb24pIHtcbiAgZWwuX3hfa2V5RXhwcmVzc2lvbiA9IGV4cHJlc3Npb247XG59XG5cbi8vIHBhY2thZ2VzL2FscGluZWpzL3NyYy9kaXJlY3RpdmVzL3gtZGF0YS5qc1xuYWRkUm9vdFNlbGVjdG9yKCgpID0+IGBbJHtwcmVmaXgoXCJkYXRhXCIpfV1gKTtcbmRpcmVjdGl2ZShcImRhdGFcIiwgKGVsLCB7IGV4cHJlc3Npb24gfSwgeyBjbGVhbnVwOiBjbGVhbnVwMiB9KSA9PiB7XG4gIGlmIChzaG91bGRTa2lwUmVnaXN0ZXJpbmdEYXRhRHVyaW5nQ2xvbmUoZWwpKVxuICAgIHJldHVybjtcbiAgZXhwcmVzc2lvbiA9IGV4cHJlc3Npb24gPT09IFwiXCIgPyBcInt9XCIgOiBleHByZXNzaW9uO1xuICBsZXQgbWFnaWNDb250ZXh0ID0ge307XG4gIGluamVjdE1hZ2ljcyhtYWdpY0NvbnRleHQsIGVsKTtcbiAgbGV0IGRhdGFQcm92aWRlckNvbnRleHQgPSB7fTtcbiAgaW5qZWN0RGF0YVByb3ZpZGVycyhkYXRhUHJvdmlkZXJDb250ZXh0LCBtYWdpY0NvbnRleHQpO1xuICBsZXQgZGF0YTIgPSBldmFsdWF0ZShlbCwgZXhwcmVzc2lvbiwgeyBzY29wZTogZGF0YVByb3ZpZGVyQ29udGV4dCB9KTtcbiAgaWYgKGRhdGEyID09PSB2b2lkIDAgfHwgZGF0YTIgPT09IHRydWUpXG4gICAgZGF0YTIgPSB7fTtcbiAgaW5qZWN0TWFnaWNzKGRhdGEyLCBlbCk7XG4gIGxldCByZWFjdGl2ZURhdGEgPSByZWFjdGl2ZShkYXRhMik7XG4gIGluaXRJbnRlcmNlcHRvcnMyKHJlYWN0aXZlRGF0YSk7XG4gIGxldCB1bmRvID0gYWRkU2NvcGVUb05vZGUoZWwsIHJlYWN0aXZlRGF0YSk7XG4gIHJlYWN0aXZlRGF0YVtcImluaXRcIl0gJiYgZXZhbHVhdGUoZWwsIHJlYWN0aXZlRGF0YVtcImluaXRcIl0pO1xuICBjbGVhbnVwMigoKSA9PiB7XG4gICAgcmVhY3RpdmVEYXRhW1wiZGVzdHJveVwiXSAmJiBldmFsdWF0ZShlbCwgcmVhY3RpdmVEYXRhW1wiZGVzdHJveVwiXSk7XG4gICAgdW5kbygpO1xuICB9KTtcbn0pO1xuaW50ZXJjZXB0Q2xvbmUoKGZyb20sIHRvKSA9PiB7XG4gIGlmIChmcm9tLl94X2RhdGFTdGFjaykge1xuICAgIHRvLl94X2RhdGFTdGFjayA9IGZyb20uX3hfZGF0YVN0YWNrO1xuICAgIHRvLnNldEF0dHJpYnV0ZShcImRhdGEtaGFzLWFscGluZS1zdGF0ZVwiLCB0cnVlKTtcbiAgfVxufSk7XG5mdW5jdGlvbiBzaG91bGRTa2lwUmVnaXN0ZXJpbmdEYXRhRHVyaW5nQ2xvbmUoZWwpIHtcbiAgaWYgKCFpc0Nsb25pbmcpXG4gICAgcmV0dXJuIGZhbHNlO1xuICBpZiAoaXNDbG9uaW5nTGVnYWN5KVxuICAgIHJldHVybiB0cnVlO1xuICByZXR1cm4gZWwuaGFzQXR0cmlidXRlKFwiZGF0YS1oYXMtYWxwaW5lLXN0YXRlXCIpO1xufVxuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvZGlyZWN0aXZlcy94LXNob3cuanNcbmRpcmVjdGl2ZShcInNob3dcIiwgKGVsLCB7IG1vZGlmaWVycywgZXhwcmVzc2lvbiB9LCB7IGVmZmVjdDogZWZmZWN0MyB9KSA9PiB7XG4gIGxldCBldmFsdWF0ZTIgPSBldmFsdWF0ZUxhdGVyKGVsLCBleHByZXNzaW9uKTtcbiAgaWYgKCFlbC5feF9kb0hpZGUpXG4gICAgZWwuX3hfZG9IaWRlID0gKCkgPT4ge1xuICAgICAgbXV0YXRlRG9tKCgpID0+IHtcbiAgICAgICAgZWwuc3R5bGUuc2V0UHJvcGVydHkoXCJkaXNwbGF5XCIsIFwibm9uZVwiLCBtb2RpZmllcnMuaW5jbHVkZXMoXCJpbXBvcnRhbnRcIikgPyBcImltcG9ydGFudFwiIDogdm9pZCAwKTtcbiAgICAgIH0pO1xuICAgIH07XG4gIGlmICghZWwuX3hfZG9TaG93KVxuICAgIGVsLl94X2RvU2hvdyA9ICgpID0+IHtcbiAgICAgIG11dGF0ZURvbSgoKSA9PiB7XG4gICAgICAgIGlmIChlbC5zdHlsZS5sZW5ndGggPT09IDEgJiYgZWwuc3R5bGUuZGlzcGxheSA9PT0gXCJub25lXCIpIHtcbiAgICAgICAgICBlbC5yZW1vdmVBdHRyaWJ1dGUoXCJzdHlsZVwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBlbC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcImRpc3BsYXlcIik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG4gIGxldCBoaWRlID0gKCkgPT4ge1xuICAgIGVsLl94X2RvSGlkZSgpO1xuICAgIGVsLl94X2lzU2hvd24gPSBmYWxzZTtcbiAgfTtcbiAgbGV0IHNob3cgPSAoKSA9PiB7XG4gICAgZWwuX3hfZG9TaG93KCk7XG4gICAgZWwuX3hfaXNTaG93biA9IHRydWU7XG4gIH07XG4gIGxldCBjbGlja0F3YXlDb21wYXRpYmxlU2hvdyA9ICgpID0+IHNldFRpbWVvdXQoc2hvdyk7XG4gIGxldCB0b2dnbGUgPSBvbmNlKFxuICAgICh2YWx1ZSkgPT4gdmFsdWUgPyBzaG93KCkgOiBoaWRlKCksXG4gICAgKHZhbHVlKSA9PiB7XG4gICAgICBpZiAodHlwZW9mIGVsLl94X3RvZ2dsZUFuZENhc2NhZGVXaXRoVHJhbnNpdGlvbnMgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBlbC5feF90b2dnbGVBbmRDYXNjYWRlV2l0aFRyYW5zaXRpb25zKGVsLCB2YWx1ZSwgc2hvdywgaGlkZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWx1ZSA/IGNsaWNrQXdheUNvbXBhdGlibGVTaG93KCkgOiBoaWRlKCk7XG4gICAgICB9XG4gICAgfVxuICApO1xuICBsZXQgb2xkVmFsdWU7XG4gIGxldCBmaXJzdFRpbWUgPSB0cnVlO1xuICBlZmZlY3QzKCgpID0+IGV2YWx1YXRlMigodmFsdWUpID0+IHtcbiAgICBpZiAoIWZpcnN0VGltZSAmJiB2YWx1ZSA9PT0gb2xkVmFsdWUpXG4gICAgICByZXR1cm47XG4gICAgaWYgKG1vZGlmaWVycy5pbmNsdWRlcyhcImltbWVkaWF0ZVwiKSlcbiAgICAgIHZhbHVlID8gY2xpY2tBd2F5Q29tcGF0aWJsZVNob3coKSA6IGhpZGUoKTtcbiAgICB0b2dnbGUodmFsdWUpO1xuICAgIG9sZFZhbHVlID0gdmFsdWU7XG4gICAgZmlyc3RUaW1lID0gZmFsc2U7XG4gIH0pKTtcbn0pO1xuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvZGlyZWN0aXZlcy94LWZvci5qc1xuZGlyZWN0aXZlKFwiZm9yXCIsIChlbCwgeyBleHByZXNzaW9uIH0sIHsgZWZmZWN0OiBlZmZlY3QzLCBjbGVhbnVwOiBjbGVhbnVwMiB9KSA9PiB7XG4gIGxldCBpdGVyYXRvck5hbWVzID0gcGFyc2VGb3JFeHByZXNzaW9uKGV4cHJlc3Npb24pO1xuICBsZXQgZXZhbHVhdGVJdGVtcyA9IGV2YWx1YXRlTGF0ZXIoZWwsIGl0ZXJhdG9yTmFtZXMuaXRlbXMpO1xuICBsZXQgZXZhbHVhdGVLZXkgPSBldmFsdWF0ZUxhdGVyKFxuICAgIGVsLFxuICAgIC8vIHRoZSB4LWJpbmQ6a2V5IGV4cHJlc3Npb24gaXMgc3RvcmVkIGZvciBvdXIgdXNlIGluc3RlYWQgb2YgZXZhbHVhdGVkLlxuICAgIGVsLl94X2tleUV4cHJlc3Npb24gfHwgXCJpbmRleFwiXG4gICk7XG4gIGVsLl94X3ByZXZLZXlzID0gW107XG4gIGVsLl94X2xvb2t1cCA9IHt9O1xuICBlZmZlY3QzKCgpID0+IGxvb3AoZWwsIGl0ZXJhdG9yTmFtZXMsIGV2YWx1YXRlSXRlbXMsIGV2YWx1YXRlS2V5KSk7XG4gIGNsZWFudXAyKCgpID0+IHtcbiAgICBPYmplY3QudmFsdWVzKGVsLl94X2xvb2t1cCkuZm9yRWFjaCgoZWwyKSA9PiBlbDIucmVtb3ZlKCkpO1xuICAgIGRlbGV0ZSBlbC5feF9wcmV2S2V5cztcbiAgICBkZWxldGUgZWwuX3hfbG9va3VwO1xuICB9KTtcbn0pO1xuZnVuY3Rpb24gbG9vcChlbCwgaXRlcmF0b3JOYW1lcywgZXZhbHVhdGVJdGVtcywgZXZhbHVhdGVLZXkpIHtcbiAgbGV0IGlzT2JqZWN0MiA9IChpKSA9PiB0eXBlb2YgaSA9PT0gXCJvYmplY3RcIiAmJiAhQXJyYXkuaXNBcnJheShpKTtcbiAgbGV0IHRlbXBsYXRlRWwgPSBlbDtcbiAgZXZhbHVhdGVJdGVtcygoaXRlbXMpID0+IHtcbiAgICBpZiAoaXNOdW1lcmljMyhpdGVtcykgJiYgaXRlbXMgPj0gMCkge1xuICAgICAgaXRlbXMgPSBBcnJheS5mcm9tKEFycmF5KGl0ZW1zKS5rZXlzKCksIChpKSA9PiBpICsgMSk7XG4gICAgfVxuICAgIGlmIChpdGVtcyA9PT0gdm9pZCAwKVxuICAgICAgaXRlbXMgPSBbXTtcbiAgICBsZXQgbG9va3VwID0gZWwuX3hfbG9va3VwO1xuICAgIGxldCBwcmV2S2V5cyA9IGVsLl94X3ByZXZLZXlzO1xuICAgIGxldCBzY29wZXMgPSBbXTtcbiAgICBsZXQga2V5cyA9IFtdO1xuICAgIGlmIChpc09iamVjdDIoaXRlbXMpKSB7XG4gICAgICBpdGVtcyA9IE9iamVjdC5lbnRyaWVzKGl0ZW1zKS5tYXAoKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgICBsZXQgc2NvcGUyID0gZ2V0SXRlcmF0aW9uU2NvcGVWYXJpYWJsZXMoaXRlcmF0b3JOYW1lcywgdmFsdWUsIGtleSwgaXRlbXMpO1xuICAgICAgICBldmFsdWF0ZUtleSgodmFsdWUyKSA9PiBrZXlzLnB1c2godmFsdWUyKSwgeyBzY29wZTogeyBpbmRleDoga2V5LCAuLi5zY29wZTIgfSB9KTtcbiAgICAgICAgc2NvcGVzLnB1c2goc2NvcGUyKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBzY29wZTIgPSBnZXRJdGVyYXRpb25TY29wZVZhcmlhYmxlcyhpdGVyYXRvck5hbWVzLCBpdGVtc1tpXSwgaSwgaXRlbXMpO1xuICAgICAgICBldmFsdWF0ZUtleSgodmFsdWUpID0+IGtleXMucHVzaCh2YWx1ZSksIHsgc2NvcGU6IHsgaW5kZXg6IGksIC4uLnNjb3BlMiB9IH0pO1xuICAgICAgICBzY29wZXMucHVzaChzY29wZTIpO1xuICAgICAgfVxuICAgIH1cbiAgICBsZXQgYWRkcyA9IFtdO1xuICAgIGxldCBtb3ZlcyA9IFtdO1xuICAgIGxldCByZW1vdmVzID0gW107XG4gICAgbGV0IHNhbWVzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcmV2S2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IGtleSA9IHByZXZLZXlzW2ldO1xuICAgICAgaWYgKGtleXMuaW5kZXhPZihrZXkpID09PSAtMSlcbiAgICAgICAgcmVtb3Zlcy5wdXNoKGtleSk7XG4gICAgfVxuICAgIHByZXZLZXlzID0gcHJldktleXMuZmlsdGVyKChrZXkpID0+ICFyZW1vdmVzLmluY2x1ZGVzKGtleSkpO1xuICAgIGxldCBsYXN0S2V5ID0gXCJ0ZW1wbGF0ZVwiO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IGtleSA9IGtleXNbaV07XG4gICAgICBsZXQgcHJldkluZGV4ID0gcHJldktleXMuaW5kZXhPZihrZXkpO1xuICAgICAgaWYgKHByZXZJbmRleCA9PT0gLTEpIHtcbiAgICAgICAgcHJldktleXMuc3BsaWNlKGksIDAsIGtleSk7XG4gICAgICAgIGFkZHMucHVzaChbbGFzdEtleSwgaV0pO1xuICAgICAgfSBlbHNlIGlmIChwcmV2SW5kZXggIT09IGkpIHtcbiAgICAgICAgbGV0IGtleUluU3BvdCA9IHByZXZLZXlzLnNwbGljZShpLCAxKVswXTtcbiAgICAgICAgbGV0IGtleUZvclNwb3QgPSBwcmV2S2V5cy5zcGxpY2UocHJldkluZGV4IC0gMSwgMSlbMF07XG4gICAgICAgIHByZXZLZXlzLnNwbGljZShpLCAwLCBrZXlGb3JTcG90KTtcbiAgICAgICAgcHJldktleXMuc3BsaWNlKHByZXZJbmRleCwgMCwga2V5SW5TcG90KTtcbiAgICAgICAgbW92ZXMucHVzaChba2V5SW5TcG90LCBrZXlGb3JTcG90XSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzYW1lcy5wdXNoKGtleSk7XG4gICAgICB9XG4gICAgICBsYXN0S2V5ID0ga2V5O1xuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlbW92ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBrZXkgPSByZW1vdmVzW2ldO1xuICAgICAgaWYgKCEhbG9va3VwW2tleV0uX3hfZWZmZWN0cykge1xuICAgICAgICBsb29rdXBba2V5XS5feF9lZmZlY3RzLmZvckVhY2goZGVxdWV1ZUpvYik7XG4gICAgICB9XG4gICAgICBsb29rdXBba2V5XS5yZW1vdmUoKTtcbiAgICAgIGxvb2t1cFtrZXldID0gbnVsbDtcbiAgICAgIGRlbGV0ZSBsb29rdXBba2V5XTtcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtb3Zlcy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IFtrZXlJblNwb3QsIGtleUZvclNwb3RdID0gbW92ZXNbaV07XG4gICAgICBsZXQgZWxJblNwb3QgPSBsb29rdXBba2V5SW5TcG90XTtcbiAgICAgIGxldCBlbEZvclNwb3QgPSBsb29rdXBba2V5Rm9yU3BvdF07XG4gICAgICBsZXQgbWFya2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIG11dGF0ZURvbSgoKSA9PiB7XG4gICAgICAgIGlmICghZWxGb3JTcG90KVxuICAgICAgICAgIHdhcm4oYHgtZm9yIFwiOmtleVwiIGlzIHVuZGVmaW5lZCBvciBpbnZhbGlkYCwgdGVtcGxhdGVFbCk7XG4gICAgICAgIGVsRm9yU3BvdC5hZnRlcihtYXJrZXIpO1xuICAgICAgICBlbEluU3BvdC5hZnRlcihlbEZvclNwb3QpO1xuICAgICAgICBlbEZvclNwb3QuX3hfY3VycmVudElmRWwgJiYgZWxGb3JTcG90LmFmdGVyKGVsRm9yU3BvdC5feF9jdXJyZW50SWZFbCk7XG4gICAgICAgIG1hcmtlci5iZWZvcmUoZWxJblNwb3QpO1xuICAgICAgICBlbEluU3BvdC5feF9jdXJyZW50SWZFbCAmJiBlbEluU3BvdC5hZnRlcihlbEluU3BvdC5feF9jdXJyZW50SWZFbCk7XG4gICAgICAgIG1hcmtlci5yZW1vdmUoKTtcbiAgICAgIH0pO1xuICAgICAgZWxGb3JTcG90Ll94X3JlZnJlc2hYRm9yU2NvcGUoc2NvcGVzW2tleXMuaW5kZXhPZihrZXlGb3JTcG90KV0pO1xuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFkZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBbbGFzdEtleTIsIGluZGV4XSA9IGFkZHNbaV07XG4gICAgICBsZXQgbGFzdEVsID0gbGFzdEtleTIgPT09IFwidGVtcGxhdGVcIiA/IHRlbXBsYXRlRWwgOiBsb29rdXBbbGFzdEtleTJdO1xuICAgICAgaWYgKGxhc3RFbC5feF9jdXJyZW50SWZFbClcbiAgICAgICAgbGFzdEVsID0gbGFzdEVsLl94X2N1cnJlbnRJZkVsO1xuICAgICAgbGV0IHNjb3BlMiA9IHNjb3Blc1tpbmRleF07XG4gICAgICBsZXQga2V5ID0ga2V5c1tpbmRleF07XG4gICAgICBsZXQgY2xvbmUyID0gZG9jdW1lbnQuaW1wb3J0Tm9kZSh0ZW1wbGF0ZUVsLmNvbnRlbnQsIHRydWUpLmZpcnN0RWxlbWVudENoaWxkO1xuICAgICAgbGV0IHJlYWN0aXZlU2NvcGUgPSByZWFjdGl2ZShzY29wZTIpO1xuICAgICAgYWRkU2NvcGVUb05vZGUoY2xvbmUyLCByZWFjdGl2ZVNjb3BlLCB0ZW1wbGF0ZUVsKTtcbiAgICAgIGNsb25lMi5feF9yZWZyZXNoWEZvclNjb3BlID0gKG5ld1Njb3BlKSA9PiB7XG4gICAgICAgIE9iamVjdC5lbnRyaWVzKG5ld1Njb3BlKS5mb3JFYWNoKChba2V5MiwgdmFsdWVdKSA9PiB7XG4gICAgICAgICAgcmVhY3RpdmVTY29wZVtrZXkyXSA9IHZhbHVlO1xuICAgICAgICB9KTtcbiAgICAgIH07XG4gICAgICBtdXRhdGVEb20oKCkgPT4ge1xuICAgICAgICBsYXN0RWwuYWZ0ZXIoY2xvbmUyKTtcbiAgICAgICAgaW5pdFRyZWUoY2xvbmUyKTtcbiAgICAgIH0pO1xuICAgICAgaWYgKHR5cGVvZiBrZXkgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgd2FybihcIngtZm9yIGtleSBjYW5ub3QgYmUgYW4gb2JqZWN0LCBpdCBtdXN0IGJlIGEgc3RyaW5nIG9yIGFuIGludGVnZXJcIiwgdGVtcGxhdGVFbCk7XG4gICAgICB9XG4gICAgICBsb29rdXBba2V5XSA9IGNsb25lMjtcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzYW1lcy5sZW5ndGg7IGkrKykge1xuICAgICAgbG9va3VwW3NhbWVzW2ldXS5feF9yZWZyZXNoWEZvclNjb3BlKHNjb3Blc1trZXlzLmluZGV4T2Yoc2FtZXNbaV0pXSk7XG4gICAgfVxuICAgIHRlbXBsYXRlRWwuX3hfcHJldktleXMgPSBrZXlzO1xuICB9KTtcbn1cbmZ1bmN0aW9uIHBhcnNlRm9yRXhwcmVzc2lvbihleHByZXNzaW9uKSB7XG4gIGxldCBmb3JJdGVyYXRvclJFID0gLywoW14sXFx9XFxdXSopKD86LChbXixcXH1cXF1dKikpPyQvO1xuICBsZXQgc3RyaXBQYXJlbnNSRSA9IC9eXFxzKlxcKHxcXClcXHMqJC9nO1xuICBsZXQgZm9yQWxpYXNSRSA9IC8oW1xcc1xcU10qPylcXHMrKD86aW58b2YpXFxzKyhbXFxzXFxTXSopLztcbiAgbGV0IGluTWF0Y2ggPSBleHByZXNzaW9uLm1hdGNoKGZvckFsaWFzUkUpO1xuICBpZiAoIWluTWF0Y2gpXG4gICAgcmV0dXJuO1xuICBsZXQgcmVzID0ge307XG4gIHJlcy5pdGVtcyA9IGluTWF0Y2hbMl0udHJpbSgpO1xuICBsZXQgaXRlbSA9IGluTWF0Y2hbMV0ucmVwbGFjZShzdHJpcFBhcmVuc1JFLCBcIlwiKS50cmltKCk7XG4gIGxldCBpdGVyYXRvck1hdGNoID0gaXRlbS5tYXRjaChmb3JJdGVyYXRvclJFKTtcbiAgaWYgKGl0ZXJhdG9yTWF0Y2gpIHtcbiAgICByZXMuaXRlbSA9IGl0ZW0ucmVwbGFjZShmb3JJdGVyYXRvclJFLCBcIlwiKS50cmltKCk7XG4gICAgcmVzLmluZGV4ID0gaXRlcmF0b3JNYXRjaFsxXS50cmltKCk7XG4gICAgaWYgKGl0ZXJhdG9yTWF0Y2hbMl0pIHtcbiAgICAgIHJlcy5jb2xsZWN0aW9uID0gaXRlcmF0b3JNYXRjaFsyXS50cmltKCk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJlcy5pdGVtID0gaXRlbTtcbiAgfVxuICByZXR1cm4gcmVzO1xufVxuZnVuY3Rpb24gZ2V0SXRlcmF0aW9uU2NvcGVWYXJpYWJsZXMoaXRlcmF0b3JOYW1lcywgaXRlbSwgaW5kZXgsIGl0ZW1zKSB7XG4gIGxldCBzY29wZVZhcmlhYmxlcyA9IHt9O1xuICBpZiAoL15cXFsuKlxcXSQvLnRlc3QoaXRlcmF0b3JOYW1lcy5pdGVtKSAmJiBBcnJheS5pc0FycmF5KGl0ZW0pKSB7XG4gICAgbGV0IG5hbWVzID0gaXRlcmF0b3JOYW1lcy5pdGVtLnJlcGxhY2UoXCJbXCIsIFwiXCIpLnJlcGxhY2UoXCJdXCIsIFwiXCIpLnNwbGl0KFwiLFwiKS5tYXAoKGkpID0+IGkudHJpbSgpKTtcbiAgICBuYW1lcy5mb3JFYWNoKChuYW1lLCBpKSA9PiB7XG4gICAgICBzY29wZVZhcmlhYmxlc1tuYW1lXSA9IGl0ZW1baV07XG4gICAgfSk7XG4gIH0gZWxzZSBpZiAoL15cXHsuKlxcfSQvLnRlc3QoaXRlcmF0b3JOYW1lcy5pdGVtKSAmJiAhQXJyYXkuaXNBcnJheShpdGVtKSAmJiB0eXBlb2YgaXRlbSA9PT0gXCJvYmplY3RcIikge1xuICAgIGxldCBuYW1lcyA9IGl0ZXJhdG9yTmFtZXMuaXRlbS5yZXBsYWNlKFwie1wiLCBcIlwiKS5yZXBsYWNlKFwifVwiLCBcIlwiKS5zcGxpdChcIixcIikubWFwKChpKSA9PiBpLnRyaW0oKSk7XG4gICAgbmFtZXMuZm9yRWFjaCgobmFtZSkgPT4ge1xuICAgICAgc2NvcGVWYXJpYWJsZXNbbmFtZV0gPSBpdGVtW25hbWVdO1xuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIHNjb3BlVmFyaWFibGVzW2l0ZXJhdG9yTmFtZXMuaXRlbV0gPSBpdGVtO1xuICB9XG4gIGlmIChpdGVyYXRvck5hbWVzLmluZGV4KVxuICAgIHNjb3BlVmFyaWFibGVzW2l0ZXJhdG9yTmFtZXMuaW5kZXhdID0gaW5kZXg7XG4gIGlmIChpdGVyYXRvck5hbWVzLmNvbGxlY3Rpb24pXG4gICAgc2NvcGVWYXJpYWJsZXNbaXRlcmF0b3JOYW1lcy5jb2xsZWN0aW9uXSA9IGl0ZW1zO1xuICByZXR1cm4gc2NvcGVWYXJpYWJsZXM7XG59XG5mdW5jdGlvbiBpc051bWVyaWMzKHN1YmplY3QpIHtcbiAgcmV0dXJuICFBcnJheS5pc0FycmF5KHN1YmplY3QpICYmICFpc05hTihzdWJqZWN0KTtcbn1cblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL2RpcmVjdGl2ZXMveC1yZWYuanNcbmZ1bmN0aW9uIGhhbmRsZXIzKCkge1xufVxuaGFuZGxlcjMuaW5saW5lID0gKGVsLCB7IGV4cHJlc3Npb24gfSwgeyBjbGVhbnVwOiBjbGVhbnVwMiB9KSA9PiB7XG4gIGxldCByb290ID0gY2xvc2VzdFJvb3QoZWwpO1xuICBpZiAoIXJvb3QuX3hfcmVmcylcbiAgICByb290Ll94X3JlZnMgPSB7fTtcbiAgcm9vdC5feF9yZWZzW2V4cHJlc3Npb25dID0gZWw7XG4gIGNsZWFudXAyKCgpID0+IGRlbGV0ZSByb290Ll94X3JlZnNbZXhwcmVzc2lvbl0pO1xufTtcbmRpcmVjdGl2ZShcInJlZlwiLCBoYW5kbGVyMyk7XG5cbi8vIHBhY2thZ2VzL2FscGluZWpzL3NyYy9kaXJlY3RpdmVzL3gtaWYuanNcbmRpcmVjdGl2ZShcImlmXCIsIChlbCwgeyBleHByZXNzaW9uIH0sIHsgZWZmZWN0OiBlZmZlY3QzLCBjbGVhbnVwOiBjbGVhbnVwMiB9KSA9PiB7XG4gIGlmIChlbC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgIT09IFwidGVtcGxhdGVcIilcbiAgICB3YXJuKFwieC1pZiBjYW4gb25seSBiZSB1c2VkIG9uIGEgPHRlbXBsYXRlPiB0YWdcIiwgZWwpO1xuICBsZXQgZXZhbHVhdGUyID0gZXZhbHVhdGVMYXRlcihlbCwgZXhwcmVzc2lvbik7XG4gIGxldCBzaG93ID0gKCkgPT4ge1xuICAgIGlmIChlbC5feF9jdXJyZW50SWZFbClcbiAgICAgIHJldHVybiBlbC5feF9jdXJyZW50SWZFbDtcbiAgICBsZXQgY2xvbmUyID0gZWwuY29udGVudC5jbG9uZU5vZGUodHJ1ZSkuZmlyc3RFbGVtZW50Q2hpbGQ7XG4gICAgYWRkU2NvcGVUb05vZGUoY2xvbmUyLCB7fSwgZWwpO1xuICAgIG11dGF0ZURvbSgoKSA9PiB7XG4gICAgICBlbC5hZnRlcihjbG9uZTIpO1xuICAgICAgaW5pdFRyZWUoY2xvbmUyKTtcbiAgICB9KTtcbiAgICBlbC5feF9jdXJyZW50SWZFbCA9IGNsb25lMjtcbiAgICBlbC5feF91bmRvSWYgPSAoKSA9PiB7XG4gICAgICB3YWxrKGNsb25lMiwgKG5vZGUpID0+IHtcbiAgICAgICAgaWYgKCEhbm9kZS5feF9lZmZlY3RzKSB7XG4gICAgICAgICAgbm9kZS5feF9lZmZlY3RzLmZvckVhY2goZGVxdWV1ZUpvYik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgY2xvbmUyLnJlbW92ZSgpO1xuICAgICAgZGVsZXRlIGVsLl94X2N1cnJlbnRJZkVsO1xuICAgIH07XG4gICAgcmV0dXJuIGNsb25lMjtcbiAgfTtcbiAgbGV0IGhpZGUgPSAoKSA9PiB7XG4gICAgaWYgKCFlbC5feF91bmRvSWYpXG4gICAgICByZXR1cm47XG4gICAgZWwuX3hfdW5kb0lmKCk7XG4gICAgZGVsZXRlIGVsLl94X3VuZG9JZjtcbiAgfTtcbiAgZWZmZWN0MygoKSA9PiBldmFsdWF0ZTIoKHZhbHVlKSA9PiB7XG4gICAgdmFsdWUgPyBzaG93KCkgOiBoaWRlKCk7XG4gIH0pKTtcbiAgY2xlYW51cDIoKCkgPT4gZWwuX3hfdW5kb0lmICYmIGVsLl94X3VuZG9JZigpKTtcbn0pO1xuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvZGlyZWN0aXZlcy94LWlkLmpzXG5kaXJlY3RpdmUoXCJpZFwiLCAoZWwsIHsgZXhwcmVzc2lvbiB9LCB7IGV2YWx1YXRlOiBldmFsdWF0ZTIgfSkgPT4ge1xuICBsZXQgbmFtZXMgPSBldmFsdWF0ZTIoZXhwcmVzc2lvbik7XG4gIG5hbWVzLmZvckVhY2goKG5hbWUpID0+IHNldElkUm9vdChlbCwgbmFtZSkpO1xufSk7XG5cbi8vIHBhY2thZ2VzL2FscGluZWpzL3NyYy9kaXJlY3RpdmVzL3gtb24uanNcbm1hcEF0dHJpYnV0ZXMoc3RhcnRpbmdXaXRoKFwiQFwiLCBpbnRvKHByZWZpeChcIm9uOlwiKSkpKTtcbmRpcmVjdGl2ZShcIm9uXCIsIHNraXBEdXJpbmdDbG9uZSgoZWwsIHsgdmFsdWUsIG1vZGlmaWVycywgZXhwcmVzc2lvbiB9LCB7IGNsZWFudXA6IGNsZWFudXAyIH0pID0+IHtcbiAgbGV0IGV2YWx1YXRlMiA9IGV4cHJlc3Npb24gPyBldmFsdWF0ZUxhdGVyKGVsLCBleHByZXNzaW9uKSA6ICgpID0+IHtcbiAgfTtcbiAgaWYgKGVsLnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gXCJ0ZW1wbGF0ZVwiKSB7XG4gICAgaWYgKCFlbC5feF9mb3J3YXJkRXZlbnRzKVxuICAgICAgZWwuX3hfZm9yd2FyZEV2ZW50cyA9IFtdO1xuICAgIGlmICghZWwuX3hfZm9yd2FyZEV2ZW50cy5pbmNsdWRlcyh2YWx1ZSkpXG4gICAgICBlbC5feF9mb3J3YXJkRXZlbnRzLnB1c2godmFsdWUpO1xuICB9XG4gIGxldCByZW1vdmVMaXN0ZW5lciA9IG9uKGVsLCB2YWx1ZSwgbW9kaWZpZXJzLCAoZSkgPT4ge1xuICAgIGV2YWx1YXRlMigoKSA9PiB7XG4gICAgfSwgeyBzY29wZTogeyBcIiRldmVudFwiOiBlIH0sIHBhcmFtczogW2VdIH0pO1xuICB9KTtcbiAgY2xlYW51cDIoKCkgPT4gcmVtb3ZlTGlzdGVuZXIoKSk7XG59KSk7XG5cbi8vIHBhY2thZ2VzL2FscGluZWpzL3NyYy9kaXJlY3RpdmVzL2luZGV4LmpzXG53YXJuTWlzc2luZ1BsdWdpbkRpcmVjdGl2ZShcIkNvbGxhcHNlXCIsIFwiY29sbGFwc2VcIiwgXCJjb2xsYXBzZVwiKTtcbndhcm5NaXNzaW5nUGx1Z2luRGlyZWN0aXZlKFwiSW50ZXJzZWN0XCIsIFwiaW50ZXJzZWN0XCIsIFwiaW50ZXJzZWN0XCIpO1xud2Fybk1pc3NpbmdQbHVnaW5EaXJlY3RpdmUoXCJGb2N1c1wiLCBcInRyYXBcIiwgXCJmb2N1c1wiKTtcbndhcm5NaXNzaW5nUGx1Z2luRGlyZWN0aXZlKFwiTWFza1wiLCBcIm1hc2tcIiwgXCJtYXNrXCIpO1xuZnVuY3Rpb24gd2Fybk1pc3NpbmdQbHVnaW5EaXJlY3RpdmUobmFtZSwgZGlyZWN0aXZlTmFtZSwgc2x1Zykge1xuICBkaXJlY3RpdmUoZGlyZWN0aXZlTmFtZSwgKGVsKSA9PiB3YXJuKGBZb3UgY2FuJ3QgdXNlIFt4LSR7ZGlyZWN0aXZlTmFtZX1dIHdpdGhvdXQgZmlyc3QgaW5zdGFsbGluZyB0aGUgXCIke25hbWV9XCIgcGx1Z2luIGhlcmU6IGh0dHBzOi8vYWxwaW5lanMuZGV2L3BsdWdpbnMvJHtzbHVnfWAsIGVsKSk7XG59XG5cbi8vIHBhY2thZ2VzL2FscGluZWpzL3NyYy9pbmRleC5qc1xuYWxwaW5lX2RlZmF1bHQuc2V0RXZhbHVhdG9yKG5vcm1hbEV2YWx1YXRvcik7XG5hbHBpbmVfZGVmYXVsdC5zZXRSZWFjdGl2aXR5RW5naW5lKHsgcmVhY3RpdmU6IHJlYWN0aXZlMiwgZWZmZWN0OiBlZmZlY3QyLCByZWxlYXNlOiBzdG9wLCByYXc6IHRvUmF3IH0pO1xudmFyIHNyY19kZWZhdWx0ID0gYWxwaW5lX2RlZmF1bHQ7XG5cbi8vIHBhY2thZ2VzL2FscGluZWpzL2J1aWxkcy9tb2R1bGUuanNcbnZhciBtb2R1bGVfZGVmYXVsdCA9IHNyY19kZWZhdWx0O1xuZXhwb3J0IHtcbiAgbW9kdWxlX2RlZmF1bHQgYXMgZGVmYXVsdFxufTtcbiIsICIvLyBwYWNrYWdlcy9wZXJzaXN0L3NyYy9pbmRleC5qc1xuZnVuY3Rpb24gc3JjX2RlZmF1bHQoQWxwaW5lKSB7XG4gIGxldCBwZXJzaXN0ID0gKCkgPT4ge1xuICAgIGxldCBhbGlhcztcbiAgICBsZXQgc3RvcmFnZTtcbiAgICB0cnkge1xuICAgICAgc3RvcmFnZSA9IGxvY2FsU3RvcmFnZTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgICAgY29uc29sZS53YXJuKFwiQWxwaW5lOiAkcGVyc2lzdCBpcyB1c2luZyB0ZW1wb3Jhcnkgc3RvcmFnZSBzaW5jZSBsb2NhbFN0b3JhZ2UgaXMgdW5hdmFpbGFibGUuXCIpO1xuICAgICAgbGV0IGR1bW15ID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcbiAgICAgIHN0b3JhZ2UgPSB7XG4gICAgICAgIGdldEl0ZW06IGR1bW15LmdldC5iaW5kKGR1bW15KSxcbiAgICAgICAgc2V0SXRlbTogZHVtbXkuc2V0LmJpbmQoZHVtbXkpXG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gQWxwaW5lLmludGVyY2VwdG9yKChpbml0aWFsVmFsdWUsIGdldHRlciwgc2V0dGVyLCBwYXRoLCBrZXkpID0+IHtcbiAgICAgIGxldCBsb29rdXAgPSBhbGlhcyB8fCBgX3hfJHtwYXRofWA7XG4gICAgICBsZXQgaW5pdGlhbCA9IHN0b3JhZ2VIYXMobG9va3VwLCBzdG9yYWdlKSA/IHN0b3JhZ2VHZXQobG9va3VwLCBzdG9yYWdlKSA6IGluaXRpYWxWYWx1ZTtcbiAgICAgIHNldHRlcihpbml0aWFsKTtcbiAgICAgIEFscGluZS5lZmZlY3QoKCkgPT4ge1xuICAgICAgICBsZXQgdmFsdWUgPSBnZXR0ZXIoKTtcbiAgICAgICAgc3RvcmFnZVNldChsb29rdXAsIHZhbHVlLCBzdG9yYWdlKTtcbiAgICAgICAgc2V0dGVyKHZhbHVlKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGluaXRpYWw7XG4gICAgfSwgKGZ1bmMpID0+IHtcbiAgICAgIGZ1bmMuYXMgPSAoa2V5KSA9PiB7XG4gICAgICAgIGFsaWFzID0ga2V5O1xuICAgICAgICByZXR1cm4gZnVuYztcbiAgICAgIH0sIGZ1bmMudXNpbmcgPSAodGFyZ2V0KSA9PiB7XG4gICAgICAgIHN0b3JhZ2UgPSB0YXJnZXQ7XG4gICAgICAgIHJldHVybiBmdW5jO1xuICAgICAgfTtcbiAgICB9KTtcbiAgfTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFscGluZSwgXCIkcGVyc2lzdFwiLCB7IGdldDogKCkgPT4gcGVyc2lzdCgpIH0pO1xuICBBbHBpbmUubWFnaWMoXCJwZXJzaXN0XCIsIHBlcnNpc3QpO1xuICBBbHBpbmUucGVyc2lzdCA9IChrZXksIHsgZ2V0LCBzZXQgfSwgc3RvcmFnZSA9IGxvY2FsU3RvcmFnZSkgPT4ge1xuICAgIGxldCBpbml0aWFsID0gc3RvcmFnZUhhcyhrZXksIHN0b3JhZ2UpID8gc3RvcmFnZUdldChrZXksIHN0b3JhZ2UpIDogZ2V0KCk7XG4gICAgc2V0KGluaXRpYWwpO1xuICAgIEFscGluZS5lZmZlY3QoKCkgPT4ge1xuICAgICAgbGV0IHZhbHVlID0gZ2V0KCk7XG4gICAgICBzdG9yYWdlU2V0KGtleSwgdmFsdWUsIHN0b3JhZ2UpO1xuICAgICAgc2V0KHZhbHVlKTtcbiAgICB9KTtcbiAgfTtcbn1cbmZ1bmN0aW9uIHN0b3JhZ2VIYXMoa2V5LCBzdG9yYWdlKSB7XG4gIHJldHVybiBzdG9yYWdlLmdldEl0ZW0oa2V5KSAhPT0gbnVsbDtcbn1cbmZ1bmN0aW9uIHN0b3JhZ2VHZXQoa2V5LCBzdG9yYWdlKSB7XG4gIHJldHVybiBKU09OLnBhcnNlKHN0b3JhZ2UuZ2V0SXRlbShrZXksIHN0b3JhZ2UpKTtcbn1cbmZ1bmN0aW9uIHN0b3JhZ2VTZXQoa2V5LCB2YWx1ZSwgc3RvcmFnZSkge1xuICBzdG9yYWdlLnNldEl0ZW0oa2V5LCBKU09OLnN0cmluZ2lmeSh2YWx1ZSkpO1xufVxuXG4vLyBwYWNrYWdlcy9wZXJzaXN0L2J1aWxkcy9tb2R1bGUuanNcbnZhciBtb2R1bGVfZGVmYXVsdCA9IHNyY19kZWZhdWx0O1xuZXhwb3J0IHtcbiAgbW9kdWxlX2RlZmF1bHQgYXMgZGVmYXVsdFxufTtcbiIsICJleHBvcnQgZGVmYXVsdCAoQWxwaW5lKSA9PiAoeyBcbiAgXG4gIGl0ZW1zOiBBbHBpbmUuJHBlcnNpc3QoW10pLFxuICBzdHJpcGVTZXNzaW9uSWQ6IEFscGluZS4kcGVyc2lzdChudWxsKSxcbiAgc3RyaXBlU2Vzc2lvblVybDogQWxwaW5lLiRwZXJzaXN0KG51bGwpLFxuXG4gIGdldCBjYXJ0VG90YWwoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXRlbXMucmVkdWNlKChhLGkpID0+IGEgKz0gaS5wcmljZSAqIGkucXVhbnRpdHksIDApO1xuICB9LFxuXG4gIGdldCBjYXJ0Rm9yU3RyaXBlKCkge1xuICAgIHJldHVybiB0aGlzLml0ZW1zLm1hcCgoaXRlbSkgPT4gKHtcbiAgICAgIHNrdTogaXRlbS5za3UsXG4gICAgICBwcmljZV9pZDogaXRlbS5zdHJpcGVfcHJpY2VfaWQsXG4gICAgICBxdWFudGl0eTogaXRlbS5xdWFudGl0eSxcbiAgICB9KSk7XG4gIH0sXG5cbiAgZmluZEl0ZW0oaXRlbVRvRmluZCkge1xuICAgIHJldHVybiB7IFxuICAgICAgaXRlbTogdGhpcy5pdGVtcy5maW5kKGkgPT4gaS5za3UgPT09IGl0ZW1Ub0ZpbmQuc2t1KSxcbiAgICAgIGl0ZW1JbmRleDogdGhpcy5pdGVtcy5maW5kSW5kZXgoaSA9PiBpLnNrdSA9PT0gaXRlbVRvRmluZC5za3UpXG4gICAgfTtcbiAgfSxcblxuICBnZXRJdGVtUHJvcChpdGVtVG9HZXQsIHByb3AgPSBcInF1YW50aXR5XCIpIHtcbiAgICBjb25zdCB7IGl0ZW0gfSA9IHRoaXMuZmluZEl0ZW0oaXRlbVRvR2V0KTtcbiAgICByZXR1cm4gaXRlbT8uW3Byb3BdO1xuICB9LFxuXG4gIGFkZEl0ZW0oaXRlbVRvQWRkKSB7XG4gICAgY29uc3QgeyBpdGVtIH0gPSB0aGlzLmZpbmRJdGVtKGl0ZW1Ub0FkZCk7IFxuICAgIGl0ZW1cbiAgICAgID8gaXRlbS5xdWFudGl0eSA9IE1hdGgubWluKDEwLCBpdGVtLnF1YW50aXR5ICsxKVxuICAgICAgOiB0aGlzLml0ZW1zLnB1c2goeyAuLi5pdGVtVG9BZGQsIHF1YW50aXR5OiAxIH0pXG4gIH0sXG5cbiAgcmVtb3ZlSXRlbShpdGVtVG9SZW1vdmUsIHdpcGVPdXQgPSBmYWxzZSkge1xuICAgIGNvbnN0IHsgaXRlbSwgaXRlbUluZGV4IH0gPSB0aGlzLmZpbmRJdGVtKGl0ZW1Ub1JlbW92ZSk7XG4gICAgbGV0IHVwZGF0ZWRXaXBlT3V0ID0gd2lwZU91dCB8fCBpdGVtPy5xdWFudGl0eSA9PT0gMTtcbiAgICBpZiAoaXRlbSAmJiAhdXBkYXRlZFdpcGVPdXQpIGl0ZW0ucXVhbnRpdHkgLT0gMTtcbiAgICBpZiAoaXRlbSAmJiB1cGRhdGVkV2lwZU91dCkgdGhpcy5pdGVtcy5zcGxpY2UoaXRlbUluZGV4LCAxKTtcbiAgfSxcblxuICB3aXBlQ2FydCgpIHtcbiAgICB0aGlzLml0ZW1zID0gW107XG4gIH1cbn0pIiwgImV4cG9ydCBkZWZhdWx0ICgpID0+ICh7XG4gIGNhcnQ6IG51bGwsXG5cbiAgaW5pdCgpIHtcbiAgICB0aGlzLmNhcnQgPSB0aGlzLiRzdG9yZS5jYXJ0U3RvcmU7XG4gIH0sXG59KSIsICJleHBvcnQgZGVmYXVsdCAoKSA9PiAoe1xuXG4gIHRvdGFsOiAwLFxuICB0aW1lb3V0SWQ6IG51bGwsXG5cbiAgaW5pdCgpIHtcbiAgICBjb25zdCBnbG93Q2xhc3MgPSBcImJnLWdyZWVuLTIwMFwiO1xuICAgIHRoaXMudG90YWwgPSB0aGlzLiRzdG9yZS5jYXJ0U3RvcmUuY2FydFRvdGFsO1xuICAgIFxuICAgIHRoaXMuJHdhdGNoKFwiJHN0b3JlLmNhcnRTdG9yZS5pdGVtc1wiLCAoKSA9PiB7XG4gICAgICB0aGlzLnRvdGFsID0gdGhpcy4kc3RvcmUuY2FydFN0b3JlLmNhcnRUb3RhbDtcbiAgICAgIHRoaXMuJGVsLmNsYXNzTGlzdC5hZGQoZ2xvd0NsYXNzKTtcbiAgICAgIHRoaXMudGltZW91dElkID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuJGVsLmNsYXNzTGlzdC5yZW1vdmUoZ2xvd0NsYXNzKTtcbiAgICAgIH0sIDMwMCk7XG4gICAgfSlcbiAgfSxcblxuICBkZXN0cm95KCkge1xuICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXRJZClcbiAgfVxufSkiLCAiZXhwb3J0IGRlZmF1bHQgKCkgPT4gKHtcbiAgb3BlbjogZmFsc2UsXG4gIGluaXQoKSB7XG4gICAgbmV3IFBhZ2VmaW5kVUkoeyBlbGVtZW50OiAnI3NlYXJjaCcsIHNob3dTdWJSZXN1bHRzOiBmYWxzZSwgc2hvd0ltYWdlczogdHJ1ZSwgaGlnaGxpZ2h0UGFyYW06ICdoaWdobGlnaHQnIH0pOyBcbiAgICB0aGlzLiR3YXRjaCgnb3BlbicsIChvcGVuKSA9PiB7IFxuICAgICAgdGhpcy4kbmV4dFRpY2soKCkgPT4gb3BlbiAmJiB0aGlzLiRyZWZzWydzZWFyY2gtY29tcG9uZW50J10uZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2lucHV0JylbMF0uZm9jdXMoKSlcbiAgICB9KVxuICB9LFxuICB0cmlnZ2VyOiB7XG4gICAgW1wieC1zaG93XCJdKCkgeyByZXR1cm4gdGhpcy5vcGVuIH0sXG4gICAgW1wiQGtleWRvd24ud2luZG93LmVzY2FwZVwiXSgpIHsgdGhpcy5vcGVuID0gZmFsc2UgfSxcbiAgICBbXCJAY2FudmFzLW9wZW4ud2luZG93XCJdKCkgeyB0aGlzLm9wZW4gPSB0cnVlIH1cbiAgfVxufSkiLCAiZXhwb3J0IGRlZmF1bHQgKGR1cmF0aW9uT2ZBbmltYXRpb24gPSA1MDAwKSA9PiAoe1xuICBcbiAgZHVyYXRpb25PZkFuaW1hdGlvbixcbiAgaW50ZXJ2YWxJRDogbnVsbCxcbiAgY3VycmVudFNsaWRlOiAwLFxuICBudW1iZXJPZlNsaWRlczogMCxcbiAgYmFzZVNjcm9sbDogMCxcblxuICBpbml0KCkge1xuICAgIGNvbnN0IHNsaWRlciA9IHRoaXMuJHJlZnMuc2xpZGVyO1xuICAgIHRoaXMubnVtYmVyT2ZTbGlkZXMgPSBzbGlkZXIuY2hpbGRyZW4ubGVuZ3RoO1xuICAgIHRoaXMuYmFzZVNjcm9sbCA9IHNsaWRlci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aDtcbiAgICB0aGlzLiR3YXRjaChcImN1cnJlbnRTbGlkZVwiLCAodmFsdWUpID0+IHtcbiAgICAgIHNsaWRlci5zY3JvbGxUbyh7IGxlZnQ6IHZhbHVlICogdGhpcy5iYXNlU2Nyb2xsLCBiZWhhdmlvcjogXCJzbW9vdGhcIiB9KTtcbiAgICB9KTtcbiAgICB0aGlzLnN0YXJ0QXV0b1NsaWRlKCk7XG4gIH0sXG5cbiAgZGVzdHJveSgpIHtcbiAgICB0aGlzLnN0b3BBdXRvU2xpZGUoKTtcbiAgfSxcblxuICBzdGFydEF1dG9TbGlkZSgpIHtcbiAgICB0aGlzLmludGVydmFsSUQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7IHRoaXMubmV4dCgpfSwgdGhpcy5kdXJhdGlvbk9mQW5pbWF0aW9uKTtcbiAgfSxcblxuICBzdG9wQXV0b1NsaWRlKCkge1xuICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbElEKTtcbiAgfSxcblxuICBnb1RvU2xpZGUoaW5kZXgpIHtcbiAgICB0aGlzLmN1cnJlbnRTbGlkZSA9IGluZGV4O1xuICB9LFxuXG4gIG5leHQoKSB7XG4gICAgdGhpcy5jdXJyZW50U2xpZGUgPSB0aGlzLmN1cnJlbnRTbGlkZSArIDEgPT09IHRoaXMubnVtYmVyT2ZTbGlkZXMgXG4gICAgICA/IDAgXG4gICAgICA6ICsrdGhpcy5jdXJyZW50U2xpZGU7XG4gIH0sXG5cbiAgcHJldigpIHtcbiAgICB0aGlzLmN1cnJlbnRTbGlkZSA9IHRoaXMuY3VycmVudFNsaWRlID09PSAwIFxuICAgICAgPyB0aGlzLm51bWJlck9mU2xpZGVzIC0gMSBcbiAgICAgIDogLS10aGlzLmN1cnJlbnRTbGlkZTtcbiAgfSxcbn0pO1xuIiwgImV4cG9ydCBjb25zdCBqc29uRW5jID0ge1xuICBvbkV2ZW50OiBmdW5jdGlvbiAobmFtZSwgZXZ0KSB7XG4gICAgaWYgKG5hbWUgPT09IFwiaHRteDpjb25maWdSZXF1ZXN0XCIpIHtcbiAgICAgIGV2dC5kZXRhaWwuaGVhZGVyc1tcIkNvbnRlbnQtVHlwZVwiXSA9IFwiYXBwbGljYXRpb24vanNvblwiO1xuICAgIH1cbiAgfSxcbiAgZW5jb2RlUGFyYW1ldGVyczogZnVuY3Rpb24gKHhociwgcGFyYW1ldGVycywgZWx0KSB7XG4gICAgeGhyLm92ZXJyaWRlTWltZVR5cGUoXCJ0ZXh0L2pzb25cIik7XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHBhcmFtZXRlcnMpO1xuICB9LFxufTtcbiIsICJleHBvcnQgY29uc3QgZm9ybWF0Q3VycmVuY3kgPSAoZWwsIHsgZXhwcmVzc2lvbiB9LCB7IGV2YWx1YXRlTGF0ZXIsIGVmZmVjdCB9KSA9PiB7XG4gIGNvbnN0IGZvcm1hdEN1cnJlbmN5ID0gZXZhbHVhdGVMYXRlcihleHByZXNzaW9uKTtcblxuICBlZmZlY3QoKCkgPT4ge1xuICAgIGZvcm1hdEN1cnJlbmN5KGFtb3VudCA9PiB7XG4gICAgICBjb25zdCBmb3JtYXR0ZWRBbW91bnQgPSB0eXBlb2YgYW1vdW50ID09IFwibnVtYmVyXCJcbiAgICAgICAgPyBgJCR7YW1vdW50LnRvRml4ZWQoMil9YFxuICAgICAgICA6IGFtb3VudDtcbiAgICAgIGVsLmlubmVySFRNTCA9IGZvcm1hdHRlZEFtb3VudDtcbiAgICB9KVxuICAgIFxuICB9KTtcbn0iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUEsT0FBQyxTQUFTQSxJQUFFQyxJQUFFO0FB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QVUsY0FBTSxDQUFDO0FBQzNDLGlCQUFPLEtBQUssV0FBVyxlQUFPO0FBQzlCLGlCQUFPLEtBQUssa0JBQWtCLHNCQUFjO0FBQzVDLGlCQUFPLEtBQUssYUFBYSxpQkFBUztBQUNsQyxpQkFBTyxLQUFLLGVBQWUsbUJBQVc7QUFDdEMsaUJBQU8sTUFBTTsiLAogICJuYW1lcyI6IFsiZSIsICJ0IiwgInIiLCAibiIsICJpIiwgImEiLCAibyIsICJzIiwgImwiLCAidSIsICJmIiwgImMiLCAiaCIsICJ2IiwgIk0iLCAiWCIsICJkIiwgIkQiLCAiVSIsICJnIiwgIm0iLCAicCIsICJ4IiwgIkIiLCAiRiIsICJWIiwgInkiLCAiYiIsICJ3IiwgImoiLCAiUyIsICJFIiwgIl8iLCAiQyIsICJSIiwgInoiLCAiJCIsICJUIiwgIk8iLCAiVyIsICJxIiwgIkgiLCAiRyIsICJKIiwgIkwiLCAiQSIsICJaIiwgIk4iLCAiSyIsICJJIiwgImsiLCAiUCIsICJZIiwgImkiLCAiZSIsICJhIiwgImIiLCAiXyIsICJjIiwgImwiLCAidiIsICJyIiwgInNyY19kZWZhdWx0IiwgIkFscGluZSIsICJlIiwgImdldCIsICJzZXQiLCAibW9kdWxlX2RlZmF1bHQiLCAiQWxwaW5lIiwgImEiLCAiaSIsICJldmFsdWF0ZUxhdGVyIiwgImVmZmVjdCIsICJmb3JtYXRDdXJyZW5jeSIsICJIdG14IiwgIm1vZHVsZV9kZWZhdWx0Il0KfQo=
