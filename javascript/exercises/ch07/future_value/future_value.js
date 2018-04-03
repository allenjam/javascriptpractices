var $ = function(id) {
    return document.getElementById(id);
}
var getRandomNumber = function(max) {
    var random;
    if (!isNaN(max)) {
        random = Math.random(); //value >= 0.0 and < 1.0
        random = Math.floor(random * max); //value is an integer between 0 and max - 1
        random = random + 1; //value is an integer between 1 and max
    }
    return random;
}
var calculateFV = function(investment,rate,years) {
	var futureValue = investment;
    for (var i = 1; i <= years; i++ ) {
                if(futureValue == Infinity){
                   alert("Future  value = Infinity \n i =" + i);
                   i= years;
                } 
		futureValue += futureValue * rate / 100;
    }
    //alert("maximun value for a javascript number is:" + Number.MAX_VALUE);
    //alert("minimun value for a javascript number is:" + Number.MIN_VALUE);
    futureValue = futureValue.toFixed(2);
	return futureValue;
}
function  formatFV(futVal){
          var width =futVal.length;
 
         var dollarLength = width - 3;
          var back = futVal.subString(dollarLength-1);
          var dollarValue ="";
          var front=""; 
          for(var i=1; i<=dollarLength; i++){
             if(i==3||i==6||i==9||i==12||i==15||i==18){
                dollarValue = futVal.subString(0,i) + "," + futVal.subString(i);
             } 
          }
          front="$" + dollarValue + back;
          return front;     
                 
               
}
var getDate = function(){
       var tday= new Date();
       var entry ="Today  is" + tday.toDateString()+tday.getHours() + ":" +tday.getMinutes();
       return entry;
};
 
var processEntries = function() {
    //var investment = parseFloat( $("investment").value );
    //var rate = parseFloat( $("annual_rate").value );
    //var years = parseInt( $("years").value );
      var investment = getRandomNumber(5000);
      $("investment").value= investment.toString();
      var rate = getRandomNumber(15);
      $("annual_rate").value = rate.toString();
      var years = getRandomNumber(50);
      $("years").value =years.toString();
	if (isNaN(investment) || investment <= 0) {
		alert("Must be > 0");
	}
	else if (isNaN(rate) || rate <= 0) {
		alert("Must be > 0");
	}
	else if (isNaN(years) || years <= 0) {
		alert("Must be > 0");
		allValid = false;
	}
	else {
		$("future_value").value	= calculateFV(investment,rate,years);
              var value= getDate();
              $("date").firstChild.nodeValue= value;
	}
}

 

window.onload = function() {
    $("calculate").onclick = processEntries;
    $("investment").focus();
}