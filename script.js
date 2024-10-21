window.addEventListener("load", function () {
    fetch("https://api.thecatapi.com/v1/images/search")
    .then ((response) => response.json())
    .then((data) => renderCat(data))

    fetch ("https://meowfacts.herokuapp.com/")
    .then ((response) => response.json())
    .then ((data) => catFact(data))
})


document.addEventListener("click", function (event) {
    if(!event.target.matches("#button")) return;

    fetch("https://api.thecatapi.com/v1/images/search")
    .then ((response) => response.json())
    .then((data) => renderCat(data))

    fetch ("https://meowfacts.herokuapp.com/")
    .then ((response) => response.json())
    .then ((data) => catFact(data))
});

function renderCat (data){
    const catPhoto = document.getElementById("kittyCat");
    catPhoto.setAttribute("src", data[0].url);
}

function catFact (data){
    const kittyFact = document.getElementById("fact");
    console.log(data["data"])
    kittyFact.innerHTML = data["data"];
}
