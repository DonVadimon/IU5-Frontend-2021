const roundToK = (number) => (number > 1000 ? `${number % 1000}k` : number);

export default roundToK;
