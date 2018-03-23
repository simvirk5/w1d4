const printCool = (name) => {
	console.log(`${name} is cool`)
}
printCool("Captain Reynolds")

//////////

const calculateCube = (num) => {
	console.log(num*num*num)
}
calculateCube(5)

/////

const isAVowel = (x) => {
  
	if(x === "a" || x === "e" || x === "i" || x === "o" || x === "u") {
		
		console.log("true");
	
	}
	
	else {
		
		console.log("false");
	}
}
	console.log(isAVowel('a'));

/////

const getTwoLengths = (string1, string2) => {
const newString = string1.split("").length
const newStringTwo = string2.split("").length

console.log(newString,newStringTwo);
}

getTwoLengths("you","me")

///////

const newArray = [];

const getMultipleLengths = (array) => {
for (i of array) {
  newArray.push(i.length);
}
console.log(newArray);
  
}
getMultipleLengths("hello", "what", "is", "up", "dude")

////////

const maxOfThree = (x, y, z) => {
	const highestNumber = Math.max(x, y, z);
console.log(highestNumber);
}

maxOfThree(6, 9, 10);

///////


const printLongestWord = (array) => {
  var max = 0;
  var longestWord;
  for(var i = 0; i<=array.length-1; i++) {
    if (array[i].length > max) {
     
      max=array[i].length
      console.log('max', max)
      
      longestWord = array[i]
      console.log(longestWord)
    }
  }
  
  return longestWord
}
///////

const transmogrify = (num1, num2, num3) => {
	var transmogrifiedNum = Math.pow((num1*num2),num3);
	console.log(transmogrifiedNum);

}
transmogrify(2, 4, 6)

9. ???? 

