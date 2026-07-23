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

// Declare and export the encryption functions
const caesarCipher = (str, amount = 0) => {
    if (amount < 0) {
        return caesarCipher(str, amount + 26);
    }
    let output = "";
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (char.match(/[a-z]/i)) {
            let code = str.charCodeAt(i);
            if (code >= 65 && code <= 90) {
                char = String.fromCharCode(((code - 65 + amount) % 26) + 65);
            } else if (code >= 97 && code <= 122) {
                char = String.fromCharCode(((code - 97 + amount) % 26) + 97);
            }
        }
        output += char;
    }
    return output;
};

const symbolCipher = (str) => {
    const symbols = {
        "i": "!",
        "!": "i",
        "l": "1",
        "1": "l",
        "s": "$",
        "$": "s",
        "o": "0",
        "0": "o",
        "a": "@",
        "@": "a",
        "e": "3",
        "3": "e",
        "b": "6",
        "6": "b"
    }

    let output = "";
    for (let i = 0; i < str.length; i++) {
        let char = str.toLowerCase()[i];

        if (symbols[char]) {
            output += symbols[char]
        } else {
            output += char;
        }
    }
    return output;
};

const reverseCipher = (sentence) => {
    let words = sentence.split(" ");
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].split("").reverse().join("");
    }
    return words.join(" ");
};

module.exports.caesarCipher = caesarCipher;
module.exports.symbolCipher = symbolCipher;
module.exports.reverseCipher = reverseCipher;