import { Fragment } from "react";
import image from "../assets/meals.jpg";
import Meals from "../meals/Meals";
import "./MainContent.css";

const MainContent = (props) => {
  return (
    <Fragment>
      <div className="main-image">
        <img src={image} alt="This is for" className="main-image" />
      </div>
      <Meals />
    </Fragment>
  );
};
export default MainContent;
