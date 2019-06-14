let matchScore;
let currentScore = 0;
let gem1,gem2,gem3,gem4;
let gems = [0,0,0,0];
let isPlaying;
let winCount = 0;
let lossCount = 0;

function randomizer(start = 1, end = 12) {
    start = Math.floor(start);
    end = Math.floor(end);
    item = Math.floor(Math.random() * (end - start) + start);
    return item;
}

function clickGem(matchScore, currentScore, gem) {
    if (currentScore < matchScore) {
        console.log(currentScore);
        currentScore += gem;
        let currentStr = currentScore.toString();
        $('.current').text(currentStr);
        currentScore = parseInt(currentStr);
        console.log(currentScore);
        if (currentScore === matchScore) {
            $('.intro').text("Congrats! You Won!");
            $('#tryAgain').removeClass("disabled");
            winCount++;
            $('.wins').text(winCount);
        } else if (currentScore > matchScore) {
            $('.intro').text("Bummer! You lost :/")
            $('#tryAgain').removeClass("disabled");
            lossCount++;
            $('.losses').text(lossCount);
        }
    
    }
    return currentScore;

}

function init() {
    $('.intro').text("Digital Diamonds.");
    gems = [0,0,0,0];
    gem1 = 0;
    gem2 = 0;
    gem3 = 0;
    gem4 = 0;
    isPlaying = true;
    currentScore = 0;
    matchScore = 0;
    matchScore = randomizer(19,120);
    console.log(gems, gem1,gem2,gem3,gem4, currentScore, matchScore);
    $('.current').text("0");

    for (let i = 0; i < gems.length; i++) {
        let gem;
        gem = randomizer();
        while(gem === gems[0] ||
              gem === gems[1] ||
              gem === gems[2] ||
              gem === gems[3]) {
                    gem = randomizer();
              }  
        gems[i] = gem;
        console.log(gems, gem1,gem2,gem3,gem4, currentScore, matchScore);
    }

    gem1 = gems[0];
    gem2 = gems[1];
    gem3 = gems[2];
    gem4 = gems[3];
    console.log(gems, gem1,gem2,gem3,gem4, currentScore, matchScore);
    $('.match').text(matchScore);

}

function resetScore(lossCount, winCount) {
    lossCount = 0;
    winCount = 0;
    $('.wins').text(winCount);
    $('.losses').text(lossCount)
}




$('#tryAgain').click(function () { 
    init();
    $('#tryAgain').addClass('disabled');
 });
 
 $('#resetScore').click(function () {
     resetScore();
 });

 $('#gem-1').click(function() {
     currentScore = clickGem(matchScore, currentScore, gem1);

 });
 $('#gem-2').click(function() {
     currentScore = clickGem(matchScore, currentScore, gem2);
 });
 $('#gem-3').click(function() {
     currentScore = clickGem(matchScore, currentScore, gem3);
 });
 $('#gem-4').click(function() {
     currentScore = clickGem(matchScore, currentScore, gem4);
 });



init();