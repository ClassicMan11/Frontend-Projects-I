//All this is to add an display an image once it has been selected

const fileInput = document.querySelector(".file-input"), //to get the file-input class from the html
previewImg = document.querySelector(".preview-img img"), //o get the preview-img class and img tag from the html
filterOptions = document.querySelector(".filter button"), //to get the filter class and button element
filterName = document.querySelector(".filter-info .name"), //to get the filter-info class and name class
filterSlider = document.querySelector(".slider input"), //to get the input tag from the slider class
filterValue = document.querySelector(".filter-info .value"), //to get the vale class from the filter-info class
chooseImgBtn = document.querySelector(".choose-img"), //to get the choose-img class from the html
saveImgBtn = document.querySelector(".save-img"); //to get the save-img class from the html

const loadImage = () => {
    let file = fileInput.files[0]; //to get the required files
    if(!file) return; //return if user hasn't selected any file
    previewImg.src = url.createObjectURl(file); //to display chosen file as img src
    previewImg.addEventListener("load", () => {
        document.querySelector(".container").classList.remove("disable"); //to remove the class of disable after the image has been loaded
    })
}

filterOptions.forEach(Option => {
    Option.addEventListener("click", () => { //this listens for onclick events
        document.querySelector(".filter .active").classList.remove("active"); //this removes the class of active from the selected html element
        Option.classList.add("active"); //to add the class of active
        filterName.innerText = Option.innerText //to replace the filter-info class with the name of the selected element 
    });
});

const updateFilter = () => {
    filterValue.innerText = `${filterSlider.value}%`; //to update the filterValue when the user moves the range slider
}

const saveImage = () => {
    const canvas = document.createElement("canvas"); //to create a canvas element
    const ctx = canvas.getContext("2d"); //to return a drawing context on the canvas
    canvas.width = previewImg.naturalWidth; //to set canvas width to actual image width
    canvas.height = previewImg.naturalHeight; //to set canvas height to actual image height

    ctx.drawImage(previewImg, 0, 0, canvas.width, canvas.height);
    document.body.appendChild(canvas)
}
fileInput.addEventListener("change", loadImage);
filterSlider.addEventListener("input", updateFilter) //to listen for an input by the user and automatically update the filter according to the value
chooseImgBtn.addEventListener("click", () => fileInput.click());
saveImgBtn.addEventListener("click", saveImage);