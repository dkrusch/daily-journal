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

/*
    Main application logic that uses the functions and objects
    defined in the other JavaScript files.

    Change the fake variable names below to what they should be
    to get the data and display it.
*/
let id = 0;
var badWords = RegExp('[mf]arnge')

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
    if(characterLimit())
    {
      if(badWord())
      {
        var alphaExp = /^[a-zA-Z|:|,|{}|()]+$/;
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
})

radioButton.forEach(rb => 
{
  rb.addEventListener("click", event => 
  {
    const mood = event.target.value
    API.getJournalEntries().then(entries => 
    {
      addToDom.addEntry(entries.filter(entry => entry.mood.includes(mood)))
    })
    console.log(mood)
  })
})

API.getJournalEntries().then(entries => 
{
    console.log(entries)
    addToDom.addEntry(entries)
})