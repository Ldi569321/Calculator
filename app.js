let input = document.querySelectorAll("input");
let num1;
let num2;

//숫자 넣는 부분
function Calculation(InnerNumber) {
    maxlength()
    input[2].value += InnerNumber;
};

function maxlength() {
    if (input[2].value.length >= 9) {
        alert("숫자는 9자릿수를 넘을수 없습니다.");
        일부러낸오류코드;
    };
};

const one = document.querySelector("#one");
one.addEventListener("click", () => {Calculation(1)});

const two = document.querySelector("#two");
two.addEventListener("click", () => (Calculation(2)));

const three = document.querySelector("#three");
three.addEventListener("click", () => {Calculation(3)});

const four = document.querySelector("#four");
four.addEventListener("click", () => {Calculation(4)});

const five = document.querySelector("#five");
five.addEventListener("click", () => {Calculation(5)});

const six = document.querySelector("#six");
six.addEventListener("click", () => {Calculation(6)});

const seven = document.querySelector("#seven");
seven.addEventListener("click", () => {Calculation(7)});

const eight = document.querySelector("#eight");
eight.addEventListener("click", () => {Calculation(8)});

const nine = document.querySelector("#nine");
nine.addEventListener("click", () => {Calculation(9)});

const zero = document.querySelector("#zero");
zero.addEventListener("click", () => {Calculation(0)});

const jum = document.querySelector("#jum");
jum.addEventListener("click", () => {
    if (input[2].value.length <= 0) {
        input[2].value += `0.`;
    } else {
        maxlength()
        input[2].value += `.`;
    }
});

//숫자 계산 부호 부분
let sign = 0;
let num = document.querySelector("#num");
function signResult(signValue, innersign) {
    num1 = (Number(input[2].value));
    input[1].value = signValue;
    input[2].value = ``;
    num.value = num1;
    sign = innersign;
};

const plus = document.querySelector("#plus");
plus.addEventListener("click", () => {signResult(`+`, 1)});

const minus = document.querySelector("#minus");
minus.addEventListener("click", () => {signResult(`-`, 2)});

const multifly = document.querySelector("#multifly")
multifly.addEventListener("click", () => {signResult(`×`, 3);});

const devide = document.querySelector("#devide");
devide.addEventListener("click", () => {signResult(`÷`, 4)});

const squared = document.querySelector("#squared");
squared.addEventListener("click", () => {signResult(`^`, 5)});

const plusAndMinus = document.querySelector("#plusAndMinus")
PandM = false;
plusAndMinus.addEventListener("click", () => {
    if (PandM == false) {
        keep = input[2].value;
        input[2].value = '-' + input[2].value;
        PandM = true;
    } else if (PandM == true) {
        input[2].value = keep;
        PandM = false;
    };
});

//결과 값 만들기
const result = document.querySelector("#result");
result.addEventListener("click", () => {
    num2 = (Number(input[2].value));
    switch (sign) {
        case 1: if (num1 + num2 > 9) {
            input[2].style.fontSize = "40px";
            input[2].value = num1 + num2;
        } else {
            input[2].value = num1 + num2;
        } break;

        case 2: if (num1 - num2 > 9) {
            input[2].style.fontSize = "40px";
            input[2].value = num1 - num2;
        } else {
            input[2].value = num1 - num2;
        } break;

        case 3: if (num1 * num2 > 9) {
            input[2].style.fontSize = "40px";
            input[2].value = num1 * num2;
        } else {
            input[2].value = num1 * num2;
        } break;

        case 4: if (num1 / num2 > 9) {
            input[2].style.fontSize = "40px";
            input[2].value = num1 / num2;
        } else {
            input[2].value = num1 / num2;
        } break;

        case 5: if (num1 ** num2 > 9) {
            input[2].style.fontSize = "40px";
            input[2].value = num1 ** num2;
        } else {
            input[2].value = num1 ** num2;
        } break;
    };
    num.value = ``;
    input[1].value = ``;
});

const clear = document.querySelector("#C");
clear.addEventListener("click", () => {
    num1 = 0;
    num2 = 0;
    sign = 0;
    num.value = ``;
    input[0].value = ``;
    input[1].value = ``;
    input[2].value = ``;
});

const del = document.querySelector("#del");
del.addEventListener("click", () => {
    delResult = input[2].value.slice(-input[2].value.length, input[2].value.length - 1);
    input[2].value = delResult;
});