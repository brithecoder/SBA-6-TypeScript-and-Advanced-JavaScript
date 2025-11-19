"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
var discountCalculator_1 = require("../utils/discountCalculator");
var Product = /** @class */ (function () {
    function Product(id, title, description, category, price, discountPercentage) {
        var _this = this;
        this.displayDetails = function () {
            return "".concat(_this.title, " costs $").concat(_this.price, ". The price with discount is $").concat(_this.getPriceWithDiscount(), " and the ID is: ").concat(_this.id, ".");
        };
        this.getPriceWithDiscount = function () {
            var discountAmount = (0, discountCalculator_1.discountCalculator)(_this.price, _this.discountPercentage);
            var finalPrice = _this.price - discountAmount;
            return parseFloat(finalPrice.toFixed(2));
        };
        this.id = id;
        this.title = title;
        this.description = description;
        this.category = category;
        this.price = price;
        this.discountPercentage = discountPercentage;
    }
    return Product;
}());
exports.Product = Product;
