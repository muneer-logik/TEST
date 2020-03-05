const fs = require('fs');
const Stream = require('stream')
const Transform = Stream.Transform;

function liner () {
	return new Transform({
		transform: (ch, _, next) => {
			const data = ch.toString().split('\n');
			// let result = data.map(line => (line.split(' ').map(l => {
			// 	const index = Math.floor(l.length/2);
			// 	return l.slice(0, index) + l[index].toUpperCase() + l.slice(index+1)
			// }))
			// )

			// let result = '';
			// for (var line of data) {
			// 	for (var word of line.split(' ')) {
			// 		const index = Math.floor(word.length/2);
			// 		result += word.slice(0, index) + word[index].toUpperCase() + word.slice(index+1) + ' '
			// 	}
			// 	result += '\n';
			// }

			let result = data.reduce((res, line) => {
				return res + line.split(' ').reduce((acc, l) => {
						const index = Math.floor(l.length/2);
						return acc + l.slice(0, index) + l[index].toUpperCase() + l.slice(index+1) + ' '
					}, '').trim() + '\n'
			}, '').trim() 
			console.log(result);
			next(null, result)
		}
	});
}

// function convert () {
// 	return new Transform({
// 		transform: (ch, _, next) => {
// 			const lines = ch.toString().split(',').map(line => line.split(' '));
// 			console.log(lines);
// 			const result = lines.map(line => (line.map(l => {
// 				const index = Math.floor(l.length/2);
// 				return l.slice(0, index) + l[index].toUpperCase() + l.slice(index+1)
// 			}) + '\n')
// 			)

// 			next(null, [].concat(...result).toString().replace(/,/g, ' '))
// 		}
// 	})
// }
fs.createReadStream('ip.txt').pipe(liner()).pipe(fs.createWriteStream('out.txt'));


