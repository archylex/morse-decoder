const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let key = '';
    let phrase = '';

    for (let i = 0; i < expr.length; i += 2) {
        if (i % 10 === 0 && i !== 0) {
            phrase += key === ' ' ? key : MORSE_TABLE[key];
            key = '';
        }

        switch (expr.substr(i, 2)) {
            case '10':
                key += '.';
                break;
            case '11':
                key += '-';
                break;
            case '**':
                key = ' ';
                i += 8;
                break;
            default:
                break;
        }    
    }
    
    return phrase + MORSE_TABLE[key];
}

module.exports = {
    decode
}