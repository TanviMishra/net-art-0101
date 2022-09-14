body = document.querySelector("body");
grid = document.querySelector("#grid");
smallImgsDiv = document.querySelector("#smallImgs");
rules = document.querySelector("#ruleButton");
rulePopup = document.querySelector("#rulePopup");
clickInfo = document.querySelector("#clickInfo");
progressWrapper = document.querySelector("#progressWrapper");

winText = document.querySelector("#winText");
linkText = document.querySelector("#linkText");

let textJson = {
  hints: [
    {
      type: "hint",
      srno: 0,
      hover: "0.  ",
      text: " is home to many-a tourist attractions. Upon arrival, you can start you tour with an icecream and seagull viewing party. Remember to keep a hold on your shoes so that the gulls don't grab at them...",
    },
    {
      type: "hint",
      srno: 1,
      hover: "1.  ",
      text: " is a place of deep worship, with a clamor of bells that can even set the gulls soaring. People come here with a voracious appetite for inner pace not understanding that their greed will drown them...",
    },
    {
      type: "hint",
      srno: 2,
      hover: "2.  ",
      text: " is a lake with unknown depths of sorrow. It weeps itself to sleep every night troubled as the world peacefully drifts on be. It's starved for some company and comfort...",
    },
    {
      type: "hint",
      srno: 3,
      hover: "3.  ",
      text: " is a place with nothing to boast of except its food. There is no greater fool than the person who arrives with a full stomach. Fill yourself up with four cheese pizzas and perogies...",
    },
    {
      type: "hint",
      srno: 4,
      hover: "4.  ",
      text: " is a mountain range populated by sluggish mountain cats awaiting their final days",
    },
  ],
  alerts: [
    {
      type: "alert",
      hover: " ",
      text: " is a lake of unknown origin. it was first discovered by dacoits fleeing the nearby town and they fretfully took shelter along the banks... ",
      alertText:
        "this lake is only a rest stop for the uncooth. Are you uncooth!?",
    },
    {
      type: "alert",
      hover: " ",
      text: " is a ghost town. It was abandoned half a century back due to unknown reasons. All they left behind is a papertrail following flying monkeys and the collapse of society..",
      alertText: "only ghosts welcome here",
    },
    {
      type: "alert",
      hover: " ",
      text: " is a glacial path. While the views are unmatched, it can be a treacherous journey. ",
      alertText: "oops, watch your step",
    },
    {
      type: "alert",
      hover: " ",
      text: " is the valley of vipers. It is mostly visited by herpetologist who study said vipers",
      alertText: "excuse me, did you not hear me say VIPERS!",
    },
    {
      type: "alert",
      hover: " ",
      text: " is a beach broadway, perfect for summer lounging.",
      alertText: "the tides are rising, it's better to head back now",
    },
  ],
  urls: [
    {
      type: "url",
      hover: "0.  ",
      text: " is a volcanic mountain that has been dormant for 400 years.",
      urlText: "BOOM! Guess the mountain is no longer dormant",
      urlLink: "./projects/textAdventure/ex1Link.html",
    },
    {
      type: "url",
      hover: "1.  ",
      text: " is a city in the midst of a recession. The pharmaceutical company here just declared bankruptcy, so you know there's no saving the city",
      urlText:
        "it's already hard to find jobs, you don't need to add a challenge",
      urlLink: "./projects/textAdventure/ex1Link.html",
    },
    {
      type: "url",
      hover: "2.  ",
      text: " is a nucleur powerplant that provides employment to hundreds of workers from the town next door. That's why the government turns a blind eye to some of the lapsed building certifications",
      urlText: "you need to learn about red flags!",
      urlLink: "./projects/textAdventure/ex1Link.html",
    },
  ],
  imgs: [
    {
      type: "img",
      hover: "2.  ",
      text: " is a picturesque viewing point",
    },
  ],
};
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
let photosArr = [];
let hoverTextCount = 0;
let correctClueNumber = -1;
let gridSize = 2;
const clueMax = 4; //the total number of places clicked
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
for (i = 1; i < 26; i++) {
  photosArr.push("./assets/googleImgs/img" + i + ".png");
}
for (i = gridSize; i < 68; i += gridSize) {
  for (j = gridSize; j < 44; j += gridSize) {
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
function openWindow(type, urlText = "oop") {
  if (type == "win") {
    window.location = "./ex1Win.html";
  } else if (type == "link") {
    window.location = "./ex1Link.html";
  }
}
function progress() {
  progressWrapper.replaceChildren();

  for (i = 0; i <= clueMax; i++) {
    let div = document.createElement("div");
    if (i <= correctClueNumber) {
      console.log(clueMax, correctClueNumber, i);
      div.setAttribute("class", "progressIcon active");
    } else {
      div.setAttribute("class", "progressIcon deactive");
    }
    progressWrapper.append(div);
  }
}
progress();
function doubleClickEvents(type, div, dblText = "null") {
  if (type == "hints") {
    // console.log(parseInt(div.id), correctClueNumber + 1);
    parseInt(div.id) == correctClueNumber + 1
      ? correctClueNumber++ && console.log("winning")
      : (correctClueNumber = -1);
    correctClueNumber == clueMax ? openWindow("win", "you won") : console.log();
    progress();
  } else if (type == "alerts") {
    alert(dblText); //displays alert
  } else if (type == "urls") {
    openWindow("link", dblText); //fn call
  } else if (type == "imgs") {
    for (i = 0; i < Math.floor(Math.random() * 5); i++) {
      let smallImg = document.createElement("img");
      smallImg.src = photosArr[Math.floor(Math.random() * photosArr.length)];
      smallImg.setAttribute("class", "imgsArr"); //set class w css properties
      let position = Math.floor(Math.random() * (positionArr.length - 1));
      smallImg.style.top = positionArr[position][0] + "vw"; //positioning div height
      smallImg.style.left = positionArr[position][1] + "vw"; //positioning div width
      smallImgsDiv.append(smallImg);
      console.log(smallImg);
    }
  }
}
class placeClass {
  constructor(type, index = 0) {
    this.position = Math.floor(Math.random() * (positionArr.length - 1)); //used in arrUpdate() this. position = positionArr.length - 1; //for tests
    this.width = positionArr[this.position][0];
    this.height = positionArr[this.position][1];
    this.placePosition = Math.floor(Math.random() * (placeOptions.length - 1)); //used in arrUpdate() choose a random place position to remove later
    this.placeName = placeOptions[this.placePosition]; //place name from array
    this.hoverText = this.placeName; ////TO DO: comment to once hover text updated
    this.type = type; //adding the type to the constructor
    if (type == "hints") {
      this.clue = hoverTextCount; //exclusive property
      //  this.hoverText = textJson.hints[this.clue].hover;//TO DO: uncomment to once hover text updated
      this.infoText = textJson.hints[this.clue].text;
      this.color = colorArr[Math.floor(Math.random() * (colorArr.length - 1))]; //random col selector
    } else if (type == "alerts") {
      // this.hoverText = textJson.alerts[index].hover; //TO DO: uncomment to once hover text updated
      this.infoText = textJson.alerts[index].text;
      this.alertText = textJson.alerts[index].alertText; //exclusive property
      this.color = colorArr[Math.floor(Math.random() * (colorArr.length - 1))]; //random col selector
    } else if (type == "urls") {
      // this.hoverText = textJson.urls[index].hover;//TO DO: uncomment to once hover text updated
      this.infoText = textJson.urls[index].text;
      this.urlText = textJson.urls[index].urlText; //exclusive property
      this.urlLink = textJson.urls[index].urlLink; //exclusive property
      this.color = colorArr[Math.floor(Math.random() * (colorArr.length - 1))]; //random col selector
    } else if (type == "imgs") {
      // this.hoverText = textJson.urls[index].hover;//TO DO: uncomment to once hover text updated
      this.infoText = textJson.imgs[0].text;
      this.color = colorArr[Math.floor(Math.random() * (colorArr.length - 1))]; //random col selector
    }
  }
  displayParameters() {
    console.log(
      this.position,
      this.width,
      this.height,
      this.placePosition,
      this.placeName,
      this.color,
      // this.clue, //type==hint
      // this.alertText, //type==alert
      // this.urlText, //type==url
      // this.urlLink, //type==url
      this.hoverText,
      this.infoText
    );
  }
  arrUpdate() {
    positionArr.splice(this.position, 1);
    placeOptions.splice(this.placePosition, 1);
  }
  //majority of fn take place below:
  //a. all event litsteners here (click, dblclick, hover)
  //b. adding infoText to the clickInfo div
  //c. creating the cityPixel divs and assigning top and left
  setDiv() {
    let div = document.createElement("div");
    let place = this.placeName; //info that goes into the clickInfo div
    let type = this.type; //info that goes into the clickInfo div
    let text = this.infoText; //info for doubleClick
    let dblText;
    if (this.type == "alerts") dblText = this.alertText;
    if (this.type == "urls") dblText = this.urlText;
    if (this.type == "hints") {
      dblText = "null";
      div.innerHTML = this.clue; //TO REMOVE
    }
    div.setAttribute("class", "cityPixel"); //set class w css properties
    if (this.type == "hints") div.setAttribute("id", this.clue); //set id for identification and search
    div.style.top = this.height + "vw"; //positioning div height
    div.style.left = this.width + "vw"; //positioning div width
    div.style.backgroundColor = this.color;
    // if (Math.random() > 0.7) div.style.borderRadius = "50%"; //some circles
    body.append(div); //adding to html page
    //ALL EVENT LISTENERS
    div.addEventListener("dblclick", function () {
      doubleClickEvents(type, div, dblText);
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
for (i = 0; i < textJson.hints.length; i++) {
  place = new placeClass("hints");
  place.arrUpdate();
  place.setDiv();
  place.setHoverDiv();
}
for (i = 0; i < textJson.alerts.length; i++) {
  place = new placeClass("alerts", i);
  // place.displayParameters();
  place.arrUpdate();
  place.setDiv();
  place.setHoverDiv();
}
for (i = 0; i < textJson.urls.length; i++) {
  place = new placeClass("urls", i);
  place.arrUpdate();
  place.setDiv();
  place.setHoverDiv();
}
for (i = 0; i < 6; i++) {
  place = new placeClass("imgs", i);
  place.arrUpdate();
  place.setDiv();
  place.setHoverDiv();
}
rulePopup.style.display = "none"; //hide popup at beginning
rules.addEventListener("click", function () {
  var div = this.nextElementSibling;
  div.style.display == "block"
    ? (div.style.display = "none")
    : (div.style.display = "block");
});
