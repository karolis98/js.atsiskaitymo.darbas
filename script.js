const newAd = document.getElementById('newAd');
const detailsPage = document.getElementById('details');
const articleText = document.getElementById('articleText');


let mySound = new Audio('videoplayback.m4a');
mySound.addEventListener("canplaythrough", (event) => {
    mySound.play();
})

const image = document.createElement("img");
image.setAttribute("class", "newAdImg")
image.src = "./+.png";
newAd.append(image);


const createCardWithInfo =(info) =>{
    console.log('info ===', info);
    const newAd = document.createElement("a");
    const card = document.createElement("div");
    const price = document.createElement("p");
    const name = document.createElement("h2");
    const imgURL = document.createElement("img");
    const imgDiv = document.createElement("div");
    const detailsButton = document.createElement("button");
    
   
    card.setAttribute("class", "card");
    detailsButton.setAttribute("class", "details-button");
    detailsButton.setAttribute("data-id", info.id); 
    name.setAttribute("class", "card-title")
    imgDiv.setAttribute("class", "image-container");
    detailsButton.addEventListener("click", () => { 
        navigateToDetailsPage(info.id); 
    });
    
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
newAd.setAttribute("class", "new-ad");

newAd.addEventListener("click", () => {
    newAdPage();
})


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
    
    window.location.href = `details.html?id=${itemId}`;
}

const newAdPage = () => {
    window.location.href = "newAd.html"
}
fetchInfo();

