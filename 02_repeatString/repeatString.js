const repeatString = function (string, num) {
	let repeatedString = "";

	if (num === 0) return "";
	else if (num < 0) return "ERROR";
	for (i = 0; i < num; i++) {
		repeatedString += string;
	}
	return repeatedString;
};
console.log(repeatString("hey", 3));
console.log(repeatString("hey", 10));
console.log(repeatString("hey", 1));
console.log(repeatString("hey", 0));
console.log(repeatString("hey", -1));
console.log(repeatString("hey", Math.floor(Math.random() * 15)));
console.log(repeatString("", 10));

// Do not edit below th is line
module.exports = repeatString;
