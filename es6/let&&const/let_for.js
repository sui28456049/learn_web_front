for (var i = 0; i < 10; i++) 
{
	console.log(i)
}


console.log(i)  //  污染全局变量,for 循环用 let,，声明的变量仅在块级作用域内有效

for (let j = 0; j < 10; j++) 
{
	console.log(j)
}

console.log(j)  // j is not defined