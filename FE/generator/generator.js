/* eslint-disable */
const inquirer = require('inquirer');
const fs = require('fs');

const QUESTIONS_STRINGS = {
    containerName: 'container-name',
    actions: 'Do you want GET, SUCCESS, and ERROR actions?',
};

const filesWithActions = ['actions.js', 'constants.js', 'reducer.js', 'saga.js', 'service.js', 'index.js'];

const QUESTIONS = [
    {
        name: QUESTIONS_STRINGS.containerName,
        type: 'string',
    },
    {
        name: QUESTIONS_STRINGS.actions,
        type: 'confirm',
    },
];

inquirer.prompt(QUESTIONS).then(answers => {
    const containerName = answers[QUESTIONS_STRINGS.containerName];
    const withActions = answers[QUESTIONS_STRINGS.actions];
    const templatePath = `${__dirname}/templates`;
    const templateFilePathWithActions = `${__dirname}/templatesWithActions`;
    const newFilesPath = `${process.cwd()}/src/containers/${containerName}Container`;
    fs.mkdirSync(newFilesPath);
    createDirectoryContents(templatePath, templateFilePathWithActions, newFilesPath, containerName, withActions);
});

function createDirectoryContents(templatePath, templatePathWithActions, newFilesPath, containerName, withActions) {
    const filesToCreate = fs.readdirSync(templatePath);
    filesToCreate.forEach(file => {
        const templateFilePath = `${templatePath}/${file}`;
        const templateFilePathWithActions = `${templatePathWithActions}/${file}`;

        // get stats about the current file
        const stats = fs.statSync(templateFilePath);

        // if directory
        if (stats.isDirectory()) {
            fs.mkdirSync(`${newFilesPath}/${file}`);
            createDirectoryContents(
                templateFilePath,
                templateFilePathWithActions,
                `${newFilesPath}/${file}`,
                containerName,
                withActions,
            );
        }
        // if file
        if (stats.isFile()) {
            let templateFilePathTemp = templateFilePath;
            if (withActions && filesWithActions.includes(file)) {
                console.log('actions templateFilePathWithActions: ' + templateFilePathWithActions)
                templateFilePathTemp = templateFilePathWithActions;
            }
            console.log('actions path: ' + templateFilePathTemp);
            writeFile(file, containerName, templateFilePathTemp, newFilesPath);
        }
    });
}

/**
 * Write file of template
 * @param file
 * @param containerName
 * @param templateFilePath
 * @param newFilesPath
 */
function writeFile(file, containerName, templateFilePath, newFilesPath) {
    let filename = file;
    if (file === 'CONT_NAME.js') {
        filename = `${containerName}.js`;
    }
    const contents = fs.readFileSync(templateFilePath, 'utf8');

    const writePath = `${newFilesPath}/${filename}`;
    let replacedContents = contents.replace(
        new RegExp(/(CONT_NAME)+/g),
        containerName,
    );
    replacedContents = replacedContents.replace(
        new RegExp(/(CONT_CONTAINER_NAME)+/g),
        `${toUpperCaseFirstChar(containerName)}Container`,
    );
    replacedContents = replacedContents.replace(
        new RegExp(/(CONT_CAMEL_NAME)+/g),
        `${toUpperCaseFirstChar(containerName)}`,
    );
    replacedContents = replacedContents.replace(
        new RegExp(/(CONT_CAPITAL_NAME)+/g),
        `${containerName.toUpperCase()}`,
    );
    fs.writeFileSync(writePath, replacedContents, 'utf8');
}

/**
 * Get upper cased first character word
 * @param word
 */
const toUpperCaseFirstChar = word => {
    if (word && typeof word === 'string' && word.length > 0) {
        return `${word[0].toUpperCase()}${word.slice(1, word.length)}`;
    }
    return word;
};
