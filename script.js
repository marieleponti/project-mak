"using strict"
// abstraction of image DB
const imagesArr =["charmander.png", "pikachu.png", "raichu.png", "nidoran.png",
"charmeleon.png", "flareon.png", "jigglypuff.png", "nidorina.png", "wigglytuff.png"];
const importImagesSources = ["http://images.clipartpanda.com/square-clipart-square_solid_red5.png", 
"http://images.clipartpanda.com/square-clipart-jixEz4nET.png",
"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Yellow_triangle.svg/878px-Yellow_triangle.svg.png",
"https://tse3.mm.bing.net/th?id=OIP.zanvgWxqEKLjTiyxEWOC9wHaHa&pid=Api"];

function getRandomImage(){
    //console.log("getRandomImage()")
    randomNum = Math.floor(Math.random() * imagesArr.length);
    // this will return an image
    return imagesArr[randomNum];
}

function getRandomImportedImageSource(){
    //console.log("getRandomImage()")
    //this will return image source
    randomNum = Math.floor(Math.random() * importImagesSources.length);
    return importImagesSources[randomNum];
}

//event listener for when page loads
document.addEventListener("DOMContentLoaded", () => {
    //add event listener to button
    document.getElementById("startBtn").addEventListener("click", startGame);
});

function startGame(){
    //console.log("startGame()")
    document.getElementById("startBtn").disabled = true;
    const myImage1 = document.getElementById("pic1");
    const myImage2 = document.getElementById("pic2");
    myImage1.src='picsMAK/' + getRandomImage();
    myImage2.src='picsMAK/' + getRandomImage();
    myImage1.addEventListener("click", swapImages);
    myImage2.addEventListener("click", swapImages);

    //imported images
    const myImage3 = document.getElementById("pic3");
    const myImage4 = document.getElementById("pic4");
    myImage3.src=getRandomImportedImageSource();
    myImage4.src=getRandomImportedImageSource();
    myImage3.addEventListener("click", swapImages);
    myImage4.addEventListener("click", swapImages);
}

function swapImages(event){
    const myImage1 = document.getElementById("pic1");
    const myImage2 = document.getElementById("pic2");
    myImage1.src='picsMAK/' + getRandomImage();
    myImage2.src='picsMAK/' + getRandomImage();

    //imported images
    const myImage3 = document.getElementById("pic3");
    const myImage4 = document.getElementById("pic4");
    myImage3.src=getRandomImportedImageSource();
    myImage4.src=getRandomImportedImageSource();
}
