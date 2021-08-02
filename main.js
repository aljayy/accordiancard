"use strict";
const questionBox = document.querySelectorAll(`.questionbox`);
const questionList = document.querySelectorAll(`.question`);
const answerList = document.querySelectorAll(`.answer`);

for (let i = 0; i < questionBox.length; i++) {
  questionBox[i].addEventListener(`click`, function () {
    answerList[i].classList.toggle(`hidden`);
    questionList[i].classList.toggle(`bold`);
  });
}
