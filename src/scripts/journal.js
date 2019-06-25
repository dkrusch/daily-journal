let displayEntries = () =>
{
  API.getJournalEntries().then(entries => 
    {
        addToDom.addEntry(entries)
        entries.forEach(entry => addEvents(entry))
    })
}

displayEntries()

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
            scrollBack(id)
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