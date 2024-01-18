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

  // node_modules/@alpinejs/intersect/dist/module.esm.js
  function src_default3(Alpine2) {
    Alpine2.directive("intersect", (el, { value, expression, modifiers }, { evaluateLater: evaluateLater2, cleanup: cleanup2 }) => {
      let evaluate2 = evaluateLater2(expression);
      let options = {
        rootMargin: getRootMargin(modifiers),
        threshold: getThreshold(modifiers)
      };
      let observer2 = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting === (value === "leave"))
            return;
          evaluate2();
          modifiers.includes("once") && observer2.disconnect();
        });
      }, options);
      observer2.observe(el);
      cleanup2(() => {
        observer2.disconnect();
      });
    });
  }
  function getThreshold(modifiers) {
    if (modifiers.includes("full"))
      return 0.99;
    if (modifiers.includes("half"))
      return 0.5;
    if (!modifiers.includes("threshold"))
      return 0;
    let threshold = modifiers[modifiers.indexOf("threshold") + 1];
    if (threshold === "100")
      return 1;
    if (threshold === "0")
      return 0;
    return Number(`.${threshold}`);
  }
  function getLengthValue(rawValue) {
    let match = rawValue.match(/^(-?[0-9]+)(px|%)?$/);
    return match ? match[1] + (match[2] || "px") : void 0;
  }
  function getRootMargin(modifiers) {
    const key = "margin";
    const fallback = "0px 0px 0px 0px";
    const index = modifiers.indexOf(key);
    if (index === -1)
      return fallback;
    let values = [];
    for (let i2 = 1; i2 < 5; i2++) {
      values.push(getLengthValue(modifiers[index + i2] || ""));
    }
    values = values.filter((v2) => v2 !== void 0);
    return values.length ? values.join(" ").trim() : fallback;
  }
  var module_default3 = src_default3;

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
  var useCarousel_default = () => ({
    currentSlide: 0,
    numberOfSlides: 0,
    atBeginning: false,
    atEnd: false,
    autoSlideInterval: null,
    baseScroll: 0,
    maxScroll: 0,
    get currentScroll() {
      return this.$refs.slider.scrollLeft;
    },
    init() {
      this.numberOfSlides = this.$refs.slider.children.length;
      this.baseScroll = this.$refs.slider.getBoundingClientRect().width;
      this.maxScroll = this.baseScroll * (this.numberOfSlides - 1);
      this.$watch("currentSlide", (value) => {
        this.$refs.slider.scrollTo({ left: value * this.baseScroll, behavior: "smooth" });
      });
      this.startAutoSlide();
    },
    destroy() {
      this.stopAutoSlide();
    },
    startAutoSlide() {
      this.autoSlideInterval = setInterval(() => {
        this.next();
      }, 555555e3);
    },
    stopAutoSlide() {
      clearInterval(this.autoSlideInterval);
    },
    goToSlide(index) {
      this.currentSlide = index;
    },
    next() {
      if (this.currentSlide + 1 === this.numberOfSlides)
        return this.currentSlide = 0;
      this.currentSlide += 1;
    },
    prev() {
      if (this.currentSlide === 0)
        return this.currentSlide = this.numberOfSlides - 1;
      this.currentSlide -= 1;
    },
    updateButtonStates() {
      let slideEls = this.$refs.slider.children;
      this.atBeginning = slideEls[0] === this.$el;
      this.atEnd = slideEls[slideEls.length - 1] === this.$el;
    },
    focusableWhenVisible: {
      ["x-intersect:enter"]() {
        this.$el.removeAttribute("tabindex");
      },
      ["x-intersect:leave"]() {
        this.$el.setAttribute("tabindex", "-1");
      }
    },
    disableNextAndPreviousButtons: {
      ["x-intersect:enter.threshold.05"]() {
        this.updateButtonStates();
      },
      ["x-intersect:leave.threshold.05"]() {
        this.updateButtonStates();
      }
    }
  });

  // assets/static/js/main.js
  window.Htmx = import_htmx.default;
  import_htmx.default.defineExtension("json-enc", jsonEnc);
  window.Alpine = module_default;
  module_default.directive("currency", formatCurrency);
  module_default.plugin(module_default2);
  module_default.plugin(module_default3);
  module_default.store("cartStore", cartStore_default(module_default));
  module_default.data("useCart", useCart_default);
  module_default.data("useCartSummary", useCartSummary_default);
  module_default.data("useSearch", useSearch_default);
  module_default.data("useCarousel", useCarousel_default);
  module_default.start();
})();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2h0bXgub3JnL2Rpc3QvaHRteC5taW4uanMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2FscGluZWpzL2Rpc3QvbW9kdWxlLmVzbS5qcyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQGFscGluZWpzL3BlcnNpc3QvZGlzdC9tb2R1bGUuZXNtLmpzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9AYWxwaW5lanMvaW50ZXJzZWN0L2Rpc3QvbW9kdWxlLmVzbS5qcyIsICJtYWluLmpzIiwgImNhcnRTdG9yZS5qcyIsICJjdXN0b20tYWxwaW5lLmpzIiwgImN1c3RvbS1odG14LmpzIiwgInVzZUNhcnQuanMiLCAidXNlQ2FydFN1bW1hcnkuanMiLCAidXNlU2VhcmNoLmpzIiwgInVzZUNhcm91c2VsLmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIoZnVuY3Rpb24oZSx0KXtpZih0eXBlb2YgZGVmaW5lPT09XCJmdW5jdGlvblwiJiZkZWZpbmUuYW1kKXtkZWZpbmUoW10sdCl9ZWxzZSBpZih0eXBlb2YgbW9kdWxlPT09XCJvYmplY3RcIiYmbW9kdWxlLmV4cG9ydHMpe21vZHVsZS5leHBvcnRzPXQoKX1lbHNle2UuaHRteD1lLmh0bXh8fHQoKX19KSh0eXBlb2Ygc2VsZiE9PVwidW5kZWZpbmVkXCI/c2VsZjp0aGlzLGZ1bmN0aW9uKCl7cmV0dXJuIGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7dmFyIFE9e29uTG9hZDpGLHByb2Nlc3M6enQsb246ZGUsb2ZmOmdlLHRyaWdnZXI6Y2UsYWpheDpOcixmaW5kOkMsZmluZEFsbDpmLGNsb3Nlc3Q6dix2YWx1ZXM6ZnVuY3Rpb24oZSx0KXt2YXIgcj1kcihlLHR8fFwicG9zdFwiKTtyZXR1cm4gci52YWx1ZXN9LHJlbW92ZTpfLGFkZENsYXNzOnoscmVtb3ZlQ2xhc3M6bix0b2dnbGVDbGFzczokLHRha2VDbGFzczpXLGRlZmluZUV4dGVuc2lvbjpVcixyZW1vdmVFeHRlbnNpb246QnIsbG9nQWxsOlYsbG9nTm9uZTpqLGxvZ2dlcjpudWxsLGNvbmZpZzp7aGlzdG9yeUVuYWJsZWQ6dHJ1ZSxoaXN0b3J5Q2FjaGVTaXplOjEwLHJlZnJlc2hPbkhpc3RvcnlNaXNzOmZhbHNlLGRlZmF1bHRTd2FwU3R5bGU6XCJpbm5lckhUTUxcIixkZWZhdWx0U3dhcERlbGF5OjAsZGVmYXVsdFNldHRsZURlbGF5OjIwLGluY2x1ZGVJbmRpY2F0b3JTdHlsZXM6dHJ1ZSxpbmRpY2F0b3JDbGFzczpcImh0bXgtaW5kaWNhdG9yXCIscmVxdWVzdENsYXNzOlwiaHRteC1yZXF1ZXN0XCIsYWRkZWRDbGFzczpcImh0bXgtYWRkZWRcIixzZXR0bGluZ0NsYXNzOlwiaHRteC1zZXR0bGluZ1wiLHN3YXBwaW5nQ2xhc3M6XCJodG14LXN3YXBwaW5nXCIsYWxsb3dFdmFsOnRydWUsYWxsb3dTY3JpcHRUYWdzOnRydWUsaW5saW5lU2NyaXB0Tm9uY2U6XCJcIixhdHRyaWJ1dGVzVG9TZXR0bGU6W1wiY2xhc3NcIixcInN0eWxlXCIsXCJ3aWR0aFwiLFwiaGVpZ2h0XCJdLHdpdGhDcmVkZW50aWFsczpmYWxzZSx0aW1lb3V0OjAsd3NSZWNvbm5lY3REZWxheTpcImZ1bGwtaml0dGVyXCIsd3NCaW5hcnlUeXBlOlwiYmxvYlwiLGRpc2FibGVTZWxlY3RvcjpcIltoeC1kaXNhYmxlXSwgW2RhdGEtaHgtZGlzYWJsZV1cIix1c2VUZW1wbGF0ZUZyYWdtZW50czpmYWxzZSxzY3JvbGxCZWhhdmlvcjpcInNtb290aFwiLGRlZmF1bHRGb2N1c1Njcm9sbDpmYWxzZSxnZXRDYWNoZUJ1c3RlclBhcmFtOmZhbHNlLGdsb2JhbFZpZXdUcmFuc2l0aW9uczpmYWxzZSxtZXRob2RzVGhhdFVzZVVybFBhcmFtczpbXCJnZXRcIl0sc2VsZlJlcXVlc3RzT25seTpmYWxzZSxpZ25vcmVUaXRsZTpmYWxzZSxzY3JvbGxJbnRvVmlld09uQm9vc3Q6dHJ1ZSx0cmlnZ2VyU3BlY3NDYWNoZTpudWxsfSxwYXJzZUludGVydmFsOmQsXzp0LGNyZWF0ZUV2ZW50U291cmNlOmZ1bmN0aW9uKGUpe3JldHVybiBuZXcgRXZlbnRTb3VyY2UoZSx7d2l0aENyZWRlbnRpYWxzOnRydWV9KX0sY3JlYXRlV2ViU29ja2V0OmZ1bmN0aW9uKGUpe3ZhciB0PW5ldyBXZWJTb2NrZXQoZSxbXSk7dC5iaW5hcnlUeXBlPVEuY29uZmlnLndzQmluYXJ5VHlwZTtyZXR1cm4gdH0sdmVyc2lvbjpcIjEuOS4xMFwifTt2YXIgcj17YWRkVHJpZ2dlckhhbmRsZXI6THQsYm9keUNvbnRhaW5zOnNlLGNhbkFjY2Vzc0xvY2FsU3RvcmFnZTpVLGZpbmRUaGlzRWxlbWVudDp4ZSxmaWx0ZXJWYWx1ZXM6eXIsaGFzQXR0cmlidXRlOm8sZ2V0QXR0cmlidXRlVmFsdWU6dGUsZ2V0Q2xvc2VzdEF0dHJpYnV0ZVZhbHVlOm5lLGdldENsb3Nlc3RNYXRjaDpjLGdldEV4cHJlc3Npb25WYXJzOkhyLGdldEhlYWRlcnM6eHIsZ2V0SW5wdXRWYWx1ZXM6ZHIsZ2V0SW50ZXJuYWxEYXRhOmFlLGdldFN3YXBTcGVjaWZpY2F0aW9uOndyLGdldFRyaWdnZXJTcGVjczppdCxnZXRUYXJnZXQ6eWUsbWFrZUZyYWdtZW50OmwsbWVyZ2VPYmplY3RzOmxlLG1ha2VTZXR0bGVJbmZvOlQsb29iU3dhcDpFZSxxdWVyeVNlbGVjdG9yRXh0OnVlLHNlbGVjdEFuZFN3YXA6amUsc2V0dGxlSW1tZWRpYXRlbHk6bnIsc2hvdWxkQ2FuY2VsOnV0LHRyaWdnZXJFdmVudDpjZSx0cmlnZ2VyRXJyb3JFdmVudDpmZSx3aXRoRXh0ZW5zaW9uczpSfTt2YXIgdz1bXCJnZXRcIixcInBvc3RcIixcInB1dFwiLFwiZGVsZXRlXCIsXCJwYXRjaFwiXTt2YXIgaT13Lm1hcChmdW5jdGlvbihlKXtyZXR1cm5cIltoeC1cIitlK1wiXSwgW2RhdGEtaHgtXCIrZStcIl1cIn0pLmpvaW4oXCIsIFwiKTt2YXIgUz1lKFwiaGVhZFwiKSxxPWUoXCJ0aXRsZVwiKSxIPWUoXCJzdmdcIix0cnVlKTtmdW5jdGlvbiBlKGUsdD1mYWxzZSl7cmV0dXJuIG5ldyBSZWdFeHAoYDwke2V9KFxcXFxzW14+XSo+fD4pKFtcXFxcc1xcXFxTXSo/KTxcXFxcLyR7ZX0+YCx0P1wiZ2ltXCI6XCJpbVwiKX1mdW5jdGlvbiBkKGUpe2lmKGU9PXVuZGVmaW5lZCl7cmV0dXJuIHVuZGVmaW5lZH1sZXQgdD1OYU47aWYoZS5zbGljZSgtMik9PVwibXNcIil7dD1wYXJzZUZsb2F0KGUuc2xpY2UoMCwtMikpfWVsc2UgaWYoZS5zbGljZSgtMSk9PVwic1wiKXt0PXBhcnNlRmxvYXQoZS5zbGljZSgwLC0xKSkqMWUzfWVsc2UgaWYoZS5zbGljZSgtMSk9PVwibVwiKXt0PXBhcnNlRmxvYXQoZS5zbGljZSgwLC0xKSkqMWUzKjYwfWVsc2V7dD1wYXJzZUZsb2F0KGUpfXJldHVybiBpc05hTih0KT91bmRlZmluZWQ6dH1mdW5jdGlvbiBlZShlLHQpe3JldHVybiBlLmdldEF0dHJpYnV0ZSYmZS5nZXRBdHRyaWJ1dGUodCl9ZnVuY3Rpb24gbyhlLHQpe3JldHVybiBlLmhhc0F0dHJpYnV0ZSYmKGUuaGFzQXR0cmlidXRlKHQpfHxlLmhhc0F0dHJpYnV0ZShcImRhdGEtXCIrdCkpfWZ1bmN0aW9uIHRlKGUsdCl7cmV0dXJuIGVlKGUsdCl8fGVlKGUsXCJkYXRhLVwiK3QpfWZ1bmN0aW9uIHUoZSl7cmV0dXJuIGUucGFyZW50RWxlbWVudH1mdW5jdGlvbiByZSgpe3JldHVybiBkb2N1bWVudH1mdW5jdGlvbiBjKGUsdCl7d2hpbGUoZSYmIXQoZSkpe2U9dShlKX1yZXR1cm4gZT9lOm51bGx9ZnVuY3Rpb24gTChlLHQscil7dmFyIG49dGUodCxyKTt2YXIgaT10ZSh0LFwiaHgtZGlzaW5oZXJpdFwiKTtpZihlIT09dCYmaSYmKGk9PT1cIipcInx8aS5zcGxpdChcIiBcIikuaW5kZXhPZihyKT49MCkpe3JldHVyblwidW5zZXRcIn1lbHNle3JldHVybiBufX1mdW5jdGlvbiBuZSh0LHIpe3ZhciBuPW51bGw7Yyh0LGZ1bmN0aW9uKGUpe3JldHVybiBuPUwodCxlLHIpfSk7aWYobiE9PVwidW5zZXRcIil7cmV0dXJuIG59fWZ1bmN0aW9uIGgoZSx0KXt2YXIgcj1lLm1hdGNoZXN8fGUubWF0Y2hlc1NlbGVjdG9yfHxlLm1zTWF0Y2hlc1NlbGVjdG9yfHxlLm1vek1hdGNoZXNTZWxlY3Rvcnx8ZS53ZWJraXRNYXRjaGVzU2VsZWN0b3J8fGUub01hdGNoZXNTZWxlY3RvcjtyZXR1cm4gciYmci5jYWxsKGUsdCl9ZnVuY3Rpb24gQShlKXt2YXIgdD0vPChbYS16XVteXFwvXFwwPlxceDIwXFx0XFxyXFxuXFxmXSopL2k7dmFyIHI9dC5leGVjKGUpO2lmKHIpe3JldHVybiByWzFdLnRvTG93ZXJDYXNlKCl9ZWxzZXtyZXR1cm5cIlwifX1mdW5jdGlvbiBhKGUsdCl7dmFyIHI9bmV3IERPTVBhcnNlcjt2YXIgbj1yLnBhcnNlRnJvbVN0cmluZyhlLFwidGV4dC9odG1sXCIpO3ZhciBpPW4uYm9keTt3aGlsZSh0PjApe3QtLTtpPWkuZmlyc3RDaGlsZH1pZihpPT1udWxsKXtpPXJlKCkuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpfXJldHVybiBpfWZ1bmN0aW9uIE4oZSl7cmV0dXJuLzxib2R5Ly50ZXN0KGUpfWZ1bmN0aW9uIGwoZSl7dmFyIHQ9IU4oZSk7dmFyIHI9QShlKTt2YXIgbj1lO2lmKHI9PT1cImhlYWRcIil7bj1uLnJlcGxhY2UoUyxcIlwiKX1pZihRLmNvbmZpZy51c2VUZW1wbGF0ZUZyYWdtZW50cyYmdCl7dmFyIGk9YShcIjxib2R5Pjx0ZW1wbGF0ZT5cIituK1wiPC90ZW1wbGF0ZT48L2JvZHk+XCIsMCk7cmV0dXJuIGkucXVlcnlTZWxlY3RvcihcInRlbXBsYXRlXCIpLmNvbnRlbnR9c3dpdGNoKHIpe2Nhc2VcInRoZWFkXCI6Y2FzZVwidGJvZHlcIjpjYXNlXCJ0Zm9vdFwiOmNhc2VcImNvbGdyb3VwXCI6Y2FzZVwiY2FwdGlvblwiOnJldHVybiBhKFwiPHRhYmxlPlwiK24rXCI8L3RhYmxlPlwiLDEpO2Nhc2VcImNvbFwiOnJldHVybiBhKFwiPHRhYmxlPjxjb2xncm91cD5cIituK1wiPC9jb2xncm91cD48L3RhYmxlPlwiLDIpO2Nhc2VcInRyXCI6cmV0dXJuIGEoXCI8dGFibGU+PHRib2R5PlwiK24rXCI8L3Rib2R5PjwvdGFibGU+XCIsMik7Y2FzZVwidGRcIjpjYXNlXCJ0aFwiOnJldHVybiBhKFwiPHRhYmxlPjx0Ym9keT48dHI+XCIrbitcIjwvdHI+PC90Ym9keT48L3RhYmxlPlwiLDMpO2Nhc2VcInNjcmlwdFwiOmNhc2VcInN0eWxlXCI6cmV0dXJuIGEoXCI8ZGl2PlwiK24rXCI8L2Rpdj5cIiwxKTtkZWZhdWx0OnJldHVybiBhKG4sMCl9fWZ1bmN0aW9uIGllKGUpe2lmKGUpe2UoKX19ZnVuY3Rpb24gSShlLHQpe3JldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoZSk9PT1cIltvYmplY3QgXCIrdCtcIl1cIn1mdW5jdGlvbiBrKGUpe3JldHVybiBJKGUsXCJGdW5jdGlvblwiKX1mdW5jdGlvbiBQKGUpe3JldHVybiBJKGUsXCJPYmplY3RcIil9ZnVuY3Rpb24gYWUoZSl7dmFyIHQ9XCJodG14LWludGVybmFsLWRhdGFcIjt2YXIgcj1lW3RdO2lmKCFyKXtyPWVbdF09e319cmV0dXJuIHJ9ZnVuY3Rpb24gTShlKXt2YXIgdD1bXTtpZihlKXtmb3IodmFyIHI9MDtyPGUubGVuZ3RoO3IrKyl7dC5wdXNoKGVbcl0pfX1yZXR1cm4gdH1mdW5jdGlvbiBvZShlLHQpe2lmKGUpe2Zvcih2YXIgcj0wO3I8ZS5sZW5ndGg7cisrKXt0KGVbcl0pfX19ZnVuY3Rpb24gWChlKXt2YXIgdD1lLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO3ZhciByPXQudG9wO3ZhciBuPXQuYm90dG9tO3JldHVybiByPHdpbmRvdy5pbm5lckhlaWdodCYmbj49MH1mdW5jdGlvbiBzZShlKXtpZihlLmdldFJvb3ROb2RlJiZlLmdldFJvb3ROb2RlKClpbnN0YW5jZW9mIHdpbmRvdy5TaGFkb3dSb290KXtyZXR1cm4gcmUoKS5ib2R5LmNvbnRhaW5zKGUuZ2V0Um9vdE5vZGUoKS5ob3N0KX1lbHNle3JldHVybiByZSgpLmJvZHkuY29udGFpbnMoZSl9fWZ1bmN0aW9uIEQoZSl7cmV0dXJuIGUudHJpbSgpLnNwbGl0KC9cXHMrLyl9ZnVuY3Rpb24gbGUoZSx0KXtmb3IodmFyIHIgaW4gdCl7aWYodC5oYXNPd25Qcm9wZXJ0eShyKSl7ZVtyXT10W3JdfX1yZXR1cm4gZX1mdW5jdGlvbiBFKGUpe3RyeXtyZXR1cm4gSlNPTi5wYXJzZShlKX1jYXRjaChlKXtiKGUpO3JldHVybiBudWxsfX1mdW5jdGlvbiBVKCl7dmFyIGU9XCJodG14OmxvY2FsU3RvcmFnZVRlc3RcIjt0cnl7bG9jYWxTdG9yYWdlLnNldEl0ZW0oZSxlKTtsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShlKTtyZXR1cm4gdHJ1ZX1jYXRjaChlKXtyZXR1cm4gZmFsc2V9fWZ1bmN0aW9uIEIodCl7dHJ5e3ZhciBlPW5ldyBVUkwodCk7aWYoZSl7dD1lLnBhdGhuYW1lK2Uuc2VhcmNofWlmKCEvXlxcLyQvLnRlc3QodCkpe3Q9dC5yZXBsYWNlKC9cXC8rJC8sXCJcIil9cmV0dXJuIHR9Y2F0Y2goZSl7cmV0dXJuIHR9fWZ1bmN0aW9uIHQoZSl7cmV0dXJuIFRyKHJlKCkuYm9keSxmdW5jdGlvbigpe3JldHVybiBldmFsKGUpfSl9ZnVuY3Rpb24gRih0KXt2YXIgZT1RLm9uKFwiaHRteDpsb2FkXCIsZnVuY3Rpb24oZSl7dChlLmRldGFpbC5lbHQpfSk7cmV0dXJuIGV9ZnVuY3Rpb24gVigpe1EubG9nZ2VyPWZ1bmN0aW9uKGUsdCxyKXtpZihjb25zb2xlKXtjb25zb2xlLmxvZyh0LGUscil9fX1mdW5jdGlvbiBqKCl7US5sb2dnZXI9bnVsbH1mdW5jdGlvbiBDKGUsdCl7aWYodCl7cmV0dXJuIGUucXVlcnlTZWxlY3Rvcih0KX1lbHNle3JldHVybiBDKHJlKCksZSl9fWZ1bmN0aW9uIGYoZSx0KXtpZih0KXtyZXR1cm4gZS5xdWVyeVNlbGVjdG9yQWxsKHQpfWVsc2V7cmV0dXJuIGYocmUoKSxlKX19ZnVuY3Rpb24gXyhlLHQpe2U9ZyhlKTtpZih0KXtzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XyhlKTtlPW51bGx9LHQpfWVsc2V7ZS5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKGUpfX1mdW5jdGlvbiB6KGUsdCxyKXtlPWcoZSk7aWYocil7c2V0VGltZW91dChmdW5jdGlvbigpe3ooZSx0KTtlPW51bGx9LHIpfWVsc2V7ZS5jbGFzc0xpc3QmJmUuY2xhc3NMaXN0LmFkZCh0KX19ZnVuY3Rpb24gbihlLHQscil7ZT1nKGUpO2lmKHIpe3NldFRpbWVvdXQoZnVuY3Rpb24oKXtuKGUsdCk7ZT1udWxsfSxyKX1lbHNle2lmKGUuY2xhc3NMaXN0KXtlLmNsYXNzTGlzdC5yZW1vdmUodCk7aWYoZS5jbGFzc0xpc3QubGVuZ3RoPT09MCl7ZS5yZW1vdmVBdHRyaWJ1dGUoXCJjbGFzc1wiKX19fX1mdW5jdGlvbiAkKGUsdCl7ZT1nKGUpO2UuY2xhc3NMaXN0LnRvZ2dsZSh0KX1mdW5jdGlvbiBXKGUsdCl7ZT1nKGUpO29lKGUucGFyZW50RWxlbWVudC5jaGlsZHJlbixmdW5jdGlvbihlKXtuKGUsdCl9KTt6KGUsdCl9ZnVuY3Rpb24gdihlLHQpe2U9ZyhlKTtpZihlLmNsb3Nlc3Qpe3JldHVybiBlLmNsb3Nlc3QodCl9ZWxzZXtkb3tpZihlPT1udWxsfHxoKGUsdCkpe3JldHVybiBlfX13aGlsZShlPWUmJnUoZSkpO3JldHVybiBudWxsfX1mdW5jdGlvbiBzKGUsdCl7cmV0dXJuIGUuc3Vic3RyaW5nKDAsdC5sZW5ndGgpPT09dH1mdW5jdGlvbiBHKGUsdCl7cmV0dXJuIGUuc3Vic3RyaW5nKGUubGVuZ3RoLXQubGVuZ3RoKT09PXR9ZnVuY3Rpb24gSihlKXt2YXIgdD1lLnRyaW0oKTtpZihzKHQsXCI8XCIpJiZHKHQsXCIvPlwiKSl7cmV0dXJuIHQuc3Vic3RyaW5nKDEsdC5sZW5ndGgtMil9ZWxzZXtyZXR1cm4gdH19ZnVuY3Rpb24gWihlLHQpe2lmKHQuaW5kZXhPZihcImNsb3Nlc3QgXCIpPT09MCl7cmV0dXJuW3YoZSxKKHQuc3Vic3RyKDgpKSldfWVsc2UgaWYodC5pbmRleE9mKFwiZmluZCBcIik9PT0wKXtyZXR1cm5bQyhlLEoodC5zdWJzdHIoNSkpKV19ZWxzZSBpZih0PT09XCJuZXh0XCIpe3JldHVybltlLm5leHRFbGVtZW50U2libGluZ119ZWxzZSBpZih0LmluZGV4T2YoXCJuZXh0IFwiKT09PTApe3JldHVybltLKGUsSih0LnN1YnN0cig1KSkpXX1lbHNlIGlmKHQ9PT1cInByZXZpb3VzXCIpe3JldHVybltlLnByZXZpb3VzRWxlbWVudFNpYmxpbmddfWVsc2UgaWYodC5pbmRleE9mKFwicHJldmlvdXMgXCIpPT09MCl7cmV0dXJuW1koZSxKKHQuc3Vic3RyKDkpKSldfWVsc2UgaWYodD09PVwiZG9jdW1lbnRcIil7cmV0dXJuW2RvY3VtZW50XX1lbHNlIGlmKHQ9PT1cIndpbmRvd1wiKXtyZXR1cm5bd2luZG93XX1lbHNlIGlmKHQ9PT1cImJvZHlcIil7cmV0dXJuW2RvY3VtZW50LmJvZHldfWVsc2V7cmV0dXJuIHJlKCkucXVlcnlTZWxlY3RvckFsbChKKHQpKX19dmFyIEs9ZnVuY3Rpb24oZSx0KXt2YXIgcj1yZSgpLnF1ZXJ5U2VsZWN0b3JBbGwodCk7Zm9yKHZhciBuPTA7bjxyLmxlbmd0aDtuKyspe3ZhciBpPXJbbl07aWYoaS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihlKT09PU5vZGUuRE9DVU1FTlRfUE9TSVRJT05fUFJFQ0VESU5HKXtyZXR1cm4gaX19fTt2YXIgWT1mdW5jdGlvbihlLHQpe3ZhciByPXJlKCkucXVlcnlTZWxlY3RvckFsbCh0KTtmb3IodmFyIG49ci5sZW5ndGgtMTtuPj0wO24tLSl7dmFyIGk9cltuXTtpZihpLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKGUpPT09Tm9kZS5ET0NVTUVOVF9QT1NJVElPTl9GT0xMT1dJTkcpe3JldHVybiBpfX19O2Z1bmN0aW9uIHVlKGUsdCl7aWYodCl7cmV0dXJuIFooZSx0KVswXX1lbHNle3JldHVybiBaKHJlKCkuYm9keSxlKVswXX19ZnVuY3Rpb24gZyhlKXtpZihJKGUsXCJTdHJpbmdcIikpe3JldHVybiBDKGUpfWVsc2V7cmV0dXJuIGV9fWZ1bmN0aW9uIHZlKGUsdCxyKXtpZihrKHQpKXtyZXR1cm57dGFyZ2V0OnJlKCkuYm9keSxldmVudDplLGxpc3RlbmVyOnR9fWVsc2V7cmV0dXJue3RhcmdldDpnKGUpLGV2ZW50OnQsbGlzdGVuZXI6cn19fWZ1bmN0aW9uIGRlKHQscixuKXtqcihmdW5jdGlvbigpe3ZhciBlPXZlKHQscixuKTtlLnRhcmdldC5hZGRFdmVudExpc3RlbmVyKGUuZXZlbnQsZS5saXN0ZW5lcil9KTt2YXIgZT1rKHIpO3JldHVybiBlP3I6bn1mdW5jdGlvbiBnZSh0LHIsbil7anIoZnVuY3Rpb24oKXt2YXIgZT12ZSh0LHIsbik7ZS50YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcihlLmV2ZW50LGUubGlzdGVuZXIpfSk7cmV0dXJuIGsocik/cjpufXZhciBtZT1yZSgpLmNyZWF0ZUVsZW1lbnQoXCJvdXRwdXRcIik7ZnVuY3Rpb24gcGUoZSx0KXt2YXIgcj1uZShlLHQpO2lmKHIpe2lmKHI9PT1cInRoaXNcIil7cmV0dXJuW3hlKGUsdCldfWVsc2V7dmFyIG49WihlLHIpO2lmKG4ubGVuZ3RoPT09MCl7YignVGhlIHNlbGVjdG9yIFwiJytyKydcIiBvbiAnK3QrXCIgcmV0dXJuZWQgbm8gbWF0Y2hlcyFcIik7cmV0dXJuW21lXX1lbHNle3JldHVybiBufX19fWZ1bmN0aW9uIHhlKGUsdCl7cmV0dXJuIGMoZSxmdW5jdGlvbihlKXtyZXR1cm4gdGUoZSx0KSE9bnVsbH0pfWZ1bmN0aW9uIHllKGUpe3ZhciB0PW5lKGUsXCJoeC10YXJnZXRcIik7aWYodCl7aWYodD09PVwidGhpc1wiKXtyZXR1cm4geGUoZSxcImh4LXRhcmdldFwiKX1lbHNle3JldHVybiB1ZShlLHQpfX1lbHNle3ZhciByPWFlKGUpO2lmKHIuYm9vc3RlZCl7cmV0dXJuIHJlKCkuYm9keX1lbHNle3JldHVybiBlfX19ZnVuY3Rpb24gYmUoZSl7dmFyIHQ9US5jb25maWcuYXR0cmlidXRlc1RvU2V0dGxlO2Zvcih2YXIgcj0wO3I8dC5sZW5ndGg7cisrKXtpZihlPT09dFtyXSl7cmV0dXJuIHRydWV9fXJldHVybiBmYWxzZX1mdW5jdGlvbiB3ZSh0LHIpe29lKHQuYXR0cmlidXRlcyxmdW5jdGlvbihlKXtpZighci5oYXNBdHRyaWJ1dGUoZS5uYW1lKSYmYmUoZS5uYW1lKSl7dC5yZW1vdmVBdHRyaWJ1dGUoZS5uYW1lKX19KTtvZShyLmF0dHJpYnV0ZXMsZnVuY3Rpb24oZSl7aWYoYmUoZS5uYW1lKSl7dC5zZXRBdHRyaWJ1dGUoZS5uYW1lLGUudmFsdWUpfX0pfWZ1bmN0aW9uIFNlKGUsdCl7dmFyIHI9RnIodCk7Zm9yKHZhciBuPTA7bjxyLmxlbmd0aDtuKyspe3ZhciBpPXJbbl07dHJ5e2lmKGkuaXNJbmxpbmVTd2FwKGUpKXtyZXR1cm4gdHJ1ZX19Y2F0Y2goZSl7YihlKX19cmV0dXJuIGU9PT1cIm91dGVySFRNTFwifWZ1bmN0aW9uIEVlKGUsaSxhKXt2YXIgdD1cIiNcIitlZShpLFwiaWRcIik7dmFyIG89XCJvdXRlckhUTUxcIjtpZihlPT09XCJ0cnVlXCIpe31lbHNlIGlmKGUuaW5kZXhPZihcIjpcIik+MCl7bz1lLnN1YnN0cigwLGUuaW5kZXhPZihcIjpcIikpO3Q9ZS5zdWJzdHIoZS5pbmRleE9mKFwiOlwiKSsxLGUubGVuZ3RoKX1lbHNle289ZX12YXIgcj1yZSgpLnF1ZXJ5U2VsZWN0b3JBbGwodCk7aWYocil7b2UocixmdW5jdGlvbihlKXt2YXIgdDt2YXIgcj1pLmNsb25lTm9kZSh0cnVlKTt0PXJlKCkuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO3QuYXBwZW5kQ2hpbGQocik7aWYoIVNlKG8sZSkpe3Q9cn12YXIgbj17c2hvdWxkU3dhcDp0cnVlLHRhcmdldDplLGZyYWdtZW50OnR9O2lmKCFjZShlLFwiaHRteDpvb2JCZWZvcmVTd2FwXCIsbikpcmV0dXJuO2U9bi50YXJnZXQ7aWYobltcInNob3VsZFN3YXBcIl0pe0ZlKG8sZSxlLHQsYSl9b2UoYS5lbHRzLGZ1bmN0aW9uKGUpe2NlKGUsXCJodG14Om9vYkFmdGVyU3dhcFwiLG4pfSl9KTtpLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoaSl9ZWxzZXtpLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoaSk7ZmUocmUoKS5ib2R5LFwiaHRteDpvb2JFcnJvck5vVGFyZ2V0XCIse2NvbnRlbnQ6aX0pfXJldHVybiBlfWZ1bmN0aW9uIENlKGUsdCxyKXt2YXIgbj1uZShlLFwiaHgtc2VsZWN0LW9vYlwiKTtpZihuKXt2YXIgaT1uLnNwbGl0KFwiLFwiKTtmb3IodmFyIGE9MDthPGkubGVuZ3RoO2ErKyl7dmFyIG89aVthXS5zcGxpdChcIjpcIiwyKTt2YXIgcz1vWzBdLnRyaW0oKTtpZihzLmluZGV4T2YoXCIjXCIpPT09MCl7cz1zLnN1YnN0cmluZygxKX12YXIgbD1vWzFdfHxcInRydWVcIjt2YXIgdT10LnF1ZXJ5U2VsZWN0b3IoXCIjXCIrcyk7aWYodSl7RWUobCx1LHIpfX19b2UoZih0LFwiW2h4LXN3YXAtb29iXSwgW2RhdGEtaHgtc3dhcC1vb2JdXCIpLGZ1bmN0aW9uKGUpe3ZhciB0PXRlKGUsXCJoeC1zd2FwLW9vYlwiKTtpZih0IT1udWxsKXtFZSh0LGUscil9fSl9ZnVuY3Rpb24gUmUoZSl7b2UoZihlLFwiW2h4LXByZXNlcnZlXSwgW2RhdGEtaHgtcHJlc2VydmVdXCIpLGZ1bmN0aW9uKGUpe3ZhciB0PXRlKGUsXCJpZFwiKTt2YXIgcj1yZSgpLmdldEVsZW1lbnRCeUlkKHQpO2lmKHIhPW51bGwpe2UucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQocixlKX19KX1mdW5jdGlvbiBUZShvLGUscyl7b2UoZS5xdWVyeVNlbGVjdG9yQWxsKFwiW2lkXVwiKSxmdW5jdGlvbihlKXt2YXIgdD1lZShlLFwiaWRcIik7aWYodCYmdC5sZW5ndGg+MCl7dmFyIHI9dC5yZXBsYWNlKFwiJ1wiLFwiXFxcXCdcIik7dmFyIG49ZS50YWdOYW1lLnJlcGxhY2UoXCI6XCIsXCJcXFxcOlwiKTt2YXIgaT1vLnF1ZXJ5U2VsZWN0b3IobitcIltpZD0nXCIrcitcIiddXCIpO2lmKGkmJmkhPT1vKXt2YXIgYT1lLmNsb25lTm9kZSgpO3dlKGUsaSk7cy50YXNrcy5wdXNoKGZ1bmN0aW9uKCl7d2UoZSxhKX0pfX19KX1mdW5jdGlvbiBPZShlKXtyZXR1cm4gZnVuY3Rpb24oKXtuKGUsUS5jb25maWcuYWRkZWRDbGFzcyk7enQoZSk7TnQoZSk7cWUoZSk7Y2UoZSxcImh0bXg6bG9hZFwiKX19ZnVuY3Rpb24gcWUoZSl7dmFyIHQ9XCJbYXV0b2ZvY3VzXVwiO3ZhciByPWgoZSx0KT9lOmUucXVlcnlTZWxlY3Rvcih0KTtpZihyIT1udWxsKXtyLmZvY3VzKCl9fWZ1bmN0aW9uIG0oZSx0LHIsbil7VGUoZSxyLG4pO3doaWxlKHIuY2hpbGROb2Rlcy5sZW5ndGg+MCl7dmFyIGk9ci5maXJzdENoaWxkO3ooaSxRLmNvbmZpZy5hZGRlZENsYXNzKTtlLmluc2VydEJlZm9yZShpLHQpO2lmKGkubm9kZVR5cGUhPT1Ob2RlLlRFWFRfTk9ERSYmaS5ub2RlVHlwZSE9PU5vZGUuQ09NTUVOVF9OT0RFKXtuLnRhc2tzLnB1c2goT2UoaSkpfX19ZnVuY3Rpb24gSGUoZSx0KXt2YXIgcj0wO3doaWxlKHI8ZS5sZW5ndGgpe3Q9KHQ8PDUpLXQrZS5jaGFyQ29kZUF0KHIrKyl8MH1yZXR1cm4gdH1mdW5jdGlvbiBMZShlKXt2YXIgdD0wO2lmKGUuYXR0cmlidXRlcyl7Zm9yKHZhciByPTA7cjxlLmF0dHJpYnV0ZXMubGVuZ3RoO3IrKyl7dmFyIG49ZS5hdHRyaWJ1dGVzW3JdO2lmKG4udmFsdWUpe3Q9SGUobi5uYW1lLHQpO3Q9SGUobi52YWx1ZSx0KX19fXJldHVybiB0fWZ1bmN0aW9uIEFlKGUpe3ZhciB0PWFlKGUpO2lmKHQub25IYW5kbGVycyl7Zm9yKHZhciByPTA7cjx0Lm9uSGFuZGxlcnMubGVuZ3RoO3IrKyl7Y29uc3Qgbj10Lm9uSGFuZGxlcnNbcl07ZS5yZW1vdmVFdmVudExpc3RlbmVyKG4uZXZlbnQsbi5saXN0ZW5lcil9ZGVsZXRlIHQub25IYW5kbGVyc319ZnVuY3Rpb24gTmUoZSl7dmFyIHQ9YWUoZSk7aWYodC50aW1lb3V0KXtjbGVhclRpbWVvdXQodC50aW1lb3V0KX1pZih0LndlYlNvY2tldCl7dC53ZWJTb2NrZXQuY2xvc2UoKX1pZih0LnNzZUV2ZW50U291cmNlKXt0LnNzZUV2ZW50U291cmNlLmNsb3NlKCl9aWYodC5saXN0ZW5lckluZm9zKXtvZSh0Lmxpc3RlbmVySW5mb3MsZnVuY3Rpb24oZSl7aWYoZS5vbil7ZS5vbi5yZW1vdmVFdmVudExpc3RlbmVyKGUudHJpZ2dlcixlLmxpc3RlbmVyKX19KX1BZShlKTtvZShPYmplY3Qua2V5cyh0KSxmdW5jdGlvbihlKXtkZWxldGUgdFtlXX0pfWZ1bmN0aW9uIHAoZSl7Y2UoZSxcImh0bXg6YmVmb3JlQ2xlYW51cEVsZW1lbnRcIik7TmUoZSk7aWYoZS5jaGlsZHJlbil7b2UoZS5jaGlsZHJlbixmdW5jdGlvbihlKXtwKGUpfSl9fWZ1bmN0aW9uIEllKHQsZSxyKXtpZih0LnRhZ05hbWU9PT1cIkJPRFlcIil7cmV0dXJuIFVlKHQsZSxyKX1lbHNle3ZhciBuO3ZhciBpPXQucHJldmlvdXNTaWJsaW5nO20odSh0KSx0LGUscik7aWYoaT09bnVsbCl7bj11KHQpLmZpcnN0Q2hpbGR9ZWxzZXtuPWkubmV4dFNpYmxpbmd9ci5lbHRzPXIuZWx0cy5maWx0ZXIoZnVuY3Rpb24oZSl7cmV0dXJuIGUhPXR9KTt3aGlsZShuJiZuIT09dCl7aWYobi5ub2RlVHlwZT09PU5vZGUuRUxFTUVOVF9OT0RFKXtyLmVsdHMucHVzaChuKX1uPW4ubmV4dEVsZW1lbnRTaWJsaW5nfXAodCk7dSh0KS5yZW1vdmVDaGlsZCh0KX19ZnVuY3Rpb24ga2UoZSx0LHIpe3JldHVybiBtKGUsZS5maXJzdENoaWxkLHQscil9ZnVuY3Rpb24gUGUoZSx0LHIpe3JldHVybiBtKHUoZSksZSx0LHIpfWZ1bmN0aW9uIE1lKGUsdCxyKXtyZXR1cm4gbShlLG51bGwsdCxyKX1mdW5jdGlvbiBYZShlLHQscil7cmV0dXJuIG0odShlKSxlLm5leHRTaWJsaW5nLHQscil9ZnVuY3Rpb24gRGUoZSx0LHIpe3AoZSk7cmV0dXJuIHUoZSkucmVtb3ZlQ2hpbGQoZSl9ZnVuY3Rpb24gVWUoZSx0LHIpe3ZhciBuPWUuZmlyc3RDaGlsZDttKGUsbix0LHIpO2lmKG4pe3doaWxlKG4ubmV4dFNpYmxpbmcpe3Aobi5uZXh0U2libGluZyk7ZS5yZW1vdmVDaGlsZChuLm5leHRTaWJsaW5nKX1wKG4pO2UucmVtb3ZlQ2hpbGQobil9fWZ1bmN0aW9uIEJlKGUsdCxyKXt2YXIgbj1yfHxuZShlLFwiaHgtc2VsZWN0XCIpO2lmKG4pe3ZhciBpPXJlKCkuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO29lKHQucXVlcnlTZWxlY3RvckFsbChuKSxmdW5jdGlvbihlKXtpLmFwcGVuZENoaWxkKGUpfSk7dD1pfXJldHVybiB0fWZ1bmN0aW9uIEZlKGUsdCxyLG4saSl7c3dpdGNoKGUpe2Nhc2VcIm5vbmVcIjpyZXR1cm47Y2FzZVwib3V0ZXJIVE1MXCI6SWUocixuLGkpO3JldHVybjtjYXNlXCJhZnRlcmJlZ2luXCI6a2UocixuLGkpO3JldHVybjtjYXNlXCJiZWZvcmViZWdpblwiOlBlKHIsbixpKTtyZXR1cm47Y2FzZVwiYmVmb3JlZW5kXCI6TWUocixuLGkpO3JldHVybjtjYXNlXCJhZnRlcmVuZFwiOlhlKHIsbixpKTtyZXR1cm47Y2FzZVwiZGVsZXRlXCI6RGUocixuLGkpO3JldHVybjtkZWZhdWx0OnZhciBhPUZyKHQpO2Zvcih2YXIgbz0wO288YS5sZW5ndGg7bysrKXt2YXIgcz1hW29dO3RyeXt2YXIgbD1zLmhhbmRsZVN3YXAoZSxyLG4saSk7aWYobCl7aWYodHlwZW9mIGwubGVuZ3RoIT09XCJ1bmRlZmluZWRcIil7Zm9yKHZhciB1PTA7dTxsLmxlbmd0aDt1Kyspe3ZhciBmPWxbdV07aWYoZi5ub2RlVHlwZSE9PU5vZGUuVEVYVF9OT0RFJiZmLm5vZGVUeXBlIT09Tm9kZS5DT01NRU5UX05PREUpe2kudGFza3MucHVzaChPZShmKSl9fX1yZXR1cm59fWNhdGNoKGUpe2IoZSl9fWlmKGU9PT1cImlubmVySFRNTFwiKXtVZShyLG4saSl9ZWxzZXtGZShRLmNvbmZpZy5kZWZhdWx0U3dhcFN0eWxlLHQscixuLGkpfX19ZnVuY3Rpb24gVmUoZSl7aWYoZS5pbmRleE9mKFwiPHRpdGxlXCIpPi0xKXt2YXIgdD1lLnJlcGxhY2UoSCxcIlwiKTt2YXIgcj10Lm1hdGNoKHEpO2lmKHIpe3JldHVybiByWzJdfX19ZnVuY3Rpb24gamUoZSx0LHIsbixpLGEpe2kudGl0bGU9VmUobik7dmFyIG89bChuKTtpZihvKXtDZShyLG8saSk7bz1CZShyLG8sYSk7UmUobyk7cmV0dXJuIEZlKGUscix0LG8saSl9fWZ1bmN0aW9uIF9lKGUsdCxyKXt2YXIgbj1lLmdldFJlc3BvbnNlSGVhZGVyKHQpO2lmKG4uaW5kZXhPZihcIntcIik9PT0wKXt2YXIgaT1FKG4pO2Zvcih2YXIgYSBpbiBpKXtpZihpLmhhc093blByb3BlcnR5KGEpKXt2YXIgbz1pW2FdO2lmKCFQKG8pKXtvPXt2YWx1ZTpvfX1jZShyLGEsbyl9fX1lbHNle3ZhciBzPW4uc3BsaXQoXCIsXCIpO2Zvcih2YXIgbD0wO2w8cy5sZW5ndGg7bCsrKXtjZShyLHNbbF0udHJpbSgpLFtdKX19fXZhciB6ZT0vXFxzLzt2YXIgeD0vW1xccyxdLzt2YXIgJGU9L1tfJGEtekEtWl0vO3ZhciBXZT0vW18kYS16QS1aMC05XS87dmFyIEdlPVsnXCInLFwiJ1wiLFwiL1wiXTt2YXIgSmU9L1teXFxzXS87dmFyIFplPS9beyhdLzt2YXIgS2U9L1t9KV0vO2Z1bmN0aW9uIFllKGUpe3ZhciB0PVtdO3ZhciByPTA7d2hpbGUocjxlLmxlbmd0aCl7aWYoJGUuZXhlYyhlLmNoYXJBdChyKSkpe3ZhciBuPXI7d2hpbGUoV2UuZXhlYyhlLmNoYXJBdChyKzEpKSl7cisrfXQucHVzaChlLnN1YnN0cihuLHItbisxKSl9ZWxzZSBpZihHZS5pbmRleE9mKGUuY2hhckF0KHIpKSE9PS0xKXt2YXIgaT1lLmNoYXJBdChyKTt2YXIgbj1yO3IrKzt3aGlsZShyPGUubGVuZ3RoJiZlLmNoYXJBdChyKSE9PWkpe2lmKGUuY2hhckF0KHIpPT09XCJcXFxcXCIpe3IrK31yKyt9dC5wdXNoKGUuc3Vic3RyKG4sci1uKzEpKX1lbHNle3ZhciBhPWUuY2hhckF0KHIpO3QucHVzaChhKX1yKyt9cmV0dXJuIHR9ZnVuY3Rpb24gUWUoZSx0LHIpe3JldHVybiAkZS5leGVjKGUuY2hhckF0KDApKSYmZSE9PVwidHJ1ZVwiJiZlIT09XCJmYWxzZVwiJiZlIT09XCJ0aGlzXCImJmUhPT1yJiZ0IT09XCIuXCJ9ZnVuY3Rpb24gZXQoZSx0LHIpe2lmKHRbMF09PT1cIltcIil7dC5zaGlmdCgpO3ZhciBuPTE7dmFyIGk9XCIgcmV0dXJuIChmdW5jdGlvbihcIityK1wiKXsgcmV0dXJuIChcIjt2YXIgYT1udWxsO3doaWxlKHQubGVuZ3RoPjApe3ZhciBvPXRbMF07aWYobz09PVwiXVwiKXtuLS07aWYobj09PTApe2lmKGE9PT1udWxsKXtpPWkrXCJ0cnVlXCJ9dC5zaGlmdCgpO2krPVwiKX0pXCI7dHJ5e3ZhciBzPVRyKGUsZnVuY3Rpb24oKXtyZXR1cm4gRnVuY3Rpb24oaSkoKX0sZnVuY3Rpb24oKXtyZXR1cm4gdHJ1ZX0pO3Muc291cmNlPWk7cmV0dXJuIHN9Y2F0Y2goZSl7ZmUocmUoKS5ib2R5LFwiaHRteDpzeW50YXg6ZXJyb3JcIix7ZXJyb3I6ZSxzb3VyY2U6aX0pO3JldHVybiBudWxsfX19ZWxzZSBpZihvPT09XCJbXCIpe24rK31pZihRZShvLGEscikpe2krPVwiKChcIityK1wiLlwiK28rXCIpID8gKFwiK3IrXCIuXCIrbytcIikgOiAod2luZG93LlwiK28rXCIpKVwifWVsc2V7aT1pK299YT10LnNoaWZ0KCl9fX1mdW5jdGlvbiB5KGUsdCl7dmFyIHI9XCJcIjt3aGlsZShlLmxlbmd0aD4wJiYhdC50ZXN0KGVbMF0pKXtyKz1lLnNoaWZ0KCl9cmV0dXJuIHJ9ZnVuY3Rpb24gdHQoZSl7dmFyIHQ7aWYoZS5sZW5ndGg+MCYmWmUudGVzdChlWzBdKSl7ZS5zaGlmdCgpO3Q9eShlLEtlKS50cmltKCk7ZS5zaGlmdCgpfWVsc2V7dD15KGUseCl9cmV0dXJuIHR9dmFyIHJ0PVwiaW5wdXQsIHRleHRhcmVhLCBzZWxlY3RcIjtmdW5jdGlvbiBudChlLHQscil7dmFyIG49W107dmFyIGk9WWUodCk7ZG97eShpLEplKTt2YXIgYT1pLmxlbmd0aDt2YXIgbz15KGksL1ssXFxbXFxzXS8pO2lmKG8hPT1cIlwiKXtpZihvPT09XCJldmVyeVwiKXt2YXIgcz17dHJpZ2dlcjpcImV2ZXJ5XCJ9O3koaSxKZSk7cy5wb2xsSW50ZXJ2YWw9ZCh5KGksL1ssXFxbXFxzXS8pKTt5KGksSmUpO3ZhciBsPWV0KGUsaSxcImV2ZW50XCIpO2lmKGwpe3MuZXZlbnRGaWx0ZXI9bH1uLnB1c2gocyl9ZWxzZSBpZihvLmluZGV4T2YoXCJzc2U6XCIpPT09MCl7bi5wdXNoKHt0cmlnZ2VyOlwic3NlXCIsc3NlRXZlbnQ6by5zdWJzdHIoNCl9KX1lbHNle3ZhciB1PXt0cmlnZ2VyOm99O3ZhciBsPWV0KGUsaSxcImV2ZW50XCIpO2lmKGwpe3UuZXZlbnRGaWx0ZXI9bH13aGlsZShpLmxlbmd0aD4wJiZpWzBdIT09XCIsXCIpe3koaSxKZSk7dmFyIGY9aS5zaGlmdCgpO2lmKGY9PT1cImNoYW5nZWRcIil7dS5jaGFuZ2VkPXRydWV9ZWxzZSBpZihmPT09XCJvbmNlXCIpe3Uub25jZT10cnVlfWVsc2UgaWYoZj09PVwiY29uc3VtZVwiKXt1LmNvbnN1bWU9dHJ1ZX1lbHNlIGlmKGY9PT1cImRlbGF5XCImJmlbMF09PT1cIjpcIil7aS5zaGlmdCgpO3UuZGVsYXk9ZCh5KGkseCkpfWVsc2UgaWYoZj09PVwiZnJvbVwiJiZpWzBdPT09XCI6XCIpe2kuc2hpZnQoKTtpZihaZS50ZXN0KGlbMF0pKXt2YXIgYz10dChpKX1lbHNle3ZhciBjPXkoaSx4KTtpZihjPT09XCJjbG9zZXN0XCJ8fGM9PT1cImZpbmRcInx8Yz09PVwibmV4dFwifHxjPT09XCJwcmV2aW91c1wiKXtpLnNoaWZ0KCk7dmFyIGg9dHQoaSk7aWYoaC5sZW5ndGg+MCl7Yys9XCIgXCIraH19fXUuZnJvbT1jfWVsc2UgaWYoZj09PVwidGFyZ2V0XCImJmlbMF09PT1cIjpcIil7aS5zaGlmdCgpO3UudGFyZ2V0PXR0KGkpfWVsc2UgaWYoZj09PVwidGhyb3R0bGVcIiYmaVswXT09PVwiOlwiKXtpLnNoaWZ0KCk7dS50aHJvdHRsZT1kKHkoaSx4KSl9ZWxzZSBpZihmPT09XCJxdWV1ZVwiJiZpWzBdPT09XCI6XCIpe2kuc2hpZnQoKTt1LnF1ZXVlPXkoaSx4KX1lbHNlIGlmKGY9PT1cInJvb3RcIiYmaVswXT09PVwiOlwiKXtpLnNoaWZ0KCk7dVtmXT10dChpKX1lbHNlIGlmKGY9PT1cInRocmVzaG9sZFwiJiZpWzBdPT09XCI6XCIpe2kuc2hpZnQoKTt1W2ZdPXkoaSx4KX1lbHNle2ZlKGUsXCJodG14OnN5bnRheDplcnJvclwiLHt0b2tlbjppLnNoaWZ0KCl9KX19bi5wdXNoKHUpfX1pZihpLmxlbmd0aD09PWEpe2ZlKGUsXCJodG14OnN5bnRheDplcnJvclwiLHt0b2tlbjppLnNoaWZ0KCl9KX15KGksSmUpfXdoaWxlKGlbMF09PT1cIixcIiYmaS5zaGlmdCgpKTtpZihyKXtyW3RdPW59cmV0dXJuIG59ZnVuY3Rpb24gaXQoZSl7dmFyIHQ9dGUoZSxcImh4LXRyaWdnZXJcIik7dmFyIHI9W107aWYodCl7dmFyIG49US5jb25maWcudHJpZ2dlclNwZWNzQ2FjaGU7cj1uJiZuW3RdfHxudChlLHQsbil9aWYoci5sZW5ndGg+MCl7cmV0dXJuIHJ9ZWxzZSBpZihoKGUsXCJmb3JtXCIpKXtyZXR1cm5be3RyaWdnZXI6XCJzdWJtaXRcIn1dfWVsc2UgaWYoaChlLCdpbnB1dFt0eXBlPVwiYnV0dG9uXCJdLCBpbnB1dFt0eXBlPVwic3VibWl0XCJdJykpe3JldHVyblt7dHJpZ2dlcjpcImNsaWNrXCJ9XX1lbHNlIGlmKGgoZSxydCkpe3JldHVyblt7dHJpZ2dlcjpcImNoYW5nZVwifV19ZWxzZXtyZXR1cm5be3RyaWdnZXI6XCJjbGlja1wifV19fWZ1bmN0aW9uIGF0KGUpe2FlKGUpLmNhbmNlbGxlZD10cnVlfWZ1bmN0aW9uIG90KGUsdCxyKXt2YXIgbj1hZShlKTtuLnRpbWVvdXQ9c2V0VGltZW91dChmdW5jdGlvbigpe2lmKHNlKGUpJiZuLmNhbmNlbGxlZCE9PXRydWUpe2lmKCFjdChyLGUsV3QoXCJoeDpwb2xsOnRyaWdnZXJcIix7dHJpZ2dlclNwZWM6cix0YXJnZXQ6ZX0pKSl7dChlKX1vdChlLHQscil9fSxyLnBvbGxJbnRlcnZhbCl9ZnVuY3Rpb24gc3QoZSl7cmV0dXJuIGxvY2F0aW9uLmhvc3RuYW1lPT09ZS5ob3N0bmFtZSYmZWUoZSxcImhyZWZcIikmJmVlKGUsXCJocmVmXCIpLmluZGV4T2YoXCIjXCIpIT09MH1mdW5jdGlvbiBsdCh0LHIsZSl7aWYodC50YWdOYW1lPT09XCJBXCImJnN0KHQpJiYodC50YXJnZXQ9PT1cIlwifHx0LnRhcmdldD09PVwiX3NlbGZcIil8fHQudGFnTmFtZT09PVwiRk9STVwiKXtyLmJvb3N0ZWQ9dHJ1ZTt2YXIgbixpO2lmKHQudGFnTmFtZT09PVwiQVwiKXtuPVwiZ2V0XCI7aT1lZSh0LFwiaHJlZlwiKX1lbHNle3ZhciBhPWVlKHQsXCJtZXRob2RcIik7bj1hP2EudG9Mb3dlckNhc2UoKTpcImdldFwiO2lmKG49PT1cImdldFwiKXt9aT1lZSh0LFwiYWN0aW9uXCIpfWUuZm9yRWFjaChmdW5jdGlvbihlKXtodCh0LGZ1bmN0aW9uKGUsdCl7aWYodihlLFEuY29uZmlnLmRpc2FibGVTZWxlY3Rvcikpe3AoZSk7cmV0dXJufWhlKG4saSxlLHQpfSxyLGUsdHJ1ZSl9KX19ZnVuY3Rpb24gdXQoZSx0KXtpZihlLnR5cGU9PT1cInN1Ym1pdFwifHxlLnR5cGU9PT1cImNsaWNrXCIpe2lmKHQudGFnTmFtZT09PVwiRk9STVwiKXtyZXR1cm4gdHJ1ZX1pZihoKHQsJ2lucHV0W3R5cGU9XCJzdWJtaXRcIl0sIGJ1dHRvbicpJiZ2KHQsXCJmb3JtXCIpIT09bnVsbCl7cmV0dXJuIHRydWV9aWYodC50YWdOYW1lPT09XCJBXCImJnQuaHJlZiYmKHQuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKT09PVwiI1wifHx0LmdldEF0dHJpYnV0ZShcImhyZWZcIikuaW5kZXhPZihcIiNcIikhPT0wKSl7cmV0dXJuIHRydWV9fXJldHVybiBmYWxzZX1mdW5jdGlvbiBmdChlLHQpe3JldHVybiBhZShlKS5ib29zdGVkJiZlLnRhZ05hbWU9PT1cIkFcIiYmdC50eXBlPT09XCJjbGlja1wiJiYodC5jdHJsS2V5fHx0Lm1ldGFLZXkpfWZ1bmN0aW9uIGN0KGUsdCxyKXt2YXIgbj1lLmV2ZW50RmlsdGVyO2lmKG4pe3RyeXtyZXR1cm4gbi5jYWxsKHQscikhPT10cnVlfWNhdGNoKGUpe2ZlKHJlKCkuYm9keSxcImh0bXg6ZXZlbnRGaWx0ZXI6ZXJyb3JcIix7ZXJyb3I6ZSxzb3VyY2U6bi5zb3VyY2V9KTtyZXR1cm4gdHJ1ZX19cmV0dXJuIGZhbHNlfWZ1bmN0aW9uIGh0KGEsbyxlLHMsbCl7dmFyIHU9YWUoYSk7dmFyIHQ7aWYocy5mcm9tKXt0PVooYSxzLmZyb20pfWVsc2V7dD1bYV19aWYocy5jaGFuZ2VkKXt0LmZvckVhY2goZnVuY3Rpb24oZSl7dmFyIHQ9YWUoZSk7dC5sYXN0VmFsdWU9ZS52YWx1ZX0pfW9lKHQsZnVuY3Rpb24obil7dmFyIGk9ZnVuY3Rpb24oZSl7aWYoIXNlKGEpKXtuLnJlbW92ZUV2ZW50TGlzdGVuZXIocy50cmlnZ2VyLGkpO3JldHVybn1pZihmdChhLGUpKXtyZXR1cm59aWYobHx8dXQoZSxhKSl7ZS5wcmV2ZW50RGVmYXVsdCgpfWlmKGN0KHMsYSxlKSl7cmV0dXJufXZhciB0PWFlKGUpO3QudHJpZ2dlclNwZWM9cztpZih0LmhhbmRsZWRGb3I9PW51bGwpe3QuaGFuZGxlZEZvcj1bXX1pZih0LmhhbmRsZWRGb3IuaW5kZXhPZihhKTwwKXt0LmhhbmRsZWRGb3IucHVzaChhKTtpZihzLmNvbnN1bWUpe2Uuc3RvcFByb3BhZ2F0aW9uKCl9aWYocy50YXJnZXQmJmUudGFyZ2V0KXtpZighaChlLnRhcmdldCxzLnRhcmdldCkpe3JldHVybn19aWYocy5vbmNlKXtpZih1LnRyaWdnZXJlZE9uY2Upe3JldHVybn1lbHNle3UudHJpZ2dlcmVkT25jZT10cnVlfX1pZihzLmNoYW5nZWQpe3ZhciByPWFlKG4pO2lmKHIubGFzdFZhbHVlPT09bi52YWx1ZSl7cmV0dXJufXIubGFzdFZhbHVlPW4udmFsdWV9aWYodS5kZWxheWVkKXtjbGVhclRpbWVvdXQodS5kZWxheWVkKX1pZih1LnRocm90dGxlKXtyZXR1cm59aWYocy50aHJvdHRsZT4wKXtpZighdS50aHJvdHRsZSl7byhhLGUpO3UudGhyb3R0bGU9c2V0VGltZW91dChmdW5jdGlvbigpe3UudGhyb3R0bGU9bnVsbH0scy50aHJvdHRsZSl9fWVsc2UgaWYocy5kZWxheT4wKXt1LmRlbGF5ZWQ9c2V0VGltZW91dChmdW5jdGlvbigpe28oYSxlKX0scy5kZWxheSl9ZWxzZXtjZShhLFwiaHRteDp0cmlnZ2VyXCIpO28oYSxlKX19fTtpZihlLmxpc3RlbmVySW5mb3M9PW51bGwpe2UubGlzdGVuZXJJbmZvcz1bXX1lLmxpc3RlbmVySW5mb3MucHVzaCh7dHJpZ2dlcjpzLnRyaWdnZXIsbGlzdGVuZXI6aSxvbjpufSk7bi5hZGRFdmVudExpc3RlbmVyKHMudHJpZ2dlcixpKX0pfXZhciB2dD1mYWxzZTt2YXIgZHQ9bnVsbDtmdW5jdGlvbiBndCgpe2lmKCFkdCl7ZHQ9ZnVuY3Rpb24oKXt2dD10cnVlfTt3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLGR0KTtzZXRJbnRlcnZhbChmdW5jdGlvbigpe2lmKHZ0KXt2dD1mYWxzZTtvZShyZSgpLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbaHgtdHJpZ2dlcj0ncmV2ZWFsZWQnXSxbZGF0YS1oeC10cmlnZ2VyPSdyZXZlYWxlZCddXCIpLGZ1bmN0aW9uKGUpe210KGUpfSl9fSwyMDApfX1mdW5jdGlvbiBtdCh0KXtpZighbyh0LFwiZGF0YS1oeC1yZXZlYWxlZFwiKSYmWCh0KSl7dC5zZXRBdHRyaWJ1dGUoXCJkYXRhLWh4LXJldmVhbGVkXCIsXCJ0cnVlXCIpO3ZhciBlPWFlKHQpO2lmKGUuaW5pdEhhc2gpe2NlKHQsXCJyZXZlYWxlZFwiKX1lbHNle3QuYWRkRXZlbnRMaXN0ZW5lcihcImh0bXg6YWZ0ZXJQcm9jZXNzTm9kZVwiLGZ1bmN0aW9uKGUpe2NlKHQsXCJyZXZlYWxlZFwiKX0se29uY2U6dHJ1ZX0pfX19ZnVuY3Rpb24gcHQoZSx0LHIpe3ZhciBuPUQocik7Zm9yKHZhciBpPTA7aTxuLmxlbmd0aDtpKyspe3ZhciBhPW5baV0uc3BsaXQoLzooLispLyk7aWYoYVswXT09PVwiY29ubmVjdFwiKXt4dChlLGFbMV0sMCl9aWYoYVswXT09PVwic2VuZFwiKXtidChlKX19fWZ1bmN0aW9uIHh0KHMscixuKXtpZighc2Uocykpe3JldHVybn1pZihyLmluZGV4T2YoXCIvXCIpPT0wKXt2YXIgZT1sb2NhdGlvbi5ob3N0bmFtZSsobG9jYXRpb24ucG9ydD9cIjpcIitsb2NhdGlvbi5wb3J0OlwiXCIpO2lmKGxvY2F0aW9uLnByb3RvY29sPT1cImh0dHBzOlwiKXtyPVwid3NzOi8vXCIrZStyfWVsc2UgaWYobG9jYXRpb24ucHJvdG9jb2w9PVwiaHR0cDpcIil7cj1cIndzOi8vXCIrZStyfX12YXIgdD1RLmNyZWF0ZVdlYlNvY2tldChyKTt0Lm9uZXJyb3I9ZnVuY3Rpb24oZSl7ZmUocyxcImh0bXg6d3NFcnJvclwiLHtlcnJvcjplLHNvY2tldDp0fSk7eXQocyl9O3Qub25jbG9zZT1mdW5jdGlvbihlKXtpZihbMTAwNiwxMDEyLDEwMTNdLmluZGV4T2YoZS5jb2RlKT49MCl7dmFyIHQ9d3Qobik7c2V0VGltZW91dChmdW5jdGlvbigpe3h0KHMscixuKzEpfSx0KX19O3Qub25vcGVuPWZ1bmN0aW9uKGUpe249MH07YWUocykud2ViU29ja2V0PXQ7dC5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLGZ1bmN0aW9uKGUpe2lmKHl0KHMpKXtyZXR1cm59dmFyIHQ9ZS5kYXRhO1IocyxmdW5jdGlvbihlKXt0PWUudHJhbnNmb3JtUmVzcG9uc2UodCxudWxsLHMpfSk7dmFyIHI9VChzKTt2YXIgbj1sKHQpO3ZhciBpPU0obi5jaGlsZHJlbik7Zm9yKHZhciBhPTA7YTxpLmxlbmd0aDthKyspe3ZhciBvPWlbYV07RWUodGUobyxcImh4LXN3YXAtb29iXCIpfHxcInRydWVcIixvLHIpfW5yKHIudGFza3MpfSl9ZnVuY3Rpb24geXQoZSl7aWYoIXNlKGUpKXthZShlKS53ZWJTb2NrZXQuY2xvc2UoKTtyZXR1cm4gdHJ1ZX19ZnVuY3Rpb24gYnQodSl7dmFyIGY9Yyh1LGZ1bmN0aW9uKGUpe3JldHVybiBhZShlKS53ZWJTb2NrZXQhPW51bGx9KTtpZihmKXt1LmFkZEV2ZW50TGlzdGVuZXIoaXQodSlbMF0udHJpZ2dlcixmdW5jdGlvbihlKXt2YXIgdD1hZShmKS53ZWJTb2NrZXQ7dmFyIHI9eHIodSxmKTt2YXIgbj1kcih1LFwicG9zdFwiKTt2YXIgaT1uLmVycm9yczt2YXIgYT1uLnZhbHVlczt2YXIgbz1Icih1KTt2YXIgcz1sZShhLG8pO3ZhciBsPXlyKHMsdSk7bFtcIkhFQURFUlNcIl09cjtpZihpJiZpLmxlbmd0aD4wKXtjZSh1LFwiaHRteDp2YWxpZGF0aW9uOmhhbHRlZFwiLGkpO3JldHVybn10LnNlbmQoSlNPTi5zdHJpbmdpZnkobCkpO2lmKHV0KGUsdSkpe2UucHJldmVudERlZmF1bHQoKX19KX1lbHNle2ZlKHUsXCJodG14Om5vV2ViU29ja2V0U291cmNlRXJyb3JcIil9fWZ1bmN0aW9uIHd0KGUpe3ZhciB0PVEuY29uZmlnLndzUmVjb25uZWN0RGVsYXk7aWYodHlwZW9mIHQ9PT1cImZ1bmN0aW9uXCIpe3JldHVybiB0KGUpfWlmKHQ9PT1cImZ1bGwtaml0dGVyXCIpe3ZhciByPU1hdGgubWluKGUsNik7dmFyIG49MWUzKk1hdGgucG93KDIscik7cmV0dXJuIG4qTWF0aC5yYW5kb20oKX1iKCdodG14LmNvbmZpZy53c1JlY29ubmVjdERlbGF5IG11c3QgZWl0aGVyIGJlIGEgZnVuY3Rpb24gb3IgdGhlIHN0cmluZyBcImZ1bGwtaml0dGVyXCInKX1mdW5jdGlvbiBTdChlLHQscil7dmFyIG49RChyKTtmb3IodmFyIGk9MDtpPG4ubGVuZ3RoO2krKyl7dmFyIGE9bltpXS5zcGxpdCgvOiguKykvKTtpZihhWzBdPT09XCJjb25uZWN0XCIpe0V0KGUsYVsxXSl9aWYoYVswXT09PVwic3dhcFwiKXtDdChlLGFbMV0pfX19ZnVuY3Rpb24gRXQodCxlKXt2YXIgcj1RLmNyZWF0ZUV2ZW50U291cmNlKGUpO3Iub25lcnJvcj1mdW5jdGlvbihlKXtmZSh0LFwiaHRteDpzc2VFcnJvclwiLHtlcnJvcjplLHNvdXJjZTpyfSk7VHQodCl9O2FlKHQpLnNzZUV2ZW50U291cmNlPXJ9ZnVuY3Rpb24gQ3QoYSxvKXt2YXIgcz1jKGEsT3QpO2lmKHMpe3ZhciBsPWFlKHMpLnNzZUV2ZW50U291cmNlO3ZhciB1PWZ1bmN0aW9uKGUpe2lmKFR0KHMpKXtyZXR1cm59aWYoIXNlKGEpKXtsLnJlbW92ZUV2ZW50TGlzdGVuZXIobyx1KTtyZXR1cm59dmFyIHQ9ZS5kYXRhO1IoYSxmdW5jdGlvbihlKXt0PWUudHJhbnNmb3JtUmVzcG9uc2UodCxudWxsLGEpfSk7dmFyIHI9d3IoYSk7dmFyIG49eWUoYSk7dmFyIGk9VChhKTtqZShyLnN3YXBTdHlsZSxuLGEsdCxpKTtucihpLnRhc2tzKTtjZShhLFwiaHRteDpzc2VNZXNzYWdlXCIsZSl9O2FlKGEpLnNzZUxpc3RlbmVyPXU7bC5hZGRFdmVudExpc3RlbmVyKG8sdSl9ZWxzZXtmZShhLFwiaHRteDpub1NTRVNvdXJjZUVycm9yXCIpfX1mdW5jdGlvbiBSdChlLHQscil7dmFyIG49YyhlLE90KTtpZihuKXt2YXIgaT1hZShuKS5zc2VFdmVudFNvdXJjZTt2YXIgYT1mdW5jdGlvbigpe2lmKCFUdChuKSl7aWYoc2UoZSkpe3QoZSl9ZWxzZXtpLnJlbW92ZUV2ZW50TGlzdGVuZXIocixhKX19fTthZShlKS5zc2VMaXN0ZW5lcj1hO2kuYWRkRXZlbnRMaXN0ZW5lcihyLGEpfWVsc2V7ZmUoZSxcImh0bXg6bm9TU0VTb3VyY2VFcnJvclwiKX19ZnVuY3Rpb24gVHQoZSl7aWYoIXNlKGUpKXthZShlKS5zc2VFdmVudFNvdXJjZS5jbG9zZSgpO3JldHVybiB0cnVlfX1mdW5jdGlvbiBPdChlKXtyZXR1cm4gYWUoZSkuc3NlRXZlbnRTb3VyY2UhPW51bGx9ZnVuY3Rpb24gcXQoZSx0LHIsbil7dmFyIGk9ZnVuY3Rpb24oKXtpZighci5sb2FkZWQpe3IubG9hZGVkPXRydWU7dChlKX19O2lmKG4+MCl7c2V0VGltZW91dChpLG4pfWVsc2V7aSgpfX1mdW5jdGlvbiBIdCh0LGksZSl7dmFyIGE9ZmFsc2U7b2UodyxmdW5jdGlvbihyKXtpZihvKHQsXCJoeC1cIityKSl7dmFyIG49dGUodCxcImh4LVwiK3IpO2E9dHJ1ZTtpLnBhdGg9bjtpLnZlcmI9cjtlLmZvckVhY2goZnVuY3Rpb24oZSl7THQodCxlLGksZnVuY3Rpb24oZSx0KXtpZih2KGUsUS5jb25maWcuZGlzYWJsZVNlbGVjdG9yKSl7cChlKTtyZXR1cm59aGUocixuLGUsdCl9KX0pfX0pO3JldHVybiBhfWZ1bmN0aW9uIEx0KG4sZSx0LHIpe2lmKGUuc3NlRXZlbnQpe1J0KG4scixlLnNzZUV2ZW50KX1lbHNlIGlmKGUudHJpZ2dlcj09PVwicmV2ZWFsZWRcIil7Z3QoKTtodChuLHIsdCxlKTttdChuKX1lbHNlIGlmKGUudHJpZ2dlcj09PVwiaW50ZXJzZWN0XCIpe3ZhciBpPXt9O2lmKGUucm9vdCl7aS5yb290PXVlKG4sZS5yb290KX1pZihlLnRocmVzaG9sZCl7aS50aHJlc2hvbGQ9cGFyc2VGbG9hdChlLnRocmVzaG9sZCl9dmFyIGE9bmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGZ1bmN0aW9uKGUpe2Zvcih2YXIgdD0wO3Q8ZS5sZW5ndGg7dCsrKXt2YXIgcj1lW3RdO2lmKHIuaXNJbnRlcnNlY3Rpbmcpe2NlKG4sXCJpbnRlcnNlY3RcIik7YnJlYWt9fX0saSk7YS5vYnNlcnZlKG4pO2h0KG4scix0LGUpfWVsc2UgaWYoZS50cmlnZ2VyPT09XCJsb2FkXCIpe2lmKCFjdChlLG4sV3QoXCJsb2FkXCIse2VsdDpufSkpKXtxdChuLHIsdCxlLmRlbGF5KX19ZWxzZSBpZihlLnBvbGxJbnRlcnZhbD4wKXt0LnBvbGxpbmc9dHJ1ZTtvdChuLHIsZSl9ZWxzZXtodChuLHIsdCxlKX19ZnVuY3Rpb24gQXQoZSl7aWYoUS5jb25maWcuYWxsb3dTY3JpcHRUYWdzJiYoZS50eXBlPT09XCJ0ZXh0L2phdmFzY3JpcHRcInx8ZS50eXBlPT09XCJtb2R1bGVcInx8ZS50eXBlPT09XCJcIikpe3ZhciB0PXJlKCkuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtvZShlLmF0dHJpYnV0ZXMsZnVuY3Rpb24oZSl7dC5zZXRBdHRyaWJ1dGUoZS5uYW1lLGUudmFsdWUpfSk7dC50ZXh0Q29udGVudD1lLnRleHRDb250ZW50O3QuYXN5bmM9ZmFsc2U7aWYoUS5jb25maWcuaW5saW5lU2NyaXB0Tm9uY2Upe3Qubm9uY2U9US5jb25maWcuaW5saW5lU2NyaXB0Tm9uY2V9dmFyIHI9ZS5wYXJlbnRFbGVtZW50O3RyeXtyLmluc2VydEJlZm9yZSh0LGUpfWNhdGNoKGUpe2IoZSl9ZmluYWxseXtpZihlLnBhcmVudEVsZW1lbnQpe2UucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChlKX19fX1mdW5jdGlvbiBOdChlKXtpZihoKGUsXCJzY3JpcHRcIikpe0F0KGUpfW9lKGYoZSxcInNjcmlwdFwiKSxmdW5jdGlvbihlKXtBdChlKX0pfWZ1bmN0aW9uIEl0KGUpe3ZhciB0PWUuYXR0cmlidXRlcztmb3IodmFyIHI9MDtyPHQubGVuZ3RoO3IrKyl7dmFyIG49dFtyXS5uYW1lO2lmKHMobixcImh4LW9uOlwiKXx8cyhuLFwiZGF0YS1oeC1vbjpcIil8fHMobixcImh4LW9uLVwiKXx8cyhuLFwiZGF0YS1oeC1vbi1cIikpe3JldHVybiB0cnVlfX1yZXR1cm4gZmFsc2V9ZnVuY3Rpb24ga3QoZSl7dmFyIHQ9bnVsbDt2YXIgcj1bXTtpZihJdChlKSl7ci5wdXNoKGUpfWlmKGRvY3VtZW50LmV2YWx1YXRlKXt2YXIgbj1kb2N1bWVudC5ldmFsdWF0ZSgnLi8vKltAKlsgc3RhcnRzLXdpdGgobmFtZSgpLCBcImh4LW9uOlwiKSBvciBzdGFydHMtd2l0aChuYW1lKCksIFwiZGF0YS1oeC1vbjpcIikgb3InKycgc3RhcnRzLXdpdGgobmFtZSgpLCBcImh4LW9uLVwiKSBvciBzdGFydHMtd2l0aChuYW1lKCksIFwiZGF0YS1oeC1vbi1cIikgXV0nLGUpO3doaWxlKHQ9bi5pdGVyYXRlTmV4dCgpKXIucHVzaCh0KX1lbHNle3ZhciBpPWUuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCIqXCIpO2Zvcih2YXIgYT0wO2E8aS5sZW5ndGg7YSsrKXtpZihJdChpW2FdKSl7ci5wdXNoKGlbYV0pfX19cmV0dXJuIHJ9ZnVuY3Rpb24gUHQoZSl7aWYoZS5xdWVyeVNlbGVjdG9yQWxsKXt2YXIgdD1cIiwgW2h4LWJvb3N0XSBhLCBbZGF0YS1oeC1ib29zdF0gYSwgYVtoeC1ib29zdF0sIGFbZGF0YS1oeC1ib29zdF1cIjt2YXIgcj1lLnF1ZXJ5U2VsZWN0b3JBbGwoaSt0K1wiLCBmb3JtLCBbdHlwZT0nc3VibWl0J10sIFtoeC1zc2VdLCBbZGF0YS1oeC1zc2VdLCBbaHgtd3NdLFwiK1wiIFtkYXRhLWh4LXdzXSwgW2h4LWV4dF0sIFtkYXRhLWh4LWV4dF0sIFtoeC10cmlnZ2VyXSwgW2RhdGEtaHgtdHJpZ2dlcl0sIFtoeC1vbl0sIFtkYXRhLWh4LW9uXVwiKTtyZXR1cm4gcn1lbHNle3JldHVybltdfX1mdW5jdGlvbiBNdChlKXt2YXIgdD12KGUudGFyZ2V0LFwiYnV0dG9uLCBpbnB1dFt0eXBlPSdzdWJtaXQnXVwiKTt2YXIgcj1EdChlKTtpZihyKXtyLmxhc3RCdXR0b25DbGlja2VkPXR9fWZ1bmN0aW9uIFh0KGUpe3ZhciB0PUR0KGUpO2lmKHQpe3QubGFzdEJ1dHRvbkNsaWNrZWQ9bnVsbH19ZnVuY3Rpb24gRHQoZSl7dmFyIHQ9dihlLnRhcmdldCxcImJ1dHRvbiwgaW5wdXRbdHlwZT0nc3VibWl0J11cIik7aWYoIXQpe3JldHVybn12YXIgcj1nKFwiI1wiK2VlKHQsXCJmb3JtXCIpKXx8dih0LFwiZm9ybVwiKTtpZighcil7cmV0dXJufXJldHVybiBhZShyKX1mdW5jdGlvbiBVdChlKXtlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLE10KTtlLmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c2luXCIsTXQpO2UuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3Vzb3V0XCIsWHQpfWZ1bmN0aW9uIEJ0KGUpe3ZhciB0PVllKGUpO3ZhciByPTA7Zm9yKHZhciBuPTA7bjx0Lmxlbmd0aDtuKyspe2NvbnN0IGk9dFtuXTtpZihpPT09XCJ7XCIpe3IrK31lbHNlIGlmKGk9PT1cIn1cIil7ci0tfX1yZXR1cm4gcn1mdW5jdGlvbiBGdCh0LGUscil7dmFyIG49YWUodCk7aWYoIUFycmF5LmlzQXJyYXkobi5vbkhhbmRsZXJzKSl7bi5vbkhhbmRsZXJzPVtdfXZhciBpO3ZhciBhPWZ1bmN0aW9uKGUpe3JldHVybiBUcih0LGZ1bmN0aW9uKCl7aWYoIWkpe2k9bmV3IEZ1bmN0aW9uKFwiZXZlbnRcIixyKX1pLmNhbGwodCxlKX0pfTt0LmFkZEV2ZW50TGlzdGVuZXIoZSxhKTtuLm9uSGFuZGxlcnMucHVzaCh7ZXZlbnQ6ZSxsaXN0ZW5lcjphfSl9ZnVuY3Rpb24gVnQoZSl7dmFyIHQ9dGUoZSxcImh4LW9uXCIpO2lmKHQpe3ZhciByPXt9O3ZhciBuPXQuc3BsaXQoXCJcXG5cIik7dmFyIGk9bnVsbDt2YXIgYT0wO3doaWxlKG4ubGVuZ3RoPjApe3ZhciBvPW4uc2hpZnQoKTt2YXIgcz1vLm1hdGNoKC9eXFxzKihbYS16QS1aOlxcLVxcLl0rOikoLiopLyk7aWYoYT09PTAmJnMpe28uc3BsaXQoXCI6XCIpO2k9c1sxXS5zbGljZSgwLC0xKTtyW2ldPXNbMl19ZWxzZXtyW2ldKz1vfWErPUJ0KG8pfWZvcih2YXIgbCBpbiByKXtGdChlLGwscltsXSl9fX1mdW5jdGlvbiBqdChlKXtBZShlKTtmb3IodmFyIHQ9MDt0PGUuYXR0cmlidXRlcy5sZW5ndGg7dCsrKXt2YXIgcj1lLmF0dHJpYnV0ZXNbdF0ubmFtZTt2YXIgbj1lLmF0dHJpYnV0ZXNbdF0udmFsdWU7aWYocyhyLFwiaHgtb25cIil8fHMocixcImRhdGEtaHgtb25cIikpe3ZhciBpPXIuaW5kZXhPZihcIi1vblwiKSszO3ZhciBhPXIuc2xpY2UoaSxpKzEpO2lmKGE9PT1cIi1cInx8YT09PVwiOlwiKXt2YXIgbz1yLnNsaWNlKGkrMSk7aWYocyhvLFwiOlwiKSl7bz1cImh0bXhcIitvfWVsc2UgaWYocyhvLFwiLVwiKSl7bz1cImh0bXg6XCIrby5zbGljZSgxKX1lbHNlIGlmKHMobyxcImh0bXgtXCIpKXtvPVwiaHRteDpcIitvLnNsaWNlKDUpfUZ0KGUsbyxuKX19fX1mdW5jdGlvbiBfdCh0KXtpZih2KHQsUS5jb25maWcuZGlzYWJsZVNlbGVjdG9yKSl7cCh0KTtyZXR1cm59dmFyIHI9YWUodCk7aWYoci5pbml0SGFzaCE9PUxlKHQpKXtOZSh0KTtyLmluaXRIYXNoPUxlKHQpO1Z0KHQpO2NlKHQsXCJodG14OmJlZm9yZVByb2Nlc3NOb2RlXCIpO2lmKHQudmFsdWUpe3IubGFzdFZhbHVlPXQudmFsdWV9dmFyIGU9aXQodCk7dmFyIG49SHQodCxyLGUpO2lmKCFuKXtpZihuZSh0LFwiaHgtYm9vc3RcIik9PT1cInRydWVcIil7bHQodCxyLGUpfWVsc2UgaWYobyh0LFwiaHgtdHJpZ2dlclwiKSl7ZS5mb3JFYWNoKGZ1bmN0aW9uKGUpe0x0KHQsZSxyLGZ1bmN0aW9uKCl7fSl9KX19aWYodC50YWdOYW1lPT09XCJGT1JNXCJ8fGVlKHQsXCJ0eXBlXCIpPT09XCJzdWJtaXRcIiYmbyh0LFwiZm9ybVwiKSl7VXQodCl9dmFyIGk9dGUodCxcImh4LXNzZVwiKTtpZihpKXtTdCh0LHIsaSl9dmFyIGE9dGUodCxcImh4LXdzXCIpO2lmKGEpe3B0KHQscixhKX1jZSh0LFwiaHRteDphZnRlclByb2Nlc3NOb2RlXCIpfX1mdW5jdGlvbiB6dChlKXtlPWcoZSk7aWYodihlLFEuY29uZmlnLmRpc2FibGVTZWxlY3Rvcikpe3AoZSk7cmV0dXJufV90KGUpO29lKFB0KGUpLGZ1bmN0aW9uKGUpe190KGUpfSk7b2Uoa3QoZSksanQpfWZ1bmN0aW9uICR0KGUpe3JldHVybiBlLnJlcGxhY2UoLyhbYS16MC05XSkoW0EtWl0pL2csXCIkMS0kMlwiKS50b0xvd2VyQ2FzZSgpfWZ1bmN0aW9uIFd0KGUsdCl7dmFyIHI7aWYod2luZG93LkN1c3RvbUV2ZW50JiZ0eXBlb2Ygd2luZG93LkN1c3RvbUV2ZW50PT09XCJmdW5jdGlvblwiKXtyPW5ldyBDdXN0b21FdmVudChlLHtidWJibGVzOnRydWUsY2FuY2VsYWJsZTp0cnVlLGRldGFpbDp0fSl9ZWxzZXtyPXJlKCkuY3JlYXRlRXZlbnQoXCJDdXN0b21FdmVudFwiKTtyLmluaXRDdXN0b21FdmVudChlLHRydWUsdHJ1ZSx0KX1yZXR1cm4gcn1mdW5jdGlvbiBmZShlLHQscil7Y2UoZSx0LGxlKHtlcnJvcjp0fSxyKSl9ZnVuY3Rpb24gR3QoZSl7cmV0dXJuIGU9PT1cImh0bXg6YWZ0ZXJQcm9jZXNzTm9kZVwifWZ1bmN0aW9uIFIoZSx0KXtvZShGcihlKSxmdW5jdGlvbihlKXt0cnl7dChlKX1jYXRjaChlKXtiKGUpfX0pfWZ1bmN0aW9uIGIoZSl7aWYoY29uc29sZS5lcnJvcil7Y29uc29sZS5lcnJvcihlKX1lbHNlIGlmKGNvbnNvbGUubG9nKXtjb25zb2xlLmxvZyhcIkVSUk9SOiBcIixlKX19ZnVuY3Rpb24gY2UoZSx0LHIpe2U9ZyhlKTtpZihyPT1udWxsKXtyPXt9fXJbXCJlbHRcIl09ZTt2YXIgbj1XdCh0LHIpO2lmKFEubG9nZ2VyJiYhR3QodCkpe1EubG9nZ2VyKGUsdCxyKX1pZihyLmVycm9yKXtiKHIuZXJyb3IpO2NlKGUsXCJodG14OmVycm9yXCIse2Vycm9ySW5mbzpyfSl9dmFyIGk9ZS5kaXNwYXRjaEV2ZW50KG4pO3ZhciBhPSR0KHQpO2lmKGkmJmEhPT10KXt2YXIgbz1XdChhLG4uZGV0YWlsKTtpPWkmJmUuZGlzcGF0Y2hFdmVudChvKX1SKGUsZnVuY3Rpb24oZSl7aT1pJiYoZS5vbkV2ZW50KHQsbikhPT1mYWxzZSYmIW4uZGVmYXVsdFByZXZlbnRlZCl9KTtyZXR1cm4gaX12YXIgSnQ9bG9jYXRpb24ucGF0aG5hbWUrbG9jYXRpb24uc2VhcmNoO2Z1bmN0aW9uIFp0KCl7dmFyIGU9cmUoKS5xdWVyeVNlbGVjdG9yKFwiW2h4LWhpc3RvcnktZWx0XSxbZGF0YS1oeC1oaXN0b3J5LWVsdF1cIik7cmV0dXJuIGV8fHJlKCkuYm9keX1mdW5jdGlvbiBLdChlLHQscixuKXtpZighVSgpKXtyZXR1cm59aWYoUS5jb25maWcuaGlzdG9yeUNhY2hlU2l6ZTw9MCl7bG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJodG14LWhpc3RvcnktY2FjaGVcIik7cmV0dXJufWU9QihlKTt2YXIgaT1FKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiaHRteC1oaXN0b3J5LWNhY2hlXCIpKXx8W107Zm9yKHZhciBhPTA7YTxpLmxlbmd0aDthKyspe2lmKGlbYV0udXJsPT09ZSl7aS5zcGxpY2UoYSwxKTticmVha319dmFyIG89e3VybDplLGNvbnRlbnQ6dCx0aXRsZTpyLHNjcm9sbDpufTtjZShyZSgpLmJvZHksXCJodG14Omhpc3RvcnlJdGVtQ3JlYXRlZFwiLHtpdGVtOm8sY2FjaGU6aX0pO2kucHVzaChvKTt3aGlsZShpLmxlbmd0aD5RLmNvbmZpZy5oaXN0b3J5Q2FjaGVTaXplKXtpLnNoaWZ0KCl9d2hpbGUoaS5sZW5ndGg+MCl7dHJ5e2xvY2FsU3RvcmFnZS5zZXRJdGVtKFwiaHRteC1oaXN0b3J5LWNhY2hlXCIsSlNPTi5zdHJpbmdpZnkoaSkpO2JyZWFrfWNhdGNoKGUpe2ZlKHJlKCkuYm9keSxcImh0bXg6aGlzdG9yeUNhY2hlRXJyb3JcIix7Y2F1c2U6ZSxjYWNoZTppfSk7aS5zaGlmdCgpfX19ZnVuY3Rpb24gWXQoZSl7aWYoIVUoKSl7cmV0dXJuIG51bGx9ZT1CKGUpO3ZhciB0PUUobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJodG14LWhpc3RvcnktY2FjaGVcIikpfHxbXTtmb3IodmFyIHI9MDtyPHQubGVuZ3RoO3IrKyl7aWYodFtyXS51cmw9PT1lKXtyZXR1cm4gdFtyXX19cmV0dXJuIG51bGx9ZnVuY3Rpb24gUXQoZSl7dmFyIHQ9US5jb25maWcucmVxdWVzdENsYXNzO3ZhciByPWUuY2xvbmVOb2RlKHRydWUpO29lKGYocixcIi5cIit0KSxmdW5jdGlvbihlKXtuKGUsdCl9KTtyZXR1cm4gci5pbm5lckhUTUx9ZnVuY3Rpb24gZXIoKXt2YXIgZT1adCgpO3ZhciB0PUp0fHxsb2NhdGlvbi5wYXRobmFtZStsb2NhdGlvbi5zZWFyY2g7dmFyIHI7dHJ5e3I9cmUoKS5xdWVyeVNlbGVjdG9yKCdbaHgtaGlzdG9yeT1cImZhbHNlXCIgaV0sW2RhdGEtaHgtaGlzdG9yeT1cImZhbHNlXCIgaV0nKX1jYXRjaChlKXtyPXJlKCkucXVlcnlTZWxlY3RvcignW2h4LWhpc3Rvcnk9XCJmYWxzZVwiXSxbZGF0YS1oeC1oaXN0b3J5PVwiZmFsc2VcIl0nKX1pZighcil7Y2UocmUoKS5ib2R5LFwiaHRteDpiZWZvcmVIaXN0b3J5U2F2ZVwiLHtwYXRoOnQsaGlzdG9yeUVsdDplfSk7S3QodCxRdChlKSxyZSgpLnRpdGxlLHdpbmRvdy5zY3JvbGxZKX1pZihRLmNvbmZpZy5oaXN0b3J5RW5hYmxlZCloaXN0b3J5LnJlcGxhY2VTdGF0ZSh7aHRteDp0cnVlfSxyZSgpLnRpdGxlLHdpbmRvdy5sb2NhdGlvbi5ocmVmKX1mdW5jdGlvbiB0cihlKXtpZihRLmNvbmZpZy5nZXRDYWNoZUJ1c3RlclBhcmFtKXtlPWUucmVwbGFjZSgvb3JnXFwuaHRteFxcLmNhY2hlLWJ1c3Rlcj1bXiZdKiY/LyxcIlwiKTtpZihHKGUsXCImXCIpfHxHKGUsXCI/XCIpKXtlPWUuc2xpY2UoMCwtMSl9fWlmKFEuY29uZmlnLmhpc3RvcnlFbmFibGVkKXtoaXN0b3J5LnB1c2hTdGF0ZSh7aHRteDp0cnVlfSxcIlwiLGUpfUp0PWV9ZnVuY3Rpb24gcnIoZSl7aWYoUS5jb25maWcuaGlzdG9yeUVuYWJsZWQpaGlzdG9yeS5yZXBsYWNlU3RhdGUoe2h0bXg6dHJ1ZX0sXCJcIixlKTtKdD1lfWZ1bmN0aW9uIG5yKGUpe29lKGUsZnVuY3Rpb24oZSl7ZS5jYWxsKCl9KX1mdW5jdGlvbiBpcihhKXt2YXIgZT1uZXcgWE1MSHR0cFJlcXVlc3Q7dmFyIG89e3BhdGg6YSx4aHI6ZX07Y2UocmUoKS5ib2R5LFwiaHRteDpoaXN0b3J5Q2FjaGVNaXNzXCIsbyk7ZS5vcGVuKFwiR0VUXCIsYSx0cnVlKTtlLnNldFJlcXVlc3RIZWFkZXIoXCJIWC1SZXF1ZXN0XCIsXCJ0cnVlXCIpO2Uuc2V0UmVxdWVzdEhlYWRlcihcIkhYLUhpc3RvcnktUmVzdG9yZS1SZXF1ZXN0XCIsXCJ0cnVlXCIpO2Uuc2V0UmVxdWVzdEhlYWRlcihcIkhYLUN1cnJlbnQtVVJMXCIscmUoKS5sb2NhdGlvbi5ocmVmKTtlLm9ubG9hZD1mdW5jdGlvbigpe2lmKHRoaXMuc3RhdHVzPj0yMDAmJnRoaXMuc3RhdHVzPDQwMCl7Y2UocmUoKS5ib2R5LFwiaHRteDpoaXN0b3J5Q2FjaGVNaXNzTG9hZFwiLG8pO3ZhciBlPWwodGhpcy5yZXNwb25zZSk7ZT1lLnF1ZXJ5U2VsZWN0b3IoXCJbaHgtaGlzdG9yeS1lbHRdLFtkYXRhLWh4LWhpc3RvcnktZWx0XVwiKXx8ZTt2YXIgdD1adCgpO3ZhciByPVQodCk7dmFyIG49VmUodGhpcy5yZXNwb25zZSk7aWYobil7dmFyIGk9QyhcInRpdGxlXCIpO2lmKGkpe2kuaW5uZXJIVE1MPW59ZWxzZXt3aW5kb3cuZG9jdW1lbnQudGl0bGU9bn19VWUodCxlLHIpO25yKHIudGFza3MpO0p0PWE7Y2UocmUoKS5ib2R5LFwiaHRteDpoaXN0b3J5UmVzdG9yZVwiLHtwYXRoOmEsY2FjaGVNaXNzOnRydWUsc2VydmVyUmVzcG9uc2U6dGhpcy5yZXNwb25zZX0pfWVsc2V7ZmUocmUoKS5ib2R5LFwiaHRteDpoaXN0b3J5Q2FjaGVNaXNzTG9hZEVycm9yXCIsbyl9fTtlLnNlbmQoKX1mdW5jdGlvbiBhcihlKXtlcigpO2U9ZXx8bG9jYXRpb24ucGF0aG5hbWUrbG9jYXRpb24uc2VhcmNoO3ZhciB0PVl0KGUpO2lmKHQpe3ZhciByPWwodC5jb250ZW50KTt2YXIgbj1adCgpO3ZhciBpPVQobik7VWUobixyLGkpO25yKGkudGFza3MpO2RvY3VtZW50LnRpdGxlPXQudGl0bGU7c2V0VGltZW91dChmdW5jdGlvbigpe3dpbmRvdy5zY3JvbGxUbygwLHQuc2Nyb2xsKX0sMCk7SnQ9ZTtjZShyZSgpLmJvZHksXCJodG14Omhpc3RvcnlSZXN0b3JlXCIse3BhdGg6ZSxpdGVtOnR9KX1lbHNle2lmKFEuY29uZmlnLnJlZnJlc2hPbkhpc3RvcnlNaXNzKXt3aW5kb3cubG9jYXRpb24ucmVsb2FkKHRydWUpfWVsc2V7aXIoZSl9fX1mdW5jdGlvbiBvcihlKXt2YXIgdD1wZShlLFwiaHgtaW5kaWNhdG9yXCIpO2lmKHQ9PW51bGwpe3Q9W2VdfW9lKHQsZnVuY3Rpb24oZSl7dmFyIHQ9YWUoZSk7dC5yZXF1ZXN0Q291bnQ9KHQucmVxdWVzdENvdW50fHwwKSsxO2UuY2xhc3NMaXN0W1wiYWRkXCJdLmNhbGwoZS5jbGFzc0xpc3QsUS5jb25maWcucmVxdWVzdENsYXNzKX0pO3JldHVybiB0fWZ1bmN0aW9uIHNyKGUpe3ZhciB0PXBlKGUsXCJoeC1kaXNhYmxlZC1lbHRcIik7aWYodD09bnVsbCl7dD1bXX1vZSh0LGZ1bmN0aW9uKGUpe3ZhciB0PWFlKGUpO3QucmVxdWVzdENvdW50PSh0LnJlcXVlc3RDb3VudHx8MCkrMTtlLnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsXCJcIil9KTtyZXR1cm4gdH1mdW5jdGlvbiBscihlLHQpe29lKGUsZnVuY3Rpb24oZSl7dmFyIHQ9YWUoZSk7dC5yZXF1ZXN0Q291bnQ9KHQucmVxdWVzdENvdW50fHwwKS0xO2lmKHQucmVxdWVzdENvdW50PT09MCl7ZS5jbGFzc0xpc3RbXCJyZW1vdmVcIl0uY2FsbChlLmNsYXNzTGlzdCxRLmNvbmZpZy5yZXF1ZXN0Q2xhc3MpfX0pO29lKHQsZnVuY3Rpb24oZSl7dmFyIHQ9YWUoZSk7dC5yZXF1ZXN0Q291bnQ9KHQucmVxdWVzdENvdW50fHwwKS0xO2lmKHQucmVxdWVzdENvdW50PT09MCl7ZS5yZW1vdmVBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKX19KX1mdW5jdGlvbiB1cihlLHQpe2Zvcih2YXIgcj0wO3I8ZS5sZW5ndGg7cisrKXt2YXIgbj1lW3JdO2lmKG4uaXNTYW1lTm9kZSh0KSl7cmV0dXJuIHRydWV9fXJldHVybiBmYWxzZX1mdW5jdGlvbiBmcihlKXtpZihlLm5hbWU9PT1cIlwifHxlLm5hbWU9PW51bGx8fGUuZGlzYWJsZWR8fHYoZSxcImZpZWxkc2V0W2Rpc2FibGVkXVwiKSl7cmV0dXJuIGZhbHNlfWlmKGUudHlwZT09PVwiYnV0dG9uXCJ8fGUudHlwZT09PVwic3VibWl0XCJ8fGUudGFnTmFtZT09PVwiaW1hZ2VcInx8ZS50YWdOYW1lPT09XCJyZXNldFwifHxlLnRhZ05hbWU9PT1cImZpbGVcIil7cmV0dXJuIGZhbHNlfWlmKGUudHlwZT09PVwiY2hlY2tib3hcInx8ZS50eXBlPT09XCJyYWRpb1wiKXtyZXR1cm4gZS5jaGVja2VkfXJldHVybiB0cnVlfWZ1bmN0aW9uIGNyKGUsdCxyKXtpZihlIT1udWxsJiZ0IT1udWxsKXt2YXIgbj1yW2VdO2lmKG49PT11bmRlZmluZWQpe3JbZV09dH1lbHNlIGlmKEFycmF5LmlzQXJyYXkobikpe2lmKEFycmF5LmlzQXJyYXkodCkpe3JbZV09bi5jb25jYXQodCl9ZWxzZXtuLnB1c2godCl9fWVsc2V7aWYoQXJyYXkuaXNBcnJheSh0KSl7cltlXT1bbl0uY29uY2F0KHQpfWVsc2V7cltlXT1bbix0XX19fX1mdW5jdGlvbiBocih0LHIsbixlLGkpe2lmKGU9PW51bGx8fHVyKHQsZSkpe3JldHVybn1lbHNle3QucHVzaChlKX1pZihmcihlKSl7dmFyIGE9ZWUoZSxcIm5hbWVcIik7dmFyIG89ZS52YWx1ZTtpZihlLm11bHRpcGxlJiZlLnRhZ05hbWU9PT1cIlNFTEVDVFwiKXtvPU0oZS5xdWVyeVNlbGVjdG9yQWxsKFwib3B0aW9uOmNoZWNrZWRcIikpLm1hcChmdW5jdGlvbihlKXtyZXR1cm4gZS52YWx1ZX0pfWlmKGUuZmlsZXMpe289TShlLmZpbGVzKX1jcihhLG8scik7aWYoaSl7dnIoZSxuKX19aWYoaChlLFwiZm9ybVwiKSl7dmFyIHM9ZS5lbGVtZW50cztvZShzLGZ1bmN0aW9uKGUpe2hyKHQscixuLGUsaSl9KX19ZnVuY3Rpb24gdnIoZSx0KXtpZihlLndpbGxWYWxpZGF0ZSl7Y2UoZSxcImh0bXg6dmFsaWRhdGlvbjp2YWxpZGF0ZVwiKTtpZighZS5jaGVja1ZhbGlkaXR5KCkpe3QucHVzaCh7ZWx0OmUsbWVzc2FnZTplLnZhbGlkYXRpb25NZXNzYWdlLHZhbGlkaXR5OmUudmFsaWRpdHl9KTtjZShlLFwiaHRteDp2YWxpZGF0aW9uOmZhaWxlZFwiLHttZXNzYWdlOmUudmFsaWRhdGlvbk1lc3NhZ2UsdmFsaWRpdHk6ZS52YWxpZGl0eX0pfX19ZnVuY3Rpb24gZHIoZSx0KXt2YXIgcj1bXTt2YXIgbj17fTt2YXIgaT17fTt2YXIgYT1bXTt2YXIgbz1hZShlKTtpZihvLmxhc3RCdXR0b25DbGlja2VkJiYhc2Uoby5sYXN0QnV0dG9uQ2xpY2tlZCkpe28ubGFzdEJ1dHRvbkNsaWNrZWQ9bnVsbH12YXIgcz1oKGUsXCJmb3JtXCIpJiZlLm5vVmFsaWRhdGUhPT10cnVlfHx0ZShlLFwiaHgtdmFsaWRhdGVcIik9PT1cInRydWVcIjtpZihvLmxhc3RCdXR0b25DbGlja2VkKXtzPXMmJm8ubGFzdEJ1dHRvbkNsaWNrZWQuZm9ybU5vVmFsaWRhdGUhPT10cnVlfWlmKHQhPT1cImdldFwiKXtocihyLGksYSx2KGUsXCJmb3JtXCIpLHMpfWhyKHIsbixhLGUscyk7aWYoby5sYXN0QnV0dG9uQ2xpY2tlZHx8ZS50YWdOYW1lPT09XCJCVVRUT05cInx8ZS50YWdOYW1lPT09XCJJTlBVVFwiJiZlZShlLFwidHlwZVwiKT09PVwic3VibWl0XCIpe3ZhciBsPW8ubGFzdEJ1dHRvbkNsaWNrZWR8fGU7dmFyIHU9ZWUobCxcIm5hbWVcIik7Y3IodSxsLnZhbHVlLGkpfXZhciBmPXBlKGUsXCJoeC1pbmNsdWRlXCIpO29lKGYsZnVuY3Rpb24oZSl7aHIocixuLGEsZSxzKTtpZighaChlLFwiZm9ybVwiKSl7b2UoZS5xdWVyeVNlbGVjdG9yQWxsKHJ0KSxmdW5jdGlvbihlKXtocihyLG4sYSxlLHMpfSl9fSk7bj1sZShuLGkpO3JldHVybntlcnJvcnM6YSx2YWx1ZXM6bn19ZnVuY3Rpb24gZ3IoZSx0LHIpe2lmKGUhPT1cIlwiKXtlKz1cIiZcIn1pZihTdHJpbmcocik9PT1cIltvYmplY3QgT2JqZWN0XVwiKXtyPUpTT04uc3RyaW5naWZ5KHIpfXZhciBuPWVuY29kZVVSSUNvbXBvbmVudChyKTtlKz1lbmNvZGVVUklDb21wb25lbnQodCkrXCI9XCIrbjtyZXR1cm4gZX1mdW5jdGlvbiBtcihlKXt2YXIgdD1cIlwiO2Zvcih2YXIgciBpbiBlKXtpZihlLmhhc093blByb3BlcnR5KHIpKXt2YXIgbj1lW3JdO2lmKEFycmF5LmlzQXJyYXkobikpe29lKG4sZnVuY3Rpb24oZSl7dD1ncih0LHIsZSl9KX1lbHNle3Q9Z3IodCxyLG4pfX19cmV0dXJuIHR9ZnVuY3Rpb24gcHIoZSl7dmFyIHQ9bmV3IEZvcm1EYXRhO2Zvcih2YXIgciBpbiBlKXtpZihlLmhhc093blByb3BlcnR5KHIpKXt2YXIgbj1lW3JdO2lmKEFycmF5LmlzQXJyYXkobikpe29lKG4sZnVuY3Rpb24oZSl7dC5hcHBlbmQocixlKX0pfWVsc2V7dC5hcHBlbmQocixuKX19fXJldHVybiB0fWZ1bmN0aW9uIHhyKGUsdCxyKXt2YXIgbj17XCJIWC1SZXF1ZXN0XCI6XCJ0cnVlXCIsXCJIWC1UcmlnZ2VyXCI6ZWUoZSxcImlkXCIpLFwiSFgtVHJpZ2dlci1OYW1lXCI6ZWUoZSxcIm5hbWVcIiksXCJIWC1UYXJnZXRcIjp0ZSh0LFwiaWRcIiksXCJIWC1DdXJyZW50LVVSTFwiOnJlKCkubG9jYXRpb24uaHJlZn07UnIoZSxcImh4LWhlYWRlcnNcIixmYWxzZSxuKTtpZihyIT09dW5kZWZpbmVkKXtuW1wiSFgtUHJvbXB0XCJdPXJ9aWYoYWUoZSkuYm9vc3RlZCl7bltcIkhYLUJvb3N0ZWRcIl09XCJ0cnVlXCJ9cmV0dXJuIG59ZnVuY3Rpb24geXIodCxlKXt2YXIgcj1uZShlLFwiaHgtcGFyYW1zXCIpO2lmKHIpe2lmKHI9PT1cIm5vbmVcIil7cmV0dXJue319ZWxzZSBpZihyPT09XCIqXCIpe3JldHVybiB0fWVsc2UgaWYoci5pbmRleE9mKFwibm90IFwiKT09PTApe29lKHIuc3Vic3RyKDQpLnNwbGl0KFwiLFwiKSxmdW5jdGlvbihlKXtlPWUudHJpbSgpO2RlbGV0ZSB0W2VdfSk7cmV0dXJuIHR9ZWxzZXt2YXIgbj17fTtvZShyLnNwbGl0KFwiLFwiKSxmdW5jdGlvbihlKXtlPWUudHJpbSgpO25bZV09dFtlXX0pO3JldHVybiBufX1lbHNle3JldHVybiB0fX1mdW5jdGlvbiBicihlKXtyZXR1cm4gZWUoZSxcImhyZWZcIikmJmVlKGUsXCJocmVmXCIpLmluZGV4T2YoXCIjXCIpPj0wfWZ1bmN0aW9uIHdyKGUsdCl7dmFyIHI9dD90Om5lKGUsXCJoeC1zd2FwXCIpO3ZhciBuPXtzd2FwU3R5bGU6YWUoZSkuYm9vc3RlZD9cImlubmVySFRNTFwiOlEuY29uZmlnLmRlZmF1bHRTd2FwU3R5bGUsc3dhcERlbGF5OlEuY29uZmlnLmRlZmF1bHRTd2FwRGVsYXksc2V0dGxlRGVsYXk6US5jb25maWcuZGVmYXVsdFNldHRsZURlbGF5fTtpZihRLmNvbmZpZy5zY3JvbGxJbnRvVmlld09uQm9vc3QmJmFlKGUpLmJvb3N0ZWQmJiFicihlKSl7bltcInNob3dcIl09XCJ0b3BcIn1pZihyKXt2YXIgaT1EKHIpO2lmKGkubGVuZ3RoPjApe2Zvcih2YXIgYT0wO2E8aS5sZW5ndGg7YSsrKXt2YXIgbz1pW2FdO2lmKG8uaW5kZXhPZihcInN3YXA6XCIpPT09MCl7bltcInN3YXBEZWxheVwiXT1kKG8uc3Vic3RyKDUpKX1lbHNlIGlmKG8uaW5kZXhPZihcInNldHRsZTpcIik9PT0wKXtuW1wic2V0dGxlRGVsYXlcIl09ZChvLnN1YnN0cig3KSl9ZWxzZSBpZihvLmluZGV4T2YoXCJ0cmFuc2l0aW9uOlwiKT09PTApe25bXCJ0cmFuc2l0aW9uXCJdPW8uc3Vic3RyKDExKT09PVwidHJ1ZVwifWVsc2UgaWYoby5pbmRleE9mKFwiaWdub3JlVGl0bGU6XCIpPT09MCl7bltcImlnbm9yZVRpdGxlXCJdPW8uc3Vic3RyKDEyKT09PVwidHJ1ZVwifWVsc2UgaWYoby5pbmRleE9mKFwic2Nyb2xsOlwiKT09PTApe3ZhciBzPW8uc3Vic3RyKDcpO3ZhciBsPXMuc3BsaXQoXCI6XCIpO3ZhciB1PWwucG9wKCk7dmFyIGY9bC5sZW5ndGg+MD9sLmpvaW4oXCI6XCIpOm51bGw7bltcInNjcm9sbFwiXT11O25bXCJzY3JvbGxUYXJnZXRcIl09Zn1lbHNlIGlmKG8uaW5kZXhPZihcInNob3c6XCIpPT09MCl7dmFyIGM9by5zdWJzdHIoNSk7dmFyIGw9Yy5zcGxpdChcIjpcIik7dmFyIGg9bC5wb3AoKTt2YXIgZj1sLmxlbmd0aD4wP2wuam9pbihcIjpcIik6bnVsbDtuW1wic2hvd1wiXT1oO25bXCJzaG93VGFyZ2V0XCJdPWZ9ZWxzZSBpZihvLmluZGV4T2YoXCJmb2N1cy1zY3JvbGw6XCIpPT09MCl7dmFyIHY9by5zdWJzdHIoXCJmb2N1cy1zY3JvbGw6XCIubGVuZ3RoKTtuW1wiZm9jdXNTY3JvbGxcIl09dj09XCJ0cnVlXCJ9ZWxzZSBpZihhPT0wKXtuW1wic3dhcFN0eWxlXCJdPW99ZWxzZXtiKFwiVW5rbm93biBtb2RpZmllciBpbiBoeC1zd2FwOiBcIitvKX19fX1yZXR1cm4gbn1mdW5jdGlvbiBTcihlKXtyZXR1cm4gbmUoZSxcImh4LWVuY29kaW5nXCIpPT09XCJtdWx0aXBhcnQvZm9ybS1kYXRhXCJ8fGgoZSxcImZvcm1cIikmJmVlKGUsXCJlbmN0eXBlXCIpPT09XCJtdWx0aXBhcnQvZm9ybS1kYXRhXCJ9ZnVuY3Rpb24gRXIodCxyLG4pe3ZhciBpPW51bGw7UihyLGZ1bmN0aW9uKGUpe2lmKGk9PW51bGwpe2k9ZS5lbmNvZGVQYXJhbWV0ZXJzKHQsbixyKX19KTtpZihpIT1udWxsKXtyZXR1cm4gaX1lbHNle2lmKFNyKHIpKXtyZXR1cm4gcHIobil9ZWxzZXtyZXR1cm4gbXIobil9fX1mdW5jdGlvbiBUKGUpe3JldHVybnt0YXNrczpbXSxlbHRzOltlXX19ZnVuY3Rpb24gQ3IoZSx0KXt2YXIgcj1lWzBdO3ZhciBuPWVbZS5sZW5ndGgtMV07aWYodC5zY3JvbGwpe3ZhciBpPW51bGw7aWYodC5zY3JvbGxUYXJnZXQpe2k9dWUocix0LnNjcm9sbFRhcmdldCl9aWYodC5zY3JvbGw9PT1cInRvcFwiJiYocnx8aSkpe2k9aXx8cjtpLnNjcm9sbFRvcD0wfWlmKHQuc2Nyb2xsPT09XCJib3R0b21cIiYmKG58fGkpKXtpPWl8fG47aS5zY3JvbGxUb3A9aS5zY3JvbGxIZWlnaHR9fWlmKHQuc2hvdyl7dmFyIGk9bnVsbDtpZih0LnNob3dUYXJnZXQpe3ZhciBhPXQuc2hvd1RhcmdldDtpZih0LnNob3dUYXJnZXQ9PT1cIndpbmRvd1wiKXthPVwiYm9keVwifWk9dWUocixhKX1pZih0LnNob3c9PT1cInRvcFwiJiYocnx8aSkpe2k9aXx8cjtpLnNjcm9sbEludG9WaWV3KHtibG9jazpcInN0YXJ0XCIsYmVoYXZpb3I6US5jb25maWcuc2Nyb2xsQmVoYXZpb3J9KX1pZih0LnNob3c9PT1cImJvdHRvbVwiJiYobnx8aSkpe2k9aXx8bjtpLnNjcm9sbEludG9WaWV3KHtibG9jazpcImVuZFwiLGJlaGF2aW9yOlEuY29uZmlnLnNjcm9sbEJlaGF2aW9yfSl9fX1mdW5jdGlvbiBScihlLHQscixuKXtpZihuPT1udWxsKXtuPXt9fWlmKGU9PW51bGwpe3JldHVybiBufXZhciBpPXRlKGUsdCk7aWYoaSl7dmFyIGE9aS50cmltKCk7dmFyIG89cjtpZihhPT09XCJ1bnNldFwiKXtyZXR1cm4gbnVsbH1pZihhLmluZGV4T2YoXCJqYXZhc2NyaXB0OlwiKT09PTApe2E9YS5zdWJzdHIoMTEpO289dHJ1ZX1lbHNlIGlmKGEuaW5kZXhPZihcImpzOlwiKT09PTApe2E9YS5zdWJzdHIoMyk7bz10cnVlfWlmKGEuaW5kZXhPZihcIntcIikhPT0wKXthPVwie1wiK2ErXCJ9XCJ9dmFyIHM7aWYobyl7cz1UcihlLGZ1bmN0aW9uKCl7cmV0dXJuIEZ1bmN0aW9uKFwicmV0dXJuIChcIithK1wiKVwiKSgpfSx7fSl9ZWxzZXtzPUUoYSl9Zm9yKHZhciBsIGluIHMpe2lmKHMuaGFzT3duUHJvcGVydHkobCkpe2lmKG5bbF09PW51bGwpe25bbF09c1tsXX19fX1yZXR1cm4gUnIodShlKSx0LHIsbil9ZnVuY3Rpb24gVHIoZSx0LHIpe2lmKFEuY29uZmlnLmFsbG93RXZhbCl7cmV0dXJuIHQoKX1lbHNle2ZlKGUsXCJodG14OmV2YWxEaXNhbGxvd2VkRXJyb3JcIik7cmV0dXJuIHJ9fWZ1bmN0aW9uIE9yKGUsdCl7cmV0dXJuIFJyKGUsXCJoeC12YXJzXCIsdHJ1ZSx0KX1mdW5jdGlvbiBxcihlLHQpe3JldHVybiBScihlLFwiaHgtdmFsc1wiLGZhbHNlLHQpfWZ1bmN0aW9uIEhyKGUpe3JldHVybiBsZShPcihlKSxxcihlKSl9ZnVuY3Rpb24gTHIodCxyLG4pe2lmKG4hPT1udWxsKXt0cnl7dC5zZXRSZXF1ZXN0SGVhZGVyKHIsbil9Y2F0Y2goZSl7dC5zZXRSZXF1ZXN0SGVhZGVyKHIsZW5jb2RlVVJJQ29tcG9uZW50KG4pKTt0LnNldFJlcXVlc3RIZWFkZXIocitcIi1VUkktQXV0b0VuY29kZWRcIixcInRydWVcIil9fX1mdW5jdGlvbiBBcih0KXtpZih0LnJlc3BvbnNlVVJMJiZ0eXBlb2YgVVJMIT09XCJ1bmRlZmluZWRcIil7dHJ5e3ZhciBlPW5ldyBVUkwodC5yZXNwb25zZVVSTCk7cmV0dXJuIGUucGF0aG5hbWUrZS5zZWFyY2h9Y2F0Y2goZSl7ZmUocmUoKS5ib2R5LFwiaHRteDpiYWRSZXNwb25zZVVybFwiLHt1cmw6dC5yZXNwb25zZVVSTH0pfX19ZnVuY3Rpb24gTyhlLHQpe3JldHVybiB0LnRlc3QoZS5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKSl9ZnVuY3Rpb24gTnIoZSx0LHIpe2U9ZS50b0xvd2VyQ2FzZSgpO2lmKHIpe2lmKHIgaW5zdGFuY2VvZiBFbGVtZW50fHxJKHIsXCJTdHJpbmdcIikpe3JldHVybiBoZShlLHQsbnVsbCxudWxsLHt0YXJnZXRPdmVycmlkZTpnKHIpLHJldHVyblByb21pc2U6dHJ1ZX0pfWVsc2V7cmV0dXJuIGhlKGUsdCxnKHIuc291cmNlKSxyLmV2ZW50LHtoYW5kbGVyOnIuaGFuZGxlcixoZWFkZXJzOnIuaGVhZGVycyx2YWx1ZXM6ci52YWx1ZXMsdGFyZ2V0T3ZlcnJpZGU6ZyhyLnRhcmdldCksc3dhcE92ZXJyaWRlOnIuc3dhcCxzZWxlY3Q6ci5zZWxlY3QscmV0dXJuUHJvbWlzZTp0cnVlfSl9fWVsc2V7cmV0dXJuIGhlKGUsdCxudWxsLG51bGwse3JldHVyblByb21pc2U6dHJ1ZX0pfX1mdW5jdGlvbiBJcihlKXt2YXIgdD1bXTt3aGlsZShlKXt0LnB1c2goZSk7ZT1lLnBhcmVudEVsZW1lbnR9cmV0dXJuIHR9ZnVuY3Rpb24ga3IoZSx0LHIpe3ZhciBuO3ZhciBpO2lmKHR5cGVvZiBVUkw9PT1cImZ1bmN0aW9uXCIpe2k9bmV3IFVSTCh0LGRvY3VtZW50LmxvY2F0aW9uLmhyZWYpO3ZhciBhPWRvY3VtZW50LmxvY2F0aW9uLm9yaWdpbjtuPWE9PT1pLm9yaWdpbn1lbHNle2k9dDtuPXModCxkb2N1bWVudC5sb2NhdGlvbi5vcmlnaW4pfWlmKFEuY29uZmlnLnNlbGZSZXF1ZXN0c09ubHkpe2lmKCFuKXtyZXR1cm4gZmFsc2V9fXJldHVybiBjZShlLFwiaHRteDp2YWxpZGF0ZVVybFwiLGxlKHt1cmw6aSxzYW1lSG9zdDpufSxyKSl9ZnVuY3Rpb24gaGUodCxyLG4saSxhLGUpe3ZhciBvPW51bGw7dmFyIHM9bnVsbDthPWEhPW51bGw/YTp7fTtpZihhLnJldHVyblByb21pc2UmJnR5cGVvZiBQcm9taXNlIT09XCJ1bmRlZmluZWRcIil7dmFyIGw9bmV3IFByb21pc2UoZnVuY3Rpb24oZSx0KXtvPWU7cz10fSl9aWYobj09bnVsbCl7bj1yZSgpLmJvZHl9dmFyIE09YS5oYW5kbGVyfHxNcjt2YXIgWD1hLnNlbGVjdHx8bnVsbDtpZighc2Uobikpe2llKG8pO3JldHVybiBsfXZhciB1PWEudGFyZ2V0T3ZlcnJpZGV8fHllKG4pO2lmKHU9PW51bGx8fHU9PW1lKXtmZShuLFwiaHRteDp0YXJnZXRFcnJvclwiLHt0YXJnZXQ6dGUobixcImh4LXRhcmdldFwiKX0pO2llKHMpO3JldHVybiBsfXZhciBmPWFlKG4pO3ZhciBjPWYubGFzdEJ1dHRvbkNsaWNrZWQ7aWYoYyl7dmFyIGg9ZWUoYyxcImZvcm1hY3Rpb25cIik7aWYoaCE9bnVsbCl7cj1ofXZhciB2PWVlKGMsXCJmb3JtbWV0aG9kXCIpO2lmKHYhPW51bGwpe2lmKHYudG9Mb3dlckNhc2UoKSE9PVwiZGlhbG9nXCIpe3Q9dn19fXZhciBkPW5lKG4sXCJoeC1jb25maXJtXCIpO2lmKGU9PT11bmRlZmluZWQpe3ZhciBEPWZ1bmN0aW9uKGUpe3JldHVybiBoZSh0LHIsbixpLGEsISFlKX07dmFyIFU9e3RhcmdldDp1LGVsdDpuLHBhdGg6cix2ZXJiOnQsdHJpZ2dlcmluZ0V2ZW50OmksZXRjOmEsaXNzdWVSZXF1ZXN0OkQscXVlc3Rpb246ZH07aWYoY2UobixcImh0bXg6Y29uZmlybVwiLFUpPT09ZmFsc2Upe2llKG8pO3JldHVybiBsfX12YXIgZz1uO3ZhciBtPW5lKG4sXCJoeC1zeW5jXCIpO3ZhciBwPW51bGw7dmFyIHg9ZmFsc2U7aWYobSl7dmFyIEI9bS5zcGxpdChcIjpcIik7dmFyIEY9QlswXS50cmltKCk7aWYoRj09PVwidGhpc1wiKXtnPXhlKG4sXCJoeC1zeW5jXCIpfWVsc2V7Zz11ZShuLEYpfW09KEJbMV18fFwiZHJvcFwiKS50cmltKCk7Zj1hZShnKTtpZihtPT09XCJkcm9wXCImJmYueGhyJiZmLmFib3J0YWJsZSE9PXRydWUpe2llKG8pO3JldHVybiBsfWVsc2UgaWYobT09PVwiYWJvcnRcIil7aWYoZi54aHIpe2llKG8pO3JldHVybiBsfWVsc2V7eD10cnVlfX1lbHNlIGlmKG09PT1cInJlcGxhY2VcIil7Y2UoZyxcImh0bXg6YWJvcnRcIil9ZWxzZSBpZihtLmluZGV4T2YoXCJxdWV1ZVwiKT09PTApe3ZhciBWPW0uc3BsaXQoXCIgXCIpO3A9KFZbMV18fFwibGFzdFwiKS50cmltKCl9fWlmKGYueGhyKXtpZihmLmFib3J0YWJsZSl7Y2UoZyxcImh0bXg6YWJvcnRcIil9ZWxzZXtpZihwPT1udWxsKXtpZihpKXt2YXIgeT1hZShpKTtpZih5JiZ5LnRyaWdnZXJTcGVjJiZ5LnRyaWdnZXJTcGVjLnF1ZXVlKXtwPXkudHJpZ2dlclNwZWMucXVldWV9fWlmKHA9PW51bGwpe3A9XCJsYXN0XCJ9fWlmKGYucXVldWVkUmVxdWVzdHM9PW51bGwpe2YucXVldWVkUmVxdWVzdHM9W119aWYocD09PVwiZmlyc3RcIiYmZi5xdWV1ZWRSZXF1ZXN0cy5sZW5ndGg9PT0wKXtmLnF1ZXVlZFJlcXVlc3RzLnB1c2goZnVuY3Rpb24oKXtoZSh0LHIsbixpLGEpfSl9ZWxzZSBpZihwPT09XCJhbGxcIil7Zi5xdWV1ZWRSZXF1ZXN0cy5wdXNoKGZ1bmN0aW9uKCl7aGUodCxyLG4saSxhKX0pfWVsc2UgaWYocD09PVwibGFzdFwiKXtmLnF1ZXVlZFJlcXVlc3RzPVtdO2YucXVldWVkUmVxdWVzdHMucHVzaChmdW5jdGlvbigpe2hlKHQscixuLGksYSl9KX1pZShvKTtyZXR1cm4gbH19dmFyIGI9bmV3IFhNTEh0dHBSZXF1ZXN0O2YueGhyPWI7Zi5hYm9ydGFibGU9eDt2YXIgdz1mdW5jdGlvbigpe2YueGhyPW51bGw7Zi5hYm9ydGFibGU9ZmFsc2U7aWYoZi5xdWV1ZWRSZXF1ZXN0cyE9bnVsbCYmZi5xdWV1ZWRSZXF1ZXN0cy5sZW5ndGg+MCl7dmFyIGU9Zi5xdWV1ZWRSZXF1ZXN0cy5zaGlmdCgpO2UoKX19O3ZhciBqPW5lKG4sXCJoeC1wcm9tcHRcIik7aWYoail7dmFyIFM9cHJvbXB0KGopO2lmKFM9PT1udWxsfHwhY2UobixcImh0bXg6cHJvbXB0XCIse3Byb21wdDpTLHRhcmdldDp1fSkpe2llKG8pO3coKTtyZXR1cm4gbH19aWYoZCYmIWUpe2lmKCFjb25maXJtKGQpKXtpZShvKTt3KCk7cmV0dXJuIGx9fXZhciBFPXhyKG4sdSxTKTtpZih0IT09XCJnZXRcIiYmIVNyKG4pKXtFW1wiQ29udGVudC1UeXBlXCJdPVwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCJ9aWYoYS5oZWFkZXJzKXtFPWxlKEUsYS5oZWFkZXJzKX12YXIgXz1kcihuLHQpO3ZhciBDPV8uZXJyb3JzO3ZhciBSPV8udmFsdWVzO2lmKGEudmFsdWVzKXtSPWxlKFIsYS52YWx1ZXMpfXZhciB6PUhyKG4pO3ZhciAkPWxlKFIseik7dmFyIFQ9eXIoJCxuKTtpZihRLmNvbmZpZy5nZXRDYWNoZUJ1c3RlclBhcmFtJiZ0PT09XCJnZXRcIil7VFtcIm9yZy5odG14LmNhY2hlLWJ1c3RlclwiXT1lZSh1LFwiaWRcIil8fFwidHJ1ZVwifWlmKHI9PW51bGx8fHI9PT1cIlwiKXtyPXJlKCkubG9jYXRpb24uaHJlZn12YXIgTz1ScihuLFwiaHgtcmVxdWVzdFwiKTt2YXIgVz1hZShuKS5ib29zdGVkO3ZhciBxPVEuY29uZmlnLm1ldGhvZHNUaGF0VXNlVXJsUGFyYW1zLmluZGV4T2YodCk+PTA7dmFyIEg9e2Jvb3N0ZWQ6Vyx1c2VVcmxQYXJhbXM6cSxwYXJhbWV0ZXJzOlQsdW5maWx0ZXJlZFBhcmFtZXRlcnM6JCxoZWFkZXJzOkUsdGFyZ2V0OnUsdmVyYjp0LGVycm9yczpDLHdpdGhDcmVkZW50aWFsczphLmNyZWRlbnRpYWxzfHxPLmNyZWRlbnRpYWxzfHxRLmNvbmZpZy53aXRoQ3JlZGVudGlhbHMsdGltZW91dDphLnRpbWVvdXR8fE8udGltZW91dHx8US5jb25maWcudGltZW91dCxwYXRoOnIsdHJpZ2dlcmluZ0V2ZW50Oml9O2lmKCFjZShuLFwiaHRteDpjb25maWdSZXF1ZXN0XCIsSCkpe2llKG8pO3coKTtyZXR1cm4gbH1yPUgucGF0aDt0PUgudmVyYjtFPUguaGVhZGVycztUPUgucGFyYW1ldGVycztDPUguZXJyb3JzO3E9SC51c2VVcmxQYXJhbXM7aWYoQyYmQy5sZW5ndGg+MCl7Y2UobixcImh0bXg6dmFsaWRhdGlvbjpoYWx0ZWRcIixIKTtpZShvKTt3KCk7cmV0dXJuIGx9dmFyIEc9ci5zcGxpdChcIiNcIik7dmFyIEo9R1swXTt2YXIgTD1HWzFdO3ZhciBBPXI7aWYocSl7QT1KO3ZhciBaPU9iamVjdC5rZXlzKFQpLmxlbmd0aCE9PTA7aWYoWil7aWYoQS5pbmRleE9mKFwiP1wiKTwwKXtBKz1cIj9cIn1lbHNle0ErPVwiJlwifUErPW1yKFQpO2lmKEwpe0ErPVwiI1wiK0x9fX1pZigha3IobixBLEgpKXtmZShuLFwiaHRteDppbnZhbGlkUGF0aFwiLEgpO2llKHMpO3JldHVybiBsfWIub3Blbih0LnRvVXBwZXJDYXNlKCksQSx0cnVlKTtiLm92ZXJyaWRlTWltZVR5cGUoXCJ0ZXh0L2h0bWxcIik7Yi53aXRoQ3JlZGVudGlhbHM9SC53aXRoQ3JlZGVudGlhbHM7Yi50aW1lb3V0PUgudGltZW91dDtpZihPLm5vSGVhZGVycyl7fWVsc2V7Zm9yKHZhciBOIGluIEUpe2lmKEUuaGFzT3duUHJvcGVydHkoTikpe3ZhciBLPUVbTl07THIoYixOLEspfX19dmFyIEk9e3hocjpiLHRhcmdldDp1LHJlcXVlc3RDb25maWc6SCxldGM6YSxib29zdGVkOlcsc2VsZWN0OlgscGF0aEluZm86e3JlcXVlc3RQYXRoOnIsZmluYWxSZXF1ZXN0UGF0aDpBLGFuY2hvcjpMfX07Yi5vbmxvYWQ9ZnVuY3Rpb24oKXt0cnl7dmFyIGU9SXIobik7SS5wYXRoSW5mby5yZXNwb25zZVBhdGg9QXIoYik7TShuLEkpO2xyKGssUCk7Y2UobixcImh0bXg6YWZ0ZXJSZXF1ZXN0XCIsSSk7Y2UobixcImh0bXg6YWZ0ZXJPbkxvYWRcIixJKTtpZighc2Uobikpe3ZhciB0PW51bGw7d2hpbGUoZS5sZW5ndGg+MCYmdD09bnVsbCl7dmFyIHI9ZS5zaGlmdCgpO2lmKHNlKHIpKXt0PXJ9fWlmKHQpe2NlKHQsXCJodG14OmFmdGVyUmVxdWVzdFwiLEkpO2NlKHQsXCJodG14OmFmdGVyT25Mb2FkXCIsSSl9fWllKG8pO3coKX1jYXRjaChlKXtmZShuLFwiaHRteDpvbkxvYWRFcnJvclwiLGxlKHtlcnJvcjplfSxJKSk7dGhyb3cgZX19O2Iub25lcnJvcj1mdW5jdGlvbigpe2xyKGssUCk7ZmUobixcImh0bXg6YWZ0ZXJSZXF1ZXN0XCIsSSk7ZmUobixcImh0bXg6c2VuZEVycm9yXCIsSSk7aWUocyk7dygpfTtiLm9uYWJvcnQ9ZnVuY3Rpb24oKXtscihrLFApO2ZlKG4sXCJodG14OmFmdGVyUmVxdWVzdFwiLEkpO2ZlKG4sXCJodG14OnNlbmRBYm9ydFwiLEkpO2llKHMpO3coKX07Yi5vbnRpbWVvdXQ9ZnVuY3Rpb24oKXtscihrLFApO2ZlKG4sXCJodG14OmFmdGVyUmVxdWVzdFwiLEkpO2ZlKG4sXCJodG14OnRpbWVvdXRcIixJKTtpZShzKTt3KCl9O2lmKCFjZShuLFwiaHRteDpiZWZvcmVSZXF1ZXN0XCIsSSkpe2llKG8pO3coKTtyZXR1cm4gbH12YXIgaz1vcihuKTt2YXIgUD1zcihuKTtvZShbXCJsb2Fkc3RhcnRcIixcImxvYWRlbmRcIixcInByb2dyZXNzXCIsXCJhYm9ydFwiXSxmdW5jdGlvbih0KXtvZShbYixiLnVwbG9hZF0sZnVuY3Rpb24oZSl7ZS5hZGRFdmVudExpc3RlbmVyKHQsZnVuY3Rpb24oZSl7Y2UobixcImh0bXg6eGhyOlwiK3Qse2xlbmd0aENvbXB1dGFibGU6ZS5sZW5ndGhDb21wdXRhYmxlLGxvYWRlZDplLmxvYWRlZCx0b3RhbDplLnRvdGFsfSl9KX0pfSk7Y2UobixcImh0bXg6YmVmb3JlU2VuZFwiLEkpO3ZhciBZPXE/bnVsbDpFcihiLG4sVCk7Yi5zZW5kKFkpO3JldHVybiBsfWZ1bmN0aW9uIFByKGUsdCl7dmFyIHI9dC54aHI7dmFyIG49bnVsbDt2YXIgaT1udWxsO2lmKE8ociwvSFgtUHVzaDovaSkpe249ci5nZXRSZXNwb25zZUhlYWRlcihcIkhYLVB1c2hcIik7aT1cInB1c2hcIn1lbHNlIGlmKE8ociwvSFgtUHVzaC1Vcmw6L2kpKXtuPXIuZ2V0UmVzcG9uc2VIZWFkZXIoXCJIWC1QdXNoLVVybFwiKTtpPVwicHVzaFwifWVsc2UgaWYoTyhyLC9IWC1SZXBsYWNlLVVybDovaSkpe249ci5nZXRSZXNwb25zZUhlYWRlcihcIkhYLVJlcGxhY2UtVXJsXCIpO2k9XCJyZXBsYWNlXCJ9aWYobil7aWYobj09PVwiZmFsc2VcIil7cmV0dXJue319ZWxzZXtyZXR1cm57dHlwZTppLHBhdGg6bn19fXZhciBhPXQucGF0aEluZm8uZmluYWxSZXF1ZXN0UGF0aDt2YXIgbz10LnBhdGhJbmZvLnJlc3BvbnNlUGF0aDt2YXIgcz1uZShlLFwiaHgtcHVzaC11cmxcIik7dmFyIGw9bmUoZSxcImh4LXJlcGxhY2UtdXJsXCIpO3ZhciB1PWFlKGUpLmJvb3N0ZWQ7dmFyIGY9bnVsbDt2YXIgYz1udWxsO2lmKHMpe2Y9XCJwdXNoXCI7Yz1zfWVsc2UgaWYobCl7Zj1cInJlcGxhY2VcIjtjPWx9ZWxzZSBpZih1KXtmPVwicHVzaFwiO2M9b3x8YX1pZihjKXtpZihjPT09XCJmYWxzZVwiKXtyZXR1cm57fX1pZihjPT09XCJ0cnVlXCIpe2M9b3x8YX1pZih0LnBhdGhJbmZvLmFuY2hvciYmYy5pbmRleE9mKFwiI1wiKT09PS0xKXtjPWMrXCIjXCIrdC5wYXRoSW5mby5hbmNob3J9cmV0dXJue3R5cGU6ZixwYXRoOmN9fWVsc2V7cmV0dXJue319fWZ1bmN0aW9uIE1yKGwsdSl7dmFyIGY9dS54aHI7dmFyIGM9dS50YXJnZXQ7dmFyIGU9dS5ldGM7dmFyIHQ9dS5yZXF1ZXN0Q29uZmlnO3ZhciBoPXUuc2VsZWN0O2lmKCFjZShsLFwiaHRteDpiZWZvcmVPbkxvYWRcIix1KSlyZXR1cm47aWYoTyhmLC9IWC1UcmlnZ2VyOi9pKSl7X2UoZixcIkhYLVRyaWdnZXJcIixsKX1pZihPKGYsL0hYLUxvY2F0aW9uOi9pKSl7ZXIoKTt2YXIgcj1mLmdldFJlc3BvbnNlSGVhZGVyKFwiSFgtTG9jYXRpb25cIik7dmFyIHY7aWYoci5pbmRleE9mKFwie1wiKT09PTApe3Y9RShyKTtyPXZbXCJwYXRoXCJdO2RlbGV0ZSB2W1wicGF0aFwiXX1OcihcIkdFVFwiLHIsdikudGhlbihmdW5jdGlvbigpe3RyKHIpfSk7cmV0dXJufXZhciBuPU8oZiwvSFgtUmVmcmVzaDovaSkmJlwidHJ1ZVwiPT09Zi5nZXRSZXNwb25zZUhlYWRlcihcIkhYLVJlZnJlc2hcIik7aWYoTyhmLC9IWC1SZWRpcmVjdDovaSkpe2xvY2F0aW9uLmhyZWY9Zi5nZXRSZXNwb25zZUhlYWRlcihcIkhYLVJlZGlyZWN0XCIpO24mJmxvY2F0aW9uLnJlbG9hZCgpO3JldHVybn1pZihuKXtsb2NhdGlvbi5yZWxvYWQoKTtyZXR1cm59aWYoTyhmLC9IWC1SZXRhcmdldDovaSkpe2lmKGYuZ2V0UmVzcG9uc2VIZWFkZXIoXCJIWC1SZXRhcmdldFwiKT09PVwidGhpc1wiKXt1LnRhcmdldD1sfWVsc2V7dS50YXJnZXQ9dWUobCxmLmdldFJlc3BvbnNlSGVhZGVyKFwiSFgtUmV0YXJnZXRcIikpfX12YXIgZD1QcihsLHUpO3ZhciBpPWYuc3RhdHVzPj0yMDAmJmYuc3RhdHVzPDQwMCYmZi5zdGF0dXMhPT0yMDQ7dmFyIGc9Zi5yZXNwb25zZTt2YXIgYT1mLnN0YXR1cz49NDAwO3ZhciBtPVEuY29uZmlnLmlnbm9yZVRpdGxlO3ZhciBvPWxlKHtzaG91bGRTd2FwOmksc2VydmVyUmVzcG9uc2U6Zyxpc0Vycm9yOmEsaWdub3JlVGl0bGU6bX0sdSk7aWYoIWNlKGMsXCJodG14OmJlZm9yZVN3YXBcIixvKSlyZXR1cm47Yz1vLnRhcmdldDtnPW8uc2VydmVyUmVzcG9uc2U7YT1vLmlzRXJyb3I7bT1vLmlnbm9yZVRpdGxlO3UudGFyZ2V0PWM7dS5mYWlsZWQ9YTt1LnN1Y2Nlc3NmdWw9IWE7aWYoby5zaG91bGRTd2FwKXtpZihmLnN0YXR1cz09PTI4Nil7YXQobCl9UihsLGZ1bmN0aW9uKGUpe2c9ZS50cmFuc2Zvcm1SZXNwb25zZShnLGYsbCl9KTtpZihkLnR5cGUpe2VyKCl9dmFyIHM9ZS5zd2FwT3ZlcnJpZGU7aWYoTyhmLC9IWC1SZXN3YXA6L2kpKXtzPWYuZ2V0UmVzcG9uc2VIZWFkZXIoXCJIWC1SZXN3YXBcIil9dmFyIHY9d3IobCxzKTtpZih2Lmhhc093blByb3BlcnR5KFwiaWdub3JlVGl0bGVcIikpe209di5pZ25vcmVUaXRsZX1jLmNsYXNzTGlzdC5hZGQoUS5jb25maWcuc3dhcHBpbmdDbGFzcyk7dmFyIHA9bnVsbDt2YXIgeD1udWxsO3ZhciB5PWZ1bmN0aW9uKCl7dHJ5e3ZhciBlPWRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7dmFyIHQ9e307dHJ5e3Q9e2VsdDplLHN0YXJ0OmU/ZS5zZWxlY3Rpb25TdGFydDpudWxsLGVuZDplP2Uuc2VsZWN0aW9uRW5kOm51bGx9fWNhdGNoKGUpe312YXIgcjtpZihoKXtyPWh9aWYoTyhmLC9IWC1SZXNlbGVjdDovaSkpe3I9Zi5nZXRSZXNwb25zZUhlYWRlcihcIkhYLVJlc2VsZWN0XCIpfWlmKGQudHlwZSl7Y2UocmUoKS5ib2R5LFwiaHRteDpiZWZvcmVIaXN0b3J5VXBkYXRlXCIsbGUoe2hpc3Rvcnk6ZH0sdSkpO2lmKGQudHlwZT09PVwicHVzaFwiKXt0cihkLnBhdGgpO2NlKHJlKCkuYm9keSxcImh0bXg6cHVzaGVkSW50b0hpc3RvcnlcIix7cGF0aDpkLnBhdGh9KX1lbHNle3JyKGQucGF0aCk7Y2UocmUoKS5ib2R5LFwiaHRteDpyZXBsYWNlZEluSGlzdG9yeVwiLHtwYXRoOmQucGF0aH0pfX12YXIgbj1UKGMpO2plKHYuc3dhcFN0eWxlLGMsbCxnLG4scik7aWYodC5lbHQmJiFzZSh0LmVsdCkmJmVlKHQuZWx0LFwiaWRcIikpe3ZhciBpPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVlKHQuZWx0LFwiaWRcIikpO3ZhciBhPXtwcmV2ZW50U2Nyb2xsOnYuZm9jdXNTY3JvbGwhPT11bmRlZmluZWQ/IXYuZm9jdXNTY3JvbGw6IVEuY29uZmlnLmRlZmF1bHRGb2N1c1Njcm9sbH07aWYoaSl7aWYodC5zdGFydCYmaS5zZXRTZWxlY3Rpb25SYW5nZSl7dHJ5e2kuc2V0U2VsZWN0aW9uUmFuZ2UodC5zdGFydCx0LmVuZCl9Y2F0Y2goZSl7fX1pLmZvY3VzKGEpfX1jLmNsYXNzTGlzdC5yZW1vdmUoUS5jb25maWcuc3dhcHBpbmdDbGFzcyk7b2Uobi5lbHRzLGZ1bmN0aW9uKGUpe2lmKGUuY2xhc3NMaXN0KXtlLmNsYXNzTGlzdC5hZGQoUS5jb25maWcuc2V0dGxpbmdDbGFzcyl9Y2UoZSxcImh0bXg6YWZ0ZXJTd2FwXCIsdSl9KTtpZihPKGYsL0hYLVRyaWdnZXItQWZ0ZXItU3dhcDovaSkpe3ZhciBvPWw7aWYoIXNlKGwpKXtvPXJlKCkuYm9keX1fZShmLFwiSFgtVHJpZ2dlci1BZnRlci1Td2FwXCIsbyl9dmFyIHM9ZnVuY3Rpb24oKXtvZShuLnRhc2tzLGZ1bmN0aW9uKGUpe2UuY2FsbCgpfSk7b2Uobi5lbHRzLGZ1bmN0aW9uKGUpe2lmKGUuY2xhc3NMaXN0KXtlLmNsYXNzTGlzdC5yZW1vdmUoUS5jb25maWcuc2V0dGxpbmdDbGFzcyl9Y2UoZSxcImh0bXg6YWZ0ZXJTZXR0bGVcIix1KX0pO2lmKHUucGF0aEluZm8uYW5jaG9yKXt2YXIgZT1yZSgpLmdldEVsZW1lbnRCeUlkKHUucGF0aEluZm8uYW5jaG9yKTtpZihlKXtlLnNjcm9sbEludG9WaWV3KHtibG9jazpcInN0YXJ0XCIsYmVoYXZpb3I6XCJhdXRvXCJ9KX19aWYobi50aXRsZSYmIW0pe3ZhciB0PUMoXCJ0aXRsZVwiKTtpZih0KXt0LmlubmVySFRNTD1uLnRpdGxlfWVsc2V7d2luZG93LmRvY3VtZW50LnRpdGxlPW4udGl0bGV9fUNyKG4uZWx0cyx2KTtpZihPKGYsL0hYLVRyaWdnZXItQWZ0ZXItU2V0dGxlOi9pKSl7dmFyIHI9bDtpZighc2UobCkpe3I9cmUoKS5ib2R5fV9lKGYsXCJIWC1UcmlnZ2VyLUFmdGVyLVNldHRsZVwiLHIpfWllKHApfTtpZih2LnNldHRsZURlbGF5PjApe3NldFRpbWVvdXQocyx2LnNldHRsZURlbGF5KX1lbHNle3MoKX19Y2F0Y2goZSl7ZmUobCxcImh0bXg6c3dhcEVycm9yXCIsdSk7aWUoeCk7dGhyb3cgZX19O3ZhciBiPVEuY29uZmlnLmdsb2JhbFZpZXdUcmFuc2l0aW9ucztpZih2Lmhhc093blByb3BlcnR5KFwidHJhbnNpdGlvblwiKSl7Yj12LnRyYW5zaXRpb259aWYoYiYmY2UobCxcImh0bXg6YmVmb3JlVHJhbnNpdGlvblwiLHUpJiZ0eXBlb2YgUHJvbWlzZSE9PVwidW5kZWZpbmVkXCImJmRvY3VtZW50LnN0YXJ0Vmlld1RyYW5zaXRpb24pe3ZhciB3PW5ldyBQcm9taXNlKGZ1bmN0aW9uKGUsdCl7cD1lO3g9dH0pO3ZhciBTPXk7eT1mdW5jdGlvbigpe2RvY3VtZW50LnN0YXJ0Vmlld1RyYW5zaXRpb24oZnVuY3Rpb24oKXtTKCk7cmV0dXJuIHd9KX19aWYodi5zd2FwRGVsYXk+MCl7c2V0VGltZW91dCh5LHYuc3dhcERlbGF5KX1lbHNle3koKX19aWYoYSl7ZmUobCxcImh0bXg6cmVzcG9uc2VFcnJvclwiLGxlKHtlcnJvcjpcIlJlc3BvbnNlIFN0YXR1cyBFcnJvciBDb2RlIFwiK2Yuc3RhdHVzK1wiIGZyb20gXCIrdS5wYXRoSW5mby5yZXF1ZXN0UGF0aH0sdSkpfX12YXIgWHI9e307ZnVuY3Rpb24gRHIoKXtyZXR1cm57aW5pdDpmdW5jdGlvbihlKXtyZXR1cm4gbnVsbH0sb25FdmVudDpmdW5jdGlvbihlLHQpe3JldHVybiB0cnVlfSx0cmFuc2Zvcm1SZXNwb25zZTpmdW5jdGlvbihlLHQscil7cmV0dXJuIGV9LGlzSW5saW5lU3dhcDpmdW5jdGlvbihlKXtyZXR1cm4gZmFsc2V9LGhhbmRsZVN3YXA6ZnVuY3Rpb24oZSx0LHIsbil7cmV0dXJuIGZhbHNlfSxlbmNvZGVQYXJhbWV0ZXJzOmZ1bmN0aW9uKGUsdCxyKXtyZXR1cm4gbnVsbH19fWZ1bmN0aW9uIFVyKGUsdCl7aWYodC5pbml0KXt0LmluaXQocil9WHJbZV09bGUoRHIoKSx0KX1mdW5jdGlvbiBCcihlKXtkZWxldGUgWHJbZV19ZnVuY3Rpb24gRnIoZSxyLG4pe2lmKGU9PXVuZGVmaW5lZCl7cmV0dXJuIHJ9aWYocj09dW5kZWZpbmVkKXtyPVtdfWlmKG49PXVuZGVmaW5lZCl7bj1bXX12YXIgdD10ZShlLFwiaHgtZXh0XCIpO2lmKHQpe29lKHQuc3BsaXQoXCIsXCIpLGZ1bmN0aW9uKGUpe2U9ZS5yZXBsYWNlKC8gL2csXCJcIik7aWYoZS5zbGljZSgwLDcpPT1cImlnbm9yZTpcIil7bi5wdXNoKGUuc2xpY2UoNykpO3JldHVybn1pZihuLmluZGV4T2YoZSk8MCl7dmFyIHQ9WHJbZV07aWYodCYmci5pbmRleE9mKHQpPDApe3IucHVzaCh0KX19fSl9cmV0dXJuIEZyKHUoZSkscixuKX12YXIgVnI9ZmFsc2U7cmUoKS5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLGZ1bmN0aW9uKCl7VnI9dHJ1ZX0pO2Z1bmN0aW9uIGpyKGUpe2lmKFZyfHxyZSgpLnJlYWR5U3RhdGU9PT1cImNvbXBsZXRlXCIpe2UoKX1lbHNle3JlKCkuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIixlKX19ZnVuY3Rpb24gX3IoKXtpZihRLmNvbmZpZy5pbmNsdWRlSW5kaWNhdG9yU3R5bGVzIT09ZmFsc2Upe3JlKCkuaGVhZC5pbnNlcnRBZGphY2VudEhUTUwoXCJiZWZvcmVlbmRcIixcIjxzdHlsZT4gICAgICAgICAgICAgICAgICAgICAgLlwiK1EuY29uZmlnLmluZGljYXRvckNsYXNzK1wie29wYWNpdHk6MH0gICAgICAgICAgICAgICAgICAgICAgLlwiK1EuY29uZmlnLnJlcXVlc3RDbGFzcytcIiAuXCIrUS5jb25maWcuaW5kaWNhdG9yQ2xhc3MrXCJ7b3BhY2l0eToxOyB0cmFuc2l0aW9uOiBvcGFjaXR5IDIwMG1zIGVhc2UtaW47fSAgICAgICAgICAgICAgICAgICAgICAuXCIrUS5jb25maWcucmVxdWVzdENsYXNzK1wiLlwiK1EuY29uZmlnLmluZGljYXRvckNsYXNzK1wie29wYWNpdHk6MTsgdHJhbnNpdGlvbjogb3BhY2l0eSAyMDBtcyBlYXNlLWluO30gICAgICAgICAgICAgICAgICAgIDwvc3R5bGU+XCIpfX1mdW5jdGlvbiB6cigpe3ZhciBlPXJlKCkucXVlcnlTZWxlY3RvcignbWV0YVtuYW1lPVwiaHRteC1jb25maWdcIl0nKTtpZihlKXtyZXR1cm4gRShlLmNvbnRlbnQpfWVsc2V7cmV0dXJuIG51bGx9fWZ1bmN0aW9uICRyKCl7dmFyIGU9enIoKTtpZihlKXtRLmNvbmZpZz1sZShRLmNvbmZpZyxlKX19anIoZnVuY3Rpb24oKXskcigpO19yKCk7dmFyIGU9cmUoKS5ib2R5O3p0KGUpO3ZhciB0PXJlKCkucXVlcnlTZWxlY3RvckFsbChcIltoeC10cmlnZ2VyPSdyZXN0b3JlZCddLFtkYXRhLWh4LXRyaWdnZXI9J3Jlc3RvcmVkJ11cIik7ZS5hZGRFdmVudExpc3RlbmVyKFwiaHRteDphYm9ydFwiLGZ1bmN0aW9uKGUpe3ZhciB0PWUudGFyZ2V0O3ZhciByPWFlKHQpO2lmKHImJnIueGhyKXtyLnhoci5hYm9ydCgpfX0pO2NvbnN0IHI9d2luZG93Lm9ucG9wc3RhdGU/d2luZG93Lm9ucG9wc3RhdGUuYmluZCh3aW5kb3cpOm51bGw7d2luZG93Lm9ucG9wc3RhdGU9ZnVuY3Rpb24oZSl7aWYoZS5zdGF0ZSYmZS5zdGF0ZS5odG14KXthcigpO29lKHQsZnVuY3Rpb24oZSl7Y2UoZSxcImh0bXg6cmVzdG9yZWRcIix7ZG9jdW1lbnQ6cmUoKSx0cmlnZ2VyRXZlbnQ6Y2V9KX0pfWVsc2V7aWYocil7cihlKX19fTtzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7Y2UoZSxcImh0bXg6bG9hZFwiLHt9KTtlPW51bGx9LDApfSk7cmV0dXJuIFF9KCl9KTsiLCAiLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL3NjaGVkdWxlci5qc1xudmFyIGZsdXNoUGVuZGluZyA9IGZhbHNlO1xudmFyIGZsdXNoaW5nID0gZmFsc2U7XG52YXIgcXVldWUgPSBbXTtcbnZhciBsYXN0Rmx1c2hlZEluZGV4ID0gLTE7XG5mdW5jdGlvbiBzY2hlZHVsZXIoY2FsbGJhY2spIHtcbiAgcXVldWVKb2IoY2FsbGJhY2spO1xufVxuZnVuY3Rpb24gcXVldWVKb2Ioam9iKSB7XG4gIGlmICghcXVldWUuaW5jbHVkZXMoam9iKSlcbiAgICBxdWV1ZS5wdXNoKGpvYik7XG4gIHF1ZXVlRmx1c2goKTtcbn1cbmZ1bmN0aW9uIGRlcXVldWVKb2Ioam9iKSB7XG4gIGxldCBpbmRleCA9IHF1ZXVlLmluZGV4T2Yoam9iKTtcbiAgaWYgKGluZGV4ICE9PSAtMSAmJiBpbmRleCA+IGxhc3RGbHVzaGVkSW5kZXgpXG4gICAgcXVldWUuc3BsaWNlKGluZGV4LCAxKTtcbn1cbmZ1bmN0aW9uIHF1ZXVlRmx1c2goKSB7XG4gIGlmICghZmx1c2hpbmcgJiYgIWZsdXNoUGVuZGluZykge1xuICAgIGZsdXNoUGVuZGluZyA9IHRydWU7XG4gICAgcXVldWVNaWNyb3Rhc2soZmx1c2hKb2JzKTtcbiAgfVxufVxuZnVuY3Rpb24gZmx1c2hKb2JzKCkge1xuICBmbHVzaFBlbmRpbmcgPSBmYWxzZTtcbiAgZmx1c2hpbmcgPSB0cnVlO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHF1ZXVlLmxlbmd0aDsgaSsrKSB7XG4gICAgcXVldWVbaV0oKTtcbiAgICBsYXN0Rmx1c2hlZEluZGV4ID0gaTtcbiAgfVxuICBxdWV1ZS5sZW5ndGggPSAwO1xuICBsYXN0Rmx1c2hlZEluZGV4ID0gLTE7XG4gIGZsdXNoaW5nID0gZmFsc2U7XG59XG5cbi8vIHBhY2thZ2VzL2FscGluZWpzL3NyYy9yZWFjdGl2aXR5LmpzXG52YXIgcmVhY3RpdmU7XG52YXIgZWZmZWN0O1xudmFyIHJlbGVhc2U7XG52YXIgcmF3O1xudmFyIHNob3VsZFNjaGVkdWxlID0gdHJ1ZTtcbmZ1bmN0aW9uIGRpc2FibGVFZmZlY3RTY2hlZHVsaW5nKGNhbGxiYWNrKSB7XG4gIHNob3VsZFNjaGVkdWxlID0gZmFsc2U7XG4gIGNhbGxiYWNrKCk7XG4gIHNob3VsZFNjaGVkdWxlID0gdHJ1ZTtcbn1cbmZ1bmN0aW9uIHNldFJlYWN0aXZpdHlFbmdpbmUoZW5naW5lKSB7XG4gIHJlYWN0aXZlID0gZW5naW5lLnJlYWN0aXZlO1xuICByZWxlYXNlID0gZW5naW5lLnJlbGVhc2U7XG4gIGVmZmVjdCA9IChjYWxsYmFjaykgPT4gZW5naW5lLmVmZmVjdChjYWxsYmFjaywgeyBzY2hlZHVsZXI6ICh0YXNrKSA9PiB7XG4gICAgaWYgKHNob3VsZFNjaGVkdWxlKSB7XG4gICAgICBzY2hlZHVsZXIodGFzayk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRhc2soKTtcbiAgICB9XG4gIH0gfSk7XG4gIHJhdyA9IGVuZ2luZS5yYXc7XG59XG5mdW5jdGlvbiBvdmVycmlkZUVmZmVjdChvdmVycmlkZSkge1xuICBlZmZlY3QgPSBvdmVycmlkZTtcbn1cbmZ1bmN0aW9uIGVsZW1lbnRCb3VuZEVmZmVjdChlbCkge1xuICBsZXQgY2xlYW51cDIgPSAoKSA9PiB7XG4gIH07XG4gIGxldCB3cmFwcGVkRWZmZWN0ID0gKGNhbGxiYWNrKSA9PiB7XG4gICAgbGV0IGVmZmVjdFJlZmVyZW5jZSA9IGVmZmVjdChjYWxsYmFjayk7XG4gICAgaWYgKCFlbC5feF9lZmZlY3RzKSB7XG4gICAgICBlbC5feF9lZmZlY3RzID0gLyogQF9fUFVSRV9fICovIG5ldyBTZXQoKTtcbiAgICAgIGVsLl94X3J1bkVmZmVjdHMgPSAoKSA9PiB7XG4gICAgICAgIGVsLl94X2VmZmVjdHMuZm9yRWFjaCgoaSkgPT4gaSgpKTtcbiAgICAgIH07XG4gICAgfVxuICAgIGVsLl94X2VmZmVjdHMuYWRkKGVmZmVjdFJlZmVyZW5jZSk7XG4gICAgY2xlYW51cDIgPSAoKSA9PiB7XG4gICAgICBpZiAoZWZmZWN0UmVmZXJlbmNlID09PSB2b2lkIDApXG4gICAgICAgIHJldHVybjtcbiAgICAgIGVsLl94X2VmZmVjdHMuZGVsZXRlKGVmZmVjdFJlZmVyZW5jZSk7XG4gICAgICByZWxlYXNlKGVmZmVjdFJlZmVyZW5jZSk7XG4gICAgfTtcbiAgICByZXR1cm4gZWZmZWN0UmVmZXJlbmNlO1xuICB9O1xuICByZXR1cm4gW3dyYXBwZWRFZmZlY3QsICgpID0+IHtcbiAgICBjbGVhbnVwMigpO1xuICB9XTtcbn1cblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL3V0aWxzL2Rpc3BhdGNoLmpzXG5mdW5jdGlvbiBkaXNwYXRjaChlbCwgbmFtZSwgZGV0YWlsID0ge30pIHtcbiAgZWwuZGlzcGF0Y2hFdmVudChcbiAgICBuZXcgQ3VzdG9tRXZlbnQobmFtZSwge1xuICAgICAgZGV0YWlsLFxuICAgICAgYnViYmxlczogdHJ1ZSxcbiAgICAgIC8vIEFsbG93cyBldmVudHMgdG8gcGFzcyB0aGUgc2hhZG93IERPTSBiYXJyaWVyLlxuICAgICAgY29tcG9zZWQ6IHRydWUsXG4gICAgICBjYW5jZWxhYmxlOiB0cnVlXG4gICAgfSlcbiAgKTtcbn1cblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL3V0aWxzL3dhbGsuanNcbmZ1bmN0aW9uIHdhbGsoZWwsIGNhbGxiYWNrKSB7XG4gIGlmICh0eXBlb2YgU2hhZG93Um9vdCA9PT0gXCJmdW5jdGlvblwiICYmIGVsIGluc3RhbmNlb2YgU2hhZG93Um9vdCkge1xuICAgIEFycmF5LmZyb20oZWwuY2hpbGRyZW4pLmZvckVhY2goKGVsMikgPT4gd2FsayhlbDIsIGNhbGxiYWNrKSk7XG4gICAgcmV0dXJuO1xuICB9XG4gIGxldCBza2lwID0gZmFsc2U7XG4gIGNhbGxiYWNrKGVsLCAoKSA9PiBza2lwID0gdHJ1ZSk7XG4gIGlmIChza2lwKVxuICAgIHJldHVybjtcbiAgbGV0IG5vZGUgPSBlbC5maXJzdEVsZW1lbnRDaGlsZDtcbiAgd2hpbGUgKG5vZGUpIHtcbiAgICB3YWxrKG5vZGUsIGNhbGxiYWNrLCBmYWxzZSk7XG4gICAgbm9kZSA9IG5vZGUubmV4dEVsZW1lbnRTaWJsaW5nO1xuICB9XG59XG5cbi8vIHBhY2thZ2VzL2FscGluZWpzL3NyYy91dGlscy93YXJuLmpzXG5mdW5jdGlvbiB3YXJuKG1lc3NhZ2UsIC4uLmFyZ3MpIHtcbiAgY29uc29sZS53YXJuKGBBbHBpbmUgV2FybmluZzogJHttZXNzYWdlfWAsIC4uLmFyZ3MpO1xufVxuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvbGlmZWN5Y2xlLmpzXG52YXIgc3RhcnRlZCA9IGZhbHNlO1xuZnVuY3Rpb24gc3RhcnQoKSB7XG4gIGlmIChzdGFydGVkKVxuICAgIHdhcm4oXCJBbHBpbmUgaGFzIGFscmVhZHkgYmVlbiBpbml0aWFsaXplZCBvbiB0aGlzIHBhZ2UuIENhbGxpbmcgQWxwaW5lLnN0YXJ0KCkgbW9yZSB0aGFuIG9uY2UgY2FuIGNhdXNlIHByb2JsZW1zLlwiKTtcbiAgc3RhcnRlZCA9IHRydWU7XG4gIGlmICghZG9jdW1lbnQuYm9keSlcbiAgICB3YXJuKFwiVW5hYmxlIHRvIGluaXRpYWxpemUuIFRyeWluZyB0byBsb2FkIEFscGluZSBiZWZvcmUgYDxib2R5PmAgaXMgYXZhaWxhYmxlLiBEaWQgeW91IGZvcmdldCB0byBhZGQgYGRlZmVyYCBpbiBBbHBpbmUncyBgPHNjcmlwdD5gIHRhZz9cIik7XG4gIGRpc3BhdGNoKGRvY3VtZW50LCBcImFscGluZTppbml0XCIpO1xuICBkaXNwYXRjaChkb2N1bWVudCwgXCJhbHBpbmU6aW5pdGlhbGl6aW5nXCIpO1xuICBzdGFydE9ic2VydmluZ011dGF0aW9ucygpO1xuICBvbkVsQWRkZWQoKGVsKSA9PiBpbml0VHJlZShlbCwgd2FsaykpO1xuICBvbkVsUmVtb3ZlZCgoZWwpID0+IGRlc3Ryb3lUcmVlKGVsKSk7XG4gIG9uQXR0cmlidXRlc0FkZGVkKChlbCwgYXR0cnMpID0+IHtcbiAgICBkaXJlY3RpdmVzKGVsLCBhdHRycykuZm9yRWFjaCgoaGFuZGxlKSA9PiBoYW5kbGUoKSk7XG4gIH0pO1xuICBsZXQgb3V0TmVzdGVkQ29tcG9uZW50cyA9IChlbCkgPT4gIWNsb3Nlc3RSb290KGVsLnBhcmVudEVsZW1lbnQsIHRydWUpO1xuICBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYWxsU2VsZWN0b3JzKCkuam9pbihcIixcIikpKS5maWx0ZXIob3V0TmVzdGVkQ29tcG9uZW50cykuZm9yRWFjaCgoZWwpID0+IHtcbiAgICBpbml0VHJlZShlbCk7XG4gIH0pO1xuICBkaXNwYXRjaChkb2N1bWVudCwgXCJhbHBpbmU6aW5pdGlhbGl6ZWRcIik7XG59XG52YXIgcm9vdFNlbGVjdG9yQ2FsbGJhY2tzID0gW107XG52YXIgaW5pdFNlbGVjdG9yQ2FsbGJhY2tzID0gW107XG5mdW5jdGlvbiByb290U2VsZWN0b3JzKCkge1xuICByZXR1cm4gcm9vdFNlbGVjdG9yQ2FsbGJhY2tzLm1hcCgoZm4pID0+IGZuKCkpO1xufVxuZnVuY3Rpb24gYWxsU2VsZWN0b3JzKCkge1xuICByZXR1cm4gcm9vdFNlbGVjdG9yQ2FsbGJhY2tzLmNvbmNhdChpbml0U2VsZWN0b3JDYWxsYmFja3MpLm1hcCgoZm4pID0+IGZuKCkpO1xufVxuZnVuY3Rpb24gYWRkUm9vdFNlbGVjdG9yKHNlbGVjdG9yQ2FsbGJhY2spIHtcbiAgcm9vdFNlbGVjdG9yQ2FsbGJhY2tzLnB1c2goc2VsZWN0b3JDYWxsYmFjayk7XG59XG5mdW5jdGlvbiBhZGRJbml0U2VsZWN0b3Ioc2VsZWN0b3JDYWxsYmFjaykge1xuICBpbml0U2VsZWN0b3JDYWxsYmFja3MucHVzaChzZWxlY3RvckNhbGxiYWNrKTtcbn1cbmZ1bmN0aW9uIGNsb3Nlc3RSb290KGVsLCBpbmNsdWRlSW5pdFNlbGVjdG9ycyA9IGZhbHNlKSB7XG4gIHJldHVybiBmaW5kQ2xvc2VzdChlbCwgKGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBzZWxlY3RvcnMgPSBpbmNsdWRlSW5pdFNlbGVjdG9ycyA/IGFsbFNlbGVjdG9ycygpIDogcm9vdFNlbGVjdG9ycygpO1xuICAgIGlmIChzZWxlY3RvcnMuc29tZSgoc2VsZWN0b3IpID0+IGVsZW1lbnQubWF0Y2hlcyhzZWxlY3RvcikpKVxuICAgICAgcmV0dXJuIHRydWU7XG4gIH0pO1xufVxuZnVuY3Rpb24gZmluZENsb3Nlc3QoZWwsIGNhbGxiYWNrKSB7XG4gIGlmICghZWwpXG4gICAgcmV0dXJuO1xuICBpZiAoY2FsbGJhY2soZWwpKVxuICAgIHJldHVybiBlbDtcbiAgaWYgKGVsLl94X3RlbGVwb3J0QmFjaylcbiAgICBlbCA9IGVsLl94X3RlbGVwb3J0QmFjaztcbiAgaWYgKCFlbC5wYXJlbnRFbGVtZW50KVxuICAgIHJldHVybjtcbiAgcmV0dXJuIGZpbmRDbG9zZXN0KGVsLnBhcmVudEVsZW1lbnQsIGNhbGxiYWNrKTtcbn1cbmZ1bmN0aW9uIGlzUm9vdChlbCkge1xuICByZXR1cm4gcm9vdFNlbGVjdG9ycygpLnNvbWUoKHNlbGVjdG9yKSA9PiBlbC5tYXRjaGVzKHNlbGVjdG9yKSk7XG59XG52YXIgaW5pdEludGVyY2VwdG9ycyA9IFtdO1xuZnVuY3Rpb24gaW50ZXJjZXB0SW5pdChjYWxsYmFjaykge1xuICBpbml0SW50ZXJjZXB0b3JzLnB1c2goY2FsbGJhY2spO1xufVxuZnVuY3Rpb24gaW5pdFRyZWUoZWwsIHdhbGtlciA9IHdhbGssIGludGVyY2VwdCA9ICgpID0+IHtcbn0pIHtcbiAgZGVmZXJIYW5kbGluZ0RpcmVjdGl2ZXMoKCkgPT4ge1xuICAgIHdhbGtlcihlbCwgKGVsMiwgc2tpcCkgPT4ge1xuICAgICAgaW50ZXJjZXB0KGVsMiwgc2tpcCk7XG4gICAgICBpbml0SW50ZXJjZXB0b3JzLmZvckVhY2goKGkpID0+IGkoZWwyLCBza2lwKSk7XG4gICAgICBkaXJlY3RpdmVzKGVsMiwgZWwyLmF0dHJpYnV0ZXMpLmZvckVhY2goKGhhbmRsZSkgPT4gaGFuZGxlKCkpO1xuICAgICAgZWwyLl94X2lnbm9yZSAmJiBza2lwKCk7XG4gICAgfSk7XG4gIH0pO1xufVxuZnVuY3Rpb24gZGVzdHJveVRyZWUocm9vdCkge1xuICB3YWxrKHJvb3QsIChlbCkgPT4ge1xuICAgIGNsZWFudXBBdHRyaWJ1dGVzKGVsKTtcbiAgICBjbGVhbnVwRWxlbWVudChlbCk7XG4gIH0pO1xufVxuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvbXV0YXRpb24uanNcbnZhciBvbkF0dHJpYnV0ZUFkZGVkcyA9IFtdO1xudmFyIG9uRWxSZW1vdmVkcyA9IFtdO1xudmFyIG9uRWxBZGRlZHMgPSBbXTtcbmZ1bmN0aW9uIG9uRWxBZGRlZChjYWxsYmFjaykge1xuICBvbkVsQWRkZWRzLnB1c2goY2FsbGJhY2spO1xufVxuZnVuY3Rpb24gb25FbFJlbW92ZWQoZWwsIGNhbGxiYWNrKSB7XG4gIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIGlmICghZWwuX3hfY2xlYW51cHMpXG4gICAgICBlbC5feF9jbGVhbnVwcyA9IFtdO1xuICAgIGVsLl94X2NsZWFudXBzLnB1c2goY2FsbGJhY2spO1xuICB9IGVsc2Uge1xuICAgIGNhbGxiYWNrID0gZWw7XG4gICAgb25FbFJlbW92ZWRzLnB1c2goY2FsbGJhY2spO1xuICB9XG59XG5mdW5jdGlvbiBvbkF0dHJpYnV0ZXNBZGRlZChjYWxsYmFjaykge1xuICBvbkF0dHJpYnV0ZUFkZGVkcy5wdXNoKGNhbGxiYWNrKTtcbn1cbmZ1bmN0aW9uIG9uQXR0cmlidXRlUmVtb3ZlZChlbCwgbmFtZSwgY2FsbGJhY2spIHtcbiAgaWYgKCFlbC5feF9hdHRyaWJ1dGVDbGVhbnVwcylcbiAgICBlbC5feF9hdHRyaWJ1dGVDbGVhbnVwcyA9IHt9O1xuICBpZiAoIWVsLl94X2F0dHJpYnV0ZUNsZWFudXBzW25hbWVdKVxuICAgIGVsLl94X2F0dHJpYnV0ZUNsZWFudXBzW25hbWVdID0gW107XG4gIGVsLl94X2F0dHJpYnV0ZUNsZWFudXBzW25hbWVdLnB1c2goY2FsbGJhY2spO1xufVxuZnVuY3Rpb24gY2xlYW51cEF0dHJpYnV0ZXMoZWwsIG5hbWVzKSB7XG4gIGlmICghZWwuX3hfYXR0cmlidXRlQ2xlYW51cHMpXG4gICAgcmV0dXJuO1xuICBPYmplY3QuZW50cmllcyhlbC5feF9hdHRyaWJ1dGVDbGVhbnVwcykuZm9yRWFjaCgoW25hbWUsIHZhbHVlXSkgPT4ge1xuICAgIGlmIChuYW1lcyA9PT0gdm9pZCAwIHx8IG5hbWVzLmluY2x1ZGVzKG5hbWUpKSB7XG4gICAgICB2YWx1ZS5mb3JFYWNoKChpKSA9PiBpKCkpO1xuICAgICAgZGVsZXRlIGVsLl94X2F0dHJpYnV0ZUNsZWFudXBzW25hbWVdO1xuICAgIH1cbiAgfSk7XG59XG5mdW5jdGlvbiBjbGVhbnVwRWxlbWVudChlbCkge1xuICBpZiAoZWwuX3hfY2xlYW51cHMpIHtcbiAgICB3aGlsZSAoZWwuX3hfY2xlYW51cHMubGVuZ3RoKVxuICAgICAgZWwuX3hfY2xlYW51cHMucG9wKCkoKTtcbiAgfVxufVxudmFyIG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIob25NdXRhdGUpO1xudmFyIGN1cnJlbnRseU9ic2VydmluZyA9IGZhbHNlO1xuZnVuY3Rpb24gc3RhcnRPYnNlcnZpbmdNdXRhdGlvbnMoKSB7XG4gIG9ic2VydmVyLm9ic2VydmUoZG9jdW1lbnQsIHsgc3VidHJlZTogdHJ1ZSwgY2hpbGRMaXN0OiB0cnVlLCBhdHRyaWJ1dGVzOiB0cnVlLCBhdHRyaWJ1dGVPbGRWYWx1ZTogdHJ1ZSB9KTtcbiAgY3VycmVudGx5T2JzZXJ2aW5nID0gdHJ1ZTtcbn1cbmZ1bmN0aW9uIHN0b3BPYnNlcnZpbmdNdXRhdGlvbnMoKSB7XG4gIGZsdXNoT2JzZXJ2ZXIoKTtcbiAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICBjdXJyZW50bHlPYnNlcnZpbmcgPSBmYWxzZTtcbn1cbnZhciByZWNvcmRRdWV1ZSA9IFtdO1xudmFyIHdpbGxQcm9jZXNzUmVjb3JkUXVldWUgPSBmYWxzZTtcbmZ1bmN0aW9uIGZsdXNoT2JzZXJ2ZXIoKSB7XG4gIHJlY29yZFF1ZXVlID0gcmVjb3JkUXVldWUuY29uY2F0KG9ic2VydmVyLnRha2VSZWNvcmRzKCkpO1xuICBpZiAocmVjb3JkUXVldWUubGVuZ3RoICYmICF3aWxsUHJvY2Vzc1JlY29yZFF1ZXVlKSB7XG4gICAgd2lsbFByb2Nlc3NSZWNvcmRRdWV1ZSA9IHRydWU7XG4gICAgcXVldWVNaWNyb3Rhc2soKCkgPT4ge1xuICAgICAgcHJvY2Vzc1JlY29yZFF1ZXVlKCk7XG4gICAgICB3aWxsUHJvY2Vzc1JlY29yZFF1ZXVlID0gZmFsc2U7XG4gICAgfSk7XG4gIH1cbn1cbmZ1bmN0aW9uIHByb2Nlc3NSZWNvcmRRdWV1ZSgpIHtcbiAgb25NdXRhdGUocmVjb3JkUXVldWUpO1xuICByZWNvcmRRdWV1ZS5sZW5ndGggPSAwO1xufVxuZnVuY3Rpb24gbXV0YXRlRG9tKGNhbGxiYWNrKSB7XG4gIGlmICghY3VycmVudGx5T2JzZXJ2aW5nKVxuICAgIHJldHVybiBjYWxsYmFjaygpO1xuICBzdG9wT2JzZXJ2aW5nTXV0YXRpb25zKCk7XG4gIGxldCByZXN1bHQgPSBjYWxsYmFjaygpO1xuICBzdGFydE9ic2VydmluZ011dGF0aW9ucygpO1xuICByZXR1cm4gcmVzdWx0O1xufVxudmFyIGlzQ29sbGVjdGluZyA9IGZhbHNlO1xudmFyIGRlZmVycmVkTXV0YXRpb25zID0gW107XG5mdW5jdGlvbiBkZWZlck11dGF0aW9ucygpIHtcbiAgaXNDb2xsZWN0aW5nID0gdHJ1ZTtcbn1cbmZ1bmN0aW9uIGZsdXNoQW5kU3RvcERlZmVycmluZ011dGF0aW9ucygpIHtcbiAgaXNDb2xsZWN0aW5nID0gZmFsc2U7XG4gIG9uTXV0YXRlKGRlZmVycmVkTXV0YXRpb25zKTtcbiAgZGVmZXJyZWRNdXRhdGlvbnMgPSBbXTtcbn1cbmZ1bmN0aW9uIG9uTXV0YXRlKG11dGF0aW9ucykge1xuICBpZiAoaXNDb2xsZWN0aW5nKSB7XG4gICAgZGVmZXJyZWRNdXRhdGlvbnMgPSBkZWZlcnJlZE11dGF0aW9ucy5jb25jYXQobXV0YXRpb25zKTtcbiAgICByZXR1cm47XG4gIH1cbiAgbGV0IGFkZGVkTm9kZXMgPSBbXTtcbiAgbGV0IHJlbW92ZWROb2RlcyA9IFtdO1xuICBsZXQgYWRkZWRBdHRyaWJ1dGVzID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcbiAgbGV0IHJlbW92ZWRBdHRyaWJ1dGVzID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBtdXRhdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAobXV0YXRpb25zW2ldLnRhcmdldC5feF9pZ25vcmVNdXRhdGlvbk9ic2VydmVyKVxuICAgICAgY29udGludWU7XG4gICAgaWYgKG11dGF0aW9uc1tpXS50eXBlID09PSBcImNoaWxkTGlzdFwiKSB7XG4gICAgICBtdXRhdGlvbnNbaV0uYWRkZWROb2Rlcy5mb3JFYWNoKChub2RlKSA9PiBub2RlLm5vZGVUeXBlID09PSAxICYmIGFkZGVkTm9kZXMucHVzaChub2RlKSk7XG4gICAgICBtdXRhdGlvbnNbaV0ucmVtb3ZlZE5vZGVzLmZvckVhY2goKG5vZGUpID0+IG5vZGUubm9kZVR5cGUgPT09IDEgJiYgcmVtb3ZlZE5vZGVzLnB1c2gobm9kZSkpO1xuICAgIH1cbiAgICBpZiAobXV0YXRpb25zW2ldLnR5cGUgPT09IFwiYXR0cmlidXRlc1wiKSB7XG4gICAgICBsZXQgZWwgPSBtdXRhdGlvbnNbaV0udGFyZ2V0O1xuICAgICAgbGV0IG5hbWUgPSBtdXRhdGlvbnNbaV0uYXR0cmlidXRlTmFtZTtcbiAgICAgIGxldCBvbGRWYWx1ZSA9IG11dGF0aW9uc1tpXS5vbGRWYWx1ZTtcbiAgICAgIGxldCBhZGQyID0gKCkgPT4ge1xuICAgICAgICBpZiAoIWFkZGVkQXR0cmlidXRlcy5oYXMoZWwpKVxuICAgICAgICAgIGFkZGVkQXR0cmlidXRlcy5zZXQoZWwsIFtdKTtcbiAgICAgICAgYWRkZWRBdHRyaWJ1dGVzLmdldChlbCkucHVzaCh7IG5hbWUsIHZhbHVlOiBlbC5nZXRBdHRyaWJ1dGUobmFtZSkgfSk7XG4gICAgICB9O1xuICAgICAgbGV0IHJlbW92ZSA9ICgpID0+IHtcbiAgICAgICAgaWYgKCFyZW1vdmVkQXR0cmlidXRlcy5oYXMoZWwpKVxuICAgICAgICAgIHJlbW92ZWRBdHRyaWJ1dGVzLnNldChlbCwgW10pO1xuICAgICAgICByZW1vdmVkQXR0cmlidXRlcy5nZXQoZWwpLnB1c2gobmFtZSk7XG4gICAgICB9O1xuICAgICAgaWYgKGVsLmhhc0F0dHJpYnV0ZShuYW1lKSAmJiBvbGRWYWx1ZSA9PT0gbnVsbCkge1xuICAgICAgICBhZGQyKCk7XG4gICAgICB9IGVsc2UgaWYgKGVsLmhhc0F0dHJpYnV0ZShuYW1lKSkge1xuICAgICAgICByZW1vdmUoKTtcbiAgICAgICAgYWRkMigpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVtb3ZlKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJlbW92ZWRBdHRyaWJ1dGVzLmZvckVhY2goKGF0dHJzLCBlbCkgPT4ge1xuICAgIGNsZWFudXBBdHRyaWJ1dGVzKGVsLCBhdHRycyk7XG4gIH0pO1xuICBhZGRlZEF0dHJpYnV0ZXMuZm9yRWFjaCgoYXR0cnMsIGVsKSA9PiB7XG4gICAgb25BdHRyaWJ1dGVBZGRlZHMuZm9yRWFjaCgoaSkgPT4gaShlbCwgYXR0cnMpKTtcbiAgfSk7XG4gIGZvciAobGV0IG5vZGUgb2YgcmVtb3ZlZE5vZGVzKSB7XG4gICAgaWYgKGFkZGVkTm9kZXMuaW5jbHVkZXMobm9kZSkpXG4gICAgICBjb250aW51ZTtcbiAgICBvbkVsUmVtb3ZlZHMuZm9yRWFjaCgoaSkgPT4gaShub2RlKSk7XG4gICAgZGVzdHJveVRyZWUobm9kZSk7XG4gIH1cbiAgYWRkZWROb2Rlcy5mb3JFYWNoKChub2RlKSA9PiB7XG4gICAgbm9kZS5feF9pZ25vcmVTZWxmID0gdHJ1ZTtcbiAgICBub2RlLl94X2lnbm9yZSA9IHRydWU7XG4gIH0pO1xuICBmb3IgKGxldCBub2RlIG9mIGFkZGVkTm9kZXMpIHtcbiAgICBpZiAocmVtb3ZlZE5vZGVzLmluY2x1ZGVzKG5vZGUpKVxuICAgICAgY29udGludWU7XG4gICAgaWYgKCFub2RlLmlzQ29ubmVjdGVkKVxuICAgICAgY29udGludWU7XG4gICAgZGVsZXRlIG5vZGUuX3hfaWdub3JlU2VsZjtcbiAgICBkZWxldGUgbm9kZS5feF9pZ25vcmU7XG4gICAgb25FbEFkZGVkcy5mb3JFYWNoKChpKSA9PiBpKG5vZGUpKTtcbiAgICBub2RlLl94X2lnbm9yZSA9IHRydWU7XG4gICAgbm9kZS5feF9pZ25vcmVTZWxmID0gdHJ1ZTtcbiAgfVxuICBhZGRlZE5vZGVzLmZvckVhY2goKG5vZGUpID0+IHtcbiAgICBkZWxldGUgbm9kZS5feF9pZ25vcmVTZWxmO1xuICAgIGRlbGV0ZSBub2RlLl94X2lnbm9yZTtcbiAgfSk7XG4gIGFkZGVkTm9kZXMgPSBudWxsO1xuICByZW1vdmVkTm9kZXMgPSBudWxsO1xuICBhZGRlZEF0dHJpYnV0ZXMgPSBudWxsO1xuICByZW1vdmVkQXR0cmlidXRlcyA9IG51bGw7XG59XG5cbi8vIHBhY2thZ2VzL2FscGluZWpzL3NyYy9zY29wZS5qc1xuZnVuY3Rpb24gc2NvcGUobm9kZSkge1xuICByZXR1cm4gbWVyZ2VQcm94aWVzKGNsb3Nlc3REYXRhU3RhY2sobm9kZSkpO1xufVxuZnVuY3Rpb24gYWRkU2NvcGVUb05vZGUobm9kZSwgZGF0YTIsIHJlZmVyZW5jZU5vZGUpIHtcbiAgbm9kZS5feF9kYXRhU3RhY2sgPSBbZGF0YTIsIC4uLmNsb3Nlc3REYXRhU3RhY2socmVmZXJlbmNlTm9kZSB8fCBub2RlKV07XG4gIHJldHVybiAoKSA9PiB7XG4gICAgbm9kZS5feF9kYXRhU3RhY2sgPSBub2RlLl94X2RhdGFTdGFjay5maWx0ZXIoKGkpID0+IGkgIT09IGRhdGEyKTtcbiAgfTtcbn1cbmZ1bmN0aW9uIGNsb3Nlc3REYXRhU3RhY2sobm9kZSkge1xuICBpZiAobm9kZS5feF9kYXRhU3RhY2spXG4gICAgcmV0dXJuIG5vZGUuX3hfZGF0YVN0YWNrO1xuICBpZiAodHlwZW9mIFNoYWRvd1Jvb3QgPT09IFwiZnVuY3Rpb25cIiAmJiBub2RlIGluc3RhbmNlb2YgU2hhZG93Um9vdCkge1xuICAgIHJldHVybiBjbG9zZXN0RGF0YVN0YWNrKG5vZGUuaG9zdCk7XG4gIH1cbiAgaWYgKCFub2RlLnBhcmVudE5vZGUpIHtcbiAgICByZXR1cm4gW107XG4gIH1cbiAgcmV0dXJuIGNsb3Nlc3REYXRhU3RhY2sobm9kZS5wYXJlbnROb2RlKTtcbn1cbmZ1bmN0aW9uIG1lcmdlUHJveGllcyhvYmplY3RzKSB7XG4gIHJldHVybiBuZXcgUHJveHkoeyBvYmplY3RzIH0sIG1lcmdlUHJveHlUcmFwKTtcbn1cbnZhciBtZXJnZVByb3h5VHJhcCA9IHtcbiAgb3duS2V5cyh7IG9iamVjdHMgfSkge1xuICAgIHJldHVybiBBcnJheS5mcm9tKFxuICAgICAgbmV3IFNldChvYmplY3RzLmZsYXRNYXAoKGkpID0+IE9iamVjdC5rZXlzKGkpKSlcbiAgICApO1xuICB9LFxuICBoYXMoeyBvYmplY3RzIH0sIG5hbWUpIHtcbiAgICBpZiAobmFtZSA9PSBTeW1ib2wudW5zY29wYWJsZXMpXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgcmV0dXJuIG9iamVjdHMuc29tZShcbiAgICAgIChvYmopID0+IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIG5hbWUpXG4gICAgKTtcbiAgfSxcbiAgZ2V0KHsgb2JqZWN0cyB9LCBuYW1lLCB0aGlzUHJveHkpIHtcbiAgICBpZiAobmFtZSA9PSBcInRvSlNPTlwiKVxuICAgICAgcmV0dXJuIGNvbGxhcHNlUHJveGllcztcbiAgICByZXR1cm4gUmVmbGVjdC5nZXQoXG4gICAgICBvYmplY3RzLmZpbmQoXG4gICAgICAgIChvYmopID0+IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIG5hbWUpXG4gICAgICApIHx8IHt9LFxuICAgICAgbmFtZSxcbiAgICAgIHRoaXNQcm94eVxuICAgICk7XG4gIH0sXG4gIHNldCh7IG9iamVjdHMgfSwgbmFtZSwgdmFsdWUsIHRoaXNQcm94eSkge1xuICAgIGNvbnN0IHRhcmdldCA9IG9iamVjdHMuZmluZChcbiAgICAgIChvYmopID0+IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIG5hbWUpXG4gICAgKSB8fCBvYmplY3RzW29iamVjdHMubGVuZ3RoIC0gMV07XG4gICAgY29uc3QgZGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBuYW1lKTtcbiAgICBpZiAoZGVzY3JpcHRvcj8uc2V0ICYmIGRlc2NyaXB0b3I/LmdldClcbiAgICAgIHJldHVybiBSZWZsZWN0LnNldCh0YXJnZXQsIG5hbWUsIHZhbHVlLCB0aGlzUHJveHkpO1xuICAgIHJldHVybiBSZWZsZWN0LnNldCh0YXJnZXQsIG5hbWUsIHZhbHVlKTtcbiAgfVxufTtcbmZ1bmN0aW9uIGNvbGxhcHNlUHJveGllcygpIHtcbiAgbGV0IGtleXMgPSBSZWZsZWN0Lm93bktleXModGhpcyk7XG4gIHJldHVybiBrZXlzLnJlZHVjZSgoYWNjLCBrZXkpID0+IHtcbiAgICBhY2Nba2V5XSA9IFJlZmxlY3QuZ2V0KHRoaXMsIGtleSk7XG4gICAgcmV0dXJuIGFjYztcbiAgfSwge30pO1xufVxuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvaW50ZXJjZXB0b3IuanNcbmZ1bmN0aW9uIGluaXRJbnRlcmNlcHRvcnMyKGRhdGEyKSB7XG4gIGxldCBpc09iamVjdDIgPSAodmFsKSA9PiB0eXBlb2YgdmFsID09PSBcIm9iamVjdFwiICYmICFBcnJheS5pc0FycmF5KHZhbCkgJiYgdmFsICE9PSBudWxsO1xuICBsZXQgcmVjdXJzZSA9IChvYmosIGJhc2VQYXRoID0gXCJcIikgPT4ge1xuICAgIE9iamVjdC5lbnRyaWVzKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKG9iaikpLmZvckVhY2goKFtrZXksIHsgdmFsdWUsIGVudW1lcmFibGUgfV0pID0+IHtcbiAgICAgIGlmIChlbnVtZXJhYmxlID09PSBmYWxzZSB8fCB2YWx1ZSA9PT0gdm9pZCAwKVxuICAgICAgICByZXR1cm47XG4gICAgICBsZXQgcGF0aCA9IGJhc2VQYXRoID09PSBcIlwiID8ga2V5IDogYCR7YmFzZVBhdGh9LiR7a2V5fWA7XG4gICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmIHZhbHVlICE9PSBudWxsICYmIHZhbHVlLl94X2ludGVyY2VwdG9yKSB7XG4gICAgICAgIG9ialtrZXldID0gdmFsdWUuaW5pdGlhbGl6ZShkYXRhMiwgcGF0aCwga2V5KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChpc09iamVjdDIodmFsdWUpICYmIHZhbHVlICE9PSBvYmogJiYgISh2YWx1ZSBpbnN0YW5jZW9mIEVsZW1lbnQpKSB7XG4gICAgICAgICAgcmVjdXJzZSh2YWx1ZSwgcGF0aCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcbiAgcmV0dXJuIHJlY3Vyc2UoZGF0YTIpO1xufVxuZnVuY3Rpb24gaW50ZXJjZXB0b3IoY2FsbGJhY2ssIG11dGF0ZU9iaiA9ICgpID0+IHtcbn0pIHtcbiAgbGV0IG9iaiA9IHtcbiAgICBpbml0aWFsVmFsdWU6IHZvaWQgMCxcbiAgICBfeF9pbnRlcmNlcHRvcjogdHJ1ZSxcbiAgICBpbml0aWFsaXplKGRhdGEyLCBwYXRoLCBrZXkpIHtcbiAgICAgIHJldHVybiBjYWxsYmFjayh0aGlzLmluaXRpYWxWYWx1ZSwgKCkgPT4gZ2V0KGRhdGEyLCBwYXRoKSwgKHZhbHVlKSA9PiBzZXQoZGF0YTIsIHBhdGgsIHZhbHVlKSwgcGF0aCwga2V5KTtcbiAgICB9XG4gIH07XG4gIG11dGF0ZU9iaihvYmopO1xuICByZXR1cm4gKGluaXRpYWxWYWx1ZSkgPT4ge1xuICAgIGlmICh0eXBlb2YgaW5pdGlhbFZhbHVlID09PSBcIm9iamVjdFwiICYmIGluaXRpYWxWYWx1ZSAhPT0gbnVsbCAmJiBpbml0aWFsVmFsdWUuX3hfaW50ZXJjZXB0b3IpIHtcbiAgICAgIGxldCBpbml0aWFsaXplID0gb2JqLmluaXRpYWxpemUuYmluZChvYmopO1xuICAgICAgb2JqLmluaXRpYWxpemUgPSAoZGF0YTIsIHBhdGgsIGtleSkgPT4ge1xuICAgICAgICBsZXQgaW5uZXJWYWx1ZSA9IGluaXRpYWxWYWx1ZS5pbml0aWFsaXplKGRhdGEyLCBwYXRoLCBrZXkpO1xuICAgICAgICBvYmouaW5pdGlhbFZhbHVlID0gaW5uZXJWYWx1ZTtcbiAgICAgICAgcmV0dXJuIGluaXRpYWxpemUoZGF0YTIsIHBhdGgsIGtleSk7XG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICBvYmouaW5pdGlhbFZhbHVlID0gaW5pdGlhbFZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gb2JqO1xuICB9O1xufVxuZnVuY3Rpb24gZ2V0KG9iaiwgcGF0aCkge1xuICByZXR1cm4gcGF0aC5zcGxpdChcIi5cIikucmVkdWNlKChjYXJyeSwgc2VnbWVudCkgPT4gY2Fycnlbc2VnbWVudF0sIG9iaik7XG59XG5mdW5jdGlvbiBzZXQob2JqLCBwYXRoLCB2YWx1ZSkge1xuICBpZiAodHlwZW9mIHBhdGggPT09IFwic3RyaW5nXCIpXG4gICAgcGF0aCA9IHBhdGguc3BsaXQoXCIuXCIpO1xuICBpZiAocGF0aC5sZW5ndGggPT09IDEpXG4gICAgb2JqW3BhdGhbMF1dID0gdmFsdWU7XG4gIGVsc2UgaWYgKHBhdGgubGVuZ3RoID09PSAwKVxuICAgIHRocm93IGVycm9yO1xuICBlbHNlIHtcbiAgICBpZiAob2JqW3BhdGhbMF1dKVxuICAgICAgcmV0dXJuIHNldChvYmpbcGF0aFswXV0sIHBhdGguc2xpY2UoMSksIHZhbHVlKTtcbiAgICBlbHNlIHtcbiAgICAgIG9ialtwYXRoWzBdXSA9IHt9O1xuICAgICAgcmV0dXJuIHNldChvYmpbcGF0aFswXV0sIHBhdGguc2xpY2UoMSksIHZhbHVlKTtcbiAgICB9XG4gIH1cbn1cblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL21hZ2ljcy5qc1xudmFyIG1hZ2ljcyA9IHt9O1xuZnVuY3Rpb24gbWFnaWMobmFtZSwgY2FsbGJhY2spIHtcbiAgbWFnaWNzW25hbWVdID0gY2FsbGJhY2s7XG59XG5mdW5jdGlvbiBpbmplY3RNYWdpY3Mob2JqLCBlbCkge1xuICBPYmplY3QuZW50cmllcyhtYWdpY3MpLmZvckVhY2goKFtuYW1lLCBjYWxsYmFja10pID0+IHtcbiAgICBsZXQgbWVtb2l6ZWRVdGlsaXRpZXMgPSBudWxsO1xuICAgIGZ1bmN0aW9uIGdldFV0aWxpdGllcygpIHtcbiAgICAgIGlmIChtZW1vaXplZFV0aWxpdGllcykge1xuICAgICAgICByZXR1cm4gbWVtb2l6ZWRVdGlsaXRpZXM7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgW3V0aWxpdGllcywgY2xlYW51cDJdID0gZ2V0RWxlbWVudEJvdW5kVXRpbGl0aWVzKGVsKTtcbiAgICAgICAgbWVtb2l6ZWRVdGlsaXRpZXMgPSB7IGludGVyY2VwdG9yLCAuLi51dGlsaXRpZXMgfTtcbiAgICAgICAgb25FbFJlbW92ZWQoZWwsIGNsZWFudXAyKTtcbiAgICAgICAgcmV0dXJuIG1lbW9pemVkVXRpbGl0aWVzO1xuICAgICAgfVxuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBgJCR7bmFtZX1gLCB7XG4gICAgICBnZXQoKSB7XG4gICAgICAgIHJldHVybiBjYWxsYmFjayhlbCwgZ2V0VXRpbGl0aWVzKCkpO1xuICAgICAgfSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlXG4gICAgfSk7XG4gIH0pO1xuICByZXR1cm4gb2JqO1xufVxuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvdXRpbHMvZXJyb3IuanNcbmZ1bmN0aW9uIHRyeUNhdGNoKGVsLCBleHByZXNzaW9uLCBjYWxsYmFjaywgLi4uYXJncykge1xuICB0cnkge1xuICAgIHJldHVybiBjYWxsYmFjayguLi5hcmdzKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGhhbmRsZUVycm9yKGUsIGVsLCBleHByZXNzaW9uKTtcbiAgfVxufVxuZnVuY3Rpb24gaGFuZGxlRXJyb3IoZXJyb3IyLCBlbCwgZXhwcmVzc2lvbiA9IHZvaWQgMCkge1xuICBPYmplY3QuYXNzaWduKGVycm9yMiwgeyBlbCwgZXhwcmVzc2lvbiB9KTtcbiAgY29uc29sZS53YXJuKGBBbHBpbmUgRXhwcmVzc2lvbiBFcnJvcjogJHtlcnJvcjIubWVzc2FnZX1cblxuJHtleHByZXNzaW9uID8gJ0V4cHJlc3Npb246IFwiJyArIGV4cHJlc3Npb24gKyAnXCJcXG5cXG4nIDogXCJcIn1gLCBlbCk7XG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIHRocm93IGVycm9yMjtcbiAgfSwgMCk7XG59XG5cbi8vIHBhY2thZ2VzL2FscGluZWpzL3NyYy9ldmFsdWF0b3IuanNcbnZhciBzaG91bGRBdXRvRXZhbHVhdGVGdW5jdGlvbnMgPSB0cnVlO1xuZnVuY3Rpb24gZG9udEF1dG9FdmFsdWF0ZUZ1bmN0aW9ucyhjYWxsYmFjaykge1xuICBsZXQgY2FjaGUgPSBzaG91bGRBdXRvRXZhbHVhdGVGdW5jdGlvbnM7XG4gIHNob3VsZEF1dG9FdmFsdWF0ZUZ1bmN0aW9ucyA9IGZhbHNlO1xuICBsZXQgcmVzdWx0ID0gY2FsbGJhY2soKTtcbiAgc2hvdWxkQXV0b0V2YWx1YXRlRnVuY3Rpb25zID0gY2FjaGU7XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBldmFsdWF0ZShlbCwgZXhwcmVzc2lvbiwgZXh0cmFzID0ge30pIHtcbiAgbGV0IHJlc3VsdDtcbiAgZXZhbHVhdGVMYXRlcihlbCwgZXhwcmVzc2lvbikoKHZhbHVlKSA9PiByZXN1bHQgPSB2YWx1ZSwgZXh0cmFzKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIGV2YWx1YXRlTGF0ZXIoLi4uYXJncykge1xuICByZXR1cm4gdGhlRXZhbHVhdG9yRnVuY3Rpb24oLi4uYXJncyk7XG59XG52YXIgdGhlRXZhbHVhdG9yRnVuY3Rpb24gPSBub3JtYWxFdmFsdWF0b3I7XG5mdW5jdGlvbiBzZXRFdmFsdWF0b3IobmV3RXZhbHVhdG9yKSB7XG4gIHRoZUV2YWx1YXRvckZ1bmN0aW9uID0gbmV3RXZhbHVhdG9yO1xufVxuZnVuY3Rpb24gbm9ybWFsRXZhbHVhdG9yKGVsLCBleHByZXNzaW9uKSB7XG4gIGxldCBvdmVycmlkZGVuTWFnaWNzID0ge307XG4gIGluamVjdE1hZ2ljcyhvdmVycmlkZGVuTWFnaWNzLCBlbCk7XG4gIGxldCBkYXRhU3RhY2sgPSBbb3ZlcnJpZGRlbk1hZ2ljcywgLi4uY2xvc2VzdERhdGFTdGFjayhlbCldO1xuICBsZXQgZXZhbHVhdG9yID0gdHlwZW9mIGV4cHJlc3Npb24gPT09IFwiZnVuY3Rpb25cIiA/IGdlbmVyYXRlRXZhbHVhdG9yRnJvbUZ1bmN0aW9uKGRhdGFTdGFjaywgZXhwcmVzc2lvbikgOiBnZW5lcmF0ZUV2YWx1YXRvckZyb21TdHJpbmcoZGF0YVN0YWNrLCBleHByZXNzaW9uLCBlbCk7XG4gIHJldHVybiB0cnlDYXRjaC5iaW5kKG51bGwsIGVsLCBleHByZXNzaW9uLCBldmFsdWF0b3IpO1xufVxuZnVuY3Rpb24gZ2VuZXJhdGVFdmFsdWF0b3JGcm9tRnVuY3Rpb24oZGF0YVN0YWNrLCBmdW5jKSB7XG4gIHJldHVybiAocmVjZWl2ZXIgPSAoKSA9PiB7XG4gIH0sIHsgc2NvcGU6IHNjb3BlMiA9IHt9LCBwYXJhbXMgPSBbXSB9ID0ge30pID0+IHtcbiAgICBsZXQgcmVzdWx0ID0gZnVuYy5hcHBseShtZXJnZVByb3hpZXMoW3Njb3BlMiwgLi4uZGF0YVN0YWNrXSksIHBhcmFtcyk7XG4gICAgcnVuSWZUeXBlT2ZGdW5jdGlvbihyZWNlaXZlciwgcmVzdWx0KTtcbiAgfTtcbn1cbnZhciBldmFsdWF0b3JNZW1vID0ge307XG5mdW5jdGlvbiBnZW5lcmF0ZUZ1bmN0aW9uRnJvbVN0cmluZyhleHByZXNzaW9uLCBlbCkge1xuICBpZiAoZXZhbHVhdG9yTWVtb1tleHByZXNzaW9uXSkge1xuICAgIHJldHVybiBldmFsdWF0b3JNZW1vW2V4cHJlc3Npb25dO1xuICB9XG4gIGxldCBBc3luY0Z1bmN0aW9uID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKGFzeW5jIGZ1bmN0aW9uKCkge1xuICB9KS5jb25zdHJ1Y3RvcjtcbiAgbGV0IHJpZ2h0U2lkZVNhZmVFeHByZXNzaW9uID0gL15bXFxuXFxzXSppZi4qXFwoLipcXCkvLnRlc3QoZXhwcmVzc2lvbi50cmltKCkpIHx8IC9eKGxldHxjb25zdClcXHMvLnRlc3QoZXhwcmVzc2lvbi50cmltKCkpID8gYChhc3luYygpPT57ICR7ZXhwcmVzc2lvbn0gfSkoKWAgOiBleHByZXNzaW9uO1xuICBjb25zdCBzYWZlQXN5bmNGdW5jdGlvbiA9ICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgbGV0IGZ1bmMyID0gbmV3IEFzeW5jRnVuY3Rpb24oXG4gICAgICAgIFtcIl9fc2VsZlwiLCBcInNjb3BlXCJdLFxuICAgICAgICBgd2l0aCAoc2NvcGUpIHsgX19zZWxmLnJlc3VsdCA9ICR7cmlnaHRTaWRlU2FmZUV4cHJlc3Npb259IH07IF9fc2VsZi5maW5pc2hlZCA9IHRydWU7IHJldHVybiBfX3NlbGYucmVzdWx0O2BcbiAgICAgICk7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZnVuYzIsIFwibmFtZVwiLCB7XG4gICAgICAgIHZhbHVlOiBgW0FscGluZV0gJHtleHByZXNzaW9ufWBcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGZ1bmMyO1xuICAgIH0gY2F0Y2ggKGVycm9yMikge1xuICAgICAgaGFuZGxlRXJyb3IoZXJyb3IyLCBlbCwgZXhwcmVzc2lvbik7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgfVxuICB9O1xuICBsZXQgZnVuYyA9IHNhZmVBc3luY0Z1bmN0aW9uKCk7XG4gIGV2YWx1YXRvck1lbW9bZXhwcmVzc2lvbl0gPSBmdW5jO1xuICByZXR1cm4gZnVuYztcbn1cbmZ1bmN0aW9uIGdlbmVyYXRlRXZhbHVhdG9yRnJvbVN0cmluZyhkYXRhU3RhY2ssIGV4cHJlc3Npb24sIGVsKSB7XG4gIGxldCBmdW5jID0gZ2VuZXJhdGVGdW5jdGlvbkZyb21TdHJpbmcoZXhwcmVzc2lvbiwgZWwpO1xuICByZXR1cm4gKHJlY2VpdmVyID0gKCkgPT4ge1xuICB9LCB7IHNjb3BlOiBzY29wZTIgPSB7fSwgcGFyYW1zID0gW10gfSA9IHt9KSA9PiB7XG4gICAgZnVuYy5yZXN1bHQgPSB2b2lkIDA7XG4gICAgZnVuYy5maW5pc2hlZCA9IGZhbHNlO1xuICAgIGxldCBjb21wbGV0ZVNjb3BlID0gbWVyZ2VQcm94aWVzKFtzY29wZTIsIC4uLmRhdGFTdGFja10pO1xuICAgIGlmICh0eXBlb2YgZnVuYyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICBsZXQgcHJvbWlzZSA9IGZ1bmMoZnVuYywgY29tcGxldGVTY29wZSkuY2F0Y2goKGVycm9yMikgPT4gaGFuZGxlRXJyb3IoZXJyb3IyLCBlbCwgZXhwcmVzc2lvbikpO1xuICAgICAgaWYgKGZ1bmMuZmluaXNoZWQpIHtcbiAgICAgICAgcnVuSWZUeXBlT2ZGdW5jdGlvbihyZWNlaXZlciwgZnVuYy5yZXN1bHQsIGNvbXBsZXRlU2NvcGUsIHBhcmFtcywgZWwpO1xuICAgICAgICBmdW5jLnJlc3VsdCA9IHZvaWQgMDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByb21pc2UudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgICAgcnVuSWZUeXBlT2ZGdW5jdGlvbihyZWNlaXZlciwgcmVzdWx0LCBjb21wbGV0ZVNjb3BlLCBwYXJhbXMsIGVsKTtcbiAgICAgICAgfSkuY2F0Y2goKGVycm9yMikgPT4gaGFuZGxlRXJyb3IoZXJyb3IyLCBlbCwgZXhwcmVzc2lvbikpLmZpbmFsbHkoKCkgPT4gZnVuYy5yZXN1bHQgPSB2b2lkIDApO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn1cbmZ1bmN0aW9uIHJ1bklmVHlwZU9mRnVuY3Rpb24ocmVjZWl2ZXIsIHZhbHVlLCBzY29wZTIsIHBhcmFtcywgZWwpIHtcbiAgaWYgKHNob3VsZEF1dG9FdmFsdWF0ZUZ1bmN0aW9ucyAmJiB0eXBlb2YgdmFsdWUgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIGxldCByZXN1bHQgPSB2YWx1ZS5hcHBseShzY29wZTIsIHBhcmFtcyk7XG4gICAgaWYgKHJlc3VsdCBpbnN0YW5jZW9mIFByb21pc2UpIHtcbiAgICAgIHJlc3VsdC50aGVuKChpKSA9PiBydW5JZlR5cGVPZkZ1bmN0aW9uKHJlY2VpdmVyLCBpLCBzY29wZTIsIHBhcmFtcykpLmNhdGNoKChlcnJvcjIpID0+IGhhbmRsZUVycm9yKGVycm9yMiwgZWwsIHZhbHVlKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlY2VpdmVyKHJlc3VsdCk7XG4gICAgfVxuICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJiB2YWx1ZSBpbnN0YW5jZW9mIFByb21pc2UpIHtcbiAgICB2YWx1ZS50aGVuKChpKSA9PiByZWNlaXZlcihpKSk7XG4gIH0gZWxzZSB7XG4gICAgcmVjZWl2ZXIodmFsdWUpO1xuICB9XG59XG5cbi8vIHBhY2thZ2VzL2FscGluZWpzL3NyYy9kaXJlY3RpdmVzLmpzXG52YXIgcHJlZml4QXNTdHJpbmcgPSBcIngtXCI7XG5mdW5jdGlvbiBwcmVmaXgoc3ViamVjdCA9IFwiXCIpIHtcbiAgcmV0dXJuIHByZWZpeEFzU3RyaW5nICsgc3ViamVjdDtcbn1cbmZ1bmN0aW9uIHNldFByZWZpeChuZXdQcmVmaXgpIHtcbiAgcHJlZml4QXNTdHJpbmcgPSBuZXdQcmVmaXg7XG59XG52YXIgZGlyZWN0aXZlSGFuZGxlcnMgPSB7fTtcbmZ1bmN0aW9uIGRpcmVjdGl2ZShuYW1lLCBjYWxsYmFjaykge1xuICBkaXJlY3RpdmVIYW5kbGVyc1tuYW1lXSA9IGNhbGxiYWNrO1xuICByZXR1cm4ge1xuICAgIGJlZm9yZShkaXJlY3RpdmUyKSB7XG4gICAgICBpZiAoIWRpcmVjdGl2ZUhhbmRsZXJzW2RpcmVjdGl2ZTJdKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICBcIkNhbm5vdCBmaW5kIGRpcmVjdGl2ZSBgJHtkaXJlY3RpdmV9YC4gYCR7bmFtZX1gIHdpbGwgdXNlIHRoZSBkZWZhdWx0IG9yZGVyIG9mIGV4ZWN1dGlvblwiXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHBvcyA9IGRpcmVjdGl2ZU9yZGVyLmluZGV4T2YoZGlyZWN0aXZlMik7XG4gICAgICBkaXJlY3RpdmVPcmRlci5zcGxpY2UocG9zID49IDAgPyBwb3MgOiBkaXJlY3RpdmVPcmRlci5pbmRleE9mKFwiREVGQVVMVFwiKSwgMCwgbmFtZSk7XG4gICAgfVxuICB9O1xufVxuZnVuY3Rpb24gZGlyZWN0aXZlcyhlbCwgYXR0cmlidXRlcywgb3JpZ2luYWxBdHRyaWJ1dGVPdmVycmlkZSkge1xuICBhdHRyaWJ1dGVzID0gQXJyYXkuZnJvbShhdHRyaWJ1dGVzKTtcbiAgaWYgKGVsLl94X3ZpcnR1YWxEaXJlY3RpdmVzKSB7XG4gICAgbGV0IHZBdHRyaWJ1dGVzID0gT2JqZWN0LmVudHJpZXMoZWwuX3hfdmlydHVhbERpcmVjdGl2ZXMpLm1hcCgoW25hbWUsIHZhbHVlXSkgPT4gKHsgbmFtZSwgdmFsdWUgfSkpO1xuICAgIGxldCBzdGF0aWNBdHRyaWJ1dGVzID0gYXR0cmlidXRlc09ubHkodkF0dHJpYnV0ZXMpO1xuICAgIHZBdHRyaWJ1dGVzID0gdkF0dHJpYnV0ZXMubWFwKChhdHRyaWJ1dGUpID0+IHtcbiAgICAgIGlmIChzdGF0aWNBdHRyaWJ1dGVzLmZpbmQoKGF0dHIpID0+IGF0dHIubmFtZSA9PT0gYXR0cmlidXRlLm5hbWUpKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgbmFtZTogYHgtYmluZDoke2F0dHJpYnV0ZS5uYW1lfWAsXG4gICAgICAgICAgdmFsdWU6IGBcIiR7YXR0cmlidXRlLnZhbHVlfVwiYFxuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgcmV0dXJuIGF0dHJpYnV0ZTtcbiAgICB9KTtcbiAgICBhdHRyaWJ1dGVzID0gYXR0cmlidXRlcy5jb25jYXQodkF0dHJpYnV0ZXMpO1xuICB9XG4gIGxldCB0cmFuc2Zvcm1lZEF0dHJpYnV0ZU1hcCA9IHt9O1xuICBsZXQgZGlyZWN0aXZlczIgPSBhdHRyaWJ1dGVzLm1hcCh0b1RyYW5zZm9ybWVkQXR0cmlidXRlcygobmV3TmFtZSwgb2xkTmFtZSkgPT4gdHJhbnNmb3JtZWRBdHRyaWJ1dGVNYXBbbmV3TmFtZV0gPSBvbGROYW1lKSkuZmlsdGVyKG91dE5vbkFscGluZUF0dHJpYnV0ZXMpLm1hcCh0b1BhcnNlZERpcmVjdGl2ZXModHJhbnNmb3JtZWRBdHRyaWJ1dGVNYXAsIG9yaWdpbmFsQXR0cmlidXRlT3ZlcnJpZGUpKS5zb3J0KGJ5UHJpb3JpdHkpO1xuICByZXR1cm4gZGlyZWN0aXZlczIubWFwKChkaXJlY3RpdmUyKSA9PiB7XG4gICAgcmV0dXJuIGdldERpcmVjdGl2ZUhhbmRsZXIoZWwsIGRpcmVjdGl2ZTIpO1xuICB9KTtcbn1cbmZ1bmN0aW9uIGF0dHJpYnV0ZXNPbmx5KGF0dHJpYnV0ZXMpIHtcbiAgcmV0dXJuIEFycmF5LmZyb20oYXR0cmlidXRlcykubWFwKHRvVHJhbnNmb3JtZWRBdHRyaWJ1dGVzKCkpLmZpbHRlcigoYXR0cikgPT4gIW91dE5vbkFscGluZUF0dHJpYnV0ZXMoYXR0cikpO1xufVxudmFyIGlzRGVmZXJyaW5nSGFuZGxlcnMgPSBmYWxzZTtcbnZhciBkaXJlY3RpdmVIYW5kbGVyU3RhY2tzID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcbnZhciBjdXJyZW50SGFuZGxlclN0YWNrS2V5ID0gU3ltYm9sKCk7XG5mdW5jdGlvbiBkZWZlckhhbmRsaW5nRGlyZWN0aXZlcyhjYWxsYmFjaykge1xuICBpc0RlZmVycmluZ0hhbmRsZXJzID0gdHJ1ZTtcbiAgbGV0IGtleSA9IFN5bWJvbCgpO1xuICBjdXJyZW50SGFuZGxlclN0YWNrS2V5ID0ga2V5O1xuICBkaXJlY3RpdmVIYW5kbGVyU3RhY2tzLnNldChrZXksIFtdKTtcbiAgbGV0IGZsdXNoSGFuZGxlcnMgPSAoKSA9PiB7XG4gICAgd2hpbGUgKGRpcmVjdGl2ZUhhbmRsZXJTdGFja3MuZ2V0KGtleSkubGVuZ3RoKVxuICAgICAgZGlyZWN0aXZlSGFuZGxlclN0YWNrcy5nZXQoa2V5KS5zaGlmdCgpKCk7XG4gICAgZGlyZWN0aXZlSGFuZGxlclN0YWNrcy5kZWxldGUoa2V5KTtcbiAgfTtcbiAgbGV0IHN0b3BEZWZlcnJpbmcgPSAoKSA9PiB7XG4gICAgaXNEZWZlcnJpbmdIYW5kbGVycyA9IGZhbHNlO1xuICAgIGZsdXNoSGFuZGxlcnMoKTtcbiAgfTtcbiAgY2FsbGJhY2soZmx1c2hIYW5kbGVycyk7XG4gIHN0b3BEZWZlcnJpbmcoKTtcbn1cbmZ1bmN0aW9uIGdldEVsZW1lbnRCb3VuZFV0aWxpdGllcyhlbCkge1xuICBsZXQgY2xlYW51cHMgPSBbXTtcbiAgbGV0IGNsZWFudXAyID0gKGNhbGxiYWNrKSA9PiBjbGVhbnVwcy5wdXNoKGNhbGxiYWNrKTtcbiAgbGV0IFtlZmZlY3QzLCBjbGVhbnVwRWZmZWN0XSA9IGVsZW1lbnRCb3VuZEVmZmVjdChlbCk7XG4gIGNsZWFudXBzLnB1c2goY2xlYW51cEVmZmVjdCk7XG4gIGxldCB1dGlsaXRpZXMgPSB7XG4gICAgQWxwaW5lOiBhbHBpbmVfZGVmYXVsdCxcbiAgICBlZmZlY3Q6IGVmZmVjdDMsXG4gICAgY2xlYW51cDogY2xlYW51cDIsXG4gICAgZXZhbHVhdGVMYXRlcjogZXZhbHVhdGVMYXRlci5iaW5kKGV2YWx1YXRlTGF0ZXIsIGVsKSxcbiAgICBldmFsdWF0ZTogZXZhbHVhdGUuYmluZChldmFsdWF0ZSwgZWwpXG4gIH07XG4gIGxldCBkb0NsZWFudXAgPSAoKSA9PiBjbGVhbnVwcy5mb3JFYWNoKChpKSA9PiBpKCkpO1xuICByZXR1cm4gW3V0aWxpdGllcywgZG9DbGVhbnVwXTtcbn1cbmZ1bmN0aW9uIGdldERpcmVjdGl2ZUhhbmRsZXIoZWwsIGRpcmVjdGl2ZTIpIHtcbiAgbGV0IG5vb3AgPSAoKSA9PiB7XG4gIH07XG4gIGxldCBoYW5kbGVyNCA9IGRpcmVjdGl2ZUhhbmRsZXJzW2RpcmVjdGl2ZTIudHlwZV0gfHwgbm9vcDtcbiAgbGV0IFt1dGlsaXRpZXMsIGNsZWFudXAyXSA9IGdldEVsZW1lbnRCb3VuZFV0aWxpdGllcyhlbCk7XG4gIG9uQXR0cmlidXRlUmVtb3ZlZChlbCwgZGlyZWN0aXZlMi5vcmlnaW5hbCwgY2xlYW51cDIpO1xuICBsZXQgZnVsbEhhbmRsZXIgPSAoKSA9PiB7XG4gICAgaWYgKGVsLl94X2lnbm9yZSB8fCBlbC5feF9pZ25vcmVTZWxmKVxuICAgICAgcmV0dXJuO1xuICAgIGhhbmRsZXI0LmlubGluZSAmJiBoYW5kbGVyNC5pbmxpbmUoZWwsIGRpcmVjdGl2ZTIsIHV0aWxpdGllcyk7XG4gICAgaGFuZGxlcjQgPSBoYW5kbGVyNC5iaW5kKGhhbmRsZXI0LCBlbCwgZGlyZWN0aXZlMiwgdXRpbGl0aWVzKTtcbiAgICBpc0RlZmVycmluZ0hhbmRsZXJzID8gZGlyZWN0aXZlSGFuZGxlclN0YWNrcy5nZXQoY3VycmVudEhhbmRsZXJTdGFja0tleSkucHVzaChoYW5kbGVyNCkgOiBoYW5kbGVyNCgpO1xuICB9O1xuICBmdWxsSGFuZGxlci5ydW5DbGVhbnVwcyA9IGNsZWFudXAyO1xuICByZXR1cm4gZnVsbEhhbmRsZXI7XG59XG52YXIgc3RhcnRpbmdXaXRoID0gKHN1YmplY3QsIHJlcGxhY2VtZW50KSA9PiAoeyBuYW1lLCB2YWx1ZSB9KSA9PiB7XG4gIGlmIChuYW1lLnN0YXJ0c1dpdGgoc3ViamVjdCkpXG4gICAgbmFtZSA9IG5hbWUucmVwbGFjZShzdWJqZWN0LCByZXBsYWNlbWVudCk7XG4gIHJldHVybiB7IG5hbWUsIHZhbHVlIH07XG59O1xudmFyIGludG8gPSAoaSkgPT4gaTtcbmZ1bmN0aW9uIHRvVHJhbnNmb3JtZWRBdHRyaWJ1dGVzKGNhbGxiYWNrID0gKCkgPT4ge1xufSkge1xuICByZXR1cm4gKHsgbmFtZSwgdmFsdWUgfSkgPT4ge1xuICAgIGxldCB7IG5hbWU6IG5ld05hbWUsIHZhbHVlOiBuZXdWYWx1ZSB9ID0gYXR0cmlidXRlVHJhbnNmb3JtZXJzLnJlZHVjZSgoY2FycnksIHRyYW5zZm9ybSkgPT4ge1xuICAgICAgcmV0dXJuIHRyYW5zZm9ybShjYXJyeSk7XG4gICAgfSwgeyBuYW1lLCB2YWx1ZSB9KTtcbiAgICBpZiAobmV3TmFtZSAhPT0gbmFtZSlcbiAgICAgIGNhbGxiYWNrKG5ld05hbWUsIG5hbWUpO1xuICAgIHJldHVybiB7IG5hbWU6IG5ld05hbWUsIHZhbHVlOiBuZXdWYWx1ZSB9O1xuICB9O1xufVxudmFyIGF0dHJpYnV0ZVRyYW5zZm9ybWVycyA9IFtdO1xuZnVuY3Rpb24gbWFwQXR0cmlidXRlcyhjYWxsYmFjaykge1xuICBhdHRyaWJ1dGVUcmFuc2Zvcm1lcnMucHVzaChjYWxsYmFjayk7XG59XG5mdW5jdGlvbiBvdXROb25BbHBpbmVBdHRyaWJ1dGVzKHsgbmFtZSB9KSB7XG4gIHJldHVybiBhbHBpbmVBdHRyaWJ1dGVSZWdleCgpLnRlc3QobmFtZSk7XG59XG52YXIgYWxwaW5lQXR0cmlidXRlUmVnZXggPSAoKSA9PiBuZXcgUmVnRXhwKGBeJHtwcmVmaXhBc1N0cmluZ30oW146Xi5dKylcXFxcYmApO1xuZnVuY3Rpb24gdG9QYXJzZWREaXJlY3RpdmVzKHRyYW5zZm9ybWVkQXR0cmlidXRlTWFwLCBvcmlnaW5hbEF0dHJpYnV0ZU92ZXJyaWRlKSB7XG4gIHJldHVybiAoeyBuYW1lLCB2YWx1ZSB9KSA9PiB7XG4gICAgbGV0IHR5cGVNYXRjaCA9IG5hbWUubWF0Y2goYWxwaW5lQXR0cmlidXRlUmVnZXgoKSk7XG4gICAgbGV0IHZhbHVlTWF0Y2ggPSBuYW1lLm1hdGNoKC86KFthLXpBLVowLTlcXC1fOl0rKS8pO1xuICAgIGxldCBtb2RpZmllcnMgPSBuYW1lLm1hdGNoKC9cXC5bXi5cXF1dKyg/PVteXFxdXSokKS9nKSB8fCBbXTtcbiAgICBsZXQgb3JpZ2luYWwgPSBvcmlnaW5hbEF0dHJpYnV0ZU92ZXJyaWRlIHx8IHRyYW5zZm9ybWVkQXR0cmlidXRlTWFwW25hbWVdIHx8IG5hbWU7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IHR5cGVNYXRjaCA/IHR5cGVNYXRjaFsxXSA6IG51bGwsXG4gICAgICB2YWx1ZTogdmFsdWVNYXRjaCA/IHZhbHVlTWF0Y2hbMV0gOiBudWxsLFxuICAgICAgbW9kaWZpZXJzOiBtb2RpZmllcnMubWFwKChpKSA9PiBpLnJlcGxhY2UoXCIuXCIsIFwiXCIpKSxcbiAgICAgIGV4cHJlc3Npb246IHZhbHVlLFxuICAgICAgb3JpZ2luYWxcbiAgICB9O1xuICB9O1xufVxudmFyIERFRkFVTFQgPSBcIkRFRkFVTFRcIjtcbnZhciBkaXJlY3RpdmVPcmRlciA9IFtcbiAgXCJpZ25vcmVcIixcbiAgXCJyZWZcIixcbiAgXCJkYXRhXCIsXG4gIFwiaWRcIixcbiAgXCJhbmNob3JcIixcbiAgXCJiaW5kXCIsXG4gIFwiaW5pdFwiLFxuICBcImZvclwiLFxuICBcIm1vZGVsXCIsXG4gIFwibW9kZWxhYmxlXCIsXG4gIFwidHJhbnNpdGlvblwiLFxuICBcInNob3dcIixcbiAgXCJpZlwiLFxuICBERUZBVUxULFxuICBcInRlbGVwb3J0XCJcbl07XG5mdW5jdGlvbiBieVByaW9yaXR5KGEsIGIpIHtcbiAgbGV0IHR5cGVBID0gZGlyZWN0aXZlT3JkZXIuaW5kZXhPZihhLnR5cGUpID09PSAtMSA/IERFRkFVTFQgOiBhLnR5cGU7XG4gIGxldCB0eXBlQiA9IGRpcmVjdGl2ZU9yZGVyLmluZGV4T2YoYi50eXBlKSA9PT0gLTEgPyBERUZBVUxUIDogYi50eXBlO1xuICByZXR1cm4gZGlyZWN0aXZlT3JkZXIuaW5kZXhPZih0eXBlQSkgLSBkaXJlY3RpdmVPcmRlci5pbmRleE9mKHR5cGVCKTtcbn1cblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL25leHRUaWNrLmpzXG52YXIgdGlja1N0YWNrID0gW107XG52YXIgaXNIb2xkaW5nID0gZmFsc2U7XG5mdW5jdGlvbiBuZXh0VGljayhjYWxsYmFjayA9ICgpID0+IHtcbn0pIHtcbiAgcXVldWVNaWNyb3Rhc2soKCkgPT4ge1xuICAgIGlzSG9sZGluZyB8fCBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHJlbGVhc2VOZXh0VGlja3MoKTtcbiAgICB9KTtcbiAgfSk7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzKSA9PiB7XG4gICAgdGlja1N0YWNrLnB1c2goKCkgPT4ge1xuICAgICAgY2FsbGJhY2soKTtcbiAgICAgIHJlcygpO1xuICAgIH0pO1xuICB9KTtcbn1cbmZ1bmN0aW9uIHJlbGVhc2VOZXh0VGlja3MoKSB7XG4gIGlzSG9sZGluZyA9IGZhbHNlO1xuICB3aGlsZSAodGlja1N0YWNrLmxlbmd0aClcbiAgICB0aWNrU3RhY2suc2hpZnQoKSgpO1xufVxuZnVuY3Rpb24gaG9sZE5leHRUaWNrcygpIHtcbiAgaXNIb2xkaW5nID0gdHJ1ZTtcbn1cblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL3V0aWxzL2NsYXNzZXMuanNcbmZ1bmN0aW9uIHNldENsYXNzZXMoZWwsIHZhbHVlKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgIHJldHVybiBzZXRDbGFzc2VzRnJvbVN0cmluZyhlbCwgdmFsdWUuam9pbihcIiBcIikpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJiB2YWx1ZSAhPT0gbnVsbCkge1xuICAgIHJldHVybiBzZXRDbGFzc2VzRnJvbU9iamVjdChlbCwgdmFsdWUpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIHNldENsYXNzZXMoZWwsIHZhbHVlKCkpO1xuICB9XG4gIHJldHVybiBzZXRDbGFzc2VzRnJvbVN0cmluZyhlbCwgdmFsdWUpO1xufVxuZnVuY3Rpb24gc2V0Q2xhc3Nlc0Zyb21TdHJpbmcoZWwsIGNsYXNzU3RyaW5nKSB7XG4gIGxldCBzcGxpdCA9IChjbGFzc1N0cmluZzIpID0+IGNsYXNzU3RyaW5nMi5zcGxpdChcIiBcIikuZmlsdGVyKEJvb2xlYW4pO1xuICBsZXQgbWlzc2luZ0NsYXNzZXMgPSAoY2xhc3NTdHJpbmcyKSA9PiBjbGFzc1N0cmluZzIuc3BsaXQoXCIgXCIpLmZpbHRlcigoaSkgPT4gIWVsLmNsYXNzTGlzdC5jb250YWlucyhpKSkuZmlsdGVyKEJvb2xlYW4pO1xuICBsZXQgYWRkQ2xhc3Nlc0FuZFJldHVyblVuZG8gPSAoY2xhc3NlcykgPT4ge1xuICAgIGVsLmNsYXNzTGlzdC5hZGQoLi4uY2xhc3Nlcyk7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoLi4uY2xhc3Nlcyk7XG4gICAgfTtcbiAgfTtcbiAgY2xhc3NTdHJpbmcgPSBjbGFzc1N0cmluZyA9PT0gdHJ1ZSA/IGNsYXNzU3RyaW5nID0gXCJcIiA6IGNsYXNzU3RyaW5nIHx8IFwiXCI7XG4gIHJldHVybiBhZGRDbGFzc2VzQW5kUmV0dXJuVW5kbyhtaXNzaW5nQ2xhc3NlcyhjbGFzc1N0cmluZykpO1xufVxuZnVuY3Rpb24gc2V0Q2xhc3Nlc0Zyb21PYmplY3QoZWwsIGNsYXNzT2JqZWN0KSB7XG4gIGxldCBzcGxpdCA9IChjbGFzc1N0cmluZykgPT4gY2xhc3NTdHJpbmcuc3BsaXQoXCIgXCIpLmZpbHRlcihCb29sZWFuKTtcbiAgbGV0IGZvckFkZCA9IE9iamVjdC5lbnRyaWVzKGNsYXNzT2JqZWN0KS5mbGF0TWFwKChbY2xhc3NTdHJpbmcsIGJvb2xdKSA9PiBib29sID8gc3BsaXQoY2xhc3NTdHJpbmcpIDogZmFsc2UpLmZpbHRlcihCb29sZWFuKTtcbiAgbGV0IGZvclJlbW92ZSA9IE9iamVjdC5lbnRyaWVzKGNsYXNzT2JqZWN0KS5mbGF0TWFwKChbY2xhc3NTdHJpbmcsIGJvb2xdKSA9PiAhYm9vbCA/IHNwbGl0KGNsYXNzU3RyaW5nKSA6IGZhbHNlKS5maWx0ZXIoQm9vbGVhbik7XG4gIGxldCBhZGRlZCA9IFtdO1xuICBsZXQgcmVtb3ZlZCA9IFtdO1xuICBmb3JSZW1vdmUuZm9yRWFjaCgoaSkgPT4ge1xuICAgIGlmIChlbC5jbGFzc0xpc3QuY29udGFpbnMoaSkpIHtcbiAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoaSk7XG4gICAgICByZW1vdmVkLnB1c2goaSk7XG4gICAgfVxuICB9KTtcbiAgZm9yQWRkLmZvckVhY2goKGkpID0+IHtcbiAgICBpZiAoIWVsLmNsYXNzTGlzdC5jb250YWlucyhpKSkge1xuICAgICAgZWwuY2xhc3NMaXN0LmFkZChpKTtcbiAgICAgIGFkZGVkLnB1c2goaSk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuICgpID0+IHtcbiAgICByZW1vdmVkLmZvckVhY2goKGkpID0+IGVsLmNsYXNzTGlzdC5hZGQoaSkpO1xuICAgIGFkZGVkLmZvckVhY2goKGkpID0+IGVsLmNsYXNzTGlzdC5yZW1vdmUoaSkpO1xuICB9O1xufVxuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvdXRpbHMvc3R5bGVzLmpzXG5mdW5jdGlvbiBzZXRTdHlsZXMoZWwsIHZhbHVlKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICByZXR1cm4gc2V0U3R5bGVzRnJvbU9iamVjdChlbCwgdmFsdWUpO1xuICB9XG4gIHJldHVybiBzZXRTdHlsZXNGcm9tU3RyaW5nKGVsLCB2YWx1ZSk7XG59XG5mdW5jdGlvbiBzZXRTdHlsZXNGcm9tT2JqZWN0KGVsLCB2YWx1ZSkge1xuICBsZXQgcHJldmlvdXNTdHlsZXMgPSB7fTtcbiAgT2JqZWN0LmVudHJpZXModmFsdWUpLmZvckVhY2goKFtrZXksIHZhbHVlMl0pID0+IHtcbiAgICBwcmV2aW91c1N0eWxlc1trZXldID0gZWwuc3R5bGVba2V5XTtcbiAgICBpZiAoIWtleS5zdGFydHNXaXRoKFwiLS1cIikpIHtcbiAgICAgIGtleSA9IGtlYmFiQ2FzZShrZXkpO1xuICAgIH1cbiAgICBlbC5zdHlsZS5zZXRQcm9wZXJ0eShrZXksIHZhbHVlMik7XG4gIH0pO1xuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBpZiAoZWwuc3R5bGUubGVuZ3RoID09PSAwKSB7XG4gICAgICBlbC5yZW1vdmVBdHRyaWJ1dGUoXCJzdHlsZVwiKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gKCkgPT4ge1xuICAgIHNldFN0eWxlcyhlbCwgcHJldmlvdXNTdHlsZXMpO1xuICB9O1xufVxuZnVuY3Rpb24gc2V0U3R5bGVzRnJvbVN0cmluZyhlbCwgdmFsdWUpIHtcbiAgbGV0IGNhY2hlID0gZWwuZ2V0QXR0cmlidXRlKFwic3R5bGVcIiwgdmFsdWUpO1xuICBlbC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCB2YWx1ZSk7XG4gIHJldHVybiAoKSA9PiB7XG4gICAgZWwuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgY2FjaGUgfHwgXCJcIik7XG4gIH07XG59XG5mdW5jdGlvbiBrZWJhYkNhc2Uoc3ViamVjdCkge1xuICByZXR1cm4gc3ViamVjdC5yZXBsYWNlKC8oW2Etel0pKFtBLVpdKS9nLCBcIiQxLSQyXCIpLnRvTG93ZXJDYXNlKCk7XG59XG5cbi8vIHBhY2thZ2VzL2FscGluZWpzL3NyYy91dGlscy9vbmNlLmpzXG5mdW5jdGlvbiBvbmNlKGNhbGxiYWNrLCBmYWxsYmFjayA9ICgpID0+IHtcbn0pIHtcbiAgbGV0IGNhbGxlZCA9IGZhbHNlO1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgaWYgKCFjYWxsZWQpIHtcbiAgICAgIGNhbGxlZCA9IHRydWU7XG4gICAgICBjYWxsYmFjay5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBmYWxsYmFjay5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfTtcbn1cblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL2RpcmVjdGl2ZXMveC10cmFuc2l0aW9uLmpzXG5kaXJlY3RpdmUoXCJ0cmFuc2l0aW9uXCIsIChlbCwgeyB2YWx1ZSwgbW9kaWZpZXJzLCBleHByZXNzaW9uIH0sIHsgZXZhbHVhdGU6IGV2YWx1YXRlMiB9KSA9PiB7XG4gIGlmICh0eXBlb2YgZXhwcmVzc2lvbiA9PT0gXCJmdW5jdGlvblwiKVxuICAgIGV4cHJlc3Npb24gPSBldmFsdWF0ZTIoZXhwcmVzc2lvbik7XG4gIGlmIChleHByZXNzaW9uID09PSBmYWxzZSlcbiAgICByZXR1cm47XG4gIGlmICghZXhwcmVzc2lvbiB8fCB0eXBlb2YgZXhwcmVzc2lvbiA9PT0gXCJib29sZWFuXCIpIHtcbiAgICByZWdpc3RlclRyYW5zaXRpb25zRnJvbUhlbHBlcihlbCwgbW9kaWZpZXJzLCB2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgcmVnaXN0ZXJUcmFuc2l0aW9uc0Zyb21DbGFzc1N0cmluZyhlbCwgZXhwcmVzc2lvbiwgdmFsdWUpO1xuICB9XG59KTtcbmZ1bmN0aW9uIHJlZ2lzdGVyVHJhbnNpdGlvbnNGcm9tQ2xhc3NTdHJpbmcoZWwsIGNsYXNzU3RyaW5nLCBzdGFnZSkge1xuICByZWdpc3RlclRyYW5zaXRpb25PYmplY3QoZWwsIHNldENsYXNzZXMsIFwiXCIpO1xuICBsZXQgZGlyZWN0aXZlU3RvcmFnZU1hcCA9IHtcbiAgICBcImVudGVyXCI6IChjbGFzc2VzKSA9PiB7XG4gICAgICBlbC5feF90cmFuc2l0aW9uLmVudGVyLmR1cmluZyA9IGNsYXNzZXM7XG4gICAgfSxcbiAgICBcImVudGVyLXN0YXJ0XCI6IChjbGFzc2VzKSA9PiB7XG4gICAgICBlbC5feF90cmFuc2l0aW9uLmVudGVyLnN0YXJ0ID0gY2xhc3NlcztcbiAgICB9LFxuICAgIFwiZW50ZXItZW5kXCI6IChjbGFzc2VzKSA9PiB7XG4gICAgICBlbC5feF90cmFuc2l0aW9uLmVudGVyLmVuZCA9IGNsYXNzZXM7XG4gICAgfSxcbiAgICBcImxlYXZlXCI6IChjbGFzc2VzKSA9PiB7XG4gICAgICBlbC5feF90cmFuc2l0aW9uLmxlYXZlLmR1cmluZyA9IGNsYXNzZXM7XG4gICAgfSxcbiAgICBcImxlYXZlLXN0YXJ0XCI6IChjbGFzc2VzKSA9PiB7XG4gICAgICBlbC5feF90cmFuc2l0aW9uLmxlYXZlLnN0YXJ0ID0gY2xhc3NlcztcbiAgICB9LFxuICAgIFwibGVhdmUtZW5kXCI6IChjbGFzc2VzKSA9PiB7XG4gICAgICBlbC5feF90cmFuc2l0aW9uLmxlYXZlLmVuZCA9IGNsYXNzZXM7XG4gICAgfVxuICB9O1xuICBkaXJlY3RpdmVTdG9yYWdlTWFwW3N0YWdlXShjbGFzc1N0cmluZyk7XG59XG5mdW5jdGlvbiByZWdpc3RlclRyYW5zaXRpb25zRnJvbUhlbHBlcihlbCwgbW9kaWZpZXJzLCBzdGFnZSkge1xuICByZWdpc3RlclRyYW5zaXRpb25PYmplY3QoZWwsIHNldFN0eWxlcyk7XG4gIGxldCBkb2VzbnRTcGVjaWZ5ID0gIW1vZGlmaWVycy5pbmNsdWRlcyhcImluXCIpICYmICFtb2RpZmllcnMuaW5jbHVkZXMoXCJvdXRcIikgJiYgIXN0YWdlO1xuICBsZXQgdHJhbnNpdGlvbmluZ0luID0gZG9lc250U3BlY2lmeSB8fCBtb2RpZmllcnMuaW5jbHVkZXMoXCJpblwiKSB8fCBbXCJlbnRlclwiXS5pbmNsdWRlcyhzdGFnZSk7XG4gIGxldCB0cmFuc2l0aW9uaW5nT3V0ID0gZG9lc250U3BlY2lmeSB8fCBtb2RpZmllcnMuaW5jbHVkZXMoXCJvdXRcIikgfHwgW1wibGVhdmVcIl0uaW5jbHVkZXMoc3RhZ2UpO1xuICBpZiAobW9kaWZpZXJzLmluY2x1ZGVzKFwiaW5cIikgJiYgIWRvZXNudFNwZWNpZnkpIHtcbiAgICBtb2RpZmllcnMgPSBtb2RpZmllcnMuZmlsdGVyKChpLCBpbmRleCkgPT4gaW5kZXggPCBtb2RpZmllcnMuaW5kZXhPZihcIm91dFwiKSk7XG4gIH1cbiAgaWYgKG1vZGlmaWVycy5pbmNsdWRlcyhcIm91dFwiKSAmJiAhZG9lc250U3BlY2lmeSkge1xuICAgIG1vZGlmaWVycyA9IG1vZGlmaWVycy5maWx0ZXIoKGksIGluZGV4KSA9PiBpbmRleCA+IG1vZGlmaWVycy5pbmRleE9mKFwib3V0XCIpKTtcbiAgfVxuICBsZXQgd2FudHNBbGwgPSAhbW9kaWZpZXJzLmluY2x1ZGVzKFwib3BhY2l0eVwiKSAmJiAhbW9kaWZpZXJzLmluY2x1ZGVzKFwic2NhbGVcIik7XG4gIGxldCB3YW50c09wYWNpdHkgPSB3YW50c0FsbCB8fCBtb2RpZmllcnMuaW5jbHVkZXMoXCJvcGFjaXR5XCIpO1xuICBsZXQgd2FudHNTY2FsZSA9IHdhbnRzQWxsIHx8IG1vZGlmaWVycy5pbmNsdWRlcyhcInNjYWxlXCIpO1xuICBsZXQgb3BhY2l0eVZhbHVlID0gd2FudHNPcGFjaXR5ID8gMCA6IDE7XG4gIGxldCBzY2FsZVZhbHVlID0gd2FudHNTY2FsZSA/IG1vZGlmaWVyVmFsdWUobW9kaWZpZXJzLCBcInNjYWxlXCIsIDk1KSAvIDEwMCA6IDE7XG4gIGxldCBkZWxheSA9IG1vZGlmaWVyVmFsdWUobW9kaWZpZXJzLCBcImRlbGF5XCIsIDApIC8gMWUzO1xuICBsZXQgb3JpZ2luID0gbW9kaWZpZXJWYWx1ZShtb2RpZmllcnMsIFwib3JpZ2luXCIsIFwiY2VudGVyXCIpO1xuICBsZXQgcHJvcGVydHkgPSBcIm9wYWNpdHksIHRyYW5zZm9ybVwiO1xuICBsZXQgZHVyYXRpb25JbiA9IG1vZGlmaWVyVmFsdWUobW9kaWZpZXJzLCBcImR1cmF0aW9uXCIsIDE1MCkgLyAxZTM7XG4gIGxldCBkdXJhdGlvbk91dCA9IG1vZGlmaWVyVmFsdWUobW9kaWZpZXJzLCBcImR1cmF0aW9uXCIsIDc1KSAvIDFlMztcbiAgbGV0IGVhc2luZyA9IGBjdWJpYy1iZXppZXIoMC40LCAwLjAsIDAuMiwgMSlgO1xuICBpZiAodHJhbnNpdGlvbmluZ0luKSB7XG4gICAgZWwuX3hfdHJhbnNpdGlvbi5lbnRlci5kdXJpbmcgPSB7XG4gICAgICB0cmFuc2Zvcm1PcmlnaW46IG9yaWdpbixcbiAgICAgIHRyYW5zaXRpb25EZWxheTogYCR7ZGVsYXl9c2AsXG4gICAgICB0cmFuc2l0aW9uUHJvcGVydHk6IHByb3BlcnR5LFxuICAgICAgdHJhbnNpdGlvbkR1cmF0aW9uOiBgJHtkdXJhdGlvbklufXNgLFxuICAgICAgdHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uOiBlYXNpbmdcbiAgICB9O1xuICAgIGVsLl94X3RyYW5zaXRpb24uZW50ZXIuc3RhcnQgPSB7XG4gICAgICBvcGFjaXR5OiBvcGFjaXR5VmFsdWUsXG4gICAgICB0cmFuc2Zvcm06IGBzY2FsZSgke3NjYWxlVmFsdWV9KWBcbiAgICB9O1xuICAgIGVsLl94X3RyYW5zaXRpb24uZW50ZXIuZW5kID0ge1xuICAgICAgb3BhY2l0eTogMSxcbiAgICAgIHRyYW5zZm9ybTogYHNjYWxlKDEpYFxuICAgIH07XG4gIH1cbiAgaWYgKHRyYW5zaXRpb25pbmdPdXQpIHtcbiAgICBlbC5feF90cmFuc2l0aW9uLmxlYXZlLmR1cmluZyA9IHtcbiAgICAgIHRyYW5zZm9ybU9yaWdpbjogb3JpZ2luLFxuICAgICAgdHJhbnNpdGlvbkRlbGF5OiBgJHtkZWxheX1zYCxcbiAgICAgIHRyYW5zaXRpb25Qcm9wZXJ0eTogcHJvcGVydHksXG4gICAgICB0cmFuc2l0aW9uRHVyYXRpb246IGAke2R1cmF0aW9uT3V0fXNgLFxuICAgICAgdHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uOiBlYXNpbmdcbiAgICB9O1xuICAgIGVsLl94X3RyYW5zaXRpb24ubGVhdmUuc3RhcnQgPSB7XG4gICAgICBvcGFjaXR5OiAxLFxuICAgICAgdHJhbnNmb3JtOiBgc2NhbGUoMSlgXG4gICAgfTtcbiAgICBlbC5feF90cmFuc2l0aW9uLmxlYXZlLmVuZCA9IHtcbiAgICAgIG9wYWNpdHk6IG9wYWNpdHlWYWx1ZSxcbiAgICAgIHRyYW5zZm9ybTogYHNjYWxlKCR7c2NhbGVWYWx1ZX0pYFxuICAgIH07XG4gIH1cbn1cbmZ1bmN0aW9uIHJlZ2lzdGVyVHJhbnNpdGlvbk9iamVjdChlbCwgc2V0RnVuY3Rpb24sIGRlZmF1bHRWYWx1ZSA9IHt9KSB7XG4gIGlmICghZWwuX3hfdHJhbnNpdGlvbilcbiAgICBlbC5feF90cmFuc2l0aW9uID0ge1xuICAgICAgZW50ZXI6IHsgZHVyaW5nOiBkZWZhdWx0VmFsdWUsIHN0YXJ0OiBkZWZhdWx0VmFsdWUsIGVuZDogZGVmYXVsdFZhbHVlIH0sXG4gICAgICBsZWF2ZTogeyBkdXJpbmc6IGRlZmF1bHRWYWx1ZSwgc3RhcnQ6IGRlZmF1bHRWYWx1ZSwgZW5kOiBkZWZhdWx0VmFsdWUgfSxcbiAgICAgIGluKGJlZm9yZSA9ICgpID0+IHtcbiAgICAgIH0sIGFmdGVyID0gKCkgPT4ge1xuICAgICAgfSkge1xuICAgICAgICB0cmFuc2l0aW9uKGVsLCBzZXRGdW5jdGlvbiwge1xuICAgICAgICAgIGR1cmluZzogdGhpcy5lbnRlci5kdXJpbmcsXG4gICAgICAgICAgc3RhcnQ6IHRoaXMuZW50ZXIuc3RhcnQsXG4gICAgICAgICAgZW5kOiB0aGlzLmVudGVyLmVuZFxuICAgICAgICB9LCBiZWZvcmUsIGFmdGVyKTtcbiAgICAgIH0sXG4gICAgICBvdXQoYmVmb3JlID0gKCkgPT4ge1xuICAgICAgfSwgYWZ0ZXIgPSAoKSA9PiB7XG4gICAgICB9KSB7XG4gICAgICAgIHRyYW5zaXRpb24oZWwsIHNldEZ1bmN0aW9uLCB7XG4gICAgICAgICAgZHVyaW5nOiB0aGlzLmxlYXZlLmR1cmluZyxcbiAgICAgICAgICBzdGFydDogdGhpcy5sZWF2ZS5zdGFydCxcbiAgICAgICAgICBlbmQ6IHRoaXMubGVhdmUuZW5kXG4gICAgICAgIH0sIGJlZm9yZSwgYWZ0ZXIpO1xuICAgICAgfVxuICAgIH07XG59XG53aW5kb3cuRWxlbWVudC5wcm90b3R5cGUuX3hfdG9nZ2xlQW5kQ2FzY2FkZVdpdGhUcmFuc2l0aW9ucyA9IGZ1bmN0aW9uKGVsLCB2YWx1ZSwgc2hvdywgaGlkZSkge1xuICBjb25zdCBuZXh0VGljazIgPSBkb2N1bWVudC52aXNpYmlsaXR5U3RhdGUgPT09IFwidmlzaWJsZVwiID8gcmVxdWVzdEFuaW1hdGlvbkZyYW1lIDogc2V0VGltZW91dDtcbiAgbGV0IGNsaWNrQXdheUNvbXBhdGlibGVTaG93ID0gKCkgPT4gbmV4dFRpY2syKHNob3cpO1xuICBpZiAodmFsdWUpIHtcbiAgICBpZiAoZWwuX3hfdHJhbnNpdGlvbiAmJiAoZWwuX3hfdHJhbnNpdGlvbi5lbnRlciB8fCBlbC5feF90cmFuc2l0aW9uLmxlYXZlKSkge1xuICAgICAgZWwuX3hfdHJhbnNpdGlvbi5lbnRlciAmJiAoT2JqZWN0LmVudHJpZXMoZWwuX3hfdHJhbnNpdGlvbi5lbnRlci5kdXJpbmcpLmxlbmd0aCB8fCBPYmplY3QuZW50cmllcyhlbC5feF90cmFuc2l0aW9uLmVudGVyLnN0YXJ0KS5sZW5ndGggfHwgT2JqZWN0LmVudHJpZXMoZWwuX3hfdHJhbnNpdGlvbi5lbnRlci5lbmQpLmxlbmd0aCkgPyBlbC5feF90cmFuc2l0aW9uLmluKHNob3cpIDogY2xpY2tBd2F5Q29tcGF0aWJsZVNob3coKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZWwuX3hfdHJhbnNpdGlvbiA/IGVsLl94X3RyYW5zaXRpb24uaW4oc2hvdykgOiBjbGlja0F3YXlDb21wYXRpYmxlU2hvdygpO1xuICAgIH1cbiAgICByZXR1cm47XG4gIH1cbiAgZWwuX3hfaGlkZVByb21pc2UgPSBlbC5feF90cmFuc2l0aW9uID8gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGVsLl94X3RyYW5zaXRpb24ub3V0KCgpID0+IHtcbiAgICB9LCAoKSA9PiByZXNvbHZlKGhpZGUpKTtcbiAgICBlbC5feF90cmFuc2l0aW9uaW5nICYmIGVsLl94X3RyYW5zaXRpb25pbmcuYmVmb3JlQ2FuY2VsKCgpID0+IHJlamVjdCh7IGlzRnJvbUNhbmNlbGxlZFRyYW5zaXRpb246IHRydWUgfSkpO1xuICB9KSA6IFByb21pc2UucmVzb2x2ZShoaWRlKTtcbiAgcXVldWVNaWNyb3Rhc2soKCkgPT4ge1xuICAgIGxldCBjbG9zZXN0ID0gY2xvc2VzdEhpZGUoZWwpO1xuICAgIGlmIChjbG9zZXN0KSB7XG4gICAgICBpZiAoIWNsb3Nlc3QuX3hfaGlkZUNoaWxkcmVuKVxuICAgICAgICBjbG9zZXN0Ll94X2hpZGVDaGlsZHJlbiA9IFtdO1xuICAgICAgY2xvc2VzdC5feF9oaWRlQ2hpbGRyZW4ucHVzaChlbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5leHRUaWNrMigoKSA9PiB7XG4gICAgICAgIGxldCBoaWRlQWZ0ZXJDaGlsZHJlbiA9IChlbDIpID0+IHtcbiAgICAgICAgICBsZXQgY2FycnkgPSBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICBlbDIuX3hfaGlkZVByb21pc2UsXG4gICAgICAgICAgICAuLi4oZWwyLl94X2hpZGVDaGlsZHJlbiB8fCBbXSkubWFwKGhpZGVBZnRlckNoaWxkcmVuKVxuICAgICAgICAgIF0pLnRoZW4oKFtpXSkgPT4gaSgpKTtcbiAgICAgICAgICBkZWxldGUgZWwyLl94X2hpZGVQcm9taXNlO1xuICAgICAgICAgIGRlbGV0ZSBlbDIuX3hfaGlkZUNoaWxkcmVuO1xuICAgICAgICAgIHJldHVybiBjYXJyeTtcbiAgICAgICAgfTtcbiAgICAgICAgaGlkZUFmdGVyQ2hpbGRyZW4oZWwpLmNhdGNoKChlKSA9PiB7XG4gICAgICAgICAgaWYgKCFlLmlzRnJvbUNhbmNlbGxlZFRyYW5zaXRpb24pXG4gICAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG59O1xuZnVuY3Rpb24gY2xvc2VzdEhpZGUoZWwpIHtcbiAgbGV0IHBhcmVudCA9IGVsLnBhcmVudE5vZGU7XG4gIGlmICghcGFyZW50KVxuICAgIHJldHVybjtcbiAgcmV0dXJuIHBhcmVudC5feF9oaWRlUHJvbWlzZSA/IHBhcmVudCA6IGNsb3Nlc3RIaWRlKHBhcmVudCk7XG59XG5mdW5jdGlvbiB0cmFuc2l0aW9uKGVsLCBzZXRGdW5jdGlvbiwgeyBkdXJpbmcsIHN0YXJ0OiBzdGFydDIsIGVuZCB9ID0ge30sIGJlZm9yZSA9ICgpID0+IHtcbn0sIGFmdGVyID0gKCkgPT4ge1xufSkge1xuICBpZiAoZWwuX3hfdHJhbnNpdGlvbmluZylcbiAgICBlbC5feF90cmFuc2l0aW9uaW5nLmNhbmNlbCgpO1xuICBpZiAoT2JqZWN0LmtleXMoZHVyaW5nKS5sZW5ndGggPT09IDAgJiYgT2JqZWN0LmtleXMoc3RhcnQyKS5sZW5ndGggPT09IDAgJiYgT2JqZWN0LmtleXMoZW5kKS5sZW5ndGggPT09IDApIHtcbiAgICBiZWZvcmUoKTtcbiAgICBhZnRlcigpO1xuICAgIHJldHVybjtcbiAgfVxuICBsZXQgdW5kb1N0YXJ0LCB1bmRvRHVyaW5nLCB1bmRvRW5kO1xuICBwZXJmb3JtVHJhbnNpdGlvbihlbCwge1xuICAgIHN0YXJ0KCkge1xuICAgICAgdW5kb1N0YXJ0ID0gc2V0RnVuY3Rpb24oZWwsIHN0YXJ0Mik7XG4gICAgfSxcbiAgICBkdXJpbmcoKSB7XG4gICAgICB1bmRvRHVyaW5nID0gc2V0RnVuY3Rpb24oZWwsIGR1cmluZyk7XG4gICAgfSxcbiAgICBiZWZvcmUsXG4gICAgZW5kKCkge1xuICAgICAgdW5kb1N0YXJ0KCk7XG4gICAgICB1bmRvRW5kID0gc2V0RnVuY3Rpb24oZWwsIGVuZCk7XG4gICAgfSxcbiAgICBhZnRlcixcbiAgICBjbGVhbnVwKCkge1xuICAgICAgdW5kb0R1cmluZygpO1xuICAgICAgdW5kb0VuZCgpO1xuICAgIH1cbiAgfSk7XG59XG5mdW5jdGlvbiBwZXJmb3JtVHJhbnNpdGlvbihlbCwgc3RhZ2VzKSB7XG4gIGxldCBpbnRlcnJ1cHRlZCwgcmVhY2hlZEJlZm9yZSwgcmVhY2hlZEVuZDtcbiAgbGV0IGZpbmlzaCA9IG9uY2UoKCkgPT4ge1xuICAgIG11dGF0ZURvbSgoKSA9PiB7XG4gICAgICBpbnRlcnJ1cHRlZCA9IHRydWU7XG4gICAgICBpZiAoIXJlYWNoZWRCZWZvcmUpXG4gICAgICAgIHN0YWdlcy5iZWZvcmUoKTtcbiAgICAgIGlmICghcmVhY2hlZEVuZCkge1xuICAgICAgICBzdGFnZXMuZW5kKCk7XG4gICAgICAgIHJlbGVhc2VOZXh0VGlja3MoKTtcbiAgICAgIH1cbiAgICAgIHN0YWdlcy5hZnRlcigpO1xuICAgICAgaWYgKGVsLmlzQ29ubmVjdGVkKVxuICAgICAgICBzdGFnZXMuY2xlYW51cCgpO1xuICAgICAgZGVsZXRlIGVsLl94X3RyYW5zaXRpb25pbmc7XG4gICAgfSk7XG4gIH0pO1xuICBlbC5feF90cmFuc2l0aW9uaW5nID0ge1xuICAgIGJlZm9yZUNhbmNlbHM6IFtdLFxuICAgIGJlZm9yZUNhbmNlbChjYWxsYmFjaykge1xuICAgICAgdGhpcy5iZWZvcmVDYW5jZWxzLnB1c2goY2FsbGJhY2spO1xuICAgIH0sXG4gICAgY2FuY2VsOiBvbmNlKGZ1bmN0aW9uKCkge1xuICAgICAgd2hpbGUgKHRoaXMuYmVmb3JlQ2FuY2Vscy5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5iZWZvcmVDYW5jZWxzLnNoaWZ0KCkoKTtcbiAgICAgIH1cbiAgICAgIDtcbiAgICAgIGZpbmlzaCgpO1xuICAgIH0pLFxuICAgIGZpbmlzaFxuICB9O1xuICBtdXRhdGVEb20oKCkgPT4ge1xuICAgIHN0YWdlcy5zdGFydCgpO1xuICAgIHN0YWdlcy5kdXJpbmcoKTtcbiAgfSk7XG4gIGhvbGROZXh0VGlja3MoKTtcbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICBpZiAoaW50ZXJydXB0ZWQpXG4gICAgICByZXR1cm47XG4gICAgbGV0IGR1cmF0aW9uID0gTnVtYmVyKGdldENvbXB1dGVkU3R5bGUoZWwpLnRyYW5zaXRpb25EdXJhdGlvbi5yZXBsYWNlKC8sLiovLCBcIlwiKS5yZXBsYWNlKFwic1wiLCBcIlwiKSkgKiAxZTM7XG4gICAgbGV0IGRlbGF5ID0gTnVtYmVyKGdldENvbXB1dGVkU3R5bGUoZWwpLnRyYW5zaXRpb25EZWxheS5yZXBsYWNlKC8sLiovLCBcIlwiKS5yZXBsYWNlKFwic1wiLCBcIlwiKSkgKiAxZTM7XG4gICAgaWYgKGR1cmF0aW9uID09PSAwKVxuICAgICAgZHVyYXRpb24gPSBOdW1iZXIoZ2V0Q29tcHV0ZWRTdHlsZShlbCkuYW5pbWF0aW9uRHVyYXRpb24ucmVwbGFjZShcInNcIiwgXCJcIikpICogMWUzO1xuICAgIG11dGF0ZURvbSgoKSA9PiB7XG4gICAgICBzdGFnZXMuYmVmb3JlKCk7XG4gICAgfSk7XG4gICAgcmVhY2hlZEJlZm9yZSA9IHRydWU7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgIGlmIChpbnRlcnJ1cHRlZClcbiAgICAgICAgcmV0dXJuO1xuICAgICAgbXV0YXRlRG9tKCgpID0+IHtcbiAgICAgICAgc3RhZ2VzLmVuZCgpO1xuICAgICAgfSk7XG4gICAgICByZWxlYXNlTmV4dFRpY2tzKCk7XG4gICAgICBzZXRUaW1lb3V0KGVsLl94X3RyYW5zaXRpb25pbmcuZmluaXNoLCBkdXJhdGlvbiArIGRlbGF5KTtcbiAgICAgIHJlYWNoZWRFbmQgPSB0cnVlO1xuICAgIH0pO1xuICB9KTtcbn1cbmZ1bmN0aW9uIG1vZGlmaWVyVmFsdWUobW9kaWZpZXJzLCBrZXksIGZhbGxiYWNrKSB7XG4gIGlmIChtb2RpZmllcnMuaW5kZXhPZihrZXkpID09PSAtMSlcbiAgICByZXR1cm4gZmFsbGJhY2s7XG4gIGNvbnN0IHJhd1ZhbHVlID0gbW9kaWZpZXJzW21vZGlmaWVycy5pbmRleE9mKGtleSkgKyAxXTtcbiAgaWYgKCFyYXdWYWx1ZSlcbiAgICByZXR1cm4gZmFsbGJhY2s7XG4gIGlmIChrZXkgPT09IFwic2NhbGVcIikge1xuICAgIGlmIChpc05hTihyYXdWYWx1ZSkpXG4gICAgICByZXR1cm4gZmFsbGJhY2s7XG4gIH1cbiAgaWYgKGtleSA9PT0gXCJkdXJhdGlvblwiIHx8IGtleSA9PT0gXCJkZWxheVwiKSB7XG4gICAgbGV0IG1hdGNoID0gcmF3VmFsdWUubWF0Y2goLyhbMC05XSspbXMvKTtcbiAgICBpZiAobWF0Y2gpXG4gICAgICByZXR1cm4gbWF0Y2hbMV07XG4gIH1cbiAgaWYgKGtleSA9PT0gXCJvcmlnaW5cIikge1xuICAgIGlmIChbXCJ0b3BcIiwgXCJyaWdodFwiLCBcImxlZnRcIiwgXCJjZW50ZXJcIiwgXCJib3R0b21cIl0uaW5jbHVkZXMobW9kaWZpZXJzW21vZGlmaWVycy5pbmRleE9mKGtleSkgKyAyXSkpIHtcbiAgICAgIHJldHVybiBbcmF3VmFsdWUsIG1vZGlmaWVyc1ttb2RpZmllcnMuaW5kZXhPZihrZXkpICsgMl1dLmpvaW4oXCIgXCIpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmF3VmFsdWU7XG59XG5cbi8vIHBhY2thZ2VzL2FscGluZWpzL3NyYy9jbG9uZS5qc1xudmFyIGlzQ2xvbmluZyA9IGZhbHNlO1xuZnVuY3Rpb24gc2tpcER1cmluZ0Nsb25lKGNhbGxiYWNrLCBmYWxsYmFjayA9ICgpID0+IHtcbn0pIHtcbiAgcmV0dXJuICguLi5hcmdzKSA9PiBpc0Nsb25pbmcgPyBmYWxsYmFjayguLi5hcmdzKSA6IGNhbGxiYWNrKC4uLmFyZ3MpO1xufVxuZnVuY3Rpb24gb25seUR1cmluZ0Nsb25lKGNhbGxiYWNrKSB7XG4gIHJldHVybiAoLi4uYXJncykgPT4gaXNDbG9uaW5nICYmIGNhbGxiYWNrKC4uLmFyZ3MpO1xufVxudmFyIGludGVyY2VwdG9ycyA9IFtdO1xuZnVuY3Rpb24gaW50ZXJjZXB0Q2xvbmUoY2FsbGJhY2spIHtcbiAgaW50ZXJjZXB0b3JzLnB1c2goY2FsbGJhY2spO1xufVxuZnVuY3Rpb24gY2xvbmVOb2RlKGZyb20sIHRvKSB7XG4gIGludGVyY2VwdG9ycy5mb3JFYWNoKChpKSA9PiBpKGZyb20sIHRvKSk7XG4gIGlzQ2xvbmluZyA9IHRydWU7XG4gIGRvbnRSZWdpc3RlclJlYWN0aXZlU2lkZUVmZmVjdHMoKCkgPT4ge1xuICAgIGluaXRUcmVlKHRvLCAoZWwsIGNhbGxiYWNrKSA9PiB7XG4gICAgICBjYWxsYmFjayhlbCwgKCkgPT4ge1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xuICBpc0Nsb25pbmcgPSBmYWxzZTtcbn1cbnZhciBpc0Nsb25pbmdMZWdhY3kgPSBmYWxzZTtcbmZ1bmN0aW9uIGNsb25lKG9sZEVsLCBuZXdFbCkge1xuICBpZiAoIW5ld0VsLl94X2RhdGFTdGFjaylcbiAgICBuZXdFbC5feF9kYXRhU3RhY2sgPSBvbGRFbC5feF9kYXRhU3RhY2s7XG4gIGlzQ2xvbmluZyA9IHRydWU7XG4gIGlzQ2xvbmluZ0xlZ2FjeSA9IHRydWU7XG4gIGRvbnRSZWdpc3RlclJlYWN0aXZlU2lkZUVmZmVjdHMoKCkgPT4ge1xuICAgIGNsb25lVHJlZShuZXdFbCk7XG4gIH0pO1xuICBpc0Nsb25pbmcgPSBmYWxzZTtcbiAgaXNDbG9uaW5nTGVnYWN5ID0gZmFsc2U7XG59XG5mdW5jdGlvbiBjbG9uZVRyZWUoZWwpIHtcbiAgbGV0IGhhc1J1blRocm91Z2hGaXJzdEVsID0gZmFsc2U7XG4gIGxldCBzaGFsbG93V2Fsa2VyID0gKGVsMiwgY2FsbGJhY2spID0+IHtcbiAgICB3YWxrKGVsMiwgKGVsMywgc2tpcCkgPT4ge1xuICAgICAgaWYgKGhhc1J1blRocm91Z2hGaXJzdEVsICYmIGlzUm9vdChlbDMpKVxuICAgICAgICByZXR1cm4gc2tpcCgpO1xuICAgICAgaGFzUnVuVGhyb3VnaEZpcnN0RWwgPSB0cnVlO1xuICAgICAgY2FsbGJhY2soZWwzLCBza2lwKTtcbiAgICB9KTtcbiAgfTtcbiAgaW5pdFRyZWUoZWwsIHNoYWxsb3dXYWxrZXIpO1xufVxuZnVuY3Rpb24gZG9udFJlZ2lzdGVyUmVhY3RpdmVTaWRlRWZmZWN0cyhjYWxsYmFjaykge1xuICBsZXQgY2FjaGUgPSBlZmZlY3Q7XG4gIG92ZXJyaWRlRWZmZWN0KChjYWxsYmFjazIsIGVsKSA9PiB7XG4gICAgbGV0IHN0b3JlZEVmZmVjdCA9IGNhY2hlKGNhbGxiYWNrMik7XG4gICAgcmVsZWFzZShzdG9yZWRFZmZlY3QpO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgfTtcbiAgfSk7XG4gIGNhbGxiYWNrKCk7XG4gIG92ZXJyaWRlRWZmZWN0KGNhY2hlKTtcbn1cblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL3V0aWxzL2JpbmQuanNcbmZ1bmN0aW9uIGJpbmQoZWwsIG5hbWUsIHZhbHVlLCBtb2RpZmllcnMgPSBbXSkge1xuICBpZiAoIWVsLl94X2JpbmRpbmdzKVxuICAgIGVsLl94X2JpbmRpbmdzID0gcmVhY3RpdmUoe30pO1xuICBlbC5feF9iaW5kaW5nc1tuYW1lXSA9IHZhbHVlO1xuICBuYW1lID0gbW9kaWZpZXJzLmluY2x1ZGVzKFwiY2FtZWxcIikgPyBjYW1lbENhc2UobmFtZSkgOiBuYW1lO1xuICBzd2l0Y2ggKG5hbWUpIHtcbiAgICBjYXNlIFwidmFsdWVcIjpcbiAgICAgIGJpbmRJbnB1dFZhbHVlKGVsLCB2YWx1ZSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwic3R5bGVcIjpcbiAgICAgIGJpbmRTdHlsZXMoZWwsIHZhbHVlKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJjbGFzc1wiOlxuICAgICAgYmluZENsYXNzZXMoZWwsIHZhbHVlKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJzZWxlY3RlZFwiOlxuICAgIGNhc2UgXCJjaGVja2VkXCI6XG4gICAgICBiaW5kQXR0cmlidXRlQW5kUHJvcGVydHkoZWwsIG5hbWUsIHZhbHVlKTtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICBiaW5kQXR0cmlidXRlKGVsLCBuYW1lLCB2YWx1ZSk7XG4gICAgICBicmVhaztcbiAgfVxufVxuZnVuY3Rpb24gYmluZElucHV0VmFsdWUoZWwsIHZhbHVlKSB7XG4gIGlmIChlbC50eXBlID09PSBcInJhZGlvXCIpIHtcbiAgICBpZiAoZWwuYXR0cmlidXRlcy52YWx1ZSA9PT0gdm9pZCAwKSB7XG4gICAgICBlbC52YWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgICBpZiAod2luZG93LmZyb21Nb2RlbCkge1xuICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJib29sZWFuXCIpIHtcbiAgICAgICAgZWwuY2hlY2tlZCA9IHNhZmVQYXJzZUJvb2xlYW4oZWwudmFsdWUpID09PSB2YWx1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVsLmNoZWNrZWQgPSBjaGVja2VkQXR0ckxvb3NlQ29tcGFyZShlbC52YWx1ZSwgdmFsdWUpO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIGlmIChlbC50eXBlID09PSBcImNoZWNrYm94XCIpIHtcbiAgICBpZiAoTnVtYmVyLmlzSW50ZWdlcih2YWx1ZSkpIHtcbiAgICAgIGVsLnZhbHVlID0gdmFsdWU7XG4gICAgfSBlbHNlIGlmICghQXJyYXkuaXNBcnJheSh2YWx1ZSkgJiYgdHlwZW9mIHZhbHVlICE9PSBcImJvb2xlYW5cIiAmJiAhW251bGwsIHZvaWQgMF0uaW5jbHVkZXModmFsdWUpKSB7XG4gICAgICBlbC52YWx1ZSA9IFN0cmluZyh2YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICBlbC5jaGVja2VkID0gdmFsdWUuc29tZSgodmFsKSA9PiBjaGVja2VkQXR0ckxvb3NlQ29tcGFyZSh2YWwsIGVsLnZhbHVlKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbC5jaGVja2VkID0gISF2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSBpZiAoZWwudGFnTmFtZSA9PT0gXCJTRUxFQ1RcIikge1xuICAgIHVwZGF0ZVNlbGVjdChlbCwgdmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIGlmIChlbC52YWx1ZSA9PT0gdmFsdWUpXG4gICAgICByZXR1cm47XG4gICAgZWwudmFsdWUgPSB2YWx1ZSA9PT0gdm9pZCAwID8gXCJcIiA6IHZhbHVlO1xuICB9XG59XG5mdW5jdGlvbiBiaW5kQ2xhc3NlcyhlbCwgdmFsdWUpIHtcbiAgaWYgKGVsLl94X3VuZG9BZGRlZENsYXNzZXMpXG4gICAgZWwuX3hfdW5kb0FkZGVkQ2xhc3NlcygpO1xuICBlbC5feF91bmRvQWRkZWRDbGFzc2VzID0gc2V0Q2xhc3NlcyhlbCwgdmFsdWUpO1xufVxuZnVuY3Rpb24gYmluZFN0eWxlcyhlbCwgdmFsdWUpIHtcbiAgaWYgKGVsLl94X3VuZG9BZGRlZFN0eWxlcylcbiAgICBlbC5feF91bmRvQWRkZWRTdHlsZXMoKTtcbiAgZWwuX3hfdW5kb0FkZGVkU3R5bGVzID0gc2V0U3R5bGVzKGVsLCB2YWx1ZSk7XG59XG5mdW5jdGlvbiBiaW5kQXR0cmlidXRlQW5kUHJvcGVydHkoZWwsIG5hbWUsIHZhbHVlKSB7XG4gIGJpbmRBdHRyaWJ1dGUoZWwsIG5hbWUsIHZhbHVlKTtcbiAgc2V0UHJvcGVydHlJZkNoYW5nZWQoZWwsIG5hbWUsIHZhbHVlKTtcbn1cbmZ1bmN0aW9uIGJpbmRBdHRyaWJ1dGUoZWwsIG5hbWUsIHZhbHVlKSB7XG4gIGlmIChbbnVsbCwgdm9pZCAwLCBmYWxzZV0uaW5jbHVkZXModmFsdWUpICYmIGF0dHJpYnV0ZVNob3VsZG50QmVQcmVzZXJ2ZWRJZkZhbHN5KG5hbWUpKSB7XG4gICAgZWwucmVtb3ZlQXR0cmlidXRlKG5hbWUpO1xuICB9IGVsc2Uge1xuICAgIGlmIChpc0Jvb2xlYW5BdHRyKG5hbWUpKVxuICAgICAgdmFsdWUgPSBuYW1lO1xuICAgIHNldElmQ2hhbmdlZChlbCwgbmFtZSwgdmFsdWUpO1xuICB9XG59XG5mdW5jdGlvbiBzZXRJZkNoYW5nZWQoZWwsIGF0dHJOYW1lLCB2YWx1ZSkge1xuICBpZiAoZWwuZ2V0QXR0cmlidXRlKGF0dHJOYW1lKSAhPSB2YWx1ZSkge1xuICAgIGVsLnNldEF0dHJpYnV0ZShhdHRyTmFtZSwgdmFsdWUpO1xuICB9XG59XG5mdW5jdGlvbiBzZXRQcm9wZXJ0eUlmQ2hhbmdlZChlbCwgcHJvcE5hbWUsIHZhbHVlKSB7XG4gIGlmIChlbFtwcm9wTmFtZV0gIT09IHZhbHVlKSB7XG4gICAgZWxbcHJvcE5hbWVdID0gdmFsdWU7XG4gIH1cbn1cbmZ1bmN0aW9uIHVwZGF0ZVNlbGVjdChlbCwgdmFsdWUpIHtcbiAgY29uc3QgYXJyYXlXcmFwcGVkVmFsdWUgPSBbXS5jb25jYXQodmFsdWUpLm1hcCgodmFsdWUyKSA9PiB7XG4gICAgcmV0dXJuIHZhbHVlMiArIFwiXCI7XG4gIH0pO1xuICBBcnJheS5mcm9tKGVsLm9wdGlvbnMpLmZvckVhY2goKG9wdGlvbikgPT4ge1xuICAgIG9wdGlvbi5zZWxlY3RlZCA9IGFycmF5V3JhcHBlZFZhbHVlLmluY2x1ZGVzKG9wdGlvbi52YWx1ZSk7XG4gIH0pO1xufVxuZnVuY3Rpb24gY2FtZWxDYXNlKHN1YmplY3QpIHtcbiAgcmV0dXJuIHN1YmplY3QudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC8tKFxcdykvZywgKG1hdGNoLCBjaGFyKSA9PiBjaGFyLnRvVXBwZXJDYXNlKCkpO1xufVxuZnVuY3Rpb24gY2hlY2tlZEF0dHJMb29zZUNvbXBhcmUodmFsdWVBLCB2YWx1ZUIpIHtcbiAgcmV0dXJuIHZhbHVlQSA9PSB2YWx1ZUI7XG59XG5mdW5jdGlvbiBzYWZlUGFyc2VCb29sZWFuKHJhd1ZhbHVlKSB7XG4gIGlmIChbMSwgXCIxXCIsIFwidHJ1ZVwiLCBcIm9uXCIsIFwieWVzXCIsIHRydWVdLmluY2x1ZGVzKHJhd1ZhbHVlKSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGlmIChbMCwgXCIwXCIsIFwiZmFsc2VcIiwgXCJvZmZcIiwgXCJub1wiLCBmYWxzZV0uaW5jbHVkZXMocmF3VmFsdWUpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiByYXdWYWx1ZSA/IEJvb2xlYW4ocmF3VmFsdWUpIDogbnVsbDtcbn1cbmZ1bmN0aW9uIGlzQm9vbGVhbkF0dHIoYXR0ck5hbWUpIHtcbiAgY29uc3QgYm9vbGVhbkF0dHJpYnV0ZXMgPSBbXG4gICAgXCJkaXNhYmxlZFwiLFxuICAgIFwiY2hlY2tlZFwiLFxuICAgIFwicmVxdWlyZWRcIixcbiAgICBcInJlYWRvbmx5XCIsXG4gICAgXCJoaWRkZW5cIixcbiAgICBcIm9wZW5cIixcbiAgICBcInNlbGVjdGVkXCIsXG4gICAgXCJhdXRvZm9jdXNcIixcbiAgICBcIml0ZW1zY29wZVwiLFxuICAgIFwibXVsdGlwbGVcIixcbiAgICBcIm5vdmFsaWRhdGVcIixcbiAgICBcImFsbG93ZnVsbHNjcmVlblwiLFxuICAgIFwiYWxsb3dwYXltZW50cmVxdWVzdFwiLFxuICAgIFwiZm9ybW5vdmFsaWRhdGVcIixcbiAgICBcImF1dG9wbGF5XCIsXG4gICAgXCJjb250cm9sc1wiLFxuICAgIFwibG9vcFwiLFxuICAgIFwibXV0ZWRcIixcbiAgICBcInBsYXlzaW5saW5lXCIsXG4gICAgXCJkZWZhdWx0XCIsXG4gICAgXCJpc21hcFwiLFxuICAgIFwicmV2ZXJzZWRcIixcbiAgICBcImFzeW5jXCIsXG4gICAgXCJkZWZlclwiLFxuICAgIFwibm9tb2R1bGVcIlxuICBdO1xuICByZXR1cm4gYm9vbGVhbkF0dHJpYnV0ZXMuaW5jbHVkZXMoYXR0ck5hbWUpO1xufVxuZnVuY3Rpb24gYXR0cmlidXRlU2hvdWxkbnRCZVByZXNlcnZlZElmRmFsc3kobmFtZSkge1xuICByZXR1cm4gIVtcImFyaWEtcHJlc3NlZFwiLCBcImFyaWEtY2hlY2tlZFwiLCBcImFyaWEtZXhwYW5kZWRcIiwgXCJhcmlhLXNlbGVjdGVkXCJdLmluY2x1ZGVzKG5hbWUpO1xufVxuZnVuY3Rpb24gZ2V0QmluZGluZyhlbCwgbmFtZSwgZmFsbGJhY2spIHtcbiAgaWYgKGVsLl94X2JpbmRpbmdzICYmIGVsLl94X2JpbmRpbmdzW25hbWVdICE9PSB2b2lkIDApXG4gICAgcmV0dXJuIGVsLl94X2JpbmRpbmdzW25hbWVdO1xuICByZXR1cm4gZ2V0QXR0cmlidXRlQmluZGluZyhlbCwgbmFtZSwgZmFsbGJhY2spO1xufVxuZnVuY3Rpb24gZXh0cmFjdFByb3AoZWwsIG5hbWUsIGZhbGxiYWNrLCBleHRyYWN0ID0gdHJ1ZSkge1xuICBpZiAoZWwuX3hfYmluZGluZ3MgJiYgZWwuX3hfYmluZGluZ3NbbmFtZV0gIT09IHZvaWQgMClcbiAgICByZXR1cm4gZWwuX3hfYmluZGluZ3NbbmFtZV07XG4gIGlmIChlbC5feF9pbmxpbmVCaW5kaW5ncyAmJiBlbC5feF9pbmxpbmVCaW5kaW5nc1tuYW1lXSAhPT0gdm9pZCAwKSB7XG4gICAgbGV0IGJpbmRpbmcgPSBlbC5feF9pbmxpbmVCaW5kaW5nc1tuYW1lXTtcbiAgICBiaW5kaW5nLmV4dHJhY3QgPSBleHRyYWN0O1xuICAgIHJldHVybiBkb250QXV0b0V2YWx1YXRlRnVuY3Rpb25zKCgpID0+IHtcbiAgICAgIHJldHVybiBldmFsdWF0ZShlbCwgYmluZGluZy5leHByZXNzaW9uKTtcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gZ2V0QXR0cmlidXRlQmluZGluZyhlbCwgbmFtZSwgZmFsbGJhY2spO1xufVxuZnVuY3Rpb24gZ2V0QXR0cmlidXRlQmluZGluZyhlbCwgbmFtZSwgZmFsbGJhY2spIHtcbiAgbGV0IGF0dHIgPSBlbC5nZXRBdHRyaWJ1dGUobmFtZSk7XG4gIGlmIChhdHRyID09PSBudWxsKVxuICAgIHJldHVybiB0eXBlb2YgZmFsbGJhY2sgPT09IFwiZnVuY3Rpb25cIiA/IGZhbGxiYWNrKCkgOiBmYWxsYmFjaztcbiAgaWYgKGF0dHIgPT09IFwiXCIpXG4gICAgcmV0dXJuIHRydWU7XG4gIGlmIChpc0Jvb2xlYW5BdHRyKG5hbWUpKSB7XG4gICAgcmV0dXJuICEhW25hbWUsIFwidHJ1ZVwiXS5pbmNsdWRlcyhhdHRyKTtcbiAgfVxuICByZXR1cm4gYXR0cjtcbn1cblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL3V0aWxzL2RlYm91bmNlLmpzXG5mdW5jdGlvbiBkZWJvdW5jZShmdW5jLCB3YWl0KSB7XG4gIHZhciB0aW1lb3V0O1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGNvbnRleHQgPSB0aGlzLCBhcmdzID0gYXJndW1lbnRzO1xuICAgIHZhciBsYXRlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgdGltZW91dCA9IG51bGw7XG4gICAgICBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgIH07XG4gICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGxhdGVyLCB3YWl0KTtcbiAgfTtcbn1cblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL3V0aWxzL3Rocm90dGxlLmpzXG5mdW5jdGlvbiB0aHJvdHRsZShmdW5jLCBsaW1pdCkge1xuICBsZXQgaW5UaHJvdHRsZTtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIGxldCBjb250ZXh0ID0gdGhpcywgYXJncyA9IGFyZ3VtZW50cztcbiAgICBpZiAoIWluVGhyb3R0bGUpIHtcbiAgICAgIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgICBpblRocm90dGxlID0gdHJ1ZTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gaW5UaHJvdHRsZSA9IGZhbHNlLCBsaW1pdCk7XG4gICAgfVxuICB9O1xufVxuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvZW50YW5nbGUuanNcbmZ1bmN0aW9uIGVudGFuZ2xlKHsgZ2V0OiBvdXRlckdldCwgc2V0OiBvdXRlclNldCB9LCB7IGdldDogaW5uZXJHZXQsIHNldDogaW5uZXJTZXQgfSkge1xuICBsZXQgZmlyc3RSdW4gPSB0cnVlO1xuICBsZXQgb3V0ZXJIYXNoO1xuICBsZXQgcmVmZXJlbmNlID0gZWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBvdXRlciA9IG91dGVyR2V0KCk7XG4gICAgY29uc3QgaW5uZXIgPSBpbm5lckdldCgpO1xuICAgIGlmIChmaXJzdFJ1bikge1xuICAgICAgaW5uZXJTZXQoY2xvbmVJZk9iamVjdChvdXRlcikpO1xuICAgICAgZmlyc3RSdW4gPSBmYWxzZTtcbiAgICAgIG91dGVySGFzaCA9IEpTT04uc3RyaW5naWZ5KG91dGVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgb3V0ZXJIYXNoTGF0ZXN0ID0gSlNPTi5zdHJpbmdpZnkob3V0ZXIpO1xuICAgICAgaWYgKG91dGVySGFzaExhdGVzdCAhPT0gb3V0ZXJIYXNoKSB7XG4gICAgICAgIGlubmVyU2V0KGNsb25lSWZPYmplY3Qob3V0ZXIpKTtcbiAgICAgICAgb3V0ZXJIYXNoID0gb3V0ZXJIYXNoTGF0ZXN0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb3V0ZXJTZXQoY2xvbmVJZk9iamVjdChpbm5lcikpO1xuICAgICAgICBvdXRlckhhc2ggPSBKU09OLnN0cmluZ2lmeShpbm5lcik7XG4gICAgICB9XG4gICAgfVxuICAgIEpTT04uc3RyaW5naWZ5KGlubmVyR2V0KCkpO1xuICAgIEpTT04uc3RyaW5naWZ5KG91dGVyR2V0KCkpO1xuICB9KTtcbiAgcmV0dXJuICgpID0+IHtcbiAgICByZWxlYXNlKHJlZmVyZW5jZSk7XG4gIH07XG59XG5mdW5jdGlvbiBjbG9uZUlmT2JqZWN0KHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgPyBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHZhbHVlKSkgOiB2YWx1ZTtcbn1cblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL3BsdWdpbi5qc1xuZnVuY3Rpb24gcGx1Z2luKGNhbGxiYWNrKSB7XG4gIGxldCBjYWxsYmFja3MgPSBBcnJheS5pc0FycmF5KGNhbGxiYWNrKSA/IGNhbGxiYWNrIDogW2NhbGxiYWNrXTtcbiAgY2FsbGJhY2tzLmZvckVhY2goKGkpID0+IGkoYWxwaW5lX2RlZmF1bHQpKTtcbn1cblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL3N0b3JlLmpzXG52YXIgc3RvcmVzID0ge307XG52YXIgaXNSZWFjdGl2ZSA9IGZhbHNlO1xuZnVuY3Rpb24gc3RvcmUobmFtZSwgdmFsdWUpIHtcbiAgaWYgKCFpc1JlYWN0aXZlKSB7XG4gICAgc3RvcmVzID0gcmVhY3RpdmUoc3RvcmVzKTtcbiAgICBpc1JlYWN0aXZlID0gdHJ1ZTtcbiAgfVxuICBpZiAodmFsdWUgPT09IHZvaWQgMCkge1xuICAgIHJldHVybiBzdG9yZXNbbmFtZV07XG4gIH1cbiAgc3RvcmVzW25hbWVdID0gdmFsdWU7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiYgdmFsdWUgIT09IG51bGwgJiYgdmFsdWUuaGFzT3duUHJvcGVydHkoXCJpbml0XCIpICYmIHR5cGVvZiB2YWx1ZS5pbml0ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICBzdG9yZXNbbmFtZV0uaW5pdCgpO1xuICB9XG4gIGluaXRJbnRlcmNlcHRvcnMyKHN0b3Jlc1tuYW1lXSk7XG59XG5mdW5jdGlvbiBnZXRTdG9yZXMoKSB7XG4gIHJldHVybiBzdG9yZXM7XG59XG5cbi8vIHBhY2thZ2VzL2FscGluZWpzL3NyYy9iaW5kcy5qc1xudmFyIGJpbmRzID0ge307XG5mdW5jdGlvbiBiaW5kMihuYW1lLCBiaW5kaW5ncykge1xuICBsZXQgZ2V0QmluZGluZ3MgPSB0eXBlb2YgYmluZGluZ3MgIT09IFwiZnVuY3Rpb25cIiA/ICgpID0+IGJpbmRpbmdzIDogYmluZGluZ3M7XG4gIGlmIChuYW1lIGluc3RhbmNlb2YgRWxlbWVudCkge1xuICAgIHJldHVybiBhcHBseUJpbmRpbmdzT2JqZWN0KG5hbWUsIGdldEJpbmRpbmdzKCkpO1xuICB9IGVsc2Uge1xuICAgIGJpbmRzW25hbWVdID0gZ2V0QmluZGluZ3M7XG4gIH1cbiAgcmV0dXJuICgpID0+IHtcbiAgfTtcbn1cbmZ1bmN0aW9uIGluamVjdEJpbmRpbmdQcm92aWRlcnMob2JqKSB7XG4gIE9iamVjdC5lbnRyaWVzKGJpbmRzKS5mb3JFYWNoKChbbmFtZSwgY2FsbGJhY2tdKSA9PiB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwgbmFtZSwge1xuICAgICAgZ2V0KCkge1xuICAgICAgICByZXR1cm4gKC4uLmFyZ3MpID0+IHtcbiAgICAgICAgICByZXR1cm4gY2FsbGJhY2soLi4uYXJncyk7XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xuICByZXR1cm4gb2JqO1xufVxuZnVuY3Rpb24gYXBwbHlCaW5kaW5nc09iamVjdChlbCwgb2JqLCBvcmlnaW5hbCkge1xuICBsZXQgY2xlYW51cFJ1bm5lcnMgPSBbXTtcbiAgd2hpbGUgKGNsZWFudXBSdW5uZXJzLmxlbmd0aClcbiAgICBjbGVhbnVwUnVubmVycy5wb3AoKSgpO1xuICBsZXQgYXR0cmlidXRlcyA9IE9iamVjdC5lbnRyaWVzKG9iaikubWFwKChbbmFtZSwgdmFsdWVdKSA9PiAoeyBuYW1lLCB2YWx1ZSB9KSk7XG4gIGxldCBzdGF0aWNBdHRyaWJ1dGVzID0gYXR0cmlidXRlc09ubHkoYXR0cmlidXRlcyk7XG4gIGF0dHJpYnV0ZXMgPSBhdHRyaWJ1dGVzLm1hcCgoYXR0cmlidXRlKSA9PiB7XG4gICAgaWYgKHN0YXRpY0F0dHJpYnV0ZXMuZmluZCgoYXR0cikgPT4gYXR0ci5uYW1lID09PSBhdHRyaWJ1dGUubmFtZSkpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG5hbWU6IGB4LWJpbmQ6JHthdHRyaWJ1dGUubmFtZX1gLFxuICAgICAgICB2YWx1ZTogYFwiJHthdHRyaWJ1dGUudmFsdWV9XCJgXG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gYXR0cmlidXRlO1xuICB9KTtcbiAgZGlyZWN0aXZlcyhlbCwgYXR0cmlidXRlcywgb3JpZ2luYWwpLm1hcCgoaGFuZGxlKSA9PiB7XG4gICAgY2xlYW51cFJ1bm5lcnMucHVzaChoYW5kbGUucnVuQ2xlYW51cHMpO1xuICAgIGhhbmRsZSgpO1xuICB9KTtcbiAgcmV0dXJuICgpID0+IHtcbiAgICB3aGlsZSAoY2xlYW51cFJ1bm5lcnMubGVuZ3RoKVxuICAgICAgY2xlYW51cFJ1bm5lcnMucG9wKCkoKTtcbiAgfTtcbn1cblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL2RhdGFzLmpzXG52YXIgZGF0YXMgPSB7fTtcbmZ1bmN0aW9uIGRhdGEobmFtZSwgY2FsbGJhY2spIHtcbiAgZGF0YXNbbmFtZV0gPSBjYWxsYmFjaztcbn1cbmZ1bmN0aW9uIGluamVjdERhdGFQcm92aWRlcnMob2JqLCBjb250ZXh0KSB7XG4gIE9iamVjdC5lbnRyaWVzKGRhdGFzKS5mb3JFYWNoKChbbmFtZSwgY2FsbGJhY2tdKSA9PiB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwgbmFtZSwge1xuICAgICAgZ2V0KCkge1xuICAgICAgICByZXR1cm4gKC4uLmFyZ3MpID0+IHtcbiAgICAgICAgICByZXR1cm4gY2FsbGJhY2suYmluZChjb250ZXh0KSguLi5hcmdzKTtcbiAgICAgICAgfTtcbiAgICAgIH0sXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZVxuICAgIH0pO1xuICB9KTtcbiAgcmV0dXJuIG9iajtcbn1cblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL2FscGluZS5qc1xudmFyIEFscGluZSA9IHtcbiAgZ2V0IHJlYWN0aXZlKCkge1xuICAgIHJldHVybiByZWFjdGl2ZTtcbiAgfSxcbiAgZ2V0IHJlbGVhc2UoKSB7XG4gICAgcmV0dXJuIHJlbGVhc2U7XG4gIH0sXG4gIGdldCBlZmZlY3QoKSB7XG4gICAgcmV0dXJuIGVmZmVjdDtcbiAgfSxcbiAgZ2V0IHJhdygpIHtcbiAgICByZXR1cm4gcmF3O1xuICB9LFxuICB2ZXJzaW9uOiBcIjMuMTMuM1wiLFxuICBmbHVzaEFuZFN0b3BEZWZlcnJpbmdNdXRhdGlvbnMsXG4gIGRvbnRBdXRvRXZhbHVhdGVGdW5jdGlvbnMsXG4gIGRpc2FibGVFZmZlY3RTY2hlZHVsaW5nLFxuICBzdGFydE9ic2VydmluZ011dGF0aW9ucyxcbiAgc3RvcE9ic2VydmluZ011dGF0aW9ucyxcbiAgc2V0UmVhY3Rpdml0eUVuZ2luZSxcbiAgb25BdHRyaWJ1dGVSZW1vdmVkLFxuICBvbkF0dHJpYnV0ZXNBZGRlZCxcbiAgY2xvc2VzdERhdGFTdGFjayxcbiAgc2tpcER1cmluZ0Nsb25lLFxuICBvbmx5RHVyaW5nQ2xvbmUsXG4gIGFkZFJvb3RTZWxlY3RvcixcbiAgYWRkSW5pdFNlbGVjdG9yLFxuICBpbnRlcmNlcHRDbG9uZSxcbiAgYWRkU2NvcGVUb05vZGUsXG4gIGRlZmVyTXV0YXRpb25zLFxuICBtYXBBdHRyaWJ1dGVzLFxuICBldmFsdWF0ZUxhdGVyLFxuICBpbnRlcmNlcHRJbml0LFxuICBzZXRFdmFsdWF0b3IsXG4gIG1lcmdlUHJveGllcyxcbiAgZXh0cmFjdFByb3AsXG4gIGZpbmRDbG9zZXN0LFxuICBvbkVsUmVtb3ZlZCxcbiAgY2xvc2VzdFJvb3QsXG4gIGRlc3Ryb3lUcmVlLFxuICBpbnRlcmNlcHRvcixcbiAgLy8gSU5URVJOQUw6IG5vdCBwdWJsaWMgQVBJIGFuZCBpcyBzdWJqZWN0IHRvIGNoYW5nZSB3aXRob3V0IG1ham9yIHJlbGVhc2UuXG4gIHRyYW5zaXRpb24sXG4gIC8vIElOVEVSTkFMXG4gIHNldFN0eWxlcyxcbiAgLy8gSU5URVJOQUxcbiAgbXV0YXRlRG9tLFxuICBkaXJlY3RpdmUsXG4gIGVudGFuZ2xlLFxuICB0aHJvdHRsZSxcbiAgZGVib3VuY2UsXG4gIGV2YWx1YXRlLFxuICBpbml0VHJlZSxcbiAgbmV4dFRpY2ssXG4gIHByZWZpeGVkOiBwcmVmaXgsXG4gIHByZWZpeDogc2V0UHJlZml4LFxuICBwbHVnaW4sXG4gIG1hZ2ljLFxuICBzdG9yZSxcbiAgc3RhcnQsXG4gIGNsb25lLFxuICAvLyBJTlRFUk5BTFxuICBjbG9uZU5vZGUsXG4gIC8vIElOVEVSTkFMXG4gIGJvdW5kOiBnZXRCaW5kaW5nLFxuICAkZGF0YTogc2NvcGUsXG4gIHdhbGssXG4gIGRhdGEsXG4gIGJpbmQ6IGJpbmQyXG59O1xudmFyIGFscGluZV9kZWZhdWx0ID0gQWxwaW5lO1xuXG4vLyBub2RlX21vZHVsZXMvQHZ1ZS9zaGFyZWQvZGlzdC9zaGFyZWQuZXNtLWJ1bmRsZXIuanNcbmZ1bmN0aW9uIG1ha2VNYXAoc3RyLCBleHBlY3RzTG93ZXJDYXNlKSB7XG4gIGNvbnN0IG1hcCA9IC8qIEBfX1BVUkVfXyAqLyBPYmplY3QuY3JlYXRlKG51bGwpO1xuICBjb25zdCBsaXN0ID0gc3RyLnNwbGl0KFwiLFwiKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgbWFwW2xpc3RbaV1dID0gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZXhwZWN0c0xvd2VyQ2FzZSA/ICh2YWwpID0+ICEhbWFwW3ZhbC50b0xvd2VyQ2FzZSgpXSA6ICh2YWwpID0+ICEhbWFwW3ZhbF07XG59XG52YXIgc3BlY2lhbEJvb2xlYW5BdHRycyA9IGBpdGVtc2NvcGUsYWxsb3dmdWxsc2NyZWVuLGZvcm1ub3ZhbGlkYXRlLGlzbWFwLG5vbW9kdWxlLG5vdmFsaWRhdGUscmVhZG9ubHlgO1xudmFyIGlzQm9vbGVhbkF0dHIyID0gLyogQF9fUFVSRV9fICovIG1ha2VNYXAoc3BlY2lhbEJvb2xlYW5BdHRycyArIGAsYXN5bmMsYXV0b2ZvY3VzLGF1dG9wbGF5LGNvbnRyb2xzLGRlZmF1bHQsZGVmZXIsZGlzYWJsZWQsaGlkZGVuLGxvb3Asb3BlbixyZXF1aXJlZCxyZXZlcnNlZCxzY29wZWQsc2VhbWxlc3MsY2hlY2tlZCxtdXRlZCxtdWx0aXBsZSxzZWxlY3RlZGApO1xudmFyIEVNUFRZX09CSiA9IHRydWUgPyBPYmplY3QuZnJlZXplKHt9KSA6IHt9O1xudmFyIEVNUFRZX0FSUiA9IHRydWUgPyBPYmplY3QuZnJlZXplKFtdKSA6IFtdO1xudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciBoYXNPd24gPSAodmFsLCBrZXkpID0+IGhhc093blByb3BlcnR5LmNhbGwodmFsLCBrZXkpO1xudmFyIGlzQXJyYXkgPSBBcnJheS5pc0FycmF5O1xudmFyIGlzTWFwID0gKHZhbCkgPT4gdG9UeXBlU3RyaW5nKHZhbCkgPT09IFwiW29iamVjdCBNYXBdXCI7XG52YXIgaXNTdHJpbmcgPSAodmFsKSA9PiB0eXBlb2YgdmFsID09PSBcInN0cmluZ1wiO1xudmFyIGlzU3ltYm9sID0gKHZhbCkgPT4gdHlwZW9mIHZhbCA9PT0gXCJzeW1ib2xcIjtcbnZhciBpc09iamVjdCA9ICh2YWwpID0+IHZhbCAhPT0gbnVsbCAmJiB0eXBlb2YgdmFsID09PSBcIm9iamVjdFwiO1xudmFyIG9iamVjdFRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcbnZhciB0b1R5cGVTdHJpbmcgPSAodmFsdWUpID0+IG9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpO1xudmFyIHRvUmF3VHlwZSA9ICh2YWx1ZSkgPT4ge1xuICByZXR1cm4gdG9UeXBlU3RyaW5nKHZhbHVlKS5zbGljZSg4LCAtMSk7XG59O1xudmFyIGlzSW50ZWdlcktleSA9IChrZXkpID0+IGlzU3RyaW5nKGtleSkgJiYga2V5ICE9PSBcIk5hTlwiICYmIGtleVswXSAhPT0gXCItXCIgJiYgXCJcIiArIHBhcnNlSW50KGtleSwgMTApID09PSBrZXk7XG52YXIgY2FjaGVTdHJpbmdGdW5jdGlvbiA9IChmbikgPT4ge1xuICBjb25zdCBjYWNoZSA9IC8qIEBfX1BVUkVfXyAqLyBPYmplY3QuY3JlYXRlKG51bGwpO1xuICByZXR1cm4gKHN0cikgPT4ge1xuICAgIGNvbnN0IGhpdCA9IGNhY2hlW3N0cl07XG4gICAgcmV0dXJuIGhpdCB8fCAoY2FjaGVbc3RyXSA9IGZuKHN0cikpO1xuICB9O1xufTtcbnZhciBjYW1lbGl6ZVJFID0gLy0oXFx3KS9nO1xudmFyIGNhbWVsaXplID0gY2FjaGVTdHJpbmdGdW5jdGlvbigoc3RyKSA9PiB7XG4gIHJldHVybiBzdHIucmVwbGFjZShjYW1lbGl6ZVJFLCAoXywgYykgPT4gYyA/IGMudG9VcHBlckNhc2UoKSA6IFwiXCIpO1xufSk7XG52YXIgaHlwaGVuYXRlUkUgPSAvXFxCKFtBLVpdKS9nO1xudmFyIGh5cGhlbmF0ZSA9IGNhY2hlU3RyaW5nRnVuY3Rpb24oKHN0cikgPT4gc3RyLnJlcGxhY2UoaHlwaGVuYXRlUkUsIFwiLSQxXCIpLnRvTG93ZXJDYXNlKCkpO1xudmFyIGNhcGl0YWxpemUgPSBjYWNoZVN0cmluZ0Z1bmN0aW9uKChzdHIpID0+IHN0ci5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0ci5zbGljZSgxKSk7XG52YXIgdG9IYW5kbGVyS2V5ID0gY2FjaGVTdHJpbmdGdW5jdGlvbigoc3RyKSA9PiBzdHIgPyBgb24ke2NhcGl0YWxpemUoc3RyKX1gIDogYGApO1xudmFyIGhhc0NoYW5nZWQgPSAodmFsdWUsIG9sZFZhbHVlKSA9PiB2YWx1ZSAhPT0gb2xkVmFsdWUgJiYgKHZhbHVlID09PSB2YWx1ZSB8fCBvbGRWYWx1ZSA9PT0gb2xkVmFsdWUpO1xuXG4vLyBub2RlX21vZHVsZXMvQHZ1ZS9yZWFjdGl2aXR5L2Rpc3QvcmVhY3Rpdml0eS5lc20tYnVuZGxlci5qc1xudmFyIHRhcmdldE1hcCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xudmFyIGVmZmVjdFN0YWNrID0gW107XG52YXIgYWN0aXZlRWZmZWN0O1xudmFyIElURVJBVEVfS0VZID0gU3ltYm9sKHRydWUgPyBcIml0ZXJhdGVcIiA6IFwiXCIpO1xudmFyIE1BUF9LRVlfSVRFUkFURV9LRVkgPSBTeW1ib2wodHJ1ZSA/IFwiTWFwIGtleSBpdGVyYXRlXCIgOiBcIlwiKTtcbmZ1bmN0aW9uIGlzRWZmZWN0KGZuKSB7XG4gIHJldHVybiBmbiAmJiBmbi5faXNFZmZlY3QgPT09IHRydWU7XG59XG5mdW5jdGlvbiBlZmZlY3QyKGZuLCBvcHRpb25zID0gRU1QVFlfT0JKKSB7XG4gIGlmIChpc0VmZmVjdChmbikpIHtcbiAgICBmbiA9IGZuLnJhdztcbiAgfVxuICBjb25zdCBlZmZlY3QzID0gY3JlYXRlUmVhY3RpdmVFZmZlY3QoZm4sIG9wdGlvbnMpO1xuICBpZiAoIW9wdGlvbnMubGF6eSkge1xuICAgIGVmZmVjdDMoKTtcbiAgfVxuICByZXR1cm4gZWZmZWN0Mztcbn1cbmZ1bmN0aW9uIHN0b3AoZWZmZWN0Mykge1xuICBpZiAoZWZmZWN0My5hY3RpdmUpIHtcbiAgICBjbGVhbnVwKGVmZmVjdDMpO1xuICAgIGlmIChlZmZlY3QzLm9wdGlvbnMub25TdG9wKSB7XG4gICAgICBlZmZlY3QzLm9wdGlvbnMub25TdG9wKCk7XG4gICAgfVxuICAgIGVmZmVjdDMuYWN0aXZlID0gZmFsc2U7XG4gIH1cbn1cbnZhciB1aWQgPSAwO1xuZnVuY3Rpb24gY3JlYXRlUmVhY3RpdmVFZmZlY3QoZm4sIG9wdGlvbnMpIHtcbiAgY29uc3QgZWZmZWN0MyA9IGZ1bmN0aW9uIHJlYWN0aXZlRWZmZWN0KCkge1xuICAgIGlmICghZWZmZWN0My5hY3RpdmUpIHtcbiAgICAgIHJldHVybiBmbigpO1xuICAgIH1cbiAgICBpZiAoIWVmZmVjdFN0YWNrLmluY2x1ZGVzKGVmZmVjdDMpKSB7XG4gICAgICBjbGVhbnVwKGVmZmVjdDMpO1xuICAgICAgdHJ5IHtcbiAgICAgICAgZW5hYmxlVHJhY2tpbmcoKTtcbiAgICAgICAgZWZmZWN0U3RhY2sucHVzaChlZmZlY3QzKTtcbiAgICAgICAgYWN0aXZlRWZmZWN0ID0gZWZmZWN0MztcbiAgICAgICAgcmV0dXJuIGZuKCk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBlZmZlY3RTdGFjay5wb3AoKTtcbiAgICAgICAgcmVzZXRUcmFja2luZygpO1xuICAgICAgICBhY3RpdmVFZmZlY3QgPSBlZmZlY3RTdGFja1tlZmZlY3RTdGFjay5sZW5ndGggLSAxXTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIGVmZmVjdDMuaWQgPSB1aWQrKztcbiAgZWZmZWN0My5hbGxvd1JlY3Vyc2UgPSAhIW9wdGlvbnMuYWxsb3dSZWN1cnNlO1xuICBlZmZlY3QzLl9pc0VmZmVjdCA9IHRydWU7XG4gIGVmZmVjdDMuYWN0aXZlID0gdHJ1ZTtcbiAgZWZmZWN0My5yYXcgPSBmbjtcbiAgZWZmZWN0My5kZXBzID0gW107XG4gIGVmZmVjdDMub3B0aW9ucyA9IG9wdGlvbnM7XG4gIHJldHVybiBlZmZlY3QzO1xufVxuZnVuY3Rpb24gY2xlYW51cChlZmZlY3QzKSB7XG4gIGNvbnN0IHsgZGVwcyB9ID0gZWZmZWN0MztcbiAgaWYgKGRlcHMubGVuZ3RoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkZXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBkZXBzW2ldLmRlbGV0ZShlZmZlY3QzKTtcbiAgICB9XG4gICAgZGVwcy5sZW5ndGggPSAwO1xuICB9XG59XG52YXIgc2hvdWxkVHJhY2sgPSB0cnVlO1xudmFyIHRyYWNrU3RhY2sgPSBbXTtcbmZ1bmN0aW9uIHBhdXNlVHJhY2tpbmcoKSB7XG4gIHRyYWNrU3RhY2sucHVzaChzaG91bGRUcmFjayk7XG4gIHNob3VsZFRyYWNrID0gZmFsc2U7XG59XG5mdW5jdGlvbiBlbmFibGVUcmFja2luZygpIHtcbiAgdHJhY2tTdGFjay5wdXNoKHNob3VsZFRyYWNrKTtcbiAgc2hvdWxkVHJhY2sgPSB0cnVlO1xufVxuZnVuY3Rpb24gcmVzZXRUcmFja2luZygpIHtcbiAgY29uc3QgbGFzdCA9IHRyYWNrU3RhY2sucG9wKCk7XG4gIHNob3VsZFRyYWNrID0gbGFzdCA9PT0gdm9pZCAwID8gdHJ1ZSA6IGxhc3Q7XG59XG5mdW5jdGlvbiB0cmFjayh0YXJnZXQsIHR5cGUsIGtleSkge1xuICBpZiAoIXNob3VsZFRyYWNrIHx8IGFjdGl2ZUVmZmVjdCA9PT0gdm9pZCAwKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGxldCBkZXBzTWFwID0gdGFyZ2V0TWFwLmdldCh0YXJnZXQpO1xuICBpZiAoIWRlcHNNYXApIHtcbiAgICB0YXJnZXRNYXAuc2V0KHRhcmdldCwgZGVwc01hcCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCkpO1xuICB9XG4gIGxldCBkZXAgPSBkZXBzTWFwLmdldChrZXkpO1xuICBpZiAoIWRlcCkge1xuICAgIGRlcHNNYXAuc2V0KGtleSwgZGVwID0gLyogQF9fUFVSRV9fICovIG5ldyBTZXQoKSk7XG4gIH1cbiAgaWYgKCFkZXAuaGFzKGFjdGl2ZUVmZmVjdCkpIHtcbiAgICBkZXAuYWRkKGFjdGl2ZUVmZmVjdCk7XG4gICAgYWN0aXZlRWZmZWN0LmRlcHMucHVzaChkZXApO1xuICAgIGlmIChhY3RpdmVFZmZlY3Qub3B0aW9ucy5vblRyYWNrKSB7XG4gICAgICBhY3RpdmVFZmZlY3Qub3B0aW9ucy5vblRyYWNrKHtcbiAgICAgICAgZWZmZWN0OiBhY3RpdmVFZmZlY3QsXG4gICAgICAgIHRhcmdldCxcbiAgICAgICAgdHlwZSxcbiAgICAgICAga2V5XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cbmZ1bmN0aW9uIHRyaWdnZXIodGFyZ2V0LCB0eXBlLCBrZXksIG5ld1ZhbHVlLCBvbGRWYWx1ZSwgb2xkVGFyZ2V0KSB7XG4gIGNvbnN0IGRlcHNNYXAgPSB0YXJnZXRNYXAuZ2V0KHRhcmdldCk7XG4gIGlmICghZGVwc01hcCkge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBlZmZlY3RzID0gLyogQF9fUFVSRV9fICovIG5ldyBTZXQoKTtcbiAgY29uc3QgYWRkMiA9IChlZmZlY3RzVG9BZGQpID0+IHtcbiAgICBpZiAoZWZmZWN0c1RvQWRkKSB7XG4gICAgICBlZmZlY3RzVG9BZGQuZm9yRWFjaCgoZWZmZWN0MykgPT4ge1xuICAgICAgICBpZiAoZWZmZWN0MyAhPT0gYWN0aXZlRWZmZWN0IHx8IGVmZmVjdDMuYWxsb3dSZWN1cnNlKSB7XG4gICAgICAgICAgZWZmZWN0cy5hZGQoZWZmZWN0Myk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcbiAgaWYgKHR5cGUgPT09IFwiY2xlYXJcIikge1xuICAgIGRlcHNNYXAuZm9yRWFjaChhZGQyKTtcbiAgfSBlbHNlIGlmIChrZXkgPT09IFwibGVuZ3RoXCIgJiYgaXNBcnJheSh0YXJnZXQpKSB7XG4gICAgZGVwc01hcC5mb3JFYWNoKChkZXAsIGtleTIpID0+IHtcbiAgICAgIGlmIChrZXkyID09PSBcImxlbmd0aFwiIHx8IGtleTIgPj0gbmV3VmFsdWUpIHtcbiAgICAgICAgYWRkMihkZXApO1xuICAgICAgfVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIGlmIChrZXkgIT09IHZvaWQgMCkge1xuICAgICAgYWRkMihkZXBzTWFwLmdldChrZXkpKTtcbiAgICB9XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlIFwiYWRkXCI6XG4gICAgICAgIGlmICghaXNBcnJheSh0YXJnZXQpKSB7XG4gICAgICAgICAgYWRkMihkZXBzTWFwLmdldChJVEVSQVRFX0tFWSkpO1xuICAgICAgICAgIGlmIChpc01hcCh0YXJnZXQpKSB7XG4gICAgICAgICAgICBhZGQyKGRlcHNNYXAuZ2V0KE1BUF9LRVlfSVRFUkFURV9LRVkpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoaXNJbnRlZ2VyS2V5KGtleSkpIHtcbiAgICAgICAgICBhZGQyKGRlcHNNYXAuZ2V0KFwibGVuZ3RoXCIpKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJkZWxldGVcIjpcbiAgICAgICAgaWYgKCFpc0FycmF5KHRhcmdldCkpIHtcbiAgICAgICAgICBhZGQyKGRlcHNNYXAuZ2V0KElURVJBVEVfS0VZKSk7XG4gICAgICAgICAgaWYgKGlzTWFwKHRhcmdldCkpIHtcbiAgICAgICAgICAgIGFkZDIoZGVwc01hcC5nZXQoTUFQX0tFWV9JVEVSQVRFX0tFWSkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJzZXRcIjpcbiAgICAgICAgaWYgKGlzTWFwKHRhcmdldCkpIHtcbiAgICAgICAgICBhZGQyKGRlcHNNYXAuZ2V0KElURVJBVEVfS0VZKSk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIGNvbnN0IHJ1biA9IChlZmZlY3QzKSA9PiB7XG4gICAgaWYgKGVmZmVjdDMub3B0aW9ucy5vblRyaWdnZXIpIHtcbiAgICAgIGVmZmVjdDMub3B0aW9ucy5vblRyaWdnZXIoe1xuICAgICAgICBlZmZlY3Q6IGVmZmVjdDMsXG4gICAgICAgIHRhcmdldCxcbiAgICAgICAga2V5LFxuICAgICAgICB0eXBlLFxuICAgICAgICBuZXdWYWx1ZSxcbiAgICAgICAgb2xkVmFsdWUsXG4gICAgICAgIG9sZFRhcmdldFxuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChlZmZlY3QzLm9wdGlvbnMuc2NoZWR1bGVyKSB7XG4gICAgICBlZmZlY3QzLm9wdGlvbnMuc2NoZWR1bGVyKGVmZmVjdDMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBlZmZlY3QzKCk7XG4gICAgfVxuICB9O1xuICBlZmZlY3RzLmZvckVhY2gocnVuKTtcbn1cbnZhciBpc05vblRyYWNrYWJsZUtleXMgPSAvKiBAX19QVVJFX18gKi8gbWFrZU1hcChgX19wcm90b19fLF9fdl9pc1JlZixfX2lzVnVlYCk7XG52YXIgYnVpbHRJblN5bWJvbHMgPSBuZXcgU2V0KE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKFN5bWJvbCkubWFwKChrZXkpID0+IFN5bWJvbFtrZXldKS5maWx0ZXIoaXNTeW1ib2wpKTtcbnZhciBnZXQyID0gLyogQF9fUFVSRV9fICovIGNyZWF0ZUdldHRlcigpO1xudmFyIHJlYWRvbmx5R2V0ID0gLyogQF9fUFVSRV9fICovIGNyZWF0ZUdldHRlcih0cnVlKTtcbnZhciBhcnJheUluc3RydW1lbnRhdGlvbnMgPSAvKiBAX19QVVJFX18gKi8gY3JlYXRlQXJyYXlJbnN0cnVtZW50YXRpb25zKCk7XG5mdW5jdGlvbiBjcmVhdGVBcnJheUluc3RydW1lbnRhdGlvbnMoKSB7XG4gIGNvbnN0IGluc3RydW1lbnRhdGlvbnMgPSB7fTtcbiAgW1wiaW5jbHVkZXNcIiwgXCJpbmRleE9mXCIsIFwibGFzdEluZGV4T2ZcIl0uZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgaW5zdHJ1bWVudGF0aW9uc1trZXldID0gZnVuY3Rpb24oLi4uYXJncykge1xuICAgICAgY29uc3QgYXJyID0gdG9SYXcodGhpcyk7XG4gICAgICBmb3IgKGxldCBpID0gMCwgbCA9IHRoaXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIHRyYWNrKGFyciwgXCJnZXRcIiwgaSArIFwiXCIpO1xuICAgICAgfVxuICAgICAgY29uc3QgcmVzID0gYXJyW2tleV0oLi4uYXJncyk7XG4gICAgICBpZiAocmVzID09PSAtMSB8fCByZXMgPT09IGZhbHNlKSB7XG4gICAgICAgIHJldHVybiBhcnJba2V5XSguLi5hcmdzLm1hcCh0b1JhdykpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgIH1cbiAgICB9O1xuICB9KTtcbiAgW1wicHVzaFwiLCBcInBvcFwiLCBcInNoaWZ0XCIsIFwidW5zaGlmdFwiLCBcInNwbGljZVwiXS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICBpbnN0cnVtZW50YXRpb25zW2tleV0gPSBmdW5jdGlvbiguLi5hcmdzKSB7XG4gICAgICBwYXVzZVRyYWNraW5nKCk7XG4gICAgICBjb25zdCByZXMgPSB0b1Jhdyh0aGlzKVtrZXldLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgICAgcmVzZXRUcmFja2luZygpO1xuICAgICAgcmV0dXJuIHJlcztcbiAgICB9O1xuICB9KTtcbiAgcmV0dXJuIGluc3RydW1lbnRhdGlvbnM7XG59XG5mdW5jdGlvbiBjcmVhdGVHZXR0ZXIoaXNSZWFkb25seSA9IGZhbHNlLCBzaGFsbG93ID0gZmFsc2UpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGdldDModGFyZ2V0LCBrZXksIHJlY2VpdmVyKSB7XG4gICAgaWYgKGtleSA9PT0gXCJfX3ZfaXNSZWFjdGl2ZVwiKSB7XG4gICAgICByZXR1cm4gIWlzUmVhZG9ubHk7XG4gICAgfSBlbHNlIGlmIChrZXkgPT09IFwiX192X2lzUmVhZG9ubHlcIikge1xuICAgICAgcmV0dXJuIGlzUmVhZG9ubHk7XG4gICAgfSBlbHNlIGlmIChrZXkgPT09IFwiX192X3Jhd1wiICYmIHJlY2VpdmVyID09PSAoaXNSZWFkb25seSA/IHNoYWxsb3cgPyBzaGFsbG93UmVhZG9ubHlNYXAgOiByZWFkb25seU1hcCA6IHNoYWxsb3cgPyBzaGFsbG93UmVhY3RpdmVNYXAgOiByZWFjdGl2ZU1hcCkuZ2V0KHRhcmdldCkpIHtcbiAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfVxuICAgIGNvbnN0IHRhcmdldElzQXJyYXkgPSBpc0FycmF5KHRhcmdldCk7XG4gICAgaWYgKCFpc1JlYWRvbmx5ICYmIHRhcmdldElzQXJyYXkgJiYgaGFzT3duKGFycmF5SW5zdHJ1bWVudGF0aW9ucywga2V5KSkge1xuICAgICAgcmV0dXJuIFJlZmxlY3QuZ2V0KGFycmF5SW5zdHJ1bWVudGF0aW9ucywga2V5LCByZWNlaXZlcik7XG4gICAgfVxuICAgIGNvbnN0IHJlcyA9IFJlZmxlY3QuZ2V0KHRhcmdldCwga2V5LCByZWNlaXZlcik7XG4gICAgaWYgKGlzU3ltYm9sKGtleSkgPyBidWlsdEluU3ltYm9scy5oYXMoa2V5KSA6IGlzTm9uVHJhY2thYmxlS2V5cyhrZXkpKSB7XG4gICAgICByZXR1cm4gcmVzO1xuICAgIH1cbiAgICBpZiAoIWlzUmVhZG9ubHkpIHtcbiAgICAgIHRyYWNrKHRhcmdldCwgXCJnZXRcIiwga2V5KTtcbiAgICB9XG4gICAgaWYgKHNoYWxsb3cpIHtcbiAgICAgIHJldHVybiByZXM7XG4gICAgfVxuICAgIGlmIChpc1JlZihyZXMpKSB7XG4gICAgICBjb25zdCBzaG91bGRVbndyYXAgPSAhdGFyZ2V0SXNBcnJheSB8fCAhaXNJbnRlZ2VyS2V5KGtleSk7XG4gICAgICByZXR1cm4gc2hvdWxkVW53cmFwID8gcmVzLnZhbHVlIDogcmVzO1xuICAgIH1cbiAgICBpZiAoaXNPYmplY3QocmVzKSkge1xuICAgICAgcmV0dXJuIGlzUmVhZG9ubHkgPyByZWFkb25seShyZXMpIDogcmVhY3RpdmUyKHJlcyk7XG4gICAgfVxuICAgIHJldHVybiByZXM7XG4gIH07XG59XG52YXIgc2V0MiA9IC8qIEBfX1BVUkVfXyAqLyBjcmVhdGVTZXR0ZXIoKTtcbmZ1bmN0aW9uIGNyZWF0ZVNldHRlcihzaGFsbG93ID0gZmFsc2UpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIHNldDModGFyZ2V0LCBrZXksIHZhbHVlLCByZWNlaXZlcikge1xuICAgIGxldCBvbGRWYWx1ZSA9IHRhcmdldFtrZXldO1xuICAgIGlmICghc2hhbGxvdykge1xuICAgICAgdmFsdWUgPSB0b1Jhdyh2YWx1ZSk7XG4gICAgICBvbGRWYWx1ZSA9IHRvUmF3KG9sZFZhbHVlKTtcbiAgICAgIGlmICghaXNBcnJheSh0YXJnZXQpICYmIGlzUmVmKG9sZFZhbHVlKSAmJiAhaXNSZWYodmFsdWUpKSB7XG4gICAgICAgIG9sZFZhbHVlLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBoYWRLZXkgPSBpc0FycmF5KHRhcmdldCkgJiYgaXNJbnRlZ2VyS2V5KGtleSkgPyBOdW1iZXIoa2V5KSA8IHRhcmdldC5sZW5ndGggOiBoYXNPd24odGFyZ2V0LCBrZXkpO1xuICAgIGNvbnN0IHJlc3VsdCA9IFJlZmxlY3Quc2V0KHRhcmdldCwga2V5LCB2YWx1ZSwgcmVjZWl2ZXIpO1xuICAgIGlmICh0YXJnZXQgPT09IHRvUmF3KHJlY2VpdmVyKSkge1xuICAgICAgaWYgKCFoYWRLZXkpIHtcbiAgICAgICAgdHJpZ2dlcih0YXJnZXQsIFwiYWRkXCIsIGtleSwgdmFsdWUpO1xuICAgICAgfSBlbHNlIGlmIChoYXNDaGFuZ2VkKHZhbHVlLCBvbGRWYWx1ZSkpIHtcbiAgICAgICAgdHJpZ2dlcih0YXJnZXQsIFwic2V0XCIsIGtleSwgdmFsdWUsIG9sZFZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbn1cbmZ1bmN0aW9uIGRlbGV0ZVByb3BlcnR5KHRhcmdldCwga2V5KSB7XG4gIGNvbnN0IGhhZEtleSA9IGhhc093bih0YXJnZXQsIGtleSk7XG4gIGNvbnN0IG9sZFZhbHVlID0gdGFyZ2V0W2tleV07XG4gIGNvbnN0IHJlc3VsdCA9IFJlZmxlY3QuZGVsZXRlUHJvcGVydHkodGFyZ2V0LCBrZXkpO1xuICBpZiAocmVzdWx0ICYmIGhhZEtleSkge1xuICAgIHRyaWdnZXIodGFyZ2V0LCBcImRlbGV0ZVwiLCBrZXksIHZvaWQgMCwgb2xkVmFsdWUpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBoYXModGFyZ2V0LCBrZXkpIHtcbiAgY29uc3QgcmVzdWx0ID0gUmVmbGVjdC5oYXModGFyZ2V0LCBrZXkpO1xuICBpZiAoIWlzU3ltYm9sKGtleSkgfHwgIWJ1aWx0SW5TeW1ib2xzLmhhcyhrZXkpKSB7XG4gICAgdHJhY2sodGFyZ2V0LCBcImhhc1wiLCBrZXkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBvd25LZXlzKHRhcmdldCkge1xuICB0cmFjayh0YXJnZXQsIFwiaXRlcmF0ZVwiLCBpc0FycmF5KHRhcmdldCkgPyBcImxlbmd0aFwiIDogSVRFUkFURV9LRVkpO1xuICByZXR1cm4gUmVmbGVjdC5vd25LZXlzKHRhcmdldCk7XG59XG52YXIgbXV0YWJsZUhhbmRsZXJzID0ge1xuICBnZXQ6IGdldDIsXG4gIHNldDogc2V0MixcbiAgZGVsZXRlUHJvcGVydHksXG4gIGhhcyxcbiAgb3duS2V5c1xufTtcbnZhciByZWFkb25seUhhbmRsZXJzID0ge1xuICBnZXQ6IHJlYWRvbmx5R2V0LFxuICBzZXQodGFyZ2V0LCBrZXkpIHtcbiAgICBpZiAodHJ1ZSkge1xuICAgICAgY29uc29sZS53YXJuKGBTZXQgb3BlcmF0aW9uIG9uIGtleSBcIiR7U3RyaW5nKGtleSl9XCIgZmFpbGVkOiB0YXJnZXQgaXMgcmVhZG9ubHkuYCwgdGFyZ2V0KTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH0sXG4gIGRlbGV0ZVByb3BlcnR5KHRhcmdldCwga2V5KSB7XG4gICAgaWYgKHRydWUpIHtcbiAgICAgIGNvbnNvbGUud2FybihgRGVsZXRlIG9wZXJhdGlvbiBvbiBrZXkgXCIke1N0cmluZyhrZXkpfVwiIGZhaWxlZDogdGFyZ2V0IGlzIHJlYWRvbmx5LmAsIHRhcmdldCk7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xudmFyIHRvUmVhY3RpdmUgPSAodmFsdWUpID0+IGlzT2JqZWN0KHZhbHVlKSA/IHJlYWN0aXZlMih2YWx1ZSkgOiB2YWx1ZTtcbnZhciB0b1JlYWRvbmx5ID0gKHZhbHVlKSA9PiBpc09iamVjdCh2YWx1ZSkgPyByZWFkb25seSh2YWx1ZSkgOiB2YWx1ZTtcbnZhciB0b1NoYWxsb3cgPSAodmFsdWUpID0+IHZhbHVlO1xudmFyIGdldFByb3RvID0gKHYpID0+IFJlZmxlY3QuZ2V0UHJvdG90eXBlT2Yodik7XG5mdW5jdGlvbiBnZXQkMSh0YXJnZXQsIGtleSwgaXNSZWFkb25seSA9IGZhbHNlLCBpc1NoYWxsb3cgPSBmYWxzZSkge1xuICB0YXJnZXQgPSB0YXJnZXRbXG4gICAgXCJfX3ZfcmF3XCJcbiAgICAvKiBSQVcgKi9cbiAgXTtcbiAgY29uc3QgcmF3VGFyZ2V0ID0gdG9SYXcodGFyZ2V0KTtcbiAgY29uc3QgcmF3S2V5ID0gdG9SYXcoa2V5KTtcbiAgaWYgKGtleSAhPT0gcmF3S2V5KSB7XG4gICAgIWlzUmVhZG9ubHkgJiYgdHJhY2socmF3VGFyZ2V0LCBcImdldFwiLCBrZXkpO1xuICB9XG4gICFpc1JlYWRvbmx5ICYmIHRyYWNrKHJhd1RhcmdldCwgXCJnZXRcIiwgcmF3S2V5KTtcbiAgY29uc3QgeyBoYXM6IGhhczIgfSA9IGdldFByb3RvKHJhd1RhcmdldCk7XG4gIGNvbnN0IHdyYXAgPSBpc1NoYWxsb3cgPyB0b1NoYWxsb3cgOiBpc1JlYWRvbmx5ID8gdG9SZWFkb25seSA6IHRvUmVhY3RpdmU7XG4gIGlmIChoYXMyLmNhbGwocmF3VGFyZ2V0LCBrZXkpKSB7XG4gICAgcmV0dXJuIHdyYXAodGFyZ2V0LmdldChrZXkpKTtcbiAgfSBlbHNlIGlmIChoYXMyLmNhbGwocmF3VGFyZ2V0LCByYXdLZXkpKSB7XG4gICAgcmV0dXJuIHdyYXAodGFyZ2V0LmdldChyYXdLZXkpKTtcbiAgfSBlbHNlIGlmICh0YXJnZXQgIT09IHJhd1RhcmdldCkge1xuICAgIHRhcmdldC5nZXQoa2V5KTtcbiAgfVxufVxuZnVuY3Rpb24gaGFzJDEoa2V5LCBpc1JlYWRvbmx5ID0gZmFsc2UpIHtcbiAgY29uc3QgdGFyZ2V0ID0gdGhpc1tcbiAgICBcIl9fdl9yYXdcIlxuICAgIC8qIFJBVyAqL1xuICBdO1xuICBjb25zdCByYXdUYXJnZXQgPSB0b1Jhdyh0YXJnZXQpO1xuICBjb25zdCByYXdLZXkgPSB0b1JhdyhrZXkpO1xuICBpZiAoa2V5ICE9PSByYXdLZXkpIHtcbiAgICAhaXNSZWFkb25seSAmJiB0cmFjayhyYXdUYXJnZXQsIFwiaGFzXCIsIGtleSk7XG4gIH1cbiAgIWlzUmVhZG9ubHkgJiYgdHJhY2socmF3VGFyZ2V0LCBcImhhc1wiLCByYXdLZXkpO1xuICByZXR1cm4ga2V5ID09PSByYXdLZXkgPyB0YXJnZXQuaGFzKGtleSkgOiB0YXJnZXQuaGFzKGtleSkgfHwgdGFyZ2V0LmhhcyhyYXdLZXkpO1xufVxuZnVuY3Rpb24gc2l6ZSh0YXJnZXQsIGlzUmVhZG9ubHkgPSBmYWxzZSkge1xuICB0YXJnZXQgPSB0YXJnZXRbXG4gICAgXCJfX3ZfcmF3XCJcbiAgICAvKiBSQVcgKi9cbiAgXTtcbiAgIWlzUmVhZG9ubHkgJiYgdHJhY2sodG9SYXcodGFyZ2V0KSwgXCJpdGVyYXRlXCIsIElURVJBVEVfS0VZKTtcbiAgcmV0dXJuIFJlZmxlY3QuZ2V0KHRhcmdldCwgXCJzaXplXCIsIHRhcmdldCk7XG59XG5mdW5jdGlvbiBhZGQodmFsdWUpIHtcbiAgdmFsdWUgPSB0b1Jhdyh2YWx1ZSk7XG4gIGNvbnN0IHRhcmdldCA9IHRvUmF3KHRoaXMpO1xuICBjb25zdCBwcm90byA9IGdldFByb3RvKHRhcmdldCk7XG4gIGNvbnN0IGhhZEtleSA9IHByb3RvLmhhcy5jYWxsKHRhcmdldCwgdmFsdWUpO1xuICBpZiAoIWhhZEtleSkge1xuICAgIHRhcmdldC5hZGQodmFsdWUpO1xuICAgIHRyaWdnZXIodGFyZ2V0LCBcImFkZFwiLCB2YWx1ZSwgdmFsdWUpO1xuICB9XG4gIHJldHVybiB0aGlzO1xufVxuZnVuY3Rpb24gc2V0JDEoa2V5LCB2YWx1ZSkge1xuICB2YWx1ZSA9IHRvUmF3KHZhbHVlKTtcbiAgY29uc3QgdGFyZ2V0ID0gdG9SYXcodGhpcyk7XG4gIGNvbnN0IHsgaGFzOiBoYXMyLCBnZXQ6IGdldDMgfSA9IGdldFByb3RvKHRhcmdldCk7XG4gIGxldCBoYWRLZXkgPSBoYXMyLmNhbGwodGFyZ2V0LCBrZXkpO1xuICBpZiAoIWhhZEtleSkge1xuICAgIGtleSA9IHRvUmF3KGtleSk7XG4gICAgaGFkS2V5ID0gaGFzMi5jYWxsKHRhcmdldCwga2V5KTtcbiAgfSBlbHNlIGlmICh0cnVlKSB7XG4gICAgY2hlY2tJZGVudGl0eUtleXModGFyZ2V0LCBoYXMyLCBrZXkpO1xuICB9XG4gIGNvbnN0IG9sZFZhbHVlID0gZ2V0My5jYWxsKHRhcmdldCwga2V5KTtcbiAgdGFyZ2V0LnNldChrZXksIHZhbHVlKTtcbiAgaWYgKCFoYWRLZXkpIHtcbiAgICB0cmlnZ2VyKHRhcmdldCwgXCJhZGRcIiwga2V5LCB2YWx1ZSk7XG4gIH0gZWxzZSBpZiAoaGFzQ2hhbmdlZCh2YWx1ZSwgb2xkVmFsdWUpKSB7XG4gICAgdHJpZ2dlcih0YXJnZXQsIFwic2V0XCIsIGtleSwgdmFsdWUsIG9sZFZhbHVlKTtcbiAgfVxuICByZXR1cm4gdGhpcztcbn1cbmZ1bmN0aW9uIGRlbGV0ZUVudHJ5KGtleSkge1xuICBjb25zdCB0YXJnZXQgPSB0b1Jhdyh0aGlzKTtcbiAgY29uc3QgeyBoYXM6IGhhczIsIGdldDogZ2V0MyB9ID0gZ2V0UHJvdG8odGFyZ2V0KTtcbiAgbGV0IGhhZEtleSA9IGhhczIuY2FsbCh0YXJnZXQsIGtleSk7XG4gIGlmICghaGFkS2V5KSB7XG4gICAga2V5ID0gdG9SYXcoa2V5KTtcbiAgICBoYWRLZXkgPSBoYXMyLmNhbGwodGFyZ2V0LCBrZXkpO1xuICB9IGVsc2UgaWYgKHRydWUpIHtcbiAgICBjaGVja0lkZW50aXR5S2V5cyh0YXJnZXQsIGhhczIsIGtleSk7XG4gIH1cbiAgY29uc3Qgb2xkVmFsdWUgPSBnZXQzID8gZ2V0My5jYWxsKHRhcmdldCwga2V5KSA6IHZvaWQgMDtcbiAgY29uc3QgcmVzdWx0ID0gdGFyZ2V0LmRlbGV0ZShrZXkpO1xuICBpZiAoaGFkS2V5KSB7XG4gICAgdHJpZ2dlcih0YXJnZXQsIFwiZGVsZXRlXCIsIGtleSwgdm9pZCAwLCBvbGRWYWx1ZSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIGNsZWFyKCkge1xuICBjb25zdCB0YXJnZXQgPSB0b1Jhdyh0aGlzKTtcbiAgY29uc3QgaGFkSXRlbXMgPSB0YXJnZXQuc2l6ZSAhPT0gMDtcbiAgY29uc3Qgb2xkVGFyZ2V0ID0gdHJ1ZSA/IGlzTWFwKHRhcmdldCkgPyBuZXcgTWFwKHRhcmdldCkgOiBuZXcgU2V0KHRhcmdldCkgOiB2b2lkIDA7XG4gIGNvbnN0IHJlc3VsdCA9IHRhcmdldC5jbGVhcigpO1xuICBpZiAoaGFkSXRlbXMpIHtcbiAgICB0cmlnZ2VyKHRhcmdldCwgXCJjbGVhclwiLCB2b2lkIDAsIHZvaWQgMCwgb2xkVGFyZ2V0KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gY3JlYXRlRm9yRWFjaChpc1JlYWRvbmx5LCBpc1NoYWxsb3cpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGZvckVhY2goY2FsbGJhY2ssIHRoaXNBcmcpIHtcbiAgICBjb25zdCBvYnNlcnZlZCA9IHRoaXM7XG4gICAgY29uc3QgdGFyZ2V0ID0gb2JzZXJ2ZWRbXG4gICAgICBcIl9fdl9yYXdcIlxuICAgICAgLyogUkFXICovXG4gICAgXTtcbiAgICBjb25zdCByYXdUYXJnZXQgPSB0b1Jhdyh0YXJnZXQpO1xuICAgIGNvbnN0IHdyYXAgPSBpc1NoYWxsb3cgPyB0b1NoYWxsb3cgOiBpc1JlYWRvbmx5ID8gdG9SZWFkb25seSA6IHRvUmVhY3RpdmU7XG4gICAgIWlzUmVhZG9ubHkgJiYgdHJhY2socmF3VGFyZ2V0LCBcIml0ZXJhdGVcIiwgSVRFUkFURV9LRVkpO1xuICAgIHJldHVybiB0YXJnZXQuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xuICAgICAgcmV0dXJuIGNhbGxiYWNrLmNhbGwodGhpc0FyZywgd3JhcCh2YWx1ZSksIHdyYXAoa2V5KSwgb2JzZXJ2ZWQpO1xuICAgIH0pO1xuICB9O1xufVxuZnVuY3Rpb24gY3JlYXRlSXRlcmFibGVNZXRob2QobWV0aG9kLCBpc1JlYWRvbmx5LCBpc1NoYWxsb3cpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKC4uLmFyZ3MpIHtcbiAgICBjb25zdCB0YXJnZXQgPSB0aGlzW1xuICAgICAgXCJfX3ZfcmF3XCJcbiAgICAgIC8qIFJBVyAqL1xuICAgIF07XG4gICAgY29uc3QgcmF3VGFyZ2V0ID0gdG9SYXcodGFyZ2V0KTtcbiAgICBjb25zdCB0YXJnZXRJc01hcCA9IGlzTWFwKHJhd1RhcmdldCk7XG4gICAgY29uc3QgaXNQYWlyID0gbWV0aG9kID09PSBcImVudHJpZXNcIiB8fCBtZXRob2QgPT09IFN5bWJvbC5pdGVyYXRvciAmJiB0YXJnZXRJc01hcDtcbiAgICBjb25zdCBpc0tleU9ubHkgPSBtZXRob2QgPT09IFwia2V5c1wiICYmIHRhcmdldElzTWFwO1xuICAgIGNvbnN0IGlubmVySXRlcmF0b3IgPSB0YXJnZXRbbWV0aG9kXSguLi5hcmdzKTtcbiAgICBjb25zdCB3cmFwID0gaXNTaGFsbG93ID8gdG9TaGFsbG93IDogaXNSZWFkb25seSA/IHRvUmVhZG9ubHkgOiB0b1JlYWN0aXZlO1xuICAgICFpc1JlYWRvbmx5ICYmIHRyYWNrKHJhd1RhcmdldCwgXCJpdGVyYXRlXCIsIGlzS2V5T25seSA/IE1BUF9LRVlfSVRFUkFURV9LRVkgOiBJVEVSQVRFX0tFWSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIC8vIGl0ZXJhdG9yIHByb3RvY29sXG4gICAgICBuZXh0KCkge1xuICAgICAgICBjb25zdCB7IHZhbHVlLCBkb25lIH0gPSBpbm5lckl0ZXJhdG9yLm5leHQoKTtcbiAgICAgICAgcmV0dXJuIGRvbmUgPyB7IHZhbHVlLCBkb25lIH0gOiB7XG4gICAgICAgICAgdmFsdWU6IGlzUGFpciA/IFt3cmFwKHZhbHVlWzBdKSwgd3JhcCh2YWx1ZVsxXSldIDogd3JhcCh2YWx1ZSksXG4gICAgICAgICAgZG9uZVxuICAgICAgICB9O1xuICAgICAgfSxcbiAgICAgIC8vIGl0ZXJhYmxlIHByb3RvY29sXG4gICAgICBbU3ltYm9sLml0ZXJhdG9yXSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG4gICAgfTtcbiAgfTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZVJlYWRvbmx5TWV0aG9kKHR5cGUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKC4uLmFyZ3MpIHtcbiAgICBpZiAodHJ1ZSkge1xuICAgICAgY29uc3Qga2V5ID0gYXJnc1swXSA/IGBvbiBrZXkgXCIke2FyZ3NbMF19XCIgYCA6IGBgO1xuICAgICAgY29uc29sZS53YXJuKGAke2NhcGl0YWxpemUodHlwZSl9IG9wZXJhdGlvbiAke2tleX1mYWlsZWQ6IHRhcmdldCBpcyByZWFkb25seS5gLCB0b1Jhdyh0aGlzKSk7XG4gICAgfVxuICAgIHJldHVybiB0eXBlID09PSBcImRlbGV0ZVwiID8gZmFsc2UgOiB0aGlzO1xuICB9O1xufVxuZnVuY3Rpb24gY3JlYXRlSW5zdHJ1bWVudGF0aW9ucygpIHtcbiAgY29uc3QgbXV0YWJsZUluc3RydW1lbnRhdGlvbnMyID0ge1xuICAgIGdldChrZXkpIHtcbiAgICAgIHJldHVybiBnZXQkMSh0aGlzLCBrZXkpO1xuICAgIH0sXG4gICAgZ2V0IHNpemUoKSB7XG4gICAgICByZXR1cm4gc2l6ZSh0aGlzKTtcbiAgICB9LFxuICAgIGhhczogaGFzJDEsXG4gICAgYWRkLFxuICAgIHNldDogc2V0JDEsXG4gICAgZGVsZXRlOiBkZWxldGVFbnRyeSxcbiAgICBjbGVhcixcbiAgICBmb3JFYWNoOiBjcmVhdGVGb3JFYWNoKGZhbHNlLCBmYWxzZSlcbiAgfTtcbiAgY29uc3Qgc2hhbGxvd0luc3RydW1lbnRhdGlvbnMyID0ge1xuICAgIGdldChrZXkpIHtcbiAgICAgIHJldHVybiBnZXQkMSh0aGlzLCBrZXksIGZhbHNlLCB0cnVlKTtcbiAgICB9LFxuICAgIGdldCBzaXplKCkge1xuICAgICAgcmV0dXJuIHNpemUodGhpcyk7XG4gICAgfSxcbiAgICBoYXM6IGhhcyQxLFxuICAgIGFkZCxcbiAgICBzZXQ6IHNldCQxLFxuICAgIGRlbGV0ZTogZGVsZXRlRW50cnksXG4gICAgY2xlYXIsXG4gICAgZm9yRWFjaDogY3JlYXRlRm9yRWFjaChmYWxzZSwgdHJ1ZSlcbiAgfTtcbiAgY29uc3QgcmVhZG9ubHlJbnN0cnVtZW50YXRpb25zMiA9IHtcbiAgICBnZXQoa2V5KSB7XG4gICAgICByZXR1cm4gZ2V0JDEodGhpcywga2V5LCB0cnVlKTtcbiAgICB9LFxuICAgIGdldCBzaXplKCkge1xuICAgICAgcmV0dXJuIHNpemUodGhpcywgdHJ1ZSk7XG4gICAgfSxcbiAgICBoYXMoa2V5KSB7XG4gICAgICByZXR1cm4gaGFzJDEuY2FsbCh0aGlzLCBrZXksIHRydWUpO1xuICAgIH0sXG4gICAgYWRkOiBjcmVhdGVSZWFkb25seU1ldGhvZChcbiAgICAgIFwiYWRkXCJcbiAgICAgIC8qIEFERCAqL1xuICAgICksXG4gICAgc2V0OiBjcmVhdGVSZWFkb25seU1ldGhvZChcbiAgICAgIFwic2V0XCJcbiAgICAgIC8qIFNFVCAqL1xuICAgICksXG4gICAgZGVsZXRlOiBjcmVhdGVSZWFkb25seU1ldGhvZChcbiAgICAgIFwiZGVsZXRlXCJcbiAgICAgIC8qIERFTEVURSAqL1xuICAgICksXG4gICAgY2xlYXI6IGNyZWF0ZVJlYWRvbmx5TWV0aG9kKFxuICAgICAgXCJjbGVhclwiXG4gICAgICAvKiBDTEVBUiAqL1xuICAgICksXG4gICAgZm9yRWFjaDogY3JlYXRlRm9yRWFjaCh0cnVlLCBmYWxzZSlcbiAgfTtcbiAgY29uc3Qgc2hhbGxvd1JlYWRvbmx5SW5zdHJ1bWVudGF0aW9uczIgPSB7XG4gICAgZ2V0KGtleSkge1xuICAgICAgcmV0dXJuIGdldCQxKHRoaXMsIGtleSwgdHJ1ZSwgdHJ1ZSk7XG4gICAgfSxcbiAgICBnZXQgc2l6ZSgpIHtcbiAgICAgIHJldHVybiBzaXplKHRoaXMsIHRydWUpO1xuICAgIH0sXG4gICAgaGFzKGtleSkge1xuICAgICAgcmV0dXJuIGhhcyQxLmNhbGwodGhpcywga2V5LCB0cnVlKTtcbiAgICB9LFxuICAgIGFkZDogY3JlYXRlUmVhZG9ubHlNZXRob2QoXG4gICAgICBcImFkZFwiXG4gICAgICAvKiBBREQgKi9cbiAgICApLFxuICAgIHNldDogY3JlYXRlUmVhZG9ubHlNZXRob2QoXG4gICAgICBcInNldFwiXG4gICAgICAvKiBTRVQgKi9cbiAgICApLFxuICAgIGRlbGV0ZTogY3JlYXRlUmVhZG9ubHlNZXRob2QoXG4gICAgICBcImRlbGV0ZVwiXG4gICAgICAvKiBERUxFVEUgKi9cbiAgICApLFxuICAgIGNsZWFyOiBjcmVhdGVSZWFkb25seU1ldGhvZChcbiAgICAgIFwiY2xlYXJcIlxuICAgICAgLyogQ0xFQVIgKi9cbiAgICApLFxuICAgIGZvckVhY2g6IGNyZWF0ZUZvckVhY2godHJ1ZSwgdHJ1ZSlcbiAgfTtcbiAgY29uc3QgaXRlcmF0b3JNZXRob2RzID0gW1wia2V5c1wiLCBcInZhbHVlc1wiLCBcImVudHJpZXNcIiwgU3ltYm9sLml0ZXJhdG9yXTtcbiAgaXRlcmF0b3JNZXRob2RzLmZvckVhY2goKG1ldGhvZCkgPT4ge1xuICAgIG11dGFibGVJbnN0cnVtZW50YXRpb25zMlttZXRob2RdID0gY3JlYXRlSXRlcmFibGVNZXRob2QobWV0aG9kLCBmYWxzZSwgZmFsc2UpO1xuICAgIHJlYWRvbmx5SW5zdHJ1bWVudGF0aW9uczJbbWV0aG9kXSA9IGNyZWF0ZUl0ZXJhYmxlTWV0aG9kKG1ldGhvZCwgdHJ1ZSwgZmFsc2UpO1xuICAgIHNoYWxsb3dJbnN0cnVtZW50YXRpb25zMlttZXRob2RdID0gY3JlYXRlSXRlcmFibGVNZXRob2QobWV0aG9kLCBmYWxzZSwgdHJ1ZSk7XG4gICAgc2hhbGxvd1JlYWRvbmx5SW5zdHJ1bWVudGF0aW9uczJbbWV0aG9kXSA9IGNyZWF0ZUl0ZXJhYmxlTWV0aG9kKG1ldGhvZCwgdHJ1ZSwgdHJ1ZSk7XG4gIH0pO1xuICByZXR1cm4gW1xuICAgIG11dGFibGVJbnN0cnVtZW50YXRpb25zMixcbiAgICByZWFkb25seUluc3RydW1lbnRhdGlvbnMyLFxuICAgIHNoYWxsb3dJbnN0cnVtZW50YXRpb25zMixcbiAgICBzaGFsbG93UmVhZG9ubHlJbnN0cnVtZW50YXRpb25zMlxuICBdO1xufVxudmFyIFttdXRhYmxlSW5zdHJ1bWVudGF0aW9ucywgcmVhZG9ubHlJbnN0cnVtZW50YXRpb25zLCBzaGFsbG93SW5zdHJ1bWVudGF0aW9ucywgc2hhbGxvd1JlYWRvbmx5SW5zdHJ1bWVudGF0aW9uc10gPSAvKiBAX19QVVJFX18gKi8gY3JlYXRlSW5zdHJ1bWVudGF0aW9ucygpO1xuZnVuY3Rpb24gY3JlYXRlSW5zdHJ1bWVudGF0aW9uR2V0dGVyKGlzUmVhZG9ubHksIHNoYWxsb3cpIHtcbiAgY29uc3QgaW5zdHJ1bWVudGF0aW9ucyA9IHNoYWxsb3cgPyBpc1JlYWRvbmx5ID8gc2hhbGxvd1JlYWRvbmx5SW5zdHJ1bWVudGF0aW9ucyA6IHNoYWxsb3dJbnN0cnVtZW50YXRpb25zIDogaXNSZWFkb25seSA/IHJlYWRvbmx5SW5zdHJ1bWVudGF0aW9ucyA6IG11dGFibGVJbnN0cnVtZW50YXRpb25zO1xuICByZXR1cm4gKHRhcmdldCwga2V5LCByZWNlaXZlcikgPT4ge1xuICAgIGlmIChrZXkgPT09IFwiX192X2lzUmVhY3RpdmVcIikge1xuICAgICAgcmV0dXJuICFpc1JlYWRvbmx5O1xuICAgIH0gZWxzZSBpZiAoa2V5ID09PSBcIl9fdl9pc1JlYWRvbmx5XCIpIHtcbiAgICAgIHJldHVybiBpc1JlYWRvbmx5O1xuICAgIH0gZWxzZSBpZiAoa2V5ID09PSBcIl9fdl9yYXdcIikge1xuICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICB9XG4gICAgcmV0dXJuIFJlZmxlY3QuZ2V0KGhhc093bihpbnN0cnVtZW50YXRpb25zLCBrZXkpICYmIGtleSBpbiB0YXJnZXQgPyBpbnN0cnVtZW50YXRpb25zIDogdGFyZ2V0LCBrZXksIHJlY2VpdmVyKTtcbiAgfTtcbn1cbnZhciBtdXRhYmxlQ29sbGVjdGlvbkhhbmRsZXJzID0ge1xuICBnZXQ6IC8qIEBfX1BVUkVfXyAqLyBjcmVhdGVJbnN0cnVtZW50YXRpb25HZXR0ZXIoZmFsc2UsIGZhbHNlKVxufTtcbnZhciByZWFkb25seUNvbGxlY3Rpb25IYW5kbGVycyA9IHtcbiAgZ2V0OiAvKiBAX19QVVJFX18gKi8gY3JlYXRlSW5zdHJ1bWVudGF0aW9uR2V0dGVyKHRydWUsIGZhbHNlKVxufTtcbmZ1bmN0aW9uIGNoZWNrSWRlbnRpdHlLZXlzKHRhcmdldCwgaGFzMiwga2V5KSB7XG4gIGNvbnN0IHJhd0tleSA9IHRvUmF3KGtleSk7XG4gIGlmIChyYXdLZXkgIT09IGtleSAmJiBoYXMyLmNhbGwodGFyZ2V0LCByYXdLZXkpKSB7XG4gICAgY29uc3QgdHlwZSA9IHRvUmF3VHlwZSh0YXJnZXQpO1xuICAgIGNvbnNvbGUud2FybihgUmVhY3RpdmUgJHt0eXBlfSBjb250YWlucyBib3RoIHRoZSByYXcgYW5kIHJlYWN0aXZlIHZlcnNpb25zIG9mIHRoZSBzYW1lIG9iamVjdCR7dHlwZSA9PT0gYE1hcGAgPyBgIGFzIGtleXNgIDogYGB9LCB3aGljaCBjYW4gbGVhZCB0byBpbmNvbnNpc3RlbmNpZXMuIEF2b2lkIGRpZmZlcmVudGlhdGluZyBiZXR3ZWVuIHRoZSByYXcgYW5kIHJlYWN0aXZlIHZlcnNpb25zIG9mIGFuIG9iamVjdCBhbmQgb25seSB1c2UgdGhlIHJlYWN0aXZlIHZlcnNpb24gaWYgcG9zc2libGUuYCk7XG4gIH1cbn1cbnZhciByZWFjdGl2ZU1hcCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xudmFyIHNoYWxsb3dSZWFjdGl2ZU1hcCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xudmFyIHJlYWRvbmx5TWFwID0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7XG52YXIgc2hhbGxvd1JlYWRvbmx5TWFwID0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7XG5mdW5jdGlvbiB0YXJnZXRUeXBlTWFwKHJhd1R5cGUpIHtcbiAgc3dpdGNoIChyYXdUeXBlKSB7XG4gICAgY2FzZSBcIk9iamVjdFwiOlxuICAgIGNhc2UgXCJBcnJheVwiOlxuICAgICAgcmV0dXJuIDE7XG4gICAgY2FzZSBcIk1hcFwiOlxuICAgIGNhc2UgXCJTZXRcIjpcbiAgICBjYXNlIFwiV2Vha01hcFwiOlxuICAgIGNhc2UgXCJXZWFrU2V0XCI6XG4gICAgICByZXR1cm4gMjtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIDA7XG4gIH1cbn1cbmZ1bmN0aW9uIGdldFRhcmdldFR5cGUodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlW1xuICAgIFwiX192X3NraXBcIlxuICAgIC8qIFNLSVAgKi9cbiAgXSB8fCAhT2JqZWN0LmlzRXh0ZW5zaWJsZSh2YWx1ZSkgPyAwIDogdGFyZ2V0VHlwZU1hcCh0b1Jhd1R5cGUodmFsdWUpKTtcbn1cbmZ1bmN0aW9uIHJlYWN0aXZlMih0YXJnZXQpIHtcbiAgaWYgKHRhcmdldCAmJiB0YXJnZXRbXG4gICAgXCJfX3ZfaXNSZWFkb25seVwiXG4gICAgLyogSVNfUkVBRE9OTFkgKi9cbiAgXSkge1xuICAgIHJldHVybiB0YXJnZXQ7XG4gIH1cbiAgcmV0dXJuIGNyZWF0ZVJlYWN0aXZlT2JqZWN0KHRhcmdldCwgZmFsc2UsIG11dGFibGVIYW5kbGVycywgbXV0YWJsZUNvbGxlY3Rpb25IYW5kbGVycywgcmVhY3RpdmVNYXApO1xufVxuZnVuY3Rpb24gcmVhZG9ubHkodGFyZ2V0KSB7XG4gIHJldHVybiBjcmVhdGVSZWFjdGl2ZU9iamVjdCh0YXJnZXQsIHRydWUsIHJlYWRvbmx5SGFuZGxlcnMsIHJlYWRvbmx5Q29sbGVjdGlvbkhhbmRsZXJzLCByZWFkb25seU1hcCk7XG59XG5mdW5jdGlvbiBjcmVhdGVSZWFjdGl2ZU9iamVjdCh0YXJnZXQsIGlzUmVhZG9ubHksIGJhc2VIYW5kbGVycywgY29sbGVjdGlvbkhhbmRsZXJzLCBwcm94eU1hcCkge1xuICBpZiAoIWlzT2JqZWN0KHRhcmdldCkpIHtcbiAgICBpZiAodHJ1ZSkge1xuICAgICAgY29uc29sZS53YXJuKGB2YWx1ZSBjYW5ub3QgYmUgbWFkZSByZWFjdGl2ZTogJHtTdHJpbmcodGFyZ2V0KX1gKTtcbiAgICB9XG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfVxuICBpZiAodGFyZ2V0W1xuICAgIFwiX192X3Jhd1wiXG4gICAgLyogUkFXICovXG4gIF0gJiYgIShpc1JlYWRvbmx5ICYmIHRhcmdldFtcbiAgICBcIl9fdl9pc1JlYWN0aXZlXCJcbiAgICAvKiBJU19SRUFDVElWRSAqL1xuICBdKSkge1xuICAgIHJldHVybiB0YXJnZXQ7XG4gIH1cbiAgY29uc3QgZXhpc3RpbmdQcm94eSA9IHByb3h5TWFwLmdldCh0YXJnZXQpO1xuICBpZiAoZXhpc3RpbmdQcm94eSkge1xuICAgIHJldHVybiBleGlzdGluZ1Byb3h5O1xuICB9XG4gIGNvbnN0IHRhcmdldFR5cGUgPSBnZXRUYXJnZXRUeXBlKHRhcmdldCk7XG4gIGlmICh0YXJnZXRUeXBlID09PSAwKSB7XG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfVxuICBjb25zdCBwcm94eSA9IG5ldyBQcm94eSh0YXJnZXQsIHRhcmdldFR5cGUgPT09IDIgPyBjb2xsZWN0aW9uSGFuZGxlcnMgOiBiYXNlSGFuZGxlcnMpO1xuICBwcm94eU1hcC5zZXQodGFyZ2V0LCBwcm94eSk7XG4gIHJldHVybiBwcm94eTtcbn1cbmZ1bmN0aW9uIHRvUmF3KG9ic2VydmVkKSB7XG4gIHJldHVybiBvYnNlcnZlZCAmJiB0b1JhdyhvYnNlcnZlZFtcbiAgICBcIl9fdl9yYXdcIlxuICAgIC8qIFJBVyAqL1xuICBdKSB8fCBvYnNlcnZlZDtcbn1cbmZ1bmN0aW9uIGlzUmVmKHIpIHtcbiAgcmV0dXJuIEJvb2xlYW4ociAmJiByLl9fdl9pc1JlZiA9PT0gdHJ1ZSk7XG59XG5cbi8vIHBhY2thZ2VzL2FscGluZWpzL3NyYy9tYWdpY3MvJG5leHRUaWNrLmpzXG5tYWdpYyhcIm5leHRUaWNrXCIsICgpID0+IG5leHRUaWNrKTtcblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL21hZ2ljcy8kZGlzcGF0Y2guanNcbm1hZ2ljKFwiZGlzcGF0Y2hcIiwgKGVsKSA9PiBkaXNwYXRjaC5iaW5kKGRpc3BhdGNoLCBlbCkpO1xuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvbWFnaWNzLyR3YXRjaC5qc1xubWFnaWMoXCJ3YXRjaFwiLCAoZWwsIHsgZXZhbHVhdGVMYXRlcjogZXZhbHVhdGVMYXRlcjIsIGVmZmVjdDogZWZmZWN0MyB9KSA9PiAoa2V5LCBjYWxsYmFjaykgPT4ge1xuICBsZXQgZXZhbHVhdGUyID0gZXZhbHVhdGVMYXRlcjIoa2V5KTtcbiAgbGV0IGZpcnN0VGltZSA9IHRydWU7XG4gIGxldCBvbGRWYWx1ZTtcbiAgbGV0IGVmZmVjdFJlZmVyZW5jZSA9IGVmZmVjdDMoKCkgPT4gZXZhbHVhdGUyKCh2YWx1ZSkgPT4ge1xuICAgIEpTT04uc3RyaW5naWZ5KHZhbHVlKTtcbiAgICBpZiAoIWZpcnN0VGltZSkge1xuICAgICAgcXVldWVNaWNyb3Rhc2soKCkgPT4ge1xuICAgICAgICBjYWxsYmFjayh2YWx1ZSwgb2xkVmFsdWUpO1xuICAgICAgICBvbGRWYWx1ZSA9IHZhbHVlO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9sZFZhbHVlID0gdmFsdWU7XG4gICAgfVxuICAgIGZpcnN0VGltZSA9IGZhbHNlO1xuICB9KSk7XG4gIGVsLl94X2VmZmVjdHMuZGVsZXRlKGVmZmVjdFJlZmVyZW5jZSk7XG59KTtcblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL21hZ2ljcy8kc3RvcmUuanNcbm1hZ2ljKFwic3RvcmVcIiwgZ2V0U3RvcmVzKTtcblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL21hZ2ljcy8kZGF0YS5qc1xubWFnaWMoXCJkYXRhXCIsIChlbCkgPT4gc2NvcGUoZWwpKTtcblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL21hZ2ljcy8kcm9vdC5qc1xubWFnaWMoXCJyb290XCIsIChlbCkgPT4gY2xvc2VzdFJvb3QoZWwpKTtcblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL21hZ2ljcy8kcmVmcy5qc1xubWFnaWMoXCJyZWZzXCIsIChlbCkgPT4ge1xuICBpZiAoZWwuX3hfcmVmc19wcm94eSlcbiAgICByZXR1cm4gZWwuX3hfcmVmc19wcm94eTtcbiAgZWwuX3hfcmVmc19wcm94eSA9IG1lcmdlUHJveGllcyhnZXRBcnJheU9mUmVmT2JqZWN0KGVsKSk7XG4gIHJldHVybiBlbC5feF9yZWZzX3Byb3h5O1xufSk7XG5mdW5jdGlvbiBnZXRBcnJheU9mUmVmT2JqZWN0KGVsKSB7XG4gIGxldCByZWZPYmplY3RzID0gW107XG4gIGxldCBjdXJyZW50RWwgPSBlbDtcbiAgd2hpbGUgKGN1cnJlbnRFbCkge1xuICAgIGlmIChjdXJyZW50RWwuX3hfcmVmcylcbiAgICAgIHJlZk9iamVjdHMucHVzaChjdXJyZW50RWwuX3hfcmVmcyk7XG4gICAgY3VycmVudEVsID0gY3VycmVudEVsLnBhcmVudE5vZGU7XG4gIH1cbiAgcmV0dXJuIHJlZk9iamVjdHM7XG59XG5cbi8vIHBhY2thZ2VzL2FscGluZWpzL3NyYy9pZHMuanNcbnZhciBnbG9iYWxJZE1lbW8gPSB7fTtcbmZ1bmN0aW9uIGZpbmRBbmRJbmNyZW1lbnRJZChuYW1lKSB7XG4gIGlmICghZ2xvYmFsSWRNZW1vW25hbWVdKVxuICAgIGdsb2JhbElkTWVtb1tuYW1lXSA9IDA7XG4gIHJldHVybiArK2dsb2JhbElkTWVtb1tuYW1lXTtcbn1cbmZ1bmN0aW9uIGNsb3Nlc3RJZFJvb3QoZWwsIG5hbWUpIHtcbiAgcmV0dXJuIGZpbmRDbG9zZXN0KGVsLCAoZWxlbWVudCkgPT4ge1xuICAgIGlmIChlbGVtZW50Ll94X2lkcyAmJiBlbGVtZW50Ll94X2lkc1tuYW1lXSlcbiAgICAgIHJldHVybiB0cnVlO1xuICB9KTtcbn1cbmZ1bmN0aW9uIHNldElkUm9vdChlbCwgbmFtZSkge1xuICBpZiAoIWVsLl94X2lkcylcbiAgICBlbC5feF9pZHMgPSB7fTtcbiAgaWYgKCFlbC5feF9pZHNbbmFtZV0pXG4gICAgZWwuX3hfaWRzW25hbWVdID0gZmluZEFuZEluY3JlbWVudElkKG5hbWUpO1xufVxuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvbWFnaWNzLyRpZC5qc1xubWFnaWMoXCJpZFwiLCAoZWwpID0+IChuYW1lLCBrZXkgPSBudWxsKSA9PiB7XG4gIGxldCByb290ID0gY2xvc2VzdElkUm9vdChlbCwgbmFtZSk7XG4gIGxldCBpZCA9IHJvb3QgPyByb290Ll94X2lkc1tuYW1lXSA6IGZpbmRBbmRJbmNyZW1lbnRJZChuYW1lKTtcbiAgcmV0dXJuIGtleSA/IGAke25hbWV9LSR7aWR9LSR7a2V5fWAgOiBgJHtuYW1lfS0ke2lkfWA7XG59KTtcblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL21hZ2ljcy8kZWwuanNcbm1hZ2ljKFwiZWxcIiwgKGVsKSA9PiBlbCk7XG5cbi8vIHBhY2thZ2VzL2FscGluZWpzL3NyYy9tYWdpY3MvaW5kZXguanNcbndhcm5NaXNzaW5nUGx1Z2luTWFnaWMoXCJGb2N1c1wiLCBcImZvY3VzXCIsIFwiZm9jdXNcIik7XG53YXJuTWlzc2luZ1BsdWdpbk1hZ2ljKFwiUGVyc2lzdFwiLCBcInBlcnNpc3RcIiwgXCJwZXJzaXN0XCIpO1xuZnVuY3Rpb24gd2Fybk1pc3NpbmdQbHVnaW5NYWdpYyhuYW1lLCBtYWdpY05hbWUsIHNsdWcpIHtcbiAgbWFnaWMobWFnaWNOYW1lLCAoZWwpID0+IHdhcm4oYFlvdSBjYW4ndCB1c2UgWyQke21hZ2ljTmFtZX1dIHdpdGhvdXQgZmlyc3QgaW5zdGFsbGluZyB0aGUgXCIke25hbWV9XCIgcGx1Z2luIGhlcmU6IGh0dHBzOi8vYWxwaW5lanMuZGV2L3BsdWdpbnMvJHtzbHVnfWAsIGVsKSk7XG59XG5cbi8vIHBhY2thZ2VzL2FscGluZWpzL3NyYy9kaXJlY3RpdmVzL3gtbW9kZWxhYmxlLmpzXG5kaXJlY3RpdmUoXCJtb2RlbGFibGVcIiwgKGVsLCB7IGV4cHJlc3Npb24gfSwgeyBlZmZlY3Q6IGVmZmVjdDMsIGV2YWx1YXRlTGF0ZXI6IGV2YWx1YXRlTGF0ZXIyLCBjbGVhbnVwOiBjbGVhbnVwMiB9KSA9PiB7XG4gIGxldCBmdW5jID0gZXZhbHVhdGVMYXRlcjIoZXhwcmVzc2lvbik7XG4gIGxldCBpbm5lckdldCA9ICgpID0+IHtcbiAgICBsZXQgcmVzdWx0O1xuICAgIGZ1bmMoKGkpID0+IHJlc3VsdCA9IGkpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG4gIGxldCBldmFsdWF0ZUlubmVyU2V0ID0gZXZhbHVhdGVMYXRlcjIoYCR7ZXhwcmVzc2lvbn0gPSBfX3BsYWNlaG9sZGVyYCk7XG4gIGxldCBpbm5lclNldCA9ICh2YWwpID0+IGV2YWx1YXRlSW5uZXJTZXQoKCkgPT4ge1xuICB9LCB7IHNjb3BlOiB7IFwiX19wbGFjZWhvbGRlclwiOiB2YWwgfSB9KTtcbiAgbGV0IGluaXRpYWxWYWx1ZSA9IGlubmVyR2V0KCk7XG4gIGlubmVyU2V0KGluaXRpYWxWYWx1ZSk7XG4gIHF1ZXVlTWljcm90YXNrKCgpID0+IHtcbiAgICBpZiAoIWVsLl94X21vZGVsKVxuICAgICAgcmV0dXJuO1xuICAgIGVsLl94X3JlbW92ZU1vZGVsTGlzdGVuZXJzW1wiZGVmYXVsdFwiXSgpO1xuICAgIGxldCBvdXRlckdldCA9IGVsLl94X21vZGVsLmdldDtcbiAgICBsZXQgb3V0ZXJTZXQgPSBlbC5feF9tb2RlbC5zZXQ7XG4gICAgbGV0IHJlbGVhc2VFbnRhbmdsZW1lbnQgPSBlbnRhbmdsZShcbiAgICAgIHtcbiAgICAgICAgZ2V0KCkge1xuICAgICAgICAgIHJldHVybiBvdXRlckdldCgpO1xuICAgICAgICB9LFxuICAgICAgICBzZXQodmFsdWUpIHtcbiAgICAgICAgICBvdXRlclNldCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGdldCgpIHtcbiAgICAgICAgICByZXR1cm4gaW5uZXJHZXQoKTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0KHZhbHVlKSB7XG4gICAgICAgICAgaW5uZXJTZXQodmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgKTtcbiAgICBjbGVhbnVwMihyZWxlYXNlRW50YW5nbGVtZW50KTtcbiAgfSk7XG59KTtcblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL2RpcmVjdGl2ZXMveC10ZWxlcG9ydC5qc1xuZGlyZWN0aXZlKFwidGVsZXBvcnRcIiwgKGVsLCB7IG1vZGlmaWVycywgZXhwcmVzc2lvbiB9LCB7IGNsZWFudXA6IGNsZWFudXAyIH0pID0+IHtcbiAgaWYgKGVsLnRhZ05hbWUudG9Mb3dlckNhc2UoKSAhPT0gXCJ0ZW1wbGF0ZVwiKVxuICAgIHdhcm4oXCJ4LXRlbGVwb3J0IGNhbiBvbmx5IGJlIHVzZWQgb24gYSA8dGVtcGxhdGU+IHRhZ1wiLCBlbCk7XG4gIGxldCB0YXJnZXQgPSBnZXRUYXJnZXQoZXhwcmVzc2lvbik7XG4gIGxldCBjbG9uZTIgPSBlbC5jb250ZW50LmNsb25lTm9kZSh0cnVlKS5maXJzdEVsZW1lbnRDaGlsZDtcbiAgZWwuX3hfdGVsZXBvcnQgPSBjbG9uZTI7XG4gIGNsb25lMi5feF90ZWxlcG9ydEJhY2sgPSBlbDtcbiAgZWwuc2V0QXR0cmlidXRlKFwiZGF0YS10ZWxlcG9ydC10ZW1wbGF0ZVwiLCB0cnVlKTtcbiAgY2xvbmUyLnNldEF0dHJpYnV0ZShcImRhdGEtdGVsZXBvcnQtdGFyZ2V0XCIsIHRydWUpO1xuICBpZiAoZWwuX3hfZm9yd2FyZEV2ZW50cykge1xuICAgIGVsLl94X2ZvcndhcmRFdmVudHMuZm9yRWFjaCgoZXZlbnROYW1lKSA9PiB7XG4gICAgICBjbG9uZTIuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIChlKSA9PiB7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGVsLmRpc3BhdGNoRXZlbnQobmV3IGUuY29uc3RydWN0b3IoZS50eXBlLCBlKSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuICBhZGRTY29wZVRvTm9kZShjbG9uZTIsIHt9LCBlbCk7XG4gIGxldCBwbGFjZUluRG9tID0gKGNsb25lMywgdGFyZ2V0MiwgbW9kaWZpZXJzMikgPT4ge1xuICAgIGlmIChtb2RpZmllcnMyLmluY2x1ZGVzKFwicHJlcGVuZFwiKSkge1xuICAgICAgdGFyZ2V0Mi5wYXJlbnROb2RlLmluc2VydEJlZm9yZShjbG9uZTMsIHRhcmdldDIpO1xuICAgIH0gZWxzZSBpZiAobW9kaWZpZXJzMi5pbmNsdWRlcyhcImFwcGVuZFwiKSkge1xuICAgICAgdGFyZ2V0Mi5wYXJlbnROb2RlLmluc2VydEJlZm9yZShjbG9uZTMsIHRhcmdldDIubmV4dFNpYmxpbmcpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0YXJnZXQyLmFwcGVuZENoaWxkKGNsb25lMyk7XG4gICAgfVxuICB9O1xuICBtdXRhdGVEb20oKCkgPT4ge1xuICAgIHBsYWNlSW5Eb20oY2xvbmUyLCB0YXJnZXQsIG1vZGlmaWVycyk7XG4gICAgaW5pdFRyZWUoY2xvbmUyKTtcbiAgICBjbG9uZTIuX3hfaWdub3JlID0gdHJ1ZTtcbiAgfSk7XG4gIGVsLl94X3RlbGVwb3J0UHV0QmFjayA9ICgpID0+IHtcbiAgICBsZXQgdGFyZ2V0MiA9IGdldFRhcmdldChleHByZXNzaW9uKTtcbiAgICBtdXRhdGVEb20oKCkgPT4ge1xuICAgICAgcGxhY2VJbkRvbShlbC5feF90ZWxlcG9ydCwgdGFyZ2V0MiwgbW9kaWZpZXJzKTtcbiAgICB9KTtcbiAgfTtcbiAgY2xlYW51cDIoKCkgPT4gY2xvbmUyLnJlbW92ZSgpKTtcbn0pO1xudmFyIHRlbGVwb3J0Q29udGFpbmVyRHVyaW5nQ2xvbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KGV4cHJlc3Npb24pIHtcbiAgbGV0IHRhcmdldCA9IHNraXBEdXJpbmdDbG9uZSgoKSA9PiB7XG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZXhwcmVzc2lvbik7XG4gIH0sICgpID0+IHtcbiAgICByZXR1cm4gdGVsZXBvcnRDb250YWluZXJEdXJpbmdDbG9uZTtcbiAgfSkoKTtcbiAgaWYgKCF0YXJnZXQpXG4gICAgd2FybihgQ2Fubm90IGZpbmQgeC10ZWxlcG9ydCBlbGVtZW50IGZvciBzZWxlY3RvcjogXCIke2V4cHJlc3Npb259XCJgKTtcbiAgcmV0dXJuIHRhcmdldDtcbn1cblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL2RpcmVjdGl2ZXMveC1pZ25vcmUuanNcbnZhciBoYW5kbGVyID0gKCkgPT4ge1xufTtcbmhhbmRsZXIuaW5saW5lID0gKGVsLCB7IG1vZGlmaWVycyB9LCB7IGNsZWFudXA6IGNsZWFudXAyIH0pID0+IHtcbiAgbW9kaWZpZXJzLmluY2x1ZGVzKFwic2VsZlwiKSA/IGVsLl94X2lnbm9yZVNlbGYgPSB0cnVlIDogZWwuX3hfaWdub3JlID0gdHJ1ZTtcbiAgY2xlYW51cDIoKCkgPT4ge1xuICAgIG1vZGlmaWVycy5pbmNsdWRlcyhcInNlbGZcIikgPyBkZWxldGUgZWwuX3hfaWdub3JlU2VsZiA6IGRlbGV0ZSBlbC5feF9pZ25vcmU7XG4gIH0pO1xufTtcbmRpcmVjdGl2ZShcImlnbm9yZVwiLCBoYW5kbGVyKTtcblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL2RpcmVjdGl2ZXMveC1lZmZlY3QuanNcbmRpcmVjdGl2ZShcImVmZmVjdFwiLCBza2lwRHVyaW5nQ2xvbmUoKGVsLCB7IGV4cHJlc3Npb24gfSwgeyBlZmZlY3Q6IGVmZmVjdDMgfSkgPT4ge1xuICBlZmZlY3QzKGV2YWx1YXRlTGF0ZXIoZWwsIGV4cHJlc3Npb24pKTtcbn0pKTtcblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL3V0aWxzL29uLmpzXG5mdW5jdGlvbiBvbihlbCwgZXZlbnQsIG1vZGlmaWVycywgY2FsbGJhY2spIHtcbiAgbGV0IGxpc3RlbmVyVGFyZ2V0ID0gZWw7XG4gIGxldCBoYW5kbGVyNCA9IChlKSA9PiBjYWxsYmFjayhlKTtcbiAgbGV0IG9wdGlvbnMgPSB7fTtcbiAgbGV0IHdyYXBIYW5kbGVyID0gKGNhbGxiYWNrMiwgd3JhcHBlcikgPT4gKGUpID0+IHdyYXBwZXIoY2FsbGJhY2syLCBlKTtcbiAgaWYgKG1vZGlmaWVycy5pbmNsdWRlcyhcImRvdFwiKSlcbiAgICBldmVudCA9IGRvdFN5bnRheChldmVudCk7XG4gIGlmIChtb2RpZmllcnMuaW5jbHVkZXMoXCJjYW1lbFwiKSlcbiAgICBldmVudCA9IGNhbWVsQ2FzZTIoZXZlbnQpO1xuICBpZiAobW9kaWZpZXJzLmluY2x1ZGVzKFwicGFzc2l2ZVwiKSlcbiAgICBvcHRpb25zLnBhc3NpdmUgPSB0cnVlO1xuICBpZiAobW9kaWZpZXJzLmluY2x1ZGVzKFwiY2FwdHVyZVwiKSlcbiAgICBvcHRpb25zLmNhcHR1cmUgPSB0cnVlO1xuICBpZiAobW9kaWZpZXJzLmluY2x1ZGVzKFwid2luZG93XCIpKVxuICAgIGxpc3RlbmVyVGFyZ2V0ID0gd2luZG93O1xuICBpZiAobW9kaWZpZXJzLmluY2x1ZGVzKFwiZG9jdW1lbnRcIikpXG4gICAgbGlzdGVuZXJUYXJnZXQgPSBkb2N1bWVudDtcbiAgaWYgKG1vZGlmaWVycy5pbmNsdWRlcyhcImRlYm91bmNlXCIpKSB7XG4gICAgbGV0IG5leHRNb2RpZmllciA9IG1vZGlmaWVyc1ttb2RpZmllcnMuaW5kZXhPZihcImRlYm91bmNlXCIpICsgMV0gfHwgXCJpbnZhbGlkLXdhaXRcIjtcbiAgICBsZXQgd2FpdCA9IGlzTnVtZXJpYyhuZXh0TW9kaWZpZXIuc3BsaXQoXCJtc1wiKVswXSkgPyBOdW1iZXIobmV4dE1vZGlmaWVyLnNwbGl0KFwibXNcIilbMF0pIDogMjUwO1xuICAgIGhhbmRsZXI0ID0gZGVib3VuY2UoaGFuZGxlcjQsIHdhaXQpO1xuICB9XG4gIGlmIChtb2RpZmllcnMuaW5jbHVkZXMoXCJ0aHJvdHRsZVwiKSkge1xuICAgIGxldCBuZXh0TW9kaWZpZXIgPSBtb2RpZmllcnNbbW9kaWZpZXJzLmluZGV4T2YoXCJ0aHJvdHRsZVwiKSArIDFdIHx8IFwiaW52YWxpZC13YWl0XCI7XG4gICAgbGV0IHdhaXQgPSBpc051bWVyaWMobmV4dE1vZGlmaWVyLnNwbGl0KFwibXNcIilbMF0pID8gTnVtYmVyKG5leHRNb2RpZmllci5zcGxpdChcIm1zXCIpWzBdKSA6IDI1MDtcbiAgICBoYW5kbGVyNCA9IHRocm90dGxlKGhhbmRsZXI0LCB3YWl0KTtcbiAgfVxuICBpZiAobW9kaWZpZXJzLmluY2x1ZGVzKFwicHJldmVudFwiKSlcbiAgICBoYW5kbGVyNCA9IHdyYXBIYW5kbGVyKGhhbmRsZXI0LCAobmV4dCwgZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgbmV4dChlKTtcbiAgICB9KTtcbiAgaWYgKG1vZGlmaWVycy5pbmNsdWRlcyhcInN0b3BcIikpXG4gICAgaGFuZGxlcjQgPSB3cmFwSGFuZGxlcihoYW5kbGVyNCwgKG5leHQsIGUpID0+IHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBuZXh0KGUpO1xuICAgIH0pO1xuICBpZiAobW9kaWZpZXJzLmluY2x1ZGVzKFwic2VsZlwiKSlcbiAgICBoYW5kbGVyNCA9IHdyYXBIYW5kbGVyKGhhbmRsZXI0LCAobmV4dCwgZSkgPT4ge1xuICAgICAgZS50YXJnZXQgPT09IGVsICYmIG5leHQoZSk7XG4gICAgfSk7XG4gIGlmIChtb2RpZmllcnMuaW5jbHVkZXMoXCJhd2F5XCIpIHx8IG1vZGlmaWVycy5pbmNsdWRlcyhcIm91dHNpZGVcIikpIHtcbiAgICBsaXN0ZW5lclRhcmdldCA9IGRvY3VtZW50O1xuICAgIGhhbmRsZXI0ID0gd3JhcEhhbmRsZXIoaGFuZGxlcjQsIChuZXh0LCBlKSA9PiB7XG4gICAgICBpZiAoZWwuY29udGFpbnMoZS50YXJnZXQpKVxuICAgICAgICByZXR1cm47XG4gICAgICBpZiAoZS50YXJnZXQuaXNDb25uZWN0ZWQgPT09IGZhbHNlKVxuICAgICAgICByZXR1cm47XG4gICAgICBpZiAoZWwub2Zmc2V0V2lkdGggPCAxICYmIGVsLm9mZnNldEhlaWdodCA8IDEpXG4gICAgICAgIHJldHVybjtcbiAgICAgIGlmIChlbC5feF9pc1Nob3duID09PSBmYWxzZSlcbiAgICAgICAgcmV0dXJuO1xuICAgICAgbmV4dChlKTtcbiAgICB9KTtcbiAgfVxuICBpZiAobW9kaWZpZXJzLmluY2x1ZGVzKFwib25jZVwiKSkge1xuICAgIGhhbmRsZXI0ID0gd3JhcEhhbmRsZXIoaGFuZGxlcjQsIChuZXh0LCBlKSA9PiB7XG4gICAgICBuZXh0KGUpO1xuICAgICAgbGlzdGVuZXJUYXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgaGFuZGxlcjQsIG9wdGlvbnMpO1xuICAgIH0pO1xuICB9XG4gIGhhbmRsZXI0ID0gd3JhcEhhbmRsZXIoaGFuZGxlcjQsIChuZXh0LCBlKSA9PiB7XG4gICAgaWYgKGlzS2V5RXZlbnQoZXZlbnQpKSB7XG4gICAgICBpZiAoaXNMaXN0ZW5pbmdGb3JBU3BlY2lmaWNLZXlUaGF0SGFzbnRCZWVuUHJlc3NlZChlLCBtb2RpZmllcnMpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gICAgbmV4dChlKTtcbiAgfSk7XG4gIGxpc3RlbmVyVGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGhhbmRsZXI0LCBvcHRpb25zKTtcbiAgcmV0dXJuICgpID0+IHtcbiAgICBsaXN0ZW5lclRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVyNCwgb3B0aW9ucyk7XG4gIH07XG59XG5mdW5jdGlvbiBkb3RTeW50YXgoc3ViamVjdCkge1xuICByZXR1cm4gc3ViamVjdC5yZXBsYWNlKC8tL2csIFwiLlwiKTtcbn1cbmZ1bmN0aW9uIGNhbWVsQ2FzZTIoc3ViamVjdCkge1xuICByZXR1cm4gc3ViamVjdC50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoLy0oXFx3KS9nLCAobWF0Y2gsIGNoYXIpID0+IGNoYXIudG9VcHBlckNhc2UoKSk7XG59XG5mdW5jdGlvbiBpc051bWVyaWMoc3ViamVjdCkge1xuICByZXR1cm4gIUFycmF5LmlzQXJyYXkoc3ViamVjdCkgJiYgIWlzTmFOKHN1YmplY3QpO1xufVxuZnVuY3Rpb24ga2ViYWJDYXNlMihzdWJqZWN0KSB7XG4gIGlmIChbXCIgXCIsIFwiX1wiXS5pbmNsdWRlcyhcbiAgICBzdWJqZWN0XG4gICkpXG4gICAgcmV0dXJuIHN1YmplY3Q7XG4gIHJldHVybiBzdWJqZWN0LnJlcGxhY2UoLyhbYS16XSkoW0EtWl0pL2csIFwiJDEtJDJcIikucmVwbGFjZSgvW19cXHNdLywgXCItXCIpLnRvTG93ZXJDYXNlKCk7XG59XG5mdW5jdGlvbiBpc0tleUV2ZW50KGV2ZW50KSB7XG4gIHJldHVybiBbXCJrZXlkb3duXCIsIFwia2V5dXBcIl0uaW5jbHVkZXMoZXZlbnQpO1xufVxuZnVuY3Rpb24gaXNMaXN0ZW5pbmdGb3JBU3BlY2lmaWNLZXlUaGF0SGFzbnRCZWVuUHJlc3NlZChlLCBtb2RpZmllcnMpIHtcbiAgbGV0IGtleU1vZGlmaWVycyA9IG1vZGlmaWVycy5maWx0ZXIoKGkpID0+IHtcbiAgICByZXR1cm4gIVtcIndpbmRvd1wiLCBcImRvY3VtZW50XCIsIFwicHJldmVudFwiLCBcInN0b3BcIiwgXCJvbmNlXCIsIFwiY2FwdHVyZVwiXS5pbmNsdWRlcyhpKTtcbiAgfSk7XG4gIGlmIChrZXlNb2RpZmllcnMuaW5jbHVkZXMoXCJkZWJvdW5jZVwiKSkge1xuICAgIGxldCBkZWJvdW5jZUluZGV4ID0ga2V5TW9kaWZpZXJzLmluZGV4T2YoXCJkZWJvdW5jZVwiKTtcbiAgICBrZXlNb2RpZmllcnMuc3BsaWNlKGRlYm91bmNlSW5kZXgsIGlzTnVtZXJpYygoa2V5TW9kaWZpZXJzW2RlYm91bmNlSW5kZXggKyAxXSB8fCBcImludmFsaWQtd2FpdFwiKS5zcGxpdChcIm1zXCIpWzBdKSA/IDIgOiAxKTtcbiAgfVxuICBpZiAoa2V5TW9kaWZpZXJzLmluY2x1ZGVzKFwidGhyb3R0bGVcIikpIHtcbiAgICBsZXQgZGVib3VuY2VJbmRleCA9IGtleU1vZGlmaWVycy5pbmRleE9mKFwidGhyb3R0bGVcIik7XG4gICAga2V5TW9kaWZpZXJzLnNwbGljZShkZWJvdW5jZUluZGV4LCBpc051bWVyaWMoKGtleU1vZGlmaWVyc1tkZWJvdW5jZUluZGV4ICsgMV0gfHwgXCJpbnZhbGlkLXdhaXRcIikuc3BsaXQoXCJtc1wiKVswXSkgPyAyIDogMSk7XG4gIH1cbiAgaWYgKGtleU1vZGlmaWVycy5sZW5ndGggPT09IDApXG4gICAgcmV0dXJuIGZhbHNlO1xuICBpZiAoa2V5TW9kaWZpZXJzLmxlbmd0aCA9PT0gMSAmJiBrZXlUb01vZGlmaWVycyhlLmtleSkuaW5jbHVkZXMoa2V5TW9kaWZpZXJzWzBdKSlcbiAgICByZXR1cm4gZmFsc2U7XG4gIGNvbnN0IHN5c3RlbUtleU1vZGlmaWVycyA9IFtcImN0cmxcIiwgXCJzaGlmdFwiLCBcImFsdFwiLCBcIm1ldGFcIiwgXCJjbWRcIiwgXCJzdXBlclwiXTtcbiAgY29uc3Qgc2VsZWN0ZWRTeXN0ZW1LZXlNb2RpZmllcnMgPSBzeXN0ZW1LZXlNb2RpZmllcnMuZmlsdGVyKChtb2RpZmllcikgPT4ga2V5TW9kaWZpZXJzLmluY2x1ZGVzKG1vZGlmaWVyKSk7XG4gIGtleU1vZGlmaWVycyA9IGtleU1vZGlmaWVycy5maWx0ZXIoKGkpID0+ICFzZWxlY3RlZFN5c3RlbUtleU1vZGlmaWVycy5pbmNsdWRlcyhpKSk7XG4gIGlmIChzZWxlY3RlZFN5c3RlbUtleU1vZGlmaWVycy5sZW5ndGggPiAwKSB7XG4gICAgY29uc3QgYWN0aXZlbHlQcmVzc2VkS2V5TW9kaWZpZXJzID0gc2VsZWN0ZWRTeXN0ZW1LZXlNb2RpZmllcnMuZmlsdGVyKChtb2RpZmllcikgPT4ge1xuICAgICAgaWYgKG1vZGlmaWVyID09PSBcImNtZFwiIHx8IG1vZGlmaWVyID09PSBcInN1cGVyXCIpXG4gICAgICAgIG1vZGlmaWVyID0gXCJtZXRhXCI7XG4gICAgICByZXR1cm4gZVtgJHttb2RpZmllcn1LZXlgXTtcbiAgICB9KTtcbiAgICBpZiAoYWN0aXZlbHlQcmVzc2VkS2V5TW9kaWZpZXJzLmxlbmd0aCA9PT0gc2VsZWN0ZWRTeXN0ZW1LZXlNb2RpZmllcnMubGVuZ3RoKSB7XG4gICAgICBpZiAoa2V5VG9Nb2RpZmllcnMoZS5rZXkpLmluY2x1ZGVzKGtleU1vZGlmaWVyc1swXSkpXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5mdW5jdGlvbiBrZXlUb01vZGlmaWVycyhrZXkpIHtcbiAgaWYgKCFrZXkpXG4gICAgcmV0dXJuIFtdO1xuICBrZXkgPSBrZWJhYkNhc2UyKGtleSk7XG4gIGxldCBtb2RpZmllclRvS2V5TWFwID0ge1xuICAgIFwiY3RybFwiOiBcImNvbnRyb2xcIixcbiAgICBcInNsYXNoXCI6IFwiL1wiLFxuICAgIFwic3BhY2VcIjogXCIgXCIsXG4gICAgXCJzcGFjZWJhclwiOiBcIiBcIixcbiAgICBcImNtZFwiOiBcIm1ldGFcIixcbiAgICBcImVzY1wiOiBcImVzY2FwZVwiLFxuICAgIFwidXBcIjogXCJhcnJvdy11cFwiLFxuICAgIFwiZG93blwiOiBcImFycm93LWRvd25cIixcbiAgICBcImxlZnRcIjogXCJhcnJvdy1sZWZ0XCIsXG4gICAgXCJyaWdodFwiOiBcImFycm93LXJpZ2h0XCIsXG4gICAgXCJwZXJpb2RcIjogXCIuXCIsXG4gICAgXCJlcXVhbFwiOiBcIj1cIixcbiAgICBcIm1pbnVzXCI6IFwiLVwiLFxuICAgIFwidW5kZXJzY29yZVwiOiBcIl9cIlxuICB9O1xuICBtb2RpZmllclRvS2V5TWFwW2tleV0gPSBrZXk7XG4gIHJldHVybiBPYmplY3Qua2V5cyhtb2RpZmllclRvS2V5TWFwKS5tYXAoKG1vZGlmaWVyKSA9PiB7XG4gICAgaWYgKG1vZGlmaWVyVG9LZXlNYXBbbW9kaWZpZXJdID09PSBrZXkpXG4gICAgICByZXR1cm4gbW9kaWZpZXI7XG4gIH0pLmZpbHRlcigobW9kaWZpZXIpID0+IG1vZGlmaWVyKTtcbn1cblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL2RpcmVjdGl2ZXMveC1tb2RlbC5qc1xuZGlyZWN0aXZlKFwibW9kZWxcIiwgKGVsLCB7IG1vZGlmaWVycywgZXhwcmVzc2lvbiB9LCB7IGVmZmVjdDogZWZmZWN0MywgY2xlYW51cDogY2xlYW51cDIgfSkgPT4ge1xuICBsZXQgc2NvcGVUYXJnZXQgPSBlbDtcbiAgaWYgKG1vZGlmaWVycy5pbmNsdWRlcyhcInBhcmVudFwiKSkge1xuICAgIHNjb3BlVGFyZ2V0ID0gZWwucGFyZW50Tm9kZTtcbiAgfVxuICBsZXQgZXZhbHVhdGVHZXQgPSBldmFsdWF0ZUxhdGVyKHNjb3BlVGFyZ2V0LCBleHByZXNzaW9uKTtcbiAgbGV0IGV2YWx1YXRlU2V0O1xuICBpZiAodHlwZW9mIGV4cHJlc3Npb24gPT09IFwic3RyaW5nXCIpIHtcbiAgICBldmFsdWF0ZVNldCA9IGV2YWx1YXRlTGF0ZXIoc2NvcGVUYXJnZXQsIGAke2V4cHJlc3Npb259ID0gX19wbGFjZWhvbGRlcmApO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBleHByZXNzaW9uID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIGV4cHJlc3Npb24oKSA9PT0gXCJzdHJpbmdcIikge1xuICAgIGV2YWx1YXRlU2V0ID0gZXZhbHVhdGVMYXRlcihzY29wZVRhcmdldCwgYCR7ZXhwcmVzc2lvbigpfSA9IF9fcGxhY2Vob2xkZXJgKTtcbiAgfSBlbHNlIHtcbiAgICBldmFsdWF0ZVNldCA9ICgpID0+IHtcbiAgICB9O1xuICB9XG4gIGxldCBnZXRWYWx1ZSA9ICgpID0+IHtcbiAgICBsZXQgcmVzdWx0O1xuICAgIGV2YWx1YXRlR2V0KCh2YWx1ZSkgPT4gcmVzdWx0ID0gdmFsdWUpO1xuICAgIHJldHVybiBpc0dldHRlclNldHRlcihyZXN1bHQpID8gcmVzdWx0LmdldCgpIDogcmVzdWx0O1xuICB9O1xuICBsZXQgc2V0VmFsdWUgPSAodmFsdWUpID0+IHtcbiAgICBsZXQgcmVzdWx0O1xuICAgIGV2YWx1YXRlR2V0KCh2YWx1ZTIpID0+IHJlc3VsdCA9IHZhbHVlMik7XG4gICAgaWYgKGlzR2V0dGVyU2V0dGVyKHJlc3VsdCkpIHtcbiAgICAgIHJlc3VsdC5zZXQodmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBldmFsdWF0ZVNldCgoKSA9PiB7XG4gICAgICB9LCB7XG4gICAgICAgIHNjb3BlOiB7IFwiX19wbGFjZWhvbGRlclwiOiB2YWx1ZSB9XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG4gIGlmICh0eXBlb2YgZXhwcmVzc2lvbiA9PT0gXCJzdHJpbmdcIiAmJiBlbC50eXBlID09PSBcInJhZGlvXCIpIHtcbiAgICBtdXRhdGVEb20oKCkgPT4ge1xuICAgICAgaWYgKCFlbC5oYXNBdHRyaWJ1dGUoXCJuYW1lXCIpKVxuICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIGV4cHJlc3Npb24pO1xuICAgIH0pO1xuICB9XG4gIHZhciBldmVudCA9IGVsLnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gXCJzZWxlY3RcIiB8fCBbXCJjaGVja2JveFwiLCBcInJhZGlvXCJdLmluY2x1ZGVzKGVsLnR5cGUpIHx8IG1vZGlmaWVycy5pbmNsdWRlcyhcImxhenlcIikgPyBcImNoYW5nZVwiIDogXCJpbnB1dFwiO1xuICBsZXQgcmVtb3ZlTGlzdGVuZXIgPSBpc0Nsb25pbmcgPyAoKSA9PiB7XG4gIH0gOiBvbihlbCwgZXZlbnQsIG1vZGlmaWVycywgKGUpID0+IHtcbiAgICBzZXRWYWx1ZShnZXRJbnB1dFZhbHVlKGVsLCBtb2RpZmllcnMsIGUsIGdldFZhbHVlKCkpKTtcbiAgfSk7XG4gIGlmIChtb2RpZmllcnMuaW5jbHVkZXMoXCJmaWxsXCIpKSB7XG4gICAgaWYgKFtudWxsLCBcIlwiXS5pbmNsdWRlcyhnZXRWYWx1ZSgpKSB8fCBlbC50eXBlID09PSBcImNoZWNrYm94XCIgJiYgQXJyYXkuaXNBcnJheShnZXRWYWx1ZSgpKSkge1xuICAgICAgZWwuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoZXZlbnQsIHt9KSk7XG4gICAgfVxuICB9XG4gIGlmICghZWwuX3hfcmVtb3ZlTW9kZWxMaXN0ZW5lcnMpXG4gICAgZWwuX3hfcmVtb3ZlTW9kZWxMaXN0ZW5lcnMgPSB7fTtcbiAgZWwuX3hfcmVtb3ZlTW9kZWxMaXN0ZW5lcnNbXCJkZWZhdWx0XCJdID0gcmVtb3ZlTGlzdGVuZXI7XG4gIGNsZWFudXAyKCgpID0+IGVsLl94X3JlbW92ZU1vZGVsTGlzdGVuZXJzW1wiZGVmYXVsdFwiXSgpKTtcbiAgaWYgKGVsLmZvcm0pIHtcbiAgICBsZXQgcmVtb3ZlUmVzZXRMaXN0ZW5lciA9IG9uKGVsLmZvcm0sIFwicmVzZXRcIiwgW10sIChlKSA9PiB7XG4gICAgICBuZXh0VGljaygoKSA9PiBlbC5feF9tb2RlbCAmJiBlbC5feF9tb2RlbC5zZXQoZWwudmFsdWUpKTtcbiAgICB9KTtcbiAgICBjbGVhbnVwMigoKSA9PiByZW1vdmVSZXNldExpc3RlbmVyKCkpO1xuICB9XG4gIGVsLl94X21vZGVsID0ge1xuICAgIGdldCgpIHtcbiAgICAgIHJldHVybiBnZXRWYWx1ZSgpO1xuICAgIH0sXG4gICAgc2V0KHZhbHVlKSB7XG4gICAgICBzZXRWYWx1ZSh2YWx1ZSk7XG4gICAgfVxuICB9O1xuICBlbC5feF9mb3JjZU1vZGVsVXBkYXRlID0gKHZhbHVlKSA9PiB7XG4gICAgaWYgKHZhbHVlID09PSB2b2lkIDAgJiYgdHlwZW9mIGV4cHJlc3Npb24gPT09IFwic3RyaW5nXCIgJiYgZXhwcmVzc2lvbi5tYXRjaCgvXFwuLykpXG4gICAgICB2YWx1ZSA9IFwiXCI7XG4gICAgd2luZG93LmZyb21Nb2RlbCA9IHRydWU7XG4gICAgbXV0YXRlRG9tKCgpID0+IGJpbmQoZWwsIFwidmFsdWVcIiwgdmFsdWUpKTtcbiAgICBkZWxldGUgd2luZG93LmZyb21Nb2RlbDtcbiAgfTtcbiAgZWZmZWN0MygoKSA9PiB7XG4gICAgbGV0IHZhbHVlID0gZ2V0VmFsdWUoKTtcbiAgICBpZiAobW9kaWZpZXJzLmluY2x1ZGVzKFwidW5pbnRydXNpdmVcIikgJiYgZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5pc1NhbWVOb2RlKGVsKSlcbiAgICAgIHJldHVybjtcbiAgICBlbC5feF9mb3JjZU1vZGVsVXBkYXRlKHZhbHVlKTtcbiAgfSk7XG59KTtcbmZ1bmN0aW9uIGdldElucHV0VmFsdWUoZWwsIG1vZGlmaWVycywgZXZlbnQsIGN1cnJlbnRWYWx1ZSkge1xuICByZXR1cm4gbXV0YXRlRG9tKCgpID0+IHtcbiAgICBpZiAoZXZlbnQgaW5zdGFuY2VvZiBDdXN0b21FdmVudCAmJiBldmVudC5kZXRhaWwgIT09IHZvaWQgMClcbiAgICAgIHJldHVybiBldmVudC5kZXRhaWwgIT09IG51bGwgJiYgZXZlbnQuZGV0YWlsICE9PSB2b2lkIDAgPyBldmVudC5kZXRhaWwgOiBldmVudC50YXJnZXQudmFsdWU7XG4gICAgZWxzZSBpZiAoZWwudHlwZSA9PT0gXCJjaGVja2JveFwiKSB7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShjdXJyZW50VmFsdWUpKSB7XG4gICAgICAgIGxldCBuZXdWYWx1ZSA9IG51bGw7XG4gICAgICAgIGlmIChtb2RpZmllcnMuaW5jbHVkZXMoXCJudW1iZXJcIikpIHtcbiAgICAgICAgICBuZXdWYWx1ZSA9IHNhZmVQYXJzZU51bWJlcihldmVudC50YXJnZXQudmFsdWUpO1xuICAgICAgICB9IGVsc2UgaWYgKG1vZGlmaWVycy5pbmNsdWRlcyhcImJvb2xlYW5cIikpIHtcbiAgICAgICAgICBuZXdWYWx1ZSA9IHNhZmVQYXJzZUJvb2xlYW4oZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBuZXdWYWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZXZlbnQudGFyZ2V0LmNoZWNrZWQgPyBjdXJyZW50VmFsdWUuY29uY2F0KFtuZXdWYWx1ZV0pIDogY3VycmVudFZhbHVlLmZpbHRlcigoZWwyKSA9PiAhY2hlY2tlZEF0dHJMb29zZUNvbXBhcmUyKGVsMiwgbmV3VmFsdWUpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBldmVudC50YXJnZXQuY2hlY2tlZDtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGVsLnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gXCJzZWxlY3RcIiAmJiBlbC5tdWx0aXBsZSkge1xuICAgICAgaWYgKG1vZGlmaWVycy5pbmNsdWRlcyhcIm51bWJlclwiKSkge1xuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbShldmVudC50YXJnZXQuc2VsZWN0ZWRPcHRpb25zKS5tYXAoKG9wdGlvbikgPT4ge1xuICAgICAgICAgIGxldCByYXdWYWx1ZSA9IG9wdGlvbi52YWx1ZSB8fCBvcHRpb24udGV4dDtcbiAgICAgICAgICByZXR1cm4gc2FmZVBhcnNlTnVtYmVyKHJhd1ZhbHVlKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYgKG1vZGlmaWVycy5pbmNsdWRlcyhcImJvb2xlYW5cIikpIHtcbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20oZXZlbnQudGFyZ2V0LnNlbGVjdGVkT3B0aW9ucykubWFwKChvcHRpb24pID0+IHtcbiAgICAgICAgICBsZXQgcmF3VmFsdWUgPSBvcHRpb24udmFsdWUgfHwgb3B0aW9uLnRleHQ7XG4gICAgICAgICAgcmV0dXJuIHNhZmVQYXJzZUJvb2xlYW4ocmF3VmFsdWUpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBBcnJheS5mcm9tKGV2ZW50LnRhcmdldC5zZWxlY3RlZE9wdGlvbnMpLm1hcCgob3B0aW9uKSA9PiB7XG4gICAgICAgIHJldHVybiBvcHRpb24udmFsdWUgfHwgb3B0aW9uLnRleHQ7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKG1vZGlmaWVycy5pbmNsdWRlcyhcIm51bWJlclwiKSkge1xuICAgICAgICByZXR1cm4gc2FmZVBhcnNlTnVtYmVyKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgICB9IGVsc2UgaWYgKG1vZGlmaWVycy5pbmNsdWRlcyhcImJvb2xlYW5cIikpIHtcbiAgICAgICAgcmV0dXJuIHNhZmVQYXJzZUJvb2xlYW4oZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBtb2RpZmllcnMuaW5jbHVkZXMoXCJ0cmltXCIpID8gZXZlbnQudGFyZ2V0LnZhbHVlLnRyaW0oKSA6IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICB9XG4gIH0pO1xufVxuZnVuY3Rpb24gc2FmZVBhcnNlTnVtYmVyKHJhd1ZhbHVlKSB7XG4gIGxldCBudW1iZXIgPSByYXdWYWx1ZSA/IHBhcnNlRmxvYXQocmF3VmFsdWUpIDogbnVsbDtcbiAgcmV0dXJuIGlzTnVtZXJpYzIobnVtYmVyKSA/IG51bWJlciA6IHJhd1ZhbHVlO1xufVxuZnVuY3Rpb24gY2hlY2tlZEF0dHJMb29zZUNvbXBhcmUyKHZhbHVlQSwgdmFsdWVCKSB7XG4gIHJldHVybiB2YWx1ZUEgPT0gdmFsdWVCO1xufVxuZnVuY3Rpb24gaXNOdW1lcmljMihzdWJqZWN0KSB7XG4gIHJldHVybiAhQXJyYXkuaXNBcnJheShzdWJqZWN0KSAmJiAhaXNOYU4oc3ViamVjdCk7XG59XG5mdW5jdGlvbiBpc0dldHRlclNldHRlcih2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT09IG51bGwgJiYgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiB2YWx1ZS5nZXQgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgdmFsdWUuc2V0ID09PSBcImZ1bmN0aW9uXCI7XG59XG5cbi8vIHBhY2thZ2VzL2FscGluZWpzL3NyYy9kaXJlY3RpdmVzL3gtY2xvYWsuanNcbmRpcmVjdGl2ZShcImNsb2FrXCIsIChlbCkgPT4gcXVldWVNaWNyb3Rhc2soKCkgPT4gbXV0YXRlRG9tKCgpID0+IGVsLnJlbW92ZUF0dHJpYnV0ZShwcmVmaXgoXCJjbG9ha1wiKSkpKSk7XG5cbi8vIHBhY2thZ2VzL2FscGluZWpzL3NyYy9kaXJlY3RpdmVzL3gtaW5pdC5qc1xuYWRkSW5pdFNlbGVjdG9yKCgpID0+IGBbJHtwcmVmaXgoXCJpbml0XCIpfV1gKTtcbmRpcmVjdGl2ZShcImluaXRcIiwgc2tpcER1cmluZ0Nsb25lKChlbCwgeyBleHByZXNzaW9uIH0sIHsgZXZhbHVhdGU6IGV2YWx1YXRlMiB9KSA9PiB7XG4gIGlmICh0eXBlb2YgZXhwcmVzc2lvbiA9PT0gXCJzdHJpbmdcIikge1xuICAgIHJldHVybiAhIWV4cHJlc3Npb24udHJpbSgpICYmIGV2YWx1YXRlMihleHByZXNzaW9uLCB7fSwgZmFsc2UpO1xuICB9XG4gIHJldHVybiBldmFsdWF0ZTIoZXhwcmVzc2lvbiwge30sIGZhbHNlKTtcbn0pKTtcblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL2RpcmVjdGl2ZXMveC10ZXh0LmpzXG5kaXJlY3RpdmUoXCJ0ZXh0XCIsIChlbCwgeyBleHByZXNzaW9uIH0sIHsgZWZmZWN0OiBlZmZlY3QzLCBldmFsdWF0ZUxhdGVyOiBldmFsdWF0ZUxhdGVyMiB9KSA9PiB7XG4gIGxldCBldmFsdWF0ZTIgPSBldmFsdWF0ZUxhdGVyMihleHByZXNzaW9uKTtcbiAgZWZmZWN0MygoKSA9PiB7XG4gICAgZXZhbHVhdGUyKCh2YWx1ZSkgPT4ge1xuICAgICAgbXV0YXRlRG9tKCgpID0+IHtcbiAgICAgICAgZWwudGV4dENvbnRlbnQgPSB2YWx1ZTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9KTtcbn0pO1xuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvZGlyZWN0aXZlcy94LWh0bWwuanNcbmRpcmVjdGl2ZShcImh0bWxcIiwgKGVsLCB7IGV4cHJlc3Npb24gfSwgeyBlZmZlY3Q6IGVmZmVjdDMsIGV2YWx1YXRlTGF0ZXI6IGV2YWx1YXRlTGF0ZXIyIH0pID0+IHtcbiAgbGV0IGV2YWx1YXRlMiA9IGV2YWx1YXRlTGF0ZXIyKGV4cHJlc3Npb24pO1xuICBlZmZlY3QzKCgpID0+IHtcbiAgICBldmFsdWF0ZTIoKHZhbHVlKSA9PiB7XG4gICAgICBtdXRhdGVEb20oKCkgPT4ge1xuICAgICAgICBlbC5pbm5lckhUTUwgPSB2YWx1ZTtcbiAgICAgICAgZWwuX3hfaWdub3JlU2VsZiA9IHRydWU7XG4gICAgICAgIGluaXRUcmVlKGVsKTtcbiAgICAgICAgZGVsZXRlIGVsLl94X2lnbm9yZVNlbGY7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSk7XG59KTtcblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL2RpcmVjdGl2ZXMveC1iaW5kLmpzXG5tYXBBdHRyaWJ1dGVzKHN0YXJ0aW5nV2l0aChcIjpcIiwgaW50byhwcmVmaXgoXCJiaW5kOlwiKSkpKTtcbnZhciBoYW5kbGVyMiA9IChlbCwgeyB2YWx1ZSwgbW9kaWZpZXJzLCBleHByZXNzaW9uLCBvcmlnaW5hbCB9LCB7IGVmZmVjdDogZWZmZWN0MyB9KSA9PiB7XG4gIGlmICghdmFsdWUpIHtcbiAgICBsZXQgYmluZGluZ1Byb3ZpZGVycyA9IHt9O1xuICAgIGluamVjdEJpbmRpbmdQcm92aWRlcnMoYmluZGluZ1Byb3ZpZGVycyk7XG4gICAgbGV0IGdldEJpbmRpbmdzID0gZXZhbHVhdGVMYXRlcihlbCwgZXhwcmVzc2lvbik7XG4gICAgZ2V0QmluZGluZ3MoKGJpbmRpbmdzKSA9PiB7XG4gICAgICBhcHBseUJpbmRpbmdzT2JqZWN0KGVsLCBiaW5kaW5ncywgb3JpZ2luYWwpO1xuICAgIH0sIHsgc2NvcGU6IGJpbmRpbmdQcm92aWRlcnMgfSk7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmICh2YWx1ZSA9PT0gXCJrZXlcIilcbiAgICByZXR1cm4gc3RvcmVLZXlGb3JYRm9yKGVsLCBleHByZXNzaW9uKTtcbiAgaWYgKGVsLl94X2lubGluZUJpbmRpbmdzICYmIGVsLl94X2lubGluZUJpbmRpbmdzW3ZhbHVlXSAmJiBlbC5feF9pbmxpbmVCaW5kaW5nc1t2YWx1ZV0uZXh0cmFjdCkge1xuICAgIHJldHVybjtcbiAgfVxuICBsZXQgZXZhbHVhdGUyID0gZXZhbHVhdGVMYXRlcihlbCwgZXhwcmVzc2lvbik7XG4gIGVmZmVjdDMoKCkgPT4gZXZhbHVhdGUyKChyZXN1bHQpID0+IHtcbiAgICBpZiAocmVzdWx0ID09PSB2b2lkIDAgJiYgdHlwZW9mIGV4cHJlc3Npb24gPT09IFwic3RyaW5nXCIgJiYgZXhwcmVzc2lvbi5tYXRjaCgvXFwuLykpIHtcbiAgICAgIHJlc3VsdCA9IFwiXCI7XG4gICAgfVxuICAgIG11dGF0ZURvbSgoKSA9PiBiaW5kKGVsLCB2YWx1ZSwgcmVzdWx0LCBtb2RpZmllcnMpKTtcbiAgfSkpO1xufTtcbmhhbmRsZXIyLmlubGluZSA9IChlbCwgeyB2YWx1ZSwgbW9kaWZpZXJzLCBleHByZXNzaW9uIH0pID0+IHtcbiAgaWYgKCF2YWx1ZSlcbiAgICByZXR1cm47XG4gIGlmICghZWwuX3hfaW5saW5lQmluZGluZ3MpXG4gICAgZWwuX3hfaW5saW5lQmluZGluZ3MgPSB7fTtcbiAgZWwuX3hfaW5saW5lQmluZGluZ3NbdmFsdWVdID0geyBleHByZXNzaW9uLCBleHRyYWN0OiBmYWxzZSB9O1xufTtcbmRpcmVjdGl2ZShcImJpbmRcIiwgaGFuZGxlcjIpO1xuZnVuY3Rpb24gc3RvcmVLZXlGb3JYRm9yKGVsLCBleHByZXNzaW9uKSB7XG4gIGVsLl94X2tleUV4cHJlc3Npb24gPSBleHByZXNzaW9uO1xufVxuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvZGlyZWN0aXZlcy94LWRhdGEuanNcbmFkZFJvb3RTZWxlY3RvcigoKSA9PiBgWyR7cHJlZml4KFwiZGF0YVwiKX1dYCk7XG5kaXJlY3RpdmUoXCJkYXRhXCIsIChlbCwgeyBleHByZXNzaW9uIH0sIHsgY2xlYW51cDogY2xlYW51cDIgfSkgPT4ge1xuICBpZiAoc2hvdWxkU2tpcFJlZ2lzdGVyaW5nRGF0YUR1cmluZ0Nsb25lKGVsKSlcbiAgICByZXR1cm47XG4gIGV4cHJlc3Npb24gPSBleHByZXNzaW9uID09PSBcIlwiID8gXCJ7fVwiIDogZXhwcmVzc2lvbjtcbiAgbGV0IG1hZ2ljQ29udGV4dCA9IHt9O1xuICBpbmplY3RNYWdpY3MobWFnaWNDb250ZXh0LCBlbCk7XG4gIGxldCBkYXRhUHJvdmlkZXJDb250ZXh0ID0ge307XG4gIGluamVjdERhdGFQcm92aWRlcnMoZGF0YVByb3ZpZGVyQ29udGV4dCwgbWFnaWNDb250ZXh0KTtcbiAgbGV0IGRhdGEyID0gZXZhbHVhdGUoZWwsIGV4cHJlc3Npb24sIHsgc2NvcGU6IGRhdGFQcm92aWRlckNvbnRleHQgfSk7XG4gIGlmIChkYXRhMiA9PT0gdm9pZCAwIHx8IGRhdGEyID09PSB0cnVlKVxuICAgIGRhdGEyID0ge307XG4gIGluamVjdE1hZ2ljcyhkYXRhMiwgZWwpO1xuICBsZXQgcmVhY3RpdmVEYXRhID0gcmVhY3RpdmUoZGF0YTIpO1xuICBpbml0SW50ZXJjZXB0b3JzMihyZWFjdGl2ZURhdGEpO1xuICBsZXQgdW5kbyA9IGFkZFNjb3BlVG9Ob2RlKGVsLCByZWFjdGl2ZURhdGEpO1xuICByZWFjdGl2ZURhdGFbXCJpbml0XCJdICYmIGV2YWx1YXRlKGVsLCByZWFjdGl2ZURhdGFbXCJpbml0XCJdKTtcbiAgY2xlYW51cDIoKCkgPT4ge1xuICAgIHJlYWN0aXZlRGF0YVtcImRlc3Ryb3lcIl0gJiYgZXZhbHVhdGUoZWwsIHJlYWN0aXZlRGF0YVtcImRlc3Ryb3lcIl0pO1xuICAgIHVuZG8oKTtcbiAgfSk7XG59KTtcbmludGVyY2VwdENsb25lKChmcm9tLCB0bykgPT4ge1xuICBpZiAoZnJvbS5feF9kYXRhU3RhY2spIHtcbiAgICB0by5feF9kYXRhU3RhY2sgPSBmcm9tLl94X2RhdGFTdGFjaztcbiAgICB0by5zZXRBdHRyaWJ1dGUoXCJkYXRhLWhhcy1hbHBpbmUtc3RhdGVcIiwgdHJ1ZSk7XG4gIH1cbn0pO1xuZnVuY3Rpb24gc2hvdWxkU2tpcFJlZ2lzdGVyaW5nRGF0YUR1cmluZ0Nsb25lKGVsKSB7XG4gIGlmICghaXNDbG9uaW5nKVxuICAgIHJldHVybiBmYWxzZTtcbiAgaWYgKGlzQ2xvbmluZ0xlZ2FjeSlcbiAgICByZXR1cm4gdHJ1ZTtcbiAgcmV0dXJuIGVsLmhhc0F0dHJpYnV0ZShcImRhdGEtaGFzLWFscGluZS1zdGF0ZVwiKTtcbn1cblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL2RpcmVjdGl2ZXMveC1zaG93LmpzXG5kaXJlY3RpdmUoXCJzaG93XCIsIChlbCwgeyBtb2RpZmllcnMsIGV4cHJlc3Npb24gfSwgeyBlZmZlY3Q6IGVmZmVjdDMgfSkgPT4ge1xuICBsZXQgZXZhbHVhdGUyID0gZXZhbHVhdGVMYXRlcihlbCwgZXhwcmVzc2lvbik7XG4gIGlmICghZWwuX3hfZG9IaWRlKVxuICAgIGVsLl94X2RvSGlkZSA9ICgpID0+IHtcbiAgICAgIG11dGF0ZURvbSgoKSA9PiB7XG4gICAgICAgIGVsLnN0eWxlLnNldFByb3BlcnR5KFwiZGlzcGxheVwiLCBcIm5vbmVcIiwgbW9kaWZpZXJzLmluY2x1ZGVzKFwiaW1wb3J0YW50XCIpID8gXCJpbXBvcnRhbnRcIiA6IHZvaWQgMCk7XG4gICAgICB9KTtcbiAgICB9O1xuICBpZiAoIWVsLl94X2RvU2hvdylcbiAgICBlbC5feF9kb1Nob3cgPSAoKSA9PiB7XG4gICAgICBtdXRhdGVEb20oKCkgPT4ge1xuICAgICAgICBpZiAoZWwuc3R5bGUubGVuZ3RoID09PSAxICYmIGVsLnN0eWxlLmRpc3BsYXkgPT09IFwibm9uZVwiKSB7XG4gICAgICAgICAgZWwucmVtb3ZlQXR0cmlidXRlKFwic3R5bGVcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZWwuc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJkaXNwbGF5XCIpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuICBsZXQgaGlkZSA9ICgpID0+IHtcbiAgICBlbC5feF9kb0hpZGUoKTtcbiAgICBlbC5feF9pc1Nob3duID0gZmFsc2U7XG4gIH07XG4gIGxldCBzaG93ID0gKCkgPT4ge1xuICAgIGVsLl94X2RvU2hvdygpO1xuICAgIGVsLl94X2lzU2hvd24gPSB0cnVlO1xuICB9O1xuICBsZXQgY2xpY2tBd2F5Q29tcGF0aWJsZVNob3cgPSAoKSA9PiBzZXRUaW1lb3V0KHNob3cpO1xuICBsZXQgdG9nZ2xlID0gb25jZShcbiAgICAodmFsdWUpID0+IHZhbHVlID8gc2hvdygpIDogaGlkZSgpLFxuICAgICh2YWx1ZSkgPT4ge1xuICAgICAgaWYgKHR5cGVvZiBlbC5feF90b2dnbGVBbmRDYXNjYWRlV2l0aFRyYW5zaXRpb25zID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgZWwuX3hfdG9nZ2xlQW5kQ2FzY2FkZVdpdGhUcmFuc2l0aW9ucyhlbCwgdmFsdWUsIHNob3csIGhpZGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsdWUgPyBjbGlja0F3YXlDb21wYXRpYmxlU2hvdygpIDogaGlkZSgpO1xuICAgICAgfVxuICAgIH1cbiAgKTtcbiAgbGV0IG9sZFZhbHVlO1xuICBsZXQgZmlyc3RUaW1lID0gdHJ1ZTtcbiAgZWZmZWN0MygoKSA9PiBldmFsdWF0ZTIoKHZhbHVlKSA9PiB7XG4gICAgaWYgKCFmaXJzdFRpbWUgJiYgdmFsdWUgPT09IG9sZFZhbHVlKVxuICAgICAgcmV0dXJuO1xuICAgIGlmIChtb2RpZmllcnMuaW5jbHVkZXMoXCJpbW1lZGlhdGVcIikpXG4gICAgICB2YWx1ZSA/IGNsaWNrQXdheUNvbXBhdGlibGVTaG93KCkgOiBoaWRlKCk7XG4gICAgdG9nZ2xlKHZhbHVlKTtcbiAgICBvbGRWYWx1ZSA9IHZhbHVlO1xuICAgIGZpcnN0VGltZSA9IGZhbHNlO1xuICB9KSk7XG59KTtcblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL2RpcmVjdGl2ZXMveC1mb3IuanNcbmRpcmVjdGl2ZShcImZvclwiLCAoZWwsIHsgZXhwcmVzc2lvbiB9LCB7IGVmZmVjdDogZWZmZWN0MywgY2xlYW51cDogY2xlYW51cDIgfSkgPT4ge1xuICBsZXQgaXRlcmF0b3JOYW1lcyA9IHBhcnNlRm9yRXhwcmVzc2lvbihleHByZXNzaW9uKTtcbiAgbGV0IGV2YWx1YXRlSXRlbXMgPSBldmFsdWF0ZUxhdGVyKGVsLCBpdGVyYXRvck5hbWVzLml0ZW1zKTtcbiAgbGV0IGV2YWx1YXRlS2V5ID0gZXZhbHVhdGVMYXRlcihcbiAgICBlbCxcbiAgICAvLyB0aGUgeC1iaW5kOmtleSBleHByZXNzaW9uIGlzIHN0b3JlZCBmb3Igb3VyIHVzZSBpbnN0ZWFkIG9mIGV2YWx1YXRlZC5cbiAgICBlbC5feF9rZXlFeHByZXNzaW9uIHx8IFwiaW5kZXhcIlxuICApO1xuICBlbC5feF9wcmV2S2V5cyA9IFtdO1xuICBlbC5feF9sb29rdXAgPSB7fTtcbiAgZWZmZWN0MygoKSA9PiBsb29wKGVsLCBpdGVyYXRvck5hbWVzLCBldmFsdWF0ZUl0ZW1zLCBldmFsdWF0ZUtleSkpO1xuICBjbGVhbnVwMigoKSA9PiB7XG4gICAgT2JqZWN0LnZhbHVlcyhlbC5feF9sb29rdXApLmZvckVhY2goKGVsMikgPT4gZWwyLnJlbW92ZSgpKTtcbiAgICBkZWxldGUgZWwuX3hfcHJldktleXM7XG4gICAgZGVsZXRlIGVsLl94X2xvb2t1cDtcbiAgfSk7XG59KTtcbmZ1bmN0aW9uIGxvb3AoZWwsIGl0ZXJhdG9yTmFtZXMsIGV2YWx1YXRlSXRlbXMsIGV2YWx1YXRlS2V5KSB7XG4gIGxldCBpc09iamVjdDIgPSAoaSkgPT4gdHlwZW9mIGkgPT09IFwib2JqZWN0XCIgJiYgIUFycmF5LmlzQXJyYXkoaSk7XG4gIGxldCB0ZW1wbGF0ZUVsID0gZWw7XG4gIGV2YWx1YXRlSXRlbXMoKGl0ZW1zKSA9PiB7XG4gICAgaWYgKGlzTnVtZXJpYzMoaXRlbXMpICYmIGl0ZW1zID49IDApIHtcbiAgICAgIGl0ZW1zID0gQXJyYXkuZnJvbShBcnJheShpdGVtcykua2V5cygpLCAoaSkgPT4gaSArIDEpO1xuICAgIH1cbiAgICBpZiAoaXRlbXMgPT09IHZvaWQgMClcbiAgICAgIGl0ZW1zID0gW107XG4gICAgbGV0IGxvb2t1cCA9IGVsLl94X2xvb2t1cDtcbiAgICBsZXQgcHJldktleXMgPSBlbC5feF9wcmV2S2V5cztcbiAgICBsZXQgc2NvcGVzID0gW107XG4gICAgbGV0IGtleXMgPSBbXTtcbiAgICBpZiAoaXNPYmplY3QyKGl0ZW1zKSkge1xuICAgICAgaXRlbXMgPSBPYmplY3QuZW50cmllcyhpdGVtcykubWFwKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgbGV0IHNjb3BlMiA9IGdldEl0ZXJhdGlvblNjb3BlVmFyaWFibGVzKGl0ZXJhdG9yTmFtZXMsIHZhbHVlLCBrZXksIGl0ZW1zKTtcbiAgICAgICAgZXZhbHVhdGVLZXkoKHZhbHVlMikgPT4ga2V5cy5wdXNoKHZhbHVlMiksIHsgc2NvcGU6IHsgaW5kZXg6IGtleSwgLi4uc2NvcGUyIH0gfSk7XG4gICAgICAgIHNjb3Blcy5wdXNoKHNjb3BlMik7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgc2NvcGUyID0gZ2V0SXRlcmF0aW9uU2NvcGVWYXJpYWJsZXMoaXRlcmF0b3JOYW1lcywgaXRlbXNbaV0sIGksIGl0ZW1zKTtcbiAgICAgICAgZXZhbHVhdGVLZXkoKHZhbHVlKSA9PiBrZXlzLnB1c2godmFsdWUpLCB7IHNjb3BlOiB7IGluZGV4OiBpLCAuLi5zY29wZTIgfSB9KTtcbiAgICAgICAgc2NvcGVzLnB1c2goc2NvcGUyKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGV0IGFkZHMgPSBbXTtcbiAgICBsZXQgbW92ZXMgPSBbXTtcbiAgICBsZXQgcmVtb3ZlcyA9IFtdO1xuICAgIGxldCBzYW1lcyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJldktleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBrZXkgPSBwcmV2S2V5c1tpXTtcbiAgICAgIGlmIChrZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpXG4gICAgICAgIHJlbW92ZXMucHVzaChrZXkpO1xuICAgIH1cbiAgICBwcmV2S2V5cyA9IHByZXZLZXlzLmZpbHRlcigoa2V5KSA9PiAhcmVtb3Zlcy5pbmNsdWRlcyhrZXkpKTtcbiAgICBsZXQgbGFzdEtleSA9IFwidGVtcGxhdGVcIjtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBrZXkgPSBrZXlzW2ldO1xuICAgICAgbGV0IHByZXZJbmRleCA9IHByZXZLZXlzLmluZGV4T2Yoa2V5KTtcbiAgICAgIGlmIChwcmV2SW5kZXggPT09IC0xKSB7XG4gICAgICAgIHByZXZLZXlzLnNwbGljZShpLCAwLCBrZXkpO1xuICAgICAgICBhZGRzLnB1c2goW2xhc3RLZXksIGldKTtcbiAgICAgIH0gZWxzZSBpZiAocHJldkluZGV4ICE9PSBpKSB7XG4gICAgICAgIGxldCBrZXlJblNwb3QgPSBwcmV2S2V5cy5zcGxpY2UoaSwgMSlbMF07XG4gICAgICAgIGxldCBrZXlGb3JTcG90ID0gcHJldktleXMuc3BsaWNlKHByZXZJbmRleCAtIDEsIDEpWzBdO1xuICAgICAgICBwcmV2S2V5cy5zcGxpY2UoaSwgMCwga2V5Rm9yU3BvdCk7XG4gICAgICAgIHByZXZLZXlzLnNwbGljZShwcmV2SW5kZXgsIDAsIGtleUluU3BvdCk7XG4gICAgICAgIG1vdmVzLnB1c2goW2tleUluU3BvdCwga2V5Rm9yU3BvdF0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2FtZXMucHVzaChrZXkpO1xuICAgICAgfVxuICAgICAgbGFzdEtleSA9IGtleTtcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZW1vdmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQga2V5ID0gcmVtb3Zlc1tpXTtcbiAgICAgIGlmICghIWxvb2t1cFtrZXldLl94X2VmZmVjdHMpIHtcbiAgICAgICAgbG9va3VwW2tleV0uX3hfZWZmZWN0cy5mb3JFYWNoKGRlcXVldWVKb2IpO1xuICAgICAgfVxuICAgICAgbG9va3VwW2tleV0ucmVtb3ZlKCk7XG4gICAgICBsb29rdXBba2V5XSA9IG51bGw7XG4gICAgICBkZWxldGUgbG9va3VwW2tleV07XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbW92ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBba2V5SW5TcG90LCBrZXlGb3JTcG90XSA9IG1vdmVzW2ldO1xuICAgICAgbGV0IGVsSW5TcG90ID0gbG9va3VwW2tleUluU3BvdF07XG4gICAgICBsZXQgZWxGb3JTcG90ID0gbG9va3VwW2tleUZvclNwb3RdO1xuICAgICAgbGV0IG1hcmtlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBtdXRhdGVEb20oKCkgPT4ge1xuICAgICAgICBpZiAoIWVsRm9yU3BvdClcbiAgICAgICAgICB3YXJuKGB4LWZvciBcIjprZXlcIiBpcyB1bmRlZmluZWQgb3IgaW52YWxpZGAsIHRlbXBsYXRlRWwpO1xuICAgICAgICBlbEZvclNwb3QuYWZ0ZXIobWFya2VyKTtcbiAgICAgICAgZWxJblNwb3QuYWZ0ZXIoZWxGb3JTcG90KTtcbiAgICAgICAgZWxGb3JTcG90Ll94X2N1cnJlbnRJZkVsICYmIGVsRm9yU3BvdC5hZnRlcihlbEZvclNwb3QuX3hfY3VycmVudElmRWwpO1xuICAgICAgICBtYXJrZXIuYmVmb3JlKGVsSW5TcG90KTtcbiAgICAgICAgZWxJblNwb3QuX3hfY3VycmVudElmRWwgJiYgZWxJblNwb3QuYWZ0ZXIoZWxJblNwb3QuX3hfY3VycmVudElmRWwpO1xuICAgICAgICBtYXJrZXIucmVtb3ZlKCk7XG4gICAgICB9KTtcbiAgICAgIGVsRm9yU3BvdC5feF9yZWZyZXNoWEZvclNjb3BlKHNjb3Blc1trZXlzLmluZGV4T2Yoa2V5Rm9yU3BvdCldKTtcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhZGRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgW2xhc3RLZXkyLCBpbmRleF0gPSBhZGRzW2ldO1xuICAgICAgbGV0IGxhc3RFbCA9IGxhc3RLZXkyID09PSBcInRlbXBsYXRlXCIgPyB0ZW1wbGF0ZUVsIDogbG9va3VwW2xhc3RLZXkyXTtcbiAgICAgIGlmIChsYXN0RWwuX3hfY3VycmVudElmRWwpXG4gICAgICAgIGxhc3RFbCA9IGxhc3RFbC5feF9jdXJyZW50SWZFbDtcbiAgICAgIGxldCBzY29wZTIgPSBzY29wZXNbaW5kZXhdO1xuICAgICAgbGV0IGtleSA9IGtleXNbaW5kZXhdO1xuICAgICAgbGV0IGNsb25lMiA9IGRvY3VtZW50LmltcG9ydE5vZGUodGVtcGxhdGVFbC5jb250ZW50LCB0cnVlKS5maXJzdEVsZW1lbnRDaGlsZDtcbiAgICAgIGxldCByZWFjdGl2ZVNjb3BlID0gcmVhY3RpdmUoc2NvcGUyKTtcbiAgICAgIGFkZFNjb3BlVG9Ob2RlKGNsb25lMiwgcmVhY3RpdmVTY29wZSwgdGVtcGxhdGVFbCk7XG4gICAgICBjbG9uZTIuX3hfcmVmcmVzaFhGb3JTY29wZSA9IChuZXdTY29wZSkgPT4ge1xuICAgICAgICBPYmplY3QuZW50cmllcyhuZXdTY29wZSkuZm9yRWFjaCgoW2tleTIsIHZhbHVlXSkgPT4ge1xuICAgICAgICAgIHJlYWN0aXZlU2NvcGVba2V5Ml0gPSB2YWx1ZTtcbiAgICAgICAgfSk7XG4gICAgICB9O1xuICAgICAgbXV0YXRlRG9tKCgpID0+IHtcbiAgICAgICAgbGFzdEVsLmFmdGVyKGNsb25lMik7XG4gICAgICAgIGluaXRUcmVlKGNsb25lMik7XG4gICAgICB9KTtcbiAgICAgIGlmICh0eXBlb2Yga2V5ID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgIHdhcm4oXCJ4LWZvciBrZXkgY2Fubm90IGJlIGFuIG9iamVjdCwgaXQgbXVzdCBiZSBhIHN0cmluZyBvciBhbiBpbnRlZ2VyXCIsIHRlbXBsYXRlRWwpO1xuICAgICAgfVxuICAgICAgbG9va3VwW2tleV0gPSBjbG9uZTI7XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2FtZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxvb2t1cFtzYW1lc1tpXV0uX3hfcmVmcmVzaFhGb3JTY29wZShzY29wZXNba2V5cy5pbmRleE9mKHNhbWVzW2ldKV0pO1xuICAgIH1cbiAgICB0ZW1wbGF0ZUVsLl94X3ByZXZLZXlzID0ga2V5cztcbiAgfSk7XG59XG5mdW5jdGlvbiBwYXJzZUZvckV4cHJlc3Npb24oZXhwcmVzc2lvbikge1xuICBsZXQgZm9ySXRlcmF0b3JSRSA9IC8sKFteLFxcfVxcXV0qKSg/OiwoW14sXFx9XFxdXSopKT8kLztcbiAgbGV0IHN0cmlwUGFyZW5zUkUgPSAvXlxccypcXCh8XFwpXFxzKiQvZztcbiAgbGV0IGZvckFsaWFzUkUgPSAvKFtcXHNcXFNdKj8pXFxzKyg/OmlufG9mKVxccysoW1xcc1xcU10qKS87XG4gIGxldCBpbk1hdGNoID0gZXhwcmVzc2lvbi5tYXRjaChmb3JBbGlhc1JFKTtcbiAgaWYgKCFpbk1hdGNoKVxuICAgIHJldHVybjtcbiAgbGV0IHJlcyA9IHt9O1xuICByZXMuaXRlbXMgPSBpbk1hdGNoWzJdLnRyaW0oKTtcbiAgbGV0IGl0ZW0gPSBpbk1hdGNoWzFdLnJlcGxhY2Uoc3RyaXBQYXJlbnNSRSwgXCJcIikudHJpbSgpO1xuICBsZXQgaXRlcmF0b3JNYXRjaCA9IGl0ZW0ubWF0Y2goZm9ySXRlcmF0b3JSRSk7XG4gIGlmIChpdGVyYXRvck1hdGNoKSB7XG4gICAgcmVzLml0ZW0gPSBpdGVtLnJlcGxhY2UoZm9ySXRlcmF0b3JSRSwgXCJcIikudHJpbSgpO1xuICAgIHJlcy5pbmRleCA9IGl0ZXJhdG9yTWF0Y2hbMV0udHJpbSgpO1xuICAgIGlmIChpdGVyYXRvck1hdGNoWzJdKSB7XG4gICAgICByZXMuY29sbGVjdGlvbiA9IGl0ZXJhdG9yTWF0Y2hbMl0udHJpbSgpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXMuaXRlbSA9IGl0ZW07XG4gIH1cbiAgcmV0dXJuIHJlcztcbn1cbmZ1bmN0aW9uIGdldEl0ZXJhdGlvblNjb3BlVmFyaWFibGVzKGl0ZXJhdG9yTmFtZXMsIGl0ZW0sIGluZGV4LCBpdGVtcykge1xuICBsZXQgc2NvcGVWYXJpYWJsZXMgPSB7fTtcbiAgaWYgKC9eXFxbLipcXF0kLy50ZXN0KGl0ZXJhdG9yTmFtZXMuaXRlbSkgJiYgQXJyYXkuaXNBcnJheShpdGVtKSkge1xuICAgIGxldCBuYW1lcyA9IGl0ZXJhdG9yTmFtZXMuaXRlbS5yZXBsYWNlKFwiW1wiLCBcIlwiKS5yZXBsYWNlKFwiXVwiLCBcIlwiKS5zcGxpdChcIixcIikubWFwKChpKSA9PiBpLnRyaW0oKSk7XG4gICAgbmFtZXMuZm9yRWFjaCgobmFtZSwgaSkgPT4ge1xuICAgICAgc2NvcGVWYXJpYWJsZXNbbmFtZV0gPSBpdGVtW2ldO1xuICAgIH0pO1xuICB9IGVsc2UgaWYgKC9eXFx7LipcXH0kLy50ZXN0KGl0ZXJhdG9yTmFtZXMuaXRlbSkgJiYgIUFycmF5LmlzQXJyYXkoaXRlbSkgJiYgdHlwZW9mIGl0ZW0gPT09IFwib2JqZWN0XCIpIHtcbiAgICBsZXQgbmFtZXMgPSBpdGVyYXRvck5hbWVzLml0ZW0ucmVwbGFjZShcIntcIiwgXCJcIikucmVwbGFjZShcIn1cIiwgXCJcIikuc3BsaXQoXCIsXCIpLm1hcCgoaSkgPT4gaS50cmltKCkpO1xuICAgIG5hbWVzLmZvckVhY2goKG5hbWUpID0+IHtcbiAgICAgIHNjb3BlVmFyaWFibGVzW25hbWVdID0gaXRlbVtuYW1lXTtcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBzY29wZVZhcmlhYmxlc1tpdGVyYXRvck5hbWVzLml0ZW1dID0gaXRlbTtcbiAgfVxuICBpZiAoaXRlcmF0b3JOYW1lcy5pbmRleClcbiAgICBzY29wZVZhcmlhYmxlc1tpdGVyYXRvck5hbWVzLmluZGV4XSA9IGluZGV4O1xuICBpZiAoaXRlcmF0b3JOYW1lcy5jb2xsZWN0aW9uKVxuICAgIHNjb3BlVmFyaWFibGVzW2l0ZXJhdG9yTmFtZXMuY29sbGVjdGlvbl0gPSBpdGVtcztcbiAgcmV0dXJuIHNjb3BlVmFyaWFibGVzO1xufVxuZnVuY3Rpb24gaXNOdW1lcmljMyhzdWJqZWN0KSB7XG4gIHJldHVybiAhQXJyYXkuaXNBcnJheShzdWJqZWN0KSAmJiAhaXNOYU4oc3ViamVjdCk7XG59XG5cbi8vIHBhY2thZ2VzL2FscGluZWpzL3NyYy9kaXJlY3RpdmVzL3gtcmVmLmpzXG5mdW5jdGlvbiBoYW5kbGVyMygpIHtcbn1cbmhhbmRsZXIzLmlubGluZSA9IChlbCwgeyBleHByZXNzaW9uIH0sIHsgY2xlYW51cDogY2xlYW51cDIgfSkgPT4ge1xuICBsZXQgcm9vdCA9IGNsb3Nlc3RSb290KGVsKTtcbiAgaWYgKCFyb290Ll94X3JlZnMpXG4gICAgcm9vdC5feF9yZWZzID0ge307XG4gIHJvb3QuX3hfcmVmc1tleHByZXNzaW9uXSA9IGVsO1xuICBjbGVhbnVwMigoKSA9PiBkZWxldGUgcm9vdC5feF9yZWZzW2V4cHJlc3Npb25dKTtcbn07XG5kaXJlY3RpdmUoXCJyZWZcIiwgaGFuZGxlcjMpO1xuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvZGlyZWN0aXZlcy94LWlmLmpzXG5kaXJlY3RpdmUoXCJpZlwiLCAoZWwsIHsgZXhwcmVzc2lvbiB9LCB7IGVmZmVjdDogZWZmZWN0MywgY2xlYW51cDogY2xlYW51cDIgfSkgPT4ge1xuICBpZiAoZWwudGFnTmFtZS50b0xvd2VyQ2FzZSgpICE9PSBcInRlbXBsYXRlXCIpXG4gICAgd2FybihcIngtaWYgY2FuIG9ubHkgYmUgdXNlZCBvbiBhIDx0ZW1wbGF0ZT4gdGFnXCIsIGVsKTtcbiAgbGV0IGV2YWx1YXRlMiA9IGV2YWx1YXRlTGF0ZXIoZWwsIGV4cHJlc3Npb24pO1xuICBsZXQgc2hvdyA9ICgpID0+IHtcbiAgICBpZiAoZWwuX3hfY3VycmVudElmRWwpXG4gICAgICByZXR1cm4gZWwuX3hfY3VycmVudElmRWw7XG4gICAgbGV0IGNsb25lMiA9IGVsLmNvbnRlbnQuY2xvbmVOb2RlKHRydWUpLmZpcnN0RWxlbWVudENoaWxkO1xuICAgIGFkZFNjb3BlVG9Ob2RlKGNsb25lMiwge30sIGVsKTtcbiAgICBtdXRhdGVEb20oKCkgPT4ge1xuICAgICAgZWwuYWZ0ZXIoY2xvbmUyKTtcbiAgICAgIGluaXRUcmVlKGNsb25lMik7XG4gICAgfSk7XG4gICAgZWwuX3hfY3VycmVudElmRWwgPSBjbG9uZTI7XG4gICAgZWwuX3hfdW5kb0lmID0gKCkgPT4ge1xuICAgICAgd2FsayhjbG9uZTIsIChub2RlKSA9PiB7XG4gICAgICAgIGlmICghIW5vZGUuX3hfZWZmZWN0cykge1xuICAgICAgICAgIG5vZGUuX3hfZWZmZWN0cy5mb3JFYWNoKGRlcXVldWVKb2IpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGNsb25lMi5yZW1vdmUoKTtcbiAgICAgIGRlbGV0ZSBlbC5feF9jdXJyZW50SWZFbDtcbiAgICB9O1xuICAgIHJldHVybiBjbG9uZTI7XG4gIH07XG4gIGxldCBoaWRlID0gKCkgPT4ge1xuICAgIGlmICghZWwuX3hfdW5kb0lmKVxuICAgICAgcmV0dXJuO1xuICAgIGVsLl94X3VuZG9JZigpO1xuICAgIGRlbGV0ZSBlbC5feF91bmRvSWY7XG4gIH07XG4gIGVmZmVjdDMoKCkgPT4gZXZhbHVhdGUyKCh2YWx1ZSkgPT4ge1xuICAgIHZhbHVlID8gc2hvdygpIDogaGlkZSgpO1xuICB9KSk7XG4gIGNsZWFudXAyKCgpID0+IGVsLl94X3VuZG9JZiAmJiBlbC5feF91bmRvSWYoKSk7XG59KTtcblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL2RpcmVjdGl2ZXMveC1pZC5qc1xuZGlyZWN0aXZlKFwiaWRcIiwgKGVsLCB7IGV4cHJlc3Npb24gfSwgeyBldmFsdWF0ZTogZXZhbHVhdGUyIH0pID0+IHtcbiAgbGV0IG5hbWVzID0gZXZhbHVhdGUyKGV4cHJlc3Npb24pO1xuICBuYW1lcy5mb3JFYWNoKChuYW1lKSA9PiBzZXRJZFJvb3QoZWwsIG5hbWUpKTtcbn0pO1xuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvZGlyZWN0aXZlcy94LW9uLmpzXG5tYXBBdHRyaWJ1dGVzKHN0YXJ0aW5nV2l0aChcIkBcIiwgaW50byhwcmVmaXgoXCJvbjpcIikpKSk7XG5kaXJlY3RpdmUoXCJvblwiLCBza2lwRHVyaW5nQ2xvbmUoKGVsLCB7IHZhbHVlLCBtb2RpZmllcnMsIGV4cHJlc3Npb24gfSwgeyBjbGVhbnVwOiBjbGVhbnVwMiB9KSA9PiB7XG4gIGxldCBldmFsdWF0ZTIgPSBleHByZXNzaW9uID8gZXZhbHVhdGVMYXRlcihlbCwgZXhwcmVzc2lvbikgOiAoKSA9PiB7XG4gIH07XG4gIGlmIChlbC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09IFwidGVtcGxhdGVcIikge1xuICAgIGlmICghZWwuX3hfZm9yd2FyZEV2ZW50cylcbiAgICAgIGVsLl94X2ZvcndhcmRFdmVudHMgPSBbXTtcbiAgICBpZiAoIWVsLl94X2ZvcndhcmRFdmVudHMuaW5jbHVkZXModmFsdWUpKVxuICAgICAgZWwuX3hfZm9yd2FyZEV2ZW50cy5wdXNoKHZhbHVlKTtcbiAgfVxuICBsZXQgcmVtb3ZlTGlzdGVuZXIgPSBvbihlbCwgdmFsdWUsIG1vZGlmaWVycywgKGUpID0+IHtcbiAgICBldmFsdWF0ZTIoKCkgPT4ge1xuICAgIH0sIHsgc2NvcGU6IHsgXCIkZXZlbnRcIjogZSB9LCBwYXJhbXM6IFtlXSB9KTtcbiAgfSk7XG4gIGNsZWFudXAyKCgpID0+IHJlbW92ZUxpc3RlbmVyKCkpO1xufSkpO1xuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvZGlyZWN0aXZlcy9pbmRleC5qc1xud2Fybk1pc3NpbmdQbHVnaW5EaXJlY3RpdmUoXCJDb2xsYXBzZVwiLCBcImNvbGxhcHNlXCIsIFwiY29sbGFwc2VcIik7XG53YXJuTWlzc2luZ1BsdWdpbkRpcmVjdGl2ZShcIkludGVyc2VjdFwiLCBcImludGVyc2VjdFwiLCBcImludGVyc2VjdFwiKTtcbndhcm5NaXNzaW5nUGx1Z2luRGlyZWN0aXZlKFwiRm9jdXNcIiwgXCJ0cmFwXCIsIFwiZm9jdXNcIik7XG53YXJuTWlzc2luZ1BsdWdpbkRpcmVjdGl2ZShcIk1hc2tcIiwgXCJtYXNrXCIsIFwibWFza1wiKTtcbmZ1bmN0aW9uIHdhcm5NaXNzaW5nUGx1Z2luRGlyZWN0aXZlKG5hbWUsIGRpcmVjdGl2ZU5hbWUsIHNsdWcpIHtcbiAgZGlyZWN0aXZlKGRpcmVjdGl2ZU5hbWUsIChlbCkgPT4gd2FybihgWW91IGNhbid0IHVzZSBbeC0ke2RpcmVjdGl2ZU5hbWV9XSB3aXRob3V0IGZpcnN0IGluc3RhbGxpbmcgdGhlIFwiJHtuYW1lfVwiIHBsdWdpbiBoZXJlOiBodHRwczovL2FscGluZWpzLmRldi9wbHVnaW5zLyR7c2x1Z31gLCBlbCkpO1xufVxuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvaW5kZXguanNcbmFscGluZV9kZWZhdWx0LnNldEV2YWx1YXRvcihub3JtYWxFdmFsdWF0b3IpO1xuYWxwaW5lX2RlZmF1bHQuc2V0UmVhY3Rpdml0eUVuZ2luZSh7IHJlYWN0aXZlOiByZWFjdGl2ZTIsIGVmZmVjdDogZWZmZWN0MiwgcmVsZWFzZTogc3RvcCwgcmF3OiB0b1JhdyB9KTtcbnZhciBzcmNfZGVmYXVsdCA9IGFscGluZV9kZWZhdWx0O1xuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9idWlsZHMvbW9kdWxlLmpzXG52YXIgbW9kdWxlX2RlZmF1bHQgPSBzcmNfZGVmYXVsdDtcbmV4cG9ydCB7XG4gIG1vZHVsZV9kZWZhdWx0IGFzIGRlZmF1bHRcbn07XG4iLCAiLy8gcGFja2FnZXMvcGVyc2lzdC9zcmMvaW5kZXguanNcbmZ1bmN0aW9uIHNyY19kZWZhdWx0KEFscGluZSkge1xuICBsZXQgcGVyc2lzdCA9ICgpID0+IHtcbiAgICBsZXQgYWxpYXM7XG4gICAgbGV0IHN0b3JhZ2U7XG4gICAgdHJ5IHtcbiAgICAgIHN0b3JhZ2UgPSBsb2NhbFN0b3JhZ2U7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICAgIGNvbnNvbGUud2FybihcIkFscGluZTogJHBlcnNpc3QgaXMgdXNpbmcgdGVtcG9yYXJ5IHN0b3JhZ2Ugc2luY2UgbG9jYWxTdG9yYWdlIGlzIHVuYXZhaWxhYmxlLlwiKTtcbiAgICAgIGxldCBkdW1teSA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCk7XG4gICAgICBzdG9yYWdlID0ge1xuICAgICAgICBnZXRJdGVtOiBkdW1teS5nZXQuYmluZChkdW1teSksXG4gICAgICAgIHNldEl0ZW06IGR1bW15LnNldC5iaW5kKGR1bW15KVxuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIEFscGluZS5pbnRlcmNlcHRvcigoaW5pdGlhbFZhbHVlLCBnZXR0ZXIsIHNldHRlciwgcGF0aCwga2V5KSA9PiB7XG4gICAgICBsZXQgbG9va3VwID0gYWxpYXMgfHwgYF94XyR7cGF0aH1gO1xuICAgICAgbGV0IGluaXRpYWwgPSBzdG9yYWdlSGFzKGxvb2t1cCwgc3RvcmFnZSkgPyBzdG9yYWdlR2V0KGxvb2t1cCwgc3RvcmFnZSkgOiBpbml0aWFsVmFsdWU7XG4gICAgICBzZXR0ZXIoaW5pdGlhbCk7XG4gICAgICBBbHBpbmUuZWZmZWN0KCgpID0+IHtcbiAgICAgICAgbGV0IHZhbHVlID0gZ2V0dGVyKCk7XG4gICAgICAgIHN0b3JhZ2VTZXQobG9va3VwLCB2YWx1ZSwgc3RvcmFnZSk7XG4gICAgICAgIHNldHRlcih2YWx1ZSk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBpbml0aWFsO1xuICAgIH0sIChmdW5jKSA9PiB7XG4gICAgICBmdW5jLmFzID0gKGtleSkgPT4ge1xuICAgICAgICBhbGlhcyA9IGtleTtcbiAgICAgICAgcmV0dXJuIGZ1bmM7XG4gICAgICB9LCBmdW5jLnVzaW5nID0gKHRhcmdldCkgPT4ge1xuICAgICAgICBzdG9yYWdlID0gdGFyZ2V0O1xuICAgICAgICByZXR1cm4gZnVuYztcbiAgICAgIH07XG4gICAgfSk7XG4gIH07XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBbHBpbmUsIFwiJHBlcnNpc3RcIiwgeyBnZXQ6ICgpID0+IHBlcnNpc3QoKSB9KTtcbiAgQWxwaW5lLm1hZ2ljKFwicGVyc2lzdFwiLCBwZXJzaXN0KTtcbiAgQWxwaW5lLnBlcnNpc3QgPSAoa2V5LCB7IGdldCwgc2V0IH0sIHN0b3JhZ2UgPSBsb2NhbFN0b3JhZ2UpID0+IHtcbiAgICBsZXQgaW5pdGlhbCA9IHN0b3JhZ2VIYXMoa2V5LCBzdG9yYWdlKSA/IHN0b3JhZ2VHZXQoa2V5LCBzdG9yYWdlKSA6IGdldCgpO1xuICAgIHNldChpbml0aWFsKTtcbiAgICBBbHBpbmUuZWZmZWN0KCgpID0+IHtcbiAgICAgIGxldCB2YWx1ZSA9IGdldCgpO1xuICAgICAgc3RvcmFnZVNldChrZXksIHZhbHVlLCBzdG9yYWdlKTtcbiAgICAgIHNldCh2YWx1ZSk7XG4gICAgfSk7XG4gIH07XG59XG5mdW5jdGlvbiBzdG9yYWdlSGFzKGtleSwgc3RvcmFnZSkge1xuICByZXR1cm4gc3RvcmFnZS5nZXRJdGVtKGtleSkgIT09IG51bGw7XG59XG5mdW5jdGlvbiBzdG9yYWdlR2V0KGtleSwgc3RvcmFnZSkge1xuICByZXR1cm4gSlNPTi5wYXJzZShzdG9yYWdlLmdldEl0ZW0oa2V5LCBzdG9yYWdlKSk7XG59XG5mdW5jdGlvbiBzdG9yYWdlU2V0KGtleSwgdmFsdWUsIHN0b3JhZ2UpIHtcbiAgc3RvcmFnZS5zZXRJdGVtKGtleSwgSlNPTi5zdHJpbmdpZnkodmFsdWUpKTtcbn1cblxuLy8gcGFja2FnZXMvcGVyc2lzdC9idWlsZHMvbW9kdWxlLmpzXG52YXIgbW9kdWxlX2RlZmF1bHQgPSBzcmNfZGVmYXVsdDtcbmV4cG9ydCB7XG4gIG1vZHVsZV9kZWZhdWx0IGFzIGRlZmF1bHRcbn07XG4iLCAiLy8gcGFja2FnZXMvaW50ZXJzZWN0L3NyYy9pbmRleC5qc1xuZnVuY3Rpb24gc3JjX2RlZmF1bHQoQWxwaW5lKSB7XG4gIEFscGluZS5kaXJlY3RpdmUoXCJpbnRlcnNlY3RcIiwgKGVsLCB7IHZhbHVlLCBleHByZXNzaW9uLCBtb2RpZmllcnMgfSwgeyBldmFsdWF0ZUxhdGVyLCBjbGVhbnVwIH0pID0+IHtcbiAgICBsZXQgZXZhbHVhdGUgPSBldmFsdWF0ZUxhdGVyKGV4cHJlc3Npb24pO1xuICAgIGxldCBvcHRpb25zID0ge1xuICAgICAgcm9vdE1hcmdpbjogZ2V0Um9vdE1hcmdpbihtb2RpZmllcnMpLFxuICAgICAgdGhyZXNob2xkOiBnZXRUaHJlc2hvbGQobW9kaWZpZXJzKVxuICAgIH07XG4gICAgbGV0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKSA9PiB7XG4gICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZyA9PT0gKHZhbHVlID09PSBcImxlYXZlXCIpKVxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgZXZhbHVhdGUoKTtcbiAgICAgICAgbW9kaWZpZXJzLmluY2x1ZGVzKFwib25jZVwiKSAmJiBvYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICB9KTtcbiAgICB9LCBvcHRpb25zKTtcbiAgICBvYnNlcnZlci5vYnNlcnZlKGVsKTtcbiAgICBjbGVhbnVwKCgpID0+IHtcbiAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICB9KTtcbiAgfSk7XG59XG5mdW5jdGlvbiBnZXRUaHJlc2hvbGQobW9kaWZpZXJzKSB7XG4gIGlmIChtb2RpZmllcnMuaW5jbHVkZXMoXCJmdWxsXCIpKVxuICAgIHJldHVybiAwLjk5O1xuICBpZiAobW9kaWZpZXJzLmluY2x1ZGVzKFwiaGFsZlwiKSlcbiAgICByZXR1cm4gMC41O1xuICBpZiAoIW1vZGlmaWVycy5pbmNsdWRlcyhcInRocmVzaG9sZFwiKSlcbiAgICByZXR1cm4gMDtcbiAgbGV0IHRocmVzaG9sZCA9IG1vZGlmaWVyc1ttb2RpZmllcnMuaW5kZXhPZihcInRocmVzaG9sZFwiKSArIDFdO1xuICBpZiAodGhyZXNob2xkID09PSBcIjEwMFwiKVxuICAgIHJldHVybiAxO1xuICBpZiAodGhyZXNob2xkID09PSBcIjBcIilcbiAgICByZXR1cm4gMDtcbiAgcmV0dXJuIE51bWJlcihgLiR7dGhyZXNob2xkfWApO1xufVxuZnVuY3Rpb24gZ2V0TGVuZ3RoVmFsdWUocmF3VmFsdWUpIHtcbiAgbGV0IG1hdGNoID0gcmF3VmFsdWUubWF0Y2goL14oLT9bMC05XSspKHB4fCUpPyQvKTtcbiAgcmV0dXJuIG1hdGNoID8gbWF0Y2hbMV0gKyAobWF0Y2hbMl0gfHwgXCJweFwiKSA6IHZvaWQgMDtcbn1cbmZ1bmN0aW9uIGdldFJvb3RNYXJnaW4obW9kaWZpZXJzKSB7XG4gIGNvbnN0IGtleSA9IFwibWFyZ2luXCI7XG4gIGNvbnN0IGZhbGxiYWNrID0gXCIwcHggMHB4IDBweCAwcHhcIjtcbiAgY29uc3QgaW5kZXggPSBtb2RpZmllcnMuaW5kZXhPZihrZXkpO1xuICBpZiAoaW5kZXggPT09IC0xKVxuICAgIHJldHVybiBmYWxsYmFjaztcbiAgbGV0IHZhbHVlcyA9IFtdO1xuICBmb3IgKGxldCBpID0gMTsgaSA8IDU7IGkrKykge1xuICAgIHZhbHVlcy5wdXNoKGdldExlbmd0aFZhbHVlKG1vZGlmaWVyc1tpbmRleCArIGldIHx8IFwiXCIpKTtcbiAgfVxuICB2YWx1ZXMgPSB2YWx1ZXMuZmlsdGVyKCh2KSA9PiB2ICE9PSB2b2lkIDApO1xuICByZXR1cm4gdmFsdWVzLmxlbmd0aCA/IHZhbHVlcy5qb2luKFwiIFwiKS50cmltKCkgOiBmYWxsYmFjaztcbn1cblxuLy8gcGFja2FnZXMvaW50ZXJzZWN0L2J1aWxkcy9tb2R1bGUuanNcbnZhciBtb2R1bGVfZGVmYXVsdCA9IHNyY19kZWZhdWx0O1xuZXhwb3J0IHtcbiAgbW9kdWxlX2RlZmF1bHQgYXMgZGVmYXVsdFxufTtcbiIsICJpbXBvcnQgQWxwaW5lIGZyb20gXCJhbHBpbmVqc1wiO1xuaW1wb3J0IHBlcnNpc3QgZnJvbSBcIkBhbHBpbmVqcy9wZXJzaXN0XCI7XG5pbXBvcnQgaW50ZXJzZWN0IGZyb20gJ0BhbHBpbmVqcy9pbnRlcnNlY3QnXG5pbXBvcnQgSHRteCBmcm9tIFwiaHRteC5vcmdcIjtcbmltcG9ydCBjYXJ0U3RvcmUgZnJvbSBcIi4vY2FydFN0b3JlXCI7XG5pbXBvcnQgeyBmb3JtYXRDdXJyZW5jeSB9IGZyb20gXCIuL2N1c3RvbS1hbHBpbmVcIjtcbmltcG9ydCB7IGpzb25FbmMgfSBmcm9tIFwiLi9jdXN0b20taHRteFwiO1xuaW1wb3J0IHVzZUNhcnQgZnJvbSBcIi4vdXNlQ2FydFwiO1xuaW1wb3J0IHVzZUNhcnRTdW1tYXJ5IGZyb20gXCIuL3VzZUNhcnRTdW1tYXJ5XCI7XG5pbXBvcnQgdXNlU2VhcmNoIGZyb20gXCIuL3VzZVNlYXJjaFwiO1xuaW1wb3J0IHVzZUNhcm91c2VsIGZyb20gXCIuL3VzZUNhcm91c2VsXCI7XG5cbndpbmRvdy5IdG14ID0gSHRteDtcbkh0bXguZGVmaW5lRXh0ZW5zaW9uKCdqc29uLWVuYycsIGpzb25FbmMpO1xuXG53aW5kb3cuQWxwaW5lID0gQWxwaW5lO1xuQWxwaW5lLmRpcmVjdGl2ZShcImN1cnJlbmN5XCIsIGZvcm1hdEN1cnJlbmN5KTtcbkFscGluZS5wbHVnaW4ocGVyc2lzdCk7XG5BbHBpbmUucGx1Z2luKGludGVyc2VjdCk7XG5BbHBpbmUuc3RvcmUoXCJjYXJ0U3RvcmVcIiwgY2FydFN0b3JlKEFscGluZSkpO1xuQWxwaW5lLmRhdGEoXCJ1c2VDYXJ0XCIsIHVzZUNhcnQpO1xuQWxwaW5lLmRhdGEoXCJ1c2VDYXJ0U3VtbWFyeVwiLCB1c2VDYXJ0U3VtbWFyeSk7XG5BbHBpbmUuZGF0YShcInVzZVNlYXJjaFwiLCB1c2VTZWFyY2gpO1xuQWxwaW5lLmRhdGEoXCJ1c2VDYXJvdXNlbFwiLCB1c2VDYXJvdXNlbCk7XG5BbHBpbmUuc3RhcnQoKTtcbiIsICJleHBvcnQgZGVmYXVsdCAoQWxwaW5lKSA9PiAoeyBcbiAgXG4gIGl0ZW1zOiBBbHBpbmUuJHBlcnNpc3QoW10pLFxuXG4gIGdldCBjYXJ0VG90YWwoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXRlbXMucmVkdWNlKChhLGkpID0+IGEgKz0gaS5wcmljZSAqIGkucXVhbnRpdHksIDApO1xuICB9LFxuXG4gIGdldCBjYXJ0Rm9yU3RyaXBlKCkge1xuICAgIHJldHVybiB0aGlzLml0ZW1zLm1hcCgoaXRlbSkgPT4gKHtcbiAgICAgIHNrdTogaXRlbS5za3UsXG4gICAgICBwcmljZV9pZDogaXRlbS5zdHJpcGVfcHJpY2VfaWQsXG4gICAgICBxdWFudGl0eTogaXRlbS5xdWFudGl0eSxcbiAgICB9KSk7XG4gIH0sXG5cbiAgZmluZEl0ZW0oaXRlbVRvRmluZCkge1xuICAgIHJldHVybiB7IFxuICAgICAgaXRlbTogdGhpcy5pdGVtcy5maW5kKGkgPT4gaS5za3UgPT09IGl0ZW1Ub0ZpbmQuc2t1KSxcbiAgICAgIGl0ZW1JbmRleDogdGhpcy5pdGVtcy5maW5kSW5kZXgoaSA9PiBpLnNrdSA9PT0gaXRlbVRvRmluZC5za3UpXG4gICAgfTtcbiAgfSxcblxuICBnZXRJdGVtUHJvcChpdGVtVG9HZXQsIHByb3AgPSBcInF1YW50aXR5XCIpIHtcbiAgICBjb25zdCB7IGl0ZW0gfSA9IHRoaXMuZmluZEl0ZW0oaXRlbVRvR2V0KTtcbiAgICByZXR1cm4gaXRlbT8uW3Byb3BdO1xuICB9LFxuXG4gIGFkZEl0ZW0oaXRlbVRvQWRkKSB7XG4gICAgY29uc3QgeyBpdGVtIH0gPSB0aGlzLmZpbmRJdGVtKGl0ZW1Ub0FkZCk7IFxuICAgIGl0ZW1cbiAgICAgID8gaXRlbS5xdWFudGl0eSA9IE1hdGgubWluKDEwLCBpdGVtLnF1YW50aXR5ICsxKVxuICAgICAgOiB0aGlzLml0ZW1zLnB1c2goeyAuLi5pdGVtVG9BZGQsIHF1YW50aXR5OiAxIH0pXG4gIH0sXG5cbiAgcmVtb3ZlSXRlbShpdGVtVG9SZW1vdmUsIHdpcGVPdXQgPSBmYWxzZSkge1xuICAgIGNvbnN0IHsgaXRlbSwgaXRlbUluZGV4IH0gPSB0aGlzLmZpbmRJdGVtKGl0ZW1Ub1JlbW92ZSk7XG4gICAgbGV0IHVwZGF0ZWRXaXBlT3V0ID0gd2lwZU91dCB8fCBpdGVtPy5xdWFudGl0eSA9PT0gMTtcbiAgICBpZiAoaXRlbSAmJiAhdXBkYXRlZFdpcGVPdXQpIGl0ZW0ucXVhbnRpdHkgLT0gMTtcbiAgICBpZiAoaXRlbSAmJiB1cGRhdGVkV2lwZU91dCkgdGhpcy5pdGVtcy5zcGxpY2UoaXRlbUluZGV4LCAxKTtcbiAgfSxcblxuICB3aXBlQ2FydCgpIHtcbiAgICB0aGlzLml0ZW1zID0gW107XG4gIH1cbn0pIiwgImV4cG9ydCBjb25zdCBmb3JtYXRDdXJyZW5jeSA9IChlbCwgeyBleHByZXNzaW9uIH0sIHsgZXZhbHVhdGVMYXRlciwgZWZmZWN0IH0pID0+IHtcbiAgY29uc3QgZm9ybWF0Q3VycmVuY3kgPSBldmFsdWF0ZUxhdGVyKGV4cHJlc3Npb24pO1xuXG4gIGVmZmVjdCgoKSA9PiB7XG4gICAgZm9ybWF0Q3VycmVuY3koYW1vdW50ID0+IHtcbiAgICAgIGNvbnN0IGZvcm1hdHRlZEFtb3VudCA9IHR5cGVvZiBhbW91bnQgPT0gXCJudW1iZXJcIlxuICAgICAgICA/IGAkJHthbW91bnQudG9GaXhlZCgyKX1gXG4gICAgICAgIDogYW1vdW50O1xuICAgICAgZWwuaW5uZXJIVE1MID0gZm9ybWF0dGVkQW1vdW50O1xuICAgIH0pXG4gICAgXG4gIH0pO1xufSIsICJleHBvcnQgY29uc3QganNvbkVuYyA9IHtcbiAgb25FdmVudDogZnVuY3Rpb24gKG5hbWUsIGV2dCkge1xuICAgIGlmIChuYW1lID09PSBcImh0bXg6Y29uZmlnUmVxdWVzdFwiKSB7XG4gICAgICBldnQuZGV0YWlsLmhlYWRlcnNbXCJDb250ZW50LVR5cGVcIl0gPSBcImFwcGxpY2F0aW9uL2pzb25cIjtcbiAgICB9XG4gIH0sXG4gIGVuY29kZVBhcmFtZXRlcnM6IGZ1bmN0aW9uICh4aHIsIHBhcmFtZXRlcnMsIGVsdCkge1xuICAgIHhoci5vdmVycmlkZU1pbWVUeXBlKFwidGV4dC9qc29uXCIpO1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShwYXJhbWV0ZXJzKTtcbiAgfSxcbn07XG4iLCAiZXhwb3J0IGRlZmF1bHQgKCkgPT4gKHtcbiAgY2FydDogbnVsbCxcblxuICBpbml0KCkge1xuICAgIHRoaXMuY2FydCA9IHRoaXMuJHN0b3JlLmNhcnRTdG9yZTtcbiAgfSxcbn0pIiwgImV4cG9ydCBkZWZhdWx0ICgpID0+ICh7XG5cbiAgdG90YWw6IDAsXG4gIHRpbWVvdXRJZDogbnVsbCxcblxuICBpbml0KCkge1xuICAgIGNvbnN0IGdsb3dDbGFzcyA9IFwiYmctZ3JlZW4tMjAwXCI7XG4gICAgdGhpcy50b3RhbCA9IHRoaXMuJHN0b3JlLmNhcnRTdG9yZS5jYXJ0VG90YWw7XG4gICAgXG4gICAgdGhpcy4kd2F0Y2goXCIkc3RvcmUuY2FydFN0b3JlLml0ZW1zXCIsICgpID0+IHtcbiAgICAgIHRoaXMudG90YWwgPSB0aGlzLiRzdG9yZS5jYXJ0U3RvcmUuY2FydFRvdGFsO1xuICAgICAgdGhpcy4kZWwuY2xhc3NMaXN0LmFkZChnbG93Q2xhc3MpO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuJGVsLmNsYXNzTGlzdC5yZW1vdmUoZ2xvd0NsYXNzKTtcbiAgICAgIH0sIDMwMCk7XG4gICAgfSlcbiAgfSxcblxuICBkZXN0cm95KCkge1xuICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXRJZClcbiAgfVxufSkiLCAiZXhwb3J0IGRlZmF1bHQgKCkgPT4gKHtcbiAgb3BlbjogZmFsc2UsXG4gIGluaXQoKSB7XG4gICAgbmV3IFBhZ2VmaW5kVUkoeyBlbGVtZW50OiAnI3NlYXJjaCcsIHNob3dTdWJSZXN1bHRzOiBmYWxzZSwgc2hvd0ltYWdlczogdHJ1ZSwgaGlnaGxpZ2h0UGFyYW06ICdoaWdobGlnaHQnIH0pOyBcbiAgICB0aGlzLiR3YXRjaCgnb3BlbicsIChvcGVuKSA9PiB7IFxuICAgICAgdGhpcy4kbmV4dFRpY2soKCkgPT4gb3BlbiAmJiB0aGlzLiRyZWZzWydzZWFyY2gtY29tcG9uZW50J10uZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2lucHV0JylbMF0uZm9jdXMoKSlcbiAgICB9KVxuICB9LFxuICB0cmlnZ2VyOiB7XG4gICAgW1wieC1zaG93XCJdKCkgeyByZXR1cm4gdGhpcy5vcGVuIH0sXG4gICAgW1wiQGtleWRvd24ud2luZG93LmVzY2FwZVwiXSgpIHsgdGhpcy5vcGVuID0gZmFsc2UgfSxcbiAgICBbXCJAY2FudmFzLW9wZW4ud2luZG93XCJdKCkgeyB0aGlzLm9wZW4gPSB0cnVlIH1cbiAgfVxufSkiLCAiZXhwb3J0IGRlZmF1bHQgKCkgPT4gKHtcbiAgXG4gIGN1cnJlbnRTbGlkZTogMCxcbiAgbnVtYmVyT2ZTbGlkZXM6IDAsXG4gIGF0QmVnaW5uaW5nOiBmYWxzZSxcbiAgYXRFbmQ6IGZhbHNlLFxuICBhdXRvU2xpZGVJbnRlcnZhbDogbnVsbCxcbiAgYmFzZVNjcm9sbDogMCxcbiAgbWF4U2Nyb2xsOiAwLFxuICBnZXQgY3VycmVudFNjcm9sbCgpIHtcbiAgICByZXR1cm4gdGhpcy4kcmVmcy5zbGlkZXIuc2Nyb2xsTGVmdDtcbiAgfSxcbiAgXG4gIGluaXQoKSB7XG4gICAgdGhpcy5udW1iZXJPZlNsaWRlcyA9IHRoaXMuJHJlZnMuc2xpZGVyLmNoaWxkcmVuLmxlbmd0aDtcbiAgICB0aGlzLmJhc2VTY3JvbGwgPSB0aGlzLiRyZWZzLnNsaWRlci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aDtcbiAgICB0aGlzLm1heFNjcm9sbCA9IHRoaXMuYmFzZVNjcm9sbCAqICh0aGlzLm51bWJlck9mU2xpZGVzIC0gMSk7XG4gICAgdGhpcy4kd2F0Y2goJ2N1cnJlbnRTbGlkZScsICh2YWx1ZSkgPT4ge1xuICAgICAgdGhpcy4kcmVmcy5zbGlkZXIuc2Nyb2xsVG8oeyBsZWZ0OiB2YWx1ZSAqIHRoaXMuYmFzZVNjcm9sbCwgYmVoYXZpb3I6IFwic21vb3RoXCIgfSk7XG4gICAgfSk7XG4gICAgdGhpcy5zdGFydEF1dG9TbGlkZSgpO1xuICB9LFxuXG4gIGRlc3Ryb3koKSB7XG4gICAgdGhpcy5zdG9wQXV0b1NsaWRlKCk7XG4gIH0sXG4gIFxuICBzdGFydEF1dG9TbGlkZSgpIHtcbiAgICB0aGlzLmF1dG9TbGlkZUludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4geyB0aGlzLm5leHQoKSB9LCA1NTU1NTUwMDApO1xuICB9LFxuICBcbiAgc3RvcEF1dG9TbGlkZSgpIHtcbiAgICBjbGVhckludGVydmFsKHRoaXMuYXV0b1NsaWRlSW50ZXJ2YWwpO1xuICB9LFxuICBcbiAgZ29Ub1NsaWRlKGluZGV4KSB7XG4gICAgdGhpcy5jdXJyZW50U2xpZGUgPSBpbmRleDtcbiAgfSxcbiAgXG4gIG5leHQoKSB7XG4gICAgaWYgKHRoaXMuY3VycmVudFNsaWRlICsxID09PSB0aGlzLm51bWJlck9mU2xpZGVzKSByZXR1cm4gdGhpcy5jdXJyZW50U2xpZGUgPSAwO1xuICAgIHRoaXMuY3VycmVudFNsaWRlICs9IDE7XG4gIH0sXG4gIFxuICBwcmV2KCkge1xuICAgIGlmICh0aGlzLmN1cnJlbnRTbGlkZSA9PT0gMCkgcmV0dXJuIHRoaXMuY3VycmVudFNsaWRlID0gdGhpcy5udW1iZXJPZlNsaWRlcyAtMTtcbiAgICB0aGlzLmN1cnJlbnRTbGlkZSAtPSAxO1xuICB9LFxuICBcbiAgdXBkYXRlQnV0dG9uU3RhdGVzKCkge1xuICAgIGxldCBzbGlkZUVscyA9IHRoaXMuJHJlZnMuc2xpZGVyLmNoaWxkcmVuO1xuICAgIHRoaXMuYXRCZWdpbm5pbmcgPSBzbGlkZUVsc1swXSA9PT0gdGhpcy4kZWw7XG4gICAgdGhpcy5hdEVuZCA9IHNsaWRlRWxzW3NsaWRlRWxzLmxlbmd0aC0xXSA9PT0gdGhpcy4kZWw7XG4gIH0sXG4gIFxuICBmb2N1c2FibGVXaGVuVmlzaWJsZToge1xuICAgIFtcIngtaW50ZXJzZWN0OmVudGVyXCJdKCkge1xuICAgICAgdGhpcy4kZWwucmVtb3ZlQXR0cmlidXRlKFwidGFiaW5kZXhcIik7XG4gICAgfSxcbiAgICBbXCJ4LWludGVyc2VjdDpsZWF2ZVwiXSgpIHtcbiAgICAgIHRoaXMuJGVsLnNldEF0dHJpYnV0ZShcInRhYmluZGV4XCIsIFwiLTFcIik7XG4gICAgfSxcbiAgfSxcbiAgXG4gIGRpc2FibGVOZXh0QW5kUHJldmlvdXNCdXR0b25zOiB7XG4gICAgW1wieC1pbnRlcnNlY3Q6ZW50ZXIudGhyZXNob2xkLjA1XCJdKCkge1xuICAgICAgdGhpcy51cGRhdGVCdXR0b25TdGF0ZXMoKTtcbiAgICB9LFxuICAgIFtcIngtaW50ZXJzZWN0OmxlYXZlLnRocmVzaG9sZC4wNVwiXSgpIHtcbiAgICAgIHRoaXMudXBkYXRlQnV0dG9uU3RhdGVzKCk7XG4gICAgfSxcbiAgfVxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUEsT0FBQyxTQUFTQSxJQUFFQyxJQUFFO0FBQUMsWUFBRyxPQUFPLFdBQVMsY0FBWSxPQUFPLEtBQUk7QUFBQyxpQkFBTyxDQUFDLEdB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QUFPLEtBQUssa0JBQWtCLHNCQUFjO0FBQzVDLGlCQUFPLEtBQUssYUFBYSxpQkFBUztBQUNsQyxpQkFBTyxLQUFLLGVBQWUsbUJBQVc7QUFDdEMsaUJBQU8sTUFBTTsiLAogICJuYW1lcyI6IFsiZSIsICJ0IiwgInIiLCAibiIsICJpIiwgImEiLCAibyIsICJzIiwgImwiLCAidSIsICJmIiwgImMiLCAiaCIsICJ2IiwgIk0iLCAiWCIsICJkIiwgIkQiLCAiVSIsICJnIiwgIm0iLCAicCIsICJ4IiwgIkIiLCAiRiIsICJWIiwgInkiLCAiYiIsICJ3IiwgImoiLCAiUyIsICJFIiwgIl8iLCAiQyIsICJSIiwgInoiLCAiJCIsICJUIiwgIk8iLCAiVyIsICJxIiwgIkgiLCAiRyIsICJKIiwgIkwiLCAiQSIsICJaIiwgIk4iLCAiSyIsICJJIiwgImsiLCAiUCIsICJZIiwgImkiLCAiZSIsICJhIiwgImIiLCAiXyIsICJjIiwgImwiLCAidiIsICJyIiwgInNyY19kZWZhdWx0IiwgIkFscGluZSIsICJlIiwgImdldCIsICJzZXQiLCAibW9kdWxlX2RlZmF1bHQiLCAic3JjX2RlZmF1bHQiLCAiQWxwaW5lIiwgImV2YWx1YXRlTGF0ZXIiLCAiY2xlYW51cCIsICJldmFsdWF0ZSIsICJvYnNlcnZlciIsICJpIiwgInYiLCAibW9kdWxlX2RlZmF1bHQiLCAiQWxwaW5lIiwgImEiLCAiaSIsICJldmFsdWF0ZUxhdGVyIiwgImVmZmVjdCIsICJmb3JtYXRDdXJyZW5jeSIsICJIdG14IiwgIm1vZHVsZV9kZWZhdWx0Il0KfQo=
