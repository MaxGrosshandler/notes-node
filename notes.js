console.log("Starting notes.js");

let addNote = (title, body) => {
console.log('Adding note', title, body);
};

let getAll = () => {
  console.log('Getting all notes');
}
module.exports = {
  addNote,
  getAll
}
