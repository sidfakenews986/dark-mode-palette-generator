// Event listener to change color based on input
const colorInput = document.getElementById('colorInput');
const box = document.getElementById('colorBox');

colorInput.addEventListener('input', function() {
    box.style.backgroundColor = colorInput.value;
});