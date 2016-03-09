import React, { Component } from 'react';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {opened: false};
  }

  click() {
    console.log('Clicked');
    this.setState({opened: true});
  }

  render() {
    console.log(this.state.opened);
    var left = 'left';
    var right = 'right'
    var leftTitle = 'title left-title';
    var rightTitle = 'title right-title';

    left += this.state.opened ? ' left--opened' : '';
    right += this.state.opened ? ' right--opened' : '';

    return (
      <h1 className="home" onClick={this.click.bind(this)}>
        <div className={ left }>
          <div className="title">
            <div className="text">De l’Inspiration</div>
          </div>
          <div className="subtitle">
            <div className="text">LA VILLA WEISSENHOF</div>
          </div>
        </div>
        <div className={ right }>
          <div className="title">
            <div className="text">...À la Création</div>
          </div>
          <div className="subtitle">
            <div className="text">LA MAQUETTE DE ROMANE</div>
          </div>
        </div>
      </h1>
    );
  }
}
