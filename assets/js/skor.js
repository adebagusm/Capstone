document.addEventListener('DOMContentLoaded', function() {
    const score = parseInt(localStorage.getItem('quizScore'), 10);
    const totalQuestions = parseInt(localStorage.getItem('totalQuestions'), 10);
    const resultDiv = document.getElementById('result');
    
    if (!isNaN(score) && !isNaN(totalQuestions) && totalQuestions > 0) {
      const percentage = (score / totalQuestions) * 100;
      resultDiv.textContent = `Score: ${percentage.toFixed(0)}`;
    } else {
      resultDiv.textContent = 'Error: Unable to calculate score.';
    }
  });