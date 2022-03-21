export let plusMinusButton = () => {
    let minusBtn = document.getElementById("minus");
    let plusBtn = document.getElementById("plus");
    let reservationNumber = document.getElementById("reservation-quantity");
    let number = 1; /// number value
    const min = 0; /// min number
    const max = 9; /// max number
        
    minusBtn.onclick = function(){
    
        if (number>min){
            number = number-1; /// Minus 1 of the number
            reservationNumber.innerText = number ; /// Display the value in place of the number
        }

        if(number==min) {        
            reservationNumber.style.color= "red";
            setTimeout(function(){reservationNumber.style.color= "black"},500)
        }

        else{
            reservationNumber.style.color="black";            
        }     
    }

    plusBtn.onclick = function(){

        if(number<max){
           number = number+1;
           reservationNumber.innerText = number ; /// Display the value in place of the number
        }     

        if(number == max){
            reservationNumber.style.color= "red";
            setTimeout(function(){reservationNumber.style.color= "black"},500)
        }

        else {
            reservationNumber.style.color= "black";
        }      
    }
}