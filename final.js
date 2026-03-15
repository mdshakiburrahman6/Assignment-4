function totalFine( fare ) {
    if(typeof fare !== "number"){
        return "Invalid";
    }
    if( fare > 0 ){
        const ser20 = (fare * 20) / 100;
        const fine = fare + ser20 + 30;
        return fine;
    }else{
        return "Invalid";
    }
}




function  onlyCharacter( str ) {
    if(typeof str !== "string"){
        return "Invalid";
    }
    const removeSpace = str.split(' ').join('');
    const contToUpperCase = removeSpace.toUpperCase(); 
    return contToUpperCase;
}





function  bestTeam( player1, player2 ) {

    if(typeof player1 !== "object" || typeof player2 !== "object"){
        return "Invalid";
    }else if(Array.isArray(player1) || Array.isArray(player2) ){
        return "Invalid";
    }

    teamName1 = player1.name;
    teamName2 = player2.name;

    const totalFoulAndCard1 = player1.foul + player1.cardY + player1.cardR;
    const totalFoulAndCard2 = player2.foul + player2.cardY + player2.cardR;
    
    if(totalFoulAndCard1 === totalFoulAndCard2){
        return "Tie";
    }else if(totalFoulAndCard1 < totalFoulAndCard2){
        return teamName1;
    }else{
        return teamName2;
    }
}




function  isSame(arr1 , arr2 ) {

    if (Array.isArray(arr1) === false || Array.isArray(arr2) === false) {
        return "Invalid";
    }

    const lengthChecker1 = arr1.length;
    const lengthChecker2 = arr2.length;

    if(lengthChecker1 !== lengthChecker2){
        return false;
    }

    for(let i =0; i < lengthChecker1; i++){
        if(arr1[i] !== arr2[i]){
            return false;
        }
    }

    return true;
}



