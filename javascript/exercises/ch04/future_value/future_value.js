"use strict";
var $ = function(id) {
    return document.getElementById(id);
};

function calculateFV  (x, y, z){
              var fut_Value = (x/100) * y *z;
              fut_Value =fut_Value.toFixed(2);
              return fut_Value;
}
var processEntries = function(){
       
       var investment =parseFloat($("investment").value).toFixed(2);
      
          
       var rate=parseFloat($("annual_rate").value).toFixed(2);
      
       var years =parseFloat($("years").value).toFixed(2);
       
       if (investment <= 0 || investment > 100000.00){
         $("investment_error").firstChild.nodeValue = "Entry must be 1.00 -100 000.00";
         
       }else{
       $("investment_error").firstChild.nodeValue ="";
       
       
       
       $("future_value").value = calculateFV(investment, rate, years);
       $("investment").focus();
       }
       
};
 window.onload  = function(){
        $("calculate").onclick = processEntries;
        $("investment").focus();
          
};