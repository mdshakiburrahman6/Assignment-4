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

const bestDoll = bestTeam(["Ger"], { name: "Germany", foul: 12, cardY: 0, cardR: 0 });
console.log(bestDoll);
