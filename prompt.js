const { spawn, execSync } = require('child_process');
const exec = commands => {
    execSync(commands, { stdio: 'inherit', shell: true });
};
const spawnProcess = commands => {
    spawn(commands, { stdio: 'inherit', shell: true });
};
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter publish message: ', (input) => {
    exec(`PROMPT_ENV=${input}`);
    rl.close();
});
