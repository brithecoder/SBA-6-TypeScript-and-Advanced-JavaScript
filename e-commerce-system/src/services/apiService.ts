import * as customeErrors from "../utils/errorHandler";
import type { Product } from "../models/Product";


interface RealApiResponse{
    products: Product[];
    total: number;
}

export async function fetchProducts(): Promise  <Product[]> {
    try{
      const res = await fetch(
        'https://dummyjson.com/products'
      )
      if(!res.ok){
        throw new customeErrors.NetworkError((` 🛑 Network Error: ${res.status}`));
      }
      const data: RealApiResponse = await res.json();
      console.log(`✅ Successfully fetched ${data.products.length} products.`);
      return data.products;
    }catch(e){
     console.error( new customeErrors.DataError(`Could not get products: ${e}`));
    }
    throw Error;
    
}
fetchProducts();