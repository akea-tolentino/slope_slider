/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _moving_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\n/* harmony import */ var _rider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rider */ \"./src/rider.js\");\n/* harmony import */ var _obstacle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./obstacle */ \"./src/obstacle.js\");\n/* harmony import */ var _tree__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tree */ \"./src/tree.js\");\n/* harmony import */ var _small_tree__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./small_tree */ \"./src/small_tree.js\");\n\n\n\n\n\n\n//when we load the page, canvas element is created and printed\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const canvasEl = document.getElementById(\"game-canvas\");\n  canvasEl.width = 1500;\n  canvasEl.height = 1500;\n  const ctx = canvasEl.getContext(\"2d\");\n  ctx.fillStyle = \"whitesmoke\";\n  ctx.fillRect(0, 0, 1500, 1500);\n  window.ctx = ctx;\n});\nwindow.addEventListener(\"keydown\", e => {\n  if (e.key === \"a\") player.moveLeft();\n  if (e.key === \"d\") player.moveRight();\n  if (e.key === \" \") player.jump();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTJDO0FBQ2Y7QUFDTTtBQUNSO0FBQ1c7O0FBRXJDO0FBQ0FLLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsTUFBTTtFQUNoRCxNQUFNQyxRQUFRLEdBQUdGLFFBQVEsQ0FBQ0csY0FBYyxDQUFDLGFBQWEsQ0FBQztFQUN2REQsUUFBUSxDQUFDRSxLQUFLLEdBQUcsSUFBSTtFQUNyQkYsUUFBUSxDQUFDRyxNQUFNLEdBQUcsSUFBSTtFQUV0QixNQUFNQyxHQUFHLEdBQUdKLFFBQVEsQ0FBQ0ssVUFBVSxDQUFDLElBQUksQ0FBQztFQUNyQ0QsR0FBRyxDQUFDRSxTQUFTLEdBQUcsWUFBWTtFQUM1QkYsR0FBRyxDQUFDRyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDO0VBRTlCQyxNQUFNLENBQUNKLEdBQUcsR0FBR0EsR0FBRztBQUNwQixDQUFDLENBQUM7QUFFRkksTUFBTSxDQUFDVCxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUdVLENBQUMsSUFBSztFQUV0QyxJQUFJQSxDQUFDLENBQUNDLEdBQUcsS0FBSyxHQUFHLEVBQUVDLE1BQU0sQ0FBQ0MsUUFBUSxDQUFDLENBQUM7RUFDcEMsSUFBSUgsQ0FBQyxDQUFDQyxHQUFHLEtBQUssR0FBRyxFQUFFQyxNQUFNLENBQUNFLFNBQVMsQ0FBQyxDQUFDO0VBQ3JDLElBQUlKLENBQUMsQ0FBQ0MsR0FBRyxLQUFLLEdBQUcsRUFBRUMsTUFBTSxDQUFDRyxJQUFJLENBQUMsQ0FBQztBQUNwQyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qYXZhc2NyaXB0X3Byb2plY3QvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTW92aW5nT2JqZWN0IGZyb20gXCIuL21vdmluZ19vYmplY3RcIjtcbmltcG9ydCBSaWRlciBmcm9tIFwiLi9yaWRlclwiO1xuaW1wb3J0IE9ic3RhY2xlIGZyb20gXCIuL29ic3RhY2xlXCI7XG5pbXBvcnQgVHJlZSBmcm9tIFwiLi90cmVlXCI7XG5pbXBvcnQgU21hbGxUcmVlIGZyb20gXCIuL3NtYWxsX3RyZWVcIjtcblxuLy93aGVuIHdlIGxvYWQgdGhlIHBhZ2UsIGNhbnZhcyBlbGVtZW50IGlzIGNyZWF0ZWQgYW5kIHByaW50ZWRcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgICBjb25zdCBjYW52YXNFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZS1jYW52YXNcIik7XG4gICAgY2FudmFzRWwud2lkdGggPSAxNTAwO1xuICAgIGNhbnZhc0VsLmhlaWdodCA9IDE1MDA7XG5cbiAgICBjb25zdCBjdHggPSBjYW52YXNFbC5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVzbW9rZVwiO1xuICAgIGN0eC5maWxsUmVjdCgwLCAwLCAxNTAwLCAxNTAwKTtcbiAgICBcbiAgICB3aW5kb3cuY3R4ID0gY3R4O1xufSk7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZSkgPT4ge1xuXG4gICAgaWYgKGUua2V5ID09PSBcImFcIikgcGxheWVyLm1vdmVMZWZ0KCk7XG4gICAgaWYgKGUua2V5ID09PSBcImRcIikgcGxheWVyLm1vdmVSaWdodCgpO1xuICAgIGlmIChlLmtleSA9PT0gXCIgXCIpIHBsYXllci5qdW1wKCk7XG59KTtcbiJdLCJuYW1lcyI6WyJNb3ZpbmdPYmplY3QiLCJSaWRlciIsIk9ic3RhY2xlIiwiVHJlZSIsIlNtYWxsVHJlZSIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNhbnZhc0VsIiwiZ2V0RWxlbWVudEJ5SWQiLCJ3aWR0aCIsImhlaWdodCIsImN0eCIsImdldENvbnRleHQiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsIndpbmRvdyIsImUiLCJrZXkiLCJwbGF5ZXIiLCJtb3ZlTGVmdCIsIm1vdmVSaWdodCIsImp1bXAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass MovingObject {\n  constructor(options) {\n    const {\n      pos,\n      vel,\n      radius,\n      color\n    } = options;\n    this.pos = pos;\n    this.vel = vel;\n    this.radius = radius;\n    this.color = color;\n  }\n  draw(ctx) {\n    ctx.beginPath();\n    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);\n    ctx.fillStyle = this.color;\n    ctx.fill();\n    // ctx.strokeStyle = this.color;\n    // ctx.stroke();\n  }\n\n  move() {\n    this.pos[0] += this.vel[0];\n    this.pos[1] += this.vel[1];\n  }\n  moveLeft() {\n    this.vel = [-600, 0];\n    this.move();\n    this.draw(ctx);\n    this.vel = [0, 0];\n  }\n  moveRight() {\n    this.vel = [600, 0];\n    this.move();\n    this.draw(ctx);\n    this.vel = [0, 0];\n  }\n  jump() {\n    this.radius = 95;\n    this.draw(ctx);\n    this.radius = 50;\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (MovingObject);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW92aW5nX29iamVjdC5qcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEsTUFBTUEsWUFBWSxDQUFDO0VBQ2ZDLFdBQVdBLENBQUNDLE9BQU8sRUFBRTtJQUNqQixNQUFNO01BQUNDLEdBQUc7TUFBRUMsR0FBRztNQUFFQyxNQUFNO01BQUVDO0lBQUssQ0FBQyxHQUFHSixPQUFPO0lBRXpDLElBQUksQ0FBQ0MsR0FBRyxHQUFHQSxHQUFHO0lBQ2QsSUFBSSxDQUFDQyxHQUFHLEdBQUdBLEdBQUc7SUFDZCxJQUFJLENBQUNDLE1BQU0sR0FBR0EsTUFBTTtJQUNwQixJQUFJLENBQUNDLEtBQUssR0FBR0EsS0FBSztFQUN0QjtFQUNBQyxJQUFJQSxDQUFDQyxHQUFHLEVBQUU7SUFDTkEsR0FBRyxDQUFDQyxTQUFTLENBQUMsQ0FBQztJQUNmRCxHQUFHLENBQUNFLEdBQUcsQ0FBQyxJQUFJLENBQUNQLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUNBLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUNFLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHTSxJQUFJLENBQUNDLEVBQUUsQ0FBQztJQUM5REosR0FBRyxDQUFDSyxTQUFTLEdBQUcsSUFBSSxDQUFDUCxLQUFLO0lBQzFCRSxHQUFHLENBQUNNLElBQUksQ0FBQyxDQUFDO0lBQ1Y7SUFDQTtFQUNKOztFQUVBQyxJQUFJQSxDQUFBLEVBQUc7SUFDSCxJQUFJLENBQUNaLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUNDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDMUIsSUFBSSxDQUFDRCxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0VBQzlCO0VBRUFZLFFBQVFBLENBQUEsRUFBRztJQUNQLElBQUksQ0FBQ1osR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO0lBQ3BCLElBQUksQ0FBQ1csSUFBSSxDQUFDLENBQUM7SUFDWCxJQUFJLENBQUNSLElBQUksQ0FBQ0MsR0FBRyxDQUFDO0lBQ2QsSUFBSSxDQUFDSixHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0VBQ3JCO0VBRUFhLFNBQVNBLENBQUEsRUFBRztJQUNSLElBQUksQ0FBQ2IsR0FBRyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztJQUNuQixJQUFJLENBQUNXLElBQUksQ0FBQyxDQUFDO0lBQ1gsSUFBSSxDQUFDUixJQUFJLENBQUNDLEdBQUcsQ0FBQztJQUNkLElBQUksQ0FBQ0osR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztFQUNyQjtFQUVBYyxJQUFJQSxDQUFBLEVBQUc7SUFDSCxJQUFJLENBQUNiLE1BQU0sR0FBRyxFQUFFO0lBQ2hCLElBQUksQ0FBQ0UsSUFBSSxDQUFDQyxHQUFHLENBQUM7SUFDZCxJQUFJLENBQUNILE1BQU0sR0FBRyxFQUFFO0VBQ3BCO0FBQ0o7QUFFQSwrREFBZUwsWUFBWSIsInNvdXJjZXMiOlsid2VicGFjazovL2phdmFzY3JpcHRfcHJvamVjdC8uL3NyYy9tb3Zpbmdfb2JqZWN0LmpzPzIxMTMiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgTW92aW5nT2JqZWN0IHtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgICAgIGNvbnN0IHtwb3MsIHZlbCwgcmFkaXVzLCBjb2xvcn0gPSBvcHRpb25zO1xuXG4gICAgICAgIHRoaXMucG9zID0gcG9zO1xuICAgICAgICB0aGlzLnZlbCA9IHZlbDtcbiAgICAgICAgdGhpcy5yYWRpdXMgPSByYWRpdXM7XG4gICAgICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcbiAgICB9XG4gICAgZHJhdyhjdHgpIHtcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBjdHguYXJjKHRoaXMucG9zWzBdLCB0aGlzLnBvc1sxXSwgdGhpcy5yYWRpdXMsIDAsIDIgKiBNYXRoLlBJKTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7XG4gICAgICAgIGN0eC5maWxsKCk7XG4gICAgICAgIC8vIGN0eC5zdHJva2VTdHlsZSA9IHRoaXMuY29sb3I7XG4gICAgICAgIC8vIGN0eC5zdHJva2UoKTtcbiAgICB9XG5cbiAgICBtb3ZlKCkge1xuICAgICAgICB0aGlzLnBvc1swXSArPSB0aGlzLnZlbFswXTtcbiAgICAgICAgdGhpcy5wb3NbMV0gKz0gdGhpcy52ZWxbMV07XG4gICAgfVxuXG4gICAgbW92ZUxlZnQoKSB7XG4gICAgICAgIHRoaXMudmVsID0gWy02MDAsIDBdO1xuICAgICAgICB0aGlzLm1vdmUoKTtcbiAgICAgICAgdGhpcy5kcmF3KGN0eCk7XG4gICAgICAgIHRoaXMudmVsID0gWzAsIDBdO1xuICAgIH1cblxuICAgIG1vdmVSaWdodCgpIHtcbiAgICAgICAgdGhpcy52ZWwgPSBbNjAwLCAwXTtcbiAgICAgICAgdGhpcy5tb3ZlKCk7XG4gICAgICAgIHRoaXMuZHJhdyhjdHgpO1xuICAgICAgICB0aGlzLnZlbCA9IFswLCAwXTtcbiAgICB9XG5cbiAgICBqdW1wKCkge1xuICAgICAgICB0aGlzLnJhZGl1cyA9IDk1O1xuICAgICAgICB0aGlzLmRyYXcoY3R4KTtcbiAgICAgICAgdGhpcy5yYWRpdXMgPSA1MDtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1vdmluZ09iamVjdDsiXSwibmFtZXMiOlsiTW92aW5nT2JqZWN0IiwiY29uc3RydWN0b3IiLCJvcHRpb25zIiwicG9zIiwidmVsIiwicmFkaXVzIiwiY29sb3IiLCJkcmF3IiwiY3R4IiwiYmVnaW5QYXRoIiwiYXJjIiwiTWF0aCIsIlBJIiwiZmlsbFN0eWxlIiwiZmlsbCIsIm1vdmUiLCJtb3ZlTGVmdCIsIm1vdmVSaWdodCIsImp1bXAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/moving_object.js\n");

