const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');
let sports = 21;
let geog = 10;

let category = localStorage.getItem('cat');
 
const sportsHighScores = JSON.parse(localStorage.getItem(sports)) || [];
const geogHighScores = JSON.parse(localStorage.getItem(geog)) || [];

const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

const MAX_HIGH_SCORES = 5;

finalScore.innerText = mostRecentScore;

username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value;
});

saveHighScore = (e) => {
    e.preventDefault();

    const score = {
        score: mostRecentScore,
        name: username.value,
    };
    if(category === "21") {
        sportsHighScores.push(score);
        sportsHighScores.sort((a, b) => b.score - a.score);
        sportsHighScores.splice(MAX_HIGH_SCORES);
        localStorage.setItem(category, JSON.stringify(sportsHighScores));
    } else if(category === "10") {
        geogHighScores.push(score);
        geogHighScores.sort((a, b) => b.score - a.score);
        geogHighScores.splice(MAX_HIGH_SCORES);
        localStorage.setItem(category, JSON.stringify(geogHighScores));
    }

    // highScores.push(score);
    // highScores.sort((a, b) => b.score - a.score);
    // highScores.splice(5);

    // localStorage.setItem('highScores', JSON.stringify(highScores));
    window.location.assign('index.html');
};
