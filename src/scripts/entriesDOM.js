let entriesArray = [];
let date = "";
let concept = "";
let content = "";
let mood = "";
const button = document.getElementById("createEntry");
const radioButton = document.getElementsByName("Mood");
const searchInput = document.querySelector("#searchInput");

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
    // place.innerHTML = ""
    console.log(entries)
    let container = document.createElement("div")
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

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function scrollBack(id) 
{
  console.log(id)
  document.getElementById(`edit-${id}`).scrollIntoView({
    behavior: 'auto',
    block: 'center',
    inline: 'center'
  });
}

function scrollDown() 
{
  console.log("hello")
  document.querySelector(`.journalHTML`).scrollIntoView({
    behavior: 'auto',
    block: 'center',
    inline: 'center'
  });
}