/***/ }),

/***/ "./src/obstacle.js":
/*!*************************!*\
  !*** ./src/obstacle.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _moving_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\n\nclass Obstacle extends _moving_object__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  static POSITION = [[150, 0], [750, 0], [1350, 0]];\n  static VELOCITY = [0, 50];\n  static RADIUS = 50;\n  static COLOR = \"brown\";\n  constructor(options) {\n    super(options);\n    this.pos = Obstacle.POSITION[Math.floor(Math.random() * Obstacle.POSITION.length)];\n    this.vel = Obstacle.VELOCITY;\n    this.radius = Obstacle.RADIUS;\n    this.color = Obstacle.COLOR;\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Obstacle);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvb2JzdGFjbGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBMkM7QUFFM0MsTUFBTUMsUUFBUSxTQUFTRCxzREFBWSxDQUFDO0VBQ2hDLE9BQU9FLFFBQVEsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO0VBQ2pELE9BQU9DLFFBQVEsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUM7RUFDekIsT0FBT0MsTUFBTSxHQUFHLEVBQUU7RUFDbEIsT0FBT0MsS0FBSyxHQUFHLE9BQU87RUFFdEJDLFdBQVdBLENBQUNDLE9BQU8sRUFBRTtJQUNqQixLQUFLLENBQUNBLE9BQU8sQ0FBQztJQUNkLElBQUksQ0FBQ0MsR0FBRyxHQUFHUCxRQUFRLENBQUNDLFFBQVEsQ0FBQ08sSUFBSSxDQUFDQyxLQUFLLENBQUNELElBQUksQ0FBQ0UsTUFBTSxDQUFDLENBQUMsR0FBR1YsUUFBUSxDQUFDQyxRQUFRLENBQUNVLE1BQU0sQ0FBQyxDQUFDO0lBQ2xGLElBQUksQ0FBQ0MsR0FBRyxHQUFHWixRQUFRLENBQUNFLFFBQVE7SUFDNUIsSUFBSSxDQUFDVyxNQUFNLEdBQUdiLFFBQVEsQ0FBQ0csTUFBTTtJQUM3QixJQUFJLENBQUNXLEtBQUssR0FBR2QsUUFBUSxDQUFDSSxLQUFLO0VBQy9CO0FBRUo7QUFFQSwrREFBZUosUUFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL2phdmFzY3JpcHRfcHJvamVjdC8uL3NyYy9vYnN0YWNsZS5qcz85YjBhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNb3ZpbmdPYmplY3QgZnJvbSBcIi4vbW92aW5nX29iamVjdFwiO1xuXG5jbGFzcyBPYnN0YWNsZSBleHRlbmRzIE1vdmluZ09iamVjdCB7XG4gICAgc3RhdGljIFBPU0lUSU9OID0gW1sxNTAsIDBdLCBbNzUwLCAwXSwgWzEzNTAsIDBdXTtcbiAgICBzdGF0aWMgVkVMT0NJVFkgPSBbMCwgNTBdO1xuICAgIHN0YXRpYyBSQURJVVMgPSA1MDtcbiAgICBzdGF0aWMgQ09MT1IgPSBcImJyb3duXCI7XG5cbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgICAgIHN1cGVyKG9wdGlvbnMpO1xuICAgICAgICB0aGlzLnBvcyA9IE9ic3RhY2xlLlBPU0lUSU9OW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIE9ic3RhY2xlLlBPU0lUSU9OLmxlbmd0aCldO1xuICAgICAgICB0aGlzLnZlbCA9IE9ic3RhY2xlLlZFTE9DSVRZO1xuICAgICAgICB0aGlzLnJhZGl1cyA9IE9ic3RhY2xlLlJBRElVUztcbiAgICAgICAgdGhpcy5jb2xvciA9IE9ic3RhY2xlLkNPTE9SO1xuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBPYnN0YWNsZTtcbiJdLCJuYW1lcyI6WyJNb3ZpbmdPYmplY3QiLCJPYnN0YWNsZSIsIlBPU0lUSU9OIiwiVkVMT0NJVFkiLCJSQURJVVMiLCJDT0xPUiIsImNvbnN0cnVjdG9yIiwib3B0aW9ucyIsInBvcyIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImxlbmd0aCIsInZlbCIsInJhZGl1cyIsImNvbG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/obstacle.js\n");

/***/ }),

