"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/quizPage",{

/***/ "./pages/quizPage.js":
/*!***************************!*\
  !*** ./pages/quizPage.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ Page; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"./node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ \"./node_modules/bootstrap/dist/css/bootstrap.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\nvar _s = $RefreshSig$();\n\n\n\nvar __N_SSP = true;\n//import Link from 'next/link';\nfunction Page(param) {\n    var subjectData = param.subjectData, quizData = param.quizData;\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        quizData: quizData,\n        currentQuestionId: 0,\n        quizAnswers: []\n    }), actualValue = ref[0], setNewState = ref[1];\n    var increaseCount = function() {\n        return setNewState(actualValue + 1);\n    };\n    var selectAnswer = function(event) {\n        console.log(\"show answer: \", event.target.dataset.answerid);\n        setNewState((0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({}, actualValue), {\n            currentQuestionId: actualValue.currentQuestionId + 1,\n            quizAnswers: actualValue.quizAnswers.concat([\n                (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({}, actualValue.quizData[actualValue.currentQuestionId]), {\n                    selectedAnswer: event.target.dataset.answerid\n                })\n            ])\n        }));\n    };\n    console.log(\"actualValue:\", actualValue);\n    // console.log(\"QUIZ DATA:\", quizData);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex items-center justify-center min-h-screen\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Programming\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookpro/Downloads/quiz/pages/quizPage.js\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Contact us\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookpro/Downloads/quiz/pages/quizPage.js\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookpro/Downloads/quiz/pages/quizPage.js\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/macbookpro/Downloads/quiz/pages/quizPage.js\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, this),\n            actualValue.quizData.length && actualValue.quizData[actualValue.currentQuestionId] ? //? <ul>{quizData.map((option, index) => <li key={index}> {option.question}</li>)}</ul> : null}\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: \"Select the correct answer: \"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookpro/Downloads/quiz/pages/quizPage.js\",\n                        lineNumber: 48,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/macbookpro/Downloads/quiz/pages/quizPage.js\",\n                        lineNumber: 50,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                            children: [\n                                \"Question number #\",\n                                actualValue.currentQuestionId + 1,\n                                \" of #\",\n                                actualValue.quizData.length\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/macbookpro/Downloads/quiz/pages/quizPage.js\",\n                            lineNumber: 52,\n                            columnNumber: 16\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookpro/Downloads/quiz/pages/quizPage.js\",\n                        lineNumber: 52,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/macbookpro/Downloads/quiz/pages/quizPage.js\",\n                        lineNumber: 53,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"row\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"card text-white text-center bg-info mb-30 w-25\",\n                                styles: \"width: 18rem;\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"card-header\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                                        children: [\n                                            \" Question: \",\n                                            actualValue.quizData[actualValue.currentQuestionId].question,\n                                            \" \"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/macbookpro/Downloads/quiz/pages/quizPage.js\",\n                                        lineNumber: 59,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/macbookpro/Downloads/quiz/pages/quizPage.js\",\n                                    lineNumber: 58,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/macbookpro/Downloads/quiz/pages/quizPage.js\",\n                                lineNumber: 57,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    \" \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                        className: \"card text-left list-group list-group-flush bg-white text-black mb-30 w-25 border-info\",\n                                        styles: \"width: 18rem;\",\n                                        children: actualValue.quizData[actualValue.currentQuestionId].answers.map(function(option, index) {\n                                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                children: [\n                                                    \" \",\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                        type: \"radio\",\n                                                        \"data-answerid\": index,\n                                                        onClick: selectAnswer\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/macbookpro/Downloads/quiz/pages/quizPage.js\",\n                                                        lineNumber: 66,\n                                                        columnNumber: 116\n                                                    }, _this),\n                                                    \" \",\n                                                    option.description\n                                                ]\n                                            }, index, true, {\n                                                fileName: \"/Users/macbookpro/Downloads/quiz/pages/quizPage.js\",\n                                                lineNumber: 66,\n                                                columnNumber: 99\n                                            }, _this);\n                                        })\n                                    }, void 0, false, {\n                                        fileName: \"/Users/macbookpro/Downloads/quiz/pages/quizPage.js\",\n                                        lineNumber: 64,\n                                        columnNumber: 19\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/macbookpro/Downloads/quiz/pages/quizPage.js\",\n                                lineNumber: 64,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/macbookpro/Downloads/quiz/pages/quizPage.js\",\n                        lineNumber: 55,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/macbookpro/Downloads/quiz/pages/quizPage.js\",\n                lineNumber: 47,\n                columnNumber: 9\n            }, this) : null,\n            actualValue.quizData.length && !actualValue.quizData[actualValue.currentQuestionId] ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        children: actualValue.quizAnswers.map(function(option, index) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"card text-white bg-info mb-30 w-50\",\n                                        styles: \"width: 18rem;\",\n                                        children: [\n                                            \"Question: \",\n                                            option.question\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/macbookpro/Downloads/quiz/pages/quizPage.js\",\n                                        lineNumber: 95,\n                                        columnNumber: 17\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                            children: \"Answers:\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/macbookpro/Downloads/quiz/pages/quizPage.js\",\n                                            lineNumber: 100,\n                                            columnNumber: 19\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/macbookpro/Downloads/quiz/pages/quizPage.js\",\n                                        lineNumber: 99,\n                                        columnNumber: 17\n                                    }, _this),\n                                    option.answers.map(function(answer, index) {\n                                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            children: [\n                                                index === Number(option.selectedAnswer) ? \"SELECTED: \" : null,\n                                                answer.isCorrect ? \"CORRECT: \" : null,\n                                                answer.description\n                                            ]\n                                        }, index, true, {\n                                            fileName: \"/Users/macbookpro/Downloads/quiz/pages/quizPage.js\",\n                                            lineNumber: 105,\n                                            columnNumber: 19\n                                        }, _this);\n                                    })\n                                ]\n                            }, index, true, {\n                                fileName: \"/Users/macbookpro/Downloads/quiz/pages/quizPage.js\",\n                                lineNumber: 92,\n                                columnNumber: 15\n                            }, _this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookpro/Downloads/quiz/pages/quizPage.js\",\n                        lineNumber: 91,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/macbookpro/Downloads/quiz/pages/quizPage.js\",\n                    lineNumber: 90,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/macbookpro/Downloads/quiz/pages/quizPage.js\",\n                lineNumber: 89,\n                columnNumber: 9\n            }, this) : null\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/macbookpro/Downloads/quiz/pages/quizPage.js\",\n        lineNumber: 36,\n        columnNumber: 5\n    }, this);\n};\n_s(Page, \"xNfEF3DdDtLxhx5hDTTSeGBRE7I=\");\n_c = Page;\n{}var _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TE8sTUFBTSxDQUFDRixPQUFPLENBQUNDLEdBQUcsQ0FBQyxTQUFDUyxNQUFNLEVBQUVQLEtBQUs7NkRBRWhDLDhEQUFDbkIsS0FBRzs7Z0RBRURtQixLQUFLLEtBQUtRLE1BQU0sQ0FBQ1QsTUFBTSxDQUFDbkIsY0FBYyxDQUFDLEdBQUcsWUFBWSxHQUFHLElBQUk7Z0RBRTdEMkIsTUFBTSxDQUFDRSxTQUFTLEdBQUcsV0FBVyxHQUFHLElBQUk7Z0RBRXJDRixNQUFNLENBQUNELFdBQVc7OzJDQU5YTixLQUFLOzs7O2lEQU9UO3FDQUdQLENBQUM7OytCQXZCS0EsS0FBSzs7OztxQ0F5QlQ7eUJBRU4sQ0FDQTs7Ozs7NEJBQ0k7Ozs7O3dCQUNEOzs7OztvQkFHRixHQUVKLElBQUk7Ozs7OztZQXVESixDQUNOO0NBQ0g7R0FsTHVCcEMsSUFBSTtBQUFKQSxLQUFBQSxJQUFJO0FBeU1SLEVBSUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcXVpelBhZ2UuanM/ZDJjMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCAnYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5jc3MnO1xuLy9pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYWdlKHsgc3ViamVjdERhdGEsIHF1aXpEYXRhIH0pIHtcblxuXG4gIGNvbnN0IFthY3R1YWxWYWx1ZSwgc2V0TmV3U3RhdGVdID0gdXNlU3RhdGUoe1xuICAgIHF1aXpEYXRhLFxuICAgIGN1cnJlbnRRdWVzdGlvbklkOiAwLFxuICAgIHF1aXpBbnN3ZXJzOiBbXVxuICB9KTtcblxuXG4gIGNvbnN0IGluY3JlYXNlQ291bnQgPSAoKSA9PiBzZXROZXdTdGF0ZShhY3R1YWxWYWx1ZSArIDEpO1xuXG5cbiAgY29uc3Qgc2VsZWN0QW5zd2VyID0gKGV2ZW50KSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJzaG93IGFuc3dlcjogXCIsIGV2ZW50LnRhcmdldC5kYXRhc2V0LmFuc3dlcmlkKVxuICAgIHNldE5ld1N0YXRlKHtcbiAgICAgIC4uLmFjdHVhbFZhbHVlLFxuICAgICAgY3VycmVudFF1ZXN0aW9uSWQ6IGFjdHVhbFZhbHVlLmN1cnJlbnRRdWVzdGlvbklkICsgMSxcbiAgICAgIHF1aXpBbnN3ZXJzOiBhY3R1YWxWYWx1ZS5xdWl6QW5zd2Vycy5jb25jYXQoW3tcbiAgICAgICAgLi4uYWN0dWFsVmFsdWUucXVpekRhdGFbYWN0dWFsVmFsdWUuY3VycmVudFF1ZXN0aW9uSWRdLFxuICAgICAgICBzZWxlY3RlZEFuc3dlcjogZXZlbnQudGFyZ2V0LmRhdGFzZXQuYW5zd2VyaWRcbiAgICAgIH1dXG4gICAgICApXG4gICAgfSlcbiAgfVxuXG4gIGNvbnNvbGUubG9nKFwiYWN0dWFsVmFsdWU6XCIsIGFjdHVhbFZhbHVlKTtcbiAgLy8gY29uc29sZS5sb2coXCJRVUlaIERBVEE6XCIsIHF1aXpEYXRhKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBtaW4taC1zY3JlZW4nPlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5Qcm9ncmFtbWluZzwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9J2Rlc2NyaXB0aW9uJyBjb250ZW50PSdDb250YWN0IHVzJyAvPlxuICAgICAgICA8bGluayByZWw9J2ljb24nIGhyZWY9Jy9mYXZpY29uLmljbycgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAge2FjdHVhbFZhbHVlLnF1aXpEYXRhLmxlbmd0aCAmJiBhY3R1YWxWYWx1ZS5xdWl6RGF0YVthY3R1YWxWYWx1ZS5jdXJyZW50UXVlc3Rpb25JZF0gP1xuICAgICAgICAvLz8gPHVsPntxdWl6RGF0YS5tYXAoKG9wdGlvbiwgaW5kZXgpID0+IDxsaSBrZXk9e2luZGV4fT4ge29wdGlvbi5xdWVzdGlvbn08L2xpPil9PC91bD4gOiBudWxsfVxuXG5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgU2VsZWN0IHRoZSBjb3JyZWN0IGFuc3dlcjogPC9kaXY+XG4gICAgICAgICAgPGJyIC8+XG5cbiAgICAgICAgICA8ZGl2PjxiPlF1ZXN0aW9uIG51bWJlciAje2FjdHVhbFZhbHVlLmN1cnJlbnRRdWVzdGlvbklkICsgMX0gb2YgI3thY3R1YWxWYWx1ZS5xdWl6RGF0YS5sZW5ndGh9PC9iPjwvZGl2PlxuICAgICAgICAgIDxiciAvPlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCB0ZXh0LXdoaXRlIHRleHQtY2VudGVyIGJnLWluZm8gbWItMzAgdy0yNVwiIHN0eWxlcz1cIndpZHRoOiAxOHJlbTtcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgPGg2PiBRdWVzdGlvbjoge2FjdHVhbFZhbHVlLnF1aXpEYXRhW2FjdHVhbFZhbHVlLmN1cnJlbnRRdWVzdGlvbklkXS5xdWVzdGlvbn0gPC9oNj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICAgICAgPGRpdj4gPHVsIGNsYXNzTmFtZT1cImNhcmQgdGV4dC1sZWZ0IGxpc3QtZ3JvdXAgbGlzdC1ncm91cC1mbHVzaCBiZy13aGl0ZSB0ZXh0LWJsYWNrIG1iLTMwIHctMjUgYm9yZGVyLWluZm9cIiBzdHlsZXM9XCJ3aWR0aDogMThyZW07XCIgPiBcblxuICAgICAgICAgICAgICB7YWN0dWFsVmFsdWUucXVpekRhdGFbYWN0dWFsVmFsdWUuY3VycmVudFF1ZXN0aW9uSWRdLmFuc3dlcnMubWFwKChvcHRpb24sIGluZGV4KSA9PiA8bGkga2V5PXtpbmRleH0+IDxpbnB1dCB0eXBlPVwicmFkaW9cIiBkYXRhLWFuc3dlcmlkPXtpbmRleH0gb25DbGljaz17c2VsZWN0QW5zd2VyfS8+IHtvcHRpb24uZGVzY3JpcHRpb259PC9saT4pfVxuXG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgIFxuICAgICAgICAgXG5cbiAgICAgICAgICB7LyogXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtaGVhZGVyXCI+XG4gICAgICAgICAgICA8aDY+UXVlc3Rpb246IHthY3R1YWxWYWx1ZS5xdWl6RGF0YVthY3R1YWxWYWx1ZS5jdXJyZW50UXVlc3Rpb25JZF0ucXVlc3Rpb259PC9oNj48L2Rpdj5cblxuICAgICAgICAgIDxkaXY+PHVsPnthY3R1YWxWYWx1ZS5xdWl6RGF0YVthY3R1YWxWYWx1ZS5jdXJyZW50UXVlc3Rpb25JZF0uYW5zd2Vycy5tYXAoKG9wdGlvbiwgaW5kZXgpID0+IDxsaSBkYXRhLWFuc3dlcmlkPXtpbmRleH0gb25DbGljaz17c2VsZWN0QW5zd2VyfSBrZXk9e2luZGV4fT4ge29wdGlvbi5kZXNjcmlwdGlvbn08L2xpPil9PC91bD48L2Rpdj5cblxuICAgICAgICAgIDxidXR0b24gZGlzYWJsZWQgPlN1Ym1pdCBhbnN3ZXJzPC9idXR0b24+ICovfVxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA6IG51bGxcblxuICAgICAgfVxuXG4gICAgICB7YWN0dWFsVmFsdWUucXVpekRhdGEubGVuZ3RoICYmICFhY3R1YWxWYWx1ZS5xdWl6RGF0YVthY3R1YWxWYWx1ZS5jdXJyZW50UXVlc3Rpb25JZF0gP1xuXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDx1bD57YWN0dWFsVmFsdWUucXVpekFuc3dlcnMubWFwKChvcHRpb24sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fT5cblxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIHRleHQtd2hpdGUgYmctaW5mbyBtYi0zMCB3LTUwXCIgc3R5bGVzPVwid2lkdGg6IDE4cmVtO1wiPlxuICAgICAgICAgICAgICAgICAgUXVlc3Rpb246IHtvcHRpb24ucXVlc3Rpb259XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPGI+QW5zd2Vyczo8L2I+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICB7b3B0aW9uLmFuc3dlcnMubWFwKChhbnN3ZXIsIGluZGV4KSA9PiAoXG5cbiAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0+XG5cbiAgICAgICAgICAgICAgICAgICAge2luZGV4ID09PSBOdW1iZXIob3B0aW9uLnNlbGVjdGVkQW5zd2VyKSA/IFwiU0VMRUNURUQ6IFwiIDogbnVsbH1cblxuICAgICAgICAgICAgICAgICAgICB7YW5zd2VyLmlzQ29ycmVjdCA/IFwiQ09SUkVDVDogXCIgOiBudWxsfVxuXG4gICAgICAgICAgICAgICAgICAgIHthbnN3ZXIuZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgICAgICAgICAgKSl9XG5cbiAgICAgICAgICAgICAgPC9saT5cblxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA6IG51bGxcblxuICAgICAgfVxuXG5cblxuICAgICAgey8qIDxkaXYgY2xhc3M9XCJjYXJkIHRleHQtd2hpdGUgYmctaW5mbyBtYi0zMCB3LTUwXCIgc3R5bGVzPVwid2lkdGg6IDE4cmVtO1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1oZWFkZXJcIj5cbiAgICAgICAgICA8aDY+IFF1ZXN0aW9uOiB7YWN0dWFsVmFsdWUucXVpekRhdGFbYWN0dWFsVmFsdWUuY3VycmVudFF1ZXN0aW9uSWRdLnF1ZXN0aW9ufSA8L2g2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8dWwgY2xhc3M9XCJsaXN0LWdyb3VwIGxpc3QtZ3JvdXAtZmx1c2hcIj5cbiAgICAgICAgPHVsIGNsYXNzPVwibGlzdC1ncm91cCBsaXN0LWdyb3VwLWZsdXNoIGJnLXdoaXRlIHRleHQtYmxhY2tcIiA+XG4gICAgICAgXG4gICAgICAgICAgICB7YWN0dWFsVmFsdWUucXVpekRhdGFbYWN0dWFsVmFsdWUuY3VycmVudFF1ZXN0aW9uSWRdLmFuc3dlcnMubWFwKChvcHRpb24sIGluZGV4KSA9PiA8bGkgZGF0YS1hbnN3ZXJpZD17aW5kZXh9IG9uQ2xpY2s9e3NlbGVjdEFuc3dlcn0ga2V5PXtpbmRleH0+IDxpbnB1dCB0eXBlPVwicmFkaW9cIiAvPiB7b3B0aW9uLmRlc2NyaXB0aW9ufTwvbGk+KX1cbiAgICAgICAgICBcbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PiAqL31cblxuXG5cblxuXG5cblxuXG5cblxuICAgICAgey8qIFxuICAgICAgPGRpdiBjbGFzc05hbWU9J21heC13LXhzIG15LTIgb3ZlcmZsb3ctaGlkZGVuIHJvdW5kZWQgc2hhZG93LWxnJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3B4LTYgcHktNCc+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21iLTIgdGV4dC14bCBmb250LWJvbGQnPlR5cGUgdGhlIHN1YmplY3Q8L2Rpdj5cbiAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wnIGFjdGlvbj1cIi9xdWl6UGFnZVwiIG1ldGhvZD1cIkdFVFwiPlxuXG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIDxiciAvPlxuXG4gICAgICAgICAgICA8c2VsZWN0IG5hbWU9XCJzdWJqZWN0XCI+XG5cbiAgICAgICAgICAgICAge3N1YmplY3REYXRhLm1hcCgob3B0aW9uLCBpbmRleCkgPT4gPG9wdGlvbiBrZXk9e2luZGV4fSB2YWx1ZT17b3B0aW9uLnN1YmplY3R9PntvcHRpb24uc3ViamVjdH08L29wdGlvbj4pfVxuXG4gICAgICAgICAgICA8L3NlbGVjdD5cblxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICA8YnIgLz5cblxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdzdWJtaXQnIGNsYXNzTmFtZT0ncHgtNCBweS0yIGZvbnQtYm9sZCB0ZXh0LXdoaXRlIGJnLWJsdWUtNTAwIHJvdW5kZWQtZnVsbCBob3ZlcjpiZy1ibHVlLTcwMCc+IExFVCdTIEdPISEhXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZmFtaWx5dHJlZVwiPkxPR0lOISEhPC9MaW5rPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PiAqL31cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoeyBxdWVyeSB9KSB7XG4gIC8vIEZldGNoIGRhdGEgZnJvbSBleHRlcm5hbCBBUElcbiAgY29uc3Qgc3ViamVjdFJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvdjEvc3ViamVjdHNgKVxuICBjb25zdCBzdWJqZWN0RGF0YSA9IGF3YWl0IHN1YmplY3RSZXNwb25zZS5qc29uKClcblxuICBsZXQgcXVpekRhdGEgPSBbXTtcblxuICBpZiAocXVlcnkuc3ViamVjdCkge1xuICAgIGNvbnN0IHF1aXpSZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3YxL3F1aXo/c3ViamVjdD0ke3F1ZXJ5LnN1YmplY3R9YClcbiAgICBxdWl6RGF0YSA9IGF3YWl0IHF1aXpSZXNwb25zZS5qc29uKClcbiAgfVxuXG4gIC8vIFBhc3MgZGF0YSB0byB0aGUgcGFnZSB2aWEgcHJvcHNcbiAgcmV0dXJuIHsgcHJvcHM6IHsgc3ViamVjdERhdGEsIHF1aXpEYXRhIH0gfVxufVxuXG5cblxuXG4gICAgICAgICAgICAgICAgICAgIHsvKiA8c3R5bGUganN4PntgXG4gICAgICAgIHAge1xuICAgICAgICAgIGNvbG9yOiBncmVlbjtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPiAqL30iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJIZWFkIiwiUGFnZSIsInN1YmplY3REYXRhIiwicXVpekRhdGEiLCJjdXJyZW50UXVlc3Rpb25JZCIsInF1aXpBbnN3ZXJzIiwiYWN0dWFsVmFsdWUiLCJzZXROZXdTdGF0ZSIsImluY3JlYXNlQ291bnQiLCJzZWxlY3RBbnN3ZXIiLCJldmVudCIsImNvbnNvbGUiLCJsb2ciLCJ0YXJnZXQiLCJkYXRhc2V0IiwiYW5zd2VyaWQiLCJjb25jYXQiLCJzZWxlY3RlZEFuc3dlciIsImRpdiIsImNsYXNzTmFtZSIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwibGluayIsInJlbCIsImhyZWYiLCJsZW5ndGgiLCJiciIsImIiLCJzdHlsZXMiLCJoNiIsInF1ZXN0aW9uIiwidWwiLCJhbnN3ZXJzIiwibWFwIiwib3B0aW9uIiwiaW5kZXgiLCJsaSIsImlucHV0IiwidHlwZSIsImRhdGEtYW5zd2VyaWQiLCJvbkNsaWNrIiwiZGVzY3JpcHRpb24iLCJhbnN3ZXIiLCJOdW1iZXIiLCJpc0NvcnJlY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/quizPage.js\n"));

/***/ })

});