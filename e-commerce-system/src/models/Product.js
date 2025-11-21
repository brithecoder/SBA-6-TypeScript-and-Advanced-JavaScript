import { discountCalculator } from "../utils/discountCalculator.js";
import { calculateTax } from "../utils/taxCalculator.js";
export class Product {
    id;
    title;
    description;
    category;
    price;
    discountPercentage;
    imageUrl;
    constructor(id, title, description, category, price, discountPercentage, imageUrl) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.category = category;
        this.price = price;
        this.discountPercentage = discountPercentage;
        this.imageUrl = imageUrl;
    }
    displayDetails = () => {
        return `👉 ${this.title} costs $${this.price}. The price with discount is $${this.getPriceWithDiscount()}. The price with discount and tax is $${this.getPriceWithDiscountPlusTax()}.`;
    };
    displayDescription = () => {
        return `${this.description}`;
    };
    getPriceWithDiscount = () => {
        const discountAmount = discountCalculator(this.price, this.discountPercentage);
        const finalPrice = this.price - discountAmount;
        return parseFloat(finalPrice.toFixed(2));
    };
    getPriceWithDiscountPlusTax = () => {
        const pricewithTax = calculateTax(this.category, this.getPriceWithDiscount());
        return parseFloat(pricewithTax.toFixed(2));
    };
}
//# sourceMappingURL=Product.js.map