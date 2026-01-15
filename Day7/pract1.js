import inquirer from 'inquirer';
import chalk from 'chalk';
import figlet from 'figlet';
import { createSpinner } from 'nanospinner';


let playerName = "Guest";
let score = 0;


const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));

async function askName() {
    const ans = await inquirer.prompt({
        name: "player_name",
        type: "input",
        message: "Enter your name:",
        default() {
            return "Guest";
        },
    });

    playerName = ans.player_name;
}

async function askQuestion() {
    const ans = await inquirer.prompt({
        name: "choice", 
        type: "list",
        message: "Choose your option:",
        choices: ["option1", "option2", "option3"],    
    });

  
    return handleAnswer(ans.choice === 'option1');
}

async function handleAnswer(isCorrect) {
    const sp = createSpinner("Checking answer...").start();
    await sleep(1000);

    if (isCorrect) {
        sp.success({ text: `Nice job ${playerName}! That is correct.` });
        score += 1;
    } else {
        sp.error({ text: `Wrong answer. Game over, ${playerName}!` });
        process.exit(1); // Properly exit the Node process
    }
}

function winner() {
    console.clear();
    const msg = `Congratulations ${playerName}!\nScore: ${score}`;

    console.log(
        chalk.green(
            figlet.textSync(msg, {
                horizontalLayout: 'default',
                verticalLayout: 'default',
            })
        )
    ); 
}


async function runGame() {
    await askName();
    await askQuestion();
   
    winner();
}

runGame();