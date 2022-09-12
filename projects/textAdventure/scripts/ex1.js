body = document.querySelector("body");
grid = document.querySelector("#grid");
rules = document.querySelector("#ruleButton");
rulePopup = document.querySelector("#rulePopup");
clickInfo = document.querySelector("#clickInfo");

let placeOptions = [
  "Garhkaru",
  "Khanlag",
  "Asu",
  "Bagpura",
  "Yellamanchilli",
  "Dalunang",
  "Jamungri",
  "Dingri",
  "Maker",
  "Junnar",
  "Kulia",
  "Bagarkhet",
  "Kairpura",
  "Surquja",
  "Remunda",
  "Pirapur",
  "Daboh",
  "Balur",
  "Ūncha",
  "Sarangda",
  "Bari",
  "Bilthra",
  "Panchagram",
  "Phancha",
  "Babhnoul",
  "Tarer",
  "Susera",
  "Madaora",
  "Birdpur",
  "Ghoom",
  "Kusang",
  "Gukhrai",
  "Bherbherigaon",
  "Bodupatia",
  "Mirya",
  "Bangoli",
  "Iritti",
  "Chhinkaura",
  "Kankhar",
  "Thuli",
  "Jabri",
  "Jindi",
  "Ghoga",
  "Khosarpur",
  "Pudupadi",
  "Tokibal",
  "Pahra",
  "Dharmastala",
  "Rangura",
  "Lamsuaka",
];
let hoverTextJson = {
  hints: [
    {
      name: "",
      srno: 0,
      hover: "0. Only pain is intellectual",
      text: "0. With a clamor of bells that set the swallows soaring, the Festival of Summer came to the city Omelas, bright-towered by the sea.",
    },
    {
      name: "",
      srno: 1,
      hover: "1. Only pain is intellectual",
      text: "1. With a clamor of bells that set the swallows soaring, the Festival of Summer came to the city Omelas, bright-towered by the sea.",
    },
    {
      name: "",
      srno: 2,
      hover: "2. Only pain is intellectual",
      text: "2. With a clamor of bells that set the swallows soaring, the Festival of Summer came to the city Omelas, bright-towered by the sea.",
    },
    {
      name: "",
      srno: 3,
      hover: "3. Only pain is intellectual",
      text: "3. With a clamor of bells that set the swallows soaring, the Festival of Summer came to the city Omelas, bright-towered by the sea.",
    },
    {
      name: "",
      srno: 4,
      hover: "4. Only pain is intellectual",
      text: "4. With a clamor of bells that set the swallows soaring, the Festival of Summer came to the city Omelas, bright-towered by the sea.",
    },
    {
      name: "",
      srno: 5,
      hover: "5. Only pain is intellectual",
      text: "5. With a clamor of bells that set the swallows soaring, the Festival of Summer came to the city Omelas, bright-towered by the sea.",
    },
    {
      name: "",
      srno: 6,
      hover: "6. Only pain is intellectual",
      text: "6. With a clamor of bells that set the swallows soaring, the Festival of Summer came to the city Omelas, bright-towered by the sea.",
    },
    {
      name: "",
      srno: 7,
      hover: "7. Only pain is intellectual",
      text: "7. With a clamor of bells that set the swallows soaring, the Festival of Summer came to the city Omelas, bright-towered by the sea.",
    },
    {
      name: "",
      srno: 8,
      hover: "8. Only pain is intellectual",
      text: "8. With a clamor of bells that set the swallows soaring, the Festival of Summer came to the city Omelas, bright-towered by the sea.",
    },
    {
      name: "",
      srno: 9,
      hover: "9. Only pain is intellectual",
      text: "9. With a clamor of bells that set the swallows soaring, the Festival of Summer came to the city Omelas, bright-towered by the sea.",
    },
  ],
};
let hoverTextArr = [
  "0. With a clamor of bells that set the swallows soaring, the Festival of Summer came to the city Omelas, bright-towered by the sea.",
  "1. The ringing of the boats in harbor sparkled with flags. In the streets between houses with red roofs and painted walls, between old moss-grown gardens and under avenues of trees, past great parks and public buildings, processions moved.",
  "2. Some were decorous: old people in long stiff robes of mauve and gray, grave master workmen, quiet, merry women carrying their babies and chatting as they walked",
  "3. Children dodged in and out, their high calls rising like the swallows' crossing flights over the music and the singing.",
  "4. Joyous! How is one to tell about joy? How describe the citizens of Omelas?",
  "5. There were not less complex than us.",
  "6. The trouble is that we have a bad habit, encouraged by pedants and sophisticates, of considering happiness as something rather stupid.",
  "7. Only pain is intellectual",
  "8. How can I tell you about the people of Omelas?",
  "9. For instance, how about technology?",
];
let tempCol = getComputedStyle(document.body);
let colorArr = [
  tempCol.getPropertyValue("--col1opt1"),
  tempCol.getPropertyValue("--col1opt2"),
  tempCol.getPropertyValue("--col2opt1"),
  tempCol.getPropertyValue("--col2opt2"),
  tempCol.getPropertyValue("--col2opt3"),
];
let placeArr = [];
let positionArr = [];
let hoverTextCount = 0;
let correctClueNumber = 0;
let gridSize = 2;
const clueMax = 1;

