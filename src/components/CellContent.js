import MineCellNumber from './MineCellNumber'

function CellContent({ revealed, mine, borderMineCount }) {
  if (!mine && borderMineCount && revealed) {
    return (<MineCellNumber number={borderMineCount} />);
  }
  return null;
}

export default CellContent;