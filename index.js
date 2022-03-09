function reverseNum(num){
    let str = ""
    str += num
    let newStr = ""
    for (let i = str.length - 1; i >= 0 ; i--){
        newStr += str[i]
    }
    return parseInt(newStr)
}

function dataType(data){
    return typeof(data)
}
function question(){
    return "i am "  
}
function greet(func){
    return func() + " good."
}
function returnName(){
    return returnName.name
}