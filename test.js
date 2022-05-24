const fs = require('fs');

function compress(input) {
    let output = "";

    return output;
}

function decompress(input) {
    let output = "";

    return output;
}

function test() {
    let ratioTotal = 0;
    let failure = false;
    const files = fs.readdirSync('fixtures');

    files.forEach(file => {
        if (!file.endsWith('.css') && !file.endsWith('.txt') && !file.endsWith('.json')) return false;

        const input = fs.readFileSync(`fixtures/${file}`, 'utf-8');
        const compressed = compress(input);
        const decompressed = decompress(compressed);

        if (input !== decompressed) {
            console.error("FAIL: Outputs do not match!");
            failure = true;
        }

        // Higher percentage is better
        const ratio = (1 - (new Blob([compressed]).size / new Blob([input]).size)) * 100;
        ratioTotal += ratio;

        console.log(`File: ${file}, Ratio: ${ratio.toFixed(2)}%`)
    });

    const ratioAverage = ratioTotal / files.length;
    console.log(`Average Compression Ratio: ${ratioAverage.toFixed(2)}%`);
}

test();

