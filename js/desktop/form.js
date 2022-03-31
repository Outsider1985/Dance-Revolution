import JustValidate from '../../node_modules/just-validate/dist/just-validate.es.js';

export let form = () => {

  let sendButton = document.getElementById("send-button");
  let form = document.getElementById("contact-form");

  sendButton.addEventListener("click" , () => {

    let data = new FormData(form);
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
    ])
    .onFail(() => {

      alert('FAILED FORM!');
      console.log('FAILED FORM!'); 

    })
    .onSuccess((ev) => {

      ev?.preventDefault();

      alert('FORM SUBMITTED!');
      console.log('FORM SUBMITTED!'); 
      for (var pair of data.entries()) {
        console.log(pair[0]+ ', ' + pair[1]); 
      }

    });

  });

}