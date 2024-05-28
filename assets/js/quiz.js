function showQuestion(questionNumber) {
  const questions = document.querySelectorAll('.question');
  questions.forEach(question => {
      question.classList.remove('active');
  });

  document.getElementById(`question${questionNumber}`).classList.add('active');
}

function markAnswered(questionNumber) {
  const options = document.getElementsByName(`answer${questionNumber}`);
  const button = document.getElementById(`btn-${questionNumber}`);

  let answered = false;
  options.forEach(option => {
      if (option.checked) {
          answered = true;
      }
  });

  if (answered) {
      button.classList.remove('btn-secondary');
      button.classList.add('btn-answered');
  } else {
      button.classList.remove('btn-answered');
      button.classList.add('btn-secondary');
  }
}

// Initialize the first question as active
document.querySelectorAll('.number-buttons button').forEach(button => {
  button.addEventListener('click', function() {
      const questionNumber = parseInt(this.textContent);
      showQuestion(questionNumber); // Tampilkan pertanyaan yang sesuai
      markAnswered(questionNumber); // Periksa apakah pertanyaan sudah dijawab
  });
});