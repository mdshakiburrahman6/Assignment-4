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


const sameSame = isSame([1, 2, 4] , [1, 2, 3]);
console.log(sameSame);