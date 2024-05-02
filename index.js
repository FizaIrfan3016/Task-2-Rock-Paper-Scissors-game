#! /usr/bin/env node
// All the imported files
import inquirer from "inquirer";
import chalk from "chalk";
import chalkanimation from "chalk-animation";
// using chalk animation set timeout
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 3000);
    });
};
async function wellcome() {
    let neonTitle = chalkanimation.neon(`\n Lets start the game \n`); // Animation start
    await sleep();
    neonTitle.stop();
}
await wellcome();
// using async with function so await work in function method 
async function again() {
    // now write a selection tool 
    const compare = await inquirer.prompt([
        {
            name: "Choice1",
            type: "list",
            message: "Select your 1st weapon!",
            choices: [
                'Rock',
                "Paper",
                'Scissors'
            ]
        },
        {
            name: "Choice2",
            type: "list",
            message: "Select your 2nd weapon!",
            choices: [
                'Rock',
                'Paper',
                'Scissors'
            ]
        }
    ]);
    // Now create a nested if and else-if chain for working functions
    if (compare.Choice1 === compare.Choice2) {
        console.log(chalk.redBright("tie"));
    }
    else if (compare.Choice1 === "Rock") {
        if (compare.Choice2 === "Paper") {
            console.log(chalk.cyanBright("Paper wins"));
        }
        else {
            console.log(chalk.cyanBright("Scissors wins"));
        }
    }
    else if (compare.Choice1 === 'Paper') {
        if (compare.Choice2 === 'Scissors') {
            console.log(chalk.blueBright('Scissors wins'));
        }
        else {
            console.log(chalk.blueBright('Rock wins'));
        }
    }
    else if (compare.Choice1 === 'Scissors') {
        if (compare.Choice2 === 'Rock') {
            console.log(chalk.greenBright('Rock wins'));
        }
        else {
            console.log(chalk.greenBright('Paper wins'));
        }
    }
    else if (compare.Choice1 === 'Rock') {
        if (compare.Choice2 === 'Scissors') {
            console.log(chalk.red('Rock wins'));
        }
        else {
            console.log(chalk.red('Paper wins'));
        }
    }
    else if (compare.Choice1 === 'Scissors') {
        if (compare.Choice2 === 'Paper') {
            console.log(chalk.yellow('Paper wins'));
        }
        else {
            console.log(chalk.yellow('Rock wins'));
        }
    }
    else if (compare.Choice1 === 'Paper') {
        if (compare.Choice2 === 'Rock') {
            console.log(chalk.yellow('Paper wins'));
        }
        else {
            console.log(chalk.yellow('Scissors wins'));
        }
    }
    else {
        console.log(chalk.red('GAME OVER!'));
    }
}
// Now create a do and while function for again running the game /
do {
    await again();
    var againstart = await inquirer
        .prompt({
        type: "input",
        name: "restart",
        message: "Do you want to continue? Press y or n: "
    });
    console.log("\n");
} while (againstart.restart == 'y' || againstart.restart == 'Y' || againstart.restart == 'yes' || againstart.restart == 'YES');
