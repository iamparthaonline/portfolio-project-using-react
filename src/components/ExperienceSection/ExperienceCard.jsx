// eslint-disable-next-line react/prop-types
const ExperienceCard = ({ company, designation, logo, description, years }) => {
  return (
    <div className="experience-card">
      <img src={logo} alt={company} />
      <div className="experience-details">
        <h2>{designation}</h2>
        <p> {years}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ExperienceCard;
