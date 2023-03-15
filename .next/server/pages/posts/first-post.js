"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/posts/first-post";
exports.ids = ["pages/posts/first-post"];
exports.modules = {

/***/ "./pages/posts/first-post.js":
/*!***********************************!*\
  !*** ./pages/posts/first-post.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs/promises */ \"fs/promises\");\n/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs_promises__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n// slug is a read file specific loading only a first post\nasync function getPost(slug) {\n    const data = await (0,fs_promises__WEBPACK_IMPORTED_MODULE_1__.readFile)(`contents/posts/${slug}.json`, \"utf8\");\n    return JSON.parse(data);\n}\n// using async to loading data and return as a object to call for callback to getStaticProps function.\nasync function getStaticProps() {\n    console.log(\"[FirstPostPage] getStaticProps()\");\n    const post = await getPost(\"first-post\");\n    return {\n        props: {\n            post\n        }\n    };\n}\nfunction FirstPostPage({ post  }) {\n    console.log(\"[FirstPostPage] render\", post);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: post.title\n                    }, void 0, false, {\n                        fileName: \"/Users/kasiditbualoeng/Downloads/next-project/pages/posts/first-post.js\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        value: \"first post\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kasiditbualoeng/Downloads/next-project/pages/posts/first-post.js\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kasiditbualoeng/Downloads/next-project/pages/posts/first-post.js\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: post.title\n                    }, void 0, false, {\n                        fileName: \"/Users/kasiditbualoeng/Downloads/next-project/pages/posts/first-post.js\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            post.body,\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/kasiditbualoeng/Downloads/next-project/pages/posts/first-post.js\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: post.description\n                    }, void 0, false, {\n                        fileName: \"/Users/kasiditbualoeng/Downloads/next-project/pages/posts/first-post.js\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kasiditbualoeng/Downloads/next-project/pages/posts/first-post.js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FirstPostPage);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0cy9maXJzdC1wb3N0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUF1QztBQUNWO0FBRTdCLHlEQUF5RDtBQUN6RCxlQUFlRSxRQUFRQyxJQUFJLEVBQUU7SUFDM0IsTUFBTUMsT0FBTyxNQUFNSixxREFBUUEsQ0FBQyxDQUFDLGVBQWUsRUFBRUcsS0FBSyxLQUFLLENBQUMsRUFBRTtJQUMzRCxPQUFPRSxLQUFLQyxLQUFLLENBQUNGO0FBQ3BCO0FBRUEsc0dBQXNHO0FBQy9GLGVBQWVHLGlCQUFpQjtJQUNyQ0MsUUFBUUMsR0FBRyxDQUFDO0lBRVosTUFBTUMsT0FBTyxNQUFNUixRQUFRO0lBQzNCLE9BQU87UUFDTFMsT0FBTztZQUFFRDtRQUFLO0lBQ2hCO0FBQ0YsQ0FBQztBQUVELFNBQVNFLGNBQWMsRUFBRUYsS0FBSSxFQUFFLEVBQUU7SUFDL0JGLFFBQVFDLEdBQUcsQ0FBQywwQkFBMEJDO0lBQ3RDLHFCQUNFOzswQkFDRSw4REFBQ1Qsa0RBQUlBOztrQ0FDSCw4REFBQ1k7a0NBQU9ILEtBQUtHLEtBQUs7Ozs7OztrQ0FDbEIsOERBQUNDO3dCQUFLQyxNQUFLO3dCQUFjQyxPQUFNOzs7Ozs7Ozs7Ozs7MEJBRWpDLDhEQUFDQzs7a0NBQ0MsOERBQUNDO2tDQUFJUixLQUFLRyxLQUFLOzs7Ozs7a0NBQ2YsOERBQUNNOzs0QkFBR1QsS0FBS1UsSUFBSTs0QkFBQzs7Ozs7OztrQ0FDZCw4REFBQ0M7a0NBQU1YLEtBQUtZLFdBQVc7Ozs7Ozs7Ozs7Ozs7O0FBSS9CO0FBQ0EsaUVBQWVWLGFBQWFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWJsb2ctcHJvamVjdC8uL3BhZ2VzL3Bvc3RzL2ZpcnN0LXBvc3QuanM/MzQxMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZWFkRmlsZSB9IGZyb20gJ2ZzL3Byb21pc2VzJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5cbi8vIHNsdWcgaXMgYSByZWFkIGZpbGUgc3BlY2lmaWMgbG9hZGluZyBvbmx5IGEgZmlyc3QgcG9zdFxuYXN5bmMgZnVuY3Rpb24gZ2V0UG9zdChzbHVnKSB7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZWFkRmlsZShgY29udGVudHMvcG9zdHMvJHtzbHVnfS5qc29uYCwgJ3V0ZjgnKTtcbiAgcmV0dXJuIEpTT04ucGFyc2UoZGF0YSk7XG59XG5cbi8vIHVzaW5nIGFzeW5jIHRvIGxvYWRpbmcgZGF0YSBhbmQgcmV0dXJuIGFzIGEgb2JqZWN0IHRvIGNhbGwgZm9yIGNhbGxiYWNrIHRvIGdldFN0YXRpY1Byb3BzIGZ1bmN0aW9uLlxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuICBjb25zb2xlLmxvZygnW0ZpcnN0UG9zdFBhZ2VdIGdldFN0YXRpY1Byb3BzKCknKTtcblxuICBjb25zdCBwb3N0ID0gYXdhaXQgZ2V0UG9zdCgnZmlyc3QtcG9zdCcpO1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7IHBvc3QgfVxuICB9O1xufVxuXG5mdW5jdGlvbiBGaXJzdFBvc3RQYWdlKHsgcG9zdCB9KSB7XG4gIGNvbnNvbGUubG9nKCdbRmlyc3RQb3N0UGFnZV0gcmVuZGVyJywgcG9zdCk7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+e3Bvc3QudGl0bGV9PC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT0nZGVzY3JpcHRpb24nIHZhbHVlPSdmaXJzdCBwb3N0Jz48L21ldGE+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8bWFpbj5cbiAgICAgICAgPGgxPntwb3N0LnRpdGxlfTwvaDE+XG4gICAgICAgIDxwPntwb3N0LmJvZHl9IDwvcD5cbiAgICAgICAgPHNwYW4+e3Bvc3QuZGVzY3JpcHRpb259PC9zcGFuPlxuICAgICAgPC9tYWluPlxuICAgIDwvPlxuICApO1xufVxuZXhwb3J0IGRlZmF1bHQgRmlyc3RQb3N0UGFnZTtcbiJdLCJuYW1lcyI6WyJyZWFkRmlsZSIsIkhlYWQiLCJnZXRQb3N0Iiwic2x1ZyIsImRhdGEiLCJKU09OIiwicGFyc2UiLCJnZXRTdGF0aWNQcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJwb3N0IiwicHJvcHMiLCJGaXJzdFBvc3RQYWdlIiwidGl0bGUiLCJtZXRhIiwibmFtZSIsInZhbHVlIiwibWFpbiIsImgxIiwicCIsImJvZHkiLCJzcGFuIiwiZGVzY3JpcHRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/posts/first-post.js\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "fs/promises":
/*!******************************!*\
  !*** external "fs/promises" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("fs/promises");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/posts/first-post.js"));
module.exports = __webpack_exports__;

})();