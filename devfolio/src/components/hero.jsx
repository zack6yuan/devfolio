import linkedin from "../assets/linkedin.png"
import gmail from "../assets/gmail.png"
import github from "../assets/linkedin.png"

export default function HeroSection() {
  return (
    <div className="text-white flex flex-col h-screen justify-center text-left">
      <div className="flex-row">
        <h1 className="text-7xl">Hi, I'm Zack!</h1>
      </div>
      <div className="flex-row text-2xl">
        <p>I'm a Full-Stack Developer from Tulsa, Oklahoma</p>
      </div>
      <div className="flex space-x-6 h-screen justify-end">
        <a href="[Your LinkedIn URL]" target="_blank" rel="noopener noreferrer">
          <img
            src={linkedin}
            alt="LinkedIn Logo"
            className="w-8 h-8 transition duration-300 hover:scale-110"
          />
        </a>
        <a href="mailto:[Your Email]" target="_blank" rel="noopener noreferrer">
          <img
            src={gmail}
            alt="Email Logo"
            className="w-8 h-8 transition duration-300 hover:scale-110"
          />
        </a>
        <a href="[Your GitHub URL]" target="_blank" rel="noopener noreferrer">
          <img
            src={github}
            alt="GitHub Logo"
            className="w-8 h-8 transition duration-300 hover:scale-110"
          />
        </a>
      </div>
    </div>
  );
}
