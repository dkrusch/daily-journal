let entriesArray = [];
let date = "";
let concept = "";
let content = "";
let mood = "";
let button = document.getElementById("createEntry");

const inputGet = {
  get() {
    date = document.getElementById("journalDate").value;
    concept = document.getElementById("journalConcepts").value;
    content = document.getElementById("journalEntry").value;
    mood = document.getElementById("journalMood").value;
  }
};
const place = document.querySelector(".journalHTML");

const addToDom = {
  addEntry(entries) {
    place.innerHTML = ""
    entries.forEach(entry => {
      place.innerHTML += renderDom.makeJournalEntryComponent(entry);
    });
  }
};


