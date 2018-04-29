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
    scrollToComponent(this.About, { offset: 0, align: 'top', duration: 1000})
  }

  scrollToHome = () => {
    scrollToComponent(this.Home, { offset: 0, align: 'top', duration: 1000})
  }

  scrollToPortfolio = () => {
    scrollToComponent(this.Portfolio, { offset: 0, align: 'top', duration: 1000})
  }

  scrollToContact = () => {
    scrollToComponent(this.Contact, { offset: 0, align: 'top', duration: 1000})
  }

  render() {
    return (
      <Container>
        <section ref={(section) => { this.Home = section; }}>
          <Home scrollToAbout={this.scrollToAbout} />
        </section>

        <Navbar
          scrollToHome={this.scrollToHome}
          scrollToAbout={this.scrollToAbout}
          scrollToPortfolio={this.scrollToPortfolio}
          scrollToContact={this.scrollToContact}
        />

        <section ref={(section) => { this.About = section; }}>
          <About />
        </section>

        <section ref={(section) => { this.Portfolio = section; }}>
          <Portfolio />
        </section>

        <section ref={(section) => { this.Contact = section; }}>
          <Contact />
        </section>
      </Container>
    );
  }
}

export default App;
