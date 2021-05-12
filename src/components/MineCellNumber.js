function MineCellNumber({ number }) {
  const className = `mine-cell-number mine-cell-number--${number}`;
  return (<span className={className}>{number || ""}</span>);
}