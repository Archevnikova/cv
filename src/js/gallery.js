const galleryArray = [
    "img/Rectangle 76.png",
     "img/Rectangle 62.png",
     "img/Rectangle 63.png",];


let arrayIndex = 0; //активная
const imgEl = document.querySelector(".skills__imgs img");//картинк
// const skillImgs = document.querySelectorAll(".skills__imgs")//контейнер картинок
const leftBtn = document.querySelector(".left"); //левая 
const rightBtn = document.querySelector(".right");// правая 

leftBtn.onclick = function(){ 
    if(arrayIndex === 0){
        arrayIndex = galleryArray.length - 1;
    } else {
        arrayIndex = arrayIndex - 1;
    }
    const src = galleryArray[arrayIndex];
    imgEl.src = src;
}
rightBtn.onclick = function(){ 
    if(arrayIndex === galleryArray.length-1){
        arrayIndex = 0;
    } else {
        arrayIndex++;
    }
    const src = galleryArray[arrayIndex];
    imgEl.src = src;
}














// leftBtn.addEventListener("click",function(){
//     current = current + 300;//увеличиваем значение current += 300
//     skillImgs.style.left = current +"px"
// })
// const imgs = Array.from (skills__imgs.querySelectorAll(".skills__imgs-picture"));//массив картинок
// const imgCount = imgs.length;

// rightBtn.addEventListener("click",showPrevious);//слушатели событий кнопки
// leftBtn.addEventListener("click",showNext);


// function showPrevious(){
//     currentImg = (imgCount - 1 + imgCount) % imgCount;
//     updateSlider();
// }

// function showNext(){ 
//     currentImg = (currentImg + 1) % imgCount;
//     updateSlider();
// }


// //обновление показыывает текущий и скрывает остальное
// function updateImg() {
//     imgs.forEach((slide, index) => {
//       if (index === currentImg) {
//         slide.style.display = 'block';
//       } else {
//         slide.style.display = 'none';
//       }
//     });
// }
// updateImg();

