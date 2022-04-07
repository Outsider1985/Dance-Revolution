import {validator} from './validation.js';

export let form = () => {

  let sendButton = document.getElementById("send-button");
  let form = document.getElementById("contact-form");
  //let errorFields = document.querySelectorAll(".just-validate-error-label");

  sendButton.addEventListener("click" , () => {

    let data = new FormData(form);
    let validation = validator(form);

    console.log(validation);
  
    validation.onSuccess(() => {
      console.log('FORM SUBMITTED!'); 
      for (var pair of data.entries()) {
        console.log(pair[0]+ ', ' + pair[1]); 
      }
      validation.destroy();
    });

    validation.onFail( () => {
      console.log('FAILED FORM!'); 
      validation.destroy();
    });

  });

}