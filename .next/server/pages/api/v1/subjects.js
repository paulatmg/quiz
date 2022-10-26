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
exports.id = "pages/api/v1/subjects";
exports.ids = ["pages/api/v1/subjects"];
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

eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nexports[\"default\"] = _interopRequireDefault;\nfunction _interopRequireDefault(obj) {\n    return obj && obj.__esModule ? obj : {\n        default: obj\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9ub2RlX21vZHVsZXMvQHN3Yy9oZWxwZXJzL2xpYi9faW50ZXJvcF9yZXF1aXJlX2RlZmF1bHQuanMuanMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYiw4Q0FBNkM7QUFDN0M7QUFDQSxDQUFDLEVBQUM7QUFDRixrQkFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1hcHAvLi9ub2RlX21vZHVsZXMvQHN3Yy9oZWxwZXJzL2xpYi9faW50ZXJvcF9yZXF1aXJlX2RlZmF1bHQuanM/NWMwYSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICAgIGRlZmF1bHQ6IG9ialxuICAgIH07XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./node_modules/@swc/helpers/lib/_interop_require_default.js\n");

/***/ }),

/***/ "(api)/./helpers/dataBase.js":
/*!*****************************!*\
  !*** ./helpers/dataBase.js ***!
  \*****************************/
