//Your code above ^^^
function getLetItBe(times){
    var result = [];
    for(var i = 0; i<times;i++){
        result.push('let it be');
    }

    return result.join(', ');
}
function sing(){
    var result = '';
    result += getLetItBe(4);
    result += ', whisper words of wisdom, ';
    result += getLetItBe(5);
    result += ', there will be an answer, ';
    result += getLetItBe(1);

    return result;
}
console.log(sing());