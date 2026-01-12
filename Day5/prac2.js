 let user=true
 function func1(par1,par2){
    if (user){
        par1("success","Akanksha")
    }
    else{
        par2("unsuccessful")
    }
}
func1((message,msg)=>{
    console.log(message,msg)
},(message,msg)=>{console.log(message,msg)})