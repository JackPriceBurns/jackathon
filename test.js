const fs = require('fs');

function compress(input) {
    let output = "";
    let inputString =input.toString();
    // return inputString;

    // console.log(stringToDictWithCountOfWords(inputString)); process.exit();

    // let character = 'þ';
    let replaceCharacterByte = 1;
    // console.log(character.charCodeAt(0));
    let replaceCharacter = String.fromCharCode(1);


    let dictionary = {};

    let wordsToReplace = stringToOrderedArrayOfWordsByCount(inputString);

    let lastChar = 'þ'.charCodeAt(0);

    for (const word of wordsToReplace) {
        const result = replaceWordWithCharacter(inputString, word, lastChar);
        dictionary[word] = String.fromCharCode(result.replaceCharacterByte);
        lastChar = ++result.replaceCharacterByte;
        inputString = result.inputString;
    }

    const json = JSON.stringify({a: dictionary, b: inputString});
    //console.log(dictionary);
    const dictionaryJson = JSON.stringify(dictionary);
    // console.log(dictionaryJson.length);
    // console.log(Object.entries(dictionary).length);
    return json;

    // output = 

    output = inputString.replace(/webkit/g, 'þ');
    return output;
}

function decompress(input) {
    let output = "";
    let inputString =input.toString();
    // return inputString;
    let json = JSON.parse(inputString);
    let dictionary = json.a;
    let theData = json.b;
    for (let [word, replace] of Object.entries(dictionary)) {
        //console.log(replace);
        theData = theData.replace(new RegExp(replace, 'g'), word);
    }
    //console.log(theData);
    return theData;
    output = inputString.replace(/þ/g, 'webkit');
    // console.log(output);
    return output;
}

// function encodeDictionary(dictionary) {
//     let output = '';
//     let separator = --'þ'.charCodeAt(0);
//     for (let [word, replace] of Object.entries(dictionary)) {
//         output += `${word}`
//     }
//     return output;

// }

// function decodeDictionary(dictionaryStr) {

// }

function escapeRegex(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function replaceWordWithCharacter(inputString, word, replaceCharacterByte) {
    let exists = 1;
    do {
        exists = inputString.search(ch => ch== String.fromCharCode(replaceCharacterByte));
        if (exists !== -1) {
            replaceCharacterByte++;
        } else {
            inputString = inputString.replaceAll(new RegExp(`${escapeRegex(word)}`, 'g'), String.fromCharCode(replaceCharacterByte));

            return {
                inputString, replaceCharacterByte
            }
        }
    } while (exists !== -1);
}

const stringToOrderedArrayOfWordsByCount = (str) => {
    const regexpWord = /\w+/g;
    const regexpSpace = /\s+/g;
  
    const array = [
      ...str.matchAll(regexpWord),
      ...str.matchAll(regexpSpace),
    ];
  
    const dict = {}
  
    array.forEach(wordArr => {
      const word = wordArr[0]
      if (!dict[word] && word.length > 2) {
        dict[word] = {
          count: 1,
          saving: word.length - 2
        }
      } else if (dict[word]) {
        dict[word].count = dict[word].count + 1
      }
    })
  
    const overallScores = Object.entries(dict).map(([word, stats]) => ({
      ...stats,
      score: stats.count * stats.saving,
      word
    }))
  
    
    const orderedScores = overallScores.sort((a, b) => b.score - a.score)
  
    const filteredScores = orderedScores.filter(score => score.count > 2)
  
    return filteredScores.map(item => item.word)
  }

function test() {
    let ratioTotal = 0;
    let failure = false;
    const files = fs.readdirSync('fixtures');

    files.forEach(file => {
        if (!file.endsWith('.css') && !file.endsWith('.txt') && !file.endsWith('.json')) return false;

        const input = fs.readFileSync(`fixtures/${file}`).toString();
        const compressed = compress(input);
        const decompressed = decompress(compressed);

        if (input !== decompressed) {
            console.error("FAIL: Outputs do not match!" + file);
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

