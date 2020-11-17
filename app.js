// declare variables
const leftBtn = document.querySelector('.leftBtn');
const rightBtn = document.querySelector('.rightBtn')
const images = ['images/image1.jpg','images/image2.jpg','images/image3.jpg','images/image4.jpg'];
let i = 1;
// Functions
function backwards(){
 document.querySelector("#singleImg").src=`images/image${i}.jpg`;
 i--;
 console.log(i)
}

function forwards(){
 document.querySelector("#singleImg").src=`images/image${i}.jpg`;
 i++;
 console.log(i)
}
// Event Listeners
leftBtn.addEventListener('click', backwards);
rightBtn.addEventListener('click', forwards);