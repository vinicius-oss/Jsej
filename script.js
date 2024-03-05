var cursorFollower = document.getElementById('cursorFollower');

document.addEventListener('mousemove', function(e) {
    moveCursorFollower(e.clientX, e.clientY);
});

function moveCursorFollower(x, y) {
    cursorFollower.style.left = x - cursorFollower.clientWidth / 2 + 'px';
    cursorFollower.style.top = y - cursorFollower.clientHeight / 2 + 'px';
}

// Atualiza a posição do cursorFollower continuamente
function updateCursor() {
    moveCursorFollower(event.clientX, event.clientY);
    requestAnimationFrame(updateCursor);
}

updateCursor(); // Inicia a atualização contínua