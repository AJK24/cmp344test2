//Andrew Klump
//CMP344
//Javascript 101
//Problem 1

//New array
var arr = [];

//for loop to fill the array of 20
for(var i = 0; i < 20; i++){
	//pushes a random number between 20 and 200 onto the array
	arr.push(Math.floor(Math.random() * (200 - 20) + 20));
	print(arr[i]); //prints the value of the index

}
