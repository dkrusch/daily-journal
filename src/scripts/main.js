/* THIS FILE CONTAINS MAIN EVENT LISTENERS */
import {inputGet, addToDom, scrollBack, scrollDown, button, radioButton, place} from "./entriesDOM.js"
import {id, characterLimit, badWord, addEvents, resetRadio} from "./eventsAndValidation"
import {API} from "./data.js"

// This function fetches entries from the json file and adds them to the dom 
// and adds the delete and edit event listeners
let displayEntries = () =>
{
  API.getJournalEntries().then(entries => 
    {
        addToDom.addEntry(entries)
        entries.forEach(entry => addEvents(entry))
    })
}

displayEntries()

// This event listener is applied to the button that creates journal entries
// it has validations for a character limit and certain words and characters
// depending on the value of the button it can either post or update a journal entry
button.addEventListener("click", event =>
{
    inputGet.get()

    // Will put an entry instead of posting if true
    if (button.value.includes("Update"))
    {
      if(characterLimit())
      {
        if(badWord())
        {
          // Regular expression for normal characters as well as spaces
          var alphaExp = /^[/\s/ga-zA-Z0-9|:|,|{}|()]+$/;

          // Checks to see if the fields are empty and alerts if so
          if (concept === "" || content === "")
          {
            alert("There's nothing in there.")
          }
          else if(concept.match(alphaExp) && content.match(alphaExp))
          {
            const newEntry = `{
              "concept": "${concept}",
              "date": "${date}",
              "entry": "${content}",
              "mood": "${mood}"
            }`;
            API.editJournalEntry(newEntry, id)
            // Resets button to record once an entry has been updated
            button.value = "Record Journal Entry"

            // Executes function to scroll the window so that the updated element is in view
            scrollBack(id)
          }
          else 
          {
              document.getElementById("journalConcepts").value = ""
              document.getElementById("journalEntry").value = "";
              alert("Those characters are all wrong");
          }
        }
      }
    }
    else
    {
      if(characterLimit())
      {
        if(badWord())
        {
          var alphaExp = /^[/\s/ga-zA-Z0-9|:|,|{}|()]+$/;
          if (concept === "" || content === "")
          {
            alert("There's nothing in there.")
          }
          else if(concept.match(alphaExp) && content.match(alphaExp))
          {
            const newEntry = `{
              "concept": "${concept}",
              "date": "${date}",
              "entry": "${content}",
              "mood": "${mood}"
            }`;
            API.postJournalEntry(newEntry)
          }
          else 
          {
              document.getElementById("journalConcepts").value = ""
              document.getElementById("journalEntry").value = "";
              alert("Those characters are all wrong");
          }

        }
      }
    }
})

// Holds the last filtered mood
let cachedMood = ""

// Event listener for the radio buttons, will filter entries by mood
radioButton.forEach(rb => 
{
  rb.addEventListener("click", event => 
  {

    // Caches the mood so that the same entries won't be fetched repeatedly
    const mood = event.target.value

    // Displays all entries
    if (mood === "All")
    {
      API.getJournalEntries().then(entries => 
      {
        place.innerHTML = ""
        addToDom.addEntry(entries)
        entries.forEach(entry => addEvents(entry))
      })
      scrollDown()
    }

    // Checks cached mood
    else if (mood !== cachedMood)
    {
      cachedMood = mood
      API.getJournalEntries().then(entries => 
      {
        // Set the journal display array to be empty, then create an array of entries based on mood
        // adds those filtered entries to the dom, then adds event listeners to them
        place.innerHTML = ""
        let filteredEntries = entries.filter(entry => entry.mood.includes(mood))
        addToDom.addEntry(filteredEntries)
        filteredEntries.forEach(entry => addEvents(entry))
      })
      scrollDown()
    }
  })
})

// The search input field that searchs for a keyword on enter press
searchInput.addEventListener("keypress", event => 
{
  if (event.charCode === 13) 
  {
    // Prevents the page from reloading
    event.preventDefault()

    // Resets the cached mood so that radio buttons can be reclicked after search
    cachedMood = ""

    // Resets the radio button check status when something is searched
    resetRadio()

    // Make search term upper case so that match will ignore case
    let searchTerm = event.target.value.toUpperCase();
    API.getJournalEntries().then(entries => 
    {
      place.innerHTML = ""
      entries.forEach(entry => 
        {
          // Makes the values of the entries upper case so we can match search term
          if (entry.concept.toUpperCase().match(searchTerm) || entry.entry.toUpperCase().match(searchTerm)) 
          {
            // Add to dom then add events
            addToDom.addEntry(entry)
            addEvents(entry)
          }
        });
        // Scroll down to the entry display area
        scrollDown()
    })
  }
});