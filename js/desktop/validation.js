import JustValidate from '../../node_modules/just-validate/dist/just-validate.es.js';

export let validator = (form) => {

    let validation = new JustValidate("#" + form.id, {
        
        errorFieldCssClass: 'is-invalid',
        focusInvalidField: true,
        lockForm: true,
        errorsContainer: '#errors-container',

    });

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

    let invalidElements = document.querySelectorAll('.is-invalid');
    console.log(invalidElements);
    
    return validation;

}