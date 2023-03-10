const grid = document.querySelector(".grid")
for (let i = 1; i <= 100; i++) {
    let numType;
    if (i % 3 === 0 && i % 5 === 0){
        numType = "FizzBuzz";
        console.log(i, numType); 
    }
    else if(i % 3 === 0){
        numType = "Fizz";
        console.log(i, numType); 
    }
    else if(i % 5 === 0){
        numType = "Buzz";
        console.log(i, numType); 
    }
    else {
       console.log(i); 
    }    

    grid.innerHTML += `<div class="box">${i}</div>`
} 