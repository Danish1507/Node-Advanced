const { log } = require("console");
const fs = require("fs");
const os = require("os");


let data = fs.readFileSync('./hello.txt','utf8'); // this code executes synchronously
fs.readFile('./hello.txt', 'utf8', (err, data2) => {
	if (err) throw err;
	console.log(data2);
}); // this code executes asynchronously
console.log(data);


// fs.writeFileSync('./hello.txt','Sarkar likhna chahte h'); // this code executes synchronously

// writing file will always override the existing data in the file if there is no file the function will create a new file with the given data

fs.writeFile('./hello.txt','this is write message',(err)=>{
	console.log(err);
})


// we use fs.appendFile to append data to the file it will not override the existing data in the file
fs.appendFile('./hello.txs','this is a append message',(err)=>{
	console.log(err);
})

// #####################################################################################################################

console.log("New concept ########################## #######################################");


console.log(os.platform());
console.log(os.hostname());

// deleting a file 

fs.unlinkSync('./hello.txt'); 
