const tabsContainer = document.getElementById('tabs1');
const tabs = tabsContainer.querySelectorAll('.tab__navigation .tab');
const tabContents = tabsContainer.querySelectorAll('.tab__contents .tab__content');
let visibleTab = Math.max(0, [...tabs].findIndex(t => t.classList.contains('tab_active')));

for(let i=0; i<tabs.length; i++){
    tabs[i].addEventListener('click', function() {
        if (visibleTab !== i) {
            hideTab(visibleTab);
            showTab(i);
            visibleTab = i;    
        }
    });
}

function showTab(index) {
    tabs[index].classList.add('tab_active');
    tabContents[index].classList.add('tab__content_active');
}

function hideTab(index) {
    tabs[index].classList.remove('tab_active');
    tabContents[index].classList.remove('tab__content_active');
}