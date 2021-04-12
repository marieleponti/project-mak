var images = [];
images[0] = "http://images.clipartpanda.com/square-clipart-square_solid_red5.png";
images[1] = "http://images.clipartpanda.com/square-clipart-jixEz4nET.png";
images[2] = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Yellow_triangle.svg/878px-Yellow_triangle.svg.png";
images[3] = "https://tse3.mm.bing.net/th?id=OIP.zanvgWxqEKLjTiyxEWOC9wHaHa&pid=Api";

x = -1, y = 0;
function Hello() {
   alert("Hello, World");
}

function onImageClick(winnerID, loserID) {
    alert("One point for: " + winnerID);
    // record point, access db?
    // switch images
    switchImage(winnerID, loserID);
}

// params so we know which image not to choose
function switchImage(id1, id2) {
    x = (x < images.length - 1) ? (x + 1) : 0;
    y = (y < images.length - 1) ? (y + 1) : 0;

    document.getElementById("id1").src = images[x];
    document.getElementById("id2").src = images[y];
    // loop through directory? while not id1 or id2...
}