/***/ "./src/rider.js":
/*!**********************!*\
  !*** ./src/rider.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _moving_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\n\nclass Rider extends _moving_object__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  static RADIUS = 50;\n  static COLOR = \"black\";\n  constructor(options) {\n    super(options);\n    this.pos = [750, 1500];\n    //rider velocity will change to [600, 0] to move right\n    //rider velocity will change to [-600, 0] to move left\n    this.vel = [0, 0];\n    this.radius = Rider.RADIUS;\n    this.color = Rider.COLOR;\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Rider);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcmlkZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBMkM7QUFFM0MsTUFBTUMsS0FBSyxTQUFTRCxzREFBWSxDQUFDO0VBQzdCLE9BQU9FLE1BQU0sR0FBRyxFQUFFO0VBQ2xCLE9BQU9DLEtBQUssR0FBRyxPQUFPO0VBRXRCQyxXQUFXQSxDQUFDQyxPQUFPLEVBQUU7SUFDakIsS0FBSyxDQUFDQSxPQUFPLENBQUM7SUFDZCxJQUFJLENBQUNDLEdBQUcsR0FBRyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUM7SUFDdEI7SUFDQTtJQUNBLElBQUksQ0FBQ0MsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNqQixJQUFJLENBQUNDLE1BQU0sR0FBR1AsS0FBSyxDQUFDQyxNQUFNO0lBQzFCLElBQUksQ0FBQ08sS0FBSyxHQUFHUixLQUFLLENBQUNFLEtBQUs7RUFDNUI7QUFFSjtBQUdBLCtEQUFlRixLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamF2YXNjcmlwdF9wcm9qZWN0Ly4vc3JjL3JpZGVyLmpzP2E3MTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1vdmluZ09iamVjdCBmcm9tIFwiLi9tb3Zpbmdfb2JqZWN0XCI7XG5cbmNsYXNzIFJpZGVyIGV4dGVuZHMgTW92aW5nT2JqZWN0IHtcbiAgICBzdGF0aWMgUkFESVVTID0gNTA7XG4gICAgc3RhdGljIENPTE9SID0gXCJibGFja1wiO1xuXG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgICAgICBzdXBlcihvcHRpb25zKTtcbiAgICAgICAgdGhpcy5wb3MgPSBbNzUwLCAxNTAwXTtcbiAgICAgICAgLy9yaWRlciB2ZWxvY2l0eSB3aWxsIGNoYW5nZSB0byBbNjAwLCAwXSB0byBtb3ZlIHJpZ2h0XG4gICAgICAgIC8vcmlkZXIgdmVsb2NpdHkgd2lsbCBjaGFuZ2UgdG8gWy02MDAsIDBdIHRvIG1vdmUgbGVmdFxuICAgICAgICB0aGlzLnZlbCA9IFswLCAwXTtcbiAgICAgICAgdGhpcy5yYWRpdXMgPSBSaWRlci5SQURJVVM7XG4gICAgICAgIHRoaXMuY29sb3IgPSBSaWRlci5DT0xPUjtcbiAgICB9XG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBSaWRlcjtcbiJdLCJuYW1lcyI6WyJNb3ZpbmdPYmplY3QiLCJSaWRlciIsIlJBRElVUyIsIkNPTE9SIiwiY29uc3RydWN0b3IiLCJvcHRpb25zIiwicG9zIiwidmVsIiwicmFkaXVzIiwiY29sb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/rider.js\n");

/***/ }),

