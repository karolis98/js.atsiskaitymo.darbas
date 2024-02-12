const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');
console.log(id);

const fetchInfo = async (id)=>{
    const response = await fetch(
        `https://65c79f94e7c384aada6ebff3.mockapi.io/info/${id}`
        );

        const info = await response.json();
    console.log('info ===', info);
}
fetchInfo(id);