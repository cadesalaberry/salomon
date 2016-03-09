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
    console.log(this.state.opened);
    var home = 'home';

    home += this.state.tab !== 'home'
    ? ' home--' + this.state.tab
    : '';

    home += this.state.opened
    ? ' home--opened'
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
      </div>
    );
  }
}
