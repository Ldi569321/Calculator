let input = document.querySelector("input");
let num1;
let num2;

function maxlength() {
    if (input.value.length >= 10) {
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

const plus = document.querySelector("#plus");
plus.addEventListener("click", () => {
    num1 = input.value;
    input.value = 0;
})


