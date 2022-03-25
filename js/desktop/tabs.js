export let tabBtns = () => {

let tabTriggerBtns = document.querySelectorAll('.tabButton');

tabTriggerBtns.forEach(tabTriggerBtn => {
  tabTriggerBtn.addEventListener('click', function(){
    let tabTrigger = this;
    let tabTriggerData = tabTrigger.getAttribute('data-tab-trigger');
    let tabContent = document.querySelector('.tab-content');
    let currentTabData = document.querySelector('.tab-content[data-tab-content="' + tabTriggerData + '"]').classList.add('is-open');

    if(tabContent !== currentTabData) {
      tabContent.classList.toggle('is-open');
    }

    if(tabTrigger.classList.contains('is-active')) {
      tabTrigger.classList.remove('is-active');
    }
    else {
      tabTriggerBtn.classList.remove('is-active');
      tabTrigger.classList.add('is-active');
    }   
  });
});

}