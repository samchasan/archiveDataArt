var tnbData;
var tWords = [];
var bWords = [];
var tVals = [];
var bVals = [];


function preload() {
  tnbData = loadJSON("tnb.json")
}

function setup() {
  createCanvas(500,500);
  background(20);
  textSize(7);
  textAlign(CENTER);
  noStroke();
  makeDicts();
  firstChars();
  pushChars();
  TrumpLines();
  ObamaLines();
  // htmlElements();
  showWords();
  count()

}

function draw(){
}


function showWords() {
    setInterval(function(){
    var bI = int(random(bWords.length))+1
    var tI = int(random(tWords.length))+1

      var bWord = bWords[bI]
      var tWord = tWords[tI]
      push()
      fill(20)
      rect(0,0,500,100)
      textSize(40)
      textAlign(LEFT)
      fill(80,130,255,120)
      text(bWord,10,50)
      fill(255,50,150,120)
      text(tWord,10,90)
      pop();

  }, 2000);
}



function htmlElements(){

    let obamaTitle = createElement('h1', "OBAMA Words")

    for(var i = 0; i< bWords.length; i++) {
      let p = createElement('p', bWords[i],10)
    }

    let trumpTitle = createElement('h1', "TRUMP Words")

    for(var i = 0; i< tWords.length; i++) {
      let p = createElement('p', tWords[i],10)
    }

}

var baseline = 320;
var xOff = 25;

function ObamaLines(){

  var heightPrev;
  var xposPrev;

  for(var i = 0; i< bVals.length; i++) {
    fill(80,130,255,40)
    var xpos = (i * 15) + xOff
    var height = bVals[i]*(-3)
    rect(xpos, baseline, 10, height)
    fill(80,130,255,180)
    text(bVals[i],xpos+5,baseline+10)

    if(i>0){
      stroke(80,130,255,180)
      strokeWeight(4)
      line(xpos+5,height+baseline,xposPrev+5,heightPrev+baseline)
      noStroke()
    }
    heightPrev = height
    xposPrev = xpos
    }
  }

function TrumpLines(){
  var heightPrev;
  var xposPrev;
    for(var i = 0; i< tVals.length; i++) {
      fill(255,50,100,40)
      var xpos = (i * 15) + xOff
      var height = tVals[i]*(-3)
      rect(xpos, baseline, 10, height)
      fill(255,50,100,180)
      text(tVals[i],xpos+5, baseline+20)
        if(i>0){
          stroke(255,50,100,180)
          strokeWeight(4)
          line(xpos+5,height+baseline,xposPrev+5,heightPrev+baseline)
          noStroke()
        }
      heightPrev = height
      xposPrev = xpos
    }
}

function makeDicts(){
  for (var i = 0; i < 435; i++) {
    if (i < 285) {
      tWords.push(tnbData[i].TRUMP)
    }
    bWords.push(tnbData[i].OBAMA)

  }

  var dict = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']

  dict.forEach(function (letter,i){
    var xPos = (i * 15) + xOff+5
    fill(200)
    text(letter,xPos, baseline+30)
  })
}

function firstChars(){
    tWords.forEach(function(word) {
      var string = word.toString();
      var firstchar = string.charAt(0);
      tIfs(firstchar)
    })

    bWords.forEach(function(word) {
      var string = word.toString();
      var firstchar = string.charAt(0);
      bIfs(firstchar);
    })
}

var bA=0
var bB=0
var bC=0
var bD=0
var bE=0
var bF=0
var bG=0
var bH=0
var bF=0
var bG=0
var bH=0
var bI=0
var bJ=0
var bK=0
var bL=0
var bM=0
var bN=0
var bO=0
var bP=0
var bQ=0
var bR=0
var bS=0
var bT=0
var bU=0
var bV=0
var bW=0
var bX=0
var bY=0
var bZ=0

var tA = 0
var	tB	=	0
var	tC	=	0
var	tD	=	0
var	tE	=	0
var	tF	=	0
var	tG	=	0
var	tH	=	0
var	tF	=	0
var	tG	=	0
var	tH	=	0
var	tI	=	0
var	tJ	=	0
var	tK	=	0
var	tL	=	0
var	tM	=	0
var	tN	=	0
var	tO	=	0
var	tP	=	0
var	tQ	=	0
var	tR	=	0
var	tS	=	0
var	tT	=	0
var	tU	=	0
var	tV	=	0
var	tW	=	0
var	tX	=	0
var	tY	=	0
var	tZ	=	0

