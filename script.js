
let currentQuestion = 0;
let score = 0;

function loadQuestion() {
  const q = questions[currentQuestion];
  document.getElementById("question").textContent = q.question;
  const optionsContainer = document.getElementById("options");
  optionsContainer.innerHTML = "";
  q.options.forEach(option => {
    const label = document.createElement("label");
    label.innerHTML = `<input type="radio" name="option" value="${option}"> ${option}`;
    optionsContainer.appendChild(label);
  });
}

function nextQuestion() {
  const selected = document.querySelector('input[name="option"]:checked');
  if (!selected) {
    alert("Please select an answer.");
    return;
  }

  if (selected.value === questions[currentQuestion].answer) {
    score++;
  }

  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  document.getElementById("question-container").style.display = "none";
  document.getElementById("result").textContent = `You scored ${score} out of ${questions.length}!`;
  document.getElementById("restartBtn").style.display = "inline-block";
}

function restartQuiz() {
  currentQuestion = 0;
  score = 0;
  document.getElementById("question-container").style.display = "block";
  document.getElementById("restartBtn").style.display = "none";
  document.getElementById("result").textContent = "";
  loadQuestion();
}

loadQuestion();
