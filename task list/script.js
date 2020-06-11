// Select and get the tags I gonna need 
var button = document.getElementById("button");
var input =	document.getElementById("input");
var ul = document.querySelector("ul");

// fonction add the task to the list : 

function Add(value){
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(value));
	ul.appendChild(li);
	input.value="";
}

// cases verification : 

function Verifie(value){
	if (value.length > 0 ) return true;
	else return false;
}

// add whene the button is click :

button.addEventListener("click",function(){
	if(Verifie(input.value))   
	{
		Add(input.value);
	}
})

// add whene the keypress is click :

input.addEventListener("keypress",function(event){
	if(Verifie(input.value) && event.keyCode === 13)   
	{
		Add(input.value);
	}
})