
function updateDateTime() {
    const now = new Date();
    const dateTimeString = now.toLocaleString();
    document.getElementById('date-time').textContent = dateTimeString;
}

// Update the date and time immediately and then every second
updateDateTime();
setInterval(updateDateTime, 1000);
