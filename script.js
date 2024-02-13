const detailsPage = document.getElementById('details');
const articleText = document.getElementById('articleText');

const createCardWithInfo =(info) =>{
    console.log('info ===', info);
    const card = document.createElement("div");
    card.setAttribute("class", "card");
    const price = document.createElement("p");
    const name = document.createElement("h2");
    const imgURL = document.createElement("img");
    const imgDiv = document.createElement("div");
    const detailsButton = document.createElement("button");

    detailsButton.setAttribute("class", "details-button");
    detailsButton.setAttribute("data-id", info.id); // Adding data-id attribute to store the item ID
    detailsButton.addEventListener("click", () => { // Adding click event listener
        navigateToDetailsPage(info.id); // Call function to navigate to details page
    });
    
    imgDiv.setAttribute("class", "image-container");
    name.innerText = info.name;
    detailsButton.innerText = "Details";
    price.innerText = `Price: ${info.price}$`;
    imgURL.src = info.imgURL;

    imgDiv.append(imgURL);
    card.append(name);
    card.append(imgDiv);           
    card.append(price);
    card.append(detailsButton);
    return card;
}

const fetchInfo = async ()=>{
    const response = await fetch(
        "https://65c79f94e7c384aada6ebff3.mockapi.io/info"
        );

        const info = await response.json();
        
        const sortedItems = info.sort((a, b) => {
            const aPrice = parseInt(a.price)
            const bPrice = parseInt(b.price)
            if (aPrice > bPrice) {
                return 1;
            }
            if (aPrice < bPrice) {
                return -1;
            }
            if (aPrice === bPrice) {
                return 0;
            }
        })
        console.log('info ===', info);
        console.log('sortedItems ===', sortedItems);

        sortedItems.forEach((info) => {
            const card =  createCardWithInfo(info)
            articleText.append(card);

        });
}
const navigateToDetailsPage = (itemId) => {
    // Navigate to another page with item ID in the URL
    window.location.href = `details.html?id=${itemId}`;
}

fetchInfo();

