import React from 'react';
import './Intro.css';

function Introduction() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = process.env.PUBLIC_URL + '/Rinku_Resume.pdf'; // Ensure the file is in the public folder
    link.download = 'Rinku_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
        <button className="btn" onClick={handleDownload}>Download CV</button>
      </div>
    </section>
  );
}

export default Introduction;
