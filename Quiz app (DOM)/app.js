let submitButton = document.querySelector(".submit");
let correctAnswer = ["A", "C", "D", "A", "B", "C"];
let form = document.querySelector(".quiz-card");
let result = document.querySelector(".result");
let score = 0;
let questions = document.querySelectorAll(".question");
let wholeCard = document.querySelectorAll(".card1");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let userAnswer = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value,
    form.q5.value,
    form.q6.value,
  ];

  userAnswer.forEach((answer, index) => {
    if (answer.toUpperCase() === correctAnswer[index]) {
      score += 1;
      wholeCard[index].classList.add("correct");
    } else {
      wholeCard[index].classList.add("wrong");
    }
  });
  console.log(score);

  let scoreCount = document.querySelector(
    "body > main > section > div.result > p:nth-child(1)"
  );
  scoreCount.innerHTML = `You scored ${score}/5!`;
  result.classList.remove("hide");
  scrollTo(0, 0);
});
