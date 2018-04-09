import React, { Component } from 'react';

import { Container } from './components/container';
import { Intro } from './scenes/Intro';

class App extends Component {
  render() {
    return (
      <Container>
        <Intro />
      </Container>
    );
  }
}

export default App;
