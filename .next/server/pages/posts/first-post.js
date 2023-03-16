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
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getPost\": () => (/* binding */ getPost)\n/* harmony export */ });\n/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs/promises */ \"fs/promises\");\n/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs_promises__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! marked */ \"marked\");\n/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gray-matter */ \"gray-matter\");\n/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_2__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([marked__WEBPACK_IMPORTED_MODULE_1__]);\nmarked__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n// slug is a read file specific loading only a first post\nasync function getPost(slug) {\n    const source = await (0,fs_promises__WEBPACK_IMPORTED_MODULE_0__.readFile)(`contents/posts/${slug}.md`, \"utf8\");\n    const { data: { date , title  } , content  } = gray_matter__WEBPACK_IMPORTED_MODULE_2___default()(source);\n    const body = (0,marked__WEBPACK_IMPORTED_MODULE_1__.marked)(content);\n    return {\n        date,\n        title,\n        body\n    };\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvcG9zdHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQXVDO0FBQ1A7QUFDQztBQUVqQyx5REFBeUQ7QUFDbEQsZUFBZUcsUUFBUUMsSUFBSSxFQUFFO0lBQ2xDLE1BQU1DLFNBQVMsTUFBTUwscURBQVFBLENBQUMsQ0FBQyxlQUFlLEVBQUVJLEtBQUssR0FBRyxDQUFDLEVBQUU7SUFDM0QsTUFBTSxFQUNKRSxNQUFNLEVBQUVDLEtBQUksRUFBRUMsTUFBSyxFQUFFLEdBQ3JCQyxRQUFPLEVBQ1IsR0FBR1Asa0RBQU1BLENBQUNHO0lBQ1gsTUFBTUssT0FBT1QsOENBQU1BLENBQUNRO0lBQ3BCLE9BQU87UUFDTEY7UUFDQUM7UUFDQUU7SUFDRjtBQUNGLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWJsb2ctcHJvamVjdC8uL2xpYi9wb3N0cy5qcz9mNGE4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlYWRGaWxlIH0gZnJvbSAnZnMvcHJvbWlzZXMnO1xuaW1wb3J0IHsgbWFya2VkIH0gZnJvbSAnbWFya2VkJztcbmltcG9ydCBtYXR0ZXIgZnJvbSAnZ3JheS1tYXR0ZXInO1xuXG4vLyBzbHVnIGlzIGEgcmVhZCBmaWxlIHNwZWNpZmljIGxvYWRpbmcgb25seSBhIGZpcnN0IHBvc3RcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQb3N0KHNsdWcpIHtcbiAgY29uc3Qgc291cmNlID0gYXdhaXQgcmVhZEZpbGUoYGNvbnRlbnRzL3Bvc3RzLyR7c2x1Z30ubWRgLCAndXRmOCcpO1xuICBjb25zdCB7XG4gICAgZGF0YTogeyBkYXRlLCB0aXRsZSB9LFxuICAgIGNvbnRlbnRcbiAgfSA9IG1hdHRlcihzb3VyY2UpO1xuICBjb25zdCBib2R5ID0gbWFya2VkKGNvbnRlbnQpO1xuICByZXR1cm4ge1xuICAgIGRhdGUsXG4gICAgdGl0bGUsXG4gICAgYm9keVxuICB9O1xufVxuIl0sIm5hbWVzIjpbInJlYWRGaWxlIiwibWFya2VkIiwibWF0dGVyIiwiZ2V0UG9zdCIsInNsdWciLCJzb3VyY2UiLCJkYXRhIiwiZGF0ZSIsInRpdGxlIiwiY29udGVudCIsImJvZHkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/posts.js\n");

/***/ }),

