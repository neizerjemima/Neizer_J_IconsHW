console.log('JavaScript is running');

/*this is a JS block comment
the let statement creates a variable - a chunk of computer memory that can hold references to data that you want to save.we're storing a refernce to an element on the page with this line - we're telling JavaScript to look for the element with the ID we specify inside of the round brackets (the image tag with the ID of bitmapGraphic)*/

//Step 1 - select the elements you want the user to interact with
let bitmapGraphic = document.querySelector("#bitmapGraphic")

//Step 3 - what happens when event is triggered
function logID() {
    console.log(this.id);
}

//step 2 - how do you want the user to interact with the element?
bitmapGraphic.addEventListener('click',logID);

let svgGraphic =document.querySelector("#svgGraphic")

function logoID() {
    console.log(this.id);
}

svgGraphic.addEventListener('click',logID);