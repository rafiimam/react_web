import './App.css';
import Common from './common';
import web from '../src/images/about.svg'

function About() {
  return (
    <>
        <Common
        name = "Welcome to Grow Your Business With"
        imgsrc = {web}
        visit = "/service"
        btnname = "Get Started"
        />
    </>
  );
}

export default About;
