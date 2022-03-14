function returnMin(arr){
    let smallest_num = arr[0];
    for (let i = 0; i < arr.length; i++){
        if (arr[i] < smallest_num){
            smallest_num = arr[i];
        }
    }
    return smallest_num;

}
function returnMax(arr){
    let biggest_num = arr[0];
    for (let i = 0; i < arr.length; i++){
        if (arr[i] > biggest_num){
            biggest_num = arr[i];
        }
    }
    return smallest_num;

}
function primeChecker(num){
    if (num <= 1){
        return "not a prime a prime number"
    }else{
        for(let i = 2; i < num; i++){
            if(number % i == 0){
                return "not a prime number too";
            }
        }
        return "its a prime number";
    
        }    
}
function primeNum(arr){
    for(let i = 0; i < arr.length; i++){
        checkedNum = arr[i];
        if (primeChecker(checkedNum) == "its a prime number" ){
            console.log(checkedNum);
        }

    }
}

function evenOddChecker(arr){
    for(let i = 0; i < arr.length; i++){
        checkedNumb = arr[i];
        if (checkedNumb % 2 == 0){
            console.log(checkedNumb + " is an even number");
        }
        else if (checkedNumb % 2 == 1) {
            console.log(checkedNumb + " is an odd number");
            
        } else {
            console.log(checkedNumb + " is not a number");
            
        }

    }
}