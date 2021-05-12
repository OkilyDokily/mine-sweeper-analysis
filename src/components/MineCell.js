import PopBox from './PopBox'
import classNames from '../functions/classNames'

function MineCell(props) {
  const { revealed, flagged, mine } = props;
  const className = classNames(
    "mine-cell",
    `mine-cell--${revealed ? "revealed" : "hidden"}`,
    mine ? "mine-cell--mine" : null,
    flagged ? "mine-cell--flagged" : null
  );
  return (<PopBox {...props} className={className} revealed={true} />);
}

export default MineCell;