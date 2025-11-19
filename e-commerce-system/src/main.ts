import * as product from "../src/models/Product";
import * as apiCalls from "../src/services/apiService";
import * as customErrors from "../src/utils/errorHandler";
import {discountCalculator} from "../src/utils/discountCalculator";
import {calculateTax}from "../src/utils/taxCalculator";



async function main(){
    console.log("--- Starting E-commerce Data Processing Application ---");
    console.log("Fetching product data from Products API...");
    try{
     const productDataArray: product.Product[] = await apiCalls.fetchProducts(); 
     productDataArray.forEach((productData)=>{
        const productInstance = new product.Product(
        productData.id, 
        productData.title, 
        productData.description, 
        productData.category, 
        productData.price, 
        productData.discountPercentage
    );
       console.log(productInstance.displayDetails());
        // console.log(`${product.displayDetails()}`);
     } )
     }catch(error){
         customErrors.handleError(error);
     }
  }
main();