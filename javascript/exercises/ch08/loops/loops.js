
"use strict";
var $ = function(id) { return document.getElementById(id); };

var getRandomNumber = function(max) {
    var random;
    if (!isNaN(max)) {
        random = Math.random(); //value >= 0.0 and < 1.0
        random = Math.floor(random * max); //value is an integer between 0 and max - 1
        random = random + 1; //value is an integer between 1 and max
    }
    return random;
};

// average rolls for a 6
var averageRolls = function() {
	var total = 0;
	var count = 0;
	var max = -Infinity;
	var rolls;
	
	//while ( count < 10000 ) {
         for(count; count <10000; count++){ 
		rolls = 0;
		/**while ( getRandomNumber(6) !== 6 ) {
			rolls++;
		}**/
                do{
                   rolls++;
                }while( ( getRandomNumber(6) !== 6 ));
          
		total += rolls;
		count++;
		if ( rolls > max ) max = rolls;
	}
	var average = total / count;
	alert ("Average rolls: " + average.toFixed(0) + "\n\nMax rolls: " + max);
}


// display factors
var displayFactors = function() {
	var number =parseInt($("number").value);
	var factors = "";
        var entry="";
        var amount=0;
	for ( var i = 1; i < number; i++ ) {
		if ( number % i === 0 ) {
			factors +=  i + " ";
                        amount++;
		}
	}
	//alert("Factors of ".concat(number, ": ", factors));
         entry="Factors of ".concat(number, ": ", factors);
         //$("primes").value=entry;
         //$("count").value=amount;
}
//checks for a prime number
function isPrime(entry){
         var prime =true;    
         for(var count=2;count <entry; count++){
                if(entry % count ===0){
                         prime =false;
                }
         }
         if(prime){
              return entry;
         }else{
              return 0;
         }
} 
var determineIfPrime = function() {
	var number =parseInt($("number").value);
	var result;
        result=isPrime(number);
        if(result !== 0){
            alert(result + "is prime");
        }else{
             alert(  "the number entered is not prime");
        }     
        
        
}
function getPrimeNumbers(){
           var number =parseInt($("number").value);
           var amount =0;
           var display ="";
           if(number === 1){
              amount++;
              display += number + "";
           }else if(number >=2){
             for(var count =2; count <=number;count++){
                        if(isPrime(count)!==0){
                            amount++;
                            display +=count + "";
                         }
             }
             amount =amount+1;
             $("count").value=amount;   
             display = "1".concat(display);
             $("primes").value=display; 
          }


}

/** determine if a number is prime
var determineIfPrime = function() {
	var number = $("number").value;
	var prime = true;
	var message;
	for ( var i = 2; i < number; i++ ) {
		if ( number % i === 0 ) prime = false;
	}
	if (prime) {
	    message = number + " is prime.";
	} else {
	    message = number + " is not prime.";
	}
	
        
        
}**/
var processEntries = function() {
	averageRolls();
	//displayFactors();
	determineIfPrime();
        getPrimeNumbers();
}

window.onload = function() {
	$("calculate").onclick = processEntries;
	$("number").focus();
};
