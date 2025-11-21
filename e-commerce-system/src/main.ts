
import * as product from "./models/Product.js";
import * as apiCalls from "./services/apiService.js";
import * as customErrors from "./utils/errorHandler.js";



document.addEventListener('DOMContentLoaded', () => {
    const itemListBody = document.getElementById('itemList');
    main(itemListBody); 
});


async function main(itemListBody: HTMLElement | null){
    console.log("--- Starting E-commerce Data Processing Application ---");
    console.log("Fetching product data from Products API...");
    try{
        const rawProductDataArray: any[] = await apiCalls.fetchProducts(); 
        
        //  Use .map() to transform raw data into functional Product instances
        const productInstances = rawProductDataArray.map((productData) => {
            const instance = new product.Product(
                productData.id, 
                productData.title, 
                productData.description, 
                productData.category, 
                productData.price, 
                productData.discountPercentage,
                productData.images[0]
            );
            console.log(instance.displayDetails() + " " + instance.displayDescription());
            return instance; 
        });  
        renderItemList(productInstances, itemListBody);
        return productInstances;
     }catch(error){
         customErrors.handleError(error);
     }finally{
      console.log("❤️ This is the end of the program ❤️")
    } 
}


function renderItemList(productDataArray: product.Product[], itemListBody: HTMLElement | null) {
 if (itemListBody){
    itemListBody.innerHTML ='';
    
    productDataArray.forEach((item) => {
        const listItem = document.createElement("li");
        const card = document.createElement("div");
        card.classList.add("card", "text-center", "card-spacing");

        const cardHeader = document.createElement("div");
        cardHeader.classList.add("card-header");
        cardHeader.textContent = item.category;
        
        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body");
          
        const cardTitle = document.createElement("h5");
        cardTitle.classList.add("card-title");
        cardTitle.textContent = item.title;
       
        const cardImage = document.createElement("img");
        cardImage.classList.add("card-img-top");
        cardImage.src = item.imageUrl; 
        cardImage.alt = item.title;

        cardImage.style.maxHeight = "180px";
        cardImage.style.width = "auto";
        cardImage.style.objectFit = "cover";

        const cardContent = document.createElement("p");
        cardContent.classList.add("card-text");
        cardContent.textContent = item.description;

        const addToCartButton = document.createElement("button");
        addToCartButton .classList.add("btn", "btn-primary");
        addToCartButton .textContent = "Add To Cart";

        const cardFooter = document.createElement("div");
        cardFooter.classList.add("card-footer", "text-body-secondary");
        cardFooter.textContent = item.displayDetails(); 
         
        // Append content to the card
        card.appendChild(cardHeader);
        card.appendChild(cardBody);
        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardImage);
        cardBody.appendChild(cardContent);
        cardBody.appendChild(addToCartButton );
        card.appendChild(cardFooter);
        
        // Append the card to the list item
        listItem.appendChild(card);
        itemListBody.appendChild(listItem); 
    });
}else{
      console.error( new customErrors.DataError(`Could not find list container.`));         
    }
}  
