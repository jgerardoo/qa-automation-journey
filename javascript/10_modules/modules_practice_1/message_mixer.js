/*
====================================================================
Learn Intermediate JavaScript - Codecademy | Lesson 2: Modules
Practice exercise from the course lesson concepts.
Project practice 1: Message Mixer
    Concepts: Modules in JavaScript (Implementing CommonJS Modules)
====================================================================

Message Mixer Inc. offers a message-encryption service that transforms input text, using various
ciphers, and displays the encrypted message to the console.

In this project, you will help Message Mixer Inc. extract and isolate its encryption functions into
a module, called encryptors.js, and then refactor message-mixer.js to use this module’s functions.
*/

// Import the functions from encryptors.js
const encryptors = require("./encryptors.js")

const caesarCipher = encryptors.caesarCipher;
const symbolCipher = encryptors.symbolCipher;
const reverseCipher = encryptors.reverseCipher;


// User Input / Output Logic

const encryptionMethod = getEncryptionMethod();
process.stdin.on("data", (userInput) => {
    displayEncryptedMessage(encryptionMethod, userInput);
});

// Helper function for determining which cipher method the user chose when they ran the program
function getEncryptionMethod() {
    let encryptionMethod;
  
    const encryptionType = process.argv[2];  
    if (encryptionType === "symbol") {
        encryptionMethod = symbolCipher;
    } else if (encryptionType === "reverse") {
        encryptionMethod = reverseCipher;
    } else if (encryptionType === "caesar") {
        let amount = Number(process.argv[3]);
        if (Number.isNaN(amount)) {
            process.stdout.write("Try again with a valid amount argument. \n")
            process.exit();  
        }
        encryptionMethod = (str) => caesarCipher(str, amount);
    } 
    else {
        process.stdout.write("Try again with a valid encryption type. \n")
        process.exit();
    }

    process.stdout.write("Enter the message you would like to encrypt...\n> ");
    return encryptionMethod;
};

// Helper function for displaying the encrypted message to the user
function displayEncryptedMessage(encryptionMethod, userInput) {
    let str = userInput.toString().trim();    
    let output = encryptionMethod(str);
    process.stdout.write("\nHere is your encrypted message:\n> ${output}\n")
    process.exit();
};