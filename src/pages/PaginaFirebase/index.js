import React, { Component } from "react";
import firebase from "firebase";

class PaginaFirebase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: "carregando",
      nome: "",
      idade: "",
      tokenInput: "",
      tokenOutput: ""
    };

    this.cadastrar = this.cadastrar.bind(this);
    this.buscarTokenOutPut = this.buscarTokenOutPut.bind(this);

    let firebaseConfig = {
      apiKey: "AIzaSyD44wj-Y8RZDCEaz2LabRUwPIg2rZ5zEE4",
      authDomain: "reactapp-6debc.firebaseapp.com",
      databaseURL: "https://reactapp-6debc.firebaseio.com",
      projectId: "reactapp-6debc",
      storageBucket: "reactapp-6debc.appspot.com",
      messagingSenderId: "554302350152",
      appId: "1:554302350152:web:ff091dd5e0ac3c8b62897d"
    };

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    firebase
      .database()
      .ref("token")
      .once("value")
      .then(snapshot => {
        let state = this.state;
        state.token = snapshot.val();
        this.setState(state);
      });

    firebase
      .database()
      .ref("tokenInput")
      .once("value")
      .then(snapshot => {
        let state = this.state;
        state.tokenOutput = snapshot.val();
        this.setState(state);
      });

    firebase
      .database()
      .ref("usuarios")
      .child(1)
      .on("value", snapshot => {
        let state = this.state;
        state.nome = snapshot.val().nome;
        state.idade = snapshot.val().idade;
        this.setState(state);
      });
  }

  buscarTokenOutPut() {
    firebase
      .database()
      .ref("tokenInput")
      .once("value")
      .then(snapshot => {
        let state = this.state;
        state.tokenOutput = snapshot.val();
        this.setState(state);
      });
  }
  cadastrar(e) {
    firebase
      .database()
      .ref("tokenInput")
      .set(this.state.tokenInput);
    this.buscarTokenOutPut();
    e.preventDefault();
  }

  render() {
    const { token, nome, idade, tokenOutput } = this.state;

    return (
      <form onSubmit={this.cadastrar}>
        <input
          type="text"
          value={this.state.tokenInput}
          onChange={e => this.setState({ tokenInput: e.target.value })}
        />

        <button type="submit"> Cadastrar </button>

        <h1>
          Token: {token}
          <br />
          Nome: {nome}
          <br />
          Idade: {idade}
          <br />
          tokenOutput: {tokenOutput}{" "}
        </h1>
      </form>
    );
  }
}

export default PaginaFirebase;
