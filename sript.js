// const selectedH1 = document.getElementById("my-h1");


// // 1.inerhtml
// selectedH1.innerHTML = selectedH1("hello");
// console.log(innerHTML);
// // 2.inertext
// selectedH1.innerText
// // 3.text content
// selectedH1.textContent


const select = document.getElementById("h1");

function changeContent(){
     const userInput = prompt();

     select.innerHTML = userInput;

    }