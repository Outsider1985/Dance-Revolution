function AddClassActive(){
    let hamburguer = document.getElementsById("hamburguer");
    let menu = document.getElementsByClassName("menu");
    hamburguer.addEventListener("click", () => {menu.ClassList.add("active");});
}