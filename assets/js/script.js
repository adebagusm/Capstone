document.addEventListener('DOMContentLoaded', function() {
    const startQuizButton = document.getElementById('startQuiz');

    startQuizButton.addEventListener('click', function(event) {
        event.preventDefault(); // Mencegah tindakan default dari elemen <a>
        window.location.href = 'quiz.html'; // Mengarahkan pengguna ke halaman quiz.html
    });
});