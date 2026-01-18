"use strict";

const CarTypes = [
  { value: 1, caption: "Aston Martin" },
  { value: 2, caption: "Bentley" },
  { value: 3, caption: "Alfa Romeo" },
  { value: 4, caption: "Ferrari" },
  { value: 5, caption: "Subaru" },
  { value: 6, caption: "Porsche" },
  { value: 7, caption: "Tesla" },
  { value: 8, caption: "Toyota" },
  { value: 9, caption: "Renault" },
  { value: 10, caption: "Peugeot" },
  { value: 11, caption: "Suzuki" },
  { value: 12, caption: "Mitsubishi" },
  { value: 13, caption: "Nissan" },
];

const GirlsNames = ["Anne", "Inger", "Kari", "Marit", "Ingrid", "Liv", "Eva", "Berit", "Astrid", "Bjørg", "Hilde", "Anna", "Solveig", "Marianne", "Randi", "Ida", "Nina", "Maria", "Elisabeth", "Kristin"];

const MovieGenre = [
  "Action",
  "Adventure",
  "Animation",
  "Biography",
  "Comedy",
  "Crime",
  "Documentary",
  "Drama",
  "Family",
  "Fantasy",
  "Film Noir",
  "History",
  "Horror",
  "Music",
  "Musical",
  "Mystery",
  "Romance",
  "Sci-Fi",
  "Short",
  "Sport",
  "Superhero",
  "Thriller",
  "War",
  "Western",
];

//--- Part 1 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/
function cmbTask1CalculateClick() {
  const p1printer = document.getElementById("txtTask1Output")
  const p1width = document.getElementById("txtRectWidth").value
  const p1height = document.getElementById("txtRectHeight").value

  const p1calculatedCircumference = (parseInt(p1width) + parseInt(p1height)) * 2
  const p1calculatedArea = p1width * p1height
  
  p1printer.innerHTML =  `Width: ${p1width} | Height: ${p1height}<br/>`
  p1printer.innerHTML += `Circumference: ${p1calculatedCircumference} | Area: ${p1calculatedArea}`
}

const p1calculator = document.getElementById("cmbTask1Calculate")
p1calculator.onclick = cmbTask1CalculateClick

//--- Part 2 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/
const p2writtenWordList = []

const p2writtenWord = document.getElementById("txtTask2Word")
p2writtenWord.addEventListener("keypress", txtTask2WordKeypress)

function txtTask2WordKeypress(p2hasClicked) {
  const p2printer = document.getElementById("txtTask2Output")

  if(p2hasClicked.key == "Enter") {
    p2writtenWordList.push(p2writtenWord.value)
    p2printer.innerHTML = `${p2writtenWordList.length} words are now in the array! <br/>`
    p2printer.innerHTML += `${p2writtenWordList.join(" | ")}`
    p2writtenWord.value = ""
  }
}

//--- Part 3 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/
const p3checkboxes = document.getElementsByName("chkTask3");
const p3button = document.getElementById("cmbTask3CheckAnswer");
const p3printer = document.getElementById("txtTask3Output");

p3button.addEventListener("click", p3checkChecker);

function p3checkChecker() {

  for (let p3x = 0; p3x < p3checkboxes.length; p3x++) {
    const p3checkbox = p3checkboxes[p3x];
    p3printer.innerHTML += `p3checkboxes[${p3x}].checked =  ${p3checkbox.checked} </br>`;
  }
}


//--- Part 4 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/
const p4carDiv = document.getElementById("divTask4Cars");
for (let p4x = 0; p4x < CarTypes.length; p4x++) {
  const p4input = document.createElement("input")
  p4input.type = "radio"
  p4input.name = "caption"
  p4input.value = CarTypes[p4x]
  p4input.addEventListener("change", p4selectionMade)

  const p4caption = document.createElement("label")
  p4caption.for = p4input.id
  p4caption.appendChild(document.createTextNode(CarTypes[p4x].caption));
  p4carDiv.appendChild(p4input);
  p4carDiv.appendChild(p4caption);
  p4carDiv.appendChild(document.createElement("br"));

}

function p4selectionMade (p4whenClicked) {
  const p4printer = document.getElementById("txtTask4Output");
  p4printer.innerHTML = `Selected car type: ${p4whenClicked.target.value}`
}
//--- Part 5 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/
const p5dropdown = document.getElementById("selectTask5Animals")
const p5printer = document.getElementById("txtTask5Output")

p5dropdown.addEventListener("change", p5changeAnimals)

function p5changeAnimals () {
  p5printer.innerHTML = `Animal: ${p5dropdown.value}`
}

//--- Part 6 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/
const p6choices = document.getElementById("selectTask6Girls")
const p6printer = document.getElementById("txtTask6Output")

p6choices.addEventListener("change", p6changeNames)

for (let p6x = 0; p6x < GirlsNames.length; p6x++) {
  const p6name = document.createElement("option")
  p6name.value = p6x.toString()
  p6name.appendChild(document.createTextNode(GirlsNames[p6x]))
  p6choices.appendChild(p6name)
}

function p6changeNames () {
  const p6id = parseInt(p6choices.value)
  p6printer.innerHTML = `Name: ${GirlsNames[p6id]}`
}


//--- Part 7 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/
const p7title =document.getElementById("txtMovieTitle")
const p7genreList = document.getElementById("selectMovieGenre")
const p7director = document.getElementById("txtMovieDirector") 
const p7rating = document.getElementById("txtMovieRate")
let p7movieCounter = 0

const p7movie = document.getElementById("tblMovies")
const p7movieTable = p7movie.getElementsByTagName("tbody")[0]

for (let p7x = 0; p7x < MovieGenre.length; p7x++) {
  const p7genre = document.createElement("option")

  p7genre.appendChild(document.createTextNode(MovieGenre[p7x]))
  p7genreList.appendChild(p7genre)
}

const p7button = document.getElementById("cmbAddMovie")
p7button.addEventListener("click", p7addMovie)


function p7addMovie() {
  p7movieCounter += 1

  const p7movieRow = p7movieTable.insertRow();
  const p7cellID = p7movieRow.insertCell();
  const p7cellTitle = p7movieRow.insertCell();
  const p7cellGenre = p7movieRow.insertCell();
  const p7cellDirector = p7movieRow.insertCell();
  const p7cellRate = p7movieRow.insertCell();
  
  p7cellID.innerHTML = p7movieCounter
  p7cellTitle.innerHTML = p7title.value;
  p7cellGenre.innerHTML = p7genreList.value;
  p7cellDirector.innerHTML = p7director.value;
  p7cellRate.innerHTML = p7rating.value;
  
}