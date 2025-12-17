import { useState } from 'react';

export default function navBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="">
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <a href="/" className="text-black font-moralana text-3xl font-bold">
            Zack Yuan
          </a>
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-black md:hidden" 
            aria-expanded={isOpen}
            aria-controls="mobile-menu-links"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
          <div className="hidden md:flex space-x-4">
            <a href="/" className="text-black font-moralana hover:scale-110 transition duration-300">Home</a>
            <a href="/about" className="text-black font-moralana hover:scale-110 transition duration-300">About</a>
            <a href="/experience" className="text-black font-moralana hover:scale-110 transition duration-300">Experience</a>
            <a href="/projects" className="text-black font-moralana hover:scale-110 transition duration-300">Projects</a>
            <a href="/hire-me" className="text-black font-moralana hover:scale-110 transition duration-300">Hire Me</a>
          </div>
        </div>
      </nav>
      <div 
        id="mobile-menu-links"
        className={`
          md:hidden 
          transition-all 
          duration-300 
          ease-in-out 
          overflow-hidden 
          ${isOpen ? 'max-h-screen' : 'max-h-0'}
        `}
      >
        <a href="/" className="px-4 text-black font-moralana hover:scale-110 transition duration-300 xxs:text-xs">Home</a>
        <a href="/about" className="px-4 text-black font-moralana hover:scale-110 transition duration-300 xxs:text-xs">About</a>
        <a href="/experience" className="px-4 text-black font-moralana hover:scale-110 transition duration-300 xxs:text-xs">Experience</a>
        <a href="/projects" className="px-4 text-black font-moralana hover:scale-110 transition duration-300 xxs:text-xs">Projects</a>
        <a href="/hire-me" className="px-4 text-black font-moralana hover:scale-110 transition duration-300 xxs:text-xs">Hire Me</a>
      </div>
    </div>
  );
}