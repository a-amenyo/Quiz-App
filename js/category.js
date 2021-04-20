
let selected = Array.from(document.getElementsByClassName("btn"));
const selectedCategory = 0;
 
for (select of selected){
    select.addEventListener("click", e => {
        const selectedChoice = e.target;
        const selectedCategory = selectedChoice.dataset["number"];
        localStorage.setItem('cat', selectedCategory);
        return window.location.assign("game.html");
    });
}