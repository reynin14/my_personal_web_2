import React from 'react';

import styles from './styles';

import { Header } from '../../components/header';

const About = () => {
  return(
    <div style={styles.container}>
      <Header
        title={'ABOUT'}
      />
      <div style={styles.infoContainer}>
        <div style={styles.bio}>
          Known as an enthusiastic, dynamic, driven, and self-sufficient Full-Stack Web Developer with a highly-transferrable, broad technical skill set. Skilled in web development through work as a Project Manager tasked with programming on proprietary platforms. Expansive expertise gained in programming primarily in JavaScript and Ruby. Recognized for strong team-building and client relationship development abilities effectively used to help startup tech companies improve their staple products and build a strong reputation. An accomplished and results-oriented professional who consistently meets deadlines and regularly exceeds expectations.
        </div>
        <div>
          Languages:
          JavaScript; Ruby; HTML5; CSS3; SQL
          Frameworks:
          ReactJS; React Native; Ruby on Rails
          Databases:
          MySQL; PostgreSQL
          Libraries:
          Redux; ActiveRecord; Semantic UI; Bootstrap; Materialize; Socket.io
          Concepts:
          Object-Oriented Programming; API Development; Git Workflow; Model-View-Controller; Object-Oriented Design; Group Programming; Object-Relational Mapping
          Deployment:
          Heroku; Surge
          Other:
          Communication; Interpersonal Skills; Multitasking; Supervision; Leadership
        </div>
      </div>
    </div>
  )
}

export default About;
