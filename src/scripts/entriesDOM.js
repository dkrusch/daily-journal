let entriesArray = [];
let date = document.getElementById("journalDate").value;
let concept = document.getElementById("journalConcepts").value;
let content = document.getElementById("journalEntry").value;
let mood = document.getElementById("journalMood").value;

const place = document.querySelector(".journalHTML");

const addToDom =
{
    addEntry (entries)
    {
        entries.forEach(entry => 
        {
            place.innerHTML += renderDom.makeJournalEntryComponent(entry);
        });
    }
}