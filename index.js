// Homework_25

// Task №1 Word Boundaries

const wordToFind = 'word';
const regex = new RegExp(`\\b${wordToFind}\\b`, 'i');
const isWordInString = (inputString) => regex.test(inputString);

const inputString1 = 'This is a test string with the word example.';
const inputString2 = 'The word Word is also here.';
const inputString3 = 'This string does not contain the required word.';

console.log("Task №1")
console.log(isWordInString(inputString1));
console.log(isWordInString(inputString2));
console.log(isWordInString(inputString3));

// Task №2 Capitalizing I

const replaceIsWithI = (inputStr) => {
    const regex = /\bi\b/gi;
    return inputStr.replace(regex, 'I');
}

const inputStrT2 = "i'm replacing it. am i not?";
const result = replaceIsWithI(inputStrT2);
console.log(`Task №2 ${result}`);


// Task №3 UPPERCASE CONSONANTS

const countConsonants = (inputStr) => {
    const regex = /[^AEIOUY\d_ \W]/g;
    const matches = inputStr.match(regex);
    return matches ? matches.length : 0;
}

const inputStrT3 = "ABcDeFO!";
const countT3 = countConsonants(inputStrT3);
console.log(`Task №3 ${countT3}`);

// Task №4 Retrieve Numbers

const countInt = (inputStr) => {
    const regex = /\b\d+\b/g;
    const matches = inputStr.match(regex);
    return matches ? matches.length : 0;
}

const inputStrT4 = "The numbers are: 1, 2, 65, and 2579.";
const countT4 = countInt(inputStrT4);
console.log(`Task №4 ${countT4}`);

// Task №5 WhiteSpace

const findMultipleSpaces = (inputStr) => {
    const regex = / {4,}/g;
    const matches = inputStr.match(regex);
    return matches ? matches : [];
}

const inputStrT5 = "Друга ночі  я пишу  тести  на перевірку    пробілів запрацюй тест      будь ласка.";
const resultT5 = findMultipleSpaces(inputStrT5);
console.log("Test №5")
console.log(resultT5);