/***/ "./src/small_tree.js":
/*!***************************!*\
  !*** ./src/small_tree.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _tree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tree */ \"./src/tree.js\");\n\nclass SmallTree extends _tree__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  // 0, 1500\n  static RADIUS = 30;\n  static COLOR = \"green\";\n  constructor(options) {\n    super(options);\n    this.pos = options.pos;\n    this.radius = SmallTree.RADIUS;\n    this.color = SmallTree.COLOR;\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (SmallTree);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc21hbGxfdHJlZS5qcy5qcyIsIm1hcHBpbmdzIjoiOztBQUEwQjtBQUUxQixNQUFNQyxTQUFTLFNBQVNELDZDQUFJLENBQUM7RUFDekI7RUFDQSxPQUFPRSxNQUFNLEdBQUcsRUFBRTtFQUNsQixPQUFPQyxLQUFLLEdBQUcsT0FBTztFQUV0QkMsV0FBV0EsQ0FBQ0MsT0FBTyxFQUFFO0lBQ2pCLEtBQUssQ0FBQ0EsT0FBTyxDQUFDO0lBRWQsSUFBSSxDQUFDQyxHQUFHLEdBQUdELE9BQU8sQ0FBQ0MsR0FBRztJQUN0QixJQUFJLENBQUNDLE1BQU0sR0FBR04sU0FBUyxDQUFDQyxNQUFNO0lBQzlCLElBQUksQ0FBQ00sS0FBSyxHQUFHUCxTQUFTLENBQUNFLEtBQUs7RUFDaEM7QUFFSjtBQUNBLCtEQUFlRixTQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamF2YXNjcmlwdF9wcm9qZWN0Ly4vc3JjL3NtYWxsX3RyZWUuanM/ZjY5NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHJlZSBmcm9tIFwiLi90cmVlXCI7XG5cbmNsYXNzIFNtYWxsVHJlZSBleHRlbmRzIFRyZWUge1xuICAgIC8vIDAsIDE1MDBcbiAgICBzdGF0aWMgUkFESVVTID0gMzA7XG4gICAgc3RhdGljIENPTE9SID0gXCJncmVlblwiO1xuXG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgICAgICBzdXBlcihvcHRpb25zKVxuXG4gICAgICAgIHRoaXMucG9zID0gb3B0aW9ucy5wb3M7XG4gICAgICAgIHRoaXMucmFkaXVzID0gU21hbGxUcmVlLlJBRElVUztcbiAgICAgICAgdGhpcy5jb2xvciA9IFNtYWxsVHJlZS5DT0xPUjtcbiAgICB9XG5cbn1cbmV4cG9ydCBkZWZhdWx0IFNtYWxsVHJlZTsiXSwibmFtZXMiOlsiVHJlZSIsIlNtYWxsVHJlZSIsIlJBRElVUyIsIkNPTE9SIiwiY29uc3RydWN0b3IiLCJvcHRpb25zIiwicG9zIiwicmFkaXVzIiwiY29sb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/small_tree.js\n");

