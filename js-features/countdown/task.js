const timer = document.getElementById("timer");
let a = parseInt(timer.textContent);

let timerId = setInterval(() => {
    a--;
    timer.textContent = a;
    if (a === 0) {
        clearInterval(timerId);
        alert("Вы победили в конкурсе");
    }
}, 1000);
