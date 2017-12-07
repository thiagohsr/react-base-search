import React, { Component } from 'react';
import ListRefurbishedsContainer from './containers/ListRefurbishedsContainer';
import SearchBoxContainer from './containers/SearchBoxContainer'

import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      refurbishedsFiltered: null
    };

    const isFiltered = false;
  }

  updateFilter(response) {
    console.log('updateou', response);
    this.setState({
      refurbishedsFiltered: response
    });
  }

  render() {
    return (
      <div>
        <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
          <header className="mdl-layout__header mdl-layout__header--scroll mdl-color--primary">
            <div className="mdl-layout--large-screen-only mdl-layout__header-row">
              <div className="App-header">
                <h2>Pesquisa de reembalados</h2>
              </div>
            </div>
          </header>
          <main className="mdl-layout__content">
            <section className="section--center mdl-grid mdl-grid--no-spacing">
              <SearchBoxContainer updateFilter={this.updateFilter.bind(this)} />
            </section>

            <section className="section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp">
              <ListRefurbishedsContainer
                filtered={this.state.refurbishedsFiltered}
              />
            </section>
          </main>
        </div>
      </div>
    );
  }
}

export default App;
