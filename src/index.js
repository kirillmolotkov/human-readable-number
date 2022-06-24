module.exports = function toReadable(number) {
    const units = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    const dozenth = [
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];
    const hundreds = ["hundred"];
    const getLastNumber = String(number).split("").pop();
    const getFirstNumber = String(number).split("").shift();
    const getSecondNumber = String(number).split("")[1];
    if (number >= 0 && number <= 19) {
        return units[number];
    }
    if (number >= 20 && number <= 99) {
        if (getSecondNumber === "0") {
            return dozenth[getFirstNumber - 2];
        }
        return `${dozenth[getFirstNumber - 2]} ${units[getLastNumber]}`;
    }
    if (number >= 100 && number <= 999) {
        if (getLastNumber === "0" && getSecondNumber === "0") {
            return `${units[getFirstNumber]} ${hundreds[0]}`;
        }
        if (getLastNumber === "0" && getSecondNumber !== "1") {
            return `${units[getFirstNumber]} ${hundreds[0]} ${
                dozenth[getSecondNumber - 2]
            }`;
        }
        if (getSecondNumber === "0") {
            return `${units[getFirstNumber]} ${hundreds[0]} ${units[getLastNumber]}`;
        }
        if (getSecondNumber === "1") {
            return `${units[getFirstNumber]} ${hundreds[0]} ${
                units[Number(getLastNumber) + 10]
            }`;
        }
        return `${units[getFirstNumber]} ${hundreds[0]} ${
            dozenth[getSecondNumber - 2]
        } ${units[getLastNumber]}`;
    }
};
