function fun1(a){
    return new Promise((a)=>{a("hii a")})
   
}
function fun2(b){
   return new Promise((b)=>{b("hii b")})
}
function fun3(c){
   return new Promise((c)=>{c("hii c")})
}

Promise.all([fun1,fun2,fun3]).then((ab)=>{console.log(ab)})
fun1().then((a)=>{
    console.log(a)
})