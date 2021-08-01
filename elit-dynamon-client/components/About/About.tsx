import aboutStyle from "./about.module.scss";

const About = () => {
  return (
    <>
      <div className={aboutStyle.whatIsELIT}>
        <div className={aboutStyle.question}>
          <div className={aboutStyle.realQuestion}>
            <h1>
              <span className={aboutStyle.questionNumber}>1.</span> What is Elit
              Dynamon <span className={aboutStyle.questionMark}>?</span>
            </h1>
          </div>
          <div className={aboutStyle.line}></div>
        </div>
        <div className={aboutStyle.answer}>
          <p>
            <span>Elit Dynamon </span> is far more than a community . It is the place of unlimited resources of knowledge about <span>technology</span> and much more.
            We at elit make sure that you get ulimate quality <span>articles</span>. These are simplified versions of documentations.
            We will make new geeks to connect to world of <span>AR/VR</span> . Craftsmenship and Creativity , these concepts has brought elit dynamon to perfection.
            Our Goal will always be definite "<span>Connecting this world to AI and to future Now</span>"
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
