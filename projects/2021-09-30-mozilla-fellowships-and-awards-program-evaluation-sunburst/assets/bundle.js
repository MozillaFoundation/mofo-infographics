/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./source/_js/scripts.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/d3-dsv/src/autoType.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-dsv/src/autoType.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return autoType; });
  function autoType(object) {
    for (var key in object) {
      var value = object[key].trim(), number, m;
      if (!value) value = null;
      else if (value === "true") value = true;
      else if (value === "false") value = false;
      else if (value === "NaN") value = NaN;
      else if (!isNaN(number = +value)) value = number;
      else if (m = value.match(/^([-+]\d{2})?\d{4}(-\d{2}(-\d{2})?)?(T\d{2}:\d{2}(:\d{2}(\.\d{3})?)?(Z|[-+]\d{2}:\d{2})?)?$/)) {
        if (fixtz && !!m[4] && !m[7]) value = value.replace(/-/g, "/").replace(/T/, " ");
        value = new Date(value);
      }
      else continue;
      object[key] = value;
    }
    return object;
  }
  
  // https://github.com/d3/d3-dsv/issues/45
  const fixtz = new Date("2019-01-01T00:00").getHours() || new Date("2019-07-01T00:00").getHours();
  
  /***/ }),
  
  /***/ "./node_modules/d3-dsv/src/csv.js":
  /*!****************************************!*\
    !*** ./node_modules/d3-dsv/src/csv.js ***!
    \****************************************/
  /*! exports provided: csvParse, csvParseRows, csvFormat, csvFormatBody, csvFormatRows, csvFormatRow, csvFormatValue */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "csvParse", function() { return csvParse; });
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "csvParseRows", function() { return csvParseRows; });
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "csvFormat", function() { return csvFormat; });
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "csvFormatBody", function() { return csvFormatBody; });
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "csvFormatRows", function() { return csvFormatRows; });
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "csvFormatRow", function() { return csvFormatRow; });
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "csvFormatValue", function() { return csvFormatValue; });
  /* harmony import */ var _dsv_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dsv.js */ "./node_modules/d3-dsv/src/dsv.js");
  
  
  var csv = Object(_dsv_js__WEBPACK_IMPORTED_MODULE_0__["default"])(",");
  
  var csvParse = csv.parse;
  var csvParseRows = csv.parseRows;
  var csvFormat = csv.format;
  var csvFormatBody = csv.formatBody;
  var csvFormatRows = csv.formatRows;
  var csvFormatRow = csv.formatRow;
  var csvFormatValue = csv.formatValue;
  
  
  /***/ }),
  
  /***/ "./node_modules/d3-dsv/src/dsv.js":
  /*!****************************************!*\
    !*** ./node_modules/d3-dsv/src/dsv.js ***!
    \****************************************/
  /*! exports provided: default */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  var EOL = {},
      EOF = {},
      QUOTE = 34,
      NEWLINE = 10,
      RETURN = 13;
  
  function objectConverter(columns) {
    return new Function("d", "return {" + columns.map(function(name, i) {
      return JSON.stringify(name) + ": d[" + i + "] || \"\"";
    }).join(",") + "}");
  }
  
  function customConverter(columns, f) {
    var object = objectConverter(columns);
    return function(row, i) {
      return f(object(row), i, columns);
    };
  }
  
  // Compute unique columns in order of discovery.
  function inferColumns(rows) {
    var columnSet = Object.create(null),
        columns = [];
  
    rows.forEach(function(row) {
      for (var column in row) {
        if (!(column in columnSet)) {
          columns.push(columnSet[column] = column);
        }
      }
    });
  
    return columns;
  }
  
  function pad(value, width) {
    var s = value + "", length = s.length;
    return length < width ? new Array(width - length + 1).join(0) + s : s;
  }
  
  function formatYear(year) {
    return year < 0 ? "-" + pad(-year, 6)
      : year > 9999 ? "+" + pad(year, 6)
      : pad(year, 4);
  }
  
  function formatDate(date) {
    var hours = date.getUTCHours(),
        minutes = date.getUTCMinutes(),
        seconds = date.getUTCSeconds(),
        milliseconds = date.getUTCMilliseconds();
    return isNaN(date) ? "Invalid Date"
        : formatYear(date.getUTCFullYear(), 4) + "-" + pad(date.getUTCMonth() + 1, 2) + "-" + pad(date.getUTCDate(), 2)
        + (milliseconds ? "T" + pad(hours, 2) + ":" + pad(minutes, 2) + ":" + pad(seconds, 2) + "." + pad(milliseconds, 3) + "Z"
        : seconds ? "T" + pad(hours, 2) + ":" + pad(minutes, 2) + ":" + pad(seconds, 2) + "Z"
        : minutes || hours ? "T" + pad(hours, 2) + ":" + pad(minutes, 2) + "Z"
        : "");
  }
  
  /* harmony default export */ __webpack_exports__["default"] = (function(delimiter) {
    var reFormat = new RegExp("[\"" + delimiter + "\n\r]"),
        DELIMITER = delimiter.charCodeAt(0);
  
    function parse(text, f) {
      var convert, columns, rows = parseRows(text, function(row, i) {
        if (convert) return convert(row, i - 1);
        columns = row, convert = f ? customConverter(row, f) : objectConverter(row);
      });
      rows.columns = columns || [];
      return rows;
    }
  
    function parseRows(text, f) {
      var rows = [], // output rows
          N = text.length,
          I = 0, // current character index
          n = 0, // current line number
          t, // current token
          eof = N <= 0, // current token followed by EOF?
          eol = false; // current token followed by EOL?
  
      // Strip the trailing newline.
      if (text.charCodeAt(N - 1) === NEWLINE) --N;
      if (text.charCodeAt(N - 1) === RETURN) --N;
  
      function token() {
        if (eof) return EOF;
        if (eol) return eol = false, EOL;
  
        // Unescape quotes.
        var i, j = I, c;
        if (text.charCodeAt(j) === QUOTE) {
          while (I++ < N && text.charCodeAt(I) !== QUOTE || text.charCodeAt(++I) === QUOTE);
          if ((i = I) >= N) eof = true;
          else if ((c = text.charCodeAt(I++)) === NEWLINE) eol = true;
          else if (c === RETURN) { eol = true; if (text.charCodeAt(I) === NEWLINE) ++I; }
          return text.slice(j + 1, i - 1).replace(/""/g, "\"");
        }
  
        // Find next delimiter or newline.
        while (I < N) {
          if ((c = text.charCodeAt(i = I++)) === NEWLINE) eol = true;
          else if (c === RETURN) { eol = true; if (text.charCodeAt(I) === NEWLINE) ++I; }
          else if (c !== DELIMITER) continue;
          return text.slice(j, i);
        }
  
        // Return last token before EOF.
        return eof = true, text.slice(j, N);
      }
  
      while ((t = token()) !== EOF) {
        var row = [];
        while (t !== EOL && t !== EOF) row.push(t), t = token();
        if (f && (row = f(row, n++)) == null) continue;
        rows.push(row);
      }
  
      return rows;
    }
  
    function preformatBody(rows, columns) {
      return rows.map(function(row) {
        return columns.map(function(column) {
          return formatValue(row[column]);
        }).join(delimiter);
      });
    }
  
    function format(rows, columns) {
      if (columns == null) columns = inferColumns(rows);
      return [columns.map(formatValue).join(delimiter)].concat(preformatBody(rows, columns)).join("\n");
    }
  
    function formatBody(rows, columns) {
      if (columns == null) columns = inferColumns(rows);
      return preformatBody(rows, columns).join("\n");
    }
  
    function formatRows(rows) {
      return rows.map(formatRow).join("\n");
    }
  
    function formatRow(row) {
      return row.map(formatValue).join(delimiter);
    }
  
    function formatValue(value) {
      return value == null ? ""
          : value instanceof Date ? formatDate(value)
          : reFormat.test(value += "") ? "\"" + value.replace(/"/g, "\"\"") + "\""
          : value;
    }
  
    return {
      parse: parse,
      parseRows: parseRows,
      format: format,
      formatBody: formatBody,
      formatRows: formatRows,
      formatRow: formatRow,
      formatValue: formatValue
    };
  });
  
  
  /***/ }),
  
  /***/ "./node_modules/d3-dsv/src/index.js":
  /*!******************************************!*\
    !*** ./node_modules/d3-dsv/src/index.js ***!
    \******************************************/
  /*! exports provided: dsvFormat, csvParse, csvParseRows, csvFormat, csvFormatBody, csvFormatRows, csvFormatRow, csvFormatValue, tsvParse, tsvParseRows, tsvFormat, tsvFormatBody, tsvFormatRows, tsvFormatRow, tsvFormatValue, autoType */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony import */ var _dsv_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dsv.js */ "./node_modules/d3-dsv/src/dsv.js");
  /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dsvFormat", function() { return _dsv_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });
  
  /* harmony import */ var _csv_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./csv.js */ "./node_modules/d3-dsv/src/csv.js");
  /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "csvParse", function() { return _csv_js__WEBPACK_IMPORTED_MODULE_1__["csvParse"]; });
  
  /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "csvParseRows", function() { return _csv_js__WEBPACK_IMPORTED_MODULE_1__["csvParseRows"]; });
  
  /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "csvFormat", function() { return _csv_js__WEBPACK_IMPORTED_MODULE_1__["csvFormat"]; });
  
  /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "csvFormatBody", function() { return _csv_js__WEBPACK_IMPORTED_MODULE_1__["csvFormatBody"]; });
  
  /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "csvFormatRows", function() { return _csv_js__WEBPACK_IMPORTED_MODULE_1__["csvFormatRows"]; });
  
  /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "csvFormatRow", function() { return _csv_js__WEBPACK_IMPORTED_MODULE_1__["csvFormatRow"]; });
  
  /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "csvFormatValue", function() { return _csv_js__WEBPACK_IMPORTED_MODULE_1__["csvFormatValue"]; });
  
  /* harmony import */ var _tsv_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tsv.js */ "./node_modules/d3-dsv/src/tsv.js");
  /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tsvParse", function() { return _tsv_js__WEBPACK_IMPORTED_MODULE_2__["tsvParse"]; });
  
  /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tsvParseRows", function() { return _tsv_js__WEBPACK_IMPORTED_MODULE_2__["tsvParseRows"]; });
  
  /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tsvFormat", function() { return _tsv_js__WEBPACK_IMPORTED_MODULE_2__["tsvFormat"]; });
  
  /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tsvFormatBody", function() { return _tsv_js__WEBPACK_IMPORTED_MODULE_2__["tsvFormatBody"]; });
  
  /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tsvFormatRows", function() { return _tsv_js__WEBPACK_IMPORTED_MODULE_2__["tsvFormatRows"]; });
  
  /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tsvFormatRow", function() { return _tsv_js__WEBPACK_IMPORTED_MODULE_2__["tsvFormatRow"]; });
  
  /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tsvFormatValue", function() { return _tsv_js__WEBPACK_IMPORTED_MODULE_2__["tsvFormatValue"]; });
  
  /* harmony import */ var _autoType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./autoType.js */ "./node_modules/d3-dsv/src/autoType.js");
  /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "autoType", function() { return _autoType_js__WEBPACK_IMPORTED_MODULE_3__["default"]; });
  
  
  
  
  
  
  
  /***/ }),
  
  /***/ "./node_modules/d3-dsv/src/tsv.js":
  /*!****************************************!*\
    !*** ./node_modules/d3-dsv/src/tsv.js ***!
    \****************************************/
  /*! exports provided: tsvParse, tsvParseRows, tsvFormat, tsvFormatBody, tsvFormatRows, tsvFormatRow, tsvFormatValue */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tsvParse", function() { return tsvParse; });
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tsvParseRows", function() { return tsvParseRows; });
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tsvFormat", function() { return tsvFormat; });
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tsvFormatBody", function() { return tsvFormatBody; });
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tsvFormatRows", function() { return tsvFormatRows; });
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tsvFormatRow", function() { return tsvFormatRow; });
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tsvFormatValue", function() { return tsvFormatValue; });
  /* harmony import */ var _dsv_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dsv.js */ "./node_modules/d3-dsv/src/dsv.js");
  
  
  var tsv = Object(_dsv_js__WEBPACK_IMPORTED_MODULE_0__["default"])("\t");
  
  var tsvParse = tsv.parse;
  var tsvParseRows = tsv.parseRows;
  var tsvFormat = tsv.format;
  var tsvFormatBody = tsv.formatBody;
  var tsvFormatRows = tsv.formatRows;
  var tsvFormatRow = tsv.formatRow;
  var tsvFormatValue = tsv.formatValue;
  
  
  /***/ }),
  
  /***/ "./node_modules/d3-fetch/src/blob.js":
  /*!*******************************************!*\
    !*** ./node_modules/d3-fetch/src/blob.js ***!
    \*******************************************/
  /*! exports provided: default */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  function responseBlob(response) {
    if (!response.ok) throw new Error(response.status + " " + response.statusText);
    return response.blob();
  }
  
  /* harmony default export */ __webpack_exports__["default"] = (function(input, init) {
    return fetch(input, init).then(responseBlob);
  });
  
  
  /***/ }),
  
  /***/ "./node_modules/d3-fetch/src/buffer.js":
  /*!*********************************************!*\
    !*** ./node_modules/d3-fetch/src/buffer.js ***!
    \*********************************************/
  /*! exports provided: default */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  function responseArrayBuffer(response) {
    if (!response.ok) throw new Error(response.status + " " + response.statusText);
    return response.arrayBuffer();
  }
  
  /* harmony default export */ __webpack_exports__["default"] = (function(input, init) {
    return fetch(input, init).then(responseArrayBuffer);
  });
  
  
  /***/ }),
  
  /***/ "./node_modules/d3-fetch/src/dsv.js":
  /*!******************************************!*\
    !*** ./node_modules/d3-fetch/src/dsv.js ***!
    \******************************************/
  /*! exports provided: default, csv, tsv */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return dsv; });
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "csv", function() { return csv; });
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tsv", function() { return tsv; });
  /* harmony import */ var d3_dsv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-dsv */ "./node_modules/d3-dsv/src/index.js");
  /* harmony import */ var _text_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./text.js */ "./node_modules/d3-fetch/src/text.js");
  
  
  
  function dsvParse(parse) {
    return function(input, init, row) {
      if (arguments.length === 2 && typeof init === "function") row = init, init = undefined;
      return Object(_text_js__WEBPACK_IMPORTED_MODULE_1__["default"])(input, init).then(function(response) {
        return parse(response, row);
      });
    };
  }
  
  function dsv(delimiter, input, init, row) {
    if (arguments.length === 3 && typeof init === "function") row = init, init = undefined;
    var format = Object(d3_dsv__WEBPACK_IMPORTED_MODULE_0__["dsvFormat"])(delimiter);
    return Object(_text_js__WEBPACK_IMPORTED_MODULE_1__["default"])(input, init).then(function(response) {
      return format.parse(response, row);
    });
  }
  
  var csv = dsvParse(d3_dsv__WEBPACK_IMPORTED_MODULE_0__["csvParse"]);
  var tsv = dsvParse(d3_dsv__WEBPACK_IMPORTED_MODULE_0__["tsvParse"]);
  
  
  /***/ }),
  
  /***/ "./node_modules/d3-fetch/src/image.js":
  /*!********************************************!*\
    !*** ./node_modules/d3-fetch/src/image.js ***!
    \********************************************/
  /*! exports provided: default */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony default export */ __webpack_exports__["default"] = (function(input, init) {
    return new Promise(function(resolve, reject) {
      var image = new Image;
      for (var key in init) image[key] = init[key];
      image.onerror = reject;
      image.onload = function() { resolve(image); };
      image.src = input;
    });
  });
  
  
  /***/ }),
  
  /***/ "./node_modules/d3-fetch/src/index.js":
  /*!********************************************!*\
    !*** ./node_modules/d3-fetch/src/index.js ***!
    \********************************************/
  /*! exports provided: blob, buffer, dsv, csv, tsv, image, json, text, xml, html, svg */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony import */ var _blob_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blob.js */ "./node_modules/d3-fetch/src/blob.js");
  /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "blob", function() { return _blob_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });
  
  /* harmony import */ var _buffer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buffer.js */ "./node_modules/d3-fetch/src/buffer.js");
  /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "buffer", function() { return _buffer_js__WEBPACK_IMPORTED_MODULE_1__["default"]; });
  
  /* harmony import */ var _dsv_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dsv.js */ "./node_modules/d3-fetch/src/dsv.js");
  /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dsv", function() { return _dsv_js__WEBPACK_IMPORTED_MODULE_2__["default"]; });
  
  /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "csv", function() { return _dsv_js__WEBPACK_IMPORTED_MODULE_2__["csv"]; });
  
  /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tsv", function() { return _dsv_js__WEBPACK_IMPORTED_MODULE_2__["tsv"]; });
  
  /* harmony import */ var _image_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./image.js */ "./node_modules/d3-fetch/src/image.js");
  /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "image", function() { return _image_js__WEBPACK_IMPORTED_MODULE_3__["default"]; });
  
  /* harmony import */ var _json_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./json.js */ "./node_modules/d3-fetch/src/json.js");
  /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "json", function() { return _json_js__WEBPACK_IMPORTED_MODULE_4__["default"]; });
  
  /* harmony import */ var _text_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./text.js */ "./node_modules/d3-fetch/src/text.js");
  /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "text", function() { return _text_js__WEBPACK_IMPORTED_MODULE_5__["default"]; });
  
  /* harmony import */ var _xml_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./xml.js */ "./node_modules/d3-fetch/src/xml.js");
  /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "xml", function() { return _xml_js__WEBPACK_IMPORTED_MODULE_6__["default"]; });
  
  /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "html", function() { return _xml_js__WEBPACK_IMPORTED_MODULE_6__["html"]; });
  
  /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "svg", function() { return _xml_js__WEBPACK_IMPORTED_MODULE_6__["svg"]; });
  
  
  
  
  
  
  
  
  
  
  /***/ }),
  
  /***/ "./node_modules/d3-fetch/src/json.js":
  /*!*******************************************!*\
    !*** ./node_modules/d3-fetch/src/json.js ***!
    \*******************************************/
  /*! exports provided: default */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  function responseJson(response) {
    if (!response.ok) throw new Error(response.status + " " + response.statusText);
    if (response.status === 204 || response.status === 205) return;
    return response.json();
  }
  
  /* harmony default export */ __webpack_exports__["default"] = (function(input, init) {
    return fetch(input, init).then(responseJson);
  });
  
  
  /***/ }),
  
  /***/ "./node_modules/d3-fetch/src/text.js":
  /*!*******************************************!*\
    !*** ./node_modules/d3-fetch/src/text.js ***!
    \*******************************************/
  /*! exports provided: default */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  function responseText(response) {
    if (!response.ok) throw new Error(response.status + " " + response.statusText);
    return response.text();
  }
  
  /* harmony default export */ __webpack_exports__["default"] = (function(input, init) {
    return fetch(input, init).then(responseText);
  });
  
  
  /***/ }),
  
  /***/ "./node_modules/d3-fetch/src/xml.js":
  /*!******************************************!*\
    !*** ./node_modules/d3-fetch/src/xml.js ***!
    \******************************************/
  /*! exports provided: default, html, svg */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "html", function() { return html; });
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "svg", function() { return svg; });
  /* harmony import */ var _text_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./text.js */ "./node_modules/d3-fetch/src/text.js");
  
  
  function parser(type) {
    return (input, init) => Object(_text_js__WEBPACK_IMPORTED_MODULE_0__["default"])(input, init)
      .then(text => (new DOMParser).parseFromString(text, type));
  }
  
  /* harmony default export */ __webpack_exports__["default"] = (parser("application/xml"));
  
  var html = parser("text/html");
  
  var svg = parser("image/svg+xml");
  
  
  /***/ }),
  
  /***/ "./node_modules/d3-hierarchy/src/accessors.js":
  /*!****************************************************!*\
    !*** ./node_modules/d3-hierarchy/src/accessors.js ***!
    \****************************************************/
  /*! exports provided: optional, required */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "optional", function() { return optional; });
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "required", function() { return required; });
  function optional(f) {
    return f == null ? null : required(f);
  }
  
  function required(f) {
    if (typeof f !== "function") throw new Error;
    return f;
  }
  
  
  /***/ }),
  
  /***/ "./node_modules/d3-hierarchy/src/array.js":
  /*!************************************************!*\
    !*** ./node_modules/d3-hierarchy/src/array.js ***!
    \************************************************/
  /*! exports provided: default, shuffle */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shuffle", function() { return shuffle; });
  /* harmony default export */ __webpack_exports__["default"] = (function(x) {
    return typeof x === "object" && "length" in x
      ? x // Array, TypedArray, NodeList, array-like
      : Array.from(x); // Map, Set, iterable, string, or anything else
  });
  
  function shuffle(array) {
    var m = array.length,
        t,
        i;
  
    while (m) {
      i = Math.random() * m-- | 0;
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
  
    return array;
  }
  
  
  /***/ }),
  
  /***/ "./node_modules/d3-hierarchy/src/cluster.js":
  /*!**************************************************!*\
    !*** ./node_modules/d3-hierarchy/src/cluster.js ***!
    \**************************************************/
  /*! exports provided: default */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  function defaultSeparation(a, b) {
    return a.parent === b.parent ? 1 : 2;
  }
  
  function meanX(children) {
    return children.reduce(meanXReduce, 0) / children.length;
  }
  
  function meanXReduce(x, c) {
    return x + c.x;
  }
  
  function maxY(children) {
    return 1 + children.reduce(maxYReduce, 0);
  }
  
  function maxYReduce(y, c) {
    return Math.max(y, c.y);
  }
  
  function leafLeft(node) {
    var children;
    while (children = node.children) node = children[0];
    return node;
  }
  
  function leafRight(node) {
    var children;
    while (children = node.children) node = children[children.length - 1];
    return node;
  }
  
  /* harmony default export */ __webpack_exports__["default"] = (function() {
    var separation = defaultSeparation,
        dx = 1,
        dy = 1,
        nodeSize = false;
  
    function cluster(root) {
      var previousNode,
          x = 0;
  
      // First walk, computing the initial x & y values.
      root.eachAfter(function(node) {
        var children = node.children;
        if (children) {
          node.x = meanX(children);
          node.y = maxY(children);
        } else {
          node.x = previousNode ? x += separation(node, previousNode) : 0;
          node.y = 0;
          previousNode = node;
        }
      });
  
      var left = leafLeft(root),
          right = leafRight(root),
          x0 = left.x - separation(left, right) / 2,
          x1 = right.x + separation(right, left) / 2;
  
      // Second walk, normalizing x & y to the desired size.
      return root.eachAfter(nodeSize ? function(node) {
        node.x = (node.x - root.x) * dx;
        node.y = (root.y - node.y) * dy;
      } : function(node) {
        node.x = (node.x - x0) / (x1 - x0) * dx;
        node.y = (1 - (root.y ? node.y / root.y : 1)) * dy;
      });
    }
  
    cluster.separation = function(x) {
      return arguments.length ? (separation = x, cluster) : separation;
    };
  
    cluster.size = function(x) {
      return arguments.length ? (nodeSize = false, dx = +x[0], dy = +x[1], cluster) : (nodeSize ? null : [dx, dy]);
    };
  
    cluster.nodeSize = function(x) {
      return arguments.length ? (nodeSize = true, dx = +x[0], dy = +x[1], cluster) : (nodeSize ? [dx, dy] : null);
    };
  
    return cluster;
  });
  
  
  /***/ }),
  
  /***/ "./node_modules/d3-hierarchy/src/constant.js":
  /*!***************************************************!*\
    !*** ./node_modules/d3-hierarchy/src/constant.js ***!
    \***************************************************/
  /*! exports provided: constantZero, default */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "constantZero", function() { return constantZero; });
  function constantZero() {
    return 0;
  }
  
  /* harmony default export */ __webpack_exports__["default"] = (function(x) {
    return function() {
      return x;
    };
  });
  
  
  /***/ }),
  
  /***/ "./node_modules/d3-hierarchy/src/hierarchy/ancestors.js":
  /*!**************************************************************!*\
    !*** ./node_modules/d3-hierarchy/src/hierarchy/ancestors.js ***!
    \**************************************************************/
  /*! exports provided: default */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony default export */ __webpack_exports__["default"] = (function() {
    var node = this, nodes = [node];
    while (node = node.parent) {
      nodes.push(node);
    }
    return nodes;
  });
  
  
  /***/ }),
  
  /***/ "./node_modules/d3-hierarchy/src/hierarchy/count.js":
  /*!**********************************************************!*\
    !*** ./node_modules/d3-hierarchy/src/hierarchy/count.js ***!
    \**********************************************************/
  /*! exports provided: default */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  function count(node) {
    var sum = 0,
        children = node.children,
        i = children && children.length;
    if (!i) sum = 1;
    else while (--i >= 0) sum += children[i].value;
    node.value = sum;
  }
  
  /* harmony default export */ __webpack_exports__["default"] = (function() {
    return this.eachAfter(count);
  });
  
  
  /***/ }),
  
  /***/ "./node_modules/d3-hierarchy/src/hierarchy/descendants.js":
  /*!****************************************************************!*\
    !*** ./node_modules/d3-hierarchy/src/hierarchy/descendants.js ***!
    \****************************************************************/
  /*! exports provided: default */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony default export */ __webpack_exports__["default"] = (function() {
    return Array.from(this);
  });
  
  
  /***/ }),
  
  /***/ "./node_modules/d3-hierarchy/src/hierarchy/each.js":
  /*!*********************************************************!*\
    !*** ./node_modules/d3-hierarchy/src/hierarchy/each.js ***!
    \*********************************************************/
  /*! exports provided: default */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony default export */ __webpack_exports__["default"] = (function(callback, that) {
    let index = -1;
    for (const node of this) {
      callback.call(that, node, ++index, this);
    }
    return this;
  });
  
  
  /***/ }),
  
  /***/ "./node_modules/d3-hierarchy/src/hierarchy/eachAfter.js":
  /*!**************************************************************!*\
    !*** ./node_modules/d3-hierarchy/src/hierarchy/eachAfter.js ***!
    \**************************************************************/
  /*! exports provided: default */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony default export */ __webpack_exports__["default"] = (function(callback, that) {
    var node = this, nodes = [node], next = [], children, i, n, index = -1;
    while (node = nodes.pop()) {
      next.push(node);
      if (children = node.children) {
        for (i = 0, n = children.length; i < n; ++i) {
          nodes.push(children[i]);
        }
      }
    }
    while (node = next.pop()) {
      callback.call(that, node, ++index, this);
    }
    return this;
  });
  
  
  /***/ }),
  
  /***/ "./node_modules/d3-hierarchy/src/hierarchy/eachBefore.js":
  /*!***************************************************************!*\
    !*** ./node_modules/d3-hierarchy/src/hierarchy/eachBefore.js ***!
    \***************************************************************/
  /*! exports provided: default */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony default export */ __webpack_exports__["default"] = (function(callback, that) {
    var node = this, nodes = [node], children, i, index = -1;
    while (node = nodes.pop()) {
      callback.call(that, node, ++index, this);
      if (children = node.children) {
        for (i = children.length - 1; i >= 0; --i) {
          nodes.push(children[i]);
        }
      }
    }
    return this;
  });
  
  
  /***/ }),
  
  /***/ "./node_modules/d3-hierarchy/src/hierarchy/find.js":
  /*!*********************************************************!*\
    !*** ./node_modules/d3-hierarchy/src/hierarchy/find.js ***!
    \*********************************************************/
  /*! exports provided: default */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony default export */ __webpack_exports__["default"] = (function(callback, that) {
    let index = -1;
    for (const node of this) {
      if (callback.call(that, node, ++index, this)) {
        return node;
      }
    }
  });
  
  
  /***/ }),
  
  /***/ "./node_modules/d3-hierarchy/src/hierarchy/index.js":
  /*!**********************************************************!*\
    !*** ./node_modules/d3-hierarchy/src/hierarchy/index.js ***!
    \**********************************************************/
  /*! exports provided: default, computeHeight, Node */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return hierarchy; });
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeHeight", function() { return computeHeight; });
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Node", function() { return Node; });
  /* harmony import */ var _count_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./count.js */ "./node_modules/d3-hierarchy/src/hierarchy/count.js");
  /* harmony import */ var _each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./each.js */ "./node_modules/d3-hierarchy/src/hierarchy/each.js");
  /* harmony import */ var _eachBefore_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./eachBefore.js */ "./node_modules/d3-hierarchy/src/hierarchy/eachBefore.js");
  /* harmony import */ var _eachAfter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./eachAfter.js */ "./node_modules/d3-hierarchy/src/hierarchy/eachAfter.js");
  /* harmony import */ var _find_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./find.js */ "./node_modules/d3-hierarchy/src/hierarchy/find.js");
  /* harmony import */ var _sum_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sum.js */ "./node_modules/d3-hierarchy/src/hierarchy/sum.js");
  /* harmony import */ var _sort_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sort.js */ "./node_modules/d3-hierarchy/src/hierarchy/sort.js");
  /* harmony import */ var _path_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./path.js */ "./node_modules/d3-hierarchy/src/hierarchy/path.js");
  /* harmony import */ var _ancestors_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ancestors.js */ "./node_modules/d3-hierarchy/src/hierarchy/ancestors.js");
  /* harmony import */ var _descendants_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./descendants.js */ "./node_modules/d3-hierarchy/src/hierarchy/descendants.js");
  /* harmony import */ var _leaves_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./leaves.js */ "./node_modules/d3-hierarchy/src/hierarchy/leaves.js");
  /* harmony import */ var _links_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./links.js */ "./node_modules/d3-hierarchy/src/hierarchy/links.js");
  /* harmony import */ var _iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./iterator.js */ "./node_modules/d3-hierarchy/src/hierarchy/iterator.js");
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  function hierarchy(data, children) {
    if (data instanceof Map) {
      data = [undefined, data];
      if (children === undefined) children = mapChildren;
    } else if (children === undefined) {
      children = objectChildren;
    }
  
    var root = new Node(data),
        node,
        nodes = [root],
        child,
        childs,
        i,
        n;
  
    while (node = nodes.pop()) {
      if ((childs = children(node.data)) && (n = (childs = Array.from(childs)).length)) {
        node.children = childs;
        for (i = n - 1; i >= 0; --i) {
          nodes.push(child = childs[i] = new Node(childs[i]));
          child.parent = node;
          child.depth = node.depth + 1;
        }
      }
    }
  
    return root.eachBefore(computeHeight);
  }
  
  function node_copy() {
    return hierarchy(this).eachBefore(copyData);
  }
  
  function objectChildren(d) {
    return d.children;
  }
  
  function mapChildren(d) {
    return Array.isArray(d) ? d[1] : null;
  }
  
  function copyData(node) {
    if (node.data.value !== undefined) node.value = node.data.value;
    node.data = node.data.data;
  }
  
  function computeHeight(node) {
    var height = 0;
    do node.height = height;
    while ((node = node.parent) && (node.height < ++height));
  }
  
  function Node(data) {
    this.data = data;
    this.depth =
    this.height = 0;
    this.parent = null;
  }
  
  Node.prototype = hierarchy.prototype = {
    constructor: Node,
    count: _count_js__WEBPACK_IMPORTED_MODULE_0__["default"],
    each: _each_js__WEBPACK_IMPORTED_MODULE_1__["default"],
    eachAfter: _eachAfter_js__WEBPACK_IMPORTED_MODULE_3__["default"],
    eachBefore: _eachBefore_js__WEBPACK_IMPORTED_MODULE_2__["default"],
    find: _find_js__WEBPACK_IMPORTED_MODULE_4__["default"],
    sum: _sum_js__WEBPACK_IMPORTED_MODULE_5__["default"],
    sort: _sort_js__WEBPACK_IMPORTED_MODULE_6__["default"],
    path: _path_js__WEBPACK_IMPORTED_MODULE_7__["default"],
    ancestors: _ancestors_js__WEBPACK_IMPORTED_MODULE_8__["default"],
    descendants: _descendants_js__WEBPACK_IMPORTED_MODULE_9__["default"],
    leaves: _leaves_js__WEBPACK_IMPORTED_MODULE_10__["default"],
    links: _links_js__WEBPACK_IMPORTED_MODULE_11__["default"],
    copy: node_copy,
    [Symbol.iterator]: _iterator_js__WEBPACK_IMPORTED_MODULE_12__["default"]
  };
  
  
  /***/ }),
  
  /***/ "./node_modules/d3-hierarchy/src/hierarchy/iterator.js":
  /*!*************************************************************!*\
    !*** ./node_modules/d3-hierarchy/src/hierarchy/iterator.js ***!
    \*************************************************************/
  /*! exports provided: default */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony default export */ __webpack_exports__["default"] = (function*() {
    var node = this, current, next = [node], children, i, n;
    do {
      current = next.reverse(), next = [];
      while (node = current.pop()) {
        yield node;
        if (children = node.children) {
          for (i = 0, n = children.length; i < n; ++i) {
            next.push(children[i]);
          }
        }
      }
    } while (next.length);
  });
  
  
  /***/ }),
  
  /***/ "./node_modules/d3-hierarchy/src/hierarchy/leaves.js":
  /*!***********************************************************!*\
    !*** ./node_modules/d3-hierarchy/src/hierarchy/leaves.js ***!
    \***********************************************************/
  /*! exports provided: default */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony default export */ __webpack_exports__["default"] = (function() {
    var leaves = [];
    this.eachBefore(function(node) {
      if (!node.children) {
        leaves.push(node);
      }
    });
    return leaves;
  });
  
  
  /***/ }),
  
  /***/ "./node_modules/d3-hierarchy/src/hierarchy/links.js":
  /*!**********************************************************!*\
    !*** ./node_modules/d3-hierarchy/src/hierarchy/links.js ***!
    \**********************************************************/
  /*! exports provided: default */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony default export */ __webpack_exports__["default"] = (function() {
    var root = this, links = [];
    root.each(function(node) {
      if (node !== root) { // Don’t include the root’s parent, if any.
        links.push({source: node.parent, target: node});
      }
    });
    return links;
  });
  
  
  /***/ }),
  
  /***/ "./node_modules/d3-hierarchy/src/hierarchy/path.js":
  /*!*********************************************************!*\
    !*** ./node_modules/d3-hierarchy/src/hierarchy/path.js ***!
    \*********************************************************/
  /*! exports provided: default */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony default export */ __webpack_exports__["default"] = (function(end) {
    var start = this,
        ancestor = leastCommonAncestor(start, end),
        nodes = [start];
    while (start !== ancestor) {
      start = start.parent;
      nodes.push(start);
    }
    var k = nodes.length;
    while (end !== ancestor) {
      nodes.splice(k, 0, end);
      end = end.parent;
    }
    return nodes;
  });
  
  function leastCommonAncestor(a, b) {
    if (a === b) return a;
    var aNodes = a.ancestors(),
        bNodes = b.ancestors(),
        c = null;
    a = aNodes.pop();
    b = bNodes.pop();
    while (a === b) {
      c = a;
      a = aNodes.pop();
      b = bNodes.pop();
    }
    return c;
  }
  
  
  /***/ }),
  
  /***/ "./node_modules/d3-hierarchy/src/hierarchy/sort.js":
  /*!*********************************************************!*\
    !*** ./node_modules/d3-hierarchy/src/hierarchy/sort.js ***!
    \*********************************************************/
  /*! exports provided: default */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony default export */ __webpack_exports__["default"] = (function(compare) {
    return this.eachBefore(function(node) {
      if (node.children) {
        node.children.sort(compare);
      }
    });
  });
  
  
  /***/ }),
  
  /***/ "./node_modules/d3-hierarchy/src/hierarchy/sum.js":
  /*!********************************************************!*\
    !*** ./node_modules/d3-hierarchy/src/hierarchy/sum.js ***!
    \********************************************************/
  /*! exports provided: default */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony default export */ __webpack_exports__["default"] = (function(value) {
    return this.eachAfter(function(node) {
      var sum = +value(node.data) || 0,
          children = node.children,
          i = children && children.length;
      while (--i >= 0) sum += children[i].value;
      node.value = sum;
    });
  });
  
  
  /***/ }),
  
  /***/ "./node_modules/d3-hierarchy/src/index.js":
  /*!************************************************!*\
    !*** ./node_modules/d3-hierarchy/src/index.js ***!
    \************************************************/
  /*! exports provided: cluster, hierarchy, Node, pack, packSiblings, packEnclose, partition, stratify, tree, treemap, treemapBinary, treemapDice, treemapSlice, treemapSliceDice, treemapSquarify, treemapResquarify */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony import */ var _cluster_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cluster.js */ "./node_modules/d3-hierarchy/src/cluster.js");
  /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cluster", function() { return _cluster_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });
  
  /* harmony import */ var _hierarchy_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hierarchy/index.js */ "./node_modules/d3-hierarchy/src/hierarchy/index.js");
  /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hierarchy", function() { return _hierarchy_index_js__WEBPACK_IMPORTED_MODULE_1__["default"]; });
  
  /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Node", function() { return _hierarchy_index_js__WEBPACK_IMPORTED_MODULE_1__["Node"]; });
  
  /* harmony import */ var _pack_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pack/index.js */ "./node_modules/d3-hierarchy/src/pack/index.js");
  /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pack", function() { return _pack_index_js__WEBPACK_IMPORTED_MODULE_2__["default"]; });
  
  /* harmony import */ var _pack_siblings_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pack/siblings.js */ "./node_modules/d3-hierarchy/src/pack/siblings.js");
  /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "packSiblings", function() { return _pack_siblings_js__WEBPACK_IMPORTED_MODULE_3__["default"]; });
  
  /* harmony import */ var _pack_enclose_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pack/enclose.js */ "./node_modules/d3-hierarchy/src/pack/enclose.js");
  /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "packEnclose", function() { return _pack_enclose_js__WEBPACK_IMPORTED_MODULE_4__["default"]; });
  
  /* harmony import */ var _partition_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./partition.js */ "./node_modules/d3-hierarchy/src/partition.js");
  /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "partition", function() { return _partition_js__WEBPACK_IMPORTED_MODULE_5__["default"]; });
  
  /* harmony import */ var _stratify_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./stratify.js */ "./node_modules/d3-hierarchy/src/stratify.js");
  /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stratify", function() { return _stratify_js__WEBPACK_IMPORTED_MODULE_6__["default"]; });
  
  /* harmony import */ var _tree_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tree.js */ "./node_modules/d3-hierarchy/src/tree.js");
  /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tree", function() { return _tree_js__WEBPACK_IMPORTED_MODULE_7__["default"]; });
  
  /* harmony import */ var _treemap_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./treemap/index.js */ "./node_modules/d3-hierarchy/src/treemap/index.js");
  /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "treemap", function() { return _treemap_index_js__WEBPACK_IMPORTED_MODULE_8__["default"]; });
  
  /* harmony import */ var _treemap_binary_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./treemap/binary.js */ "./node_modules/d3-hierarchy/src/treemap/binary.js");
  /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "treemapBinary", function() { return _treemap_binary_js__WEBPACK_IMPORTED_MODULE_9__["default"]; });
  
  /* harmony import */ var _treemap_dice_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./treemap/dice.js */ "./node_modules/d3-hierarchy/src/treemap/dice.js");
  /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "treemapDice", function() { return _treemap_dice_js__WEBPACK_IMPORTED_MODULE_10__["default"]; });
  
  /* harmony import */ var _treemap_slice_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./treemap/slice.js */ "./node_modules/d3-hierarchy/src/treemap/slice.js");
  /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "treemapSlice", function() { return _treemap_slice_js__WEBPACK_IMPORTED_MODULE_11__["default"]; });
  
  /* harmony import */ var _treemap_sliceDice_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./treemap/sliceDice.js */ "./node_modules/d3-hierarchy/src/treemap/sliceDice.js");
  /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "treemapSliceDice", function() { return _treemap_sliceDice_js__WEBPACK_IMPORTED_MODULE_12__["default"]; });
  
  /* harmony import */ var _treemap_squarify_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./treemap/squarify.js */ "./node_modules/d3-hierarchy/src/treemap/squarify.js");
  /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "treemapSquarify", function() { return _treemap_squarify_js__WEBPACK_IMPORTED_MODULE_13__["default"]; });
  
  /* harmony import */ var _treemap_resquarify_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./treemap/resquarify.js */ "./node_modules/d3-hierarchy/src/treemap/resquarify.js");
  /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "treemapResquarify", function() { return _treemap_resquarify_js__WEBPACK_IMPORTED_MODULE_14__["default"]; });
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  /***/ }),
  
  /***/ "./node_modules/d3-hierarchy/src/pack/enclose.js":
  /*!*******************************************************!*\
    !*** ./node_modules/d3-hierarchy/src/pack/enclose.js ***!
    \*******************************************************/
  /*! exports provided: default */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony import */ var _array_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../array.js */ "./node_modules/d3-hierarchy/src/array.js");
  
  
  /* harmony default export */ __webpack_exports__["default"] = (function(circles) {
    var i = 0, n = (circles = Object(_array_js__WEBPACK_IMPORTED_MODULE_0__["shuffle"])(Array.from(circles))).length, B = [], p, e;
  
    while (i < n) {
      p = circles[i];
      if (e && enclosesWeak(e, p)) ++i;
      else e = encloseBasis(B = extendBasis(B, p)), i = 0;
    }
  
    return e;
  });
  
  function extendBasis(B, p) {
    var i, j;
  
    if (enclosesWeakAll(p, B)) return [p];
  
    // If we get here then B must have at least one element.
    for (i = 0; i < B.length; ++i) {
      if (enclosesNot(p, B[i])
          && enclosesWeakAll(encloseBasis2(B[i], p), B)) {
        return [B[i], p];
      }
    }
  
    // If we get here then B must have at least two elements.
    for (i = 0; i < B.length - 1; ++i) {
      for (j = i + 1; j < B.length; ++j) {
        if (enclosesNot(encloseBasis2(B[i], B[j]), p)
            && enclosesNot(encloseBasis2(B[i], p), B[j])
            && enclosesNot(encloseBasis2(B[j], p), B[i])
            && enclosesWeakAll(encloseBasis3(B[i], B[j], p), B)) {
          return [B[i], B[j], p];
        }
      }
    }
  
    // If we get here then something is very wrong.
    throw new Error;
  }
  
  function enclosesNot(a, b) {
    var dr = a.r - b.r, dx = b.x - a.x, dy = b.y - a.y;
    return dr < 0 || dr * dr < dx * dx + dy * dy;
  }
  
  function enclosesWeak(a, b) {
    var dr = a.r - b.r + Math.max(a.r, b.r, 1) * 1e-9, dx = b.x - a.x, dy = b.y - a.y;
    return dr > 0 && dr * dr > dx * dx + dy * dy;
  }
  
  function enclosesWeakAll(a, B) {
    for (var i = 0; i < B.length; ++i) {
      if (!enclosesWeak(a, B[i])) {
        return false;
      }
    }
    return true;
  }
  
  function encloseBasis(B) {
    switch (B.length) {
      case 1: return encloseBasis1(B[0]);
      case 2: return encloseBasis2(B[0], B[1]);
      case 3: return encloseBasis3(B[0], B[1], B[2]);
    }
  }
  
  function encloseBasis1(a) {
    return {
      x: a.x,
      y: a.y,
      r: a.r
    };
  }
  
  function encloseBasis2(a, b) {
    var x1 = a.x, y1 = a.y, r1 = a.r,
        x2 = b.x, y2 = b.y, r2 = b.r,
        x21 = x2 - x1, y21 = y2 - y1, r21 = r2 - r1,
        l = Math.sqrt(x21 * x21 + y21 * y21);
    return {
      x: (x1 + x2 + x21 / l * r21) / 2,
      y: (y1 + y2 + y21 / l * r21) / 2,
      r: (l + r1 + r2) / 2
    };
  }
  
  function encloseBasis3(a, b, c) {
    var x1 = a.x, y1 = a.y, r1 = a.r,
        x2 = b.x, y2 = b.y, r2 = b.r,
        x3 = c.x, y3 = c.y, r3 = c.r,
        a2 = x1 - x2,
        a3 = x1 - x3,
        b2 = y1 - y2,
        b3 = y1 - y3,
        c2 = r2 - r1,
        c3 = r3 - r1,
        d1 = x1 * x1 + y1 * y1 - r1 * r1,
        d2 = d1 - x2 * x2 - y2 * y2 + r2 * r2,
        d3 = d1 - x3 * x3 - y3 * y3 + r3 * r3,
        ab = a3 * b2 - a2 * b3,
        xa = (b2 * d3 - b3 * d2) / (ab * 2) - x1,
        xb = (b3 * c2 - b2 * c3) / ab,
        ya = (a3 * d2 - a2 * d3) / (ab * 2) - y1,
        yb = (a2 * c3 - a3 * c2) / ab,
        A = xb * xb + yb * yb - 1,
        B = 2 * (r1 + xa * xb + ya * yb),
        C = xa * xa + ya * ya - r1 * r1,
        r = -(A ? (B + Math.sqrt(B * B - 4 * A * C)) / (2 * A) : C / B);
    return {
      x: x1 + xa + xb * r,
      y: y1 + ya + yb * r,
      r: r
    };
  }
  
  
  /***/ }),
  
  /***/ "./node_modules/d3-hierarchy/src/pack/index.js":
  /*!*****************************************************!*\
    !*** ./node_modules/d3-hierarchy/src/pack/index.js ***!
    \*****************************************************/
  /*! exports provided: default */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony import */ var _siblings_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./siblings.js */ "./node_modules/d3-hierarchy/src/pack/siblings.js");
  /* harmony import */ var _accessors_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../accessors.js */ "./node_modules/d3-hierarchy/src/accessors.js");
  /* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constant.js */ "./node_modules/d3-hierarchy/src/constant.js");
  
  
  
  
  function defaultRadius(d) {
    return Math.sqrt(d.value);
  }
  
  /* harmony default export */ __webpack_exports__["default"] = (function() {
    var radius = null,
        dx = 1,
        dy = 1,
        padding = _constant_js__WEBPACK_IMPORTED_MODULE_2__["constantZero"];
  
    function pack(root) {
      root.x = dx / 2, root.y = dy / 2;
      if (radius) {
        root.eachBefore(radiusLeaf(radius))
            .eachAfter(packChildren(padding, 0.5))
            .eachBefore(translateChild(1));
      } else {
        root.eachBefore(radiusLeaf(defaultRadius))
            .eachAfter(packChildren(_constant_js__WEBPACK_IMPORTED_MODULE_2__["constantZero"], 1))
            .eachAfter(packChildren(padding, root.r / Math.min(dx, dy)))
            .eachBefore(translateChild(Math.min(dx, dy) / (2 * root.r)));
      }
      return root;
    }
  
    pack.radius = function(x) {
      return arguments.length ? (radius = Object(_accessors_js__WEBPACK_IMPORTED_MODULE_1__["optional"])(x), pack) : radius;
    };
  
    pack.size = function(x) {
      return arguments.length ? (dx = +x[0], dy = +x[1], pack) : [dx, dy];
    };
  
    pack.padding = function(x) {
      return arguments.length ? (padding = typeof x === "function" ? x : Object(_constant_js__WEBPACK_IMPORTED_MODULE_2__["default"])(+x), pack) : padding;
    };
  
    return pack;
  });
  
  function radiusLeaf(radius) {
    return function(node) {
      if (!node.children) {
        node.r = Math.max(0, +radius(node) || 0);
      }
    };
  }
  
  function packChildren(padding, k) {
    return function(node) {
      if (children = node.children) {
        var children,
            i,
            n = children.length,
            r = padding(node) * k || 0,
            e;
  
        if (r) for (i = 0; i < n; ++i) children[i].r += r;
        e = Object(_siblings_js__WEBPACK_IMPORTED_MODULE_0__["packEnclose"])(children);
        if (r) for (i = 0; i < n; ++i) children[i].r -= r;
        node.r = e + r;
      }
    };
  }
  
  function translateChild(k) {
    return function(node) {
      var parent = node.parent;
      node.r *= k;
      if (parent) {
        node.x = parent.x + k * node.x;
        node.y = parent.y + k * node.y;
      }
    };
  }
  
  
  /***/ }),
  
  /***/ "./node_modules/d3-hierarchy/src/pack/siblings.js":
  /*!********************************************************!*\
    !*** ./node_modules/d3-hierarchy/src/pack/siblings.js ***!
    \********************************************************/
  /*! exports provided: packEnclose, default */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "packEnclose", function() { return packEnclose; });
  /* harmony import */ var _array_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../array.js */ "./node_modules/d3-hierarchy/src/array.js");
  /* harmony import */ var _enclose_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enclose.js */ "./node_modules/d3-hierarchy/src/pack/enclose.js");
  
  
  
  function place(b, a, c) {
    var dx = b.x - a.x, x, a2,
        dy = b.y - a.y, y, b2,
        d2 = dx * dx + dy * dy;
    if (d2) {
      a2 = a.r + c.r, a2 *= a2;
      b2 = b.r + c.r, b2 *= b2;
      if (a2 > b2) {
        x = (d2 + b2 - a2) / (2 * d2);
        y = Math.sqrt(Math.max(0, b2 / d2 - x * x));
        c.x = b.x - x * dx - y * dy;
        c.y = b.y - x * dy + y * dx;
      } else {
        x = (d2 + a2 - b2) / (2 * d2);
        y = Math.sqrt(Math.max(0, a2 / d2 - x * x));
        c.x = a.x + x * dx - y * dy;
        c.y = a.y + x * dy + y * dx;
      }
    } else {
      c.x = a.x + c.r;
      c.y = a.y;
    }
  }
  
  function intersects(a, b) {
    var dr = a.r + b.r - 1e-6, dx = b.x - a.x, dy = b.y - a.y;
    return dr > 0 && dr * dr > dx * dx + dy * dy;
  }
  
  function score(node) {
    var a = node._,
        b = node.next._,
        ab = a.r + b.r,
        dx = (a.x * b.r + b.x * a.r) / ab,
        dy = (a.y * b.r + b.y * a.r) / ab;
    return dx * dx + dy * dy;
  }
  
  function Node(circle) {
    this._ = circle;
    this.next = null;
    this.previous = null;
  }
  
  function packEnclose(circles) {
    if (!(n = (circles = Object(_array_js__WEBPACK_IMPORTED_MODULE_0__["default"])(circles)).length)) return 0;
  
    var a, b, c, n, aa, ca, i, j, k, sj, sk;
  
    // Place the first circle.
    a = circles[0], a.x = 0, a.y = 0;
    if (!(n > 1)) return a.r;
  
    // Place the second circle.
    b = circles[1], a.x = -b.r, b.x = a.r, b.y = 0;
    if (!(n > 2)) return a.r + b.r;
  
    // Place the third circle.
    place(b, a, c = circles[2]);
  
    // Initialize the front-chain using the first three circles a, b and c.
    a = new Node(a), b = new Node(b), c = new Node(c);
    a.next = c.previous = b;
    b.next = a.previous = c;
    c.next = b.previous = a;
  
    // Attempt to place each remaining circle…
    pack: for (i = 3; i < n; ++i) {
      place(a._, b._, c = circles[i]), c = new Node(c);
  
      // Find the closest intersecting circle on the front-chain, if any.
      // “Closeness” is determined by linear distance along the front-chain.
      // “Ahead” or “behind” is likewise determined by linear distance.
      j = b.next, k = a.previous, sj = b._.r, sk = a._.r;
      do {
        if (sj <= sk) {
          if (intersects(j._, c._)) {
            b = j, a.next = b, b.previous = a, --i;
            continue pack;
          }
          sj += j._.r, j = j.next;
        } else {
          if (intersects(k._, c._)) {
            a = k, a.next = b, b.previous = a, --i;
            continue pack;
          }
          sk += k._.r, k = k.previous;
        }
      } while (j !== k.next);
  
      // Success! Insert the new circle c between a and b.
      c.previous = a, c.next = b, a.next = b.previous = b = c;
  
      // Compute the new closest circle pair to the centroid.
      aa = score(a);
      while ((c = c.next) !== b) {
        if ((ca = score(c)) < aa) {
          a = c, aa = ca;
        }
      }
      b = a.next;
    }
  
    // Compute the enclosing circle of the front chain.
    a = [b._], c = b; while ((c = c.next) !== b) a.push(c._); c = Object(_enclose_js__WEBPACK_IMPORTED_MODULE_1__["default"])(a);
  
    // Translate the circles to put the enclosing circle around the origin.
    for (i = 0; i < n; ++i) a = circles[i], a.x -= c.x, a.y -= c.y;
  
    return c.r;
  }
  
  /* harmony default export */ __webpack_exports__["default"] = (function(circles) {
    packEnclose(circles);
    return circles;
  });
  
  
  /***/ }),
  
  /***/ "./node_modules/d3-hierarchy/src/partition.js":
  /*!****************************************************!*\
    !*** ./node_modules/d3-hierarchy/src/partition.js ***!
    \****************************************************/
  /*! exports provided: default */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony import */ var _treemap_round_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./treemap/round.js */ "./node_modules/d3-hierarchy/src/treemap/round.js");
  /* harmony import */ var _treemap_dice_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./treemap/dice.js */ "./node_modules/d3-hierarchy/src/treemap/dice.js");
  
  
  
  /* harmony default export */ __webpack_exports__["default"] = (function() {
    var dx = 1,
        dy = 1,
        padding = 0,
        round = false;
  
    function partition(root) {
      var n = root.height + 1;
      root.x0 =
      root.y0 = padding;
      root.x1 = dx;
      root.y1 = dy / n;
      root.eachBefore(positionNode(dy, n));
      if (round) root.eachBefore(_treemap_round_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
      return root;
    }
  
    function positionNode(dy, n) {
      return function(node) {
        if (node.children) {
          Object(_treemap_dice_js__WEBPACK_IMPORTED_MODULE_1__["default"])(node, node.x0, dy * (node.depth + 1) / n, node.x1, dy * (node.depth + 2) / n);
        }
        var x0 = node.x0,
            y0 = node.y0,
            x1 = node.x1 - padding,
            y1 = node.y1 - padding;
        if (x1 < x0) x0 = x1 = (x0 + x1) / 2;
        if (y1 < y0) y0 = y1 = (y0 + y1) / 2;
        node.x0 = x0;
        node.y0 = y0;
        node.x1 = x1;
        node.y1 = y1;
      };
    }
  
    partition.round = function(x) {
      return arguments.length ? (round = !!x, partition) : round;
    };
  
    partition.size = function(x) {
      return arguments.length ? (dx = +x[0], dy = +x[1], partition) : [dx, dy];
    };
  
    partition.padding = function(x) {
      return arguments.length ? (padding = +x, partition) : padding;
    };
  
    return partition;
  });
  
  
  /***/ }),
  
  /***/ "./node_modules/d3-hierarchy/src/stratify.js":
  /*!***************************************************!*\
    !*** ./node_modules/d3-hierarchy/src/stratify.js ***!
    \***************************************************/
  /*! exports provided: default */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony import */ var _accessors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accessors.js */ "./node_modules/d3-hierarchy/src/accessors.js");
  /* harmony import */ var _hierarchy_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hierarchy/index.js */ "./node_modules/d3-hierarchy/src/hierarchy/index.js");
  
  
  
  var preroot = {depth: -1},
      ambiguous = {};
  
  function defaultId(d) {
    return d.id;
  }
  
  function defaultParentId(d) {
    return d.parentId;
  }
  
  /* harmony default export */ __webpack_exports__["default"] = (function() {
    var id = defaultId,
        parentId = defaultParentId;
  
    function stratify(data) {
      var nodes = Array.from(data),
          n = nodes.length,
          d,
          i,
          root,
          parent,
          node,
          nodeId,
          nodeKey,
          nodeByKey = new Map;
  
      for (i = 0; i < n; ++i) {
        d = nodes[i], node = nodes[i] = new _hierarchy_index_js__WEBPACK_IMPORTED_MODULE_1__["Node"](d);
        if ((nodeId = id(d, i, data)) != null && (nodeId += "")) {
          nodeKey = node.id = nodeId;
          nodeByKey.set(nodeKey, nodeByKey.has(nodeKey) ? ambiguous : node);
        }
        if ((nodeId = parentId(d, i, data)) != null && (nodeId += "")) {
          node.parent = nodeId;
        }
      }
  
      for (i = 0; i < n; ++i) {
        node = nodes[i];
        if (nodeId = node.parent) {
          parent = nodeByKey.get(nodeId);
          if (!parent) throw new Error("missing: " + nodeId);
          if (parent === ambiguous) throw new Error("ambiguous: " + nodeId);
          if (parent.children) parent.children.push(node);
          else parent.children = [node];
          node.parent = parent;
        } else {
          if (root) throw new Error("multiple roots");
          root = node;
        }
      }
  
      if (!root) throw new Error("no root");
      root.parent = preroot;
      root.eachBefore(function(node) { node.depth = node.parent.depth + 1; --n; }).eachBefore(_hierarchy_index_js__WEBPACK_IMPORTED_MODULE_1__["computeHeight"]);
      root.parent = null;
      if (n > 0) throw new Error("cycle");
  
      return root;
    }
  
    stratify.id = function(x) {
      return arguments.length ? (id = Object(_accessors_js__WEBPACK_IMPORTED_MODULE_0__["required"])(x), stratify) : id;
    };
  
    stratify.parentId = function(x) {
      return arguments.length ? (parentId = Object(_accessors_js__WEBPACK_IMPORTED_MODULE_0__["required"])(x), stratify) : parentId;
    };
  
    return stratify;
  });
  
  
  /***/ }),
  
  /***/ "./node_modules/d3-hierarchy/src/tree.js":
  /*!***********************************************!*\
    !*** ./node_modules/d3-hierarchy/src/tree.js ***!
    \***********************************************/
  /*! exports provided: default */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony import */ var _hierarchy_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hierarchy/index.js */ "./node_modules/d3-hierarchy/src/hierarchy/index.js");
  
  
  function defaultSeparation(a, b) {
    return a.parent === b.parent ? 1 : 2;
  }
  
  // function radialSeparation(a, b) {
  //   return (a.parent === b.parent ? 1 : 2) / a.depth;
  // }
  
  // This function is used to traverse the left contour of a subtree (or
  // subforest). It returns the successor of v on this contour. This successor is
  // either given by the leftmost child of v or by the thread of v. The function
  // returns null if and only if v is on the highest level of its subtree.
  function nextLeft(v) {
    var children = v.children;
    return children ? children[0] : v.t;
  }
  
  // This function works analogously to nextLeft.
  function nextRight(v) {
    var children = v.children;
    return children ? children[children.length - 1] : v.t;
  }
  
  // Shifts the current subtree rooted at w+. This is done by increasing
  // prelim(w+) and mod(w+) by shift.
  function moveSubtree(wm, wp, shift) {
    var change = shift / (wp.i - wm.i);
    wp.c -= change;
    wp.s += shift;
    wm.c += change;
    wp.z += shift;
    wp.m += shift;
  }
  
  // All other shifts, applied to the smaller subtrees between w- and w+, are
  // performed by this function. To prepare the shifts, we have to adjust
  // change(w+), shift(w+), and change(w-).
  function executeShifts(v) {
    var shift = 0,
        change = 0,
        children = v.children,
        i = children.length,
        w;
    while (--i >= 0) {
      w = children[i];
      w.z += shift;
      w.m += shift;
      shift += w.s + (change += w.c);
    }
  }
  
  // If vi-’s ancestor is a sibling of v, returns vi-’s ancestor. Otherwise,
  // returns the specified (default) ancestor.
  function nextAncestor(vim, v, ancestor) {
    return vim.a.parent === v.parent ? vim.a : ancestor;
  }
  
  function TreeNode(node, i) {
    this._ = node;
    this.parent = null;
    this.children = null;
    this.A = null; // default ancestor
    this.a = this; // ancestor
    this.z = 0; // prelim
    this.m = 0; // mod
    this.c = 0; // change
    this.s = 0; // shift
    this.t = null; // thread
    this.i = i; // number
  }
  
  TreeNode.prototype = Object.create(_hierarchy_index_js__WEBPACK_IMPORTED_MODULE_0__["Node"].prototype);
  
  function treeRoot(root) {
    var tree = new TreeNode(root, 0),
        node,
        nodes = [tree],
        child,
        children,
        i,
        n;
  
    while (node = nodes.pop()) {
      if (children = node._.children) {
        node.children = new Array(n = children.length);
        for (i = n - 1; i >= 0; --i) {
          nodes.push(child = node.children[i] = new TreeNode(children[i], i));
          child.parent = node;
        }
      }
    }
  
    (tree.parent = new TreeNode(null, 0)).children = [tree];
    return tree;
  }
  
  // Node-link tree diagram using the Reingold-Tilford "tidy" algorithm
  /* harmony default export */ __webpack_exports__["default"] = (function() {
    var separation = defaultSeparation,
        dx = 1,
        dy = 1,
        nodeSize = null;
  
    function tree(root) {
      var t = treeRoot(root);
  
      // Compute the layout using Buchheim et al.’s algorithm.
      t.eachAfter(firstWalk), t.parent.m = -t.z;
      t.eachBefore(secondWalk);
  
      // If a fixed node size is specified, scale x and y.
      if (nodeSize) root.eachBefore(sizeNode);
  
      // If a fixed tree size is specified, scale x and y based on the extent.
      // Compute the left-most, right-most, and depth-most nodes for extents.
      else {
        var left = root,
            right = root,
            bottom = root;
        root.eachBefore(function(node) {
          if (node.x < left.x) left = node;
          if (node.x > right.x) right = node;
          if (node.depth > bottom.depth) bottom = node;
        });
        var s = left === right ? 1 : separation(left, right) / 2,
            tx = s - left.x,
            kx = dx / (right.x + s + tx),
            ky = dy / (bottom.depth || 1);
        root.eachBefore(function(node) {
          node.x = (node.x + tx) * kx;
          node.y = node.depth * ky;
        });
      }
  
      return root;
    }
  
    // Computes a preliminary x-coordinate for v. Before that, FIRST WALK is
    // applied recursively to the children of v, as well as the function
    // APPORTION. After spacing out the children by calling EXECUTE SHIFTS, the
    // node v is placed to the midpoint of its outermost children.
    function firstWalk(v) {
      var children = v.children,
          siblings = v.parent.children,
          w = v.i ? siblings[v.i - 1] : null;
      if (children) {
        executeShifts(v);
        var midpoint = (children[0].z + children[children.length - 1].z) / 2;
        if (w) {
          v.z = w.z + separation(v._, w._);
          v.m = v.z - midpoint;
        } else {
          v.z = midpoint;
        }
      } else if (w) {
        v.z = w.z + separation(v._, w._);
      }
      v.parent.A = apportion(v, w, v.parent.A || siblings[0]);
    }
  
    // Computes all real x-coordinates by summing up the modifiers recursively.
    function secondWalk(v) {
      v._.x = v.z + v.parent.m;
      v.m += v.parent.m;
    }
  
    // The core of the algorithm. Here, a new subtree is combined with the
    // previous subtrees. Threads are used to traverse the inside and outside
    // contours of the left and right subtree up to the highest common level. The
    // vertices used for the traversals are vi+, vi-, vo-, and vo+, where the
    // superscript o means outside and i means inside, the subscript - means left
    // subtree and + means right subtree. For summing up the modifiers along the
    // contour, we use respective variables si+, si-, so-, and so+. Whenever two
    // nodes of the inside contours conflict, we compute the left one of the
    // greatest uncommon ancestors using the function ANCESTOR and call MOVE
    // SUBTREE to shift the subtree and prepare the shifts of smaller subtrees.
    // Finally, we add a new thread (if necessary).
    function apportion(v, w, ancestor) {
      if (w) {
        var vip = v,
            vop = v,
            vim = w,
            vom = vip.parent.children[0],
            sip = vip.m,
            sop = vop.m,
            sim = vim.m,
            som = vom.m,
            shift;
        while (vim = nextRight(vim), vip = nextLeft(vip), vim && vip) {
          vom = nextLeft(vom);
          vop = nextRight(vop);
          vop.a = v;
          shift = vim.z + sim - vip.z - sip + separation(vim._, vip._);
          if (shift > 0) {
            moveSubtree(nextAncestor(vim, v, ancestor), v, shift);
            sip += shift;
            sop += shift;
          }
          sim += vim.m;
          sip += vip.m;
          som += vom.m;
          sop += vop.m;
        }
        if (vim && !nextRight(vop)) {
          vop.t = vim;
          vop.m += sim - sop;
        }
        if (vip && !nextLeft(vom)) {
          vom.t = vip;
          vom.m += sip - som;
          ancestor = v;
        }
      }
      return ancestor;
    }
  
    function sizeNode(node) {
      node.x *= dx;
      node.y = node.depth * dy;
    }
  
    tree.separation = function(x) {
      return arguments.length ? (separation = x, tree) : separation;
    };
  
    tree.size = function(x) {
      return arguments.length ? (nodeSize = false, dx = +x[0], dy = +x[1], tree) : (nodeSize ? null : [dx, dy]);
    };
  
    tree.nodeSize = function(x) {
      return arguments.length ? (nodeSize = true, dx = +x[0], dy = +x[1], tree) : (nodeSize ? [dx, dy] : null);
    };
  
    return tree;
  });
  
  
  /***/ }),
  
  /***/ "./node_modules/d3-hierarchy/src/treemap/binary.js":
  /*!*********************************************************!*\
    !*** ./node_modules/d3-hierarchy/src/treemap/binary.js ***!
    \*********************************************************/
  /*! exports provided: default */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony default export */ __webpack_exports__["default"] = (function(parent, x0, y0, x1, y1) {
    var nodes = parent.children,
        i, n = nodes.length,
        sum, sums = new Array(n + 1);
  
    for (sums[0] = sum = i = 0; i < n; ++i) {
      sums[i + 1] = sum += nodes[i].value;
    }
  
    partition(0, n, parent.value, x0, y0, x1, y1);
  
    function partition(i, j, value, x0, y0, x1, y1) {
      if (i >= j - 1) {
        var node = nodes[i];
        node.x0 = x0, node.y0 = y0;
        node.x1 = x1, node.y1 = y1;
        return;
      }
  
      var valueOffset = sums[i],
          valueTarget = (value / 2) + valueOffset,
          k = i + 1,
          hi = j - 1;
  
      while (k < hi) {
        var mid = k + hi >>> 1;
        if (sums[mid] < valueTarget) k = mid + 1;
        else hi = mid;
      }
  
      if ((valueTarget - sums[k - 1]) < (sums[k] - valueTarget) && i + 1 < k) --k;
  
      var valueLeft = sums[k] - valueOffset,
          valueRight = value - valueLeft;
  
      if ((x1 - x0) > (y1 - y0)) {
        var xk = value ? (x0 * valueRight + x1 * valueLeft) / value : x1;
        partition(i, k, valueLeft, x0, y0, xk, y1);
        partition(k, j, valueRight, xk, y0, x1, y1);
      } else {
        var yk = value ? (y0 * valueRight + y1 * valueLeft) / value : y1;
        partition(i, k, valueLeft, x0, y0, x1, yk);
        partition(k, j, valueRight, x0, yk, x1, y1);
      }
    }
  });
  
  
  /***/ }),
  
  /***/ "./node_modules/d3-hierarchy/src/treemap/dice.js":
  /*!*******************************************************!*\
    !*** ./node_modules/d3-hierarchy/src/treemap/dice.js ***!
    \*******************************************************/
  /*! exports provided: default */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony default export */ __webpack_exports__["default"] = (function(parent, x0, y0, x1, y1) {
    var nodes = parent.children,
        node,
        i = -1,
        n = nodes.length,
        k = parent.value && (x1 - x0) / parent.value;
  
    while (++i < n) {
      node = nodes[i], node.y0 = y0, node.y1 = y1;
      node.x0 = x0, node.x1 = x0 += node.value * k;
    }
  });
  
  
  /***/ }),
  
  /***/ "./node_modules/d3-hierarchy/src/treemap/index.js":
  /*!********************************************************!*\
    !*** ./node_modules/d3-hierarchy/src/treemap/index.js ***!
    \********************************************************/
  /*! exports provided: default */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony import */ var _round_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./round.js */ "./node_modules/d3-hierarchy/src/treemap/round.js");
  /* harmony import */ var _squarify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./squarify.js */ "./node_modules/d3-hierarchy/src/treemap/squarify.js");
  /* harmony import */ var _accessors_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../accessors.js */ "./node_modules/d3-hierarchy/src/accessors.js");
  /* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constant.js */ "./node_modules/d3-hierarchy/src/constant.js");
  
  
  
  
  
  /* harmony default export */ __webpack_exports__["default"] = (function() {
    var tile = _squarify_js__WEBPACK_IMPORTED_MODULE_1__["default"],
        round = false,
        dx = 1,
        dy = 1,
        paddingStack = [0],
        paddingInner = _constant_js__WEBPACK_IMPORTED_MODULE_3__["constantZero"],
        paddingTop = _constant_js__WEBPACK_IMPORTED_MODULE_3__["constantZero"],
        paddingRight = _constant_js__WEBPACK_IMPORTED_MODULE_3__["constantZero"],
        paddingBottom = _constant_js__WEBPACK_IMPORTED_MODULE_3__["constantZero"],
        paddingLeft = _constant_js__WEBPACK_IMPORTED_MODULE_3__["constantZero"];
  
    function treemap(root) {
      root.x0 =
      root.y0 = 0;
      root.x1 = dx;
      root.y1 = dy;
      root.eachBefore(positionNode);
      paddingStack = [0];
      if (round) root.eachBefore(_round_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
      return root;
    }
  
    function positionNode(node) {
      var p = paddingStack[node.depth],
          x0 = node.x0 + p,
          y0 = node.y0 + p,
          x1 = node.x1 - p,
          y1 = node.y1 - p;
      if (x1 < x0) x0 = x1 = (x0 + x1) / 2;
      if (y1 < y0) y0 = y1 = (y0 + y1) / 2;
      node.x0 = x0;
      node.y0 = y0;
      node.x1 = x1;
      node.y1 = y1;
      if (node.children) {
        p = paddingStack[node.depth + 1] = paddingInner(node) / 2;
        x0 += paddingLeft(node) - p;
        y0 += paddingTop(node) - p;
        x1 -= paddingRight(node) - p;
        y1 -= paddingBottom(node) - p;
        if (x1 < x0) x0 = x1 = (x0 + x1) / 2;
        if (y1 < y0) y0 = y1 = (y0 + y1) / 2;
        tile(node, x0, y0, x1, y1);
      }
    }
  
    treemap.round = function(x) {
      return arguments.length ? (round = !!x, treemap) : round;
    };
  
    treemap.size = function(x) {
      return arguments.length ? (dx = +x[0], dy = +x[1], treemap) : [dx, dy];
    };
  
    treemap.tile = function(x) {
      return arguments.length ? (tile = Object(_accessors_js__WEBPACK_IMPORTED_MODULE_2__["required"])(x), treemap) : tile;
    };
  
    treemap.padding = function(x) {
      return arguments.length ? treemap.paddingInner(x).paddingOuter(x) : treemap.paddingInner();
    };
  
    treemap.paddingInner = function(x) {
      return arguments.length ? (paddingInner = typeof x === "function" ? x : Object(_constant_js__WEBPACK_IMPORTED_MODULE_3__["default"])(+x), treemap) : paddingInner;
    };
  
    treemap.paddingOuter = function(x) {
      return arguments.length ? treemap.paddingTop(x).paddingRight(x).paddingBottom(x).paddingLeft(x) : treemap.paddingTop();
    };
  
    treemap.paddingTop = function(x) {
      return arguments.length ? (paddingTop = typeof x === "function" ? x : Object(_constant_js__WEBPACK_IMPORTED_MODULE_3__["default"])(+x), treemap) : paddingTop;
    };
  
    treemap.paddingRight = function(x) {
      return arguments.length ? (paddingRight = typeof x === "function" ? x : Object(_constant_js__WEBPACK_IMPORTED_MODULE_3__["default"])(+x), treemap) : paddingRight;
    };
  
    treemap.paddingBottom = function(x) {
      return arguments.length ? (paddingBottom = typeof x === "function" ? x : Object(_constant_js__WEBPACK_IMPORTED_MODULE_3__["default"])(+x), treemap) : paddingBottom;
    };
  
    treemap.paddingLeft = function(x) {
      return arguments.length ? (paddingLeft = typeof x === "function" ? x : Object(_constant_js__WEBPACK_IMPORTED_MODULE_3__["default"])(+x), treemap) : paddingLeft;
    };
  
    return treemap;
  });
  
  
  /***/ }),
  
  /***/ "./node_modules/d3-hierarchy/src/treemap/resquarify.js":
  /*!*************************************************************!*\
    !*** ./node_modules/d3-hierarchy/src/treemap/resquarify.js ***!
    \*************************************************************/
  /*! exports provided: default */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony import */ var _dice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dice.js */ "./node_modules/d3-hierarchy/src/treemap/dice.js");
  /* harmony import */ var _slice_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slice.js */ "./node_modules/d3-hierarchy/src/treemap/slice.js");
  /* harmony import */ var _squarify_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./squarify.js */ "./node_modules/d3-hierarchy/src/treemap/squarify.js");
  
  
  
  
  /* harmony default export */ __webpack_exports__["default"] = ((function custom(ratio) {
  
    function resquarify(parent, x0, y0, x1, y1) {
      if ((rows = parent._squarify) && (rows.ratio === ratio)) {
        var rows,
            row,
            nodes,
            i,
            j = -1,
            n,
            m = rows.length,
            value = parent.value;
  
        while (++j < m) {
          row = rows[j], nodes = row.children;
          for (i = row.value = 0, n = nodes.length; i < n; ++i) row.value += nodes[i].value;
          if (row.dice) Object(_dice_js__WEBPACK_IMPORTED_MODULE_0__["default"])(row, x0, y0, x1, value ? y0 += (y1 - y0) * row.value / value : y1);
          else Object(_slice_js__WEBPACK_IMPORTED_MODULE_1__["default"])(row, x0, y0, value ? x0 += (x1 - x0) * row.value / value : x1, y1);
          value -= row.value;
        }
      } else {
        parent._squarify = rows = Object(_squarify_js__WEBPACK_IMPORTED_MODULE_2__["squarifyRatio"])(ratio, parent, x0, y0, x1, y1);
        rows.ratio = ratio;
      }
    }
  
    resquarify.ratio = function(x) {
      return custom((x = +x) > 1 ? x : 1);
    };
  
    return resquarify;
  })(_squarify_js__WEBPACK_IMPORTED_MODULE_2__["phi"]));
  
  
  /***/ }),
  
  /***/ "./node_modules/d3-hierarchy/src/treemap/round.js":
  /*!********************************************************!*\
    !*** ./node_modules/d3-hierarchy/src/treemap/round.js ***!
    \********************************************************/
  /*! exports provided: default */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony default export */ __webpack_exports__["default"] = (function(node) {
    node.x0 = Math.round(node.x0);
    node.y0 = Math.round(node.y0);
    node.x1 = Math.round(node.x1);
    node.y1 = Math.round(node.y1);
  });
  
  
  /***/ }),
  
  /***/ "./node_modules/d3-hierarchy/src/treemap/slice.js":
  /*!********************************************************!*\
    !*** ./node_modules/d3-hierarchy/src/treemap/slice.js ***!
    \********************************************************/
  /*! exports provided: default */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony default export */ __webpack_exports__["default"] = (function(parent, x0, y0, x1, y1) {
    var nodes = parent.children,
        node,
        i = -1,
        n = nodes.length,
        k = parent.value && (y1 - y0) / parent.value;
  
    while (++i < n) {
      node = nodes[i], node.x0 = x0, node.x1 = x1;
      node.y0 = y0, node.y1 = y0 += node.value * k;
    }
  });
  
  
  /***/ }),
  
  /***/ "./node_modules/d3-hierarchy/src/treemap/sliceDice.js":
  /*!************************************************************!*\
    !*** ./node_modules/d3-hierarchy/src/treemap/sliceDice.js ***!
    \************************************************************/
  /*! exports provided: default */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony import */ var _dice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dice.js */ "./node_modules/d3-hierarchy/src/treemap/dice.js");
  /* harmony import */ var _slice_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slice.js */ "./node_modules/d3-hierarchy/src/treemap/slice.js");
  
  
  
  /* harmony default export */ __webpack_exports__["default"] = (function(parent, x0, y0, x1, y1) {
    (parent.depth & 1 ? _slice_js__WEBPACK_IMPORTED_MODULE_1__["default"] : _dice_js__WEBPACK_IMPORTED_MODULE_0__["default"])(parent, x0, y0, x1, y1);
  });
  
  
  /***/ }),
  
  /***/ "./node_modules/d3-hierarchy/src/treemap/squarify.js":
  /*!***********************************************************!*\
    !*** ./node_modules/d3-hierarchy/src/treemap/squarify.js ***!
    \***********************************************************/
  /*! exports provided: phi, squarifyRatio, default */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "phi", function() { return phi; });
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "squarifyRatio", function() { return squarifyRatio; });
  /* harmony import */ var _dice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dice.js */ "./node_modules/d3-hierarchy/src/treemap/dice.js");
  /* harmony import */ var _slice_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slice.js */ "./node_modules/d3-hierarchy/src/treemap/slice.js");
  
  
  
  var phi = (1 + Math.sqrt(5)) / 2;
  
  function squarifyRatio(ratio, parent, x0, y0, x1, y1) {
    var rows = [],
        nodes = parent.children,
        row,
        nodeValue,
        i0 = 0,
        i1 = 0,
        n = nodes.length,
        dx, dy,
        value = parent.value,
        sumValue,
        minValue,
        maxValue,
        newRatio,
        minRatio,
        alpha,
        beta;
  
    while (i0 < n) {
      dx = x1 - x0, dy = y1 - y0;
  
      // Find the next non-empty node.
      do sumValue = nodes[i1++].value; while (!sumValue && i1 < n);
      minValue = maxValue = sumValue;
      alpha = Math.max(dy / dx, dx / dy) / (value * ratio);
      beta = sumValue * sumValue * alpha;
      minRatio = Math.max(maxValue / beta, beta / minValue);
  
      // Keep adding nodes while the aspect ratio maintains or improves.
      for (; i1 < n; ++i1) {
        sumValue += nodeValue = nodes[i1].value;
        if (nodeValue < minValue) minValue = nodeValue;
        if (nodeValue > maxValue) maxValue = nodeValue;
        beta = sumValue * sumValue * alpha;
        newRatio = Math.max(maxValue / beta, beta / minValue);
        if (newRatio > minRatio) { sumValue -= nodeValue; break; }
        minRatio = newRatio;
      }
  
      // Position and record the row orientation.
      rows.push(row = {value: sumValue, dice: dx < dy, children: nodes.slice(i0, i1)});
      if (row.dice) Object(_dice_js__WEBPACK_IMPORTED_MODULE_0__["default"])(row, x0, y0, x1, value ? y0 += dy * sumValue / value : y1);
      else Object(_slice_js__WEBPACK_IMPORTED_MODULE_1__["default"])(row, x0, y0, value ? x0 += dx * sumValue / value : x1, y1);
      value -= sumValue, i0 = i1;
    }
  
    return rows;
  }
  
  /* harmony default export */ __webpack_exports__["default"] = ((function custom(ratio) {
  
    function squarify(parent, x0, y0, x1, y1) {
      squarifyRatio(ratio, parent, x0, y0, x1, y1);
    }
  
    squarify.ratio = function(x) {
      return custom((x = +x) > 1 ? x : 1);
    };
  
    return squarify;
  })(phi));
  
  
  /***/ }),
  
  /***/ "./node_modules/d3-path/src/index.js":
  /*!*******************************************!*\
    !*** ./node_modules/d3-path/src/index.js ***!
    \*******************************************/
  /*! exports provided: path */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony import */ var _path_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./path.js */ "./node_modules/d3-path/src/path.js");
  /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "path", function() { return _path_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });
  
  
  
  
  /***/ }),
  
  /***/ "./node_modules/d3-path/src/path.js":
  /*!******************************************!*\
    !*** ./node_modules/d3-path/src/path.js ***!
    \******************************************/
  /*! exports provided: default */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  const pi = Math.PI,
      tau = 2 * pi,
      epsilon = 1e-6,
      tauEpsilon = tau - epsilon;
  
  function Path() {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null; // end of current subpath
    this._ = "";
  }
  
  function path() {
    return new Path;
  }
  
  Path.prototype = path.prototype = {
    constructor: Path,
    moveTo: function(x, y) {
      this._ += "M" + (this._x0 = this._x1 = +x) + "," + (this._y0 = this._y1 = +y);
    },
    closePath: function() {
      if (this._x1 !== null) {
        this._x1 = this._x0, this._y1 = this._y0;
        this._ += "Z";
      }
    },
    lineTo: function(x, y) {
      this._ += "L" + (this._x1 = +x) + "," + (this._y1 = +y);
    },
    quadraticCurveTo: function(x1, y1, x, y) {
      this._ += "Q" + (+x1) + "," + (+y1) + "," + (this._x1 = +x) + "," + (this._y1 = +y);
    },
    bezierCurveTo: function(x1, y1, x2, y2, x, y) {
      this._ += "C" + (+x1) + "," + (+y1) + "," + (+x2) + "," + (+y2) + "," + (this._x1 = +x) + "," + (this._y1 = +y);
    },
    arcTo: function(x1, y1, x2, y2, r) {
      x1 = +x1, y1 = +y1, x2 = +x2, y2 = +y2, r = +r;
      var x0 = this._x1,
          y0 = this._y1,
          x21 = x2 - x1,
          y21 = y2 - y1,
          x01 = x0 - x1,
          y01 = y0 - y1,
          l01_2 = x01 * x01 + y01 * y01;
  
      // Is the radius negative? Error.
      if (r < 0) throw new Error("negative radius: " + r);
  
      // Is this path empty? Move to (x1,y1).
      if (this._x1 === null) {
        this._ += "M" + (this._x1 = x1) + "," + (this._y1 = y1);
      }
  
      // Or, is (x1,y1) coincident with (x0,y0)? Do nothing.
      else if (!(l01_2 > epsilon));
  
      // Or, are (x0,y0), (x1,y1) and (x2,y2) collinear?
      // Equivalently, is (x1,y1) coincident with (x2,y2)?
      // Or, is the radius zero? Line to (x1,y1).
      else if (!(Math.abs(y01 * x21 - y21 * x01) > epsilon) || !r) {
        this._ += "L" + (this._x1 = x1) + "," + (this._y1 = y1);
      }
  
      // Otherwise, draw an arc!
      else {
        var x20 = x2 - x0,
            y20 = y2 - y0,
            l21_2 = x21 * x21 + y21 * y21,
            l20_2 = x20 * x20 + y20 * y20,
            l21 = Math.sqrt(l21_2),
            l01 = Math.sqrt(l01_2),
            l = r * Math.tan((pi - Math.acos((l21_2 + l01_2 - l20_2) / (2 * l21 * l01))) / 2),
            t01 = l / l01,
            t21 = l / l21;
  
        // If the start tangent is not coincident with (x0,y0), line to.
        if (Math.abs(t01 - 1) > epsilon) {
          this._ += "L" + (x1 + t01 * x01) + "," + (y1 + t01 * y01);
        }
  
        this._ += "A" + r + "," + r + ",0,0," + (+(y01 * x20 > x01 * y20)) + "," + (this._x1 = x1 + t21 * x21) + "," + (this._y1 = y1 + t21 * y21);
      }
    },
    arc: function(x, y, r, a0, a1, ccw) {
      x = +x, y = +y, r = +r, ccw = !!ccw;
      var dx = r * Math.cos(a0),
          dy = r * Math.sin(a0),
          x0 = x + dx,
          y0 = y + dy,
          cw = 1 ^ ccw,
          da = ccw ? a0 - a1 : a1 - a0;
  
      // Is the radius negative? Error.
      if (r < 0) throw new Error("negative radius: " + r);
  
      // Is this path empty? Move to (x0,y0).
      if (this._x1 === null) {
        this._ += "M" + x0 + "," + y0;
      }
  
      // Or, is (x0,y0) not coincident with the previous point? Line to (x0,y0).
      else if (Math.abs(this._x1 - x0) > epsilon || Math.abs(this._y1 - y0) > epsilon) {
        this._ += "L" + x0 + "," + y0;
      }
  
      // Is this arc empty? We’re done.
      if (!r) return;
  
      // Does the angle go the wrong way? Flip the direction.
      if (da < 0) da = da % tau + tau;
  
      // Is this a complete circle? Draw two arcs to complete the circle.
      if (da > tauEpsilon) {
        this._ += "A" + r + "," + r + ",0,1," + cw + "," + (x - dx) + "," + (y - dy) + "A" + r + "," + r + ",0,1," + cw + "," + (this._x1 = x0) + "," + (this._y1 = y0);
      }
  
      // Is this arc non-empty? Draw an arc!
      else if (da > epsilon) {
        this._ += "A" + r + "," + r + ",0," + (+(da >= pi)) + "," + cw + "," + (this._x1 = x + r * Math.cos(a1)) + "," + (this._y1 = y + r * Math.sin(a1));
      }
    },
    rect: function(x, y, w, h) {
      this._ += "M" + (this._x0 = this._x1 = +x) + "," + (this._y0 = this._y1 = +y) + "h" + (+w) + "v" + (+h) + "h" + (-w) + "Z";
    },
    toString: function() {
      return this._;
    }
  };
  
  /* harmony default export */ __webpack_exports__["default"] = (path);
  
  
  /***/ }),
  
  /***/ "./node_modules/d3-selection/src/array.js":
  /*!************************************************!*\
    !*** ./node_modules/d3-selection/src/array.js ***!
    \************************************************/
  /*! exports provided: default */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return array; });
  // Given something array like (or null), returns something that is strictly an
  // array. This is used to ensure that array-like objects passed to d3.selectAll
  // or selection.selectAll are converted into proper arrays when creating a
  // selection; we don’t ever want to create a selection backed by a live
  // HTMLCollection or NodeList. However, note that selection.selectAll will use a
  // static NodeList as a group, since it safely derived from querySelectorAll.
  function array(x) {
    return x == null ? [] : Array.isArray(x) ? x : Array.from(x);
  }
  
  
  /***/ }),
  
  /***/ "./node_modules/d3-selection/src/constant.js":
  /*!***************************************************!*\
    !*** ./node_modules/d3-selection/src/constant.js ***!
    \***************************************************/
  /*! exports provided: default */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony default export */ __webpack_exports__["default"] = (function(x) {
    return function() {
      return x;
    };
  });
  
  
  /***/ }),
  
  /***/ "./node_modules/d3-selection/src/create.js":
  /*!*************************************************!*\
    !*** ./node_modules/d3-selection/src/create.js ***!
    \*************************************************/
  /*! exports provided: default */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony import */ var _creator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./creator.js */ "./node_modules/d3-selection/src/creator.js");
  /* harmony import */ var _select_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./select.js */ "./node_modules/d3-selection/src/select.js");
  
  
  
  /* harmony default export */ __webpack_exports__["default"] = (function(name) {
    return Object(_select_js__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_creator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(name).call(document.documentElement));
  });
  
  
  /***/ }),
  
  /***/ "./node_modules/d3-selection/src/creator.js":
  /*!**************************************************!*\
    !*** ./node_modules/d3-selection/src/creator.js ***!
    \**************************************************/
  /*! exports provided: default */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony import */ var _namespace_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./namespace.js */ "./node_modules/d3-selection/src/namespace.js");
  /* harmony import */ var _namespaces_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./namespaces.js */ "./node_modules/d3-selection/src/namespaces.js");
  
  
  
  function creatorInherit(name) {
    return function() {
      var document = this.ownerDocument,
          uri = this.namespaceURI;
      return uri === _namespaces_js__WEBPACK_IMPORTED_MODULE_1__["xhtml"] && document.documentElement.namespaceURI === _namespaces_js__WEBPACK_IMPORTED_MODULE_1__["xhtml"]
          ? document.createElement(name)
          : document.createElementNS(uri, name);
    };
  }
  
  function creatorFixed(fullname) {
    return function() {
      return this.ownerDocument.createElementNS(fullname.space, fullname.local);
    };
  }
  
  /* harmony default export */ __webpack_exports__["default"] = (function(name) {
    var fullname = Object(_namespace_js__WEBPACK_IMPORTED_MODULE_0__["default"])(name);
    return (fullname.local
        ? creatorFixed
        : creatorInherit)(fullname);
  });
  
  
  /***/ }),
  
  /***/ "./node_modules/d3-selection/src/index.js":
  /*!************************************************!*\
    !*** ./node_modules/d3-selection/src/index.js ***!
    \************************************************/
  /*! exports provided: create, creator, local, matcher, namespace, namespaces, pointer, pointers, select, selectAll, selection, selector, selectorAll, style, window */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony import */ var _create_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create.js */ "./node_modules/d3-selection/src/create.js");
  /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "create", function() { return _create_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });
  
  /* harmony import */ var _creator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./creator.js */ "./node_modules/d3-selection/src/creator.js");
  /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "creator", function() { return _creator_js__WEBPACK_IMPORTED_MODULE_1__["default"]; });
  
  /* harmony import */ var _local_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./local.js */ "./node_modules/d3-selection/src/local.js");
  /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "local", function() { return _local_js__WEBPACK_IMPORTED_MODULE_2__["default"]; });
  
  /* harmony import */ var _matcher_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./matcher.js */ "./node_modules/d3-selection/src/matcher.js");
  /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "matcher", function() { return _matcher_js__WEBPACK_IMPORTED_MODULE_3__["default"]; });
  
  /* harmony import */ var _namespace_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./namespace.js */ "./node_modules/d3-selection/src/namespace.js");
  /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "namespace", function() { return _namespace_js__WEBPACK_IMPORTED_MODULE_4__["default"]; });
  
  /* harmony import */ var _namespaces_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./namespaces.js */ "./node_modules/d3-selection/src/namespaces.js");
  /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "namespaces", function() { return _namespaces_js__WEBPACK_IMPORTED_MODULE_5__["default"]; });
  
  /* harmony import */ var _pointer_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pointer.js */ "./node_modules/d3-selection/src/pointer.js");
  /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pointer", function() { return _pointer_js__WEBPACK_IMPORTED_MODULE_6__["default"]; });
  
  /* harmony import */ var _pointers_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pointers.js */ "./node_modules/d3-selection/src/pointers.js");
  /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pointers", function() { return _pointers_js__WEBPACK_IMPORTED_MODULE_7__["default"]; });
  
  /* harmony import */ var _select_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./select.js */ "./node_modules/d3-selection/src/select.js");
  /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "select", function() { return _select_js__WEBPACK_IMPORTED_MODULE_8__["default"]; });
  
  /* harmony import */ var _selectAll_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./selectAll.js */ "./node_modules/d3-selection/src/selectAll.js");
  /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectAll", function() { return _selectAll_js__WEBPACK_IMPORTED_MODULE_9__["default"]; });
  
  /* harmony import */ var _selection_index_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./selection/index.js */ "./node_modules/d3-selection/src/selection/index.js");
  /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selection", function() { return _selection_index_js__WEBPACK_IMPORTED_MODULE_10__["default"]; });
  
  /* harmony import */ var _selector_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./selector.js */ "./node_modules/d3-selection/src/selector.js");
  /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selector", function() { return _selector_js__WEBPACK_IMPORTED_MODULE_11__["default"]; });
  
  /* harmony import */ var _selectorAll_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./selectorAll.js */ "./node_modules/d3-selection/src/selectorAll.js");
  /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectorAll", function() { return _selectorAll_js__WEBPACK_IMPORTED_MODULE_12__["default"]; });
  
  /* harmony import */ var _selection_style_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./selection/style.js */ "./node_modules/d3-selection/src/selection/style.js");
  /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "style", function() { return _selection_style_js__WEBPACK_IMPORTED_MODULE_13__["styleValue"]; });
  
  /* harmony import */ var _window_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./window.js */ "./node_modules/d3-selection/src/window.js");
  /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "window", function() { return _window_js__WEBPACK_IMPORTED_MODULE_14__["default"]; });
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  /***/ }),
  
  /***/ "./node_modules/d3-selection/src/local.js":
  /*!************************************************!*\
    !*** ./node_modules/d3-selection/src/local.js ***!
    \************************************************/
  /*! exports provided: default */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return local; });
  var nextId = 0;
  
  function local() {
    return new Local;
  }
  
  function Local() {
    this._ = "@" + (++nextId).toString(36);
  }
  
  Local.prototype = local.prototype = {
    constructor: Local,
    get: function(node) {
      var id = this._;
      while (!(id in node)) if (!(node = node.parentNode)) return;
      return node[id];
    },
    set: function(node, value) {
      return node[this._] = value;
    },
    remove: function(node) {
      return this._ in node && delete node[this._];
    },
    toString: function() {
      return this._;
    }
  };
  
  
  /***/ }),
  
  /***/ "./node_modules/d3-selection/src/matcher.js":
  /*!**************************************************!*\
    !*** ./node_modules/d3-selection/src/matcher.js ***!
    \**************************************************/
  /*! exports provided: default, childMatcher */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "childMatcher", function() { return childMatcher; });
  /* harmony default export */ __webpack_exports__["default"] = (function(selector) {
    return function() {
      return this.matches(selector);
    };
  });
  
  function childMatcher(selector) {
    return function(node) {
      return node.matches(selector);
    };
  }
  
  
  
  /***/ }),
  
  /***/ "./node_modules/d3-selection/src/namespace.js":
  /*!****************************************************!*\
    !*** ./node_modules/d3-selection/src/namespace.js ***!
    \****************************************************/
  /*! exports provided: default */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony import */ var _namespaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./namespaces.js */ "./node_modules/d3-selection/src/namespaces.js");
  
  
  /* harmony default export */ __webpack_exports__["default"] = (function(name) {
    var prefix = name += "", i = prefix.indexOf(":");
    if (i >= 0 && (prefix = name.slice(0, i)) !== "xmlns") name = name.slice(i + 1);
    return _namespaces_js__WEBPACK_IMPORTED_MODULE_0__["default"].hasOwnProperty(prefix) ? {space: _namespaces_js__WEBPACK_IMPORTED_MODULE_0__["default"][prefix], local: name} : name; // eslint-disable-line no-prototype-builtins
  });
  
  
  /***/ }),
  
  /***/ "./node_modules/d3-selection/src/namespaces.js":
  /*!*****************************************************!*\
    !*** ./node_modules/d3-selection/src/namespaces.js ***!
    \*****************************************************/
  /*! exports provided: xhtml, default */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "xhtml", function() { return xhtml; });
  var xhtml = "http://www.w3.org/1999/xhtml";
  
  /* harmony default export */ __webpack_exports__["default"] = ({
    svg: "http://www.w3.org/2000/svg",
    xhtml: xhtml,
    xlink: "http://www.w3.org/1999/xlink",
    xml: "http://www.w3.org/XML/1998/namespace",
    xmlns: "http://www.w3.org/2000/xmlns/"
  });
  
  
  /***/ }),
  
  /***/ "./node_modules/d3-selection/src/pointer.js":
  /*!**************************************************!*\
    !*** ./node_modules/d3-selection/src/pointer.js ***!
    \**************************************************/
  /*! exports provided: default */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony import */ var _sourceEvent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sourceEvent.js */ "./node_modules/d3-selection/src/sourceEvent.js");
  
  
  /* harmony default export */ __webpack_exports__["default"] = (function(event, node) {
    event = Object(_sourceEvent_js__WEBPACK_IMPORTED_MODULE_0__["default"])(event);
    if (node === undefined) node = event.currentTarget;
    if (node) {
      var svg = node.ownerSVGElement || node;
      if (svg.createSVGPoint) {
        var point = svg.createSVGPoint();
        point.x = event.clientX, point.y = event.clientY;
        point = point.matrixTransform(node.getScreenCTM().inverse());
        return [point.x, point.y];
      }
      if (node.getBoundingClientRect) {
        var rect = node.getBoundingClientRect();
        return [event.clientX - rect.left - node.clientLeft, event.clientY - rect.top - node.clientTop];
      }
    }
    return [event.pageX, event.pageY];
  });
  
  
  /***/ }),
  
  /***/ "./node_modules/d3-selection/src/pointers.js":
  /*!***************************************************!*\
    !*** ./node_modules/d3-selection/src/pointers.js ***!
    \***************************************************/
  /*! exports provided: default */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony import */ var _pointer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pointer.js */ "./node_modules/d3-selection/src/pointer.js");
  /* harmony import */ var _sourceEvent_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sourceEvent.js */ "./node_modules/d3-selection/src/sourceEvent.js");
  
  
  
  /* harmony default export */ __webpack_exports__["default"] = (function(events, node) {
    if (events.target) { // i.e., instanceof Event, not TouchList or iterable
      events = Object(_sourceEvent_js__WEBPACK_IMPORTED_MODULE_1__["default"])(events);
      if (node === undefined) node = events.currentTarget;
      events = events.touches || [events];
    }
    return Array.from(events, event => Object(_pointer_js__WEBPACK_IMPORTED_MODULE_0__["default"])(event, node));
  });
  
  
  /***/ }),
  
  /***/ "./node_modules/d3-selection/src/select.js":
  /*!*************************************************!*\
    !*** ./node_modules/d3-selection/src/select.js ***!
    \*************************************************/
  /*! exports provided: default */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony import */ var _selection_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./selection/index.js */ "./node_modules/d3-selection/src/selection/index.js");
  
  
  /* harmony default export */ __webpack_exports__["default"] = (function(selector) {
    return typeof selector === "string"
        ? new _selection_index_js__WEBPACK_IMPORTED_MODULE_0__["Selection"]([[document.querySelector(selector)]], [document.documentElement])
        : new _selection_index_js__WEBPACK_IMPORTED_MODULE_0__["Selection"]([[selector]], _selection_index_js__WEBPACK_IMPORTED_MODULE_0__["root"]);
  });
  
  
  /***/ }),
  
  /***/ "./node_modules/d3-selection/src/selectAll.js":
  /*!****************************************************!*\
    !*** ./node_modules/d3-selection/src/selectAll.js ***!
    \****************************************************/
  /*! exports provided: default */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony import */ var _array_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./array.js */ "./node_modules/d3-selection/src/array.js");
  /* harmony import */ var _selection_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./selection/index.js */ "./node_modules/d3-selection/src/selection/index.js");
  
  
  
  /* harmony default export */ __webpack_exports__["default"] = (function(selector) {
    return typeof selector === "string"
        ? new _selection_index_js__WEBPACK_IMPORTED_MODULE_1__["Selection"]([document.querySelectorAll(selector)], [document.documentElement])
        : new _selection_index_js__WEBPACK_IMPORTED_MODULE_1__["Selection"]([Object(_array_js__WEBPACK_IMPORTED_MODULE_0__["default"])(selector)], _selection_index_js__WEBPACK_IMPORTED_MODULE_1__["root"]);
  });
  
  
  /***/ }),
  
  /***/ "./node_modules/d3-selection/src/selection/append.js":
  /*!***********************************************************!*\
    !*** ./node_modules/d3-selection/src/selection/append.js ***!
    \***********************************************************/
  /*! exports provided: default */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony import */ var _creator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../creator.js */ "./node_modules/d3-selection/src/creator.js");
  
  
  /* harmony default export */ __webpack_exports__["default"] = (function(name) {
    var create = typeof name === "function" ? name : Object(_creator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(name);
    return this.select(function() {
      return this.appendChild(create.apply(this, arguments));
    });
  });
  
  
  /***/ }),
  
  /***/ "./node_modules/d3-selection/src/selection/attr.js":
  /*!*********************************************************!*\
    !*** ./node_modules/d3-selection/src/selection/attr.js ***!
    \*********************************************************/
  /*! exports provided: default */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony import */ var _namespace_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../namespace.js */ "./node_modules/d3-selection/src/namespace.js");
  
  
  function attrRemove(name) {
    return function() {
      this.removeAttribute(name);
    };
  }
  
  function attrRemoveNS(fullname) {
    return function() {
      this.removeAttributeNS(fullname.space, fullname.local);
    };
  }
  
  function attrConstant(name, value) {
    return function() {
      this.setAttribute(name, value);
    };
  }
  
  function attrConstantNS(fullname, value) {
    return function() {
      this.setAttributeNS(fullname.space, fullname.local, value);
    };
  }
  
  function attrFunction(name, value) {
    return function() {
      var v = value.apply(this, arguments);
      if (v == null) this.removeAttribute(name);
      else this.setAttribute(name, v);
    };
  }
  
  function attrFunctionNS(fullname, value) {
    return function() {
      var v = value.apply(this, arguments);
      if (v == null) this.removeAttributeNS(fullname.space, fullname.local);
      else this.setAttributeNS(fullname.space, fullname.local, v);
    };
  }
  
  /* harmony default export */ __webpack_exports__["default"] = (function(name, value) {
    var fullname = Object(_namespace_js__WEBPACK_IMPORTED_MODULE_0__["default"])(name);
  
    if (arguments.length < 2) {
      var node = this.node();
      return fullname.local
          ? node.getAttributeNS(fullname.space, fullname.local)
          : node.getAttribute(fullname);
    }
  
    return this.each((value == null
        ? (fullname.local ? attrRemoveNS : attrRemove) : (typeof value === "function"
        ? (fullname.local ? attrFunctionNS : attrFunction)
        : (fullname.local ? attrConstantNS : attrConstant)))(fullname, value));
  });
  
  
  /***/ }),
  
  /***/ "./node_modules/d3-selection/src/selection/call.js":
  /*!*********************************************************!*\
    !*** ./node_modules/d3-selection/src/selection/call.js ***!
    \*********************************************************/
  /*! exports provided: default */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony default export */ __webpack_exports__["default"] = (function() {
    var callback = arguments[0];
    arguments[0] = this;
    callback.apply(null, arguments);
    return this;
  });
  
  
  /***/ }),
  
  /***/ "./node_modules/d3-selection/src/selection/classed.js":
  /*!************************************************************!*\
    !*** ./node_modules/d3-selection/src/selection/classed.js ***!
    \************************************************************/
  /*! exports provided: default */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  function classArray(string) {
    return string.trim().split(/^|\s+/);
  }
  
  function classList(node) {
    return node.classList || new ClassList(node);
  }
  
  function ClassList(node) {
    this._node = node;
    this._names = classArray(node.getAttribute("class") || "");
  }
  
  ClassList.prototype = {
    add: function(name) {
      var i = this._names.indexOf(name);
      if (i < 0) {
        this._names.push(name);
        this._node.setAttribute("class", this._names.join(" "));
      }
    },
    remove: function(name) {
      var i = this._names.indexOf(name);
      if (i >= 0) {
        this._names.splice(i, 1);
        this._node.setAttribute("class", this._names.join(" "));
      }
    },
    contains: function(name) {
      return this._names.indexOf(name) >= 0;
    }
  };
  
  function classedAdd(node, names) {
    var list = classList(node), i = -1, n = names.length;
    while (++i < n) list.add(names[i]);
  }
  
  function classedRemove(node, names) {
    var list = classList(node), i = -1, n = names.length;
    while (++i < n) list.remove(names[i]);
  }
  
  function classedTrue(names) {
    return function() {
      classedAdd(this, names);
    };
  }
  
  function classedFalse(names) {
    return function() {
      classedRemove(this, names);
    };
  }
  
  function classedFunction(names, value) {
    return function() {
      (value.apply(this, arguments) ? classedAdd : classedRemove)(this, names);
    };
  }
  
  /* harmony default export */ __webpack_exports__["default"] = (function(name, value) {
    var names = classArray(name + "");
  
    if (arguments.length < 2) {
      var list = classList(this.node()), i = -1, n = names.length;
      while (++i < n) if (!list.contains(names[i])) return false;
      return true;
    }
  
    return this.each((typeof value === "function"
        ? classedFunction : value
        ? classedTrue
        : classedFalse)(names, value));
  });
  
  
  /***/ }),
  
  /***/ "./node_modules/d3-selection/src/selection/clone.js":
  /*!**********************************************************!*\
    !*** ./node_modules/d3-selection/src/selection/clone.js ***!
    \**********************************************************/
  /*! exports provided: default */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  function selection_cloneShallow() {
    var clone = this.cloneNode(false), parent = this.parentNode;
    return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
  }
  
  function selection_cloneDeep() {
    var clone = this.cloneNode(true), parent = this.parentNode;
    return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
  }
  
  /* harmony default export */ __webpack_exports__["default"] = (function(deep) {
    return this.select(deep ? selection_cloneDeep : selection_cloneShallow);
  });
  
  
  /***/ }),
  
  /***/ "./node_modules/d3-selection/src/selection/data.js":
  /*!*********************************************************!*\
    !*** ./node_modules/d3-selection/src/selection/data.js ***!
    \*********************************************************/
  /*! exports provided: default */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./node_modules/d3-selection/src/selection/index.js");
  /* harmony import */ var _enter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enter.js */ "./node_modules/d3-selection/src/selection/enter.js");
  /* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constant.js */ "./node_modules/d3-selection/src/constant.js");
  
  
  
  
  function bindIndex(parent, group, enter, update, exit, data) {
    var i = 0,
        node,
        groupLength = group.length,
        dataLength = data.length;
  
    // Put any non-null nodes that fit into update.
    // Put any null nodes into enter.
    // Put any remaining data into enter.
    for (; i < dataLength; ++i) {
      if (node = group[i]) {
        node.__data__ = data[i];
        update[i] = node;
      } else {
        enter[i] = new _enter_js__WEBPACK_IMPORTED_MODULE_1__["EnterNode"](parent, data[i]);
      }
    }
  
    // Put any non-null nodes that don’t fit into exit.
    for (; i < groupLength; ++i) {
      if (node = group[i]) {
        exit[i] = node;
      }
    }
  }
  
  function bindKey(parent, group, enter, update, exit, data, key) {
    var i,
        node,
        nodeByKeyValue = new Map,
        groupLength = group.length,
        dataLength = data.length,
        keyValues = new Array(groupLength),
        keyValue;
  
    // Compute the key for each node.
    // If multiple nodes have the same key, the duplicates are added to exit.
    for (i = 0; i < groupLength; ++i) {
      if (node = group[i]) {
        keyValues[i] = keyValue = key.call(node, node.__data__, i, group) + "";
        if (nodeByKeyValue.has(keyValue)) {
          exit[i] = node;
        } else {
          nodeByKeyValue.set(keyValue, node);
        }
      }
    }
  
    // Compute the key for each datum.
    // If there a node associated with this key, join and add it to update.
    // If there is not (or the key is a duplicate), add it to enter.
    for (i = 0; i < dataLength; ++i) {
      keyValue = key.call(parent, data[i], i, data) + "";
      if (node = nodeByKeyValue.get(keyValue)) {
        update[i] = node;
        node.__data__ = data[i];
        nodeByKeyValue.delete(keyValue);
      } else {
        enter[i] = new _enter_js__WEBPACK_IMPORTED_MODULE_1__["EnterNode"](parent, data[i]);
      }
    }
  
    // Add any remaining nodes that were not bound to data to exit.
    for (i = 0; i < groupLength; ++i) {
      if ((node = group[i]) && (nodeByKeyValue.get(keyValues[i]) === node)) {
        exit[i] = node;
      }
    }
  }
  
  function datum(node) {
    return node.__data__;
  }
  
  /* harmony default export */ __webpack_exports__["default"] = (function(value, key) {
    if (!arguments.length) return Array.from(this, datum);
  
    var bind = key ? bindKey : bindIndex,
        parents = this._parents,
        groups = this._groups;
  
    if (typeof value !== "function") value = Object(_constant_js__WEBPACK_IMPORTED_MODULE_2__["default"])(value);
  
    for (var m = groups.length, update = new Array(m), enter = new Array(m), exit = new Array(m), j = 0; j < m; ++j) {
      var parent = parents[j],
          group = groups[j],
          groupLength = group.length,
          data = arraylike(value.call(parent, parent && parent.__data__, j, parents)),
          dataLength = data.length,
          enterGroup = enter[j] = new Array(dataLength),
          updateGroup = update[j] = new Array(dataLength),
          exitGroup = exit[j] = new Array(groupLength);
  
      bind(parent, group, enterGroup, updateGroup, exitGroup, data, key);
  
      // Now connect the enter nodes to their following update node, such that
      // appendChild can insert the materialized enter node before this node,
      // rather than at the end of the parent node.
      for (var i0 = 0, i1 = 0, previous, next; i0 < dataLength; ++i0) {
        if (previous = enterGroup[i0]) {
          if (i0 >= i1) i1 = i0 + 1;
          while (!(next = updateGroup[i1]) && ++i1 < dataLength);
          previous._next = next || null;
        }
      }
    }
  
    update = new _index_js__WEBPACK_IMPORTED_MODULE_0__["Selection"](update, parents);
    update._enter = enter;
    update._exit = exit;
    return update;
  });
  
  // Given some data, this returns an array-like view of it: an object that
  // exposes a length property and allows numeric indexing. Note that unlike
  // selectAll, this isn’t worried about “live” collections because the resulting
  // array will only be used briefly while data is being bound. (It is possible to
  // cause the data to change while iterating by using a key function, but please
  // don’t; we’d rather avoid a gratuitous copy.)
  function arraylike(data) {
    return typeof data === "object" && "length" in data
      ? data // Array, TypedArray, NodeList, array-like
      : Array.from(data); // Map, Set, iterable, string, or anything else
  }
  
  
  /***/ }),
  
  /***/ "./node_modules/d3-selection/src/selection/datum.js":
  /*!**********************************************************!*\
    !*** ./node_modules/d3-selection/src/selection/datum.js ***!
    \**********************************************************/
  /*! exports provided: default */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony default export */ __webpack_exports__["default"] = (function(value) {
    return arguments.length
        ? this.property("__data__", value)
        : this.node().__data__;
  });
  
  
  /***/ }),
  
  /***/ "./node_modules/d3-selection/src/selection/dispatch.js":
  /*!*************************************************************!*\
    !*** ./node_modules/d3-selection/src/selection/dispatch.js ***!
    \*************************************************************/
  /*! exports provided: default */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony import */ var _window_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../window.js */ "./node_modules/d3-selection/src/window.js");
  
  
  function dispatchEvent(node, type, params) {
    var window = Object(_window_js__WEBPACK_IMPORTED_MODULE_0__["default"])(node),
        event = window.CustomEvent;
  
    if (typeof event === "function") {
      event = new event(type, params);
    } else {
      event = window.document.createEvent("Event");
      if (params) event.initEvent(type, params.bubbles, params.cancelable), event.detail = params.detail;
      else event.initEvent(type, false, false);
    }
  
    node.dispatchEvent(event);
  }
  
  function dispatchConstant(type, params) {
    return function() {
      return dispatchEvent(this, type, params);
    };
  }
  
  function dispatchFunction(type, params) {
    return function() {
      return dispatchEvent(this, type, params.apply(this, arguments));
    };
  }
  
  /* harmony default export */ __webpack_exports__["default"] = (function(type, params) {
    return this.each((typeof params === "function"
        ? dispatchFunction
        : dispatchConstant)(type, params));
  });
  
  
  /***/ }),
  
  /***/ "./node_modules/d3-selection/src/selection/each.js":
  /*!*********************************************************!*\
    !*** ./node_modules/d3-selection/src/selection/each.js ***!
    \*********************************************************/
  /*! exports provided: default */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony default export */ __webpack_exports__["default"] = (function(callback) {
  
    for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
      for (var group = groups[j], i = 0, n = group.length, node; i < n; ++i) {
        if (node = group[i]) callback.call(node, node.__data__, i, group);
      }
    }
  
    return this;
  });
  
  
  /***/ }),
  
  /***/ "./node_modules/d3-selection/src/selection/empty.js":
  /*!**********************************************************!*\
    !*** ./node_modules/d3-selection/src/selection/empty.js ***!
    \**********************************************************/
  /*! exports provided: default */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony default export */ __webpack_exports__["default"] = (function() {
    return !this.node();
  });
  
  
  /***/ }),
  
  /***/ "./node_modules/d3-selection/src/selection/enter.js":
  /*!**********************************************************!*\
    !*** ./node_modules/d3-selection/src/selection/enter.js ***!
    \**********************************************************/
  /*! exports provided: default, EnterNode */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnterNode", function() { return EnterNode; });
  /* harmony import */ var _sparse_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sparse.js */ "./node_modules/d3-selection/src/selection/sparse.js");
  /* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ "./node_modules/d3-selection/src/selection/index.js");
  
  
  
  /* harmony default export */ __webpack_exports__["default"] = (function() {
    return new _index_js__WEBPACK_IMPORTED_MODULE_1__["Selection"](this._enter || this._groups.map(_sparse_js__WEBPACK_IMPORTED_MODULE_0__["default"]), this._parents);
  });
  
  function EnterNode(parent, datum) {
    this.ownerDocument = parent.ownerDocument;
    this.namespaceURI = parent.namespaceURI;
    this._next = null;
    this._parent = parent;
    this.__data__ = datum;
  }
  
  EnterNode.prototype = {
    constructor: EnterNode,
    appendChild: function(child) { return this._parent.insertBefore(child, this._next); },
    insertBefore: function(child, next) { return this._parent.insertBefore(child, next); },
    querySelector: function(selector) { return this._parent.querySelector(selector); },
    querySelectorAll: function(selector) { return this._parent.querySelectorAll(selector); }
  };
  
  
  /***/ }),
  
  /***/ "./node_modules/d3-selection/src/selection/exit.js":
  /*!*********************************************************!*\
    !*** ./node_modules/d3-selection/src/selection/exit.js ***!
    \*********************************************************/
  /*! exports provided: default */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony import */ var _sparse_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sparse.js */ "./node_modules/d3-selection/src/selection/sparse.js");
  /* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ "./node_modules/d3-selection/src/selection/index.js");
  
  
  
  /* harmony default export */ __webpack_exports__["default"] = (function() {
    return new _index_js__WEBPACK_IMPORTED_MODULE_1__["Selection"](this._exit || this._groups.map(_sparse_js__WEBPACK_IMPORTED_MODULE_0__["default"]), this._parents);
  });
  
  
  /***/ }),
  
  /***/ "./node_modules/d3-selection/src/selection/filter.js":
  /*!***********************************************************!*\
    !*** ./node_modules/d3-selection/src/selection/filter.js ***!
    \***********************************************************/
  /*! exports provided: default */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./node_modules/d3-selection/src/selection/index.js");
  /* harmony import */ var _matcher_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../matcher.js */ "./node_modules/d3-selection/src/matcher.js");
  
  
  
  /* harmony default export */ __webpack_exports__["default"] = (function(match) {
    if (typeof match !== "function") match = Object(_matcher_js__WEBPACK_IMPORTED_MODULE_1__["default"])(match);
  
    for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
      for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
        if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
          subgroup.push(node);
        }
      }
    }
  
    return new _index_js__WEBPACK_IMPORTED_MODULE_0__["Selection"](subgroups, this._parents);
  });
  
  
  /***/ }),
  
  /***/ "./node_modules/d3-selection/src/selection/html.js":
  /*!*********************************************************!*\
    !*** ./node_modules/d3-selection/src/selection/html.js ***!
    \*********************************************************/
  /*! exports provided: default */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  function htmlRemove() {
    this.innerHTML = "";
  }
  
  function htmlConstant(value) {
    return function() {
      this.innerHTML = value;
    };
  }
  
  function htmlFunction(value) {
    return function() {
      var v = value.apply(this, arguments);
      this.innerHTML = v == null ? "" : v;
    };
  }
  
  /* harmony default export */ __webpack_exports__["default"] = (function(value) {
    return arguments.length
        ? this.each(value == null
            ? htmlRemove : (typeof value === "function"
            ? htmlFunction
            : htmlConstant)(value))
        : this.node().innerHTML;
  });
  
  
  /***/ }),
  
  /***/ "./node_modules/d3-selection/src/selection/index.js":
  /*!**********************************************************!*\
    !*** ./node_modules/d3-selection/src/selection/index.js ***!
    \**********************************************************/
  /*! exports provided: root, Selection, default */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "root", function() { return root; });
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Selection", function() { return Selection; });
  /* harmony import */ var _select_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./select.js */ "./node_modules/d3-selection/src/selection/select.js");
  /* harmony import */ var _selectAll_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./selectAll.js */ "./node_modules/d3-selection/src/selection/selectAll.js");
  /* harmony import */ var _selectChild_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./selectChild.js */ "./node_modules/d3-selection/src/selection/selectChild.js");
  /* harmony import */ var _selectChildren_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./selectChildren.js */ "./node_modules/d3-selection/src/selection/selectChildren.js");
  /* harmony import */ var _filter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./filter.js */ "./node_modules/d3-selection/src/selection/filter.js");
  /* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./data.js */ "./node_modules/d3-selection/src/selection/data.js");
  /* harmony import */ var _enter_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./enter.js */ "./node_modules/d3-selection/src/selection/enter.js");
  /* harmony import */ var _exit_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./exit.js */ "./node_modules/d3-selection/src/selection/exit.js");
  /* harmony import */ var _join_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./join.js */ "./node_modules/d3-selection/src/selection/join.js");
  /* harmony import */ var _merge_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./merge.js */ "./node_modules/d3-selection/src/selection/merge.js");
  /* harmony import */ var _order_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./order.js */ "./node_modules/d3-selection/src/selection/order.js");
  /* harmony import */ var _sort_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./sort.js */ "./node_modules/d3-selection/src/selection/sort.js");
  /* harmony import */ var _call_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./call.js */ "./node_modules/d3-selection/src/selection/call.js");
  /* harmony import */ var _nodes_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./nodes.js */ "./node_modules/d3-selection/src/selection/nodes.js");
  /* harmony import */ var _node_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./node.js */ "./node_modules/d3-selection/src/selection/node.js");
  /* harmony import */ var _size_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./size.js */ "./node_modules/d3-selection/src/selection/size.js");
  /* harmony import */ var _empty_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./empty.js */ "./node_modules/d3-selection/src/selection/empty.js");
  /* harmony import */ var _each_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./each.js */ "./node_modules/d3-selection/src/selection/each.js");
  /* harmony import */ var _attr_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./attr.js */ "./node_modules/d3-selection/src/selection/attr.js");
  /* harmony import */ var _style_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./style.js */ "./node_modules/d3-selection/src/selection/style.js");
  /* harmony import */ var _property_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./property.js */ "./node_modules/d3-selection/src/selection/property.js");
  /* harmony import */ var _classed_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./classed.js */ "./node_modules/d3-selection/src/selection/classed.js");
  /* harmony import */ var _text_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./text.js */ "./node_modules/d3-selection/src/selection/text.js");
  /* harmony import */ var _html_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./html.js */ "./node_modules/d3-selection/src/selection/html.js");
  /* harmony import */ var _raise_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./raise.js */ "./node_modules/d3-selection/src/selection/raise.js");
  /* harmony import */ var _lower_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./lower.js */ "./node_modules/d3-selection/src/selection/lower.js");
  /* harmony import */ var _append_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./append.js */ "./node_modules/d3-selection/src/selection/append.js");
  /* harmony import */ var _insert_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./insert.js */ "./node_modules/d3-selection/src/selection/insert.js");
  /* harmony import */ var _remove_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./remove.js */ "./node_modules/d3-selection/src/selection/remove.js");
  /* harmony import */ var _clone_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./clone.js */ "./node_modules/d3-selection/src/selection/clone.js");
  /* harmony import */ var _datum_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./datum.js */ "./node_modules/d3-selection/src/selection/datum.js");
  /* harmony import */ var _on_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./on.js */ "./node_modules/d3-selection/src/selection/on.js");
  /* harmony import */ var _dispatch_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./dispatch.js */ "./node_modules/d3-selection/src/selection/dispatch.js");
  /* harmony import */ var _iterator_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./iterator.js */ "./node_modules/d3-selection/src/selection/iterator.js");
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  var root = [null];
  
  function Selection(groups, parents) {
    this._groups = groups;
    this._parents = parents;
  }
  
  function selection() {
    return new Selection([[document.documentElement]], root);
  }
  
  function selection_selection() {
    return this;
  }
  
  Selection.prototype = selection.prototype = {
    constructor: Selection,
    select: _select_js__WEBPACK_IMPORTED_MODULE_0__["default"],
    selectAll: _selectAll_js__WEBPACK_IMPORTED_MODULE_1__["default"],
    selectChild: _selectChild_js__WEBPACK_IMPORTED_MODULE_2__["default"],
    selectChildren: _selectChildren_js__WEBPACK_IMPORTED_MODULE_3__["default"],
    filter: _filter_js__WEBPACK_IMPORTED_MODULE_4__["default"],
    data: _data_js__WEBPACK_IMPORTED_MODULE_5__["default"],
    enter: _enter_js__WEBPACK_IMPORTED_MODULE_6__["default"],
    exit: _exit_js__WEBPACK_IMPORTED_MODULE_7__["default"],
    join: _join_js__WEBPACK_IMPORTED_MODULE_8__["default"],
    merge: _merge_js__WEBPACK_IMPORTED_MODULE_9__["default"],
    selection: selection_selection,
    order: _order_js__WEBPACK_IMPORTED_MODULE_10__["default"],
    sort: _sort_js__WEBPACK_IMPORTED_MODULE_11__["default"],
    call: _call_js__WEBPACK_IMPORTED_MODULE_12__["default"],
    nodes: _nodes_js__WEBPACK_IMPORTED_MODULE_13__["default"],
    node: _node_js__WEBPACK_IMPORTED_MODULE_14__["default"],
    size: _size_js__WEBPACK_IMPORTED_MODULE_15__["default"],
    empty: _empty_js__WEBPACK_IMPORTED_MODULE_16__["default"],
    each: _each_js__WEBPACK_IMPORTED_MODULE_17__["default"],
    attr: _attr_js__WEBPACK_IMPORTED_MODULE_18__["default"],
    style: _style_js__WEBPACK_IMPORTED_MODULE_19__["default"],
    property: _property_js__WEBPACK_IMPORTED_MODULE_20__["default"],
    classed: _classed_js__WEBPACK_IMPORTED_MODULE_21__["default"],
    text: _text_js__WEBPACK_IMPORTED_MODULE_22__["default"],
    html: _html_js__WEBPACK_IMPORTED_MODULE_23__["default"],
    raise: _raise_js__WEBPACK_IMPORTED_MODULE_24__["default"],
    lower: _lower_js__WEBPACK_IMPORTED_MODULE_25__["default"],
    append: _append_js__WEBPACK_IMPORTED_MODULE_26__["default"],
    insert: _insert_js__WEBPACK_IMPORTED_MODULE_27__["default"],
    remove: _remove_js__WEBPACK_IMPORTED_MODULE_28__["default"],
    clone: _clone_js__WEBPACK_IMPORTED_MODULE_29__["default"],
    datum: _datum_js__WEBPACK_IMPORTED_MODULE_30__["default"],
    on: _on_js__WEBPACK_IMPORTED_MODULE_31__["default"],
    dispatch: _dispatch_js__WEBPACK_IMPORTED_MODULE_32__["default"],
    [Symbol.iterator]: _iterator_js__WEBPACK_IMPORTED_MODULE_33__["default"]
  };
  
  /* harmony default export */ __webpack_exports__["default"] = (selection);
  
  
  /***/ }),
  
  /***/ "./node_modules/d3-selection/src/selection/insert.js":
  /*!***********************************************************!*\
    !*** ./node_modules/d3-selection/src/selection/insert.js ***!
    \***********************************************************/
  /*! exports provided: default */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony import */ var _creator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../creator.js */ "./node_modules/d3-selection/src/creator.js");
  /* harmony import */ var _selector_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../selector.js */ "./node_modules/d3-selection/src/selector.js");
  
  
  
  function constantNull() {
    return null;
  }
  
  /* harmony default export */ __webpack_exports__["default"] = (function(name, before) {
    var create = typeof name === "function" ? name : Object(_creator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(name),
        select = before == null ? constantNull : typeof before === "function" ? before : Object(_selector_js__WEBPACK_IMPORTED_MODULE_1__["default"])(before);
    return this.select(function() {
      return this.insertBefore(create.apply(this, arguments), select.apply(this, arguments) || null);
    });
  });
  
  
  /***/ }),
  
  /***/ "./node_modules/d3-selection/src/selection/iterator.js":
  /*!*************************************************************!*\
    !*** ./node_modules/d3-selection/src/selection/iterator.js ***!
    \*************************************************************/
  /*! exports provided: default */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony default export */ __webpack_exports__["default"] = (function*() {
    for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
      for (var group = groups[j], i = 0, n = group.length, node; i < n; ++i) {
        if (node = group[i]) yield node;
      }
    }
  });
  
  
  /***/ }),
  
  /***/ "./node_modules/d3-selection/src/selection/join.js":
  /*!*********************************************************!*\
    !*** ./node_modules/d3-selection/src/selection/join.js ***!
    \*********************************************************/
  /*! exports provided: default */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony default export */ __webpack_exports__["default"] = (function(onenter, onupdate, onexit) {
    var enter = this.enter(), update = this, exit = this.exit();
    if (typeof onenter === "function") {
      enter = onenter(enter);
      if (enter) enter = enter.selection();
    } else {
      enter = enter.append(onenter + "");
    }
    if (onupdate != null) {
      update = onupdate(update);
      if (update) update = update.selection();
    }
    if (onexit == null) exit.remove(); else onexit(exit);
    return enter && update ? enter.merge(update).order() : update;
  });
  
  
  /***/ }),
  
  /***/ "./node_modules/d3-selection/src/selection/lower.js":
  /*!**********************************************************!*\
    !*** ./node_modules/d3-selection/src/selection/lower.js ***!
    \**********************************************************/
  /*! exports provided: default */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  function lower() {
    if (this.previousSibling) this.parentNode.insertBefore(this, this.parentNode.firstChild);
  }
  
  /* harmony default export */ __webpack_exports__["default"] = (function() {
    return this.each(lower);
  });
  
  
  /***/ }),
  
  /***/ "./node_modules/d3-selection/src/selection/merge.js":
  /*!**********************************************************!*\
    !*** ./node_modules/d3-selection/src/selection/merge.js ***!
    \**********************************************************/
  /*! exports provided: default */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./node_modules/d3-selection/src/selection/index.js");
  
  
  /* harmony default export */ __webpack_exports__["default"] = (function(context) {
    var selection = context.selection ? context.selection() : context;
  
    for (var groups0 = this._groups, groups1 = selection._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
      for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
        if (node = group0[i] || group1[i]) {
          merge[i] = node;
        }
      }
    }
  
    for (; j < m0; ++j) {
      merges[j] = groups0[j];
    }
  
    return new _index_js__WEBPACK_IMPORTED_MODULE_0__["Selection"](merges, this._parents);
  });
  
  
  /***/ }),
  
  /***/ "./node_modules/d3-selection/src/selection/node.js":
  /*!*********************************************************!*\
    !*** ./node_modules/d3-selection/src/selection/node.js ***!
    \*********************************************************/
  /*! exports provided: default */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony default export */ __webpack_exports__["default"] = (function() {
  
    for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
      for (var group = groups[j], i = 0, n = group.length; i < n; ++i) {
        var node = group[i];
        if (node) return node;
      }
    }
  
    return null;
  });
  
  
  /***/ }),
  
  /***/ "./node_modules/d3-selection/src/selection/nodes.js":
  /*!**********************************************************!*\
    !*** ./node_modules/d3-selection/src/selection/nodes.js ***!
    \**********************************************************/
  /*! exports provided: default */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony default export */ __webpack_exports__["default"] = (function() {
    return Array.from(this);
  });
  
  
  /***/ }),
  
  /***/ "./node_modules/d3-selection/src/selection/on.js":
  /*!*******************************************************!*\
    !*** ./node_modules/d3-selection/src/selection/on.js ***!
    \*******************************************************/
  /*! exports provided: default */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  function contextListener(listener) {
    return function(event) {
      listener.call(this, event, this.__data__);
    };
  }
  
  function parseTypenames(typenames) {
    return typenames.trim().split(/^|\s+/).map(function(t) {
      var name = "", i = t.indexOf(".");
      if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
      return {type: t, name: name};
    });
  }
  
  function onRemove(typename) {
    return function() {
      var on = this.__on;
      if (!on) return;
      for (var j = 0, i = -1, m = on.length, o; j < m; ++j) {
        if (o = on[j], (!typename.type || o.type === typename.type) && o.name === typename.name) {
          this.removeEventListener(o.type, o.listener, o.options);
        } else {
          on[++i] = o;
        }
      }
      if (++i) on.length = i;
      else delete this.__on;
    };
  }
  
  function onAdd(typename, value, options) {
    return function() {
      var on = this.__on, o, listener = contextListener(value);
      if (on) for (var j = 0, m = on.length; j < m; ++j) {
        if ((o = on[j]).type === typename.type && o.name === typename.name) {
          this.removeEventListener(o.type, o.listener, o.options);
          this.addEventListener(o.type, o.listener = listener, o.options = options);
          o.value = value;
          return;
        }
      }
      this.addEventListener(typename.type, listener, options);
      o = {type: typename.type, name: typename.name, value: value, listener: listener, options: options};
      if (!on) this.__on = [o];
      else on.push(o);
    };
  }
  
  /* harmony default export */ __webpack_exports__["default"] = (function(typename, value, options) {
    var typenames = parseTypenames(typename + ""), i, n = typenames.length, t;
  
    if (arguments.length < 2) {
      var on = this.node().__on;
      if (on) for (var j = 0, m = on.length, o; j < m; ++j) {
        for (i = 0, o = on[j]; i < n; ++i) {
          if ((t = typenames[i]).type === o.type && t.name === o.name) {
            return o.value;
          }
        }
      }
      return;
    }
  
    on = value ? onAdd : onRemove;
    for (i = 0; i < n; ++i) this.each(on(typenames[i], value, options));
    return this;
  });
  
  
  /***/ }),
  
  /***/ "./node_modules/d3-selection/src/selection/order.js":
  /*!**********************************************************!*\
    !*** ./node_modules/d3-selection/src/selection/order.js ***!
    \**********************************************************/
  /*! exports provided: default */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony default export */ __webpack_exports__["default"] = (function() {
  
    for (var groups = this._groups, j = -1, m = groups.length; ++j < m;) {
      for (var group = groups[j], i = group.length - 1, next = group[i], node; --i >= 0;) {
        if (node = group[i]) {
          if (next && node.compareDocumentPosition(next) ^ 4) next.parentNode.insertBefore(node, next);
          next = node;
        }
      }
    }
  
    return this;
  });
  
  
  /***/ }),
  
  /***/ "./node_modules/d3-selection/src/selection/property.js":
  /*!*************************************************************!*\
    !*** ./node_modules/d3-selection/src/selection/property.js ***!
    \*************************************************************/
  /*! exports provided: default */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  function propertyRemove(name) {
    return function() {
      delete this[name];
    };
  }
  
  function propertyConstant(name, value) {
    return function() {
      this[name] = value;
    };
  }
  
  function propertyFunction(name, value) {
    return function() {
      var v = value.apply(this, arguments);
      if (v == null) delete this[name];
      else this[name] = v;
    };
  }
  
  /* harmony default export */ __webpack_exports__["default"] = (function(name, value) {
    return arguments.length > 1
        ? this.each((value == null
            ? propertyRemove : typeof value === "function"
            ? propertyFunction
            : propertyConstant)(name, value))
        : this.node()[name];
  });
  
  
  /***/ }),
  
  /***/ "./node_modules/d3-selection/src/selection/raise.js":
  /*!**********************************************************!*\
    !*** ./node_modules/d3-selection/src/selection/raise.js ***!
    \**********************************************************/
  /*! exports provided: default */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  function raise() {
    if (this.nextSibling) this.parentNode.appendChild(this);
  }
  
  /* harmony default export */ __webpack_exports__["default"] = (function() {
    return this.each(raise);
  });
  
  
  /***/ }),
  
  /***/ "./node_modules/d3-selection/src/selection/remove.js":
  /*!***********************************************************!*\
    !*** ./node_modules/d3-selection/src/selection/remove.js ***!
    \***********************************************************/
  /*! exports provided: default */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  function remove() {
    var parent = this.parentNode;
    if (parent) parent.removeChild(this);
  }
  
  /* harmony default export */ __webpack_exports__["default"] = (function() {
    return this.each(remove);
  });
  
  
  /***/ }),
  
  /***/ "./node_modules/d3-selection/src/selection/select.js":
  /*!***********************************************************!*\
    !*** ./node_modules/d3-selection/src/selection/select.js ***!
    \***********************************************************/
  /*! exports provided: default */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./node_modules/d3-selection/src/selection/index.js");
  /* harmony import */ var _selector_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../selector.js */ "./node_modules/d3-selection/src/selector.js");
  
  
  
  /* harmony default export */ __webpack_exports__["default"] = (function(select) {
    if (typeof select !== "function") select = Object(_selector_js__WEBPACK_IMPORTED_MODULE_1__["default"])(select);
  
    for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
      for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
        if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
          if ("__data__" in node) subnode.__data__ = node.__data__;
          subgroup[i] = subnode;
        }
      }
    }
  
    return new _index_js__WEBPACK_IMPORTED_MODULE_0__["Selection"](subgroups, this._parents);
  });
  
  
  /***/ }),
  
  /***/ "./node_modules/d3-selection/src/selection/selectAll.js":
  /*!**************************************************************!*\
    !*** ./node_modules/d3-selection/src/selection/selectAll.js ***!
    \**************************************************************/
  /*! exports provided: default */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./node_modules/d3-selection/src/selection/index.js");
  /* harmony import */ var _array_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../array.js */ "./node_modules/d3-selection/src/array.js");
  /* harmony import */ var _selectorAll_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../selectorAll.js */ "./node_modules/d3-selection/src/selectorAll.js");
  
  
  
  
  function arrayAll(select) {
    return function() {
      return Object(_array_js__WEBPACK_IMPORTED_MODULE_1__["default"])(select.apply(this, arguments));
    };
  }
  
  /* harmony default export */ __webpack_exports__["default"] = (function(select) {
    if (typeof select === "function") select = arrayAll(select);
    else select = Object(_selectorAll_js__WEBPACK_IMPORTED_MODULE_2__["default"])(select);
  
    for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
      for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
        if (node = group[i]) {
          subgroups.push(select.call(node, node.__data__, i, group));
          parents.push(node);
        }
      }
    }
  
    return new _index_js__WEBPACK_IMPORTED_MODULE_0__["Selection"](subgroups, parents);
  });
  
  
  /***/ }),
  
  /***/ "./node_modules/d3-selection/src/selection/selectChild.js":
  /*!****************************************************************!*\
    !*** ./node_modules/d3-selection/src/selection/selectChild.js ***!
    \****************************************************************/
  /*! exports provided: default */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony import */ var _matcher_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../matcher.js */ "./node_modules/d3-selection/src/matcher.js");
  
  
  var find = Array.prototype.find;
  
  function childFind(match) {
    return function() {
      return find.call(this.children, match);
    };
  }
  
  function childFirst() {
    return this.firstElementChild;
  }
  
  /* harmony default export */ __webpack_exports__["default"] = (function(match) {
    return this.select(match == null ? childFirst
        : childFind(typeof match === "function" ? match : Object(_matcher_js__WEBPACK_IMPORTED_MODULE_0__["childMatcher"])(match)));
  });
  
  
  /***/ }),
  
  /***/ "./node_modules/d3-selection/src/selection/selectChildren.js":
  /*!*******************************************************************!*\
    !*** ./node_modules/d3-selection/src/selection/selectChildren.js ***!
    \*******************************************************************/
  /*! exports provided: default */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony import */ var _matcher_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../matcher.js */ "./node_modules/d3-selection/src/matcher.js");
  
  
  var filter = Array.prototype.filter;
  
  function children() {
    return Array.from(this.children);
  }
  
  function childrenFilter(match) {
    return function() {
      return filter.call(this.children, match);
    };
  }
  
  /* harmony default export */ __webpack_exports__["default"] = (function(match) {
    return this.selectAll(match == null ? children
        : childrenFilter(typeof match === "function" ? match : Object(_matcher_js__WEBPACK_IMPORTED_MODULE_0__["childMatcher"])(match)));
  });
  
  
  /***/ }),
  
  /***/ "./node_modules/d3-selection/src/selection/size.js":
  /*!*********************************************************!*\
    !*** ./node_modules/d3-selection/src/selection/size.js ***!
    \*********************************************************/
  /*! exports provided: default */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony default export */ __webpack_exports__["default"] = (function() {
    let size = 0;
    for (const node of this) ++size; // eslint-disable-line no-unused-vars
    return size;
  });
  
  
  /***/ }),
  
  /***/ "./node_modules/d3-selection/src/selection/sort.js":
  /*!*********************************************************!*\
    !*** ./node_modules/d3-selection/src/selection/sort.js ***!
    \*********************************************************/
  /*! exports provided: default */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./node_modules/d3-selection/src/selection/index.js");
  
  
  /* harmony default export */ __webpack_exports__["default"] = (function(compare) {
    if (!compare) compare = ascending;
  
    function compareNode(a, b) {
      return a && b ? compare(a.__data__, b.__data__) : !a - !b;
    }
  
    for (var groups = this._groups, m = groups.length, sortgroups = new Array(m), j = 0; j < m; ++j) {
      for (var group = groups[j], n = group.length, sortgroup = sortgroups[j] = new Array(n), node, i = 0; i < n; ++i) {
        if (node = group[i]) {
          sortgroup[i] = node;
        }
      }
      sortgroup.sort(compareNode);
    }
  
    return new _index_js__WEBPACK_IMPORTED_MODULE_0__["Selection"](sortgroups, this._parents).order();
  });
  
  function ascending(a, b) {
    return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
  }
  
  
  /***/ }),
  
  /***/ "./node_modules/d3-selection/src/selection/sparse.js":
  /*!***********************************************************!*\
    !*** ./node_modules/d3-selection/src/selection/sparse.js ***!
    \***********************************************************/
  /*! exports provided: default */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony default export */ __webpack_exports__["default"] = (function(update) {
    return new Array(update.length);
  });
  
  
  /***/ }),
  
  /***/ "./node_modules/d3-selection/src/selection/style.js":
  /*!**********************************************************!*\
    !*** ./node_modules/d3-selection/src/selection/style.js ***!
    \**********************************************************/
  /*! exports provided: default, styleValue */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styleValue", function() { return styleValue; });
  /* harmony import */ var _window_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../window.js */ "./node_modules/d3-selection/src/window.js");
  
  
  function styleRemove(name) {
    return function() {
      this.style.removeProperty(name);
    };
  }
  
  function styleConstant(name, value, priority) {
    return function() {
      this.style.setProperty(name, value, priority);
    };
  }
  
  function styleFunction(name, value, priority) {
    return function() {
      var v = value.apply(this, arguments);
      if (v == null) this.style.removeProperty(name);
      else this.style.setProperty(name, v, priority);
    };
  }
  
  /* harmony default export */ __webpack_exports__["default"] = (function(name, value, priority) {
    return arguments.length > 1
        ? this.each((value == null
              ? styleRemove : typeof value === "function"
              ? styleFunction
              : styleConstant)(name, value, priority == null ? "" : priority))
        : styleValue(this.node(), name);
  });
  
  function styleValue(node, name) {
    return node.style.getPropertyValue(name)
        || Object(_window_js__WEBPACK_IMPORTED_MODULE_0__["default"])(node).getComputedStyle(node, null).getPropertyValue(name);
  }
  
  
  /***/ }),
  
  /***/ "./node_modules/d3-selection/src/selection/text.js":
  /*!*********************************************************!*\
    !*** ./node_modules/d3-selection/src/selection/text.js ***!
    \*********************************************************/
  /*! exports provided: default */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  function textRemove() {
    this.textContent = "";
  }
  
  function textConstant(value) {
    return function() {
      this.textContent = value;
    };
  }
  
  function textFunction(value) {
    return function() {
      var v = value.apply(this, arguments);
      this.textContent = v == null ? "" : v;
    };
  }
  
  /* harmony default export */ __webpack_exports__["default"] = (function(value) {
    return arguments.length
        ? this.each(value == null
            ? textRemove : (typeof value === "function"
            ? textFunction
            : textConstant)(value))
        : this.node().textContent;
  });
  
  
  /***/ }),
  
  /***/ "./node_modules/d3-selection/src/selector.js":
  /*!***************************************************!*\
    !*** ./node_modules/d3-selection/src/selector.js ***!
    \***************************************************/
  /*! exports provided: default */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  function none() {}
  
  /* harmony default export */ __webpack_exports__["default"] = (function(selector) {
    return selector == null ? none : function() {
      return this.querySelector(selector);
    };
  });
  
  
  /***/ }),
  
  /***/ "./node_modules/d3-selection/src/selectorAll.js":
  /*!******************************************************!*\
    !*** ./node_modules/d3-selection/src/selectorAll.js ***!
    \******************************************************/
  /*! exports provided: default */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  function empty() {
    return [];
  }
  
  /* harmony default export */ __webpack_exports__["default"] = (function(selector) {
    return selector == null ? empty : function() {
      return this.querySelectorAll(selector);
    };
  });
  
  
  /***/ }),
  
  /***/ "./node_modules/d3-selection/src/sourceEvent.js":
  /*!******************************************************!*\
    !*** ./node_modules/d3-selection/src/sourceEvent.js ***!
    \******************************************************/
  /*! exports provided: default */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony default export */ __webpack_exports__["default"] = (function(event) {
    let sourceEvent;
    while (sourceEvent = event.sourceEvent) event = sourceEvent;
    return event;
  });
  
  
  /***/ }),
  
  /***/ "./node_modules/d3-selection/src/window.js":
  /*!*************************************************!*\
    !*** ./node_modules/d3-selection/src/window.js ***!
    \*************************************************/
  /*! exports provided: default */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony default export */ __webpack_exports__["default"] = (function(node) {
    return (node.ownerDocument && node.ownerDocument.defaultView) // node is a Node
        || (node.document && node) // node is a Window
        || node.defaultView; // node is a Document
  });
  
  
  /***/ }),
  
  /***/ "./node_modules/d3-shape/src/arc.js":
  /*!******************************************!*\
    !*** ./node_modules/d3-shape/src/arc.js ***!
    \******************************************/
  /*! exports provided: default */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony import */ var d3_path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-path */ "./node_modules/d3-path/src/index.js");
  /* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constant.js */ "./node_modules/d3-shape/src/constant.js");
  /* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./math.js */ "./node_modules/d3-shape/src/math.js");
  
  
  
  
  function arcInnerRadius(d) {
    return d.innerRadius;
  }
  
  function arcOuterRadius(d) {
    return d.outerRadius;
  }
  
  function arcStartAngle(d) {
    return d.startAngle;
  }
  
  function arcEndAngle(d) {
    return d.endAngle;
  }
  
  function arcPadAngle(d) {
    return d && d.padAngle; // Note: optional!
  }
  
  function intersect(x0, y0, x1, y1, x2, y2, x3, y3) {
    var x10 = x1 - x0, y10 = y1 - y0,
        x32 = x3 - x2, y32 = y3 - y2,
        t = y32 * x10 - x32 * y10;
    if (t * t < _math_js__WEBPACK_IMPORTED_MODULE_2__["epsilon"]) return;
    t = (x32 * (y0 - y2) - y32 * (x0 - x2)) / t;
    return [x0 + t * x10, y0 + t * y10];
  }
  
  // Compute perpendicular offset line of length rc.
  // http://mathworld.wolfram.com/Circle-LineIntersection.html
  function cornerTangents(x0, y0, x1, y1, r1, rc, cw) {
    var x01 = x0 - x1,
        y01 = y0 - y1,
        lo = (cw ? rc : -rc) / Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["sqrt"])(x01 * x01 + y01 * y01),
        ox = lo * y01,
        oy = -lo * x01,
        x11 = x0 + ox,
        y11 = y0 + oy,
        x10 = x1 + ox,
        y10 = y1 + oy,
        x00 = (x11 + x10) / 2,
        y00 = (y11 + y10) / 2,
        dx = x10 - x11,
        dy = y10 - y11,
        d2 = dx * dx + dy * dy,
        r = r1 - rc,
        D = x11 * y10 - x10 * y11,
        d = (dy < 0 ? -1 : 1) * Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["sqrt"])(Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["max"])(0, r * r * d2 - D * D)),
        cx0 = (D * dy - dx * d) / d2,
        cy0 = (-D * dx - dy * d) / d2,
        cx1 = (D * dy + dx * d) / d2,
        cy1 = (-D * dx + dy * d) / d2,
        dx0 = cx0 - x00,
        dy0 = cy0 - y00,
        dx1 = cx1 - x00,
        dy1 = cy1 - y00;
  
    // Pick the closer of the two intersection points.
    // TODO Is there a faster way to determine which intersection to use?
    if (dx0 * dx0 + dy0 * dy0 > dx1 * dx1 + dy1 * dy1) cx0 = cx1, cy0 = cy1;
  
    return {
      cx: cx0,
      cy: cy0,
      x01: -ox,
      y01: -oy,
      x11: cx0 * (r1 / r - 1),
      y11: cy0 * (r1 / r - 1)
    };
  }
  
  /* harmony default export */ __webpack_exports__["default"] = (function() {
    var innerRadius = arcInnerRadius,
        outerRadius = arcOuterRadius,
        cornerRadius = Object(_constant_js__WEBPACK_IMPORTED_MODULE_1__["default"])(0),
        padRadius = null,
        startAngle = arcStartAngle,
        endAngle = arcEndAngle,
        padAngle = arcPadAngle,
        context = null;
  
    function arc() {
      var buffer,
          r,
          r0 = +innerRadius.apply(this, arguments),
          r1 = +outerRadius.apply(this, arguments),
          a0 = startAngle.apply(this, arguments) - _math_js__WEBPACK_IMPORTED_MODULE_2__["halfPi"],
          a1 = endAngle.apply(this, arguments) - _math_js__WEBPACK_IMPORTED_MODULE_2__["halfPi"],
          da = Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["abs"])(a1 - a0),
          cw = a1 > a0;
  
      if (!context) context = buffer = Object(d3_path__WEBPACK_IMPORTED_MODULE_0__["path"])();
  
      // Ensure that the outer radius is always larger than the inner radius.
      if (r1 < r0) r = r1, r1 = r0, r0 = r;
  
      // Is it a point?
      if (!(r1 > _math_js__WEBPACK_IMPORTED_MODULE_2__["epsilon"])) context.moveTo(0, 0);
  
      // Or is it a circle or annulus?
      else if (da > _math_js__WEBPACK_IMPORTED_MODULE_2__["tau"] - _math_js__WEBPACK_IMPORTED_MODULE_2__["epsilon"]) {
        context.moveTo(r1 * Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["cos"])(a0), r1 * Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["sin"])(a0));
        context.arc(0, 0, r1, a0, a1, !cw);
        if (r0 > _math_js__WEBPACK_IMPORTED_MODULE_2__["epsilon"]) {
          context.moveTo(r0 * Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["cos"])(a1), r0 * Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["sin"])(a1));
          context.arc(0, 0, r0, a1, a0, cw);
        }
      }
  
      // Or is it a circular or annular sector?
      else {
        var a01 = a0,
            a11 = a1,
            a00 = a0,
            a10 = a1,
            da0 = da,
            da1 = da,
            ap = padAngle.apply(this, arguments) / 2,
            rp = (ap > _math_js__WEBPACK_IMPORTED_MODULE_2__["epsilon"]) && (padRadius ? +padRadius.apply(this, arguments) : Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["sqrt"])(r0 * r0 + r1 * r1)),
            rc = Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["min"])(Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["abs"])(r1 - r0) / 2, +cornerRadius.apply(this, arguments)),
            rc0 = rc,
            rc1 = rc,
            t0,
            t1;
  
        // Apply padding? Note that since r1 ≥ r0, da1 ≥ da0.
        if (rp > _math_js__WEBPACK_IMPORTED_MODULE_2__["epsilon"]) {
          var p0 = Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["asin"])(rp / r0 * Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["sin"])(ap)),
              p1 = Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["asin"])(rp / r1 * Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["sin"])(ap));
          if ((da0 -= p0 * 2) > _math_js__WEBPACK_IMPORTED_MODULE_2__["epsilon"]) p0 *= (cw ? 1 : -1), a00 += p0, a10 -= p0;
          else da0 = 0, a00 = a10 = (a0 + a1) / 2;
          if ((da1 -= p1 * 2) > _math_js__WEBPACK_IMPORTED_MODULE_2__["epsilon"]) p1 *= (cw ? 1 : -1), a01 += p1, a11 -= p1;
          else da1 = 0, a01 = a11 = (a0 + a1) / 2;
        }
  
        var x01 = r1 * Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["cos"])(a01),
            y01 = r1 * Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["sin"])(a01),
            x10 = r0 * Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["cos"])(a10),
            y10 = r0 * Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["sin"])(a10);
  
        // Apply rounded corners?
        if (rc > _math_js__WEBPACK_IMPORTED_MODULE_2__["epsilon"]) {
          var x11 = r1 * Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["cos"])(a11),
              y11 = r1 * Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["sin"])(a11),
              x00 = r0 * Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["cos"])(a00),
              y00 = r0 * Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["sin"])(a00),
              oc;
  
          // Restrict the corner radius according to the sector angle.
          if (da < _math_js__WEBPACK_IMPORTED_MODULE_2__["pi"] && (oc = intersect(x01, y01, x00, y00, x11, y11, x10, y10))) {
            var ax = x01 - oc[0],
                ay = y01 - oc[1],
                bx = x11 - oc[0],
                by = y11 - oc[1],
                kc = 1 / Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["sin"])(Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["acos"])((ax * bx + ay * by) / (Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["sqrt"])(ax * ax + ay * ay) * Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["sqrt"])(bx * bx + by * by))) / 2),
                lc = Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["sqrt"])(oc[0] * oc[0] + oc[1] * oc[1]);
            rc0 = Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["min"])(rc, (r0 - lc) / (kc - 1));
            rc1 = Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["min"])(rc, (r1 - lc) / (kc + 1));
          }
        }
  
        // Is the sector collapsed to a line?
        if (!(da1 > _math_js__WEBPACK_IMPORTED_MODULE_2__["epsilon"])) context.moveTo(x01, y01);
  
        // Does the sector’s outer ring have rounded corners?
        else if (rc1 > _math_js__WEBPACK_IMPORTED_MODULE_2__["epsilon"]) {
          t0 = cornerTangents(x00, y00, x01, y01, r1, rc1, cw);
          t1 = cornerTangents(x11, y11, x10, y10, r1, rc1, cw);
  
          context.moveTo(t0.cx + t0.x01, t0.cy + t0.y01);
  
          // Have the corners merged?
          if (rc1 < rc) context.arc(t0.cx, t0.cy, rc1, Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["atan2"])(t0.y01, t0.x01), Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["atan2"])(t1.y01, t1.x01), !cw);
  
          // Otherwise, draw the two corners and the ring.
          else {
            context.arc(t0.cx, t0.cy, rc1, Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["atan2"])(t0.y01, t0.x01), Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["atan2"])(t0.y11, t0.x11), !cw);
            context.arc(0, 0, r1, Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["atan2"])(t0.cy + t0.y11, t0.cx + t0.x11), Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["atan2"])(t1.cy + t1.y11, t1.cx + t1.x11), !cw);
            context.arc(t1.cx, t1.cy, rc1, Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["atan2"])(t1.y11, t1.x11), Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["atan2"])(t1.y01, t1.x01), !cw);
          }
        }
  
        // Or is the outer ring just a circular arc?
        else context.moveTo(x01, y01), context.arc(0, 0, r1, a01, a11, !cw);
  
        // Is there no inner ring, and it’s a circular sector?
        // Or perhaps it’s an annular sector collapsed due to padding?
        if (!(r0 > _math_js__WEBPACK_IMPORTED_MODULE_2__["epsilon"]) || !(da0 > _math_js__WEBPACK_IMPORTED_MODULE_2__["epsilon"])) context.lineTo(x10, y10);
  
        // Does the sector’s inner ring (or point) have rounded corners?
        else if (rc0 > _math_js__WEBPACK_IMPORTED_MODULE_2__["epsilon"]) {
          t0 = cornerTangents(x10, y10, x11, y11, r0, -rc0, cw);
          t1 = cornerTangents(x01, y01, x00, y00, r0, -rc0, cw);
  
          context.lineTo(t0.cx + t0.x01, t0.cy + t0.y01);
  
          // Have the corners merged?
          if (rc0 < rc) context.arc(t0.cx, t0.cy, rc0, Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["atan2"])(t0.y01, t0.x01), Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["atan2"])(t1.y01, t1.x01), !cw);
  
          // Otherwise, draw the two corners and the ring.
          else {
            context.arc(t0.cx, t0.cy, rc0, Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["atan2"])(t0.y01, t0.x01), Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["atan2"])(t0.y11, t0.x11), !cw);
            context.arc(0, 0, r0, Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["atan2"])(t0.cy + t0.y11, t0.cx + t0.x11), Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["atan2"])(t1.cy + t1.y11, t1.cx + t1.x11), cw);
            context.arc(t1.cx, t1.cy, rc0, Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["atan2"])(t1.y11, t1.x11), Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["atan2"])(t1.y01, t1.x01), !cw);
          }
        }
  
        // Or is the inner ring just a circular arc?
        else context.arc(0, 0, r0, a10, a00, cw);
      }
  
      context.closePath();
  
      if (buffer) return context = null, buffer + "" || null;
    }
  
    arc.centroid = function() {
      var r = (+innerRadius.apply(this, arguments) + +outerRadius.apply(this, arguments)) / 2,
          a = (+startAngle.apply(this, arguments) + +endAngle.apply(this, arguments)) / 2 - _math_js__WEBPACK_IMPORTED_MODULE_2__["pi"] / 2;
      return [Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["cos"])(a) * r, Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["sin"])(a) * r];
    };
  
    arc.innerRadius = function(_) {
      return arguments.length ? (innerRadius = typeof _ === "function" ? _ : Object(_constant_js__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), arc) : innerRadius;
    };
  
    arc.outerRadius = function(_) {
      return arguments.length ? (outerRadius = typeof _ === "function" ? _ : Object(_constant_js__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), arc) : outerRadius;
    };
  
    arc.cornerRadius = function(_) {
      return arguments.length ? (cornerRadius = typeof _ === "function" ? _ : Object(_constant_js__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), arc) : cornerRadius;
    };
  
    arc.padRadius = function(_) {
      return arguments.length ? (padRadius = _ == null ? null : typeof _ === "function" ? _ : Object(_constant_js__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), arc) : padRadius;
    };
  
    arc.startAngle = function(_) {
      return arguments.length ? (startAngle = typeof _ === "function" ? _ : Object(_constant_js__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), arc) : startAngle;
    };
  
    arc.endAngle = function(_) {
      return arguments.length ? (endAngle = typeof _ === "function" ? _ : Object(_constant_js__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), arc) : endAngle;
    };
  
    arc.padAngle = function(_) {
      return arguments.length ? (padAngle = typeof _ === "function" ? _ : Object(_constant_js__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), arc) : padAngle;
    };
  
    arc.context = function(_) {
      return arguments.length ? ((context = _ == null ? null : _), arc) : context;
    };
  
    return arc;
  });
  
  
  /***/ }),
  
  /***/ "./node_modules/d3-shape/src/area.js":
  /*!*******************************************!*\
    !*** ./node_modules/d3-shape/src/area.js ***!
    \*******************************************/
  /*! exports provided: default */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony import */ var d3_path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-path */ "./node_modules/d3-path/src/index.js");
  /* harmony import */ var _array_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./array.js */ "./node_modules/d3-shape/src/array.js");
  /* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constant.js */ "./node_modules/d3-shape/src/constant.js");
  /* harmony import */ var _curve_linear_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./curve/linear.js */ "./node_modules/d3-shape/src/curve/linear.js");
  /* harmony import */ var _line_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./line.js */ "./node_modules/d3-shape/src/line.js");
  /* harmony import */ var _point_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./point.js */ "./node_modules/d3-shape/src/point.js");
  
  
  
  
  
  
  
  /* harmony default export */ __webpack_exports__["default"] = (function(x0, y0, y1) {
    var x1 = null,
        defined = Object(_constant_js__WEBPACK_IMPORTED_MODULE_2__["default"])(true),
        context = null,
        curve = _curve_linear_js__WEBPACK_IMPORTED_MODULE_3__["default"],
        output = null;
  
    x0 = typeof x0 === "function" ? x0 : (x0 === undefined) ? _point_js__WEBPACK_IMPORTED_MODULE_5__["x"] : Object(_constant_js__WEBPACK_IMPORTED_MODULE_2__["default"])(+x0);
    y0 = typeof y0 === "function" ? y0 : (y0 === undefined) ? Object(_constant_js__WEBPACK_IMPORTED_MODULE_2__["default"])(0) : Object(_constant_js__WEBPACK_IMPORTED_MODULE_2__["default"])(+y0);
    y1 = typeof y1 === "function" ? y1 : (y1 === undefined) ? _point_js__WEBPACK_IMPORTED_MODULE_5__["y"] : Object(_constant_js__WEBPACK_IMPORTED_MODULE_2__["default"])(+y1);
  
    function area(data) {
      var i,
          j,
          k,
          n = (data = Object(_array_js__WEBPACK_IMPORTED_MODULE_1__["default"])(data)).length,
          d,
          defined0 = false,
          buffer,
          x0z = new Array(n),
          y0z = new Array(n);
  
      if (context == null) output = curve(buffer = Object(d3_path__WEBPACK_IMPORTED_MODULE_0__["path"])());
  
      for (i = 0; i <= n; ++i) {
        if (!(i < n && defined(d = data[i], i, data)) === defined0) {
          if (defined0 = !defined0) {
            j = i;
            output.areaStart();
            output.lineStart();
          } else {
            output.lineEnd();
            output.lineStart();
            for (k = i - 1; k >= j; --k) {
              output.point(x0z[k], y0z[k]);
            }
            output.lineEnd();
            output.areaEnd();
          }
        }
        if (defined0) {
          x0z[i] = +x0(d, i, data), y0z[i] = +y0(d, i, data);
          output.point(x1 ? +x1(d, i, data) : x0z[i], y1 ? +y1(d, i, data) : y0z[i]);
        }
      }
  
      if (buffer) return output = null, buffer + "" || null;
    }
  
    function arealine() {
      return Object(_line_js__WEBPACK_IMPORTED_MODULE_4__["default"])().defined(defined).curve(curve).context(context);
    }
  
    area.x = function(_) {
      return arguments.length ? (x0 = typeof _ === "function" ? _ : Object(_constant_js__WEBPACK_IMPORTED_MODULE_2__["default"])(+_), x1 = null, area) : x0;
    };
  
    area.x0 = function(_) {
      return arguments.length ? (x0 = typeof _ === "function" ? _ : Object(_constant_js__WEBPACK_IMPORTED_MODULE_2__["default"])(+_), area) : x0;
    };
  
    area.x1 = function(_) {
      return arguments.length ? (x1 = _ == null ? null : typeof _ === "function" ? _ : Object(_constant_js__WEBPACK_IMPORTED_MODULE_2__["default"])(+_), area) : x1;
    };
  
    area.y = function(_) {
      return arguments.length ? (y0 = typeof _ === "function" ? _ : Object(_constant_js__WEBPACK_IMPORTED_MODULE_2__["default"])(+_), y1 = null, area) : y0;
    };
  
    area.y0 = function(_) {
      return arguments.length ? (y0 = typeof _ === "function" ? _ : Object(_constant_js__WEBPACK_IMPORTED_MODULE_2__["default"])(+_), area) : y0;
    };
  
    area.y1 = function(_) {
      return arguments.length ? (y1 = _ == null ? null : typeof _ === "function" ? _ : Object(_constant_js__WEBPACK_IMPORTED_MODULE_2__["default"])(+_), area) : y1;
    };
  
    area.lineX0 =
    area.lineY0 = function() {
      return arealine().x(x0).y(y0);
    };
  
    area.lineY1 = function() {
      return arealine().x(x0).y(y1);
    };
  
    area.lineX1 = function() {
      return arealine().x(x1).y(y0);
    };
  
    area.defined = function(_) {
      return arguments.length ? (defined = typeof _ === "function" ? _ : Object(_constant_js__WEBPACK_IMPORTED_MODULE_2__["default"])(!!_), area) : defined;
    };
  
    area.curve = function(_) {
      return arguments.length ? (curve = _, context != null && (output = curve(context)), area) : curve;
    };
  
    area.context = function(_) {
      return arguments.length ? (_ == null ? context = output = null : output = curve(context = _), area) : context;
    };
  
    return area;
  });
  
  
  /***/ }),
  
  /***/ "./node_modules/d3-shape/src/areaRadial.js":
  /*!*************************************************!*\
    !*** ./node_modules/d3-shape/src/areaRadial.js ***!
    \*************************************************/
  /*! exports provided: default */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony import */ var _curve_radial_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curve/radial.js */ "./node_modules/d3-shape/src/curve/radial.js");
  /* harmony import */ var _area_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./area.js */ "./node_modules/d3-shape/src/area.js");
  /* harmony import */ var _lineRadial_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lineRadial.js */ "./node_modules/d3-shape/src/lineRadial.js");
  
  
  
  
  /* harmony default export */ __webpack_exports__["default"] = (function() {
    var a = Object(_area_js__WEBPACK_IMPORTED_MODULE_1__["default"])().curve(_curve_radial_js__WEBPACK_IMPORTED_MODULE_0__["curveRadialLinear"]),
        c = a.curve,
        x0 = a.lineX0,
        x1 = a.lineX1,
        y0 = a.lineY0,
        y1 = a.lineY1;
  
    a.angle = a.x, delete a.x;
    a.startAngle = a.x0, delete a.x0;
    a.endAngle = a.x1, delete a.x1;
    a.radius = a.y, delete a.y;
    a.innerRadius = a.y0, delete a.y0;
    a.outerRadius = a.y1, delete a.y1;
    a.lineStartAngle = function() { return Object(_lineRadial_js__WEBPACK_IMPORTED_MODULE_2__["lineRadial"])(x0()); }, delete a.lineX0;
    a.lineEndAngle = function() { return Object(_lineRadial_js__WEBPACK_IMPORTED_MODULE_2__["lineRadial"])(x1()); }, delete a.lineX1;
    a.lineInnerRadius = function() { return Object(_lineRadial_js__WEBPACK_IMPORTED_MODULE_2__["lineRadial"])(y0()); }, delete a.lineY0;
    a.lineOuterRadius = function() { return Object(_lineRadial_js__WEBPACK_IMPORTED_MODULE_2__["lineRadial"])(y1()); }, delete a.lineY1;
  
    a.curve = function(_) {
      return arguments.length ? c(Object(_curve_radial_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_)) : c()._curve;
    };
  
    return a;
  });
  
  
  /***/ }),
  
  /***/ "./node_modules/d3-shape/src/array.js":
  /*!********************************************!*\
    !*** ./node_modules/d3-shape/src/array.js ***!
    \********************************************/
  /*! exports provided: slice, default */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slice", function() { return slice; });
  var slice = Array.prototype.slice;
  
  /* harmony default export */ __webpack_exports__["default"] = (function(x) {
    return typeof x === "object" && "length" in x
      ? x // Array, TypedArray, NodeList, array-like
      : Array.from(x); // Map, Set, iterable, string, or anything else
  });
  
  
  /***/ }),
  
  /***/ "./node_modules/d3-shape/src/constant.js":
  /*!***********************************************!*\
    !*** ./node_modules/d3-shape/src/constant.js ***!
    \***********************************************/
  /*! exports provided: default */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony default export */ __webpack_exports__["default"] = (function(x) {
    return function constant() {
      return x;
    };
  });
  
  
  /***/ }),
  
  /***/ "./node_modules/d3-shape/src/curve/basis.js":
  /*!**************************************************!*\
    !*** ./node_modules/d3-shape/src/curve/basis.js ***!
    \**************************************************/
  /*! exports provided: point, Basis, default */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "point", function() { return point; });
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Basis", function() { return Basis; });
  function point(that, x, y) {
    that._context.bezierCurveTo(
      (2 * that._x0 + that._x1) / 3,
      (2 * that._y0 + that._y1) / 3,
      (that._x0 + 2 * that._x1) / 3,
      (that._y0 + 2 * that._y1) / 3,
      (that._x0 + 4 * that._x1 + x) / 6,
      (that._y0 + 4 * that._y1 + y) / 6
    );
  }
  
  function Basis(context) {
    this._context = context;
  }
  
  Basis.prototype = {
    areaStart: function() {
      this._line = 0;
    },
    areaEnd: function() {
      this._line = NaN;
    },
    lineStart: function() {
      this._x0 = this._x1 =
      this._y0 = this._y1 = NaN;
      this._point = 0;
    },
    lineEnd: function() {
      switch (this._point) {
        case 3: point(this, this._x1, this._y1); // falls through
        case 2: this._context.lineTo(this._x1, this._y1); break;
      }
      if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
      this._line = 1 - this._line;
    },
    point: function(x, y) {
      x = +x, y = +y;
      switch (this._point) {
        case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
        case 1: this._point = 2; break;
        case 2: this._point = 3; this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6); // falls through
        default: point(this, x, y); break;
      }
      this._x0 = this._x1, this._x1 = x;
      this._y0 = this._y1, this._y1 = y;
    }
  };
  
  /* harmony default export */ __webpack_exports__["default"] = (function(context) {
    return new Basis(context);
  });
  
  
  /***/ }),
  
  /***/ "./node_modules/d3-shape/src/curve/basisClosed.js":
  /*!********************************************************!*\
    !*** ./node_modules/d3-shape/src/curve/basisClosed.js ***!
    \********************************************************/
  /*! exports provided: default */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony import */ var _noop_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../noop.js */ "./node_modules/d3-shape/src/noop.js");
  /* harmony import */ var _basis_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basis.js */ "./node_modules/d3-shape/src/curve/basis.js");
  
  
  
  function BasisClosed(context) {
    this._context = context;
  }
  
  BasisClosed.prototype = {
    areaStart: _noop_js__WEBPACK_IMPORTED_MODULE_0__["default"],
    areaEnd: _noop_js__WEBPACK_IMPORTED_MODULE_0__["default"],
    lineStart: function() {
      this._x0 = this._x1 = this._x2 = this._x3 = this._x4 =
      this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN;
      this._point = 0;
    },
    lineEnd: function() {
      switch (this._point) {
        case 1: {
          this._context.moveTo(this._x2, this._y2);
          this._context.closePath();
          break;
        }
        case 2: {
          this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3);
          this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3);
          this._context.closePath();
          break;
        }
        case 3: {
          this.point(this._x2, this._y2);
          this.point(this._x3, this._y3);
          this.point(this._x4, this._y4);
          break;
        }
      }
    },
    point: function(x, y) {
      x = +x, y = +y;
      switch (this._point) {
        case 0: this._point = 1; this._x2 = x, this._y2 = y; break;
        case 1: this._point = 2; this._x3 = x, this._y3 = y; break;
        case 2: this._point = 3; this._x4 = x, this._y4 = y; this._context.moveTo((this._x0 + 4 * this._x1 + x) / 6, (this._y0 + 4 * this._y1 + y) / 6); break;
        default: Object(_basis_js__WEBPACK_IMPORTED_MODULE_1__["point"])(this, x, y); break;
      }
      this._x0 = this._x1, this._x1 = x;
      this._y0 = this._y1, this._y1 = y;
    }
  };
  
  /* harmony default export */ __webpack_exports__["default"] = (function(context) {
    return new BasisClosed(context);
  });
  
  
  /***/ }),
  
  /***/ "./node_modules/d3-shape/src/curve/basisOpen.js":
  /*!******************************************************!*\
    !*** ./node_modules/d3-shape/src/curve/basisOpen.js ***!
    \******************************************************/
  /*! exports provided: default */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony import */ var _basis_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basis.js */ "./node_modules/d3-shape/src/curve/basis.js");
  
  
  function BasisOpen(context) {
    this._context = context;
  }
  
  BasisOpen.prototype = {
    areaStart: function() {
      this._line = 0;
    },
    areaEnd: function() {
      this._line = NaN;
    },
    lineStart: function() {
      this._x0 = this._x1 =
      this._y0 = this._y1 = NaN;
      this._point = 0;
    },
    lineEnd: function() {
      if (this._line || (this._line !== 0 && this._point === 3)) this._context.closePath();
      this._line = 1 - this._line;
    },
    point: function(x, y) {
      x = +x, y = +y;
      switch (this._point) {
        case 0: this._point = 1; break;
        case 1: this._point = 2; break;
        case 2: this._point = 3; var x0 = (this._x0 + 4 * this._x1 + x) / 6, y0 = (this._y0 + 4 * this._y1 + y) / 6; this._line ? this._context.lineTo(x0, y0) : this._context.moveTo(x0, y0); break;
        case 3: this._point = 4; // falls through
        default: Object(_basis_js__WEBPACK_IMPORTED_MODULE_0__["point"])(this, x, y); break;
      }
      this._x0 = this._x1, this._x1 = x;
      this._y0 = this._y1, this._y1 = y;
    }
  };
  
  /* harmony default export */ __webpack_exports__["default"] = (function(context) {
    return new BasisOpen(context);
  });
  
  
  /***/ }),
  
  /***/ "./node_modules/d3-shape/src/curve/bump.js":
  /*!*************************************************!*\
    !*** ./node_modules/d3-shape/src/curve/bump.js ***!
    \*************************************************/
  /*! exports provided: bumpX, bumpY */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bumpX", function() { return bumpX; });
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bumpY", function() { return bumpY; });
  class Bump {
    constructor(context, x) {
      this._context = context;
      this._x = x;
    }
    areaStart() {
      this._line = 0;
    }
    areaEnd() {
      this._line = NaN;
    }
    lineStart() {
      this._point = 0;
    }
    lineEnd() {
      if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
      this._line = 1 - this._line;
    }
    point(x, y) {
      x = +x, y = +y;
      switch (this._point) {
        case 0: {
          this._point = 1;
          if (this._line) this._context.lineTo(x, y);
          else this._context.moveTo(x, y);
          break;
        }
        case 1: this._point = 2; // falls through
        default: {
          if (this._x) this._context.bezierCurveTo(this._x0 = (this._x0 + x) / 2, this._y0, this._x0, y, x, y);
          else this._context.bezierCurveTo(this._x0, this._y0 = (this._y0 + y) / 2, x, this._y0, x, y);
          break;
        }
      }
      this._x0 = x, this._y0 = y;
    }
  }
  
  function bumpX(context) {
    return new Bump(context, true);
  }
  
  function bumpY(context) {
    return new Bump(context, false);
  }
  
  
  /***/ }),
  
  /***/ "./node_modules/d3-shape/src/curve/bundle.js":
  /*!***************************************************!*\
    !*** ./node_modules/d3-shape/src/curve/bundle.js ***!
    \***************************************************/
  /*! exports provided: default */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony import */ var _basis_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basis.js */ "./node_modules/d3-shape/src/curve/basis.js");
  
  
  function Bundle(context, beta) {
    this._basis = new _basis_js__WEBPACK_IMPORTED_MODULE_0__["Basis"](context);
    this._beta = beta;
  }
  
  Bundle.prototype = {
    lineStart: function() {
      this._x = [];
      this._y = [];
      this._basis.lineStart();
    },
    lineEnd: function() {
      var x = this._x,
          y = this._y,
          j = x.length - 1;
  
      if (j > 0) {
        var x0 = x[0],
            y0 = y[0],
            dx = x[j] - x0,
            dy = y[j] - y0,
            i = -1,
            t;
  
        while (++i <= j) {
          t = i / j;
          this._basis.point(
            this._beta * x[i] + (1 - this._beta) * (x0 + t * dx),
            this._beta * y[i] + (1 - this._beta) * (y0 + t * dy)
          );
        }
      }
  
      this._x = this._y = null;
      this._basis.lineEnd();
    },
    point: function(x, y) {
      this._x.push(+x);
      this._y.push(+y);
    }
  };
  
  /* harmony default export */ __webpack_exports__["default"] = ((function custom(beta) {
  
    function bundle(context) {
      return beta === 1 ? new _basis_js__WEBPACK_IMPORTED_MODULE_0__["Basis"](context) : new Bundle(context, beta);
    }
  
    bundle.beta = function(beta) {
      return custom(+beta);
    };
  
    return bundle;
  })(0.85));
  
  
  /***/ }),
  
  /***/ "./node_modules/d3-shape/src/curve/cardinal.js":
  /*!*****************************************************!*\
    !*** ./node_modules/d3-shape/src/curve/cardinal.js ***!
    \*****************************************************/
  /*! exports provided: point, Cardinal, default */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "point", function() { return point; });
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cardinal", function() { return Cardinal; });
  function point(that, x, y) {
    that._context.bezierCurveTo(
      that._x1 + that._k * (that._x2 - that._x0),
      that._y1 + that._k * (that._y2 - that._y0),
      that._x2 + that._k * (that._x1 - x),
      that._y2 + that._k * (that._y1 - y),
      that._x2,
      that._y2
    );
  }
  
  function Cardinal(context, tension) {
    this._context = context;
    this._k = (1 - tension) / 6;
  }
  
  Cardinal.prototype = {
    areaStart: function() {
      this._line = 0;
    },
    areaEnd: function() {
      this._line = NaN;
    },
    lineStart: function() {
      this._x0 = this._x1 = this._x2 =
      this._y0 = this._y1 = this._y2 = NaN;
      this._point = 0;
    },
    lineEnd: function() {
      switch (this._point) {
        case 2: this._context.lineTo(this._x2, this._y2); break;
        case 3: point(this, this._x1, this._y1); break;
      }
      if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
      this._line = 1 - this._line;
    },
    point: function(x, y) {
      x = +x, y = +y;
      switch (this._point) {
        case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
        case 1: this._point = 2; this._x1 = x, this._y1 = y; break;
        case 2: this._point = 3; // falls through
        default: point(this, x, y); break;
      }
      this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
      this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
    }
  };
  
  /* harmony default export */ __webpack_exports__["default"] = ((function custom(tension) {
  
    function cardinal(context) {
      return new Cardinal(context, tension);
    }
  
    cardinal.tension = function(tension) {
      return custom(+tension);
    };
  
    return cardinal;
  })(0));
  
  
  /***/ }),
  
  /***/ "./node_modules/d3-shape/src/curve/cardinalClosed.js":
  /*!***********************************************************!*\
    !*** ./node_modules/d3-shape/src/curve/cardinalClosed.js ***!
    \***********************************************************/
  /*! exports provided: CardinalClosed, default */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardinalClosed", function() { return CardinalClosed; });
  /* harmony import */ var _noop_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../noop.js */ "./node_modules/d3-shape/src/noop.js");
  /* harmony import */ var _cardinal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cardinal.js */ "./node_modules/d3-shape/src/curve/cardinal.js");
  
  
  
  function CardinalClosed(context, tension) {
    this._context = context;
    this._k = (1 - tension) / 6;
  }
  
  CardinalClosed.prototype = {
    areaStart: _noop_js__WEBPACK_IMPORTED_MODULE_0__["default"],
    areaEnd: _noop_js__WEBPACK_IMPORTED_MODULE_0__["default"],
    lineStart: function() {
      this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 =
      this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN;
      this._point = 0;
    },
    lineEnd: function() {
      switch (this._point) {
        case 1: {
          this._context.moveTo(this._x3, this._y3);
          this._context.closePath();
          break;
        }
        case 2: {
          this._context.lineTo(this._x3, this._y3);
          this._context.closePath();
          break;
        }
        case 3: {
          this.point(this._x3, this._y3);
          this.point(this._x4, this._y4);
          this.point(this._x5, this._y5);
          break;
        }
      }
    },
    point: function(x, y) {
      x = +x, y = +y;
      switch (this._point) {
        case 0: this._point = 1; this._x3 = x, this._y3 = y; break;
        case 1: this._point = 2; this._context.moveTo(this._x4 = x, this._y4 = y); break;
        case 2: this._point = 3; this._x5 = x, this._y5 = y; break;
        default: Object(_cardinal_js__WEBPACK_IMPORTED_MODULE_1__["point"])(this, x, y); break;
      }
      this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
      this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
    }
  };
  
  /* harmony default export */ __webpack_exports__["default"] = ((function custom(tension) {
  
    function cardinal(context) {
      return new CardinalClosed(context, tension);
    }
  
    cardinal.tension = function(tension) {
      return custom(+tension);
    };
  
    return cardinal;
  })(0));
  
  
  /***/ }),
  
  /***/ "./node_modules/d3-shape/src/curve/cardinalOpen.js":
  /*!*********************************************************!*\
    !*** ./node_modules/d3-shape/src/curve/cardinalOpen.js ***!
    \*********************************************************/
  /*! exports provided: CardinalOpen, default */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardinalOpen", function() { return CardinalOpen; });
  /* harmony import */ var _cardinal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cardinal.js */ "./node_modules/d3-shape/src/curve/cardinal.js");
  
  
  function CardinalOpen(context, tension) {
    this._context = context;
    this._k = (1 - tension) / 6;
  }
  
  CardinalOpen.prototype = {
    areaStart: function() {
      this._line = 0;
    },
    areaEnd: function() {
      this._line = NaN;
    },
    lineStart: function() {
      this._x0 = this._x1 = this._x2 =
      this._y0 = this._y1 = this._y2 = NaN;
      this._point = 0;
    },
    lineEnd: function() {
      if (this._line || (this._line !== 0 && this._point === 3)) this._context.closePath();
      this._line = 1 - this._line;
    },
    point: function(x, y) {
      x = +x, y = +y;
      switch (this._point) {
        case 0: this._point = 1; break;
        case 1: this._point = 2; break;
        case 2: this._point = 3; this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2); break;
        case 3: this._point = 4; // falls through
        default: Object(_cardinal_js__WEBPACK_IMPORTED_MODULE_0__["point"])(this, x, y); break;
      }
      this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
      this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
    }
  };
  
  /* harmony default export */ __webpack_exports__["default"] = ((function custom(tension) {
  
    function cardinal(context) {
      return new CardinalOpen(context, tension);
    }
  
    cardinal.tension = function(tension) {
      return custom(+tension);
    };
  
    return cardinal;
  })(0));
  
  
  /***/ }),
  
  /***/ "./node_modules/d3-shape/src/curve/catmullRom.js":
  /*!*******************************************************!*\
    !*** ./node_modules/d3-shape/src/curve/catmullRom.js ***!
    \*******************************************************/
  /*! exports provided: point, default */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "point", function() { return point; });
  /* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../math.js */ "./node_modules/d3-shape/src/math.js");
  /* harmony import */ var _cardinal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cardinal.js */ "./node_modules/d3-shape/src/curve/cardinal.js");
  
  
  
  function point(that, x, y) {
    var x1 = that._x1,
        y1 = that._y1,
        x2 = that._x2,
        y2 = that._y2;
  
    if (that._l01_a > _math_js__WEBPACK_IMPORTED_MODULE_0__["epsilon"]) {
      var a = 2 * that._l01_2a + 3 * that._l01_a * that._l12_a + that._l12_2a,
          n = 3 * that._l01_a * (that._l01_a + that._l12_a);
      x1 = (x1 * a - that._x0 * that._l12_2a + that._x2 * that._l01_2a) / n;
      y1 = (y1 * a - that._y0 * that._l12_2a + that._y2 * that._l01_2a) / n;
    }
  
    if (that._l23_a > _math_js__WEBPACK_IMPORTED_MODULE_0__["epsilon"]) {
      var b = 2 * that._l23_2a + 3 * that._l23_a * that._l12_a + that._l12_2a,
          m = 3 * that._l23_a * (that._l23_a + that._l12_a);
      x2 = (x2 * b + that._x1 * that._l23_2a - x * that._l12_2a) / m;
      y2 = (y2 * b + that._y1 * that._l23_2a - y * that._l12_2a) / m;
    }
  
    that._context.bezierCurveTo(x1, y1, x2, y2, that._x2, that._y2);
  }
  
  function CatmullRom(context, alpha) {
    this._context = context;
    this._alpha = alpha;
  }
  
  CatmullRom.prototype = {
    areaStart: function() {
      this._line = 0;
    },
    areaEnd: function() {
      this._line = NaN;
    },
    lineStart: function() {
      this._x0 = this._x1 = this._x2 =
      this._y0 = this._y1 = this._y2 = NaN;
      this._l01_a = this._l12_a = this._l23_a =
      this._l01_2a = this._l12_2a = this._l23_2a =
      this._point = 0;
    },
    lineEnd: function() {
      switch (this._point) {
        case 2: this._context.lineTo(this._x2, this._y2); break;
        case 3: this.point(this._x2, this._y2); break;
      }
      if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
      this._line = 1 - this._line;
    },
    point: function(x, y) {
      x = +x, y = +y;
  
      if (this._point) {
        var x23 = this._x2 - x,
            y23 = this._y2 - y;
        this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
      }
  
      switch (this._point) {
        case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
        case 1: this._point = 2; break;
        case 2: this._point = 3; // falls through
        default: point(this, x, y); break;
      }
  
      this._l01_a = this._l12_a, this._l12_a = this._l23_a;
      this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
      this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
      this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
    }
  };
  
  /* harmony default export */ __webpack_exports__["default"] = ((function custom(alpha) {
  
    function catmullRom(context) {
      return alpha ? new CatmullRom(context, alpha) : new _cardinal_js__WEBPACK_IMPORTED_MODULE_1__["Cardinal"](context, 0);
    }
  
    catmullRom.alpha = function(alpha) {
      return custom(+alpha);
    };
  
    return catmullRom;
  })(0.5));
  
  
  /***/ }),
  
  /***/ "./node_modules/d3-shape/src/curve/catmullRomClosed.js":
  /*!*************************************************************!*\
    !*** ./node_modules/d3-shape/src/curve/catmullRomClosed.js ***!
    \*************************************************************/
  /*! exports provided: default */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony import */ var _cardinalClosed_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cardinalClosed.js */ "./node_modules/d3-shape/src/curve/cardinalClosed.js");
  /* harmony import */ var _noop_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../noop.js */ "./node_modules/d3-shape/src/noop.js");
  /* harmony import */ var _catmullRom_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./catmullRom.js */ "./node_modules/d3-shape/src/curve/catmullRom.js");
  
  
  
  
  function CatmullRomClosed(context, alpha) {
    this._context = context;
    this._alpha = alpha;
  }
  
  CatmullRomClosed.prototype = {
    areaStart: _noop_js__WEBPACK_IMPORTED_MODULE_1__["default"],
    areaEnd: _noop_js__WEBPACK_IMPORTED_MODULE_1__["default"],
    lineStart: function() {
      this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 =
      this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN;
      this._l01_a = this._l12_a = this._l23_a =
      this._l01_2a = this._l12_2a = this._l23_2a =
      this._point = 0;
    },
    lineEnd: function() {
      switch (this._point) {
        case 1: {
          this._context.moveTo(this._x3, this._y3);
          this._context.closePath();
          break;
        }
        case 2: {
          this._context.lineTo(this._x3, this._y3);
          this._context.closePath();
          break;
        }
        case 3: {
          this.point(this._x3, this._y3);
          this.point(this._x4, this._y4);
          this.point(this._x5, this._y5);
          break;
        }
      }
    },
    point: function(x, y) {
      x = +x, y = +y;
  
      if (this._point) {
        var x23 = this._x2 - x,
            y23 = this._y2 - y;
        this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
      }
  
      switch (this._point) {
        case 0: this._point = 1; this._x3 = x, this._y3 = y; break;
        case 1: this._point = 2; this._context.moveTo(this._x4 = x, this._y4 = y); break;
        case 2: this._point = 3; this._x5 = x, this._y5 = y; break;
        default: Object(_catmullRom_js__WEBPACK_IMPORTED_MODULE_2__["point"])(this, x, y); break;
      }
  
      this._l01_a = this._l12_a, this._l12_a = this._l23_a;
      this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
      this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
      this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
    }
  };
  
  /* harmony default export */ __webpack_exports__["default"] = ((function custom(alpha) {
  
    function catmullRom(context) {
      return alpha ? new CatmullRomClosed(context, alpha) : new _cardinalClosed_js__WEBPACK_IMPORTED_MODULE_0__["CardinalClosed"](context, 0);
    }
  
    catmullRom.alpha = function(alpha) {
      return custom(+alpha);
    };
  
    return catmullRom;
  })(0.5));
  
  
  /***/ }),
  
  /***/ "./node_modules/d3-shape/src/curve/catmullRomOpen.js":
  /*!***********************************************************!*\
    !*** ./node_modules/d3-shape/src/curve/catmullRomOpen.js ***!
    \***********************************************************/
  /*! exports provided: default */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony import */ var _cardinalOpen_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cardinalOpen.js */ "./node_modules/d3-shape/src/curve/cardinalOpen.js");
  /* harmony import */ var _catmullRom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./catmullRom.js */ "./node_modules/d3-shape/src/curve/catmullRom.js");
  
  
  
  function CatmullRomOpen(context, alpha) {
    this._context = context;
    this._alpha = alpha;
  }
  
  CatmullRomOpen.prototype = {
    areaStart: function() {
      this._line = 0;
    },
    areaEnd: function() {
      this._line = NaN;
    },
    lineStart: function() {
      this._x0 = this._x1 = this._x2 =
      this._y0 = this._y1 = this._y2 = NaN;
      this._l01_a = this._l12_a = this._l23_a =
      this._l01_2a = this._l12_2a = this._l23_2a =
      this._point = 0;
    },
    lineEnd: function() {
      if (this._line || (this._line !== 0 && this._point === 3)) this._context.closePath();
      this._line = 1 - this._line;
    },
    point: function(x, y) {
      x = +x, y = +y;
  
      if (this._point) {
        var x23 = this._x2 - x,
            y23 = this._y2 - y;
        this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
      }
  
      switch (this._point) {
        case 0: this._point = 1; break;
        case 1: this._point = 2; break;
        case 2: this._point = 3; this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2); break;
        case 3: this._point = 4; // falls through
        default: Object(_catmullRom_js__WEBPACK_IMPORTED_MODULE_1__["point"])(this, x, y); break;
      }
  
      this._l01_a = this._l12_a, this._l12_a = this._l23_a;
      this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
      this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
      this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
    }
  };
  
  /* harmony default export */ __webpack_exports__["default"] = ((function custom(alpha) {
  
    function catmullRom(context) {
      return alpha ? new CatmullRomOpen(context, alpha) : new _cardinalOpen_js__WEBPACK_IMPORTED_MODULE_0__["CardinalOpen"](context, 0);
    }
  
    catmullRom.alpha = function(alpha) {
      return custom(+alpha);
    };
  
    return catmullRom;
  })(0.5));
  
  
  /***/ }),
  
  /***/ "./node_modules/d3-shape/src/curve/linear.js":
  /*!***************************************************!*\
    !*** ./node_modules/d3-shape/src/curve/linear.js ***!
    \***************************************************/
  /*! exports provided: default */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  function Linear(context) {
    this._context = context;
  }
  
  Linear.prototype = {
    areaStart: function() {
      this._line = 0;
    },
    areaEnd: function() {
      this._line = NaN;
    },
    lineStart: function() {
      this._point = 0;
    },
    lineEnd: function() {
      if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
      this._line = 1 - this._line;
    },
    point: function(x, y) {
      x = +x, y = +y;
      switch (this._point) {
        case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
        case 1: this._point = 2; // falls through
        default: this._context.lineTo(x, y); break;
      }
    }
  };
  
  /* harmony default export */ __webpack_exports__["default"] = (function(context) {
    return new Linear(context);
  });
  
  
  /***/ }),
  
  /***/ "./node_modules/d3-shape/src/curve/linearClosed.js":
  /*!*********************************************************!*\
    !*** ./node_modules/d3-shape/src/curve/linearClosed.js ***!
    \*********************************************************/
  /*! exports provided: default */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony import */ var _noop_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../noop.js */ "./node_modules/d3-shape/src/noop.js");
  
  
  function LinearClosed(context) {
    this._context = context;
  }
  
  LinearClosed.prototype = {
    areaStart: _noop_js__WEBPACK_IMPORTED_MODULE_0__["default"],
    areaEnd: _noop_js__WEBPACK_IMPORTED_MODULE_0__["default"],
    lineStart: function() {
      this._point = 0;
    },
    lineEnd: function() {
      if (this._point) this._context.closePath();
    },
    point: function(x, y) {
      x = +x, y = +y;
      if (this._point) this._context.lineTo(x, y);
      else this._point = 1, this._context.moveTo(x, y);
    }
  };
  
  /* harmony default export */ __webpack_exports__["default"] = (function(context) {
    return new LinearClosed(context);
  });
  
  
  /***/ }),
  
  /***/ "./node_modules/d3-shape/src/curve/monotone.js":
  /*!*****************************************************!*\
    !*** ./node_modules/d3-shape/src/curve/monotone.js ***!
    \*****************************************************/
  /*! exports provided: monotoneX, monotoneY */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "monotoneX", function() { return monotoneX; });
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "monotoneY", function() { return monotoneY; });
  function sign(x) {
    return x < 0 ? -1 : 1;
  }
  
  // Calculate the slopes of the tangents (Hermite-type interpolation) based on
  // the following paper: Steffen, M. 1990. A Simple Method for Monotonic
  // Interpolation in One Dimension. Astronomy and Astrophysics, Vol. 239, NO.
  // NOV(II), P. 443, 1990.
  function slope3(that, x2, y2) {
    var h0 = that._x1 - that._x0,
        h1 = x2 - that._x1,
        s0 = (that._y1 - that._y0) / (h0 || h1 < 0 && -0),
        s1 = (y2 - that._y1) / (h1 || h0 < 0 && -0),
        p = (s0 * h1 + s1 * h0) / (h0 + h1);
    return (sign(s0) + sign(s1)) * Math.min(Math.abs(s0), Math.abs(s1), 0.5 * Math.abs(p)) || 0;
  }
  
  // Calculate a one-sided slope.
  function slope2(that, t) {
    var h = that._x1 - that._x0;
    return h ? (3 * (that._y1 - that._y0) / h - t) / 2 : t;
  }
  
  // According to https://en.wikipedia.org/wiki/Cubic_Hermite_spline#Representations
  // "you can express cubic Hermite interpolation in terms of cubic Bézier curves
  // with respect to the four values p0, p0 + m0 / 3, p1 - m1 / 3, p1".
  function point(that, t0, t1) {
    var x0 = that._x0,
        y0 = that._y0,
        x1 = that._x1,
        y1 = that._y1,
        dx = (x1 - x0) / 3;
    that._context.bezierCurveTo(x0 + dx, y0 + dx * t0, x1 - dx, y1 - dx * t1, x1, y1);
  }
  
  function MonotoneX(context) {
    this._context = context;
  }
  
  MonotoneX.prototype = {
    areaStart: function() {
      this._line = 0;
    },
    areaEnd: function() {
      this._line = NaN;
    },
    lineStart: function() {
      this._x0 = this._x1 =
      this._y0 = this._y1 =
      this._t0 = NaN;
      this._point = 0;
    },
    lineEnd: function() {
      switch (this._point) {
        case 2: this._context.lineTo(this._x1, this._y1); break;
        case 3: point(this, this._t0, slope2(this, this._t0)); break;
      }
      if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
      this._line = 1 - this._line;
    },
    point: function(x, y) {
      var t1 = NaN;
  
      x = +x, y = +y;
      if (x === this._x1 && y === this._y1) return; // Ignore coincident points.
      switch (this._point) {
        case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
        case 1: this._point = 2; break;
        case 2: this._point = 3; point(this, slope2(this, t1 = slope3(this, x, y)), t1); break;
        default: point(this, this._t0, t1 = slope3(this, x, y)); break;
      }
  
      this._x0 = this._x1, this._x1 = x;
      this._y0 = this._y1, this._y1 = y;
      this._t0 = t1;
    }
  }
  
  function MonotoneY(context) {
    this._context = new ReflectContext(context);
  }
  
  (MonotoneY.prototype = Object.create(MonotoneX.prototype)).point = function(x, y) {
    MonotoneX.prototype.point.call(this, y, x);
  };
  
  function ReflectContext(context) {
    this._context = context;
  }
  
  ReflectContext.prototype = {
    moveTo: function(x, y) { this._context.moveTo(y, x); },
    closePath: function() { this._context.closePath(); },
    lineTo: function(x, y) { this._context.lineTo(y, x); },
    bezierCurveTo: function(x1, y1, x2, y2, x, y) { this._context.bezierCurveTo(y1, x1, y2, x2, y, x); }
  };
  
  function monotoneX(context) {
    return new MonotoneX(context);
  }
  
  function monotoneY(context) {
    return new MonotoneY(context);
  }
  
  
  /***/ }),
  
  /***/ "./node_modules/d3-shape/src/curve/natural.js":
  /*!****************************************************!*\
    !*** ./node_modules/d3-shape/src/curve/natural.js ***!
    \****************************************************/
  /*! exports provided: default */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  function Natural(context) {
    this._context = context;
  }
  
  Natural.prototype = {
    areaStart: function() {
      this._line = 0;
    },
    areaEnd: function() {
      this._line = NaN;
    },
    lineStart: function() {
      this._x = [];
      this._y = [];
    },
    lineEnd: function() {
      var x = this._x,
          y = this._y,
          n = x.length;
  
      if (n) {
        this._line ? this._context.lineTo(x[0], y[0]) : this._context.moveTo(x[0], y[0]);
        if (n === 2) {
          this._context.lineTo(x[1], y[1]);
        } else {
          var px = controlPoints(x),
              py = controlPoints(y);
          for (var i0 = 0, i1 = 1; i1 < n; ++i0, ++i1) {
            this._context.bezierCurveTo(px[0][i0], py[0][i0], px[1][i0], py[1][i0], x[i1], y[i1]);
          }
        }
      }
  
      if (this._line || (this._line !== 0 && n === 1)) this._context.closePath();
      this._line = 1 - this._line;
      this._x = this._y = null;
    },
    point: function(x, y) {
      this._x.push(+x);
      this._y.push(+y);
    }
  };
  
  // See https://www.particleincell.com/2012/bezier-splines/ for derivation.
  function controlPoints(x) {
    var i,
        n = x.length - 1,
        m,
        a = new Array(n),
        b = new Array(n),
        r = new Array(n);
    a[0] = 0, b[0] = 2, r[0] = x[0] + 2 * x[1];
    for (i = 1; i < n - 1; ++i) a[i] = 1, b[i] = 4, r[i] = 4 * x[i] + 2 * x[i + 1];
    a[n - 1] = 2, b[n - 1] = 7, r[n - 1] = 8 * x[n - 1] + x[n];
    for (i = 1; i < n; ++i) m = a[i] / b[i - 1], b[i] -= m, r[i] -= m * r[i - 1];
    a[n - 1] = r[n - 1] / b[n - 1];
    for (i = n - 2; i >= 0; --i) a[i] = (r[i] - a[i + 1]) / b[i];
    b[n - 1] = (x[n] + a[n - 1]) / 2;
    for (i = 0; i < n - 1; ++i) b[i] = 2 * x[i + 1] - a[i + 1];
    return [a, b];
  }
  
  /* harmony default export */ __webpack_exports__["default"] = (function(context) {
    return new Natural(context);
  });
  
  
  /***/ }),
  
  /***/ "./node_modules/d3-shape/src/curve/radial.js":
  /*!***************************************************!*\
    !*** ./node_modules/d3-shape/src/curve/radial.js ***!
    \***************************************************/
  /*! exports provided: curveRadialLinear, default */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "curveRadialLinear", function() { return curveRadialLinear; });
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return curveRadial; });
  /* harmony import */ var _linear_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./linear.js */ "./node_modules/d3-shape/src/curve/linear.js");
  
  
  var curveRadialLinear = curveRadial(_linear_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
  
  function Radial(curve) {
    this._curve = curve;
  }
  
  Radial.prototype = {
    areaStart: function() {
      this._curve.areaStart();
    },
    areaEnd: function() {
      this._curve.areaEnd();
    },
    lineStart: function() {
      this._curve.lineStart();
    },
    lineEnd: function() {
      this._curve.lineEnd();
    },
    point: function(a, r) {
      this._curve.point(r * Math.sin(a), r * -Math.cos(a));
    }
  };
  
  function curveRadial(curve) {
  
    function radial(context) {
      return new Radial(curve(context));
    }
  
    radial._curve = curve;
  
    return radial;
  }
  
  
  /***/ }),
  
  /***/ "./node_modules/d3-shape/src/curve/step.js":
  /*!*************************************************!*\
    !*** ./node_modules/d3-shape/src/curve/step.js ***!
    \*************************************************/
  /*! exports provided: default, stepBefore, stepAfter */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stepBefore", function() { return stepBefore; });
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stepAfter", function() { return stepAfter; });
  function Step(context, t) {
    this._context = context;
    this._t = t;
  }
  
  Step.prototype = {
    areaStart: function() {
      this._line = 0;
    },
    areaEnd: function() {
      this._line = NaN;
    },
    lineStart: function() {
      this._x = this._y = NaN;
      this._point = 0;
    },
    lineEnd: function() {
      if (0 < this._t && this._t < 1 && this._point === 2) this._context.lineTo(this._x, this._y);
      if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
      if (this._line >= 0) this._t = 1 - this._t, this._line = 1 - this._line;
    },
    point: function(x, y) {
      x = +x, y = +y;
      switch (this._point) {
        case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
        case 1: this._point = 2; // falls through
        default: {
          if (this._t <= 0) {
            this._context.lineTo(this._x, y);
            this._context.lineTo(x, y);
          } else {
            var x1 = this._x * (1 - this._t) + x * this._t;
            this._context.lineTo(x1, this._y);
            this._context.lineTo(x1, y);
          }
          break;
        }
      }
      this._x = x, this._y = y;
    }
  };
  
  /* harmony default export */ __webpack_exports__["default"] = (function(context) {
    return new Step(context, 0.5);
  });
  
  function stepBefore(context) {
    return new Step(context, 0);
  }
  
  function stepAfter(context) {
    return new Step(context, 1);
  }
  
  
  /***/ }),
  
  /***/ "./node_modules/d3-shape/src/descending.js":
  /*!*************************************************!*\
    !*** ./node_modules/d3-shape/src/descending.js ***!
    \*************************************************/
  /*! exports provided: default */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony default export */ __webpack_exports__["default"] = (function(a, b) {
    return b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
  });
  
  
  /***/ }),
  
  /***/ "./node_modules/d3-shape/src/identity.js":
  /*!***********************************************!*\
    !*** ./node_modules/d3-shape/src/identity.js ***!
    \***********************************************/
  /*! exports provided: default */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony default export */ __webpack_exports__["default"] = (function(d) {
    return d;
  });
  
  
  /***/ }),
  
  /***/ "./node_modules/d3-shape/src/index.js":
  /*!********************************************!*\
    !*** ./node_modules/d3-shape/src/index.js ***!
    \********************************************/
  /*! exports provided: arc, area, line, pie, areaRadial, radialArea, lineRadial, radialLine, pointRadial, linkHorizontal, linkVertical, linkRadial, symbol, symbols, symbolCircle, symbolCross, symbolDiamond, symbolSquare, symbolStar, symbolTriangle, symbolWye, curveBasisClosed, curveBasisOpen, curveBasis, curveBumpX, curveBumpY, curveBundle, curveCardinalClosed, curveCardinalOpen, curveCardinal, curveCatmullRomClosed, curveCatmullRomOpen, curveCatmullRom, curveLinearClosed, curveLinear, curveMonotoneX, curveMonotoneY, curveNatural, curveStep, curveStepAfter, curveStepBefore, stack, stackOffsetExpand, stackOffsetDiverging, stackOffsetNone, stackOffsetSilhouette, stackOffsetWiggle, stackOrderAppearance, stackOrderAscending, stackOrderDescending, stackOrderInsideOut, stackOrderNone, stackOrderReverse */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony import */ var _arc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arc.js */ "./node_modules/d3-shape/src/arc.js");
  /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "arc", function() { return _arc_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });
  
  /* harmony import */ var _area_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./area.js */ "./node_modules/d3-shape/src/area.js");
  /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "area", function() { return _area_js__WEBPACK_IMPORTED_MODULE_1__["default"]; });
  
  /* harmony import */ var _line_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./line.js */ "./node_modules/d3-shape/src/line.js");
  /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "line", function() { return _line_js__WEBPACK_IMPORTED_MODULE_2__["default"]; });
  
  /* harmony import */ var _pie_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pie.js */ "./node_modules/d3-shape/src/pie.js");
  /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pie", function() { return _pie_js__WEBPACK_IMPORTED_MODULE_3__["default"]; });
  
  /* harmony import */ var _areaRadial_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./areaRadial.js */ "./node_modules/d3-shape/src/areaRadial.js");
  /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "areaRadial", function() { return _areaRadial_js__WEBPACK_IMPORTED_MODULE_4__["default"]; });
  
  /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "radialArea", function() { return _areaRadial_js__WEBPACK_IMPORTED_MODULE_4__["default"]; });
  
  /* harmony import */ var _lineRadial_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lineRadial.js */ "./node_modules/d3-shape/src/lineRadial.js");
  /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lineRadial", function() { return _lineRadial_js__WEBPACK_IMPORTED_MODULE_5__["default"]; });
  
  /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "radialLine", function() { return _lineRadial_js__WEBPACK_IMPORTED_MODULE_5__["default"]; });
  
  /* harmony import */ var _pointRadial_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pointRadial.js */ "./node_modules/d3-shape/src/pointRadial.js");
  /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pointRadial", function() { return _pointRadial_js__WEBPACK_IMPORTED_MODULE_6__["default"]; });
  
  /* harmony import */ var _link_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./link/index.js */ "./node_modules/d3-shape/src/link/index.js");
  /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "linkHorizontal", function() { return _link_index_js__WEBPACK_IMPORTED_MODULE_7__["linkHorizontal"]; });
  
  /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "linkVertical", function() { return _link_index_js__WEBPACK_IMPORTED_MODULE_7__["linkVertical"]; });
  
  /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "linkRadial", function() { return _link_index_js__WEBPACK_IMPORTED_MODULE_7__["linkRadial"]; });
  
  /* harmony import */ var _symbol_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./symbol.js */ "./node_modules/d3-shape/src/symbol.js");
  /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "symbol", function() { return _symbol_js__WEBPACK_IMPORTED_MODULE_8__["default"]; });
  
  /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "symbols", function() { return _symbol_js__WEBPACK_IMPORTED_MODULE_8__["symbols"]; });
  
  /* harmony import */ var _symbol_circle_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./symbol/circle.js */ "./node_modules/d3-shape/src/symbol/circle.js");
  /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "symbolCircle", function() { return _symbol_circle_js__WEBPACK_IMPORTED_MODULE_9__["default"]; });
  
  /* harmony import */ var _symbol_cross_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./symbol/cross.js */ "./node_modules/d3-shape/src/symbol/cross.js");
  /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "symbolCross", function() { return _symbol_cross_js__WEBPACK_IMPORTED_MODULE_10__["default"]; });
  
  /* harmony import */ var _symbol_diamond_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./symbol/diamond.js */ "./node_modules/d3-shape/src/symbol/diamond.js");
  /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "symbolDiamond", function() { return _symbol_diamond_js__WEBPACK_IMPORTED_MODULE_11__["default"]; });
  
  /* harmony import */ var _symbol_square_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./symbol/square.js */ "./node_modules/d3-shape/src/symbol/square.js");
  /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "symbolSquare", function() { return _symbol_square_js__WEBPACK_IMPORTED_MODULE_12__["default"]; });
  
  /* harmony import */ var _symbol_star_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./symbol/star.js */ "./node_modules/d3-shape/src/symbol/star.js");
  /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "symbolStar", function() { return _symbol_star_js__WEBPACK_IMPORTED_MODULE_13__["default"]; });
  
  /* harmony import */ var _symbol_triangle_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./symbol/triangle.js */ "./node_modules/d3-shape/src/symbol/triangle.js");
  /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "symbolTriangle", function() { return _symbol_triangle_js__WEBPACK_IMPORTED_MODULE_14__["default"]; });
  
  /* harmony import */ var _symbol_wye_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./symbol/wye.js */ "./node_modules/d3-shape/src/symbol/wye.js");
  /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "symbolWye", function() { return _symbol_wye_js__WEBPACK_IMPORTED_MODULE_15__["default"]; });
  
  /* harmony import */ var _curve_basisClosed_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./curve/basisClosed.js */ "./node_modules/d3-shape/src/curve/basisClosed.js");
  /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveBasisClosed", function() { return _curve_basisClosed_js__WEBPACK_IMPORTED_MODULE_16__["default"]; });
  
  /* harmony import */ var _curve_basisOpen_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./curve/basisOpen.js */ "./node_modules/d3-shape/src/curve/basisOpen.js");
  /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveBasisOpen", function() { return _curve_basisOpen_js__WEBPACK_IMPORTED_MODULE_17__["default"]; });
  
  /* harmony import */ var _curve_basis_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./curve/basis.js */ "./node_modules/d3-shape/src/curve/basis.js");
  /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveBasis", function() { return _curve_basis_js__WEBPACK_IMPORTED_MODULE_18__["default"]; });
  
  /* harmony import */ var _curve_bump_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./curve/bump.js */ "./node_modules/d3-shape/src/curve/bump.js");
  /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveBumpX", function() { return _curve_bump_js__WEBPACK_IMPORTED_MODULE_19__["bumpX"]; });
  
  /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveBumpY", function() { return _curve_bump_js__WEBPACK_IMPORTED_MODULE_19__["bumpY"]; });
  
  /* harmony import */ var _curve_bundle_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./curve/bundle.js */ "./node_modules/d3-shape/src/curve/bundle.js");
  /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveBundle", function() { return _curve_bundle_js__WEBPACK_IMPORTED_MODULE_20__["default"]; });
  
  /* harmony import */ var _curve_cardinalClosed_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./curve/cardinalClosed.js */ "./node_modules/d3-shape/src/curve/cardinalClosed.js");
  /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveCardinalClosed", function() { return _curve_cardinalClosed_js__WEBPACK_IMPORTED_MODULE_21__["default"]; });
  
  /* harmony import */ var _curve_cardinalOpen_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./curve/cardinalOpen.js */ "./node_modules/d3-shape/src/curve/cardinalOpen.js");
  /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveCardinalOpen", function() { return _curve_cardinalOpen_js__WEBPACK_IMPORTED_MODULE_22__["default"]; });
  
  /* harmony import */ var _curve_cardinal_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./curve/cardinal.js */ "./node_modules/d3-shape/src/curve/cardinal.js");
  /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveCardinal", function() { return _curve_cardinal_js__WEBPACK_IMPORTED_MODULE_23__["default"]; });
  
  /* harmony import */ var _curve_catmullRomClosed_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./curve/catmullRomClosed.js */ "./node_modules/d3-shape/src/curve/catmullRomClosed.js");
  /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveCatmullRomClosed", function() { return _curve_catmullRomClosed_js__WEBPACK_IMPORTED_MODULE_24__["default"]; });
  
  /* harmony import */ var _curve_catmullRomOpen_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./curve/catmullRomOpen.js */ "./node_modules/d3-shape/src/curve/catmullRomOpen.js");
  /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveCatmullRomOpen", function() { return _curve_catmullRomOpen_js__WEBPACK_IMPORTED_MODULE_25__["default"]; });
  
  /* harmony import */ var _curve_catmullRom_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./curve/catmullRom.js */ "./node_modules/d3-shape/src/curve/catmullRom.js");
  /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveCatmullRom", function() { return _curve_catmullRom_js__WEBPACK_IMPORTED_MODULE_26__["default"]; });
  
  /* harmony import */ var _curve_linearClosed_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./curve/linearClosed.js */ "./node_modules/d3-shape/src/curve/linearClosed.js");
  /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveLinearClosed", function() { return _curve_linearClosed_js__WEBPACK_IMPORTED_MODULE_27__["default"]; });
  
  /* harmony import */ var _curve_linear_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./curve/linear.js */ "./node_modules/d3-shape/src/curve/linear.js");
  /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveLinear", function() { return _curve_linear_js__WEBPACK_IMPORTED_MODULE_28__["default"]; });
  
  /* harmony import */ var _curve_monotone_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./curve/monotone.js */ "./node_modules/d3-shape/src/curve/monotone.js");
  /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveMonotoneX", function() { return _curve_monotone_js__WEBPACK_IMPORTED_MODULE_29__["monotoneX"]; });
  
  /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveMonotoneY", function() { return _curve_monotone_js__WEBPACK_IMPORTED_MODULE_29__["monotoneY"]; });
  
  /* harmony import */ var _curve_natural_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./curve/natural.js */ "./node_modules/d3-shape/src/curve/natural.js");
  /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveNatural", function() { return _curve_natural_js__WEBPACK_IMPORTED_MODULE_30__["default"]; });
  
  /* harmony import */ var _curve_step_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./curve/step.js */ "./node_modules/d3-shape/src/curve/step.js");
  /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveStep", function() { return _curve_step_js__WEBPACK_IMPORTED_MODULE_31__["default"]; });
  
  /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveStepAfter", function() { return _curve_step_js__WEBPACK_IMPORTED_MODULE_31__["stepAfter"]; });
  
  /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveStepBefore", function() { return _curve_step_js__WEBPACK_IMPORTED_MODULE_31__["stepBefore"]; });
  
  /* harmony import */ var _stack_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./stack.js */ "./node_modules/d3-shape/src/stack.js");
  /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stack", function() { return _stack_js__WEBPACK_IMPORTED_MODULE_32__["default"]; });
  
  /* harmony import */ var _offset_expand_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./offset/expand.js */ "./node_modules/d3-shape/src/offset/expand.js");
  /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stackOffsetExpand", function() { return _offset_expand_js__WEBPACK_IMPORTED_MODULE_33__["default"]; });
  
  /* harmony import */ var _offset_diverging_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./offset/diverging.js */ "./node_modules/d3-shape/src/offset/diverging.js");
  /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stackOffsetDiverging", function() { return _offset_diverging_js__WEBPACK_IMPORTED_MODULE_34__["default"]; });
  
  /* harmony import */ var _offset_none_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./offset/none.js */ "./node_modules/d3-shape/src/offset/none.js");
  /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stackOffsetNone", function() { return _offset_none_js__WEBPACK_IMPORTED_MODULE_35__["default"]; });
  
  /* harmony import */ var _offset_silhouette_js__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./offset/silhouette.js */ "./node_modules/d3-shape/src/offset/silhouette.js");
  /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stackOffsetSilhouette", function() { return _offset_silhouette_js__WEBPACK_IMPORTED_MODULE_36__["default"]; });
  
  /* harmony import */ var _offset_wiggle_js__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./offset/wiggle.js */ "./node_modules/d3-shape/src/offset/wiggle.js");
  /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stackOffsetWiggle", function() { return _offset_wiggle_js__WEBPACK_IMPORTED_MODULE_37__["default"]; });
  
  /* harmony import */ var _order_appearance_js__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./order/appearance.js */ "./node_modules/d3-shape/src/order/appearance.js");
  /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stackOrderAppearance", function() { return _order_appearance_js__WEBPACK_IMPORTED_MODULE_38__["default"]; });
  
  /* harmony import */ var _order_ascending_js__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./order/ascending.js */ "./node_modules/d3-shape/src/order/ascending.js");
  /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stackOrderAscending", function() { return _order_ascending_js__WEBPACK_IMPORTED_MODULE_39__["default"]; });
  
  /* harmony import */ var _order_descending_js__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./order/descending.js */ "./node_modules/d3-shape/src/order/descending.js");
  /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stackOrderDescending", function() { return _order_descending_js__WEBPACK_IMPORTED_MODULE_40__["default"]; });
  
  /* harmony import */ var _order_insideOut_js__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./order/insideOut.js */ "./node_modules/d3-shape/src/order/insideOut.js");
  /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stackOrderInsideOut", function() { return _order_insideOut_js__WEBPACK_IMPORTED_MODULE_41__["default"]; });
  
  /* harmony import */ var _order_none_js__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./order/none.js */ "./node_modules/d3-shape/src/order/none.js");
  /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stackOrderNone", function() { return _order_none_js__WEBPACK_IMPORTED_MODULE_42__["default"]; });
  
  /* harmony import */ var _order_reverse_js__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./order/reverse.js */ "./node_modules/d3-shape/src/order/reverse.js");
  /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stackOrderReverse", function() { return _order_reverse_js__WEBPACK_IMPORTED_MODULE_43__["default"]; });
  
  
  
  
  
   // Note: radialArea is deprecated!
   // Note: radialLine is deprecated!
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  /***/ }),
  
  /***/ "./node_modules/d3-shape/src/line.js":
  /*!*******************************************!*\
    !*** ./node_modules/d3-shape/src/line.js ***!
    \*******************************************/
  /*! exports provided: default */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony import */ var d3_path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-path */ "./node_modules/d3-path/src/index.js");
  /* harmony import */ var _array_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./array.js */ "./node_modules/d3-shape/src/array.js");
  /* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constant.js */ "./node_modules/d3-shape/src/constant.js");
  /* harmony import */ var _curve_linear_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./curve/linear.js */ "./node_modules/d3-shape/src/curve/linear.js");
  /* harmony import */ var _point_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./point.js */ "./node_modules/d3-shape/src/point.js");
  
  
  
  
  
  
  /* harmony default export */ __webpack_exports__["default"] = (function(x, y) {
    var defined = Object(_constant_js__WEBPACK_IMPORTED_MODULE_2__["default"])(true),
        context = null,
        curve = _curve_linear_js__WEBPACK_IMPORTED_MODULE_3__["default"],
        output = null;
  
    x = typeof x === "function" ? x : (x === undefined) ? _point_js__WEBPACK_IMPORTED_MODULE_4__["x"] : Object(_constant_js__WEBPACK_IMPORTED_MODULE_2__["default"])(x);
    y = typeof y === "function" ? y : (y === undefined) ? _point_js__WEBPACK_IMPORTED_MODULE_4__["y"] : Object(_constant_js__WEBPACK_IMPORTED_MODULE_2__["default"])(y);
  
    function line(data) {
      var i,
          n = (data = Object(_array_js__WEBPACK_IMPORTED_MODULE_1__["default"])(data)).length,
          d,
          defined0 = false,
          buffer;
  
      if (context == null) output = curve(buffer = Object(d3_path__WEBPACK_IMPORTED_MODULE_0__["path"])());
  
      for (i = 0; i <= n; ++i) {
        if (!(i < n && defined(d = data[i], i, data)) === defined0) {
          if (defined0 = !defined0) output.lineStart();
          else output.lineEnd();
        }
        if (defined0) output.point(+x(d, i, data), +y(d, i, data));
      }
  
      if (buffer) return output = null, buffer + "" || null;
    }
  
    line.x = function(_) {
      return arguments.length ? (x = typeof _ === "function" ? _ : Object(_constant_js__WEBPACK_IMPORTED_MODULE_2__["default"])(+_), line) : x;
    };
  
    line.y = function(_) {
      return arguments.length ? (y = typeof _ === "function" ? _ : Object(_constant_js__WEBPACK_IMPORTED_MODULE_2__["default"])(+_), line) : y;
    };
  
    line.defined = function(_) {
      return arguments.length ? (defined = typeof _ === "function" ? _ : Object(_constant_js__WEBPACK_IMPORTED_MODULE_2__["default"])(!!_), line) : defined;
    };
  
    line.curve = function(_) {
      return arguments.length ? (curve = _, context != null && (output = curve(context)), line) : curve;
    };
  
    line.context = function(_) {
      return arguments.length ? (_ == null ? context = output = null : output = curve(context = _), line) : context;
    };
  
    return line;
  });
  
  
  /***/ }),
  
  /***/ "./node_modules/d3-shape/src/lineRadial.js":
  /*!*************************************************!*\
    !*** ./node_modules/d3-shape/src/lineRadial.js ***!
    \*************************************************/
  /*! exports provided: lineRadial, default */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lineRadial", function() { return lineRadial; });
  /* harmony import */ var _curve_radial_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curve/radial.js */ "./node_modules/d3-shape/src/curve/radial.js");
  /* harmony import */ var _line_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./line.js */ "./node_modules/d3-shape/src/line.js");
  
  
  
  function lineRadial(l) {
    var c = l.curve;
  
    l.angle = l.x, delete l.x;
    l.radius = l.y, delete l.y;
  
    l.curve = function(_) {
      return arguments.length ? c(Object(_curve_radial_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_)) : c()._curve;
    };
  
    return l;
  }
  
  /* harmony default export */ __webpack_exports__["default"] = (function() {
    return lineRadial(Object(_line_js__WEBPACK_IMPORTED_MODULE_1__["default"])().curve(_curve_radial_js__WEBPACK_IMPORTED_MODULE_0__["curveRadialLinear"]));
  });
  
  
  /***/ }),
  
  /***/ "./node_modules/d3-shape/src/link/index.js":
  /*!*************************************************!*\
    !*** ./node_modules/d3-shape/src/link/index.js ***!
    \*************************************************/
  /*! exports provided: linkHorizontal, linkVertical, linkRadial */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "linkHorizontal", function() { return linkHorizontal; });
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "linkVertical", function() { return linkVertical; });
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "linkRadial", function() { return linkRadial; });
  /* harmony import */ var d3_path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-path */ "./node_modules/d3-path/src/index.js");
  /* harmony import */ var _array_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../array.js */ "./node_modules/d3-shape/src/array.js");
  /* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constant.js */ "./node_modules/d3-shape/src/constant.js");
  /* harmony import */ var _point_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../point.js */ "./node_modules/d3-shape/src/point.js");
  /* harmony import */ var _pointRadial_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pointRadial.js */ "./node_modules/d3-shape/src/pointRadial.js");
  
  
  
  
  
  
  function linkSource(d) {
    return d.source;
  }
  
  function linkTarget(d) {
    return d.target;
  }
  
  function link(curve) {
    var source = linkSource,
        target = linkTarget,
        x = _point_js__WEBPACK_IMPORTED_MODULE_3__["x"],
        y = _point_js__WEBPACK_IMPORTED_MODULE_3__["y"],
        context = null;
  
    function link() {
      var buffer, argv = _array_js__WEBPACK_IMPORTED_MODULE_1__["slice"].call(arguments), s = source.apply(this, argv), t = target.apply(this, argv);
      if (!context) context = buffer = Object(d3_path__WEBPACK_IMPORTED_MODULE_0__["path"])();
      curve(context, +x.apply(this, (argv[0] = s, argv)), +y.apply(this, argv), +x.apply(this, (argv[0] = t, argv)), +y.apply(this, argv));
      if (buffer) return context = null, buffer + "" || null;
    }
  
    link.source = function(_) {
      return arguments.length ? (source = _, link) : source;
    };
  
    link.target = function(_) {
      return arguments.length ? (target = _, link) : target;
    };
  
    link.x = function(_) {
      return arguments.length ? (x = typeof _ === "function" ? _ : Object(_constant_js__WEBPACK_IMPORTED_MODULE_2__["default"])(+_), link) : x;
    };
  
    link.y = function(_) {
      return arguments.length ? (y = typeof _ === "function" ? _ : Object(_constant_js__WEBPACK_IMPORTED_MODULE_2__["default"])(+_), link) : y;
    };
  
    link.context = function(_) {
      return arguments.length ? ((context = _ == null ? null : _), link) : context;
    };
  
    return link;
  }
  
  function curveHorizontal(context, x0, y0, x1, y1) {
    context.moveTo(x0, y0);
    context.bezierCurveTo(x0 = (x0 + x1) / 2, y0, x0, y1, x1, y1);
  }
  
  function curveVertical(context, x0, y0, x1, y1) {
    context.moveTo(x0, y0);
    context.bezierCurveTo(x0, y0 = (y0 + y1) / 2, x1, y0, x1, y1);
  }
  
  function curveRadial(context, x0, y0, x1, y1) {
    var p0 = Object(_pointRadial_js__WEBPACK_IMPORTED_MODULE_4__["default"])(x0, y0),
        p1 = Object(_pointRadial_js__WEBPACK_IMPORTED_MODULE_4__["default"])(x0, y0 = (y0 + y1) / 2),
        p2 = Object(_pointRadial_js__WEBPACK_IMPORTED_MODULE_4__["default"])(x1, y0),
        p3 = Object(_pointRadial_js__WEBPACK_IMPORTED_MODULE_4__["default"])(x1, y1);
    context.moveTo(p0[0], p0[1]);
    context.bezierCurveTo(p1[0], p1[1], p2[0], p2[1], p3[0], p3[1]);
  }
  
  function linkHorizontal() {
    return link(curveHorizontal);
  }
  
  function linkVertical() {
    return link(curveVertical);
  }
  
  function linkRadial() {
    var l = link(curveRadial);
    l.angle = l.x, delete l.x;
    l.radius = l.y, delete l.y;
    return l;
  }
  
  
  /***/ }),
  
  /***/ "./node_modules/d3-shape/src/math.js":
  /*!*******************************************!*\
    !*** ./node_modules/d3-shape/src/math.js ***!
    \*******************************************/
  /*! exports provided: abs, atan2, cos, max, min, sin, sqrt, epsilon, pi, halfPi, tau, acos, asin */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "abs", function() { return abs; });
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "atan2", function() { return atan2; });
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cos", function() { return cos; });
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "max", function() { return max; });
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "min", function() { return min; });
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sin", function() { return sin; });
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sqrt", function() { return sqrt; });
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "epsilon", function() { return epsilon; });
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pi", function() { return pi; });
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "halfPi", function() { return halfPi; });
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tau", function() { return tau; });
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "acos", function() { return acos; });
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asin", function() { return asin; });
  var abs = Math.abs;
  var atan2 = Math.atan2;
  var cos = Math.cos;
  var max = Math.max;
  var min = Math.min;
  var sin = Math.sin;
  var sqrt = Math.sqrt;
  
  var epsilon = 1e-12;
  var pi = Math.PI;
  var halfPi = pi / 2;
  var tau = 2 * pi;
  
  function acos(x) {
    return x > 1 ? 0 : x < -1 ? pi : Math.acos(x);
  }
  
  function asin(x) {
    return x >= 1 ? halfPi : x <= -1 ? -halfPi : Math.asin(x);
  }
  
  
  /***/ }),
  
  /***/ "./node_modules/d3-shape/src/noop.js":
  /*!*******************************************!*\
    !*** ./node_modules/d3-shape/src/noop.js ***!
    \*******************************************/
  /*! exports provided: default */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony default export */ __webpack_exports__["default"] = (function() {});
  
  
  /***/ }),
  
  /***/ "./node_modules/d3-shape/src/offset/diverging.js":
  /*!*******************************************************!*\
    !*** ./node_modules/d3-shape/src/offset/diverging.js ***!
    \*******************************************************/
  /*! exports provided: default */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony default export */ __webpack_exports__["default"] = (function(series, order) {
    if (!((n = series.length) > 0)) return;
    for (var i, j = 0, d, dy, yp, yn, n, m = series[order[0]].length; j < m; ++j) {
      for (yp = yn = 0, i = 0; i < n; ++i) {
        if ((dy = (d = series[order[i]][j])[1] - d[0]) > 0) {
          d[0] = yp, d[1] = yp += dy;
        } else if (dy < 0) {
          d[1] = yn, d[0] = yn += dy;
        } else {
          d[0] = 0, d[1] = dy;
        }
      }
    }
  });
  
  
  /***/ }),
  
  /***/ "./node_modules/d3-shape/src/offset/expand.js":
  /*!****************************************************!*\
    !*** ./node_modules/d3-shape/src/offset/expand.js ***!
    \****************************************************/
  /*! exports provided: default */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony import */ var _none_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./none.js */ "./node_modules/d3-shape/src/offset/none.js");
  
  
  /* harmony default export */ __webpack_exports__["default"] = (function(series, order) {
    if (!((n = series.length) > 0)) return;
    for (var i, n, j = 0, m = series[0].length, y; j < m; ++j) {
      for (y = i = 0; i < n; ++i) y += series[i][j][1] || 0;
      if (y) for (i = 0; i < n; ++i) series[i][j][1] /= y;
    }
    Object(_none_js__WEBPACK_IMPORTED_MODULE_0__["default"])(series, order);
  });
  
  
  /***/ }),
  
  /***/ "./node_modules/d3-shape/src/offset/none.js":
  /*!**************************************************!*\
    !*** ./node_modules/d3-shape/src/offset/none.js ***!
    \**************************************************/
  /*! exports provided: default */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony default export */ __webpack_exports__["default"] = (function(series, order) {
    if (!((n = series.length) > 1)) return;
    for (var i = 1, j, s0, s1 = series[order[0]], n, m = s1.length; i < n; ++i) {
      s0 = s1, s1 = series[order[i]];
      for (j = 0; j < m; ++j) {
        s1[j][1] += s1[j][0] = isNaN(s0[j][1]) ? s0[j][0] : s0[j][1];
      }
    }
  });
  
  
  /***/ }),
  
  /***/ "./node_modules/d3-shape/src/offset/silhouette.js":
  /*!********************************************************!*\
    !*** ./node_modules/d3-shape/src/offset/silhouette.js ***!
    \********************************************************/
  /*! exports provided: default */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony import */ var _none_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./none.js */ "./node_modules/d3-shape/src/offset/none.js");
  
  
  /* harmony default export */ __webpack_exports__["default"] = (function(series, order) {
    if (!((n = series.length) > 0)) return;
    for (var j = 0, s0 = series[order[0]], n, m = s0.length; j < m; ++j) {
      for (var i = 0, y = 0; i < n; ++i) y += series[i][j][1] || 0;
      s0[j][1] += s0[j][0] = -y / 2;
    }
    Object(_none_js__WEBPACK_IMPORTED_MODULE_0__["default"])(series, order);
  });
  
  
  /***/ }),
  
  /***/ "./node_modules/d3-shape/src/offset/wiggle.js":
  /*!****************************************************!*\
    !*** ./node_modules/d3-shape/src/offset/wiggle.js ***!
    \****************************************************/
  /*! exports provided: default */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony import */ var _none_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./none.js */ "./node_modules/d3-shape/src/offset/none.js");
  
  
  /* harmony default export */ __webpack_exports__["default"] = (function(series, order) {
    if (!((n = series.length) > 0) || !((m = (s0 = series[order[0]]).length) > 0)) return;
    for (var y = 0, j = 1, s0, m, n; j < m; ++j) {
      for (var i = 0, s1 = 0, s2 = 0; i < n; ++i) {
        var si = series[order[i]],
            sij0 = si[j][1] || 0,
            sij1 = si[j - 1][1] || 0,
            s3 = (sij0 - sij1) / 2;
        for (var k = 0; k < i; ++k) {
          var sk = series[order[k]],
              skj0 = sk[j][1] || 0,
              skj1 = sk[j - 1][1] || 0;
          s3 += skj0 - skj1;
        }
        s1 += sij0, s2 += s3 * sij0;
      }
      s0[j - 1][1] += s0[j - 1][0] = y;
      if (s1) y -= s2 / s1;
    }
    s0[j - 1][1] += s0[j - 1][0] = y;
    Object(_none_js__WEBPACK_IMPORTED_MODULE_0__["default"])(series, order);
  });
  
  
  /***/ }),
  
  /***/ "./node_modules/d3-shape/src/order/appearance.js":
  /*!*******************************************************!*\
    !*** ./node_modules/d3-shape/src/order/appearance.js ***!
    \*******************************************************/
  /*! exports provided: default */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony import */ var _none_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./none.js */ "./node_modules/d3-shape/src/order/none.js");
  
  
  /* harmony default export */ __webpack_exports__["default"] = (function(series) {
    var peaks = series.map(peak);
    return Object(_none_js__WEBPACK_IMPORTED_MODULE_0__["default"])(series).sort(function(a, b) { return peaks[a] - peaks[b]; });
  });
  
  function peak(series) {
    var i = -1, j = 0, n = series.length, vi, vj = -Infinity;
    while (++i < n) if ((vi = +series[i][1]) > vj) vj = vi, j = i;
    return j;
  }
  
  
  /***/ }),
  
  /***/ "./node_modules/d3-shape/src/order/ascending.js":
  /*!******************************************************!*\
    !*** ./node_modules/d3-shape/src/order/ascending.js ***!
    \******************************************************/
  /*! exports provided: default, sum */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sum", function() { return sum; });
  /* harmony import */ var _none_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./none.js */ "./node_modules/d3-shape/src/order/none.js");
  
  
  /* harmony default export */ __webpack_exports__["default"] = (function(series) {
    var sums = series.map(sum);
    return Object(_none_js__WEBPACK_IMPORTED_MODULE_0__["default"])(series).sort(function(a, b) { return sums[a] - sums[b]; });
  });
  
  function sum(series) {
    var s = 0, i = -1, n = series.length, v;
    while (++i < n) if (v = +series[i][1]) s += v;
    return s;
  }
  
  
  /***/ }),
  
  /***/ "./node_modules/d3-shape/src/order/descending.js":
  /*!*******************************************************!*\
    !*** ./node_modules/d3-shape/src/order/descending.js ***!
    \*******************************************************/
  /*! exports provided: default */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony import */ var _ascending_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ascending.js */ "./node_modules/d3-shape/src/order/ascending.js");
  
  
  /* harmony default export */ __webpack_exports__["default"] = (function(series) {
    return Object(_ascending_js__WEBPACK_IMPORTED_MODULE_0__["default"])(series).reverse();
  });
  
  
  /***/ }),
  
  /***/ "./node_modules/d3-shape/src/order/insideOut.js":
  /*!******************************************************!*\
    !*** ./node_modules/d3-shape/src/order/insideOut.js ***!
    \******************************************************/
  /*! exports provided: default */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony import */ var _appearance_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appearance.js */ "./node_modules/d3-shape/src/order/appearance.js");
  /* harmony import */ var _ascending_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ascending.js */ "./node_modules/d3-shape/src/order/ascending.js");
  
  
  
  /* harmony default export */ __webpack_exports__["default"] = (function(series) {
    var n = series.length,
        i,
        j,
        sums = series.map(_ascending_js__WEBPACK_IMPORTED_MODULE_1__["sum"]),
        order = Object(_appearance_js__WEBPACK_IMPORTED_MODULE_0__["default"])(series),
        top = 0,
        bottom = 0,
        tops = [],
        bottoms = [];
  
    for (i = 0; i < n; ++i) {
      j = order[i];
      if (top < bottom) {
        top += sums[j];
        tops.push(j);
      } else {
        bottom += sums[j];
        bottoms.push(j);
      }
    }
  
    return bottoms.reverse().concat(tops);
  });
  
  
  /***/ }),
  
  /***/ "./node_modules/d3-shape/src/order/none.js":
  /*!*************************************************!*\
    !*** ./node_modules/d3-shape/src/order/none.js ***!
    \*************************************************/
  /*! exports provided: default */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony default export */ __webpack_exports__["default"] = (function(series) {
    var n = series.length, o = new Array(n);
    while (--n >= 0) o[n] = n;
    return o;
  });
  
  
  /***/ }),
  
  /***/ "./node_modules/d3-shape/src/order/reverse.js":
  /*!****************************************************!*\
    !*** ./node_modules/d3-shape/src/order/reverse.js ***!
    \****************************************************/
  /*! exports provided: default */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony import */ var _none_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./none.js */ "./node_modules/d3-shape/src/order/none.js");
  
  
  /* harmony default export */ __webpack_exports__["default"] = (function(series) {
    return Object(_none_js__WEBPACK_IMPORTED_MODULE_0__["default"])(series).reverse();
  });
  
  
  /***/ }),
  
  /***/ "./node_modules/d3-shape/src/pie.js":
  /*!******************************************!*\
    !*** ./node_modules/d3-shape/src/pie.js ***!
    \******************************************/
  /*! exports provided: default */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony import */ var _array_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./array.js */ "./node_modules/d3-shape/src/array.js");
  /* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constant.js */ "./node_modules/d3-shape/src/constant.js");
  /* harmony import */ var _descending_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./descending.js */ "./node_modules/d3-shape/src/descending.js");
  /* harmony import */ var _identity_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./identity.js */ "./node_modules/d3-shape/src/identity.js");
  /* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./math.js */ "./node_modules/d3-shape/src/math.js");
  
  
  
  
  
  
  /* harmony default export */ __webpack_exports__["default"] = (function() {
    var value = _identity_js__WEBPACK_IMPORTED_MODULE_3__["default"],
        sortValues = _descending_js__WEBPACK_IMPORTED_MODULE_2__["default"],
        sort = null,
        startAngle = Object(_constant_js__WEBPACK_IMPORTED_MODULE_1__["default"])(0),
        endAngle = Object(_constant_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_math_js__WEBPACK_IMPORTED_MODULE_4__["tau"]),
        padAngle = Object(_constant_js__WEBPACK_IMPORTED_MODULE_1__["default"])(0);
  
    function pie(data) {
      var i,
          n = (data = Object(_array_js__WEBPACK_IMPORTED_MODULE_0__["default"])(data)).length,
          j,
          k,
          sum = 0,
          index = new Array(n),
          arcs = new Array(n),
          a0 = +startAngle.apply(this, arguments),
          da = Math.min(_math_js__WEBPACK_IMPORTED_MODULE_4__["tau"], Math.max(-_math_js__WEBPACK_IMPORTED_MODULE_4__["tau"], endAngle.apply(this, arguments) - a0)),
          a1,
          p = Math.min(Math.abs(da) / n, padAngle.apply(this, arguments)),
          pa = p * (da < 0 ? -1 : 1),
          v;
  
      for (i = 0; i < n; ++i) {
        if ((v = arcs[index[i] = i] = +value(data[i], i, data)) > 0) {
          sum += v;
        }
      }
  
      // Optionally sort the arcs by previously-computed values or by data.
      if (sortValues != null) index.sort(function(i, j) { return sortValues(arcs[i], arcs[j]); });
      else if (sort != null) index.sort(function(i, j) { return sort(data[i], data[j]); });
  
      // Compute the arcs! They are stored in the original data's order.
      for (i = 0, k = sum ? (da - n * pa) / sum : 0; i < n; ++i, a0 = a1) {
        j = index[i], v = arcs[j], a1 = a0 + (v > 0 ? v * k : 0) + pa, arcs[j] = {
          data: data[j],
          index: i,
          value: v,
          startAngle: a0,
          endAngle: a1,
          padAngle: p
        };
      }
  
      return arcs;
    }
  
    pie.value = function(_) {
      return arguments.length ? (value = typeof _ === "function" ? _ : Object(_constant_js__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), pie) : value;
    };
  
    pie.sortValues = function(_) {
      return arguments.length ? (sortValues = _, sort = null, pie) : sortValues;
    };
  
    pie.sort = function(_) {
      return arguments.length ? (sort = _, sortValues = null, pie) : sort;
    };
  
    pie.startAngle = function(_) {
      return arguments.length ? (startAngle = typeof _ === "function" ? _ : Object(_constant_js__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), pie) : startAngle;
    };
  
    pie.endAngle = function(_) {
      return arguments.length ? (endAngle = typeof _ === "function" ? _ : Object(_constant_js__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), pie) : endAngle;
    };
  
    pie.padAngle = function(_) {
      return arguments.length ? (padAngle = typeof _ === "function" ? _ : Object(_constant_js__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), pie) : padAngle;
    };
  
    return pie;
  });
  
  
  /***/ }),
  
  /***/ "./node_modules/d3-shape/src/point.js":
  /*!********************************************!*\
    !*** ./node_modules/d3-shape/src/point.js ***!
    \********************************************/
  /*! exports provided: x, y */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return x; });
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return y; });
  function x(p) {
    return p[0];
  }
  
  function y(p) {
    return p[1];
  }
  
  
  /***/ }),
  
  /***/ "./node_modules/d3-shape/src/pointRadial.js":
  /*!**************************************************!*\
    !*** ./node_modules/d3-shape/src/pointRadial.js ***!
    \**************************************************/
  /*! exports provided: default */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony default export */ __webpack_exports__["default"] = (function(x, y) {
    return [(y = +y) * Math.cos(x -= Math.PI / 2), y * Math.sin(x)];
  });
  
  
  /***/ }),
  
  /***/ "./node_modules/d3-shape/src/stack.js":
  /*!********************************************!*\
    !*** ./node_modules/d3-shape/src/stack.js ***!
    \********************************************/
  /*! exports provided: default */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony import */ var _array_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./array.js */ "./node_modules/d3-shape/src/array.js");
  /* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constant.js */ "./node_modules/d3-shape/src/constant.js");
  /* harmony import */ var _offset_none_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./offset/none.js */ "./node_modules/d3-shape/src/offset/none.js");
  /* harmony import */ var _order_none_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./order/none.js */ "./node_modules/d3-shape/src/order/none.js");
  
  
  
  
  
  function stackValue(d, key) {
    return d[key];
  }
  
  function stackSeries(key) {
    const series = [];
    series.key = key;
    return series;
  }
  
  /* harmony default export */ __webpack_exports__["default"] = (function() {
    var keys = Object(_constant_js__WEBPACK_IMPORTED_MODULE_1__["default"])([]),
        order = _order_none_js__WEBPACK_IMPORTED_MODULE_3__["default"],
        offset = _offset_none_js__WEBPACK_IMPORTED_MODULE_2__["default"],
        value = stackValue;
  
    function stack(data) {
      var sz = Array.from(keys.apply(this, arguments), stackSeries),
          i, n = sz.length, j = -1,
          oz;
  
      for (const d of data) {
        for (i = 0, ++j; i < n; ++i) {
          (sz[i][j] = [0, +value(d, sz[i].key, j, data)]).data = d;
        }
      }
  
      for (i = 0, oz = Object(_array_js__WEBPACK_IMPORTED_MODULE_0__["default"])(order(sz)); i < n; ++i) {
        sz[oz[i]].index = i;
      }
  
      offset(sz, oz);
      return sz;
    }
  
    stack.keys = function(_) {
      return arguments.length ? (keys = typeof _ === "function" ? _ : Object(_constant_js__WEBPACK_IMPORTED_MODULE_1__["default"])(Array.from(_)), stack) : keys;
    };
  
    stack.value = function(_) {
      return arguments.length ? (value = typeof _ === "function" ? _ : Object(_constant_js__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), stack) : value;
    };
  
    stack.order = function(_) {
      return arguments.length ? (order = _ == null ? _order_none_js__WEBPACK_IMPORTED_MODULE_3__["default"] : typeof _ === "function" ? _ : Object(_constant_js__WEBPACK_IMPORTED_MODULE_1__["default"])(Array.from(_)), stack) : order;
    };
  
    stack.offset = function(_) {
      return arguments.length ? (offset = _ == null ? _offset_none_js__WEBPACK_IMPORTED_MODULE_2__["default"] : _, stack) : offset;
    };
  
    return stack;
  });
  
  
  /***/ }),
  
  /***/ "./node_modules/d3-shape/src/symbol.js":
  /*!*********************************************!*\
    !*** ./node_modules/d3-shape/src/symbol.js ***!
    \*********************************************/
  /*! exports provided: symbols, default */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "symbols", function() { return symbols; });
  /* harmony import */ var d3_path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-path */ "./node_modules/d3-path/src/index.js");
  /* harmony import */ var _symbol_circle_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./symbol/circle.js */ "./node_modules/d3-shape/src/symbol/circle.js");
  /* harmony import */ var _symbol_cross_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./symbol/cross.js */ "./node_modules/d3-shape/src/symbol/cross.js");
  /* harmony import */ var _symbol_diamond_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./symbol/diamond.js */ "./node_modules/d3-shape/src/symbol/diamond.js");
  /* harmony import */ var _symbol_star_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./symbol/star.js */ "./node_modules/d3-shape/src/symbol/star.js");
  /* harmony import */ var _symbol_square_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./symbol/square.js */ "./node_modules/d3-shape/src/symbol/square.js");
  /* harmony import */ var _symbol_triangle_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./symbol/triangle.js */ "./node_modules/d3-shape/src/symbol/triangle.js");
  /* harmony import */ var _symbol_wye_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./symbol/wye.js */ "./node_modules/d3-shape/src/symbol/wye.js");
  /* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./constant.js */ "./node_modules/d3-shape/src/constant.js");
  
  
  
  
  
  
  
  
  
  
  var symbols = [
    _symbol_circle_js__WEBPACK_IMPORTED_MODULE_1__["default"],
    _symbol_cross_js__WEBPACK_IMPORTED_MODULE_2__["default"],
    _symbol_diamond_js__WEBPACK_IMPORTED_MODULE_3__["default"],
    _symbol_square_js__WEBPACK_IMPORTED_MODULE_5__["default"],
    _symbol_star_js__WEBPACK_IMPORTED_MODULE_4__["default"],
    _symbol_triangle_js__WEBPACK_IMPORTED_MODULE_6__["default"],
    _symbol_wye_js__WEBPACK_IMPORTED_MODULE_7__["default"]
  ];
  
  /* harmony default export */ __webpack_exports__["default"] = (function(type, size) {
    var context = null;
    type = typeof type === "function" ? type : Object(_constant_js__WEBPACK_IMPORTED_MODULE_8__["default"])(type || _symbol_circle_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
    size = typeof size === "function" ? size : Object(_constant_js__WEBPACK_IMPORTED_MODULE_8__["default"])(size === undefined ? 64 : +size);
  
    function symbol() {
      var buffer;
      if (!context) context = buffer = Object(d3_path__WEBPACK_IMPORTED_MODULE_0__["path"])();
      type.apply(this, arguments).draw(context, +size.apply(this, arguments));
      if (buffer) return context = null, buffer + "" || null;
    }
  
    symbol.type = function(_) {
      return arguments.length ? (type = typeof _ === "function" ? _ : Object(_constant_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_), symbol) : type;
    };
  
    symbol.size = function(_) {
      return arguments.length ? (size = typeof _ === "function" ? _ : Object(_constant_js__WEBPACK_IMPORTED_MODULE_8__["default"])(+_), symbol) : size;
    };
  
    symbol.context = function(_) {
      return arguments.length ? (context = _ == null ? null : _, symbol) : context;
    };
  
    return symbol;
  });
  
  
  /***/ }),
  
  /***/ "./node_modules/d3-shape/src/symbol/circle.js":
  /*!****************************************************!*\
    !*** ./node_modules/d3-shape/src/symbol/circle.js ***!
    \****************************************************/
  /*! exports provided: default */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../math.js */ "./node_modules/d3-shape/src/math.js");
  
  
  /* harmony default export */ __webpack_exports__["default"] = ({
    draw: function(context, size) {
      var r = Math.sqrt(size / _math_js__WEBPACK_IMPORTED_MODULE_0__["pi"]);
      context.moveTo(r, 0);
      context.arc(0, 0, r, 0, _math_js__WEBPACK_IMPORTED_MODULE_0__["tau"]);
    }
  });
  
  
  /***/ }),
  
  /***/ "./node_modules/d3-shape/src/symbol/cross.js":
  /*!***************************************************!*\
    !*** ./node_modules/d3-shape/src/symbol/cross.js ***!
    \***************************************************/
  /*! exports provided: default */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony default export */ __webpack_exports__["default"] = ({
    draw: function(context, size) {
      var r = Math.sqrt(size / 5) / 2;
      context.moveTo(-3 * r, -r);
      context.lineTo(-r, -r);
      context.lineTo(-r, -3 * r);
      context.lineTo(r, -3 * r);
      context.lineTo(r, -r);
      context.lineTo(3 * r, -r);
      context.lineTo(3 * r, r);
      context.lineTo(r, r);
      context.lineTo(r, 3 * r);
      context.lineTo(-r, 3 * r);
      context.lineTo(-r, r);
      context.lineTo(-3 * r, r);
      context.closePath();
    }
  });
  
  
  /***/ }),
  
  /***/ "./node_modules/d3-shape/src/symbol/diamond.js":
  /*!*****************************************************!*\
    !*** ./node_modules/d3-shape/src/symbol/diamond.js ***!
    \*****************************************************/
  /*! exports provided: default */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  var tan30 = Math.sqrt(1 / 3),
      tan30_2 = tan30 * 2;
  
  /* harmony default export */ __webpack_exports__["default"] = ({
    draw: function(context, size) {
      var y = Math.sqrt(size / tan30_2),
          x = y * tan30;
      context.moveTo(0, -y);
      context.lineTo(x, 0);
      context.lineTo(0, y);
      context.lineTo(-x, 0);
      context.closePath();
    }
  });
  
  
  /***/ }),
  
  /***/ "./node_modules/d3-shape/src/symbol/square.js":
  /*!****************************************************!*\
    !*** ./node_modules/d3-shape/src/symbol/square.js ***!
    \****************************************************/
  /*! exports provided: default */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony default export */ __webpack_exports__["default"] = ({
    draw: function(context, size) {
      var w = Math.sqrt(size),
          x = -w / 2;
      context.rect(x, x, w, w);
    }
  });
  
  
  /***/ }),
  
  /***/ "./node_modules/d3-shape/src/symbol/star.js":
  /*!**************************************************!*\
    !*** ./node_modules/d3-shape/src/symbol/star.js ***!
    \**************************************************/
  /*! exports provided: default */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../math.js */ "./node_modules/d3-shape/src/math.js");
  
  
  var ka = 0.89081309152928522810,
      kr = Math.sin(_math_js__WEBPACK_IMPORTED_MODULE_0__["pi"] / 10) / Math.sin(7 * _math_js__WEBPACK_IMPORTED_MODULE_0__["pi"] / 10),
      kx = Math.sin(_math_js__WEBPACK_IMPORTED_MODULE_0__["tau"] / 10) * kr,
      ky = -Math.cos(_math_js__WEBPACK_IMPORTED_MODULE_0__["tau"] / 10) * kr;
  
  /* harmony default export */ __webpack_exports__["default"] = ({
    draw: function(context, size) {
      var r = Math.sqrt(size * ka),
          x = kx * r,
          y = ky * r;
      context.moveTo(0, -r);
      context.lineTo(x, y);
      for (var i = 1; i < 5; ++i) {
        var a = _math_js__WEBPACK_IMPORTED_MODULE_0__["tau"] * i / 5,
            c = Math.cos(a),
            s = Math.sin(a);
        context.lineTo(s * r, -c * r);
        context.lineTo(c * x - s * y, s * x + c * y);
      }
      context.closePath();
    }
  });
  
  
  /***/ }),
  
  /***/ "./node_modules/d3-shape/src/symbol/triangle.js":
  /*!******************************************************!*\
    !*** ./node_modules/d3-shape/src/symbol/triangle.js ***!
    \******************************************************/
  /*! exports provided: default */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  var sqrt3 = Math.sqrt(3);
  
  /* harmony default export */ __webpack_exports__["default"] = ({
    draw: function(context, size) {
      var y = -Math.sqrt(size / (sqrt3 * 3));
      context.moveTo(0, y * 2);
      context.lineTo(-sqrt3 * y, -y);
      context.lineTo(sqrt3 * y, -y);
      context.closePath();
    }
  });
  
  
  /***/ }),
  
  /***/ "./node_modules/d3-shape/src/symbol/wye.js":
  /*!*************************************************!*\
    !*** ./node_modules/d3-shape/src/symbol/wye.js ***!
    \*************************************************/
  /*! exports provided: default */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  var c = -0.5,
      s = Math.sqrt(3) / 2,
      k = 1 / Math.sqrt(12),
      a = (k / 2 + 1) * 3;
  
  /* harmony default export */ __webpack_exports__["default"] = ({
    draw: function(context, size) {
      var r = Math.sqrt(size / a),
          x0 = r / 2,
          y0 = r * k,
          x1 = x0,
          y1 = r * k + r,
          x2 = -x1,
          y2 = y1;
      context.moveTo(x0, y0);
      context.lineTo(x1, y1);
      context.lineTo(x2, y2);
      context.lineTo(c * x0 - s * y0, s * x0 + c * y0);
      context.lineTo(c * x1 - s * y1, s * x1 + c * y1);
      context.lineTo(c * x2 - s * y2, s * x2 + c * y2);
      context.lineTo(c * x0 + s * y0, c * y0 - s * x0);
      context.lineTo(c * x1 + s * y1, c * y1 - s * x1);
      context.lineTo(c * x2 + s * y2, c * y2 - s * x2);
      context.closePath();
    }
  });
  
  
  /***/ }),
  
  /***/ "./source/_js/scripts.js":
  /*!*******************************!*\
    !*** ./source/_js/scripts.js ***!
    \*******************************/
  /*! no exports provided */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony import */ var d3_shape__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-shape */ "./node_modules/d3-shape/src/index.js");
  /* harmony import */ var d3_hierarchy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-hierarchy */ "./node_modules/d3-hierarchy/src/index.js");
  /* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/index.js");
  /* harmony import */ var d3_fetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3-fetch */ "./node_modules/d3-fetch/src/index.js");
  
  
  
  
  var d3 = Object.assign({}, {
    arc: d3_shape__WEBPACK_IMPORTED_MODULE_0__["arc"],
    hierarchy: d3_hierarchy__WEBPACK_IMPORTED_MODULE_1__["hierarchy"],
    json: d3_fetch__WEBPACK_IMPORTED_MODULE_3__["json"],
    partition: d3_hierarchy__WEBPACK_IMPORTED_MODULE_1__["partition"],
    select: d3_selection__WEBPACK_IMPORTED_MODULE_2__["select"],
    selectAll: d3_selection__WEBPACK_IMPORTED_MODULE_2__["selectAll"]
  });
  var width = 500;
  var height = 500;
  var radius = Math.min(width, height) / 10.3;
  
  var setPartition = function setPartition(data) {
    var root = d3.hierarchy(data).sum(function (d) {
      return d.children || d.count;
    });
    return d3.partition().size([2 * Math.PI, root.height + 1])(root);
  };
  
  var setArc = d3.arc().startAngle(function (d) {
    return d.x0;
  }).endAngle(function (d) {
    return d.x1;
  }).padAngle(function (d) {
    return Math.min((d.x1 - d.x0) / 2, 0.005 - 500);
  }).padRadius(0).innerRadius(function (d) {
    return d.y0 * radius + 55;
  }).outerRadius(function (d) {
    return Math.max(d.y0 * radius, d.y1 * radius + 55);
  }); // Tooltips and html formatting
  
  var tooltips = d3.select('.sunburst-text').append('div').attr('class', 'row tooltips');
  
  var formatHTML = function formatHTML(d) {
    var layer = d.depth;
    var data = d.data;
  
    if (layer === 1) {
      var awardAmount = Math.round(data.totalAwardAmount * 100) / 100;
      awardAmount = awardAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      tooltips.html("<div class=\"column large-12 small-12\">\n        <h2 class=\"title\">".concat(data.name, "</h2>\n      </div>\n      <div class=\"column large-5 small-12\">\n        <h3>Strategy/Focus</h3>\n        <h4>").concat(data.focus, "</h4>\n        <p>").concat(data.description, "</p>\n      </div>\n      <div class=\"column large-7 small-12\">\n        <h3>Types of Programs</h3>\n        <p>").concat(data.children.length, "</p>\n        <h3>Total Award Amount</h3>\n        <p>$").concat(awardAmount, "</p>\n        <h3>Countries Represented</h3>\n        <p>").concat(data.awardedCountries.length, "</p>\n      </div>"));
    } else if (layer === 2) {
      var issueAreaHTML = '';
      data.children.forEach(function (issueArea) {
        issueAreaHTML += "<p>".concat(issueArea.name, "</p>");
      });
      tooltips.html("<div class=\"column large-12 small-12\">\n        <span class=\"parent-data\">".concat(d.parent.data.name, "</span>\n        <h2 class=\"title\">").concat(data.name, "</h2>\n      </div>\n      <div class=\"column large-5 small-12\">\n        <h3>Program Focus</h3>\n        <p>").concat(data.purpose, "</p>\n      </div>\n      <div class=\"column large-7 small-12\">\n        <h3>Geographic Focus</h3>\n        <p>").concat(data.allCountriesPerType.sort().join(', '), "</p>\n        <h3>Number of Awards</h3>\n        <p>").concat(data.count, "</p>\n        <h3>Internet Health Issues</h3>\n        ").concat(issueAreaHTML, "\n      </div>"));
    } else if (layer === 3) {
      var html = '';
      data.primaryOutput.forEach(function (output) {
        html += "<p>".concat(output, "</p>");
      });
      tooltips.html("<div class=\"column large-12 small-12\">\n        <span class=\"parent-data\">".concat(d.parent.parent.data.name, " | ").concat(d.parent.data.name, "</span>\n        <h2 class=\"title\">").concat(data.name, "</h2>\n      </div>\n      <div class=\"column large-5 small-12\">\n        <h3>Summary</h3>\n        <p>").concat(data.description, "</p>\n      </div>\n      <div class=\"column large-7 small-12\">\n        <h3>Number of Awards</h3>\n        <p>").concat(data.count, "</p>\n        <h3>Types of Outputs</h3>\n        <p>").concat(html, "</p>\n      </div>"));
    }
  }; // Highlight on hover
  
  
  var getAncestors = function getAncestors(node) {
    var path = [];
    var current = node;
  
    while (current.parent) {
      path.unshift(current);
      current = current.parent;
    }
  
    return path;
  };
  
  var highlightSequence = function highlightSequence(d) {
    var sequenceArray = getAncestors(d);
    d3.selectAll('path').filter(function (node) {
      return sequenceArray.indexOf(node) < 0;
    }).classed('ancestor', true);
  };
  
  var removeHighlight = function removeHighlight(d) {
    var sequenceArray = getAncestors(d);
    d3.selectAll('path').filter(function (node) {
      return sequenceArray.indexOf(node) < 0;
    }).classed('ancestor', false);
  };
  
  var highlightLabel = function highlightLabel(d) {
    var allLabels = document.querySelectorAll('.label');
    var depth = d.depth;
    var label;
  
    switch (depth) {
      case 1:
        label = d.data.name;
        break;
  
      case 2:
        label = d.parent.data.name;
        break;
  
      case 3:
        label = d.parent.parent.data.name;
        break;
    }
  
    allLabels.forEach(function (label) {
      label.classList.add('label-inactive');
    });
    var foundLabel = document.querySelector(".label-".concat(label));
    foundLabel.classList.add('label-active');
  }; // Specify colors
  
  
  var colors = {
    '2016': '#CCCCCC',
    '2017': '#CCCCCC',
    '2018': '#CCCCCC',
    '2019': '#CCCCCC',
    '2020': '#CCCCCC',
    'Advocacy Network Fund': '#277da1',
    'Creative Media Awards': '#f9844a',
    'Data Futures Lab': '#577590',
    'Discretionary Awards': '#f8961e',
    'Fellows in Residence/Senior Fellows': '#4d908e',
    'Gigabit Community Fund': '#f3722c',
    'Hive': '#43aa8b',
    'MOSS (Mozilla Open Source Support)': '#f94144',
    'Mozilla Science Mini Grants': '#c43437',
    'NSF WINS (Wireless Innovations for a Networked Society Challenge)': '#f9c74f',
    'Open Internet Engineering Fellowship': '#af376b',
    'Open News Fellowship': '#2d5480',
    'Open Science Fellowship': '#662d91',
    'Open Web Fellowship': '#234061',
    'OpenDOTT Fellowship': '#485399',
    'Other Programs': '#1e3753',
    'Responsible Computer Science Challenge': '#39669c',
    'Tech + Society Fellowship': '#15273c',
    'Tech Policy Fellowship': '#471f61',
    'Privacy + Security': '#1a1a49',
    'Open Innovation': '#31315c',
    'Digital Inclusion': '#48486d',
    'Web Literacy': '#5f5f80',
    'Decentralization': '#767692',
    'Trustworthy AI': '#8c8ca3',
    'Other/unavailable': '#a3a3b6'
  };
  d3.json('data/sunburst-data.json').then(function (data) {
    var root = setPartition(data);
    root.each(function (d) {
      return d.current = d;
    });
    var svg = d3.select('svg#sunburst').attr('viewBox', "0, 0, ".concat(width, " ").concat(height)).attr('width', width).attr('height', height);
    var g = svg.append('g').attr('transform', "translate(".concat(width / 2, ",").concat(width / 2, ")"));
    g.selectAll('path').data(root.descendants().slice(1)).join('path').attr('d', function (d) {
      return setArc(d.current);
    }).attr('class', function (d) {
      return "layer-".concat(d.depth);
    }).style('fill', function (d) {
      return colors[d.data.name];
    }).style('stroke', '#FFF').style('stroke-width', 1).on('mouseover', function (e, d) {
      document.querySelector('.large-text').style.display = 'none';
      formatHTML(d);
      highlightSequence(d);
      highlightLabel(d);
      g.append('text').attr('class', 'sunburst-center-text').text('Clear').style('fill', '#bbbbbb').style('font-size', '2rem').attr('x', -40).attr('y', 10).on('mouseover', function () {
        g.select('.sunburst-center-text').remove();
      });
    }).on('mouseleave', function (d) {
      removeHighlight(d);
      tooltips.html('');
      document.querySelector('.large-text').style.display = 'block';
      g.select('.sunburst-center-text').remove();
      var allLabels = document.querySelectorAll('.label');
      allLabels.forEach(function (label) {
        label.classList.remove('label-active', 'label-inactive');
      });
    });
  
    var labelTransform = function labelTransform(d) {
      var x = (d.x0 + d.x1) / 2 * 180 / Math.PI;
      var y = (d.y0 + d.y1) / 2 * radius;
      return "rotate(".concat(x - 90, ") translate(").concat(y + 48, ",0) rotate(90)");
    };
  
    var label = g.append('g').selectAll('text').data(root.descendants().slice(1)).join('text');
    label.attr('pointer-events', 'none').attr('text-anchor', 'middle').style('user-select', 'none').attr('transform', function (d) {
      return labelTransform(d.current);
    }).attr('class', function (d) {
      return "label label-".concat(d.depth, " label-").concat(d.data.name);
    }).text(function (d) {
      return d.data.name;
    });
  })["catch"](function (error) {
    console.error('Error loading the data');
  });
  
  /***/ })
  
  /******/ });
  //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWRzdi9zcmMvYXV0b1R5cGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWRzdi9zcmMvY3N2LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1kc3Yvc3JjL2Rzdi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtZHN2L3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtZHN2L3NyYy90c3YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWZldGNoL3NyYy9ibG9iLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1mZXRjaC9zcmMvYnVmZmVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1mZXRjaC9zcmMvZHN2LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1mZXRjaC9zcmMvaW1hZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWZldGNoL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtZmV0Y2gvc3JjL2pzb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWZldGNoL3NyYy90ZXh0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1mZXRjaC9zcmMveG1sLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1oaWVyYXJjaHkvc3JjL2FjY2Vzc29ycy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtaGllcmFyY2h5L3NyYy9hcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtaGllcmFyY2h5L3NyYy9jbHVzdGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1oaWVyYXJjaHkvc3JjL2NvbnN0YW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1oaWVyYXJjaHkvc3JjL2hpZXJhcmNoeS9hbmNlc3RvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWhpZXJhcmNoeS9zcmMvaGllcmFyY2h5L2NvdW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1oaWVyYXJjaHkvc3JjL2hpZXJhcmNoeS9kZXNjZW5kYW50cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtaGllcmFyY2h5L3NyYy9oaWVyYXJjaHkvZWFjaC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtaGllcmFyY2h5L3NyYy9oaWVyYXJjaHkvZWFjaEFmdGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1oaWVyYXJjaHkvc3JjL2hpZXJhcmNoeS9lYWNoQmVmb3JlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1oaWVyYXJjaHkvc3JjL2hpZXJhcmNoeS9maW5kLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1oaWVyYXJjaHkvc3JjL2hpZXJhcmNoeS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtaGllcmFyY2h5L3NyYy9oaWVyYXJjaHkvaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWhpZXJhcmNoeS9zcmMvaGllcmFyY2h5L2xlYXZlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtaGllcmFyY2h5L3NyYy9oaWVyYXJjaHkvbGlua3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWhpZXJhcmNoeS9zcmMvaGllcmFyY2h5L3BhdGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWhpZXJhcmNoeS9zcmMvaGllcmFyY2h5L3NvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWhpZXJhcmNoeS9zcmMvaGllcmFyY2h5L3N1bS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtaGllcmFyY2h5L3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtaGllcmFyY2h5L3NyYy9wYWNrL2VuY2xvc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWhpZXJhcmNoeS9zcmMvcGFjay9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtaGllcmFyY2h5L3NyYy9wYWNrL3NpYmxpbmdzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1oaWVyYXJjaHkvc3JjL3BhcnRpdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtaGllcmFyY2h5L3NyYy9zdHJhdGlmeS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtaGllcmFyY2h5L3NyYy90cmVlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1oaWVyYXJjaHkvc3JjL3RyZWVtYXAvYmluYXJ5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1oaWVyYXJjaHkvc3JjL3RyZWVtYXAvZGljZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtaGllcmFyY2h5L3NyYy90cmVlbWFwL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1oaWVyYXJjaHkvc3JjL3RyZWVtYXAvcmVzcXVhcmlmeS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtaGllcmFyY2h5L3NyYy90cmVlbWFwL3JvdW5kLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1oaWVyYXJjaHkvc3JjL3RyZWVtYXAvc2xpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWhpZXJhcmNoeS9zcmMvdHJlZW1hcC9zbGljZURpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWhpZXJhcmNoeS9zcmMvdHJlZW1hcC9zcXVhcmlmeS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtcGF0aC9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXBhdGgvc3JjL3BhdGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvYXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvY29uc3RhbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvY3JlYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL2NyZWF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvbG9jYWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvbWF0Y2hlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9uYW1lc3BhY2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvbmFtZXNwYWNlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9wb2ludGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3BvaW50ZXJzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3RBbGwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL2FwcGVuZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vYXR0ci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vY2FsbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vY2xhc3NlZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vY2xvbmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL2RhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL2RhdHVtLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9kaXNwYXRjaC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vZWFjaC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vZW1wdHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL2VudGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9leGl0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9maWx0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL2h0bWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9pbnNlcnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL2l0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9qb2luLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9sb3dlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vbWVyZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL25vZGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL25vZGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9vbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vb3JkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL3Byb3BlcnR5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9yYWlzZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vcmVtb3ZlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9zZWxlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL3NlbGVjdEFsbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vc2VsZWN0Q2hpbGQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL3NlbGVjdENoaWxkcmVuLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9zaXplLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9zb3J0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9zcGFyc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL3N0eWxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi90ZXh0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdG9yQWxsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NvdXJjZUV2ZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3dpbmRvdy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2hhcGUvc3JjL2FyYy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2hhcGUvc3JjL2FyZWEuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXNoYXBlL3NyYy9hcmVhUmFkaWFsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zaGFwZS9zcmMvYXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXNoYXBlL3NyYy9jb25zdGFudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2hhcGUvc3JjL2N1cnZlL2Jhc2lzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zaGFwZS9zcmMvY3VydmUvYmFzaXNDbG9zZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXNoYXBlL3NyYy9jdXJ2ZS9iYXNpc09wZW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXNoYXBlL3NyYy9jdXJ2ZS9idW1wLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zaGFwZS9zcmMvY3VydmUvYnVuZGxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zaGFwZS9zcmMvY3VydmUvY2FyZGluYWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXNoYXBlL3NyYy9jdXJ2ZS9jYXJkaW5hbENsb3NlZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2hhcGUvc3JjL2N1cnZlL2NhcmRpbmFsT3Blbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2hhcGUvc3JjL2N1cnZlL2NhdG11bGxSb20uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXNoYXBlL3NyYy9jdXJ2ZS9jYXRtdWxsUm9tQ2xvc2VkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zaGFwZS9zcmMvY3VydmUvY2F0bXVsbFJvbU9wZW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXNoYXBlL3NyYy9jdXJ2ZS9saW5lYXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXNoYXBlL3NyYy9jdXJ2ZS9saW5lYXJDbG9zZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXNoYXBlL3NyYy9jdXJ2ZS9tb25vdG9uZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2hhcGUvc3JjL2N1cnZlL25hdHVyYWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXNoYXBlL3NyYy9jdXJ2ZS9yYWRpYWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXNoYXBlL3NyYy9jdXJ2ZS9zdGVwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zaGFwZS9zcmMvZGVzY2VuZGluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2hhcGUvc3JjL2lkZW50aXR5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zaGFwZS9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXNoYXBlL3NyYy9saW5lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zaGFwZS9zcmMvbGluZVJhZGlhbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2hhcGUvc3JjL2xpbmsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXNoYXBlL3NyYy9tYXRoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zaGFwZS9zcmMvbm9vcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2hhcGUvc3JjL29mZnNldC9kaXZlcmdpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXNoYXBlL3NyYy9vZmZzZXQvZXhwYW5kLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zaGFwZS9zcmMvb2Zmc2V0L25vbmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXNoYXBlL3NyYy9vZmZzZXQvc2lsaG91ZXR0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2hhcGUvc3JjL29mZnNldC93aWdnbGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXNoYXBlL3NyYy9vcmRlci9hcHBlYXJhbmNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zaGFwZS9zcmMvb3JkZXIvYXNjZW5kaW5nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zaGFwZS9zcmMvb3JkZXIvZGVzY2VuZGluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2hhcGUvc3JjL29yZGVyL2luc2lkZU91dC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2hhcGUvc3JjL29yZGVyL25vbmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXNoYXBlL3NyYy9vcmRlci9yZXZlcnNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zaGFwZS9zcmMvcGllLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zaGFwZS9zcmMvcG9pbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXNoYXBlL3NyYy9wb2ludFJhZGlhbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2hhcGUvc3JjL3N0YWNrLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zaGFwZS9zcmMvc3ltYm9sLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zaGFwZS9zcmMvc3ltYm9sL2NpcmNsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2hhcGUvc3JjL3N5bWJvbC9jcm9zcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2hhcGUvc3JjL3N5bWJvbC9kaWFtb25kLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zaGFwZS9zcmMvc3ltYm9sL3NxdWFyZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2hhcGUvc3JjL3N5bWJvbC9zdGFyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zaGFwZS9zcmMvc3ltYm9sL3RyaWFuZ2xlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zaGFwZS9zcmMvc3ltYm9sL3d5ZS5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvX2pzL3NjcmlwdHMuanMiXSwibmFtZXMiOlsiZDMiLCJPYmplY3QiLCJhc3NpZ24iLCJhcmMiLCJoaWVyYXJjaHkiLCJqc29uIiwicGFydGl0aW9uIiwic2VsZWN0Iiwic2VsZWN0QWxsIiwid2lkdGgiLCJoZWlnaHQiLCJyYWRpdXMiLCJNYXRoIiwibWluIiwic2V0UGFydGl0aW9uIiwiZGF0YSIsInJvb3QiLCJzdW0iLCJkIiwiY2hpbGRyZW4iLCJjb3VudCIsInNpemUiLCJQSSIsInNldEFyYyIsInN0YXJ0QW5nbGUiLCJ4MCIsImVuZEFuZ2xlIiwieDEiLCJwYWRBbmdsZSIsInBhZFJhZGl1cyIsImlubmVyUmFkaXVzIiwieTAiLCJvdXRlclJhZGl1cyIsIm1heCIsInkxIiwidG9vbHRpcHMiLCJhcHBlbmQiLCJhdHRyIiwiZm9ybWF0SFRNTCIsImxheWVyIiwiZGVwdGgiLCJhd2FyZEFtb3VudCIsInJvdW5kIiwidG90YWxBd2FyZEFtb3VudCIsInRvU3RyaW5nIiwicmVwbGFjZSIsImh0bWwiLCJuYW1lIiwiZm9jdXMiLCJkZXNjcmlwdGlvbiIsImxlbmd0aCIsImF3YXJkZWRDb3VudHJpZXMiLCJpc3N1ZUFyZWFIVE1MIiwiZm9yRWFjaCIsImlzc3VlQXJlYSIsInBhcmVudCIsInB1cnBvc2UiLCJhbGxDb3VudHJpZXNQZXJUeXBlIiwic29ydCIsImpvaW4iLCJwcmltYXJ5T3V0cHV0Iiwib3V0cHV0IiwiZ2V0QW5jZXN0b3JzIiwibm9kZSIsInBhdGgiLCJjdXJyZW50IiwidW5zaGlmdCIsImhpZ2hsaWdodFNlcXVlbmNlIiwic2VxdWVuY2VBcnJheSIsImZpbHRlciIsImluZGV4T2YiLCJjbGFzc2VkIiwicmVtb3ZlSGlnaGxpZ2h0IiwiaGlnaGxpZ2h0TGFiZWwiLCJhbGxMYWJlbHMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJsYWJlbCIsImNsYXNzTGlzdCIsImFkZCIsImZvdW5kTGFiZWwiLCJxdWVyeVNlbGVjdG9yIiwiY29sb3JzIiwidGhlbiIsImVhY2giLCJzdmciLCJnIiwiZGVzY2VuZGFudHMiLCJzbGljZSIsInN0eWxlIiwib24iLCJlIiwiZGlzcGxheSIsInRleHQiLCJyZW1vdmUiLCJsYWJlbFRyYW5zZm9ybSIsIngiLCJ5IiwiZXJyb3IiLCJjb25zb2xlIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLGNBQWMsRUFB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Q0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7O0FDbkZEO0FBQUE7QUFBTztBQUNQO0FBQ0E7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7O0FDUkQ7QUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7O0FDTkQ7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlO0FBQ2Y7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7O0FDWEQ7QUFBZTtBQUNmO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ0ZEO0FBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ05EO0FBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxPQUFPO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7O0FDZEQ7QUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLFFBQVE7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7QUNYRDtBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ1BEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBb0M7QUFDRjtBQUNZO0FBQ0Y7QUFDVjtBQUNGO0FBQ0U7QUFDQTtBQUNVO0FBQ0k7QUFDVjtBQUNGO0FBQ007O0FBRTNCO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLFFBQVE7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVMsaURBQVU7QUFDbkIsUUFBUSxnREFBUztBQUNqQixhQUFhLHFEQUFjO0FBQzNCLGNBQWMsc0RBQWU7QUFDN0IsUUFBUSxnREFBUztBQUNqQixPQUFPLCtDQUFRO0FBQ2YsUUFBUSxnREFBUztBQUNqQixRQUFRLGdEQUFTO0FBQ2pCLGFBQWEscURBQWM7QUFDM0IsZUFBZSx1REFBZ0I7QUFDL0IsVUFBVSxtREFBVztBQUNyQixTQUFTLGtEQUFVO0FBQ25CO0FBQ0EscUJBQXFCLHFEQUFhO0FBQ2xDOzs7Ozs7Ozs7Ozs7O0FDMUZBO0FBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsT0FBTztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOzs7Ozs7Ozs7Ozs7O0FDYkQ7QUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7O0FDUkQ7QUFBZTtBQUNmO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEIsa0JBQWtCLGtDQUFrQztBQUNwRDtBQUNBLEdBQUc7QUFDSDtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7QUNSRDtBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUM3QkE7QUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7Ozs7Ozs7Ozs7Ozs7QUNORDtBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7Ozs7Ozs7Ozs7Ozs7QUNSRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBZ0Q7QUFDZ0I7QUFDaEI7QUFDVztBQUNGO0FBQ0w7QUFDRjtBQUNSO0FBQ1k7QUFDTztBQUNKO0FBQ0U7QUFDUTtBQUNGO0FBQ0k7Ozs7Ozs7Ozs7Ozs7QUNkckU7QUFBQTtBQUFvQzs7QUFFckI7QUFDZiw0QkFBNEIseURBQU87O0FBRW5DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxhQUFhLGNBQWM7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGFBQWEsa0JBQWtCO0FBQy9CLG1CQUFtQixjQUFjO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLGNBQWM7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNySEE7QUFBQTtBQUFBO0FBQUE7QUFBMEM7QUFDRDtBQUNhOztBQUV0RDtBQUNBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IseURBQVk7O0FBRTVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLGtDQUFrQyx5REFBWTtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0NBQXdDLDhEQUFRO0FBQ2hEOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHVFQUF1RSw0REFBUTtBQUMvRTs7QUFFQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3QkFBd0IsT0FBTztBQUMvQixVQUFVLGdFQUFXO0FBQ3JCLHdCQUF3QixPQUFPO0FBQy9CO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDOUVBO0FBQUE7QUFBQTtBQUFBO0FBQWdDO0FBQ0c7O0FBRW5DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQLHVCQUF1Qix5REFBSzs7QUFFNUI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQkFBbUIsT0FBTztBQUMxQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQkFBbUIsd0NBQXdDLEtBQUssMkRBQU87O0FBRXZFO0FBQ0EsYUFBYSxPQUFPOztBQUVwQjtBQUNBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7QUN0SEQ7QUFBQTtBQUFBO0FBQTJDO0FBQ0M7O0FBRTdCO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IseURBQVM7QUFDeEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGdFQUFXO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ25ERDtBQUFBO0FBQUE7QUFBd0M7QUFDaUI7O0FBRXpELGVBQWUsVUFBVTtBQUN6Qjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVlO0FBQ2Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGVBQWUsT0FBTztBQUN0QiwwQ0FBMEMsd0RBQUk7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0NBQW9DLG9DQUFvQyxLQUFLLEVBQUUsYUFBYSxpRUFBYTtBQUN6RztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxvQ0FBb0MsOERBQVE7QUFDNUM7O0FBRUE7QUFDQSwwQ0FBMEMsOERBQVE7QUFDbEQ7O0FBRUE7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7O0FDMUVEO0FBQUE7QUFBMEM7O0FBRTFDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEIsZ0JBQWdCO0FBQ2hCLGFBQWE7QUFDYixhQUFhO0FBQ2IsYUFBYTtBQUNiLGFBQWE7QUFDYixnQkFBZ0I7QUFDaEIsYUFBYTtBQUNiOztBQUVBLG1DQUFtQyx3REFBSTs7QUFFdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsUUFBUTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7OztBQzVPRDtBQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBLDZCQUE2QixPQUFPO0FBQ3BDO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7O0FDN0NEO0FBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFD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QU1BLE1BQU1wQixLQUFLLEdBQUdTLENBQUMsQ0FBQ2xELE1BQUYsQ0FBUyxHQUFULEVBQ1g1QixTQURXLENBQ0QsTUFEQyxFQUVYTyxJQUZXLENBRU5DLElBQUksQ0FBQ3VFLFdBQUwsR0FBbUJDLEtBQW5CLENBQXlCLENBQXpCLENBRk0sRUFHWDdCLElBSFcsQ0FHTixNQUhNLENBQWQ7QUFLQWtCLE9BQUssQ0FDRnhDLElBREgsQ0FDUSxnQkFEUixFQUMwQixNQUQxQixFQUVHQSxJQUZILENBRVEsYUFGUixFQUV1QixRQUZ2QixFQUdHb0QsS0FISCxDQUdTLGFBSFQsRUFHd0IsTUFIeEIsRUFJR3BELElBSkgsQ0FJUSxXQUpSLEVBSXFCLFVBQUFuQixDQUFDO0FBQUEsV0FBSTZFLGNBQWMsQ0FBQzdFLENBQUMsQ0FBQytDLE9BQUgsQ0FBbEI7QUFBQSxHQUp0QixFQUtHNUIsSUFMSCxDQUtRLE9BTFIsRUFLaUIsVUFBQW5CLENBQUM7QUFBQSxpQ0FBbUJBLENBQUMsQ0FBQ3NCLEtBQXJCLG9CQUFvQ3RCLENBQUMsQ0FBQ0gsSUFBRixDQUFPZ0MsSUFBM0M7QUFBQSxHQUxsQixFQU1HOEMsSUFOSCxDQU1RLFVBQUEzRSxDQUFDO0FBQUEsV0FBSUEsQ0FBQyxDQUFDSCxJQUFGLENBQU9nQyxJQUFYO0FBQUEsR0FOVDtBQU9ELENBcEVELFdBcUVTLFVBQUNtRCxLQUFELEVBQVc7QUFDaEJDLFNBQU8sQ0FBQ0QsS0FBUixDQUFjLHdCQUFkO0FBQ0QsQ0F2RUgsRSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NvdXJjZS9fanMvc2NyaXB0cy5qc1wiKTtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGF1dG9UeXBlKG9iamVjdCkge1xuICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgdmFyIHZhbHVlID0gb2JqZWN0W2tleV0udHJpbSgpLCBudW1iZXIsIG07XG4gICAgaWYgKCF2YWx1ZSkgdmFsdWUgPSBudWxsO1xuICAgIGVsc2UgaWYgKHZhbHVlID09PSBcInRydWVcIikgdmFsdWUgPSB0cnVlO1xuICAgIGVsc2UgaWYgKHZhbHVlID09PSBcImZhbHNlXCIpIHZhbHVlID0gZmFsc2U7XG4gICAgZWxzZSBpZiAodmFsdWUgPT09IFwiTmFOXCIpIHZhbHVlID0gTmFOO1xuICAgIGVsc2UgaWYgKCFpc05hTihudW1iZXIgPSArdmFsdWUpKSB2YWx1ZSA9IG51bWJlcjtcbiAgICBlbHNlIGlmIChtID0gdmFsdWUubWF0Y2goL14oWy0rXVxcZHsyfSk/XFxkezR9KC1cXGR7Mn0oLVxcZHsyfSk/KT8oVFxcZHsyfTpcXGR7Mn0oOlxcZHsyfShcXC5cXGR7M30pPyk/KFp8Wy0rXVxcZHsyfTpcXGR7Mn0pPyk/JC8pKSB7XG4gICAgICBpZiAoZml4dHogJiYgISFtWzRdICYmICFtWzddKSB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoLy0vZywgXCIvXCIpLnJlcGxhY2UoL1QvLCBcIiBcIik7XG4gICAgICB2YWx1ZSA9IG5ldyBEYXRlKHZhbHVlKTtcbiAgICB9XG4gICAgZWxzZSBjb250aW51ZTtcbiAgICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICB9XG4gIHJldHVybiBvYmplY3Q7XG59XG5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9kMy9kMy1kc3YvaXNzdWVzLzQ1XG5jb25zdCBmaXh0eiA9IG5ldyBEYXRlKFwiMjAxOS0wMS0wMVQwMDowMFwiKS5nZXRIb3VycygpIHx8IG5ldyBEYXRlKFwiMjAxOS0wNy0wMVQwMDowMFwiKS5nZXRIb3VycygpOyIsImltcG9ydCBkc3YgZnJvbSBcIi4vZHN2LmpzXCI7XG5cbnZhciBjc3YgPSBkc3YoXCIsXCIpO1xuXG5leHBvcnQgdmFyIGNzdlBhcnNlID0gY3N2LnBhcnNlO1xuZXhwb3J0IHZhciBjc3ZQYXJzZVJvd3MgPSBjc3YucGFyc2VSb3dzO1xuZXhwb3J0IHZhciBjc3ZGb3JtYXQgPSBjc3YuZm9ybWF0O1xuZXhwb3J0IHZhciBjc3ZGb3JtYXRCb2R5ID0gY3N2LmZvcm1hdEJvZHk7XG5leHBvcnQgdmFyIGNzdkZvcm1hdFJvd3MgPSBjc3YuZm9ybWF0Um93cztcbmV4cG9ydCB2YXIgY3N2Rm9ybWF0Um93ID0gY3N2LmZvcm1hdFJvdztcbmV4cG9ydCB2YXIgY3N2Rm9ybWF0VmFsdWUgPSBjc3YuZm9ybWF0VmFsdWU7XG4iLCJ2YXIgRU9MID0ge30sXG4gICAgRU9GID0ge30sXG4gICAgUVVPVEUgPSAzNCxcbiAgICBORVdMSU5FID0gMTAsXG4gICAgUkVUVVJOID0gMTM7XG5cbmZ1bmN0aW9uIG9iamVjdENvbnZlcnRlcihjb2x1bW5zKSB7XG4gIHJldHVybiBuZXcgRnVuY3Rpb24oXCJkXCIsIFwicmV0dXJuIHtcIiArIGNvbHVtbnMubWFwKGZ1bmN0aW9uKG5hbWUsIGkpIHtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkobmFtZSkgKyBcIjogZFtcIiArIGkgKyBcIl0gfHwgXFxcIlxcXCJcIjtcbiAgfSkuam9pbihcIixcIikgKyBcIn1cIik7XG59XG5cbmZ1bmN0aW9uIGN1c3RvbUNvbnZlcnRlcihjb2x1bW5zLCBmKSB7XG4gIHZhciBvYmplY3QgPSBvYmplY3RDb252ZXJ0ZXIoY29sdW1ucyk7XG4gIHJldHVybiBmdW5jdGlvbihyb3csIGkpIHtcbiAgICByZXR1cm4gZihvYmplY3Qocm93KSwgaSwgY29sdW1ucyk7XG4gIH07XG59XG5cbi8vIENvbXB1dGUgdW5pcXVlIGNvbHVtbnMgaW4gb3JkZXIgb2YgZGlzY292ZXJ5LlxuZnVuY3Rpb24gaW5mZXJDb2x1bW5zKHJvd3MpIHtcbiAgdmFyIGNvbHVtblNldCA9IE9iamVjdC5jcmVhdGUobnVsbCksXG4gICAgICBjb2x1bW5zID0gW107XG5cbiAgcm93cy5mb3JFYWNoKGZ1bmN0aW9uKHJvdykge1xuICAgIGZvciAodmFyIGNvbHVtbiBpbiByb3cpIHtcbiAgICAgIGlmICghKGNvbHVtbiBpbiBjb2x1bW5TZXQpKSB7XG4gICAgICAgIGNvbHVtbnMucHVzaChjb2x1bW5TZXRbY29sdW1uXSA9IGNvbHVtbik7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gY29sdW1ucztcbn1cblxuZnVuY3Rpb24gcGFkKHZhbHVlLCB3aWR0aCkge1xuICB2YXIgcyA9IHZhbHVlICsgXCJcIiwgbGVuZ3RoID0gcy5sZW5ndGg7XG4gIHJldHVybiBsZW5ndGggPCB3aWR0aCA/IG5ldyBBcnJheSh3aWR0aCAtIGxlbmd0aCArIDEpLmpvaW4oMCkgKyBzIDogcztcbn1cblxuZnVuY3Rpb24gZm9ybWF0WWVhcih5ZWFyKSB7XG4gIHJldHVybiB5ZWFyIDwgMCA/IFwiLVwiICsgcGFkKC15ZWFyLCA2KVxuICAgIDogeWVhciA+IDk5OTkgPyBcIitcIiArIHBhZCh5ZWFyLCA2KVxuICAgIDogcGFkKHllYXIsIDQpO1xufVxuXG5mdW5jdGlvbiBmb3JtYXREYXRlKGRhdGUpIHtcbiAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpLFxuICAgICAgbWludXRlcyA9IGRhdGUuZ2V0VVRDTWludXRlcygpLFxuICAgICAgc2Vjb25kcyA9IGRhdGUuZ2V0VVRDU2Vjb25kcygpLFxuICAgICAgbWlsbGlzZWNvbmRzID0gZGF0ZS5nZXRVVENNaWxsaXNlY29uZHMoKTtcbiAgcmV0dXJuIGlzTmFOKGRhdGUpID8gXCJJbnZhbGlkIERhdGVcIlxuICAgICAgOiBmb3JtYXRZZWFyKGRhdGUuZ2V0VVRDRnVsbFllYXIoKSwgNCkgKyBcIi1cIiArIHBhZChkYXRlLmdldFVUQ01vbnRoKCkgKyAxLCAyKSArIFwiLVwiICsgcGFkKGRhdGUuZ2V0VVRDRGF0ZSgpLCAyKVxuICAgICAgKyAobWlsbGlzZWNvbmRzID8gXCJUXCIgKyBwYWQoaG91cnMsIDIpICsgXCI6XCIgKyBwYWQobWludXRlcywgMikgKyBcIjpcIiArIHBhZChzZWNvbmRzLCAyKSArIFwiLlwiICsgcGFkKG1pbGxpc2Vjb25kcywgMykgKyBcIlpcIlxuICAgICAgOiBzZWNvbmRzID8gXCJUXCIgKyBwYWQoaG91cnMsIDIpICsgXCI6XCIgKyBwYWQobWludXRlcywgMikgKyBcIjpcIiArIHBhZChzZWNvbmRzLCAyKSArIFwiWlwiXG4gICAgICA6IG1pbnV0ZXMgfHwgaG91cnMgPyBcIlRcIiArIHBhZChob3VycywgMikgKyBcIjpcIiArIHBhZChtaW51dGVzLCAyKSArIFwiWlwiXG4gICAgICA6IFwiXCIpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihkZWxpbWl0ZXIpIHtcbiAgdmFyIHJlRm9ybWF0ID0gbmV3IFJlZ0V4cChcIltcXFwiXCIgKyBkZWxpbWl0ZXIgKyBcIlxcblxccl1cIiksXG4gICAgICBERUxJTUlURVIgPSBkZWxpbWl0ZXIuY2hhckNvZGVBdCgwKTtcblxuICBmdW5jdGlvbiBwYXJzZSh0ZXh0LCBmKSB7XG4gICAgdmFyIGNvbnZlcnQsIGNvbHVtbnMsIHJvd3MgPSBwYXJzZVJvd3ModGV4dCwgZnVuY3Rpb24ocm93LCBpKSB7XG4gICAgICBpZiAoY29udmVydCkgcmV0dXJuIGNvbnZlcnQocm93LCBpIC0gMSk7XG4gICAgICBjb2x1bW5zID0gcm93LCBjb252ZXJ0ID0gZiA/IGN1c3RvbUNvbnZlcnRlcihyb3csIGYpIDogb2JqZWN0Q29udmVydGVyKHJvdyk7XG4gICAgfSk7XG4gICAgcm93cy5jb2x1bW5zID0gY29sdW1ucyB8fCBbXTtcbiAgICByZXR1cm4gcm93cztcbiAgfVxuXG4gIGZ1bmN0aW9uIHBhcnNlUm93cyh0ZXh0LCBmKSB7XG4gICAgdmFyIHJvd3MgPSBbXSwgLy8gb3V0cHV0IHJvd3NcbiAgICAgICAgTiA9IHRleHQubGVuZ3RoLFxuICAgICAgICBJID0gMCwgLy8gY3VycmVudCBjaGFyYWN0ZXIgaW5kZXhcbiAgICAgICAgbiA9IDAsIC8vIGN1cnJlbnQgbGluZSBudW1iZXJcbiAgICAgICAgdCwgLy8gY3VycmVudCB0b2tlblxuICAgICAgICBlb2YgPSBOIDw9IDAsIC8vIGN1cnJlbnQgdG9rZW4gZm9sbG93ZWQgYnkgRU9GP1xuICAgICAgICBlb2wgPSBmYWxzZTsgLy8gY3VycmVudCB0b2tlbiBmb2xsb3dlZCBieSBFT0w/XG5cbiAgICAvLyBTdHJpcCB0aGUgdHJhaWxpbmcgbmV3bGluZS5cbiAgICBpZiAodGV4dC5jaGFyQ29kZUF0KE4gLSAxKSA9PT0gTkVXTElORSkgLS1OO1xuICAgIGlmICh0ZXh0LmNoYXJDb2RlQXQoTiAtIDEpID09PSBSRVRVUk4pIC0tTjtcblxuICAgIGZ1bmN0aW9uIHRva2VuKCkge1xuICAgICAgaWYgKGVvZikgcmV0dXJuIEVPRjtcbiAgICAgIGlmIChlb2wpIHJldHVybiBlb2wgPSBmYWxzZSwgRU9MO1xuXG4gICAgICAvLyBVbmVzY2FwZSBxdW90ZXMuXG4gICAgICB2YXIgaSwgaiA9IEksIGM7XG4gICAgICBpZiAodGV4dC5jaGFyQ29kZUF0KGopID09PSBRVU9URSkge1xuICAgICAgICB3aGlsZSAoSSsrIDwgTiAmJiB0ZXh0LmNoYXJDb2RlQXQoSSkgIT09IFFVT1RFIHx8IHRleHQuY2hhckNvZGVBdCgrK0kpID09PSBRVU9URSk7XG4gICAgICAgIGlmICgoaSA9IEkpID49IE4pIGVvZiA9IHRydWU7XG4gICAgICAgIGVsc2UgaWYgKChjID0gdGV4dC5jaGFyQ29kZUF0KEkrKykpID09PSBORVdMSU5FKSBlb2wgPSB0cnVlO1xuICAgICAgICBlbHNlIGlmIChjID09PSBSRVRVUk4pIHsgZW9sID0gdHJ1ZTsgaWYgKHRleHQuY2hhckNvZGVBdChJKSA9PT0gTkVXTElORSkgKytJOyB9XG4gICAgICAgIHJldHVybiB0ZXh0LnNsaWNlKGogKyAxLCBpIC0gMSkucmVwbGFjZSgvXCJcIi9nLCBcIlxcXCJcIik7XG4gICAgICB9XG5cbiAgICAgIC8vIEZpbmQgbmV4dCBkZWxpbWl0ZXIgb3IgbmV3bGluZS5cbiAgICAgIHdoaWxlIChJIDwgTikge1xuICAgICAgICBpZiAoKGMgPSB0ZXh0LmNoYXJDb2RlQXQoaSA9IEkrKykpID09PSBORVdMSU5FKSBlb2wgPSB0cnVlO1xuICAgICAgICBlbHNlIGlmIChjID09PSBSRVRVUk4pIHsgZW9sID0gdHJ1ZTsgaWYgKHRleHQuY2hhckNvZGVBdChJKSA9PT0gTkVXTElORSkgKytJOyB9XG4gICAgICAgIGVsc2UgaWYgKGMgIT09IERFTElNSVRFUikgY29udGludWU7XG4gICAgICAgIHJldHVybiB0ZXh0LnNsaWNlKGosIGkpO1xuICAgICAgfVxuXG4gICAgICAvLyBSZXR1cm4gbGFzdCB0b2tlbiBiZWZvcmUgRU9GLlxuICAgICAgcmV0dXJuIGVvZiA9IHRydWUsIHRleHQuc2xpY2UoaiwgTik7XG4gICAgfVxuXG4gICAgd2hpbGUgKCh0ID0gdG9rZW4oKSkgIT09IEVPRikge1xuICAgICAgdmFyIHJvdyA9IFtdO1xuICAgICAgd2hpbGUgKHQgIT09IEVPTCAmJiB0ICE9PSBFT0YpIHJvdy5wdXNoKHQpLCB0ID0gdG9rZW4oKTtcbiAgICAgIGlmIChmICYmIChyb3cgPSBmKHJvdywgbisrKSkgPT0gbnVsbCkgY29udGludWU7XG4gICAgICByb3dzLnB1c2gocm93KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcm93cztcbiAgfVxuXG4gIGZ1bmN0aW9uIHByZWZvcm1hdEJvZHkocm93cywgY29sdW1ucykge1xuICAgIHJldHVybiByb3dzLm1hcChmdW5jdGlvbihyb3cpIHtcbiAgICAgIHJldHVybiBjb2x1bW5zLm1hcChmdW5jdGlvbihjb2x1bW4pIHtcbiAgICAgICAgcmV0dXJuIGZvcm1hdFZhbHVlKHJvd1tjb2x1bW5dKTtcbiAgICAgIH0pLmpvaW4oZGVsaW1pdGVyKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZvcm1hdChyb3dzLCBjb2x1bW5zKSB7XG4gICAgaWYgKGNvbHVtbnMgPT0gbnVsbCkgY29sdW1ucyA9IGluZmVyQ29sdW1ucyhyb3dzKTtcbiAgICByZXR1cm4gW2NvbHVtbnMubWFwKGZvcm1hdFZhbHVlKS5qb2luKGRlbGltaXRlcildLmNvbmNhdChwcmVmb3JtYXRCb2R5KHJvd3MsIGNvbHVtbnMpKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgZnVuY3Rpb24gZm9ybWF0Qm9keShyb3dzLCBjb2x1bW5zKSB7XG4gICAgaWYgKGNvbHVtbnMgPT0gbnVsbCkgY29sdW1ucyA9IGluZmVyQ29sdW1ucyhyb3dzKTtcbiAgICByZXR1cm4gcHJlZm9ybWF0Qm9keShyb3dzLCBjb2x1bW5zKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgZnVuY3Rpb24gZm9ybWF0Um93cyhyb3dzKSB7XG4gICAgcmV0dXJuIHJvd3MubWFwKGZvcm1hdFJvdykuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZvcm1hdFJvdyhyb3cpIHtcbiAgICByZXR1cm4gcm93Lm1hcChmb3JtYXRWYWx1ZSkuam9pbihkZWxpbWl0ZXIpO1xuICB9XG5cbiAgZnVuY3Rpb24gZm9ybWF0VmFsdWUodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgPT0gbnVsbCA/IFwiXCJcbiAgICAgICAgOiB2YWx1ZSBpbnN0YW5jZW9mIERhdGUgPyBmb3JtYXREYXRlKHZhbHVlKVxuICAgICAgICA6IHJlRm9ybWF0LnRlc3QodmFsdWUgKz0gXCJcIikgPyBcIlxcXCJcIiArIHZhbHVlLnJlcGxhY2UoL1wiL2csIFwiXFxcIlxcXCJcIikgKyBcIlxcXCJcIlxuICAgICAgICA6IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBwYXJzZTogcGFyc2UsXG4gICAgcGFyc2VSb3dzOiBwYXJzZVJvd3MsXG4gICAgZm9ybWF0OiBmb3JtYXQsXG4gICAgZm9ybWF0Qm9keTogZm9ybWF0Qm9keSxcbiAgICBmb3JtYXRSb3dzOiBmb3JtYXRSb3dzLFxuICAgIGZvcm1hdFJvdzogZm9ybWF0Um93LFxuICAgIGZvcm1hdFZhbHVlOiBmb3JtYXRWYWx1ZVxuICB9O1xufVxuIiwiZXhwb3J0IHtkZWZhdWx0IGFzIGRzdkZvcm1hdH0gZnJvbSBcIi4vZHN2LmpzXCI7XG5leHBvcnQge2NzdlBhcnNlLCBjc3ZQYXJzZVJvd3MsIGNzdkZvcm1hdCwgY3N2Rm9ybWF0Qm9keSwgY3N2Rm9ybWF0Um93cywgY3N2Rm9ybWF0Um93LCBjc3ZGb3JtYXRWYWx1ZX0gZnJvbSBcIi4vY3N2LmpzXCI7XG5leHBvcnQge3RzdlBhcnNlLCB0c3ZQYXJzZVJvd3MsIHRzdkZvcm1hdCwgdHN2Rm9ybWF0Qm9keSwgdHN2Rm9ybWF0Um93cywgdHN2Rm9ybWF0Um93LCB0c3ZGb3JtYXRWYWx1ZX0gZnJvbSBcIi4vdHN2LmpzXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgYXV0b1R5cGV9IGZyb20gXCIuL2F1dG9UeXBlLmpzXCI7XG4iLCJpbXBvcnQgZHN2IGZyb20gXCIuL2Rzdi5qc1wiO1xuXG52YXIgdHN2ID0gZHN2KFwiXFx0XCIpO1xuXG5leHBvcnQgdmFyIHRzdlBhcnNlID0gdHN2LnBhcnNlO1xuZXhwb3J0IHZhciB0c3ZQYXJzZVJvd3MgPSB0c3YucGFyc2VSb3dzO1xuZXhwb3J0IHZhciB0c3ZGb3JtYXQgPSB0c3YuZm9ybWF0O1xuZXhwb3J0IHZhciB0c3ZGb3JtYXRCb2R5ID0gdHN2LmZvcm1hdEJvZHk7XG5leHBvcnQgdmFyIHRzdkZvcm1hdFJvd3MgPSB0c3YuZm9ybWF0Um93cztcbmV4cG9ydCB2YXIgdHN2Rm9ybWF0Um93ID0gdHN2LmZvcm1hdFJvdztcbmV4cG9ydCB2YXIgdHN2Rm9ybWF0VmFsdWUgPSB0c3YuZm9ybWF0VmFsdWU7XG4iLCJmdW5jdGlvbiByZXNwb25zZUJsb2IocmVzcG9uc2UpIHtcbiAgaWYgKCFyZXNwb25zZS5vaykgdGhyb3cgbmV3IEVycm9yKHJlc3BvbnNlLnN0YXR1cyArIFwiIFwiICsgcmVzcG9uc2Uuc3RhdHVzVGV4dCk7XG4gIHJldHVybiByZXNwb25zZS5ibG9iKCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGlucHV0LCBpbml0KSB7XG4gIHJldHVybiBmZXRjaChpbnB1dCwgaW5pdCkudGhlbihyZXNwb25zZUJsb2IpO1xufVxuIiwiZnVuY3Rpb24gcmVzcG9uc2VBcnJheUJ1ZmZlcihyZXNwb25zZSkge1xuICBpZiAoIXJlc3BvbnNlLm9rKSB0aHJvdyBuZXcgRXJyb3IocmVzcG9uc2Uuc3RhdHVzICsgXCIgXCIgKyByZXNwb25zZS5zdGF0dXNUZXh0KTtcbiAgcmV0dXJuIHJlc3BvbnNlLmFycmF5QnVmZmVyKCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGlucHV0LCBpbml0KSB7XG4gIHJldHVybiBmZXRjaChpbnB1dCwgaW5pdCkudGhlbihyZXNwb25zZUFycmF5QnVmZmVyKTtcbn1cbiIsImltcG9ydCB7Y3N2UGFyc2UsIGRzdkZvcm1hdCwgdHN2UGFyc2V9IGZyb20gXCJkMy1kc3ZcIjtcbmltcG9ydCB0ZXh0IGZyb20gXCIuL3RleHQuanNcIjtcblxuZnVuY3Rpb24gZHN2UGFyc2UocGFyc2UpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGlucHV0LCBpbml0LCByb3cpIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMiAmJiB0eXBlb2YgaW5pdCA9PT0gXCJmdW5jdGlvblwiKSByb3cgPSBpbml0LCBpbml0ID0gdW5kZWZpbmVkO1xuICAgIHJldHVybiB0ZXh0KGlucHV0LCBpbml0KS50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICByZXR1cm4gcGFyc2UocmVzcG9uc2UsIHJvdyk7XG4gICAgfSk7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRzdihkZWxpbWl0ZXIsIGlucHV0LCBpbml0LCByb3cpIHtcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDMgJiYgdHlwZW9mIGluaXQgPT09IFwiZnVuY3Rpb25cIikgcm93ID0gaW5pdCwgaW5pdCA9IHVuZGVmaW5lZDtcbiAgdmFyIGZvcm1hdCA9IGRzdkZvcm1hdChkZWxpbWl0ZXIpO1xuICByZXR1cm4gdGV4dChpbnB1dCwgaW5pdCkudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuICAgIHJldHVybiBmb3JtYXQucGFyc2UocmVzcG9uc2UsIHJvdyk7XG4gIH0pO1xufVxuXG5leHBvcnQgdmFyIGNzdiA9IGRzdlBhcnNlKGNzdlBhcnNlKTtcbmV4cG9ydCB2YXIgdHN2ID0gZHN2UGFyc2UodHN2UGFyc2UpO1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oaW5wdXQsIGluaXQpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgIHZhciBpbWFnZSA9IG5ldyBJbWFnZTtcbiAgICBmb3IgKHZhciBrZXkgaW4gaW5pdCkgaW1hZ2Vba2V5XSA9IGluaXRba2V5XTtcbiAgICBpbWFnZS5vbmVycm9yID0gcmVqZWN0O1xuICAgIGltYWdlLm9ubG9hZCA9IGZ1bmN0aW9uKCkgeyByZXNvbHZlKGltYWdlKTsgfTtcbiAgICBpbWFnZS5zcmMgPSBpbnB1dDtcbiAgfSk7XG59XG4iLCJleHBvcnQge2RlZmF1bHQgYXMgYmxvYn0gZnJvbSBcIi4vYmxvYi5qc1wiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGJ1ZmZlcn0gZnJvbSBcIi4vYnVmZmVyLmpzXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgZHN2LCBjc3YsIHRzdn0gZnJvbSBcIi4vZHN2LmpzXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgaW1hZ2V9IGZyb20gXCIuL2ltYWdlLmpzXCI7XG5leHBvcnQge2RlZmF1bHQgYXMganNvbn0gZnJvbSBcIi4vanNvbi5qc1wiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIHRleHR9IGZyb20gXCIuL3RleHQuanNcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyB4bWwsIGh0bWwsIHN2Z30gZnJvbSBcIi4veG1sLmpzXCI7XG4iLCJmdW5jdGlvbiByZXNwb25zZUpzb24ocmVzcG9uc2UpIHtcbiAgaWYgKCFyZXNwb25zZS5vaykgdGhyb3cgbmV3IEVycm9yKHJlc3BvbnNlLnN0YXR1cyArIFwiIFwiICsgcmVzcG9uc2Uuc3RhdHVzVGV4dCk7XG4gIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwNCB8fCByZXNwb25zZS5zdGF0dXMgPT09IDIwNSkgcmV0dXJuO1xuICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihpbnB1dCwgaW5pdCkge1xuICByZXR1cm4gZmV0Y2goaW5wdXQsIGluaXQpLnRoZW4ocmVzcG9uc2VKc29uKTtcbn1cbiIsImZ1bmN0aW9uIHJlc3BvbnNlVGV4dChyZXNwb25zZSkge1xuICBpZiAoIXJlc3BvbnNlLm9rKSB0aHJvdyBuZXcgRXJyb3IocmVzcG9uc2Uuc3RhdHVzICsgXCIgXCIgKyByZXNwb25zZS5zdGF0dXNUZXh0KTtcbiAgcmV0dXJuIHJlc3BvbnNlLnRleHQoKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oaW5wdXQsIGluaXQpIHtcbiAgcmV0dXJuIGZldGNoKGlucHV0LCBpbml0KS50aGVuKHJlc3BvbnNlVGV4dCk7XG59XG4iLCJpbXBvcnQgdGV4dCBmcm9tIFwiLi90ZXh0LmpzXCI7XG5cbmZ1bmN0aW9uIHBhcnNlcih0eXBlKSB7XG4gIHJldHVybiAoaW5wdXQsIGluaXQpID0+IHRleHQoaW5wdXQsIGluaXQpXG4gICAgLnRoZW4odGV4dCA9PiAobmV3IERPTVBhcnNlcikucGFyc2VGcm9tU3RyaW5nKHRleHQsIHR5cGUpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcGFyc2VyKFwiYXBwbGljYXRpb24veG1sXCIpO1xuXG5leHBvcnQgdmFyIGh0bWwgPSBwYXJzZXIoXCJ0ZXh0L2h0bWxcIik7XG5cbmV4cG9ydCB2YXIgc3ZnID0gcGFyc2VyKFwiaW1hZ2Uvc3ZnK3htbFwiKTtcbiIsImV4cG9ydCBmdW5jdGlvbiBvcHRpb25hbChmKSB7XG4gIHJldHVybiBmID09IG51bGwgPyBudWxsIDogcmVxdWlyZWQoZik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXF1aXJlZChmKSB7XG4gIGlmICh0eXBlb2YgZiAhPT0gXCJmdW5jdGlvblwiKSB0aHJvdyBuZXcgRXJyb3I7XG4gIHJldHVybiBmO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oeCkge1xuICByZXR1cm4gdHlwZW9mIHggPT09IFwib2JqZWN0XCIgJiYgXCJsZW5ndGhcIiBpbiB4XG4gICAgPyB4IC8vIEFycmF5LCBUeXBlZEFycmF5LCBOb2RlTGlzdCwgYXJyYXktbGlrZVxuICAgIDogQXJyYXkuZnJvbSh4KTsgLy8gTWFwLCBTZXQsIGl0ZXJhYmxlLCBzdHJpbmcsIG9yIGFueXRoaW5nIGVsc2Vcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNodWZmbGUoYXJyYXkpIHtcbiAgdmFyIG0gPSBhcnJheS5sZW5ndGgsXG4gICAgICB0LFxuICAgICAgaTtcblxuICB3aGlsZSAobSkge1xuICAgIGkgPSBNYXRoLnJhbmRvbSgpICogbS0tIHwgMDtcbiAgICB0ID0gYXJyYXlbbV07XG4gICAgYXJyYXlbbV0gPSBhcnJheVtpXTtcbiAgICBhcnJheVtpXSA9IHQ7XG4gIH1cblxuICByZXR1cm4gYXJyYXk7XG59XG4iLCJmdW5jdGlvbiBkZWZhdWx0U2VwYXJhdGlvbihhLCBiKSB7XG4gIHJldHVybiBhLnBhcmVudCA9PT0gYi5wYXJlbnQgPyAxIDogMjtcbn1cblxuZnVuY3Rpb24gbWVhblgoY2hpbGRyZW4pIHtcbiAgcmV0dXJuIGNoaWxkcmVuLnJlZHVjZShtZWFuWFJlZHVjZSwgMCkgLyBjaGlsZHJlbi5sZW5ndGg7XG59XG5cbmZ1bmN0aW9uIG1lYW5YUmVkdWNlKHgsIGMpIHtcbiAgcmV0dXJuIHggKyBjLng7XG59XG5cbmZ1bmN0aW9uIG1heFkoY2hpbGRyZW4pIHtcbiAgcmV0dXJuIDEgKyBjaGlsZHJlbi5yZWR1Y2UobWF4WVJlZHVjZSwgMCk7XG59XG5cbmZ1bmN0aW9uIG1heFlSZWR1Y2UoeSwgYykge1xuICByZXR1cm4gTWF0aC5tYXgoeSwgYy55KTtcbn1cblxuZnVuY3Rpb24gbGVhZkxlZnQobm9kZSkge1xuICB2YXIgY2hpbGRyZW47XG4gIHdoaWxlIChjaGlsZHJlbiA9IG5vZGUuY2hpbGRyZW4pIG5vZGUgPSBjaGlsZHJlblswXTtcbiAgcmV0dXJuIG5vZGU7XG59XG5cbmZ1bmN0aW9uIGxlYWZSaWdodChub2RlKSB7XG4gIHZhciBjaGlsZHJlbjtcbiAgd2hpbGUgKGNoaWxkcmVuID0gbm9kZS5jaGlsZHJlbikgbm9kZSA9IGNoaWxkcmVuW2NoaWxkcmVuLmxlbmd0aCAtIDFdO1xuICByZXR1cm4gbm9kZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gIHZhciBzZXBhcmF0aW9uID0gZGVmYXVsdFNlcGFyYXRpb24sXG4gICAgICBkeCA9IDEsXG4gICAgICBkeSA9IDEsXG4gICAgICBub2RlU2l6ZSA9IGZhbHNlO1xuXG4gIGZ1bmN0aW9uIGNsdXN0ZXIocm9vdCkge1xuICAgIHZhciBwcmV2aW91c05vZGUsXG4gICAgICAgIHggPSAwO1xuXG4gICAgLy8gRmlyc3Qgd2FsaywgY29tcHV0aW5nIHRoZSBpbml0aWFsIHggJiB5IHZhbHVlcy5cbiAgICByb290LmVhY2hBZnRlcihmdW5jdGlvbihub2RlKSB7XG4gICAgICB2YXIgY2hpbGRyZW4gPSBub2RlLmNoaWxkcmVuO1xuICAgICAgaWYgKGNoaWxkcmVuKSB7XG4gICAgICAgIG5vZGUueCA9IG1lYW5YKGNoaWxkcmVuKTtcbiAgICAgICAgbm9kZS55ID0gbWF4WShjaGlsZHJlbik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBub2RlLnggPSBwcmV2aW91c05vZGUgPyB4ICs9IHNlcGFyYXRpb24obm9kZSwgcHJldmlvdXNOb2RlKSA6IDA7XG4gICAgICAgIG5vZGUueSA9IDA7XG4gICAgICAgIHByZXZpb3VzTm9kZSA9IG5vZGU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB2YXIgbGVmdCA9IGxlYWZMZWZ0KHJvb3QpLFxuICAgICAgICByaWdodCA9IGxlYWZSaWdodChyb290KSxcbiAgICAgICAgeDAgPSBsZWZ0LnggLSBzZXBhcmF0aW9uKGxlZnQsIHJpZ2h0KSAvIDIsXG4gICAgICAgIHgxID0gcmlnaHQueCArIHNlcGFyYXRpb24ocmlnaHQsIGxlZnQpIC8gMjtcblxuICAgIC8vIFNlY29uZCB3YWxrLCBub3JtYWxpemluZyB4ICYgeSB0byB0aGUgZGVzaXJlZCBzaXplLlxuICAgIHJldHVybiByb290LmVhY2hBZnRlcihub2RlU2l6ZSA/IGZ1bmN0aW9uKG5vZGUpIHtcbiAgICAgIG5vZGUueCA9IChub2RlLnggLSByb290LngpICogZHg7XG4gICAgICBub2RlLnkgPSAocm9vdC55IC0gbm9kZS55KSAqIGR5O1xuICAgIH0gOiBmdW5jdGlvbihub2RlKSB7XG4gICAgICBub2RlLnggPSAobm9kZS54IC0geDApIC8gKHgxIC0geDApICogZHg7XG4gICAgICBub2RlLnkgPSAoMSAtIChyb290LnkgPyBub2RlLnkgLyByb290LnkgOiAxKSkgKiBkeTtcbiAgICB9KTtcbiAgfVxuXG4gIGNsdXN0ZXIuc2VwYXJhdGlvbiA9IGZ1bmN0aW9uKHgpIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChzZXBhcmF0aW9uID0geCwgY2x1c3RlcikgOiBzZXBhcmF0aW9uO1xuICB9O1xuXG4gIGNsdXN0ZXIuc2l6ZSA9IGZ1bmN0aW9uKHgpIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChub2RlU2l6ZSA9IGZhbHNlLCBkeCA9ICt4WzBdLCBkeSA9ICt4WzFdLCBjbHVzdGVyKSA6IChub2RlU2l6ZSA/IG51bGwgOiBbZHgsIGR5XSk7XG4gIH07XG5cbiAgY2x1c3Rlci5ub2RlU2l6ZSA9IGZ1bmN0aW9uKHgpIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChub2RlU2l6ZSA9IHRydWUsIGR4ID0gK3hbMF0sIGR5ID0gK3hbMV0sIGNsdXN0ZXIpIDogKG5vZGVTaXplID8gW2R4LCBkeV0gOiBudWxsKTtcbiAgfTtcblxuICByZXR1cm4gY2x1c3Rlcjtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBjb25zdGFudFplcm8oKSB7XG4gIHJldHVybiAwO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbih4KSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4geDtcbiAgfTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICB2YXIgbm9kZSA9IHRoaXMsIG5vZGVzID0gW25vZGVdO1xuICB3aGlsZSAobm9kZSA9IG5vZGUucGFyZW50KSB7XG4gICAgbm9kZXMucHVzaChub2RlKTtcbiAgfVxuICByZXR1cm4gbm9kZXM7XG59XG4iLCJmdW5jdGlvbiBjb3VudChub2RlKSB7XG4gIHZhciBzdW0gPSAwLFxuICAgICAgY2hpbGRyZW4gPSBub2RlLmNoaWxkcmVuLFxuICAgICAgaSA9IGNoaWxkcmVuICYmIGNoaWxkcmVuLmxlbmd0aDtcbiAgaWYgKCFpKSBzdW0gPSAxO1xuICBlbHNlIHdoaWxlICgtLWkgPj0gMCkgc3VtICs9IGNoaWxkcmVuW2ldLnZhbHVlO1xuICBub2RlLnZhbHVlID0gc3VtO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMuZWFjaEFmdGVyKGNvdW50KTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gQXJyYXkuZnJvbSh0aGlzKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGNhbGxiYWNrLCB0aGF0KSB7XG4gIGxldCBpbmRleCA9IC0xO1xuICBmb3IgKGNvbnN0IG5vZGUgb2YgdGhpcykge1xuICAgIGNhbGxiYWNrLmNhbGwodGhhdCwgbm9kZSwgKytpbmRleCwgdGhpcyk7XG4gIH1cbiAgcmV0dXJuIHRoaXM7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihjYWxsYmFjaywgdGhhdCkge1xuICB2YXIgbm9kZSA9IHRoaXMsIG5vZGVzID0gW25vZGVdLCBuZXh0ID0gW10sIGNoaWxkcmVuLCBpLCBuLCBpbmRleCA9IC0xO1xuICB3aGlsZSAobm9kZSA9IG5vZGVzLnBvcCgpKSB7XG4gICAgbmV4dC5wdXNoKG5vZGUpO1xuICAgIGlmIChjaGlsZHJlbiA9IG5vZGUuY2hpbGRyZW4pIHtcbiAgICAgIGZvciAoaSA9IDAsIG4gPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBuOyArK2kpIHtcbiAgICAgICAgbm9kZXMucHVzaChjaGlsZHJlbltpXSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHdoaWxlIChub2RlID0gbmV4dC5wb3AoKSkge1xuICAgIGNhbGxiYWNrLmNhbGwodGhhdCwgbm9kZSwgKytpbmRleCwgdGhpcyk7XG4gIH1cbiAgcmV0dXJuIHRoaXM7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihjYWxsYmFjaywgdGhhdCkge1xuICB2YXIgbm9kZSA9IHRoaXMsIG5vZGVzID0gW25vZGVdLCBjaGlsZHJlbiwgaSwgaW5kZXggPSAtMTtcbiAgd2hpbGUgKG5vZGUgPSBub2Rlcy5wb3AoKSkge1xuICAgIGNhbGxiYWNrLmNhbGwodGhhdCwgbm9kZSwgKytpbmRleCwgdGhpcyk7XG4gICAgaWYgKGNoaWxkcmVuID0gbm9kZS5jaGlsZHJlbikge1xuICAgICAgZm9yIChpID0gY2hpbGRyZW4ubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgbm9kZXMucHVzaChjaGlsZHJlbltpXSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiB0aGlzO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oY2FsbGJhY2ssIHRoYXQpIHtcbiAgbGV0IGluZGV4ID0gLTE7XG4gIGZvciAoY29uc3Qgbm9kZSBvZiB0aGlzKSB7XG4gICAgaWYgKGNhbGxiYWNrLmNhbGwodGhhdCwgbm9kZSwgKytpbmRleCwgdGhpcykpIHtcbiAgICAgIHJldHVybiBub2RlO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IG5vZGVfY291bnQgZnJvbSBcIi4vY291bnQuanNcIjtcbmltcG9ydCBub2RlX2VhY2ggZnJvbSBcIi4vZWFjaC5qc1wiO1xuaW1wb3J0IG5vZGVfZWFjaEJlZm9yZSBmcm9tIFwiLi9lYWNoQmVmb3JlLmpzXCI7XG5pbXBvcnQgbm9kZV9lYWNoQWZ0ZXIgZnJvbSBcIi4vZWFjaEFmdGVyLmpzXCI7XG5pbXBvcnQgbm9kZV9maW5kIGZyb20gXCIuL2ZpbmQuanNcIjtcbmltcG9ydCBub2RlX3N1bSBmcm9tIFwiLi9zdW0uanNcIjtcbmltcG9ydCBub2RlX3NvcnQgZnJvbSBcIi4vc29ydC5qc1wiO1xuaW1wb3J0IG5vZGVfcGF0aCBmcm9tIFwiLi9wYXRoLmpzXCI7XG5pbXBvcnQgbm9kZV9hbmNlc3RvcnMgZnJvbSBcIi4vYW5jZXN0b3JzLmpzXCI7XG5pbXBvcnQgbm9kZV9kZXNjZW5kYW50cyBmcm9tIFwiLi9kZXNjZW5kYW50cy5qc1wiO1xuaW1wb3J0IG5vZGVfbGVhdmVzIGZyb20gXCIuL2xlYXZlcy5qc1wiO1xuaW1wb3J0IG5vZGVfbGlua3MgZnJvbSBcIi4vbGlua3MuanNcIjtcbmltcG9ydCBub2RlX2l0ZXJhdG9yIGZyb20gXCIuL2l0ZXJhdG9yLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhpZXJhcmNoeShkYXRhLCBjaGlsZHJlbikge1xuICBpZiAoZGF0YSBpbnN0YW5jZW9mIE1hcCkge1xuICAgIGRhdGEgPSBbdW5kZWZpbmVkLCBkYXRhXTtcbiAgICBpZiAoY2hpbGRyZW4gPT09IHVuZGVmaW5lZCkgY2hpbGRyZW4gPSBtYXBDaGlsZHJlbjtcbiAgfSBlbHNlIGlmIChjaGlsZHJlbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgY2hpbGRyZW4gPSBvYmplY3RDaGlsZHJlbjtcbiAgfVxuXG4gIHZhciByb290ID0gbmV3IE5vZGUoZGF0YSksXG4gICAgICBub2RlLFxuICAgICAgbm9kZXMgPSBbcm9vdF0sXG4gICAgICBjaGlsZCxcbiAgICAgIGNoaWxkcyxcbiAgICAgIGksXG4gICAgICBuO1xuXG4gIHdoaWxlIChub2RlID0gbm9kZXMucG9wKCkpIHtcbiAgICBpZiAoKGNoaWxkcyA9IGNoaWxkcmVuKG5vZGUuZGF0YSkpICYmIChuID0gKGNoaWxkcyA9IEFycmF5LmZyb20oY2hpbGRzKSkubGVuZ3RoKSkge1xuICAgICAgbm9kZS5jaGlsZHJlbiA9IGNoaWxkcztcbiAgICAgIGZvciAoaSA9IG4gLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICBub2Rlcy5wdXNoKGNoaWxkID0gY2hpbGRzW2ldID0gbmV3IE5vZGUoY2hpbGRzW2ldKSk7XG4gICAgICAgIGNoaWxkLnBhcmVudCA9IG5vZGU7XG4gICAgICAgIGNoaWxkLmRlcHRoID0gbm9kZS5kZXB0aCArIDE7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJvb3QuZWFjaEJlZm9yZShjb21wdXRlSGVpZ2h0KTtcbn1cblxuZnVuY3Rpb24gbm9kZV9jb3B5KCkge1xuICByZXR1cm4gaGllcmFyY2h5KHRoaXMpLmVhY2hCZWZvcmUoY29weURhdGEpO1xufVxuXG5mdW5jdGlvbiBvYmplY3RDaGlsZHJlbihkKSB7XG4gIHJldHVybiBkLmNoaWxkcmVuO1xufVxuXG5mdW5jdGlvbiBtYXBDaGlsZHJlbihkKSB7XG4gIHJldHVybiBBcnJheS5pc0FycmF5KGQpID8gZFsxXSA6IG51bGw7XG59XG5cbmZ1bmN0aW9uIGNvcHlEYXRhKG5vZGUpIHtcbiAgaWYgKG5vZGUuZGF0YS52YWx1ZSAhPT0gdW5kZWZpbmVkKSBub2RlLnZhbHVlID0gbm9kZS5kYXRhLnZhbHVlO1xuICBub2RlLmRhdGEgPSBub2RlLmRhdGEuZGF0YTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXB1dGVIZWlnaHQobm9kZSkge1xuICB2YXIgaGVpZ2h0ID0gMDtcbiAgZG8gbm9kZS5oZWlnaHQgPSBoZWlnaHQ7XG4gIHdoaWxlICgobm9kZSA9IG5vZGUucGFyZW50KSAmJiAobm9kZS5oZWlnaHQgPCArK2hlaWdodCkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gTm9kZShkYXRhKSB7XG4gIHRoaXMuZGF0YSA9IGRhdGE7XG4gIHRoaXMuZGVwdGggPVxuICB0aGlzLmhlaWdodCA9IDA7XG4gIHRoaXMucGFyZW50ID0gbnVsbDtcbn1cblxuTm9kZS5wcm90b3R5cGUgPSBoaWVyYXJjaHkucHJvdG90eXBlID0ge1xuICBjb25zdHJ1Y3RvcjogTm9kZSxcbiAgY291bnQ6IG5vZGVfY291bnQsXG4gIGVhY2g6IG5vZGVfZWFjaCxcbiAgZWFjaEFmdGVyOiBub2RlX2VhY2hBZnRlcixcbiAgZWFjaEJlZm9yZTogbm9kZV9lYWNoQmVmb3JlLFxuICBmaW5kOiBub2RlX2ZpbmQsXG4gIHN1bTogbm9kZV9zdW0sXG4gIHNvcnQ6IG5vZGVfc29ydCxcbiAgcGF0aDogbm9kZV9wYXRoLFxuICBhbmNlc3RvcnM6IG5vZGVfYW5jZXN0b3JzLFxuICBkZXNjZW5kYW50czogbm9kZV9kZXNjZW5kYW50cyxcbiAgbGVhdmVzOiBub2RlX2xlYXZlcyxcbiAgbGlua3M6IG5vZGVfbGlua3MsXG4gIGNvcHk6IG5vZGVfY29weSxcbiAgW1N5bWJvbC5pdGVyYXRvcl06IG5vZGVfaXRlcmF0b3Jcbn07XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiooKSB7XG4gIHZhciBub2RlID0gdGhpcywgY3VycmVudCwgbmV4dCA9IFtub2RlXSwgY2hpbGRyZW4sIGksIG47XG4gIGRvIHtcbiAgICBjdXJyZW50ID0gbmV4dC5yZXZlcnNlKCksIG5leHQgPSBbXTtcbiAgICB3aGlsZSAobm9kZSA9IGN1cnJlbnQucG9wKCkpIHtcbiAgICAgIHlpZWxkIG5vZGU7XG4gICAgICBpZiAoY2hpbGRyZW4gPSBub2RlLmNoaWxkcmVuKSB7XG4gICAgICAgIGZvciAoaSA9IDAsIG4gPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBuOyArK2kpIHtcbiAgICAgICAgICBuZXh0LnB1c2goY2hpbGRyZW5baV0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9IHdoaWxlIChuZXh0Lmxlbmd0aCk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgdmFyIGxlYXZlcyA9IFtdO1xuICB0aGlzLmVhY2hCZWZvcmUoZnVuY3Rpb24obm9kZSkge1xuICAgIGlmICghbm9kZS5jaGlsZHJlbikge1xuICAgICAgbGVhdmVzLnB1c2gobm9kZSk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIGxlYXZlcztcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICB2YXIgcm9vdCA9IHRoaXMsIGxpbmtzID0gW107XG4gIHJvb3QuZWFjaChmdW5jdGlvbihub2RlKSB7XG4gICAgaWYgKG5vZGUgIT09IHJvb3QpIHsgLy8gRG9u4oCZdCBpbmNsdWRlIHRoZSByb2904oCZcyBwYXJlbnQsIGlmIGFueS5cbiAgICAgIGxpbmtzLnB1c2goe3NvdXJjZTogbm9kZS5wYXJlbnQsIHRhcmdldDogbm9kZX0pO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBsaW5rcztcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGVuZCkge1xuICB2YXIgc3RhcnQgPSB0aGlzLFxuICAgICAgYW5jZXN0b3IgPSBsZWFzdENvbW1vbkFuY2VzdG9yKHN0YXJ0LCBlbmQpLFxuICAgICAgbm9kZXMgPSBbc3RhcnRdO1xuICB3aGlsZSAoc3RhcnQgIT09IGFuY2VzdG9yKSB7XG4gICAgc3RhcnQgPSBzdGFydC5wYXJlbnQ7XG4gICAgbm9kZXMucHVzaChzdGFydCk7XG4gIH1cbiAgdmFyIGsgPSBub2Rlcy5sZW5ndGg7XG4gIHdoaWxlIChlbmQgIT09IGFuY2VzdG9yKSB7XG4gICAgbm9kZXMuc3BsaWNlKGssIDAsIGVuZCk7XG4gICAgZW5kID0gZW5kLnBhcmVudDtcbiAgfVxuICByZXR1cm4gbm9kZXM7XG59XG5cbmZ1bmN0aW9uIGxlYXN0Q29tbW9uQW5jZXN0b3IoYSwgYikge1xuICBpZiAoYSA9PT0gYikgcmV0dXJuIGE7XG4gIHZhciBhTm9kZXMgPSBhLmFuY2VzdG9ycygpLFxuICAgICAgYk5vZGVzID0gYi5hbmNlc3RvcnMoKSxcbiAgICAgIGMgPSBudWxsO1xuICBhID0gYU5vZGVzLnBvcCgpO1xuICBiID0gYk5vZGVzLnBvcCgpO1xuICB3aGlsZSAoYSA9PT0gYikge1xuICAgIGMgPSBhO1xuICAgIGEgPSBhTm9kZXMucG9wKCk7XG4gICAgYiA9IGJOb2Rlcy5wb3AoKTtcbiAgfVxuICByZXR1cm4gYztcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGNvbXBhcmUpIHtcbiAgcmV0dXJuIHRoaXMuZWFjaEJlZm9yZShmdW5jdGlvbihub2RlKSB7XG4gICAgaWYgKG5vZGUuY2hpbGRyZW4pIHtcbiAgICAgIG5vZGUuY2hpbGRyZW4uc29ydChjb21wYXJlKTtcbiAgICB9XG4gIH0pO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24odmFsdWUpIHtcbiAgcmV0dXJuIHRoaXMuZWFjaEFmdGVyKGZ1bmN0aW9uKG5vZGUpIHtcbiAgICB2YXIgc3VtID0gK3ZhbHVlKG5vZGUuZGF0YSkgfHwgMCxcbiAgICAgICAgY2hpbGRyZW4gPSBub2RlLmNoaWxkcmVuLFxuICAgICAgICBpID0gY2hpbGRyZW4gJiYgY2hpbGRyZW4ubGVuZ3RoO1xuICAgIHdoaWxlICgtLWkgPj0gMCkgc3VtICs9IGNoaWxkcmVuW2ldLnZhbHVlO1xuICAgIG5vZGUudmFsdWUgPSBzdW07XG4gIH0pO1xufVxuIiwiZXhwb3J0IHtkZWZhdWx0IGFzIGNsdXN0ZXJ9IGZyb20gXCIuL2NsdXN0ZXIuanNcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBoaWVyYXJjaHksIE5vZGV9IGZyb20gXCIuL2hpZXJhcmNoeS9pbmRleC5qc1wiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIHBhY2t9IGZyb20gXCIuL3BhY2svaW5kZXguanNcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBwYWNrU2libGluZ3N9IGZyb20gXCIuL3BhY2svc2libGluZ3MuanNcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBwYWNrRW5jbG9zZX0gZnJvbSBcIi4vcGFjay9lbmNsb3NlLmpzXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgcGFydGl0aW9ufSBmcm9tIFwiLi9wYXJ0aXRpb24uanNcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBzdHJhdGlmeX0gZnJvbSBcIi4vc3RyYXRpZnkuanNcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyB0cmVlfSBmcm9tIFwiLi90cmVlLmpzXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgdHJlZW1hcH0gZnJvbSBcIi4vdHJlZW1hcC9pbmRleC5qc1wiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIHRyZWVtYXBCaW5hcnl9IGZyb20gXCIuL3RyZWVtYXAvYmluYXJ5LmpzXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgdHJlZW1hcERpY2V9IGZyb20gXCIuL3RyZWVtYXAvZGljZS5qc1wiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIHRyZWVtYXBTbGljZX0gZnJvbSBcIi4vdHJlZW1hcC9zbGljZS5qc1wiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIHRyZWVtYXBTbGljZURpY2V9IGZyb20gXCIuL3RyZWVtYXAvc2xpY2VEaWNlLmpzXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgdHJlZW1hcFNxdWFyaWZ5fSBmcm9tIFwiLi90cmVlbWFwL3NxdWFyaWZ5LmpzXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgdHJlZW1hcFJlc3F1YXJpZnl9IGZyb20gXCIuL3RyZWVtYXAvcmVzcXVhcmlmeS5qc1wiO1xuIiwiaW1wb3J0IHtzaHVmZmxlfSBmcm9tIFwiLi4vYXJyYXkuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oY2lyY2xlcykge1xuICB2YXIgaSA9IDAsIG4gPSAoY2lyY2xlcyA9IHNodWZmbGUoQXJyYXkuZnJvbShjaXJjbGVzKSkpLmxlbmd0aCwgQiA9IFtdLCBwLCBlO1xuXG4gIHdoaWxlIChpIDwgbikge1xuICAgIHAgPSBjaXJjbGVzW2ldO1xuICAgIGlmIChlICYmIGVuY2xvc2VzV2VhayhlLCBwKSkgKytpO1xuICAgIGVsc2UgZSA9IGVuY2xvc2VCYXNpcyhCID0gZXh0ZW5kQmFzaXMoQiwgcCkpLCBpID0gMDtcbiAgfVxuXG4gIHJldHVybiBlO1xufVxuXG5mdW5jdGlvbiBleHRlbmRCYXNpcyhCLCBwKSB7XG4gIHZhciBpLCBqO1xuXG4gIGlmIChlbmNsb3Nlc1dlYWtBbGwocCwgQikpIHJldHVybiBbcF07XG5cbiAgLy8gSWYgd2UgZ2V0IGhlcmUgdGhlbiBCIG11c3QgaGF2ZSBhdCBsZWFzdCBvbmUgZWxlbWVudC5cbiAgZm9yIChpID0gMDsgaSA8IEIubGVuZ3RoOyArK2kpIHtcbiAgICBpZiAoZW5jbG9zZXNOb3QocCwgQltpXSlcbiAgICAgICAgJiYgZW5jbG9zZXNXZWFrQWxsKGVuY2xvc2VCYXNpczIoQltpXSwgcCksIEIpKSB7XG4gICAgICByZXR1cm4gW0JbaV0sIHBdO1xuICAgIH1cbiAgfVxuXG4gIC8vIElmIHdlIGdldCBoZXJlIHRoZW4gQiBtdXN0IGhhdmUgYXQgbGVhc3QgdHdvIGVsZW1lbnRzLlxuICBmb3IgKGkgPSAwOyBpIDwgQi5sZW5ndGggLSAxOyArK2kpIHtcbiAgICBmb3IgKGogPSBpICsgMTsgaiA8IEIubGVuZ3RoOyArK2opIHtcbiAgICAgIGlmIChlbmNsb3Nlc05vdChlbmNsb3NlQmFzaXMyKEJbaV0sIEJbal0pLCBwKVxuICAgICAgICAgICYmIGVuY2xvc2VzTm90KGVuY2xvc2VCYXNpczIoQltpXSwgcCksIEJbal0pXG4gICAgICAgICAgJiYgZW5jbG9zZXNOb3QoZW5jbG9zZUJhc2lzMihCW2pdLCBwKSwgQltpXSlcbiAgICAgICAgICAmJiBlbmNsb3Nlc1dlYWtBbGwoZW5jbG9zZUJhc2lzMyhCW2ldLCBCW2pdLCBwKSwgQikpIHtcbiAgICAgICAgcmV0dXJuIFtCW2ldLCBCW2pdLCBwXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBJZiB3ZSBnZXQgaGVyZSB0aGVuIHNvbWV0aGluZyBpcyB2ZXJ5IHdyb25nLlxuICB0aHJvdyBuZXcgRXJyb3I7XG59XG5cbmZ1bmN0aW9uIGVuY2xvc2VzTm90KGEsIGIpIHtcbiAgdmFyIGRyID0gYS5yIC0gYi5yLCBkeCA9IGIueCAtIGEueCwgZHkgPSBiLnkgLSBhLnk7XG4gIHJldHVybiBkciA8IDAgfHwgZHIgKiBkciA8IGR4ICogZHggKyBkeSAqIGR5O1xufVxuXG5mdW5jdGlvbiBlbmNsb3Nlc1dlYWsoYSwgYikge1xuICB2YXIgZHIgPSBhLnIgLSBiLnIgKyBNYXRoLm1heChhLnIsIGIuciwgMSkgKiAxZS05LCBkeCA9IGIueCAtIGEueCwgZHkgPSBiLnkgLSBhLnk7XG4gIHJldHVybiBkciA+IDAgJiYgZHIgKiBkciA+IGR4ICogZHggKyBkeSAqIGR5O1xufVxuXG5mdW5jdGlvbiBlbmNsb3Nlc1dlYWtBbGwoYSwgQikge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IEIubGVuZ3RoOyArK2kpIHtcbiAgICBpZiAoIWVuY2xvc2VzV2VhayhhLCBCW2ldKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gZW5jbG9zZUJhc2lzKEIpIHtcbiAgc3dpdGNoIChCLmxlbmd0aCkge1xuICAgIGNhc2UgMTogcmV0dXJuIGVuY2xvc2VCYXNpczEoQlswXSk7XG4gICAgY2FzZSAyOiByZXR1cm4gZW5jbG9zZUJhc2lzMihCWzBdLCBCWzFdKTtcbiAgICBjYXNlIDM6IHJldHVybiBlbmNsb3NlQmFzaXMzKEJbMF0sIEJbMV0sIEJbMl0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGVuY2xvc2VCYXNpczEoYSkge1xuICByZXR1cm4ge1xuICAgIHg6IGEueCxcbiAgICB5OiBhLnksXG4gICAgcjogYS5yXG4gIH07XG59XG5cbmZ1bmN0aW9uIGVuY2xvc2VCYXNpczIoYSwgYikge1xuICB2YXIgeDEgPSBhLngsIHkxID0gYS55LCByMSA9IGEucixcbiAgICAgIHgyID0gYi54LCB5MiA9IGIueSwgcjIgPSBiLnIsXG4gICAgICB4MjEgPSB4MiAtIHgxLCB5MjEgPSB5MiAtIHkxLCByMjEgPSByMiAtIHIxLFxuICAgICAgbCA9IE1hdGguc3FydCh4MjEgKiB4MjEgKyB5MjEgKiB5MjEpO1xuICByZXR1cm4ge1xuICAgIHg6ICh4MSArIHgyICsgeDIxIC8gbCAqIHIyMSkgLyAyLFxuICAgIHk6ICh5MSArIHkyICsgeTIxIC8gbCAqIHIyMSkgLyAyLFxuICAgIHI6IChsICsgcjEgKyByMikgLyAyXG4gIH07XG59XG5cbmZ1bmN0aW9uIGVuY2xvc2VCYXNpczMoYSwgYiwgYykge1xuICB2YXIgeDEgPSBhLngsIHkxID0gYS55LCByMSA9IGEucixcbiAgICAgIHgyID0gYi54LCB5MiA9IGIueSwgcjIgPSBiLnIsXG4gICAgICB4MyA9IGMueCwgeTMgPSBjLnksIHIzID0gYy5yLFxuICAgICAgYTIgPSB4MSAtIHgyLFxuICAgICAgYTMgPSB4MSAtIHgzLFxuICAgICAgYjIgPSB5MSAtIHkyLFxuICAgICAgYjMgPSB5MSAtIHkzLFxuICAgICAgYzIgPSByMiAtIHIxLFxuICAgICAgYzMgPSByMyAtIHIxLFxuICAgICAgZDEgPSB4MSAqIHgxICsgeTEgKiB5MSAtIHIxICogcjEsXG4gICAgICBkMiA9IGQxIC0geDIgKiB4MiAtIHkyICogeTIgKyByMiAqIHIyLFxuICAgICAgZDMgPSBkMSAtIHgzICogeDMgLSB5MyAqIHkzICsgcjMgKiByMyxcbiAgICAgIGFiID0gYTMgKiBiMiAtIGEyICogYjMsXG4gICAgICB4YSA9IChiMiAqIGQzIC0gYjMgKiBkMikgLyAoYWIgKiAyKSAtIHgxLFxuICAgICAgeGIgPSAoYjMgKiBjMiAtIGIyICogYzMpIC8gYWIsXG4gICAgICB5YSA9IChhMyAqIGQyIC0gYTIgKiBkMykgLyAoYWIgKiAyKSAtIHkxLFxuICAgICAgeWIgPSAoYTIgKiBjMyAtIGEzICogYzIpIC8gYWIsXG4gICAgICBBID0geGIgKiB4YiArIHliICogeWIgLSAxLFxuICAgICAgQiA9IDIgKiAocjEgKyB4YSAqIHhiICsgeWEgKiB5YiksXG4gICAgICBDID0geGEgKiB4YSArIHlhICogeWEgLSByMSAqIHIxLFxuICAgICAgciA9IC0oQSA/IChCICsgTWF0aC5zcXJ0KEIgKiBCIC0gNCAqIEEgKiBDKSkgLyAoMiAqIEEpIDogQyAvIEIpO1xuICByZXR1cm4ge1xuICAgIHg6IHgxICsgeGEgKyB4YiAqIHIsXG4gICAgeTogeTEgKyB5YSArIHliICogcixcbiAgICByOiByXG4gIH07XG59XG4iLCJpbXBvcnQge3BhY2tFbmNsb3NlfSBmcm9tIFwiLi9zaWJsaW5ncy5qc1wiO1xuaW1wb3J0IHtvcHRpb25hbH0gZnJvbSBcIi4uL2FjY2Vzc29ycy5qc1wiO1xuaW1wb3J0IGNvbnN0YW50LCB7Y29uc3RhbnRaZXJvfSBmcm9tIFwiLi4vY29uc3RhbnQuanNcIjtcblxuZnVuY3Rpb24gZGVmYXVsdFJhZGl1cyhkKSB7XG4gIHJldHVybiBNYXRoLnNxcnQoZC52YWx1ZSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICB2YXIgcmFkaXVzID0gbnVsbCxcbiAgICAgIGR4ID0gMSxcbiAgICAgIGR5ID0gMSxcbiAgICAgIHBhZGRpbmcgPSBjb25zdGFudFplcm87XG5cbiAgZnVuY3Rpb24gcGFjayhyb290KSB7XG4gICAgcm9vdC54ID0gZHggLyAyLCByb290LnkgPSBkeSAvIDI7XG4gICAgaWYgKHJhZGl1cykge1xuICAgICAgcm9vdC5lYWNoQmVmb3JlKHJhZGl1c0xlYWYocmFkaXVzKSlcbiAgICAgICAgICAuZWFjaEFmdGVyKHBhY2tDaGlsZHJlbihwYWRkaW5nLCAwLjUpKVxuICAgICAgICAgIC5lYWNoQmVmb3JlKHRyYW5zbGF0ZUNoaWxkKDEpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcm9vdC5lYWNoQmVmb3JlKHJhZGl1c0xlYWYoZGVmYXVsdFJhZGl1cykpXG4gICAgICAgICAgLmVhY2hBZnRlcihwYWNrQ2hpbGRyZW4oY29uc3RhbnRaZXJvLCAxKSlcbiAgICAgICAgICAuZWFjaEFmdGVyKHBhY2tDaGlsZHJlbihwYWRkaW5nLCByb290LnIgLyBNYXRoLm1pbihkeCwgZHkpKSlcbiAgICAgICAgICAuZWFjaEJlZm9yZSh0cmFuc2xhdGVDaGlsZChNYXRoLm1pbihkeCwgZHkpIC8gKDIgKiByb290LnIpKSk7XG4gICAgfVxuICAgIHJldHVybiByb290O1xuICB9XG5cbiAgcGFjay5yYWRpdXMgPSBmdW5jdGlvbih4KSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAocmFkaXVzID0gb3B0aW9uYWwoeCksIHBhY2spIDogcmFkaXVzO1xuICB9O1xuXG4gIHBhY2suc2l6ZSA9IGZ1bmN0aW9uKHgpIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChkeCA9ICt4WzBdLCBkeSA9ICt4WzFdLCBwYWNrKSA6IFtkeCwgZHldO1xuICB9O1xuXG4gIHBhY2sucGFkZGluZyA9IGZ1bmN0aW9uKHgpIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChwYWRkaW5nID0gdHlwZW9mIHggPT09IFwiZnVuY3Rpb25cIiA/IHggOiBjb25zdGFudCgreCksIHBhY2spIDogcGFkZGluZztcbiAgfTtcblxuICByZXR1cm4gcGFjaztcbn1cblxuZnVuY3Rpb24gcmFkaXVzTGVhZihyYWRpdXMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKG5vZGUpIHtcbiAgICBpZiAoIW5vZGUuY2hpbGRyZW4pIHtcbiAgICAgIG5vZGUuciA9IE1hdGgubWF4KDAsICtyYWRpdXMobm9kZSkgfHwgMCk7XG4gICAgfVxuICB9O1xufVxuXG5mdW5jdGlvbiBwYWNrQ2hpbGRyZW4ocGFkZGluZywgaykge1xuICByZXR1cm4gZnVuY3Rpb24obm9kZSkge1xuICAgIGlmIChjaGlsZHJlbiA9IG5vZGUuY2hpbGRyZW4pIHtcbiAgICAgIHZhciBjaGlsZHJlbixcbiAgICAgICAgICBpLFxuICAgICAgICAgIG4gPSBjaGlsZHJlbi5sZW5ndGgsXG4gICAgICAgICAgciA9IHBhZGRpbmcobm9kZSkgKiBrIHx8IDAsXG4gICAgICAgICAgZTtcblxuICAgICAgaWYgKHIpIGZvciAoaSA9IDA7IGkgPCBuOyArK2kpIGNoaWxkcmVuW2ldLnIgKz0gcjtcbiAgICAgIGUgPSBwYWNrRW5jbG9zZShjaGlsZHJlbik7XG4gICAgICBpZiAocikgZm9yIChpID0gMDsgaSA8IG47ICsraSkgY2hpbGRyZW5baV0uciAtPSByO1xuICAgICAgbm9kZS5yID0gZSArIHI7XG4gICAgfVxuICB9O1xufVxuXG5mdW5jdGlvbiB0cmFuc2xhdGVDaGlsZChrKSB7XG4gIHJldHVybiBmdW5jdGlvbihub2RlKSB7XG4gICAgdmFyIHBhcmVudCA9IG5vZGUucGFyZW50O1xuICAgIG5vZGUuciAqPSBrO1xuICAgIGlmIChwYXJlbnQpIHtcbiAgICAgIG5vZGUueCA9IHBhcmVudC54ICsgayAqIG5vZGUueDtcbiAgICAgIG5vZGUueSA9IHBhcmVudC55ICsgayAqIG5vZGUueTtcbiAgICB9XG4gIH07XG59XG4iLCJpbXBvcnQgYXJyYXkgZnJvbSBcIi4uL2FycmF5LmpzXCI7XG5pbXBvcnQgZW5jbG9zZSBmcm9tIFwiLi9lbmNsb3NlLmpzXCI7XG5cbmZ1bmN0aW9uIHBsYWNlKGIsIGEsIGMpIHtcbiAgdmFyIGR4ID0gYi54IC0gYS54LCB4LCBhMixcbiAgICAgIGR5ID0gYi55IC0gYS55LCB5LCBiMixcbiAgICAgIGQyID0gZHggKiBkeCArIGR5ICogZHk7XG4gIGlmIChkMikge1xuICAgIGEyID0gYS5yICsgYy5yLCBhMiAqPSBhMjtcbiAgICBiMiA9IGIuciArIGMuciwgYjIgKj0gYjI7XG4gICAgaWYgKGEyID4gYjIpIHtcbiAgICAgIHggPSAoZDIgKyBiMiAtIGEyKSAvICgyICogZDIpO1xuICAgICAgeSA9IE1hdGguc3FydChNYXRoLm1heCgwLCBiMiAvIGQyIC0geCAqIHgpKTtcbiAgICAgIGMueCA9IGIueCAtIHggKiBkeCAtIHkgKiBkeTtcbiAgICAgIGMueSA9IGIueSAtIHggKiBkeSArIHkgKiBkeDtcbiAgICB9IGVsc2Uge1xuICAgICAgeCA9IChkMiArIGEyIC0gYjIpIC8gKDIgKiBkMik7XG4gICAgICB5ID0gTWF0aC5zcXJ0KE1hdGgubWF4KDAsIGEyIC8gZDIgLSB4ICogeCkpO1xuICAgICAgYy54ID0gYS54ICsgeCAqIGR4IC0geSAqIGR5O1xuICAgICAgYy55ID0gYS55ICsgeCAqIGR5ICsgeSAqIGR4O1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBjLnggPSBhLnggKyBjLnI7XG4gICAgYy55ID0gYS55O1xuICB9XG59XG5cbmZ1bmN0aW9uIGludGVyc2VjdHMoYSwgYikge1xuICB2YXIgZHIgPSBhLnIgKyBiLnIgLSAxZS02LCBkeCA9IGIueCAtIGEueCwgZHkgPSBiLnkgLSBhLnk7XG4gIHJldHVybiBkciA+IDAgJiYgZHIgKiBkciA+IGR4ICogZHggKyBkeSAqIGR5O1xufVxuXG5mdW5jdGlvbiBzY29yZShub2RlKSB7XG4gIHZhciBhID0gbm9kZS5fLFxuICAgICAgYiA9IG5vZGUubmV4dC5fLFxuICAgICAgYWIgPSBhLnIgKyBiLnIsXG4gICAgICBkeCA9IChhLnggKiBiLnIgKyBiLnggKiBhLnIpIC8gYWIsXG4gICAgICBkeSA9IChhLnkgKiBiLnIgKyBiLnkgKiBhLnIpIC8gYWI7XG4gIHJldHVybiBkeCAqIGR4ICsgZHkgKiBkeTtcbn1cblxuZnVuY3Rpb24gTm9kZShjaXJjbGUpIHtcbiAgdGhpcy5fID0gY2lyY2xlO1xuICB0aGlzLm5leHQgPSBudWxsO1xuICB0aGlzLnByZXZpb3VzID0gbnVsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhY2tFbmNsb3NlKGNpcmNsZXMpIHtcbiAgaWYgKCEobiA9IChjaXJjbGVzID0gYXJyYXkoY2lyY2xlcykpLmxlbmd0aCkpIHJldHVybiAwO1xuXG4gIHZhciBhLCBiLCBjLCBuLCBhYSwgY2EsIGksIGosIGssIHNqLCBzaztcblxuICAvLyBQbGFjZSB0aGUgZmlyc3QgY2lyY2xlLlxuICBhID0gY2lyY2xlc1swXSwgYS54ID0gMCwgYS55ID0gMDtcbiAgaWYgKCEobiA+IDEpKSByZXR1cm4gYS5yO1xuXG4gIC8vIFBsYWNlIHRoZSBzZWNvbmQgY2lyY2xlLlxuICBiID0gY2lyY2xlc1sxXSwgYS54ID0gLWIuciwgYi54ID0gYS5yLCBiLnkgPSAwO1xuICBpZiAoIShuID4gMikpIHJldHVybiBhLnIgKyBiLnI7XG5cbiAgLy8gUGxhY2UgdGhlIHRoaXJkIGNpcmNsZS5cbiAgcGxhY2UoYiwgYSwgYyA9IGNpcmNsZXNbMl0pO1xuXG4gIC8vIEluaXRpYWxpemUgdGhlIGZyb250LWNoYWluIHVzaW5nIHRoZSBmaXJzdCB0aHJlZSBjaXJjbGVzIGEsIGIgYW5kIGMuXG4gIGEgPSBuZXcgTm9kZShhKSwgYiA9IG5ldyBOb2RlKGIpLCBjID0gbmV3IE5vZGUoYyk7XG4gIGEubmV4dCA9IGMucHJldmlvdXMgPSBiO1xuICBiLm5leHQgPSBhLnByZXZpb3VzID0gYztcbiAgYy5uZXh0ID0gYi5wcmV2aW91cyA9IGE7XG5cbiAgLy8gQXR0ZW1wdCB0byBwbGFjZSBlYWNoIHJlbWFpbmluZyBjaXJjbGXigKZcbiAgcGFjazogZm9yIChpID0gMzsgaSA8IG47ICsraSkge1xuICAgIHBsYWNlKGEuXywgYi5fLCBjID0gY2lyY2xlc1tpXSksIGMgPSBuZXcgTm9kZShjKTtcblxuICAgIC8vIEZpbmQgdGhlIGNsb3Nlc3QgaW50ZXJzZWN0aW5nIGNpcmNsZSBvbiB0aGUgZnJvbnQtY2hhaW4sIGlmIGFueS5cbiAgICAvLyDigJxDbG9zZW5lc3PigJ0gaXMgZGV0ZXJtaW5lZCBieSBsaW5lYXIgZGlzdGFuY2UgYWxvbmcgdGhlIGZyb250LWNoYWluLlxuICAgIC8vIOKAnEFoZWFk4oCdIG9yIOKAnGJlaGluZOKAnSBpcyBsaWtld2lzZSBkZXRlcm1pbmVkIGJ5IGxpbmVhciBkaXN0YW5jZS5cbiAgICBqID0gYi5uZXh0LCBrID0gYS5wcmV2aW91cywgc2ogPSBiLl8uciwgc2sgPSBhLl8ucjtcbiAgICBkbyB7XG4gICAgICBpZiAoc2ogPD0gc2spIHtcbiAgICAgICAgaWYgKGludGVyc2VjdHMoai5fLCBjLl8pKSB7XG4gICAgICAgICAgYiA9IGosIGEubmV4dCA9IGIsIGIucHJldmlvdXMgPSBhLCAtLWk7XG4gICAgICAgICAgY29udGludWUgcGFjaztcbiAgICAgICAgfVxuICAgICAgICBzaiArPSBqLl8uciwgaiA9IGoubmV4dDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChpbnRlcnNlY3RzKGsuXywgYy5fKSkge1xuICAgICAgICAgIGEgPSBrLCBhLm5leHQgPSBiLCBiLnByZXZpb3VzID0gYSwgLS1pO1xuICAgICAgICAgIGNvbnRpbnVlIHBhY2s7XG4gICAgICAgIH1cbiAgICAgICAgc2sgKz0gay5fLnIsIGsgPSBrLnByZXZpb3VzO1xuICAgICAgfVxuICAgIH0gd2hpbGUgKGogIT09IGsubmV4dCk7XG5cbiAgICAvLyBTdWNjZXNzISBJbnNlcnQgdGhlIG5ldyBjaXJjbGUgYyBiZXR3ZWVuIGEgYW5kIGIuXG4gICAgYy5wcmV2aW91cyA9IGEsIGMubmV4dCA9IGIsIGEubmV4dCA9IGIucHJldmlvdXMgPSBiID0gYztcblxuICAgIC8vIENvbXB1dGUgdGhlIG5ldyBjbG9zZXN0IGNpcmNsZSBwYWlyIHRvIHRoZSBjZW50cm9pZC5cbiAgICBhYSA9IHNjb3JlKGEpO1xuICAgIHdoaWxlICgoYyA9IGMubmV4dCkgIT09IGIpIHtcbiAgICAgIGlmICgoY2EgPSBzY29yZShjKSkgPCBhYSkge1xuICAgICAgICBhID0gYywgYWEgPSBjYTtcbiAgICAgIH1cbiAgICB9XG4gICAgYiA9IGEubmV4dDtcbiAgfVxuXG4gIC8vIENvbXB1dGUgdGhlIGVuY2xvc2luZyBjaXJjbGUgb2YgdGhlIGZyb250IGNoYWluLlxuICBhID0gW2IuX10sIGMgPSBiOyB3aGlsZSAoKGMgPSBjLm5leHQpICE9PSBiKSBhLnB1c2goYy5fKTsgYyA9IGVuY2xvc2UoYSk7XG5cbiAgLy8gVHJhbnNsYXRlIHRoZSBjaXJjbGVzIHRvIHB1dCB0aGUgZW5jbG9zaW5nIGNpcmNsZSBhcm91bmQgdGhlIG9yaWdpbi5cbiAgZm9yIChpID0gMDsgaSA8IG47ICsraSkgYSA9IGNpcmNsZXNbaV0sIGEueCAtPSBjLngsIGEueSAtPSBjLnk7XG5cbiAgcmV0dXJuIGMucjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oY2lyY2xlcykge1xuICBwYWNrRW5jbG9zZShjaXJjbGVzKTtcbiAgcmV0dXJuIGNpcmNsZXM7XG59XG4iLCJpbXBvcnQgcm91bmROb2RlIGZyb20gXCIuL3RyZWVtYXAvcm91bmQuanNcIjtcbmltcG9ydCB0cmVlbWFwRGljZSBmcm9tIFwiLi90cmVlbWFwL2RpY2UuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gIHZhciBkeCA9IDEsXG4gICAgICBkeSA9IDEsXG4gICAgICBwYWRkaW5nID0gMCxcbiAgICAgIHJvdW5kID0gZmFsc2U7XG5cbiAgZnVuY3Rpb24gcGFydGl0aW9uKHJvb3QpIHtcbiAgICB2YXIgbiA9IHJvb3QuaGVpZ2h0ICsgMTtcbiAgICByb290LngwID1cbiAgICByb290LnkwID0gcGFkZGluZztcbiAgICByb290LngxID0gZHg7XG4gICAgcm9vdC55MSA9IGR5IC8gbjtcbiAgICByb290LmVhY2hCZWZvcmUocG9zaXRpb25Ob2RlKGR5LCBuKSk7XG4gICAgaWYgKHJvdW5kKSByb290LmVhY2hCZWZvcmUocm91bmROb2RlKTtcbiAgICByZXR1cm4gcm9vdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBvc2l0aW9uTm9kZShkeSwgbikge1xuICAgIHJldHVybiBmdW5jdGlvbihub2RlKSB7XG4gICAgICBpZiAobm9kZS5jaGlsZHJlbikge1xuICAgICAgICB0cmVlbWFwRGljZShub2RlLCBub2RlLngwLCBkeSAqIChub2RlLmRlcHRoICsgMSkgLyBuLCBub2RlLngxLCBkeSAqIChub2RlLmRlcHRoICsgMikgLyBuKTtcbiAgICAgIH1cbiAgICAgIHZhciB4MCA9IG5vZGUueDAsXG4gICAgICAgICAgeTAgPSBub2RlLnkwLFxuICAgICAgICAgIHgxID0gbm9kZS54MSAtIHBhZGRpbmcsXG4gICAgICAgICAgeTEgPSBub2RlLnkxIC0gcGFkZGluZztcbiAgICAgIGlmICh4MSA8IHgwKSB4MCA9IHgxID0gKHgwICsgeDEpIC8gMjtcbiAgICAgIGlmICh5MSA8IHkwKSB5MCA9IHkxID0gKHkwICsgeTEpIC8gMjtcbiAgICAgIG5vZGUueDAgPSB4MDtcbiAgICAgIG5vZGUueTAgPSB5MDtcbiAgICAgIG5vZGUueDEgPSB4MTtcbiAgICAgIG5vZGUueTEgPSB5MTtcbiAgICB9O1xuICB9XG5cbiAgcGFydGl0aW9uLnJvdW5kID0gZnVuY3Rpb24oeCkge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKHJvdW5kID0gISF4LCBwYXJ0aXRpb24pIDogcm91bmQ7XG4gIH07XG5cbiAgcGFydGl0aW9uLnNpemUgPSBmdW5jdGlvbih4KSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoZHggPSAreFswXSwgZHkgPSAreFsxXSwgcGFydGl0aW9uKSA6IFtkeCwgZHldO1xuICB9O1xuXG4gIHBhcnRpdGlvbi5wYWRkaW5nID0gZnVuY3Rpb24oeCkge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKHBhZGRpbmcgPSAreCwgcGFydGl0aW9uKSA6IHBhZGRpbmc7XG4gIH07XG5cbiAgcmV0dXJuIHBhcnRpdGlvbjtcbn1cbiIsImltcG9ydCB7cmVxdWlyZWR9IGZyb20gXCIuL2FjY2Vzc29ycy5qc1wiO1xuaW1wb3J0IHtOb2RlLCBjb21wdXRlSGVpZ2h0fSBmcm9tIFwiLi9oaWVyYXJjaHkvaW5kZXguanNcIjtcblxudmFyIHByZXJvb3QgPSB7ZGVwdGg6IC0xfSxcbiAgICBhbWJpZ3VvdXMgPSB7fTtcblxuZnVuY3Rpb24gZGVmYXVsdElkKGQpIHtcbiAgcmV0dXJuIGQuaWQ7XG59XG5cbmZ1bmN0aW9uIGRlZmF1bHRQYXJlbnRJZChkKSB7XG4gIHJldHVybiBkLnBhcmVudElkO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgdmFyIGlkID0gZGVmYXVsdElkLFxuICAgICAgcGFyZW50SWQgPSBkZWZhdWx0UGFyZW50SWQ7XG5cbiAgZnVuY3Rpb24gc3RyYXRpZnkoZGF0YSkge1xuICAgIHZhciBub2RlcyA9IEFycmF5LmZyb20oZGF0YSksXG4gICAgICAgIG4gPSBub2Rlcy5sZW5ndGgsXG4gICAgICAgIGQsXG4gICAgICAgIGksXG4gICAgICAgIHJvb3QsXG4gICAgICAgIHBhcmVudCxcbiAgICAgICAgbm9kZSxcbiAgICAgICAgbm9kZUlkLFxuICAgICAgICBub2RlS2V5LFxuICAgICAgICBub2RlQnlLZXkgPSBuZXcgTWFwO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IG47ICsraSkge1xuICAgICAgZCA9IG5vZGVzW2ldLCBub2RlID0gbm9kZXNbaV0gPSBuZXcgTm9kZShkKTtcbiAgICAgIGlmICgobm9kZUlkID0gaWQoZCwgaSwgZGF0YSkpICE9IG51bGwgJiYgKG5vZGVJZCArPSBcIlwiKSkge1xuICAgICAgICBub2RlS2V5ID0gbm9kZS5pZCA9IG5vZGVJZDtcbiAgICAgICAgbm9kZUJ5S2V5LnNldChub2RlS2V5LCBub2RlQnlLZXkuaGFzKG5vZGVLZXkpID8gYW1iaWd1b3VzIDogbm9kZSk7XG4gICAgICB9XG4gICAgICBpZiAoKG5vZGVJZCA9IHBhcmVudElkKGQsIGksIGRhdGEpKSAhPSBudWxsICYmIChub2RlSWQgKz0gXCJcIikpIHtcbiAgICAgICAgbm9kZS5wYXJlbnQgPSBub2RlSWQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChpID0gMDsgaSA8IG47ICsraSkge1xuICAgICAgbm9kZSA9IG5vZGVzW2ldO1xuICAgICAgaWYgKG5vZGVJZCA9IG5vZGUucGFyZW50KSB7XG4gICAgICAgIHBhcmVudCA9IG5vZGVCeUtleS5nZXQobm9kZUlkKTtcbiAgICAgICAgaWYgKCFwYXJlbnQpIHRocm93IG5ldyBFcnJvcihcIm1pc3Npbmc6IFwiICsgbm9kZUlkKTtcbiAgICAgICAgaWYgKHBhcmVudCA9PT0gYW1iaWd1b3VzKSB0aHJvdyBuZXcgRXJyb3IoXCJhbWJpZ3VvdXM6IFwiICsgbm9kZUlkKTtcbiAgICAgICAgaWYgKHBhcmVudC5jaGlsZHJlbikgcGFyZW50LmNoaWxkcmVuLnB1c2gobm9kZSk7XG4gICAgICAgIGVsc2UgcGFyZW50LmNoaWxkcmVuID0gW25vZGVdO1xuICAgICAgICBub2RlLnBhcmVudCA9IHBhcmVudDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChyb290KSB0aHJvdyBuZXcgRXJyb3IoXCJtdWx0aXBsZSByb290c1wiKTtcbiAgICAgICAgcm9vdCA9IG5vZGU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFyb290KSB0aHJvdyBuZXcgRXJyb3IoXCJubyByb290XCIpO1xuICAgIHJvb3QucGFyZW50ID0gcHJlcm9vdDtcbiAgICByb290LmVhY2hCZWZvcmUoZnVuY3Rpb24obm9kZSkgeyBub2RlLmRlcHRoID0gbm9kZS5wYXJlbnQuZGVwdGggKyAxOyAtLW47IH0pLmVhY2hCZWZvcmUoY29tcHV0ZUhlaWdodCk7XG4gICAgcm9vdC5wYXJlbnQgPSBudWxsO1xuICAgIGlmIChuID4gMCkgdGhyb3cgbmV3IEVycm9yKFwiY3ljbGVcIik7XG5cbiAgICByZXR1cm4gcm9vdDtcbiAgfVxuXG4gIHN0cmF0aWZ5LmlkID0gZnVuY3Rpb24oeCkge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKGlkID0gcmVxdWlyZWQoeCksIHN0cmF0aWZ5KSA6IGlkO1xuICB9O1xuXG4gIHN0cmF0aWZ5LnBhcmVudElkID0gZnVuY3Rpb24oeCkge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKHBhcmVudElkID0gcmVxdWlyZWQoeCksIHN0cmF0aWZ5KSA6IHBhcmVudElkO1xuICB9O1xuXG4gIHJldHVybiBzdHJhdGlmeTtcbn1cbiIsImltcG9ydCB7Tm9kZX0gZnJvbSBcIi4vaGllcmFyY2h5L2luZGV4LmpzXCI7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXBhcmF0aW9uKGEsIGIpIHtcbiAgcmV0dXJuIGEucGFyZW50ID09PSBiLnBhcmVudCA/IDEgOiAyO1xufVxuXG4vLyBmdW5jdGlvbiByYWRpYWxTZXBhcmF0aW9uKGEsIGIpIHtcbi8vICAgcmV0dXJuIChhLnBhcmVudCA9PT0gYi5wYXJlbnQgPyAxIDogMikgLyBhLmRlcHRoO1xuLy8gfVxuXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gdHJhdmVyc2UgdGhlIGxlZnQgY29udG91ciBvZiBhIHN1YnRyZWUgKG9yXG4vLyBzdWJmb3Jlc3QpLiBJdCByZXR1cm5zIHRoZSBzdWNjZXNzb3Igb2YgdiBvbiB0aGlzIGNvbnRvdXIuIFRoaXMgc3VjY2Vzc29yIGlzXG4vLyBlaXRoZXIgZ2l2ZW4gYnkgdGhlIGxlZnRtb3N0IGNoaWxkIG9mIHYgb3IgYnkgdGhlIHRocmVhZCBvZiB2LiBUaGUgZnVuY3Rpb25cbi8vIHJldHVybnMgbnVsbCBpZiBhbmQgb25seSBpZiB2IGlzIG9uIHRoZSBoaWdoZXN0IGxldmVsIG9mIGl0cyBzdWJ0cmVlLlxuZnVuY3Rpb24gbmV4dExlZnQodikge1xuICB2YXIgY2hpbGRyZW4gPSB2LmNoaWxkcmVuO1xuICByZXR1cm4gY2hpbGRyZW4gPyBjaGlsZHJlblswXSA6IHYudDtcbn1cblxuLy8gVGhpcyBmdW5jdGlvbiB3b3JrcyBhbmFsb2dvdXNseSB0byBuZXh0TGVmdC5cbmZ1bmN0aW9uIG5leHRSaWdodCh2KSB7XG4gIHZhciBjaGlsZHJlbiA9IHYuY2hpbGRyZW47XG4gIHJldHVybiBjaGlsZHJlbiA/IGNoaWxkcmVuW2NoaWxkcmVuLmxlbmd0aCAtIDFdIDogdi50O1xufVxuXG4vLyBTaGlmdHMgdGhlIGN1cnJlbnQgc3VidHJlZSByb290ZWQgYXQgdysuIFRoaXMgaXMgZG9uZSBieSBpbmNyZWFzaW5nXG4vLyBwcmVsaW0odyspIGFuZCBtb2QodyspIGJ5IHNoaWZ0LlxuZnVuY3Rpb24gbW92ZVN1YnRyZWUod20sIHdwLCBzaGlmdCkge1xuICB2YXIgY2hhbmdlID0gc2hpZnQgLyAod3AuaSAtIHdtLmkpO1xuICB3cC5jIC09IGNoYW5nZTtcbiAgd3AucyArPSBzaGlmdDtcbiAgd20uYyArPSBjaGFuZ2U7XG4gIHdwLnogKz0gc2hpZnQ7XG4gIHdwLm0gKz0gc2hpZnQ7XG59XG5cbi8vIEFsbCBvdGhlciBzaGlmdHMsIGFwcGxpZWQgdG8gdGhlIHNtYWxsZXIgc3VidHJlZXMgYmV0d2VlbiB3LSBhbmQgdyssIGFyZVxuLy8gcGVyZm9ybWVkIGJ5IHRoaXMgZnVuY3Rpb24uIFRvIHByZXBhcmUgdGhlIHNoaWZ0cywgd2UgaGF2ZSB0byBhZGp1c3Rcbi8vIGNoYW5nZSh3KyksIHNoaWZ0KHcrKSwgYW5kIGNoYW5nZSh3LSkuXG5mdW5jdGlvbiBleGVjdXRlU2hpZnRzKHYpIHtcbiAgdmFyIHNoaWZ0ID0gMCxcbiAgICAgIGNoYW5nZSA9IDAsXG4gICAgICBjaGlsZHJlbiA9IHYuY2hpbGRyZW4sXG4gICAgICBpID0gY2hpbGRyZW4ubGVuZ3RoLFxuICAgICAgdztcbiAgd2hpbGUgKC0taSA+PSAwKSB7XG4gICAgdyA9IGNoaWxkcmVuW2ldO1xuICAgIHcueiArPSBzaGlmdDtcbiAgICB3Lm0gKz0gc2hpZnQ7XG4gICAgc2hpZnQgKz0gdy5zICsgKGNoYW5nZSArPSB3LmMpO1xuICB9XG59XG5cbi8vIElmIHZpLeKAmXMgYW5jZXN0b3IgaXMgYSBzaWJsaW5nIG9mIHYsIHJldHVybnMgdmkt4oCZcyBhbmNlc3Rvci4gT3RoZXJ3aXNlLFxuLy8gcmV0dXJucyB0aGUgc3BlY2lmaWVkIChkZWZhdWx0KSBhbmNlc3Rvci5cbmZ1bmN0aW9uIG5leHRBbmNlc3Rvcih2aW0sIHYsIGFuY2VzdG9yKSB7XG4gIHJldHVybiB2aW0uYS5wYXJlbnQgPT09IHYucGFyZW50ID8gdmltLmEgOiBhbmNlc3Rvcjtcbn1cblxuZnVuY3Rpb24gVHJlZU5vZGUobm9kZSwgaSkge1xuICB0aGlzLl8gPSBub2RlO1xuICB0aGlzLnBhcmVudCA9IG51bGw7XG4gIHRoaXMuY2hpbGRyZW4gPSBudWxsO1xuICB0aGlzLkEgPSBudWxsOyAvLyBkZWZhdWx0IGFuY2VzdG9yXG4gIHRoaXMuYSA9IHRoaXM7IC8vIGFuY2VzdG9yXG4gIHRoaXMueiA9IDA7IC8vIHByZWxpbVxuICB0aGlzLm0gPSAwOyAvLyBtb2RcbiAgdGhpcy5jID0gMDsgLy8gY2hhbmdlXG4gIHRoaXMucyA9IDA7IC8vIHNoaWZ0XG4gIHRoaXMudCA9IG51bGw7IC8vIHRocmVhZFxuICB0aGlzLmkgPSBpOyAvLyBudW1iZXJcbn1cblxuVHJlZU5vZGUucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShOb2RlLnByb3RvdHlwZSk7XG5cbmZ1bmN0aW9uIHRyZWVSb290KHJvb3QpIHtcbiAgdmFyIHRyZWUgPSBuZXcgVHJlZU5vZGUocm9vdCwgMCksXG4gICAgICBub2RlLFxuICAgICAgbm9kZXMgPSBbdHJlZV0sXG4gICAgICBjaGlsZCxcbiAgICAgIGNoaWxkcmVuLFxuICAgICAgaSxcbiAgICAgIG47XG5cbiAgd2hpbGUgKG5vZGUgPSBub2Rlcy5wb3AoKSkge1xuICAgIGlmIChjaGlsZHJlbiA9IG5vZGUuXy5jaGlsZHJlbikge1xuICAgICAgbm9kZS5jaGlsZHJlbiA9IG5ldyBBcnJheShuID0gY2hpbGRyZW4ubGVuZ3RoKTtcbiAgICAgIGZvciAoaSA9IG4gLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICBub2Rlcy5wdXNoKGNoaWxkID0gbm9kZS5jaGlsZHJlbltpXSA9IG5ldyBUcmVlTm9kZShjaGlsZHJlbltpXSwgaSkpO1xuICAgICAgICBjaGlsZC5wYXJlbnQgPSBub2RlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gICh0cmVlLnBhcmVudCA9IG5ldyBUcmVlTm9kZShudWxsLCAwKSkuY2hpbGRyZW4gPSBbdHJlZV07XG4gIHJldHVybiB0cmVlO1xufVxuXG4vLyBOb2RlLWxpbmsgdHJlZSBkaWFncmFtIHVzaW5nIHRoZSBSZWluZ29sZC1UaWxmb3JkIFwidGlkeVwiIGFsZ29yaXRobVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gIHZhciBzZXBhcmF0aW9uID0gZGVmYXVsdFNlcGFyYXRpb24sXG4gICAgICBkeCA9IDEsXG4gICAgICBkeSA9IDEsXG4gICAgICBub2RlU2l6ZSA9IG51bGw7XG5cbiAgZnVuY3Rpb24gdHJlZShyb290KSB7XG4gICAgdmFyIHQgPSB0cmVlUm9vdChyb290KTtcblxuICAgIC8vIENvbXB1dGUgdGhlIGxheW91dCB1c2luZyBCdWNoaGVpbSBldCBhbC7igJlzIGFsZ29yaXRobS5cbiAgICB0LmVhY2hBZnRlcihmaXJzdFdhbGspLCB0LnBhcmVudC5tID0gLXQuejtcbiAgICB0LmVhY2hCZWZvcmUoc2Vjb25kV2Fsayk7XG5cbiAgICAvLyBJZiBhIGZpeGVkIG5vZGUgc2l6ZSBpcyBzcGVjaWZpZWQsIHNjYWxlIHggYW5kIHkuXG4gICAgaWYgKG5vZGVTaXplKSByb290LmVhY2hCZWZvcmUoc2l6ZU5vZGUpO1xuXG4gICAgLy8gSWYgYSBmaXhlZCB0cmVlIHNpemUgaXMgc3BlY2lmaWVkLCBzY2FsZSB4IGFuZCB5IGJhc2VkIG9uIHRoZSBleHRlbnQuXG4gICAgLy8gQ29tcHV0ZSB0aGUgbGVmdC1tb3N0LCByaWdodC1tb3N0LCBhbmQgZGVwdGgtbW9zdCBub2RlcyBmb3IgZXh0ZW50cy5cbiAgICBlbHNlIHtcbiAgICAgIHZhciBsZWZ0ID0gcm9vdCxcbiAgICAgICAgICByaWdodCA9IHJvb3QsXG4gICAgICAgICAgYm90dG9tID0gcm9vdDtcbiAgICAgIHJvb3QuZWFjaEJlZm9yZShmdW5jdGlvbihub2RlKSB7XG4gICAgICAgIGlmIChub2RlLnggPCBsZWZ0LngpIGxlZnQgPSBub2RlO1xuICAgICAgICBpZiAobm9kZS54ID4gcmlnaHQueCkgcmlnaHQgPSBub2RlO1xuICAgICAgICBpZiAobm9kZS5kZXB0aCA+IGJvdHRvbS5kZXB0aCkgYm90dG9tID0gbm9kZTtcbiAgICAgIH0pO1xuICAgICAgdmFyIHMgPSBsZWZ0ID09PSByaWdodCA/IDEgOiBzZXBhcmF0aW9uKGxlZnQsIHJpZ2h0KSAvIDIsXG4gICAgICAgICAgdHggPSBzIC0gbGVmdC54LFxuICAgICAgICAgIGt4ID0gZHggLyAocmlnaHQueCArIHMgKyB0eCksXG4gICAgICAgICAga3kgPSBkeSAvIChib3R0b20uZGVwdGggfHwgMSk7XG4gICAgICByb290LmVhY2hCZWZvcmUoZnVuY3Rpb24obm9kZSkge1xuICAgICAgICBub2RlLnggPSAobm9kZS54ICsgdHgpICoga3g7XG4gICAgICAgIG5vZGUueSA9IG5vZGUuZGVwdGggKiBreTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiByb290O1xuICB9XG5cbiAgLy8gQ29tcHV0ZXMgYSBwcmVsaW1pbmFyeSB4LWNvb3JkaW5hdGUgZm9yIHYuIEJlZm9yZSB0aGF0LCBGSVJTVCBXQUxLIGlzXG4gIC8vIGFwcGxpZWQgcmVjdXJzaXZlbHkgdG8gdGhlIGNoaWxkcmVuIG9mIHYsIGFzIHdlbGwgYXMgdGhlIGZ1bmN0aW9uXG4gIC8vIEFQUE9SVElPTi4gQWZ0ZXIgc3BhY2luZyBvdXQgdGhlIGNoaWxkcmVuIGJ5IGNhbGxpbmcgRVhFQ1VURSBTSElGVFMsIHRoZVxuICAvLyBub2RlIHYgaXMgcGxhY2VkIHRvIHRoZSBtaWRwb2ludCBvZiBpdHMgb3V0ZXJtb3N0IGNoaWxkcmVuLlxuICBmdW5jdGlvbiBmaXJzdFdhbGsodikge1xuICAgIHZhciBjaGlsZHJlbiA9IHYuY2hpbGRyZW4sXG4gICAgICAgIHNpYmxpbmdzID0gdi5wYXJlbnQuY2hpbGRyZW4sXG4gICAgICAgIHcgPSB2LmkgPyBzaWJsaW5nc1t2LmkgLSAxXSA6IG51bGw7XG4gICAgaWYgKGNoaWxkcmVuKSB7XG4gICAgICBleGVjdXRlU2hpZnRzKHYpO1xuICAgICAgdmFyIG1pZHBvaW50ID0gKGNoaWxkcmVuWzBdLnogKyBjaGlsZHJlbltjaGlsZHJlbi5sZW5ndGggLSAxXS56KSAvIDI7XG4gICAgICBpZiAodykge1xuICAgICAgICB2LnogPSB3LnogKyBzZXBhcmF0aW9uKHYuXywgdy5fKTtcbiAgICAgICAgdi5tID0gdi56IC0gbWlkcG9pbnQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2LnogPSBtaWRwb2ludDtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHcpIHtcbiAgICAgIHYueiA9IHcueiArIHNlcGFyYXRpb24odi5fLCB3Ll8pO1xuICAgIH1cbiAgICB2LnBhcmVudC5BID0gYXBwb3J0aW9uKHYsIHcsIHYucGFyZW50LkEgfHwgc2libGluZ3NbMF0pO1xuICB9XG5cbiAgLy8gQ29tcHV0ZXMgYWxsIHJlYWwgeC1jb29yZGluYXRlcyBieSBzdW1taW5nIHVwIHRoZSBtb2RpZmllcnMgcmVjdXJzaXZlbHkuXG4gIGZ1bmN0aW9uIHNlY29uZFdhbGsodikge1xuICAgIHYuXy54ID0gdi56ICsgdi5wYXJlbnQubTtcbiAgICB2Lm0gKz0gdi5wYXJlbnQubTtcbiAgfVxuXG4gIC8vIFRoZSBjb3JlIG9mIHRoZSBhbGdvcml0aG0uIEhlcmUsIGEgbmV3IHN1YnRyZWUgaXMgY29tYmluZWQgd2l0aCB0aGVcbiAgLy8gcHJldmlvdXMgc3VidHJlZXMuIFRocmVhZHMgYXJlIHVzZWQgdG8gdHJhdmVyc2UgdGhlIGluc2lkZSBhbmQgb3V0c2lkZVxuICAvLyBjb250b3VycyBvZiB0aGUgbGVmdCBhbmQgcmlnaHQgc3VidHJlZSB1cCB0byB0aGUgaGlnaGVzdCBjb21tb24gbGV2ZWwuIFRoZVxuICAvLyB2ZXJ0aWNlcyB1c2VkIGZvciB0aGUgdHJhdmVyc2FscyBhcmUgdmkrLCB2aS0sIHZvLSwgYW5kIHZvKywgd2hlcmUgdGhlXG4gIC8vIHN1cGVyc2NyaXB0IG8gbWVhbnMgb3V0c2lkZSBhbmQgaSBtZWFucyBpbnNpZGUsIHRoZSBzdWJzY3JpcHQgLSBtZWFucyBsZWZ0XG4gIC8vIHN1YnRyZWUgYW5kICsgbWVhbnMgcmlnaHQgc3VidHJlZS4gRm9yIHN1bW1pbmcgdXAgdGhlIG1vZGlmaWVycyBhbG9uZyB0aGVcbiAgLy8gY29udG91ciwgd2UgdXNlIHJlc3BlY3RpdmUgdmFyaWFibGVzIHNpKywgc2ktLCBzby0sIGFuZCBzbysuIFdoZW5ldmVyIHR3b1xuICAvLyBub2RlcyBvZiB0aGUgaW5zaWRlIGNvbnRvdXJzIGNvbmZsaWN0LCB3ZSBjb21wdXRlIHRoZSBsZWZ0IG9uZSBvZiB0aGVcbiAgLy8gZ3JlYXRlc3QgdW5jb21tb24gYW5jZXN0b3JzIHVzaW5nIHRoZSBmdW5jdGlvbiBBTkNFU1RPUiBhbmQgY2FsbCBNT1ZFXG4gIC8vIFNVQlRSRUUgdG8gc2hpZnQgdGhlIHN1YnRyZWUgYW5kIHByZXBhcmUgdGhlIHNoaWZ0cyBvZiBzbWFsbGVyIHN1YnRyZWVzLlxuICAvLyBGaW5hbGx5LCB3ZSBhZGQgYSBuZXcgdGhyZWFkIChpZiBuZWNlc3NhcnkpLlxuICBmdW5jdGlvbiBhcHBvcnRpb24odiwgdywgYW5jZXN0b3IpIHtcbiAgICBpZiAodykge1xuICAgICAgdmFyIHZpcCA9IHYsXG4gICAgICAgICAgdm9wID0gdixcbiAgICAgICAgICB2aW0gPSB3LFxuICAgICAgICAgIHZvbSA9IHZpcC5wYXJlbnQuY2hpbGRyZW5bMF0sXG4gICAgICAgICAgc2lwID0gdmlwLm0sXG4gICAgICAgICAgc29wID0gdm9wLm0sXG4gICAgICAgICAgc2ltID0gdmltLm0sXG4gICAgICAgICAgc29tID0gdm9tLm0sXG4gICAgICAgICAgc2hpZnQ7XG4gICAgICB3aGlsZSAodmltID0gbmV4dFJpZ2h0KHZpbSksIHZpcCA9IG5leHRMZWZ0KHZpcCksIHZpbSAmJiB2aXApIHtcbiAgICAgICAgdm9tID0gbmV4dExlZnQodm9tKTtcbiAgICAgICAgdm9wID0gbmV4dFJpZ2h0KHZvcCk7XG4gICAgICAgIHZvcC5hID0gdjtcbiAgICAgICAgc2hpZnQgPSB2aW0ueiArIHNpbSAtIHZpcC56IC0gc2lwICsgc2VwYXJhdGlvbih2aW0uXywgdmlwLl8pO1xuICAgICAgICBpZiAoc2hpZnQgPiAwKSB7XG4gICAgICAgICAgbW92ZVN1YnRyZWUobmV4dEFuY2VzdG9yKHZpbSwgdiwgYW5jZXN0b3IpLCB2LCBzaGlmdCk7XG4gICAgICAgICAgc2lwICs9IHNoaWZ0O1xuICAgICAgICAgIHNvcCArPSBzaGlmdDtcbiAgICAgICAgfVxuICAgICAgICBzaW0gKz0gdmltLm07XG4gICAgICAgIHNpcCArPSB2aXAubTtcbiAgICAgICAgc29tICs9IHZvbS5tO1xuICAgICAgICBzb3AgKz0gdm9wLm07XG4gICAgICB9XG4gICAgICBpZiAodmltICYmICFuZXh0UmlnaHQodm9wKSkge1xuICAgICAgICB2b3AudCA9IHZpbTtcbiAgICAgICAgdm9wLm0gKz0gc2ltIC0gc29wO1xuICAgICAgfVxuICAgICAgaWYgKHZpcCAmJiAhbmV4dExlZnQodm9tKSkge1xuICAgICAgICB2b20udCA9IHZpcDtcbiAgICAgICAgdm9tLm0gKz0gc2lwIC0gc29tO1xuICAgICAgICBhbmNlc3RvciA9IHY7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBhbmNlc3RvcjtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNpemVOb2RlKG5vZGUpIHtcbiAgICBub2RlLnggKj0gZHg7XG4gICAgbm9kZS55ID0gbm9kZS5kZXB0aCAqIGR5O1xuICB9XG5cbiAgdHJlZS5zZXBhcmF0aW9uID0gZnVuY3Rpb24oeCkge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKHNlcGFyYXRpb24gPSB4LCB0cmVlKSA6IHNlcGFyYXRpb247XG4gIH07XG5cbiAgdHJlZS5zaXplID0gZnVuY3Rpb24oeCkge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKG5vZGVTaXplID0gZmFsc2UsIGR4ID0gK3hbMF0sIGR5ID0gK3hbMV0sIHRyZWUpIDogKG5vZGVTaXplID8gbnVsbCA6IFtkeCwgZHldKTtcbiAgfTtcblxuICB0cmVlLm5vZGVTaXplID0gZnVuY3Rpb24oeCkge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKG5vZGVTaXplID0gdHJ1ZSwgZHggPSAreFswXSwgZHkgPSAreFsxXSwgdHJlZSkgOiAobm9kZVNpemUgPyBbZHgsIGR5XSA6IG51bGwpO1xuICB9O1xuXG4gIHJldHVybiB0cmVlO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24ocGFyZW50LCB4MCwgeTAsIHgxLCB5MSkge1xuICB2YXIgbm9kZXMgPSBwYXJlbnQuY2hpbGRyZW4sXG4gICAgICBpLCBuID0gbm9kZXMubGVuZ3RoLFxuICAgICAgc3VtLCBzdW1zID0gbmV3IEFycmF5KG4gKyAxKTtcblxuICBmb3IgKHN1bXNbMF0gPSBzdW0gPSBpID0gMDsgaSA8IG47ICsraSkge1xuICAgIHN1bXNbaSArIDFdID0gc3VtICs9IG5vZGVzW2ldLnZhbHVlO1xuICB9XG5cbiAgcGFydGl0aW9uKDAsIG4sIHBhcmVudC52YWx1ZSwgeDAsIHkwLCB4MSwgeTEpO1xuXG4gIGZ1bmN0aW9uIHBhcnRpdGlvbihpLCBqLCB2YWx1ZSwgeDAsIHkwLCB4MSwgeTEpIHtcbiAgICBpZiAoaSA+PSBqIC0gMSkge1xuICAgICAgdmFyIG5vZGUgPSBub2Rlc1tpXTtcbiAgICAgIG5vZGUueDAgPSB4MCwgbm9kZS55MCA9IHkwO1xuICAgICAgbm9kZS54MSA9IHgxLCBub2RlLnkxID0geTE7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHZhbHVlT2Zmc2V0ID0gc3Vtc1tpXSxcbiAgICAgICAgdmFsdWVUYXJnZXQgPSAodmFsdWUgLyAyKSArIHZhbHVlT2Zmc2V0LFxuICAgICAgICBrID0gaSArIDEsXG4gICAgICAgIGhpID0gaiAtIDE7XG5cbiAgICB3aGlsZSAoayA8IGhpKSB7XG4gICAgICB2YXIgbWlkID0gayArIGhpID4+PiAxO1xuICAgICAgaWYgKHN1bXNbbWlkXSA8IHZhbHVlVGFyZ2V0KSBrID0gbWlkICsgMTtcbiAgICAgIGVsc2UgaGkgPSBtaWQ7XG4gICAgfVxuXG4gICAgaWYgKCh2YWx1ZVRhcmdldCAtIHN1bXNbayAtIDFdKSA8IChzdW1zW2tdIC0gdmFsdWVUYXJnZXQpICYmIGkgKyAxIDwgaykgLS1rO1xuXG4gICAgdmFyIHZhbHVlTGVmdCA9IHN1bXNba10gLSB2YWx1ZU9mZnNldCxcbiAgICAgICAgdmFsdWVSaWdodCA9IHZhbHVlIC0gdmFsdWVMZWZ0O1xuXG4gICAgaWYgKCh4MSAtIHgwKSA+ICh5MSAtIHkwKSkge1xuICAgICAgdmFyIHhrID0gdmFsdWUgPyAoeDAgKiB2YWx1ZVJpZ2h0ICsgeDEgKiB2YWx1ZUxlZnQpIC8gdmFsdWUgOiB4MTtcbiAgICAgIHBhcnRpdGlvbihpLCBrLCB2YWx1ZUxlZnQsIHgwLCB5MCwgeGssIHkxKTtcbiAgICAgIHBhcnRpdGlvbihrLCBqLCB2YWx1ZVJpZ2h0LCB4aywgeTAsIHgxLCB5MSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB5ayA9IHZhbHVlID8gKHkwICogdmFsdWVSaWdodCArIHkxICogdmFsdWVMZWZ0KSAvIHZhbHVlIDogeTE7XG4gICAgICBwYXJ0aXRpb24oaSwgaywgdmFsdWVMZWZ0LCB4MCwgeTAsIHgxLCB5ayk7XG4gICAgICBwYXJ0aXRpb24oaywgaiwgdmFsdWVSaWdodCwgeDAsIHlrLCB4MSwgeTEpO1xuICAgIH1cbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24ocGFyZW50LCB4MCwgeTAsIHgxLCB5MSkge1xuICB2YXIgbm9kZXMgPSBwYXJlbnQuY2hpbGRyZW4sXG4gICAgICBub2RlLFxuICAgICAgaSA9IC0xLFxuICAgICAgbiA9IG5vZGVzLmxlbmd0aCxcbiAgICAgIGsgPSBwYXJlbnQudmFsdWUgJiYgKHgxIC0geDApIC8gcGFyZW50LnZhbHVlO1xuXG4gIHdoaWxlICgrK2kgPCBuKSB7XG4gICAgbm9kZSA9IG5vZGVzW2ldLCBub2RlLnkwID0geTAsIG5vZGUueTEgPSB5MTtcbiAgICBub2RlLngwID0geDAsIG5vZGUueDEgPSB4MCArPSBub2RlLnZhbHVlICogaztcbiAgfVxufVxuIiwiaW1wb3J0IHJvdW5kTm9kZSBmcm9tIFwiLi9yb3VuZC5qc1wiO1xuaW1wb3J0IHNxdWFyaWZ5IGZyb20gXCIuL3NxdWFyaWZ5LmpzXCI7XG5pbXBvcnQge3JlcXVpcmVkfSBmcm9tIFwiLi4vYWNjZXNzb3JzLmpzXCI7XG5pbXBvcnQgY29uc3RhbnQsIHtjb25zdGFudFplcm99IGZyb20gXCIuLi9jb25zdGFudC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgdmFyIHRpbGUgPSBzcXVhcmlmeSxcbiAgICAgIHJvdW5kID0gZmFsc2UsXG4gICAgICBkeCA9IDEsXG4gICAgICBkeSA9IDEsXG4gICAgICBwYWRkaW5nU3RhY2sgPSBbMF0sXG4gICAgICBwYWRkaW5nSW5uZXIgPSBjb25zdGFudFplcm8sXG4gICAgICBwYWRkaW5nVG9wID0gY29uc3RhbnRaZXJvLFxuICAgICAgcGFkZGluZ1JpZ2h0ID0gY29uc3RhbnRaZXJvLFxuICAgICAgcGFkZGluZ0JvdHRvbSA9IGNvbnN0YW50WmVybyxcbiAgICAgIHBhZGRpbmdMZWZ0ID0gY29uc3RhbnRaZXJvO1xuXG4gIGZ1bmN0aW9uIHRyZWVtYXAocm9vdCkge1xuICAgIHJvb3QueDAgPVxuICAgIHJvb3QueTAgPSAwO1xuICAgIHJvb3QueDEgPSBkeDtcbiAgICByb290LnkxID0gZHk7XG4gICAgcm9vdC5lYWNoQmVmb3JlKHBvc2l0aW9uTm9kZSk7XG4gICAgcGFkZGluZ1N0YWNrID0gWzBdO1xuICAgIGlmIChyb3VuZCkgcm9vdC5lYWNoQmVmb3JlKHJvdW5kTm9kZSk7XG4gICAgcmV0dXJuIHJvb3Q7XG4gIH1cblxuICBmdW5jdGlvbiBwb3NpdGlvbk5vZGUobm9kZSkge1xuICAgIHZhciBwID0gcGFkZGluZ1N0YWNrW25vZGUuZGVwdGhdLFxuICAgICAgICB4MCA9IG5vZGUueDAgKyBwLFxuICAgICAgICB5MCA9IG5vZGUueTAgKyBwLFxuICAgICAgICB4MSA9IG5vZGUueDEgLSBwLFxuICAgICAgICB5MSA9IG5vZGUueTEgLSBwO1xuICAgIGlmICh4MSA8IHgwKSB4MCA9IHgxID0gKHgwICsgeDEpIC8gMjtcbiAgICBpZiAoeTEgPCB5MCkgeTAgPSB5MSA9ICh5MCArIHkxKSAvIDI7XG4gICAgbm9kZS54MCA9IHgwO1xuICAgIG5vZGUueTAgPSB5MDtcbiAgICBub2RlLngxID0geDE7XG4gICAgbm9kZS55MSA9IHkxO1xuICAgIGlmIChub2RlLmNoaWxkcmVuKSB7XG4gICAgICBwID0gcGFkZGluZ1N0YWNrW25vZGUuZGVwdGggKyAxXSA9IHBhZGRpbmdJbm5lcihub2RlKSAvIDI7XG4gICAgICB4MCArPSBwYWRkaW5nTGVmdChub2RlKSAtIHA7XG4gICAgICB5MCArPSBwYWRkaW5nVG9wKG5vZGUpIC0gcDtcbiAgICAgIHgxIC09IHBhZGRpbmdSaWdodChub2RlKSAtIHA7XG4gICAgICB5MSAtPSBwYWRkaW5nQm90dG9tKG5vZGUpIC0gcDtcbiAgICAgIGlmICh4MSA8IHgwKSB4MCA9IHgxID0gKHgwICsgeDEpIC8gMjtcbiAgICAgIGlmICh5MSA8IHkwKSB5MCA9IHkxID0gKHkwICsgeTEpIC8gMjtcbiAgICAgIHRpbGUobm9kZSwgeDAsIHkwLCB4MSwgeTEpO1xuICAgIH1cbiAgfVxuXG4gIHRyZWVtYXAucm91bmQgPSBmdW5jdGlvbih4KSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAocm91bmQgPSAhIXgsIHRyZWVtYXApIDogcm91bmQ7XG4gIH07XG5cbiAgdHJlZW1hcC5zaXplID0gZnVuY3Rpb24oeCkge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKGR4ID0gK3hbMF0sIGR5ID0gK3hbMV0sIHRyZWVtYXApIDogW2R4LCBkeV07XG4gIH07XG5cbiAgdHJlZW1hcC50aWxlID0gZnVuY3Rpb24oeCkge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKHRpbGUgPSByZXF1aXJlZCh4KSwgdHJlZW1hcCkgOiB0aWxlO1xuICB9O1xuXG4gIHRyZWVtYXAucGFkZGluZyA9IGZ1bmN0aW9uKHgpIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IHRyZWVtYXAucGFkZGluZ0lubmVyKHgpLnBhZGRpbmdPdXRlcih4KSA6IHRyZWVtYXAucGFkZGluZ0lubmVyKCk7XG4gIH07XG5cbiAgdHJlZW1hcC5wYWRkaW5nSW5uZXIgPSBmdW5jdGlvbih4KSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAocGFkZGluZ0lubmVyID0gdHlwZW9mIHggPT09IFwiZnVuY3Rpb25cIiA/IHggOiBjb25zdGFudCgreCksIHRyZWVtYXApIDogcGFkZGluZ0lubmVyO1xuICB9O1xuXG4gIHRyZWVtYXAucGFkZGluZ091dGVyID0gZnVuY3Rpb24oeCkge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gdHJlZW1hcC5wYWRkaW5nVG9wKHgpLnBhZGRpbmdSaWdodCh4KS5wYWRkaW5nQm90dG9tKHgpLnBhZGRpbmdMZWZ0KHgpIDogdHJlZW1hcC5wYWRkaW5nVG9wKCk7XG4gIH07XG5cbiAgdHJlZW1hcC5wYWRkaW5nVG9wID0gZnVuY3Rpb24oeCkge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKHBhZGRpbmdUb3AgPSB0eXBlb2YgeCA9PT0gXCJmdW5jdGlvblwiID8geCA6IGNvbnN0YW50KCt4KSwgdHJlZW1hcCkgOiBwYWRkaW5nVG9wO1xuICB9O1xuXG4gIHRyZWVtYXAucGFkZGluZ1JpZ2h0ID0gZnVuY3Rpb24oeCkge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKHBhZGRpbmdSaWdodCA9IHR5cGVvZiB4ID09PSBcImZ1bmN0aW9uXCIgPyB4IDogY29uc3RhbnQoK3gpLCB0cmVlbWFwKSA6IHBhZGRpbmdSaWdodDtcbiAgfTtcblxuICB0cmVlbWFwLnBhZGRpbmdCb3R0b20gPSBmdW5jdGlvbih4KSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAocGFkZGluZ0JvdHRvbSA9IHR5cGVvZiB4ID09PSBcImZ1bmN0aW9uXCIgPyB4IDogY29uc3RhbnQoK3gpLCB0cmVlbWFwKSA6IHBhZGRpbmdCb3R0b207XG4gIH07XG5cbiAgdHJlZW1hcC5wYWRkaW5nTGVmdCA9IGZ1bmN0aW9uKHgpIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChwYWRkaW5nTGVmdCA9IHR5cGVvZiB4ID09PSBcImZ1bmN0aW9uXCIgPyB4IDogY29uc3RhbnQoK3gpLCB0cmVlbWFwKSA6IHBhZGRpbmdMZWZ0O1xuICB9O1xuXG4gIHJldHVybiB0cmVlbWFwO1xufVxuIiwiaW1wb3J0IHRyZWVtYXBEaWNlIGZyb20gXCIuL2RpY2UuanNcIjtcbmltcG9ydCB0cmVlbWFwU2xpY2UgZnJvbSBcIi4vc2xpY2UuanNcIjtcbmltcG9ydCB7cGhpLCBzcXVhcmlmeVJhdGlvfSBmcm9tIFwiLi9zcXVhcmlmeS5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCAoZnVuY3Rpb24gY3VzdG9tKHJhdGlvKSB7XG5cbiAgZnVuY3Rpb24gcmVzcXVhcmlmeShwYXJlbnQsIHgwLCB5MCwgeDEsIHkxKSB7XG4gICAgaWYgKChyb3dzID0gcGFyZW50Ll9zcXVhcmlmeSkgJiYgKHJvd3MucmF0aW8gPT09IHJhdGlvKSkge1xuICAgICAgdmFyIHJvd3MsXG4gICAgICAgICAgcm93LFxuICAgICAgICAgIG5vZGVzLFxuICAgICAgICAgIGksXG4gICAgICAgICAgaiA9IC0xLFxuICAgICAgICAgIG4sXG4gICAgICAgICAgbSA9IHJvd3MubGVuZ3RoLFxuICAgICAgICAgIHZhbHVlID0gcGFyZW50LnZhbHVlO1xuXG4gICAgICB3aGlsZSAoKytqIDwgbSkge1xuICAgICAgICByb3cgPSByb3dzW2pdLCBub2RlcyA9IHJvdy5jaGlsZHJlbjtcbiAgICAgICAgZm9yIChpID0gcm93LnZhbHVlID0gMCwgbiA9IG5vZGVzLmxlbmd0aDsgaSA8IG47ICsraSkgcm93LnZhbHVlICs9IG5vZGVzW2ldLnZhbHVlO1xuICAgICAgICBpZiAocm93LmRpY2UpIHRyZWVtYXBEaWNlKHJvdywgeDAsIHkwLCB4MSwgdmFsdWUgPyB5MCArPSAoeTEgLSB5MCkgKiByb3cudmFsdWUgLyB2YWx1ZSA6IHkxKTtcbiAgICAgICAgZWxzZSB0cmVlbWFwU2xpY2Uocm93LCB4MCwgeTAsIHZhbHVlID8geDAgKz0gKHgxIC0geDApICogcm93LnZhbHVlIC8gdmFsdWUgOiB4MSwgeTEpO1xuICAgICAgICB2YWx1ZSAtPSByb3cudmFsdWU7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhcmVudC5fc3F1YXJpZnkgPSByb3dzID0gc3F1YXJpZnlSYXRpbyhyYXRpbywgcGFyZW50LCB4MCwgeTAsIHgxLCB5MSk7XG4gICAgICByb3dzLnJhdGlvID0gcmF0aW87XG4gICAgfVxuICB9XG5cbiAgcmVzcXVhcmlmeS5yYXRpbyA9IGZ1bmN0aW9uKHgpIHtcbiAgICByZXR1cm4gY3VzdG9tKCh4ID0gK3gpID4gMSA/IHggOiAxKTtcbiAgfTtcblxuICByZXR1cm4gcmVzcXVhcmlmeTtcbn0pKHBoaSk7XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihub2RlKSB7XG4gIG5vZGUueDAgPSBNYXRoLnJvdW5kKG5vZGUueDApO1xuICBub2RlLnkwID0gTWF0aC5yb3VuZChub2RlLnkwKTtcbiAgbm9kZS54MSA9IE1hdGgucm91bmQobm9kZS54MSk7XG4gIG5vZGUueTEgPSBNYXRoLnJvdW5kKG5vZGUueTEpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24ocGFyZW50LCB4MCwgeTAsIHgxLCB5MSkge1xuICB2YXIgbm9kZXMgPSBwYXJlbnQuY2hpbGRyZW4sXG4gICAgICBub2RlLFxuICAgICAgaSA9IC0xLFxuICAgICAgbiA9IG5vZGVzLmxlbmd0aCxcbiAgICAgIGsgPSBwYXJlbnQudmFsdWUgJiYgKHkxIC0geTApIC8gcGFyZW50LnZhbHVlO1xuXG4gIHdoaWxlICgrK2kgPCBuKSB7XG4gICAgbm9kZSA9IG5vZGVzW2ldLCBub2RlLngwID0geDAsIG5vZGUueDEgPSB4MTtcbiAgICBub2RlLnkwID0geTAsIG5vZGUueTEgPSB5MCArPSBub2RlLnZhbHVlICogaztcbiAgfVxufVxuIiwiaW1wb3J0IGRpY2UgZnJvbSBcIi4vZGljZS5qc1wiO1xuaW1wb3J0IHNsaWNlIGZyb20gXCIuL3NsaWNlLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHBhcmVudCwgeDAsIHkwLCB4MSwgeTEpIHtcbiAgKHBhcmVudC5kZXB0aCAmIDEgPyBzbGljZSA6IGRpY2UpKHBhcmVudCwgeDAsIHkwLCB4MSwgeTEpO1xufVxuIiwiaW1wb3J0IHRyZWVtYXBEaWNlIGZyb20gXCIuL2RpY2UuanNcIjtcbmltcG9ydCB0cmVlbWFwU2xpY2UgZnJvbSBcIi4vc2xpY2UuanNcIjtcblxuZXhwb3J0IHZhciBwaGkgPSAoMSArIE1hdGguc3FydCg1KSkgLyAyO1xuXG5leHBvcnQgZnVuY3Rpb24gc3F1YXJpZnlSYXRpbyhyYXRpbywgcGFyZW50LCB4MCwgeTAsIHgxLCB5MSkge1xuICB2YXIgcm93cyA9IFtdLFxuICAgICAgbm9kZXMgPSBwYXJlbnQuY2hpbGRyZW4sXG4gICAgICByb3csXG4gICAgICBub2RlVmFsdWUsXG4gICAgICBpMCA9IDAsXG4gICAgICBpMSA9IDAsXG4gICAgICBuID0gbm9kZXMubGVuZ3RoLFxuICAgICAgZHgsIGR5LFxuICAgICAgdmFsdWUgPSBwYXJlbnQudmFsdWUsXG4gICAgICBzdW1WYWx1ZSxcbiAgICAgIG1pblZhbHVlLFxuICAgICAgbWF4VmFsdWUsXG4gICAgICBuZXdSYXRpbyxcbiAgICAgIG1pblJhdGlvLFxuICAgICAgYWxwaGEsXG4gICAgICBiZXRhO1xuXG4gIHdoaWxlIChpMCA8IG4pIHtcbiAgICBkeCA9IHgxIC0geDAsIGR5ID0geTEgLSB5MDtcblxuICAgIC8vIEZpbmQgdGhlIG5leHQgbm9uLWVtcHR5IG5vZGUuXG4gICAgZG8gc3VtVmFsdWUgPSBub2Rlc1tpMSsrXS52YWx1ZTsgd2hpbGUgKCFzdW1WYWx1ZSAmJiBpMSA8IG4pO1xuICAgIG1pblZhbHVlID0gbWF4VmFsdWUgPSBzdW1WYWx1ZTtcbiAgICBhbHBoYSA9IE1hdGgubWF4KGR5IC8gZHgsIGR4IC8gZHkpIC8gKHZhbHVlICogcmF0aW8pO1xuICAgIGJldGEgPSBzdW1WYWx1ZSAqIHN1bVZhbHVlICogYWxwaGE7XG4gICAgbWluUmF0aW8gPSBNYXRoLm1heChtYXhWYWx1ZSAvIGJldGEsIGJldGEgLyBtaW5WYWx1ZSk7XG5cbiAgICAvLyBLZWVwIGFkZGluZyBub2RlcyB3aGlsZSB0aGUgYXNwZWN0IHJhdGlvIG1haW50YWlucyBvciBpbXByb3Zlcy5cbiAgICBmb3IgKDsgaTEgPCBuOyArK2kxKSB7XG4gICAgICBzdW1WYWx1ZSArPSBub2RlVmFsdWUgPSBub2Rlc1tpMV0udmFsdWU7XG4gICAgICBpZiAobm9kZVZhbHVlIDwgbWluVmFsdWUpIG1pblZhbHVlID0gbm9kZVZhbHVlO1xuICAgICAgaWYgKG5vZGVWYWx1ZSA+IG1heFZhbHVlKSBtYXhWYWx1ZSA9IG5vZGVWYWx1ZTtcbiAgICAgIGJldGEgPSBzdW1WYWx1ZSAqIHN1bVZhbHVlICogYWxwaGE7XG4gICAgICBuZXdSYXRpbyA9IE1hdGgubWF4KG1heFZhbHVlIC8gYmV0YSwgYmV0YSAvIG1pblZhbHVlKTtcbiAgICAgIGlmIChuZXdSYXRpbyA+IG1pblJhdGlvKSB7IHN1bVZhbHVlIC09IG5vZGVWYWx1ZTsgYnJlYWs7IH1cbiAgICAgIG1pblJhdGlvID0gbmV3UmF0aW87XG4gICAgfVxuXG4gICAgLy8gUG9zaXRpb24gYW5kIHJlY29yZCB0aGUgcm93IG9yaWVudGF0aW9uLlxuICAgIHJvd3MucHVzaChyb3cgPSB7dmFsdWU6IHN1bVZhbHVlLCBkaWNlOiBkeCA8IGR5LCBjaGlsZHJlbjogbm9kZXMuc2xpY2UoaTAsIGkxKX0pO1xuICAgIGlmIChyb3cuZGljZSkgdHJlZW1hcERpY2Uocm93LCB4MCwgeTAsIHgxLCB2YWx1ZSA/IHkwICs9IGR5ICogc3VtVmFsdWUgLyB2YWx1ZSA6IHkxKTtcbiAgICBlbHNlIHRyZWVtYXBTbGljZShyb3csIHgwLCB5MCwgdmFsdWUgPyB4MCArPSBkeCAqIHN1bVZhbHVlIC8gdmFsdWUgOiB4MSwgeTEpO1xuICAgIHZhbHVlIC09IHN1bVZhbHVlLCBpMCA9IGkxO1xuICB9XG5cbiAgcmV0dXJuIHJvd3M7XG59XG5cbmV4cG9ydCBkZWZhdWx0IChmdW5jdGlvbiBjdXN0b20ocmF0aW8pIHtcblxuICBmdW5jdGlvbiBzcXVhcmlmeShwYXJlbnQsIHgwLCB5MCwgeDEsIHkxKSB7XG4gICAgc3F1YXJpZnlSYXRpbyhyYXRpbywgcGFyZW50LCB4MCwgeTAsIHgxLCB5MSk7XG4gIH1cblxuICBzcXVhcmlmeS5yYXRpbyA9IGZ1bmN0aW9uKHgpIHtcbiAgICByZXR1cm4gY3VzdG9tKCh4ID0gK3gpID4gMSA/IHggOiAxKTtcbiAgfTtcblxuICByZXR1cm4gc3F1YXJpZnk7XG59KShwaGkpO1xuIiwiZXhwb3J0IHtkZWZhdWx0IGFzIHBhdGh9IGZyb20gXCIuL3BhdGguanNcIjtcbiIsImNvbnN0IHBpID0gTWF0aC5QSSxcbiAgICB0YXUgPSAyICogcGksXG4gICAgZXBzaWxvbiA9IDFlLTYsXG4gICAgdGF1RXBzaWxvbiA9IHRhdSAtIGVwc2lsb247XG5cbmZ1bmN0aW9uIFBhdGgoKSB7XG4gIHRoaXMuX3gwID0gdGhpcy5feTAgPSAvLyBzdGFydCBvZiBjdXJyZW50IHN1YnBhdGhcbiAgdGhpcy5feDEgPSB0aGlzLl95MSA9IG51bGw7IC8vIGVuZCBvZiBjdXJyZW50IHN1YnBhdGhcbiAgdGhpcy5fID0gXCJcIjtcbn1cblxuZnVuY3Rpb24gcGF0aCgpIHtcbiAgcmV0dXJuIG5ldyBQYXRoO1xufVxuXG5QYXRoLnByb3RvdHlwZSA9IHBhdGgucHJvdG90eXBlID0ge1xuICBjb25zdHJ1Y3RvcjogUGF0aCxcbiAgbW92ZVRvOiBmdW5jdGlvbih4LCB5KSB7XG4gICAgdGhpcy5fICs9IFwiTVwiICsgKHRoaXMuX3gwID0gdGhpcy5feDEgPSAreCkgKyBcIixcIiArICh0aGlzLl95MCA9IHRoaXMuX3kxID0gK3kpO1xuICB9LFxuICBjbG9zZVBhdGg6IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLl94MSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5feDEgPSB0aGlzLl94MCwgdGhpcy5feTEgPSB0aGlzLl95MDtcbiAgICAgIHRoaXMuXyArPSBcIlpcIjtcbiAgICB9XG4gIH0sXG4gIGxpbmVUbzogZnVuY3Rpb24oeCwgeSkge1xuICAgIHRoaXMuXyArPSBcIkxcIiArICh0aGlzLl94MSA9ICt4KSArIFwiLFwiICsgKHRoaXMuX3kxID0gK3kpO1xuICB9LFxuICBxdWFkcmF0aWNDdXJ2ZVRvOiBmdW5jdGlvbih4MSwgeTEsIHgsIHkpIHtcbiAgICB0aGlzLl8gKz0gXCJRXCIgKyAoK3gxKSArIFwiLFwiICsgKCt5MSkgKyBcIixcIiArICh0aGlzLl94MSA9ICt4KSArIFwiLFwiICsgKHRoaXMuX3kxID0gK3kpO1xuICB9LFxuICBiZXppZXJDdXJ2ZVRvOiBmdW5jdGlvbih4MSwgeTEsIHgyLCB5MiwgeCwgeSkge1xuICAgIHRoaXMuXyArPSBcIkNcIiArICgreDEpICsgXCIsXCIgKyAoK3kxKSArIFwiLFwiICsgKCt4MikgKyBcIixcIiArICgreTIpICsgXCIsXCIgKyAodGhpcy5feDEgPSAreCkgKyBcIixcIiArICh0aGlzLl95MSA9ICt5KTtcbiAgfSxcbiAgYXJjVG86IGZ1bmN0aW9uKHgxLCB5MSwgeDIsIHkyLCByKSB7XG4gICAgeDEgPSAreDEsIHkxID0gK3kxLCB4MiA9ICt4MiwgeTIgPSAreTIsIHIgPSArcjtcbiAgICB2YXIgeDAgPSB0aGlzLl94MSxcbiAgICAgICAgeTAgPSB0aGlzLl95MSxcbiAgICAgICAgeDIxID0geDIgLSB4MSxcbiAgICAgICAgeTIxID0geTIgLSB5MSxcbiAgICAgICAgeDAxID0geDAgLSB4MSxcbiAgICAgICAgeTAxID0geTAgLSB5MSxcbiAgICAgICAgbDAxXzIgPSB4MDEgKiB4MDEgKyB5MDEgKiB5MDE7XG5cbiAgICAvLyBJcyB0aGUgcmFkaXVzIG5lZ2F0aXZlPyBFcnJvci5cbiAgICBpZiAociA8IDApIHRocm93IG5ldyBFcnJvcihcIm5lZ2F0aXZlIHJhZGl1czogXCIgKyByKTtcblxuICAgIC8vIElzIHRoaXMgcGF0aCBlbXB0eT8gTW92ZSB0byAoeDEseTEpLlxuICAgIGlmICh0aGlzLl94MSA9PT0gbnVsbCkge1xuICAgICAgdGhpcy5fICs9IFwiTVwiICsgKHRoaXMuX3gxID0geDEpICsgXCIsXCIgKyAodGhpcy5feTEgPSB5MSk7XG4gICAgfVxuXG4gICAgLy8gT3IsIGlzICh4MSx5MSkgY29pbmNpZGVudCB3aXRoICh4MCx5MCk/IERvIG5vdGhpbmcuXG4gICAgZWxzZSBpZiAoIShsMDFfMiA+IGVwc2lsb24pKTtcblxuICAgIC8vIE9yLCBhcmUgKHgwLHkwKSwgKHgxLHkxKSBhbmQgKHgyLHkyKSBjb2xsaW5lYXI/XG4gICAgLy8gRXF1aXZhbGVudGx5LCBpcyAoeDEseTEpIGNvaW5jaWRlbnQgd2l0aCAoeDIseTIpP1xuICAgIC8vIE9yLCBpcyB0aGUgcmFkaXVzIHplcm8/IExpbmUgdG8gKHgxLHkxKS5cbiAgICBlbHNlIGlmICghKE1hdGguYWJzKHkwMSAqIHgyMSAtIHkyMSAqIHgwMSkgPiBlcHNpbG9uKSB8fCAhcikge1xuICAgICAgdGhpcy5fICs9IFwiTFwiICsgKHRoaXMuX3gxID0geDEpICsgXCIsXCIgKyAodGhpcy5feTEgPSB5MSk7XG4gICAgfVxuXG4gICAgLy8gT3RoZXJ3aXNlLCBkcmF3IGFuIGFyYyFcbiAgICBlbHNlIHtcbiAgICAgIHZhciB4MjAgPSB4MiAtIHgwLFxuICAgICAgICAgIHkyMCA9IHkyIC0geTAsXG4gICAgICAgICAgbDIxXzIgPSB4MjEgKiB4MjEgKyB5MjEgKiB5MjEsXG4gICAgICAgICAgbDIwXzIgPSB4MjAgKiB4MjAgKyB5MjAgKiB5MjAsXG4gICAgICAgICAgbDIxID0gTWF0aC5zcXJ0KGwyMV8yKSxcbiAgICAgICAgICBsMDEgPSBNYXRoLnNxcnQobDAxXzIpLFxuICAgICAgICAgIGwgPSByICogTWF0aC50YW4oKHBpIC0gTWF0aC5hY29zKChsMjFfMiArIGwwMV8yIC0gbDIwXzIpIC8gKDIgKiBsMjEgKiBsMDEpKSkgLyAyKSxcbiAgICAgICAgICB0MDEgPSBsIC8gbDAxLFxuICAgICAgICAgIHQyMSA9IGwgLyBsMjE7XG5cbiAgICAgIC8vIElmIHRoZSBzdGFydCB0YW5nZW50IGlzIG5vdCBjb2luY2lkZW50IHdpdGggKHgwLHkwKSwgbGluZSB0by5cbiAgICAgIGlmIChNYXRoLmFicyh0MDEgLSAxKSA+IGVwc2lsb24pIHtcbiAgICAgICAgdGhpcy5fICs9IFwiTFwiICsgKHgxICsgdDAxICogeDAxKSArIFwiLFwiICsgKHkxICsgdDAxICogeTAxKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fICs9IFwiQVwiICsgciArIFwiLFwiICsgciArIFwiLDAsMCxcIiArICgrKHkwMSAqIHgyMCA+IHgwMSAqIHkyMCkpICsgXCIsXCIgKyAodGhpcy5feDEgPSB4MSArIHQyMSAqIHgyMSkgKyBcIixcIiArICh0aGlzLl95MSA9IHkxICsgdDIxICogeTIxKTtcbiAgICB9XG4gIH0sXG4gIGFyYzogZnVuY3Rpb24oeCwgeSwgciwgYTAsIGExLCBjY3cpIHtcbiAgICB4ID0gK3gsIHkgPSAreSwgciA9ICtyLCBjY3cgPSAhIWNjdztcbiAgICB2YXIgZHggPSByICogTWF0aC5jb3MoYTApLFxuICAgICAgICBkeSA9IHIgKiBNYXRoLnNpbihhMCksXG4gICAgICAgIHgwID0geCArIGR4LFxuICAgICAgICB5MCA9IHkgKyBkeSxcbiAgICAgICAgY3cgPSAxIF4gY2N3LFxuICAgICAgICBkYSA9IGNjdyA/IGEwIC0gYTEgOiBhMSAtIGEwO1xuXG4gICAgLy8gSXMgdGhlIHJhZGl1cyBuZWdhdGl2ZT8gRXJyb3IuXG4gICAgaWYgKHIgPCAwKSB0aHJvdyBuZXcgRXJyb3IoXCJuZWdhdGl2ZSByYWRpdXM6IFwiICsgcik7XG5cbiAgICAvLyBJcyB0aGlzIHBhdGggZW1wdHk/IE1vdmUgdG8gKHgwLHkwKS5cbiAgICBpZiAodGhpcy5feDEgPT09IG51bGwpIHtcbiAgICAgIHRoaXMuXyArPSBcIk1cIiArIHgwICsgXCIsXCIgKyB5MDtcbiAgICB9XG5cbiAgICAvLyBPciwgaXMgKHgwLHkwKSBub3QgY29pbmNpZGVudCB3aXRoIHRoZSBwcmV2aW91cyBwb2ludD8gTGluZSB0byAoeDAseTApLlxuICAgIGVsc2UgaWYgKE1hdGguYWJzKHRoaXMuX3gxIC0geDApID4gZXBzaWxvbiB8fCBNYXRoLmFicyh0aGlzLl95MSAtIHkwKSA+IGVwc2lsb24pIHtcbiAgICAgIHRoaXMuXyArPSBcIkxcIiArIHgwICsgXCIsXCIgKyB5MDtcbiAgICB9XG5cbiAgICAvLyBJcyB0aGlzIGFyYyBlbXB0eT8gV2XigJlyZSBkb25lLlxuICAgIGlmICghcikgcmV0dXJuO1xuXG4gICAgLy8gRG9lcyB0aGUgYW5nbGUgZ28gdGhlIHdyb25nIHdheT8gRmxpcCB0aGUgZGlyZWN0aW9uLlxuICAgIGlmIChkYSA8IDApIGRhID0gZGEgJSB0YXUgKyB0YXU7XG5cbiAgICAvLyBJcyB0aGlzIGEgY29tcGxldGUgY2lyY2xlPyBEcmF3IHR3byBhcmNzIHRvIGNvbXBsZXRlIHRoZSBjaXJjbGUuXG4gICAgaWYgKGRhID4gdGF1RXBzaWxvbikge1xuICAgICAgdGhpcy5fICs9IFwiQVwiICsgciArIFwiLFwiICsgciArIFwiLDAsMSxcIiArIGN3ICsgXCIsXCIgKyAoeCAtIGR4KSArIFwiLFwiICsgKHkgLSBkeSkgKyBcIkFcIiArIHIgKyBcIixcIiArIHIgKyBcIiwwLDEsXCIgKyBjdyArIFwiLFwiICsgKHRoaXMuX3gxID0geDApICsgXCIsXCIgKyAodGhpcy5feTEgPSB5MCk7XG4gICAgfVxuXG4gICAgLy8gSXMgdGhpcyBhcmMgbm9uLWVtcHR5PyBEcmF3IGFuIGFyYyFcbiAgICBlbHNlIGlmIChkYSA+IGVwc2lsb24pIHtcbiAgICAgIHRoaXMuXyArPSBcIkFcIiArIHIgKyBcIixcIiArIHIgKyBcIiwwLFwiICsgKCsoZGEgPj0gcGkpKSArIFwiLFwiICsgY3cgKyBcIixcIiArICh0aGlzLl94MSA9IHggKyByICogTWF0aC5jb3MoYTEpKSArIFwiLFwiICsgKHRoaXMuX3kxID0geSArIHIgKiBNYXRoLnNpbihhMSkpO1xuICAgIH1cbiAgfSxcbiAgcmVjdDogZnVuY3Rpb24oeCwgeSwgdywgaCkge1xuICAgIHRoaXMuXyArPSBcIk1cIiArICh0aGlzLl94MCA9IHRoaXMuX3gxID0gK3gpICsgXCIsXCIgKyAodGhpcy5feTAgPSB0aGlzLl95MSA9ICt5KSArIFwiaFwiICsgKCt3KSArIFwidlwiICsgKCtoKSArIFwiaFwiICsgKC13KSArIFwiWlwiO1xuICB9LFxuICB0b1N0cmluZzogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuXztcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgcGF0aDtcbiIsIi8vIEdpdmVuIHNvbWV0aGluZyBhcnJheSBsaWtlIChvciBudWxsKSwgcmV0dXJucyBzb21ldGhpbmcgdGhhdCBpcyBzdHJpY3RseSBhblxuLy8gYXJyYXkuIFRoaXMgaXMgdXNlZCB0byBlbnN1cmUgdGhhdCBhcnJheS1saWtlIG9iamVjdHMgcGFzc2VkIHRvIGQzLnNlbGVjdEFsbFxuLy8gb3Igc2VsZWN0aW9uLnNlbGVjdEFsbCBhcmUgY29udmVydGVkIGludG8gcHJvcGVyIGFycmF5cyB3aGVuIGNyZWF0aW5nIGFcbi8vIHNlbGVjdGlvbjsgd2UgZG9u4oCZdCBldmVyIHdhbnQgdG8gY3JlYXRlIGEgc2VsZWN0aW9uIGJhY2tlZCBieSBhIGxpdmVcbi8vIEhUTUxDb2xsZWN0aW9uIG9yIE5vZGVMaXN0LiBIb3dldmVyLCBub3RlIHRoYXQgc2VsZWN0aW9uLnNlbGVjdEFsbCB3aWxsIHVzZSBhXG4vLyBzdGF0aWMgTm9kZUxpc3QgYXMgYSBncm91cCwgc2luY2UgaXQgc2FmZWx5IGRlcml2ZWQgZnJvbSBxdWVyeVNlbGVjdG9yQWxsLlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYXJyYXkoeCkge1xuICByZXR1cm4geCA9PSBudWxsID8gW10gOiBBcnJheS5pc0FycmF5KHgpID8geCA6IEFycmF5LmZyb20oeCk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbih4KSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4geDtcbiAgfTtcbn1cbiIsImltcG9ydCBjcmVhdG9yIGZyb20gXCIuL2NyZWF0b3IuanNcIjtcbmltcG9ydCBzZWxlY3QgZnJvbSBcIi4vc2VsZWN0LmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG5hbWUpIHtcbiAgcmV0dXJuIHNlbGVjdChjcmVhdG9yKG5hbWUpLmNhbGwoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSk7XG59XG4iLCJpbXBvcnQgbmFtZXNwYWNlIGZyb20gXCIuL25hbWVzcGFjZS5qc1wiO1xuaW1wb3J0IHt4aHRtbH0gZnJvbSBcIi4vbmFtZXNwYWNlcy5qc1wiO1xuXG5mdW5jdGlvbiBjcmVhdG9ySW5oZXJpdChuYW1lKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgZG9jdW1lbnQgPSB0aGlzLm93bmVyRG9jdW1lbnQsXG4gICAgICAgIHVyaSA9IHRoaXMubmFtZXNwYWNlVVJJO1xuICAgIHJldHVybiB1cmkgPT09IHhodG1sICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5uYW1lc3BhY2VVUkkgPT09IHhodG1sXG4gICAgICAgID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChuYW1lKVxuICAgICAgICA6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyh1cmksIG5hbWUpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBjcmVhdG9yRml4ZWQoZnVsbG5hbWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLm93bmVyRG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKGZ1bGxuYW1lLnNwYWNlLCBmdWxsbmFtZS5sb2NhbCk7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG5hbWUpIHtcbiAgdmFyIGZ1bGxuYW1lID0gbmFtZXNwYWNlKG5hbWUpO1xuICByZXR1cm4gKGZ1bGxuYW1lLmxvY2FsXG4gICAgICA/IGNyZWF0b3JGaXhlZFxuICAgICAgOiBjcmVhdG9ySW5oZXJpdCkoZnVsbG5hbWUpO1xufVxuIiwiZXhwb3J0IHtkZWZhdWx0IGFzIGNyZWF0ZX0gZnJvbSBcIi4vY3JlYXRlLmpzXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgY3JlYXRvcn0gZnJvbSBcIi4vY3JlYXRvci5qc1wiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGxvY2FsfSBmcm9tIFwiLi9sb2NhbC5qc1wiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIG1hdGNoZXJ9IGZyb20gXCIuL21hdGNoZXIuanNcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBuYW1lc3BhY2V9IGZyb20gXCIuL25hbWVzcGFjZS5qc1wiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIG5hbWVzcGFjZXN9IGZyb20gXCIuL25hbWVzcGFjZXMuanNcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBwb2ludGVyfSBmcm9tIFwiLi9wb2ludGVyLmpzXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgcG9pbnRlcnN9IGZyb20gXCIuL3BvaW50ZXJzLmpzXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgc2VsZWN0fSBmcm9tIFwiLi9zZWxlY3QuanNcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBzZWxlY3RBbGx9IGZyb20gXCIuL3NlbGVjdEFsbC5qc1wiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIHNlbGVjdGlvbn0gZnJvbSBcIi4vc2VsZWN0aW9uL2luZGV4LmpzXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgc2VsZWN0b3J9IGZyb20gXCIuL3NlbGVjdG9yLmpzXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgc2VsZWN0b3JBbGx9IGZyb20gXCIuL3NlbGVjdG9yQWxsLmpzXCI7XG5leHBvcnQge3N0eWxlVmFsdWUgYXMgc3R5bGV9IGZyb20gXCIuL3NlbGVjdGlvbi9zdHlsZS5qc1wiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIHdpbmRvd30gZnJvbSBcIi4vd2luZG93LmpzXCI7XG4iLCJ2YXIgbmV4dElkID0gMDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9jYWwoKSB7XG4gIHJldHVybiBuZXcgTG9jYWw7XG59XG5cbmZ1bmN0aW9uIExvY2FsKCkge1xuICB0aGlzLl8gPSBcIkBcIiArICgrK25leHRJZCkudG9TdHJpbmcoMzYpO1xufVxuXG5Mb2NhbC5wcm90b3R5cGUgPSBsb2NhbC5wcm90b3R5cGUgPSB7XG4gIGNvbnN0cnVjdG9yOiBMb2NhbCxcbiAgZ2V0OiBmdW5jdGlvbihub2RlKSB7XG4gICAgdmFyIGlkID0gdGhpcy5fO1xuICAgIHdoaWxlICghKGlkIGluIG5vZGUpKSBpZiAoIShub2RlID0gbm9kZS5wYXJlbnROb2RlKSkgcmV0dXJuO1xuICAgIHJldHVybiBub2RlW2lkXTtcbiAgfSxcbiAgc2V0OiBmdW5jdGlvbihub2RlLCB2YWx1ZSkge1xuICAgIHJldHVybiBub2RlW3RoaXMuX10gPSB2YWx1ZTtcbiAgfSxcbiAgcmVtb3ZlOiBmdW5jdGlvbihub2RlKSB7XG4gICAgcmV0dXJuIHRoaXMuXyBpbiBub2RlICYmIGRlbGV0ZSBub2RlW3RoaXMuX107XG4gIH0sXG4gIHRvU3RyaW5nOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fO1xuICB9XG59O1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oc2VsZWN0b3IpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLm1hdGNoZXMoc2VsZWN0b3IpO1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hpbGRNYXRjaGVyKHNlbGVjdG9yKSB7XG4gIHJldHVybiBmdW5jdGlvbihub2RlKSB7XG4gICAgcmV0dXJuIG5vZGUubWF0Y2hlcyhzZWxlY3Rvcik7XG4gIH07XG59XG5cbiIsImltcG9ydCBuYW1lc3BhY2VzIGZyb20gXCIuL25hbWVzcGFjZXMuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24obmFtZSkge1xuICB2YXIgcHJlZml4ID0gbmFtZSArPSBcIlwiLCBpID0gcHJlZml4LmluZGV4T2YoXCI6XCIpO1xuICBpZiAoaSA+PSAwICYmIChwcmVmaXggPSBuYW1lLnNsaWNlKDAsIGkpKSAhPT0gXCJ4bWxuc1wiKSBuYW1lID0gbmFtZS5zbGljZShpICsgMSk7XG4gIHJldHVybiBuYW1lc3BhY2VzLmhhc093blByb3BlcnR5KHByZWZpeCkgPyB7c3BhY2U6IG5hbWVzcGFjZXNbcHJlZml4XSwgbG9jYWw6IG5hbWV9IDogbmFtZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnNcbn1cbiIsImV4cG9ydCB2YXIgeGh0bWwgPSBcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWxcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBzdmc6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcbiAgeGh0bWw6IHhodG1sLFxuICB4bGluazogXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIsXG4gIHhtbDogXCJodHRwOi8vd3d3LnczLm9yZy9YTUwvMTk5OC9uYW1lc3BhY2VcIixcbiAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC94bWxucy9cIlxufTtcbiIsImltcG9ydCBzb3VyY2VFdmVudCBmcm9tIFwiLi9zb3VyY2VFdmVudC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihldmVudCwgbm9kZSkge1xuICBldmVudCA9IHNvdXJjZUV2ZW50KGV2ZW50KTtcbiAgaWYgKG5vZGUgPT09IHVuZGVmaW5lZCkgbm9kZSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XG4gIGlmIChub2RlKSB7XG4gICAgdmFyIHN2ZyA9IG5vZGUub3duZXJTVkdFbGVtZW50IHx8IG5vZGU7XG4gICAgaWYgKHN2Zy5jcmVhdGVTVkdQb2ludCkge1xuICAgICAgdmFyIHBvaW50ID0gc3ZnLmNyZWF0ZVNWR1BvaW50KCk7XG4gICAgICBwb2ludC54ID0gZXZlbnQuY2xpZW50WCwgcG9pbnQueSA9IGV2ZW50LmNsaWVudFk7XG4gICAgICBwb2ludCA9IHBvaW50Lm1hdHJpeFRyYW5zZm9ybShub2RlLmdldFNjcmVlbkNUTSgpLmludmVyc2UoKSk7XG4gICAgICByZXR1cm4gW3BvaW50LngsIHBvaW50LnldO1xuICAgIH1cbiAgICBpZiAobm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QpIHtcbiAgICAgIHZhciByZWN0ID0gbm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIHJldHVybiBbZXZlbnQuY2xpZW50WCAtIHJlY3QubGVmdCAtIG5vZGUuY2xpZW50TGVmdCwgZXZlbnQuY2xpZW50WSAtIHJlY3QudG9wIC0gbm9kZS5jbGllbnRUb3BdO1xuICAgIH1cbiAgfVxuICByZXR1cm4gW2V2ZW50LnBhZ2VYLCBldmVudC5wYWdlWV07XG59XG4iLCJpbXBvcnQgcG9pbnRlciBmcm9tIFwiLi9wb2ludGVyLmpzXCI7XG5pbXBvcnQgc291cmNlRXZlbnQgZnJvbSBcIi4vc291cmNlRXZlbnQuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oZXZlbnRzLCBub2RlKSB7XG4gIGlmIChldmVudHMudGFyZ2V0KSB7IC8vIGkuZS4sIGluc3RhbmNlb2YgRXZlbnQsIG5vdCBUb3VjaExpc3Qgb3IgaXRlcmFibGVcbiAgICBldmVudHMgPSBzb3VyY2VFdmVudChldmVudHMpO1xuICAgIGlmIChub2RlID09PSB1bmRlZmluZWQpIG5vZGUgPSBldmVudHMuY3VycmVudFRhcmdldDtcbiAgICBldmVudHMgPSBldmVudHMudG91Y2hlcyB8fCBbZXZlbnRzXTtcbiAgfVxuICByZXR1cm4gQXJyYXkuZnJvbShldmVudHMsIGV2ZW50ID0+IHBvaW50ZXIoZXZlbnQsIG5vZGUpKTtcbn1cbiIsImltcG9ydCB7U2VsZWN0aW9uLCByb290fSBmcm9tIFwiLi9zZWxlY3Rpb24vaW5kZXguanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oc2VsZWN0b3IpIHtcbiAgcmV0dXJuIHR5cGVvZiBzZWxlY3RvciA9PT0gXCJzdHJpbmdcIlxuICAgICAgPyBuZXcgU2VsZWN0aW9uKFtbZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcildXSwgW2RvY3VtZW50LmRvY3VtZW50RWxlbWVudF0pXG4gICAgICA6IG5ldyBTZWxlY3Rpb24oW1tzZWxlY3Rvcl1dLCByb290KTtcbn1cbiIsImltcG9ydCBhcnJheSBmcm9tIFwiLi9hcnJheS5qc1wiO1xuaW1wb3J0IHtTZWxlY3Rpb24sIHJvb3R9IGZyb20gXCIuL3NlbGVjdGlvbi9pbmRleC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihzZWxlY3Rvcikge1xuICByZXR1cm4gdHlwZW9mIHNlbGVjdG9yID09PSBcInN0cmluZ1wiXG4gICAgICA/IG5ldyBTZWxlY3Rpb24oW2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpXSwgW2RvY3VtZW50LmRvY3VtZW50RWxlbWVudF0pXG4gICAgICA6IG5ldyBTZWxlY3Rpb24oW2FycmF5KHNlbGVjdG9yKV0sIHJvb3QpO1xufVxuIiwiaW1wb3J0IGNyZWF0b3IgZnJvbSBcIi4uL2NyZWF0b3IuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24obmFtZSkge1xuICB2YXIgY3JlYXRlID0gdHlwZW9mIG5hbWUgPT09IFwiZnVuY3Rpb25cIiA/IG5hbWUgOiBjcmVhdG9yKG5hbWUpO1xuICByZXR1cm4gdGhpcy5zZWxlY3QoZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuYXBwZW5kQ2hpbGQoY3JlYXRlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9KTtcbn1cbiIsImltcG9ydCBuYW1lc3BhY2UgZnJvbSBcIi4uL25hbWVzcGFjZS5qc1wiO1xuXG5mdW5jdGlvbiBhdHRyUmVtb3ZlKG5hbWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHRoaXMucmVtb3ZlQXR0cmlidXRlKG5hbWUpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBhdHRyUmVtb3ZlTlMoZnVsbG5hbWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHRoaXMucmVtb3ZlQXR0cmlidXRlTlMoZnVsbG5hbWUuc3BhY2UsIGZ1bGxuYW1lLmxvY2FsKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gYXR0ckNvbnN0YW50KG5hbWUsIHZhbHVlKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGF0dHJDb25zdGFudE5TKGZ1bGxuYW1lLCB2YWx1ZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5zZXRBdHRyaWJ1dGVOUyhmdWxsbmFtZS5zcGFjZSwgZnVsbG5hbWUubG9jYWwsIHZhbHVlKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gYXR0ckZ1bmN0aW9uKG5hbWUsIHZhbHVlKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgdiA9IHZhbHVlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgaWYgKHYgPT0gbnVsbCkgdGhpcy5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7XG4gICAgZWxzZSB0aGlzLnNldEF0dHJpYnV0ZShuYW1lLCB2KTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gYXR0ckZ1bmN0aW9uTlMoZnVsbG5hbWUsIHZhbHVlKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgdiA9IHZhbHVlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgaWYgKHYgPT0gbnVsbCkgdGhpcy5yZW1vdmVBdHRyaWJ1dGVOUyhmdWxsbmFtZS5zcGFjZSwgZnVsbG5hbWUubG9jYWwpO1xuICAgIGVsc2UgdGhpcy5zZXRBdHRyaWJ1dGVOUyhmdWxsbmFtZS5zcGFjZSwgZnVsbG5hbWUubG9jYWwsIHYpO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihuYW1lLCB2YWx1ZSkge1xuICB2YXIgZnVsbG5hbWUgPSBuYW1lc3BhY2UobmFtZSk7XG5cbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPCAyKSB7XG4gICAgdmFyIG5vZGUgPSB0aGlzLm5vZGUoKTtcbiAgICByZXR1cm4gZnVsbG5hbWUubG9jYWxcbiAgICAgICAgPyBub2RlLmdldEF0dHJpYnV0ZU5TKGZ1bGxuYW1lLnNwYWNlLCBmdWxsbmFtZS5sb2NhbClcbiAgICAgICAgOiBub2RlLmdldEF0dHJpYnV0ZShmdWxsbmFtZSk7XG4gIH1cblxuICByZXR1cm4gdGhpcy5lYWNoKCh2YWx1ZSA9PSBudWxsXG4gICAgICA/IChmdWxsbmFtZS5sb2NhbCA/IGF0dHJSZW1vdmVOUyA6IGF0dHJSZW1vdmUpIDogKHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiXG4gICAgICA/IChmdWxsbmFtZS5sb2NhbCA/IGF0dHJGdW5jdGlvbk5TIDogYXR0ckZ1bmN0aW9uKVxuICAgICAgOiAoZnVsbG5hbWUubG9jYWwgPyBhdHRyQ29uc3RhbnROUyA6IGF0dHJDb25zdGFudCkpKShmdWxsbmFtZSwgdmFsdWUpKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICB2YXIgY2FsbGJhY2sgPSBhcmd1bWVudHNbMF07XG4gIGFyZ3VtZW50c1swXSA9IHRoaXM7XG4gIGNhbGxiYWNrLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG4gIHJldHVybiB0aGlzO1xufVxuIiwiZnVuY3Rpb24gY2xhc3NBcnJheShzdHJpbmcpIHtcbiAgcmV0dXJuIHN0cmluZy50cmltKCkuc3BsaXQoL158XFxzKy8pO1xufVxuXG5mdW5jdGlvbiBjbGFzc0xpc3Qobm9kZSkge1xuICByZXR1cm4gbm9kZS5jbGFzc0xpc3QgfHwgbmV3IENsYXNzTGlzdChub2RlKTtcbn1cblxuZnVuY3Rpb24gQ2xhc3NMaXN0KG5vZGUpIHtcbiAgdGhpcy5fbm9kZSA9IG5vZGU7XG4gIHRoaXMuX25hbWVzID0gY2xhc3NBcnJheShub2RlLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpIHx8IFwiXCIpO1xufVxuXG5DbGFzc0xpc3QucHJvdG90eXBlID0ge1xuICBhZGQ6IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICB2YXIgaSA9IHRoaXMuX25hbWVzLmluZGV4T2YobmFtZSk7XG4gICAgaWYgKGkgPCAwKSB7XG4gICAgICB0aGlzLl9uYW1lcy5wdXNoKG5hbWUpO1xuICAgICAgdGhpcy5fbm9kZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCB0aGlzLl9uYW1lcy5qb2luKFwiIFwiKSk7XG4gICAgfVxuICB9LFxuICByZW1vdmU6IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICB2YXIgaSA9IHRoaXMuX25hbWVzLmluZGV4T2YobmFtZSk7XG4gICAgaWYgKGkgPj0gMCkge1xuICAgICAgdGhpcy5fbmFtZXMuc3BsaWNlKGksIDEpO1xuICAgICAgdGhpcy5fbm9kZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCB0aGlzLl9uYW1lcy5qb2luKFwiIFwiKSk7XG4gICAgfVxuICB9LFxuICBjb250YWluczogZnVuY3Rpb24obmFtZSkge1xuICAgIHJldHVybiB0aGlzLl9uYW1lcy5pbmRleE9mKG5hbWUpID49IDA7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIGNsYXNzZWRBZGQobm9kZSwgbmFtZXMpIHtcbiAgdmFyIGxpc3QgPSBjbGFzc0xpc3Qobm9kZSksIGkgPSAtMSwgbiA9IG5hbWVzLmxlbmd0aDtcbiAgd2hpbGUgKCsraSA8IG4pIGxpc3QuYWRkKG5hbWVzW2ldKTtcbn1cblxuZnVuY3Rpb24gY2xhc3NlZFJlbW92ZShub2RlLCBuYW1lcykge1xuICB2YXIgbGlzdCA9IGNsYXNzTGlzdChub2RlKSwgaSA9IC0xLCBuID0gbmFtZXMubGVuZ3RoO1xuICB3aGlsZSAoKytpIDwgbikgbGlzdC5yZW1vdmUobmFtZXNbaV0pO1xufVxuXG5mdW5jdGlvbiBjbGFzc2VkVHJ1ZShuYW1lcykge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgY2xhc3NlZEFkZCh0aGlzLCBuYW1lcyk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGNsYXNzZWRGYWxzZShuYW1lcykge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgY2xhc3NlZFJlbW92ZSh0aGlzLCBuYW1lcyk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGNsYXNzZWRGdW5jdGlvbihuYW1lcywgdmFsdWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICh2YWx1ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpID8gY2xhc3NlZEFkZCA6IGNsYXNzZWRSZW1vdmUpKHRoaXMsIG5hbWVzKTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24obmFtZSwgdmFsdWUpIHtcbiAgdmFyIG5hbWVzID0gY2xhc3NBcnJheShuYW1lICsgXCJcIik7XG5cbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPCAyKSB7XG4gICAgdmFyIGxpc3QgPSBjbGFzc0xpc3QodGhpcy5ub2RlKCkpLCBpID0gLTEsIG4gPSBuYW1lcy5sZW5ndGg7XG4gICAgd2hpbGUgKCsraSA8IG4pIGlmICghbGlzdC5jb250YWlucyhuYW1lc1tpXSkpIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiB0aGlzLmVhY2goKHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiXG4gICAgICA/IGNsYXNzZWRGdW5jdGlvbiA6IHZhbHVlXG4gICAgICA/IGNsYXNzZWRUcnVlXG4gICAgICA6IGNsYXNzZWRGYWxzZSkobmFtZXMsIHZhbHVlKSk7XG59XG4iLCJmdW5jdGlvbiBzZWxlY3Rpb25fY2xvbmVTaGFsbG93KCkge1xuICB2YXIgY2xvbmUgPSB0aGlzLmNsb25lTm9kZShmYWxzZSksIHBhcmVudCA9IHRoaXMucGFyZW50Tm9kZTtcbiAgcmV0dXJuIHBhcmVudCA/IHBhcmVudC5pbnNlcnRCZWZvcmUoY2xvbmUsIHRoaXMubmV4dFNpYmxpbmcpIDogY2xvbmU7XG59XG5cbmZ1bmN0aW9uIHNlbGVjdGlvbl9jbG9uZURlZXAoKSB7XG4gIHZhciBjbG9uZSA9IHRoaXMuY2xvbmVOb2RlKHRydWUpLCBwYXJlbnQgPSB0aGlzLnBhcmVudE5vZGU7XG4gIHJldHVybiBwYXJlbnQgPyBwYXJlbnQuaW5zZXJ0QmVmb3JlKGNsb25lLCB0aGlzLm5leHRTaWJsaW5nKSA6IGNsb25lO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihkZWVwKSB7XG4gIHJldHVybiB0aGlzLnNlbGVjdChkZWVwID8gc2VsZWN0aW9uX2Nsb25lRGVlcCA6IHNlbGVjdGlvbl9jbG9uZVNoYWxsb3cpO1xufVxuIiwiaW1wb3J0IHtTZWxlY3Rpb259IGZyb20gXCIuL2luZGV4LmpzXCI7XG5pbXBvcnQge0VudGVyTm9kZX0gZnJvbSBcIi4vZW50ZXIuanNcIjtcbmltcG9ydCBjb25zdGFudCBmcm9tIFwiLi4vY29uc3RhbnQuanNcIjtcblxuZnVuY3Rpb24gYmluZEluZGV4KHBhcmVudCwgZ3JvdXAsIGVudGVyLCB1cGRhdGUsIGV4aXQsIGRhdGEpIHtcbiAgdmFyIGkgPSAwLFxuICAgICAgbm9kZSxcbiAgICAgIGdyb3VwTGVuZ3RoID0gZ3JvdXAubGVuZ3RoLFxuICAgICAgZGF0YUxlbmd0aCA9IGRhdGEubGVuZ3RoO1xuXG4gIC8vIFB1dCBhbnkgbm9uLW51bGwgbm9kZXMgdGhhdCBmaXQgaW50byB1cGRhdGUuXG4gIC8vIFB1dCBhbnkgbnVsbCBub2RlcyBpbnRvIGVudGVyLlxuICAvLyBQdXQgYW55IHJlbWFpbmluZyBkYXRhIGludG8gZW50ZXIuXG4gIGZvciAoOyBpIDwgZGF0YUxlbmd0aDsgKytpKSB7XG4gICAgaWYgKG5vZGUgPSBncm91cFtpXSkge1xuICAgICAgbm9kZS5fX2RhdGFfXyA9IGRhdGFbaV07XG4gICAgICB1cGRhdGVbaV0gPSBub2RlO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbnRlcltpXSA9IG5ldyBFbnRlck5vZGUocGFyZW50LCBkYXRhW2ldKTtcbiAgICB9XG4gIH1cblxuICAvLyBQdXQgYW55IG5vbi1udWxsIG5vZGVzIHRoYXQgZG9u4oCZdCBmaXQgaW50byBleGl0LlxuICBmb3IgKDsgaSA8IGdyb3VwTGVuZ3RoOyArK2kpIHtcbiAgICBpZiAobm9kZSA9IGdyb3VwW2ldKSB7XG4gICAgICBleGl0W2ldID0gbm9kZTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYmluZEtleShwYXJlbnQsIGdyb3VwLCBlbnRlciwgdXBkYXRlLCBleGl0LCBkYXRhLCBrZXkpIHtcbiAgdmFyIGksXG4gICAgICBub2RlLFxuICAgICAgbm9kZUJ5S2V5VmFsdWUgPSBuZXcgTWFwLFxuICAgICAgZ3JvdXBMZW5ndGggPSBncm91cC5sZW5ndGgsXG4gICAgICBkYXRhTGVuZ3RoID0gZGF0YS5sZW5ndGgsXG4gICAgICBrZXlWYWx1ZXMgPSBuZXcgQXJyYXkoZ3JvdXBMZW5ndGgpLFxuICAgICAga2V5VmFsdWU7XG5cbiAgLy8gQ29tcHV0ZSB0aGUga2V5IGZvciBlYWNoIG5vZGUuXG4gIC8vIElmIG11bHRpcGxlIG5vZGVzIGhhdmUgdGhlIHNhbWUga2V5LCB0aGUgZHVwbGljYXRlcyBhcmUgYWRkZWQgdG8gZXhpdC5cbiAgZm9yIChpID0gMDsgaSA8IGdyb3VwTGVuZ3RoOyArK2kpIHtcbiAgICBpZiAobm9kZSA9IGdyb3VwW2ldKSB7XG4gICAgICBrZXlWYWx1ZXNbaV0gPSBrZXlWYWx1ZSA9IGtleS5jYWxsKG5vZGUsIG5vZGUuX19kYXRhX18sIGksIGdyb3VwKSArIFwiXCI7XG4gICAgICBpZiAobm9kZUJ5S2V5VmFsdWUuaGFzKGtleVZhbHVlKSkge1xuICAgICAgICBleGl0W2ldID0gbm9kZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5vZGVCeUtleVZhbHVlLnNldChrZXlWYWx1ZSwgbm9kZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gQ29tcHV0ZSB0aGUga2V5IGZvciBlYWNoIGRhdHVtLlxuICAvLyBJZiB0aGVyZSBhIG5vZGUgYXNzb2NpYXRlZCB3aXRoIHRoaXMga2V5LCBqb2luIGFuZCBhZGQgaXQgdG8gdXBkYXRlLlxuICAvLyBJZiB0aGVyZSBpcyBub3QgKG9yIHRoZSBrZXkgaXMgYSBkdXBsaWNhdGUpLCBhZGQgaXQgdG8gZW50ZXIuXG4gIGZvciAoaSA9IDA7IGkgPCBkYXRhTGVuZ3RoOyArK2kpIHtcbiAgICBrZXlWYWx1ZSA9IGtleS5jYWxsKHBhcmVudCwgZGF0YVtpXSwgaSwgZGF0YSkgKyBcIlwiO1xuICAgIGlmIChub2RlID0gbm9kZUJ5S2V5VmFsdWUuZ2V0KGtleVZhbHVlKSkge1xuICAgICAgdXBkYXRlW2ldID0gbm9kZTtcbiAgICAgIG5vZGUuX19kYXRhX18gPSBkYXRhW2ldO1xuICAgICAgbm9kZUJ5S2V5VmFsdWUuZGVsZXRlKGtleVZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZW50ZXJbaV0gPSBuZXcgRW50ZXJOb2RlKHBhcmVudCwgZGF0YVtpXSk7XG4gICAgfVxuICB9XG5cbiAgLy8gQWRkIGFueSByZW1haW5pbmcgbm9kZXMgdGhhdCB3ZXJlIG5vdCBib3VuZCB0byBkYXRhIHRvIGV4aXQuXG4gIGZvciAoaSA9IDA7IGkgPCBncm91cExlbmd0aDsgKytpKSB7XG4gICAgaWYgKChub2RlID0gZ3JvdXBbaV0pICYmIChub2RlQnlLZXlWYWx1ZS5nZXQoa2V5VmFsdWVzW2ldKSA9PT0gbm9kZSkpIHtcbiAgICAgIGV4aXRbaV0gPSBub2RlO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBkYXR1bShub2RlKSB7XG4gIHJldHVybiBub2RlLl9fZGF0YV9fO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbih2YWx1ZSwga2V5KSB7XG4gIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIEFycmF5LmZyb20odGhpcywgZGF0dW0pO1xuXG4gIHZhciBiaW5kID0ga2V5ID8gYmluZEtleSA6IGJpbmRJbmRleCxcbiAgICAgIHBhcmVudHMgPSB0aGlzLl9wYXJlbnRzLFxuICAgICAgZ3JvdXBzID0gdGhpcy5fZ3JvdXBzO1xuXG4gIGlmICh0eXBlb2YgdmFsdWUgIT09IFwiZnVuY3Rpb25cIikgdmFsdWUgPSBjb25zdGFudCh2YWx1ZSk7XG5cbiAgZm9yICh2YXIgbSA9IGdyb3Vwcy5sZW5ndGgsIHVwZGF0ZSA9IG5ldyBBcnJheShtKSwgZW50ZXIgPSBuZXcgQXJyYXkobSksIGV4aXQgPSBuZXcgQXJyYXkobSksIGogPSAwOyBqIDwgbTsgKytqKSB7XG4gICAgdmFyIHBhcmVudCA9IHBhcmVudHNbal0sXG4gICAgICAgIGdyb3VwID0gZ3JvdXBzW2pdLFxuICAgICAgICBncm91cExlbmd0aCA9IGdyb3VwLmxlbmd0aCxcbiAgICAgICAgZGF0YSA9IGFycmF5bGlrZSh2YWx1ZS5jYWxsKHBhcmVudCwgcGFyZW50ICYmIHBhcmVudC5fX2RhdGFfXywgaiwgcGFyZW50cykpLFxuICAgICAgICBkYXRhTGVuZ3RoID0gZGF0YS5sZW5ndGgsXG4gICAgICAgIGVudGVyR3JvdXAgPSBlbnRlcltqXSA9IG5ldyBBcnJheShkYXRhTGVuZ3RoKSxcbiAgICAgICAgdXBkYXRlR3JvdXAgPSB1cGRhdGVbal0gPSBuZXcgQXJyYXkoZGF0YUxlbmd0aCksXG4gICAgICAgIGV4aXRHcm91cCA9IGV4aXRbal0gPSBuZXcgQXJyYXkoZ3JvdXBMZW5ndGgpO1xuXG4gICAgYmluZChwYXJlbnQsIGdyb3VwLCBlbnRlckdyb3VwLCB1cGRhdGVHcm91cCwgZXhpdEdyb3VwLCBkYXRhLCBrZXkpO1xuXG4gICAgLy8gTm93IGNvbm5lY3QgdGhlIGVudGVyIG5vZGVzIHRvIHRoZWlyIGZvbGxvd2luZyB1cGRhdGUgbm9kZSwgc3VjaCB0aGF0XG4gICAgLy8gYXBwZW5kQ2hpbGQgY2FuIGluc2VydCB0aGUgbWF0ZXJpYWxpemVkIGVudGVyIG5vZGUgYmVmb3JlIHRoaXMgbm9kZSxcbiAgICAvLyByYXRoZXIgdGhhbiBhdCB0aGUgZW5kIG9mIHRoZSBwYXJlbnQgbm9kZS5cbiAgICBmb3IgKHZhciBpMCA9IDAsIGkxID0gMCwgcHJldmlvdXMsIG5leHQ7IGkwIDwgZGF0YUxlbmd0aDsgKytpMCkge1xuICAgICAgaWYgKHByZXZpb3VzID0gZW50ZXJHcm91cFtpMF0pIHtcbiAgICAgICAgaWYgKGkwID49IGkxKSBpMSA9IGkwICsgMTtcbiAgICAgICAgd2hpbGUgKCEobmV4dCA9IHVwZGF0ZUdyb3VwW2kxXSkgJiYgKytpMSA8IGRhdGFMZW5ndGgpO1xuICAgICAgICBwcmV2aW91cy5fbmV4dCA9IG5leHQgfHwgbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB1cGRhdGUgPSBuZXcgU2VsZWN0aW9uKHVwZGF0ZSwgcGFyZW50cyk7XG4gIHVwZGF0ZS5fZW50ZXIgPSBlbnRlcjtcbiAgdXBkYXRlLl9leGl0ID0gZXhpdDtcbiAgcmV0dXJuIHVwZGF0ZTtcbn1cblxuLy8gR2l2ZW4gc29tZSBkYXRhLCB0aGlzIHJldHVybnMgYW4gYXJyYXktbGlrZSB2aWV3IG9mIGl0OiBhbiBvYmplY3QgdGhhdFxuLy8gZXhwb3NlcyBhIGxlbmd0aCBwcm9wZXJ0eSBhbmQgYWxsb3dzIG51bWVyaWMgaW5kZXhpbmcuIE5vdGUgdGhhdCB1bmxpa2Vcbi8vIHNlbGVjdEFsbCwgdGhpcyBpc27igJl0IHdvcnJpZWQgYWJvdXQg4oCcbGl2ZeKAnSBjb2xsZWN0aW9ucyBiZWNhdXNlIHRoZSByZXN1bHRpbmdcbi8vIGFycmF5IHdpbGwgb25seSBiZSB1c2VkIGJyaWVmbHkgd2hpbGUgZGF0YSBpcyBiZWluZyBib3VuZC4gKEl0IGlzIHBvc3NpYmxlIHRvXG4vLyBjYXVzZSB0aGUgZGF0YSB0byBjaGFuZ2Ugd2hpbGUgaXRlcmF0aW5nIGJ5IHVzaW5nIGEga2V5IGZ1bmN0aW9uLCBidXQgcGxlYXNlXG4vLyBkb27igJl0OyB3ZeKAmWQgcmF0aGVyIGF2b2lkIGEgZ3JhdHVpdG91cyBjb3B5LilcbmZ1bmN0aW9uIGFycmF5bGlrZShkYXRhKSB7XG4gIHJldHVybiB0eXBlb2YgZGF0YSA9PT0gXCJvYmplY3RcIiAmJiBcImxlbmd0aFwiIGluIGRhdGFcbiAgICA/IGRhdGEgLy8gQXJyYXksIFR5cGVkQXJyYXksIE5vZGVMaXN0LCBhcnJheS1saWtlXG4gICAgOiBBcnJheS5mcm9tKGRhdGEpOyAvLyBNYXAsIFNldCwgaXRlcmFibGUsIHN0cmluZywgb3IgYW55dGhpbmcgZWxzZVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24odmFsdWUpIHtcbiAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGhcbiAgICAgID8gdGhpcy5wcm9wZXJ0eShcIl9fZGF0YV9fXCIsIHZhbHVlKVxuICAgICAgOiB0aGlzLm5vZGUoKS5fX2RhdGFfXztcbn1cbiIsImltcG9ydCBkZWZhdWx0VmlldyBmcm9tIFwiLi4vd2luZG93LmpzXCI7XG5cbmZ1bmN0aW9uIGRpc3BhdGNoRXZlbnQobm9kZSwgdHlwZSwgcGFyYW1zKSB7XG4gIHZhciB3aW5kb3cgPSBkZWZhdWx0Vmlldyhub2RlKSxcbiAgICAgIGV2ZW50ID0gd2luZG93LkN1c3RvbUV2ZW50O1xuXG4gIGlmICh0eXBlb2YgZXZlbnQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIGV2ZW50ID0gbmV3IGV2ZW50KHR5cGUsIHBhcmFtcyk7XG4gIH0gZWxzZSB7XG4gICAgZXZlbnQgPSB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRXZlbnQoXCJFdmVudFwiKTtcbiAgICBpZiAocGFyYW1zKSBldmVudC5pbml0RXZlbnQodHlwZSwgcGFyYW1zLmJ1YmJsZXMsIHBhcmFtcy5jYW5jZWxhYmxlKSwgZXZlbnQuZGV0YWlsID0gcGFyYW1zLmRldGFpbDtcbiAgICBlbHNlIGV2ZW50LmluaXRFdmVudCh0eXBlLCBmYWxzZSwgZmFsc2UpO1xuICB9XG5cbiAgbm9kZS5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbn1cblxuZnVuY3Rpb24gZGlzcGF0Y2hDb25zdGFudCh0eXBlLCBwYXJhbXMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBkaXNwYXRjaEV2ZW50KHRoaXMsIHR5cGUsIHBhcmFtcyk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGRpc3BhdGNoRnVuY3Rpb24odHlwZSwgcGFyYW1zKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gZGlzcGF0Y2hFdmVudCh0aGlzLCB0eXBlLCBwYXJhbXMuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHR5cGUsIHBhcmFtcykge1xuICByZXR1cm4gdGhpcy5lYWNoKCh0eXBlb2YgcGFyYW1zID09PSBcImZ1bmN0aW9uXCJcbiAgICAgID8gZGlzcGF0Y2hGdW5jdGlvblxuICAgICAgOiBkaXNwYXRjaENvbnN0YW50KSh0eXBlLCBwYXJhbXMpKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG5cbiAgZm9yICh2YXIgZ3JvdXBzID0gdGhpcy5fZ3JvdXBzLCBqID0gMCwgbSA9IGdyb3Vwcy5sZW5ndGg7IGogPCBtOyArK2opIHtcbiAgICBmb3IgKHZhciBncm91cCA9IGdyb3Vwc1tqXSwgaSA9IDAsIG4gPSBncm91cC5sZW5ndGgsIG5vZGU7IGkgPCBuOyArK2kpIHtcbiAgICAgIGlmIChub2RlID0gZ3JvdXBbaV0pIGNhbGxiYWNrLmNhbGwobm9kZSwgbm9kZS5fX2RhdGFfXywgaSwgZ3JvdXApO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gIHJldHVybiAhdGhpcy5ub2RlKCk7XG59XG4iLCJpbXBvcnQgc3BhcnNlIGZyb20gXCIuL3NwYXJzZS5qc1wiO1xuaW1wb3J0IHtTZWxlY3Rpb259IGZyb20gXCIuL2luZGV4LmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbmV3IFNlbGVjdGlvbih0aGlzLl9lbnRlciB8fCB0aGlzLl9ncm91cHMubWFwKHNwYXJzZSksIHRoaXMuX3BhcmVudHMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gRW50ZXJOb2RlKHBhcmVudCwgZGF0dW0pIHtcbiAgdGhpcy5vd25lckRvY3VtZW50ID0gcGFyZW50Lm93bmVyRG9jdW1lbnQ7XG4gIHRoaXMubmFtZXNwYWNlVVJJID0gcGFyZW50Lm5hbWVzcGFjZVVSSTtcbiAgdGhpcy5fbmV4dCA9IG51bGw7XG4gIHRoaXMuX3BhcmVudCA9IHBhcmVudDtcbiAgdGhpcy5fX2RhdGFfXyA9IGRhdHVtO1xufVxuXG5FbnRlck5vZGUucHJvdG90eXBlID0ge1xuICBjb25zdHJ1Y3RvcjogRW50ZXJOb2RlLFxuICBhcHBlbmRDaGlsZDogZnVuY3Rpb24oY2hpbGQpIHsgcmV0dXJuIHRoaXMuX3BhcmVudC5pbnNlcnRCZWZvcmUoY2hpbGQsIHRoaXMuX25leHQpOyB9LFxuICBpbnNlcnRCZWZvcmU6IGZ1bmN0aW9uKGNoaWxkLCBuZXh0KSB7IHJldHVybiB0aGlzLl9wYXJlbnQuaW5zZXJ0QmVmb3JlKGNoaWxkLCBuZXh0KTsgfSxcbiAgcXVlcnlTZWxlY3RvcjogZnVuY3Rpb24oc2VsZWN0b3IpIHsgcmV0dXJuIHRoaXMuX3BhcmVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTsgfSxcbiAgcXVlcnlTZWxlY3RvckFsbDogZnVuY3Rpb24oc2VsZWN0b3IpIHsgcmV0dXJuIHRoaXMuX3BhcmVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTsgfVxufTtcbiIsImltcG9ydCBzcGFyc2UgZnJvbSBcIi4vc3BhcnNlLmpzXCI7XG5pbXBvcnQge1NlbGVjdGlvbn0gZnJvbSBcIi4vaW5kZXguanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgU2VsZWN0aW9uKHRoaXMuX2V4aXQgfHwgdGhpcy5fZ3JvdXBzLm1hcChzcGFyc2UpLCB0aGlzLl9wYXJlbnRzKTtcbn1cbiIsImltcG9ydCB7U2VsZWN0aW9ufSBmcm9tIFwiLi9pbmRleC5qc1wiO1xuaW1wb3J0IG1hdGNoZXIgZnJvbSBcIi4uL21hdGNoZXIuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24obWF0Y2gpIHtcbiAgaWYgKHR5cGVvZiBtYXRjaCAhPT0gXCJmdW5jdGlvblwiKSBtYXRjaCA9IG1hdGNoZXIobWF0Y2gpO1xuXG4gIGZvciAodmFyIGdyb3VwcyA9IHRoaXMuX2dyb3VwcywgbSA9IGdyb3Vwcy5sZW5ndGgsIHN1Ymdyb3VwcyA9IG5ldyBBcnJheShtKSwgaiA9IDA7IGogPCBtOyArK2opIHtcbiAgICBmb3IgKHZhciBncm91cCA9IGdyb3Vwc1tqXSwgbiA9IGdyb3VwLmxlbmd0aCwgc3ViZ3JvdXAgPSBzdWJncm91cHNbal0gPSBbXSwgbm9kZSwgaSA9IDA7IGkgPCBuOyArK2kpIHtcbiAgICAgIGlmICgobm9kZSA9IGdyb3VwW2ldKSAmJiBtYXRjaC5jYWxsKG5vZGUsIG5vZGUuX19kYXRhX18sIGksIGdyb3VwKSkge1xuICAgICAgICBzdWJncm91cC5wdXNoKG5vZGUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBuZXcgU2VsZWN0aW9uKHN1Ymdyb3VwcywgdGhpcy5fcGFyZW50cyk7XG59XG4iLCJmdW5jdGlvbiBodG1sUmVtb3ZlKCkge1xuICB0aGlzLmlubmVySFRNTCA9IFwiXCI7XG59XG5cbmZ1bmN0aW9uIGh0bWxDb25zdGFudCh2YWx1ZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5pbm5lckhUTUwgPSB2YWx1ZTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gaHRtbEZ1bmN0aW9uKHZhbHVlKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgdiA9IHZhbHVlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgdGhpcy5pbm5lckhUTUwgPSB2ID09IG51bGwgPyBcIlwiIDogdjtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24odmFsdWUpIHtcbiAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGhcbiAgICAgID8gdGhpcy5lYWNoKHZhbHVlID09IG51bGxcbiAgICAgICAgICA/IGh0bWxSZW1vdmUgOiAodHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCJcbiAgICAgICAgICA/IGh0bWxGdW5jdGlvblxuICAgICAgICAgIDogaHRtbENvbnN0YW50KSh2YWx1ZSkpXG4gICAgICA6IHRoaXMubm9kZSgpLmlubmVySFRNTDtcbn1cbiIsImltcG9ydCBzZWxlY3Rpb25fc2VsZWN0IGZyb20gXCIuL3NlbGVjdC5qc1wiO1xuaW1wb3J0IHNlbGVjdGlvbl9zZWxlY3RBbGwgZnJvbSBcIi4vc2VsZWN0QWxsLmpzXCI7XG5pbXBvcnQgc2VsZWN0aW9uX3NlbGVjdENoaWxkIGZyb20gXCIuL3NlbGVjdENoaWxkLmpzXCI7XG5pbXBvcnQgc2VsZWN0aW9uX3NlbGVjdENoaWxkcmVuIGZyb20gXCIuL3NlbGVjdENoaWxkcmVuLmpzXCI7XG5pbXBvcnQgc2VsZWN0aW9uX2ZpbHRlciBmcm9tIFwiLi9maWx0ZXIuanNcIjtcbmltcG9ydCBzZWxlY3Rpb25fZGF0YSBmcm9tIFwiLi9kYXRhLmpzXCI7XG5pbXBvcnQgc2VsZWN0aW9uX2VudGVyIGZyb20gXCIuL2VudGVyLmpzXCI7XG5pbXBvcnQgc2VsZWN0aW9uX2V4aXQgZnJvbSBcIi4vZXhpdC5qc1wiO1xuaW1wb3J0IHNlbGVjdGlvbl9qb2luIGZyb20gXCIuL2pvaW4uanNcIjtcbmltcG9ydCBzZWxlY3Rpb25fbWVyZ2UgZnJvbSBcIi4vbWVyZ2UuanNcIjtcbmltcG9ydCBzZWxlY3Rpb25fb3JkZXIgZnJvbSBcIi4vb3JkZXIuanNcIjtcbmltcG9ydCBzZWxlY3Rpb25fc29ydCBmcm9tIFwiLi9zb3J0LmpzXCI7XG5pbXBvcnQgc2VsZWN0aW9uX2NhbGwgZnJvbSBcIi4vY2FsbC5qc1wiO1xuaW1wb3J0IHNlbGVjdGlvbl9ub2RlcyBmcm9tIFwiLi9ub2Rlcy5qc1wiO1xuaW1wb3J0IHNlbGVjdGlvbl9ub2RlIGZyb20gXCIuL25vZGUuanNcIjtcbmltcG9ydCBzZWxlY3Rpb25fc2l6ZSBmcm9tIFwiLi9zaXplLmpzXCI7XG5pbXBvcnQgc2VsZWN0aW9uX2VtcHR5IGZyb20gXCIuL2VtcHR5LmpzXCI7XG5pbXBvcnQgc2VsZWN0aW9uX2VhY2ggZnJvbSBcIi4vZWFjaC5qc1wiO1xuaW1wb3J0IHNlbGVjdGlvbl9hdHRyIGZyb20gXCIuL2F0dHIuanNcIjtcbmltcG9ydCBzZWxlY3Rpb25fc3R5bGUgZnJvbSBcIi4vc3R5bGUuanNcIjtcbmltcG9ydCBzZWxlY3Rpb25fcHJvcGVydHkgZnJvbSBcIi4vcHJvcGVydHkuanNcIjtcbmltcG9ydCBzZWxlY3Rpb25fY2xhc3NlZCBmcm9tIFwiLi9jbGFzc2VkLmpzXCI7XG5pbXBvcnQgc2VsZWN0aW9uX3RleHQgZnJvbSBcIi4vdGV4dC5qc1wiO1xuaW1wb3J0IHNlbGVjdGlvbl9odG1sIGZyb20gXCIuL2h0bWwuanNcIjtcbmltcG9ydCBzZWxlY3Rpb25fcmFpc2UgZnJvbSBcIi4vcmFpc2UuanNcIjtcbmltcG9ydCBzZWxlY3Rpb25fbG93ZXIgZnJvbSBcIi4vbG93ZXIuanNcIjtcbmltcG9ydCBzZWxlY3Rpb25fYXBwZW5kIGZyb20gXCIuL2FwcGVuZC5qc1wiO1xuaW1wb3J0IHNlbGVjdGlvbl9pbnNlcnQgZnJvbSBcIi4vaW5zZXJ0LmpzXCI7XG5pbXBvcnQgc2VsZWN0aW9uX3JlbW92ZSBmcm9tIFwiLi9yZW1vdmUuanNcIjtcbmltcG9ydCBzZWxlY3Rpb25fY2xvbmUgZnJvbSBcIi4vY2xvbmUuanNcIjtcbmltcG9ydCBzZWxlY3Rpb25fZGF0dW0gZnJvbSBcIi4vZGF0dW0uanNcIjtcbmltcG9ydCBzZWxlY3Rpb25fb24gZnJvbSBcIi4vb24uanNcIjtcbmltcG9ydCBzZWxlY3Rpb25fZGlzcGF0Y2ggZnJvbSBcIi4vZGlzcGF0Y2guanNcIjtcbmltcG9ydCBzZWxlY3Rpb25faXRlcmF0b3IgZnJvbSBcIi4vaXRlcmF0b3IuanNcIjtcblxuZXhwb3J0IHZhciByb290ID0gW251bGxdO1xuXG5leHBvcnQgZnVuY3Rpb24gU2VsZWN0aW9uKGdyb3VwcywgcGFyZW50cykge1xuICB0aGlzLl9ncm91cHMgPSBncm91cHM7XG4gIHRoaXMuX3BhcmVudHMgPSBwYXJlbnRzO1xufVxuXG5mdW5jdGlvbiBzZWxlY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgU2VsZWN0aW9uKFtbZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50XV0sIHJvb3QpO1xufVxuXG5mdW5jdGlvbiBzZWxlY3Rpb25fc2VsZWN0aW9uKCkge1xuICByZXR1cm4gdGhpcztcbn1cblxuU2VsZWN0aW9uLnByb3RvdHlwZSA9IHNlbGVjdGlvbi5wcm90b3R5cGUgPSB7XG4gIGNvbnN0cnVjdG9yOiBTZWxlY3Rpb24sXG4gIHNlbGVjdDogc2VsZWN0aW9uX3NlbGVjdCxcbiAgc2VsZWN0QWxsOiBzZWxlY3Rpb25fc2VsZWN0QWxsLFxuICBzZWxlY3RDaGlsZDogc2VsZWN0aW9uX3NlbGVjdENoaWxkLFxuICBzZWxlY3RDaGlsZHJlbjogc2VsZWN0aW9uX3NlbGVjdENoaWxkcmVuLFxuICBmaWx0ZXI6IHNlbGVjdGlvbl9maWx0ZXIsXG4gIGRhdGE6IHNlbGVjdGlvbl9kYXRhLFxuICBlbnRlcjogc2VsZWN0aW9uX2VudGVyLFxuICBleGl0OiBzZWxlY3Rpb25fZXhpdCxcbiAgam9pbjogc2VsZWN0aW9uX2pvaW4sXG4gIG1lcmdlOiBzZWxlY3Rpb25fbWVyZ2UsXG4gIHNlbGVjdGlvbjogc2VsZWN0aW9uX3NlbGVjdGlvbixcbiAgb3JkZXI6IHNlbGVjdGlvbl9vcmRlcixcbiAgc29ydDogc2VsZWN0aW9uX3NvcnQsXG4gIGNhbGw6IHNlbGVjdGlvbl9jYWxsLFxuICBub2Rlczogc2VsZWN0aW9uX25vZGVzLFxuICBub2RlOiBzZWxlY3Rpb25fbm9kZSxcbiAgc2l6ZTogc2VsZWN0aW9uX3NpemUsXG4gIGVtcHR5OiBzZWxlY3Rpb25fZW1wdHksXG4gIGVhY2g6IHNlbGVjdGlvbl9lYWNoLFxuICBhdHRyOiBzZWxlY3Rpb25fYXR0cixcbiAgc3R5bGU6IHNlbGVjdGlvbl9zdHlsZSxcbiAgcHJvcGVydHk6IHNlbGVjdGlvbl9wcm9wZXJ0eSxcbiAgY2xhc3NlZDogc2VsZWN0aW9uX2NsYXNzZWQsXG4gIHRleHQ6IHNlbGVjdGlvbl90ZXh0LFxuICBodG1sOiBzZWxlY3Rpb25faHRtbCxcbiAgcmFpc2U6IHNlbGVjdGlvbl9yYWlzZSxcbiAgbG93ZXI6IHNlbGVjdGlvbl9sb3dlcixcbiAgYXBwZW5kOiBzZWxlY3Rpb25fYXBwZW5kLFxuICBpbnNlcnQ6IHNlbGVjdGlvbl9pbnNlcnQsXG4gIHJlbW92ZTogc2VsZWN0aW9uX3JlbW92ZSxcbiAgY2xvbmU6IHNlbGVjdGlvbl9jbG9uZSxcbiAgZGF0dW06IHNlbGVjdGlvbl9kYXR1bSxcbiAgb246IHNlbGVjdGlvbl9vbixcbiAgZGlzcGF0Y2g6IHNlbGVjdGlvbl9kaXNwYXRjaCxcbiAgW1N5bWJvbC5pdGVyYXRvcl06IHNlbGVjdGlvbl9pdGVyYXRvclxufTtcblxuZXhwb3J0IGRlZmF1bHQgc2VsZWN0aW9uO1xuIiwiaW1wb3J0IGNyZWF0b3IgZnJvbSBcIi4uL2NyZWF0b3IuanNcIjtcbmltcG9ydCBzZWxlY3RvciBmcm9tIFwiLi4vc2VsZWN0b3IuanNcIjtcblxuZnVuY3Rpb24gY29uc3RhbnROdWxsKCkge1xuICByZXR1cm4gbnVsbDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24obmFtZSwgYmVmb3JlKSB7XG4gIHZhciBjcmVhdGUgPSB0eXBlb2YgbmFtZSA9PT0gXCJmdW5jdGlvblwiID8gbmFtZSA6IGNyZWF0b3IobmFtZSksXG4gICAgICBzZWxlY3QgPSBiZWZvcmUgPT0gbnVsbCA/IGNvbnN0YW50TnVsbCA6IHR5cGVvZiBiZWZvcmUgPT09IFwiZnVuY3Rpb25cIiA/IGJlZm9yZSA6IHNlbGVjdG9yKGJlZm9yZSk7XG4gIHJldHVybiB0aGlzLnNlbGVjdChmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5pbnNlcnRCZWZvcmUoY3JlYXRlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyksIHNlbGVjdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IG51bGwpO1xuICB9KTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKigpIHtcbiAgZm9yICh2YXIgZ3JvdXBzID0gdGhpcy5fZ3JvdXBzLCBqID0gMCwgbSA9IGdyb3Vwcy5sZW5ndGg7IGogPCBtOyArK2opIHtcbiAgICBmb3IgKHZhciBncm91cCA9IGdyb3Vwc1tqXSwgaSA9IDAsIG4gPSBncm91cC5sZW5ndGgsIG5vZGU7IGkgPCBuOyArK2kpIHtcbiAgICAgIGlmIChub2RlID0gZ3JvdXBbaV0pIHlpZWxkIG5vZGU7XG4gICAgfVxuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihvbmVudGVyLCBvbnVwZGF0ZSwgb25leGl0KSB7XG4gIHZhciBlbnRlciA9IHRoaXMuZW50ZXIoKSwgdXBkYXRlID0gdGhpcywgZXhpdCA9IHRoaXMuZXhpdCgpO1xuICBpZiAodHlwZW9mIG9uZW50ZXIgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIGVudGVyID0gb25lbnRlcihlbnRlcik7XG4gICAgaWYgKGVudGVyKSBlbnRlciA9IGVudGVyLnNlbGVjdGlvbigpO1xuICB9IGVsc2Uge1xuICAgIGVudGVyID0gZW50ZXIuYXBwZW5kKG9uZW50ZXIgKyBcIlwiKTtcbiAgfVxuICBpZiAob251cGRhdGUgIT0gbnVsbCkge1xuICAgIHVwZGF0ZSA9IG9udXBkYXRlKHVwZGF0ZSk7XG4gICAgaWYgKHVwZGF0ZSkgdXBkYXRlID0gdXBkYXRlLnNlbGVjdGlvbigpO1xuICB9XG4gIGlmIChvbmV4aXQgPT0gbnVsbCkgZXhpdC5yZW1vdmUoKTsgZWxzZSBvbmV4aXQoZXhpdCk7XG4gIHJldHVybiBlbnRlciAmJiB1cGRhdGUgPyBlbnRlci5tZXJnZSh1cGRhdGUpLm9yZGVyKCkgOiB1cGRhdGU7XG59XG4iLCJmdW5jdGlvbiBsb3dlcigpIHtcbiAgaWYgKHRoaXMucHJldmlvdXNTaWJsaW5nKSB0aGlzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHRoaXMsIHRoaXMucGFyZW50Tm9kZS5maXJzdENoaWxkKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLmVhY2gobG93ZXIpO1xufVxuIiwiaW1wb3J0IHtTZWxlY3Rpb259IGZyb20gXCIuL2luZGV4LmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGNvbnRleHQpIHtcbiAgdmFyIHNlbGVjdGlvbiA9IGNvbnRleHQuc2VsZWN0aW9uID8gY29udGV4dC5zZWxlY3Rpb24oKSA6IGNvbnRleHQ7XG5cbiAgZm9yICh2YXIgZ3JvdXBzMCA9IHRoaXMuX2dyb3VwcywgZ3JvdXBzMSA9IHNlbGVjdGlvbi5fZ3JvdXBzLCBtMCA9IGdyb3VwczAubGVuZ3RoLCBtMSA9IGdyb3VwczEubGVuZ3RoLCBtID0gTWF0aC5taW4obTAsIG0xKSwgbWVyZ2VzID0gbmV3IEFycmF5KG0wKSwgaiA9IDA7IGogPCBtOyArK2opIHtcbiAgICBmb3IgKHZhciBncm91cDAgPSBncm91cHMwW2pdLCBncm91cDEgPSBncm91cHMxW2pdLCBuID0gZ3JvdXAwLmxlbmd0aCwgbWVyZ2UgPSBtZXJnZXNbal0gPSBuZXcgQXJyYXkobiksIG5vZGUsIGkgPSAwOyBpIDwgbjsgKytpKSB7XG4gICAgICBpZiAobm9kZSA9IGdyb3VwMFtpXSB8fCBncm91cDFbaV0pIHtcbiAgICAgICAgbWVyZ2VbaV0gPSBub2RlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZvciAoOyBqIDwgbTA7ICsraikge1xuICAgIG1lcmdlc1tqXSA9IGdyb3VwczBbal07XG4gIH1cblxuICByZXR1cm4gbmV3IFNlbGVjdGlvbihtZXJnZXMsIHRoaXMuX3BhcmVudHMpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG5cbiAgZm9yICh2YXIgZ3JvdXBzID0gdGhpcy5fZ3JvdXBzLCBqID0gMCwgbSA9IGdyb3Vwcy5sZW5ndGg7IGogPCBtOyArK2opIHtcbiAgICBmb3IgKHZhciBncm91cCA9IGdyb3Vwc1tqXSwgaSA9IDAsIG4gPSBncm91cC5sZW5ndGg7IGkgPCBuOyArK2kpIHtcbiAgICAgIHZhciBub2RlID0gZ3JvdXBbaV07XG4gICAgICBpZiAobm9kZSkgcmV0dXJuIG5vZGU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIEFycmF5LmZyb20odGhpcyk7XG59XG4iLCJmdW5jdGlvbiBjb250ZXh0TGlzdGVuZXIobGlzdGVuZXIpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgbGlzdGVuZXIuY2FsbCh0aGlzLCBldmVudCwgdGhpcy5fX2RhdGFfXyk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHBhcnNlVHlwZW5hbWVzKHR5cGVuYW1lcykge1xuICByZXR1cm4gdHlwZW5hbWVzLnRyaW0oKS5zcGxpdCgvXnxcXHMrLykubWFwKGZ1bmN0aW9uKHQpIHtcbiAgICB2YXIgbmFtZSA9IFwiXCIsIGkgPSB0LmluZGV4T2YoXCIuXCIpO1xuICAgIGlmIChpID49IDApIG5hbWUgPSB0LnNsaWNlKGkgKyAxKSwgdCA9IHQuc2xpY2UoMCwgaSk7XG4gICAgcmV0dXJuIHt0eXBlOiB0LCBuYW1lOiBuYW1lfTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIG9uUmVtb3ZlKHR5cGVuYW1lKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgb24gPSB0aGlzLl9fb247XG4gICAgaWYgKCFvbikgcmV0dXJuO1xuICAgIGZvciAodmFyIGogPSAwLCBpID0gLTEsIG0gPSBvbi5sZW5ndGgsIG87IGogPCBtOyArK2opIHtcbiAgICAgIGlmIChvID0gb25bal0sICghdHlwZW5hbWUudHlwZSB8fCBvLnR5cGUgPT09IHR5cGVuYW1lLnR5cGUpICYmIG8ubmFtZSA9PT0gdHlwZW5hbWUubmFtZSkge1xuICAgICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoby50eXBlLCBvLmxpc3RlbmVyLCBvLm9wdGlvbnMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb25bKytpXSA9IG87XG4gICAgICB9XG4gICAgfVxuICAgIGlmICgrK2kpIG9uLmxlbmd0aCA9IGk7XG4gICAgZWxzZSBkZWxldGUgdGhpcy5fX29uO1xuICB9O1xufVxuXG5mdW5jdGlvbiBvbkFkZCh0eXBlbmFtZSwgdmFsdWUsIG9wdGlvbnMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciBvbiA9IHRoaXMuX19vbiwgbywgbGlzdGVuZXIgPSBjb250ZXh0TGlzdGVuZXIodmFsdWUpO1xuICAgIGlmIChvbikgZm9yICh2YXIgaiA9IDAsIG0gPSBvbi5sZW5ndGg7IGogPCBtOyArK2opIHtcbiAgICAgIGlmICgobyA9IG9uW2pdKS50eXBlID09PSB0eXBlbmFtZS50eXBlICYmIG8ubmFtZSA9PT0gdHlwZW5hbWUubmFtZSkge1xuICAgICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoby50eXBlLCBvLmxpc3RlbmVyLCBvLm9wdGlvbnMpO1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoby50eXBlLCBvLmxpc3RlbmVyID0gbGlzdGVuZXIsIG8ub3B0aW9ucyA9IG9wdGlvbnMpO1xuICAgICAgICBvLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKHR5cGVuYW1lLnR5cGUsIGxpc3RlbmVyLCBvcHRpb25zKTtcbiAgICBvID0ge3R5cGU6IHR5cGVuYW1lLnR5cGUsIG5hbWU6IHR5cGVuYW1lLm5hbWUsIHZhbHVlOiB2YWx1ZSwgbGlzdGVuZXI6IGxpc3RlbmVyLCBvcHRpb25zOiBvcHRpb25zfTtcbiAgICBpZiAoIW9uKSB0aGlzLl9fb24gPSBbb107XG4gICAgZWxzZSBvbi5wdXNoKG8pO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbih0eXBlbmFtZSwgdmFsdWUsIG9wdGlvbnMpIHtcbiAgdmFyIHR5cGVuYW1lcyA9IHBhcnNlVHlwZW5hbWVzKHR5cGVuYW1lICsgXCJcIiksIGksIG4gPSB0eXBlbmFtZXMubGVuZ3RoLCB0O1xuXG4gIGlmIChhcmd1bWVudHMubGVuZ3RoIDwgMikge1xuICAgIHZhciBvbiA9IHRoaXMubm9kZSgpLl9fb247XG4gICAgaWYgKG9uKSBmb3IgKHZhciBqID0gMCwgbSA9IG9uLmxlbmd0aCwgbzsgaiA8IG07ICsraikge1xuICAgICAgZm9yIChpID0gMCwgbyA9IG9uW2pdOyBpIDwgbjsgKytpKSB7XG4gICAgICAgIGlmICgodCA9IHR5cGVuYW1lc1tpXSkudHlwZSA9PT0gby50eXBlICYmIHQubmFtZSA9PT0gby5uYW1lKSB7XG4gICAgICAgICAgcmV0dXJuIG8udmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgb24gPSB2YWx1ZSA/IG9uQWRkIDogb25SZW1vdmU7XG4gIGZvciAoaSA9IDA7IGkgPCBuOyArK2kpIHRoaXMuZWFjaChvbih0eXBlbmFtZXNbaV0sIHZhbHVlLCBvcHRpb25zKSk7XG4gIHJldHVybiB0aGlzO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG5cbiAgZm9yICh2YXIgZ3JvdXBzID0gdGhpcy5fZ3JvdXBzLCBqID0gLTEsIG0gPSBncm91cHMubGVuZ3RoOyArK2ogPCBtOykge1xuICAgIGZvciAodmFyIGdyb3VwID0gZ3JvdXBzW2pdLCBpID0gZ3JvdXAubGVuZ3RoIC0gMSwgbmV4dCA9IGdyb3VwW2ldLCBub2RlOyAtLWkgPj0gMDspIHtcbiAgICAgIGlmIChub2RlID0gZ3JvdXBbaV0pIHtcbiAgICAgICAgaWYgKG5leHQgJiYgbm9kZS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihuZXh0KSBeIDQpIG5leHQucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobm9kZSwgbmV4dCk7XG4gICAgICAgIG5leHQgPSBub2RlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufVxuIiwiZnVuY3Rpb24gcHJvcGVydHlSZW1vdmUobmFtZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgZGVsZXRlIHRoaXNbbmFtZV07XG4gIH07XG59XG5cbmZ1bmN0aW9uIHByb3BlcnR5Q29uc3RhbnQobmFtZSwgdmFsdWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHRoaXNbbmFtZV0gPSB2YWx1ZTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gcHJvcGVydHlGdW5jdGlvbihuYW1lLCB2YWx1ZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHYgPSB2YWx1ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIGlmICh2ID09IG51bGwpIGRlbGV0ZSB0aGlzW25hbWVdO1xuICAgIGVsc2UgdGhpc1tuYW1lXSA9IHY7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG5hbWUsIHZhbHVlKSB7XG4gIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID4gMVxuICAgICAgPyB0aGlzLmVhY2goKHZhbHVlID09IG51bGxcbiAgICAgICAgICA/IHByb3BlcnR5UmVtb3ZlIDogdHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCJcbiAgICAgICAgICA/IHByb3BlcnR5RnVuY3Rpb25cbiAgICAgICAgICA6IHByb3BlcnR5Q29uc3RhbnQpKG5hbWUsIHZhbHVlKSlcbiAgICAgIDogdGhpcy5ub2RlKClbbmFtZV07XG59XG4iLCJmdW5jdGlvbiByYWlzZSgpIHtcbiAgaWYgKHRoaXMubmV4dFNpYmxpbmcpIHRoaXMucGFyZW50Tm9kZS5hcHBlbmRDaGlsZCh0aGlzKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLmVhY2gocmFpc2UpO1xufVxuIiwiZnVuY3Rpb24gcmVtb3ZlKCkge1xuICB2YXIgcGFyZW50ID0gdGhpcy5wYXJlbnROb2RlO1xuICBpZiAocGFyZW50KSBwYXJlbnQucmVtb3ZlQ2hpbGQodGhpcyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5lYWNoKHJlbW92ZSk7XG59XG4iLCJpbXBvcnQge1NlbGVjdGlvbn0gZnJvbSBcIi4vaW5kZXguanNcIjtcbmltcG9ydCBzZWxlY3RvciBmcm9tIFwiLi4vc2VsZWN0b3IuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oc2VsZWN0KSB7XG4gIGlmICh0eXBlb2Ygc2VsZWN0ICE9PSBcImZ1bmN0aW9uXCIpIHNlbGVjdCA9IHNlbGVjdG9yKHNlbGVjdCk7XG5cbiAgZm9yICh2YXIgZ3JvdXBzID0gdGhpcy5fZ3JvdXBzLCBtID0gZ3JvdXBzLmxlbmd0aCwgc3ViZ3JvdXBzID0gbmV3IEFycmF5KG0pLCBqID0gMDsgaiA8IG07ICsraikge1xuICAgIGZvciAodmFyIGdyb3VwID0gZ3JvdXBzW2pdLCBuID0gZ3JvdXAubGVuZ3RoLCBzdWJncm91cCA9IHN1Ymdyb3Vwc1tqXSA9IG5ldyBBcnJheShuKSwgbm9kZSwgc3Vibm9kZSwgaSA9IDA7IGkgPCBuOyArK2kpIHtcbiAgICAgIGlmICgobm9kZSA9IGdyb3VwW2ldKSAmJiAoc3Vibm9kZSA9IHNlbGVjdC5jYWxsKG5vZGUsIG5vZGUuX19kYXRhX18sIGksIGdyb3VwKSkpIHtcbiAgICAgICAgaWYgKFwiX19kYXRhX19cIiBpbiBub2RlKSBzdWJub2RlLl9fZGF0YV9fID0gbm9kZS5fX2RhdGFfXztcbiAgICAgICAgc3ViZ3JvdXBbaV0gPSBzdWJub2RlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBuZXcgU2VsZWN0aW9uKHN1Ymdyb3VwcywgdGhpcy5fcGFyZW50cyk7XG59XG4iLCJpbXBvcnQge1NlbGVjdGlvbn0gZnJvbSBcIi4vaW5kZXguanNcIjtcbmltcG9ydCBhcnJheSBmcm9tIFwiLi4vYXJyYXkuanNcIjtcbmltcG9ydCBzZWxlY3RvckFsbCBmcm9tIFwiLi4vc2VsZWN0b3JBbGwuanNcIjtcblxuZnVuY3Rpb24gYXJyYXlBbGwoc2VsZWN0KSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gYXJyYXkoc2VsZWN0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihzZWxlY3QpIHtcbiAgaWYgKHR5cGVvZiBzZWxlY3QgPT09IFwiZnVuY3Rpb25cIikgc2VsZWN0ID0gYXJyYXlBbGwoc2VsZWN0KTtcbiAgZWxzZSBzZWxlY3QgPSBzZWxlY3RvckFsbChzZWxlY3QpO1xuXG4gIGZvciAodmFyIGdyb3VwcyA9IHRoaXMuX2dyb3VwcywgbSA9IGdyb3Vwcy5sZW5ndGgsIHN1Ymdyb3VwcyA9IFtdLCBwYXJlbnRzID0gW10sIGogPSAwOyBqIDwgbTsgKytqKSB7XG4gICAgZm9yICh2YXIgZ3JvdXAgPSBncm91cHNbal0sIG4gPSBncm91cC5sZW5ndGgsIG5vZGUsIGkgPSAwOyBpIDwgbjsgKytpKSB7XG4gICAgICBpZiAobm9kZSA9IGdyb3VwW2ldKSB7XG4gICAgICAgIHN1Ymdyb3Vwcy5wdXNoKHNlbGVjdC5jYWxsKG5vZGUsIG5vZGUuX19kYXRhX18sIGksIGdyb3VwKSk7XG4gICAgICAgIHBhcmVudHMucHVzaChub2RlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbmV3IFNlbGVjdGlvbihzdWJncm91cHMsIHBhcmVudHMpO1xufVxuIiwiaW1wb3J0IHtjaGlsZE1hdGNoZXJ9IGZyb20gXCIuLi9tYXRjaGVyLmpzXCI7XG5cbnZhciBmaW5kID0gQXJyYXkucHJvdG90eXBlLmZpbmQ7XG5cbmZ1bmN0aW9uIGNoaWxkRmluZChtYXRjaCkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGZpbmQuY2FsbCh0aGlzLmNoaWxkcmVuLCBtYXRjaCk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGNoaWxkRmlyc3QoKSB7XG4gIHJldHVybiB0aGlzLmZpcnN0RWxlbWVudENoaWxkO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihtYXRjaCkge1xuICByZXR1cm4gdGhpcy5zZWxlY3QobWF0Y2ggPT0gbnVsbCA/IGNoaWxkRmlyc3RcbiAgICAgIDogY2hpbGRGaW5kKHR5cGVvZiBtYXRjaCA9PT0gXCJmdW5jdGlvblwiID8gbWF0Y2ggOiBjaGlsZE1hdGNoZXIobWF0Y2gpKSk7XG59XG4iLCJpbXBvcnQge2NoaWxkTWF0Y2hlcn0gZnJvbSBcIi4uL21hdGNoZXIuanNcIjtcblxudmFyIGZpbHRlciA9IEFycmF5LnByb3RvdHlwZS5maWx0ZXI7XG5cbmZ1bmN0aW9uIGNoaWxkcmVuKCkge1xuICByZXR1cm4gQXJyYXkuZnJvbSh0aGlzLmNoaWxkcmVuKTtcbn1cblxuZnVuY3Rpb24gY2hpbGRyZW5GaWx0ZXIobWF0Y2gpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBmaWx0ZXIuY2FsbCh0aGlzLmNoaWxkcmVuLCBtYXRjaCk7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG1hdGNoKSB7XG4gIHJldHVybiB0aGlzLnNlbGVjdEFsbChtYXRjaCA9PSBudWxsID8gY2hpbGRyZW5cbiAgICAgIDogY2hpbGRyZW5GaWx0ZXIodHlwZW9mIG1hdGNoID09PSBcImZ1bmN0aW9uXCIgPyBtYXRjaCA6IGNoaWxkTWF0Y2hlcihtYXRjaCkpKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICBsZXQgc2l6ZSA9IDA7XG4gIGZvciAoY29uc3Qgbm9kZSBvZiB0aGlzKSArK3NpemU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgcmV0dXJuIHNpemU7XG59XG4iLCJpbXBvcnQge1NlbGVjdGlvbn0gZnJvbSBcIi4vaW5kZXguanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oY29tcGFyZSkge1xuICBpZiAoIWNvbXBhcmUpIGNvbXBhcmUgPSBhc2NlbmRpbmc7XG5cbiAgZnVuY3Rpb24gY29tcGFyZU5vZGUoYSwgYikge1xuICAgIHJldHVybiBhICYmIGIgPyBjb21wYXJlKGEuX19kYXRhX18sIGIuX19kYXRhX18pIDogIWEgLSAhYjtcbiAgfVxuXG4gIGZvciAodmFyIGdyb3VwcyA9IHRoaXMuX2dyb3VwcywgbSA9IGdyb3Vwcy5sZW5ndGgsIHNvcnRncm91cHMgPSBuZXcgQXJyYXkobSksIGogPSAwOyBqIDwgbTsgKytqKSB7XG4gICAgZm9yICh2YXIgZ3JvdXAgPSBncm91cHNbal0sIG4gPSBncm91cC5sZW5ndGgsIHNvcnRncm91cCA9IHNvcnRncm91cHNbal0gPSBuZXcgQXJyYXkobiksIG5vZGUsIGkgPSAwOyBpIDwgbjsgKytpKSB7XG4gICAgICBpZiAobm9kZSA9IGdyb3VwW2ldKSB7XG4gICAgICAgIHNvcnRncm91cFtpXSA9IG5vZGU7XG4gICAgICB9XG4gICAgfVxuICAgIHNvcnRncm91cC5zb3J0KGNvbXBhcmVOb2RlKTtcbiAgfVxuXG4gIHJldHVybiBuZXcgU2VsZWN0aW9uKHNvcnRncm91cHMsIHRoaXMuX3BhcmVudHMpLm9yZGVyKCk7XG59XG5cbmZ1bmN0aW9uIGFzY2VuZGluZyhhLCBiKSB7XG4gIHJldHVybiBhIDwgYiA/IC0xIDogYSA+IGIgPyAxIDogYSA+PSBiID8gMCA6IE5hTjtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHVwZGF0ZSkge1xuICByZXR1cm4gbmV3IEFycmF5KHVwZGF0ZS5sZW5ndGgpO1xufVxuIiwiaW1wb3J0IGRlZmF1bHRWaWV3IGZyb20gXCIuLi93aW5kb3cuanNcIjtcblxuZnVuY3Rpb24gc3R5bGVSZW1vdmUobmFtZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5zdHlsZS5yZW1vdmVQcm9wZXJ0eShuYW1lKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gc3R5bGVDb25zdGFudChuYW1lLCB2YWx1ZSwgcHJpb3JpdHkpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuc3R5bGUuc2V0UHJvcGVydHkobmFtZSwgdmFsdWUsIHByaW9yaXR5KTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gc3R5bGVGdW5jdGlvbihuYW1lLCB2YWx1ZSwgcHJpb3JpdHkpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciB2ID0gdmFsdWUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICBpZiAodiA9PSBudWxsKSB0aGlzLnN0eWxlLnJlbW92ZVByb3BlcnR5KG5hbWUpO1xuICAgIGVsc2UgdGhpcy5zdHlsZS5zZXRQcm9wZXJ0eShuYW1lLCB2LCBwcmlvcml0eSk7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG5hbWUsIHZhbHVlLCBwcmlvcml0eSkge1xuICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA+IDFcbiAgICAgID8gdGhpcy5lYWNoKCh2YWx1ZSA9PSBudWxsXG4gICAgICAgICAgICA/IHN0eWxlUmVtb3ZlIDogdHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCJcbiAgICAgICAgICAgID8gc3R5bGVGdW5jdGlvblxuICAgICAgICAgICAgOiBzdHlsZUNvbnN0YW50KShuYW1lLCB2YWx1ZSwgcHJpb3JpdHkgPT0gbnVsbCA/IFwiXCIgOiBwcmlvcml0eSkpXG4gICAgICA6IHN0eWxlVmFsdWUodGhpcy5ub2RlKCksIG5hbWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3R5bGVWYWx1ZShub2RlLCBuYW1lKSB7XG4gIHJldHVybiBub2RlLnN0eWxlLmdldFByb3BlcnR5VmFsdWUobmFtZSlcbiAgICAgIHx8IGRlZmF1bHRWaWV3KG5vZGUpLmdldENvbXB1dGVkU3R5bGUobm9kZSwgbnVsbCkuZ2V0UHJvcGVydHlWYWx1ZShuYW1lKTtcbn1cbiIsImZ1bmN0aW9uIHRleHRSZW1vdmUoKSB7XG4gIHRoaXMudGV4dENvbnRlbnQgPSBcIlwiO1xufVxuXG5mdW5jdGlvbiB0ZXh0Q29uc3RhbnQodmFsdWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHRoaXMudGV4dENvbnRlbnQgPSB2YWx1ZTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gdGV4dEZ1bmN0aW9uKHZhbHVlKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgdiA9IHZhbHVlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgdGhpcy50ZXh0Q29udGVudCA9IHYgPT0gbnVsbCA/IFwiXCIgOiB2O1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aFxuICAgICAgPyB0aGlzLmVhY2godmFsdWUgPT0gbnVsbFxuICAgICAgICAgID8gdGV4dFJlbW92ZSA6ICh0eXBlb2YgdmFsdWUgPT09IFwiZnVuY3Rpb25cIlxuICAgICAgICAgID8gdGV4dEZ1bmN0aW9uXG4gICAgICAgICAgOiB0ZXh0Q29uc3RhbnQpKHZhbHVlKSlcbiAgICAgIDogdGhpcy5ub2RlKCkudGV4dENvbnRlbnQ7XG59XG4iLCJmdW5jdGlvbiBub25lKCkge31cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oc2VsZWN0b3IpIHtcbiAgcmV0dXJuIHNlbGVjdG9yID09IG51bGwgPyBub25lIDogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gIH07XG59XG4iLCJmdW5jdGlvbiBlbXB0eSgpIHtcbiAgcmV0dXJuIFtdO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihzZWxlY3Rvcikge1xuICByZXR1cm4gc2VsZWN0b3IgPT0gbnVsbCA/IGVtcHR5IDogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XG4gIH07XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihldmVudCkge1xuICBsZXQgc291cmNlRXZlbnQ7XG4gIHdoaWxlIChzb3VyY2VFdmVudCA9IGV2ZW50LnNvdXJjZUV2ZW50KSBldmVudCA9IHNvdXJjZUV2ZW50O1xuICByZXR1cm4gZXZlbnQ7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihub2RlKSB7XG4gIHJldHVybiAobm9kZS5vd25lckRvY3VtZW50ICYmIG5vZGUub3duZXJEb2N1bWVudC5kZWZhdWx0VmlldykgLy8gbm9kZSBpcyBhIE5vZGVcbiAgICAgIHx8IChub2RlLmRvY3VtZW50ICYmIG5vZGUpIC8vIG5vZGUgaXMgYSBXaW5kb3dcbiAgICAgIHx8IG5vZGUuZGVmYXVsdFZpZXc7IC8vIG5vZGUgaXMgYSBEb2N1bWVudFxufVxuIiwiaW1wb3J0IHtwYXRofSBmcm9tIFwiZDMtcGF0aFwiO1xuaW1wb3J0IGNvbnN0YW50IGZyb20gXCIuL2NvbnN0YW50LmpzXCI7XG5pbXBvcnQge2FicywgYWNvcywgYXNpbiwgYXRhbjIsIGNvcywgZXBzaWxvbiwgaGFsZlBpLCBtYXgsIG1pbiwgcGksIHNpbiwgc3FydCwgdGF1fSBmcm9tIFwiLi9tYXRoLmpzXCI7XG5cbmZ1bmN0aW9uIGFyY0lubmVyUmFkaXVzKGQpIHtcbiAgcmV0dXJuIGQuaW5uZXJSYWRpdXM7XG59XG5cbmZ1bmN0aW9uIGFyY091dGVyUmFkaXVzKGQpIHtcbiAgcmV0dXJuIGQub3V0ZXJSYWRpdXM7XG59XG5cbmZ1bmN0aW9uIGFyY1N0YXJ0QW5nbGUoZCkge1xuICByZXR1cm4gZC5zdGFydEFuZ2xlO1xufVxuXG5mdW5jdGlvbiBhcmNFbmRBbmdsZShkKSB7XG4gIHJldHVybiBkLmVuZEFuZ2xlO1xufVxuXG5mdW5jdGlvbiBhcmNQYWRBbmdsZShkKSB7XG4gIHJldHVybiBkICYmIGQucGFkQW5nbGU7IC8vIE5vdGU6IG9wdGlvbmFsIVxufVxuXG5mdW5jdGlvbiBpbnRlcnNlY3QoeDAsIHkwLCB4MSwgeTEsIHgyLCB5MiwgeDMsIHkzKSB7XG4gIHZhciB4MTAgPSB4MSAtIHgwLCB5MTAgPSB5MSAtIHkwLFxuICAgICAgeDMyID0geDMgLSB4MiwgeTMyID0geTMgLSB5MixcbiAgICAgIHQgPSB5MzIgKiB4MTAgLSB4MzIgKiB5MTA7XG4gIGlmICh0ICogdCA8IGVwc2lsb24pIHJldHVybjtcbiAgdCA9ICh4MzIgKiAoeTAgLSB5MikgLSB5MzIgKiAoeDAgLSB4MikpIC8gdDtcbiAgcmV0dXJuIFt4MCArIHQgKiB4MTAsIHkwICsgdCAqIHkxMF07XG59XG5cbi8vIENvbXB1dGUgcGVycGVuZGljdWxhciBvZmZzZXQgbGluZSBvZiBsZW5ndGggcmMuXG4vLyBodHRwOi8vbWF0aHdvcmxkLndvbGZyYW0uY29tL0NpcmNsZS1MaW5lSW50ZXJzZWN0aW9uLmh0bWxcbmZ1bmN0aW9uIGNvcm5lclRhbmdlbnRzKHgwLCB5MCwgeDEsIHkxLCByMSwgcmMsIGN3KSB7XG4gIHZhciB4MDEgPSB4MCAtIHgxLFxuICAgICAgeTAxID0geTAgLSB5MSxcbiAgICAgIGxvID0gKGN3ID8gcmMgOiAtcmMpIC8gc3FydCh4MDEgKiB4MDEgKyB5MDEgKiB5MDEpLFxuICAgICAgb3ggPSBsbyAqIHkwMSxcbiAgICAgIG95ID0gLWxvICogeDAxLFxuICAgICAgeDExID0geDAgKyBveCxcbiAgICAgIHkxMSA9IHkwICsgb3ksXG4gICAgICB4MTAgPSB4MSArIG94LFxuICAgICAgeTEwID0geTEgKyBveSxcbiAgICAgIHgwMCA9ICh4MTEgKyB4MTApIC8gMixcbiAgICAgIHkwMCA9ICh5MTEgKyB5MTApIC8gMixcbiAgICAgIGR4ID0geDEwIC0geDExLFxuICAgICAgZHkgPSB5MTAgLSB5MTEsXG4gICAgICBkMiA9IGR4ICogZHggKyBkeSAqIGR5LFxuICAgICAgciA9IHIxIC0gcmMsXG4gICAgICBEID0geDExICogeTEwIC0geDEwICogeTExLFxuICAgICAgZCA9IChkeSA8IDAgPyAtMSA6IDEpICogc3FydChtYXgoMCwgciAqIHIgKiBkMiAtIEQgKiBEKSksXG4gICAgICBjeDAgPSAoRCAqIGR5IC0gZHggKiBkKSAvIGQyLFxuICAgICAgY3kwID0gKC1EICogZHggLSBkeSAqIGQpIC8gZDIsXG4gICAgICBjeDEgPSAoRCAqIGR5ICsgZHggKiBkKSAvIGQyLFxuICAgICAgY3kxID0gKC1EICogZHggKyBkeSAqIGQpIC8gZDIsXG4gICAgICBkeDAgPSBjeDAgLSB4MDAsXG4gICAgICBkeTAgPSBjeTAgLSB5MDAsXG4gICAgICBkeDEgPSBjeDEgLSB4MDAsXG4gICAgICBkeTEgPSBjeTEgLSB5MDA7XG5cbiAgLy8gUGljayB0aGUgY2xvc2VyIG9mIHRoZSB0d28gaW50ZXJzZWN0aW9uIHBvaW50cy5cbiAgLy8gVE9ETyBJcyB0aGVyZSBhIGZhc3RlciB3YXkgdG8gZGV0ZXJtaW5lIHdoaWNoIGludGVyc2VjdGlvbiB0byB1c2U/XG4gIGlmIChkeDAgKiBkeDAgKyBkeTAgKiBkeTAgPiBkeDEgKiBkeDEgKyBkeTEgKiBkeTEpIGN4MCA9IGN4MSwgY3kwID0gY3kxO1xuXG4gIHJldHVybiB7XG4gICAgY3g6IGN4MCxcbiAgICBjeTogY3kwLFxuICAgIHgwMTogLW94LFxuICAgIHkwMTogLW95LFxuICAgIHgxMTogY3gwICogKHIxIC8gciAtIDEpLFxuICAgIHkxMTogY3kwICogKHIxIC8gciAtIDEpXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICB2YXIgaW5uZXJSYWRpdXMgPSBhcmNJbm5lclJhZGl1cyxcbiAgICAgIG91dGVyUmFkaXVzID0gYXJjT3V0ZXJSYWRpdXMsXG4gICAgICBjb3JuZXJSYWRpdXMgPSBjb25zdGFudCgwKSxcbiAgICAgIHBhZFJhZGl1cyA9IG51bGwsXG4gICAgICBzdGFydEFuZ2xlID0gYXJjU3RhcnRBbmdsZSxcbiAgICAgIGVuZEFuZ2xlID0gYXJjRW5kQW5nbGUsXG4gICAgICBwYWRBbmdsZSA9IGFyY1BhZEFuZ2xlLFxuICAgICAgY29udGV4dCA9IG51bGw7XG5cbiAgZnVuY3Rpb24gYXJjKCkge1xuICAgIHZhciBidWZmZXIsXG4gICAgICAgIHIsXG4gICAgICAgIHIwID0gK2lubmVyUmFkaXVzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyksXG4gICAgICAgIHIxID0gK291dGVyUmFkaXVzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyksXG4gICAgICAgIGEwID0gc3RhcnRBbmdsZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpIC0gaGFsZlBpLFxuICAgICAgICBhMSA9IGVuZEFuZ2xlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgLSBoYWxmUGksXG4gICAgICAgIGRhID0gYWJzKGExIC0gYTApLFxuICAgICAgICBjdyA9IGExID4gYTA7XG5cbiAgICBpZiAoIWNvbnRleHQpIGNvbnRleHQgPSBidWZmZXIgPSBwYXRoKCk7XG5cbiAgICAvLyBFbnN1cmUgdGhhdCB0aGUgb3V0ZXIgcmFkaXVzIGlzIGFsd2F5cyBsYXJnZXIgdGhhbiB0aGUgaW5uZXIgcmFkaXVzLlxuICAgIGlmIChyMSA8IHIwKSByID0gcjEsIHIxID0gcjAsIHIwID0gcjtcblxuICAgIC8vIElzIGl0IGEgcG9pbnQ/XG4gICAgaWYgKCEocjEgPiBlcHNpbG9uKSkgY29udGV4dC5tb3ZlVG8oMCwgMCk7XG5cbiAgICAvLyBPciBpcyBpdCBhIGNpcmNsZSBvciBhbm51bHVzP1xuICAgIGVsc2UgaWYgKGRhID4gdGF1IC0gZXBzaWxvbikge1xuICAgICAgY29udGV4dC5tb3ZlVG8ocjEgKiBjb3MoYTApLCByMSAqIHNpbihhMCkpO1xuICAgICAgY29udGV4dC5hcmMoMCwgMCwgcjEsIGEwLCBhMSwgIWN3KTtcbiAgICAgIGlmIChyMCA+IGVwc2lsb24pIHtcbiAgICAgICAgY29udGV4dC5tb3ZlVG8ocjAgKiBjb3MoYTEpLCByMCAqIHNpbihhMSkpO1xuICAgICAgICBjb250ZXh0LmFyYygwLCAwLCByMCwgYTEsIGEwLCBjdyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gT3IgaXMgaXQgYSBjaXJjdWxhciBvciBhbm51bGFyIHNlY3Rvcj9cbiAgICBlbHNlIHtcbiAgICAgIHZhciBhMDEgPSBhMCxcbiAgICAgICAgICBhMTEgPSBhMSxcbiAgICAgICAgICBhMDAgPSBhMCxcbiAgICAgICAgICBhMTAgPSBhMSxcbiAgICAgICAgICBkYTAgPSBkYSxcbiAgICAgICAgICBkYTEgPSBkYSxcbiAgICAgICAgICBhcCA9IHBhZEFuZ2xlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgLyAyLFxuICAgICAgICAgIHJwID0gKGFwID4gZXBzaWxvbikgJiYgKHBhZFJhZGl1cyA/ICtwYWRSYWRpdXMuYXBwbHkodGhpcywgYXJndW1lbnRzKSA6IHNxcnQocjAgKiByMCArIHIxICogcjEpKSxcbiAgICAgICAgICByYyA9IG1pbihhYnMocjEgLSByMCkgLyAyLCArY29ybmVyUmFkaXVzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpLFxuICAgICAgICAgIHJjMCA9IHJjLFxuICAgICAgICAgIHJjMSA9IHJjLFxuICAgICAgICAgIHQwLFxuICAgICAgICAgIHQxO1xuXG4gICAgICAvLyBBcHBseSBwYWRkaW5nPyBOb3RlIHRoYXQgc2luY2UgcjEg4omlIHIwLCBkYTEg4omlIGRhMC5cbiAgICAgIGlmIChycCA+IGVwc2lsb24pIHtcbiAgICAgICAgdmFyIHAwID0gYXNpbihycCAvIHIwICogc2luKGFwKSksXG4gICAgICAgICAgICBwMSA9IGFzaW4ocnAgLyByMSAqIHNpbihhcCkpO1xuICAgICAgICBpZiAoKGRhMCAtPSBwMCAqIDIpID4gZXBzaWxvbikgcDAgKj0gKGN3ID8gMSA6IC0xKSwgYTAwICs9IHAwLCBhMTAgLT0gcDA7XG4gICAgICAgIGVsc2UgZGEwID0gMCwgYTAwID0gYTEwID0gKGEwICsgYTEpIC8gMjtcbiAgICAgICAgaWYgKChkYTEgLT0gcDEgKiAyKSA+IGVwc2lsb24pIHAxICo9IChjdyA/IDEgOiAtMSksIGEwMSArPSBwMSwgYTExIC09IHAxO1xuICAgICAgICBlbHNlIGRhMSA9IDAsIGEwMSA9IGExMSA9IChhMCArIGExKSAvIDI7XG4gICAgICB9XG5cbiAgICAgIHZhciB4MDEgPSByMSAqIGNvcyhhMDEpLFxuICAgICAgICAgIHkwMSA9IHIxICogc2luKGEwMSksXG4gICAgICAgICAgeDEwID0gcjAgKiBjb3MoYTEwKSxcbiAgICAgICAgICB5MTAgPSByMCAqIHNpbihhMTApO1xuXG4gICAgICAvLyBBcHBseSByb3VuZGVkIGNvcm5lcnM/XG4gICAgICBpZiAocmMgPiBlcHNpbG9uKSB7XG4gICAgICAgIHZhciB4MTEgPSByMSAqIGNvcyhhMTEpLFxuICAgICAgICAgICAgeTExID0gcjEgKiBzaW4oYTExKSxcbiAgICAgICAgICAgIHgwMCA9IHIwICogY29zKGEwMCksXG4gICAgICAgICAgICB5MDAgPSByMCAqIHNpbihhMDApLFxuICAgICAgICAgICAgb2M7XG5cbiAgICAgICAgLy8gUmVzdHJpY3QgdGhlIGNvcm5lciByYWRpdXMgYWNjb3JkaW5nIHRvIHRoZSBzZWN0b3IgYW5nbGUuXG4gICAgICAgIGlmIChkYSA8IHBpICYmIChvYyA9IGludGVyc2VjdCh4MDEsIHkwMSwgeDAwLCB5MDAsIHgxMSwgeTExLCB4MTAsIHkxMCkpKSB7XG4gICAgICAgICAgdmFyIGF4ID0geDAxIC0gb2NbMF0sXG4gICAgICAgICAgICAgIGF5ID0geTAxIC0gb2NbMV0sXG4gICAgICAgICAgICAgIGJ4ID0geDExIC0gb2NbMF0sXG4gICAgICAgICAgICAgIGJ5ID0geTExIC0gb2NbMV0sXG4gICAgICAgICAgICAgIGtjID0gMSAvIHNpbihhY29zKChheCAqIGJ4ICsgYXkgKiBieSkgLyAoc3FydChheCAqIGF4ICsgYXkgKiBheSkgKiBzcXJ0KGJ4ICogYnggKyBieSAqIGJ5KSkpIC8gMiksXG4gICAgICAgICAgICAgIGxjID0gc3FydChvY1swXSAqIG9jWzBdICsgb2NbMV0gKiBvY1sxXSk7XG4gICAgICAgICAgcmMwID0gbWluKHJjLCAocjAgLSBsYykgLyAoa2MgLSAxKSk7XG4gICAgICAgICAgcmMxID0gbWluKHJjLCAocjEgLSBsYykgLyAoa2MgKyAxKSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gSXMgdGhlIHNlY3RvciBjb2xsYXBzZWQgdG8gYSBsaW5lP1xuICAgICAgaWYgKCEoZGExID4gZXBzaWxvbikpIGNvbnRleHQubW92ZVRvKHgwMSwgeTAxKTtcblxuICAgICAgLy8gRG9lcyB0aGUgc2VjdG9y4oCZcyBvdXRlciByaW5nIGhhdmUgcm91bmRlZCBjb3JuZXJzP1xuICAgICAgZWxzZSBpZiAocmMxID4gZXBzaWxvbikge1xuICAgICAgICB0MCA9IGNvcm5lclRhbmdlbnRzKHgwMCwgeTAwLCB4MDEsIHkwMSwgcjEsIHJjMSwgY3cpO1xuICAgICAgICB0MSA9IGNvcm5lclRhbmdlbnRzKHgxMSwgeTExLCB4MTAsIHkxMCwgcjEsIHJjMSwgY3cpO1xuXG4gICAgICAgIGNvbnRleHQubW92ZVRvKHQwLmN4ICsgdDAueDAxLCB0MC5jeSArIHQwLnkwMSk7XG5cbiAgICAgICAgLy8gSGF2ZSB0aGUgY29ybmVycyBtZXJnZWQ/XG4gICAgICAgIGlmIChyYzEgPCByYykgY29udGV4dC5hcmModDAuY3gsIHQwLmN5LCByYzEsIGF0YW4yKHQwLnkwMSwgdDAueDAxKSwgYXRhbjIodDEueTAxLCB0MS54MDEpLCAhY3cpO1xuXG4gICAgICAgIC8vIE90aGVyd2lzZSwgZHJhdyB0aGUgdHdvIGNvcm5lcnMgYW5kIHRoZSByaW5nLlxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBjb250ZXh0LmFyYyh0MC5jeCwgdDAuY3ksIHJjMSwgYXRhbjIodDAueTAxLCB0MC54MDEpLCBhdGFuMih0MC55MTEsIHQwLngxMSksICFjdyk7XG4gICAgICAgICAgY29udGV4dC5hcmMoMCwgMCwgcjEsIGF0YW4yKHQwLmN5ICsgdDAueTExLCB0MC5jeCArIHQwLngxMSksIGF0YW4yKHQxLmN5ICsgdDEueTExLCB0MS5jeCArIHQxLngxMSksICFjdyk7XG4gICAgICAgICAgY29udGV4dC5hcmModDEuY3gsIHQxLmN5LCByYzEsIGF0YW4yKHQxLnkxMSwgdDEueDExKSwgYXRhbjIodDEueTAxLCB0MS54MDEpLCAhY3cpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIE9yIGlzIHRoZSBvdXRlciByaW5nIGp1c3QgYSBjaXJjdWxhciBhcmM/XG4gICAgICBlbHNlIGNvbnRleHQubW92ZVRvKHgwMSwgeTAxKSwgY29udGV4dC5hcmMoMCwgMCwgcjEsIGEwMSwgYTExLCAhY3cpO1xuXG4gICAgICAvLyBJcyB0aGVyZSBubyBpbm5lciByaW5nLCBhbmQgaXTigJlzIGEgY2lyY3VsYXIgc2VjdG9yP1xuICAgICAgLy8gT3IgcGVyaGFwcyBpdOKAmXMgYW4gYW5udWxhciBzZWN0b3IgY29sbGFwc2VkIGR1ZSB0byBwYWRkaW5nP1xuICAgICAgaWYgKCEocjAgPiBlcHNpbG9uKSB8fCAhKGRhMCA+IGVwc2lsb24pKSBjb250ZXh0LmxpbmVUbyh4MTAsIHkxMCk7XG5cbiAgICAgIC8vIERvZXMgdGhlIHNlY3RvcuKAmXMgaW5uZXIgcmluZyAob3IgcG9pbnQpIGhhdmUgcm91bmRlZCBjb3JuZXJzP1xuICAgICAgZWxzZSBpZiAocmMwID4gZXBzaWxvbikge1xuICAgICAgICB0MCA9IGNvcm5lclRhbmdlbnRzKHgxMCwgeTEwLCB4MTEsIHkxMSwgcjAsIC1yYzAsIGN3KTtcbiAgICAgICAgdDEgPSBjb3JuZXJUYW5nZW50cyh4MDEsIHkwMSwgeDAwLCB5MDAsIHIwLCAtcmMwLCBjdyk7XG5cbiAgICAgICAgY29udGV4dC5saW5lVG8odDAuY3ggKyB0MC54MDEsIHQwLmN5ICsgdDAueTAxKTtcblxuICAgICAgICAvLyBIYXZlIHRoZSBjb3JuZXJzIG1lcmdlZD9cbiAgICAgICAgaWYgKHJjMCA8IHJjKSBjb250ZXh0LmFyYyh0MC5jeCwgdDAuY3ksIHJjMCwgYXRhbjIodDAueTAxLCB0MC54MDEpLCBhdGFuMih0MS55MDEsIHQxLngwMSksICFjdyk7XG5cbiAgICAgICAgLy8gT3RoZXJ3aXNlLCBkcmF3IHRoZSB0d28gY29ybmVycyBhbmQgdGhlIHJpbmcuXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGNvbnRleHQuYXJjKHQwLmN4LCB0MC5jeSwgcmMwLCBhdGFuMih0MC55MDEsIHQwLngwMSksIGF0YW4yKHQwLnkxMSwgdDAueDExKSwgIWN3KTtcbiAgICAgICAgICBjb250ZXh0LmFyYygwLCAwLCByMCwgYXRhbjIodDAuY3kgKyB0MC55MTEsIHQwLmN4ICsgdDAueDExKSwgYXRhbjIodDEuY3kgKyB0MS55MTEsIHQxLmN4ICsgdDEueDExKSwgY3cpO1xuICAgICAgICAgIGNvbnRleHQuYXJjKHQxLmN4LCB0MS5jeSwgcmMwLCBhdGFuMih0MS55MTEsIHQxLngxMSksIGF0YW4yKHQxLnkwMSwgdDEueDAxKSwgIWN3KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBPciBpcyB0aGUgaW5uZXIgcmluZyBqdXN0IGEgY2lyY3VsYXIgYXJjP1xuICAgICAgZWxzZSBjb250ZXh0LmFyYygwLCAwLCByMCwgYTEwLCBhMDAsIGN3KTtcbiAgICB9XG5cbiAgICBjb250ZXh0LmNsb3NlUGF0aCgpO1xuXG4gICAgaWYgKGJ1ZmZlcikgcmV0dXJuIGNvbnRleHQgPSBudWxsLCBidWZmZXIgKyBcIlwiIHx8IG51bGw7XG4gIH1cblxuICBhcmMuY2VudHJvaWQgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgciA9ICgraW5uZXJSYWRpdXMuYXBwbHkodGhpcywgYXJndW1lbnRzKSArICtvdXRlclJhZGl1cy5hcHBseSh0aGlzLCBhcmd1bWVudHMpKSAvIDIsXG4gICAgICAgIGEgPSAoK3N0YXJ0QW5nbGUuYXBwbHkodGhpcywgYXJndW1lbnRzKSArICtlbmRBbmdsZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKSAvIDIgLSBwaSAvIDI7XG4gICAgcmV0dXJuIFtjb3MoYSkgKiByLCBzaW4oYSkgKiByXTtcbiAgfTtcblxuICBhcmMuaW5uZXJSYWRpdXMgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoaW5uZXJSYWRpdXMgPSB0eXBlb2YgXyA9PT0gXCJmdW5jdGlvblwiID8gXyA6IGNvbnN0YW50KCtfKSwgYXJjKSA6IGlubmVyUmFkaXVzO1xuICB9O1xuXG4gIGFyYy5vdXRlclJhZGl1cyA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChvdXRlclJhZGl1cyA9IHR5cGVvZiBfID09PSBcImZ1bmN0aW9uXCIgPyBfIDogY29uc3RhbnQoK18pLCBhcmMpIDogb3V0ZXJSYWRpdXM7XG4gIH07XG5cbiAgYXJjLmNvcm5lclJhZGl1cyA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChjb3JuZXJSYWRpdXMgPSB0eXBlb2YgXyA9PT0gXCJmdW5jdGlvblwiID8gXyA6IGNvbnN0YW50KCtfKSwgYXJjKSA6IGNvcm5lclJhZGl1cztcbiAgfTtcblxuICBhcmMucGFkUmFkaXVzID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKHBhZFJhZGl1cyA9IF8gPT0gbnVsbCA/IG51bGwgOiB0eXBlb2YgXyA9PT0gXCJmdW5jdGlvblwiID8gXyA6IGNvbnN0YW50KCtfKSwgYXJjKSA6IHBhZFJhZGl1cztcbiAgfTtcblxuICBhcmMuc3RhcnRBbmdsZSA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChzdGFydEFuZ2xlID0gdHlwZW9mIF8gPT09IFwiZnVuY3Rpb25cIiA/IF8gOiBjb25zdGFudCgrXyksIGFyYykgOiBzdGFydEFuZ2xlO1xuICB9O1xuXG4gIGFyYy5lbmRBbmdsZSA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChlbmRBbmdsZSA9IHR5cGVvZiBfID09PSBcImZ1bmN0aW9uXCIgPyBfIDogY29uc3RhbnQoK18pLCBhcmMpIDogZW5kQW5nbGU7XG4gIH07XG5cbiAgYXJjLnBhZEFuZ2xlID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKHBhZEFuZ2xlID0gdHlwZW9mIF8gPT09IFwiZnVuY3Rpb25cIiA/IF8gOiBjb25zdGFudCgrXyksIGFyYykgOiBwYWRBbmdsZTtcbiAgfTtcblxuICBhcmMuY29udGV4dCA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/ICgoY29udGV4dCA9IF8gPT0gbnVsbCA/IG51bGwgOiBfKSwgYXJjKSA6IGNvbnRleHQ7XG4gIH07XG5cbiAgcmV0dXJuIGFyYztcbn1cbiIsImltcG9ydCB7cGF0aH0gZnJvbSBcImQzLXBhdGhcIjtcbmltcG9ydCBhcnJheSBmcm9tIFwiLi9hcnJheS5qc1wiO1xuaW1wb3J0IGNvbnN0YW50IGZyb20gXCIuL2NvbnN0YW50LmpzXCI7XG5pbXBvcnQgY3VydmVMaW5lYXIgZnJvbSBcIi4vY3VydmUvbGluZWFyLmpzXCI7XG5pbXBvcnQgbGluZSBmcm9tIFwiLi9saW5lLmpzXCI7XG5pbXBvcnQge3ggYXMgcG9pbnRYLCB5IGFzIHBvaW50WX0gZnJvbSBcIi4vcG9pbnQuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oeDAsIHkwLCB5MSkge1xuICB2YXIgeDEgPSBudWxsLFxuICAgICAgZGVmaW5lZCA9IGNvbnN0YW50KHRydWUpLFxuICAgICAgY29udGV4dCA9IG51bGwsXG4gICAgICBjdXJ2ZSA9IGN1cnZlTGluZWFyLFxuICAgICAgb3V0cHV0ID0gbnVsbDtcblxuICB4MCA9IHR5cGVvZiB4MCA9PT0gXCJmdW5jdGlvblwiID8geDAgOiAoeDAgPT09IHVuZGVmaW5lZCkgPyBwb2ludFggOiBjb25zdGFudCgreDApO1xuICB5MCA9IHR5cGVvZiB5MCA9PT0gXCJmdW5jdGlvblwiID8geTAgOiAoeTAgPT09IHVuZGVmaW5lZCkgPyBjb25zdGFudCgwKSA6IGNvbnN0YW50KCt5MCk7XG4gIHkxID0gdHlwZW9mIHkxID09PSBcImZ1bmN0aW9uXCIgPyB5MSA6ICh5MSA9PT0gdW5kZWZpbmVkKSA/IHBvaW50WSA6IGNvbnN0YW50KCt5MSk7XG5cbiAgZnVuY3Rpb24gYXJlYShkYXRhKSB7XG4gICAgdmFyIGksXG4gICAgICAgIGosXG4gICAgICAgIGssXG4gICAgICAgIG4gPSAoZGF0YSA9IGFycmF5KGRhdGEpKS5sZW5ndGgsXG4gICAgICAgIGQsXG4gICAgICAgIGRlZmluZWQwID0gZmFsc2UsXG4gICAgICAgIGJ1ZmZlcixcbiAgICAgICAgeDB6ID0gbmV3IEFycmF5KG4pLFxuICAgICAgICB5MHogPSBuZXcgQXJyYXkobik7XG5cbiAgICBpZiAoY29udGV4dCA9PSBudWxsKSBvdXRwdXQgPSBjdXJ2ZShidWZmZXIgPSBwYXRoKCkpO1xuXG4gICAgZm9yIChpID0gMDsgaSA8PSBuOyArK2kpIHtcbiAgICAgIGlmICghKGkgPCBuICYmIGRlZmluZWQoZCA9IGRhdGFbaV0sIGksIGRhdGEpKSA9PT0gZGVmaW5lZDApIHtcbiAgICAgICAgaWYgKGRlZmluZWQwID0gIWRlZmluZWQwKSB7XG4gICAgICAgICAgaiA9IGk7XG4gICAgICAgICAgb3V0cHV0LmFyZWFTdGFydCgpO1xuICAgICAgICAgIG91dHB1dC5saW5lU3RhcnQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBvdXRwdXQubGluZUVuZCgpO1xuICAgICAgICAgIG91dHB1dC5saW5lU3RhcnQoKTtcbiAgICAgICAgICBmb3IgKGsgPSBpIC0gMTsgayA+PSBqOyAtLWspIHtcbiAgICAgICAgICAgIG91dHB1dC5wb2ludCh4MHpba10sIHkweltrXSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIG91dHB1dC5saW5lRW5kKCk7XG4gICAgICAgICAgb3V0cHV0LmFyZWFFbmQoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGRlZmluZWQwKSB7XG4gICAgICAgIHgweltpXSA9ICt4MChkLCBpLCBkYXRhKSwgeTB6W2ldID0gK3kwKGQsIGksIGRhdGEpO1xuICAgICAgICBvdXRwdXQucG9pbnQoeDEgPyAreDEoZCwgaSwgZGF0YSkgOiB4MHpbaV0sIHkxID8gK3kxKGQsIGksIGRhdGEpIDogeTB6W2ldKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoYnVmZmVyKSByZXR1cm4gb3V0cHV0ID0gbnVsbCwgYnVmZmVyICsgXCJcIiB8fCBudWxsO1xuICB9XG5cbiAgZnVuY3Rpb24gYXJlYWxpbmUoKSB7XG4gICAgcmV0dXJuIGxpbmUoKS5kZWZpbmVkKGRlZmluZWQpLmN1cnZlKGN1cnZlKS5jb250ZXh0KGNvbnRleHQpO1xuICB9XG5cbiAgYXJlYS54ID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKHgwID0gdHlwZW9mIF8gPT09IFwiZnVuY3Rpb25cIiA/IF8gOiBjb25zdGFudCgrXyksIHgxID0gbnVsbCwgYXJlYSkgOiB4MDtcbiAgfTtcblxuICBhcmVhLngwID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKHgwID0gdHlwZW9mIF8gPT09IFwiZnVuY3Rpb25cIiA/IF8gOiBjb25zdGFudCgrXyksIGFyZWEpIDogeDA7XG4gIH07XG5cbiAgYXJlYS54MSA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/ICh4MSA9IF8gPT0gbnVsbCA/IG51bGwgOiB0eXBlb2YgXyA9PT0gXCJmdW5jdGlvblwiID8gXyA6IGNvbnN0YW50KCtfKSwgYXJlYSkgOiB4MTtcbiAgfTtcblxuICBhcmVhLnkgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoeTAgPSB0eXBlb2YgXyA9PT0gXCJmdW5jdGlvblwiID8gXyA6IGNvbnN0YW50KCtfKSwgeTEgPSBudWxsLCBhcmVhKSA6IHkwO1xuICB9O1xuXG4gIGFyZWEueTAgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoeTAgPSB0eXBlb2YgXyA9PT0gXCJmdW5jdGlvblwiID8gXyA6IGNvbnN0YW50KCtfKSwgYXJlYSkgOiB5MDtcbiAgfTtcblxuICBhcmVhLnkxID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKHkxID0gXyA9PSBudWxsID8gbnVsbCA6IHR5cGVvZiBfID09PSBcImZ1bmN0aW9uXCIgPyBfIDogY29uc3RhbnQoK18pLCBhcmVhKSA6IHkxO1xuICB9O1xuXG4gIGFyZWEubGluZVgwID1cbiAgYXJlYS5saW5lWTAgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gYXJlYWxpbmUoKS54KHgwKS55KHkwKTtcbiAgfTtcblxuICBhcmVhLmxpbmVZMSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBhcmVhbGluZSgpLngoeDApLnkoeTEpO1xuICB9O1xuXG4gIGFyZWEubGluZVgxID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGFyZWFsaW5lKCkueCh4MSkueSh5MCk7XG4gIH07XG5cbiAgYXJlYS5kZWZpbmVkID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKGRlZmluZWQgPSB0eXBlb2YgXyA9PT0gXCJmdW5jdGlvblwiID8gXyA6IGNvbnN0YW50KCEhXyksIGFyZWEpIDogZGVmaW5lZDtcbiAgfTtcblxuICBhcmVhLmN1cnZlID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKGN1cnZlID0gXywgY29udGV4dCAhPSBudWxsICYmIChvdXRwdXQgPSBjdXJ2ZShjb250ZXh0KSksIGFyZWEpIDogY3VydmU7XG4gIH07XG5cbiAgYXJlYS5jb250ZXh0ID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKF8gPT0gbnVsbCA/IGNvbnRleHQgPSBvdXRwdXQgPSBudWxsIDogb3V0cHV0ID0gY3VydmUoY29udGV4dCA9IF8pLCBhcmVhKSA6IGNvbnRleHQ7XG4gIH07XG5cbiAgcmV0dXJuIGFyZWE7XG59XG4iLCJpbXBvcnQgY3VydmVSYWRpYWwsIHtjdXJ2ZVJhZGlhbExpbmVhcn0gZnJvbSBcIi4vY3VydmUvcmFkaWFsLmpzXCI7XG5pbXBvcnQgYXJlYSBmcm9tIFwiLi9hcmVhLmpzXCI7XG5pbXBvcnQge2xpbmVSYWRpYWx9IGZyb20gXCIuL2xpbmVSYWRpYWwuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gIHZhciBhID0gYXJlYSgpLmN1cnZlKGN1cnZlUmFkaWFsTGluZWFyKSxcbiAgICAgIGMgPSBhLmN1cnZlLFxuICAgICAgeDAgPSBhLmxpbmVYMCxcbiAgICAgIHgxID0gYS5saW5lWDEsXG4gICAgICB5MCA9IGEubGluZVkwLFxuICAgICAgeTEgPSBhLmxpbmVZMTtcblxuICBhLmFuZ2xlID0gYS54LCBkZWxldGUgYS54O1xuICBhLnN0YXJ0QW5nbGUgPSBhLngwLCBkZWxldGUgYS54MDtcbiAgYS5lbmRBbmdsZSA9IGEueDEsIGRlbGV0ZSBhLngxO1xuICBhLnJhZGl1cyA9IGEueSwgZGVsZXRlIGEueTtcbiAgYS5pbm5lclJhZGl1cyA9IGEueTAsIGRlbGV0ZSBhLnkwO1xuICBhLm91dGVyUmFkaXVzID0gYS55MSwgZGVsZXRlIGEueTE7XG4gIGEubGluZVN0YXJ0QW5nbGUgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGxpbmVSYWRpYWwoeDAoKSk7IH0sIGRlbGV0ZSBhLmxpbmVYMDtcbiAgYS5saW5lRW5kQW5nbGUgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGxpbmVSYWRpYWwoeDEoKSk7IH0sIGRlbGV0ZSBhLmxpbmVYMTtcbiAgYS5saW5lSW5uZXJSYWRpdXMgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGxpbmVSYWRpYWwoeTAoKSk7IH0sIGRlbGV0ZSBhLmxpbmVZMDtcbiAgYS5saW5lT3V0ZXJSYWRpdXMgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGxpbmVSYWRpYWwoeTEoKSk7IH0sIGRlbGV0ZSBhLmxpbmVZMTtcblxuICBhLmN1cnZlID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gYyhjdXJ2ZVJhZGlhbChfKSkgOiBjKCkuX2N1cnZlO1xuICB9O1xuXG4gIHJldHVybiBhO1xufVxuIiwiZXhwb3J0IHZhciBzbGljZSA9IEFycmF5LnByb3RvdHlwZS5zbGljZTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oeCkge1xuICByZXR1cm4gdHlwZW9mIHggPT09IFwib2JqZWN0XCIgJiYgXCJsZW5ndGhcIiBpbiB4XG4gICAgPyB4IC8vIEFycmF5LCBUeXBlZEFycmF5LCBOb2RlTGlzdCwgYXJyYXktbGlrZVxuICAgIDogQXJyYXkuZnJvbSh4KTsgLy8gTWFwLCBTZXQsIGl0ZXJhYmxlLCBzdHJpbmcsIG9yIGFueXRoaW5nIGVsc2Vcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHgpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGNvbnN0YW50KCkge1xuICAgIHJldHVybiB4O1xuICB9O1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIHBvaW50KHRoYXQsIHgsIHkpIHtcbiAgdGhhdC5fY29udGV4dC5iZXppZXJDdXJ2ZVRvKFxuICAgICgyICogdGhhdC5feDAgKyB0aGF0Ll94MSkgLyAzLFxuICAgICgyICogdGhhdC5feTAgKyB0aGF0Ll95MSkgLyAzLFxuICAgICh0aGF0Ll94MCArIDIgKiB0aGF0Ll94MSkgLyAzLFxuICAgICh0aGF0Ll95MCArIDIgKiB0aGF0Ll95MSkgLyAzLFxuICAgICh0aGF0Ll94MCArIDQgKiB0aGF0Ll94MSArIHgpIC8gNixcbiAgICAodGhhdC5feTAgKyA0ICogdGhhdC5feTEgKyB5KSAvIDZcbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEJhc2lzKGNvbnRleHQpIHtcbiAgdGhpcy5fY29udGV4dCA9IGNvbnRleHQ7XG59XG5cbkJhc2lzLnByb3RvdHlwZSA9IHtcbiAgYXJlYVN0YXJ0OiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl9saW5lID0gMDtcbiAgfSxcbiAgYXJlYUVuZDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fbGluZSA9IE5hTjtcbiAgfSxcbiAgbGluZVN0YXJ0OiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl94MCA9IHRoaXMuX3gxID1cbiAgICB0aGlzLl95MCA9IHRoaXMuX3kxID0gTmFOO1xuICAgIHRoaXMuX3BvaW50ID0gMDtcbiAgfSxcbiAgbGluZUVuZDogZnVuY3Rpb24oKSB7XG4gICAgc3dpdGNoICh0aGlzLl9wb2ludCkge1xuICAgICAgY2FzZSAzOiBwb2ludCh0aGlzLCB0aGlzLl94MSwgdGhpcy5feTEpOyAvLyBmYWxscyB0aHJvdWdoXG4gICAgICBjYXNlIDI6IHRoaXMuX2NvbnRleHQubGluZVRvKHRoaXMuX3gxLCB0aGlzLl95MSk7IGJyZWFrO1xuICAgIH1cbiAgICBpZiAodGhpcy5fbGluZSB8fCAodGhpcy5fbGluZSAhPT0gMCAmJiB0aGlzLl9wb2ludCA9PT0gMSkpIHRoaXMuX2NvbnRleHQuY2xvc2VQYXRoKCk7XG4gICAgdGhpcy5fbGluZSA9IDEgLSB0aGlzLl9saW5lO1xuICB9LFxuICBwb2ludDogZnVuY3Rpb24oeCwgeSkge1xuICAgIHggPSAreCwgeSA9ICt5O1xuICAgIHN3aXRjaCAodGhpcy5fcG9pbnQpIHtcbiAgICAgIGNhc2UgMDogdGhpcy5fcG9pbnQgPSAxOyB0aGlzLl9saW5lID8gdGhpcy5fY29udGV4dC5saW5lVG8oeCwgeSkgOiB0aGlzLl9jb250ZXh0Lm1vdmVUbyh4LCB5KTsgYnJlYWs7XG4gICAgICBjYXNlIDE6IHRoaXMuX3BvaW50ID0gMjsgYnJlYWs7XG4gICAgICBjYXNlIDI6IHRoaXMuX3BvaW50ID0gMzsgdGhpcy5fY29udGV4dC5saW5lVG8oKDUgKiB0aGlzLl94MCArIHRoaXMuX3gxKSAvIDYsICg1ICogdGhpcy5feTAgKyB0aGlzLl95MSkgLyA2KTsgLy8gZmFsbHMgdGhyb3VnaFxuICAgICAgZGVmYXVsdDogcG9pbnQodGhpcywgeCwgeSk7IGJyZWFrO1xuICAgIH1cbiAgICB0aGlzLl94MCA9IHRoaXMuX3gxLCB0aGlzLl94MSA9IHg7XG4gICAgdGhpcy5feTAgPSB0aGlzLl95MSwgdGhpcy5feTEgPSB5O1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihjb250ZXh0KSB7XG4gIHJldHVybiBuZXcgQmFzaXMoY29udGV4dCk7XG59XG4iLCJpbXBvcnQgbm9vcCBmcm9tIFwiLi4vbm9vcC5qc1wiO1xuaW1wb3J0IHtwb2ludH0gZnJvbSBcIi4vYmFzaXMuanNcIjtcblxuZnVuY3Rpb24gQmFzaXNDbG9zZWQoY29udGV4dCkge1xuICB0aGlzLl9jb250ZXh0ID0gY29udGV4dDtcbn1cblxuQmFzaXNDbG9zZWQucHJvdG90eXBlID0ge1xuICBhcmVhU3RhcnQ6IG5vb3AsXG4gIGFyZWFFbmQ6IG5vb3AsXG4gIGxpbmVTdGFydDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5feDAgPSB0aGlzLl94MSA9IHRoaXMuX3gyID0gdGhpcy5feDMgPSB0aGlzLl94NCA9XG4gICAgdGhpcy5feTAgPSB0aGlzLl95MSA9IHRoaXMuX3kyID0gdGhpcy5feTMgPSB0aGlzLl95NCA9IE5hTjtcbiAgICB0aGlzLl9wb2ludCA9IDA7XG4gIH0sXG4gIGxpbmVFbmQ6IGZ1bmN0aW9uKCkge1xuICAgIHN3aXRjaCAodGhpcy5fcG9pbnQpIHtcbiAgICAgIGNhc2UgMToge1xuICAgICAgICB0aGlzLl9jb250ZXh0Lm1vdmVUbyh0aGlzLl94MiwgdGhpcy5feTIpO1xuICAgICAgICB0aGlzLl9jb250ZXh0LmNsb3NlUGF0aCgpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgMjoge1xuICAgICAgICB0aGlzLl9jb250ZXh0Lm1vdmVUbygodGhpcy5feDIgKyAyICogdGhpcy5feDMpIC8gMywgKHRoaXMuX3kyICsgMiAqIHRoaXMuX3kzKSAvIDMpO1xuICAgICAgICB0aGlzLl9jb250ZXh0LmxpbmVUbygodGhpcy5feDMgKyAyICogdGhpcy5feDIpIC8gMywgKHRoaXMuX3kzICsgMiAqIHRoaXMuX3kyKSAvIDMpO1xuICAgICAgICB0aGlzLl9jb250ZXh0LmNsb3NlUGF0aCgpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgMzoge1xuICAgICAgICB0aGlzLnBvaW50KHRoaXMuX3gyLCB0aGlzLl95Mik7XG4gICAgICAgIHRoaXMucG9pbnQodGhpcy5feDMsIHRoaXMuX3kzKTtcbiAgICAgICAgdGhpcy5wb2ludCh0aGlzLl94NCwgdGhpcy5feTQpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIHBvaW50OiBmdW5jdGlvbih4LCB5KSB7XG4gICAgeCA9ICt4LCB5ID0gK3k7XG4gICAgc3dpdGNoICh0aGlzLl9wb2ludCkge1xuICAgICAgY2FzZSAwOiB0aGlzLl9wb2ludCA9IDE7IHRoaXMuX3gyID0geCwgdGhpcy5feTIgPSB5OyBicmVhaztcbiAgICAgIGNhc2UgMTogdGhpcy5fcG9pbnQgPSAyOyB0aGlzLl94MyA9IHgsIHRoaXMuX3kzID0geTsgYnJlYWs7XG4gICAgICBjYXNlIDI6IHRoaXMuX3BvaW50ID0gMzsgdGhpcy5feDQgPSB4LCB0aGlzLl95NCA9IHk7IHRoaXMuX2NvbnRleHQubW92ZVRvKCh0aGlzLl94MCArIDQgKiB0aGlzLl94MSArIHgpIC8gNiwgKHRoaXMuX3kwICsgNCAqIHRoaXMuX3kxICsgeSkgLyA2KTsgYnJlYWs7XG4gICAgICBkZWZhdWx0OiBwb2ludCh0aGlzLCB4LCB5KTsgYnJlYWs7XG4gICAgfVxuICAgIHRoaXMuX3gwID0gdGhpcy5feDEsIHRoaXMuX3gxID0geDtcbiAgICB0aGlzLl95MCA9IHRoaXMuX3kxLCB0aGlzLl95MSA9IHk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGNvbnRleHQpIHtcbiAgcmV0dXJuIG5ldyBCYXNpc0Nsb3NlZChjb250ZXh0KTtcbn1cbiIsImltcG9ydCB7cG9pbnR9IGZyb20gXCIuL2Jhc2lzLmpzXCI7XG5cbmZ1bmN0aW9uIEJhc2lzT3Blbihjb250ZXh0KSB7XG4gIHRoaXMuX2NvbnRleHQgPSBjb250ZXh0O1xufVxuXG5CYXNpc09wZW4ucHJvdG90eXBlID0ge1xuICBhcmVhU3RhcnQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX2xpbmUgPSAwO1xuICB9LFxuICBhcmVhRW5kOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl9saW5lID0gTmFOO1xuICB9LFxuICBsaW5lU3RhcnQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX3gwID0gdGhpcy5feDEgPVxuICAgIHRoaXMuX3kwID0gdGhpcy5feTEgPSBOYU47XG4gICAgdGhpcy5fcG9pbnQgPSAwO1xuICB9LFxuICBsaW5lRW5kOiBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5fbGluZSB8fCAodGhpcy5fbGluZSAhPT0gMCAmJiB0aGlzLl9wb2ludCA9PT0gMykpIHRoaXMuX2NvbnRleHQuY2xvc2VQYXRoKCk7XG4gICAgdGhpcy5fbGluZSA9IDEgLSB0aGlzLl9saW5lO1xuICB9LFxuICBwb2ludDogZnVuY3Rpb24oeCwgeSkge1xuICAgIHggPSAreCwgeSA9ICt5O1xuICAgIHN3aXRjaCAodGhpcy5fcG9pbnQpIHtcbiAgICAgIGNhc2UgMDogdGhpcy5fcG9pbnQgPSAxOyBicmVhaztcbiAgICAgIGNhc2UgMTogdGhpcy5fcG9pbnQgPSAyOyBicmVhaztcbiAgICAgIGNhc2UgMjogdGhpcy5fcG9pbnQgPSAzOyB2YXIgeDAgPSAodGhpcy5feDAgKyA0ICogdGhpcy5feDEgKyB4KSAvIDYsIHkwID0gKHRoaXMuX3kwICsgNCAqIHRoaXMuX3kxICsgeSkgLyA2OyB0aGlzLl9saW5lID8gdGhpcy5fY29udGV4dC5saW5lVG8oeDAsIHkwKSA6IHRoaXMuX2NvbnRleHQubW92ZVRvKHgwLCB5MCk7IGJyZWFrO1xuICAgICAgY2FzZSAzOiB0aGlzLl9wb2ludCA9IDQ7IC8vIGZhbGxzIHRocm91Z2hcbiAgICAgIGRlZmF1bHQ6IHBvaW50KHRoaXMsIHgsIHkpOyBicmVhaztcbiAgICB9XG4gICAgdGhpcy5feDAgPSB0aGlzLl94MSwgdGhpcy5feDEgPSB4O1xuICAgIHRoaXMuX3kwID0gdGhpcy5feTEsIHRoaXMuX3kxID0geTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oY29udGV4dCkge1xuICByZXR1cm4gbmV3IEJhc2lzT3Blbihjb250ZXh0KTtcbn1cbiIsImNsYXNzIEJ1bXAge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCB4KSB7XG4gICAgdGhpcy5fY29udGV4dCA9IGNvbnRleHQ7XG4gICAgdGhpcy5feCA9IHg7XG4gIH1cbiAgYXJlYVN0YXJ0KCkge1xuICAgIHRoaXMuX2xpbmUgPSAwO1xuICB9XG4gIGFyZWFFbmQoKSB7XG4gICAgdGhpcy5fbGluZSA9IE5hTjtcbiAgfVxuICBsaW5lU3RhcnQoKSB7XG4gICAgdGhpcy5fcG9pbnQgPSAwO1xuICB9XG4gIGxpbmVFbmQoKSB7XG4gICAgaWYgKHRoaXMuX2xpbmUgfHwgKHRoaXMuX2xpbmUgIT09IDAgJiYgdGhpcy5fcG9pbnQgPT09IDEpKSB0aGlzLl9jb250ZXh0LmNsb3NlUGF0aCgpO1xuICAgIHRoaXMuX2xpbmUgPSAxIC0gdGhpcy5fbGluZTtcbiAgfVxuICBwb2ludCh4LCB5KSB7XG4gICAgeCA9ICt4LCB5ID0gK3k7XG4gICAgc3dpdGNoICh0aGlzLl9wb2ludCkge1xuICAgICAgY2FzZSAwOiB7XG4gICAgICAgIHRoaXMuX3BvaW50ID0gMTtcbiAgICAgICAgaWYgKHRoaXMuX2xpbmUpIHRoaXMuX2NvbnRleHQubGluZVRvKHgsIHkpO1xuICAgICAgICBlbHNlIHRoaXMuX2NvbnRleHQubW92ZVRvKHgsIHkpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgMTogdGhpcy5fcG9pbnQgPSAyOyAvLyBmYWxscyB0aHJvdWdoXG4gICAgICBkZWZhdWx0OiB7XG4gICAgICAgIGlmICh0aGlzLl94KSB0aGlzLl9jb250ZXh0LmJlemllckN1cnZlVG8odGhpcy5feDAgPSAodGhpcy5feDAgKyB4KSAvIDIsIHRoaXMuX3kwLCB0aGlzLl94MCwgeSwgeCwgeSk7XG4gICAgICAgIGVsc2UgdGhpcy5fY29udGV4dC5iZXppZXJDdXJ2ZVRvKHRoaXMuX3gwLCB0aGlzLl95MCA9ICh0aGlzLl95MCArIHkpIC8gMiwgeCwgdGhpcy5feTAsIHgsIHkpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5feDAgPSB4LCB0aGlzLl95MCA9IHk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJ1bXBYKGNvbnRleHQpIHtcbiAgcmV0dXJuIG5ldyBCdW1wKGNvbnRleHQsIHRydWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYnVtcFkoY29udGV4dCkge1xuICByZXR1cm4gbmV3IEJ1bXAoY29udGV4dCwgZmFsc2UpO1xufVxuIiwiaW1wb3J0IHtCYXNpc30gZnJvbSBcIi4vYmFzaXMuanNcIjtcblxuZnVuY3Rpb24gQnVuZGxlKGNvbnRleHQsIGJldGEpIHtcbiAgdGhpcy5fYmFzaXMgPSBuZXcgQmFzaXMoY29udGV4dCk7XG4gIHRoaXMuX2JldGEgPSBiZXRhO1xufVxuXG5CdW5kbGUucHJvdG90eXBlID0ge1xuICBsaW5lU3RhcnQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX3ggPSBbXTtcbiAgICB0aGlzLl95ID0gW107XG4gICAgdGhpcy5fYmFzaXMubGluZVN0YXJ0KCk7XG4gIH0sXG4gIGxpbmVFbmQ6IGZ1bmN0aW9uKCkge1xuICAgIHZhciB4ID0gdGhpcy5feCxcbiAgICAgICAgeSA9IHRoaXMuX3ksXG4gICAgICAgIGogPSB4Lmxlbmd0aCAtIDE7XG5cbiAgICBpZiAoaiA+IDApIHtcbiAgICAgIHZhciB4MCA9IHhbMF0sXG4gICAgICAgICAgeTAgPSB5WzBdLFxuICAgICAgICAgIGR4ID0geFtqXSAtIHgwLFxuICAgICAgICAgIGR5ID0geVtqXSAtIHkwLFxuICAgICAgICAgIGkgPSAtMSxcbiAgICAgICAgICB0O1xuXG4gICAgICB3aGlsZSAoKytpIDw9IGopIHtcbiAgICAgICAgdCA9IGkgLyBqO1xuICAgICAgICB0aGlzLl9iYXNpcy5wb2ludChcbiAgICAgICAgICB0aGlzLl9iZXRhICogeFtpXSArICgxIC0gdGhpcy5fYmV0YSkgKiAoeDAgKyB0ICogZHgpLFxuICAgICAgICAgIHRoaXMuX2JldGEgKiB5W2ldICsgKDEgLSB0aGlzLl9iZXRhKSAqICh5MCArIHQgKiBkeSlcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLl94ID0gdGhpcy5feSA9IG51bGw7XG4gICAgdGhpcy5fYmFzaXMubGluZUVuZCgpO1xuICB9LFxuICBwb2ludDogZnVuY3Rpb24oeCwgeSkge1xuICAgIHRoaXMuX3gucHVzaCgreCk7XG4gICAgdGhpcy5feS5wdXNoKCt5KTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgKGZ1bmN0aW9uIGN1c3RvbShiZXRhKSB7XG5cbiAgZnVuY3Rpb24gYnVuZGxlKGNvbnRleHQpIHtcbiAgICByZXR1cm4gYmV0YSA9PT0gMSA/IG5ldyBCYXNpcyhjb250ZXh0KSA6IG5ldyBCdW5kbGUoY29udGV4dCwgYmV0YSk7XG4gIH1cblxuICBidW5kbGUuYmV0YSA9IGZ1bmN0aW9uKGJldGEpIHtcbiAgICByZXR1cm4gY3VzdG9tKCtiZXRhKTtcbiAgfTtcblxuICByZXR1cm4gYnVuZGxlO1xufSkoMC44NSk7XG4iLCJleHBvcnQgZnVuY3Rpb24gcG9pbnQodGhhdCwgeCwgeSkge1xuICB0aGF0Ll9jb250ZXh0LmJlemllckN1cnZlVG8oXG4gICAgdGhhdC5feDEgKyB0aGF0Ll9rICogKHRoYXQuX3gyIC0gdGhhdC5feDApLFxuICAgIHRoYXQuX3kxICsgdGhhdC5fayAqICh0aGF0Ll95MiAtIHRoYXQuX3kwKSxcbiAgICB0aGF0Ll94MiArIHRoYXQuX2sgKiAodGhhdC5feDEgLSB4KSxcbiAgICB0aGF0Ll95MiArIHRoYXQuX2sgKiAodGhhdC5feTEgLSB5KSxcbiAgICB0aGF0Ll94MixcbiAgICB0aGF0Ll95MlxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gQ2FyZGluYWwoY29udGV4dCwgdGVuc2lvbikge1xuICB0aGlzLl9jb250ZXh0ID0gY29udGV4dDtcbiAgdGhpcy5fayA9ICgxIC0gdGVuc2lvbikgLyA2O1xufVxuXG5DYXJkaW5hbC5wcm90b3R5cGUgPSB7XG4gIGFyZWFTdGFydDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fbGluZSA9IDA7XG4gIH0sXG4gIGFyZWFFbmQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX2xpbmUgPSBOYU47XG4gIH0sXG4gIGxpbmVTdGFydDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5feDAgPSB0aGlzLl94MSA9IHRoaXMuX3gyID1cbiAgICB0aGlzLl95MCA9IHRoaXMuX3kxID0gdGhpcy5feTIgPSBOYU47XG4gICAgdGhpcy5fcG9pbnQgPSAwO1xuICB9LFxuICBsaW5lRW5kOiBmdW5jdGlvbigpIHtcbiAgICBzd2l0Y2ggKHRoaXMuX3BvaW50KSB7XG4gICAgICBjYXNlIDI6IHRoaXMuX2NvbnRleHQubGluZVRvKHRoaXMuX3gyLCB0aGlzLl95Mik7IGJyZWFrO1xuICAgICAgY2FzZSAzOiBwb2ludCh0aGlzLCB0aGlzLl94MSwgdGhpcy5feTEpOyBicmVhaztcbiAgICB9XG4gICAgaWYgKHRoaXMuX2xpbmUgfHwgKHRoaXMuX2xpbmUgIT09IDAgJiYgdGhpcy5fcG9pbnQgPT09IDEpKSB0aGlzLl9jb250ZXh0LmNsb3NlUGF0aCgpO1xuICAgIHRoaXMuX2xpbmUgPSAxIC0gdGhpcy5fbGluZTtcbiAgfSxcbiAgcG9pbnQ6IGZ1bmN0aW9uKHgsIHkpIHtcbiAgICB4ID0gK3gsIHkgPSAreTtcbiAgICBzd2l0Y2ggKHRoaXMuX3BvaW50KSB7XG4gICAgICBjYXNlIDA6IHRoaXMuX3BvaW50ID0gMTsgdGhpcy5fbGluZSA/IHRoaXMuX2NvbnRleHQubGluZVRvKHgsIHkpIDogdGhpcy5fY29udGV4dC5tb3ZlVG8oeCwgeSk7IGJyZWFrO1xuICAgICAgY2FzZSAxOiB0aGlzLl9wb2ludCA9IDI7IHRoaXMuX3gxID0geCwgdGhpcy5feTEgPSB5OyBicmVhaztcbiAgICAgIGNhc2UgMjogdGhpcy5fcG9pbnQgPSAzOyAvLyBmYWxscyB0aHJvdWdoXG4gICAgICBkZWZhdWx0OiBwb2ludCh0aGlzLCB4LCB5KTsgYnJlYWs7XG4gICAgfVxuICAgIHRoaXMuX3gwID0gdGhpcy5feDEsIHRoaXMuX3gxID0gdGhpcy5feDIsIHRoaXMuX3gyID0geDtcbiAgICB0aGlzLl95MCA9IHRoaXMuX3kxLCB0aGlzLl95MSA9IHRoaXMuX3kyLCB0aGlzLl95MiA9IHk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IChmdW5jdGlvbiBjdXN0b20odGVuc2lvbikge1xuXG4gIGZ1bmN0aW9uIGNhcmRpbmFsKGNvbnRleHQpIHtcbiAgICByZXR1cm4gbmV3IENhcmRpbmFsKGNvbnRleHQsIHRlbnNpb24pO1xuICB9XG5cbiAgY2FyZGluYWwudGVuc2lvbiA9IGZ1bmN0aW9uKHRlbnNpb24pIHtcbiAgICByZXR1cm4gY3VzdG9tKCt0ZW5zaW9uKTtcbiAgfTtcblxuICByZXR1cm4gY2FyZGluYWw7XG59KSgwKTtcbiIsImltcG9ydCBub29wIGZyb20gXCIuLi9ub29wLmpzXCI7XG5pbXBvcnQge3BvaW50fSBmcm9tIFwiLi9jYXJkaW5hbC5qc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gQ2FyZGluYWxDbG9zZWQoY29udGV4dCwgdGVuc2lvbikge1xuICB0aGlzLl9jb250ZXh0ID0gY29udGV4dDtcbiAgdGhpcy5fayA9ICgxIC0gdGVuc2lvbikgLyA2O1xufVxuXG5DYXJkaW5hbENsb3NlZC5wcm90b3R5cGUgPSB7XG4gIGFyZWFTdGFydDogbm9vcCxcbiAgYXJlYUVuZDogbm9vcCxcbiAgbGluZVN0YXJ0OiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl94MCA9IHRoaXMuX3gxID0gdGhpcy5feDIgPSB0aGlzLl94MyA9IHRoaXMuX3g0ID0gdGhpcy5feDUgPVxuICAgIHRoaXMuX3kwID0gdGhpcy5feTEgPSB0aGlzLl95MiA9IHRoaXMuX3kzID0gdGhpcy5feTQgPSB0aGlzLl95NSA9IE5hTjtcbiAgICB0aGlzLl9wb2ludCA9IDA7XG4gIH0sXG4gIGxpbmVFbmQ6IGZ1bmN0aW9uKCkge1xuICAgIHN3aXRjaCAodGhpcy5fcG9pbnQpIHtcbiAgICAgIGNhc2UgMToge1xuICAgICAgICB0aGlzLl9jb250ZXh0Lm1vdmVUbyh0aGlzLl94MywgdGhpcy5feTMpO1xuICAgICAgICB0aGlzLl9jb250ZXh0LmNsb3NlUGF0aCgpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgMjoge1xuICAgICAgICB0aGlzLl9jb250ZXh0LmxpbmVUbyh0aGlzLl94MywgdGhpcy5feTMpO1xuICAgICAgICB0aGlzLl9jb250ZXh0LmNsb3NlUGF0aCgpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgMzoge1xuICAgICAgICB0aGlzLnBvaW50KHRoaXMuX3gzLCB0aGlzLl95Myk7XG4gICAgICAgIHRoaXMucG9pbnQodGhpcy5feDQsIHRoaXMuX3k0KTtcbiAgICAgICAgdGhpcy5wb2ludCh0aGlzLl94NSwgdGhpcy5feTUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIHBvaW50OiBmdW5jdGlvbih4LCB5KSB7XG4gICAgeCA9ICt4LCB5ID0gK3k7XG4gICAgc3dpdGNoICh0aGlzLl9wb2ludCkge1xuICAgICAgY2FzZSAwOiB0aGlzLl9wb2ludCA9IDE7IHRoaXMuX3gzID0geCwgdGhpcy5feTMgPSB5OyBicmVhaztcbiAgICAgIGNhc2UgMTogdGhpcy5fcG9pbnQgPSAyOyB0aGlzLl9jb250ZXh0Lm1vdmVUbyh0aGlzLl94NCA9IHgsIHRoaXMuX3k0ID0geSk7IGJyZWFrO1xuICAgICAgY2FzZSAyOiB0aGlzLl9wb2ludCA9IDM7IHRoaXMuX3g1ID0geCwgdGhpcy5feTUgPSB5OyBicmVhaztcbiAgICAgIGRlZmF1bHQ6IHBvaW50KHRoaXMsIHgsIHkpOyBicmVhaztcbiAgICB9XG4gICAgdGhpcy5feDAgPSB0aGlzLl94MSwgdGhpcy5feDEgPSB0aGlzLl94MiwgdGhpcy5feDIgPSB4O1xuICAgIHRoaXMuX3kwID0gdGhpcy5feTEsIHRoaXMuX3kxID0gdGhpcy5feTIsIHRoaXMuX3kyID0geTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgKGZ1bmN0aW9uIGN1c3RvbSh0ZW5zaW9uKSB7XG5cbiAgZnVuY3Rpb24gY2FyZGluYWwoY29udGV4dCkge1xuICAgIHJldHVybiBuZXcgQ2FyZGluYWxDbG9zZWQoY29udGV4dCwgdGVuc2lvbik7XG4gIH1cblxuICBjYXJkaW5hbC50ZW5zaW9uID0gZnVuY3Rpb24odGVuc2lvbikge1xuICAgIHJldHVybiBjdXN0b20oK3RlbnNpb24pO1xuICB9O1xuXG4gIHJldHVybiBjYXJkaW5hbDtcbn0pKDApO1xuIiwiaW1wb3J0IHtwb2ludH0gZnJvbSBcIi4vY2FyZGluYWwuanNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIENhcmRpbmFsT3Blbihjb250ZXh0LCB0ZW5zaW9uKSB7XG4gIHRoaXMuX2NvbnRleHQgPSBjb250ZXh0O1xuICB0aGlzLl9rID0gKDEgLSB0ZW5zaW9uKSAvIDY7XG59XG5cbkNhcmRpbmFsT3Blbi5wcm90b3R5cGUgPSB7XG4gIGFyZWFTdGFydDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fbGluZSA9IDA7XG4gIH0sXG4gIGFyZWFFbmQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX2xpbmUgPSBOYU47XG4gIH0sXG4gIGxpbmVTdGFydDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5feDAgPSB0aGlzLl94MSA9IHRoaXMuX3gyID1cbiAgICB0aGlzLl95MCA9IHRoaXMuX3kxID0gdGhpcy5feTIgPSBOYU47XG4gICAgdGhpcy5fcG9pbnQgPSAwO1xuICB9LFxuICBsaW5lRW5kOiBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5fbGluZSB8fCAodGhpcy5fbGluZSAhPT0gMCAmJiB0aGlzLl9wb2ludCA9PT0gMykpIHRoaXMuX2NvbnRleHQuY2xvc2VQYXRoKCk7XG4gICAgdGhpcy5fbGluZSA9IDEgLSB0aGlzLl9saW5lO1xuICB9LFxuICBwb2ludDogZnVuY3Rpb24oeCwgeSkge1xuICAgIHggPSAreCwgeSA9ICt5O1xuICAgIHN3aXRjaCAodGhpcy5fcG9pbnQpIHtcbiAgICAgIGNhc2UgMDogdGhpcy5fcG9pbnQgPSAxOyBicmVhaztcbiAgICAgIGNhc2UgMTogdGhpcy5fcG9pbnQgPSAyOyBicmVhaztcbiAgICAgIGNhc2UgMjogdGhpcy5fcG9pbnQgPSAzOyB0aGlzLl9saW5lID8gdGhpcy5fY29udGV4dC5saW5lVG8odGhpcy5feDIsIHRoaXMuX3kyKSA6IHRoaXMuX2NvbnRleHQubW92ZVRvKHRoaXMuX3gyLCB0aGlzLl95Mik7IGJyZWFrO1xuICAgICAgY2FzZSAzOiB0aGlzLl9wb2ludCA9IDQ7IC8vIGZhbGxzIHRocm91Z2hcbiAgICAgIGRlZmF1bHQ6IHBvaW50KHRoaXMsIHgsIHkpOyBicmVhaztcbiAgICB9XG4gICAgdGhpcy5feDAgPSB0aGlzLl94MSwgdGhpcy5feDEgPSB0aGlzLl94MiwgdGhpcy5feDIgPSB4O1xuICAgIHRoaXMuX3kwID0gdGhpcy5feTEsIHRoaXMuX3kxID0gdGhpcy5feTIsIHRoaXMuX3kyID0geTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgKGZ1bmN0aW9uIGN1c3RvbSh0ZW5zaW9uKSB7XG5cbiAgZnVuY3Rpb24gY2FyZGluYWwoY29udGV4dCkge1xuICAgIHJldHVybiBuZXcgQ2FyZGluYWxPcGVuKGNvbnRleHQsIHRlbnNpb24pO1xuICB9XG5cbiAgY2FyZGluYWwudGVuc2lvbiA9IGZ1bmN0aW9uKHRlbnNpb24pIHtcbiAgICByZXR1cm4gY3VzdG9tKCt0ZW5zaW9uKTtcbiAgfTtcblxuICByZXR1cm4gY2FyZGluYWw7XG59KSgwKTtcbiIsImltcG9ydCB7ZXBzaWxvbn0gZnJvbSBcIi4uL21hdGguanNcIjtcbmltcG9ydCB7Q2FyZGluYWx9IGZyb20gXCIuL2NhcmRpbmFsLmpzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBwb2ludCh0aGF0LCB4LCB5KSB7XG4gIHZhciB4MSA9IHRoYXQuX3gxLFxuICAgICAgeTEgPSB0aGF0Ll95MSxcbiAgICAgIHgyID0gdGhhdC5feDIsXG4gICAgICB5MiA9IHRoYXQuX3kyO1xuXG4gIGlmICh0aGF0Ll9sMDFfYSA+IGVwc2lsb24pIHtcbiAgICB2YXIgYSA9IDIgKiB0aGF0Ll9sMDFfMmEgKyAzICogdGhhdC5fbDAxX2EgKiB0aGF0Ll9sMTJfYSArIHRoYXQuX2wxMl8yYSxcbiAgICAgICAgbiA9IDMgKiB0aGF0Ll9sMDFfYSAqICh0aGF0Ll9sMDFfYSArIHRoYXQuX2wxMl9hKTtcbiAgICB4MSA9ICh4MSAqIGEgLSB0aGF0Ll94MCAqIHRoYXQuX2wxMl8yYSArIHRoYXQuX3gyICogdGhhdC5fbDAxXzJhKSAvIG47XG4gICAgeTEgPSAoeTEgKiBhIC0gdGhhdC5feTAgKiB0aGF0Ll9sMTJfMmEgKyB0aGF0Ll95MiAqIHRoYXQuX2wwMV8yYSkgLyBuO1xuICB9XG5cbiAgaWYgKHRoYXQuX2wyM19hID4gZXBzaWxvbikge1xuICAgIHZhciBiID0gMiAqIHRoYXQuX2wyM18yYSArIDMgKiB0aGF0Ll9sMjNfYSAqIHRoYXQuX2wxMl9hICsgdGhhdC5fbDEyXzJhLFxuICAgICAgICBtID0gMyAqIHRoYXQuX2wyM19hICogKHRoYXQuX2wyM19hICsgdGhhdC5fbDEyX2EpO1xuICAgIHgyID0gKHgyICogYiArIHRoYXQuX3gxICogdGhhdC5fbDIzXzJhIC0geCAqIHRoYXQuX2wxMl8yYSkgLyBtO1xuICAgIHkyID0gKHkyICogYiArIHRoYXQuX3kxICogdGhhdC5fbDIzXzJhIC0geSAqIHRoYXQuX2wxMl8yYSkgLyBtO1xuICB9XG5cbiAgdGhhdC5fY29udGV4dC5iZXppZXJDdXJ2ZVRvKHgxLCB5MSwgeDIsIHkyLCB0aGF0Ll94MiwgdGhhdC5feTIpO1xufVxuXG5mdW5jdGlvbiBDYXRtdWxsUm9tKGNvbnRleHQsIGFscGhhKSB7XG4gIHRoaXMuX2NvbnRleHQgPSBjb250ZXh0O1xuICB0aGlzLl9hbHBoYSA9IGFscGhhO1xufVxuXG5DYXRtdWxsUm9tLnByb3RvdHlwZSA9IHtcbiAgYXJlYVN0YXJ0OiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl9saW5lID0gMDtcbiAgfSxcbiAgYXJlYUVuZDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fbGluZSA9IE5hTjtcbiAgfSxcbiAgbGluZVN0YXJ0OiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl94MCA9IHRoaXMuX3gxID0gdGhpcy5feDIgPVxuICAgIHRoaXMuX3kwID0gdGhpcy5feTEgPSB0aGlzLl95MiA9IE5hTjtcbiAgICB0aGlzLl9sMDFfYSA9IHRoaXMuX2wxMl9hID0gdGhpcy5fbDIzX2EgPVxuICAgIHRoaXMuX2wwMV8yYSA9IHRoaXMuX2wxMl8yYSA9IHRoaXMuX2wyM18yYSA9XG4gICAgdGhpcy5fcG9pbnQgPSAwO1xuICB9LFxuICBsaW5lRW5kOiBmdW5jdGlvbigpIHtcbiAgICBzd2l0Y2ggKHRoaXMuX3BvaW50KSB7XG4gICAgICBjYXNlIDI6IHRoaXMuX2NvbnRleHQubGluZVRvKHRoaXMuX3gyLCB0aGlzLl95Mik7IGJyZWFrO1xuICAgICAgY2FzZSAzOiB0aGlzLnBvaW50KHRoaXMuX3gyLCB0aGlzLl95Mik7IGJyZWFrO1xuICAgIH1cbiAgICBpZiAodGhpcy5fbGluZSB8fCAodGhpcy5fbGluZSAhPT0gMCAmJiB0aGlzLl9wb2ludCA9PT0gMSkpIHRoaXMuX2NvbnRleHQuY2xvc2VQYXRoKCk7XG4gICAgdGhpcy5fbGluZSA9IDEgLSB0aGlzLl9saW5lO1xuICB9LFxuICBwb2ludDogZnVuY3Rpb24oeCwgeSkge1xuICAgIHggPSAreCwgeSA9ICt5O1xuXG4gICAgaWYgKHRoaXMuX3BvaW50KSB7XG4gICAgICB2YXIgeDIzID0gdGhpcy5feDIgLSB4LFxuICAgICAgICAgIHkyMyA9IHRoaXMuX3kyIC0geTtcbiAgICAgIHRoaXMuX2wyM19hID0gTWF0aC5zcXJ0KHRoaXMuX2wyM18yYSA9IE1hdGgucG93KHgyMyAqIHgyMyArIHkyMyAqIHkyMywgdGhpcy5fYWxwaGEpKTtcbiAgICB9XG5cbiAgICBzd2l0Y2ggKHRoaXMuX3BvaW50KSB7XG4gICAgICBjYXNlIDA6IHRoaXMuX3BvaW50ID0gMTsgdGhpcy5fbGluZSA/IHRoaXMuX2NvbnRleHQubGluZVRvKHgsIHkpIDogdGhpcy5fY29udGV4dC5tb3ZlVG8oeCwgeSk7IGJyZWFrO1xuICAgICAgY2FzZSAxOiB0aGlzLl9wb2ludCA9IDI7IGJyZWFrO1xuICAgICAgY2FzZSAyOiB0aGlzLl9wb2ludCA9IDM7IC8vIGZhbGxzIHRocm91Z2hcbiAgICAgIGRlZmF1bHQ6IHBvaW50KHRoaXMsIHgsIHkpOyBicmVhaztcbiAgICB9XG5cbiAgICB0aGlzLl9sMDFfYSA9IHRoaXMuX2wxMl9hLCB0aGlzLl9sMTJfYSA9IHRoaXMuX2wyM19hO1xuICAgIHRoaXMuX2wwMV8yYSA9IHRoaXMuX2wxMl8yYSwgdGhpcy5fbDEyXzJhID0gdGhpcy5fbDIzXzJhO1xuICAgIHRoaXMuX3gwID0gdGhpcy5feDEsIHRoaXMuX3gxID0gdGhpcy5feDIsIHRoaXMuX3gyID0geDtcbiAgICB0aGlzLl95MCA9IHRoaXMuX3kxLCB0aGlzLl95MSA9IHRoaXMuX3kyLCB0aGlzLl95MiA9IHk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IChmdW5jdGlvbiBjdXN0b20oYWxwaGEpIHtcblxuICBmdW5jdGlvbiBjYXRtdWxsUm9tKGNvbnRleHQpIHtcbiAgICByZXR1cm4gYWxwaGEgPyBuZXcgQ2F0bXVsbFJvbShjb250ZXh0LCBhbHBoYSkgOiBuZXcgQ2FyZGluYWwoY29udGV4dCwgMCk7XG4gIH1cblxuICBjYXRtdWxsUm9tLmFscGhhID0gZnVuY3Rpb24oYWxwaGEpIHtcbiAgICByZXR1cm4gY3VzdG9tKCthbHBoYSk7XG4gIH07XG5cbiAgcmV0dXJuIGNhdG11bGxSb207XG59KSgwLjUpO1xuIiwiaW1wb3J0IHtDYXJkaW5hbENsb3NlZH0gZnJvbSBcIi4vY2FyZGluYWxDbG9zZWQuanNcIjtcbmltcG9ydCBub29wIGZyb20gXCIuLi9ub29wLmpzXCI7XG5pbXBvcnQge3BvaW50fSBmcm9tIFwiLi9jYXRtdWxsUm9tLmpzXCI7XG5cbmZ1bmN0aW9uIENhdG11bGxSb21DbG9zZWQoY29udGV4dCwgYWxwaGEpIHtcbiAgdGhpcy5fY29udGV4dCA9IGNvbnRleHQ7XG4gIHRoaXMuX2FscGhhID0gYWxwaGE7XG59XG5cbkNhdG11bGxSb21DbG9zZWQucHJvdG90eXBlID0ge1xuICBhcmVhU3RhcnQ6IG5vb3AsXG4gIGFyZWFFbmQ6IG5vb3AsXG4gIGxpbmVTdGFydDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5feDAgPSB0aGlzLl94MSA9IHRoaXMuX3gyID0gdGhpcy5feDMgPSB0aGlzLl94NCA9IHRoaXMuX3g1ID1cbiAgICB0aGlzLl95MCA9IHRoaXMuX3kxID0gdGhpcy5feTIgPSB0aGlzLl95MyA9IHRoaXMuX3k0ID0gdGhpcy5feTUgPSBOYU47XG4gICAgdGhpcy5fbDAxX2EgPSB0aGlzLl9sMTJfYSA9IHRoaXMuX2wyM19hID1cbiAgICB0aGlzLl9sMDFfMmEgPSB0aGlzLl9sMTJfMmEgPSB0aGlzLl9sMjNfMmEgPVxuICAgIHRoaXMuX3BvaW50ID0gMDtcbiAgfSxcbiAgbGluZUVuZDogZnVuY3Rpb24oKSB7XG4gICAgc3dpdGNoICh0aGlzLl9wb2ludCkge1xuICAgICAgY2FzZSAxOiB7XG4gICAgICAgIHRoaXMuX2NvbnRleHQubW92ZVRvKHRoaXMuX3gzLCB0aGlzLl95Myk7XG4gICAgICAgIHRoaXMuX2NvbnRleHQuY2xvc2VQYXRoKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSAyOiB7XG4gICAgICAgIHRoaXMuX2NvbnRleHQubGluZVRvKHRoaXMuX3gzLCB0aGlzLl95Myk7XG4gICAgICAgIHRoaXMuX2NvbnRleHQuY2xvc2VQYXRoKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSAzOiB7XG4gICAgICAgIHRoaXMucG9pbnQodGhpcy5feDMsIHRoaXMuX3kzKTtcbiAgICAgICAgdGhpcy5wb2ludCh0aGlzLl94NCwgdGhpcy5feTQpO1xuICAgICAgICB0aGlzLnBvaW50KHRoaXMuX3g1LCB0aGlzLl95NSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgcG9pbnQ6IGZ1bmN0aW9uKHgsIHkpIHtcbiAgICB4ID0gK3gsIHkgPSAreTtcblxuICAgIGlmICh0aGlzLl9wb2ludCkge1xuICAgICAgdmFyIHgyMyA9IHRoaXMuX3gyIC0geCxcbiAgICAgICAgICB5MjMgPSB0aGlzLl95MiAtIHk7XG4gICAgICB0aGlzLl9sMjNfYSA9IE1hdGguc3FydCh0aGlzLl9sMjNfMmEgPSBNYXRoLnBvdyh4MjMgKiB4MjMgKyB5MjMgKiB5MjMsIHRoaXMuX2FscGhhKSk7XG4gICAgfVxuXG4gICAgc3dpdGNoICh0aGlzLl9wb2ludCkge1xuICAgICAgY2FzZSAwOiB0aGlzLl9wb2ludCA9IDE7IHRoaXMuX3gzID0geCwgdGhpcy5feTMgPSB5OyBicmVhaztcbiAgICAgIGNhc2UgMTogdGhpcy5fcG9pbnQgPSAyOyB0aGlzLl9jb250ZXh0Lm1vdmVUbyh0aGlzLl94NCA9IHgsIHRoaXMuX3k0ID0geSk7IGJyZWFrO1xuICAgICAgY2FzZSAyOiB0aGlzLl9wb2ludCA9IDM7IHRoaXMuX3g1ID0geCwgdGhpcy5feTUgPSB5OyBicmVhaztcbiAgICAgIGRlZmF1bHQ6IHBvaW50KHRoaXMsIHgsIHkpOyBicmVhaztcbiAgICB9XG5cbiAgICB0aGlzLl9sMDFfYSA9IHRoaXMuX2wxMl9hLCB0aGlzLl9sMTJfYSA9IHRoaXMuX2wyM19hO1xuICAgIHRoaXMuX2wwMV8yYSA9IHRoaXMuX2wxMl8yYSwgdGhpcy5fbDEyXzJhID0gdGhpcy5fbDIzXzJhO1xuICAgIHRoaXMuX3gwID0gdGhpcy5feDEsIHRoaXMuX3gxID0gdGhpcy5feDIsIHRoaXMuX3gyID0geDtcbiAgICB0aGlzLl95MCA9IHRoaXMuX3kxLCB0aGlzLl95MSA9IHRoaXMuX3kyLCB0aGlzLl95MiA9IHk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IChmdW5jdGlvbiBjdXN0b20oYWxwaGEpIHtcblxuICBmdW5jdGlvbiBjYXRtdWxsUm9tKGNvbnRleHQpIHtcbiAgICByZXR1cm4gYWxwaGEgPyBuZXcgQ2F0bXVsbFJvbUNsb3NlZChjb250ZXh0LCBhbHBoYSkgOiBuZXcgQ2FyZGluYWxDbG9zZWQoY29udGV4dCwgMCk7XG4gIH1cblxuICBjYXRtdWxsUm9tLmFscGhhID0gZnVuY3Rpb24oYWxwaGEpIHtcbiAgICByZXR1cm4gY3VzdG9tKCthbHBoYSk7XG4gIH07XG5cbiAgcmV0dXJuIGNhdG11bGxSb207XG59KSgwLjUpO1xuIiwiaW1wb3J0IHtDYXJkaW5hbE9wZW59IGZyb20gXCIuL2NhcmRpbmFsT3Blbi5qc1wiO1xuaW1wb3J0IHtwb2ludH0gZnJvbSBcIi4vY2F0bXVsbFJvbS5qc1wiO1xuXG5mdW5jdGlvbiBDYXRtdWxsUm9tT3Blbihjb250ZXh0LCBhbHBoYSkge1xuICB0aGlzLl9jb250ZXh0ID0gY29udGV4dDtcbiAgdGhpcy5fYWxwaGEgPSBhbHBoYTtcbn1cblxuQ2F0bXVsbFJvbU9wZW4ucHJvdG90eXBlID0ge1xuICBhcmVhU3RhcnQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX2xpbmUgPSAwO1xuICB9LFxuICBhcmVhRW5kOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl9saW5lID0gTmFOO1xuICB9LFxuICBsaW5lU3RhcnQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX3gwID0gdGhpcy5feDEgPSB0aGlzLl94MiA9XG4gICAgdGhpcy5feTAgPSB0aGlzLl95MSA9IHRoaXMuX3kyID0gTmFOO1xuICAgIHRoaXMuX2wwMV9hID0gdGhpcy5fbDEyX2EgPSB0aGlzLl9sMjNfYSA9XG4gICAgdGhpcy5fbDAxXzJhID0gdGhpcy5fbDEyXzJhID0gdGhpcy5fbDIzXzJhID1cbiAgICB0aGlzLl9wb2ludCA9IDA7XG4gIH0sXG4gIGxpbmVFbmQ6IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLl9saW5lIHx8ICh0aGlzLl9saW5lICE9PSAwICYmIHRoaXMuX3BvaW50ID09PSAzKSkgdGhpcy5fY29udGV4dC5jbG9zZVBhdGgoKTtcbiAgICB0aGlzLl9saW5lID0gMSAtIHRoaXMuX2xpbmU7XG4gIH0sXG4gIHBvaW50OiBmdW5jdGlvbih4LCB5KSB7XG4gICAgeCA9ICt4LCB5ID0gK3k7XG5cbiAgICBpZiAodGhpcy5fcG9pbnQpIHtcbiAgICAgIHZhciB4MjMgPSB0aGlzLl94MiAtIHgsXG4gICAgICAgICAgeTIzID0gdGhpcy5feTIgLSB5O1xuICAgICAgdGhpcy5fbDIzX2EgPSBNYXRoLnNxcnQodGhpcy5fbDIzXzJhID0gTWF0aC5wb3coeDIzICogeDIzICsgeTIzICogeTIzLCB0aGlzLl9hbHBoYSkpO1xuICAgIH1cblxuICAgIHN3aXRjaCAodGhpcy5fcG9pbnQpIHtcbiAgICAgIGNhc2UgMDogdGhpcy5fcG9pbnQgPSAxOyBicmVhaztcbiAgICAgIGNhc2UgMTogdGhpcy5fcG9pbnQgPSAyOyBicmVhaztcbiAgICAgIGNhc2UgMjogdGhpcy5fcG9pbnQgPSAzOyB0aGlzLl9saW5lID8gdGhpcy5fY29udGV4dC5saW5lVG8odGhpcy5feDIsIHRoaXMuX3kyKSA6IHRoaXMuX2NvbnRleHQubW92ZVRvKHRoaXMuX3gyLCB0aGlzLl95Mik7IGJyZWFrO1xuICAgICAgY2FzZSAzOiB0aGlzLl9wb2ludCA9IDQ7IC8vIGZhbGxzIHRocm91Z2hcbiAgICAgIGRlZmF1bHQ6IHBvaW50KHRoaXMsIHgsIHkpOyBicmVhaztcbiAgICB9XG5cbiAgICB0aGlzLl9sMDFfYSA9IHRoaXMuX2wxMl9hLCB0aGlzLl9sMTJfYSA9IHRoaXMuX2wyM19hO1xuICAgIHRoaXMuX2wwMV8yYSA9IHRoaXMuX2wxMl8yYSwgdGhpcy5fbDEyXzJhID0gdGhpcy5fbDIzXzJhO1xuICAgIHRoaXMuX3gwID0gdGhpcy5feDEsIHRoaXMuX3gxID0gdGhpcy5feDIsIHRoaXMuX3gyID0geDtcbiAgICB0aGlzLl95MCA9IHRoaXMuX3kxLCB0aGlzLl95MSA9IHRoaXMuX3kyLCB0aGlzLl95MiA9IHk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IChmdW5jdGlvbiBjdXN0b20oYWxwaGEpIHtcblxuICBmdW5jdGlvbiBjYXRtdWxsUm9tKGNvbnRleHQpIHtcbiAgICByZXR1cm4gYWxwaGEgPyBuZXcgQ2F0bXVsbFJvbU9wZW4oY29udGV4dCwgYWxwaGEpIDogbmV3IENhcmRpbmFsT3Blbihjb250ZXh0LCAwKTtcbiAgfVxuXG4gIGNhdG11bGxSb20uYWxwaGEgPSBmdW5jdGlvbihhbHBoYSkge1xuICAgIHJldHVybiBjdXN0b20oK2FscGhhKTtcbiAgfTtcblxuICByZXR1cm4gY2F0bXVsbFJvbTtcbn0pKDAuNSk7XG4iLCJmdW5jdGlvbiBMaW5lYXIoY29udGV4dCkge1xuICB0aGlzLl9jb250ZXh0ID0gY29udGV4dDtcbn1cblxuTGluZWFyLnByb3RvdHlwZSA9IHtcbiAgYXJlYVN0YXJ0OiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl9saW5lID0gMDtcbiAgfSxcbiAgYXJlYUVuZDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fbGluZSA9IE5hTjtcbiAgfSxcbiAgbGluZVN0YXJ0OiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl9wb2ludCA9IDA7XG4gIH0sXG4gIGxpbmVFbmQ6IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLl9saW5lIHx8ICh0aGlzLl9saW5lICE9PSAwICYmIHRoaXMuX3BvaW50ID09PSAxKSkgdGhpcy5fY29udGV4dC5jbG9zZVBhdGgoKTtcbiAgICB0aGlzLl9saW5lID0gMSAtIHRoaXMuX2xpbmU7XG4gIH0sXG4gIHBvaW50OiBmdW5jdGlvbih4LCB5KSB7XG4gICAgeCA9ICt4LCB5ID0gK3k7XG4gICAgc3dpdGNoICh0aGlzLl9wb2ludCkge1xuICAgICAgY2FzZSAwOiB0aGlzLl9wb2ludCA9IDE7IHRoaXMuX2xpbmUgPyB0aGlzLl9jb250ZXh0LmxpbmVUbyh4LCB5KSA6IHRoaXMuX2NvbnRleHQubW92ZVRvKHgsIHkpOyBicmVhaztcbiAgICAgIGNhc2UgMTogdGhpcy5fcG9pbnQgPSAyOyAvLyBmYWxscyB0aHJvdWdoXG4gICAgICBkZWZhdWx0OiB0aGlzLl9jb250ZXh0LmxpbmVUbyh4LCB5KTsgYnJlYWs7XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihjb250ZXh0KSB7XG4gIHJldHVybiBuZXcgTGluZWFyKGNvbnRleHQpO1xufVxuIiwiaW1wb3J0IG5vb3AgZnJvbSBcIi4uL25vb3AuanNcIjtcblxuZnVuY3Rpb24gTGluZWFyQ2xvc2VkKGNvbnRleHQpIHtcbiAgdGhpcy5fY29udGV4dCA9IGNvbnRleHQ7XG59XG5cbkxpbmVhckNsb3NlZC5wcm90b3R5cGUgPSB7XG4gIGFyZWFTdGFydDogbm9vcCxcbiAgYXJlYUVuZDogbm9vcCxcbiAgbGluZVN0YXJ0OiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl9wb2ludCA9IDA7XG4gIH0sXG4gIGxpbmVFbmQ6IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLl9wb2ludCkgdGhpcy5fY29udGV4dC5jbG9zZVBhdGgoKTtcbiAgfSxcbiAgcG9pbnQ6IGZ1bmN0aW9uKHgsIHkpIHtcbiAgICB4ID0gK3gsIHkgPSAreTtcbiAgICBpZiAodGhpcy5fcG9pbnQpIHRoaXMuX2NvbnRleHQubGluZVRvKHgsIHkpO1xuICAgIGVsc2UgdGhpcy5fcG9pbnQgPSAxLCB0aGlzLl9jb250ZXh0Lm1vdmVUbyh4LCB5KTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oY29udGV4dCkge1xuICByZXR1cm4gbmV3IExpbmVhckNsb3NlZChjb250ZXh0KTtcbn1cbiIsImZ1bmN0aW9uIHNpZ24oeCkge1xuICByZXR1cm4geCA8IDAgPyAtMSA6IDE7XG59XG5cbi8vIENhbGN1bGF0ZSB0aGUgc2xvcGVzIG9mIHRoZSB0YW5nZW50cyAoSGVybWl0ZS10eXBlIGludGVycG9sYXRpb24pIGJhc2VkIG9uXG4vLyB0aGUgZm9sbG93aW5nIHBhcGVyOiBTdGVmZmVuLCBNLiAxOTkwLiBBIFNpbXBsZSBNZXRob2QgZm9yIE1vbm90b25pY1xuLy8gSW50ZXJwb2xhdGlvbiBpbiBPbmUgRGltZW5zaW9uLiBBc3Ryb25vbXkgYW5kIEFzdHJvcGh5c2ljcywgVm9sLiAyMzksIE5PLlxuLy8gTk9WKElJKSwgUC4gNDQzLCAxOTkwLlxuZnVuY3Rpb24gc2xvcGUzKHRoYXQsIHgyLCB5Mikge1xuICB2YXIgaDAgPSB0aGF0Ll94MSAtIHRoYXQuX3gwLFxuICAgICAgaDEgPSB4MiAtIHRoYXQuX3gxLFxuICAgICAgczAgPSAodGhhdC5feTEgLSB0aGF0Ll95MCkgLyAoaDAgfHwgaDEgPCAwICYmIC0wKSxcbiAgICAgIHMxID0gKHkyIC0gdGhhdC5feTEpIC8gKGgxIHx8IGgwIDwgMCAmJiAtMCksXG4gICAgICBwID0gKHMwICogaDEgKyBzMSAqIGgwKSAvIChoMCArIGgxKTtcbiAgcmV0dXJuIChzaWduKHMwKSArIHNpZ24oczEpKSAqIE1hdGgubWluKE1hdGguYWJzKHMwKSwgTWF0aC5hYnMoczEpLCAwLjUgKiBNYXRoLmFicyhwKSkgfHwgMDtcbn1cblxuLy8gQ2FsY3VsYXRlIGEgb25lLXNpZGVkIHNsb3BlLlxuZnVuY3Rpb24gc2xvcGUyKHRoYXQsIHQpIHtcbiAgdmFyIGggPSB0aGF0Ll94MSAtIHRoYXQuX3gwO1xuICByZXR1cm4gaCA/ICgzICogKHRoYXQuX3kxIC0gdGhhdC5feTApIC8gaCAtIHQpIC8gMiA6IHQ7XG59XG5cbi8vIEFjY29yZGluZyB0byBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9DdWJpY19IZXJtaXRlX3NwbGluZSNSZXByZXNlbnRhdGlvbnNcbi8vIFwieW91IGNhbiBleHByZXNzIGN1YmljIEhlcm1pdGUgaW50ZXJwb2xhdGlvbiBpbiB0ZXJtcyBvZiBjdWJpYyBCw6l6aWVyIGN1cnZlc1xuLy8gd2l0aCByZXNwZWN0IHRvIHRoZSBmb3VyIHZhbHVlcyBwMCwgcDAgKyBtMCAvIDMsIHAxIC0gbTEgLyAzLCBwMVwiLlxuZnVuY3Rpb24gcG9pbnQodGhhdCwgdDAsIHQxKSB7XG4gIHZhciB4MCA9IHRoYXQuX3gwLFxuICAgICAgeTAgPSB0aGF0Ll95MCxcbiAgICAgIHgxID0gdGhhdC5feDEsXG4gICAgICB5MSA9IHRoYXQuX3kxLFxuICAgICAgZHggPSAoeDEgLSB4MCkgLyAzO1xuICB0aGF0Ll9jb250ZXh0LmJlemllckN1cnZlVG8oeDAgKyBkeCwgeTAgKyBkeCAqIHQwLCB4MSAtIGR4LCB5MSAtIGR4ICogdDEsIHgxLCB5MSk7XG59XG5cbmZ1bmN0aW9uIE1vbm90b25lWChjb250ZXh0KSB7XG4gIHRoaXMuX2NvbnRleHQgPSBjb250ZXh0O1xufVxuXG5Nb25vdG9uZVgucHJvdG90eXBlID0ge1xuICBhcmVhU3RhcnQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX2xpbmUgPSAwO1xuICB9LFxuICBhcmVhRW5kOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl9saW5lID0gTmFOO1xuICB9LFxuICBsaW5lU3RhcnQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX3gwID0gdGhpcy5feDEgPVxuICAgIHRoaXMuX3kwID0gdGhpcy5feTEgPVxuICAgIHRoaXMuX3QwID0gTmFOO1xuICAgIHRoaXMuX3BvaW50ID0gMDtcbiAgfSxcbiAgbGluZUVuZDogZnVuY3Rpb24oKSB7XG4gICAgc3dpdGNoICh0aGlzLl9wb2ludCkge1xuICAgICAgY2FzZSAyOiB0aGlzLl9jb250ZXh0LmxpbmVUbyh0aGlzLl94MSwgdGhpcy5feTEpOyBicmVhaztcbiAgICAgIGNhc2UgMzogcG9pbnQodGhpcywgdGhpcy5fdDAsIHNsb3BlMih0aGlzLCB0aGlzLl90MCkpOyBicmVhaztcbiAgICB9XG4gICAgaWYgKHRoaXMuX2xpbmUgfHwgKHRoaXMuX2xpbmUgIT09IDAgJiYgdGhpcy5fcG9pbnQgPT09IDEpKSB0aGlzLl9jb250ZXh0LmNsb3NlUGF0aCgpO1xuICAgIHRoaXMuX2xpbmUgPSAxIC0gdGhpcy5fbGluZTtcbiAgfSxcbiAgcG9pbnQ6IGZ1bmN0aW9uKHgsIHkpIHtcbiAgICB2YXIgdDEgPSBOYU47XG5cbiAgICB4ID0gK3gsIHkgPSAreTtcbiAgICBpZiAoeCA9PT0gdGhpcy5feDEgJiYgeSA9PT0gdGhpcy5feTEpIHJldHVybjsgLy8gSWdub3JlIGNvaW5jaWRlbnQgcG9pbnRzLlxuICAgIHN3aXRjaCAodGhpcy5fcG9pbnQpIHtcbiAgICAgIGNhc2UgMDogdGhpcy5fcG9pbnQgPSAxOyB0aGlzLl9saW5lID8gdGhpcy5fY29udGV4dC5saW5lVG8oeCwgeSkgOiB0aGlzLl9jb250ZXh0Lm1vdmVUbyh4LCB5KTsgYnJlYWs7XG4gICAgICBjYXNlIDE6IHRoaXMuX3BvaW50ID0gMjsgYnJlYWs7XG4gICAgICBjYXNlIDI6IHRoaXMuX3BvaW50ID0gMzsgcG9pbnQodGhpcywgc2xvcGUyKHRoaXMsIHQxID0gc2xvcGUzKHRoaXMsIHgsIHkpKSwgdDEpOyBicmVhaztcbiAgICAgIGRlZmF1bHQ6IHBvaW50KHRoaXMsIHRoaXMuX3QwLCB0MSA9IHNsb3BlMyh0aGlzLCB4LCB5KSk7IGJyZWFrO1xuICAgIH1cblxuICAgIHRoaXMuX3gwID0gdGhpcy5feDEsIHRoaXMuX3gxID0geDtcbiAgICB0aGlzLl95MCA9IHRoaXMuX3kxLCB0aGlzLl95MSA9IHk7XG4gICAgdGhpcy5fdDAgPSB0MTtcbiAgfVxufVxuXG5mdW5jdGlvbiBNb25vdG9uZVkoY29udGV4dCkge1xuICB0aGlzLl9jb250ZXh0ID0gbmV3IFJlZmxlY3RDb250ZXh0KGNvbnRleHQpO1xufVxuXG4oTW9ub3RvbmVZLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoTW9ub3RvbmVYLnByb3RvdHlwZSkpLnBvaW50ID0gZnVuY3Rpb24oeCwgeSkge1xuICBNb25vdG9uZVgucHJvdG90eXBlLnBvaW50LmNhbGwodGhpcywgeSwgeCk7XG59O1xuXG5mdW5jdGlvbiBSZWZsZWN0Q29udGV4dChjb250ZXh0KSB7XG4gIHRoaXMuX2NvbnRleHQgPSBjb250ZXh0O1xufVxuXG5SZWZsZWN0Q29udGV4dC5wcm90b3R5cGUgPSB7XG4gIG1vdmVUbzogZnVuY3Rpb24oeCwgeSkgeyB0aGlzLl9jb250ZXh0Lm1vdmVUbyh5LCB4KTsgfSxcbiAgY2xvc2VQYXRoOiBmdW5jdGlvbigpIHsgdGhpcy5fY29udGV4dC5jbG9zZVBhdGgoKTsgfSxcbiAgbGluZVRvOiBmdW5jdGlvbih4LCB5KSB7IHRoaXMuX2NvbnRleHQubGluZVRvKHksIHgpOyB9LFxuICBiZXppZXJDdXJ2ZVRvOiBmdW5jdGlvbih4MSwgeTEsIHgyLCB5MiwgeCwgeSkgeyB0aGlzLl9jb250ZXh0LmJlemllckN1cnZlVG8oeTEsIHgxLCB5MiwgeDIsIHksIHgpOyB9XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gbW9ub3RvbmVYKGNvbnRleHQpIHtcbiAgcmV0dXJuIG5ldyBNb25vdG9uZVgoY29udGV4dCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtb25vdG9uZVkoY29udGV4dCkge1xuICByZXR1cm4gbmV3IE1vbm90b25lWShjb250ZXh0KTtcbn1cbiIsImZ1bmN0aW9uIE5hdHVyYWwoY29udGV4dCkge1xuICB0aGlzLl9jb250ZXh0ID0gY29udGV4dDtcbn1cblxuTmF0dXJhbC5wcm90b3R5cGUgPSB7XG4gIGFyZWFTdGFydDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fbGluZSA9IDA7XG4gIH0sXG4gIGFyZWFFbmQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX2xpbmUgPSBOYU47XG4gIH0sXG4gIGxpbmVTdGFydDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5feCA9IFtdO1xuICAgIHRoaXMuX3kgPSBbXTtcbiAgfSxcbiAgbGluZUVuZDogZnVuY3Rpb24oKSB7XG4gICAgdmFyIHggPSB0aGlzLl94LFxuICAgICAgICB5ID0gdGhpcy5feSxcbiAgICAgICAgbiA9IHgubGVuZ3RoO1xuXG4gICAgaWYgKG4pIHtcbiAgICAgIHRoaXMuX2xpbmUgPyB0aGlzLl9jb250ZXh0LmxpbmVUbyh4WzBdLCB5WzBdKSA6IHRoaXMuX2NvbnRleHQubW92ZVRvKHhbMF0sIHlbMF0pO1xuICAgICAgaWYgKG4gPT09IDIpIHtcbiAgICAgICAgdGhpcy5fY29udGV4dC5saW5lVG8oeFsxXSwgeVsxXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgcHggPSBjb250cm9sUG9pbnRzKHgpLFxuICAgICAgICAgICAgcHkgPSBjb250cm9sUG9pbnRzKHkpO1xuICAgICAgICBmb3IgKHZhciBpMCA9IDAsIGkxID0gMTsgaTEgPCBuOyArK2kwLCArK2kxKSB7XG4gICAgICAgICAgdGhpcy5fY29udGV4dC5iZXppZXJDdXJ2ZVRvKHB4WzBdW2kwXSwgcHlbMF1baTBdLCBweFsxXVtpMF0sIHB5WzFdW2kwXSwgeFtpMV0sIHlbaTFdKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLl9saW5lIHx8ICh0aGlzLl9saW5lICE9PSAwICYmIG4gPT09IDEpKSB0aGlzLl9jb250ZXh0LmNsb3NlUGF0aCgpO1xuICAgIHRoaXMuX2xpbmUgPSAxIC0gdGhpcy5fbGluZTtcbiAgICB0aGlzLl94ID0gdGhpcy5feSA9IG51bGw7XG4gIH0sXG4gIHBvaW50OiBmdW5jdGlvbih4LCB5KSB7XG4gICAgdGhpcy5feC5wdXNoKCt4KTtcbiAgICB0aGlzLl95LnB1c2goK3kpO1xuICB9XG59O1xuXG4vLyBTZWUgaHR0cHM6Ly93d3cucGFydGljbGVpbmNlbGwuY29tLzIwMTIvYmV6aWVyLXNwbGluZXMvIGZvciBkZXJpdmF0aW9uLlxuZnVuY3Rpb24gY29udHJvbFBvaW50cyh4KSB7XG4gIHZhciBpLFxuICAgICAgbiA9IHgubGVuZ3RoIC0gMSxcbiAgICAgIG0sXG4gICAgICBhID0gbmV3IEFycmF5KG4pLFxuICAgICAgYiA9IG5ldyBBcnJheShuKSxcbiAgICAgIHIgPSBuZXcgQXJyYXkobik7XG4gIGFbMF0gPSAwLCBiWzBdID0gMiwgclswXSA9IHhbMF0gKyAyICogeFsxXTtcbiAgZm9yIChpID0gMTsgaSA8IG4gLSAxOyArK2kpIGFbaV0gPSAxLCBiW2ldID0gNCwgcltpXSA9IDQgKiB4W2ldICsgMiAqIHhbaSArIDFdO1xuICBhW24gLSAxXSA9IDIsIGJbbiAtIDFdID0gNywgcltuIC0gMV0gPSA4ICogeFtuIC0gMV0gKyB4W25dO1xuICBmb3IgKGkgPSAxOyBpIDwgbjsgKytpKSBtID0gYVtpXSAvIGJbaSAtIDFdLCBiW2ldIC09IG0sIHJbaV0gLT0gbSAqIHJbaSAtIDFdO1xuICBhW24gLSAxXSA9IHJbbiAtIDFdIC8gYltuIC0gMV07XG4gIGZvciAoaSA9IG4gLSAyOyBpID49IDA7IC0taSkgYVtpXSA9IChyW2ldIC0gYVtpICsgMV0pIC8gYltpXTtcbiAgYltuIC0gMV0gPSAoeFtuXSArIGFbbiAtIDFdKSAvIDI7XG4gIGZvciAoaSA9IDA7IGkgPCBuIC0gMTsgKytpKSBiW2ldID0gMiAqIHhbaSArIDFdIC0gYVtpICsgMV07XG4gIHJldHVybiBbYSwgYl07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGNvbnRleHQpIHtcbiAgcmV0dXJuIG5ldyBOYXR1cmFsKGNvbnRleHQpO1xufVxuIiwiaW1wb3J0IGN1cnZlTGluZWFyIGZyb20gXCIuL2xpbmVhci5qc1wiO1xuXG5leHBvcnQgdmFyIGN1cnZlUmFkaWFsTGluZWFyID0gY3VydmVSYWRpYWwoY3VydmVMaW5lYXIpO1xuXG5mdW5jdGlvbiBSYWRpYWwoY3VydmUpIHtcbiAgdGhpcy5fY3VydmUgPSBjdXJ2ZTtcbn1cblxuUmFkaWFsLnByb3RvdHlwZSA9IHtcbiAgYXJlYVN0YXJ0OiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl9jdXJ2ZS5hcmVhU3RhcnQoKTtcbiAgfSxcbiAgYXJlYUVuZDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fY3VydmUuYXJlYUVuZCgpO1xuICB9LFxuICBsaW5lU3RhcnQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX2N1cnZlLmxpbmVTdGFydCgpO1xuICB9LFxuICBsaW5lRW5kOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl9jdXJ2ZS5saW5lRW5kKCk7XG4gIH0sXG4gIHBvaW50OiBmdW5jdGlvbihhLCByKSB7XG4gICAgdGhpcy5fY3VydmUucG9pbnQociAqIE1hdGguc2luKGEpLCByICogLU1hdGguY29zKGEpKTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3VydmVSYWRpYWwoY3VydmUpIHtcblxuICBmdW5jdGlvbiByYWRpYWwoY29udGV4dCkge1xuICAgIHJldHVybiBuZXcgUmFkaWFsKGN1cnZlKGNvbnRleHQpKTtcbiAgfVxuXG4gIHJhZGlhbC5fY3VydmUgPSBjdXJ2ZTtcblxuICByZXR1cm4gcmFkaWFsO1xufVxuIiwiZnVuY3Rpb24gU3RlcChjb250ZXh0LCB0KSB7XG4gIHRoaXMuX2NvbnRleHQgPSBjb250ZXh0O1xuICB0aGlzLl90ID0gdDtcbn1cblxuU3RlcC5wcm90b3R5cGUgPSB7XG4gIGFyZWFTdGFydDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fbGluZSA9IDA7XG4gIH0sXG4gIGFyZWFFbmQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX2xpbmUgPSBOYU47XG4gIH0sXG4gIGxpbmVTdGFydDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5feCA9IHRoaXMuX3kgPSBOYU47XG4gICAgdGhpcy5fcG9pbnQgPSAwO1xuICB9LFxuICBsaW5lRW5kOiBmdW5jdGlvbigpIHtcbiAgICBpZiAoMCA8IHRoaXMuX3QgJiYgdGhpcy5fdCA8IDEgJiYgdGhpcy5fcG9pbnQgPT09IDIpIHRoaXMuX2NvbnRleHQubGluZVRvKHRoaXMuX3gsIHRoaXMuX3kpO1xuICAgIGlmICh0aGlzLl9saW5lIHx8ICh0aGlzLl9saW5lICE9PSAwICYmIHRoaXMuX3BvaW50ID09PSAxKSkgdGhpcy5fY29udGV4dC5jbG9zZVBhdGgoKTtcbiAgICBpZiAodGhpcy5fbGluZSA+PSAwKSB0aGlzLl90ID0gMSAtIHRoaXMuX3QsIHRoaXMuX2xpbmUgPSAxIC0gdGhpcy5fbGluZTtcbiAgfSxcbiAgcG9pbnQ6IGZ1bmN0aW9uKHgsIHkpIHtcbiAgICB4ID0gK3gsIHkgPSAreTtcbiAgICBzd2l0Y2ggKHRoaXMuX3BvaW50KSB7XG4gICAgICBjYXNlIDA6IHRoaXMuX3BvaW50ID0gMTsgdGhpcy5fbGluZSA/IHRoaXMuX2NvbnRleHQubGluZVRvKHgsIHkpIDogdGhpcy5fY29udGV4dC5tb3ZlVG8oeCwgeSk7IGJyZWFrO1xuICAgICAgY2FzZSAxOiB0aGlzLl9wb2ludCA9IDI7IC8vIGZhbGxzIHRocm91Z2hcbiAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgaWYgKHRoaXMuX3QgPD0gMCkge1xuICAgICAgICAgIHRoaXMuX2NvbnRleHQubGluZVRvKHRoaXMuX3gsIHkpO1xuICAgICAgICAgIHRoaXMuX2NvbnRleHQubGluZVRvKHgsIHkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciB4MSA9IHRoaXMuX3ggKiAoMSAtIHRoaXMuX3QpICsgeCAqIHRoaXMuX3Q7XG4gICAgICAgICAgdGhpcy5fY29udGV4dC5saW5lVG8oeDEsIHRoaXMuX3kpO1xuICAgICAgICAgIHRoaXMuX2NvbnRleHQubGluZVRvKHgxLCB5KTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5feCA9IHgsIHRoaXMuX3kgPSB5O1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihjb250ZXh0KSB7XG4gIHJldHVybiBuZXcgU3RlcChjb250ZXh0LCAwLjUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RlcEJlZm9yZShjb250ZXh0KSB7XG4gIHJldHVybiBuZXcgU3RlcChjb250ZXh0LCAwKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0ZXBBZnRlcihjb250ZXh0KSB7XG4gIHJldHVybiBuZXcgU3RlcChjb250ZXh0LCAxKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGEsIGIpIHtcbiAgcmV0dXJuIGIgPCBhID8gLTEgOiBiID4gYSA/IDEgOiBiID49IGEgPyAwIDogTmFOO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oZCkge1xuICByZXR1cm4gZDtcbn1cbiIsImV4cG9ydCB7ZGVmYXVsdCBhcyBhcmN9IGZyb20gXCIuL2FyYy5qc1wiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGFyZWF9IGZyb20gXCIuL2FyZWEuanNcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBsaW5lfSBmcm9tIFwiLi9saW5lLmpzXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgcGllfSBmcm9tIFwiLi9waWUuanNcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBhcmVhUmFkaWFsLCBkZWZhdWx0IGFzIHJhZGlhbEFyZWF9IGZyb20gXCIuL2FyZWFSYWRpYWwuanNcIjsgLy8gTm90ZTogcmFkaWFsQXJlYSBpcyBkZXByZWNhdGVkIVxuZXhwb3J0IHtkZWZhdWx0IGFzIGxpbmVSYWRpYWwsIGRlZmF1bHQgYXMgcmFkaWFsTGluZX0gZnJvbSBcIi4vbGluZVJhZGlhbC5qc1wiOyAvLyBOb3RlOiByYWRpYWxMaW5lIGlzIGRlcHJlY2F0ZWQhXG5leHBvcnQge2RlZmF1bHQgYXMgcG9pbnRSYWRpYWx9IGZyb20gXCIuL3BvaW50UmFkaWFsLmpzXCI7XG5leHBvcnQge2xpbmtIb3Jpem9udGFsLCBsaW5rVmVydGljYWwsIGxpbmtSYWRpYWx9IGZyb20gXCIuL2xpbmsvaW5kZXguanNcIjtcblxuZXhwb3J0IHtkZWZhdWx0IGFzIHN5bWJvbCwgc3ltYm9sc30gZnJvbSBcIi4vc3ltYm9sLmpzXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgc3ltYm9sQ2lyY2xlfSBmcm9tIFwiLi9zeW1ib2wvY2lyY2xlLmpzXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgc3ltYm9sQ3Jvc3N9IGZyb20gXCIuL3N5bWJvbC9jcm9zcy5qc1wiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIHN5bWJvbERpYW1vbmR9IGZyb20gXCIuL3N5bWJvbC9kaWFtb25kLmpzXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgc3ltYm9sU3F1YXJlfSBmcm9tIFwiLi9zeW1ib2wvc3F1YXJlLmpzXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgc3ltYm9sU3Rhcn0gZnJvbSBcIi4vc3ltYm9sL3N0YXIuanNcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBzeW1ib2xUcmlhbmdsZX0gZnJvbSBcIi4vc3ltYm9sL3RyaWFuZ2xlLmpzXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgc3ltYm9sV3llfSBmcm9tIFwiLi9zeW1ib2wvd3llLmpzXCI7XG5cbmV4cG9ydCB7ZGVmYXVsdCBhcyBjdXJ2ZUJhc2lzQ2xvc2VkfSBmcm9tIFwiLi9jdXJ2ZS9iYXNpc0Nsb3NlZC5qc1wiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGN1cnZlQmFzaXNPcGVufSBmcm9tIFwiLi9jdXJ2ZS9iYXNpc09wZW4uanNcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBjdXJ2ZUJhc2lzfSBmcm9tIFwiLi9jdXJ2ZS9iYXNpcy5qc1wiO1xuZXhwb3J0IHtidW1wWCBhcyBjdXJ2ZUJ1bXBYLCBidW1wWSBhcyBjdXJ2ZUJ1bXBZfSBmcm9tIFwiLi9jdXJ2ZS9idW1wLmpzXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgY3VydmVCdW5kbGV9IGZyb20gXCIuL2N1cnZlL2J1bmRsZS5qc1wiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGN1cnZlQ2FyZGluYWxDbG9zZWR9IGZyb20gXCIuL2N1cnZlL2NhcmRpbmFsQ2xvc2VkLmpzXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgY3VydmVDYXJkaW5hbE9wZW59IGZyb20gXCIuL2N1cnZlL2NhcmRpbmFsT3Blbi5qc1wiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGN1cnZlQ2FyZGluYWx9IGZyb20gXCIuL2N1cnZlL2NhcmRpbmFsLmpzXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgY3VydmVDYXRtdWxsUm9tQ2xvc2VkfSBmcm9tIFwiLi9jdXJ2ZS9jYXRtdWxsUm9tQ2xvc2VkLmpzXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgY3VydmVDYXRtdWxsUm9tT3Blbn0gZnJvbSBcIi4vY3VydmUvY2F0bXVsbFJvbU9wZW4uanNcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBjdXJ2ZUNhdG11bGxSb219IGZyb20gXCIuL2N1cnZlL2NhdG11bGxSb20uanNcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBjdXJ2ZUxpbmVhckNsb3NlZH0gZnJvbSBcIi4vY3VydmUvbGluZWFyQ2xvc2VkLmpzXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgY3VydmVMaW5lYXJ9IGZyb20gXCIuL2N1cnZlL2xpbmVhci5qc1wiO1xuZXhwb3J0IHttb25vdG9uZVggYXMgY3VydmVNb25vdG9uZVgsIG1vbm90b25lWSBhcyBjdXJ2ZU1vbm90b25lWX0gZnJvbSBcIi4vY3VydmUvbW9ub3RvbmUuanNcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBjdXJ2ZU5hdHVyYWx9IGZyb20gXCIuL2N1cnZlL25hdHVyYWwuanNcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBjdXJ2ZVN0ZXAsIHN0ZXBBZnRlciBhcyBjdXJ2ZVN0ZXBBZnRlciwgc3RlcEJlZm9yZSBhcyBjdXJ2ZVN0ZXBCZWZvcmV9IGZyb20gXCIuL2N1cnZlL3N0ZXAuanNcIjtcblxuZXhwb3J0IHtkZWZhdWx0IGFzIHN0YWNrfSBmcm9tIFwiLi9zdGFjay5qc1wiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIHN0YWNrT2Zmc2V0RXhwYW5kfSBmcm9tIFwiLi9vZmZzZXQvZXhwYW5kLmpzXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgc3RhY2tPZmZzZXREaXZlcmdpbmd9IGZyb20gXCIuL29mZnNldC9kaXZlcmdpbmcuanNcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBzdGFja09mZnNldE5vbmV9IGZyb20gXCIuL29mZnNldC9ub25lLmpzXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgc3RhY2tPZmZzZXRTaWxob3VldHRlfSBmcm9tIFwiLi9vZmZzZXQvc2lsaG91ZXR0ZS5qc1wiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIHN0YWNrT2Zmc2V0V2lnZ2xlfSBmcm9tIFwiLi9vZmZzZXQvd2lnZ2xlLmpzXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgc3RhY2tPcmRlckFwcGVhcmFuY2V9IGZyb20gXCIuL29yZGVyL2FwcGVhcmFuY2UuanNcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBzdGFja09yZGVyQXNjZW5kaW5nfSBmcm9tIFwiLi9vcmRlci9hc2NlbmRpbmcuanNcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBzdGFja09yZGVyRGVzY2VuZGluZ30gZnJvbSBcIi4vb3JkZXIvZGVzY2VuZGluZy5qc1wiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIHN0YWNrT3JkZXJJbnNpZGVPdXR9IGZyb20gXCIuL29yZGVyL2luc2lkZU91dC5qc1wiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIHN0YWNrT3JkZXJOb25lfSBmcm9tIFwiLi9vcmRlci9ub25lLmpzXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgc3RhY2tPcmRlclJldmVyc2V9IGZyb20gXCIuL29yZGVyL3JldmVyc2UuanNcIjtcbiIsImltcG9ydCB7cGF0aH0gZnJvbSBcImQzLXBhdGhcIjtcbmltcG9ydCBhcnJheSBmcm9tIFwiLi9hcnJheS5qc1wiO1xuaW1wb3J0IGNvbnN0YW50IGZyb20gXCIuL2NvbnN0YW50LmpzXCI7XG5pbXBvcnQgY3VydmVMaW5lYXIgZnJvbSBcIi4vY3VydmUvbGluZWFyLmpzXCI7XG5pbXBvcnQge3ggYXMgcG9pbnRYLCB5IGFzIHBvaW50WX0gZnJvbSBcIi4vcG9pbnQuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oeCwgeSkge1xuICB2YXIgZGVmaW5lZCA9IGNvbnN0YW50KHRydWUpLFxuICAgICAgY29udGV4dCA9IG51bGwsXG4gICAgICBjdXJ2ZSA9IGN1cnZlTGluZWFyLFxuICAgICAgb3V0cHV0ID0gbnVsbDtcblxuICB4ID0gdHlwZW9mIHggPT09IFwiZnVuY3Rpb25cIiA/IHggOiAoeCA9PT0gdW5kZWZpbmVkKSA/IHBvaW50WCA6IGNvbnN0YW50KHgpO1xuICB5ID0gdHlwZW9mIHkgPT09IFwiZnVuY3Rpb25cIiA/IHkgOiAoeSA9PT0gdW5kZWZpbmVkKSA/IHBvaW50WSA6IGNvbnN0YW50KHkpO1xuXG4gIGZ1bmN0aW9uIGxpbmUoZGF0YSkge1xuICAgIHZhciBpLFxuICAgICAgICBuID0gKGRhdGEgPSBhcnJheShkYXRhKSkubGVuZ3RoLFxuICAgICAgICBkLFxuICAgICAgICBkZWZpbmVkMCA9IGZhbHNlLFxuICAgICAgICBidWZmZXI7XG5cbiAgICBpZiAoY29udGV4dCA9PSBudWxsKSBvdXRwdXQgPSBjdXJ2ZShidWZmZXIgPSBwYXRoKCkpO1xuXG4gICAgZm9yIChpID0gMDsgaSA8PSBuOyArK2kpIHtcbiAgICAgIGlmICghKGkgPCBuICYmIGRlZmluZWQoZCA9IGRhdGFbaV0sIGksIGRhdGEpKSA9PT0gZGVmaW5lZDApIHtcbiAgICAgICAgaWYgKGRlZmluZWQwID0gIWRlZmluZWQwKSBvdXRwdXQubGluZVN0YXJ0KCk7XG4gICAgICAgIGVsc2Ugb3V0cHV0LmxpbmVFbmQoKTtcbiAgICAgIH1cbiAgICAgIGlmIChkZWZpbmVkMCkgb3V0cHV0LnBvaW50KCt4KGQsIGksIGRhdGEpLCAreShkLCBpLCBkYXRhKSk7XG4gICAgfVxuXG4gICAgaWYgKGJ1ZmZlcikgcmV0dXJuIG91dHB1dCA9IG51bGwsIGJ1ZmZlciArIFwiXCIgfHwgbnVsbDtcbiAgfVxuXG4gIGxpbmUueCA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/ICh4ID0gdHlwZW9mIF8gPT09IFwiZnVuY3Rpb25cIiA/IF8gOiBjb25zdGFudCgrXyksIGxpbmUpIDogeDtcbiAgfTtcblxuICBsaW5lLnkgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoeSA9IHR5cGVvZiBfID09PSBcImZ1bmN0aW9uXCIgPyBfIDogY29uc3RhbnQoK18pLCBsaW5lKSA6IHk7XG4gIH07XG5cbiAgbGluZS5kZWZpbmVkID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKGRlZmluZWQgPSB0eXBlb2YgXyA9PT0gXCJmdW5jdGlvblwiID8gXyA6IGNvbnN0YW50KCEhXyksIGxpbmUpIDogZGVmaW5lZDtcbiAgfTtcblxuICBsaW5lLmN1cnZlID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKGN1cnZlID0gXywgY29udGV4dCAhPSBudWxsICYmIChvdXRwdXQgPSBjdXJ2ZShjb250ZXh0KSksIGxpbmUpIDogY3VydmU7XG4gIH07XG5cbiAgbGluZS5jb250ZXh0ID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKF8gPT0gbnVsbCA/IGNvbnRleHQgPSBvdXRwdXQgPSBudWxsIDogb3V0cHV0ID0gY3VydmUoY29udGV4dCA9IF8pLCBsaW5lKSA6IGNvbnRleHQ7XG4gIH07XG5cbiAgcmV0dXJuIGxpbmU7XG59XG4iLCJpbXBvcnQgY3VydmVSYWRpYWwsIHtjdXJ2ZVJhZGlhbExpbmVhcn0gZnJvbSBcIi4vY3VydmUvcmFkaWFsLmpzXCI7XG5pbXBvcnQgbGluZSBmcm9tIFwiLi9saW5lLmpzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBsaW5lUmFkaWFsKGwpIHtcbiAgdmFyIGMgPSBsLmN1cnZlO1xuXG4gIGwuYW5nbGUgPSBsLngsIGRlbGV0ZSBsLng7XG4gIGwucmFkaXVzID0gbC55LCBkZWxldGUgbC55O1xuXG4gIGwuY3VydmUgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyBjKGN1cnZlUmFkaWFsKF8pKSA6IGMoKS5fY3VydmU7XG4gIH07XG5cbiAgcmV0dXJuIGw7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbGluZVJhZGlhbChsaW5lKCkuY3VydmUoY3VydmVSYWRpYWxMaW5lYXIpKTtcbn1cbiIsImltcG9ydCB7cGF0aH0gZnJvbSBcImQzLXBhdGhcIjtcbmltcG9ydCB7c2xpY2V9IGZyb20gXCIuLi9hcnJheS5qc1wiO1xuaW1wb3J0IGNvbnN0YW50IGZyb20gXCIuLi9jb25zdGFudC5qc1wiO1xuaW1wb3J0IHt4IGFzIHBvaW50WCwgeSBhcyBwb2ludFl9IGZyb20gXCIuLi9wb2ludC5qc1wiO1xuaW1wb3J0IHBvaW50UmFkaWFsIGZyb20gXCIuLi9wb2ludFJhZGlhbC5qc1wiO1xuXG5mdW5jdGlvbiBsaW5rU291cmNlKGQpIHtcbiAgcmV0dXJuIGQuc291cmNlO1xufVxuXG5mdW5jdGlvbiBsaW5rVGFyZ2V0KGQpIHtcbiAgcmV0dXJuIGQudGFyZ2V0O1xufVxuXG5mdW5jdGlvbiBsaW5rKGN1cnZlKSB7XG4gIHZhciBzb3VyY2UgPSBsaW5rU291cmNlLFxuICAgICAgdGFyZ2V0ID0gbGlua1RhcmdldCxcbiAgICAgIHggPSBwb2ludFgsXG4gICAgICB5ID0gcG9pbnRZLFxuICAgICAgY29udGV4dCA9IG51bGw7XG5cbiAgZnVuY3Rpb24gbGluaygpIHtcbiAgICB2YXIgYnVmZmVyLCBhcmd2ID0gc2xpY2UuY2FsbChhcmd1bWVudHMpLCBzID0gc291cmNlLmFwcGx5KHRoaXMsIGFyZ3YpLCB0ID0gdGFyZ2V0LmFwcGx5KHRoaXMsIGFyZ3YpO1xuICAgIGlmICghY29udGV4dCkgY29udGV4dCA9IGJ1ZmZlciA9IHBhdGgoKTtcbiAgICBjdXJ2ZShjb250ZXh0LCAreC5hcHBseSh0aGlzLCAoYXJndlswXSA9IHMsIGFyZ3YpKSwgK3kuYXBwbHkodGhpcywgYXJndiksICt4LmFwcGx5KHRoaXMsIChhcmd2WzBdID0gdCwgYXJndikpLCAreS5hcHBseSh0aGlzLCBhcmd2KSk7XG4gICAgaWYgKGJ1ZmZlcikgcmV0dXJuIGNvbnRleHQgPSBudWxsLCBidWZmZXIgKyBcIlwiIHx8IG51bGw7XG4gIH1cblxuICBsaW5rLnNvdXJjZSA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChzb3VyY2UgPSBfLCBsaW5rKSA6IHNvdXJjZTtcbiAgfTtcblxuICBsaW5rLnRhcmdldCA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/ICh0YXJnZXQgPSBfLCBsaW5rKSA6IHRhcmdldDtcbiAgfTtcblxuICBsaW5rLnggPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoeCA9IHR5cGVvZiBfID09PSBcImZ1bmN0aW9uXCIgPyBfIDogY29uc3RhbnQoK18pLCBsaW5rKSA6IHg7XG4gIH07XG5cbiAgbGluay55ID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKHkgPSB0eXBlb2YgXyA9PT0gXCJmdW5jdGlvblwiID8gXyA6IGNvbnN0YW50KCtfKSwgbGluaykgOiB5O1xuICB9O1xuXG4gIGxpbmsuY29udGV4dCA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/ICgoY29udGV4dCA9IF8gPT0gbnVsbCA/IG51bGwgOiBfKSwgbGluaykgOiBjb250ZXh0O1xuICB9O1xuXG4gIHJldHVybiBsaW5rO1xufVxuXG5mdW5jdGlvbiBjdXJ2ZUhvcml6b250YWwoY29udGV4dCwgeDAsIHkwLCB4MSwgeTEpIHtcbiAgY29udGV4dC5tb3ZlVG8oeDAsIHkwKTtcbiAgY29udGV4dC5iZXppZXJDdXJ2ZVRvKHgwID0gKHgwICsgeDEpIC8gMiwgeTAsIHgwLCB5MSwgeDEsIHkxKTtcbn1cblxuZnVuY3Rpb24gY3VydmVWZXJ0aWNhbChjb250ZXh0LCB4MCwgeTAsIHgxLCB5MSkge1xuICBjb250ZXh0Lm1vdmVUbyh4MCwgeTApO1xuICBjb250ZXh0LmJlemllckN1cnZlVG8oeDAsIHkwID0gKHkwICsgeTEpIC8gMiwgeDEsIHkwLCB4MSwgeTEpO1xufVxuXG5mdW5jdGlvbiBjdXJ2ZVJhZGlhbChjb250ZXh0LCB4MCwgeTAsIHgxLCB5MSkge1xuICB2YXIgcDAgPSBwb2ludFJhZGlhbCh4MCwgeTApLFxuICAgICAgcDEgPSBwb2ludFJhZGlhbCh4MCwgeTAgPSAoeTAgKyB5MSkgLyAyKSxcbiAgICAgIHAyID0gcG9pbnRSYWRpYWwoeDEsIHkwKSxcbiAgICAgIHAzID0gcG9pbnRSYWRpYWwoeDEsIHkxKTtcbiAgY29udGV4dC5tb3ZlVG8ocDBbMF0sIHAwWzFdKTtcbiAgY29udGV4dC5iZXppZXJDdXJ2ZVRvKHAxWzBdLCBwMVsxXSwgcDJbMF0sIHAyWzFdLCBwM1swXSwgcDNbMV0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGlua0hvcml6b250YWwoKSB7XG4gIHJldHVybiBsaW5rKGN1cnZlSG9yaXpvbnRhbCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsaW5rVmVydGljYWwoKSB7XG4gIHJldHVybiBsaW5rKGN1cnZlVmVydGljYWwpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGlua1JhZGlhbCgpIHtcbiAgdmFyIGwgPSBsaW5rKGN1cnZlUmFkaWFsKTtcbiAgbC5hbmdsZSA9IGwueCwgZGVsZXRlIGwueDtcbiAgbC5yYWRpdXMgPSBsLnksIGRlbGV0ZSBsLnk7XG4gIHJldHVybiBsO1xufVxuIiwiZXhwb3J0IHZhciBhYnMgPSBNYXRoLmFicztcbmV4cG9ydCB2YXIgYXRhbjIgPSBNYXRoLmF0YW4yO1xuZXhwb3J0IHZhciBjb3MgPSBNYXRoLmNvcztcbmV4cG9ydCB2YXIgbWF4ID0gTWF0aC5tYXg7XG5leHBvcnQgdmFyIG1pbiA9IE1hdGgubWluO1xuZXhwb3J0IHZhciBzaW4gPSBNYXRoLnNpbjtcbmV4cG9ydCB2YXIgc3FydCA9IE1hdGguc3FydDtcblxuZXhwb3J0IHZhciBlcHNpbG9uID0gMWUtMTI7XG5leHBvcnQgdmFyIHBpID0gTWF0aC5QSTtcbmV4cG9ydCB2YXIgaGFsZlBpID0gcGkgLyAyO1xuZXhwb3J0IHZhciB0YXUgPSAyICogcGk7XG5cbmV4cG9ydCBmdW5jdGlvbiBhY29zKHgpIHtcbiAgcmV0dXJuIHggPiAxID8gMCA6IHggPCAtMSA/IHBpIDogTWF0aC5hY29zKHgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXNpbih4KSB7XG4gIHJldHVybiB4ID49IDEgPyBoYWxmUGkgOiB4IDw9IC0xID8gLWhhbGZQaSA6IE1hdGguYXNpbih4KTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge31cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHNlcmllcywgb3JkZXIpIHtcbiAgaWYgKCEoKG4gPSBzZXJpZXMubGVuZ3RoKSA+IDApKSByZXR1cm47XG4gIGZvciAodmFyIGksIGogPSAwLCBkLCBkeSwgeXAsIHluLCBuLCBtID0gc2VyaWVzW29yZGVyWzBdXS5sZW5ndGg7IGogPCBtOyArK2opIHtcbiAgICBmb3IgKHlwID0geW4gPSAwLCBpID0gMDsgaSA8IG47ICsraSkge1xuICAgICAgaWYgKChkeSA9IChkID0gc2VyaWVzW29yZGVyW2ldXVtqXSlbMV0gLSBkWzBdKSA+IDApIHtcbiAgICAgICAgZFswXSA9IHlwLCBkWzFdID0geXAgKz0gZHk7XG4gICAgICB9IGVsc2UgaWYgKGR5IDwgMCkge1xuICAgICAgICBkWzFdID0geW4sIGRbMF0gPSB5biArPSBkeTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRbMF0gPSAwLCBkWzFdID0gZHk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgbm9uZSBmcm9tIFwiLi9ub25lLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHNlcmllcywgb3JkZXIpIHtcbiAgaWYgKCEoKG4gPSBzZXJpZXMubGVuZ3RoKSA+IDApKSByZXR1cm47XG4gIGZvciAodmFyIGksIG4sIGogPSAwLCBtID0gc2VyaWVzWzBdLmxlbmd0aCwgeTsgaiA8IG07ICsraikge1xuICAgIGZvciAoeSA9IGkgPSAwOyBpIDwgbjsgKytpKSB5ICs9IHNlcmllc1tpXVtqXVsxXSB8fCAwO1xuICAgIGlmICh5KSBmb3IgKGkgPSAwOyBpIDwgbjsgKytpKSBzZXJpZXNbaV1bal1bMV0gLz0geTtcbiAgfVxuICBub25lKHNlcmllcywgb3JkZXIpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oc2VyaWVzLCBvcmRlcikge1xuICBpZiAoISgobiA9IHNlcmllcy5sZW5ndGgpID4gMSkpIHJldHVybjtcbiAgZm9yICh2YXIgaSA9IDEsIGosIHMwLCBzMSA9IHNlcmllc1tvcmRlclswXV0sIG4sIG0gPSBzMS5sZW5ndGg7IGkgPCBuOyArK2kpIHtcbiAgICBzMCA9IHMxLCBzMSA9IHNlcmllc1tvcmRlcltpXV07XG4gICAgZm9yIChqID0gMDsgaiA8IG07ICsraikge1xuICAgICAgczFbal1bMV0gKz0gczFbal1bMF0gPSBpc05hTihzMFtqXVsxXSkgPyBzMFtqXVswXSA6IHMwW2pdWzFdO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IG5vbmUgZnJvbSBcIi4vbm9uZS5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihzZXJpZXMsIG9yZGVyKSB7XG4gIGlmICghKChuID0gc2VyaWVzLmxlbmd0aCkgPiAwKSkgcmV0dXJuO1xuICBmb3IgKHZhciBqID0gMCwgczAgPSBzZXJpZXNbb3JkZXJbMF1dLCBuLCBtID0gczAubGVuZ3RoOyBqIDwgbTsgKytqKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIHkgPSAwOyBpIDwgbjsgKytpKSB5ICs9IHNlcmllc1tpXVtqXVsxXSB8fCAwO1xuICAgIHMwW2pdWzFdICs9IHMwW2pdWzBdID0gLXkgLyAyO1xuICB9XG4gIG5vbmUoc2VyaWVzLCBvcmRlcik7XG59XG4iLCJpbXBvcnQgbm9uZSBmcm9tIFwiLi9ub25lLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHNlcmllcywgb3JkZXIpIHtcbiAgaWYgKCEoKG4gPSBzZXJpZXMubGVuZ3RoKSA+IDApIHx8ICEoKG0gPSAoczAgPSBzZXJpZXNbb3JkZXJbMF1dKS5sZW5ndGgpID4gMCkpIHJldHVybjtcbiAgZm9yICh2YXIgeSA9IDAsIGogPSAxLCBzMCwgbSwgbjsgaiA8IG07ICsraikge1xuICAgIGZvciAodmFyIGkgPSAwLCBzMSA9IDAsIHMyID0gMDsgaSA8IG47ICsraSkge1xuICAgICAgdmFyIHNpID0gc2VyaWVzW29yZGVyW2ldXSxcbiAgICAgICAgICBzaWowID0gc2lbal1bMV0gfHwgMCxcbiAgICAgICAgICBzaWoxID0gc2lbaiAtIDFdWzFdIHx8IDAsXG4gICAgICAgICAgczMgPSAoc2lqMCAtIHNpajEpIC8gMjtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgaTsgKytrKSB7XG4gICAgICAgIHZhciBzayA9IHNlcmllc1tvcmRlcltrXV0sXG4gICAgICAgICAgICBza2owID0gc2tbal1bMV0gfHwgMCxcbiAgICAgICAgICAgIHNrajEgPSBza1tqIC0gMV1bMV0gfHwgMDtcbiAgICAgICAgczMgKz0gc2tqMCAtIHNrajE7XG4gICAgICB9XG4gICAgICBzMSArPSBzaWowLCBzMiArPSBzMyAqIHNpajA7XG4gICAgfVxuICAgIHMwW2ogLSAxXVsxXSArPSBzMFtqIC0gMV1bMF0gPSB5O1xuICAgIGlmIChzMSkgeSAtPSBzMiAvIHMxO1xuICB9XG4gIHMwW2ogLSAxXVsxXSArPSBzMFtqIC0gMV1bMF0gPSB5O1xuICBub25lKHNlcmllcywgb3JkZXIpO1xufVxuIiwiaW1wb3J0IG5vbmUgZnJvbSBcIi4vbm9uZS5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihzZXJpZXMpIHtcbiAgdmFyIHBlYWtzID0gc2VyaWVzLm1hcChwZWFrKTtcbiAgcmV0dXJuIG5vbmUoc2VyaWVzKS5zb3J0KGZ1bmN0aW9uKGEsIGIpIHsgcmV0dXJuIHBlYWtzW2FdIC0gcGVha3NbYl07IH0pO1xufVxuXG5mdW5jdGlvbiBwZWFrKHNlcmllcykge1xuICB2YXIgaSA9IC0xLCBqID0gMCwgbiA9IHNlcmllcy5sZW5ndGgsIHZpLCB2aiA9IC1JbmZpbml0eTtcbiAgd2hpbGUgKCsraSA8IG4pIGlmICgodmkgPSArc2VyaWVzW2ldWzFdKSA+IHZqKSB2aiA9IHZpLCBqID0gaTtcbiAgcmV0dXJuIGo7XG59XG4iLCJpbXBvcnQgbm9uZSBmcm9tIFwiLi9ub25lLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHNlcmllcykge1xuICB2YXIgc3VtcyA9IHNlcmllcy5tYXAoc3VtKTtcbiAgcmV0dXJuIG5vbmUoc2VyaWVzKS5zb3J0KGZ1bmN0aW9uKGEsIGIpIHsgcmV0dXJuIHN1bXNbYV0gLSBzdW1zW2JdOyB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1bShzZXJpZXMpIHtcbiAgdmFyIHMgPSAwLCBpID0gLTEsIG4gPSBzZXJpZXMubGVuZ3RoLCB2O1xuICB3aGlsZSAoKytpIDwgbikgaWYgKHYgPSArc2VyaWVzW2ldWzFdKSBzICs9IHY7XG4gIHJldHVybiBzO1xufVxuIiwiaW1wb3J0IGFzY2VuZGluZyBmcm9tIFwiLi9hc2NlbmRpbmcuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oc2VyaWVzKSB7XG4gIHJldHVybiBhc2NlbmRpbmcoc2VyaWVzKS5yZXZlcnNlKCk7XG59XG4iLCJpbXBvcnQgYXBwZWFyYW5jZSBmcm9tIFwiLi9hcHBlYXJhbmNlLmpzXCI7XG5pbXBvcnQge3N1bX0gZnJvbSBcIi4vYXNjZW5kaW5nLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHNlcmllcykge1xuICB2YXIgbiA9IHNlcmllcy5sZW5ndGgsXG4gICAgICBpLFxuICAgICAgaixcbiAgICAgIHN1bXMgPSBzZXJpZXMubWFwKHN1bSksXG4gICAgICBvcmRlciA9IGFwcGVhcmFuY2Uoc2VyaWVzKSxcbiAgICAgIHRvcCA9IDAsXG4gICAgICBib3R0b20gPSAwLFxuICAgICAgdG9wcyA9IFtdLFxuICAgICAgYm90dG9tcyA9IFtdO1xuXG4gIGZvciAoaSA9IDA7IGkgPCBuOyArK2kpIHtcbiAgICBqID0gb3JkZXJbaV07XG4gICAgaWYgKHRvcCA8IGJvdHRvbSkge1xuICAgICAgdG9wICs9IHN1bXNbal07XG4gICAgICB0b3BzLnB1c2goaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJvdHRvbSArPSBzdW1zW2pdO1xuICAgICAgYm90dG9tcy5wdXNoKGopO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBib3R0b21zLnJldmVyc2UoKS5jb25jYXQodG9wcyk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihzZXJpZXMpIHtcbiAgdmFyIG4gPSBzZXJpZXMubGVuZ3RoLCBvID0gbmV3IEFycmF5KG4pO1xuICB3aGlsZSAoLS1uID49IDApIG9bbl0gPSBuO1xuICByZXR1cm4gbztcbn1cbiIsImltcG9ydCBub25lIGZyb20gXCIuL25vbmUuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oc2VyaWVzKSB7XG4gIHJldHVybiBub25lKHNlcmllcykucmV2ZXJzZSgpO1xufVxuIiwiaW1wb3J0IGFycmF5IGZyb20gXCIuL2FycmF5LmpzXCI7XG5pbXBvcnQgY29uc3RhbnQgZnJvbSBcIi4vY29uc3RhbnQuanNcIjtcbmltcG9ydCBkZXNjZW5kaW5nIGZyb20gXCIuL2Rlc2NlbmRpbmcuanNcIjtcbmltcG9ydCBpZGVudGl0eSBmcm9tIFwiLi9pZGVudGl0eS5qc1wiO1xuaW1wb3J0IHt0YXV9IGZyb20gXCIuL21hdGguanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gIHZhciB2YWx1ZSA9IGlkZW50aXR5LFxuICAgICAgc29ydFZhbHVlcyA9IGRlc2NlbmRpbmcsXG4gICAgICBzb3J0ID0gbnVsbCxcbiAgICAgIHN0YXJ0QW5nbGUgPSBjb25zdGFudCgwKSxcbiAgICAgIGVuZEFuZ2xlID0gY29uc3RhbnQodGF1KSxcbiAgICAgIHBhZEFuZ2xlID0gY29uc3RhbnQoMCk7XG5cbiAgZnVuY3Rpb24gcGllKGRhdGEpIHtcbiAgICB2YXIgaSxcbiAgICAgICAgbiA9IChkYXRhID0gYXJyYXkoZGF0YSkpLmxlbmd0aCxcbiAgICAgICAgaixcbiAgICAgICAgayxcbiAgICAgICAgc3VtID0gMCxcbiAgICAgICAgaW5kZXggPSBuZXcgQXJyYXkobiksXG4gICAgICAgIGFyY3MgPSBuZXcgQXJyYXkobiksXG4gICAgICAgIGEwID0gK3N0YXJ0QW5nbGUuYXBwbHkodGhpcywgYXJndW1lbnRzKSxcbiAgICAgICAgZGEgPSBNYXRoLm1pbih0YXUsIE1hdGgubWF4KC10YXUsIGVuZEFuZ2xlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgLSBhMCkpLFxuICAgICAgICBhMSxcbiAgICAgICAgcCA9IE1hdGgubWluKE1hdGguYWJzKGRhKSAvIG4sIHBhZEFuZ2xlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpLFxuICAgICAgICBwYSA9IHAgKiAoZGEgPCAwID8gLTEgOiAxKSxcbiAgICAgICAgdjtcblxuICAgIGZvciAoaSA9IDA7IGkgPCBuOyArK2kpIHtcbiAgICAgIGlmICgodiA9IGFyY3NbaW5kZXhbaV0gPSBpXSA9ICt2YWx1ZShkYXRhW2ldLCBpLCBkYXRhKSkgPiAwKSB7XG4gICAgICAgIHN1bSArPSB2O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIE9wdGlvbmFsbHkgc29ydCB0aGUgYXJjcyBieSBwcmV2aW91c2x5LWNvbXB1dGVkIHZhbHVlcyBvciBieSBkYXRhLlxuICAgIGlmIChzb3J0VmFsdWVzICE9IG51bGwpIGluZGV4LnNvcnQoZnVuY3Rpb24oaSwgaikgeyByZXR1cm4gc29ydFZhbHVlcyhhcmNzW2ldLCBhcmNzW2pdKTsgfSk7XG4gICAgZWxzZSBpZiAoc29ydCAhPSBudWxsKSBpbmRleC5zb3J0KGZ1bmN0aW9uKGksIGopIHsgcmV0dXJuIHNvcnQoZGF0YVtpXSwgZGF0YVtqXSk7IH0pO1xuXG4gICAgLy8gQ29tcHV0ZSB0aGUgYXJjcyEgVGhleSBhcmUgc3RvcmVkIGluIHRoZSBvcmlnaW5hbCBkYXRhJ3Mgb3JkZXIuXG4gICAgZm9yIChpID0gMCwgayA9IHN1bSA/IChkYSAtIG4gKiBwYSkgLyBzdW0gOiAwOyBpIDwgbjsgKytpLCBhMCA9IGExKSB7XG4gICAgICBqID0gaW5kZXhbaV0sIHYgPSBhcmNzW2pdLCBhMSA9IGEwICsgKHYgPiAwID8gdiAqIGsgOiAwKSArIHBhLCBhcmNzW2pdID0ge1xuICAgICAgICBkYXRhOiBkYXRhW2pdLFxuICAgICAgICBpbmRleDogaSxcbiAgICAgICAgdmFsdWU6IHYsXG4gICAgICAgIHN0YXJ0QW5nbGU6IGEwLFxuICAgICAgICBlbmRBbmdsZTogYTEsXG4gICAgICAgIHBhZEFuZ2xlOiBwXG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiBhcmNzO1xuICB9XG5cbiAgcGllLnZhbHVlID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKHZhbHVlID0gdHlwZW9mIF8gPT09IFwiZnVuY3Rpb25cIiA/IF8gOiBjb25zdGFudCgrXyksIHBpZSkgOiB2YWx1ZTtcbiAgfTtcblxuICBwaWUuc29ydFZhbHVlcyA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChzb3J0VmFsdWVzID0gXywgc29ydCA9IG51bGwsIHBpZSkgOiBzb3J0VmFsdWVzO1xuICB9O1xuXG4gIHBpZS5zb3J0ID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKHNvcnQgPSBfLCBzb3J0VmFsdWVzID0gbnVsbCwgcGllKSA6IHNvcnQ7XG4gIH07XG5cbiAgcGllLnN0YXJ0QW5nbGUgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoc3RhcnRBbmdsZSA9IHR5cGVvZiBfID09PSBcImZ1bmN0aW9uXCIgPyBfIDogY29uc3RhbnQoK18pLCBwaWUpIDogc3RhcnRBbmdsZTtcbiAgfTtcblxuICBwaWUuZW5kQW5nbGUgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoZW5kQW5nbGUgPSB0eXBlb2YgXyA9PT0gXCJmdW5jdGlvblwiID8gXyA6IGNvbnN0YW50KCtfKSwgcGllKSA6IGVuZEFuZ2xlO1xuICB9O1xuXG4gIHBpZS5wYWRBbmdsZSA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChwYWRBbmdsZSA9IHR5cGVvZiBfID09PSBcImZ1bmN0aW9uXCIgPyBfIDogY29uc3RhbnQoK18pLCBwaWUpIDogcGFkQW5nbGU7XG4gIH07XG5cbiAgcmV0dXJuIHBpZTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiB4KHApIHtcbiAgcmV0dXJuIHBbMF07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB5KHApIHtcbiAgcmV0dXJuIHBbMV07XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbih4LCB5KSB7XG4gIHJldHVybiBbKHkgPSAreSkgKiBNYXRoLmNvcyh4IC09IE1hdGguUEkgLyAyKSwgeSAqIE1hdGguc2luKHgpXTtcbn1cbiIsImltcG9ydCBhcnJheSBmcm9tIFwiLi9hcnJheS5qc1wiO1xuaW1wb3J0IGNvbnN0YW50IGZyb20gXCIuL2NvbnN0YW50LmpzXCI7XG5pbXBvcnQgb2Zmc2V0Tm9uZSBmcm9tIFwiLi9vZmZzZXQvbm9uZS5qc1wiO1xuaW1wb3J0IG9yZGVyTm9uZSBmcm9tIFwiLi9vcmRlci9ub25lLmpzXCI7XG5cbmZ1bmN0aW9uIHN0YWNrVmFsdWUoZCwga2V5KSB7XG4gIHJldHVybiBkW2tleV07XG59XG5cbmZ1bmN0aW9uIHN0YWNrU2VyaWVzKGtleSkge1xuICBjb25zdCBzZXJpZXMgPSBbXTtcbiAgc2VyaWVzLmtleSA9IGtleTtcbiAgcmV0dXJuIHNlcmllcztcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gIHZhciBrZXlzID0gY29uc3RhbnQoW10pLFxuICAgICAgb3JkZXIgPSBvcmRlck5vbmUsXG4gICAgICBvZmZzZXQgPSBvZmZzZXROb25lLFxuICAgICAgdmFsdWUgPSBzdGFja1ZhbHVlO1xuXG4gIGZ1bmN0aW9uIHN0YWNrKGRhdGEpIHtcbiAgICB2YXIgc3ogPSBBcnJheS5mcm9tKGtleXMuYXBwbHkodGhpcywgYXJndW1lbnRzKSwgc3RhY2tTZXJpZXMpLFxuICAgICAgICBpLCBuID0gc3oubGVuZ3RoLCBqID0gLTEsXG4gICAgICAgIG96O1xuXG4gICAgZm9yIChjb25zdCBkIG9mIGRhdGEpIHtcbiAgICAgIGZvciAoaSA9IDAsICsrajsgaSA8IG47ICsraSkge1xuICAgICAgICAoc3pbaV1bal0gPSBbMCwgK3ZhbHVlKGQsIHN6W2ldLmtleSwgaiwgZGF0YSldKS5kYXRhID0gZDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGkgPSAwLCBveiA9IGFycmF5KG9yZGVyKHN6KSk7IGkgPCBuOyArK2kpIHtcbiAgICAgIHN6W296W2ldXS5pbmRleCA9IGk7XG4gICAgfVxuXG4gICAgb2Zmc2V0KHN6LCBveik7XG4gICAgcmV0dXJuIHN6O1xuICB9XG5cbiAgc3RhY2sua2V5cyA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChrZXlzID0gdHlwZW9mIF8gPT09IFwiZnVuY3Rpb25cIiA/IF8gOiBjb25zdGFudChBcnJheS5mcm9tKF8pKSwgc3RhY2spIDoga2V5cztcbiAgfTtcblxuICBzdGFjay52YWx1ZSA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/ICh2YWx1ZSA9IHR5cGVvZiBfID09PSBcImZ1bmN0aW9uXCIgPyBfIDogY29uc3RhbnQoK18pLCBzdGFjaykgOiB2YWx1ZTtcbiAgfTtcblxuICBzdGFjay5vcmRlciA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChvcmRlciA9IF8gPT0gbnVsbCA/IG9yZGVyTm9uZSA6IHR5cGVvZiBfID09PSBcImZ1bmN0aW9uXCIgPyBfIDogY29uc3RhbnQoQXJyYXkuZnJvbShfKSksIHN0YWNrKSA6IG9yZGVyO1xuICB9O1xuXG4gIHN0YWNrLm9mZnNldCA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChvZmZzZXQgPSBfID09IG51bGwgPyBvZmZzZXROb25lIDogXywgc3RhY2spIDogb2Zmc2V0O1xuICB9O1xuXG4gIHJldHVybiBzdGFjaztcbn1cbiIsImltcG9ydCB7cGF0aH0gZnJvbSBcImQzLXBhdGhcIjtcbmltcG9ydCBjaXJjbGUgZnJvbSBcIi4vc3ltYm9sL2NpcmNsZS5qc1wiO1xuaW1wb3J0IGNyb3NzIGZyb20gXCIuL3N5bWJvbC9jcm9zcy5qc1wiO1xuaW1wb3J0IGRpYW1vbmQgZnJvbSBcIi4vc3ltYm9sL2RpYW1vbmQuanNcIjtcbmltcG9ydCBzdGFyIGZyb20gXCIuL3N5bWJvbC9zdGFyLmpzXCI7XG5pbXBvcnQgc3F1YXJlIGZyb20gXCIuL3N5bWJvbC9zcXVhcmUuanNcIjtcbmltcG9ydCB0cmlhbmdsZSBmcm9tIFwiLi9zeW1ib2wvdHJpYW5nbGUuanNcIjtcbmltcG9ydCB3eWUgZnJvbSBcIi4vc3ltYm9sL3d5ZS5qc1wiO1xuaW1wb3J0IGNvbnN0YW50IGZyb20gXCIuL2NvbnN0YW50LmpzXCI7XG5cbmV4cG9ydCB2YXIgc3ltYm9scyA9IFtcbiAgY2lyY2xlLFxuICBjcm9zcyxcbiAgZGlhbW9uZCxcbiAgc3F1YXJlLFxuICBzdGFyLFxuICB0cmlhbmdsZSxcbiAgd3llXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbih0eXBlLCBzaXplKSB7XG4gIHZhciBjb250ZXh0ID0gbnVsbDtcbiAgdHlwZSA9IHR5cGVvZiB0eXBlID09PSBcImZ1bmN0aW9uXCIgPyB0eXBlIDogY29uc3RhbnQodHlwZSB8fCBjaXJjbGUpO1xuICBzaXplID0gdHlwZW9mIHNpemUgPT09IFwiZnVuY3Rpb25cIiA/IHNpemUgOiBjb25zdGFudChzaXplID09PSB1bmRlZmluZWQgPyA2NCA6ICtzaXplKTtcblxuICBmdW5jdGlvbiBzeW1ib2woKSB7XG4gICAgdmFyIGJ1ZmZlcjtcbiAgICBpZiAoIWNvbnRleHQpIGNvbnRleHQgPSBidWZmZXIgPSBwYXRoKCk7XG4gICAgdHlwZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpLmRyYXcoY29udGV4dCwgK3NpemUuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gICAgaWYgKGJ1ZmZlcikgcmV0dXJuIGNvbnRleHQgPSBudWxsLCBidWZmZXIgKyBcIlwiIHx8IG51bGw7XG4gIH1cblxuICBzeW1ib2wudHlwZSA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/ICh0eXBlID0gdHlwZW9mIF8gPT09IFwiZnVuY3Rpb25cIiA/IF8gOiBjb25zdGFudChfKSwgc3ltYm9sKSA6IHR5cGU7XG4gIH07XG5cbiAgc3ltYm9sLnNpemUgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoc2l6ZSA9IHR5cGVvZiBfID09PSBcImZ1bmN0aW9uXCIgPyBfIDogY29uc3RhbnQoK18pLCBzeW1ib2wpIDogc2l6ZTtcbiAgfTtcblxuICBzeW1ib2wuY29udGV4dCA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChjb250ZXh0ID0gXyA9PSBudWxsID8gbnVsbCA6IF8sIHN5bWJvbCkgOiBjb250ZXh0O1xuICB9O1xuXG4gIHJldHVybiBzeW1ib2w7XG59XG4iLCJpbXBvcnQge3BpLCB0YXV9IGZyb20gXCIuLi9tYXRoLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZHJhdzogZnVuY3Rpb24oY29udGV4dCwgc2l6ZSkge1xuICAgIHZhciByID0gTWF0aC5zcXJ0KHNpemUgLyBwaSk7XG4gICAgY29udGV4dC5tb3ZlVG8ociwgMCk7XG4gICAgY29udGV4dC5hcmMoMCwgMCwgciwgMCwgdGF1KTtcbiAgfVxufTtcbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgZHJhdzogZnVuY3Rpb24oY29udGV4dCwgc2l6ZSkge1xuICAgIHZhciByID0gTWF0aC5zcXJ0KHNpemUgLyA1KSAvIDI7XG4gICAgY29udGV4dC5tb3ZlVG8oLTMgKiByLCAtcik7XG4gICAgY29udGV4dC5saW5lVG8oLXIsIC1yKTtcbiAgICBjb250ZXh0LmxpbmVUbygtciwgLTMgKiByKTtcbiAgICBjb250ZXh0LmxpbmVUbyhyLCAtMyAqIHIpO1xuICAgIGNvbnRleHQubGluZVRvKHIsIC1yKTtcbiAgICBjb250ZXh0LmxpbmVUbygzICogciwgLXIpO1xuICAgIGNvbnRleHQubGluZVRvKDMgKiByLCByKTtcbiAgICBjb250ZXh0LmxpbmVUbyhyLCByKTtcbiAgICBjb250ZXh0LmxpbmVUbyhyLCAzICogcik7XG4gICAgY29udGV4dC5saW5lVG8oLXIsIDMgKiByKTtcbiAgICBjb250ZXh0LmxpbmVUbygtciwgcik7XG4gICAgY29udGV4dC5saW5lVG8oLTMgKiByLCByKTtcbiAgICBjb250ZXh0LmNsb3NlUGF0aCgpO1xuICB9XG59O1xuIiwidmFyIHRhbjMwID0gTWF0aC5zcXJ0KDEgLyAzKSxcbiAgICB0YW4zMF8yID0gdGFuMzAgKiAyO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGRyYXc6IGZ1bmN0aW9uKGNvbnRleHQsIHNpemUpIHtcbiAgICB2YXIgeSA9IE1hdGguc3FydChzaXplIC8gdGFuMzBfMiksXG4gICAgICAgIHggPSB5ICogdGFuMzA7XG4gICAgY29udGV4dC5tb3ZlVG8oMCwgLXkpO1xuICAgIGNvbnRleHQubGluZVRvKHgsIDApO1xuICAgIGNvbnRleHQubGluZVRvKDAsIHkpO1xuICAgIGNvbnRleHQubGluZVRvKC14LCAwKTtcbiAgICBjb250ZXh0LmNsb3NlUGF0aCgpO1xuICB9XG59O1xuIiwiZXhwb3J0IGRlZmF1bHQge1xuICBkcmF3OiBmdW5jdGlvbihjb250ZXh0LCBzaXplKSB7XG4gICAgdmFyIHcgPSBNYXRoLnNxcnQoc2l6ZSksXG4gICAgICAgIHggPSAtdyAvIDI7XG4gICAgY29udGV4dC5yZWN0KHgsIHgsIHcsIHcpO1xuICB9XG59O1xuIiwiaW1wb3J0IHtwaSwgdGF1fSBmcm9tIFwiLi4vbWF0aC5qc1wiO1xuXG52YXIga2EgPSAwLjg5MDgxMzA5MTUyOTI4NTIyODEwLFxuICAgIGtyID0gTWF0aC5zaW4ocGkgLyAxMCkgLyBNYXRoLnNpbig3ICogcGkgLyAxMCksXG4gICAga3ggPSBNYXRoLnNpbih0YXUgLyAxMCkgKiBrcixcbiAgICBreSA9IC1NYXRoLmNvcyh0YXUgLyAxMCkgKiBrcjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBkcmF3OiBmdW5jdGlvbihjb250ZXh0LCBzaXplKSB7XG4gICAgdmFyIHIgPSBNYXRoLnNxcnQoc2l6ZSAqIGthKSxcbiAgICAgICAgeCA9IGt4ICogcixcbiAgICAgICAgeSA9IGt5ICogcjtcbiAgICBjb250ZXh0Lm1vdmVUbygwLCAtcik7XG4gICAgY29udGV4dC5saW5lVG8oeCwgeSk7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCA1OyArK2kpIHtcbiAgICAgIHZhciBhID0gdGF1ICogaSAvIDUsXG4gICAgICAgICAgYyA9IE1hdGguY29zKGEpLFxuICAgICAgICAgIHMgPSBNYXRoLnNpbihhKTtcbiAgICAgIGNvbnRleHQubGluZVRvKHMgKiByLCAtYyAqIHIpO1xuICAgICAgY29udGV4dC5saW5lVG8oYyAqIHggLSBzICogeSwgcyAqIHggKyBjICogeSk7XG4gICAgfVxuICAgIGNvbnRleHQuY2xvc2VQYXRoKCk7XG4gIH1cbn07XG4iLCJ2YXIgc3FydDMgPSBNYXRoLnNxcnQoMyk7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZHJhdzogZnVuY3Rpb24oY29udGV4dCwgc2l6ZSkge1xuICAgIHZhciB5ID0gLU1hdGguc3FydChzaXplIC8gKHNxcnQzICogMykpO1xuICAgIGNvbnRleHQubW92ZVRvKDAsIHkgKiAyKTtcbiAgICBjb250ZXh0LmxpbmVUbygtc3FydDMgKiB5LCAteSk7XG4gICAgY29udGV4dC5saW5lVG8oc3FydDMgKiB5LCAteSk7XG4gICAgY29udGV4dC5jbG9zZVBhdGgoKTtcbiAgfVxufTtcbiIsInZhciBjID0gLTAuNSxcbiAgICBzID0gTWF0aC5zcXJ0KDMpIC8gMixcbiAgICBrID0gMSAvIE1hdGguc3FydCgxMiksXG4gICAgYSA9IChrIC8gMiArIDEpICogMztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBkcmF3OiBmdW5jdGlvbihjb250ZXh0LCBzaXplKSB7XG4gICAgdmFyIHIgPSBNYXRoLnNxcnQoc2l6ZSAvIGEpLFxuICAgICAgICB4MCA9IHIgLyAyLFxuICAgICAgICB5MCA9IHIgKiBrLFxuICAgICAgICB4MSA9IHgwLFxuICAgICAgICB5MSA9IHIgKiBrICsgcixcbiAgICAgICAgeDIgPSAteDEsXG4gICAgICAgIHkyID0geTE7XG4gICAgY29udGV4dC5tb3ZlVG8oeDAsIHkwKTtcbiAgICBjb250ZXh0LmxpbmVUbyh4MSwgeTEpO1xuICAgIGNvbnRleHQubGluZVRvKHgyLCB5Mik7XG4gICAgY29udGV4dC5saW5lVG8oYyAqIHgwIC0gcyAqIHkwLCBzICogeDAgKyBjICogeTApO1xuICAgIGNvbnRleHQubGluZVRvKGMgKiB4MSAtIHMgKiB5MSwgcyAqIHgxICsgYyAqIHkxKTtcbiAgICBjb250ZXh0LmxpbmVUbyhjICogeDIgLSBzICogeTIsIHMgKiB4MiArIGMgKiB5Mik7XG4gICAgY29udGV4dC5saW5lVG8oYyAqIHgwICsgcyAqIHkwLCBjICogeTAgLSBzICogeDApO1xuICAgIGNvbnRleHQubGluZVRvKGMgKiB4MSArIHMgKiB5MSwgYyAqIHkxIC0gcyAqIHgxKTtcbiAgICBjb250ZXh0LmxpbmVUbyhjICogeDIgKyBzICogeTIsIGMgKiB5MiAtIHMgKiB4Mik7XG4gICAgY29udGV4dC5jbG9zZVBhdGgoKTtcbiAgfVxufTtcbiIsImltcG9ydCB7IGFyYyB9IGZyb20gJ2QzLXNoYXBlJztcbmltcG9ydCB7IGhpZXJhcmNoeSwgcGFydGl0aW9uIH0gZnJvbSAnZDMtaGllcmFyY2h5JztcbmltcG9ydCB7IHNlbGVjdCwgc2VsZWN0QWxsIH0gZnJvbSAnZDMtc2VsZWN0aW9uJztcbmltcG9ydCB7IGpzb24gfSBmcm9tICdkMy1mZXRjaCc7XG5cbmNvbnN0IGQzID0gT2JqZWN0LmFzc2lnbihcbiAge30sXG4gIHtcbiAgICBhcmMsXG4gICAgaGllcmFyY2h5LFxuICAgIGpzb24sXG4gICAgcGFydGl0aW9uLFxuICAgIHNlbGVjdCxcbiAgICBzZWxlY3RBbGxcbiAgfVxuKTtcblxuY29uc3Qgd2lkdGggPSA1MDA7XG5jb25zdCBoZWlnaHQgPSA1MDA7XG5jb25zdCByYWRpdXMgPSBNYXRoLm1pbih3aWR0aCwgaGVpZ2h0KSAvIDEwLjM7XG5cbmNvbnN0IHNldFBhcnRpdGlvbiA9IGRhdGEgPT4ge1xuICBjb25zdCByb290ID0gZDMuaGllcmFyY2h5KGRhdGEpXG4gICAgLnN1bShkID0+IChkLmNoaWxkcmVuIHx8IGQuY291bnQpKVxuICByZXR1cm4gZDMucGFydGl0aW9uKCkuc2l6ZShbMiAqIE1hdGguUEksIHJvb3QuaGVpZ2h0ICsgMV0pKHJvb3QpO1xufTtcblxuY29uc3Qgc2V0QXJjID0gZDMuYXJjKClcbiAgLnN0YXJ0QW5nbGUoZCA9PiBkLngwKVxuICAuZW5kQW5nbGUoZCA9PiBkLngxKVxuICAucGFkQW5nbGUoZCA9PiBNYXRoLm1pbigoZC54MSAtIGQueDApIC8gMiwgMC4wMDUgLSA1MDApKVxuICAucGFkUmFkaXVzKDApXG4gIC5pbm5lclJhZGl1cyhkID0+IGQueTAgKiByYWRpdXMgKyA1NSlcbiAgLm91dGVyUmFkaXVzKGQgPT4gTWF0aC5tYXgoZC55MCAqIHJhZGl1cywgZC55MSAqIHJhZGl1cyArIDU1KSk7XG5cbi8vIFRvb2x0aXBzIGFuZCBodG1sIGZvcm1hdHRpbmdcbmNvbnN0IHRvb2x0aXBzID0gZDNcbiAgLnNlbGVjdCgnLnN1bmJ1cnN0LXRleHQnKVxuICAuYXBwZW5kKCdkaXYnKVxuICAuYXR0cignY2xhc3MnLCAncm93IHRvb2x0aXBzJyk7XG5cbmNvbnN0IGZvcm1hdEhUTUwgPSBkID0+IHtcbiAgY29uc3QgbGF5ZXIgPSBkLmRlcHRoO1xuICBjb25zdCB7IGRhdGEgfSA9IGQ7XG5cbiAgaWYgKGxheWVyID09PSAxKSB7XG4gICAgbGV0IGF3YXJkQW1vdW50ID0gTWF0aC5yb3VuZChkYXRhLnRvdGFsQXdhcmRBbW91bnQgKiAxMDApIC8gMTAwO1xuICAgIGF3YXJkQW1vdW50ID0gYXdhcmRBbW91bnQudG9TdHJpbmcoKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpO1xuXG4gICAgdG9vbHRpcHMuaHRtbChcbiAgICAgIGA8ZGl2IGNsYXNzPVwiY29sdW1uIGxhcmdlLTEyIHNtYWxsLTEyXCI+XG4gICAgICAgIDxoMiBjbGFzcz1cInRpdGxlXCI+JHtkYXRhLm5hbWV9PC9oMj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImNvbHVtbiBsYXJnZS01IHNtYWxsLTEyXCI+XG4gICAgICAgIDxoMz5TdHJhdGVneS9Gb2N1czwvaDM+XG4gICAgICAgIDxoND4ke2RhdGEuZm9jdXN9PC9oND5cbiAgICAgICAgPHA+JHtkYXRhLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImNvbHVtbiBsYXJnZS03IHNtYWxsLTEyXCI+XG4gICAgICAgIDxoMz5UeXBlcyBvZiBQcm9ncmFtczwvaDM+XG4gICAgICAgIDxwPiR7ZGF0YS5jaGlsZHJlbi5sZW5ndGh9PC9wPlxuICAgICAgICA8aDM+VG90YWwgQXdhcmQgQW1vdW50PC9oMz5cbiAgICAgICAgPHA+JCR7YXdhcmRBbW91bnR9PC9wPlxuICAgICAgICA8aDM+Q291bnRyaWVzIFJlcHJlc2VudGVkPC9oMz5cbiAgICAgICAgPHA+JHtkYXRhLmF3YXJkZWRDb3VudHJpZXMubGVuZ3RofTwvcD5cbiAgICAgIDwvZGl2PmBcbiAgICApO1xuICB9IGVsc2UgaWYgKGxheWVyID09PSAyKSB7XG4gICAgbGV0IGlzc3VlQXJlYUhUTUwgPSAnJztcblxuICAgIGRhdGEuY2hpbGRyZW4uZm9yRWFjaChpc3N1ZUFyZWEgPT4ge1xuICAgICAgaXNzdWVBcmVhSFRNTCArPSBgPHA+JHtpc3N1ZUFyZWEubmFtZX08L3A+YDtcbiAgICB9KTtcblxuICAgIHRvb2x0aXBzLmh0bWwoXG4gICAgICBgPGRpdiBjbGFzcz1cImNvbHVtbiBsYXJnZS0xMiBzbWFsbC0xMlwiPlxuICAgICAgICA8c3BhbiBjbGFzcz1cInBhcmVudC1kYXRhXCI+JHtkLnBhcmVudC5kYXRhLm5hbWV9PC9zcGFuPlxuICAgICAgICA8aDIgY2xhc3M9XCJ0aXRsZVwiPiR7ZGF0YS5uYW1lfTwvaDI+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW4gbGFyZ2UtNSBzbWFsbC0xMlwiPlxuICAgICAgICA8aDM+UHJvZ3JhbSBGb2N1czwvaDM+XG4gICAgICAgIDxwPiR7ZGF0YS5wdXJwb3NlfTwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImNvbHVtbiBsYXJnZS03IHNtYWxsLTEyXCI+XG4gICAgICAgIDxoMz5HZW9ncmFwaGljIEZvY3VzPC9oMz5cbiAgICAgICAgPHA+JHtkYXRhLmFsbENvdW50cmllc1BlclR5cGUuc29ydCgpLmpvaW4oJywgJyl9PC9wPlxuICAgICAgICA8aDM+TnVtYmVyIG9mIEF3YXJkczwvaDM+XG4gICAgICAgIDxwPiR7ZGF0YS5jb3VudH08L3A+XG4gICAgICAgIDxoMz5JbnRlcm5ldCBIZWFsdGggSXNzdWVzPC9oMz5cbiAgICAgICAgJHtpc3N1ZUFyZWFIVE1MfVxuICAgICAgPC9kaXY+YFxuICAgICk7XG4gIH0gZWxzZSBpZiAobGF5ZXIgPT09IDMpIHtcbiAgICBsZXQgaHRtbCA9ICcnO1xuXG4gICAgZGF0YS5wcmltYXJ5T3V0cHV0LmZvckVhY2gob3V0cHV0ID0+IHtcbiAgICAgIGh0bWwgKz0gYDxwPiR7b3V0cHV0fTwvcD5gO1xuICAgIH0pO1xuXG4gICAgdG9vbHRpcHMuaHRtbChcbiAgICAgIGA8ZGl2IGNsYXNzPVwiY29sdW1uIGxhcmdlLTEyIHNtYWxsLTEyXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwicGFyZW50LWRhdGFcIj4ke2QucGFyZW50LnBhcmVudC5kYXRhLm5hbWV9IHwgJHtkLnBhcmVudC5kYXRhLm5hbWV9PC9zcGFuPlxuICAgICAgICA8aDIgY2xhc3M9XCJ0aXRsZVwiPiR7ZGF0YS5uYW1lfTwvaDI+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW4gbGFyZ2UtNSBzbWFsbC0xMlwiPlxuICAgICAgICA8aDM+U3VtbWFyeTwvaDM+XG4gICAgICAgIDxwPiR7ZGF0YS5kZXNjcmlwdGlvbn08L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW4gbGFyZ2UtNyBzbWFsbC0xMlwiPlxuICAgICAgICA8aDM+TnVtYmVyIG9mIEF3YXJkczwvaDM+XG4gICAgICAgIDxwPiR7ZGF0YS5jb3VudH08L3A+XG4gICAgICAgIDxoMz5UeXBlcyBvZiBPdXRwdXRzPC9oMz5cbiAgICAgICAgPHA+JHtodG1sfTwvcD5cbiAgICAgIDwvZGl2PmBcbiAgICApO1xuICB9XG59O1xuXG4vLyBIaWdobGlnaHQgb24gaG92ZXJcbmNvbnN0IGdldEFuY2VzdG9ycyA9IG5vZGUgPT4ge1xuICBjb25zdCBwYXRoID0gW107XG4gIGxldCBjdXJyZW50ID0gbm9kZTtcbiAgd2hpbGUgKGN1cnJlbnQucGFyZW50KSB7XG4gICAgcGF0aC51bnNoaWZ0KGN1cnJlbnQpO1xuICAgIGN1cnJlbnQgPSBjdXJyZW50LnBhcmVudDtcbiAgfVxuICByZXR1cm4gcGF0aDtcbn07XG5cbmNvbnN0IGhpZ2hsaWdodFNlcXVlbmNlID0gZCA9PiB7XG4gIGNvbnN0IHNlcXVlbmNlQXJyYXkgPSBnZXRBbmNlc3RvcnMoZCk7XG4gIGQzLnNlbGVjdEFsbCgncGF0aCcpXG4gICAgLmZpbHRlcihub2RlID0+IHNlcXVlbmNlQXJyYXkuaW5kZXhPZihub2RlKSA8IDApXG4gICAgLmNsYXNzZWQoJ2FuY2VzdG9yJywgdHJ1ZSk7XG59O1xuXG5jb25zdCByZW1vdmVIaWdobGlnaHQgPSBkID0+IHtcbiAgY29uc3Qgc2VxdWVuY2VBcnJheSA9IGdldEFuY2VzdG9ycyhkKTtcbiAgZDMuc2VsZWN0QWxsKCdwYXRoJylcbiAgICAuZmlsdGVyKG5vZGUgPT4gc2VxdWVuY2VBcnJheS5pbmRleE9mKG5vZGUpIDwgMClcbiAgICAuY2xhc3NlZCgnYW5jZXN0b3InLCBmYWxzZSk7XG59O1xuXG5jb25zdCBoaWdobGlnaHRMYWJlbCA9IGQgPT4ge1xuICBjb25zdCBhbGxMYWJlbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGFiZWwnKTtcbiAgbGV0IGRlcHRoID0gZC5kZXB0aDtcbiAgbGV0IGxhYmVsO1xuXG4gIHN3aXRjaChkZXB0aCkge1xuICAgIGNhc2UgMTpcbiAgICAgIGxhYmVsID0gZC5kYXRhLm5hbWU7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDI6XG4gICAgICBsYWJlbCA9IGQucGFyZW50LmRhdGEubmFtZTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMzpcbiAgICAgIGxhYmVsID0gZC5wYXJlbnQucGFyZW50LmRhdGEubmFtZTtcbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgYWxsTGFiZWxzLmZvckVhY2gobGFiZWwgPT4ge1xuICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ2xhYmVsLWluYWN0aXZlJyk7XG4gIH0pO1xuXG4gIGxldCBmb3VuZExhYmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmxhYmVsLSR7bGFiZWx9YClcbiAgZm91bmRMYWJlbC5jbGFzc0xpc3QuYWRkKCdsYWJlbC1hY3RpdmUnKTtcbn07XG5cbi8vIFNwZWNpZnkgY29sb3JzXG5jb25zdCBjb2xvcnMgPSB7XG4gICcyMDE2JzogJyNDQ0NDQ0MnLFxuICAnMjAxNyc6ICcjQ0NDQ0NDJyxcbiAgJzIwMTgnOiAnI0NDQ0NDQycsXG4gICcyMDE5JzogJyNDQ0NDQ0MnLFxuICAnMjAyMCc6ICcjQ0NDQ0NDJyxcbiAgJ0Fkdm9jYWN5IE5ldHdvcmsgRnVuZCc6ICcjMjc3ZGExJyxcbiAgJ0NyZWF0aXZlIE1lZGlhIEF3YXJkcyc6ICcjZjk4NDRhJyxcbiAgJ0RhdGEgRnV0dXJlcyBMYWInOiAnIzU3NzU5MCcsXG4gICdEaXNjcmV0aW9uYXJ5IEF3YXJkcyc6ICcjZjg5NjFlJyxcbiAgJ0ZlbGxvd3MgaW4gUmVzaWRlbmNlL1NlbmlvciBGZWxsb3dzJzogJyM0ZDkwOGUnLFxuICAnR2lnYWJpdCBDb21tdW5pdHkgRnVuZCc6ICcjZjM3MjJjJyxcbiAgJ0hpdmUnOiAnIzQzYWE4YicsXG4gICdNT1NTIChNb3ppbGxhIE9wZW4gU291cmNlIFN1cHBvcnQpJzogJyNmOTQxNDQnLFxuICAnTW96aWxsYSBTY2llbmNlIE1pbmkgR3JhbnRzJzogJyNjNDM0MzcnLFxuICAnTlNGIFdJTlMgKFdpcmVsZXNzIElubm92YXRpb25zIGZvciBhIE5ldHdvcmtlZCBTb2NpZXR5IENoYWxsZW5nZSknOiAnI2Y5Yzc0ZicsXG4gICdPcGVuIEludGVybmV0IEVuZ2luZWVyaW5nIEZlbGxvd3NoaXAnOiAnI2FmMzc2YicsXG4gICdPcGVuIE5ld3MgRmVsbG93c2hpcCc6ICcjMmQ1NDgwJyxcbiAgJ09wZW4gU2NpZW5jZSBGZWxsb3dzaGlwJzogJyM2NjJkOTEnLFxuICAnT3BlbiBXZWIgRmVsbG93c2hpcCc6ICcjMjM0MDYxJyxcbiAgJ09wZW5ET1RUIEZlbGxvd3NoaXAnOiAnIzQ4NTM5OScsXG4gICdPdGhlciBQcm9ncmFtcyc6ICcjMWUzNzUzJyxcbiAgJ1Jlc3BvbnNpYmxlIENvbXB1dGVyIFNjaWVuY2UgQ2hhbGxlbmdlJzogJyMzOTY2OWMnLFxuICAnVGVjaCArIFNvY2lldHkgRmVsbG93c2hpcCc6ICcjMTUyNzNjJyxcbiAgJ1RlY2ggUG9saWN5IEZlbGxvd3NoaXAnOiAnIzQ3MWY2MScsXG4gICdQcml2YWN5ICsgU2VjdXJpdHknOiAnIzFhMWE0OScsXG4gICdPcGVuIElubm92YXRpb24nOiAnIzMxMzE1YycsXG4gICdEaWdpdGFsIEluY2x1c2lvbic6ICcjNDg0ODZkJyxcbiAgJ1dlYiBMaXRlcmFjeSc6ICcjNWY1ZjgwJyxcbiAgJ0RlY2VudHJhbGl6YXRpb24nOiAnIzc2NzY5MicsXG4gICdUcnVzdHdvcnRoeSBBSSc6ICcjOGM4Y2EzJyxcbiAgJ090aGVyL3VuYXZhaWxhYmxlJzogJyNhM2EzYjYnXG59O1xuXG5kMy5qc29uKCcuLi9kYXRhL3N1bmJ1cnN0LWRhdGEuanNvbicpLnRoZW4oZGF0YSA9PiB7XG4gIGNvbnN0IHJvb3QgPSBzZXRQYXJ0aXRpb24oZGF0YSk7XG4gIHJvb3QuZWFjaChkID0+IGQuY3VycmVudCA9IGQpO1xuXG4gIGNvbnN0IHN2ZyA9IGQzXG4gICAgLnNlbGVjdCgnc3ZnI3N1bmJ1cnN0JylcbiAgICAuYXR0cigndmlld0JveCcsIGAwLCAwLCAke3dpZHRofSAke2hlaWdodH1gKVxuICAgIC5hdHRyKCd3aWR0aCcsIHdpZHRoKVxuICAgIC5hdHRyKCdoZWlnaHQnLCBoZWlnaHQpO1xuXG4gIGNvbnN0IGcgPSBzdmcuYXBwZW5kKCdnJykuYXR0cigndHJhbnNmb3JtJywgYHRyYW5zbGF0ZSgke3dpZHRoIC8gMn0sJHt3aWR0aCAvIDJ9KWApO1xuXG4gIGdcbiAgICAuc2VsZWN0QWxsKCdwYXRoJylcbiAgICAuZGF0YShyb290LmRlc2NlbmRhbnRzKCkuc2xpY2UoMSkpXG4gICAgLmpvaW4oJ3BhdGgnKVxuICAgIC5hdHRyKCdkJywgZCA9PiBzZXRBcmMoZC5jdXJyZW50KSlcbiAgICAuYXR0cignY2xhc3MnLCBkID0+IGBsYXllci0ke2QuZGVwdGh9YClcbiAgICAuc3R5bGUoJ2ZpbGwnLCBkID0+IGNvbG9yc1tkLmRhdGEubmFtZV0pXG4gICAgLnN0eWxlKCdzdHJva2UnLCAnI0ZGRicpXG4gICAgLnN0eWxlKCdzdHJva2Utd2lkdGgnLCAxKVxuICAgIC5vbignbW91c2VvdmVyJywgKGUsIGQpID0+IHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sYXJnZS10ZXh0Jykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIGZvcm1hdEhUTUwoZCk7XG4gICAgICBoaWdobGlnaHRTZXF1ZW5jZShkKTtcbiAgICAgIGhpZ2hsaWdodExhYmVsKGQpXG4gICAgICBnXG4gICAgICAgIC5hcHBlbmQoJ3RleHQnKVxuICAgICAgICAuYXR0cignY2xhc3MnLCAnc3VuYnVyc3QtY2VudGVyLXRleHQnKVxuICAgICAgICAudGV4dCgnQ2xlYXInKVxuICAgICAgICAuc3R5bGUoJ2ZpbGwnLCAnI2JiYmJiYicpXG4gICAgICAgIC5zdHlsZSgnZm9udC1zaXplJywgJzJyZW0nKVxuICAgICAgICAuYXR0cigneCcsIC00MClcbiAgICAgICAgLmF0dHIoJ3knLCAxMClcbiAgICAgICAgLm9uKCdtb3VzZW92ZXInLCAoKSA9PiB7XG4gICAgICAgICAgZy5zZWxlY3QoJy5zdW5idXJzdC1jZW50ZXItdGV4dCcpLnJlbW92ZSgpO1xuICAgICAgICB9KTtcbiAgICB9KVxuICAgIC5vbignbW91c2VsZWF2ZScsIGQgPT4ge1xuICAgICAgcmVtb3ZlSGlnaGxpZ2h0KGQpO1xuICAgICAgdG9vbHRpcHMuaHRtbCgnJyk7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGFyZ2UtdGV4dCcpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgZy5zZWxlY3QoJy5zdW5idXJzdC1jZW50ZXItdGV4dCcpLnJlbW92ZSgpO1xuICAgICAgY29uc3QgYWxsTGFiZWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxhYmVsJyk7XG5cbiAgICAgIGFsbExhYmVscy5mb3JFYWNoKGxhYmVsID0+IHtcbiAgICAgICAgbGFiZWwuY2xhc3NMaXN0LnJlbW92ZSgnbGFiZWwtYWN0aXZlJywgJ2xhYmVsLWluYWN0aXZlJyk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICBjb25zdCBsYWJlbFRyYW5zZm9ybSA9IGQgPT4ge1xuICAgIGNvbnN0IHggPSAoZC54MCArIGQueDEpIC8gMiAqIDE4MCAvIE1hdGguUEk7XG4gICAgY29uc3QgeSA9IChkLnkwICsgZC55MSkgLyAyICogcmFkaXVzO1xuICAgIHJldHVybiBgcm90YXRlKCR7eCAtIDkwfSkgdHJhbnNsYXRlKCR7eSArIDQ4fSwwKSByb3RhdGUoOTApYDtcbiAgfVxuXG4gIGNvbnN0IGxhYmVsID0gZy5hcHBlbmQoJ2cnKVxuICAgIC5zZWxlY3RBbGwoJ3RleHQnKVxuICAgIC5kYXRhKHJvb3QuZGVzY2VuZGFudHMoKS5zbGljZSgxKSlcbiAgICAuam9pbigndGV4dCcpXG5cbiAgbGFiZWxcbiAgICAuYXR0cigncG9pbnRlci1ldmVudHMnLCAnbm9uZScpXG4gICAgLmF0dHIoJ3RleHQtYW5jaG9yJywgJ21pZGRsZScpXG4gICAgLnN0eWxlKCd1c2VyLXNlbGVjdCcsICdub25lJylcbiAgICAuYXR0cigndHJhbnNmb3JtJywgZCA9PiBsYWJlbFRyYW5zZm9ybShkLmN1cnJlbnQpKVxuICAgIC5hdHRyKCdjbGFzcycsIGQgPT4gYGxhYmVsIGxhYmVsLSR7ZC5kZXB0aH0gbGFiZWwtJHtkLmRhdGEubmFtZX1gKVxuICAgIC50ZXh0KGQgPT4gZC5kYXRhLm5hbWUpXG59KVxuICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgbG9hZGluZyB0aGUgZGF0YScpO1xuICB9KTsiXSwic291cmNlUm9vdCI6IiJ9