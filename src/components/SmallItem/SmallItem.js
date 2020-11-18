import React from "react";
import "./smallitem.styles.css";
const SmallItem = (props) => {
  const imageUrl = require(`../../images/${props.logoInfo.smallImagePath}`);
  return (
    <div
      className="small-item"
      style={{
        backgroundImage: `url(${imageUrl.default})`,
      }}
    >
      <div className="onhover">
        <h2>{props.logoInfo.name}</h2>
        <p>{props.logoInfo.description}</p>
      </div>
    </div>
  );
};
export default SmallItem;
