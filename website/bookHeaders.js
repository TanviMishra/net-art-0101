let places = [
  { locName: "Virginia", count: 5 },
  { locName: "Michigan", count: 13 },
  { locName: "Mississippi", count: 9 },
  { locName: "Idaho", count: 5 },
  { locName: "Oklahoma", count: 28 },
  { locName: "Missouri", count: 6 },
  { locName: "Ohio", count: 2 },
  { locName: "Kansas", count: 12 },
  { locName: "Indiana", count: 9 },
  { locName: "Wisconsin", count: 8 },
  { locName: "Vermont", count: 1 },
  { locName: "North Carolina", count: 12 },
  { locName: "South Dakota", count: 3 },
  { locName: "Georgia", count: 5 },
  { locName: "Iowa", count: 1 },
  { locName: "Alaska", count: 1 },
  { locName: "Arkansas", count: 1 },
  { locName: "New Jersey", count: 2 },
  { locName: "Utah", count: 1 },
  { locName: "New York", count: 1 },
  { locName: "Illinois", count: 1 },
];
//   let bannedBooksShort = [];
places.forEach((place) => {
  let linkContainer = document.createElement("div");
  let link = document.createElement("h1");
  link.innerHTML = place.locName;
  link.setAttribute("class", "link");
  linkContainer.append(link);
  linkContainer.setAttribute("class", "linkContainer");
  document.querySelector("#page1").append(linkContainer);
});