function tIfs (firstchar){
  if (firstchar == 'A'){
      tA +=1
   }
   if (firstchar == 'B'){
     tB +=1
  }
  if (firstchar == 'C'){
    tC +=1
  }
  if (firstchar == 'D'){
    tD +=1
  }
  if (firstchar == 'E'){
    tE +=1
  }
  if (firstchar == 'F'){
    tF +=1
  }
  if (firstchar == 'G'){
    tG +=1
  }
  if (firstchar == 'H'){
    tH +=1
  }
  if (firstchar == 'I'){
    tI +=1
  }
  if (firstchar == 'J'){
    tJ +=1
  }
  if (firstchar == 'K'){
    tK +=1
  }
  if (firstchar == 'L'){
    tL +=1
  }
  if (firstchar == 'M'){
    tM +=1
  }
  if (firstchar == 'N'){
    tN +=1
  }
  if (firstchar == 'O'){
    tO +=1
  }
  if (firstchar == 'P'){
    tP +=1
  }
  if (firstchar == 'Q'){
    tQ +=1
  }
  if (firstchar == 'R'){
    tR +=1
  }
  if (firstchar == 'S'){
    tS +=1
  }
  if (firstchar == 'T'){
    tT +=1
  }
  if (firstchar == 'U'){
    tU +=1
  }
  if (firstchar == 'V'){
    tV +=1
  }
  if (firstchar == 'W'){
    tW +=1
  }
  if (firstchar == 'X'){
    tX +=1
  }
  if (firstchar == 'Y'){
    tY +=1
  }
  if (firstchar == 'Z'){
    tZ +=1
  }
}


function bIfs(firstchar){
  if (firstchar == 'A'){
      bA +=1
   }
   if (firstchar == 'B'){
     bB +=1
  }
  if (firstchar == 'C'){
    bC +=1
  }
  if (firstchar == 'D'){
    bD +=1
  }
  if (firstchar == 'E'){
    bE +=1
  }
  if (firstchar == 'F'){
    bF +=1
  }
  if (firstchar == 'G'){
    bG +=1
  }
  if (firstchar == 'H'){
    bH +=1
  }
  if (firstchar == 'I'){
    bI +=1
  }
  if (firstchar == 'J'){
    bJ +=1
  }
  if (firstchar == 'K'){
    bK +=1
  }
  if (firstchar == 'L'){
    bL +=1
  }
  if (firstchar == 'M'){
    bM +=1
  }
  if (firstchar == 'N'){
    bN +=1
  }
  if (firstchar == 'O'){
    bO +=1
  }
  if (firstchar == 'P'){
    bP +=1
  }
  if (firstchar == 'Q'){
    bQ +=1
  }
  if (firstchar == 'R'){
    bR +=1
  }
  if (firstchar == 'S'){
    bS +=1
  }
  if (firstchar == 'T'){
    bT +=1
  }
  if (firstchar == 'U'){
    bU +=1
  }
  if (firstchar == 'V'){
    bV +=1
  }
  if (firstchar == 'W'){
    bW +=1
  }
  if (firstchar == 'X'){
    bX +=1
  }
  if (firstchar == 'Y'){
    bY +=1
  }
  if (firstchar == 'Z'){
    bZ +=1
  }
}

function pushChars(){
  tVals.push(tA)
  tVals.push(tB)
  tVals.push(tC)
  tVals.push(tD)
  tVals.push(tE)
  tVals.push(tF)
  tVals.push(tG)
  tVals.push(tH)
  tVals.push(tI)
  tVals.push(tJ)
  tVals.push(tK)
  tVals.push(tL)
  tVals.push(tM)
  tVals.push(tN)
  tVals.push(tO)
  tVals.push(tP)
  tVals.push(tQ)
  tVals.push(tR)
  tVals.push(tS)
  tVals.push(tT)
  tVals.push(tU)
  tVals.push(tV)
  tVals.push(tW)
  tVals.push(tX)
  tVals.push(tY)
  tVals.push(tZ)

  bVals.push(bA)
  bVals.push(bB)
  bVals.push(bC)
  bVals.push(bD)
  bVals.push(bE)
  bVals.push(bF)
  bVals.push(bG)
  bVals.push(bH)
  bVals.push(bI)
  bVals.push(bJ)
  bVals.push(bK)
  bVals.push(bL)
  bVals.push(bM)
  bVals.push(bN)
  bVals.push(bO)
  bVals.push(bP)
  bVals.push(bQ)
  bVals.push(bR)
  bVals.push(bS)
  bVals.push(bT)
  bVals.push(bU)
  bVals.push(bV)
  bVals.push(bW)
  bVals.push(bX)
  bVals.push(bY)
  bVals.push(bZ)
}

function count() {
  var  tAmount = tWords.length
  var  bAmount = bWords.length
  var  tVal = tAmount.toString()
  var  bVal = bAmount.toString()
  fill(255,50,150,120)
  textSize(24)
  text (tAmount,450,baseline + 20)
  fill(80,130,255,120)
  text(bAmount,450,baseline)
}
