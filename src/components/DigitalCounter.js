
function DigitalCounter(props) {
  const { number } = props;
  const paddedNumber = padNumber(number, 3);
  return (<div {...props} className="digital-counter">{paddedNumber}</div>);
}

function padNumber(n, length) {
  const isNegative = n < 0;
  if (isNegative) {
    n = n * -1
    length -= 1; // tack on "-" after padding
  };
  n = n.toString();
  while (n.length < length) {
    n = "0" + n;
  }
  if (isNegative) {
    n = "-" + n;
  }
  return n;
}

export default DigitalCounter;