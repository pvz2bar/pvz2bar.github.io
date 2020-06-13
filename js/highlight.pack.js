/*! highlight.js v9.18.1 | BSD3 License | git.io/hljslicense */
!
function(e) {
    var n = "object" == typeof window && window || "object" == typeof self && self;
    "undefined" == typeof exports || exports.nodeType ? n && (n.hljs = e({}), "function" == typeof define && define.amd && define([],
    function() {
        return n.hljs
    })) : e(exports)
} (function(a) {
    var f = [],
    i = Object.keys,
    _ = {},
    c = {},
    C = !0,
    n = /^(no-?highlight|plain|text)$/i,
    l = /\blang(?:uage)?-([\w-]+)\b/i,
    t = /((^(<[^>]+>|\t|)+|(?:\n)))/gm,
    r = {
        case_insensitive: "cI",
        lexemes: "l",
        contains: "c",
        keywords: "k",
        subLanguage: "sL",
        className: "cN",
        begin: "b",
        beginKeywords: "bK",
        end: "e",
        endsWithParent: "eW",
        illegal: "i",
        excludeBegin: "eB",
        excludeEnd: "eE",
        returnBegin: "rB",
        returnEnd: "rE",
        variants: "v",
        IDENT_RE: "IR",
        UNDERSCORE_IDENT_RE: "UIR",
        NUMBER_RE: "NR",
        C_NUMBER_RE: "CNR",
        BINARY_NUMBER_RE: "BNR",
        RE_STARTERS_RE: "RSR",
        BACKSLASH_ESCAPE: "BE",
        APOS_STRING_MODE: "ASM",
        QUOTE_STRING_MODE: "QSM",
        PHRASAL_WORDS_MODE: "PWM",
        C_LINE_COMMENT_MODE: "CLCM",
        C_BLOCK_COMMENT_MODE: "CBCM",
        HASH_COMMENT_MODE: "HCM",
        NUMBER_MODE: "NM",
        C_NUMBER_MODE: "CNM",
        BINARY_NUMBER_MODE: "BNM",
        CSS_NUMBER_MODE: "CSSNM",
        REGEXP_MODE: "RM",
        TITLE_MODE: "TM",
        UNDERSCORE_TITLE_MODE: "UTM",
        COMMENT: "C",
        beginRe: "bR",
        endRe: "eR",
        illegalRe: "iR",
        lexemesRe: "lR",
        terminators: "t",
        terminator_end: "tE"
    },
    m = "</span>",
    O = "Could not find the language '{}', did you forget to load/include a language module?",
    B = {
        classPrefix: "hljs-",
        tabReplace: null,
        useBR: !1,
        languages: void 0
    },
    o = "of and for in not or if then".split(" ");
    function x(e) {
        return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }
    function g(e) {
        return e.nodeName.toLowerCase()
    }
    function u(e) {
        return n.test(e)
    }
    function s(e) {
        var n, t = {},
        r = Array.prototype.slice.call(arguments, 1);
        for (n in e) t[n] = e[n];
        return r.forEach(function(e) {
            for (n in e) t[n] = e[n]
        }),
        t
    }
    function E(e) {
        var a = [];
        return function e(n, t) {
            for (var r = n.firstChild; r; r = r.nextSibling) 3 === r.nodeType ? t += r.nodeValue.length: 1 === r.nodeType && (a.push({
                event: "start",
                offset: t,
                node: r
            }), t = e(r, t), g(r).match(/br|hr|img|input/) || a.push({
                event: "stop",
                offset: t,
                node: r
            }));
            return t
        } (e, 0),
        a
    }
    function d(e, n, t) {
        var r = 0,
        a = "",
        i = [];
        function o() {
            return e.length && n.length ? e[0].offset !== n[0].offset ? e[0].offset < n[0].offset ? e: n: "start" === n[0].event ? e: n: e.length ? e: n
        }
        function c(e) {
            a += "<" + g(e) + f.map.call(e.attributes,
            function(e) {
                return " " + e.nodeName + '="' + x(e.value).replace(/"/g, "&quot;") + '"'
            }).join("") + ">"
        }
        function l(e) {
            a += "</" + g(e) + ">"
        }
        function u(e) { ("start" === e.event ? c: l)(e.node)
        }
        for (; e.length || n.length;) {
            var s = o();
            if (a += x(t.substring(r, s[0].offset)), r = s[0].offset, s === e) {
                for (i.reverse().forEach(l); u(s.splice(0, 1)[0]), (s = o()) === e && s.length && s[0].offset === r;);
                i.reverse().forEach(c)
            } else "start" === s[0].event ? i.push(s[0].node) : i.pop(),
            u(s.splice(0, 1)[0])
        }
        return a + x(t.substr(r))
    }
    function R(n) {
        return n.v && !n.cached_variants && (n.cached_variants = n.v.map(function(e) {
            return s(n, {
                v: null
            },
            e)
        })),
        n.cached_variants ? n.cached_variants: function e(n) {
            return !! n && (n.eW || e(n.starts))
        } (n) ? [s(n, {
            starts: n.starts ? s(n.starts) : null
        })] : Object.isFrozen(n) ? [s(n)] : [n]
    }
    function p(e) {
        if (r && !e.langApiRestored) {
            for (var n in e.langApiRestored = !0,
            r) e[n] && (e[r[n]] = e[n]); (e.c || []).concat(e.v || []).forEach(p)
        }
    }
    function v(n, r) {
        var a = {};
        return "string" == typeof n ? t("keyword", n) : i(n).forEach(function(e) {
            t(e, n[e])
        }),
        a;
        function t(t, e) {
            r && (e = e.toLowerCase()),
            e.split(" ").forEach(function(e) {
                var n = e.split("|");
                a[n[0]] = [t,
                function(e, n) {
                    return n ? Number(n) : function(e) {
                        return - 1 != o.indexOf(e.toLowerCase())
                    } (e) ? 0 : 1
                } (n[0], n[1])]
            })
        }
    }
    function S(r) {
        function s(e) {
            return e && e.source || e
        }
        function f(e, n) {
            return new RegExp(s(e), "m" + (r.cI ? "i": "") + (n ? "g": ""))
        }
        function a(a) {
            var i, e, o = {},
            c = [],
            l = {},
            t = 1;
            function n(e, n) {
                o[t] = e,
                c.push([e, n]),
                t +=
                function(e) {
                    return new RegExp(e.toString() + "|").exec("").length - 1
                } (n) + 1
            }
            for (var r = 0; r < a.c.length; r++) {
                n(e = a.c[r], e.bK ? "\\.?(?:" + e.b + ")\\.?": e.b)
            }
            a.tE && n("end", a.tE),
            a.i && n("illegal", a.i);
            var u = c.map(function(e) {
                return e[1]
            });
            return i = f(function(e, n) {
                for (var t = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./,
                r = 0,
                a = "",
                i = 0; i < e.length; i++) {
                    var o = r += 1,
                    c = s(e[i]);
                    for (0 < i && (a += n), a += "("; 0 < c.length;) {
                        var l = t.exec(c);
                        if (null == l) {
                            a += c;
                            break
                        }
                        a += c.substring(0, l.index),
                        c = c.substring(l.index + l[0].length),
                        "\\" == l[0][0] && l[1] ? a += "\\" + String(Number(l[1]) + o) : (a += l[0], "(" == l[0] && r++)
                    }
                    a += ")"
                }
                return a
            } (u, "|"), !0),
            l.lastIndex = 0,
            l.exec = function(e) {
                var n;
                if (0 === c.length) return null;
                i.lastIndex = l.lastIndex;
                var t = i.exec(e);
                if (!t) return null;
                for (var r = 0; r < t.length; r++) if (null != t[r] && null != o["" + r]) {
                    n = o["" + r];
                    break
                }
                return "string" == typeof n ? (t.type = n, t.extra = [a.i, a.tE]) : (t.type = "begin", t.rule = n),
                t
            },
            l
        }
        if (r.c && -1 != r.c.indexOf("self")) {
            if (!C) throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
            r.c = r.c.filter(function(e) {
                return "self" != e
            })
        } !
        function n(t, e) {
            t.compiled || (t.compiled = !0, t.k = t.k || t.bK, t.k && (t.k = v(t.k, r.cI)), t.lR = f(t.l || /\w+/, !0), e && (t.bK && (t.b = "\\b(" + t.bK.split(" ").join("|") + ")\\b"), t.b || (t.b = /\B|\b/), t.bR = f(t.b), t.endSameAsBegin && (t.e = t.b), t.e || t.eW || (t.e = /\B|\b/), t.e && (t.eR = f(t.e)), t.tE = s(t.e) || "", t.eW && e.tE && (t.tE += (t.e ? "|": "") + e.tE)), t.i && (t.iR = f(t.i)), null == t.relevance && (t.relevance = 1), t.c || (t.c = []), t.c = Array.prototype.concat.apply([], t.c.map(function(e) {
                return R("self" === e ? t: e)
            })), t.c.forEach(function(e) {
                n(e, t)
            }), t.starts && n(t.starts, e), t.t = a(t))
        } (r)
    }
    function T(n, e, a, t) {
        var i = e;
        function o(e, n) {
            if (function(e, n) {
                var t = e && e.exec(n);
                return t && 0 === t.index
            } (e.eR, n)) {
                for (; e.endsParent && e.parent;) e = e.parent;
                return e
            }
            if (e.eW) return o(e.parent, n)
        }
        function c(e, n, t, r) {
            if (!t && "" === n) return "";
            if (!e) return n;
            var a = '<span class="' + (r ? "": B.classPrefix);
            return (a += e + '">') + n + (t ? "": m)
        }
        function l() {
            p += null != d.sL ?
            function() {
                var e = "string" == typeof d.sL;
                if (e && !_[d.sL]) return x(v);
                var n = e ? T(d.sL, v, !0, R[d.sL]) : w(v, d.sL.length ? d.sL: void 0);
                return 0 < d.relevance && (M += n.relevance),
                e && (R[d.sL] = n.top),
                c(n.language, n.value, !1, !0)
            } () : function() {
                var e, n, t, r, a, i, o;
                if (!d.k) return x(v);
                for (r = "", n = 0, d.lR.lastIndex = 0, t = d.lR.exec(v); t;) r += x(v.substring(n, t.index)),
                a = d,
                i = t,
                void 0,
                o = g.cI ? i[0].toLowerCase() : i[0],
                (e = a.k.hasOwnProperty(o) && a.k[o]) ? (M += e[1], r += c(e[0], x(t[0]))) : r += x(t[0]),
                n = d.lR.lastIndex,
                t = d.lR.exec(v);
                return r + x(v.substr(n))
            } (),
            v = ""
        }
        function u(e) {
            p += e.cN ? c(e.cN, "", !0) : "",
            d = Object.create(e, {
                parent: {
                    value: d
                }
            })
        }
        function s(e) {
            var n = e[0],
            t = e.rule;
            return t && t.endSameAsBegin && (t.eR = function(e) {
                return new RegExp(e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"), "m")
            } (n)),
            t.skip ? v += n: (t.eB && (v += n), l(), t.rB || t.eB || (v = n)),
            u(t),
            t.rB ? 0 : n.length
        }
        var f = {};
        function r(e, n) {
            var t = n && n[0];
            if (v += e, null == t) return l(),
            0;
            if ("begin" == f.type && "end" == n.type && f.index == n.index && "" === t) return v += i.slice(n.index, n.index + 1),
            1;
            if ("begin" === (f = n).type) return s(n);
            if ("illegal" === n.type && !a) throw new Error('Illegal lexeme "' + t + '" for mode "' + (d.cN || "<unnamed>") + '"');
            if ("end" === n.type) {
                var r = function(e) {
                    var n = e[0],
                    t = i.substr(e.index),
                    r = o(d, t);
                    if (r) {
                        var a = d;
                        for (a.skip ? v += n: (a.rE || a.eE || (v += n), l(), a.eE && (v = n)); d.cN && (p += m), d.skip || d.sL || (M += d.relevance), (d = d.parent) !== r.parent;);
                        return r.starts && (r.endSameAsBegin && (r.starts.eR = r.eR), u(r.starts)),
                        a.rE ? 0 : n.length
                    }
                } (n);
                if (null != r) return r
            }
            return v += t,
            t.length
        }
        var g = D(n);
        if (!g) throw console.error(O.replace("{}", n)),
        new Error('Unknown language: "' + n + '"');
        S(g);
        var E, d = t || g,
        R = {},
        p = "";
        for (E = d; E !== g; E = E.parent) E.cN && (p = c(E.cN, "", !0) + p);
        var v = "",
        M = 0;
        try {
            for (var b, h, N = 0; d.t.lastIndex = N, b = d.t.exec(i);) h = r(i.substring(N, b.index), b),
            N = b.index + h;
            for (r(i.substr(N)), E = d; E.parent; E = E.parent) E.cN && (p += m);
            return {
                relevance: M,
                value: p,
                i: !1,
                language: n,
                top: d
            }
        } catch(e) {
            if (e.message && -1 !== e.message.indexOf("Illegal")) return {
                i: !0,
                relevance: 0,
                value: x(i)
            };
            if (C) return {
                relevance: 0,
                value: x(i),
                language: n,
                top: d,
                errorRaised: e
            };
            throw e
        }
    }
    function w(t, e) {
        e = e || B.languages || i(_);
        var r = {
            relevance: 0,
            value: x(t)
        },
        a = r;
        return e.filter(D).filter(L).forEach(function(e) {
            var n = T(e, t, !1);
            n.language = e,
            n.relevance > a.relevance && (a = n),
            n.relevance > r.relevance && (a = r, r = n)
        }),
        a.language && (r.second_best = a),
        r
    }
    function M(e) {
        return B.tabReplace || B.useBR ? e.replace(t,
        function(e, n) {
            return B.useBR && "\n" === e ? "<br>": B.tabReplace ? n.replace(/\t/g, B.tabReplace) : ""
        }) : e
    }
    function b(e) {
        var n, t, r, a, i, o = function(e) {
            var n, t, r, a, i = e.className + " ";
            if (i += e.parentNode ? e.parentNode.className: "", t = l.exec(i)) {
                var o = D(t[1]);
                return o || (console.warn(O.replace("{}", t[1])), console.warn("Falling back to no-highlight mode for this block.", e)),
                o ? t[1] : "no-highlight"
            }
            for (n = 0, r = (i = i.split(/\s+/)).length; n < r; n++) if (u(a = i[n]) || D(a)) return a
        } (e);
        u(o) || (B.useBR ? (n = document.createElement("div")).innerHTML = e.innerHTML.replace(/\n/g, "").replace(/<br[ \/]*>/g, "\n") : n = e, i = n.textContent, r = o ? T(o, i, !0) : w(i), (t = E(n)).length && ((a = document.createElement("div")).innerHTML = r.value, r.value = d(t, E(a), i)), r.value = M(r.value), e.innerHTML = r.value, e.className = function(e, n, t) {
            var r = n ? c[n] : t,
            a = [e.trim()];
            return e.match(/\bhljs\b/) || a.push("hljs"),
            -1 === e.indexOf(r) && a.push(r),
            a.join(" ").trim()
        } (e.className, o, r.language), e.result = {
            language: r.language,
            re: r.relevance
        },
        r.second_best && (e.second_best = {
            language: r.second_best.language,
            re: r.second_best.relevance
        }))
    }
    function h() {
        if (!h.called) {
            h.called = !0;
            var e = document.querySelectorAll("pre code");
            f.forEach.call(e, b)
        }
    }
    var N = {
        disableAutodetect: !0
    };
    function D(e) {
        return e = (e || "").toLowerCase(),
        _[e] || _[c[e]]
    }
    function L(e) {
        var n = D(e);
        return n && !n.disableAutodetect
    }
    return a.highlight = T,
    a.highlightAuto = w,
    a.fixMarkup = M,
    a.highlightBlock = b,
    a.configure = function(e) {
        B = s(B, e)
    },
    a.initHighlighting = h,
    a.initHighlightingOnLoad = function() {
        window.addEventListener("DOMContentLoaded", h, !1),
        window.addEventListener("load", h, !1)
    },
    a.registerLanguage = function(n, e) {
        var t;
        try {
            t = e(a)
        } catch(e) {
            if (console.error("Language definition for '{}' could not be registered.".replace("{}", n)), !C) throw e;
            console.error(e),
            t = N
        }
        p(_[n] = t),
        t.rawDefinition = e.bind(null, a),
        t.aliases && t.aliases.forEach(function(e) {
            c[e] = n
        })
    },
    a.listLanguages = function() {
        return i(_)
    },
    a.getLanguage = D,
    a.requireLanguage = function(e) {
        var n = D(e);
        if (n) return n;
        throw new Error("The '{}' language is required, but not loaded.".replace("{}", e))
    },
    a.autoDetection = L,
    a.inherit = s,
    a.debugMode = function() {
        C = !1
    },
    a.IR = a.IDENT_RE = "[a-zA-Z]\\w*",
    a.UIR = a.UNDERSCORE_IDENT_RE = "[a-zA-Z_]\\w*",
    a.NR = a.NUMBER_RE = "\\b\\d+(\\.\\d+)?",
    a.CNR = a.C_NUMBER_RE = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",
    a.BNR = a.BINARY_NUMBER_RE = "\\b(0b[01]+)",
    a.RSR = a.RE_STARTERS_RE = "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",
    a.BE = a.BACKSLASH_ESCAPE = {
        b: "\\\\[\\s\\S]",
        relevance: 0
    },
    a.ASM = a.APOS_STRING_MODE = {
        cN: "string",
        b: "'",
        e: "'",
        i: "\\n",
        c: [a.BE]
    },
    a.QSM = a.QUOTE_STRING_MODE = {
        cN: "string",
        b: '"',
        e: '"',
        i: "\\n",
        c: [a.BE]
    },
    a.PWM = a.PHRASAL_WORDS_MODE = {
        b: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
    },
    a.C = a.COMMENT = function(e, n, t) {
        var r = a.inherit({
            cN: "comment",
            b: e,
            e: n,
            c: []
        },
        t || {});
        return r.c.push(a.PWM),
        r.c.push({
            cN: "doctag",
            b: "(?:TODO|FIXME|NOTE|BUG|XXX):",
            relevance: 0
        }),
        r
    },
    a.CLCM = a.C_LINE_COMMENT_MODE = a.C("//", "$"),
    a.CBCM = a.C_BLOCK_COMMENT_MODE = a.C("/\\*", "\\*/"),
    a.HCM = a.HASH_COMMENT_MODE = a.C("#", "$"),
    a.NM = a.NUMBER_MODE = {
        cN: "number",
        b: a.NR,
        relevance: 0
    },
    a.CNM = a.C_NUMBER_MODE = {
        cN: "number",
        b: a.CNR,
        relevance: 0
    },
    a.BNM = a.BINARY_NUMBER_MODE = {
        cN: "number",
        b: a.BNR,
        relevance: 0
    },
    a.CSSNM = a.CSS_NUMBER_MODE = {
        cN: "number",
        b: a.NR + "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
        relevance: 0
    },
    a.RM = a.REGEXP_MODE = {
        cN: "regexp",
        b: /\//,
        e: /\/[gimuy]*/,
        i: /\n/,
        c: [a.BE, {
            b: /\[/,
            e: /\]/,
            relevance: 0,
            c: [a.BE]
        }]
    },
    a.TM = a.TITLE_MODE = {
        cN: "title",
        b: a.IR,
        relevance: 0
    },
    a.UTM = a.UNDERSCORE_TITLE_MODE = {
        cN: "title",
        b: a.UIR,
        relevance: 0
    },
    a.METHOD_GUARD = {
        b: "\\.\\s*" + a.UIR,
        relevance: 0
    },
    [a.BE, a.ASM, a.QSM, a.PWM, a.C, a.CLCM, a.CBCM, a.HCM, a.NM, a.CNM, a.BNM, a.CSSNM, a.RM, a.TM, a.UTM, a.METHOD_GUARD].forEach(function(e) { !
        function n(t) {
            Object.freeze(t);
            var r = "function" == typeof t;
            Object.getOwnPropertyNames(t).forEach(function(e) { ! t.hasOwnProperty(e) || null === t[e] || "object" != typeof t[e] && "function" != typeof t[e] || r && ("caller" === e || "callee" === e || "arguments" === e) || Object.isFrozen(t[e]) || n(t[e])
            });
            return t
        } (e)
    }),
    a
});
hljs.registerLanguage("cpp",
function(e) {
    function t(e) {
        return "(?:" + e + ")?"
    }
    var r = "decltype\\(auto\\)",
    a = "[a-zA-Z_]\\w*::",
    i = "(" + r + "|" + t(a) + "[a-zA-Z_]\\w*" + t("<.*?>") + ")",
    c = {
        cN: "keyword",
        b: "\\b[a-z\\d_]*_t\\b"
    },
    s = {
        cN: "string",
        v: [{
            b: '(u8?|U|L)?"',
            e: '"',
            i: "\\n",
            c: [e.BE]
        },
        {
            b: "(u8?|U|L)?'(\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)|.)",
            e: "'",
            i: "."
        },
        {
            b: /(?:u8?|U|L)?R"([^()\\ ]{0,16})\((?:.|\n)*?\)\1"/
        }]
    },
    n = {
        cN: "number",
        v: [{
            b: "\\b(0b[01']+)"
        },
        {
            b: "(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)(u|U|l|L|ul|UL|f|F|b|B)"
        },
        {
            b: "(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)"
        }],
        relevance: 0
    },
    o = {
        cN: "meta",
        b: /#\s*[a-z]+\b/,
        e: /$/,
        k: {
            "meta-keyword": "if else elif endif define undef warning error line pragma _Pragma ifdef ifndef include"
        },
        c: [{
            b: /\\\n/,
            relevance: 0
        },
        e.inherit(s, {
            cN: "meta-string"
        }), {
            cN: "meta-string",
            b: /<.*?>/,
            e: /$/,
            i: "\\n"
        },
        e.CLCM, e.CBCM]
    },
    l = {
        cN: "title",
        b: t(a) + e.IR,
        relevance: 0
    },
    u = t(a) + e.IR + "\\s*\\(",
    p = {
        keyword: "int float while private char char8_t char16_t char32_t catch import module export virtual operator sizeof dynamic_cast|10 typedef const_cast|10 const for static_cast|10 union namespace unsigned long volatile static protected bool template mutable if public friend do goto auto void enum else break extern using asm case typeid wchar_tshort reinterpret_cast|10 default double register explicit signed typename try this switch continue inline delete alignas alignof constexpr consteval constinit decltype concept co_await co_return co_yield requires noexcept static_assert thread_local restrict final override atomic_bool atomic_char atomic_schar atomic_uchar atomic_short atomic_ushort atomic_int atomic_uint atomic_long atomic_ulong atomic_llong atomic_ullong new throw return and and_eq bitand bitor compl not not_eq or or_eq xor xor_eq",
        built_in: "std string wstring cin cout cerr clog stdin stdout stderr stringstream istringstream ostringstream auto_ptr deque list queue stack vector map set bitset multiset multimap unordered_set unordered_map unordered_multiset unordered_multimap array shared_ptr abort terminate abs acos asin atan2 atan calloc ceil cosh cos exit exp fabs floor fmod fprintf fputs free frexp fscanf future isalnum isalpha iscntrl isdigit isgraph islower isprint ispunct isspace isupper isxdigit tolower toupper labs ldexp log10 log malloc realloc memchr memcmp memcpy memset modf pow printf putchar puts scanf sinh sin snprintf sprintf sqrt sscanf strcat strchr strcmp strcpy strcspn strlen strncat strncmp strncpy strpbrk strrchr strspn strstr tanh tan vfprintf vprintf vsprintf endl initializer_list unique_ptr _Bool complex _Complex imaginary _Imaginary",
        literal: "true false nullptr NULL"
    },
    m = [c, e.CLCM, e.CBCM, n, s],
    d = {
        v: [{
            b: /=/,
            e: /;/
        },
        {
            b: /\(/,
            e: /\)/
        },
        {
            bK: "new throw return else",
            e: /;/
        }],
        k: p,
        c: m.concat([{
            b: /\(/,
            e: /\)/,
            k: p,
            c: m.concat(["self"]),
            relevance: 0
        }]),
        relevance: 0
    },
    b = {
        cN: "function",
        b: "(" + i + "[\\*&\\s]+)+" + u,
        rB: !0,
        e: /[{;=]/,
        eE: !0,
        k: p,
        i: /[^\w\s\*&:<>]/,
        c: [{
            b: r,
            k: p,
            relevance: 0
        },
        {
            b: u,
            rB: !0,
            c: [l],
            relevance: 0
        },
        {
            cN: "params",
            b: /\(/,
            e: /\)/,
            k: p,
            relevance: 0,
            c: [e.CLCM, e.CBCM, s, n, c, {
                b: /\(/,
                e: /\)/,
                k: p,
                relevance: 0,
                c: ["self", e.CLCM, e.CBCM, s, n, c]
            }]
        },
        c, e.CLCM, e.CBCM, o]
    };
    return {
        aliases: ["c", "cc", "h", "c++", "h++", "hpp", "hh", "hxx", "cxx"],
        k: p,
        i: "</",
        c: [].concat(d, b, m, [o, {
            b: "\\b(deque|list|queue|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array)\\s*<",
            e: ">",
            k: p,
            c: ["self", c]
        },
        {
            b: e.IR + "::",
            k: p
        },
        {
            cN: "class",
            bK: "class struct",
            e: /[{;:]/,
            c: [{
                b: /</,
                e: />/,
                c: ["self"]
            },
            e.TM]
        }]),
        exports: {
            preprocessor: o,
            strings: s,
            k: p
        }
    }
});
hljs.registerLanguage("vbscript",
function(e) {
    return {
        aliases: ["vbs"],
        cI: !0,
        k: {
            keyword: "call class const dim do loop erase execute executeglobal exit for each next function if then else on error option explicit new private property let get public randomize redim rem select case set stop sub while wend with end to elseif is or xor and not class_initialize class_terminate default preserve in me byval byref step resume goto",
            built_in: "lcase month vartype instrrev ubound setlocale getobject rgb getref string weekdayname rnd dateadd monthname now day minute isarray cbool round formatcurrency conversions csng timevalue second year space abs clng timeserial fixs len asc isempty maths dateserial atn timer isobject filter weekday datevalue ccur isdate instr datediff formatdatetime replace isnull right sgn array snumeric log cdbl hex chr lbound msgbox ucase getlocale cos cdate cbyte rtrim join hour oct typename trim strcomp int createobject loadpicture tan formatnumber mid scriptenginebuildversion scriptengine split scriptengineminorversion cint sin datepart ltrim sqr scriptenginemajorversion time derived eval date formatpercent exp inputbox left ascw chrw regexp server response request cstr err",
            literal: "true false null nothing empty"
        },
        i: "//",
        c: [e.inherit(e.QSM, {
            c: [{
                b: '""'
            }]
        }), e.C(/'/, /$/, {
            relevance: 0
        }), e.CNM]
    }
});
hljs.registerLanguage("plaintext",
function(e) {
    return {
        disableAutodetect: !0
    }
});
hljs.registerLanguage("dos",
function(e) {
    var r = e.C(/^\s*@?rem\b/, /$/, {
        relevance: 10
    });
    return {
        aliases: ["bat", "cmd"],
        cI: !0,
        i: /\/\*/,
        k: {
            keyword: "if else goto for in do call exit not exist errorlevel defined equ neq lss leq gtr geq",
            built_in: "prn nul lpt3 lpt2 lpt1 con com4 com3 com2 com1 aux shift cd dir echo setlocal endlocal set pause copy append assoc at attrib break cacls cd chcp chdir chkdsk chkntfs cls cmd color comp compact convert date dir diskcomp diskcopy doskey erase fs find findstr format ftype graftabl help keyb label md mkdir mode more move path pause print popd pushd promt rd recover rem rename replace restore rmdir shiftsort start subst time title tree type ver verify vol ping net ipconfig taskkill xcopy ren del"
        },
        c: [{
            cN: "variable",
            b: /%%[^ ]|%[^ ]+?%|![^ ]+?!/
        },
        {
            cN: "function",
            b: "^\\s*[A-Za-z._?][A-Za-z0-9_$#@~.?]*(:|\\s+label)",
            e: "goto:eof",
            c: [e.inherit(e.TM, {
                b: "([_a-zA-Z]\\w*\\.)*([_a-zA-Z]\\w*:)?[_a-zA-Z]\\w*"
            }), r]
        },
        {
            cN: "number",
            b: "\\b\\d+",
            relevance: 0
        },
        r]
    }
});
hljs.registerLanguage("python",
function(e) {
    var r = {
        keyword: "and elif is global as in if from raise for except finally print import pass return exec else break not with class assert yield try while continue del or def lambda async await nonlocal|10",
        built_in: "Ellipsis NotImplemented",
        literal: "False None True"
    },
    b = {
        cN: "meta",
        b: /^(>>>|\.\.\.) /
    },
    c = {
        cN: "subst",
        b: /\{/,
        e: /\}/,
        k: r,
        i: /#/
    },
    a = {
        b: /\{\{/,
        relevance: 0
    },
    l = {
        cN: "string",
        c: [e.BE],
        v: [{
            b: /(u|b)?r?'''/,
            e: /'''/,
            c: [e.BE, b],
            relevance: 10
        },
        {
            b: /(u|b)?r?"""/,
            e: /"""/,
            c: [e.BE, b],
            relevance: 10
        },
        {
            b: /(fr|rf|f)'''/,
            e: /'''/,
            c: [e.BE, b, a, c]
        },
        {
            b: /(fr|rf|f)"""/,
            e: /"""/,
            c: [e.BE, b, a, c]
        },
        {
            b: /(u|r|ur)'/,
            e: /'/,
            relevance: 10
        },
        {
            b: /(u|r|ur)"/,
            e: /"/,
            relevance: 10
        },
        {
            b: /(b|br)'/,
            e: /'/
        },
        {
            b: /(b|br)"/,
            e: /"/
        },
        {
            b: /(fr|rf|f)'/,
            e: /'/,
            c: [e.BE, a, c]
        },
        {
            b: /(fr|rf|f)"/,
            e: /"/,
            c: [e.BE, a, c]
        },
        e.ASM, e.QSM]
    },
    n = {
        cN: "number",
        relevance: 0,
        v: [{
            b: e.BNR + "[lLjJ]?"
        },
        {
            b: "\\b(0o[0-7]+)[lLjJ]?"
        },
        {
            b: e.CNR + "[lLjJ]?"
        }]
    },
    i = {
        cN: "params",
        b: /\(/,
        e: /\)/,
        c: ["self", b, n, l, e.HCM]
    };
    return c.c = [l, n, b],
    {
        aliases: ["py", "gyp", "ipython"],
        k: r,
        i: /(<\/|->|\?)|=>/,
        c: [b, n, {
            bK: "if",
            relevance: 0
        },
        l, e.HCM, {
            v: [{
                cN: "function",
                bK: "def"
            },
            {
                cN: "class",
                bK: "class"
            }],
            e: /:/,
            i: /[${=;\n,]/,
            c: [e.UTM, i, {
                b: /->/,
                eW: !0,
                k: "None"
            }]
        },
        {
            cN: "meta",
            b: /^[\t ]*@/,
            e: /$/
        },
        {
            b: /\b(print|exec)\(/
        }]
    }
});