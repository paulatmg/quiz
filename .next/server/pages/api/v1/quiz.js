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
exports.id = "pages/api/v1/quiz";
exports.ids = ["pages/api/v1/quiz"];
exports.modules = {

/***/ "serverless-mysql":
/*!***********************************!*\
  !*** external "serverless-mysql" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("serverless-mysql");

/***/ }),

/***/ "(api)/./node_modules/@swc/helpers/lib/_interop_require_default.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@swc/helpers/lib/_interop_require_default.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nexports[\"default\"] = _interopRequireDefault;\nfunction _interopRequireDefault(obj) {\n    return obj && obj.__esModule ? obj : {\n        default: obj\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9ub2RlX21vZHVsZXMvQHN3Yy9oZWxwZXJzL2xpYi9faW50ZXJvcF9yZXF1aXJlX2RlZmF1bHQuanMuanMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYiw4Q0FBNkM7QUFDN0M7QUFDQSxDQUFDLEVBQUM7QUFDRixrQkFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1hcHAvLi9ub2RlX21vZHVsZXMvQHN3Yy9oZWxwZXJzL2xpYi9faW50ZXJvcF9yZXF1aXJlX2RlZmF1bHQuanM/YjQ3MSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICAgIGRlZmF1bHQ6IG9ialxuICAgIH07XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./node_modules/@swc/helpers/lib/_interop_require_default.js\n");

/***/ }),

/***/ "(api)/./helpers/dataBase.js":
/*!*****************************!*\
  !*** ./helpers/dataBase.js ***!
  \*****************************/
