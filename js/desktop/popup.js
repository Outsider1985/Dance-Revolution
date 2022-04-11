export let popup = (type, message) => {

    let popup = document.getElementById("popup-valid-form");

    popup.classList.add('popup_is_active');
    popup.classList.add(type);
    popup.innerHTML = message;

    setTimeout( () => {
        popup.classList.remove('popup_is_active');
        popup.classList.remove(type);
    }, 5000);
  
}