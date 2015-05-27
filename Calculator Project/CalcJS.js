var hasNum1 = false;
var hasOpp = false;
var hasNum2 = true;
var num1Val = 0;
var opp;
var num2Val = 0;
var answer;
var output = document.getElementById("display");

// MAKES ALLKEYS DO MATHIFY
var keys = document.querySelectorAll("div.button");
for(var i = 0; i < keys.length; i++){
    keys[i].addEventListener("click", mathify);
}

function mathify(){
	if(this.classList.contains("opp")){
		var btnVal = output.innerHTML;
		output.insertAdjacentHTML('beforeend', this.innerHTML);
		hasOpp = true;
	}

    else if(this.innerHTML === "="){
      if(hasOpp && hasNum2 && hasNum1){
          switch(opp){
            case "+":
              answer = num1Val + num2Val;
              output.innerHTML = answer;
              break;
            case "-":
              answer = num1Val - num2Val;
              output.innerHTML = answer;
              break;
           case "*":
              answer = num1Val * num2Val;
              output.innerHTML = answer;
              break;
           case "/":
              answer = num1Val / num2Val;
              output.innerHTML = answer;
              break;
            default:
                  output.innerHTML = "No Opperator";
          }
      }
        
      }

              
          
	
	else if(this.innerHTML === "Clear"){
        output.innerHTML = " ";
	}
	else{
	output.insertAdjacentHTML('beforeend', this.innerHTML);
	//var btnVal = output.innerHTML;

}
}