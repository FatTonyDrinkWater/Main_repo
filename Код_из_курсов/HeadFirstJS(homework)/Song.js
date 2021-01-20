let name = "Joe";
let i = 0;
	while (i < 2) {
		document.write("Happy Birthday to you.")
		i++; // 
	}
document.write("Happy Birthday dear " + name);
document.write("Happy Birthday to you");

let name = "Joe";
	for ( let i = 0; i < 2; i++){
		document.write("Happy Birthday to you.")
	}
document.write("Happy Birthday dear " + name);
document.write("Happy Birthday to you");
// alert(i); не работает так как переменная видна только в цикле
// встроенное объявление переменной


let word = "bootles";
let count = 99;
	while (count > 0) {
		console.log(count + " " + word + " of beer on the wall");
		console.log(count + " " + word + " of beer," );
		console.log("Take one down, pass it around,");
		count = count - 1;
		if (count > 0) {
			console.log(count + " " + word + " of beer on the wall.");
		} else {
			console.log("No more " + " " + word + "of beer on the wall.");
		}

	}

let word = "bootles";
let count = 99;
	for (; count > 0;) {
		console.log(count + " " + word + " of beer on the wall");
		console.log(count + " " + word + " of beer," );
		console.log("Take one down, pass it around,");
        console.log(--count + " " + word + " of beer on the wall");
	} if (count == 0) {
			console.log("No more " + " " + word + "of beer on the wall.");
		}

