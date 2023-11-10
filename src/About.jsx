import './App.css';
import Common from './common';
import web from '../src/images/illustration-1.svg'

function About() {
  return (
    <>
        <Common
        name = "Welcome to About"
        imgsrc = {web}
        visit = "/contact"
        btnname = "Contact Me"
        />
    </>
  );
}

export default About;
