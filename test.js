const vader = require('vader-sentiment');
// {neg: 0.0, neu: 0.299, pos: 0.701, compound: 0.8545}

var tnbData;
var tWords = [];
var bWords = [];

// {neg: 0.0, neu: 0.299, pos: 0.701, compound: 0.8545}

// var doc = nlp('dinosaur')
function preload() {
  tnbData = loadJSON("tnb.json");
}

function setup() {
  createCanvas(500,500);

  for (var i = 0; i < 435; i++) {
    // console.log(tnbData[i].TRUMP)
    if (i < 285) {
      tWords.push(tnbData[i].TRUMP);
    }
    bWords.push(tnbData[i].OBAMA);

  }
  // count()
  // doStuff()
  // console.log(tA)
  tSents = []
  tWords.forEach( function(word) {
  var input = 'word';
  var intensity = vader.SentimentIntensityAnalyzer.polarity_scores(input);
tSents.push(intensity)
})
console.log("This is the length of tSents: " + tSents.length)

}
