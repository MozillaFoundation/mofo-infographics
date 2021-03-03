var app = (function () {
  "use strict";
  function t(n) {
    return (t =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              "function" == typeof Symbol &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          })(n);
  }
  var n =
      ("undefined" != typeof globalThis && globalThis) ||
      ("undefined" != typeof self && self) ||
      (void 0 !== n && n),
    e = "URLSearchParams" in n,
    r = "Symbol" in n && "iterator" in Symbol,
    i =
      "FileReader" in n &&
      "Blob" in n &&
      (function () {
        try {
          return new Blob(), !0;
        } catch (t) {
          return !1;
        }
      })(),
    o = "FormData" in n,
    u = "ArrayBuffer" in n;
  if (u)
    var c = [
        "[object Int8Array]",
        "[object Uint8Array]",
        "[object Uint8ClampedArray]",
        "[object Int16Array]",
        "[object Uint16Array]",
        "[object Int32Array]",
        "[object Uint32Array]",
        "[object Float32Array]",
        "[object Float64Array]",
      ],
      a =
        ArrayBuffer.isView ||
        function (t) {
          return t && c.indexOf(Object.prototype.toString.call(t)) > -1;
        };
  function f(t) {
    if (
      ("string" != typeof t && (t = String(t)),
      /[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(t) || "" === t)
    )
      throw new TypeError("Invalid character in header field name");
    return t.toLowerCase();
  }
  function l(t) {
    return "string" != typeof t && (t = String(t)), t;
  }
  function s(t) {
    var n = {
      next: function () {
        var n = t.shift();
        return { done: void 0 === n, value: n };
      },
    };
    return (
      r &&
        (n[Symbol.iterator] = function () {
          return n;
        }),
      n
    );
  }
  function h(t) {
    (this.map = {}),
      t instanceof h
        ? t.forEach(function (t, n) {
            this.append(n, t);
          }, this)
        : Array.isArray(t)
        ? t.forEach(function (t) {
            this.append(t[0], t[1]);
          }, this)
        : t &&
          Object.getOwnPropertyNames(t).forEach(function (n) {
            this.append(n, t[n]);
          }, this);
  }
  function d(t) {
    if (t.bodyUsed) return Promise.reject(new TypeError("Already read"));
    t.bodyUsed = !0;
  }
  function p(t) {
    return new Promise(function (n, e) {
      (t.onload = function () {
        n(t.result);
      }),
        (t.onerror = function () {
          e(t.error);
        });
    });
  }
  function v(t) {
    var n = new FileReader(),
      e = p(n);
    return n.readAsArrayBuffer(t), e;
  }
  function y(t) {
    if (t.slice) return t.slice(0);
    var n = new Uint8Array(t.byteLength);
    return n.set(new Uint8Array(t)), n.buffer;
  }
  function g() {
    return (
      (this.bodyUsed = !1),
      (this._initBody = function (t) {
        var n;
        (this.bodyUsed = this.bodyUsed),
          (this._bodyInit = t),
          t
            ? "string" == typeof t
              ? (this._bodyText = t)
              : i && Blob.prototype.isPrototypeOf(t)
              ? (this._bodyBlob = t)
              : o && FormData.prototype.isPrototypeOf(t)
              ? (this._bodyFormData = t)
              : e && URLSearchParams.prototype.isPrototypeOf(t)
              ? (this._bodyText = t.toString())
              : u && i && (n = t) && DataView.prototype.isPrototypeOf(n)
              ? ((this._bodyArrayBuffer = y(t.buffer)),
                (this._bodyInit = new Blob([this._bodyArrayBuffer])))
              : u && (ArrayBuffer.prototype.isPrototypeOf(t) || a(t))
              ? (this._bodyArrayBuffer = y(t))
              : (this._bodyText = t = Object.prototype.toString.call(t))
            : (this._bodyText = ""),
          this.headers.get("content-type") ||
            ("string" == typeof t
              ? this.headers.set("content-type", "text/plain;charset=UTF-8")
              : this._bodyBlob && this._bodyBlob.type
              ? this.headers.set("content-type", this._bodyBlob.type)
              : e &&
                URLSearchParams.prototype.isPrototypeOf(t) &&
                this.headers.set(
                  "content-type",
                  "application/x-www-form-urlencoded;charset=UTF-8"
                ));
      }),
      i &&
        ((this.blob = function () {
          var t = d(this);
          if (t) return t;
          if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
          if (this._bodyArrayBuffer)
            return Promise.resolve(new Blob([this._bodyArrayBuffer]));
          if (this._bodyFormData)
            throw new Error("could not read FormData body as blob");
          return Promise.resolve(new Blob([this._bodyText]));
        }),
        (this.arrayBuffer = function () {
          if (this._bodyArrayBuffer) {
            var t = d(this);
            return (
              t ||
              (ArrayBuffer.isView(this._bodyArrayBuffer)
                ? Promise.resolve(
                    this._bodyArrayBuffer.buffer.slice(
                      this._bodyArrayBuffer.byteOffset,
                      this._bodyArrayBuffer.byteOffset +
                        this._bodyArrayBuffer.byteLength
                    )
                  )
                : Promise.resolve(this._bodyArrayBuffer))
            );
          }
          return this.blob().then(v);
        })),
      (this.text = function () {
        var t,
          n,
          e,
          r = d(this);
        if (r) return r;
        if (this._bodyBlob)
          return (
            (t = this._bodyBlob),
            (n = new FileReader()),
            (e = p(n)),
            n.readAsText(t),
            e
          );
        if (this._bodyArrayBuffer)
          return Promise.resolve(
            (function (t) {
              for (
                var n = new Uint8Array(t), e = new Array(n.length), r = 0;
                r < n.length;
                r++
              )
                e[r] = String.fromCharCode(n[r]);
              return e.join("");
            })(this._bodyArrayBuffer)
          );
        if (this._bodyFormData)
          throw new Error("could not read FormData body as text");
        return Promise.resolve(this._bodyText);
      }),
      o &&
        (this.formData = function () {
          return this.text().then(x);
        }),
      (this.json = function () {
        return this.text().then(JSON.parse);
      }),
      this
    );
  }
  (h.prototype.append = function (t, n) {
    (t = f(t)), (n = l(n));
    var e = this.map[t];
    this.map[t] = e ? e + ", " + n : n;
  }),
    (h.prototype.delete = function (t) {
      delete this.map[f(t)];
    }),
    (h.prototype.get = function (t) {
      return (t = f(t)), this.has(t) ? this.map[t] : null;
    }),
    (h.prototype.has = function (t) {
      return this.map.hasOwnProperty(f(t));
    }),
    (h.prototype.set = function (t, n) {
      this.map[f(t)] = l(n);
    }),
    (h.prototype.forEach = function (t, n) {
      for (var e in this.map)
        this.map.hasOwnProperty(e) && t.call(n, this.map[e], e, this);
    }),
    (h.prototype.keys = function () {
      var t = [];
      return (
        this.forEach(function (n, e) {
          t.push(e);
        }),
        s(t)
      );
    }),
    (h.prototype.values = function () {
      var t = [];
      return (
        this.forEach(function (n) {
          t.push(n);
        }),
        s(t)
      );
    }),
    (h.prototype.entries = function () {
      var t = [];
      return (
        this.forEach(function (n, e) {
          t.push([e, n]);
        }),
        s(t)
      );
    }),
    r && (h.prototype[Symbol.iterator] = h.prototype.entries);
  var m = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
  function b(t, n) {
    if (!(this instanceof b))
      throw new TypeError(
        'Please use the "new" operator, this DOM object constructor cannot be called as a function.'
      );
    var e,
      r,
      i = (n = n || {}).body;
    if (t instanceof b) {
      if (t.bodyUsed) throw new TypeError("Already read");
      (this.url = t.url),
        (this.credentials = t.credentials),
        n.headers || (this.headers = new h(t.headers)),
        (this.method = t.method),
        (this.mode = t.mode),
        (this.signal = t.signal),
        i || null == t._bodyInit || ((i = t._bodyInit), (t.bodyUsed = !0));
    } else this.url = String(t);
    if (
      ((this.credentials = n.credentials || this.credentials || "same-origin"),
      (!n.headers && this.headers) || (this.headers = new h(n.headers)),
      (this.method =
        ((e = n.method || this.method || "GET"),
        (r = e.toUpperCase()),
        m.indexOf(r) > -1 ? r : e)),
      (this.mode = n.mode || this.mode || null),
      (this.signal = n.signal || this.signal),
      (this.referrer = null),
      ("GET" === this.method || "HEAD" === this.method) && i)
    )
      throw new TypeError("Body not allowed for GET or HEAD requests");
    if (
      (this._initBody(i),
      !(
        ("GET" !== this.method && "HEAD" !== this.method) ||
        ("no-store" !== n.cache && "no-cache" !== n.cache)
      ))
    ) {
      var o = /([?&])_=[^&]*/;
      if (o.test(this.url))
        this.url = this.url.replace(o, "$1_=" + new Date().getTime());
      else {
        this.url +=
          (/\?/.test(this.url) ? "&" : "?") + "_=" + new Date().getTime();
      }
    }
  }
  function x(t) {
    var n = new FormData();
    return (
      t
        .trim()
        .split("&")
        .forEach(function (t) {
          if (t) {
            var e = t.split("="),
              r = e.shift().replace(/\+/g, " "),
              i = e.join("=").replace(/\+/g, " ");
            n.append(decodeURIComponent(r), decodeURIComponent(i));
          }
        }),
      n
    );
  }
  function w(t, n) {
    if (!(this instanceof w))
      throw new TypeError(
        'Please use the "new" operator, this DOM object constructor cannot be called as a function.'
      );
    n || (n = {}),
      (this.type = "default"),
      (this.status = void 0 === n.status ? 200 : n.status),
      (this.ok = this.status >= 200 && this.status < 300),
      (this.statusText = "statusText" in n ? n.statusText : ""),
      (this.headers = new h(n.headers)),
      (this.url = n.url || ""),
      this._initBody(t);
  }
  (b.prototype.clone = function () {
    return new b(this, { body: this._bodyInit });
  }),
    g.call(b.prototype),
    g.call(w.prototype),
    (w.prototype.clone = function () {
      return new w(this._bodyInit, {
        status: this.status,
        statusText: this.statusText,
        headers: new h(this.headers),
        url: this.url,
      });
    }),
    (w.error = function () {
      var t = new w(null, { status: 0, statusText: "" });
      return (t.type = "error"), t;
    });
  var _ = [301, 302, 303, 307, 308];
  w.redirect = function (t, n) {
    if (-1 === _.indexOf(n)) throw new RangeError("Invalid status code");
    return new w(null, { status: n, headers: { location: t } });
  };
  var $,
    T,
    M = n.DOMException;
  try {
    new M();
  } catch (t) {
    ((M = function (t, n) {
      (this.message = t), (this.name = n);
      var e = Error(t);
      this.stack = e.stack;
    }).prototype = Object.create(Error.prototype)),
      (M.prototype.constructor = M);
  }
  function k(e, r) {
    return new Promise(function (o, c) {
      var a = new b(e, r);
      if (a.signal && a.signal.aborted)
        return c(new M("Aborted", "AbortError"));
      var f = new XMLHttpRequest();
      function s() {
        f.abort();
      }
      (f.onload = function () {
        var t,
          n,
          e = {
            status: f.status,
            statusText: f.statusText,
            headers:
              ((t = f.getAllResponseHeaders() || ""),
              (n = new h()),
              t
                .replace(/\r?\n[\t ]+/g, " ")
                .split("\r")
                .map(function (t) {
                  return 0 === t.indexOf("\n") ? t.substr(1, t.length) : t;
                })
                .forEach(function (t) {
                  var e = t.split(":"),
                    r = e.shift().trim();
                  if (r) {
                    var i = e.join(":").trim();
                    n.append(r, i);
                  }
                }),
              n),
          };
        e.url =
          "responseURL" in f ? f.responseURL : e.headers.get("X-Request-URL");
        var r = "response" in f ? f.response : f.responseText;
        setTimeout(function () {
          o(new w(r, e));
        }, 0);
      }),
        (f.onerror = function () {
          setTimeout(function () {
            c(new TypeError("Network request failed"));
          }, 0);
        }),
        (f.ontimeout = function () {
          setTimeout(function () {
            c(new TypeError("Network request failed"));
          }, 0);
        }),
        (f.onabort = function () {
          setTimeout(function () {
            c(new M("Aborted", "AbortError"));
          }, 0);
        }),
        f.open(
          a.method,
          (function (t) {
            try {
              return "" === t && n.location.href ? n.location.href : t;
            } catch (n) {
              return t;
            }
          })(a.url),
          !0
        ),
        "include" === a.credentials
          ? (f.withCredentials = !0)
          : "omit" === a.credentials && (f.withCredentials = !1),
        "responseType" in f &&
          (i
            ? (f.responseType = "blob")
            : u &&
              a.headers.get("Content-Type") &&
              -1 !==
                a.headers
                  .get("Content-Type")
                  .indexOf("application/octet-stream") &&
              (f.responseType = "arraybuffer")),
        !r || "object" !== t(r.headers) || r.headers instanceof h
          ? a.headers.forEach(function (t, n) {
              f.setRequestHeader(n, t);
            })
          : Object.getOwnPropertyNames(r.headers).forEach(function (t) {
              f.setRequestHeader(t, l(r.headers[t]));
            }),
        a.signal &&
          (a.signal.addEventListener("abort", s),
          (f.onreadystatechange = function () {
            4 === f.readyState && a.signal.removeEventListener("abort", s);
          })),
        f.send(void 0 === a._bodyInit ? null : a._bodyInit);
    });
  }
  function j(t, n) {
    if (!(t instanceof n))
      throw new TypeError("Cannot call a class as a function");
  }
  function C(t) {
    if (void 0 === t)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return t;
  }
  function A(t, n) {
    return (A =
      Object.setPrototypeOf ||
      function (t, n) {
        return (t.__proto__ = n), t;
      })(t, n);
  }
  function L(t, n) {
    if ("function" != typeof n && null !== n)
      throw new TypeError("Super expression must either be null or a function");
    (t.prototype = Object.create(n && n.prototype, {
      constructor: { value: t, writable: !0, configurable: !0 },
    })),
      n && A(t, n);
  }
  function O(n, e) {
    return !e || ("object" !== t(e) && "function" != typeof e) ? C(n) : e;
  }
  function S(t) {
    return (S = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (t) {
          return t.__proto__ || Object.getPrototypeOf(t);
        })(t);
  }
  function E(t, n) {
    (null == n || n > t.length) && (n = t.length);
    for (var e = 0, r = new Array(n); e < n; e++) r[e] = t[e];
    return r;
  }
  function D(t, n) {
    if (t) {
      if ("string" == typeof t) return E(t, n);
      var e = Object.prototype.toString.call(t).slice(8, -1);
      return (
        "Object" === e && t.constructor && (e = t.constructor.name),
        "Map" === e || "Set" === e
          ? Array.from(t)
          : "Arguments" === e ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)
          ? E(t, n)
          : void 0
      );
    }
  }
  function R(t, n) {
    return (
      (function (t) {
        if (Array.isArray(t)) return t;
      })(t) ||
      (function (t, n) {
        if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) {
          var e = [],
            r = !0,
            i = !1,
            o = void 0;
          try {
            for (
              var u, c = t[Symbol.iterator]();
              !(r = (u = c.next()).done) &&
              (e.push(u.value), !n || e.length !== n);
              r = !0
            );
          } catch (t) {
            (i = !0), (o = t);
          } finally {
            try {
              r || null == c.return || c.return();
            } finally {
              if (i) throw o;
            }
          }
          return e;
        }
      })(t, n) ||
      D(t, n) ||
      (function () {
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      })()
    );
  }
  function N(t) {
    return (
      (function (t) {
        if (Array.isArray(t)) return E(t);
      })(t) ||
      (function (t) {
        if ("undefined" != typeof Symbol && Symbol.iterator in Object(t))
          return Array.from(t);
      })(t) ||
      D(t) ||
      (function () {
        throw new TypeError(
          "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      })()
    );
  }
  function P() {
    return (P =
      Object.assign ||
      function (t) {
        for (var n = 1; n < arguments.length; n++) {
          var e = arguments[n];
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
        }
        return t;
      }).apply(this, arguments);
  }
  function U(t, n) {
    for (var e = 0; e < n.length; e++) {
      var r = n[e];
      (r.enumerable = r.enumerable || !1),
        (r.configurable = !0),
        "value" in r && (r.writable = !0),
        Object.defineProperty(t, r.key, r);
    }
  }
  function F() {}
  function H(t) {
    return t();
  }
  function z() {
    return Object.create(null);
  }
  function B(t) {
    t.forEach(H);
  }
  function I(t) {
    return "function" == typeof t;
  }
  function Y(n, e) {
    return n != n
      ? e == e
      : n !== e || (n && "object" === t(n)) || "function" == typeof n;
  }
  function q(t, n, e) {
    t.$$.on_destroy.push(
      (function (t) {
        if (null == t) return F;
        for (
          var n = arguments.length, e = new Array(n > 1 ? n - 1 : 0), r = 1;
          r < n;
          r++
        )
          e[r - 1] = arguments[r];
        var i = t.subscribe.apply(t, e);
        return i.unsubscribe
          ? function () {
              return i.unsubscribe();
            }
          : i;
      })(n, e)
    );
  }
  function W(t, n, e, r) {
    if (t) {
      var i = Z(t, n, e, r);
      return t[0](i);
    }
  }
  function Z(t, n, e, r) {
    return t[1] && r
      ? (function (t, n) {
          for (var e in n) t[e] = n[e];
          return t;
        })(e.ctx.slice(), t[1](r(n)))
      : e.ctx;
  }
  function V(n, e, r, i, o, u, c) {
    var a = (function (n, e, r, i) {
      if (n[2] && i) {
        var o = n[2](i(r));
        if (void 0 === e.dirty) return o;
        if ("object" === t(o)) {
          for (
            var u = [], c = Math.max(e.dirty.length, o.length), a = 0;
            a < c;
            a += 1
          )
            u[a] = e.dirty[a] | o[a];
          return u;
        }
        return e.dirty | o;
      }
      return e.dirty;
    })(e, i, o, u);
    if (a) {
      var f = Z(e, r, i, c);
      n.p(f, a);
    }
  }
  function G(t) {
    return null == t ? "" : t;
  }
  function X(t, n) {
    t.appendChild(n);
  }
  function J(t, n, e) {
    t.insertBefore(n, e || null);
  }
  function Q(t) {
    t.parentNode.removeChild(t);
  }
  function K(t, n) {
    for (var e = 0; e < t.length; e += 1) t[e] && t[e].d(n);
  }
  function tt(t) {
    return document.createElement(t);
  }
  function nt(t) {
    return document.createElementNS("http://www.w3.org/2000/svg", t);
  }
  function et(t) {
    return document.createTextNode(t);
  }
  function rt() {
    return et(" ");
  }
  function it() {
    return et("");
  }
  function ot(t, n, e, r) {
    return (
      t.addEventListener(n, e, r),
      function () {
        return t.removeEventListener(n, e, r);
      }
    );
  }
  function ut(t, n, e) {
    null == e
      ? t.removeAttribute(n)
      : t.getAttribute(n) !== e && t.setAttribute(n, e);
  }
  function ct(t) {
    return Array.from(t.childNodes);
  }
  function at(t, n) {
    (n = "" + n), t.wholeText !== n && (t.data = n);
  }
  function ft(t, n, e, r) {
    t.style.setProperty(n, e, r ? "important" : "");
  }
  function lt() {
    if (void 0 === $) {
      $ = !1;
      try {
        "undefined" != typeof window && window.parent && window.parent.document;
      } catch (t) {
        $ = !0;
      }
    }
    return $;
  }
  function st(t, n) {
    "static" === getComputedStyle(t).position &&
      (t.style.position = "relative");
    var e = tt("iframe");
    e.setAttribute(
      "style",
      "display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"
    ),
      e.setAttribute("aria-hidden", "true"),
      (e.tabIndex = -1);
    var r,
      i = lt();
    return (
      i
        ? ((e.src =
            "data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}</script>"),
          (r = ot(window, "message", function (t) {
            t.source === e.contentWindow && n();
          })))
        : ((e.src = "about:blank"),
          (e.onload = function () {
            r = ot(e.contentWindow, "resize", n);
          })),
      X(t, e),
      function () {
        (i || (r && e.contentWindow)) && r(), Q(e);
      }
    );
  }
  function ht(t, n, e) {
    t.classList[e ? "add" : "remove"](n);
  }
  function dt(t) {
    T = t;
  }
  function pt() {
    var t = (function () {
      if (!T)
        throw new Error("Function called outside component initialization");
      return T;
    })();
    return function (n, e) {
      var r = t.$$.callbacks[n];
      if (r) {
        var i = (function (t, n) {
          var e = document.createEvent("CustomEvent");
          return e.initCustomEvent(t, !1, !1, n), e;
        })(n, e);
        r.slice().forEach(function (n) {
          n.call(t, i);
        });
      }
    };
  }
  (k.polyfill = !0),
    n.fetch ||
      ((n.fetch = k), (n.Headers = h), (n.Request = b), (n.Response = w));
  var vt = [],
    yt = [],
    gt = [],
    mt = [],
    bt = Promise.resolve(),
    xt = !1;
  function wt(t) {
    gt.push(t);
  }
  var _t = !1,
    $t = new Set();
  function Tt() {
    if (!_t) {
      _t = !0;
      do {
        for (var t = 0; t < vt.length; t += 1) {
          var n = vt[t];
          dt(n), Mt(n.$$);
        }
        for (dt(null), vt.length = 0; yt.length; ) yt.pop()();
        for (var e = 0; e < gt.length; e += 1) {
          var r = gt[e];
          $t.has(r) || ($t.add(r), r());
        }
        gt.length = 0;
      } while (vt.length);
      for (; mt.length; ) mt.pop()();
      (xt = !1), (_t = !1), $t.clear();
    }
  }
  function Mt(t) {
    if (null !== t.fragment) {
      t.update(), B(t.before_update);
      var n = t.dirty;
      (t.dirty = [-1]),
        t.fragment && t.fragment.p(t.ctx, n),
        t.after_update.forEach(wt);
    }
  }
  var kt,
    jt = new Set();
  function Ct() {
    kt = { r: 0, c: [], p: kt };
  }
  function At() {
    kt.r || B(kt.c), (kt = kt.p);
  }
  function Lt(t, n) {
    t && t.i && (jt.delete(t), t.i(n));
  }
  function Ot(t, n, e, r) {
    if (t && t.o) {
      if (jt.has(t)) return;
      jt.add(t),
        kt.c.push(function () {
          jt.delete(t), r && (e && t.d(1), r());
        }),
        t.o(n);
    }
  }
  function St(t, n) {
    t.d(1), n.delete(t.key);
  }
  function Et(t, n) {
    Ot(t, 1, 1, function () {
      n.delete(t.key);
    });
  }
  function Dt(t, n, e, r, i, o, u, c, a, f, l, s) {
    for (var h = t.length, d = o.length, p = h, v = {}; p--; ) v[t[p].key] = p;
    var y = [],
      g = new Map(),
      m = new Map();
    for (p = d; p--; ) {
      var b = s(i, o, p),
        x = e(b),
        w = u.get(x);
      w ? r && w.p(b, n) : (w = f(x, b)).c(),
        g.set(x, (y[p] = w)),
        x in v && m.set(x, Math.abs(p - v[x]));
    }
    var _ = new Set(),
      $ = new Set();
    function T(t) {
      Lt(t, 1), t.m(c, l), u.set(t.key, t), (l = t.first), d--;
    }
    for (; h && d; ) {
      var M = y[d - 1],
        k = t[h - 1],
        j = M.key,
        C = k.key;
      M === k
        ? ((l = M.first), h--, d--)
        : g.has(C)
        ? !u.has(j) || _.has(j)
          ? T(M)
          : $.has(C)
          ? h--
          : m.get(j) > m.get(C)
          ? ($.add(j), T(M))
          : (_.add(C), h--)
        : (a(k, u), h--);
    }
    for (; h--; ) {
      var A = t[h];
      g.has(A.key) || a(A, u);
    }
    for (; d; ) T(y[d - 1]);
    return y;
  }
  function Rt(t) {
    t && t.c();
  }
  function Nt(t, n, e) {
    var r = t.$$,
      i = r.fragment,
      o = r.on_mount,
      u = r.on_destroy,
      c = r.after_update;
    i && i.m(n, e),
      wt(function () {
        var n = o.map(H).filter(I);
        u ? u.push.apply(u, N(n)) : B(n), (t.$$.on_mount = []);
      }),
      c.forEach(wt);
  }
  function Pt(t, n) {
    var e = t.$$;
    null !== e.fragment &&
      (B(e.on_destroy),
      e.fragment && e.fragment.d(n),
      (e.on_destroy = e.fragment = null),
      (e.ctx = []));
  }
  function Ut(t, n) {
    -1 === t.$$.dirty[0] &&
      (vt.push(t), xt || ((xt = !0), bt.then(Tt)), t.$$.dirty.fill(0)),
      (t.$$.dirty[(n / 31) | 0] |= 1 << n % 31);
  }
  function Ft(t, n, e, r, i, o) {
    var u =
        arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : [-1],
      c = T;
    dt(t);
    var a = n.props || {},
      f = (t.$$ = {
        fragment: null,
        ctx: null,
        props: o,
        update: F,
        not_equal: i,
        bound: z(),
        on_mount: [],
        on_destroy: [],
        before_update: [],
        after_update: [],
        context: new Map(c ? c.$$.context : []),
        callbacks: z(),
        dirty: u,
        skip_bound: !1,
      }),
      l = !1;
    if (
      ((f.ctx = e
        ? e(t, a, function (n, e) {
            var r =
              !(arguments.length <= 2) && arguments.length - 2
                ? arguments.length <= 2
                  ? void 0
                  : arguments[2]
                : e;
            return (
              f.ctx &&
                i(f.ctx[n], (f.ctx[n] = r)) &&
                (!f.skip_bound && f.bound[n] && f.bound[n](r), l && Ut(t, n)),
              e
            );
          })
        : []),
      f.update(),
      (l = !0),
      B(f.before_update),
      (f.fragment = !!r && r(f.ctx)),
      n.target)
    ) {
      if (n.hydrate) {
        var s = ct(n.target);
        f.fragment && f.fragment.l(s), s.forEach(Q);
      } else f.fragment && f.fragment.c();
      n.intro && Lt(t.$$.fragment), Nt(t, n.target, n.anchor), Tt();
    }
    dt(c);
  }
  var Ht = (function () {
      function t() {
        j(this, t);
      }
      var n, e, r;
      return (
        (n = t),
        (e = [
          {
            key: "$destroy",
            value: function () {
              Pt(this, 1), (this.$destroy = F);
            },
          },
          {
            key: "$on",
            value: function (t, n) {
              var e = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
              return (
                e.push(n),
                function () {
                  var t = e.indexOf(n);
                  -1 !== t && e.splice(t, 1);
                }
              );
            },
          },
          {
            key: "$set",
            value: function (t) {
              var n;
              this.$$set &&
                ((n = t), 0 !== Object.keys(n).length) &&
                ((this.$$.skip_bound = !0),
                this.$$set(t),
                (this.$$.skip_bound = !1));
            },
          },
        ]) && U(n.prototype, e),
        r && U(n, r),
        t
      );
    })(),
    zt =
      "object" == ("undefined" == typeof global ? "undefined" : t(global)) &&
      global &&
      global.Object === Object &&
      global,
    Bt =
      "object" == ("undefined" == typeof self ? "undefined" : t(self)) &&
      self &&
      self.Object === Object &&
      self,
    It = zt || Bt || Function("return this")(),
    Yt = It.Symbol,
    qt = Object.prototype,
    Wt = qt.hasOwnProperty,
    Zt = qt.toString,
    Vt = Yt ? Yt.toStringTag : void 0;
  var Gt = Object.prototype.toString;
  var Xt = Yt ? Yt.toStringTag : void 0;
  function Jt(t) {
    return null == t
      ? void 0 === t
        ? "[object Undefined]"
        : "[object Null]"
      : Xt && Xt in Object(t)
      ? (function (t) {
          var n = Wt.call(t, Vt),
            e = t[Vt];
          try {
            t[Vt] = void 0;
            var r = !0;
          } catch (t) {}
          var i = Zt.call(t);
          return r && (n ? (t[Vt] = e) : delete t[Vt]), i;
        })(t)
      : (function (t) {
          return Gt.call(t);
        })(t);
  }
  function Qt(n) {
    return null != n && "object" == t(n);
  }
  function Kt(n) {
    return "symbol" == t(n) || (Qt(n) && "[object Symbol]" == Jt(n));
  }
  function tn(t, n) {
    for (var e = -1, r = null == t ? 0 : t.length, i = Array(r); ++e < r; )
      i[e] = n(t[e], e, t);
    return i;
  }
  var nn = Array.isArray,
    en = Yt ? Yt.prototype : void 0,
    rn = en ? en.toString : void 0;
  function on(t) {
    if ("string" == typeof t) return t;
    if (nn(t)) return tn(t, on) + "";
    if (Kt(t)) return rn ? rn.call(t) : "";
    var n = t + "";
    return "0" == n && 1 / t == -Infinity ? "-0" : n;
  }
  function un(n) {
    var e = t(n);
    return null != n && ("object" == e || "function" == e);
  }
  var cn = /^\s+|\s+$/g,
    an = /^[-+]0x[0-9a-f]+$/i,
    fn = /^0b[01]+$/i,
    ln = /^0o[0-7]+$/i,
    sn = parseInt;
  var hn = 1 / 0;
  function dn(t) {
    return t
      ? (t = (function (t) {
          if ("number" == typeof t) return t;
          if (Kt(t)) return NaN;
          if (un(t)) {
            var n = "function" == typeof t.valueOf ? t.valueOf() : t;
            t = un(n) ? n + "" : n;
          }
          if ("string" != typeof t) return 0 === t ? t : +t;
          t = t.replace(cn, "");
          var e = fn.test(t);
          return e || ln.test(t)
            ? sn(t.slice(2), e ? 2 : 8)
            : an.test(t)
            ? NaN
            : +t;
        })(t)) === hn || t === -1 / 0
        ? 17976931348623157e292 * (t < 0 ? -1 : 1)
        : t == t
        ? t
        : 0
      : 0 === t
      ? t
      : 0;
  }
  function pn(t) {
    return t;
  }
  function vn(t) {
    if (!un(t)) return !1;
    var n = Jt(t);
    return (
      "[object Function]" == n ||
      "[object GeneratorFunction]" == n ||
      "[object AsyncFunction]" == n ||
      "[object Proxy]" == n
    );
  }
  var yn,
    gn = It["__core-js_shared__"],
    mn = (yn = /[^.]+$/.exec((gn && gn.keys && gn.keys.IE_PROTO) || ""))
      ? "Symbol(src)_1." + yn
      : "";
  var bn = Function.prototype.toString;
  function xn(t) {
    if (null != t) {
      try {
        return bn.call(t);
      } catch (t) {}
      try {
        return t + "";
      } catch (t) {}
    }
    return "";
  }
  var wn = /^\[object .+?Constructor\]$/,
    _n = Function.prototype,
    $n = Object.prototype,
    Tn = _n.toString,
    Mn = $n.hasOwnProperty,
    kn = RegExp(
      "^" +
        Tn.call(Mn)
          .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
          .replace(
            /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
            "$1.*?"
          ) +
        "$"
    );
  function jn(t) {
    return (
      !(!un(t) || ((n = t), mn && mn in n)) && (vn(t) ? kn : wn).test(xn(t))
    );
    var n;
  }
  function Cn(t, n) {
    var e = (function (t, n) {
      return null == t ? void 0 : t[n];
    })(t, n);
    return jn(e) ? e : void 0;
  }
  var An = Cn(It, "WeakMap");
  function Ln(t, n) {
    var e = -1,
      r = t.length;
    for (n || (n = Array(r)); ++e < r; ) n[e] = t[e];
    return n;
  }
  var On = (function () {
    try {
      var t = Cn(Object, "defineProperty");
      return t({}, "", {}), t;
    } catch (t) {}
  })();
  function Sn(t, n) {
    for (
      var e = -1, r = null == t ? 0 : t.length;
      ++e < r && !1 !== n(t[e], e, t);

    );
    return t;
  }
  var En = /^(?:0|[1-9]\d*)$/;
  function Dn(n, e) {
    var r = t(n);
    return (
      !!(e = null == e ? 9007199254740991 : e) &&
      ("number" == r || ("symbol" != r && En.test(n))) &&
      n > -1 &&
      n % 1 == 0 &&
      n < e
    );
  }
  function Rn(t, n) {
    return t === n || (t != t && n != n);
  }
  function Nn(t) {
    return (
      "number" == typeof t && t > -1 && t % 1 == 0 && t <= 9007199254740991
    );
  }
  function Pn(t) {
    return null != t && Nn(t.length) && !vn(t);
  }
  var Un = Object.prototype;
  function Fn(t) {
    return Qt(t) && "[object Arguments]" == Jt(t);
  }
  var Hn = Object.prototype,
    zn = Hn.hasOwnProperty,
    Bn = Hn.propertyIsEnumerable,
    In = Fn(
      (function () {
        return arguments;
      })()
    )
      ? Fn
      : function (t) {
          return Qt(t) && zn.call(t, "callee") && !Bn.call(t, "callee");
        };
  var Yn =
      "object" == ("undefined" == typeof exports ? "undefined" : t(exports)) &&
      exports &&
      !exports.nodeType &&
      exports,
    qn =
      Yn &&
      "object" == ("undefined" == typeof module ? "undefined" : t(module)) &&
      module &&
      !module.nodeType &&
      module,
    Wn = qn && qn.exports === Yn ? It.Buffer : void 0,
    Zn =
      (Wn ? Wn.isBuffer : void 0) ||
      function () {
        return !1;
      },
    Vn = {};
  function Gn(t) {
    return function (n) {
      return t(n);
    };
  }
  (Vn["[object Float32Array]"] = Vn["[object Float64Array]"] = Vn[
    "[object Int8Array]"
  ] = Vn["[object Int16Array]"] = Vn["[object Int32Array]"] = Vn[
    "[object Uint8Array]"
  ] = Vn["[object Uint8ClampedArray]"] = Vn["[object Uint16Array]"] = Vn[
    "[object Uint32Array]"
  ] = !0),
    (Vn["[object Arguments]"] = Vn["[object Array]"] = Vn[
      "[object ArrayBuffer]"
    ] = Vn["[object Boolean]"] = Vn["[object DataView]"] = Vn[
      "[object Date]"
    ] = Vn["[object Error]"] = Vn["[object Function]"] = Vn[
      "[object Map]"
    ] = Vn["[object Number]"] = Vn["[object Object]"] = Vn[
      "[object RegExp]"
    ] = Vn["[object Set]"] = Vn["[object String]"] = Vn[
      "[object WeakMap]"
    ] = !1);
  var Xn =
      "object" == ("undefined" == typeof exports ? "undefined" : t(exports)) &&
      exports &&
      !exports.nodeType &&
      exports,
    Jn =
      Xn &&
      "object" == ("undefined" == typeof module ? "undefined" : t(module)) &&
      module &&
      !module.nodeType &&
      module,
    Qn = Jn && Jn.exports === Xn && zt.process,
    Kn = (function () {
      try {
        var t = Jn && Jn.require && Jn.require("util").types;
        return t || (Qn && Qn.binding && Qn.binding("util"));
      } catch (t) {}
    })(),
    te = Kn && Kn.isTypedArray,
    ne = te
      ? Gn(te)
      : function (t) {
          return Qt(t) && Nn(t.length) && !!Vn[Jt(t)];
        },
    ee = Object.prototype.hasOwnProperty;
  function re(t, n) {
    var e = nn(t),
      r = !e && In(t),
      i = !e && !r && Zn(t),
      o = !e && !r && !i && ne(t),
      u = e || r || i || o,
      c = u
        ? (function (t, n) {
            for (var e = -1, r = Array(t); ++e < t; ) r[e] = n(e);
            return r;
          })(t.length, String)
        : [],
      a = c.length;
    for (var f in t)
      (!n && !ee.call(t, f)) ||
        (u &&
          ("length" == f ||
            (i && ("offset" == f || "parent" == f)) ||
            (o && ("buffer" == f || "byteLength" == f || "byteOffset" == f)) ||
            Dn(f, a))) ||
        c.push(f);
    return c;
  }
  var ie,
    oe,
    ue =
      ((ie = Object.keys),
      (oe = Object),
      function (t) {
        return ie(oe(t));
      }),
    ce = Object.prototype.hasOwnProperty;
  function ae(t) {
    if (
      ((e = (n = t) && n.constructor),
      n !== (("function" == typeof e && e.prototype) || Un))
    )
      return ue(t);
    var n,
      e,
      r = [];
    for (var i in Object(t)) ce.call(t, i) && "constructor" != i && r.push(i);
    return r;
  }
  function fe(t) {
    return Pn(t) ? re(t) : ae(t);
  }
  var le = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    se = /^\w*$/;
  function he(n, e) {
    if (nn(n)) return !1;
    var r = t(n);
    return (
      !(
        "number" != r &&
        "symbol" != r &&
        "boolean" != r &&
        null != n &&
        !Kt(n)
      ) ||
      se.test(n) ||
      !le.test(n) ||
      (null != e && n in Object(e))
    );
  }
  var de = Cn(Object, "create");
  var pe = Object.prototype.hasOwnProperty;
  var ve = Object.prototype.hasOwnProperty;
  function ye(t) {
    var n = -1,
      e = null == t ? 0 : t.length;
    for (this.clear(); ++n < e; ) {
      var r = t[n];
      this.set(r[0], r[1]);
    }
  }
  function ge(t, n) {
    for (var e = t.length; e--; ) if (Rn(t[e][0], n)) return e;
    return -1;
  }
  (ye.prototype.clear = function () {
    (this.__data__ = de ? de(null) : {}), (this.size = 0);
  }),
    (ye.prototype.delete = function (t) {
      var n = this.has(t) && delete this.__data__[t];
      return (this.size -= n ? 1 : 0), n;
    }),
    (ye.prototype.get = function (t) {
      var n = this.__data__;
      if (de) {
        var e = n[t];
        return "__lodash_hash_undefined__" === e ? void 0 : e;
      }
      return pe.call(n, t) ? n[t] : void 0;
    }),
    (ye.prototype.has = function (t) {
      var n = this.__data__;
      return de ? void 0 !== n[t] : ve.call(n, t);
    }),
    (ye.prototype.set = function (t, n) {
      var e = this.__data__;
      return (
        (this.size += this.has(t) ? 0 : 1),
        (e[t] = de && void 0 === n ? "__lodash_hash_undefined__" : n),
        this
      );
    });
  var me = Array.prototype.splice;
  function be(t) {
    var n = -1,
      e = null == t ? 0 : t.length;
    for (this.clear(); ++n < e; ) {
      var r = t[n];
      this.set(r[0], r[1]);
    }
  }
  (be.prototype.clear = function () {
    (this.__data__ = []), (this.size = 0);
  }),
    (be.prototype.delete = function (t) {
      var n = this.__data__,
        e = ge(n, t);
      return (
        !(e < 0) &&
        (e == n.length - 1 ? n.pop() : me.call(n, e, 1), --this.size, !0)
      );
    }),
    (be.prototype.get = function (t) {
      var n = this.__data__,
        e = ge(n, t);
      return e < 0 ? void 0 : n[e][1];
    }),
    (be.prototype.has = function (t) {
      return ge(this.__data__, t) > -1;
    }),
    (be.prototype.set = function (t, n) {
      var e = this.__data__,
        r = ge(e, t);
      return r < 0 ? (++this.size, e.push([t, n])) : (e[r][1] = n), this;
    });
  var xe = Cn(It, "Map");
  function we(n, e) {
    var r,
      i,
      o = n.__data__;
    return (
      "string" == (i = t((r = e))) ||
      "number" == i ||
      "symbol" == i ||
      "boolean" == i
        ? "__proto__" !== r
        : null === r
    )
      ? o["string" == typeof e ? "string" : "hash"]
      : o.map;
  }
  function _e(t) {
    var n = -1,
      e = null == t ? 0 : t.length;
    for (this.clear(); ++n < e; ) {
      var r = t[n];
      this.set(r[0], r[1]);
    }
  }
  (_e.prototype.clear = function () {
    (this.size = 0),
      (this.__data__ = {
        hash: new ye(),
        map: new (xe || be)(),
        string: new ye(),
      });
  }),
    (_e.prototype.delete = function (t) {
      var n = we(this, t).delete(t);
      return (this.size -= n ? 1 : 0), n;
    }),
    (_e.prototype.get = function (t) {
      return we(this, t).get(t);
    }),
    (_e.prototype.has = function (t) {
      return we(this, t).has(t);
    }),
    (_e.prototype.set = function (t, n) {
      var e = we(this, t),
        r = e.size;
      return e.set(t, n), (this.size += e.size == r ? 0 : 1), this;
    });
  function $e(t, n) {
    if ("function" != typeof t || (null != n && "function" != typeof n))
      throw new TypeError("Expected a function");
    var e = function e() {
      var r = arguments,
        i = n ? n.apply(this, r) : r[0],
        o = e.cache;
      if (o.has(i)) return o.get(i);
      var u = t.apply(this, r);
      return (e.cache = o.set(i, u) || o), u;
    };
    return (e.cache = new ($e.Cache || _e)()), e;
  }
  $e.Cache = _e;
  var Te = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
    Me = /\\(\\)?/g,
    ke = (function (t) {
      var n = $e(t, function (t) {
          return 500 === e.size && e.clear(), t;
        }),
        e = n.cache;
      return n;
    })(function (t) {
      var n = [];
      return (
        46 === t.charCodeAt(0) && n.push(""),
        t.replace(Te, function (t, e, r, i) {
          n.push(r ? i.replace(Me, "$1") : e || t);
        }),
        n
      );
    });
  function je(t) {
    return null == t ? "" : on(t);
  }
  function Ce(t, n) {
    return nn(t) ? t : he(t, n) ? [t] : ke(je(t));
  }
  function Ae(t) {
    if ("string" == typeof t || Kt(t)) return t;
    var n = t + "";
    return "0" == n && 1 / t == -Infinity ? "-0" : n;
  }
  function Le(t, n) {
    for (var e = 0, r = (n = Ce(n, t)).length; null != t && e < r; )
      t = t[Ae(n[e++])];
    return e && e == r ? t : void 0;
  }
  function Oe(t, n) {
    for (var e = -1, r = n.length, i = t.length; ++e < r; ) t[i + e] = n[e];
    return t;
  }
  var Se = Yt ? Yt.isConcatSpreadable : void 0;
  function Ee(t) {
    return nn(t) || In(t) || !!(Se && t && t[Se]);
  }
  function De(t, n, e, r, i) {
    var o = -1,
      u = t.length;
    for (e || (e = Ee), i || (i = []); ++o < u; ) {
      var c = t[o];
      n > 0 && e(c)
        ? n > 1
          ? De(c, n - 1, e, r, i)
          : Oe(i, c)
        : r || (i[i.length] = c);
    }
    return i;
  }
  function Re(t, n, e) {
    var r = t.length;
    return (
      (e = void 0 === e ? r : e),
      !n && e >= r
        ? t
        : (function (t, n, e) {
            var r = -1,
              i = t.length;
            n < 0 && (n = -n > i ? 0 : i + n),
              (e = e > i ? i : e) < 0 && (e += i),
              (i = n > e ? 0 : (e - n) >>> 0),
              (n >>>= 0);
            for (var o = Array(i); ++r < i; ) o[r] = t[r + n];
            return o;
          })(t, n, e)
    );
  }
  var Ne = RegExp(
    "[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]"
  );
  function Pe(t) {
    return Ne.test(t);
  }
  var Ue = "[\\ud800-\\udfff]",
    Fe = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
    He = "\\ud83c[\\udffb-\\udfff]",
    ze = "[^\\ud800-\\udfff]",
    Be = "(?:\\ud83c[\\udde6-\\uddff]){2}",
    Ie = "[\\ud800-\\udbff][\\udc00-\\udfff]",
    Ye = "(?:" + Fe + "|" + He + ")" + "?",
    qe = "[\\ufe0e\\ufe0f]?",
    We =
      qe +
      Ye +
      ("(?:\\u200d(?:" + [ze, Be, Ie].join("|") + ")" + qe + Ye + ")*"),
    Ze = "(?:" + [ze + Fe + "?", Fe, Be, Ie, Ue].join("|") + ")",
    Ve = RegExp(He + "(?=" + He + ")|" + Ze + We, "g");
  function Ge(t) {
    return Pe(t)
      ? (function (t) {
          return t.match(Ve) || [];
        })(t)
      : (function (t) {
          return t.split("");
        })(t);
  }
  function Xe(t) {
    var n = (this.__data__ = new be(t));
    this.size = n.size;
  }
  (Xe.prototype.clear = function () {
    (this.__data__ = new be()), (this.size = 0);
  }),
    (Xe.prototype.delete = function (t) {
      var n = this.__data__,
        e = n.delete(t);
      return (this.size = n.size), e;
    }),
    (Xe.prototype.get = function (t) {
      return this.__data__.get(t);
    }),
    (Xe.prototype.has = function (t) {
      return this.__data__.has(t);
    }),
    (Xe.prototype.set = function (t, n) {
      var e = this.__data__;
      if (e instanceof be) {
        var r = e.__data__;
        if (!xe || r.length < 199)
          return r.push([t, n]), (this.size = ++e.size), this;
        e = this.__data__ = new _e(r);
      }
      return e.set(t, n), (this.size = e.size), this;
    });
  var Je = Object.prototype.propertyIsEnumerable,
    Qe = Object.getOwnPropertySymbols,
    Ke = Qe
      ? function (t) {
          return null == t
            ? []
            : ((t = Object(t)),
              (function (t, n) {
                for (
                  var e = -1, r = null == t ? 0 : t.length, i = 0, o = [];
                  ++e < r;

                ) {
                  var u = t[e];
                  n(u, e, t) && (o[i++] = u);
                }
                return o;
              })(Qe(t), function (n) {
                return Je.call(t, n);
              }));
        }
      : function () {
          return [];
        };
  function tr(t) {
    return (function (t, n, e) {
      var r = n(t);
      return nn(t) ? r : Oe(r, e(t));
    })(t, fe, Ke);
  }
  var nr = Cn(It, "DataView"),
    er = Cn(It, "Promise"),
    rr = Cn(It, "Set"),
    ir = "[object Map]",
    or = "[object Promise]",
    ur = "[object Set]",
    cr = "[object WeakMap]",
    ar = "[object DataView]",
    fr = xn(nr),
    lr = xn(xe),
    sr = xn(er),
    hr = xn(rr),
    dr = xn(An),
    pr = Jt;
  ((nr && pr(new nr(new ArrayBuffer(1))) != ar) ||
    (xe && pr(new xe()) != ir) ||
    (er && pr(er.resolve()) != or) ||
    (rr && pr(new rr()) != ur) ||
    (An && pr(new An()) != cr)) &&
    (pr = function (t) {
      var n = Jt(t),
        e = "[object Object]" == n ? t.constructor : void 0,
        r = e ? xn(e) : "";
      if (r)
        switch (r) {
          case fr:
            return ar;
          case lr:
            return ir;
          case sr:
            return or;
          case hr:
            return ur;
          case dr:
            return cr;
        }
      return n;
    });
  var vr = pr,
    yr = It.Uint8Array;
  function gr(t) {
    var n = -1,
      e = null == t ? 0 : t.length;
    for (this.__data__ = new _e(); ++n < e; ) this.add(t[n]);
  }
  function mr(t, n) {
    for (var e = -1, r = null == t ? 0 : t.length; ++e < r; )
      if (n(t[e], e, t)) return !0;
    return !1;
  }
  (gr.prototype.add = gr.prototype.push = function (t) {
    return this.__data__.set(t, "__lodash_hash_undefined__"), this;
  }),
    (gr.prototype.has = function (t) {
      return this.__data__.has(t);
    });
  function br(t, n, e, r, i, o) {
    var u = 1 & e,
      c = t.length,
      a = n.length;
    if (c != a && !(u && a > c)) return !1;
    var f = o.get(t),
      l = o.get(n);
    if (f && l) return f == n && l == t;
    var s = -1,
      h = !0,
      d = 2 & e ? new gr() : void 0;
    for (o.set(t, n), o.set(n, t); ++s < c; ) {
      var p = t[s],
        v = n[s];
      if (r) var y = u ? r(v, p, s, n, t, o) : r(p, v, s, t, n, o);
      if (void 0 !== y) {
        if (y) continue;
        h = !1;
        break;
      }
      if (d) {
        if (
          !mr(n, function (t, n) {
            if (((u = n), !d.has(u) && (p === t || i(p, t, e, r, o))))
              return d.push(n);
            var u;
          })
        ) {
          h = !1;
          break;
        }
      } else if (p !== v && !i(p, v, e, r, o)) {
        h = !1;
        break;
      }
    }
    return o.delete(t), o.delete(n), h;
  }
  function xr(t) {
    var n = -1,
      e = Array(t.size);
    return (
      t.forEach(function (t, r) {
        e[++n] = [r, t];
      }),
      e
    );
  }
  function wr(t) {
    var n = -1,
      e = Array(t.size);
    return (
      t.forEach(function (t) {
        e[++n] = t;
      }),
      e
    );
  }
  var _r = Yt ? Yt.prototype : void 0,
    $r = _r ? _r.valueOf : void 0;
  var Tr = Object.prototype.hasOwnProperty;
  var Mr = "[object Arguments]",
    kr = "[object Array]",
    jr = "[object Object]",
    Cr = Object.prototype.hasOwnProperty;
  function Ar(t, n, e, r, i, o) {
    var u = nn(t),
      c = nn(n),
      a = u ? kr : vr(t),
      f = c ? kr : vr(n),
      l = (a = a == Mr ? jr : a) == jr,
      s = (f = f == Mr ? jr : f) == jr,
      h = a == f;
    if (h && Zn(t)) {
      if (!Zn(n)) return !1;
      (u = !0), (l = !1);
    }
    if (h && !l)
      return (
        o || (o = new Xe()),
        u || ne(t)
          ? br(t, n, e, r, i, o)
          : (function (t, n, e, r, i, o, u) {
              switch (e) {
                case "[object DataView]":
                  if (
                    t.byteLength != n.byteLength ||
                    t.byteOffset != n.byteOffset
                  )
                    return !1;
                  (t = t.buffer), (n = n.buffer);
                case "[object ArrayBuffer]":
                  return !(
                    t.byteLength != n.byteLength || !o(new yr(t), new yr(n))
                  );
                case "[object Boolean]":
                case "[object Date]":
                case "[object Number]":
                  return Rn(+t, +n);
                case "[object Error]":
                  return t.name == n.name && t.message == n.message;
                case "[object RegExp]":
                case "[object String]":
                  return t == n + "";
                case "[object Map]":
                  var c = xr;
                case "[object Set]":
                  var a = 1 & r;
                  if ((c || (c = wr), t.size != n.size && !a)) return !1;
                  var f = u.get(t);
                  if (f) return f == n;
                  (r |= 2), u.set(t, n);
                  var l = br(c(t), c(n), r, i, o, u);
                  return u.delete(t), l;
                case "[object Symbol]":
                  if ($r) return $r.call(t) == $r.call(n);
              }
              return !1;
            })(t, n, a, e, r, i, o)
      );
    if (!(1 & e)) {
      var d = l && Cr.call(t, "__wrapped__"),
        p = s && Cr.call(n, "__wrapped__");
      if (d || p) {
        var v = d ? t.value() : t,
          y = p ? n.value() : n;
        return o || (o = new Xe()), i(v, y, e, r, o);
      }
    }
    return (
      !!h &&
      (o || (o = new Xe()),
      (function (t, n, e, r, i, o) {
        var u = 1 & e,
          c = tr(t),
          a = c.length;
        if (a != tr(n).length && !u) return !1;
        for (var f = a; f--; ) {
          var l = c[f];
          if (!(u ? l in n : Tr.call(n, l))) return !1;
        }
        var s = o.get(t),
          h = o.get(n);
        if (s && h) return s == n && h == t;
        var d = !0;
        o.set(t, n), o.set(n, t);
        for (var p = u; ++f < a; ) {
          var v = t[(l = c[f])],
            y = n[l];
          if (r) var g = u ? r(y, v, l, n, t, o) : r(v, y, l, t, n, o);
          if (!(void 0 === g ? v === y || i(v, y, e, r, o) : g)) {
            d = !1;
            break;
          }
          p || (p = "constructor" == l);
        }
        if (d && !p) {
          var m = t.constructor,
            b = n.constructor;
          m == b ||
            !("constructor" in t) ||
            !("constructor" in n) ||
            ("function" == typeof m &&
              m instanceof m &&
              "function" == typeof b &&
              b instanceof b) ||
            (d = !1);
        }
        return o.delete(t), o.delete(n), d;
      })(t, n, e, r, i, o))
    );
  }
  function Lr(t, n, e, r, i) {
    return (
      t === n ||
      (null == t || null == n || (!Qt(t) && !Qt(n))
        ? t != t && n != n
        : Ar(t, n, e, r, Lr, i))
    );
  }
  function Or(t) {
    return t == t && !un(t);
  }
  function Sr(t, n) {
    return function (e) {
      return null != e && e[t] === n && (void 0 !== n || t in Object(e));
    };
  }
  function Er(t) {
    var n = (function (t) {
      for (var n = fe(t), e = n.length; e--; ) {
        var r = n[e],
          i = t[r];
        n[e] = [r, i, Or(i)];
      }
      return n;
    })(t);
    return 1 == n.length && n[0][2]
      ? Sr(n[0][0], n[0][1])
      : function (e) {
          return (
            e === t ||
            (function (t, n, e, r) {
              var i = e.length,
                o = i,
                u = !r;
              if (null == t) return !o;
              for (t = Object(t); i--; ) {
                var c = e[i];
                if (u && c[2] ? c[1] !== t[c[0]] : !(c[0] in t)) return !1;
              }
              for (; ++i < o; ) {
                var a = (c = e[i])[0],
                  f = t[a],
                  l = c[1];
                if (u && c[2]) {
                  if (void 0 === f && !(a in t)) return !1;
                } else {
                  var s = new Xe();
                  if (r) var h = r(f, l, a, t, n, s);
                  if (!(void 0 === h ? Lr(l, f, 3, r, s) : h)) return !1;
                }
              }
              return !0;
            })(e, t, n)
          );
        };
  }
  function Dr(t, n) {
    return null != t && n in Object(t);
  }
  function Rr(t, n) {
    return (
      null != t &&
      (function (t, n, e) {
        for (var r = -1, i = (n = Ce(n, t)).length, o = !1; ++r < i; ) {
          var u = Ae(n[r]);
          if (!(o = null != t && e(t, u))) break;
          t = t[u];
        }
        return o || ++r != i
          ? o
          : !!(i = null == t ? 0 : t.length) &&
              Nn(i) &&
              Dn(u, i) &&
              (nn(t) || In(t));
      })(t, n, Dr)
    );
  }
  function Nr(t, n) {
    return he(t) && Or(n)
      ? Sr(Ae(t), n)
      : function (e) {
          var r = (function (t, n, e) {
            var r = null == t ? void 0 : Le(t, n);
            return void 0 === r ? e : r;
          })(e, t);
          return void 0 === r && r === n ? Rr(e, t) : Lr(n, r, 3);
        };
  }
  function Pr(t) {
    return function (n) {
      return null == n ? void 0 : n[t];
    };
  }
  function Ur(t) {
    return he(t)
      ? Pr(Ae(t))
      : (function (t) {
          return function (n) {
            return Le(n, t);
          };
        })(t);
  }
  function Fr(n) {
    return "function" == typeof n
      ? n
      : null == n
      ? pn
      : "object" == t(n)
      ? nn(n)
        ? Nr(n[0], n[1])
        : Er(n)
      : Ur(n);
  }
  function Hr(t, n, e, r) {
    for (var i = -1, o = null == t ? 0 : t.length; ++i < o; ) {
      var u = t[i];
      n(r, u, e(u), t);
    }
    return r;
  }
  var zr,
    Br = function (t, n, e) {
      for (var r = -1, i = Object(t), o = e(t), u = o.length; u--; ) {
        var c = o[zr ? u : ++r];
        if (!1 === n(i[c], c, i)) break;
      }
      return t;
    };
  var Ir = (function (t, n) {
    return function (e, r) {
      if (null == e) return e;
      if (!Pn(e)) return t(e, r);
      for (
        var i = e.length, o = n ? i : -1, u = Object(e);
        (n ? o-- : ++o < i) && !1 !== r(u[o], o, u);

      );
      return e;
    };
  })(function (t, n) {
    return t && Br(t, n, fe);
  });
  function Yr(t, n, e, r) {
    return (
      Ir(t, function (t, i, o) {
        n(r, t, e(t), o);
      }),
      r
    );
  }
  function qr(t, n) {
    var e;
    return (nn(t) ? Sn : Ir)(t, "function" == typeof (e = n) ? e : pn);
  }
  function Wr(t, n) {
    var e = -1,
      r = Pn(t) ? Array(t.length) : [];
    return (
      Ir(t, function (t, i, o) {
        r[++e] = n(t, i, o);
      }),
      r
    );
  }
  function Zr(t, n) {
    return (nn(t) ? tn : Wr)(t, Fr(n));
  }
  var Vr,
    Gr,
    Xr = Object.prototype.hasOwnProperty,
    Jr =
      ((Vr = function (t, n, e) {
        Xr.call(t, e)
          ? t[e].push(n)
          : (function (t, n, e) {
              "__proto__" == n && On
                ? On(t, n, {
                    configurable: !0,
                    enumerable: !0,
                    value: e,
                    writable: !0,
                  })
                : (t[n] = e);
            })(t, e, [n]);
      }),
      function (t, n) {
        var e = nn(t) ? Hr : Yr,
          r = Gr ? Gr() : {};
        return e(t, Vr, Fr(n), r);
      });
  function Qr(t, n) {
    if (t !== n) {
      var e = void 0 !== t,
        r = null === t,
        i = t == t,
        o = Kt(t),
        u = void 0 !== n,
        c = null === n,
        a = n == n,
        f = Kt(n);
      if (
        (!c && !f && !o && t > n) ||
        (o && u && a && !c && !f) ||
        (r && u && a) ||
        (!e && a) ||
        !i
      )
        return 1;
      if (
        (!r && !o && !f && t < n) ||
        (f && e && i && !r && !o) ||
        (c && e && i) ||
        (!u && i) ||
        !a
      )
        return -1;
    }
    return 0;
  }
  function Kr(t, n, e) {
    n = n.length
      ? tn(n, function (t) {
          return nn(t)
            ? function (n) {
                return Le(n, 1 === t.length ? t[0] : t);
              }
            : t;
        })
      : [pn];
    var r = -1;
    return (
      (n = tn(n, Gn(Fr))),
      (function (t, n) {
        var e = t.length;
        for (t.sort(n); e--; ) t[e] = t[e].value;
        return t;
      })(
        Wr(t, function (t, e, i) {
          return {
            criteria: tn(n, function (n) {
              return n(t);
            }),
            index: ++r,
            value: t,
          };
        }),
        function (t, n) {
          return (function (t, n, e) {
            for (
              var r = -1,
                i = t.criteria,
                o = n.criteria,
                u = i.length,
                c = e.length;
              ++r < u;

            ) {
              var a = Qr(i[r], o[r]);
              if (a) return r >= c ? a : a * ("desc" == e[r] ? -1 : 1);
            }
            return t.index - n.index;
          })(t, n, e);
        }
      )
    );
  }
  function ti(t, n, e, r) {
    return null == t
      ? []
      : (nn(n) || (n = null == n ? [] : [n]),
        nn((e = r ? void 0 : e)) || (e = null == e ? [] : [e]),
        Kr(t, n, e));
  }
  var ni = Math.floor;
  function ei(t, n) {
    var e = "";
    if (!t || n < 1 || n > 9007199254740991) return e;
    do {
      n % 2 && (e += t), (n = ni(n / 2)) && (t += t);
    } while (n);
    return e;
  }
  var ri = Pr("length"),
    ii = "[\\ud800-\\udfff]",
    oi = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
    ui = "\\ud83c[\\udffb-\\udfff]",
    ci = "[^\\ud800-\\udfff]",
    ai = "(?:\\ud83c[\\udde6-\\uddff]){2}",
    fi = "[\\ud800-\\udbff][\\udc00-\\udfff]",
    li = "(?:" + oi + "|" + ui + ")" + "?",
    si = "[\\ufe0e\\ufe0f]?",
    hi =
      si +
      li +
      ("(?:\\u200d(?:" + [ci, ai, fi].join("|") + ")" + si + li + ")*"),
    di = "(?:" + [ci + oi + "?", oi, ai, fi, ii].join("|") + ")",
    pi = RegExp(ui + "(?=" + ui + ")|" + di + hi, "g");
  function vi(t) {
    return Pe(t)
      ? (function (t) {
          for (var n = (pi.lastIndex = 0); pi.test(t); ) ++n;
          return n;
        })(t)
      : ri(t);
  }
  var yi = Math.ceil;
  function gi(t, n, e) {
    var r, i;
    (t = je(t)), (r = dn(n)), (i = r % 1);
    var o = (n = r == r ? (i ? r - i : r) : 0) ? vi(t) : 0;
    return n && o < n
      ? (function (t, n) {
          var e = (n = void 0 === n ? " " : on(n)).length;
          if (e < 2) return e ? ei(n, t) : n;
          var r = ei(n, yi(t / vi(n)));
          return Pe(n) ? Re(Ge(r), 0, t).join("") : r.slice(0, t);
        })(n - o, e) + t
      : t;
  }
  var mi = Math.ceil,
    bi = Math.max;
  var xi = (function (n) {
    return function (e, r, i) {
      return (
        i &&
          "number" != typeof i &&
          (function (n, e, r) {
            if (!un(r)) return !1;
            var i = t(e);
            return (
              !!("number" == i
                ? Pn(r) && Dn(e, r.length)
                : "string" == i && e in r) && Rn(r[e], n)
            );
          })(e, r, i) &&
          (r = i = void 0),
        (e = dn(e)),
        void 0 === r ? ((r = e), (e = 0)) : (r = dn(r)),
        (function (t, n, e, r) {
          for (
            var i = -1, o = bi(mi((n - t) / (e || 1)), 0), u = Array(o);
            o--;

          )
            (u[r ? o : ++i] = t), (t += e);
          return u;
        })(e, r, (i = void 0 === i ? (e < r ? 1 : -1) : dn(i)), n)
      );
    };
  })();
  var wi = function (t) {
    var n = t.getFullYear(),
      e = t.getDate(),
      r = t.getMonth() + 1;
    return "".concat(n, "/").concat(gi(r, 2, "0"), "/").concat(gi(e, 2, "0"));
  };
  function _i(t, n, e) {
    return (
      n in t
        ? Object.defineProperty(t, n, {
            value: e,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (t[n] = e),
      t
    );
  }
  function $i(t, n) {
    return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
  }
  function Ti(t) {
    var n = t,
      e = t;
    function r(t, n, r, i) {
      for (null == r && (r = 0), null == i && (i = t.length); r < i; ) {
        var o = (r + i) >>> 1;
        e(t[o], n) < 0 ? (r = o + 1) : (i = o);
      }
      return r;
    }
    return (
      1 === t.length &&
        ((n = function (n, e) {
          return t(n) - e;
        }),
        (e = (function (t) {
          return function (n, e) {
            return $i(t(n), e);
          };
        })(t))),
      {
        left: r,
        center: function (t, e, i, o) {
          null == i && (i = 0), null == o && (o = t.length);
          var u = r(t, e, i, o - 1);
          return u > i && n(t[u - 1], e) > -n(t[u], e) ? u - 1 : u;
        },
        right: function (t, n, r, i) {
          for (null == r && (r = 0), null == i && (i = t.length); r < i; ) {
            var o = (r + i) >>> 1;
            e(t[o], n) > 0 ? (i = o) : (r = o + 1);
          }
          return r;
        },
      }
    );
  }
  !(function (t, n, e) {
    t(
      (e = {
        path: n,
        exports: {},
        require: function (t, n) {
          return (function () {
            throw new Error(
              "Dynamic requires are not currently supported by @rollup/plugin-commonjs"
            );
          })(null == n && e.path);
        },
      }),
      e.exports
    ),
      e.exports;
  })(function (n) {
    var e = (function (n) {
      var e,
        r = Object.prototype,
        i = r.hasOwnProperty,
        o = "function" == typeof Symbol ? Symbol : {},
        u = o.iterator || "@@iterator",
        c = o.asyncIterator || "@@asyncIterator",
        a = o.toStringTag || "@@toStringTag";
      function f(t, n, e) {
        return (
          Object.defineProperty(t, n, {
            value: e,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          }),
          t[n]
        );
      }
      try {
        f({}, "");
      } catch (t) {
        f = function (t, n, e) {
          return (t[n] = e);
        };
      }
      function l(t, n, e, r) {
        var i = n && n.prototype instanceof g ? n : g,
          o = Object.create(i.prototype),
          u = new A(r || []);
        return (
          (o._invoke = (function (t, n, e) {
            var r = h;
            return function (i, o) {
              if (r === p) throw new Error("Generator is already running");
              if (r === v) {
                if ("throw" === i) throw o;
                return O();
              }
              for (e.method = i, e.arg = o; ; ) {
                var u = e.delegate;
                if (u) {
                  var c = k(u, e);
                  if (c) {
                    if (c === y) continue;
                    return c;
                  }
                }
                if ("next" === e.method) e.sent = e._sent = e.arg;
                else if ("throw" === e.method) {
                  if (r === h) throw ((r = v), e.arg);
                  e.dispatchException(e.arg);
                } else "return" === e.method && e.abrupt("return", e.arg);
                r = p;
                var a = s(t, n, e);
                if ("normal" === a.type) {
                  if (((r = e.done ? v : d), a.arg === y)) continue;
                  return { value: a.arg, done: e.done };
                }
                "throw" === a.type &&
                  ((r = v), (e.method = "throw"), (e.arg = a.arg));
              }
            };
          })(t, e, u)),
          o
        );
      }
      function s(t, n, e) {
        try {
          return { type: "normal", arg: t.call(n, e) };
        } catch (t) {
          return { type: "throw", arg: t };
        }
      }
      n.wrap = l;
      var h = "suspendedStart",
        d = "suspendedYield",
        p = "executing",
        v = "completed",
        y = {};
      function g() {}
      function m() {}
      function b() {}
      var x = {};
      x[u] = function () {
        return this;
      };
      var w = Object.getPrototypeOf,
        _ = w && w(w(L([])));
      _ && _ !== r && i.call(_, u) && (x = _);
      var $ = (b.prototype = g.prototype = Object.create(x));
      function T(t) {
        ["next", "throw", "return"].forEach(function (n) {
          f(t, n, function (t) {
            return this._invoke(n, t);
          });
        });
      }
      function M(n, e) {
        function r(o, u, c, a) {
          var f = s(n[o], n, u);
          if ("throw" !== f.type) {
            var l = f.arg,
              h = l.value;
            return h && "object" === t(h) && i.call(h, "__await")
              ? e.resolve(h.__await).then(
                  function (t) {
                    r("next", t, c, a);
                  },
                  function (t) {
                    r("throw", t, c, a);
                  }
                )
              : e.resolve(h).then(
                  function (t) {
                    (l.value = t), c(l);
                  },
                  function (t) {
                    return r("throw", t, c, a);
                  }
                );
          }
          a(f.arg);
        }
        var o;
        this._invoke = function (t, n) {
          function i() {
            return new e(function (e, i) {
              r(t, n, e, i);
            });
          }
          return (o = o ? o.then(i, i) : i());
        };
      }
      function k(t, n) {
        var r = t.iterator[n.method];
        if (r === e) {
          if (((n.delegate = null), "throw" === n.method)) {
            if (
              t.iterator.return &&
              ((n.method = "return"),
              (n.arg = e),
              k(t, n),
              "throw" === n.method)
            )
              return y;
            (n.method = "throw"),
              (n.arg = new TypeError(
                "The iterator does not provide a 'throw' method"
              ));
          }
          return y;
        }
        var i = s(r, t.iterator, n.arg);
        if ("throw" === i.type)
          return (n.method = "throw"), (n.arg = i.arg), (n.delegate = null), y;
        var o = i.arg;
        return o
          ? o.done
            ? ((n[t.resultName] = o.value),
              (n.next = t.nextLoc),
              "return" !== n.method && ((n.method = "next"), (n.arg = e)),
              (n.delegate = null),
              y)
            : o
          : ((n.method = "throw"),
            (n.arg = new TypeError("iterator result is not an object")),
            (n.delegate = null),
            y);
      }
      function j(t) {
        var n = { tryLoc: t[0] };
        1 in t && (n.catchLoc = t[1]),
          2 in t && ((n.finallyLoc = t[2]), (n.afterLoc = t[3])),
          this.tryEntries.push(n);
      }
      function C(t) {
        var n = t.completion || {};
        (n.type = "normal"), delete n.arg, (t.completion = n);
      }
      function A(t) {
        (this.tryEntries = [{ tryLoc: "root" }]),
          t.forEach(j, this),
          this.reset(!0);
      }
      function L(t) {
        if (t) {
          var n = t[u];
          if (n) return n.call(t);
          if ("function" == typeof t.next) return t;
          if (!isNaN(t.length)) {
            var r = -1,
              o = function n() {
                for (; ++r < t.length; )
                  if (i.call(t, r)) return (n.value = t[r]), (n.done = !1), n;
                return (n.value = e), (n.done = !0), n;
              };
            return (o.next = o);
          }
        }
        return { next: O };
      }
      function O() {
        return { value: e, done: !0 };
      }
      return (
        (m.prototype = $.constructor = b),
        (b.constructor = m),
        (m.displayName = f(b, a, "GeneratorFunction")),
        (n.isGeneratorFunction = function (t) {
          var n = "function" == typeof t && t.constructor;
          return (
            !!n &&
            (n === m || "GeneratorFunction" === (n.displayName || n.name))
          );
        }),
        (n.mark = function (t) {
          return (
            Object.setPrototypeOf
              ? Object.setPrototypeOf(t, b)
              : ((t.__proto__ = b), f(t, a, "GeneratorFunction")),
            (t.prototype = Object.create($)),
            t
          );
        }),
        (n.awrap = function (t) {
          return { __await: t };
        }),
        T(M.prototype),
        (M.prototype[c] = function () {
          return this;
        }),
        (n.AsyncIterator = M),
        (n.async = function (t, e, r, i, o) {
          void 0 === o && (o = Promise);
          var u = new M(l(t, e, r, i), o);
          return n.isGeneratorFunction(e)
            ? u
            : u.next().then(function (t) {
                return t.done ? t.value : u.next();
              });
        }),
        T($),
        f($, a, "Generator"),
        ($[u] = function () {
          return this;
        }),
        ($.toString = function () {
          return "[object Generator]";
        }),
        (n.keys = function (t) {
          var n = [];
          for (var e in t) n.push(e);
          return (
            n.reverse(),
            function e() {
              for (; n.length; ) {
                var r = n.pop();
                if (r in t) return (e.value = r), (e.done = !1), e;
              }
              return (e.done = !0), e;
            }
          );
        }),
        (n.values = L),
        (A.prototype = {
          constructor: A,
          reset: function (t) {
            if (
              ((this.prev = 0),
              (this.next = 0),
              (this.sent = this._sent = e),
              (this.done = !1),
              (this.delegate = null),
              (this.method = "next"),
              (this.arg = e),
              this.tryEntries.forEach(C),
              !t)
            )
              for (var n in this)
                "t" === n.charAt(0) &&
                  i.call(this, n) &&
                  !isNaN(+n.slice(1)) &&
                  (this[n] = e);
          },
          stop: function () {
            this.done = !0;
            var t = this.tryEntries[0].completion;
            if ("throw" === t.type) throw t.arg;
            return this.rval;
          },
          dispatchException: function (t) {
            if (this.done) throw t;
            var n = this;
            function r(r, i) {
              return (
                (c.type = "throw"),
                (c.arg = t),
                (n.next = r),
                i && ((n.method = "next"), (n.arg = e)),
                !!i
              );
            }
            for (var o = this.tryEntries.length - 1; o >= 0; --o) {
              var u = this.tryEntries[o],
                c = u.completion;
              if ("root" === u.tryLoc) return r("end");
              if (u.tryLoc <= this.prev) {
                var a = i.call(u, "catchLoc"),
                  f = i.call(u, "finallyLoc");
                if (a && f) {
                  if (this.prev < u.catchLoc) return r(u.catchLoc, !0);
                  if (this.prev < u.finallyLoc) return r(u.finallyLoc);
                } else if (a) {
                  if (this.prev < u.catchLoc) return r(u.catchLoc, !0);
                } else {
                  if (!f)
                    throw new Error("try statement without catch or finally");
                  if (this.prev < u.finallyLoc) return r(u.finallyLoc);
                }
              }
            }
          },
          abrupt: function (t, n) {
            for (var e = this.tryEntries.length - 1; e >= 0; --e) {
              var r = this.tryEntries[e];
              if (
                r.tryLoc <= this.prev &&
                i.call(r, "finallyLoc") &&
                this.prev < r.finallyLoc
              ) {
                var o = r;
                break;
              }
            }
            o &&
              ("break" === t || "continue" === t) &&
              o.tryLoc <= n &&
              n <= o.finallyLoc &&
              (o = null);
            var u = o ? o.completion : {};
            return (
              (u.type = t),
              (u.arg = n),
              o
                ? ((this.method = "next"), (this.next = o.finallyLoc), y)
                : this.complete(u)
            );
          },
          complete: function (t, n) {
            if ("throw" === t.type) throw t.arg;
            return (
              "break" === t.type || "continue" === t.type
                ? (this.next = t.arg)
                : "return" === t.type
                ? ((this.rval = this.arg = t.arg),
                  (this.method = "return"),
                  (this.next = "end"))
                : "normal" === t.type && n && (this.next = n),
              y
            );
          },
          finish: function (t) {
            for (var n = this.tryEntries.length - 1; n >= 0; --n) {
              var e = this.tryEntries[n];
              if (e.finallyLoc === t)
                return this.complete(e.completion, e.afterLoc), C(e), y;
            }
          },
          catch: function (t) {
            for (var n = this.tryEntries.length - 1; n >= 0; --n) {
              var e = this.tryEntries[n];
              if (e.tryLoc === t) {
                var r = e.completion;
                if ("throw" === r.type) {
                  var i = r.arg;
                  C(e);
                }
                return i;
              }
            }
            throw new Error("illegal catch attempt");
          },
          delegateYield: function (t, n, r) {
            return (
              (this.delegate = { iterator: L(t), resultName: n, nextLoc: r }),
              "next" === this.method && (this.arg = e),
              y
            );
          },
        }),
        n
      );
    })(n.exports);
    try {
      regeneratorRuntime = e;
    } catch (t) {
      Function("r", "regeneratorRuntime = r")(e);
    }
  });
  var Mi = Ti($i).right;
  function ki(t, n) {
    var e;
    if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
      if (
        Array.isArray(t) ||
        (e = (function (t, n) {
          if (!t) return;
          if ("string" == typeof t) return ji(t, n);
          var e = Object.prototype.toString.call(t).slice(8, -1);
          "Object" === e && t.constructor && (e = t.constructor.name);
          if ("Map" === e || "Set" === e) return Array.from(t);
          if (
            "Arguments" === e ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)
          )
            return ji(t, n);
        })(t)) ||
        (n && t && "number" == typeof t.length)
      ) {
        e && (t = e);
        var r = 0,
          i = function () {};
        return {
          s: i,
          n: function () {
            return r >= t.length ? { done: !0 } : { done: !1, value: t[r++] };
          },
          e: function (t) {
            throw t;
          },
          f: i,
        };
      }
      throw new TypeError(
        "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
      );
    }
    var o,
      u = !0,
      c = !1;
    return {
      s: function () {
        e = t[Symbol.iterator]();
      },
      n: function () {
        var t = e.next();
        return (u = t.done), t;
      },
      e: function (t) {
        (c = !0), (o = t);
      },
      f: function () {
        try {
          u || null == e.return || e.return();
        } finally {
          if (c) throw o;
        }
      },
    };
  }
  function ji(t, n) {
    (null == n || n > t.length) && (n = t.length);
    for (var e = 0, r = new Array(n); e < n; e++) r[e] = t[e];
    return r;
  }
  Ti(function (t) {
    return null === t ? NaN : +t;
  }).center;
  var Ci = Math.sqrt(50),
    Ai = Math.sqrt(10),
    Li = Math.sqrt(2);
  function Oi(t, n, e) {
    var r = (n - t) / Math.max(0, e),
      i = Math.floor(Math.log(r) / Math.LN10),
      o = r / Math.pow(10, i);
    return i >= 0
      ? (o >= Ci ? 10 : o >= Ai ? 5 : o >= Li ? 2 : 1) * Math.pow(10, i)
      : -Math.pow(10, -i) / (o >= Ci ? 10 : o >= Ai ? 5 : o >= Li ? 2 : 1);
  }
  function Si(t, n, e) {
    var r = Math.abs(n - t) / Math.max(0, e),
      i = Math.pow(10, Math.floor(Math.log(r) / Math.LN10)),
      o = r / i;
    return (
      o >= Ci ? (i *= 10) : o >= Ai ? (i *= 5) : o >= Li && (i *= 2),
      n < t ? -i : i
    );
  }
  function Ei(t, n) {
    switch (arguments.length) {
      case 0:
        break;
      case 1:
        this.range(t);
        break;
      default:
        this.range(n).domain(t);
    }
    return this;
  }
  function Di(t, n, e) {
    (t.prototype = n.prototype = e), (e.constructor = t);
  }
  function Ri(t, n) {
    var e = Object.create(t.prototype);
    for (var r in n) e[r] = n[r];
    return e;
  }
  function Ni() {}
  var Pi = 0.7,
    Ui = 1 / Pi,
    Fi = "\\s*([+-]?\\d+)\\s*",
    Hi = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
    zi = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
    Bi = /^#([0-9a-f]{3,8})$/,
    Ii = new RegExp("^rgb\\(" + [Fi, Fi, Fi] + "\\)$"),
    Yi = new RegExp("^rgb\\(" + [zi, zi, zi] + "\\)$"),
    qi = new RegExp("^rgba\\(" + [Fi, Fi, Fi, Hi] + "\\)$"),
    Wi = new RegExp("^rgba\\(" + [zi, zi, zi, Hi] + "\\)$"),
    Zi = new RegExp("^hsl\\(" + [Hi, zi, zi] + "\\)$"),
    Vi = new RegExp("^hsla\\(" + [Hi, zi, zi, Hi] + "\\)$"),
    Gi = {
      aliceblue: 15792383,
      antiquewhite: 16444375,
      aqua: 65535,
      aquamarine: 8388564,
      azure: 15794175,
      beige: 16119260,
      bisque: 16770244,
      black: 0,
      blanchedalmond: 16772045,
      blue: 255,
      blueviolet: 9055202,
      brown: 10824234,
      burlywood: 14596231,
      cadetblue: 6266528,
      chartreuse: 8388352,
      chocolate: 13789470,
      coral: 16744272,
      cornflowerblue: 6591981,
      cornsilk: 16775388,
      crimson: 14423100,
      cyan: 65535,
      darkblue: 139,
      darkcyan: 35723,
      darkgoldenrod: 12092939,
      darkgray: 11119017,
      darkgreen: 25600,
      darkgrey: 11119017,
      darkkhaki: 12433259,
      darkmagenta: 9109643,
      darkolivegreen: 5597999,
      darkorange: 16747520,
      darkorchid: 10040012,
      darkred: 9109504,
      darksalmon: 15308410,
      darkseagreen: 9419919,
      darkslateblue: 4734347,
      darkslategray: 3100495,
      darkslategrey: 3100495,
      darkturquoise: 52945,
      darkviolet: 9699539,
      deeppink: 16716947,
      deepskyblue: 49151,
      dimgray: 6908265,
      dimgrey: 6908265,
      dodgerblue: 2003199,
      firebrick: 11674146,
      floralwhite: 16775920,
      forestgreen: 2263842,
      fuchsia: 16711935,
      gainsboro: 14474460,
      ghostwhite: 16316671,
      gold: 16766720,
      goldenrod: 14329120,
      gray: 8421504,
      green: 32768,
      greenyellow: 11403055,
      grey: 8421504,
      honeydew: 15794160,
      hotpink: 16738740,
      indianred: 13458524,
      indigo: 4915330,
      ivory: 16777200,
      khaki: 15787660,
      lavender: 15132410,
      lavenderblush: 16773365,
      lawngreen: 8190976,
      lemonchiffon: 16775885,
      lightblue: 11393254,
      lightcoral: 15761536,
      lightcyan: 14745599,
      lightgoldenrodyellow: 16448210,
      lightgray: 13882323,
      lightgreen: 9498256,
      lightgrey: 13882323,
      lightpink: 16758465,
      lightsalmon: 16752762,
      lightseagreen: 2142890,
      lightskyblue: 8900346,
      lightslategray: 7833753,
      lightslategrey: 7833753,
      lightsteelblue: 11584734,
      lightyellow: 16777184,
      lime: 65280,
      limegreen: 3329330,
      linen: 16445670,
      magenta: 16711935,
      maroon: 8388608,
      mediumaquamarine: 6737322,
      mediumblue: 205,
      mediumorchid: 12211667,
      mediumpurple: 9662683,
      mediumseagreen: 3978097,
      mediumslateblue: 8087790,
      mediumspringgreen: 64154,
      mediumturquoise: 4772300,
      mediumvioletred: 13047173,
      midnightblue: 1644912,
      mintcream: 16121850,
      mistyrose: 16770273,
      moccasin: 16770229,
      navajowhite: 16768685,
      navy: 128,
      oldlace: 16643558,
      olive: 8421376,
      olivedrab: 7048739,
      orange: 16753920,
      orangered: 16729344,
      orchid: 14315734,
      palegoldenrod: 15657130,
      palegreen: 10025880,
      paleturquoise: 11529966,
      palevioletred: 14381203,
      papayawhip: 16773077,
      peachpuff: 16767673,
      peru: 13468991,
      pink: 16761035,
      plum: 14524637,
      powderblue: 11591910,
      purple: 8388736,
      rebeccapurple: 6697881,
      red: 16711680,
      rosybrown: 12357519,
      royalblue: 4286945,
      saddlebrown: 9127187,
      salmon: 16416882,
      sandybrown: 16032864,
      seagreen: 3050327,
      seashell: 16774638,
      sienna: 10506797,
      silver: 12632256,
      skyblue: 8900331,
      slateblue: 6970061,
      slategray: 7372944,
      slategrey: 7372944,
      snow: 16775930,
      springgreen: 65407,
      steelblue: 4620980,
      tan: 13808780,
      teal: 32896,
      thistle: 14204888,
      tomato: 16737095,
      turquoise: 4251856,
      violet: 15631086,
      wheat: 16113331,
      white: 16777215,
      whitesmoke: 16119285,
      yellow: 16776960,
      yellowgreen: 10145074,
    };
  function Xi() {
    return this.rgb().formatHex();
  }
  function Ji() {
    return this.rgb().formatRgb();
  }
  function Qi(t) {
    var n, e;
    return (
      (t = (t + "").trim().toLowerCase()),
      (n = Bi.exec(t))
        ? ((e = n[1].length),
          (n = parseInt(n[1], 16)),
          6 === e
            ? Ki(n)
            : 3 === e
            ? new ro(
                ((n >> 8) & 15) | ((n >> 4) & 240),
                ((n >> 4) & 15) | (240 & n),
                ((15 & n) << 4) | (15 & n),
                1
              )
            : 8 === e
            ? to(
                (n >> 24) & 255,
                (n >> 16) & 255,
                (n >> 8) & 255,
                (255 & n) / 255
              )
            : 4 === e
            ? to(
                ((n >> 12) & 15) | ((n >> 8) & 240),
                ((n >> 8) & 15) | ((n >> 4) & 240),
                ((n >> 4) & 15) | (240 & n),
                (((15 & n) << 4) | (15 & n)) / 255
              )
            : null)
        : (n = Ii.exec(t))
        ? new ro(n[1], n[2], n[3], 1)
        : (n = Yi.exec(t))
        ? new ro((255 * n[1]) / 100, (255 * n[2]) / 100, (255 * n[3]) / 100, 1)
        : (n = qi.exec(t))
        ? to(n[1], n[2], n[3], n[4])
        : (n = Wi.exec(t))
        ? to((255 * n[1]) / 100, (255 * n[2]) / 100, (255 * n[3]) / 100, n[4])
        : (n = Zi.exec(t))
        ? co(n[1], n[2] / 100, n[3] / 100, 1)
        : (n = Vi.exec(t))
        ? co(n[1], n[2] / 100, n[3] / 100, n[4])
        : Gi.hasOwnProperty(t)
        ? Ki(Gi[t])
        : "transparent" === t
        ? new ro(NaN, NaN, NaN, 0)
        : null
    );
  }
  function Ki(t) {
    return new ro((t >> 16) & 255, (t >> 8) & 255, 255 & t, 1);
  }
  function to(t, n, e, r) {
    return r <= 0 && (t = n = e = NaN), new ro(t, n, e, r);
  }
  function no(t) {
    return (
      t instanceof Ni || (t = Qi(t)),
      t ? new ro((t = t.rgb()).r, t.g, t.b, t.opacity) : new ro()
    );
  }
  function eo(t, n, e, r) {
    return 1 === arguments.length ? no(t) : new ro(t, n, e, null == r ? 1 : r);
  }
  function ro(t, n, e, r) {
    (this.r = +t), (this.g = +n), (this.b = +e), (this.opacity = +r);
  }
  function io() {
    return "#" + uo(this.r) + uo(this.g) + uo(this.b);
  }
  function oo() {
    var t = this.opacity;
    return (
      (1 === (t = isNaN(t) ? 1 : Math.max(0, Math.min(1, t)))
        ? "rgb("
        : "rgba(") +
      Math.max(0, Math.min(255, Math.round(this.r) || 0)) +
      ", " +
      Math.max(0, Math.min(255, Math.round(this.g) || 0)) +
      ", " +
      Math.max(0, Math.min(255, Math.round(this.b) || 0)) +
      (1 === t ? ")" : ", " + t + ")")
    );
  }
  function uo(t) {
    return (
      ((t = Math.max(0, Math.min(255, Math.round(t) || 0))) < 16 ? "0" : "") +
      t.toString(16)
    );
  }
  function co(t, n, e, r) {
    return (
      r <= 0
        ? (t = n = e = NaN)
        : e <= 0 || e >= 1
        ? (t = n = NaN)
        : n <= 0 && (t = NaN),
      new fo(t, n, e, r)
    );
  }
  function ao(t) {
    if (t instanceof fo) return new fo(t.h, t.s, t.l, t.opacity);
    if ((t instanceof Ni || (t = Qi(t)), !t)) return new fo();
    if (t instanceof fo) return t;
    var n = (t = t.rgb()).r / 255,
      e = t.g / 255,
      r = t.b / 255,
      i = Math.min(n, e, r),
      o = Math.max(n, e, r),
      u = NaN,
      c = o - i,
      a = (o + i) / 2;
    return (
      c
        ? ((u =
            n === o
              ? (e - r) / c + 6 * (e < r)
              : e === o
              ? (r - n) / c + 2
              : (n - e) / c + 4),
          (c /= a < 0.5 ? o + i : 2 - o - i),
          (u *= 60))
        : (c = a > 0 && a < 1 ? 0 : u),
      new fo(u, c, a, t.opacity)
    );
  }
  function fo(t, n, e, r) {
    (this.h = +t), (this.s = +n), (this.l = +e), (this.opacity = +r);
  }
  function lo(t, n, e) {
    return (
      255 *
      (t < 60
        ? n + ((e - n) * t) / 60
        : t < 180
        ? e
        : t < 240
        ? n + ((e - n) * (240 - t)) / 60
        : n)
    );
  }
  Di(Ni, Qi, {
    copy: function (t) {
      return P(new this.constructor(), this, t);
    },
    displayable: function () {
      return this.rgb().displayable();
    },
    hex: Xi,
    formatHex: Xi,
    formatHsl: function () {
      return ao(this).formatHsl();
    },
    formatRgb: Ji,
    toString: Ji,
  }),
    Di(
      ro,
      eo,
      Ri(Ni, {
        brighter: function (t) {
          return (
            (t = null == t ? Ui : Math.pow(Ui, t)),
            new ro(this.r * t, this.g * t, this.b * t, this.opacity)
          );
        },
        darker: function (t) {
          return (
            (t = null == t ? Pi : Math.pow(Pi, t)),
            new ro(this.r * t, this.g * t, this.b * t, this.opacity)
          );
        },
        rgb: function () {
          return this;
        },
        displayable: function () {
          return (
            -0.5 <= this.r &&
            this.r < 255.5 &&
            -0.5 <= this.g &&
            this.g < 255.5 &&
            -0.5 <= this.b &&
            this.b < 255.5 &&
            0 <= this.opacity &&
            this.opacity <= 1
          );
        },
        hex: io,
        formatHex: io,
        formatRgb: oo,
        toString: oo,
      })
    ),
    Di(
      fo,
      function (t, n, e, r) {
        return 1 === arguments.length
          ? ao(t)
          : new fo(t, n, e, null == r ? 1 : r);
      },
      Ri(Ni, {
        brighter: function (t) {
          return (
            (t = null == t ? Ui : Math.pow(Ui, t)),
            new fo(this.h, this.s, this.l * t, this.opacity)
          );
        },
        darker: function (t) {
          return (
            (t = null == t ? Pi : Math.pow(Pi, t)),
            new fo(this.h, this.s, this.l * t, this.opacity)
          );
        },
        rgb: function () {
          var t = (this.h % 360) + 360 * (this.h < 0),
            n = isNaN(t) || isNaN(this.s) ? 0 : this.s,
            e = this.l,
            r = e + (e < 0.5 ? e : 1 - e) * n,
            i = 2 * e - r;
          return new ro(
            lo(t >= 240 ? t - 240 : t + 120, i, r),
            lo(t, i, r),
            lo(t < 120 ? t + 240 : t - 120, i, r),
            this.opacity
          );
        },
        displayable: function () {
          return (
            ((0 <= this.s && this.s <= 1) || isNaN(this.s)) &&
            0 <= this.l &&
            this.l <= 1 &&
            0 <= this.opacity &&
            this.opacity <= 1
          );
        },
        formatHsl: function () {
          var t = this.opacity;
          return (
            (1 === (t = isNaN(t) ? 1 : Math.max(0, Math.min(1, t)))
              ? "hsl("
              : "hsla(") +
            (this.h || 0) +
            ", " +
            100 * (this.s || 0) +
            "%, " +
            100 * (this.l || 0) +
            "%" +
            (1 === t ? ")" : ", " + t + ")")
          );
        },
      })
    );
  var so = function (t) {
    return function () {
      return t;
    };
  };
  function ho(t) {
    return 1 == (t = +t)
      ? po
      : function (n, e) {
          return e - n
            ? (function (t, n, e) {
                return (
                  (t = Math.pow(t, e)),
                  (n = Math.pow(n, e) - t),
                  (e = 1 / e),
                  function (r) {
                    return Math.pow(t + r * n, e);
                  }
                );
              })(n, e, t)
            : so(isNaN(n) ? e : n);
        };
  }
  function po(t, n) {
    var e = n - t;
    return e
      ? (function (t, n) {
          return function (e) {
            return t + e * n;
          };
        })(t, e)
      : so(isNaN(t) ? n : t);
  }
  var vo = (function t(n) {
    var e = ho(n);
    function r(t, n) {
      var r = e((t = eo(t)).r, (n = eo(n)).r),
        i = e(t.g, n.g),
        o = e(t.b, n.b),
        u = po(t.opacity, n.opacity);
      return function (n) {
        return (
          (t.r = r(n)), (t.g = i(n)), (t.b = o(n)), (t.opacity = u(n)), t + ""
        );
      };
    }
    return (r.gamma = t), r;
  })(1);
  function yo(t, n) {
    n || (n = []);
    var e,
      r = t ? Math.min(n.length, t.length) : 0,
      i = n.slice();
    return function (o) {
      for (e = 0; e < r; ++e) i[e] = t[e] * (1 - o) + n[e] * o;
      return i;
    };
  }
  function go(t, n) {
    var e,
      r = n ? n.length : 0,
      i = t ? Math.min(r, t.length) : 0,
      o = new Array(i),
      u = new Array(r);
    for (e = 0; e < i; ++e) o[e] = To(t[e], n[e]);
    for (; e < r; ++e) u[e] = n[e];
    return function (t) {
      for (e = 0; e < i; ++e) u[e] = o[e](t);
      return u;
    };
  }
  function mo(t, n) {
    var e = new Date();
    return (
      (t = +t),
      (n = +n),
      function (r) {
        return e.setTime(t * (1 - r) + n * r), e;
      }
    );
  }
  function bo(t, n) {
    return (
      (t = +t),
      (n = +n),
      function (e) {
        return t * (1 - e) + n * e;
      }
    );
  }
  function xo(n, e) {
    var r,
      i = {},
      o = {};
    for (r in ((null !== n && "object" === t(n)) || (n = {}),
    (null !== e && "object" === t(e)) || (e = {}),
    e))
      r in n ? (i[r] = To(n[r], e[r])) : (o[r] = e[r]);
    return function (t) {
      for (r in i) o[r] = i[r](t);
      return o;
    };
  }
  var wo = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
    _o = new RegExp(wo.source, "g");
  function $o(t, n) {
    var e,
      r,
      i,
      o = (wo.lastIndex = _o.lastIndex = 0),
      u = -1,
      c = [],
      a = [];
    for (t += "", n += ""; (e = wo.exec(t)) && (r = _o.exec(n)); )
      (i = r.index) > o &&
        ((i = n.slice(o, i)), c[u] ? (c[u] += i) : (c[++u] = i)),
        (e = e[0]) === (r = r[0])
          ? c[u]
            ? (c[u] += r)
            : (c[++u] = r)
          : ((c[++u] = null), a.push({ i: u, x: bo(e, r) })),
        (o = _o.lastIndex);
    return (
      o < n.length && ((i = n.slice(o)), c[u] ? (c[u] += i) : (c[++u] = i)),
      c.length < 2
        ? a[0]
          ? (function (t) {
              return function (n) {
                return t(n) + "";
              };
            })(a[0].x)
          : (function (t) {
              return function () {
                return t;
              };
            })(n)
        : ((n = a.length),
          function (t) {
            for (var e, r = 0; r < n; ++r) c[(e = a[r]).i] = e.x(t);
            return c.join("");
          })
    );
  }
  function To(n, e) {
    var r,
      i = t(e);
    return null == e || "boolean" === i
      ? so(e)
      : ("number" === i
          ? bo
          : "string" === i
          ? (r = Qi(e))
            ? ((e = r), vo)
            : $o
          : e instanceof Qi
          ? vo
          : e instanceof Date
          ? mo
          : (function (t) {
              return ArrayBuffer.isView(t) && !(t instanceof DataView);
            })(e)
          ? yo
          : Array.isArray(e)
          ? go
          : ("function" != typeof e.valueOf &&
              "function" != typeof e.toString) ||
            isNaN(e)
          ? xo
          : bo)(n, e);
  }
  function Mo(t, n) {
    return (
      (t = +t),
      (n = +n),
      function (e) {
        return Math.round(t * (1 - e) + n * e);
      }
    );
  }
  function ko(t) {
    return +t;
  }
  var jo = [0, 1];
  function Co(t) {
    return t;
  }
  function Ao(t, n) {
    return (n -= t = +t)
      ? function (e) {
          return (e - t) / n;
        }
      : (function (t) {
          return function () {
            return t;
          };
        })(isNaN(n) ? NaN : 0.5);
  }
  function Lo(t, n, e) {
    var r = t[0],
      i = t[1],
      o = n[0],
      u = n[1];
    return (
      i < r ? ((r = Ao(i, r)), (o = e(u, o))) : ((r = Ao(r, i)), (o = e(o, u))),
      function (t) {
        return o(r(t));
      }
    );
  }
  function Oo(t, n, e) {
    var r = Math.min(t.length, n.length) - 1,
      i = new Array(r),
      o = new Array(r),
      u = -1;
    for (
      t[r] < t[0] && ((t = t.slice().reverse()), (n = n.slice().reverse()));
      ++u < r;

    )
      (i[u] = Ao(t[u], t[u + 1])), (o[u] = e(n[u], n[u + 1]));
    return function (n) {
      var e = Mi(t, n, 1, r) - 1;
      return o[e](i[e](n));
    };
  }
  function So(t, n) {
    return n
      .domain(t.domain())
      .range(t.range())
      .interpolate(t.interpolate())
      .clamp(t.clamp())
      .unknown(t.unknown());
  }
  function Eo() {
    var t,
      n,
      e,
      r,
      i,
      o,
      u = jo,
      c = jo,
      a = To,
      f = Co;
    function l() {
      var t,
        n,
        e,
        a = Math.min(u.length, c.length);
      return (
        f !== Co &&
          ((t = u[0]),
          (n = u[a - 1]),
          t > n && ((e = t), (t = n), (n = e)),
          (f = function (e) {
            return Math.max(t, Math.min(n, e));
          })),
        (r = a > 2 ? Oo : Lo),
        (i = o = null),
        s
      );
    }
    function s(n) {
      return isNaN((n = +n)) ? e : (i || (i = r(u.map(t), c, a)))(t(f(n)));
    }
    return (
      (s.invert = function (e) {
        return f(n((o || (o = r(c, u.map(t), bo)))(e)));
      }),
      (s.domain = function (t) {
        return arguments.length ? ((u = Array.from(t, ko)), l()) : u.slice();
      }),
      (s.range = function (t) {
        return arguments.length ? ((c = Array.from(t)), l()) : c.slice();
      }),
      (s.rangeRound = function (t) {
        return (c = Array.from(t)), (a = Mo), l();
      }),
      (s.clamp = function (t) {
        return arguments.length ? ((f = !!t || Co), l()) : f !== Co;
      }),
      (s.interpolate = function (t) {
        return arguments.length ? ((a = t), l()) : a;
      }),
      (s.unknown = function (t) {
        return arguments.length ? ((e = t), s) : e;
      }),
      function (e, r) {
        return (t = e), (n = r), l();
      }
    );
  }
  function Do() {
    return Eo()(Co, Co);
  }
  function Ro(t, n) {
    if (
      (e = (t = n ? t.toExponential(n - 1) : t.toExponential()).indexOf("e")) <
      0
    )
      return null;
    var e,
      r = t.slice(0, e);
    return [r.length > 1 ? r[0] + r.slice(2) : r, +t.slice(e + 1)];
  }
  function No(t) {
    return (t = Ro(Math.abs(t))) ? t[1] : NaN;
  }
  var Po,
    Uo = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
  function Fo(t) {
    if (!(n = Uo.exec(t))) throw new Error("invalid format: " + t);
    var n;
    return new Ho({
      fill: n[1],
      align: n[2],
      sign: n[3],
      symbol: n[4],
      zero: n[5],
      width: n[6],
      comma: n[7],
      precision: n[8] && n[8].slice(1),
      trim: n[9],
      type: n[10],
    });
  }
  function Ho(t) {
    (this.fill = void 0 === t.fill ? " " : t.fill + ""),
      (this.align = void 0 === t.align ? ">" : t.align + ""),
      (this.sign = void 0 === t.sign ? "-" : t.sign + ""),
      (this.symbol = void 0 === t.symbol ? "" : t.symbol + ""),
      (this.zero = !!t.zero),
      (this.width = void 0 === t.width ? void 0 : +t.width),
      (this.comma = !!t.comma),
      (this.precision = void 0 === t.precision ? void 0 : +t.precision),
      (this.trim = !!t.trim),
      (this.type = void 0 === t.type ? "" : t.type + "");
  }
  function zo(t, n) {
    var e = Ro(t, n);
    if (!e) return t + "";
    var r = e[0],
      i = e[1];
    return i < 0
      ? "0." + new Array(-i).join("0") + r
      : r.length > i + 1
      ? r.slice(0, i + 1) + "." + r.slice(i + 1)
      : r + new Array(i - r.length + 2).join("0");
  }
  (Fo.prototype = Ho.prototype),
    (Ho.prototype.toString = function () {
      return (
        this.fill +
        this.align +
        this.sign +
        this.symbol +
        (this.zero ? "0" : "") +
        (void 0 === this.width ? "" : Math.max(1, 0 | this.width)) +
        (this.comma ? "," : "") +
        (void 0 === this.precision
          ? ""
          : "." + Math.max(0, 0 | this.precision)) +
        (this.trim ? "~" : "") +
        this.type
      );
    });
  var Bo = {
    "%": function (t, n) {
      return (100 * t).toFixed(n);
    },
    b: function (t) {
      return Math.round(t).toString(2);
    },
    c: function (t) {
      return t + "";
    },
    d: function (t) {
      return Math.abs((t = Math.round(t))) >= 1e21
        ? t.toLocaleString("en").replace(/,/g, "")
        : t.toString(10);
    },
    e: function (t, n) {
      return t.toExponential(n);
    },
    f: function (t, n) {
      return t.toFixed(n);
    },
    g: function (t, n) {
      return t.toPrecision(n);
    },
    o: function (t) {
      return Math.round(t).toString(8);
    },
    p: function (t, n) {
      return zo(100 * t, n);
    },
    r: zo,
    s: function (t, n) {
      var e = Ro(t, n);
      if (!e) return t + "";
      var r = e[0],
        i = e[1],
        o = i - (Po = 3 * Math.max(-8, Math.min(8, Math.floor(i / 3)))) + 1,
        u = r.length;
      return o === u
        ? r
        : o > u
        ? r + new Array(o - u + 1).join("0")
        : o > 0
        ? r.slice(0, o) + "." + r.slice(o)
        : "0." + new Array(1 - o).join("0") + Ro(t, Math.max(0, n + o - 1))[0];
    },
    X: function (t) {
      return Math.round(t).toString(16).toUpperCase();
    },
    x: function (t) {
      return Math.round(t).toString(16);
    },
  };
  function Io(t) {
    return t;
  }
  var Yo,
    qo,
    Wo,
    Zo = Array.prototype.map,
    Vo = [
      "y",
      "z",
      "a",
      "f",
      "p",
      "n",
      "µ",
      "m",
      "",
      "k",
      "M",
      "G",
      "T",
      "P",
      "E",
      "Z",
      "Y",
    ];
  function Go(t) {
    var n,
      e,
      r =
        void 0 === t.grouping || void 0 === t.thousands
          ? Io
          : ((n = Zo.call(t.grouping, Number)),
            (e = t.thousands + ""),
            function (t, r) {
              for (
                var i = t.length, o = [], u = 0, c = n[0], a = 0;
                i > 0 &&
                c > 0 &&
                (a + c + 1 > r && (c = Math.max(1, r - a)),
                o.push(t.substring((i -= c), i + c)),
                !((a += c + 1) > r));

              )
                c = n[(u = (u + 1) % n.length)];
              return o.reverse().join(e);
            }),
      i = void 0 === t.currency ? "" : t.currency[0] + "",
      o = void 0 === t.currency ? "" : t.currency[1] + "",
      u = void 0 === t.decimal ? "." : t.decimal + "",
      c =
        void 0 === t.numerals
          ? Io
          : (function (t) {
              return function (n) {
                return n.replace(/[0-9]/g, function (n) {
                  return t[+n];
                });
              };
            })(Zo.call(t.numerals, String)),
      a = void 0 === t.percent ? "%" : t.percent + "",
      f = void 0 === t.minus ? "−" : t.minus + "",
      l = void 0 === t.nan ? "NaN" : t.nan + "";
    function s(t) {
      var n = (t = Fo(t)).fill,
        e = t.align,
        s = t.sign,
        h = t.symbol,
        d = t.zero,
        p = t.width,
        v = t.comma,
        y = t.precision,
        g = t.trim,
        m = t.type;
      "n" === m
        ? ((v = !0), (m = "g"))
        : Bo[m] || (void 0 === y && (y = 12), (g = !0), (m = "g")),
        (d || ("0" === n && "=" === e)) && ((d = !0), (n = "0"), (e = "="));
      var b =
          "$" === h
            ? i
            : "#" === h && /[boxX]/.test(m)
            ? "0" + m.toLowerCase()
            : "",
        x = "$" === h ? o : /[%p]/.test(m) ? a : "",
        w = Bo[m],
        _ = /[defgprs%]/.test(m);
      function $(t) {
        var i,
          o,
          a,
          h = b,
          $ = x;
        if ("c" === m) ($ = w(t) + $), (t = "");
        else {
          var T = (t = +t) < 0 || 1 / t < 0;
          if (
            ((t = isNaN(t) ? l : w(Math.abs(t), y)),
            g &&
              (t = (function (t) {
                t: for (var n, e = t.length, r = 1, i = -1; r < e; ++r)
                  switch (t[r]) {
                    case ".":
                      i = n = r;
                      break;
                    case "0":
                      0 === i && (i = r), (n = r);
                      break;
                    default:
                      if (!+t[r]) break t;
                      i > 0 && (i = 0);
                  }
                return i > 0 ? t.slice(0, i) + t.slice(n + 1) : t;
              })(t)),
            T && 0 == +t && "+" !== s && (T = !1),
            (h =
              (T ? ("(" === s ? s : f) : "-" === s || "(" === s ? "" : s) + h),
            ($ =
              ("s" === m ? Vo[8 + Po / 3] : "") +
              $ +
              (T && "(" === s ? ")" : "")),
            _)
          )
            for (i = -1, o = t.length; ++i < o; )
              if (48 > (a = t.charCodeAt(i)) || a > 57) {
                ($ = (46 === a ? u + t.slice(i + 1) : t.slice(i)) + $),
                  (t = t.slice(0, i));
                break;
              }
        }
        v && !d && (t = r(t, 1 / 0));
        var M = h.length + t.length + $.length,
          k = M < p ? new Array(p - M + 1).join(n) : "";
        switch (
          (v &&
            d &&
            ((t = r(k + t, k.length ? p - $.length : 1 / 0)), (k = "")),
          e)
        ) {
          case "<":
            t = h + t + $ + k;
            break;
          case "=":
            t = h + k + t + $;
            break;
          case "^":
            t = k.slice(0, (M = k.length >> 1)) + h + t + $ + k.slice(M);
            break;
          default:
            t = k + h + t + $;
        }
        return c(t);
      }
      return (
        (y =
          void 0 === y
            ? 6
            : /[gprs]/.test(m)
            ? Math.max(1, Math.min(21, y))
            : Math.max(0, Math.min(20, y))),
        ($.toString = function () {
          return t + "";
        }),
        $
      );
    }
    return {
      format: s,
      formatPrefix: function (t, n) {
        var e = s((((t = Fo(t)).type = "f"), t)),
          r = 3 * Math.max(-8, Math.min(8, Math.floor(No(n) / 3))),
          i = Math.pow(10, -r),
          o = Vo[8 + r / 3];
        return function (t) {
          return e(i * t) + o;
        };
      },
    };
  }
  function Xo(t, n, e, r) {
    var i,
      o = Si(t, n, e);
    switch ((r = Fo(null == r ? ",f" : r)).type) {
      case "s":
        var u = Math.max(Math.abs(t), Math.abs(n));
        return (
          null != r.precision ||
            isNaN(
              (i = (function (t, n) {
                return Math.max(
                  0,
                  3 * Math.max(-8, Math.min(8, Math.floor(No(n) / 3))) -
                    No(Math.abs(t))
                );
              })(o, u))
            ) ||
            (r.precision = i),
          Wo(r, u)
        );
      case "":
      case "e":
      case "g":
      case "p":
      case "r":
        null != r.precision ||
          isNaN(
            (i = (function (t, n) {
              return (
                (t = Math.abs(t)),
                (n = Math.abs(n) - t),
                Math.max(0, No(n) - No(t)) + 1
              );
            })(o, Math.max(Math.abs(t), Math.abs(n))))
          ) ||
          (r.precision = i - ("e" === r.type));
        break;
      case "f":
      case "%":
        null != r.precision ||
          isNaN(
            (i = (function (t) {
              return Math.max(0, -No(Math.abs(t)));
            })(o))
          ) ||
          (r.precision = i - 2 * ("%" === r.type));
    }
    return qo(r);
  }
  function Jo(t) {
    var n = t.domain;
    return (
      (t.ticks = function (t) {
        var e = n();
        return (function (t, n, e) {
          var r,
            i,
            o,
            u,
            c = -1;
          if (((e = +e), (t = +t) == (n = +n) && e > 0)) return [t];
          if (
            ((r = n < t) && ((i = t), (t = n), (n = i)),
            0 === (u = Oi(t, n, e)) || !isFinite(u))
          )
            return [];
          if (u > 0)
            for (
              t = Math.ceil(t / u),
                n = Math.floor(n / u),
                o = new Array((i = Math.ceil(n - t + 1)));
              ++c < i;

            )
              o[c] = (t + c) * u;
          else
            for (
              u = -u,
                t = Math.ceil(t * u),
                n = Math.floor(n * u),
                o = new Array((i = Math.ceil(n - t + 1)));
              ++c < i;

            )
              o[c] = (t + c) / u;
          return r && o.reverse(), o;
        })(e[0], e[e.length - 1], null == t ? 10 : t);
      }),
      (t.tickFormat = function (t, e) {
        var r = n();
        return Xo(r[0], r[r.length - 1], null == t ? 10 : t, e);
      }),
      (t.nice = function (e) {
        null == e && (e = 10);
        var r,
          i,
          o = n(),
          u = 0,
          c = o.length - 1,
          a = o[u],
          f = o[c],
          l = 10;
        for (
          f < a && ((i = a), (a = f), (f = i), (i = u), (u = c), (c = i));
          l-- > 0;

        ) {
          if ((i = Oi(a, f, e)) === r) return (o[u] = a), (o[c] = f), n(o);
          if (i > 0) (a = Math.floor(a / i) * i), (f = Math.ceil(f / i) * i);
          else {
            if (!(i < 0)) break;
            (a = Math.ceil(a * i) / i), (f = Math.floor(f * i) / i);
          }
          r = i;
        }
        return t;
      }),
      t
    );
  }
  function Qo() {
    var t = Do();
    return (
      (t.copy = function () {
        return So(t, Qo());
      }),
      Ei.apply(t, arguments),
      Jo(t)
    );
  }
  function Ko(t) {
    return function (n) {
      return n < 0 ? -Math.pow(-n, t) : Math.pow(n, t);
    };
  }
  function tu(t) {
    return t < 0 ? -Math.sqrt(-t) : Math.sqrt(t);
  }
  function nu(t) {
    return t < 0 ? -t * t : t * t;
  }
  function eu(t) {
    var n = t(Co, Co),
      e = 1;
    function r() {
      return 1 === e ? t(Co, Co) : 0.5 === e ? t(tu, nu) : t(Ko(e), Ko(1 / e));
    }
    return (
      (n.exponent = function (t) {
        return arguments.length ? ((e = +t), r()) : e;
      }),
      Jo(n)
    );
  }
  function ru() {
    var t = eu(Eo());
    return (
      (t.copy = function () {
        return So(t, ru()).exponent(t.exponent());
      }),
      Ei.apply(t, arguments),
      t
    );
  }
  (Yo = Go({ thousands: ",", grouping: [3], currency: ["$", ""] })),
    (qo = Yo.format),
    (Wo = Yo.formatPrefix);
  var iu = new Date(),
    ou = new Date();
  function uu(t, n, e, r) {
    function i(n) {
      return t((n = 0 === arguments.length ? new Date() : new Date(+n))), n;
    }
    return (
      (i.floor = function (n) {
        return t((n = new Date(+n))), n;
      }),
      (i.ceil = function (e) {
        return t((e = new Date(e - 1))), n(e, 1), t(e), e;
      }),
      (i.round = function (t) {
        var n = i(t),
          e = i.ceil(t);
        return t - n < e - t ? n : e;
      }),
      (i.offset = function (t, e) {
        return n((t = new Date(+t)), null == e ? 1 : Math.floor(e)), t;
      }),
      (i.range = function (e, r, o) {
        var u,
          c = [];
        if (
          ((e = i.ceil(e)),
          (o = null == o ? 1 : Math.floor(o)),
          !(e < r && o > 0))
        )
          return c;
        do {
          c.push((u = new Date(+e))), n(e, o), t(e);
        } while (u < e && e < r);
        return c;
      }),
      (i.filter = function (e) {
        return uu(
          function (n) {
            if (n >= n) for (; t(n), !e(n); ) n.setTime(n - 1);
          },
          function (t, r) {
            if (t >= t)
              if (r < 0) for (; ++r <= 0; ) for (; n(t, -1), !e(t); );
              else for (; --r >= 0; ) for (; n(t, 1), !e(t); );
          }
        );
      }),
      e &&
        ((i.count = function (n, r) {
          return (
            iu.setTime(+n), ou.setTime(+r), t(iu), t(ou), Math.floor(e(iu, ou))
          );
        }),
        (i.every = function (t) {
          return (
            (t = Math.floor(t)),
            isFinite(t) && t > 0
              ? t > 1
                ? i.filter(
                    r
                      ? function (n) {
                          return r(n) % t == 0;
                        }
                      : function (n) {
                          return i.count(0, n) % t == 0;
                        }
                  )
                : i
              : null
          );
        })),
      i
    );
  }
  var cu = uu(
    function () {},
    function (t, n) {
      t.setTime(+t + n);
    },
    function (t, n) {
      return n - t;
    }
  );
  cu.every = function (t) {
    return (
      (t = Math.floor(t)),
      isFinite(t) && t > 0
        ? t > 1
          ? uu(
              function (n) {
                n.setTime(Math.floor(n / t) * t);
              },
              function (n, e) {
                n.setTime(+n + e * t);
              },
              function (n, e) {
                return (e - n) / t;
              }
            )
          : cu
        : null
    );
  };
  var au = 1e3,
    fu = 6e4,
    lu = 36e5,
    su = 864e5,
    hu = 6048e5,
    du = uu(
      function (t) {
        t.setTime(t - t.getMilliseconds());
      },
      function (t, n) {
        t.setTime(+t + n * au);
      },
      function (t, n) {
        return (n - t) / au;
      },
      function (t) {
        return t.getUTCSeconds();
      }
    ),
    pu = uu(
      function (t) {
        t.setTime(t - t.getMilliseconds() - t.getSeconds() * au);
      },
      function (t, n) {
        t.setTime(+t + n * fu);
      },
      function (t, n) {
        return (n - t) / fu;
      },
      function (t) {
        return t.getMinutes();
      }
    ),
    vu = uu(
      function (t) {
        t.setTime(
          t - t.getMilliseconds() - t.getSeconds() * au - t.getMinutes() * fu
        );
      },
      function (t, n) {
        t.setTime(+t + n * lu);
      },
      function (t, n) {
        return (n - t) / lu;
      },
      function (t) {
        return t.getHours();
      }
    ),
    yu = uu(
      function (t) {
        return t.setHours(0, 0, 0, 0);
      },
      function (t, n) {
        return t.setDate(t.getDate() + n);
      },
      function (t, n) {
        return (
          (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * fu) / su
        );
      },
      function (t) {
        return t.getDate() - 1;
      }
    );
  function gu(t) {
    return uu(
      function (n) {
        n.setDate(n.getDate() - ((n.getDay() + 7 - t) % 7)),
          n.setHours(0, 0, 0, 0);
      },
      function (t, n) {
        t.setDate(t.getDate() + 7 * n);
      },
      function (t, n) {
        return (
          (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * fu) / hu
        );
      }
    );
  }
  var mu = gu(0),
    bu = gu(1);
  gu(2), gu(3);
  var xu = gu(4);
  gu(5), gu(6);
  var wu = uu(
      function (t) {
        t.setDate(1), t.setHours(0, 0, 0, 0);
      },
      function (t, n) {
        t.setMonth(t.getMonth() + n);
      },
      function (t, n) {
        return (
          n.getMonth() - t.getMonth() + 12 * (n.getFullYear() - t.getFullYear())
        );
      },
      function (t) {
        return t.getMonth();
      }
    ),
    _u = uu(
      function (t) {
        t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
      },
      function (t, n) {
        t.setFullYear(t.getFullYear() + n);
      },
      function (t, n) {
        return n.getFullYear() - t.getFullYear();
      },
      function (t) {
        return t.getFullYear();
      }
    );
  _u.every = function (t) {
    return isFinite((t = Math.floor(t))) && t > 0
      ? uu(
          function (n) {
            n.setFullYear(Math.floor(n.getFullYear() / t) * t),
              n.setMonth(0, 1),
              n.setHours(0, 0, 0, 0);
          },
          function (n, e) {
            n.setFullYear(n.getFullYear() + e * t);
          }
        )
      : null;
  };
  var $u = uu(
    function (t) {
      t.setUTCHours(0, 0, 0, 0);
    },
    function (t, n) {
      t.setUTCDate(t.getUTCDate() + n);
    },
    function (t, n) {
      return (n - t) / su;
    },
    function (t) {
      return t.getUTCDate() - 1;
    }
  );
  function Tu(t) {
    return uu(
      function (n) {
        n.setUTCDate(n.getUTCDate() - ((n.getUTCDay() + 7 - t) % 7)),
          n.setUTCHours(0, 0, 0, 0);
      },
      function (t, n) {
        t.setUTCDate(t.getUTCDate() + 7 * n);
      },
      function (t, n) {
        return (n - t) / hu;
      }
    );
  }
  var Mu = Tu(0),
    ku = Tu(1);
  Tu(2), Tu(3);
  var ju = Tu(4);
  Tu(5), Tu(6);
  var Cu = uu(
    function (t) {
      t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
    },
    function (t, n) {
      t.setUTCFullYear(t.getUTCFullYear() + n);
    },
    function (t, n) {
      return n.getUTCFullYear() - t.getUTCFullYear();
    },
    function (t) {
      return t.getUTCFullYear();
    }
  );
  function Au(t) {
    if (0 <= t.y && t.y < 100) {
      var n = new Date(-1, t.m, t.d, t.H, t.M, t.S, t.L);
      return n.setFullYear(t.y), n;
    }
    return new Date(t.y, t.m, t.d, t.H, t.M, t.S, t.L);
  }
  function Lu(t) {
    if (0 <= t.y && t.y < 100) {
      var n = new Date(Date.UTC(-1, t.m, t.d, t.H, t.M, t.S, t.L));
      return n.setUTCFullYear(t.y), n;
    }
    return new Date(Date.UTC(t.y, t.m, t.d, t.H, t.M, t.S, t.L));
  }
  function Ou(t, n, e) {
    return { y: t, m: n, d: e, H: 0, M: 0, S: 0, L: 0 };
  }
  Cu.every = function (t) {
    return isFinite((t = Math.floor(t))) && t > 0
      ? uu(
          function (n) {
            n.setUTCFullYear(Math.floor(n.getUTCFullYear() / t) * t),
              n.setUTCMonth(0, 1),
              n.setUTCHours(0, 0, 0, 0);
          },
          function (n, e) {
            n.setUTCFullYear(n.getUTCFullYear() + e * t);
          }
        )
      : null;
  };
  var Su,
    Eu,
    Du = { "-": "", _: " ", 0: "0" },
    Ru = /^\s*\d+/,
    Nu = /^%/,
    Pu = /[\\^$*+?|[\]().{}]/g;
  function Uu(t, n, e) {
    var r = t < 0 ? "-" : "",
      i = (r ? -t : t) + "",
      o = i.length;
    return r + (o < e ? new Array(e - o + 1).join(n) + i : i);
  }
  function Fu(t) {
    return t.replace(Pu, "\\$&");
  }
  function Hu(t) {
    return new RegExp("^(?:" + t.map(Fu).join("|") + ")", "i");
  }
  function zu(t) {
    return new Map(
      t.map(function (t, n) {
        return [t.toLowerCase(), n];
      })
    );
  }
  function Bu(t, n, e) {
    var r = Ru.exec(n.slice(e, e + 1));
    return r ? ((t.w = +r[0]), e + r[0].length) : -1;
  }
  function Iu(t, n, e) {
    var r = Ru.exec(n.slice(e, e + 1));
    return r ? ((t.u = +r[0]), e + r[0].length) : -1;
  }
  function Yu(t, n, e) {
    var r = Ru.exec(n.slice(e, e + 2));
    return r ? ((t.U = +r[0]), e + r[0].length) : -1;
  }
  function qu(t, n, e) {
    var r = Ru.exec(n.slice(e, e + 2));
    return r ? ((t.V = +r[0]), e + r[0].length) : -1;
  }
  function Wu(t, n, e) {
    var r = Ru.exec(n.slice(e, e + 2));
    return r ? ((t.W = +r[0]), e + r[0].length) : -1;
  }
  function Zu(t, n, e) {
    var r = Ru.exec(n.slice(e, e + 4));
    return r ? ((t.y = +r[0]), e + r[0].length) : -1;
  }
  function Vu(t, n, e) {
    var r = Ru.exec(n.slice(e, e + 2));
    return r
      ? ((t.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3)), e + r[0].length)
      : -1;
  }
  function Gu(t, n, e) {
    var r = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(n.slice(e, e + 6));
    return r
      ? ((t.Z = r[1] ? 0 : -(r[2] + (r[3] || "00"))), e + r[0].length)
      : -1;
  }
  function Xu(t, n, e) {
    var r = Ru.exec(n.slice(e, e + 1));
    return r ? ((t.q = 3 * r[0] - 3), e + r[0].length) : -1;
  }
  function Ju(t, n, e) {
    var r = Ru.exec(n.slice(e, e + 2));
    return r ? ((t.m = r[0] - 1), e + r[0].length) : -1;
  }
  function Qu(t, n, e) {
    var r = Ru.exec(n.slice(e, e + 2));
    return r ? ((t.d = +r[0]), e + r[0].length) : -1;
  }
  function Ku(t, n, e) {
    var r = Ru.exec(n.slice(e, e + 3));
    return r ? ((t.m = 0), (t.d = +r[0]), e + r[0].length) : -1;
  }
  function tc(t, n, e) {
    var r = Ru.exec(n.slice(e, e + 2));
    return r ? ((t.H = +r[0]), e + r[0].length) : -1;
  }
  function nc(t, n, e) {
    var r = Ru.exec(n.slice(e, e + 2));
    return r ? ((t.M = +r[0]), e + r[0].length) : -1;
  }
  function ec(t, n, e) {
    var r = Ru.exec(n.slice(e, e + 2));
    return r ? ((t.S = +r[0]), e + r[0].length) : -1;
  }
  function rc(t, n, e) {
    var r = Ru.exec(n.slice(e, e + 3));
    return r ? ((t.L = +r[0]), e + r[0].length) : -1;
  }
  function ic(t, n, e) {
    var r = Ru.exec(n.slice(e, e + 6));
    return r ? ((t.L = Math.floor(r[0] / 1e3)), e + r[0].length) : -1;
  }
  function oc(t, n, e) {
    var r = Nu.exec(n.slice(e, e + 1));
    return r ? e + r[0].length : -1;
  }
  function uc(t, n, e) {
    var r = Ru.exec(n.slice(e));
    return r ? ((t.Q = +r[0]), e + r[0].length) : -1;
  }
  function cc(t, n, e) {
    var r = Ru.exec(n.slice(e));
    return r ? ((t.s = +r[0]), e + r[0].length) : -1;
  }
  function ac(t, n) {
    return Uu(t.getDate(), n, 2);
  }
  function fc(t, n) {
    return Uu(t.getHours(), n, 2);
  }
  function lc(t, n) {
    return Uu(t.getHours() % 12 || 12, n, 2);
  }
  function sc(t, n) {
    return Uu(1 + yu.count(_u(t), t), n, 3);
  }
  function hc(t, n) {
    return Uu(t.getMilliseconds(), n, 3);
  }
  function dc(t, n) {
    return hc(t, n) + "000";
  }
  function pc(t, n) {
    return Uu(t.getMonth() + 1, n, 2);
  }
  function vc(t, n) {
    return Uu(t.getMinutes(), n, 2);
  }
  function yc(t, n) {
    return Uu(t.getSeconds(), n, 2);
  }
  function gc(t) {
    var n = t.getDay();
    return 0 === n ? 7 : n;
  }
  function mc(t, n) {
    return Uu(mu.count(_u(t) - 1, t), n, 2);
  }
  function bc(t) {
    var n = t.getDay();
    return n >= 4 || 0 === n ? xu(t) : xu.ceil(t);
  }
  function xc(t, n) {
    return (t = bc(t)), Uu(xu.count(_u(t), t) + (4 === _u(t).getDay()), n, 2);
  }
  function wc(t) {
    return t.getDay();
  }
  function _c(t, n) {
    return Uu(bu.count(_u(t) - 1, t), n, 2);
  }
  function $c(t, n) {
    return Uu(t.getFullYear() % 100, n, 2);
  }
  function Tc(t, n) {
    return Uu((t = bc(t)).getFullYear() % 100, n, 2);
  }
  function Mc(t, n) {
    return Uu(t.getFullYear() % 1e4, n, 4);
  }
  function kc(t, n) {
    var e = t.getDay();
    return Uu(
      (t = e >= 4 || 0 === e ? xu(t) : xu.ceil(t)).getFullYear() % 1e4,
      n,
      4
    );
  }
  function jc(t) {
    var n = t.getTimezoneOffset();
    return (
      (n > 0 ? "-" : ((n *= -1), "+")) +
      Uu((n / 60) | 0, "0", 2) +
      Uu(n % 60, "0", 2)
    );
  }
  function Cc(t, n) {
    return Uu(t.getUTCDate(), n, 2);
  }
  function Ac(t, n) {
    return Uu(t.getUTCHours(), n, 2);
  }
  function Lc(t, n) {
    return Uu(t.getUTCHours() % 12 || 12, n, 2);
  }
  function Oc(t, n) {
    return Uu(1 + $u.count(Cu(t), t), n, 3);
  }
  function Sc(t, n) {
    return Uu(t.getUTCMilliseconds(), n, 3);
  }
  function Ec(t, n) {
    return Sc(t, n) + "000";
  }
  function Dc(t, n) {
    return Uu(t.getUTCMonth() + 1, n, 2);
  }
  function Rc(t, n) {
    return Uu(t.getUTCMinutes(), n, 2);
  }
  function Nc(t, n) {
    return Uu(t.getUTCSeconds(), n, 2);
  }
  function Pc(t) {
    var n = t.getUTCDay();
    return 0 === n ? 7 : n;
  }
  function Uc(t, n) {
    return Uu(Mu.count(Cu(t) - 1, t), n, 2);
  }
  function Fc(t) {
    var n = t.getUTCDay();
    return n >= 4 || 0 === n ? ju(t) : ju.ceil(t);
  }
  function Hc(t, n) {
    return (
      (t = Fc(t)), Uu(ju.count(Cu(t), t) + (4 === Cu(t).getUTCDay()), n, 2)
    );
  }
  function zc(t) {
    return t.getUTCDay();
  }
  function Bc(t, n) {
    return Uu(ku.count(Cu(t) - 1, t), n, 2);
  }
  function Ic(t, n) {
    return Uu(t.getUTCFullYear() % 100, n, 2);
  }
  function Yc(t, n) {
    return Uu((t = Fc(t)).getUTCFullYear() % 100, n, 2);
  }
  function qc(t, n) {
    return Uu(t.getUTCFullYear() % 1e4, n, 4);
  }
  function Wc(t, n) {
    var e = t.getUTCDay();
    return Uu(
      (t = e >= 4 || 0 === e ? ju(t) : ju.ceil(t)).getUTCFullYear() % 1e4,
      n,
      4
    );
  }
  function Zc() {
    return "+0000";
  }
  function Vc() {
    return "%";
  }
  function Gc(t) {
    return +t;
  }
  function Xc(t) {
    return Math.floor(+t / 1e3);
  }
  !(function (t) {
    (Su = (function (t) {
      var n = t.dateTime,
        e = t.date,
        r = t.time,
        i = t.periods,
        o = t.days,
        u = t.shortDays,
        c = t.months,
        a = t.shortMonths,
        f = Hu(i),
        l = zu(i),
        s = Hu(o),
        h = zu(o),
        d = Hu(u),
        p = zu(u),
        v = Hu(c),
        y = zu(c),
        g = Hu(a),
        m = zu(a),
        b = {
          a: function (t) {
            return u[t.getDay()];
          },
          A: function (t) {
            return o[t.getDay()];
          },
          b: function (t) {
            return a[t.getMonth()];
          },
          B: function (t) {
            return c[t.getMonth()];
          },
          c: null,
          d: ac,
          e: ac,
          f: dc,
          g: Tc,
          G: kc,
          H: fc,
          I: lc,
          j: sc,
          L: hc,
          m: pc,
          M: vc,
          p: function (t) {
            return i[+(t.getHours() >= 12)];
          },
          q: function (t) {
            return 1 + ~~(t.getMonth() / 3);
          },
          Q: Gc,
          s: Xc,
          S: yc,
          u: gc,
          U: mc,
          V: xc,
          w: wc,
          W: _c,
          x: null,
          X: null,
          y: $c,
          Y: Mc,
          Z: jc,
          "%": Vc,
        },
        x = {
          a: function (t) {
            return u[t.getUTCDay()];
          },
          A: function (t) {
            return o[t.getUTCDay()];
          },
          b: function (t) {
            return a[t.getUTCMonth()];
          },
          B: function (t) {
            return c[t.getUTCMonth()];
          },
          c: null,
          d: Cc,
          e: Cc,
          f: Ec,
          g: Yc,
          G: Wc,
          H: Ac,
          I: Lc,
          j: Oc,
          L: Sc,
          m: Dc,
          M: Rc,
          p: function (t) {
            return i[+(t.getUTCHours() >= 12)];
          },
          q: function (t) {
            return 1 + ~~(t.getUTCMonth() / 3);
          },
          Q: Gc,
          s: Xc,
          S: Nc,
          u: Pc,
          U: Uc,
          V: Hc,
          w: zc,
          W: Bc,
          x: null,
          X: null,
          y: Ic,
          Y: qc,
          Z: Zc,
          "%": Vc,
        },
        w = {
          a: function (t, n, e) {
            var r = d.exec(n.slice(e));
            return r
              ? ((t.w = p.get(r[0].toLowerCase())), e + r[0].length)
              : -1;
          },
          A: function (t, n, e) {
            var r = s.exec(n.slice(e));
            return r
              ? ((t.w = h.get(r[0].toLowerCase())), e + r[0].length)
              : -1;
          },
          b: function (t, n, e) {
            var r = g.exec(n.slice(e));
            return r
              ? ((t.m = m.get(r[0].toLowerCase())), e + r[0].length)
              : -1;
          },
          B: function (t, n, e) {
            var r = v.exec(n.slice(e));
            return r
              ? ((t.m = y.get(r[0].toLowerCase())), e + r[0].length)
              : -1;
          },
          c: function (t, e, r) {
            return T(t, n, e, r);
          },
          d: Qu,
          e: Qu,
          f: ic,
          g: Vu,
          G: Zu,
          H: tc,
          I: tc,
          j: Ku,
          L: rc,
          m: Ju,
          M: nc,
          p: function (t, n, e) {
            var r = f.exec(n.slice(e));
            return r
              ? ((t.p = l.get(r[0].toLowerCase())), e + r[0].length)
              : -1;
          },
          q: Xu,
          Q: uc,
          s: cc,
          S: ec,
          u: Iu,
          U: Yu,
          V: qu,
          w: Bu,
          W: Wu,
          x: function (t, n, r) {
            return T(t, e, n, r);
          },
          X: function (t, n, e) {
            return T(t, r, n, e);
          },
          y: Vu,
          Y: Zu,
          Z: Gu,
          "%": oc,
        };
      function _(t, n) {
        return function (e) {
          var r,
            i,
            o,
            u = [],
            c = -1,
            a = 0,
            f = t.length;
          for (e instanceof Date || (e = new Date(+e)); ++c < f; )
            37 === t.charCodeAt(c) &&
              (u.push(t.slice(a, c)),
              null != (i = Du[(r = t.charAt(++c))])
                ? (r = t.charAt(++c))
                : (i = "e" === r ? " " : "0"),
              (o = n[r]) && (r = o(e, i)),
              u.push(r),
              (a = c + 1));
          return u.push(t.slice(a, c)), u.join("");
        };
      }
      function $(t, n) {
        return function (e) {
          var r,
            i,
            o = Ou(1900, void 0, 1);
          if (T(o, t, (e += ""), 0) != e.length) return null;
          if ("Q" in o) return new Date(o.Q);
          if ("s" in o) return new Date(1e3 * o.s + ("L" in o ? o.L : 0));
          if (
            (n && !("Z" in o) && (o.Z = 0),
            "p" in o && (o.H = (o.H % 12) + 12 * o.p),
            void 0 === o.m && (o.m = "q" in o ? o.q : 0),
            "V" in o)
          ) {
            if (o.V < 1 || o.V > 53) return null;
            "w" in o || (o.w = 1),
              "Z" in o
                ? ((i = (r = Lu(Ou(o.y, 0, 1))).getUTCDay()),
                  (r = i > 4 || 0 === i ? ku.ceil(r) : ku(r)),
                  (r = $u.offset(r, 7 * (o.V - 1))),
                  (o.y = r.getUTCFullYear()),
                  (o.m = r.getUTCMonth()),
                  (o.d = r.getUTCDate() + ((o.w + 6) % 7)))
                : ((i = (r = Au(Ou(o.y, 0, 1))).getDay()),
                  (r = i > 4 || 0 === i ? bu.ceil(r) : bu(r)),
                  (r = yu.offset(r, 7 * (o.V - 1))),
                  (o.y = r.getFullYear()),
                  (o.m = r.getMonth()),
                  (o.d = r.getDate() + ((o.w + 6) % 7)));
          } else
            ("W" in o || "U" in o) &&
              ("w" in o || (o.w = "u" in o ? o.u % 7 : "W" in o ? 1 : 0),
              (i =
                "Z" in o
                  ? Lu(Ou(o.y, 0, 1)).getUTCDay()
                  : Au(Ou(o.y, 0, 1)).getDay()),
              (o.m = 0),
              (o.d =
                "W" in o
                  ? ((o.w + 6) % 7) + 7 * o.W - ((i + 5) % 7)
                  : o.w + 7 * o.U - ((i + 6) % 7)));
          return "Z" in o
            ? ((o.H += (o.Z / 100) | 0), (o.M += o.Z % 100), Lu(o))
            : Au(o);
        };
      }
      function T(t, n, e, r) {
        for (var i, o, u = 0, c = n.length, a = e.length; u < c; ) {
          if (r >= a) return -1;
          if (37 === (i = n.charCodeAt(u++))) {
            if (
              ((i = n.charAt(u++)),
              !(o = w[i in Du ? n.charAt(u++) : i]) || (r = o(t, e, r)) < 0)
            )
              return -1;
          } else if (i != e.charCodeAt(r++)) return -1;
        }
        return r;
      }
      return (
        (b.x = _(e, b)),
        (b.X = _(r, b)),
        (b.c = _(n, b)),
        (x.x = _(e, x)),
        (x.X = _(r, x)),
        (x.c = _(n, x)),
        {
          format: function (t) {
            var n = _((t += ""), b);
            return (
              (n.toString = function () {
                return t;
              }),
              n
            );
          },
          parse: function (t) {
            var n = $((t += ""), !1);
            return (
              (n.toString = function () {
                return t;
              }),
              n
            );
          },
          utcFormat: function (t) {
            var n = _((t += ""), x);
            return (
              (n.toString = function () {
                return t;
              }),
              n
            );
          },
          utcParse: function (t) {
            var n = $((t += ""), !0);
            return (
              (n.toString = function () {
                return t;
              }),
              n
            );
          },
        }
      );
    })(t)),
      (Eu = Su.format),
      Su.parse,
      Su.utcFormat,
      Su.utcParse;
  })({
    dateTime: "%x, %X",
    date: "%-m/%-d/%Y",
    time: "%-I:%M:%S %p",
    periods: ["AM", "PM"],
    days: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    months: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    shortMonths: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
  });
  var Jc = 1e3,
    Qc = 6e4,
    Kc = 36e5,
    ta = 864e5,
    na = 2592e6,
    ea = 31536e6;
  function ra(t) {
    return new Date(t);
  }
  function ia(t) {
    return t instanceof Date ? +t : +new Date(+t);
  }
  function oa(t, n, e, r, i, o, u, c, a) {
    var f = Do(),
      l = f.invert,
      s = f.domain,
      h = a(".%L"),
      d = a(":%S"),
      p = a("%I:%M"),
      v = a("%I %p"),
      y = a("%a %d"),
      g = a("%b %d"),
      m = a("%B"),
      b = a("%Y"),
      x = [
        [u, 1, Jc],
        [u, 5, 5e3],
        [u, 15, 15e3],
        [u, 30, 3e4],
        [o, 1, Qc],
        [o, 5, 3e5],
        [o, 15, 9e5],
        [o, 30, 18e5],
        [i, 1, Kc],
        [i, 3, 108e5],
        [i, 6, 216e5],
        [i, 12, 432e5],
        [r, 1, ta],
        [r, 2, 1728e5],
        [e, 1, 6048e5],
        [n, 1, na],
        [n, 3, 7776e6],
        [t, 1, ea],
      ];
    function w(c) {
      return (u(c) < c
        ? h
        : o(c) < c
        ? d
        : i(c) < c
        ? p
        : r(c) < c
        ? v
        : n(c) < c
        ? e(c) < c
          ? y
          : g
        : t(c) < c
        ? m
        : b)(c);
    }
    function _(n, e, r) {
      if ((null == n && (n = 10), "number" == typeof n)) {
        var i,
          o = Math.abs(r - e) / n,
          u = Ti(function (t) {
            return t[2];
          }).right(x, o);
        return (
          u === x.length
            ? ((i = Si(e / ea, r / ea, n)), (n = t))
            : u
            ? ((i = (u = x[o / x[u - 1][2] < x[u][2] / o ? u - 1 : u])[1]),
              (n = u[0]))
            : ((i = Math.max(Si(e, r, n), 1)), (n = c)),
          n.every(i)
        );
      }
      return n;
    }
    return (
      (f.invert = function (t) {
        return new Date(l(t));
      }),
      (f.domain = function (t) {
        return arguments.length ? s(Array.from(t, ia)) : s().map(ra);
      }),
      (f.ticks = function (t) {
        var n,
          e = s(),
          r = e[0],
          i = e[e.length - 1],
          o = i < r;
        return (
          o && ((n = r), (r = i), (i = n)),
          (n = (n = _(t, r, i)) ? n.range(r, i + 1) : []),
          o ? n.reverse() : n
        );
      }),
      (f.tickFormat = function (t, n) {
        return null == n ? w : a(n);
      }),
      (f.nice = function (t) {
        var n = s();
        return (t = _(t, n[0], n[n.length - 1]))
          ? s(
              (function (t, n) {
                var e,
                  r = 0,
                  i = (t = t.slice()).length - 1,
                  o = t[r],
                  u = t[i];
                return (
                  u < o &&
                    ((e = r), (r = i), (i = e), (e = o), (o = u), (u = e)),
                  (t[r] = n.floor(o)),
                  (t[i] = n.ceil(u)),
                  t
                );
              })(n, t)
            )
          : f;
      }),
      (f.copy = function () {
        return So(f, oa(t, n, e, r, i, o, u, c, a));
      }),
      f
    );
  }
  var ua = Math.PI,
    ca = 2 * ua,
    aa = 1e-6,
    fa = ca - aa;
  function la() {
    (this._x0 = this._y0 = this._x1 = this._y1 = null), (this._ = "");
  }
  function sa() {
    return new la();
  }
  function ha(t) {
    return function () {
      return t;
    };
  }
  function da(n) {
    return "object" === t(n) && "length" in n ? n : Array.from(n);
  }
  function pa(t) {
    this._context = t;
  }
  function va(t) {
    return new pa(t);
  }
  function ya(t) {
    return t[0];
  }
  function ga(t) {
    return t[1];
  }
  function ma(t, n) {
    var e = ha(!0),
      r = null,
      i = va,
      o = null;
    function u(u) {
      var c,
        a,
        f,
        l = (u = da(u)).length,
        s = !1;
      for (null == r && (o = i((f = sa()))), c = 0; c <= l; ++c)
        !(c < l && e((a = u[c]), c, u)) === s &&
          ((s = !s) ? o.lineStart() : o.lineEnd()),
          s && o.point(+t(a, c, u), +n(a, c, u));
      if (f) return (o = null), f + "" || null;
    }
    return (
      (t = "function" == typeof t ? t : void 0 === t ? ya : ha(t)),
      (n = "function" == typeof n ? n : void 0 === n ? ga : ha(n)),
      (u.x = function (n) {
        return arguments.length
          ? ((t = "function" == typeof n ? n : ha(+n)), u)
          : t;
      }),
      (u.y = function (t) {
        return arguments.length
          ? ((n = "function" == typeof t ? t : ha(+t)), u)
          : n;
      }),
      (u.defined = function (t) {
        return arguments.length
          ? ((e = "function" == typeof t ? t : ha(!!t)), u)
          : e;
      }),
      (u.curve = function (t) {
        return arguments.length ? ((i = t), null != r && (o = i(r)), u) : i;
      }),
      (u.context = function (t) {
        return arguments.length
          ? (null == t ? (r = o = null) : (o = i((r = t))), u)
          : r;
      }),
      u
    );
  }
  function ba(t, n) {
    (this._context = t), (this._t = n);
  }
  function xa(t) {
    return new ba(t, 0);
  }
  function wa(t) {
    return new ba(t, 1);
  }
  (la.prototype = sa.prototype = {
    constructor: la,
    moveTo: function (t, n) {
      this._ +=
        "M" + (this._x0 = this._x1 = +t) + "," + (this._y0 = this._y1 = +n);
    },
    closePath: function () {
      null !== this._x1 &&
        ((this._x1 = this._x0), (this._y1 = this._y0), (this._ += "Z"));
    },
    lineTo: function (t, n) {
      this._ += "L" + (this._x1 = +t) + "," + (this._y1 = +n);
    },
    quadraticCurveTo: function (t, n, e, r) {
      this._ +=
        "Q" + +t + "," + +n + "," + (this._x1 = +e) + "," + (this._y1 = +r);
    },
    bezierCurveTo: function (t, n, e, r, i, o) {
      this._ +=
        "C" +
        +t +
        "," +
        +n +
        "," +
        +e +
        "," +
        +r +
        "," +
        (this._x1 = +i) +
        "," +
        (this._y1 = +o);
    },
    arcTo: function (t, n, e, r, i) {
      (t = +t), (n = +n), (e = +e), (r = +r), (i = +i);
      var o = this._x1,
        u = this._y1,
        c = e - t,
        a = r - n,
        f = o - t,
        l = u - n,
        s = f * f + l * l;
      if (i < 0) throw new Error("negative radius: " + i);
      if (null === this._x1)
        this._ += "M" + (this._x1 = t) + "," + (this._y1 = n);
      else if (s > aa)
        if (Math.abs(l * c - a * f) > aa && i) {
          var h = e - o,
            d = r - u,
            p = c * c + a * a,
            v = h * h + d * d,
            y = Math.sqrt(p),
            g = Math.sqrt(s),
            m = i * Math.tan((ua - Math.acos((p + s - v) / (2 * y * g))) / 2),
            b = m / g,
            x = m / y;
          Math.abs(b - 1) > aa &&
            (this._ += "L" + (t + b * f) + "," + (n + b * l)),
            (this._ +=
              "A" +
              i +
              "," +
              i +
              ",0,0," +
              +(l * h > f * d) +
              "," +
              (this._x1 = t + x * c) +
              "," +
              (this._y1 = n + x * a));
        } else this._ += "L" + (this._x1 = t) + "," + (this._y1 = n);
      else;
    },
    arc: function (t, n, e, r, i, o) {
      (t = +t), (n = +n), (o = !!o);
      var u = (e = +e) * Math.cos(r),
        c = e * Math.sin(r),
        a = t + u,
        f = n + c,
        l = 1 ^ o,
        s = o ? r - i : i - r;
      if (e < 0) throw new Error("negative radius: " + e);
      null === this._x1
        ? (this._ += "M" + a + "," + f)
        : (Math.abs(this._x1 - a) > aa || Math.abs(this._y1 - f) > aa) &&
          (this._ += "L" + a + "," + f),
        e &&
          (s < 0 && (s = (s % ca) + ca),
          s > fa
            ? (this._ +=
                "A" +
                e +
                "," +
                e +
                ",0,1," +
                l +
                "," +
                (t - u) +
                "," +
                (n - c) +
                "A" +
                e +
                "," +
                e +
                ",0,1," +
                l +
                "," +
                (this._x1 = a) +
                "," +
                (this._y1 = f))
            : s > aa &&
              (this._ +=
                "A" +
                e +
                "," +
                e +
                ",0," +
                +(s >= ua) +
                "," +
                l +
                "," +
                (this._x1 = t + e * Math.cos(i)) +
                "," +
                (this._y1 = n + e * Math.sin(i))));
    },
    rect: function (t, n, e, r) {
      this._ +=
        "M" +
        (this._x0 = this._x1 = +t) +
        "," +
        (this._y0 = this._y1 = +n) +
        "h" +
        +e +
        "v" +
        +r +
        "h" +
        -e +
        "Z";
    },
    toString: function () {
      return this._;
    },
  }),
    (pa.prototype = {
      areaStart: function () {
        this._line = 0;
      },
      areaEnd: function () {
        this._line = NaN;
      },
      lineStart: function () {
        this._point = 0;
      },
      lineEnd: function () {
        (this._line || (0 !== this._line && 1 === this._point)) &&
          this._context.closePath(),
          (this._line = 1 - this._line);
      },
      point: function (t, n) {
        switch (((t = +t), (n = +n), this._point)) {
          case 0:
            (this._point = 1),
              this._line
                ? this._context.lineTo(t, n)
                : this._context.moveTo(t, n);
            break;
          case 1:
            this._point = 2;
          default:
            this._context.lineTo(t, n);
        }
      },
    }),
    (ba.prototype = {
      areaStart: function () {
        this._line = 0;
      },
      areaEnd: function () {
        this._line = NaN;
      },
      lineStart: function () {
        (this._x = this._y = NaN), (this._point = 0);
      },
      lineEnd: function () {
        0 < this._t &&
          this._t < 1 &&
          2 === this._point &&
          this._context.lineTo(this._x, this._y),
          (this._line || (0 !== this._line && 1 === this._point)) &&
            this._context.closePath(),
          this._line >= 0 &&
            ((this._t = 1 - this._t), (this._line = 1 - this._line));
      },
      point: function (t, n) {
        switch (((t = +t), (n = +n), this._point)) {
          case 0:
            (this._point = 1),
              this._line
                ? this._context.lineTo(t, n)
                : this._context.moveTo(t, n);
            break;
          case 1:
            this._point = 2;
          default:
            if (this._t <= 0)
              this._context.lineTo(this._x, n), this._context.lineTo(t, n);
            else {
              var e = this._x * (1 - this._t) + t * this._t;
              this._context.lineTo(e, this._y), this._context.lineTo(e, n);
            }
        }
        (this._x = t), (this._y = n);
      },
    });
  var _a = [];
  function $a(t, n) {
    return { subscribe: Ta(t, n).subscribe };
  }
  function Ta(t) {
    var n,
      e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : F,
      r = [];
    function i(e) {
      if (Y(t, e) && ((t = e), n)) {
        for (var i = !_a.length, o = 0; o < r.length; o += 1) {
          var u = r[o];
          u[1](), _a.push(u, t);
        }
        if (i) {
          for (var c = 0; c < _a.length; c += 2) _a[c][0](_a[c + 1]);
          _a.length = 0;
        }
      }
    }
    function o(n) {
      i(n(t));
    }
    function u(o) {
      var u =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : F,
        c = [o, u];
      return (
        r.push(c),
        1 === r.length && (n = e(i) || F),
        o(t),
        function () {
          var t = r.indexOf(c);
          -1 !== t && r.splice(t, 1), 0 === r.length && (n(), (n = null));
        }
      );
    }
    return { set: i, update: o, subscribe: u };
  }
  var Ma = (function () {
      var t = Ta({ x: null, y: null }),
        n = t.subscribe,
        e = t.set;
      return (
        (document.onmousemove = function (t) {
          e({ x: t.pageX, y: t.pageY });
        }),
        { subscribe: n }
      );
    })(),
    ka = (function () {
      var t = Ta({
          width: document.body.clientWidth,
          height: document.body.clientHeight,
        }),
        n = t.subscribe,
        e = t.set;
      return (
        (window.onresize = function (t) {
          e({
            width: document.body.clientWidth,
            height: document.body.clientHeight,
          });
        }),
        { subscribe: n }
      );
    })(),
    ja = Ta(null),
    Ca = Ta(!1),
    Aa = Ta(0);
  function La(t) {
    var n = (function () {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;
      try {
        return (
          Date.prototype.toString.call(
            Reflect.construct(Date, [], function () {})
          ),
          !0
        );
      } catch (t) {
        return !1;
      }
    })();
    return function () {
      var e,
        r = S(t);
      if (n) {
        var i = S(this).constructor;
        e = Reflect.construct(r, arguments, i);
      } else e = r.apply(this, arguments);
      return O(this, e);
    };
  }
  function Oa(t, n, e) {
    var r = t.slice();
    return (r[13] = n[e]), (r[20] = e), r;
  }
  function Sa(t) {
    var n;
    return {
      c: function () {
        ut((n = nt("line")), "class", "tick-line svelte-2rqv3g"),
          ut(n, "y1", t[11]),
          ut(n, "y2", "0"),
          ut(n, "x1", "0"),
          ut(n, "x2", "0");
      },
      m: function (t, e) {
        J(t, n, e);
      },
      p: function (t, e) {
        2048 & e && ut(n, "y1", t[11]);
      },
      d: function (t) {
        t && Q(n);
      },
    };
  }
  function Ea(t) {
    var n, e;
    return {
      c: function () {
        ut((n = nt("line")), "class", "gridline svelte-2rqv3g"),
          ut(n, "y1", (e = -t[3][0])),
          ut(n, "y2", "0"),
          ut(n, "x1", "0"),
          ut(n, "x2", "0");
      },
      m: function (t, e) {
        J(t, n, e);
      },
      p: function (t, r) {
        8 & r && e !== (e = -t[3][0]) && ut(n, "y1", e);
      },
      d: function (t) {
        t && Q(n);
      },
    };
  }
  function Da(t) {
    var n,
      e,
      r,
      i,
      o,
      u,
      c = t[5](t[13]) + "";
    function a(t, n) {
      return !1 !== t[4] ? Ea : !1 !== t[13] ? Sa : void 0;
    }
    var f = a(t),
      l = f && f(t);
    return {
      c: function () {
        (n = nt("g")),
          l && l.c(),
          (e = nt("text")),
          (r = et(c)),
          ut(e, "x", (i = t[7] || t[14] ? t[2].bandwidth() / 2 : 0)),
          ut(e, "y", t[8]),
          ut(e, "dx", t[9]),
          ut(e, "dy", t[10]),
          ut(e, "text-anchor", t[16](t[20])),
          ut(e, "class", "svelte-2rqv3g"),
          ut(n, "class", (o = "tick tick-" + t[13] + " svelte-2rqv3g")),
          ut(
            n,
            "transform",
            (u = "translate(" + t[2](t[13]) + "," + t[3][0] + ")")
          );
      },
      m: function (t, i) {
        J(t, n, i), l && l.m(n, null), X(n, e), X(e, r);
      },
      p: function (t, s) {
        f === (f = a(t)) && l
          ? l.p(t, s)
          : (l && l.d(1), (l = f && f(t)) && (l.c(), l.m(n, e))),
          32800 & s && c !== (c = t[5](t[13]) + "") && at(r, c),
          16516 & s &&
            i !== (i = t[7] || t[14] ? t[2].bandwidth() / 2 : 0) &&
            ut(e, "x", i),
          256 & s && ut(e, "y", t[8]),
          512 & s && ut(e, "dx", t[9]),
          1024 & s && ut(e, "dy", t[10]),
          32768 & s &&
            o !== (o = "tick tick-" + t[13] + " svelte-2rqv3g") &&
            ut(n, "class", o),
          32780 & s &&
            u !== (u = "translate(" + t[2](t[13]) + "," + t[3][0] + ")") &&
            ut(n, "transform", u);
      },
      d: function (t) {
        t && Q(n), l && l.d();
      },
    };
  }
  function Ra(t) {
    var n, e, r;
    return {
      c: function () {
        ut((n = nt("line")), "class", "baseline svelte-2rqv3g"),
          ut(n, "y1", (e = t[1] + 0.5)),
          ut(n, "y2", (r = t[1] + 0.5)),
          ut(n, "x1", "0"),
          ut(n, "x2", t[0]);
      },
      m: function (t, e) {
        J(t, n, e);
      },
      p: function (t, i) {
        2 & i && e !== (e = t[1] + 0.5) && ut(n, "y1", e),
          2 & i && r !== (r = t[1] + 0.5) && ut(n, "y2", r),
          1 & i && ut(n, "x2", t[0]);
      },
      d: function (t) {
        t && Q(n);
      },
    };
  }
  function Na(t) {
    var n, e;
    return {
      c: function () {
        (n = nt("text")),
          (e = et(t[12])),
          ut(n, "class", "label svelte-2rqv3g"),
          ut(n, "y", t[1]);
      },
      m: function (t, r) {
        J(t, n, r), X(n, e);
      },
      p: function (t, r) {
        4096 & r && at(e, t[12]), 2 & r && ut(n, "y", t[1]);
      },
      d: function (t) {
        t && Q(n);
      },
    };
  }
  function Pa(t) {
    for (var n, e, r, i = t[15], o = [], u = 0; u < i.length; u += 1)
      o[u] = Da(Oa(t, i, u));
    var c = !0 === t[6] && Ra(t),
      a = "" !== t[12] && Na(t);
    return {
      c: function () {
        n = nt("g");
        for (var t = 0; t < o.length; t += 1) o[t].c();
        (e = it()),
          c && c.c(),
          (r = it()),
          a && a.c(),
          ut(n, "class", "axis x-axis");
      },
      m: function (t, i) {
        J(t, n, i);
        for (var u = 0; u < o.length; u += 1) o[u].m(n, null);
        X(n, e), c && c.m(n, null), X(n, r), a && a.m(n, null);
      },
      p: function (t, u) {
        var f = R(u, 1)[0];
        if (118716 & f) {
          var l;
          for (i = t[15], l = 0; l < i.length; l += 1) {
            var s = Oa(t, i, l);
            o[l] ? o[l].p(s, f) : ((o[l] = Da(s)), o[l].c(), o[l].m(n, e));
          }
          for (; l < o.length; l += 1) o[l].d(1);
          o.length = i.length;
        }
        !0 === t[6]
          ? c
            ? c.p(t, f)
            : ((c = Ra(t)).c(), c.m(n, r))
          : c && (c.d(1), (c = null)),
          "" !== t[12]
            ? a
              ? a.p(t, f)
              : ((a = Na(t)).c(), a.m(n, null))
            : a && (a.d(1), (a = null));
      },
      i: F,
      o: F,
      d: function (t) {
        t && Q(n), K(o, t), c && c.d(), a && a.d();
      },
    };
  }
  function Ua(t, n, e) {
    var r,
      i,
      o = n.width,
      u = n.height,
      c = n.xScale,
      a = n.yRange,
      f = n.gridlines,
      l = void 0 !== f && f,
      s = n.tick,
      h = void 0 === s || s,
      d = n.formatTick,
      p =
        void 0 === d
          ? function (t) {
              return t;
            }
          : d,
      v = n.baseline,
      y = void 0 !== v && v,
      g = n.snapTicks,
      m = void 0 !== g && g,
      b = n.ticks,
      x = void 0 === b ? void 0 : b,
      w = n.xTick,
      _ = void 0 === w ? void 0 : w,
      $ = n.yTick,
      T = void 0 === $ ? 16 : $,
      M = n.dxTick,
      k = void 0 === M ? 0 : M,
      j = n.dyTick,
      C = void 0 === j ? 3 : j,
      A = n.yTickLength,
      L = void 0 === A ? 5 : A,
      O = n.label,
      S = void 0 === O ? "" : O;
    return (
      (t.$$set = function (t) {
        "width" in t && e(0, (o = t.width)),
          "height" in t && e(1, (u = t.height)),
          "xScale" in t && e(2, (c = t.xScale)),
          "yRange" in t && e(3, (a = t.yRange)),
          "gridlines" in t && e(4, (l = t.gridlines)),
          "tick" in t && e(13, (h = t.tick)),
          "formatTick" in t && e(5, (p = t.formatTick)),
          "baseline" in t && e(6, (y = t.baseline)),
          "snapTicks" in t && e(17, (m = t.snapTicks)),
          "ticks" in t && e(18, (x = t.ticks)),
          "xTick" in t && e(7, (_ = t.xTick)),
          "yTick" in t && e(8, (T = t.yTick)),
          "dxTick" in t && e(9, (k = t.dxTick)),
          "dyTick" in t && e(10, (C = t.dyTick)),
          "yTickLength" in t && e(11, (L = t.yTickLength)),
          "label" in t && e(12, (S = t.label));
      }),
      (t.$$.update = function () {
        4 & t.$$.dirty && e(14, (r = "function" == typeof c.bandwidth)),
          278532 & t.$$.dirty &&
            e(15, (i = Array.isArray(x) ? x : r ? c.domain() : c.ticks(x)));
      }),
      [
        o,
        u,
        c,
        a,
        l,
        p,
        y,
        _,
        T,
        k,
        C,
        L,
        S,
        h,
        r,
        i,
        function (t) {
          if (!0 === m) {
            if (0 === t) return "start";
            if (t === i.length - 1) return "end";
          }
          return "middle";
        },
        m,
        x,
      ]
    );
  }
  var Fa = (function (t) {
    L(e, t);
    var n = La(e);
    function e(t) {
      var r;
      return (
        j(this, e),
        Ft(C((r = n.call(this))), t, Ua, Pa, Y, {
          width: 0,
          height: 1,
          xScale: 2,
          yRange: 3,
          gridlines: 4,
          tick: 13,
          formatTick: 5,
          baseline: 6,
          snapTicks: 17,
          ticks: 18,
          xTick: 7,
          yTick: 8,
          dxTick: 9,
          dyTick: 10,
          yTickLength: 11,
          label: 12,
        }),
        r
      );
    }
    return e;
  })(Ht);
  function Ha(t) {
    var n = (function () {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;
      try {
        return (
          Date.prototype.toString.call(
            Reflect.construct(Date, [], function () {})
          ),
          !0
        );
      } catch (t) {
        return !1;
      }
    })();
    return function () {
      var e,
        r = S(t);
      if (n) {
        var i = S(this).constructor;
        e = Reflect.construct(r, arguments, i);
      } else e = r.apply(this, arguments);
      return O(this, e);
    };
  }
  function za(t, n, e) {
    var r = t.slice();
    return (r[17] = n[e]), (r[19] = e), r;
  }
  function Ba(t) {
    var n, e, r;
    return {
      c: function () {
        ut((n = nt("line")), "x2", "100%"),
          ut(n, "y1", (e = t[6] + (t[13] ? t[2].bandwidth() / 2 : 0))),
          ut(n, "y2", (r = t[6] + (t[13] ? t[2].bandwidth() / 2 : 0))),
          ut(n, "class", "svelte-csb80z");
      },
      m: function (t, e) {
        J(t, n, e);
      },
      p: function (t, i) {
        8260 & i &&
          e !== (e = t[6] + (t[13] ? t[2].bandwidth() / 2 : 0)) &&
          ut(n, "y1", e),
          8260 & i &&
            r !== (r = t[6] + (t[13] ? t[2].bandwidth() / 2 : 0)) &&
            ut(n, "y2", r);
      },
      d: function (t) {
        t && Q(n);
      },
    };
  }
  function Ia(t) {
    var n, e, r, i, o;
    return {
      c: function () {
        (n = nt("text")),
          (e = et(t[10])),
          ut(n, "class", "label svelte-csb80z"),
          ut(n, "x", t[5]),
          ut(n, "y", (r = t[6] + (t[13] ? t[2].bandwidth() / 2 : 0))),
          ut(n, "dx", (i = t[13] ? -5 : t[11])),
          ut(n, "dy", (o = t[13] ? 4 : t[12])),
          ft(n, "text-anchor", t[13] ? "end" : t[9]);
      },
      m: function (t, r) {
        J(t, n, r), X(n, e);
      },
      p: function (t, u) {
        1024 & u && at(e, t[10]),
          32 & u && ut(n, "x", t[5]),
          8260 & u &&
            r !== (r = t[6] + (t[13] ? t[2].bandwidth() / 2 : 0)) &&
            ut(n, "y", r),
          10240 & u && i !== (i = t[13] ? -5 : t[11]) && ut(n, "dx", i),
          12288 & u && o !== (o = t[13] ? 4 : t[12]) && ut(n, "dy", o),
          8704 & u && ft(n, "text-anchor", t[13] ? "end" : t[9]);
      },
      d: function (t) {
        t && Q(n);
      },
    };
  }
  function Ya(t) {
    var n,
      e,
      r,
      i,
      o,
      u,
      c,
      a,
      f = t[4](t[17]) + "",
      l = !1 !== t[3] && Ba(t),
      s = "" !== t[10] && t[19] === t[15] && Ia(t);
    return {
      c: function () {
        (n = nt("g")),
          l && l.c(),
          (e = nt("text")),
          (r = et(f)),
          s && s.c(),
          ut(e, "x", t[5]),
          ut(e, "y", (i = t[6] + (t[13] ? t[2].bandwidth() / 2 : 0))),
          ut(e, "dx", (o = t[13] ? -5 : t[7])),
          ut(e, "dy", (u = t[13] ? 4 : t[8])),
          ft(e, "text-anchor", t[13] ? "end" : t[9]),
          ut(e, "class", "svelte-csb80z"),
          ut(n, "class", (c = "tick tick-" + t[17] + " svelte-csb80z")),
          ut(
            n,
            "transform",
            (a =
              "translate(" +
              (t[1][0] + (t[13] ? t[0].left : 0)) +
              ", " +
              t[2](t[17]) +
              ")")
          );
      },
      m: function (t, i) {
        J(t, n, i), l && l.m(n, null), X(n, e), X(e, r), s && s.m(n, null);
      },
      p: function (t, h) {
        !1 !== t[3]
          ? l
            ? l.p(t, h)
            : ((l = Ba(t)).c(), l.m(n, e))
          : l && (l.d(1), (l = null)),
          16400 & h && f !== (f = t[4](t[17]) + "") && at(r, f),
          32 & h && ut(e, "x", t[5]),
          8260 & h &&
            i !== (i = t[6] + (t[13] ? t[2].bandwidth() / 2 : 0)) &&
            ut(e, "y", i),
          8320 & h && o !== (o = t[13] ? -5 : t[7]) && ut(e, "dx", o),
          8448 & h && u !== (u = t[13] ? 4 : t[8]) && ut(e, "dy", u),
          8704 & h && ft(e, "text-anchor", t[13] ? "end" : t[9]),
          "" !== t[10] && t[19] === t[15]
            ? s
              ? s.p(t, h)
              : ((s = Ia(t)).c(), s.m(n, null))
            : s && (s.d(1), (s = null)),
          16384 & h &&
            c !== (c = "tick tick-" + t[17] + " svelte-csb80z") &&
            ut(n, "class", c),
          24583 & h &&
            a !==
              (a =
                "translate(" +
                (t[1][0] + (t[13] ? t[0].left : 0)) +
                ", " +
                t[2](t[17]) +
                ")") &&
            ut(n, "transform", a);
      },
      d: function (t) {
        t && Q(n), l && l.d(), s && s.d();
      },
    };
  }
  function qa(t) {
    for (var n, e, r = t[14], i = [], o = 0; o < r.length; o += 1)
      i[o] = Ya(za(t, r, o));
    return {
      c: function () {
        n = nt("g");
        for (var r = 0; r < i.length; r += 1) i[r].c();
        ut(n, "class", "axis y-axis"),
          ut(n, "transform", (e = "translate(" + -t[0].left + ", 0)"));
      },
      m: function (t, e) {
        J(t, n, e);
        for (var r = 0; r < i.length; r += 1) i[r].m(n, null);
      },
      p: function (t, o) {
        var u = R(o, 1)[0];
        if (65535 & u) {
          var c;
          for (r = t[14], c = 0; c < r.length; c += 1) {
            var a = za(t, r, c);
            i[c] ? i[c].p(a, u) : ((i[c] = Ya(a)), i[c].c(), i[c].m(n, null));
          }
          for (; c < i.length; c += 1) i[c].d(1);
          i.length = r.length;
        }
        1 & u &&
          e !== (e = "translate(" + -t[0].left + ", 0)") &&
          ut(n, "transform", e);
      },
      i: F,
      o: F,
      d: function (t) {
        t && Q(n), K(i, t);
      },
    };
  }
  function Wa(t, n, e) {
    var r,
      i,
      o,
      u = n.margin,
      c = void 0 === u ? {} : u,
      a = n.xRange,
      f = n.yScale,
      l = n.ticks,
      s = void 0 === l ? 4 : l,
      h = n.gridlines,
      d = void 0 !== h && h,
      p = n.formatTick,
      v =
        void 0 === p
          ? function (t) {
              return t;
            }
          : p,
      y = n.xTick,
      g = void 0 === y ? 0 : y,
      m = n.yTick,
      b = void 0 === m ? 0 : m,
      x = n.dxTick,
      w = void 0 === x ? 0 : x,
      _ = n.dyTick,
      $ = void 0 === _ ? -4 : _,
      T = n.textAnchor,
      M = void 0 === T ? "start" : T,
      k = n.label,
      j = void 0 === k ? "" : k,
      C = n.dxLabel,
      A = void 0 === C ? 0 : C,
      L = n.dyLabel,
      O = void 0 === L ? -4 : L;
    return (
      (t.$$set = function (t) {
        "margin" in t && e(0, (c = t.margin)),
          "xRange" in t && e(1, (a = t.xRange)),
          "yScale" in t && e(2, (f = t.yScale)),
          "ticks" in t && e(16, (s = t.ticks)),
          "gridlines" in t && e(3, (d = t.gridlines)),
          "formatTick" in t && e(4, (v = t.formatTick)),
          "xTick" in t && e(5, (g = t.xTick)),
          "yTick" in t && e(6, (b = t.yTick)),
          "dxTick" in t && e(7, (w = t.dxTick)),
          "dyTick" in t && e(8, ($ = t.dyTick)),
          "textAnchor" in t && e(9, (M = t.textAnchor)),
          "label" in t && e(10, (j = t.label)),
          "dxLabel" in t && e(11, (A = t.dxLabel)),
          "dyLabel" in t && e(12, (O = t.dyLabel));
      }),
      (t.$$.update = function () {
        4 & t.$$.dirty && e(13, (r = "function" == typeof f.bandwidth)),
          73732 & t.$$.dirty &&
            e(14, (i = Array.isArray(s) ? s : r ? f.domain() : f.ticks(s))),
          16384 & t.$$.dirty && e(15, (o = i.length - 1));
      }),
      [c, a, f, d, v, g, b, w, $, M, j, A, O, r, i, o, s]
    );
  }
  var Za = (function (t) {
      L(e, t);
      var n = Ha(e);
      function e(t) {
        var r;
        return (
          j(this, e),
          Ft(C((r = n.call(this))), t, Wa, qa, Y, {
            margin: 0,
            xRange: 1,
            yScale: 2,
            ticks: 16,
            gridlines: 3,
            formatTick: 4,
            xTick: 5,
            yTick: 6,
            dxTick: 7,
            dyTick: 8,
            textAnchor: 9,
            label: 10,
            dxLabel: 11,
            dyLabel: 12,
          }),
          r
        );
      }
      return e;
    })(Ht),
    Va = {
      plus: [
        "M14,3 L14,10.999 L22,11 L22,14 L14,14 L14,22 L11,22 L11,14 L3,14 L3,11 L11,11 L11,3 L14,3 Z",
      ],
      pointer: [
        "M9.90490063,5 C10.2732762,5 10.6534672,5.12639193 10.95794,5.39115079 C11.2624124,5.65590958 11.4756394,6.07333816 11.4756394,6.57073879 L11.4756394,6.57073879 L11.4756394,9.55498896 C11.7013287,9.41932465 11.9550046,9.31953168 12.2610088,9.31953168 C12.8749419,9.31953168 13.3190813,9.6605701 13.5786502,10.0941635 C13.8388847,9.87331332 14.1785664,9.71221638 14.617117,9.71221638 C15.0883387,9.71221638 15.5355971,9.87897151 15.8120444,10.2383526 C15.9342718,10.3972482 16.0100034,10.5892019 16.0697437,10.795167 C16.3089256,10.6216816 16.6034105,10.4975858 16.9732252,10.4975858 C17.6445291,10.4975858 18.1218464,10.8737997 18.3276807,11.2982942 C18.533495,11.7227891 18.543964,12.1674307 18.543964,12.4610093 L18.5431971,19.5293338 C18.5431971,21.4713384 16.9510393,23.0634961 15.0090348,23.0634961 L15.0090348,23.0634961 L11.8284423,23.0634961 C10.7315428,23.0634961 9.70369999,22.5733208 9.04053407,21.6890997 L9.04053407,21.6890997 L4.493,15.849 L4.41236908,15.7606557 C3.8638399,15.1036158 3.85959402,14.1420451 4.41732951,13.510357 L4.52849496,13.3959362 C5.22421652,12.7067977 6.35228256,12.7017234 7.01115172,13.4112756 C7.01427682,13.4145458 7.0173452,13.4178697 7.02035546,13.4212459 L7.02035546,13.4212459 L8.33339493,14.9405983 L8.33416184,6.53162371 C8.33416184,6.04834598 8.55194045,5.64024633 8.8556962,5.3827142 C9.15945195,5.12518203 9.53652508,5 9.90490063,5 Z M9.90490063,5.7853694 C9.72351761,5.7853694 9.511257,5.85637633 9.36342535,5.98171175 C9.21559369,6.10704716 9.11951278,6.26880054 9.11953124,6.53162371 L9.11953124,6.53162371 L9.11876432,15.9951716 C9.11864874,16.1590731 9.01675699,16.3056674 8.86317217,16.3628987 C8.70958736,16.42013 8.53661051,16.3759617 8.42926536,16.252104 L8.42926536,16.252104 L6.43593029,13.9458483 L6.43593029,13.9458483 L6.34807241,13.8625299 C5.98465295,13.5594748 5.4498242,13.5828677 5.07687297,13.9558189 L5.07687297,13.9558189 L5.06613552,13.9657892 C4.67825657,14.3259628 4.67256049,14.9205353 5.07687297,15.3248466 C5.08834051,15.3361895 5.09909837,15.348228 5.10908541,15.3608939 L5.10908541,15.3608939 L9.66407457,21.212049 L9.66407457,21.212049 C10.1835646,21.9047024 10.9619179,22.2781267 11.8284423,22.2781267 L11.8284423,22.2781267 L15.0090348,22.2781267 C16.5226556,22.2781267 17.7578277,21.0429547 17.7578277,19.5293338 L17.7578277,19.5293338 L17.7585946,12.4610093 C17.7585946,12.2048292 17.7296404,11.8645617 17.6213085,11.6411264 C17.5129762,11.4176916 17.4014384,11.2829552 16.9732252,11.2829552 C16.545012,11.2829552 16.4334769,11.4176955 16.3251419,11.6411264 C16.2168088,11.8645617 16.1878558,12.2048292 16.1878558,12.4610093 L16.1878558,12.4610093 C16.1874856,12.4794593 16.1864618,12.4925139 16.1847882,12.505493 C16.1831231,12.5183821 16.1808193,12.5311807 16.1778852,12.5438414 C16.1629166,12.6079778 16.1320588,12.6673199 16.0881508,12.7164079 C16.0796792,12.7263064 16.0707203,12.7357772 16.0613073,12.7447852 C16.0419562,12.7624385 16.0208876,12.7781115 15.9984161,12.7915701 C15.9872246,12.7982752 15.975706,12.8044185 15.963903,12.8099772 C15.9282727,12.8270896 15.8902632,12.8387251 15.8511593,12.8444902 C15.7991682,12.8518622 15.7462266,12.8487327 15.6954661,12.8352869 C15.6700614,12.8285697 15.645395,12.8193198 15.6218377,12.807676 L15.6218377,12.807676 L15.5873243,12.7892693 C15.5653173,12.7752418 15.5447634,12.7590555 15.5259673,12.7409507 C15.5069144,12.7230258 15.4897001,12.7032421 15.474581,12.6818944 C15.4668759,12.6712671 15.4597086,12.6602602 15.4531058,12.6489152 C15.4338909,12.6146347 15.4199302,12.5776643 15.4116902,12.5392395 C15.4060082,12.5135371 15.4029248,12.4873286 15.4024864,12.4610093 L15.4024864,12.4610093 L15.4024864,11.6756399 C15.4024864,11.1726296 15.3055086,10.868813 15.1892708,10.717704 C15.0730334,10.566595 14.9312648,10.4975858 14.617117,10.4975858 C14.2565869,10.4975858 14.1025273,10.6002701 13.9951107,10.73381 C13.8876946,10.8673546 13.8317476,11.0735235 13.8317476,11.2829552 C13.831592,11.2880727 13.8313363,11.2931867 13.8309807,11.2982942 L13.8309807,11.2982942 L13.8309807,12.0683246 C13.8279442,12.2830329 13.6530258,12.455495 13.438296,12.455495 C13.2235662,12.455495 13.0486478,12.2830329 13.0456113,12.0683246 L13.0456113,12.0683246 L13.0456113,10.8841348 C13.0426171,10.5409602 12.7836078,10.1049011 12.2610088,10.1049011 C11.7353627,10.1049011 11.4756394,10.5462041 11.4756394,10.8902705 L11.4756394,10.8902705 L11.4752877,10.9006268 L11.4752877,10.9006268 L11.4748725,10.9056095 L11.4748725,12.4610093 C11.4768753,12.6026255 11.4024712,12.7343498 11.2801508,12.8057423 C11.1578305,12.8771349 11.0065451,12.8771349 10.8842248,12.8057423 C10.7619045,12.7343498 10.6875003,12.6026255 10.6895031,12.4610093 L10.6895031,12.4610093 L10.6896571,10.8768422 L10.6896571,10.8768422 L10.69027,10.8634269 L10.69027,6.57073879 C10.69027,6.28277003 10.589656,6.11117153 10.4425414,5.98324565 C10.2954264,5.85531985 10.0862837,5.7853694 9.90490063,5.7853694 Z M7,5.55 C7.24852814,5.55 7.45,5.75147186 7.45,6 C7.45,6.2209139 7.29081236,6.40464753 7.08088807,6.4427499 L7,6.45 L5,6.45 C4.75147186,6.45 4.55,6.24852814 4.55,6 C4.55,5.7790861 4.70918764,5.59535247 4.91911193,5.5572501 L5,5.55 L7,5.55 Z M15,5.55 C15.2485281,5.55 15.45,5.75147186 15.45,6 C15.45,6.2209139 15.2908124,6.40464753 15.0808881,6.4427499 L15,6.45 L13,6.45 C12.7514719,6.45 12.55,6.24852814 12.55,6 C12.55,5.7790861 12.7091876,5.59535247 12.9191119,5.5572501 L13,5.55 L15,5.55 Z M13.7399495,2.48933983 C13.8961592,2.64554954 13.9135158,2.88803151 13.7920194,3.06341283 L13.7399495,3.12573593 L12.3257359,4.53994949 C12.15,4.71568542 11.8650758,4.71568542 11.6893398,4.53994949 C11.5331301,4.38373978 11.5157735,4.14125782 11.6372699,3.96587649 L11.6893398,3.90355339 L13.1035534,2.48933983 C13.2792893,2.3136039 13.5642136,2.3136039 13.7399495,2.48933983 Z M5.76005051,2.48933983 C5.93578644,2.3136039 6.22071068,2.3136039 6.39644661,2.48933983 L6.39644661,2.48933983 L7.81066017,3.90355339 L7.86273008,3.96587649 C7.98422652,4.14125782 7.96686989,4.38373978 7.81066017,4.53994949 C7.63492424,4.71568542 7.35,4.71568542 7.17426407,4.53994949 L7.17426407,4.53994949 L5.76005051,3.12573593 L5.7079806,3.06341283 C5.58648415,2.88803151 5.60384079,2.64554954 5.76005051,2.48933983 Z M9.75,0.55 C9.9709139,0.55 10.1546475,0.709187645 10.1927499,0.919111931 L10.2,1 L10.2,3 C10.2,3.24852814 9.99852814,3.45 9.75,3.45 C9.5290861,3.45 9.34535247,3.29081236 9.3072501,3.08088807 L9.3,3 L9.3,1 C9.3,0.751471863 9.50147186,0.55 9.75,0.55 Z",
      ],
    };
  function Ga(t) {
    var n = (function () {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;
      try {
        return (
          Date.prototype.toString.call(
            Reflect.construct(Date, [], function () {})
          ),
          !0
        );
      } catch (t) {
        return !1;
      }
    })();
    return function () {
      var e,
        r = S(t);
      if (n) {
        var i = S(this).constructor;
        e = Reflect.construct(r, arguments, i);
      } else e = r.apply(this, arguments);
      return O(this, e);
    };
  }
  function Xa(t, n, e) {
    var r = t.slice();
    return (r[4] = n[e]), r;
  }
  function Ja(t) {
    var n, e;
    return {
      c: function () {
        ut((n = nt("path")), "d", (e = t[4]));
      },
      m: function (t, e) {
        J(t, n, e);
      },
      p: function (t, r) {
        1 & r && e !== (e = t[4]) && ut(n, "d", e);
      },
      d: function (t) {
        t && Q(n);
      },
    };
  }
  function Qa(t) {
    for (var n, e, r = t[0], i = [], o = 0; o < r.length; o += 1)
      i[o] = Ja(Xa(t, r, o));
    return {
      c: function () {
        n = nt("svg");
        for (var r = 0; r < i.length; r += 1) i[r].c();
        ut(n, "class", "c svelte-1un7k2y"),
          ut(n, "viewBox", "0 0 25 25"),
          ut(n, "fill-rule", "evenodd"),
          ut(n, "clip-rule", "evenodd"),
          ut(n, "style", (e = "transform: rotate(".concat(t[1], "deg)")));
      },
      m: function (t, e) {
        J(t, n, e);
        for (var r = 0; r < i.length; r += 1) i[r].m(n, null);
      },
      p: function (t, o) {
        var u = R(o, 1)[0];
        if (1 & u) {
          var c;
          for (r = t[0], c = 0; c < r.length; c += 1) {
            var a = Xa(t, r, c);
            i[c] ? i[c].p(a, u) : ((i[c] = Ja(a)), i[c].c(), i[c].m(n, null));
          }
          for (; c < i.length; c += 1) i[c].d(1);
          i.length = r.length;
        }
        2 & u &&
          e !== (e = "transform: rotate(".concat(t[1], "deg)")) &&
          ut(n, "style", e);
      },
      i: F,
      o: F,
      d: function (t) {
        t && Q(n), K(i, t);
      },
    };
  }
  var Ka = ["n", "ne", "e", "se", "s", "sw", "w", "nw"];
  function tf(t, n, e) {
    var r,
      i,
      o = n.name,
      u = void 0 === o ? "" : o,
      c = n.direction,
      a = void 0 === c ? "n" : c;
    return (
      (t.$$set = function (t) {
        "name" in t && e(2, (u = t.name)),
          "direction" in t && e(3, (a = t.direction));
      }),
      (t.$$.update = function () {
        4 & t.$$.dirty && e(0, (r = Va[u] || [])),
          8 & t.$$.dirty && e(1, (i = 45 * Ka.indexOf(a)));
      }),
      [r, i, u, a]
    );
  }
  var nf = (function (t) {
    L(e, t);
    var n = Ga(e);
    function e(t) {
      var r;
      return (
        j(this, e),
        Ft(C((r = n.call(this))), t, tf, Qa, Y, { name: 2, direction: 3 }),
        r
      );
    }
    return e;
  })(Ht);
  function ef(t) {
    var n = (function () {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;
      try {
        return (
          Date.prototype.toString.call(
            Reflect.construct(Date, [], function () {})
          ),
          !0
        );
      } catch (t) {
        return !1;
      }
    })();
    return function () {
      var e,
        r = S(t);
      if (n) {
        var i = S(this).constructor;
        e = Reflect.construct(r, arguments, i);
      } else e = r.apply(this, arguments);
      return O(this, e);
    };
  }
  function rf(t) {
    var n, e, r, i;
    return {
      c: function () {
        (n = tt("button")),
          ut((e = tt("div")), "class", "close svelte-1kr9eyj"),
          ut(n, "title", t[1]),
          ut(n, "class", "svelte-1kr9eyj"),
          ht(n, "is-big", t[0]);
      },
      m: function (o, u) {
        J(o, n, u), X(n, e), r || ((i = ot(n, "click", t[2])), (r = !0));
      },
      p: function (t, e) {
        var r = R(e, 1)[0];
        2 & r && ut(n, "title", t[1]), 1 & r && ht(n, "is-big", t[0]);
      },
      i: F,
      o: F,
      d: function (t) {
        t && Q(n), (r = !1), i();
      },
    };
  }
  function of(t, n, e) {
    var r = n.isBig,
      i = void 0 !== r && r,
      o = n.tip,
      u = void 0 === o ? "" : o;
    return (
      (t.$$set = function (t) {
        "isBig" in t && e(0, (i = t.isBig)), "tip" in t && e(1, (u = t.tip));
      }),
      [
        i,
        u,
        function (n) {
          !(function (t, n) {
            var e = t.$$.callbacks[n.type];
            e &&
              e.slice().forEach(function (t) {
                return t(n);
              });
          })(t, n);
        },
      ]
    );
  }
  var uf = (function (t) {
    L(e, t);
    var n = ef(e);
    function e(t) {
      var r;
      return (
        j(this, e),
        Ft(C((r = n.call(this))), t, of, rf, Y, { isBig: 0, tip: 1 }),
        r
      );
    }
    return e;
  })(Ht);
  function cf(t) {
    var n = (function () {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;
      try {
        return (
          Date.prototype.toString.call(
            Reflect.construct(Date, [], function () {})
          ),
          !0
        );
      } catch (t) {
        return !1;
      }
    })();
    return function () {
      var e,
        r = S(t);
      if (n) {
        var i = S(this).constructor;
        e = Reflect.construct(r, arguments, i);
      } else e = r.apply(this, arguments);
      return O(this, e);
    };
  }
  function af(t) {
    var n, e, r;
    return (
      (e = new uf({})).$on("click", t[26]),
      {
        c: function () {
          (n = tt("div")),
            Rt(e.$$.fragment),
            ut(n, "class", "event__close svelte-1egd6r1");
        },
        m: function (t, i) {
          J(t, n, i), Nt(e, n, null), (r = !0);
        },
        p: F,
        i: function (t) {
          r || (Lt(e.$$.fragment, t), (r = !0));
        },
        o: function (t) {
          Ot(e.$$.fragment, t), (r = !1);
        },
        d: function (t) {
          t && Q(n), Pt(e);
        },
      }
    );
  }
  function ff(t) {
    var n, e, r, i, o, u, c, a;
    function f(t, n) {
      return t[7] ? sf : hf;
    }
    var l = f(t),
      s = l(t);
    return {
      c: function () {
        (n = tt("div")),
          (e = tt("div")),
          (r = tt("h2")),
          (i = et(t[10])),
          (o = rt()),
          s.c(),
          ut(r, "class", "svelte-1egd6r1"),
          ut(e, "class", "event__content svelte-1egd6r1"),
          ut(n, "class", "event__text svelte-1egd6r1"),
          ut(
            n,
            "style",
            (u =
              "width: " +
              t[15] +
              "px; " +
              (!t[7] && t[9] ? "height: ".concat(t[2], "px") : ""))
          ),
          ht(n, "is-open", t[7]);
      },
      m: function (u, f) {
        J(u, n, f),
          X(n, e),
          X(e, r),
          X(r, i),
          X(e, o),
          s.m(e, null),
          c ||
            ((a = [
              ot(n, "touchend", t[30]),
              ot(n, "mouseover", t[31]),
              ot(n, "mouseout", t[32]),
            ]),
            (c = !0));
      },
      p: function (t, r) {
        1024 & r[0] && at(i, t[10]),
          l === (l = f(t)) && s
            ? s.p(t, r)
            : (s.d(1), (s = l(t)) && (s.c(), s.m(e, null))),
          33412 & r[0] &&
            u !==
              (u =
                "width: " +
                t[15] +
                "px; " +
                (!t[7] && t[9] ? "height: ".concat(t[2], "px") : "")) &&
            ut(n, "style", u),
          128 & r[0] && ht(n, "is-open", t[7]);
      },
      i: F,
      o: F,
      d: function (t) {
        t && Q(n), s.d(), (c = !1), B(a);
      },
    };
  }
  function lf(t) {
    var n, e, r, i, o, u;
    return (
      (r = new nf({ props: { name: "plus", direction: t[6] ? "ne" : "n" } })),
      {
        c: function () {
          (n = tt("div")),
            (e = tt("span")),
            Rt(r.$$.fragment),
            ut(e, "class", "svelte-1egd6r1"),
            ut(n, "class", "event__icon svelte-1egd6r1"),
            ft(n, "width", t[3] + "px"),
            ft(n, "height", t[3] + "px");
        },
        m: function (c, a) {
          J(c, n, a),
            X(n, e),
            Nt(r, e, null),
            (i = !0),
            o ||
              ((u = [
                ot(n, "click", t[27]),
                ot(n, "mouseover", t[28]),
                ot(n, "mouseout", t[29]),
              ]),
              (o = !0));
        },
        p: function (t, e) {
          var o = {};
          64 & e[0] && (o.direction = t[6] ? "ne" : "n"),
            r.$set(o),
            (!i || 8 & e[0]) && ft(n, "width", t[3] + "px"),
            (!i || 8 & e[0]) && ft(n, "height", t[3] + "px");
        },
        i: function (t) {
          i || (Lt(r.$$.fragment, t), (i = !0));
        },
        o: function (t) {
          Ot(r.$$.fragment, t), (i = !1);
        },
        d: function (t) {
          t && Q(n), Pt(r), (o = !1), B(u);
        },
      }
    );
  }
  function sf(t) {
    var n;
    return {
      c: function () {
        ut((n = tt("p")), "class", "svelte-1egd6r1");
      },
      m: function (e, r) {
        J(e, n, r), (n.innerHTML = t[1]);
      },
      p: function (t, e) {
        2 & e[0] && (n.innerHTML = t[1]);
      },
      d: function (t) {
        t && Q(n);
      },
    };
  }
  function hf(t) {
    var n;
    return {
      c: function () {
        ut((n = tt("p")), "class", "svelte-1egd6r1");
      },
      m: function (e, r) {
        J(e, n, r), (n.innerHTML = t[0]);
      },
      p: function (t, e) {
        1 & e[0] && (n.innerHTML = t[0]);
      },
      d: function (t) {
        t && Q(n);
      },
    };
  }
  function df(t) {
    var n,
      e,
      r,
      i,
      o,
      u,
      c = t[8] && t[7] && af(t),
      a = [lf, ff],
      f = [];
    function l(t, n) {
      return t[4] ? 0 : 1;
    }
    return (
      (r = l(t)),
      (i = f[r] = a[r](t)),
      {
        c: function () {
          (n = tt("div")),
            c && c.c(),
            (e = rt()),
            i.c(),
            ut(n, "class", "event svelte-1egd6r1"),
            ut(
              n,
              "style",
              (o = t[13] + ": " + t[11] + "px; " + t[14] + ": " + t[12] + "px;")
            ),
            ht(n, "is-highlighted", t[5]),
            ht(n, "is-selected", t[6]);
        },
        m: function (t, i) {
          J(t, n, i), c && c.m(n, null), X(n, e), f[r].m(n, null), (u = !0);
        },
        p: function (t, s) {
          t[8] && t[7]
            ? c
              ? (c.p(t, s), 384 & s[0] && Lt(c, 1))
              : ((c = af(t)).c(), Lt(c, 1), c.m(n, e))
            : c &&
              (Ct(),
              Ot(c, 1, 1, function () {
                c = null;
              }),
              At());
          var h = r;
          (r = l(t)) === h
            ? f[r].p(t, s)
            : (Ct(),
              Ot(f[h], 1, 1, function () {
                f[h] = null;
              }),
              At(),
              (i = f[r]) ? i.p(t, s) : (i = f[r] = a[r](t)).c(),
              Lt(i, 1),
              i.m(n, null)),
            (!u ||
              (30720 & s[0] &&
                o !==
                  (o =
                    t[13] +
                    ": " +
                    t[11] +
                    "px; " +
                    t[14] +
                    ": " +
                    t[12] +
                    "px;"))) &&
              ut(n, "style", o),
            32 & s[0] && ht(n, "is-highlighted", t[5]),
            64 & s[0] && ht(n, "is-selected", t[6]);
        },
        i: function (t) {
          u || (Lt(c), Lt(i), (u = !0));
        },
        o: function (t) {
          Ot(c), Ot(i), (u = !1);
        },
        d: function (t) {
          t && Q(n), c && c.d(), f[r].d();
        },
      }
    );
  }
  function pf(t, n, e) {
    var r,
      i,
      o,
      u,
      c,
      a,
      f,
      l,
      s,
      h,
      d = n.info,
      p = n.details,
      v = n.date,
      y = void 0 === v ? new Date() : v,
      g = n.x,
      m = void 0 === g ? 0 : g,
      b = n.y,
      x = void 0 === b ? 0 : b,
      w = n.width,
      _ = void 0 === w ? 0 : w,
      $ = n.containerWidth,
      T = void 0 === $ ? 0 : $,
      M = n.containerHeight,
      k = void 0 === M ? 0 : M,
      j = n.height,
      C = void 0 === j ? 0 : j,
      A = n.iconRadius,
      L = void 0 === A ? 20 : A,
      O = n.isMinified,
      S = void 0 !== O && O,
      E = n.isHighlighted,
      D = void 0 !== E && E,
      R = n.isSelected,
      N = void 0 !== R && R,
      P = n.isOpen,
      U = void 0 !== P && P,
      F = n.showClose,
      H = void 0 !== F && F,
      z = pt();
    return (
      (t.$$set = function (t) {
        "info" in t && e(0, (d = t.info)),
          "details" in t && e(1, (p = t.details)),
          "date" in t && e(17, (y = t.date)),
          "x" in t && e(18, (m = t.x)),
          "y" in t && e(19, (x = t.y)),
          "width" in t && e(20, (_ = t.width)),
          "containerWidth" in t && e(21, (T = t.containerWidth)),
          "containerHeight" in t && e(22, (k = t.containerHeight)),
          "height" in t && e(2, (C = t.height)),
          "iconRadius" in t && e(3, (L = t.iconRadius)),
          "isMinified" in t && e(4, (S = t.isMinified)),
          "isHighlighted" in t && e(5, (D = t.isHighlighted)),
          "isSelected" in t && e(6, (N = t.isSelected)),
          "isOpen" in t && e(7, (U = t.isOpen)),
          "showClose" in t && e(8, (H = t.showClose));
      }),
      (t.$$.update = function () {
        131072 & t.$$.dirty[0] && e(10, (r = wi(y))),
          1048576 & t.$$.dirty[0] && e(23, (i = 2 * _)),
          2359296 & t.$$.dirty[0] && e(24, (o = T / 2 < m)),
          4718592 & t.$$.dirty[0] && e(25, (u = k / 2 < x)),
          20185104 & t.$$.dirty[0] && e(11, (c = S ? m : o ? T - m - _ : m)),
          38273044 & t.$$.dirty[0] && e(12, (a = S ? x : u ? k - x - C : x)),
          16777232 & t.$$.dirty[0] &&
            e(13, (f = S ? "left" : o ? "right" : "left")),
          33554448 & t.$$.dirty[0] &&
            e(14, (l = S ? "top" : u ? "bottom" : "top")),
          3 & t.$$.dirty[0] && e(9, (s = d.length <= p.length)),
          9437696 & t.$$.dirty[0] && e(15, (h = s ? _ : i));
      }),
      [
        d,
        p,
        C,
        L,
        S,
        D,
        N,
        U,
        H,
        s,
        r,
        c,
        a,
        f,
        l,
        h,
        z,
        y,
        m,
        x,
        _,
        T,
        k,
        i,
        o,
        u,
        function () {
          z("closeclick");
        },
        function () {
          z("iconclick");
        },
        function () {
          z("iconmouseover");
        },
        function () {
          z("iconmouseout");
        },
        function (t) {
          (U && "a" === t.target.localName) ||
            (t.preventDefault(), z("texttap"));
        },
        function () {
          z("textmouseover");
        },
        function () {
          z("textmouseout");
        },
      ]
    );
  }
  var vf = (function (t) {
    L(e, t);
    var n = cf(e);
    function e(t) {
      var r;
      return (
        j(this, e),
        Ft(
          C((r = n.call(this))),
          t,
          pf,
          df,
          Y,
          {
            info: 0,
            details: 1,
            date: 17,
            x: 18,
            y: 19,
            width: 20,
            containerWidth: 21,
            containerHeight: 22,
            height: 2,
            iconRadius: 3,
            isMinified: 4,
            isHighlighted: 5,
            isSelected: 6,
            isOpen: 7,
            showClose: 8,
          },
          [-1, -1]
        ),
        r
      );
    }
    return e;
  })(Ht);
  function yf(t) {
    var n = (function () {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;
      try {
        return (
          Date.prototype.toString.call(
            Reflect.construct(Date, [], function () {})
          ),
          !0
        );
      } catch (t) {
        return !1;
      }
    })();
    return function () {
      var e,
        r = S(t);
      if (n) {
        var i = S(this).constructor;
        e = Reflect.construct(r, arguments, i);
      } else e = r.apply(this, arguments);
      return O(this, e);
    };
  }
  function gf(t, n) {
    var e = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(t);
      n &&
        (r = r.filter(function (n) {
          return Object.getOwnPropertyDescriptor(t, n).enumerable;
        })),
        e.push.apply(e, r);
    }
    return e;
  }
  function mf(t) {
    for (var n = 1; n < arguments.length; n++) {
      var e = null != arguments[n] ? arguments[n] : {};
      n % 2
        ? gf(Object(e), !0).forEach(function (n) {
            _i(t, n, e[n]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e))
        : gf(Object(e)).forEach(function (n) {
            Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n));
          });
    }
    return t;
  }
  function bf(t, n, e) {
    var r = t.slice();
    return (r[61] = n[e]), r;
  }
  function xf(t, n, e) {
    var r = t.slice();
    return (
      (r[64] = n[e].id),
      (r[65] = n[e].color),
      (r[66] = n[e].name),
      (r[4] = n[e].items),
      (r[67] = n[e].isInactive),
      r
    );
  }
  function wf(t, n, e) {
    var r = t.slice();
    return (r[61] = n[e]), r;
  }
  function _f(t, n, e) {
    var r = t.slice();
    return (
      (r[64] = n[e].id),
      (r[72] = n[e].connection),
      (r[65] = n[e].color),
      (r[66] = n[e].name),
      (r[73] = n[e].labelPos),
      (r[67] = n[e].isInactive),
      r
    );
  }
  function $f(t, n, e) {
    var r = t.slice();
    return (
      (r[76] = n[e].x1),
      (r[77] = n[e].x2),
      (r[78] = n[e].y1),
      (r[79] = n[e].y2),
      (r[80] = n[e].highlighted),
      r
    );
  }
  function Tf(t, n, e) {
    var r = t.slice();
    return (
      (r[64] = n[e].id),
      (r[83] = n[e].area),
      (r[65] = n[e].color),
      (r[84] = n[e].isActive),
      (r[67] = n[e].isInactive),
      r
    );
  }
  function Mf(t, n) {
    var e, r, i, o, u;
    return {
      key: t,
      first: null,
      c: function () {
        (e = nt("path")),
          (i = nt("path")),
          ut(e, "class", "connection-background__bg svelte-19thtel"),
          ut(e, "d", (r = n[83])),
          ht(e, "is-inactive", n[67]),
          ut(i, "class", "connection-background svelte-19thtel"),
          ut(i, "d", (o = n[83])),
          ut(i, "fill", (u = n[65])),
          ht(i, "is-active", n[84]),
          ht(i, "is-inactive", n[67]),
          (this.first = e);
      },
      m: function (t, n) {
        J(t, e, n), J(t, i, n);
      },
      p: function (t, c) {
        (n = t),
          4194304 & c[0] && r !== (r = n[83]) && ut(e, "d", r),
          4194304 & c[0] && ht(e, "is-inactive", n[67]),
          4194304 & c[0] && o !== (o = n[83]) && ut(i, "d", o),
          4194304 & c[0] && u !== (u = n[65]) && ut(i, "fill", u),
          4194304 & c[0] && ht(i, "is-active", n[84]),
          4194304 & c[0] && ht(i, "is-inactive", n[67]);
      },
      d: function (t) {
        t && Q(e), t && Q(i);
      },
    };
  }
  function kf(t) {
    var n, e, r, i, o;
    return {
      c: function () {
        ut((n = nt("line")), "class", "event__line svelte-19thtel"),
          ut(n, "x1", (e = t[76])),
          ut(n, "x2", (r = t[77])),
          ut(n, "y1", (i = t[78])),
          ut(n, "y2", (o = t[79])),
          ht(n, "is-highlighted", t[80]);
      },
      m: function (t, e) {
        J(t, n, e);
      },
      p: function (t, u) {
        8388608 & u[0] && e !== (e = t[76]) && ut(n, "x1", e),
          8388608 & u[0] && r !== (r = t[77]) && ut(n, "x2", r),
          8388608 & u[0] && i !== (i = t[78]) && ut(n, "y1", i),
          8388608 & u[0] && o !== (o = t[79]) && ut(n, "y2", o),
          8388608 & u[0] && ht(n, "is-highlighted", t[80]);
      },
      d: function (t) {
        t && Q(n);
      },
    };
  }
  function jf(t) {
    var n, e;
    return (
      (n = new Fa({
        props: {
          width: t[0],
          height: t[1],
          xScale: t[19],
          yRange: [t[18], 0],
          ticks: 6,
          formatTick: t[48],
        },
      })),
      {
        c: function () {
          Rt(n.$$.fragment);
        },
        m: function (t, r) {
          Nt(n, t, r), (e = !0);
        },
        p: function (t, e) {
          var r = {};
          1 & e[0] && (r.width = t[0]),
            2 & e[0] && (r.height = t[1]),
            524288 & e[0] && (r.xScale = t[19]),
            262144 & e[0] && (r.yRange = [t[18], 0]),
            4 & e[0] && (r.formatTick = t[48]),
            n.$set(r);
        },
        i: function (t) {
          e || (Lt(n.$$.fragment, t), (e = !0));
        },
        o: function (t) {
          Ot(n.$$.fragment, t), (e = !1);
        },
        d: function (t) {
          Pt(n, t);
        },
      }
    );
  }
  function Cf(t) {
    var n, e;
    return (
      (n = new Za({
        props: {
          dxTick: "10",
          margin: t[13],
          xRange: [0, t[17]],
          yScale: t[19],
          ticks: 6,
          formatTick: t[47],
        },
      })),
      {
        c: function () {
          Rt(n.$$.fragment);
        },
        m: function (t, r) {
          Nt(n, t, r), (e = !0);
        },
        p: function (t, e) {
          var r = {};
          8192 & e[0] && (r.margin = t[13]),
            131072 & e[0] && (r.xRange = [0, t[17]]),
            524288 & e[0] && (r.yScale = t[19]),
            4 & e[0] && (r.formatTick = t[47]),
            n.$set(r);
        },
        i: function (t) {
          e || (Lt(n.$$.fragment, t), (e = !0));
        },
        o: function (t) {
          Ot(n.$$.fragment, t), (e = !1);
        },
        d: function (t) {
          Pt(n, t);
        },
      }
    );
  }
  function Af(t) {
    var n, e, r, i, o;
    return {
      c: function () {
        ut((n = nt("line")), "class", "hover-line svelte-19thtel"),
          ut(n, "x1", (e = t[24].x1)),
          ut(n, "x2", (r = t[24].x2)),
          ut(n, "y1", (i = t[24].y1)),
          ut(n, "y2", (o = t[24].y2));
      },
      m: function (t, e) {
        J(t, n, e);
      },
      p: function (t, u) {
        16777216 & u[0] && e !== (e = t[24].x1) && ut(n, "x1", e),
          16777216 & u[0] && r !== (r = t[24].x2) && ut(n, "x2", r),
          16777216 & u[0] && i !== (i = t[24].y1) && ut(n, "y1", i),
          16777216 & u[0] && o !== (o = t[24].y2) && ut(n, "y2", o);
      },
      d: function (t) {
        t && Q(n);
      },
    };
  }
  function Lf(t) {
    var n,
      e,
      r,
      i,
      o,
      u,
      c = t[66] + "";
    function a() {
      return t[49](t[64]);
    }
    return {
      c: function () {
        (n = nt("text")),
          (e = et(c)),
          ut(n, "class", "label svelte-19thtel"),
          ut(n, "x", (r = t[73].x)),
          ut(n, "y", (i = t[73].y)),
          ut(n, "dy", "0.3em");
      },
      m: function (r, i) {
        J(r, n, i),
          X(n, e),
          o ||
            ((u = [ot(n, "mouseover", a), ot(n, "mouseout", t[50])]), (o = !0));
      },
      p: function (o, u) {
        (t = o),
          4194304 & u[0] && c !== (c = t[66] + "") && at(e, c),
          4194304 & u[0] && r !== (r = t[73].x) && ut(n, "x", r),
          4194304 & u[0] && i !== (i = t[73].y) && ut(n, "y", i);
      },
      d: function (t) {
        t && Q(n), (o = !1), B(u);
      },
    };
  }
  function Of(t) {
    var n,
      e,
      r,
      i = t[66] + "";
    return {
      c: function () {
        (n = nt("text")),
          (e = et(i)),
          ut(n, "class", "label svelte-19thtel"),
          ut(n, "dy", "0.5em"),
          ut(n, "dx", "-0.3em"),
          ut(
            n,
            "style",
            (r = "transform:translate("
              .concat(t[73].x, "px,")
              .concat(t[73].y, "px) rotate(45deg)"))
          );
      },
      m: function (t, r) {
        J(t, n, r), X(n, e);
      },
      p: function (t, o) {
        4194304 & o[0] && i !== (i = t[66] + "") && at(e, i),
          4194304 & o[0] &&
            r !==
              (r = "transform:translate("
                .concat(t[73].x, "px,")
                .concat(t[73].y, "px) rotate(45deg)")) &&
            ut(n, "style", r);
      },
      d: function (t) {
        t && Q(n);
      },
    };
  }
  function Sf(t, n) {
    var e, r, i, o, u, c;
    function a(t, n) {
      return t[11] ? Of : Lf;
    }
    var f = a(n),
      l = f(n);
    return {
      key: t,
      first: null,
      c: function () {
        (e = nt("g")),
          (r = nt("path")),
          (o = nt("path")),
          l.c(),
          ut(r, "class", "connection-bg svelte-19thtel"),
          ut(r, "d", (i = n[72])),
          ut(o, "class", "connection svelte-19thtel"),
          ut(o, "d", (u = n[72])),
          ut(o, "stroke", (c = n[65])),
          ut(e, "class", "svelte-19thtel"),
          ht(e, "is-inactive", n[67]),
          (this.first = e);
      },
      m: function (t, n) {
        J(t, e, n), X(e, r), X(e, o), l.m(e, null);
      },
      p: function (t, s) {
        (n = t),
          4194304 & s[0] && i !== (i = n[72]) && ut(r, "d", i),
          4194304 & s[0] && u !== (u = n[72]) && ut(o, "d", u),
          4194304 & s[0] && c !== (c = n[65]) && ut(o, "stroke", c),
          f === (f = a(n)) && l
            ? l.p(n, s)
            : (l.d(1), (l = f(n)) && (l.c(), l.m(e, null))),
          4194304 & s[0] && ht(e, "is-inactive", n[67]);
      },
      d: function (t) {
        t && Q(e), l.d();
      },
    };
  }
  function Ef(t, n) {
    var e, r, i, o, u, c, a;
    function f() {
      return n[51](n[61], n[66]);
    }
    function l() {
      return n[52](n[61], n[66]);
    }
    return {
      key: t,
      first: null,
      c: function () {
        ut((e = nt("circle")), "class", "point svelte-19thtel"),
          ut(e, "cx", (r = n[61].x)),
          ut(e, "cy", (i = n[61].y)),
          ut(e, "r", (o = n[61].r)),
          ut(e, "fill", (u = n[65])),
          ht(e, "is-inactive", n[67]),
          (this.first = e);
      },
      m: function (t, r) {
        J(t, e, r),
          c ||
            ((a = [
              ot(e, "click", f),
              ot(e, "mouseover", l),
              ot(e, "mouseout", n[53]),
            ]),
            (c = !0));
      },
      p: function (t, c) {
        (n = t),
          4194304 & c[0] && r !== (r = n[61].x) && ut(e, "cx", r),
          4194304 & c[0] && i !== (i = n[61].y) && ut(e, "cy", i),
          4194304 & c[0] && o !== (o = n[61].r) && ut(e, "r", o),
          4194304 & c[0] && u !== (u = n[65]) && ut(e, "fill", u),
          4194304 & c[0] && ht(e, "is-inactive", n[67]);
      },
      d: function (t) {
        t && Q(e), (c = !1), B(a);
      },
    };
  }
  function Df(t, n) {
    for (
      var e,
        r,
        i = [],
        o = new Map(),
        u = n[4],
        c = function (t) {
          return t[61].id;
        },
        a = 0;
      a < u.length;
      a += 1
    ) {
      var f = wf(n, u, a),
        l = c(f);
      o.set(l, (i[a] = Ef(l, f)));
    }
    return {
      key: t,
      first: null,
      c: function () {
        e = it();
        for (var t = 0; t < i.length; t += 1) i[t].c();
        (r = it()), (this.first = e);
      },
      m: function (t, n) {
        J(t, e, n);
        for (var o = 0; o < i.length; o += 1) i[o].m(t, n);
        J(t, r, n);
      },
      p: function (t, e) {
        (n = t),
          71303392 & e[0] &&
            ((u = n[4]),
            (i = Dt(i, e, c, 1, n, u, o, r.parentNode, St, Ef, r, wf)));
      },
      d: function (t) {
        t && Q(e);
        for (var n = 0; n < i.length; n += 1) i[n].d(t);
        t && Q(r);
      },
    };
  }
  function Rf(t, n) {
    var e, r, i;
    return (
      (r = new vf({
        props: {
          x: n[61].x,
          y: n[61].y,
          height: n[15],
          width: n[16],
          containerWidth: n[0],
          containerHeight: n[1],
          date: n[61].date,
          info: n[61].info,
          details: n[61].detailed,
          iconRadius: Pf,
          isHighlighted: n[61].highlighted,
          isMinified: n[11] || n[12],
          isSelected: null !== n[10] && n[10].id === n[61].id,
          isOpen: null !== n[21] && n[21].id === n[61].id,
          showClose: n[3],
        },
      })).$on("iconclick", function () {
        return n[54](n[61]);
      }),
      r.$on("iconmouseover", function () {
        return n[55](n[61]);
      }),
      r.$on("iconmouseout", n[56]),
      r.$on("textmouseover", function () {
        return n[57](n[61]);
      }),
      r.$on("textmouseout", n[58]),
      r.$on("texttap", function () {
        return n[59](n[61]);
      }),
      r.$on("closeclick", n[60]),
      {
        key: t,
        first: null,
        c: function () {
          (e = it()), Rt(r.$$.fragment), (this.first = e);
        },
        m: function (t, n) {
          J(t, e, n), Nt(r, t, n), (i = !0);
        },
        p: function (t, e) {
          n = t;
          var i = {};
          1048576 & e[0] && (i.x = n[61].x),
            1048576 & e[0] && (i.y = n[61].y),
            32768 & e[0] && (i.height = n[15]),
            65536 & e[0] && (i.width = n[16]),
            1 & e[0] && (i.containerWidth = n[0]),
            2 & e[0] && (i.containerHeight = n[1]),
            1048576 & e[0] && (i.date = n[61].date),
            1048576 & e[0] && (i.info = n[61].info),
            1048576 & e[0] && (i.details = n[61].detailed),
            1048576 & e[0] && (i.isHighlighted = n[61].highlighted),
            6144 & e[0] && (i.isMinified = n[11] || n[12]),
            1049600 & e[0] &&
              (i.isSelected = null !== n[10] && n[10].id === n[61].id),
            3145728 & e[0] &&
              (i.isOpen = null !== n[21] && n[21].id === n[61].id),
            8 & e[0] && (i.showClose = n[3]),
            r.$set(i);
        },
        i: function (t) {
          i || (Lt(r.$$.fragment, t), (i = !0));
        },
        o: function (t) {
          Ot(r.$$.fragment, t), (i = !1);
        },
        d: function (t) {
          t && Q(e), Pt(r, t);
        },
      }
    );
  }
  function Nf(t) {
    for (
      var n,
        e,
        r,
        i,
        o,
        u,
        c,
        a,
        f,
        l,
        s,
        h,
        d,
        p,
        v,
        y,
        g,
        m,
        b,
        x,
        w = [],
        _ = new Map(),
        $ = [],
        T = new Map(),
        M = [],
        k = new Map(),
        j = [],
        C = new Map(),
        A = t[22],
        L = function (t) {
          return t[64];
        },
        O = 0;
      O < A.length;
      O += 1
    ) {
      var S = Tf(t, A, O),
        E = L(S);
      _.set(E, (w[O] = Mf(E, S)));
    }
    for (var D = t[23], R = [], N = 0; N < D.length; N += 1)
      R[N] = kf($f(t, D, N));
    var P = [Cf, jf],
      U = [];
    function F(t, n) {
      return t[11] ? 0 : 1;
    }
    (h = F(t)), (d = U[h] = P[h](t));
    for (
      var H = ((t[24] && t[5]) || t[8]) && Af(t),
        z = t[22],
        B = function (t) {
          return t[64];
        },
        I = 0;
      I < z.length;
      I += 1
    ) {
      var Y = _f(t, z, I),
        q = B(Y);
      T.set(q, ($[I] = Sf(q, Y)));
    }
    for (
      var W = t[22],
        Z = function (t) {
          return t[64];
        },
        V = 0;
      V < W.length;
      V += 1
    ) {
      var G = xf(t, W, V),
        et = Z(G);
      k.set(et, (M[V] = Df(et, G)));
    }
    for (
      var ot = t[20],
        ct = function (t) {
          return t[61].id;
        },
        at = 0;
      at < ot.length;
      at += 1
    ) {
      var ft = bf(t, ot, at),
        lt = ct(ft);
      C.set(lt, (j[at] = Rf(lt, ft)));
    }
    return {
      c: function () {
        (n = tt("div")),
          (e = tt("div")),
          (r = nt("svg")),
          (i = nt("rect")),
          (f = nt("g"));
        for (var h = 0; h < w.length; h += 1) w[h].c();
        l = it();
        for (var x = 0; x < R.length; x += 1) R[x].c();
        (s = it()), d.c(), (p = it()), H && H.c(), (v = it());
        for (var _ = 0; _ < $.length; _ += 1) $[_].c();
        y = it();
        for (var T = 0; T < M.length; T += 1) M[T].c();
        (m = rt()), (b = tt("div"));
        for (var k = 0; k < j.length; k += 1) j[k].c();
        ut(i, "class", "event-background svelte-19thtel"),
          ut(i, "x", (o = t[25].x)),
          ut(i, "y", (u = t[25].y)),
          ut(i, "width", (c = t[25].width)),
          ut(i, "height", (a = t[25].height)),
          ut(
            f,
            "transform",
            (g = "translate(" + (t[13].left + t[14]) + "," + t[13].top + ")")
          ),
          ut(r, "class", "timeline__svg svelte-19thtel"),
          ut(r, "width", t[0]),
          ut(r, "height", t[1]),
          ut(b, "class", "timeline__html svelte-19thtel"),
          ut(e, "class", "timeline__wrapper svelte-19thtel"),
          ut(n, "class", "timeline svelte-19thtel");
      },
      m: function (t, o) {
        J(t, n, o), X(n, e), X(e, r), X(r, i), X(r, f);
        for (var u = 0; u < w.length; u += 1) w[u].m(f, null);
        X(f, l);
        for (var c = 0; c < R.length; c += 1) R[c].m(f, null);
        X(f, s), U[h].m(f, null), X(f, p), H && H.m(f, null), X(f, v);
        for (var a = 0; a < $.length; a += 1) $[a].m(f, null);
        X(f, y);
        for (var d = 0; d < M.length; d += 1) M[d].m(f, null);
        X(e, m), X(e, b);
        for (var g = 0; g < j.length; g += 1) j[g].m(b, null);
        x = !0;
      },
      p: function (t, n) {
        if (
          ((!x || (33554432 & n[0] && o !== (o = t[25].x))) && ut(i, "x", o),
          (!x || (33554432 & n[0] && u !== (u = t[25].y))) && ut(i, "y", u),
          (!x || (33554432 & n[0] && c !== (c = t[25].width))) &&
            ut(i, "width", c),
          (!x || (33554432 & n[0] && a !== (a = t[25].height))) &&
            ut(i, "height", a),
          4194304 & n[0] &&
            ((A = t[22]), (w = Dt(w, n, L, 1, t, A, _, f, St, Mf, l, Tf))),
          8388608 & n[0])
        ) {
          var e;
          for (D = t[23], e = 0; e < D.length; e += 1) {
            var m = $f(t, D, e);
            R[e] ? R[e].p(m, n) : ((R[e] = kf(m)), R[e].c(), R[e].m(f, s));
          }
          for (; e < R.length; e += 1) R[e].d(1);
          R.length = D.length;
        }
        var O = h;
        (h = F(t)) === O
          ? U[h].p(t, n)
          : (Ct(),
            Ot(U[O], 1, 1, function () {
              U[O] = null;
            }),
            At(),
            (d = U[h]) ? d.p(t, n) : (d = U[h] = P[h](t)).c(),
            Lt(d, 1),
            d.m(f, p)),
          (t[24] && t[5]) || t[8]
            ? H
              ? H.p(t, n)
              : ((H = Af(t)).c(), H.m(f, v))
            : H && (H.d(1), (H = null)),
          4196480 & n[0] &&
            ((z = t[22]), ($ = Dt($, n, B, 1, t, z, T, f, St, Sf, y, _f))),
          71303392 & n[0] &&
            ((W = t[22]), (M = Dt(M, n, Z, 1, t, W, k, f, St, Df, null, xf))),
          (!x ||
            (24576 & n[0] &&
              g !==
                (g =
                  "translate(" +
                  (t[13].left + t[14]) +
                  "," +
                  t[13].top +
                  ")"))) &&
            ut(f, "transform", g),
          (!x || 1 & n[0]) && ut(r, "width", t[0]),
          (!x || 2 & n[0]) && ut(r, "height", t[1]),
          70360587 & n[0] &&
            ((ot = t[20]),
            Ct(),
            (j = Dt(j, n, ct, 1, t, ot, C, b, Et, Rf, null, bf)),
            At());
      },
      i: function (t) {
        if (!x) {
          Lt(d);
          for (var n = 0; n < ot.length; n += 1) Lt(j[n]);
          x = !0;
        }
      },
      o: function (t) {
        Ot(d);
        for (var n = 0; n < j.length; n += 1) Ot(j[n]);
        x = !1;
      },
      d: function (t) {
        t && Q(n);
        for (var e = 0; e < w.length; e += 1) w[e].d();
        K(R, t), U[h].d(), H && H.d();
        for (var r = 0; r < $.length; r += 1) $[r].d();
        for (var i = 0; i < M.length; i += 1) M[i].d();
        for (var o = 0; o < j.length; o += 1) j[o].d();
      },
    };
  }
  var Pf = 20;
  function Uf(t, n, e) {
    var r,
      i,
      o,
      u,
      c,
      a,
      f,
      l,
      s,
      h,
      d,
      p,
      v,
      y,
      g,
      m,
      b,
      x,
      w,
      _,
      $,
      T,
      M,
      k,
      j,
      C,
      A,
      L;
    q(t, Ma, function (t) {
      return e(46, (L = t));
    });
    var O = pt(),
      S = n.width,
      E = n.height,
      D = n.headerHeight,
      R = n.items,
      N = void 0 === R ? [] : R,
      P = n.events,
      U = void 0 === P ? [] : P,
      F = n.colors,
      H = void 0 === F ? {} : F,
      z = n.months,
      B = void 0 === z ? [] : z,
      I = n.hasTouch,
      Y = void 0 !== I && I,
      W = n.closeTooltip,
      Z = void 0 !== W && W,
      V = 0,
      G = null,
      X = null,
      J = null,
      Q = null,
      K = !1,
      tt = null,
      nt = null,
      et = null;
    return (
      (t.$$set = function (t) {
        "width" in t && e(0, (S = t.width)),
          "height" in t && e(1, (E = t.height)),
          "headerHeight" in t && e(27, (D = t.headerHeight)),
          "items" in t && e(4, (N = t.items)),
          "events" in t && e(28, (U = t.events)),
          "colors" in t && e(29, (H = t.colors)),
          "months" in t && e(2, (B = t.months)),
          "hasTouch" in t && e(3, (Y = t.hasTouch)),
          "closeTooltip" in t && e(30, (Z = t.closeTooltip));
      }),
      (t.$$.update = function () {
        if (
          (268435472 & t.$$.dirty[0] &&
            e(
              33,
              (r = (function () {
                var t = arguments.length;
                if (!t) return [];
                for (var n = Array(t - 1), e = arguments[0], r = t; r--; )
                  n[r - 1] = arguments[r];
                return Oe(nn(e) ? Ln(e) : [e], De(n, 1));
              })(
                Zr(
                  (function (t) {
                    return null != t && t.length ? De(t, 1) : [];
                  })(
                    Zr(N, function (t) {
                      return t.items;
                    })
                  ),
                  function (t) {
                    return t.date;
                  }
                ),
                Zr(U, function (t) {
                  return t.date;
                })
              ))
            ),
          3 & t.$$.dirty[0] && e(11, (i = E > S)),
          3 & t.$$.dirty[0] && e(12, (o = S < 1e3 || E < 600)),
          2048 & t.$$.dirty[0] &&
            e(
              13,
              (u = i
                ? { top: 30, right: 50, bottom: 80, left: 55 }
                : { top: 15, right: 120, bottom: 20, left: 30 })
            ),
          2048 & t.$$.dirty[0] && e(14, (c = i ? 60 : 0)),
          6144 & t.$$.dirty[0] && e(34, (a = i ? (o ? 60 : 0) : o ? 40 : 320)),
          8 & t.$$.dirty[1] && e(15, (f = (a - 15 - 10) / 4)),
          26625 & t.$$.dirty[0] &&
            e(17, (s = i ? S - u.left - u.right - c : S - u.left - u.right)),
          268566528 & t.$$.dirty[0] &&
            e(16, (l = Math.floor((s / U.length) * 1.5))),
          (10242 & t.$$.dirty[0]) | (8 & t.$$.dirty[1]) &&
            e(
              18,
              (h = i ? E - u.top - u.bottom : E - u.top - u.bottom - a - 20)
            ),
          3 & t.$$.dirty[0] && e(35, (d = Math.min(S, E))),
          16 & t.$$.dirty[1] &&
            e(
              36,
              (p = (function () {
                return ru.apply(null, arguments).exponent(0.5);
              })()
                .domain([0, 3])
                .range([2, d / 140]))
            ),
          395264 & t.$$.dirty[0] && e(37, (v = [0, i ? h : s])),
          4 & t.$$.dirty[1] &&
            e(
              38,
              (y = (function (t, n) {
                var e, r;
                if (void 0 === n) {
                  var i,
                    o = ki(t);
                  try {
                    for (o.s(); !(i = o.n()).done; ) {
                      var u = i.value;
                      null != u &&
                        (void 0 === e
                          ? u >= u && (e = r = u)
                          : (e > u && (e = u), r < u && (r = u)));
                    }
                  } catch (t) {
                    o.e(t);
                  } finally {
                    o.f();
                  }
                } else {
                  var c,
                    a = -1,
                    f = ki(t);
                  try {
                    for (f.s(); !(c = f.n()).done; ) {
                      var l = c.value;
                      null != (l = n(l, ++a, t)) &&
                        (void 0 === e
                          ? l >= l && (e = r = l)
                          : (e > l && (e = l), r < l && (r = l)));
                    }
                  } catch (t) {
                    f.e(t);
                  } finally {
                    f.f();
                  }
                }
                return [e, r];
              })(r))
            ),
          192 & t.$$.dirty[1] &&
            e(
              19,
              (g = (function () {
                return Ei.apply(
                  oa(_u, wu, mu, yu, vu, pu, du, cu, Eu).domain([
                    new Date(2e3, 0, 1),
                    new Date(2e3, 0, 2),
                  ]),
                  arguments
                );
              })()
                .domain(y)
                .range(v))
            ),
          (16 & t.$$.dirty[0]) | (1 & t.$$.dirty[1]) &&
            (e(31, (V = 0)),
            qr(N, function (t) {
              var n = 0;
              qr(t.items, function (t) {
                n += t.score;
              }),
                e(31, (V = Math.max(n, V)));
            })),
          395264 & t.$$.dirty[0] && e(39, (m = i ? [0, s] : [h, 0])),
          1 & t.$$.dirty[1] && e(40, (b = [0, V])),
          768 & t.$$.dirty[1] && e(41, (x = Qo().domain(b).range(m))),
          264192 & t.$$.dirty[0] &&
            e(
              42,
              (w = (function (t, n, e) {
                var r = null,
                  i = ha(!0),
                  o = null,
                  u = va,
                  c = null;
                function a(a) {
                  var f,
                    l,
                    s,
                    h,
                    d,
                    p = (a = da(a)).length,
                    v = !1,
                    y = new Array(p),
                    g = new Array(p);
                  for (null == o && (c = u((d = sa()))), f = 0; f <= p; ++f) {
                    if (!(f < p && i((h = a[f]), f, a)) === v)
                      if ((v = !v)) (l = f), c.areaStart(), c.lineStart();
                      else {
                        for (c.lineEnd(), c.lineStart(), s = f - 1; s >= l; --s)
                          c.point(y[s], g[s]);
                        c.lineEnd(), c.areaEnd();
                      }
                    v &&
                      ((y[f] = +t(h, f, a)),
                      (g[f] = +n(h, f, a)),
                      c.point(r ? +r(h, f, a) : y[f], e ? +e(h, f, a) : g[f]));
                  }
                  if (d) return (c = null), d + "" || null;
                }
                function f() {
                  return ma().defined(i).curve(u).context(o);
                }
                return (
                  (t = "function" == typeof t ? t : void 0 === t ? ya : ha(+t)),
                  (n = "function" == typeof n ? n : ha(void 0 === n ? 0 : +n)),
                  (e = "function" == typeof e ? e : void 0 === e ? ga : ha(+e)),
                  (a.x = function (n) {
                    return arguments.length
                      ? ((t = "function" == typeof n ? n : ha(+n)),
                        (r = null),
                        a)
                      : t;
                  }),
                  (a.x0 = function (n) {
                    return arguments.length
                      ? ((t = "function" == typeof n ? n : ha(+n)), a)
                      : t;
                  }),
                  (a.x1 = function (t) {
                    return arguments.length
                      ? ((r =
                          null == t
                            ? null
                            : "function" == typeof t
                            ? t
                            : ha(+t)),
                        a)
                      : r;
                  }),
                  (a.y = function (t) {
                    return arguments.length
                      ? ((n = "function" == typeof t ? t : ha(+t)),
                        (e = null),
                        a)
                      : n;
                  }),
                  (a.y0 = function (t) {
                    return arguments.length
                      ? ((n = "function" == typeof t ? t : ha(+t)), a)
                      : n;
                  }),
                  (a.y1 = function (t) {
                    return arguments.length
                      ? ((e =
                          null == t
                            ? null
                            : "function" == typeof t
                            ? t
                            : ha(+t)),
                        a)
                      : e;
                  }),
                  (a.lineX0 = a.lineY0 = function () {
                    return f().x(t).y(n);
                  }),
                  (a.lineY1 = function () {
                    return f().x(t).y(e);
                  }),
                  (a.lineX1 = function () {
                    return f().x(r).y(n);
                  }),
                  (a.defined = function (t) {
                    return arguments.length
                      ? ((i = "function" == typeof t ? t : ha(!!t)), a)
                      : i;
                  }),
                  (a.curve = function (t) {
                    return arguments.length
                      ? ((u = t), null != o && (c = u(o)), a)
                      : u;
                  }),
                  (a.context = function (t) {
                    return arguments.length
                      ? (null == t ? (o = c = null) : (c = u((o = t))), a)
                      : o;
                  }),
                  a
                );
              })()
                .x(function (t) {
                  return t.x;
                })
                .y1(function (t) {
                  return t.y;
                })
                .y0(h)
                .curve(i ? xa : wa))
            ),
          2048 & t.$$.dirty[0] &&
            e(
              43,
              (_ = ma(
                function (t) {
                  return t.x;
                },
                function (t) {
                  return t.y;
                }
              ).curve(i ? xa : wa))
            ),
          16 & t.$$.dirty[0] &&
            e(
              44,
              ($ = Zr(N, function (t) {
                var n = 0;
                return mf(
                  mf({}, t),
                  {},
                  {
                    items: Zr(t.items, function (t) {
                      return (n += t.score), mf(mf({}, t), {}, { scoreSum: n });
                    }),
                    overAllScore: n,
                  }
                );
              }))
            ),
          (537790464 & t.$$.dirty[0]) | (15520 & t.$$.dirty[1]) &&
            e(
              45,
              (T = ti(
                Zr($, function (t) {
                  var n,
                    e,
                    r = [],
                    o = [];
                  i ? ((n = x(0)), (e = g(y[0]))) : ((n = g(y[0])), (e = x(0))),
                    o.push({ x: n, y: e }),
                    qr(t.items, function (t, n) {
                      var e, u;
                      i
                        ? ((e = x(t.scoreSum)), (u = g(t.date)))
                        : ((e = g(t.date)), (u = x(t.scoreSum))),
                        r.push(
                          mf(
                            mf({}, t),
                            {},
                            { id: n, x: e, y: u, r: p(Math.abs(t.score)) }
                          )
                        ),
                        o.push({ x: e, y: u });
                    });
                  var u,
                    c,
                    a = t.items[t.items.length - 1];
                  a.date !== y[1] &&
                    (i
                      ? ((u = x(t.overAllScore)), (c = g(a.date)))
                      : ((u = g(a.date)), (c = x(t.overAllScore))),
                    o.push({ x: u, y: c }));
                  var f = o[o.length - 1];
                  return (
                    o.push(
                      mf(mf({}, f), {}, i ? { y: h + 10 } : { x: s + 20 })
                    ),
                    (f = o[o.length - 1]),
                    {
                      id: t.id,
                      name: t.name,
                      items: r,
                      color: H[t.id],
                      connection: _(o),
                      area: w(o),
                      labelPos: mf(
                        mf({}, f),
                        {},
                        i ? { y: f.y + 10 } : { x: f.x + 10 }
                      ),
                      overallScore: t.overAllScore,
                    }
                  );
                }),
                "overallScore",
                "desc"
              ))
            ),
          (160 & t.$$.dirty[0]) | (16384 & t.$$.dirty[1]) &&
            e(
              22,
              (M = Zr(T, function (t) {
                return mf(
                  mf({}, t),
                  {},
                  {
                    isActive: null !== Q && t.id === Q,
                    isInactive: null !== Q && t.id !== Q,
                    items: Zr(t.items, function (t) {
                      return mf(
                        mf({}, t),
                        {},
                        { isActive: null !== X && t.id === X.id }
                      );
                    }),
                  }
                );
              }))
            ),
          269334528 & t.$$.dirty[0] &&
            e(
              20,
              (k = ti(
                Zr(U, function (t) {
                  var n = 0,
                    e = 0;
                  return (
                    i
                      ? ((n = 20), (e = g(t.date) + u.top - Pf / 2))
                      : o
                      ? ((n = g(t.date) + u.left - Pf / 2),
                        (e = h + u.top + 30))
                      : ((n = g(t.date) + u.left), (e = h + u.top + 30)),
                    mf(mf({}, t), {}, { x: n, y: e, width: l, height: f })
                  );
                }),
                "date"
              ))
            ),
          1423360 & t.$$.dirty[0])
        ) {
          var n = h + u.top + 30,
            R = Zr(xi(4), function (t, e) {
              return { x: -l, y: n + f * e + 5 * e, width: l, height: f };
            });
          if (!i && !o)
            for (var P = 0; P < k.length; P++)
              for (var F = k[P], z = 0; z < 4; z++) {
                var B = R[z];
                if (
                  ((W = void 0),
                  (et = void 0),
                  (W = I = F),
                  ((et = q = B).x < W.x || et.x + et.width > W.x + W.width) &&
                    !(function (t, n) {
                      return !(t.x >= n.x + n.width || n.x >= t.x + t.width);
                    })(I, q) &&
                    !(function (t, n) {
                      return !(t.x > n.x + n.width || n.x > t.x + t.width);
                    })(I, q))
                ) {
                  (F.y = B.y), (R[z].x = F.x);
                  break;
                }
              }
        }
        var I, q, W, et;
        if (
          (1763328 & t.$$.dirty[0] &&
            e(
              23,
              (j = Zr(k, function (t) {
                var n, e, r, o;
                return (
                  i
                    ? ((n = -c / 2 - u.left), (e = s), (o = r = g(t.date)))
                    : ((e = n = g(t.date)), (r = 0), (o = t.y - u.top + f)),
                  mf(mf({}, t), {}, { x1: n, x2: e, y1: r, y2: o })
                );
              }))
            ),
          (135166241 & t.$$.dirty[0]) | (49154 & t.$$.dirty[1]))
        ) {
          var rt = [];
          if (
            i
              ? L.y >= u.top + D && L.y <= u.top + D + h
              : L.x > u.left && L.x < u.left + s && L.y >= u.top + D
          ) {
            var it = i ? g.invert(L.y - u.top) : g.invert(L.x - u.left),
              ot = Ti(function (t) {
                return t.date;
              });
            if (
              (e(32, (G = it)),
              null !== X ||
                i ||
                o ||
                !(i
                  ? L.x <= c && L.y >= u.top + D && L.y <= u.top + D + h
                  : L.x > u.left && L.x < u.left + s && L.y >= u.top + D + h))
            )
              null === X && K && (O("unhover"), e(8, (K = !1)));
            else if (
              (qr(T, function (t) {
                var n,
                  e = ot.right(t.items, it);
                if (e <= 0) n = void 0;
                else if (e >= t.items.length - 1)
                  n = t.items[t.items.length - 1];
                else {
                  var r = t.items[e - 1],
                    i = t.items[e];
                  n = r && i && it - r.date > i.date - it ? i : r;
                }
                n &&
                  rt.push({
                    id: t.id,
                    name: t.name,
                    score: n.scoreSum,
                    color: t.color,
                  });
              }),
              rt.length > 0)
            ) {
              rt = ti(rt, "score", "desc");
              var ut,
                ct,
                at = [];
              qr(rt, function (t) {
                at.push([
                  { type: "color", value: t.color },
                  { type: "text", value: "".concat(t.name) },
                  { type: "info", value: "".concat(t.score, " interventions") },
                ]);
              }),
                i
                  ? ((ut = S < 400 ? S - 120 : S - 150), (ct = L.y))
                  : ((ut = L.x), (ct = D)),
                O("hover", {
                  header: wi(it),
                  width: 200,
                  items: at,
                  x: ut,
                  y: ct,
                }),
                e(8, (K = !0));
            }
          } else
            null !== G && e(32, (G = null)),
              null === X && K && (O("unhover"), e(8, (K = !1)));
        }
        if (
          ((134817795 & t.$$.dirty[0]) | (2 & t.$$.dirty[1]) &&
            e(
              24,
              (C =
                null !== G
                  ? i
                    ? {
                        x1: -u.left - l - u.right,
                        x2: S - u.left - u.right,
                        y1: -D + g(G),
                        y2: -D + g(G),
                      }
                    : { x1: g(G), x2: g(G), y1: -u.top, y2: E }
                  : null)
            ),
          (288771 & t.$$.dirty[0]) | (8 & t.$$.dirty[1]) &&
            e(
              25,
              (A = i
                ? { x: 0, y: 0, width: c, height: E }
                : { x: 0, y: u.top + h, width: S, height: a + 20 + u.bottom })
            ),
          1073743424 & t.$$.dirty[0] &&
            Z &&
            (null !== J
              ? e(6, (J = null))
              : null !== nt &&
                (e(10, (nt = null)), null !== tt && e(9, (tt = null))),
            O("tooltipclose")),
          134221320 & t.$$.dirty[0] && (null !== tt || null !== nt))
        ) {
          var ft = null !== nt ? nt : tt,
            lt = [[{ type: "text", value: ft.info }]];
          ft.hasLinks &&
            !Y &&
            (lt.push([{ type: "space", value: "small" }]),
            lt.push([
              {
                type: "info",
                value:
                  "Click to freeze the tooltip to be able to reach the link.",
              },
            ])),
            O("hover", {
              header: wi(ft.date),
              width: 200,
              alignment: i ? "WAuto" : "auto",
              showClose: null !== nt,
              items: lt,
              x: i ? ft.x + 20 : ft.x,
              y: ft.y + D,
            });
        }
        if (134244456 & t.$$.dirty[0] && (null !== X || null !== J)) {
          var st = null !== J ? J : X,
            ht = [
              [
                {
                  type: "text",
                  value: ""
                    .concat(st.score > 0 ? "+" : "")
                    .concat(st.score, " insentive")
                    .concat(st.score > 1 ? "s" : ""),
                },
              ],
              [{ type: "space", value: "small" }],
              [{ type: "text", value: "".concat(st.info) }],
            ];
          st.hasLinks &&
            !Y &&
            (ht.push([{ type: "space", value: "small" }]),
            ht.push([
              {
                type: "info",
                value:
                  "Click to freeze the tooltip to be able to reach the link.",
              },
            ])),
            O("hover", {
              header: ""
                .concat(st.platformName, " (")
                .concat(st.scoreSum, " insentive")
                .concat(st.scoreSum > 1 ? "s" : "", ")"),
              width: 200,
              items: ht,
              showClose: null !== J,
              x: null !== J ? (i ? J.x + u.left + c : J.x + u.left) : void 0,
              y: null !== J ? J.y + D + u.top : void 0,
            });
        }
      }),
      [
        S,
        E,
        B,
        Y,
        N,
        X,
        J,
        Q,
        K,
        tt,
        nt,
        i,
        o,
        u,
        c,
        f,
        l,
        s,
        h,
        g,
        k,
        et,
        M,
        j,
        C,
        A,
        O,
        D,
        U,
        H,
        Z,
        V,
        G,
        r,
        a,
        d,
        p,
        v,
        y,
        m,
        b,
        x,
        w,
        _,
        $,
        T,
        L,
        function (t) {
          return ""
            .concat(B[t.getMonth()], " ")
            .concat("".concat(t.getFullYear()).substr(2, 2));
        },
        function (t) {
          return "".concat(B[t.getMonth()], " ").concat(t.getFullYear());
        },
        function (t) {
          e(7, (Q = t));
        },
        function () {
          e(7, (Q = null));
        },
        function (t, n) {
          null === J || J.id !== t.id
            ? (e(6, (J = mf(mf({}, t), {}, { platformName: n }))),
              e(7, (Q = t.platform)))
            : (e(6, (J = null)), O("unhover"));
        },
        function (t, n) {
          e(5, (X = mf(mf({}, t), {}, { platformName: n }))),
            e(7, (Q = t.platform));
        },
        function () {
          e(5, (X = null)), e(7, (Q = null)), null === J && O("unhover");
        },
        function (t) {
          null === nt || nt.id !== t.id
            ? e(10, (nt = t))
            : (e(10, (nt = null)),
              null !== tt && e(9, (tt = null)),
              O("unhover"));
        },
        function (t) {
          null === nt && e(9, (tt = t));
        },
        function () {
          null === nt && (e(9, (tt = null)), O("unhover"));
        },
        function (t) {
          e(21, (et = t));
        },
        function () {
          e(21, (et = null));
        },
        function (t) {
          null === et || (null !== et && et.id !== t.id)
            ? e(21, (et = t))
            : e(21, (et = null));
        },
        function () {
          e(21, (et = null)), O("unhover");
        },
      ]
    );
  }
  var Ff = (function (t) {
      L(e, t);
      var n = yf(e);
      function e(t) {
        var r;
        return (
          j(this, e),
          Ft(
            C((r = n.call(this))),
            t,
            Uf,
            Nf,
            Y,
            {
              width: 0,
              height: 1,
              headerHeight: 27,
              items: 4,
              events: 28,
              colors: 29,
              months: 2,
              hasTouch: 3,
              closeTooltip: 30,
            },
            [-1, -1, -1]
          ),
          r
        );
      }
      return e;
    })(Ht),
    Hf = {},
    zf = {};
  function Bf(t) {
    return new Function(
      "d",
      "return {" +
        t
          .map(function (t, n) {
            return JSON.stringify(t) + ": d[" + n + '] || ""';
          })
          .join(",") +
        "}"
    );
  }
  function If(t) {
    var n = Object.create(null),
      e = [];
    return (
      t.forEach(function (t) {
        for (var r in t) r in n || e.push((n[r] = r));
      }),
      e
    );
  }
  function Yf(t, n) {
    var e = t + "",
      r = e.length;
    return r < n ? new Array(n - r + 1).join(0) + e : e;
  }
  function qf(t) {
    var n = t.getUTCHours(),
      e = t.getUTCMinutes(),
      r = t.getUTCSeconds(),
      i = t.getUTCMilliseconds();
    return isNaN(t)
      ? "Invalid Date"
      : (function (t) {
          return t < 0 ? "-" + Yf(-t, 6) : t > 9999 ? "+" + Yf(t, 6) : Yf(t, 4);
        })(t.getUTCFullYear()) +
          "-" +
          Yf(t.getUTCMonth() + 1, 2) +
          "-" +
          Yf(t.getUTCDate(), 2) +
          (i
            ? "T" +
              Yf(n, 2) +
              ":" +
              Yf(e, 2) +
              ":" +
              Yf(r, 2) +
              "." +
              Yf(i, 3) +
              "Z"
            : r
            ? "T" + Yf(n, 2) + ":" + Yf(e, 2) + ":" + Yf(r, 2) + "Z"
            : e || n
            ? "T" + Yf(n, 2) + ":" + Yf(e, 2) + "Z"
            : "");
  }
  var Wf = (function (t) {
    var n = new RegExp('["' + t + "\n\r]"),
      e = t.charCodeAt(0);
    function r(t, n) {
      var r,
        i = [],
        o = t.length,
        u = 0,
        c = 0,
        a = o <= 0,
        f = !1;
      function l() {
        if (a) return zf;
        if (f) return (f = !1), Hf;
        var n,
          r,
          i = u;
        if (34 === t.charCodeAt(i)) {
          for (
            ;
            (u++ < o && 34 !== t.charCodeAt(u)) || 34 === t.charCodeAt(++u);

          );
          return (
            (n = u) >= o
              ? (a = !0)
              : 10 === (r = t.charCodeAt(u++))
              ? (f = !0)
              : 13 === r && ((f = !0), 10 === t.charCodeAt(u) && ++u),
            t.slice(i + 1, n - 1).replace(/""/g, '"')
          );
        }
        for (; u < o; ) {
          if (10 === (r = t.charCodeAt((n = u++)))) f = !0;
          else if (13 === r) (f = !0), 10 === t.charCodeAt(u) && ++u;
          else if (r !== e) continue;
          return t.slice(i, n);
        }
        return (a = !0), t.slice(i, o);
      }
      for (
        10 === t.charCodeAt(o - 1) && --o, 13 === t.charCodeAt(o - 1) && --o;
        (r = l()) !== zf;

      ) {
        for (var s = []; r !== Hf && r !== zf; ) s.push(r), (r = l());
        (n && null == (s = n(s, c++))) || i.push(s);
      }
      return i;
    }
    function i(n, e) {
      return n.map(function (n) {
        return e
          .map(function (t) {
            return u(n[t]);
          })
          .join(t);
      });
    }
    function o(n) {
      return n.map(u).join(t);
    }
    function u(t) {
      return null == t
        ? ""
        : t instanceof Date
        ? qf(t)
        : n.test((t += ""))
        ? '"' + t.replace(/"/g, '""') + '"'
        : t;
    }
    return {
      parse: function (t, n) {
        var e,
          i,
          o = r(t, function (t, r) {
            if (e) return e(t, r - 1);
            (i = t),
              (e = n
                ? (function (t, n) {
                    var e = Bf(t);
                    return function (r, i) {
                      return n(e(r), i, t);
                    };
                  })(t, n)
                : Bf(t));
          });
        return (o.columns = i || []), o;
      },
      parseRows: r,
      format: function (n, e) {
        return (
          null == e && (e = If(n)),
          [e.map(u).join(t)].concat(i(n, e)).join("\n")
        );
      },
      formatBody: function (t, n) {
        return null == n && (n = If(t)), i(t, n).join("\n");
      },
      formatRows: function (t) {
        return t.map(o).join("\n");
      },
      formatRow: o,
      formatValue: u,
    };
  })(",").parse;
  function Zf(t) {
    if (!t.ok) throw new Error(t.status + " " + t.statusText);
    return t.text();
  }
  function Vf(t, n) {
    return fetch(t, n).then(Zf);
  }
  var Gf,
    Xf =
      ((Gf = Wf),
      function (t, n, e) {
        return (
          2 === arguments.length &&
            "function" == typeof n &&
            ((e = n), (n = void 0)),
          Vf(t, n).then(function (t) {
            return Gf(t, e);
          })
        );
      }),
    Jf = {
      facebook: "Facebook",
      tiktok: "TikTok",
      twitter: "Twitter",
      youtube: "YouTube",
    },
    Qf = {
      facebook: "#7673FC",
      tiktok: "#FFC824",
      twitter: "#73B7FC",
      youtube: "#FF3858",
    },
    Kf = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
  function tl(t, n) {
    var e = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(t);
      n &&
        (r = r.filter(function (n) {
          return Object.getOwnPropertyDescriptor(t, n).enumerable;
        })),
        e.push.apply(e, r);
    }
    return e;
  }
  function nl(t) {
    for (var n = 1; n < arguments.length; n++) {
      var e = null != arguments[n] ? arguments[n] : {};
      n % 2
        ? tl(Object(e), !0).forEach(function (n) {
            _i(t, n, e[n]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e))
        : tl(Object(e)).forEach(function (n) {
            Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n));
          });
    }
    return t;
  }
  var el = $a([], function (t) {
      Xf("./data/platforms.csv", function (t, n) {
        return nl(
          nl({ id: n }, t),
          {},
          {
            date: new Date(t.date),
            score: +t.score,
            hasLinks: void 0 !== t.link,
          }
        );
      }).then(function (n) {
        t(
          Zr(Jr(n, "platform"), function (t, n) {
            return { id: n, name: Jf[n], items: ti(t, "date") };
          })
        );
      });
    }),
    rl = $a([], function (t) {
      Xf("./data/political-events.csv", function (t, n) {
        return nl(
          nl({ id: n }, t),
          {},
          {
            date: new Date(t.date),
            highlighted: 1 == t.highlighted,
            hasLinks: -1 !== t.info.indexOf("href="),
          }
        );
      }).then(function (n) {
        t(ti(n, "date"));
      });
    });
  function il(t) {
    var n = (function () {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;
      try {
        return (
          Date.prototype.toString.call(
            Reflect.construct(Date, [], function () {})
          ),
          !0
        );
      } catch (t) {
        return !1;
      }
    })();
    return function () {
      var e,
        r = S(t);
      if (n) {
        var i = S(this).constructor;
        e = Reflect.construct(r, arguments, i);
      } else e = r.apply(this, arguments);
      return O(this, e);
    };
  }
  function ol(t) {
    var n, e;
    return (
      (n = new Ff({
        props: {
          items: t[0],
          events: t[1],
          colors: Qf,
          months: Kf,
          width: t[2],
          height: t[3],
          headerHeight: t[6],
          hasTouch: t[5],
          closeTooltip: t[7],
        },
      })).$on("hover", t[8]),
      n.$on("unhover", t[9]),
      n.$on("tooltipclose", t[10]),
      {
        c: function () {
          Rt(n.$$.fragment);
        },
        m: function (t, r) {
          Nt(n, t, r), (e = !0);
        },
        p: function (t, e) {
          var r = {};
          1 & e && (r.items = t[0]),
            2 & e && (r.events = t[1]),
            4 & e && (r.width = t[2]),
            8 & e && (r.height = t[3]),
            64 & e && (r.headerHeight = t[6]),
            32 & e && (r.hasTouch = t[5]),
            128 & e && (r.closeTooltip = t[7]),
            n.$set(r);
        },
        i: function (t) {
          e || (Lt(n.$$.fragment, t), (e = !0));
        },
        o: function (t) {
          Ot(n.$$.fragment, t), (e = !1);
        },
        d: function (t) {
          Pt(n, t);
        },
      }
    );
  }
  function ul(t) {
    var n,
      e,
      r,
      i = t[4] && ol(t);
    return {
      c: function () {
        (n = tt("div")),
          i && i.c(),
          ut(n, "class", "chart-container svelte-emj4au"),
          wt(function () {
            return t[11].call(n);
          });
      },
      m: function (o, u) {
        J(o, n, u), i && i.m(n, null), (e = st(n, t[11].bind(n))), (r = !0);
      },
      p: function (t, e) {
        var r = R(e, 1)[0];
        t[4]
          ? i
            ? (i.p(t, r), 16 & r && Lt(i, 1))
            : ((i = ol(t)).c(), Lt(i, 1), i.m(n, null))
          : i &&
            (Ct(),
            Ot(i, 1, 1, function () {
              i = null;
            }),
            At());
      },
      i: function (t) {
        r || (Lt(i), (r = !0));
      },
      o: function (t) {
        Ot(i), (r = !1);
      },
      d: function (t) {
        t && Q(n), i && i.d(), e();
      },
    };
  }
  function cl(t, n, e) {
    var r, i, o, u, c, a, f, l;
    q(t, el, function (t) {
      return e(0, (o = t));
    }),
      q(t, rl, function (t) {
        return e(1, (u = t));
      }),
      q(t, Aa, function (t) {
        return e(6, (c = t));
      }),
      q(t, Ca, function (t) {
        return e(7, (a = t));
      });
    return (
      (t.$$.update = function () {
        3 & t.$$.dirty && e(4, (r = 0 !== o.length && 0 !== u.length));
      }),
      e(
        5,
        (i =
          "ontouchstart" in window ||
          navigator.maxTouchPoints > 0 ||
          navigator.msMaxTouchPoints > 0)
      ),
      [
        o,
        u,
        f,
        l,
        r,
        i,
        c,
        a,
        function (t) {
          ja.set(t.detail);
        },
        function (t) {
          ja.set(null);
        },
        function (t) {
          ja.set(null), Ca.set(!1);
        },
        function () {
          (f = this.offsetWidth), (l = this.offsetHeight), e(2, f), e(3, l);
        },
      ]
    );
  }
  var al = (function (t) {
    L(e, t);
    var n = il(e);
    function e(t) {
      var r;
      return j(this, e), Ft(C((r = n.call(this))), t, cl, ul, Y, {}), r;
    }
    return e;
  })(Ht);
  function fl(t) {
    var n = (function () {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;
      try {
        return (
          Date.prototype.toString.call(
            Reflect.construct(Date, [], function () {})
          ),
          !0
        );
      } catch (t) {
        return !1;
      }
    })();
    return function () {
      var e,
        r = S(t);
      if (n) {
        var i = S(this).constructor;
        e = Reflect.construct(r, arguments, i);
      } else e = r.apply(this, arguments);
      return O(this, e);
    };
  }
  function ll(t) {
    var n,
      e,
      r,
      i,
      o = t[2].default,
      u = W(o, t, t[1], null);
    return {
      c: function () {
        (n = tt("header")),
          (e = tt("h1")),
          u && u.c(),
          ut(e, "class", "svelte-12z2y5s"),
          ut(n, "class", "header svelte-12z2y5s"),
          wt(function () {
            return t[3].call(n);
          });
      },
      m: function (o, c) {
        J(o, n, c),
          X(n, e),
          u && u.m(e, null),
          (r = st(n, t[3].bind(n))),
          (i = !0);
      },
      p: function (t, n) {
        var e = R(n, 1)[0];
        u && u.p && 2 & e && V(u, o, t, t[1], e, null, null);
      },
      i: function (t) {
        i || (Lt(u, t), (i = !0));
      },
      o: function (t) {
        Ot(u, t), (i = !1);
      },
      d: function (t) {
        t && Q(n), u && u.d(t), r();
      },
    };
  }
  function sl(t, n, e) {
    var r = n.$$slots,
      i = void 0 === r ? {} : r,
      o = n.$$scope,
      u = n.height;
    return (
      (t.$$set = function (t) {
        "height" in t && e(0, (u = t.height)),
          "$$scope" in t && e(1, (o = t.$$scope));
      }),
      [
        u,
        o,
        i,
        function () {
          (u = this.offsetHeight), e(0, u);
        },
      ]
    );
  }
  var hl = (function (t) {
    L(e, t);
    var n = fl(e);
    function e(t) {
      var r;
      return (
        j(this, e), Ft(C((r = n.call(this))), t, sl, ll, Y, { height: 0 }), r
      );
    }
    return e;
  })(Ht);
  function dl(t) {
    var n = (function () {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;
      try {
        return (
          Date.prototype.toString.call(
            Reflect.construct(Date, [], function () {})
          ),
          !0
        );
      } catch (t) {
        return !1;
      }
    })();
    return function () {
      var e,
        r = S(t);
      if (n) {
        var i = S(this).constructor;
        e = Reflect.construct(r, arguments, i);
      } else e = r.apply(this, arguments);
      return O(this, e);
    };
  }
  function pl(t) {
    var n, e, r;
    return (
      (e = new uf({})).$on("click", t[18]),
      {
        c: function () {
          (n = tt("div")),
            Rt(e.$$.fragment),
            ut(n, "class", "tooltip__close svelte-1ywhj2n");
        },
        m: function (t, i) {
          J(t, n, i), Nt(e, n, null), (r = !0);
        },
        p: F,
        i: function (t) {
          r || (Lt(e.$$.fragment, t), (r = !0));
        },
        o: function (t) {
          Ot(e.$$.fragment, t), (r = !1);
        },
        d: function (t) {
          t && Q(n), Pt(e);
        },
      }
    );
  }
  function vl(t) {
    var n,
      e,
      r,
      i,
      o,
      u,
      c = t[0] && pl(t),
      a = t[17].default,
      f = W(a, t, t[16], null);
    return {
      c: function () {
        (n = tt("div")),
          (e = tt("div")),
          c && c.c(),
          (r = rt()),
          f && f.c(),
          ut(e, "class", "tooltip svelte-1ywhj2n"),
          ut(
            e,
            "style",
            (i = "position:absolute; "
              .concat(t[4], " padding:10px; background:#fff;\n    width:")
              .concat(
                t[2],
                "px; box-shadow:rgba(0,0,0, .2) 0px 0px 10px; transform:\n    translate("
              )
              .concat(t[5], ",")
              .concat(t[6], ");pointer-events:none"))
          ),
          ut(
            n,
            "style",
            (o = "\n    position: absolute; \n    z-index: 99999; \n    top: "
              .concat(t[1], "px; \n    left: ")
              .concat(t[3], "px; \n    pointer-events:none'"))
          );
      },
      m: function (t, i) {
        J(t, n, i),
          X(n, e),
          c && c.m(e, null),
          X(e, r),
          f && f.m(e, null),
          (u = !0);
      },
      p: function (t, l) {
        var s = R(l, 1)[0];
        t[0]
          ? c
            ? (c.p(t, s), 1 & s && Lt(c, 1))
            : ((c = pl(t)).c(), Lt(c, 1), c.m(e, r))
          : c &&
            (Ct(),
            Ot(c, 1, 1, function () {
              c = null;
            }),
            At()),
          f && f.p && 65536 & s && V(f, a, t, t[16], s, null, null),
          (!u ||
            (116 & s &&
              i !==
                (i = "position:absolute; "
                  .concat(t[4], " padding:10px; background:#fff;\n    width:")
                  .concat(
                    t[2],
                    "px; box-shadow:rgba(0,0,0, .2) 0px 0px 10px; transform:\n    translate("
                  )
                  .concat(t[5], ",")
                  .concat(t[6], ");pointer-events:none")))) &&
            ut(e, "style", i),
          (!u ||
            (10 & s &&
              o !==
                (o = "\n    position: absolute; \n    z-index: 99999; \n    top: "
                  .concat(t[1], "px; \n    left: ")
                  .concat(t[3], "px; \n    pointer-events:none'")))) &&
            ut(n, "style", o);
      },
      i: function (t) {
        u || (Lt(c), Lt(f, t), (u = !0));
      },
      o: function (t) {
        Ot(c), Ot(f, t), (u = !1);
      },
      d: function (t) {
        t && Q(n), c && c.d(), f && f.d(t);
      },
    };
  }
  function yl(t, n, e) {
    var r, i, o, u, c;
    q(t, ka, function (t) {
      return e(13, (c = t));
    });
    var a = n.$$slots,
      f = void 0 === a ? {} : a,
      l = n.$$scope,
      s = n.width,
      h = void 0 === s ? 500 : s,
      d = n.x,
      p = n.y,
      v = n.alignment,
      y = void 0 === v ? "auto" : v,
      g = n.showClose,
      m = void 0 !== g && g,
      b = "",
      x = "",
      w = "",
      _ = "",
      $ = "",
      T = pt();
    return (
      (t.$$set = function (t) {
        "width" in t && e(8, (h = t.width)),
          "x" in t && e(9, (d = t.x)),
          "y" in t && e(10, (p = t.y)),
          "alignment" in t && e(11, (y = t.alignment)),
          "showClose" in t && e(0, (m = t.showClose)),
          "$$scope" in t && e(16, (l = t.$$scope));
      }),
      (t.$$.update = function () {
        256 & t.$$.dirty && e(2, (r = h)),
          8192 & t.$$.dirty && e(12, (i = c.width)),
          8192 & t.$$.dirty && e(14, (o = c.height)),
          4 & t.$$.dirty && e(15, (u = (r + 20) / 2)),
          56834 & t.$$.dirty &&
            (e(1, (x = p)),
            e(
              3,
              (b = "auto" === y ? (d - u < 0 ? u : d + u > i ? i - u : d) : d)
            ),
            "auto" === y
              ? e(4, (w = x < o / 2 ? "top:15px;" : "bottom: 15px;"))
              : "N" === y || "NW" === y || "NE" === y
              ? e(4, (w = "top: 15px;"))
              : "S" === y || "SW" === y || "SE" === y
              ? e(4, (w = "bottom: 15px;"))
              : "E" === y
              ? e(4, (w = "left: -15px;"))
              : "W" === y
              ? e(4, (w = "right: -15px;"))
              : "WAuto" === y
              ? e(
                  4,
                  (w =
                    x < o / 2
                      ? "top:0px;right: -15px;"
                      : "bottom: 0px;right: -15px;")
                )
              : "EAuto" === y &&
                e(
                  4,
                  (w =
                    x < o / 2
                      ? "top:0px;left: -15px;"
                      : "bottom: 0px;left: -15px;")
                ),
            "auto" === y || "N" === y || "S" === y
              ? (e(5, (_ = "-50%")), e(6, ($ = "0%")))
              : "NE" === y || "SE" === y
              ? (e(5, (_ = "-100%")), e(6, ($ = "0%")))
              : "E" === y
              ? (e(5, (_ = "-100%")), e(6, ($ = "-50%")))
              : "W" === y
              ? (e(5, (_ = "100%")), e(6, ($ = "-50%")))
              : "WAuto" === y
              ? (e(5, (_ = "100%")), e(6, ($ = "0%")))
              : "WAuto" === y
              ? (e(5, (_ = "-100%")), e(6, ($ = "0%")))
              : (e(5, (_ = "0")), e(6, ($ = "0"))));
      }),
      [
        m,
        x,
        r,
        b,
        w,
        _,
        $,
        T,
        h,
        d,
        p,
        y,
        i,
        c,
        o,
        u,
        l,
        f,
        function () {
          T("close");
        },
      ]
    );
  }
  var gl = (function (t) {
    L(e, t);
    var n = dl(e);
    function e(t) {
      var r;
      return (
        j(this, e),
        Ft(C((r = n.call(this))), t, yl, vl, Y, {
          width: 8,
          x: 9,
          y: 10,
          alignment: 11,
          showClose: 0,
        }),
        r
      );
    }
    return e;
  })(Ht);
  function ml(t) {
    var n = (function () {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;
      try {
        return (
          Date.prototype.toString.call(
            Reflect.construct(Date, [], function () {})
          ),
          !0
        );
      } catch (t) {
        return !1;
      }
    })();
    return function () {
      var e,
        r = S(t);
      if (n) {
        var i = S(this).constructor;
        e = Reflect.construct(r, arguments, i);
      } else e = r.apply(this, arguments);
      return O(this, e);
    };
  }
  function bl(t, n, e) {
    var r = t.slice();
    return (r[9] = n[e]), r;
  }
  function xl(t, n, e) {
    var r = t.slice();
    return (r[12] = n[e].type), (r[13] = n[e].value), r;
  }
  function wl(t) {
    var n, e;
    return (
      (n = new gl({
        props: {
          width: t[2],
          x: t[0],
          y: t[1],
          alignment: t[3],
          showClose: t[4],
          $$slots: { default: [Al] },
          $$scope: { ctx: t },
        },
      })).$on("close", t[8]),
      {
        c: function () {
          Rt(n.$$.fragment);
        },
        m: function (t, r) {
          Nt(n, t, r), (e = !0);
        },
        p: function (t, e) {
          var r = {};
          4 & e && (r.width = t[2]),
            1 & e && (r.x = t[0]),
            2 & e && (r.y = t[1]),
            8 & e && (r.alignment = t[3]),
            16 & e && (r.showClose = t[4]),
            65568 & e && (r.$$scope = { dirty: e, ctx: t }),
            n.$set(r);
        },
        i: function (t) {
          e || (Lt(n.$$.fragment, t), (e = !0));
        },
        o: function (t) {
          Ot(n.$$.fragment, t), (e = !1);
        },
        d: function (t) {
          Pt(n, t);
        },
      }
    );
  }
  function _l(t) {
    var n,
      e,
      r = t[5].header + "";
    return {
      c: function () {
        (n = tt("h3")), (e = et(r)), ut(n, "class", "svelte-jn06ze");
      },
      m: function (t, r) {
        J(t, n, r), X(n, e);
      },
      p: function (t, n) {
        32 & n && r !== (r = t[5].header + "") && at(e, r);
      },
      d: function (t) {
        t && Q(n);
      },
    };
  }
  function $l(t) {
    for (var n, e = t[5].items, r = [], i = 0; i < e.length; i += 1)
      r[i] = Cl(bl(t, e, i));
    return {
      c: function () {
        for (var t = 0; t < r.length; t += 1) r[t].c();
        n = it();
      },
      m: function (t, e) {
        for (var i = 0; i < r.length; i += 1) r[i].m(t, e);
        J(t, n, e);
      },
      p: function (t, i) {
        if (32 & i) {
          var o;
          for (e = t[5].items, o = 0; o < e.length; o += 1) {
            var u = bl(t, e, o);
            r[o]
              ? r[o].p(u, i)
              : ((r[o] = Cl(u)), r[o].c(), r[o].m(n.parentNode, n));
          }
          for (; o < r.length; o += 1) r[o].d(1);
          r.length = e.length;
        }
      },
      d: function (t) {
        K(r, t), t && Q(n);
      },
    };
  }
  function Tl(t) {
    var n, e;
    return {
      c: function () {
        ut(
          (n = tt("div")),
          "class",
          (e =
            G("tooltip__item tooltip__space is-".concat(t[13])) +
            " svelte-jn06ze")
        );
      },
      m: function (t, e) {
        J(t, n, e);
      },
      p: function (t, r) {
        32 & r &&
          e !==
            (e =
              G("tooltip__item tooltip__space is-".concat(t[13])) +
              " svelte-jn06ze") &&
          ut(n, "class", e);
      },
      d: function (t) {
        t && Q(n);
      },
    };
  }
  function Ml(t) {
    var n, e;
    return {
      c: function () {
        ut(
          (n = tt("span")),
          "class",
          (e =
            G("tooltip__item tooltip__item-".concat(t[12])) + " svelte-jn06ze")
        ),
          ft(n, "background-color", t[13]);
      },
      m: function (t, e) {
        J(t, n, e);
      },
      p: function (t, r) {
        32 & r &&
          e !==
            (e =
              G("tooltip__item tooltip__item-".concat(t[12])) +
              " svelte-jn06ze") &&
          ut(n, "class", e),
          32 & r && ft(n, "background-color", t[13]);
      },
      d: function (t) {
        t && Q(n);
      },
    };
  }
  function kl(t) {
    var n,
      e,
      r = t[13] + "";
    return {
      c: function () {
        ut(
          (n = tt("span")),
          "class",
          (e =
            G("tooltip__item tooltip__item-".concat(t[12])) + " svelte-jn06ze")
        );
      },
      m: function (t, e) {
        J(t, n, e), (n.innerHTML = r);
      },
      p: function (t, i) {
        32 & i && r !== (r = t[13] + "") && (n.innerHTML = r),
          32 & i &&
            e !==
              (e =
                G("tooltip__item tooltip__item-".concat(t[12])) +
                " svelte-jn06ze") &&
            ut(n, "class", e);
      },
      d: function (t) {
        t && Q(n);
      },
    };
  }
  function jl(t) {
    var n;
    function e(t, n) {
      return "text" === t[12] ||
        "info" === t[12] ||
        "sub-text" === t[12] ||
        "sub-info" === t[12]
        ? kl
        : "color" === t[12]
        ? Ml
        : "space" === t[12]
        ? Tl
        : void 0;
    }
    var r = e(t),
      i = r && r(t);
    return {
      c: function () {
        i && i.c(), (n = it());
      },
      m: function (t, e) {
        i && i.m(t, e), J(t, n, e);
      },
      p: function (t, o) {
        r === (r = e(t)) && i
          ? i.p(t, o)
          : (i && i.d(1), (i = r && r(t)) && (i.c(), i.m(n.parentNode, n)));
      },
      d: function (t) {
        i && i.d(t), t && Q(n);
      },
    };
  }
  function Cl(t) {
    for (var n, e, r = t[9], i = [], o = 0; o < r.length; o += 1)
      i[o] = jl(xl(t, r, o));
    return {
      c: function () {
        n = tt("div");
        for (var t = 0; t < i.length; t += 1) i[t].c();
        (e = rt()), ut(n, "class", "tooltip__row svelte-jn06ze");
      },
      m: function (t, r) {
        J(t, n, r);
        for (var o = 0; o < i.length; o += 1) i[o].m(n, null);
        X(n, e);
      },
      p: function (t, o) {
        if (32 & o) {
          var u;
          for (r = t[9], u = 0; u < r.length; u += 1) {
            var c = xl(t, r, u);
            i[u] ? i[u].p(c, o) : ((i[u] = jl(c)), i[u].c(), i[u].m(n, e));
          }
          for (; u < i.length; u += 1) i[u].d(1);
          i.length = r.length;
        }
      },
      d: function (t) {
        t && Q(n), K(i, t);
      },
    };
  }
  function Al(t) {
    var n,
      e,
      r,
      i,
      o = t[5].header && _l(t),
      u = t[5].items.length && $l(t);
    return {
      c: function () {
        (n = tt("div")),
          (e = tt("header")),
          o && o.c(),
          (r = rt()),
          (i = tt("div")),
          u && u.c(),
          ut(e, "class", "tooltip__header svelte-jn06ze"),
          ut(i, "class", "tooltip__rows svelte-jn06ze"),
          ut(n, "class", "tooltip__content svelte-jn06ze");
      },
      m: function (t, c) {
        J(t, n, c),
          X(n, e),
          o && o.m(e, null),
          X(n, r),
          X(n, i),
          u && u.m(i, null);
      },
      p: function (t, n) {
        t[5].header
          ? o
            ? o.p(t, n)
            : ((o = _l(t)).c(), o.m(e, null))
          : o && (o.d(1), (o = null)),
          t[5].items.length
            ? u
              ? u.p(t, n)
              : ((u = $l(t)).c(), u.m(i, null))
            : u && (u.d(1), (u = null));
      },
      d: function (t) {
        t && Q(n), o && o.d(), u && u.d();
      },
    };
  }
  function Ll(t) {
    var n,
      e,
      r = null !== t[5] && wl(t);
    return {
      c: function () {
        r && r.c(), (n = it());
      },
      m: function (t, i) {
        r && r.m(t, i), J(t, n, i), (e = !0);
      },
      p: function (t, e) {
        var i = R(e, 1)[0];
        null !== t[5]
          ? r
            ? (r.p(t, i), 32 & i && Lt(r, 1))
            : ((r = wl(t)).c(), Lt(r, 1), r.m(n.parentNode, n))
          : r &&
            (Ct(),
            Ot(r, 1, 1, function () {
              r = null;
            }),
            At());
      },
      i: function (t) {
        e || (Lt(r), (e = !0));
      },
      o: function (t) {
        Ot(r), (e = !1);
      },
      d: function (t) {
        r && r.d(t), t && Q(n);
      },
    };
  }
  function Ol(t, n, e) {
    var r, i, o, u, c, a, f, l;
    q(t, ja, function (t) {
      return e(6, (f = t));
    }),
      q(t, Ma, function (t) {
        return e(7, (l = t));
      });
    return (
      (t.$$.update = function () {
        192 & t.$$.dirty && e(0, (r = f && void 0 !== f.x ? f.x : l.x)),
          192 & t.$$.dirty && e(1, (i = f && void 0 !== f.y ? f.y : l.y)),
          64 & t.$$.dirty &&
            e(2, (o = f && void 0 !== f.width ? f.width : 200)),
          64 & t.$$.dirty &&
            e(3, (u = f && void 0 !== f.alignment ? f.alignment : "auto")),
          64 & t.$$.dirty &&
            e(4, (c = !(!f || void 0 === f.showClose) && f.showClose)),
          64 & t.$$.dirty && e(5, (a = f));
      }),
      [
        r,
        i,
        o,
        u,
        c,
        a,
        f,
        l,
        function () {
          Ca.set(!0);
        },
      ]
    );
  }
  var Sl = (function (t) {
    L(e, t);
    var n = ml(e);
    function e(t) {
      var r;
      return j(this, e), Ft(C((r = n.call(this))), t, Ol, Ll, Y, {}), r;
    }
    return e;
  })(Ht);
  function El(t) {
    var n = (function () {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;
      try {
        return (
          Date.prototype.toString.call(
            Reflect.construct(Date, [], function () {})
          ),
          !0
        );
      } catch (t) {
        return !1;
      }
    })();
    return function () {
      var e,
        r = S(t);
      if (n) {
        var i = S(this).constructor;
        e = Reflect.construct(r, arguments, i);
      } else e = r.apply(this, arguments);
      return O(this, e);
    };
  }
  function Dl(t) {
    var n;
    return {
      c: function () {
        n = et(t[0]);
      },
      m: function (t, e) {
        J(t, n, e);
      },
      p: function (t, e) {
        1 & e && at(n, t[0]);
      },
      d: function (t) {
        t && Q(n);
      },
    };
  }
  function Rl(t) {
    var n, e, r, i, o, u, c, a, f;
    function l(n) {
      t[3].call(null, n);
    }
    var s = { $$slots: { default: [Dl] }, $$scope: { ctx: t } };
    return (
      void 0 !== t[1] && (s.height = t[1]),
      (r = new hl({ props: s })),
      yt.push(function () {
        return (
          (n = "height"),
          (e = l),
          void (
            void 0 !== (i = (t = r).$$.props[n]) &&
            ((t.$$.bound[i] = e), e(t.$$.ctx[i]))
          )
        );
        var t, n, e, i;
      }),
      (u = new al({})),
      (a = new Sl({})),
      {
        c: function () {
          (n = tt("div")),
            (e = tt("div")),
            Rt(r.$$.fragment),
            (o = rt()),
            Rt(u.$$.fragment),
            (c = rt()),
            Rt(a.$$.fragment),
            ut(e, "class", "vis__wrapper"),
            ut(n, "class", "vis");
        },
        m: function (t, i) {
          J(t, n, i),
            X(n, e),
            Nt(r, e, null),
            X(e, o),
            Nt(u, e, null),
            X(n, c),
            Nt(a, n, null),
            (f = !0);
        },
        p: function (t, n) {
          var e,
            o = R(n, 1)[0],
            u = {};
          17 & o && (u.$$scope = { dirty: o, ctx: t }),
            !i &&
              2 & o &&
              ((i = !0),
              (u.height = t[1]),
              (e = function () {
                return (i = !1);
              }),
              mt.push(e)),
            r.$set(u);
        },
        i: function (t) {
          f ||
            (Lt(r.$$.fragment, t),
            Lt(u.$$.fragment, t),
            Lt(a.$$.fragment, t),
            (f = !0));
        },
        o: function (t) {
          Ot(r.$$.fragment, t),
            Ot(u.$$.fragment, t),
            Ot(a.$$.fragment, t),
            (f = !1);
        },
        d: function (t) {
          t && Q(n), Pt(r), Pt(u), Pt(a);
        },
      }
    );
  }
  function Nl(t, n, e) {
    var r, i, o;
    return (
      q(t, Aa, function (t) {
        return e(1, (o = t));
      }),
      (t.$$.update = function () {
        4 & t.$$.dirty &&
          e(
            0,
            (i = void 0 !== r.header ? r.header : "Policy x Platform Timeline")
          );
      }),
      e(
        2,
        (r = (function () {
          if ("" !== window.location.search) {
            var t = {};
            return (
              qr(window.location.search.slice(1).split("&"), function (n) {
                var e = n.split("=");
                t[e[0]] = decodeURIComponent(e[1].trim());
              }),
              t
            );
          }
          return {};
        })())
      ),
      [
        i,
        o,
        r,
        function (t) {
          (o = t), Aa.set(o);
        },
      ]
    );
  }
  return new ((function (t) {
    L(e, t);
    var n = El(e);
    function e(t) {
      var r;
      return j(this, e), Ft(C((r = n.call(this))), t, Nl, Rl, Y, {}), r;
    }
    return e;
  })(Ht))({ target: document.body });
})();
