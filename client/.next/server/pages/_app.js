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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./api/build-client.js":
/*!*****************************!*\
  !*** ./api/build-client.js ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);\naxios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (({ req })=>{\n    if (true) {\n        return axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].create({\n            baseURL: \"http://books-app-prod.shop\",\n            headers: req.headers\n        });\n    } else {}\n});\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcGkvYnVpbGQtY2xpZW50LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQTBCO0FBRTFCLGlFQUFlLENBQUMsRUFBRUMsR0FBRyxFQUFFO0lBQ3JCLElBQUksSUFBNkIsRUFBRTtRQUNqQyxPQUFPRCxvREFBWSxDQUFDO1lBQ2xCRyxTQUFTO1lBQ1RDLFNBQVNILElBQUlHLE9BQU87UUFDdEI7SUFDRixPQUFPLEVBSU47QUFDSCxHQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vYXBpL2J1aWxkLWNsaWVudC5qcz9jNmYwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0ICh7IHJlcSB9KSA9PiB7XHJcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgIHJldHVybiBheGlvcy5jcmVhdGUoe1xyXG4gICAgICBiYXNlVVJMOiBcImh0dHA6Ly9ib29rcy1hcHAtcHJvZC5zaG9wXCIsXHJcbiAgICAgIGhlYWRlcnM6IHJlcS5oZWFkZXJzLFxyXG4gICAgfSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiBheGlvcy5jcmVhdGUoe1xyXG4gICAgICBiYXNlVXJsOiBcIi9cIixcclxuICAgIH0pO1xyXG4gIH1cclxufTtcclxuIl0sIm5hbWVzIjpbImF4aW9zIiwicmVxIiwiY3JlYXRlIiwiYmFzZVVSTCIsImhlYWRlcnMiLCJiYXNlVXJsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./api/build-client.js\n");

/***/ }),

