export default function Connect() {
  return (
    <div className="flex flex-col items-center">
      <div className="">
        <h1 className="text-6xl text-white mb-8 xxs:text-3xl">
          Connect with me!
        </h1>
      </div>
      <div className="text-white text-xl justify-between mb-10">
        <p className="text-center 2xl:w-300 lg:w-200 xxs:text-sm">
          I am actively seeking a Full-Stack or UX / UI role where I can leverage my expertise in the React ecosystem to build cohesive, high-performance web and mobile applications. Whether you're interested in discussing a potential opportunity, collaborating on a new project, or just connecting about development, I'm always open to a conversation. Let's build something great together.
        </p>
      </div>
      <div className="ml-2 mt-5">
        <a href="https://linkedin.com/in/zack6yuan">
      <button
        className="relative xs:mt-4 px-22.5 py-3 bg-[#ff7400]!
     text-white font-bold rounded-md overflow-hidden
     group cursor-pointer hover:scale-105 duration-300 text-xl mr-2"
      >
        <span
          className="absolute inset-0 bg-white! opacity-30
      rotate-45 -translate-x-full group-hover:translate-x-full
      blur-sm transition-transform duration-500"
        ></span>
        <span className="relative z-10"></span>
        LinkedIn
      </button></a>
      <a href="https://www.github.com/zack6yuan">
      <button
        className="relative xxs:mt-3 xs:mt-4 px-24 py-3 bg-[#ff7400]!
     text-white font-bold rounded-md overflow-hidden
     group cursor-pointer hover:scale-105 duration-300 text-xl mr-2"
      >
        <span
          className="absolute inset-0 bg-white! opacity-30
      rotate-45 -translate-x-full group-hover:translate-x-full
      blur-sm transition-transform duration-500"
        ></span>
        <span className="relative z-10"></span>
        GitHub
      </button></a>
      </div>
    </div>
  );
}