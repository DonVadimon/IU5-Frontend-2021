// eslint-disable-next-line import/prefer-default-export
export function createErrorBlock(msg) {
  const errorBlock = document.createElement('div');
  errorBlock.innerHTML = `
    <div class="error-block">
      <h1 class="error-msg">${msg}</h1>
      <p>Try to type city name correctly</p>
      <button class="close-error">
        <img class="close-error-img" src="./icons/x-square.svg" alt="CLOSE" />
      </button>
    </div>
  `;
  return errorBlock;
}
