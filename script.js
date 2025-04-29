// Cek apakah sudah ada launchTime di localStorage
let launchTime = localStorage.getItem("launchTime");

if (!launchTime) {
  // Jika belum ada, set ke 14 hari dari sekarang
  const launchDate = new Date();
  launchDate.setDate(launchDate.getDate() + 14);
  launchTime = launchDate.getTime();

  // Simpan ke localStorage
  localStorage.setItem("launchTime", launchTime);
} else {
  // Convert kembali ke number
  launchTime = parseInt(launchTime);
}

const countdown = setInterval(() => {
  const now = new Date().getTime();
  const distance = launchTime - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = days.toString().padStart(2, '0');
  document.getElementById("hours").textContent = hours.toString().padStart(2, '0');
  document.getElementById("minutes").textContent = minutes.toString().padStart(2, '0');
  document.getElementById("seconds").textContent = seconds.toString().padStart(2, '0');

  if (distance < 0) {
    clearInterval(countdown);
    document.getElementById("countdown").innerHTML = "🚀 Launched!";
    localStorage.removeItem("launchTime"); // Reset agar bisa mulai ulang nanti
  }
}, 1000);
