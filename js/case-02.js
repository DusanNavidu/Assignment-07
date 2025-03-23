console.log("case-02.js loaded...");

let colors = ['pink','purple','red','blue','green','yellow'];

setInterval(() =>{
    let last_value = colors.pop();
    colors.unshift(last_value);
    console.log(colors);

    let boxes = document.querySelectorAll(".box");
    boxes.forEach((box, index) => {
        if (index < colors.length) {
            box.style.backgroundColor = colors[index];
        }
    });
}, 1000)