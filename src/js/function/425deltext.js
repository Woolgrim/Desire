export const delText = {
    width: window.screen.width,
    el: [document.getElementById("fb"), document.getElementById("in"), document.getElementById("pi"), document.getElementById("wt"), document.getElementById("yo")],
    dell: () => {
        if (delText.width < 425) {
            for (let i = 0; i < delText.el.length;  i++) {
                delText.el[i].innerText = "";
            }
        }
    } 
}

delText.dell();