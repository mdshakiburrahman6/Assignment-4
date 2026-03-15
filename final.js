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

