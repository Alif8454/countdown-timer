// Set the launch date to 14 days from now
const launchDate = new Date();
launchDate.setDate(launchDate.getDate() + 14);
const launchTime = launchDate.getTime();

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
  }
}, 1000);
