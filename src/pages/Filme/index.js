import React, { Component } from "react";
import "./filme-info.css";

class Filme extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filme: []
    };
  }

  componentDidMount() {
    //https://sujeitoprogramador.com/r-api/?api=filmes/123
    const { id } = this.props.match.params;
    let url = `https://sujeitoprogramador.com/r-api/?api=filmes/${id}}`;

    fetch(url)
      .then(r => r.json())
      .then(json => {
        this.setState({ filme: json });
      });
  }

  render() {
    return (
      <div className="filme-info">
        <h1>{this.state.filme.nome}</h1>
        <img src={this.state.filme.foto} alt={this.state.filme.nome} />
        <h3>Sinopse</h3>
        <div className="sinopse">{this.state.filme.sinopse}</div>
      </div>
    );
  }
}

export default Filme;
