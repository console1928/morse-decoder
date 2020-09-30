const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let exprSymbols = [];

    for (let i = 0; i < expr.length; i += 10) {
        exprSymbols.push(expr.slice(i, i + 10));
    }

    return exprSymbols.reduce((acc, el) => {
        if (el === "**********") {
            return acc + " ";
        } else {
            let code = "";
            for (let j = 10; j > 0; j -= 2) {
                if (el.slice(j - 2, j) === "10") {
                    code = "." + code;
                } else if (el.slice(j - 2, j) === "11") {
                    code = "-" + code;
                }
            }
            return acc + MORSE_TABLE[code];
        }
    }, "");
}

module.exports = {
    decode
}