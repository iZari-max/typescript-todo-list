#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
async function welcome() {
    console.log(chalk.green(`\tTODO LIST\t`));
}
await welcome();
var list = [];
async function add_task() {
    const answer = await inquirer
        .prompt([{
            "type": "string",
            "name": "task",
            "message": chalk.blue(`Enter the task to add it to the list: `)
        }]);
    if (typeof answer.task === "string") {
        list.push(answer.task);
    }
}
async function show_list() {
    console.log(chalk.greenBright(`\n\tCurrent Tasks In list\n`));
    for (let i = 0; i < list.length; i++) {
        console.log(chalk.blueBright(`${i + 1} -\t${list[i]}\n`));
    }
}
async function restart() {
    do {
        await add_task();
        var again = await inquirer
            .prompt([{
                type: "string",
                name: "re",
                message: chalk.blue(`\nDo you want to add more [Y/N]?`)
            }]);
    } while (again.re === 'Y' || again.re === 'y' || again.re === 'yes' || again.re === 'YES');
    await show_list();
}
restart();
