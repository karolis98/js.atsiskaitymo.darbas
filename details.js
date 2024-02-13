const parentEl = document.getElementById("itemDetails");
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');
console.log(id);

const createCardWithInfo =(info) =>{
    const card = document.createElement("div");
    card.setAttribute("class", "single-item");
    const price = document.createElement("p");
    const title = document.createElement("h2");
    const image = document.createElement("img");
    const imageContainer = document.createElement("div");
    const detailsText = document.createElement("h4");
    const buttonsContainer = document.createElement("div");
    const backButton = document.createElement("button");
    const deleteButton = document.createElement("button");
    const location = document.createElement("p");

    // detailsButton.setAttribute("class", "details-button");
    // detailsButton.setAttribute("data-id", info.id); // Adding data-id attribute to store the item ID
    // detailsButton.addEventListener("click", () => { // Adding click event listener
        // navigateToDetailsPage(info.id); // Call function to navigate to details page
    // });
    detailsText.setAttribute("class", "details-text");
    price.setAttribute("class", "price");
    title.setAttribute("class", "title");
    buttonsContainer.setAttribute("class", "buttons-container");
    imageContainer.setAttribute("class", "single-image-container");
    backButton.setAttribute("class", "back-button");
    location.setAttribute("class", "location");

    backButton.addEventListener("click",() => {
        navigateToListPage();
    }) 
    deleteButton.setAttribute("class", "delete-button");
    deleteButton.addEventListener("click",() => {
        deleteItem(id);
    }) 



    backButton.innerText = "Back";
    deleteButton.innerText = "Delete ad";
    title.innerText = info.name;
    detailsText.innerText = info.productDescription;
    price.innerText = `Price: ${info.price}$`;
    location.innerText = `Location: ${info.location}`;

    image.src = info.imgURL;
    buttonsContainer.append(backButton, deleteButton);
    imageContainer.append(image);
    



    card.append(imageContainer);           
    card.append(title);
    card.append(price);
    card.append(location);
    // card.append(detailsButton);
    card.append(detailsText);
    card.append(buttonsContainer);
    return card;
}

const navigateToListPage = () => {
    
    window.location.href = "index.html";
}

const fetchInfo = async (id)=>{
    const response = await fetch(
        `https://65c79f94e7c384aada6ebff3.mockapi.io/info/${id}`
        );

        const info = await response.json();
    
        console.log('info ===', info);
    const card = createCardWithInfo(info);
    parentEl.append(card)

}
fetchInfo(id);


const deleteItem = async (id) => {
    alert("Ad is deleted!");
    const response = await fetch(
        `https://65c79f94e7c384aada6ebff3.mockapi.io/info/${id}`,{
            method: 'DELETE', 
            headers: {
              'Content-Type': 'application/json',
            },
            
          }
    )
    const result =  await response.json();
    console.log('result ===', result);
    navigateToListPage();

} 