let text5 = [1,2,3,4,5];
for (let x in text5) {
  let i5 = text5[x];    
  if (i5 === 3) { continue; }
  let text6 = "The number is " + i5 + "<br>";  
    console.log(text6);
}