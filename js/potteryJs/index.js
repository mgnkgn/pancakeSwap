const rightArrow = document.querySelector(
  ".pottery_third-down_card-row1-left-arrow_right"
);
const leftArrow = document.querySelector(
  ".pottery_third-down_card-row1-left-arrow_left"
);
const pgNumber = document.querySelector(
  ".pottery_third-down_card-row1-left-p-span"
);
const userCodes = document.querySelectorAll(".table_row_infos-code");
const userNames = document.querySelectorAll(".table_row_infos-user");
let data = [];
rightArrow.addEventListener("click", () => {
  pgNumber.innerHTML++;
  data = [
    {
      userCode: randomGenerator(),
      userName: randomUserNameGen(),
    },
    {
      userCode: randomGenerator(),
      userName: randomUserNameGen(),
    },
    {
      userCode: randomGenerator(),
      userName: randomUserNameGen(),
    },
    {
      userCode: randomGenerator(),
      userName: randomUserNameGen(),
    },
    {
      userCode: randomGenerator(),
      userName: randomUserNameGen(),
    },
    {
      userCode: randomGenerator(),
      userName: randomUserNameGen(),
    },
    {
      userCode: randomGenerator(),
      userName: randomUserNameGen(),
    },
    {
      userCode: randomGenerator(),
      userName: randomUserNameGen(),
    },
  ];
  newPageCreate();
  console.log(data);
});
leftArrow.addEventListener("click", () => {
  if (pgNumber.innerHTML <= 0) {
    return;
  }
  pgNumber.innerHTML--;
  data = [
    {
      userCode: randomGenerator(),
      userName: randomUserNameGen(),
    },
    {
      userCode: randomGenerator(),
      userName: randomUserNameGen(),
    },
    {
      userCode: randomGenerator(),
      userName: randomUserNameGen(),
    },
    {
      userCode: randomGenerator(),
      userName: randomUserNameGen(),
    },
    {
      userCode: randomGenerator(),
      userName: randomUserNameGen(),
    },
    {
      userCode: randomGenerator(),
      userName: randomUserNameGen(),
    },
    {
      userCode: randomGenerator(),
      userName: randomUserNameGen(),
    },
    {
      userCode: randomGenerator(),
      userName: randomUserNameGen(),
    },
  ];
  newPageCreate();
  console.log(data);
});

const randomGenerator = function () {
  let result = "";
  const firstGen = Math.random().toString(36).slice(-4);
  const secondGen = Math.random().toString(36).slice(-4);
  result = firstGen + "..." + secondGen;
  return result;
};

const randomUserNameGen = function () {
  const randomLength = Math.floor(Math.random() * 5 + 3);
  let result = "@";
  const letters = "ABCDEFGHIJKLMNOPRSTUVYZWXQabcdefghijklmnoprstuvyzqxw";

  for (let i = 0; i < randomLength; i++) {
    result = result + letters[Math.floor(Math.random() * letters.length + 1)];
    // console.log(`Random Length: ${i} - ${result} / ${randomLength}`);
  }
  return result;
};

console.log(data);
const newPageCreate = function () {
  for (let i = 0; i < userCodes.length; i++) {
    userCodes[i].innerHTML = data[i].userCode;
    userNames[i].innerHTML = data[i].userName;
  }
};
