const API = {
  // Function that gets the journal entries from the json file, returns an array
  getJournalEntries: function() {
    return fetch("http://localhost:3000/journalEntries").then(response =>
      response.json()
    );
  },
  
  // Function that posts new entries to the json file, then displays all the entries to the dom
  postJournalEntry: function(newEntry) {
    fetch("http://localhost:3000/journalEntries",
        {
          // Replace "url" with your API's URL
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: newEntry
        })
    .then(() => displayEntries())
  },
  
  // Removes an entry with the passed id from the json file, then displays all the entries to the dom
  deleteJournalEntry: function(id) {
    fetch(`http://localhost:3000/journalEntries/${id}`, 
    {
      method: "DELETE",
      headers: {
          "Content-Type": "application/json"
      }
    })
    .then(res => res.json())
    .then(() => displayEntries())
  },

  // Updates an entry with the passed id with the new values, then displays all the entries to the dom
  editJournalEntry: function(newEntry, id)
  {
    fetch(`http://localhost:3000/journalEntries/${id}`, {
    method: "PUT",
    headers: {
        "Content-Type": "application/json"
    },
    body: newEntry
    })
    .then(() => displayEntries())
  }
};
