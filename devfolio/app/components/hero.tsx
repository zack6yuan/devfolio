export default function Hero() {
  return (
    <div className="bg-linear-to-b from-[#4CD8F3] to-[#0D7080] flex flex-col items-center justify-start p-10 gap-5 text-center">
      <div className="">
        <h1 className="font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white">
          Zack Yuan
        </h1>
        <h2 className="font-bold text-[#E8D5A3] text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
          Web Developer
        </h2>
      </div>
      <div className="">
        <p className="text-center text-lg sm:text-xl md:text-2xl lg:text-3xl w-full md:max-w-xl lg:max-w-2xl mx-auto text-white">
            Full-Stack Adventurer charting unexplored territories in Web
            Development and AI-Powered Workflows. 🏝️
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-5">
        <button title="Explore Map" className="text-white font-bold bg-red-400 py-3 px-5 rounded-xl">🗺️ Explore Map</button>
        <button title="View My Passport" className="text-black font-bold bg-white py-3 px-5 rounded-xl">📔 My Passport</button>
      </div>
    </div>
  );
}
