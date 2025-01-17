import "./style.css";
const links = [
  {
    text: "About",
    link: "about",
  },
  {
    text: "Bio",
    link: "bio-section",
  },
  {
    text: "Experience",
    link: "experience",
  },
  {
    text: "Projects",
    link: "projects-section",
  },
  {
    text: "Skills",
    link: "skills-section",
  },
  {
    text: "Contacts",
    link: "contacts-section",
  },
];

const Header = () => {
  return (
    <ul className="header-list">
      {links.map(({ text, link }) => (
        <li
          key={text}
          onClick={() => {
            document.getElementById(link).scrollIntoView();
          }}
        >
          {text}
        </li>
      ))}
    </ul>
  );
};

export default Header;
