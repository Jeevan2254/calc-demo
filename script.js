var input = document.getElementById("text");
 var number = document.querySelectorAll(".numbers");
 var operator = document.querySelectorAll(".operators");
 var result = document.getElementById("result");
 var clear = document.getElementById("clear");
 var resultDisplayed = false;

for (var i = 0; i < number.length; i++) {
  number[i].addEventListener("click", function (e) {
    var currentString = input.innerHTML;
    var lastChar = currentString[currentString.length - 1];

    if (resultDisplayed === false) {
      input.innerHTML += e.target.innerHTML;
    } else if (
      (resultDisplayed === true && lastChar === "+") ||
      lastChar === "-" ||
      lastChar === "×" ||
      lastChar === "/"
    ) {
      resultDisplayed = false;
      input.innerHTML += e.target.innerHTML;
    } else {
      resultDisplayed = false;
      input.innerHTML = "";
      input.innerHTML += e.target.innerHTML;
    }
  });
}
//d
for (var i = 0; i < operator.length; i++) {
  operator[i].addEventListener("click", function (e) {
    var currentString = input.innerHTML;
    var lastChar = currentString[currentString.length - 1];
    if (
      lastChar === "+" ||
      lastChar === "-" ||
      lastChar === "×" ||
      lastChar === "/"
    ) {
      var newString =
        currentString.substring(0, currentString.length - 1) +
        e.target.innerHTML;
      input.innerHTML = newString;
    } else if (currentString.length == 0) {
      alert("enter a number first");
    } else {
      input.innerHTML += e.target.innerHTML;
    }
  });
}

result.addEventListener("click", function() {
  var inputString = input.innerHTML;
  var numbers = inputString.split(/\+|\-|\×|\//g);
  var operators = inputString.replace(/[0-9]|\./g, "").split("");

  console.log(inputString);
  console.log(operators);
  console.log(numbers);


  
  console.log("----------------------------");

  var divide = operators.indexOf("/");
  while (divide != -1) {
    numbers.splice(divide, 2, numbers[divide] / numbers[divide + 1]);
    operators.splice(divide, 1);
    divide = operators.indexOf("/");
  }
  var multiply = operators.indexOf("×");
  while (multiply != -1) {
    numbers.splice(multiply, 2, numbers[multiply] * numbers[multiply + 1]);
    operators.splice(multiply, 1);
    multiply = operators.indexOf("×");
  }

  var subtract = operators.indexOf("-");
  while (subtract != -1) {
    numbers.splice(subtract, 2, numbers[subtract] - numbers[subtract + 1]);
    operators.splice(subtract, 1);
    subtract = operators.indexOf("-");
  }

  var add = operators.indexOf("+");
  while (add != -1) {
    numbers.splice(add, 2, parseFloat(numbers[add]) + parseFloat(numbers[add + 1]));
    operators.splice(add, 1);
    add = operators.indexOf("+");
  }

  input.innerHTML = numbers[0]; 

  resultDisplayed = true; 
});
clear.addEventListener("click", function() {
  input.innerHTML = "";
})


// let displayNum=document.getElementsByClassName('numbers')
// let currentNum=document.getElementById('text')
// let exp=[];

// for (let key of displayNum){
//   console.log(key.value)
//     key.addEventListener('click', function(){
//       //currentNum.textContent+=key.value
//       if(key.value=== '+' || key.value=== '-' || key.value=== 'x' || key.value=== '/' ){
//         exp.push(currentNum.textContent);
//         exp.push(key.value)
//         currentNum.textContent=''
//       }else{
//        currentNum.textContent+=key.value
//       }
//     })

// }

// document.getElementById("equal").addEventListener("click", function () {
//   exp.push(currentNum.textContent);
//   var reslt=operate();
//   console.log(exp)
//   console.log(reslt);
// })

// document.getElementById('clr').addEventListener('click',function(){
//   exp=[];
//   currentNum.textContent='';

// })

// function operate(){
//   for(i=0;i<exp.length;i++){

//     if(exp[i] === "+"){
//       console.log(exp[i])
//     }else if(exp[i]==='-'){

//     }else if(exp[i]=== '/'){

//     }else if(exp[i]==='x'){

//     }

//   }

// }
