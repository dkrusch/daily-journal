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

searchInput.addEventListener("keypress", event => 
{
  if (event.charCode === 13) 
  {
    event.preventDefault()
    let searchTerm = event.target.value.toUpperCase();
    API.getJournalEntries().then(entries => 
    {
      place.innerHTML = ""
      entries.forEach(entry => 
        {
          if (entry.concept.toUpperCase().match(searchTerm) || entry.entry.toUpperCase().match(searchTerm)) 
          {
            console.log(entry.concept.toUpperCase())
            console.log(entry.entry.toUpperCase())
            console.log(searchTerm)
            addToDom.addEntry(entry)
            addEvents(entry)
          }
        });
        scrollDown()
    })
  }
});

let displayEntries = () =>
{
  API.getJournalEntries().then(entries => 
    {
        addToDom.addEntry(entries)
        entries.forEach(entry => addEvents(entry))
    })
}

displayEntries()