"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/posts/[slug].js":
/*!*******************************!*\
  !*** ./pages/posts/[slug].js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction PostPage(param) {\n    let { post  } = param;\n    console.log(\"[PostPage] render\", post);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: post.title\n                    }, void 0, false, {\n                        fileName: \"/Users/kasiditbualoeng/Downloads/next-project/pages/posts/[slug].js\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        value: \"first post\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kasiditbualoeng/Downloads/next-project/pages/posts/[slug].js\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kasiditbualoeng/Downloads/next-project/pages/posts/[slug].js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: post.date\n                    }, void 0, false, {\n                        fileName: \"/Users/kasiditbualoeng/Downloads/next-project/pages/posts/[slug].js\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: post.title\n                    }, void 0, false, {\n                        fileName: \"/Users/kasiditbualoeng/Downloads/next-project/pages/posts/[slug].js\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n                        dangerouslySetInnerHTML: {\n                            __html: post.body\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/kasiditbualoeng/Downloads/next-project/pages/posts/[slug].js\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kasiditbualoeng/Downloads/next-project/pages/posts/[slug].js\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_c = PostPage;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostPage);\nvar _c;\n$RefreshReg$(_c, \"PostPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0cy9bc2x1Z10uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQzZCO0FBc0I3QixTQUFTQyxTQUFTLEtBQVEsRUFBRTtRQUFWLEVBQUVDLEtBQUksRUFBRSxHQUFSO0lBQ2hCQyxRQUFRQyxHQUFHLENBQUMscUJBQXFCRjtJQUNqQyxxQkFDRTs7MEJBQ0UsOERBQUNGLGtEQUFJQTs7a0NBQ0gsOERBQUNLO2tDQUFPSCxLQUFLRyxLQUFLOzs7Ozs7a0NBQ2xCLDhEQUFDQzt3QkFBS0MsTUFBSzt3QkFBY0MsT0FBTTs7Ozs7Ozs7Ozs7OzBCQUVqQyw4REFBQ0M7O2tDQUNDLDhEQUFDQztrQ0FBR1IsS0FBS1MsSUFBSTs7Ozs7O2tDQUNiLDhEQUFDQztrQ0FBSVYsS0FBS0csS0FBSzs7Ozs7O2tDQUVmLDhEQUFDUTt3QkFBUUMseUJBQXlCOzRCQUFFQyxRQUFRYixLQUFLYyxJQUFJO3dCQUFDOzs7Ozs7Ozs7Ozs7OztBQUk5RDtLQWhCU2Y7O0FBaUJULCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Bvc3RzL1tzbHVnXS5qcz82OTBlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldFBvc3QsIGdldFNsdWdzIH0gZnJvbSAnLi4vLi4vbGliL3Bvc3RzJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcbiAgY29uc3Qgc2x1Z3MgPSBhd2FpdCBnZXRTbHVncygpO1xuICByZXR1cm4ge1xuICAgIHBhdGhzOiBzbHVncy5tYXAoc2x1ZyA9PiAoe1xuICAgICAgcGFyYW1zOiB7IHNsdWcgfVxuICAgIH0pKSxcbiAgICBmYWxsYmFjazogZmFsc2VcbiAgfTtcbn1cblxuLy8gdXNpbmcgYXN5bmMgdG8gbG9hZGluZyBkYXRhIGFuZCByZXR1cm4gYXMgYSBvYmplY3QgdG8gY2FsbCBmb3IgY2FsbGJhY2sgdG8gZ2V0U3RhdGljUHJvcHMgZnVuY3Rpb24uXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoeyBwYXJhbXM6IHsgc2x1ZyB9IH0pIHtcbiAgY29uc29sZS5sb2coJ1tQb3N0UGFnZV0gZ2V0U3RhdGljUHJvcHMoKScsIHNsdWcpO1xuXG4gIGNvbnN0IHBvc3QgPSBhd2FpdCBnZXRQb3N0KHNsdWcpO1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7IHBvc3QgfVxuICB9O1xufVxuXG5mdW5jdGlvbiBQb3N0UGFnZSh7IHBvc3QgfSkge1xuICBjb25zb2xlLmxvZygnW1Bvc3RQYWdlXSByZW5kZXInLCBwb3N0KTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT57cG9zdC50aXRsZX08L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPSdkZXNjcmlwdGlvbicgdmFsdWU9J2ZpcnN0IHBvc3QnPjwvbWV0YT5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxtYWluPlxuICAgICAgICA8cD57cG9zdC5kYXRlfTwvcD5cbiAgICAgICAgPGgxPntwb3N0LnRpdGxlfTwvaDE+XG5cbiAgICAgICAgPGFydGljbGUgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBwb3N0LmJvZHkgfX0gLz5cbiAgICAgIDwvbWFpbj5cbiAgICA8Lz5cbiAgKTtcbn1cbmV4cG9ydCBkZWZhdWx0IFBvc3RQYWdlO1xuIl0sIm5hbWVzIjpbIkhlYWQiLCJQb3N0UGFnZSIsInBvc3QiLCJjb25zb2xlIiwibG9nIiwidGl0bGUiLCJtZXRhIiwibmFtZSIsInZhbHVlIiwibWFpbiIsInAiLCJkYXRlIiwiaDEiLCJhcnRpY2xlIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiLCJib2R5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/posts/[slug].js\n"));

/***/ })

});