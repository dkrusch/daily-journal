let entriesArray = [];
let date = document.getElementById("journalDate").value;
let concept = document.getElementById("journalConcepts").value;
let content = document.getElementById("journalEntry").value;
let mood = document.getElementById("journalMood").value;

const place = document.querySelector(".journalHTML");

/*
    Define the keys and value for a JavaScript object that
    represents a journal entry about what you learned today
*/
// const journalEntries = [
//   {
//     concept: "Array methods",
//     date: "07/24/2018",
//     entry: "We learned about array methods, but only forEach made sense",
//     mood: "Ok"
//   },
//   {
//     concept: "Blah Blah",
//     date: "07/24/2018",
//     entry: "We leaBLah Blahy methods, but only forEach made sense",
//     mood: "Ok"
//   }
// ];

const makeJournalEntryComponent = journalEntry => {
  // Create your own HTML structure for a journal entry
  console.log("inside make", journalEntry);
  console.log("concept", journalEntry.concept);
  return `
    <h1 class="concept">${journalEntry.concept}</h1>
    <h3 class="date">${journalEntry.date}</h3>
    <h2 class="entry">${journalEntry.entry}</h2>
    <h3 class="mood">${journalEntry.mood}</h3>
    `;
};

/*
    Purpose: To render all journal entries to the DOM

    Arguments: entries (array of objects)
*/
// const renderJournalEntries = entries => {
//   for (i = 0; i < entries.length; i++) {
//     let entry = makeJournalEntryComponent(journalEntries[i]);
//     place.innerHTML += entry;
//   }
// };

// Invoke the render function
// renderJournalEntries(journalEntries);

// console.log(journalEntries[0]);
// console.log(place)
// console.log(makeJournalEntryComponent(journalEntries[0]))
// place[0].innerHTML += makeJournalEntryComponent(journalEntries[0]);

fetch("http://localhost:3000/journalEntries") // Fetch from the API
  .then(entries => entries.json()) // Parse as JSON
  .then(parsedEntries => 
  {
    parsedEntries.forEach(entry => 
    {
        place.innerHTML += makeJournalEntryComponent(entry);
    })
  });