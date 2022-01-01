function firstLetter(string) {
    let word = string.charAt(0).toUpperCase();
    for(let cont = 1;   cont < string.length; cont++){
        word += string.charAt(cont)
    }
    return word;
}

module.exports = firstLetter;