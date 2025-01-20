// Specify the birthday date (month and day)
const birthdayMonthDay = { month: 0, day: 28 };

function updateCountdown() {
  const now = new Date();

  // Set the birthday date for the current year
  let targetDate = new Date(now.getFullYear(), birthdayMonthDay.month, birthdayMonthDay.day);

  // If the birthday has already passed, set it for the next year
  if (targetDate < now) {
    targetDate.setFullYear(now.getFullYear() + 1);
  }

  // Calculate the difference in time (milliseconds)
  const timeDiff = targetDate - now;

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24)); // Full days
  const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); // Remaining hours
  const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60)); // Remaining minutes
  const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000); // Remaining seconds

  // Update the elements on the page
  document.getElementById("days").textContent = days.toString().padStart(2, "0");
  document.getElementById("hours").textContent = hours.toString().padStart(2, "0");
  document.getElementById("minutes").textContent = minutes.toString().padStart(2, "0");
  document.getElementById("seconds").textContent = seconds.toString().padStart(2, "0");
}

// Update the countdown every second
setInterval(updateCountdown, 1000);

// Start the countdown when the page loads
updateCountdown();
