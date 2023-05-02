const inquirer = require("inquirer");
const test = require("jest");
const fs = require("fs");
const {Shape, Triangle, Square, Circle} = require("./lib/shapes");
const init = function () {
  inquirer
    .prompt([
      {
        type: "input",
        name: "letters",
        message: "What 3 characters would you like in your logo?",
      },
      {
        type: "input",
        name: "textColor",
        message: "What color would you like your text to be?",
      },
      {
        type: "list",
        name: "shapes",
        message: "What shape would you like your logo to be?",
        choices: ["Triangle", "Square", "Circle"],
      },
      {
        type: "input",
        name: "fillColor",
        message: "What color would you like your shape to be?",
      },
    ])
    .then((data) => {
      const shape = data.shapes;
      if (shape == "Triangle") {
        const triangle = new Triangle(
          data.fillColor,
          data.letters,
          data.textColor
        );
        console.log(triangle);
        // const svg = triangle.render();
        // console.log(svg);
        fs.writeFile("examples/triangle.svg", triangle.render(), (err) => {
          err ? console.log(err) : console.log("success");
        });
      } else if (shape == "Square") {
        const square = new Square(data.fillColor, data.letters, data.textColor);
        console.log(square);
        // const svg = square.render();
        // console.log(svg);
        fs.writeFile("examples/Square.svg", square.render(), (err) => {
          err ? console.log(err) : console.log("success");
        });
      } else {
        const circle = new Circle(data.fillColor, data.letters, data.textColor);
        console.log(circle);
        // const svg = circle.render();
        // console.log(svg);
        fs.writeFile("examples/Circle.svg", circle.render(), (err) => {
          err ? console.log(err) : console.log("success");
        });
      }
    });
};

init();
