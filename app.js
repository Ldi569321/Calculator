let input = document.querySelectorAll("input");
let num1;
let num2;

function maxlength() {
    if (input[2].value.length >= 9) {
        alert("숫자는 9자릿수를 넘을수 없습니다.");
        일부러낸오류코드;
    };
};

const one = document.querySelector("#one");
one.addEventListener("click", () => {
    maxlength()
    input[2].value += `1`;
});

const two = document.querySelector("#two");
two.addEventListener("click", () => {
    maxlength()
    input[2].value += `2`;
});

const three = document.querySelector("#three");
three.addEventListener("click", () => {
    maxlength()
    input[2].value += `3`;
});

const four = document.querySelector("#four");
four.addEventListener("click", () => {
    maxlength()
    input[2].value += `4`;
});

const five = document.querySelector("#five");
five.addEventListener("click", () => {
    maxlength()
    input[2].value += `5`;
});

const six = document.querySelector("#six");
six.addEventListener("click", () => {
    maxlength()
    input[2].value += `6`;
});

const seven = document.querySelector("#seven");
seven.addEventListener("click", () => {
    maxlength()
    input[2].value += `7`;
});

const eight = document.querySelector("#eight");
eight.addEventListener("click", () => {
    maxlength()
    input[2].value += `8`;
});

const nine = document.querySelector("#nine");
nine.addEventListener("click", () => {
    maxlength()
    input[2].value += `9`;
});

const zero = document.querySelector("#zero");
zero.addEventListener("click", () => {
    maxlength()
    input[2].value += `0`;
});

const jum = document.querySelector("#jum");
jum.addEventListener("click", () => {
    if (input[2].value.length <= 0) {
        input[2].value += `0.`;
    } else {
        maxlength()
        input[2].value += `.`;
    }
});


let sign = 0;
let num = document.querySelector("#num");
const plus = document.querySelector("#plus");
plus.addEventListener("click", () => {
    num1 = (Number(input[2].value));
    input[2].value = ``;
    sign = 1;
    num.value = num1;
    input[1].value = "+";
})

const minus = document.querySelector("#minus");
minus.addEventListener("click", () => {
    num1 = (Number(input[2].value));
    input[2].value = ``;
    sign = 2;
    num.value = num1;
    input[1].value = `-`;
})

const multifly = document.querySelector("#multifly")
multifly.addEventListener("click", () => {
    num1 = (Number(input[2].value));
    input[2].value = ``;
    sign = 3;
    num.value = num1;
    input[1].value = `×`;
})

const devide = document.querySelector("#devide");
devide.addEventListener("click", () => {
    num1 = (Number(input[2].value));
    input[2].value = ``;
    sign = 4;
    num.value = num1;
    input[1].value = `÷`;
})

const result = document.querySelector("#result");
let resultNum;
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
    }

    num.value = ``;
    input[1].value = ``;

})

const clear = document.querySelector("#C");
clear.addEventListener("click", () => {
    num1 = 0;
    num2 = 0;
    num.value = ``;
    input[0].value = ``;
    input[1].value = ``;
    input[2].value = ``;
})

const del = document.querySelector("#del");
del.addEventListener("click", () => {
    delResult = input[2].value.slice(-input[2].value.length, input[2].value.length - 1);
    input[2].value = delResult;
});