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

  // assets/static/js/main.js
  var import_htmx = __toESM(require_htmx_min());

  // assets/static/js/cartStore.js
  var cartStore_default = (Alpine2) => ({
    items: Alpine2.$persist([]),
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
        setTimeout(() => {
          this.$el.classList.remove(glowClass);
        }, 300);
      });
    },
    destroy() {
      clearTimeout(this.timeoutId);
    }
  });

  // assets/static/js/main.js
  window.Htmx = import_htmx.default;
  import_htmx.default.defineExtension("json-enc", jsonEnc);
  window.Alpine = module_default;
  module_default.directive("currency", formatCurrency);
  module_default.plugin(module_default2);
  module_default.store("cartStore", cartStore_default(module_default));
  module_default.data("useCart", useCart_default);
  module_default.data("useCartSummary", useCartSummary_default);
  module_default.start();
})();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2h0bXgub3JnL2Rpc3QvaHRteC5taW4uanMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2FscGluZWpzL2Rpc3QvbW9kdWxlLmVzbS5qcyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQGFscGluZWpzL3BlcnNpc3QvZGlzdC9tb2R1bGUuZXNtLmpzIiwgIm1haW4uanMiLCAiY2FydFN0b3JlLmpzIiwgImN1c3RvbS1hbHBpbmUuanMiLCAiY3VzdG9tLWh0bXguanMiLCAidXNlQ2FydC5qcyIsICJ1c2VDYXJ0U3VtbWFyeS5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiKGZ1bmN0aW9uKGUsdCl7aWYodHlwZW9mIGRlZmluZT09PVwiZnVuY3Rpb25cIiYmZGVmaW5lLmFtZCl7ZGVmaW5lKFtdLHQpfWVsc2UgaWYodHlwZW9mIG1vZHVsZT09PVwib2JqZWN0XCImJm1vZHVsZS5leHBvcnRzKXttb2R1bGUuZXhwb3J0cz10KCl9ZWxzZXtlLmh0bXg9ZS5odG14fHx0KCl9fSkodHlwZW9mIHNlbGYhPT1cInVuZGVmaW5lZFwiP3NlbGY6dGhpcyxmdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO3ZhciBRPXtvbkxvYWQ6Rixwcm9jZXNzOnp0LG9uOmRlLG9mZjpnZSx0cmlnZ2VyOmNlLGFqYXg6TnIsZmluZDpDLGZpbmRBbGw6ZixjbG9zZXN0OnYsdmFsdWVzOmZ1bmN0aW9uKGUsdCl7dmFyIHI9ZHIoZSx0fHxcInBvc3RcIik7cmV0dXJuIHIudmFsdWVzfSxyZW1vdmU6XyxhZGRDbGFzczp6LHJlbW92ZUNsYXNzOm4sdG9nZ2xlQ2xhc3M6JCx0YWtlQ2xhc3M6VyxkZWZpbmVFeHRlbnNpb246VXIscmVtb3ZlRXh0ZW5zaW9uOkJyLGxvZ0FsbDpWLGxvZ05vbmU6aixsb2dnZXI6bnVsbCxjb25maWc6e2hpc3RvcnlFbmFibGVkOnRydWUsaGlzdG9yeUNhY2hlU2l6ZToxMCxyZWZyZXNoT25IaXN0b3J5TWlzczpmYWxzZSxkZWZhdWx0U3dhcFN0eWxlOlwiaW5uZXJIVE1MXCIsZGVmYXVsdFN3YXBEZWxheTowLGRlZmF1bHRTZXR0bGVEZWxheToyMCxpbmNsdWRlSW5kaWNhdG9yU3R5bGVzOnRydWUsaW5kaWNhdG9yQ2xhc3M6XCJodG14LWluZGljYXRvclwiLHJlcXVlc3RDbGFzczpcImh0bXgtcmVxdWVzdFwiLGFkZGVkQ2xhc3M6XCJodG14LWFkZGVkXCIsc2V0dGxpbmdDbGFzczpcImh0bXgtc2V0dGxpbmdcIixzd2FwcGluZ0NsYXNzOlwiaHRteC1zd2FwcGluZ1wiLGFsbG93RXZhbDp0cnVlLGFsbG93U2NyaXB0VGFnczp0cnVlLGlubGluZVNjcmlwdE5vbmNlOlwiXCIsYXR0cmlidXRlc1RvU2V0dGxlOltcImNsYXNzXCIsXCJzdHlsZVwiLFwid2lkdGhcIixcImhlaWdodFwiXSx3aXRoQ3JlZGVudGlhbHM6ZmFsc2UsdGltZW91dDowLHdzUmVjb25uZWN0RGVsYXk6XCJmdWxsLWppdHRlclwiLHdzQmluYXJ5VHlwZTpcImJsb2JcIixkaXNhYmxlU2VsZWN0b3I6XCJbaHgtZGlzYWJsZV0sIFtkYXRhLWh4LWRpc2FibGVdXCIsdXNlVGVtcGxhdGVGcmFnbWVudHM6ZmFsc2Usc2Nyb2xsQmVoYXZpb3I6XCJzbW9vdGhcIixkZWZhdWx0Rm9jdXNTY3JvbGw6ZmFsc2UsZ2V0Q2FjaGVCdXN0ZXJQYXJhbTpmYWxzZSxnbG9iYWxWaWV3VHJhbnNpdGlvbnM6ZmFsc2UsbWV0aG9kc1RoYXRVc2VVcmxQYXJhbXM6W1wiZ2V0XCJdLHNlbGZSZXF1ZXN0c09ubHk6ZmFsc2UsaWdub3JlVGl0bGU6ZmFsc2Usc2Nyb2xsSW50b1ZpZXdPbkJvb3N0OnRydWUsdHJpZ2dlclNwZWNzQ2FjaGU6bnVsbH0scGFyc2VJbnRlcnZhbDpkLF86dCxjcmVhdGVFdmVudFNvdXJjZTpmdW5jdGlvbihlKXtyZXR1cm4gbmV3IEV2ZW50U291cmNlKGUse3dpdGhDcmVkZW50aWFsczp0cnVlfSl9LGNyZWF0ZVdlYlNvY2tldDpmdW5jdGlvbihlKXt2YXIgdD1uZXcgV2ViU29ja2V0KGUsW10pO3QuYmluYXJ5VHlwZT1RLmNvbmZpZy53c0JpbmFyeVR5cGU7cmV0dXJuIHR9LHZlcnNpb246XCIxLjkuMTBcIn07dmFyIHI9e2FkZFRyaWdnZXJIYW5kbGVyOkx0LGJvZHlDb250YWluczpzZSxjYW5BY2Nlc3NMb2NhbFN0b3JhZ2U6VSxmaW5kVGhpc0VsZW1lbnQ6eGUsZmlsdGVyVmFsdWVzOnlyLGhhc0F0dHJpYnV0ZTpvLGdldEF0dHJpYnV0ZVZhbHVlOnRlLGdldENsb3Nlc3RBdHRyaWJ1dGVWYWx1ZTpuZSxnZXRDbG9zZXN0TWF0Y2g6YyxnZXRFeHByZXNzaW9uVmFyczpIcixnZXRIZWFkZXJzOnhyLGdldElucHV0VmFsdWVzOmRyLGdldEludGVybmFsRGF0YTphZSxnZXRTd2FwU3BlY2lmaWNhdGlvbjp3cixnZXRUcmlnZ2VyU3BlY3M6aXQsZ2V0VGFyZ2V0OnllLG1ha2VGcmFnbWVudDpsLG1lcmdlT2JqZWN0czpsZSxtYWtlU2V0dGxlSW5mbzpULG9vYlN3YXA6RWUscXVlcnlTZWxlY3RvckV4dDp1ZSxzZWxlY3RBbmRTd2FwOmplLHNldHRsZUltbWVkaWF0ZWx5Om5yLHNob3VsZENhbmNlbDp1dCx0cmlnZ2VyRXZlbnQ6Y2UsdHJpZ2dlckVycm9yRXZlbnQ6ZmUsd2l0aEV4dGVuc2lvbnM6Un07dmFyIHc9W1wiZ2V0XCIsXCJwb3N0XCIsXCJwdXRcIixcImRlbGV0ZVwiLFwicGF0Y2hcIl07dmFyIGk9dy5tYXAoZnVuY3Rpb24oZSl7cmV0dXJuXCJbaHgtXCIrZStcIl0sIFtkYXRhLWh4LVwiK2UrXCJdXCJ9KS5qb2luKFwiLCBcIik7dmFyIFM9ZShcImhlYWRcIikscT1lKFwidGl0bGVcIiksSD1lKFwic3ZnXCIsdHJ1ZSk7ZnVuY3Rpb24gZShlLHQ9ZmFsc2Upe3JldHVybiBuZXcgUmVnRXhwKGA8JHtlfShcXFxcc1tePl0qPnw+KShbXFxcXHNcXFxcU10qPyk8XFxcXC8ke2V9PmAsdD9cImdpbVwiOlwiaW1cIil9ZnVuY3Rpb24gZChlKXtpZihlPT11bmRlZmluZWQpe3JldHVybiB1bmRlZmluZWR9bGV0IHQ9TmFOO2lmKGUuc2xpY2UoLTIpPT1cIm1zXCIpe3Q9cGFyc2VGbG9hdChlLnNsaWNlKDAsLTIpKX1lbHNlIGlmKGUuc2xpY2UoLTEpPT1cInNcIil7dD1wYXJzZUZsb2F0KGUuc2xpY2UoMCwtMSkpKjFlM31lbHNlIGlmKGUuc2xpY2UoLTEpPT1cIm1cIil7dD1wYXJzZUZsb2F0KGUuc2xpY2UoMCwtMSkpKjFlMyo2MH1lbHNle3Q9cGFyc2VGbG9hdChlKX1yZXR1cm4gaXNOYU4odCk/dW5kZWZpbmVkOnR9ZnVuY3Rpb24gZWUoZSx0KXtyZXR1cm4gZS5nZXRBdHRyaWJ1dGUmJmUuZ2V0QXR0cmlidXRlKHQpfWZ1bmN0aW9uIG8oZSx0KXtyZXR1cm4gZS5oYXNBdHRyaWJ1dGUmJihlLmhhc0F0dHJpYnV0ZSh0KXx8ZS5oYXNBdHRyaWJ1dGUoXCJkYXRhLVwiK3QpKX1mdW5jdGlvbiB0ZShlLHQpe3JldHVybiBlZShlLHQpfHxlZShlLFwiZGF0YS1cIit0KX1mdW5jdGlvbiB1KGUpe3JldHVybiBlLnBhcmVudEVsZW1lbnR9ZnVuY3Rpb24gcmUoKXtyZXR1cm4gZG9jdW1lbnR9ZnVuY3Rpb24gYyhlLHQpe3doaWxlKGUmJiF0KGUpKXtlPXUoZSl9cmV0dXJuIGU/ZTpudWxsfWZ1bmN0aW9uIEwoZSx0LHIpe3ZhciBuPXRlKHQscik7dmFyIGk9dGUodCxcImh4LWRpc2luaGVyaXRcIik7aWYoZSE9PXQmJmkmJihpPT09XCIqXCJ8fGkuc3BsaXQoXCIgXCIpLmluZGV4T2Yocik+PTApKXtyZXR1cm5cInVuc2V0XCJ9ZWxzZXtyZXR1cm4gbn19ZnVuY3Rpb24gbmUodCxyKXt2YXIgbj1udWxsO2ModCxmdW5jdGlvbihlKXtyZXR1cm4gbj1MKHQsZSxyKX0pO2lmKG4hPT1cInVuc2V0XCIpe3JldHVybiBufX1mdW5jdGlvbiBoKGUsdCl7dmFyIHI9ZS5tYXRjaGVzfHxlLm1hdGNoZXNTZWxlY3Rvcnx8ZS5tc01hdGNoZXNTZWxlY3Rvcnx8ZS5tb3pNYXRjaGVzU2VsZWN0b3J8fGUud2Via2l0TWF0Y2hlc1NlbGVjdG9yfHxlLm9NYXRjaGVzU2VsZWN0b3I7cmV0dXJuIHImJnIuY2FsbChlLHQpfWZ1bmN0aW9uIEEoZSl7dmFyIHQ9LzwoW2Etel1bXlxcL1xcMD5cXHgyMFxcdFxcclxcblxcZl0qKS9pO3ZhciByPXQuZXhlYyhlKTtpZihyKXtyZXR1cm4gclsxXS50b0xvd2VyQ2FzZSgpfWVsc2V7cmV0dXJuXCJcIn19ZnVuY3Rpb24gYShlLHQpe3ZhciByPW5ldyBET01QYXJzZXI7dmFyIG49ci5wYXJzZUZyb21TdHJpbmcoZSxcInRleHQvaHRtbFwiKTt2YXIgaT1uLmJvZHk7d2hpbGUodD4wKXt0LS07aT1pLmZpcnN0Q2hpbGR9aWYoaT09bnVsbCl7aT1yZSgpLmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKX1yZXR1cm4gaX1mdW5jdGlvbiBOKGUpe3JldHVybi88Ym9keS8udGVzdChlKX1mdW5jdGlvbiBsKGUpe3ZhciB0PSFOKGUpO3ZhciByPUEoZSk7dmFyIG49ZTtpZihyPT09XCJoZWFkXCIpe249bi5yZXBsYWNlKFMsXCJcIil9aWYoUS5jb25maWcudXNlVGVtcGxhdGVGcmFnbWVudHMmJnQpe3ZhciBpPWEoXCI8Ym9keT48dGVtcGxhdGU+XCIrbitcIjwvdGVtcGxhdGU+PC9ib2R5PlwiLDApO3JldHVybiBpLnF1ZXJ5U2VsZWN0b3IoXCJ0ZW1wbGF0ZVwiKS5jb250ZW50fXN3aXRjaChyKXtjYXNlXCJ0aGVhZFwiOmNhc2VcInRib2R5XCI6Y2FzZVwidGZvb3RcIjpjYXNlXCJjb2xncm91cFwiOmNhc2VcImNhcHRpb25cIjpyZXR1cm4gYShcIjx0YWJsZT5cIituK1wiPC90YWJsZT5cIiwxKTtjYXNlXCJjb2xcIjpyZXR1cm4gYShcIjx0YWJsZT48Y29sZ3JvdXA+XCIrbitcIjwvY29sZ3JvdXA+PC90YWJsZT5cIiwyKTtjYXNlXCJ0clwiOnJldHVybiBhKFwiPHRhYmxlPjx0Ym9keT5cIituK1wiPC90Ym9keT48L3RhYmxlPlwiLDIpO2Nhc2VcInRkXCI6Y2FzZVwidGhcIjpyZXR1cm4gYShcIjx0YWJsZT48dGJvZHk+PHRyPlwiK24rXCI8L3RyPjwvdGJvZHk+PC90YWJsZT5cIiwzKTtjYXNlXCJzY3JpcHRcIjpjYXNlXCJzdHlsZVwiOnJldHVybiBhKFwiPGRpdj5cIituK1wiPC9kaXY+XCIsMSk7ZGVmYXVsdDpyZXR1cm4gYShuLDApfX1mdW5jdGlvbiBpZShlKXtpZihlKXtlKCl9fWZ1bmN0aW9uIEkoZSx0KXtyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGUpPT09XCJbb2JqZWN0IFwiK3QrXCJdXCJ9ZnVuY3Rpb24gayhlKXtyZXR1cm4gSShlLFwiRnVuY3Rpb25cIil9ZnVuY3Rpb24gUChlKXtyZXR1cm4gSShlLFwiT2JqZWN0XCIpfWZ1bmN0aW9uIGFlKGUpe3ZhciB0PVwiaHRteC1pbnRlcm5hbC1kYXRhXCI7dmFyIHI9ZVt0XTtpZighcil7cj1lW3RdPXt9fXJldHVybiByfWZ1bmN0aW9uIE0oZSl7dmFyIHQ9W107aWYoZSl7Zm9yKHZhciByPTA7cjxlLmxlbmd0aDtyKyspe3QucHVzaChlW3JdKX19cmV0dXJuIHR9ZnVuY3Rpb24gb2UoZSx0KXtpZihlKXtmb3IodmFyIHI9MDtyPGUubGVuZ3RoO3IrKyl7dChlW3JdKX19fWZ1bmN0aW9uIFgoZSl7dmFyIHQ9ZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTt2YXIgcj10LnRvcDt2YXIgbj10LmJvdHRvbTtyZXR1cm4gcjx3aW5kb3cuaW5uZXJIZWlnaHQmJm4+PTB9ZnVuY3Rpb24gc2UoZSl7aWYoZS5nZXRSb290Tm9kZSYmZS5nZXRSb290Tm9kZSgpaW5zdGFuY2VvZiB3aW5kb3cuU2hhZG93Um9vdCl7cmV0dXJuIHJlKCkuYm9keS5jb250YWlucyhlLmdldFJvb3ROb2RlKCkuaG9zdCl9ZWxzZXtyZXR1cm4gcmUoKS5ib2R5LmNvbnRhaW5zKGUpfX1mdW5jdGlvbiBEKGUpe3JldHVybiBlLnRyaW0oKS5zcGxpdCgvXFxzKy8pfWZ1bmN0aW9uIGxlKGUsdCl7Zm9yKHZhciByIGluIHQpe2lmKHQuaGFzT3duUHJvcGVydHkocikpe2Vbcl09dFtyXX19cmV0dXJuIGV9ZnVuY3Rpb24gRShlKXt0cnl7cmV0dXJuIEpTT04ucGFyc2UoZSl9Y2F0Y2goZSl7YihlKTtyZXR1cm4gbnVsbH19ZnVuY3Rpb24gVSgpe3ZhciBlPVwiaHRteDpsb2NhbFN0b3JhZ2VUZXN0XCI7dHJ5e2xvY2FsU3RvcmFnZS5zZXRJdGVtKGUsZSk7bG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oZSk7cmV0dXJuIHRydWV9Y2F0Y2goZSl7cmV0dXJuIGZhbHNlfX1mdW5jdGlvbiBCKHQpe3RyeXt2YXIgZT1uZXcgVVJMKHQpO2lmKGUpe3Q9ZS5wYXRobmFtZStlLnNlYXJjaH1pZighL15cXC8kLy50ZXN0KHQpKXt0PXQucmVwbGFjZSgvXFwvKyQvLFwiXCIpfXJldHVybiB0fWNhdGNoKGUpe3JldHVybiB0fX1mdW5jdGlvbiB0KGUpe3JldHVybiBUcihyZSgpLmJvZHksZnVuY3Rpb24oKXtyZXR1cm4gZXZhbChlKX0pfWZ1bmN0aW9uIEYodCl7dmFyIGU9US5vbihcImh0bXg6bG9hZFwiLGZ1bmN0aW9uKGUpe3QoZS5kZXRhaWwuZWx0KX0pO3JldHVybiBlfWZ1bmN0aW9uIFYoKXtRLmxvZ2dlcj1mdW5jdGlvbihlLHQscil7aWYoY29uc29sZSl7Y29uc29sZS5sb2codCxlLHIpfX19ZnVuY3Rpb24gaigpe1EubG9nZ2VyPW51bGx9ZnVuY3Rpb24gQyhlLHQpe2lmKHQpe3JldHVybiBlLnF1ZXJ5U2VsZWN0b3IodCl9ZWxzZXtyZXR1cm4gQyhyZSgpLGUpfX1mdW5jdGlvbiBmKGUsdCl7aWYodCl7cmV0dXJuIGUucXVlcnlTZWxlY3RvckFsbCh0KX1lbHNle3JldHVybiBmKHJlKCksZSl9fWZ1bmN0aW9uIF8oZSx0KXtlPWcoZSk7aWYodCl7c2V0VGltZW91dChmdW5jdGlvbigpe18oZSk7ZT1udWxsfSx0KX1lbHNle2UucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChlKX19ZnVuY3Rpb24geihlLHQscil7ZT1nKGUpO2lmKHIpe3NldFRpbWVvdXQoZnVuY3Rpb24oKXt6KGUsdCk7ZT1udWxsfSxyKX1lbHNle2UuY2xhc3NMaXN0JiZlLmNsYXNzTGlzdC5hZGQodCl9fWZ1bmN0aW9uIG4oZSx0LHIpe2U9ZyhlKTtpZihyKXtzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7bihlLHQpO2U9bnVsbH0scil9ZWxzZXtpZihlLmNsYXNzTGlzdCl7ZS5jbGFzc0xpc3QucmVtb3ZlKHQpO2lmKGUuY2xhc3NMaXN0Lmxlbmd0aD09PTApe2UucmVtb3ZlQXR0cmlidXRlKFwiY2xhc3NcIil9fX19ZnVuY3Rpb24gJChlLHQpe2U9ZyhlKTtlLmNsYXNzTGlzdC50b2dnbGUodCl9ZnVuY3Rpb24gVyhlLHQpe2U9ZyhlKTtvZShlLnBhcmVudEVsZW1lbnQuY2hpbGRyZW4sZnVuY3Rpb24oZSl7bihlLHQpfSk7eihlLHQpfWZ1bmN0aW9uIHYoZSx0KXtlPWcoZSk7aWYoZS5jbG9zZXN0KXtyZXR1cm4gZS5jbG9zZXN0KHQpfWVsc2V7ZG97aWYoZT09bnVsbHx8aChlLHQpKXtyZXR1cm4gZX19d2hpbGUoZT1lJiZ1KGUpKTtyZXR1cm4gbnVsbH19ZnVuY3Rpb24gcyhlLHQpe3JldHVybiBlLnN1YnN0cmluZygwLHQubGVuZ3RoKT09PXR9ZnVuY3Rpb24gRyhlLHQpe3JldHVybiBlLnN1YnN0cmluZyhlLmxlbmd0aC10Lmxlbmd0aCk9PT10fWZ1bmN0aW9uIEooZSl7dmFyIHQ9ZS50cmltKCk7aWYocyh0LFwiPFwiKSYmRyh0LFwiLz5cIikpe3JldHVybiB0LnN1YnN0cmluZygxLHQubGVuZ3RoLTIpfWVsc2V7cmV0dXJuIHR9fWZ1bmN0aW9uIFooZSx0KXtpZih0LmluZGV4T2YoXCJjbG9zZXN0IFwiKT09PTApe3JldHVyblt2KGUsSih0LnN1YnN0cig4KSkpXX1lbHNlIGlmKHQuaW5kZXhPZihcImZpbmQgXCIpPT09MCl7cmV0dXJuW0MoZSxKKHQuc3Vic3RyKDUpKSldfWVsc2UgaWYodD09PVwibmV4dFwiKXtyZXR1cm5bZS5uZXh0RWxlbWVudFNpYmxpbmddfWVsc2UgaWYodC5pbmRleE9mKFwibmV4dCBcIik9PT0wKXtyZXR1cm5bSyhlLEoodC5zdWJzdHIoNSkpKV19ZWxzZSBpZih0PT09XCJwcmV2aW91c1wiKXtyZXR1cm5bZS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nXX1lbHNlIGlmKHQuaW5kZXhPZihcInByZXZpb3VzIFwiKT09PTApe3JldHVybltZKGUsSih0LnN1YnN0cig5KSkpXX1lbHNlIGlmKHQ9PT1cImRvY3VtZW50XCIpe3JldHVybltkb2N1bWVudF19ZWxzZSBpZih0PT09XCJ3aW5kb3dcIil7cmV0dXJuW3dpbmRvd119ZWxzZSBpZih0PT09XCJib2R5XCIpe3JldHVybltkb2N1bWVudC5ib2R5XX1lbHNle3JldHVybiByZSgpLnF1ZXJ5U2VsZWN0b3JBbGwoSih0KSl9fXZhciBLPWZ1bmN0aW9uKGUsdCl7dmFyIHI9cmUoKS5xdWVyeVNlbGVjdG9yQWxsKHQpO2Zvcih2YXIgbj0wO248ci5sZW5ndGg7bisrKXt2YXIgaT1yW25dO2lmKGkuY29tcGFyZURvY3VtZW50UG9zaXRpb24oZSk9PT1Ob2RlLkRPQ1VNRU5UX1BPU0lUSU9OX1BSRUNFRElORyl7cmV0dXJuIGl9fX07dmFyIFk9ZnVuY3Rpb24oZSx0KXt2YXIgcj1yZSgpLnF1ZXJ5U2VsZWN0b3JBbGwodCk7Zm9yKHZhciBuPXIubGVuZ3RoLTE7bj49MDtuLS0pe3ZhciBpPXJbbl07aWYoaS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihlKT09PU5vZGUuRE9DVU1FTlRfUE9TSVRJT05fRk9MTE9XSU5HKXtyZXR1cm4gaX19fTtmdW5jdGlvbiB1ZShlLHQpe2lmKHQpe3JldHVybiBaKGUsdClbMF19ZWxzZXtyZXR1cm4gWihyZSgpLmJvZHksZSlbMF19fWZ1bmN0aW9uIGcoZSl7aWYoSShlLFwiU3RyaW5nXCIpKXtyZXR1cm4gQyhlKX1lbHNle3JldHVybiBlfX1mdW5jdGlvbiB2ZShlLHQscil7aWYoayh0KSl7cmV0dXJue3RhcmdldDpyZSgpLmJvZHksZXZlbnQ6ZSxsaXN0ZW5lcjp0fX1lbHNle3JldHVybnt0YXJnZXQ6ZyhlKSxldmVudDp0LGxpc3RlbmVyOnJ9fX1mdW5jdGlvbiBkZSh0LHIsbil7anIoZnVuY3Rpb24oKXt2YXIgZT12ZSh0LHIsbik7ZS50YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihlLmV2ZW50LGUubGlzdGVuZXIpfSk7dmFyIGU9ayhyKTtyZXR1cm4gZT9yOm59ZnVuY3Rpb24gZ2UodCxyLG4pe2pyKGZ1bmN0aW9uKCl7dmFyIGU9dmUodCxyLG4pO2UudGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoZS5ldmVudCxlLmxpc3RlbmVyKX0pO3JldHVybiBrKHIpP3I6bn12YXIgbWU9cmUoKS5jcmVhdGVFbGVtZW50KFwib3V0cHV0XCIpO2Z1bmN0aW9uIHBlKGUsdCl7dmFyIHI9bmUoZSx0KTtpZihyKXtpZihyPT09XCJ0aGlzXCIpe3JldHVyblt4ZShlLHQpXX1lbHNle3ZhciBuPVooZSxyKTtpZihuLmxlbmd0aD09PTApe2IoJ1RoZSBzZWxlY3RvciBcIicrcisnXCIgb24gJyt0K1wiIHJldHVybmVkIG5vIG1hdGNoZXMhXCIpO3JldHVyblttZV19ZWxzZXtyZXR1cm4gbn19fX1mdW5jdGlvbiB4ZShlLHQpe3JldHVybiBjKGUsZnVuY3Rpb24oZSl7cmV0dXJuIHRlKGUsdCkhPW51bGx9KX1mdW5jdGlvbiB5ZShlKXt2YXIgdD1uZShlLFwiaHgtdGFyZ2V0XCIpO2lmKHQpe2lmKHQ9PT1cInRoaXNcIil7cmV0dXJuIHhlKGUsXCJoeC10YXJnZXRcIil9ZWxzZXtyZXR1cm4gdWUoZSx0KX19ZWxzZXt2YXIgcj1hZShlKTtpZihyLmJvb3N0ZWQpe3JldHVybiByZSgpLmJvZHl9ZWxzZXtyZXR1cm4gZX19fWZ1bmN0aW9uIGJlKGUpe3ZhciB0PVEuY29uZmlnLmF0dHJpYnV0ZXNUb1NldHRsZTtmb3IodmFyIHI9MDtyPHQubGVuZ3RoO3IrKyl7aWYoZT09PXRbcl0pe3JldHVybiB0cnVlfX1yZXR1cm4gZmFsc2V9ZnVuY3Rpb24gd2UodCxyKXtvZSh0LmF0dHJpYnV0ZXMsZnVuY3Rpb24oZSl7aWYoIXIuaGFzQXR0cmlidXRlKGUubmFtZSkmJmJlKGUubmFtZSkpe3QucmVtb3ZlQXR0cmlidXRlKGUubmFtZSl9fSk7b2Uoci5hdHRyaWJ1dGVzLGZ1bmN0aW9uKGUpe2lmKGJlKGUubmFtZSkpe3Quc2V0QXR0cmlidXRlKGUubmFtZSxlLnZhbHVlKX19KX1mdW5jdGlvbiBTZShlLHQpe3ZhciByPUZyKHQpO2Zvcih2YXIgbj0wO248ci5sZW5ndGg7bisrKXt2YXIgaT1yW25dO3RyeXtpZihpLmlzSW5saW5lU3dhcChlKSl7cmV0dXJuIHRydWV9fWNhdGNoKGUpe2IoZSl9fXJldHVybiBlPT09XCJvdXRlckhUTUxcIn1mdW5jdGlvbiBFZShlLGksYSl7dmFyIHQ9XCIjXCIrZWUoaSxcImlkXCIpO3ZhciBvPVwib3V0ZXJIVE1MXCI7aWYoZT09PVwidHJ1ZVwiKXt9ZWxzZSBpZihlLmluZGV4T2YoXCI6XCIpPjApe289ZS5zdWJzdHIoMCxlLmluZGV4T2YoXCI6XCIpKTt0PWUuc3Vic3RyKGUuaW5kZXhPZihcIjpcIikrMSxlLmxlbmd0aCl9ZWxzZXtvPWV9dmFyIHI9cmUoKS5xdWVyeVNlbGVjdG9yQWxsKHQpO2lmKHIpe29lKHIsZnVuY3Rpb24oZSl7dmFyIHQ7dmFyIHI9aS5jbG9uZU5vZGUodHJ1ZSk7dD1yZSgpLmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTt0LmFwcGVuZENoaWxkKHIpO2lmKCFTZShvLGUpKXt0PXJ9dmFyIG49e3Nob3VsZFN3YXA6dHJ1ZSx0YXJnZXQ6ZSxmcmFnbWVudDp0fTtpZighY2UoZSxcImh0bXg6b29iQmVmb3JlU3dhcFwiLG4pKXJldHVybjtlPW4udGFyZ2V0O2lmKG5bXCJzaG91bGRTd2FwXCJdKXtGZShvLGUsZSx0LGEpfW9lKGEuZWx0cyxmdW5jdGlvbihlKXtjZShlLFwiaHRteDpvb2JBZnRlclN3YXBcIixuKX0pfSk7aS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGkpfWVsc2V7aS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGkpO2ZlKHJlKCkuYm9keSxcImh0bXg6b29iRXJyb3JOb1RhcmdldFwiLHtjb250ZW50Oml9KX1yZXR1cm4gZX1mdW5jdGlvbiBDZShlLHQscil7dmFyIG49bmUoZSxcImh4LXNlbGVjdC1vb2JcIik7aWYobil7dmFyIGk9bi5zcGxpdChcIixcIik7Zm9yKHZhciBhPTA7YTxpLmxlbmd0aDthKyspe3ZhciBvPWlbYV0uc3BsaXQoXCI6XCIsMik7dmFyIHM9b1swXS50cmltKCk7aWYocy5pbmRleE9mKFwiI1wiKT09PTApe3M9cy5zdWJzdHJpbmcoMSl9dmFyIGw9b1sxXXx8XCJ0cnVlXCI7dmFyIHU9dC5xdWVyeVNlbGVjdG9yKFwiI1wiK3MpO2lmKHUpe0VlKGwsdSxyKX19fW9lKGYodCxcIltoeC1zd2FwLW9vYl0sIFtkYXRhLWh4LXN3YXAtb29iXVwiKSxmdW5jdGlvbihlKXt2YXIgdD10ZShlLFwiaHgtc3dhcC1vb2JcIik7aWYodCE9bnVsbCl7RWUodCxlLHIpfX0pfWZ1bmN0aW9uIFJlKGUpe29lKGYoZSxcIltoeC1wcmVzZXJ2ZV0sIFtkYXRhLWh4LXByZXNlcnZlXVwiKSxmdW5jdGlvbihlKXt2YXIgdD10ZShlLFwiaWRcIik7dmFyIHI9cmUoKS5nZXRFbGVtZW50QnlJZCh0KTtpZihyIT1udWxsKXtlLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKHIsZSl9fSl9ZnVuY3Rpb24gVGUobyxlLHMpe29lKGUucXVlcnlTZWxlY3RvckFsbChcIltpZF1cIiksZnVuY3Rpb24oZSl7dmFyIHQ9ZWUoZSxcImlkXCIpO2lmKHQmJnQubGVuZ3RoPjApe3ZhciByPXQucmVwbGFjZShcIidcIixcIlxcXFwnXCIpO3ZhciBuPWUudGFnTmFtZS5yZXBsYWNlKFwiOlwiLFwiXFxcXDpcIik7dmFyIGk9by5xdWVyeVNlbGVjdG9yKG4rXCJbaWQ9J1wiK3IrXCInXVwiKTtpZihpJiZpIT09byl7dmFyIGE9ZS5jbG9uZU5vZGUoKTt3ZShlLGkpO3MudGFza3MucHVzaChmdW5jdGlvbigpe3dlKGUsYSl9KX19fSl9ZnVuY3Rpb24gT2UoZSl7cmV0dXJuIGZ1bmN0aW9uKCl7bihlLFEuY29uZmlnLmFkZGVkQ2xhc3MpO3p0KGUpO050KGUpO3FlKGUpO2NlKGUsXCJodG14OmxvYWRcIil9fWZ1bmN0aW9uIHFlKGUpe3ZhciB0PVwiW2F1dG9mb2N1c11cIjt2YXIgcj1oKGUsdCk/ZTplLnF1ZXJ5U2VsZWN0b3IodCk7aWYociE9bnVsbCl7ci5mb2N1cygpfX1mdW5jdGlvbiBtKGUsdCxyLG4pe1RlKGUscixuKTt3aGlsZShyLmNoaWxkTm9kZXMubGVuZ3RoPjApe3ZhciBpPXIuZmlyc3RDaGlsZDt6KGksUS5jb25maWcuYWRkZWRDbGFzcyk7ZS5pbnNlcnRCZWZvcmUoaSx0KTtpZihpLm5vZGVUeXBlIT09Tm9kZS5URVhUX05PREUmJmkubm9kZVR5cGUhPT1Ob2RlLkNPTU1FTlRfTk9ERSl7bi50YXNrcy5wdXNoKE9lKGkpKX19fWZ1bmN0aW9uIEhlKGUsdCl7dmFyIHI9MDt3aGlsZShyPGUubGVuZ3RoKXt0PSh0PDw1KS10K2UuY2hhckNvZGVBdChyKyspfDB9cmV0dXJuIHR9ZnVuY3Rpb24gTGUoZSl7dmFyIHQ9MDtpZihlLmF0dHJpYnV0ZXMpe2Zvcih2YXIgcj0wO3I8ZS5hdHRyaWJ1dGVzLmxlbmd0aDtyKyspe3ZhciBuPWUuYXR0cmlidXRlc1tyXTtpZihuLnZhbHVlKXt0PUhlKG4ubmFtZSx0KTt0PUhlKG4udmFsdWUsdCl9fX1yZXR1cm4gdH1mdW5jdGlvbiBBZShlKXt2YXIgdD1hZShlKTtpZih0Lm9uSGFuZGxlcnMpe2Zvcih2YXIgcj0wO3I8dC5vbkhhbmRsZXJzLmxlbmd0aDtyKyspe2NvbnN0IG49dC5vbkhhbmRsZXJzW3JdO2UucmVtb3ZlRXZlbnRMaXN0ZW5lcihuLmV2ZW50LG4ubGlzdGVuZXIpfWRlbGV0ZSB0Lm9uSGFuZGxlcnN9fWZ1bmN0aW9uIE5lKGUpe3ZhciB0PWFlKGUpO2lmKHQudGltZW91dCl7Y2xlYXJUaW1lb3V0KHQudGltZW91dCl9aWYodC53ZWJTb2NrZXQpe3Qud2ViU29ja2V0LmNsb3NlKCl9aWYodC5zc2VFdmVudFNvdXJjZSl7dC5zc2VFdmVudFNvdXJjZS5jbG9zZSgpfWlmKHQubGlzdGVuZXJJbmZvcyl7b2UodC5saXN0ZW5lckluZm9zLGZ1bmN0aW9uKGUpe2lmKGUub24pe2Uub24ucmVtb3ZlRXZlbnRMaXN0ZW5lcihlLnRyaWdnZXIsZS5saXN0ZW5lcil9fSl9QWUoZSk7b2UoT2JqZWN0LmtleXModCksZnVuY3Rpb24oZSl7ZGVsZXRlIHRbZV19KX1mdW5jdGlvbiBwKGUpe2NlKGUsXCJodG14OmJlZm9yZUNsZWFudXBFbGVtZW50XCIpO05lKGUpO2lmKGUuY2hpbGRyZW4pe29lKGUuY2hpbGRyZW4sZnVuY3Rpb24oZSl7cChlKX0pfX1mdW5jdGlvbiBJZSh0LGUscil7aWYodC50YWdOYW1lPT09XCJCT0RZXCIpe3JldHVybiBVZSh0LGUscil9ZWxzZXt2YXIgbjt2YXIgaT10LnByZXZpb3VzU2libGluZzttKHUodCksdCxlLHIpO2lmKGk9PW51bGwpe249dSh0KS5maXJzdENoaWxkfWVsc2V7bj1pLm5leHRTaWJsaW5nfXIuZWx0cz1yLmVsdHMuZmlsdGVyKGZ1bmN0aW9uKGUpe3JldHVybiBlIT10fSk7d2hpbGUobiYmbiE9PXQpe2lmKG4ubm9kZVR5cGU9PT1Ob2RlLkVMRU1FTlRfTk9ERSl7ci5lbHRzLnB1c2gobil9bj1uLm5leHRFbGVtZW50U2libGluZ31wKHQpO3UodCkucmVtb3ZlQ2hpbGQodCl9fWZ1bmN0aW9uIGtlKGUsdCxyKXtyZXR1cm4gbShlLGUuZmlyc3RDaGlsZCx0LHIpfWZ1bmN0aW9uIFBlKGUsdCxyKXtyZXR1cm4gbSh1KGUpLGUsdCxyKX1mdW5jdGlvbiBNZShlLHQscil7cmV0dXJuIG0oZSxudWxsLHQscil9ZnVuY3Rpb24gWGUoZSx0LHIpe3JldHVybiBtKHUoZSksZS5uZXh0U2libGluZyx0LHIpfWZ1bmN0aW9uIERlKGUsdCxyKXtwKGUpO3JldHVybiB1KGUpLnJlbW92ZUNoaWxkKGUpfWZ1bmN0aW9uIFVlKGUsdCxyKXt2YXIgbj1lLmZpcnN0Q2hpbGQ7bShlLG4sdCxyKTtpZihuKXt3aGlsZShuLm5leHRTaWJsaW5nKXtwKG4ubmV4dFNpYmxpbmcpO2UucmVtb3ZlQ2hpbGQobi5uZXh0U2libGluZyl9cChuKTtlLnJlbW92ZUNoaWxkKG4pfX1mdW5jdGlvbiBCZShlLHQscil7dmFyIG49cnx8bmUoZSxcImh4LXNlbGVjdFwiKTtpZihuKXt2YXIgaT1yZSgpLmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtvZSh0LnF1ZXJ5U2VsZWN0b3JBbGwobiksZnVuY3Rpb24oZSl7aS5hcHBlbmRDaGlsZChlKX0pO3Q9aX1yZXR1cm4gdH1mdW5jdGlvbiBGZShlLHQscixuLGkpe3N3aXRjaChlKXtjYXNlXCJub25lXCI6cmV0dXJuO2Nhc2VcIm91dGVySFRNTFwiOkllKHIsbixpKTtyZXR1cm47Y2FzZVwiYWZ0ZXJiZWdpblwiOmtlKHIsbixpKTtyZXR1cm47Y2FzZVwiYmVmb3JlYmVnaW5cIjpQZShyLG4saSk7cmV0dXJuO2Nhc2VcImJlZm9yZWVuZFwiOk1lKHIsbixpKTtyZXR1cm47Y2FzZVwiYWZ0ZXJlbmRcIjpYZShyLG4saSk7cmV0dXJuO2Nhc2VcImRlbGV0ZVwiOkRlKHIsbixpKTtyZXR1cm47ZGVmYXVsdDp2YXIgYT1Gcih0KTtmb3IodmFyIG89MDtvPGEubGVuZ3RoO28rKyl7dmFyIHM9YVtvXTt0cnl7dmFyIGw9cy5oYW5kbGVTd2FwKGUscixuLGkpO2lmKGwpe2lmKHR5cGVvZiBsLmxlbmd0aCE9PVwidW5kZWZpbmVkXCIpe2Zvcih2YXIgdT0wO3U8bC5sZW5ndGg7dSsrKXt2YXIgZj1sW3VdO2lmKGYubm9kZVR5cGUhPT1Ob2RlLlRFWFRfTk9ERSYmZi5ub2RlVHlwZSE9PU5vZGUuQ09NTUVOVF9OT0RFKXtpLnRhc2tzLnB1c2goT2UoZikpfX19cmV0dXJufX1jYXRjaChlKXtiKGUpfX1pZihlPT09XCJpbm5lckhUTUxcIil7VWUocixuLGkpfWVsc2V7RmUoUS5jb25maWcuZGVmYXVsdFN3YXBTdHlsZSx0LHIsbixpKX19fWZ1bmN0aW9uIFZlKGUpe2lmKGUuaW5kZXhPZihcIjx0aXRsZVwiKT4tMSl7dmFyIHQ9ZS5yZXBsYWNlKEgsXCJcIik7dmFyIHI9dC5tYXRjaChxKTtpZihyKXtyZXR1cm4gclsyXX19fWZ1bmN0aW9uIGplKGUsdCxyLG4saSxhKXtpLnRpdGxlPVZlKG4pO3ZhciBvPWwobik7aWYobyl7Q2UocixvLGkpO289QmUocixvLGEpO1JlKG8pO3JldHVybiBGZShlLHIsdCxvLGkpfX1mdW5jdGlvbiBfZShlLHQscil7dmFyIG49ZS5nZXRSZXNwb25zZUhlYWRlcih0KTtpZihuLmluZGV4T2YoXCJ7XCIpPT09MCl7dmFyIGk9RShuKTtmb3IodmFyIGEgaW4gaSl7aWYoaS5oYXNPd25Qcm9wZXJ0eShhKSl7dmFyIG89aVthXTtpZighUChvKSl7bz17dmFsdWU6b319Y2UocixhLG8pfX19ZWxzZXt2YXIgcz1uLnNwbGl0KFwiLFwiKTtmb3IodmFyIGw9MDtsPHMubGVuZ3RoO2wrKyl7Y2UocixzW2xdLnRyaW0oKSxbXSl9fX12YXIgemU9L1xccy87dmFyIHg9L1tcXHMsXS87dmFyICRlPS9bXyRhLXpBLVpdLzt2YXIgV2U9L1tfJGEtekEtWjAtOV0vO3ZhciBHZT1bJ1wiJyxcIidcIixcIi9cIl07dmFyIEplPS9bXlxcc10vO3ZhciBaZT0vW3soXS87dmFyIEtlPS9bfSldLztmdW5jdGlvbiBZZShlKXt2YXIgdD1bXTt2YXIgcj0wO3doaWxlKHI8ZS5sZW5ndGgpe2lmKCRlLmV4ZWMoZS5jaGFyQXQocikpKXt2YXIgbj1yO3doaWxlKFdlLmV4ZWMoZS5jaGFyQXQocisxKSkpe3IrK310LnB1c2goZS5zdWJzdHIobixyLW4rMSkpfWVsc2UgaWYoR2UuaW5kZXhPZihlLmNoYXJBdChyKSkhPT0tMSl7dmFyIGk9ZS5jaGFyQXQocik7dmFyIG49cjtyKys7d2hpbGUocjxlLmxlbmd0aCYmZS5jaGFyQXQocikhPT1pKXtpZihlLmNoYXJBdChyKT09PVwiXFxcXFwiKXtyKyt9cisrfXQucHVzaChlLnN1YnN0cihuLHItbisxKSl9ZWxzZXt2YXIgYT1lLmNoYXJBdChyKTt0LnB1c2goYSl9cisrfXJldHVybiB0fWZ1bmN0aW9uIFFlKGUsdCxyKXtyZXR1cm4gJGUuZXhlYyhlLmNoYXJBdCgwKSkmJmUhPT1cInRydWVcIiYmZSE9PVwiZmFsc2VcIiYmZSE9PVwidGhpc1wiJiZlIT09ciYmdCE9PVwiLlwifWZ1bmN0aW9uIGV0KGUsdCxyKXtpZih0WzBdPT09XCJbXCIpe3Quc2hpZnQoKTt2YXIgbj0xO3ZhciBpPVwiIHJldHVybiAoZnVuY3Rpb24oXCIrcitcIil7IHJldHVybiAoXCI7dmFyIGE9bnVsbDt3aGlsZSh0Lmxlbmd0aD4wKXt2YXIgbz10WzBdO2lmKG89PT1cIl1cIil7bi0tO2lmKG49PT0wKXtpZihhPT09bnVsbCl7aT1pK1widHJ1ZVwifXQuc2hpZnQoKTtpKz1cIil9KVwiO3RyeXt2YXIgcz1UcihlLGZ1bmN0aW9uKCl7cmV0dXJuIEZ1bmN0aW9uKGkpKCl9LGZ1bmN0aW9uKCl7cmV0dXJuIHRydWV9KTtzLnNvdXJjZT1pO3JldHVybiBzfWNhdGNoKGUpe2ZlKHJlKCkuYm9keSxcImh0bXg6c3ludGF4OmVycm9yXCIse2Vycm9yOmUsc291cmNlOml9KTtyZXR1cm4gbnVsbH19fWVsc2UgaWYobz09PVwiW1wiKXtuKyt9aWYoUWUobyxhLHIpKXtpKz1cIigoXCIrcitcIi5cIitvK1wiKSA/IChcIityK1wiLlwiK28rXCIpIDogKHdpbmRvdy5cIitvK1wiKSlcIn1lbHNle2k9aStvfWE9dC5zaGlmdCgpfX19ZnVuY3Rpb24geShlLHQpe3ZhciByPVwiXCI7d2hpbGUoZS5sZW5ndGg+MCYmIXQudGVzdChlWzBdKSl7cis9ZS5zaGlmdCgpfXJldHVybiByfWZ1bmN0aW9uIHR0KGUpe3ZhciB0O2lmKGUubGVuZ3RoPjAmJlplLnRlc3QoZVswXSkpe2Uuc2hpZnQoKTt0PXkoZSxLZSkudHJpbSgpO2Uuc2hpZnQoKX1lbHNle3Q9eShlLHgpfXJldHVybiB0fXZhciBydD1cImlucHV0LCB0ZXh0YXJlYSwgc2VsZWN0XCI7ZnVuY3Rpb24gbnQoZSx0LHIpe3ZhciBuPVtdO3ZhciBpPVllKHQpO2Rve3koaSxKZSk7dmFyIGE9aS5sZW5ndGg7dmFyIG89eShpLC9bLFxcW1xcc10vKTtpZihvIT09XCJcIil7aWYobz09PVwiZXZlcnlcIil7dmFyIHM9e3RyaWdnZXI6XCJldmVyeVwifTt5KGksSmUpO3MucG9sbEludGVydmFsPWQoeShpLC9bLFxcW1xcc10vKSk7eShpLEplKTt2YXIgbD1ldChlLGksXCJldmVudFwiKTtpZihsKXtzLmV2ZW50RmlsdGVyPWx9bi5wdXNoKHMpfWVsc2UgaWYoby5pbmRleE9mKFwic3NlOlwiKT09PTApe24ucHVzaCh7dHJpZ2dlcjpcInNzZVwiLHNzZUV2ZW50Om8uc3Vic3RyKDQpfSl9ZWxzZXt2YXIgdT17dHJpZ2dlcjpvfTt2YXIgbD1ldChlLGksXCJldmVudFwiKTtpZihsKXt1LmV2ZW50RmlsdGVyPWx9d2hpbGUoaS5sZW5ndGg+MCYmaVswXSE9PVwiLFwiKXt5KGksSmUpO3ZhciBmPWkuc2hpZnQoKTtpZihmPT09XCJjaGFuZ2VkXCIpe3UuY2hhbmdlZD10cnVlfWVsc2UgaWYoZj09PVwib25jZVwiKXt1Lm9uY2U9dHJ1ZX1lbHNlIGlmKGY9PT1cImNvbnN1bWVcIil7dS5jb25zdW1lPXRydWV9ZWxzZSBpZihmPT09XCJkZWxheVwiJiZpWzBdPT09XCI6XCIpe2kuc2hpZnQoKTt1LmRlbGF5PWQoeShpLHgpKX1lbHNlIGlmKGY9PT1cImZyb21cIiYmaVswXT09PVwiOlwiKXtpLnNoaWZ0KCk7aWYoWmUudGVzdChpWzBdKSl7dmFyIGM9dHQoaSl9ZWxzZXt2YXIgYz15KGkseCk7aWYoYz09PVwiY2xvc2VzdFwifHxjPT09XCJmaW5kXCJ8fGM9PT1cIm5leHRcInx8Yz09PVwicHJldmlvdXNcIil7aS5zaGlmdCgpO3ZhciBoPXR0KGkpO2lmKGgubGVuZ3RoPjApe2MrPVwiIFwiK2h9fX11LmZyb209Y31lbHNlIGlmKGY9PT1cInRhcmdldFwiJiZpWzBdPT09XCI6XCIpe2kuc2hpZnQoKTt1LnRhcmdldD10dChpKX1lbHNlIGlmKGY9PT1cInRocm90dGxlXCImJmlbMF09PT1cIjpcIil7aS5zaGlmdCgpO3UudGhyb3R0bGU9ZCh5KGkseCkpfWVsc2UgaWYoZj09PVwicXVldWVcIiYmaVswXT09PVwiOlwiKXtpLnNoaWZ0KCk7dS5xdWV1ZT15KGkseCl9ZWxzZSBpZihmPT09XCJyb290XCImJmlbMF09PT1cIjpcIil7aS5zaGlmdCgpO3VbZl09dHQoaSl9ZWxzZSBpZihmPT09XCJ0aHJlc2hvbGRcIiYmaVswXT09PVwiOlwiKXtpLnNoaWZ0KCk7dVtmXT15KGkseCl9ZWxzZXtmZShlLFwiaHRteDpzeW50YXg6ZXJyb3JcIix7dG9rZW46aS5zaGlmdCgpfSl9fW4ucHVzaCh1KX19aWYoaS5sZW5ndGg9PT1hKXtmZShlLFwiaHRteDpzeW50YXg6ZXJyb3JcIix7dG9rZW46aS5zaGlmdCgpfSl9eShpLEplKX13aGlsZShpWzBdPT09XCIsXCImJmkuc2hpZnQoKSk7aWYocil7clt0XT1ufXJldHVybiBufWZ1bmN0aW9uIGl0KGUpe3ZhciB0PXRlKGUsXCJoeC10cmlnZ2VyXCIpO3ZhciByPVtdO2lmKHQpe3ZhciBuPVEuY29uZmlnLnRyaWdnZXJTcGVjc0NhY2hlO3I9biYmblt0XXx8bnQoZSx0LG4pfWlmKHIubGVuZ3RoPjApe3JldHVybiByfWVsc2UgaWYoaChlLFwiZm9ybVwiKSl7cmV0dXJuW3t0cmlnZ2VyOlwic3VibWl0XCJ9XX1lbHNlIGlmKGgoZSwnaW5wdXRbdHlwZT1cImJ1dHRvblwiXSwgaW5wdXRbdHlwZT1cInN1Ym1pdFwiXScpKXtyZXR1cm5be3RyaWdnZXI6XCJjbGlja1wifV19ZWxzZSBpZihoKGUscnQpKXtyZXR1cm5be3RyaWdnZXI6XCJjaGFuZ2VcIn1dfWVsc2V7cmV0dXJuW3t0cmlnZ2VyOlwiY2xpY2tcIn1dfX1mdW5jdGlvbiBhdChlKXthZShlKS5jYW5jZWxsZWQ9dHJ1ZX1mdW5jdGlvbiBvdChlLHQscil7dmFyIG49YWUoZSk7bi50aW1lb3V0PXNldFRpbWVvdXQoZnVuY3Rpb24oKXtpZihzZShlKSYmbi5jYW5jZWxsZWQhPT10cnVlKXtpZighY3QocixlLFd0KFwiaHg6cG9sbDp0cmlnZ2VyXCIse3RyaWdnZXJTcGVjOnIsdGFyZ2V0OmV9KSkpe3QoZSl9b3QoZSx0LHIpfX0sci5wb2xsSW50ZXJ2YWwpfWZ1bmN0aW9uIHN0KGUpe3JldHVybiBsb2NhdGlvbi5ob3N0bmFtZT09PWUuaG9zdG5hbWUmJmVlKGUsXCJocmVmXCIpJiZlZShlLFwiaHJlZlwiKS5pbmRleE9mKFwiI1wiKSE9PTB9ZnVuY3Rpb24gbHQodCxyLGUpe2lmKHQudGFnTmFtZT09PVwiQVwiJiZzdCh0KSYmKHQudGFyZ2V0PT09XCJcInx8dC50YXJnZXQ9PT1cIl9zZWxmXCIpfHx0LnRhZ05hbWU9PT1cIkZPUk1cIil7ci5ib29zdGVkPXRydWU7dmFyIG4saTtpZih0LnRhZ05hbWU9PT1cIkFcIil7bj1cImdldFwiO2k9ZWUodCxcImhyZWZcIil9ZWxzZXt2YXIgYT1lZSh0LFwibWV0aG9kXCIpO249YT9hLnRvTG93ZXJDYXNlKCk6XCJnZXRcIjtpZihuPT09XCJnZXRcIil7fWk9ZWUodCxcImFjdGlvblwiKX1lLmZvckVhY2goZnVuY3Rpb24oZSl7aHQodCxmdW5jdGlvbihlLHQpe2lmKHYoZSxRLmNvbmZpZy5kaXNhYmxlU2VsZWN0b3IpKXtwKGUpO3JldHVybn1oZShuLGksZSx0KX0scixlLHRydWUpfSl9fWZ1bmN0aW9uIHV0KGUsdCl7aWYoZS50eXBlPT09XCJzdWJtaXRcInx8ZS50eXBlPT09XCJjbGlja1wiKXtpZih0LnRhZ05hbWU9PT1cIkZPUk1cIil7cmV0dXJuIHRydWV9aWYoaCh0LCdpbnB1dFt0eXBlPVwic3VibWl0XCJdLCBidXR0b24nKSYmdih0LFwiZm9ybVwiKSE9PW51bGwpe3JldHVybiB0cnVlfWlmKHQudGFnTmFtZT09PVwiQVwiJiZ0LmhyZWYmJih0LmdldEF0dHJpYnV0ZShcImhyZWZcIik9PT1cIiNcInx8dC5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpLmluZGV4T2YoXCIjXCIpIT09MCkpe3JldHVybiB0cnVlfX1yZXR1cm4gZmFsc2V9ZnVuY3Rpb24gZnQoZSx0KXtyZXR1cm4gYWUoZSkuYm9vc3RlZCYmZS50YWdOYW1lPT09XCJBXCImJnQudHlwZT09PVwiY2xpY2tcIiYmKHQuY3RybEtleXx8dC5tZXRhS2V5KX1mdW5jdGlvbiBjdChlLHQscil7dmFyIG49ZS5ldmVudEZpbHRlcjtpZihuKXt0cnl7cmV0dXJuIG4uY2FsbCh0LHIpIT09dHJ1ZX1jYXRjaChlKXtmZShyZSgpLmJvZHksXCJodG14OmV2ZW50RmlsdGVyOmVycm9yXCIse2Vycm9yOmUsc291cmNlOm4uc291cmNlfSk7cmV0dXJuIHRydWV9fXJldHVybiBmYWxzZX1mdW5jdGlvbiBodChhLG8sZSxzLGwpe3ZhciB1PWFlKGEpO3ZhciB0O2lmKHMuZnJvbSl7dD1aKGEscy5mcm9tKX1lbHNle3Q9W2FdfWlmKHMuY2hhbmdlZCl7dC5mb3JFYWNoKGZ1bmN0aW9uKGUpe3ZhciB0PWFlKGUpO3QubGFzdFZhbHVlPWUudmFsdWV9KX1vZSh0LGZ1bmN0aW9uKG4pe3ZhciBpPWZ1bmN0aW9uKGUpe2lmKCFzZShhKSl7bi5yZW1vdmVFdmVudExpc3RlbmVyKHMudHJpZ2dlcixpKTtyZXR1cm59aWYoZnQoYSxlKSl7cmV0dXJufWlmKGx8fHV0KGUsYSkpe2UucHJldmVudERlZmF1bHQoKX1pZihjdChzLGEsZSkpe3JldHVybn12YXIgdD1hZShlKTt0LnRyaWdnZXJTcGVjPXM7aWYodC5oYW5kbGVkRm9yPT1udWxsKXt0LmhhbmRsZWRGb3I9W119aWYodC5oYW5kbGVkRm9yLmluZGV4T2YoYSk8MCl7dC5oYW5kbGVkRm9yLnB1c2goYSk7aWYocy5jb25zdW1lKXtlLnN0b3BQcm9wYWdhdGlvbigpfWlmKHMudGFyZ2V0JiZlLnRhcmdldCl7aWYoIWgoZS50YXJnZXQscy50YXJnZXQpKXtyZXR1cm59fWlmKHMub25jZSl7aWYodS50cmlnZ2VyZWRPbmNlKXtyZXR1cm59ZWxzZXt1LnRyaWdnZXJlZE9uY2U9dHJ1ZX19aWYocy5jaGFuZ2VkKXt2YXIgcj1hZShuKTtpZihyLmxhc3RWYWx1ZT09PW4udmFsdWUpe3JldHVybn1yLmxhc3RWYWx1ZT1uLnZhbHVlfWlmKHUuZGVsYXllZCl7Y2xlYXJUaW1lb3V0KHUuZGVsYXllZCl9aWYodS50aHJvdHRsZSl7cmV0dXJufWlmKHMudGhyb3R0bGU+MCl7aWYoIXUudGhyb3R0bGUpe28oYSxlKTt1LnRocm90dGxlPXNldFRpbWVvdXQoZnVuY3Rpb24oKXt1LnRocm90dGxlPW51bGx9LHMudGhyb3R0bGUpfX1lbHNlIGlmKHMuZGVsYXk+MCl7dS5kZWxheWVkPXNldFRpbWVvdXQoZnVuY3Rpb24oKXtvKGEsZSl9LHMuZGVsYXkpfWVsc2V7Y2UoYSxcImh0bXg6dHJpZ2dlclwiKTtvKGEsZSl9fX07aWYoZS5saXN0ZW5lckluZm9zPT1udWxsKXtlLmxpc3RlbmVySW5mb3M9W119ZS5saXN0ZW5lckluZm9zLnB1c2goe3RyaWdnZXI6cy50cmlnZ2VyLGxpc3RlbmVyOmksb246bn0pO24uYWRkRXZlbnRMaXN0ZW5lcihzLnRyaWdnZXIsaSl9KX12YXIgdnQ9ZmFsc2U7dmFyIGR0PW51bGw7ZnVuY3Rpb24gZ3QoKXtpZighZHQpe2R0PWZ1bmN0aW9uKCl7dnQ9dHJ1ZX07d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIixkdCk7c2V0SW50ZXJ2YWwoZnVuY3Rpb24oKXtpZih2dCl7dnQ9ZmFsc2U7b2UocmUoKS5xdWVyeVNlbGVjdG9yQWxsKFwiW2h4LXRyaWdnZXI9J3JldmVhbGVkJ10sW2RhdGEtaHgtdHJpZ2dlcj0ncmV2ZWFsZWQnXVwiKSxmdW5jdGlvbihlKXttdChlKX0pfX0sMjAwKX19ZnVuY3Rpb24gbXQodCl7aWYoIW8odCxcImRhdGEtaHgtcmV2ZWFsZWRcIikmJlgodCkpe3Quc2V0QXR0cmlidXRlKFwiZGF0YS1oeC1yZXZlYWxlZFwiLFwidHJ1ZVwiKTt2YXIgZT1hZSh0KTtpZihlLmluaXRIYXNoKXtjZSh0LFwicmV2ZWFsZWRcIil9ZWxzZXt0LmFkZEV2ZW50TGlzdGVuZXIoXCJodG14OmFmdGVyUHJvY2Vzc05vZGVcIixmdW5jdGlvbihlKXtjZSh0LFwicmV2ZWFsZWRcIil9LHtvbmNlOnRydWV9KX19fWZ1bmN0aW9uIHB0KGUsdCxyKXt2YXIgbj1EKHIpO2Zvcih2YXIgaT0wO2k8bi5sZW5ndGg7aSsrKXt2YXIgYT1uW2ldLnNwbGl0KC86KC4rKS8pO2lmKGFbMF09PT1cImNvbm5lY3RcIil7eHQoZSxhWzFdLDApfWlmKGFbMF09PT1cInNlbmRcIil7YnQoZSl9fX1mdW5jdGlvbiB4dChzLHIsbil7aWYoIXNlKHMpKXtyZXR1cm59aWYoci5pbmRleE9mKFwiL1wiKT09MCl7dmFyIGU9bG9jYXRpb24uaG9zdG5hbWUrKGxvY2F0aW9uLnBvcnQ/XCI6XCIrbG9jYXRpb24ucG9ydDpcIlwiKTtpZihsb2NhdGlvbi5wcm90b2NvbD09XCJodHRwczpcIil7cj1cIndzczovL1wiK2Urcn1lbHNlIGlmKGxvY2F0aW9uLnByb3RvY29sPT1cImh0dHA6XCIpe3I9XCJ3czovL1wiK2Urcn19dmFyIHQ9US5jcmVhdGVXZWJTb2NrZXQocik7dC5vbmVycm9yPWZ1bmN0aW9uKGUpe2ZlKHMsXCJodG14OndzRXJyb3JcIix7ZXJyb3I6ZSxzb2NrZXQ6dH0pO3l0KHMpfTt0Lm9uY2xvc2U9ZnVuY3Rpb24oZSl7aWYoWzEwMDYsMTAxMiwxMDEzXS5pbmRleE9mKGUuY29kZSk+PTApe3ZhciB0PXd0KG4pO3NldFRpbWVvdXQoZnVuY3Rpb24oKXt4dChzLHIsbisxKX0sdCl9fTt0Lm9ub3Blbj1mdW5jdGlvbihlKXtuPTB9O2FlKHMpLndlYlNvY2tldD10O3QuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIixmdW5jdGlvbihlKXtpZih5dChzKSl7cmV0dXJufXZhciB0PWUuZGF0YTtSKHMsZnVuY3Rpb24oZSl7dD1lLnRyYW5zZm9ybVJlc3BvbnNlKHQsbnVsbCxzKX0pO3ZhciByPVQocyk7dmFyIG49bCh0KTt2YXIgaT1NKG4uY2hpbGRyZW4pO2Zvcih2YXIgYT0wO2E8aS5sZW5ndGg7YSsrKXt2YXIgbz1pW2FdO0VlKHRlKG8sXCJoeC1zd2FwLW9vYlwiKXx8XCJ0cnVlXCIsbyxyKX1ucihyLnRhc2tzKX0pfWZ1bmN0aW9uIHl0KGUpe2lmKCFzZShlKSl7YWUoZSkud2ViU29ja2V0LmNsb3NlKCk7cmV0dXJuIHRydWV9fWZ1bmN0aW9uIGJ0KHUpe3ZhciBmPWModSxmdW5jdGlvbihlKXtyZXR1cm4gYWUoZSkud2ViU29ja2V0IT1udWxsfSk7aWYoZil7dS5hZGRFdmVudExpc3RlbmVyKGl0KHUpWzBdLnRyaWdnZXIsZnVuY3Rpb24oZSl7dmFyIHQ9YWUoZikud2ViU29ja2V0O3ZhciByPXhyKHUsZik7dmFyIG49ZHIodSxcInBvc3RcIik7dmFyIGk9bi5lcnJvcnM7dmFyIGE9bi52YWx1ZXM7dmFyIG89SHIodSk7dmFyIHM9bGUoYSxvKTt2YXIgbD15cihzLHUpO2xbXCJIRUFERVJTXCJdPXI7aWYoaSYmaS5sZW5ndGg+MCl7Y2UodSxcImh0bXg6dmFsaWRhdGlvbjpoYWx0ZWRcIixpKTtyZXR1cm59dC5zZW5kKEpTT04uc3RyaW5naWZ5KGwpKTtpZih1dChlLHUpKXtlLnByZXZlbnREZWZhdWx0KCl9fSl9ZWxzZXtmZSh1LFwiaHRteDpub1dlYlNvY2tldFNvdXJjZUVycm9yXCIpfX1mdW5jdGlvbiB3dChlKXt2YXIgdD1RLmNvbmZpZy53c1JlY29ubmVjdERlbGF5O2lmKHR5cGVvZiB0PT09XCJmdW5jdGlvblwiKXtyZXR1cm4gdChlKX1pZih0PT09XCJmdWxsLWppdHRlclwiKXt2YXIgcj1NYXRoLm1pbihlLDYpO3ZhciBuPTFlMypNYXRoLnBvdygyLHIpO3JldHVybiBuKk1hdGgucmFuZG9tKCl9YignaHRteC5jb25maWcud3NSZWNvbm5lY3REZWxheSBtdXN0IGVpdGhlciBiZSBhIGZ1bmN0aW9uIG9yIHRoZSBzdHJpbmcgXCJmdWxsLWppdHRlclwiJyl9ZnVuY3Rpb24gU3QoZSx0LHIpe3ZhciBuPUQocik7Zm9yKHZhciBpPTA7aTxuLmxlbmd0aDtpKyspe3ZhciBhPW5baV0uc3BsaXQoLzooLispLyk7aWYoYVswXT09PVwiY29ubmVjdFwiKXtFdChlLGFbMV0pfWlmKGFbMF09PT1cInN3YXBcIil7Q3QoZSxhWzFdKX19fWZ1bmN0aW9uIEV0KHQsZSl7dmFyIHI9US5jcmVhdGVFdmVudFNvdXJjZShlKTtyLm9uZXJyb3I9ZnVuY3Rpb24oZSl7ZmUodCxcImh0bXg6c3NlRXJyb3JcIix7ZXJyb3I6ZSxzb3VyY2U6cn0pO1R0KHQpfTthZSh0KS5zc2VFdmVudFNvdXJjZT1yfWZ1bmN0aW9uIEN0KGEsbyl7dmFyIHM9YyhhLE90KTtpZihzKXt2YXIgbD1hZShzKS5zc2VFdmVudFNvdXJjZTt2YXIgdT1mdW5jdGlvbihlKXtpZihUdChzKSl7cmV0dXJufWlmKCFzZShhKSl7bC5yZW1vdmVFdmVudExpc3RlbmVyKG8sdSk7cmV0dXJufXZhciB0PWUuZGF0YTtSKGEsZnVuY3Rpb24oZSl7dD1lLnRyYW5zZm9ybVJlc3BvbnNlKHQsbnVsbCxhKX0pO3ZhciByPXdyKGEpO3ZhciBuPXllKGEpO3ZhciBpPVQoYSk7amUoci5zd2FwU3R5bGUsbixhLHQsaSk7bnIoaS50YXNrcyk7Y2UoYSxcImh0bXg6c3NlTWVzc2FnZVwiLGUpfTthZShhKS5zc2VMaXN0ZW5lcj11O2wuYWRkRXZlbnRMaXN0ZW5lcihvLHUpfWVsc2V7ZmUoYSxcImh0bXg6bm9TU0VTb3VyY2VFcnJvclwiKX19ZnVuY3Rpb24gUnQoZSx0LHIpe3ZhciBuPWMoZSxPdCk7aWYobil7dmFyIGk9YWUobikuc3NlRXZlbnRTb3VyY2U7dmFyIGE9ZnVuY3Rpb24oKXtpZighVHQobikpe2lmKHNlKGUpKXt0KGUpfWVsc2V7aS5yZW1vdmVFdmVudExpc3RlbmVyKHIsYSl9fX07YWUoZSkuc3NlTGlzdGVuZXI9YTtpLmFkZEV2ZW50TGlzdGVuZXIocixhKX1lbHNle2ZlKGUsXCJodG14Om5vU1NFU291cmNlRXJyb3JcIil9fWZ1bmN0aW9uIFR0KGUpe2lmKCFzZShlKSl7YWUoZSkuc3NlRXZlbnRTb3VyY2UuY2xvc2UoKTtyZXR1cm4gdHJ1ZX19ZnVuY3Rpb24gT3QoZSl7cmV0dXJuIGFlKGUpLnNzZUV2ZW50U291cmNlIT1udWxsfWZ1bmN0aW9uIHF0KGUsdCxyLG4pe3ZhciBpPWZ1bmN0aW9uKCl7aWYoIXIubG9hZGVkKXtyLmxvYWRlZD10cnVlO3QoZSl9fTtpZihuPjApe3NldFRpbWVvdXQoaSxuKX1lbHNle2koKX19ZnVuY3Rpb24gSHQodCxpLGUpe3ZhciBhPWZhbHNlO29lKHcsZnVuY3Rpb24ocil7aWYobyh0LFwiaHgtXCIrcikpe3ZhciBuPXRlKHQsXCJoeC1cIityKTthPXRydWU7aS5wYXRoPW47aS52ZXJiPXI7ZS5mb3JFYWNoKGZ1bmN0aW9uKGUpe0x0KHQsZSxpLGZ1bmN0aW9uKGUsdCl7aWYodihlLFEuY29uZmlnLmRpc2FibGVTZWxlY3Rvcikpe3AoZSk7cmV0dXJufWhlKHIsbixlLHQpfSl9KX19KTtyZXR1cm4gYX1mdW5jdGlvbiBMdChuLGUsdCxyKXtpZihlLnNzZUV2ZW50KXtSdChuLHIsZS5zc2VFdmVudCl9ZWxzZSBpZihlLnRyaWdnZXI9PT1cInJldmVhbGVkXCIpe2d0KCk7aHQobixyLHQsZSk7bXQobil9ZWxzZSBpZihlLnRyaWdnZXI9PT1cImludGVyc2VjdFwiKXt2YXIgaT17fTtpZihlLnJvb3Qpe2kucm9vdD11ZShuLGUucm9vdCl9aWYoZS50aHJlc2hvbGQpe2kudGhyZXNob2xkPXBhcnNlRmxvYXQoZS50aHJlc2hvbGQpfXZhciBhPW5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihmdW5jdGlvbihlKXtmb3IodmFyIHQ9MDt0PGUubGVuZ3RoO3QrKyl7dmFyIHI9ZVt0XTtpZihyLmlzSW50ZXJzZWN0aW5nKXtjZShuLFwiaW50ZXJzZWN0XCIpO2JyZWFrfX19LGkpO2Eub2JzZXJ2ZShuKTtodChuLHIsdCxlKX1lbHNlIGlmKGUudHJpZ2dlcj09PVwibG9hZFwiKXtpZighY3QoZSxuLFd0KFwibG9hZFwiLHtlbHQ6bn0pKSl7cXQobixyLHQsZS5kZWxheSl9fWVsc2UgaWYoZS5wb2xsSW50ZXJ2YWw+MCl7dC5wb2xsaW5nPXRydWU7b3QobixyLGUpfWVsc2V7aHQobixyLHQsZSl9fWZ1bmN0aW9uIEF0KGUpe2lmKFEuY29uZmlnLmFsbG93U2NyaXB0VGFncyYmKGUudHlwZT09PVwidGV4dC9qYXZhc2NyaXB0XCJ8fGUudHlwZT09PVwibW9kdWxlXCJ8fGUudHlwZT09PVwiXCIpKXt2YXIgdD1yZSgpLmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7b2UoZS5hdHRyaWJ1dGVzLGZ1bmN0aW9uKGUpe3Quc2V0QXR0cmlidXRlKGUubmFtZSxlLnZhbHVlKX0pO3QudGV4dENvbnRlbnQ9ZS50ZXh0Q29udGVudDt0LmFzeW5jPWZhbHNlO2lmKFEuY29uZmlnLmlubGluZVNjcmlwdE5vbmNlKXt0Lm5vbmNlPVEuY29uZmlnLmlubGluZVNjcmlwdE5vbmNlfXZhciByPWUucGFyZW50RWxlbWVudDt0cnl7ci5pbnNlcnRCZWZvcmUodCxlKX1jYXRjaChlKXtiKGUpfWZpbmFsbHl7aWYoZS5wYXJlbnRFbGVtZW50KXtlLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoZSl9fX19ZnVuY3Rpb24gTnQoZSl7aWYoaChlLFwic2NyaXB0XCIpKXtBdChlKX1vZShmKGUsXCJzY3JpcHRcIiksZnVuY3Rpb24oZSl7QXQoZSl9KX1mdW5jdGlvbiBJdChlKXt2YXIgdD1lLmF0dHJpYnV0ZXM7Zm9yKHZhciByPTA7cjx0Lmxlbmd0aDtyKyspe3ZhciBuPXRbcl0ubmFtZTtpZihzKG4sXCJoeC1vbjpcIil8fHMobixcImRhdGEtaHgtb246XCIpfHxzKG4sXCJoeC1vbi1cIil8fHMobixcImRhdGEtaHgtb24tXCIpKXtyZXR1cm4gdHJ1ZX19cmV0dXJuIGZhbHNlfWZ1bmN0aW9uIGt0KGUpe3ZhciB0PW51bGw7dmFyIHI9W107aWYoSXQoZSkpe3IucHVzaChlKX1pZihkb2N1bWVudC5ldmFsdWF0ZSl7dmFyIG49ZG9jdW1lbnQuZXZhbHVhdGUoJy4vLypbQCpbIHN0YXJ0cy13aXRoKG5hbWUoKSwgXCJoeC1vbjpcIikgb3Igc3RhcnRzLXdpdGgobmFtZSgpLCBcImRhdGEtaHgtb246XCIpIG9yJysnIHN0YXJ0cy13aXRoKG5hbWUoKSwgXCJoeC1vbi1cIikgb3Igc3RhcnRzLXdpdGgobmFtZSgpLCBcImRhdGEtaHgtb24tXCIpIF1dJyxlKTt3aGlsZSh0PW4uaXRlcmF0ZU5leHQoKSlyLnB1c2godCl9ZWxzZXt2YXIgaT1lLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiKlwiKTtmb3IodmFyIGE9MDthPGkubGVuZ3RoO2ErKyl7aWYoSXQoaVthXSkpe3IucHVzaChpW2FdKX19fXJldHVybiByfWZ1bmN0aW9uIFB0KGUpe2lmKGUucXVlcnlTZWxlY3RvckFsbCl7dmFyIHQ9XCIsIFtoeC1ib29zdF0gYSwgW2RhdGEtaHgtYm9vc3RdIGEsIGFbaHgtYm9vc3RdLCBhW2RhdGEtaHgtYm9vc3RdXCI7dmFyIHI9ZS5xdWVyeVNlbGVjdG9yQWxsKGkrdCtcIiwgZm9ybSwgW3R5cGU9J3N1Ym1pdCddLCBbaHgtc3NlXSwgW2RhdGEtaHgtc3NlXSwgW2h4LXdzXSxcIitcIiBbZGF0YS1oeC13c10sIFtoeC1leHRdLCBbZGF0YS1oeC1leHRdLCBbaHgtdHJpZ2dlcl0sIFtkYXRhLWh4LXRyaWdnZXJdLCBbaHgtb25dLCBbZGF0YS1oeC1vbl1cIik7cmV0dXJuIHJ9ZWxzZXtyZXR1cm5bXX19ZnVuY3Rpb24gTXQoZSl7dmFyIHQ9dihlLnRhcmdldCxcImJ1dHRvbiwgaW5wdXRbdHlwZT0nc3VibWl0J11cIik7dmFyIHI9RHQoZSk7aWYocil7ci5sYXN0QnV0dG9uQ2xpY2tlZD10fX1mdW5jdGlvbiBYdChlKXt2YXIgdD1EdChlKTtpZih0KXt0Lmxhc3RCdXR0b25DbGlja2VkPW51bGx9fWZ1bmN0aW9uIER0KGUpe3ZhciB0PXYoZS50YXJnZXQsXCJidXR0b24sIGlucHV0W3R5cGU9J3N1Ym1pdCddXCIpO2lmKCF0KXtyZXR1cm59dmFyIHI9ZyhcIiNcIitlZSh0LFwiZm9ybVwiKSl8fHYodCxcImZvcm1cIik7aWYoIXIpe3JldHVybn1yZXR1cm4gYWUocil9ZnVuY3Rpb24gVXQoZSl7ZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixNdCk7ZS5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNpblwiLE10KTtlLmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c291dFwiLFh0KX1mdW5jdGlvbiBCdChlKXt2YXIgdD1ZZShlKTt2YXIgcj0wO2Zvcih2YXIgbj0wO248dC5sZW5ndGg7bisrKXtjb25zdCBpPXRbbl07aWYoaT09PVwie1wiKXtyKyt9ZWxzZSBpZihpPT09XCJ9XCIpe3ItLX19cmV0dXJuIHJ9ZnVuY3Rpb24gRnQodCxlLHIpe3ZhciBuPWFlKHQpO2lmKCFBcnJheS5pc0FycmF5KG4ub25IYW5kbGVycykpe24ub25IYW5kbGVycz1bXX12YXIgaTt2YXIgYT1mdW5jdGlvbihlKXtyZXR1cm4gVHIodCxmdW5jdGlvbigpe2lmKCFpKXtpPW5ldyBGdW5jdGlvbihcImV2ZW50XCIscil9aS5jYWxsKHQsZSl9KX07dC5hZGRFdmVudExpc3RlbmVyKGUsYSk7bi5vbkhhbmRsZXJzLnB1c2goe2V2ZW50OmUsbGlzdGVuZXI6YX0pfWZ1bmN0aW9uIFZ0KGUpe3ZhciB0PXRlKGUsXCJoeC1vblwiKTtpZih0KXt2YXIgcj17fTt2YXIgbj10LnNwbGl0KFwiXFxuXCIpO3ZhciBpPW51bGw7dmFyIGE9MDt3aGlsZShuLmxlbmd0aD4wKXt2YXIgbz1uLnNoaWZ0KCk7dmFyIHM9by5tYXRjaCgvXlxccyooW2EtekEtWjpcXC1cXC5dKzopKC4qKS8pO2lmKGE9PT0wJiZzKXtvLnNwbGl0KFwiOlwiKTtpPXNbMV0uc2xpY2UoMCwtMSk7cltpXT1zWzJdfWVsc2V7cltpXSs9b31hKz1CdChvKX1mb3IodmFyIGwgaW4gcil7RnQoZSxsLHJbbF0pfX19ZnVuY3Rpb24ganQoZSl7QWUoZSk7Zm9yKHZhciB0PTA7dDxlLmF0dHJpYnV0ZXMubGVuZ3RoO3QrKyl7dmFyIHI9ZS5hdHRyaWJ1dGVzW3RdLm5hbWU7dmFyIG49ZS5hdHRyaWJ1dGVzW3RdLnZhbHVlO2lmKHMocixcImh4LW9uXCIpfHxzKHIsXCJkYXRhLWh4LW9uXCIpKXt2YXIgaT1yLmluZGV4T2YoXCItb25cIikrMzt2YXIgYT1yLnNsaWNlKGksaSsxKTtpZihhPT09XCItXCJ8fGE9PT1cIjpcIil7dmFyIG89ci5zbGljZShpKzEpO2lmKHMobyxcIjpcIikpe289XCJodG14XCIrb31lbHNlIGlmKHMobyxcIi1cIikpe289XCJodG14OlwiK28uc2xpY2UoMSl9ZWxzZSBpZihzKG8sXCJodG14LVwiKSl7bz1cImh0bXg6XCIrby5zbGljZSg1KX1GdChlLG8sbil9fX19ZnVuY3Rpb24gX3QodCl7aWYodih0LFEuY29uZmlnLmRpc2FibGVTZWxlY3Rvcikpe3AodCk7cmV0dXJufXZhciByPWFlKHQpO2lmKHIuaW5pdEhhc2ghPT1MZSh0KSl7TmUodCk7ci5pbml0SGFzaD1MZSh0KTtWdCh0KTtjZSh0LFwiaHRteDpiZWZvcmVQcm9jZXNzTm9kZVwiKTtpZih0LnZhbHVlKXtyLmxhc3RWYWx1ZT10LnZhbHVlfXZhciBlPWl0KHQpO3ZhciBuPUh0KHQscixlKTtpZighbil7aWYobmUodCxcImh4LWJvb3N0XCIpPT09XCJ0cnVlXCIpe2x0KHQscixlKX1lbHNlIGlmKG8odCxcImh4LXRyaWdnZXJcIikpe2UuZm9yRWFjaChmdW5jdGlvbihlKXtMdCh0LGUscixmdW5jdGlvbigpe30pfSl9fWlmKHQudGFnTmFtZT09PVwiRk9STVwifHxlZSh0LFwidHlwZVwiKT09PVwic3VibWl0XCImJm8odCxcImZvcm1cIikpe1V0KHQpfXZhciBpPXRlKHQsXCJoeC1zc2VcIik7aWYoaSl7U3QodCxyLGkpfXZhciBhPXRlKHQsXCJoeC13c1wiKTtpZihhKXtwdCh0LHIsYSl9Y2UodCxcImh0bXg6YWZ0ZXJQcm9jZXNzTm9kZVwiKX19ZnVuY3Rpb24genQoZSl7ZT1nKGUpO2lmKHYoZSxRLmNvbmZpZy5kaXNhYmxlU2VsZWN0b3IpKXtwKGUpO3JldHVybn1fdChlKTtvZShQdChlKSxmdW5jdGlvbihlKXtfdChlKX0pO29lKGt0KGUpLGp0KX1mdW5jdGlvbiAkdChlKXtyZXR1cm4gZS5yZXBsYWNlKC8oW2EtejAtOV0pKFtBLVpdKS9nLFwiJDEtJDJcIikudG9Mb3dlckNhc2UoKX1mdW5jdGlvbiBXdChlLHQpe3ZhciByO2lmKHdpbmRvdy5DdXN0b21FdmVudCYmdHlwZW9mIHdpbmRvdy5DdXN0b21FdmVudD09PVwiZnVuY3Rpb25cIil7cj1uZXcgQ3VzdG9tRXZlbnQoZSx7YnViYmxlczp0cnVlLGNhbmNlbGFibGU6dHJ1ZSxkZXRhaWw6dH0pfWVsc2V7cj1yZSgpLmNyZWF0ZUV2ZW50KFwiQ3VzdG9tRXZlbnRcIik7ci5pbml0Q3VzdG9tRXZlbnQoZSx0cnVlLHRydWUsdCl9cmV0dXJuIHJ9ZnVuY3Rpb24gZmUoZSx0LHIpe2NlKGUsdCxsZSh7ZXJyb3I6dH0scikpfWZ1bmN0aW9uIEd0KGUpe3JldHVybiBlPT09XCJodG14OmFmdGVyUHJvY2Vzc05vZGVcIn1mdW5jdGlvbiBSKGUsdCl7b2UoRnIoZSksZnVuY3Rpb24oZSl7dHJ5e3QoZSl9Y2F0Y2goZSl7YihlKX19KX1mdW5jdGlvbiBiKGUpe2lmKGNvbnNvbGUuZXJyb3Ipe2NvbnNvbGUuZXJyb3IoZSl9ZWxzZSBpZihjb25zb2xlLmxvZyl7Y29uc29sZS5sb2coXCJFUlJPUjogXCIsZSl9fWZ1bmN0aW9uIGNlKGUsdCxyKXtlPWcoZSk7aWYocj09bnVsbCl7cj17fX1yW1wiZWx0XCJdPWU7dmFyIG49V3QodCxyKTtpZihRLmxvZ2dlciYmIUd0KHQpKXtRLmxvZ2dlcihlLHQscil9aWYoci5lcnJvcil7YihyLmVycm9yKTtjZShlLFwiaHRteDplcnJvclwiLHtlcnJvckluZm86cn0pfXZhciBpPWUuZGlzcGF0Y2hFdmVudChuKTt2YXIgYT0kdCh0KTtpZihpJiZhIT09dCl7dmFyIG89V3QoYSxuLmRldGFpbCk7aT1pJiZlLmRpc3BhdGNoRXZlbnQobyl9UihlLGZ1bmN0aW9uKGUpe2k9aSYmKGUub25FdmVudCh0LG4pIT09ZmFsc2UmJiFuLmRlZmF1bHRQcmV2ZW50ZWQpfSk7cmV0dXJuIGl9dmFyIEp0PWxvY2F0aW9uLnBhdGhuYW1lK2xvY2F0aW9uLnNlYXJjaDtmdW5jdGlvbiBadCgpe3ZhciBlPXJlKCkucXVlcnlTZWxlY3RvcihcIltoeC1oaXN0b3J5LWVsdF0sW2RhdGEtaHgtaGlzdG9yeS1lbHRdXCIpO3JldHVybiBlfHxyZSgpLmJvZHl9ZnVuY3Rpb24gS3QoZSx0LHIsbil7aWYoIVUoKSl7cmV0dXJufWlmKFEuY29uZmlnLmhpc3RvcnlDYWNoZVNpemU8PTApe2xvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwiaHRteC1oaXN0b3J5LWNhY2hlXCIpO3JldHVybn1lPUIoZSk7dmFyIGk9RShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImh0bXgtaGlzdG9yeS1jYWNoZVwiKSl8fFtdO2Zvcih2YXIgYT0wO2E8aS5sZW5ndGg7YSsrKXtpZihpW2FdLnVybD09PWUpe2kuc3BsaWNlKGEsMSk7YnJlYWt9fXZhciBvPXt1cmw6ZSxjb250ZW50OnQsdGl0bGU6cixzY3JvbGw6bn07Y2UocmUoKS5ib2R5LFwiaHRteDpoaXN0b3J5SXRlbUNyZWF0ZWRcIix7aXRlbTpvLGNhY2hlOml9KTtpLnB1c2gobyk7d2hpbGUoaS5sZW5ndGg+US5jb25maWcuaGlzdG9yeUNhY2hlU2l6ZSl7aS5zaGlmdCgpfXdoaWxlKGkubGVuZ3RoPjApe3RyeXtsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImh0bXgtaGlzdG9yeS1jYWNoZVwiLEpTT04uc3RyaW5naWZ5KGkpKTticmVha31jYXRjaChlKXtmZShyZSgpLmJvZHksXCJodG14Omhpc3RvcnlDYWNoZUVycm9yXCIse2NhdXNlOmUsY2FjaGU6aX0pO2kuc2hpZnQoKX19fWZ1bmN0aW9uIFl0KGUpe2lmKCFVKCkpe3JldHVybiBudWxsfWU9QihlKTt2YXIgdD1FKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiaHRteC1oaXN0b3J5LWNhY2hlXCIpKXx8W107Zm9yKHZhciByPTA7cjx0Lmxlbmd0aDtyKyspe2lmKHRbcl0udXJsPT09ZSl7cmV0dXJuIHRbcl19fXJldHVybiBudWxsfWZ1bmN0aW9uIFF0KGUpe3ZhciB0PVEuY29uZmlnLnJlcXVlc3RDbGFzczt2YXIgcj1lLmNsb25lTm9kZSh0cnVlKTtvZShmKHIsXCIuXCIrdCksZnVuY3Rpb24oZSl7bihlLHQpfSk7cmV0dXJuIHIuaW5uZXJIVE1MfWZ1bmN0aW9uIGVyKCl7dmFyIGU9WnQoKTt2YXIgdD1KdHx8bG9jYXRpb24ucGF0aG5hbWUrbG9jYXRpb24uc2VhcmNoO3ZhciByO3RyeXtyPXJlKCkucXVlcnlTZWxlY3RvcignW2h4LWhpc3Rvcnk9XCJmYWxzZVwiIGldLFtkYXRhLWh4LWhpc3Rvcnk9XCJmYWxzZVwiIGldJyl9Y2F0Y2goZSl7cj1yZSgpLnF1ZXJ5U2VsZWN0b3IoJ1toeC1oaXN0b3J5PVwiZmFsc2VcIl0sW2RhdGEtaHgtaGlzdG9yeT1cImZhbHNlXCJdJyl9aWYoIXIpe2NlKHJlKCkuYm9keSxcImh0bXg6YmVmb3JlSGlzdG9yeVNhdmVcIix7cGF0aDp0LGhpc3RvcnlFbHQ6ZX0pO0t0KHQsUXQoZSkscmUoKS50aXRsZSx3aW5kb3cuc2Nyb2xsWSl9aWYoUS5jb25maWcuaGlzdG9yeUVuYWJsZWQpaGlzdG9yeS5yZXBsYWNlU3RhdGUoe2h0bXg6dHJ1ZX0scmUoKS50aXRsZSx3aW5kb3cubG9jYXRpb24uaHJlZil9ZnVuY3Rpb24gdHIoZSl7aWYoUS5jb25maWcuZ2V0Q2FjaGVCdXN0ZXJQYXJhbSl7ZT1lLnJlcGxhY2UoL29yZ1xcLmh0bXhcXC5jYWNoZS1idXN0ZXI9W14mXSomPy8sXCJcIik7aWYoRyhlLFwiJlwiKXx8RyhlLFwiP1wiKSl7ZT1lLnNsaWNlKDAsLTEpfX1pZihRLmNvbmZpZy5oaXN0b3J5RW5hYmxlZCl7aGlzdG9yeS5wdXNoU3RhdGUoe2h0bXg6dHJ1ZX0sXCJcIixlKX1KdD1lfWZ1bmN0aW9uIHJyKGUpe2lmKFEuY29uZmlnLmhpc3RvcnlFbmFibGVkKWhpc3RvcnkucmVwbGFjZVN0YXRlKHtodG14OnRydWV9LFwiXCIsZSk7SnQ9ZX1mdW5jdGlvbiBucihlKXtvZShlLGZ1bmN0aW9uKGUpe2UuY2FsbCgpfSl9ZnVuY3Rpb24gaXIoYSl7dmFyIGU9bmV3IFhNTEh0dHBSZXF1ZXN0O3ZhciBvPXtwYXRoOmEseGhyOmV9O2NlKHJlKCkuYm9keSxcImh0bXg6aGlzdG9yeUNhY2hlTWlzc1wiLG8pO2Uub3BlbihcIkdFVFwiLGEsdHJ1ZSk7ZS5zZXRSZXF1ZXN0SGVhZGVyKFwiSFgtUmVxdWVzdFwiLFwidHJ1ZVwiKTtlLnNldFJlcXVlc3RIZWFkZXIoXCJIWC1IaXN0b3J5LVJlc3RvcmUtUmVxdWVzdFwiLFwidHJ1ZVwiKTtlLnNldFJlcXVlc3RIZWFkZXIoXCJIWC1DdXJyZW50LVVSTFwiLHJlKCkubG9jYXRpb24uaHJlZik7ZS5vbmxvYWQ9ZnVuY3Rpb24oKXtpZih0aGlzLnN0YXR1cz49MjAwJiZ0aGlzLnN0YXR1czw0MDApe2NlKHJlKCkuYm9keSxcImh0bXg6aGlzdG9yeUNhY2hlTWlzc0xvYWRcIixvKTt2YXIgZT1sKHRoaXMucmVzcG9uc2UpO2U9ZS5xdWVyeVNlbGVjdG9yKFwiW2h4LWhpc3RvcnktZWx0XSxbZGF0YS1oeC1oaXN0b3J5LWVsdF1cIil8fGU7dmFyIHQ9WnQoKTt2YXIgcj1UKHQpO3ZhciBuPVZlKHRoaXMucmVzcG9uc2UpO2lmKG4pe3ZhciBpPUMoXCJ0aXRsZVwiKTtpZihpKXtpLmlubmVySFRNTD1ufWVsc2V7d2luZG93LmRvY3VtZW50LnRpdGxlPW59fVVlKHQsZSxyKTtucihyLnRhc2tzKTtKdD1hO2NlKHJlKCkuYm9keSxcImh0bXg6aGlzdG9yeVJlc3RvcmVcIix7cGF0aDphLGNhY2hlTWlzczp0cnVlLHNlcnZlclJlc3BvbnNlOnRoaXMucmVzcG9uc2V9KX1lbHNle2ZlKHJlKCkuYm9keSxcImh0bXg6aGlzdG9yeUNhY2hlTWlzc0xvYWRFcnJvclwiLG8pfX07ZS5zZW5kKCl9ZnVuY3Rpb24gYXIoZSl7ZXIoKTtlPWV8fGxvY2F0aW9uLnBhdGhuYW1lK2xvY2F0aW9uLnNlYXJjaDt2YXIgdD1ZdChlKTtpZih0KXt2YXIgcj1sKHQuY29udGVudCk7dmFyIG49WnQoKTt2YXIgaT1UKG4pO1VlKG4scixpKTtucihpLnRhc2tzKTtkb2N1bWVudC50aXRsZT10LnRpdGxlO3NldFRpbWVvdXQoZnVuY3Rpb24oKXt3aW5kb3cuc2Nyb2xsVG8oMCx0LnNjcm9sbCl9LDApO0p0PWU7Y2UocmUoKS5ib2R5LFwiaHRteDpoaXN0b3J5UmVzdG9yZVwiLHtwYXRoOmUsaXRlbTp0fSl9ZWxzZXtpZihRLmNvbmZpZy5yZWZyZXNoT25IaXN0b3J5TWlzcyl7d2luZG93LmxvY2F0aW9uLnJlbG9hZCh0cnVlKX1lbHNle2lyKGUpfX19ZnVuY3Rpb24gb3IoZSl7dmFyIHQ9cGUoZSxcImh4LWluZGljYXRvclwiKTtpZih0PT1udWxsKXt0PVtlXX1vZSh0LGZ1bmN0aW9uKGUpe3ZhciB0PWFlKGUpO3QucmVxdWVzdENvdW50PSh0LnJlcXVlc3RDb3VudHx8MCkrMTtlLmNsYXNzTGlzdFtcImFkZFwiXS5jYWxsKGUuY2xhc3NMaXN0LFEuY29uZmlnLnJlcXVlc3RDbGFzcyl9KTtyZXR1cm4gdH1mdW5jdGlvbiBzcihlKXt2YXIgdD1wZShlLFwiaHgtZGlzYWJsZWQtZWx0XCIpO2lmKHQ9PW51bGwpe3Q9W119b2UodCxmdW5jdGlvbihlKXt2YXIgdD1hZShlKTt0LnJlcXVlc3RDb3VudD0odC5yZXF1ZXN0Q291bnR8fDApKzE7ZS5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLFwiXCIpfSk7cmV0dXJuIHR9ZnVuY3Rpb24gbHIoZSx0KXtvZShlLGZ1bmN0aW9uKGUpe3ZhciB0PWFlKGUpO3QucmVxdWVzdENvdW50PSh0LnJlcXVlc3RDb3VudHx8MCktMTtpZih0LnJlcXVlc3RDb3VudD09PTApe2UuY2xhc3NMaXN0W1wicmVtb3ZlXCJdLmNhbGwoZS5jbGFzc0xpc3QsUS5jb25maWcucmVxdWVzdENsYXNzKX19KTtvZSh0LGZ1bmN0aW9uKGUpe3ZhciB0PWFlKGUpO3QucmVxdWVzdENvdW50PSh0LnJlcXVlc3RDb3VudHx8MCktMTtpZih0LnJlcXVlc3RDb3VudD09PTApe2UucmVtb3ZlQXR0cmlidXRlKFwiZGlzYWJsZWRcIil9fSl9ZnVuY3Rpb24gdXIoZSx0KXtmb3IodmFyIHI9MDtyPGUubGVuZ3RoO3IrKyl7dmFyIG49ZVtyXTtpZihuLmlzU2FtZU5vZGUodCkpe3JldHVybiB0cnVlfX1yZXR1cm4gZmFsc2V9ZnVuY3Rpb24gZnIoZSl7aWYoZS5uYW1lPT09XCJcInx8ZS5uYW1lPT1udWxsfHxlLmRpc2FibGVkfHx2KGUsXCJmaWVsZHNldFtkaXNhYmxlZF1cIikpe3JldHVybiBmYWxzZX1pZihlLnR5cGU9PT1cImJ1dHRvblwifHxlLnR5cGU9PT1cInN1Ym1pdFwifHxlLnRhZ05hbWU9PT1cImltYWdlXCJ8fGUudGFnTmFtZT09PVwicmVzZXRcInx8ZS50YWdOYW1lPT09XCJmaWxlXCIpe3JldHVybiBmYWxzZX1pZihlLnR5cGU9PT1cImNoZWNrYm94XCJ8fGUudHlwZT09PVwicmFkaW9cIil7cmV0dXJuIGUuY2hlY2tlZH1yZXR1cm4gdHJ1ZX1mdW5jdGlvbiBjcihlLHQscil7aWYoZSE9bnVsbCYmdCE9bnVsbCl7dmFyIG49cltlXTtpZihuPT09dW5kZWZpbmVkKXtyW2VdPXR9ZWxzZSBpZihBcnJheS5pc0FycmF5KG4pKXtpZihBcnJheS5pc0FycmF5KHQpKXtyW2VdPW4uY29uY2F0KHQpfWVsc2V7bi5wdXNoKHQpfX1lbHNle2lmKEFycmF5LmlzQXJyYXkodCkpe3JbZV09W25dLmNvbmNhdCh0KX1lbHNle3JbZV09W24sdF19fX19ZnVuY3Rpb24gaHIodCxyLG4sZSxpKXtpZihlPT1udWxsfHx1cih0LGUpKXtyZXR1cm59ZWxzZXt0LnB1c2goZSl9aWYoZnIoZSkpe3ZhciBhPWVlKGUsXCJuYW1lXCIpO3ZhciBvPWUudmFsdWU7aWYoZS5tdWx0aXBsZSYmZS50YWdOYW1lPT09XCJTRUxFQ1RcIil7bz1NKGUucXVlcnlTZWxlY3RvckFsbChcIm9wdGlvbjpjaGVja2VkXCIpKS5tYXAoZnVuY3Rpb24oZSl7cmV0dXJuIGUudmFsdWV9KX1pZihlLmZpbGVzKXtvPU0oZS5maWxlcyl9Y3IoYSxvLHIpO2lmKGkpe3ZyKGUsbil9fWlmKGgoZSxcImZvcm1cIikpe3ZhciBzPWUuZWxlbWVudHM7b2UocyxmdW5jdGlvbihlKXtocih0LHIsbixlLGkpfSl9fWZ1bmN0aW9uIHZyKGUsdCl7aWYoZS53aWxsVmFsaWRhdGUpe2NlKGUsXCJodG14OnZhbGlkYXRpb246dmFsaWRhdGVcIik7aWYoIWUuY2hlY2tWYWxpZGl0eSgpKXt0LnB1c2goe2VsdDplLG1lc3NhZ2U6ZS52YWxpZGF0aW9uTWVzc2FnZSx2YWxpZGl0eTplLnZhbGlkaXR5fSk7Y2UoZSxcImh0bXg6dmFsaWRhdGlvbjpmYWlsZWRcIix7bWVzc2FnZTplLnZhbGlkYXRpb25NZXNzYWdlLHZhbGlkaXR5OmUudmFsaWRpdHl9KX19fWZ1bmN0aW9uIGRyKGUsdCl7dmFyIHI9W107dmFyIG49e307dmFyIGk9e307dmFyIGE9W107dmFyIG89YWUoZSk7aWYoby5sYXN0QnV0dG9uQ2xpY2tlZCYmIXNlKG8ubGFzdEJ1dHRvbkNsaWNrZWQpKXtvLmxhc3RCdXR0b25DbGlja2VkPW51bGx9dmFyIHM9aChlLFwiZm9ybVwiKSYmZS5ub1ZhbGlkYXRlIT09dHJ1ZXx8dGUoZSxcImh4LXZhbGlkYXRlXCIpPT09XCJ0cnVlXCI7aWYoby5sYXN0QnV0dG9uQ2xpY2tlZCl7cz1zJiZvLmxhc3RCdXR0b25DbGlja2VkLmZvcm1Ob1ZhbGlkYXRlIT09dHJ1ZX1pZih0IT09XCJnZXRcIil7aHIocixpLGEsdihlLFwiZm9ybVwiKSxzKX1ocihyLG4sYSxlLHMpO2lmKG8ubGFzdEJ1dHRvbkNsaWNrZWR8fGUudGFnTmFtZT09PVwiQlVUVE9OXCJ8fGUudGFnTmFtZT09PVwiSU5QVVRcIiYmZWUoZSxcInR5cGVcIik9PT1cInN1Ym1pdFwiKXt2YXIgbD1vLmxhc3RCdXR0b25DbGlja2VkfHxlO3ZhciB1PWVlKGwsXCJuYW1lXCIpO2NyKHUsbC52YWx1ZSxpKX12YXIgZj1wZShlLFwiaHgtaW5jbHVkZVwiKTtvZShmLGZ1bmN0aW9uKGUpe2hyKHIsbixhLGUscyk7aWYoIWgoZSxcImZvcm1cIikpe29lKGUucXVlcnlTZWxlY3RvckFsbChydCksZnVuY3Rpb24oZSl7aHIocixuLGEsZSxzKX0pfX0pO249bGUobixpKTtyZXR1cm57ZXJyb3JzOmEsdmFsdWVzOm59fWZ1bmN0aW9uIGdyKGUsdCxyKXtpZihlIT09XCJcIil7ZSs9XCImXCJ9aWYoU3RyaW5nKHIpPT09XCJbb2JqZWN0IE9iamVjdF1cIil7cj1KU09OLnN0cmluZ2lmeShyKX12YXIgbj1lbmNvZGVVUklDb21wb25lbnQocik7ZSs9ZW5jb2RlVVJJQ29tcG9uZW50KHQpK1wiPVwiK247cmV0dXJuIGV9ZnVuY3Rpb24gbXIoZSl7dmFyIHQ9XCJcIjtmb3IodmFyIHIgaW4gZSl7aWYoZS5oYXNPd25Qcm9wZXJ0eShyKSl7dmFyIG49ZVtyXTtpZihBcnJheS5pc0FycmF5KG4pKXtvZShuLGZ1bmN0aW9uKGUpe3Q9Z3IodCxyLGUpfSl9ZWxzZXt0PWdyKHQscixuKX19fXJldHVybiB0fWZ1bmN0aW9uIHByKGUpe3ZhciB0PW5ldyBGb3JtRGF0YTtmb3IodmFyIHIgaW4gZSl7aWYoZS5oYXNPd25Qcm9wZXJ0eShyKSl7dmFyIG49ZVtyXTtpZihBcnJheS5pc0FycmF5KG4pKXtvZShuLGZ1bmN0aW9uKGUpe3QuYXBwZW5kKHIsZSl9KX1lbHNle3QuYXBwZW5kKHIsbil9fX1yZXR1cm4gdH1mdW5jdGlvbiB4cihlLHQscil7dmFyIG49e1wiSFgtUmVxdWVzdFwiOlwidHJ1ZVwiLFwiSFgtVHJpZ2dlclwiOmVlKGUsXCJpZFwiKSxcIkhYLVRyaWdnZXItTmFtZVwiOmVlKGUsXCJuYW1lXCIpLFwiSFgtVGFyZ2V0XCI6dGUodCxcImlkXCIpLFwiSFgtQ3VycmVudC1VUkxcIjpyZSgpLmxvY2F0aW9uLmhyZWZ9O1JyKGUsXCJoeC1oZWFkZXJzXCIsZmFsc2Usbik7aWYociE9PXVuZGVmaW5lZCl7bltcIkhYLVByb21wdFwiXT1yfWlmKGFlKGUpLmJvb3N0ZWQpe25bXCJIWC1Cb29zdGVkXCJdPVwidHJ1ZVwifXJldHVybiBufWZ1bmN0aW9uIHlyKHQsZSl7dmFyIHI9bmUoZSxcImh4LXBhcmFtc1wiKTtpZihyKXtpZihyPT09XCJub25lXCIpe3JldHVybnt9fWVsc2UgaWYocj09PVwiKlwiKXtyZXR1cm4gdH1lbHNlIGlmKHIuaW5kZXhPZihcIm5vdCBcIik9PT0wKXtvZShyLnN1YnN0cig0KS5zcGxpdChcIixcIiksZnVuY3Rpb24oZSl7ZT1lLnRyaW0oKTtkZWxldGUgdFtlXX0pO3JldHVybiB0fWVsc2V7dmFyIG49e307b2Uoci5zcGxpdChcIixcIiksZnVuY3Rpb24oZSl7ZT1lLnRyaW0oKTtuW2VdPXRbZV19KTtyZXR1cm4gbn19ZWxzZXtyZXR1cm4gdH19ZnVuY3Rpb24gYnIoZSl7cmV0dXJuIGVlKGUsXCJocmVmXCIpJiZlZShlLFwiaHJlZlwiKS5pbmRleE9mKFwiI1wiKT49MH1mdW5jdGlvbiB3cihlLHQpe3ZhciByPXQ/dDpuZShlLFwiaHgtc3dhcFwiKTt2YXIgbj17c3dhcFN0eWxlOmFlKGUpLmJvb3N0ZWQ/XCJpbm5lckhUTUxcIjpRLmNvbmZpZy5kZWZhdWx0U3dhcFN0eWxlLHN3YXBEZWxheTpRLmNvbmZpZy5kZWZhdWx0U3dhcERlbGF5LHNldHRsZURlbGF5OlEuY29uZmlnLmRlZmF1bHRTZXR0bGVEZWxheX07aWYoUS5jb25maWcuc2Nyb2xsSW50b1ZpZXdPbkJvb3N0JiZhZShlKS5ib29zdGVkJiYhYnIoZSkpe25bXCJzaG93XCJdPVwidG9wXCJ9aWYocil7dmFyIGk9RChyKTtpZihpLmxlbmd0aD4wKXtmb3IodmFyIGE9MDthPGkubGVuZ3RoO2ErKyl7dmFyIG89aVthXTtpZihvLmluZGV4T2YoXCJzd2FwOlwiKT09PTApe25bXCJzd2FwRGVsYXlcIl09ZChvLnN1YnN0cig1KSl9ZWxzZSBpZihvLmluZGV4T2YoXCJzZXR0bGU6XCIpPT09MCl7bltcInNldHRsZURlbGF5XCJdPWQoby5zdWJzdHIoNykpfWVsc2UgaWYoby5pbmRleE9mKFwidHJhbnNpdGlvbjpcIik9PT0wKXtuW1widHJhbnNpdGlvblwiXT1vLnN1YnN0cigxMSk9PT1cInRydWVcIn1lbHNlIGlmKG8uaW5kZXhPZihcImlnbm9yZVRpdGxlOlwiKT09PTApe25bXCJpZ25vcmVUaXRsZVwiXT1vLnN1YnN0cigxMik9PT1cInRydWVcIn1lbHNlIGlmKG8uaW5kZXhPZihcInNjcm9sbDpcIik9PT0wKXt2YXIgcz1vLnN1YnN0cig3KTt2YXIgbD1zLnNwbGl0KFwiOlwiKTt2YXIgdT1sLnBvcCgpO3ZhciBmPWwubGVuZ3RoPjA/bC5qb2luKFwiOlwiKTpudWxsO25bXCJzY3JvbGxcIl09dTtuW1wic2Nyb2xsVGFyZ2V0XCJdPWZ9ZWxzZSBpZihvLmluZGV4T2YoXCJzaG93OlwiKT09PTApe3ZhciBjPW8uc3Vic3RyKDUpO3ZhciBsPWMuc3BsaXQoXCI6XCIpO3ZhciBoPWwucG9wKCk7dmFyIGY9bC5sZW5ndGg+MD9sLmpvaW4oXCI6XCIpOm51bGw7bltcInNob3dcIl09aDtuW1wic2hvd1RhcmdldFwiXT1mfWVsc2UgaWYoby5pbmRleE9mKFwiZm9jdXMtc2Nyb2xsOlwiKT09PTApe3ZhciB2PW8uc3Vic3RyKFwiZm9jdXMtc2Nyb2xsOlwiLmxlbmd0aCk7bltcImZvY3VzU2Nyb2xsXCJdPXY9PVwidHJ1ZVwifWVsc2UgaWYoYT09MCl7bltcInN3YXBTdHlsZVwiXT1vfWVsc2V7YihcIlVua25vd24gbW9kaWZpZXIgaW4gaHgtc3dhcDogXCIrbyl9fX19cmV0dXJuIG59ZnVuY3Rpb24gU3IoZSl7cmV0dXJuIG5lKGUsXCJoeC1lbmNvZGluZ1wiKT09PVwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwifHxoKGUsXCJmb3JtXCIpJiZlZShlLFwiZW5jdHlwZVwiKT09PVwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwifWZ1bmN0aW9uIEVyKHQscixuKXt2YXIgaT1udWxsO1IocixmdW5jdGlvbihlKXtpZihpPT1udWxsKXtpPWUuZW5jb2RlUGFyYW1ldGVycyh0LG4scil9fSk7aWYoaSE9bnVsbCl7cmV0dXJuIGl9ZWxzZXtpZihTcihyKSl7cmV0dXJuIHByKG4pfWVsc2V7cmV0dXJuIG1yKG4pfX19ZnVuY3Rpb24gVChlKXtyZXR1cm57dGFza3M6W10sZWx0czpbZV19fWZ1bmN0aW9uIENyKGUsdCl7dmFyIHI9ZVswXTt2YXIgbj1lW2UubGVuZ3RoLTFdO2lmKHQuc2Nyb2xsKXt2YXIgaT1udWxsO2lmKHQuc2Nyb2xsVGFyZ2V0KXtpPXVlKHIsdC5zY3JvbGxUYXJnZXQpfWlmKHQuc2Nyb2xsPT09XCJ0b3BcIiYmKHJ8fGkpKXtpPWl8fHI7aS5zY3JvbGxUb3A9MH1pZih0LnNjcm9sbD09PVwiYm90dG9tXCImJihufHxpKSl7aT1pfHxuO2kuc2Nyb2xsVG9wPWkuc2Nyb2xsSGVpZ2h0fX1pZih0LnNob3cpe3ZhciBpPW51bGw7aWYodC5zaG93VGFyZ2V0KXt2YXIgYT10LnNob3dUYXJnZXQ7aWYodC5zaG93VGFyZ2V0PT09XCJ3aW5kb3dcIil7YT1cImJvZHlcIn1pPXVlKHIsYSl9aWYodC5zaG93PT09XCJ0b3BcIiYmKHJ8fGkpKXtpPWl8fHI7aS5zY3JvbGxJbnRvVmlldyh7YmxvY2s6XCJzdGFydFwiLGJlaGF2aW9yOlEuY29uZmlnLnNjcm9sbEJlaGF2aW9yfSl9aWYodC5zaG93PT09XCJib3R0b21cIiYmKG58fGkpKXtpPWl8fG47aS5zY3JvbGxJbnRvVmlldyh7YmxvY2s6XCJlbmRcIixiZWhhdmlvcjpRLmNvbmZpZy5zY3JvbGxCZWhhdmlvcn0pfX19ZnVuY3Rpb24gUnIoZSx0LHIsbil7aWYobj09bnVsbCl7bj17fX1pZihlPT1udWxsKXtyZXR1cm4gbn12YXIgaT10ZShlLHQpO2lmKGkpe3ZhciBhPWkudHJpbSgpO3ZhciBvPXI7aWYoYT09PVwidW5zZXRcIil7cmV0dXJuIG51bGx9aWYoYS5pbmRleE9mKFwiamF2YXNjcmlwdDpcIik9PT0wKXthPWEuc3Vic3RyKDExKTtvPXRydWV9ZWxzZSBpZihhLmluZGV4T2YoXCJqczpcIik9PT0wKXthPWEuc3Vic3RyKDMpO289dHJ1ZX1pZihhLmluZGV4T2YoXCJ7XCIpIT09MCl7YT1cIntcIithK1wifVwifXZhciBzO2lmKG8pe3M9VHIoZSxmdW5jdGlvbigpe3JldHVybiBGdW5jdGlvbihcInJldHVybiAoXCIrYStcIilcIikoKX0se30pfWVsc2V7cz1FKGEpfWZvcih2YXIgbCBpbiBzKXtpZihzLmhhc093blByb3BlcnR5KGwpKXtpZihuW2xdPT1udWxsKXtuW2xdPXNbbF19fX19cmV0dXJuIFJyKHUoZSksdCxyLG4pfWZ1bmN0aW9uIFRyKGUsdCxyKXtpZihRLmNvbmZpZy5hbGxvd0V2YWwpe3JldHVybiB0KCl9ZWxzZXtmZShlLFwiaHRteDpldmFsRGlzYWxsb3dlZEVycm9yXCIpO3JldHVybiByfX1mdW5jdGlvbiBPcihlLHQpe3JldHVybiBScihlLFwiaHgtdmFyc1wiLHRydWUsdCl9ZnVuY3Rpb24gcXIoZSx0KXtyZXR1cm4gUnIoZSxcImh4LXZhbHNcIixmYWxzZSx0KX1mdW5jdGlvbiBIcihlKXtyZXR1cm4gbGUoT3IoZSkscXIoZSkpfWZ1bmN0aW9uIExyKHQscixuKXtpZihuIT09bnVsbCl7dHJ5e3Quc2V0UmVxdWVzdEhlYWRlcihyLG4pfWNhdGNoKGUpe3Quc2V0UmVxdWVzdEhlYWRlcihyLGVuY29kZVVSSUNvbXBvbmVudChuKSk7dC5zZXRSZXF1ZXN0SGVhZGVyKHIrXCItVVJJLUF1dG9FbmNvZGVkXCIsXCJ0cnVlXCIpfX19ZnVuY3Rpb24gQXIodCl7aWYodC5yZXNwb25zZVVSTCYmdHlwZW9mIFVSTCE9PVwidW5kZWZpbmVkXCIpe3RyeXt2YXIgZT1uZXcgVVJMKHQucmVzcG9uc2VVUkwpO3JldHVybiBlLnBhdGhuYW1lK2Uuc2VhcmNofWNhdGNoKGUpe2ZlKHJlKCkuYm9keSxcImh0bXg6YmFkUmVzcG9uc2VVcmxcIix7dXJsOnQucmVzcG9uc2VVUkx9KX19fWZ1bmN0aW9uIE8oZSx0KXtyZXR1cm4gdC50ZXN0KGUuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCkpfWZ1bmN0aW9uIE5yKGUsdCxyKXtlPWUudG9Mb3dlckNhc2UoKTtpZihyKXtpZihyIGluc3RhbmNlb2YgRWxlbWVudHx8SShyLFwiU3RyaW5nXCIpKXtyZXR1cm4gaGUoZSx0LG51bGwsbnVsbCx7dGFyZ2V0T3ZlcnJpZGU6ZyhyKSxyZXR1cm5Qcm9taXNlOnRydWV9KX1lbHNle3JldHVybiBoZShlLHQsZyhyLnNvdXJjZSksci5ldmVudCx7aGFuZGxlcjpyLmhhbmRsZXIsaGVhZGVyczpyLmhlYWRlcnMsdmFsdWVzOnIudmFsdWVzLHRhcmdldE92ZXJyaWRlOmcoci50YXJnZXQpLHN3YXBPdmVycmlkZTpyLnN3YXAsc2VsZWN0OnIuc2VsZWN0LHJldHVyblByb21pc2U6dHJ1ZX0pfX1lbHNle3JldHVybiBoZShlLHQsbnVsbCxudWxsLHtyZXR1cm5Qcm9taXNlOnRydWV9KX19ZnVuY3Rpb24gSXIoZSl7dmFyIHQ9W107d2hpbGUoZSl7dC5wdXNoKGUpO2U9ZS5wYXJlbnRFbGVtZW50fXJldHVybiB0fWZ1bmN0aW9uIGtyKGUsdCxyKXt2YXIgbjt2YXIgaTtpZih0eXBlb2YgVVJMPT09XCJmdW5jdGlvblwiKXtpPW5ldyBVUkwodCxkb2N1bWVudC5sb2NhdGlvbi5ocmVmKTt2YXIgYT1kb2N1bWVudC5sb2NhdGlvbi5vcmlnaW47bj1hPT09aS5vcmlnaW59ZWxzZXtpPXQ7bj1zKHQsZG9jdW1lbnQubG9jYXRpb24ub3JpZ2luKX1pZihRLmNvbmZpZy5zZWxmUmVxdWVzdHNPbmx5KXtpZighbil7cmV0dXJuIGZhbHNlfX1yZXR1cm4gY2UoZSxcImh0bXg6dmFsaWRhdGVVcmxcIixsZSh7dXJsOmksc2FtZUhvc3Q6bn0scikpfWZ1bmN0aW9uIGhlKHQscixuLGksYSxlKXt2YXIgbz1udWxsO3ZhciBzPW51bGw7YT1hIT1udWxsP2E6e307aWYoYS5yZXR1cm5Qcm9taXNlJiZ0eXBlb2YgUHJvbWlzZSE9PVwidW5kZWZpbmVkXCIpe3ZhciBsPW5ldyBQcm9taXNlKGZ1bmN0aW9uKGUsdCl7bz1lO3M9dH0pfWlmKG49PW51bGwpe249cmUoKS5ib2R5fXZhciBNPWEuaGFuZGxlcnx8TXI7dmFyIFg9YS5zZWxlY3R8fG51bGw7aWYoIXNlKG4pKXtpZShvKTtyZXR1cm4gbH12YXIgdT1hLnRhcmdldE92ZXJyaWRlfHx5ZShuKTtpZih1PT1udWxsfHx1PT1tZSl7ZmUobixcImh0bXg6dGFyZ2V0RXJyb3JcIix7dGFyZ2V0OnRlKG4sXCJoeC10YXJnZXRcIil9KTtpZShzKTtyZXR1cm4gbH12YXIgZj1hZShuKTt2YXIgYz1mLmxhc3RCdXR0b25DbGlja2VkO2lmKGMpe3ZhciBoPWVlKGMsXCJmb3JtYWN0aW9uXCIpO2lmKGghPW51bGwpe3I9aH12YXIgdj1lZShjLFwiZm9ybW1ldGhvZFwiKTtpZih2IT1udWxsKXtpZih2LnRvTG93ZXJDYXNlKCkhPT1cImRpYWxvZ1wiKXt0PXZ9fX12YXIgZD1uZShuLFwiaHgtY29uZmlybVwiKTtpZihlPT09dW5kZWZpbmVkKXt2YXIgRD1mdW5jdGlvbihlKXtyZXR1cm4gaGUodCxyLG4saSxhLCEhZSl9O3ZhciBVPXt0YXJnZXQ6dSxlbHQ6bixwYXRoOnIsdmVyYjp0LHRyaWdnZXJpbmdFdmVudDppLGV0YzphLGlzc3VlUmVxdWVzdDpELHF1ZXN0aW9uOmR9O2lmKGNlKG4sXCJodG14OmNvbmZpcm1cIixVKT09PWZhbHNlKXtpZShvKTtyZXR1cm4gbH19dmFyIGc9bjt2YXIgbT1uZShuLFwiaHgtc3luY1wiKTt2YXIgcD1udWxsO3ZhciB4PWZhbHNlO2lmKG0pe3ZhciBCPW0uc3BsaXQoXCI6XCIpO3ZhciBGPUJbMF0udHJpbSgpO2lmKEY9PT1cInRoaXNcIil7Zz14ZShuLFwiaHgtc3luY1wiKX1lbHNle2c9dWUobixGKX1tPShCWzFdfHxcImRyb3BcIikudHJpbSgpO2Y9YWUoZyk7aWYobT09PVwiZHJvcFwiJiZmLnhociYmZi5hYm9ydGFibGUhPT10cnVlKXtpZShvKTtyZXR1cm4gbH1lbHNlIGlmKG09PT1cImFib3J0XCIpe2lmKGYueGhyKXtpZShvKTtyZXR1cm4gbH1lbHNle3g9dHJ1ZX19ZWxzZSBpZihtPT09XCJyZXBsYWNlXCIpe2NlKGcsXCJodG14OmFib3J0XCIpfWVsc2UgaWYobS5pbmRleE9mKFwicXVldWVcIik9PT0wKXt2YXIgVj1tLnNwbGl0KFwiIFwiKTtwPShWWzFdfHxcImxhc3RcIikudHJpbSgpfX1pZihmLnhocil7aWYoZi5hYm9ydGFibGUpe2NlKGcsXCJodG14OmFib3J0XCIpfWVsc2V7aWYocD09bnVsbCl7aWYoaSl7dmFyIHk9YWUoaSk7aWYoeSYmeS50cmlnZ2VyU3BlYyYmeS50cmlnZ2VyU3BlYy5xdWV1ZSl7cD15LnRyaWdnZXJTcGVjLnF1ZXVlfX1pZihwPT1udWxsKXtwPVwibGFzdFwifX1pZihmLnF1ZXVlZFJlcXVlc3RzPT1udWxsKXtmLnF1ZXVlZFJlcXVlc3RzPVtdfWlmKHA9PT1cImZpcnN0XCImJmYucXVldWVkUmVxdWVzdHMubGVuZ3RoPT09MCl7Zi5xdWV1ZWRSZXF1ZXN0cy5wdXNoKGZ1bmN0aW9uKCl7aGUodCxyLG4saSxhKX0pfWVsc2UgaWYocD09PVwiYWxsXCIpe2YucXVldWVkUmVxdWVzdHMucHVzaChmdW5jdGlvbigpe2hlKHQscixuLGksYSl9KX1lbHNlIGlmKHA9PT1cImxhc3RcIil7Zi5xdWV1ZWRSZXF1ZXN0cz1bXTtmLnF1ZXVlZFJlcXVlc3RzLnB1c2goZnVuY3Rpb24oKXtoZSh0LHIsbixpLGEpfSl9aWUobyk7cmV0dXJuIGx9fXZhciBiPW5ldyBYTUxIdHRwUmVxdWVzdDtmLnhocj1iO2YuYWJvcnRhYmxlPXg7dmFyIHc9ZnVuY3Rpb24oKXtmLnhocj1udWxsO2YuYWJvcnRhYmxlPWZhbHNlO2lmKGYucXVldWVkUmVxdWVzdHMhPW51bGwmJmYucXVldWVkUmVxdWVzdHMubGVuZ3RoPjApe3ZhciBlPWYucXVldWVkUmVxdWVzdHMuc2hpZnQoKTtlKCl9fTt2YXIgaj1uZShuLFwiaHgtcHJvbXB0XCIpO2lmKGope3ZhciBTPXByb21wdChqKTtpZihTPT09bnVsbHx8IWNlKG4sXCJodG14OnByb21wdFwiLHtwcm9tcHQ6Uyx0YXJnZXQ6dX0pKXtpZShvKTt3KCk7cmV0dXJuIGx9fWlmKGQmJiFlKXtpZighY29uZmlybShkKSl7aWUobyk7dygpO3JldHVybiBsfX12YXIgRT14cihuLHUsUyk7aWYodCE9PVwiZ2V0XCImJiFTcihuKSl7RVtcIkNvbnRlbnQtVHlwZVwiXT1cImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwifWlmKGEuaGVhZGVycyl7RT1sZShFLGEuaGVhZGVycyl9dmFyIF89ZHIobix0KTt2YXIgQz1fLmVycm9yczt2YXIgUj1fLnZhbHVlcztpZihhLnZhbHVlcyl7Uj1sZShSLGEudmFsdWVzKX12YXIgej1IcihuKTt2YXIgJD1sZShSLHopO3ZhciBUPXlyKCQsbik7aWYoUS5jb25maWcuZ2V0Q2FjaGVCdXN0ZXJQYXJhbSYmdD09PVwiZ2V0XCIpe1RbXCJvcmcuaHRteC5jYWNoZS1idXN0ZXJcIl09ZWUodSxcImlkXCIpfHxcInRydWVcIn1pZihyPT1udWxsfHxyPT09XCJcIil7cj1yZSgpLmxvY2F0aW9uLmhyZWZ9dmFyIE89UnIobixcImh4LXJlcXVlc3RcIik7dmFyIFc9YWUobikuYm9vc3RlZDt2YXIgcT1RLmNvbmZpZy5tZXRob2RzVGhhdFVzZVVybFBhcmFtcy5pbmRleE9mKHQpPj0wO3ZhciBIPXtib29zdGVkOlcsdXNlVXJsUGFyYW1zOnEscGFyYW1ldGVyczpULHVuZmlsdGVyZWRQYXJhbWV0ZXJzOiQsaGVhZGVyczpFLHRhcmdldDp1LHZlcmI6dCxlcnJvcnM6Qyx3aXRoQ3JlZGVudGlhbHM6YS5jcmVkZW50aWFsc3x8Ty5jcmVkZW50aWFsc3x8US5jb25maWcud2l0aENyZWRlbnRpYWxzLHRpbWVvdXQ6YS50aW1lb3V0fHxPLnRpbWVvdXR8fFEuY29uZmlnLnRpbWVvdXQscGF0aDpyLHRyaWdnZXJpbmdFdmVudDppfTtpZighY2UobixcImh0bXg6Y29uZmlnUmVxdWVzdFwiLEgpKXtpZShvKTt3KCk7cmV0dXJuIGx9cj1ILnBhdGg7dD1ILnZlcmI7RT1ILmhlYWRlcnM7VD1ILnBhcmFtZXRlcnM7Qz1ILmVycm9ycztxPUgudXNlVXJsUGFyYW1zO2lmKEMmJkMubGVuZ3RoPjApe2NlKG4sXCJodG14OnZhbGlkYXRpb246aGFsdGVkXCIsSCk7aWUobyk7dygpO3JldHVybiBsfXZhciBHPXIuc3BsaXQoXCIjXCIpO3ZhciBKPUdbMF07dmFyIEw9R1sxXTt2YXIgQT1yO2lmKHEpe0E9Sjt2YXIgWj1PYmplY3Qua2V5cyhUKS5sZW5ndGghPT0wO2lmKFope2lmKEEuaW5kZXhPZihcIj9cIik8MCl7QSs9XCI/XCJ9ZWxzZXtBKz1cIiZcIn1BKz1tcihUKTtpZihMKXtBKz1cIiNcIitMfX19aWYoIWtyKG4sQSxIKSl7ZmUobixcImh0bXg6aW52YWxpZFBhdGhcIixIKTtpZShzKTtyZXR1cm4gbH1iLm9wZW4odC50b1VwcGVyQ2FzZSgpLEEsdHJ1ZSk7Yi5vdmVycmlkZU1pbWVUeXBlKFwidGV4dC9odG1sXCIpO2Iud2l0aENyZWRlbnRpYWxzPUgud2l0aENyZWRlbnRpYWxzO2IudGltZW91dD1ILnRpbWVvdXQ7aWYoTy5ub0hlYWRlcnMpe31lbHNle2Zvcih2YXIgTiBpbiBFKXtpZihFLmhhc093blByb3BlcnR5KE4pKXt2YXIgSz1FW05dO0xyKGIsTixLKX19fXZhciBJPXt4aHI6Yix0YXJnZXQ6dSxyZXF1ZXN0Q29uZmlnOkgsZXRjOmEsYm9vc3RlZDpXLHNlbGVjdDpYLHBhdGhJbmZvOntyZXF1ZXN0UGF0aDpyLGZpbmFsUmVxdWVzdFBhdGg6QSxhbmNob3I6TH19O2Iub25sb2FkPWZ1bmN0aW9uKCl7dHJ5e3ZhciBlPUlyKG4pO0kucGF0aEluZm8ucmVzcG9uc2VQYXRoPUFyKGIpO00obixJKTtscihrLFApO2NlKG4sXCJodG14OmFmdGVyUmVxdWVzdFwiLEkpO2NlKG4sXCJodG14OmFmdGVyT25Mb2FkXCIsSSk7aWYoIXNlKG4pKXt2YXIgdD1udWxsO3doaWxlKGUubGVuZ3RoPjAmJnQ9PW51bGwpe3ZhciByPWUuc2hpZnQoKTtpZihzZShyKSl7dD1yfX1pZih0KXtjZSh0LFwiaHRteDphZnRlclJlcXVlc3RcIixJKTtjZSh0LFwiaHRteDphZnRlck9uTG9hZFwiLEkpfX1pZShvKTt3KCl9Y2F0Y2goZSl7ZmUobixcImh0bXg6b25Mb2FkRXJyb3JcIixsZSh7ZXJyb3I6ZX0sSSkpO3Rocm93IGV9fTtiLm9uZXJyb3I9ZnVuY3Rpb24oKXtscihrLFApO2ZlKG4sXCJodG14OmFmdGVyUmVxdWVzdFwiLEkpO2ZlKG4sXCJodG14OnNlbmRFcnJvclwiLEkpO2llKHMpO3coKX07Yi5vbmFib3J0PWZ1bmN0aW9uKCl7bHIoayxQKTtmZShuLFwiaHRteDphZnRlclJlcXVlc3RcIixJKTtmZShuLFwiaHRteDpzZW5kQWJvcnRcIixJKTtpZShzKTt3KCl9O2Iub250aW1lb3V0PWZ1bmN0aW9uKCl7bHIoayxQKTtmZShuLFwiaHRteDphZnRlclJlcXVlc3RcIixJKTtmZShuLFwiaHRteDp0aW1lb3V0XCIsSSk7aWUocyk7dygpfTtpZighY2UobixcImh0bXg6YmVmb3JlUmVxdWVzdFwiLEkpKXtpZShvKTt3KCk7cmV0dXJuIGx9dmFyIGs9b3Iobik7dmFyIFA9c3Iobik7b2UoW1wibG9hZHN0YXJ0XCIsXCJsb2FkZW5kXCIsXCJwcm9ncmVzc1wiLFwiYWJvcnRcIl0sZnVuY3Rpb24odCl7b2UoW2IsYi51cGxvYWRdLGZ1bmN0aW9uKGUpe2UuYWRkRXZlbnRMaXN0ZW5lcih0LGZ1bmN0aW9uKGUpe2NlKG4sXCJodG14OnhocjpcIit0LHtsZW5ndGhDb21wdXRhYmxlOmUubGVuZ3RoQ29tcHV0YWJsZSxsb2FkZWQ6ZS5sb2FkZWQsdG90YWw6ZS50b3RhbH0pfSl9KX0pO2NlKG4sXCJodG14OmJlZm9yZVNlbmRcIixJKTt2YXIgWT1xP251bGw6RXIoYixuLFQpO2Iuc2VuZChZKTtyZXR1cm4gbH1mdW5jdGlvbiBQcihlLHQpe3ZhciByPXQueGhyO3ZhciBuPW51bGw7dmFyIGk9bnVsbDtpZihPKHIsL0hYLVB1c2g6L2kpKXtuPXIuZ2V0UmVzcG9uc2VIZWFkZXIoXCJIWC1QdXNoXCIpO2k9XCJwdXNoXCJ9ZWxzZSBpZihPKHIsL0hYLVB1c2gtVXJsOi9pKSl7bj1yLmdldFJlc3BvbnNlSGVhZGVyKFwiSFgtUHVzaC1VcmxcIik7aT1cInB1c2hcIn1lbHNlIGlmKE8ociwvSFgtUmVwbGFjZS1Vcmw6L2kpKXtuPXIuZ2V0UmVzcG9uc2VIZWFkZXIoXCJIWC1SZXBsYWNlLVVybFwiKTtpPVwicmVwbGFjZVwifWlmKG4pe2lmKG49PT1cImZhbHNlXCIpe3JldHVybnt9fWVsc2V7cmV0dXJue3R5cGU6aSxwYXRoOm59fX12YXIgYT10LnBhdGhJbmZvLmZpbmFsUmVxdWVzdFBhdGg7dmFyIG89dC5wYXRoSW5mby5yZXNwb25zZVBhdGg7dmFyIHM9bmUoZSxcImh4LXB1c2gtdXJsXCIpO3ZhciBsPW5lKGUsXCJoeC1yZXBsYWNlLXVybFwiKTt2YXIgdT1hZShlKS5ib29zdGVkO3ZhciBmPW51bGw7dmFyIGM9bnVsbDtpZihzKXtmPVwicHVzaFwiO2M9c31lbHNlIGlmKGwpe2Y9XCJyZXBsYWNlXCI7Yz1sfWVsc2UgaWYodSl7Zj1cInB1c2hcIjtjPW98fGF9aWYoYyl7aWYoYz09PVwiZmFsc2VcIil7cmV0dXJue319aWYoYz09PVwidHJ1ZVwiKXtjPW98fGF9aWYodC5wYXRoSW5mby5hbmNob3ImJmMuaW5kZXhPZihcIiNcIik9PT0tMSl7Yz1jK1wiI1wiK3QucGF0aEluZm8uYW5jaG9yfXJldHVybnt0eXBlOmYscGF0aDpjfX1lbHNle3JldHVybnt9fX1mdW5jdGlvbiBNcihsLHUpe3ZhciBmPXUueGhyO3ZhciBjPXUudGFyZ2V0O3ZhciBlPXUuZXRjO3ZhciB0PXUucmVxdWVzdENvbmZpZzt2YXIgaD11LnNlbGVjdDtpZighY2UobCxcImh0bXg6YmVmb3JlT25Mb2FkXCIsdSkpcmV0dXJuO2lmKE8oZiwvSFgtVHJpZ2dlcjovaSkpe19lKGYsXCJIWC1UcmlnZ2VyXCIsbCl9aWYoTyhmLC9IWC1Mb2NhdGlvbjovaSkpe2VyKCk7dmFyIHI9Zi5nZXRSZXNwb25zZUhlYWRlcihcIkhYLUxvY2F0aW9uXCIpO3ZhciB2O2lmKHIuaW5kZXhPZihcIntcIik9PT0wKXt2PUUocik7cj12W1wicGF0aFwiXTtkZWxldGUgdltcInBhdGhcIl19TnIoXCJHRVRcIixyLHYpLnRoZW4oZnVuY3Rpb24oKXt0cihyKX0pO3JldHVybn12YXIgbj1PKGYsL0hYLVJlZnJlc2g6L2kpJiZcInRydWVcIj09PWYuZ2V0UmVzcG9uc2VIZWFkZXIoXCJIWC1SZWZyZXNoXCIpO2lmKE8oZiwvSFgtUmVkaXJlY3Q6L2kpKXtsb2NhdGlvbi5ocmVmPWYuZ2V0UmVzcG9uc2VIZWFkZXIoXCJIWC1SZWRpcmVjdFwiKTtuJiZsb2NhdGlvbi5yZWxvYWQoKTtyZXR1cm59aWYobil7bG9jYXRpb24ucmVsb2FkKCk7cmV0dXJufWlmKE8oZiwvSFgtUmV0YXJnZXQ6L2kpKXtpZihmLmdldFJlc3BvbnNlSGVhZGVyKFwiSFgtUmV0YXJnZXRcIik9PT1cInRoaXNcIil7dS50YXJnZXQ9bH1lbHNle3UudGFyZ2V0PXVlKGwsZi5nZXRSZXNwb25zZUhlYWRlcihcIkhYLVJldGFyZ2V0XCIpKX19dmFyIGQ9UHIobCx1KTt2YXIgaT1mLnN0YXR1cz49MjAwJiZmLnN0YXR1czw0MDAmJmYuc3RhdHVzIT09MjA0O3ZhciBnPWYucmVzcG9uc2U7dmFyIGE9Zi5zdGF0dXM+PTQwMDt2YXIgbT1RLmNvbmZpZy5pZ25vcmVUaXRsZTt2YXIgbz1sZSh7c2hvdWxkU3dhcDppLHNlcnZlclJlc3BvbnNlOmcsaXNFcnJvcjphLGlnbm9yZVRpdGxlOm19LHUpO2lmKCFjZShjLFwiaHRteDpiZWZvcmVTd2FwXCIsbykpcmV0dXJuO2M9by50YXJnZXQ7Zz1vLnNlcnZlclJlc3BvbnNlO2E9by5pc0Vycm9yO209by5pZ25vcmVUaXRsZTt1LnRhcmdldD1jO3UuZmFpbGVkPWE7dS5zdWNjZXNzZnVsPSFhO2lmKG8uc2hvdWxkU3dhcCl7aWYoZi5zdGF0dXM9PT0yODYpe2F0KGwpfVIobCxmdW5jdGlvbihlKXtnPWUudHJhbnNmb3JtUmVzcG9uc2UoZyxmLGwpfSk7aWYoZC50eXBlKXtlcigpfXZhciBzPWUuc3dhcE92ZXJyaWRlO2lmKE8oZiwvSFgtUmVzd2FwOi9pKSl7cz1mLmdldFJlc3BvbnNlSGVhZGVyKFwiSFgtUmVzd2FwXCIpfXZhciB2PXdyKGwscyk7aWYodi5oYXNPd25Qcm9wZXJ0eShcImlnbm9yZVRpdGxlXCIpKXttPXYuaWdub3JlVGl0bGV9Yy5jbGFzc0xpc3QuYWRkKFEuY29uZmlnLnN3YXBwaW5nQ2xhc3MpO3ZhciBwPW51bGw7dmFyIHg9bnVsbDt2YXIgeT1mdW5jdGlvbigpe3RyeXt2YXIgZT1kb2N1bWVudC5hY3RpdmVFbGVtZW50O3ZhciB0PXt9O3RyeXt0PXtlbHQ6ZSxzdGFydDplP2Uuc2VsZWN0aW9uU3RhcnQ6bnVsbCxlbmQ6ZT9lLnNlbGVjdGlvbkVuZDpudWxsfX1jYXRjaChlKXt9dmFyIHI7aWYoaCl7cj1ofWlmKE8oZiwvSFgtUmVzZWxlY3Q6L2kpKXtyPWYuZ2V0UmVzcG9uc2VIZWFkZXIoXCJIWC1SZXNlbGVjdFwiKX1pZihkLnR5cGUpe2NlKHJlKCkuYm9keSxcImh0bXg6YmVmb3JlSGlzdG9yeVVwZGF0ZVwiLGxlKHtoaXN0b3J5OmR9LHUpKTtpZihkLnR5cGU9PT1cInB1c2hcIil7dHIoZC5wYXRoKTtjZShyZSgpLmJvZHksXCJodG14OnB1c2hlZEludG9IaXN0b3J5XCIse3BhdGg6ZC5wYXRofSl9ZWxzZXtycihkLnBhdGgpO2NlKHJlKCkuYm9keSxcImh0bXg6cmVwbGFjZWRJbkhpc3RvcnlcIix7cGF0aDpkLnBhdGh9KX19dmFyIG49VChjKTtqZSh2LnN3YXBTdHlsZSxjLGwsZyxuLHIpO2lmKHQuZWx0JiYhc2UodC5lbHQpJiZlZSh0LmVsdCxcImlkXCIpKXt2YXIgaT1kb2N1bWVudC5nZXRFbGVtZW50QnlJZChlZSh0LmVsdCxcImlkXCIpKTt2YXIgYT17cHJldmVudFNjcm9sbDp2LmZvY3VzU2Nyb2xsIT09dW5kZWZpbmVkPyF2LmZvY3VzU2Nyb2xsOiFRLmNvbmZpZy5kZWZhdWx0Rm9jdXNTY3JvbGx9O2lmKGkpe2lmKHQuc3RhcnQmJmkuc2V0U2VsZWN0aW9uUmFuZ2Upe3RyeXtpLnNldFNlbGVjdGlvblJhbmdlKHQuc3RhcnQsdC5lbmQpfWNhdGNoKGUpe319aS5mb2N1cyhhKX19Yy5jbGFzc0xpc3QucmVtb3ZlKFEuY29uZmlnLnN3YXBwaW5nQ2xhc3MpO29lKG4uZWx0cyxmdW5jdGlvbihlKXtpZihlLmNsYXNzTGlzdCl7ZS5jbGFzc0xpc3QuYWRkKFEuY29uZmlnLnNldHRsaW5nQ2xhc3MpfWNlKGUsXCJodG14OmFmdGVyU3dhcFwiLHUpfSk7aWYoTyhmLC9IWC1UcmlnZ2VyLUFmdGVyLVN3YXA6L2kpKXt2YXIgbz1sO2lmKCFzZShsKSl7bz1yZSgpLmJvZHl9X2UoZixcIkhYLVRyaWdnZXItQWZ0ZXItU3dhcFwiLG8pfXZhciBzPWZ1bmN0aW9uKCl7b2Uobi50YXNrcyxmdW5jdGlvbihlKXtlLmNhbGwoKX0pO29lKG4uZWx0cyxmdW5jdGlvbihlKXtpZihlLmNsYXNzTGlzdCl7ZS5jbGFzc0xpc3QucmVtb3ZlKFEuY29uZmlnLnNldHRsaW5nQ2xhc3MpfWNlKGUsXCJodG14OmFmdGVyU2V0dGxlXCIsdSl9KTtpZih1LnBhdGhJbmZvLmFuY2hvcil7dmFyIGU9cmUoKS5nZXRFbGVtZW50QnlJZCh1LnBhdGhJbmZvLmFuY2hvcik7aWYoZSl7ZS5zY3JvbGxJbnRvVmlldyh7YmxvY2s6XCJzdGFydFwiLGJlaGF2aW9yOlwiYXV0b1wifSl9fWlmKG4udGl0bGUmJiFtKXt2YXIgdD1DKFwidGl0bGVcIik7aWYodCl7dC5pbm5lckhUTUw9bi50aXRsZX1lbHNle3dpbmRvdy5kb2N1bWVudC50aXRsZT1uLnRpdGxlfX1DcihuLmVsdHMsdik7aWYoTyhmLC9IWC1UcmlnZ2VyLUFmdGVyLVNldHRsZTovaSkpe3ZhciByPWw7aWYoIXNlKGwpKXtyPXJlKCkuYm9keX1fZShmLFwiSFgtVHJpZ2dlci1BZnRlci1TZXR0bGVcIixyKX1pZShwKX07aWYodi5zZXR0bGVEZWxheT4wKXtzZXRUaW1lb3V0KHMsdi5zZXR0bGVEZWxheSl9ZWxzZXtzKCl9fWNhdGNoKGUpe2ZlKGwsXCJodG14OnN3YXBFcnJvclwiLHUpO2llKHgpO3Rocm93IGV9fTt2YXIgYj1RLmNvbmZpZy5nbG9iYWxWaWV3VHJhbnNpdGlvbnM7aWYodi5oYXNPd25Qcm9wZXJ0eShcInRyYW5zaXRpb25cIikpe2I9di50cmFuc2l0aW9ufWlmKGImJmNlKGwsXCJodG14OmJlZm9yZVRyYW5zaXRpb25cIix1KSYmdHlwZW9mIFByb21pc2UhPT1cInVuZGVmaW5lZFwiJiZkb2N1bWVudC5zdGFydFZpZXdUcmFuc2l0aW9uKXt2YXIgdz1uZXcgUHJvbWlzZShmdW5jdGlvbihlLHQpe3A9ZTt4PXR9KTt2YXIgUz15O3k9ZnVuY3Rpb24oKXtkb2N1bWVudC5zdGFydFZpZXdUcmFuc2l0aW9uKGZ1bmN0aW9uKCl7UygpO3JldHVybiB3fSl9fWlmKHYuc3dhcERlbGF5PjApe3NldFRpbWVvdXQoeSx2LnN3YXBEZWxheSl9ZWxzZXt5KCl9fWlmKGEpe2ZlKGwsXCJodG14OnJlc3BvbnNlRXJyb3JcIixsZSh7ZXJyb3I6XCJSZXNwb25zZSBTdGF0dXMgRXJyb3IgQ29kZSBcIitmLnN0YXR1cytcIiBmcm9tIFwiK3UucGF0aEluZm8ucmVxdWVzdFBhdGh9LHUpKX19dmFyIFhyPXt9O2Z1bmN0aW9uIERyKCl7cmV0dXJue2luaXQ6ZnVuY3Rpb24oZSl7cmV0dXJuIG51bGx9LG9uRXZlbnQ6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gdHJ1ZX0sdHJhbnNmb3JtUmVzcG9uc2U6ZnVuY3Rpb24oZSx0LHIpe3JldHVybiBlfSxpc0lubGluZVN3YXA6ZnVuY3Rpb24oZSl7cmV0dXJuIGZhbHNlfSxoYW5kbGVTd2FwOmZ1bmN0aW9uKGUsdCxyLG4pe3JldHVybiBmYWxzZX0sZW5jb2RlUGFyYW1ldGVyczpmdW5jdGlvbihlLHQscil7cmV0dXJuIG51bGx9fX1mdW5jdGlvbiBVcihlLHQpe2lmKHQuaW5pdCl7dC5pbml0KHIpfVhyW2VdPWxlKERyKCksdCl9ZnVuY3Rpb24gQnIoZSl7ZGVsZXRlIFhyW2VdfWZ1bmN0aW9uIEZyKGUscixuKXtpZihlPT11bmRlZmluZWQpe3JldHVybiByfWlmKHI9PXVuZGVmaW5lZCl7cj1bXX1pZihuPT11bmRlZmluZWQpe249W119dmFyIHQ9dGUoZSxcImh4LWV4dFwiKTtpZih0KXtvZSh0LnNwbGl0KFwiLFwiKSxmdW5jdGlvbihlKXtlPWUucmVwbGFjZSgvIC9nLFwiXCIpO2lmKGUuc2xpY2UoMCw3KT09XCJpZ25vcmU6XCIpe24ucHVzaChlLnNsaWNlKDcpKTtyZXR1cm59aWYobi5pbmRleE9mKGUpPDApe3ZhciB0PVhyW2VdO2lmKHQmJnIuaW5kZXhPZih0KTwwKXtyLnB1c2godCl9fX0pfXJldHVybiBGcih1KGUpLHIsbil9dmFyIFZyPWZhbHNlO3JlKCkuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIixmdW5jdGlvbigpe1ZyPXRydWV9KTtmdW5jdGlvbiBqcihlKXtpZihWcnx8cmUoKS5yZWFkeVN0YXRlPT09XCJjb21wbGV0ZVwiKXtlKCl9ZWxzZXtyZSgpLmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsZSl9fWZ1bmN0aW9uIF9yKCl7aWYoUS5jb25maWcuaW5jbHVkZUluZGljYXRvclN0eWxlcyE9PWZhbHNlKXtyZSgpLmhlYWQuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYmVmb3JlZW5kXCIsXCI8c3R5bGU+ICAgICAgICAgICAgICAgICAgICAgIC5cIitRLmNvbmZpZy5pbmRpY2F0b3JDbGFzcytcIntvcGFjaXR5OjB9ICAgICAgICAgICAgICAgICAgICAgIC5cIitRLmNvbmZpZy5yZXF1ZXN0Q2xhc3MrXCIgLlwiK1EuY29uZmlnLmluZGljYXRvckNsYXNzK1wie29wYWNpdHk6MTsgdHJhbnNpdGlvbjogb3BhY2l0eSAyMDBtcyBlYXNlLWluO30gICAgICAgICAgICAgICAgICAgICAgLlwiK1EuY29uZmlnLnJlcXVlc3RDbGFzcytcIi5cIitRLmNvbmZpZy5pbmRpY2F0b3JDbGFzcytcIntvcGFjaXR5OjE7IHRyYW5zaXRpb246IG9wYWNpdHkgMjAwbXMgZWFzZS1pbjt9ICAgICAgICAgICAgICAgICAgICA8L3N0eWxlPlwiKX19ZnVuY3Rpb24genIoKXt2YXIgZT1yZSgpLnF1ZXJ5U2VsZWN0b3IoJ21ldGFbbmFtZT1cImh0bXgtY29uZmlnXCJdJyk7aWYoZSl7cmV0dXJuIEUoZS5jb250ZW50KX1lbHNle3JldHVybiBudWxsfX1mdW5jdGlvbiAkcigpe3ZhciBlPXpyKCk7aWYoZSl7US5jb25maWc9bGUoUS5jb25maWcsZSl9fWpyKGZ1bmN0aW9uKCl7JHIoKTtfcigpO3ZhciBlPXJlKCkuYm9keTt6dChlKTt2YXIgdD1yZSgpLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbaHgtdHJpZ2dlcj0ncmVzdG9yZWQnXSxbZGF0YS1oeC10cmlnZ2VyPSdyZXN0b3JlZCddXCIpO2UuYWRkRXZlbnRMaXN0ZW5lcihcImh0bXg6YWJvcnRcIixmdW5jdGlvbihlKXt2YXIgdD1lLnRhcmdldDt2YXIgcj1hZSh0KTtpZihyJiZyLnhocil7ci54aHIuYWJvcnQoKX19KTtjb25zdCByPXdpbmRvdy5vbnBvcHN0YXRlP3dpbmRvdy5vbnBvcHN0YXRlLmJpbmQod2luZG93KTpudWxsO3dpbmRvdy5vbnBvcHN0YXRlPWZ1bmN0aW9uKGUpe2lmKGUuc3RhdGUmJmUuc3RhdGUuaHRteCl7YXIoKTtvZSh0LGZ1bmN0aW9uKGUpe2NlKGUsXCJodG14OnJlc3RvcmVkXCIse2RvY3VtZW50OnJlKCksdHJpZ2dlckV2ZW50OmNlfSl9KX1lbHNle2lmKHIpe3IoZSl9fX07c2V0VGltZW91dChmdW5jdGlvbigpe2NlKGUsXCJodG14OmxvYWRcIix7fSk7ZT1udWxsfSwwKX0pO3JldHVybiBRfSgpfSk7IiwgIi8vIHBhY2thZ2VzL2FscGluZWpzL3NyYy9zY2hlZHVsZXIuanNcbnZhciBmbHVzaFBlbmRpbmcgPSBmYWxzZTtcbnZhciBmbHVzaGluZyA9IGZhbHNlO1xudmFyIHF1ZXVlID0gW107XG52YXIgbGFzdEZsdXNoZWRJbmRleCA9IC0xO1xuZnVuY3Rpb24gc2NoZWR1bGVyKGNhbGxiYWNrKSB7XG4gIHF1ZXVlSm9iKGNhbGxiYWNrKTtcbn1cbmZ1bmN0aW9uIHF1ZXVlSm9iKGpvYikge1xuICBpZiAoIXF1ZXVlLmluY2x1ZGVzKGpvYikpXG4gICAgcXVldWUucHVzaChqb2IpO1xuICBxdWV1ZUZsdXNoKCk7XG59XG5mdW5jdGlvbiBkZXF1ZXVlSm9iKGpvYikge1xuICBsZXQgaW5kZXggPSBxdWV1ZS5pbmRleE9mKGpvYik7XG4gIGlmIChpbmRleCAhPT0gLTEgJiYgaW5kZXggPiBsYXN0Rmx1c2hlZEluZGV4KVxuICAgIHF1ZXVlLnNwbGljZShpbmRleCwgMSk7XG59XG5mdW5jdGlvbiBxdWV1ZUZsdXNoKCkge1xuICBpZiAoIWZsdXNoaW5nICYmICFmbHVzaFBlbmRpbmcpIHtcbiAgICBmbHVzaFBlbmRpbmcgPSB0cnVlO1xuICAgIHF1ZXVlTWljcm90YXNrKGZsdXNoSm9icyk7XG4gIH1cbn1cbmZ1bmN0aW9uIGZsdXNoSm9icygpIHtcbiAgZmx1c2hQZW5kaW5nID0gZmFsc2U7XG4gIGZsdXNoaW5nID0gdHJ1ZTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBxdWV1ZS5sZW5ndGg7IGkrKykge1xuICAgIHF1ZXVlW2ldKCk7XG4gICAgbGFzdEZsdXNoZWRJbmRleCA9IGk7XG4gIH1cbiAgcXVldWUubGVuZ3RoID0gMDtcbiAgbGFzdEZsdXNoZWRJbmRleCA9IC0xO1xuICBmbHVzaGluZyA9IGZhbHNlO1xufVxuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvcmVhY3Rpdml0eS5qc1xudmFyIHJlYWN0aXZlO1xudmFyIGVmZmVjdDtcbnZhciByZWxlYXNlO1xudmFyIHJhdztcbnZhciBzaG91bGRTY2hlZHVsZSA9IHRydWU7XG5mdW5jdGlvbiBkaXNhYmxlRWZmZWN0U2NoZWR1bGluZyhjYWxsYmFjaykge1xuICBzaG91bGRTY2hlZHVsZSA9IGZhbHNlO1xuICBjYWxsYmFjaygpO1xuICBzaG91bGRTY2hlZHVsZSA9IHRydWU7XG59XG5mdW5jdGlvbiBzZXRSZWFjdGl2aXR5RW5naW5lKGVuZ2luZSkge1xuICByZWFjdGl2ZSA9IGVuZ2luZS5yZWFjdGl2ZTtcbiAgcmVsZWFzZSA9IGVuZ2luZS5yZWxlYXNlO1xuICBlZmZlY3QgPSAoY2FsbGJhY2spID0+IGVuZ2luZS5lZmZlY3QoY2FsbGJhY2ssIHsgc2NoZWR1bGVyOiAodGFzaykgPT4ge1xuICAgIGlmIChzaG91bGRTY2hlZHVsZSkge1xuICAgICAgc2NoZWR1bGVyKHRhc2spO1xuICAgIH0gZWxzZSB7XG4gICAgICB0YXNrKCk7XG4gICAgfVxuICB9IH0pO1xuICByYXcgPSBlbmdpbmUucmF3O1xufVxuZnVuY3Rpb24gb3ZlcnJpZGVFZmZlY3Qob3ZlcnJpZGUpIHtcbiAgZWZmZWN0ID0gb3ZlcnJpZGU7XG59XG5mdW5jdGlvbiBlbGVtZW50Qm91bmRFZmZlY3QoZWwpIHtcbiAgbGV0IGNsZWFudXAyID0gKCkgPT4ge1xuICB9O1xuICBsZXQgd3JhcHBlZEVmZmVjdCA9IChjYWxsYmFjaykgPT4ge1xuICAgIGxldCBlZmZlY3RSZWZlcmVuY2UgPSBlZmZlY3QoY2FsbGJhY2spO1xuICAgIGlmICghZWwuX3hfZWZmZWN0cykge1xuICAgICAgZWwuX3hfZWZmZWN0cyA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgU2V0KCk7XG4gICAgICBlbC5feF9ydW5FZmZlY3RzID0gKCkgPT4ge1xuICAgICAgICBlbC5feF9lZmZlY3RzLmZvckVhY2goKGkpID0+IGkoKSk7XG4gICAgICB9O1xuICAgIH1cbiAgICBlbC5feF9lZmZlY3RzLmFkZChlZmZlY3RSZWZlcmVuY2UpO1xuICAgIGNsZWFudXAyID0gKCkgPT4ge1xuICAgICAgaWYgKGVmZmVjdFJlZmVyZW5jZSA9PT0gdm9pZCAwKVxuICAgICAgICByZXR1cm47XG4gICAgICBlbC5feF9lZmZlY3RzLmRlbGV0ZShlZmZlY3RSZWZlcmVuY2UpO1xuICAgICAgcmVsZWFzZShlZmZlY3RSZWZlcmVuY2UpO1xuICAgIH07XG4gICAgcmV0dXJuIGVmZmVjdFJlZmVyZW5jZTtcbiAgfTtcbiAgcmV0dXJuIFt3cmFwcGVkRWZmZWN0LCAoKSA9PiB7XG4gICAgY2xlYW51cDIoKTtcbiAgfV07XG59XG5cbi8vIHBhY2thZ2VzL2FscGluZWpzL3NyYy91dGlscy9kaXNwYXRjaC5qc1xuZnVuY3Rpb24gZGlzcGF0Y2goZWwsIG5hbWUsIGRldGFpbCA9IHt9KSB7XG4gIGVsLmRpc3BhdGNoRXZlbnQoXG4gICAgbmV3IEN1c3RvbUV2ZW50KG5hbWUsIHtcbiAgICAgIGRldGFpbCxcbiAgICAgIGJ1YmJsZXM6IHRydWUsXG4gICAgICAvLyBBbGxvd3MgZXZlbnRzIHRvIHBhc3MgdGhlIHNoYWRvdyBET00gYmFycmllci5cbiAgICAgIGNvbXBvc2VkOiB0cnVlLFxuICAgICAgY2FuY2VsYWJsZTogdHJ1ZVxuICAgIH0pXG4gICk7XG59XG5cbi8vIHBhY2thZ2VzL2FscGluZWpzL3NyYy91dGlscy93YWxrLmpzXG5mdW5jdGlvbiB3YWxrKGVsLCBjYWxsYmFjaykge1xuICBpZiAodHlwZW9mIFNoYWRvd1Jvb3QgPT09IFwiZnVuY3Rpb25cIiAmJiBlbCBpbnN0YW5jZW9mIFNoYWRvd1Jvb3QpIHtcbiAgICBBcnJheS5mcm9tKGVsLmNoaWxkcmVuKS5mb3JFYWNoKChlbDIpID0+IHdhbGsoZWwyLCBjYWxsYmFjaykpO1xuICAgIHJldHVybjtcbiAgfVxuICBsZXQgc2tpcCA9IGZhbHNlO1xuICBjYWxsYmFjayhlbCwgKCkgPT4gc2tpcCA9IHRydWUpO1xuICBpZiAoc2tpcClcbiAgICByZXR1cm47XG4gIGxldCBub2RlID0gZWwuZmlyc3RFbGVtZW50Q2hpbGQ7XG4gIHdoaWxlIChub2RlKSB7XG4gICAgd2Fsayhub2RlLCBjYWxsYmFjaywgZmFsc2UpO1xuICAgIG5vZGUgPSBub2RlLm5leHRFbGVtZW50U2libGluZztcbiAgfVxufVxuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvdXRpbHMvd2Fybi5qc1xuZnVuY3Rpb24gd2FybihtZXNzYWdlLCAuLi5hcmdzKSB7XG4gIGNvbnNvbGUud2FybihgQWxwaW5lIFdhcm5pbmc6ICR7bWVzc2FnZX1gLCAuLi5hcmdzKTtcbn1cblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL2xpZmVjeWNsZS5qc1xudmFyIHN0YXJ0ZWQgPSBmYWxzZTtcbmZ1bmN0aW9uIHN0YXJ0KCkge1xuICBpZiAoc3RhcnRlZClcbiAgICB3YXJuKFwiQWxwaW5lIGhhcyBhbHJlYWR5IGJlZW4gaW5pdGlhbGl6ZWQgb24gdGhpcyBwYWdlLiBDYWxsaW5nIEFscGluZS5zdGFydCgpIG1vcmUgdGhhbiBvbmNlIGNhbiBjYXVzZSBwcm9ibGVtcy5cIik7XG4gIHN0YXJ0ZWQgPSB0cnVlO1xuICBpZiAoIWRvY3VtZW50LmJvZHkpXG4gICAgd2FybihcIlVuYWJsZSB0byBpbml0aWFsaXplLiBUcnlpbmcgdG8gbG9hZCBBbHBpbmUgYmVmb3JlIGA8Ym9keT5gIGlzIGF2YWlsYWJsZS4gRGlkIHlvdSBmb3JnZXQgdG8gYWRkIGBkZWZlcmAgaW4gQWxwaW5lJ3MgYDxzY3JpcHQ+YCB0YWc/XCIpO1xuICBkaXNwYXRjaChkb2N1bWVudCwgXCJhbHBpbmU6aW5pdFwiKTtcbiAgZGlzcGF0Y2goZG9jdW1lbnQsIFwiYWxwaW5lOmluaXRpYWxpemluZ1wiKTtcbiAgc3RhcnRPYnNlcnZpbmdNdXRhdGlvbnMoKTtcbiAgb25FbEFkZGVkKChlbCkgPT4gaW5pdFRyZWUoZWwsIHdhbGspKTtcbiAgb25FbFJlbW92ZWQoKGVsKSA9PiBkZXN0cm95VHJlZShlbCkpO1xuICBvbkF0dHJpYnV0ZXNBZGRlZCgoZWwsIGF0dHJzKSA9PiB7XG4gICAgZGlyZWN0aXZlcyhlbCwgYXR0cnMpLmZvckVhY2goKGhhbmRsZSkgPT4gaGFuZGxlKCkpO1xuICB9KTtcbiAgbGV0IG91dE5lc3RlZENvbXBvbmVudHMgPSAoZWwpID0+ICFjbG9zZXN0Um9vdChlbC5wYXJlbnRFbGVtZW50LCB0cnVlKTtcbiAgQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGFsbFNlbGVjdG9ycygpLmpvaW4oXCIsXCIpKSkuZmlsdGVyKG91dE5lc3RlZENvbXBvbmVudHMpLmZvckVhY2goKGVsKSA9PiB7XG4gICAgaW5pdFRyZWUoZWwpO1xuICB9KTtcbiAgZGlzcGF0Y2goZG9jdW1lbnQsIFwiYWxwaW5lOmluaXRpYWxpemVkXCIpO1xufVxudmFyIHJvb3RTZWxlY3RvckNhbGxiYWNrcyA9IFtdO1xudmFyIGluaXRTZWxlY3RvckNhbGxiYWNrcyA9IFtdO1xuZnVuY3Rpb24gcm9vdFNlbGVjdG9ycygpIHtcbiAgcmV0dXJuIHJvb3RTZWxlY3RvckNhbGxiYWNrcy5tYXAoKGZuKSA9PiBmbigpKTtcbn1cbmZ1bmN0aW9uIGFsbFNlbGVjdG9ycygpIHtcbiAgcmV0dXJuIHJvb3RTZWxlY3RvckNhbGxiYWNrcy5jb25jYXQoaW5pdFNlbGVjdG9yQ2FsbGJhY2tzKS5tYXAoKGZuKSA9PiBmbigpKTtcbn1cbmZ1bmN0aW9uIGFkZFJvb3RTZWxlY3RvcihzZWxlY3RvckNhbGxiYWNrKSB7XG4gIHJvb3RTZWxlY3RvckNhbGxiYWNrcy5wdXNoKHNlbGVjdG9yQ2FsbGJhY2spO1xufVxuZnVuY3Rpb24gYWRkSW5pdFNlbGVjdG9yKHNlbGVjdG9yQ2FsbGJhY2spIHtcbiAgaW5pdFNlbGVjdG9yQ2FsbGJhY2tzLnB1c2goc2VsZWN0b3JDYWxsYmFjayk7XG59XG5mdW5jdGlvbiBjbG9zZXN0Um9vdChlbCwgaW5jbHVkZUluaXRTZWxlY3RvcnMgPSBmYWxzZSkge1xuICByZXR1cm4gZmluZENsb3Nlc3QoZWwsIChlbGVtZW50KSA9PiB7XG4gICAgY29uc3Qgc2VsZWN0b3JzID0gaW5jbHVkZUluaXRTZWxlY3RvcnMgPyBhbGxTZWxlY3RvcnMoKSA6IHJvb3RTZWxlY3RvcnMoKTtcbiAgICBpZiAoc2VsZWN0b3JzLnNvbWUoKHNlbGVjdG9yKSA9PiBlbGVtZW50Lm1hdGNoZXMoc2VsZWN0b3IpKSlcbiAgICAgIHJldHVybiB0cnVlO1xuICB9KTtcbn1cbmZ1bmN0aW9uIGZpbmRDbG9zZXN0KGVsLCBjYWxsYmFjaykge1xuICBpZiAoIWVsKVxuICAgIHJldHVybjtcbiAgaWYgKGNhbGxiYWNrKGVsKSlcbiAgICByZXR1cm4gZWw7XG4gIGlmIChlbC5feF90ZWxlcG9ydEJhY2spXG4gICAgZWwgPSBlbC5feF90ZWxlcG9ydEJhY2s7XG4gIGlmICghZWwucGFyZW50RWxlbWVudClcbiAgICByZXR1cm47XG4gIHJldHVybiBmaW5kQ2xvc2VzdChlbC5wYXJlbnRFbGVtZW50LCBjYWxsYmFjayk7XG59XG5mdW5jdGlvbiBpc1Jvb3QoZWwpIHtcbiAgcmV0dXJuIHJvb3RTZWxlY3RvcnMoKS5zb21lKChzZWxlY3RvcikgPT4gZWwubWF0Y2hlcyhzZWxlY3RvcikpO1xufVxudmFyIGluaXRJbnRlcmNlcHRvcnMgPSBbXTtcbmZ1bmN0aW9uIGludGVyY2VwdEluaXQoY2FsbGJhY2spIHtcbiAgaW5pdEludGVyY2VwdG9ycy5wdXNoKGNhbGxiYWNrKTtcbn1cbmZ1bmN0aW9uIGluaXRUcmVlKGVsLCB3YWxrZXIgPSB3YWxrLCBpbnRlcmNlcHQgPSAoKSA9PiB7XG59KSB7XG4gIGRlZmVySGFuZGxpbmdEaXJlY3RpdmVzKCgpID0+IHtcbiAgICB3YWxrZXIoZWwsIChlbDIsIHNraXApID0+IHtcbiAgICAgIGludGVyY2VwdChlbDIsIHNraXApO1xuICAgICAgaW5pdEludGVyY2VwdG9ycy5mb3JFYWNoKChpKSA9PiBpKGVsMiwgc2tpcCkpO1xuICAgICAgZGlyZWN0aXZlcyhlbDIsIGVsMi5hdHRyaWJ1dGVzKS5mb3JFYWNoKChoYW5kbGUpID0+IGhhbmRsZSgpKTtcbiAgICAgIGVsMi5feF9pZ25vcmUgJiYgc2tpcCgpO1xuICAgIH0pO1xuICB9KTtcbn1cbmZ1bmN0aW9uIGRlc3Ryb3lUcmVlKHJvb3QpIHtcbiAgd2Fsayhyb290LCAoZWwpID0+IHtcbiAgICBjbGVhbnVwQXR0cmlidXRlcyhlbCk7XG4gICAgY2xlYW51cEVsZW1lbnQoZWwpO1xuICB9KTtcbn1cblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL211dGF0aW9uLmpzXG52YXIgb25BdHRyaWJ1dGVBZGRlZHMgPSBbXTtcbnZhciBvbkVsUmVtb3ZlZHMgPSBbXTtcbnZhciBvbkVsQWRkZWRzID0gW107XG5mdW5jdGlvbiBvbkVsQWRkZWQoY2FsbGJhY2spIHtcbiAgb25FbEFkZGVkcy5wdXNoKGNhbGxiYWNrKTtcbn1cbmZ1bmN0aW9uIG9uRWxSZW1vdmVkKGVsLCBjYWxsYmFjaykge1xuICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICBpZiAoIWVsLl94X2NsZWFudXBzKVxuICAgICAgZWwuX3hfY2xlYW51cHMgPSBbXTtcbiAgICBlbC5feF9jbGVhbnVwcy5wdXNoKGNhbGxiYWNrKTtcbiAgfSBlbHNlIHtcbiAgICBjYWxsYmFjayA9IGVsO1xuICAgIG9uRWxSZW1vdmVkcy5wdXNoKGNhbGxiYWNrKTtcbiAgfVxufVxuZnVuY3Rpb24gb25BdHRyaWJ1dGVzQWRkZWQoY2FsbGJhY2spIHtcbiAgb25BdHRyaWJ1dGVBZGRlZHMucHVzaChjYWxsYmFjayk7XG59XG5mdW5jdGlvbiBvbkF0dHJpYnV0ZVJlbW92ZWQoZWwsIG5hbWUsIGNhbGxiYWNrKSB7XG4gIGlmICghZWwuX3hfYXR0cmlidXRlQ2xlYW51cHMpXG4gICAgZWwuX3hfYXR0cmlidXRlQ2xlYW51cHMgPSB7fTtcbiAgaWYgKCFlbC5feF9hdHRyaWJ1dGVDbGVhbnVwc1tuYW1lXSlcbiAgICBlbC5feF9hdHRyaWJ1dGVDbGVhbnVwc1tuYW1lXSA9IFtdO1xuICBlbC5feF9hdHRyaWJ1dGVDbGVhbnVwc1tuYW1lXS5wdXNoKGNhbGxiYWNrKTtcbn1cbmZ1bmN0aW9uIGNsZWFudXBBdHRyaWJ1dGVzKGVsLCBuYW1lcykge1xuICBpZiAoIWVsLl94X2F0dHJpYnV0ZUNsZWFudXBzKVxuICAgIHJldHVybjtcbiAgT2JqZWN0LmVudHJpZXMoZWwuX3hfYXR0cmlidXRlQ2xlYW51cHMpLmZvckVhY2goKFtuYW1lLCB2YWx1ZV0pID0+IHtcbiAgICBpZiAobmFtZXMgPT09IHZvaWQgMCB8fCBuYW1lcy5pbmNsdWRlcyhuYW1lKSkge1xuICAgICAgdmFsdWUuZm9yRWFjaCgoaSkgPT4gaSgpKTtcbiAgICAgIGRlbGV0ZSBlbC5feF9hdHRyaWJ1dGVDbGVhbnVwc1tuYW1lXTtcbiAgICB9XG4gIH0pO1xufVxuZnVuY3Rpb24gY2xlYW51cEVsZW1lbnQoZWwpIHtcbiAgaWYgKGVsLl94X2NsZWFudXBzKSB7XG4gICAgd2hpbGUgKGVsLl94X2NsZWFudXBzLmxlbmd0aClcbiAgICAgIGVsLl94X2NsZWFudXBzLnBvcCgpKCk7XG4gIH1cbn1cbnZhciBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKG9uTXV0YXRlKTtcbnZhciBjdXJyZW50bHlPYnNlcnZpbmcgPSBmYWxzZTtcbmZ1bmN0aW9uIHN0YXJ0T2JzZXJ2aW5nTXV0YXRpb25zKCkge1xuICBvYnNlcnZlci5vYnNlcnZlKGRvY3VtZW50LCB7IHN1YnRyZWU6IHRydWUsIGNoaWxkTGlzdDogdHJ1ZSwgYXR0cmlidXRlczogdHJ1ZSwgYXR0cmlidXRlT2xkVmFsdWU6IHRydWUgfSk7XG4gIGN1cnJlbnRseU9ic2VydmluZyA9IHRydWU7XG59XG5mdW5jdGlvbiBzdG9wT2JzZXJ2aW5nTXV0YXRpb25zKCkge1xuICBmbHVzaE9ic2VydmVyKCk7XG4gIG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgY3VycmVudGx5T2JzZXJ2aW5nID0gZmFsc2U7XG59XG52YXIgcmVjb3JkUXVldWUgPSBbXTtcbnZhciB3aWxsUHJvY2Vzc1JlY29yZFF1ZXVlID0gZmFsc2U7XG5mdW5jdGlvbiBmbHVzaE9ic2VydmVyKCkge1xuICByZWNvcmRRdWV1ZSA9IHJlY29yZFF1ZXVlLmNvbmNhdChvYnNlcnZlci50YWtlUmVjb3JkcygpKTtcbiAgaWYgKHJlY29yZFF1ZXVlLmxlbmd0aCAmJiAhd2lsbFByb2Nlc3NSZWNvcmRRdWV1ZSkge1xuICAgIHdpbGxQcm9jZXNzUmVjb3JkUXVldWUgPSB0cnVlO1xuICAgIHF1ZXVlTWljcm90YXNrKCgpID0+IHtcbiAgICAgIHByb2Nlc3NSZWNvcmRRdWV1ZSgpO1xuICAgICAgd2lsbFByb2Nlc3NSZWNvcmRRdWV1ZSA9IGZhbHNlO1xuICAgIH0pO1xuICB9XG59XG5mdW5jdGlvbiBwcm9jZXNzUmVjb3JkUXVldWUoKSB7XG4gIG9uTXV0YXRlKHJlY29yZFF1ZXVlKTtcbiAgcmVjb3JkUXVldWUubGVuZ3RoID0gMDtcbn1cbmZ1bmN0aW9uIG11dGF0ZURvbShjYWxsYmFjaykge1xuICBpZiAoIWN1cnJlbnRseU9ic2VydmluZylcbiAgICByZXR1cm4gY2FsbGJhY2soKTtcbiAgc3RvcE9ic2VydmluZ011dGF0aW9ucygpO1xuICBsZXQgcmVzdWx0ID0gY2FsbGJhY2soKTtcbiAgc3RhcnRPYnNlcnZpbmdNdXRhdGlvbnMoKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cbnZhciBpc0NvbGxlY3RpbmcgPSBmYWxzZTtcbnZhciBkZWZlcnJlZE11dGF0aW9ucyA9IFtdO1xuZnVuY3Rpb24gZGVmZXJNdXRhdGlvbnMoKSB7XG4gIGlzQ29sbGVjdGluZyA9IHRydWU7XG59XG5mdW5jdGlvbiBmbHVzaEFuZFN0b3BEZWZlcnJpbmdNdXRhdGlvbnMoKSB7XG4gIGlzQ29sbGVjdGluZyA9IGZhbHNlO1xuICBvbk11dGF0ZShkZWZlcnJlZE11dGF0aW9ucyk7XG4gIGRlZmVycmVkTXV0YXRpb25zID0gW107XG59XG5mdW5jdGlvbiBvbk11dGF0ZShtdXRhdGlvbnMpIHtcbiAgaWYgKGlzQ29sbGVjdGluZykge1xuICAgIGRlZmVycmVkTXV0YXRpb25zID0gZGVmZXJyZWRNdXRhdGlvbnMuY29uY2F0KG11dGF0aW9ucyk7XG4gICAgcmV0dXJuO1xuICB9XG4gIGxldCBhZGRlZE5vZGVzID0gW107XG4gIGxldCByZW1vdmVkTm9kZXMgPSBbXTtcbiAgbGV0IGFkZGVkQXR0cmlidXRlcyA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCk7XG4gIGxldCByZW1vdmVkQXR0cmlidXRlcyA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbXV0YXRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKG11dGF0aW9uc1tpXS50YXJnZXQuX3hfaWdub3JlTXV0YXRpb25PYnNlcnZlcilcbiAgICAgIGNvbnRpbnVlO1xuICAgIGlmIChtdXRhdGlvbnNbaV0udHlwZSA9PT0gXCJjaGlsZExpc3RcIikge1xuICAgICAgbXV0YXRpb25zW2ldLmFkZGVkTm9kZXMuZm9yRWFjaCgobm9kZSkgPT4gbm9kZS5ub2RlVHlwZSA9PT0gMSAmJiBhZGRlZE5vZGVzLnB1c2gobm9kZSkpO1xuICAgICAgbXV0YXRpb25zW2ldLnJlbW92ZWROb2Rlcy5mb3JFYWNoKChub2RlKSA9PiBub2RlLm5vZGVUeXBlID09PSAxICYmIHJlbW92ZWROb2Rlcy5wdXNoKG5vZGUpKTtcbiAgICB9XG4gICAgaWYgKG11dGF0aW9uc1tpXS50eXBlID09PSBcImF0dHJpYnV0ZXNcIikge1xuICAgICAgbGV0IGVsID0gbXV0YXRpb25zW2ldLnRhcmdldDtcbiAgICAgIGxldCBuYW1lID0gbXV0YXRpb25zW2ldLmF0dHJpYnV0ZU5hbWU7XG4gICAgICBsZXQgb2xkVmFsdWUgPSBtdXRhdGlvbnNbaV0ub2xkVmFsdWU7XG4gICAgICBsZXQgYWRkMiA9ICgpID0+IHtcbiAgICAgICAgaWYgKCFhZGRlZEF0dHJpYnV0ZXMuaGFzKGVsKSlcbiAgICAgICAgICBhZGRlZEF0dHJpYnV0ZXMuc2V0KGVsLCBbXSk7XG4gICAgICAgIGFkZGVkQXR0cmlidXRlcy5nZXQoZWwpLnB1c2goeyBuYW1lLCB2YWx1ZTogZWwuZ2V0QXR0cmlidXRlKG5hbWUpIH0pO1xuICAgICAgfTtcbiAgICAgIGxldCByZW1vdmUgPSAoKSA9PiB7XG4gICAgICAgIGlmICghcmVtb3ZlZEF0dHJpYnV0ZXMuaGFzKGVsKSlcbiAgICAgICAgICByZW1vdmVkQXR0cmlidXRlcy5zZXQoZWwsIFtdKTtcbiAgICAgICAgcmVtb3ZlZEF0dHJpYnV0ZXMuZ2V0KGVsKS5wdXNoKG5hbWUpO1xuICAgICAgfTtcbiAgICAgIGlmIChlbC5oYXNBdHRyaWJ1dGUobmFtZSkgJiYgb2xkVmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgYWRkMigpO1xuICAgICAgfSBlbHNlIGlmIChlbC5oYXNBdHRyaWJ1dGUobmFtZSkpIHtcbiAgICAgICAgcmVtb3ZlKCk7XG4gICAgICAgIGFkZDIoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlbW92ZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZW1vdmVkQXR0cmlidXRlcy5mb3JFYWNoKChhdHRycywgZWwpID0+IHtcbiAgICBjbGVhbnVwQXR0cmlidXRlcyhlbCwgYXR0cnMpO1xuICB9KTtcbiAgYWRkZWRBdHRyaWJ1dGVzLmZvckVhY2goKGF0dHJzLCBlbCkgPT4ge1xuICAgIG9uQXR0cmlidXRlQWRkZWRzLmZvckVhY2goKGkpID0+IGkoZWwsIGF0dHJzKSk7XG4gIH0pO1xuICBmb3IgKGxldCBub2RlIG9mIHJlbW92ZWROb2Rlcykge1xuICAgIGlmIChhZGRlZE5vZGVzLmluY2x1ZGVzKG5vZGUpKVxuICAgICAgY29udGludWU7XG4gICAgb25FbFJlbW92ZWRzLmZvckVhY2goKGkpID0+IGkobm9kZSkpO1xuICAgIGRlc3Ryb3lUcmVlKG5vZGUpO1xuICB9XG4gIGFkZGVkTm9kZXMuZm9yRWFjaCgobm9kZSkgPT4ge1xuICAgIG5vZGUuX3hfaWdub3JlU2VsZiA9IHRydWU7XG4gICAgbm9kZS5feF9pZ25vcmUgPSB0cnVlO1xuICB9KTtcbiAgZm9yIChsZXQgbm9kZSBvZiBhZGRlZE5vZGVzKSB7XG4gICAgaWYgKHJlbW92ZWROb2Rlcy5pbmNsdWRlcyhub2RlKSlcbiAgICAgIGNvbnRpbnVlO1xuICAgIGlmICghbm9kZS5pc0Nvbm5lY3RlZClcbiAgICAgIGNvbnRpbnVlO1xuICAgIGRlbGV0ZSBub2RlLl94X2lnbm9yZVNlbGY7XG4gICAgZGVsZXRlIG5vZGUuX3hfaWdub3JlO1xuICAgIG9uRWxBZGRlZHMuZm9yRWFjaCgoaSkgPT4gaShub2RlKSk7XG4gICAgbm9kZS5feF9pZ25vcmUgPSB0cnVlO1xuICAgIG5vZGUuX3hfaWdub3JlU2VsZiA9IHRydWU7XG4gIH1cbiAgYWRkZWROb2Rlcy5mb3JFYWNoKChub2RlKSA9PiB7XG4gICAgZGVsZXRlIG5vZGUuX3hfaWdub3JlU2VsZjtcbiAgICBkZWxldGUgbm9kZS5feF9pZ25vcmU7XG4gIH0pO1xuICBhZGRlZE5vZGVzID0gbnVsbDtcbiAgcmVtb3ZlZE5vZGVzID0gbnVsbDtcbiAgYWRkZWRBdHRyaWJ1dGVzID0gbnVsbDtcbiAgcmVtb3ZlZEF0dHJpYnV0ZXMgPSBudWxsO1xufVxuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvc2NvcGUuanNcbmZ1bmN0aW9uIHNjb3BlKG5vZGUpIHtcbiAgcmV0dXJuIG1lcmdlUHJveGllcyhjbG9zZXN0RGF0YVN0YWNrKG5vZGUpKTtcbn1cbmZ1bmN0aW9uIGFkZFNjb3BlVG9Ob2RlKG5vZGUsIGRhdGEyLCByZWZlcmVuY2VOb2RlKSB7XG4gIG5vZGUuX3hfZGF0YVN0YWNrID0gW2RhdGEyLCAuLi5jbG9zZXN0RGF0YVN0YWNrKHJlZmVyZW5jZU5vZGUgfHwgbm9kZSldO1xuICByZXR1cm4gKCkgPT4ge1xuICAgIG5vZGUuX3hfZGF0YVN0YWNrID0gbm9kZS5feF9kYXRhU3RhY2suZmlsdGVyKChpKSA9PiBpICE9PSBkYXRhMik7XG4gIH07XG59XG5mdW5jdGlvbiBjbG9zZXN0RGF0YVN0YWNrKG5vZGUpIHtcbiAgaWYgKG5vZGUuX3hfZGF0YVN0YWNrKVxuICAgIHJldHVybiBub2RlLl94X2RhdGFTdGFjaztcbiAgaWYgKHR5cGVvZiBTaGFkb3dSb290ID09PSBcImZ1bmN0aW9uXCIgJiYgbm9kZSBpbnN0YW5jZW9mIFNoYWRvd1Jvb3QpIHtcbiAgICByZXR1cm4gY2xvc2VzdERhdGFTdGFjayhub2RlLmhvc3QpO1xuICB9XG4gIGlmICghbm9kZS5wYXJlbnROb2RlKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIHJldHVybiBjbG9zZXN0RGF0YVN0YWNrKG5vZGUucGFyZW50Tm9kZSk7XG59XG5mdW5jdGlvbiBtZXJnZVByb3hpZXMob2JqZWN0cykge1xuICByZXR1cm4gbmV3IFByb3h5KHsgb2JqZWN0cyB9LCBtZXJnZVByb3h5VHJhcCk7XG59XG52YXIgbWVyZ2VQcm94eVRyYXAgPSB7XG4gIG93bktleXMoeyBvYmplY3RzIH0pIHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbShcbiAgICAgIG5ldyBTZXQob2JqZWN0cy5mbGF0TWFwKChpKSA9PiBPYmplY3Qua2V5cyhpKSkpXG4gICAgKTtcbiAgfSxcbiAgaGFzKHsgb2JqZWN0cyB9LCBuYW1lKSB7XG4gICAgaWYgKG5hbWUgPT0gU3ltYm9sLnVuc2NvcGFibGVzKVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIHJldHVybiBvYmplY3RzLnNvbWUoXG4gICAgICAob2JqKSA9PiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBuYW1lKVxuICAgICk7XG4gIH0sXG4gIGdldCh7IG9iamVjdHMgfSwgbmFtZSwgdGhpc1Byb3h5KSB7XG4gICAgaWYgKG5hbWUgPT0gXCJ0b0pTT05cIilcbiAgICAgIHJldHVybiBjb2xsYXBzZVByb3hpZXM7XG4gICAgcmV0dXJuIFJlZmxlY3QuZ2V0KFxuICAgICAgb2JqZWN0cy5maW5kKFxuICAgICAgICAob2JqKSA9PiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBuYW1lKVxuICAgICAgKSB8fCB7fSxcbiAgICAgIG5hbWUsXG4gICAgICB0aGlzUHJveHlcbiAgICApO1xuICB9LFxuICBzZXQoeyBvYmplY3RzIH0sIG5hbWUsIHZhbHVlLCB0aGlzUHJveHkpIHtcbiAgICBjb25zdCB0YXJnZXQgPSBvYmplY3RzLmZpbmQoXG4gICAgICAob2JqKSA9PiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBuYW1lKVxuICAgICkgfHwgb2JqZWN0c1tvYmplY3RzLmxlbmd0aCAtIDFdO1xuICAgIGNvbnN0IGRlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwgbmFtZSk7XG4gICAgaWYgKGRlc2NyaXB0b3I/LnNldCAmJiBkZXNjcmlwdG9yPy5nZXQpXG4gICAgICByZXR1cm4gUmVmbGVjdC5zZXQodGFyZ2V0LCBuYW1lLCB2YWx1ZSwgdGhpc1Byb3h5KTtcbiAgICByZXR1cm4gUmVmbGVjdC5zZXQodGFyZ2V0LCBuYW1lLCB2YWx1ZSk7XG4gIH1cbn07XG5mdW5jdGlvbiBjb2xsYXBzZVByb3hpZXMoKSB7XG4gIGxldCBrZXlzID0gUmVmbGVjdC5vd25LZXlzKHRoaXMpO1xuICByZXR1cm4ga2V5cy5yZWR1Y2UoKGFjYywga2V5KSA9PiB7XG4gICAgYWNjW2tleV0gPSBSZWZsZWN0LmdldCh0aGlzLCBrZXkpO1xuICAgIHJldHVybiBhY2M7XG4gIH0sIHt9KTtcbn1cblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL2ludGVyY2VwdG9yLmpzXG5mdW5jdGlvbiBpbml0SW50ZXJjZXB0b3JzMihkYXRhMikge1xuICBsZXQgaXNPYmplY3QyID0gKHZhbCkgPT4gdHlwZW9mIHZhbCA9PT0gXCJvYmplY3RcIiAmJiAhQXJyYXkuaXNBcnJheSh2YWwpICYmIHZhbCAhPT0gbnVsbDtcbiAgbGV0IHJlY3Vyc2UgPSAob2JqLCBiYXNlUGF0aCA9IFwiXCIpID0+IHtcbiAgICBPYmplY3QuZW50cmllcyhPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhvYmopKS5mb3JFYWNoKChba2V5LCB7IHZhbHVlLCBlbnVtZXJhYmxlIH1dKSA9PiB7XG4gICAgICBpZiAoZW51bWVyYWJsZSA9PT0gZmFsc2UgfHwgdmFsdWUgPT09IHZvaWQgMClcbiAgICAgICAgcmV0dXJuO1xuICAgICAgbGV0IHBhdGggPSBiYXNlUGF0aCA9PT0gXCJcIiA/IGtleSA6IGAke2Jhc2VQYXRofS4ke2tleX1gO1xuICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJiB2YWx1ZSAhPT0gbnVsbCAmJiB2YWx1ZS5feF9pbnRlcmNlcHRvcikge1xuICAgICAgICBvYmpba2V5XSA9IHZhbHVlLmluaXRpYWxpemUoZGF0YTIsIHBhdGgsIGtleSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoaXNPYmplY3QyKHZhbHVlKSAmJiB2YWx1ZSAhPT0gb2JqICYmICEodmFsdWUgaW5zdGFuY2VvZiBFbGVtZW50KSkge1xuICAgICAgICAgIHJlY3Vyc2UodmFsdWUsIHBhdGgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG4gIHJldHVybiByZWN1cnNlKGRhdGEyKTtcbn1cbmZ1bmN0aW9uIGludGVyY2VwdG9yKGNhbGxiYWNrLCBtdXRhdGVPYmogPSAoKSA9PiB7XG59KSB7XG4gIGxldCBvYmogPSB7XG4gICAgaW5pdGlhbFZhbHVlOiB2b2lkIDAsXG4gICAgX3hfaW50ZXJjZXB0b3I6IHRydWUsXG4gICAgaW5pdGlhbGl6ZShkYXRhMiwgcGF0aCwga2V5KSB7XG4gICAgICByZXR1cm4gY2FsbGJhY2sodGhpcy5pbml0aWFsVmFsdWUsICgpID0+IGdldChkYXRhMiwgcGF0aCksICh2YWx1ZSkgPT4gc2V0KGRhdGEyLCBwYXRoLCB2YWx1ZSksIHBhdGgsIGtleSk7XG4gICAgfVxuICB9O1xuICBtdXRhdGVPYmoob2JqKTtcbiAgcmV0dXJuIChpbml0aWFsVmFsdWUpID0+IHtcbiAgICBpZiAodHlwZW9mIGluaXRpYWxWYWx1ZSA9PT0gXCJvYmplY3RcIiAmJiBpbml0aWFsVmFsdWUgIT09IG51bGwgJiYgaW5pdGlhbFZhbHVlLl94X2ludGVyY2VwdG9yKSB7XG4gICAgICBsZXQgaW5pdGlhbGl6ZSA9IG9iai5pbml0aWFsaXplLmJpbmQob2JqKTtcbiAgICAgIG9iai5pbml0aWFsaXplID0gKGRhdGEyLCBwYXRoLCBrZXkpID0+IHtcbiAgICAgICAgbGV0IGlubmVyVmFsdWUgPSBpbml0aWFsVmFsdWUuaW5pdGlhbGl6ZShkYXRhMiwgcGF0aCwga2V5KTtcbiAgICAgICAgb2JqLmluaXRpYWxWYWx1ZSA9IGlubmVyVmFsdWU7XG4gICAgICAgIHJldHVybiBpbml0aWFsaXplKGRhdGEyLCBwYXRoLCBrZXkpO1xuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgb2JqLmluaXRpYWxWYWx1ZSA9IGluaXRpYWxWYWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIG9iajtcbiAgfTtcbn1cbmZ1bmN0aW9uIGdldChvYmosIHBhdGgpIHtcbiAgcmV0dXJuIHBhdGguc3BsaXQoXCIuXCIpLnJlZHVjZSgoY2FycnksIHNlZ21lbnQpID0+IGNhcnJ5W3NlZ21lbnRdLCBvYmopO1xufVxuZnVuY3Rpb24gc2V0KG9iaiwgcGF0aCwgdmFsdWUpIHtcbiAgaWYgKHR5cGVvZiBwYXRoID09PSBcInN0cmluZ1wiKVxuICAgIHBhdGggPSBwYXRoLnNwbGl0KFwiLlwiKTtcbiAgaWYgKHBhdGgubGVuZ3RoID09PSAxKVxuICAgIG9ialtwYXRoWzBdXSA9IHZhbHVlO1xuICBlbHNlIGlmIChwYXRoLmxlbmd0aCA9PT0gMClcbiAgICB0aHJvdyBlcnJvcjtcbiAgZWxzZSB7XG4gICAgaWYgKG9ialtwYXRoWzBdXSlcbiAgICAgIHJldHVybiBzZXQob2JqW3BhdGhbMF1dLCBwYXRoLnNsaWNlKDEpLCB2YWx1ZSk7XG4gICAgZWxzZSB7XG4gICAgICBvYmpbcGF0aFswXV0gPSB7fTtcbiAgICAgIHJldHVybiBzZXQob2JqW3BhdGhbMF1dLCBwYXRoLnNsaWNlKDEpLCB2YWx1ZSk7XG4gICAgfVxuICB9XG59XG5cbi8vIHBhY2thZ2VzL2FscGluZWpzL3NyYy9tYWdpY3MuanNcbnZhciBtYWdpY3MgPSB7fTtcbmZ1bmN0aW9uIG1hZ2ljKG5hbWUsIGNhbGxiYWNrKSB7XG4gIG1hZ2ljc1tuYW1lXSA9IGNhbGxiYWNrO1xufVxuZnVuY3Rpb24gaW5qZWN0TWFnaWNzKG9iaiwgZWwpIHtcbiAgT2JqZWN0LmVudHJpZXMobWFnaWNzKS5mb3JFYWNoKChbbmFtZSwgY2FsbGJhY2tdKSA9PiB7XG4gICAgbGV0IG1lbW9pemVkVXRpbGl0aWVzID0gbnVsbDtcbiAgICBmdW5jdGlvbiBnZXRVdGlsaXRpZXMoKSB7XG4gICAgICBpZiAobWVtb2l6ZWRVdGlsaXRpZXMpIHtcbiAgICAgICAgcmV0dXJuIG1lbW9pemVkVXRpbGl0aWVzO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IFt1dGlsaXRpZXMsIGNsZWFudXAyXSA9IGdldEVsZW1lbnRCb3VuZFV0aWxpdGllcyhlbCk7XG4gICAgICAgIG1lbW9pemVkVXRpbGl0aWVzID0geyBpbnRlcmNlcHRvciwgLi4udXRpbGl0aWVzIH07XG4gICAgICAgIG9uRWxSZW1vdmVkKGVsLCBjbGVhbnVwMik7XG4gICAgICAgIHJldHVybiBtZW1vaXplZFV0aWxpdGllcztcbiAgICAgIH1cbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwgYCQke25hbWV9YCwge1xuICAgICAgZ2V0KCkge1xuICAgICAgICByZXR1cm4gY2FsbGJhY2soZWwsIGdldFV0aWxpdGllcygpKTtcbiAgICAgIH0sXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZVxuICAgIH0pO1xuICB9KTtcbiAgcmV0dXJuIG9iajtcbn1cblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL3V0aWxzL2Vycm9yLmpzXG5mdW5jdGlvbiB0cnlDYXRjaChlbCwgZXhwcmVzc2lvbiwgY2FsbGJhY2ssIC4uLmFyZ3MpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gY2FsbGJhY2soLi4uYXJncyk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBoYW5kbGVFcnJvcihlLCBlbCwgZXhwcmVzc2lvbik7XG4gIH1cbn1cbmZ1bmN0aW9uIGhhbmRsZUVycm9yKGVycm9yMiwgZWwsIGV4cHJlc3Npb24gPSB2b2lkIDApIHtcbiAgT2JqZWN0LmFzc2lnbihlcnJvcjIsIHsgZWwsIGV4cHJlc3Npb24gfSk7XG4gIGNvbnNvbGUud2FybihgQWxwaW5lIEV4cHJlc3Npb24gRXJyb3I6ICR7ZXJyb3IyLm1lc3NhZ2V9XG5cbiR7ZXhwcmVzc2lvbiA/ICdFeHByZXNzaW9uOiBcIicgKyBleHByZXNzaW9uICsgJ1wiXFxuXFxuJyA6IFwiXCJ9YCwgZWwpO1xuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICB0aHJvdyBlcnJvcjI7XG4gIH0sIDApO1xufVxuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvZXZhbHVhdG9yLmpzXG52YXIgc2hvdWxkQXV0b0V2YWx1YXRlRnVuY3Rpb25zID0gdHJ1ZTtcbmZ1bmN0aW9uIGRvbnRBdXRvRXZhbHVhdGVGdW5jdGlvbnMoY2FsbGJhY2spIHtcbiAgbGV0IGNhY2hlID0gc2hvdWxkQXV0b0V2YWx1YXRlRnVuY3Rpb25zO1xuICBzaG91bGRBdXRvRXZhbHVhdGVGdW5jdGlvbnMgPSBmYWxzZTtcbiAgbGV0IHJlc3VsdCA9IGNhbGxiYWNrKCk7XG4gIHNob3VsZEF1dG9FdmFsdWF0ZUZ1bmN0aW9ucyA9IGNhY2hlO1xuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gZXZhbHVhdGUoZWwsIGV4cHJlc3Npb24sIGV4dHJhcyA9IHt9KSB7XG4gIGxldCByZXN1bHQ7XG4gIGV2YWx1YXRlTGF0ZXIoZWwsIGV4cHJlc3Npb24pKCh2YWx1ZSkgPT4gcmVzdWx0ID0gdmFsdWUsIGV4dHJhcyk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBldmFsdWF0ZUxhdGVyKC4uLmFyZ3MpIHtcbiAgcmV0dXJuIHRoZUV2YWx1YXRvckZ1bmN0aW9uKC4uLmFyZ3MpO1xufVxudmFyIHRoZUV2YWx1YXRvckZ1bmN0aW9uID0gbm9ybWFsRXZhbHVhdG9yO1xuZnVuY3Rpb24gc2V0RXZhbHVhdG9yKG5ld0V2YWx1YXRvcikge1xuICB0aGVFdmFsdWF0b3JGdW5jdGlvbiA9IG5ld0V2YWx1YXRvcjtcbn1cbmZ1bmN0aW9uIG5vcm1hbEV2YWx1YXRvcihlbCwgZXhwcmVzc2lvbikge1xuICBsZXQgb3ZlcnJpZGRlbk1hZ2ljcyA9IHt9O1xuICBpbmplY3RNYWdpY3Mob3ZlcnJpZGRlbk1hZ2ljcywgZWwpO1xuICBsZXQgZGF0YVN0YWNrID0gW292ZXJyaWRkZW5NYWdpY3MsIC4uLmNsb3Nlc3REYXRhU3RhY2soZWwpXTtcbiAgbGV0IGV2YWx1YXRvciA9IHR5cGVvZiBleHByZXNzaW9uID09PSBcImZ1bmN0aW9uXCIgPyBnZW5lcmF0ZUV2YWx1YXRvckZyb21GdW5jdGlvbihkYXRhU3RhY2ssIGV4cHJlc3Npb24pIDogZ2VuZXJhdGVFdmFsdWF0b3JGcm9tU3RyaW5nKGRhdGFTdGFjaywgZXhwcmVzc2lvbiwgZWwpO1xuICByZXR1cm4gdHJ5Q2F0Y2guYmluZChudWxsLCBlbCwgZXhwcmVzc2lvbiwgZXZhbHVhdG9yKTtcbn1cbmZ1bmN0aW9uIGdlbmVyYXRlRXZhbHVhdG9yRnJvbUZ1bmN0aW9uKGRhdGFTdGFjaywgZnVuYykge1xuICByZXR1cm4gKHJlY2VpdmVyID0gKCkgPT4ge1xuICB9LCB7IHNjb3BlOiBzY29wZTIgPSB7fSwgcGFyYW1zID0gW10gfSA9IHt9KSA9PiB7XG4gICAgbGV0IHJlc3VsdCA9IGZ1bmMuYXBwbHkobWVyZ2VQcm94aWVzKFtzY29wZTIsIC4uLmRhdGFTdGFja10pLCBwYXJhbXMpO1xuICAgIHJ1bklmVHlwZU9mRnVuY3Rpb24ocmVjZWl2ZXIsIHJlc3VsdCk7XG4gIH07XG59XG52YXIgZXZhbHVhdG9yTWVtbyA9IHt9O1xuZnVuY3Rpb24gZ2VuZXJhdGVGdW5jdGlvbkZyb21TdHJpbmcoZXhwcmVzc2lvbiwgZWwpIHtcbiAgaWYgKGV2YWx1YXRvck1lbW9bZXhwcmVzc2lvbl0pIHtcbiAgICByZXR1cm4gZXZhbHVhdG9yTWVtb1tleHByZXNzaW9uXTtcbiAgfVxuICBsZXQgQXN5bmNGdW5jdGlvbiA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihhc3luYyBmdW5jdGlvbigpIHtcbiAgfSkuY29uc3RydWN0b3I7XG4gIGxldCByaWdodFNpZGVTYWZlRXhwcmVzc2lvbiA9IC9eW1xcblxcc10qaWYuKlxcKC4qXFwpLy50ZXN0KGV4cHJlc3Npb24udHJpbSgpKSB8fCAvXihsZXR8Y29uc3QpXFxzLy50ZXN0KGV4cHJlc3Npb24udHJpbSgpKSA/IGAoYXN5bmMoKT0+eyAke2V4cHJlc3Npb259IH0pKClgIDogZXhwcmVzc2lvbjtcbiAgY29uc3Qgc2FmZUFzeW5jRnVuY3Rpb24gPSAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGxldCBmdW5jMiA9IG5ldyBBc3luY0Z1bmN0aW9uKFxuICAgICAgICBbXCJfX3NlbGZcIiwgXCJzY29wZVwiXSxcbiAgICAgICAgYHdpdGggKHNjb3BlKSB7IF9fc2VsZi5yZXN1bHQgPSAke3JpZ2h0U2lkZVNhZmVFeHByZXNzaW9ufSB9OyBfX3NlbGYuZmluaXNoZWQgPSB0cnVlOyByZXR1cm4gX19zZWxmLnJlc3VsdDtgXG4gICAgICApO1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGZ1bmMyLCBcIm5hbWVcIiwge1xuICAgICAgICB2YWx1ZTogYFtBbHBpbmVdICR7ZXhwcmVzc2lvbn1gXG4gICAgICB9KTtcbiAgICAgIHJldHVybiBmdW5jMjtcbiAgICB9IGNhdGNoIChlcnJvcjIpIHtcbiAgICAgIGhhbmRsZUVycm9yKGVycm9yMiwgZWwsIGV4cHJlc3Npb24pO1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgIH1cbiAgfTtcbiAgbGV0IGZ1bmMgPSBzYWZlQXN5bmNGdW5jdGlvbigpO1xuICBldmFsdWF0b3JNZW1vW2V4cHJlc3Npb25dID0gZnVuYztcbiAgcmV0dXJuIGZ1bmM7XG59XG5mdW5jdGlvbiBnZW5lcmF0ZUV2YWx1YXRvckZyb21TdHJpbmcoZGF0YVN0YWNrLCBleHByZXNzaW9uLCBlbCkge1xuICBsZXQgZnVuYyA9IGdlbmVyYXRlRnVuY3Rpb25Gcm9tU3RyaW5nKGV4cHJlc3Npb24sIGVsKTtcbiAgcmV0dXJuIChyZWNlaXZlciA9ICgpID0+IHtcbiAgfSwgeyBzY29wZTogc2NvcGUyID0ge30sIHBhcmFtcyA9IFtdIH0gPSB7fSkgPT4ge1xuICAgIGZ1bmMucmVzdWx0ID0gdm9pZCAwO1xuICAgIGZ1bmMuZmluaXNoZWQgPSBmYWxzZTtcbiAgICBsZXQgY29tcGxldGVTY29wZSA9IG1lcmdlUHJveGllcyhbc2NvcGUyLCAuLi5kYXRhU3RhY2tdKTtcbiAgICBpZiAodHlwZW9mIGZ1bmMgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgbGV0IHByb21pc2UgPSBmdW5jKGZ1bmMsIGNvbXBsZXRlU2NvcGUpLmNhdGNoKChlcnJvcjIpID0+IGhhbmRsZUVycm9yKGVycm9yMiwgZWwsIGV4cHJlc3Npb24pKTtcbiAgICAgIGlmIChmdW5jLmZpbmlzaGVkKSB7XG4gICAgICAgIHJ1bklmVHlwZU9mRnVuY3Rpb24ocmVjZWl2ZXIsIGZ1bmMucmVzdWx0LCBjb21wbGV0ZVNjb3BlLCBwYXJhbXMsIGVsKTtcbiAgICAgICAgZnVuYy5yZXN1bHQgPSB2b2lkIDA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwcm9taXNlLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgIHJ1bklmVHlwZU9mRnVuY3Rpb24ocmVjZWl2ZXIsIHJlc3VsdCwgY29tcGxldGVTY29wZSwgcGFyYW1zLCBlbCk7XG4gICAgICAgIH0pLmNhdGNoKChlcnJvcjIpID0+IGhhbmRsZUVycm9yKGVycm9yMiwgZWwsIGV4cHJlc3Npb24pKS5maW5hbGx5KCgpID0+IGZ1bmMucmVzdWx0ID0gdm9pZCAwKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG59XG5mdW5jdGlvbiBydW5JZlR5cGVPZkZ1bmN0aW9uKHJlY2VpdmVyLCB2YWx1ZSwgc2NvcGUyLCBwYXJhbXMsIGVsKSB7XG4gIGlmIChzaG91bGRBdXRvRXZhbHVhdGVGdW5jdGlvbnMgJiYgdHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICBsZXQgcmVzdWx0ID0gdmFsdWUuYXBwbHkoc2NvcGUyLCBwYXJhbXMpO1xuICAgIGlmIChyZXN1bHQgaW5zdGFuY2VvZiBQcm9taXNlKSB7XG4gICAgICByZXN1bHQudGhlbigoaSkgPT4gcnVuSWZUeXBlT2ZGdW5jdGlvbihyZWNlaXZlciwgaSwgc2NvcGUyLCBwYXJhbXMpKS5jYXRjaCgoZXJyb3IyKSA9PiBoYW5kbGVFcnJvcihlcnJvcjIsIGVsLCB2YWx1ZSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZWNlaXZlcihyZXN1bHQpO1xuICAgIH1cbiAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiYgdmFsdWUgaW5zdGFuY2VvZiBQcm9taXNlKSB7XG4gICAgdmFsdWUudGhlbigoaSkgPT4gcmVjZWl2ZXIoaSkpO1xuICB9IGVsc2Uge1xuICAgIHJlY2VpdmVyKHZhbHVlKTtcbiAgfVxufVxuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvZGlyZWN0aXZlcy5qc1xudmFyIHByZWZpeEFzU3RyaW5nID0gXCJ4LVwiO1xuZnVuY3Rpb24gcHJlZml4KHN1YmplY3QgPSBcIlwiKSB7XG4gIHJldHVybiBwcmVmaXhBc1N0cmluZyArIHN1YmplY3Q7XG59XG5mdW5jdGlvbiBzZXRQcmVmaXgobmV3UHJlZml4KSB7XG4gIHByZWZpeEFzU3RyaW5nID0gbmV3UHJlZml4O1xufVxudmFyIGRpcmVjdGl2ZUhhbmRsZXJzID0ge307XG5mdW5jdGlvbiBkaXJlY3RpdmUobmFtZSwgY2FsbGJhY2spIHtcbiAgZGlyZWN0aXZlSGFuZGxlcnNbbmFtZV0gPSBjYWxsYmFjaztcbiAgcmV0dXJuIHtcbiAgICBiZWZvcmUoZGlyZWN0aXZlMikge1xuICAgICAgaWYgKCFkaXJlY3RpdmVIYW5kbGVyc1tkaXJlY3RpdmUyXSkge1xuICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgXCJDYW5ub3QgZmluZCBkaXJlY3RpdmUgYCR7ZGlyZWN0aXZlfWAuIGAke25hbWV9YCB3aWxsIHVzZSB0aGUgZGVmYXVsdCBvcmRlciBvZiBleGVjdXRpb25cIlxuICAgICAgICApO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBwb3MgPSBkaXJlY3RpdmVPcmRlci5pbmRleE9mKGRpcmVjdGl2ZTIpO1xuICAgICAgZGlyZWN0aXZlT3JkZXIuc3BsaWNlKHBvcyA+PSAwID8gcG9zIDogZGlyZWN0aXZlT3JkZXIuaW5kZXhPZihcIkRFRkFVTFRcIiksIDAsIG5hbWUpO1xuICAgIH1cbiAgfTtcbn1cbmZ1bmN0aW9uIGRpcmVjdGl2ZXMoZWwsIGF0dHJpYnV0ZXMsIG9yaWdpbmFsQXR0cmlidXRlT3ZlcnJpZGUpIHtcbiAgYXR0cmlidXRlcyA9IEFycmF5LmZyb20oYXR0cmlidXRlcyk7XG4gIGlmIChlbC5feF92aXJ0dWFsRGlyZWN0aXZlcykge1xuICAgIGxldCB2QXR0cmlidXRlcyA9IE9iamVjdC5lbnRyaWVzKGVsLl94X3ZpcnR1YWxEaXJlY3RpdmVzKS5tYXAoKFtuYW1lLCB2YWx1ZV0pID0+ICh7IG5hbWUsIHZhbHVlIH0pKTtcbiAgICBsZXQgc3RhdGljQXR0cmlidXRlcyA9IGF0dHJpYnV0ZXNPbmx5KHZBdHRyaWJ1dGVzKTtcbiAgICB2QXR0cmlidXRlcyA9IHZBdHRyaWJ1dGVzLm1hcCgoYXR0cmlidXRlKSA9PiB7XG4gICAgICBpZiAoc3RhdGljQXR0cmlidXRlcy5maW5kKChhdHRyKSA9PiBhdHRyLm5hbWUgPT09IGF0dHJpYnV0ZS5uYW1lKSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIG5hbWU6IGB4LWJpbmQ6JHthdHRyaWJ1dGUubmFtZX1gLFxuICAgICAgICAgIHZhbHVlOiBgXCIke2F0dHJpYnV0ZS52YWx1ZX1cImBcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBhdHRyaWJ1dGU7XG4gICAgfSk7XG4gICAgYXR0cmlidXRlcyA9IGF0dHJpYnV0ZXMuY29uY2F0KHZBdHRyaWJ1dGVzKTtcbiAgfVxuICBsZXQgdHJhbnNmb3JtZWRBdHRyaWJ1dGVNYXAgPSB7fTtcbiAgbGV0IGRpcmVjdGl2ZXMyID0gYXR0cmlidXRlcy5tYXAodG9UcmFuc2Zvcm1lZEF0dHJpYnV0ZXMoKG5ld05hbWUsIG9sZE5hbWUpID0+IHRyYW5zZm9ybWVkQXR0cmlidXRlTWFwW25ld05hbWVdID0gb2xkTmFtZSkpLmZpbHRlcihvdXROb25BbHBpbmVBdHRyaWJ1dGVzKS5tYXAodG9QYXJzZWREaXJlY3RpdmVzKHRyYW5zZm9ybWVkQXR0cmlidXRlTWFwLCBvcmlnaW5hbEF0dHJpYnV0ZU92ZXJyaWRlKSkuc29ydChieVByaW9yaXR5KTtcbiAgcmV0dXJuIGRpcmVjdGl2ZXMyLm1hcCgoZGlyZWN0aXZlMikgPT4ge1xuICAgIHJldHVybiBnZXREaXJlY3RpdmVIYW5kbGVyKGVsLCBkaXJlY3RpdmUyKTtcbiAgfSk7XG59XG5mdW5jdGlvbiBhdHRyaWJ1dGVzT25seShhdHRyaWJ1dGVzKSB7XG4gIHJldHVybiBBcnJheS5mcm9tKGF0dHJpYnV0ZXMpLm1hcCh0b1RyYW5zZm9ybWVkQXR0cmlidXRlcygpKS5maWx0ZXIoKGF0dHIpID0+ICFvdXROb25BbHBpbmVBdHRyaWJ1dGVzKGF0dHIpKTtcbn1cbnZhciBpc0RlZmVycmluZ0hhbmRsZXJzID0gZmFsc2U7XG52YXIgZGlyZWN0aXZlSGFuZGxlclN0YWNrcyA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCk7XG52YXIgY3VycmVudEhhbmRsZXJTdGFja0tleSA9IFN5bWJvbCgpO1xuZnVuY3Rpb24gZGVmZXJIYW5kbGluZ0RpcmVjdGl2ZXMoY2FsbGJhY2spIHtcbiAgaXNEZWZlcnJpbmdIYW5kbGVycyA9IHRydWU7XG4gIGxldCBrZXkgPSBTeW1ib2woKTtcbiAgY3VycmVudEhhbmRsZXJTdGFja0tleSA9IGtleTtcbiAgZGlyZWN0aXZlSGFuZGxlclN0YWNrcy5zZXQoa2V5LCBbXSk7XG4gIGxldCBmbHVzaEhhbmRsZXJzID0gKCkgPT4ge1xuICAgIHdoaWxlIChkaXJlY3RpdmVIYW5kbGVyU3RhY2tzLmdldChrZXkpLmxlbmd0aClcbiAgICAgIGRpcmVjdGl2ZUhhbmRsZXJTdGFja3MuZ2V0KGtleSkuc2hpZnQoKSgpO1xuICAgIGRpcmVjdGl2ZUhhbmRsZXJTdGFja3MuZGVsZXRlKGtleSk7XG4gIH07XG4gIGxldCBzdG9wRGVmZXJyaW5nID0gKCkgPT4ge1xuICAgIGlzRGVmZXJyaW5nSGFuZGxlcnMgPSBmYWxzZTtcbiAgICBmbHVzaEhhbmRsZXJzKCk7XG4gIH07XG4gIGNhbGxiYWNrKGZsdXNoSGFuZGxlcnMpO1xuICBzdG9wRGVmZXJyaW5nKCk7XG59XG5mdW5jdGlvbiBnZXRFbGVtZW50Qm91bmRVdGlsaXRpZXMoZWwpIHtcbiAgbGV0IGNsZWFudXBzID0gW107XG4gIGxldCBjbGVhbnVwMiA9IChjYWxsYmFjaykgPT4gY2xlYW51cHMucHVzaChjYWxsYmFjayk7XG4gIGxldCBbZWZmZWN0MywgY2xlYW51cEVmZmVjdF0gPSBlbGVtZW50Qm91bmRFZmZlY3QoZWwpO1xuICBjbGVhbnVwcy5wdXNoKGNsZWFudXBFZmZlY3QpO1xuICBsZXQgdXRpbGl0aWVzID0ge1xuICAgIEFscGluZTogYWxwaW5lX2RlZmF1bHQsXG4gICAgZWZmZWN0OiBlZmZlY3QzLFxuICAgIGNsZWFudXA6IGNsZWFudXAyLFxuICAgIGV2YWx1YXRlTGF0ZXI6IGV2YWx1YXRlTGF0ZXIuYmluZChldmFsdWF0ZUxhdGVyLCBlbCksXG4gICAgZXZhbHVhdGU6IGV2YWx1YXRlLmJpbmQoZXZhbHVhdGUsIGVsKVxuICB9O1xuICBsZXQgZG9DbGVhbnVwID0gKCkgPT4gY2xlYW51cHMuZm9yRWFjaCgoaSkgPT4gaSgpKTtcbiAgcmV0dXJuIFt1dGlsaXRpZXMsIGRvQ2xlYW51cF07XG59XG5mdW5jdGlvbiBnZXREaXJlY3RpdmVIYW5kbGVyKGVsLCBkaXJlY3RpdmUyKSB7XG4gIGxldCBub29wID0gKCkgPT4ge1xuICB9O1xuICBsZXQgaGFuZGxlcjQgPSBkaXJlY3RpdmVIYW5kbGVyc1tkaXJlY3RpdmUyLnR5cGVdIHx8IG5vb3A7XG4gIGxldCBbdXRpbGl0aWVzLCBjbGVhbnVwMl0gPSBnZXRFbGVtZW50Qm91bmRVdGlsaXRpZXMoZWwpO1xuICBvbkF0dHJpYnV0ZVJlbW92ZWQoZWwsIGRpcmVjdGl2ZTIub3JpZ2luYWwsIGNsZWFudXAyKTtcbiAgbGV0IGZ1bGxIYW5kbGVyID0gKCkgPT4ge1xuICAgIGlmIChlbC5feF9pZ25vcmUgfHwgZWwuX3hfaWdub3JlU2VsZilcbiAgICAgIHJldHVybjtcbiAgICBoYW5kbGVyNC5pbmxpbmUgJiYgaGFuZGxlcjQuaW5saW5lKGVsLCBkaXJlY3RpdmUyLCB1dGlsaXRpZXMpO1xuICAgIGhhbmRsZXI0ID0gaGFuZGxlcjQuYmluZChoYW5kbGVyNCwgZWwsIGRpcmVjdGl2ZTIsIHV0aWxpdGllcyk7XG4gICAgaXNEZWZlcnJpbmdIYW5kbGVycyA/IGRpcmVjdGl2ZUhhbmRsZXJTdGFja3MuZ2V0KGN1cnJlbnRIYW5kbGVyU3RhY2tLZXkpLnB1c2goaGFuZGxlcjQpIDogaGFuZGxlcjQoKTtcbiAgfTtcbiAgZnVsbEhhbmRsZXIucnVuQ2xlYW51cHMgPSBjbGVhbnVwMjtcbiAgcmV0dXJuIGZ1bGxIYW5kbGVyO1xufVxudmFyIHN0YXJ0aW5nV2l0aCA9IChzdWJqZWN0LCByZXBsYWNlbWVudCkgPT4gKHsgbmFtZSwgdmFsdWUgfSkgPT4ge1xuICBpZiAobmFtZS5zdGFydHNXaXRoKHN1YmplY3QpKVxuICAgIG5hbWUgPSBuYW1lLnJlcGxhY2Uoc3ViamVjdCwgcmVwbGFjZW1lbnQpO1xuICByZXR1cm4geyBuYW1lLCB2YWx1ZSB9O1xufTtcbnZhciBpbnRvID0gKGkpID0+IGk7XG5mdW5jdGlvbiB0b1RyYW5zZm9ybWVkQXR0cmlidXRlcyhjYWxsYmFjayA9ICgpID0+IHtcbn0pIHtcbiAgcmV0dXJuICh7IG5hbWUsIHZhbHVlIH0pID0+IHtcbiAgICBsZXQgeyBuYW1lOiBuZXdOYW1lLCB2YWx1ZTogbmV3VmFsdWUgfSA9IGF0dHJpYnV0ZVRyYW5zZm9ybWVycy5yZWR1Y2UoKGNhcnJ5LCB0cmFuc2Zvcm0pID0+IHtcbiAgICAgIHJldHVybiB0cmFuc2Zvcm0oY2FycnkpO1xuICAgIH0sIHsgbmFtZSwgdmFsdWUgfSk7XG4gICAgaWYgKG5ld05hbWUgIT09IG5hbWUpXG4gICAgICBjYWxsYmFjayhuZXdOYW1lLCBuYW1lKTtcbiAgICByZXR1cm4geyBuYW1lOiBuZXdOYW1lLCB2YWx1ZTogbmV3VmFsdWUgfTtcbiAgfTtcbn1cbnZhciBhdHRyaWJ1dGVUcmFuc2Zvcm1lcnMgPSBbXTtcbmZ1bmN0aW9uIG1hcEF0dHJpYnV0ZXMoY2FsbGJhY2spIHtcbiAgYXR0cmlidXRlVHJhbnNmb3JtZXJzLnB1c2goY2FsbGJhY2spO1xufVxuZnVuY3Rpb24gb3V0Tm9uQWxwaW5lQXR0cmlidXRlcyh7IG5hbWUgfSkge1xuICByZXR1cm4gYWxwaW5lQXR0cmlidXRlUmVnZXgoKS50ZXN0KG5hbWUpO1xufVxudmFyIGFscGluZUF0dHJpYnV0ZVJlZ2V4ID0gKCkgPT4gbmV3IFJlZ0V4cChgXiR7cHJlZml4QXNTdHJpbmd9KFteOl4uXSspXFxcXGJgKTtcbmZ1bmN0aW9uIHRvUGFyc2VkRGlyZWN0aXZlcyh0cmFuc2Zvcm1lZEF0dHJpYnV0ZU1hcCwgb3JpZ2luYWxBdHRyaWJ1dGVPdmVycmlkZSkge1xuICByZXR1cm4gKHsgbmFtZSwgdmFsdWUgfSkgPT4ge1xuICAgIGxldCB0eXBlTWF0Y2ggPSBuYW1lLm1hdGNoKGFscGluZUF0dHJpYnV0ZVJlZ2V4KCkpO1xuICAgIGxldCB2YWx1ZU1hdGNoID0gbmFtZS5tYXRjaCgvOihbYS16QS1aMC05XFwtXzpdKykvKTtcbiAgICBsZXQgbW9kaWZpZXJzID0gbmFtZS5tYXRjaCgvXFwuW14uXFxdXSsoPz1bXlxcXV0qJCkvZykgfHwgW107XG4gICAgbGV0IG9yaWdpbmFsID0gb3JpZ2luYWxBdHRyaWJ1dGVPdmVycmlkZSB8fCB0cmFuc2Zvcm1lZEF0dHJpYnV0ZU1hcFtuYW1lXSB8fCBuYW1lO1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiB0eXBlTWF0Y2ggPyB0eXBlTWF0Y2hbMV0gOiBudWxsLFxuICAgICAgdmFsdWU6IHZhbHVlTWF0Y2ggPyB2YWx1ZU1hdGNoWzFdIDogbnVsbCxcbiAgICAgIG1vZGlmaWVyczogbW9kaWZpZXJzLm1hcCgoaSkgPT4gaS5yZXBsYWNlKFwiLlwiLCBcIlwiKSksXG4gICAgICBleHByZXNzaW9uOiB2YWx1ZSxcbiAgICAgIG9yaWdpbmFsXG4gICAgfTtcbiAgfTtcbn1cbnZhciBERUZBVUxUID0gXCJERUZBVUxUXCI7XG52YXIgZGlyZWN0aXZlT3JkZXIgPSBbXG4gIFwiaWdub3JlXCIsXG4gIFwicmVmXCIsXG4gIFwiZGF0YVwiLFxuICBcImlkXCIsXG4gIFwiYW5jaG9yXCIsXG4gIFwiYmluZFwiLFxuICBcImluaXRcIixcbiAgXCJmb3JcIixcbiAgXCJtb2RlbFwiLFxuICBcIm1vZGVsYWJsZVwiLFxuICBcInRyYW5zaXRpb25cIixcbiAgXCJzaG93XCIsXG4gIFwiaWZcIixcbiAgREVGQVVMVCxcbiAgXCJ0ZWxlcG9ydFwiXG5dO1xuZnVuY3Rpb24gYnlQcmlvcml0eShhLCBiKSB7XG4gIGxldCB0eXBlQSA9IGRpcmVjdGl2ZU9yZGVyLmluZGV4T2YoYS50eXBlKSA9PT0gLTEgPyBERUZBVUxUIDogYS50eXBlO1xuICBsZXQgdHlwZUIgPSBkaXJlY3RpdmVPcmRlci5pbmRleE9mKGIudHlwZSkgPT09IC0xID8gREVGQVVMVCA6IGIudHlwZTtcbiAgcmV0dXJuIGRpcmVjdGl2ZU9yZGVyLmluZGV4T2YodHlwZUEpIC0gZGlyZWN0aXZlT3JkZXIuaW5kZXhPZih0eXBlQik7XG59XG5cbi8vIHBhY2thZ2VzL2FscGluZWpzL3NyYy9uZXh0VGljay5qc1xudmFyIHRpY2tTdGFjayA9IFtdO1xudmFyIGlzSG9sZGluZyA9IGZhbHNlO1xuZnVuY3Rpb24gbmV4dFRpY2soY2FsbGJhY2sgPSAoKSA9PiB7XG59KSB7XG4gIHF1ZXVlTWljcm90YXNrKCgpID0+IHtcbiAgICBpc0hvbGRpbmcgfHwgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICByZWxlYXNlTmV4dFRpY2tzKCk7XG4gICAgfSk7XG4gIH0pO1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlcykgPT4ge1xuICAgIHRpY2tTdGFjay5wdXNoKCgpID0+IHtcbiAgICAgIGNhbGxiYWNrKCk7XG4gICAgICByZXMoKTtcbiAgICB9KTtcbiAgfSk7XG59XG5mdW5jdGlvbiByZWxlYXNlTmV4dFRpY2tzKCkge1xuICBpc0hvbGRpbmcgPSBmYWxzZTtcbiAgd2hpbGUgKHRpY2tTdGFjay5sZW5ndGgpXG4gICAgdGlja1N0YWNrLnNoaWZ0KCkoKTtcbn1cbmZ1bmN0aW9uIGhvbGROZXh0VGlja3MoKSB7XG4gIGlzSG9sZGluZyA9IHRydWU7XG59XG5cbi8vIHBhY2thZ2VzL2FscGluZWpzL3NyYy91dGlscy9jbGFzc2VzLmpzXG5mdW5jdGlvbiBzZXRDbGFzc2VzKGVsLCB2YWx1ZSkge1xuICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICByZXR1cm4gc2V0Q2xhc3Nlc0Zyb21TdHJpbmcoZWwsIHZhbHVlLmpvaW4oXCIgXCIpKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICByZXR1cm4gc2V0Q2xhc3Nlc0Zyb21PYmplY3QoZWwsIHZhbHVlKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiBzZXRDbGFzc2VzKGVsLCB2YWx1ZSgpKTtcbiAgfVxuICByZXR1cm4gc2V0Q2xhc3Nlc0Zyb21TdHJpbmcoZWwsIHZhbHVlKTtcbn1cbmZ1bmN0aW9uIHNldENsYXNzZXNGcm9tU3RyaW5nKGVsLCBjbGFzc1N0cmluZykge1xuICBsZXQgc3BsaXQgPSAoY2xhc3NTdHJpbmcyKSA9PiBjbGFzc1N0cmluZzIuc3BsaXQoXCIgXCIpLmZpbHRlcihCb29sZWFuKTtcbiAgbGV0IG1pc3NpbmdDbGFzc2VzID0gKGNsYXNzU3RyaW5nMikgPT4gY2xhc3NTdHJpbmcyLnNwbGl0KFwiIFwiKS5maWx0ZXIoKGkpID0+ICFlbC5jbGFzc0xpc3QuY29udGFpbnMoaSkpLmZpbHRlcihCb29sZWFuKTtcbiAgbGV0IGFkZENsYXNzZXNBbmRSZXR1cm5VbmRvID0gKGNsYXNzZXMpID0+IHtcbiAgICBlbC5jbGFzc0xpc3QuYWRkKC4uLmNsYXNzZXMpO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKC4uLmNsYXNzZXMpO1xuICAgIH07XG4gIH07XG4gIGNsYXNzU3RyaW5nID0gY2xhc3NTdHJpbmcgPT09IHRydWUgPyBjbGFzc1N0cmluZyA9IFwiXCIgOiBjbGFzc1N0cmluZyB8fCBcIlwiO1xuICByZXR1cm4gYWRkQ2xhc3Nlc0FuZFJldHVyblVuZG8obWlzc2luZ0NsYXNzZXMoY2xhc3NTdHJpbmcpKTtcbn1cbmZ1bmN0aW9uIHNldENsYXNzZXNGcm9tT2JqZWN0KGVsLCBjbGFzc09iamVjdCkge1xuICBsZXQgc3BsaXQgPSAoY2xhc3NTdHJpbmcpID0+IGNsYXNzU3RyaW5nLnNwbGl0KFwiIFwiKS5maWx0ZXIoQm9vbGVhbik7XG4gIGxldCBmb3JBZGQgPSBPYmplY3QuZW50cmllcyhjbGFzc09iamVjdCkuZmxhdE1hcCgoW2NsYXNzU3RyaW5nLCBib29sXSkgPT4gYm9vbCA/IHNwbGl0KGNsYXNzU3RyaW5nKSA6IGZhbHNlKS5maWx0ZXIoQm9vbGVhbik7XG4gIGxldCBmb3JSZW1vdmUgPSBPYmplY3QuZW50cmllcyhjbGFzc09iamVjdCkuZmxhdE1hcCgoW2NsYXNzU3RyaW5nLCBib29sXSkgPT4gIWJvb2wgPyBzcGxpdChjbGFzc1N0cmluZykgOiBmYWxzZSkuZmlsdGVyKEJvb2xlYW4pO1xuICBsZXQgYWRkZWQgPSBbXTtcbiAgbGV0IHJlbW92ZWQgPSBbXTtcbiAgZm9yUmVtb3ZlLmZvckVhY2goKGkpID0+IHtcbiAgICBpZiAoZWwuY2xhc3NMaXN0LmNvbnRhaW5zKGkpKSB7XG4gICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKGkpO1xuICAgICAgcmVtb3ZlZC5wdXNoKGkpO1xuICAgIH1cbiAgfSk7XG4gIGZvckFkZC5mb3JFYWNoKChpKSA9PiB7XG4gICAgaWYgKCFlbC5jbGFzc0xpc3QuY29udGFpbnMoaSkpIHtcbiAgICAgIGVsLmNsYXNzTGlzdC5hZGQoaSk7XG4gICAgICBhZGRlZC5wdXNoKGkpO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiAoKSA9PiB7XG4gICAgcmVtb3ZlZC5mb3JFYWNoKChpKSA9PiBlbC5jbGFzc0xpc3QuYWRkKGkpKTtcbiAgICBhZGRlZC5mb3JFYWNoKChpKSA9PiBlbC5jbGFzc0xpc3QucmVtb3ZlKGkpKTtcbiAgfTtcbn1cblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL3V0aWxzL3N0eWxlcy5qc1xuZnVuY3Rpb24gc2V0U3R5bGVzKGVsLCB2YWx1ZSkge1xuICBpZiAodHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmIHZhbHVlICE9PSBudWxsKSB7XG4gICAgcmV0dXJuIHNldFN0eWxlc0Zyb21PYmplY3QoZWwsIHZhbHVlKTtcbiAgfVxuICByZXR1cm4gc2V0U3R5bGVzRnJvbVN0cmluZyhlbCwgdmFsdWUpO1xufVxuZnVuY3Rpb24gc2V0U3R5bGVzRnJvbU9iamVjdChlbCwgdmFsdWUpIHtcbiAgbGV0IHByZXZpb3VzU3R5bGVzID0ge307XG4gIE9iamVjdC5lbnRyaWVzKHZhbHVlKS5mb3JFYWNoKChba2V5LCB2YWx1ZTJdKSA9PiB7XG4gICAgcHJldmlvdXNTdHlsZXNba2V5XSA9IGVsLnN0eWxlW2tleV07XG4gICAgaWYgKCFrZXkuc3RhcnRzV2l0aChcIi0tXCIpKSB7XG4gICAgICBrZXkgPSBrZWJhYkNhc2Uoa2V5KTtcbiAgICB9XG4gICAgZWwuc3R5bGUuc2V0UHJvcGVydHkoa2V5LCB2YWx1ZTIpO1xuICB9KTtcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgaWYgKGVsLnN0eWxlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgZWwucmVtb3ZlQXR0cmlidXRlKFwic3R5bGVcIik7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuICgpID0+IHtcbiAgICBzZXRTdHlsZXMoZWwsIHByZXZpb3VzU3R5bGVzKTtcbiAgfTtcbn1cbmZ1bmN0aW9uIHNldFN0eWxlc0Zyb21TdHJpbmcoZWwsIHZhbHVlKSB7XG4gIGxldCBjYWNoZSA9IGVsLmdldEF0dHJpYnV0ZShcInN0eWxlXCIsIHZhbHVlKTtcbiAgZWwuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgdmFsdWUpO1xuICByZXR1cm4gKCkgPT4ge1xuICAgIGVsLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIGNhY2hlIHx8IFwiXCIpO1xuICB9O1xufVxuZnVuY3Rpb24ga2ViYWJDYXNlKHN1YmplY3QpIHtcbiAgcmV0dXJuIHN1YmplY3QucmVwbGFjZSgvKFthLXpdKShbQS1aXSkvZywgXCIkMS0kMlwiKS50b0xvd2VyQ2FzZSgpO1xufVxuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvdXRpbHMvb25jZS5qc1xuZnVuY3Rpb24gb25jZShjYWxsYmFjaywgZmFsbGJhY2sgPSAoKSA9PiB7XG59KSB7XG4gIGxldCBjYWxsZWQgPSBmYWxzZTtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIGlmICghY2FsbGVkKSB7XG4gICAgICBjYWxsZWQgPSB0cnVlO1xuICAgICAgY2FsbGJhY2suYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZmFsbGJhY2suYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gIH07XG59XG5cbi8vIHBhY2thZ2VzL2FscGluZWpzL3NyYy9kaXJlY3RpdmVzL3gtdHJhbnNpdGlvbi5qc1xuZGlyZWN0aXZlKFwidHJhbnNpdGlvblwiLCAoZWwsIHsgdmFsdWUsIG1vZGlmaWVycywgZXhwcmVzc2lvbiB9LCB7IGV2YWx1YXRlOiBldmFsdWF0ZTIgfSkgPT4ge1xuICBpZiAodHlwZW9mIGV4cHJlc3Npb24gPT09IFwiZnVuY3Rpb25cIilcbiAgICBleHByZXNzaW9uID0gZXZhbHVhdGUyKGV4cHJlc3Npb24pO1xuICBpZiAoZXhwcmVzc2lvbiA9PT0gZmFsc2UpXG4gICAgcmV0dXJuO1xuICBpZiAoIWV4cHJlc3Npb24gfHwgdHlwZW9mIGV4cHJlc3Npb24gPT09IFwiYm9vbGVhblwiKSB7XG4gICAgcmVnaXN0ZXJUcmFuc2l0aW9uc0Zyb21IZWxwZXIoZWwsIG1vZGlmaWVycywgdmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIHJlZ2lzdGVyVHJhbnNpdGlvbnNGcm9tQ2xhc3NTdHJpbmcoZWwsIGV4cHJlc3Npb24sIHZhbHVlKTtcbiAgfVxufSk7XG5mdW5jdGlvbiByZWdpc3RlclRyYW5zaXRpb25zRnJvbUNsYXNzU3RyaW5nKGVsLCBjbGFzc1N0cmluZywgc3RhZ2UpIHtcbiAgcmVnaXN0ZXJUcmFuc2l0aW9uT2JqZWN0KGVsLCBzZXRDbGFzc2VzLCBcIlwiKTtcbiAgbGV0IGRpcmVjdGl2ZVN0b3JhZ2VNYXAgPSB7XG4gICAgXCJlbnRlclwiOiAoY2xhc3NlcykgPT4ge1xuICAgICAgZWwuX3hfdHJhbnNpdGlvbi5lbnRlci5kdXJpbmcgPSBjbGFzc2VzO1xuICAgIH0sXG4gICAgXCJlbnRlci1zdGFydFwiOiAoY2xhc3NlcykgPT4ge1xuICAgICAgZWwuX3hfdHJhbnNpdGlvbi5lbnRlci5zdGFydCA9IGNsYXNzZXM7XG4gICAgfSxcbiAgICBcImVudGVyLWVuZFwiOiAoY2xhc3NlcykgPT4ge1xuICAgICAgZWwuX3hfdHJhbnNpdGlvbi5lbnRlci5lbmQgPSBjbGFzc2VzO1xuICAgIH0sXG4gICAgXCJsZWF2ZVwiOiAoY2xhc3NlcykgPT4ge1xuICAgICAgZWwuX3hfdHJhbnNpdGlvbi5sZWF2ZS5kdXJpbmcgPSBjbGFzc2VzO1xuICAgIH0sXG4gICAgXCJsZWF2ZS1zdGFydFwiOiAoY2xhc3NlcykgPT4ge1xuICAgICAgZWwuX3hfdHJhbnNpdGlvbi5sZWF2ZS5zdGFydCA9IGNsYXNzZXM7XG4gICAgfSxcbiAgICBcImxlYXZlLWVuZFwiOiAoY2xhc3NlcykgPT4ge1xuICAgICAgZWwuX3hfdHJhbnNpdGlvbi5sZWF2ZS5lbmQgPSBjbGFzc2VzO1xuICAgIH1cbiAgfTtcbiAgZGlyZWN0aXZlU3RvcmFnZU1hcFtzdGFnZV0oY2xhc3NTdHJpbmcpO1xufVxuZnVuY3Rpb24gcmVnaXN0ZXJUcmFuc2l0aW9uc0Zyb21IZWxwZXIoZWwsIG1vZGlmaWVycywgc3RhZ2UpIHtcbiAgcmVnaXN0ZXJUcmFuc2l0aW9uT2JqZWN0KGVsLCBzZXRTdHlsZXMpO1xuICBsZXQgZG9lc250U3BlY2lmeSA9ICFtb2RpZmllcnMuaW5jbHVkZXMoXCJpblwiKSAmJiAhbW9kaWZpZXJzLmluY2x1ZGVzKFwib3V0XCIpICYmICFzdGFnZTtcbiAgbGV0IHRyYW5zaXRpb25pbmdJbiA9IGRvZXNudFNwZWNpZnkgfHwgbW9kaWZpZXJzLmluY2x1ZGVzKFwiaW5cIikgfHwgW1wiZW50ZXJcIl0uaW5jbHVkZXMoc3RhZ2UpO1xuICBsZXQgdHJhbnNpdGlvbmluZ091dCA9IGRvZXNudFNwZWNpZnkgfHwgbW9kaWZpZXJzLmluY2x1ZGVzKFwib3V0XCIpIHx8IFtcImxlYXZlXCJdLmluY2x1ZGVzKHN0YWdlKTtcbiAgaWYgKG1vZGlmaWVycy5pbmNsdWRlcyhcImluXCIpICYmICFkb2VzbnRTcGVjaWZ5KSB7XG4gICAgbW9kaWZpZXJzID0gbW9kaWZpZXJzLmZpbHRlcigoaSwgaW5kZXgpID0+IGluZGV4IDwgbW9kaWZpZXJzLmluZGV4T2YoXCJvdXRcIikpO1xuICB9XG4gIGlmIChtb2RpZmllcnMuaW5jbHVkZXMoXCJvdXRcIikgJiYgIWRvZXNudFNwZWNpZnkpIHtcbiAgICBtb2RpZmllcnMgPSBtb2RpZmllcnMuZmlsdGVyKChpLCBpbmRleCkgPT4gaW5kZXggPiBtb2RpZmllcnMuaW5kZXhPZihcIm91dFwiKSk7XG4gIH1cbiAgbGV0IHdhbnRzQWxsID0gIW1vZGlmaWVycy5pbmNsdWRlcyhcIm9wYWNpdHlcIikgJiYgIW1vZGlmaWVycy5pbmNsdWRlcyhcInNjYWxlXCIpO1xuICBsZXQgd2FudHNPcGFjaXR5ID0gd2FudHNBbGwgfHwgbW9kaWZpZXJzLmluY2x1ZGVzKFwib3BhY2l0eVwiKTtcbiAgbGV0IHdhbnRzU2NhbGUgPSB3YW50c0FsbCB8fCBtb2RpZmllcnMuaW5jbHVkZXMoXCJzY2FsZVwiKTtcbiAgbGV0IG9wYWNpdHlWYWx1ZSA9IHdhbnRzT3BhY2l0eSA/IDAgOiAxO1xuICBsZXQgc2NhbGVWYWx1ZSA9IHdhbnRzU2NhbGUgPyBtb2RpZmllclZhbHVlKG1vZGlmaWVycywgXCJzY2FsZVwiLCA5NSkgLyAxMDAgOiAxO1xuICBsZXQgZGVsYXkgPSBtb2RpZmllclZhbHVlKG1vZGlmaWVycywgXCJkZWxheVwiLCAwKSAvIDFlMztcbiAgbGV0IG9yaWdpbiA9IG1vZGlmaWVyVmFsdWUobW9kaWZpZXJzLCBcIm9yaWdpblwiLCBcImNlbnRlclwiKTtcbiAgbGV0IHByb3BlcnR5ID0gXCJvcGFjaXR5LCB0cmFuc2Zvcm1cIjtcbiAgbGV0IGR1cmF0aW9uSW4gPSBtb2RpZmllclZhbHVlKG1vZGlmaWVycywgXCJkdXJhdGlvblwiLCAxNTApIC8gMWUzO1xuICBsZXQgZHVyYXRpb25PdXQgPSBtb2RpZmllclZhbHVlKG1vZGlmaWVycywgXCJkdXJhdGlvblwiLCA3NSkgLyAxZTM7XG4gIGxldCBlYXNpbmcgPSBgY3ViaWMtYmV6aWVyKDAuNCwgMC4wLCAwLjIsIDEpYDtcbiAgaWYgKHRyYW5zaXRpb25pbmdJbikge1xuICAgIGVsLl94X3RyYW5zaXRpb24uZW50ZXIuZHVyaW5nID0ge1xuICAgICAgdHJhbnNmb3JtT3JpZ2luOiBvcmlnaW4sXG4gICAgICB0cmFuc2l0aW9uRGVsYXk6IGAke2RlbGF5fXNgLFxuICAgICAgdHJhbnNpdGlvblByb3BlcnR5OiBwcm9wZXJ0eSxcbiAgICAgIHRyYW5zaXRpb25EdXJhdGlvbjogYCR7ZHVyYXRpb25Jbn1zYCxcbiAgICAgIHRyYW5zaXRpb25UaW1pbmdGdW5jdGlvbjogZWFzaW5nXG4gICAgfTtcbiAgICBlbC5feF90cmFuc2l0aW9uLmVudGVyLnN0YXJ0ID0ge1xuICAgICAgb3BhY2l0eTogb3BhY2l0eVZhbHVlLFxuICAgICAgdHJhbnNmb3JtOiBgc2NhbGUoJHtzY2FsZVZhbHVlfSlgXG4gICAgfTtcbiAgICBlbC5feF90cmFuc2l0aW9uLmVudGVyLmVuZCA9IHtcbiAgICAgIG9wYWNpdHk6IDEsXG4gICAgICB0cmFuc2Zvcm06IGBzY2FsZSgxKWBcbiAgICB9O1xuICB9XG4gIGlmICh0cmFuc2l0aW9uaW5nT3V0KSB7XG4gICAgZWwuX3hfdHJhbnNpdGlvbi5sZWF2ZS5kdXJpbmcgPSB7XG4gICAgICB0cmFuc2Zvcm1PcmlnaW46IG9yaWdpbixcbiAgICAgIHRyYW5zaXRpb25EZWxheTogYCR7ZGVsYXl9c2AsXG4gICAgICB0cmFuc2l0aW9uUHJvcGVydHk6IHByb3BlcnR5LFxuICAgICAgdHJhbnNpdGlvbkR1cmF0aW9uOiBgJHtkdXJhdGlvbk91dH1zYCxcbiAgICAgIHRyYW5zaXRpb25UaW1pbmdGdW5jdGlvbjogZWFzaW5nXG4gICAgfTtcbiAgICBlbC5feF90cmFuc2l0aW9uLmxlYXZlLnN0YXJ0ID0ge1xuICAgICAgb3BhY2l0eTogMSxcbiAgICAgIHRyYW5zZm9ybTogYHNjYWxlKDEpYFxuICAgIH07XG4gICAgZWwuX3hfdHJhbnNpdGlvbi5sZWF2ZS5lbmQgPSB7XG4gICAgICBvcGFjaXR5OiBvcGFjaXR5VmFsdWUsXG4gICAgICB0cmFuc2Zvcm06IGBzY2FsZSgke3NjYWxlVmFsdWV9KWBcbiAgICB9O1xuICB9XG59XG5mdW5jdGlvbiByZWdpc3RlclRyYW5zaXRpb25PYmplY3QoZWwsIHNldEZ1bmN0aW9uLCBkZWZhdWx0VmFsdWUgPSB7fSkge1xuICBpZiAoIWVsLl94X3RyYW5zaXRpb24pXG4gICAgZWwuX3hfdHJhbnNpdGlvbiA9IHtcbiAgICAgIGVudGVyOiB7IGR1cmluZzogZGVmYXVsdFZhbHVlLCBzdGFydDogZGVmYXVsdFZhbHVlLCBlbmQ6IGRlZmF1bHRWYWx1ZSB9LFxuICAgICAgbGVhdmU6IHsgZHVyaW5nOiBkZWZhdWx0VmFsdWUsIHN0YXJ0OiBkZWZhdWx0VmFsdWUsIGVuZDogZGVmYXVsdFZhbHVlIH0sXG4gICAgICBpbihiZWZvcmUgPSAoKSA9PiB7XG4gICAgICB9LCBhZnRlciA9ICgpID0+IHtcbiAgICAgIH0pIHtcbiAgICAgICAgdHJhbnNpdGlvbihlbCwgc2V0RnVuY3Rpb24sIHtcbiAgICAgICAgICBkdXJpbmc6IHRoaXMuZW50ZXIuZHVyaW5nLFxuICAgICAgICAgIHN0YXJ0OiB0aGlzLmVudGVyLnN0YXJ0LFxuICAgICAgICAgIGVuZDogdGhpcy5lbnRlci5lbmRcbiAgICAgICAgfSwgYmVmb3JlLCBhZnRlcik7XG4gICAgICB9LFxuICAgICAgb3V0KGJlZm9yZSA9ICgpID0+IHtcbiAgICAgIH0sIGFmdGVyID0gKCkgPT4ge1xuICAgICAgfSkge1xuICAgICAgICB0cmFuc2l0aW9uKGVsLCBzZXRGdW5jdGlvbiwge1xuICAgICAgICAgIGR1cmluZzogdGhpcy5sZWF2ZS5kdXJpbmcsXG4gICAgICAgICAgc3RhcnQ6IHRoaXMubGVhdmUuc3RhcnQsXG4gICAgICAgICAgZW5kOiB0aGlzLmxlYXZlLmVuZFxuICAgICAgICB9LCBiZWZvcmUsIGFmdGVyKTtcbiAgICAgIH1cbiAgICB9O1xufVxud2luZG93LkVsZW1lbnQucHJvdG90eXBlLl94X3RvZ2dsZUFuZENhc2NhZGVXaXRoVHJhbnNpdGlvbnMgPSBmdW5jdGlvbihlbCwgdmFsdWUsIHNob3csIGhpZGUpIHtcbiAgY29uc3QgbmV4dFRpY2syID0gZG9jdW1lbnQudmlzaWJpbGl0eVN0YXRlID09PSBcInZpc2libGVcIiA/IHJlcXVlc3RBbmltYXRpb25GcmFtZSA6IHNldFRpbWVvdXQ7XG4gIGxldCBjbGlja0F3YXlDb21wYXRpYmxlU2hvdyA9ICgpID0+IG5leHRUaWNrMihzaG93KTtcbiAgaWYgKHZhbHVlKSB7XG4gICAgaWYgKGVsLl94X3RyYW5zaXRpb24gJiYgKGVsLl94X3RyYW5zaXRpb24uZW50ZXIgfHwgZWwuX3hfdHJhbnNpdGlvbi5sZWF2ZSkpIHtcbiAgICAgIGVsLl94X3RyYW5zaXRpb24uZW50ZXIgJiYgKE9iamVjdC5lbnRyaWVzKGVsLl94X3RyYW5zaXRpb24uZW50ZXIuZHVyaW5nKS5sZW5ndGggfHwgT2JqZWN0LmVudHJpZXMoZWwuX3hfdHJhbnNpdGlvbi5lbnRlci5zdGFydCkubGVuZ3RoIHx8IE9iamVjdC5lbnRyaWVzKGVsLl94X3RyYW5zaXRpb24uZW50ZXIuZW5kKS5sZW5ndGgpID8gZWwuX3hfdHJhbnNpdGlvbi5pbihzaG93KSA6IGNsaWNrQXdheUNvbXBhdGlibGVTaG93KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsLl94X3RyYW5zaXRpb24gPyBlbC5feF90cmFuc2l0aW9uLmluKHNob3cpIDogY2xpY2tBd2F5Q29tcGF0aWJsZVNob3coKTtcbiAgICB9XG4gICAgcmV0dXJuO1xuICB9XG4gIGVsLl94X2hpZGVQcm9taXNlID0gZWwuX3hfdHJhbnNpdGlvbiA/IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBlbC5feF90cmFuc2l0aW9uLm91dCgoKSA9PiB7XG4gICAgfSwgKCkgPT4gcmVzb2x2ZShoaWRlKSk7XG4gICAgZWwuX3hfdHJhbnNpdGlvbmluZyAmJiBlbC5feF90cmFuc2l0aW9uaW5nLmJlZm9yZUNhbmNlbCgoKSA9PiByZWplY3QoeyBpc0Zyb21DYW5jZWxsZWRUcmFuc2l0aW9uOiB0cnVlIH0pKTtcbiAgfSkgOiBQcm9taXNlLnJlc29sdmUoaGlkZSk7XG4gIHF1ZXVlTWljcm90YXNrKCgpID0+IHtcbiAgICBsZXQgY2xvc2VzdCA9IGNsb3Nlc3RIaWRlKGVsKTtcbiAgICBpZiAoY2xvc2VzdCkge1xuICAgICAgaWYgKCFjbG9zZXN0Ll94X2hpZGVDaGlsZHJlbilcbiAgICAgICAgY2xvc2VzdC5feF9oaWRlQ2hpbGRyZW4gPSBbXTtcbiAgICAgIGNsb3Nlc3QuX3hfaGlkZUNoaWxkcmVuLnB1c2goZWwpO1xuICAgIH0gZWxzZSB7XG4gICAgICBuZXh0VGljazIoKCkgPT4ge1xuICAgICAgICBsZXQgaGlkZUFmdGVyQ2hpbGRyZW4gPSAoZWwyKSA9PiB7XG4gICAgICAgICAgbGV0IGNhcnJ5ID0gUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgZWwyLl94X2hpZGVQcm9taXNlLFxuICAgICAgICAgICAgLi4uKGVsMi5feF9oaWRlQ2hpbGRyZW4gfHwgW10pLm1hcChoaWRlQWZ0ZXJDaGlsZHJlbilcbiAgICAgICAgICBdKS50aGVuKChbaV0pID0+IGkoKSk7XG4gICAgICAgICAgZGVsZXRlIGVsMi5feF9oaWRlUHJvbWlzZTtcbiAgICAgICAgICBkZWxldGUgZWwyLl94X2hpZGVDaGlsZHJlbjtcbiAgICAgICAgICByZXR1cm4gY2Fycnk7XG4gICAgICAgIH07XG4gICAgICAgIGhpZGVBZnRlckNoaWxkcmVuKGVsKS5jYXRjaCgoZSkgPT4ge1xuICAgICAgICAgIGlmICghZS5pc0Zyb21DYW5jZWxsZWRUcmFuc2l0aW9uKVxuICAgICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xufTtcbmZ1bmN0aW9uIGNsb3Nlc3RIaWRlKGVsKSB7XG4gIGxldCBwYXJlbnQgPSBlbC5wYXJlbnROb2RlO1xuICBpZiAoIXBhcmVudClcbiAgICByZXR1cm47XG4gIHJldHVybiBwYXJlbnQuX3hfaGlkZVByb21pc2UgPyBwYXJlbnQgOiBjbG9zZXN0SGlkZShwYXJlbnQpO1xufVxuZnVuY3Rpb24gdHJhbnNpdGlvbihlbCwgc2V0RnVuY3Rpb24sIHsgZHVyaW5nLCBzdGFydDogc3RhcnQyLCBlbmQgfSA9IHt9LCBiZWZvcmUgPSAoKSA9PiB7XG59LCBhZnRlciA9ICgpID0+IHtcbn0pIHtcbiAgaWYgKGVsLl94X3RyYW5zaXRpb25pbmcpXG4gICAgZWwuX3hfdHJhbnNpdGlvbmluZy5jYW5jZWwoKTtcbiAgaWYgKE9iamVjdC5rZXlzKGR1cmluZykubGVuZ3RoID09PSAwICYmIE9iamVjdC5rZXlzKHN0YXJ0MikubGVuZ3RoID09PSAwICYmIE9iamVjdC5rZXlzKGVuZCkubGVuZ3RoID09PSAwKSB7XG4gICAgYmVmb3JlKCk7XG4gICAgYWZ0ZXIoKTtcbiAgICByZXR1cm47XG4gIH1cbiAgbGV0IHVuZG9TdGFydCwgdW5kb0R1cmluZywgdW5kb0VuZDtcbiAgcGVyZm9ybVRyYW5zaXRpb24oZWwsIHtcbiAgICBzdGFydCgpIHtcbiAgICAgIHVuZG9TdGFydCA9IHNldEZ1bmN0aW9uKGVsLCBzdGFydDIpO1xuICAgIH0sXG4gICAgZHVyaW5nKCkge1xuICAgICAgdW5kb0R1cmluZyA9IHNldEZ1bmN0aW9uKGVsLCBkdXJpbmcpO1xuICAgIH0sXG4gICAgYmVmb3JlLFxuICAgIGVuZCgpIHtcbiAgICAgIHVuZG9TdGFydCgpO1xuICAgICAgdW5kb0VuZCA9IHNldEZ1bmN0aW9uKGVsLCBlbmQpO1xuICAgIH0sXG4gICAgYWZ0ZXIsXG4gICAgY2xlYW51cCgpIHtcbiAgICAgIHVuZG9EdXJpbmcoKTtcbiAgICAgIHVuZG9FbmQoKTtcbiAgICB9XG4gIH0pO1xufVxuZnVuY3Rpb24gcGVyZm9ybVRyYW5zaXRpb24oZWwsIHN0YWdlcykge1xuICBsZXQgaW50ZXJydXB0ZWQsIHJlYWNoZWRCZWZvcmUsIHJlYWNoZWRFbmQ7XG4gIGxldCBmaW5pc2ggPSBvbmNlKCgpID0+IHtcbiAgICBtdXRhdGVEb20oKCkgPT4ge1xuICAgICAgaW50ZXJydXB0ZWQgPSB0cnVlO1xuICAgICAgaWYgKCFyZWFjaGVkQmVmb3JlKVxuICAgICAgICBzdGFnZXMuYmVmb3JlKCk7XG4gICAgICBpZiAoIXJlYWNoZWRFbmQpIHtcbiAgICAgICAgc3RhZ2VzLmVuZCgpO1xuICAgICAgICByZWxlYXNlTmV4dFRpY2tzKCk7XG4gICAgICB9XG4gICAgICBzdGFnZXMuYWZ0ZXIoKTtcbiAgICAgIGlmIChlbC5pc0Nvbm5lY3RlZClcbiAgICAgICAgc3RhZ2VzLmNsZWFudXAoKTtcbiAgICAgIGRlbGV0ZSBlbC5feF90cmFuc2l0aW9uaW5nO1xuICAgIH0pO1xuICB9KTtcbiAgZWwuX3hfdHJhbnNpdGlvbmluZyA9IHtcbiAgICBiZWZvcmVDYW5jZWxzOiBbXSxcbiAgICBiZWZvcmVDYW5jZWwoY2FsbGJhY2spIHtcbiAgICAgIHRoaXMuYmVmb3JlQ2FuY2Vscy5wdXNoKGNhbGxiYWNrKTtcbiAgICB9LFxuICAgIGNhbmNlbDogb25jZShmdW5jdGlvbigpIHtcbiAgICAgIHdoaWxlICh0aGlzLmJlZm9yZUNhbmNlbHMubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuYmVmb3JlQ2FuY2Vscy5zaGlmdCgpKCk7XG4gICAgICB9XG4gICAgICA7XG4gICAgICBmaW5pc2goKTtcbiAgICB9KSxcbiAgICBmaW5pc2hcbiAgfTtcbiAgbXV0YXRlRG9tKCgpID0+IHtcbiAgICBzdGFnZXMuc3RhcnQoKTtcbiAgICBzdGFnZXMuZHVyaW5nKCk7XG4gIH0pO1xuICBob2xkTmV4dFRpY2tzKCk7XG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgaWYgKGludGVycnVwdGVkKVxuICAgICAgcmV0dXJuO1xuICAgIGxldCBkdXJhdGlvbiA9IE51bWJlcihnZXRDb21wdXRlZFN0eWxlKGVsKS50cmFuc2l0aW9uRHVyYXRpb24ucmVwbGFjZSgvLC4qLywgXCJcIikucmVwbGFjZShcInNcIiwgXCJcIikpICogMWUzO1xuICAgIGxldCBkZWxheSA9IE51bWJlcihnZXRDb21wdXRlZFN0eWxlKGVsKS50cmFuc2l0aW9uRGVsYXkucmVwbGFjZSgvLC4qLywgXCJcIikucmVwbGFjZShcInNcIiwgXCJcIikpICogMWUzO1xuICAgIGlmIChkdXJhdGlvbiA9PT0gMClcbiAgICAgIGR1cmF0aW9uID0gTnVtYmVyKGdldENvbXB1dGVkU3R5bGUoZWwpLmFuaW1hdGlvbkR1cmF0aW9uLnJlcGxhY2UoXCJzXCIsIFwiXCIpKSAqIDFlMztcbiAgICBtdXRhdGVEb20oKCkgPT4ge1xuICAgICAgc3RhZ2VzLmJlZm9yZSgpO1xuICAgIH0pO1xuICAgIHJlYWNoZWRCZWZvcmUgPSB0cnVlO1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICBpZiAoaW50ZXJydXB0ZWQpXG4gICAgICAgIHJldHVybjtcbiAgICAgIG11dGF0ZURvbSgoKSA9PiB7XG4gICAgICAgIHN0YWdlcy5lbmQoKTtcbiAgICAgIH0pO1xuICAgICAgcmVsZWFzZU5leHRUaWNrcygpO1xuICAgICAgc2V0VGltZW91dChlbC5feF90cmFuc2l0aW9uaW5nLmZpbmlzaCwgZHVyYXRpb24gKyBkZWxheSk7XG4gICAgICByZWFjaGVkRW5kID0gdHJ1ZTtcbiAgICB9KTtcbiAgfSk7XG59XG5mdW5jdGlvbiBtb2RpZmllclZhbHVlKG1vZGlmaWVycywga2V5LCBmYWxsYmFjaykge1xuICBpZiAobW9kaWZpZXJzLmluZGV4T2Yoa2V5KSA9PT0gLTEpXG4gICAgcmV0dXJuIGZhbGxiYWNrO1xuICBjb25zdCByYXdWYWx1ZSA9IG1vZGlmaWVyc1ttb2RpZmllcnMuaW5kZXhPZihrZXkpICsgMV07XG4gIGlmICghcmF3VmFsdWUpXG4gICAgcmV0dXJuIGZhbGxiYWNrO1xuICBpZiAoa2V5ID09PSBcInNjYWxlXCIpIHtcbiAgICBpZiAoaXNOYU4ocmF3VmFsdWUpKVxuICAgICAgcmV0dXJuIGZhbGxiYWNrO1xuICB9XG4gIGlmIChrZXkgPT09IFwiZHVyYXRpb25cIiB8fCBrZXkgPT09IFwiZGVsYXlcIikge1xuICAgIGxldCBtYXRjaCA9IHJhd1ZhbHVlLm1hdGNoKC8oWzAtOV0rKW1zLyk7XG4gICAgaWYgKG1hdGNoKVxuICAgICAgcmV0dXJuIG1hdGNoWzFdO1xuICB9XG4gIGlmIChrZXkgPT09IFwib3JpZ2luXCIpIHtcbiAgICBpZiAoW1widG9wXCIsIFwicmlnaHRcIiwgXCJsZWZ0XCIsIFwiY2VudGVyXCIsIFwiYm90dG9tXCJdLmluY2x1ZGVzKG1vZGlmaWVyc1ttb2RpZmllcnMuaW5kZXhPZihrZXkpICsgMl0pKSB7XG4gICAgICByZXR1cm4gW3Jhd1ZhbHVlLCBtb2RpZmllcnNbbW9kaWZpZXJzLmluZGV4T2Yoa2V5KSArIDJdXS5qb2luKFwiIFwiKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJhd1ZhbHVlO1xufVxuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvY2xvbmUuanNcbnZhciBpc0Nsb25pbmcgPSBmYWxzZTtcbmZ1bmN0aW9uIHNraXBEdXJpbmdDbG9uZShjYWxsYmFjaywgZmFsbGJhY2sgPSAoKSA9PiB7XG59KSB7XG4gIHJldHVybiAoLi4uYXJncykgPT4gaXNDbG9uaW5nID8gZmFsbGJhY2soLi4uYXJncykgOiBjYWxsYmFjayguLi5hcmdzKTtcbn1cbmZ1bmN0aW9uIG9ubHlEdXJpbmdDbG9uZShjYWxsYmFjaykge1xuICByZXR1cm4gKC4uLmFyZ3MpID0+IGlzQ2xvbmluZyAmJiBjYWxsYmFjayguLi5hcmdzKTtcbn1cbnZhciBpbnRlcmNlcHRvcnMgPSBbXTtcbmZ1bmN0aW9uIGludGVyY2VwdENsb25lKGNhbGxiYWNrKSB7XG4gIGludGVyY2VwdG9ycy5wdXNoKGNhbGxiYWNrKTtcbn1cbmZ1bmN0aW9uIGNsb25lTm9kZShmcm9tLCB0bykge1xuICBpbnRlcmNlcHRvcnMuZm9yRWFjaCgoaSkgPT4gaShmcm9tLCB0bykpO1xuICBpc0Nsb25pbmcgPSB0cnVlO1xuICBkb250UmVnaXN0ZXJSZWFjdGl2ZVNpZGVFZmZlY3RzKCgpID0+IHtcbiAgICBpbml0VHJlZSh0bywgKGVsLCBjYWxsYmFjaykgPT4ge1xuICAgICAgY2FsbGJhY2soZWwsICgpID0+IHtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9KTtcbiAgaXNDbG9uaW5nID0gZmFsc2U7XG59XG52YXIgaXNDbG9uaW5nTGVnYWN5ID0gZmFsc2U7XG5mdW5jdGlvbiBjbG9uZShvbGRFbCwgbmV3RWwpIHtcbiAgaWYgKCFuZXdFbC5feF9kYXRhU3RhY2spXG4gICAgbmV3RWwuX3hfZGF0YVN0YWNrID0gb2xkRWwuX3hfZGF0YVN0YWNrO1xuICBpc0Nsb25pbmcgPSB0cnVlO1xuICBpc0Nsb25pbmdMZWdhY3kgPSB0cnVlO1xuICBkb250UmVnaXN0ZXJSZWFjdGl2ZVNpZGVFZmZlY3RzKCgpID0+IHtcbiAgICBjbG9uZVRyZWUobmV3RWwpO1xuICB9KTtcbiAgaXNDbG9uaW5nID0gZmFsc2U7XG4gIGlzQ2xvbmluZ0xlZ2FjeSA9IGZhbHNlO1xufVxuZnVuY3Rpb24gY2xvbmVUcmVlKGVsKSB7XG4gIGxldCBoYXNSdW5UaHJvdWdoRmlyc3RFbCA9IGZhbHNlO1xuICBsZXQgc2hhbGxvd1dhbGtlciA9IChlbDIsIGNhbGxiYWNrKSA9PiB7XG4gICAgd2FsayhlbDIsIChlbDMsIHNraXApID0+IHtcbiAgICAgIGlmIChoYXNSdW5UaHJvdWdoRmlyc3RFbCAmJiBpc1Jvb3QoZWwzKSlcbiAgICAgICAgcmV0dXJuIHNraXAoKTtcbiAgICAgIGhhc1J1blRocm91Z2hGaXJzdEVsID0gdHJ1ZTtcbiAgICAgIGNhbGxiYWNrKGVsMywgc2tpcCk7XG4gICAgfSk7XG4gIH07XG4gIGluaXRUcmVlKGVsLCBzaGFsbG93V2Fsa2VyKTtcbn1cbmZ1bmN0aW9uIGRvbnRSZWdpc3RlclJlYWN0aXZlU2lkZUVmZmVjdHMoY2FsbGJhY2spIHtcbiAgbGV0IGNhY2hlID0gZWZmZWN0O1xuICBvdmVycmlkZUVmZmVjdCgoY2FsbGJhY2syLCBlbCkgPT4ge1xuICAgIGxldCBzdG9yZWRFZmZlY3QgPSBjYWNoZShjYWxsYmFjazIpO1xuICAgIHJlbGVhc2Uoc3RvcmVkRWZmZWN0KTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgIH07XG4gIH0pO1xuICBjYWxsYmFjaygpO1xuICBvdmVycmlkZUVmZmVjdChjYWNoZSk7XG59XG5cbi8vIHBhY2thZ2VzL2FscGluZWpzL3NyYy91dGlscy9iaW5kLmpzXG5mdW5jdGlvbiBiaW5kKGVsLCBuYW1lLCB2YWx1ZSwgbW9kaWZpZXJzID0gW10pIHtcbiAgaWYgKCFlbC5feF9iaW5kaW5ncylcbiAgICBlbC5feF9iaW5kaW5ncyA9IHJlYWN0aXZlKHt9KTtcbiAgZWwuX3hfYmluZGluZ3NbbmFtZV0gPSB2YWx1ZTtcbiAgbmFtZSA9IG1vZGlmaWVycy5pbmNsdWRlcyhcImNhbWVsXCIpID8gY2FtZWxDYXNlKG5hbWUpIDogbmFtZTtcbiAgc3dpdGNoIChuYW1lKSB7XG4gICAgY2FzZSBcInZhbHVlXCI6XG4gICAgICBiaW5kSW5wdXRWYWx1ZShlbCwgdmFsdWUpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcInN0eWxlXCI6XG4gICAgICBiaW5kU3R5bGVzKGVsLCB2YWx1ZSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiY2xhc3NcIjpcbiAgICAgIGJpbmRDbGFzc2VzKGVsLCB2YWx1ZSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwic2VsZWN0ZWRcIjpcbiAgICBjYXNlIFwiY2hlY2tlZFwiOlxuICAgICAgYmluZEF0dHJpYnV0ZUFuZFByb3BlcnR5KGVsLCBuYW1lLCB2YWx1ZSk7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgYmluZEF0dHJpYnV0ZShlbCwgbmFtZSwgdmFsdWUpO1xuICAgICAgYnJlYWs7XG4gIH1cbn1cbmZ1bmN0aW9uIGJpbmRJbnB1dFZhbHVlKGVsLCB2YWx1ZSkge1xuICBpZiAoZWwudHlwZSA9PT0gXCJyYWRpb1wiKSB7XG4gICAgaWYgKGVsLmF0dHJpYnV0ZXMudmFsdWUgPT09IHZvaWQgMCkge1xuICAgICAgZWwudmFsdWUgPSB2YWx1ZTtcbiAgICB9XG4gICAgaWYgKHdpbmRvdy5mcm9tTW9kZWwpIHtcbiAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwiYm9vbGVhblwiKSB7XG4gICAgICAgIGVsLmNoZWNrZWQgPSBzYWZlUGFyc2VCb29sZWFuKGVsLnZhbHVlKSA9PT0gdmFsdWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbC5jaGVja2VkID0gY2hlY2tlZEF0dHJMb29zZUNvbXBhcmUoZWwudmFsdWUsIHZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSBpZiAoZWwudHlwZSA9PT0gXCJjaGVja2JveFwiKSB7XG4gICAgaWYgKE51bWJlci5pc0ludGVnZXIodmFsdWUpKSB7XG4gICAgICBlbC52YWx1ZSA9IHZhbHVlO1xuICAgIH0gZWxzZSBpZiAoIUFycmF5LmlzQXJyYXkodmFsdWUpICYmIHR5cGVvZiB2YWx1ZSAhPT0gXCJib29sZWFuXCIgJiYgIVtudWxsLCB2b2lkIDBdLmluY2x1ZGVzKHZhbHVlKSkge1xuICAgICAgZWwudmFsdWUgPSBTdHJpbmcodmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgZWwuY2hlY2tlZCA9IHZhbHVlLnNvbWUoKHZhbCkgPT4gY2hlY2tlZEF0dHJMb29zZUNvbXBhcmUodmFsLCBlbC52YWx1ZSkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWwuY2hlY2tlZCA9ICEhdmFsdWU7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2UgaWYgKGVsLnRhZ05hbWUgPT09IFwiU0VMRUNUXCIpIHtcbiAgICB1cGRhdGVTZWxlY3QoZWwsIHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoZWwudmFsdWUgPT09IHZhbHVlKVxuICAgICAgcmV0dXJuO1xuICAgIGVsLnZhbHVlID0gdmFsdWUgPT09IHZvaWQgMCA/IFwiXCIgOiB2YWx1ZTtcbiAgfVxufVxuZnVuY3Rpb24gYmluZENsYXNzZXMoZWwsIHZhbHVlKSB7XG4gIGlmIChlbC5feF91bmRvQWRkZWRDbGFzc2VzKVxuICAgIGVsLl94X3VuZG9BZGRlZENsYXNzZXMoKTtcbiAgZWwuX3hfdW5kb0FkZGVkQ2xhc3NlcyA9IHNldENsYXNzZXMoZWwsIHZhbHVlKTtcbn1cbmZ1bmN0aW9uIGJpbmRTdHlsZXMoZWwsIHZhbHVlKSB7XG4gIGlmIChlbC5feF91bmRvQWRkZWRTdHlsZXMpXG4gICAgZWwuX3hfdW5kb0FkZGVkU3R5bGVzKCk7XG4gIGVsLl94X3VuZG9BZGRlZFN0eWxlcyA9IHNldFN0eWxlcyhlbCwgdmFsdWUpO1xufVxuZnVuY3Rpb24gYmluZEF0dHJpYnV0ZUFuZFByb3BlcnR5KGVsLCBuYW1lLCB2YWx1ZSkge1xuICBiaW5kQXR0cmlidXRlKGVsLCBuYW1lLCB2YWx1ZSk7XG4gIHNldFByb3BlcnR5SWZDaGFuZ2VkKGVsLCBuYW1lLCB2YWx1ZSk7XG59XG5mdW5jdGlvbiBiaW5kQXR0cmlidXRlKGVsLCBuYW1lLCB2YWx1ZSkge1xuICBpZiAoW251bGwsIHZvaWQgMCwgZmFsc2VdLmluY2x1ZGVzKHZhbHVlKSAmJiBhdHRyaWJ1dGVTaG91bGRudEJlUHJlc2VydmVkSWZGYWxzeShuYW1lKSkge1xuICAgIGVsLnJlbW92ZUF0dHJpYnV0ZShuYW1lKTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoaXNCb29sZWFuQXR0cihuYW1lKSlcbiAgICAgIHZhbHVlID0gbmFtZTtcbiAgICBzZXRJZkNoYW5nZWQoZWwsIG5hbWUsIHZhbHVlKTtcbiAgfVxufVxuZnVuY3Rpb24gc2V0SWZDaGFuZ2VkKGVsLCBhdHRyTmFtZSwgdmFsdWUpIHtcbiAgaWYgKGVsLmdldEF0dHJpYnV0ZShhdHRyTmFtZSkgIT0gdmFsdWUpIHtcbiAgICBlbC5zZXRBdHRyaWJ1dGUoYXR0ck5hbWUsIHZhbHVlKTtcbiAgfVxufVxuZnVuY3Rpb24gc2V0UHJvcGVydHlJZkNoYW5nZWQoZWwsIHByb3BOYW1lLCB2YWx1ZSkge1xuICBpZiAoZWxbcHJvcE5hbWVdICE9PSB2YWx1ZSkge1xuICAgIGVsW3Byb3BOYW1lXSA9IHZhbHVlO1xuICB9XG59XG5mdW5jdGlvbiB1cGRhdGVTZWxlY3QoZWwsIHZhbHVlKSB7XG4gIGNvbnN0IGFycmF5V3JhcHBlZFZhbHVlID0gW10uY29uY2F0KHZhbHVlKS5tYXAoKHZhbHVlMikgPT4ge1xuICAgIHJldHVybiB2YWx1ZTIgKyBcIlwiO1xuICB9KTtcbiAgQXJyYXkuZnJvbShlbC5vcHRpb25zKS5mb3JFYWNoKChvcHRpb24pID0+IHtcbiAgICBvcHRpb24uc2VsZWN0ZWQgPSBhcnJheVdyYXBwZWRWYWx1ZS5pbmNsdWRlcyhvcHRpb24udmFsdWUpO1xuICB9KTtcbn1cbmZ1bmN0aW9uIGNhbWVsQ2FzZShzdWJqZWN0KSB7XG4gIHJldHVybiBzdWJqZWN0LnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvLShcXHcpL2csIChtYXRjaCwgY2hhcikgPT4gY2hhci50b1VwcGVyQ2FzZSgpKTtcbn1cbmZ1bmN0aW9uIGNoZWNrZWRBdHRyTG9vc2VDb21wYXJlKHZhbHVlQSwgdmFsdWVCKSB7XG4gIHJldHVybiB2YWx1ZUEgPT0gdmFsdWVCO1xufVxuZnVuY3Rpb24gc2FmZVBhcnNlQm9vbGVhbihyYXdWYWx1ZSkge1xuICBpZiAoWzEsIFwiMVwiLCBcInRydWVcIiwgXCJvblwiLCBcInllc1wiLCB0cnVlXS5pbmNsdWRlcyhyYXdWYWx1ZSkpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBpZiAoWzAsIFwiMFwiLCBcImZhbHNlXCIsIFwib2ZmXCIsIFwibm9cIiwgZmFsc2VdLmluY2x1ZGVzKHJhd1ZhbHVlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gcmF3VmFsdWUgPyBCb29sZWFuKHJhd1ZhbHVlKSA6IG51bGw7XG59XG5mdW5jdGlvbiBpc0Jvb2xlYW5BdHRyKGF0dHJOYW1lKSB7XG4gIGNvbnN0IGJvb2xlYW5BdHRyaWJ1dGVzID0gW1xuICAgIFwiZGlzYWJsZWRcIixcbiAgICBcImNoZWNrZWRcIixcbiAgICBcInJlcXVpcmVkXCIsXG4gICAgXCJyZWFkb25seVwiLFxuICAgIFwiaGlkZGVuXCIsXG4gICAgXCJvcGVuXCIsXG4gICAgXCJzZWxlY3RlZFwiLFxuICAgIFwiYXV0b2ZvY3VzXCIsXG4gICAgXCJpdGVtc2NvcGVcIixcbiAgICBcIm11bHRpcGxlXCIsXG4gICAgXCJub3ZhbGlkYXRlXCIsXG4gICAgXCJhbGxvd2Z1bGxzY3JlZW5cIixcbiAgICBcImFsbG93cGF5bWVudHJlcXVlc3RcIixcbiAgICBcImZvcm1ub3ZhbGlkYXRlXCIsXG4gICAgXCJhdXRvcGxheVwiLFxuICAgIFwiY29udHJvbHNcIixcbiAgICBcImxvb3BcIixcbiAgICBcIm11dGVkXCIsXG4gICAgXCJwbGF5c2lubGluZVwiLFxuICAgIFwiZGVmYXVsdFwiLFxuICAgIFwiaXNtYXBcIixcbiAgICBcInJldmVyc2VkXCIsXG4gICAgXCJhc3luY1wiLFxuICAgIFwiZGVmZXJcIixcbiAgICBcIm5vbW9kdWxlXCJcbiAgXTtcbiAgcmV0dXJuIGJvb2xlYW5BdHRyaWJ1dGVzLmluY2x1ZGVzKGF0dHJOYW1lKTtcbn1cbmZ1bmN0aW9uIGF0dHJpYnV0ZVNob3VsZG50QmVQcmVzZXJ2ZWRJZkZhbHN5KG5hbWUpIHtcbiAgcmV0dXJuICFbXCJhcmlhLXByZXNzZWRcIiwgXCJhcmlhLWNoZWNrZWRcIiwgXCJhcmlhLWV4cGFuZGVkXCIsIFwiYXJpYS1zZWxlY3RlZFwiXS5pbmNsdWRlcyhuYW1lKTtcbn1cbmZ1bmN0aW9uIGdldEJpbmRpbmcoZWwsIG5hbWUsIGZhbGxiYWNrKSB7XG4gIGlmIChlbC5feF9iaW5kaW5ncyAmJiBlbC5feF9iaW5kaW5nc1tuYW1lXSAhPT0gdm9pZCAwKVxuICAgIHJldHVybiBlbC5feF9iaW5kaW5nc1tuYW1lXTtcbiAgcmV0dXJuIGdldEF0dHJpYnV0ZUJpbmRpbmcoZWwsIG5hbWUsIGZhbGxiYWNrKTtcbn1cbmZ1bmN0aW9uIGV4dHJhY3RQcm9wKGVsLCBuYW1lLCBmYWxsYmFjaywgZXh0cmFjdCA9IHRydWUpIHtcbiAgaWYgKGVsLl94X2JpbmRpbmdzICYmIGVsLl94X2JpbmRpbmdzW25hbWVdICE9PSB2b2lkIDApXG4gICAgcmV0dXJuIGVsLl94X2JpbmRpbmdzW25hbWVdO1xuICBpZiAoZWwuX3hfaW5saW5lQmluZGluZ3MgJiYgZWwuX3hfaW5saW5lQmluZGluZ3NbbmFtZV0gIT09IHZvaWQgMCkge1xuICAgIGxldCBiaW5kaW5nID0gZWwuX3hfaW5saW5lQmluZGluZ3NbbmFtZV07XG4gICAgYmluZGluZy5leHRyYWN0ID0gZXh0cmFjdDtcbiAgICByZXR1cm4gZG9udEF1dG9FdmFsdWF0ZUZ1bmN0aW9ucygoKSA9PiB7XG4gICAgICByZXR1cm4gZXZhbHVhdGUoZWwsIGJpbmRpbmcuZXhwcmVzc2lvbik7XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIGdldEF0dHJpYnV0ZUJpbmRpbmcoZWwsIG5hbWUsIGZhbGxiYWNrKTtcbn1cbmZ1bmN0aW9uIGdldEF0dHJpYnV0ZUJpbmRpbmcoZWwsIG5hbWUsIGZhbGxiYWNrKSB7XG4gIGxldCBhdHRyID0gZWwuZ2V0QXR0cmlidXRlKG5hbWUpO1xuICBpZiAoYXR0ciA9PT0gbnVsbClcbiAgICByZXR1cm4gdHlwZW9mIGZhbGxiYWNrID09PSBcImZ1bmN0aW9uXCIgPyBmYWxsYmFjaygpIDogZmFsbGJhY2s7XG4gIGlmIChhdHRyID09PSBcIlwiKVxuICAgIHJldHVybiB0cnVlO1xuICBpZiAoaXNCb29sZWFuQXR0cihuYW1lKSkge1xuICAgIHJldHVybiAhIVtuYW1lLCBcInRydWVcIl0uaW5jbHVkZXMoYXR0cik7XG4gIH1cbiAgcmV0dXJuIGF0dHI7XG59XG5cbi8vIHBhY2thZ2VzL2FscGluZWpzL3NyYy91dGlscy9kZWJvdW5jZS5qc1xuZnVuY3Rpb24gZGVib3VuY2UoZnVuYywgd2FpdCkge1xuICB2YXIgdGltZW91dDtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciBjb250ZXh0ID0gdGhpcywgYXJncyA9IGFyZ3VtZW50cztcbiAgICB2YXIgbGF0ZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgIHRpbWVvdXQgPSBudWxsO1xuICAgICAgZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICB9O1xuICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICB0aW1lb3V0ID0gc2V0VGltZW91dChsYXRlciwgd2FpdCk7XG4gIH07XG59XG5cbi8vIHBhY2thZ2VzL2FscGluZWpzL3NyYy91dGlscy90aHJvdHRsZS5qc1xuZnVuY3Rpb24gdGhyb3R0bGUoZnVuYywgbGltaXQpIHtcbiAgbGV0IGluVGhyb3R0bGU7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICBsZXQgY29udGV4dCA9IHRoaXMsIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgaWYgKCFpblRocm90dGxlKSB7XG4gICAgICBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgICAgaW5UaHJvdHRsZSA9IHRydWU7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IGluVGhyb3R0bGUgPSBmYWxzZSwgbGltaXQpO1xuICAgIH1cbiAgfTtcbn1cblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL2VudGFuZ2xlLmpzXG5mdW5jdGlvbiBlbnRhbmdsZSh7IGdldDogb3V0ZXJHZXQsIHNldDogb3V0ZXJTZXQgfSwgeyBnZXQ6IGlubmVyR2V0LCBzZXQ6IGlubmVyU2V0IH0pIHtcbiAgbGV0IGZpcnN0UnVuID0gdHJ1ZTtcbiAgbGV0IG91dGVySGFzaDtcbiAgbGV0IHJlZmVyZW5jZSA9IGVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgb3V0ZXIgPSBvdXRlckdldCgpO1xuICAgIGNvbnN0IGlubmVyID0gaW5uZXJHZXQoKTtcbiAgICBpZiAoZmlyc3RSdW4pIHtcbiAgICAgIGlubmVyU2V0KGNsb25lSWZPYmplY3Qob3V0ZXIpKTtcbiAgICAgIGZpcnN0UnVuID0gZmFsc2U7XG4gICAgICBvdXRlckhhc2ggPSBKU09OLnN0cmluZ2lmeShvdXRlcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG91dGVySGFzaExhdGVzdCA9IEpTT04uc3RyaW5naWZ5KG91dGVyKTtcbiAgICAgIGlmIChvdXRlckhhc2hMYXRlc3QgIT09IG91dGVySGFzaCkge1xuICAgICAgICBpbm5lclNldChjbG9uZUlmT2JqZWN0KG91dGVyKSk7XG4gICAgICAgIG91dGVySGFzaCA9IG91dGVySGFzaExhdGVzdDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG91dGVyU2V0KGNsb25lSWZPYmplY3QoaW5uZXIpKTtcbiAgICAgICAgb3V0ZXJIYXNoID0gSlNPTi5zdHJpbmdpZnkoaW5uZXIpO1xuICAgICAgfVxuICAgIH1cbiAgICBKU09OLnN0cmluZ2lmeShpbm5lckdldCgpKTtcbiAgICBKU09OLnN0cmluZ2lmeShvdXRlckdldCgpKTtcbiAgfSk7XG4gIHJldHVybiAoKSA9PiB7XG4gICAgcmVsZWFzZShyZWZlcmVuY2UpO1xuICB9O1xufVxuZnVuY3Rpb24gY2xvbmVJZk9iamVjdCh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiID8gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh2YWx1ZSkpIDogdmFsdWU7XG59XG5cbi8vIHBhY2thZ2VzL2FscGluZWpzL3NyYy9wbHVnaW4uanNcbmZ1bmN0aW9uIHBsdWdpbihjYWxsYmFjaykge1xuICBsZXQgY2FsbGJhY2tzID0gQXJyYXkuaXNBcnJheShjYWxsYmFjaykgPyBjYWxsYmFjayA6IFtjYWxsYmFja107XG4gIGNhbGxiYWNrcy5mb3JFYWNoKChpKSA9PiBpKGFscGluZV9kZWZhdWx0KSk7XG59XG5cbi8vIHBhY2thZ2VzL2FscGluZWpzL3NyYy9zdG9yZS5qc1xudmFyIHN0b3JlcyA9IHt9O1xudmFyIGlzUmVhY3RpdmUgPSBmYWxzZTtcbmZ1bmN0aW9uIHN0b3JlKG5hbWUsIHZhbHVlKSB7XG4gIGlmICghaXNSZWFjdGl2ZSkge1xuICAgIHN0b3JlcyA9IHJlYWN0aXZlKHN0b3Jlcyk7XG4gICAgaXNSZWFjdGl2ZSA9IHRydWU7XG4gIH1cbiAgaWYgKHZhbHVlID09PSB2b2lkIDApIHtcbiAgICByZXR1cm4gc3RvcmVzW25hbWVdO1xuICB9XG4gIHN0b3Jlc1tuYW1lXSA9IHZhbHVlO1xuICBpZiAodHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmIHZhbHVlICE9PSBudWxsICYmIHZhbHVlLmhhc093blByb3BlcnR5KFwiaW5pdFwiKSAmJiB0eXBlb2YgdmFsdWUuaW5pdCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgc3RvcmVzW25hbWVdLmluaXQoKTtcbiAgfVxuICBpbml0SW50ZXJjZXB0b3JzMihzdG9yZXNbbmFtZV0pO1xufVxuZnVuY3Rpb24gZ2V0U3RvcmVzKCkge1xuICByZXR1cm4gc3RvcmVzO1xufVxuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvYmluZHMuanNcbnZhciBiaW5kcyA9IHt9O1xuZnVuY3Rpb24gYmluZDIobmFtZSwgYmluZGluZ3MpIHtcbiAgbGV0IGdldEJpbmRpbmdzID0gdHlwZW9mIGJpbmRpbmdzICE9PSBcImZ1bmN0aW9uXCIgPyAoKSA9PiBiaW5kaW5ncyA6IGJpbmRpbmdzO1xuICBpZiAobmFtZSBpbnN0YW5jZW9mIEVsZW1lbnQpIHtcbiAgICByZXR1cm4gYXBwbHlCaW5kaW5nc09iamVjdChuYW1lLCBnZXRCaW5kaW5ncygpKTtcbiAgfSBlbHNlIHtcbiAgICBiaW5kc1tuYW1lXSA9IGdldEJpbmRpbmdzO1xuICB9XG4gIHJldHVybiAoKSA9PiB7XG4gIH07XG59XG5mdW5jdGlvbiBpbmplY3RCaW5kaW5nUHJvdmlkZXJzKG9iaikge1xuICBPYmplY3QuZW50cmllcyhiaW5kcykuZm9yRWFjaCgoW25hbWUsIGNhbGxiYWNrXSkgPT4ge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIG5hbWUsIHtcbiAgICAgIGdldCgpIHtcbiAgICAgICAgcmV0dXJuICguLi5hcmdzKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKC4uLmFyZ3MpO1xuICAgICAgICB9O1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbiAgcmV0dXJuIG9iajtcbn1cbmZ1bmN0aW9uIGFwcGx5QmluZGluZ3NPYmplY3QoZWwsIG9iaiwgb3JpZ2luYWwpIHtcbiAgbGV0IGNsZWFudXBSdW5uZXJzID0gW107XG4gIHdoaWxlIChjbGVhbnVwUnVubmVycy5sZW5ndGgpXG4gICAgY2xlYW51cFJ1bm5lcnMucG9wKCkoKTtcbiAgbGV0IGF0dHJpYnV0ZXMgPSBPYmplY3QuZW50cmllcyhvYmopLm1hcCgoW25hbWUsIHZhbHVlXSkgPT4gKHsgbmFtZSwgdmFsdWUgfSkpO1xuICBsZXQgc3RhdGljQXR0cmlidXRlcyA9IGF0dHJpYnV0ZXNPbmx5KGF0dHJpYnV0ZXMpO1xuICBhdHRyaWJ1dGVzID0gYXR0cmlidXRlcy5tYXAoKGF0dHJpYnV0ZSkgPT4ge1xuICAgIGlmIChzdGF0aWNBdHRyaWJ1dGVzLmZpbmQoKGF0dHIpID0+IGF0dHIubmFtZSA9PT0gYXR0cmlidXRlLm5hbWUpKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBuYW1lOiBgeC1iaW5kOiR7YXR0cmlidXRlLm5hbWV9YCxcbiAgICAgICAgdmFsdWU6IGBcIiR7YXR0cmlidXRlLnZhbHVlfVwiYFxuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIGF0dHJpYnV0ZTtcbiAgfSk7XG4gIGRpcmVjdGl2ZXMoZWwsIGF0dHJpYnV0ZXMsIG9yaWdpbmFsKS5tYXAoKGhhbmRsZSkgPT4ge1xuICAgIGNsZWFudXBSdW5uZXJzLnB1c2goaGFuZGxlLnJ1bkNsZWFudXBzKTtcbiAgICBoYW5kbGUoKTtcbiAgfSk7XG4gIHJldHVybiAoKSA9PiB7XG4gICAgd2hpbGUgKGNsZWFudXBSdW5uZXJzLmxlbmd0aClcbiAgICAgIGNsZWFudXBSdW5uZXJzLnBvcCgpKCk7XG4gIH07XG59XG5cbi8vIHBhY2thZ2VzL2FscGluZWpzL3NyYy9kYXRhcy5qc1xudmFyIGRhdGFzID0ge307XG5mdW5jdGlvbiBkYXRhKG5hbWUsIGNhbGxiYWNrKSB7XG4gIGRhdGFzW25hbWVdID0gY2FsbGJhY2s7XG59XG5mdW5jdGlvbiBpbmplY3REYXRhUHJvdmlkZXJzKG9iaiwgY29udGV4dCkge1xuICBPYmplY3QuZW50cmllcyhkYXRhcykuZm9yRWFjaCgoW25hbWUsIGNhbGxiYWNrXSkgPT4ge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIG5hbWUsIHtcbiAgICAgIGdldCgpIHtcbiAgICAgICAgcmV0dXJuICguLi5hcmdzKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIGNhbGxiYWNrLmJpbmQoY29udGV4dCkoLi4uYXJncyk7XG4gICAgICAgIH07XG4gICAgICB9LFxuICAgICAgZW51bWVyYWJsZTogZmFsc2VcbiAgICB9KTtcbiAgfSk7XG4gIHJldHVybiBvYmo7XG59XG5cbi8vIHBhY2thZ2VzL2FscGluZWpzL3NyYy9hbHBpbmUuanNcbnZhciBBbHBpbmUgPSB7XG4gIGdldCByZWFjdGl2ZSgpIHtcbiAgICByZXR1cm4gcmVhY3RpdmU7XG4gIH0sXG4gIGdldCByZWxlYXNlKCkge1xuICAgIHJldHVybiByZWxlYXNlO1xuICB9LFxuICBnZXQgZWZmZWN0KCkge1xuICAgIHJldHVybiBlZmZlY3Q7XG4gIH0sXG4gIGdldCByYXcoKSB7XG4gICAgcmV0dXJuIHJhdztcbiAgfSxcbiAgdmVyc2lvbjogXCIzLjEzLjNcIixcbiAgZmx1c2hBbmRTdG9wRGVmZXJyaW5nTXV0YXRpb25zLFxuICBkb250QXV0b0V2YWx1YXRlRnVuY3Rpb25zLFxuICBkaXNhYmxlRWZmZWN0U2NoZWR1bGluZyxcbiAgc3RhcnRPYnNlcnZpbmdNdXRhdGlvbnMsXG4gIHN0b3BPYnNlcnZpbmdNdXRhdGlvbnMsXG4gIHNldFJlYWN0aXZpdHlFbmdpbmUsXG4gIG9uQXR0cmlidXRlUmVtb3ZlZCxcbiAgb25BdHRyaWJ1dGVzQWRkZWQsXG4gIGNsb3Nlc3REYXRhU3RhY2ssXG4gIHNraXBEdXJpbmdDbG9uZSxcbiAgb25seUR1cmluZ0Nsb25lLFxuICBhZGRSb290U2VsZWN0b3IsXG4gIGFkZEluaXRTZWxlY3RvcixcbiAgaW50ZXJjZXB0Q2xvbmUsXG4gIGFkZFNjb3BlVG9Ob2RlLFxuICBkZWZlck11dGF0aW9ucyxcbiAgbWFwQXR0cmlidXRlcyxcbiAgZXZhbHVhdGVMYXRlcixcbiAgaW50ZXJjZXB0SW5pdCxcbiAgc2V0RXZhbHVhdG9yLFxuICBtZXJnZVByb3hpZXMsXG4gIGV4dHJhY3RQcm9wLFxuICBmaW5kQ2xvc2VzdCxcbiAgb25FbFJlbW92ZWQsXG4gIGNsb3Nlc3RSb290LFxuICBkZXN0cm95VHJlZSxcbiAgaW50ZXJjZXB0b3IsXG4gIC8vIElOVEVSTkFMOiBub3QgcHVibGljIEFQSSBhbmQgaXMgc3ViamVjdCB0byBjaGFuZ2Ugd2l0aG91dCBtYWpvciByZWxlYXNlLlxuICB0cmFuc2l0aW9uLFxuICAvLyBJTlRFUk5BTFxuICBzZXRTdHlsZXMsXG4gIC8vIElOVEVSTkFMXG4gIG11dGF0ZURvbSxcbiAgZGlyZWN0aXZlLFxuICBlbnRhbmdsZSxcbiAgdGhyb3R0bGUsXG4gIGRlYm91bmNlLFxuICBldmFsdWF0ZSxcbiAgaW5pdFRyZWUsXG4gIG5leHRUaWNrLFxuICBwcmVmaXhlZDogcHJlZml4LFxuICBwcmVmaXg6IHNldFByZWZpeCxcbiAgcGx1Z2luLFxuICBtYWdpYyxcbiAgc3RvcmUsXG4gIHN0YXJ0LFxuICBjbG9uZSxcbiAgLy8gSU5URVJOQUxcbiAgY2xvbmVOb2RlLFxuICAvLyBJTlRFUk5BTFxuICBib3VuZDogZ2V0QmluZGluZyxcbiAgJGRhdGE6IHNjb3BlLFxuICB3YWxrLFxuICBkYXRhLFxuICBiaW5kOiBiaW5kMlxufTtcbnZhciBhbHBpbmVfZGVmYXVsdCA9IEFscGluZTtcblxuLy8gbm9kZV9tb2R1bGVzL0B2dWUvc2hhcmVkL2Rpc3Qvc2hhcmVkLmVzbS1idW5kbGVyLmpzXG5mdW5jdGlvbiBtYWtlTWFwKHN0ciwgZXhwZWN0c0xvd2VyQ2FzZSkge1xuICBjb25zdCBtYXAgPSAvKiBAX19QVVJFX18gKi8gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgY29uc3QgbGlzdCA9IHN0ci5zcGxpdChcIixcIik7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIG1hcFtsaXN0W2ldXSA9IHRydWU7XG4gIH1cbiAgcmV0dXJuIGV4cGVjdHNMb3dlckNhc2UgPyAodmFsKSA9PiAhIW1hcFt2YWwudG9Mb3dlckNhc2UoKV0gOiAodmFsKSA9PiAhIW1hcFt2YWxdO1xufVxudmFyIHNwZWNpYWxCb29sZWFuQXR0cnMgPSBgaXRlbXNjb3BlLGFsbG93ZnVsbHNjcmVlbixmb3Jtbm92YWxpZGF0ZSxpc21hcCxub21vZHVsZSxub3ZhbGlkYXRlLHJlYWRvbmx5YDtcbnZhciBpc0Jvb2xlYW5BdHRyMiA9IC8qIEBfX1BVUkVfXyAqLyBtYWtlTWFwKHNwZWNpYWxCb29sZWFuQXR0cnMgKyBgLGFzeW5jLGF1dG9mb2N1cyxhdXRvcGxheSxjb250cm9scyxkZWZhdWx0LGRlZmVyLGRpc2FibGVkLGhpZGRlbixsb29wLG9wZW4scmVxdWlyZWQscmV2ZXJzZWQsc2NvcGVkLHNlYW1sZXNzLGNoZWNrZWQsbXV0ZWQsbXVsdGlwbGUsc2VsZWN0ZWRgKTtcbnZhciBFTVBUWV9PQkogPSB0cnVlID8gT2JqZWN0LmZyZWV6ZSh7fSkgOiB7fTtcbnZhciBFTVBUWV9BUlIgPSB0cnVlID8gT2JqZWN0LmZyZWV6ZShbXSkgOiBbXTtcbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgaGFzT3duID0gKHZhbCwga2V5KSA9PiBoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbCwga2V5KTtcbnZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheTtcbnZhciBpc01hcCA9ICh2YWwpID0+IHRvVHlwZVN0cmluZyh2YWwpID09PSBcIltvYmplY3QgTWFwXVwiO1xudmFyIGlzU3RyaW5nID0gKHZhbCkgPT4gdHlwZW9mIHZhbCA9PT0gXCJzdHJpbmdcIjtcbnZhciBpc1N5bWJvbCA9ICh2YWwpID0+IHR5cGVvZiB2YWwgPT09IFwic3ltYm9sXCI7XG52YXIgaXNPYmplY3QgPSAodmFsKSA9PiB2YWwgIT09IG51bGwgJiYgdHlwZW9mIHZhbCA9PT0gXCJvYmplY3RcIjtcbnZhciBvYmplY3RUb1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG52YXIgdG9UeXBlU3RyaW5nID0gKHZhbHVlKSA9PiBvYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKTtcbnZhciB0b1Jhd1R5cGUgPSAodmFsdWUpID0+IHtcbiAgcmV0dXJuIHRvVHlwZVN0cmluZyh2YWx1ZSkuc2xpY2UoOCwgLTEpO1xufTtcbnZhciBpc0ludGVnZXJLZXkgPSAoa2V5KSA9PiBpc1N0cmluZyhrZXkpICYmIGtleSAhPT0gXCJOYU5cIiAmJiBrZXlbMF0gIT09IFwiLVwiICYmIFwiXCIgKyBwYXJzZUludChrZXksIDEwKSA9PT0ga2V5O1xudmFyIGNhY2hlU3RyaW5nRnVuY3Rpb24gPSAoZm4pID0+IHtcbiAgY29uc3QgY2FjaGUgPSAvKiBAX19QVVJFX18gKi8gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgcmV0dXJuIChzdHIpID0+IHtcbiAgICBjb25zdCBoaXQgPSBjYWNoZVtzdHJdO1xuICAgIHJldHVybiBoaXQgfHwgKGNhY2hlW3N0cl0gPSBmbihzdHIpKTtcbiAgfTtcbn07XG52YXIgY2FtZWxpemVSRSA9IC8tKFxcdykvZztcbnZhciBjYW1lbGl6ZSA9IGNhY2hlU3RyaW5nRnVuY3Rpb24oKHN0cikgPT4ge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoY2FtZWxpemVSRSwgKF8sIGMpID0+IGMgPyBjLnRvVXBwZXJDYXNlKCkgOiBcIlwiKTtcbn0pO1xudmFyIGh5cGhlbmF0ZVJFID0gL1xcQihbQS1aXSkvZztcbnZhciBoeXBoZW5hdGUgPSBjYWNoZVN0cmluZ0Z1bmN0aW9uKChzdHIpID0+IHN0ci5yZXBsYWNlKGh5cGhlbmF0ZVJFLCBcIi0kMVwiKS50b0xvd2VyQ2FzZSgpKTtcbnZhciBjYXBpdGFsaXplID0gY2FjaGVTdHJpbmdGdW5jdGlvbigoc3RyKSA9PiBzdHIuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHIuc2xpY2UoMSkpO1xudmFyIHRvSGFuZGxlcktleSA9IGNhY2hlU3RyaW5nRnVuY3Rpb24oKHN0cikgPT4gc3RyID8gYG9uJHtjYXBpdGFsaXplKHN0cil9YCA6IGBgKTtcbnZhciBoYXNDaGFuZ2VkID0gKHZhbHVlLCBvbGRWYWx1ZSkgPT4gdmFsdWUgIT09IG9sZFZhbHVlICYmICh2YWx1ZSA9PT0gdmFsdWUgfHwgb2xkVmFsdWUgPT09IG9sZFZhbHVlKTtcblxuLy8gbm9kZV9tb2R1bGVzL0B2dWUvcmVhY3Rpdml0eS9kaXN0L3JlYWN0aXZpdHkuZXNtLWJ1bmRsZXIuanNcbnZhciB0YXJnZXRNYXAgPSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcbnZhciBlZmZlY3RTdGFjayA9IFtdO1xudmFyIGFjdGl2ZUVmZmVjdDtcbnZhciBJVEVSQVRFX0tFWSA9IFN5bWJvbCh0cnVlID8gXCJpdGVyYXRlXCIgOiBcIlwiKTtcbnZhciBNQVBfS0VZX0lURVJBVEVfS0VZID0gU3ltYm9sKHRydWUgPyBcIk1hcCBrZXkgaXRlcmF0ZVwiIDogXCJcIik7XG5mdW5jdGlvbiBpc0VmZmVjdChmbikge1xuICByZXR1cm4gZm4gJiYgZm4uX2lzRWZmZWN0ID09PSB0cnVlO1xufVxuZnVuY3Rpb24gZWZmZWN0Mihmbiwgb3B0aW9ucyA9IEVNUFRZX09CSikge1xuICBpZiAoaXNFZmZlY3QoZm4pKSB7XG4gICAgZm4gPSBmbi5yYXc7XG4gIH1cbiAgY29uc3QgZWZmZWN0MyA9IGNyZWF0ZVJlYWN0aXZlRWZmZWN0KGZuLCBvcHRpb25zKTtcbiAgaWYgKCFvcHRpb25zLmxhenkpIHtcbiAgICBlZmZlY3QzKCk7XG4gIH1cbiAgcmV0dXJuIGVmZmVjdDM7XG59XG5mdW5jdGlvbiBzdG9wKGVmZmVjdDMpIHtcbiAgaWYgKGVmZmVjdDMuYWN0aXZlKSB7XG4gICAgY2xlYW51cChlZmZlY3QzKTtcbiAgICBpZiAoZWZmZWN0My5vcHRpb25zLm9uU3RvcCkge1xuICAgICAgZWZmZWN0My5vcHRpb25zLm9uU3RvcCgpO1xuICAgIH1cbiAgICBlZmZlY3QzLmFjdGl2ZSA9IGZhbHNlO1xuICB9XG59XG52YXIgdWlkID0gMDtcbmZ1bmN0aW9uIGNyZWF0ZVJlYWN0aXZlRWZmZWN0KGZuLCBvcHRpb25zKSB7XG4gIGNvbnN0IGVmZmVjdDMgPSBmdW5jdGlvbiByZWFjdGl2ZUVmZmVjdCgpIHtcbiAgICBpZiAoIWVmZmVjdDMuYWN0aXZlKSB7XG4gICAgICByZXR1cm4gZm4oKTtcbiAgICB9XG4gICAgaWYgKCFlZmZlY3RTdGFjay5pbmNsdWRlcyhlZmZlY3QzKSkge1xuICAgICAgY2xlYW51cChlZmZlY3QzKTtcbiAgICAgIHRyeSB7XG4gICAgICAgIGVuYWJsZVRyYWNraW5nKCk7XG4gICAgICAgIGVmZmVjdFN0YWNrLnB1c2goZWZmZWN0Myk7XG4gICAgICAgIGFjdGl2ZUVmZmVjdCA9IGVmZmVjdDM7XG4gICAgICAgIHJldHVybiBmbigpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgZWZmZWN0U3RhY2sucG9wKCk7XG4gICAgICAgIHJlc2V0VHJhY2tpbmcoKTtcbiAgICAgICAgYWN0aXZlRWZmZWN0ID0gZWZmZWN0U3RhY2tbZWZmZWN0U3RhY2subGVuZ3RoIC0gMV07XG4gICAgICB9XG4gICAgfVxuICB9O1xuICBlZmZlY3QzLmlkID0gdWlkKys7XG4gIGVmZmVjdDMuYWxsb3dSZWN1cnNlID0gISFvcHRpb25zLmFsbG93UmVjdXJzZTtcbiAgZWZmZWN0My5faXNFZmZlY3QgPSB0cnVlO1xuICBlZmZlY3QzLmFjdGl2ZSA9IHRydWU7XG4gIGVmZmVjdDMucmF3ID0gZm47XG4gIGVmZmVjdDMuZGVwcyA9IFtdO1xuICBlZmZlY3QzLm9wdGlvbnMgPSBvcHRpb25zO1xuICByZXR1cm4gZWZmZWN0Mztcbn1cbmZ1bmN0aW9uIGNsZWFudXAoZWZmZWN0Mykge1xuICBjb25zdCB7IGRlcHMgfSA9IGVmZmVjdDM7XG4gIGlmIChkZXBzLmxlbmd0aCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGVwcy5sZW5ndGg7IGkrKykge1xuICAgICAgZGVwc1tpXS5kZWxldGUoZWZmZWN0Myk7XG4gICAgfVxuICAgIGRlcHMubGVuZ3RoID0gMDtcbiAgfVxufVxudmFyIHNob3VsZFRyYWNrID0gdHJ1ZTtcbnZhciB0cmFja1N0YWNrID0gW107XG5mdW5jdGlvbiBwYXVzZVRyYWNraW5nKCkge1xuICB0cmFja1N0YWNrLnB1c2goc2hvdWxkVHJhY2spO1xuICBzaG91bGRUcmFjayA9IGZhbHNlO1xufVxuZnVuY3Rpb24gZW5hYmxlVHJhY2tpbmcoKSB7XG4gIHRyYWNrU3RhY2sucHVzaChzaG91bGRUcmFjayk7XG4gIHNob3VsZFRyYWNrID0gdHJ1ZTtcbn1cbmZ1bmN0aW9uIHJlc2V0VHJhY2tpbmcoKSB7XG4gIGNvbnN0IGxhc3QgPSB0cmFja1N0YWNrLnBvcCgpO1xuICBzaG91bGRUcmFjayA9IGxhc3QgPT09IHZvaWQgMCA/IHRydWUgOiBsYXN0O1xufVxuZnVuY3Rpb24gdHJhY2sodGFyZ2V0LCB0eXBlLCBrZXkpIHtcbiAgaWYgKCFzaG91bGRUcmFjayB8fCBhY3RpdmVFZmZlY3QgPT09IHZvaWQgMCkge1xuICAgIHJldHVybjtcbiAgfVxuICBsZXQgZGVwc01hcCA9IHRhcmdldE1hcC5nZXQodGFyZ2V0KTtcbiAgaWYgKCFkZXBzTWFwKSB7XG4gICAgdGFyZ2V0TWFwLnNldCh0YXJnZXQsIGRlcHNNYXAgPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpKTtcbiAgfVxuICBsZXQgZGVwID0gZGVwc01hcC5nZXQoa2V5KTtcbiAgaWYgKCFkZXApIHtcbiAgICBkZXBzTWFwLnNldChrZXksIGRlcCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgU2V0KCkpO1xuICB9XG4gIGlmICghZGVwLmhhcyhhY3RpdmVFZmZlY3QpKSB7XG4gICAgZGVwLmFkZChhY3RpdmVFZmZlY3QpO1xuICAgIGFjdGl2ZUVmZmVjdC5kZXBzLnB1c2goZGVwKTtcbiAgICBpZiAoYWN0aXZlRWZmZWN0Lm9wdGlvbnMub25UcmFjaykge1xuICAgICAgYWN0aXZlRWZmZWN0Lm9wdGlvbnMub25UcmFjayh7XG4gICAgICAgIGVmZmVjdDogYWN0aXZlRWZmZWN0LFxuICAgICAgICB0YXJnZXQsXG4gICAgICAgIHR5cGUsXG4gICAgICAgIGtleVxuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG5mdW5jdGlvbiB0cmlnZ2VyKHRhcmdldCwgdHlwZSwga2V5LCBuZXdWYWx1ZSwgb2xkVmFsdWUsIG9sZFRhcmdldCkge1xuICBjb25zdCBkZXBzTWFwID0gdGFyZ2V0TWFwLmdldCh0YXJnZXQpO1xuICBpZiAoIWRlcHNNYXApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgZWZmZWN0cyA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgU2V0KCk7XG4gIGNvbnN0IGFkZDIgPSAoZWZmZWN0c1RvQWRkKSA9PiB7XG4gICAgaWYgKGVmZmVjdHNUb0FkZCkge1xuICAgICAgZWZmZWN0c1RvQWRkLmZvckVhY2goKGVmZmVjdDMpID0+IHtcbiAgICAgICAgaWYgKGVmZmVjdDMgIT09IGFjdGl2ZUVmZmVjdCB8fCBlZmZlY3QzLmFsbG93UmVjdXJzZSkge1xuICAgICAgICAgIGVmZmVjdHMuYWRkKGVmZmVjdDMpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG4gIGlmICh0eXBlID09PSBcImNsZWFyXCIpIHtcbiAgICBkZXBzTWFwLmZvckVhY2goYWRkMik7XG4gIH0gZWxzZSBpZiAoa2V5ID09PSBcImxlbmd0aFwiICYmIGlzQXJyYXkodGFyZ2V0KSkge1xuICAgIGRlcHNNYXAuZm9yRWFjaCgoZGVwLCBrZXkyKSA9PiB7XG4gICAgICBpZiAoa2V5MiA9PT0gXCJsZW5ndGhcIiB8fCBrZXkyID49IG5ld1ZhbHVlKSB7XG4gICAgICAgIGFkZDIoZGVwKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoa2V5ICE9PSB2b2lkIDApIHtcbiAgICAgIGFkZDIoZGVwc01hcC5nZXQoa2V5KSk7XG4gICAgfVxuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSBcImFkZFwiOlxuICAgICAgICBpZiAoIWlzQXJyYXkodGFyZ2V0KSkge1xuICAgICAgICAgIGFkZDIoZGVwc01hcC5nZXQoSVRFUkFURV9LRVkpKTtcbiAgICAgICAgICBpZiAoaXNNYXAodGFyZ2V0KSkge1xuICAgICAgICAgICAgYWRkMihkZXBzTWFwLmdldChNQVBfS0VZX0lURVJBVEVfS0VZKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGlzSW50ZWdlcktleShrZXkpKSB7XG4gICAgICAgICAgYWRkMihkZXBzTWFwLmdldChcImxlbmd0aFwiKSk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiZGVsZXRlXCI6XG4gICAgICAgIGlmICghaXNBcnJheSh0YXJnZXQpKSB7XG4gICAgICAgICAgYWRkMihkZXBzTWFwLmdldChJVEVSQVRFX0tFWSkpO1xuICAgICAgICAgIGlmIChpc01hcCh0YXJnZXQpKSB7XG4gICAgICAgICAgICBhZGQyKGRlcHNNYXAuZ2V0KE1BUF9LRVlfSVRFUkFURV9LRVkpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwic2V0XCI6XG4gICAgICAgIGlmIChpc01hcCh0YXJnZXQpKSB7XG4gICAgICAgICAgYWRkMihkZXBzTWFwLmdldChJVEVSQVRFX0tFWSkpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICBjb25zdCBydW4gPSAoZWZmZWN0MykgPT4ge1xuICAgIGlmIChlZmZlY3QzLm9wdGlvbnMub25UcmlnZ2VyKSB7XG4gICAgICBlZmZlY3QzLm9wdGlvbnMub25UcmlnZ2VyKHtcbiAgICAgICAgZWZmZWN0OiBlZmZlY3QzLFxuICAgICAgICB0YXJnZXQsXG4gICAgICAgIGtleSxcbiAgICAgICAgdHlwZSxcbiAgICAgICAgbmV3VmFsdWUsXG4gICAgICAgIG9sZFZhbHVlLFxuICAgICAgICBvbGRUYXJnZXRcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoZWZmZWN0My5vcHRpb25zLnNjaGVkdWxlcikge1xuICAgICAgZWZmZWN0My5vcHRpb25zLnNjaGVkdWxlcihlZmZlY3QzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZWZmZWN0MygpO1xuICAgIH1cbiAgfTtcbiAgZWZmZWN0cy5mb3JFYWNoKHJ1bik7XG59XG52YXIgaXNOb25UcmFja2FibGVLZXlzID0gLyogQF9fUFVSRV9fICovIG1ha2VNYXAoYF9fcHJvdG9fXyxfX3ZfaXNSZWYsX19pc1Z1ZWApO1xudmFyIGJ1aWx0SW5TeW1ib2xzID0gbmV3IFNldChPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhTeW1ib2wpLm1hcCgoa2V5KSA9PiBTeW1ib2xba2V5XSkuZmlsdGVyKGlzU3ltYm9sKSk7XG52YXIgZ2V0MiA9IC8qIEBfX1BVUkVfXyAqLyBjcmVhdGVHZXR0ZXIoKTtcbnZhciByZWFkb25seUdldCA9IC8qIEBfX1BVUkVfXyAqLyBjcmVhdGVHZXR0ZXIodHJ1ZSk7XG52YXIgYXJyYXlJbnN0cnVtZW50YXRpb25zID0gLyogQF9fUFVSRV9fICovIGNyZWF0ZUFycmF5SW5zdHJ1bWVudGF0aW9ucygpO1xuZnVuY3Rpb24gY3JlYXRlQXJyYXlJbnN0cnVtZW50YXRpb25zKCkge1xuICBjb25zdCBpbnN0cnVtZW50YXRpb25zID0ge307XG4gIFtcImluY2x1ZGVzXCIsIFwiaW5kZXhPZlwiLCBcImxhc3RJbmRleE9mXCJdLmZvckVhY2goKGtleSkgPT4ge1xuICAgIGluc3RydW1lbnRhdGlvbnNba2V5XSA9IGZ1bmN0aW9uKC4uLmFyZ3MpIHtcbiAgICAgIGNvbnN0IGFyciA9IHRvUmF3KHRoaXMpO1xuICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSB0aGlzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICB0cmFjayhhcnIsIFwiZ2V0XCIsIGkgKyBcIlwiKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHJlcyA9IGFycltrZXldKC4uLmFyZ3MpO1xuICAgICAgaWYgKHJlcyA9PT0gLTEgfHwgcmVzID09PSBmYWxzZSkge1xuICAgICAgICByZXR1cm4gYXJyW2tleV0oLi4uYXJncy5tYXAodG9SYXcpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiByZXM7XG4gICAgICB9XG4gICAgfTtcbiAgfSk7XG4gIFtcInB1c2hcIiwgXCJwb3BcIiwgXCJzaGlmdFwiLCBcInVuc2hpZnRcIiwgXCJzcGxpY2VcIl0uZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgaW5zdHJ1bWVudGF0aW9uc1trZXldID0gZnVuY3Rpb24oLi4uYXJncykge1xuICAgICAgcGF1c2VUcmFja2luZygpO1xuICAgICAgY29uc3QgcmVzID0gdG9SYXcodGhpcylba2V5XS5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICAgIHJlc2V0VHJhY2tpbmcoKTtcbiAgICAgIHJldHVybiByZXM7XG4gICAgfTtcbiAgfSk7XG4gIHJldHVybiBpbnN0cnVtZW50YXRpb25zO1xufVxuZnVuY3Rpb24gY3JlYXRlR2V0dGVyKGlzUmVhZG9ubHkgPSBmYWxzZSwgc2hhbGxvdyA9IGZhbHNlKSB7XG4gIHJldHVybiBmdW5jdGlvbiBnZXQzKHRhcmdldCwga2V5LCByZWNlaXZlcikge1xuICAgIGlmIChrZXkgPT09IFwiX192X2lzUmVhY3RpdmVcIikge1xuICAgICAgcmV0dXJuICFpc1JlYWRvbmx5O1xuICAgIH0gZWxzZSBpZiAoa2V5ID09PSBcIl9fdl9pc1JlYWRvbmx5XCIpIHtcbiAgICAgIHJldHVybiBpc1JlYWRvbmx5O1xuICAgIH0gZWxzZSBpZiAoa2V5ID09PSBcIl9fdl9yYXdcIiAmJiByZWNlaXZlciA9PT0gKGlzUmVhZG9ubHkgPyBzaGFsbG93ID8gc2hhbGxvd1JlYWRvbmx5TWFwIDogcmVhZG9ubHlNYXAgOiBzaGFsbG93ID8gc2hhbGxvd1JlYWN0aXZlTWFwIDogcmVhY3RpdmVNYXApLmdldCh0YXJnZXQpKSB7XG4gICAgICByZXR1cm4gdGFyZ2V0O1xuICAgIH1cbiAgICBjb25zdCB0YXJnZXRJc0FycmF5ID0gaXNBcnJheSh0YXJnZXQpO1xuICAgIGlmICghaXNSZWFkb25seSAmJiB0YXJnZXRJc0FycmF5ICYmIGhhc093bihhcnJheUluc3RydW1lbnRhdGlvbnMsIGtleSkpIHtcbiAgICAgIHJldHVybiBSZWZsZWN0LmdldChhcnJheUluc3RydW1lbnRhdGlvbnMsIGtleSwgcmVjZWl2ZXIpO1xuICAgIH1cbiAgICBjb25zdCByZXMgPSBSZWZsZWN0LmdldCh0YXJnZXQsIGtleSwgcmVjZWl2ZXIpO1xuICAgIGlmIChpc1N5bWJvbChrZXkpID8gYnVpbHRJblN5bWJvbHMuaGFzKGtleSkgOiBpc05vblRyYWNrYWJsZUtleXMoa2V5KSkge1xuICAgICAgcmV0dXJuIHJlcztcbiAgICB9XG4gICAgaWYgKCFpc1JlYWRvbmx5KSB7XG4gICAgICB0cmFjayh0YXJnZXQsIFwiZ2V0XCIsIGtleSk7XG4gICAgfVxuICAgIGlmIChzaGFsbG93KSB7XG4gICAgICByZXR1cm4gcmVzO1xuICAgIH1cbiAgICBpZiAoaXNSZWYocmVzKSkge1xuICAgICAgY29uc3Qgc2hvdWxkVW53cmFwID0gIXRhcmdldElzQXJyYXkgfHwgIWlzSW50ZWdlcktleShrZXkpO1xuICAgICAgcmV0dXJuIHNob3VsZFVud3JhcCA/IHJlcy52YWx1ZSA6IHJlcztcbiAgICB9XG4gICAgaWYgKGlzT2JqZWN0KHJlcykpIHtcbiAgICAgIHJldHVybiBpc1JlYWRvbmx5ID8gcmVhZG9ubHkocmVzKSA6IHJlYWN0aXZlMihyZXMpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzO1xuICB9O1xufVxudmFyIHNldDIgPSAvKiBAX19QVVJFX18gKi8gY3JlYXRlU2V0dGVyKCk7XG5mdW5jdGlvbiBjcmVhdGVTZXR0ZXIoc2hhbGxvdyA9IGZhbHNlKSB7XG4gIHJldHVybiBmdW5jdGlvbiBzZXQzKHRhcmdldCwga2V5LCB2YWx1ZSwgcmVjZWl2ZXIpIHtcbiAgICBsZXQgb2xkVmFsdWUgPSB0YXJnZXRba2V5XTtcbiAgICBpZiAoIXNoYWxsb3cpIHtcbiAgICAgIHZhbHVlID0gdG9SYXcodmFsdWUpO1xuICAgICAgb2xkVmFsdWUgPSB0b1JhdyhvbGRWYWx1ZSk7XG4gICAgICBpZiAoIWlzQXJyYXkodGFyZ2V0KSAmJiBpc1JlZihvbGRWYWx1ZSkgJiYgIWlzUmVmKHZhbHVlKSkge1xuICAgICAgICBvbGRWYWx1ZS52YWx1ZSA9IHZhbHVlO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgaGFkS2V5ID0gaXNBcnJheSh0YXJnZXQpICYmIGlzSW50ZWdlcktleShrZXkpID8gTnVtYmVyKGtleSkgPCB0YXJnZXQubGVuZ3RoIDogaGFzT3duKHRhcmdldCwga2V5KTtcbiAgICBjb25zdCByZXN1bHQgPSBSZWZsZWN0LnNldCh0YXJnZXQsIGtleSwgdmFsdWUsIHJlY2VpdmVyKTtcbiAgICBpZiAodGFyZ2V0ID09PSB0b1JhdyhyZWNlaXZlcikpIHtcbiAgICAgIGlmICghaGFkS2V5KSB7XG4gICAgICAgIHRyaWdnZXIodGFyZ2V0LCBcImFkZFwiLCBrZXksIHZhbHVlKTtcbiAgICAgIH0gZWxzZSBpZiAoaGFzQ2hhbmdlZCh2YWx1ZSwgb2xkVmFsdWUpKSB7XG4gICAgICAgIHRyaWdnZXIodGFyZ2V0LCBcInNldFwiLCBrZXksIHZhbHVlLCBvbGRWYWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG59XG5mdW5jdGlvbiBkZWxldGVQcm9wZXJ0eSh0YXJnZXQsIGtleSkge1xuICBjb25zdCBoYWRLZXkgPSBoYXNPd24odGFyZ2V0LCBrZXkpO1xuICBjb25zdCBvbGRWYWx1ZSA9IHRhcmdldFtrZXldO1xuICBjb25zdCByZXN1bHQgPSBSZWZsZWN0LmRlbGV0ZVByb3BlcnR5KHRhcmdldCwga2V5KTtcbiAgaWYgKHJlc3VsdCAmJiBoYWRLZXkpIHtcbiAgICB0cmlnZ2VyKHRhcmdldCwgXCJkZWxldGVcIiwga2V5LCB2b2lkIDAsIG9sZFZhbHVlKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gaGFzKHRhcmdldCwga2V5KSB7XG4gIGNvbnN0IHJlc3VsdCA9IFJlZmxlY3QuaGFzKHRhcmdldCwga2V5KTtcbiAgaWYgKCFpc1N5bWJvbChrZXkpIHx8ICFidWlsdEluU3ltYm9scy5oYXMoa2V5KSkge1xuICAgIHRyYWNrKHRhcmdldCwgXCJoYXNcIiwga2V5KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gb3duS2V5cyh0YXJnZXQpIHtcbiAgdHJhY2sodGFyZ2V0LCBcIml0ZXJhdGVcIiwgaXNBcnJheSh0YXJnZXQpID8gXCJsZW5ndGhcIiA6IElURVJBVEVfS0VZKTtcbiAgcmV0dXJuIFJlZmxlY3Qub3duS2V5cyh0YXJnZXQpO1xufVxudmFyIG11dGFibGVIYW5kbGVycyA9IHtcbiAgZ2V0OiBnZXQyLFxuICBzZXQ6IHNldDIsXG4gIGRlbGV0ZVByb3BlcnR5LFxuICBoYXMsXG4gIG93bktleXNcbn07XG52YXIgcmVhZG9ubHlIYW5kbGVycyA9IHtcbiAgZ2V0OiByZWFkb25seUdldCxcbiAgc2V0KHRhcmdldCwga2V5KSB7XG4gICAgaWYgKHRydWUpIHtcbiAgICAgIGNvbnNvbGUud2FybihgU2V0IG9wZXJhdGlvbiBvbiBrZXkgXCIke1N0cmluZyhrZXkpfVwiIGZhaWxlZDogdGFyZ2V0IGlzIHJlYWRvbmx5LmAsIHRhcmdldCk7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9LFxuICBkZWxldGVQcm9wZXJ0eSh0YXJnZXQsIGtleSkge1xuICAgIGlmICh0cnVlKSB7XG4gICAgICBjb25zb2xlLndhcm4oYERlbGV0ZSBvcGVyYXRpb24gb24ga2V5IFwiJHtTdHJpbmcoa2V5KX1cIiBmYWlsZWQ6IHRhcmdldCBpcyByZWFkb25seS5gLCB0YXJnZXQpO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcbnZhciB0b1JlYWN0aXZlID0gKHZhbHVlKSA9PiBpc09iamVjdCh2YWx1ZSkgPyByZWFjdGl2ZTIodmFsdWUpIDogdmFsdWU7XG52YXIgdG9SZWFkb25seSA9ICh2YWx1ZSkgPT4gaXNPYmplY3QodmFsdWUpID8gcmVhZG9ubHkodmFsdWUpIDogdmFsdWU7XG52YXIgdG9TaGFsbG93ID0gKHZhbHVlKSA9PiB2YWx1ZTtcbnZhciBnZXRQcm90byA9ICh2KSA9PiBSZWZsZWN0LmdldFByb3RvdHlwZU9mKHYpO1xuZnVuY3Rpb24gZ2V0JDEodGFyZ2V0LCBrZXksIGlzUmVhZG9ubHkgPSBmYWxzZSwgaXNTaGFsbG93ID0gZmFsc2UpIHtcbiAgdGFyZ2V0ID0gdGFyZ2V0W1xuICAgIFwiX192X3Jhd1wiXG4gICAgLyogUkFXICovXG4gIF07XG4gIGNvbnN0IHJhd1RhcmdldCA9IHRvUmF3KHRhcmdldCk7XG4gIGNvbnN0IHJhd0tleSA9IHRvUmF3KGtleSk7XG4gIGlmIChrZXkgIT09IHJhd0tleSkge1xuICAgICFpc1JlYWRvbmx5ICYmIHRyYWNrKHJhd1RhcmdldCwgXCJnZXRcIiwga2V5KTtcbiAgfVxuICAhaXNSZWFkb25seSAmJiB0cmFjayhyYXdUYXJnZXQsIFwiZ2V0XCIsIHJhd0tleSk7XG4gIGNvbnN0IHsgaGFzOiBoYXMyIH0gPSBnZXRQcm90byhyYXdUYXJnZXQpO1xuICBjb25zdCB3cmFwID0gaXNTaGFsbG93ID8gdG9TaGFsbG93IDogaXNSZWFkb25seSA/IHRvUmVhZG9ubHkgOiB0b1JlYWN0aXZlO1xuICBpZiAoaGFzMi5jYWxsKHJhd1RhcmdldCwga2V5KSkge1xuICAgIHJldHVybiB3cmFwKHRhcmdldC5nZXQoa2V5KSk7XG4gIH0gZWxzZSBpZiAoaGFzMi5jYWxsKHJhd1RhcmdldCwgcmF3S2V5KSkge1xuICAgIHJldHVybiB3cmFwKHRhcmdldC5nZXQocmF3S2V5KSk7XG4gIH0gZWxzZSBpZiAodGFyZ2V0ICE9PSByYXdUYXJnZXQpIHtcbiAgICB0YXJnZXQuZ2V0KGtleSk7XG4gIH1cbn1cbmZ1bmN0aW9uIGhhcyQxKGtleSwgaXNSZWFkb25seSA9IGZhbHNlKSB7XG4gIGNvbnN0IHRhcmdldCA9IHRoaXNbXG4gICAgXCJfX3ZfcmF3XCJcbiAgICAvKiBSQVcgKi9cbiAgXTtcbiAgY29uc3QgcmF3VGFyZ2V0ID0gdG9SYXcodGFyZ2V0KTtcbiAgY29uc3QgcmF3S2V5ID0gdG9SYXcoa2V5KTtcbiAgaWYgKGtleSAhPT0gcmF3S2V5KSB7XG4gICAgIWlzUmVhZG9ubHkgJiYgdHJhY2socmF3VGFyZ2V0LCBcImhhc1wiLCBrZXkpO1xuICB9XG4gICFpc1JlYWRvbmx5ICYmIHRyYWNrKHJhd1RhcmdldCwgXCJoYXNcIiwgcmF3S2V5KTtcbiAgcmV0dXJuIGtleSA9PT0gcmF3S2V5ID8gdGFyZ2V0LmhhcyhrZXkpIDogdGFyZ2V0LmhhcyhrZXkpIHx8IHRhcmdldC5oYXMocmF3S2V5KTtcbn1cbmZ1bmN0aW9uIHNpemUodGFyZ2V0LCBpc1JlYWRvbmx5ID0gZmFsc2UpIHtcbiAgdGFyZ2V0ID0gdGFyZ2V0W1xuICAgIFwiX192X3Jhd1wiXG4gICAgLyogUkFXICovXG4gIF07XG4gICFpc1JlYWRvbmx5ICYmIHRyYWNrKHRvUmF3KHRhcmdldCksIFwiaXRlcmF0ZVwiLCBJVEVSQVRFX0tFWSk7XG4gIHJldHVybiBSZWZsZWN0LmdldCh0YXJnZXQsIFwic2l6ZVwiLCB0YXJnZXQpO1xufVxuZnVuY3Rpb24gYWRkKHZhbHVlKSB7XG4gIHZhbHVlID0gdG9SYXcodmFsdWUpO1xuICBjb25zdCB0YXJnZXQgPSB0b1Jhdyh0aGlzKTtcbiAgY29uc3QgcHJvdG8gPSBnZXRQcm90byh0YXJnZXQpO1xuICBjb25zdCBoYWRLZXkgPSBwcm90by5oYXMuY2FsbCh0YXJnZXQsIHZhbHVlKTtcbiAgaWYgKCFoYWRLZXkpIHtcbiAgICB0YXJnZXQuYWRkKHZhbHVlKTtcbiAgICB0cmlnZ2VyKHRhcmdldCwgXCJhZGRcIiwgdmFsdWUsIHZhbHVlKTtcbiAgfVxuICByZXR1cm4gdGhpcztcbn1cbmZ1bmN0aW9uIHNldCQxKGtleSwgdmFsdWUpIHtcbiAgdmFsdWUgPSB0b1Jhdyh2YWx1ZSk7XG4gIGNvbnN0IHRhcmdldCA9IHRvUmF3KHRoaXMpO1xuICBjb25zdCB7IGhhczogaGFzMiwgZ2V0OiBnZXQzIH0gPSBnZXRQcm90byh0YXJnZXQpO1xuICBsZXQgaGFkS2V5ID0gaGFzMi5jYWxsKHRhcmdldCwga2V5KTtcbiAgaWYgKCFoYWRLZXkpIHtcbiAgICBrZXkgPSB0b1JhdyhrZXkpO1xuICAgIGhhZEtleSA9IGhhczIuY2FsbCh0YXJnZXQsIGtleSk7XG4gIH0gZWxzZSBpZiAodHJ1ZSkge1xuICAgIGNoZWNrSWRlbnRpdHlLZXlzKHRhcmdldCwgaGFzMiwga2V5KTtcbiAgfVxuICBjb25zdCBvbGRWYWx1ZSA9IGdldDMuY2FsbCh0YXJnZXQsIGtleSk7XG4gIHRhcmdldC5zZXQoa2V5LCB2YWx1ZSk7XG4gIGlmICghaGFkS2V5KSB7XG4gICAgdHJpZ2dlcih0YXJnZXQsIFwiYWRkXCIsIGtleSwgdmFsdWUpO1xuICB9IGVsc2UgaWYgKGhhc0NoYW5nZWQodmFsdWUsIG9sZFZhbHVlKSkge1xuICAgIHRyaWdnZXIodGFyZ2V0LCBcInNldFwiLCBrZXksIHZhbHVlLCBvbGRWYWx1ZSk7XG4gIH1cbiAgcmV0dXJuIHRoaXM7XG59XG5mdW5jdGlvbiBkZWxldGVFbnRyeShrZXkpIHtcbiAgY29uc3QgdGFyZ2V0ID0gdG9SYXcodGhpcyk7XG4gIGNvbnN0IHsgaGFzOiBoYXMyLCBnZXQ6IGdldDMgfSA9IGdldFByb3RvKHRhcmdldCk7XG4gIGxldCBoYWRLZXkgPSBoYXMyLmNhbGwodGFyZ2V0LCBrZXkpO1xuICBpZiAoIWhhZEtleSkge1xuICAgIGtleSA9IHRvUmF3KGtleSk7XG4gICAgaGFkS2V5ID0gaGFzMi5jYWxsKHRhcmdldCwga2V5KTtcbiAgfSBlbHNlIGlmICh0cnVlKSB7XG4gICAgY2hlY2tJZGVudGl0eUtleXModGFyZ2V0LCBoYXMyLCBrZXkpO1xuICB9XG4gIGNvbnN0IG9sZFZhbHVlID0gZ2V0MyA/IGdldDMuY2FsbCh0YXJnZXQsIGtleSkgOiB2b2lkIDA7XG4gIGNvbnN0IHJlc3VsdCA9IHRhcmdldC5kZWxldGUoa2V5KTtcbiAgaWYgKGhhZEtleSkge1xuICAgIHRyaWdnZXIodGFyZ2V0LCBcImRlbGV0ZVwiLCBrZXksIHZvaWQgMCwgb2xkVmFsdWUpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBjbGVhcigpIHtcbiAgY29uc3QgdGFyZ2V0ID0gdG9SYXcodGhpcyk7XG4gIGNvbnN0IGhhZEl0ZW1zID0gdGFyZ2V0LnNpemUgIT09IDA7XG4gIGNvbnN0IG9sZFRhcmdldCA9IHRydWUgPyBpc01hcCh0YXJnZXQpID8gbmV3IE1hcCh0YXJnZXQpIDogbmV3IFNldCh0YXJnZXQpIDogdm9pZCAwO1xuICBjb25zdCByZXN1bHQgPSB0YXJnZXQuY2xlYXIoKTtcbiAgaWYgKGhhZEl0ZW1zKSB7XG4gICAgdHJpZ2dlcih0YXJnZXQsIFwiY2xlYXJcIiwgdm9pZCAwLCB2b2lkIDAsIG9sZFRhcmdldCk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIGNyZWF0ZUZvckVhY2goaXNSZWFkb25seSwgaXNTaGFsbG93KSB7XG4gIHJldHVybiBmdW5jdGlvbiBmb3JFYWNoKGNhbGxiYWNrLCB0aGlzQXJnKSB7XG4gICAgY29uc3Qgb2JzZXJ2ZWQgPSB0aGlzO1xuICAgIGNvbnN0IHRhcmdldCA9IG9ic2VydmVkW1xuICAgICAgXCJfX3ZfcmF3XCJcbiAgICAgIC8qIFJBVyAqL1xuICAgIF07XG4gICAgY29uc3QgcmF3VGFyZ2V0ID0gdG9SYXcodGFyZ2V0KTtcbiAgICBjb25zdCB3cmFwID0gaXNTaGFsbG93ID8gdG9TaGFsbG93IDogaXNSZWFkb25seSA/IHRvUmVhZG9ubHkgOiB0b1JlYWN0aXZlO1xuICAgICFpc1JlYWRvbmx5ICYmIHRyYWNrKHJhd1RhcmdldCwgXCJpdGVyYXRlXCIsIElURVJBVEVfS0VZKTtcbiAgICByZXR1cm4gdGFyZ2V0LmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHtcbiAgICAgIHJldHVybiBjYWxsYmFjay5jYWxsKHRoaXNBcmcsIHdyYXAodmFsdWUpLCB3cmFwKGtleSksIG9ic2VydmVkKTtcbiAgICB9KTtcbiAgfTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZUl0ZXJhYmxlTWV0aG9kKG1ldGhvZCwgaXNSZWFkb25seSwgaXNTaGFsbG93KSB7XG4gIHJldHVybiBmdW5jdGlvbiguLi5hcmdzKSB7XG4gICAgY29uc3QgdGFyZ2V0ID0gdGhpc1tcbiAgICAgIFwiX192X3Jhd1wiXG4gICAgICAvKiBSQVcgKi9cbiAgICBdO1xuICAgIGNvbnN0IHJhd1RhcmdldCA9IHRvUmF3KHRhcmdldCk7XG4gICAgY29uc3QgdGFyZ2V0SXNNYXAgPSBpc01hcChyYXdUYXJnZXQpO1xuICAgIGNvbnN0IGlzUGFpciA9IG1ldGhvZCA9PT0gXCJlbnRyaWVzXCIgfHwgbWV0aG9kID09PSBTeW1ib2wuaXRlcmF0b3IgJiYgdGFyZ2V0SXNNYXA7XG4gICAgY29uc3QgaXNLZXlPbmx5ID0gbWV0aG9kID09PSBcImtleXNcIiAmJiB0YXJnZXRJc01hcDtcbiAgICBjb25zdCBpbm5lckl0ZXJhdG9yID0gdGFyZ2V0W21ldGhvZF0oLi4uYXJncyk7XG4gICAgY29uc3Qgd3JhcCA9IGlzU2hhbGxvdyA/IHRvU2hhbGxvdyA6IGlzUmVhZG9ubHkgPyB0b1JlYWRvbmx5IDogdG9SZWFjdGl2ZTtcbiAgICAhaXNSZWFkb25seSAmJiB0cmFjayhyYXdUYXJnZXQsIFwiaXRlcmF0ZVwiLCBpc0tleU9ubHkgPyBNQVBfS0VZX0lURVJBVEVfS0VZIDogSVRFUkFURV9LRVkpO1xuICAgIHJldHVybiB7XG4gICAgICAvLyBpdGVyYXRvciBwcm90b2NvbFxuICAgICAgbmV4dCgpIHtcbiAgICAgICAgY29uc3QgeyB2YWx1ZSwgZG9uZSB9ID0gaW5uZXJJdGVyYXRvci5uZXh0KCk7XG4gICAgICAgIHJldHVybiBkb25lID8geyB2YWx1ZSwgZG9uZSB9IDoge1xuICAgICAgICAgIHZhbHVlOiBpc1BhaXIgPyBbd3JhcCh2YWx1ZVswXSksIHdyYXAodmFsdWVbMV0pXSA6IHdyYXAodmFsdWUpLFxuICAgICAgICAgIGRvbmVcbiAgICAgICAgfTtcbiAgICAgIH0sXG4gICAgICAvLyBpdGVyYWJsZSBwcm90b2NvbFxuICAgICAgW1N5bWJvbC5pdGVyYXRvcl0oKSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuICAgIH07XG4gIH07XG59XG5mdW5jdGlvbiBjcmVhdGVSZWFkb25seU1ldGhvZCh0eXBlKSB7XG4gIHJldHVybiBmdW5jdGlvbiguLi5hcmdzKSB7XG4gICAgaWYgKHRydWUpIHtcbiAgICAgIGNvbnN0IGtleSA9IGFyZ3NbMF0gPyBgb24ga2V5IFwiJHthcmdzWzBdfVwiIGAgOiBgYDtcbiAgICAgIGNvbnNvbGUud2FybihgJHtjYXBpdGFsaXplKHR5cGUpfSBvcGVyYXRpb24gJHtrZXl9ZmFpbGVkOiB0YXJnZXQgaXMgcmVhZG9ubHkuYCwgdG9SYXcodGhpcykpO1xuICAgIH1cbiAgICByZXR1cm4gdHlwZSA9PT0gXCJkZWxldGVcIiA/IGZhbHNlIDogdGhpcztcbiAgfTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZUluc3RydW1lbnRhdGlvbnMoKSB7XG4gIGNvbnN0IG11dGFibGVJbnN0cnVtZW50YXRpb25zMiA9IHtcbiAgICBnZXQoa2V5KSB7XG4gICAgICByZXR1cm4gZ2V0JDEodGhpcywga2V5KTtcbiAgICB9LFxuICAgIGdldCBzaXplKCkge1xuICAgICAgcmV0dXJuIHNpemUodGhpcyk7XG4gICAgfSxcbiAgICBoYXM6IGhhcyQxLFxuICAgIGFkZCxcbiAgICBzZXQ6IHNldCQxLFxuICAgIGRlbGV0ZTogZGVsZXRlRW50cnksXG4gICAgY2xlYXIsXG4gICAgZm9yRWFjaDogY3JlYXRlRm9yRWFjaChmYWxzZSwgZmFsc2UpXG4gIH07XG4gIGNvbnN0IHNoYWxsb3dJbnN0cnVtZW50YXRpb25zMiA9IHtcbiAgICBnZXQoa2V5KSB7XG4gICAgICByZXR1cm4gZ2V0JDEodGhpcywga2V5LCBmYWxzZSwgdHJ1ZSk7XG4gICAgfSxcbiAgICBnZXQgc2l6ZSgpIHtcbiAgICAgIHJldHVybiBzaXplKHRoaXMpO1xuICAgIH0sXG4gICAgaGFzOiBoYXMkMSxcbiAgICBhZGQsXG4gICAgc2V0OiBzZXQkMSxcbiAgICBkZWxldGU6IGRlbGV0ZUVudHJ5LFxuICAgIGNsZWFyLFxuICAgIGZvckVhY2g6IGNyZWF0ZUZvckVhY2goZmFsc2UsIHRydWUpXG4gIH07XG4gIGNvbnN0IHJlYWRvbmx5SW5zdHJ1bWVudGF0aW9uczIgPSB7XG4gICAgZ2V0KGtleSkge1xuICAgICAgcmV0dXJuIGdldCQxKHRoaXMsIGtleSwgdHJ1ZSk7XG4gICAgfSxcbiAgICBnZXQgc2l6ZSgpIHtcbiAgICAgIHJldHVybiBzaXplKHRoaXMsIHRydWUpO1xuICAgIH0sXG4gICAgaGFzKGtleSkge1xuICAgICAgcmV0dXJuIGhhcyQxLmNhbGwodGhpcywga2V5LCB0cnVlKTtcbiAgICB9LFxuICAgIGFkZDogY3JlYXRlUmVhZG9ubHlNZXRob2QoXG4gICAgICBcImFkZFwiXG4gICAgICAvKiBBREQgKi9cbiAgICApLFxuICAgIHNldDogY3JlYXRlUmVhZG9ubHlNZXRob2QoXG4gICAgICBcInNldFwiXG4gICAgICAvKiBTRVQgKi9cbiAgICApLFxuICAgIGRlbGV0ZTogY3JlYXRlUmVhZG9ubHlNZXRob2QoXG4gICAgICBcImRlbGV0ZVwiXG4gICAgICAvKiBERUxFVEUgKi9cbiAgICApLFxuICAgIGNsZWFyOiBjcmVhdGVSZWFkb25seU1ldGhvZChcbiAgICAgIFwiY2xlYXJcIlxuICAgICAgLyogQ0xFQVIgKi9cbiAgICApLFxuICAgIGZvckVhY2g6IGNyZWF0ZUZvckVhY2godHJ1ZSwgZmFsc2UpXG4gIH07XG4gIGNvbnN0IHNoYWxsb3dSZWFkb25seUluc3RydW1lbnRhdGlvbnMyID0ge1xuICAgIGdldChrZXkpIHtcbiAgICAgIHJldHVybiBnZXQkMSh0aGlzLCBrZXksIHRydWUsIHRydWUpO1xuICAgIH0sXG4gICAgZ2V0IHNpemUoKSB7XG4gICAgICByZXR1cm4gc2l6ZSh0aGlzLCB0cnVlKTtcbiAgICB9LFxuICAgIGhhcyhrZXkpIHtcbiAgICAgIHJldHVybiBoYXMkMS5jYWxsKHRoaXMsIGtleSwgdHJ1ZSk7XG4gICAgfSxcbiAgICBhZGQ6IGNyZWF0ZVJlYWRvbmx5TWV0aG9kKFxuICAgICAgXCJhZGRcIlxuICAgICAgLyogQUREICovXG4gICAgKSxcbiAgICBzZXQ6IGNyZWF0ZVJlYWRvbmx5TWV0aG9kKFxuICAgICAgXCJzZXRcIlxuICAgICAgLyogU0VUICovXG4gICAgKSxcbiAgICBkZWxldGU6IGNyZWF0ZVJlYWRvbmx5TWV0aG9kKFxuICAgICAgXCJkZWxldGVcIlxuICAgICAgLyogREVMRVRFICovXG4gICAgKSxcbiAgICBjbGVhcjogY3JlYXRlUmVhZG9ubHlNZXRob2QoXG4gICAgICBcImNsZWFyXCJcbiAgICAgIC8qIENMRUFSICovXG4gICAgKSxcbiAgICBmb3JFYWNoOiBjcmVhdGVGb3JFYWNoKHRydWUsIHRydWUpXG4gIH07XG4gIGNvbnN0IGl0ZXJhdG9yTWV0aG9kcyA9IFtcImtleXNcIiwgXCJ2YWx1ZXNcIiwgXCJlbnRyaWVzXCIsIFN5bWJvbC5pdGVyYXRvcl07XG4gIGl0ZXJhdG9yTWV0aG9kcy5mb3JFYWNoKChtZXRob2QpID0+IHtcbiAgICBtdXRhYmxlSW5zdHJ1bWVudGF0aW9uczJbbWV0aG9kXSA9IGNyZWF0ZUl0ZXJhYmxlTWV0aG9kKG1ldGhvZCwgZmFsc2UsIGZhbHNlKTtcbiAgICByZWFkb25seUluc3RydW1lbnRhdGlvbnMyW21ldGhvZF0gPSBjcmVhdGVJdGVyYWJsZU1ldGhvZChtZXRob2QsIHRydWUsIGZhbHNlKTtcbiAgICBzaGFsbG93SW5zdHJ1bWVudGF0aW9uczJbbWV0aG9kXSA9IGNyZWF0ZUl0ZXJhYmxlTWV0aG9kKG1ldGhvZCwgZmFsc2UsIHRydWUpO1xuICAgIHNoYWxsb3dSZWFkb25seUluc3RydW1lbnRhdGlvbnMyW21ldGhvZF0gPSBjcmVhdGVJdGVyYWJsZU1ldGhvZChtZXRob2QsIHRydWUsIHRydWUpO1xuICB9KTtcbiAgcmV0dXJuIFtcbiAgICBtdXRhYmxlSW5zdHJ1bWVudGF0aW9uczIsXG4gICAgcmVhZG9ubHlJbnN0cnVtZW50YXRpb25zMixcbiAgICBzaGFsbG93SW5zdHJ1bWVudGF0aW9uczIsXG4gICAgc2hhbGxvd1JlYWRvbmx5SW5zdHJ1bWVudGF0aW9uczJcbiAgXTtcbn1cbnZhciBbbXV0YWJsZUluc3RydW1lbnRhdGlvbnMsIHJlYWRvbmx5SW5zdHJ1bWVudGF0aW9ucywgc2hhbGxvd0luc3RydW1lbnRhdGlvbnMsIHNoYWxsb3dSZWFkb25seUluc3RydW1lbnRhdGlvbnNdID0gLyogQF9fUFVSRV9fICovIGNyZWF0ZUluc3RydW1lbnRhdGlvbnMoKTtcbmZ1bmN0aW9uIGNyZWF0ZUluc3RydW1lbnRhdGlvbkdldHRlcihpc1JlYWRvbmx5LCBzaGFsbG93KSB7XG4gIGNvbnN0IGluc3RydW1lbnRhdGlvbnMgPSBzaGFsbG93ID8gaXNSZWFkb25seSA/IHNoYWxsb3dSZWFkb25seUluc3RydW1lbnRhdGlvbnMgOiBzaGFsbG93SW5zdHJ1bWVudGF0aW9ucyA6IGlzUmVhZG9ubHkgPyByZWFkb25seUluc3RydW1lbnRhdGlvbnMgOiBtdXRhYmxlSW5zdHJ1bWVudGF0aW9ucztcbiAgcmV0dXJuICh0YXJnZXQsIGtleSwgcmVjZWl2ZXIpID0+IHtcbiAgICBpZiAoa2V5ID09PSBcIl9fdl9pc1JlYWN0aXZlXCIpIHtcbiAgICAgIHJldHVybiAhaXNSZWFkb25seTtcbiAgICB9IGVsc2UgaWYgKGtleSA9PT0gXCJfX3ZfaXNSZWFkb25seVwiKSB7XG4gICAgICByZXR1cm4gaXNSZWFkb25seTtcbiAgICB9IGVsc2UgaWYgKGtleSA9PT0gXCJfX3ZfcmF3XCIpIHtcbiAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfVxuICAgIHJldHVybiBSZWZsZWN0LmdldChoYXNPd24oaW5zdHJ1bWVudGF0aW9ucywga2V5KSAmJiBrZXkgaW4gdGFyZ2V0ID8gaW5zdHJ1bWVudGF0aW9ucyA6IHRhcmdldCwga2V5LCByZWNlaXZlcik7XG4gIH07XG59XG52YXIgbXV0YWJsZUNvbGxlY3Rpb25IYW5kbGVycyA9IHtcbiAgZ2V0OiAvKiBAX19QVVJFX18gKi8gY3JlYXRlSW5zdHJ1bWVudGF0aW9uR2V0dGVyKGZhbHNlLCBmYWxzZSlcbn07XG52YXIgcmVhZG9ubHlDb2xsZWN0aW9uSGFuZGxlcnMgPSB7XG4gIGdldDogLyogQF9fUFVSRV9fICovIGNyZWF0ZUluc3RydW1lbnRhdGlvbkdldHRlcih0cnVlLCBmYWxzZSlcbn07XG5mdW5jdGlvbiBjaGVja0lkZW50aXR5S2V5cyh0YXJnZXQsIGhhczIsIGtleSkge1xuICBjb25zdCByYXdLZXkgPSB0b1JhdyhrZXkpO1xuICBpZiAocmF3S2V5ICE9PSBrZXkgJiYgaGFzMi5jYWxsKHRhcmdldCwgcmF3S2V5KSkge1xuICAgIGNvbnN0IHR5cGUgPSB0b1Jhd1R5cGUodGFyZ2V0KTtcbiAgICBjb25zb2xlLndhcm4oYFJlYWN0aXZlICR7dHlwZX0gY29udGFpbnMgYm90aCB0aGUgcmF3IGFuZCByZWFjdGl2ZSB2ZXJzaW9ucyBvZiB0aGUgc2FtZSBvYmplY3Qke3R5cGUgPT09IGBNYXBgID8gYCBhcyBrZXlzYCA6IGBgfSwgd2hpY2ggY2FuIGxlYWQgdG8gaW5jb25zaXN0ZW5jaWVzLiBBdm9pZCBkaWZmZXJlbnRpYXRpbmcgYmV0d2VlbiB0aGUgcmF3IGFuZCByZWFjdGl2ZSB2ZXJzaW9ucyBvZiBhbiBvYmplY3QgYW5kIG9ubHkgdXNlIHRoZSByZWFjdGl2ZSB2ZXJzaW9uIGlmIHBvc3NpYmxlLmApO1xuICB9XG59XG52YXIgcmVhY3RpdmVNYXAgPSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcbnZhciBzaGFsbG93UmVhY3RpdmVNYXAgPSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcbnZhciByZWFkb25seU1hcCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xudmFyIHNoYWxsb3dSZWFkb25seU1hcCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xuZnVuY3Rpb24gdGFyZ2V0VHlwZU1hcChyYXdUeXBlKSB7XG4gIHN3aXRjaCAocmF3VHlwZSkge1xuICAgIGNhc2UgXCJPYmplY3RcIjpcbiAgICBjYXNlIFwiQXJyYXlcIjpcbiAgICAgIHJldHVybiAxO1xuICAgIGNhc2UgXCJNYXBcIjpcbiAgICBjYXNlIFwiU2V0XCI6XG4gICAgY2FzZSBcIldlYWtNYXBcIjpcbiAgICBjYXNlIFwiV2Vha1NldFwiOlxuICAgICAgcmV0dXJuIDI7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiAwO1xuICB9XG59XG5mdW5jdGlvbiBnZXRUYXJnZXRUeXBlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZVtcbiAgICBcIl9fdl9za2lwXCJcbiAgICAvKiBTS0lQICovXG4gIF0gfHwgIU9iamVjdC5pc0V4dGVuc2libGUodmFsdWUpID8gMCA6IHRhcmdldFR5cGVNYXAodG9SYXdUeXBlKHZhbHVlKSk7XG59XG5mdW5jdGlvbiByZWFjdGl2ZTIodGFyZ2V0KSB7XG4gIGlmICh0YXJnZXQgJiYgdGFyZ2V0W1xuICAgIFwiX192X2lzUmVhZG9ubHlcIlxuICAgIC8qIElTX1JFQURPTkxZICovXG4gIF0pIHtcbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9XG4gIHJldHVybiBjcmVhdGVSZWFjdGl2ZU9iamVjdCh0YXJnZXQsIGZhbHNlLCBtdXRhYmxlSGFuZGxlcnMsIG11dGFibGVDb2xsZWN0aW9uSGFuZGxlcnMsIHJlYWN0aXZlTWFwKTtcbn1cbmZ1bmN0aW9uIHJlYWRvbmx5KHRhcmdldCkge1xuICByZXR1cm4gY3JlYXRlUmVhY3RpdmVPYmplY3QodGFyZ2V0LCB0cnVlLCByZWFkb25seUhhbmRsZXJzLCByZWFkb25seUNvbGxlY3Rpb25IYW5kbGVycywgcmVhZG9ubHlNYXApO1xufVxuZnVuY3Rpb24gY3JlYXRlUmVhY3RpdmVPYmplY3QodGFyZ2V0LCBpc1JlYWRvbmx5LCBiYXNlSGFuZGxlcnMsIGNvbGxlY3Rpb25IYW5kbGVycywgcHJveHlNYXApIHtcbiAgaWYgKCFpc09iamVjdCh0YXJnZXQpKSB7XG4gICAgaWYgKHRydWUpIHtcbiAgICAgIGNvbnNvbGUud2FybihgdmFsdWUgY2Fubm90IGJlIG1hZGUgcmVhY3RpdmU6ICR7U3RyaW5nKHRhcmdldCl9YCk7XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH1cbiAgaWYgKHRhcmdldFtcbiAgICBcIl9fdl9yYXdcIlxuICAgIC8qIFJBVyAqL1xuICBdICYmICEoaXNSZWFkb25seSAmJiB0YXJnZXRbXG4gICAgXCJfX3ZfaXNSZWFjdGl2ZVwiXG4gICAgLyogSVNfUkVBQ1RJVkUgKi9cbiAgXSkpIHtcbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9XG4gIGNvbnN0IGV4aXN0aW5nUHJveHkgPSBwcm94eU1hcC5nZXQodGFyZ2V0KTtcbiAgaWYgKGV4aXN0aW5nUHJveHkpIHtcbiAgICByZXR1cm4gZXhpc3RpbmdQcm94eTtcbiAgfVxuICBjb25zdCB0YXJnZXRUeXBlID0gZ2V0VGFyZ2V0VHlwZSh0YXJnZXQpO1xuICBpZiAodGFyZ2V0VHlwZSA9PT0gMCkge1xuICAgIHJldHVybiB0YXJnZXQ7XG4gIH1cbiAgY29uc3QgcHJveHkgPSBuZXcgUHJveHkodGFyZ2V0LCB0YXJnZXRUeXBlID09PSAyID8gY29sbGVjdGlvbkhhbmRsZXJzIDogYmFzZUhhbmRsZXJzKTtcbiAgcHJveHlNYXAuc2V0KHRhcmdldCwgcHJveHkpO1xuICByZXR1cm4gcHJveHk7XG59XG5mdW5jdGlvbiB0b1JhdyhvYnNlcnZlZCkge1xuICByZXR1cm4gb2JzZXJ2ZWQgJiYgdG9SYXcob2JzZXJ2ZWRbXG4gICAgXCJfX3ZfcmF3XCJcbiAgICAvKiBSQVcgKi9cbiAgXSkgfHwgb2JzZXJ2ZWQ7XG59XG5mdW5jdGlvbiBpc1JlZihyKSB7XG4gIHJldHVybiBCb29sZWFuKHIgJiYgci5fX3ZfaXNSZWYgPT09IHRydWUpO1xufVxuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvbWFnaWNzLyRuZXh0VGljay5qc1xubWFnaWMoXCJuZXh0VGlja1wiLCAoKSA9PiBuZXh0VGljayk7XG5cbi8vIHBhY2thZ2VzL2FscGluZWpzL3NyYy9tYWdpY3MvJGRpc3BhdGNoLmpzXG5tYWdpYyhcImRpc3BhdGNoXCIsIChlbCkgPT4gZGlzcGF0Y2guYmluZChkaXNwYXRjaCwgZWwpKTtcblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL21hZ2ljcy8kd2F0Y2guanNcbm1hZ2ljKFwid2F0Y2hcIiwgKGVsLCB7IGV2YWx1YXRlTGF0ZXI6IGV2YWx1YXRlTGF0ZXIyLCBlZmZlY3Q6IGVmZmVjdDMgfSkgPT4gKGtleSwgY2FsbGJhY2spID0+IHtcbiAgbGV0IGV2YWx1YXRlMiA9IGV2YWx1YXRlTGF0ZXIyKGtleSk7XG4gIGxldCBmaXJzdFRpbWUgPSB0cnVlO1xuICBsZXQgb2xkVmFsdWU7XG4gIGxldCBlZmZlY3RSZWZlcmVuY2UgPSBlZmZlY3QzKCgpID0+IGV2YWx1YXRlMigodmFsdWUpID0+IHtcbiAgICBKU09OLnN0cmluZ2lmeSh2YWx1ZSk7XG4gICAgaWYgKCFmaXJzdFRpbWUpIHtcbiAgICAgIHF1ZXVlTWljcm90YXNrKCgpID0+IHtcbiAgICAgICAgY2FsbGJhY2sodmFsdWUsIG9sZFZhbHVlKTtcbiAgICAgICAgb2xkVmFsdWUgPSB2YWx1ZTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBvbGRWYWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgICBmaXJzdFRpbWUgPSBmYWxzZTtcbiAgfSkpO1xuICBlbC5feF9lZmZlY3RzLmRlbGV0ZShlZmZlY3RSZWZlcmVuY2UpO1xufSk7XG5cbi8vIHBhY2thZ2VzL2FscGluZWpzL3NyYy9tYWdpY3MvJHN0b3JlLmpzXG5tYWdpYyhcInN0b3JlXCIsIGdldFN0b3Jlcyk7XG5cbi8vIHBhY2thZ2VzL2FscGluZWpzL3NyYy9tYWdpY3MvJGRhdGEuanNcbm1hZ2ljKFwiZGF0YVwiLCAoZWwpID0+IHNjb3BlKGVsKSk7XG5cbi8vIHBhY2thZ2VzL2FscGluZWpzL3NyYy9tYWdpY3MvJHJvb3QuanNcbm1hZ2ljKFwicm9vdFwiLCAoZWwpID0+IGNsb3Nlc3RSb290KGVsKSk7XG5cbi8vIHBhY2thZ2VzL2FscGluZWpzL3NyYy9tYWdpY3MvJHJlZnMuanNcbm1hZ2ljKFwicmVmc1wiLCAoZWwpID0+IHtcbiAgaWYgKGVsLl94X3JlZnNfcHJveHkpXG4gICAgcmV0dXJuIGVsLl94X3JlZnNfcHJveHk7XG4gIGVsLl94X3JlZnNfcHJveHkgPSBtZXJnZVByb3hpZXMoZ2V0QXJyYXlPZlJlZk9iamVjdChlbCkpO1xuICByZXR1cm4gZWwuX3hfcmVmc19wcm94eTtcbn0pO1xuZnVuY3Rpb24gZ2V0QXJyYXlPZlJlZk9iamVjdChlbCkge1xuICBsZXQgcmVmT2JqZWN0cyA9IFtdO1xuICBsZXQgY3VycmVudEVsID0gZWw7XG4gIHdoaWxlIChjdXJyZW50RWwpIHtcbiAgICBpZiAoY3VycmVudEVsLl94X3JlZnMpXG4gICAgICByZWZPYmplY3RzLnB1c2goY3VycmVudEVsLl94X3JlZnMpO1xuICAgIGN1cnJlbnRFbCA9IGN1cnJlbnRFbC5wYXJlbnROb2RlO1xuICB9XG4gIHJldHVybiByZWZPYmplY3RzO1xufVxuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvaWRzLmpzXG52YXIgZ2xvYmFsSWRNZW1vID0ge307XG5mdW5jdGlvbiBmaW5kQW5kSW5jcmVtZW50SWQobmFtZSkge1xuICBpZiAoIWdsb2JhbElkTWVtb1tuYW1lXSlcbiAgICBnbG9iYWxJZE1lbW9bbmFtZV0gPSAwO1xuICByZXR1cm4gKytnbG9iYWxJZE1lbW9bbmFtZV07XG59XG5mdW5jdGlvbiBjbG9zZXN0SWRSb290KGVsLCBuYW1lKSB7XG4gIHJldHVybiBmaW5kQ2xvc2VzdChlbCwgKGVsZW1lbnQpID0+IHtcbiAgICBpZiAoZWxlbWVudC5feF9pZHMgJiYgZWxlbWVudC5feF9pZHNbbmFtZV0pXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgfSk7XG59XG5mdW5jdGlvbiBzZXRJZFJvb3QoZWwsIG5hbWUpIHtcbiAgaWYgKCFlbC5feF9pZHMpXG4gICAgZWwuX3hfaWRzID0ge307XG4gIGlmICghZWwuX3hfaWRzW25hbWVdKVxuICAgIGVsLl94X2lkc1tuYW1lXSA9IGZpbmRBbmRJbmNyZW1lbnRJZChuYW1lKTtcbn1cblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL21hZ2ljcy8kaWQuanNcbm1hZ2ljKFwiaWRcIiwgKGVsKSA9PiAobmFtZSwga2V5ID0gbnVsbCkgPT4ge1xuICBsZXQgcm9vdCA9IGNsb3Nlc3RJZFJvb3QoZWwsIG5hbWUpO1xuICBsZXQgaWQgPSByb290ID8gcm9vdC5feF9pZHNbbmFtZV0gOiBmaW5kQW5kSW5jcmVtZW50SWQobmFtZSk7XG4gIHJldHVybiBrZXkgPyBgJHtuYW1lfS0ke2lkfS0ke2tleX1gIDogYCR7bmFtZX0tJHtpZH1gO1xufSk7XG5cbi8vIHBhY2thZ2VzL2FscGluZWpzL3NyYy9tYWdpY3MvJGVsLmpzXG5tYWdpYyhcImVsXCIsIChlbCkgPT4gZWwpO1xuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvbWFnaWNzL2luZGV4LmpzXG53YXJuTWlzc2luZ1BsdWdpbk1hZ2ljKFwiRm9jdXNcIiwgXCJmb2N1c1wiLCBcImZvY3VzXCIpO1xud2Fybk1pc3NpbmdQbHVnaW5NYWdpYyhcIlBlcnNpc3RcIiwgXCJwZXJzaXN0XCIsIFwicGVyc2lzdFwiKTtcbmZ1bmN0aW9uIHdhcm5NaXNzaW5nUGx1Z2luTWFnaWMobmFtZSwgbWFnaWNOYW1lLCBzbHVnKSB7XG4gIG1hZ2ljKG1hZ2ljTmFtZSwgKGVsKSA9PiB3YXJuKGBZb3UgY2FuJ3QgdXNlIFskJHttYWdpY05hbWV9XSB3aXRob3V0IGZpcnN0IGluc3RhbGxpbmcgdGhlIFwiJHtuYW1lfVwiIHBsdWdpbiBoZXJlOiBodHRwczovL2FscGluZWpzLmRldi9wbHVnaW5zLyR7c2x1Z31gLCBlbCkpO1xufVxuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvZGlyZWN0aXZlcy94LW1vZGVsYWJsZS5qc1xuZGlyZWN0aXZlKFwibW9kZWxhYmxlXCIsIChlbCwgeyBleHByZXNzaW9uIH0sIHsgZWZmZWN0OiBlZmZlY3QzLCBldmFsdWF0ZUxhdGVyOiBldmFsdWF0ZUxhdGVyMiwgY2xlYW51cDogY2xlYW51cDIgfSkgPT4ge1xuICBsZXQgZnVuYyA9IGV2YWx1YXRlTGF0ZXIyKGV4cHJlc3Npb24pO1xuICBsZXQgaW5uZXJHZXQgPSAoKSA9PiB7XG4gICAgbGV0IHJlc3VsdDtcbiAgICBmdW5jKChpKSA9PiByZXN1bHQgPSBpKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuICBsZXQgZXZhbHVhdGVJbm5lclNldCA9IGV2YWx1YXRlTGF0ZXIyKGAke2V4cHJlc3Npb259ID0gX19wbGFjZWhvbGRlcmApO1xuICBsZXQgaW5uZXJTZXQgPSAodmFsKSA9PiBldmFsdWF0ZUlubmVyU2V0KCgpID0+IHtcbiAgfSwgeyBzY29wZTogeyBcIl9fcGxhY2Vob2xkZXJcIjogdmFsIH0gfSk7XG4gIGxldCBpbml0aWFsVmFsdWUgPSBpbm5lckdldCgpO1xuICBpbm5lclNldChpbml0aWFsVmFsdWUpO1xuICBxdWV1ZU1pY3JvdGFzaygoKSA9PiB7XG4gICAgaWYgKCFlbC5feF9tb2RlbClcbiAgICAgIHJldHVybjtcbiAgICBlbC5feF9yZW1vdmVNb2RlbExpc3RlbmVyc1tcImRlZmF1bHRcIl0oKTtcbiAgICBsZXQgb3V0ZXJHZXQgPSBlbC5feF9tb2RlbC5nZXQ7XG4gICAgbGV0IG91dGVyU2V0ID0gZWwuX3hfbW9kZWwuc2V0O1xuICAgIGxldCByZWxlYXNlRW50YW5nbGVtZW50ID0gZW50YW5nbGUoXG4gICAgICB7XG4gICAgICAgIGdldCgpIHtcbiAgICAgICAgICByZXR1cm4gb3V0ZXJHZXQoKTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0KHZhbHVlKSB7XG4gICAgICAgICAgb3V0ZXJTZXQodmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgcmV0dXJuIGlubmVyR2V0KCk7XG4gICAgICAgIH0sXG4gICAgICAgIHNldCh2YWx1ZSkge1xuICAgICAgICAgIGlubmVyU2V0KHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICk7XG4gICAgY2xlYW51cDIocmVsZWFzZUVudGFuZ2xlbWVudCk7XG4gIH0pO1xufSk7XG5cbi8vIHBhY2thZ2VzL2FscGluZWpzL3NyYy9kaXJlY3RpdmVzL3gtdGVsZXBvcnQuanNcbmRpcmVjdGl2ZShcInRlbGVwb3J0XCIsIChlbCwgeyBtb2RpZmllcnMsIGV4cHJlc3Npb24gfSwgeyBjbGVhbnVwOiBjbGVhbnVwMiB9KSA9PiB7XG4gIGlmIChlbC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgIT09IFwidGVtcGxhdGVcIilcbiAgICB3YXJuKFwieC10ZWxlcG9ydCBjYW4gb25seSBiZSB1c2VkIG9uIGEgPHRlbXBsYXRlPiB0YWdcIiwgZWwpO1xuICBsZXQgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGV4cHJlc3Npb24pO1xuICBsZXQgY2xvbmUyID0gZWwuY29udGVudC5jbG9uZU5vZGUodHJ1ZSkuZmlyc3RFbGVtZW50Q2hpbGQ7XG4gIGVsLl94X3RlbGVwb3J0ID0gY2xvbmUyO1xuICBjbG9uZTIuX3hfdGVsZXBvcnRCYWNrID0gZWw7XG4gIGVsLnNldEF0dHJpYnV0ZShcImRhdGEtdGVsZXBvcnQtdGVtcGxhdGVcIiwgdHJ1ZSk7XG4gIGNsb25lMi5zZXRBdHRyaWJ1dGUoXCJkYXRhLXRlbGVwb3J0LXRhcmdldFwiLCB0cnVlKTtcbiAgaWYgKGVsLl94X2ZvcndhcmRFdmVudHMpIHtcbiAgICBlbC5feF9mb3J3YXJkRXZlbnRzLmZvckVhY2goKGV2ZW50TmFtZSkgPT4ge1xuICAgICAgY2xvbmUyLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCAoZSkgPT4ge1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBlbC5kaXNwYXRjaEV2ZW50KG5ldyBlLmNvbnN0cnVjdG9yKGUudHlwZSwgZSkpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbiAgYWRkU2NvcGVUb05vZGUoY2xvbmUyLCB7fSwgZWwpO1xuICBsZXQgcGxhY2VJbkRvbSA9IChjbG9uZTMsIHRhcmdldDIsIG1vZGlmaWVyczIpID0+IHtcbiAgICBpZiAobW9kaWZpZXJzMi5pbmNsdWRlcyhcInByZXBlbmRcIikpIHtcbiAgICAgIHRhcmdldDIucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoY2xvbmUzLCB0YXJnZXQyKTtcbiAgICB9IGVsc2UgaWYgKG1vZGlmaWVyczIuaW5jbHVkZXMoXCJhcHBlbmRcIikpIHtcbiAgICAgIHRhcmdldDIucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoY2xvbmUzLCB0YXJnZXQyLm5leHRTaWJsaW5nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGFyZ2V0Mi5hcHBlbmRDaGlsZChjbG9uZTMpO1xuICAgIH1cbiAgfTtcbiAgbXV0YXRlRG9tKCgpID0+IHtcbiAgICBwbGFjZUluRG9tKGNsb25lMiwgdGFyZ2V0LCBtb2RpZmllcnMpO1xuICAgIGluaXRUcmVlKGNsb25lMik7XG4gICAgY2xvbmUyLl94X2lnbm9yZSA9IHRydWU7XG4gIH0pO1xuICBlbC5feF90ZWxlcG9ydFB1dEJhY2sgPSAoKSA9PiB7XG4gICAgbGV0IHRhcmdldDIgPSBnZXRUYXJnZXQoZXhwcmVzc2lvbik7XG4gICAgbXV0YXRlRG9tKCgpID0+IHtcbiAgICAgIHBsYWNlSW5Eb20oZWwuX3hfdGVsZXBvcnQsIHRhcmdldDIsIG1vZGlmaWVycyk7XG4gICAgfSk7XG4gIH07XG4gIGNsZWFudXAyKCgpID0+IGNsb25lMi5yZW1vdmUoKSk7XG59KTtcbnZhciB0ZWxlcG9ydENvbnRhaW5lckR1cmluZ0Nsb25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmZ1bmN0aW9uIGdldFRhcmdldChleHByZXNzaW9uKSB7XG4gIGxldCB0YXJnZXQgPSBza2lwRHVyaW5nQ2xvbmUoKCkgPT4ge1xuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGV4cHJlc3Npb24pO1xuICB9LCAoKSA9PiB7XG4gICAgcmV0dXJuIHRlbGVwb3J0Q29udGFpbmVyRHVyaW5nQ2xvbmU7XG4gIH0pKCk7XG4gIGlmICghdGFyZ2V0KVxuICAgIHdhcm4oYENhbm5vdCBmaW5kIHgtdGVsZXBvcnQgZWxlbWVudCBmb3Igc2VsZWN0b3I6IFwiJHtleHByZXNzaW9ufVwiYCk7XG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbi8vIHBhY2thZ2VzL2FscGluZWpzL3NyYy9kaXJlY3RpdmVzL3gtaWdub3JlLmpzXG52YXIgaGFuZGxlciA9ICgpID0+IHtcbn07XG5oYW5kbGVyLmlubGluZSA9IChlbCwgeyBtb2RpZmllcnMgfSwgeyBjbGVhbnVwOiBjbGVhbnVwMiB9KSA9PiB7XG4gIG1vZGlmaWVycy5pbmNsdWRlcyhcInNlbGZcIikgPyBlbC5feF9pZ25vcmVTZWxmID0gdHJ1ZSA6IGVsLl94X2lnbm9yZSA9IHRydWU7XG4gIGNsZWFudXAyKCgpID0+IHtcbiAgICBtb2RpZmllcnMuaW5jbHVkZXMoXCJzZWxmXCIpID8gZGVsZXRlIGVsLl94X2lnbm9yZVNlbGYgOiBkZWxldGUgZWwuX3hfaWdub3JlO1xuICB9KTtcbn07XG5kaXJlY3RpdmUoXCJpZ25vcmVcIiwgaGFuZGxlcik7XG5cbi8vIHBhY2thZ2VzL2FscGluZWpzL3NyYy9kaXJlY3RpdmVzL3gtZWZmZWN0LmpzXG5kaXJlY3RpdmUoXCJlZmZlY3RcIiwgc2tpcER1cmluZ0Nsb25lKChlbCwgeyBleHByZXNzaW9uIH0sIHsgZWZmZWN0OiBlZmZlY3QzIH0pID0+IHtcbiAgZWZmZWN0MyhldmFsdWF0ZUxhdGVyKGVsLCBleHByZXNzaW9uKSk7XG59KSk7XG5cbi8vIHBhY2thZ2VzL2FscGluZWpzL3NyYy91dGlscy9vbi5qc1xuZnVuY3Rpb24gb24oZWwsIGV2ZW50LCBtb2RpZmllcnMsIGNhbGxiYWNrKSB7XG4gIGxldCBsaXN0ZW5lclRhcmdldCA9IGVsO1xuICBsZXQgaGFuZGxlcjQgPSAoZSkgPT4gY2FsbGJhY2soZSk7XG4gIGxldCBvcHRpb25zID0ge307XG4gIGxldCB3cmFwSGFuZGxlciA9IChjYWxsYmFjazIsIHdyYXBwZXIpID0+IChlKSA9PiB3cmFwcGVyKGNhbGxiYWNrMiwgZSk7XG4gIGlmIChtb2RpZmllcnMuaW5jbHVkZXMoXCJkb3RcIikpXG4gICAgZXZlbnQgPSBkb3RTeW50YXgoZXZlbnQpO1xuICBpZiAobW9kaWZpZXJzLmluY2x1ZGVzKFwiY2FtZWxcIikpXG4gICAgZXZlbnQgPSBjYW1lbENhc2UyKGV2ZW50KTtcbiAgaWYgKG1vZGlmaWVycy5pbmNsdWRlcyhcInBhc3NpdmVcIikpXG4gICAgb3B0aW9ucy5wYXNzaXZlID0gdHJ1ZTtcbiAgaWYgKG1vZGlmaWVycy5pbmNsdWRlcyhcImNhcHR1cmVcIikpXG4gICAgb3B0aW9ucy5jYXB0dXJlID0gdHJ1ZTtcbiAgaWYgKG1vZGlmaWVycy5pbmNsdWRlcyhcIndpbmRvd1wiKSlcbiAgICBsaXN0ZW5lclRhcmdldCA9IHdpbmRvdztcbiAgaWYgKG1vZGlmaWVycy5pbmNsdWRlcyhcImRvY3VtZW50XCIpKVxuICAgIGxpc3RlbmVyVGFyZ2V0ID0gZG9jdW1lbnQ7XG4gIGlmIChtb2RpZmllcnMuaW5jbHVkZXMoXCJkZWJvdW5jZVwiKSkge1xuICAgIGxldCBuZXh0TW9kaWZpZXIgPSBtb2RpZmllcnNbbW9kaWZpZXJzLmluZGV4T2YoXCJkZWJvdW5jZVwiKSArIDFdIHx8IFwiaW52YWxpZC13YWl0XCI7XG4gICAgbGV0IHdhaXQgPSBpc051bWVyaWMobmV4dE1vZGlmaWVyLnNwbGl0KFwibXNcIilbMF0pID8gTnVtYmVyKG5leHRNb2RpZmllci5zcGxpdChcIm1zXCIpWzBdKSA6IDI1MDtcbiAgICBoYW5kbGVyNCA9IGRlYm91bmNlKGhhbmRsZXI0LCB3YWl0KTtcbiAgfVxuICBpZiAobW9kaWZpZXJzLmluY2x1ZGVzKFwidGhyb3R0bGVcIikpIHtcbiAgICBsZXQgbmV4dE1vZGlmaWVyID0gbW9kaWZpZXJzW21vZGlmaWVycy5pbmRleE9mKFwidGhyb3R0bGVcIikgKyAxXSB8fCBcImludmFsaWQtd2FpdFwiO1xuICAgIGxldCB3YWl0ID0gaXNOdW1lcmljKG5leHRNb2RpZmllci5zcGxpdChcIm1zXCIpWzBdKSA/IE51bWJlcihuZXh0TW9kaWZpZXIuc3BsaXQoXCJtc1wiKVswXSkgOiAyNTA7XG4gICAgaGFuZGxlcjQgPSB0aHJvdHRsZShoYW5kbGVyNCwgd2FpdCk7XG4gIH1cbiAgaWYgKG1vZGlmaWVycy5pbmNsdWRlcyhcInByZXZlbnRcIikpXG4gICAgaGFuZGxlcjQgPSB3cmFwSGFuZGxlcihoYW5kbGVyNCwgKG5leHQsIGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIG5leHQoZSk7XG4gICAgfSk7XG4gIGlmIChtb2RpZmllcnMuaW5jbHVkZXMoXCJzdG9wXCIpKVxuICAgIGhhbmRsZXI0ID0gd3JhcEhhbmRsZXIoaGFuZGxlcjQsIChuZXh0LCBlKSA9PiB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgbmV4dChlKTtcbiAgICB9KTtcbiAgaWYgKG1vZGlmaWVycy5pbmNsdWRlcyhcInNlbGZcIikpXG4gICAgaGFuZGxlcjQgPSB3cmFwSGFuZGxlcihoYW5kbGVyNCwgKG5leHQsIGUpID0+IHtcbiAgICAgIGUudGFyZ2V0ID09PSBlbCAmJiBuZXh0KGUpO1xuICAgIH0pO1xuICBpZiAobW9kaWZpZXJzLmluY2x1ZGVzKFwiYXdheVwiKSB8fCBtb2RpZmllcnMuaW5jbHVkZXMoXCJvdXRzaWRlXCIpKSB7XG4gICAgbGlzdGVuZXJUYXJnZXQgPSBkb2N1bWVudDtcbiAgICBoYW5kbGVyNCA9IHdyYXBIYW5kbGVyKGhhbmRsZXI0LCAobmV4dCwgZSkgPT4ge1xuICAgICAgaWYgKGVsLmNvbnRhaW5zKGUudGFyZ2V0KSlcbiAgICAgICAgcmV0dXJuO1xuICAgICAgaWYgKGUudGFyZ2V0LmlzQ29ubmVjdGVkID09PSBmYWxzZSlcbiAgICAgICAgcmV0dXJuO1xuICAgICAgaWYgKGVsLm9mZnNldFdpZHRoIDwgMSAmJiBlbC5vZmZzZXRIZWlnaHQgPCAxKVxuICAgICAgICByZXR1cm47XG4gICAgICBpZiAoZWwuX3hfaXNTaG93biA9PT0gZmFsc2UpXG4gICAgICAgIHJldHVybjtcbiAgICAgIG5leHQoZSk7XG4gICAgfSk7XG4gIH1cbiAgaWYgKG1vZGlmaWVycy5pbmNsdWRlcyhcIm9uY2VcIikpIHtcbiAgICBoYW5kbGVyNCA9IHdyYXBIYW5kbGVyKGhhbmRsZXI0LCAobmV4dCwgZSkgPT4ge1xuICAgICAgbmV4dChlKTtcbiAgICAgIGxpc3RlbmVyVGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGhhbmRsZXI0LCBvcHRpb25zKTtcbiAgICB9KTtcbiAgfVxuICBoYW5kbGVyNCA9IHdyYXBIYW5kbGVyKGhhbmRsZXI0LCAobmV4dCwgZSkgPT4ge1xuICAgIGlmIChpc0tleUV2ZW50KGV2ZW50KSkge1xuICAgICAgaWYgKGlzTGlzdGVuaW5nRm9yQVNwZWNpZmljS2V5VGhhdEhhc250QmVlblByZXNzZWQoZSwgbW9kaWZpZXJzKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICAgIG5leHQoZSk7XG4gIH0pO1xuICBsaXN0ZW5lclRhcmdldC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVyNCwgb3B0aW9ucyk7XG4gIHJldHVybiAoKSA9PiB7XG4gICAgbGlzdGVuZXJUYXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgaGFuZGxlcjQsIG9wdGlvbnMpO1xuICB9O1xufVxuZnVuY3Rpb24gZG90U3ludGF4KHN1YmplY3QpIHtcbiAgcmV0dXJuIHN1YmplY3QucmVwbGFjZSgvLS9nLCBcIi5cIik7XG59XG5mdW5jdGlvbiBjYW1lbENhc2UyKHN1YmplY3QpIHtcbiAgcmV0dXJuIHN1YmplY3QudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC8tKFxcdykvZywgKG1hdGNoLCBjaGFyKSA9PiBjaGFyLnRvVXBwZXJDYXNlKCkpO1xufVxuZnVuY3Rpb24gaXNOdW1lcmljKHN1YmplY3QpIHtcbiAgcmV0dXJuICFBcnJheS5pc0FycmF5KHN1YmplY3QpICYmICFpc05hTihzdWJqZWN0KTtcbn1cbmZ1bmN0aW9uIGtlYmFiQ2FzZTIoc3ViamVjdCkge1xuICBpZiAoW1wiIFwiLCBcIl9cIl0uaW5jbHVkZXMoXG4gICAgc3ViamVjdFxuICApKVxuICAgIHJldHVybiBzdWJqZWN0O1xuICByZXR1cm4gc3ViamVjdC5yZXBsYWNlKC8oW2Etel0pKFtBLVpdKS9nLCBcIiQxLSQyXCIpLnJlcGxhY2UoL1tfXFxzXS8sIFwiLVwiKS50b0xvd2VyQ2FzZSgpO1xufVxuZnVuY3Rpb24gaXNLZXlFdmVudChldmVudCkge1xuICByZXR1cm4gW1wia2V5ZG93blwiLCBcImtleXVwXCJdLmluY2x1ZGVzKGV2ZW50KTtcbn1cbmZ1bmN0aW9uIGlzTGlzdGVuaW5nRm9yQVNwZWNpZmljS2V5VGhhdEhhc250QmVlblByZXNzZWQoZSwgbW9kaWZpZXJzKSB7XG4gIGxldCBrZXlNb2RpZmllcnMgPSBtb2RpZmllcnMuZmlsdGVyKChpKSA9PiB7XG4gICAgcmV0dXJuICFbXCJ3aW5kb3dcIiwgXCJkb2N1bWVudFwiLCBcInByZXZlbnRcIiwgXCJzdG9wXCIsIFwib25jZVwiLCBcImNhcHR1cmVcIl0uaW5jbHVkZXMoaSk7XG4gIH0pO1xuICBpZiAoa2V5TW9kaWZpZXJzLmluY2x1ZGVzKFwiZGVib3VuY2VcIikpIHtcbiAgICBsZXQgZGVib3VuY2VJbmRleCA9IGtleU1vZGlmaWVycy5pbmRleE9mKFwiZGVib3VuY2VcIik7XG4gICAga2V5TW9kaWZpZXJzLnNwbGljZShkZWJvdW5jZUluZGV4LCBpc051bWVyaWMoKGtleU1vZGlmaWVyc1tkZWJvdW5jZUluZGV4ICsgMV0gfHwgXCJpbnZhbGlkLXdhaXRcIikuc3BsaXQoXCJtc1wiKVswXSkgPyAyIDogMSk7XG4gIH1cbiAgaWYgKGtleU1vZGlmaWVycy5pbmNsdWRlcyhcInRocm90dGxlXCIpKSB7XG4gICAgbGV0IGRlYm91bmNlSW5kZXggPSBrZXlNb2RpZmllcnMuaW5kZXhPZihcInRocm90dGxlXCIpO1xuICAgIGtleU1vZGlmaWVycy5zcGxpY2UoZGVib3VuY2VJbmRleCwgaXNOdW1lcmljKChrZXlNb2RpZmllcnNbZGVib3VuY2VJbmRleCArIDFdIHx8IFwiaW52YWxpZC13YWl0XCIpLnNwbGl0KFwibXNcIilbMF0pID8gMiA6IDEpO1xuICB9XG4gIGlmIChrZXlNb2RpZmllcnMubGVuZ3RoID09PSAwKVxuICAgIHJldHVybiBmYWxzZTtcbiAgaWYgKGtleU1vZGlmaWVycy5sZW5ndGggPT09IDEgJiYga2V5VG9Nb2RpZmllcnMoZS5rZXkpLmluY2x1ZGVzKGtleU1vZGlmaWVyc1swXSkpXG4gICAgcmV0dXJuIGZhbHNlO1xuICBjb25zdCBzeXN0ZW1LZXlNb2RpZmllcnMgPSBbXCJjdHJsXCIsIFwic2hpZnRcIiwgXCJhbHRcIiwgXCJtZXRhXCIsIFwiY21kXCIsIFwic3VwZXJcIl07XG4gIGNvbnN0IHNlbGVjdGVkU3lzdGVtS2V5TW9kaWZpZXJzID0gc3lzdGVtS2V5TW9kaWZpZXJzLmZpbHRlcigobW9kaWZpZXIpID0+IGtleU1vZGlmaWVycy5pbmNsdWRlcyhtb2RpZmllcikpO1xuICBrZXlNb2RpZmllcnMgPSBrZXlNb2RpZmllcnMuZmlsdGVyKChpKSA9PiAhc2VsZWN0ZWRTeXN0ZW1LZXlNb2RpZmllcnMuaW5jbHVkZXMoaSkpO1xuICBpZiAoc2VsZWN0ZWRTeXN0ZW1LZXlNb2RpZmllcnMubGVuZ3RoID4gMCkge1xuICAgIGNvbnN0IGFjdGl2ZWx5UHJlc3NlZEtleU1vZGlmaWVycyA9IHNlbGVjdGVkU3lzdGVtS2V5TW9kaWZpZXJzLmZpbHRlcigobW9kaWZpZXIpID0+IHtcbiAgICAgIGlmIChtb2RpZmllciA9PT0gXCJjbWRcIiB8fCBtb2RpZmllciA9PT0gXCJzdXBlclwiKVxuICAgICAgICBtb2RpZmllciA9IFwibWV0YVwiO1xuICAgICAgcmV0dXJuIGVbYCR7bW9kaWZpZXJ9S2V5YF07XG4gICAgfSk7XG4gICAgaWYgKGFjdGl2ZWx5UHJlc3NlZEtleU1vZGlmaWVycy5sZW5ndGggPT09IHNlbGVjdGVkU3lzdGVtS2V5TW9kaWZpZXJzLmxlbmd0aCkge1xuICAgICAgaWYgKGtleVRvTW9kaWZpZXJzKGUua2V5KS5pbmNsdWRlcyhrZXlNb2RpZmllcnNbMF0pKVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufVxuZnVuY3Rpb24ga2V5VG9Nb2RpZmllcnMoa2V5KSB7XG4gIGlmICgha2V5KVxuICAgIHJldHVybiBbXTtcbiAga2V5ID0ga2ViYWJDYXNlMihrZXkpO1xuICBsZXQgbW9kaWZpZXJUb0tleU1hcCA9IHtcbiAgICBcImN0cmxcIjogXCJjb250cm9sXCIsXG4gICAgXCJzbGFzaFwiOiBcIi9cIixcbiAgICBcInNwYWNlXCI6IFwiIFwiLFxuICAgIFwic3BhY2ViYXJcIjogXCIgXCIsXG4gICAgXCJjbWRcIjogXCJtZXRhXCIsXG4gICAgXCJlc2NcIjogXCJlc2NhcGVcIixcbiAgICBcInVwXCI6IFwiYXJyb3ctdXBcIixcbiAgICBcImRvd25cIjogXCJhcnJvdy1kb3duXCIsXG4gICAgXCJsZWZ0XCI6IFwiYXJyb3ctbGVmdFwiLFxuICAgIFwicmlnaHRcIjogXCJhcnJvdy1yaWdodFwiLFxuICAgIFwicGVyaW9kXCI6IFwiLlwiLFxuICAgIFwiZXF1YWxcIjogXCI9XCIsXG4gICAgXCJtaW51c1wiOiBcIi1cIixcbiAgICBcInVuZGVyc2NvcmVcIjogXCJfXCJcbiAgfTtcbiAgbW9kaWZpZXJUb0tleU1hcFtrZXldID0ga2V5O1xuICByZXR1cm4gT2JqZWN0LmtleXMobW9kaWZpZXJUb0tleU1hcCkubWFwKChtb2RpZmllcikgPT4ge1xuICAgIGlmIChtb2RpZmllclRvS2V5TWFwW21vZGlmaWVyXSA9PT0ga2V5KVxuICAgICAgcmV0dXJuIG1vZGlmaWVyO1xuICB9KS5maWx0ZXIoKG1vZGlmaWVyKSA9PiBtb2RpZmllcik7XG59XG5cbi8vIHBhY2thZ2VzL2FscGluZWpzL3NyYy9kaXJlY3RpdmVzL3gtbW9kZWwuanNcbmRpcmVjdGl2ZShcIm1vZGVsXCIsIChlbCwgeyBtb2RpZmllcnMsIGV4cHJlc3Npb24gfSwgeyBlZmZlY3Q6IGVmZmVjdDMsIGNsZWFudXA6IGNsZWFudXAyIH0pID0+IHtcbiAgbGV0IHNjb3BlVGFyZ2V0ID0gZWw7XG4gIGlmIChtb2RpZmllcnMuaW5jbHVkZXMoXCJwYXJlbnRcIikpIHtcbiAgICBzY29wZVRhcmdldCA9IGVsLnBhcmVudE5vZGU7XG4gIH1cbiAgbGV0IGV2YWx1YXRlR2V0ID0gZXZhbHVhdGVMYXRlcihzY29wZVRhcmdldCwgZXhwcmVzc2lvbik7XG4gIGxldCBldmFsdWF0ZVNldDtcbiAgaWYgKHR5cGVvZiBleHByZXNzaW9uID09PSBcInN0cmluZ1wiKSB7XG4gICAgZXZhbHVhdGVTZXQgPSBldmFsdWF0ZUxhdGVyKHNjb3BlVGFyZ2V0LCBgJHtleHByZXNzaW9ufSA9IF9fcGxhY2Vob2xkZXJgKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgZXhwcmVzc2lvbiA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBleHByZXNzaW9uKCkgPT09IFwic3RyaW5nXCIpIHtcbiAgICBldmFsdWF0ZVNldCA9IGV2YWx1YXRlTGF0ZXIoc2NvcGVUYXJnZXQsIGAke2V4cHJlc3Npb24oKX0gPSBfX3BsYWNlaG9sZGVyYCk7XG4gIH0gZWxzZSB7XG4gICAgZXZhbHVhdGVTZXQgPSAoKSA9PiB7XG4gICAgfTtcbiAgfVxuICBsZXQgZ2V0VmFsdWUgPSAoKSA9PiB7XG4gICAgbGV0IHJlc3VsdDtcbiAgICBldmFsdWF0ZUdldCgodmFsdWUpID0+IHJlc3VsdCA9IHZhbHVlKTtcbiAgICByZXR1cm4gaXNHZXR0ZXJTZXR0ZXIocmVzdWx0KSA/IHJlc3VsdC5nZXQoKSA6IHJlc3VsdDtcbiAgfTtcbiAgbGV0IHNldFZhbHVlID0gKHZhbHVlKSA9PiB7XG4gICAgbGV0IHJlc3VsdDtcbiAgICBldmFsdWF0ZUdldCgodmFsdWUyKSA9PiByZXN1bHQgPSB2YWx1ZTIpO1xuICAgIGlmIChpc0dldHRlclNldHRlcihyZXN1bHQpKSB7XG4gICAgICByZXN1bHQuc2V0KHZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZXZhbHVhdGVTZXQoKCkgPT4ge1xuICAgICAgfSwge1xuICAgICAgICBzY29wZTogeyBcIl9fcGxhY2Vob2xkZXJcIjogdmFsdWUgfVxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuICBpZiAodHlwZW9mIGV4cHJlc3Npb24gPT09IFwic3RyaW5nXCIgJiYgZWwudHlwZSA9PT0gXCJyYWRpb1wiKSB7XG4gICAgbXV0YXRlRG9tKCgpID0+IHtcbiAgICAgIGlmICghZWwuaGFzQXR0cmlidXRlKFwibmFtZVwiKSlcbiAgICAgICAgZWwuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBleHByZXNzaW9uKTtcbiAgICB9KTtcbiAgfVxuICB2YXIgZXZlbnQgPSBlbC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09IFwic2VsZWN0XCIgfHwgW1wiY2hlY2tib3hcIiwgXCJyYWRpb1wiXS5pbmNsdWRlcyhlbC50eXBlKSB8fCBtb2RpZmllcnMuaW5jbHVkZXMoXCJsYXp5XCIpID8gXCJjaGFuZ2VcIiA6IFwiaW5wdXRcIjtcbiAgbGV0IHJlbW92ZUxpc3RlbmVyID0gaXNDbG9uaW5nID8gKCkgPT4ge1xuICB9IDogb24oZWwsIGV2ZW50LCBtb2RpZmllcnMsIChlKSA9PiB7XG4gICAgc2V0VmFsdWUoZ2V0SW5wdXRWYWx1ZShlbCwgbW9kaWZpZXJzLCBlLCBnZXRWYWx1ZSgpKSk7XG4gIH0pO1xuICBpZiAobW9kaWZpZXJzLmluY2x1ZGVzKFwiZmlsbFwiKSkge1xuICAgIGlmIChbbnVsbCwgXCJcIl0uaW5jbHVkZXMoZ2V0VmFsdWUoKSkgfHwgZWwudHlwZSA9PT0gXCJjaGVja2JveFwiICYmIEFycmF5LmlzQXJyYXkoZ2V0VmFsdWUoKSkpIHtcbiAgICAgIGVsLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KGV2ZW50LCB7fSkpO1xuICAgIH1cbiAgfVxuICBpZiAoIWVsLl94X3JlbW92ZU1vZGVsTGlzdGVuZXJzKVxuICAgIGVsLl94X3JlbW92ZU1vZGVsTGlzdGVuZXJzID0ge307XG4gIGVsLl94X3JlbW92ZU1vZGVsTGlzdGVuZXJzW1wiZGVmYXVsdFwiXSA9IHJlbW92ZUxpc3RlbmVyO1xuICBjbGVhbnVwMigoKSA9PiBlbC5feF9yZW1vdmVNb2RlbExpc3RlbmVyc1tcImRlZmF1bHRcIl0oKSk7XG4gIGlmIChlbC5mb3JtKSB7XG4gICAgbGV0IHJlbW92ZVJlc2V0TGlzdGVuZXIgPSBvbihlbC5mb3JtLCBcInJlc2V0XCIsIFtdLCAoZSkgPT4ge1xuICAgICAgbmV4dFRpY2soKCkgPT4gZWwuX3hfbW9kZWwgJiYgZWwuX3hfbW9kZWwuc2V0KGVsLnZhbHVlKSk7XG4gICAgfSk7XG4gICAgY2xlYW51cDIoKCkgPT4gcmVtb3ZlUmVzZXRMaXN0ZW5lcigpKTtcbiAgfVxuICBlbC5feF9tb2RlbCA9IHtcbiAgICBnZXQoKSB7XG4gICAgICByZXR1cm4gZ2V0VmFsdWUoKTtcbiAgICB9LFxuICAgIHNldCh2YWx1ZSkge1xuICAgICAgc2V0VmFsdWUodmFsdWUpO1xuICAgIH1cbiAgfTtcbiAgZWwuX3hfZm9yY2VNb2RlbFVwZGF0ZSA9ICh2YWx1ZSkgPT4ge1xuICAgIGlmICh2YWx1ZSA9PT0gdm9pZCAwICYmIHR5cGVvZiBleHByZXNzaW9uID09PSBcInN0cmluZ1wiICYmIGV4cHJlc3Npb24ubWF0Y2goL1xcLi8pKVxuICAgICAgdmFsdWUgPSBcIlwiO1xuICAgIHdpbmRvdy5mcm9tTW9kZWwgPSB0cnVlO1xuICAgIG11dGF0ZURvbSgoKSA9PiBiaW5kKGVsLCBcInZhbHVlXCIsIHZhbHVlKSk7XG4gICAgZGVsZXRlIHdpbmRvdy5mcm9tTW9kZWw7XG4gIH07XG4gIGVmZmVjdDMoKCkgPT4ge1xuICAgIGxldCB2YWx1ZSA9IGdldFZhbHVlKCk7XG4gICAgaWYgKG1vZGlmaWVycy5pbmNsdWRlcyhcInVuaW50cnVzaXZlXCIpICYmIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuaXNTYW1lTm9kZShlbCkpXG4gICAgICByZXR1cm47XG4gICAgZWwuX3hfZm9yY2VNb2RlbFVwZGF0ZSh2YWx1ZSk7XG4gIH0pO1xufSk7XG5mdW5jdGlvbiBnZXRJbnB1dFZhbHVlKGVsLCBtb2RpZmllcnMsIGV2ZW50LCBjdXJyZW50VmFsdWUpIHtcbiAgcmV0dXJuIG11dGF0ZURvbSgoKSA9PiB7XG4gICAgaWYgKGV2ZW50IGluc3RhbmNlb2YgQ3VzdG9tRXZlbnQgJiYgZXZlbnQuZGV0YWlsICE9PSB2b2lkIDApXG4gICAgICByZXR1cm4gZXZlbnQuZGV0YWlsICE9PSBudWxsICYmIGV2ZW50LmRldGFpbCAhPT0gdm9pZCAwID8gZXZlbnQuZGV0YWlsIDogZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgIGVsc2UgaWYgKGVsLnR5cGUgPT09IFwiY2hlY2tib3hcIikge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY3VycmVudFZhbHVlKSkge1xuICAgICAgICBsZXQgbmV3VmFsdWUgPSBudWxsO1xuICAgICAgICBpZiAobW9kaWZpZXJzLmluY2x1ZGVzKFwibnVtYmVyXCIpKSB7XG4gICAgICAgICAgbmV3VmFsdWUgPSBzYWZlUGFyc2VOdW1iZXIoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgfSBlbHNlIGlmIChtb2RpZmllcnMuaW5jbHVkZXMoXCJib29sZWFuXCIpKSB7XG4gICAgICAgICAgbmV3VmFsdWUgPSBzYWZlUGFyc2VCb29sZWFuKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbmV3VmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGV2ZW50LnRhcmdldC5jaGVja2VkID8gY3VycmVudFZhbHVlLmNvbmNhdChbbmV3VmFsdWVdKSA6IGN1cnJlbnRWYWx1ZS5maWx0ZXIoKGVsMikgPT4gIWNoZWNrZWRBdHRyTG9vc2VDb21wYXJlMihlbDIsIG5ld1ZhbHVlKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZXZlbnQudGFyZ2V0LmNoZWNrZWQ7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChlbC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09IFwic2VsZWN0XCIgJiYgZWwubXVsdGlwbGUpIHtcbiAgICAgIGlmIChtb2RpZmllcnMuaW5jbHVkZXMoXCJudW1iZXJcIikpIHtcbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20oZXZlbnQudGFyZ2V0LnNlbGVjdGVkT3B0aW9ucykubWFwKChvcHRpb24pID0+IHtcbiAgICAgICAgICBsZXQgcmF3VmFsdWUgPSBvcHRpb24udmFsdWUgfHwgb3B0aW9uLnRleHQ7XG4gICAgICAgICAgcmV0dXJuIHNhZmVQYXJzZU51bWJlcihyYXdWYWx1ZSk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmIChtb2RpZmllcnMuaW5jbHVkZXMoXCJib29sZWFuXCIpKSB7XG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKGV2ZW50LnRhcmdldC5zZWxlY3RlZE9wdGlvbnMpLm1hcCgob3B0aW9uKSA9PiB7XG4gICAgICAgICAgbGV0IHJhd1ZhbHVlID0gb3B0aW9uLnZhbHVlIHx8IG9wdGlvbi50ZXh0O1xuICAgICAgICAgIHJldHVybiBzYWZlUGFyc2VCb29sZWFuKHJhd1ZhbHVlKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gQXJyYXkuZnJvbShldmVudC50YXJnZXQuc2VsZWN0ZWRPcHRpb25zKS5tYXAoKG9wdGlvbikgPT4ge1xuICAgICAgICByZXR1cm4gb3B0aW9uLnZhbHVlIHx8IG9wdGlvbi50ZXh0O1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChtb2RpZmllcnMuaW5jbHVkZXMoXCJudW1iZXJcIikpIHtcbiAgICAgICAgcmV0dXJuIHNhZmVQYXJzZU51bWJlcihldmVudC50YXJnZXQudmFsdWUpO1xuICAgICAgfSBlbHNlIGlmIChtb2RpZmllcnMuaW5jbHVkZXMoXCJib29sZWFuXCIpKSB7XG4gICAgICAgIHJldHVybiBzYWZlUGFyc2VCb29sZWFuKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbW9kaWZpZXJzLmluY2x1ZGVzKFwidHJpbVwiKSA/IGV2ZW50LnRhcmdldC52YWx1ZS50cmltKCkgOiBldmVudC50YXJnZXQudmFsdWU7XG4gICAgfVxuICB9KTtcbn1cbmZ1bmN0aW9uIHNhZmVQYXJzZU51bWJlcihyYXdWYWx1ZSkge1xuICBsZXQgbnVtYmVyID0gcmF3VmFsdWUgPyBwYXJzZUZsb2F0KHJhd1ZhbHVlKSA6IG51bGw7XG4gIHJldHVybiBpc051bWVyaWMyKG51bWJlcikgPyBudW1iZXIgOiByYXdWYWx1ZTtcbn1cbmZ1bmN0aW9uIGNoZWNrZWRBdHRyTG9vc2VDb21wYXJlMih2YWx1ZUEsIHZhbHVlQikge1xuICByZXR1cm4gdmFsdWVBID09IHZhbHVlQjtcbn1cbmZ1bmN0aW9uIGlzTnVtZXJpYzIoc3ViamVjdCkge1xuICByZXR1cm4gIUFycmF5LmlzQXJyYXkoc3ViamVjdCkgJiYgIWlzTmFOKHN1YmplY3QpO1xufVxuZnVuY3Rpb24gaXNHZXR0ZXJTZXR0ZXIodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9PSBudWxsICYmIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgdmFsdWUuZ2V0ID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIHZhbHVlLnNldCA9PT0gXCJmdW5jdGlvblwiO1xufVxuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvZGlyZWN0aXZlcy94LWNsb2FrLmpzXG5kaXJlY3RpdmUoXCJjbG9ha1wiLCAoZWwpID0+IHF1ZXVlTWljcm90YXNrKCgpID0+IG11dGF0ZURvbSgoKSA9PiBlbC5yZW1vdmVBdHRyaWJ1dGUocHJlZml4KFwiY2xvYWtcIikpKSkpO1xuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvZGlyZWN0aXZlcy94LWluaXQuanNcbmFkZEluaXRTZWxlY3RvcigoKSA9PiBgWyR7cHJlZml4KFwiaW5pdFwiKX1dYCk7XG5kaXJlY3RpdmUoXCJpbml0XCIsIHNraXBEdXJpbmdDbG9uZSgoZWwsIHsgZXhwcmVzc2lvbiB9LCB7IGV2YWx1YXRlOiBldmFsdWF0ZTIgfSkgPT4ge1xuICBpZiAodHlwZW9mIGV4cHJlc3Npb24gPT09IFwic3RyaW5nXCIpIHtcbiAgICByZXR1cm4gISFleHByZXNzaW9uLnRyaW0oKSAmJiBldmFsdWF0ZTIoZXhwcmVzc2lvbiwge30sIGZhbHNlKTtcbiAgfVxuICByZXR1cm4gZXZhbHVhdGUyKGV4cHJlc3Npb24sIHt9LCBmYWxzZSk7XG59KSk7XG5cbi8vIHBhY2thZ2VzL2FscGluZWpzL3NyYy9kaXJlY3RpdmVzL3gtdGV4dC5qc1xuZGlyZWN0aXZlKFwidGV4dFwiLCAoZWwsIHsgZXhwcmVzc2lvbiB9LCB7IGVmZmVjdDogZWZmZWN0MywgZXZhbHVhdGVMYXRlcjogZXZhbHVhdGVMYXRlcjIgfSkgPT4ge1xuICBsZXQgZXZhbHVhdGUyID0gZXZhbHVhdGVMYXRlcjIoZXhwcmVzc2lvbik7XG4gIGVmZmVjdDMoKCkgPT4ge1xuICAgIGV2YWx1YXRlMigodmFsdWUpID0+IHtcbiAgICAgIG11dGF0ZURvbSgoKSA9PiB7XG4gICAgICAgIGVsLnRleHRDb250ZW50ID0gdmFsdWU7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSk7XG59KTtcblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL2RpcmVjdGl2ZXMveC1odG1sLmpzXG5kaXJlY3RpdmUoXCJodG1sXCIsIChlbCwgeyBleHByZXNzaW9uIH0sIHsgZWZmZWN0OiBlZmZlY3QzLCBldmFsdWF0ZUxhdGVyOiBldmFsdWF0ZUxhdGVyMiB9KSA9PiB7XG4gIGxldCBldmFsdWF0ZTIgPSBldmFsdWF0ZUxhdGVyMihleHByZXNzaW9uKTtcbiAgZWZmZWN0MygoKSA9PiB7XG4gICAgZXZhbHVhdGUyKCh2YWx1ZSkgPT4ge1xuICAgICAgbXV0YXRlRG9tKCgpID0+IHtcbiAgICAgICAgZWwuaW5uZXJIVE1MID0gdmFsdWU7XG4gICAgICAgIGVsLl94X2lnbm9yZVNlbGYgPSB0cnVlO1xuICAgICAgICBpbml0VHJlZShlbCk7XG4gICAgICAgIGRlbGV0ZSBlbC5feF9pZ25vcmVTZWxmO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xufSk7XG5cbi8vIHBhY2thZ2VzL2FscGluZWpzL3NyYy9kaXJlY3RpdmVzL3gtYmluZC5qc1xubWFwQXR0cmlidXRlcyhzdGFydGluZ1dpdGgoXCI6XCIsIGludG8ocHJlZml4KFwiYmluZDpcIikpKSk7XG52YXIgaGFuZGxlcjIgPSAoZWwsIHsgdmFsdWUsIG1vZGlmaWVycywgZXhwcmVzc2lvbiwgb3JpZ2luYWwgfSwgeyBlZmZlY3Q6IGVmZmVjdDMgfSkgPT4ge1xuICBpZiAoIXZhbHVlKSB7XG4gICAgbGV0IGJpbmRpbmdQcm92aWRlcnMgPSB7fTtcbiAgICBpbmplY3RCaW5kaW5nUHJvdmlkZXJzKGJpbmRpbmdQcm92aWRlcnMpO1xuICAgIGxldCBnZXRCaW5kaW5ncyA9IGV2YWx1YXRlTGF0ZXIoZWwsIGV4cHJlc3Npb24pO1xuICAgIGdldEJpbmRpbmdzKChiaW5kaW5ncykgPT4ge1xuICAgICAgYXBwbHlCaW5kaW5nc09iamVjdChlbCwgYmluZGluZ3MsIG9yaWdpbmFsKTtcbiAgICB9LCB7IHNjb3BlOiBiaW5kaW5nUHJvdmlkZXJzIH0pO1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAodmFsdWUgPT09IFwia2V5XCIpXG4gICAgcmV0dXJuIHN0b3JlS2V5Rm9yWEZvcihlbCwgZXhwcmVzc2lvbik7XG4gIGlmIChlbC5feF9pbmxpbmVCaW5kaW5ncyAmJiBlbC5feF9pbmxpbmVCaW5kaW5nc1t2YWx1ZV0gJiYgZWwuX3hfaW5saW5lQmluZGluZ3NbdmFsdWVdLmV4dHJhY3QpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgbGV0IGV2YWx1YXRlMiA9IGV2YWx1YXRlTGF0ZXIoZWwsIGV4cHJlc3Npb24pO1xuICBlZmZlY3QzKCgpID0+IGV2YWx1YXRlMigocmVzdWx0KSA9PiB7XG4gICAgaWYgKHJlc3VsdCA9PT0gdm9pZCAwICYmIHR5cGVvZiBleHByZXNzaW9uID09PSBcInN0cmluZ1wiICYmIGV4cHJlc3Npb24ubWF0Y2goL1xcLi8pKSB7XG4gICAgICByZXN1bHQgPSBcIlwiO1xuICAgIH1cbiAgICBtdXRhdGVEb20oKCkgPT4gYmluZChlbCwgdmFsdWUsIHJlc3VsdCwgbW9kaWZpZXJzKSk7XG4gIH0pKTtcbn07XG5oYW5kbGVyMi5pbmxpbmUgPSAoZWwsIHsgdmFsdWUsIG1vZGlmaWVycywgZXhwcmVzc2lvbiB9KSA9PiB7XG4gIGlmICghdmFsdWUpXG4gICAgcmV0dXJuO1xuICBpZiAoIWVsLl94X2lubGluZUJpbmRpbmdzKVxuICAgIGVsLl94X2lubGluZUJpbmRpbmdzID0ge307XG4gIGVsLl94X2lubGluZUJpbmRpbmdzW3ZhbHVlXSA9IHsgZXhwcmVzc2lvbiwgZXh0cmFjdDogZmFsc2UgfTtcbn07XG5kaXJlY3RpdmUoXCJiaW5kXCIsIGhhbmRsZXIyKTtcbmZ1bmN0aW9uIHN0b3JlS2V5Rm9yWEZvcihlbCwgZXhwcmVzc2lvbikge1xuICBlbC5feF9rZXlFeHByZXNzaW9uID0gZXhwcmVzc2lvbjtcbn1cblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL2RpcmVjdGl2ZXMveC1kYXRhLmpzXG5hZGRSb290U2VsZWN0b3IoKCkgPT4gYFske3ByZWZpeChcImRhdGFcIil9XWApO1xuZGlyZWN0aXZlKFwiZGF0YVwiLCAoZWwsIHsgZXhwcmVzc2lvbiB9LCB7IGNsZWFudXA6IGNsZWFudXAyIH0pID0+IHtcbiAgaWYgKHNob3VsZFNraXBSZWdpc3RlcmluZ0RhdGFEdXJpbmdDbG9uZShlbCkpXG4gICAgcmV0dXJuO1xuICBleHByZXNzaW9uID0gZXhwcmVzc2lvbiA9PT0gXCJcIiA/IFwie31cIiA6IGV4cHJlc3Npb247XG4gIGxldCBtYWdpY0NvbnRleHQgPSB7fTtcbiAgaW5qZWN0TWFnaWNzKG1hZ2ljQ29udGV4dCwgZWwpO1xuICBsZXQgZGF0YVByb3ZpZGVyQ29udGV4dCA9IHt9O1xuICBpbmplY3REYXRhUHJvdmlkZXJzKGRhdGFQcm92aWRlckNvbnRleHQsIG1hZ2ljQ29udGV4dCk7XG4gIGxldCBkYXRhMiA9IGV2YWx1YXRlKGVsLCBleHByZXNzaW9uLCB7IHNjb3BlOiBkYXRhUHJvdmlkZXJDb250ZXh0IH0pO1xuICBpZiAoZGF0YTIgPT09IHZvaWQgMCB8fCBkYXRhMiA9PT0gdHJ1ZSlcbiAgICBkYXRhMiA9IHt9O1xuICBpbmplY3RNYWdpY3MoZGF0YTIsIGVsKTtcbiAgbGV0IHJlYWN0aXZlRGF0YSA9IHJlYWN0aXZlKGRhdGEyKTtcbiAgaW5pdEludGVyY2VwdG9yczIocmVhY3RpdmVEYXRhKTtcbiAgbGV0IHVuZG8gPSBhZGRTY29wZVRvTm9kZShlbCwgcmVhY3RpdmVEYXRhKTtcbiAgcmVhY3RpdmVEYXRhW1wiaW5pdFwiXSAmJiBldmFsdWF0ZShlbCwgcmVhY3RpdmVEYXRhW1wiaW5pdFwiXSk7XG4gIGNsZWFudXAyKCgpID0+IHtcbiAgICByZWFjdGl2ZURhdGFbXCJkZXN0cm95XCJdICYmIGV2YWx1YXRlKGVsLCByZWFjdGl2ZURhdGFbXCJkZXN0cm95XCJdKTtcbiAgICB1bmRvKCk7XG4gIH0pO1xufSk7XG5pbnRlcmNlcHRDbG9uZSgoZnJvbSwgdG8pID0+IHtcbiAgaWYgKGZyb20uX3hfZGF0YVN0YWNrKSB7XG4gICAgdG8uX3hfZGF0YVN0YWNrID0gZnJvbS5feF9kYXRhU3RhY2s7XG4gICAgdG8uc2V0QXR0cmlidXRlKFwiZGF0YS1oYXMtYWxwaW5lLXN0YXRlXCIsIHRydWUpO1xuICB9XG59KTtcbmZ1bmN0aW9uIHNob3VsZFNraXBSZWdpc3RlcmluZ0RhdGFEdXJpbmdDbG9uZShlbCkge1xuICBpZiAoIWlzQ2xvbmluZylcbiAgICByZXR1cm4gZmFsc2U7XG4gIGlmIChpc0Nsb25pbmdMZWdhY3kpXG4gICAgcmV0dXJuIHRydWU7XG4gIHJldHVybiBlbC5oYXNBdHRyaWJ1dGUoXCJkYXRhLWhhcy1hbHBpbmUtc3RhdGVcIik7XG59XG5cbi8vIHBhY2thZ2VzL2FscGluZWpzL3NyYy9kaXJlY3RpdmVzL3gtc2hvdy5qc1xuZGlyZWN0aXZlKFwic2hvd1wiLCAoZWwsIHsgbW9kaWZpZXJzLCBleHByZXNzaW9uIH0sIHsgZWZmZWN0OiBlZmZlY3QzIH0pID0+IHtcbiAgbGV0IGV2YWx1YXRlMiA9IGV2YWx1YXRlTGF0ZXIoZWwsIGV4cHJlc3Npb24pO1xuICBpZiAoIWVsLl94X2RvSGlkZSlcbiAgICBlbC5feF9kb0hpZGUgPSAoKSA9PiB7XG4gICAgICBtdXRhdGVEb20oKCkgPT4ge1xuICAgICAgICBlbC5zdHlsZS5zZXRQcm9wZXJ0eShcImRpc3BsYXlcIiwgXCJub25lXCIsIG1vZGlmaWVycy5pbmNsdWRlcyhcImltcG9ydGFudFwiKSA/IFwiaW1wb3J0YW50XCIgOiB2b2lkIDApO1xuICAgICAgfSk7XG4gICAgfTtcbiAgaWYgKCFlbC5feF9kb1Nob3cpXG4gICAgZWwuX3hfZG9TaG93ID0gKCkgPT4ge1xuICAgICAgbXV0YXRlRG9tKCgpID0+IHtcbiAgICAgICAgaWYgKGVsLnN0eWxlLmxlbmd0aCA9PT0gMSAmJiBlbC5zdHlsZS5kaXNwbGF5ID09PSBcIm5vbmVcIikge1xuICAgICAgICAgIGVsLnJlbW92ZUF0dHJpYnV0ZShcInN0eWxlXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGVsLnN0eWxlLnJlbW92ZVByb3BlcnR5KFwiZGlzcGxheVwiKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcbiAgbGV0IGhpZGUgPSAoKSA9PiB7XG4gICAgZWwuX3hfZG9IaWRlKCk7XG4gICAgZWwuX3hfaXNTaG93biA9IGZhbHNlO1xuICB9O1xuICBsZXQgc2hvdyA9ICgpID0+IHtcbiAgICBlbC5feF9kb1Nob3coKTtcbiAgICBlbC5feF9pc1Nob3duID0gdHJ1ZTtcbiAgfTtcbiAgbGV0IGNsaWNrQXdheUNvbXBhdGlibGVTaG93ID0gKCkgPT4gc2V0VGltZW91dChzaG93KTtcbiAgbGV0IHRvZ2dsZSA9IG9uY2UoXG4gICAgKHZhbHVlKSA9PiB2YWx1ZSA/IHNob3coKSA6IGhpZGUoKSxcbiAgICAodmFsdWUpID0+IHtcbiAgICAgIGlmICh0eXBlb2YgZWwuX3hfdG9nZ2xlQW5kQ2FzY2FkZVdpdGhUcmFuc2l0aW9ucyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIGVsLl94X3RvZ2dsZUFuZENhc2NhZGVXaXRoVHJhbnNpdGlvbnMoZWwsIHZhbHVlLCBzaG93LCBoaWRlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhbHVlID8gY2xpY2tBd2F5Q29tcGF0aWJsZVNob3coKSA6IGhpZGUoKTtcbiAgICAgIH1cbiAgICB9XG4gICk7XG4gIGxldCBvbGRWYWx1ZTtcbiAgbGV0IGZpcnN0VGltZSA9IHRydWU7XG4gIGVmZmVjdDMoKCkgPT4gZXZhbHVhdGUyKCh2YWx1ZSkgPT4ge1xuICAgIGlmICghZmlyc3RUaW1lICYmIHZhbHVlID09PSBvbGRWYWx1ZSlcbiAgICAgIHJldHVybjtcbiAgICBpZiAobW9kaWZpZXJzLmluY2x1ZGVzKFwiaW1tZWRpYXRlXCIpKVxuICAgICAgdmFsdWUgPyBjbGlja0F3YXlDb21wYXRpYmxlU2hvdygpIDogaGlkZSgpO1xuICAgIHRvZ2dsZSh2YWx1ZSk7XG4gICAgb2xkVmFsdWUgPSB2YWx1ZTtcbiAgICBmaXJzdFRpbWUgPSBmYWxzZTtcbiAgfSkpO1xufSk7XG5cbi8vIHBhY2thZ2VzL2FscGluZWpzL3NyYy9kaXJlY3RpdmVzL3gtZm9yLmpzXG5kaXJlY3RpdmUoXCJmb3JcIiwgKGVsLCB7IGV4cHJlc3Npb24gfSwgeyBlZmZlY3Q6IGVmZmVjdDMsIGNsZWFudXA6IGNsZWFudXAyIH0pID0+IHtcbiAgbGV0IGl0ZXJhdG9yTmFtZXMgPSBwYXJzZUZvckV4cHJlc3Npb24oZXhwcmVzc2lvbik7XG4gIGxldCBldmFsdWF0ZUl0ZW1zID0gZXZhbHVhdGVMYXRlcihlbCwgaXRlcmF0b3JOYW1lcy5pdGVtcyk7XG4gIGxldCBldmFsdWF0ZUtleSA9IGV2YWx1YXRlTGF0ZXIoXG4gICAgZWwsXG4gICAgLy8gdGhlIHgtYmluZDprZXkgZXhwcmVzc2lvbiBpcyBzdG9yZWQgZm9yIG91ciB1c2UgaW5zdGVhZCBvZiBldmFsdWF0ZWQuXG4gICAgZWwuX3hfa2V5RXhwcmVzc2lvbiB8fCBcImluZGV4XCJcbiAgKTtcbiAgZWwuX3hfcHJldktleXMgPSBbXTtcbiAgZWwuX3hfbG9va3VwID0ge307XG4gIGVmZmVjdDMoKCkgPT4gbG9vcChlbCwgaXRlcmF0b3JOYW1lcywgZXZhbHVhdGVJdGVtcywgZXZhbHVhdGVLZXkpKTtcbiAgY2xlYW51cDIoKCkgPT4ge1xuICAgIE9iamVjdC52YWx1ZXMoZWwuX3hfbG9va3VwKS5mb3JFYWNoKChlbDIpID0+IGVsMi5yZW1vdmUoKSk7XG4gICAgZGVsZXRlIGVsLl94X3ByZXZLZXlzO1xuICAgIGRlbGV0ZSBlbC5feF9sb29rdXA7XG4gIH0pO1xufSk7XG5mdW5jdGlvbiBsb29wKGVsLCBpdGVyYXRvck5hbWVzLCBldmFsdWF0ZUl0ZW1zLCBldmFsdWF0ZUtleSkge1xuICBsZXQgaXNPYmplY3QyID0gKGkpID0+IHR5cGVvZiBpID09PSBcIm9iamVjdFwiICYmICFBcnJheS5pc0FycmF5KGkpO1xuICBsZXQgdGVtcGxhdGVFbCA9IGVsO1xuICBldmFsdWF0ZUl0ZW1zKChpdGVtcykgPT4ge1xuICAgIGlmIChpc051bWVyaWMzKGl0ZW1zKSAmJiBpdGVtcyA+PSAwKSB7XG4gICAgICBpdGVtcyA9IEFycmF5LmZyb20oQXJyYXkoaXRlbXMpLmtleXMoKSwgKGkpID0+IGkgKyAxKTtcbiAgICB9XG4gICAgaWYgKGl0ZW1zID09PSB2b2lkIDApXG4gICAgICBpdGVtcyA9IFtdO1xuICAgIGxldCBsb29rdXAgPSBlbC5feF9sb29rdXA7XG4gICAgbGV0IHByZXZLZXlzID0gZWwuX3hfcHJldktleXM7XG4gICAgbGV0IHNjb3BlcyA9IFtdO1xuICAgIGxldCBrZXlzID0gW107XG4gICAgaWYgKGlzT2JqZWN0MihpdGVtcykpIHtcbiAgICAgIGl0ZW1zID0gT2JqZWN0LmVudHJpZXMoaXRlbXMpLm1hcCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICAgIGxldCBzY29wZTIgPSBnZXRJdGVyYXRpb25TY29wZVZhcmlhYmxlcyhpdGVyYXRvck5hbWVzLCB2YWx1ZSwga2V5LCBpdGVtcyk7XG4gICAgICAgIGV2YWx1YXRlS2V5KCh2YWx1ZTIpID0+IGtleXMucHVzaCh2YWx1ZTIpLCB7IHNjb3BlOiB7IGluZGV4OiBrZXksIC4uLnNjb3BlMiB9IH0pO1xuICAgICAgICBzY29wZXMucHVzaChzY29wZTIpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IHNjb3BlMiA9IGdldEl0ZXJhdGlvblNjb3BlVmFyaWFibGVzKGl0ZXJhdG9yTmFtZXMsIGl0ZW1zW2ldLCBpLCBpdGVtcyk7XG4gICAgICAgIGV2YWx1YXRlS2V5KCh2YWx1ZSkgPT4ga2V5cy5wdXNoKHZhbHVlKSwgeyBzY29wZTogeyBpbmRleDogaSwgLi4uc2NvcGUyIH0gfSk7XG4gICAgICAgIHNjb3Blcy5wdXNoKHNjb3BlMik7XG4gICAgICB9XG4gICAgfVxuICAgIGxldCBhZGRzID0gW107XG4gICAgbGV0IG1vdmVzID0gW107XG4gICAgbGV0IHJlbW92ZXMgPSBbXTtcbiAgICBsZXQgc2FtZXMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByZXZLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQga2V5ID0gcHJldktleXNbaV07XG4gICAgICBpZiAoa2V5cy5pbmRleE9mKGtleSkgPT09IC0xKVxuICAgICAgICByZW1vdmVzLnB1c2goa2V5KTtcbiAgICB9XG4gICAgcHJldktleXMgPSBwcmV2S2V5cy5maWx0ZXIoKGtleSkgPT4gIXJlbW92ZXMuaW5jbHVkZXMoa2V5KSk7XG4gICAgbGV0IGxhc3RLZXkgPSBcInRlbXBsYXRlXCI7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQga2V5ID0ga2V5c1tpXTtcbiAgICAgIGxldCBwcmV2SW5kZXggPSBwcmV2S2V5cy5pbmRleE9mKGtleSk7XG4gICAgICBpZiAocHJldkluZGV4ID09PSAtMSkge1xuICAgICAgICBwcmV2S2V5cy5zcGxpY2UoaSwgMCwga2V5KTtcbiAgICAgICAgYWRkcy5wdXNoKFtsYXN0S2V5LCBpXSk7XG4gICAgICB9IGVsc2UgaWYgKHByZXZJbmRleCAhPT0gaSkge1xuICAgICAgICBsZXQga2V5SW5TcG90ID0gcHJldktleXMuc3BsaWNlKGksIDEpWzBdO1xuICAgICAgICBsZXQga2V5Rm9yU3BvdCA9IHByZXZLZXlzLnNwbGljZShwcmV2SW5kZXggLSAxLCAxKVswXTtcbiAgICAgICAgcHJldktleXMuc3BsaWNlKGksIDAsIGtleUZvclNwb3QpO1xuICAgICAgICBwcmV2S2V5cy5zcGxpY2UocHJldkluZGV4LCAwLCBrZXlJblNwb3QpO1xuICAgICAgICBtb3Zlcy5wdXNoKFtrZXlJblNwb3QsIGtleUZvclNwb3RdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNhbWVzLnB1c2goa2V5KTtcbiAgICAgIH1cbiAgICAgIGxhc3RLZXkgPSBrZXk7XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVtb3Zlcy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IGtleSA9IHJlbW92ZXNbaV07XG4gICAgICBpZiAoISFsb29rdXBba2V5XS5feF9lZmZlY3RzKSB7XG4gICAgICAgIGxvb2t1cFtrZXldLl94X2VmZmVjdHMuZm9yRWFjaChkZXF1ZXVlSm9iKTtcbiAgICAgIH1cbiAgICAgIGxvb2t1cFtrZXldLnJlbW92ZSgpO1xuICAgICAgbG9va3VwW2tleV0gPSBudWxsO1xuICAgICAgZGVsZXRlIGxvb2t1cFtrZXldO1xuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1vdmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgW2tleUluU3BvdCwga2V5Rm9yU3BvdF0gPSBtb3Zlc1tpXTtcbiAgICAgIGxldCBlbEluU3BvdCA9IGxvb2t1cFtrZXlJblNwb3RdO1xuICAgICAgbGV0IGVsRm9yU3BvdCA9IGxvb2t1cFtrZXlGb3JTcG90XTtcbiAgICAgIGxldCBtYXJrZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgbXV0YXRlRG9tKCgpID0+IHtcbiAgICAgICAgaWYgKCFlbEZvclNwb3QpXG4gICAgICAgICAgd2FybihgeC1mb3IgXCI6a2V5XCIgaXMgdW5kZWZpbmVkIG9yIGludmFsaWRgLCB0ZW1wbGF0ZUVsKTtcbiAgICAgICAgZWxGb3JTcG90LmFmdGVyKG1hcmtlcik7XG4gICAgICAgIGVsSW5TcG90LmFmdGVyKGVsRm9yU3BvdCk7XG4gICAgICAgIGVsRm9yU3BvdC5feF9jdXJyZW50SWZFbCAmJiBlbEZvclNwb3QuYWZ0ZXIoZWxGb3JTcG90Ll94X2N1cnJlbnRJZkVsKTtcbiAgICAgICAgbWFya2VyLmJlZm9yZShlbEluU3BvdCk7XG4gICAgICAgIGVsSW5TcG90Ll94X2N1cnJlbnRJZkVsICYmIGVsSW5TcG90LmFmdGVyKGVsSW5TcG90Ll94X2N1cnJlbnRJZkVsKTtcbiAgICAgICAgbWFya2VyLnJlbW92ZSgpO1xuICAgICAgfSk7XG4gICAgICBlbEZvclNwb3QuX3hfcmVmcmVzaFhGb3JTY29wZShzY29wZXNba2V5cy5pbmRleE9mKGtleUZvclNwb3QpXSk7XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWRkcy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IFtsYXN0S2V5MiwgaW5kZXhdID0gYWRkc1tpXTtcbiAgICAgIGxldCBsYXN0RWwgPSBsYXN0S2V5MiA9PT0gXCJ0ZW1wbGF0ZVwiID8gdGVtcGxhdGVFbCA6IGxvb2t1cFtsYXN0S2V5Ml07XG4gICAgICBpZiAobGFzdEVsLl94X2N1cnJlbnRJZkVsKVxuICAgICAgICBsYXN0RWwgPSBsYXN0RWwuX3hfY3VycmVudElmRWw7XG4gICAgICBsZXQgc2NvcGUyID0gc2NvcGVzW2luZGV4XTtcbiAgICAgIGxldCBrZXkgPSBrZXlzW2luZGV4XTtcbiAgICAgIGxldCBjbG9uZTIgPSBkb2N1bWVudC5pbXBvcnROb2RlKHRlbXBsYXRlRWwuY29udGVudCwgdHJ1ZSkuZmlyc3RFbGVtZW50Q2hpbGQ7XG4gICAgICBsZXQgcmVhY3RpdmVTY29wZSA9IHJlYWN0aXZlKHNjb3BlMik7XG4gICAgICBhZGRTY29wZVRvTm9kZShjbG9uZTIsIHJlYWN0aXZlU2NvcGUsIHRlbXBsYXRlRWwpO1xuICAgICAgY2xvbmUyLl94X3JlZnJlc2hYRm9yU2NvcGUgPSAobmV3U2NvcGUpID0+IHtcbiAgICAgICAgT2JqZWN0LmVudHJpZXMobmV3U2NvcGUpLmZvckVhY2goKFtrZXkyLCB2YWx1ZV0pID0+IHtcbiAgICAgICAgICByZWFjdGl2ZVNjb3BlW2tleTJdID0gdmFsdWU7XG4gICAgICAgIH0pO1xuICAgICAgfTtcbiAgICAgIG11dGF0ZURvbSgoKSA9PiB7XG4gICAgICAgIGxhc3RFbC5hZnRlcihjbG9uZTIpO1xuICAgICAgICBpbml0VHJlZShjbG9uZTIpO1xuICAgICAgfSk7XG4gICAgICBpZiAodHlwZW9mIGtleSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICB3YXJuKFwieC1mb3Iga2V5IGNhbm5vdCBiZSBhbiBvYmplY3QsIGl0IG11c3QgYmUgYSBzdHJpbmcgb3IgYW4gaW50ZWdlclwiLCB0ZW1wbGF0ZUVsKTtcbiAgICAgIH1cbiAgICAgIGxvb2t1cFtrZXldID0gY2xvbmUyO1xuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNhbWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsb29rdXBbc2FtZXNbaV1dLl94X3JlZnJlc2hYRm9yU2NvcGUoc2NvcGVzW2tleXMuaW5kZXhPZihzYW1lc1tpXSldKTtcbiAgICB9XG4gICAgdGVtcGxhdGVFbC5feF9wcmV2S2V5cyA9IGtleXM7XG4gIH0pO1xufVxuZnVuY3Rpb24gcGFyc2VGb3JFeHByZXNzaW9uKGV4cHJlc3Npb24pIHtcbiAgbGV0IGZvckl0ZXJhdG9yUkUgPSAvLChbXixcXH1cXF1dKikoPzosKFteLFxcfVxcXV0qKSk/JC87XG4gIGxldCBzdHJpcFBhcmVuc1JFID0gL15cXHMqXFwofFxcKVxccyokL2c7XG4gIGxldCBmb3JBbGlhc1JFID0gLyhbXFxzXFxTXSo/KVxccysoPzppbnxvZilcXHMrKFtcXHNcXFNdKikvO1xuICBsZXQgaW5NYXRjaCA9IGV4cHJlc3Npb24ubWF0Y2goZm9yQWxpYXNSRSk7XG4gIGlmICghaW5NYXRjaClcbiAgICByZXR1cm47XG4gIGxldCByZXMgPSB7fTtcbiAgcmVzLml0ZW1zID0gaW5NYXRjaFsyXS50cmltKCk7XG4gIGxldCBpdGVtID0gaW5NYXRjaFsxXS5yZXBsYWNlKHN0cmlwUGFyZW5zUkUsIFwiXCIpLnRyaW0oKTtcbiAgbGV0IGl0ZXJhdG9yTWF0Y2ggPSBpdGVtLm1hdGNoKGZvckl0ZXJhdG9yUkUpO1xuICBpZiAoaXRlcmF0b3JNYXRjaCkge1xuICAgIHJlcy5pdGVtID0gaXRlbS5yZXBsYWNlKGZvckl0ZXJhdG9yUkUsIFwiXCIpLnRyaW0oKTtcbiAgICByZXMuaW5kZXggPSBpdGVyYXRvck1hdGNoWzFdLnRyaW0oKTtcbiAgICBpZiAoaXRlcmF0b3JNYXRjaFsyXSkge1xuICAgICAgcmVzLmNvbGxlY3Rpb24gPSBpdGVyYXRvck1hdGNoWzJdLnRyaW0oKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmVzLml0ZW0gPSBpdGVtO1xuICB9XG4gIHJldHVybiByZXM7XG59XG5mdW5jdGlvbiBnZXRJdGVyYXRpb25TY29wZVZhcmlhYmxlcyhpdGVyYXRvck5hbWVzLCBpdGVtLCBpbmRleCwgaXRlbXMpIHtcbiAgbGV0IHNjb3BlVmFyaWFibGVzID0ge307XG4gIGlmICgvXlxcWy4qXFxdJC8udGVzdChpdGVyYXRvck5hbWVzLml0ZW0pICYmIEFycmF5LmlzQXJyYXkoaXRlbSkpIHtcbiAgICBsZXQgbmFtZXMgPSBpdGVyYXRvck5hbWVzLml0ZW0ucmVwbGFjZShcIltcIiwgXCJcIikucmVwbGFjZShcIl1cIiwgXCJcIikuc3BsaXQoXCIsXCIpLm1hcCgoaSkgPT4gaS50cmltKCkpO1xuICAgIG5hbWVzLmZvckVhY2goKG5hbWUsIGkpID0+IHtcbiAgICAgIHNjb3BlVmFyaWFibGVzW25hbWVdID0gaXRlbVtpXTtcbiAgICB9KTtcbiAgfSBlbHNlIGlmICgvXlxcey4qXFx9JC8udGVzdChpdGVyYXRvck5hbWVzLml0ZW0pICYmICFBcnJheS5pc0FycmF5KGl0ZW0pICYmIHR5cGVvZiBpdGVtID09PSBcIm9iamVjdFwiKSB7XG4gICAgbGV0IG5hbWVzID0gaXRlcmF0b3JOYW1lcy5pdGVtLnJlcGxhY2UoXCJ7XCIsIFwiXCIpLnJlcGxhY2UoXCJ9XCIsIFwiXCIpLnNwbGl0KFwiLFwiKS5tYXAoKGkpID0+IGkudHJpbSgpKTtcbiAgICBuYW1lcy5mb3JFYWNoKChuYW1lKSA9PiB7XG4gICAgICBzY29wZVZhcmlhYmxlc1tuYW1lXSA9IGl0ZW1bbmFtZV07XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgc2NvcGVWYXJpYWJsZXNbaXRlcmF0b3JOYW1lcy5pdGVtXSA9IGl0ZW07XG4gIH1cbiAgaWYgKGl0ZXJhdG9yTmFtZXMuaW5kZXgpXG4gICAgc2NvcGVWYXJpYWJsZXNbaXRlcmF0b3JOYW1lcy5pbmRleF0gPSBpbmRleDtcbiAgaWYgKGl0ZXJhdG9yTmFtZXMuY29sbGVjdGlvbilcbiAgICBzY29wZVZhcmlhYmxlc1tpdGVyYXRvck5hbWVzLmNvbGxlY3Rpb25dID0gaXRlbXM7XG4gIHJldHVybiBzY29wZVZhcmlhYmxlcztcbn1cbmZ1bmN0aW9uIGlzTnVtZXJpYzMoc3ViamVjdCkge1xuICByZXR1cm4gIUFycmF5LmlzQXJyYXkoc3ViamVjdCkgJiYgIWlzTmFOKHN1YmplY3QpO1xufVxuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvZGlyZWN0aXZlcy94LXJlZi5qc1xuZnVuY3Rpb24gaGFuZGxlcjMoKSB7XG59XG5oYW5kbGVyMy5pbmxpbmUgPSAoZWwsIHsgZXhwcmVzc2lvbiB9LCB7IGNsZWFudXA6IGNsZWFudXAyIH0pID0+IHtcbiAgbGV0IHJvb3QgPSBjbG9zZXN0Um9vdChlbCk7XG4gIGlmICghcm9vdC5feF9yZWZzKVxuICAgIHJvb3QuX3hfcmVmcyA9IHt9O1xuICByb290Ll94X3JlZnNbZXhwcmVzc2lvbl0gPSBlbDtcbiAgY2xlYW51cDIoKCkgPT4gZGVsZXRlIHJvb3QuX3hfcmVmc1tleHByZXNzaW9uXSk7XG59O1xuZGlyZWN0aXZlKFwicmVmXCIsIGhhbmRsZXIzKTtcblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL2RpcmVjdGl2ZXMveC1pZi5qc1xuZGlyZWN0aXZlKFwiaWZcIiwgKGVsLCB7IGV4cHJlc3Npb24gfSwgeyBlZmZlY3Q6IGVmZmVjdDMsIGNsZWFudXA6IGNsZWFudXAyIH0pID0+IHtcbiAgaWYgKGVsLnRhZ05hbWUudG9Mb3dlckNhc2UoKSAhPT0gXCJ0ZW1wbGF0ZVwiKVxuICAgIHdhcm4oXCJ4LWlmIGNhbiBvbmx5IGJlIHVzZWQgb24gYSA8dGVtcGxhdGU+IHRhZ1wiLCBlbCk7XG4gIGxldCBldmFsdWF0ZTIgPSBldmFsdWF0ZUxhdGVyKGVsLCBleHByZXNzaW9uKTtcbiAgbGV0IHNob3cgPSAoKSA9PiB7XG4gICAgaWYgKGVsLl94X2N1cnJlbnRJZkVsKVxuICAgICAgcmV0dXJuIGVsLl94X2N1cnJlbnRJZkVsO1xuICAgIGxldCBjbG9uZTIgPSBlbC5jb250ZW50LmNsb25lTm9kZSh0cnVlKS5maXJzdEVsZW1lbnRDaGlsZDtcbiAgICBhZGRTY29wZVRvTm9kZShjbG9uZTIsIHt9LCBlbCk7XG4gICAgbXV0YXRlRG9tKCgpID0+IHtcbiAgICAgIGVsLmFmdGVyKGNsb25lMik7XG4gICAgICBpbml0VHJlZShjbG9uZTIpO1xuICAgIH0pO1xuICAgIGVsLl94X2N1cnJlbnRJZkVsID0gY2xvbmUyO1xuICAgIGVsLl94X3VuZG9JZiA9ICgpID0+IHtcbiAgICAgIHdhbGsoY2xvbmUyLCAobm9kZSkgPT4ge1xuICAgICAgICBpZiAoISFub2RlLl94X2VmZmVjdHMpIHtcbiAgICAgICAgICBub2RlLl94X2VmZmVjdHMuZm9yRWFjaChkZXF1ZXVlSm9iKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBjbG9uZTIucmVtb3ZlKCk7XG4gICAgICBkZWxldGUgZWwuX3hfY3VycmVudElmRWw7XG4gICAgfTtcbiAgICByZXR1cm4gY2xvbmUyO1xuICB9O1xuICBsZXQgaGlkZSA9ICgpID0+IHtcbiAgICBpZiAoIWVsLl94X3VuZG9JZilcbiAgICAgIHJldHVybjtcbiAgICBlbC5feF91bmRvSWYoKTtcbiAgICBkZWxldGUgZWwuX3hfdW5kb0lmO1xuICB9O1xuICBlZmZlY3QzKCgpID0+IGV2YWx1YXRlMigodmFsdWUpID0+IHtcbiAgICB2YWx1ZSA/IHNob3coKSA6IGhpZGUoKTtcbiAgfSkpO1xuICBjbGVhbnVwMigoKSA9PiBlbC5feF91bmRvSWYgJiYgZWwuX3hfdW5kb0lmKCkpO1xufSk7XG5cbi8vIHBhY2thZ2VzL2FscGluZWpzL3NyYy9kaXJlY3RpdmVzL3gtaWQuanNcbmRpcmVjdGl2ZShcImlkXCIsIChlbCwgeyBleHByZXNzaW9uIH0sIHsgZXZhbHVhdGU6IGV2YWx1YXRlMiB9KSA9PiB7XG4gIGxldCBuYW1lcyA9IGV2YWx1YXRlMihleHByZXNzaW9uKTtcbiAgbmFtZXMuZm9yRWFjaCgobmFtZSkgPT4gc2V0SWRSb290KGVsLCBuYW1lKSk7XG59KTtcblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL2RpcmVjdGl2ZXMveC1vbi5qc1xubWFwQXR0cmlidXRlcyhzdGFydGluZ1dpdGgoXCJAXCIsIGludG8ocHJlZml4KFwib246XCIpKSkpO1xuZGlyZWN0aXZlKFwib25cIiwgc2tpcER1cmluZ0Nsb25lKChlbCwgeyB2YWx1ZSwgbW9kaWZpZXJzLCBleHByZXNzaW9uIH0sIHsgY2xlYW51cDogY2xlYW51cDIgfSkgPT4ge1xuICBsZXQgZXZhbHVhdGUyID0gZXhwcmVzc2lvbiA/IGV2YWx1YXRlTGF0ZXIoZWwsIGV4cHJlc3Npb24pIDogKCkgPT4ge1xuICB9O1xuICBpZiAoZWwudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSBcInRlbXBsYXRlXCIpIHtcbiAgICBpZiAoIWVsLl94X2ZvcndhcmRFdmVudHMpXG4gICAgICBlbC5feF9mb3J3YXJkRXZlbnRzID0gW107XG4gICAgaWYgKCFlbC5feF9mb3J3YXJkRXZlbnRzLmluY2x1ZGVzKHZhbHVlKSlcbiAgICAgIGVsLl94X2ZvcndhcmRFdmVudHMucHVzaCh2YWx1ZSk7XG4gIH1cbiAgbGV0IHJlbW92ZUxpc3RlbmVyID0gb24oZWwsIHZhbHVlLCBtb2RpZmllcnMsIChlKSA9PiB7XG4gICAgZXZhbHVhdGUyKCgpID0+IHtcbiAgICB9LCB7IHNjb3BlOiB7IFwiJGV2ZW50XCI6IGUgfSwgcGFyYW1zOiBbZV0gfSk7XG4gIH0pO1xuICBjbGVhbnVwMigoKSA9PiByZW1vdmVMaXN0ZW5lcigpKTtcbn0pKTtcblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL2RpcmVjdGl2ZXMvaW5kZXguanNcbndhcm5NaXNzaW5nUGx1Z2luRGlyZWN0aXZlKFwiQ29sbGFwc2VcIiwgXCJjb2xsYXBzZVwiLCBcImNvbGxhcHNlXCIpO1xud2Fybk1pc3NpbmdQbHVnaW5EaXJlY3RpdmUoXCJJbnRlcnNlY3RcIiwgXCJpbnRlcnNlY3RcIiwgXCJpbnRlcnNlY3RcIik7XG53YXJuTWlzc2luZ1BsdWdpbkRpcmVjdGl2ZShcIkZvY3VzXCIsIFwidHJhcFwiLCBcImZvY3VzXCIpO1xud2Fybk1pc3NpbmdQbHVnaW5EaXJlY3RpdmUoXCJNYXNrXCIsIFwibWFza1wiLCBcIm1hc2tcIik7XG5mdW5jdGlvbiB3YXJuTWlzc2luZ1BsdWdpbkRpcmVjdGl2ZShuYW1lLCBkaXJlY3RpdmVOYW1lLCBzbHVnKSB7XG4gIGRpcmVjdGl2ZShkaXJlY3RpdmVOYW1lLCAoZWwpID0+IHdhcm4oYFlvdSBjYW4ndCB1c2UgW3gtJHtkaXJlY3RpdmVOYW1lfV0gd2l0aG91dCBmaXJzdCBpbnN0YWxsaW5nIHRoZSBcIiR7bmFtZX1cIiBwbHVnaW4gaGVyZTogaHR0cHM6Ly9hbHBpbmVqcy5kZXYvcGx1Z2lucy8ke3NsdWd9YCwgZWwpKTtcbn1cblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL2luZGV4LmpzXG5hbHBpbmVfZGVmYXVsdC5zZXRFdmFsdWF0b3Iobm9ybWFsRXZhbHVhdG9yKTtcbmFscGluZV9kZWZhdWx0LnNldFJlYWN0aXZpdHlFbmdpbmUoeyByZWFjdGl2ZTogcmVhY3RpdmUyLCBlZmZlY3Q6IGVmZmVjdDIsIHJlbGVhc2U6IHN0b3AsIHJhdzogdG9SYXcgfSk7XG52YXIgc3JjX2RlZmF1bHQgPSBhbHBpbmVfZGVmYXVsdDtcblxuLy8gcGFja2FnZXMvYWxwaW5lanMvYnVpbGRzL21vZHVsZS5qc1xudmFyIG1vZHVsZV9kZWZhdWx0ID0gc3JjX2RlZmF1bHQ7XG5leHBvcnQge1xuICBtb2R1bGVfZGVmYXVsdCBhcyBkZWZhdWx0XG59O1xuIiwgIi8vIHBhY2thZ2VzL3BlcnNpc3Qvc3JjL2luZGV4LmpzXG5mdW5jdGlvbiBzcmNfZGVmYXVsdChBbHBpbmUpIHtcbiAgbGV0IHBlcnNpc3QgPSAoKSA9PiB7XG4gICAgbGV0IGFsaWFzO1xuICAgIGxldCBzdG9yYWdlO1xuICAgIHRyeSB7XG4gICAgICBzdG9yYWdlID0gbG9jYWxTdG9yYWdlO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgICBjb25zb2xlLndhcm4oXCJBbHBpbmU6ICRwZXJzaXN0IGlzIHVzaW5nIHRlbXBvcmFyeSBzdG9yYWdlIHNpbmNlIGxvY2FsU3RvcmFnZSBpcyB1bmF2YWlsYWJsZS5cIik7XG4gICAgICBsZXQgZHVtbXkgPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpO1xuICAgICAgc3RvcmFnZSA9IHtcbiAgICAgICAgZ2V0SXRlbTogZHVtbXkuZ2V0LmJpbmQoZHVtbXkpLFxuICAgICAgICBzZXRJdGVtOiBkdW1teS5zZXQuYmluZChkdW1teSlcbiAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiBBbHBpbmUuaW50ZXJjZXB0b3IoKGluaXRpYWxWYWx1ZSwgZ2V0dGVyLCBzZXR0ZXIsIHBhdGgsIGtleSkgPT4ge1xuICAgICAgbGV0IGxvb2t1cCA9IGFsaWFzIHx8IGBfeF8ke3BhdGh9YDtcbiAgICAgIGxldCBpbml0aWFsID0gc3RvcmFnZUhhcyhsb29rdXAsIHN0b3JhZ2UpID8gc3RvcmFnZUdldChsb29rdXAsIHN0b3JhZ2UpIDogaW5pdGlhbFZhbHVlO1xuICAgICAgc2V0dGVyKGluaXRpYWwpO1xuICAgICAgQWxwaW5lLmVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGxldCB2YWx1ZSA9IGdldHRlcigpO1xuICAgICAgICBzdG9yYWdlU2V0KGxvb2t1cCwgdmFsdWUsIHN0b3JhZ2UpO1xuICAgICAgICBzZXR0ZXIodmFsdWUpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gaW5pdGlhbDtcbiAgICB9LCAoZnVuYykgPT4ge1xuICAgICAgZnVuYy5hcyA9IChrZXkpID0+IHtcbiAgICAgICAgYWxpYXMgPSBrZXk7XG4gICAgICAgIHJldHVybiBmdW5jO1xuICAgICAgfSwgZnVuYy51c2luZyA9ICh0YXJnZXQpID0+IHtcbiAgICAgICAgc3RvcmFnZSA9IHRhcmdldDtcbiAgICAgICAgcmV0dXJuIGZ1bmM7XG4gICAgICB9O1xuICAgIH0pO1xuICB9O1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQWxwaW5lLCBcIiRwZXJzaXN0XCIsIHsgZ2V0OiAoKSA9PiBwZXJzaXN0KCkgfSk7XG4gIEFscGluZS5tYWdpYyhcInBlcnNpc3RcIiwgcGVyc2lzdCk7XG4gIEFscGluZS5wZXJzaXN0ID0gKGtleSwgeyBnZXQsIHNldCB9LCBzdG9yYWdlID0gbG9jYWxTdG9yYWdlKSA9PiB7XG4gICAgbGV0IGluaXRpYWwgPSBzdG9yYWdlSGFzKGtleSwgc3RvcmFnZSkgPyBzdG9yYWdlR2V0KGtleSwgc3RvcmFnZSkgOiBnZXQoKTtcbiAgICBzZXQoaW5pdGlhbCk7XG4gICAgQWxwaW5lLmVmZmVjdCgoKSA9PiB7XG4gICAgICBsZXQgdmFsdWUgPSBnZXQoKTtcbiAgICAgIHN0b3JhZ2VTZXQoa2V5LCB2YWx1ZSwgc3RvcmFnZSk7XG4gICAgICBzZXQodmFsdWUpO1xuICAgIH0pO1xuICB9O1xufVxuZnVuY3Rpb24gc3RvcmFnZUhhcyhrZXksIHN0b3JhZ2UpIHtcbiAgcmV0dXJuIHN0b3JhZ2UuZ2V0SXRlbShrZXkpICE9PSBudWxsO1xufVxuZnVuY3Rpb24gc3RvcmFnZUdldChrZXksIHN0b3JhZ2UpIHtcbiAgcmV0dXJuIEpTT04ucGFyc2Uoc3RvcmFnZS5nZXRJdGVtKGtleSwgc3RvcmFnZSkpO1xufVxuZnVuY3Rpb24gc3RvcmFnZVNldChrZXksIHZhbHVlLCBzdG9yYWdlKSB7XG4gIHN0b3JhZ2Uuc2V0SXRlbShrZXksIEpTT04uc3RyaW5naWZ5KHZhbHVlKSk7XG59XG5cbi8vIHBhY2thZ2VzL3BlcnNpc3QvYnVpbGRzL21vZHVsZS5qc1xudmFyIG1vZHVsZV9kZWZhdWx0ID0gc3JjX2RlZmF1bHQ7XG5leHBvcnQge1xuICBtb2R1bGVfZGVmYXVsdCBhcyBkZWZhdWx0XG59O1xuIiwgImltcG9ydCBBbHBpbmUgZnJvbSBcImFscGluZWpzXCI7XG5pbXBvcnQgcGVyc2lzdCBmcm9tIFwiQGFscGluZWpzL3BlcnNpc3RcIjtcbmltcG9ydCBIdG14IGZyb20gXCJodG14Lm9yZ1wiO1xuaW1wb3J0IGNhcnRTdG9yZSBmcm9tIFwiLi9jYXJ0U3RvcmVcIjtcbmltcG9ydCB7IGZvcm1hdEN1cnJlbmN5IH0gZnJvbSBcIi4vY3VzdG9tLWFscGluZVwiO1xuaW1wb3J0IHsganNvbkVuYyB9IGZyb20gXCIuL2N1c3RvbS1odG14XCI7XG5pbXBvcnQgdXNlQ2FydCBmcm9tIFwiLi91c2VDYXJ0XCI7XG5pbXBvcnQgdXNlQ2FydFN1bW1hcnkgZnJvbSBcIi4vdXNlQ2FydFN1bW1hcnlcIjtcblxud2luZG93Lkh0bXggPSBIdG14O1xuSHRteC5kZWZpbmVFeHRlbnNpb24oJ2pzb24tZW5jJywganNvbkVuYyk7XG5cbndpbmRvdy5BbHBpbmUgPSBBbHBpbmU7XG5BbHBpbmUuZGlyZWN0aXZlKFwiY3VycmVuY3lcIiwgZm9ybWF0Q3VycmVuY3kpO1xuQWxwaW5lLnBsdWdpbihwZXJzaXN0KTtcbkFscGluZS5zdG9yZShcImNhcnRTdG9yZVwiLCBjYXJ0U3RvcmUoQWxwaW5lKSk7XG5BbHBpbmUuZGF0YShcInVzZUNhcnRcIiwgdXNlQ2FydCk7XG5BbHBpbmUuZGF0YShcInVzZUNhcnRTdW1tYXJ5XCIsIHVzZUNhcnRTdW1tYXJ5KTtcbkFscGluZS5zdGFydCgpO1xuIiwgImV4cG9ydCBkZWZhdWx0IChBbHBpbmUpID0+ICh7IFxuICBcbiAgaXRlbXM6IEFscGluZS4kcGVyc2lzdChbXSksXG5cbiAgZ2V0IGNhcnRUb3RhbCgpIHtcbiAgICByZXR1cm4gdGhpcy5pdGVtcy5yZWR1Y2UoKGEsaSkgPT4gYSArPSBpLnByaWNlICogaS5xdWFudGl0eSwgMCk7XG4gIH0sXG5cbiAgZ2V0IGNhcnRGb3JTdHJpcGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXRlbXMubWFwKChpdGVtKSA9PiAoe1xuICAgICAgc2t1OiBpdGVtLnNrdSxcbiAgICAgIHByaWNlX2lkOiBpdGVtLnN0cmlwZV9wcmljZV9pZCxcbiAgICAgIHF1YW50aXR5OiBpdGVtLnF1YW50aXR5LFxuICAgIH0pKTtcbiAgfSxcblxuICBmaW5kSXRlbShpdGVtVG9GaW5kKSB7XG4gICAgcmV0dXJuIHsgXG4gICAgICBpdGVtOiB0aGlzLml0ZW1zLmZpbmQoaSA9PiBpLnNrdSA9PT0gaXRlbVRvRmluZC5za3UpLFxuICAgICAgaXRlbUluZGV4OiB0aGlzLml0ZW1zLmZpbmRJbmRleChpID0+IGkuc2t1ID09PSBpdGVtVG9GaW5kLnNrdSlcbiAgICB9O1xuICB9LFxuXG4gIGdldEl0ZW1Qcm9wKGl0ZW1Ub0dldCwgcHJvcCA9IFwicXVhbnRpdHlcIikge1xuICAgIGNvbnN0IHsgaXRlbSB9ID0gdGhpcy5maW5kSXRlbShpdGVtVG9HZXQpO1xuICAgIHJldHVybiBpdGVtPy5bcHJvcF07XG4gIH0sXG5cbiAgYWRkSXRlbShpdGVtVG9BZGQpIHtcbiAgICBjb25zdCB7IGl0ZW0gfSA9IHRoaXMuZmluZEl0ZW0oaXRlbVRvQWRkKTsgXG4gICAgaXRlbVxuICAgICAgPyBpdGVtLnF1YW50aXR5ID0gTWF0aC5taW4oMTAsIGl0ZW0ucXVhbnRpdHkgKzEpXG4gICAgICA6IHRoaXMuaXRlbXMucHVzaCh7IC4uLml0ZW1Ub0FkZCwgcXVhbnRpdHk6IDEgfSlcbiAgfSxcblxuICByZW1vdmVJdGVtKGl0ZW1Ub1JlbW92ZSwgd2lwZU91dCA9IGZhbHNlKSB7XG4gICAgY29uc3QgeyBpdGVtLCBpdGVtSW5kZXggfSA9IHRoaXMuZmluZEl0ZW0oaXRlbVRvUmVtb3ZlKTtcbiAgICBsZXQgdXBkYXRlZFdpcGVPdXQgPSB3aXBlT3V0IHx8IGl0ZW0/LnF1YW50aXR5ID09PSAxO1xuICAgIGlmIChpdGVtICYmICF1cGRhdGVkV2lwZU91dCkgaXRlbS5xdWFudGl0eSAtPSAxO1xuICAgIGlmIChpdGVtICYmIHVwZGF0ZWRXaXBlT3V0KSB0aGlzLml0ZW1zLnNwbGljZShpdGVtSW5kZXgsIDEpO1xuICB9LFxuXG4gIHdpcGVDYXJ0KCkge1xuICAgIHRoaXMuaXRlbXMgPSBbXTtcbiAgfVxufSkiLCAiZXhwb3J0IGNvbnN0IGZvcm1hdEN1cnJlbmN5ID0gKGVsLCB7IGV4cHJlc3Npb24gfSwgeyBldmFsdWF0ZUxhdGVyLCBlZmZlY3QgfSkgPT4ge1xuICBjb25zdCBmb3JtYXRDdXJyZW5jeSA9IGV2YWx1YXRlTGF0ZXIoZXhwcmVzc2lvbik7XG5cbiAgZWZmZWN0KCgpID0+IHtcbiAgICBmb3JtYXRDdXJyZW5jeShhbW91bnQgPT4ge1xuICAgICAgY29uc3QgZm9ybWF0dGVkQW1vdW50ID0gdHlwZW9mIGFtb3VudCA9PSBcIm51bWJlclwiXG4gICAgICAgID8gYCQke2Ftb3VudC50b0ZpeGVkKDIpfWBcbiAgICAgICAgOiBhbW91bnQ7XG4gICAgICBlbC5pbm5lckhUTUwgPSBmb3JtYXR0ZWRBbW91bnQ7XG4gICAgfSlcbiAgICBcbiAgfSk7XG59IiwgImV4cG9ydCBjb25zdCBqc29uRW5jID0ge1xuICBvbkV2ZW50OiBmdW5jdGlvbiAobmFtZSwgZXZ0KSB7XG4gICAgaWYgKG5hbWUgPT09IFwiaHRteDpjb25maWdSZXF1ZXN0XCIpIHtcbiAgICAgIGV2dC5kZXRhaWwuaGVhZGVyc1tcIkNvbnRlbnQtVHlwZVwiXSA9IFwiYXBwbGljYXRpb24vanNvblwiO1xuICAgIH1cbiAgfSxcbiAgZW5jb2RlUGFyYW1ldGVyczogZnVuY3Rpb24gKHhociwgcGFyYW1ldGVycywgZWx0KSB7XG4gICAgeGhyLm92ZXJyaWRlTWltZVR5cGUoXCJ0ZXh0L2pzb25cIik7XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHBhcmFtZXRlcnMpO1xuICB9LFxufTtcbiIsICJleHBvcnQgZGVmYXVsdCAoKSA9PiAoe1xuICBjYXJ0OiBudWxsLFxuXG4gIGluaXQoKSB7XG4gICAgdGhpcy5jYXJ0ID0gdGhpcy4kc3RvcmUuY2FydFN0b3JlO1xuICB9LFxufSkiLCAiZXhwb3J0IGRlZmF1bHQgKCkgPT4gKHtcblxuICB0b3RhbDogMCxcbiAgdGltZW91dElkOiBudWxsLFxuXG4gIGluaXQoKSB7XG4gICAgY29uc3QgZ2xvd0NsYXNzID0gXCJiZy1ncmVlbi0yMDBcIjtcbiAgICB0aGlzLnRvdGFsID0gdGhpcy4kc3RvcmUuY2FydFN0b3JlLmNhcnRUb3RhbDtcbiAgICBcbiAgICB0aGlzLiR3YXRjaChcIiRzdG9yZS5jYXJ0U3RvcmUuaXRlbXNcIiwgKCkgPT4ge1xuICAgICAgdGhpcy50b3RhbCA9IHRoaXMuJHN0b3JlLmNhcnRTdG9yZS5jYXJ0VG90YWw7XG4gICAgICB0aGlzLiRlbC5jbGFzc0xpc3QuYWRkKGdsb3dDbGFzcyk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy4kZWwuY2xhc3NMaXN0LnJlbW92ZShnbG93Q2xhc3MpO1xuICAgICAgfSwgMzAwKTtcbiAgICB9KVxuICB9LFxuXG4gIGRlc3Ryb3koKSB7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dElkKVxuICB9XG59KSJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQSxPQUFDLFNBQVNBLElBQUVDLElBQUU7QUFBQyxZQUFHLE9BQU8sV0FBUyxjQUFZLE9BQU8sS0FBSTtBQUFDLGlCQUFPLENBQUMsR0FBRUEsRUFBQztBQUFBLFFBQUMsV0FBUyxPQUFPLFdB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Q0wsWUFBTSxZQUFZO0FBQ2xCLFdBQUssUUFBUSxLQUFLLE9BQU8sVUFBVTtBQUVuQyxXQUFLLE9BQU8sMEJBQTBCLE1BQU07QUFDMUMsYUFBSyxRQUFRLEtBQUssT0FBTyxVQUFVO0FBQ25DLGFBQUssSUFBSSxVQUFVLElBQUksU0FBUztBQUNoQyxtQkFBVyxNQUFNO0FBQ2YsZUFBSyxJQUFJLFVBQVUsT0FBTyxTQUFTO0FBQUEsUUFDckMsR0FBRyxHQUFHO0FBQUEsTUFDUixDQUFDO0FBQUEsSUFDSDtBQUFBLElBRUEsVUFBVTtBQUNSLG1CQUFhLEtBQUssU0FBUztBQUFBLElBQzdCO0FBQUEsRUFDRjs7O0FMWkEsU0FBTyxPQUFPLFlBQUFDO0FBQ2QsY0FBQUEsUUFBSyxnQkFBZ0IsWUFBWSxPQUFPO0FBRXhDLFNBQU8sU0FBUztBQUNoQixpQkFBTyxVQUFVLFlBQVksY0FBYztBQUMzQyxpQkFBTyxPQUFPQyxlQUFPO0FBQ3JCLGlCQUFPLE1BQU0sYUFBYSxrQkFBVSxjQUFNLENBQUM7QUFDM0MsaUJBQU8sS0FBSyxXQUFXLGVBQU87QUFDOUIsaUJBQU8sS0FBSyxrQkFBa0Isc0JBQWM7QUFDNUMsaUJBQU8sTUFBTTsiLAogICJuYW1lcyI6IFsiZSIsICJ0IiwgInIiLCAibiIsICJpIiwgImEiLCAibyIsICJzIiwgImwiLCAidSIsICJmIiwgImMiLCAiaCIsICJ2IiwgIk0iLCAiWCIsICJkIiwgIkQiLCAiVSIsICJnIiwgIm0iLCAicCIsICJ4IiwgIkIiLCAiRiIsICJWIiwgInkiLCAiYiIsICJ3IiwgImoiLCAiUyIsICJFIiwgIl8iLCAiQyIsICJSIiwgInoiLCAiJCIsICJUIiwgIk8iLCAiVyIsICJxIiwgIkgiLCAiRyIsICJKIiwgIkwiLCAiQSIsICJaIiwgIk4iLCAiSyIsICJJIiwgImsiLCAiUCIsICJZIiwgImkiLCAiZSIsICJhIiwgImIiLCAiXyIsICJjIiwgImwiLCAidiIsICJyIiwgInNyY19kZWZhdWx0IiwgIkFscGluZSIsICJlIiwgImdldCIsICJzZXQiLCAibW9kdWxlX2RlZmF1bHQiLCAiQWxwaW5lIiwgImEiLCAiaSIsICJldmFsdWF0ZUxhdGVyIiwgImVmZmVjdCIsICJmb3JtYXRDdXJyZW5jeSIsICJIdG14IiwgIm1vZHVsZV9kZWZhdWx0Il0KfQo=
