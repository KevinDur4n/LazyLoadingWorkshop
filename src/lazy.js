
const isIntersecting = (entry) => {

    // Return true if is intersecting with viewport
    return entry.isIntersecting;
}



const action = (entry) =>{
    //console.log("Me veo");
    const nodo = entry.target;
    const img = nodo.firstChild;
    
    img.src = img.dataset.src;

    // Unlisten the image from the observer
    observer.unobserve(nodo)
}

// create observer
const observer = new IntersectionObserver((entries) =>{
   //Add the action to each entries
    entries.filter(isIntersecting).forEach(action);
});

// Export method to add register action a each image
export const registerImage = (image) =>{
    observer.observe(image);
}

