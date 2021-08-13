const plus = document.querySelector("#add");
const minus = document.querySelector("#minus");
const number = document.querySelector("span");
let count = 0;
number.innerText = count;

const updateText = () => {
  number.innerText = count;
};

const handleAdd = () => {
  count += 1;
};

const handleMinus = () => {
  count -= 1;
};

plus.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);
