// let quote = document.getElementById("quote");
// let author = document.getElementById("author");
// let btn = document.getElementById("btn");

// const url = "https://api.quotable.io/random";
// let getQuote = ()=>{
//     fetch(url)
//       .then((data) => data.json())
//       .then((item) =>{
//         console.log(item.content);
//         console.log(item.author);
//       });
// };

// window.addEventListener("load", getQuote);


const jokeContainer = document.getElementById("joke");
const btn = document.getElementById("btn");
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

let getJoke = () =>{
    jokeContainer.classList.remove("fade");
    fetch(url)
    .then(data => data.json())
    .then(item => {
        jokeContainer.textContent = `${item.joke}`;
        jokeContainer.classList.add("fade");
    });
}

btn.addEventListener("click",getJoke);

getJoke();