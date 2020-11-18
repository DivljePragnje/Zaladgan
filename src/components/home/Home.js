import React from "react";
import "./home.styles.css";
import { LOGOS_INFO } from "../../globals";
import SmallItem from "../SmallItem/SmallItem";
class Home extends React.Component {
  render() {
    const renderItems = () => {
      const values = Object.values(LOGOS_INFO);
      return values.map((value, index) => {
        return <SmallItem key={index} logoInfo={value} />;
      });
    };
    return <div className="wrapper">{renderItems()}</div>;
  }
}

export default Home;
