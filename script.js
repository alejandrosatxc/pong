var position = 0
$(window).on('keydown', (e) => {

    if (e.key === 'ArrowDown' && parseInt($('#player1').css('top')) < 600 - parseInt($('#player1').css('height'))) {
        position += 5
        console.log('Down')
    }
    if (e.key === 'ArrowUp' && parseInt($('#player1').css('top')) > 0) {
        position -= 5
        console.log('Up')
    }
    console.log($('#player1').css('top'))

    $('#player1').css('top', position)


})

//Ball physics
var ballX = parseInt($('#ball').css('left'))
var ballY = parseInt($('#ball').css('top'))
var velocityX = 5
var velocityY = 5
var ballInterval = setInterval(() => {
    ballX += velocityX
    ballY += velocityY
    //Reverse velocity if left or right bounds is hit
    if(ballX > 600 || ballX < 0) {
        velocityX = -velocityX
    }
    if(ballY > 600 || ballY < 0) {
        velocityY = -velocityY
    }
    //ballY += velocity
    $('#ball').css('left', ballX)
    $('#ball').css('top', ballY)

}, 50)