

let taxRate: number;
export function calculateTax(category: string, price: number): number{
    if(category === "groceries"){
        taxRate = 3.00;
    }else{
        taxRate = 4.75;
    }
       let pricewithTax = price * (1 + taxRate / 100);
      return pricewithTax ;       
}