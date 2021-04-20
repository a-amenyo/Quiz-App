const highScoresList = document.getElementById("highScoresList");
const cat = document.querySelector("#sports"); 
const cat2 = document.querySelector("#geog"); 



const selectedCategory = 0;
 
function getCategory(){
  const highScores = JSON.parse(localStorage.getItem("21")) || [];
  highScoresList.innerHTML = highScores.map(score => {
      return `<li class="high-score">${score.name} - ${score.score}</li>`;
  }).join("");
}

function getCategory2(){
  const highScores = JSON.parse(localStorage.getItem("10")) || [];
  highScoresList.innerHTML = highScores.map(score => {
      return `<li class="high-score">${score.name} - ${score.score}</li>`;
  }).join("");
}

cat.addEventListener("click", getCategory); 
cat2.addEventListener("click", getCategory2);




