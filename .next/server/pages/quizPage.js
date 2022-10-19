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
exports.id = "pages/quizPage";
exports.ids = ["pages/quizPage"];
exports.modules = {

/***/ "./pages/quizPage.js":
/*!***************************!*\
  !*** ./pages/quizPage.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Page),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ \"./node_modules/bootstrap/dist/css/bootstrap.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n//import Link from 'next/link';\nfunction Page({ subjectData , quizData  }) {\n    const { 0: actualValue , 1: setNewState  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        quizData,\n        currentQuestionId: 0,\n        quizAnswers: []\n    });\n    const increaseCount = ()=>setNewState(actualValue + 1);\n    const selectAnswer = (event)=>setNewState({\n            ...actualValue,\n            currentQuestionId: actualValue.currentQuestionId + 1,\n            quizAnswers: actualValue.quizAnswers.concat([\n                {\n                    ...actualValue.quizData[actualValue.currentQuestionId],\n                    selectedAnswer: event.target.dataset.answerid\n                }\n            ])\n        });\n    console.log(\"actualValue:\", actualValue);\n    // console.log(\"QUIZ DATA:\", quizData);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex items-center justify-center min-h-screen\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Programming\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookpro/Downloads/quiz/pages/quizPage.js\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Contact us\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookpro/Downloads/quiz/pages/quizPage.js\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookpro/Downloads/quiz/pages/quizPage.js\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/macbookpro/Downloads/quiz/pages/quizPage.js\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this),\n            actualValue.quizData.length && actualValue.quizData[actualValue.currentQuestionId] ? //? <ul>{quizData.map((option, index) => <li key={index}> {option.question}</li>)}</ul> : null}\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: \"Select the correct answer: \"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookpro/Downloads/quiz/pages/quizPage.js\",\n                        lineNumber: 45,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/macbookpro/Downloads/quiz/pages/quizPage.js\",\n                        lineNumber: 47,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                            children: [\n                                \"Question number #\",\n                                actualValue.currentQuestionId + 1,\n                                \" of #\",\n                                actualValue.quizData.length\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/macbookpro/Downloads/quiz/pages/quizPage.js\",\n                            lineNumber: 49,\n                            columnNumber: 16\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookpro/Downloads/quiz/pages/quizPage.js\",\n                        lineNumber: 49,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/macbookpro/Downloads/quiz/pages/quizPage.js\",\n                        lineNumber: 50,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        class: \"card text-white bg-info mb-30 w-50\",\n                        styles: \"width: 18rem;\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                class: \"card-header\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                                    children: [\n                                        \" Question: \",\n                                        actualValue.quizData[actualValue.currentQuestionId].question,\n                                        \" \"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/macbookpro/Downloads/quiz/pages/quizPage.js\",\n                                    lineNumber: 54,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/macbookpro/Downloads/quiz/pages/quizPage.js\",\n                                lineNumber: 53,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                class: \"list-group list-group-flush bg-white text-black\",\n                                children: actualValue.quizData[actualValue.currentQuestionId].answers.map((option, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        \"data-answerid\": index,\n                                        onClick: selectAnswer,\n                                        children: [\n                                            \" \",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                type: \"radio\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/macbookpro/Downloads/quiz/pages/quizPage.js\",\n                                                lineNumber: 60,\n                                                columnNumber: 161\n                                            }, this),\n                                            \" \",\n                                            option.description\n                                        ]\n                                    }, index, true, {\n                                        fileName: \"/Users/macbookpro/Downloads/quiz/pages/quizPage.js\",\n                                        lineNumber: 60,\n                                        columnNumber: 99\n                                    }, this))\n                            }, void 0, false, {\n                                fileName: \"/Users/macbookpro/Downloads/quiz/pages/quizPage.js\",\n                                lineNumber: 58,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/macbookpro/Downloads/quiz/pages/quizPage.js\",\n                        lineNumber: 52,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/macbookpro/Downloads/quiz/pages/quizPage.js\",\n                lineNumber: 44,\n                columnNumber: 9\n            }, this) : null,\n            actualValue.quizData.length && !actualValue.quizData[actualValue.currentQuestionId] ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        children: actualValue.quizAnswers.map((option, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        class: \"card text-white bg-info mb-30 w-50\",\n                                        styles: \"width: 18rem;\",\n                                        children: [\n                                            \"Question: \",\n                                            option.question\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/macbookpro/Downloads/quiz/pages/quizPage.js\",\n                                        lineNumber: 86,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: \"Answers:\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/macbookpro/Downloads/quiz/pages/quizPage.js\",\n                                        lineNumber: 90,\n                                        columnNumber: 17\n                                    }, this),\n                                    option.answers.map((answer, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            children: [\n                                                index === Number(option.selectedAnswer) ? \"SELECTED: \" : null,\n                                                answer.isCorrect ? \"CORRECT: \" : null,\n                                                answer.description\n                                            ]\n                                        }, index, true, {\n                                            fileName: \"/Users/macbookpro/Downloads/quiz/pages/quizPage.js\",\n                                            lineNumber: 96,\n                                            columnNumber: 19\n                                        }, this))\n                                ]\n                            }, index, true, {\n                                fileName: \"/Users/macbookpro/Downloads/quiz/pages/quizPage.js\",\n                                lineNumber: 83,\n                                columnNumber: 15\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookpro/Downloads/quiz/pages/quizPage.js\",\n                        lineNumber: 82,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/macbookpro/Downloads/quiz/pages/quizPage.js\",\n                    lineNumber: 81,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/macbookpro/Downloads/quiz/pages/quizPage.js\",\n                lineNumber: 80,\n                columnNumber: 9\n            }, this) : null\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/macbookpro/Downloads/quiz/pages/quizPage.js\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, this);\n};\nasync function getServerSideProps({ query  }) {\n    // Fetch data from external API\n    const subjectResponse = await fetch(`http://localhost:3000/api/v1/subjects`);\n    const subjectData = await subjectResponse.json();\n    let quizData = [];\n    if (query.subject) {\n        const quizResponse = await fetch(`http://localhost:3000/api/v1/quiz?subject=${query.subject}`);\n        quizData = await quizResponse.json();\n    }\n    // Pass data to the page via props\n    return {\n        props: {\n            subjectData,\n            quizData\n        }\n    };\n}\n{}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9xdWl6UGFnZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFBaUM7QUFDSjtBQUNhO0FBQzFDLCtCQUErQjtBQUVoQixTQUFTRSxJQUFJLENBQUMsRUFBRUMsV0FBVyxHQUFFQyxRQUFRLEdBQUUsRUFBRTtJQUd0RCxNQUFNLEtBQUNDLFdBQVcsTUFBRUMsV0FBVyxNQUFJTiwrQ0FBUSxDQUFDO1FBQzFDSSxRQUFRO1FBQ1JHLGlCQUFpQixFQUFFLENBQUM7UUFDcEJDLFdBQVcsRUFBRSxFQUFFO0tBQ2hCLENBQUM7SUFHRixNQUFNQyxhQUFhLEdBQUcsSUFBTUgsV0FBVyxDQUFDRCxXQUFXLEdBQUcsQ0FBQyxDQUFDO0lBR3hELE1BQU1LLFlBQVksR0FBRyxDQUFDQyxLQUFLLEdBQUtMLFdBQVcsQ0FBQztZQUMxQyxHQUFHRCxXQUFXO1lBQ2RFLGlCQUFpQixFQUFFRixXQUFXLENBQUNFLGlCQUFpQixHQUFHLENBQUM7WUFDcERDLFdBQVcsRUFBRUgsV0FBVyxDQUFDRyxXQUFXLENBQUNJLE1BQU0sQ0FBQztnQkFBQztvQkFDM0MsR0FBR1AsV0FBVyxDQUFDRCxRQUFRLENBQUNDLFdBQVcsQ0FBQ0UsaUJBQWlCLENBQUM7b0JBQ3RETSxjQUFjLEVBQUVGLEtBQUssQ0FBQ0csTUFBTSxDQUFDQyxPQUFPLENBQUNDLFFBQVE7aUJBQzlDO2FBQUMsQ0FDRDtTQUNGLENBQUM7SUFFRkMsT0FBTyxDQUFDQyxHQUFHLENBQUMsY0FBYyxFQUFFYixXQUFXLENBQUMsQ0FBQztJQUN6Qyx1Q0FBdUM7SUFFdkMscUJBQ0UsOERBQUNjLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLCtDQUErQzs7MEJBQzVELDhEQUFDbkIsa0RBQUk7O2tDQUNILDhEQUFDb0IsT0FBSztrQ0FBQyxhQUFXOzs7Ozs0QkFBUTtrQ0FDMUIsOERBQUNDLE1BQUk7d0JBQUNDLElBQUksRUFBQyxhQUFhO3dCQUFDQyxPQUFPLEVBQUMsWUFBWTs7Ozs7NEJBQUc7a0NBQ2hELDhEQUFDQyxNQUFJO3dCQUFDQyxHQUFHLEVBQUMsTUFBTTt3QkFBQ0MsSUFBSSxFQUFDLGNBQWM7Ozs7OzRCQUFHOzs7Ozs7b0JBQ2xDO1lBRU50QixXQUFXLENBQUNELFFBQVEsQ0FBQ3dCLE1BQU0sSUFBSXZCLFdBQVcsQ0FBQ0QsUUFBUSxDQUFDQyxXQUFXLENBQUNFLGlCQUFpQixDQUFDLEdBQ2pGLCtGQUErRjswQkFHL0YsOERBQUNZLEtBQUc7O2tDQUNGLDhEQUFDQSxLQUFHO2tDQUFDLDZCQUN3Qjs7Ozs7NEJBQU07a0NBQ25DLDhEQUFDVSxJQUFFOzs7OzRCQUFHO2tDQUVOLDhEQUFDVixLQUFHO2tDQUFDLDRFQUFDVyxHQUFDOztnQ0FBQyxtQkFBaUI7Z0NBQUN6QixXQUFXLENBQUNFLGlCQUFpQixHQUFHLENBQUM7Z0NBQUMsT0FBSztnQ0FBQ0YsV0FBVyxDQUFDRCxRQUFRLENBQUN3QixNQUFNOzs7Ozs7Z0NBQUs7Ozs7OzRCQUFNO2tDQUN4Ryw4REFBQ0MsSUFBRTs7Ozs0QkFBRztrQ0FFTiw4REFBQ1YsS0FBRzt3QkFBQ1ksS0FBSyxFQUFDLG9DQUFvQzt3QkFBQ0MsTUFBTSxFQUFDLGVBQWU7OzBDQUNwRSw4REFBQ2IsS0FBRztnQ0FBQ1ksS0FBSyxFQUFDLGFBQWE7MENBQ3RCLDRFQUFDRSxJQUFFOzt3Q0FBQyxhQUFXO3dDQUFDNUIsV0FBVyxDQUFDRCxRQUFRLENBQUNDLFdBQVcsQ0FBQ0UsaUJBQWlCLENBQUMsQ0FBQzJCLFFBQVE7d0NBQUMsR0FBQzs7Ozs7O3dDQUFLOzs7OztvQ0FDL0U7MENBR04sOERBQUNDLElBQUU7Z0NBQUNKLEtBQUssRUFBQyxpREFBaUQ7MENBRXhEMUIsV0FBVyxDQUFDRCxRQUFRLENBQUNDLFdBQVcsQ0FBQ0UsaUJBQWlCLENBQUMsQ0FBQzZCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQUNDLE1BQU0sRUFBRUMsS0FBSyxpQkFBSyw4REFBQ0MsSUFBRTt3Q0FBQ0MsZUFBYSxFQUFFRixLQUFLO3dDQUFFRyxPQUFPLEVBQUVoQyxZQUFZOzs0Q0FBYyxHQUFDOzBEQUFBLDhEQUFDaUMsT0FBSztnREFBQ0MsSUFBSSxFQUFDLE9BQU87Ozs7O29EQUFHOzRDQUFBLEdBQUM7NENBQUNOLE1BQU0sQ0FBQ08sV0FBVzs7dUNBQWxETixLQUFLOzs7OzRDQUFtRCxDQUFDOzs7OztvQ0FFaE07Ozs7Ozs0QkFDRDs7Ozs7O29CQVNGLEdBRUosSUFBSTtZQUlQbEMsV0FBVyxDQUFDRCxRQUFRLENBQUN3QixNQUFNLElBQUksQ0FBQ3ZCLFdBQVcsQ0FBQ0QsUUFBUSxDQUFDQyxXQUFXLENBQUNFLGlCQUFpQixDQUFDLGlCQUVsRiw4REFBQ1ksS0FBRzswQkFDRiw0RUFBQ0EsS0FBRzs4QkFDRiw0RUFBQ2dCLElBQUU7a0NBQUU5QixXQUFXLENBQUNHLFdBQVcsQ0FBQzZCLEdBQUcsQ0FBQyxDQUFDQyxNQUFNLEVBQUVDLEtBQUssaUJBQzdDLDhEQUFDQyxJQUFFOztrREFHRCw4REFBQ3JCLEtBQUc7d0NBQUNZLEtBQUssRUFBQyxvQ0FBb0M7d0NBQUNDLE1BQU0sRUFBQyxlQUFlOzs0Q0FBQyxZQUMzRDs0Q0FBQ00sTUFBTSxDQUFDSixRQUFROzs7Ozs7NENBQ3RCO2tEQUVOLDhEQUFDZixLQUFHO2tEQUFDLFVBRUw7Ozs7OzRDQUFNO29DQUVMbUIsTUFBTSxDQUFDRixPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFDUyxNQUFNLEVBQUVQLEtBQUssaUJBRWhDLDhEQUFDcEIsS0FBRzs7Z0RBSURvQixLQUFLLEtBQUtRLE1BQU0sQ0FBQ1QsTUFBTSxDQUFDekIsY0FBYyxDQUFDLEdBQUcsWUFBWSxHQUFHLElBQUk7Z0RBRTdEaUMsTUFBTSxDQUFDRSxTQUFTLEdBQUcsV0FBVyxHQUFHLElBQUk7Z0RBRXJDRixNQUFNLENBQUNELFdBQVc7OzJDQVJYTixLQUFLOzs7O2dEQVNULENBR047OytCQXpCS0EsS0FBSzs7OztvQ0EyQlQsQ0FHTjs7Ozs7NEJBQ0k7Ozs7O3dCQUNEOzs7OztvQkFHRixHQUVKLElBQUk7Ozs7OztZQXVESixDQUNOO0NBQ0g7QUFJTSxlQUFlVSxrQkFBa0IsQ0FBQyxFQUFFQyxLQUFLLEdBQUUsRUFBRTtJQUNsRCwrQkFBK0I7SUFDL0IsTUFBTUMsZUFBZSxHQUFHLE1BQU1DLEtBQUssQ0FBQyxDQUFDLHFDQUFxQyxDQUFDLENBQUM7SUFDNUUsTUFBTWpELFdBQVcsR0FBRyxNQUFNZ0QsZUFBZSxDQUFDRSxJQUFJLEVBQUU7SUFFaEQsSUFBSWpELFFBQVEsR0FBRyxFQUFFO0lBRWpCLElBQUk4QyxLQUFLLENBQUNJLE9BQU8sRUFBRTtRQUNqQixNQUFNQyxZQUFZLEdBQUcsTUFBTUgsS0FBSyxDQUFDLENBQUMsMENBQTBDLEVBQUVGLEtBQUssQ0FBQ0ksT0FBTyxDQUFDLENBQUMsQ0FBQztRQUM5RmxELFFBQVEsR0FBRyxNQUFNbUQsWUFBWSxDQUFDRixJQUFJLEVBQUU7S0FDckM7SUFFRCxrQ0FBa0M7SUFDbEMsT0FBTztRQUFFRyxLQUFLLEVBQUU7WUFBRXJELFdBQVc7WUFBRUMsUUFBUTtTQUFFO0tBQUU7Q0FDNUM7QUFLbUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1hcHAvLi9wYWdlcy9xdWl6UGFnZS5qcz9kMmMyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0ICdib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLmNzcyc7XG4vL2ltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhZ2UoeyBzdWJqZWN0RGF0YSwgcXVpekRhdGEgfSkge1xuXG5cbiAgY29uc3QgW2FjdHVhbFZhbHVlLCBzZXROZXdTdGF0ZV0gPSB1c2VTdGF0ZSh7XG4gICAgcXVpekRhdGEsXG4gICAgY3VycmVudFF1ZXN0aW9uSWQ6IDAsXG4gICAgcXVpekFuc3dlcnM6IFtdXG4gIH0pO1xuXG5cbiAgY29uc3QgaW5jcmVhc2VDb3VudCA9ICgpID0+IHNldE5ld1N0YXRlKGFjdHVhbFZhbHVlICsgMSk7XG5cblxuICBjb25zdCBzZWxlY3RBbnN3ZXIgPSAoZXZlbnQpID0+IHNldE5ld1N0YXRlKHtcbiAgICAuLi5hY3R1YWxWYWx1ZSxcbiAgICBjdXJyZW50UXVlc3Rpb25JZDogYWN0dWFsVmFsdWUuY3VycmVudFF1ZXN0aW9uSWQgKyAxLFxuICAgIHF1aXpBbnN3ZXJzOiBhY3R1YWxWYWx1ZS5xdWl6QW5zd2Vycy5jb25jYXQoW3tcbiAgICAgIC4uLmFjdHVhbFZhbHVlLnF1aXpEYXRhW2FjdHVhbFZhbHVlLmN1cnJlbnRRdWVzdGlvbklkXSxcbiAgICAgIHNlbGVjdGVkQW5zd2VyOiBldmVudC50YXJnZXQuZGF0YXNldC5hbnN3ZXJpZFxuICAgIH1dXG4gICAgKVxuICB9KVxuXG4gIGNvbnNvbGUubG9nKFwiYWN0dWFsVmFsdWU6XCIsIGFjdHVhbFZhbHVlKTtcbiAgLy8gY29uc29sZS5sb2coXCJRVUlaIERBVEE6XCIsIHF1aXpEYXRhKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBtaW4taC1zY3JlZW4nPlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5Qcm9ncmFtbWluZzwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9J2Rlc2NyaXB0aW9uJyBjb250ZW50PSdDb250YWN0IHVzJyAvPlxuICAgICAgICA8bGluayByZWw9J2ljb24nIGhyZWY9Jy9mYXZpY29uLmljbycgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAge2FjdHVhbFZhbHVlLnF1aXpEYXRhLmxlbmd0aCAmJiBhY3R1YWxWYWx1ZS5xdWl6RGF0YVthY3R1YWxWYWx1ZS5jdXJyZW50UXVlc3Rpb25JZF0gP1xuICAgICAgICAvLz8gPHVsPntxdWl6RGF0YS5tYXAoKG9wdGlvbiwgaW5kZXgpID0+IDxsaSBrZXk9e2luZGV4fT4ge29wdGlvbi5xdWVzdGlvbn08L2xpPil9PC91bD4gOiBudWxsfVxuXG5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgU2VsZWN0IHRoZSBjb3JyZWN0IGFuc3dlcjogPC9kaXY+XG4gICAgICAgICAgPGJyIC8+XG5cbiAgICAgICAgICA8ZGl2PjxiPlF1ZXN0aW9uIG51bWJlciAje2FjdHVhbFZhbHVlLmN1cnJlbnRRdWVzdGlvbklkICsgMX0gb2YgI3thY3R1YWxWYWx1ZS5xdWl6RGF0YS5sZW5ndGh9PC9iPjwvZGl2PlxuICAgICAgICAgIDxiciAvPlxuXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQgdGV4dC13aGl0ZSBiZy1pbmZvIG1iLTMwIHctNTBcIiBzdHlsZXM9XCJ3aWR0aDogMThyZW07XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgPGg2PiBRdWVzdGlvbjoge2FjdHVhbFZhbHVlLnF1aXpEYXRhW2FjdHVhbFZhbHVlLmN1cnJlbnRRdWVzdGlvbklkXS5xdWVzdGlvbn0gPC9oNj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICB7LyogPHVsIGNsYXNzPVwibGlzdC1ncm91cCBsaXN0LWdyb3VwLWZsdXNoXCI+ICovfVxuICAgICAgICAgICAgPHVsIGNsYXNzPVwibGlzdC1ncm91cCBsaXN0LWdyb3VwLWZsdXNoIGJnLXdoaXRlIHRleHQtYmxhY2tcIiA+XG5cbiAgICAgICAgICAgICAge2FjdHVhbFZhbHVlLnF1aXpEYXRhW2FjdHVhbFZhbHVlLmN1cnJlbnRRdWVzdGlvbklkXS5hbnN3ZXJzLm1hcCgob3B0aW9uLCBpbmRleCkgPT4gPGxpIGRhdGEtYW5zd2VyaWQ9e2luZGV4fSBvbkNsaWNrPXtzZWxlY3RBbnN3ZXJ9IGtleT17aW5kZXh9PiA8aW5wdXQgdHlwZT1cInJhZGlvXCIgLz4ge29wdGlvbi5kZXNjcmlwdGlvbn08L2xpPil9XG5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICB7LyogXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtaGVhZGVyXCI+XG4gICAgICAgICAgICA8aDY+UXVlc3Rpb246IHthY3R1YWxWYWx1ZS5xdWl6RGF0YVthY3R1YWxWYWx1ZS5jdXJyZW50UXVlc3Rpb25JZF0ucXVlc3Rpb259PC9oNj48L2Rpdj5cblxuICAgICAgICAgIDxkaXY+PHVsPnthY3R1YWxWYWx1ZS5xdWl6RGF0YVthY3R1YWxWYWx1ZS5jdXJyZW50UXVlc3Rpb25JZF0uYW5zd2Vycy5tYXAoKG9wdGlvbiwgaW5kZXgpID0+IDxsaSBkYXRhLWFuc3dlcmlkPXtpbmRleH0gb25DbGljaz17c2VsZWN0QW5zd2VyfSBrZXk9e2luZGV4fT4ge29wdGlvbi5kZXNjcmlwdGlvbn08L2xpPil9PC91bD48L2Rpdj5cblxuICAgICAgICAgIDxidXR0b24gZGlzYWJsZWQgPlN1Ym1pdCBhbnN3ZXJzPC9idXR0b24+ICovfVxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA6IG51bGxcblxuICAgICAgfVxuXG4gICAgICB7YWN0dWFsVmFsdWUucXVpekRhdGEubGVuZ3RoICYmICFhY3R1YWxWYWx1ZS5xdWl6RGF0YVthY3R1YWxWYWx1ZS5jdXJyZW50UXVlc3Rpb25JZF0gP1xuXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDx1bD57YWN0dWFsVmFsdWUucXVpekFuc3dlcnMubWFwKChvcHRpb24sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fT5cblxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQgdGV4dC13aGl0ZSBiZy1pbmZvIG1iLTMwIHctNTBcIiBzdHlsZXM9XCJ3aWR0aDogMThyZW07XCI+XG4gICAgICAgICAgICAgICAgICBRdWVzdGlvbjoge29wdGlvbi5xdWVzdGlvbn1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICBBbnN3ZXJzOlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAge29wdGlvbi5hbnN3ZXJzLm1hcCgoYW5zd2VyLCBpbmRleCkgPT4gKFxuXG4gICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9PlxuXG5cblxuICAgICAgICAgICAgICAgICAgICB7aW5kZXggPT09IE51bWJlcihvcHRpb24uc2VsZWN0ZWRBbnN3ZXIpID8gXCJTRUxFQ1RFRDogXCIgOiBudWxsfVxuXG4gICAgICAgICAgICAgICAgICAgIHthbnN3ZXIuaXNDb3JyZWN0ID8gXCJDT1JSRUNUOiBcIiA6IG51bGx9XG5cbiAgICAgICAgICAgICAgICAgICAge2Fuc3dlci5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgICAgICAgICApKX1cblxuICAgICAgICAgICAgICA8L2xpPlxuXG4gICAgICAgICAgICApXG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDogbnVsbFxuXG4gICAgICB9XG5cblxuXG4gICAgICB7LyogPGRpdiBjbGFzcz1cImNhcmQgdGV4dC13aGl0ZSBiZy1pbmZvIG1iLTMwIHctNTBcIiBzdHlsZXM9XCJ3aWR0aDogMThyZW07XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWhlYWRlclwiPlxuICAgICAgICAgIDxoNj4gUXVlc3Rpb246IHthY3R1YWxWYWx1ZS5xdWl6RGF0YVthY3R1YWxWYWx1ZS5jdXJyZW50UXVlc3Rpb25JZF0ucXVlc3Rpb259IDwvaDY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDx1bCBjbGFzcz1cImxpc3QtZ3JvdXAgbGlzdC1ncm91cC1mbHVzaFwiPlxuICAgICAgICA8dWwgY2xhc3M9XCJsaXN0LWdyb3VwIGxpc3QtZ3JvdXAtZmx1c2ggYmctd2hpdGUgdGV4dC1ibGFja1wiID5cbiAgICAgICBcbiAgICAgICAgICAgIHthY3R1YWxWYWx1ZS5xdWl6RGF0YVthY3R1YWxWYWx1ZS5jdXJyZW50UXVlc3Rpb25JZF0uYW5zd2Vycy5tYXAoKG9wdGlvbiwgaW5kZXgpID0+IDxsaSBkYXRhLWFuc3dlcmlkPXtpbmRleH0gb25DbGljaz17c2VsZWN0QW5zd2VyfSBrZXk9e2luZGV4fT4gPGlucHV0IHR5cGU9XCJyYWRpb1wiIC8+IHtvcHRpb24uZGVzY3JpcHRpb259PC9saT4pfVxuICAgICAgICAgIFxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+ICovfVxuXG5cblxuXG5cblxuXG5cblxuXG4gICAgICB7LyogXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nbWF4LXcteHMgbXktMiBvdmVyZmxvdy1oaWRkZW4gcm91bmRlZCBzaGFkb3ctbGcnPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncHgtNiBweS00Jz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWItMiB0ZXh0LXhsIGZvbnQtYm9sZCc+VHlwZSB0aGUgc3ViamVjdDwvZGl2PlxuICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCcgYWN0aW9uPVwiL3F1aXpQYWdlXCIgbWV0aG9kPVwiR0VUXCI+XG5cbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgPGJyIC8+XG5cbiAgICAgICAgICAgIDxzZWxlY3QgbmFtZT1cInN1YmplY3RcIj5cblxuICAgICAgICAgICAgICB7c3ViamVjdERhdGEubWFwKChvcHRpb24sIGluZGV4KSA9PiA8b3B0aW9uIGtleT17aW5kZXh9IHZhbHVlPXtvcHRpb24uc3ViamVjdH0+e29wdGlvbi5zdWJqZWN0fTwvb3B0aW9uPil9XG5cbiAgICAgICAgICAgIDwvc2VsZWN0PlxuXG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIDxiciAvPlxuXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9J3N1Ym1pdCcgY2xhc3NOYW1lPSdweC00IHB5LTIgZm9udC1ib2xkIHRleHQtd2hpdGUgYmctYmx1ZS01MDAgcm91bmRlZC1mdWxsIGhvdmVyOmJnLWJsdWUtNzAwJz4gTEVUJ1MgR08hISFcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9mYW1pbHl0cmVlXCI+TE9HSU4hISE8L0xpbms+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+ICovfVxuICAgIDwvZGl2PlxuICApO1xufVxuXG5cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyh7IHF1ZXJ5IH0pIHtcbiAgLy8gRmV0Y2ggZGF0YSBmcm9tIGV4dGVybmFsIEFQSVxuICBjb25zdCBzdWJqZWN0UmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS92MS9zdWJqZWN0c2ApXG4gIGNvbnN0IHN1YmplY3REYXRhID0gYXdhaXQgc3ViamVjdFJlc3BvbnNlLmpzb24oKVxuXG4gIGxldCBxdWl6RGF0YSA9IFtdO1xuXG4gIGlmIChxdWVyeS5zdWJqZWN0KSB7XG4gICAgY29uc3QgcXVpelJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvdjEvcXVpej9zdWJqZWN0PSR7cXVlcnkuc3ViamVjdH1gKVxuICAgIHF1aXpEYXRhID0gYXdhaXQgcXVpelJlc3BvbnNlLmpzb24oKVxuICB9XG5cbiAgLy8gUGFzcyBkYXRhIHRvIHRoZSBwYWdlIHZpYSBwcm9wc1xuICByZXR1cm4geyBwcm9wczogeyBzdWJqZWN0RGF0YSwgcXVpekRhdGEgfSB9XG59XG5cblxuXG5cbiAgICAgICAgICAgICAgICAgICAgey8qIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgcCB7XG4gICAgICAgICAgY29sb3I6IGdyZWVuO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+ICovfSJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkhlYWQiLCJQYWdlIiwic3ViamVjdERhdGEiLCJxdWl6RGF0YSIsImFjdHVhbFZhbHVlIiwic2V0TmV3U3RhdGUiLCJjdXJyZW50UXVlc3Rpb25JZCIsInF1aXpBbnN3ZXJzIiwiaW5jcmVhc2VDb3VudCIsInNlbGVjdEFuc3dlciIsImV2ZW50IiwiY29uY2F0Iiwic2VsZWN0ZWRBbnN3ZXIiLCJ0YXJnZXQiLCJkYXRhc2V0IiwiYW5zd2VyaWQiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJsaW5rIiwicmVsIiwiaHJlZiIsImxlbmd0aCIsImJyIiwiYiIsImNsYXNzIiwic3R5bGVzIiwiaDYiLCJxdWVzdGlvbiIsInVsIiwiYW5zd2VycyIsIm1hcCIsIm9wdGlvbiIsImluZGV4IiwibGkiLCJkYXRhLWFuc3dlcmlkIiwib25DbGljayIsImlucHV0IiwidHlwZSIsImRlc2NyaXB0aW9uIiwiYW5zd2VyIiwiTnVtYmVyIiwiaXNDb3JyZWN0IiwiZ2V0U2VydmVyU2lkZVByb3BzIiwicXVlcnkiLCJzdWJqZWN0UmVzcG9uc2UiLCJmZXRjaCIsImpzb24iLCJzdWJqZWN0IiwicXVpelJlc3BvbnNlIiwicHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/quizPage.js\n");

/***/ }),

/***/ "./node_modules/bootstrap/dist/css/bootstrap.css":
/*!*******************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.css ***!
  \*******************************************************/
/***/ (() => {



/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/quizPage.js"));
module.exports = __webpack_exports__;

})();