/***/ ((module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nconst _interopRequireDefault = (__webpack_require__(/*! @swc/helpers/lib/_interop_require_default.js */ \"(api)/./node_modules/@swc/helpers/lib/_interop_require_default.js\")[\"default\"]);\nconst _serverlessMysql = /*#__PURE__*/ _interopRequireDefault(__webpack_require__(/*! serverless-mysql */ \"serverless-mysql\"));\nasync function openConnection({ host , user , password , database  }) {\n    const db = await (0, _serverlessMysql.default)({\n        config: {\n            host: host,\n            database: database,\n            user: user,\n            password: password\n        }\n    });\n    //   db.connect();\n    return db;\n}\n;\nasync function excuteQuery({ query , connection  }) {\n    try {\n        return await connection.query(query);\n    } catch (error) {\n        return {\n            error\n        };\n    }\n}\n;\nasync function fetchDBDetails(query) {\n    const connection = await openConnection({\n        host: \"ebh2y8tqym512wqs.cbetxkdyhwsb.us-east-1.rds.amazonaws.com\",\n        user: \"q2w01mu95z1r9p9x\",\n        password: \"b3cthljmoxgfhpyt\",\n        database: \"zgwqhx5rlwm7kj0u\"\n    });\n    const responses = await excuteQuery({\n        query,\n        connection\n    });\n    await connection.quit();\n    return responses;\n}\nmodule.exports = {\n    fetchDBDetails\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9oZWxwZXJzL2RhdGFCYXNlLmpzLmpzIiwibWFwcGluZ3MiOiJBQUFBOzs7OztrRkFBa0IsMENBQWtCO0FBRXBDLGVBQWVBLGNBQWMsQ0FBQyxFQUFFQyxJQUFJLEdBQUVDLElBQUksR0FBRUMsUUFBUSxHQUFFQyxRQUFRLEdBQUUsRUFBRTtJQUM5RCxNQUFNQyxFQUFFLEdBQUcsTUFBTUMsSUFBQUEsZ0JBQUssVUFBQztRQUNuQkMsTUFBTSxFQUFFO1lBQ0pOLElBQUksRUFBRUEsSUFBSTtZQUNWRyxRQUFRLEVBQUVBLFFBQVE7WUFDbEJGLElBQUksRUFBRUEsSUFBSTtZQUNWQyxRQUFRLEVBQUVBLFFBQVE7U0FDckI7S0FDSixDQUFDO0lBRUwsa0JBQWtCO0lBQ2YsT0FBT0UsRUFBRSxDQUFDO0NBQ2I7O0FBRUQsZUFBZUcsV0FBVyxDQUFDLEVBQUVDLEtBQUssR0FBRUMsVUFBVSxHQUFFLEVBQUU7SUFDOUMsSUFBSTtRQUNBLE9BQU8sTUFBTUEsVUFBVSxDQUFDRCxLQUFLLENBQUNBLEtBQUssQ0FBQyxDQUFDO0tBQ3hDLENBQUMsT0FBT0UsS0FBSyxFQUFFO1FBQ1osT0FBTztZQUFFQSxLQUFLO1NBQUUsQ0FBQztLQUNwQjtDQUNKOztBQUVELGVBQWVDLGNBQWMsQ0FBQ0gsS0FBSyxFQUFFO0lBQ2pDLE1BQU1DLFVBQVUsR0FBRyxNQUFNVixjQUFjLENBQUM7UUFBRUMsSUFBSSxFQUFFLDJEQUEyRDtRQUFFQyxJQUFJLEVBQUUsa0JBQWtCO1FBQUVDLFFBQVEsRUFBRSxrQkFBa0I7UUFBRUMsUUFBUSxFQUFFLGtCQUFrQjtLQUFFLENBQUM7SUFDcE0sTUFBTVMsU0FBUyxHQUFHLE1BQU1MLFdBQVcsQ0FBQztRQUFFQyxLQUFLO1FBQUVDLFVBQVU7S0FBRSxDQUFDO0lBQzFELE1BQU1BLFVBQVUsQ0FBQ0ksSUFBSSxFQUFFLENBQUM7SUFDeEIsT0FBT0QsU0FBUyxDQUFDO0NBRXBCO0FBS0RFLE1BQU0sQ0FBQ0MsT0FBTyxHQUFHO0lBQUVKLGNBQWM7Q0FBRSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktYXBwLy4vaGVscGVycy9kYXRhQmFzZS5qcz9hMTU2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBteXNxbCBmcm9tICdzZXJ2ZXJsZXNzLW15c3FsJztcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIG9wZW5Db25uZWN0aW9uKHsgaG9zdCwgdXNlciwgcGFzc3dvcmQsIGRhdGFiYXNlIH0pIHtcclxuICAgIGNvbnN0IGRiID0gYXdhaXQgbXlzcWwoe1xyXG4gICAgICAgIGNvbmZpZzoge1xyXG4gICAgICAgICAgICBob3N0OiBob3N0LFxyXG4gICAgICAgICAgICBkYXRhYmFzZTogZGF0YWJhc2UsXHJcbiAgICAgICAgICAgIHVzZXI6IHVzZXIsXHJcbiAgICAgICAgICAgIHBhc3N3b3JkOiBwYXNzd29yZFxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gLy8gICBkYi5jb25uZWN0KCk7XHJcbiAgICByZXR1cm4gZGI7XHJcbn07XHJcblxyXG5hc3luYyBmdW5jdGlvbiBleGN1dGVRdWVyeSh7IHF1ZXJ5LCBjb25uZWN0aW9uIH0pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IGNvbm5lY3Rpb24ucXVlcnkocXVlcnkpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICByZXR1cm4geyBlcnJvciB9O1xyXG4gICAgfVxyXG59O1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hEQkRldGFpbHMocXVlcnkpIHtcclxuICAgIGNvbnN0IGNvbm5lY3Rpb24gPSBhd2FpdCBvcGVuQ29ubmVjdGlvbih7IGhvc3Q6IFwiZWJoMnk4dHF5bTUxMndxcy5jYmV0eGtkeWh3c2IudXMtZWFzdC0xLnJkcy5hbWF6b25hd3MuY29tXCIsIHVzZXI6IFwicTJ3MDFtdTk1ejFyOXA5eFwiLCBwYXNzd29yZDogXCJiM2N0aGxqbW94Z2ZocHl0XCIsIGRhdGFiYXNlOiBcInpnd3FoeDVybHdtN2tqMHVcIiB9KTtcclxuICAgIGNvbnN0IHJlc3BvbnNlcyA9IGF3YWl0IGV4Y3V0ZVF1ZXJ5KHsgcXVlcnksIGNvbm5lY3Rpb24gfSk7XHJcbiAgICBhd2FpdCBjb25uZWN0aW9uLnF1aXQoKTtcclxuICAgIHJldHVybiByZXNwb25zZXM7XHJcblxyXG59XHJcblxyXG5cclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHsgZmV0Y2hEQkRldGFpbHMgfTsiXSwibmFtZXMiOlsib3BlbkNvbm5lY3Rpb24iLCJob3N0IiwidXNlciIsInBhc3N3b3JkIiwiZGF0YWJhc2UiLCJkYiIsIm15c3FsIiwiY29uZmlnIiwiZXhjdXRlUXVlcnkiLCJxdWVyeSIsImNvbm5lY3Rpb24iLCJlcnJvciIsImZldGNoREJEZXRhaWxzIiwicmVzcG9uc2VzIiwicXVpdCIsIm1vZHVsZSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./helpers/dataBase.js\n");

/***/ }),

/***/ "(api)/./pages/api/v1/subjects.js":
/*!**********************************!*\
  !*** ./pages/api/v1/subjects.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _helpers_dataBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../helpers/dataBase */ \"(api)/./helpers/dataBase.js\");\n/* harmony import */ var _helpers_dataBase__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_helpers_dataBase__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function handler(req, res) {\n    const query = `SELECT subject FROM quiz GROUP BY subject`;\n    //console.log(\"QUERY SUBJECTS\", query)\n    const responses = await (0,_helpers_dataBase__WEBPACK_IMPORTED_MODULE_0__.fetchDBDetails)(query);\n    //console.log(\"RESPONSES SUBJECTS\", responses);\n    res.status(200).json(responses);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdjEvc3ViamVjdHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTJEO0FBRTVDLGVBQWVDLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFFNUMsTUFBTUMsS0FBSyxHQUFHLENBQUMseUNBQXlDLENBQUM7SUFFekQsc0NBQXNDO0lBRXRDLE1BQU1DLFNBQVMsR0FBRyxNQUFNTCxpRUFBYyxDQUFDSSxLQUFLLENBQUM7SUFFN0MsK0NBQStDO0lBRS9DRCxHQUFHLENBQUNHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDRixTQUFTLENBQUMsQ0FBQztDQUNuQyIsInNvdXJjZXMiOlsid2VicGFjazovL215LWFwcC8uL3BhZ2VzL2FwaS92MS9zdWJqZWN0cy5qcz9jNGFmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGZldGNoREJEZXRhaWxzIH0gZnJvbSAnLi4vLi4vLi4vaGVscGVycy9kYXRhQmFzZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcblxyXG4gICAgY29uc3QgcXVlcnkgPSBgU0VMRUNUIHN1YmplY3QgRlJPTSBxdWl6IEdST1VQIEJZIHN1YmplY3RgO1xyXG5cclxuICAgIC8vY29uc29sZS5sb2coXCJRVUVSWSBTVUJKRUNUU1wiLCBxdWVyeSlcclxuXHJcbiAgICBjb25zdCByZXNwb25zZXMgPSBhd2FpdCBmZXRjaERCRGV0YWlscyhxdWVyeSk7XHJcblxyXG4gICAgLy9jb25zb2xlLmxvZyhcIlJFU1BPTlNFUyBTVUJKRUNUU1wiLCByZXNwb25zZXMpO1xyXG4gICAgXHJcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbihyZXNwb25zZXMpO1xyXG59XHJcblxyXG4iXSwibmFtZXMiOlsiZmV0Y2hEQkRldGFpbHMiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwicXVlcnkiLCJyZXNwb25zZXMiLCJzdGF0dXMiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/v1/subjects.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/v1/subjects.js"));
module.exports = __webpack_exports__;

})();