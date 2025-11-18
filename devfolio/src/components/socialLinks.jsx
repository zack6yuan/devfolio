import linkedin from "../assets/linkedin.png";
import gmail from "../assets/gmail.png";
import github from "../assets/github.png";

export default function SocialLinks() {
  return (
    <div className="sm:-mt-60 md:-ml-110 md:-mt-38 lg:-ml-50 lg:-mt-59 xl:ml-3">
      <div className="flex space-x-6">
        <a href="https://www.linkedin.com/in/zack6yuan/" target="_blank" rel="noopener noreferrer">
          <img
            src={linkedin}
            alt="LinkedIn Logo"
            className="shrink-0 w-15 h-15 transition duration-300 hover:scale-110"
          />
        </a>
        <a href="mailto:zack6yuan@gmail.com" target="_blank" rel="noopener noreferrer">
          <img
            src={gmail}
            alt="Email Logo"
            className="shrink-0 w-15 lg:h-15 transition duration-300 hover:scale-110"
          />
        </a>
        <a
          href="https://www.github.com/zack6yuan"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={github}
            alt="GitHub Logo"
            className="shrink-0 w-15 h-15 transition duration-300 hover:scale-110"
          />
        </a>
      </div>
    </div>
  );
}
