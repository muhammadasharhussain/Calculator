let screentext =document.getElementsByClassName("screentext")[0];
//numbers
let buttons = document.getElementsByClassName('buttons')[0];
let one = document.getElementsByClassName('one')[0];
let two = document.getElementsByClassName('two')[0];
let three = document.getElementsByClassName('three')[0];
let four = document.getElementsByClassName('four')[0];
let five = document.getElementsByClassName('five')[0];
let six = document.getElementsByClassName('six')[0];
let seven = document.getElementsByClassName('seven')[0];
let eight = document.getElementsByClassName('eight')[0];
let nine = document.getElementsByClassName('nine')[0];
let zero = document.getElementsByClassName('zero')[0];
//operators:
let plus = document.getElementsByClassName('plus')[0];
let minus = document.getElementsByClassName('minus')[0];
let multiply = document.getElementsByClassName('multiply')[0];
let divide = document.getElementsByClassName('divide')[0];
let equals = document.getElementsByClassName('equals')[0];
let del = document.getElementsByClassName('del')[0];


function appendnum(num) {
  const result = screentext.textContent;
  const lastChar = result.charAt(result.length - 1);

   if (["+","-","*","/"].includes(lastChar) && ["+", "-", "*", "/"].includes(num)) {
    screentext.textContent = result.slice(0, -1) + num;
  } else {
  screentext.textContent += num;
  }
}


function removenum() {
  screentext.textContent = screentext.textContent.slice(0, -1);
}

del.addEventListener("click",removenum);



zero.addEventListener("click",function(){
	appendnum(0);
})

one.addEventListener("click",function(){
	appendnum(1);
})

two.addEventListener("click",function(){
	appendnum(2);
})

three.addEventListener("click",function(){
	appendnum(3);
})

four.addEventListener("click",function(){
	appendnum(4);
})

five.addEventListener("click",function(){
	appendnum(5);
})

six.addEventListener("click",function(){
	appendnum(6);
})

seven.addEventListener("click",function(){
	appendnum(7);
})

eight.addEventListener("click",function(){
	appendnum(8);
})

nine.addEventListener("click",function(){
	appendnum(9);
})

plus.addEventListener("click",function(){
	appendnum("+");
})

minus.addEventListener("click",function(){
	appendnum("-");
})

multiply.addEventListener("click",function(){
	appendnum("*");
})

divide.addEventListener("click",function(){
	appendnum("/");
})



	
document.addEventListener("keydown", function(event) {
  if (event.key >= "0" && event.key <= "9") {
   appendnum(parseInt(event.key));  }});

document.addEventListener("keydown", function(event) {
  if (event.key === '+' || event.key === '-' || event.key === '*' || event.key === '/') {
   appendnum(event.key);  }});


document.addEventListener("keydown", function(event) {
  if (event.key === "Backspace" || event.key === "Delete") {
  	removenum();
  }});

equals.addEventListener("click", calculateResult);

document.addEventListener("keydown", function(event) {
    if (event.key === "=" || event.key === "Enter") {
        calculateResult();
    }
});


function calculateResult() {
    try {
        const expression = screentext.textContent;
        const result = eval(expression);
        screentext.textContent = result;
    } catch (error) {
        screentext.textContent = "Error";
    }
}
