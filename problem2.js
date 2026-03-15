function  onlyCharacter( str ) {
    if(typeof str !== "string"){
        return "Invalid";
    }
    const removeSpace = str.split(' ').join('');
    const contToUpperCase = removeSpace.toUpperCase(); 
    return contToUpperCase;
}

const onlyCharacter1 = onlyCharacter(true);
console.log(onlyCharacter1);
