function add(num1, num2){
    num2 =num2 || 0;
    return num1+num2;
}

const total = add(15, 34);
console.log(total);