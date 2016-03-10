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
    console.log('Clicked Home');
    this.setState({ opened: true });

    var modelVilla = document.getElementById('villa-player');
    var modelVideo = document.getElementById('model-player');
    modelVideo.load();
    modelVilla.load();
    modelVideo.pause();
    modelVilla.pause();

  }

  clickVilla() {
    console.log('Clicked Villa');
    this.state.tab === 'home'
    ? this.setState({ tab: 'villa' })
    : this.setState({ tab: 'home' });

    var video = document.getElementById('villa-player');
    video.pause();
    video.currentTime = 0;
    video.play();
  }

  clickModel() {
    console.log('Clicked Model');
    this.state.tab === 'home'
    ? this.setState({ tab: 'model' })
    : this.setState({ tab: 'home' });

    var video = document.getElementById('model-player');
    video.pause();
    video.currentTime = 0;
    video.play();
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

    tbModel += this.state.tab === 'model'
    ? ' toolbar--opened'
    : '';

    return (
      <div className={ home } onClick={this.clickHome.bind(this)}>
        <div className="left">
          <div className="title">
            <div className="text">De l’Inspiration</div>
          </div>
          <div className="subtitle color--grey" onClick={this.clickVilla.bind(this)}>
            <div className="text">LA VILLA WEISSENHOF</div>
          </div>
        </div>
        <div className="right">
          <div className="title">
            <div className="text">...À la Création</div>
          </div>
          <div className="subtitle color--beige" onClick={this.clickModel.bind(this)}>
            <div className="text">LA MAQUETTE DE ROMANE</div>
          </div>
        </div>
        <div className="main-subtitle">PROJET DE L’ARCHITECTE ROMANE SALOMON</div>

        <div className={ tbVilla }>
          <div className="tool color--black">
            <div className="text">STRUCTURE</div>
          </div>
          <div className="tool color--beige">
            <div className="text">FAÇADE LIBRE ESCALIER, PORTE</div>
          </div>
          <div className="tool color--orange">
            <div className="text">PILOTIS FENÊTRE BANDEAU</div>
          </div>
          <div className="tool color--grey">
            <div className="text">TOIT TERRASSE PLAN LIBRE</div>
          </div>
        </div>

        <div className={ tbModel }>
          <div className="tool color--black">
            <div className="text">STRUCTURE</div>
          </div>
          <div className="tool color--beige">
            <div className="text">FAÇADE LIBRE ESCALIER, PORTE</div>
          </div>
          <div className="tool color--orange">
            <div className="text">PILOTIS FENÊTRE BANDEAU</div>
          </div>
          <div className="tool color--grey">
            <div className="text">TOIT TERRASSE PLAN LIBRE</div>
          </div>
        </div>

        <div className="tab tab--villa">
          <div className="tab-content">
            <video id="villa-player" width="100%" height="100%">
              <source src="./static/villa.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        <div className="tab tab--model">
          <div className="tab-content">
            <video id="model-player" width="100%" height="100%">
              <source src="./static/model.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

      </div>
    );
  }
}
