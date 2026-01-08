const prices = [10, 20, 30, 40];
let totalTax = 0;

prices.forEach((price) => {
    const tax = price * 0.1; // 10% tax
    console.log(`Tax for $${price} is $${tax}`);
    totalTax += tax;
});

console.log(`Total tax to collect: $${totalTax}`);