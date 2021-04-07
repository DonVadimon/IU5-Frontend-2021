const capitalize = (str) => str.split(' ').map((subStr) => subStr.charAt(0).toUpperCase() + subStr.slice(1).toLowerCase()).join(' ');

// eslint-disable-next-line import/prefer-default-export
export { capitalize };
