import { Link } from 'react-router-dom';

export default function Projects() {
  return (
    <div className="flex flex-row items-center">
      <div className="flex flex-row justify-between font-moralana">
        <div className="">
          <h1 className=" text-3xl mb-5 text-left">Aeroduel</h1>
          <p className="text-left mb-5 sm:w-50">A real-time aerial combat battle-simulator that implements WebSockets for client and server communication.</p>
          <Link to="https://www.github.com/Aeroduel">
            <p className="hover:scale-110 transition duration-300 text-left">GitHub Repository</p>
          </Link>
        </div>
        <div className="">
          <h1 className="text-3xl mb-5 text-center">Lumigram</h1>
          <p className="text-center mb-5 sm:w-40">An Instagram clone, built with React Native, Expo, and Google Firebase.</p>
          <Link to="https://www.github.com/zack6yuan/atlas-lumigram">
            <p className="hover:scale-110 transition duration-300 text-ceter">GitHub Repository</p>
          </Link>
        </div>
        <div className="">
          <h1 className="text-3xl mb-5 text-right">Diinker</h1>
          <p className="text-right mb-5 sm:w-50">My current personal project. An intuitive pickleball experience that combines hardware and software.</p>
          <Link to="https://www.github.com/Diinker">
            <p className="hover:scale-110 transition duration-300 text-right">GitHub Repository</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
