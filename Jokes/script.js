const jokeElement = document.getElementById("jokeElement");

const options = {
  method: 'GET',
  url: 'https://official-joke-api.appspot.com/random_joke',
};

axios.request(options).then(function (response) {
    const setup = response.data.setup;
    const punchline = response.data.punchline;
    jokeElement.innerHTML = `<strong>${setup}</strong><br>${punchline}`;
}).catch(function (error) {
    console.error(error);
});
