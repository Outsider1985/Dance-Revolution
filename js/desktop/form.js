import {validator} from './validation.js';

export let form = () => {

  let sendButton = document.getElementById("send-button");
  let form = document.getElementById("contact-form");

  sendButton.addEventListener("click" , (event) => {

    let data = new FormData(form);
    let validation = validator(form);

    console.log(validation);
  
    validation.onSuccess((ev) => {


      // for (var pair of data.entries()) {
      //   console.log(pair[0]+ ', ' + pair[1]); 
      // }
    });

    validation.onFail( () => {
      console.log('FAILED FORM!'); 
    });

  });

}