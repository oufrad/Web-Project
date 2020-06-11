var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.querySelector("body");

console.log(color1);


color1.addEventListener("input", function(){
body.style.background = "linear-gradient(to Right, "+color1.value+", "+color2.value+")";
})

// set background color function :

// function SetBgColor(){
// 	body.style.background = "linear-gradient(to Right,"+color1.value+","+color2.value+")";
// }


// color1.addEventListener("input",function(){ console.log(color1.value);})
