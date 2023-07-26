//create a web server using express 

const express = require('express');
const app = express();

//create a get route for /comments
app.get('/comments',(req,res)=>{
    res.send('Get request to /comments');
});

//create a post route for /comments
app.post('/comments',(req,res)=>{
    res.send('Post request to /comments');
});

//create a put route for /comments
app.put('/comments',(req,res)=>{
    res.send('Put request to /comments');
});

//create a delete route for /comments
app.delete('/comments',(req,res)=>{
    res.send('Delete request to /comments');
});

//listen on port 3000
app.listen(3000,()=>{
    console.log('Server started');
});
