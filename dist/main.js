/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\nconst Rider = __webpack_require__(/*! ./rider.js */ \"./src/rider.js\");\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const canvasEl = document.getElementById(\"game-canvas\");\n  canvasEl.width = 1400;\n  canvasEl.height = 1400;\n  const ctx = canvasEl.getContext(\"2d\");\n  ctx.fillStyle = \"whitesmoke\";\n  ctx.fillRect(0, 0, 1400, 1400);\n  window.ctx = ctx;\n  window.MovingObject = MovingObject;\n  window.Rider = Rider;\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6IkFBQUEsTUFBTUEsWUFBWSxHQUFHQyxtQkFBTyxDQUFDLCtDQUFpQixDQUFDO0FBQy9DLE1BQU1DLEtBQUssR0FBR0QsbUJBQU8sQ0FBQyxrQ0FBWSxDQUFDO0FBRW5DRSxRQUFRLENBQUNDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLE1BQU07RUFDaEQsTUFBTUMsUUFBUSxHQUFHRixRQUFRLENBQUNHLGNBQWMsQ0FBQyxhQUFhLENBQUM7RUFDdkRELFFBQVEsQ0FBQ0UsS0FBSyxHQUFHLElBQUk7RUFDckJGLFFBQVEsQ0FBQ0csTUFBTSxHQUFHLElBQUk7RUFFdEIsTUFBTUMsR0FBRyxHQUFHSixRQUFRLENBQUNLLFVBQVUsQ0FBQyxJQUFJLENBQUM7RUFDckNELEdBQUcsQ0FBQ0UsU0FBUyxHQUFHLFlBQVk7RUFDNUJGLEdBQUcsQ0FBQ0csUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQztFQUU5QkMsTUFBTSxDQUFDSixHQUFHLEdBQUdBLEdBQUc7RUFDaEJJLE1BQU0sQ0FBQ2IsWUFBWSxHQUFHQSxZQUFZO0VBQ2xDYSxNQUFNLENBQUNYLEtBQUssR0FBR0EsS0FBSztBQUN4QixDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qYXZhc2NyaXB0X3Byb2plY3QvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBNb3ZpbmdPYmplY3QgPSByZXF1aXJlKFwiLi9tb3Zpbmdfb2JqZWN0XCIpO1xuY29uc3QgUmlkZXIgPSByZXF1aXJlKFwiLi9yaWRlci5qc1wiKTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICAgIGNvbnN0IGNhbnZhc0VsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnYW1lLWNhbnZhc1wiKTtcbiAgICBjYW52YXNFbC53aWR0aCA9IDE0MDA7XG4gICAgY2FudmFzRWwuaGVpZ2h0ID0gMTQwMDtcblxuICAgIGNvbnN0IGN0eCA9IGNhbnZhc0VsLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICBjdHguZmlsbFN0eWxlID0gXCJ3aGl0ZXNtb2tlXCI7XG4gICAgY3R4LmZpbGxSZWN0KDAsIDAsIDE0MDAsIDE0MDApO1xuICAgIFxuICAgIHdpbmRvdy5jdHggPSBjdHg7XG4gICAgd2luZG93Lk1vdmluZ09iamVjdCA9IE1vdmluZ09iamVjdDtcbiAgICB3aW5kb3cuUmlkZXIgPSBSaWRlcjtcbn0pOyJdLCJuYW1lcyI6WyJNb3ZpbmdPYmplY3QiLCJyZXF1aXJlIiwiUmlkZXIiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYW52YXNFbCIsImdldEVsZW1lbnRCeUlkIiwid2lkdGgiLCJoZWlnaHQiLCJjdHgiLCJnZXRDb250ZXh0IiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJ3aW5kb3ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass MovingObject {\n  constructor(options) {\n    const {\n      pos,\n      vel,\n      radius,\n      color\n    } = options;\n    this.pos = pos;\n    this.vel = vel;\n    this.radius = radius;\n    this.color = color;\n  }\n  draw(ctx) {\n    ctx.beginPath();\n    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);\n    ctx.strokeStyle = this.color;\n    ctx.stroke();\n  }\n  move() {\n    this.pos[0] += this.vel[0];\n    this.pos[1] += this.vel[1];\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (MovingObject);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW92aW5nX29iamVjdC5qcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEsTUFBTUEsWUFBWSxDQUFDO0VBQ2ZDLFdBQVdBLENBQUNDLE9BQU8sRUFBRTtJQUNqQixNQUFNO01BQUNDLEdBQUc7TUFBRUMsR0FBRztNQUFFQyxNQUFNO01BQUVDO0lBQUssQ0FBQyxHQUFHSixPQUFPO0lBRXpDLElBQUksQ0FBQ0MsR0FBRyxHQUFHQSxHQUFHO0lBQ2QsSUFBSSxDQUFDQyxHQUFHLEdBQUdBLEdBQUc7SUFDZCxJQUFJLENBQUNDLE1BQU0sR0FBR0EsTUFBTTtJQUNwQixJQUFJLENBQUNDLEtBQUssR0FBR0EsS0FBSztFQUN0QjtFQUNBQyxJQUFJQSxDQUFDQyxHQUFHLEVBQUU7SUFDTkEsR0FBRyxDQUFDQyxTQUFTLENBQUMsQ0FBQztJQUNmRCxHQUFHLENBQUNFLEdBQUcsQ0FBQyxJQUFJLENBQUNQLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUNBLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUNFLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHTSxJQUFJLENBQUNDLEVBQUUsQ0FBQztJQUM5REosR0FBRyxDQUFDSyxXQUFXLEdBQUcsSUFBSSxDQUFDUCxLQUFLO0lBQzVCRSxHQUFHLENBQUNNLE1BQU0sQ0FBQyxDQUFDO0VBQ2hCO0VBRUFDLElBQUlBLENBQUEsRUFBRztJQUNILElBQUksQ0FBQ1osR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQ0MsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUMxQixJQUFJLENBQUNELEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUNDLEdBQUcsQ0FBQyxDQUFDLENBQUM7RUFDOUI7QUFDSjtBQUVBLCtEQUFlSixZQUFZIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamF2YXNjcmlwdF9wcm9qZWN0Ly4vc3JjL21vdmluZ19vYmplY3QuanM/MjExMyJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBNb3ZpbmdPYmplY3Qge1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICAgICAgY29uc3Qge3BvcywgdmVsLCByYWRpdXMsIGNvbG9yfSA9IG9wdGlvbnM7XG5cbiAgICAgICAgdGhpcy5wb3MgPSBwb3M7XG4gICAgICAgIHRoaXMudmVsID0gdmVsO1xuICAgICAgICB0aGlzLnJhZGl1cyA9IHJhZGl1cztcbiAgICAgICAgdGhpcy5jb2xvciA9IGNvbG9yO1xuICAgIH1cbiAgICBkcmF3KGN0eCkge1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5hcmModGhpcy5wb3NbMF0sIHRoaXMucG9zWzFdLCB0aGlzLnJhZGl1cywgMCwgMiAqIE1hdGguUEkpO1xuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSB0aGlzLmNvbG9yO1xuICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgfVxuXG4gICAgbW92ZSgpIHtcbiAgICAgICAgdGhpcy5wb3NbMF0gKz0gdGhpcy52ZWxbMF07XG4gICAgICAgIHRoaXMucG9zWzFdICs9IHRoaXMudmVsWzFdO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTW92aW5nT2JqZWN0OyJdLCJuYW1lcyI6WyJNb3ZpbmdPYmplY3QiLCJjb25zdHJ1Y3RvciIsIm9wdGlvbnMiLCJwb3MiLCJ2ZWwiLCJyYWRpdXMiLCJjb2xvciIsImRyYXciLCJjdHgiLCJiZWdpblBhdGgiLCJhcmMiLCJNYXRoIiwiUEkiLCJzdHJva2VTdHlsZSIsInN0cm9rZSIsIm1vdmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/moving_object.js\n");

