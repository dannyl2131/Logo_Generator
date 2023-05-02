class Shape {
  constructor(fillColor, letters, textColor) {
    this.fillColor = fillColor;
    this.textColor = textColor;
    if (letters.length != 3) {
      this.letters = "AAA";
    } else {
      this.letters = letters;
    }
  }
}

class Triangle extends Shape {
  constructor(fillColor, letters, textColor) {
    super(fillColor, letters, textColor);
  }
  render() {
    return `<svg width="300" height="200">
      <g>
      <polygon points="80,0 0,200 250,370" fill="${this.fillColor}"/>
      <text x="35" y="170" font-size="65" fill="${this.textColor}">${this.letters}</text>
      </g>
      </svg>`;
  }
}
class Circle extends Shape {
  constructor(fillColor, letters, textColor) {
    super(fillColor, letters, textColor);
  }
  render() {
    return `
      <svg width="300" height="200">
          <g>
              <circle cx="100" cy="100" r="100" fill="${this.fillColor}"/>
              <text x="5" y="130" font-size="100" fill="${this.textColor}">${this.letters}</text>
          </g> 
      </svg>`;
  }
}
class Square extends Shape {
  constructor(fillColor, letters, textColor) {
    super(fillColor, letters, textColor);
  }
  render() {
    return `<svg width="300" height="200">
      <g>
       <rect x="0" y="0" width="200" height="200" fill="${this.fillColor}"/>
       <text x="5" y="130" font-size="100" fill="${this.textColor}">${this.letters}</text>
      </g>
    </svg>`;
  }
}

module.exports = { Shape, Triangle, Square, Circle };
