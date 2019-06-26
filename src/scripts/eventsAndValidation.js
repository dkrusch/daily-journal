// Global id variable to be passed into fetch link
let id = 0;

// Holds the last filtered mood
let cachedMood = "";

// Example bad words
let badWords = RegExp('[mf]arnge')

// Adds click event listeners for the delete and edit buttons
function addEvents(entry)
{
    document.querySelector(`#delete-${entry.id}`).addEventListener("click", () =>
    {
      API.deleteJournalEntry(entry.id)
    })
    document.querySelector(`#edit-${entry.id}`).addEventListener("click", () =>
    {
      // Scrolls to the top of the page where the inputs are
      topFunction()

      // Changes the value of the inputs to those of the entry being edited
      changeInputs.edit(entry)
      id = entry.id
    })
}

// Function that checks if the concept entered is below 21 characters
function characterLimit() 
{
  var characters = document.getElementById("journalConcepts").value;
  if (characters.length > 20)
  {
      alert("That concept is too long, make it more abstract");
      return false
  }
  else 
  {
    return true
  }
}

// Checks if the concept or content contains some bad words
function badWord()
{
  if(badWords.test(concept) || badWords.test(content))
  {
    alert("Thats a bad word, you fiend");
    return false
  }
  return true
}