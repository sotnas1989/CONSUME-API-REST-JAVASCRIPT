let url = 'https://randomfox.ca/floof/';
/* The previos url returns a JSON with the following format 
    {
        "image": "https://randomfox.ca/images/111.jpg",
        "link": "https://randomfox.ca/?i=111"
    }
*/

function fetchingImageAPI(url)
{
    fetch(url)    
    .then(res => res.json())
    .catch((error) => alert(error.message))
    .then(data => {
        let image = document.querySelector('.img_API');
        image.src = data.image;
        image.title = data.image;       
    }).catch((error) => alert(error.message))
}

fetchingImageAPI(url);


const bton_next = document.getElementById("next");
bton_next.addEventListener('click', ()=>{
    fetchingImageAPI(url);
})
