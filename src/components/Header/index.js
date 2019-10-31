import React, { Component } from "react";
import "./header.css";
import { Link } from "react-router-dom";
import { Icon, FlatButton } from "react-native-elements";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <Link to="/firebase">Firebase</Link>
        <Icon
          raised
          name="heartbeat"
          type="font-awesome"
          color="#f50"
          onPress={() => console.log("Entrando na pagina Firebase")}
        />
        <Link to="/">Filmes em cartaz</Link>

        <FlatButton>
          <Link to="/firebase">Firebase</Link>
        </FlatButton>
      </div>
    );
  }
}
export default Header;
