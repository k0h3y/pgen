var generator = require('generate-password');

var password = generator.generate({
    length: 16,
    numbers: true,
    symbols: true,
    lowercase: true,
    uppercase: true,
});

console.log(password);
