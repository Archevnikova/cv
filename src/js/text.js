import {message} from "./constanta";
import Typed from "typed.js";

function showText(n) {     
    const typed = new Typed('#info', {
      strings: message,
      typeSpeed: 35, // Скорость печати
      backSpeed: 20, // Скорость удаления
      startDelay: 400, // Задержка перед стартом анимации
      backDelay: 3000, // Пауза перед удалением 
      loop: false, // Повтор (true или false)
      loopCount: 0, // Число повторов, false = бесконечно
      showCursor: true, // Отображение курсора
      attr: null,
    });
    // typed.start();
           
  }
    
    window.onload = ()=>{ 
      
      showText();
    };  
     
     