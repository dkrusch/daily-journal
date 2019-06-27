import {renderDom} from "./entryComponent.js"

// Defines some initial variables that will be changed or used in other functions
let entriesArray = [];
let date = "";
let concept = "";
let content = "";
let mood = "";
const button = document.getElementById("createEntry");
const radioButton = document.getElementsByName("Mood");
const searchInput = document.querySelector("#searchInput");
const place = document.querySelector(".journalHTML");

// Gets the values from the inputs when the 'Record Journal Entry' button is clicked
const inputGet = {
  get() {
    date = document.getElementById("journalDate").value;
    concept = document.getElementById("journalConcepts").value;
    content = document.getElementById("journalEntry").value;
    mood = document.getElementById("journalMood").value;
  }
};

// Function that takes an array or object and adds it to the dom
const addToDom = {
  addEntry(entries) {
    // Makes an element that we will add the converted entry to
    // that element will then be appended to the area where we display the entries
    let container = document.createElement("div")

    // These if/else statements check whether the object is an array of multiple items, one item, or an object
    // then it runs functions that will makes sure its passing an object to makeJouranlEntryComponent
    if(entries.length > 1)
    {
      entries.forEach(entry => {
        container.innerHTML += renderDom.makeJournalEntryComponent(entry);
      });
    }
    else if (entries[0])
    {
      container.innerHTML += renderDom.makeJournalEntryComponent(entries[0]);
    }
    else
    {
      container.innerHTML += renderDom.makeJournalEntryComponent(entries);
    }
    place.appendChild(container)
  }
};

// Sets the input fields at the top to have the same values as the entry we are editing
// also changes the record journal entry button to update journal entry (THIS IS NECESSARY)
const changeInputs = 
{
  edit(entry) 
  {
    document.getElementById("journalDate").value = entry.date
    document.getElementById("journalConcepts").value = entry.concept
    document.getElementById("journalEntry").value = entry.entry
    document.getElementById("journalMood").value = entry.mood
    button.value = "Update Journal Entry"
  }
}

// Scrolls to the top, this is called whenever we click an edit button
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// Scroll back centers the edited entry on the screen when we click the update button
function scrollBack(id) 
{
  console.log(id)
  document.getElementById(`edit-${id}`).scrollIntoView({
    behavior: "auto",
    block: "center",
    inline: "center"
  });
}

// When we hit enter in the search field this function will run and center the field that displays entries
function scrollDown() 
{
  console.log("hello")
  document.querySelector(`.journalHTML`).scrollIntoView({
    behavior: "auto",
    block: "center",
    inline: "center"
  });
}

export {inputGet, addToDom, changeInputs, topFunction, scrollBack, scrollDown, button, radioButton, place}