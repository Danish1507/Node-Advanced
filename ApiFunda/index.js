const http = require('http');



// create a server

http
.createServer((req,res)=>{
  console.log(req.url);
  console.log(req.method);

  if(req.url === '/product' && req.method === 'GET'){

res.end('Get all products');
  }
  else if(req.url === '/product' && req.method === 'POST'){
    res.end('Add a new product');
  }


  else if(req.url === "/users" && req.method === 'POST'){
    res.end('Add a new user');
  }
  
  if(req.url === '/add'){
    res.end('Add a new item');
  }
  else if(req.url === "/update"){
    res.end('Update an item');
  }
  
})
.listen(8000)