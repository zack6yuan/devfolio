export default function ActionButtons() {
  return (
    <div className="mt-4 md:flex-row flex flex-col 2xl:w-108">
      <button
        className="relative w-full px-4 xl:px-7 2xl:px-12 lg:px-7 md:px-7 sm:mb-4 md:w-auto xs:mb-4  py-3 bg-[#ff7400]!
     text-white font-bold rounded-md overflow-hidden
     group cursor-pointer hover:scale-105 duration-300 text-xl mr-2"
      >
        <span
          className="absolute inset-0 bg-white! opacity-30
      rotate-45 -translate-x-full group-hover:translate-x-full
      blur-sm transition-transform duration-500"
        ></span>
        <span className="relative z-10"></span>
        Download CV
      </button>
      <button
        className="relative w-full px-4 xl:px-7 2xl:px-12 lg:px-7 md:px-7 sm:mb-4 md:w-auto py-3 2xl:scroll-py-0 bg-[#ff7400]!
     text-white font-bold rounded-md overflow-hidden
     group cursor-pointer hover:scale-105 duration-300 text-xl"
      >
        <span
          className="absolute inset-0 bg-white! opacity-30
      rotate-45 -translate-x-full group-hover:translate-x-full
      blur-sm transition-transform duration-500"
        ></span>
        <span className="relative z-10"></span>
        My Experience
      </button>
    </div>
  );
}
