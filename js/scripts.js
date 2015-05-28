
var wordCount = function(phrase) {
  var finalCount = []
  var uniqueWordsList = uniqueWords(phrase);
  var splitPhrase = phrase.split(" ");
  var counter = 0;

  uniqueWordsList.forEach(function(uniqWord){
    splitPhrase.forEach(function(splitWord){
      if (splitWord === uniqWord){
        counter += 1;
      }
    });
    var numberOfTimes = counter;
    var final = (uniqWord + ": " + numberOfTimes);
    finalCount.push(final);
    counter = 0;
  });
  var answer = bubbleSort(finalCount);
  return answer;
};

var uniqueWords = function(phrase) {
  var splitPhrase = phrase.split(" ");
  var uniqueWords = [];
  splitPhrase.forEach(function(word) {
    if (uniqueWords.indexOf(word) === -1) {
      uniqueWords.push(word)
    }
  });
  return uniqueWords
};

var bubbleSort = function(wordArray) {

  var swapped;
  do {
    swapped = false;
      for(var i = 0; i< wordArray.length-1; i++) {
        if (parseInt(wordArray[i].slice(-1)) < parseInt(wordArray[i+1].slice(-1))) {

          var temp = wordArray[i];

          wordArray[i] = wordArray[i+1];
          wordArray[i+1] = temp;

          swapped = true;
        }
      }
  } while (swapped);
return wordArray;
};

$(document).ready(function() {
  $("form#stringEntered").submit(function(event) {
    var countAnswer = $("input#stringEntered").val();
    var result = wordCount(countAnswer);
    $(".countedArray").text(result);

    $("#result").show();

    event.preventDefault();

  });
});