/***/ "./components/header.js":
/*!******************************!*\
  !*** ./components/header.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction Header({ currentUser }) {\n    const links = [\n        !currentUser && {\n            label: \"Sign Up\",\n            href: \"/auth/signup\"\n        },\n        !currentUser && {\n            label: \"Sign In\",\n            href: \"/auth/signin\"\n        },\n        currentUser && {\n            label: \"Sell Books\",\n            href: \"/books/new\"\n        },\n        currentUser && {\n            label: \"My Orders\",\n            href: \"/orders\"\n        },\n        currentUser && {\n            label: \"Sign Out\",\n            href: \"/auth/signout\"\n        }\n    ].filter((linkConfig)=>linkConfig).map(({ label, href })=>{\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n            className: \"nav-item\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                href: href,\n                className: \"nav-link\",\n                children: label\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Books\\\\client\\\\components\\\\header.js\",\n                lineNumber: 16,\n                columnNumber: 11\n            }, this)\n        }, href, false, {\n            fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Books\\\\client\\\\components\\\\header.js\",\n            lineNumber: 15,\n            columnNumber: 9\n        }, this);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: \"navbar navbar-light bg-light\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                className: \"navbar-brand ml-5\",\n                href: \"/\",\n                children: \"Books\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Books\\\\client\\\\components\\\\header.js\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"d-flex justify-content-end mr-5\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: \"nav d-flex align-items-center\",\n                    children: links\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Books\\\\client\\\\components\\\\header.js\",\n                    lineNumber: 29,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Books\\\\client\\\\components\\\\header.js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Books\\\\client\\\\components\\\\header.js\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2hlYWRlci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUEwQjtBQUNHO0FBRTdCLFNBQVNFLE9BQU8sRUFBRUMsV0FBVyxFQUFFO0lBQzdCLE1BQU1DLFFBQVE7UUFDWixDQUFDRCxlQUFlO1lBQUVFLE9BQU87WUFBV0MsTUFBTTtRQUFlO1FBQ3pELENBQUNILGVBQWU7WUFBRUUsT0FBTztZQUFXQyxNQUFNO1FBQWU7UUFDekRILGVBQWU7WUFBRUUsT0FBTztZQUFjQyxNQUFNO1FBQWE7UUFDekRILGVBQWU7WUFBRUUsT0FBTztZQUFhQyxNQUFNO1FBQVU7UUFDckRILGVBQWU7WUFBRUUsT0FBTztZQUFZQyxNQUFNO1FBQWdCO0tBQzNELENBQ0VDLE1BQU0sQ0FBQyxDQUFDQyxhQUFlQSxZQUN2QkMsR0FBRyxDQUFDLENBQUMsRUFBRUosS0FBSyxFQUFFQyxJQUFJLEVBQUU7UUFDbkIscUJBQ0UsOERBQUNJO1lBQWNDLFdBQVU7c0JBQ3ZCLDRFQUFDVixrREFBSUE7Z0JBQUNLLE1BQU1BO2dCQUFNSyxXQUFVOzBCQUN6Qk47Ozs7OztXQUZJQzs7Ozs7SUFNYjtJQUNGLHFCQUNFLDhEQUFDTTtRQUFJRCxXQUFVOzswQkFDYiw4REFBQ1Ysa0RBQUlBO2dCQUFDVSxXQUFVO2dCQUFvQkwsTUFBSzswQkFBSTs7Ozs7OzBCQUk3Qyw4REFBQ087Z0JBQUlGLFdBQVU7MEJBQ2IsNEVBQUNHO29CQUFHSCxXQUFVOzhCQUFpQ1A7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSXZEO0FBRUEsaUVBQWVGLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9jb21wb25lbnRzL2hlYWRlci5qcz9jMDk4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5cclxuZnVuY3Rpb24gSGVhZGVyKHsgY3VycmVudFVzZXIgfSkge1xyXG4gIGNvbnN0IGxpbmtzID0gW1xyXG4gICAgIWN1cnJlbnRVc2VyICYmIHsgbGFiZWw6IFwiU2lnbiBVcFwiLCBocmVmOiBcIi9hdXRoL3NpZ251cFwiIH0sXHJcbiAgICAhY3VycmVudFVzZXIgJiYgeyBsYWJlbDogXCJTaWduIEluXCIsIGhyZWY6IFwiL2F1dGgvc2lnbmluXCIgfSxcclxuICAgIGN1cnJlbnRVc2VyICYmIHsgbGFiZWw6IFwiU2VsbCBCb29rc1wiLCBocmVmOiBcIi9ib29rcy9uZXdcIiB9LFxyXG4gICAgY3VycmVudFVzZXIgJiYgeyBsYWJlbDogXCJNeSBPcmRlcnNcIiwgaHJlZjogXCIvb3JkZXJzXCIgfSxcclxuICAgIGN1cnJlbnRVc2VyICYmIHsgbGFiZWw6IFwiU2lnbiBPdXRcIiwgaHJlZjogXCIvYXV0aC9zaWdub3V0XCIgfSxcclxuICBdXHJcbiAgICAuZmlsdGVyKChsaW5rQ29uZmlnKSA9PiBsaW5rQ29uZmlnKVxyXG4gICAgLm1hcCgoeyBsYWJlbCwgaHJlZiB9KSA9PiB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGxpIGtleT17aHJlZn0gY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9e2hyZWZ9IGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+XHJcbiAgICAgICAgICAgIHtsYWJlbH1cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICApO1xyXG4gICAgfSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyIG5hdmJhci1saWdodCBiZy1saWdodFwiPlxyXG4gICAgICA8TGluayBjbGFzc05hbWU9XCJuYXZiYXItYnJhbmQgbWwtNVwiIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgQm9va3NcclxuICAgICAgPC9MaW5rPlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWVuZCBtci01XCI+XHJcbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdiBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+e2xpbmtzfTwvdWw+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9uYXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJMaW5rIiwiSGVhZGVyIiwiY3VycmVudFVzZXIiLCJsaW5rcyIsImxhYmVsIiwiaHJlZiIsImZpbHRlciIsImxpbmtDb25maWciLCJtYXAiLCJsaSIsImNsYXNzTmFtZSIsIm5hdiIsImRpdiIsInVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/header.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ \"./node_modules/bootstrap/dist/css/bootstrap.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _api_build_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/build-client */ \"./api/build-client.js\");\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/header */ \"./components/header.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_api_build_client__WEBPACK_IMPORTED_MODULE_2__]);\n_api_build_client__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nconst AppComponent = ({ Component, pageProps, currentUser })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                currentUser: currentUser\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Books\\\\client\\\\pages\\\\_app.js\",\n                lineNumber: 8,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    currentUser: currentUser,\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Books\\\\client\\\\pages\\\\_app.js\",\n                    lineNumber: 10,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Books\\\\client\\\\pages\\\\_app.js\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Books\\\\client\\\\pages\\\\_app.js\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, undefined);\n};\nAppComponent.getInitialProps = async (appContext)=>{\n    const client = (0,_api_build_client__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(appContext.ctx);\n    const { data } = await client.get(\"/api/users/currentuser\");\n    let pageProps = {};\n    if (appContext.Component.getInitialProps) {\n        pageProps = await appContext.Component.getInitialProps(appContext.ctx, client, data.currentUser);\n    }\n    return {\n        pageProps,\n        ...data\n    };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AppComponent);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQTBDO0FBQ0k7QUFDSjtBQUUxQyxNQUFNRSxlQUFlLENBQUMsRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQUVDLFdBQVcsRUFBRTtJQUN6RCxxQkFDRSw4REFBQ0M7OzBCQUNDLDhEQUFDTCwwREFBTUE7Z0JBQUNJLGFBQWFBOzs7Ozs7MEJBQ3JCLDhEQUFDQztnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ0o7b0JBQVVFLGFBQWFBO29CQUFjLEdBQUdELFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSTFEO0FBRUFGLGFBQWFNLGVBQWUsR0FBRyxPQUFPQztJQUNwQyxNQUFNQyxTQUFTViw2REFBV0EsQ0FBQ1MsV0FBV0UsR0FBRztJQUN6QyxNQUFNLEVBQUVDLElBQUksRUFBRSxHQUFHLE1BQU1GLE9BQU9HLEdBQUcsQ0FBQztJQUVsQyxJQUFJVCxZQUFZLENBQUM7SUFDakIsSUFBSUssV0FBV04sU0FBUyxDQUFDSyxlQUFlLEVBQUU7UUFDeENKLFlBQVksTUFBTUssV0FBV04sU0FBUyxDQUFDSyxlQUFlLENBQ3BEQyxXQUFXRSxHQUFHLEVBQ2RELFFBQ0FFLEtBQUtQLFdBQVc7SUFFcEI7SUFFQSxPQUFPO1FBQ0xEO1FBQ0EsR0FBR1EsSUFBSTtJQUNUO0FBQ0Y7QUFFQSxpRUFBZVYsWUFBWUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCJib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLmNzc1wiO1xyXG5pbXBvcnQgYnVpbGRDbGllbnQgZnJvbSBcIi4uL2FwaS9idWlsZC1jbGllbnRcIjtcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9oZWFkZXJcIjtcclxuXHJcbmNvbnN0IEFwcENvbXBvbmVudCA9ICh7IENvbXBvbmVudCwgcGFnZVByb3BzLCBjdXJyZW50VXNlciB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxIZWFkZXIgY3VycmVudFVzZXI9e2N1cnJlbnRVc2VyfSAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxDb21wb25lbnQgY3VycmVudFVzZXI9e2N1cnJlbnRVc2VyfSB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5BcHBDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGFwcENvbnRleHQpID0+IHtcclxuICBjb25zdCBjbGllbnQgPSBidWlsZENsaWVudChhcHBDb250ZXh0LmN0eCk7XHJcbiAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBjbGllbnQuZ2V0KFwiL2FwaS91c2Vycy9jdXJyZW50dXNlclwiKTtcclxuXHJcbiAgbGV0IHBhZ2VQcm9wcyA9IHt9O1xyXG4gIGlmIChhcHBDb250ZXh0LkNvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMpIHtcclxuICAgIHBhZ2VQcm9wcyA9IGF3YWl0IGFwcENvbnRleHQuQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcyhcclxuICAgICAgYXBwQ29udGV4dC5jdHgsXHJcbiAgICAgIGNsaWVudCxcclxuICAgICAgZGF0YS5jdXJyZW50VXNlclxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwYWdlUHJvcHMsXHJcbiAgICAuLi5kYXRhLFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHBDb21wb25lbnQ7XHJcbiJdLCJuYW1lcyI6WyJidWlsZENsaWVudCIsIkhlYWRlciIsIkFwcENvbXBvbmVudCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImN1cnJlbnRVc2VyIiwiZGl2IiwiY2xhc3NOYW1lIiwiZ2V0SW5pdGlhbFByb3BzIiwiYXBwQ29udGV4dCIsImNsaWVudCIsImN0eCIsImRhdGEiLCJnZXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc","vendor-chunks/bootstrap"], () => (__webpack_exec__("./pages/_app.js")));
module.exports = __webpack_exports__;

})();