import Card from "./components/Card.jsx";
import "./style.css";
import icon from "../img/icon.png";

const feature = () => {
  return (
    <div className="main_wrapper">
      <Card title="Barberton Daisy" description="$119.00" icon={icon} />
    </div>
  );
};

export default feature;
