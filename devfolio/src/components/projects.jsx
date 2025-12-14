import { Link } from 'react-router-dom';

export default function Projects() {
  return (
    <div className="flex flex-row items-center xs:-mt-80">
      <div className="flex flex-col 2xl:flex-row gap-10 2xl:gap-18 justify-between font-moralana">
        <div className="">
          <h1 className=" text-3xl mb-5 text-left">Aeroduel</h1>
          <p className="text-left mb-5 sm:w-50">A real-time aerial combat battle-simulator that implements WebSockets for client and server communication.</p>
          <p className="text-left mb-5 sm:w-50">Stack: React Native, Expo, Google Firebase, Electron, NextJS, TypeScript, WebSockets, Bonjour (mDNS), React, TailwindCSS, C++, MicroPython, LoRa Wireless Temeletry.</p>
          <Link to="https://www.github.com/Aeroduel">
            <p className="hover:scale-110 transition duration-300 text-left">GitHub Repository</p>
          </Link>
        </div>
        <div className="">
          <h1 className="text-3xl mb-5 text-left">Lumigram</h1>
          <p className="text-left mb-5 sm:w-40">An Instagram clone, built with React Native, Expo, and Google Firebase.</p>
          <p className="text-left mb-5 sm:w-40">Stack: React Native, Expo, Google Firebase, Google Firestore.</p>
          <Link to="https://www.github.com/zack6yuan/atlas-lumigram">
            <p className="hover:scale-110 transition duration-300 text-left">GitHub Repository</p>
          </Link>
        </div>
        <div className="">
          <h1 className="text-3xl mb-5 text-left">Diinker</h1>
          <p className="text-left mb-5 sm:w-50">My current personal project. An intuitive pickleball experience that combines hardware and software.</p>
          <p className="text-left mb-5 sm:w-40">Current Stack: React Native, Expo, Google Firebase, Google Firestore, React, TailwindCSS</p>
          <Link to="https://www.github.com/Diinker">
            <p className="hover:scale-110 transition duration-300 text-left">GitHub Repository</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
