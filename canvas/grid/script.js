class Canvas {
  constructor() {
    this.canvas = document.querySelector('#canvas');
    this.ctx = this.canvas.getContext('2d');
  }

  drawBorder(color) {
    const canvas = this.canvas;
    const ctx = this.ctx;
    ctx.beginPath();
    
    ctx.moveTo(0, 0);
    ctx.lineTo(0, canvas.height);
    ctx.lineTo(canvas.width, canvas.height);
    ctx.lineTo(canvas.width, 0);
    ctx.lineTo(0, 0);

    ctx.lineWidth = 4;
    ctx.strokeStyle = color;
    ctx.stroke();

    ctx.closePath();
  }

  drawLine(coordinates, color) {
    const ctx = this.ctx;

    ctx.beginPath();
    ctx.moveTo(coordinates.x1, coordinates.y1);
    ctx.lineTo(coordinates.x2, coordinates.y2);

    ctx.lineWidth = 1;
    ctx.strokeStyle = color;
    ctx.stroke();
    ctx.closePath();
  }

  drawGrid(sizeCell, gridColor, textColor) {
    const canvas = this.canvas;
    const ctx = this.ctx;

    this.drawBorder(gridColor);

    ctx.font = '10px arial';
    ctx.fillStyle = textColor;
    ctx.fillText('0', 3, 13);

    for (let i = 1; sizeCell * i < canvas.width; i++) {
      this.drawLine({
        x1: 0,
        y1: sizeCell * i,
        x2: canvas.width,
        y2: sizeCell * i
      }, gridColor);
      
      ctx.fillText(`${sizeCell * i}`, 3, sizeCell * i + 13);
    }

    for (let i = 1; sizeCell * i < canvas.width; i++) {
      this.drawLine({
        x1: sizeCell * i,
        y1: 0,
        x2: sizeCell * i,
        y2: canvas.height
      }, gridColor);

      ctx.fillText(`${sizeCell * i}`, sizeCell * i + 3, 13);
    }
  }
}

const canvas = new Canvas;
canvas.drawGrid(25, 'rgb(0, 0, 0)', '#304bd1');
