import React, { Component } from 'react';

import { Container } from './components/container';
import { Home } from './scenes/Home';
import { About } from './scenes/About';

class App extends Component {
  render() {
    return (
      <Container>
        <Home />
        <About />
      </Container>
    );
  }
}

export default App;
