let text1 = "";
for (let i1 = 0; i1 < 5; i1++) {
  text1 += "The number is " + i1 + "<br>";
  console.log(text1);
}
let i2 = 0;
let text2 = "";
while (i2 < 10) {
  text2 += "The number is " + i2;
  i2++;
  console.log(text2);
}
let text3 = "";
let i3 = 0;
do {
  text3 += "The number is " + i3;
  i3++;
  console.log(text3);
}
while (i3 < 10);

let text4 = "";
for (let i4 = 0; i4 < 10; i4++) {
  if (i4 === 3) { break; }
  text4 += "The number is " + i4 + "<br>";
}
let text5 = "";
for (let i5 = 1; i5 < 10; i5++) {
  if (i5 === 3) { continue; }
  text5 += "The number is " + i5 + "<br>";
}