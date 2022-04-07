import JustValidate from '../../node_modules/just-validate/dist/just-validate.es.js';

export let validator = (form) => {

    let validation = new JustValidate("#" + form.id);

    validation.addField('#name', [
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
        }
    ])
    .addField('#email', [
        {
            rule: 'required',
            errorMessage: 'El email es obligatorio.',
        },
        {
            rule: 'email',
            errorMessage: 'El email es incorrecto!',
        }
    ]);

    return validation;
}