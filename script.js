let display = document.getElementById('inp-label');
let displayAns=document.getElementById('inp-label2')
let buttons = Array.from(document.getElementsByClassName('button-num'));
//console.log(buttons)

buttons.map(button => {
    button.addEventListener('click', (e) =>{
       // console.log(e.target.textContent)
      //  display.innerText += e.target.textContent

      switch(e.target.textContent){
        case 'C':
            display.innerText='';
            break;
        case '<=':
            display.innerText = display.innerText.slice(0,-1);
            break;
        case '+':
            display.innerText += e.target.textContent
            addition()
            break;
        case '=':
            equals()
            break;    
            default:
                display.innerText += e.target.textContent
      }

    })
})
let num1=0
function addition(){
    num1+=parseInt(display.innerText);
    console.log(num1)
    
}
function equals(){
    num1+=parseInt(display.innerText);
    displayAns.textContent=num1;
    display.innerText=''
}

