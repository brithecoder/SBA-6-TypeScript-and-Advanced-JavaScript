"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.discountCalculator = discountCalculator;
var customeErrors = require("../utils/errorHandler");
function discountCalculator(price, discountPercentage) {
    if (price < 0 || discountPercentage < 0) {
        throw new customeErrors.DataError("Price and discount percentage must be non-negative.");
    }
    var discountDeci = discountPercentage / 100;
    var discountAmount = price * discountDeci;
    return discountAmount;
}
