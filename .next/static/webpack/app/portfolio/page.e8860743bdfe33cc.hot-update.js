"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/portfolio/page",{

/***/ "(app-pages-browser)/./src/app/portfolio/page.jsx":
/*!************************************!*\
  !*** ./src/app/portfolio/page.jsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/value/use-scroll.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/value/use-transform.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst items = [\n    {\n        id: 1,\n        color: \"from-red-300 to-blue-300\",\n        title: \"FB Mnyim & Co.\",\n        desc: \"FB Mnyim and Co is a Nigerian law firm\",\n        img: \"/fbmnyim-homepage.png\",\n        link: \"https://fbmnyimco.com\"\n    },\n    {\n        id: 2,\n        color: \"from-blue-300 to-violet-300\",\n        title: \"Clearscrow\",\n        desc: \"Clearscrow is an online escrow platform\",\n        img: \"/clearscrow.png\",\n        link: \"https://clearscrow.online\"\n    },\n    {\n        id: 3,\n        color: \"from-violet-300 to-purple-300\",\n        title: \"Optimus Fitness\",\n        desc: \"An ecommerce web app for gym equipment\",\n        img: \"optimus.png\",\n        link: \"https://optimusfitness.netlify.app/\"\n    },\n    {\n        id: 4,\n        color: \"from-purple-300 to-red-300\",\n        title: \"Coinfi\",\n        desc: \"A landing page for a crypo company\",\n        img: \"/coinfi.png\",\n        link: \"https://coinfi.netlify.app/\"\n    }\n];\nconst PortfolioPage = ()=>{\n    _s();\n    const ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)();\n    const { scrollYProgress } = (0,framer_motion__WEBPACK_IMPORTED_MODULE_4__.useScroll)({\n        target: ref\n    });\n    const x = (0,framer_motion__WEBPACK_IMPORTED_MODULE_5__.useTransform)(scrollYProgress, [\n        0,\n        1\n    ], [\n        \"0%\",\n        \"-80%\"\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {\n        className: \"h-full\",\n        initial: {\n            y: \"-200vh\"\n        },\n        animate: {\n            y: \"0%\"\n        },\n        transition: {\n            duration: 1\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"h-[600vh] relative\",\n                ref: ref,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-screen h-[calc(100vh-6rem)] flex flex-col items-center justify-center text-8xl text-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"mb-24\",\n                                children: \"My Works\"\n                            }, void 0, false, {\n                                fileName: \"/Users/Bunde/Desktop/dev/react/folio/src/app/portfolio/page.jsx\",\n                                lineNumber: 57,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.svg, {\n                                initial: {\n                                    opacity: 0.2,\n                                    y: 0\n                                },\n                                animate: {\n                                    opacity: 1,\n                                    y: \"10px\"\n                                },\n                                transition: {\n                                    repeat: Infinity,\n                                    duration: 3,\n                                    ease: \"easeInOut\"\n                                },\n                                viewBox: \"0 0 24 24\",\n                                fill: \"none\",\n                                xmlns: \"http://www.w3.org/2000/svg\",\n                                width: 50,\n                                height: 50,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                        d: \"M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z\",\n                                        stroke: \"#000000\",\n                                        strokeWidth: \"1\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/Bunde/Desktop/dev/react/folio/src/app/portfolio/page.jsx\",\n                                        lineNumber: 69,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                        d: \"M12 6V14\",\n                                        stroke: \"#000000\",\n                                        strokeWidth: \"1\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/Bunde/Desktop/dev/react/folio/src/app/portfolio/page.jsx\",\n                                        lineNumber: 74,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                        d: \"M15 11L12 14L9 11\",\n                                        stroke: \"#000000\",\n                                        strokeWidth: \"1\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/Bunde/Desktop/dev/react/folio/src/app/portfolio/page.jsx\",\n                                        lineNumber: 75,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/Bunde/Desktop/dev/react/folio/src/app/portfolio/page.jsx\",\n                                lineNumber: 59,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/Bunde/Desktop/dev/react/folio/src/app/portfolio/page.jsx\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"sticky top-0 flex h-screen gap-4 items-center overflow-hidden\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {\n                            style: {\n                                x\n                            },\n                            className: \"flex\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"h-screen w-screen gap-10 flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/Bunde/Desktop/dev/react/folio/src/app/portfolio/page.jsx\",\n                                    lineNumber: 80,\n                                    columnNumber: 13\n                                }, undefined),\n                                items.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"h-screen w-screen flex items-center justify-center bg-gradient-to-r \".concat(item.color),\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex flex-col gap-8 text-white\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                                    className: \"text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl\",\n                                                    children: item.title\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/Bunde/Desktop/dev/react/folio/src/app/portfolio/page.jsx\",\n                                                    lineNumber: 87,\n                                                    columnNumber: 19\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"picture\", {\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                        src: item.img,\n                                                        alt: \"\",\n                                                        className: \"h-56 md:h-64 lg:h-[350px] xl:h-[420px] w-auto\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/Bunde/Desktop/dev/react/folio/src/app/portfolio/page.jsx\",\n                                                        lineNumber: 94,\n                                                        columnNumber: 21\n                                                    }, undefined)\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/Bunde/Desktop/dev/react/folio/src/app/portfolio/page.jsx\",\n                                                    lineNumber: 93,\n                                                    columnNumber: 19\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    className: \"w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[600px]\",\n                                                    children: item.desc\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/Bunde/Desktop/dev/react/folio/src/app/portfolio/page.jsx\",\n                                                    lineNumber: 100,\n                                                    columnNumber: 19\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                                    href: item.link,\n                                                    className: \"flex justify-end\",\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                        className: \"p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded\",\n                                                        children: \"See Demo\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/Bunde/Desktop/dev/react/folio/src/app/portfolio/page.jsx\",\n                                                        lineNumber: 104,\n                                                        columnNumber: 21\n                                                    }, undefined)\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/Bunde/Desktop/dev/react/folio/src/app/portfolio/page.jsx\",\n                                                    lineNumber: 103,\n                                                    columnNumber: 19\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/Bunde/Desktop/dev/react/folio/src/app/portfolio/page.jsx\",\n                                            lineNumber: 86,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    }, item.id, false, {\n                                        fileName: \"/Users/Bunde/Desktop/dev/react/folio/src/app/portfolio/page.jsx\",\n                                        lineNumber: 82,\n                                        columnNumber: 15\n                                    }, undefined))\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/Bunde/Desktop/dev/react/folio/src/app/portfolio/page.jsx\",\n                            lineNumber: 79,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/Bunde/Desktop/dev/react/folio/src/app/portfolio/page.jsx\",\n                        lineNumber: 78,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/Bunde/Desktop/dev/react/folio/src/app/portfolio/page.jsx\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-screen h-screen flex flex-col gap-16 items-center justify-center text-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-8xl\",\n                        children: \"Do you have a project?\"\n                    }, void 0, false, {\n                        fileName: \"/Users/Bunde/Desktop/dev/react/folio/src/app/portfolio/page.jsx\",\n                        lineNumber: 115,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.svg, {\n                                animate: {\n                                    rotate: 360\n                                },\n                                transition: {\n                                    duration: 8,\n                                    ease: \"linear\",\n                                    repeat: Infinity\n                                },\n                                viewBox: \"0 0 300 300\",\n                                className: \"w-64 h-64 md:w-[500px] md:h-[500px] \",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"defs\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                            id: \"circlePath\",\n                                            d: \"M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 \"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/Bunde/Desktop/dev/react/folio/src/app/portfolio/page.jsx\",\n                                            lineNumber: 124,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/Bunde/Desktop/dev/react/folio/src/app/portfolio/page.jsx\",\n                                        lineNumber: 123,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"text\", {\n                                        fill: \"#000\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textPath\", {\n                                            xlinkHref: \"#circlePath\",\n                                            className: \"text-xl\",\n                                            children: \"Front-end Developer and UI Designer\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/Bunde/Desktop/dev/react/folio/src/app/portfolio/page.jsx\",\n                                            lineNumber: 130,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/Bunde/Desktop/dev/react/folio/src/app/portfolio/page.jsx\",\n                                        lineNumber: 129,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/Bunde/Desktop/dev/react/folio/src/app/portfolio/page.jsx\",\n                                lineNumber: 117,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                href: \"/contact\",\n                                className: \"w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center\",\n                                children: \"Hire Me\"\n                            }, void 0, false, {\n                                fileName: \"/Users/Bunde/Desktop/dev/react/folio/src/app/portfolio/page.jsx\",\n                                lineNumber: 135,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/Bunde/Desktop/dev/react/folio/src/app/portfolio/page.jsx\",\n                        lineNumber: 116,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/Bunde/Desktop/dev/react/folio/src/app/portfolio/page.jsx\",\n                lineNumber: 114,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/Bunde/Desktop/dev/react/folio/src/app/portfolio/page.jsx\",\n        lineNumber: 49,\n        columnNumber: 5\n    }, undefined);\n};\n_s(PortfolioPage, \"IDWZ1rwRGGLMN8cPwdaVvM3r59c=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_4__.useScroll,\n        framer_motion__WEBPACK_IMPORTED_MODULE_5__.useTransform\n    ];\n});\n_c = PortfolioPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PortfolioPage);\nvar _c;\n$RefreshReg$(_c, \"PortfolioPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcG9ydGZvbGlvL3BhZ2UuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ2dFO0FBQ2pDO0FBQ0Y7QUFDRTtBQUUvQixNQUFNTSxRQUFRO0lBQ1o7UUFDRUMsSUFBSTtRQUNKQyxPQUFPO1FBQ1BDLE9BQU87UUFDUEMsTUFBTTtRQUNOQyxLQUFLO1FBQ0xDLE1BQU07SUFDUjtJQUNBO1FBQ0VMLElBQUk7UUFDSkMsT0FBTztRQUNQQyxPQUFPO1FBQ1BDLE1BQU07UUFDTkMsS0FBSztRQUNMQyxNQUFNO0lBQ1I7SUFDQTtRQUNFTCxJQUFJO1FBQ0pDLE9BQU87UUFDUEMsT0FBTztRQUNQQyxNQUFNO1FBQ05DLEtBQUs7UUFDTEMsTUFBTTtJQUNSO0lBQ0E7UUFDRUwsSUFBSTtRQUNKQyxPQUFPO1FBQ1BDLE9BQU87UUFDUEMsTUFBTTtRQUNOQyxLQUFLO1FBQ0xDLE1BQU07SUFDUjtDQUNEO0FBRUQsTUFBTUMsZ0JBQWdCOztJQUNwQixNQUFNQyxNQUFNVCw2Q0FBTUE7SUFFbEIsTUFBTSxFQUFFVSxlQUFlLEVBQUUsR0FBR2Qsd0RBQVNBLENBQUM7UUFBRWUsUUFBUUY7SUFBSTtJQUNwRCxNQUFNRyxJQUFJZiwyREFBWUEsQ0FBQ2EsaUJBQWlCO1FBQUM7UUFBRztLQUFFLEVBQUU7UUFBQztRQUFNO0tBQU87SUFFOUQscUJBQ0UsOERBQUNmLGlEQUFNQSxDQUFDa0IsR0FBRztRQUNUQyxXQUFVO1FBQ1ZDLFNBQVM7WUFBRUMsR0FBRztRQUFTO1FBQ3ZCQyxTQUFTO1lBQUVELEdBQUc7UUFBSztRQUNuQkUsWUFBWTtZQUFFQyxVQUFVO1FBQUU7OzBCQUUxQiw4REFBQ047Z0JBQUlDLFdBQVU7Z0JBQXFCTCxLQUFLQTs7a0NBQ3ZDLDhEQUFDSTt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNNO2dDQUFFTixXQUFVOzBDQUFROzs7Ozs7MENBRXJCLDhEQUFDbkIsaURBQU1BLENBQUMwQixHQUFHO2dDQUNUTixTQUFTO29DQUFFTyxTQUFTO29DQUFLTixHQUFHO2dDQUFFO2dDQUM5QkMsU0FBUztvQ0FBRUssU0FBUztvQ0FBR04sR0FBRztnQ0FBTztnQ0FDakNFLFlBQVk7b0NBQUVLLFFBQVFDO29DQUFVTCxVQUFVO29DQUFHTSxNQUFNO2dDQUFZO2dDQUMvREMsU0FBUTtnQ0FDUkMsTUFBSztnQ0FDTEMsT0FBTTtnQ0FDTkMsT0FBTztnQ0FDUEMsUUFBUTs7a0RBRVIsOERBQUNDO3dDQUNDQyxHQUFFO3dDQUNGQyxRQUFPO3dDQUNQQyxhQUFZOzs7Ozs7a0RBRWQsOERBQUNIO3dDQUFLQyxHQUFFO3dDQUFXQyxRQUFPO3dDQUFVQyxhQUFZOzs7Ozs7a0RBQ2hELDhEQUFDSDt3Q0FBS0MsR0FBRTt3Q0FBb0JDLFFBQU87d0NBQVVDLGFBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FHN0QsOERBQUNyQjt3QkFBSUMsV0FBVTtrQ0FDYiw0RUFBQ25CLGlEQUFNQSxDQUFDa0IsR0FBRzs0QkFBQ3NCLE9BQU87Z0NBQUV2Qjs0QkFBRTs0QkFBR0UsV0FBVTs7OENBQ2xDLDhEQUFDRDtvQ0FBSUMsV0FBVTs7Ozs7O2dDQUNkYixNQUFNbUMsR0FBRyxDQUFDLENBQUNDLHFCQUNWLDhEQUFDeEI7d0NBQ0NDLFdBQVcsdUVBQWtGLE9BQVh1QixLQUFLbEMsS0FBSztrREFHNUYsNEVBQUNVOzRDQUFJQyxXQUFVOzs4REFDYiw4REFBQ3dCO29EQUFHeEIsV0FBVTs4REFDWHVCLEtBQUtqQyxLQUFLOzs7Ozs7OERBS2IsOERBQUNtQzs4REFDQyw0RUFBQ2pDO3dEQUNDa0MsS0FBS0gsS0FBSy9CLEdBQUc7d0RBQ2JtQyxLQUFJO3dEQUNKM0IsV0FBVTs7Ozs7Ozs7Ozs7OERBR2QsOERBQUNNO29EQUFFTixXQUFVOzhEQUNWdUIsS0FBS2hDLElBQUk7Ozs7Ozs4REFFWiw4REFBQ04saURBQUlBO29EQUFDMkMsTUFBTUwsS0FBSzlCLElBQUk7b0RBQUVPLFdBQVU7OERBQy9CLDRFQUFDNkI7d0RBQU83QixXQUFVO2tFQUFtRzs7Ozs7Ozs7Ozs7Ozs7Ozs7dUNBcEJwSHVCLEtBQUtuQyxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQThCdEIsOERBQUNXO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ3dCO3dCQUFHeEIsV0FBVTtrQ0FBVzs7Ozs7O2tDQUN6Qiw4REFBQ0Q7d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDbkIsaURBQU1BLENBQUMwQixHQUFHO2dDQUNUSixTQUFTO29DQUFFMkIsUUFBUTtnQ0FBSTtnQ0FDdkIxQixZQUFZO29DQUFFQyxVQUFVO29DQUFHTSxNQUFNO29DQUFVRixRQUFRQztnQ0FBUztnQ0FDNURFLFNBQVE7Z0NBQ1JaLFdBQVU7O2tEQUVWLDhEQUFDK0I7a0RBQ0MsNEVBQUNkOzRDQUNDN0IsSUFBRzs0Q0FDSDhCLEdBQUU7Ozs7Ozs7Ozs7O2tEQUdOLDhEQUFDYzt3Q0FBS25CLE1BQUs7a0RBQ1QsNEVBQUNvQjs0Q0FBU0MsV0FBVTs0Q0FBY2xDLFdBQVU7c0RBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7OzBDQUsxRCw4REFBQ2YsaURBQUlBO2dDQUNIMkMsTUFBSztnQ0FDTDVCLFdBQVU7MENBQ1g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9YO0dBdkdNTjs7UUFHd0JaLG9EQUFTQTtRQUMzQkMsdURBQVlBOzs7S0FKbEJXO0FBeUdOLCtEQUFlQSxhQUFhQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcG9ydGZvbGlvL3BhZ2UuanN4PzAwMGIiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgeyBtb3Rpb24sIHVzZVNjcm9sbCwgdXNlVHJhbnNmb3JtIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IGl0ZW1zID0gW1xuICB7XG4gICAgaWQ6IDEsXG4gICAgY29sb3I6IFwiZnJvbS1yZWQtMzAwIHRvLWJsdWUtMzAwXCIsXG4gICAgdGl0bGU6IFwiRkIgTW55aW0gJiBDby5cIixcbiAgICBkZXNjOiBcIkZCIE1ueWltIGFuZCBDbyBpcyBhIE5pZ2VyaWFuIGxhdyBmaXJtXCIsXG4gICAgaW1nOiBcIi9mYm1ueWltLWhvbWVwYWdlLnBuZ1wiLFxuICAgIGxpbms6IFwiaHR0cHM6Ly9mYm1ueWltY28uY29tXCIsXG4gIH0sXG4gIHtcbiAgICBpZDogMixcbiAgICBjb2xvcjogXCJmcm9tLWJsdWUtMzAwIHRvLXZpb2xldC0zMDBcIixcbiAgICB0aXRsZTogXCJDbGVhcnNjcm93XCIsXG4gICAgZGVzYzogXCJDbGVhcnNjcm93IGlzIGFuIG9ubGluZSBlc2Nyb3cgcGxhdGZvcm1cIixcbiAgICBpbWc6IFwiL2NsZWFyc2Nyb3cucG5nXCIsXG4gICAgbGluazogXCJodHRwczovL2NsZWFyc2Nyb3cub25saW5lXCIsXG4gIH0sXG4gIHtcbiAgICBpZDogMyxcbiAgICBjb2xvcjogXCJmcm9tLXZpb2xldC0zMDAgdG8tcHVycGxlLTMwMFwiLFxuICAgIHRpdGxlOiBcIk9wdGltdXMgRml0bmVzc1wiLFxuICAgIGRlc2M6IFwiQW4gZWNvbW1lcmNlIHdlYiBhcHAgZm9yIGd5bSBlcXVpcG1lbnRcIixcbiAgICBpbWc6IFwib3B0aW11cy5wbmdcIixcbiAgICBsaW5rOiBcImh0dHBzOi8vb3B0aW11c2ZpdG5lc3MubmV0bGlmeS5hcHAvXCIsXG4gIH0sXG4gIHtcbiAgICBpZDogNCxcbiAgICBjb2xvcjogXCJmcm9tLXB1cnBsZS0zMDAgdG8tcmVkLTMwMFwiLFxuICAgIHRpdGxlOiBcIkNvaW5maVwiLFxuICAgIGRlc2M6IFwiQSBsYW5kaW5nIHBhZ2UgZm9yIGEgY3J5cG8gY29tcGFueVwiLFxuICAgIGltZzogXCIvY29pbmZpLnBuZ1wiLFxuICAgIGxpbms6IFwiaHR0cHM6Ly9jb2luZmkubmV0bGlmeS5hcHAvXCIsXG4gIH0sXG5dO1xuXG5jb25zdCBQb3J0Zm9saW9QYWdlID0gKCkgPT4ge1xuICBjb25zdCByZWYgPSB1c2VSZWYoKTtcblxuICBjb25zdCB7IHNjcm9sbFlQcm9ncmVzcyB9ID0gdXNlU2Nyb2xsKHsgdGFyZ2V0OiByZWYgfSk7XG4gIGNvbnN0IHggPSB1c2VUcmFuc2Zvcm0oc2Nyb2xsWVByb2dyZXNzLCBbMCwgMV0sIFtcIjAlXCIsIFwiLTgwJVwiXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8bW90aW9uLmRpdlxuICAgICAgY2xhc3NOYW1lPVwiaC1mdWxsXCJcbiAgICAgIGluaXRpYWw9e3sgeTogXCItMjAwdmhcIiB9fVxuICAgICAgYW5pbWF0ZT17eyB5OiBcIjAlXCIgfX1cbiAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDEgfX1cbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtWzYwMHZoXSByZWxhdGl2ZVwiIHJlZj17cmVmfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LXNjcmVlbiBoLVtjYWxjKDEwMHZoLTZyZW0pXSBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB0ZXh0LTh4bCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLTI0XCI+TXkgV29ya3M8L3A+XG5cbiAgICAgICAgICA8bW90aW9uLnN2Z1xuICAgICAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwLjIsIHk6IDAgfX1cbiAgICAgICAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSwgeTogXCIxMHB4XCIgfX1cbiAgICAgICAgICAgIHRyYW5zaXRpb249e3sgcmVwZWF0OiBJbmZpbml0eSwgZHVyYXRpb246IDMsIGVhc2U6IFwiZWFzZUluT3V0XCIgfX1cbiAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICB3aWR0aD17NTB9XG4gICAgICAgICAgICBoZWlnaHQ9ezUwfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgIGQ9XCJNNSAxNUM1IDE2Ljg1NjUgNS43Mzc1NCAxOC42MzcxIDcuMDUwMjkgMTkuOTQ5OEM4LjM2MzA1IDIxLjI2MjYgMTAuMTQzNSAyMS45OTk5IDEyIDIxLjk5OTlDMTMuODU2NSAyMS45OTk5IDE1LjYzNyAyMS4yNjI2IDE2Ljk0OTggMTkuOTQ5OEMxOC4yNjI1IDE4LjYzNzEgMTkgMTYuODU2NSAxOSAxNVY5QzE5IDcuMTQzNDggMTguMjYyNSA1LjM2MzA1IDE2Ljk0OTggNC4wNTAyOUMxNS42MzcgMi43Mzc1NCAxMy44NTY1IDIgMTIgMkMxMC4xNDM1IDIgOC4zNjMwNSAyLjczNzU0IDcuMDUwMjkgNC4wNTAyOUM1LjczNzU0IDUuMzYzMDUgNSA3LjE0MzQ4IDUgOVYxNVpcIlxuICAgICAgICAgICAgICBzdHJva2U9XCIjMDAwMDAwXCJcbiAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCIxXCJcbiAgICAgICAgICAgID48L3BhdGg+XG4gICAgICAgICAgICA8cGF0aCBkPVwiTTEyIDZWMTRcIiBzdHJva2U9XCIjMDAwMDAwXCIgc3Ryb2tlV2lkdGg9XCIxXCI+PC9wYXRoPlxuICAgICAgICAgICAgPHBhdGggZD1cIk0xNSAxMUwxMiAxNEw5IDExXCIgc3Ryb2tlPVwiIzAwMDAwMFwiIHN0cm9rZVdpZHRoPVwiMVwiPjwvcGF0aD5cbiAgICAgICAgICA8L21vdGlvbi5zdmc+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0aWNreSB0b3AtMCBmbGV4IGgtc2NyZWVuIGdhcC00IGl0ZW1zLWNlbnRlciBvdmVyZmxvdy1oaWRkZW5cIj5cbiAgICAgICAgICA8bW90aW9uLmRpdiBzdHlsZT17eyB4IH19IGNsYXNzTmFtZT1cImZsZXhcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1zY3JlZW4gdy1zY3JlZW4gZ2FwLTEwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGJnLWdyYWRpZW50LXRvLXIgZnJvbS1wdXJwbGUtMzAwIHRvLXJlZC0zMDBcIiAvPlxuICAgICAgICAgICAge2l0ZW1zLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgaC1zY3JlZW4gdy1zY3JlZW4gZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgYmctZ3JhZGllbnQtdG8tciAke2l0ZW0uY29sb3J9YH1cbiAgICAgICAgICAgICAgICBrZXk9e2l0ZW0uaWR9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLTggdGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1ib2xkIG1kOnRleHQtNHhsIGxnOnRleHQtNnhsIHhsOnRleHQtOHhsXCI+XG4gICAgICAgICAgICAgICAgICAgIHtpdGVtLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHctODAgaC01NiBtZDp3LTk2IG1kOmgtNjQgbGc6dy1bNTAwcHhdIGxnOmgtWzM1MHB4XSB4bDp3LVs2MDBweF0geGw6aC1bNDIwcHhdXCI+XG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e2l0ZW0uaW1nfSBhbHQ9XCJcIiBmaWxsIGNsYXNzTmFtZT1cImFic29sdXRlIG9iamVjdC1jb3ZlclwiIC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj4gKi99XG4gICAgICAgICAgICAgICAgICA8cGljdHVyZT5cbiAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgIHNyYz17aXRlbS5pbWd9XG4gICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTU2IG1kOmgtNjQgbGc6aC1bMzUwcHhdIHhsOmgtWzQyMHB4XSB3LWF1dG9cIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9waWN0dXJlPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidy04MCBtZDp3OTYgbGc6dy1bNTAwcHhdIGxnOnRleHQtbGcgeGw6dy1bNjAwcHhdXCI+XG4gICAgICAgICAgICAgICAgICAgIHtpdGVtLmRlc2N9XG4gICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtpdGVtLmxpbmt9IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1lbmRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJwLTIgdGV4dC1zbSBtZDpwLTQgbWQ6dGV4dC1tZCBsZzpwLTggbGc6dGV4dC1sZyBiZy13aGl0ZSB0ZXh0LWdyYXktNjAwIGZvbnQtc2VtaWJvbGQgbS00IHJvdW5kZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICBTZWUgRGVtb1xuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctc2NyZWVuIGgtc2NyZWVuIGZsZXggZmxleC1jb2wgZ2FwLTE2IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB0ZXh0LWNlbnRlclwiPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC04eGxcIj5EbyB5b3UgaGF2ZSBhIHByb2plY3Q/PC9oMT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZVwiPlxuICAgICAgICAgIDxtb3Rpb24uc3ZnXG4gICAgICAgICAgICBhbmltYXRlPXt7IHJvdGF0ZTogMzYwIH19XG4gICAgICAgICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiA4LCBlYXNlOiBcImxpbmVhclwiLCByZXBlYXQ6IEluZmluaXR5IH19XG4gICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDMwMCAzMDBcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy02NCBoLTY0IG1kOnctWzUwMHB4XSBtZDpoLVs1MDBweF0gXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGVmcz5cbiAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBpZD1cImNpcmNsZVBhdGhcIlxuICAgICAgICAgICAgICAgIGQ9XCJNIDE1MCwgMTUwIG0gLTYwLCAwIGEgNjAsNjAgMCAwLDEgMTIwLDAgYSA2MCw2MCAwIDAsMSAtMTIwLDAgXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGVmcz5cbiAgICAgICAgICAgIDx0ZXh0IGZpbGw9XCIjMDAwXCI+XG4gICAgICAgICAgICAgIDx0ZXh0UGF0aCB4bGlua0hyZWY9XCIjY2lyY2xlUGF0aFwiIGNsYXNzTmFtZT1cInRleHQteGxcIj5cbiAgICAgICAgICAgICAgICBGcm9udC1lbmQgRGV2ZWxvcGVyIGFuZCBVSSBEZXNpZ25lclxuICAgICAgICAgICAgICA8L3RleHRQYXRoPlxuICAgICAgICAgICAgPC90ZXh0PlxuICAgICAgICAgIDwvbW90aW9uLnN2Zz5cbiAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgaHJlZj1cIi9jb250YWN0XCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctMTYgaC0xNiBtZDp3LTI4IG1kOmgtMjggYWJzb2x1dGUgdG9wLTAgbGVmdC0wIHJpZ2h0LTAgYm90dG9tLTAgbS1hdXRvIGJnLWJsYWNrIHRleHQtd2hpdGUgcm91bmRlZC1mdWxsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBIaXJlIE1lXG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvbW90aW9uLmRpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBvcnRmb2xpb1BhZ2U7XG4iXSwibmFtZXMiOlsibW90aW9uIiwidXNlU2Nyb2xsIiwidXNlVHJhbnNmb3JtIiwiSW1hZ2UiLCJMaW5rIiwidXNlUmVmIiwiaXRlbXMiLCJpZCIsImNvbG9yIiwidGl0bGUiLCJkZXNjIiwiaW1nIiwibGluayIsIlBvcnRmb2xpb1BhZ2UiLCJyZWYiLCJzY3JvbGxZUHJvZ3Jlc3MiLCJ0YXJnZXQiLCJ4IiwiZGl2IiwiY2xhc3NOYW1lIiwiaW5pdGlhbCIsInkiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwicCIsInN2ZyIsIm9wYWNpdHkiLCJyZXBlYXQiLCJJbmZpbml0eSIsImVhc2UiLCJ2aWV3Qm94IiwiZmlsbCIsInhtbG5zIiwid2lkdGgiLCJoZWlnaHQiLCJwYXRoIiwiZCIsInN0cm9rZSIsInN0cm9rZVdpZHRoIiwic3R5bGUiLCJtYXAiLCJpdGVtIiwiaDEiLCJwaWN0dXJlIiwic3JjIiwiYWx0IiwiaHJlZiIsImJ1dHRvbiIsInJvdGF0ZSIsImRlZnMiLCJ0ZXh0IiwidGV4dFBhdGgiLCJ4bGlua0hyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/portfolio/page.jsx\n"));

/***/ })

});