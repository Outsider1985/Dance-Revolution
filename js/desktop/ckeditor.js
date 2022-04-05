import '../../node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js';

export let ckeditor = () => {

        ClassicEditor
        .create( document.querySelector( '.ckeditor' ) )
        .then( editor => {
            window.editor = editor;
        } )
        .catch( error => {
            console.error( 'There was a problem initializing the editor.', error );
        } );


}