const calcBtn = document.querySelector(".calc");
const cosmoBtn = document.querySelector(".cosmo");
const cardHeader = document.querySelector(".projects__card-header");
const cardImg = document.querySelector(".projects__card-img");
const cardDescription = document.querySelector(".projects__card-description");
const linkBtn = document.querySelector(".projects__card-git");
const projectBtn = document.querySelectorAll(".projects__btn > .projects__btn-link");
// const indexProjectBtn = 0;

calcBtn.onclick = function(){ 
    cardHeader.textContent = "calculator";
    cardImg.src = "./img/calc2.png";
    cardDescription.textContent = "Made using Jquery HTML CSS JavaScript";
    linkBtn.href = "https://github.com/Archevnikova/-iphone-calculator";
    

    
    for (let i = 0; i <= projectBtn.length; i++){
        projectBtn[i].style.backgroundColor = "#7733FF";
    }

};
cosmoBtn.onclick = function(){
    cardHeader.textContent = "space tourism";
    cardImg.src = "./img/cosmotur.png";
    cardDescription.textContent = "Only HTML CSS";
    linkBtn.href= "https://github.com/Archevnikova/cosmo";
}