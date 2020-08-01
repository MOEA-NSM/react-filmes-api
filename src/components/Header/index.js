import React, { Component } from "react";
import "./header.css";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <Link to="/firebase">Firebase</Link>
        {/* <Icon
          raised
          name="heartbeat"
          type="font-awesome"
          color="#f50"
          onPress={() => console.log("hello")}
        /> */}
        <Link to="/">Filmes em cartaz</Link>
      </div>
    );
  }
}
export default Header;
