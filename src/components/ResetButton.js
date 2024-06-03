import "./ResetButton.css"

const ResetButton = (props) => {
  return (
    <button className="btn" onClick={props.resetToZero}>Reset</button>
  )
}

export default ResetButton