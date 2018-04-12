import React, { Component } from 'react';

import { Container } from './components/container';

import { Home } from './scenes/Home';
import { About } from './scenes/About';
import { Portfolio } from './scenes/Portfolio';
import { Contact } from './scenes/Contact';

class App extends Component {
  render() {
    return (
      <Container>
        <Home />
        <About />
        <Portfolio />
        <Contact />
      </Container>
    );
  }
}

export default App;
