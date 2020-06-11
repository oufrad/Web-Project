//create all the data bases :
var databases = [
    {
        username:"mohamed",
        password:"oufrad"
    },
    {
        username:"mohamed",
        password:"rami"
    },
    {
        username:"younes",
        password:"fergouch"
    },
    {
        username:"lhcen",
        password:"essadiq"
    },
    {
        username:"abdsamad",
        password:"oukrim"
    }
];

//the target of the sign In 

var news=["hacker" , "programmer" , "signer" , "footbale player"];

// sign In

var Username=prompt("enter your username : ");
var Password=prompt("enter your password : ");

//sign In verification

function verification(Username,Password)
{
    for (var i = 0; i < databases.length; i++) 
    {
        if (databases[i].username === Username && databases[i].password === Password)
        {
    		alert("you sing In succsefly ");
			alert("Welcome to facebook lol ")
	    		for (var i = 0; i < news.length; i++) 
				{
	        	document.write(news[i]+"\n");
				}
				return true;
    	}

       
    }
	              alert("incorrect sign In ");
		      	  return false; 
        
}
verification(Username,Password);
