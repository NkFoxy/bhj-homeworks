
const counter = document.getElementById('clicker__counter');
const image = document.getElementById('cookie');

image.onclick = function () {
    let click = parseInt(counter.textContent);
    click++;
    counter.textContent = click;
    image.width = image.width + 50;
    image.height = image.height + 50;
    setTimeout (() => {
        image.width = image.width - 50;
        image.height = image.height - 50;
    }, 100);
}

