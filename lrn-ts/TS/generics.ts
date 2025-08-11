
// ANSI escape codes for colors and cursor positioning
const ANSI_CLEAR = '\x1b[2J'; // Clear screen
const ANSI_RESET = '\x1b[0m'; // Reset colors
const ANSI_FG_WHITE = '\x1b[37m'; // White foreground
const ANSI_BG_BLUE = '\x1b[44m'; // Blue background
const BLOCK = '█'; // Unicode full block character
// console.log('█')
// console.log('\x1b[31m █')

const redText = "\x1b[36m";
const boldText = "\x1b[1m";
const reset = "\x1b[0m";

// process.stdout.write(`${redText}This text is red!${reset}\n`);
// process.stdout.write(`${boldText}This text is bold!${reset}\n`);
// process.stdout.write(`${redText}${boldText}This text is red and bold!${reset}\n`);
// process.stdout.write('\x1b[2J');
// process.stdout.write('\x1b[0;0H');
// process.stdout.write('A\n');
// process.stdout.write('\x1b[0m');
// process.stdout.write('\x1b[5;10H');
// process.stdout.write('ABC');
// for (let col = 10; col < 15; col++) {
//     process.stdout.write(`\x1b[5;${col}H█`);
// }
process.stdout.write(ANSI_CLEAR)
process.stdout.write('\x1b[10;30H')
process.stdout.write('\x1b[31m █')
process.stdout.write('\x1b[30;0H')







