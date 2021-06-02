class Canvas {
  constructor() {
    this.canvas = document.querySelector('#canvas');
    this.canvas.width = document.documentElement.clientWidth;
    this.canvas.height = document.documentElement.clientHeight;

    this.ctx = this.canvas.getContext('2d');

    this.clear();
  }

  clear(color) {
    const canvas = this.canvas;
    const ctx = this.ctx;
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
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

  drawСrosshair(x, y) {
    const canvas = this.canvas;
    const lineColor = '#D9D9D9';

    this.drawLine({
      x1: 0,
      y1: y,
      x2: canvas.width,
      y2: y
    }, lineColor);

    this.drawLine({
      x1: x,
      y1: 0,
      x2: x,
      y2: canvas.height
    }, lineColor);
  }

  getRand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  drawCrilce(x, y, size) {
    const ctx = this.ctx;
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI*2, true);
    ctx.fillStyle = '#fff';
    ctx.fill();
    ctx.closePath();
  }

  moveСrosshair() {
    const canvas = this.canvas;
    let x = this.getRand(0, canvas.width);
    let y = this.getRand(0, canvas.height);
    let count = 0;
    let moveX = 0;
    let moveY = 0;
    let moveСoefficient = 1;
    setInterval(() => {
      if (count > 100 * moveСoefficient) {
        count = 0;

        moveСoefficient = this.getRand(1, Math.floor(canvas.height / 100) / 2);

        moveX = this.getRand(-1, 2);
        while (x + 100 * moveСoefficient * moveX < 0 ||
           x + 100 * moveСoefficient * moveX > canvas.width ||
           moveX === 0
        ) {
          moveX = this.getRand(-1, 2);
        }

        moveY = this.getRand(-1, 2);
        while (y + 100 * moveСoefficient * moveY < 0 ||
          y + 100 * moveСoefficient * moveY > canvas.height ||
          moveY === 0
        ) {
          moveY = this.getRand(-1, 2);
        }
      }

      this.clear();
      this.drawСrosshair(x, y);
      this.drawCrilce(x, y, 3);
      x += moveX;
      y += moveY;
      count++;
    }, 8);
  }
}

const canvas = new Canvas;
canvas.moveСrosshair();