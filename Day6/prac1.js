const fs=require('fs');
fs.writeFileSync('./hello.txt','Hello, World!');
//Asynchronous
// fs.writeFile('./hello.txt','Hello, World!',(err)=>{});

const result=fs.readFileSync('./hello.txt','utf-8');
console.log(result);

fs.readFile('./hello.txt','utf-8',(err,result)=>{
    if(err){
        console.log('Error reading file',err);
        return;
    }       
    else{
        console.log(result);
    }
});

fs.appendFileSync('./hello.txt','\nThis is appended text.');

fs.cpSync('./hello.txt','./copy_hello.txt');
fs.renameSync('./copy_hello.txt','./renamed_hello.txt');

// fs.unlinkSync('./renamed_hello.txt');
console.log(fs.statSync('./hello.txt'));