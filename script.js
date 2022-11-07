var position = 0
function move (e) {
    if (e.key === 'ArrowDown' && parseInt($('#player1').css('top')) < 600 - parseInt($('#player1').css('height'))) {
        position += 10
    }
    if (e.key === 'ArrowUp' && parseInt($('#player1').css('top')) > 0) {
        position -= 10
    }
    $('#player1').css('top', position)
}

$(window).on('keydown', move)

//Ball physics
var ballX = parseInt($('#ball').css('left'))
var ballY = parseInt($('#ball').css('top'))
var velocityX = 1
var velocityY = 1
var ballInterval = setInterval(() => {
    //change the X and Y position of the ball by the velocity in the X and Y direction
    ballX += velocityX
    ballY += velocityY
    //Reverse velocityX if left or right bounds is hit
    if(ballX > 600 || ballX < 0) {
        velocityX = -velocityX
    }
    //Reverse velocityY if top or bottom bounds is hit
    if(ballY > 600 || ballY < 0) {
        velocityY = -velocityY
    }

    //Update the position of the ball
    $('#ball').css('left', ballX)
    $('#ball').css('top', ballY)

}, 1)