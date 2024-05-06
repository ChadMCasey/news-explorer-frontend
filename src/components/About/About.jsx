import React from "react";
import UserAboutImage from "../../assets/portrait.jpeg";
import "./About.css";

const About = () => {
  return (
    <section className="about">
      <div className="about__content">
        <img
          src={UserAboutImage}
          alt="User About Image"
          className="about__image"
        />
        <div className="about__text-area">
          <h2 className="about__heading">About The author</h2>
          <div className="about__description-area">
            <p className="about__paragraph">
              Chad is a Full Stack Developer & UI Designer from Michigan. The
              technologies he knows include Python, JS, Java, React, Node,
              Express, SQL, MongoDB, HTML & CSS.
            </p>

            <p className="about__paragraph">
              For Chad, becoming a Software Engineer means embarking on a career
              that is in alignment with his passions, allowing him to feel
              connected to his work & provide quality solutions to the clients
              he serves.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
