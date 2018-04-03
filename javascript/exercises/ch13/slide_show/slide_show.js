
"use strict";
var $ = function(id) { return document.getElementById(id); };

var changeSpeed = function(e) {
    // code to change the slide show speed goes here
	var milliseconds = prompt("Current speed is"+slideshow.speed+"milliseconds\n"+"Please Enter new slide show speed in milliseconds", "2000");
        if(isNaN(milliseconds) || milliseconds == null){
             alert("entry must be a number");
        }else{    
        milliseconds = parseInt(milliseconds);
        slideshow.speed = milliseconds;
        //slideshow.timer = setInterval(slideshow.displayNextImage.bind(slideshow),slideshow.speed);
        slideshow.stopSlideShow().startSlideShow($("image"),$("caption"));
        evt.preventDefault(e);
       }      
};

window.onload = function() {  
     var slides = [
        {href:"images/gear.jpg", title:"Fishing Gear"}, 
        {href:"images/plane.jpg", title:"Bush Plane"},
        {href:"images/release.jpg", title:"Catch and Release"},
        {href:"images/lunch.jpg", title:"Streamside Lunch"},
        {href:"images/dusk.jpg", title:"Day's End"}
    ];
	
    slideshow.loadImages(slides).startSlideShow($("image"), $("caption"));
    
    evt.attach($("play_pause"), "click", slideshow.togglePlay); 
    //my code from here
    evt.attach($("change_speed"),"click",changeSpeed);
    
};