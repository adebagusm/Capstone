const totalQuestions = 2; // Update this number based on the total number of questions

function markAnswered(questionNumber) {
  const btn = document.getElementById(`btn-${questionNumber}`);
  btn.classList.remove('btn-light');
  btn.classList.add('btn-answered');
}

function showQuestion(questionNumber) {
  const questions = document.querySelectorAll('.question');
  questions.forEach((question) => {
    question.classList.add('d-none');
  });

  const selectedQuestion = document.getElementById(`question${questionNumber}`);
  selectedQuestion.classList.remove('d-none');

  const submitButton = document.getElementById('submitQuiz');
  if (questionNumber == totalQuestions) {
    submitButton.classList.remove('d-none');
  } else {
    submitButton.classList.add('d-none');
  }
}

document.querySelectorAll('.form-check-input').forEach((input) => {
  input.addEventListener('change', (event) => {
    const questionNumber = event.target.name.replace('answer', '');
    markAnswered(questionNumber);
  });
});

document.querySelectorAll('.number-buttons button').forEach((button) => {
  button.addEventListener('click', (event) => {
    const questionNumber = event.target.innerText;
    showQuestion(questionNumber);
  });
});

document.getElementById('submitQuiz').addEventListener('click', function() {
  const answers = {
    'answer1': 'B', // Correct answer for question 1
    'answer2': 'D'  // Correct answer for question 2
  };
  let score = 0;
  for (const [question, correctAnswer] of Object.entries(answers)) {
    const userAnswer = document.querySelector(`input[name="${question}"]:checked`);
    if (userAnswer && userAnswer.value === correctAnswer) {
      score += 1;
    }
  }
  localStorage.setItem('quizScore', score);
  localStorage.setItem('totalQuestions', Object.keys(answers).length);
  window.location.href = 'skor.html'; // Redirect to result page
});