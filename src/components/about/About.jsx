import "./about.scss";
import IM from "../../assets/img/me-about.jpg";
const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me__image">
            <img src={IM} alt="About image" />
          </div>
        </div>
        <div className="about__content"></div>
      </div>
    </section>
  );
};
export default About;
