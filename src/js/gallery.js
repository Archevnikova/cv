const galleryArray = [
    "img/flag.png",
    "img/palette.png",
    "img/mountain.png",
    ];
const descriptionArray = [
    "English",
    "painting",
    "Snowboarding",
]

let arrayIndex = 0; //активная
const imgEl = document.querySelector(".skills__imgs img");//картинка
const leftBtn = document.querySelector(".left"); //левая 
const rightBtn = document.querySelector(".right");// правая 
const textEl = document.querySelector(".skills__languages-btn");// надпись

leftBtn.onclick = function(){ 
    if(arrayIndex === 0){
        arrayIndex = galleryArray.length - 1;
        arrayIndex = descriptionArray.length-1;
    } else {
        arrayIndex = arrayIndex - 1;
    }
    const src = galleryArray[arrayIndex];
    imgEl.src = src;

    const text = descriptionArray[arrayIndex];
    textEl.textContent = text;
}
rightBtn.onclick = function(){ 
    if(arrayIndex === galleryArray.length-1 && arrayIndex === descriptionArray.length-1){
        arrayIndex = 0;
    } else {
        arrayIndex++;
    }
    const src = galleryArray[arrayIndex];
    imgEl.src = src;

    const text = descriptionArray[arrayIndex];
    textEl.textContent = text;
}

