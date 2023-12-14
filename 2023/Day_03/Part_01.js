const fs = require('fs');

// Part 1
fs.readFile('./exemple.txt', 'utf-8', (err, data) => {
    const input = data
    console.log(input);
});