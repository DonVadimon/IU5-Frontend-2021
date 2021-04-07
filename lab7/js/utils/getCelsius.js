// eslint-disable-next-line import/prefer-default-export
export function getCelsius(num) {
  // eslint-disable-next-line no-nested-ternary
  return `${Math.round(num) === 0 ? 0 : (num > 0 ? `+${Math.round(num)}` : `${Math.round(num)}`)}<span>&#8451;</span>`;
}
