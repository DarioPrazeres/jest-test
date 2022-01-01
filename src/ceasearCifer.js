function swiftString(string, swift) {
    let word = '';
    for(let cont = 0; cont < string.length; cont++){
        var firstWord = string.charCodeAt(cont);
        if(firstWord == 122){
            var cover = 'a';
            var convertZ = cover.charCodeAt(0);
            word += String.fromCharCode(convertZ + swift - 1);
        }else{
            word += String.fromCharCode(firstWord + swift);
        }
    }
    return word;
}
module.exports = swiftString;