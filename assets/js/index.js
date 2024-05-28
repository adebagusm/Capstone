document.addEventListener('DOMContentLoaded', function() {
    const materiLink = document.querySelector('a[href="materi.html"]');
  
    materiLink.addEventListener('click', function(event) {
      if (!isLoggedIn()) {
        event.preventDefault(); // Mencegah navigasi default
        alert('Anda harus login terlebih dahulu untuk mengakses materi.');
        // Tampilkan modal login atau redirect ke halaman login
      }
    });
  });
  
  function isLoggedIn() {
    // Cek apakah pengguna sudah login (misalnya, periksa localStorage atau cookie)
    // Kembalikan true jika pengguna login, false jika tidak
    return false; // Ganti dengan logika pengecekan login yang sebenarnya
  }