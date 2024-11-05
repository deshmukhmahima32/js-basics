const prompt = require('prompt-sync')();

          let a= parseInt(prompt("enter first no "))
          let b=parseInt (prompt("enter second no "))
          let c= parseInt(prompt("enter third no "))
          let d=parseInt (prompt("enter forth no "))
          let e=parseInt (prompt("enter five no "))

          if(a>b&&a>c&&a>d&&a>e)
          {
            console.log("a is larger")

          }
          else if(b>a&&b>c&&b>d&&b>e)
              {
                console.log("b is greater")
              }
              else if(c>a&&c>b&&c>d&&c>e)
              {
                console.log("c is greater")
              }
              else if(d>a&&d>b&&d>c&&d>e)
              {
                console.log("d is greater")
              }
              else{
                console.log("e is greater")
              }
     


// let userInput = prompt('Enter something: ');
// console.log('You entered:', userInput);

 