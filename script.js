"using strict"
// abstraction of image DB
// const imagesLocal =["charmander.png", "pikachu.png", "raichu.png", "nidoran.png",
// "charmeleon.png", "flareon.png", "jigglypuff.png", "nidorina.png", "wigglytuff.png"];
const imageSources = ["http://images.clipartpanda.com/square-clipart-square_solid_red5.png", 
"http://images.clipartpanda.com/square-clipart-jixEz4nET.png",
"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Yellow_triangle.svg/878px-Yellow_triangle.svg.png",
"https://tse3.mm.bing.net/th?id=OIP.zanvgWxqEKLjTiyxEWOC9wHaHa&pid=Api"];

/*This function takes the number of images to be displayed (e.g. 2) and 
*returns an array of image sources, randomly taken from the source array
*without any repeated images. It returns an array of distinct image sources.
*/
function getRandomImageSources(imageCount){
    let map = new Map();
    let images = []
    for (let i = 0; i < imageCount; i++){
        randomNum = Math.floor(Math.random() * imageSources.length);
        if (!map.has(randomNum)){
            images[i] = imageSources[randomNum];
            map.set(randomNum, i);
        } else {
            //if randomNum is key in map, its image source already been used
            while(map.has(randomNum)){
                randomNum = Math.floor(Math.random() * imageSources.length);
            }
            images[i] = imageSources[randomNum];
            map.set(randomNum, i);
        }
    }
    return images;
}

/*Takes argument of number of images to be displayed and returns an array
*of distinct images (from local directory.) While getRandomImageSources()
*is to be used for non-local image sources and returns **image sources**,
*this function returns the .png of images stored on local device. 
*/
// function getRandomImagesLocal(imageCount){
//     let map = new Map();
//     let images = []
//     for (let i = 0; i < imageCount; i++){
//         randomNum = Math.floor(Math.random() * imagesLocal.length);
//         if (!map.has(randomNum)){
//             images[i] = imagesLocal[randomNum];
//             map.set(randomNum, i);
//         } else {
//             //if randomNum is key in map, its image source already been used
//             while(map.has(randomNum)){
//                 randomNum = Math.floor(Math.random() * imagesLocal.length);
//             }
//             images[i] = imagesLocal[randomNum];
//             map.set(randomNum, i);
//         }
//     }
//     return images;
// }

//event listener for when page loads
document.addEventListener("DOMContentLoaded", () => {
    //add event listener to button
    document.getElementById("startBtn").addEventListener("click", startGame);
});

function startGame(){
    //console.log("startGame()")
    document.getElementById("startBtn").disabled = true;
    //imported images
    const myImage1 = document.getElementById("pic1");
    const myImage2 = document.getElementById("pic2");
    arrRandom=getRandomImageSources(2);
    myImage1.src=arrRandom[0];
    myImage2.src=arrRandom[1];
    myImage1.addEventListener("click", swapImages);
    myImage2.addEventListener("click", swapImages);

    //local images
    // const myImage3 = document.getElementById("pic3");
    // const myImage4 = document.getElementById("pic4");
    // arrRandomLocal = getRandomImagesLocal(2);
    // myImage3.src='picsMAK/' + arrRandomLocal[0];
    // myImage4.src='picsMAK/' + arrRandomLocal[1];
    // myImage3.addEventListener("click", swapImages);
    // myImage4.addEventListener("click", swapImages);
}

function swapImages(event){
    //imported images
    const myImage1 = document.getElementById("pic1");
    const myImage2 = document.getElementById("pic2");
    arrRandom=getRandomImageSources(2);
    myImage1.src=arrRandom[0];
    myImage2.src=arrRandom[1];

    //local images
    // const myImage3 = document.getElementById("pic3");
    // const myImage4 = document.getElementById("pic4");
    // arrRandomLocal = getRandomImagesLocal(2);
    // myImage3.src='picsMAK/' + arrRandomLocal[0];
    // myImage4.src='picsMAK/' + arrRandomLocal[1];
}
