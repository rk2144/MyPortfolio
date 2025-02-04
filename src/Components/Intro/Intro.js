import React from 'react';
import './Intro.css';

function Introduction() {
  return (
    <section className="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="IntroText">
          I'm <span className="introName">Rinku</span>
          <br /> Software Developer
        </span>
        <p className="Intropara">
          I am a skilled web developer with experience in creating visually appealing and user-friendly websites.
        </p>
        <button className="btn">Download CV</button>
      </div>
    </section>
  );
}

export default Introduction;
