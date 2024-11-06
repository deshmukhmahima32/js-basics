
const prompt = require('prompt-sync')();
const num=parseInt(prompt(`Enter a number `))
const div=2;
let count=0

for(let i=1;i<=100;i++)
{
    if(num%i==0)
    {
      count++
    }

}
if(count==div)
{
    console.log(`${num} is prime`)
}
else(
    console.log(`${num} is not prime`)
)