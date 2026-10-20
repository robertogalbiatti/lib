import ce, { createContext as ie, useState as le } from "react";
var F = { exports: {} }, R = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var q;
function ue() {
  if (q)
    return R;
  q = 1;
  var s = Symbol.for("react.transitional.element"), c = Symbol.for("react.fragment");
  function i(l, t, o) {
    var u = null;
    if (o !== void 0 && (u = "" + o), t.key !== void 0 && (u = "" + t.key), "key" in t) {
      o = {};
      for (var f in t)
        f !== "key" && (o[f] = t[f]);
    } else
      o = t;
    return t = o.ref, {
      $$typeof: s,
      type: l,
      key: u,
      ref: t !== void 0 ? t : null,
      props: o
    };
  }
  return R.Fragment = c, R.jsx = i, R.jsxs = i, R;
}
var T = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var G;
function de() {
  return G || (G = 1, process.env.NODE_ENV !== "production" && function() {
    function s(e) {
      if (e == null)
        return null;
      if (typeof e == "function")
        return e.$$typeof === oe ? null : e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case k:
          return "Fragment";
        case p:
          return "Profiler";
        case A:
          return "StrictMode";
        case ee:
          return "Suspense";
        case re:
          return "SuspenseList";
        case ne:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case O:
            return "Portal";
          case Q:
            return (e.displayName || "Context") + ".Provider";
          case Z:
            return (e._context.displayName || "Context") + ".Consumer";
          case K:
            var r = e.render;
            return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case te:
            return r = e.displayName || null, r !== null ? r : s(e.type) || "Memo";
          case I:
            r = e._payload, e = e._init;
            try {
              return s(e(r));
            } catch {
            }
        }
      return null;
    }
    function c(e) {
      return "" + e;
    }
    function i(e) {
      try {
        c(e);
        var r = !1;
      } catch {
        r = !0;
      }
      if (r) {
        r = console;
        var a = r.error, d = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a.call(
          r,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          d
        ), c(e);
      }
    }
    function l(e) {
      if (e === k)
        return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === I)
        return "<...>";
      try {
        var r = s(e);
        return r ? "<" + r + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function t() {
      var e = P.A;
      return e === null ? null : e.getOwner();
    }
    function o() {
      return Error("react-stack-top-frame");
    }
    function u(e) {
      if (D.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function f(e, r) {
      function a() {
        M || (M = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          r
        ));
      }
      a.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: a,
        configurable: !0
      });
    }
    function b() {
      var e = s(this.type);
      return V[e] || (V[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function j(e, r, a, d, E, m, C, $) {
      return a = m.ref, e = {
        $$typeof: N,
        type: e,
        key: r,
        props: m,
        _owner: E
      }, (a !== void 0 ? a : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: b
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
        value: C
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: $
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function h(e, r, a, d, E, m, C, $) {
      var _ = r.children;
      if (_ !== void 0)
        if (d)
          if (ae(_)) {
            for (d = 0; d < _.length; d++)
              x(_[d]);
            Object.freeze && Object.freeze(_);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else
          x(_);
      if (D.call(r, "key")) {
        _ = s(e);
        var y = Object.keys(r).filter(function(se) {
          return se !== "key";
        });
        d = 0 < y.length ? "{key: someKey, " + y.join(": ..., ") + ": ...}" : "{key: someKey}", U[_ + d] || (y = 0 < y.length ? "{" + y.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          d,
          _,
          y,
          _
        ), U[_ + d] = !0);
      }
      if (_ = null, a !== void 0 && (i(a), _ = "" + a), u(r) && (i(r.key), _ = "" + r.key), "key" in r) {
        a = {};
        for (var Y in r)
          Y !== "key" && (a[Y] = r[Y]);
      } else
        a = r;
      return _ && f(
        a,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), j(
        e,
        _,
        m,
        E,
        t(),
        a,
        C,
        $
      );
    }
    function x(e) {
      typeof e == "object" && e !== null && e.$$typeof === N && e._store && (e._store.validated = 1);
    }
    var v = ce, N = Symbol.for("react.transitional.element"), O = Symbol.for("react.portal"), k = Symbol.for("react.fragment"), A = Symbol.for("react.strict_mode"), p = Symbol.for("react.profiler"), Z = Symbol.for("react.consumer"), Q = Symbol.for("react.context"), K = Symbol.for("react.forward_ref"), ee = Symbol.for("react.suspense"), re = Symbol.for("react.suspense_list"), te = Symbol.for("react.memo"), I = Symbol.for("react.lazy"), ne = Symbol.for("react.activity"), oe = Symbol.for("react.client.reference"), P = v.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, D = Object.prototype.hasOwnProperty, ae = Array.isArray, w = console.createTask ? console.createTask : function() {
      return null;
    };
    v = {
      "react-stack-bottom-frame": function(e) {
        return e();
      }
    };
    var M, V = {}, W = v["react-stack-bottom-frame"].bind(
      v,
      o
    )(), z = w(l(o)), U = {};
    T.Fragment = k, T.jsx = function(e, r, a, d, E) {
      var m = 1e4 > P.recentlyCreatedOwnerStacks++;
      return h(
        e,
        r,
        a,
        !1,
        d,
        E,
        m ? Error("react-stack-top-frame") : W,
        m ? w(l(e)) : z
      );
    }, T.jsxs = function(e, r, a, d, E) {
      var m = 1e4 > P.recentlyCreatedOwnerStacks++;
      return h(
        e,
        r,
        a,
        !0,
        d,
        E,
        m ? Error("react-stack-top-frame") : W,
        m ? w(l(e)) : z
      );
    };
  }()), T;
}
process.env.NODE_ENV === "production" ? F.exports = ue() : F.exports = de();
var n = F.exports;
const _e = "_button_fj8a2_1", fe = "_primary_fj8a2_18", me = "_secondary_fj8a2_23", be = "_tertiary_fj8a2_29", pe = "_disabled_fj8a2_34", B = {
  button: _e,
  primary: fe,
  secondary: me,
  tertiary: be,
  disabled: pe
}, De = ({
  children: s,
  variant: c = "primary",
  className: i = "",
  disabled: l = !1,
  ...t
}) => {
  const o = [
    B.button,
    B[c],
    l ? B.disabled : "",
    i
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ n.jsx("button", { className: o, disabled: l, ...t, children: s });
}, Ee = "_container_14ixs_1", ve = "_checkmark_14ixs_20", he = "_disabled_14ixs_53", L = {
  container: Ee,
  checkmark: ve,
  disabled: he
}, Me = ({
  label: s,
  variant: c = "primary",
  className: i = "",
  ...l
}) => {
  const t = [L.container, L[c], i].filter(Boolean).join(" ");
  return /* @__PURE__ */ n.jsxs("label", { className: t, children: [
    /* @__PURE__ */ n.jsx("input", { type: "checkbox", ...l }),
    /* @__PURE__ */ n.jsx("span", { children: s }),
    /* @__PURE__ */ n.jsx("span", { className: L.checkmark })
  ] });
}, ye = "_container_1u349_1", je = "_clickable_1u349_14", xe = "_thumbnail_1u349_25", ke = "_text_1u349_40", Re = "_removeButton_1u349_44", Te = "_primary_1u349_64", ge = "_secondary_1u349_71", Se = "_disabled_1u349_78", g = {
  container: ye,
  clickable: je,
  thumbnail: xe,
  text: ke,
  removeButton: Re,
  primary: Te,
  secondary: ge,
  disabled: Se
}, Ve = ({
  label: s,
  color: c,
  thumbnail: i,
  className: l = "",
  onRemove: t,
  onClick: o,
  ...u
}) => {
  const f = [
    g.container,
    o ? g.clickable : "",
    l
  ].filter(Boolean).join(" "), b = o ? "button" : "div", j = c ? { backgroundColor: c } : void 0;
  return /* @__PURE__ */ n.jsxs(
    b,
    {
      style: j,
      className: f,
      onClick: o,
      ...u,
      children: [
        i && /* @__PURE__ */ n.jsx("span", { className: g.thumbnail, children: i }),
        /* @__PURE__ */ n.jsx("span", { className: g.text, children: s }),
        t && /* @__PURE__ */ n.jsx(
          "button",
          {
            className: g.removeButton,
            onClick: (h) => {
              h.stopPropagation(), t();
            },
            children: "×"
          }
        )
      ]
    }
  );
}, Ne = "_container_n4d6m_1", Oe = "_primary_n4d6m_52", Ae = "_secondary_n4d6m_56", J = {
  container: Ne,
  primary: Oe,
  secondary: Ae
}, We = ({
  type: s = "text",
  id: c,
  required: i,
  variant: l = "primary",
  label: t,
  className: o = "",
  ...u
}) => {
  const f = [J.container, J[l], o].filter(Boolean).join(" ");
  return /* @__PURE__ */ n.jsxs("div", { className: f, children: [
    /* @__PURE__ */ n.jsx(
      "input",
      {
        ...u,
        id: c,
        type: s,
        required: i,
        placeholder: " "
      }
    ),
    /* @__PURE__ */ n.jsxs("label", { htmlFor: c, children: [
      t,
      i && /* @__PURE__ */ n.jsx("span", { "aria-hidden": "true", children: " *" })
    ] })
  ] });
}, Pe = "_container_1y3h3_1", X = {
  container: Pe
}, ze = ({
  id: s,
  required: c,
  variant: i = "primary",
  label: l,
  className: t = "",
  ...o
}) => {
  const u = [X.container, X[i], t].filter(Boolean).join(" ");
  return /* @__PURE__ */ n.jsxs("div", { className: u, children: [
    /* @__PURE__ */ n.jsx(
      "textarea",
      {
        ...o,
        required: c,
        placeholder: " "
      }
    ),
    /* @__PURE__ */ n.jsxs("label", { htmlFor: s, children: [
      l,
      c && /* @__PURE__ */ n.jsx("span", { "aria-hidden": "true", children: " *" })
    ] })
  ] });
}, we = "_radiogroup_qikbg_1", Ce = "_vertical_qikbg_8", $e = "_horizontal_qikbg_12", Ye = "_disabled_qikbg_17", H = {
  radiogroup: we,
  vertical: Ce,
  horizontal: $e,
  disabled: Ye
}, Be = ie(null), Ue = ({
  name: s,
  label: c,
  value: i,
  onValueChange: l,
  children: t,
  orientation: o = "vertical",
  disabled: u = !1,
  className: f = ""
}) => {
  const b = [
    H.radiogroup,
    H[o],
    f
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ n.jsx(
    Be.Provider,
    {
      value: { name: s, value: i, onValueChange: l, disabled: u },
      children: /* @__PURE__ */ n.jsxs("fieldset", { className: b, disabled: u, children: [
        /* @__PURE__ */ n.jsx("legend", { children: c }),
        t
      ] })
    }
  );
}, Le = "_container_yyc9a_1", Fe = "_clearButton_yyc9a_37", S = {
  container: Le,
  clearButton: Fe
}, qe = ({
  label: s,
  variant: c = "primary",
  clearable: i = !1,
  className: l = "",
  id: t,
  children: o,
  value: u,
  defaultValue: f,
  onChange: b,
  ...j
}) => {
  const [h, x] = le(
    String(u ?? f ?? "")
  ), v = u !== void 0 ? String(u) : h, N = v !== "", O = [S.container, S[c], l].filter(Boolean).join(" "), k = (p) => {
    u === void 0 && x(p.target.value), b == null || b(p);
  }, A = () => {
    u === void 0 && x("");
    const p = document.getElementById(t);
    p && (p.value = "", p.dispatchEvent(new Event("change", { bubbles: !0 })));
  };
  return /* @__PURE__ */ n.jsxs("div", { className: O, children: [
    /* @__PURE__ */ n.jsxs(
      "select",
      {
        id: t,
        className: S.select,
        value: v,
        onChange: k,
        required: !0,
        ...j,
        children: [
          /* @__PURE__ */ n.jsx("option", { value: "", disabled: !0, hidden: !0 }),
          o
        ]
      }
    ),
    /* @__PURE__ */ n.jsx("label", { htmlFor: t, className: S.label, children: s }),
    i && N && /* @__PURE__ */ n.jsx(
      "button",
      {
        type: "button",
        className: S.clearButton,
        "aria-label": `Limpar ${s}`,
        onClick: A,
        children: "×"
      }
    )
  ] });
};
export {
  De as LibButton,
  Me as LibCheckbox,
  Ve as LibChip,
  Ue as LibRadioGroup,
  qe as LibSelect,
  ze as LibTextArea,
  We as LibTextField,
  Be as RadioGroupContext
};
