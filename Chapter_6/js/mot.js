var wordEntered = String(prompt("Please enter a word"));



function countNbofVowel (word){
    var countvowel=0;
    var vowelTable = ["a","e","i","o","u","y"];
    var lowerWord = word.toLowerCase;
    
    for (var i=0 ; i < word.length; i++)
        {
            for (var j=0; j <= vowelTable.length; j++){
                if (word[i] == vowelTable[j]){
                    countvowel +=1;
                }
            }
        }
    return countvowel;
}

console.log("The word" + wordEntered + " has " + wordEntered.length + " characters");
console.log("It is written in low case as:" + wordEntered.toLocaleLowerCase());
console.log("It is written in upper case as:" + wordEntered.toUpperCase());

var nbofVowel = countNbofVowel(wordEntered);
var nbofConsonant= wordEntered.length - nbofVowel;

console.log("It has " + nbofVowel + " vowels" + "and " + nbofConsonant + " consonants");