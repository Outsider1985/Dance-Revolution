export let tabBtns = () => {

let tabBtns = document.querySelectorAll('.tab');
let tabContents = document.querySelectorAll('.product-course-description');

tabBtns.forEach(tabBtn => {

  tabBtn.addEventListener('click', function(){

    let tabTriggerData = tabBtn.dataset.tabtrigger;

    tabBtns.forEach( tabBtn => {

      tabBtn.classList.remove('is_selected');
    
    });
    
    tabContents.forEach( tabContent => {
    
      tabContent.classList.remove('is_active');
      
    });
    
    document.querySelector('.tab[data-tabtrigger="' + tabTriggerData + '"]').classList.add('is_selected');
    document.querySelector('.product-course-description[data-tabcontent="' + tabTriggerData + '"]').classList.add('is_active');

  });
});

}