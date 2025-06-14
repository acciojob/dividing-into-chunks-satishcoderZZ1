const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	const result=[];
	let currentChunk=[];
	let currentSum=0;

	for(const num of arr){
		if(currentSum+num>n){
			if(currentChunk.length>0){
				result.push(currentChunk);
			}
			currentChunk=[num];
			currentSum =num;
		}
		else{
			currentChunk.push(num);
			currentSum+=num;
		}
	}
	if(currentChunk.length>0){
		result.push(currentChunk);
	}
	return result;
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
