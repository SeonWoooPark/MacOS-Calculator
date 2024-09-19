let op1 = ' ';
let op2 = ' ';
let num1 = '0';
let num2 = '0';
let result = '0';
let clear = 0;
let sign = '+';
let inputPrevent = 0;
const defaultSize = 40;
const minSize = 8;


//계산기의 숫자 버튼을 클릭하여 input의 focus를 잃었을 때 input에 항상 focus를 유지해주는 코드
document.getElementsByName("num")[0].addEventListener("blur", () => {
    document.getElementsByName("num")[0].focus(); 
});

//각 키를 눌렀을 때 해당 버튼이 깜빡이도록 이벤트 처리 코드
document.getElementsByName("num")[0].addEventListener("keydown", (e) => {
    let time = 50;
    switch (e.keyCode) {
        case 13:
            document.getElementById("equal").classList.add('calcul_op_pressed');
            setTimeout(() => {
                document.getElementById("equal").classList.remove('calcul_op_pressed');
            }, time);
            break;
        //esc를 눌렀을 때 AC를 실행해주는 코드
        case 27:
            resetNum();
            document.getElementById("AC").classList.add('number_op_pressed');
            setTimeout(() => {
                document.getElementById("AC").classList.remove('number_op_pressed');
            }, time);
            break;
        
        case 48: case 96:
            if (e.key === '0'){
                document.getElementById("zero").classList.add('number_pressed');
                setTimeout(() => {
                    document.getElementById("zero").classList.remove('number_pressed');
                }, time);
            }
            break;
        case 49: case 97:
            if (e.key === '1'){
                document.getElementById("one").classList.add('number_pressed');
                setTimeout(() => {
                    document.getElementById("one").classList.remove('number_pressed');
                }, time);
            }
            break;
        case 50: case 98:
            if (e.key === '2'){
                document.getElementById("two").classList.add('number_pressed');
                setTimeout(() => {
                    document.getElementById("two").classList.remove('number_pressed');
                }, time);
            }
            break;
        case 51: case 99:
            if (e.key === '3'){
                document.getElementById("three").classList.add('number_pressed');
                setTimeout(() => {
                    document.getElementById("three").classList.remove('number_pressed');
                }, time);
            }
            break;
        case 52: case 100:
            if (e.key === '4') {
                document.getElementById("four").classList.add('number_pressed');
                setTimeout(() => {
                    document.getElementById("four").classList.remove('number_pressed');
                }, time);
            }
            break;
        case 53: case 101:
            if (e.key === '5'){
                document.getElementById("five").classList.add('number_pressed');
                setTimeout(() => {
                    document.getElementById("five").classList.remove('number_pressed');
                }, time);
            }
            break;
        case 54: case 102:
            if (e.key === '6'){
                document.getElementById("six").classList.add('number_pressed');
                setTimeout(() => {
                    document.getElementById("six").classList.remove('number_pressed');
                }, time);
            }
            break;
        case 55: case 103:
            if (e.key === '7'){
                document.getElementById("seven").classList.add('number_pressed');
                setTimeout(() => {
                    document.getElementById("seven").classList.remove('number_pressed');
                }, time);
            }
            break;
        case 56: case 104:
            if (e.key === '8'){
                document.getElementById("eight").classList.add('number_pressed');
                setTimeout(() => {
                    document.getElementById("eight").classList.remove('number_pressed');
                }, time);
            }
            break;
        case 57: case 105:
            if (e.key === '9'){
                document.getElementById("nine").classList.add('number_pressed');
                setTimeout(() => {
                    document.getElementById("nine").classList.remove('number_pressed');
                }, time);
            }
            break;
    }
});

