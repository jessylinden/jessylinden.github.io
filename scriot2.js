const canvas = document.getElementById('tester');
const ctx = canvas.getContext('2d');

var square = new Image()

function init() {
    square.scr = 'http://www.pngall.com/wp-content/uploads/5/Square-Shape-PNG-Image.png';
    window.requestAnimationFrame(draw);
}