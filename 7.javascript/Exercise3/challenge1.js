function printPyramid(rows) {
    for (let i = 1; i <= rows; i++) {
        let line ='';

        // Add spaces
        for (let s = 1; s <= rows-i; s++) {
            line=line+' ';
        }

        // Ascending numbers
        for (let j = 1; j <= i; j++) {
            line += j;
        }

        // Descending numbers
        for (let j = i - 1; j >= 1; j--) {
            line += j;
        }

        console.log(line);
    }
}

// Example
printPyramid(5);