/***/ ((module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nconst _interopRequireDefault = (__webpack_require__(/*! @swc/helpers/lib/_interop_require_default.js */ \"(api)/./node_modules/@swc/helpers/lib/_interop_require_default.js\")[\"default\"]);\nconst _serverlessMysql = /*#__PURE__*/ _interopRequireDefault(__webpack_require__(/*! serverless-mysql */ \"serverless-mysql\"));\nasync function openConnection({ host , user , password , database  }) {\n    const db = await (0, _serverlessMysql.default)({\n        config: {\n            host: host,\n            database: database,\n            user: user,\n            password: password\n        }\n    });\n    //   db.connect();\n    return db;\n}\n;\nasync function excuteQuery({ query , connection  }) {\n    try {\n        return await connection.query(query);\n    } catch (error) {\n        return {\n            error\n        };\n    }\n}\n;\nasync function fetchDBDetails(query) {\n    const connection = await openConnection({\n        host: \"ebh2y8tqym512wqs.cbetxkdyhwsb.us-east-1.rds.amazonaws.com\",\n        user: \"q2w01mu95z1r9p9x\",\n        password: \"b3cthljmoxgfhpyt\",\n        database: \"zgwqhx5rlwm7kj0u\"\n    });\n    const responses = await excuteQuery({\n        query,\n        connection\n    });\n    await connection.quit();\n    return responses;\n}\nmodule.exports = {\n    fetchDBDetails\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9oZWxwZXJzL2RhdGFCYXNlLmpzLmpzIiwibWFwcGluZ3MiOiJBQUFBOzs7OztrRkFBa0IsMENBQWtCO0FBRXBDLGVBQWVBLGNBQWMsQ0FBQyxFQUFFQyxJQUFJLEdBQUVDLElBQUksR0FBRUMsUUFBUSxHQUFFQyxRQUFRLEdBQUUsRUFBRTtJQUM5RCxNQUFNQyxFQUFFLEdBQUcsTUFBTUMsSUFBQUEsZ0JBQUssVUFBQztRQUNuQkMsTUFBTSxFQUFFO1lBQ0pOLElBQUksRUFBRUEsSUFBSTtZQUNWRyxRQUFRLEVBQUVBLFFBQVE7WUFDbEJGLElBQUksRUFBRUEsSUFBSTtZQUNWQyxRQUFRLEVBQUVBLFFBQVE7U0FDckI7S0FDSixDQUFDO0lBRUwsa0JBQWtCO0lBQ2YsT0FBT0UsRUFBRSxDQUFDO0NBQ2I7O0FBRUQsZUFBZUcsV0FBVyxDQUFDLEVBQUVDLEtBQUssR0FBRUMsVUFBVSxHQUFFLEVBQUU7SUFDOUMsSUFBSTtRQUNBLE9BQU8sTUFBTUEsVUFBVSxDQUFDRCxLQUFLLENBQUNBLEtBQUssQ0FBQyxDQUFDO0tBQ3hDLENBQUMsT0FBT0UsS0FBSyxFQUFFO1FBQ1osT0FBTztZQUFFQSxLQUFLO1NBQUUsQ0FBQztLQUNwQjtDQUNKOztBQUVELGVBQWVDLGNBQWMsQ0FBQ0gsS0FBSyxFQUFFO0lBQ2pDLE1BQU1DLFVBQVUsR0FBRyxNQUFNVixjQUFjLENBQUM7UUFBRUMsSUFBSSxFQUFFLDJEQUEyRDtRQUFFQyxJQUFJLEVBQUUsa0JBQWtCO1FBQUVDLFFBQVEsRUFBRSxrQkFBa0I7UUFBRUMsUUFBUSxFQUFFLGtCQUFrQjtLQUFFLENBQUM7SUFDcE0sTUFBTVMsU0FBUyxHQUFHLE1BQU1MLFdBQVcsQ0FBQztRQUFFQyxLQUFLO1FBQUVDLFVBQVU7S0FBRSxDQUFDO0lBQzFELE1BQU1BLFVBQVUsQ0FBQ0ksSUFBSSxFQUFFLENBQUM7SUFDeEIsT0FBT0QsU0FBUyxDQUFDO0NBRXBCO0FBS0RFLE1BQU0sQ0FBQ0MsT0FBTyxHQUFHO0lBQUVKLGNBQWM7Q0FBRSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktYXBwLy4vaGVscGVycy9kYXRhQmFzZS5qcz9hMTU2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBteXNxbCBmcm9tICdzZXJ2ZXJsZXNzLW15c3FsJztcblxuYXN5bmMgZnVuY3Rpb24gb3BlbkNvbm5lY3Rpb24oeyBob3N0LCB1c2VyLCBwYXNzd29yZCwgZGF0YWJhc2UgfSkge1xuICAgIGNvbnN0IGRiID0gYXdhaXQgbXlzcWwoe1xuICAgICAgICBjb25maWc6IHtcbiAgICAgICAgICAgIGhvc3Q6IGhvc3QsXG4gICAgICAgICAgICBkYXRhYmFzZTogZGF0YWJhc2UsXG4gICAgICAgICAgICB1c2VyOiB1c2VyLFxuICAgICAgICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkXG4gICAgICAgIH1cbiAgICB9KVxuXG4gLy8gICBkYi5jb25uZWN0KCk7XG4gICAgcmV0dXJuIGRiO1xufTtcblxuYXN5bmMgZnVuY3Rpb24gZXhjdXRlUXVlcnkoeyBxdWVyeSwgY29ubmVjdGlvbiB9KSB7XG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IGNvbm5lY3Rpb24ucXVlcnkocXVlcnkpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHJldHVybiB7IGVycm9yIH07XG4gICAgfVxufTtcblxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hEQkRldGFpbHMocXVlcnkpIHtcbiAgICBjb25zdCBjb25uZWN0aW9uID0gYXdhaXQgb3BlbkNvbm5lY3Rpb24oeyBob3N0OiBcImViaDJ5OHRxeW01MTJ3cXMuY2JldHhrZHlod3NiLnVzLWVhc3QtMS5yZHMuYW1hem9uYXdzLmNvbVwiLCB1c2VyOiBcInEydzAxbXU5NXoxcjlwOXhcIiwgcGFzc3dvcmQ6IFwiYjNjdGhsam1veGdmaHB5dFwiLCBkYXRhYmFzZTogXCJ6Z3dxaHg1cmx3bTdrajB1XCIgfSk7XG4gICAgY29uc3QgcmVzcG9uc2VzID0gYXdhaXQgZXhjdXRlUXVlcnkoeyBxdWVyeSwgY29ubmVjdGlvbiB9KTtcbiAgICBhd2FpdCBjb25uZWN0aW9uLnF1aXQoKTtcbiAgICByZXR1cm4gcmVzcG9uc2VzO1xuXG59XG5cblxuXG5cbm1vZHVsZS5leHBvcnRzID0geyBmZXRjaERCRGV0YWlscyB9OyJdLCJuYW1lcyI6WyJvcGVuQ29ubmVjdGlvbiIsImhvc3QiLCJ1c2VyIiwicGFzc3dvcmQiLCJkYXRhYmFzZSIsImRiIiwibXlzcWwiLCJjb25maWciLCJleGN1dGVRdWVyeSIsInF1ZXJ5IiwiY29ubmVjdGlvbiIsImVycm9yIiwiZmV0Y2hEQkRldGFpbHMiLCJyZXNwb25zZXMiLCJxdWl0IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./helpers/dataBase.js\n");

/***/ }),

/***/ "(api)/./pages/api/v1/quiz.js":
/*!******************************!*\
  !*** ./pages/api/v1/quiz.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _helpers_dataBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../helpers/dataBase */ \"(api)/./helpers/dataBase.js\");\n/* harmony import */ var _helpers_dataBase__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_helpers_dataBase__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function handler(req, res) {\n    const subject = req.query.subject;\n    if (!subject) {\n        res.status(400).json({\n            error: 'Please provide a \"subject\" to filter the questions!'\n        });\n        return null;\n    }\n    const query = `SELECT q.id, q.subject, q.question, a.description, a.is_correct FROM quiz q JOIN answers a ON a.quiz_id = q.id WHERE q.subject = '${subject}'`;\n    const responses = await (0,_helpers_dataBase__WEBPACK_IMPORTED_MODULE_0__.fetchDBDetails)(query);\n    if (!responses.length) {\n        res.status(400).json({\n            error: `No results for the \"${subject}\" subject!`\n        });\n        return null;\n    }\n    const quiz = [];\n    for(let i = 0; i < responses.length; i++){\n        const currentResponse = responses[i];\n        //console.log(\"currentResponse::::\", currentResponse);\n        if (!quiz.find((data)=>data.question === currentResponse.question)) {\n            quiz.push({\n                subject: currentResponse.subject,\n                question: currentResponse.question,\n                answers: shuffle(responses.filter((data)=>data.id === currentResponse.id).map((data)=>({\n                        isCorrect: data.is_correct,\n                        description: data.description\n                    })))\n            });\n        }\n    }\n    res.status(200).json(shuffle(quiz));\n//res.status(200).json(quiz);\n};\nfunction shuffle(array) {\n    let currentIndex = array.length;\n    let randomIndex;\n    while(currentIndex != 0){\n        randomIndex = Math.floor(Math.random() * currentIndex);\n        currentIndex--;\n        [array[currentIndex], array[randomIndex]] = [\n            array[randomIndex],\n            array[currentIndex]\n        ];\n    }\n    return array;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Il0sInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgZmV0Y2hEQkRldGFpbHMgfSBmcm9tICcuLi8uLi8uLi9oZWxwZXJzL2RhdGFCYXNlJztcblxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gICAgY29uc3Qgc3ViamVjdCA9IHJlcS5xdWVyeS5zdWJqZWN0O1xuXG4gICAgaWYgKCFzdWJqZWN0KSB7XG4gICAgICAgIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgZXJyb3I6ICdQbGVhc2UgcHJvdmlkZSBhIFwic3ViamVjdFwiIHRvIGZpbHRlciB0aGUgcXVlc3Rpb25zIScgfSk7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IHF1ZXJ5ID0gYFNFTEVDVCBxLmlkLCBxLnN1YmplY3QsIHEucXVlc3Rpb24sIGEuZGVzY3JpcHRpb24sIGEuaXNfY29ycmVjdCBGUk9NIHF1aXogcSBKT0lOIGFuc3dlcnMgYSBPTiBhLnF1aXpfaWQgPSBxLmlkIFdIRVJFIHEuc3ViamVjdCA9ICcke3N1YmplY3R9J2A7XG5cbiAgICBjb25zdCByZXNwb25zZXMgPSBhd2FpdCBmZXRjaERCRGV0YWlscyhxdWVyeSk7XG5cbiAgICBpZiAoIXJlc3BvbnNlcy5sZW5ndGgpIHtcbiAgICAgICAgcmVzLnN0YXR1cyg0MDApLmpzb24oeyBlcnJvcjogYE5vIHJlc3VsdHMgZm9yIHRoZSBcIiR7c3ViamVjdH1cIiBzdWJqZWN0IWAgfSk7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IHF1aXogPSBbXTtcblxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXNwb25zZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgY3VycmVudFJlc3BvbnNlID0gcmVzcG9uc2VzW2ldO1xuXG4gICAgICAgIC8vY29uc29sZS5sb2coXCJjdXJyZW50UmVzcG9uc2U6Ojo6XCIsIGN1cnJlbnRSZXNwb25zZSk7XG5cblxuXG4gICAgICAgIGlmICghcXVpei5maW5kKChkYXRhKSA9PiBkYXRhLnF1ZXN0aW9uID09PSBjdXJyZW50UmVzcG9uc2UucXVlc3Rpb24pKSB7XG5cbiAgICAgICAgICAgIHF1aXoucHVzaCh7XG4gICAgICAgICAgICAgICAgc3ViamVjdDogY3VycmVudFJlc3BvbnNlLnN1YmplY3QsXG4gICAgICAgICAgICAgICAgcXVlc3Rpb246IGN1cnJlbnRSZXNwb25zZS5xdWVzdGlvbixcbiAgICAgICAgICAgICAgICBhbnN3ZXJzOiBzaHVmZmxlKHJlc3BvbnNlc1xuICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKChkYXRhKSA9PiBkYXRhLmlkID09PSBjdXJyZW50UmVzcG9uc2UuaWQpXG4gICAgICAgICAgICAgICAgICAgIC5tYXAoKGRhdGEpID0+ICh7XG4gICAgICAgICAgICAgICAgICAgICAgICBpc0NvcnJlY3Q6IGRhdGEuaXNfY29ycmVjdCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBkYXRhLmRlc2NyaXB0aW9uXG4gICAgICAgICAgICAgICAgICAgIH0pKVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oc2h1ZmZsZShxdWl6KSk7XG4gICAgLy9yZXMuc3RhdHVzKDIwMCkuanNvbihxdWl6KTtcbn1cblxuXG5cbmZ1bmN0aW9uIHNodWZmbGUoYXJyYXkpIHtcbiAgICBsZXQgY3VycmVudEluZGV4ID0gYXJyYXkubGVuZ3RoO1xuICAgIGxldCByYW5kb21JbmRleDtcblxuICAgIHdoaWxlIChjdXJyZW50SW5kZXggIT0gMCkge1xuXG4gICAgICAgIHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY3VycmVudEluZGV4KTtcbiAgICAgICAgY3VycmVudEluZGV4LS07XG5cbiAgICAgICAgW2FycmF5W2N1cnJlbnRJbmRleF0sIGFycmF5W3JhbmRvbUluZGV4XV0gPSBbXG4gICAgICAgICAgICBhcnJheVtyYW5kb21JbmRleF0sIGFycmF5W2N1cnJlbnRJbmRleF1dO1xuICAgIH1cblxuICAgIHJldHVybiBhcnJheTtcbn0iXSwibmFtZXMiOlsiZmV0Y2hEQkRldGFpbHMiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwic3ViamVjdCIsInF1ZXJ5Iiwic3RhdHVzIiwianNvbiIsImVycm9yIiwicmVzcG9uc2VzIiwibGVuZ3RoIiwicXVpeiIsImkiLCJjdXJyZW50UmVzcG9uc2UiLCJmaW5kIiwiZGF0YSIsInF1ZXN0aW9uIiwicHVzaCIsImFuc3dlcnMiLCJzaHVmZmxlIiwiZmlsdGVyIiwiaWQiLCJtYXAiLCJpc0NvcnJlY3QiLCJpc19jb3JyZWN0IiwiZGVzY3JpcHRpb24iLCJhcnJheSIsImN1cnJlbnRJbmRleCIsInJhbmRvbUluZGV4IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/v1/quiz.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/v1/quiz.js"));
module.exports = __webpack_exports__;

})();