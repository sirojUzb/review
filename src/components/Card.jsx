const Card = (props) => {
  return (
    <div className="feature_card">
      <div className="feature_wrapper">
        <img className="feature_image" src={props.img} alt="feature name" />
      </div>
      <div className="detail_wrapper">
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default Card;
