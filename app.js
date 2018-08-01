console.log("Starting app.js");

const fs = require("fs");
const _ = require('lodash');
const yargs = require('yargs');

const notes = require("./notes.js");
const argv = yargs.argv
var command = process.argv[2];
console.log('Command: ', command);
console.log('Yargs: ',argv);

if (command === 'add'){
  let note = notes.addNote(argv.title,argv.body);
  let message =  note ? `Note created\n--\nTitle: ${note.title}\nBody: ${note.body}` : 'Note with same title already exists';
  console.log(message);

}

else if (command === 'list'){
notes.getAll();
}
else if (command === 'read') {
  notes.getNote(argv.title);
}
else if (command === 'remove') {
let noteRemoved = notes.removeNote(argv.title);
let message = noteRemoved ? 'Note was removed' : 'Note not found'
console.log(message);
}
else {
  console.log("Command not recognized.");
}
