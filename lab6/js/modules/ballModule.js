/**
 * A div with a ball inside of it.
 * Ball follow your cursor if you click on him
 * and stops to follow if you press Esc
 */
const ballField = document.createElement('div');
ballField.classList.add('ball-field');
const ball = document.createElement('div');
ball.classList.add('ball');
ballField.appendChild(ball);

let ballMoving = false;
ball.addEventListener('click', () => {
  ballMoving = true;
});

document.addEventListener('keyup', (e) => {
  if (e.key.toLowerCase() === 'escape') {
    ballMoving = false;
  }
});

document.addEventListener('mousemove', (e) => {
  if (ballMoving) {
    const limitX = ballField.offsetLeft + ballField.offsetWidth - ball.offsetWidth - 4;
    const limitY = ballField.offsetTop + ballField.offsetHeight - ball.offsetHeight - 4;
    let pX;
    let pY;
    const pageX = e.pageX - ball.offsetWidth / 2;
    const pageY = e.pageY - ball.offsetHeight / 2;
    if (pageX > limitX) {
      pX = ballField.offsetWidth - ball.offsetWidth - 4;
    } else if (pageX < ballField.offsetLeft) {
      pX = 0;
    } else {
      pX = pageX - ballField.offsetLeft;
    }

    if (pageY > limitY) {
      pY = ballField.offsetHeight - ball.offsetHeight - 4;
    } else if (pageY < ballField.offsetTop) {
      pY = 0;
    } else {
      pY = pageY - ballField.offsetTop;
    }
    ball.style.top = `${pY}px`;
    ball.style.left = `${pX}px`;
  }
});

// eslint-disable-next-line import/prefer-default-export
export { ballField };
