import React, { Component } from 'react';
import scrollToComponent from 'react-scroll-to-component';

import { Container } from './components/container';
import { Navbar } from './components/navbar/';

import { Home } from './scenes/Home';
import { About } from './scenes/About';
import { Portfolio } from './scenes/Portfolio';
import { Contact } from './scenes/Contact';

class App extends Component {

  componentDidMount() {
    scrollToComponent(this.About, { offset: 0, align: 'middle', duration: 500, ease:'inCirc'});
  }

  scrollToAbout = () => {
    console.log('scrolling to about');
    scrollToComponent(this.About, { offset: 0, align: 'top', duration: 1000})
  }

  render() {
    return (
      <Container>
        <section>
          <Home scrollToAbout={this.scrollToAbout} />
        </section>
        <Navbar />
        <section ref={(section) => { this.About = section; }}>
          <About />
        </section>

        <Portfolio />
        <Contact />
      </Container>
    );
  }
}

export default App;
