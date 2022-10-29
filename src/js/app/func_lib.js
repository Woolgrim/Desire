//Обробка натискання на любий елемент сторінки
window.onload = function(){
    document.addEventListener('click', documentActions);
    
    function documentActions (a){
        const targetElement = a.target;

        if (targetElement.classList.contains('btn_clas')){
            // Подія
        }
    }
}

//Знаходження позицій елемента
function getCoords(elem) {
    let box = elem.getBoundingClientRect();
    let scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
    return {
      top: box.top + scrollTop,
      left: box.left + scrollLeft
    };
}

//Рандомне число
function getRandom (max, min = 0) {
    return Math.round(Math.random() * (max - min) + min)
}

//Мова браузера
var userLang = navigator.language || navigator.userLanguage; 
console.log(userLang);