const canvasLine = document.getElementById('line');
var c = canvasLine.getContext('2d');

canvasLine.width = 1900;
canvasLine.height = 250;

c.beginPath();
c.moveTo(150, 50);
c.lineTo(1750, 50);
c.stroke();

