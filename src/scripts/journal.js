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


button.addEventListener("click", event =>
{
    inputGet.get()
    if (button.value.includes("Update"))
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
            API.editJournalEntry(newEntry, id)
            button.value = "Record Journal Entry"
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

radioButton.forEach(rb => 
{
  rb.addEventListener("click", event => 
  {
    const mood = event.target.value
    if (mood === "All")
    {
      API.getJournalEntries().then(entries => 
      {
          addToDom.addEntry(entries)
          entries.forEach(entry => addEvents(entry))
      })
    }
    else if (mood !== cachedMood)
    {
      cachedMood = mood
      API.getJournalEntries().then(entries => 
      {
        addToDom.addEntry(entries.filter(entry => entry.mood.includes(mood)))
        entries.filter(entry => entry.mood.includes(mood)).forEach(entry => addEvents(entry))
      })
      console.log(mood)
    }
  })
})

let displayEntries = () =>
{
  API.getJournalEntries().then(entries => 
    {
        addToDom.addEntry(entries)
        entries.forEach(entry => addEvents(entry))
    })
}

displayEntries()