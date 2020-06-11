const fs = require('fs');

const DetectFlor = (data)=>{
  let flor=1;
for (var i = 0; i < data.toString().length; i++)
{
  if(data.toString()[i] === ')'){
    flor-=1;
  }
  else if(data.toString()[i] === '(')
  {
    flor+=1;
  }
}
  return flor;
}

const DetectFlorBasement = (data)=>{
  let flor=1;
  let position;
for (var i = 0; i < data.toString().length; i++)
{
  if(data.toString()[i] === ')'){
    flor-=1;
  }
  else if(data.toString()[i] === '(')
  {
    flor+=1;
  }
  if(flor === -1)
  {
    position = i+1;
  }
}
    console.log("the position that take santa to the basement is : "+position);
}

fs.readFile('./Hello.txt', (err,data)=>{
  if(err) {console.log("there is an error")}
  // detect what flor is santa in
    console.time('First Part');
      console.log("santa is on the flor number : ",DetectFlor(data));
    console.timeEnd('First Part');

  // detect what flor couses santa to enter the basement
    console.time('secend Part');
      DetectFlorBasement(data);
    console.timeEnd('secend Part');
})
