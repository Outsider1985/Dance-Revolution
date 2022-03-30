import JustValidate from '../../node_modules/just-validate/dist/just-validate.es.js';

export let form = () => {

  let sendButton = document.getElementById("send-button");
  let form = document.getElementById("contact-form");

  sendButton.addEventListener("click" , () => {


    let validation = new JustValidate("#contact-form");

    validation
    .addField('#name', [
      {
        rule: 'minLength',
        value: 3,
      },
      {
        rule: 'maxLength',
        value: 30,
      },
      {
        rule: 'required',
        errorMessage: 'El nombre es obligatorio.',
      },
    ])
    .addField('#email', [
      {
        rule: 'required',
        errorMessage: 'El email es obligatorio.',
      },
      {
        rule: 'email',
        errorMessage: 'El email es incorrecto!',
      },
    ]);

    let data = new FormData(form);
    console.log(validation.isValid);

    if(validation.isValid==true){

      for (var pair of data.entries()) {
        console.log(pair[0]+ ', ' + pair[1]); 
      }
      
    }else{console.log('Error de validación')}


  });

}