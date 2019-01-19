function getHistory(){
    return document.getElementById("history-value").innerText;
    // Function getting us the history
}
function printHistory(num){
    document.getElementById("history-value").innerText = num;
    // Function to print the history
}
function getOutput(num){
   return document.getElementById("output-value").innerText;
}
function printOutput(num){
	if(num==""){
        // In case the number is null then do nothing but replace it with itself, else go and do the work
		document.getElementById("output-value").innerText=num;
	}
	else{
		document.getElementById("output-value").innerText=getFormattedNumber(num);
	}	
}
function getFormattedNumber(num){
	// if(num=="-"){
	// 	return "";
	// }
	var n = Number(num);
	var value = n.toLocaleString("en");
	return value;
}
// For output values, let's convert the number back to the original number without the "," commas
function reverseNumberFormat(num){
	return Number(num.replace(/,/g,''));
}
var operator = document.getElementsByClassName("operator");
for(var i=0;i<operator.length;i++){
    operator[i].addEventListener('click',function(){
        //// alert("The operator clicked " + this.id);
        if(this.id=="clear")
        { // If the user enters the clear button set everything to be clear!
            printHistory("");
            printOutput("");
        }
        else if(this.id=="backspace"){
			var output=reverseNumberFormat(getOutput()).toString();
			if(output){//if output has a value
				output= output.substr(0,output.length-1);
				printOutput(output);
			}
		}
    })
}
var number = document.getElementsByClassName("number");
for(var i =0;i<number.length;i++){
	number[i].addEventListener('click',function(){
		var output=reverseNumberFormat(getOutput());
        if(output!=NaN){ //// THE OUTPUT IS THE NUMBER ONLY! THEN ONLY IT'LL WORK!
             //TODO Concatinating the numbers for eg, the number entered is 1234 -> The number button is clicked 4 times, 1,2,3,4
             //! So concatinating the input like 1+2+3+4-> 1234
			output=output+this.id;
			printOutput(output);
		}
	});
}