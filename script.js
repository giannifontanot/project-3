const countBody = document.getElementById('count-body');
const addRowButton = document.getElementById('add-row');
const clearRowsButton = document.getElementById('clear-rows');

const columns = [
  'count',
  'date',
  'time',
  'counter-1',
  'counter-2',
  'refills',
  'additional-info',
];

function createInputCell(name) {
  const td = document.createElement('td');
  const input = document.createElement('input');
  input.type = 'text';
  input.name = name;
  td.appendChild(input);
  return td;
}

function addRow() {
  const row = document.createElement('tr');

  columns.forEach((column) => {
    row.appendChild(createInputCell(column));
  });

  countBody.appendChild(row);
}

function clearEntries() {
  const inputs = countBody.querySelectorAll('input');
  inputs.forEach((input) => {
    input.value = '';
  });
}

addRowButton.addEventListener('click', addRow);
clearRowsButton.addEventListener('click', clearEntries);

for (let i = 0; i < 20; i += 1) {
  addRow();
}