//연산자를 키보드로 눌렀을 때 해당 연산자 버튼 깜빡이도록 이벤트 처리한 코드
document.getElementsByName("num")[0].addEventListener("keypress", (e) => {
    let time = 50;
    switch(e.keyCode) {
        case 42:
            document.getElementById("mul").classList.add('calcul_op_pressed');
            setTimeout(() => {
                document.getElementById("mul").classList.remove('calcul_op_pressed');
            }, time);
            break;
        case 43:
            document.getElementById("plus").classList.add('calcul_op_pressed');
            setTimeout(() => {
                document.getElementById("plus").classList.remove('calcul_op_pressed');
            }, time);
            break;
        case 45:
            document.getElementById("minus").classList.add('calcul_op_pressed');
            setTimeout(() => {
                document.getElementById("minus").classList.remove('calcul_op_pressed');
            }, time);
            break;
        case 46:
            document.getElementById("point").classList.add('number_pressed');
            setTimeout(() => {
                document.getElementById("point").classList.remove('number_pressed');
            }, time);
            break;
        case 47:
            document.getElementById("div").classList.add('calcul_op_pressed');
            setTimeout(() => {
                document.getElementById("div").classList.remove('calcul_op_pressed');
            }, time);
            break;
        case 61:
            document.getElementById("equal").classList.add('calcul_op_pressed');
            setTimeout(() => {
                document.getElementById("equal").classList.remove('calcul_op_pressed');
            }, time);
            break;
    }
});

document.getElementsByName("num")[0].addEventListener("input", () => {
    //숫자를 입력했을 때 AC를 C로 바꿔주는 코드
    if(document.getElementsByName("num")[0].value !== ""){
        document.getElementById("AC").innerText = "C";
    }
    //input창의 font 크기를 조절해주는 코드
    adjustFontSize();
});

//계산 결과에 대해 백스페이스의 동작을 막는 코드
document.getElementsByName("num")[0].addEventListener("keydown", (e) => {
    let input_num = document.getElementsByName("num")[0].value;
    if (e.keyCode == 8 && clear === 1) {
        e.preventDefault(); 
    }
});

//input창에서의 키보드를 통한 입력을 제어하는 함수 checkNumber 
function checkNumber(event) {
    let input_num = document.getElementsByName("num")[0].value;
    if (inputPrevent === 1) {
    } else if(event.key === ' ') {
    } else if ((input_num === '' || clear === 1) &&
        event.key === '.'
    ) {
        clear = 0;
        document.getElementsByName("num")[0].value = "0.";
    } else if ((input_num === '' || clear === 1) &&
        event.key === '0'
    ) {
        clear = 0;
        document.getElementsByName("num")[0].value = "";
    } else if (clear === 0 &&
        (event.key >= 0 && event.key <= 9 ||
        event.key === '.' && !(input_num.includes('.')))   
    ) {
        return true;
    } else if (clear !== 0 &&
        (event.key >= 0 && event.key <= 9 ||
        event.key === '.' && !(input_num.includes('.')))
    ) {
        document.getElementsByName("num")[0].value = event.key;
        clear = 0;
    } else if (input_num !== "" &&
        (event.key === '+' ||
        event.key === '-' ||
        event.key === '*' || 
        event.key === '/')
    ) {
        num1 = input_num;
        op1 = event.key;
        clear = 1;
    } else if (event.key === '=' | event.keyCode == 13) {
        if (op1 !== ' ') {
            num2 = input_num;
            result = String(eval(num1+op1+num2));
            document.getElementsByName("num")[0].value = result;
            num1 = result;
            clear = 1;
            op2 = op1;
            op1 = ' ';
        } else if (op1 === ' ' && op2 !== ' ') {
            if (clear === 1){
                result = String(eval(num1+op2+num2));
                document.getElementsByName("num")[0].value = result;
                num1 = result;
            } else {
                num2 = input_num;
                result = String(eval(num1+op2+num2));
                document.getElementsByName("num")[0].value = result;
                num1 = result;
                clear = 1;
            }
        }
    }
    adjustFontSize();
    return false;
}

