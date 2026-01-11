
let user=true
let p=new Promise((a,b)=>{
    if (user){
        a()
    }
    else{
        b()
    }
})
p.then((a)=>{
    console.log("success")
}).catch((b)=>{
    console.log("in catch")
})