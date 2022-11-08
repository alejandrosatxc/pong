var player1Position = 0
var player2Position = 0
var player1Score = 0
var player2Score = 0

function move(e) {
    if (e.key === 's' && parseInt($('#player1').css('top')) < 600 - parseInt($('#player1').css('height'))) {
        player1Position += 10
    }
    if (e.key === 'w' && parseInt($('#player1').css('top')) > 0) {
        player1Position -= 10
    }
    if (e.key === 'ArrowDown' && parseInt($('#player2').css('top')) < 600 - parseInt($('#player2').css('height'))) {
        player2Position += 10
    }
    if (e.key === 'ArrowUp' && parseInt($('#player2').css('top')) > 0) {
        player2Position -= 10
    }
    $('#player1').css('top', player1Position)
    $('#player2').css('top', player2Position)

}

//Add event listener for player movement input
$(window).on('keydown', move)

//Board bounds
var topBound = 0
var rightBound = parseInt($('#board').css('width'))
var bottomBound = parseInt($('#board').css('height'))
var leftBound = 0

//Paddle bounds
var paddleHeight = parseInt($('#player1').css('height'))
var paddleWidth = parseInt($('#player1').css('width'))

//Ball physics
var ballHeight = parseInt($('#ball').css('height'))
var ballWidth = parseInt($('#ball').css('width'))
var ballX = parseInt($('#ball').css('left'))
var ballY = parseInt($('#ball').css('top'))
var velocityX = 2
var velocityY = 2

function startBall() {
    $('#ball').show()
    //change the X and Y position of the ball by the velocity in the X and Y direction
    ballX += velocityX
    ballY += velocityY
    //If ballX goes beyond leftBound, player 2 scores
    if (ballX < leftBound) {
        score('player 2')
    }
    //If ballX goes beyond rightBound, (accounting for width of the ball), player 1 scores
    if (ballX > rightBound - ballWidth) {
        score('player 1')
    }
    //Reverse velocityY if top or bottom bounds is hit
    //change this to score
    if (ballY < topBound || ballY > bottomBound - ballHeight) {
        velocityY = -velocityY
    }

    //Player1 Paddle collision
    if (ballX < leftBound + paddleWidth && (ballY > player1Position && ballY < player1Position + paddleHeight)) {
        velocityX = -velocityX
    }

    //Player2 Paddle collision
    if (ballX + ballWidth > rightBound - paddleWidth && (ballY > player2Position && ballY < player2Position + paddleHeight)) {
        velocityX = -velocityX
    }

    //Update the position of the ball
    $('#ball').css('left', ballX)
    $('#ball').css('top', ballY)
}
var ballInterval = setInterval(startBall, 10)

function score(player) {
    if (player === "player 1") {
        //increase player 1 score
        player1Score++
        $('#player1-score').text(player1Score)
    } else if (player === "player 2") {
        //increase player 2 score
        player2Score++
        $('#player2-score').text(player2Score)
    }

    //Stop ball function
    clearInterval(ballInterval)
    //Hide ball
    $('#ball').hide()
    //After 1 second, launch another ball
    setTimeout(() => {
        ballX = 300
        ballY = 200
        ballInterval = setInterval(startBall, 10)
    }, 1000)

}