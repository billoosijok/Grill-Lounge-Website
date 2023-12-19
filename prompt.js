const readline = require('readline');
const shell = require('shelljs');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter publish message: ', (input) => {
    shell.exec(`export PROMPT_ENV=${input}`);
    rl.close();
});
