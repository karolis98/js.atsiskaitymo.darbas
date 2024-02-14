const backB = document.getElementById("back");

backB.addEventListener("click",() => {
    navigateToListPage();
    console.log()
}) 

 function navigateToListPage() {
    
    window.location.href = "index.html";
}

// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

const form = document.getElementById("modal-content animate");


form.onsubmit = async function(event) {
    event.preventDefault()
    const data = new FormData(event.target);
	const dataObject = Object.fromEntries(data.entries());
    // const product = {

    //     name: dataObject.name,
    //     price: dataObject.price,
    //     imgURL: dataObject.imgURL,
    //     productDescription: dataObject.description,
    //     location: dataObject.location
        
    //     };
const response = await fetch(
    `https://65c79f94e7c384aada6ebff3.mockapi.io/info`,{
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json',
        },
        body:(
            JSON.stringify(dataObject)
            )
                    
        }
        )
        console.log(response);
        }
