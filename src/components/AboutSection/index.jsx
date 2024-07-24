import "./style.css";

const AboutSection = () => {
  return (
    <div id="about" className="section-container">
      <div>
        <div className="image">
          <img src="/user.jpg" />
        </div>
        <div className="title">
          <h1>John Doe</h1>
          <h2>Software Engineer</h2>
          <p>Bangalore, India</p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
