function analyzeArray(array){
    let length = array.length;
    let max = array[0];
    let min = array[0];
    let average = 0;
    for(let cont = 0; cont < array.length; cont++){
        if(array[cont] > max){
            max = array[cont];
        }
        if(array[cont] < min){
            min = array[cont];
        }
    }
    if(array.length % 2 == 0){
        average = (array.length/2) + 1;
    }else {
        average = (array.length/2).toFixed();
    }
    return {length, max, min, average};
}
//average, min, max,
module.exports = analyzeArray;