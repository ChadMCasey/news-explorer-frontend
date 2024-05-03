import React from "react";
import UserAboutImage from "../../assets/userAboutImage.png";
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
              This block describes the project author. Here you should indicate
              your name, what you do, and which development technologies you
              know.
            </p>
            <p className="about__paragraph">
              You can also talk about your experience with TripleTen, what you
              learned there, and how you can help potential customers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
