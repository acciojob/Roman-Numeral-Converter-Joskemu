// script.js
document.addEventListener('DOMContentLoaded', function () {
    const button = document.getElementById('actionBtn');
    const messageParagraph = document.getElementById('message');

    button.addEventListener('click', function () {
        messageParagraph.innerHTML = "You clicked the button! The message has been updated.";
    });
});
