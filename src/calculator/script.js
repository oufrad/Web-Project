//the numbers buttons :
var number = document.querySelectorAll(".number");
var input = document.querySelector("input");

// write the number on the input :
number[0].addEventListener("click",function(){input.value+=number[0].value})
number[1].addEventListener("click",function(){input.value+=number[1].value})
number[2].addEventListener("click",function(){input.value+=number[2].value})
number[3].addEventListener("click",function(){input.value+=number[3].value})
number[4].addEventListener("click",function(){input.value+=number[4].value})
number[5].addEventListener("click",function(){input.value+=number[5].value})
number[6].addEventListener("click",function(){input.value+=number[6].value})
number[7].addEventListener("click",function(){input.value+=number[7].value})
number[8].addEventListener("click",function(){input.value+=number[8].value})




// the operation buttons

var button = document.querySelectorAll(".op");

/* the operation section */

// Add operation section :

var sum = 0;
function Add(){
  sum += Number(input.value);
}

// sub operation section :

var sub = 0;
function Sub(){
  input.value-=sub;
  sub=input.value;
}





/* the button of the operation section */
// Add button :

button[0].addEventListener("click", function(){
      Add();
      input.value="";
});


// eq button :

button[4].addEventListener("click", function(){
      Add();
      input.value=-sum;
    //    sum=0;
});

// Sub button :



button[1].addEventListener("click", function(){
      Sub();
      input.value="";
});

// eq button :

button[4].addEventListener("click", function(){
      Sub();
      input.value=-sub;
      sum=0;
});