/***/ }),

/***/ "./src/rider.js":
/*!**********************!*\
  !*** ./src/rider.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _moving_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\n\nclass Rider extends _moving_object__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  static RADIUS = 30;\n  static COLOR = \"black\";\n  constructor(options) {\n    super(options);\n    this.pos = options.pos;\n    this.vel = 0;\n    this.radius = Rider.RADIUS;\n    this.color = Rider.COLOR;\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Rider);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcmlkZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBMkM7QUFFM0MsTUFBTUMsS0FBSyxTQUFTRCxzREFBWSxDQUFDO0VBQzdCLE9BQU9FLE1BQU0sR0FBRyxFQUFFO0VBQ2xCLE9BQU9DLEtBQUssR0FBRyxPQUFPO0VBRXRCQyxXQUFXQSxDQUFDQyxPQUFPLEVBQUU7SUFDakIsS0FBSyxDQUFDQSxPQUFPLENBQUM7SUFDZCxJQUFJLENBQUNDLEdBQUcsR0FBR0QsT0FBTyxDQUFDQyxHQUFHO0lBQ3RCLElBQUksQ0FBQ0MsR0FBRyxHQUFHLENBQUM7SUFDWixJQUFJLENBQUNDLE1BQU0sR0FBR1AsS0FBSyxDQUFDQyxNQUFNO0lBQzFCLElBQUksQ0FBQ08sS0FBSyxHQUFHUixLQUFLLENBQUNFLEtBQUs7RUFDNUI7QUFFSjtBQUVBLCtEQUFlRixLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamF2YXNjcmlwdF9wcm9qZWN0Ly4vc3JjL3JpZGVyLmpzP2E3MTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1vdmluZ09iamVjdCBmcm9tIFwiLi9tb3Zpbmdfb2JqZWN0XCI7XG5cbmNsYXNzIFJpZGVyIGV4dGVuZHMgTW92aW5nT2JqZWN0IHtcbiAgICBzdGF0aWMgUkFESVVTID0gMzA7XG4gICAgc3RhdGljIENPTE9SID0gXCJibGFja1wiO1xuXG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgICAgICBzdXBlcihvcHRpb25zKTtcbiAgICAgICAgdGhpcy5wb3MgPSBvcHRpb25zLnBvcztcbiAgICAgICAgdGhpcy52ZWwgPSAwO1xuICAgICAgICB0aGlzLnJhZGl1cyA9IFJpZGVyLlJBRElVUztcbiAgICAgICAgdGhpcy5jb2xvciA9IFJpZGVyLkNPTE9SO1xuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBSaWRlcjtcbiJdLCJuYW1lcyI6WyJNb3ZpbmdPYmplY3QiLCJSaWRlciIsIlJBRElVUyIsIkNPTE9SIiwiY29uc3RydWN0b3IiLCJvcHRpb25zIiwicG9zIiwidmVsIiwicmFkaXVzIiwiY29sb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/rider.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qYXZhc2NyaXB0X3Byb2plY3QvLi9zcmMvaW5kZXguc2Nzcz85NzQ1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;