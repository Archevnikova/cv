import "./img/avatar.png" ;
import "./img/Component16.png";
import "./style/style.scss";
import "./style/reset.scss";
import "./style/link.scss";
import "./style/header/header.scss";
import "./style/about/about.scss";
import "./style/projects/projects.scss";
import "./style/skills/skills.scss";
import "./style/contact/contact.scss";
import { message } from "./js/constanta";
import Typed from "typed.js";

let typed = 999;
 
function showHideText (n) {
    if (n == 1)  {
         if (typed == 999){
           typed = new Typed('#info', {
             strings: message,
             typeSpeed: 35, // Скорость печати
             backSpeed: 20, // Скорость удаления
             startDelay: 400, // Задержка перед стартом анимации
             backDelay: 3000, // Пауза перед удалением 
             loop: false, // Повтор (true или false)
             loopCount: 0, // Число повторов, false = бесконечно
             showCursor: true, // Отображение курсора
             attr: null,
            //  onStringTyped: (arrayPos, self) => {
            //    onlightShadow(arrayPos)
            // },
           })
         } else {
           typed.start()
         }
     } else if (n == 0) {    
       typed.stop()
    //    offlightShadow()
     } 
   }
   