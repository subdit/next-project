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

/***/ "./lib/posts.js":
/*!**********************!*\
  !*** ./lib/posts.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getPost\": () => (/* binding */ getPost)\n/* harmony export */ });\n/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs/promises */ \"fs/promises\");\n/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs_promises__WEBPACK_IMPORTED_MODULE_0__);\n\n// slug is a read file specific loading only a first post\nasync function getPost(slug) {\n    const data = await (0,fs_promises__WEBPACK_IMPORTED_MODULE_0__.readFile)(`contents/posts/${slug}.json`, \"utf8\");\n    return JSON.parse(data);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvcG9zdHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXVDO0FBRXZDLHlEQUF5RDtBQUNsRCxlQUFlQyxRQUFRQyxJQUFJLEVBQUU7SUFDbEMsTUFBTUMsT0FBTyxNQUFNSCxxREFBUUEsQ0FBQyxDQUFDLGVBQWUsRUFBRUUsS0FBSyxLQUFLLENBQUMsRUFBRTtJQUMzRCxPQUFPRSxLQUFLQyxLQUFLLENBQUNGO0FBQ3BCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWJsb2ctcHJvamVjdC8uL2xpYi9wb3N0cy5qcz9mNGE4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlYWRGaWxlIH0gZnJvbSAnZnMvcHJvbWlzZXMnO1xuXG4vLyBzbHVnIGlzIGEgcmVhZCBmaWxlIHNwZWNpZmljIGxvYWRpbmcgb25seSBhIGZpcnN0IHBvc3RcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQb3N0KHNsdWcpIHtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlYWRGaWxlKGBjb250ZW50cy9wb3N0cy8ke3NsdWd9Lmpzb25gLCAndXRmOCcpO1xuICByZXR1cm4gSlNPTi5wYXJzZShkYXRhKTtcbn1cbiJdLCJuYW1lcyI6WyJyZWFkRmlsZSIsImdldFBvc3QiLCJzbHVnIiwiZGF0YSIsIkpTT04iLCJwYXJzZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/posts.js\n");

/***/ }),

