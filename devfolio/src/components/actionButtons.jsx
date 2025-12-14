export default function ActionButtons() {
  return (
    <div className="mt-4 mb-0 flex items-center justify-center">
      <button
        className="relative xs:w-60 xxs:mb-3 xl:px-7 2xl:px-12 lg:px-7 md:px-7 xs:mb-4 xxs:px-5 py-2 bg-black!
     text-white font-moralana rounded-md overflow-hidden
     group cursor-pointer hover:scale-105 duration-300 text-xl mr-2"
      >
        <span
          className="absolute inset-0 bg-white! opacity-30
      rotate-45 -translate-x-full group-hover:translate-x-full
      blur-sm transition-transform duration-500"
        ></span>
        <span className="relative z-10"></span>
        Learn More
      </button>
    </div>
  );
}