// AC버튼을 눌러 계산기 작동을 리셋하는 함수 resetNum 코드
function resetNum() {
    const target = document.getElementsByName("num")[0];
    op1 = ' ';
    op2 = ' ';
    num1 = '0';
    num2 = '0';
    result = '0';
    clear = 0;
    document.getElementsByName("num")[0].value = "";
    document.getElementById("AC").innerText = "AC";
    inputPrevent = 0;
    target.style.fontSize = defaultSize + 'px';
}

//+/-버튼을 눌러 입력한 숫자의 부호를 바꾸는 함수 changeSign 코드
function changeSign() {
    let input_num = document.getElementsByName("num")[0].value;
    if (sign === '+' && 
        input_num !== ''
    ) {
        document.getElementsByName("num")[0].value = '-' + input_num;
        sign = '-';
    } else if (input_num[0] === '-' &&
        sign === '-'
    ) {
        document.getElementsByName("num")[0].value = input_num.slice(1);
        sign = '+';
    }
    adjustFontSize();
}

//% 버튼을 눌러 입력한 숫자의 1/100을 
function calculatePercent() {
    let input_num = document.getElementsByName("num")[0].value;
    if (input_num !== '') {
        let result = String(eval(Number(input_num) / 100));
        document.getElementsByName("num")[0].value = result;
        clear = 1;
    }
    adjustFontSize();
}

//1~9 중 해당 숫자 버튼을 눌렀을 때 해당 숫자를 입력창에 추가해주는 함수 addNum
function addNum(num) {
    if (clear === 0) {
        let input_num = document.getElementsByName("num")[0].value ;
        document.getElementsByName("num")[0].value = input_num + String(num);
    } else if (clear === 1){
        document.getElementsByName("num")[0].value = num;
        clear = 0;
    }
    document.getElementById("AC").innerText = "C";
    adjustFontSize();
}

//0을 눌렀을 때 0을 입력창에 추가해주는 함수 addZero
function addZero() {
    let input_num = document.getElementsByName("num")[0].value;
    if (input_num === '' || clear === 1) {
        clear = 0;
        document.getElementsByName("num")[0].value = "";
    } else {
        document.getElementsByName("num")[0].value = input_num + "0";
    }
    document.getElementById("AC").innerText = "C";
    adjustFontSize();
}

//소수점 버튼을 눌렀을 때 소수점을 입력창에 추가해주는 함수 addPoint
function addPoint() {
    let input_num = document.getElementsByName("num")[0].value;
    if ((input_num === '' || clear === 1)) {
        clear = 0;
        document.getElementsByName("num")[0].value = "0.";
    } else if (!(input_num.includes('.'))) {
        document.getElementsByName("num")[0].value = input_num + ".";
    }
    document.getElementById("AC").innerText = "C";
    adjustFontSize();
}

//연산자(+, -, *, /) 버튼을 눌렀을 때 해당 연산자를 입력창에 추가해주는 함수 pressOp
function pressOp(op) {
    if (op !== '=') {
        num1 = document.getElementsByName("num")[0].value;
        op1 = op;   
        clear = 1;  
    } else {
        if (op1 !== ' ') {
            num2 = document.getElementsByName("num")[0].value;
            result = String(eval(num1+op1+num2));
            document.getElementsByName("num")[0].value = result;
            num1 = result;
            clear = 1;
            op2 = op1;
            op1 = ' ';
        } else if (op1 === ' ' && op2 !== ' ') {
            result = String(eval(num1+op2+num2));
            document.getElementsByName("num")[0].value = result;
            num1 = result;
            clear = 1;
        }
    }
    adjustFontSize();
}

function adjustFontSize() {
    const target = document.getElementsByName("num")[0];
    let curFontSize = defaultSize;
    let minusScale = 1;
    target.style.fontSize = curFontSize + 'px';
    while(target.scrollWidth > target.clientWidth && curFontSize > minSize) {
        console.log(curFontSize);
        curFontSize -= minusScale;
        target.style.fontSize = curFontSize + 'px';
    }
    
    if (curFontSize <= minSize) {
        resetNum();
        document.getElementById("AC").innerText = "C";
        inputPrevent = 1;
    }
}