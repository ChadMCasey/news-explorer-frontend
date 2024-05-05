import React from "react";
import UserAboutImage from "../../assets/portrait.jpeg";
import "./About.css";

const About = () => {
  return (
    <section className="about">
      <div className="about__content">
        {/* THIS JPEG HAS YET TO BE COMPRESSED */}
        <img
          src={UserAboutImage}
          alt="User About Image"
          className="about__image"
        />
        <div className="about__text-area">
          <h2 className="about__heading">About The author</h2>
          <div className="about__description-area">
            <p className="about__paragraph">
              Chad Casey is a Full Stack Developer & UI Designer from Michigan.
              Currently, he works as a Data Analyst, driving insights for his
              organization through the application of tools such as SQL &
              Python. The technologies he knows include Python, JS, Java, React,
              Node, Express, SQL, MongoDB, HTML & CSS.
            </p>
            <p className="about__paragraph">
              His learning journey began with a introduction to algorithmic
              thinking and programming course at MSU. Since then, he has drawn
              on numerous resources to continue his studies. This includes OOP &
              DSA courses with Georgia Tech on MIT's edX platform, the 700+ hour
              Full Stack bootcamp with Triple10, numerous programming books,
              personal projects and more.
            </p>
            <p className="about__paragraph">
              For Chad, becoming a Software Engineer means embarking on a career
              that is in alignment with his passions. This allows him to feel
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
