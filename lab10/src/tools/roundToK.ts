const roundToK = (number: number) =>
  number > 1000 ? `${number % 1000}k` : number;

export default roundToK;
