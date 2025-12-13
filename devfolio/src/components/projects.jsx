export default function Projects() {
  return (
    <div className="flex flex-col items-center">
      <div className="">
        <h1 className="xs:text-6xl text-white mb-8 xxs: text-3xl">
          I'm currently working on...
        </h1>
      </div>
      <div className="text-white md:text-xl xxs:text-sm justify-between mb-8">
        <p className="text-center 2xl:w-300 xl:w-300 lg:w-200">
          My team and I's capstone project:
          <span className="text-[#ff7400]!"> AeroDuel.</span> A real-time,
          camera-based aerial battle system where two 3D-printed RC planes
          detect and “lock on” to each other's colored LEDs and send hit
          confirmations to a live React scoreboard.
        </p>
      </div>
      <div className="flex gap-3">
        <a href="https://www.github.com/Aeroduel">
          <button
            className="relative px-12 py-3 bg-[#ff7400]!
     text-white font-bold rounded-md overflow-hidden
     group cursor-pointer hover:scale-105 duration-300 text-xl"
          >
            <span
              className="absolute inset-0 bg-white! opacity-30
      rotate-45 -translate-x-full group-hover:translate-x-full
      blur-sm transition-transform duration-500"
            ></span>
            <span className="relative z-10"></span>
            View Project
          </button>
        </a>
      </div>
    </div>
  );
}