for (i = 0; i < 68; i += gridSize) {
  for (j = 0; j < 44; j += gridSize) {
    positionArr.push([i, j]); //filling in all the posible values
  }
}
for (i = 0; i < 100; i += gridSize) {
  for (j = 0; j < 100; j += gridSize) {
    if (Math.random() > 0.4) {
      createGrid(i, j);
    }
  }
}
function createGrid(i, j) {
  let div = document.createElement("div");
  div.setAttribute("class", "grid"); //set class w css properties
  //   console.log(i, j);
  div.style.left = i + "vw"; //positioning div height
  div.style.top = j + "vw"; //positioning div width
  grid.append(div); //adding to html page
}
function openWindow() {
  document.open();
  document.write("<h1>You Won</h1>");
  document.close();
}
class placeClass {
  constructor() {
    this.positon = Math.floor(Math.random() * (positionArr.length - 1));
    // this.positon = positionArr.length - 1;
    this.width = positionArr[this.positon][0];
    this.height = positionArr[this.positon][1];
    this.placePosition = Math.floor(Math.random() * (placeOptions.length - 1)); //choose a random place position to remove later
    this.placeName = placeOptions[this.placePosition]; //place name from array
    this.color = colorArr[Math.floor(Math.random() * (colorArr.length - 1))]; //random col selector
    this.clue = hoverTextCount;
    this.hoverText = hoverTextJson.hints[this.clue].hover;
    this.infoText = hoverTextJson.hints[this.clue].text;
  }
  displayParameters() {
    console.log(
      this.positon,
      this.width,
      this.height,
      this.placePosition,
      this.placeName
    );
  }
  arrUpdate() {
    positionArr.splice(this.positon, 1);
    placeOptions.splice(this.placePosition, 1);
  }
  //majority of fn take place below:
  //a. all event litsteners here (click, dblclick, hover)
  //b. adding infoText to the clickInfo div
  //c. creating the cityPixel divs and assigning top and left
  setDiv() {
    let div = document.createElement("div");
    let place = this.placeName; //info that goes into the clickInfo div
    let text = this.infoText; //info that goes into the clickInfo div
    div.setAttribute("class", "cityPixel"); //set class w css properties
    div.setAttribute("id", this.clue); //set id for identification and search
    div.style.top = this.height + "vw"; //positioning div height
    div.style.left = this.width + "vw"; //positioning div width
    div.style.backgroundColor = this.color;
    body.append(div); //adding to html page
    div.addEventListener("dblclick", function () {
      console.log(parseInt(div.id), correctClueNumber);
      parseInt(div.id) == correctClueNumber
        ? correctClueNumber++
        : (correctClueNumber = 0);
      correctClueNumber == clueMax ? openWindow() : console.log("waiting");
    });
    div.addEventListener("mouseover", function () {
      var hover = this.nextElementSibling;
      hover.style.display = "block";
    });
    div.addEventListener("mouseout", function () {
      var hover = this.nextElementSibling;
      hover.style.display = "none";
    });
    div.addEventListener("click", function () {
      clickInfo.innerHTML = place; //adding to html element clickInfo
      clickInfo.innerHTML += text; //adding to html element clickInfo
    });
  }
  setHoverDiv() {
    hoverTextCount++;
    let div = document.createElement("div");
    div.innerHTML = this.hoverText; //setting place name
    div.style.display = "none";
    div.setAttribute("class", "hoverText"); //set class w css properties
    div.style.top = this.height + 1.5 + "vw"; //positioning div height
    div.style.left = this.width + 1.5 + "vw"; //positioning div width
    body.append(div); //adding to html page
  }
}
for (i = 0; i < 10; i++) {
  place1 = new placeClass();
  place1.arrUpdate();
  place1.setDiv();
  place1.setHoverDiv();
}
rulePopup.style.display = "none"; //hide popup at beginning
rules.addEventListener("click", function () {
  var div = this.nextElementSibling;
  div.style.display == "block"
    ? (div.style.display = "none")
    : (div.style.display = "block");
});
