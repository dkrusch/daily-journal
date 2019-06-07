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
API.getJournalEntries().then(entries => 
    {
        addToDom.addEntry(entries)
    })