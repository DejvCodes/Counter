import "./IncreaseButton.css"

const IncreaseButton = (props) => {
  return (
    <button className="btn" onClick={props.increaseOne}>Zvýšit o 1</button>
  )
}

export default IncreaseButton