// declare variables
const leftBtn = document.querySelector('.leftBtn');
const rightBtn = document.querySelector('.rightBtn')
const images = ['images/image1.jpg','images/image2.jpg','images/image3.jpg','images/image4.jpg'];
let i = 1;
// Functions
function backwards(){
 i--;
 if(i <= 0){
 	i = 4;
 }
 // console.log(i)
 document.querySelector("#singleImg").src=`images/image${i}.jpg`;
 

}

function forwards(){
 i++;
  if(i >= 5){
 	i = 1;
 }
 document.querySelector("#singleImg").src=`images/image${i}.jpg`;

 // console.log(i)
}
// Event Listeners
leftBtn.addEventListener('click', backwards);
rightBtn.addEventListener('click', forwards);