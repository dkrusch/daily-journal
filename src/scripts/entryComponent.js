// const makeJournalEntryComponent = journalEntry => {
//   // Create your own HTML structure for a journal entry
//   console.log("inside make", journalEntry);
//   console.log("concept", journalEntry.concept);
//   return `
//       <h1 class="concept">${journalEntry.concept}</h1>
//       <h3 class="date">${journalEntry.date}</h3>
//       <h2 class="entry">${journalEntry.entry}</h2>
//       <h3 class="mood">${journalEntry.mood}</h3>
//       `;
// };

// const API = {
//   getJournalEntries: function() {
//     return fetch("http://localhost:3000/journalEntries").then(response =>
//       response.json()
//     );
//   }
// };

const renderDom = {
    makeJournalEntryComponent (journalEntry)
    {
        // Create your own HTML structure for a journal entry
    return `
        <fieldset>
        <h1 class="concept">${journalEntry.concept}</h1>
        <h3 class="date">${journalEntry.date}</h3>
        <h2 class="entry">${journalEntry.entry}</h2>
        <h3 class="mood">${journalEntry.mood}</h3>
        <button class="delete" id="delete-${journalEntry.id}">Delete</button>
        </fieldset>
        `;
    }
  };
