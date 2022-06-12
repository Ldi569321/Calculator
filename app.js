let input = document.querySelector("input");
let num1;
let num2;

function maxlength() {
    if (input.value.length >= 9) {
        alert("숫자는 9자릿수를 넘을수 없습니다.");
        일부러낸오류코드;
    };
};

const one = document.querySelector("#one");
one.addEventListener("click", () => {
    maxlength()
    input.value += `1`;
});

const two = document.querySelector("#two");
two.addEventListener("click", () => {
    maxlength()
    input.value += `2`;
});

const three = document.querySelector("#three");
three.addEventListener("click", () => {
    maxlength()
    input.value += `3`;
});

const four = document.querySelector("#four");
four.addEventListener("click", () => {
    maxlength()
    input.value += `4`;
});

const five = document.querySelector("#five");
five.addEventListener("click", () => {
    maxlength()
    input.value += `5`;
});

const six = document.querySelector("#six");
six.addEventListener("click", () => {
    maxlength()
    input.value += `6`;
});

const seven = document.querySelector("#seven");
seven.addEventListener("click", () => {
    maxlength()
    input.value += `7`;
});

const eight = document.querySelector("#eight");
eight.addEventListener("click", () => {
    maxlength()
    input.value += `8`;
});

const nine = document.querySelector("#nine");
nine.addEventListener("click", () => {
    maxlength()
    input.value += `9`;
});

let sign = 0;

const plus = document.querySelector("#plus");
plus.addEventListener("click", () => {
    num1 = (Number(input.value));
    input.value = ``;
    sign = 1;
})

const minus = document.querySelector("#minus");
minus.addEventListener("click", () => {
    num1 = (Number(input.value));
    input.value = ``;
    sign = 2;
})

const multifly = document.querySelector("#multifly")
multifly.addEventListener("click", () => {
    num1 = (Number(input.value));
    input.value = ``;
    sign = 3;
})

const devide = document.querySelector("#devide");
devide.addEventListener("click", () => {
    num1 = (Number(input.value));
    input.value = ``;
    sign = 4;
})

const result = document.querySelector("#result");
let resultNum;
result.addEventListener("click", () => {
    num2 = (Number(input.value));
    switch (sign) {
        case 1: input.value = num1 + num2;
            break;
        case 2: input.value = num1 - num2;
            break;
        case 3: input.value = num1 * num2;
            break;
        case 4: input.value = num1 / num2;
            break;
    }

})

const clear = document.querySelector("#C");
clear.addEventListener("click", () => {
    num1 = 0;
    num2 = 0;
    input.value = ``;
})

const del = document.querySelector("#del");
del.addEventListener("click", () => {
    delResult = input.value.slice(-input.value.length, input.value.length - 1);
    input.value = delResult;
})