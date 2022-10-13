const fs = require("fs");
const inquirer = require("inquirer");


inquirer
    .prompt([
        {
            type: "input",
            message: "Name?",
            name: "name",
        },
        {
            type: "input",
            message: "Location?",
            name: "location",
        },
        {
            type: "input",
            message: "bio?",
            name: "bio",
        },
        {
            type: "input",
            message: "LinkenIn URL?",
            name: "linkedIn",
        },
        {
            type: "input",
            message: "GitHub URL?",
            name: "GitHub",
        },
    ])
    .then((response) => {
        // const htmlText = formatHTML(response)
        fs.writeFile("index.html", formatHTML(response),
        (err) => err ? console.log(err) : console.log('successfully generated html!'))}
    )


function formatHTML(response) {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Portfolio Generator</title>
    </head>
    <body>
        <h1> My portfolio</h1>
        <main>
            <section>
            <span>${response.name}</span>
            <span>${response.location}</span>
            <span>${response.bio}</span>
            <span>${response.linkedIn}</span>
            <span>${response.GitHub}</span>
            </section>
        </main>
    </body>
    </html>`
}