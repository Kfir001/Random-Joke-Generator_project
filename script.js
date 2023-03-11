const jokeContainer = document.querySelector("#joke");
const btn = document.querySelector("#btn");
const url ="https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

async function getJoke() {
  try {
    jokeContainer.classList.remove('fade');
    const getApi = await fetch(url);
    const data = await getApi.json();
    jokeContainer.textContent = `${data.joke}`;
    jokeContainer.classList.add('fade');
} catch (error) {
    jokeContainer.textContent = "something error ";
  }
}
btn.addEventListener("click", getJoke);
getJoke();



