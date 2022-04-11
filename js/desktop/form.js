import {validator} from './validation.js';
import {popup} from './popup.js';

export let form = () => {

  let sendButton = document.getElementById("send-button");
  let form = document.getElementById("contact-form");
  
  sendButton.addEventListener("click" , () => {

    let data = new FormData(form);
    let validation = validator(form);
  
    validation.onSuccess(() => {

      console.log('FORM SUBMITTED!');

      for (var pair of data.entries()) {
        console.log(pair[0]+ ', ' + pair[1]); 
      }

      popup('success', 'Mensaje enviado correctamente');
    });

    validation.onFail( () => {

      popup('error', 'Revise el formulario');
    
    });

  });

}