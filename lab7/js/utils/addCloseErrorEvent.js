// eslint-disable-next-line import/prefer-default-export
export const addCloseErrorEvent = () => {
  document.querySelector('.close-error').addEventListener('click', () => {
    document.querySelector('.error-block').classList.add('error-block-hidden');
  });
};
