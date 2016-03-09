import React, { Component } from 'react';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      opened: false,
      tab: 'home',
    };
  }

  clickHome() {
    console.log('Clicked');
    this.setState({ opened: true });
  }

  clickVilla() {
    console.log('Clicked villa');
    this.setState({ tab: 'villa' });
  }

  clickModel() {
    console.log('Clicked villa');
    this.setState({ tab: 'model' });
  }

  render() {
    var home = 'home';
    var tbVilla = 'toolbar toolbar--villa';
    var tbModel = 'toolbar toolbar--model';

    home += this.state.tab !== 'home'
    ? ' home--' + this.state.tab
    : '';

    home += this.state.opened
    ? ' home--opened'
    : '';

    tbVilla += this.state.tab === 'villa'
    ? ' toolbar--opened'
    : '';

    tbModel += this.state.tab === 'villa'
    ? ' toolbar--opened'
    : '';

    return (
      <div className={ home } onClick={this.clickHome.bind(this)}>
        <div className="left">
          <div className="title">
            <div className="text">De l’Inspiration</div>
          </div>
          <div className="subtitle" onClick={this.clickVilla.bind(this)}>
            <div className="text">LA VILLA WEISSENHOF</div>
          </div>
        </div>
        <div className="right">
          <div className="title">
            <div className="text">...À la Création</div>
          </div>
          <div className="subtitle" onClick={this.clickModel.bind(this)}>
            <div className="text">LA MAQUETTE DE ROMANE</div>
          </div>
        </div>
        <div className="main-subtitle">PROJET DE L’ARCHITECTE ROMANE SALOMON</div>

        <div className={ tbVilla }>
          <div className="subtitle subtitle--black">
            <div className="text">STRUCTURE</div>
          </div>
          <div className="subtitle subtitle--beige">
            <div className="text">FAÇADE LIBRE ESCALIER, PORTE</div>
          </div>
          <div className="subtitle subtitle--orenge">
            <div className="text">PILOTIS FENÊTRE BANDEAU</div>
          </div>
          <div className="subtitle subtitle--orenge">
            <div className="text">TOIT TERRASSE PLAN LIBRE</div>
          </div>
        </div>

        <div className={ tbModel }>
          <div className="subtitle subtitle--black">
            <div className="text">STRUCTURE</div>
          </div>
          <div className="subtitle subtitle--beige">
            <div className="text">FAÇADE LIBRE ESCALIER, PORTE</div>
          </div>
          <div className="subtitle subtitle--orenge">
            <div className="text">PILOTIS FENÊTRE BANDEAU</div>
          </div>
          <div className="subtitle subtitle--orenge">
            <div className="text">TOIT TERRASSE PLAN LIBRE</div>
          </div>
        </div>

      </div>
    );
  }
}
