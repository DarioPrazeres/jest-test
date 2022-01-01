function reverseString(string) {
    let word = ''; 
    for(let cont = string.length - 1;   cont >= 0; cont--){
        word += string.charAt(cont)
    }
    return word;
}

module.exports = reverseString;