// Bootstrap JS
var bootstrap = require('bootstrap');

// night-mode nav bar
const nightModeToggle = document.getElementById('night-mode-toggle');
const body = document.body;

nightModeToggle.addEventListener('click', function() {
  body.classList.toggle('night-mode');
});
