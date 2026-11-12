
const textElement = document.querySelector(".text-element");

textElement.addEventListener("mouseenter", () => {
  textElement.classList.add("hovered");
});

textElement.addEventListener("mouseleave", () => {
  textElement.classList.remove("hovered");
});


const greet = function (greeting) {
    return function (name) {
        console.log(`${greeting} ${name}`);
    };
};
const greeterhey = greet('hey,');
greeterhey('Lawrence');
greeterhey('Lawrence Wright');
