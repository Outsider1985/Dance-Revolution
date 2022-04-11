import {validator} from './validation.js';

export let form = () => {

  let sendButton = document.getElementById("send-button");
  let form = document.getElementById("contact-form");
  let popup = document.getElementById("popup-valid-form");
  
  sendButton.addEventListener("click" , () => {

    let data = new FormData(form);
    let validation = validator(form);
  
    validation.onSuccess(() => {

      console.log('FORM SUBMITTED!');

      for (var pair of data.entries()) {
        console.log(pair[0]+ ', ' + pair[1]); 
      }

      popup.classList.add('popup_is_active');
      setTimeout( () => {popup.classList.remove('popup_is_active')}, 5000);

    });

    validation.onFail( () => {

      console.log('FAILED FORM!'); 
    
    });

  });

}