/***/ }),

/***/ "./src/tree.js":
/*!*********************!*\
  !*** ./src/tree.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass Tree {\n  // 450, 1050\n  static RADIUS = 100;\n  static COLOR = \"green\";\n  constructor(options) {\n    const {\n      pos,\n      radius,\n      color\n    } = options;\n    this.pos = options.pos;\n    this.radius = Tree.RADIUS;\n    this.color = Tree.COLOR;\n  }\n  drawTree(ctx) {\n    ctx.beginPath();\n    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);\n    ctx.fillStyle = this.color;\n    ctx.fill();\n    // ctx.strokeStyle = this.color;\n    // ctx.stroke();\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Tree);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHJlZS5qcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEsTUFBTUEsSUFBSSxDQUFDO0VBQ1A7RUFDQSxPQUFPQyxNQUFNLEdBQUcsR0FBRztFQUNuQixPQUFPQyxLQUFLLEdBQUcsT0FBTztFQUV0QkMsV0FBV0EsQ0FBQ0MsT0FBTyxFQUFFO0lBQ2pCLE1BQU07TUFBQ0MsR0FBRztNQUFFQyxNQUFNO01BQUVDO0lBQUssQ0FBQyxHQUFHSCxPQUFPO0lBRXBDLElBQUksQ0FBQ0MsR0FBRyxHQUFHRCxPQUFPLENBQUNDLEdBQUc7SUFDdEIsSUFBSSxDQUFDQyxNQUFNLEdBQUdOLElBQUksQ0FBQ0MsTUFBTTtJQUN6QixJQUFJLENBQUNNLEtBQUssR0FBR1AsSUFBSSxDQUFDRSxLQUFLO0VBQzNCO0VBRUFNLFFBQVFBLENBQUNDLEdBQUcsRUFBRTtJQUNWQSxHQUFHLENBQUNDLFNBQVMsQ0FBQyxDQUFDO0lBQ2ZELEdBQUcsQ0FBQ0UsR0FBRyxDQUFDLElBQUksQ0FBQ04sR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQ0EsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQ0MsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUdNLElBQUksQ0FBQ0MsRUFBRSxDQUFDO0lBQzlESixHQUFHLENBQUNLLFNBQVMsR0FBRyxJQUFJLENBQUNQLEtBQUs7SUFDMUJFLEdBQUcsQ0FBQ00sSUFBSSxDQUFDLENBQUM7SUFDVjtJQUNBO0VBQ0o7QUFDSjs7QUFFQSwrREFBZWYsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL2phdmFzY3JpcHRfcHJvamVjdC8uL3NyYy90cmVlLmpzPzk3NGUiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgVHJlZSB7XG4gICAgLy8gNDUwLCAxMDUwXG4gICAgc3RhdGljIFJBRElVUyA9IDEwMDtcbiAgICBzdGF0aWMgQ09MT1IgPSBcImdyZWVuXCI7XG5cbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgICAgIGNvbnN0IHtwb3MsIHJhZGl1cywgY29sb3J9ID0gb3B0aW9ucztcblxuICAgICAgICB0aGlzLnBvcyA9IG9wdGlvbnMucG9zO1xuICAgICAgICB0aGlzLnJhZGl1cyA9IFRyZWUuUkFESVVTO1xuICAgICAgICB0aGlzLmNvbG9yID0gVHJlZS5DT0xPUjtcbiAgICB9XG5cbiAgICBkcmF3VHJlZShjdHgpIHtcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBjdHguYXJjKHRoaXMucG9zWzBdLCB0aGlzLnBvc1sxXSwgdGhpcy5yYWRpdXMsIDAsIDIgKiBNYXRoLlBJKTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7XG4gICAgICAgIGN0eC5maWxsKCk7XG4gICAgICAgIC8vIGN0eC5zdHJva2VTdHlsZSA9IHRoaXMuY29sb3I7XG4gICAgICAgIC8vIGN0eC5zdHJva2UoKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRyZWU7XG4iXSwibmFtZXMiOlsiVHJlZSIsIlJBRElVUyIsIkNPTE9SIiwiY29uc3RydWN0b3IiLCJvcHRpb25zIiwicG9zIiwicmFkaXVzIiwiY29sb3IiLCJkcmF3VHJlZSIsImN0eCIsImJlZ2luUGF0aCIsImFyYyIsIk1hdGgiLCJQSSIsImZpbGxTdHlsZSIsImZpbGwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/tree.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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