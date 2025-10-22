let new1="javascript"
let count=0
let count1=0
for(let i=0;i<new1.length;i++){
    if(new1.charAt(i)=='a'){
        count++
    }
    else if(new1.charAt(i)=='s'){
        count1++
}
}
console.log(`Count of 'a' is: ${count} and Count of 's' is: ${count1}`)