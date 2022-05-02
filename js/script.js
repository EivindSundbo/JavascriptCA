const container = document.querySelector(".container");
const url = "https://api.imgflip.com/get_memes" 




async function makeApiCall() {
    try {
        const response = await fetch(url);
        const results = await response.json();
        const data = results.data.memes;

        console.log(data);
        
        container.innerHTML = "";

        for(let i = 0; i < data.length; i ++){
            console.log(data[i]);
            

            container.innerHTML += `<a href="details.html?id=${data[i].id}" class="details">
                                        <h2>${data[i].name}</h2>
                                        <img class="img" src="${data[i].url}" alt="">
                                        <p>Image ID: ${data[i].id}</p>
                                    </a>`
        }


    } catch (error) {
        console.log(error);
        container.innerHTML = `
                                <div>
                                    <h2>Errors</h2>
                                    <img class="img" src="https://i.imgflip.com/1ihzfe.jpg" alt="">
                                    <h2>Errors everywhere</h2>
                                </div>`
    }
}

makeApiCall()