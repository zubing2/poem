function createParagraph() {
    const para1 = document.createElement("p");
    const para2 = document.createElement("p");
    para1.textContent = "I hate this rain.";
    para2.textContent = "It brings me pain.";
    document.body.append(para1);
    document.body.append(para2);
}

function createParagraph2() {
    const para1 = document.createElement("p");
    const para2 = document.createElement("p");
    para1.textContent = "This water needs to drain.";
    para2.textContent = "Before it melts my brain.";
    document.body.append(para1);
    document.body.append(para2);
}

const button1 = document.querySelector("one");
const button2 = document.querySelector("two");

one.addEventListener("click", createParagraph);
two.addEventListener("click", createParagraph2);