/***/ "./pages/posts/first-post.js":
/*!***********************************!*\
  !*** ./pages/posts/first-post.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_posts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/posts */ \"./lib/posts.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n// using async to loading data and return as a object to call for callback to getStaticProps function.\nasync function getStaticProps() {\n    console.log(\"[FirstPostPage] getStaticProps()\");\n    const post = await (0,_lib_posts__WEBPACK_IMPORTED_MODULE_1__.getPost)(\"first-post\");\n    return {\n        props: {\n            post\n        }\n    };\n}\nfunction FirstPostPage({ post  }) {\n    console.log(\"[FirstPostPage] render\", post);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: post.title\n                    }, void 0, false, {\n                        fileName: \"/Users/kasiditbualoeng/Downloads/next-project/pages/posts/first-post.js\",\n                        lineNumber: 19,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        value: \"first post\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kasiditbualoeng/Downloads/next-project/pages/posts/first-post.js\",\n                        lineNumber: 20,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kasiditbualoeng/Downloads/next-project/pages/posts/first-post.js\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: post.title\n                    }, void 0, false, {\n                        fileName: \"/Users/kasiditbualoeng/Downloads/next-project/pages/posts/first-post.js\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            post.body,\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/kasiditbualoeng/Downloads/next-project/pages/posts/first-post.js\",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: post.description\n                    }, void 0, false, {\n                        fileName: \"/Users/kasiditbualoeng/Downloads/next-project/pages/posts/first-post.js\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kasiditbualoeng/Downloads/next-project/pages/posts/first-post.js\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FirstPostPage);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0cy9maXJzdC1wb3N0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQTBDO0FBQ2I7QUFFN0Isc0dBQXNHO0FBQy9GLGVBQWVFLGlCQUFpQjtJQUNyQ0MsUUFBUUMsR0FBRyxDQUFDO0lBRVosTUFBTUMsT0FBTyxNQUFNTCxtREFBT0EsQ0FBQztJQUMzQixPQUFPO1FBQ0xNLE9BQU87WUFBRUQ7UUFBSztJQUNoQjtBQUNGLENBQUM7QUFFRCxTQUFTRSxjQUFjLEVBQUVGLEtBQUksRUFBRSxFQUFFO0lBQy9CRixRQUFRQyxHQUFHLENBQUMsMEJBQTBCQztJQUN0QyxxQkFDRTs7MEJBQ0UsOERBQUNKLGtEQUFJQTs7a0NBQ0gsOERBQUNPO2tDQUFPSCxLQUFLRyxLQUFLOzs7Ozs7a0NBQ2xCLDhEQUFDQzt3QkFBS0MsTUFBSzt3QkFBY0MsT0FBTTs7Ozs7Ozs7Ozs7OzBCQUVqQyw4REFBQ0M7O2tDQUNDLDhEQUFDQztrQ0FBSVIsS0FBS0csS0FBSzs7Ozs7O2tDQUNmLDhEQUFDTTs7NEJBQUdULEtBQUtVLElBQUk7NEJBQUM7Ozs7Ozs7a0NBQ2QsOERBQUNDO2tDQUFNWCxLQUFLWSxXQUFXOzs7Ozs7Ozs7Ozs7OztBQUkvQjtBQUNBLGlFQUFlVixhQUFhQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC1ibG9nLXByb2plY3QvLi9wYWdlcy9wb3N0cy9maXJzdC1wb3N0LmpzPzM0MTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0UG9zdCB9IGZyb20gJy4uLy4uL2xpYi9wb3N0cyc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuXG4vLyB1c2luZyBhc3luYyB0byBsb2FkaW5nIGRhdGEgYW5kIHJldHVybiBhcyBhIG9iamVjdCB0byBjYWxsIGZvciBjYWxsYmFjayB0byBnZXRTdGF0aWNQcm9wcyBmdW5jdGlvbi5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgY29uc29sZS5sb2coJ1tGaXJzdFBvc3RQYWdlXSBnZXRTdGF0aWNQcm9wcygpJyk7XG5cbiAgY29uc3QgcG9zdCA9IGF3YWl0IGdldFBvc3QoJ2ZpcnN0LXBvc3QnKTtcbiAgcmV0dXJuIHtcbiAgICBwcm9wczogeyBwb3N0IH1cbiAgfTtcbn1cblxuZnVuY3Rpb24gRmlyc3RQb3N0UGFnZSh7IHBvc3QgfSkge1xuICBjb25zb2xlLmxvZygnW0ZpcnN0UG9zdFBhZ2VdIHJlbmRlcicsIHBvc3QpO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPntwb3N0LnRpdGxlfTwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9J2Rlc2NyaXB0aW9uJyB2YWx1ZT0nZmlyc3QgcG9zdCc+PC9tZXRhPlxuICAgICAgPC9IZWFkPlxuICAgICAgPG1haW4+XG4gICAgICAgIDxoMT57cG9zdC50aXRsZX08L2gxPlxuICAgICAgICA8cD57cG9zdC5ib2R5fSA8L3A+XG4gICAgICAgIDxzcGFuPntwb3N0LmRlc2NyaXB0aW9ufTwvc3Bhbj5cbiAgICAgIDwvbWFpbj5cbiAgICA8Lz5cbiAgKTtcbn1cbmV4cG9ydCBkZWZhdWx0IEZpcnN0UG9zdFBhZ2U7XG4iXSwibmFtZXMiOlsiZ2V0UG9zdCIsIkhlYWQiLCJnZXRTdGF0aWNQcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJwb3N0IiwicHJvcHMiLCJGaXJzdFBvc3RQYWdlIiwidGl0bGUiLCJtZXRhIiwibmFtZSIsInZhbHVlIiwibWFpbiIsImgxIiwicCIsImJvZHkiLCJzcGFuIiwiZGVzY3JpcHRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/posts/first-post.js\n");

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