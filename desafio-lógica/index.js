function quickSort(arr) {
	if (arr.length <= 1) {
		return arr;
	}

	const pivot = arr[Math.floor(arr.length / 2)]; // Escolhe o pivô como elemento do meio
	const left = [];
	const right = [];

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] < pivot) {
			left.push(arr[i]);
		} else if (arr[i] > pivot) {
			right.push(arr[i]);
		}
	}

	return quickSort(left).concat(pivot, quickSort(right));
}

function mergeSort(arr) {
	if (arr.length < 2) return arr;
	const mid = Math.floor(arr.length / 2);
	const l = mergeSort(arr.slice(0, mid));
	const r = mergeSort(arr.slice(mid, arr.length));
	return Array.from({ length: l.length + r.length }, () => {
		if (!l.length) return r.shift();
		else if (!r.length) return l.shift();
		else return l[0] > r[0] ? r.shift() : l.shift();
	});
}

function bblSort(arr) {
	for (var i = 0; i < arr.length; i++) {
		for (var j = 0; j < arr.length - i - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				var temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
			}
		}
	}
	return arr;
}

async function test() {
	let start, end;

	let arr = Array.from({ length: 100 }, () => Math.floor(Math.random() * 100));

	start = performance.now();

	console.log(`Array gerado: ${arr}`);

	let quick = await quickSort(arr);

	end = performance.now();

	console.log(`Quicksort ${quick} \nTempo de execução: `, end - start);

	let startMerge = performance.now();
	let merge = await mergeSort(arr);
	let endMerge = performance.now();

	console.log(
		`Mergesort ${merge} \nTempo de execução: `,
		endMerge - startMerge
	);

	let startBbl = performance.now();
	let bbl = await bblSort(arr);
	let endBbl = performance.now();

	console.log(`BubbleSort ${bbl} \nTempo de execução: `, endBbl - startBbl);
}

test();
