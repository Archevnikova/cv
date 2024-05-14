import {message,greeting} from "./constanta";
import Typed from "typed.js";

function showText(n) {     
    const typed = new Typed('#info', {
      strings: message,
      typeSpeed: 105, // Скорость печати
      backSpeed: 100, // Скорость удаления
      startDelay: 400, // Задержка перед стартом анимации
      backDelay: 3000, // Пауза перед удалением 
      loop: false, // Повтор (true или false)
      loopCount: 0, // Число повторов, false = бесконечно
      showCursor: true, // Отображение курсора
      attr: null,
    });
    // typed.start();
           
  }

  
  function showGreeting(n) {     
    const typed = new Typed('#hi', {
      strings: greeting,
      typeSpeed: 105, // Скорость печати
      backSpeed: 100, // Скорость удаления
      startDelay: 400, // Задержка перед стартом анимации
      backDelay: 3000, // Пауза перед удалением 
      loop: false, // Повтор (true или false)
      loopCount: 0, // Число повторов, false = бесконечно
      showCursor: true, // Отображение курсора
      attr: null,
    });
  }

  

    window.onload = ()=>{ 
      showGreeting();
      showText();
    };  
     
     