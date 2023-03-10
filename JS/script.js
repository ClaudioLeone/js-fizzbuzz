const grid = document.querySelector(".grid");
const box = document.querySelector(".box");
const background = document.getElementById("background");

for (let i = 1; i <= 100; i++) {
    let numType;
    let color;

    // COLOR RANDOMIZER VARIABLES
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let rgb = "rgb(" + r + "," + g + "," + b + ")";

    if (i % 3 === 0 && i % 5 === 0){
        numType = "FizzBuzz";
        console.log(i, numType);
        color = "fizzbuzz-color"
        grid.innerHTML += `<div class="box ${color}"><span class="box-content">${numType}</span></div>`;
    }
    else if(i % 3 === 0){
        numType = "Fizz";
        console.log(i, numType); 
        color = "fizz-color"
        grid.innerHTML += `<div class="box ${color}"><span class="box-content">${numType}</span></div>`;
    }
    else if(i % 5 === 0){
        numType = "Buzz";
        console.log(i, numType);
        color = "buzz-color"
        grid.innerHTML += `<div class="box ${color}"><span class="box-content">${numType}</span></div>`;
    }
    else { 
        grid.innerHTML += `<div style="background-color: ${rgb}" class="box ${color}"><span class="box-content">${i}</span></div>`;
        console.log(i);
    }
}