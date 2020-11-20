const question = document.getElementsByClassName("question_acc");
for (let i = 0; i < question.length; i++) {
  question[i].addEventListener("click", function () {
    const answer = this.nextElementSibling;
    answer.classList.toggle("hide");
    question[i].classList.toggle("border");
  });
}
