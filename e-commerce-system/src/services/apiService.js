import * as customeErrors from "../utils/errorHandler.js";
export async function fetchProducts() {
    try {
        const res = await fetch('https://dummyjson.com/products');
        if (!res.ok) {
            throw new customeErrors.NetworkError((` 🛑 Network Error: ${res.status}`));
        }
        const data = await res.json();
        console.log(`✅ Successfully fetched ${data.products.length} products.`);
        // console.log(data.products);
        return data.products;
    }
    catch (e) {
        console.error(new customeErrors.DataError(`Could not get products: ${e}`));
        throw Error;
    }
}
//# sourceMappingURL=apiService.js.map