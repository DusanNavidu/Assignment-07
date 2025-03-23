console.log("case-01.js loaded...");

let letters = ['A','B','C','D','E','F'];

setInterval(() =>{
    let last_value = letters.pop();
    letters.unshift(last_value);
    console.log(letters);

    document.getElementsByTagName("h2") [0].innerText = letters[0];
    document.getElementsByTagName("h2") [1].innerText = letters[1];
    document.getElementsByTagName("h2") [2].innerText = letters[2];
    document.getElementsByTagName("h2") [3].innerText = letters[3];
    document.getElementsByTagName("h2") [4].innerText = letters[4];
    document.getElementsByTagName("h2") [5].innerText = letters[5];
}, 2000)