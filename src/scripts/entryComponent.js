// Takes a journal entry and converts into an html section so that it can be added to the dom
const renderDom = 
{
    makeJournalEntryComponent (journalEntry)
    {
        return `
            <fieldset>
            <h1 class="concept">${journalEntry.concept}</h1>
            <h3 class="date">${journalEntry.date}</h3>
            <h2 class="entry">${journalEntry.entry}</h2>
            <h3 class="mood">${journalEntry.mood}</h3>
            <div class="button-container">
            <button class="delete" id="delete-${journalEntry.id}">Delete</button>
            <button class="edit" id="edit-${journalEntry.id}">Edit</button>
            </div>
            </fieldset>
            `;
    }
};

export {renderDom}