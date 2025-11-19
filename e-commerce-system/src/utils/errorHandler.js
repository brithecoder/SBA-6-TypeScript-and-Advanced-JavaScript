"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataError = exports.NetworkError = void 0;
exports.handleError = handleError;
var NetworkError = /** @class */ (function (_super) {
    __extends(NetworkError, _super);
    function NetworkError(message) {
        var _this = _super.call(this, message) || this;
        _this.name = 'NetworkError';
        return _this;
    }
    return NetworkError;
}(Error));
exports.NetworkError = NetworkError;
var DataError = /** @class */ (function (_super) {
    __extends(DataError, _super);
    function DataError(message) {
        var _this = _super.call(this, message) || this;
        _this.name = 'DataError';
        return _this;
    }
    return DataError;
}(Error));
exports.DataError = DataError;
function handleError(error) {
    if (error instanceof NetworkError) {
        console.error("\uD83D\uDEA8 Network Error: ".concat(error.message));
    }
    else if (error instanceof DataError) {
        console.error("\u274C General Data Error [".concat(error.name, "]: ").concat(error.message));
    }
    else {
        console.error("❓ An unknown error occurred:", error);
    }
}
