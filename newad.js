const backB = document.getElementById("back");

backB.addEventListener("click",() => {
    navigateToListPage();
    console.log()
}) 

 function navigateToListPage() {
    
    window.location.href = "index.html";
}


var modal = document.getElementById('id01');


window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

const form = document.getElementById("modal-content animate");

function navigateToListPage() {
    
    window.location.href = "index.html"}

form.onsubmit = async function(event) {
    event.preventDefault()
    const data = new FormData(event.target);
	const dataObject = Object.fromEntries(data.entries());
 
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

        navigateToListPage();
        }