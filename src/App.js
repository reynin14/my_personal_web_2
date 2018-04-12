import React, { Component } from 'react';

import { Container } from './components/container';

import { Home } from './scenes/Home';
import { About } from './scenes/About';
import { Portfolio } from './scenes/Portfolio';

class App extends Component {
  render() {
    return (
      <Container>
        <Home />
        <About />
        <Portfolio />
      </Container>
    );
  }
}

export default App;
