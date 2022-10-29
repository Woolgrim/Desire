export const burgerClik = () => {
    const burger = document.getElementById("burger");
    const body = document.getElementById("body");
    const nav = document.getElementById("nav");
    
    burger.onclick = () => {
        burger.classList.toggle('active');
        body.classList.toggle('lok');
        nav.classList.toggle('active');
    }
}

burgerClik();