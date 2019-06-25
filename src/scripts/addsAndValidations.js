let id = 0;
let cachedMood = "";
var badWords = RegExp('[mf]arnge')

function addEvents(entry)
{
    document.querySelector(`#delete-${entry.id}`).addEventListener("click", () =>
    {
      API.deleteJournalEntry(entry.id)
    })
    document.querySelector(`#edit-${entry.id}`).addEventListener("click", () =>
    {
      topFunction()
      changeInputs.edit(entry)
      id = entry.id
    })
}

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

function badWord()
{
  if(badWords.test(concept) || badWords.test(content))
  {
    alert("Thats a bad word, you fiend");
    return false
  }
  return true
}
