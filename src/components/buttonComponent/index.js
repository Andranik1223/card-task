import "./Button.css"

const ButtonComponent = ({ text, onClick }) => {
    return (
        <button className='btn' onClick={onClick}>{text} </button>
    )
}

export default ButtonComponent
