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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-query */ \"react-query\");\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_2__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_1__]);\naxios__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nconst Index = ()=>{\n    const { data: unsplash , error , isLoading , isError  } = (0,react_query__WEBPACK_IMPORTED_MODULE_2__.useQuery)([\n        \"unsplash\"\n    ], async ()=>{\n        const res = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(`https://api.unsplash.com/photos/random?client_id=${\"ODAZNhRyt-4TpjF0OMIiU8WmEAeoEMYRngEPXkwoLVs\"}&count=23&orientation=squarish`);\n        console.log(res);\n        return res.data.map((image)=>{\n            return image.urls.full;\n        });\n    });\n    // choose random number 1-24, if equals random in map then dalle\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"p-16\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"grid grid-cols-6 grid-rows-4 w-full border border-black\",\n            children: \"idk man\"\n        }, void 0, false, {\n            fileName: \"/Users/alexbluo/projects/ood/wheres-dalle/pages/index.tsx\",\n            lineNumber: 26,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/alexbluo/projects/ood/wheres-dalle/pages/index.tsx\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Index);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEI7QUFDYTtBQUV2QyxNQUFNRSxRQUFRLElBQU07SUFDbEIsTUFBTSxFQUNKQyxNQUFNQyxTQUFRLEVBQ2RDLE1BQUssRUFDTEMsVUFBUyxFQUNUQyxRQUFPLEVBQ1IsR0FBR04scURBQVFBLENBQUM7UUFBQztLQUFXLEVBQUUsVUFBWTtRQUNyQyxNQUFNTyxNQUFNLE1BQU1SLGlEQUFTLENBQ3pCLENBQUMsaURBQWlELEVBQUVVLDZDQUEyQyxDQUFDLDhCQUE4QixDQUFDO1FBR2pJRyxRQUFRQyxHQUFHLENBQUNOO1FBRVosT0FBT0EsSUFBSUwsSUFBSSxDQUFDWSxHQUFHLENBQUMsQ0FBQ0MsUUFBZTtZQUNsQyxPQUFPQSxNQUFNQyxJQUFJLENBQUNDLElBQUk7UUFDeEI7SUFDRjtJQUVBLGdFQUFnRTtJQUNoRSxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ0Q7WUFBSUMsV0FBVTtzQkFBMEQ7Ozs7Ozs7Ozs7O0FBSy9FO0FBRUEsaUVBQWVsQixLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2hlcmVzLWRhbGxlLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSBcInJlYWN0LXF1ZXJ5XCI7XG5cbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xuICBjb25zdCB7XG4gICAgZGF0YTogdW5zcGxhc2gsXG4gICAgZXJyb3IsXG4gICAgaXNMb2FkaW5nLFxuICAgIGlzRXJyb3IsXG4gIH0gPSB1c2VRdWVyeShbXCJ1bnNwbGFzaFwiXSwgYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChcbiAgICAgIGBodHRwczovL2FwaS51bnNwbGFzaC5jb20vcGhvdG9zL3JhbmRvbT9jbGllbnRfaWQ9JHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19VTlNQTEFTSF9BQ0NFU1NfS0VZfSZjb3VudD0yMyZvcmllbnRhdGlvbj1zcXVhcmlzaGBcbiAgICApO1xuXG4gICAgY29uc29sZS5sb2cocmVzKTtcblxuICAgIHJldHVybiByZXMuZGF0YS5tYXAoKGltYWdlOiBhbnkpID0+IHtcbiAgICAgIHJldHVybiBpbWFnZS51cmxzLmZ1bGw7XG4gICAgfSk7XG4gIH0pO1xuXG4gIC8vIGNob29zZSByYW5kb20gbnVtYmVyIDEtMjQsIGlmIGVxdWFscyByYW5kb20gaW4gbWFwIHRoZW4gZGFsbGVcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMTZcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtNiBncmlkLXJvd3MtNCB3LWZ1bGwgYm9yZGVyIGJvcmRlci1ibGFja1wiPlxuICAgICAgICBpZGsgbWFuXG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuIl0sIm5hbWVzIjpbImF4aW9zIiwidXNlUXVlcnkiLCJJbmRleCIsImRhdGEiLCJ1bnNwbGFzaCIsImVycm9yIiwiaXNMb2FkaW5nIiwiaXNFcnJvciIsInJlcyIsImdldCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19VTlNQTEFTSF9BQ0NFU1NfS0VZIiwiY29uc29sZSIsImxvZyIsIm1hcCIsImltYWdlIiwidXJscyIsImZ1bGwiLCJkaXYiLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "react-query":
/*!******************************!*\
  !*** external "react-query" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("react-query");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();