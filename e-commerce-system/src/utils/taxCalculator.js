let taxRate;
export function calculateTax(category, price) {
    if (category === "groceries") {
        taxRate = 3.00;
    }
    else {
        taxRate = 4.75;
    }
    let pricewithTax = price * (1 + taxRate / 100);
    return pricewithTax;
}
//# sourceMappingURL=taxCalculator.js.map