import { Link } from "react-router-dom";

export default function Projects() {
  return (
<<<<<<< HEAD
    <div className="flex flex-row justify-center items-start gap-10 font-moralana">
      <div className="w-1/3">
        <h1 className=" text-3xl mb-5 2xl:text-5xl">Aeroduel</h1>
        <p className=" mb-5">
          The culmintation of my 20 months of development at Atlas School. A
          real-time aerial combat battle-simulator that implements WebSockets
          for client and server communication. The H7 Cam Plus' on our 3D
          printed RC planes lock on to each others lights, sends the hit
          confirmation to our server, and alerts our app.
        </p>
        <Link
          to="https://www.github.com/Diinker"
          className="flex flex-row justify-center items-center gap-5 hover:scale-110 transition duration-300"
        >
          <p className="font-cascadia">GitHub Repository</p>
          <img src="/assets/github.png" alt="github-logo" className="w-7 h-7" />
        </Link>
      </div>
      <div className="w-1/3">
        <h1 className="text-3xl mb-5 2xl:text-5xl">Lumigram</h1>
        <p className="mb-5">
          An Instagram clone, that replicates the core features of the Instagram
          mobile app. The user's feed is populated by images that are posted and
          stored in Firebase. The application leverages Firebase Authentication
          for secure user access and Firestore for real-time data
          synchronization across the client interface.
        </p>
        <Link
          to="https://www.github.com/Diinker"
          className="flex flex-row justify-center items-center gap-5 hover:scale-110 transition duration-300"
        >
          <p className="font-cascadia">GitHub Repository</p>
          <img src="/assets/github.png" alt="github-logo" className="w-7 h-7" />
        </Link>
      </div>
      <div className="w-1/3">
        <h1 className="text-3xl mb-5 2xl:text-5xl">Diinker</h1>
        <p className="mb-5">
          My current personal project. An intuitive pickleball experience that
          combines hardware and software. Practicing covering the full
          development lifecycle, and combining my technical skills with my
          personal interests. Built to bridge the gap between athletic
          performance and digital analytics.
        </p>
        <Link
          to="https://www.github.com/Diinker"
          className="flex flex-row justify-center items-center gap-5 hover:scale-110 transition duration-300"
        >
          <p className="font-cascadia">GitHub Repository</p>
          <img src="/assets/github.png" alt="github-logo" className="w-7 h-7" />
        </Link>
=======
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
>>>>>>> 5290450727c50b7411dcfc2a2c86b17787ecda67
      </div>
    </div>
  );
}
