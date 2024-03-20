let dead = 0;
let lost = 0;

for (let i = 1; i <= 9; i++) {
    const holeElement = getHole(i);
    holeElement.onclick = onHoleClick;
}

function getHole(index) {
    return document.getElementById(`hole${index}`);
}

function onHoleClick() {
    let element = this;
    if (element.className.includes('hole_has-mole')) {
        dead++;
    }
    else {
        lost++;
    }
    updateUI();
    checkGameOver();
}

function updateUI() {
    document.getElementById('dead').textContent = dead.toString();
    document.getElementById('lost').textContent = lost.toString();
}

function checkGameOver() {
    if (dead >= 10) {
        alert("Победа!");
        resetGame();
    }
    else if (lost >= 5) {
        alert("Вы проиграли!");
        resetGame();
    }
}

function resetGame() {
    dead = 0;
    lost = 0;
    updateUI();
}
