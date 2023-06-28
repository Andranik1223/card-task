import "./Card.css";

const CardComponent = ({ text, deleteCard }) => {
  return (
    <div className="card">
      {text}
      <div className="delete-card" onClick={() => deleteCard(text)}>
        X
      </div>
    </div>
  );
};

export default CardComponent;
