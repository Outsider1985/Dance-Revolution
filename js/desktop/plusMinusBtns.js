export let plusMinusBtns = () => {
    
    let minusBtn = document.getElementById("minus");
    let plusBtn = document.getElementById("plus");
    let reservationNumber = document.getElementById("reservation-quantity");
    let number=1;
    const min = 1; /// min number
    const max = 9; /// max number
    
    if(minusBtn){
        minusBtn.addEventListener("click", () => {

            if(number>min){
    
                reservationNumber.value=parseInt(reservationNumber.value)-1;
                number = parseInt(reservationNumber.value);
    
            }
        
            if(number==min){
    
                reservationNumber.style.color= "red";
                setTimeout(function(){reservationNumber.style.color= "black"},500);
    
            }
            
            else{
    
                reservationNumber.style.color="black";            
            
            }    
        });
    }
    

    if(plusBtn){

        plusBtn.addEventListener("click", () => {
    
            if(number<max){
    
                reservationNumber.value=parseInt(reservationNumber.value)+1; /// Display the value in place of the number
                number = parseInt(reservationNumber.value);
                
            }     
    
            if(number==max){
    
                reservationNumber.style.color= "red";
                setTimeout(function(){reservationNumber.style.color= "black"},500);
            
            }
    
            else {
    
                reservationNumber.style.color= "black";
            
            }
        });
    }
    
}