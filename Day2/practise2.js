let price=100
let taxRate=0.18
let totalPrice=price + (price * taxRate)
console.log("Total Price is: " + totalPrice)
price=200
totalPrice=price + (price * taxRate)
console.log("Total Price after price update is: " + totalPrice)