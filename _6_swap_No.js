const prompt=require('prompt-sync')();
 let Fnum=parseInt(prompt(`Enter first number `))
 let Snum=parseInt(prompt(`enter second number `))
 //with using third variable
//  let temp;
//  console.log(`before swap fnum is ${Fnum} and Snam is ${Snum}`)
//  temp=Fnum
//  Fnum=Snum
//  Snum=temp
//  console.log(`Afte swap Fnum is ${Fnum} and Snum is ${Snum}`)

 //without using third variable

 console.log(`before swap fnum is ${Fnum} and Snam is ${Snum}`)
 Fnum=(Fnum+Snum)
 Snum=(Fnum-Snum)
 Fnum=(Fnum-Snum)
 console.log(`Afte swap Fnum is ${Fnum} and Snum is ${Snum}`)


 