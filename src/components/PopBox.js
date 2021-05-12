import classNames from '../functions/classNames'

function PopBox(props) {
  const className = classNames("pop-box", props.inset ? "pop-box--inset" : null, props.className);
  return (<div {...props} className={className} />)
}

export default PopBox;