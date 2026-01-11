function a(){
    let num=1
    function b(){
        console.log(num)
    
        function c(){
            console.log(num)

    
            function d(){
                console.log(num)
            }
            d()
        }
        
        c()
    }
    return b
}
let rs=a()
rs()