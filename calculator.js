/**
 * TODO:
 * 1. Align current display and history display;
 * 2. After input, check if operator:
 *      a. If so => operate
 *      b. If not => build String
 * 2. When operate() => operate the current line => store => init;
 * 3. Special button functionality : 'clear', '.' , 'c';
 * 
 */





const container = document.querySelector(".container");
// container.textContent = "hello world";

// const display = document.querySelector(".display");
const history = document.querySelector(".history");
const currentDisplay = document.querySelector(".current");



const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener("click",function(){
        console.log('button press');
        console.log(this.textContent);
        buildLine(this.textContent);
    })
})


let line = '';
const buildLine = (element) => {
    line += element;
    currentLine = line;
    currentDisplay.textContent = line;
}


const operate = (operator) =>{
    buildLine(operator);
    if(line == undefined){
        console.log('this should never happen');
        return 0;
    }
    if(line.charAt(0) == '+' || line.charAt(0) == '-' || line.charAt(0) == '*' || line.charAt(0) == '/' ){
        line = '0'+ line;
    }
    if(line.length == 2){
        line = line + '0';
    }
}
