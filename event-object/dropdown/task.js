const dropdown = document.getElementsByClassName('dropdown')[0];
const menu = document.getElementsByClassName('dropdown__list')[0];
const links = document.getElementsByClassName('dropdown__link');
const selected = document.getElementsByClassName('dropdown__value')[0];

dropdown.onclick = function () {
    menu.classList.add('dropdown__list_active');
    return false;
}

for (let i=0; i<links.length; i++) {
    links[i].onclick = function(event) {
        event.stopPropagation();
        selected.innerText = links[i].innerText;
        menu.classList.remove('dropdown__list_active');
        return false;  
    }

}
