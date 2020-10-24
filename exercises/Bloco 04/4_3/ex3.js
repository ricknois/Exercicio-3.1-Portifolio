let num = 5;
let ast = "*";
let j = num;
let esp = " ";

for (let index = 0; index <= num; index++) {
    console.log(esp.repeat(j), ast.repeat(index));
    j --;
}