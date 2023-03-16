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
exports.id = "pages/posts/[slug]";
exports.ids = ["pages/posts/[slug]"];
exports.modules = {

/***/ "./lib/posts.js":
/*!**********************!*\
  !*** ./lib/posts.js ***!
  \**********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getPost\": () => (/* binding */ getPost),\n/* harmony export */   \"getPosts\": () => (/* binding */ getPosts),\n/* harmony export */   \"getSlugs\": () => (/* binding */ getSlugs)\n/* harmony export */ });\n/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs/promises */ \"fs/promises\");\n/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs_promises__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gray-matter */ \"gray-matter\");\n/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! marked */ \"marked\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([marked__WEBPACK_IMPORTED_MODULE_2__]);\nmarked__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nasync function getPost(slug) {\n    const source = await (0,fs_promises__WEBPACK_IMPORTED_MODULE_0__.readFile)(`content/posts/${slug}.md`, \"utf8\");\n    const { data: { date , title  } , content  } = gray_matter__WEBPACK_IMPORTED_MODULE_1___default()(source);\n    const body = (0,marked__WEBPACK_IMPORTED_MODULE_2__.marked)(content);\n    return {\n        date,\n        title,\n        body\n    };\n}\n// function to getPosts of slugs and push each slug into getPosts\nasync function getPosts() {\n    const slugs = await getSlugs();\n    const posts = [];\n    for (const slug of slugs){\n        const post = await getPost(slug);\n        posts.push(post);\n    }\n}\n// use filter file that end with .md and map out the extra caracters by .slice(0, -3);\n// eturn files\n//     .filter(file => file.endsWith('.md'))\n//     .map(file => file.slice(0, -3));\nasync function getSlugs() {\n    const suffix = \".md\";\n    const files = await (0,fs_promises__WEBPACK_IMPORTED_MODULE_0__.readdir)(\"content/posts\");\n    return files.filter((file)=>file.endsWith(suffix)).map((file)=>file.slice(0, -suffix.length));\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvcG9zdHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBZ0Q7QUFDZjtBQUNEO0FBRXpCLGVBQWVJLFFBQVFDLElBQUksRUFBRTtJQUNsQyxNQUFNQyxTQUFTLE1BQU1MLHFEQUFRQSxDQUFDLENBQUMsY0FBYyxFQUFFSSxLQUFLLEdBQUcsQ0FBQyxFQUFFO0lBQzFELE1BQU0sRUFDSkUsTUFBTSxFQUFFQyxLQUFJLEVBQUVDLE1BQUssRUFBRSxHQUNyQkMsUUFBTyxFQUNSLEdBQUdSLGtEQUFNQSxDQUFDSTtJQUNYLE1BQU1LLE9BQU9SLDhDQUFNQSxDQUFDTztJQUNwQixPQUFPO1FBQUVGO1FBQU1DO1FBQU9FO0lBQUs7QUFDN0IsQ0FBQztBQUVELGlFQUFpRTtBQUMxRCxlQUFlQyxXQUFXO0lBQy9CLE1BQU1DLFFBQVEsTUFBTUM7SUFDcEIsTUFBTUMsUUFBUSxFQUFFO0lBQ2hCLEtBQUssTUFBTVYsUUFBUVEsTUFBTztRQUN4QixNQUFNRyxPQUFPLE1BQU1aLFFBQVFDO1FBQzNCVSxNQUFNRSxJQUFJLENBQUNEO0lBQ2I7QUFDRixDQUFDO0FBRUQsc0ZBQXNGO0FBQ3RGLGNBQWM7QUFDZCw0Q0FBNEM7QUFDNUMsdUNBQXVDO0FBRWhDLGVBQWVGLFdBQVc7SUFDL0IsTUFBTUksU0FBUztJQUNmLE1BQU1DLFFBQVEsTUFBTW5CLG9EQUFPQSxDQUFDO0lBQzVCLE9BQU9tQixNQUNKQyxNQUFNLENBQUNDLENBQUFBLE9BQVFBLEtBQUtDLFFBQVEsQ0FBQ0osU0FDN0JLLEdBQUcsQ0FBQ0YsQ0FBQUEsT0FBUUEsS0FBS0csS0FBSyxDQUFDLEdBQUcsQ0FBQ04sT0FBT08sTUFBTTtBQUM3QyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC1ibG9nLXByb2plY3QvLi9saWIvcG9zdHMuanM/ZjRhOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZWFkZGlyLCByZWFkRmlsZSB9IGZyb20gJ2ZzL3Byb21pc2VzJztcbmltcG9ydCBtYXR0ZXIgZnJvbSAnZ3JheS1tYXR0ZXInO1xuaW1wb3J0IHsgbWFya2VkIH0gZnJvbSAnbWFya2VkJztcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFBvc3Qoc2x1Zykge1xuICBjb25zdCBzb3VyY2UgPSBhd2FpdCByZWFkRmlsZShgY29udGVudC9wb3N0cy8ke3NsdWd9Lm1kYCwgJ3V0ZjgnKTtcbiAgY29uc3Qge1xuICAgIGRhdGE6IHsgZGF0ZSwgdGl0bGUgfSxcbiAgICBjb250ZW50XG4gIH0gPSBtYXR0ZXIoc291cmNlKTtcbiAgY29uc3QgYm9keSA9IG1hcmtlZChjb250ZW50KTtcbiAgcmV0dXJuIHsgZGF0ZSwgdGl0bGUsIGJvZHkgfTtcbn1cblxuLy8gZnVuY3Rpb24gdG8gZ2V0UG9zdHMgb2Ygc2x1Z3MgYW5kIHB1c2ggZWFjaCBzbHVnIGludG8gZ2V0UG9zdHNcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQb3N0cygpIHtcbiAgY29uc3Qgc2x1Z3MgPSBhd2FpdCBnZXRTbHVncygpO1xuICBjb25zdCBwb3N0cyA9IFtdO1xuICBmb3IgKGNvbnN0IHNsdWcgb2Ygc2x1Z3MpIHtcbiAgICBjb25zdCBwb3N0ID0gYXdhaXQgZ2V0UG9zdChzbHVnKTtcbiAgICBwb3N0cy5wdXNoKHBvc3QpO1xuICB9XG59XG5cbi8vIHVzZSBmaWx0ZXIgZmlsZSB0aGF0IGVuZCB3aXRoIC5tZCBhbmQgbWFwIG91dCB0aGUgZXh0cmEgY2FyYWN0ZXJzIGJ5IC5zbGljZSgwLCAtMyk7XG4vLyBldHVybiBmaWxlc1xuLy8gICAgIC5maWx0ZXIoZmlsZSA9PiBmaWxlLmVuZHNXaXRoKCcubWQnKSlcbi8vICAgICAubWFwKGZpbGUgPT4gZmlsZS5zbGljZSgwLCAtMykpO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2x1Z3MoKSB7XG4gIGNvbnN0IHN1ZmZpeCA9ICcubWQnO1xuICBjb25zdCBmaWxlcyA9IGF3YWl0IHJlYWRkaXIoJ2NvbnRlbnQvcG9zdHMnKTtcbiAgcmV0dXJuIGZpbGVzXG4gICAgLmZpbHRlcihmaWxlID0+IGZpbGUuZW5kc1dpdGgoc3VmZml4KSlcbiAgICAubWFwKGZpbGUgPT4gZmlsZS5zbGljZSgwLCAtc3VmZml4Lmxlbmd0aCkpO1xufVxuIl0sIm5hbWVzIjpbInJlYWRkaXIiLCJyZWFkRmlsZSIsIm1hdHRlciIsIm1hcmtlZCIsImdldFBvc3QiLCJzbHVnIiwic291cmNlIiwiZGF0YSIsImRhdGUiLCJ0aXRsZSIsImNvbnRlbnQiLCJib2R5IiwiZ2V0UG9zdHMiLCJzbHVncyIsImdldFNsdWdzIiwicG9zdHMiLCJwb3N0IiwicHVzaCIsInN1ZmZpeCIsImZpbGVzIiwiZmlsdGVyIiwiZmlsZSIsImVuZHNXaXRoIiwibWFwIiwic2xpY2UiLCJsZW5ndGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/posts.js\n");

