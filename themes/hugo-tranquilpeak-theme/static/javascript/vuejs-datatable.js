! function(t) {
    function e(n) {
        if (r[n]) return r[n].exports;
        var o = r[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return t[n].call(o.exports, o, o.exports, e), o.l = !0, o.exports
    }
    var r = {};
    e.m = t, e.c = r, e.i = function(t) {
        return t
    }, e.d = function(t, r, n) {
        e.o(t, r) || Object.defineProperty(t, r, {
            configurable: !1,
            enumerable: !0,
            get: n
        })
    }, e.n = function(t) {
        var r = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return e.d(r, "a", r), r
    }, e.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, e.p = "./", e(e.s = 45)
}({
    1: function(t, e, r) {
        var n, o, s;
        ! function(r, i) {
            "use strict";
            "object" == typeof t && "object" == typeof t.exports ? t.exports = i() : (o = [], n = i, void 0 !== (s = "function" == typeof n ? n.apply(e, o) : n) && (t.exports = s))
        }(0, function() {
            "use strict";

            function t(t, e) {
                return null != t && Object.prototype.hasOwnProperty.call(t, e)
            }

            function e(e) {
                if (!e) return !0;
                if (l(e) && 0 === e.length) return !0;
                if ("string" != typeof e) {
                    for (var r in e)
                        if (t(e, r)) return !1;
                    return !0
                }
                return !1
            }

            function r(t) {
                return a.call(t)
            }

            function n(t) {
                return "object" == typeof t && "[object Object]" === r(t)
            }

            function o(t) {
                return "boolean" == typeof t || "[object Boolean]" === r(t)
            }

            function s(t) {
                var e = parseInt(t);
                return e.toString() === t ? e : t
            }

            function i(r) {
                function i(e, n) {
                    return r.includeInheritedProps || "number" == typeof n && Array.isArray(e) || t(e, n)
                }

                function a(t, e) {
                    if (i(t, e)) return t[e]
                }

                function u(t, e, r, n) {
                    if ("number" == typeof e && (e = [e]), !e || 0 === e.length) return t;
                    if ("string" == typeof e) return u(t, e.split(".").map(s), r, n);
                    var o = e[0],
                        i = a(t, o);
                    return 1 === e.length ? (void 0 !== i && n || (t[o] = r), i) : (void 0 === i && ("number" == typeof e[1] ? t[o] = [] : t[o] = {}), u(t[o], e.slice(1), r, n))
                }
                r = r || {};
                var c = function(t) {
                    return Object.keys(c).reduce(function(e, r) {
                        return "create" === r ? e : ("function" == typeof c[r] && (e[r] = c[r].bind(c, t)), e)
                    }, {})
                };
                return c.has = function(e, n) {
                    if ("number" == typeof n ? n = [n] : "string" == typeof n && (n = n.split(".")), !n || 0 === n.length) return !!e;
                    for (var o = 0; o < n.length; o++) {
                        var i = s(n[o]);
                        if (!("number" == typeof i && l(e) && i < e.length || (r.includeInheritedProps ? i in Object(e) : t(e, i)))) return !1;
                        e = e[i]
                    }
                    return !0
                }, c.ensureExists = function(t, e, r) {
                    return u(t, e, r, !0)
                }, c.set = function(t, e, r, n) {
                    return u(t, e, r, n)
                }, c.insert = function(t, e, r, n) {
                    var o = c.get(t, e);
                    n = ~~n, l(o) || (o = [], c.set(t, e, o)), o.splice(n, 0, r)
                }, c.empty = function(t, r) {
                    if (!e(r) && null != t) {
                        var s, a;
                        if (s = c.get(t, r)) {
                            if ("string" == typeof s) return c.set(t, r, "");
                            if (o(s)) return c.set(t, r, !1);
                            if ("number" == typeof s) return c.set(t, r, 0);
                            if (l(s)) s.length = 0;
                            else {
                                if (!n(s)) return c.set(t, r, null);
                                for (a in s) i(s, a) && delete s[a]
                            }
                        }
                    }
                }, c.push = function(t, e) {
                    var r = c.get(t, e);
                    l(r) || (r = [], c.set(t, e, r)), r.push.apply(r, Array.prototype.slice.call(arguments, 2))
                }, c.coalesce = function(t, e, r) {
                    for (var n, o = 0, s = e.length; o < s; o++)
                        if (void 0 !== (n = c.get(t, e[o]))) return n;
                    return r
                }, c.get = function(t, e, r) {
                    if ("number" == typeof e && (e = [e]), !e || 0 === e.length) return t;
                    if (null == t) return r;
                    if ("string" == typeof e) return c.get(t, e.split("."), r);
                    var n = s(e[0]),
                        o = a(t, n);
                    return void 0 === o ? r : 1 === e.length ? o : c.get(t[n], e.slice(1), r)
                }, c.del = function(t, r) {
                    if ("number" == typeof r && (r = [r]), null == t) return t;
                    if (e(r)) return t;
                    if ("string" == typeof r) return c.del(t, r.split("."));
                    var n = s(r[0]);
                    return i(t, n) ? 1 !== r.length ? c.del(t[n], r.slice(1)) : (l(t) ? t.splice(n, 1) : delete t[n], t) : t
                }, c
            }
            var a = Object.prototype.toString,
                l = Array.isArray || function(t) {
                    return "[object Array]" === a.call(t)
                },
                u = i();
            return u.create = i, u.withInheritedProps = i({
                includeInheritedProps: !0
            }), u
        })
    },
    10: function(t, e, r) {
        function n(t) {
            for (var e = 0; e < t.length; e++) {
                var r = t[e],
                    n = c[r.id];
                if (n) {
                    n.refs++;
                    for (var o = 0; o < n.parts.length; o++) n.parts[o](r.parts[o]);
                    for (; o < r.parts.length; o++) n.parts.push(s(r.parts[o]));
                    n.parts.length > r.parts.length && (n.parts.length = r.parts.length)
                } else {
                    for (var i = [], o = 0; o < r.parts.length; o++) i.push(s(r.parts[o]));
                    c[r.id] = {
                        id: r.id,
                        refs: 1,
                        parts: i
                    }
                }
            }
        }

        function o() {
            var t = document.createElement("style");
            return t.type = "text/css", f.appendChild(t), t
        }

        function s(t) {
            var e, r, n = document.querySelector('style[data-vue-ssr-id~="' + t.id + '"]');
            if (n) {
                if (h) return v;
                n.parentNode.removeChild(n)
            }
            if (b) {
                var s = d++;
                n = p || (p = o()), e = i.bind(null, n, s, !1), r = i.bind(null, n, s, !0)
            } else n = o(), e = a.bind(null, n), r = function() {
                n.parentNode.removeChild(n)
            };
            return e(t),
                function(n) {
                    if (n) {
                        if (n.css === t.css && n.media === t.media && n.sourceMap === t.sourceMap) return;
                        e(t = n)
                    } else r()
                }
        }

        function i(t, e, r, n) {
            var o = r ? "" : n.css;
            if (t.styleSheet) t.styleSheet.cssText = g(e, o);
            else {
                var s = document.createTextNode(o),
                    i = t.childNodes;
                i[e] && t.removeChild(i[e]), i.length ? t.insertBefore(s, i[e]) : t.appendChild(s)
            }
        }

        function a(t, e) {
            var r = e.css,
                n = e.media,
                o = e.sourceMap;
            if (n && t.setAttribute("media", n), o && (r += "\n/*# sourceURL=" + o.sources[0] + " */", r += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(o)))) + " */"), t.styleSheet) t.styleSheet.cssText = r;
            else {
                for (; t.firstChild;) t.removeChild(t.firstChild);
                t.appendChild(document.createTextNode(r))
            }
        }
        var l = "undefined" != typeof document;
        if ("undefined" != typeof DEBUG && DEBUG && !l) throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");
        var u = r(11),
            c = {},
            f = l && (document.head || document.getElementsByTagName("head")[0]),
            p = null,
            d = 0,
            h = !1,
            v = function() {},
            b = "undefined" != typeof navigator && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());
        t.exports = function(t, e, r) {
            h = r;
            var o = u(t, e);
            return n(o),
                function(e) {
                    for (var r = [], s = 0; s < o.length; s++) {
                        var i = o[s],
                            a = c[i.id];
                        a.refs--, r.push(a)
                    }
                    e ? (o = u(t, e), n(o)) : o = [];
                    for (var s = 0; s < r.length; s++) {
                        var a = r[s];
                        if (0 === a.refs) {
                            for (var l = 0; l < a.parts.length; l++) a.parts[l]();
                            delete c[a.id]
                        }
                    }
                }
        };
        var g = function() {
            var t = [];
            return function(e, r) {
                return t[e] = r, t.filter(Boolean).join("\n")
            }
        }()
    },
    11: function(t, e) {
        t.exports = function(t, e) {
            for (var r = [], n = {}, o = 0; o < e.length; o++) {
                var s = e[o],
                    i = s[0],
                    a = s[1],
                    l = s[2],
                    u = s[3],
                    c = {
                        id: t + ":" + o,
                        css: a,
                        media: l,
                        sourceMap: u
                    };
                n[i] ? n[i].parts.push(c) : r.push(n[i] = {
                    id: i,
                    parts: [c]
                })
            }
            return r
        }
    },
    2: function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = r(1),
            o = r.n(n),
            s = r(3);
        e.default = {
            props: {
                pagesize: Number,
                columns: [Object, Array],
                data: [Object, Array, String],
                filterable: {
                    type: Boolean,
                    default: !1
                },
                paginate: {
                    type: Boolean,
                    default: !1
                },
                sizeOptions: {
                    type: [Object, Array],
                    default: function() {
                        return [10, 25, 50, 100]
                    }
                },
                dataStore: {
                    type: Object,
                    default: null
                }
            },
            data: function() {
                return {
                    store: null
                }
            },
            computed: {
                column_props: function() {
                    var t = 0;
                    return this.columns.map(function(e) {
                        var r = void 0 === e.sortable || e.sortable,
                            n = void 0 === e.filterable || e.filterable;
                        if (e.component) {
                            this.$root.$options.components[e.component].options.asPlainText ? (r = !0, n = !0) : (r = !1, n = !1)
                        }
                        return {
                            id: t++,
                            label: e.label || "",
                            align: e.align || "left",
                            sortable: r,
                            filterable: n,
                            field: e.field || null,
                            callback: e.callback || null,
                            component: e.component || null
                        }
                    }.bind(this))
                },
                has_size_options: function() {
                    var t = this.sizeOptions instanceof Array,
                        e = this.store.can_resize;
                    return t && e
                }
            },
            methods: {
                getHeaderColumnClass: function(t) {
                    var e = this.store.sortable,
                        r = t.id !== this.store.sort_by || !this.store.sort_dir,
                        n = t.id === this.store.sort_by && "asc" === this.store.sort_dir,
                        o = t.id === this.store.sort_by && "dsc" === this.store.sort_dir;
                    return {
                        sort: e,
                        glyphicon: e,
                        "glyphicon-sort": e && r,
                        "glyphicon-sort-by-alphabet": e && n,
                        "glyphicon-sort-by-alphabet-alt": e && o
                    }
                },
                updateStore: function(t) {
                    this.dataStore ? this.store = new Vue(this.dataStore) : this.store = new Vue(s.a), this.store.setTable(this), this.store.setData(t), this.store.setFilterable(this.filterable), this.store.setPaginate(this.paginate), this.store.setSortable(!0)
                },
                getRowFromField: function(t, e) {
                    return o.a.get(t, e)
                }
            },
            created: function() {
                this.updateStore(this.data)
            },
            watch: {
                data: function() {
                    this.updateStore(this.data)
                },
                pagesize: function(){
                    this.store.page_size = this.pagesize
                }
            }
        }
    },
    22: function(t, e, r) {
        window.Vue.component("datatable", r(6))
    },
    3: function(t, e, r) {
        "use strict";
        var n = r(1),
            o = r.n(n);
        e.a = {
            data: function() {
                return {
                    paginate: !1,
                    filterable: !1,
                    sortable: !1,
                    can_resize: !0,
                    filter: "",
                    sort_by: "",
                    sort_dir: "asc",
                    page: 1,
                    page_size: 10,
                    data: [],
                    table: null
                }
            },
            computed: {
                last_page: function() {
                    return Math.ceil(this.filtered_rows.length / this.page_size)
                },
                filtered_rows: function() {
                    var t = this.data;
                    if (this.filterable && this.filter) {
                        var e = this.filter.split(" ");
                        return t.filter(function(t) {
                            for (var r in e) {
                                var n = e[r];
                                "function" == typeof n.toLowerCase && (n = n.toLowerCase());
                                var o = !1;
                                for (var s in this.table.columns) {
                                    var i = this.table.column_props[s];
                                    if (i.filterable) {
                                        var a = this.getColumnValue(t, i);
                                        if (a && (a = ("" + a).trim(), "function" == typeof a.toLowerCase && (a = a.toLowerCase()), -1 !== a.indexOf(n))) var o = !0
                                    }
                                }
                                if (!o) return !1
                            }
                            return !0
                        }, this)
                    }
                    return t.filter(function(t) {
                        return !0
                    })
                },
                sorted_rows: function() {
                    var t = this.table.column_props[this.sort_by];
                    return t && null !== this.sort_by ? this.filtered_rows.sort(function(e, r) {
                        var n = this.getColumnValue(e, t),
                            o = this.getColumnValue(r, t);
                        if (n == o) return 0;
                        var s = n > o ? 1 : -1;
                        return "dsc" === this.sort_dir && (s *= -1), s
                    }.bind(this)) : this.filtered_rows
                },
                visible_rows: function() {
                    if (this.paginate) {
                        var t = this.page_size * (this.page - 1);
                        return this.sorted_rows.slice(t, t + this.page_size)
                    }
                    return this.sorted_rows
                }
            },
            methods: {
                sortBy: function(t) {
                    if (this.sort_by !== t) this.sort_by = t, this.sort_dir = "asc";
                    else switch (this.sort_dir) {
                        case null:
                            this.sort_dir = "asc";
                            break;
                        case "asc":
                            this.sort_dir = "dsc";
                            break;
                        case "dsc":
                            this.sort_dir = null
                    }
                },
                getColumnValue: function(t, e) {
                    if (e.component) {
                        var r = this.$root.$options.components[e.component],
                            n = r.options.asPlainText;
                        if (n) return n(t)
                    }
                    return e.callback ? e.callback(t) : e.field ? o.a.get(t, e.field) : null
                },
                setPage: function(t, e) {
                    this.page = t, e.target.blur()
                },
                setTable: function(t) {
                    this.table = t
                },
                setData: function(t) {
                    this.data = t
                },
                setFilterable: function(t) {
                    this.filterable = t
                },
                setPaginate: function(t) {
                    this.paginate = t
                },
                setSortable: function(t) {
                    this.sortable = t
                }
            },
            watch: {
                filter: function() {
                    this.page = 1
                },
                page_size: function() {
                    this.page = 1
                }
            }
        }
    },
    4: function(t, e, r) {
        e = t.exports = r(5)(), e.push([t.i, "table th .sort[data-v-53d7a92e]{cursor:pointer}.table-above[data-v-53d7a92e],.table-below[data-v-53d7a92e]{padding:0 15px}table thead th[data-v-53d7a92e]{white-space:nowrap}", ""])
    },
    45: function(t, e, r) {
        t.exports = r(22)
    },
    5: function(t, e) {
        t.exports = function() {
            var t = [];
            return t.toString = function() {
                for (var t = [], e = 0; e < this.length; e++) {
                    var r = this[e];
                    r[2] ? t.push("@media " + r[2] + "{" + r[1] + "}") : t.push(r[1])
                }
                return t.join("")
            }, t.i = function(e, r) {
                "string" == typeof e && (e = [
                    [null, e, ""]
                ]);
                for (var n = {}, o = 0; o < this.length; o++) {
                    var s = this[o][0];
                    "number" == typeof s && (n[s] = !0)
                }
                for (o = 0; o < e.length; o++) {
                    var i = e[o];
                    "number" == typeof i[0] && n[i[0]] || (r && !i[2] ? i[2] = r : r && (i[2] = "(" + i[2] + ") and (" + r + ")"), t.push(i))
                }
            }, t
        }
    },
    6: function(t, e, r) {
        r(9);
        var n = r(7)(r(2), r(8), "data-v-53d7a92e", null);
        t.exports = n.exports
    },
    7: function(t, e) {
        t.exports = function(t, e, r, n) {
            var o, s = t = t || {},
                i = typeof t.default;
            "object" !== i && "function" !== i || (o = t, s = t.default);
            var a = "function" == typeof s ? s.options : s;
            if (e && (a.render = e.render, a.staticRenderFns = e.staticRenderFns), r && (a._scopeId = r), n) {
                var l = a.computed || (a.computed = {});
                Object.keys(n).forEach(function(t) {
                    var e = n[t];
                    l[t] = function() {
                        return e
                    }
                })
            }
            return {
                esModule: o,
                exports: s,
                options: a
            }
        }
    },
    8: function(t, e) {
        t.exports = {
            render: function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("div", {
                    staticClass: "row"
                }, [r("div", {
                    staticClass: "col-xs-12"
                }, [r("div", {
                    staticClass: "table-above row form-inline"
                },
                
                
                
                
                
                [r("div", {
                    staticClass: "col s6"
                }, [t.filterable ? r("div", {
                    staticClass: "form-group"
                }, [r("label", {
                    staticClass: "sr-only",
                    attrs: {
                        for: "filter"
                    }
                }, [t._v("Cerca")]), t._v(" "), r("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.store.filter,
                        expression: "store.filter"
                    }],
                    staticClass: "form-control",
                    attrs: {
                        type: "text",
                        id: "filter",
                        placeholder: "Cerca"
                    },
                    domProps: {
                        value: t.store.filter
                    },
                    on: {
                        input: function(e) {
                            e.target.composing || (t.store.filter = e.target.value)
                        }
                    }
                })]) : t._e()])]), t._v(" "), r("table", {
                    staticClass: "table table-hover table-striped"
                }, [r("thead", [r("tr", t._l(t.column_props, function(e) {
                    return r("th", {
                        style: {
                            "text-align": e.align
                        }
                    }, [t._v("\n\t\t\t\t\t\t" + t._s(e.label) + "\n\t\t\t\t\t\t"), e.sortable ? r("span", {
                        class: t.getHeaderColumnClass(e),
                        on: {
                            click: function(r) {
                                t.store.sortBy(e.id)
                            }
                        }
                    }) : t._e()])
                }))]), t._v(" "), r("tbody", t._l(t.store.visible_rows, function(e) {
                    return r("tr", t._l(t.column_props, function(n) {
                        return r("td", {
                            style: {
                                "text-align": n.align
                            }
                        }, [n.field ? r("span", [t._v(t._s(t.getRowFromField(e, n.field)))]) : t._e(), t._v(" "), n.callback ? r("span", [t._v(t._s(n.callback(e)))]) : t._e(), t._v(" "), n.component ? r(n.component, {
                            tag: "component",
                            attrs: {
                                row: e
                            }
                        }) : t._e()], 1)
                    }))
                }))]), t._v(" "), r("div", {
                    staticClass: "table-below row form-inline"
                }, [r("div", {
                    staticClass: "col-xs-12"
                }, [t.paginate && t.has_size_options ? r("div", {
                    staticClass: "form-group"
                }, [r("label", {
                    attrs: {
                        for: "filter"
                    }
                }, [t._v("Elementi per pagina")]), t._v(" "), r("select", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.store.page_size,
                        expression: "store.page_size"
                    }],
                    staticClass: "form-control",
                    on: {
                        change: [function(e) {
                            var r = Array.prototype.filter.call(e.target.options, function(t) {
                                return t.selected
                            }).map(function(t) {
                                return "_value" in t ? t._value : t.value
                            });
                            t.store.page_size = e.target.multiple ? r : r[0]
                        }, function(t) {
                            t.stopPropagation()
                        }]
                    }
                }, t._l(t.sizeOptions, function(e) {
                    return r("option", {
                        domProps: {
                            value: e
                        }
                    }, [t._v(t._s(e))])
                }))]) : t._e(), t._v(" "), t.paginate ? r("span", {
                    staticClass: "btn-group"
                }, [t.store.page - 3 >= 1 ? r("button", {
                    staticClass: "btn btn-default",
                    on: {
                        click: function(e) {
                            t.store.setPage(1, e)
                        }
                    }
                }, [t._v("1")]) : t._e(), t._v(" "), t.store.page - 4 >= 1 ? r("button", {
                    staticClass: "btn btn-default",
                    attrs: {
                        disabled: ""
                    }
                }, [t._v("...")]) : t._e(), t._v(" "), t.store.page - 2 >= 1 ? r("button", {
                    staticClass: "btn btn-default",
                    on: {
                        click: function(e) {
                            t.store.setPage(t.store.page - 2, e)
                        }
                    }
                }, [t._v(t._s(t.store.page - 2))]) : t._e(), t._v(" "), t.store.page - 1 >= 1 ? r("button", {
                    staticClass: "btn btn-default",
                    on: {
                        click: function(e) {
                            t.store.setPage(t.store.page - 1, e)
                        }
                    }
                }, [t._v(t._s(t.store.page - 1))]) : t._e(), t._v(" "), r("button", {
                    staticClass: "btn btn-default active"
                }, [t._v(t._s(t.store.page))]), t._v(" "), t.store.page + 1 <= t.store.last_page ? r("button", {
                    staticClass: "btn btn-default",
                    on: {
                        click: function(e) {
                            t.store.setPage(t.store.page + 1, e)
                        }
                    }
                }, [t._v(t._s(t.store.page + 1))]) : t._e(), t._v(" "), t.store.page + 2 <= t.store.last_page ? r("button", {
                    staticClass: "btn btn-default",
                    on: {
                        click: function(e) {
                            t.store.setPage(t.store.page + 2, e)
                        }
                    }
                }, [t._v(t._s(t.store.page + 2))]) : t._e(), t._v(" "), t.store.page + 4 <= t.store.last_page ? r("button", {
                    staticClass: "btn btn-default",
                    attrs: {
                        disabled: ""
                    }
                }, [t._v("...")]) : t._e(), t._v(" "), t.store.page + 3 <= t.store.last_page ? r("button", {
                    staticClass: "btn btn-default",
                    on: {
                        click: function(e) {
                            t.store.setPage(t.store.last_page, e)
                        }
                    }
                }, [t._v(t._s(t.store.last_page))]) : t._e()]) : t._e()])])])])
            },
            staticRenderFns: []
        }
    },
    9: function(t, e, r) {
        var n = r(4);
        "string" == typeof n && (n = [
            [t.i, n, ""]
        ]), n.locals && (t.exports = n.locals);
        r(10)("ddf77986", n, !0)
    }
});