//New round begins
//Blady
//Timer has to be displayed the whole time
//Timer starts to count down
// global variable timeLeft
// countdown function
function countDown

var count = 60;
var display = document.getElementById("display");


setTimeout(update, 1000);

function update(){
    display.innerHTML = count;
    count--;

    if(count >= 0 ){
        setTimeout(update, 1000);    
    }
 
}
    // timeLeft - 1

    // innerHTML = timeLeft
    // setTimeout(countdown function)

    //Set time to be diplayed each second of the round
    //tell the timer to start counting down
    //Timer will reset for each round successfully passed
    //timer will display a message stating that the player has run out of time
    //Chris
    //Simon flashes colors
    //Blady
    //Player must mimic Símon
    //Chris
    //If player successfully mimics Simon, then next round starts, timer resets
    //Blady
    //If player does not successfully mimic Simon, then they go back to square one
    //Chris