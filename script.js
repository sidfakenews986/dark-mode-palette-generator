document.getElementById('base-color').addEventListener('input', function() {
    const baseColor = this.value;
    document.getElementById('color1').style.backgroundColor = baseColor;
    document.getElementById('color2').style.backgroundColor = shadeColor(baseColor, -20);
    document.getElementById('color3').style.backgroundColor = shadeColor(baseColor, -40);
    document.getElementById('color4').style.backgroundColor = shadeColor(baseColor, 20);
    document.getElementById('color5').style.backgroundColor = shadeColor(baseColor, 40);
});

function shadeColor(color, percent) {
    let num = parseInt(color.slice(1), 16);
    let amt = Math.round(2.55 * percent);
    let R = (num >> 16) + amt;
    let G = (num >> 8 & 0x00FF) + amt;
    let B = (num & 0x0000FF) + amt;
    R = (R < 255) ? (R < 0) ? 0 : R : 255;
    G = (G < 255) ? (G < 0) ? 0 : G : 255;
    B = (B < 255) ? (B < 0) ? 0 : B : 255;
    return "#" + (0x1000000 + (R << 16) + (G << 8) + B).toString(16).slice(1);
}