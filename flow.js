const fs = require("fs")

fs.writeFileSync('./flow.txt','Sync write before');

let content = fs.readFileSync('./flow.txt','utf8')

console.log(content);


fs.readFile('./flow.txt','utf8',(err,data)=>{
    if(err) throw err;
    console.log(data);
})

fs.writeFile('./flow.txt',"Async write after",(err)=>{
   if(err) throw err;
});



// in the above code the flow of the code is as follows:
// 1. fs.writeFileSync('./flow.txt','Sync write before'); // this code executes synchronously
// 2. fs.readFile('./flow.txt','utf8',(err,data)=>{ // this code executes asynchronously
// 3. fs.writeFile('./flow.txt',"Async write after",(err)=>{ // this code executes asynchronously
// 4. console.log(data); // this code executes synchronously and it will print the data of the file after the write operation is completed
// 5. in writeFile and readFile the write file code completes write operation before the read file code completes read operation
// 6. so the output of the code will be:
//    aync write after 


