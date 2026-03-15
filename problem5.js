function  resultReport( marks ) {

    if (Array.isArray(marks) === false) {
        return "Invalid";
    }
    if(marks.length === 0){
        return "{ finalScore: 0 , pass: 0, fail: 0 }";
    }

    let total = 0;
    let pass = 0;
    let fail = 0;

    for(const mark of marks){
        total = total + mark;
        if(mark >=40 && mark <=100){
            pass++;
        }else if(mark < 40){
            fail++;
        }
    }
    const average = total / marks.length
    const finalScore = Math.round(average);

    const finalReport = {finalScore: finalScore, pass: pass, fail: fail};

    return finalReport;
    
}

const result = resultReport([]);
console.log(result);
