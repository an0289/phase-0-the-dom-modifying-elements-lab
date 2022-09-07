const element = document.getElementById("main");
element.remove();
const newHeader = document.createElement("h1");
newHeader.setAttribute("id", "victory");
newHeader.textContent = "YOUR-NAME is the champion";
document.body.append(newHeader);


