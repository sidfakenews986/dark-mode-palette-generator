// Event listener to change color based on input
const colorInput = document.getElementById('colorInput');
const box = document.getElementById('colorBox');

// Update the box background color when the input value changes
colorInput.addEventListener('input', function() {
    box.style.backgroundColor = colorInput.value;
});