/***/ }),

/***/ "./pages/posts/[slug].js":
/*!*******************************!*\
  !*** ./pages/posts/[slug].js ***!
  \*******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getStaticPaths\": () => (/* binding */ getStaticPaths),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_posts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/posts */ \"./lib/posts.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_posts__WEBPACK_IMPORTED_MODULE_1__]);\n_lib_posts__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nasync function getStaticPaths() {\n    const slugs = await (0,_lib_posts__WEBPACK_IMPORTED_MODULE_1__.getSlugs)();\n    return {\n        paths: slugs.map((slug)=>({\n                params: {\n                    slug\n                }\n            })),\n        fallback: false\n    };\n}\n// using async to loading data and return as a object to call for callback to getStaticProps function.\nasync function getStaticProps({ params: { slug  }  }) {\n    console.log(\"[PostPage] getStaticProps()\", slug);\n    const post = await (0,_lib_posts__WEBPACK_IMPORTED_MODULE_1__.getPost)(slug);\n    return {\n        props: {\n            post\n        }\n    };\n}\nfunction PostPage({ post  }) {\n    console.log(\"[PostPage] render\", post);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: post.title\n                    }, void 0, false, {\n                        fileName: \"/Users/kasiditbualoeng/Downloads/next-project/pages/posts/[slug].js\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        value: \"first post\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kasiditbualoeng/Downloads/next-project/pages/posts/[slug].js\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kasiditbualoeng/Downloads/next-project/pages/posts/[slug].js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: post.date\n                    }, void 0, false, {\n                        fileName: \"/Users/kasiditbualoeng/Downloads/next-project/pages/posts/[slug].js\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: post.title\n                    }, void 0, false, {\n                        fileName: \"/Users/kasiditbualoeng/Downloads/next-project/pages/posts/[slug].js\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n                        dangerouslySetInnerHTML: {\n                            __html: post.body\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/kasiditbualoeng/Downloads/next-project/pages/posts/[slug].js\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kasiditbualoeng/Downloads/next-project/pages/posts/[slug].js\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PostPage);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0cy9bc2x1Z10uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQW9EO0FBQ3ZCO0FBRXRCLGVBQWVHLGlCQUFpQjtJQUNyQyxNQUFNQyxRQUFRLE1BQU1ILG9EQUFRQTtJQUM1QixPQUFPO1FBQ0xJLE9BQU9ELE1BQU1FLEdBQUcsQ0FBQ0MsQ0FBQUEsT0FBUztnQkFDeEJDLFFBQVE7b0JBQUVEO2dCQUFLO1lBQ2pCO1FBQ0FFLFVBQVUsS0FBSztJQUNqQjtBQUNGLENBQUM7QUFFRCxzR0FBc0c7QUFDL0YsZUFBZUMsZUFBZSxFQUFFRixRQUFRLEVBQUVELEtBQUksRUFBRSxHQUFFLEVBQUU7SUFDekRJLFFBQVFDLEdBQUcsQ0FBQywrQkFBK0JMO0lBRTNDLE1BQU1NLE9BQU8sTUFBTWIsbURBQU9BLENBQUNPO0lBQzNCLE9BQU87UUFDTE8sT0FBTztZQUFFRDtRQUFLO0lBQ2hCO0FBQ0YsQ0FBQztBQUVELFNBQVNFLFNBQVMsRUFBRUYsS0FBSSxFQUFFLEVBQUU7SUFDMUJGLFFBQVFDLEdBQUcsQ0FBQyxxQkFBcUJDO0lBQ2pDLHFCQUNFOzswQkFDRSw4REFBQ1gsa0RBQUlBOztrQ0FDSCw4REFBQ2M7a0NBQU9ILEtBQUtHLEtBQUs7Ozs7OztrQ0FDbEIsOERBQUNDO3dCQUFLQyxNQUFLO3dCQUFjQyxPQUFNOzs7Ozs7Ozs7Ozs7MEJBRWpDLDhEQUFDQzs7a0NBQ0MsOERBQUNDO2tDQUFHUixLQUFLUyxJQUFJOzs7Ozs7a0NBQ2IsOERBQUNDO2tDQUFJVixLQUFLRyxLQUFLOzs7Ozs7a0NBRWYsOERBQUNRO3dCQUFRQyx5QkFBeUI7NEJBQUVDLFFBQVFiLEtBQUtjLElBQUk7d0JBQUM7Ozs7Ozs7Ozs7Ozs7O0FBSTlEO0FBQ0EsaUVBQWVaLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWJsb2ctcHJvamVjdC8uL3BhZ2VzL3Bvc3RzL1tzbHVnXS5qcz82OTBlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldFBvc3QsIGdldFNsdWdzIH0gZnJvbSAnLi4vLi4vbGliL3Bvc3RzJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcbiAgY29uc3Qgc2x1Z3MgPSBhd2FpdCBnZXRTbHVncygpO1xuICByZXR1cm4ge1xuICAgIHBhdGhzOiBzbHVncy5tYXAoc2x1ZyA9PiAoe1xuICAgICAgcGFyYW1zOiB7IHNsdWcgfVxuICAgIH0pKSxcbiAgICBmYWxsYmFjazogZmFsc2VcbiAgfTtcbn1cblxuLy8gdXNpbmcgYXN5bmMgdG8gbG9hZGluZyBkYXRhIGFuZCByZXR1cm4gYXMgYSBvYmplY3QgdG8gY2FsbCBmb3IgY2FsbGJhY2sgdG8gZ2V0U3RhdGljUHJvcHMgZnVuY3Rpb24uXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoeyBwYXJhbXM6IHsgc2x1ZyB9IH0pIHtcbiAgY29uc29sZS5sb2coJ1tQb3N0UGFnZV0gZ2V0U3RhdGljUHJvcHMoKScsIHNsdWcpO1xuXG4gIGNvbnN0IHBvc3QgPSBhd2FpdCBnZXRQb3N0KHNsdWcpO1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7IHBvc3QgfVxuICB9O1xufVxuXG5mdW5jdGlvbiBQb3N0UGFnZSh7IHBvc3QgfSkge1xuICBjb25zb2xlLmxvZygnW1Bvc3RQYWdlXSByZW5kZXInLCBwb3N0KTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT57cG9zdC50aXRsZX08L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPSdkZXNjcmlwdGlvbicgdmFsdWU9J2ZpcnN0IHBvc3QnPjwvbWV0YT5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxtYWluPlxuICAgICAgICA8cD57cG9zdC5kYXRlfTwvcD5cbiAgICAgICAgPGgxPntwb3N0LnRpdGxlfTwvaDE+XG5cbiAgICAgICAgPGFydGljbGUgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBwb3N0LmJvZHkgfX0gLz5cbiAgICAgIDwvbWFpbj5cbiAgICA8Lz5cbiAgKTtcbn1cbmV4cG9ydCBkZWZhdWx0IFBvc3RQYWdlO1xuIl0sIm5hbWVzIjpbImdldFBvc3QiLCJnZXRTbHVncyIsIkhlYWQiLCJnZXRTdGF0aWNQYXRocyIsInNsdWdzIiwicGF0aHMiLCJtYXAiLCJzbHVnIiwicGFyYW1zIiwiZmFsbGJhY2siLCJnZXRTdGF0aWNQcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJwb3N0IiwicHJvcHMiLCJQb3N0UGFnZSIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJ2YWx1ZSIsIm1haW4iLCJwIiwiZGF0ZSIsImgxIiwiYXJ0aWNsZSIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwiYm9keSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/posts/[slug].js\n");

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
var __webpack_exports__ = (__webpack_exec__("./pages/posts/[slug].js"));
module.exports = __webpack_exports__;

})();