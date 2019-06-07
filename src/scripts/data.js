// fetch("http://localhost:3000/journalEntries") // Fetch from the API
//   .then(entries => entries.json()) // Parse as JSON
//   .then(parsedEntries => {
//     parsedEntries.forEach(entry => {
//       place.innerHTML += makeJournalEntryComponent(entry);
//     });
//   });

const API = {
  getJournalEntries: function() {
    return fetch("http://localhost:3000/journalEntries").then(response =>
      response.json()
    );
  }
};
