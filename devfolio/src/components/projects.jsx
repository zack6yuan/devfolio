export default function Projects() {
  return (
    <div className="flex flex-col items-center">
      <div className="">
        <h1 className="font-moralana xs:text-6xl text-black mb-8 xxs: text-3xl">
          Crafting Intuitive Digital Experiences
        </h1>
      </div>
      <div className="text-black md:text-xl xxs:text-sm justify-between mb-8">
        <div className="">
          <img src="" alt="" />
        </div>
        <div className=""></div>
        <img src="" alt="" />
        <img src="" alt="" />
        <div className=""></div>
      </div>
      <div className="flex gap-3">
        <a href="https://www.github.com/zack6yuan">
          <button
            className="font-moralana relative px-12 py-3 bg-black!
     text-white font-bold rounded-md overflow-hidden
     group cursor-pointer hover:scale-105 duration-300 text-xl"
          >
            <span
              className="absolute inset-0 bg-white! opacity-30
      rotate-45 -translate-x-full group-hover:translate-x-full
      blur-sm transition-transform duration-500"
            ></span>
            <span className="relative z-10"></span>
            GitHub
          </button>
        </a>
      </div>
    </div>
  );
}
