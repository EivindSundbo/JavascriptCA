const spesificMeme = document.querySelector(".spesificMeme");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);

const id = params.get("id")
console.log(id);



const url = "https://api.imgflip.com/get_memes/" + id;

console.log(url)


async function collectMeme(){
    
    try {
        const response = await fetch(url);
        const results = await response.json();
        const data = results.data.memes;
    
        console.log(data);

        createHtml(data);

        
    }
    catch (error) {
        console.log(error);
        container.innerHTML = `
                                <div>
                                    <h2>Errors</h2>
                                    <img class="img" src="https://i.imgflip.com/1ihzfe.jpg" alt="">
                                    <h2>Errors everywhere</h2>
                                </div>`
    }
}

collectMeme();



function createHtml(data){
    spesificMeme.innerHTML = `<div>
                            <h2>${data.name}</h2>
                            <img class="img" src="${data.url}" alt="">
                            <p>Image ID: ${data.id}</p>
                        </div>`;
}

