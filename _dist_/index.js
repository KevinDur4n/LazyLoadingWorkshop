import { registerImage } from './lazy.js'

const nodeImages = document.querySelector('#images');


const random = () => Math.floor(Math.random() * (100 - 1)) + 1

const createImageNode = (id) => {

    //create element IMG
    const image = document.createElement('img');


    image.className = "mx-auto";
    image.width = "320";
    image.onload = (event) => {
        console.log(`Se ha cargado la imagen:${id}`);
        event.target.parentElement.className = "";
        event.target.style.visibility = "";  
    }
    

    image.style.visibility = "hidden"

    //Add url to dataset
    image.dataset.src = `https://randomfox.ca/images/${id}.jpg`;
    

    return image;
}

const wrapImageNodes = (nodes) => {

    //Create element DIV

    const wrapperDiv = document.createElement('div');
    wrapperDiv.className = "p-4 flex justify-center"
    wrapperDiv.append(...nodes);

    return wrapperDiv;

}

// Get the first image
//nodeImages.append(wrapImageNode(createImageNode(random())));


const btn_image = document.querySelector('#btn-add-image');

btn_image.addEventListener('click', (event)=>{
    //Get a image aleatorie from the API randomfox and wrappe it in a div.
    const image = createImageNode(random());
    const divFake = document.createElement('div');

    //divFake.className ="bg-black inline-block ";
    divFake.classList.add('lazy-loading');
    divFake.appendChild(image)
    const container = wrapImageNodes([divFake]);
    
    

    nodeImages.append(container);
    registerImage(divFake);

});





