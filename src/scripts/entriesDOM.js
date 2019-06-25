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
  let field = document.getElementById(`edit-${id}`);
  field.scrollIntoView(false);
  window.scrollBy(0, 50);
}

// document.getElementById('myID').scrollIntoView({
//   behavior: 'auto',
//   block: 'center',
//   inline: 'center'
// });