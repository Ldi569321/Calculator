let input = document.querySelectorAll("input");
let num1;
let num2;

//숫자 넣는 부분
function Calculation(InnerNumber) {
    if (input[2].value.length >= 9) {
        alert("숫자는 9자릿수를 넘을수 없습니다.");
    } else {
    input[2].value += InnerNumber;
};
};

const clickNum = document.querySelectorAll("#number")
clickNum.forEach((numberTable, j) => {
    numberTable.addEventListener("click", () => {Calculation(j)});
});

const jum = document.querySelector("#jum");
jum.addEventListener("click", () => {
    if (input[2].value.length <= 0) {
        input[2].value += `0.`;
    } else {
        maxlength();
        input[2].value += `.`;
    }
});

//숫자 계산 부호 부분
let sign = 0;
let num = document.querySelector("#num");
let signArray = [`**`, `/`, `*`, `+`, `-`];
function signResult(signValue, innersign) {
    num1 = (Number(input[2].value));
    input[1].value = signValue;
    input[2].value = ``;
    num.value = num1;
    sign = innersign;
};

const signSymbol = document.querySelectorAll("#signSymbol");
signSymbol.forEach((signTable, i) => {
    signTable.addEventListener("click", () => {signResult(`${signArray[i]}`, i)});
});

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
    let sum = new Function('a', 'b', `return a ${signArray[sign]} b`);
    input[2].value = sum(num1, num2);
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