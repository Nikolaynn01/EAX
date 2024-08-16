function addText() {
    let name = prompt("Enter your name,please!");
    let header = document.getElementById("myH1");
    header.textContent = header.textContent.replace("guest", name);   
}