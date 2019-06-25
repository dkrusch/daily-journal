let entriesArray = [];
let date = "";
let concept = "";
let content = "";
let mood = "";
let button = document.getElementById("createEntry");
let radioButton = document.getElementsByName("Mood")

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
    let container = document.createElement("div")
    entries.forEach(entry => {
      container.innerHTML += renderDom.makeJournalEntryComponent(entry);
    });
    place.appendChild(container)
  }
};


