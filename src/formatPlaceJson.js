("use strict");

import fs from "fs";

let rawdata = fs.readFileSync("../data.json");
let bannedBooks = JSON.parse(rawdata);
bannedBooks.forEach((book) => {
  delete book.BanType;
  delete book.Author2;
  delete book.Illustrator;
  delete book.Translator;
  delete book.District;
  delete book.Date;
  delete book.Origin;
});
bannedBooks = bannedBooks.filter((book, index, self) => {
  const originalPostIndex = self.findIndex((tw) => tw.Title === book.Title);
  return index === originalPostIndex;
});
let places = [
  { locName: "Florida", count: 0 },
  { locName: "Pennsylvania", count: 0 },
  { locName: "Texas", count: 0 },
  { locName: "Virginia", count: 0 },
  { locName: "Michigan", count: 0 },
  { locName: "Tennessee", count: 0 },
  { locName: "Mississippi", count: 0 },
  { locName: "Idaho", count: 0 },
  { locName: "Oklahoma", count: 0 },
  { locName: "Missouri", count: 0 },
  { locName: "Ohio", count: 0 },
  { locName: "Kansas", count: 0 },
  { locName: "Indiana", count: 0 },
  { locName: "Wisconsin", count: 0 },
  { locName: "Vermont", count: 0 },
  { locName: "North Carolina", count: 0 },
  { locName: "South Dakota", count: 0 },
  { locName: "Georgia", count: 0 },
  { locName: "Iowa", count: 0 },
  { locName: "Alaska", count: 0 },
  { locName: "Arkansas", count: 0 },
  { locName: "New Jersey", count: 0 },
  { locName: "Utah", count: 0 },
  { locName: "New York", count: 0 },
  { locName: "Illinois", count: 0 },
];
bannedBooks.forEach((book) => {
  places.forEach((place) => {
    if (book.State == place.locName) {
      place.count++;
    }
  });
});
console.log(places);
// let data = JSON.stringify(bannedBooks);
// fs.writeFileSync("../data/books.json", data);

// let place = JSON.stringify(places);
// fs.writeFileSync("..//data/places.json", place);
