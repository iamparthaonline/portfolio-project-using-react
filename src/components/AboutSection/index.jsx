import "./style.css";

const AboutSection = () => {
  return (
    <div id="about">
      <div className="image">
        <img src="/user.jpg" />
      </div>
      <div className="title">
        <h1>John Doe</h1>
        <h2>Software Engineer</h2>
        <p>Bangalore, India</p>
      </div>
    </div>
  );
};

export default AboutSection;
