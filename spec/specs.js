describe ("uniqueWords", function() {
  it("will return the number of unique words in a phrase of a single word", function() {
    expect(uniqueWords("andrew andrew")).to.eql(["andrew"])
  });

  it("will return the number of unique words in a phrase", function() {
    expect(uniqueWords("andrew andrew ian ian")).to.eql(["andrew", 'ian'])
  });

});

describe ("wordCount", function(){
  it("will return the number of unique words in a phrase of a single word", function() {
    expect(wordCount("andrew andrew ian ian")).to.eql(["andrew: 2", "ian: 2"])
  });

  it("will return the number of unique words in a phrase", function() {
    expect(wordCount("a c a c d c d c a c d")).to.eql(["c: 5", "a: 3", "d: 3"])
  });
})

describe ("bubbleSort", function(){
  it("will return the number of unique words in a phrase of a single word", function() {
    expect(bubbleSort(wordCount("andrew andrew andrew ian ian"))).to.eql(["andrew: 3","ian: 2"])
  });
})
