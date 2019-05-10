!function(r) {
    var n = {};
    function o(e) {
        if (n[e]) return n[e].exports;
        var _ = n[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return r[e].call(_.exports, _, _.exports, o), _.l = !0, _.exports;
    }
    o.m = r, o.c = n, o.d = function(e, _, r) {
        o.o(e, _) || Object.defineProperty(e, _, {
            enumerable: !0,
            get: r
        });
    }, o.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        });
    }, o.t = function(_, e) {
        if (1 & e && (_ = o(_)), 8 & e) return _;
        if (4 & e && "object" == typeof _ && _ && _.__esModule) return _;
        var r = Object.create(null);
        if (o.r(r), Object.defineProperty(r, "default", {
            enumerable: !0,
            value: _
        }), 2 & e && "string" != typeof _) for (var n in _) o.d(r, n, function(e) {
            return _[e];
        }.bind(null, n));
        return r;
    }, o.n = function(e) {
        var _ = e && e.__esModule ? function() {
            return e.default;
        } : function() {
            return e;
        };
        return o.d(_, "a", _), _;
    }, o.o = function(e, _) {
        return Object.prototype.hasOwnProperty.call(e, _);
    }, o.p = "/", o(o.s = 0);
}({
    "./node_modules/lodash/lodash.js": function(module, exports, __webpack_require__) {
        eval('module.exports = (__webpack_require__(/*! dll-reference vendor_7540de75d5008c17e9b3 */ "dll-reference vendor_7540de75d5008c17e9b3"))(1);\n\n//# sourceURL=webpack:///delegated_./node_modules/lodash/lodash.js_from_dll-reference_vendor_7540de75d5008c17e9b3?');
    },
    "./src/a.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStr\", function() { return getStr; });\nconst getStr = () => '22222';\n\n\n//# sourceURL=webpack:///./src/a.js?");
    },
    "./src/main.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _a__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./a */ "./src/a.js");\n\n\nfunction append(id, child) {\n  document.getElementById(id).append(lodash__WEBPACK_IMPORTED_MODULE_0___default.a.concat([\'hello\', child]));\n}\n\nif (false) {}\n\n// 添加子元素\nappend(\'app\', Object(_a__WEBPACK_IMPORTED_MODULE_1__["getStr"])());\n\n\n//# sourceURL=webpack:///./src/main.js?');
    },
    0: function(module, exports, __webpack_require__) {
        eval('module.exports = __webpack_require__(/*! ./src/main.js */"./src/main.js");\n\n\n//# sourceURL=webpack:///multi_./src/main.js?');
    },
    "dll-reference vendor_7540de75d5008c17e9b3": function(module, exports) {
        eval("module.exports = vendor_7540de75d5008c17e9b3;\n\n//# sourceURL=webpack:///external_%22vendor_7540de75d5008c17e9b3%22?");
    }
});