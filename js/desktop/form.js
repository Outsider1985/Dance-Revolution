import JustValidate from '../../node_modules/just-validate/dist/just-validate.es.js';

export let form = () => {

  let sendButton = document.getElementById("send-button");
  let form = document.getElementById("contact-form");

  sendButton.addEventListener("click" , (e) => {

    e.preventDefault();

    let validate = new JustValidate("#contact-form");

    validate.addField('#name', [
      {
        rule: 'minLength',
        value: 3,
      },
      {
        rule: 'maxLength',
        value: 30,
      },
    ])
    .addField('#email', [
      {
        rule: 'required',
        errorMessage: 'Email is required',
      },
      {
        rule: 'required',
        errorMessage: 'El email es obligatorio',
      }
    ]);

    let data = new FormData(form);

    // for (var pair of data.entries()) {
    //   console.log(pair[0]+ ', ' + pair[1]); 
    // }
  });

}