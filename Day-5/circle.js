"use strict";

class Circle {
  constructor(radius = 1.0, color = "red") {
    this.radius = radius;
    this.color = color;
  }

  getRadius() {
    return "Radius of a circle: " + this.radius;
  }

  setRadius(value) {
    this.radius = value;
  }

  getColor() {
    return "Color of a circle: " + this.color;
  }

  setColor(value) {
    this.color = value;
  }

  stringProp() {
    return `Circle[radius = ${this.radius}, color = ${this.color}]`;
  }

  getArea() {
    return "Area of a circle: " + Math.PI * this.radius * this.radius;
  }

  getCircumference() {
    return "Circumference of a circle: " + 2 * Math.PI * this.radius;
  }
}

const circle1 = new Circle();
console.log(circle1.getRadius());
console.log(circle1.getColor());
console.log(circle1.stringProp());
console.log(circle1.getArea());
console.log(circle1.getCircumference());

circle1.setRadius(6);
circle1.setColor("blue");

console.log(circle1.getRadius());
console.log(circle1.getColor());
console.log(circle1.stringProp());
console.log(circle1.getArea());
console.log(circle1.getCircumference());
