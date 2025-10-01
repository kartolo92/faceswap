var Sf = e => {
    throw TypeError(e)
};
var rl = (e, t, n) => t.has(e) || Sf("Cannot " + n);
var R = (e, t, n) => (rl(e, t, "read from private field"), n ? n.call(e) : t.get(e)),
    Y = (e, t, n) => t.has(e) ? Sf("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n),
    B = (e, t, n, r) => (rl(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n),
    Te = (e, t, n) => (rl(e, t, "access private method"), n);
var $o = (e, t, n, r) => ({
    set _(i) {
        B(e, t, i, n)
    },
    get _() {
        return R(e, t, r)
    }
});

function p1(e, t) {
    for (var n = 0; n < t.length; n++) {
        const r = t[n];
        if (typeof r != "string" && !Array.isArray(r)) {
            for (const i in r)
                if (i !== "default" && !(i in e)) {
                    const o = Object.getOwnPropertyDescriptor(r, i);
                    o && Object.defineProperty(e, i, o.get ? o : {
                        enumerable: !0,
                        get: () => r[i]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
    }))
}(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
    new MutationObserver(i => {
        for (const o of i)
            if (o.type === "childList")
                for (const s of o.addedNodes) s.tagName === "LINK" && s.rel === "modulepreload" && r(s)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function n(i) {
        const o = {};
        return i.integrity && (o.integrity = i.integrity), i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy), i.crossOrigin === "use-credentials" ? o.credentials = "include" : i.crossOrigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin", o
    }

    function r(i) {
        if (i.ep) return;
        i.ep = !0;
        const o = n(i);
        fetch(i.href, o)
    }
})();

function Vm(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var Fm = {
        exports: {}
    },
    xa = {},
    Im = {
        exports: {}
    },
    W = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Mo = Symbol.for("react.element"),
    m1 = Symbol.for("react.portal"),
    g1 = Symbol.for("react.fragment"),
    y1 = Symbol.for("react.strict_mode"),
    v1 = Symbol.for("react.profiler"),
    w1 = Symbol.for("react.provider"),
    x1 = Symbol.for("react.context"),
    S1 = Symbol.for("react.forward_ref"),
    P1 = Symbol.for("react.suspense"),
    C1 = Symbol.for("react.memo"),
    T1 = Symbol.for("react.lazy"),
    Pf = Symbol.iterator;

function E1(e) {
    return e === null || typeof e != "object" ? null : (e = Pf && e[Pf] || e["@@iterator"], typeof e == "function" ? e : null)
}
var zm = {
        isMounted: function() {
            return !1
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    },
    Bm = Object.assign,
    $m = {};

function hi(e, t, n) {
    this.props = e, this.context = t, this.refs = $m, this.updater = n || zm
}
hi.prototype.isReactComponent = {};
hi.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
};
hi.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
};

function Um() {}
Um.prototype = hi.prototype;

function xc(e, t, n) {
    this.props = e, this.context = t, this.refs = $m, this.updater = n || zm
}
var Sc = xc.prototype = new Um;
Sc.constructor = xc;
Bm(Sc, hi.prototype);
Sc.isPureReactComponent = !0;
var Cf = Array.isArray,
    Wm = Object.prototype.hasOwnProperty,
    Pc = {
        current: null
    },
    Hm = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };

function Km(e, t, n) {
    var r, i = {},
        o = null,
        s = null;
    if (t != null)
        for (r in t.ref !== void 0 && (s = t.ref), t.key !== void 0 && (o = "" + t.key), t) Wm.call(t, r) && !Hm.hasOwnProperty(r) && (i[r] = t[r]);
    var a = arguments.length - 2;
    if (a === 1) i.children = n;
    else if (1 < a) {
        for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2];
        i.children = l
    }
    if (e && e.defaultProps)
        for (r in a = e.defaultProps, a) i[r] === void 0 && (i[r] = a[r]);
    return {
        $$typeof: Mo,
        type: e,
        key: o,
        ref: s,
        props: i,
        _owner: Pc.current
    }
}

function k1(e, t) {
    return {
        $$typeof: Mo,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}

function Cc(e) {
    return typeof e == "object" && e !== null && e.$$typeof === Mo
}

function A1(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(n) {
        return t[n]
    })
}
var Tf = /\/+/g;

function il(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? A1("" + e.key) : t.toString(36)
}

function ps(e, t, n, r, i) {
    var o = typeof e;
    (o === "undefined" || o === "boolean") && (e = null);
    var s = !1;
    if (e === null) s = !0;
    else switch (o) {
        case "string":
        case "number":
            s = !0;
            break;
        case "object":
            switch (e.$$typeof) {
                case Mo:
                case m1:
                    s = !0
            }
    }
    if (s) return s = e, i = i(s), e = r === "" ? "." + il(s, 0) : r, Cf(i) ? (n = "", e != null && (n = e.replace(Tf, "$&/") + "/"), ps(i, t, n, "", function(u) {
        return u
    })) : i != null && (Cc(i) && (i = k1(i, n + (!i.key || s && s.key === i.key ? "" : ("" + i.key).replace(Tf, "$&/") + "/") + e)), t.push(i)), 1;
    if (s = 0, r = r === "" ? "." : r + ":", Cf(e))
        for (var a = 0; a < e.length; a++) {
            o = e[a];
            var l = r + il(o, a);
            s += ps(o, t, n, l, i)
        } else if (l = E1(e), typeof l == "function")
            for (e = l.call(e), a = 0; !(o = e.next()).done;) o = o.value, l = r + il(o, a++), s += ps(o, t, n, l, i);
        else if (o === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return s
}

function Uo(e, t, n) {
    if (e == null) return e;
    var r = [],
        i = 0;
    return ps(e, r, "", "", function(o) {
        return t.call(n, o, i++)
    }), r
}

function R1(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(), t.then(function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n)
        }, function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n)
        }), e._status === -1 && (e._status = 0, e._result = t)
    }
    if (e._status === 1) return e._result.default;
    throw e._result
}
var Ve = {
        current: null
    },
    ms = {
        transition: null
    },
    b1 = {
        ReactCurrentDispatcher: Ve,
        ReactCurrentBatchConfig: ms,
        ReactCurrentOwner: Pc
    };

function Gm() {
    throw Error("act(...) is not supported in production builds of React.")
}
W.Children = {
    map: Uo,
    forEach: function(e, t, n) {
        Uo(e, function() {
            t.apply(this, arguments)
        }, n)
    },
    count: function(e) {
        var t = 0;
        return Uo(e, function() {
            t++
        }), t
    },
    toArray: function(e) {
        return Uo(e, function(t) {
            return t
        }) || []
    },
    only: function(e) {
        if (!Cc(e)) throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
W.Component = hi;
W.Fragment = g1;
W.Profiler = v1;
W.PureComponent = xc;
W.StrictMode = y1;
W.Suspense = P1;
W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = b1;
W.act = Gm;
W.cloneElement = function(e, t, n) {
    if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = Bm({}, e.props),
        i = e.key,
        o = e.ref,
        s = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (o = t.ref, s = Pc.current), t.key !== void 0 && (i = "" + t.key), e.type && e.type.defaultProps) var a = e.type.defaultProps;
        for (l in t) Wm.call(t, l) && !Hm.hasOwnProperty(l) && (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l])
    }
    var l = arguments.length - 2;
    if (l === 1) r.children = n;
    else if (1 < l) {
        a = Array(l);
        for (var u = 0; u < l; u++) a[u] = arguments[u + 2];
        r.children = a
    }
    return {
        $$typeof: Mo,
        type: e.type,
        key: i,
        ref: o,
        props: r,
        _owner: s
    }
};
W.createContext = function(e) {
    return e = {
        $$typeof: x1,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    }, e.Provider = {
        $$typeof: w1,
        _context: e
    }, e.Consumer = e
};
W.createElement = Km;
W.createFactory = function(e) {
    var t = Km.bind(null, e);
    return t.type = e, t
};
W.createRef = function() {
    return {
        current: null
    }
};
W.forwardRef = function(e) {
    return {
        $$typeof: S1,
        render: e
    }
};
W.isValidElement = Cc;
W.lazy = function(e) {
    return {
        $$typeof: T1,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: R1
    }
};
W.memo = function(e, t) {
    return {
        $$typeof: C1,
        type: e,
        compare: t === void 0 ? null : t
    }
};
W.startTransition = function(e) {
    var t = ms.transition;
    ms.transition = {};
    try {
        e()
    } finally {
        ms.transition = t
    }
};
W.unstable_act = Gm;
W.useCallback = function(e, t) {
    return Ve.current.useCallback(e, t)
};
W.useContext = function(e) {
    return Ve.current.useContext(e)
};
W.useDebugValue = function() {};
W.useDeferredValue = function(e) {
    return Ve.current.useDeferredValue(e)
};
W.useEffect = function(e, t) {
    return Ve.current.useEffect(e, t)
};
W.useId = function() {
    return Ve.current.useId()
};
W.useImperativeHandle = function(e, t, n) {
    return Ve.current.useImperativeHandle(e, t, n)
};
W.useInsertionEffect = function(e, t) {
    return Ve.current.useInsertionEffect(e, t)
};
W.useLayoutEffect = function(e, t) {
    return Ve.current.useLayoutEffect(e, t)
};
W.useMemo = function(e, t) {
    return Ve.current.useMemo(e, t)
};
W.useReducer = function(e, t, n) {
    return Ve.current.useReducer(e, t, n)
};
W.useRef = function(e) {
    return Ve.current.useRef(e)
};
W.useState = function(e) {
    return Ve.current.useState(e)
};
W.useSyncExternalStore = function(e, t, n) {
    return Ve.current.useSyncExternalStore(e, t, n)
};
W.useTransition = function() {
    return Ve.current.useTransition()
};
W.version = "18.3.1";
Im.exports = W;
var w = Im.exports;
const Ne = Vm(w),
    M1 = p1({
        __proto__: null,
        default: Ne
    }, [w]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var D1 = w,
    O1 = Symbol.for("react.element"),
    L1 = Symbol.for("react.fragment"),
    N1 = Object.prototype.hasOwnProperty,
    _1 = D1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    j1 = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };

function Qm(e, t, n) {
    var r, i = {},
        o = null,
        s = null;
    n !== void 0 && (o = "" + n), t.key !== void 0 && (o = "" + t.key), t.ref !== void 0 && (s = t.ref);
    for (r in t) N1.call(t, r) && !j1.hasOwnProperty(r) && (i[r] = t[r]);
    if (e && e.defaultProps)
        for (r in t = e.defaultProps, t) i[r] === void 0 && (i[r] = t[r]);
    return {
        $$typeof: O1,
        type: e,
        key: o,
        ref: s,
        props: i,
        _owner: _1.current
    }
}
xa.Fragment = L1;
xa.jsx = Qm;
xa.jsxs = Qm;
Fm.exports = xa;
var C = Fm.exports,
    Ym = {
        exports: {}
    },
    et = {},
    Xm = {
        exports: {}
    },
    qm = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
    function t(A, O) {
        var _ = A.length;
        A.push(O);
        e: for (; 0 < _;) {
            var U = _ - 1 >>> 1,
                te = A[U];
            if (0 < i(te, O)) A[U] = O, A[_] = te, _ = U;
            else break e
        }
    }

    function n(A) {
        return A.length === 0 ? null : A[0]
    }

    function r(A) {
        if (A.length === 0) return null;
        var O = A[0],
            _ = A.pop();
        if (_ !== O) {
            A[0] = _;
            e: for (var U = 0, te = A.length, ft = te >>> 1; U < ft;) {
                var nt = 2 * (U + 1) - 1,
                    Si = A[nt],
                    $t = nt + 1,
                    Hn = A[$t];
                if (0 > i(Si, _)) $t < te && 0 > i(Hn, Si) ? (A[U] = Hn, A[$t] = _, U = $t) : (A[U] = Si, A[nt] = _, U = nt);
                else if ($t < te && 0 > i(Hn, _)) A[U] = Hn, A[$t] = _, U = $t;
                else break e
            }
        }
        return O
    }

    function i(A, O) {
        var _ = A.sortIndex - O.sortIndex;
        return _ !== 0 ? _ : A.id - O.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var o = performance;
        e.unstable_now = function() {
            return o.now()
        }
    } else {
        var s = Date,
            a = s.now();
        e.unstable_now = function() {
            return s.now() - a
        }
    }
    var l = [],
        u = [],
        c = 1,
        d = null,
        f = 3,
        m = !1,
        v = !1,
        y = !1,
        x = typeof setTimeout == "function" ? setTimeout : null,
        p = typeof clearTimeout == "function" ? clearTimeout : null,
        h = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);

    function g(A) {
        for (var O = n(u); O !== null;) {
            if (O.callback === null) r(u);
            else if (O.startTime <= A) r(u), O.sortIndex = O.expirationTime, t(l, O);
            else break;
            O = n(u)
        }
    }

    function S(A) {
        if (y = !1, g(A), !v)
            if (n(l) !== null) v = !0, $(P);
            else {
                var O = n(u);
                O !== null && F(S, O.startTime - A)
            }
    }

    function P(A, O) {
        v = !1, y && (y = !1, p(E), E = -1), m = !0;
        var _ = f;
        try {
            for (g(O), d = n(l); d !== null && (!(d.expirationTime > O) || A && !I());) {
                var U = d.callback;
                if (typeof U == "function") {
                    d.callback = null, f = d.priorityLevel;
                    var te = U(d.expirationTime <= O);
                    O = e.unstable_now(), typeof te == "function" ? d.callback = te : d === n(l) && r(l), g(O)
                } else r(l);
                d = n(l)
            }
            if (d !== null) var ft = !0;
            else {
                var nt = n(u);
                nt !== null && F(S, nt.startTime - O), ft = !1
            }
            return ft
        } finally {
            d = null, f = _, m = !1
        }
    }
    var T = !1,
        k = null,
        E = -1,
        D = 5,
        M = -1;

    function I() {
        return !(e.unstable_now() - M < D)
    }

    function j() {
        if (k !== null) {
            var A = e.unstable_now();
            M = A;
            var O = !0;
            try {
                O = k(!0, A)
            } finally {
                O ? H() : (T = !1, k = null)
            }
        } else T = !1
    }
    var H;
    if (typeof h == "function") H = function() {
        h(j)
    };
    else if (typeof MessageChannel < "u") {
        var L = new MessageChannel,
            Q = L.port2;
        L.port1.onmessage = j, H = function() {
            Q.postMessage(null)
        }
    } else H = function() {
        x(j, 0)
    };

    function $(A) {
        k = A, T || (T = !0, H())
    }

    function F(A, O) {
        E = x(function() {
            A(e.unstable_now())
        }, O)
    }
    e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(A) {
        A.callback = null
    }, e.unstable_continueExecution = function() {
        v || m || (v = !0, $(P))
    }, e.unstable_forceFrameRate = function(A) {
        0 > A || 125 < A ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : D = 0 < A ? Math.floor(1e3 / A) : 5
    }, e.unstable_getCurrentPriorityLevel = function() {
        return f
    }, e.unstable_getFirstCallbackNode = function() {
        return n(l)
    }, e.unstable_next = function(A) {
        switch (f) {
            case 1:
            case 2:
            case 3:
                var O = 3;
                break;
            default:
                O = f
        }
        var _ = f;
        f = O;
        try {
            return A()
        } finally {
            f = _
        }
    }, e.unstable_pauseExecution = function() {}, e.unstable_requestPaint = function() {}, e.unstable_runWithPriority = function(A, O) {
        switch (A) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                A = 3
        }
        var _ = f;
        f = A;
        try {
            return O()
        } finally {
            f = _
        }
    }, e.unstable_scheduleCallback = function(A, O, _) {
        var U = e.unstable_now();
        switch (typeof _ == "object" && _ !== null ? (_ = _.delay, _ = typeof _ == "number" && 0 < _ ? U + _ : U) : _ = U, A) {
            case 1:
                var te = -1;
                break;
            case 2:
                te = 250;
                break;
            case 5:
                te = 1073741823;
                break;
            case 4:
                te = 1e4;
                break;
            default:
                te = 5e3
        }
        return te = _ + te, A = {
            id: c++,
            callback: O,
            priorityLevel: A,
            startTime: _,
            expirationTime: te,
            sortIndex: -1
        }, _ > U ? (A.sortIndex = _, t(u, A), n(l) === null && A === n(u) && (y ? (p(E), E = -1) : y = !0, F(S, _ - U))) : (A.sortIndex = te, t(l, A), v || m || (v = !0, $(P))), A
    }, e.unstable_shouldYield = I, e.unstable_wrapCallback = function(A) {
        var O = f;
        return function() {
            var _ = f;
            f = O;
            try {
                return A.apply(this, arguments)
            } finally {
                f = _
            }
        }
    }
})(qm);
Xm.exports = qm;
var V1 = Xm.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var F1 = w,
    Ze = V1;

function b(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var Zm = new Set,
    ro = {};

function gr(e, t) {
    ti(e, t), ti(e + "Capture", t)
}

function ti(e, t) {
    for (ro[e] = t, e = 0; e < t.length; e++) Zm.add(t[e])
}
var Jt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
    eu = Object.prototype.hasOwnProperty,
    I1 = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    Ef = {},
    kf = {};

function z1(e) {
    return eu.call(kf, e) ? !0 : eu.call(Ef, e) ? !1 : I1.test(e) ? kf[e] = !0 : (Ef[e] = !0, !1)
}

function B1(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
        case "function":
        case "symbol":
            return !0;
        case "boolean":
            return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
        default:
            return !1
    }
}

function $1(e, t, n, r) {
    if (t === null || typeof t > "u" || B1(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null) switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
    }
    return !1
}

function Fe(e, t, n, r, i, o, s) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = i, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = s
}
var Ce = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    Ce[e] = new Fe(e, 0, !1, e, null, !1, !1)
});
[
    ["acceptCharset", "accept-charset"],
    ["className", "class"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"]
].forEach(function(e) {
    var t = e[0];
    Ce[t] = new Fe(t, 1, !1, e[1], null, !1, !1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    Ce[e] = new Fe(e, 2, !1, e.toLowerCase(), null, !1, !1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    Ce[e] = new Fe(e, 2, !1, e, null, !1, !1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    Ce[e] = new Fe(e, 3, !1, e.toLowerCase(), null, !1, !1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    Ce[e] = new Fe(e, 3, !0, e, null, !1, !1)
});
["capture", "download"].forEach(function(e) {
    Ce[e] = new Fe(e, 4, !1, e, null, !1, !1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    Ce[e] = new Fe(e, 6, !1, e, null, !1, !1)
});
["rowSpan", "start"].forEach(function(e) {
    Ce[e] = new Fe(e, 5, !1, e.toLowerCase(), null, !1, !1)
});
var Tc = /[\-:]([a-z])/g;

function Ec(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(Tc, Ec);
    Ce[t] = new Fe(t, 1, !1, e, null, !1, !1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(Tc, Ec);
    Ce[t] = new Fe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(Tc, Ec);
    Ce[t] = new Fe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    Ce[e] = new Fe(e, 1, !1, e.toLowerCase(), null, !1, !1)
});
Ce.xlinkHref = new Fe("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
    Ce[e] = new Fe(e, 1, !1, e.toLowerCase(), null, !0, !0)
});

function kc(e, t, n, r) {
    var i = Ce.hasOwnProperty(t) ? Ce[t] : null;
    (i !== null ? i.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && ($1(t, n, i, r) && (n = null), r || i === null ? z1(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = n === null ? i.type === 3 ? !1 : "" : n : (t = i.attributeName, r = i.attributeNamespace, n === null ? e.removeAttribute(t) : (i = i.type, n = i === 3 || i === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var an = F1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    Wo = Symbol.for("react.element"),
    Sr = Symbol.for("react.portal"),
    Pr = Symbol.for("react.fragment"),
    Ac = Symbol.for("react.strict_mode"),
    tu = Symbol.for("react.profiler"),
    Jm = Symbol.for("react.provider"),
    eg = Symbol.for("react.context"),
    Rc = Symbol.for("react.forward_ref"),
    nu = Symbol.for("react.suspense"),
    ru = Symbol.for("react.suspense_list"),
    bc = Symbol.for("react.memo"),
    pn = Symbol.for("react.lazy"),
    tg = Symbol.for("react.offscreen"),
    Af = Symbol.iterator;

function Ci(e) {
    return e === null || typeof e != "object" ? null : (e = Af && e[Af] || e["@@iterator"], typeof e == "function" ? e : null)
}
var se = Object.assign,
    ol;

function _i(e) {
    if (ol === void 0) try {
        throw Error()
    } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        ol = t && t[1] || ""
    }
    return `
` + ol + e
}
var sl = !1;

function al(e, t) {
    if (!e || sl) return "";
    sl = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() {
                    throw Error()
                }, Object.defineProperty(t.prototype, "props", {
                    set: function() {
                        throw Error()
                    }
                }), typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (u) {
                    var r = u
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (u) {
                    r = u
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (u) {
                r = u
            }
            e()
        }
    } catch (u) {
        if (u && r && typeof u.stack == "string") {
            for (var i = u.stack.split(`
`), o = r.stack.split(`
`), s = i.length - 1, a = o.length - 1; 1 <= s && 0 <= a && i[s] !== o[a];) a--;
            for (; 1 <= s && 0 <= a; s--, a--)
                if (i[s] !== o[a]) {
                    if (s !== 1 || a !== 1)
                        do
                            if (s--, a--, 0 > a || i[s] !== o[a]) {
                                var l = `
` + i[s].replace(" at new ", " at ");
                                return e.displayName && l.includes("<anonymous>") && (l = l.replace("<anonymous>", e.displayName)), l
                            }
                    while (1 <= s && 0 <= a);
                    break
                }
        }
    } finally {
        sl = !1, Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? _i(e) : ""
}

function U1(e) {
    switch (e.tag) {
        case 5:
            return _i(e.type);
        case 16:
            return _i("Lazy");
        case 13:
            return _i("Suspense");
        case 19:
            return _i("SuspenseList");
        case 0:
        case 2:
        case 15:
            return e = al(e.type, !1), e;
        case 11:
            return e = al(e.type.render, !1), e;
        case 1:
            return e = al(e.type, !0), e;
        default:
            return ""
    }
}

function iu(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
        case Pr:
            return "Fragment";
        case Sr:
            return "Portal";
        case tu:
            return "Profiler";
        case Ac:
            return "StrictMode";
        case nu:
            return "Suspense";
        case ru:
            return "SuspenseList"
    }
    if (typeof e == "object") switch (e.$$typeof) {
        case eg:
            return (e.displayName || "Context") + ".Consumer";
        case Jm:
            return (e._context.displayName || "Context") + ".Provider";
        case Rc:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case bc:
            return t = e.displayName || null, t !== null ? t : iu(e.type) || "Memo";
        case pn:
            t = e._payload, e = e._init;
            try {
                return iu(e(t))
            } catch {}
    }
    return null
}

function W1(e) {
    var t = e.type;
    switch (e.tag) {
        case 24:
            return "Cache";
        case 9:
            return (t.displayName || "Context") + ".Consumer";
        case 10:
            return (t._context.displayName || "Context") + ".Provider";
        case 18:
            return "DehydratedFragment";
        case 11:
            return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
        case 7:
            return "Fragment";
        case 5:
            return t;
        case 4:
            return "Portal";
        case 3:
            return "Root";
        case 6:
            return "Text";
        case 16:
            return iu(t);
        case 8:
            return t === Ac ? "StrictMode" : "Mode";
        case 22:
            return "Offscreen";
        case 12:
            return "Profiler";
        case 21:
            return "Scope";
        case 13:
            return "Suspense";
        case 19:
            return "SuspenseList";
        case 25:
            return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
            if (typeof t == "function") return t.displayName || t.name || null;
            if (typeof t == "string") return t
    }
    return null
}

function _n(e) {
    switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return e;
        case "object":
            return e;
        default:
            return ""
    }
}

function ng(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}

function H1(e) {
    var t = ng(e) ? "checked" : "value",
        n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
        r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var i = n.get,
            o = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function() {
                return i.call(this)
            },
            set: function(s) {
                r = "" + s, o.call(this, s)
            }
        }), Object.defineProperty(e, t, {
            enumerable: n.enumerable
        }), {
            getValue: function() {
                return r
            },
            setValue: function(s) {
                r = "" + s
            },
            stopTracking: function() {
                e._valueTracker = null, delete e[t]
            }
        }
    }
}

function Ho(e) {
    e._valueTracker || (e._valueTracker = H1(e))
}

function rg(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
        r = "";
    return e && (r = ng(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1
}

function Ns(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}

function ou(e, t) {
    var n = t.checked;
    return se({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ? ? e._wrapperState.initialChecked
    })
}

function Rf(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
        r = t.checked != null ? t.checked : t.defaultChecked;
    n = _n(t.value != null ? t.value : n), e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}

function ig(e, t) {
    t = t.checked, t != null && kc(e, "checked", t, !1)
}

function su(e, t) {
    ig(e, t);
    var n = _n(t.value),
        r = t.type;
    if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? au(e, t.type, n) : t.hasOwnProperty("defaultValue") && au(e, t.type, _n(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}

function bf(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
        t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n)
}

function au(e, t, n) {
    (t !== "number" || Ns(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var ji = Array.isArray;

function Fr(e, t, n, r) {
    if (e = e.options, t) {
        t = {};
        for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
        for (n = 0; n < e.length; n++) i = t.hasOwnProperty("$" + e[n].value), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + _n(n), t = null, i = 0; i < e.length; i++) {
            if (e[i].value === n) {
                e[i].selected = !0, r && (e[i].defaultSelected = !0);
                return
            }
            t !== null || e[i].disabled || (t = e[i])
        }
        t !== null && (t.selected = !0)
    }
}

function lu(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(b(91));
    return se({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}

function Mf(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children, t = t.defaultValue, n != null) {
            if (t != null) throw Error(b(92));
            if (ji(n)) {
                if (1 < n.length) throw Error(b(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""), n = t
    }
    e._wrapperState = {
        initialValue: _n(n)
    }
}

function og(e, t) {
    var n = _n(t.value),
        r = _n(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r)
}

function Df(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}

function sg(e) {
    switch (e) {
        case "svg":
            return "http://www.w3.org/2000/svg";
        case "math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml"
    }
}

function uu(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? sg(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var Ko, ag = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, i) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(t, n, r, i)
        })
    } : e
}(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
        for (Ko = Ko || document.createElement("div"), Ko.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Ko.firstChild; e.firstChild;) e.removeChild(e.firstChild);
        for (; t.firstChild;) e.appendChild(t.firstChild)
    }
});

function io(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var Bi = {
        animationIterationCount: !0,
        aspectRatio: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0
    },
    K1 = ["Webkit", "ms", "Moz", "O"];
Object.keys(Bi).forEach(function(e) {
    K1.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1), Bi[t] = Bi[e]
    })
});

function lg(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Bi.hasOwnProperty(e) && Bi[e] ? ("" + t).trim() : t + "px"
}

function ug(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0,
                i = lg(n, t[n], r);
            n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : e[n] = i
        }
}
var G1 = se({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});

function cu(e, t) {
    if (t) {
        if (G1[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(b(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null) throw Error(b(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(b(61))
        }
        if (t.style != null && typeof t.style != "object") throw Error(b(62))
    }
}

function du(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
            return !1;
        default:
            return !0
    }
}
var fu = null;

function Mc(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e
}
var hu = null,
    Ir = null,
    zr = null;

function Of(e) {
    if (e = Lo(e)) {
        if (typeof hu != "function") throw Error(b(280));
        var t = e.stateNode;
        t && (t = Ea(t), hu(e.stateNode, e.type, t))
    }
}

function cg(e) {
    Ir ? zr ? zr.push(e) : zr = [e] : Ir = e
}

function dg() {
    if (Ir) {
        var e = Ir,
            t = zr;
        if (zr = Ir = null, Of(e), t)
            for (e = 0; e < t.length; e++) Of(t[e])
    }
}

function fg(e, t) {
    return e(t)
}

function hg() {}
var ll = !1;

function pg(e, t, n) {
    if (ll) return e(t, n);
    ll = !0;
    try {
        return fg(e, t, n)
    } finally {
        ll = !1, (Ir !== null || zr !== null) && (hg(), dg())
    }
}

function oo(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = Ea(n);
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
            (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
            break e;
        default:
            e = !1
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(b(231, t, typeof n));
    return n
}
var pu = !1;
if (Jt) try {
    var Ti = {};
    Object.defineProperty(Ti, "passive", {
        get: function() {
            pu = !0
        }
    }), window.addEventListener("test", Ti, Ti), window.removeEventListener("test", Ti, Ti)
} catch {
    pu = !1
}

function Q1(e, t, n, r, i, o, s, a, l) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, u)
    } catch (c) {
        this.onError(c)
    }
}
var $i = !1,
    _s = null,
    js = !1,
    mu = null,
    Y1 = {
        onError: function(e) {
            $i = !0, _s = e
        }
    };

function X1(e, t, n, r, i, o, s, a, l) {
    $i = !1, _s = null, Q1.apply(Y1, arguments)
}

function q1(e, t, n, r, i, o, s, a, l) {
    if (X1.apply(this, arguments), $i) {
        if ($i) {
            var u = _s;
            $i = !1, _s = null
        } else throw Error(b(198));
        js || (js = !0, mu = u)
    }
}

function yr(e) {
    var t = e,
        n = e;
    if (e.alternate)
        for (; t.return;) t = t.return;
    else {
        e = t;
        do t = e, t.flags & 4098 && (n = t.return), e = t.return; while (e)
    }
    return t.tag === 3 ? n : null
}

function mg(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated
    }
    return null
}

function Lf(e) {
    if (yr(e) !== e) throw Error(b(188))
}

function Z1(e) {
    var t = e.alternate;
    if (!t) {
        if (t = yr(e), t === null) throw Error(b(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t;;) {
        var i = n.return;
        if (i === null) break;
        var o = i.alternate;
        if (o === null) {
            if (r = i.return, r !== null) {
                n = r;
                continue
            }
            break
        }
        if (i.child === o.child) {
            for (o = i.child; o;) {
                if (o === n) return Lf(i), e;
                if (o === r) return Lf(i), t;
                o = o.sibling
            }
            throw Error(b(188))
        }
        if (n.return !== r.return) n = i, r = o;
        else {
            for (var s = !1, a = i.child; a;) {
                if (a === n) {
                    s = !0, n = i, r = o;
                    break
                }
                if (a === r) {
                    s = !0, r = i, n = o;
                    break
                }
                a = a.sibling
            }
            if (!s) {
                for (a = o.child; a;) {
                    if (a === n) {
                        s = !0, n = o, r = i;
                        break
                    }
                    if (a === r) {
                        s = !0, r = o, n = i;
                        break
                    }
                    a = a.sibling
                }
                if (!s) throw Error(b(189))
            }
        }
        if (n.alternate !== r) throw Error(b(190))
    }
    if (n.tag !== 3) throw Error(b(188));
    return n.stateNode.current === n ? e : t
}

function gg(e) {
    return e = Z1(e), e !== null ? yg(e) : null
}

function yg(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null;) {
        var t = yg(e);
        if (t !== null) return t;
        e = e.sibling
    }
    return null
}
var vg = Ze.unstable_scheduleCallback,
    Nf = Ze.unstable_cancelCallback,
    J1 = Ze.unstable_shouldYield,
    ex = Ze.unstable_requestPaint,
    de = Ze.unstable_now,
    tx = Ze.unstable_getCurrentPriorityLevel,
    Dc = Ze.unstable_ImmediatePriority,
    wg = Ze.unstable_UserBlockingPriority,
    Vs = Ze.unstable_NormalPriority,
    nx = Ze.unstable_LowPriority,
    xg = Ze.unstable_IdlePriority,
    Sa = null,
    Nt = null;

function rx(e) {
    if (Nt && typeof Nt.onCommitFiberRoot == "function") try {
        Nt.onCommitFiberRoot(Sa, e, void 0, (e.current.flags & 128) === 128)
    } catch {}
}
var xt = Math.clz32 ? Math.clz32 : sx,
    ix = Math.log,
    ox = Math.LN2;

function sx(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (ix(e) / ox | 0) | 0
}
var Go = 64,
    Qo = 4194304;

function Vi(e) {
    switch (e & -e) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 4:
            return 4;
        case 8:
            return 8;
        case 16:
            return 16;
        case 32:
            return 32;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return e & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return e & 130023424;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 1073741824;
        default:
            return e
    }
}

function Fs(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
        i = e.suspendedLanes,
        o = e.pingedLanes,
        s = n & 268435455;
    if (s !== 0) {
        var a = s & ~i;
        a !== 0 ? r = Vi(a) : (o &= s, o !== 0 && (r = Vi(o)))
    } else s = n & ~i, s !== 0 ? r = Vi(s) : o !== 0 && (r = Vi(o));
    if (r === 0) return 0;
    if (t !== 0 && t !== r && !(t & i) && (i = r & -r, o = t & -t, i >= o || i === 16 && (o & 4194240) !== 0)) return t;
    if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0)
        for (e = e.entanglements, t &= r; 0 < t;) n = 31 - xt(t), i = 1 << n, r |= e[n], t &= ~i;
    return r
}

function ax(e, t) {
    switch (e) {
        case 1:
        case 2:
        case 4:
            return t + 250;
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1
    }
}

function lx(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, o = e.pendingLanes; 0 < o;) {
        var s = 31 - xt(o),
            a = 1 << s,
            l = i[s];
        l === -1 ? (!(a & n) || a & r) && (i[s] = ax(a, t)) : l <= t && (e.expiredLanes |= a), o &= ~a
    }
}

function gu(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}

function Sg() {
    var e = Go;
    return Go <<= 1, !(Go & 4194240) && (Go = 64), e
}

function ul(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t
}

function Do(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - xt(t), e[t] = n
}

function ux(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n;) {
        var i = 31 - xt(n),
            o = 1 << i;
        t[i] = 0, r[i] = -1, e[i] = -1, n &= ~o
    }
}

function Oc(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n;) {
        var r = 31 - xt(n),
            i = 1 << r;
        i & t | e[r] & t && (e[r] |= t), n &= ~i
    }
}
var X = 0;

function Pg(e) {
    return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var Cg, Lc, Tg, Eg, kg, yu = !1,
    Yo = [],
    En = null,
    kn = null,
    An = null,
    so = new Map,
    ao = new Map,
    gn = [],
    cx = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

function _f(e, t) {
    switch (e) {
        case "focusin":
        case "focusout":
            En = null;
            break;
        case "dragenter":
        case "dragleave":
            kn = null;
            break;
        case "mouseover":
        case "mouseout":
            An = null;
            break;
        case "pointerover":
        case "pointerout":
            so.delete(t.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            ao.delete(t.pointerId)
    }
}

function Ei(e, t, n, r, i, o) {
    return e === null || e.nativeEvent !== o ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [i]
    }, t !== null && (t = Lo(t), t !== null && Lc(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e)
}

function dx(e, t, n, r, i) {
    switch (t) {
        case "focusin":
            return En = Ei(En, e, t, n, r, i), !0;
        case "dragenter":
            return kn = Ei(kn, e, t, n, r, i), !0;
        case "mouseover":
            return An = Ei(An, e, t, n, r, i), !0;
        case "pointerover":
            var o = i.pointerId;
            return so.set(o, Ei(so.get(o) || null, e, t, n, r, i)), !0;
        case "gotpointercapture":
            return o = i.pointerId, ao.set(o, Ei(ao.get(o) || null, e, t, n, r, i)), !0
    }
    return !1
}

function Ag(e) {
    var t = qn(e.target);
    if (t !== null) {
        var n = yr(t);
        if (n !== null) {
            if (t = n.tag, t === 13) {
                if (t = mg(n), t !== null) {
                    e.blockedOn = t, kg(e.priority, function() {
                        Tg(n)
                    });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}

function gs(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length;) {
        var n = vu(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type, n);
            fu = r, n.target.dispatchEvent(r), fu = null
        } else return t = Lo(n), t !== null && Lc(t), e.blockedOn = n, !1;
        t.shift()
    }
    return !0
}

function jf(e, t, n) {
    gs(e) && n.delete(t)
}

function fx() {
    yu = !1, En !== null && gs(En) && (En = null), kn !== null && gs(kn) && (kn = null), An !== null && gs(An) && (An = null), so.forEach(jf), ao.forEach(jf)
}

function ki(e, t) {
    e.blockedOn === t && (e.blockedOn = null, yu || (yu = !0, Ze.unstable_scheduleCallback(Ze.unstable_NormalPriority, fx)))
}

function lo(e) {
    function t(i) {
        return ki(i, e)
    }
    if (0 < Yo.length) {
        ki(Yo[0], e);
        for (var n = 1; n < Yo.length; n++) {
            var r = Yo[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (En !== null && ki(En, e), kn !== null && ki(kn, e), An !== null && ki(An, e), so.forEach(t), ao.forEach(t), n = 0; n < gn.length; n++) r = gn[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < gn.length && (n = gn[0], n.blockedOn === null);) Ag(n), n.blockedOn === null && gn.shift()
}
var Br = an.ReactCurrentBatchConfig,
    Is = !0;

function hx(e, t, n, r) {
    var i = X,
        o = Br.transition;
    Br.transition = null;
    try {
        X = 1, Nc(e, t, n, r)
    } finally {
        X = i, Br.transition = o
    }
}

function px(e, t, n, r) {
    var i = X,
        o = Br.transition;
    Br.transition = null;
    try {
        X = 4, Nc(e, t, n, r)
    } finally {
        X = i, Br.transition = o
    }
}

function Nc(e, t, n, r) {
    if (Is) {
        var i = vu(e, t, n, r);
        if (i === null) wl(e, t, r, zs, n), _f(e, r);
        else if (dx(i, e, t, n, r)) r.stopPropagation();
        else if (_f(e, r), t & 4 && -1 < cx.indexOf(e)) {
            for (; i !== null;) {
                var o = Lo(i);
                if (o !== null && Cg(o), o = vu(e, t, n, r), o === null && wl(e, t, r, zs, n), o === i) break;
                i = o
            }
            i !== null && r.stopPropagation()
        } else wl(e, t, r, null, n)
    }
}
var zs = null;

function vu(e, t, n, r) {
    if (zs = null, e = Mc(r), e = qn(e), e !== null)
        if (t = yr(e), t === null) e = null;
        else if (n = t.tag, n === 13) {
        if (e = mg(t), e !== null) return e;
        e = null
    } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null
    } else t !== e && (e = null);
    return zs = e, null
}

function Rg(e) {
    switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
            return 1;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 4;
        case "message":
            switch (tx()) {
                case Dc:
                    return 1;
                case wg:
                    return 4;
                case Vs:
                case nx:
                    return 16;
                case xg:
                    return 536870912;
                default:
                    return 16
            }
        default:
            return 16
    }
}
var Cn = null,
    _c = null,
    ys = null;

function bg() {
    if (ys) return ys;
    var e, t = _c,
        n = t.length,
        r, i = "value" in Cn ? Cn.value : Cn.textContent,
        o = i.length;
    for (e = 0; e < n && t[e] === i[e]; e++);
    var s = n - e;
    for (r = 1; r <= s && t[n - r] === i[o - r]; r++);
    return ys = i.slice(e, 1 < r ? 1 - r : void 0)
}

function vs(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0
}

function Xo() {
    return !0
}

function Vf() {
    return !1
}

function tt(e) {
    function t(n, r, i, o, s) {
        this._reactName = n, this._targetInst = i, this.type = r, this.nativeEvent = o, this.target = s, this.currentTarget = null;
        for (var a in e) e.hasOwnProperty(a) && (n = e[a], this[a] = n ? n(o) : o[a]);
        return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? Xo : Vf, this.isPropagationStopped = Vf, this
    }
    return se(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Xo)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Xo)
        },
        persist: function() {},
        isPersistent: Xo
    }), t
}
var pi = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(e) {
            return e.timeStamp || Date.now()
        },
        defaultPrevented: 0,
        isTrusted: 0
    },
    jc = tt(pi),
    Oo = se({}, pi, {
        view: 0,
        detail: 0
    }),
    mx = tt(Oo),
    cl, dl, Ai, Pa = se({}, Oo, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: Vc,
        button: 0,
        buttons: 0,
        relatedTarget: function(e) {
            return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
        },
        movementX: function(e) {
            return "movementX" in e ? e.movementX : (e !== Ai && (Ai && e.type === "mousemove" ? (cl = e.screenX - Ai.screenX, dl = e.screenY - Ai.screenY) : dl = cl = 0, Ai = e), cl)
        },
        movementY: function(e) {
            return "movementY" in e ? e.movementY : dl
        }
    }),
    Ff = tt(Pa),
    gx = se({}, Pa, {
        dataTransfer: 0
    }),
    yx = tt(gx),
    vx = se({}, Oo, {
        relatedTarget: 0
    }),
    fl = tt(vx),
    wx = se({}, pi, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }),
    xx = tt(wx),
    Sx = se({}, pi, {
        clipboardData: function(e) {
            return "clipboardData" in e ? e.clipboardData : window.clipboardData
        }
    }),
    Px = tt(Sx),
    Cx = se({}, pi, {
        data: 0
    }),
    If = tt(Cx),
    Tx = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified"
    },
    Ex = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta"
    },
    kx = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };

function Ax(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = kx[e]) ? !!t[e] : !1
}

function Vc() {
    return Ax
}
var Rx = se({}, Oo, {
        key: function(e) {
            if (e.key) {
                var t = Tx[e.key] || e.key;
                if (t !== "Unidentified") return t
            }
            return e.type === "keypress" ? (e = vs(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Ex[e.keyCode] || "Unidentified" : ""
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: Vc,
        charCode: function(e) {
            return e.type === "keypress" ? vs(e) : 0
        },
        keyCode: function(e) {
            return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        },
        which: function(e) {
            return e.type === "keypress" ? vs(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        }
    }),
    bx = tt(Rx),
    Mx = se({}, Pa, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0
    }),
    zf = tt(Mx),
    Dx = se({}, Oo, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: Vc
    }),
    Ox = tt(Dx),
    Lx = se({}, pi, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }),
    Nx = tt(Lx),
    _x = se({}, Pa, {
        deltaX: function(e) {
            return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        },
        deltaY: function(e) {
            return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0
    }),
    jx = tt(_x),
    Vx = [9, 13, 27, 32],
    Fc = Jt && "CompositionEvent" in window,
    Ui = null;
Jt && "documentMode" in document && (Ui = document.documentMode);
var Fx = Jt && "TextEvent" in window && !Ui,
    Mg = Jt && (!Fc || Ui && 8 < Ui && 11 >= Ui),
    Bf = " ",
    $f = !1;

function Dg(e, t) {
    switch (e) {
        case "keyup":
            return Vx.indexOf(t.keyCode) !== -1;
        case "keydown":
            return t.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1
    }
}

function Og(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null
}
var Cr = !1;

function Ix(e, t) {
    switch (e) {
        case "compositionend":
            return Og(t);
        case "keypress":
            return t.which !== 32 ? null : ($f = !0, Bf);
        case "textInput":
            return e = t.data, e === Bf && $f ? null : e;
        default:
            return null
    }
}

function zx(e, t) {
    if (Cr) return e === "compositionend" || !Fc && Dg(e, t) ? (e = bg(), ys = _c = Cn = null, Cr = !1, e) : null;
    switch (e) {
        case "paste":
            return null;
        case "keypress":
            if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                if (t.char && 1 < t.char.length) return t.char;
                if (t.which) return String.fromCharCode(t.which)
            }
            return null;
        case "compositionend":
            return Mg && t.locale !== "ko" ? null : t.data;
        default:
            return null
    }
}
var Bx = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};

function Uf(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Bx[e.type] : t === "textarea"
}

function Lg(e, t, n, r) {
    cg(r), t = Bs(t, "onChange"), 0 < t.length && (n = new jc("onChange", "change", null, n, r), e.push({
        event: n,
        listeners: t
    }))
}
var Wi = null,
    uo = null;

function $x(e) {
    Wg(e, 0)
}

function Ca(e) {
    var t = kr(e);
    if (rg(t)) return e
}

function Ux(e, t) {
    if (e === "change") return t
}
var Ng = !1;
if (Jt) {
    var hl;
    if (Jt) {
        var pl = "oninput" in document;
        if (!pl) {
            var Wf = document.createElement("div");
            Wf.setAttribute("oninput", "return;"), pl = typeof Wf.oninput == "function"
        }
        hl = pl
    } else hl = !1;
    Ng = hl && (!document.documentMode || 9 < document.documentMode)
}

function Hf() {
    Wi && (Wi.detachEvent("onpropertychange", _g), uo = Wi = null)
}

function _g(e) {
    if (e.propertyName === "value" && Ca(uo)) {
        var t = [];
        Lg(t, uo, e, Mc(e)), pg($x, t)
    }
}

function Wx(e, t, n) {
    e === "focusin" ? (Hf(), Wi = t, uo = n, Wi.attachEvent("onpropertychange", _g)) : e === "focusout" && Hf()
}

function Hx(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return Ca(uo)
}

function Kx(e, t) {
    if (e === "click") return Ca(t)
}

function Gx(e, t) {
    if (e === "input" || e === "change") return Ca(t)
}

function Qx(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var Pt = typeof Object.is == "function" ? Object.is : Qx;

function co(e, t) {
    if (Pt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e),
        r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
        var i = n[r];
        if (!eu.call(t, i) || !Pt(e[i], t[i])) return !1
    }
    return !0
}

function Kf(e) {
    for (; e && e.firstChild;) e = e.firstChild;
    return e
}

function Gf(e, t) {
    var n = Kf(e);
    e = 0;
    for (var r; n;) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length, e <= t && r >= t) return {
                node: n,
                offset: t - e
            };
            e = r
        }
        e: {
            for (; n;) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = Kf(n)
    }
}

function jg(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? jg(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}

function Vg() {
    for (var e = window, t = Ns(); t instanceof e.HTMLIFrameElement;) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n) e = t.contentWindow;
        else break;
        t = Ns(e.document)
    }
    return t
}

function Ic(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}

function Yx(e) {
    var t = Vg(),
        n = e.focusedElem,
        r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && jg(n.ownerDocument.documentElement, n)) {
        if (r !== null && Ic(n)) {
            if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
                e = e.getSelection();
                var i = n.textContent.length,
                    o = Math.min(r.start, i);
                r = r.end === void 0 ? o : Math.min(r.end, i), !e.extend && o > r && (i = r, r = o, o = i), i = Gf(n, o);
                var s = Gf(n, r);
                i && s && (e.rangeCount !== 1 || e.anchorNode !== i.node || e.anchorOffset !== i.offset || e.focusNode !== s.node || e.focusOffset !== s.offset) && (t = t.createRange(), t.setStart(i.node, i.offset), e.removeAllRanges(), o > r ? (e.addRange(t), e.extend(s.node, s.offset)) : (t.setEnd(s.node, s.offset), e.addRange(t)))
            }
        }
        for (t = [], e = n; e = e.parentNode;) e.nodeType === 1 && t.push({
            element: e,
            left: e.scrollLeft,
            top: e.scrollTop
        });
        for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top
    }
}
var Xx = Jt && "documentMode" in document && 11 >= document.documentMode,
    Tr = null,
    wu = null,
    Hi = null,
    xu = !1;

function Qf(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    xu || Tr == null || Tr !== Ns(r) || (r = Tr, "selectionStart" in r && Ic(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }), Hi && co(Hi, r) || (Hi = r, r = Bs(wu, "onSelect"), 0 < r.length && (t = new jc("onSelect", "select", null, t, n), e.push({
        event: t,
        listeners: r
    }), t.target = Tr)))
}

function qo(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n
}
var Er = {
        animationend: qo("Animation", "AnimationEnd"),
        animationiteration: qo("Animation", "AnimationIteration"),
        animationstart: qo("Animation", "AnimationStart"),
        transitionend: qo("Transition", "TransitionEnd")
    },
    ml = {},
    Fg = {};
Jt && (Fg = document.createElement("div").style, "AnimationEvent" in window || (delete Er.animationend.animation, delete Er.animationiteration.animation, delete Er.animationstart.animation), "TransitionEvent" in window || delete Er.transitionend.transition);

function Ta(e) {
    if (ml[e]) return ml[e];
    if (!Er[e]) return e;
    var t = Er[e],
        n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in Fg) return ml[e] = t[n];
    return e
}
var Ig = Ta("animationend"),
    zg = Ta("animationiteration"),
    Bg = Ta("animationstart"),
    $g = Ta("transitionend"),
    Ug = new Map,
    Yf = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

function Bn(e, t) {
    Ug.set(e, t), gr(t, [e])
}
for (var gl = 0; gl < Yf.length; gl++) {
    var yl = Yf[gl],
        qx = yl.toLowerCase(),
        Zx = yl[0].toUpperCase() + yl.slice(1);
    Bn(qx, "on" + Zx)
}
Bn(Ig, "onAnimationEnd");
Bn(zg, "onAnimationIteration");
Bn(Bg, "onAnimationStart");
Bn("dblclick", "onDoubleClick");
Bn("focusin", "onFocus");
Bn("focusout", "onBlur");
Bn($g, "onTransitionEnd");
ti("onMouseEnter", ["mouseout", "mouseover"]);
ti("onMouseLeave", ["mouseout", "mouseover"]);
ti("onPointerEnter", ["pointerout", "pointerover"]);
ti("onPointerLeave", ["pointerout", "pointerover"]);
gr("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
gr("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
gr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
gr("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
gr("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
gr("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Fi = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
    Jx = new Set("cancel close invalid load scroll toggle".split(" ").concat(Fi));

function Xf(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, q1(r, t, void 0, e), e.currentTarget = null
}

function Wg(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n],
            i = r.event;
        r = r.listeners;
        e: {
            var o = void 0;
            if (t)
                for (var s = r.length - 1; 0 <= s; s--) {
                    var a = r[s],
                        l = a.instance,
                        u = a.currentTarget;
                    if (a = a.listener, l !== o && i.isPropagationStopped()) break e;
                    Xf(i, a, u), o = l
                } else
                    for (s = 0; s < r.length; s++) {
                        if (a = r[s], l = a.instance, u = a.currentTarget, a = a.listener, l !== o && i.isPropagationStopped()) break e;
                        Xf(i, a, u), o = l
                    }
        }
    }
    if (js) throw e = mu, js = !1, mu = null, e
}

function J(e, t) {
    var n = t[Eu];
    n === void 0 && (n = t[Eu] = new Set);
    var r = e + "__bubble";
    n.has(r) || (Hg(t, e, 2, !1), n.add(r))
}

function vl(e, t, n) {
    var r = 0;
    t && (r |= 4), Hg(n, e, r, t)
}
var Zo = "_reactListening" + Math.random().toString(36).slice(2);

function fo(e) {
    if (!e[Zo]) {
        e[Zo] = !0, Zm.forEach(function(n) {
            n !== "selectionchange" && (Jx.has(n) || vl(n, !1, e), vl(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[Zo] || (t[Zo] = !0, vl("selectionchange", !1, t))
    }
}

function Hg(e, t, n, r) {
    switch (Rg(t)) {
        case 1:
            var i = hx;
            break;
        case 4:
            i = px;
            break;
        default:
            i = Nc
    }
    n = i.bind(null, t, n, e), i = void 0, !pu || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), r ? i !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: i
    }) : e.addEventListener(t, n, !0) : i !== void 0 ? e.addEventListener(t, n, {
        passive: i
    }) : e.addEventListener(t, n, !1)
}

function wl(e, t, n, r, i) {
    var o = r;
    if (!(t & 1) && !(t & 2) && r !== null) e: for (;;) {
        if (r === null) return;
        var s = r.tag;
        if (s === 3 || s === 4) {
            var a = r.stateNode.containerInfo;
            if (a === i || a.nodeType === 8 && a.parentNode === i) break;
            if (s === 4)
                for (s = r.return; s !== null;) {
                    var l = s.tag;
                    if ((l === 3 || l === 4) && (l = s.stateNode.containerInfo, l === i || l.nodeType === 8 && l.parentNode === i)) return;
                    s = s.return
                }
            for (; a !== null;) {
                if (s = qn(a), s === null) return;
                if (l = s.tag, l === 5 || l === 6) {
                    r = o = s;
                    continue e
                }
                a = a.parentNode
            }
        }
        r = r.return
    }
    pg(function() {
        var u = o,
            c = Mc(n),
            d = [];
        e: {
            var f = Ug.get(e);
            if (f !== void 0) {
                var m = jc,
                    v = e;
                switch (e) {
                    case "keypress":
                        if (vs(n) === 0) break e;
                    case "keydown":
                    case "keyup":
                        m = bx;
                        break;
                    case "focusin":
                        v = "focus", m = fl;
                        break;
                    case "focusout":
                        v = "blur", m = fl;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        m = fl;
                        break;
                    case "click":
                        if (n.button === 2) break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        m = Ff;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        m = yx;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        m = Ox;
                        break;
                    case Ig:
                    case zg:
                    case Bg:
                        m = xx;
                        break;
                    case $g:
                        m = Nx;
                        break;
                    case "scroll":
                        m = mx;
                        break;
                    case "wheel":
                        m = jx;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        m = Px;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        m = zf
                }
                var y = (t & 4) !== 0,
                    x = !y && e === "scroll",
                    p = y ? f !== null ? f + "Capture" : null : f;
                y = [];
                for (var h = u, g; h !== null;) {
                    g = h;
                    var S = g.stateNode;
                    if (g.tag === 5 && S !== null && (g = S, p !== null && (S = oo(h, p), S != null && y.push(ho(h, S, g)))), x) break;
                    h = h.return
                }
                0 < y.length && (f = new m(f, v, null, n, c), d.push({
                    event: f,
                    listeners: y
                }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (f = e === "mouseover" || e === "pointerover", m = e === "mouseout" || e === "pointerout", f && n !== fu && (v = n.relatedTarget || n.fromElement) && (qn(v) || v[en])) break e;
                if ((m || f) && (f = c.window === c ? c : (f = c.ownerDocument) ? f.defaultView || f.parentWindow : window, m ? (v = n.relatedTarget || n.toElement, m = u, v = v ? qn(v) : null, v !== null && (x = yr(v), v !== x || v.tag !== 5 && v.tag !== 6) && (v = null)) : (m = null, v = u), m !== v)) {
                    if (y = Ff, S = "onMouseLeave", p = "onMouseEnter", h = "mouse", (e === "pointerout" || e === "pointerover") && (y = zf, S = "onPointerLeave", p = "onPointerEnter", h = "pointer"), x = m == null ? f : kr(m), g = v == null ? f : kr(v), f = new y(S, h + "leave", m, n, c), f.target = x, f.relatedTarget = g, S = null, qn(c) === u && (y = new y(p, h + "enter", v, n, c), y.target = g, y.relatedTarget = x, S = y), x = S, m && v) t: {
                        for (y = m, p = v, h = 0, g = y; g; g = xr(g)) h++;
                        for (g = 0, S = p; S; S = xr(S)) g++;
                        for (; 0 < h - g;) y = xr(y),
                        h--;
                        for (; 0 < g - h;) p = xr(p),
                        g--;
                        for (; h--;) {
                            if (y === p || p !== null && y === p.alternate) break t;
                            y = xr(y), p = xr(p)
                        }
                        y = null
                    }
                    else y = null;
                    m !== null && qf(d, f, m, y, !1), v !== null && x !== null && qf(d, x, v, y, !0)
                }
            }
            e: {
                if (f = u ? kr(u) : window, m = f.nodeName && f.nodeName.toLowerCase(), m === "select" || m === "input" && f.type === "file") var P = Ux;
                else if (Uf(f))
                    if (Ng) P = Gx;
                    else {
                        P = Hx;
                        var T = Wx
                    }
                else(m = f.nodeName) && m.toLowerCase() === "input" && (f.type === "checkbox" || f.type === "radio") && (P = Kx);
                if (P && (P = P(e, u))) {
                    Lg(d, P, n, c);
                    break e
                }
                T && T(e, f, u),
                e === "focusout" && (T = f._wrapperState) && T.controlled && f.type === "number" && au(f, "number", f.value)
            }
            switch (T = u ? kr(u) : window, e) {
                case "focusin":
                    (Uf(T) || T.contentEditable === "true") && (Tr = T, wu = u, Hi = null);
                    break;
                case "focusout":
                    Hi = wu = Tr = null;
                    break;
                case "mousedown":
                    xu = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    xu = !1, Qf(d, n, c);
                    break;
                case "selectionchange":
                    if (Xx) break;
                case "keydown":
                case "keyup":
                    Qf(d, n, c)
            }
            var k;
            if (Fc) e: {
                switch (e) {
                    case "compositionstart":
                        var E = "onCompositionStart";
                        break e;
                    case "compositionend":
                        E = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        E = "onCompositionUpdate";
                        break e
                }
                E = void 0
            }
            else Cr ? Dg(e, n) && (E = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (E = "onCompositionStart");E && (Mg && n.locale !== "ko" && (Cr || E !== "onCompositionStart" ? E === "onCompositionEnd" && Cr && (k = bg()) : (Cn = c, _c = "value" in Cn ? Cn.value : Cn.textContent, Cr = !0)), T = Bs(u, E), 0 < T.length && (E = new If(E, e, null, n, c), d.push({
                event: E,
                listeners: T
            }), k ? E.data = k : (k = Og(n), k !== null && (E.data = k)))),
            (k = Fx ? Ix(e, n) : zx(e, n)) && (u = Bs(u, "onBeforeInput"), 0 < u.length && (c = new If("onBeforeInput", "beforeinput", null, n, c), d.push({
                event: c,
                listeners: u
            }), c.data = k))
        }
        Wg(d, t)
    })
}

function ho(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}

function Bs(e, t) {
    for (var n = t + "Capture", r = []; e !== null;) {
        var i = e,
            o = i.stateNode;
        i.tag === 5 && o !== null && (i = o, o = oo(e, n), o != null && r.unshift(ho(e, o, i)), o = oo(e, t), o != null && r.push(ho(e, o, i))), e = e.return
    }
    return r
}

function xr(e) {
    if (e === null) return null;
    do e = e.return; while (e && e.tag !== 5);
    return e || null
}

function qf(e, t, n, r, i) {
    for (var o = t._reactName, s = []; n !== null && n !== r;) {
        var a = n,
            l = a.alternate,
            u = a.stateNode;
        if (l !== null && l === r) break;
        a.tag === 5 && u !== null && (a = u, i ? (l = oo(n, o), l != null && s.unshift(ho(n, l, a))) : i || (l = oo(n, o), l != null && s.push(ho(n, l, a)))), n = n.return
    }
    s.length !== 0 && e.push({
        event: t,
        listeners: s
    })
}
var eS = /\r\n?/g,
    tS = /\u0000|\uFFFD/g;

function Zf(e) {
    return (typeof e == "string" ? e : "" + e).replace(eS, `
`).replace(tS, "")
}

function Jo(e, t, n) {
    if (t = Zf(t), Zf(e) !== t && n) throw Error(b(425))
}

function $s() {}
var Su = null,
    Pu = null;

function Cu(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var Tu = typeof setTimeout == "function" ? setTimeout : void 0,
    nS = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Jf = typeof Promise == "function" ? Promise : void 0,
    rS = typeof queueMicrotask == "function" ? queueMicrotask : typeof Jf < "u" ? function(e) {
        return Jf.resolve(null).then(e).catch(iS)
    } : Tu;

function iS(e) {
    setTimeout(function() {
        throw e
    })
}

function xl(e, t) {
    var n = t,
        r = 0;
    do {
        var i = n.nextSibling;
        if (e.removeChild(n), i && i.nodeType === 8)
            if (n = i.data, n === "/$") {
                if (r === 0) {
                    e.removeChild(i), lo(t);
                    return
                }
                r--
            } else n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = i
    } while (n);
    lo(t)
}

function Rn(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
            if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
            if (t === "/$") return null
        }
    }
    return e
}

function eh(e) {
    e = e.previousSibling;
    for (var t = 0; e;) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0) return e;
                t--
            } else n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var mi = Math.random().toString(36).slice(2),
    Ot = "__reactFiber$" + mi,
    po = "__reactProps$" + mi,
    en = "__reactContainer$" + mi,
    Eu = "__reactEvents$" + mi,
    oS = "__reactListeners$" + mi,
    sS = "__reactHandles$" + mi;

function qn(e) {
    var t = e[Ot];
    if (t) return t;
    for (var n = e.parentNode; n;) {
        if (t = n[en] || n[Ot]) {
            if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
                for (e = eh(e); e !== null;) {
                    if (n = e[Ot]) return n;
                    e = eh(e)
                }
            return t
        }
        e = n, n = e.parentNode
    }
    return null
}

function Lo(e) {
    return e = e[Ot] || e[en], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}

function kr(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(b(33))
}

function Ea(e) {
    return e[po] || null
}
var ku = [],
    Ar = -1;

function $n(e) {
    return {
        current: e
    }
}

function ee(e) {
    0 > Ar || (e.current = ku[Ar], ku[Ar] = null, Ar--)
}

function q(e, t) {
    Ar++, ku[Ar] = e.current, e.current = t
}
var jn = {},
    De = $n(jn),
    Be = $n(!1),
    lr = jn;

function ni(e, t) {
    var n = e.type.contextTypes;
    if (!n) return jn;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var i = {},
        o;
    for (o in n) i[o] = t[o];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = i), i
}

function $e(e) {
    return e = e.childContextTypes, e != null
}

function Us() {
    ee(Be), ee(De)
}

function th(e, t, n) {
    if (De.current !== jn) throw Error(b(168));
    q(De, t), q(Be, n)
}

function Kg(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
    r = r.getChildContext();
    for (var i in r)
        if (!(i in t)) throw Error(b(108, W1(e) || "Unknown", i));
    return se({}, n, r)
}

function Ws(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || jn, lr = De.current, q(De, e), q(Be, Be.current), !0
}

function nh(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(b(169));
    n ? (e = Kg(e, t, lr), r.__reactInternalMemoizedMergedChildContext = e, ee(Be), ee(De), q(De, e)) : ee(Be), q(Be, n)
}
var Kt = null,
    ka = !1,
    Sl = !1;

function Gg(e) {
    Kt === null ? Kt = [e] : Kt.push(e)
}

function aS(e) {
    ka = !0, Gg(e)
}

function Un() {
    if (!Sl && Kt !== null) {
        Sl = !0;
        var e = 0,
            t = X;
        try {
            var n = Kt;
            for (X = 1; e < n.length; e++) {
                var r = n[e];
                do r = r(!0); while (r !== null)
            }
            Kt = null, ka = !1
        } catch (i) {
            throw Kt !== null && (Kt = Kt.slice(e + 1)), vg(Dc, Un), i
        } finally {
            X = t, Sl = !1
        }
    }
    return null
}
var Rr = [],
    br = 0,
    Hs = null,
    Ks = 0,
    st = [],
    at = 0,
    ur = null,
    Gt = 1,
    Qt = "";

function Gn(e, t) {
    Rr[br++] = Ks, Rr[br++] = Hs, Hs = e, Ks = t
}

function Qg(e, t, n) {
    st[at++] = Gt, st[at++] = Qt, st[at++] = ur, ur = e;
    var r = Gt;
    e = Qt;
    var i = 32 - xt(r) - 1;
    r &= ~(1 << i), n += 1;
    var o = 32 - xt(t) + i;
    if (30 < o) {
        var s = i - i % 5;
        o = (r & (1 << s) - 1).toString(32), r >>= s, i -= s, Gt = 1 << 32 - xt(t) + i | n << i | r, Qt = o + e
    } else Gt = 1 << o | n << i | r, Qt = e
}

function zc(e) {
    e.return !== null && (Gn(e, 1), Qg(e, 1, 0))
}

function Bc(e) {
    for (; e === Hs;) Hs = Rr[--br], Rr[br] = null, Ks = Rr[--br], Rr[br] = null;
    for (; e === ur;) ur = st[--at], st[at] = null, Qt = st[--at], st[at] = null, Gt = st[--at], st[at] = null
}
var Xe = null,
    Ye = null,
    ne = !1,
    wt = null;

function Yg(e, t) {
    var n = lt(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n)
}

function rh(e, t) {
    switch (e.tag) {
        case 5:
            var n = e.type;
            return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Xe = e, Ye = Rn(t.firstChild), !0) : !1;
        case 6:
            return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Xe = e, Ye = null, !0) : !1;
        case 13:
            return t = t.nodeType !== 8 ? null : t, t !== null ? (n = ur !== null ? {
                id: Gt,
                overflow: Qt
            } : null, e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824
            }, n = lt(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Xe = e, Ye = null, !0) : !1;
        default:
            return !1
    }
}

function Au(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}

function Ru(e) {
    if (ne) {
        var t = Ye;
        if (t) {
            var n = t;
            if (!rh(e, t)) {
                if (Au(e)) throw Error(b(418));
                t = Rn(n.nextSibling);
                var r = Xe;
                t && rh(e, t) ? Yg(r, n) : (e.flags = e.flags & -4097 | 2, ne = !1, Xe = e)
            }
        } else {
            if (Au(e)) throw Error(b(418));
            e.flags = e.flags & -4097 | 2, ne = !1, Xe = e
        }
    }
}

function ih(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) e = e.return;
    Xe = e
}

function es(e) {
    if (e !== Xe) return !1;
    if (!ne) return ih(e), ne = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Cu(e.type, e.memoizedProps)), t && (t = Ye)) {
        if (Au(e)) throw Xg(), Error(b(418));
        for (; t;) Yg(e, t), t = Rn(t.nextSibling)
    }
    if (ih(e), e.tag === 13) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(b(317));
        e: {
            for (e = e.nextSibling, t = 0; e;) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            Ye = Rn(e.nextSibling);
                            break e
                        }
                        t--
                    } else n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            Ye = null
        }
    } else Ye = Xe ? Rn(e.stateNode.nextSibling) : null;
    return !0
}

function Xg() {
    for (var e = Ye; e;) e = Rn(e.nextSibling)
}

function ri() {
    Ye = Xe = null, ne = !1
}

function $c(e) {
    wt === null ? wt = [e] : wt.push(e)
}
var lS = an.ReactCurrentBatchConfig;

function Ri(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner, n) {
                if (n.tag !== 1) throw Error(b(309));
                var r = n.stateNode
            }
            if (!r) throw Error(b(147, e));
            var i = r,
                o = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function(s) {
                var a = i.refs;
                s === null ? delete a[o] : a[o] = s
            }, t._stringRef = o, t)
        }
        if (typeof e != "string") throw Error(b(284));
        if (!n._owner) throw Error(b(290, e))
    }
    return e
}

function ts(e, t) {
    throw e = Object.prototype.toString.call(t), Error(b(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}

function oh(e) {
    var t = e._init;
    return t(e._payload)
}

function qg(e) {
    function t(p, h) {
        if (e) {
            var g = p.deletions;
            g === null ? (p.deletions = [h], p.flags |= 16) : g.push(h)
        }
    }

    function n(p, h) {
        if (!e) return null;
        for (; h !== null;) t(p, h), h = h.sibling;
        return null
    }

    function r(p, h) {
        for (p = new Map; h !== null;) h.key !== null ? p.set(h.key, h) : p.set(h.index, h), h = h.sibling;
        return p
    }

    function i(p, h) {
        return p = On(p, h), p.index = 0, p.sibling = null, p
    }

    function o(p, h, g) {
        return p.index = g, e ? (g = p.alternate, g !== null ? (g = g.index, g < h ? (p.flags |= 2, h) : g) : (p.flags |= 2, h)) : (p.flags |= 1048576, h)
    }

    function s(p) {
        return e && p.alternate === null && (p.flags |= 2), p
    }

    function a(p, h, g, S) {
        return h === null || h.tag !== 6 ? (h = Rl(g, p.mode, S), h.return = p, h) : (h = i(h, g), h.return = p, h)
    }

    function l(p, h, g, S) {
        var P = g.type;
        return P === Pr ? c(p, h, g.props.children, S, g.key) : h !== null && (h.elementType === P || typeof P == "object" && P !== null && P.$$typeof === pn && oh(P) === h.type) ? (S = i(h, g.props), S.ref = Ri(p, h, g), S.return = p, S) : (S = Es(g.type, g.key, g.props, null, p.mode, S), S.ref = Ri(p, h, g), S.return = p, S)
    }

    function u(p, h, g, S) {
        return h === null || h.tag !== 4 || h.stateNode.containerInfo !== g.containerInfo || h.stateNode.implementation !== g.implementation ? (h = bl(g, p.mode, S), h.return = p, h) : (h = i(h, g.children || []), h.return = p, h)
    }

    function c(p, h, g, S, P) {
        return h === null || h.tag !== 7 ? (h = sr(g, p.mode, S, P), h.return = p, h) : (h = i(h, g), h.return = p, h)
    }

    function d(p, h, g) {
        if (typeof h == "string" && h !== "" || typeof h == "number") return h = Rl("" + h, p.mode, g), h.return = p, h;
        if (typeof h == "object" && h !== null) {
            switch (h.$$typeof) {
                case Wo:
                    return g = Es(h.type, h.key, h.props, null, p.mode, g), g.ref = Ri(p, null, h), g.return = p, g;
                case Sr:
                    return h = bl(h, p.mode, g), h.return = p, h;
                case pn:
                    var S = h._init;
                    return d(p, S(h._payload), g)
            }
            if (ji(h) || Ci(h)) return h = sr(h, p.mode, g, null), h.return = p, h;
            ts(p, h)
        }
        return null
    }

    function f(p, h, g, S) {
        var P = h !== null ? h.key : null;
        if (typeof g == "string" && g !== "" || typeof g == "number") return P !== null ? null : a(p, h, "" + g, S);
        if (typeof g == "object" && g !== null) {
            switch (g.$$typeof) {
                case Wo:
                    return g.key === P ? l(p, h, g, S) : null;
                case Sr:
                    return g.key === P ? u(p, h, g, S) : null;
                case pn:
                    return P = g._init, f(p, h, P(g._payload), S)
            }
            if (ji(g) || Ci(g)) return P !== null ? null : c(p, h, g, S, null);
            ts(p, g)
        }
        return null
    }

    function m(p, h, g, S, P) {
        if (typeof S == "string" && S !== "" || typeof S == "number") return p = p.get(g) || null, a(h, p, "" + S, P);
        if (typeof S == "object" && S !== null) {
            switch (S.$$typeof) {
                case Wo:
                    return p = p.get(S.key === null ? g : S.key) || null, l(h, p, S, P);
                case Sr:
                    return p = p.get(S.key === null ? g : S.key) || null, u(h, p, S, P);
                case pn:
                    var T = S._init;
                    return m(p, h, g, T(S._payload), P)
            }
            if (ji(S) || Ci(S)) return p = p.get(g) || null, c(h, p, S, P, null);
            ts(h, S)
        }
        return null
    }

    function v(p, h, g, S) {
        for (var P = null, T = null, k = h, E = h = 0, D = null; k !== null && E < g.length; E++) {
            k.index > E ? (D = k, k = null) : D = k.sibling;
            var M = f(p, k, g[E], S);
            if (M === null) {
                k === null && (k = D);
                break
            }
            e && k && M.alternate === null && t(p, k), h = o(M, h, E), T === null ? P = M : T.sibling = M, T = M, k = D
        }
        if (E === g.length) return n(p, k), ne && Gn(p, E), P;
        if (k === null) {
            for (; E < g.length; E++) k = d(p, g[E], S), k !== null && (h = o(k, h, E), T === null ? P = k : T.sibling = k, T = k);
            return ne && Gn(p, E), P
        }
        for (k = r(p, k); E < g.length; E++) D = m(k, p, E, g[E], S), D !== null && (e && D.alternate !== null && k.delete(D.key === null ? E : D.key), h = o(D, h, E), T === null ? P = D : T.sibling = D, T = D);
        return e && k.forEach(function(I) {
            return t(p, I)
        }), ne && Gn(p, E), P
    }

    function y(p, h, g, S) {
        var P = Ci(g);
        if (typeof P != "function") throw Error(b(150));
        if (g = P.call(g), g == null) throw Error(b(151));
        for (var T = P = null, k = h, E = h = 0, D = null, M = g.next(); k !== null && !M.done; E++, M = g.next()) {
            k.index > E ? (D = k, k = null) : D = k.sibling;
            var I = f(p, k, M.value, S);
            if (I === null) {
                k === null && (k = D);
                break
            }
            e && k && I.alternate === null && t(p, k), h = o(I, h, E), T === null ? P = I : T.sibling = I, T = I, k = D
        }
        if (M.done) return n(p, k), ne && Gn(p, E), P;
        if (k === null) {
            for (; !M.done; E++, M = g.next()) M = d(p, M.value, S), M !== null && (h = o(M, h, E), T === null ? P = M : T.sibling = M, T = M);
            return ne && Gn(p, E), P
        }
        for (k = r(p, k); !M.done; E++, M = g.next()) M = m(k, p, E, M.value, S), M !== null && (e && M.alternate !== null && k.delete(M.key === null ? E : M.key), h = o(M, h, E), T === null ? P = M : T.sibling = M, T = M);
        return e && k.forEach(function(j) {
            return t(p, j)
        }), ne && Gn(p, E), P
    }

    function x(p, h, g, S) {
        if (typeof g == "object" && g !== null && g.type === Pr && g.key === null && (g = g.props.children), typeof g == "object" && g !== null) {
            switch (g.$$typeof) {
                case Wo:
                    e: {
                        for (var P = g.key, T = h; T !== null;) {
                            if (T.key === P) {
                                if (P = g.type, P === Pr) {
                                    if (T.tag === 7) {
                                        n(p, T.sibling), h = i(T, g.props.children), h.return = p, p = h;
                                        break e
                                    }
                                } else if (T.elementType === P || typeof P == "object" && P !== null && P.$$typeof === pn && oh(P) === T.type) {
                                    n(p, T.sibling), h = i(T, g.props), h.ref = Ri(p, T, g), h.return = p, p = h;
                                    break e
                                }
                                n(p, T);
                                break
                            } else t(p, T);
                            T = T.sibling
                        }
                        g.type === Pr ? (h = sr(g.props.children, p.mode, S, g.key), h.return = p, p = h) : (S = Es(g.type, g.key, g.props, null, p.mode, S), S.ref = Ri(p, h, g), S.return = p, p = S)
                    }
                    return s(p);
                case Sr:
                    e: {
                        for (T = g.key; h !== null;) {
                            if (h.key === T)
                                if (h.tag === 4 && h.stateNode.containerInfo === g.containerInfo && h.stateNode.implementation === g.implementation) {
                                    n(p, h.sibling), h = i(h, g.children || []), h.return = p, p = h;
                                    break e
                                } else {
                                    n(p, h);
                                    break
                                }
                            else t(p, h);
                            h = h.sibling
                        }
                        h = bl(g, p.mode, S),
                        h.return = p,
                        p = h
                    }
                    return s(p);
                case pn:
                    return T = g._init, x(p, h, T(g._payload), S)
            }
            if (ji(g)) return v(p, h, g, S);
            if (Ci(g)) return y(p, h, g, S);
            ts(p, g)
        }
        return typeof g == "string" && g !== "" || typeof g == "number" ? (g = "" + g, h !== null && h.tag === 6 ? (n(p, h.sibling), h = i(h, g), h.return = p, p = h) : (n(p, h), h = Rl(g, p.mode, S), h.return = p, p = h), s(p)) : n(p, h)
    }
    return x
}
var ii = qg(!0),
    Zg = qg(!1),
    Gs = $n(null),
    Qs = null,
    Mr = null,
    Uc = null;

function Wc() {
    Uc = Mr = Qs = null
}

function Hc(e) {
    var t = Gs.current;
    ee(Gs), e._currentValue = t
}

function bu(e, t, n) {
    for (; e !== null;) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
        e = e.return
    }
}

function $r(e, t) {
    Qs = e, Uc = Mr = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (ze = !0), e.firstContext = null)
}

function ct(e) {
    var t = e._currentValue;
    if (Uc !== e)
        if (e = {
                context: e,
                memoizedValue: t,
                next: null
            }, Mr === null) {
            if (Qs === null) throw Error(b(308));
            Mr = e, Qs.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else Mr = Mr.next = e;
    return t
}
var Zn = null;

function Kc(e) {
    Zn === null ? Zn = [e] : Zn.push(e)
}

function Jg(e, t, n, r) {
    var i = t.interleaved;
    return i === null ? (n.next = n, Kc(t)) : (n.next = i.next, i.next = n), t.interleaved = n, tn(e, r)
}

function tn(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null;) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null
}
var mn = !1;

function Gc(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}

function ey(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}

function Xt(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}

function bn(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, G & 2) {
        var i = r.pending;
        return i === null ? t.next = t : (t.next = i.next, i.next = t), r.pending = t, tn(e, n)
    }
    return i = r.interleaved, i === null ? (t.next = t, Kc(r)) : (t.next = i.next, i.next = t), r.interleaved = t, tn(e, n)
}

function ws(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes, n |= r, t.lanes = n, Oc(e, n)
    }
}

function sh(e, t) {
    var n = e.updateQueue,
        r = e.alternate;
    if (r !== null && (r = r.updateQueue, n === r)) {
        var i = null,
            o = null;
        if (n = n.firstBaseUpdate, n !== null) {
            do {
                var s = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                o === null ? i = o = s : o = o.next = s, n = n.next
            } while (n !== null);
            o === null ? i = o = t : o = o.next = t
        } else i = o = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: i,
            lastBaseUpdate: o,
            shared: r.shared,
            effects: r.effects
        }, e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t
}

function Ys(e, t, n, r) {
    var i = e.updateQueue;
    mn = !1;
    var o = i.firstBaseUpdate,
        s = i.lastBaseUpdate,
        a = i.shared.pending;
    if (a !== null) {
        i.shared.pending = null;
        var l = a,
            u = l.next;
        l.next = null, s === null ? o = u : s.next = u, s = l;
        var c = e.alternate;
        c !== null && (c = c.updateQueue, a = c.lastBaseUpdate, a !== s && (a === null ? c.firstBaseUpdate = u : a.next = u, c.lastBaseUpdate = l))
    }
    if (o !== null) {
        var d = i.baseState;
        s = 0, c = u = l = null, a = o;
        do {
            var f = a.lane,
                m = a.eventTime;
            if ((r & f) === f) {
                c !== null && (c = c.next = {
                    eventTime: m,
                    lane: 0,
                    tag: a.tag,
                    payload: a.payload,
                    callback: a.callback,
                    next: null
                });
                e: {
                    var v = e,
                        y = a;
                    switch (f = t, m = n, y.tag) {
                        case 1:
                            if (v = y.payload, typeof v == "function") {
                                d = v.call(m, d, f);
                                break e
                            }
                            d = v;
                            break e;
                        case 3:
                            v.flags = v.flags & -65537 | 128;
                        case 0:
                            if (v = y.payload, f = typeof v == "function" ? v.call(m, d, f) : v, f == null) break e;
                            d = se({}, d, f);
                            break e;
                        case 2:
                            mn = !0
                    }
                }
                a.callback !== null && a.lane !== 0 && (e.flags |= 64, f = i.effects, f === null ? i.effects = [a] : f.push(a))
            } else m = {
                eventTime: m,
                lane: f,
                tag: a.tag,
                payload: a.payload,
                callback: a.callback,
                next: null
            }, c === null ? (u = c = m, l = d) : c = c.next = m, s |= f;
            if (a = a.next, a === null) {
                if (a = i.shared.pending, a === null) break;
                f = a, a = f.next, f.next = null, i.lastBaseUpdate = f, i.shared.pending = null
            }
        } while (!0);
        if (c === null && (l = d), i.baseState = l, i.firstBaseUpdate = u, i.lastBaseUpdate = c, t = i.shared.interleaved, t !== null) {
            i = t;
            do s |= i.lane, i = i.next; while (i !== t)
        } else o === null && (i.shared.lanes = 0);
        dr |= s, e.lanes = s, e.memoizedState = d
    }
}

function ah(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null)
        for (t = 0; t < e.length; t++) {
            var r = e[t],
                i = r.callback;
            if (i !== null) {
                if (r.callback = null, r = n, typeof i != "function") throw Error(b(191, i));
                i.call(r)
            }
        }
}
var No = {},
    _t = $n(No),
    mo = $n(No),
    go = $n(No);

function Jn(e) {
    if (e === No) throw Error(b(174));
    return e
}

function Qc(e, t) {
    switch (q(go, t), q(mo, e), q(_t, No), e = t.nodeType, e) {
        case 9:
        case 11:
            t = (t = t.documentElement) ? t.namespaceURI : uu(null, "");
            break;
        default:
            e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = uu(t, e)
    }
    ee(_t), q(_t, t)
}

function oi() {
    ee(_t), ee(mo), ee(go)
}

function ty(e) {
    Jn(go.current);
    var t = Jn(_t.current),
        n = uu(t, e.type);
    t !== n && (q(mo, e), q(_t, n))
}

function Yc(e) {
    mo.current === e && (ee(_t), ee(mo))
}
var re = $n(0);

function Xs(e) {
    for (var t = e; t !== null;) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128) return t
        } else if (t.child !== null) {
            t.child.return = t, t = t.child;
            continue
        }
        if (t === e) break;
        for (; t.sibling === null;) {
            if (t.return === null || t.return === e) return null;
            t = t.return
        }
        t.sibling.return = t.return, t = t.sibling
    }
    return null
}
var Pl = [];

function Xc() {
    for (var e = 0; e < Pl.length; e++) Pl[e]._workInProgressVersionPrimary = null;
    Pl.length = 0
}
var xs = an.ReactCurrentDispatcher,
    Cl = an.ReactCurrentBatchConfig,
    cr = 0,
    oe = null,
    he = null,
    ye = null,
    qs = !1,
    Ki = !1,
    yo = 0,
    uS = 0;

function Ee() {
    throw Error(b(321))
}

function qc(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!Pt(e[n], t[n])) return !1;
    return !0
}

function Zc(e, t, n, r, i, o) {
    if (cr = o, oe = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, xs.current = e === null || e.memoizedState === null ? hS : pS, e = n(r, i), Ki) {
        o = 0;
        do {
            if (Ki = !1, yo = 0, 25 <= o) throw Error(b(301));
            o += 1, ye = he = null, t.updateQueue = null, xs.current = mS, e = n(r, i)
        } while (Ki)
    }
    if (xs.current = Zs, t = he !== null && he.next !== null, cr = 0, ye = he = oe = null, qs = !1, t) throw Error(b(300));
    return e
}

function Jc() {
    var e = yo !== 0;
    return yo = 0, e
}

function Rt() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return ye === null ? oe.memoizedState = ye = e : ye = ye.next = e, ye
}

function dt() {
    if (he === null) {
        var e = oe.alternate;
        e = e !== null ? e.memoizedState : null
    } else e = he.next;
    var t = ye === null ? oe.memoizedState : ye.next;
    if (t !== null) ye = t, he = e;
    else {
        if (e === null) throw Error(b(310));
        he = e, e = {
            memoizedState: he.memoizedState,
            baseState: he.baseState,
            baseQueue: he.baseQueue,
            queue: he.queue,
            next: null
        }, ye === null ? oe.memoizedState = ye = e : ye = ye.next = e
    }
    return ye
}

function vo(e, t) {
    return typeof t == "function" ? t(e) : t
}

function Tl(e) {
    var t = dt(),
        n = t.queue;
    if (n === null) throw Error(b(311));
    n.lastRenderedReducer = e;
    var r = he,
        i = r.baseQueue,
        o = n.pending;
    if (o !== null) {
        if (i !== null) {
            var s = i.next;
            i.next = o.next, o.next = s
        }
        r.baseQueue = i = o, n.pending = null
    }
    if (i !== null) {
        o = i.next, r = r.baseState;
        var a = s = null,
            l = null,
            u = o;
        do {
            var c = u.lane;
            if ((cr & c) === c) l !== null && (l = l.next = {
                lane: 0,
                action: u.action,
                hasEagerState: u.hasEagerState,
                eagerState: u.eagerState,
                next: null
            }), r = u.hasEagerState ? u.eagerState : e(r, u.action);
            else {
                var d = {
                    lane: c,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                };
                l === null ? (a = l = d, s = r) : l = l.next = d, oe.lanes |= c, dr |= c
            }
            u = u.next
        } while (u !== null && u !== o);
        l === null ? s = r : l.next = a, Pt(r, t.memoizedState) || (ze = !0), t.memoizedState = r, t.baseState = s, t.baseQueue = l, n.lastRenderedState = r
    }
    if (e = n.interleaved, e !== null) {
        i = e;
        do o = i.lane, oe.lanes |= o, dr |= o, i = i.next; while (i !== e)
    } else i === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}

function El(e) {
    var t = dt(),
        n = t.queue;
    if (n === null) throw Error(b(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
        i = n.pending,
        o = t.memoizedState;
    if (i !== null) {
        n.pending = null;
        var s = i = i.next;
        do o = e(o, s.action), s = s.next; while (s !== i);
        Pt(o, t.memoizedState) || (ze = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o
    }
    return [o, r]
}

function ny() {}

function ry(e, t) {
    var n = oe,
        r = dt(),
        i = t(),
        o = !Pt(r.memoizedState, i);
    if (o && (r.memoizedState = i, ze = !0), r = r.queue, ed(sy.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || ye !== null && ye.memoizedState.tag & 1) {
        if (n.flags |= 2048, wo(9, oy.bind(null, n, r, i, t), void 0, null), ve === null) throw Error(b(349));
        cr & 30 || iy(n, t, i)
    }
    return i
}

function iy(e, t, n) {
    e.flags |= 16384, e = {
        getSnapshot: t,
        value: n
    }, t = oe.updateQueue, t === null ? (t = {
        lastEffect: null,
        stores: null
    }, oe.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e))
}

function oy(e, t, n, r) {
    t.value = n, t.getSnapshot = r, ay(t) && ly(e)
}

function sy(e, t, n) {
    return n(function() {
        ay(t) && ly(e)
    })
}

function ay(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !Pt(e, n)
    } catch {
        return !0
    }
}

function ly(e) {
    var t = tn(e, 1);
    t !== null && St(t, e, 1, -1)
}

function lh(e) {
    var t = Rt();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: vo,
        lastRenderedState: e
    }, t.queue = e, e = e.dispatch = fS.bind(null, oe, e), [t.memoizedState, e]
}

function wo(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    }, t = oe.updateQueue, t === null ? (t = {
        lastEffect: null,
        stores: null
    }, oe.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e
}

function uy() {
    return dt().memoizedState
}

function Ss(e, t, n, r) {
    var i = Rt();
    oe.flags |= e, i.memoizedState = wo(1 | t, n, void 0, r === void 0 ? null : r)
}

function Aa(e, t, n, r) {
    var i = dt();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (he !== null) {
        var s = he.memoizedState;
        if (o = s.destroy, r !== null && qc(r, s.deps)) {
            i.memoizedState = wo(t, n, o, r);
            return
        }
    }
    oe.flags |= e, i.memoizedState = wo(1 | t, n, o, r)
}

function uh(e, t) {
    return Ss(8390656, 8, e, t)
}

function ed(e, t) {
    return Aa(2048, 8, e, t)
}

function cy(e, t) {
    return Aa(4, 2, e, t)
}

function dy(e, t) {
    return Aa(4, 4, e, t)
}

function fy(e, t) {
    if (typeof t == "function") return e = e(), t(e),
        function() {
            t(null)
        };
    if (t != null) return e = e(), t.current = e,
        function() {
            t.current = null
        }
}

function hy(e, t, n) {
    return n = n != null ? n.concat([e]) : null, Aa(4, 4, fy.bind(null, t, e), n)
}

function td() {}

function py(e, t) {
    var n = dt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && qc(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e)
}

function my(e, t) {
    var n = dt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && qc(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e)
}

function gy(e, t, n) {
    return cr & 21 ? (Pt(n, t) || (n = Sg(), oe.lanes |= n, dr |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, ze = !0), e.memoizedState = n)
}

function cS(e, t) {
    var n = X;
    X = n !== 0 && 4 > n ? n : 4, e(!0);
    var r = Cl.transition;
    Cl.transition = {};
    try {
        e(!1), t()
    } finally {
        X = n, Cl.transition = r
    }
}

function yy() {
    return dt().memoizedState
}

function dS(e, t, n) {
    var r = Dn(e);
    if (n = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        }, vy(e)) wy(t, n);
    else if (n = Jg(e, t, n, r), n !== null) {
        var i = je();
        St(n, e, r, i), xy(n, t, r)
    }
}

function fS(e, t, n) {
    var r = Dn(e),
        i = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
    if (vy(e)) wy(t, i);
    else {
        var o = e.alternate;
        if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null)) try {
            var s = t.lastRenderedState,
                a = o(s, n);
            if (i.hasEagerState = !0, i.eagerState = a, Pt(a, s)) {
                var l = t.interleaved;
                l === null ? (i.next = i, Kc(t)) : (i.next = l.next, l.next = i), t.interleaved = i;
                return
            }
        } catch {} finally {}
        n = Jg(e, t, i, r), n !== null && (i = je(), St(n, e, r, i), xy(n, t, r))
    }
}

function vy(e) {
    var t = e.alternate;
    return e === oe || t !== null && t === oe
}

function wy(e, t) {
    Ki = qs = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t
}

function xy(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes, n |= r, t.lanes = n, Oc(e, n)
    }
}
var Zs = {
        readContext: ct,
        useCallback: Ee,
        useContext: Ee,
        useEffect: Ee,
        useImperativeHandle: Ee,
        useInsertionEffect: Ee,
        useLayoutEffect: Ee,
        useMemo: Ee,
        useReducer: Ee,
        useRef: Ee,
        useState: Ee,
        useDebugValue: Ee,
        useDeferredValue: Ee,
        useTransition: Ee,
        useMutableSource: Ee,
        useSyncExternalStore: Ee,
        useId: Ee,
        unstable_isNewReconciler: !1
    },
    hS = {
        readContext: ct,
        useCallback: function(e, t) {
            return Rt().memoizedState = [e, t === void 0 ? null : t], e
        },
        useContext: ct,
        useEffect: uh,
        useImperativeHandle: function(e, t, n) {
            return n = n != null ? n.concat([e]) : null, Ss(4194308, 4, fy.bind(null, t, e), n)
        },
        useLayoutEffect: function(e, t) {
            return Ss(4194308, 4, e, t)
        },
        useInsertionEffect: function(e, t) {
            return Ss(4, 2, e, t)
        },
        useMemo: function(e, t) {
            var n = Rt();
            return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e
        },
        useReducer: function(e, t, n) {
            var r = Rt();
            return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = {
                pending: null,
                interleaved: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: e,
                lastRenderedState: t
            }, r.queue = e, e = e.dispatch = dS.bind(null, oe, e), [r.memoizedState, e]
        },
        useRef: function(e) {
            var t = Rt();
            return e = {
                current: e
            }, t.memoizedState = e
        },
        useState: lh,
        useDebugValue: td,
        useDeferredValue: function(e) {
            return Rt().memoizedState = e
        },
        useTransition: function() {
            var e = lh(!1),
                t = e[0];
            return e = cS.bind(null, e[1]), Rt().memoizedState = e, [t, e]
        },
        useMutableSource: function() {},
        useSyncExternalStore: function(e, t, n) {
            var r = oe,
                i = Rt();
            if (ne) {
                if (n === void 0) throw Error(b(407));
                n = n()
            } else {
                if (n = t(), ve === null) throw Error(b(349));
                cr & 30 || iy(r, t, n)
            }
            i.memoizedState = n;
            var o = {
                value: n,
                getSnapshot: t
            };
            return i.queue = o, uh(sy.bind(null, r, o, e), [e]), r.flags |= 2048, wo(9, oy.bind(null, r, o, n, t), void 0, null), n
        },
        useId: function() {
            var e = Rt(),
                t = ve.identifierPrefix;
            if (ne) {
                var n = Qt,
                    r = Gt;
                n = (r & ~(1 << 32 - xt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = yo++, 0 < n && (t += "H" + n.toString(32)), t += ":"
            } else n = uS++, t = ":" + t + "r" + n.toString(32) + ":";
            return e.memoizedState = t
        },
        unstable_isNewReconciler: !1
    },
    pS = {
        readContext: ct,
        useCallback: py,
        useContext: ct,
        useEffect: ed,
        useImperativeHandle: hy,
        useInsertionEffect: cy,
        useLayoutEffect: dy,
        useMemo: my,
        useReducer: Tl,
        useRef: uy,
        useState: function() {
            return Tl(vo)
        },
        useDebugValue: td,
        useDeferredValue: function(e) {
            var t = dt();
            return gy(t, he.memoizedState, e)
        },
        useTransition: function() {
            var e = Tl(vo)[0],
                t = dt().memoizedState;
            return [e, t]
        },
        useMutableSource: ny,
        useSyncExternalStore: ry,
        useId: yy,
        unstable_isNewReconciler: !1
    },
    mS = {
        readContext: ct,
        useCallback: py,
        useContext: ct,
        useEffect: ed,
        useImperativeHandle: hy,
        useInsertionEffect: cy,
        useLayoutEffect: dy,
        useMemo: my,
        useReducer: El,
        useRef: uy,
        useState: function() {
            return El(vo)
        },
        useDebugValue: td,
        useDeferredValue: function(e) {
            var t = dt();
            return he === null ? t.memoizedState = e : gy(t, he.memoizedState, e)
        },
        useTransition: function() {
            var e = El(vo)[0],
                t = dt().memoizedState;
            return [e, t]
        },
        useMutableSource: ny,
        useSyncExternalStore: ry,
        useId: yy,
        unstable_isNewReconciler: !1
    };

function mt(e, t) {
    if (e && e.defaultProps) {
        t = se({}, t), e = e.defaultProps;
        for (var n in e) t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}

function Mu(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : se({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n)
}
var Ra = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? yr(e) === e : !1
    },
    enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var r = je(),
            i = Dn(e),
            o = Xt(r, i);
        o.payload = t, n != null && (o.callback = n), t = bn(e, o, i), t !== null && (St(t, e, i, r), ws(t, e, i))
    },
    enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var r = je(),
            i = Dn(e),
            o = Xt(r, i);
        o.tag = 1, o.payload = t, n != null && (o.callback = n), t = bn(e, o, i), t !== null && (St(t, e, i, r), ws(t, e, i))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = je(),
            r = Dn(e),
            i = Xt(n, r);
        i.tag = 2, t != null && (i.callback = t), t = bn(e, i, r), t !== null && (St(t, e, r, n), ws(t, e, r))
    }
};

function ch(e, t, n, r, i, o, s) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, s) : t.prototype && t.prototype.isPureReactComponent ? !co(n, r) || !co(i, o) : !0
}

function Sy(e, t, n) {
    var r = !1,
        i = jn,
        o = t.contextType;
    return typeof o == "object" && o !== null ? o = ct(o) : (i = $e(t) ? lr : De.current, r = t.contextTypes, o = (r = r != null) ? ni(e, i) : jn), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Ra, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = i, e.__reactInternalMemoizedMaskedChildContext = o), t
}

function dh(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Ra.enqueueReplaceState(t, t.state, null)
}

function Du(e, t, n, r) {
    var i = e.stateNode;
    i.props = n, i.state = e.memoizedState, i.refs = {}, Gc(e);
    var o = t.contextType;
    typeof o == "object" && o !== null ? i.context = ct(o) : (o = $e(t) ? lr : De.current, i.context = ni(e, o)), i.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (Mu(e, t, o, n), i.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), t !== i.state && Ra.enqueueReplaceState(i, i.state, null), Ys(e, n, i, r), i.state = e.memoizedState), typeof i.componentDidMount == "function" && (e.flags |= 4194308)
}

function si(e, t) {
    try {
        var n = "",
            r = t;
        do n += U1(r), r = r.return; while (r);
        var i = n
    } catch (o) {
        i = `
Error generating stack: ` + o.message + `
` + o.stack
    }
    return {
        value: e,
        source: t,
        stack: i,
        digest: null
    }
}

function kl(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ? ? null,
        digest: t ? ? null
    }
}

function Ou(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var gS = typeof WeakMap == "function" ? WeakMap : Map;

function Py(e, t, n) {
    n = Xt(-1, n), n.tag = 3, n.payload = {
        element: null
    };
    var r = t.value;
    return n.callback = function() {
        ea || (ea = !0, $u = r), Ou(e, t)
    }, n
}

function Cy(e, t, n) {
    n = Xt(-1, n), n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var i = t.value;
        n.payload = function() {
            return r(i)
        }, n.callback = function() {
            Ou(e, t)
        }
    }
    var o = e.stateNode;
    return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
        Ou(e, t), typeof r != "function" && (Mn === null ? Mn = new Set([this]) : Mn.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: s !== null ? s : ""
        })
    }), n
}

function fh(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new gS;
        var i = new Set;
        r.set(t, i)
    } else i = r.get(t), i === void 0 && (i = new Set, r.set(t, i));
    i.has(n) || (i.add(n), e = MS.bind(null, e, t, n), t.then(e, e))
}

function hh(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
        e = e.return
    } while (e !== null);
    return null
}

function ph(e, t, n, r, i) {
    return e.mode & 1 ? (e.flags |= 65536, e.lanes = i, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Xt(-1, 1), t.tag = 2, bn(n, t, 1))), n.lanes |= 1), e)
}
var yS = an.ReactCurrentOwner,
    ze = !1;

function Le(e, t, n, r) {
    t.child = e === null ? Zg(t, null, n, r) : ii(t, e.child, n, r)
}

function mh(e, t, n, r, i) {
    n = n.render;
    var o = t.ref;
    return $r(t, i), r = Zc(e, t, n, r, o, i), n = Jc(), e !== null && !ze ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, nn(e, t, i)) : (ne && n && zc(t), t.flags |= 1, Le(e, t, r, i), t.child)
}

function gh(e, t, n, r, i) {
    if (e === null) {
        var o = n.type;
        return typeof o == "function" && !ud(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, Ty(e, t, o, r, i)) : (e = Es(n.type, null, r, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e)
    }
    if (o = e.child, !(e.lanes & i)) {
        var s = o.memoizedProps;
        if (n = n.compare, n = n !== null ? n : co, n(s, r) && e.ref === t.ref) return nn(e, t, i)
    }
    return t.flags |= 1, e = On(o, r), e.ref = t.ref, e.return = t, t.child = e
}

function Ty(e, t, n, r, i) {
    if (e !== null) {
        var o = e.memoizedProps;
        if (co(o, r) && e.ref === t.ref)
            if (ze = !1, t.pendingProps = r = o, (e.lanes & i) !== 0) e.flags & 131072 && (ze = !0);
            else return t.lanes = e.lanes, nn(e, t, i)
    }
    return Lu(e, t, n, r, i)
}

function Ey(e, t, n) {
    var r = t.pendingProps,
        i = r.children,
        o = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1)) t.memoizedState = {
            baseLanes: 0,
            cachePool: null,
            transitions: null
        }, q(Or, Ge), Ge |= n;
        else {
            if (!(n & 1073741824)) return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
                baseLanes: e,
                cachePool: null,
                transitions: null
            }, t.updateQueue = null, q(Or, Ge), Ge |= e, null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            }, r = o !== null ? o.baseLanes : n, q(Or, Ge), Ge |= r
        }
    else o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, q(Or, Ge), Ge |= r;
    return Le(e, t, i, n), t.child
}

function ky(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152)
}

function Lu(e, t, n, r, i) {
    var o = $e(n) ? lr : De.current;
    return o = ni(t, o), $r(t, i), n = Zc(e, t, n, r, o, i), r = Jc(), e !== null && !ze ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, nn(e, t, i)) : (ne && r && zc(t), t.flags |= 1, Le(e, t, n, i), t.child)
}

function yh(e, t, n, r, i) {
    if ($e(n)) {
        var o = !0;
        Ws(t)
    } else o = !1;
    if ($r(t, i), t.stateNode === null) Ps(e, t), Sy(t, n, r), Du(t, n, r, i), r = !0;
    else if (e === null) {
        var s = t.stateNode,
            a = t.memoizedProps;
        s.props = a;
        var l = s.context,
            u = n.contextType;
        typeof u == "object" && u !== null ? u = ct(u) : (u = $e(n) ? lr : De.current, u = ni(t, u));
        var c = n.getDerivedStateFromProps,
            d = typeof c == "function" || typeof s.getSnapshotBeforeUpdate == "function";
        d || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (a !== r || l !== u) && dh(t, s, r, u), mn = !1;
        var f = t.memoizedState;
        s.state = f, Ys(t, r, s, i), l = t.memoizedState, a !== r || f !== l || Be.current || mn ? (typeof c == "function" && (Mu(t, n, c, r), l = t.memoizedState), (a = mn || ch(t, n, a, r, f, l, u)) ? (d || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = l), s.props = r, s.state = l, s.context = u, r = a) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), r = !1)
    } else {
        s = t.stateNode, ey(e, t), a = t.memoizedProps, u = t.type === t.elementType ? a : mt(t.type, a), s.props = u, d = t.pendingProps, f = s.context, l = n.contextType, typeof l == "object" && l !== null ? l = ct(l) : (l = $e(n) ? lr : De.current, l = ni(t, l));
        var m = n.getDerivedStateFromProps;
        (c = typeof m == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (a !== d || f !== l) && dh(t, s, r, l), mn = !1, f = t.memoizedState, s.state = f, Ys(t, r, s, i);
        var v = t.memoizedState;
        a !== d || f !== v || Be.current || mn ? (typeof m == "function" && (Mu(t, n, m, r), v = t.memoizedState), (u = mn || ch(t, n, u, r, f, v, l) || !1) ? (c || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, v, l), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, v, l)), typeof s.componentDidUpdate == "function" && (t.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || a === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = v), s.props = r, s.state = v, s.context = l, r = u) : (typeof s.componentDidUpdate != "function" || a === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), r = !1)
    }
    return Nu(e, t, n, r, o, i)
}

function Nu(e, t, n, r, i, o) {
    ky(e, t);
    var s = (t.flags & 128) !== 0;
    if (!r && !s) return i && nh(t, n, !1), nn(e, t, o);
    r = t.stateNode, yS.current = t;
    var a = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && s ? (t.child = ii(t, e.child, null, o), t.child = ii(t, null, a, o)) : Le(e, t, a, o), t.memoizedState = r.state, i && nh(t, n, !0), t.child
}

function Ay(e) {
    var t = e.stateNode;
    t.pendingContext ? th(e, t.pendingContext, t.pendingContext !== t.context) : t.context && th(e, t.context, !1), Qc(e, t.containerInfo)
}

function vh(e, t, n, r, i) {
    return ri(), $c(i), t.flags |= 256, Le(e, t, n, r), t.child
}
var _u = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};

function ju(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}

function Ry(e, t, n) {
    var r = t.pendingProps,
        i = re.current,
        o = !1,
        s = (t.flags & 128) !== 0,
        a;
    if ((a = s) || (a = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0), a ? (o = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1), q(re, i & 1), e === null) return Ru(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (s = r.children, e = r.fallback, o ? (r = t.mode, o = t.child, s = {
        mode: "hidden",
        children: s
    }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = s) : o = Da(s, r, 0, null), e = sr(e, r, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = ju(n), t.memoizedState = _u, e) : nd(t, s));
    if (i = e.memoizedState, i !== null && (a = i.dehydrated, a !== null)) return vS(e, t, s, r, a, i, n);
    if (o) {
        o = r.fallback, s = t.mode, i = e.child, a = i.sibling;
        var l = {
            mode: "hidden",
            children: r.children
        };
        return !(s & 1) && t.child !== i ? (r = t.child, r.childLanes = 0, r.pendingProps = l, t.deletions = null) : (r = On(i, l), r.subtreeFlags = i.subtreeFlags & 14680064), a !== null ? o = On(a, o) : (o = sr(o, s, n, null), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, s = e.child.memoizedState, s = s === null ? ju(n) : {
            baseLanes: s.baseLanes | n,
            cachePool: null,
            transitions: s.transitions
        }, o.memoizedState = s, o.childLanes = e.childLanes & ~n, t.memoizedState = _u, r
    }
    return o = e.child, e = o.sibling, r = On(o, {
        mode: "visible",
        children: r.children
    }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r
}

function nd(e, t) {
    return t = Da({
        mode: "visible",
        children: t
    }, e.mode, 0, null), t.return = e, e.child = t
}

function ns(e, t, n, r) {
    return r !== null && $c(r), ii(t, e.child, null, n), e = nd(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e
}

function vS(e, t, n, r, i, o, s) {
    if (n) return t.flags & 256 ? (t.flags &= -257, r = kl(Error(b(422))), ns(e, t, s, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, i = t.mode, r = Da({
        mode: "visible",
        children: r.children
    }, i, 0, null), o = sr(o, i, s, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, t.mode & 1 && ii(t, e.child, null, s), t.child.memoizedState = ju(s), t.memoizedState = _u, o);
    if (!(t.mode & 1)) return ns(e, t, s, null);
    if (i.data === "$!") {
        if (r = i.nextSibling && i.nextSibling.dataset, r) var a = r.dgst;
        return r = a, o = Error(b(419)), r = kl(o, r, void 0), ns(e, t, s, r)
    }
    if (a = (s & e.childLanes) !== 0, ze || a) {
        if (r = ve, r !== null) {
            switch (s & -s) {
                case 4:
                    i = 2;
                    break;
                case 16:
                    i = 8;
                    break;
                case 64:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                case 67108864:
                    i = 32;
                    break;
                case 536870912:
                    i = 268435456;
                    break;
                default:
                    i = 0
            }
            i = i & (r.suspendedLanes | s) ? 0 : i, i !== 0 && i !== o.retryLane && (o.retryLane = i, tn(e, i), St(r, e, i, -1))
        }
        return ld(), r = kl(Error(b(421))), ns(e, t, s, r)
    }
    return i.data === "$?" ? (t.flags |= 128, t.child = e.child, t = DS.bind(null, e), i._reactRetry = t, null) : (e = o.treeContext, Ye = Rn(i.nextSibling), Xe = t, ne = !0, wt = null, e !== null && (st[at++] = Gt, st[at++] = Qt, st[at++] = ur, Gt = e.id, Qt = e.overflow, ur = t), t = nd(t, r.children), t.flags |= 4096, t)
}

function wh(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), bu(e.return, t, n)
}

function Al(e, t, n, r, i) {
    var o = e.memoizedState;
    o === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i
    } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = i)
}

function by(e, t, n) {
    var r = t.pendingProps,
        i = r.revealOrder,
        o = r.tail;
    if (Le(e, t, r.children, n), r = re.current, r & 2) r = r & 1 | 2, t.flags |= 128;
    else {
        if (e !== null && e.flags & 128) e: for (e = t.child; e !== null;) {
            if (e.tag === 13) e.memoizedState !== null && wh(e, n, t);
            else if (e.tag === 19) wh(e, n, t);
            else if (e.child !== null) {
                e.child.return = e, e = e.child;
                continue
            }
            if (e === t) break e;
            for (; e.sibling === null;) {
                if (e.return === null || e.return === t) break e;
                e = e.return
            }
            e.sibling.return = e.return, e = e.sibling
        }
        r &= 1
    }
    if (q(re, r), !(t.mode & 1)) t.memoizedState = null;
    else switch (i) {
        case "forwards":
            for (n = t.child, i = null; n !== null;) e = n.alternate, e !== null && Xs(e) === null && (i = n), n = n.sibling;
            n = i, n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), Al(t, !1, i, n, o);
            break;
        case "backwards":
            for (n = null, i = t.child, t.child = null; i !== null;) {
                if (e = i.alternate, e !== null && Xs(e) === null) {
                    t.child = i;
                    break
                }
                e = i.sibling, i.sibling = n, n = i, i = e
            }
            Al(t, !0, n, null, o);
            break;
        case "together":
            Al(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
    }
    return t.child
}

function Ps(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2)
}

function nn(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), dr |= t.lanes, !(n & t.childLanes)) return null;
    if (e !== null && t.child !== e.child) throw Error(b(153));
    if (t.child !== null) {
        for (e = t.child, n = On(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;) e = e.sibling, n = n.sibling = On(e, e.pendingProps), n.return = t;
        n.sibling = null
    }
    return t.child
}

function wS(e, t, n) {
    switch (t.tag) {
        case 3:
            Ay(t), ri();
            break;
        case 5:
            ty(t);
            break;
        case 1:
            $e(t.type) && Ws(t);
            break;
        case 4:
            Qc(t, t.stateNode.containerInfo);
            break;
        case 10:
            var r = t.type._context,
                i = t.memoizedProps.value;
            q(Gs, r._currentValue), r._currentValue = i;
            break;
        case 13:
            if (r = t.memoizedState, r !== null) return r.dehydrated !== null ? (q(re, re.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Ry(e, t, n) : (q(re, re.current & 1), e = nn(e, t, n), e !== null ? e.sibling : null);
            q(re, re.current & 1);
            break;
        case 19:
            if (r = (n & t.childLanes) !== 0, e.flags & 128) {
                if (r) return by(e, t, n);
                t.flags |= 128
            }
            if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), q(re, re.current), r) break;
            return null;
        case 22:
        case 23:
            return t.lanes = 0, Ey(e, t, n)
    }
    return nn(e, t, n)
}
var My, Vu, Dy, Oy;
My = function(e, t) {
    for (var n = t.child; n !== null;) {
        if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n, n = n.child;
            continue
        }
        if (n === t) break;
        for (; n.sibling === null;) {
            if (n.return === null || n.return === t) return;
            n = n.return
        }
        n.sibling.return = n.return, n = n.sibling
    }
};
Vu = function() {};
Dy = function(e, t, n, r) {
    var i = e.memoizedProps;
    if (i !== r) {
        e = t.stateNode, Jn(_t.current);
        var o = null;
        switch (n) {
            case "input":
                i = ou(e, i), r = ou(e, r), o = [];
                break;
            case "select":
                i = se({}, i, {
                    value: void 0
                }), r = se({}, r, {
                    value: void 0
                }), o = [];
                break;
            case "textarea":
                i = lu(e, i), r = lu(e, r), o = [];
                break;
            default:
                typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = $s)
        }
        cu(n, r);
        var s;
        n = null;
        for (u in i)
            if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
                if (u === "style") {
                    var a = i[u];
                    for (s in a) a.hasOwnProperty(s) && (n || (n = {}), n[s] = "")
                } else u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (ro.hasOwnProperty(u) ? o || (o = []) : (o = o || []).push(u, null));
        for (u in r) {
            var l = r[u];
            if (a = i != null ? i[u] : void 0, r.hasOwnProperty(u) && l !== a && (l != null || a != null))
                if (u === "style")
                    if (a) {
                        for (s in a) !a.hasOwnProperty(s) || l && l.hasOwnProperty(s) || (n || (n = {}), n[s] = "");
                        for (s in l) l.hasOwnProperty(s) && a[s] !== l[s] && (n || (n = {}), n[s] = l[s])
                    } else n || (o || (o = []), o.push(u, n)), n = l;
            else u === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, a = a ? a.__html : void 0, l != null && a !== l && (o = o || []).push(u, l)) : u === "children" ? typeof l != "string" && typeof l != "number" || (o = o || []).push(u, "" + l) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (ro.hasOwnProperty(u) ? (l != null && u === "onScroll" && J("scroll", e), o || a === l || (o = [])) : (o = o || []).push(u, l))
        }
        n && (o = o || []).push("style", n);
        var u = o;
        (t.updateQueue = u) && (t.flags |= 4)
    }
};
Oy = function(e, t, n, r) {
    n !== r && (t.flags |= 4)
};

function bi(e, t) {
    if (!ne) switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null;) t.alternate !== null && (n = t), t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; n !== null;) n.alternate !== null && (r = n), n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
    }
}

function ke(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
        n = 0,
        r = 0;
    if (t)
        for (var i = e.child; i !== null;) n |= i.lanes | i.childLanes, r |= i.subtreeFlags & 14680064, r |= i.flags & 14680064, i.return = e, i = i.sibling;
    else
        for (i = e.child; i !== null;) n |= i.lanes | i.childLanes, r |= i.subtreeFlags, r |= i.flags, i.return = e, i = i.sibling;
    return e.subtreeFlags |= r, e.childLanes = n, t
}

function xS(e, t, n) {
    var r = t.pendingProps;
    switch (Bc(t), t.tag) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return ke(t), null;
        case 1:
            return $e(t.type) && Us(), ke(t), null;
        case 3:
            return r = t.stateNode, oi(), ee(Be), ee(De), Xc(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (es(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, wt !== null && (Hu(wt), wt = null))), Vu(e, t), ke(t), null;
        case 5:
            Yc(t);
            var i = Jn(go.current);
            if (n = t.type, e !== null && t.stateNode != null) Dy(e, t, n, r, i), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
            else {
                if (!r) {
                    if (t.stateNode === null) throw Error(b(166));
                    return ke(t), null
                }
                if (e = Jn(_t.current), es(t)) {
                    r = t.stateNode, n = t.type;
                    var o = t.memoizedProps;
                    switch (r[Ot] = t, r[po] = o, e = (t.mode & 1) !== 0, n) {
                        case "dialog":
                            J("cancel", r), J("close", r);
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            J("load", r);
                            break;
                        case "video":
                        case "audio":
                            for (i = 0; i < Fi.length; i++) J(Fi[i], r);
                            break;
                        case "source":
                            J("error", r);
                            break;
                        case "img":
                        case "image":
                        case "link":
                            J("error", r), J("load", r);
                            break;
                        case "details":
                            J("toggle", r);
                            break;
                        case "input":
                            Rf(r, o), J("invalid", r);
                            break;
                        case "select":
                            r._wrapperState = {
                                wasMultiple: !!o.multiple
                            }, J("invalid", r);
                            break;
                        case "textarea":
                            Mf(r, o), J("invalid", r)
                    }
                    cu(n, o), i = null;
                    for (var s in o)
                        if (o.hasOwnProperty(s)) {
                            var a = o[s];
                            s === "children" ? typeof a == "string" ? r.textContent !== a && (o.suppressHydrationWarning !== !0 && Jo(r.textContent, a, e), i = ["children", a]) : typeof a == "number" && r.textContent !== "" + a && (o.suppressHydrationWarning !== !0 && Jo(r.textContent, a, e), i = ["children", "" + a]) : ro.hasOwnProperty(s) && a != null && s === "onScroll" && J("scroll", r)
                        }
                    switch (n) {
                        case "input":
                            Ho(r), bf(r, o, !0);
                            break;
                        case "textarea":
                            Ho(r), Df(r);
                            break;
                        case "select":
                        case "option":
                            break;
                        default:
                            typeof o.onClick == "function" && (r.onclick = $s)
                    }
                    r = i, t.updateQueue = r, r !== null && (t.flags |= 4)
                } else {
                    s = i.nodeType === 9 ? i : i.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = sg(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, {
                        is: r.is
                    }) : (e = s.createElement(n), n === "select" && (s = e, r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n), e[Ot] = t, e[po] = r, My(e, t, !1, !1), t.stateNode = e;
                    e: {
                        switch (s = du(n, r), n) {
                            case "dialog":
                                J("cancel", e), J("close", e), i = r;
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                J("load", e), i = r;
                                break;
                            case "video":
                            case "audio":
                                for (i = 0; i < Fi.length; i++) J(Fi[i], e);
                                i = r;
                                break;
                            case "source":
                                J("error", e), i = r;
                                break;
                            case "img":
                            case "image":
                            case "link":
                                J("error", e), J("load", e), i = r;
                                break;
                            case "details":
                                J("toggle", e), i = r;
                                break;
                            case "input":
                                Rf(e, r), i = ou(e, r), J("invalid", e);
                                break;
                            case "option":
                                i = r;
                                break;
                            case "select":
                                e._wrapperState = {
                                    wasMultiple: !!r.multiple
                                }, i = se({}, r, {
                                    value: void 0
                                }), J("invalid", e);
                                break;
                            case "textarea":
                                Mf(e, r), i = lu(e, r), J("invalid", e);
                                break;
                            default:
                                i = r
                        }
                        cu(n, i),
                        a = i;
                        for (o in a)
                            if (a.hasOwnProperty(o)) {
                                var l = a[o];
                                o === "style" ? ug(e, l) : o === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, l != null && ag(e, l)) : o === "children" ? typeof l == "string" ? (n !== "textarea" || l !== "") && io(e, l) : typeof l == "number" && io(e, "" + l) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (ro.hasOwnProperty(o) ? l != null && o === "onScroll" && J("scroll", e) : l != null && kc(e, o, l, s))
                            }
                        switch (n) {
                            case "input":
                                Ho(e), bf(e, r, !1);
                                break;
                            case "textarea":
                                Ho(e), Df(e);
                                break;
                            case "option":
                                r.value != null && e.setAttribute("value", "" + _n(r.value));
                                break;
                            case "select":
                                e.multiple = !!r.multiple, o = r.value, o != null ? Fr(e, !!r.multiple, o, !1) : r.defaultValue != null && Fr(e, !!r.multiple, r.defaultValue, !0);
                                break;
                            default:
                                typeof i.onClick == "function" && (e.onclick = $s)
                        }
                        switch (n) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                r = !!r.autoFocus;
                                break e;
                            case "img":
                                r = !0;
                                break e;
                            default:
                                r = !1
                        }
                    }
                    r && (t.flags |= 4)
                }
                t.ref !== null && (t.flags |= 512, t.flags |= 2097152)
            }
            return ke(t), null;
        case 6:
            if (e && t.stateNode != null) Oy(e, t, e.memoizedProps, r);
            else {
                if (typeof r != "string" && t.stateNode === null) throw Error(b(166));
                if (n = Jn(go.current), Jn(_t.current), es(t)) {
                    if (r = t.stateNode, n = t.memoizedProps, r[Ot] = t, (o = r.nodeValue !== n) && (e = Xe, e !== null)) switch (e.tag) {
                        case 3:
                            Jo(r.nodeValue, n, (e.mode & 1) !== 0);
                            break;
                        case 5:
                            e.memoizedProps.suppressHydrationWarning !== !0 && Jo(r.nodeValue, n, (e.mode & 1) !== 0)
                    }
                    o && (t.flags |= 4)
                } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Ot] = t, t.stateNode = r
            }
            return ke(t), null;
        case 13:
            if (ee(re), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                if (ne && Ye !== null && t.mode & 1 && !(t.flags & 128)) Xg(), ri(), t.flags |= 98560, o = !1;
                else if (o = es(t), r !== null && r.dehydrated !== null) {
                    if (e === null) {
                        if (!o) throw Error(b(318));
                        if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(b(317));
                        o[Ot] = t
                    } else ri(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
                    ke(t), o = !1
                } else wt !== null && (Hu(wt), wt = null), o = !0;
                if (!o) return t.flags & 65536 ? t : null
            }
            return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || re.current & 1 ? me === 0 && (me = 3) : ld())), t.updateQueue !== null && (t.flags |= 4), ke(t), null);
        case 4:
            return oi(), Vu(e, t), e === null && fo(t.stateNode.containerInfo), ke(t), null;
        case 10:
            return Hc(t.type._context), ke(t), null;
        case 17:
            return $e(t.type) && Us(), ke(t), null;
        case 19:
            if (ee(re), o = t.memoizedState, o === null) return ke(t), null;
            if (r = (t.flags & 128) !== 0, s = o.rendering, s === null)
                if (r) bi(o, !1);
                else {
                    if (me !== 0 || e !== null && e.flags & 128)
                        for (e = t.child; e !== null;) {
                            if (s = Xs(e), s !== null) {
                                for (t.flags |= 128, bi(o, !1), r = s.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null;) o = n, e = r, o.flags &= 14680066, s = o.alternate, s === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = s.childLanes, o.lanes = s.lanes, o.child = s.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = s.memoizedProps, o.memoizedState = s.memoizedState, o.updateQueue = s.updateQueue, o.type = s.type, e = s.dependencies, o.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }), n = n.sibling;
                                return q(re, re.current & 1 | 2), t.child
                            }
                            e = e.sibling
                        }
                    o.tail !== null && de() > ai && (t.flags |= 128, r = !0, bi(o, !1), t.lanes = 4194304)
                }
            else {
                if (!r)
                    if (e = Xs(s), e !== null) {
                        if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), bi(o, !0), o.tail === null && o.tailMode === "hidden" && !s.alternate && !ne) return ke(t), null
                    } else 2 * de() - o.renderingStartTime > ai && n !== 1073741824 && (t.flags |= 128, r = !0, bi(o, !1), t.lanes = 4194304);
                o.isBackwards ? (s.sibling = t.child, t.child = s) : (n = o.last, n !== null ? n.sibling = s : t.child = s, o.last = s)
            }
            return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = de(), t.sibling = null, n = re.current, q(re, r ? n & 1 | 2 : n & 1), t) : (ke(t), null);
        case 22:
        case 23:
            return ad(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Ge & 1073741824 && (ke(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : ke(t), null;
        case 24:
            return null;
        case 25:
            return null
    }
    throw Error(b(156, t.tag))
}

function SS(e, t) {
    switch (Bc(t), t.tag) {
        case 1:
            return $e(t.type) && Us(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 3:
            return oi(), ee(Be), ee(De), Xc(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
        case 5:
            return Yc(t), null;
        case 13:
            if (ee(re), e = t.memoizedState, e !== null && e.dehydrated !== null) {
                if (t.alternate === null) throw Error(b(340));
                ri()
            }
            return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 19:
            return ee(re), null;
        case 4:
            return oi(), null;
        case 10:
            return Hc(t.type._context), null;
        case 22:
        case 23:
            return ad(), null;
        case 24:
            return null;
        default:
            return null
    }
}
var rs = !1,
    be = !1,
    PS = typeof WeakSet == "function" ? WeakSet : Set,
    N = null;

function Dr(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function") try {
            n(null)
        } catch (r) {
            ue(e, t, r)
        } else n.current = null
}

function Fu(e, t, n) {
    try {
        n()
    } catch (r) {
        ue(e, t, r)
    }
}
var xh = !1;

function CS(e, t) {
    if (Su = Is, e = Vg(), Ic(e)) {
        if ("selectionStart" in e) var n = {
            start: e.selectionStart,
            end: e.selectionEnd
        };
        else e: {
            n = (n = e.ownerDocument) && n.defaultView || window;
            var r = n.getSelection && n.getSelection();
            if (r && r.rangeCount !== 0) {
                n = r.anchorNode;
                var i = r.anchorOffset,
                    o = r.focusNode;
                r = r.focusOffset;
                try {
                    n.nodeType, o.nodeType
                } catch {
                    n = null;
                    break e
                }
                var s = 0,
                    a = -1,
                    l = -1,
                    u = 0,
                    c = 0,
                    d = e,
                    f = null;
                t: for (;;) {
                    for (var m; d !== n || i !== 0 && d.nodeType !== 3 || (a = s + i), d !== o || r !== 0 && d.nodeType !== 3 || (l = s + r), d.nodeType === 3 && (s += d.nodeValue.length), (m = d.firstChild) !== null;) f = d, d = m;
                    for (;;) {
                        if (d === e) break t;
                        if (f === n && ++u === i && (a = s), f === o && ++c === r && (l = s), (m = d.nextSibling) !== null) break;
                        d = f, f = d.parentNode
                    }
                    d = m
                }
                n = a === -1 || l === -1 ? null : {
                    start: a,
                    end: l
                }
            } else n = null
        }
        n = n || {
            start: 0,
            end: 0
        }
    } else n = null;
    for (Pu = {
            focusedElem: e,
            selectionRange: n
        }, Is = !1, N = t; N !== null;)
        if (t = N, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, N = e;
        else
            for (; N !== null;) {
                t = N;
                try {
                    var v = t.alternate;
                    if (t.flags & 1024) switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (v !== null) {
                                var y = v.memoizedProps,
                                    x = v.memoizedState,
                                    p = t.stateNode,
                                    h = p.getSnapshotBeforeUpdate(t.elementType === t.type ? y : mt(t.type, y), x);
                                p.__reactInternalSnapshotBeforeUpdate = h
                            }
                            break;
                        case 3:
                            var g = t.stateNode.containerInfo;
                            g.nodeType === 1 ? g.textContent = "" : g.nodeType === 9 && g.documentElement && g.removeChild(g.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(b(163))
                    }
                } catch (S) {
                    ue(t, t.return, S)
                }
                if (e = t.sibling, e !== null) {
                    e.return = t.return, N = e;
                    break
                }
                N = t.return
            }
    return v = xh, xh = !1, v
}

function Gi(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
        var i = r = r.next;
        do {
            if ((i.tag & e) === e) {
                var o = i.destroy;
                i.destroy = void 0, o !== void 0 && Fu(t, n, o)
            }
            i = i.next
        } while (i !== r)
    }
}

function ba(e, t) {
    if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}

function Iu(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
            case 5:
                e = n;
                break;
            default:
                e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}

function Ly(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Ly(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Ot], delete t[po], delete t[Eu], delete t[oS], delete t[sS])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
}

function Ny(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}

function Sh(e) {
    e: for (;;) {
        for (; e.sibling === null;) {
            if (e.return === null || Ny(e.return)) return null;
            e = e.return
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
            if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
            e.child.return = e, e = e.child
        }
        if (!(e.flags & 2)) return e.stateNode
    }
}

function zu(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = $s));
    else if (r !== 4 && (e = e.child, e !== null))
        for (zu(e, t, n), e = e.sibling; e !== null;) zu(e, t, n), e = e.sibling
}

function Bu(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null))
        for (Bu(e, t, n), e = e.sibling; e !== null;) Bu(e, t, n), e = e.sibling
}
var Se = null,
    vt = !1;

function ln(e, t, n) {
    for (n = n.child; n !== null;) _y(e, t, n), n = n.sibling
}

function _y(e, t, n) {
    if (Nt && typeof Nt.onCommitFiberUnmount == "function") try {
        Nt.onCommitFiberUnmount(Sa, n)
    } catch {}
    switch (n.tag) {
        case 5:
            be || Dr(n, t);
        case 6:
            var r = Se,
                i = vt;
            Se = null, ln(e, t, n), Se = r, vt = i, Se !== null && (vt ? (e = Se, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Se.removeChild(n.stateNode));
            break;
        case 18:
            Se !== null && (vt ? (e = Se, n = n.stateNode, e.nodeType === 8 ? xl(e.parentNode, n) : e.nodeType === 1 && xl(e, n), lo(e)) : xl(Se, n.stateNode));
            break;
        case 4:
            r = Se, i = vt, Se = n.stateNode.containerInfo, vt = !0, ln(e, t, n), Se = r, vt = i;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (!be && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
                i = r = r.next;
                do {
                    var o = i,
                        s = o.destroy;
                    o = o.tag, s !== void 0 && (o & 2 || o & 4) && Fu(n, t, s), i = i.next
                } while (i !== r)
            }
            ln(e, t, n);
            break;
        case 1:
            if (!be && (Dr(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
                r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount()
            } catch (a) {
                ue(n, t, a)
            }
            ln(e, t, n);
            break;
        case 21:
            ln(e, t, n);
            break;
        case 22:
            n.mode & 1 ? (be = (r = be) || n.memoizedState !== null, ln(e, t, n), be = r) : ln(e, t, n);
            break;
        default:
            ln(e, t, n)
    }
}

function Ph(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new PS), t.forEach(function(r) {
            var i = OS.bind(null, e, r);
            n.has(r) || (n.add(r), r.then(i, i))
        })
    }
}

function ht(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var i = n[r];
            try {
                var o = e,
                    s = t,
                    a = s;
                e: for (; a !== null;) {
                    switch (a.tag) {
                        case 5:
                            Se = a.stateNode, vt = !1;
                            break e;
                        case 3:
                            Se = a.stateNode.containerInfo, vt = !0;
                            break e;
                        case 4:
                            Se = a.stateNode.containerInfo, vt = !0;
                            break e
                    }
                    a = a.return
                }
                if (Se === null) throw Error(b(160));
                _y(o, s, i), Se = null, vt = !1;
                var l = i.alternate;
                l !== null && (l.return = null), i.return = null
            } catch (u) {
                ue(i, t, u)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null;) jy(t, e), t = t.sibling
}

function jy(e, t) {
    var n = e.alternate,
        r = e.flags;
    switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if (ht(t, e), At(e), r & 4) {
                try {
                    Gi(3, e, e.return), ba(3, e)
                } catch (y) {
                    ue(e, e.return, y)
                }
                try {
                    Gi(5, e, e.return)
                } catch (y) {
                    ue(e, e.return, y)
                }
            }
            break;
        case 1:
            ht(t, e), At(e), r & 512 && n !== null && Dr(n, n.return);
            break;
        case 5:
            if (ht(t, e), At(e), r & 512 && n !== null && Dr(n, n.return), e.flags & 32) {
                var i = e.stateNode;
                try {
                    io(i, "")
                } catch (y) {
                    ue(e, e.return, y)
                }
            }
            if (r & 4 && (i = e.stateNode, i != null)) {
                var o = e.memoizedProps,
                    s = n !== null ? n.memoizedProps : o,
                    a = e.type,
                    l = e.updateQueue;
                if (e.updateQueue = null, l !== null) try {
                    a === "input" && o.type === "radio" && o.name != null && ig(i, o), du(a, s);
                    var u = du(a, o);
                    for (s = 0; s < l.length; s += 2) {
                        var c = l[s],
                            d = l[s + 1];
                        c === "style" ? ug(i, d) : c === "dangerouslySetInnerHTML" ? ag(i, d) : c === "children" ? io(i, d) : kc(i, c, d, u)
                    }
                    switch (a) {
                        case "input":
                            su(i, o);
                            break;
                        case "textarea":
                            og(i, o);
                            break;
                        case "select":
                            var f = i._wrapperState.wasMultiple;
                            i._wrapperState.wasMultiple = !!o.multiple;
                            var m = o.value;
                            m != null ? Fr(i, !!o.multiple, m, !1) : f !== !!o.multiple && (o.defaultValue != null ? Fr(i, !!o.multiple, o.defaultValue, !0) : Fr(i, !!o.multiple, o.multiple ? [] : "", !1))
                    }
                    i[po] = o
                } catch (y) {
                    ue(e, e.return, y)
                }
            }
            break;
        case 6:
            if (ht(t, e), At(e), r & 4) {
                if (e.stateNode === null) throw Error(b(162));
                i = e.stateNode, o = e.memoizedProps;
                try {
                    i.nodeValue = o
                } catch (y) {
                    ue(e, e.return, y)
                }
            }
            break;
        case 3:
            if (ht(t, e), At(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
                lo(t.containerInfo)
            } catch (y) {
                ue(e, e.return, y)
            }
            break;
        case 4:
            ht(t, e), At(e);
            break;
        case 13:
            ht(t, e), At(e), i = e.child, i.flags & 8192 && (o = i.memoizedState !== null, i.stateNode.isHidden = o, !o || i.alternate !== null && i.alternate.memoizedState !== null || (od = de())), r & 4 && Ph(e);
            break;
        case 22:
            if (c = n !== null && n.memoizedState !== null, e.mode & 1 ? (be = (u = be) || c, ht(t, e), be = u) : ht(t, e), At(e), r & 8192) {
                if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !c && e.mode & 1)
                    for (N = e, c = e.child; c !== null;) {
                        for (d = N = c; N !== null;) {
                            switch (f = N, m = f.child, f.tag) {
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    Gi(4, f, f.return);
                                    break;
                                case 1:
                                    Dr(f, f.return);
                                    var v = f.stateNode;
                                    if (typeof v.componentWillUnmount == "function") {
                                        r = f, n = f.return;
                                        try {
                                            t = r, v.props = t.memoizedProps, v.state = t.memoizedState, v.componentWillUnmount()
                                        } catch (y) {
                                            ue(r, n, y)
                                        }
                                    }
                                    break;
                                case 5:
                                    Dr(f, f.return);
                                    break;
                                case 22:
                                    if (f.memoizedState !== null) {
                                        Th(d);
                                        continue
                                    }
                            }
                            m !== null ? (m.return = f, N = m) : Th(d)
                        }
                        c = c.sibling
                    }
                e: for (c = null, d = e;;) {
                    if (d.tag === 5) {
                        if (c === null) {
                            c = d;
                            try {
                                i = d.stateNode, u ? (o = i.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (a = d.stateNode, l = d.memoizedProps.style, s = l != null && l.hasOwnProperty("display") ? l.display : null, a.style.display = lg("display", s))
                            } catch (y) {
                                ue(e, e.return, y)
                            }
                        }
                    } else if (d.tag === 6) {
                        if (c === null) try {
                            d.stateNode.nodeValue = u ? "" : d.memoizedProps
                        } catch (y) {
                            ue(e, e.return, y)
                        }
                    } else if ((d.tag !== 22 && d.tag !== 23 || d.memoizedState === null || d === e) && d.child !== null) {
                        d.child.return = d, d = d.child;
                        continue
                    }
                    if (d === e) break e;
                    for (; d.sibling === null;) {
                        if (d.return === null || d.return === e) break e;
                        c === d && (c = null), d = d.return
                    }
                    c === d && (c = null), d.sibling.return = d.return, d = d.sibling
                }
            }
            break;
        case 19:
            ht(t, e), At(e), r & 4 && Ph(e);
            break;
        case 21:
            break;
        default:
            ht(t, e), At(e)
    }
}

function At(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null;) {
                    if (Ny(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(b(160))
            }
            switch (r.tag) {
                case 5:
                    var i = r.stateNode;
                    r.flags & 32 && (io(i, ""), r.flags &= -33);
                    var o = Sh(e);
                    Bu(e, o, i);
                    break;
                case 3:
                case 4:
                    var s = r.stateNode.containerInfo,
                        a = Sh(e);
                    zu(e, a, s);
                    break;
                default:
                    throw Error(b(161))
            }
        }
        catch (l) {
            ue(e, e.return, l)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}

function TS(e, t, n) {
    N = e, Vy(e)
}

function Vy(e, t, n) {
    for (var r = (e.mode & 1) !== 0; N !== null;) {
        var i = N,
            o = i.child;
        if (i.tag === 22 && r) {
            var s = i.memoizedState !== null || rs;
            if (!s) {
                var a = i.alternate,
                    l = a !== null && a.memoizedState !== null || be;
                a = rs;
                var u = be;
                if (rs = s, (be = l) && !u)
                    for (N = i; N !== null;) s = N, l = s.child, s.tag === 22 && s.memoizedState !== null ? Eh(i) : l !== null ? (l.return = s, N = l) : Eh(i);
                for (; o !== null;) N = o, Vy(o), o = o.sibling;
                N = i, rs = a, be = u
            }
            Ch(e)
        } else i.subtreeFlags & 8772 && o !== null ? (o.return = i, N = o) : Ch(e)
    }
}

function Ch(e) {
    for (; N !== null;) {
        var t = N;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772) switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        be || ba(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !be)
                            if (n === null) r.componentDidMount();
                            else {
                                var i = t.elementType === t.type ? n.memoizedProps : mt(t.type, n.memoizedProps);
                                r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            }
                        var o = t.updateQueue;
                        o !== null && ah(t, o, r);
                        break;
                    case 3:
                        var s = t.updateQueue;
                        if (s !== null) {
                            if (n = null, t.child !== null) switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                            }
                            ah(t, s, n)
                        }
                        break;
                    case 5:
                        var a = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = a;
                            var l = t.memoizedProps;
                            switch (t.type) {
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    l.autoFocus && n.focus();
                                    break;
                                case "img":
                                    l.src && (n.src = l.src)
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (t.memoizedState === null) {
                            var u = t.alternate;
                            if (u !== null) {
                                var c = u.memoizedState;
                                if (c !== null) {
                                    var d = c.dehydrated;
                                    d !== null && lo(d)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(b(163))
                }
                be || t.flags & 512 && Iu(t)
            } catch (f) {
                ue(t, t.return, f)
            }
        }
        if (t === e) {
            N = null;
            break
        }
        if (n = t.sibling, n !== null) {
            n.return = t.return, N = n;
            break
        }
        N = t.return
    }
}

function Th(e) {
    for (; N !== null;) {
        var t = N;
        if (t === e) {
            N = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return, N = n;
            break
        }
        N = t.return
    }
}

function Eh(e) {
    for (; N !== null;) {
        var t = N;
        try {
            switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    var n = t.return;
                    try {
                        ba(4, t)
                    } catch (l) {
                        ue(t, n, l)
                    }
                    break;
                case 1:
                    var r = t.stateNode;
                    if (typeof r.componentDidMount == "function") {
                        var i = t.return;
                        try {
                            r.componentDidMount()
                        } catch (l) {
                            ue(t, i, l)
                        }
                    }
                    var o = t.return;
                    try {
                        Iu(t)
                    } catch (l) {
                        ue(t, o, l)
                    }
                    break;
                case 5:
                    var s = t.return;
                    try {
                        Iu(t)
                    } catch (l) {
                        ue(t, s, l)
                    }
            }
        } catch (l) {
            ue(t, t.return, l)
        }
        if (t === e) {
            N = null;
            break
        }
        var a = t.sibling;
        if (a !== null) {
            a.return = t.return, N = a;
            break
        }
        N = t.return
    }
}
var ES = Math.ceil,
    Js = an.ReactCurrentDispatcher,
    rd = an.ReactCurrentOwner,
    ut = an.ReactCurrentBatchConfig,
    G = 0,
    ve = null,
    fe = null,
    Pe = 0,
    Ge = 0,
    Or = $n(0),
    me = 0,
    xo = null,
    dr = 0,
    Ma = 0,
    id = 0,
    Qi = null,
    Ie = null,
    od = 0,
    ai = 1 / 0,
    Ht = null,
    ea = !1,
    $u = null,
    Mn = null,
    is = !1,
    Tn = null,
    ta = 0,
    Yi = 0,
    Uu = null,
    Cs = -1,
    Ts = 0;

function je() {
    return G & 6 ? de() : Cs !== -1 ? Cs : Cs = de()
}

function Dn(e) {
    return e.mode & 1 ? G & 2 && Pe !== 0 ? Pe & -Pe : lS.transition !== null ? (Ts === 0 && (Ts = Sg()), Ts) : (e = X, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Rg(e.type)), e) : 1
}

function St(e, t, n, r) {
    if (50 < Yi) throw Yi = 0, Uu = null, Error(b(185));
    Do(e, n, r), (!(G & 2) || e !== ve) && (e === ve && (!(G & 2) && (Ma |= n), me === 4 && yn(e, Pe)), Ue(e, r), n === 1 && G === 0 && !(t.mode & 1) && (ai = de() + 500, ka && Un()))
}

function Ue(e, t) {
    var n = e.callbackNode;
    lx(e, t);
    var r = Fs(e, e === ve ? Pe : 0);
    if (r === 0) n !== null && Nf(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = r & -r, e.callbackPriority !== t) {
        if (n != null && Nf(n), t === 1) e.tag === 0 ? aS(kh.bind(null, e)) : Gg(kh.bind(null, e)), rS(function() {
            !(G & 6) && Un()
        }), n = null;
        else {
            switch (Pg(r)) {
                case 1:
                    n = Dc;
                    break;
                case 4:
                    n = wg;
                    break;
                case 16:
                    n = Vs;
                    break;
                case 536870912:
                    n = xg;
                    break;
                default:
                    n = Vs
            }
            n = Hy(n, Fy.bind(null, e))
        }
        e.callbackPriority = t, e.callbackNode = n
    }
}

function Fy(e, t) {
    if (Cs = -1, Ts = 0, G & 6) throw Error(b(327));
    var n = e.callbackNode;
    if (Ur() && e.callbackNode !== n) return null;
    var r = Fs(e, e === ve ? Pe : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || t) t = na(e, r);
    else {
        t = r;
        var i = G;
        G |= 2;
        var o = zy();
        (ve !== e || Pe !== t) && (Ht = null, ai = de() + 500, or(e, t));
        do try {
            RS();
            break
        } catch (a) {
            Iy(e, a)
        }
        while (!0);
        Wc(), Js.current = o, G = i, fe !== null ? t = 0 : (ve = null, Pe = 0, t = me)
    }
    if (t !== 0) {
        if (t === 2 && (i = gu(e), i !== 0 && (r = i, t = Wu(e, i))), t === 1) throw n = xo, or(e, 0), yn(e, r), Ue(e, de()), n;
        if (t === 6) yn(e, r);
        else {
            if (i = e.current.alternate, !(r & 30) && !kS(i) && (t = na(e, r), t === 2 && (o = gu(e), o !== 0 && (r = o, t = Wu(e, o))), t === 1)) throw n = xo, or(e, 0), yn(e, r), Ue(e, de()), n;
            switch (e.finishedWork = i, e.finishedLanes = r, t) {
                case 0:
                case 1:
                    throw Error(b(345));
                case 2:
                    Qn(e, Ie, Ht);
                    break;
                case 3:
                    if (yn(e, r), (r & 130023424) === r && (t = od + 500 - de(), 10 < t)) {
                        if (Fs(e, 0) !== 0) break;
                        if (i = e.suspendedLanes, (i & r) !== r) {
                            je(), e.pingedLanes |= e.suspendedLanes & i;
                            break
                        }
                        e.timeoutHandle = Tu(Qn.bind(null, e, Ie, Ht), t);
                        break
                    }
                    Qn(e, Ie, Ht);
                    break;
                case 4:
                    if (yn(e, r), (r & 4194240) === r) break;
                    for (t = e.eventTimes, i = -1; 0 < r;) {
                        var s = 31 - xt(r);
                        o = 1 << s, s = t[s], s > i && (i = s), r &= ~o
                    }
                    if (r = i, r = de() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * ES(r / 1960)) - r, 10 < r) {
                        e.timeoutHandle = Tu(Qn.bind(null, e, Ie, Ht), r);
                        break
                    }
                    Qn(e, Ie, Ht);
                    break;
                case 5:
                    Qn(e, Ie, Ht);
                    break;
                default:
                    throw Error(b(329))
            }
        }
    }
    return Ue(e, de()), e.callbackNode === n ? Fy.bind(null, e) : null
}

function Wu(e, t) {
    var n = Qi;
    return e.current.memoizedState.isDehydrated && (or(e, t).flags |= 256), e = na(e, t), e !== 2 && (t = Ie, Ie = n, t !== null && Hu(t)), e
}

function Hu(e) {
    Ie === null ? Ie = e : Ie.push.apply(Ie, e)
}

function kS(e) {
    for (var t = e;;) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores, n !== null))
                for (var r = 0; r < n.length; r++) {
                    var i = n[r],
                        o = i.getSnapshot;
                    i = i.value;
                    try {
                        if (!Pt(o(), i)) return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
        else {
            if (t === e) break;
            for (; t.sibling === null;) {
                if (t.return === null || t.return === e) return !0;
                t = t.return
            }
            t.sibling.return = t.return, t = t.sibling
        }
    }
    return !0
}

function yn(e, t) {
    for (t &= ~id, t &= ~Ma, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
        var n = 31 - xt(t),
            r = 1 << n;
        e[n] = -1, t &= ~r
    }
}

function kh(e) {
    if (G & 6) throw Error(b(327));
    Ur();
    var t = Fs(e, 0);
    if (!(t & 1)) return Ue(e, de()), null;
    var n = na(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = gu(e);
        r !== 0 && (t = r, n = Wu(e, r))
    }
    if (n === 1) throw n = xo, or(e, 0), yn(e, t), Ue(e, de()), n;
    if (n === 6) throw Error(b(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, Qn(e, Ie, Ht), Ue(e, de()), null
}

function sd(e, t) {
    var n = G;
    G |= 1;
    try {
        return e(t)
    } finally {
        G = n, G === 0 && (ai = de() + 500, ka && Un())
    }
}

function fr(e) {
    Tn !== null && Tn.tag === 0 && !(G & 6) && Ur();
    var t = G;
    G |= 1;
    var n = ut.transition,
        r = X;
    try {
        if (ut.transition = null, X = 1, e) return e()
    } finally {
        X = r, ut.transition = n, G = t, !(G & 6) && Un()
    }
}

function ad() {
    Ge = Or.current, ee(Or)
}

function or(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, nS(n)), fe !== null)
        for (n = fe.return; n !== null;) {
            var r = n;
            switch (Bc(r), r.tag) {
                case 1:
                    r = r.type.childContextTypes, r != null && Us();
                    break;
                case 3:
                    oi(), ee(Be), ee(De), Xc();
                    break;
                case 5:
                    Yc(r);
                    break;
                case 4:
                    oi();
                    break;
                case 13:
                    ee(re);
                    break;
                case 19:
                    ee(re);
                    break;
                case 10:
                    Hc(r.type._context);
                    break;
                case 22:
                case 23:
                    ad()
            }
            n = n.return
        }
    if (ve = e, fe = e = On(e.current, null), Pe = Ge = t, me = 0, xo = null, id = Ma = dr = 0, Ie = Qi = null, Zn !== null) {
        for (t = 0; t < Zn.length; t++)
            if (n = Zn[t], r = n.interleaved, r !== null) {
                n.interleaved = null;
                var i = r.next,
                    o = n.pending;
                if (o !== null) {
                    var s = o.next;
                    o.next = i, r.next = s
                }
                n.pending = r
            }
        Zn = null
    }
    return e
}

function Iy(e, t) {
    do {
        var n = fe;
        try {
            if (Wc(), xs.current = Zs, qs) {
                for (var r = oe.memoizedState; r !== null;) {
                    var i = r.queue;
                    i !== null && (i.pending = null), r = r.next
                }
                qs = !1
            }
            if (cr = 0, ye = he = oe = null, Ki = !1, yo = 0, rd.current = null, n === null || n.return === null) {
                me = 1, xo = t, fe = null;
                break
            }
            e: {
                var o = e,
                    s = n.return,
                    a = n,
                    l = t;
                if (t = Pe, a.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
                    var u = l,
                        c = a,
                        d = c.tag;
                    if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
                        var f = c.alternate;
                        f ? (c.updateQueue = f.updateQueue, c.memoizedState = f.memoizedState, c.lanes = f.lanes) : (c.updateQueue = null, c.memoizedState = null)
                    }
                    var m = hh(s);
                    if (m !== null) {
                        m.flags &= -257, ph(m, s, a, o, t), m.mode & 1 && fh(o, u, t), t = m, l = u;
                        var v = t.updateQueue;
                        if (v === null) {
                            var y = new Set;
                            y.add(l), t.updateQueue = y
                        } else v.add(l);
                        break e
                    } else {
                        if (!(t & 1)) {
                            fh(o, u, t), ld();
                            break e
                        }
                        l = Error(b(426))
                    }
                } else if (ne && a.mode & 1) {
                    var x = hh(s);
                    if (x !== null) {
                        !(x.flags & 65536) && (x.flags |= 256), ph(x, s, a, o, t), $c(si(l, a));
                        break e
                    }
                }
                o = l = si(l, a),
                me !== 4 && (me = 2),
                Qi === null ? Qi = [o] : Qi.push(o),
                o = s;do {
                    switch (o.tag) {
                        case 3:
                            o.flags |= 65536, t &= -t, o.lanes |= t;
                            var p = Py(o, l, t);
                            sh(o, p);
                            break e;
                        case 1:
                            a = l;
                            var h = o.type,
                                g = o.stateNode;
                            if (!(o.flags & 128) && (typeof h.getDerivedStateFromError == "function" || g !== null && typeof g.componentDidCatch == "function" && (Mn === null || !Mn.has(g)))) {
                                o.flags |= 65536, t &= -t, o.lanes |= t;
                                var S = Cy(o, a, t);
                                sh(o, S);
                                break e
                            }
                    }
                    o = o.return
                } while (o !== null)
            }
            $y(n)
        } catch (P) {
            t = P, fe === n && n !== null && (fe = n = n.return);
            continue
        }
        break
    } while (!0)
}

function zy() {
    var e = Js.current;
    return Js.current = Zs, e === null ? Zs : e
}

function ld() {
    (me === 0 || me === 3 || me === 2) && (me = 4), ve === null || !(dr & 268435455) && !(Ma & 268435455) || yn(ve, Pe)
}

function na(e, t) {
    var n = G;
    G |= 2;
    var r = zy();
    (ve !== e || Pe !== t) && (Ht = null, or(e, t));
    do try {
        AS();
        break
    } catch (i) {
        Iy(e, i)
    }
    while (!0);
    if (Wc(), G = n, Js.current = r, fe !== null) throw Error(b(261));
    return ve = null, Pe = 0, me
}

function AS() {
    for (; fe !== null;) By(fe)
}

function RS() {
    for (; fe !== null && !J1();) By(fe)
}

function By(e) {
    var t = Wy(e.alternate, e, Ge);
    e.memoizedProps = e.pendingProps, t === null ? $y(e) : fe = t, rd.current = null
}

function $y(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return, t.flags & 32768) {
            if (n = SS(n, t), n !== null) {
                n.flags &= 32767, fe = n;
                return
            }
            if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
            else {
                me = 6, fe = null;
                return
            }
        } else if (n = xS(n, t, Ge), n !== null) {
            fe = n;
            return
        }
        if (t = t.sibling, t !== null) {
            fe = t;
            return
        }
        fe = t = e
    } while (t !== null);
    me === 0 && (me = 5)
}

function Qn(e, t, n) {
    var r = X,
        i = ut.transition;
    try {
        ut.transition = null, X = 1, bS(e, t, n, r)
    } finally {
        ut.transition = i, X = r
    }
    return null
}

function bS(e, t, n, r) {
    do Ur(); while (Tn !== null);
    if (G & 6) throw Error(b(327));
    n = e.finishedWork;
    var i = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(b(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var o = n.lanes | n.childLanes;
    if (ux(e, o), e === ve && (fe = ve = null, Pe = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || is || (is = !0, Hy(Vs, function() {
            return Ur(), null
        })), o = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || o) {
        o = ut.transition, ut.transition = null;
        var s = X;
        X = 1;
        var a = G;
        G |= 4, rd.current = null, CS(e, n), jy(n, e), Yx(Pu), Is = !!Su, Pu = Su = null, e.current = n, TS(n), ex(), G = a, X = s, ut.transition = o
    } else e.current = n;
    if (is && (is = !1, Tn = e, ta = i), o = e.pendingLanes, o === 0 && (Mn = null), rx(n.stateNode), Ue(e, de()), t !== null)
        for (r = e.onRecoverableError, n = 0; n < t.length; n++) i = t[n], r(i.value, {
            componentStack: i.stack,
            digest: i.digest
        });
    if (ea) throw ea = !1, e = $u, $u = null, e;
    return ta & 1 && e.tag !== 0 && Ur(), o = e.pendingLanes, o & 1 ? e === Uu ? Yi++ : (Yi = 0, Uu = e) : Yi = 0, Un(), null
}

function Ur() {
    if (Tn !== null) {
        var e = Pg(ta),
            t = ut.transition,
            n = X;
        try {
            if (ut.transition = null, X = 16 > e ? 16 : e, Tn === null) var r = !1;
            else {
                if (e = Tn, Tn = null, ta = 0, G & 6) throw Error(b(331));
                var i = G;
                for (G |= 4, N = e.current; N !== null;) {
                    var o = N,
                        s = o.child;
                    if (N.flags & 16) {
                        var a = o.deletions;
                        if (a !== null) {
                            for (var l = 0; l < a.length; l++) {
                                var u = a[l];
                                for (N = u; N !== null;) {
                                    var c = N;
                                    switch (c.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            Gi(8, c, o)
                                    }
                                    var d = c.child;
                                    if (d !== null) d.return = c, N = d;
                                    else
                                        for (; N !== null;) {
                                            c = N;
                                            var f = c.sibling,
                                                m = c.return;
                                            if (Ly(c), c === u) {
                                                N = null;
                                                break
                                            }
                                            if (f !== null) {
                                                f.return = m, N = f;
                                                break
                                            }
                                            N = m
                                        }
                                }
                            }
                            var v = o.alternate;
                            if (v !== null) {
                                var y = v.child;
                                if (y !== null) {
                                    v.child = null;
                                    do {
                                        var x = y.sibling;
                                        y.sibling = null, y = x
                                    } while (y !== null)
                                }
                            }
                            N = o
                        }
                    }
                    if (o.subtreeFlags & 2064 && s !== null) s.return = o, N = s;
                    else e: for (; N !== null;) {
                        if (o = N, o.flags & 2048) switch (o.tag) {
                            case 0:
                            case 11:
                            case 15:
                                Gi(9, o, o.return)
                        }
                        var p = o.sibling;
                        if (p !== null) {
                            p.return = o.return, N = p;
                            break e
                        }
                        N = o.return
                    }
                }
                var h = e.current;
                for (N = h; N !== null;) {
                    s = N;
                    var g = s.child;
                    if (s.subtreeFlags & 2064 && g !== null) g.return = s, N = g;
                    else e: for (s = h; N !== null;) {
                        if (a = N, a.flags & 2048) try {
                            switch (a.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    ba(9, a)
                            }
                        } catch (P) {
                            ue(a, a.return, P)
                        }
                        if (a === s) {
                            N = null;
                            break e
                        }
                        var S = a.sibling;
                        if (S !== null) {
                            S.return = a.return, N = S;
                            break e
                        }
                        N = a.return
                    }
                }
                if (G = i, Un(), Nt && typeof Nt.onPostCommitFiberRoot == "function") try {
                    Nt.onPostCommitFiberRoot(Sa, e)
                } catch {}
                r = !0
            }
            return r
        } finally {
            X = n, ut.transition = t
        }
    }
    return !1
}

function Ah(e, t, n) {
    t = si(n, t), t = Py(e, t, 1), e = bn(e, t, 1), t = je(), e !== null && (Do(e, 1, t), Ue(e, t))
}

function ue(e, t, n) {
    if (e.tag === 3) Ah(e, e, n);
    else
        for (; t !== null;) {
            if (t.tag === 3) {
                Ah(t, e, n);
                break
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Mn === null || !Mn.has(r))) {
                    e = si(n, e), e = Cy(t, e, 1), t = bn(t, e, 1), e = je(), t !== null && (Do(t, 1, e), Ue(t, e));
                    break
                }
            }
            t = t.return
        }
}

function MS(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = je(), e.pingedLanes |= e.suspendedLanes & n, ve === e && (Pe & n) === n && (me === 4 || me === 3 && (Pe & 130023424) === Pe && 500 > de() - od ? or(e, 0) : id |= n), Ue(e, t)
}

function Uy(e, t) {
    t === 0 && (e.mode & 1 ? (t = Qo, Qo <<= 1, !(Qo & 130023424) && (Qo = 4194304)) : t = 1);
    var n = je();
    e = tn(e, t), e !== null && (Do(e, t, n), Ue(e, n))
}

function DS(e) {
    var t = e.memoizedState,
        n = 0;
    t !== null && (n = t.retryLane), Uy(e, n)
}

function OS(e, t) {
    var n = 0;
    switch (e.tag) {
        case 13:
            var r = e.stateNode,
                i = e.memoizedState;
            i !== null && (n = i.retryLane);
            break;
        case 19:
            r = e.stateNode;
            break;
        default:
            throw Error(b(314))
    }
    r !== null && r.delete(t), Uy(e, n)
}
var Wy;
Wy = function(e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || Be.current) ze = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128)) return ze = !1, wS(e, t, n);
            ze = !!(e.flags & 131072)
        }
    else ze = !1, ne && t.flags & 1048576 && Qg(t, Ks, t.index);
    switch (t.lanes = 0, t.tag) {
        case 2:
            var r = t.type;
            Ps(e, t), e = t.pendingProps;
            var i = ni(t, De.current);
            $r(t, n), i = Zc(null, t, r, e, i, n);
            var o = Jc();
            return t.flags |= 1, typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, $e(r) ? (o = !0, Ws(t)) : o = !1, t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, Gc(t), i.updater = Ra, t.stateNode = i, i._reactInternals = t, Du(t, r, e, n), t = Nu(null, t, r, !0, o, n)) : (t.tag = 0, ne && o && zc(t), Le(null, t, i, n), t = t.child), t;
        case 16:
            r = t.elementType;
            e: {
                switch (Ps(e, t), e = t.pendingProps, i = r._init, r = i(r._payload), t.type = r, i = t.tag = NS(r), e = mt(r, e), i) {
                    case 0:
                        t = Lu(null, t, r, e, n);
                        break e;
                    case 1:
                        t = yh(null, t, r, e, n);
                        break e;
                    case 11:
                        t = mh(null, t, r, e, n);
                        break e;
                    case 14:
                        t = gh(null, t, r, mt(r.type, e), n);
                        break e
                }
                throw Error(b(306, r, ""))
            }
            return t;
        case 0:
            return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : mt(r, i), Lu(e, t, r, i, n);
        case 1:
            return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : mt(r, i), yh(e, t, r, i, n);
        case 3:
            e: {
                if (Ay(t), e === null) throw Error(b(387));r = t.pendingProps,
                o = t.memoizedState,
                i = o.element,
                ey(e, t),
                Ys(t, r, null, n);
                var s = t.memoizedState;
                if (r = s.element, o.isDehydrated)
                    if (o = {
                            element: r,
                            isDehydrated: !1,
                            cache: s.cache,
                            pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
                            transitions: s.transitions
                        }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
                        i = si(Error(b(423)), t), t = vh(e, t, r, n, i);
                        break e
                    } else if (r !== i) {
                    i = si(Error(b(424)), t), t = vh(e, t, r, n, i);
                    break e
                } else
                    for (Ye = Rn(t.stateNode.containerInfo.firstChild), Xe = t, ne = !0, wt = null, n = Zg(t, null, r, n), t.child = n; n;) n.flags = n.flags & -3 | 4096, n = n.sibling;
                else {
                    if (ri(), r === i) {
                        t = nn(e, t, n);
                        break e
                    }
                    Le(e, t, r, n)
                }
                t = t.child
            }
            return t;
        case 5:
            return ty(t), e === null && Ru(t), r = t.type, i = t.pendingProps, o = e !== null ? e.memoizedProps : null, s = i.children, Cu(r, i) ? s = null : o !== null && Cu(r, o) && (t.flags |= 32), ky(e, t), Le(e, t, s, n), t.child;
        case 6:
            return e === null && Ru(t), null;
        case 13:
            return Ry(e, t, n);
        case 4:
            return Qc(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = ii(t, null, r, n) : Le(e, t, r, n), t.child;
        case 11:
            return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : mt(r, i), mh(e, t, r, i, n);
        case 7:
            return Le(e, t, t.pendingProps, n), t.child;
        case 8:
            return Le(e, t, t.pendingProps.children, n), t.child;
        case 12:
            return Le(e, t, t.pendingProps.children, n), t.child;
        case 10:
            e: {
                if (r = t.type._context, i = t.pendingProps, o = t.memoizedProps, s = i.value, q(Gs, r._currentValue), r._currentValue = s, o !== null)
                    if (Pt(o.value, s)) {
                        if (o.children === i.children && !Be.current) {
                            t = nn(e, t, n);
                            break e
                        }
                    } else
                        for (o = t.child, o !== null && (o.return = t); o !== null;) {
                            var a = o.dependencies;
                            if (a !== null) {
                                s = o.child;
                                for (var l = a.firstContext; l !== null;) {
                                    if (l.context === r) {
                                        if (o.tag === 1) {
                                            l = Xt(-1, n & -n), l.tag = 2;
                                            var u = o.updateQueue;
                                            if (u !== null) {
                                                u = u.shared;
                                                var c = u.pending;
                                                c === null ? l.next = l : (l.next = c.next, c.next = l), u.pending = l
                                            }
                                        }
                                        o.lanes |= n, l = o.alternate, l !== null && (l.lanes |= n), bu(o.return, n, t), a.lanes |= n;
                                        break
                                    }
                                    l = l.next
                                }
                            } else if (o.tag === 10) s = o.type === t.type ? null : o.child;
                            else if (o.tag === 18) {
                                if (s = o.return, s === null) throw Error(b(341));
                                s.lanes |= n, a = s.alternate, a !== null && (a.lanes |= n), bu(s, n, t), s = o.sibling
                            } else s = o.child;
                            if (s !== null) s.return = o;
                            else
                                for (s = o; s !== null;) {
                                    if (s === t) {
                                        s = null;
                                        break
                                    }
                                    if (o = s.sibling, o !== null) {
                                        o.return = s.return, s = o;
                                        break
                                    }
                                    s = s.return
                                }
                            o = s
                        }
                Le(e, t, i.children, n),
                t = t.child
            }
            return t;
        case 9:
            return i = t.type, r = t.pendingProps.children, $r(t, n), i = ct(i), r = r(i), t.flags |= 1, Le(e, t, r, n), t.child;
        case 14:
            return r = t.type, i = mt(r, t.pendingProps), i = mt(r.type, i), gh(e, t, r, i, n);
        case 15:
            return Ty(e, t, t.type, t.pendingProps, n);
        case 17:
            return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : mt(r, i), Ps(e, t), t.tag = 1, $e(r) ? (e = !0, Ws(t)) : e = !1, $r(t, n), Sy(t, r, i), Du(t, r, i, n), Nu(null, t, r, !0, e, n);
        case 19:
            return by(e, t, n);
        case 22:
            return Ey(e, t, n)
    }
    throw Error(b(156, t.tag))
};

function Hy(e, t) {
    return vg(e, t)
}

function LS(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
}

function lt(e, t, n, r) {
    return new LS(e, t, n, r)
}

function ud(e) {
    return e = e.prototype, !(!e || !e.isReactComponent)
}

function NS(e) {
    if (typeof e == "function") return ud(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof, e === Rc) return 11;
        if (e === bc) return 14
    }
    return 2
}

function On(e, t) {
    var n = e.alternate;
    return n === null ? (n = lt(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n
}

function Es(e, t, n, r, i, o) {
    var s = 2;
    if (r = e, typeof e == "function") ud(e) && (s = 1);
    else if (typeof e == "string") s = 5;
    else e: switch (e) {
        case Pr:
            return sr(n.children, i, o, t);
        case Ac:
            s = 8, i |= 8;
            break;
        case tu:
            return e = lt(12, n, t, i | 2), e.elementType = tu, e.lanes = o, e;
        case nu:
            return e = lt(13, n, t, i), e.elementType = nu, e.lanes = o, e;
        case ru:
            return e = lt(19, n, t, i), e.elementType = ru, e.lanes = o, e;
        case tg:
            return Da(n, i, o, t);
        default:
            if (typeof e == "object" && e !== null) switch (e.$$typeof) {
                case Jm:
                    s = 10;
                    break e;
                case eg:
                    s = 9;
                    break e;
                case Rc:
                    s = 11;
                    break e;
                case bc:
                    s = 14;
                    break e;
                case pn:
                    s = 16, r = null;
                    break e
            }
            throw Error(b(130, e == null ? e : typeof e, ""))
    }
    return t = lt(s, n, t, i), t.elementType = e, t.type = r, t.lanes = o, t
}

function sr(e, t, n, r) {
    return e = lt(7, e, r, t), e.lanes = n, e
}

function Da(e, t, n, r) {
    return e = lt(22, e, r, t), e.elementType = tg, e.lanes = n, e.stateNode = {
        isHidden: !1
    }, e
}

function Rl(e, t, n) {
    return e = lt(6, e, null, t), e.lanes = n, e
}

function bl(e, t, n) {
    return t = lt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    }, t
}

function _S(e, t, n, r, i) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = ul(0), this.expirationTimes = ul(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ul(0), this.identifierPrefix = r, this.onRecoverableError = i, this.mutableSourceEagerHydrationData = null
}

function cd(e, t, n, r, i, o, s, a, l) {
    return e = new _S(e, t, n, a, l), t === 1 ? (t = 1, o === !0 && (t |= 8)) : t = 0, o = lt(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    }, Gc(o), e
}

function jS(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: Sr,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}

function Ky(e) {
    if (!e) return jn;
    e = e._reactInternals;
    e: {
        if (yr(e) !== e || e.tag !== 1) throw Error(b(170));
        var t = e;do {
            switch (t.tag) {
                case 3:
                    t = t.stateNode.context;
                    break e;
                case 1:
                    if ($e(t.type)) {
                        t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                        break e
                    }
            }
            t = t.return
        } while (t !== null);
        throw Error(b(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if ($e(n)) return Kg(e, n, t)
    }
    return t
}

function Gy(e, t, n, r, i, o, s, a, l) {
    return e = cd(n, r, !0, e, i, o, s, a, l), e.context = Ky(null), n = e.current, r = je(), i = Dn(n), o = Xt(r, i), o.callback = t ? ? null, bn(n, o, i), e.current.lanes = i, Do(e, i, r), Ue(e, r), e
}

function Oa(e, t, n, r) {
    var i = t.current,
        o = je(),
        s = Dn(i);
    return n = Ky(n), t.context === null ? t.context = n : t.pendingContext = n, t = Xt(o, s), t.payload = {
        element: e
    }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = bn(i, t, s), e !== null && (St(e, i, s, o), ws(e, i, s)), s
}

function ra(e) {
    if (e = e.current, !e.child) return null;
    switch (e.child.tag) {
        case 5:
            return e.child.stateNode;
        default:
            return e.child.stateNode
    }
}

function Rh(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}

function dd(e, t) {
    Rh(e, t), (e = e.alternate) && Rh(e, t)
}

function VS() {
    return null
}
var Qy = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
};

function fd(e) {
    this._internalRoot = e
}
La.prototype.render = fd.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(b(409));
    Oa(e, t, null, null)
};
La.prototype.unmount = fd.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        fr(function() {
            Oa(null, e, null, null)
        }), t[en] = null
    }
};

function La(e) {
    this._internalRoot = e
}
La.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = Eg();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < gn.length && t !== 0 && t < gn[n].priority; n++);
        gn.splice(n, 0, e), n === 0 && Ag(e)
    }
};

function hd(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}

function Na(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}

function bh() {}

function FS(e, t, n, r, i) {
    if (i) {
        if (typeof r == "function") {
            var o = r;
            r = function() {
                var u = ra(s);
                o.call(u)
            }
        }
        var s = Gy(t, r, e, 0, null, !1, !1, "", bh);
        return e._reactRootContainer = s, e[en] = s.current, fo(e.nodeType === 8 ? e.parentNode : e), fr(), s
    }
    for (; i = e.lastChild;) e.removeChild(i);
    if (typeof r == "function") {
        var a = r;
        r = function() {
            var u = ra(l);
            a.call(u)
        }
    }
    var l = cd(e, 0, !1, null, null, !1, !1, "", bh);
    return e._reactRootContainer = l, e[en] = l.current, fo(e.nodeType === 8 ? e.parentNode : e), fr(function() {
        Oa(t, l, n, r)
    }), l
}

function _a(e, t, n, r, i) {
    var o = n._reactRootContainer;
    if (o) {
        var s = o;
        if (typeof i == "function") {
            var a = i;
            i = function() {
                var l = ra(s);
                a.call(l)
            }
        }
        Oa(t, s, e, i)
    } else s = FS(n, t, e, i, r);
    return ra(s)
}
Cg = function(e) {
    switch (e.tag) {
        case 3:
            var t = e.stateNode;
            if (t.current.memoizedState.isDehydrated) {
                var n = Vi(t.pendingLanes);
                n !== 0 && (Oc(t, n | 1), Ue(t, de()), !(G & 6) && (ai = de() + 500, Un()))
            }
            break;
        case 13:
            fr(function() {
                var r = tn(e, 1);
                if (r !== null) {
                    var i = je();
                    St(r, e, 1, i)
                }
            }), dd(e, 1)
    }
};
Lc = function(e) {
    if (e.tag === 13) {
        var t = tn(e, 134217728);
        if (t !== null) {
            var n = je();
            St(t, e, 134217728, n)
        }
        dd(e, 134217728)
    }
};
Tg = function(e) {
    if (e.tag === 13) {
        var t = Dn(e),
            n = tn(e, t);
        if (n !== null) {
            var r = je();
            St(n, e, t, r)
        }
        dd(e, t)
    }
};
Eg = function() {
    return X
};
kg = function(e, t) {
    var n = X;
    try {
        return X = e, t()
    } finally {
        X = n
    }
};
hu = function(e, t, n) {
    switch (t) {
        case "input":
            if (su(e, n), t = n.name, n.type === "radio" && t != null) {
                for (n = e; n.parentNode;) n = n.parentNode;
                for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                        var i = Ea(r);
                        if (!i) throw Error(b(90));
                        rg(r), su(r, i)
                    }
                }
            }
            break;
        case "textarea":
            og(e, n);
            break;
        case "select":
            t = n.value, t != null && Fr(e, !!n.multiple, t, !1)
    }
};
fg = sd;
hg = fr;
var IS = {
        usingClientEntryPoint: !1,
        Events: [Lo, kr, Ea, cg, dg, sd]
    },
    Mi = {
        findFiberByHostInstance: qn,
        bundleType: 0,
        version: "18.3.1",
        rendererPackageName: "react-dom"
    },
    zS = {
        bundleType: Mi.bundleType,
        version: Mi.version,
        rendererPackageName: Mi.rendererPackageName,
        rendererConfig: Mi.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: an.ReactCurrentDispatcher,
        findHostInstanceByFiber: function(e) {
            return e = gg(e), e === null ? null : e.stateNode
        },
        findFiberByHostInstance: Mi.findFiberByHostInstance || VS,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
    };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var os = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!os.isDisabled && os.supportsFiber) try {
        Sa = os.inject(zS), Nt = os
    } catch {}
}
et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = IS;
et.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!hd(t)) throw Error(b(200));
    return jS(e, t, null, n)
};
et.createRoot = function(e, t) {
    if (!hd(e)) throw Error(b(299));
    var n = !1,
        r = "",
        i = Qy;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), t = cd(e, 1, !1, null, null, n, !1, r, i), e[en] = t.current, fo(e.nodeType === 8 ? e.parentNode : e), new fd(t)
};
et.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0) throw typeof e.render == "function" ? Error(b(188)) : (e = Object.keys(e).join(","), Error(b(268, e)));
    return e = gg(t), e = e === null ? null : e.stateNode, e
};
et.flushSync = function(e) {
    return fr(e)
};
et.hydrate = function(e, t, n) {
    if (!Na(t)) throw Error(b(200));
    return _a(null, e, t, !0, n)
};
et.hydrateRoot = function(e, t, n) {
    if (!hd(e)) throw Error(b(405));
    var r = n != null && n.hydratedSources || null,
        i = !1,
        o = "",
        s = Qy;
    if (n != null && (n.unstable_strictMode === !0 && (i = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (s = n.onRecoverableError)), t = Gy(t, null, e, 1, n ? ? null, i, !1, o, s), e[en] = t.current, fo(e), r)
        for (e = 0; e < r.length; e++) n = r[e], i = n._getVersion, i = i(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, i] : t.mutableSourceEagerHydrationData.push(n, i);
    return new La(t)
};
et.render = function(e, t, n) {
    if (!Na(t)) throw Error(b(200));
    return _a(null, e, t, !1, n)
};
et.unmountComponentAtNode = function(e) {
    if (!Na(e)) throw Error(b(40));
    return e._reactRootContainer ? (fr(function() {
        _a(null, null, e, !1, function() {
            e._reactRootContainer = null, e[en] = null
        })
    }), !0) : !1
};
et.unstable_batchedUpdates = sd;
et.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!Na(n)) throw Error(b(200));
    if (e == null || e._reactInternals === void 0) throw Error(b(38));
    return _a(e, t, n, !1, r)
};
et.version = "18.3.1-next-f1338f8080-20240426";

function Yy() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Yy)
    } catch (e) {
        console.error(e)
    }
}
Yy(), Ym.exports = et;
var _o = Ym.exports;
const BS = Vm(_o);
var Xy, Mh = _o;
Xy = Mh.createRoot, Mh.hydrateRoot;

function $S(e, t) {
    if (e instanceof RegExp) return {
        keys: !1,
        pattern: e
    };
    var n, r, i, o, s = [],
        a = "",
        l = e.split("/");
    for (l[0] || l.shift(); i = l.shift();) n = i[0], n === "*" ? (s.push(n), a += i[1] === "?" ? "(?:/(.*))?" : "/(.*)") : n === ":" ? (r = i.indexOf("?", 1), o = i.indexOf(".", 1), s.push(i.substring(1, ~r ? r : ~o ? o : i.length)), a += ~r && !~o ? "(?:/([^/]+?))?" : "/([^/]+?)", ~o && (a += (~r ? "?" : "") + "\\" + i.substring(o))) : a += "/" + i;
    return {
        keys: s,
        pattern: new RegExp("^" + a + (t ? "(?=$|/)" : "/?$"), "i")
    }
}
var qy = {
        exports: {}
    },
    Zy = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var li = w;

function US(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var WS = typeof Object.is == "function" ? Object.is : US,
    HS = li.useState,
    KS = li.useEffect,
    GS = li.useLayoutEffect,
    QS = li.useDebugValue;

function YS(e, t) {
    var n = t(),
        r = HS({
            inst: {
                value: n,
                getSnapshot: t
            }
        }),
        i = r[0].inst,
        o = r[1];
    return GS(function() {
        i.value = n, i.getSnapshot = t, Ml(i) && o({
            inst: i
        })
    }, [e, n, t]), KS(function() {
        return Ml(i) && o({
            inst: i
        }), e(function() {
            Ml(i) && o({
                inst: i
            })
        })
    }, [e]), QS(n), n
}

function Ml(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !WS(e, n)
    } catch {
        return !0
    }
}

function XS(e, t) {
    return t()
}
var qS = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? XS : YS;
Zy.useSyncExternalStore = li.useSyncExternalStore !== void 0 ? li.useSyncExternalStore : qS;
qy.exports = Zy;
var ZS = qy.exports;
const JS = M1.useInsertionEffect,
    eP = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u",
    tP = eP ? w.useLayoutEffect : w.useEffect,
    nP = JS || tP,
    Jy = e => {
        const t = w.useRef([e, (...n) => t[0](...n)]).current;
        return nP(() => {
            t[0] = e
        }), t[1]
    },
    rP = "popstate",
    pd = "pushState",
    md = "replaceState",
    iP = "hashchange",
    Dh = [rP, pd, md, iP],
    oP = e => {
        for (const t of Dh) addEventListener(t, e);
        return () => {
            for (const t of Dh) removeEventListener(t, e)
        }
    },
    ev = (e, t) => ZS.useSyncExternalStore(oP, e, t),
    sP = () => location.search,
    aP = ({
        ssrSearch: e = ""
    } = {}) => ev(sP, () => e),
    Oh = () => location.pathname,
    lP = ({
        ssrPath: e
    } = {}) => ev(Oh, e ? () => e : Oh),
    uP = (e, {
        replace: t = !1,
        state: n = null
    } = {}) => history[t ? md : pd](n, "", e),
    cP = (e = {}) => [lP(e), uP],
    Lh = Symbol.for("wouter_v3");
if (typeof history < "u" && typeof window[Lh] > "u") {
    for (const e of [pd, md]) {
        const t = history[e];
        history[e] = function() {
            const n = t.apply(this, arguments),
                r = new Event(e);
            return r.arguments = arguments, dispatchEvent(r), n
        }
    }
    Object.defineProperty(window, Lh, {
        value: !0
    })
}
const dP = (e, t) => t.toLowerCase().indexOf(e.toLowerCase()) ? "~" + t : t.slice(e.length) || "/",
    tv = (e = "") => e === "/" ? "" : e,
    fP = (e, t) => e[0] === "~" ? e.slice(1) : tv(t) + e,
    hP = (e = "", t) => dP(Nh(tv(e)), Nh(t)),
    Nh = e => {
        try {
            return decodeURI(e)
        } catch {
            return e
        }
    },
    nv = {
        hook: cP,
        searchHook: aP,
        parser: $S,
        base: "",
        ssrPath: void 0,
        ssrSearch: void 0,
        hrefs: e => e
    },
    rv = w.createContext(nv),
    ja = () => w.useContext(rv),
    iv = {},
    ov = w.createContext(iv),
    pP = () => w.useContext(ov),
    gd = e => {
        const [t, n] = e.hook(e);
        return [hP(e.base, t), Jy((r, i) => n(fP(r, e.base), i))]
    },
    sv = (e, t, n, r) => {
        const {
            pattern: i,
            keys: o
        } = t instanceof RegExp ? {
            keys: !1,
            pattern: t
        } : e(t || "*", r), s = i.exec(n) || [], [a, ...l] = s;
        return a !== void 0 ? [!0, (() => {
            const u = o !== !1 ? Object.fromEntries(o.map((d, f) => [d, l[f]])) : s.groups;
            let c = { ...l
            };
            return u && Object.assign(c, u), c
        })(), ...r ? [a] : []] : [!1, null]
    },
    mP = ({
        children: e,
        ...t
    }) => {
        var c, d;
        const n = ja(),
            r = t.hook ? nv : n;
        let i = r;
        const [o, s] = ((c = t.ssrPath) == null ? void 0 : c.split("?")) ? ? [];
        s && (t.ssrSearch = s, t.ssrPath = o), t.hrefs = t.hrefs ? ? ((d = t.hook) == null ? void 0 : d.hrefs);
        let a = w.useRef({}),
            l = a.current,
            u = l;
        for (let f in r) {
            const m = f === "base" ? r[f] + (t[f] || "") : t[f] || r[f];
            l === u && m !== u[f] && (a.current = u = { ...u
            }), u[f] = m, m !== r[f] && (i = u)
        }
        return w.createElement(rv.Provider, {
            value: i,
            children: e
        })
    },
    _h = ({
        children: e,
        component: t
    }, n) => t ? w.createElement(t, {
        params: n
    }) : typeof e == "function" ? e(n) : e,
    gP = e => {
        let t = w.useRef(iv),
            n = t.current;
        for (const r in e) e[r] !== n[r] && (n = e);
        return Object.keys(e).length === 0 && (n = e), t.current = n
    },
    jh = ({
        path: e,
        nest: t,
        match: n,
        ...r
    }) => {
        const i = ja(),
            [o] = gd(i),
            [s, a, l] = n ? ? sv(i.parser, e, o, t),
            u = gP({ ...pP(),
                ...a
            });
        if (!s) return null;
        const c = l ? w.createElement(mP, {
            base: l
        }, _h(r, u)) : _h(r, u);
        return w.createElement(ov.Provider, {
            value: u,
            children: c
        })
    };
w.forwardRef((e, t) => {
    const n = ja(),
        [r, i] = gd(n),
        {
            to: o = "",
            href: s = o,
            onClick: a,
            asChild: l,
            children: u,
            className: c,
            replace: d,
            state: f,
            ...m
        } = e,
        v = Jy(x => {
            x.ctrlKey || x.metaKey || x.altKey || x.shiftKey || x.button !== 0 || (a == null || a(x), x.defaultPrevented || (x.preventDefault(), i(s, e)))
        }),
        y = n.hrefs(s[0] === "~" ? s.slice(1) : n.base + s, n);
    return l && w.isValidElement(u) ? w.cloneElement(u, {
        onClick: v,
        href: y
    }) : w.createElement("a", { ...m,
        onClick: v,
        href: y,
        className: c != null && c.call ? c(r === s) : c,
        children: u,
        ref: t
    })
});
const av = e => Array.isArray(e) ? e.flatMap(t => av(t && t.type === w.Fragment ? t.props.children : t)) : [e],
    yP = ({
        children: e,
        location: t
    }) => {
        const n = ja(),
            [r] = gd(n);
        for (const i of av(e)) {
            let o = 0;
            if (w.isValidElement(i) && (o = sv(n.parser, i.props.path, t || r, i.props.nest))[0]) return w.cloneElement(i, {
                match: o
            })
        }
        return null
    };
var Va = class {
        constructor() {
            this.listeners = new Set, this.subscribe = this.subscribe.bind(this)
        }
        subscribe(e) {
            return this.listeners.add(e), this.onSubscribe(), () => {
                this.listeners.delete(e), this.onUnsubscribe()
            }
        }
        hasListeners() {
            return this.listeners.size > 0
        }
        onSubscribe() {}
        onUnsubscribe() {}
    },
    Fa = typeof window > "u" || "Deno" in globalThis;

function gt() {}

function vP(e, t) {
    return typeof e == "function" ? e(t) : e
}

function wP(e) {
    return typeof e == "number" && e >= 0 && e !== 1 / 0
}

function xP(e, t) {
    return Math.max(e + (t || 0) - Date.now(), 0)
}

function Vh(e, t) {
    return typeof e == "function" ? e(t) : e
}

function SP(e, t) {
    return typeof e == "function" ? e(t) : e
}

function Fh(e, t) {
    const {
        type: n = "all",
        exact: r,
        fetchStatus: i,
        predicate: o,
        queryKey: s,
        stale: a
    } = e;
    if (s) {
        if (r) {
            if (t.queryHash !== yd(s, t.options)) return !1
        } else if (!Po(t.queryKey, s)) return !1
    }
    if (n !== "all") {
        const l = t.isActive();
        if (n === "active" && !l || n === "inactive" && l) return !1
    }
    return !(typeof a == "boolean" && t.isStale() !== a || i && i !== t.state.fetchStatus || o && !o(t))
}

function Ih(e, t) {
    const {
        exact: n,
        status: r,
        predicate: i,
        mutationKey: o
    } = e;
    if (o) {
        if (!t.options.mutationKey) return !1;
        if (n) {
            if (So(t.options.mutationKey) !== So(o)) return !1
        } else if (!Po(t.options.mutationKey, o)) return !1
    }
    return !(r && t.state.status !== r || i && !i(t))
}

function yd(e, t) {
    return ((t == null ? void 0 : t.queryKeyHashFn) || So)(e)
}

function So(e) {
    return JSON.stringify(e, (t, n) => Ku(n) ? Object.keys(n).sort().reduce((r, i) => (r[i] = n[i], r), {}) : n)
}

function Po(e, t) {
    return e === t ? !0 : typeof e != typeof t ? !1 : e && t && typeof e == "object" && typeof t == "object" ? !Object.keys(t).some(n => !Po(e[n], t[n])) : !1
}

function lv(e, t) {
    if (e === t) return e;
    const n = zh(e) && zh(t);
    if (n || Ku(e) && Ku(t)) {
        const r = n ? e : Object.keys(e),
            i = r.length,
            o = n ? t : Object.keys(t),
            s = o.length,
            a = n ? [] : {};
        let l = 0;
        for (let u = 0; u < s; u++) {
            const c = n ? u : o[u];
            (!n && r.includes(c) || n) && e[c] === void 0 && t[c] === void 0 ? (a[c] = void 0, l++) : (a[c] = lv(e[c], t[c]), a[c] === e[c] && e[c] !== void 0 && l++)
        }
        return i === s && l === i ? e : a
    }
    return t
}

function zh(e) {
    return Array.isArray(e) && e.length === Object.keys(e).length
}

function Ku(e) {
    if (!Bh(e)) return !1;
    const t = e.constructor;
    if (t === void 0) return !0;
    const n = t.prototype;
    return !(!Bh(n) || !n.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(e) !== Object.prototype)
}

function Bh(e) {
    return Object.prototype.toString.call(e) === "[object Object]"
}

function PP(e) {
    return new Promise(t => {
        setTimeout(t, e)
    })
}

function CP(e, t, n) {
    return typeof n.structuralSharing == "function" ? n.structuralSharing(e, t) : n.structuralSharing !== !1 ? lv(e, t) : t
}

function TP(e, t, n = 0) {
    const r = [...e, t];
    return n && r.length > n ? r.slice(1) : r
}

function EP(e, t, n = 0) {
    const r = [t, ...e];
    return n && r.length > n ? r.slice(0, -1) : r
}
var vd = Symbol();

function uv(e, t) {
    return !e.queryFn && (t != null && t.initialPromise) ? () => t.initialPromise : !e.queryFn || e.queryFn === vd ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)) : e.queryFn
}
var tr, vn, Kr, bm, kP = (bm = class extends Va {
        constructor() {
            super();
            Y(this, tr);
            Y(this, vn);
            Y(this, Kr);
            B(this, Kr, t => {
                if (!Fa && window.addEventListener) {
                    const n = () => t();
                    return window.addEventListener("visibilitychange", n, !1), () => {
                        window.removeEventListener("visibilitychange", n)
                    }
                }
            })
        }
        onSubscribe() {
            R(this, vn) || this.setEventListener(R(this, Kr))
        }
        onUnsubscribe() {
            var t;
            this.hasListeners() || ((t = R(this, vn)) == null || t.call(this), B(this, vn, void 0))
        }
        setEventListener(t) {
            var n;
            B(this, Kr, t), (n = R(this, vn)) == null || n.call(this), B(this, vn, t(r => {
                typeof r == "boolean" ? this.setFocused(r) : this.onFocus()
            }))
        }
        setFocused(t) {
            R(this, tr) !== t && (B(this, tr, t), this.onFocus())
        }
        onFocus() {
            const t = this.isFocused();
            this.listeners.forEach(n => {
                n(t)
            })
        }
        isFocused() {
            var t;
            return typeof R(this, tr) == "boolean" ? R(this, tr) : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !== "hidden"
        }
    }, tr = new WeakMap, vn = new WeakMap, Kr = new WeakMap, bm),
    cv = new kP,
    Gr, wn, Qr, Mm, AP = (Mm = class extends Va {
        constructor() {
            super();
            Y(this, Gr, !0);
            Y(this, wn);
            Y(this, Qr);
            B(this, Qr, t => {
                if (!Fa && window.addEventListener) {
                    const n = () => t(!0),
                        r = () => t(!1);
                    return window.addEventListener("online", n, !1), window.addEventListener("offline", r, !1), () => {
                        window.removeEventListener("online", n), window.removeEventListener("offline", r)
                    }
                }
            })
        }
        onSubscribe() {
            R(this, wn) || this.setEventListener(R(this, Qr))
        }
        onUnsubscribe() {
            var t;
            this.hasListeners() || ((t = R(this, wn)) == null || t.call(this), B(this, wn, void 0))
        }
        setEventListener(t) {
            var n;
            B(this, Qr, t), (n = R(this, wn)) == null || n.call(this), B(this, wn, t(this.setOnline.bind(this)))
        }
        setOnline(t) {
            R(this, Gr) !== t && (B(this, Gr, t), this.listeners.forEach(r => {
                r(t)
            }))
        }
        isOnline() {
            return R(this, Gr)
        }
    }, Gr = new WeakMap, wn = new WeakMap, Qr = new WeakMap, Mm),
    ia = new AP;

function RP() {
    let e, t;
    const n = new Promise((i, o) => {
        e = i, t = o
    });
    n.status = "pending", n.catch(() => {});

    function r(i) {
        Object.assign(n, i), delete n.resolve, delete n.reject
    }
    return n.resolve = i => {
        r({
            status: "fulfilled",
            value: i
        }), e(i)
    }, n.reject = i => {
        r({
            status: "rejected",
            reason: i
        }), t(i)
    }, n
}

function bP(e) {
    return Math.min(1e3 * 2 ** e, 3e4)
}

function dv(e) {
    return (e ? ? "online") === "online" ? ia.isOnline() : !0
}
var fv = class extends Error {
    constructor(e) {
        super("CancelledError"), this.revert = e == null ? void 0 : e.revert, this.silent = e == null ? void 0 : e.silent
    }
};

function Dl(e) {
    return e instanceof fv
}

function hv(e) {
    let t = !1,
        n = 0,
        r = !1,
        i;
    const o = RP(),
        s = y => {
            var x;
            r || (f(new fv(y)), (x = e.abort) == null || x.call(e))
        },
        a = () => {
            t = !0
        },
        l = () => {
            t = !1
        },
        u = () => cv.isFocused() && (e.networkMode === "always" || ia.isOnline()) && e.canRun(),
        c = () => dv(e.networkMode) && e.canRun(),
        d = y => {
            var x;
            r || (r = !0, (x = e.onSuccess) == null || x.call(e, y), i == null || i(), o.resolve(y))
        },
        f = y => {
            var x;
            r || (r = !0, (x = e.onError) == null || x.call(e, y), i == null || i(), o.reject(y))
        },
        m = () => new Promise(y => {
            var x;
            i = p => {
                (r || u()) && y(p)
            }, (x = e.onPause) == null || x.call(e)
        }).then(() => {
            var y;
            i = void 0, r || (y = e.onContinue) == null || y.call(e)
        }),
        v = () => {
            if (r) return;
            let y;
            const x = n === 0 ? e.initialPromise : void 0;
            try {
                y = x ? ? e.fn()
            } catch (p) {
                y = Promise.reject(p)
            }
            Promise.resolve(y).then(d).catch(p => {
                var T;
                if (r) return;
                const h = e.retry ? ? (Fa ? 0 : 3),
                    g = e.retryDelay ? ? bP,
                    S = typeof g == "function" ? g(n, p) : g,
                    P = h === !0 || typeof h == "number" && n < h || typeof h == "function" && h(n, p);
                if (t || !P) {
                    f(p);
                    return
                }
                n++, (T = e.onFail) == null || T.call(e, n, p), PP(S).then(() => u() ? void 0 : m()).then(() => {
                    t ? f(p) : v()
                })
            })
        };
    return {
        promise: o,
        cancel: s,
        continue: () => (i == null || i(), o),
        cancelRetry: a,
        continueRetry: l,
        canStart: c,
        start: () => (c() ? v() : m().then(v), o)
    }
}

function MP() {
    let e = [],
        t = 0,
        n = a => {
            a()
        },
        r = a => {
            a()
        },
        i = a => setTimeout(a, 0);
    const o = a => {
            t ? e.push(a) : i(() => {
                n(a)
            })
        },
        s = () => {
            const a = e;
            e = [], a.length && i(() => {
                r(() => {
                    a.forEach(l => {
                        n(l)
                    })
                })
            })
        };
    return {
        batch: a => {
            let l;
            t++;
            try {
                l = a()
            } finally {
                t--, t || s()
            }
            return l
        },
        batchCalls: a => (...l) => {
            o(() => {
                a(...l)
            })
        },
        schedule: o,
        setNotifyFunction: a => {
            n = a
        },
        setBatchNotifyFunction: a => {
            r = a
        },
        setScheduler: a => {
            i = a
        }
    }
}
var _e = MP(),
    nr, Dm, pv = (Dm = class {
        constructor() {
            Y(this, nr)
        }
        destroy() {
            this.clearGcTimeout()
        }
        scheduleGc() {
            this.clearGcTimeout(), wP(this.gcTime) && B(this, nr, setTimeout(() => {
                this.optionalRemove()
            }, this.gcTime))
        }
        updateGcTime(e) {
            this.gcTime = Math.max(this.gcTime || 0, e ? ? (Fa ? 1 / 0 : 5 * 60 * 1e3))
        }
        clearGcTimeout() {
            R(this, nr) && (clearTimeout(R(this, nr)), B(this, nr, void 0))
        }
    }, nr = new WeakMap, Dm),
    Yr, Xr, ot, Ae, Ro, rr, yt, Wt, Om, DP = (Om = class extends pv {
        constructor(t) {
            super();
            Y(this, yt);
            Y(this, Yr);
            Y(this, Xr);
            Y(this, ot);
            Y(this, Ae);
            Y(this, Ro);
            Y(this, rr);
            B(this, rr, !1), B(this, Ro, t.defaultOptions), this.setOptions(t.options), this.observers = [], B(this, ot, t.cache), this.queryKey = t.queryKey, this.queryHash = t.queryHash, B(this, Yr, LP(this.options)), this.state = t.state ? ? R(this, Yr), this.scheduleGc()
        }
        get meta() {
            return this.options.meta
        }
        get promise() {
            var t;
            return (t = R(this, Ae)) == null ? void 0 : t.promise
        }
        setOptions(t) {
            this.options = { ...R(this, Ro),
                ...t
            }, this.updateGcTime(this.options.gcTime)
        }
        optionalRemove() {
            !this.observers.length && this.state.fetchStatus === "idle" && R(this, ot).remove(this)
        }
        setData(t, n) {
            const r = CP(this.state.data, t, this.options);
            return Te(this, yt, Wt).call(this, {
                data: r,
                type: "success",
                dataUpdatedAt: n == null ? void 0 : n.updatedAt,
                manual: n == null ? void 0 : n.manual
            }), r
        }
        setState(t, n) {
            Te(this, yt, Wt).call(this, {
                type: "setState",
                state: t,
                setStateOptions: n
            })
        }
        cancel(t) {
            var r, i;
            const n = (r = R(this, Ae)) == null ? void 0 : r.promise;
            return (i = R(this, Ae)) == null || i.cancel(t), n ? n.then(gt).catch(gt) : Promise.resolve()
        }
        destroy() {
            super.destroy(), this.cancel({
                silent: !0
            })
        }
        reset() {
            this.destroy(), this.setState(R(this, Yr))
        }
        isActive() {
            return this.observers.some(t => SP(t.options.enabled, this) !== !1)
        }
        isDisabled() {
            return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === vd || this.state.dataUpdateCount + this.state.errorUpdateCount === 0
        }
        isStale() {
            return this.state.isInvalidated ? !0 : this.getObserversCount() > 0 ? this.observers.some(t => t.getCurrentResult().isStale) : this.state.data === void 0
        }
        isStaleByTime(t = 0) {
            return this.state.isInvalidated || this.state.data === void 0 || !xP(this.state.dataUpdatedAt, t)
        }
        onFocus() {
            var n;
            const t = this.observers.find(r => r.shouldFetchOnWindowFocus());
            t == null || t.refetch({
                cancelRefetch: !1
            }), (n = R(this, Ae)) == null || n.continue()
        }
        onOnline() {
            var n;
            const t = this.observers.find(r => r.shouldFetchOnReconnect());
            t == null || t.refetch({
                cancelRefetch: !1
            }), (n = R(this, Ae)) == null || n.continue()
        }
        addObserver(t) {
            this.observers.includes(t) || (this.observers.push(t), this.clearGcTimeout(), R(this, ot).notify({
                type: "observerAdded",
                query: this,
                observer: t
            }))
        }
        removeObserver(t) {
            this.observers.includes(t) && (this.observers = this.observers.filter(n => n !== t), this.observers.length || (R(this, Ae) && (R(this, rr) ? R(this, Ae).cancel({
                revert: !0
            }) : R(this, Ae).cancelRetry()), this.scheduleGc()), R(this, ot).notify({
                type: "observerRemoved",
                query: this,
                observer: t
            }))
        }
        getObserversCount() {
            return this.observers.length
        }
        invalidate() {
            this.state.isInvalidated || Te(this, yt, Wt).call(this, {
                type: "invalidate"
            })
        }
        fetch(t, n) {
            var l, u, c;
            if (this.state.fetchStatus !== "idle") {
                if (this.state.data !== void 0 && (n != null && n.cancelRefetch)) this.cancel({
                    silent: !0
                });
                else if (R(this, Ae)) return R(this, Ae).continueRetry(), R(this, Ae).promise
            }
            if (t && this.setOptions(t), !this.options.queryFn) {
                const d = this.observers.find(f => f.options.queryFn);
                d && this.setOptions(d.options)
            }
            const r = new AbortController,
                i = d => {
                    Object.defineProperty(d, "signal", {
                        enumerable: !0,
                        get: () => (B(this, rr, !0), r.signal)
                    })
                },
                o = () => {
                    const d = uv(this.options, n),
                        f = {
                            queryKey: this.queryKey,
                            meta: this.meta
                        };
                    return i(f), B(this, rr, !1), this.options.persister ? this.options.persister(d, f, this) : d(f)
                },
                s = {
                    fetchOptions: n,
                    options: this.options,
                    queryKey: this.queryKey,
                    state: this.state,
                    fetchFn: o
                };
            i(s), (l = this.options.behavior) == null || l.onFetch(s, this), B(this, Xr, this.state), (this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((u = s.fetchOptions) == null ? void 0 : u.meta)) && Te(this, yt, Wt).call(this, {
                type: "fetch",
                meta: (c = s.fetchOptions) == null ? void 0 : c.meta
            });
            const a = d => {
                var f, m, v, y;
                Dl(d) && d.silent || Te(this, yt, Wt).call(this, {
                    type: "error",
                    error: d
                }), Dl(d) || ((m = (f = R(this, ot).config).onError) == null || m.call(f, d, this), (y = (v = R(this, ot).config).onSettled) == null || y.call(v, this.state.data, d, this)), this.scheduleGc()
            };
            return B(this, Ae, hv({
                initialPromise: n == null ? void 0 : n.initialPromise,
                fn: s.fetchFn,
                abort: r.abort.bind(r),
                onSuccess: d => {
                    var f, m, v, y;
                    if (d === void 0) {
                        a(new Error(`${this.queryHash} data is undefined`));
                        return
                    }
                    try {
                        this.setData(d)
                    } catch (x) {
                        a(x);
                        return
                    }(m = (f = R(this, ot).config).onSuccess) == null || m.call(f, d, this), (y = (v = R(this, ot).config).onSettled) == null || y.call(v, d, this.state.error, this), this.scheduleGc()
                },
                onError: a,
                onFail: (d, f) => {
                    Te(this, yt, Wt).call(this, {
                        type: "failed",
                        failureCount: d,
                        error: f
                    })
                },
                onPause: () => {
                    Te(this, yt, Wt).call(this, {
                        type: "pause"
                    })
                },
                onContinue: () => {
                    Te(this, yt, Wt).call(this, {
                        type: "continue"
                    })
                },
                retry: s.options.retry,
                retryDelay: s.options.retryDelay,
                networkMode: s.options.networkMode,
                canRun: () => !0
            })), R(this, Ae).start()
        }
    }, Yr = new WeakMap, Xr = new WeakMap, ot = new WeakMap, Ae = new WeakMap, Ro = new WeakMap, rr = new WeakMap, yt = new WeakSet, Wt = function(t) {
        const n = r => {
            switch (t.type) {
                case "failed":
                    return { ...r,
                        fetchFailureCount: t.failureCount,
                        fetchFailureReason: t.error
                    };
                case "pause":
                    return { ...r,
                        fetchStatus: "paused"
                    };
                case "continue":
                    return { ...r,
                        fetchStatus: "fetching"
                    };
                case "fetch":
                    return { ...r,
                        ...OP(r.data, this.options),
                        fetchMeta: t.meta ? ? null
                    };
                case "success":
                    return { ...r,
                        data: t.data,
                        dataUpdateCount: r.dataUpdateCount + 1,
                        dataUpdatedAt: t.dataUpdatedAt ? ? Date.now(),
                        error: null,
                        isInvalidated: !1,
                        status: "success",
                        ...!t.manual && {
                            fetchStatus: "idle",
                            fetchFailureCount: 0,
                            fetchFailureReason: null
                        }
                    };
                case "error":
                    const i = t.error;
                    return Dl(i) && i.revert && R(this, Xr) ? { ...R(this, Xr),
                        fetchStatus: "idle"
                    } : { ...r,
                        error: i,
                        errorUpdateCount: r.errorUpdateCount + 1,
                        errorUpdatedAt: Date.now(),
                        fetchFailureCount: r.fetchFailureCount + 1,
                        fetchFailureReason: i,
                        fetchStatus: "idle",
                        status: "error"
                    };
                case "invalidate":
                    return { ...r,
                        isInvalidated: !0
                    };
                case "setState":
                    return { ...r,
                        ...t.state
                    }
            }
        };
        this.state = n(this.state), _e.batch(() => {
            this.observers.forEach(r => {
                r.onQueryUpdate()
            }), R(this, ot).notify({
                query: this,
                type: "updated",
                action: t
            })
        })
    }, Om);

function OP(e, t) {
    return {
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchStatus: dv(t.networkMode) ? "fetching" : "paused",
        ...e === void 0 && {
            error: null,
            status: "pending"
        }
    }
}

function LP(e) {
    const t = typeof e.initialData == "function" ? e.initialData() : e.initialData,
        n = t !== void 0,
        r = n ? typeof e.initialDataUpdatedAt == "function" ? e.initialDataUpdatedAt() : e.initialDataUpdatedAt : 0;
    return {
        data: t,
        dataUpdateCount: 0,
        dataUpdatedAt: n ? r ? ? Date.now() : 0,
        error: null,
        errorUpdateCount: 0,
        errorUpdatedAt: 0,
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchMeta: null,
        isInvalidated: !1,
        status: n ? "success" : "pending",
        fetchStatus: "idle"
    }
}
var bt, Lm, NP = (Lm = class extends Va {
        constructor(t = {}) {
            super();
            Y(this, bt);
            this.config = t, B(this, bt, new Map)
        }
        build(t, n, r) {
            const i = n.queryKey,
                o = n.queryHash ? ? yd(i, n);
            let s = this.get(o);
            return s || (s = new DP({
                cache: this,
                queryKey: i,
                queryHash: o,
                options: t.defaultQueryOptions(n),
                state: r,
                defaultOptions: t.getQueryDefaults(i)
            }), this.add(s)), s
        }
        add(t) {
            R(this, bt).has(t.queryHash) || (R(this, bt).set(t.queryHash, t), this.notify({
                type: "added",
                query: t
            }))
        }
        remove(t) {
            const n = R(this, bt).get(t.queryHash);
            n && (t.destroy(), n === t && R(this, bt).delete(t.queryHash), this.notify({
                type: "removed",
                query: t
            }))
        }
        clear() {
            _e.batch(() => {
                this.getAll().forEach(t => {
                    this.remove(t)
                })
            })
        }
        get(t) {
            return R(this, bt).get(t)
        }
        getAll() {
            return [...R(this, bt).values()]
        }
        find(t) {
            const n = {
                exact: !0,
                ...t
            };
            return this.getAll().find(r => Fh(n, r))
        }
        findAll(t = {}) {
            const n = this.getAll();
            return Object.keys(t).length > 0 ? n.filter(r => Fh(t, r)) : n
        }
        notify(t) {
            _e.batch(() => {
                this.listeners.forEach(n => {
                    n(t)
                })
            })
        }
        onFocus() {
            _e.batch(() => {
                this.getAll().forEach(t => {
                    t.onFocus()
                })
            })
        }
        onOnline() {
            _e.batch(() => {
                this.getAll().forEach(t => {
                    t.onOnline()
                })
            })
        }
    }, bt = new WeakMap, Lm),
    Mt, Oe, ir, Dt, dn, Nm, _P = (Nm = class extends pv {
        constructor(t) {
            super();
            Y(this, Dt);
            Y(this, Mt);
            Y(this, Oe);
            Y(this, ir);
            this.mutationId = t.mutationId, B(this, Oe, t.mutationCache), B(this, Mt, []), this.state = t.state || jP(), this.setOptions(t.options), this.scheduleGc()
        }
        setOptions(t) {
            this.options = t, this.updateGcTime(this.options.gcTime)
        }
        get meta() {
            return this.options.meta
        }
        addObserver(t) {
            R(this, Mt).includes(t) || (R(this, Mt).push(t), this.clearGcTimeout(), R(this, Oe).notify({
                type: "observerAdded",
                mutation: this,
                observer: t
            }))
        }
        removeObserver(t) {
            B(this, Mt, R(this, Mt).filter(n => n !== t)), this.scheduleGc(), R(this, Oe).notify({
                type: "observerRemoved",
                mutation: this,
                observer: t
            })
        }
        optionalRemove() {
            R(this, Mt).length || (this.state.status === "pending" ? this.scheduleGc() : R(this, Oe).remove(this))
        }
        continue () {
            var t;
            return ((t = R(this, ir)) == null ? void 0 : t.continue()) ? ? this.execute(this.state.variables)
        }
        async execute(t) {
            var i, o, s, a, l, u, c, d, f, m, v, y, x, p, h, g, S, P, T, k;
            B(this, ir, hv({
                fn: () => this.options.mutationFn ? this.options.mutationFn(t) : Promise.reject(new Error("No mutationFn found")),
                onFail: (E, D) => {
                    Te(this, Dt, dn).call(this, {
                        type: "failed",
                        failureCount: E,
                        error: D
                    })
                },
                onPause: () => {
                    Te(this, Dt, dn).call(this, {
                        type: "pause"
                    })
                },
                onContinue: () => {
                    Te(this, Dt, dn).call(this, {
                        type: "continue"
                    })
                },
                retry: this.options.retry ? ? 0,
                retryDelay: this.options.retryDelay,
                networkMode: this.options.networkMode,
                canRun: () => R(this, Oe).canRun(this)
            }));
            const n = this.state.status === "pending",
                r = !R(this, ir).canStart();
            try {
                if (!n) {
                    Te(this, Dt, dn).call(this, {
                        type: "pending",
                        variables: t,
                        isPaused: r
                    }), await ((o = (i = R(this, Oe).config).onMutate) == null ? void 0 : o.call(i, t, this));
                    const D = await ((a = (s = this.options).onMutate) == null ? void 0 : a.call(s, t));
                    D !== this.state.context && Te(this, Dt, dn).call(this, {
                        type: "pending",
                        context: D,
                        variables: t,
                        isPaused: r
                    })
                }
                const E = await R(this, ir).start();
                return await ((u = (l = R(this, Oe).config).onSuccess) == null ? void 0 : u.call(l, E, t, this.state.context, this)), await ((d = (c = this.options).onSuccess) == null ? void 0 : d.call(c, E, t, this.state.context)), await ((m = (f = R(this, Oe).config).onSettled) == null ? void 0 : m.call(f, E, null, this.state.variables, this.state.context, this)), await ((y = (v = this.options).onSettled) == null ? void 0 : y.call(v, E, null, t, this.state.context)), Te(this, Dt, dn).call(this, {
                    type: "success",
                    data: E
                }), E
            } catch (E) {
                try {
                    throw await ((p = (x = R(this, Oe).config).onError) == null ? void 0 : p.call(x, E, t, this.state.context, this)), await ((g = (h = this.options).onError) == null ? void 0 : g.call(h, E, t, this.state.context)), await ((P = (S = R(this, Oe).config).onSettled) == null ? void 0 : P.call(S, void 0, E, this.state.variables, this.state.context, this)), await ((k = (T = this.options).onSettled) == null ? void 0 : k.call(T, void 0, E, t, this.state.context)), E
                } finally {
                    Te(this, Dt, dn).call(this, {
                        type: "error",
                        error: E
                    })
                }
            } finally {
                R(this, Oe).runNext(this)
            }
        }
    }, Mt = new WeakMap, Oe = new WeakMap, ir = new WeakMap, Dt = new WeakSet, dn = function(t) {
        const n = r => {
            switch (t.type) {
                case "failed":
                    return { ...r,
                        failureCount: t.failureCount,
                        failureReason: t.error
                    };
                case "pause":
                    return { ...r,
                        isPaused: !0
                    };
                case "continue":
                    return { ...r,
                        isPaused: !1
                    };
                case "pending":
                    return { ...r,
                        context: t.context,
                        data: void 0,
                        failureCount: 0,
                        failureReason: null,
                        error: null,
                        isPaused: t.isPaused,
                        status: "pending",
                        variables: t.variables,
                        submittedAt: Date.now()
                    };
                case "success":
                    return { ...r,
                        data: t.data,
                        failureCount: 0,
                        failureReason: null,
                        error: null,
                        status: "success",
                        isPaused: !1
                    };
                case "error":
                    return { ...r,
                        data: void 0,
                        error: t.error,
                        failureCount: r.failureCount + 1,
                        failureReason: t.error,
                        isPaused: !1,
                        status: "error"
                    }
            }
        };
        this.state = n(this.state), _e.batch(() => {
            R(this, Mt).forEach(r => {
                r.onMutationUpdate(t)
            }), R(this, Oe).notify({
                mutation: this,
                type: "updated",
                action: t
            })
        })
    }, Nm);

function jP() {
    return {
        context: void 0,
        data: void 0,
        error: null,
        failureCount: 0,
        failureReason: null,
        isPaused: !1,
        status: "idle",
        variables: void 0,
        submittedAt: 0
    }
}
var Ke, bo, _m, VP = (_m = class extends Va {
    constructor(t = {}) {
        super();
        Y(this, Ke);
        Y(this, bo);
        this.config = t, B(this, Ke, new Map), B(this, bo, Date.now())
    }
    build(t, n, r) {
        const i = new _P({
            mutationCache: this,
            mutationId: ++$o(this, bo)._,
            options: t.defaultMutationOptions(n),
            state: r
        });
        return this.add(i), i
    }
    add(t) {
        const n = ss(t),
            r = R(this, Ke).get(n) ? ? [];
        r.push(t), R(this, Ke).set(n, r), this.notify({
            type: "added",
            mutation: t
        })
    }
    remove(t) {
        var r;
        const n = ss(t);
        if (R(this, Ke).has(n)) {
            const i = (r = R(this, Ke).get(n)) == null ? void 0 : r.filter(o => o !== t);
            i && (i.length === 0 ? R(this, Ke).delete(n) : R(this, Ke).set(n, i))
        }
        this.notify({
            type: "removed",
            mutation: t
        })
    }
    canRun(t) {
        var r;
        const n = (r = R(this, Ke).get(ss(t))) == null ? void 0 : r.find(i => i.state.status === "pending");
        return !n || n === t
    }
    runNext(t) {
        var r;
        const n = (r = R(this, Ke).get(ss(t))) == null ? void 0 : r.find(i => i !== t && i.state.isPaused);
        return (n == null ? void 0 : n.continue()) ? ? Promise.resolve()
    }
    clear() {
        _e.batch(() => {
            this.getAll().forEach(t => {
                this.remove(t)
            })
        })
    }
    getAll() {
        return [...R(this, Ke).values()].flat()
    }
    find(t) {
        const n = {
            exact: !0,
            ...t
        };
        return this.getAll().find(r => Ih(n, r))
    }
    findAll(t = {}) {
        return this.getAll().filter(n => Ih(t, n))
    }
    notify(t) {
        _e.batch(() => {
            this.listeners.forEach(n => {
                n(t)
            })
        })
    }
    resumePausedMutations() {
        const t = this.getAll().filter(n => n.state.isPaused);
        return _e.batch(() => Promise.all(t.map(n => n.continue().catch(gt))))
    }
}, Ke = new WeakMap, bo = new WeakMap, _m);

function ss(e) {
    var t;
    return ((t = e.options.scope) == null ? void 0 : t.id) ? ? String(e.mutationId)
}

function $h(e) {
    return {
        onFetch: (t, n) => {
            var c, d, f, m, v;
            const r = t.options,
                i = (f = (d = (c = t.fetchOptions) == null ? void 0 : c.meta) == null ? void 0 : d.fetchMore) == null ? void 0 : f.direction,
                o = ((m = t.state.data) == null ? void 0 : m.pages) || [],
                s = ((v = t.state.data) == null ? void 0 : v.pageParams) || [];
            let a = {
                    pages: [],
                    pageParams: []
                },
                l = 0;
            const u = async () => {
                let y = !1;
                const x = g => {
                        Object.defineProperty(g, "signal", {
                            enumerable: !0,
                            get: () => (t.signal.aborted ? y = !0 : t.signal.addEventListener("abort", () => {
                                y = !0
                            }), t.signal)
                        })
                    },
                    p = uv(t.options, t.fetchOptions),
                    h = async (g, S, P) => {
                        if (y) return Promise.reject();
                        if (S == null && g.pages.length) return Promise.resolve(g);
                        const T = {
                            queryKey: t.queryKey,
                            pageParam: S,
                            direction: P ? "backward" : "forward",
                            meta: t.options.meta
                        };
                        x(T);
                        const k = await p(T),
                            {
                                maxPages: E
                            } = t.options,
                            D = P ? EP : TP;
                        return {
                            pages: D(g.pages, k, E),
                            pageParams: D(g.pageParams, S, E)
                        }
                    };
                if (i && o.length) {
                    const g = i === "backward",
                        S = g ? FP : Uh,
                        P = {
                            pages: o,
                            pageParams: s
                        },
                        T = S(r, P);
                    a = await h(P, T, g)
                } else {
                    const g = e ? ? o.length;
                    do {
                        const S = l === 0 ? s[0] ? ? r.initialPageParam : Uh(r, a);
                        if (l > 0 && S == null) break;
                        a = await h(a, S), l++
                    } while (l < g)
                }
                return a
            };
            t.options.persister ? t.fetchFn = () => {
                var y, x;
                return (x = (y = t.options).persister) == null ? void 0 : x.call(y, u, {
                    queryKey: t.queryKey,
                    meta: t.options.meta,
                    signal: t.signal
                }, n)
            } : t.fetchFn = u
        }
    }
}

function Uh(e, {
    pages: t,
    pageParams: n
}) {
    const r = t.length - 1;
    return t.length > 0 ? e.getNextPageParam(t[r], t, n[r], n) : void 0
}

function FP(e, {
    pages: t,
    pageParams: n
}) {
    var r;
    return t.length > 0 ? (r = e.getPreviousPageParam) == null ? void 0 : r.call(e, t[0], t, n[0], n) : void 0
}
var ae, xn, Sn, qr, Zr, Pn, Jr, ei, jm, IP = (jm = class {
        constructor(e = {}) {
            Y(this, ae);
            Y(this, xn);
            Y(this, Sn);
            Y(this, qr);
            Y(this, Zr);
            Y(this, Pn);
            Y(this, Jr);
            Y(this, ei);
            B(this, ae, e.queryCache || new NP), B(this, xn, e.mutationCache || new VP), B(this, Sn, e.defaultOptions || {}), B(this, qr, new Map), B(this, Zr, new Map), B(this, Pn, 0)
        }
        mount() {
            $o(this, Pn)._++, R(this, Pn) === 1 && (B(this, Jr, cv.subscribe(async e => {
                e && (await this.resumePausedMutations(), R(this, ae).onFocus())
            })), B(this, ei, ia.subscribe(async e => {
                e && (await this.resumePausedMutations(), R(this, ae).onOnline())
            })))
        }
        unmount() {
            var e, t;
            $o(this, Pn)._--, R(this, Pn) === 0 && ((e = R(this, Jr)) == null || e.call(this), B(this, Jr, void 0), (t = R(this, ei)) == null || t.call(this), B(this, ei, void 0))
        }
        isFetching(e) {
            return R(this, ae).findAll({ ...e,
                fetchStatus: "fetching"
            }).length
        }
        isMutating(e) {
            return R(this, xn).findAll({ ...e,
                status: "pending"
            }).length
        }
        getQueryData(e) {
            var n;
            const t = this.defaultQueryOptions({
                queryKey: e
            });
            return (n = R(this, ae).get(t.queryHash)) == null ? void 0 : n.state.data
        }
        ensureQueryData(e) {
            const t = this.getQueryData(e.queryKey);
            if (t === void 0) return this.fetchQuery(e); {
                const n = this.defaultQueryOptions(e),
                    r = R(this, ae).build(this, n);
                return e.revalidateIfStale && r.isStaleByTime(Vh(n.staleTime, r)) && this.prefetchQuery(n), Promise.resolve(t)
            }
        }
        getQueriesData(e) {
            return R(this, ae).findAll(e).map(({
                queryKey: t,
                state: n
            }) => {
                const r = n.data;
                return [t, r]
            })
        }
        setQueryData(e, t, n) {
            const r = this.defaultQueryOptions({
                    queryKey: e
                }),
                i = R(this, ae).get(r.queryHash),
                o = i == null ? void 0 : i.state.data,
                s = vP(t, o);
            if (s !== void 0) return R(this, ae).build(this, r).setData(s, { ...n,
                manual: !0
            })
        }
        setQueriesData(e, t, n) {
            return _e.batch(() => R(this, ae).findAll(e).map(({
                queryKey: r
            }) => [r, this.setQueryData(r, t, n)]))
        }
        getQueryState(e) {
            var n;
            const t = this.defaultQueryOptions({
                queryKey: e
            });
            return (n = R(this, ae).get(t.queryHash)) == null ? void 0 : n.state
        }
        removeQueries(e) {
            const t = R(this, ae);
            _e.batch(() => {
                t.findAll(e).forEach(n => {
                    t.remove(n)
                })
            })
        }
        resetQueries(e, t) {
            const n = R(this, ae),
                r = {
                    type: "active",
                    ...e
                };
            return _e.batch(() => (n.findAll(e).forEach(i => {
                i.reset()
            }), this.refetchQueries(r, t)))
        }
        cancelQueries(e = {}, t = {}) {
            const n = {
                    revert: !0,
                    ...t
                },
                r = _e.batch(() => R(this, ae).findAll(e).map(i => i.cancel(n)));
            return Promise.all(r).then(gt).catch(gt)
        }
        invalidateQueries(e = {}, t = {}) {
            return _e.batch(() => {
                if (R(this, ae).findAll(e).forEach(r => {
                        r.invalidate()
                    }), e.refetchType === "none") return Promise.resolve();
                const n = { ...e,
                    type: e.refetchType ? ? e.type ? ? "active"
                };
                return this.refetchQueries(n, t)
            })
        }
        refetchQueries(e = {}, t) {
            const n = { ...t,
                    cancelRefetch: (t == null ? void 0 : t.cancelRefetch) ? ? !0
                },
                r = _e.batch(() => R(this, ae).findAll(e).filter(i => !i.isDisabled()).map(i => {
                    let o = i.fetch(void 0, n);
                    return n.throwOnError || (o = o.catch(gt)), i.state.fetchStatus === "paused" ? Promise.resolve() : o
                }));
            return Promise.all(r).then(gt)
        }
        fetchQuery(e) {
            const t = this.defaultQueryOptions(e);
            t.retry === void 0 && (t.retry = !1);
            const n = R(this, ae).build(this, t);
            return n.isStaleByTime(Vh(t.staleTime, n)) ? n.fetch(t) : Promise.resolve(n.state.data)
        }
        prefetchQuery(e) {
            return this.fetchQuery(e).then(gt).catch(gt)
        }
        fetchInfiniteQuery(e) {
            return e.behavior = $h(e.pages), this.fetchQuery(e)
        }
        prefetchInfiniteQuery(e) {
            return this.fetchInfiniteQuery(e).then(gt).catch(gt)
        }
        ensureInfiniteQueryData(e) {
            return e.behavior = $h(e.pages), this.ensureQueryData(e)
        }
        resumePausedMutations() {
            return ia.isOnline() ? R(this, xn).resumePausedMutations() : Promise.resolve()
        }
        getQueryCache() {
            return R(this, ae)
        }
        getMutationCache() {
            return R(this, xn)
        }
        getDefaultOptions() {
            return R(this, Sn)
        }
        setDefaultOptions(e) {
            B(this, Sn, e)
        }
        setQueryDefaults(e, t) {
            R(this, qr).set(So(e), {
                queryKey: e,
                defaultOptions: t
            })
        }
        getQueryDefaults(e) {
            const t = [...R(this, qr).values()];
            let n = {};
            return t.forEach(r => {
                Po(e, r.queryKey) && (n = { ...n,
                    ...r.defaultOptions
                })
            }), n
        }
        setMutationDefaults(e, t) {
            R(this, Zr).set(So(e), {
                mutationKey: e,
                defaultOptions: t
            })
        }
        getMutationDefaults(e) {
            const t = [...R(this, Zr).values()];
            let n = {};
            return t.forEach(r => {
                Po(e, r.mutationKey) && (n = { ...n,
                    ...r.defaultOptions
                })
            }), n
        }
        defaultQueryOptions(e) {
            if (e._defaulted) return e;
            const t = { ...R(this, Sn).queries,
                ...this.getQueryDefaults(e.queryKey),
                ...e,
                _defaulted: !0
            };
            return t.queryHash || (t.queryHash = yd(t.queryKey, t)), t.refetchOnReconnect === void 0 && (t.refetchOnReconnect = t.networkMode !== "always"), t.throwOnError === void 0 && (t.throwOnError = !!t.suspense), !t.networkMode && t.persister && (t.networkMode = "offlineFirst"), t.enabled !== !0 && t.queryFn === vd && (t.enabled = !1), t
        }
        defaultMutationOptions(e) {
            return e != null && e._defaulted ? e : { ...R(this, Sn).mutations,
                ...(e == null ? void 0 : e.mutationKey) && this.getMutationDefaults(e.mutationKey),
                ...e,
                _defaulted: !0
            }
        }
        clear() {
            R(this, ae).clear(), R(this, xn).clear()
        }
    }, ae = new WeakMap, xn = new WeakMap, Sn = new WeakMap, qr = new WeakMap, Zr = new WeakMap, Pn = new WeakMap, Jr = new WeakMap, ei = new WeakMap, jm),
    zP = w.createContext(void 0),
    BP = ({
        client: e,
        children: t
    }) => (w.useEffect(() => (e.mount(), () => {
        e.unmount()
    }), [e]), C.jsx(zP.Provider, {
        value: e,
        children: t
    }));
async function $P(e) {
    if (!e.ok) {
        const t = await e.text() || e.statusText;
        throw new Error(`${e.status}: ${t}`)
    }
}
const UP = ({
        on401: e
    }) => async ({
        queryKey: t
    }) => {
        const n = await fetch(t.join("/"), {
            credentials: "include"
        });
        return e === "returnNull" && n.status === 401 ? null : (await $P(n), await n.json())
    },
    WP = new IP({
        defaultOptions: {
            queries: {
                queryFn: UP({
                    on401: "throw"
                }),
                refetchInterval: !1,
                refetchOnWindowFocus: !1,
                staleTime: 1 / 0,
                retry: !1
            },
            mutations: {
                retry: !1
            }
        }
    }),
    HP = 1,
    KP = 1e6;
let Ol = 0;

function GP() {
    return Ol = (Ol + 1) % Number.MAX_SAFE_INTEGER, Ol.toString()
}
const Ll = new Map,
    Wh = e => {
        if (Ll.has(e)) return;
        const t = setTimeout(() => {
            Ll.delete(e), Xi({
                type: "REMOVE_TOAST",
                toastId: e
            })
        }, KP);
        Ll.set(e, t)
    },
    QP = (e, t) => {
        switch (t.type) {
            case "ADD_TOAST":
                return { ...e,
                    toasts: [t.toast, ...e.toasts].slice(0, HP)
                };
            case "UPDATE_TOAST":
                return { ...e,
                    toasts: e.toasts.map(n => n.id === t.toast.id ? { ...n,
                        ...t.toast
                    } : n)
                };
            case "DISMISS_TOAST":
                {
                    const {
                        toastId: n
                    } = t;
                    return n ? Wh(n) : e.toasts.forEach(r => {
                        Wh(r.id)
                    }),
                    { ...e,
                        toasts: e.toasts.map(r => r.id === n || n === void 0 ? { ...r,
                            open: !1
                        } : r)
                    }
                }
            case "REMOVE_TOAST":
                return t.toastId === void 0 ? { ...e,
                    toasts: []
                } : { ...e,
                    toasts: e.toasts.filter(n => n.id !== t.toastId)
                }
        }
    },
    ks = [];
let As = {
    toasts: []
};

function Xi(e) {
    As = QP(As, e), ks.forEach(t => {
        t(As)
    })
}

function YP({ ...e
}) {
    const t = GP(),
        n = i => Xi({
            type: "UPDATE_TOAST",
            toast: { ...i,
                id: t
            }
        }),
        r = () => Xi({
            type: "DISMISS_TOAST",
            toastId: t
        });
    return Xi({
        type: "ADD_TOAST",
        toast: { ...e,
            id: t,
            open: !0,
            onOpenChange: i => {
                i || r()
            }
        }
    }), {
        id: t,
        dismiss: r,
        update: n
    }
}

function XP() {
    const [e, t] = w.useState(As);
    return w.useEffect(() => (ks.push(t), () => {
        const n = ks.indexOf(t);
        n > -1 && ks.splice(n, 1)
    }), [e]), { ...e,
        toast: YP,
        dismiss: n => Xi({
            type: "DISMISS_TOAST",
            toastId: n
        })
    }
}

function pe(e, t, {
    checkForDefaultPrevented: n = !0
} = {}) {
    return function(i) {
        if (e == null || e(i), n === !1 || !i.defaultPrevented) return t == null ? void 0 : t(i)
    }
}

function Hh(e, t) {
    if (typeof e == "function") return e(t);
    e != null && (e.current = t)
}

function mv(...e) {
    return t => {
        let n = !1;
        const r = e.map(i => {
            const o = Hh(i, t);
            return !n && typeof o == "function" && (n = !0), o
        });
        if (n) return () => {
            for (let i = 0; i < r.length; i++) {
                const o = r[i];
                typeof o == "function" ? o() : Hh(e[i], null)
            }
        }
    }
}

function Ct(...e) {
    return w.useCallback(mv(...e), e)
}

function Ia(e, t = []) {
    let n = [];

    function r(o, s) {
        const a = w.createContext(s),
            l = n.length;
        n = [...n, s];
        const u = d => {
            var p;
            const {
                scope: f,
                children: m,
                ...v
            } = d, y = ((p = f == null ? void 0 : f[e]) == null ? void 0 : p[l]) || a, x = w.useMemo(() => v, Object.values(v));
            return C.jsx(y.Provider, {
                value: x,
                children: m
            })
        };
        u.displayName = o + "Provider";

        function c(d, f) {
            var y;
            const m = ((y = f == null ? void 0 : f[e]) == null ? void 0 : y[l]) || a,
                v = w.useContext(m);
            if (v) return v;
            if (s !== void 0) return s;
            throw new Error(`\`${d}\` must be used within \`${o}\``)
        }
        return [u, c]
    }
    const i = () => {
        const o = n.map(s => w.createContext(s));
        return function(a) {
            const l = (a == null ? void 0 : a[e]) || o;
            return w.useMemo(() => ({
                [`__scope${e}`]: { ...a,
                    [e]: l
                }
            }), [a, l])
        }
    };
    return i.scopeName = e, [r, qP(i, ...t)]
}

function qP(...e) {
    const t = e[0];
    if (e.length === 1) return t;
    const n = () => {
        const r = e.map(i => ({
            useScope: i(),
            scopeName: i.scopeName
        }));
        return function(o) {
            const s = r.reduce((a, {
                useScope: l,
                scopeName: u
            }) => {
                const d = l(o)[`__scope${u}`];
                return { ...a,
                    ...d
                }
            }, {});
            return w.useMemo(() => ({
                [`__scope${t.scopeName}`]: s
            }), [s])
        }
    };
    return n.scopeName = t.scopeName, n
}

function oa(e) {
    const t = JP(e),
        n = w.forwardRef((r, i) => {
            const {
                children: o,
                ...s
            } = r, a = w.Children.toArray(o), l = a.find(tC);
            if (l) {
                const u = l.props.children,
                    c = a.map(d => d === l ? w.Children.count(u) > 1 ? w.Children.only(null) : w.isValidElement(u) ? u.props.children : null : d);
                return C.jsx(t, { ...s,
                    ref: i,
                    children: w.isValidElement(u) ? w.cloneElement(u, void 0, c) : null
                })
            }
            return C.jsx(t, { ...s,
                ref: i,
                children: o
            })
        });
    return n.displayName = `${e}.Slot`, n
}
var ZP = oa("Slot");

function JP(e) {
    const t = w.forwardRef((n, r) => {
        const {
            children: i,
            ...o
        } = n;
        if (w.isValidElement(i)) {
            const s = rC(i),
                a = nC(o, i.props);
            return i.type !== w.Fragment && (a.ref = r ? mv(r, s) : s), w.cloneElement(i, a)
        }
        return w.Children.count(i) > 1 ? w.Children.only(null) : null
    });
    return t.displayName = `${e}.SlotClone`, t
}
var gv = Symbol("radix.slottable");

function eC(e) {
    const t = ({
        children: n
    }) => C.jsx(C.Fragment, {
        children: n
    });
    return t.displayName = `${e}.Slottable`, t.__radixId = gv, t
}

function tC(e) {
    return w.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === gv
}

function nC(e, t) {
    const n = { ...t
    };
    for (const r in t) {
        const i = e[r],
            o = t[r];
        /^on[A-Z]/.test(r) ? i && o ? n[r] = (...a) => {
            o(...a), i(...a)
        } : i && (n[r] = i) : r === "style" ? n[r] = { ...i,
            ...o
        } : r === "className" && (n[r] = [i, o].filter(Boolean).join(" "))
    }
    return { ...e,
        ...n
    }
}

function rC(e) {
    var r, i;
    let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get,
        n = t && "isReactWarning" in t && t.isReactWarning;
    return n ? e.ref : (t = (i = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : i.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
}

function iC(e) {
    const t = e + "CollectionProvider",
        [n, r] = Ia(t),
        [i, o] = n(t, {
            collectionRef: {
                current: null
            },
            itemMap: new Map
        }),
        s = y => {
            const {
                scope: x,
                children: p
            } = y, h = Ne.useRef(null), g = Ne.useRef(new Map).current;
            return C.jsx(i, {
                scope: x,
                itemMap: g,
                collectionRef: h,
                children: p
            })
        };
    s.displayName = t;
    const a = e + "CollectionSlot",
        l = oa(a),
        u = Ne.forwardRef((y, x) => {
            const {
                scope: p,
                children: h
            } = y, g = o(a, p), S = Ct(x, g.collectionRef);
            return C.jsx(l, {
                ref: S,
                children: h
            })
        });
    u.displayName = a;
    const c = e + "CollectionItemSlot",
        d = "data-radix-collection-item",
        f = oa(c),
        m = Ne.forwardRef((y, x) => {
            const {
                scope: p,
                children: h,
                ...g
            } = y, S = Ne.useRef(null), P = Ct(x, S), T = o(c, p);
            return Ne.useEffect(() => (T.itemMap.set(S, {
                ref: S,
                ...g
            }), () => void T.itemMap.delete(S))), C.jsx(f, {
                [d]: "",
                ref: P,
                children: h
            })
        });
    m.displayName = c;

    function v(y) {
        const x = o(e + "CollectionConsumer", y);
        return Ne.useCallback(() => {
            const h = x.collectionRef.current;
            if (!h) return [];
            const g = Array.from(h.querySelectorAll(`[${d}]`));
            return Array.from(x.itemMap.values()).sort((T, k) => g.indexOf(T.ref.current) - g.indexOf(k.ref.current))
        }, [x.collectionRef, x.itemMap])
    }
    return [{
        Provider: s,
        Slot: u,
        ItemSlot: m
    }, v, r]
}
var oC = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"],
    We = oC.reduce((e, t) => {
        const n = oa(`Primitive.${t}`),
            r = w.forwardRef((i, o) => {
                const {
                    asChild: s,
                    ...a
                } = i, l = s ? n : t;
                return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), C.jsx(l, { ...a,
                    ref: o
                })
            });
        return r.displayName = `Primitive.${t}`, { ...e,
            [t]: r
        }
    }, {});

function yv(e, t) {
    e && _o.flushSync(() => e.dispatchEvent(t))
}

function It(e) {
    const t = w.useRef(e);
    return w.useEffect(() => {
        t.current = e
    }), w.useMemo(() => (...n) => {
        var r;
        return (r = t.current) == null ? void 0 : r.call(t, ...n)
    }, [])
}

function sC(e, t = globalThis == null ? void 0 : globalThis.document) {
    const n = It(e);
    w.useEffect(() => {
        const r = i => {
            i.key === "Escape" && n(i)
        };
        return t.addEventListener("keydown", r, {
            capture: !0
        }), () => t.removeEventListener("keydown", r, {
            capture: !0
        })
    }, [n, t])
}
var aC = "DismissableLayer",
    Gu = "dismissableLayer.update",
    lC = "dismissableLayer.pointerDownOutside",
    uC = "dismissableLayer.focusOutside",
    Kh, vv = w.createContext({
        layers: new Set,
        layersWithOutsidePointerEventsDisabled: new Set,
        branches: new Set
    }),
    wd = w.forwardRef((e, t) => {
        const {
            disableOutsidePointerEvents: n = !1,
            onEscapeKeyDown: r,
            onPointerDownOutside: i,
            onFocusOutside: o,
            onInteractOutside: s,
            onDismiss: a,
            ...l
        } = e, u = w.useContext(vv), [c, d] = w.useState(null), f = (c == null ? void 0 : c.ownerDocument) ? ? (globalThis == null ? void 0 : globalThis.document), [, m] = w.useState({}), v = Ct(t, k => d(k)), y = Array.from(u.layers), [x] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1), p = y.indexOf(x), h = c ? y.indexOf(c) : -1, g = u.layersWithOutsidePointerEventsDisabled.size > 0, S = h >= p, P = dC(k => {
            const E = k.target,
                D = [...u.branches].some(M => M.contains(E));
            !S || D || (i == null || i(k), s == null || s(k), k.defaultPrevented || a == null || a())
        }, f), T = fC(k => {
            const E = k.target;
            [...u.branches].some(M => M.contains(E)) || (o == null || o(k), s == null || s(k), k.defaultPrevented || a == null || a())
        }, f);
        return sC(k => {
            h === u.layers.size - 1 && (r == null || r(k), !k.defaultPrevented && a && (k.preventDefault(), a()))
        }, f), w.useEffect(() => {
            if (c) return n && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (Kh = f.body.style.pointerEvents, f.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(c)), u.layers.add(c), Gh(), () => {
                n && u.layersWithOutsidePointerEventsDisabled.size === 1 && (f.body.style.pointerEvents = Kh)
            }
        }, [c, f, n, u]), w.useEffect(() => () => {
            c && (u.layers.delete(c), u.layersWithOutsidePointerEventsDisabled.delete(c), Gh())
        }, [c, u]), w.useEffect(() => {
            const k = () => m({});
            return document.addEventListener(Gu, k), () => document.removeEventListener(Gu, k)
        }, []), C.jsx(We.div, { ...l,
            ref: v,
            style: {
                pointerEvents: g ? S ? "auto" : "none" : void 0,
                ...e.style
            },
            onFocusCapture: pe(e.onFocusCapture, T.onFocusCapture),
            onBlurCapture: pe(e.onBlurCapture, T.onBlurCapture),
            onPointerDownCapture: pe(e.onPointerDownCapture, P.onPointerDownCapture)
        })
    });
wd.displayName = aC;
var cC = "DismissableLayerBranch",
    wv = w.forwardRef((e, t) => {
        const n = w.useContext(vv),
            r = w.useRef(null),
            i = Ct(t, r);
        return w.useEffect(() => {
            const o = r.current;
            if (o) return n.branches.add(o), () => {
                n.branches.delete(o)
            }
        }, [n.branches]), C.jsx(We.div, { ...e,
            ref: i
        })
    });
wv.displayName = cC;

function dC(e, t = globalThis == null ? void 0 : globalThis.document) {
    const n = It(e),
        r = w.useRef(!1),
        i = w.useRef(() => {});
    return w.useEffect(() => {
        const o = a => {
                if (a.target && !r.current) {
                    let l = function() {
                        xv(lC, n, u, {
                            discrete: !0
                        })
                    };
                    const u = {
                        originalEvent: a
                    };
                    a.pointerType === "touch" ? (t.removeEventListener("click", i.current), i.current = l, t.addEventListener("click", i.current, {
                        once: !0
                    })) : l()
                } else t.removeEventListener("click", i.current);
                r.current = !1
            },
            s = window.setTimeout(() => {
                t.addEventListener("pointerdown", o)
            }, 0);
        return () => {
            window.clearTimeout(s), t.removeEventListener("pointerdown", o), t.removeEventListener("click", i.current)
        }
    }, [t, n]), {
        onPointerDownCapture: () => r.current = !0
    }
}

function fC(e, t = globalThis == null ? void 0 : globalThis.document) {
    const n = It(e),
        r = w.useRef(!1);
    return w.useEffect(() => {
        const i = o => {
            o.target && !r.current && xv(uC, n, {
                originalEvent: o
            }, {
                discrete: !1
            })
        };
        return t.addEventListener("focusin", i), () => t.removeEventListener("focusin", i)
    }, [t, n]), {
        onFocusCapture: () => r.current = !0,
        onBlurCapture: () => r.current = !1
    }
}

function Gh() {
    const e = new CustomEvent(Gu);
    document.dispatchEvent(e)
}

function xv(e, t, n, {
    discrete: r
}) {
    const i = n.originalEvent.target,
        o = new CustomEvent(e, {
            bubbles: !1,
            cancelable: !0,
            detail: n
        });
    t && i.addEventListener(e, t, {
        once: !0
    }), r ? yv(i, o) : i.dispatchEvent(o)
}
var hC = wd,
    pC = wv,
    hr = globalThis != null && globalThis.document ? w.useLayoutEffect : () => {},
    mC = "Portal",
    Sv = w.forwardRef((e, t) => {
        var a;
        const {
            container: n,
            ...r
        } = e, [i, o] = w.useState(!1);
        hr(() => o(!0), []);
        const s = n || i && ((a = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : a.body);
        return s ? BS.createPortal(C.jsx(We.div, { ...r,
            ref: t
        }), s) : null
    });
Sv.displayName = mC;

function gC(e, t) {
    return w.useReducer((n, r) => t[n][r] ? ? n, e)
}
var xd = e => {
    const {
        present: t,
        children: n
    } = e, r = yC(t), i = typeof n == "function" ? n({
        present: r.isPresent
    }) : w.Children.only(n), o = Ct(r.ref, vC(i));
    return typeof n == "function" || r.isPresent ? w.cloneElement(i, {
        ref: o
    }) : null
};
xd.displayName = "Presence";

function yC(e) {
    const [t, n] = w.useState(), r = w.useRef({}), i = w.useRef(e), o = w.useRef("none"), s = e ? "mounted" : "unmounted", [a, l] = gC(s, {
        mounted: {
            UNMOUNT: "unmounted",
            ANIMATION_OUT: "unmountSuspended"
        },
        unmountSuspended: {
            MOUNT: "mounted",
            ANIMATION_END: "unmounted"
        },
        unmounted: {
            MOUNT: "mounted"
        }
    });
    return w.useEffect(() => {
        const u = as(r.current);
        o.current = a === "mounted" ? u : "none"
    }, [a]), hr(() => {
        const u = r.current,
            c = i.current;
        if (c !== e) {
            const f = o.current,
                m = as(u);
            e ? l("MOUNT") : m === "none" || (u == null ? void 0 : u.display) === "none" ? l("UNMOUNT") : l(c && f !== m ? "ANIMATION_OUT" : "UNMOUNT"), i.current = e
        }
    }, [e, l]), hr(() => {
        if (t) {
            let u;
            const c = t.ownerDocument.defaultView ? ? window,
                d = m => {
                    const y = as(r.current).includes(m.animationName);
                    if (m.target === t && y && (l("ANIMATION_END"), !i.current)) {
                        const x = t.style.animationFillMode;
                        t.style.animationFillMode = "forwards", u = c.setTimeout(() => {
                            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = x)
                        })
                    }
                },
                f = m => {
                    m.target === t && (o.current = as(r.current))
                };
            return t.addEventListener("animationstart", f), t.addEventListener("animationcancel", d), t.addEventListener("animationend", d), () => {
                c.clearTimeout(u), t.removeEventListener("animationstart", f), t.removeEventListener("animationcancel", d), t.removeEventListener("animationend", d)
            }
        } else l("ANIMATION_END")
    }, [t, l]), {
        isPresent: ["mounted", "unmountSuspended"].includes(a),
        ref: w.useCallback(u => {
            u && (r.current = getComputedStyle(u)), n(u)
        }, [])
    }
}

function as(e) {
    return (e == null ? void 0 : e.animationName) || "none"
}

function vC(e) {
    var r, i;
    let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get,
        n = t && "isReactWarning" in t && t.isReactWarning;
    return n ? e.ref : (t = (i = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : i.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
}

function wC({
    prop: e,
    defaultProp: t,
    onChange: n = () => {}
}) {
    const [r, i] = xC({
        defaultProp: t,
        onChange: n
    }), o = e !== void 0, s = o ? e : r, a = It(n), l = w.useCallback(u => {
        if (o) {
            const d = typeof u == "function" ? u(e) : u;
            d !== e && a(d)
        } else i(u)
    }, [o, e, i, a]);
    return [s, l]
}

function xC({
    defaultProp: e,
    onChange: t
}) {
    const n = w.useState(e),
        [r] = n,
        i = w.useRef(r),
        o = It(t);
    return w.useEffect(() => {
        i.current !== r && (o(r), i.current = r)
    }, [r, i, o]), n
}
var SC = "VisuallyHidden",
    za = w.forwardRef((e, t) => C.jsx(We.span, { ...e,
        ref: t,
        style: {
            position: "absolute",
            border: 0,
            width: 1,
            height: 1,
            padding: 0,
            margin: -1,
            overflow: "hidden",
            clip: "rect(0, 0, 0, 0)",
            whiteSpace: "nowrap",
            wordWrap: "normal",
            ...e.style
        }
    }));
za.displayName = SC;
var PC = za,
    Sd = "ToastProvider",
    [Pd, CC, TC] = iC("Toast"),
    [Pv, DM] = Ia("Toast", [TC]),
    [EC, Ba] = Pv(Sd),
    Cv = e => {
        const {
            __scopeToast: t,
            label: n = "Notification",
            duration: r = 5e3,
            swipeDirection: i = "right",
            swipeThreshold: o = 50,
            children: s
        } = e, [a, l] = w.useState(null), [u, c] = w.useState(0), d = w.useRef(!1), f = w.useRef(!1);
        return n.trim() || console.error(`Invalid prop \`label\` supplied to \`${Sd}\`. Expected non-empty \`string\`.`), C.jsx(Pd.Provider, {
            scope: t,
            children: C.jsx(EC, {
                scope: t,
                label: n,
                duration: r,
                swipeDirection: i,
                swipeThreshold: o,
                toastCount: u,
                viewport: a,
                onViewportChange: l,
                onToastAdd: w.useCallback(() => c(m => m + 1), []),
                onToastRemove: w.useCallback(() => c(m => m - 1), []),
                isFocusedToastEscapeKeyDownRef: d,
                isClosePausedRef: f,
                children: s
            })
        })
    };
Cv.displayName = Sd;
var Tv = "ToastViewport",
    kC = ["F8"],
    Qu = "toast.viewportPause",
    Yu = "toast.viewportResume",
    Ev = w.forwardRef((e, t) => {
        const {
            __scopeToast: n,
            hotkey: r = kC,
            label: i = "Notifications ({hotkey})",
            ...o
        } = e, s = Ba(Tv, n), a = CC(n), l = w.useRef(null), u = w.useRef(null), c = w.useRef(null), d = w.useRef(null), f = Ct(t, d, s.onViewportChange), m = r.join("+").replace(/Key/g, "").replace(/Digit/g, ""), v = s.toastCount > 0;
        w.useEffect(() => {
            const x = p => {
                var g;
                r.length !== 0 && r.every(S => p[S] || p.code === S) && ((g = d.current) == null || g.focus())
            };
            return document.addEventListener("keydown", x), () => document.removeEventListener("keydown", x)
        }, [r]), w.useEffect(() => {
            const x = l.current,
                p = d.current;
            if (v && x && p) {
                const h = () => {
                        if (!s.isClosePausedRef.current) {
                            const T = new CustomEvent(Qu);
                            p.dispatchEvent(T), s.isClosePausedRef.current = !0
                        }
                    },
                    g = () => {
                        if (s.isClosePausedRef.current) {
                            const T = new CustomEvent(Yu);
                            p.dispatchEvent(T), s.isClosePausedRef.current = !1
                        }
                    },
                    S = T => {
                        !x.contains(T.relatedTarget) && g()
                    },
                    P = () => {
                        x.contains(document.activeElement) || g()
                    };
                return x.addEventListener("focusin", h), x.addEventListener("focusout", S), x.addEventListener("pointermove", h), x.addEventListener("pointerleave", P), window.addEventListener("blur", h), window.addEventListener("focus", g), () => {
                    x.removeEventListener("focusin", h), x.removeEventListener("focusout", S), x.removeEventListener("pointermove", h), x.removeEventListener("pointerleave", P), window.removeEventListener("blur", h), window.removeEventListener("focus", g)
                }
            }
        }, [v, s.isClosePausedRef]);
        const y = w.useCallback(({
            tabbingDirection: x
        }) => {
            const h = a().map(g => {
                const S = g.ref.current,
                    P = [S, ...IC(S)];
                return x === "forwards" ? P : P.reverse()
            });
            return (x === "forwards" ? h.reverse() : h).flat()
        }, [a]);
        return w.useEffect(() => {
            const x = d.current;
            if (x) {
                const p = h => {
                    var P, T, k;
                    const g = h.altKey || h.ctrlKey || h.metaKey;
                    if (h.key === "Tab" && !g) {
                        const E = document.activeElement,
                            D = h.shiftKey;
                        if (h.target === x && D) {
                            (P = u.current) == null || P.focus();
                            return
                        }
                        const j = y({
                                tabbingDirection: D ? "backwards" : "forwards"
                            }),
                            H = j.findIndex(L => L === E);
                        Nl(j.slice(H + 1)) ? h.preventDefault() : D ? (T = u.current) == null || T.focus() : (k = c.current) == null || k.focus()
                    }
                };
                return x.addEventListener("keydown", p), () => x.removeEventListener("keydown", p)
            }
        }, [a, y]), C.jsxs(pC, {
            ref: l,
            role: "region",
            "aria-label": i.replace("{hotkey}", m),
            tabIndex: -1,
            style: {
                pointerEvents: v ? void 0 : "none"
            },
            children: [v && C.jsx(Xu, {
                ref: u,
                onFocusFromOutsideViewport: () => {
                    const x = y({
                        tabbingDirection: "forwards"
                    });
                    Nl(x)
                }
            }), C.jsx(Pd.Slot, {
                scope: n,
                children: C.jsx(We.ol, {
                    tabIndex: -1,
                    ...o,
                    ref: f
                })
            }), v && C.jsx(Xu, {
                ref: c,
                onFocusFromOutsideViewport: () => {
                    const x = y({
                        tabbingDirection: "backwards"
                    });
                    Nl(x)
                }
            })]
        })
    });
Ev.displayName = Tv;
var kv = "ToastFocusProxy",
    Xu = w.forwardRef((e, t) => {
        const {
            __scopeToast: n,
            onFocusFromOutsideViewport: r,
            ...i
        } = e, o = Ba(kv, n);
        return C.jsx(za, {
            "aria-hidden": !0,
            tabIndex: 0,
            ...i,
            ref: t,
            style: {
                position: "fixed"
            },
            onFocus: s => {
                var u;
                const a = s.relatedTarget;
                !((u = o.viewport) != null && u.contains(a)) && r()
            }
        })
    });
Xu.displayName = kv;
var $a = "Toast",
    AC = "toast.swipeStart",
    RC = "toast.swipeMove",
    bC = "toast.swipeCancel",
    MC = "toast.swipeEnd",
    Av = w.forwardRef((e, t) => {
        const {
            forceMount: n,
            open: r,
            defaultOpen: i,
            onOpenChange: o,
            ...s
        } = e, [a = !0, l] = wC({
            prop: r,
            defaultProp: i,
            onChange: o
        });
        return C.jsx(xd, {
            present: n || a,
            children: C.jsx(LC, {
                open: a,
                ...s,
                ref: t,
                onClose: () => l(!1),
                onPause: It(e.onPause),
                onResume: It(e.onResume),
                onSwipeStart: pe(e.onSwipeStart, u => {
                    u.currentTarget.setAttribute("data-swipe", "start")
                }),
                onSwipeMove: pe(e.onSwipeMove, u => {
                    const {
                        x: c,
                        y: d
                    } = u.detail.delta;
                    u.currentTarget.setAttribute("data-swipe", "move"), u.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${c}px`), u.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${d}px`)
                }),
                onSwipeCancel: pe(e.onSwipeCancel, u => {
                    u.currentTarget.setAttribute("data-swipe", "cancel"), u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), u.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"), u.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")
                }),
                onSwipeEnd: pe(e.onSwipeEnd, u => {
                    const {
                        x: c,
                        y: d
                    } = u.detail.delta;
                    u.currentTarget.setAttribute("data-swipe", "end"), u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), u.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${c}px`), u.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${d}px`), l(!1)
                })
            })
        })
    });
Av.displayName = $a;
var [DC, OC] = Pv($a, {
    onClose() {}
}), LC = w.forwardRef((e, t) => {
    const {
        __scopeToast: n,
        type: r = "foreground",
        duration: i,
        open: o,
        onClose: s,
        onEscapeKeyDown: a,
        onPause: l,
        onResume: u,
        onSwipeStart: c,
        onSwipeMove: d,
        onSwipeCancel: f,
        onSwipeEnd: m,
        ...v
    } = e, y = Ba($a, n), [x, p] = w.useState(null), h = Ct(t, L => p(L)), g = w.useRef(null), S = w.useRef(null), P = i || y.duration, T = w.useRef(0), k = w.useRef(P), E = w.useRef(0), {
        onToastAdd: D,
        onToastRemove: M
    } = y, I = It(() => {
        var Q;
        (x == null ? void 0 : x.contains(document.activeElement)) && ((Q = y.viewport) == null || Q.focus()), s()
    }), j = w.useCallback(L => {
        !L || L === 1 / 0 || (window.clearTimeout(E.current), T.current = new Date().getTime(), E.current = window.setTimeout(I, L))
    }, [I]);
    w.useEffect(() => {
        const L = y.viewport;
        if (L) {
            const Q = () => {
                    j(k.current), u == null || u()
                },
                $ = () => {
                    const F = new Date().getTime() - T.current;
                    k.current = k.current - F, window.clearTimeout(E.current), l == null || l()
                };
            return L.addEventListener(Qu, $), L.addEventListener(Yu, Q), () => {
                L.removeEventListener(Qu, $), L.removeEventListener(Yu, Q)
            }
        }
    }, [y.viewport, P, l, u, j]), w.useEffect(() => {
        o && !y.isClosePausedRef.current && j(P)
    }, [o, P, y.isClosePausedRef, j]), w.useEffect(() => (D(), () => M()), [D, M]);
    const H = w.useMemo(() => x ? Nv(x) : null, [x]);
    return y.viewport ? C.jsxs(C.Fragment, {
        children: [H && C.jsx(NC, {
            __scopeToast: n,
            role: "status",
            "aria-live": r === "foreground" ? "assertive" : "polite",
            "aria-atomic": !0,
            children: H
        }), C.jsx(DC, {
            scope: n,
            onClose: I,
            children: _o.createPortal(C.jsx(Pd.ItemSlot, {
                scope: n,
                children: C.jsx(hC, {
                    asChild: !0,
                    onEscapeKeyDown: pe(a, () => {
                        y.isFocusedToastEscapeKeyDownRef.current || I(), y.isFocusedToastEscapeKeyDownRef.current = !1
                    }),
                    children: C.jsx(We.li, {
                        role: "status",
                        "aria-live": "off",
                        "aria-atomic": !0,
                        tabIndex: 0,
                        "data-state": o ? "open" : "closed",
                        "data-swipe-direction": y.swipeDirection,
                        ...v,
                        ref: h,
                        style: {
                            userSelect: "none",
                            touchAction: "none",
                            ...e.style
                        },
                        onKeyDown: pe(e.onKeyDown, L => {
                            L.key === "Escape" && (a == null || a(L.nativeEvent), L.nativeEvent.defaultPrevented || (y.isFocusedToastEscapeKeyDownRef.current = !0, I()))
                        }),
                        onPointerDown: pe(e.onPointerDown, L => {
                            L.button === 0 && (g.current = {
                                x: L.clientX,
                                y: L.clientY
                            })
                        }),
                        onPointerMove: pe(e.onPointerMove, L => {
                            if (!g.current) return;
                            const Q = L.clientX - g.current.x,
                                $ = L.clientY - g.current.y,
                                F = !!S.current,
                                A = ["left", "right"].includes(y.swipeDirection),
                                O = ["left", "up"].includes(y.swipeDirection) ? Math.min : Math.max,
                                _ = A ? O(0, Q) : 0,
                                U = A ? 0 : O(0, $),
                                te = L.pointerType === "touch" ? 10 : 2,
                                ft = {
                                    x: _,
                                    y: U
                                },
                                nt = {
                                    originalEvent: L,
                                    delta: ft
                                };
                            F ? (S.current = ft, ls(RC, d, nt, {
                                discrete: !1
                            })) : Qh(ft, y.swipeDirection, te) ? (S.current = ft, ls(AC, c, nt, {
                                discrete: !1
                            }), L.target.setPointerCapture(L.pointerId)) : (Math.abs(Q) > te || Math.abs($) > te) && (g.current = null)
                        }),
                        onPointerUp: pe(e.onPointerUp, L => {
                            const Q = S.current,
                                $ = L.target;
                            if ($.hasPointerCapture(L.pointerId) && $.releasePointerCapture(L.pointerId), S.current = null, g.current = null, Q) {
                                const F = L.currentTarget,
                                    A = {
                                        originalEvent: L,
                                        delta: Q
                                    };
                                Qh(Q, y.swipeDirection, y.swipeThreshold) ? ls(MC, m, A, {
                                    discrete: !0
                                }) : ls(bC, f, A, {
                                    discrete: !0
                                }), F.addEventListener("click", O => O.preventDefault(), {
                                    once: !0
                                })
                            }
                        })
                    })
                })
            }), y.viewport)
        })]
    }) : null
}), NC = e => {
    const {
        __scopeToast: t,
        children: n,
        ...r
    } = e, i = Ba($a, t), [o, s] = w.useState(!1), [a, l] = w.useState(!1);
    return VC(() => s(!0)), w.useEffect(() => {
        const u = window.setTimeout(() => l(!0), 1e3);
        return () => window.clearTimeout(u)
    }, []), a ? null : C.jsx(Sv, {
        asChild: !0,
        children: C.jsx(za, { ...r,
            children: o && C.jsxs(C.Fragment, {
                children: [i.label, " ", n]
            })
        })
    })
}, _C = "ToastTitle", Rv = w.forwardRef((e, t) => {
    const {
        __scopeToast: n,
        ...r
    } = e;
    return C.jsx(We.div, { ...r,
        ref: t
    })
});
Rv.displayName = _C;
var jC = "ToastDescription",
    bv = w.forwardRef((e, t) => {
        const {
            __scopeToast: n,
            ...r
        } = e;
        return C.jsx(We.div, { ...r,
            ref: t
        })
    });
bv.displayName = jC;
var Mv = "ToastAction",
    Dv = w.forwardRef((e, t) => {
        const {
            altText: n,
            ...r
        } = e;
        return n.trim() ? C.jsx(Lv, {
            altText: n,
            asChild: !0,
            children: C.jsx(Cd, { ...r,
                ref: t
            })
        }) : (console.error(`Invalid prop \`altText\` supplied to \`${Mv}\`. Expected non-empty \`string\`.`), null)
    });
Dv.displayName = Mv;
var Ov = "ToastClose",
    Cd = w.forwardRef((e, t) => {
        const {
            __scopeToast: n,
            ...r
        } = e, i = OC(Ov, n);
        return C.jsx(Lv, {
            asChild: !0,
            children: C.jsx(We.button, {
                type: "button",
                ...r,
                ref: t,
                onClick: pe(e.onClick, i.onClose)
            })
        })
    });
Cd.displayName = Ov;
var Lv = w.forwardRef((e, t) => {
    const {
        __scopeToast: n,
        altText: r,
        ...i
    } = e;
    return C.jsx(We.div, {
        "data-radix-toast-announce-exclude": "",
        "data-radix-toast-announce-alt": r || void 0,
        ...i,
        ref: t
    })
});

function Nv(e) {
    const t = [];
    return Array.from(e.childNodes).forEach(r => {
        if (r.nodeType === r.TEXT_NODE && r.textContent && t.push(r.textContent), FC(r)) {
            const i = r.ariaHidden || r.hidden || r.style.display === "none",
                o = r.dataset.radixToastAnnounceExclude === "";
            if (!i)
                if (o) {
                    const s = r.dataset.radixToastAnnounceAlt;
                    s && t.push(s)
                } else t.push(...Nv(r))
        }
    }), t
}

function ls(e, t, n, {
    discrete: r
}) {
    const i = n.originalEvent.currentTarget,
        o = new CustomEvent(e, {
            bubbles: !0,
            cancelable: !0,
            detail: n
        });
    t && i.addEventListener(e, t, {
        once: !0
    }), r ? yv(i, o) : i.dispatchEvent(o)
}
var Qh = (e, t, n = 0) => {
    const r = Math.abs(e.x),
        i = Math.abs(e.y),
        o = r > i;
    return t === "left" || t === "right" ? o && r > n : !o && i > n
};

function VC(e = () => {}) {
    const t = It(e);
    hr(() => {
        let n = 0,
            r = 0;
        return n = window.requestAnimationFrame(() => r = window.requestAnimationFrame(t)), () => {
            window.cancelAnimationFrame(n), window.cancelAnimationFrame(r)
        }
    }, [t])
}

function FC(e) {
    return e.nodeType === e.ELEMENT_NODE
}

function IC(e) {
    const t = [],
        n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: r => {
                const i = r.tagName === "INPUT" && r.type === "hidden";
                return r.disabled || r.hidden || i ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
            }
        });
    for (; n.nextNode();) t.push(n.currentNode);
    return t
}

function Nl(e) {
    const t = document.activeElement;
    return e.some(n => n === t ? !0 : (n.focus(), document.activeElement !== t))
}
var zC = Cv,
    _v = Ev,
    jv = Av,
    Vv = Rv,
    Fv = bv,
    Iv = Dv,
    zv = Cd;

function Bv(e) {
    var t, n, r = "";
    if (typeof e == "string" || typeof e == "number") r += e;
    else if (typeof e == "object")
        if (Array.isArray(e)) {
            var i = e.length;
            for (t = 0; t < i; t++) e[t] && (n = Bv(e[t])) && (r && (r += " "), r += n)
        } else
            for (n in e) e[n] && (r && (r += " "), r += n);
    return r
}

function $v() {
    for (var e, t, n = 0, r = "", i = arguments.length; n < i; n++)(e = arguments[n]) && (t = Bv(e)) && (r && (r += " "), r += t);
    return r
}
const Yh = e => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e,
    Xh = $v,
    Uv = (e, t) => n => {
        var r;
        if ((t == null ? void 0 : t.variants) == null) return Xh(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
        const {
            variants: i,
            defaultVariants: o
        } = t, s = Object.keys(i).map(u => {
            const c = n == null ? void 0 : n[u],
                d = o == null ? void 0 : o[u];
            if (c === null) return null;
            const f = Yh(c) || Yh(d);
            return i[u][f]
        }), a = n && Object.entries(n).reduce((u, c) => {
            let [d, f] = c;
            return f === void 0 || (u[d] = f), u
        }, {}), l = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((u, c) => {
            let {
                class: d,
                className: f,
                ...m
            } = c;
            return Object.entries(m).every(v => {
                let [y, x] = v;
                return Array.isArray(x) ? x.includes({ ...o,
                    ...a
                }[y]) : { ...o,
                    ...a
                }[y] === x
            }) ? [...u, d, f] : u
        }, []);
        return Xh(e, s, l, n == null ? void 0 : n.class, n == null ? void 0 : n.className)
    };
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const BC = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
    Wv = (...e) => e.filter((t, n, r) => !!t && r.indexOf(t) === n).join(" ");
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var $C = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const UC = w.forwardRef(({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: n = 2,
    absoluteStrokeWidth: r,
    className: i = "",
    children: o,
    iconNode: s,
    ...a
}, l) => w.createElement("svg", {
    ref: l,
    ...$C,
    width: t,
    height: t,
    stroke: e,
    strokeWidth: r ? Number(n) * 24 / Number(t) : n,
    className: Wv("lucide", i),
    ...a
}, [...s.map(([u, c]) => w.createElement(u, c)), ...Array.isArray(o) ? o : [o]]));
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vr = (e, t) => {
    const n = w.forwardRef(({
        className: r,
        ...i
    }, o) => w.createElement(UC, {
        ref: o,
        iconNode: t,
        className: Wv(`lucide-${BC(e)}`, r),
        ...i
    }));
    return n.displayName = `${e}`, n
};
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const WC = vr("CircleAlert", [
    ["circle", {
        cx: "12",
        cy: "12",
        r: "10",
        key: "1mglay"
    }],
    ["line", {
        x1: "12",
        x2: "12",
        y1: "8",
        y2: "12",
        key: "1pkeuh"
    }],
    ["line", {
        x1: "12",
        x2: "12.01",
        y1: "16",
        y2: "16",
        key: "4dfq90"
    }]
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const HC = vr("ExternalLink", [
    ["path", {
        d: "M15 3h6v6",
        key: "1q9fwt"
    }],
    ["path", {
        d: "M10 14 21 3",
        key: "gplh6r"
    }],
    ["path", {
        d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
        key: "a6xqqp"
    }]
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const KC = vr("House", [
    ["path", {
        d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",
        key: "5wwlr5"
    }],
    ["path", {
        d: "M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
        key: "1d0kgt"
    }]
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const GC = vr("ShoppingCart", [
    ["circle", {
        cx: "8",
        cy: "21",
        r: "1",
        key: "jimo8o"
    }],
    ["circle", {
        cx: "19",
        cy: "21",
        r: "1",
        key: "13723u"
    }],
    ["path", {
        d: "M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",
        key: "9zh506"
    }]
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const QC = vr("TrendingUp", [
    ["polyline", {
        points: "22 7 13.5 15.5 8.5 10.5 2 17",
        key: "126l90"
    }],
    ["polyline", {
        points: "16 7 22 7 22 13",
        key: "kwv8wd"
    }]
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const YC = vr("X", [
    ["path", {
        d: "M18 6 6 18",
        key: "1bl5f8"
    }],
    ["path", {
        d: "m6 6 12 12",
        key: "d8bk6v"
    }]
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const XC = vr("Zap", [
        ["path", {
            d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
            key: "1xq2db"
        }]
    ]),
    Td = "-",
    qC = e => {
        const t = JC(e),
            {
                conflictingClassGroups: n,
                conflictingClassGroupModifiers: r
            } = e;
        return {
            getClassGroupId: s => {
                const a = s.split(Td);
                return a[0] === "" && a.length !== 1 && a.shift(), Hv(a, t) || ZC(s)
            },
            getConflictingClassGroupIds: (s, a) => {
                const l = n[s] || [];
                return a && r[s] ? [...l, ...r[s]] : l
            }
        }
    },
    Hv = (e, t) => {
        var s;
        if (e.length === 0) return t.classGroupId;
        const n = e[0],
            r = t.nextPart.get(n),
            i = r ? Hv(e.slice(1), r) : void 0;
        if (i) return i;
        if (t.validators.length === 0) return;
        const o = e.join(Td);
        return (s = t.validators.find(({
            validator: a
        }) => a(o))) == null ? void 0 : s.classGroupId
    },
    qh = /^\[(.+)\]$/,
    ZC = e => {
        if (qh.test(e)) {
            const t = qh.exec(e)[1],
                n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
            if (n) return "arbitrary.." + n
        }
    },
    JC = e => {
        const {
            theme: t,
            prefix: n
        } = e, r = {
            nextPart: new Map,
            validators: []
        };
        return tT(Object.entries(e.classGroups), n).forEach(([o, s]) => {
            qu(s, r, o, t)
        }), r
    },
    qu = (e, t, n, r) => {
        e.forEach(i => {
            if (typeof i == "string") {
                const o = i === "" ? t : Zh(t, i);
                o.classGroupId = n;
                return
            }
            if (typeof i == "function") {
                if (eT(i)) {
                    qu(i(r), t, n, r);
                    return
                }
                t.validators.push({
                    validator: i,
                    classGroupId: n
                });
                return
            }
            Object.entries(i).forEach(([o, s]) => {
                qu(s, Zh(t, o), n, r)
            })
        })
    },
    Zh = (e, t) => {
        let n = e;
        return t.split(Td).forEach(r => {
            n.nextPart.has(r) || n.nextPart.set(r, {
                nextPart: new Map,
                validators: []
            }), n = n.nextPart.get(r)
        }), n
    },
    eT = e => e.isThemeGetter,
    tT = (e, t) => t ? e.map(([n, r]) => {
        const i = r.map(o => typeof o == "string" ? t + o : typeof o == "object" ? Object.fromEntries(Object.entries(o).map(([s, a]) => [t + s, a])) : o);
        return [n, i]
    }) : e,
    nT = e => {
        if (e < 1) return {
            get: () => {},
            set: () => {}
        };
        let t = 0,
            n = new Map,
            r = new Map;
        const i = (o, s) => {
            n.set(o, s), t++, t > e && (t = 0, r = n, n = new Map)
        };
        return {
            get(o) {
                let s = n.get(o);
                if (s !== void 0) return s;
                if ((s = r.get(o)) !== void 0) return i(o, s), s
            },
            set(o, s) {
                n.has(o) ? n.set(o, s) : i(o, s)
            }
        }
    },
    Kv = "!",
    rT = e => {
        const {
            separator: t,
            experimentalParseClassName: n
        } = e, r = t.length === 1, i = t[0], o = t.length, s = a => {
            const l = [];
            let u = 0,
                c = 0,
                d;
            for (let x = 0; x < a.length; x++) {
                let p = a[x];
                if (u === 0) {
                    if (p === i && (r || a.slice(x, x + o) === t)) {
                        l.push(a.slice(c, x)), c = x + o;
                        continue
                    }
                    if (p === "/") {
                        d = x;
                        continue
                    }
                }
                p === "[" ? u++ : p === "]" && u--
            }
            const f = l.length === 0 ? a : a.substring(c),
                m = f.startsWith(Kv),
                v = m ? f.substring(1) : f,
                y = d && d > c ? d - c : void 0;
            return {
                modifiers: l,
                hasImportantModifier: m,
                baseClassName: v,
                maybePostfixModifierPosition: y
            }
        };
        return n ? a => n({
            className: a,
            parseClassName: s
        }) : s
    },
    iT = e => {
        if (e.length <= 1) return e;
        const t = [];
        let n = [];
        return e.forEach(r => {
            r[0] === "[" ? (t.push(...n.sort(), r), n = []) : n.push(r)
        }), t.push(...n.sort()), t
    },
    oT = e => ({
        cache: nT(e.cacheSize),
        parseClassName: rT(e),
        ...qC(e)
    }),
    sT = /\s+/,
    aT = (e, t) => {
        const {
            parseClassName: n,
            getClassGroupId: r,
            getConflictingClassGroupIds: i
        } = t, o = [], s = e.trim().split(sT);
        let a = "";
        for (let l = s.length - 1; l >= 0; l -= 1) {
            const u = s[l],
                {
                    modifiers: c,
                    hasImportantModifier: d,
                    baseClassName: f,
                    maybePostfixModifierPosition: m
                } = n(u);
            let v = !!m,
                y = r(v ? f.substring(0, m) : f);
            if (!y) {
                if (!v) {
                    a = u + (a.length > 0 ? " " + a : a);
                    continue
                }
                if (y = r(f), !y) {
                    a = u + (a.length > 0 ? " " + a : a);
                    continue
                }
                v = !1
            }
            const x = iT(c).join(":"),
                p = d ? x + Kv : x,
                h = p + y;
            if (o.includes(h)) continue;
            o.push(h);
            const g = i(y, v);
            for (let S = 0; S < g.length; ++S) {
                const P = g[S];
                o.push(p + P)
            }
            a = u + (a.length > 0 ? " " + a : a)
        }
        return a
    };

function lT() {
    let e = 0,
        t, n, r = "";
    for (; e < arguments.length;)(t = arguments[e++]) && (n = Gv(t)) && (r && (r += " "), r += n);
    return r
}
const Gv = e => {
    if (typeof e == "string") return e;
    let t, n = "";
    for (let r = 0; r < e.length; r++) e[r] && (t = Gv(e[r])) && (n && (n += " "), n += t);
    return n
};

function uT(e, ...t) {
    let n, r, i, o = s;

    function s(l) {
        const u = t.reduce((c, d) => d(c), e());
        return n = oT(u), r = n.cache.get, i = n.cache.set, o = a, a(l)
    }

    function a(l) {
        const u = r(l);
        if (u) return u;
        const c = aT(l, n);
        return i(l, c), c
    }
    return function() {
        return o(lT.apply(null, arguments))
    }
}
const Z = e => {
        const t = n => n[e] || [];
        return t.isThemeGetter = !0, t
    },
    Qv = /^\[(?:([a-z-]+):)?(.+)\]$/i,
    cT = /^\d+\/\d+$/,
    dT = new Set(["px", "full", "screen"]),
    fT = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
    hT = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
    pT = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
    mT = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
    gT = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
    Ut = e => Wr(e) || dT.has(e) || cT.test(e),
    un = e => gi(e, "length", TT),
    Wr = e => !!e && !Number.isNaN(Number(e)),
    _l = e => gi(e, "number", Wr),
    Di = e => !!e && Number.isInteger(Number(e)),
    yT = e => e.endsWith("%") && Wr(e.slice(0, -1)),
    z = e => Qv.test(e),
    cn = e => fT.test(e),
    vT = new Set(["length", "size", "percentage"]),
    wT = e => gi(e, vT, Yv),
    xT = e => gi(e, "position", Yv),
    ST = new Set(["image", "url"]),
    PT = e => gi(e, ST, kT),
    CT = e => gi(e, "", ET),
    Oi = () => !0,
    gi = (e, t, n) => {
        const r = Qv.exec(e);
        return r ? r[1] ? typeof t == "string" ? r[1] === t : t.has(r[1]) : n(r[2]) : !1
    },
    TT = e => hT.test(e) && !pT.test(e),
    Yv = () => !1,
    ET = e => mT.test(e),
    kT = e => gT.test(e),
    AT = () => {
        const e = Z("colors"),
            t = Z("spacing"),
            n = Z("blur"),
            r = Z("brightness"),
            i = Z("borderColor"),
            o = Z("borderRadius"),
            s = Z("borderSpacing"),
            a = Z("borderWidth"),
            l = Z("contrast"),
            u = Z("grayscale"),
            c = Z("hueRotate"),
            d = Z("invert"),
            f = Z("gap"),
            m = Z("gradientColorStops"),
            v = Z("gradientColorStopPositions"),
            y = Z("inset"),
            x = Z("margin"),
            p = Z("opacity"),
            h = Z("padding"),
            g = Z("saturate"),
            S = Z("scale"),
            P = Z("sepia"),
            T = Z("skew"),
            k = Z("space"),
            E = Z("translate"),
            D = () => ["auto", "contain", "none"],
            M = () => ["auto", "hidden", "clip", "visible", "scroll"],
            I = () => ["auto", z, t],
            j = () => [z, t],
            H = () => ["", Ut, un],
            L = () => ["auto", Wr, z],
            Q = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"],
            $ = () => ["solid", "dashed", "dotted", "double", "none"],
            F = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"],
            A = () => ["start", "end", "center", "between", "around", "evenly", "stretch"],
            O = () => ["", "0", z],
            _ = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"],
            U = () => [Wr, z];
        return {
            cacheSize: 500,
            separator: ":",
            theme: {
                colors: [Oi],
                spacing: [Ut, un],
                blur: ["none", "", cn, z],
                brightness: U(),
                borderColor: [e],
                borderRadius: ["none", "", "full", cn, z],
                borderSpacing: j(),
                borderWidth: H(),
                contrast: U(),
                grayscale: O(),
                hueRotate: U(),
                invert: O(),
                gap: j(),
                gradientColorStops: [e],
                gradientColorStopPositions: [yT, un],
                inset: I(),
                margin: I(),
                opacity: U(),
                padding: j(),
                saturate: U(),
                scale: U(),
                sepia: O(),
                skew: U(),
                space: j(),
                translate: j()
            },
            classGroups: {
                aspect: [{
                    aspect: ["auto", "square", "video", z]
                }],
                container: ["container"],
                columns: [{
                    columns: [cn]
                }],
                "break-after": [{
                    "break-after": _()
                }],
                "break-before": [{
                    "break-before": _()
                }],
                "break-inside": [{
                    "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
                }],
                "box-decoration": [{
                    "box-decoration": ["slice", "clone"]
                }],
                box: [{
                    box: ["border", "content"]
                }],
                display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
                float: [{
                    float: ["right", "left", "none", "start", "end"]
                }],
                clear: [{
                    clear: ["left", "right", "both", "none", "start", "end"]
                }],
                isolation: ["isolate", "isolation-auto"],
                "object-fit": [{
                    object: ["contain", "cover", "fill", "none", "scale-down"]
                }],
                "object-position": [{
                    object: [...Q(), z]
                }],
                overflow: [{
                    overflow: M()
                }],
                "overflow-x": [{
                    "overflow-x": M()
                }],
                "overflow-y": [{
                    "overflow-y": M()
                }],
                overscroll: [{
                    overscroll: D()
                }],
                "overscroll-x": [{
                    "overscroll-x": D()
                }],
                "overscroll-y": [{
                    "overscroll-y": D()
                }],
                position: ["static", "fixed", "absolute", "relative", "sticky"],
                inset: [{
                    inset: [y]
                }],
                "inset-x": [{
                    "inset-x": [y]
                }],
                "inset-y": [{
                    "inset-y": [y]
                }],
                start: [{
                    start: [y]
                }],
                end: [{
                    end: [y]
                }],
                top: [{
                    top: [y]
                }],
                right: [{
                    right: [y]
                }],
                bottom: [{
                    bottom: [y]
                }],
                left: [{
                    left: [y]
                }],
                visibility: ["visible", "invisible", "collapse"],
                z: [{
                    z: ["auto", Di, z]
                }],
                basis: [{
                    basis: I()
                }],
                "flex-direction": [{
                    flex: ["row", "row-reverse", "col", "col-reverse"]
                }],
                "flex-wrap": [{
                    flex: ["wrap", "wrap-reverse", "nowrap"]
                }],
                flex: [{
                    flex: ["1", "auto", "initial", "none", z]
                }],
                grow: [{
                    grow: O()
                }],
                shrink: [{
                    shrink: O()
                }],
                order: [{
                    order: ["first", "last", "none", Di, z]
                }],
                "grid-cols": [{
                    "grid-cols": [Oi]
                }],
                "col-start-end": [{
                    col: ["auto", {
                        span: ["full", Di, z]
                    }, z]
                }],
                "col-start": [{
                    "col-start": L()
                }],
                "col-end": [{
                    "col-end": L()
                }],
                "grid-rows": [{
                    "grid-rows": [Oi]
                }],
                "row-start-end": [{
                    row: ["auto", {
                        span: [Di, z]
                    }, z]
                }],
                "row-start": [{
                    "row-start": L()
                }],
                "row-end": [{
                    "row-end": L()
                }],
                "grid-flow": [{
                    "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
                }],
                "auto-cols": [{
                    "auto-cols": ["auto", "min", "max", "fr", z]
                }],
                "auto-rows": [{
                    "auto-rows": ["auto", "min", "max", "fr", z]
                }],
                gap: [{
                    gap: [f]
                }],
                "gap-x": [{
                    "gap-x": [f]
                }],
                "gap-y": [{
                    "gap-y": [f]
                }],
                "justify-content": [{
                    justify: ["normal", ...A()]
                }],
                "justify-items": [{
                    "justify-items": ["start", "end", "center", "stretch"]
                }],
                "justify-self": [{
                    "justify-self": ["auto", "start", "end", "center", "stretch"]
                }],
                "align-content": [{
                    content: ["normal", ...A(), "baseline"]
                }],
                "align-items": [{
                    items: ["start", "end", "center", "baseline", "stretch"]
                }],
                "align-self": [{
                    self: ["auto", "start", "end", "center", "stretch", "baseline"]
                }],
                "place-content": [{
                    "place-content": [...A(), "baseline"]
                }],
                "place-items": [{
                    "place-items": ["start", "end", "center", "baseline", "stretch"]
                }],
                "place-self": [{
                    "place-self": ["auto", "start", "end", "center", "stretch"]
                }],
                p: [{
                    p: [h]
                }],
                px: [{
                    px: [h]
                }],
                py: [{
                    py: [h]
                }],
                ps: [{
                    ps: [h]
                }],
                pe: [{
                    pe: [h]
                }],
                pt: [{
                    pt: [h]
                }],
                pr: [{
                    pr: [h]
                }],
                pb: [{
                    pb: [h]
                }],
                pl: [{
                    pl: [h]
                }],
                m: [{
                    m: [x]
                }],
                mx: [{
                    mx: [x]
                }],
                my: [{
                    my: [x]
                }],
                ms: [{
                    ms: [x]
                }],
                me: [{
                    me: [x]
                }],
                mt: [{
                    mt: [x]
                }],
                mr: [{
                    mr: [x]
                }],
                mb: [{
                    mb: [x]
                }],
                ml: [{
                    ml: [x]
                }],
                "space-x": [{
                    "space-x": [k]
                }],
                "space-x-reverse": ["space-x-reverse"],
                "space-y": [{
                    "space-y": [k]
                }],
                "space-y-reverse": ["space-y-reverse"],
                w: [{
                    w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", z, t]
                }],
                "min-w": [{
                    "min-w": [z, t, "min", "max", "fit"]
                }],
                "max-w": [{
                    "max-w": [z, t, "none", "full", "min", "max", "fit", "prose", {
                        screen: [cn]
                    }, cn]
                }],
                h: [{
                    h: [z, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
                }],
                "min-h": [{
                    "min-h": [z, t, "min", "max", "fit", "svh", "lvh", "dvh"]
                }],
                "max-h": [{
                    "max-h": [z, t, "min", "max", "fit", "svh", "lvh", "dvh"]
                }],
                size: [{
                    size: [z, t, "auto", "min", "max", "fit"]
                }],
                "font-size": [{
                    text: ["base", cn, un]
                }],
                "font-smoothing": ["antialiased", "subpixel-antialiased"],
                "font-style": ["italic", "not-italic"],
                "font-weight": [{
                    font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", _l]
                }],
                "font-family": [{
                    font: [Oi]
                }],
                "fvn-normal": ["normal-nums"],
                "fvn-ordinal": ["ordinal"],
                "fvn-slashed-zero": ["slashed-zero"],
                "fvn-figure": ["lining-nums", "oldstyle-nums"],
                "fvn-spacing": ["proportional-nums", "tabular-nums"],
                "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
                tracking: [{
                    tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", z]
                }],
                "line-clamp": [{
                    "line-clamp": ["none", Wr, _l]
                }],
                leading: [{
                    leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Ut, z]
                }],
                "list-image": [{
                    "list-image": ["none", z]
                }],
                "list-style-type": [{
                    list: ["none", "disc", "decimal", z]
                }],
                "list-style-position": [{
                    list: ["inside", "outside"]
                }],
                "placeholder-color": [{
                    placeholder: [e]
                }],
                "placeholder-opacity": [{
                    "placeholder-opacity": [p]
                }],
                "text-alignment": [{
                    text: ["left", "center", "right", "justify", "start", "end"]
                }],
                "text-color": [{
                    text: [e]
                }],
                "text-opacity": [{
                    "text-opacity": [p]
                }],
                "text-decoration": ["underline", "overline", "line-through", "no-underline"],
                "text-decoration-style": [{
                    decoration: [...$(), "wavy"]
                }],
                "text-decoration-thickness": [{
                    decoration: ["auto", "from-font", Ut, un]
                }],
                "underline-offset": [{
                    "underline-offset": ["auto", Ut, z]
                }],
                "text-decoration-color": [{
                    decoration: [e]
                }],
                "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
                "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
                "text-wrap": [{
                    text: ["wrap", "nowrap", "balance", "pretty"]
                }],
                indent: [{
                    indent: j()
                }],
                "vertical-align": [{
                    align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", z]
                }],
                whitespace: [{
                    whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
                }],
                break: [{
                    break: ["normal", "words", "all", "keep"]
                }],
                hyphens: [{
                    hyphens: ["none", "manual", "auto"]
                }],
                content: [{
                    content: ["none", z]
                }],
                "bg-attachment": [{
                    bg: ["fixed", "local", "scroll"]
                }],
                "bg-clip": [{
                    "bg-clip": ["border", "padding", "content", "text"]
                }],
                "bg-opacity": [{
                    "bg-opacity": [p]
                }],
                "bg-origin": [{
                    "bg-origin": ["border", "padding", "content"]
                }],
                "bg-position": [{
                    bg: [...Q(), xT]
                }],
                "bg-repeat": [{
                    bg: ["no-repeat", {
                        repeat: ["", "x", "y", "round", "space"]
                    }]
                }],
                "bg-size": [{
                    bg: ["auto", "cover", "contain", wT]
                }],
                "bg-image": [{
                    bg: ["none", {
                        "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                    }, PT]
                }],
                "bg-color": [{
                    bg: [e]
                }],
                "gradient-from-pos": [{
                    from: [v]
                }],
                "gradient-via-pos": [{
                    via: [v]
                }],
                "gradient-to-pos": [{
                    to: [v]
                }],
                "gradient-from": [{
                    from: [m]
                }],
                "gradient-via": [{
                    via: [m]
                }],
                "gradient-to": [{
                    to: [m]
                }],
                rounded: [{
                    rounded: [o]
                }],
                "rounded-s": [{
                    "rounded-s": [o]
                }],
                "rounded-e": [{
                    "rounded-e": [o]
                }],
                "rounded-t": [{
                    "rounded-t": [o]
                }],
                "rounded-r": [{
                    "rounded-r": [o]
                }],
                "rounded-b": [{
                    "rounded-b": [o]
                }],
                "rounded-l": [{
                    "rounded-l": [o]
                }],
                "rounded-ss": [{
                    "rounded-ss": [o]
                }],
                "rounded-se": [{
                    "rounded-se": [o]
                }],
                "rounded-ee": [{
                    "rounded-ee": [o]
                }],
                "rounded-es": [{
                    "rounded-es": [o]
                }],
                "rounded-tl": [{
                    "rounded-tl": [o]
                }],
                "rounded-tr": [{
                    "rounded-tr": [o]
                }],
                "rounded-br": [{
                    "rounded-br": [o]
                }],
                "rounded-bl": [{
                    "rounded-bl": [o]
                }],
                "border-w": [{
                    border: [a]
                }],
                "border-w-x": [{
                    "border-x": [a]
                }],
                "border-w-y": [{
                    "border-y": [a]
                }],
                "border-w-s": [{
                    "border-s": [a]
                }],
                "border-w-e": [{
                    "border-e": [a]
                }],
                "border-w-t": [{
                    "border-t": [a]
                }],
                "border-w-r": [{
                    "border-r": [a]
                }],
                "border-w-b": [{
                    "border-b": [a]
                }],
                "border-w-l": [{
                    "border-l": [a]
                }],
                "border-opacity": [{
                    "border-opacity": [p]
                }],
                "border-style": [{
                    border: [...$(), "hidden"]
                }],
                "divide-x": [{
                    "divide-x": [a]
                }],
                "divide-x-reverse": ["divide-x-reverse"],
                "divide-y": [{
                    "divide-y": [a]
                }],
                "divide-y-reverse": ["divide-y-reverse"],
                "divide-opacity": [{
                    "divide-opacity": [p]
                }],
                "divide-style": [{
                    divide: $()
                }],
                "border-color": [{
                    border: [i]
                }],
                "border-color-x": [{
                    "border-x": [i]
                }],
                "border-color-y": [{
                    "border-y": [i]
                }],
                "border-color-s": [{
                    "border-s": [i]
                }],
                "border-color-e": [{
                    "border-e": [i]
                }],
                "border-color-t": [{
                    "border-t": [i]
                }],
                "border-color-r": [{
                    "border-r": [i]
                }],
                "border-color-b": [{
                    "border-b": [i]
                }],
                "border-color-l": [{
                    "border-l": [i]
                }],
                "divide-color": [{
                    divide: [i]
                }],
                "outline-style": [{
                    outline: ["", ...$()]
                }],
                "outline-offset": [{
                    "outline-offset": [Ut, z]
                }],
                "outline-w": [{
                    outline: [Ut, un]
                }],
                "outline-color": [{
                    outline: [e]
                }],
                "ring-w": [{
                    ring: H()
                }],
                "ring-w-inset": ["ring-inset"],
                "ring-color": [{
                    ring: [e]
                }],
                "ring-opacity": [{
                    "ring-opacity": [p]
                }],
                "ring-offset-w": [{
                    "ring-offset": [Ut, un]
                }],
                "ring-offset-color": [{
                    "ring-offset": [e]
                }],
                shadow: [{
                    shadow: ["", "inner", "none", cn, CT]
                }],
                "shadow-color": [{
                    shadow: [Oi]
                }],
                opacity: [{
                    opacity: [p]
                }],
                "mix-blend": [{
                    "mix-blend": [...F(), "plus-lighter", "plus-darker"]
                }],
                "bg-blend": [{
                    "bg-blend": F()
                }],
                filter: [{
                    filter: ["", "none"]
                }],
                blur: [{
                    blur: [n]
                }],
                brightness: [{
                    brightness: [r]
                }],
                contrast: [{
                    contrast: [l]
                }],
                "drop-shadow": [{
                    "drop-shadow": ["", "none", cn, z]
                }],
                grayscale: [{
                    grayscale: [u]
                }],
                "hue-rotate": [{
                    "hue-rotate": [c]
                }],
                invert: [{
                    invert: [d]
                }],
                saturate: [{
                    saturate: [g]
                }],
                sepia: [{
                    sepia: [P]
                }],
                "backdrop-filter": [{
                    "backdrop-filter": ["", "none"]
                }],
                "backdrop-blur": [{
                    "backdrop-blur": [n]
                }],
                "backdrop-brightness": [{
                    "backdrop-brightness": [r]
                }],
                "backdrop-contrast": [{
                    "backdrop-contrast": [l]
                }],
                "backdrop-grayscale": [{
                    "backdrop-grayscale": [u]
                }],
                "backdrop-hue-rotate": [{
                    "backdrop-hue-rotate": [c]
                }],
                "backdrop-invert": [{
                    "backdrop-invert": [d]
                }],
                "backdrop-opacity": [{
                    "backdrop-opacity": [p]
                }],
                "backdrop-saturate": [{
                    "backdrop-saturate": [g]
                }],
                "backdrop-sepia": [{
                    "backdrop-sepia": [P]
                }],
                "border-collapse": [{
                    border: ["collapse", "separate"]
                }],
                "border-spacing": [{
                    "border-spacing": [s]
                }],
                "border-spacing-x": [{
                    "border-spacing-x": [s]
                }],
                "border-spacing-y": [{
                    "border-spacing-y": [s]
                }],
                "table-layout": [{
                    table: ["auto", "fixed"]
                }],
                caption: [{
                    caption: ["top", "bottom"]
                }],
                transition: [{
                    transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", z]
                }],
                duration: [{
                    duration: U()
                }],
                ease: [{
                    ease: ["linear", "in", "out", "in-out", z]
                }],
                delay: [{
                    delay: U()
                }],
                animate: [{
                    animate: ["none", "spin", "ping", "pulse", "bounce", z]
                }],
                transform: [{
                    transform: ["", "gpu", "none"]
                }],
                scale: [{
                    scale: [S]
                }],
                "scale-x": [{
                    "scale-x": [S]
                }],
                "scale-y": [{
                    "scale-y": [S]
                }],
                rotate: [{
                    rotate: [Di, z]
                }],
                "translate-x": [{
                    "translate-x": [E]
                }],
                "translate-y": [{
                    "translate-y": [E]
                }],
                "skew-x": [{
                    "skew-x": [T]
                }],
                "skew-y": [{
                    "skew-y": [T]
                }],
                "transform-origin": [{
                    origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", z]
                }],
                accent: [{
                    accent: ["auto", e]
                }],
                appearance: [{
                    appearance: ["none", "auto"]
                }],
                cursor: [{
                    cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", z]
                }],
                "caret-color": [{
                    caret: [e]
                }],
                "pointer-events": [{
                    "pointer-events": ["none", "auto"]
                }],
                resize: [{
                    resize: ["none", "y", "x", ""]
                }],
                "scroll-behavior": [{
                    scroll: ["auto", "smooth"]
                }],
                "scroll-m": [{
                    "scroll-m": j()
                }],
                "scroll-mx": [{
                    "scroll-mx": j()
                }],
                "scroll-my": [{
                    "scroll-my": j()
                }],
                "scroll-ms": [{
                    "scroll-ms": j()
                }],
                "scroll-me": [{
                    "scroll-me": j()
                }],
                "scroll-mt": [{
                    "scroll-mt": j()
                }],
                "scroll-mr": [{
                    "scroll-mr": j()
                }],
                "scroll-mb": [{
                    "scroll-mb": j()
                }],
                "scroll-ml": [{
                    "scroll-ml": j()
                }],
                "scroll-p": [{
                    "scroll-p": j()
                }],
                "scroll-px": [{
                    "scroll-px": j()
                }],
                "scroll-py": [{
                    "scroll-py": j()
                }],
                "scroll-ps": [{
                    "scroll-ps": j()
                }],
                "scroll-pe": [{
                    "scroll-pe": j()
                }],
                "scroll-pt": [{
                    "scroll-pt": j()
                }],
                "scroll-pr": [{
                    "scroll-pr": j()
                }],
                "scroll-pb": [{
                    "scroll-pb": j()
                }],
                "scroll-pl": [{
                    "scroll-pl": j()
                }],
                "snap-align": [{
                    snap: ["start", "end", "center", "align-none"]
                }],
                "snap-stop": [{
                    snap: ["normal", "always"]
                }],
                "snap-type": [{
                    snap: ["none", "x", "y", "both"]
                }],
                "snap-strictness": [{
                    snap: ["mandatory", "proximity"]
                }],
                touch: [{
                    touch: ["auto", "none", "manipulation"]
                }],
                "touch-x": [{
                    "touch-pan": ["x", "left", "right"]
                }],
                "touch-y": [{
                    "touch-pan": ["y", "up", "down"]
                }],
                "touch-pz": ["touch-pinch-zoom"],
                select: [{
                    select: ["none", "text", "all", "auto"]
                }],
                "will-change": [{
                    "will-change": ["auto", "scroll", "contents", "transform", z]
                }],
                fill: [{
                    fill: [e, "none"]
                }],
                "stroke-w": [{
                    stroke: [Ut, un, _l]
                }],
                stroke: [{
                    stroke: [e, "none"]
                }],
                sr: ["sr-only", "not-sr-only"],
                "forced-color-adjust": [{
                    "forced-color-adjust": ["auto", "none"]
                }]
            },
            conflictingClassGroups: {
                overflow: ["overflow-x", "overflow-y"],
                overscroll: ["overscroll-x", "overscroll-y"],
                inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
                "inset-x": ["right", "left"],
                "inset-y": ["top", "bottom"],
                flex: ["basis", "grow", "shrink"],
                gap: ["gap-x", "gap-y"],
                p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
                px: ["pr", "pl"],
                py: ["pt", "pb"],
                m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
                mx: ["mr", "ml"],
                my: ["mt", "mb"],
                size: ["w", "h"],
                "font-size": ["leading"],
                "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
                "fvn-ordinal": ["fvn-normal"],
                "fvn-slashed-zero": ["fvn-normal"],
                "fvn-figure": ["fvn-normal"],
                "fvn-spacing": ["fvn-normal"],
                "fvn-fraction": ["fvn-normal"],
                "line-clamp": ["display", "overflow"],
                rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
                "rounded-s": ["rounded-ss", "rounded-es"],
                "rounded-e": ["rounded-se", "rounded-ee"],
                "rounded-t": ["rounded-tl", "rounded-tr"],
                "rounded-r": ["rounded-tr", "rounded-br"],
                "rounded-b": ["rounded-br", "rounded-bl"],
                "rounded-l": ["rounded-tl", "rounded-bl"],
                "border-spacing": ["border-spacing-x", "border-spacing-y"],
                "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
                "border-w-x": ["border-w-r", "border-w-l"],
                "border-w-y": ["border-w-t", "border-w-b"],
                "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
                "border-color-x": ["border-color-r", "border-color-l"],
                "border-color-y": ["border-color-t", "border-color-b"],
                "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
                "scroll-mx": ["scroll-mr", "scroll-ml"],
                "scroll-my": ["scroll-mt", "scroll-mb"],
                "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
                "scroll-px": ["scroll-pr", "scroll-pl"],
                "scroll-py": ["scroll-pt", "scroll-pb"],
                touch: ["touch-x", "touch-y", "touch-pz"],
                "touch-x": ["touch"],
                "touch-y": ["touch"],
                "touch-pz": ["touch"]
            },
            conflictingClassGroupModifiers: {
                "font-size": ["leading"]
            }
        }
    },
    RT = uT(AT);

function He(...e) {
    return RT($v(e))
}
const bT = zC,
    Xv = w.forwardRef(({
        className: e,
        ...t
    }, n) => C.jsx(_v, {
        ref: n,
        className: He("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]", e),
        ...t
    }));
Xv.displayName = _v.displayName;
const MT = Uv("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full", {
        variants: {
            variant: {
                default: "border bg-background text-foreground",
                destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
            }
        },
        defaultVariants: {
            variant: "default"
        }
    }),
    qv = w.forwardRef(({
        className: e,
        variant: t,
        ...n
    }, r) => C.jsx(jv, {
        ref: r,
        className: He(MT({
            variant: t
        }), e),
        ...n
    }));
qv.displayName = jv.displayName;
const DT = w.forwardRef(({
    className: e,
    ...t
}, n) => C.jsx(Iv, {
    ref: n,
    className: He("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive", e),
    ...t
}));
DT.displayName = Iv.displayName;
const Zv = w.forwardRef(({
    className: e,
    ...t
}, n) => C.jsx(zv, {
    ref: n,
    className: He("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600", e),
    "toast-close": "",
    ...t,
    children: C.jsx(YC, {
        className: "h-4 w-4"
    })
}));
Zv.displayName = zv.displayName;
const Jv = w.forwardRef(({
    className: e,
    ...t
}, n) => C.jsx(Vv, {
    ref: n,
    className: He("text-sm font-semibold", e),
    ...t
}));
Jv.displayName = Vv.displayName;
const e0 = w.forwardRef(({
    className: e,
    ...t
}, n) => C.jsx(Fv, {
    ref: n,
    className: He("text-sm opacity-90", e),
    ...t
}));
e0.displayName = Fv.displayName;

function OT() {
    const {
        toasts: e
    } = XP();
    return C.jsxs(bT, {
        children: [e.map(function({
            id: t,
            title: n,
            description: r,
            action: i,
            ...o
        }) {
            return C.jsxs(qv, { ...o,
                children: [C.jsxs("div", {
                    className: "grid gap-1",
                    children: [n && C.jsx(Jv, {
                        children: n
                    }), r && C.jsx(e0, {
                        children: r
                    })]
                }), i, C.jsx(Zv, {})]
            }, t)
        }), C.jsx(Xv, {})]
    })
}
const LT = ["top", "right", "bottom", "left"],
    Vn = Math.min,
    Qe = Math.max,
    sa = Math.round,
    us = Math.floor,
    jt = e => ({
        x: e,
        y: e
    }),
    NT = {
        left: "right",
        right: "left",
        bottom: "top",
        top: "bottom"
    },
    _T = {
        start: "end",
        end: "start"
    };

function Zu(e, t, n) {
    return Qe(e, Vn(t, n))
}

function rn(e, t) {
    return typeof e == "function" ? e(t) : e
}

function on(e) {
    return e.split("-")[0]
}

function yi(e) {
    return e.split("-")[1]
}

function Ed(e) {
    return e === "x" ? "y" : "x"
}

function kd(e) {
    return e === "y" ? "height" : "width"
}

function Fn(e) {
    return ["top", "bottom"].includes(on(e)) ? "y" : "x"
}

function Ad(e) {
    return Ed(Fn(e))
}

function jT(e, t, n) {
    n === void 0 && (n = !1);
    const r = yi(e),
        i = Ad(e),
        o = kd(i);
    let s = i === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
    return t.reference[o] > t.floating[o] && (s = aa(s)), [s, aa(s)]
}

function VT(e) {
    const t = aa(e);
    return [Ju(e), t, Ju(t)]
}

function Ju(e) {
    return e.replace(/start|end/g, t => _T[t])
}

function FT(e, t, n) {
    const r = ["left", "right"],
        i = ["right", "left"],
        o = ["top", "bottom"],
        s = ["bottom", "top"];
    switch (e) {
        case "top":
        case "bottom":
            return n ? t ? i : r : t ? r : i;
        case "left":
        case "right":
            return t ? o : s;
        default:
            return []
    }
}

function IT(e, t, n, r) {
    const i = yi(e);
    let o = FT(on(e), n === "start", r);
    return i && (o = o.map(s => s + "-" + i), t && (o = o.concat(o.map(Ju)))), o
}

function aa(e) {
    return e.replace(/left|right|bottom|top/g, t => NT[t])
}

function zT(e) {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...e
    }
}

function t0(e) {
    return typeof e != "number" ? zT(e) : {
        top: e,
        right: e,
        bottom: e,
        left: e
    }
}

function la(e) {
    const {
        x: t,
        y: n,
        width: r,
        height: i
    } = e;
    return {
        width: r,
        height: i,
        top: n,
        left: t,
        right: t + r,
        bottom: n + i,
        x: t,
        y: n
    }
}

function Jh(e, t, n) {
    let {
        reference: r,
        floating: i
    } = e;
    const o = Fn(t),
        s = Ad(t),
        a = kd(s),
        l = on(t),
        u = o === "y",
        c = r.x + r.width / 2 - i.width / 2,
        d = r.y + r.height / 2 - i.height / 2,
        f = r[a] / 2 - i[a] / 2;
    let m;
    switch (l) {
        case "top":
            m = {
                x: c,
                y: r.y - i.height
            };
            break;
        case "bottom":
            m = {
                x: c,
                y: r.y + r.height
            };
            break;
        case "right":
            m = {
                x: r.x + r.width,
                y: d
            };
            break;
        case "left":
            m = {
                x: r.x - i.width,
                y: d
            };
            break;
        default:
            m = {
                x: r.x,
                y: r.y
            }
    }
    switch (yi(t)) {
        case "start":
            m[s] -= f * (n && u ? -1 : 1);
            break;
        case "end":
            m[s] += f * (n && u ? -1 : 1);
            break
    }
    return m
}
const BT = async (e, t, n) => {
    const {
        placement: r = "bottom",
        strategy: i = "absolute",
        middleware: o = [],
        platform: s
    } = n, a = o.filter(Boolean), l = await (s.isRTL == null ? void 0 : s.isRTL(t));
    let u = await s.getElementRects({
            reference: e,
            floating: t,
            strategy: i
        }),
        {
            x: c,
            y: d
        } = Jh(u, r, l),
        f = r,
        m = {},
        v = 0;
    for (let y = 0; y < a.length; y++) {
        const {
            name: x,
            fn: p
        } = a[y], {
            x: h,
            y: g,
            data: S,
            reset: P
        } = await p({
            x: c,
            y: d,
            initialPlacement: r,
            placement: f,
            strategy: i,
            middlewareData: m,
            rects: u,
            platform: s,
            elements: {
                reference: e,
                floating: t
            }
        });
        c = h ? ? c, d = g ? ? d, m = { ...m,
            [x]: { ...m[x],
                ...S
            }
        }, P && v <= 50 && (v++, typeof P == "object" && (P.placement && (f = P.placement), P.rects && (u = P.rects === !0 ? await s.getElementRects({
            reference: e,
            floating: t,
            strategy: i
        }) : P.rects), {
            x: c,
            y: d
        } = Jh(u, f, l)), y = -1)
    }
    return {
        x: c,
        y: d,
        placement: f,
        strategy: i,
        middlewareData: m
    }
};
async function Co(e, t) {
    var n;
    t === void 0 && (t = {});
    const {
        x: r,
        y: i,
        platform: o,
        rects: s,
        elements: a,
        strategy: l
    } = e, {
        boundary: u = "clippingAncestors",
        rootBoundary: c = "viewport",
        elementContext: d = "floating",
        altBoundary: f = !1,
        padding: m = 0
    } = rn(t, e), v = t0(m), x = a[f ? d === "floating" ? "reference" : "floating" : d], p = la(await o.getClippingRect({
        element: (n = await (o.isElement == null ? void 0 : o.isElement(x))) == null || n ? x : x.contextElement || await (o.getDocumentElement == null ? void 0 : o.getDocumentElement(a.floating)),
        boundary: u,
        rootBoundary: c,
        strategy: l
    })), h = d === "floating" ? {
        x: r,
        y: i,
        width: s.floating.width,
        height: s.floating.height
    } : s.reference, g = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(a.floating)), S = await (o.isElement == null ? void 0 : o.isElement(g)) ? await (o.getScale == null ? void 0 : o.getScale(g)) || {
        x: 1,
        y: 1
    } : {
        x: 1,
        y: 1
    }, P = la(o.convertOffsetParentRelativeRectToViewportRelativeRect ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({
        elements: a,
        rect: h,
        offsetParent: g,
        strategy: l
    }) : h);
    return {
        top: (p.top - P.top + v.top) / S.y,
        bottom: (P.bottom - p.bottom + v.bottom) / S.y,
        left: (p.left - P.left + v.left) / S.x,
        right: (P.right - p.right + v.right) / S.x
    }
}
const $T = e => ({
        name: "arrow",
        options: e,
        async fn(t) {
            const {
                x: n,
                y: r,
                placement: i,
                rects: o,
                platform: s,
                elements: a,
                middlewareData: l
            } = t, {
                element: u,
                padding: c = 0
            } = rn(e, t) || {};
            if (u == null) return {};
            const d = t0(c),
                f = {
                    x: n,
                    y: r
                },
                m = Ad(i),
                v = kd(m),
                y = await s.getDimensions(u),
                x = m === "y",
                p = x ? "top" : "left",
                h = x ? "bottom" : "right",
                g = x ? "clientHeight" : "clientWidth",
                S = o.reference[v] + o.reference[m] - f[m] - o.floating[v],
                P = f[m] - o.reference[m],
                T = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(u));
            let k = T ? T[g] : 0;
            (!k || !await (s.isElement == null ? void 0 : s.isElement(T))) && (k = a.floating[g] || o.floating[v]);
            const E = S / 2 - P / 2,
                D = k / 2 - y[v] / 2 - 1,
                M = Vn(d[p], D),
                I = Vn(d[h], D),
                j = M,
                H = k - y[v] - I,
                L = k / 2 - y[v] / 2 + E,
                Q = Zu(j, L, H),
                $ = !l.arrow && yi(i) != null && L !== Q && o.reference[v] / 2 - (L < j ? M : I) - y[v] / 2 < 0,
                F = $ ? L < j ? L - j : L - H : 0;
            return {
                [m]: f[m] + F,
                data: {
                    [m]: Q,
                    centerOffset: L - Q - F,
                    ...$ && {
                        alignmentOffset: F
                    }
                },
                reset: $
            }
        }
    }),
    UT = function(e) {
        return e === void 0 && (e = {}), {
            name: "flip",
            options: e,
            async fn(t) {
                var n, r;
                const {
                    placement: i,
                    middlewareData: o,
                    rects: s,
                    initialPlacement: a,
                    platform: l,
                    elements: u
                } = t, {
                    mainAxis: c = !0,
                    crossAxis: d = !0,
                    fallbackPlacements: f,
                    fallbackStrategy: m = "bestFit",
                    fallbackAxisSideDirection: v = "none",
                    flipAlignment: y = !0,
                    ...x
                } = rn(e, t);
                if ((n = o.arrow) != null && n.alignmentOffset) return {};
                const p = on(i),
                    h = Fn(a),
                    g = on(a) === a,
                    S = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)),
                    P = f || (g || !y ? [aa(a)] : VT(a)),
                    T = v !== "none";
                !f && T && P.push(...IT(a, y, v, S));
                const k = [a, ...P],
                    E = await Co(t, x),
                    D = [];
                let M = ((r = o.flip) == null ? void 0 : r.overflows) || [];
                if (c && D.push(E[p]), d) {
                    const L = jT(i, s, S);
                    D.push(E[L[0]], E[L[1]])
                }
                if (M = [...M, {
                        placement: i,
                        overflows: D
                    }], !D.every(L => L <= 0)) {
                    var I, j;
                    const L = (((I = o.flip) == null ? void 0 : I.index) || 0) + 1,
                        Q = k[L];
                    if (Q) return {
                        data: {
                            index: L,
                            overflows: M
                        },
                        reset: {
                            placement: Q
                        }
                    };
                    let $ = (j = M.filter(F => F.overflows[0] <= 0).sort((F, A) => F.overflows[1] - A.overflows[1])[0]) == null ? void 0 : j.placement;
                    if (!$) switch (m) {
                        case "bestFit":
                            {
                                var H;
                                const F = (H = M.filter(A => {
                                    if (T) {
                                        const O = Fn(A.placement);
                                        return O === h || O === "y"
                                    }
                                    return !0
                                }).map(A => [A.placement, A.overflows.filter(O => O > 0).reduce((O, _) => O + _, 0)]).sort((A, O) => A[1] - O[1])[0]) == null ? void 0 : H[0];F && ($ = F);
                                break
                            }
                        case "initialPlacement":
                            $ = a;
                            break
                    }
                    if (i !== $) return {
                        reset: {
                            placement: $
                        }
                    }
                }
                return {}
            }
        }
    };

function ep(e, t) {
    return {
        top: e.top - t.height,
        right: e.right - t.width,
        bottom: e.bottom - t.height,
        left: e.left - t.width
    }
}

function tp(e) {
    return LT.some(t => e[t] >= 0)
}
const WT = function(e) {
    return e === void 0 && (e = {}), {
        name: "hide",
        options: e,
        async fn(t) {
            const {
                rects: n
            } = t, {
                strategy: r = "referenceHidden",
                ...i
            } = rn(e, t);
            switch (r) {
                case "referenceHidden":
                    {
                        const o = await Co(t, { ...i,
                                elementContext: "reference"
                            }),
                            s = ep(o, n.reference);
                        return {
                            data: {
                                referenceHiddenOffsets: s,
                                referenceHidden: tp(s)
                            }
                        }
                    }
                case "escaped":
                    {
                        const o = await Co(t, { ...i,
                                altBoundary: !0
                            }),
                            s = ep(o, n.floating);
                        return {
                            data: {
                                escapedOffsets: s,
                                escaped: tp(s)
                            }
                        }
                    }
                default:
                    return {}
            }
        }
    }
};
async function HT(e, t) {
    const {
        placement: n,
        platform: r,
        elements: i
    } = e, o = await (r.isRTL == null ? void 0 : r.isRTL(i.floating)), s = on(n), a = yi(n), l = Fn(n) === "y", u = ["left", "top"].includes(s) ? -1 : 1, c = o && l ? -1 : 1, d = rn(t, e);
    let {
        mainAxis: f,
        crossAxis: m,
        alignmentAxis: v
    } = typeof d == "number" ? {
        mainAxis: d,
        crossAxis: 0,
        alignmentAxis: null
    } : {
        mainAxis: d.mainAxis || 0,
        crossAxis: d.crossAxis || 0,
        alignmentAxis: d.alignmentAxis
    };
    return a && typeof v == "number" && (m = a === "end" ? v * -1 : v), l ? {
        x: m * c,
        y: f * u
    } : {
        x: f * u,
        y: m * c
    }
}
const KT = function(e) {
        return e === void 0 && (e = 0), {
            name: "offset",
            options: e,
            async fn(t) {
                var n, r;
                const {
                    x: i,
                    y: o,
                    placement: s,
                    middlewareData: a
                } = t, l = await HT(t, e);
                return s === ((n = a.offset) == null ? void 0 : n.placement) && (r = a.arrow) != null && r.alignmentOffset ? {} : {
                    x: i + l.x,
                    y: o + l.y,
                    data: { ...l,
                        placement: s
                    }
                }
            }
        }
    },
    GT = function(e) {
        return e === void 0 && (e = {}), {
            name: "shift",
            options: e,
            async fn(t) {
                const {
                    x: n,
                    y: r,
                    placement: i
                } = t, {
                    mainAxis: o = !0,
                    crossAxis: s = !1,
                    limiter: a = {
                        fn: x => {
                            let {
                                x: p,
                                y: h
                            } = x;
                            return {
                                x: p,
                                y: h
                            }
                        }
                    },
                    ...l
                } = rn(e, t), u = {
                    x: n,
                    y: r
                }, c = await Co(t, l), d = Fn(on(i)), f = Ed(d);
                let m = u[f],
                    v = u[d];
                if (o) {
                    const x = f === "y" ? "top" : "left",
                        p = f === "y" ? "bottom" : "right",
                        h = m + c[x],
                        g = m - c[p];
                    m = Zu(h, m, g)
                }
                if (s) {
                    const x = d === "y" ? "top" : "left",
                        p = d === "y" ? "bottom" : "right",
                        h = v + c[x],
                        g = v - c[p];
                    v = Zu(h, v, g)
                }
                const y = a.fn({ ...t,
                    [f]: m,
                    [d]: v
                });
                return { ...y,
                    data: {
                        x: y.x - n,
                        y: y.y - r,
                        enabled: {
                            [f]: o,
                            [d]: s
                        }
                    }
                }
            }
        }
    },
    QT = function(e) {
        return e === void 0 && (e = {}), {
            options: e,
            fn(t) {
                const {
                    x: n,
                    y: r,
                    placement: i,
                    rects: o,
                    middlewareData: s
                } = t, {
                    offset: a = 0,
                    mainAxis: l = !0,
                    crossAxis: u = !0
                } = rn(e, t), c = {
                    x: n,
                    y: r
                }, d = Fn(i), f = Ed(d);
                let m = c[f],
                    v = c[d];
                const y = rn(a, t),
                    x = typeof y == "number" ? {
                        mainAxis: y,
                        crossAxis: 0
                    } : {
                        mainAxis: 0,
                        crossAxis: 0,
                        ...y
                    };
                if (l) {
                    const g = f === "y" ? "height" : "width",
                        S = o.reference[f] - o.floating[g] + x.mainAxis,
                        P = o.reference[f] + o.reference[g] - x.mainAxis;
                    m < S ? m = S : m > P && (m = P)
                }
                if (u) {
                    var p, h;
                    const g = f === "y" ? "width" : "height",
                        S = ["top", "left"].includes(on(i)),
                        P = o.reference[d] - o.floating[g] + (S && ((p = s.offset) == null ? void 0 : p[d]) || 0) + (S ? 0 : x.crossAxis),
                        T = o.reference[d] + o.reference[g] + (S ? 0 : ((h = s.offset) == null ? void 0 : h[d]) || 0) - (S ? x.crossAxis : 0);
                    v < P ? v = P : v > T && (v = T)
                }
                return {
                    [f]: m,
                    [d]: v
                }
            }
        }
    },
    YT = function(e) {
        return e === void 0 && (e = {}), {
            name: "size",
            options: e,
            async fn(t) {
                var n, r;
                const {
                    placement: i,
                    rects: o,
                    platform: s,
                    elements: a
                } = t, {
                    apply: l = () => {},
                    ...u
                } = rn(e, t), c = await Co(t, u), d = on(i), f = yi(i), m = Fn(i) === "y", {
                    width: v,
                    height: y
                } = o.floating;
                let x, p;
                d === "top" || d === "bottom" ? (x = d, p = f === (await (s.isRTL == null ? void 0 : s.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (p = d, x = f === "end" ? "top" : "bottom");
                const h = y - c.top - c.bottom,
                    g = v - c.left - c.right,
                    S = Vn(y - c[x], h),
                    P = Vn(v - c[p], g),
                    T = !t.middlewareData.shift;
                let k = S,
                    E = P;
                if ((n = t.middlewareData.shift) != null && n.enabled.x && (E = g), (r = t.middlewareData.shift) != null && r.enabled.y && (k = h), T && !f) {
                    const M = Qe(c.left, 0),
                        I = Qe(c.right, 0),
                        j = Qe(c.top, 0),
                        H = Qe(c.bottom, 0);
                    m ? E = v - 2 * (M !== 0 || I !== 0 ? M + I : Qe(c.left, c.right)) : k = y - 2 * (j !== 0 || H !== 0 ? j + H : Qe(c.top, c.bottom))
                }
                await l({ ...t,
                    availableWidth: E,
                    availableHeight: k
                });
                const D = await s.getDimensions(a.floating);
                return v !== D.width || y !== D.height ? {
                    reset: {
                        rects: !0
                    }
                } : {}
            }
        }
    };

function Ua() {
    return typeof window < "u"
}

function vi(e) {
    return n0(e) ? (e.nodeName || "").toLowerCase() : "#document"
}

function qe(e) {
    var t;
    return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window
}

function Bt(e) {
    var t;
    return (t = (n0(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement
}

function n0(e) {
    return Ua() ? e instanceof Node || e instanceof qe(e).Node : !1
}

function Tt(e) {
    return Ua() ? e instanceof Element || e instanceof qe(e).Element : !1
}

function zt(e) {
    return Ua() ? e instanceof HTMLElement || e instanceof qe(e).HTMLElement : !1
}

function np(e) {
    return !Ua() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof qe(e).ShadowRoot
}

function jo(e) {
    const {
        overflow: t,
        overflowX: n,
        overflowY: r,
        display: i
    } = Et(e);
    return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(i)
}

function XT(e) {
    return ["table", "td", "th"].includes(vi(e))
}

function Wa(e) {
    return [":popover-open", ":modal"].some(t => {
        try {
            return e.matches(t)
        } catch {
            return !1
        }
    })
}

function Rd(e) {
    const t = bd(),
        n = Tt(e) ? Et(e) : e;
    return ["transform", "translate", "scale", "rotate", "perspective"].some(r => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some(r => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some(r => (n.contain || "").includes(r))
}

function qT(e) {
    let t = In(e);
    for (; zt(t) && !ui(t);) {
        if (Rd(t)) return t;
        if (Wa(t)) return null;
        t = In(t)
    }
    return null
}

function bd() {
    return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none")
}

function ui(e) {
    return ["html", "body", "#document"].includes(vi(e))
}

function Et(e) {
    return qe(e).getComputedStyle(e)
}

function Ha(e) {
    return Tt(e) ? {
        scrollLeft: e.scrollLeft,
        scrollTop: e.scrollTop
    } : {
        scrollLeft: e.scrollX,
        scrollTop: e.scrollY
    }
}

function In(e) {
    if (vi(e) === "html") return e;
    const t = e.assignedSlot || e.parentNode || np(e) && e.host || Bt(e);
    return np(t) ? t.host : t
}

function r0(e) {
    const t = In(e);
    return ui(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : zt(t) && jo(t) ? t : r0(t)
}

function To(e, t, n) {
    var r;
    t === void 0 && (t = []), n === void 0 && (n = !0);
    const i = r0(e),
        o = i === ((r = e.ownerDocument) == null ? void 0 : r.body),
        s = qe(i);
    if (o) {
        const a = ec(s);
        return t.concat(s, s.visualViewport || [], jo(i) ? i : [], a && n ? To(a) : [])
    }
    return t.concat(i, To(i, [], n))
}

function ec(e) {
    return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null
}

function i0(e) {
    const t = Et(e);
    let n = parseFloat(t.width) || 0,
        r = parseFloat(t.height) || 0;
    const i = zt(e),
        o = i ? e.offsetWidth : n,
        s = i ? e.offsetHeight : r,
        a = sa(n) !== o || sa(r) !== s;
    return a && (n = o, r = s), {
        width: n,
        height: r,
        $: a
    }
}

function Md(e) {
    return Tt(e) ? e : e.contextElement
}

function Hr(e) {
    const t = Md(e);
    if (!zt(t)) return jt(1);
    const n = t.getBoundingClientRect(),
        {
            width: r,
            height: i,
            $: o
        } = i0(t);
    let s = (o ? sa(n.width) : n.width) / r,
        a = (o ? sa(n.height) : n.height) / i;
    return (!s || !Number.isFinite(s)) && (s = 1), (!a || !Number.isFinite(a)) && (a = 1), {
        x: s,
        y: a
    }
}
const ZT = jt(0);

function o0(e) {
    const t = qe(e);
    return !bd() || !t.visualViewport ? ZT : {
        x: t.visualViewport.offsetLeft,
        y: t.visualViewport.offsetTop
    }
}

function JT(e, t, n) {
    return t === void 0 && (t = !1), !n || t && n !== qe(e) ? !1 : t
}

function pr(e, t, n, r) {
    t === void 0 && (t = !1), n === void 0 && (n = !1);
    const i = e.getBoundingClientRect(),
        o = Md(e);
    let s = jt(1);
    t && (r ? Tt(r) && (s = Hr(r)) : s = Hr(e));
    const a = JT(o, n, r) ? o0(o) : jt(0);
    let l = (i.left + a.x) / s.x,
        u = (i.top + a.y) / s.y,
        c = i.width / s.x,
        d = i.height / s.y;
    if (o) {
        const f = qe(o),
            m = r && Tt(r) ? qe(r) : r;
        let v = f,
            y = ec(v);
        for (; y && r && m !== v;) {
            const x = Hr(y),
                p = y.getBoundingClientRect(),
                h = Et(y),
                g = p.left + (y.clientLeft + parseFloat(h.paddingLeft)) * x.x,
                S = p.top + (y.clientTop + parseFloat(h.paddingTop)) * x.y;
            l *= x.x, u *= x.y, c *= x.x, d *= x.y, l += g, u += S, v = qe(y), y = ec(v)
        }
    }
    return la({
        width: c,
        height: d,
        x: l,
        y: u
    })
}

function Dd(e, t) {
    const n = Ha(e).scrollLeft;
    return t ? t.left + n : pr(Bt(e)).left + n
}

function s0(e, t, n) {
    n === void 0 && (n = !1);
    const r = e.getBoundingClientRect(),
        i = r.left + t.scrollLeft - (n ? 0 : Dd(e, r)),
        o = r.top + t.scrollTop;
    return {
        x: i,
        y: o
    }
}

function eE(e) {
    let {
        elements: t,
        rect: n,
        offsetParent: r,
        strategy: i
    } = e;
    const o = i === "fixed",
        s = Bt(r),
        a = t ? Wa(t.floating) : !1;
    if (r === s || a && o) return n;
    let l = {
            scrollLeft: 0,
            scrollTop: 0
        },
        u = jt(1);
    const c = jt(0),
        d = zt(r);
    if ((d || !d && !o) && ((vi(r) !== "body" || jo(s)) && (l = Ha(r)), zt(r))) {
        const m = pr(r);
        u = Hr(r), c.x = m.x + r.clientLeft, c.y = m.y + r.clientTop
    }
    const f = s && !d && !o ? s0(s, l, !0) : jt(0);
    return {
        width: n.width * u.x,
        height: n.height * u.y,
        x: n.x * u.x - l.scrollLeft * u.x + c.x + f.x,
        y: n.y * u.y - l.scrollTop * u.y + c.y + f.y
    }
}

function tE(e) {
    return Array.from(e.getClientRects())
}

function nE(e) {
    const t = Bt(e),
        n = Ha(e),
        r = e.ownerDocument.body,
        i = Qe(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
        o = Qe(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
    let s = -n.scrollLeft + Dd(e);
    const a = -n.scrollTop;
    return Et(r).direction === "rtl" && (s += Qe(t.clientWidth, r.clientWidth) - i), {
        width: i,
        height: o,
        x: s,
        y: a
    }
}

function rE(e, t) {
    const n = qe(e),
        r = Bt(e),
        i = n.visualViewport;
    let o = r.clientWidth,
        s = r.clientHeight,
        a = 0,
        l = 0;
    if (i) {
        o = i.width, s = i.height;
        const u = bd();
        (!u || u && t === "fixed") && (a = i.offsetLeft, l = i.offsetTop)
    }
    return {
        width: o,
        height: s,
        x: a,
        y: l
    }
}

function iE(e, t) {
    const n = pr(e, !0, t === "fixed"),
        r = n.top + e.clientTop,
        i = n.left + e.clientLeft,
        o = zt(e) ? Hr(e) : jt(1),
        s = e.clientWidth * o.x,
        a = e.clientHeight * o.y,
        l = i * o.x,
        u = r * o.y;
    return {
        width: s,
        height: a,
        x: l,
        y: u
    }
}

function rp(e, t, n) {
    let r;
    if (t === "viewport") r = rE(e, n);
    else if (t === "document") r = nE(Bt(e));
    else if (Tt(t)) r = iE(t, n);
    else {
        const i = o0(e);
        r = {
            x: t.x - i.x,
            y: t.y - i.y,
            width: t.width,
            height: t.height
        }
    }
    return la(r)
}

function a0(e, t) {
    const n = In(e);
    return n === t || !Tt(n) || ui(n) ? !1 : Et(n).position === "fixed" || a0(n, t)
}

function oE(e, t) {
    const n = t.get(e);
    if (n) return n;
    let r = To(e, [], !1).filter(a => Tt(a) && vi(a) !== "body"),
        i = null;
    const o = Et(e).position === "fixed";
    let s = o ? In(e) : e;
    for (; Tt(s) && !ui(s);) {
        const a = Et(s),
            l = Rd(s);
        !l && a.position === "fixed" && (i = null), (o ? !l && !i : !l && a.position === "static" && !!i && ["absolute", "fixed"].includes(i.position) || jo(s) && !l && a0(e, s)) ? r = r.filter(c => c !== s) : i = a, s = In(s)
    }
    return t.set(e, r), r
}

function sE(e) {
    let {
        element: t,
        boundary: n,
        rootBoundary: r,
        strategy: i
    } = e;
    const s = [...n === "clippingAncestors" ? Wa(t) ? [] : oE(t, this._c) : [].concat(n), r],
        a = s[0],
        l = s.reduce((u, c) => {
            const d = rp(t, c, i);
            return u.top = Qe(d.top, u.top), u.right = Vn(d.right, u.right), u.bottom = Vn(d.bottom, u.bottom), u.left = Qe(d.left, u.left), u
        }, rp(t, a, i));
    return {
        width: l.right - l.left,
        height: l.bottom - l.top,
        x: l.left,
        y: l.top
    }
}

function aE(e) {
    const {
        width: t,
        height: n
    } = i0(e);
    return {
        width: t,
        height: n
    }
}

function lE(e, t, n) {
    const r = zt(t),
        i = Bt(t),
        o = n === "fixed",
        s = pr(e, !0, o, t);
    let a = {
        scrollLeft: 0,
        scrollTop: 0
    };
    const l = jt(0);
    if (r || !r && !o)
        if ((vi(t) !== "body" || jo(i)) && (a = Ha(t)), r) {
            const f = pr(t, !0, o, t);
            l.x = f.x + t.clientLeft, l.y = f.y + t.clientTop
        } else i && (l.x = Dd(i));
    const u = i && !r && !o ? s0(i, a) : jt(0),
        c = s.left + a.scrollLeft - l.x - u.x,
        d = s.top + a.scrollTop - l.y - u.y;
    return {
        x: c,
        y: d,
        width: s.width,
        height: s.height
    }
}

function jl(e) {
    return Et(e).position === "static"
}

function ip(e, t) {
    if (!zt(e) || Et(e).position === "fixed") return null;
    if (t) return t(e);
    let n = e.offsetParent;
    return Bt(e) === n && (n = n.ownerDocument.body), n
}

function l0(e, t) {
    const n = qe(e);
    if (Wa(e)) return n;
    if (!zt(e)) {
        let i = In(e);
        for (; i && !ui(i);) {
            if (Tt(i) && !jl(i)) return i;
            i = In(i)
        }
        return n
    }
    let r = ip(e, t);
    for (; r && XT(r) && jl(r);) r = ip(r, t);
    return r && ui(r) && jl(r) && !Rd(r) ? n : r || qT(e) || n
}
const uE = async function(e) {
    const t = this.getOffsetParent || l0,
        n = this.getDimensions,
        r = await n(e.floating);
    return {
        reference: lE(e.reference, await t(e.floating), e.strategy),
        floating: {
            x: 0,
            y: 0,
            width: r.width,
            height: r.height
        }
    }
};

function cE(e) {
    return Et(e).direction === "rtl"
}
const dE = {
    convertOffsetParentRelativeRectToViewportRelativeRect: eE,
    getDocumentElement: Bt,
    getClippingRect: sE,
    getOffsetParent: l0,
    getElementRects: uE,
    getClientRects: tE,
    getDimensions: aE,
    getScale: Hr,
    isElement: Tt,
    isRTL: cE
};

function u0(e, t) {
    return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
}

function fE(e, t) {
    let n = null,
        r;
    const i = Bt(e);

    function o() {
        var a;
        clearTimeout(r), (a = n) == null || a.disconnect(), n = null
    }

    function s(a, l) {
        a === void 0 && (a = !1), l === void 0 && (l = 1), o();
        const u = e.getBoundingClientRect(),
            {
                left: c,
                top: d,
                width: f,
                height: m
            } = u;
        if (a || t(), !f || !m) return;
        const v = us(d),
            y = us(i.clientWidth - (c + f)),
            x = us(i.clientHeight - (d + m)),
            p = us(c),
            g = {
                rootMargin: -v + "px " + -y + "px " + -x + "px " + -p + "px",
                threshold: Qe(0, Vn(1, l)) || 1
            };
        let S = !0;

        function P(T) {
            const k = T[0].intersectionRatio;
            if (k !== l) {
                if (!S) return s();
                k ? s(!1, k) : r = setTimeout(() => {
                    s(!1, 1e-7)
                }, 1e3)
            }
            k === 1 && !u0(u, e.getBoundingClientRect()) && s(), S = !1
        }
        try {
            n = new IntersectionObserver(P, { ...g,
                root: i.ownerDocument
            })
        } catch {
            n = new IntersectionObserver(P, g)
        }
        n.observe(e)
    }
    return s(!0), o
}

function hE(e, t, n, r) {
    r === void 0 && (r = {});
    const {
        ancestorScroll: i = !0,
        ancestorResize: o = !0,
        elementResize: s = typeof ResizeObserver == "function",
        layoutShift: a = typeof IntersectionObserver == "function",
        animationFrame: l = !1
    } = r, u = Md(e), c = i || o ? [...u ? To(u) : [], ...To(t)] : [];
    c.forEach(p => {
        i && p.addEventListener("scroll", n, {
            passive: !0
        }), o && p.addEventListener("resize", n)
    });
    const d = u && a ? fE(u, n) : null;
    let f = -1,
        m = null;
    s && (m = new ResizeObserver(p => {
        let [h] = p;
        h && h.target === u && m && (m.unobserve(t), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
            var g;
            (g = m) == null || g.observe(t)
        })), n()
    }), u && !l && m.observe(u), m.observe(t));
    let v, y = l ? pr(e) : null;
    l && x();

    function x() {
        const p = pr(e);
        y && !u0(y, p) && n(), y = p, v = requestAnimationFrame(x)
    }
    return n(), () => {
        var p;
        c.forEach(h => {
            i && h.removeEventListener("scroll", n), o && h.removeEventListener("resize", n)
        }), d == null || d(), (p = m) == null || p.disconnect(), m = null, l && cancelAnimationFrame(v)
    }
}
const pE = KT,
    mE = GT,
    gE = UT,
    yE = YT,
    vE = WT,
    op = $T,
    wE = QT,
    xE = (e, t, n) => {
        const r = new Map,
            i = {
                platform: dE,
                ...n
            },
            o = { ...i.platform,
                _c: r
            };
        return BT(e, t, { ...i,
            platform: o
        })
    };
var Rs = typeof document < "u" ? w.useLayoutEffect : w.useEffect;

function ua(e, t) {
    if (e === t) return !0;
    if (typeof e != typeof t) return !1;
    if (typeof e == "function" && e.toString() === t.toString()) return !0;
    let n, r, i;
    if (e && t && typeof e == "object") {
        if (Array.isArray(e)) {
            if (n = e.length, n !== t.length) return !1;
            for (r = n; r-- !== 0;)
                if (!ua(e[r], t[r])) return !1;
            return !0
        }
        if (i = Object.keys(e), n = i.length, n !== Object.keys(t).length) return !1;
        for (r = n; r-- !== 0;)
            if (!{}.hasOwnProperty.call(t, i[r])) return !1;
        for (r = n; r-- !== 0;) {
            const o = i[r];
            if (!(o === "_owner" && e.$$typeof) && !ua(e[o], t[o])) return !1
        }
        return !0
    }
    return e !== e && t !== t
}

function c0(e) {
    return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
}

function sp(e, t) {
    const n = c0(e);
    return Math.round(t * n) / n
}

function Vl(e) {
    const t = w.useRef(e);
    return Rs(() => {
        t.current = e
    }), t
}

function SE(e) {
    e === void 0 && (e = {});
    const {
        placement: t = "bottom",
        strategy: n = "absolute",
        middleware: r = [],
        platform: i,
        elements: {
            reference: o,
            floating: s
        } = {},
        transform: a = !0,
        whileElementsMounted: l,
        open: u
    } = e, [c, d] = w.useState({
        x: 0,
        y: 0,
        strategy: n,
        placement: t,
        middlewareData: {},
        isPositioned: !1
    }), [f, m] = w.useState(r);
    ua(f, r) || m(r);
    const [v, y] = w.useState(null), [x, p] = w.useState(null), h = w.useCallback(A => {
        A !== T.current && (T.current = A, y(A))
    }, []), g = w.useCallback(A => {
        A !== k.current && (k.current = A, p(A))
    }, []), S = o || v, P = s || x, T = w.useRef(null), k = w.useRef(null), E = w.useRef(c), D = l != null, M = Vl(l), I = Vl(i), j = Vl(u), H = w.useCallback(() => {
        if (!T.current || !k.current) return;
        const A = {
            placement: t,
            strategy: n,
            middleware: f
        };
        I.current && (A.platform = I.current), xE(T.current, k.current, A).then(O => {
            const _ = { ...O,
                isPositioned: j.current !== !1
            };
            L.current && !ua(E.current, _) && (E.current = _, _o.flushSync(() => {
                d(_)
            }))
        })
    }, [f, t, n, I, j]);
    Rs(() => {
        u === !1 && E.current.isPositioned && (E.current.isPositioned = !1, d(A => ({ ...A,
            isPositioned: !1
        })))
    }, [u]);
    const L = w.useRef(!1);
    Rs(() => (L.current = !0, () => {
        L.current = !1
    }), []), Rs(() => {
        if (S && (T.current = S), P && (k.current = P), S && P) {
            if (M.current) return M.current(S, P, H);
            H()
        }
    }, [S, P, H, M, D]);
    const Q = w.useMemo(() => ({
            reference: T,
            floating: k,
            setReference: h,
            setFloating: g
        }), [h, g]),
        $ = w.useMemo(() => ({
            reference: S,
            floating: P
        }), [S, P]),
        F = w.useMemo(() => {
            const A = {
                position: n,
                left: 0,
                top: 0
            };
            if (!$.floating) return A;
            const O = sp($.floating, c.x),
                _ = sp($.floating, c.y);
            return a ? { ...A,
                transform: "translate(" + O + "px, " + _ + "px)",
                ...c0($.floating) >= 1.5 && {
                    willChange: "transform"
                }
            } : {
                position: n,
                left: O,
                top: _
            }
        }, [n, a, $.floating, c.x, c.y]);
    return w.useMemo(() => ({ ...c,
        update: H,
        refs: Q,
        elements: $,
        floatingStyles: F
    }), [c, H, Q, $, F])
}
const PE = e => {
        function t(n) {
            return {}.hasOwnProperty.call(n, "current")
        }
        return {
            name: "arrow",
            options: e,
            fn(n) {
                const {
                    element: r,
                    padding: i
                } = typeof e == "function" ? e(n) : e;
                return r && t(r) ? r.current != null ? op({
                    element: r.current,
                    padding: i
                }).fn(n) : {} : r ? op({
                    element: r,
                    padding: i
                }).fn(n) : {}
            }
        }
    },
    CE = (e, t) => ({ ...pE(e),
        options: [e, t]
    }),
    TE = (e, t) => ({ ...mE(e),
        options: [e, t]
    }),
    EE = (e, t) => ({ ...wE(e),
        options: [e, t]
    }),
    kE = (e, t) => ({ ...gE(e),
        options: [e, t]
    }),
    AE = (e, t) => ({ ...yE(e),
        options: [e, t]
    }),
    RE = (e, t) => ({ ...vE(e),
        options: [e, t]
    }),
    bE = (e, t) => ({ ...PE(e),
        options: [e, t]
    });
var ME = "Arrow",
    d0 = w.forwardRef((e, t) => {
        const {
            children: n,
            width: r = 10,
            height: i = 5,
            ...o
        } = e;
        return C.jsx(We.svg, { ...o,
            ref: t,
            width: r,
            height: i,
            viewBox: "0 0 30 10",
            preserveAspectRatio: "none",
            children: e.asChild ? n : C.jsx("polygon", {
                points: "0,0 30,0 15,10"
            })
        })
    });
d0.displayName = ME;
var DE = d0;

function OE(e) {
    const [t, n] = w.useState(void 0);
    return hr(() => {
        if (e) {
            n({
                width: e.offsetWidth,
                height: e.offsetHeight
            });
            const r = new ResizeObserver(i => {
                if (!Array.isArray(i) || !i.length) return;
                const o = i[0];
                let s, a;
                if ("borderBoxSize" in o) {
                    const l = o.borderBoxSize,
                        u = Array.isArray(l) ? l[0] : l;
                    s = u.inlineSize, a = u.blockSize
                } else s = e.offsetWidth, a = e.offsetHeight;
                n({
                    width: s,
                    height: a
                })
            });
            return r.observe(e, {
                box: "border-box"
            }), () => r.unobserve(e)
        } else n(void 0)
    }, [e]), t
}
var f0 = "Popper",
    [h0, p0] = Ia(f0),
    [OM, m0] = h0(f0),
    g0 = "PopperAnchor",
    y0 = w.forwardRef((e, t) => {
        const {
            __scopePopper: n,
            virtualRef: r,
            ...i
        } = e, o = m0(g0, n), s = w.useRef(null), a = Ct(t, s);
        return w.useEffect(() => {
            o.onAnchorChange((r == null ? void 0 : r.current) || s.current)
        }), r ? null : C.jsx(We.div, { ...i,
            ref: a
        })
    });
y0.displayName = g0;
var Od = "PopperContent",
    [LE, NE] = h0(Od),
    v0 = w.forwardRef((e, t) => {
        var Hn, mf, gf, yf, vf, wf;
        const {
            __scopePopper: n,
            side: r = "bottom",
            sideOffset: i = 0,
            align: o = "center",
            alignOffset: s = 0,
            arrowPadding: a = 0,
            avoidCollisions: l = !0,
            collisionBoundary: u = [],
            collisionPadding: c = 0,
            sticky: d = "partial",
            hideWhenDetached: f = !1,
            updatePositionStrategy: m = "optimized",
            onPlaced: v,
            ...y
        } = e, x = m0(Od, n), [p, h] = w.useState(null), g = Ct(t, Pi => h(Pi)), [S, P] = w.useState(null), T = OE(S), k = (T == null ? void 0 : T.width) ? ? 0, E = (T == null ? void 0 : T.height) ? ? 0, D = r + (o !== "center" ? "-" + o : ""), M = typeof c == "number" ? c : {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            ...c
        }, I = Array.isArray(u) ? u : [u], j = I.length > 0, H = {
            padding: M,
            boundary: I.filter(jE),
            altBoundary: j
        }, {
            refs: L,
            floatingStyles: Q,
            placement: $,
            isPositioned: F,
            middlewareData: A
        } = SE({
            strategy: "fixed",
            placement: D,
            whileElementsMounted: (...Pi) => hE(...Pi, {
                animationFrame: m === "always"
            }),
            elements: {
                reference: x.anchor
            },
            middleware: [CE({
                mainAxis: i + E,
                alignmentAxis: s
            }), l && TE({
                mainAxis: !0,
                crossAxis: !1,
                limiter: d === "partial" ? EE() : void 0,
                ...H
            }), l && kE({ ...H
            }), AE({ ...H,
                apply: ({
                    elements: Pi,
                    rects: xf,
                    availableWidth: c1,
                    availableHeight: d1
                }) => {
                    const {
                        width: f1,
                        height: h1
                    } = xf.reference, Bo = Pi.floating.style;
                    Bo.setProperty("--radix-popper-available-width", `${c1}px`), Bo.setProperty("--radix-popper-available-height", `${d1}px`), Bo.setProperty("--radix-popper-anchor-width", `${f1}px`), Bo.setProperty("--radix-popper-anchor-height", `${h1}px`)
                }
            }), S && bE({
                element: S,
                padding: a
            }), VE({
                arrowWidth: k,
                arrowHeight: E
            }), f && RE({
                strategy: "referenceHidden",
                ...H
            })]
        }), [O, _] = S0($), U = It(v);
        hr(() => {
            F && (U == null || U())
        }, [F, U]);
        const te = (Hn = A.arrow) == null ? void 0 : Hn.x,
            ft = (mf = A.arrow) == null ? void 0 : mf.y,
            nt = ((gf = A.arrow) == null ? void 0 : gf.centerOffset) !== 0,
            [Si, $t] = w.useState();
        return hr(() => {
            p && $t(window.getComputedStyle(p).zIndex)
        }, [p]), C.jsx("div", {
            ref: L.setFloating,
            "data-radix-popper-content-wrapper": "",
            style: { ...Q,
                transform: F ? Q.transform : "translate(0, -200%)",
                minWidth: "max-content",
                zIndex: Si,
                "--radix-popper-transform-origin": [(yf = A.transformOrigin) == null ? void 0 : yf.x, (vf = A.transformOrigin) == null ? void 0 : vf.y].join(" "),
                ...((wf = A.hide) == null ? void 0 : wf.referenceHidden) && {
                    visibility: "hidden",
                    pointerEvents: "none"
                }
            },
            dir: e.dir,
            children: C.jsx(LE, {
                scope: n,
                placedSide: O,
                onArrowChange: P,
                arrowX: te,
                arrowY: ft,
                shouldHideArrow: nt,
                children: C.jsx(We.div, {
                    "data-side": O,
                    "data-align": _,
                    ...y,
                    ref: g,
                    style: { ...y.style,
                        animation: F ? void 0 : "none"
                    }
                })
            })
        })
    });
v0.displayName = Od;
var w0 = "PopperArrow",
    _E = {
        top: "bottom",
        right: "left",
        bottom: "top",
        left: "right"
    },
    x0 = w.forwardRef(function(t, n) {
        const {
            __scopePopper: r,
            ...i
        } = t, o = NE(w0, r), s = _E[o.placedSide];
        return C.jsx("span", {
            ref: o.onArrowChange,
            style: {
                position: "absolute",
                left: o.arrowX,
                top: o.arrowY,
                [s]: 0,
                transformOrigin: {
                    top: "",
                    right: "0 0",
                    bottom: "center 0",
                    left: "100% 0"
                }[o.placedSide],
                transform: {
                    top: "translateY(100%)",
                    right: "translateY(50%) rotate(90deg) translateX(-50%)",
                    bottom: "rotate(180deg)",
                    left: "translateY(50%) rotate(-90deg) translateX(50%)"
                }[o.placedSide],
                visibility: o.shouldHideArrow ? "hidden" : void 0
            },
            children: C.jsx(DE, { ...i,
                ref: n,
                style: { ...i.style,
                    display: "block"
                }
            })
        })
    });
x0.displayName = w0;

function jE(e) {
    return e !== null
}
var VE = e => ({
    name: "transformOrigin",
    options: e,
    fn(t) {
        var x, p, h;
        const {
            placement: n,
            rects: r,
            middlewareData: i
        } = t, s = ((x = i.arrow) == null ? void 0 : x.centerOffset) !== 0, a = s ? 0 : e.arrowWidth, l = s ? 0 : e.arrowHeight, [u, c] = S0(n), d = {
            start: "0%",
            center: "50%",
            end: "100%"
        }[c], f = (((p = i.arrow) == null ? void 0 : p.x) ? ? 0) + a / 2, m = (((h = i.arrow) == null ? void 0 : h.y) ? ? 0) + l / 2;
        let v = "",
            y = "";
        return u === "bottom" ? (v = s ? d : `${f}px`, y = `${-l}px`) : u === "top" ? (v = s ? d : `${f}px`, y = `${r.floating.height+l}px`) : u === "right" ? (v = `${-l}px`, y = s ? d : `${m}px`) : u === "left" && (v = `${r.floating.width+l}px`, y = s ? d : `${m}px`), {
            data: {
                x: v,
                y
            }
        }
    }
});

function S0(e) {
    const [t, n = "center"] = e.split("-");
    return [t, n]
}
var FE = y0,
    IE = v0,
    zE = x0,
    [Ka, LM] = Ia("Tooltip", [p0]),
    Ld = p0(),
    P0 = "TooltipProvider",
    BE = 700,
    ap = "tooltip.open",
    [$E, C0] = Ka(P0),
    T0 = e => {
        const {
            __scopeTooltip: t,
            delayDuration: n = BE,
            skipDelayDuration: r = 300,
            disableHoverableContent: i = !1,
            children: o
        } = e, s = w.useRef(!0), a = w.useRef(!1), l = w.useRef(0);
        return w.useEffect(() => {
            const u = l.current;
            return () => window.clearTimeout(u)
        }, []), C.jsx($E, {
            scope: t,
            isOpenDelayedRef: s,
            delayDuration: n,
            onOpen: w.useCallback(() => {
                window.clearTimeout(l.current), s.current = !1
            }, []),
            onClose: w.useCallback(() => {
                window.clearTimeout(l.current), l.current = window.setTimeout(() => s.current = !0, r)
            }, [r]),
            isPointerInTransitRef: a,
            onPointerInTransitChange: w.useCallback(u => {
                a.current = u
            }, []),
            disableHoverableContent: i,
            children: o
        })
    };
T0.displayName = P0;
var E0 = "Tooltip",
    [NM, Ga] = Ka(E0),
    tc = "TooltipTrigger",
    UE = w.forwardRef((e, t) => {
        const {
            __scopeTooltip: n,
            ...r
        } = e, i = Ga(tc, n), o = C0(tc, n), s = Ld(n), a = w.useRef(null), l = Ct(t, a, i.onTriggerChange), u = w.useRef(!1), c = w.useRef(!1), d = w.useCallback(() => u.current = !1, []);
        return w.useEffect(() => () => document.removeEventListener("pointerup", d), [d]), C.jsx(FE, {
            asChild: !0,
            ...s,
            children: C.jsx(We.button, {
                "aria-describedby": i.open ? i.contentId : void 0,
                "data-state": i.stateAttribute,
                ...r,
                ref: l,
                onPointerMove: pe(e.onPointerMove, f => {
                    f.pointerType !== "touch" && !c.current && !o.isPointerInTransitRef.current && (i.onTriggerEnter(), c.current = !0)
                }),
                onPointerLeave: pe(e.onPointerLeave, () => {
                    i.onTriggerLeave(), c.current = !1
                }),
                onPointerDown: pe(e.onPointerDown, () => {
                    i.open && i.onClose(), u.current = !0, document.addEventListener("pointerup", d, {
                        once: !0
                    })
                }),
                onFocus: pe(e.onFocus, () => {
                    u.current || i.onOpen()
                }),
                onBlur: pe(e.onBlur, i.onClose),
                onClick: pe(e.onClick, i.onClose)
            })
        })
    });
UE.displayName = tc;
var WE = "TooltipPortal",
    [_M, HE] = Ka(WE, {
        forceMount: void 0
    }),
    ci = "TooltipContent",
    k0 = w.forwardRef((e, t) => {
        const n = HE(ci, e.__scopeTooltip),
            {
                forceMount: r = n.forceMount,
                side: i = "top",
                ...o
            } = e,
            s = Ga(ci, e.__scopeTooltip);
        return C.jsx(xd, {
            present: r || s.open,
            children: s.disableHoverableContent ? C.jsx(A0, {
                side: i,
                ...o,
                ref: t
            }) : C.jsx(KE, {
                side: i,
                ...o,
                ref: t
            })
        })
    }),
    KE = w.forwardRef((e, t) => {
        const n = Ga(ci, e.__scopeTooltip),
            r = C0(ci, e.__scopeTooltip),
            i = w.useRef(null),
            o = Ct(t, i),
            [s, a] = w.useState(null),
            {
                trigger: l,
                onClose: u
            } = n,
            c = i.current,
            {
                onPointerInTransitChange: d
            } = r,
            f = w.useCallback(() => {
                a(null), d(!1)
            }, [d]),
            m = w.useCallback((v, y) => {
                const x = v.currentTarget,
                    p = {
                        x: v.clientX,
                        y: v.clientY
                    },
                    h = qE(p, x.getBoundingClientRect()),
                    g = ZE(p, h),
                    S = JE(y.getBoundingClientRect()),
                    P = tk([...g, ...S]);
                a(P), d(!0)
            }, [d]);
        return w.useEffect(() => () => f(), [f]), w.useEffect(() => {
            if (l && c) {
                const v = x => m(x, c),
                    y = x => m(x, l);
                return l.addEventListener("pointerleave", v), c.addEventListener("pointerleave", y), () => {
                    l.removeEventListener("pointerleave", v), c.removeEventListener("pointerleave", y)
                }
            }
        }, [l, c, m, f]), w.useEffect(() => {
            if (s) {
                const v = y => {
                    const x = y.target,
                        p = {
                            x: y.clientX,
                            y: y.clientY
                        },
                        h = (l == null ? void 0 : l.contains(x)) || (c == null ? void 0 : c.contains(x)),
                        g = !ek(p, s);
                    h ? f() : g && (f(), u())
                };
                return document.addEventListener("pointermove", v), () => document.removeEventListener("pointermove", v)
            }
        }, [l, c, s, u, f]), C.jsx(A0, { ...e,
            ref: o
        })
    }),
    [GE, QE] = Ka(E0, {
        isInside: !1
    }),
    YE = eC("TooltipContent"),
    A0 = w.forwardRef((e, t) => {
        const {
            __scopeTooltip: n,
            children: r,
            "aria-label": i,
            onEscapeKeyDown: o,
            onPointerDownOutside: s,
            ...a
        } = e, l = Ga(ci, n), u = Ld(n), {
            onClose: c
        } = l;
        return w.useEffect(() => (document.addEventListener(ap, c), () => document.removeEventListener(ap, c)), [c]), w.useEffect(() => {
            if (l.trigger) {
                const d = f => {
                    const m = f.target;
                    m != null && m.contains(l.trigger) && c()
                };
                return window.addEventListener("scroll", d, {
                    capture: !0
                }), () => window.removeEventListener("scroll", d, {
                    capture: !0
                })
            }
        }, [l.trigger, c]), C.jsx(wd, {
            asChild: !0,
            disableOutsidePointerEvents: !1,
            onEscapeKeyDown: o,
            onPointerDownOutside: s,
            onFocusOutside: d => d.preventDefault(),
            onDismiss: c,
            children: C.jsxs(IE, {
                "data-state": l.stateAttribute,
                ...u,
                ...a,
                ref: t,
                style: { ...a.style,
                    "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
                    "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
                    "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
                    "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
                    "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
                },
                children: [C.jsx(YE, {
                    children: r
                }), C.jsx(GE, {
                    scope: n,
                    isInside: !0,
                    children: C.jsx(PC, {
                        id: l.contentId,
                        role: "tooltip",
                        children: i || r
                    })
                })]
            })
        })
    });
k0.displayName = ci;
var R0 = "TooltipArrow",
    XE = w.forwardRef((e, t) => {
        const {
            __scopeTooltip: n,
            ...r
        } = e, i = Ld(n);
        return QE(R0, n).isInside ? null : C.jsx(zE, { ...i,
            ...r,
            ref: t
        })
    });
XE.displayName = R0;

function qE(e, t) {
    const n = Math.abs(t.top - e.y),
        r = Math.abs(t.bottom - e.y),
        i = Math.abs(t.right - e.x),
        o = Math.abs(t.left - e.x);
    switch (Math.min(n, r, i, o)) {
        case o:
            return "left";
        case i:
            return "right";
        case n:
            return "top";
        case r:
            return "bottom";
        default:
            throw new Error("unreachable")
    }
}

function ZE(e, t, n = 5) {
    const r = [];
    switch (t) {
        case "top":
            r.push({
                x: e.x - n,
                y: e.y + n
            }, {
                x: e.x + n,
                y: e.y + n
            });
            break;
        case "bottom":
            r.push({
                x: e.x - n,
                y: e.y - n
            }, {
                x: e.x + n,
                y: e.y - n
            });
            break;
        case "left":
            r.push({
                x: e.x + n,
                y: e.y - n
            }, {
                x: e.x + n,
                y: e.y + n
            });
            break;
        case "right":
            r.push({
                x: e.x - n,
                y: e.y - n
            }, {
                x: e.x - n,
                y: e.y + n
            });
            break
    }
    return r
}

function JE(e) {
    const {
        top: t,
        right: n,
        bottom: r,
        left: i
    } = e;
    return [{
        x: i,
        y: t
    }, {
        x: n,
        y: t
    }, {
        x: n,
        y: r
    }, {
        x: i,
        y: r
    }]
}

function ek(e, t) {
    const {
        x: n,
        y: r
    } = e;
    let i = !1;
    for (let o = 0, s = t.length - 1; o < t.length; s = o++) {
        const a = t[o].x,
            l = t[o].y,
            u = t[s].x,
            c = t[s].y;
        l > r != c > r && n < (u - a) * (r - l) / (c - l) + a && (i = !i)
    }
    return i
}

function tk(e) {
    const t = e.slice();
    return t.sort((n, r) => n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0), nk(t)
}

function nk(e) {
    if (e.length <= 1) return e.slice();
    const t = [];
    for (let r = 0; r < e.length; r++) {
        const i = e[r];
        for (; t.length >= 2;) {
            const o = t[t.length - 1],
                s = t[t.length - 2];
            if ((o.x - s.x) * (i.y - s.y) >= (o.y - s.y) * (i.x - s.x)) t.pop();
            else break
        }
        t.push(i)
    }
    t.pop();
    const n = [];
    for (let r = e.length - 1; r >= 0; r--) {
        const i = e[r];
        for (; n.length >= 2;) {
            const o = n[n.length - 1],
                s = n[n.length - 2];
            if ((o.x - s.x) * (i.y - s.y) >= (o.y - s.y) * (i.x - s.x)) n.pop();
            else break
        }
        n.push(i)
    }
    return n.pop(), t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n)
}
var rk = T0,
    b0 = k0;
const ik = rk,
    ok = w.forwardRef(({
        className: e,
        sideOffset: t = 4,
        ...n
    }, r) => C.jsx(b0, {
        ref: r,
        sideOffset: t,
        className: He("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-tooltip-content-transform-origin]", e),
        ...n
    }));
ok.displayName = b0.displayName;

function sk(e) {
    if (typeof Proxy > "u") return e;
    const t = new Map,
        n = (...r) => e(...r);
    return new Proxy(n, {
        get: (r, i) => i === "create" ? e : (t.has(i) || t.set(i, e(i)), t.get(i))
    })
}

function Qa(e) {
    return e !== null && typeof e == "object" && typeof e.start == "function"
}
const nc = e => Array.isArray(e);

function M0(e, t) {
    if (!Array.isArray(t)) return !1;
    const n = t.length;
    if (n !== e.length) return !1;
    for (let r = 0; r < n; r++)
        if (t[r] !== e[r]) return !1;
    return !0
}

function Eo(e) {
    return typeof e == "string" || Array.isArray(e)
}

function lp(e) {
    const t = [{}, {}];
    return e == null || e.values.forEach((n, r) => {
        t[0][r] = n.get(), t[1][r] = n.getVelocity()
    }), t
}

function Nd(e, t, n, r) {
    if (typeof t == "function") {
        const [i, o] = lp(r);
        t = t(n !== void 0 ? n : e.custom, i, o)
    }
    if (typeof t == "string" && (t = e.variants && e.variants[t]), typeof t == "function") {
        const [i, o] = lp(r);
        t = t(n !== void 0 ? n : e.custom, i, o)
    }
    return t
}

function Ya(e, t, n) {
    const r = e.getProps();
    return Nd(r, t, n !== void 0 ? n : r.custom, e)
}
const _d = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"],
    jd = ["initial", ..._d],
    Vo = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"],
    wr = new Set(Vo),
    qt = e => e * 1e3,
    Zt = e => e / 1e3,
    ak = {
        type: "spring",
        stiffness: 500,
        damping: 25,
        restSpeed: 10
    },
    lk = e => ({
        type: "spring",
        stiffness: 550,
        damping: e === 0 ? 2 * Math.sqrt(550) : 30,
        restSpeed: 10
    }),
    uk = {
        type: "keyframes",
        duration: .8
    },
    ck = {
        type: "keyframes",
        ease: [.25, .1, .35, 1],
        duration: .3
    },
    dk = (e, {
        keyframes: t
    }) => t.length > 2 ? uk : wr.has(e) ? e.startsWith("scale") ? lk(t[1]) : ak : ck;

function Vd(e, t) {
    return e ? e[t] || e.default || e : void 0
}
const fk = {
        skipAnimations: !1,
        useManualTiming: !1
    },
    hk = e => e !== null;

function Xa(e, {
    repeat: t,
    repeatType: n = "loop"
}, r) {
    const i = e.filter(hk),
        o = t && n !== "loop" && t % 2 === 1 ? 0 : i.length - 1;
    return !o || r === void 0 ? i[o] : r
}
const we = e => e;
let pk = we,
    rc = we;

function mk(e) {
    let t = new Set,
        n = new Set,
        r = !1,
        i = !1;
    const o = new WeakSet;
    let s = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
    };

    function a(u) {
        o.has(u) && (l.schedule(u), e()), u(s)
    }
    const l = {
        schedule: (u, c = !1, d = !1) => {
            const m = d && r ? t : n;
            return c && o.add(u), m.has(u) || m.add(u), u
        },
        cancel: u => {
            n.delete(u), o.delete(u)
        },
        process: u => {
            if (s = u, r) {
                i = !0;
                return
            }
            r = !0, [t, n] = [n, t], n.clear(), t.forEach(a), r = !1, i && (i = !1, l.process(u))
        }
    };
    return l
}
const cs = ["read", "resolveKeyframes", "update", "preRender", "render", "postRender"],
    gk = 40;

function D0(e, t) {
    let n = !1,
        r = !0;
    const i = {
            delta: 0,
            timestamp: 0,
            isProcessing: !1
        },
        o = () => n = !0,
        s = cs.reduce((p, h) => (p[h] = mk(o), p), {}),
        {
            read: a,
            resolveKeyframes: l,
            update: u,
            preRender: c,
            render: d,
            postRender: f
        } = s,
        m = () => {
            const p = performance.now();
            n = !1, i.delta = r ? 1e3 / 60 : Math.max(Math.min(p - i.timestamp, gk), 1), i.timestamp = p, i.isProcessing = !0, a.process(i), l.process(i), u.process(i), c.process(i), d.process(i), f.process(i), i.isProcessing = !1, n && t && (r = !1, e(m))
        },
        v = () => {
            n = !0, r = !0, i.isProcessing || e(m)
        };
    return {
        schedule: cs.reduce((p, h) => {
            const g = s[h];
            return p[h] = (S, P = !1, T = !1) => (n || v(), g.schedule(S, P, T)), p
        }, {}),
        cancel: p => {
            for (let h = 0; h < cs.length; h++) s[cs[h]].cancel(p)
        },
        state: i,
        steps: s
    }
}
const {
    schedule: K,
    cancel: kt,
    state: ge,
    steps: Fl
} = D0(typeof requestAnimationFrame < "u" ? requestAnimationFrame : we, !0), O0 = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e, yk = 1e-7, vk = 12;

function wk(e, t, n, r, i) {
    let o, s, a = 0;
    do s = t + (n - t) / 2, o = O0(s, r, i) - e, o > 0 ? n = s : t = s; while (Math.abs(o) > yk && ++a < vk);
    return s
}

function Fo(e, t, n, r) {
    if (e === t && n === r) return we;
    const i = o => wk(o, 0, 1, e, n);
    return o => o === 0 || o === 1 ? o : O0(i(o), t, r)
}
const L0 = e => t => t <= .5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
    N0 = e => t => 1 - e(1 - t),
    _0 = Fo(.33, 1.53, .69, .99),
    Fd = N0(_0),
    j0 = L0(Fd),
    V0 = e => (e *= 2) < 1 ? .5 * Fd(e) : .5 * (2 - Math.pow(2, -10 * (e - 1))),
    Id = e => 1 - Math.sin(Math.acos(e)),
    F0 = N0(Id),
    I0 = L0(Id),
    z0 = e => /^0[^.\s]+$/u.test(e);

function xk(e) {
    return typeof e == "number" ? e === 0 : e !== null ? e === "none" || e === "0" || z0(e) : !0
}
const B0 = e => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),
    $0 = e => t => typeof t == "string" && t.startsWith(e),
    U0 = $0("--"),
    Sk = $0("var(--"),
    zd = e => Sk(e) ? Pk.test(e.split("/*")[0].trim()) : !1,
    Pk = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
    Ck = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;

function Tk(e) {
    const t = Ck.exec(e);
    if (!t) return [, ];
    const [, n, r, i] = t;
    return [`--${n??r}`, i]
}

function W0(e, t, n = 1) {
    const [r, i] = Tk(e);
    if (!r) return;
    const o = window.getComputedStyle(t).getPropertyValue(r);
    if (o) {
        const s = o.trim();
        return B0(s) ? parseFloat(s) : s
    }
    return zd(i) ? W0(i, t, n + 1) : i
}
const sn = (e, t, n) => n > t ? t : n < e ? e : n,
    wi = {
        test: e => typeof e == "number",
        parse: parseFloat,
        transform: e => e
    },
    ko = { ...wi,
        transform: e => sn(0, 1, e)
    },
    ds = { ...wi,
        default: 1
    },
    Io = e => ({
        test: t => typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
        parse: parseFloat,
        transform: t => `${t}${e}`
    }),
    fn = Io("deg"),
    Vt = Io("%"),
    V = Io("px"),
    Ek = Io("vh"),
    kk = Io("vw"),
    up = { ...Vt,
        parse: e => Vt.parse(e) / 100,
        transform: e => Vt.transform(e * 100)
    },
    Ak = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y", "translateX", "translateY"]),
    cp = e => e === wi || e === V,
    dp = (e, t) => parseFloat(e.split(", ")[t]),
    fp = (e, t) => (n, {
        transform: r
    }) => {
        if (r === "none" || !r) return 0;
        const i = r.match(/^matrix3d\((.+)\)$/u);
        if (i) return dp(i[1], t); {
            const o = r.match(/^matrix\((.+)\)$/u);
            return o ? dp(o[1], e) : 0
        }
    },
    Rk = new Set(["x", "y", "z"]),
    bk = Vo.filter(e => !Rk.has(e));

function Mk(e) {
    const t = [];
    return bk.forEach(n => {
        const r = e.getValue(n);
        r !== void 0 && (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0))
    }), t
}
const di = {
    width: ({
        x: e
    }, {
        paddingLeft: t = "0",
        paddingRight: n = "0"
    }) => e.max - e.min - parseFloat(t) - parseFloat(n),
    height: ({
        y: e
    }, {
        paddingTop: t = "0",
        paddingBottom: n = "0"
    }) => e.max - e.min - parseFloat(t) - parseFloat(n),
    top: (e, {
        top: t
    }) => parseFloat(t),
    left: (e, {
        left: t
    }) => parseFloat(t),
    bottom: ({
        y: e
    }, {
        top: t
    }) => parseFloat(t) + (e.max - e.min),
    right: ({
        x: e
    }, {
        left: t
    }) => parseFloat(t) + (e.max - e.min),
    x: fp(4, 13),
    y: fp(5, 14)
};
di.translateX = di.x;
di.translateY = di.y;
const H0 = e => t => t.test(e),
    Dk = {
        test: e => e === "auto",
        parse: e => e
    },
    K0 = [wi, V, Vt, fn, kk, Ek, Dk],
    hp = e => K0.find(H0(e)),
    ar = new Set;
let ic = !1,
    oc = !1;

function G0() {
    if (oc) {
        const e = Array.from(ar).filter(r => r.needsMeasurement),
            t = new Set(e.map(r => r.element)),
            n = new Map;
        t.forEach(r => {
            const i = Mk(r);
            i.length && (n.set(r, i), r.render())
        }), e.forEach(r => r.measureInitialState()), t.forEach(r => {
            r.render();
            const i = n.get(r);
            i && i.forEach(([o, s]) => {
                var a;
                (a = r.getValue(o)) === null || a === void 0 || a.set(s)
            })
        }), e.forEach(r => r.measureEndState()), e.forEach(r => {
            r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY)
        })
    }
    oc = !1, ic = !1, ar.forEach(e => e.complete()), ar.clear()
}

function Q0() {
    ar.forEach(e => {
        e.readKeyframes(), e.needsMeasurement && (oc = !0)
    })
}

function Ok() {
    Q0(), G0()
}
class Bd {
    constructor(t, n, r, i, o, s = !1) {
        this.isComplete = !1, this.isAsync = !1, this.needsMeasurement = !1, this.isScheduled = !1, this.unresolvedKeyframes = [...t], this.onComplete = n, this.name = r, this.motionValue = i, this.element = o, this.isAsync = s
    }
    scheduleResolve() {
        this.isScheduled = !0, this.isAsync ? (ar.add(this), ic || (ic = !0, K.read(Q0), K.resolveKeyframes(G0))) : (this.readKeyframes(), this.complete())
    }
    readKeyframes() {
        const {
            unresolvedKeyframes: t,
            name: n,
            element: r,
            motionValue: i
        } = this;
        for (let o = 0; o < t.length; o++)
            if (t[o] === null)
                if (o === 0) {
                    const s = i == null ? void 0 : i.get(),
                        a = t[t.length - 1];
                    if (s !== void 0) t[0] = s;
                    else if (r && n) {
                        const l = r.readValue(n, a);
                        l != null && (t[0] = l)
                    }
                    t[0] === void 0 && (t[0] = a), i && s === void 0 && i.set(t[0])
                } else t[o] = t[o - 1]
    }
    setFinalKeyframe() {}
    measureInitialState() {}
    renderEndStyles() {}
    measureEndState() {}
    complete() {
        this.isComplete = !0, this.onComplete(this.unresolvedKeyframes, this.finalKeyframe), ar.delete(this)
    }
    cancel() {
        this.isComplete || (this.isScheduled = !1, ar.delete(this))
    }
    resume() {
        this.isComplete || this.scheduleResolve()
    }
}
const qi = e => Math.round(e * 1e5) / 1e5,
    $d = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;

function Lk(e) {
    return e == null
}
const Nk = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
    Ud = (e, t) => n => !!(typeof n == "string" && Nk.test(n) && n.startsWith(e) || t && !Lk(n) && Object.prototype.hasOwnProperty.call(n, t)),
    Y0 = (e, t, n) => r => {
        if (typeof r != "string") return r;
        const [i, o, s, a] = r.match($d);
        return {
            [e]: parseFloat(i),
            [t]: parseFloat(o),
            [n]: parseFloat(s),
            alpha: a !== void 0 ? parseFloat(a) : 1
        }
    },
    _k = e => sn(0, 255, e),
    Il = { ...wi,
        transform: e => Math.round(_k(e))
    },
    er = {
        test: Ud("rgb", "red"),
        parse: Y0("red", "green", "blue"),
        transform: ({
            red: e,
            green: t,
            blue: n,
            alpha: r = 1
        }) => "rgba(" + Il.transform(e) + ", " + Il.transform(t) + ", " + Il.transform(n) + ", " + qi(ko.transform(r)) + ")"
    };

function jk(e) {
    let t = "",
        n = "",
        r = "",
        i = "";
    return e.length > 5 ? (t = e.substring(1, 3), n = e.substring(3, 5), r = e.substring(5, 7), i = e.substring(7, 9)) : (t = e.substring(1, 2), n = e.substring(2, 3), r = e.substring(3, 4), i = e.substring(4, 5), t += t, n += n, r += r, i += i), {
        red: parseInt(t, 16),
        green: parseInt(n, 16),
        blue: parseInt(r, 16),
        alpha: i ? parseInt(i, 16) / 255 : 1
    }
}
const sc = {
        test: Ud("#"),
        parse: jk,
        transform: er.transform
    },
    Lr = {
        test: Ud("hsl", "hue"),
        parse: Y0("hue", "saturation", "lightness"),
        transform: ({
            hue: e,
            saturation: t,
            lightness: n,
            alpha: r = 1
        }) => "hsla(" + Math.round(e) + ", " + Vt.transform(qi(t)) + ", " + Vt.transform(qi(n)) + ", " + qi(ko.transform(r)) + ")"
    },
    Re = {
        test: e => er.test(e) || sc.test(e) || Lr.test(e),
        parse: e => er.test(e) ? er.parse(e) : Lr.test(e) ? Lr.parse(e) : sc.parse(e),
        transform: e => typeof e == "string" ? e : e.hasOwnProperty("red") ? er.transform(e) : Lr.transform(e)
    },
    Vk = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;

function Fk(e) {
    var t, n;
    return isNaN(e) && typeof e == "string" && (((t = e.match($d)) === null || t === void 0 ? void 0 : t.length) || 0) + (((n = e.match(Vk)) === null || n === void 0 ? void 0 : n.length) || 0) > 0
}
const X0 = "number",
    q0 = "color",
    Ik = "var",
    zk = "var(",
    pp = "${}",
    Bk = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;

function Ao(e) {
    const t = e.toString(),
        n = [],
        r = {
            color: [],
            number: [],
            var: []
        },
        i = [];
    let o = 0;
    const a = t.replace(Bk, l => (Re.test(l) ? (r.color.push(o), i.push(q0), n.push(Re.parse(l))) : l.startsWith(zk) ? (r.var.push(o), i.push(Ik), n.push(l)) : (r.number.push(o), i.push(X0), n.push(parseFloat(l))), ++o, pp)).split(pp);
    return {
        values: n,
        split: a,
        indexes: r,
        types: i
    }
}

function Z0(e) {
    return Ao(e).values
}

function J0(e) {
    const {
        split: t,
        types: n
    } = Ao(e), r = t.length;
    return i => {
        let o = "";
        for (let s = 0; s < r; s++)
            if (o += t[s], i[s] !== void 0) {
                const a = n[s];
                a === X0 ? o += qi(i[s]) : a === q0 ? o += Re.transform(i[s]) : o += i[s]
            }
        return o
    }
}
const $k = e => typeof e == "number" ? 0 : e;

function Uk(e) {
    const t = Z0(e);
    return J0(e)(t.map($k))
}
const zn = {
        test: Fk,
        parse: Z0,
        createTransformer: J0,
        getAnimatableNone: Uk
    },
    Wk = new Set(["brightness", "contrast", "saturate", "opacity"]);

function Hk(e) {
    const [t, n] = e.slice(0, -1).split("(");
    if (t === "drop-shadow") return e;
    const [r] = n.match($d) || [];
    if (!r) return e;
    const i = n.replace(r, "");
    let o = Wk.has(t) ? 1 : 0;
    return r !== n && (o *= 100), t + "(" + o + i + ")"
}
const Kk = /\b([a-z-]*)\(.*?\)/gu,
    ac = { ...zn,
        getAnimatableNone: e => {
            const t = e.match(Kk);
            return t ? t.map(Hk).join(" ") : e
        }
    },
    Gk = {
        borderWidth: V,
        borderTopWidth: V,
        borderRightWidth: V,
        borderBottomWidth: V,
        borderLeftWidth: V,
        borderRadius: V,
        radius: V,
        borderTopLeftRadius: V,
        borderTopRightRadius: V,
        borderBottomRightRadius: V,
        borderBottomLeftRadius: V,
        width: V,
        maxWidth: V,
        height: V,
        maxHeight: V,
        top: V,
        right: V,
        bottom: V,
        left: V,
        padding: V,
        paddingTop: V,
        paddingRight: V,
        paddingBottom: V,
        paddingLeft: V,
        margin: V,
        marginTop: V,
        marginRight: V,
        marginBottom: V,
        marginLeft: V,
        backgroundPositionX: V,
        backgroundPositionY: V
    },
    Qk = {
        rotate: fn,
        rotateX: fn,
        rotateY: fn,
        rotateZ: fn,
        scale: ds,
        scaleX: ds,
        scaleY: ds,
        scaleZ: ds,
        skew: fn,
        skewX: fn,
        skewY: fn,
        distance: V,
        translateX: V,
        translateY: V,
        translateZ: V,
        x: V,
        y: V,
        z: V,
        perspective: V,
        transformPerspective: V,
        opacity: ko,
        originX: up,
        originY: up,
        originZ: V
    },
    mp = { ...wi,
        transform: Math.round
    },
    Wd = { ...Gk,
        ...Qk,
        zIndex: mp,
        size: V,
        fillOpacity: ko,
        strokeOpacity: ko,
        numOctaves: mp
    },
    Yk = { ...Wd,
        color: Re,
        backgroundColor: Re,
        outlineColor: Re,
        fill: Re,
        stroke: Re,
        borderColor: Re,
        borderTopColor: Re,
        borderRightColor: Re,
        borderBottomColor: Re,
        borderLeftColor: Re,
        filter: ac,
        WebkitFilter: ac
    },
    Hd = e => Yk[e];

function ew(e, t) {
    let n = Hd(e);
    return n !== ac && (n = zn), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
}
const Xk = new Set(["auto", "none", "0"]);

function qk(e, t, n) {
    let r = 0,
        i;
    for (; r < e.length && !i;) {
        const o = e[r];
        typeof o == "string" && !Xk.has(o) && Ao(o).values.length && (i = e[r]), r++
    }
    if (i && n)
        for (const o of t) e[o] = ew(n, i)
}
class tw extends Bd {
    constructor(t, n, r, i, o) {
        super(t, n, r, i, o, !0)
    }
    readKeyframes() {
        const {
            unresolvedKeyframes: t,
            element: n,
            name: r
        } = this;
        if (!n || !n.current) return;
        super.readKeyframes();
        for (let l = 0; l < t.length; l++) {
            let u = t[l];
            if (typeof u == "string" && (u = u.trim(), zd(u))) {
                const c = W0(u, n.current);
                c !== void 0 && (t[l] = c), l === t.length - 1 && (this.finalKeyframe = u)
            }
        }
        if (this.resolveNoneKeyframes(), !Ak.has(r) || t.length !== 2) return;
        const [i, o] = t, s = hp(i), a = hp(o);
        if (s !== a)
            if (cp(s) && cp(a))
                for (let l = 0; l < t.length; l++) {
                    const u = t[l];
                    typeof u == "string" && (t[l] = parseFloat(u))
                } else this.needsMeasurement = !0
    }
    resolveNoneKeyframes() {
        const {
            unresolvedKeyframes: t,
            name: n
        } = this, r = [];
        for (let i = 0; i < t.length; i++) xk(t[i]) && r.push(i);
        r.length && qk(t, r, n)
    }
    measureInitialState() {
        const {
            element: t,
            unresolvedKeyframes: n,
            name: r
        } = this;
        if (!t || !t.current) return;
        r === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = di[r](t.measureViewportBox(), window.getComputedStyle(t.current)), n[0] = this.measuredOrigin;
        const i = n[n.length - 1];
        i !== void 0 && t.getValue(r, i).jump(i, !1)
    }
    measureEndState() {
        var t;
        const {
            element: n,
            name: r,
            unresolvedKeyframes: i
        } = this;
        if (!n || !n.current) return;
        const o = n.getValue(r);
        o && o.jump(this.measuredOrigin, !1);
        const s = i.length - 1,
            a = i[s];
        i[s] = di[r](n.measureViewportBox(), window.getComputedStyle(n.current)), a !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = a), !((t = this.removedTransforms) === null || t === void 0) && t.length && this.removedTransforms.forEach(([l, u]) => {
            n.getValue(l).set(u)
        }), this.resolveNoneKeyframes()
    }
}

function Kd(e) {
    return typeof e == "function"
}
let bs;

function Zk() {
    bs = void 0
}
const Ft = {
        now: () => (bs === void 0 && Ft.set(ge.isProcessing || fk.useManualTiming ? ge.timestamp : performance.now()), bs),
        set: e => {
            bs = e, queueMicrotask(Zk)
        }
    },
    gp = (e, t) => t === "zIndex" ? !1 : !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && (zn.test(e) || e === "0") && !e.startsWith("url("));

function Jk(e) {
    const t = e[0];
    if (e.length === 1) return !0;
    for (let n = 0; n < e.length; n++)
        if (e[n] !== t) return !0
}

function e2(e, t, n, r) {
    const i = e[0];
    if (i === null) return !1;
    if (t === "display" || t === "visibility") return !0;
    const o = e[e.length - 1],
        s = gp(i, t),
        a = gp(o, t);
    return !s || !a ? !1 : Jk(e) || (n === "spring" || Kd(n)) && r
}
const t2 = 40;
class nw {
    constructor({
        autoplay: t = !0,
        delay: n = 0,
        type: r = "keyframes",
        repeat: i = 0,
        repeatDelay: o = 0,
        repeatType: s = "loop",
        ...a
    }) {
        this.isStopped = !1, this.hasAttemptedResolve = !1, this.createdAt = Ft.now(), this.options = {
            autoplay: t,
            delay: n,
            type: r,
            repeat: i,
            repeatDelay: o,
            repeatType: s,
            ...a
        }, this.updateFinishedPromise()
    }
    calcStartTime() {
        return this.resolvedAt ? this.resolvedAt - this.createdAt > t2 ? this.resolvedAt : this.createdAt : this.createdAt
    }
    get resolved() {
        return !this._resolved && !this.hasAttemptedResolve && Ok(), this._resolved
    }
    onKeyframesResolved(t, n) {
        this.resolvedAt = Ft.now(), this.hasAttemptedResolve = !0;
        const {
            name: r,
            type: i,
            velocity: o,
            delay: s,
            onComplete: a,
            onUpdate: l,
            isGenerator: u
        } = this.options;
        if (!u && !e2(t, r, i, o))
            if (s) this.options.duration = 0;
            else {
                l == null || l(Xa(t, this.options, n)), a == null || a(), this.resolveFinishedPromise();
                return
            }
        const c = this.initPlayback(t, n);
        c !== !1 && (this._resolved = {
            keyframes: t,
            finalKeyframe: n,
            ...c
        }, this.onPostResolved())
    }
    onPostResolved() {}
    then(t, n) {
        return this.currentFinishedPromise.then(t, n)
    }
    flatten() {
        this.options.type = "keyframes", this.options.ease = "linear"
    }
    updateFinishedPromise() {
        this.currentFinishedPromise = new Promise(t => {
            this.resolveFinishedPromise = t
        })
    }
}
const mr = (e, t, n) => {
        const r = t - e;
        return r === 0 ? 1 : (n - e) / r
    },
    rw = (e, t, n = 10) => {
        let r = "";
        const i = Math.max(Math.round(t / n), 2);
        for (let o = 0; o < i; o++) r += e(mr(0, i - 1, o)) + ", ";
        return `linear(${r.substring(0,r.length-2)})`
    };

function Gd(e, t) {
    return t ? e * (1e3 / t) : 0
}
const n2 = 5;

function iw(e, t, n) {
    const r = Math.max(t - n2, 0);
    return Gd(n - e(r), t - r)
}
const le = {
        stiffness: 100,
        damping: 10,
        mass: 1,
        velocity: 0,
        duration: 800,
        bounce: .3,
        visualDuration: .3,
        restSpeed: {
            granular: .01,
            default: 2
        },
        restDelta: {
            granular: .005,
            default: .5
        },
        minDuration: .01,
        maxDuration: 10,
        minDamping: .05,
        maxDamping: 1
    },
    zl = .001;

function r2({
    duration: e = le.duration,
    bounce: t = le.bounce,
    velocity: n = le.velocity,
    mass: r = le.mass
}) {
    let i, o, s = 1 - t;
    s = sn(le.minDamping, le.maxDamping, s), e = sn(le.minDuration, le.maxDuration, Zt(e)), s < 1 ? (i = u => {
        const c = u * s,
            d = c * e,
            f = c - n,
            m = lc(u, s),
            v = Math.exp(-d);
        return zl - f / m * v
    }, o = u => {
        const d = u * s * e,
            f = d * n + n,
            m = Math.pow(s, 2) * Math.pow(u, 2) * e,
            v = Math.exp(-d),
            y = lc(Math.pow(u, 2), s);
        return (-i(u) + zl > 0 ? -1 : 1) * ((f - m) * v) / y
    }) : (i = u => {
        const c = Math.exp(-u * e),
            d = (u - n) * e + 1;
        return -zl + c * d
    }, o = u => {
        const c = Math.exp(-u * e),
            d = (n - u) * (e * e);
        return c * d
    });
    const a = 5 / e,
        l = o2(i, o, a);
    if (e = qt(e), isNaN(l)) return {
        stiffness: le.stiffness,
        damping: le.damping,
        duration: e
    }; {
        const u = Math.pow(l, 2) * r;
        return {
            stiffness: u,
            damping: s * 2 * Math.sqrt(r * u),
            duration: e
        }
    }
}
const i2 = 12;

function o2(e, t, n) {
    let r = n;
    for (let i = 1; i < i2; i++) r = r - e(r) / t(r);
    return r
}

function lc(e, t) {
    return e * Math.sqrt(1 - t * t)
}
const uc = 2e4;

function ow(e) {
    let t = 0;
    const n = 50;
    let r = e.next(t);
    for (; !r.done && t < uc;) t += n, r = e.next(t);
    return t >= uc ? 1 / 0 : t
}
const s2 = ["duration", "bounce"],
    a2 = ["stiffness", "damping", "mass"];

function yp(e, t) {
    return t.some(n => e[n] !== void 0)
}

function l2(e) {
    let t = {
        velocity: le.velocity,
        stiffness: le.stiffness,
        damping: le.damping,
        mass: le.mass,
        isResolvedFromDuration: !1,
        ...e
    };
    if (!yp(e, a2) && yp(e, s2))
        if (e.visualDuration) {
            const n = e.visualDuration,
                r = 2 * Math.PI / (n * 1.2),
                i = r * r,
                o = 2 * sn(.05, 1, 1 - e.bounce) * Math.sqrt(i);
            t = { ...t,
                mass: le.mass,
                stiffness: i,
                damping: o
            }
        } else {
            const n = r2(e);
            t = { ...t,
                ...n,
                mass: le.mass
            }, t.isResolvedFromDuration = !0
        }
    return t
}

function sw(e = le.visualDuration, t = le.bounce) {
    const n = typeof e != "object" ? {
        visualDuration: e,
        keyframes: [0, 1],
        bounce: t
    } : e;
    let {
        restSpeed: r,
        restDelta: i
    } = n;
    const o = n.keyframes[0],
        s = n.keyframes[n.keyframes.length - 1],
        a = {
            done: !1,
            value: o
        },
        {
            stiffness: l,
            damping: u,
            mass: c,
            duration: d,
            velocity: f,
            isResolvedFromDuration: m
        } = l2({ ...n,
            velocity: -Zt(n.velocity || 0)
        }),
        v = f || 0,
        y = u / (2 * Math.sqrt(l * c)),
        x = s - o,
        p = Zt(Math.sqrt(l / c)),
        h = Math.abs(x) < 5;
    r || (r = h ? le.restSpeed.granular : le.restSpeed.default), i || (i = h ? le.restDelta.granular : le.restDelta.default);
    let g;
    if (y < 1) {
        const P = lc(p, y);
        g = T => {
            const k = Math.exp(-y * p * T);
            return s - k * ((v + y * p * x) / P * Math.sin(P * T) + x * Math.cos(P * T))
        }
    } else if (y === 1) g = P => s - Math.exp(-p * P) * (x + (v + p * x) * P);
    else {
        const P = p * Math.sqrt(y * y - 1);
        g = T => {
            const k = Math.exp(-y * p * T),
                E = Math.min(P * T, 300);
            return s - k * ((v + y * p * x) * Math.sinh(E) + P * x * Math.cosh(E)) / P
        }
    }
    const S = {
        calculatedDuration: m && d || null,
        next: P => {
            const T = g(P);
            if (m) a.done = P >= d;
            else {
                let k = 0;
                y < 1 && (k = P === 0 ? qt(v) : iw(g, P, T));
                const E = Math.abs(k) <= r,
                    D = Math.abs(s - T) <= i;
                a.done = E && D
            }
            return a.value = a.done ? s : T, a
        },
        toString: () => {
            const P = Math.min(ow(S), uc),
                T = rw(k => S.next(P * k).value, P, 30);
            return P + "ms " + T
        }
    };
    return S
}

function vp({
    keyframes: e,
    velocity: t = 0,
    power: n = .8,
    timeConstant: r = 325,
    bounceDamping: i = 10,
    bounceStiffness: o = 500,
    modifyTarget: s,
    min: a,
    max: l,
    restDelta: u = .5,
    restSpeed: c
}) {
    const d = e[0],
        f = {
            done: !1,
            value: d
        },
        m = E => a !== void 0 && E < a || l !== void 0 && E > l,
        v = E => a === void 0 ? l : l === void 0 || Math.abs(a - E) < Math.abs(l - E) ? a : l;
    let y = n * t;
    const x = d + y,
        p = s === void 0 ? x : s(x);
    p !== x && (y = p - d);
    const h = E => -y * Math.exp(-E / r),
        g = E => p + h(E),
        S = E => {
            const D = h(E),
                M = g(E);
            f.done = Math.abs(D) <= u, f.value = f.done ? p : M
        };
    let P, T;
    const k = E => {
        m(f.value) && (P = E, T = sw({
            keyframes: [f.value, v(f.value)],
            velocity: iw(g, E, f.value),
            damping: i,
            stiffness: o,
            restDelta: u,
            restSpeed: c
        }))
    };
    return k(0), {
        calculatedDuration: null,
        next: E => {
            let D = !1;
            return !T && P === void 0 && (D = !0, S(E), k(E)), P !== void 0 && E >= P ? T.next(E - P) : (!D && S(E), f)
        }
    }
}
const u2 = Fo(.42, 0, 1, 1),
    c2 = Fo(0, 0, .58, 1),
    aw = Fo(.42, 0, .58, 1),
    d2 = e => Array.isArray(e) && typeof e[0] != "number",
    Qd = e => Array.isArray(e) && typeof e[0] == "number",
    wp = {
        linear: we,
        easeIn: u2,
        easeInOut: aw,
        easeOut: c2,
        circIn: Id,
        circInOut: I0,
        circOut: F0,
        backIn: Fd,
        backInOut: j0,
        backOut: _0,
        anticipate: V0
    },
    xp = e => {
        if (Qd(e)) {
            rc(e.length === 4);
            const [t, n, r, i] = e;
            return Fo(t, n, r, i)
        } else if (typeof e == "string") return rc(wp[e] !== void 0), wp[e];
        return e
    },
    f2 = (e, t) => n => t(e(n)),
    Ln = (...e) => e.reduce(f2),
    ie = (e, t, n) => e + (t - e) * n;

function Bl(e, t, n) {
    return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
}

function h2({
    hue: e,
    saturation: t,
    lightness: n,
    alpha: r
}) {
    e /= 360, t /= 100, n /= 100;
    let i = 0,
        o = 0,
        s = 0;
    if (!t) i = o = s = n;
    else {
        const a = n < .5 ? n * (1 + t) : n + t - n * t,
            l = 2 * n - a;
        i = Bl(l, a, e + 1 / 3), o = Bl(l, a, e), s = Bl(l, a, e - 1 / 3)
    }
    return {
        red: Math.round(i * 255),
        green: Math.round(o * 255),
        blue: Math.round(s * 255),
        alpha: r
    }
}

function ca(e, t) {
    return n => n > 0 ? t : e
}
const $l = (e, t, n) => {
        const r = e * e,
            i = n * (t * t - r) + r;
        return i < 0 ? 0 : Math.sqrt(i)
    },
    p2 = [sc, er, Lr],
    m2 = e => p2.find(t => t.test(e));

function Sp(e) {
    const t = m2(e);
    if (!t) return !1;
    let n = t.parse(e);
    return t === Lr && (n = h2(n)), n
}
const Pp = (e, t) => {
        const n = Sp(e),
            r = Sp(t);
        if (!n || !r) return ca(e, t);
        const i = { ...n
        };
        return o => (i.red = $l(n.red, r.red, o), i.green = $l(n.green, r.green, o), i.blue = $l(n.blue, r.blue, o), i.alpha = ie(n.alpha, r.alpha, o), er.transform(i))
    },
    cc = new Set(["none", "hidden"]);

function g2(e, t) {
    return cc.has(e) ? n => n <= 0 ? e : t : n => n >= 1 ? t : e
}

function y2(e, t) {
    return n => ie(e, t, n)
}

function Yd(e) {
    return typeof e == "number" ? y2 : typeof e == "string" ? zd(e) ? ca : Re.test(e) ? Pp : x2 : Array.isArray(e) ? lw : typeof e == "object" ? Re.test(e) ? Pp : v2 : ca
}

function lw(e, t) {
    const n = [...e],
        r = n.length,
        i = e.map((o, s) => Yd(o)(o, t[s]));
    return o => {
        for (let s = 0; s < r; s++) n[s] = i[s](o);
        return n
    }
}

function v2(e, t) {
    const n = { ...e,
            ...t
        },
        r = {};
    for (const i in n) e[i] !== void 0 && t[i] !== void 0 && (r[i] = Yd(e[i])(e[i], t[i]));
    return i => {
        for (const o in r) n[o] = r[o](i);
        return n
    }
}

function w2(e, t) {
    var n;
    const r = [],
        i = {
            color: 0,
            var: 0,
            number: 0
        };
    for (let o = 0; o < t.values.length; o++) {
        const s = t.types[o],
            a = e.indexes[s][i[s]],
            l = (n = e.values[a]) !== null && n !== void 0 ? n : 0;
        r[o] = l, i[s]++
    }
    return r
}
const x2 = (e, t) => {
    const n = zn.createTransformer(t),
        r = Ao(e),
        i = Ao(t);
    return r.indexes.var.length === i.indexes.var.length && r.indexes.color.length === i.indexes.color.length && r.indexes.number.length >= i.indexes.number.length ? cc.has(e) && !i.values.length || cc.has(t) && !r.values.length ? g2(e, t) : Ln(lw(w2(r, i), i.values), n) : ca(e, t)
};

function uw(e, t, n) {
    return typeof e == "number" && typeof t == "number" && typeof n == "number" ? ie(e, t, n) : Yd(e)(e, t)
}

function S2(e, t, n) {
    const r = [],
        i = n || uw,
        o = e.length - 1;
    for (let s = 0; s < o; s++) {
        let a = i(e[s], e[s + 1]);
        if (t) {
            const l = Array.isArray(t) ? t[s] || we : t;
            a = Ln(l, a)
        }
        r.push(a)
    }
    return r
}

function Xd(e, t, {
    clamp: n = !0,
    ease: r,
    mixer: i
} = {}) {
    const o = e.length;
    if (rc(o === t.length), o === 1) return () => t[0];
    if (o === 2 && e[0] === e[1]) return () => t[1];
    e[0] > e[o - 1] && (e = [...e].reverse(), t = [...t].reverse());
    const s = S2(t, r, i),
        a = s.length,
        l = u => {
            let c = 0;
            if (a > 1)
                for (; c < e.length - 2 && !(u < e[c + 1]); c++);
            const d = mr(e[c], e[c + 1], u);
            return s[c](d)
        };
    return n ? u => l(sn(e[0], e[o - 1], u)) : l
}

function P2(e, t) {
    const n = e[e.length - 1];
    for (let r = 1; r <= t; r++) {
        const i = mr(0, t, r);
        e.push(ie(n, 1, i))
    }
}

function cw(e) {
    const t = [0];
    return P2(t, e.length - 1), t
}

function C2(e, t) {
    return e.map(n => n * t)
}

function T2(e, t) {
    return e.map(() => t || aw).splice(0, e.length - 1)
}

function da({
    duration: e = 300,
    keyframes: t,
    times: n,
    ease: r = "easeInOut"
}) {
    const i = d2(r) ? r.map(xp) : xp(r),
        o = {
            done: !1,
            value: t[0]
        },
        s = C2(n && n.length === t.length ? n : cw(t), e),
        a = Xd(s, t, {
            ease: Array.isArray(i) ? i : T2(t, i)
        });
    return {
        calculatedDuration: e,
        next: l => (o.value = a(l), o.done = l >= e, o)
    }
}
const E2 = e => {
        const t = ({
            timestamp: n
        }) => e(n);
        return {
            start: () => K.update(t, !0),
            stop: () => kt(t),
            now: () => ge.isProcessing ? ge.timestamp : Ft.now()
        }
    },
    k2 = {
        decay: vp,
        inertia: vp,
        tween: da,
        keyframes: da,
        spring: sw
    },
    A2 = e => e / 100;
class qd extends nw {
    constructor(t) {
        super(t), this.holdTime = null, this.cancelTime = null, this.currentTime = 0, this.playbackSpeed = 1, this.pendingPlayState = "running", this.startTime = null, this.state = "idle", this.stop = () => {
            if (this.resolver.cancel(), this.isStopped = !0, this.state === "idle") return;
            this.teardown();
            const {
                onStop: l
            } = this.options;
            l && l()
        };
        const {
            name: n,
            motionValue: r,
            element: i,
            keyframes: o
        } = this.options, s = (i == null ? void 0 : i.KeyframeResolver) || Bd, a = (l, u) => this.onKeyframesResolved(l, u);
        this.resolver = new s(o, a, n, r, i), this.resolver.scheduleResolve()
    }
    flatten() {
        super.flatten(), this._resolved && Object.assign(this._resolved, this.initPlayback(this._resolved.keyframes))
    }
    initPlayback(t) {
        const {
            type: n = "keyframes",
            repeat: r = 0,
            repeatDelay: i = 0,
            repeatType: o,
            velocity: s = 0
        } = this.options, a = Kd(n) ? n : k2[n] || da;
        let l, u;
        a !== da && typeof t[0] != "number" && (l = Ln(A2, uw(t[0], t[1])), t = [0, 100]);
        const c = a({ ...this.options,
            keyframes: t
        });
        o === "mirror" && (u = a({ ...this.options,
            keyframes: [...t].reverse(),
            velocity: -s
        })), c.calculatedDuration === null && (c.calculatedDuration = ow(c));
        const {
            calculatedDuration: d
        } = c, f = d + i, m = f * (r + 1) - i;
        return {
            generator: c,
            mirroredGenerator: u,
            mapPercentToKeyframes: l,
            calculatedDuration: d,
            resolvedDuration: f,
            totalDuration: m
        }
    }
    onPostResolved() {
        const {
            autoplay: t = !0
        } = this.options;
        this.play(), this.pendingPlayState === "paused" || !t ? this.pause() : this.state = this.pendingPlayState
    }
    tick(t, n = !1) {
        const {
            resolved: r
        } = this;
        if (!r) {
            const {
                keyframes: E
            } = this.options;
            return {
                done: !0,
                value: E[E.length - 1]
            }
        }
        const {
            finalKeyframe: i,
            generator: o,
            mirroredGenerator: s,
            mapPercentToKeyframes: a,
            keyframes: l,
            calculatedDuration: u,
            totalDuration: c,
            resolvedDuration: d
        } = r;
        if (this.startTime === null) return o.next(0);
        const {
            delay: f,
            repeat: m,
            repeatType: v,
            repeatDelay: y,
            onUpdate: x
        } = this.options;
        this.speed > 0 ? this.startTime = Math.min(this.startTime, t) : this.speed < 0 && (this.startTime = Math.min(t - c / this.speed, this.startTime)), n ? this.currentTime = t : this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = Math.round(t - this.startTime) * this.speed;
        const p = this.currentTime - f * (this.speed >= 0 ? 1 : -1),
            h = this.speed >= 0 ? p < 0 : p > c;
        this.currentTime = Math.max(p, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = c);
        let g = this.currentTime,
            S = o;
        if (m) {
            const E = Math.min(this.currentTime, c) / d;
            let D = Math.floor(E),
                M = E % 1;
            !M && E >= 1 && (M = 1), M === 1 && D--, D = Math.min(D, m + 1), !!(D % 2) && (v === "reverse" ? (M = 1 - M, y && (M -= y / d)) : v === "mirror" && (S = s)), g = sn(0, 1, M) * d
        }
        const P = h ? {
            done: !1,
            value: l[0]
        } : S.next(g);
        a && (P.value = a(P.value));
        let {
            done: T
        } = P;
        !h && u !== null && (T = this.speed >= 0 ? this.currentTime >= c : this.currentTime <= 0);
        const k = this.holdTime === null && (this.state === "finished" || this.state === "running" && T);
        return k && i !== void 0 && (P.value = Xa(l, this.options, i)), x && x(P.value), k && this.finish(), P
    }
    get duration() {
        const {
            resolved: t
        } = this;
        return t ? Zt(t.calculatedDuration) : 0
    }
    get time() {
        return Zt(this.currentTime)
    }
    set time(t) {
        t = qt(t), this.currentTime = t, this.holdTime !== null || this.speed === 0 ? this.holdTime = t : this.driver && (this.startTime = this.driver.now() - t / this.speed)
    }
    get speed() {
        return this.playbackSpeed
    }
    set speed(t) {
        const n = this.playbackSpeed !== t;
        this.playbackSpeed = t, n && (this.time = Zt(this.currentTime))
    }
    play() {
        if (this.resolver.isScheduled || this.resolver.resume(), !this._resolved) {
            this.pendingPlayState = "running";
            return
        }
        if (this.isStopped) return;
        const {
            driver: t = E2,
            onPlay: n,
            startTime: r
        } = this.options;
        this.driver || (this.driver = t(o => this.tick(o))), n && n();
        const i = this.driver.now();
        this.holdTime !== null ? this.startTime = i - this.holdTime : this.startTime ? this.state === "finished" && (this.startTime = i) : this.startTime = r ? ? this.calcStartTime(), this.state === "finished" && this.updateFinishedPromise(), this.cancelTime = this.startTime, this.holdTime = null, this.state = "running", this.driver.start()
    }
    pause() {
        var t;
        if (!this._resolved) {
            this.pendingPlayState = "paused";
            return
        }
        this.state = "paused", this.holdTime = (t = this.currentTime) !== null && t !== void 0 ? t : 0
    }
    complete() {
        this.state !== "running" && this.play(), this.pendingPlayState = this.state = "finished", this.holdTime = null
    }
    finish() {
        this.teardown(), this.state = "finished";
        const {
            onComplete: t
        } = this.options;
        t && t()
    }
    cancel() {
        this.cancelTime !== null && this.tick(this.cancelTime), this.teardown(), this.updateFinishedPromise()
    }
    teardown() {
        this.state = "idle", this.stopDriver(), this.resolveFinishedPromise(), this.updateFinishedPromise(), this.startTime = this.cancelTime = null, this.resolver.cancel()
    }
    stopDriver() {
        this.driver && (this.driver.stop(), this.driver = void 0)
    }
    sample(t) {
        return this.startTime = 0, this.tick(t, !0)
    }
}
const R2 = new Set(["opacity", "clipPath", "filter", "transform"]);

function Zd(e) {
    let t;
    return () => (t === void 0 && (t = e()), t)
}
const b2 = {
    linearEasing: void 0
};

function M2(e, t) {
    const n = Zd(e);
    return () => {
        var r;
        return (r = b2[t]) !== null && r !== void 0 ? r : n()
    }
}
const fa = M2(() => {
    try {
        document.createElement("div").animate({
            opacity: 0
        }, {
            easing: "linear(0, 1)"
        })
    } catch {
        return !1
    }
    return !0
}, "linearEasing");

function dw(e) {
    return !!(typeof e == "function" && fa() || !e || typeof e == "string" && (e in dc || fa()) || Qd(e) || Array.isArray(e) && e.every(dw))
}
const Ii = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
    dc = {
        linear: "linear",
        ease: "ease",
        easeIn: "ease-in",
        easeOut: "ease-out",
        easeInOut: "ease-in-out",
        circIn: Ii([0, .65, .55, 1]),
        circOut: Ii([.55, 0, 1, .45]),
        backIn: Ii([.31, .01, .66, -.59]),
        backOut: Ii([.33, 1.53, .69, .99])
    };

function fw(e, t) {
    if (e) return typeof e == "function" && fa() ? rw(e, t) : Qd(e) ? Ii(e) : Array.isArray(e) ? e.map(n => fw(n, t) || dc.easeOut) : dc[e]
}

function D2(e, t, n, {
    delay: r = 0,
    duration: i = 300,
    repeat: o = 0,
    repeatType: s = "loop",
    ease: a = "easeInOut",
    times: l
} = {}) {
    const u = {
        [t]: n
    };
    l && (u.offset = l);
    const c = fw(a, i);
    return Array.isArray(c) && (u.easing = c), e.animate(u, {
        delay: r,
        duration: i,
        easing: Array.isArray(c) ? "linear" : c,
        fill: "both",
        iterations: o + 1,
        direction: s === "reverse" ? "alternate" : "normal"
    })
}

function Cp(e, t) {
    e.timeline = t, e.onfinish = null
}
const O2 = Zd(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
    ha = 10,
    L2 = 2e4;

function N2(e) {
    return Kd(e.type) || e.type === "spring" || !dw(e.ease)
}

function _2(e, t) {
    const n = new qd({ ...t,
        keyframes: e,
        repeat: 0,
        delay: 0,
        isGenerator: !0
    });
    let r = {
        done: !1,
        value: e[0]
    };
    const i = [];
    let o = 0;
    for (; !r.done && o < L2;) r = n.sample(o), i.push(r.value), o += ha;
    return {
        times: void 0,
        keyframes: i,
        duration: o - ha,
        ease: "linear"
    }
}
const hw = {
    anticipate: V0,
    backInOut: j0,
    circInOut: I0
};

function j2(e) {
    return e in hw
}
class Tp extends nw {
    constructor(t) {
        super(t);
        const {
            name: n,
            motionValue: r,
            element: i,
            keyframes: o
        } = this.options;
        this.resolver = new tw(o, (s, a) => this.onKeyframesResolved(s, a), n, r, i), this.resolver.scheduleResolve()
    }
    initPlayback(t, n) {
        var r;
        let {
            duration: i = 300,
            times: o,
            ease: s,
            type: a,
            motionValue: l,
            name: u,
            startTime: c
        } = this.options;
        if (!(!((r = l.owner) === null || r === void 0) && r.current)) return !1;
        if (typeof s == "string" && fa() && j2(s) && (s = hw[s]), N2(this.options)) {
            const {
                onComplete: f,
                onUpdate: m,
                motionValue: v,
                element: y,
                ...x
            } = this.options, p = _2(t, x);
            t = p.keyframes, t.length === 1 && (t[1] = t[0]), i = p.duration, o = p.times, s = p.ease, a = "keyframes"
        }
        const d = D2(l.owner.current, u, t, { ...this.options,
            duration: i,
            times: o,
            ease: s
        });
        return d.startTime = c ? ? this.calcStartTime(), this.pendingTimeline ? (Cp(d, this.pendingTimeline), this.pendingTimeline = void 0) : d.onfinish = () => {
            const {
                onComplete: f
            } = this.options;
            l.set(Xa(t, this.options, n)), f && f(), this.cancel(), this.resolveFinishedPromise()
        }, {
            animation: d,
            duration: i,
            times: o,
            type: a,
            ease: s,
            keyframes: t
        }
    }
    get duration() {
        const {
            resolved: t
        } = this;
        if (!t) return 0;
        const {
            duration: n
        } = t;
        return Zt(n)
    }
    get time() {
        const {
            resolved: t
        } = this;
        if (!t) return 0;
        const {
            animation: n
        } = t;
        return Zt(n.currentTime || 0)
    }
    set time(t) {
        const {
            resolved: n
        } = this;
        if (!n) return;
        const {
            animation: r
        } = n;
        r.currentTime = qt(t)
    }
    get speed() {
        const {
            resolved: t
        } = this;
        if (!t) return 1;
        const {
            animation: n
        } = t;
        return n.playbackRate
    }
    set speed(t) {
        const {
            resolved: n
        } = this;
        if (!n) return;
        const {
            animation: r
        } = n;
        r.playbackRate = t
    }
    get state() {
        const {
            resolved: t
        } = this;
        if (!t) return "idle";
        const {
            animation: n
        } = t;
        return n.playState
    }
    get startTime() {
        const {
            resolved: t
        } = this;
        if (!t) return null;
        const {
            animation: n
        } = t;
        return n.startTime
    }
    attachTimeline(t) {
        if (!this._resolved) this.pendingTimeline = t;
        else {
            const {
                resolved: n
            } = this;
            if (!n) return we;
            const {
                animation: r
            } = n;
            Cp(r, t)
        }
        return we
    }
    play() {
        if (this.isStopped) return;
        const {
            resolved: t
        } = this;
        if (!t) return;
        const {
            animation: n
        } = t;
        n.playState === "finished" && this.updateFinishedPromise(), n.play()
    }
    pause() {
        const {
            resolved: t
        } = this;
        if (!t) return;
        const {
            animation: n
        } = t;
        n.pause()
    }
    stop() {
        if (this.resolver.cancel(), this.isStopped = !0, this.state === "idle") return;
        this.resolveFinishedPromise(), this.updateFinishedPromise();
        const {
            resolved: t
        } = this;
        if (!t) return;
        const {
            animation: n,
            keyframes: r,
            duration: i,
            type: o,
            ease: s,
            times: a
        } = t;
        if (n.playState === "idle" || n.playState === "finished") return;
        if (this.time) {
            const {
                motionValue: u,
                onUpdate: c,
                onComplete: d,
                element: f,
                ...m
            } = this.options, v = new qd({ ...m,
                keyframes: r,
                duration: i,
                type: o,
                ease: s,
                times: a,
                isGenerator: !0
            }), y = qt(this.time);
            u.setWithVelocity(v.sample(y - ha).value, v.sample(y).value, ha)
        }
        const {
            onStop: l
        } = this.options;
        l && l(), this.cancel()
    }
    complete() {
        const {
            resolved: t
        } = this;
        t && t.animation.finish()
    }
    cancel() {
        const {
            resolved: t
        } = this;
        t && t.animation.cancel()
    }
    static supports(t) {
        const {
            motionValue: n,
            name: r,
            repeatDelay: i,
            repeatType: o,
            damping: s,
            type: a
        } = t;
        return O2() && r && R2.has(r) && n && n.owner && n.owner.current instanceof HTMLElement && !n.owner.getProps().onUpdate && !i && o !== "mirror" && s !== 0 && a !== "inertia"
    }
}
const pw = Zd(() => window.ScrollTimeline !== void 0);
class V2 {
    constructor(t) {
        this.stop = () => this.runAll("stop"), this.animations = t.filter(Boolean)
    }
    then(t, n) {
        return Promise.all(this.animations).then(t).catch(n)
    }
    getAll(t) {
        return this.animations[0][t]
    }
    setAll(t, n) {
        for (let r = 0; r < this.animations.length; r++) this.animations[r][t] = n
    }
    attachTimeline(t, n) {
        const r = this.animations.map(i => pw() && i.attachTimeline ? i.attachTimeline(t) : n(i));
        return () => {
            r.forEach((i, o) => {
                i && i(), this.animations[o].stop()
            })
        }
    }
    get time() {
        return this.getAll("time")
    }
    set time(t) {
        this.setAll("time", t)
    }
    get speed() {
        return this.getAll("speed")
    }
    set speed(t) {
        this.setAll("speed", t)
    }
    get startTime() {
        return this.getAll("startTime")
    }
    get duration() {
        let t = 0;
        for (let n = 0; n < this.animations.length; n++) t = Math.max(t, this.animations[n].duration);
        return t
    }
    runAll(t) {
        this.animations.forEach(n => n[t]())
    }
    flatten() {
        this.runAll("flatten")
    }
    play() {
        this.runAll("play")
    }
    pause() {
        this.runAll("pause")
    }
    cancel() {
        this.runAll("cancel")
    }
    complete() {
        this.runAll("complete")
    }
}

function F2({
    when: e,
    delay: t,
    delayChildren: n,
    staggerChildren: r,
    staggerDirection: i,
    repeat: o,
    repeatType: s,
    repeatDelay: a,
    from: l,
    elapsed: u,
    ...c
}) {
    return !!Object.keys(c).length
}
const Jd = (e, t, n, r = {}, i, o) => s => {
        const a = Vd(r, e) || {},
            l = a.delay || r.delay || 0;
        let {
            elapsed: u = 0
        } = r;
        u = u - qt(l);
        let c = {
            keyframes: Array.isArray(n) ? n : [null, n],
            ease: "easeOut",
            velocity: t.getVelocity(),
            ...a,
            delay: -u,
            onUpdate: f => {
                t.set(f), a.onUpdate && a.onUpdate(f)
            },
            onComplete: () => {
                s(), a.onComplete && a.onComplete()
            },
            name: e,
            motionValue: t,
            element: o ? void 0 : i
        };
        F2(a) || (c = { ...c,
            ...dk(e, c)
        }), c.duration && (c.duration = qt(c.duration)), c.repeatDelay && (c.repeatDelay = qt(c.repeatDelay)), c.from !== void 0 && (c.keyframes[0] = c.from);
        let d = !1;
        if ((c.type === !1 || c.duration === 0 && !c.repeatDelay) && (c.duration = 0, c.delay === 0 && (d = !0)), d && !o && t.get() !== void 0) {
            const f = Xa(c.keyframes, a);
            if (f !== void 0) return K.update(() => {
                c.onUpdate(f), c.onComplete()
            }), new V2([])
        }
        return !o && Tp.supports(c) ? new Tp(c) : new qd(c)
    },
    I2 = e => !!(e && typeof e == "object" && e.mix && e.toValue),
    z2 = e => nc(e) ? e[e.length - 1] || 0 : e;

function ef(e, t) {
    e.indexOf(t) === -1 && e.push(t)
}

function tf(e, t) {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1)
}
class nf {
    constructor() {
        this.subscriptions = []
    }
    add(t) {
        return ef(this.subscriptions, t), () => tf(this.subscriptions, t)
    }
    notify(t, n, r) {
        const i = this.subscriptions.length;
        if (i)
            if (i === 1) this.subscriptions[0](t, n, r);
            else
                for (let o = 0; o < i; o++) {
                    const s = this.subscriptions[o];
                    s && s(t, n, r)
                }
    }
    getSize() {
        return this.subscriptions.length
    }
    clear() {
        this.subscriptions.length = 0
    }
}
const Ep = 30,
    B2 = e => !isNaN(parseFloat(e)),
    Zi = {
        current: void 0
    };
class $2 {
    constructor(t, n = {}) {
        this.version = "11.13.1", this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (r, i = !0) => {
            const o = Ft.now();
            this.updatedAt !== o && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(r), this.current !== this.prev && this.events.change && this.events.change.notify(this.current), i && this.events.renderRequest && this.events.renderRequest.notify(this.current)
        }, this.hasAnimated = !1, this.setCurrent(t), this.owner = n.owner
    }
    setCurrent(t) {
        this.current = t, this.updatedAt = Ft.now(), this.canTrackVelocity === null && t !== void 0 && (this.canTrackVelocity = B2(this.current))
    }
    setPrevFrameValue(t = this.current) {
        this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt
    }
    onChange(t) {
        return this.on("change", t)
    }
    on(t, n) {
        this.events[t] || (this.events[t] = new nf);
        const r = this.events[t].add(n);
        return t === "change" ? () => {
            r(), K.read(() => {
                this.events.change.getSize() || this.stop()
            })
        } : r
    }
    clearListeners() {
        for (const t in this.events) this.events[t].clear()
    }
    attach(t, n) {
        this.passiveEffect = t, this.stopPassiveEffect = n
    }
    set(t, n = !0) {
        !n || !this.passiveEffect ? this.updateAndNotify(t, n) : this.passiveEffect(t, this.updateAndNotify)
    }
    setWithVelocity(t, n, r) {
        this.set(n), this.prev = void 0, this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt - r
    }
    jump(t, n = !0) {
        this.updateAndNotify(t), this.prev = t, this.prevUpdatedAt = this.prevFrameValue = void 0, n && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
    }
    get() {
        return Zi.current && Zi.current.push(this), this.current
    }
    getPrevious() {
        return this.prev
    }
    getVelocity() {
        const t = Ft.now();
        if (!this.canTrackVelocity || this.prevFrameValue === void 0 || t - this.updatedAt > Ep) return 0;
        const n = Math.min(this.updatedAt - this.prevUpdatedAt, Ep);
        return Gd(parseFloat(this.current) - parseFloat(this.prevFrameValue), n)
    }
    start(t) {
        return this.stop(), new Promise(n => {
            this.hasAnimated = !0, this.animation = t(n), this.events.animationStart && this.events.animationStart.notify()
        }).then(() => {
            this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation()
        })
    }
    stop() {
        this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation()
    }
    isAnimating() {
        return !!this.animation
    }
    clearAnimation() {
        delete this.animation
    }
    destroy() {
        this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
    }
}

function Lt(e, t) {
    return new $2(e, t)
}

function U2(e, t, n) {
    e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Lt(n))
}

function W2(e, t) {
    const n = Ya(e, t);
    let {
        transitionEnd: r = {},
        transition: i = {},
        ...o
    } = n || {};
    o = { ...o,
        ...r
    };
    for (const s in o) {
        const a = z2(o[s]);
        U2(e, s, a)
    }
}
const rf = e => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
    H2 = "framerAppearId",
    mw = "data-" + rf(H2);

function gw(e) {
    return e.props[mw]
}
const Me = e => !!(e && e.getVelocity);

function K2(e) {
    return !!(Me(e) && e.add)
}

function fc(e, t) {
    const n = e.getValue("willChange");
    if (K2(n)) return n.add(t)
}

function G2({
    protectedKeys: e,
    needsAnimating: t
}, n) {
    const r = e.hasOwnProperty(n) && t[n] !== !0;
    return t[n] = !1, r
}

function yw(e, t, {
    delay: n = 0,
    transitionOverride: r,
    type: i
} = {}) {
    var o;
    let {
        transition: s = e.getDefaultTransition(),
        transitionEnd: a,
        ...l
    } = t;
    r && (s = r);
    const u = [],
        c = i && e.animationState && e.animationState.getState()[i];
    for (const d in l) {
        const f = e.getValue(d, (o = e.latestValues[d]) !== null && o !== void 0 ? o : null),
            m = l[d];
        if (m === void 0 || c && G2(c, d)) continue;
        const v = {
            delay: n,
            ...Vd(s || {}, d)
        };
        let y = !1;
        if (window.MotionHandoffAnimation) {
            const p = gw(e);
            if (p) {
                const h = window.MotionHandoffAnimation(p, d, K);
                h !== null && (v.startTime = h, y = !0)
            }
        }
        fc(e, d), f.start(Jd(d, f, m, e.shouldReduceMotion && wr.has(d) ? {
            type: !1
        } : v, e, y));
        const x = f.animation;
        x && u.push(x)
    }
    return a && Promise.all(u).then(() => {
        K.update(() => {
            a && W2(e, a)
        })
    }), u
}

function hc(e, t, n = {}) {
    var r;
    const i = Ya(e, t, n.type === "exit" ? (r = e.presenceContext) === null || r === void 0 ? void 0 : r.custom : void 0);
    let {
        transition: o = e.getDefaultTransition() || {}
    } = i || {};
    n.transitionOverride && (o = n.transitionOverride);
    const s = i ? () => Promise.all(yw(e, i, n)) : () => Promise.resolve(),
        a = e.variantChildren && e.variantChildren.size ? (u = 0) => {
            const {
                delayChildren: c = 0,
                staggerChildren: d,
                staggerDirection: f
            } = o;
            return Q2(e, t, c + u, d, f, n)
        } : () => Promise.resolve(),
        {
            when: l
        } = o;
    if (l) {
        const [u, c] = l === "beforeChildren" ? [s, a] : [a, s];
        return u().then(() => c())
    } else return Promise.all([s(), a(n.delay)])
}

function Q2(e, t, n = 0, r = 0, i = 1, o) {
    const s = [],
        a = (e.variantChildren.size - 1) * r,
        l = i === 1 ? (u = 0) => u * r : (u = 0) => a - u * r;
    return Array.from(e.variantChildren).sort(Y2).forEach((u, c) => {
        u.notify("AnimationStart", t), s.push(hc(u, t, { ...o,
            delay: n + l(c)
        }).then(() => u.notify("AnimationComplete", t)))
    }), Promise.all(s)
}

function Y2(e, t) {
    return e.sortNodePosition(t)
}

function X2(e, t, n = {}) {
    e.notify("AnimationStart", t);
    let r;
    if (Array.isArray(t)) {
        const i = t.map(o => hc(e, o, n));
        r = Promise.all(i)
    } else if (typeof t == "string") r = hc(e, t, n);
    else {
        const i = typeof t == "function" ? Ya(e, t, n.custom) : t;
        r = Promise.all(yw(e, i, n))
    }
    return r.then(() => {
        e.notify("AnimationComplete", t)
    })
}
const q2 = jd.length;

function vw(e) {
    if (!e) return;
    if (!e.isControllingVariants) {
        const n = e.parent ? vw(e.parent) || {} : {};
        return e.props.initial !== void 0 && (n.initial = e.props.initial), n
    }
    const t = {};
    for (let n = 0; n < q2; n++) {
        const r = jd[n],
            i = e.props[r];
        (Eo(i) || i === !1) && (t[r] = i)
    }
    return t
}
const Z2 = [..._d].reverse(),
    J2 = _d.length;

function eA(e) {
    return t => Promise.all(t.map(({
        animation: n,
        options: r
    }) => X2(e, n, r)))
}

function tA(e) {
    let t = eA(e),
        n = kp(),
        r = !0;
    const i = l => (u, c) => {
        var d;
        const f = Ya(e, c, l === "exit" ? (d = e.presenceContext) === null || d === void 0 ? void 0 : d.custom : void 0);
        if (f) {
            const {
                transition: m,
                transitionEnd: v,
                ...y
            } = f;
            u = { ...u,
                ...y,
                ...v
            }
        }
        return u
    };

    function o(l) {
        t = l(e)
    }

    function s(l) {
        const {
            props: u
        } = e, c = vw(e.parent) || {}, d = [], f = new Set;
        let m = {},
            v = 1 / 0;
        for (let x = 0; x < J2; x++) {
            const p = Z2[x],
                h = n[p],
                g = u[p] !== void 0 ? u[p] : c[p],
                S = Eo(g),
                P = p === l ? h.isActive : null;
            P === !1 && (v = x);
            let T = g === c[p] && g !== u[p] && S;
            if (T && r && e.manuallyAnimateOnMount && (T = !1), h.protectedKeys = { ...m
                }, !h.isActive && P === null || !g && !h.prevProp || Qa(g) || typeof g == "boolean") continue;
            const k = nA(h.prevProp, g);
            let E = k || p === l && h.isActive && !T && S || x > v && S,
                D = !1;
            const M = Array.isArray(g) ? g : [g];
            let I = M.reduce(i(p), {});
            P === !1 && (I = {});
            const {
                prevResolvedValues: j = {}
            } = h, H = { ...j,
                ...I
            }, L = F => {
                E = !0, f.has(F) && (D = !0, f.delete(F)), h.needsAnimating[F] = !0;
                const A = e.getValue(F);
                A && (A.liveStyle = !1)
            };
            for (const F in H) {
                const A = I[F],
                    O = j[F];
                if (m.hasOwnProperty(F)) continue;
                let _ = !1;
                nc(A) && nc(O) ? _ = !M0(A, O) : _ = A !== O, _ ? A != null ? L(F) : f.add(F) : A !== void 0 && f.has(F) ? L(F) : h.protectedKeys[F] = !0
            }
            h.prevProp = g, h.prevResolvedValues = I, h.isActive && (m = { ...m,
                ...I
            }), r && e.blockInitialAnimation && (E = !1), E && (!(T && k) || D) && d.push(...M.map(F => ({
                animation: F,
                options: {
                    type: p
                }
            })))
        }
        if (f.size) {
            const x = {};
            f.forEach(p => {
                const h = e.getBaseTarget(p),
                    g = e.getValue(p);
                g && (g.liveStyle = !0), x[p] = h ? ? null
            }), d.push({
                animation: x
            })
        }
        let y = !!d.length;
        return r && (u.initial === !1 || u.initial === u.animate) && !e.manuallyAnimateOnMount && (y = !1), r = !1, y ? t(d) : Promise.resolve()
    }

    function a(l, u) {
        var c;
        if (n[l].isActive === u) return Promise.resolve();
        (c = e.variantChildren) === null || c === void 0 || c.forEach(f => {
            var m;
            return (m = f.animationState) === null || m === void 0 ? void 0 : m.setActive(l, u)
        }), n[l].isActive = u;
        const d = s(l);
        for (const f in n) n[f].protectedKeys = {};
        return d
    }
    return {
        animateChanges: s,
        setActive: a,
        setAnimateFunction: o,
        getState: () => n,
        reset: () => {
            n = kp(), r = !0
        }
    }
}

function nA(e, t) {
    return typeof t == "string" ? t !== e : Array.isArray(t) ? !M0(t, e) : !1
}

function Kn(e = !1) {
    return {
        isActive: e,
        protectedKeys: {},
        needsAnimating: {},
        prevResolvedValues: {}
    }
}

function kp() {
    return {
        animate: Kn(!0),
        whileInView: Kn(),
        whileHover: Kn(),
        whileTap: Kn(),
        whileDrag: Kn(),
        whileFocus: Kn(),
        exit: Kn()
    }
}
class Wn {
    constructor(t) {
        this.isMounted = !1, this.node = t
    }
    update() {}
}
class rA extends Wn {
    constructor(t) {
        super(t), t.animationState || (t.animationState = tA(t))
    }
    updateAnimationControlsSubscription() {
        const {
            animate: t
        } = this.node.getProps();
        Qa(t) && (this.unmountControls = t.subscribe(this.node))
    }
    mount() {
        this.updateAnimationControlsSubscription()
    }
    update() {
        const {
            animate: t
        } = this.node.getProps(), {
            animate: n
        } = this.node.prevProps || {};
        t !== n && this.updateAnimationControlsSubscription()
    }
    unmount() {
        var t;
        this.node.animationState.reset(), (t = this.unmountControls) === null || t === void 0 || t.call(this)
    }
}
let iA = 0;
class oA extends Wn {
    constructor() {
        super(...arguments), this.id = iA++
    }
    update() {
        if (!this.node.presenceContext) return;
        const {
            isPresent: t,
            onExitComplete: n
        } = this.node.presenceContext, {
            isPresent: r
        } = this.node.prevPresenceContext || {};
        if (!this.node.animationState || t === r) return;
        const i = this.node.animationState.setActive("exit", !t);
        n && !t && i.then(() => n(this.id))
    }
    mount() {
        const {
            register: t
        } = this.node.presenceContext || {};
        t && (this.unmount = t(this.id))
    }
    unmount() {}
}
const sA = {
    animation: {
        Feature: rA
    },
    exit: {
        Feature: oA
    }
};

function ww(e, t, n) {
    var r;
    if (e instanceof Element) return [e];
    if (typeof e == "string") {
        let i = document;
        const o = (r = void 0) !== null && r !== void 0 ? r : i.querySelectorAll(e);
        return o ? Array.from(o) : []
    }
    return Array.from(e)
}
const pt = {
    x: !1,
    y: !1
};

function xw() {
    return pt.x || pt.y
}

function Ap(e) {
    return t => {
        t.pointerType === "touch" || xw() || e(t)
    }
}

function aA(e, t, n = {}) {
    const r = new AbortController,
        i = {
            passive: !0,
            ...n,
            signal: r.signal
        },
        o = Ap(s => {
            const {
                target: a
            } = s, l = t(s);
            if (!l || !a) return;
            const u = Ap(c => {
                l(c), a.removeEventListener("pointerleave", u)
            });
            a.addEventListener("pointerleave", u, i)
        });
    return ww(e).forEach(s => {
        s.addEventListener("pointerenter", o, i)
    }), () => r.abort()
}

function lA(e) {
    return e === "x" || e === "y" ? pt[e] ? null : (pt[e] = !0, () => {
        pt[e] = !1
    }) : pt.x || pt.y ? null : (pt.x = pt.y = !0, () => {
        pt.x = pt.y = !1
    })
}
const Sw = e => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1;

function zo(e) {
    return {
        point: {
            x: e.pageX,
            y: e.pageY
        }
    }
}
const uA = e => t => Sw(t) && e(t, zo(t));

function Yt(e, t, n, r = {
    passive: !0
}) {
    return e.addEventListener(t, n, r), () => e.removeEventListener(t, n)
}

function Nn(e, t, n, r) {
    return Yt(e, t, uA(n), r)
}
const Rp = (e, t) => Math.abs(e - t);

function cA(e, t) {
    const n = Rp(e.x, t.x),
        r = Rp(e.y, t.y);
    return Math.sqrt(n ** 2 + r ** 2)
}
class Pw {
    constructor(t, n, {
        transformPagePoint: r,
        contextWindow: i,
        dragSnapToOrigin: o = !1
    } = {}) {
        if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
                if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                const d = Wl(this.lastMoveEventInfo, this.history),
                    f = this.startEvent !== null,
                    m = cA(d.offset, {
                        x: 0,
                        y: 0
                    }) >= 3;
                if (!f && !m) return;
                const {
                    point: v
                } = d, {
                    timestamp: y
                } = ge;
                this.history.push({ ...v,
                    timestamp: y
                });
                const {
                    onStart: x,
                    onMove: p
                } = this.handlers;
                f || (x && x(this.lastMoveEvent, d), this.startEvent = this.lastMoveEvent), p && p(this.lastMoveEvent, d)
            }, this.handlePointerMove = (d, f) => {
                this.lastMoveEvent = d, this.lastMoveEventInfo = Ul(f, this.transformPagePoint), K.update(this.updatePoint, !0)
            }, this.handlePointerUp = (d, f) => {
                this.end();
                const {
                    onEnd: m,
                    onSessionEnd: v,
                    resumeAnimation: y
                } = this.handlers;
                if (this.dragSnapToOrigin && y && y(), !(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                const x = Wl(d.type === "pointercancel" ? this.lastMoveEventInfo : Ul(f, this.transformPagePoint), this.history);
                this.startEvent && m && m(d, x), v && v(d, x)
            }, !Sw(t)) return;
        this.dragSnapToOrigin = o, this.handlers = n, this.transformPagePoint = r, this.contextWindow = i || window;
        const s = zo(t),
            a = Ul(s, this.transformPagePoint),
            {
                point: l
            } = a,
            {
                timestamp: u
            } = ge;
        this.history = [{ ...l,
            timestamp: u
        }];
        const {
            onSessionStart: c
        } = n;
        c && c(t, Wl(a, this.history)), this.removeListeners = Ln(Nn(this.contextWindow, "pointermove", this.handlePointerMove), Nn(this.contextWindow, "pointerup", this.handlePointerUp), Nn(this.contextWindow, "pointercancel", this.handlePointerUp))
    }
    updateHandlers(t) {
        this.handlers = t
    }
    end() {
        this.removeListeners && this.removeListeners(), kt(this.updatePoint)
    }
}

function Ul(e, t) {
    return t ? {
        point: t(e.point)
    } : e
}

function bp(e, t) {
    return {
        x: e.x - t.x,
        y: e.y - t.y
    }
}

function Wl({
    point: e
}, t) {
    return {
        point: e,
        delta: bp(e, Cw(t)),
        offset: bp(e, dA(t)),
        velocity: fA(t, .1)
    }
}

function dA(e) {
    return e[0]
}

function Cw(e) {
    return e[e.length - 1]
}

function fA(e, t) {
    if (e.length < 2) return {
        x: 0,
        y: 0
    };
    let n = e.length - 1,
        r = null;
    const i = Cw(e);
    for (; n >= 0 && (r = e[n], !(i.timestamp - r.timestamp > qt(t)));) n--;
    if (!r) return {
        x: 0,
        y: 0
    };
    const o = Zt(i.timestamp - r.timestamp);
    if (o === 0) return {
        x: 0,
        y: 0
    };
    const s = {
        x: (i.x - r.x) / o,
        y: (i.y - r.y) / o
    };
    return s.x === 1 / 0 && (s.x = 0), s.y === 1 / 0 && (s.y = 0), s
}

function Nr(e) {
    return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current")
}
const Tw = 1e-4,
    hA = 1 - Tw,
    pA = 1 + Tw,
    Ew = .01,
    mA = 0 - Ew,
    gA = 0 + Ew;

function Je(e) {
    return e.max - e.min
}

function yA(e, t, n) {
    return Math.abs(e - t) <= n
}

function Mp(e, t, n, r = .5) {
    e.origin = r, e.originPoint = ie(t.min, t.max, e.origin), e.scale = Je(n) / Je(t), e.translate = ie(n.min, n.max, e.origin) - e.originPoint, (e.scale >= hA && e.scale <= pA || isNaN(e.scale)) && (e.scale = 1), (e.translate >= mA && e.translate <= gA || isNaN(e.translate)) && (e.translate = 0)
}

function Ji(e, t, n, r) {
    Mp(e.x, t.x, n.x, r ? r.originX : void 0), Mp(e.y, t.y, n.y, r ? r.originY : void 0)
}

function Dp(e, t, n) {
    e.min = n.min + t.min, e.max = e.min + Je(t)
}

function vA(e, t, n) {
    Dp(e.x, t.x, n.x), Dp(e.y, t.y, n.y)
}

function Op(e, t, n) {
    e.min = t.min - n.min, e.max = e.min + Je(t)
}

function eo(e, t, n) {
    Op(e.x, t.x, n.x), Op(e.y, t.y, n.y)
}

function wA(e, {
    min: t,
    max: n
}, r) {
    return t !== void 0 && e < t ? e = r ? ie(t, e, r.min) : Math.max(e, t) : n !== void 0 && e > n && (e = r ? ie(n, e, r.max) : Math.min(e, n)), e
}

function Lp(e, t, n) {
    return {
        min: t !== void 0 ? e.min + t : void 0,
        max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0
    }
}

function xA(e, {
    top: t,
    left: n,
    bottom: r,
    right: i
}) {
    return {
        x: Lp(e.x, n, i),
        y: Lp(e.y, t, r)
    }
}

function Np(e, t) {
    let n = t.min - e.min,
        r = t.max - e.max;
    return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), {
        min: n,
        max: r
    }
}

function SA(e, t) {
    return {
        x: Np(e.x, t.x),
        y: Np(e.y, t.y)
    }
}

function PA(e, t) {
    let n = .5;
    const r = Je(e),
        i = Je(t);
    return i > r ? n = mr(t.min, t.max - r, e.min) : r > i && (n = mr(e.min, e.max - i, t.min)), sn(0, 1, n)
}

function CA(e, t) {
    const n = {};
    return t.min !== void 0 && (n.min = t.min - e.min), t.max !== void 0 && (n.max = t.max - e.min), n
}
const pc = .35;

function TA(e = pc) {
    return e === !1 ? e = 0 : e === !0 && (e = pc), {
        x: _p(e, "left", "right"),
        y: _p(e, "top", "bottom")
    }
}

function _p(e, t, n) {
    return {
        min: jp(e, t),
        max: jp(e, n)
    }
}

function jp(e, t) {
    return typeof e == "number" ? e : e[t] || 0
}
const Vp = () => ({
        translate: 0,
        scale: 1,
        origin: 0,
        originPoint: 0
    }),
    _r = () => ({
        x: Vp(),
        y: Vp()
    }),
    Fp = () => ({
        min: 0,
        max: 0
    }),
    ce = () => ({
        x: Fp(),
        y: Fp()
    });

function it(e) {
    return [e("x"), e("y")]
}

function kw({
    top: e,
    left: t,
    right: n,
    bottom: r
}) {
    return {
        x: {
            min: t,
            max: n
        },
        y: {
            min: e,
            max: r
        }
    }
}

function EA({
    x: e,
    y: t
}) {
    return {
        top: t.min,
        right: e.max,
        bottom: t.max,
        left: e.min
    }
}

function kA(e, t) {
    if (!t) return e;
    const n = t({
            x: e.left,
            y: e.top
        }),
        r = t({
            x: e.right,
            y: e.bottom
        });
    return {
        top: n.y,
        left: n.x,
        bottom: r.y,
        right: r.x
    }
}

function Hl(e) {
    return e === void 0 || e === 1
}

function mc({
    scale: e,
    scaleX: t,
    scaleY: n
}) {
    return !Hl(e) || !Hl(t) || !Hl(n)
}

function Yn(e) {
    return mc(e) || Aw(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY
}

function Aw(e) {
    return Ip(e.x) || Ip(e.y)
}

function Ip(e) {
    return e && e !== "0%"
}

function pa(e, t, n) {
    const r = e - n,
        i = t * r;
    return n + i
}

function zp(e, t, n, r, i) {
    return i !== void 0 && (e = pa(e, i, r)), pa(e, n, r) + t
}

function gc(e, t = 0, n = 1, r, i) {
    e.min = zp(e.min, t, n, r, i), e.max = zp(e.max, t, n, r, i)
}

function Rw(e, {
    x: t,
    y: n
}) {
    gc(e.x, t.translate, t.scale, t.originPoint), gc(e.y, n.translate, n.scale, n.originPoint)
}
const Bp = .999999999999,
    $p = 1.0000000000001;

function AA(e, t, n, r = !1) {
    const i = n.length;
    if (!i) return;
    t.x = t.y = 1;
    let o, s;
    for (let a = 0; a < i; a++) {
        o = n[a], s = o.projectionDelta;
        const {
            visualElement: l
        } = o.options;
        l && l.props.style && l.props.style.display === "contents" || (r && o.options.layoutScroll && o.scroll && o !== o.root && Vr(e, {
            x: -o.scroll.offset.x,
            y: -o.scroll.offset.y
        }), s && (t.x *= s.x.scale, t.y *= s.y.scale, Rw(e, s)), r && Yn(o.latestValues) && Vr(e, o.latestValues))
    }
    t.x < $p && t.x > Bp && (t.x = 1), t.y < $p && t.y > Bp && (t.y = 1)
}

function jr(e, t) {
    e.min = e.min + t, e.max = e.max + t
}

function Up(e, t, n, r, i = .5) {
    const o = ie(e.min, e.max, i);
    gc(e, t, n, o, r)
}

function Vr(e, t) {
    Up(e.x, t.x, t.scaleX, t.scale, t.originX), Up(e.y, t.y, t.scaleY, t.scale, t.originY)
}

function bw(e, t) {
    return kw(kA(e.getBoundingClientRect(), t))
}

function RA(e, t, n) {
    const r = bw(e, n),
        {
            scroll: i
        } = t;
    return i && (jr(r.x, i.offset.x), jr(r.y, i.offset.y)), r
}
const Mw = ({
        current: e
    }) => e ? e.ownerDocument.defaultView : null,
    bA = new WeakMap;
class MA {
    constructor(t) {
        this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
            x: 0,
            y: 0
        }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = ce(), this.visualElement = t
    }
    start(t, {
        snapToCursor: n = !1
    } = {}) {
        const {
            presenceContext: r
        } = this.visualElement;
        if (r && r.isPresent === !1) return;
        const i = c => {
                const {
                    dragSnapToOrigin: d
                } = this.getProps();
                d ? this.pauseAnimation() : this.stopAnimation(), n && this.snapToCursor(zo(c).point)
            },
            o = (c, d) => {
                const {
                    drag: f,
                    dragPropagation: m,
                    onDragStart: v
                } = this.getProps();
                if (f && !m && (this.openDragLock && this.openDragLock(), this.openDragLock = lA(f), !this.openDragLock)) return;
                this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), it(x => {
                    let p = this.getAxisMotionValue(x).get() || 0;
                    if (Vt.test(p)) {
                        const {
                            projection: h
                        } = this.visualElement;
                        if (h && h.layout) {
                            const g = h.layout.layoutBox[x];
                            g && (p = Je(g) * (parseFloat(p) / 100))
                        }
                    }
                    this.originPoint[x] = p
                }), v && K.postRender(() => v(c, d)), fc(this.visualElement, "transform");
                const {
                    animationState: y
                } = this.visualElement;
                y && y.setActive("whileDrag", !0)
            },
            s = (c, d) => {
                const {
                    dragPropagation: f,
                    dragDirectionLock: m,
                    onDirectionLock: v,
                    onDrag: y
                } = this.getProps();
                if (!f && !this.openDragLock) return;
                const {
                    offset: x
                } = d;
                if (m && this.currentDirection === null) {
                    this.currentDirection = DA(x), this.currentDirection !== null && v && v(this.currentDirection);
                    return
                }
                this.updateAxis("x", d.point, x), this.updateAxis("y", d.point, x), this.visualElement.render(), y && y(c, d)
            },
            a = (c, d) => this.stop(c, d),
            l = () => it(c => {
                var d;
                return this.getAnimationState(c) === "paused" && ((d = this.getAxisMotionValue(c).animation) === null || d === void 0 ? void 0 : d.play())
            }),
            {
                dragSnapToOrigin: u
            } = this.getProps();
        this.panSession = new Pw(t, {
            onSessionStart: i,
            onStart: o,
            onMove: s,
            onSessionEnd: a,
            resumeAnimation: l
        }, {
            transformPagePoint: this.visualElement.getTransformPagePoint(),
            dragSnapToOrigin: u,
            contextWindow: Mw(this.visualElement)
        })
    }
    stop(t, n) {
        const r = this.isDragging;
        if (this.cancel(), !r) return;
        const {
            velocity: i
        } = n;
        this.startAnimation(i);
        const {
            onDragEnd: o
        } = this.getProps();
        o && K.postRender(() => o(t, n))
    }
    cancel() {
        this.isDragging = !1;
        const {
            projection: t,
            animationState: n
        } = this.visualElement;
        t && (t.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
        const {
            dragPropagation: r
        } = this.getProps();
        !r && this.openDragLock && (this.openDragLock(), this.openDragLock = null), n && n.setActive("whileDrag", !1)
    }
    updateAxis(t, n, r) {
        const {
            drag: i
        } = this.getProps();
        if (!r || !fs(t, i, this.currentDirection)) return;
        const o = this.getAxisMotionValue(t);
        let s = this.originPoint[t] + r[t];
        this.constraints && this.constraints[t] && (s = wA(s, this.constraints[t], this.elastic[t])), o.set(s)
    }
    resolveConstraints() {
        var t;
        const {
            dragConstraints: n,
            dragElastic: r
        } = this.getProps(), i = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (t = this.visualElement.projection) === null || t === void 0 ? void 0 : t.layout, o = this.constraints;
        n && Nr(n) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : n && i ? this.constraints = xA(i.layoutBox, n) : this.constraints = !1, this.elastic = TA(r), o !== this.constraints && i && this.constraints && !this.hasMutatedConstraints && it(s => {
            this.constraints !== !1 && this.getAxisMotionValue(s) && (this.constraints[s] = CA(i.layoutBox[s], this.constraints[s]))
        })
    }
    resolveRefConstraints() {
        const {
            dragConstraints: t,
            onMeasureDragConstraints: n
        } = this.getProps();
        if (!t || !Nr(t)) return !1;
        const r = t.current,
            {
                projection: i
            } = this.visualElement;
        if (!i || !i.layout) return !1;
        const o = RA(r, i.root, this.visualElement.getTransformPagePoint());
        let s = SA(i.layout.layoutBox, o);
        if (n) {
            const a = n(EA(s));
            this.hasMutatedConstraints = !!a, a && (s = kw(a))
        }
        return s
    }
    startAnimation(t) {
        const {
            drag: n,
            dragMomentum: r,
            dragElastic: i,
            dragTransition: o,
            dragSnapToOrigin: s,
            onDragTransitionEnd: a
        } = this.getProps(), l = this.constraints || {}, u = it(c => {
            if (!fs(c, n, this.currentDirection)) return;
            let d = l && l[c] || {};
            s && (d = {
                min: 0,
                max: 0
            });
            const f = i ? 200 : 1e6,
                m = i ? 40 : 1e7,
                v = {
                    type: "inertia",
                    velocity: r ? t[c] : 0,
                    bounceStiffness: f,
                    bounceDamping: m,
                    timeConstant: 750,
                    restDelta: 1,
                    restSpeed: 10,
                    ...o,
                    ...d
                };
            return this.startAxisValueAnimation(c, v)
        });
        return Promise.all(u).then(a)
    }
    startAxisValueAnimation(t, n) {
        const r = this.getAxisMotionValue(t);
        return fc(this.visualElement, t), r.start(Jd(t, r, 0, n, this.visualElement, !1))
    }
    stopAnimation() {
        it(t => this.getAxisMotionValue(t).stop())
    }
    pauseAnimation() {
        it(t => {
            var n;
            return (n = this.getAxisMotionValue(t).animation) === null || n === void 0 ? void 0 : n.pause()
        })
    }
    getAnimationState(t) {
        var n;
        return (n = this.getAxisMotionValue(t).animation) === null || n === void 0 ? void 0 : n.state
    }
    getAxisMotionValue(t) {
        const n = `_drag${t.toUpperCase()}`,
            r = this.visualElement.getProps(),
            i = r[n];
        return i || this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
    }
    snapToCursor(t) {
        it(n => {
            const {
                drag: r
            } = this.getProps();
            if (!fs(n, r, this.currentDirection)) return;
            const {
                projection: i
            } = this.visualElement, o = this.getAxisMotionValue(n);
            if (i && i.layout) {
                const {
                    min: s,
                    max: a
                } = i.layout.layoutBox[n];
                o.set(t[n] - ie(s, a, .5))
            }
        })
    }
    scalePositionWithinConstraints() {
        if (!this.visualElement.current) return;
        const {
            drag: t,
            dragConstraints: n
        } = this.getProps(), {
            projection: r
        } = this.visualElement;
        if (!Nr(n) || !r || !this.constraints) return;
        this.stopAnimation();
        const i = {
            x: 0,
            y: 0
        };
        it(s => {
            const a = this.getAxisMotionValue(s);
            if (a && this.constraints !== !1) {
                const l = a.get();
                i[s] = PA({
                    min: l,
                    max: l
                }, this.constraints[s])
            }
        });
        const {
            transformTemplate: o
        } = this.visualElement.getProps();
        this.visualElement.current.style.transform = o ? o({}, "") : "none", r.root && r.root.updateScroll(), r.updateLayout(), this.resolveConstraints(), it(s => {
            if (!fs(s, t, null)) return;
            const a = this.getAxisMotionValue(s),
                {
                    min: l,
                    max: u
                } = this.constraints[s];
            a.set(ie(l, u, i[s]))
        })
    }
    addListeners() {
        if (!this.visualElement.current) return;
        bA.set(this.visualElement, this);
        const t = this.visualElement.current,
            n = Nn(t, "pointerdown", l => {
                const {
                    drag: u,
                    dragListener: c = !0
                } = this.getProps();
                u && c && this.start(l)
            }),
            r = () => {
                const {
                    dragConstraints: l
                } = this.getProps();
                Nr(l) && l.current && (this.constraints = this.resolveRefConstraints())
            },
            {
                projection: i
            } = this.visualElement,
            o = i.addEventListener("measure", r);
        i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()), K.read(r);
        const s = Yt(window, "resize", () => this.scalePositionWithinConstraints()),
            a = i.addEventListener("didUpdate", ({
                delta: l,
                hasLayoutChanged: u
            }) => {
                this.isDragging && u && (it(c => {
                    const d = this.getAxisMotionValue(c);
                    d && (this.originPoint[c] += l[c].translate, d.set(d.get() + l[c].translate))
                }), this.visualElement.render())
            });
        return () => {
            s(), n(), o(), a && a()
        }
    }
    getProps() {
        const t = this.visualElement.getProps(),
            {
                drag: n = !1,
                dragDirectionLock: r = !1,
                dragPropagation: i = !1,
                dragConstraints: o = !1,
                dragElastic: s = pc,
                dragMomentum: a = !0
            } = t;
        return { ...t,
            drag: n,
            dragDirectionLock: r,
            dragPropagation: i,
            dragConstraints: o,
            dragElastic: s,
            dragMomentum: a
        }
    }
}

function fs(e, t, n) {
    return (t === !0 || t === e) && (n === null || n === e)
}

function DA(e, t = 10) {
    let n = null;
    return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"), n
}
class OA extends Wn {
    constructor(t) {
        super(t), this.removeGroupControls = we, this.removeListeners = we, this.controls = new MA(t)
    }
    mount() {
        const {
            dragControls: t
        } = this.node.getProps();
        t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || we
    }
    unmount() {
        this.removeGroupControls(), this.removeListeners()
    }
}
const Wp = e => (t, n) => {
    e && K.postRender(() => e(t, n))
};
class LA extends Wn {
    constructor() {
        super(...arguments), this.removePointerDownListener = we
    }
    onPointerDown(t) {
        this.session = new Pw(t, this.createPanHandlers(), {
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: Mw(this.node)
        })
    }
    createPanHandlers() {
        const {
            onPanSessionStart: t,
            onPanStart: n,
            onPan: r,
            onPanEnd: i
        } = this.node.getProps();
        return {
            onSessionStart: Wp(t),
            onStart: Wp(n),
            onMove: r,
            onEnd: (o, s) => {
                delete this.session, i && K.postRender(() => i(o, s))
            }
        }
    }
    mount() {
        this.removePointerDownListener = Nn(this.node.current, "pointerdown", t => this.onPointerDown(t))
    }
    update() {
        this.session && this.session.updateHandlers(this.createPanHandlers())
    }
    unmount() {
        this.removePointerDownListener(), this.session && this.session.end()
    }
}
const qa = w.createContext(null);

function NA() {
    const e = w.useContext(qa);
    if (e === null) return [!0, null];
    const {
        isPresent: t,
        onExitComplete: n,
        register: r
    } = e, i = w.useId();
    w.useEffect(() => r(i), []);
    const o = w.useCallback(() => n && n(i), [i, n]);
    return !t && n ? [!1, o] : [!0]
}
const of = w.createContext({}), Dw = w.createContext({}), Ms = {
    hasAnimatedSinceResize: !0,
    hasEverUpdated: !1
};

function Hp(e, t) {
    return t.max === t.min ? 0 : e / (t.max - t.min) * 100
}
const Li = {
        correct: (e, t) => {
            if (!t.target) return e;
            if (typeof e == "string")
                if (V.test(e)) e = parseFloat(e);
                else return e;
            const n = Hp(e, t.target.x),
                r = Hp(e, t.target.y);
            return `${n}% ${r}%`
        }
    },
    _A = {
        correct: (e, {
            treeScale: t,
            projectionDelta: n
        }) => {
            const r = e,
                i = zn.parse(e);
            if (i.length > 5) return r;
            const o = zn.createTransformer(e),
                s = typeof i[0] != "number" ? 1 : 0,
                a = n.x.scale * t.x,
                l = n.y.scale * t.y;
            i[0 + s] /= a, i[1 + s] /= l;
            const u = ie(a, l, .5);
            return typeof i[2 + s] == "number" && (i[2 + s] /= u), typeof i[3 + s] == "number" && (i[3 + s] /= u), o(i)
        }
    },
    ma = {};

function jA(e) {
    Object.assign(ma, e)
}
const {
    schedule: sf,
    cancel: jM
} = D0(queueMicrotask, !1);
class VA extends w.Component {
    componentDidMount() {
        const {
            visualElement: t,
            layoutGroup: n,
            switchLayoutGroup: r,
            layoutId: i
        } = this.props, {
            projection: o
        } = t;
        jA(FA), o && (n.group && n.group.add(o), r && r.register && i && r.register(o), o.root.didUpdate(), o.addEventListener("animationComplete", () => {
            this.safeToRemove()
        }), o.setOptions({ ...o.options,
            onExitComplete: () => this.safeToRemove()
        })), Ms.hasEverUpdated = !0
    }
    getSnapshotBeforeUpdate(t) {
        const {
            layoutDependency: n,
            visualElement: r,
            drag: i,
            isPresent: o
        } = this.props, s = r.projection;
        return s && (s.isPresent = o, i || t.layoutDependency !== n || n === void 0 ? s.willUpdate() : this.safeToRemove(), t.isPresent !== o && (o ? s.promote() : s.relegate() || K.postRender(() => {
            const a = s.getStack();
            (!a || !a.members.length) && this.safeToRemove()
        }))), null
    }
    componentDidUpdate() {
        const {
            projection: t
        } = this.props.visualElement;
        t && (t.root.didUpdate(), sf.postRender(() => {
            !t.currentAnimation && t.isLead() && this.safeToRemove()
        }))
    }
    componentWillUnmount() {
        const {
            visualElement: t,
            layoutGroup: n,
            switchLayoutGroup: r
        } = this.props, {
            projection: i
        } = t;
        i && (i.scheduleCheckAfterUnmount(), n && n.group && n.group.remove(i), r && r.deregister && r.deregister(i))
    }
    safeToRemove() {
        const {
            safeToRemove: t
        } = this.props;
        t && t()
    }
    render() {
        return null
    }
}

function Ow(e) {
    const [t, n] = NA(), r = w.useContext( of );
    return C.jsx(VA, { ...e,
        layoutGroup: r,
        switchLayoutGroup: w.useContext(Dw),
        isPresent: t,
        safeToRemove: n
    })
}
const FA = {
        borderRadius: { ...Li,
            applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
        },
        borderTopLeftRadius: Li,
        borderTopRightRadius: Li,
        borderBottomLeftRadius: Li,
        borderBottomRightRadius: Li,
        boxShadow: _A
    },
    Lw = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
    IA = Lw.length,
    Kp = e => typeof e == "string" ? parseFloat(e) : e,
    Gp = e => typeof e == "number" || V.test(e);

function zA(e, t, n, r, i, o) {
    i ? (e.opacity = ie(0, n.opacity !== void 0 ? n.opacity : 1, BA(r)), e.opacityExit = ie(t.opacity !== void 0 ? t.opacity : 1, 0, $A(r))) : o && (e.opacity = ie(t.opacity !== void 0 ? t.opacity : 1, n.opacity !== void 0 ? n.opacity : 1, r));
    for (let s = 0; s < IA; s++) {
        const a = `border${Lw[s]}Radius`;
        let l = Qp(t, a),
            u = Qp(n, a);
        if (l === void 0 && u === void 0) continue;
        l || (l = 0), u || (u = 0), l === 0 || u === 0 || Gp(l) === Gp(u) ? (e[a] = Math.max(ie(Kp(l), Kp(u), r), 0), (Vt.test(u) || Vt.test(l)) && (e[a] += "%")) : e[a] = u
    }(t.rotate || n.rotate) && (e.rotate = ie(t.rotate || 0, n.rotate || 0, r))
}

function Qp(e, t) {
    return e[t] !== void 0 ? e[t] : e.borderRadius
}
const BA = Nw(0, .5, F0),
    $A = Nw(.5, .95, we);

function Nw(e, t, n) {
    return r => r < e ? 0 : r > t ? 1 : n(mr(e, t, r))
}

function Yp(e, t) {
    e.min = t.min, e.max = t.max
}

function rt(e, t) {
    Yp(e.x, t.x), Yp(e.y, t.y)
}

function Xp(e, t) {
    e.translate = t.translate, e.scale = t.scale, e.originPoint = t.originPoint, e.origin = t.origin
}

function qp(e, t, n, r, i) {
    return e -= t, e = pa(e, 1 / n, r), i !== void 0 && (e = pa(e, 1 / i, r)), e
}

function UA(e, t = 0, n = 1, r = .5, i, o = e, s = e) {
    if (Vt.test(t) && (t = parseFloat(t), t = ie(s.min, s.max, t / 100) - s.min), typeof t != "number") return;
    let a = ie(o.min, o.max, r);
    e === o && (a -= t), e.min = qp(e.min, t, n, a, i), e.max = qp(e.max, t, n, a, i)
}

function Zp(e, t, [n, r, i], o, s) {
    UA(e, t[n], t[r], t[i], t.scale, o, s)
}
const WA = ["x", "scaleX", "originX"],
    HA = ["y", "scaleY", "originY"];

function Jp(e, t, n, r) {
    Zp(e.x, t, WA, n ? n.x : void 0, r ? r.x : void 0), Zp(e.y, t, HA, n ? n.y : void 0, r ? r.y : void 0)
}

function em(e) {
    return e.translate === 0 && e.scale === 1
}

function _w(e) {
    return em(e.x) && em(e.y)
}

function tm(e, t) {
    return e.min === t.min && e.max === t.max
}

function KA(e, t) {
    return tm(e.x, t.x) && tm(e.y, t.y)
}

function nm(e, t) {
    return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max)
}

function jw(e, t) {
    return nm(e.x, t.x) && nm(e.y, t.y)
}

function rm(e) {
    return Je(e.x) / Je(e.y)
}

function im(e, t) {
    return e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint
}
class GA {
    constructor() {
        this.members = []
    }
    add(t) {
        ef(this.members, t), t.scheduleRender()
    }
    remove(t) {
        if (tf(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
            const n = this.members[this.members.length - 1];
            n && this.promote(n)
        }
    }
    relegate(t) {
        const n = this.members.findIndex(i => t === i);
        if (n === 0) return !1;
        let r;
        for (let i = n; i >= 0; i--) {
            const o = this.members[i];
            if (o.isPresent !== !1) {
                r = o;
                break
            }
        }
        return r ? (this.promote(r), !0) : !1
    }
    promote(t, n) {
        const r = this.lead;
        if (t !== r && (this.prevLead = r, this.lead = t, t.show(), r)) {
            r.instance && r.scheduleRender(), t.scheduleRender(), t.resumeFrom = r, n && (t.resumeFrom.preserveOpacity = !0), r.snapshot && (t.snapshot = r.snapshot, t.snapshot.latestValues = r.animationValues || r.latestValues), t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
            const {
                crossfade: i
            } = t.options;
            i === !1 && r.hide()
        }
    }
    exitAnimationComplete() {
        this.members.forEach(t => {
            const {
                options: n,
                resumingFrom: r
            } = t;
            n.onExitComplete && n.onExitComplete(), r && r.options.onExitComplete && r.options.onExitComplete()
        })
    }
    scheduleRender() {
        this.members.forEach(t => {
            t.instance && t.scheduleRender(!1)
        })
    }
    removeLeadSnapshot() {
        this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
    }
}

function QA(e, t, n) {
    let r = "";
    const i = e.x.translate / t.x,
        o = e.y.translate / t.y,
        s = (n == null ? void 0 : n.z) || 0;
    if ((i || o || s) && (r = `translate3d(${i}px, ${o}px, ${s}px) `), (t.x !== 1 || t.y !== 1) && (r += `scale(${1/t.x}, ${1/t.y}) `), n) {
        const {
            transformPerspective: u,
            rotate: c,
            rotateX: d,
            rotateY: f,
            skewX: m,
            skewY: v
        } = n;
        u && (r = `perspective(${u}px) ${r}`), c && (r += `rotate(${c}deg) `), d && (r += `rotateX(${d}deg) `), f && (r += `rotateY(${f}deg) `), m && (r += `skewX(${m}deg) `), v && (r += `skewY(${v}deg) `)
    }
    const a = e.x.scale * t.x,
        l = e.y.scale * t.y;
    return (a !== 1 || l !== 1) && (r += `scale(${a}, ${l})`), r || "none"
}
const YA = (e, t) => e.depth - t.depth;
class XA {
    constructor() {
        this.children = [], this.isDirty = !1
    }
    add(t) {
        ef(this.children, t), this.isDirty = !0
    }
    remove(t) {
        tf(this.children, t), this.isDirty = !0
    }
    forEach(t) {
        this.isDirty && this.children.sort(YA), this.isDirty = !1, this.children.forEach(t)
    }
}

function Ds(e) {
    const t = Me(e) ? e.get() : e;
    return I2(t) ? t.toValue() : t
}

function qA(e, t) {
    const n = Ft.now(),
        r = ({
            timestamp: i
        }) => {
            const o = i - n;
            o >= t && (kt(r), e(o - t))
        };
    return K.read(r, !0), () => kt(r)
}

function ZA(e) {
    return e instanceof SVGElement && e.tagName !== "svg"
}

function JA(e, t, n) {
    const r = Me(e) ? e : Lt(e);
    return r.start(Jd("", r, t, n)), r.animation
}
const Xn = {
        type: "projectionFrame",
        totalNodes: 0,
        resolvedTargetDeltas: 0,
        recalculatedProjection: 0
    },
    zi = typeof window < "u" && window.MotionDebug !== void 0,
    Kl = ["", "X", "Y", "Z"],
    eR = {
        visibility: "hidden"
    },
    om = 1e3;
let tR = 0;

function Gl(e, t, n, r) {
    const {
        latestValues: i
    } = t;
    i[e] && (n[e] = i[e], t.setStaticValue(e, 0), r && (r[e] = 0))
}

function Vw(e) {
    if (e.hasCheckedOptimisedAppear = !0, e.root === e) return;
    const {
        visualElement: t
    } = e.options;
    if (!t) return;
    const n = gw(t);
    if (window.MotionHasOptimisedAnimation(n, "transform")) {
        const {
            layout: i,
            layoutId: o
        } = e.options;
        window.MotionCancelOptimisedAnimation(n, "transform", K, !(i || o))
    }
    const {
        parent: r
    } = e;
    r && !r.hasCheckedOptimisedAppear && Vw(r)
}

function Fw({
    attachResizeListener: e,
    defaultParent: t,
    measureScroll: n,
    checkIsScrollRoot: r,
    resetTransform: i
}) {
    return class {
        constructor(s = {}, a = t == null ? void 0 : t()) {
            this.id = tR++, this.animationId = 0, this.children = new Set, this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = {
                x: 1,
                y: 1
            }, this.eventHandlers = new Map, this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
                this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots())
            }, this.updateProjection = () => {
                this.projectionUpdateScheduled = !1, zi && (Xn.totalNodes = Xn.resolvedTargetDeltas = Xn.recalculatedProjection = 0), this.nodes.forEach(iR), this.nodes.forEach(uR), this.nodes.forEach(cR), this.nodes.forEach(oR), zi && window.MotionDebug.record(Xn)
            }, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map, this.latestValues = s, this.root = a ? a.root || a : this, this.path = a ? [...a.path, a] : [], this.parent = a, this.depth = a ? a.depth + 1 : 0;
            for (let l = 0; l < this.path.length; l++) this.path[l].shouldResetTransform = !0;
            this.root === this && (this.nodes = new XA)
        }
        addEventListener(s, a) {
            return this.eventHandlers.has(s) || this.eventHandlers.set(s, new nf), this.eventHandlers.get(s).add(a)
        }
        notifyListeners(s, ...a) {
            const l = this.eventHandlers.get(s);
            l && l.notify(...a)
        }
        hasListeners(s) {
            return this.eventHandlers.has(s)
        }
        mount(s, a = this.root.hasTreeAnimated) {
            if (this.instance) return;
            this.isSVG = ZA(s), this.instance = s;
            const {
                layoutId: l,
                layout: u,
                visualElement: c
            } = this.options;
            if (c && !c.current && c.mount(s), this.root.nodes.add(this), this.parent && this.parent.children.add(this), a && (u || l) && (this.isLayoutDirty = !0), e) {
                let d;
                const f = () => this.root.updateBlockedByResize = !1;
                e(s, () => {
                    this.root.updateBlockedByResize = !0, d && d(), d = qA(f, 250), Ms.hasAnimatedSinceResize && (Ms.hasAnimatedSinceResize = !1, this.nodes.forEach(am))
                })
            }
            l && this.root.registerSharedNode(l, this), this.options.animate !== !1 && c && (l || u) && this.addEventListener("didUpdate", ({
                delta: d,
                hasLayoutChanged: f,
                hasRelativeTargetChanged: m,
                layout: v
            }) => {
                if (this.isTreeAnimationBlocked()) {
                    this.target = void 0, this.relativeTarget = void 0;
                    return
                }
                const y = this.options.transition || c.getDefaultTransition() || mR,
                    {
                        onLayoutAnimationStart: x,
                        onLayoutAnimationComplete: p
                    } = c.getProps(),
                    h = !this.targetLayout || !jw(this.targetLayout, v) || m,
                    g = !f && m;
                if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || g || f && (h || !this.currentAnimation)) {
                    this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(d, g);
                    const S = { ...Vd(y, "layout"),
                        onPlay: x,
                        onComplete: p
                    };
                    (c.shouldReduceMotion || this.options.layoutRoot) && (S.delay = 0, S.type = !1), this.startAnimation(S)
                } else f || am(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                this.targetLayout = v
            })
        }
        unmount() {
            this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
            const s = this.getStack();
            s && s.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, kt(this.updateProjection)
        }
        blockUpdate() {
            this.updateManuallyBlocked = !0
        }
        unblockUpdate() {
            this.updateManuallyBlocked = !1
        }
        isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize
        }
        isTreeAnimationBlocked() {
            return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
        }
        startUpdate() {
            this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(dR), this.animationId++)
        }
        getTransformTemplate() {
            const {
                visualElement: s
            } = this.options;
            return s && s.getProps().transformTemplate
        }
        willUpdate(s = !0) {
            if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
                this.options.onExitComplete && this.options.onExitComplete();
                return
            }
            if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && Vw(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty) return;
            this.isLayoutDirty = !0;
            for (let c = 0; c < this.path.length; c++) {
                const d = this.path[c];
                d.shouldResetTransform = !0, d.updateScroll("snapshot"), d.options.layoutRoot && d.willUpdate(!1)
            }
            const {
                layoutId: a,
                layout: l
            } = this.options;
            if (a === void 0 && !l) return;
            const u = this.getTransformTemplate();
            this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0, this.updateSnapshot(), s && this.notifyListeners("willUpdate")
        }
        update() {
            if (this.updateScheduled = !1, this.isUpdateBlocked()) {
                this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(sm);
                return
            }
            this.isUpdating || this.nodes.forEach(aR), this.isUpdating = !1, this.nodes.forEach(lR), this.nodes.forEach(nR), this.nodes.forEach(rR), this.clearAllSnapshots();
            const a = Ft.now();
            ge.delta = sn(0, 1e3 / 60, a - ge.timestamp), ge.timestamp = a, ge.isProcessing = !0, Fl.update.process(ge), Fl.preRender.process(ge), Fl.render.process(ge), ge.isProcessing = !1
        }
        didUpdate() {
            this.updateScheduled || (this.updateScheduled = !0, sf.read(this.scheduleUpdate))
        }
        clearAllSnapshots() {
            this.nodes.forEach(sR), this.sharedNodes.forEach(fR)
        }
        scheduleUpdateProjection() {
            this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, K.preRender(this.updateProjection, !1, !0))
        }
        scheduleCheckAfterUnmount() {
            K.postRender(() => {
                this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
            })
        }
        updateSnapshot() {
            this.snapshot || !this.instance || (this.snapshot = this.measure())
        }
        updateLayout() {
            if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)) return;
            if (this.resumeFrom && !this.resumeFrom.instance)
                for (let l = 0; l < this.path.length; l++) this.path[l].updateScroll();
            const s = this.layout;
            this.layout = this.measure(!1), this.layoutCorrected = ce(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
            const {
                visualElement: a
            } = this.options;
            a && a.notify("LayoutMeasure", this.layout.layoutBox, s ? s.layoutBox : void 0)
        }
        updateScroll(s = "measure") {
            let a = !!(this.options.layoutScroll && this.instance);
            if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === s && (a = !1), a) {
                const l = r(this.instance);
                this.scroll = {
                    animationId: this.root.animationId,
                    phase: s,
                    isRoot: l,
                    offset: n(this.instance),
                    wasRoot: this.scroll ? this.scroll.isRoot : l
                }
            }
        }
        resetTransform() {
            if (!i) return;
            const s = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout,
                a = this.projectionDelta && !_w(this.projectionDelta),
                l = this.getTransformTemplate(),
                u = l ? l(this.latestValues, "") : void 0,
                c = u !== this.prevTransformTemplateValue;
            s && (a || Yn(this.latestValues) || c) && (i(this.instance, u), this.shouldResetTransform = !1, this.scheduleRender())
        }
        measure(s = !0) {
            const a = this.measurePageBox();
            let l = this.removeElementScroll(a);
            return s && (l = this.removeTransform(l)), gR(l), {
                animationId: this.root.animationId,
                measuredBox: a,
                layoutBox: l,
                latestValues: {},
                source: this.id
            }
        }
        measurePageBox() {
            var s;
            const {
                visualElement: a
            } = this.options;
            if (!a) return ce();
            const l = a.measureViewportBox();
            if (!(((s = this.scroll) === null || s === void 0 ? void 0 : s.wasRoot) || this.path.some(yR))) {
                const {
                    scroll: c
                } = this.root;
                c && (jr(l.x, c.offset.x), jr(l.y, c.offset.y))
            }
            return l
        }
        removeElementScroll(s) {
            var a;
            const l = ce();
            if (rt(l, s), !((a = this.scroll) === null || a === void 0) && a.wasRoot) return l;
            for (let u = 0; u < this.path.length; u++) {
                const c = this.path[u],
                    {
                        scroll: d,
                        options: f
                    } = c;
                c !== this.root && d && f.layoutScroll && (d.wasRoot && rt(l, s), jr(l.x, d.offset.x), jr(l.y, d.offset.y))
            }
            return l
        }
        applyTransform(s, a = !1) {
            const l = ce();
            rt(l, s);
            for (let u = 0; u < this.path.length; u++) {
                const c = this.path[u];
                !a && c.options.layoutScroll && c.scroll && c !== c.root && Vr(l, {
                    x: -c.scroll.offset.x,
                    y: -c.scroll.offset.y
                }), Yn(c.latestValues) && Vr(l, c.latestValues)
            }
            return Yn(this.latestValues) && Vr(l, this.latestValues), l
        }
        removeTransform(s) {
            const a = ce();
            rt(a, s);
            for (let l = 0; l < this.path.length; l++) {
                const u = this.path[l];
                if (!u.instance || !Yn(u.latestValues)) continue;
                mc(u.latestValues) && u.updateSnapshot();
                const c = ce(),
                    d = u.measurePageBox();
                rt(c, d), Jp(a, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c)
            }
            return Yn(this.latestValues) && Jp(a, this.latestValues), a
        }
        setTargetDelta(s) {
            this.targetDelta = s, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0
        }
        setOptions(s) {
            this.options = { ...this.options,
                ...s,
                crossfade: s.crossfade !== void 0 ? s.crossfade : !0
            }
        }
        clearMeasurements() {
            this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1
        }
        forceRelativeParentToResolveTarget() {
            this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== ge.timestamp && this.relativeParent.resolveTargetDelta(!0)
        }
        resolveTargetDelta(s = !1) {
            var a;
            const l = this.getLead();
            this.isProjectionDirty || (this.isProjectionDirty = l.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = l.isSharedProjectionDirty);
            const u = !!this.resumingFrom || this !== l;
            if (!(s || u && this.isSharedProjectionDirty || this.isProjectionDirty || !((a = this.parent) === null || a === void 0) && a.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize)) return;
            const {
                layout: d,
                layoutId: f
            } = this.options;
            if (!(!this.layout || !(d || f))) {
                if (this.resolvedRelativeTargetAt = ge.timestamp, !this.targetDelta && !this.relativeTarget) {
                    const m = this.getClosestProjectingParent();
                    m && m.layout && this.animationProgress !== 1 ? (this.relativeParent = m, this.forceRelativeParentToResolveTarget(), this.relativeTarget = ce(), this.relativeTargetOrigin = ce(), eo(this.relativeTargetOrigin, this.layout.layoutBox, m.layout.layoutBox), rt(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                }
                if (!(!this.relativeTarget && !this.targetDelta)) {
                    if (this.target || (this.target = ce(), this.targetWithTransforms = ce()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), vA(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : rt(this.target, this.layout.layoutBox), Rw(this.target, this.targetDelta)) : rt(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
                        this.attemptToResolveRelativeTarget = !1;
                        const m = this.getClosestProjectingParent();
                        m && !!m.resumingFrom == !!this.resumingFrom && !m.options.layoutScroll && m.target && this.animationProgress !== 1 ? (this.relativeParent = m, this.forceRelativeParentToResolveTarget(), this.relativeTarget = ce(), this.relativeTargetOrigin = ce(), eo(this.relativeTargetOrigin, this.target, m.target), rt(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                    }
                    zi && Xn.resolvedTargetDeltas++
                }
            }
        }
        getClosestProjectingParent() {
            if (!(!this.parent || mc(this.parent.latestValues) || Aw(this.parent.latestValues))) return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
        }
        isProjecting() {
            return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
        }
        calcProjection() {
            var s;
            const a = this.getLead(),
                l = !!this.resumingFrom || this !== a;
            let u = !0;
            if ((this.isProjectionDirty || !((s = this.parent) === null || s === void 0) && s.isProjectionDirty) && (u = !1), l && (this.isSharedProjectionDirty || this.isTransformDirty) && (u = !1), this.resolvedRelativeTargetAt === ge.timestamp && (u = !1), u) return;
            const {
                layout: c,
                layoutId: d
            } = this.options;
            if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(c || d)) return;
            rt(this.layoutCorrected, this.layout.layoutBox);
            const f = this.treeScale.x,
                m = this.treeScale.y;
            AA(this.layoutCorrected, this.treeScale, this.path, l), a.layout && !a.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (a.target = a.layout.layoutBox, a.targetWithTransforms = ce());
            const {
                target: v
            } = a;
            if (!v) {
                this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
                return
            }!this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (Xp(this.prevProjectionDelta.x, this.projectionDelta.x), Xp(this.prevProjectionDelta.y, this.projectionDelta.y)), Ji(this.projectionDelta, this.layoutCorrected, v, this.latestValues), (this.treeScale.x !== f || this.treeScale.y !== m || !im(this.projectionDelta.x, this.prevProjectionDelta.x) || !im(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", v)), zi && Xn.recalculatedProjection++
        }
        hide() {
            this.isVisible = !1
        }
        show() {
            this.isVisible = !0
        }
        scheduleRender(s = !0) {
            var a;
            if ((a = this.options.visualElement) === null || a === void 0 || a.scheduleRender(), s) {
                const l = this.getStack();
                l && l.scheduleRender()
            }
            this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
        }
        createProjectionDeltas() {
            this.prevProjectionDelta = _r(), this.projectionDelta = _r(), this.projectionDeltaWithTransform = _r()
        }
        setAnimationOrigin(s, a = !1) {
            const l = this.snapshot,
                u = l ? l.latestValues : {},
                c = { ...this.latestValues
                },
                d = _r();
            (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !a;
            const f = ce(),
                m = l ? l.source : void 0,
                v = this.layout ? this.layout.source : void 0,
                y = m !== v,
                x = this.getStack(),
                p = !x || x.members.length <= 1,
                h = !!(y && !p && this.options.crossfade === !0 && !this.path.some(pR));
            this.animationProgress = 0;
            let g;
            this.mixTargetDelta = S => {
                const P = S / 1e3;
                lm(d.x, s.x, P), lm(d.y, s.y, P), this.setTargetDelta(d), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (eo(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox), hR(this.relativeTarget, this.relativeTargetOrigin, f, P), g && KA(this.relativeTarget, g) && (this.isProjectionDirty = !1), g || (g = ce()), rt(g, this.relativeTarget)), y && (this.animationValues = c, zA(c, u, this.latestValues, P, h, p)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = P
            }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
        }
        startAnimation(s) {
            this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (kt(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = K.update(() => {
                Ms.hasAnimatedSinceResize = !0, this.currentAnimation = JA(0, om, { ...s,
                    onUpdate: a => {
                        this.mixTargetDelta(a), s.onUpdate && s.onUpdate(a)
                    },
                    onComplete: () => {
                        s.onComplete && s.onComplete(), this.completeAnimation()
                    }
                }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0
            })
        }
        completeAnimation() {
            this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
            const s = this.getStack();
            s && s.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete")
        }
        finishAnimation() {
            this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(om), this.currentAnimation.stop()), this.completeAnimation()
        }
        applyTransformsToTarget() {
            const s = this.getLead();
            let {
                targetWithTransforms: a,
                target: l,
                layout: u,
                latestValues: c
            } = s;
            if (!(!a || !l || !u)) {
                if (this !== s && this.layout && u && Iw(this.options.animationType, this.layout.layoutBox, u.layoutBox)) {
                    l = this.target || ce();
                    const d = Je(this.layout.layoutBox.x);
                    l.x.min = s.target.x.min, l.x.max = l.x.min + d;
                    const f = Je(this.layout.layoutBox.y);
                    l.y.min = s.target.y.min, l.y.max = l.y.min + f
                }
                rt(a, l), Vr(a, c), Ji(this.projectionDeltaWithTransform, this.layoutCorrected, a, c)
            }
        }
        registerSharedNode(s, a) {
            this.sharedNodes.has(s) || this.sharedNodes.set(s, new GA), this.sharedNodes.get(s).add(a);
            const u = a.options.initialPromotionConfig;
            a.promote({
                transition: u ? u.transition : void 0,
                preserveFollowOpacity: u && u.shouldPreserveFollowOpacity ? u.shouldPreserveFollowOpacity(a) : void 0
            })
        }
        isLead() {
            const s = this.getStack();
            return s ? s.lead === this : !0
        }
        getLead() {
            var s;
            const {
                layoutId: a
            } = this.options;
            return a ? ((s = this.getStack()) === null || s === void 0 ? void 0 : s.lead) || this : this
        }
        getPrevLead() {
            var s;
            const {
                layoutId: a
            } = this.options;
            return a ? (s = this.getStack()) === null || s === void 0 ? void 0 : s.prevLead : void 0
        }
        getStack() {
            const {
                layoutId: s
            } = this.options;
            if (s) return this.root.sharedNodes.get(s)
        }
        promote({
            needsReset: s,
            transition: a,
            preserveFollowOpacity: l
        } = {}) {
            const u = this.getStack();
            u && u.promote(this, l), s && (this.projectionDelta = void 0, this.needsReset = !0), a && this.setOptions({
                transition: a
            })
        }
        relegate() {
            const s = this.getStack();
            return s ? s.relegate(this) : !1
        }
        resetSkewAndRotation() {
            const {
                visualElement: s
            } = this.options;
            if (!s) return;
            let a = !1;
            const {
                latestValues: l
            } = s;
            if ((l.z || l.rotate || l.rotateX || l.rotateY || l.rotateZ || l.skewX || l.skewY) && (a = !0), !a) return;
            const u = {};
            l.z && Gl("z", s, u, this.animationValues);
            for (let c = 0; c < Kl.length; c++) Gl(`rotate${Kl[c]}`, s, u, this.animationValues), Gl(`skew${Kl[c]}`, s, u, this.animationValues);
            s.render();
            for (const c in u) s.setStaticValue(c, u[c]), this.animationValues && (this.animationValues[c] = u[c]);
            s.scheduleRender()
        }
        getProjectionStyles(s) {
            var a, l;
            if (!this.instance || this.isSVG) return;
            if (!this.isVisible) return eR;
            const u = {
                    visibility: ""
                },
                c = this.getTransformTemplate();
            if (this.needsReset) return this.needsReset = !1, u.opacity = "", u.pointerEvents = Ds(s == null ? void 0 : s.pointerEvents) || "", u.transform = c ? c(this.latestValues, "") : "none", u;
            const d = this.getLead();
            if (!this.projectionDelta || !this.layout || !d.target) {
                const y = {};
                return this.options.layoutId && (y.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, y.pointerEvents = Ds(s == null ? void 0 : s.pointerEvents) || ""), this.hasProjected && !Yn(this.latestValues) && (y.transform = c ? c({}, "") : "none", this.hasProjected = !1), y
            }
            const f = d.animationValues || d.latestValues;
            this.applyTransformsToTarget(), u.transform = QA(this.projectionDeltaWithTransform, this.treeScale, f), c && (u.transform = c(f, u.transform));
            const {
                x: m,
                y: v
            } = this.projectionDelta;
            u.transformOrigin = `${m.origin*100}% ${v.origin*100}% 0`, d.animationValues ? u.opacity = d === this ? (l = (a = f.opacity) !== null && a !== void 0 ? a : this.latestValues.opacity) !== null && l !== void 0 ? l : 1 : this.preserveOpacity ? this.latestValues.opacity : f.opacityExit : u.opacity = d === this ? f.opacity !== void 0 ? f.opacity : "" : f.opacityExit !== void 0 ? f.opacityExit : 0;
            for (const y in ma) {
                if (f[y] === void 0) continue;
                const {
                    correct: x,
                    applyTo: p
                } = ma[y], h = u.transform === "none" ? f[y] : x(f[y], d);
                if (p) {
                    const g = p.length;
                    for (let S = 0; S < g; S++) u[p[S]] = h
                } else u[y] = h
            }
            return this.options.layoutId && (u.pointerEvents = d === this ? Ds(s == null ? void 0 : s.pointerEvents) || "" : "none"), u
        }
        clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0
        }
        resetTree() {
            this.root.nodes.forEach(s => {
                var a;
                return (a = s.currentAnimation) === null || a === void 0 ? void 0 : a.stop()
            }), this.root.nodes.forEach(sm), this.root.sharedNodes.clear()
        }
    }
}

function nR(e) {
    e.updateLayout()
}

function rR(e) {
    var t;
    const n = ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) || e.snapshot;
    if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
        const {
            layoutBox: r,
            measuredBox: i
        } = e.layout, {
            animationType: o
        } = e.options, s = n.source !== e.layout.source;
        o === "size" ? it(d => {
            const f = s ? n.measuredBox[d] : n.layoutBox[d],
                m = Je(f);
            f.min = r[d].min, f.max = f.min + m
        }) : Iw(o, n.layoutBox, r) && it(d => {
            const f = s ? n.measuredBox[d] : n.layoutBox[d],
                m = Je(r[d]);
            f.max = f.min + m, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[d].max = e.relativeTarget[d].min + m)
        });
        const a = _r();
        Ji(a, r, n.layoutBox);
        const l = _r();
        s ? Ji(l, e.applyTransform(i, !0), n.measuredBox) : Ji(l, r, n.layoutBox);
        const u = !_w(a);
        let c = !1;
        if (!e.resumeFrom) {
            const d = e.getClosestProjectingParent();
            if (d && !d.resumeFrom) {
                const {
                    snapshot: f,
                    layout: m
                } = d;
                if (f && m) {
                    const v = ce();
                    eo(v, n.layoutBox, f.layoutBox);
                    const y = ce();
                    eo(y, r, m.layoutBox), jw(v, y) || (c = !0), d.options.layoutRoot && (e.relativeTarget = y, e.relativeTargetOrigin = v, e.relativeParent = d)
                }
            }
        }
        e.notifyListeners("didUpdate", {
            layout: r,
            snapshot: n,
            delta: l,
            layoutDelta: a,
            hasLayoutChanged: u,
            hasRelativeTargetChanged: c
        })
    } else if (e.isLead()) {
        const {
            onExitComplete: r
        } = e.options;
        r && r()
    }
    e.options.transition = void 0
}

function iR(e) {
    zi && Xn.totalNodes++, e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty))
}

function oR(e) {
    e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1
}

function sR(e) {
    e.clearSnapshot()
}

function sm(e) {
    e.clearMeasurements()
}

function aR(e) {
    e.isLayoutDirty = !1
}

function lR(e) {
    const {
        visualElement: t
    } = e.options;
    t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform()
}

function am(e) {
    e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0
}

function uR(e) {
    e.resolveTargetDelta()
}

function cR(e) {
    e.calcProjection()
}

function dR(e) {
    e.resetSkewAndRotation()
}

function fR(e) {
    e.removeLeadSnapshot()
}

function lm(e, t, n) {
    e.translate = ie(t.translate, 0, n), e.scale = ie(t.scale, 1, n), e.origin = t.origin, e.originPoint = t.originPoint
}

function um(e, t, n, r) {
    e.min = ie(t.min, n.min, r), e.max = ie(t.max, n.max, r)
}

function hR(e, t, n, r) {
    um(e.x, t.x, n.x, r), um(e.y, t.y, n.y, r)
}

function pR(e) {
    return e.animationValues && e.animationValues.opacityExit !== void 0
}
const mR = {
        duration: .45,
        ease: [.4, 0, .1, 1]
    },
    cm = e => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e),
    dm = cm("applewebkit/") && !cm("chrome/") ? Math.round : we;

function fm(e) {
    e.min = dm(e.min), e.max = dm(e.max)
}

function gR(e) {
    fm(e.x), fm(e.y)
}

function Iw(e, t, n) {
    return e === "position" || e === "preserve-aspect" && !yA(rm(t), rm(n), .2)
}

function yR(e) {
    var t;
    return e !== e.root && ((t = e.scroll) === null || t === void 0 ? void 0 : t.wasRoot)
}
const vR = Fw({
        attachResizeListener: (e, t) => Yt(e, "resize", t),
        measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop
        }),
        checkIsScrollRoot: () => !0
    }),
    Ql = {
        current: void 0
    },
    zw = Fw({
        measureScroll: e => ({
            x: e.scrollLeft,
            y: e.scrollTop
        }),
        defaultParent: () => {
            if (!Ql.current) {
                const e = new vR({});
                e.mount(window), e.setOptions({
                    layoutScroll: !0
                }), Ql.current = e
            }
            return Ql.current
        },
        resetTransform: (e, t) => {
            e.style.transform = t !== void 0 ? t : "none"
        },
        checkIsScrollRoot: e => window.getComputedStyle(e).position === "fixed"
    }),
    wR = {
        pan: {
            Feature: LA
        },
        drag: {
            Feature: OA,
            ProjectionNode: zw,
            MeasureLayout: Ow
        }
    };

function hm(e, t, n) {
    const {
        props: r
    } = e;
    e.animationState && r.whileHover && e.animationState.setActive("whileHover", n);
    const i = r[n ? "onHoverStart" : "onHoverEnd"];
    i && K.postRender(() => i(t, zo(t)))
}
class xR extends Wn {
    mount() {
        const {
            current: t,
            props: n
        } = this.node;
        t && (this.unmount = aA(t, r => (hm(this.node, r, !0), i => hm(this.node, i, !1)), {
            passive: !n.onHoverStart && !n.onHoverEnd
        }))
    }
    unmount() {}
}
class SR extends Wn {
    constructor() {
        super(...arguments), this.isActive = !1
    }
    onFocus() {
        let t = !1;
        try {
            t = this.node.current.matches(":focus-visible")
        } catch {
            t = !0
        }!t || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0)
    }
    onBlur() {
        !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1)
    }
    mount() {
        this.unmount = Ln(Yt(this.node.current, "focus", () => this.onFocus()), Yt(this.node.current, "blur", () => this.onBlur()))
    }
    unmount() {}
}
const Bw = (e, t) => t ? e === t ? !0 : Bw(e, t.parentElement) : !1;

function Yl(e, t) {
    if (!t) return;
    const n = new PointerEvent("pointer" + e);
    t(n, zo(n))
}
class PR extends Wn {
    constructor() {
        super(...arguments), this.removeStartListeners = we, this.removeEndListeners = we, this.removeAccessibleListeners = we, this.startPointerPress = (t, n) => {
            if (this.isPressing) return;
            this.removeEndListeners();
            const r = this.node.getProps(),
                o = Nn(window, "pointerup", (a, l) => {
                    if (!this.checkPressEnd()) return;
                    const {
                        onTap: u,
                        onTapCancel: c,
                        globalTapTarget: d
                    } = this.node.getProps(), f = !d && !Bw(this.node.current, a.target) ? c : u;
                    f && K.update(() => f(a, l))
                }, {
                    passive: !(r.onTap || r.onPointerUp)
                }),
                s = Nn(window, "pointercancel", (a, l) => this.cancelPress(a, l), {
                    passive: !(r.onTapCancel || r.onPointerCancel)
                });
            this.removeEndListeners = Ln(o, s), this.startPress(t, n)
        }, this.startAccessiblePress = () => {
            const t = o => {
                    if (o.key !== "Enter" || this.isPressing) return;
                    const s = a => {
                        a.key !== "Enter" || !this.checkPressEnd() || Yl("up", (l, u) => {
                            const {
                                onTap: c
                            } = this.node.getProps();
                            c && K.postRender(() => c(l, u))
                        })
                    };
                    this.removeEndListeners(), this.removeEndListeners = Yt(this.node.current, "keyup", s), Yl("down", (a, l) => {
                        this.startPress(a, l)
                    })
                },
                n = Yt(this.node.current, "keydown", t),
                r = () => {
                    this.isPressing && Yl("cancel", (o, s) => this.cancelPress(o, s))
                },
                i = Yt(this.node.current, "blur", r);
            this.removeAccessibleListeners = Ln(n, i)
        }
    }
    startPress(t, n) {
        this.isPressing = !0;
        const {
            onTapStart: r,
            whileTap: i
        } = this.node.getProps();
        i && this.node.animationState && this.node.animationState.setActive("whileTap", !0), r && K.postRender(() => r(t, n))
    }
    checkPressEnd() {
        return this.removeEndListeners(), this.isPressing = !1, this.node.getProps().whileTap && this.node.animationState && this.node.animationState.setActive("whileTap", !1), !xw()
    }
    cancelPress(t, n) {
        if (!this.checkPressEnd()) return;
        const {
            onTapCancel: r
        } = this.node.getProps();
        r && K.postRender(() => r(t, n))
    }
    mount() {
        const t = this.node.getProps(),
            n = Nn(t.globalTapTarget ? window : this.node.current, "pointerdown", this.startPointerPress, {
                passive: !(t.onTapStart || t.onPointerStart)
            }),
            r = Yt(this.node.current, "focus", this.startAccessiblePress);
        this.removeStartListeners = Ln(n, r)
    }
    unmount() {
        this.removeStartListeners(), this.removeEndListeners(), this.removeAccessibleListeners()
    }
}
const yc = new WeakMap,
    Xl = new WeakMap,
    CR = e => {
        const t = yc.get(e.target);
        t && t(e)
    },
    TR = e => {
        e.forEach(CR)
    };

function ER({
    root: e,
    ...t
}) {
    const n = e || document;
    Xl.has(n) || Xl.set(n, {});
    const r = Xl.get(n),
        i = JSON.stringify(t);
    return r[i] || (r[i] = new IntersectionObserver(TR, {
        root: e,
        ...t
    })), r[i]
}

function kR(e, t, n) {
    const r = ER(t);
    return yc.set(e, n), r.observe(e), () => {
        yc.delete(e), r.unobserve(e)
    }
}
const AR = {
    some: 0,
    all: 1
};
class RR extends Wn {
    constructor() {
        super(...arguments), this.hasEnteredView = !1, this.isInView = !1
    }
    startObserver() {
        this.unmount();
        const {
            viewport: t = {}
        } = this.node.getProps(), {
            root: n,
            margin: r,
            amount: i = "some",
            once: o
        } = t, s = {
            root: n ? n.current : void 0,
            rootMargin: r,
            threshold: typeof i == "number" ? i : AR[i]
        }, a = l => {
            const {
                isIntersecting: u
            } = l;
            if (this.isInView === u || (this.isInView = u, o && !u && this.hasEnteredView)) return;
            u && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", u);
            const {
                onViewportEnter: c,
                onViewportLeave: d
            } = this.node.getProps(), f = u ? c : d;
            f && f(l)
        };
        return kR(this.node.current, s, a)
    }
    mount() {
        this.startObserver()
    }
    update() {
        if (typeof IntersectionObserver > "u") return;
        const {
            props: t,
            prevProps: n
        } = this.node;
        ["amount", "margin", "root"].some(bR(t, n)) && this.startObserver()
    }
    unmount() {}
}

function bR({
    viewport: e = {}
}, {
    viewport: t = {}
} = {}) {
    return n => e[n] !== t[n]
}
const MR = {
        inView: {
            Feature: RR
        },
        tap: {
            Feature: PR
        },
        focus: {
            Feature: SR
        },
        hover: {
            Feature: xR
        }
    },
    DR = {
        layout: {
            ProjectionNode: zw,
            MeasureLayout: Ow
        }
    },
    Za = w.createContext({
        transformPagePoint: e => e,
        isStatic: !1,
        reducedMotion: "never"
    }),
    Ja = w.createContext({}),
    af = typeof window < "u",
    el = af ? w.useLayoutEffect : w.useEffect,
    $w = w.createContext({
        strict: !1
    });

function OR(e, t, n, r, i) {
    var o, s;
    const {
        visualElement: a
    } = w.useContext(Ja), l = w.useContext($w), u = w.useContext(qa), c = w.useContext(Za).reducedMotion, d = w.useRef();
    r = r || l.renderer, !d.current && r && (d.current = r(e, {
        visualState: t,
        parent: a,
        props: n,
        presenceContext: u,
        blockInitialAnimation: u ? u.initial === !1 : !1,
        reducedMotionConfig: c
    }));
    const f = d.current,
        m = w.useContext(Dw);
    f && !f.projection && i && (f.type === "html" || f.type === "svg") && LR(d.current, n, i, m);
    const v = w.useRef(!1);
    w.useInsertionEffect(() => {
        f && v.current && f.update(n, u)
    });
    const y = n[mw],
        x = w.useRef(!!y && !(!((o = window.MotionHandoffIsComplete) === null || o === void 0) && o.call(window, y)) && ((s = window.MotionHasOptimisedAnimation) === null || s === void 0 ? void 0 : s.call(window, y)));
    return el(() => {
        f && (v.current = !0, window.MotionIsMounted = !0, f.updateFeatures(), sf.render(f.render), x.current && f.animationState && f.animationState.animateChanges())
    }), w.useEffect(() => {
        f && (!x.current && f.animationState && f.animationState.animateChanges(), x.current && (queueMicrotask(() => {
            var p;
            (p = window.MotionHandoffMarkAsComplete) === null || p === void 0 || p.call(window, y)
        }), x.current = !1))
    }), f
}

function LR(e, t, n, r) {
    const {
        layoutId: i,
        layout: o,
        drag: s,
        dragConstraints: a,
        layoutScroll: l,
        layoutRoot: u
    } = t;
    e.projection = new n(e.latestValues, t["data-framer-portal-id"] ? void 0 : Uw(e.parent)), e.projection.setOptions({
        layoutId: i,
        layout: o,
        alwaysMeasureLayout: !!s || a && Nr(a),
        visualElement: e,
        animationType: typeof o == "string" ? o : "both",
        initialPromotionConfig: r,
        layoutScroll: l,
        layoutRoot: u
    })
}

function Uw(e) {
    if (e) return e.options.allowProjection !== !1 ? e.projection : Uw(e.parent)
}

function NR(e, t, n) {
    return w.useCallback(r => {
        r && e.mount && e.mount(r), t && (r ? t.mount(r) : t.unmount()), n && (typeof n == "function" ? n(r) : Nr(n) && (n.current = r))
    }, [t])
}

function tl(e) {
    return Qa(e.animate) || jd.some(t => Eo(e[t]))
}

function Ww(e) {
    return !!(tl(e) || e.variants)
}

function _R(e, t) {
    if (tl(e)) {
        const {
            initial: n,
            animate: r
        } = e;
        return {
            initial: n === !1 || Eo(n) ? n : void 0,
            animate: Eo(r) ? r : void 0
        }
    }
    return e.inherit !== !1 ? t : {}
}

function jR(e) {
    const {
        initial: t,
        animate: n
    } = _R(e, w.useContext(Ja));
    return w.useMemo(() => ({
        initial: t,
        animate: n
    }), [pm(t), pm(n)])
}

function pm(e) {
    return Array.isArray(e) ? e.join(" ") : e
}
const mm = {
        animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
        exit: ["exit"],
        drag: ["drag", "dragControls"],
        focus: ["whileFocus"],
        hover: ["whileHover", "onHoverStart", "onHoverEnd"],
        tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
        pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
        inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
        layout: ["layout", "layoutId"]
    },
    fi = {};
for (const e in mm) fi[e] = {
    isEnabled: t => mm[e].some(n => !!t[n])
};

function VR(e) {
    for (const t in e) fi[t] = { ...fi[t],
        ...e[t]
    }
}
const FR = Symbol.for("motionComponentSymbol");

function IR({
    preloadedFeatures: e,
    createVisualElement: t,
    useRender: n,
    useVisualState: r,
    Component: i
}) {
    e && VR(e);

    function o(a, l) {
        let u;
        const c = { ...w.useContext(Za),
                ...a,
                layoutId: zR(a)
            },
            {
                isStatic: d
            } = c,
            f = jR(a),
            m = r(a, d);
        if (!d && af) {
            BR();
            const v = $R(c);
            u = v.MeasureLayout, f.visualElement = OR(i, m, c, t, v.ProjectionNode)
        }
        return C.jsxs(Ja.Provider, {
            value: f,
            children: [u && f.visualElement ? C.jsx(u, {
                visualElement: f.visualElement,
                ...c
            }) : null, n(i, a, NR(m, f.visualElement, l), m, d, f.visualElement)]
        })
    }
    const s = w.forwardRef(o);
    return s[FR] = i, s
}

function zR({
    layoutId: e
}) {
    const t = w.useContext( of ).id;
    return t && e !== void 0 ? t + "-" + e : e
}

function BR(e, t) {
    w.useContext($w).strict
}

function $R(e) {
    const {
        drag: t,
        layout: n
    } = fi;
    if (!t && !n) return {};
    const r = { ...t,
        ...n
    };
    return {
        MeasureLayout: t != null && t.isEnabled(e) || n != null && n.isEnabled(e) ? r.MeasureLayout : void 0,
        ProjectionNode: r.ProjectionNode
    }
}
const UR = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];

function lf(e) {
    return typeof e != "string" || e.includes("-") ? !1 : !!(UR.indexOf(e) > -1 || /[A-Z]/u.test(e))
}

function Hw(e, {
    style: t,
    vars: n
}, r, i) {
    Object.assign(e.style, t, i && i.getProjectionStyles(r));
    for (const o in n) e.style.setProperty(o, n[o])
}
const Kw = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);

function Gw(e, t, n, r) {
    Hw(e, t, void 0, r);
    for (const i in t.attrs) e.setAttribute(Kw.has(i) ? i : rf(i), t.attrs[i])
}

function Qw(e, {
    layout: t,
    layoutId: n
}) {
    return wr.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!ma[e] || e === "opacity")
}

function uf(e, t, n) {
    var r;
    const {
        style: i
    } = e, o = {};
    for (const s in i)(Me(i[s]) || t.style && Me(t.style[s]) || Qw(s, e) || ((r = n == null ? void 0 : n.getValue(s)) === null || r === void 0 ? void 0 : r.liveStyle) !== void 0) && (o[s] = i[s]);
    return o
}

function Yw(e, t, n) {
    const r = uf(e, t, n);
    for (const i in e)
        if (Me(e[i]) || Me(t[i])) {
            const o = Vo.indexOf(i) !== -1 ? "attr" + i.charAt(0).toUpperCase() + i.substring(1) : i;
            r[o] = e[i]
        }
    return r
}

function xi(e) {
    const t = w.useRef(null);
    return t.current === null && (t.current = e()), t.current
}

function WR({
    scrapeMotionValuesFromProps: e,
    createRenderState: t,
    onMount: n
}, r, i, o) {
    const s = {
        latestValues: HR(r, i, o, e),
        renderState: t()
    };
    return n && (s.mount = a => n(r, a, s)), s
}
const Xw = e => (t, n) => {
    const r = w.useContext(Ja),
        i = w.useContext(qa),
        o = () => WR(e, t, r, i);
    return n ? o() : xi(o)
};

function HR(e, t, n, r) {
    const i = {},
        o = r(e, {});
    for (const f in o) i[f] = Ds(o[f]);
    let {
        initial: s,
        animate: a
    } = e;
    const l = tl(e),
        u = Ww(e);
    t && u && !l && e.inherit !== !1 && (s === void 0 && (s = t.initial), a === void 0 && (a = t.animate));
    let c = n ? n.initial === !1 : !1;
    c = c || s === !1;
    const d = c ? a : s;
    if (d && typeof d != "boolean" && !Qa(d)) {
        const f = Array.isArray(d) ? d : [d];
        for (let m = 0; m < f.length; m++) {
            const v = Nd(e, f[m]);
            if (v) {
                const {
                    transitionEnd: y,
                    transition: x,
                    ...p
                } = v;
                for (const h in p) {
                    let g = p[h];
                    if (Array.isArray(g)) {
                        const S = c ? g.length - 1 : 0;
                        g = g[S]
                    }
                    g !== null && (i[h] = g)
                }
                for (const h in y) i[h] = y[h]
            }
        }
    }
    return i
}
const cf = () => ({
        style: {},
        transform: {},
        transformOrigin: {},
        vars: {}
    }),
    qw = () => ({ ...cf(),
        attrs: {}
    }),
    Zw = (e, t) => t && typeof e == "number" ? t.transform(e) : e,
    KR = {
        x: "translateX",
        y: "translateY",
        z: "translateZ",
        transformPerspective: "perspective"
    },
    GR = Vo.length;

function QR(e, t, n) {
    let r = "",
        i = !0;
    for (let o = 0; o < GR; o++) {
        const s = Vo[o],
            a = e[s];
        if (a === void 0) continue;
        let l = !0;
        if (typeof a == "number" ? l = a === (s.startsWith("scale") ? 1 : 0) : l = parseFloat(a) === 0, !l || n) {
            const u = Zw(a, Wd[s]);
            if (!l) {
                i = !1;
                const c = KR[s] || s;
                r += `${c}(${u}) `
            }
            n && (t[s] = u)
        }
    }
    return r = r.trim(), n ? r = n(t, i ? "" : r) : i && (r = "none"), r
}

function df(e, t, n) {
    const {
        style: r,
        vars: i,
        transformOrigin: o
    } = e;
    let s = !1,
        a = !1;
    for (const l in t) {
        const u = t[l];
        if (wr.has(l)) {
            s = !0;
            continue
        } else if (U0(l)) {
            i[l] = u;
            continue
        } else {
            const c = Zw(u, Wd[l]);
            l.startsWith("origin") ? (a = !0, o[l] = c) : r[l] = c
        }
    }
    if (t.transform || (s || n ? r.transform = QR(t, e.transform, n) : r.transform && (r.transform = "none")), a) {
        const {
            originX: l = "50%",
            originY: u = "50%",
            originZ: c = 0
        } = o;
        r.transformOrigin = `${l} ${u} ${c}`
    }
}

function gm(e, t, n) {
    return typeof e == "string" ? e : V.transform(t + n * e)
}

function YR(e, t, n) {
    const r = gm(t, e.x, e.width),
        i = gm(n, e.y, e.height);
    return `${r} ${i}`
}
const XR = {
        offset: "stroke-dashoffset",
        array: "stroke-dasharray"
    },
    qR = {
        offset: "strokeDashoffset",
        array: "strokeDasharray"
    };

function ZR(e, t, n = 1, r = 0, i = !0) {
    e.pathLength = 1;
    const o = i ? XR : qR;
    e[o.offset] = V.transform(-r);
    const s = V.transform(t),
        a = V.transform(n);
    e[o.array] = `${s} ${a}`
}

function ff(e, {
    attrX: t,
    attrY: n,
    attrScale: r,
    originX: i,
    originY: o,
    pathLength: s,
    pathSpacing: a = 1,
    pathOffset: l = 0,
    ...u
}, c, d) {
    if (df(e, u, d), c) {
        e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
        return
    }
    e.attrs = e.style, e.style = {};
    const {
        attrs: f,
        style: m,
        dimensions: v
    } = e;
    f.transform && (v && (m.transform = f.transform), delete f.transform), v && (i !== void 0 || o !== void 0 || m.transform) && (m.transformOrigin = YR(v, i !== void 0 ? i : .5, o !== void 0 ? o : .5)), t !== void 0 && (f.x = t), n !== void 0 && (f.y = n), r !== void 0 && (f.scale = r), s !== void 0 && ZR(f, s, a, l, !1)
}
const hf = e => typeof e == "string" && e.toLowerCase() === "svg",
    JR = {
        useVisualState: Xw({
            scrapeMotionValuesFromProps: Yw,
            createRenderState: qw,
            onMount: (e, t, {
                renderState: n,
                latestValues: r
            }) => {
                K.read(() => {
                    try {
                        n.dimensions = typeof t.getBBox == "function" ? t.getBBox() : t.getBoundingClientRect()
                    } catch {
                        n.dimensions = {
                            x: 0,
                            y: 0,
                            width: 0,
                            height: 0
                        }
                    }
                }), K.render(() => {
                    ff(n, r, hf(t.tagName), e.transformTemplate), Gw(t, n)
                })
            }
        })
    },
    eb = {
        useVisualState: Xw({
            scrapeMotionValuesFromProps: uf,
            createRenderState: cf
        })
    };

function Jw(e, t, n) {
    for (const r in t) !Me(t[r]) && !Qw(r, n) && (e[r] = t[r])
}

function tb({
    transformTemplate: e
}, t) {
    return w.useMemo(() => {
        const n = cf();
        return df(n, t, e), Object.assign({}, n.vars, n.style)
    }, [t])
}

function nb(e, t) {
    const n = e.style || {},
        r = {};
    return Jw(r, n, e), Object.assign(r, tb(e, t)), r
}

function rb(e, t) {
    const n = {},
        r = nb(e, t);
    return e.drag && e.dragListener !== !1 && (n.draggable = !1, r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none", r.touchAction = e.drag === !0 ? "none" : `pan-${e.drag==="x"?"y":"x"}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0), n.style = r, n
}
const ib = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);

function ga(e) {
    return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || ib.has(e)
}
let e1 = e => !ga(e);

function ob(e) {
    e && (e1 = t => t.startsWith("on") ? !ga(t) : e(t))
}
try {
    ob(require("@emotion/is-prop-valid").default)
} catch {}

function sb(e, t, n) {
    const r = {};
    for (const i in e) i === "values" && typeof e.values == "object" || (e1(i) || n === !0 && ga(i) || !t && !ga(i) || e.draggable && i.startsWith("onDrag")) && (r[i] = e[i]);
    return r
}

function ab(e, t, n, r) {
    const i = w.useMemo(() => {
        const o = qw();
        return ff(o, t, hf(r), e.transformTemplate), { ...o.attrs,
            style: { ...o.style
            }
        }
    }, [t]);
    if (e.style) {
        const o = {};
        Jw(o, e.style, e), i.style = { ...o,
            ...i.style
        }
    }
    return i
}

function lb(e = !1) {
    return (n, r, i, {
        latestValues: o
    }, s) => {
        const l = (lf(n) ? ab : rb)(r, o, s, n),
            u = sb(r, typeof n == "string", e),
            c = n !== w.Fragment ? { ...u,
                ...l,
                ref: i
            } : {},
            {
                children: d
            } = r,
            f = w.useMemo(() => Me(d) ? d.get() : d, [d]);
        return w.createElement(n, { ...c,
            children: f
        })
    }
}

function ub(e, t) {
    return function(r, {
        forwardMotionProps: i
    } = {
        forwardMotionProps: !1
    }) {
        const s = { ...lf(r) ? JR : eb,
            preloadedFeatures: e,
            useRender: lb(i),
            createVisualElement: t,
            Component: r
        };
        return IR(s)
    }
}
const vc = {
        current: null
    },
    t1 = {
        current: !1
    };

function cb() {
    if (t1.current = !0, !!af)
        if (window.matchMedia) {
            const e = window.matchMedia("(prefers-reduced-motion)"),
                t = () => vc.current = e.matches;
            e.addListener(t), t()
        } else vc.current = !1
}

function db(e, t, n) {
    for (const r in t) {
        const i = t[r],
            o = n[r];
        if (Me(i)) e.addValue(r, i);
        else if (Me(o)) e.addValue(r, Lt(i, {
            owner: e
        }));
        else if (o !== i)
            if (e.hasValue(r)) {
                const s = e.getValue(r);
                s.liveStyle === !0 ? s.jump(i) : s.hasAnimated || s.set(i)
            } else {
                const s = e.getStaticValue(r);
                e.addValue(r, Lt(s !== void 0 ? s : i, {
                    owner: e
                }))
            }
    }
    for (const r in n) t[r] === void 0 && e.removeValue(r);
    return t
}
const ym = new WeakMap,
    fb = [...K0, Re, zn],
    hb = e => fb.find(H0(e)),
    vm = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
class pb {
    scrapeMotionValuesFromProps(t, n, r) {
        return {}
    }
    constructor({
        parent: t,
        props: n,
        presenceContext: r,
        reducedMotionConfig: i,
        blockInitialAnimation: o,
        visualState: s
    }, a = {}) {
        this.current = null, this.children = new Set, this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = new Map, this.KeyframeResolver = Bd, this.features = {}, this.valueSubscriptions = new Map, this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
            this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
        }, this.renderScheduledAt = 0, this.scheduleRender = () => {
            const f = Ft.now();
            this.renderScheduledAt < f && (this.renderScheduledAt = f, K.render(this.render, !1, !0))
        };
        const {
            latestValues: l,
            renderState: u
        } = s;
        this.latestValues = l, this.baseTarget = { ...l
        }, this.initialValues = n.initial ? { ...l
        } : {}, this.renderState = u, this.parent = t, this.props = n, this.presenceContext = r, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = i, this.options = a, this.blockInitialAnimation = !!o, this.isControllingVariants = tl(n), this.isVariantNode = Ww(n), this.isVariantNode && (this.variantChildren = new Set), this.manuallyAnimateOnMount = !!(t && t.current);
        const {
            willChange: c,
            ...d
        } = this.scrapeMotionValuesFromProps(n, {}, this);
        for (const f in d) {
            const m = d[f];
            l[f] !== void 0 && Me(m) && m.set(l[f], !1)
        }
    }
    mount(t) {
        this.current = t, ym.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((n, r) => this.bindToMotionValue(r, n)), t1.current || cb(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : vc.current, this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext)
    }
    unmount() {
        ym.delete(this.current), this.projection && this.projection.unmount(), kt(this.notifyUpdate), kt(this.render), this.valueSubscriptions.forEach(t => t()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
        for (const t in this.events) this.events[t].clear();
        for (const t in this.features) {
            const n = this.features[t];
            n && (n.unmount(), n.isMounted = !1)
        }
        this.current = null
    }
    bindToMotionValue(t, n) {
        this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
        const r = wr.has(t),
            i = n.on("change", a => {
                this.latestValues[t] = a, this.props.onUpdate && K.preRender(this.notifyUpdate), r && this.projection && (this.projection.isTransformDirty = !0)
            }),
            o = n.on("renderRequest", this.scheduleRender);
        let s;
        window.MotionCheckAppearSync && (s = window.MotionCheckAppearSync(this, t, n)), this.valueSubscriptions.set(t, () => {
            i(), o(), s && s(), n.owner && n.stop()
        })
    }
    sortNodePosition(t) {
        return !this.current || !this.sortInstanceNodePosition || this.type !== t.type ? 0 : this.sortInstanceNodePosition(this.current, t.current)
    }
    updateFeatures() {
        let t = "animation";
        for (t in fi) {
            const n = fi[t];
            if (!n) continue;
            const {
                isEnabled: r,
                Feature: i
            } = n;
            if (!this.features[t] && i && r(this.props) && (this.features[t] = new i(this)), this.features[t]) {
                const o = this.features[t];
                o.isMounted ? o.update() : (o.mount(), o.isMounted = !0)
            }
        }
    }
    triggerBuild() {
        this.build(this.renderState, this.latestValues, this.props)
    }
    measureViewportBox() {
        return this.current ? this.measureInstanceViewportBox(this.current, this.props) : ce()
    }
    getStaticValue(t) {
        return this.latestValues[t]
    }
    setStaticValue(t, n) {
        this.latestValues[t] = n
    }
    update(t, n) {
        (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = t, this.prevPresenceContext = this.presenceContext, this.presenceContext = n;
        for (let r = 0; r < vm.length; r++) {
            const i = vm[r];
            this.propEventSubscriptions[i] && (this.propEventSubscriptions[i](), delete this.propEventSubscriptions[i]);
            const o = "on" + i,
                s = t[o];
            s && (this.propEventSubscriptions[i] = this.on(i, s))
        }
        this.prevMotionValues = db(this, this.scrapeMotionValuesFromProps(t, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue()
    }
    getProps() {
        return this.props
    }
    getVariant(t) {
        return this.props.variants ? this.props.variants[t] : void 0
    }
    getDefaultTransition() {
        return this.props.transition
    }
    getTransformPagePoint() {
        return this.props.transformPagePoint
    }
    getClosestVariantNode() {
        return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
    }
    addVariantChild(t) {
        const n = this.getClosestVariantNode();
        if (n) return n.variantChildren && n.variantChildren.add(t), () => n.variantChildren.delete(t)
    }
    addValue(t, n) {
        const r = this.values.get(t);
        n !== r && (r && this.removeValue(t), this.bindToMotionValue(t, n), this.values.set(t, n), this.latestValues[t] = n.get())
    }
    removeValue(t) {
        this.values.delete(t);
        const n = this.valueSubscriptions.get(t);
        n && (n(), this.valueSubscriptions.delete(t)), delete this.latestValues[t], this.removeValueFromRenderState(t, this.renderState)
    }
    hasValue(t) {
        return this.values.has(t)
    }
    getValue(t, n) {
        if (this.props.values && this.props.values[t]) return this.props.values[t];
        let r = this.values.get(t);
        return r === void 0 && n !== void 0 && (r = Lt(n === null ? void 0 : n, {
            owner: this
        }), this.addValue(t, r)), r
    }
    readValue(t, n) {
        var r;
        let i = this.latestValues[t] !== void 0 || !this.current ? this.latestValues[t] : (r = this.getBaseTargetFromProps(this.props, t)) !== null && r !== void 0 ? r : this.readValueFromInstance(this.current, t, this.options);
        return i != null && (typeof i == "string" && (B0(i) || z0(i)) ? i = parseFloat(i) : !hb(i) && zn.test(n) && (i = ew(t, n)), this.setBaseTarget(t, Me(i) ? i.get() : i)), Me(i) ? i.get() : i
    }
    setBaseTarget(t, n) {
        this.baseTarget[t] = n
    }
    getBaseTarget(t) {
        var n;
        const {
            initial: r
        } = this.props;
        let i;
        if (typeof r == "string" || typeof r == "object") {
            const s = Nd(this.props, r, (n = this.presenceContext) === null || n === void 0 ? void 0 : n.custom);
            s && (i = s[t])
        }
        if (r && i !== void 0) return i;
        const o = this.getBaseTargetFromProps(this.props, t);
        return o !== void 0 && !Me(o) ? o : this.initialValues[t] !== void 0 && i === void 0 ? void 0 : this.baseTarget[t]
    }
    on(t, n) {
        return this.events[t] || (this.events[t] = new nf), this.events[t].add(n)
    }
    notify(t, ...n) {
        this.events[t] && this.events[t].notify(...n)
    }
}
class n1 extends pb {
    constructor() {
        super(...arguments), this.KeyframeResolver = tw
    }
    sortInstanceNodePosition(t, n) {
        return t.compareDocumentPosition(n) & 2 ? 1 : -1
    }
    getBaseTargetFromProps(t, n) {
        return t.style ? t.style[n] : void 0
    }
    removeValueFromRenderState(t, {
        vars: n,
        style: r
    }) {
        delete n[t], delete r[t]
    }
    handleChildMotionValue() {
        this.childSubscription && (this.childSubscription(), delete this.childSubscription);
        const {
            children: t
        } = this.props;
        Me(t) && (this.childSubscription = t.on("change", n => {
            this.current && (this.current.textContent = `${n}`)
        }))
    }
}

function mb(e) {
    return window.getComputedStyle(e)
}
class gb extends n1 {
    constructor() {
        super(...arguments), this.type = "html", this.renderInstance = Hw
    }
    readValueFromInstance(t, n) {
        if (wr.has(n)) {
            const r = Hd(n);
            return r && r.default || 0
        } else {
            const r = mb(t),
                i = (U0(n) ? r.getPropertyValue(n) : r[n]) || 0;
            return typeof i == "string" ? i.trim() : i
        }
    }
    measureInstanceViewportBox(t, {
        transformPagePoint: n
    }) {
        return bw(t, n)
    }
    build(t, n, r) {
        df(t, n, r.transformTemplate)
    }
    scrapeMotionValuesFromProps(t, n, r) {
        return uf(t, n, r)
    }
}
class yb extends n1 {
    constructor() {
        super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = ce
    }
    getBaseTargetFromProps(t, n) {
        return t[n]
    }
    readValueFromInstance(t, n) {
        if (wr.has(n)) {
            const r = Hd(n);
            return r && r.default || 0
        }
        return n = Kw.has(n) ? n : rf(n), t.getAttribute(n)
    }
    scrapeMotionValuesFromProps(t, n, r) {
        return Yw(t, n, r)
    }
    build(t, n, r) {
        ff(t, n, this.isSVGTag, r.transformTemplate)
    }
    renderInstance(t, n, r, i) {
        Gw(t, n, r, i)
    }
    mount(t) {
        this.isSVGTag = hf(t.tagName), super.mount(t)
    }
}
const vb = (e, t) => lf(e) ? new yb(t) : new gb(t, {
        allowProjection: e !== w.Fragment
    }),
    wb = ub({ ...sA,
        ...MR,
        ...wR,
        ...DR
    }, vb),
    xe = sk(wb);
class xb extends w.Component {
    getSnapshotBeforeUpdate(t) {
        const n = this.props.childRef.current;
        if (n && t.isPresent && !this.props.isPresent) {
            const r = this.props.sizeRef.current;
            r.height = n.offsetHeight || 0, r.width = n.offsetWidth || 0, r.top = n.offsetTop, r.left = n.offsetLeft
        }
        return null
    }
    componentDidUpdate() {}
    render() {
        return this.props.children
    }
}

function Sb({
    children: e,
    isPresent: t
}) {
    const n = w.useId(),
        r = w.useRef(null),
        i = w.useRef({
            width: 0,
            height: 0,
            top: 0,
            left: 0
        }),
        {
            nonce: o
        } = w.useContext(Za);
    return w.useInsertionEffect(() => {
        const {
            width: s,
            height: a,
            top: l,
            left: u
        } = i.current;
        if (t || !r.current || !s || !a) return;
        r.current.dataset.motionPopId = n;
        const c = document.createElement("style");
        return o && (c.nonce = o), document.head.appendChild(c), c.sheet && c.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${s}px !important;
            height: ${a}px !important;
            top: ${l}px !important;
            left: ${u}px !important;
          }
        `), () => {
            document.head.removeChild(c)
        }
    }, [t]), C.jsx(xb, {
        isPresent: t,
        childRef: r,
        sizeRef: i,
        children: w.cloneElement(e, {
            ref: r
        })
    })
}
const Pb = ({
    children: e,
    initial: t,
    isPresent: n,
    onExitComplete: r,
    custom: i,
    presenceAffectsLayout: o,
    mode: s
}) => {
    const a = xi(Cb),
        l = w.useId(),
        u = w.useCallback(d => {
            a.set(d, !0);
            for (const f of a.values())
                if (!f) return;
            r && r()
        }, [a, r]),
        c = w.useMemo(() => ({
            id: l,
            initial: t,
            isPresent: n,
            custom: i,
            onExitComplete: u,
            register: d => (a.set(d, !1), () => a.delete(d))
        }), o ? [Math.random(), u] : [n, u]);
    return w.useMemo(() => {
        a.forEach((d, f) => a.set(f, !1))
    }, [n]), w.useEffect(() => {
        !n && !a.size && r && r()
    }, [n]), s === "popLayout" && (e = C.jsx(Sb, {
        isPresent: n,
        children: e
    })), C.jsx(qa.Provider, {
        value: c,
        children: e
    })
};

function Cb() {
    return new Map
}
const hs = e => e.key || "";

function wm(e) {
    const t = [];
    return w.Children.forEach(e, n => {
        w.isValidElement(n) && t.push(n)
    }), t
}
const Tb = ({
    children: e,
    exitBeforeEnter: t,
    custom: n,
    initial: r = !0,
    onExitComplete: i,
    presenceAffectsLayout: o = !0,
    mode: s = "sync"
}) => {
    const a = w.useMemo(() => wm(e), [e]),
        l = a.map(hs),
        u = w.useRef(!0),
        c = w.useRef(a),
        d = xi(() => new Map),
        [f, m] = w.useState(a),
        [v, y] = w.useState(a);
    el(() => {
        u.current = !1, c.current = a;
        for (let h = 0; h < v.length; h++) {
            const g = hs(v[h]);
            l.includes(g) ? d.delete(g) : d.get(g) !== !0 && d.set(g, !1)
        }
    }, [v, l.length, l.join("-")]);
    const x = [];
    if (a !== f) {
        let h = [...a];
        for (let g = 0; g < v.length; g++) {
            const S = v[g],
                P = hs(S);
            l.includes(P) || (h.splice(g, 0, S), x.push(S))
        }
        s === "wait" && x.length && (h = x), y(wm(h)), m(a);
        return
    }
    const {
        forceRender: p
    } = w.useContext( of );
    return C.jsx(C.Fragment, {
        children: v.map(h => {
            const g = hs(h),
                S = a === v || l.includes(g),
                P = () => {
                    if (d.has(g)) d.set(g, !0);
                    else return;
                    let T = !0;
                    d.forEach(k => {
                        k || (T = !1)
                    }), T && (p == null || p(), y(c.current), i && i())
                };
            return C.jsx(Pb, {
                isPresent: S,
                initial: !u.current || r ? void 0 : !1,
                custom: S ? void 0 : n,
                presenceAffectsLayout: o,
                mode: s,
                onExitComplete: S ? void 0 : P,
                children: h
            }, g)
        })
    })
};

function Eb(e) {
    const t = xi(() => Lt(e)),
        {
            isStatic: n
        } = w.useContext(Za);
    if (n) {
        const [, r] = w.useState(e);
        w.useEffect(() => t.on("change", r), [])
    }
    return t
}

function r1(e, t) {
    const n = Eb(t()),
        r = () => n.set(t());
    return r(), el(() => {
        const i = () => K.preRender(r, !1, !0),
            o = e.map(s => s.on("change", i));
        return () => {
            o.forEach(s => s()), kt(r)
        }
    }), n
}
const kb = e => e && typeof e == "object" && e.mix,
    Ab = e => kb(e) ? e.mix : void 0;

function Rb(...e) {
    const t = !Array.isArray(e[0]),
        n = t ? 0 : -1,
        r = e[0 + n],
        i = e[1 + n],
        o = e[2 + n],
        s = e[3 + n],
        a = Xd(i, o, {
            mixer: Ab(o[0]),
            ...s
        });
    return t ? a(r) : a
}

function bb(e) {
    Zi.current = [], e();
    const t = r1(Zi.current, e);
    return Zi.current = void 0, t
}

function ql(e, t, n, r) {
    if (typeof e == "function") return bb(e);
    const i = typeof t == "function" ? t : Rb(t, n, r);
    return Array.isArray(e) ? xm(e, i) : xm([e], ([o]) => i(o))
}

function xm(e, t) {
    const n = xi(() => []);
    return r1(e, () => {
        n.length = 0;
        const r = e.length;
        for (let i = 0; i < r; i++) n[i] = e[i].get();
        return t(n)
    })
}
const Os = new WeakMap;
let hn;

function Mb(e, t) {
    if (t) {
        const {
            inlineSize: n,
            blockSize: r
        } = t[0];
        return {
            width: n,
            height: r
        }
    } else return e instanceof SVGElement && "getBBox" in e ? e.getBBox() : {
        width: e.offsetWidth,
        height: e.offsetHeight
    }
}

function Db({
    target: e,
    contentRect: t,
    borderBoxSize: n
}) {
    var r;
    (r = Os.get(e)) === null || r === void 0 || r.forEach(i => {
        i({
            target: e,
            contentSize: t,
            get size() {
                return Mb(e, n)
            }
        })
    })
}

function Ob(e) {
    e.forEach(Db)
}

function Lb() {
    typeof ResizeObserver > "u" || (hn = new ResizeObserver(Ob))
}

function Nb(e, t) {
    hn || Lb();
    const n = ww(e);
    return n.forEach(r => {
        let i = Os.get(r);
        i || (i = new Set, Os.set(r, i)), i.add(t), hn == null || hn.observe(r)
    }), () => {
        n.forEach(r => {
            const i = Os.get(r);
            i == null || i.delete(t), i != null && i.size || hn == null || hn.unobserve(r)
        })
    }
}
const Ls = new Set;
let to;

function _b() {
    to = () => {
        const e = {
                width: window.innerWidth,
                height: window.innerHeight
            },
            t = {
                target: window,
                size: e,
                contentSize: e
            };
        Ls.forEach(n => n(t))
    }, window.addEventListener("resize", to)
}

function jb(e) {
    return Ls.add(e), to || _b(), () => {
        Ls.delete(e), !Ls.size && to && (to = void 0)
    }
}

function Vb(e, t) {
    return typeof e == "function" ? jb(e) : Nb(e, t)
}
const Fb = 50,
    Sm = () => ({
        current: 0,
        offset: [],
        progress: 0,
        scrollLength: 0,
        targetOffset: 0,
        targetLength: 0,
        containerLength: 0,
        velocity: 0
    }),
    Ib = () => ({
        time: 0,
        x: Sm(),
        y: Sm()
    }),
    zb = {
        x: {
            length: "Width",
            position: "Left"
        },
        y: {
            length: "Height",
            position: "Top"
        }
    };

function Pm(e, t, n, r) {
    const i = n[t],
        {
            length: o,
            position: s
        } = zb[t],
        a = i.current,
        l = n.time;
    i.current = e[`scroll${s}`], i.scrollLength = e[`scroll${o}`] - e[`client${o}`], i.offset.length = 0, i.offset[0] = 0, i.offset[1] = i.scrollLength, i.progress = mr(0, i.scrollLength, i.current);
    const u = r - l;
    i.velocity = u > Fb ? 0 : Gd(i.current - a, u)
}

function Bb(e, t, n) {
    Pm(e, "x", t, n), Pm(e, "y", t, n), t.time = n
}

function $b(e, t) {
    const n = {
        x: 0,
        y: 0
    };
    let r = e;
    for (; r && r !== t;)
        if (r instanceof HTMLElement) n.x += r.offsetLeft, n.y += r.offsetTop, r = r.offsetParent;
        else if (r.tagName === "svg") {
        const i = r.getBoundingClientRect();
        r = r.parentElement;
        const o = r.getBoundingClientRect();
        n.x += i.left - o.left, n.y += i.top - o.top
    } else if (r instanceof SVGGraphicsElement) {
        const {
            x: i,
            y: o
        } = r.getBBox();
        n.x += i, n.y += o;
        let s = null,
            a = r.parentNode;
        for (; !s;) a.tagName === "svg" && (s = a), a = r.parentNode;
        r = s
    } else break;
    return n
}
const Ub = {
        Enter: [
            [0, 1],
            [1, 1]
        ],
        Exit: [
            [0, 0],
            [1, 0]
        ],
        Any: [
            [1, 0],
            [0, 1]
        ],
        All: [
            [0, 0],
            [1, 1]
        ]
    },
    wc = {
        start: 0,
        center: .5,
        end: 1
    };

function Cm(e, t, n = 0) {
    let r = 0;
    if (e in wc && (e = wc[e]), typeof e == "string") {
        const i = parseFloat(e);
        e.endsWith("px") ? r = i : e.endsWith("%") ? e = i / 100 : e.endsWith("vw") ? r = i / 100 * document.documentElement.clientWidth : e.endsWith("vh") ? r = i / 100 * document.documentElement.clientHeight : e = i
    }
    return typeof e == "number" && (r = t * e), n + r
}
const Wb = [0, 0];

function Hb(e, t, n, r) {
    let i = Array.isArray(e) ? e : Wb,
        o = 0,
        s = 0;
    return typeof e == "number" ? i = [e, e] : typeof e == "string" && (e = e.trim(), e.includes(" ") ? i = e.split(" ") : i = [e, wc[e] ? e : "0"]), o = Cm(i[0], n, r), s = Cm(i[1], t), o - s
}
const Kb = {
    x: 0,
    y: 0
};

function Gb(e) {
    return "getBBox" in e && e.tagName !== "svg" ? e.getBBox() : {
        width: e.clientWidth,
        height: e.clientHeight
    }
}

function Qb(e, t, n) {
    const {
        offset: r = Ub.All
    } = n, {
        target: i = e,
        axis: o = "y"
    } = n, s = o === "y" ? "height" : "width", a = i !== e ? $b(i, e) : Kb, l = i === e ? {
        width: e.scrollWidth,
        height: e.scrollHeight
    } : Gb(i), u = {
        width: e.clientWidth,
        height: e.clientHeight
    };
    t[o].offset.length = 0;
    let c = !t[o].interpolate;
    const d = r.length;
    for (let f = 0; f < d; f++) {
        const m = Hb(r[f], u[s], l[s], a[o]);
        !c && m !== t[o].interpolatorOffsets[f] && (c = !0), t[o].offset[f] = m
    }
    c && (t[o].interpolate = Xd(t[o].offset, cw(r)), t[o].interpolatorOffsets = [...t[o].offset]), t[o].progress = t[o].interpolate(t[o].current)
}

function Yb(e, t = e, n) {
    if (n.x.targetOffset = 0, n.y.targetOffset = 0, t !== e) {
        let r = t;
        for (; r && r !== e;) n.x.targetOffset += r.offsetLeft, n.y.targetOffset += r.offsetTop, r = r.offsetParent
    }
    n.x.targetLength = t === e ? t.scrollWidth : t.clientWidth, n.y.targetLength = t === e ? t.scrollHeight : t.clientHeight, n.x.containerLength = e.clientWidth, n.y.containerLength = e.clientHeight
}

function Xb(e, t, n, r = {}) {
    return {
        measure: () => Yb(e, r.target, n),
        update: i => {
            Bb(e, n, i), (r.offset || r.target) && Qb(e, n, r)
        },
        notify: () => t(n)
    }
}
const Ni = new WeakMap,
    Tm = new WeakMap,
    Zl = new WeakMap,
    Em = e => e === document.documentElement ? window : e;

function pf(e, {
    container: t = document.documentElement,
    ...n
} = {}) {
    let r = Zl.get(t);
    r || (r = new Set, Zl.set(t, r));
    const i = Ib(),
        o = Xb(t, e, i, n);
    if (r.add(o), !Ni.has(t)) {
        const a = () => {
                for (const f of r) f.measure()
            },
            l = () => {
                for (const f of r) f.update(ge.timestamp)
            },
            u = () => {
                for (const f of r) f.notify()
            },
            c = () => {
                K.read(a, !1, !0), K.read(l, !1, !0), K.update(u, !1, !0)
            };
        Ni.set(t, c);
        const d = Em(t);
        window.addEventListener("resize", c, {
            passive: !0
        }), t !== document.documentElement && Tm.set(t, Vb(t, c)), d.addEventListener("scroll", c, {
            passive: !0
        })
    }
    const s = Ni.get(t);
    return K.read(s, !1, !0), () => {
        var a;
        kt(s);
        const l = Zl.get(t);
        if (!l || (l.delete(o), l.size)) return;
        const u = Ni.get(t);
        Ni.delete(t), u && (Em(t).removeEventListener("scroll", u), (a = Tm.get(t)) === null || a === void 0 || a(), window.removeEventListener("resize", u))
    }
}

function i1(e, t) {
    let n;
    const r = () => {
        const {
            currentTime: i
        } = t, s = (i === null ? 0 : i.value) / 100;
        n !== s && e(s), n = s
    };
    return K.update(r, !0), () => kt(r)
}

function qb({
    source: e,
    container: t,
    axis: n = "y"
}) {
    e && (t = e);
    const r = {
            value: 0
        },
        i = pf(o => {
            r.value = o[n].progress * 100
        }, {
            container: t,
            axis: n
        });
    return {
        currentTime: r,
        cancel: i
    }
}
const Jl = new Map;

function o1({
    source: e,
    container: t = document.documentElement,
    axis: n = "y"
} = {}) {
    e && (t = e), Jl.has(t) || Jl.set(t, {});
    const r = Jl.get(t);
    return r[n] || (r[n] = pw() ? new ScrollTimeline({
        source: t,
        axis: n
    }) : qb({
        source: t,
        axis: n
    })), r[n]
}

function Zb(e) {
    return e.length === 2
}

function s1(e) {
    return e && (e.target || e.offset)
}

function Jb(e, t) {
    return Zb(e) || s1(t) ? pf(n => {
        e(n[t.axis].progress, n)
    }, t) : i1(e, o1(t))
}

function eM(e, t) {
    if (e.flatten(), s1(t)) return e.pause(), pf(n => {
        e.time = e.duration * n[t.axis].progress
    }, t); {
        const n = o1(t);
        return e.attachTimeline ? e.attachTimeline(n, r => (r.pause(), i1(i => {
            r.time = r.duration * i
        }, n))) : we
    }
}

function tM(e, {
    axis: t = "y",
    ...n
} = {}) {
    const r = {
        axis: t,
        ...n
    };
    return typeof e == "function" ? Jb(e, r) : eM(e, r)
}

function km(e, t) {
    pk(!!(!t || t.current))
}
const nM = () => ({
    scrollX: Lt(0),
    scrollY: Lt(0),
    scrollXProgress: Lt(0),
    scrollYProgress: Lt(0)
});

function rM({
    container: e,
    target: t,
    layoutEffect: n = !0,
    ...r
} = {}) {
    const i = xi(nM);
    return (n ? el : w.useEffect)(() => (km("target", t), km("container", e), tM((s, {
        x: a,
        y: l
    }) => {
        i.scrollX.set(a.current), i.scrollXProgress.set(a.progress), i.scrollY.set(l.current), i.scrollYProgress.set(l.progress)
    }, { ...r,
        container: (e == null ? void 0 : e.current) || void 0,
        target: (t == null ? void 0 : t.current) || void 0
    })), [e, t, JSON.stringify(r.offset)]), i
}
const iM = Uv("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
        variants: {
            variant: {
                default: "bg-primary text-primary-foreground hover:bg-primary/90",
                destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
                outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
                secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                ghost: "hover:bg-accent hover:text-accent-foreground",
                link: "text-primary underline-offset-4 hover:underline"
            },
            size: {
                default: "h-10 px-4 py-2",
                sm: "h-9 rounded-md px-3",
                lg: "h-11 rounded-md px-8",
                icon: "h-10 w-10"
            }
        },
        defaultVariants: {
            variant: "default",
            size: "default"
        }
    }),
    ya = w.forwardRef(({
        className: e,
        variant: t,
        size: n,
        asChild: r = !1,
        ...i
    }, o) => {
        const s = r ? ZP : "button";
        return C.jsx(s, {
            className: He(iM({
                variant: t,
                size: n,
                className: e
            })),
            ref: o,
            ...i
        })
    });
ya.displayName = "Button";
const no = w.forwardRef(({
    className: e,
    ...t
}, n) => C.jsx("div", {
    ref: n,
    className: He("rounded-lg border bg-card text-card-foreground shadow-sm", e),
    ...t
}));
no.displayName = "Card";
const oM = w.forwardRef(({
    className: e,
    ...t
}, n) => C.jsx("div", {
    ref: n,
    className: He("flex flex-col space-y-1.5 p-6", e),
    ...t
}));
oM.displayName = "CardHeader";
const sM = w.forwardRef(({
    className: e,
    ...t
}, n) => C.jsx("div", {
    ref: n,
    className: He("text-2xl font-semibold leading-none tracking-tight", e),
    ...t
}));
sM.displayName = "CardTitle";
const aM = w.forwardRef(({
    className: e,
    ...t
}, n) => C.jsx("div", {
    ref: n,
    className: He("text-sm text-muted-foreground", e),
    ...t
}));
aM.displayName = "CardDescription";
const a1 = w.forwardRef(({
    className: e,
    ...t
}, n) => C.jsx("div", {
    ref: n,
    className: He("p-6 pt-0", e),
    ...t
}));
a1.displayName = "CardContent";
const lM = w.forwardRef(({
    className: e,
    ...t
}, n) => C.jsx("div", {
    ref: n,
    className: He("flex items-center p-6 pt-0", e),
    ...t
}));
lM.displayName = "CardFooter";

function uM({
    text: e,
    className: t = "",
    onCopy: n
}) {
    const [r, i] = w.useState(!1), o = async () => {
        try {
            if (navigator.clipboard && navigator.clipboard.writeText) await navigator.clipboard.writeText(e);
            else {
                const s = document.createElement("textarea");
                s.value = e, s.style.position = "fixed", s.style.opacity = "0", document.body.appendChild(s), s.select(), document.execCommand("copy"), document.body.removeChild(s)
            }
            i(!0), n == null || n(), setTimeout(() => i(!1), 2e3)
        } catch (s) {
            console.error("Failed to copy text: ", s)
        }
    };
    return C.jsx(ya, {
        variant: "ghost",
        size: "sm",
        onClick: o,
        className: `ml-2 text-muted-foreground hover:text-primary transition-colors flex-shrink-0 ${t}`,
        "data-testid": "button-copy-address",
        children: r ? "✅" : "📋"
    })
}

function cM({
    message: e,
    show: t,
    onClose: n
}) {
    return w.useEffect(() => {
        if (t) {
            const r = setTimeout(() => {
                n()
            }, 3e3);
            return () => clearTimeout(r)
        }
    }, [t, n]), C.jsx(Tb, {
        children: t && C.jsx(xe.div, {
            initial: {
                x: 400,
                opacity: 0
            },
            animate: {
                x: 0,
                opacity: 1
            },
            exit: {
                x: 400,
                opacity: 0
            },
            transition: {
                type: "spring",
                stiffness: 500,
                damping: 30
            },
            className: "fixed top-5 right-5 z-50 bg-primary text-primary-foreground font-bold py-3 px-6 rounded-lg shadow-lg",
            "data-testid": "toast-notification",
            children: e
        })
    })
}
var l1 = {
        color: void 0,
        size: void 0,
        className: void 0,
        style: void 0,
        attr: void 0
    },
    Am = Ne.createContext && Ne.createContext(l1),
    dM = ["attr", "size", "title"];

function fM(e, t) {
    if (e == null) return {};
    var n = hM(e, t),
        r, i;
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (i = 0; i < o.length; i++) r = o[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r])
    }
    return n
}

function hM(e, t) {
    if (e == null) return {};
    var n = {};
    for (var r in e)
        if (Object.prototype.hasOwnProperty.call(e, r)) {
            if (t.indexOf(r) >= 0) continue;
            n[r] = e[r]
        }
    return n
}

function va() {
    return va = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }, va.apply(this, arguments)
}

function Rm(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function wa(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t] != null ? arguments[t] : {};
        t % 2 ? Rm(Object(n), !0).forEach(function(r) {
            pM(e, r, n[r])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Rm(Object(n)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r))
        })
    }
    return e
}

function pM(e, t, n) {
    return t = mM(t), t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function mM(e) {
    var t = gM(e, "string");
    return typeof t == "symbol" ? t : t + ""
}

function gM(e, t) {
    if (typeof e != "object" || !e) return e;
    var n = e[Symbol.toPrimitive];
    if (n !== void 0) {
        var r = n.call(e, t || "default");
        if (typeof r != "object") return r;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(e)
}

function u1(e) {
    return e && e.map((t, n) => Ne.createElement(t.tag, wa({
        key: n
    }, t.attr), u1(t.child)))
}

function nl(e) {
    return t => Ne.createElement(yM, va({
        attr: wa({}, e.attr)
    }, t), u1(e.child))
}

function yM(e) {
    var t = n => {
        var {
            attr: r,
            size: i,
            title: o
        } = e, s = fM(e, dM), a = i || n.size || "1em", l;
        return n.className && (l = n.className), e.className && (l = (l ? l + " " : "") + e.className), Ne.createElement("svg", va({
            stroke: "currentColor",
            fill: "currentColor",
            strokeWidth: "0"
        }, n.attr, r, s, {
            className: l,
            style: wa(wa({
                color: e.color || n.color
            }, n.style), e.style),
            height: a,
            width: a,
            xmlns: "http://www.w3.org/2000/svg"
        }), o && Ne.createElement("title", null, o), e.children)
    };
    return Am !== void 0 ? Ne.createElement(Am.Consumer, null, n => t(n)) : t(l1)
}

function vM(e) {
    return nl({
        tag: "svg",
        attr: {
            viewBox: "0 0 512 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
            },
            child: []
        }]
    })(e)
}

function wM(e) {
    return nl({
        tag: "svg",
        attr: {
            viewBox: "0 0 448 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
            },
            child: []
        }]
    })(e)
}

function xM(e) {
    return nl({
        tag: "svg",
        attr: {
            viewBox: "0 0 448 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"
            },
            child: []
        }]
    })(e)
}

function SM(e) {
    return nl({
        tag: "svg",
        attr: {
            viewBox: "0 0 512 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M332.8 320h38.4c6.4 0 12.8-6.4 12.8-12.8V172.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v134.4c0 6.4 6.4 12.8 12.8 12.8zm96 0h38.4c6.4 0 12.8-6.4 12.8-12.8V76.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v230.4c0 6.4 6.4 12.8 12.8 12.8zm-288 0h38.4c6.4 0 12.8-6.4 12.8-12.8v-70.4c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v70.4c0 6.4 6.4 12.8 12.8 12.8zm96 0h38.4c6.4 0 12.8-6.4 12.8-12.8V108.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v198.4c0 6.4 6.4 12.8 12.8 12.8zM496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16z"
            },
            child: []
        }]
    })(e)
}
const PM = "/assets/e1xxg3zax77e1_1757703826793-DIwZiEfm.jpeg",
    CM = "/assets/og_1757729671422-CdKCSKov.png",
    TM = "/assets/Untitled%20design%20(4)_1758653362124-BvyLpUIU.png",
    EM = "/assets/Untitled%20design_1758652869359-CcxXbL7O.png";

function kM() {
    const [e, t] = w.useState(!1), [n, r] = w.useState("home"), {
        scrollY: i
    } = rM(), o = ql(i, [0, 500], [0, -250]), s = ql(i, [0, 2e3], [0, 100]), a = "4ZoU9gBfvXvThEb4vRapfVQZiGRF5AKFZP1FjAUKzgbJ", l = [{
        id: "home",
        label: "home",
        icon: KC
    }, {
        id: "buy",
        label: "how to buy",
        icon: GC
    }, {
        id: "origins",
        label: "origins",
        icon: XC
    }, {
        id: "chart",
        label: "chart",
        icon: QC
    }], u = [{
        href: "https://x.com/i/communities/1965671500255514703",
        icon: C.jsx(vM, {}),
        label: "Twitter/X",
        testId: "link-twitter"
    }, {
        href: "https://dexscreener.com/solana/ccyufsfkwbor2ak9zygfcj18eblqwrrnjebpbc6hkcm8",
        icon: C.jsx(SM, {}),
        label: "DexScreener",
        testId: "link-dexscreener"
    }, {
        href: "https://www.tiktok.com/@FACESWAPonpump",
        icon: C.jsx(xM, {}),
        label: "TikTok",
        testId: "link-tiktok"
    }, {
        href: "https://www.instagram.com/FACESWAPonpump/",
        icon: C.jsx(wM, {}),
        label: "Instagram",
        testId: "link-instagram"
    }, {
        href: "https://www.coingecko.com/en/coins/FACESWAP",
        icon: C.jsx("img", {
            src: TM,
            alt: "CoinGecko",
            className: "w-8 h-8 md:w-10 md:h-10 object-contain"
        }),
        label: "CoinGecko",
        testId: "link-coingecko"
    }, {
        href: "https://coinmarketcap.com/currencies/FACESWAP/",
        icon: C.jsx("img", {
            src: EM,
            alt: "CoinMarketCap",
            className: "w-8 h-8 md:w-10 md:h-10 object-contain"
        }),
        label: "CoinMarketCap",
        testId: "link-coinmarketcap"
    }], c = f => {
        const m = document.getElementById(f);
        m && m.scrollIntoView({
            behavior: "smooth"
        })
    }, d = () => {
        t(!0)
    };
    return w.useEffect(() => {
        document.title = "$FACESWAP - The Memecoin of Missed Opportunities";
        const f = () => {
            const m = ["home", "origins", "buy", "chart"],
                v = window.scrollY + window.innerHeight / 2;
            for (const y of m) {
                const x = document.getElementById(y);
                if (x) {
                    const {
                        offsetTop: p,
                        offsetHeight: h
                    } = x;
                    if (v >= p && v < p + h) {
                        r(y);
                        break
                    }
                }
            }
        };
        return window.addEventListener("scroll", f), f(), () => window.removeEventListener("scroll", f)
    }, []), C.jsxs("div", {
        className: "min-h-screen",
        children: [C.jsx("div", {
            className: "bouncing-FACESWAP bounce-1",
            children: "FACESWAP"
        }), C.jsx("div", {
            className: "bouncing-FACESWAP bounce-2",
            children: "FACESWAP"
        }), C.jsx("div", {
            className: "bouncing-FACESWAP bounce-3",
            children: "FACESWAP"
        }), C.jsx("div", {
            className: "bouncing-FACESWAP bounce-4",
            children: "FACESWAP"
        }), C.jsx("nav", {
            className: "fixed top-4 right-4 z-50",
            children: C.jsxs(xe.div, {
                className: "backdrop-blur-xl bg-black/20 border border-white/10 rounded-2xl p-1 shadow-2xl",
                initial: {
                    opacity: 0,
                    x: 100
                },
                animate: {
                    opacity: 1,
                    x: 0
                },
                transition: {
                    duration: .8,
                    delay: .5
                },
                children: [C.jsx(xe.div, {
                    className: "h-1 bg-gradient-to-r from-primary/50 to-primary rounded-full mb-2 mx-2",
                    style: {
                        scaleX: ql(s, [0, 100], [0, 1])
                    },
                    transformTemplate: ({
                        scaleX: f
                    }) => `scaleX(${f})`
                }), C.jsx("div", {
                    className: "flex flex-col space-y-1",
                    children: l.map(f => {
                        const m = f.icon,
                            v = n === f.id;
                        return C.jsxs(xe.button, {
                            onClick: () => c(f.id),
                            className: `
                    group relative flex items-center justify-end gap-3 px-4 py-3 rounded-xl
                    transition-all duration-300 text-sm font-medium
                    ${v?"bg-primary/20 text-primary border border-primary/30":"text-muted-foreground hover:text-primary hover:bg-white/5"}
                  `,
                            whileHover: {
                                scale: 1.05
                            },
                            whileTap: {
                                scale: .95
                            },
                            "data-testid": `nav-${f.id}`,
                            children: [v && C.jsx(xe.div, {
                                className: "absolute inset-0 rounded-xl bg-primary/10 blur-sm",
                                layoutId: "nav-glow",
                                transition: {
                                    type: "spring",
                                    duration: .6
                                }
                            }), C.jsx("span", {
                                className: "relative z-10 text-right min-w-0 flex-1",
                                children: f.label
                            }), C.jsx("div", {
                                className: `
                    relative z-10 p-1.5 rounded-lg transition-all duration-300
                    ${v?"bg-primary/20 text-primary":"group-hover:bg-white/10"}
                  `,
                                children: C.jsx(m, {
                                    size: 16,
                                    className: v ? "animate-pulse" : ""
                                })
                            }), C.jsx(xe.div, {
                                className: "absolute left-0 top-1/2 w-1 bg-primary rounded-full -translate-y-1/2",
                                initial: {
                                    height: 0
                                },
                                whileHover: {
                                    height: "60%"
                                },
                                transition: {
                                    duration: .2
                                }
                            })]
                        }, f.id)
                    })
                })]
            })
        }), C.jsxs("main", {
            children: [C.jsx(xe.section, {
                id: "home",
                className: "min-h-screen flex flex-col items-center justify-center px-4 gradient-glow relative",
                style: {
                    y: o
                },
                children: C.jsxs("div", {
                    className: "text-center space-y-8 max-w-4xl mx-auto",
                    children: [C.jsx(xe.div, {
                        className: "mb-8",
                        initial: {
                            scale: 0,
                            rotate: -180
                        },
                        animate: {
                            scale: 1,
                            rotate: 0
                        },
                        transition: {
                            duration: 1,
                            type: "spring",
                            stiffness: 100
                        },
                        children: C.jsx("img", {
                            src: PM,
                            alt: "$FACESWAP coin logo",
                            className: "w-24 h-24 md:w-32 md:h-32 mx-auto rounded-full pulse-glow",
                            "data-testid": "img-logo"
                        })
                    }), C.jsx(xe.h1, {
                        className: "text-6xl md:text-8xl lg:text-9xl font-bold tracking-wider text-primary mb-8",
                        initial: {
                            opacity: 0,
                            y: 50
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: 1,
                            delay: .5
                        },
                        "data-testid": "text-title",
                        children: "$FACESWAP"
                    }), C.jsx(xe.div, {
                        initial: {
                            opacity: 0,
                            y: 30
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: 1,
                            delay: 1
                        },
                        children: C.jsxs(no, {
                            className: "bg-card border border-border rounded-lg p-4 md:p-6 max-w-2xl mx-auto",
                            children: [C.jsx("p", {
                                className: "text-muted-foreground text-sm md:text-base mb-2",
                                "data-testid": "text-contract-label",
                                children: "Contract Address:"
                            }), C.jsxs("div", {
                                className: "flex items-center justify-between bg-muted rounded-md p-3 group",
                                children: [C.jsx("span", {
                                    className: "text-sm md:text-base font-mono break-all text-foreground",
                                    "data-testid": "text-contract-address",
                                    children: a
                                }), C.jsx(uM, {
                                    text: a,
                                    onCopy: d
                                })]
                            })]
                        })
                    }), C.jsx(xe.div, {
                        className: "flex justify-center items-center space-x-6 md:space-x-8 py-8",
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        transition: {
                            duration: 1,
                            delay: 1.5
                        },
                        children: u.map((f, m) => C.jsx(xe.a, {
                            href: f.href,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "text-2xl md:text-3xl hover:text-primary transition-all duration-300",
                            whileHover: {
                                scale: 1.1
                            },
                            whileTap: {
                                scale: .95
                            },
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                delay: 1.7 + m * .1
                            },
                            "data-testid": f.testId,
                            "aria-label": f.label,
                            children: f.icon
                        }, f.href))
                    })]
                })
            }), C.jsx("section", {
                id: "origins",
                className: "py-16 md:py-24 px-4",
                children: C.jsx("div", {
                    className: "max-w-4xl mx-auto text-center space-y-12",
                    children: C.jsx(xe.div, {
                        initial: {
                            opacity: 0,
                            scale: .8
                        },
                        whileInView: {
                            opacity: 1,
                            scale: 1
                        },
                        transition: {
                            duration: .8
                        },
                        viewport: {
                            once: !0
                        },
                        children: C.jsx(no, {
                            className: "bg-card border border-border rounded-lg p-6 md:p-8",
                            children: C.jsxs("div", {
                                className: "text-center space-y-4",
                                children: [C.jsx("div", {
                                    className: "flex justify-center",
                                    children: C.jsx("img", {
                                        src: CM,
                                        alt: "Twitter meme about FACESWAP",
                                        className: "w-64 md:w-80 h-auto rounded-lg shadow-lg"
                                    })
                                }), C.jsx("h3", {
                                    className: "text-2xl md:text-3xl font-bold text-primary",
                                    children: "You either FACESWAP buying or FACESWAP selling"
                                })]
                            })
                        })
                    })
                })
            }), C.jsx("section", {
                id: "buy",
                className: "py-16 md:py-24 px-4 text-center",
                children: C.jsxs("div", {
                    className: "max-w-2xl mx-auto space-y-8",
                    children: [C.jsx(xe.div, {
                        initial: {
                            opacity: 0,
                            y: 30
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: .8
                        },
                        viewport: {
                            once: !0
                        },
                        children: C.jsx(ya, {
                            asChild: !0,
                            className: "bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-4 px-8 md:py-6 md:px-12 rounded-lg text-lg md:text-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-primary/25",
                            "data-testid": "button-buy-now",
                            children: C.jsxs("a", {
                                href: "https://pump.fun/coin/4ZoU9gBfvXvThEb4vRapfVQZiGRF5AKFZP1FjAUKzgbJ",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "flex items-center gap-2",
                                children: ["BUY $FACESWAP NOW", C.jsx(HC, {
                                    className: "w-5 h-5"
                                })]
                            })
                        })
                    }), C.jsx(xe.p, {
                        className: "text-muted-foreground text-sm md:text-base max-w-lg mx-auto leading-relaxed",
                        initial: {
                            opacity: 0
                        },
                        whileInView: {
                            opacity: 1
                        },
                        transition: {
                            duration: .8,
                            delay: .2
                        },
                        viewport: {
                            once: !0
                        },
                        "data-testid": "text-buy-description",
                        children: "To learn how to buy, where to buy, and all other information about $FACESWAP as a memecoin, click the button above."
                    })]
                })
            }), C.jsx("section", {
                id: "chart",
                className: "py-16 md:py-24 px-4 text-center",
                children: C.jsxs("div", {
                    className: "max-w-4xl mx-auto",
                    children: [C.jsx(xe.h2, {
                        className: "text-3xl md:text-4xl font-bold mb-8 text-primary",
                        initial: {
                            opacity: 0,
                            y: 30
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: .8
                        },
                        viewport: {
                            once: !0
                        },
                        "data-testid": "text-chart-title",
                        children: "Live Chart"
                    }), C.jsx(xe.div, {
                        initial: {
                            opacity: 0,
                            y: 30
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: .8,
                            delay: .2
                        },
                        viewport: {
                            once: !0
                        },
                        children: C.jsx(no, {
                            className: "bg-card border border-border rounded-lg p-6 md:p-8",
                            children: C.jsx(ya, {
                                asChild: !0,
                                variant: "secondary",
                                className: "bg-secondary hover:bg-secondary/80 text-secondary-foreground font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105",
                                "data-testid": "button-dexscreener",
                                children: C.jsx("a", {
                                    href: "https://dexscreener.com/solana/ccyufsfkwbor2ak9zygfcj18eblqwrrnjebpbc6hkcm8",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    children: "View on DexScreener →"
                                })
                            })
                        })
                    })]
                })
            })]
        }), C.jsx("footer", {
            className: "py-8 px-4 text-center border-t border-border",
            children: C.jsx("p", {
                className: "text-muted-foreground text-sm",
                "data-testid": "text-footer",
                children: "© 2025 $FACESWAP. All rights reserved. This is a meme coin for entertainment purposes."
            })
        }), C.jsx(cM, {
            message: "Contract address copied to clipboard! 🎉",
            show: e,
            onClose: () => t(!1)
        })]
    })
}

function AM() {
    return C.jsx("div", {
        className: "min-h-screen w-full flex items-center justify-center bg-gray-50",
        children: C.jsx(no, {
            className: "w-full max-w-md mx-4",
            children: C.jsxs(a1, {
                className: "pt-6",
                children: [C.jsxs("div", {
                    className: "flex mb-4 gap-2",
                    children: [C.jsx(WC, {
                        className: "h-8 w-8 text-red-500"
                    }), C.jsx("h1", {
                        className: "text-2xl font-bold text-gray-900",
                        children: "404 Page Not Found"
                    })]
                }), C.jsx("p", {
                    className: "mt-4 text-sm text-gray-600",
                    children: "Did you forget to add the page to the router?"
                })]
            })
        })
    })
}

function RM() {
    return C.jsxs(yP, {
        children: [C.jsx(jh, {
            path: "/",
            component: kM
        }), C.jsx(jh, {
            component: AM
        })]
    })
}

function bM() {
    return C.jsx(BP, {
        client: WP,
        children: C.jsxs(ik, {
            children: [C.jsx(OT, {}), C.jsx(RM, {})]
        })
    })
}
Xy(document.getElementById("root")).render(C.jsx(bM, {}));