const express = require('express');
const bodyParser =require('body-parser');
const cors = require('cors')

const app = express();

app.use(bodyParser.json());
app.use(cors());
// database

const database ={
  users : [
    {
        id:1,
        Name:'mohamed',
        password :'wow',
        email:'mohamed@gmail.com',
        entries:0,
        date:new Date()
    },
    {
        id:2,
        Name:'younes',
        password :'wowwow',
        email:'younes@gmail.com',
        entries:0,
        date:new Date()
    }
  ]
}

// Sign In post

app.post('/signin',(req,res)=>{
  if(req.body.email === database.users[0].email && req.body.password === database.users[0].password)
    res.json(database.users[0]);
    else
    res.json('the information is incorrect try again ');
});

//the home page

app.get('/',(req,res)=>{
  res.json(database.users);
})

// Register post
app.post('/register',(req,res)=>{
  const {Name , email , password} = req.body;
  database.users.push({
    id:3,
    Name:Name,
    password :password,
    email:email,
    entries:0,
    date:new Date()
  })
  res.json(database.users[database.users.length-1]);
});

// the user profile

app.get('/profile/:id',(req,res)=>{
  const { id } = req.params;
  let found = false;
  database.users.forEach(user =>
    {
      if(user.id === Number(id))
     {
        found = true;
        return res.json(user);
      }
    });
      if(!found)  res.status(400).json('the user is not found');
})

app.put('/image',(req,res)=>{
  const {id} = req.body;
  let found = false;
  database.users.forEach(user =>
    {
      if(user.id === Number(id))
     {
        found = true;
        user.entries++;
        return res.json(user.entries);
      }
    });
      if(!found)  res.status(400).json('the user is not found');
})

app.listen(3000);
