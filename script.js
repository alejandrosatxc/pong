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