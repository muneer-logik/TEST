function findKthLargest(sequance, size, k) {
	let digits = sequance.split('');
	const blocks = [];
	while(digits.length) {
		blocks.push(digits.splice(0, size).sort());
	}
	console.log(blocks);
	let indexArray = [], maxNumbersArray = [];
	indexArray[blocks.length -1] = 1;
	maxNumbersArray[blocks.length -1] = blocks[blocks.length-1].length;
	for (let i = blocks.length -2; i >=0; --i) {
		indexArray[i] = blocks[i+1].length * indexArray[i+1];
		maxNumbersArray [i] = maxNumbersArray[i+1] * blocks[i].length;
	}
	if (k > maxNumbersArray[0]) {
		console.log('K should not be larger than ', maxNumbersArray[0]);
		return;
	}
	let num = '', index;
	// console.log(indexArray);
	// console.log(maxNumbersArray);
	for (i = 0; i <= blocks.length-1; ++i) {
		index = k % maxNumbersArray[i];
		if (index === 0) {
			index = blocks[i].length - 1;
		}
		else {
			index = Math.floor((index-1) / indexArray[i]);
		}
		num+= blocks[i][index];
	}
	console.log(num);	
}


findKthLargest('123456789123', 5, 12);

