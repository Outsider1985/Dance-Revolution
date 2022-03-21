// Función que abre y cierra el menú de hamburguesa mobile device
export let renderMenu = () => {
    //damos memoria para crear las varibles y las ligamos a las IDs del proyecto
    let hamburguer = document.getElementById("hamburguer");
    let menu = document.getElementById("menubar");
    //Agregamos evento: cuando se haga click sobre el ícono, 
    //abre y cierra el menú agregando/quitando clase "active"
    hamburguer.addEventListener("click", () => {
        menu.classList.toggle("active");
    });
}