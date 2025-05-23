import ee from "react";
var S = { exports: {} }, b = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var F;
function re() {
  if (F)
    return b;
  F = 1;
  var u = Symbol.for("react.transitional.element"), d = Symbol.for("react.fragment");
  function l(f, a, s) {
    var _ = null;
    if (s !== void 0 && (_ = "" + s), a.key !== void 0 && (_ = "" + a.key), "key" in a) {
      s = {};
      for (var E in a)
        E !== "key" && (s[E] = a[E]);
    } else
      s = a;
    return a = s.ref, {
      $$typeof: u,
      type: f,
      key: _,
      ref: a !== void 0 ? a : null,
      props: s
    };
  }
  return b.Fragment = d, b.jsx = l, b.jsxs = l, b;
}
var R = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var D;
function te() {
  return D || (D = 1, process.env.NODE_ENV !== "production" && function() {
    function u(e) {
      if (e == null)
        return null;
      if (typeof e == "function")
        return e.$$typeof === Z ? null : e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case T:
          return "Fragment";
        case z:
          return "Profiler";
        case U:
          return "StrictMode";
        case J:
          return "Suspense";
        case X:
          return "SuspenseList";
        case H:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case W:
            return "Portal";
          case q:
            return (e.displayName || "Context") + ".Provider";
          case V:
            return (e._context.displayName || "Context") + ".Consumer";
          case G:
            var r = e.render;
            return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case B:
            return r = e.displayName || null, r !== null ? r : u(e.type) || "Memo";
          case g:
            r = e._payload, e = e._init;
            try {
              return u(e(r));
            } catch {
            }
        }
      return null;
    }
    function d(e) {
      return "" + e;
    }
    function l(e) {
      try {
        d(e);
        var r = !1;
      } catch {
        r = !0;
      }
      if (r) {
        r = console;
        var t = r.error, n = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t.call(
          r,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          n
        ), d(e);
      }
    }
    function f(e) {
      if (e === T)
        return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === g)
        return "<...>";
      try {
        var r = u(e);
        return r ? "<" + r + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function a() {
      var e = p.A;
      return e === null ? null : e.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function _(e) {
      if (h.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function E(e, r) {
      function t() {
        N || (N = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          r
        ));
      }
      t.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: t,
        configurable: !0
      });
    }
    function L() {
      var e = u(this.type);
      return C[e] || (C[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function M(e, r, t, n, i, c, O, w) {
      return t = c.ref, e = {
        $$typeof: j,
        type: e,
        key: r,
        props: c,
        _owner: i
      }, (t !== void 0 ? t : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: L
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(e, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: O
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: w
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function x(e, r, t, n, i, c, O, w) {
      var o = r.children;
      if (o !== void 0)
        if (n)
          if (Q(o)) {
            for (n = 0; n < o.length; n++)
              P(o[n]);
            Object.freeze && Object.freeze(o);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else
          P(o);
      if (h.call(r, "key")) {
        o = u(e);
        var m = Object.keys(r).filter(function(K) {
          return K !== "key";
        });
        n = 0 < m.length ? "{key: someKey, " + m.join(": ..., ") + ": ...}" : "{key: someKey}", I[o + n] || (m = 0 < m.length ? "{" + m.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          n,
          o,
          m,
          o
        ), I[o + n] = !0);
      }
      if (o = null, t !== void 0 && (l(t), o = "" + t), _(r) && (l(r.key), o = "" + r.key), "key" in r) {
        t = {};
        for (var y in r)
          y !== "key" && (t[y] = r[y]);
      } else
        t = r;
      return o && E(
        t,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), M(
        e,
        o,
        c,
        i,
        a(),
        t,
        O,
        w
      );
    }
    function P(e) {
      typeof e == "object" && e !== null && e.$$typeof === j && e._store && (e._store.validated = 1);
    }
    var v = ee, j = Symbol.for("react.transitional.element"), W = Symbol.for("react.portal"), T = Symbol.for("react.fragment"), U = Symbol.for("react.strict_mode"), z = Symbol.for("react.profiler"), V = Symbol.for("react.consumer"), q = Symbol.for("react.context"), G = Symbol.for("react.forward_ref"), J = Symbol.for("react.suspense"), X = Symbol.for("react.suspense_list"), B = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), H = Symbol.for("react.activity"), Z = Symbol.for("react.client.reference"), p = v.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, h = Object.prototype.hasOwnProperty, Q = Array.isArray, k = console.createTask ? console.createTask : function() {
      return null;
    };
    v = {
      "react-stack-bottom-frame": function(e) {
        return e();
      }
    };
    var N, C = {}, Y = v["react-stack-bottom-frame"].bind(
      v,
      s
    )(), $ = k(f(s)), I = {};
    R.Fragment = T, R.jsx = function(e, r, t, n, i) {
      var c = 1e4 > p.recentlyCreatedOwnerStacks++;
      return x(
        e,
        r,
        t,
        !1,
        n,
        i,
        c ? Error("react-stack-top-frame") : Y,
        c ? k(f(e)) : $
      );
    }, R.jsxs = function(e, r, t, n, i) {
      var c = 1e4 > p.recentlyCreatedOwnerStacks++;
      return x(
        e,
        r,
        t,
        !0,
        n,
        i,
        c ? Error("react-stack-top-frame") : Y,
        c ? k(f(e)) : $
      );
    };
  }()), R;
}
process.env.NODE_ENV === "production" ? S.exports = re() : S.exports = te();
var ne = S.exports;
const oe = "_button_x6w2k_1", ae = "_primary_x6w2k_17", se = "_secondary_x6w2k_22", ce = "_tertiary_x6w2k_28", ue = "_disabled_x6w2k_34", A = {
  button: oe,
  primary: ae,
  secondary: se,
  tertiary: ce,
  disabled: ue
}, ie = ({
  children: u,
  onClick: d,
  disabled: l = !1,
  variant: f = "primary"
}) => {
  const a = `${A.button} ${A[f]} ${l ? A.disabled : ""}`;
  return /* @__PURE__ */ ne.jsx(
    "button",
    {
      className: a,
      onClick: d,
      disabled: l,
      children: u
    }
  );
};
export {
  ie as Button
};