/***/ "./pages/posts/first-post.js":
/*!***********************************!*\
  !*** ./pages/posts/first-post.js ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_posts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/posts */ \"./lib/posts.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_posts__WEBPACK_IMPORTED_MODULE_1__]);\n_lib_posts__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n// using async to loading data and return as a object to call for callback to getStaticProps function.\nasync function getStaticProps() {\n    console.log(\"[PostPage] getStaticProps()\");\n    const post = await (0,_lib_posts__WEBPACK_IMPORTED_MODULE_1__.getPost)(\"first-post\");\n    return {\n        props: {\n            post\n        }\n    };\n}\nfunction PostPage({ post  }) {\n    console.log(\"[PostPage] render\", post);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: post.title\n                    }, void 0, false, {\n                        fileName: \"/Users/kasiditbualoeng/Downloads/next-project/pages/posts/first-post.js\",\n                        lineNumber: 19,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        value: \"first post\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kasiditbualoeng/Downloads/next-project/pages/posts/first-post.js\",\n                        lineNumber: 20,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kasiditbualoeng/Downloads/next-project/pages/posts/first-post.js\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: post.date\n                    }, void 0, false, {\n                        fileName: \"/Users/kasiditbualoeng/Downloads/next-project/pages/posts/first-post.js\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: post.title\n                    }, void 0, false, {\n                        fileName: \"/Users/kasiditbualoeng/Downloads/next-project/pages/posts/first-post.js\",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n                        dangerouslySetInnerHTML: {\n                            __html: post.body\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/kasiditbualoeng/Downloads/next-project/pages/posts/first-post.js\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kasiditbualoeng/Downloads/next-project/pages/posts/first-post.js\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PostPage);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0cy9maXJzdC1wb3N0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQTBDO0FBQ2I7QUFFN0Isc0dBQXNHO0FBQy9GLGVBQWVFLGlCQUFpQjtJQUNyQ0MsUUFBUUMsR0FBRyxDQUFDO0lBRVosTUFBTUMsT0FBTyxNQUFNTCxtREFBT0EsQ0FBQztJQUMzQixPQUFPO1FBQ0xNLE9BQU87WUFBRUQ7UUFBSztJQUNoQjtBQUNGLENBQUM7QUFFRCxTQUFTRSxTQUFTLEVBQUVGLEtBQUksRUFBRSxFQUFFO0lBQzFCRixRQUFRQyxHQUFHLENBQUMscUJBQXFCQztJQUNqQyxxQkFDRTs7MEJBQ0UsOERBQUNKLGtEQUFJQTs7a0NBQ0gsOERBQUNPO2tDQUFPSCxLQUFLRyxLQUFLOzs7Ozs7a0NBQ2xCLDhEQUFDQzt3QkFBS0MsTUFBSzt3QkFBY0MsT0FBTTs7Ozs7Ozs7Ozs7OzBCQUVqQyw4REFBQ0M7O2tDQUNDLDhEQUFDQztrQ0FBR1IsS0FBS1MsSUFBSTs7Ozs7O2tDQUNiLDhEQUFDQztrQ0FBSVYsS0FBS0csS0FBSzs7Ozs7O2tDQUVmLDhEQUFDUTt3QkFBUUMseUJBQXlCOzRCQUFFQyxRQUFRYixLQUFLYyxJQUFJO3dCQUFDOzs7Ozs7Ozs7Ozs7OztBQUk5RDtBQUNBLGlFQUFlWixRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC1ibG9nLXByb2plY3QvLi9wYWdlcy9wb3N0cy9maXJzdC1wb3N0LmpzPzM0MTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0UG9zdCB9IGZyb20gJy4uLy4uL2xpYi9wb3N0cyc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuXG4vLyB1c2luZyBhc3luYyB0byBsb2FkaW5nIGRhdGEgYW5kIHJldHVybiBhcyBhIG9iamVjdCB0byBjYWxsIGZvciBjYWxsYmFjayB0byBnZXRTdGF0aWNQcm9wcyBmdW5jdGlvbi5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgY29uc29sZS5sb2coJ1tQb3N0UGFnZV0gZ2V0U3RhdGljUHJvcHMoKScpO1xuXG4gIGNvbnN0IHBvc3QgPSBhd2FpdCBnZXRQb3N0KCdmaXJzdC1wb3N0Jyk7XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHsgcG9zdCB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIFBvc3RQYWdlKHsgcG9zdCB9KSB7XG4gIGNvbnNvbGUubG9nKCdbUG9zdFBhZ2VdIHJlbmRlcicsIHBvc3QpO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPntwb3N0LnRpdGxlfTwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9J2Rlc2NyaXB0aW9uJyB2YWx1ZT0nZmlyc3QgcG9zdCc+PC9tZXRhPlxuICAgICAgPC9IZWFkPlxuICAgICAgPG1haW4+XG4gICAgICAgIDxwPntwb3N0LmRhdGV9PC9wPlxuICAgICAgICA8aDE+e3Bvc3QudGl0bGV9PC9oMT5cblxuICAgICAgICA8YXJ0aWNsZSBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHBvc3QuYm9keSB9fSAvPlxuICAgICAgPC9tYWluPlxuICAgIDwvPlxuICApO1xufVxuZXhwb3J0IGRlZmF1bHQgUG9zdFBhZ2U7XG4iXSwibmFtZXMiOlsiZ2V0UG9zdCIsIkhlYWQiLCJnZXRTdGF0aWNQcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJwb3N0IiwicHJvcHMiLCJQb3N0UGFnZSIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJ2YWx1ZSIsIm1haW4iLCJwIiwiZGF0ZSIsImgxIiwiYXJ0aWNsZSIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwiYm9keSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/posts/first-post.js\n");

/***/ }),

/***/ "gray-matter":
/*!******************************!*\
  !*** external "gray-matter" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("gray-matter");

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

/***/ "marked":
/*!*************************!*\
  !*** external "marked" ***!
  \*************************/
/***/ ((module) => {

module.exports = import("marked");;

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