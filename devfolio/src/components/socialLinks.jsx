import linkedin from "../assets/linkedin.png";
import gmail from "../assets/gmail.png";
import github from "../assets/github.png";

export default function SocialLinks() {
  return (
    <div className="flex space-x-6 h-screen justify-end"> 
      <a href="[Your LinkedIn URL]" target="_blank" rel="noopener noreferrer">
        <img src={linkedin} alt="LinkedIn Logo" className="w-8 h-8 transition duration-300 hover:scale-110" />
      </a>
      <a href="mailto:[Your Email]" target="_blank" rel="noopener noreferrer">
        <img src={gmail} alt="Email Logo" className="w-8 h-8 transition duration-300 hover:scale-110" />
      </a>
      <a href="[Your GitHub URL]" target="_blank" rel="noopener noreferrer">
        <img src={github} alt="GitHub Logo" className="w-8 h-8 transition duration-300 hover:scale-110" />
      </a>
    </div>
  )
}