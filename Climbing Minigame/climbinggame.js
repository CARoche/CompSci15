/**  
* Created with Climbing Minigame.
* User: CRoche
* Date: 2015-02-25
* Time: 06:38 PM
* To change this template use Tools | Templates.
*/   
 
//character.style.top = "500px"

var character = document.getElementById("character"); //is our character that we want to move

window.addEventListener("keydown", moveSelection); 

var speed = 10;
var direction = 1;

function leftArrowPressed () { //speed and allows our box to move
    var element = document.getElementById("character");
    element.style.left = parseInt(element.style.left) - 5  + 'px';
}

function rightArrowPressed () {
    var element = document.getElementById("character");
    element.style.left = parseInt(element.style.left) + 5 + 'px';
}

function upArrowPressed () {
    var element = document.getElementById("character")
    element.style.top = parseInt(element.style.top) - 5 + 'px';
}

function downArrowPressed () {
    var element = document.getElementById("character");
    element.style.top = parseInt(element.style.top) + 5 + 'px';
}
function moveSelection(evt) { //selects which keys needed to be pressed to allow movement in the direction
   
    switch (evt.keyCode) {
        case 38: // arrow up key
        case 87: // W key
            upArrowPressed();
            break; 
        case 37: // arrow left key
        case 65: // A key
            leftArrowPressed();
            break;
        case 40: // arrow down key
        case 83: // S key
            downArrowPressed();
            break;
        case 39: // arrow right key
        case 68: // D key
            rightArrowPressed();
            break;
    }
    
}

