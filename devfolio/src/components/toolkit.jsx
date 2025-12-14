export default function Toolkit() {
  return (
    // 1. Centered Main Wrapper (2xl:mx-auto)
    <div className="flex flex-col xs:-mt-30 sm:w-155 2xl:w-200 2xl:mx-auto"> 
      <div className="">
        {/* 2. Heading is centered at 2xl */}
        <h1 className="font-moralana xxs:text-left text-5xl text-black xxs:mb-1 sm:mb-5 xs:mb-5 xxs:text-4xl 2xl:text-6xl 2xl:text-center xxs:ml-5 2xl:ml-0">
          My Technical Arsenal
        </h1>
      </div>
      {/* Paragraph is already centered at 2xl */}
      <div className="text-black xs:w-120 sm:w-160 lg:w-180 justify-between mb-3 2xl:mx-auto">
        <p className="font-moralana text-left 2xl:text-center sm:text-xl xxs:text-md xxs:mx-5 2xl:text-2xl 2xl:w-300 2xl:-ml-50 2xl:mb-10">
          My technical focus is in React and React Native, enabling me to
          engineer cohesive, end-to-end applications across both web and mobile
          platforms. This cross-platform approach maximizes code reuse and
          ensures a unified user experience. My robust foundation is further
          supported by hands-on experience with adjacent languages like Python
          and strong SQL for backend architecture and data tooling.
        </p>
      </div>
      
      {/* 3. Button Group 1: Centered at 2xl (2xl:justify-center) */}
      <div className="flex gap-3 md:w-194 md:ml-15 font-moralana xxs:ml-5 2xl:ml-0 2xl:justify-center">
        <button
          className="relative sm:px-14 md:px-10 xs:px-4 xxs:px-2 py-3 bg-black!
     text-white font-bold rounded-md overflow-hidden
     group cursor-pointer hover:scale-105 duration-300 text-xl xxs:text-sm"
        >
          <span
            className="absolute inset-0 bg-white! opacity-30
      rotate-45 -translate-x-full group-hover:translate-x-full
      blur-sm transition-transform duration-500"
          ></span>
          <span className="relative z-10"></span>
          React
        </button>
        {/* ... (other buttons) ... */}
        <button
          className="relative sm:px-7 md:px-7 xs:px-4 xxs:px-2 py-3 bg-black!
     text-white font-bold rounded-md overflow-hidden
     group cursor-pointer hover:scale-105 duration-300 text-xl xxs:text-sm"
        >
          <span
            className="absolute inset-0 bg-white! opacity-30
      rotate-45 -translate-x-full group-hover:translate-x-full
      blur-sm transition-transform duration-500"
          ></span>
          <span className="relative z-10"></span>
          Native
        </button>
        <button
          className="relative sm:px-7 md:px-9 xs:px-4 xxs:px-2 py-3 bg-black!
     text-white font-bold rounded-md overflow-hidden
     group cursor-pointer hover:scale-105 duration-300 text-xl xxs:text-sm"
        >
          <span
            className="absolute inset-0 bg-white! opacity-30
      rotate-45 -translate-x-full group-hover:translate-x-full
      blur-sm transition-transform duration-500"
          ></span>
          <span className="relative z-10"></span>
          MySQL
        </button>
        <button
          className="relative sm:px-6 md:px-7 xs:px-4 xxs:px-3 py-3 bg-black!
     text-white font-bold rounded-md overflow-hidden
     group cursor-pointer hover:scale-105 duration-300 text-xl xxs:text-sm"
        >
          <span
            className="absolute inset-0 bg-white! opacity-30
      rotate-45 -translate-x-full group-hover:translate-x-full
      blur-sm transition-transform duration-500"
          ></span>
          <span className="relative z-10"></span>
          JavaScript
        </button>
        <button
          className="relative sm:px-7 md:px-12 xs:px-5 xxs:px-3.5 py-3 bg-black!
     text-white font-bold rounded-md overflow-hidden
     group cursor-pointer hover:scale-105 duration-300 text-xl xxs:text-sm"
        >
          <span
            className="absolute inset-0 bg-white! opacity-30
      rotate-45 -translate-x-full group-hover:translate-x-full
      blur-sm transition-transform duration-500"
          ></span>
          <span className="relative z-10"></span>
          Python
        </button>
      </div>
      
      {/* 4. Button Group 2: Centered at 2xl (2xl:justify-center) */}
      <div className="font-moralana flex gap-3 mt-4 xxs:ml-5 2xl:ml-0 2xl:justify-center">
        <button
          className="relative sm:px-7 md:px-7 xs:px-4 xxs:px-2 py-3 bg-black!
     text-white font-bold rounded-md overflow-hidden
     group cursor-pointer hover:scale-105 duration-300 text-xl xxs:text-sm"
        >
          <span
            className="absolute inset-0 bg-white! opacity-30
      rotate-45 -translate-x-full group-hover:translate-x-full
      blur-sm transition-transform duration-500"
          ></span>
          <span className="relative z-10"></span>
          TailwindCSS
        </button>
        {/* ... (other buttons) ... */}
        <button
          className="relative sm:px-8 md:px-11 xs:px-4 xxs:px-2 py-3 bg-black!
     text-white font-bold rounded-md overflow-hidden
     group cursor-pointer hover:scale-105 duration-300 text-xl xxs:text-sm"
        >
          <span
            className="absolute inset-0 bg-white! opacity-30
      rotate-45 -translate-x-full group-hover:translate-x-full
      blur-sm transition-transform duration-500"
          ></span>
          <span className="relative z-10"></span>
          Figma
        </button>
        <button
          className="relative sm:px-8 md:px-9 xs:px-4 xxs:px-2 py-3 bg-black!
     text-white font-bold rounded-md overflow-hidden
     group cursor-pointer hover:scale-105 duration-300 text-xl xxs:text-sm"
        >
          <span
            className="absolute inset-7 bg-white! opacity-30
      rotate-45 -translate-x-full group-hover:translate-x-full
      blur-sm transition-transform duration-500"
          ></span>
          <span className="relative z-10"></span>
          Vercel
        </button>
        <button
          className="relative sm:px-8 md:px-10 xs:px-4 xxs:px-2 py-3 bg-black!
     text-white font-bold rounded-md overflow-hidden
     group cursor-pointer hover:scale-105 duration-300 text-xl xxs:text-sm"
        >
          <span
            className="absolute  inset-0 bg-white! opacity-30
      rotate-45 -translate-x-full group-hover:translate-x-full
      blur-sm transition-transform duration-500"
          ></span>
          <span className="relative z-10"></span>
          Postman
        </button>
        <button
          className="relative sm:px-8 md:px-5 xs:px-2.5 xxs:px-2 py-3 bg-black!
     text-white font-bold rounded-md overflow-hidden
     group cursor-pointer hover:scale-105 duration-300 text-xl xxs:text-sm"
        >
          <span
            className="absolute inset-0 bg-white! opacity-30
      rotate-45 -translate-x-full group-hover:translate-x-full
      blur-sm transition-transform duration-500"
          ></span>
          <span className="relative z-10"></span>
          GitHub
        </button>
      </div>
      
      {/* 5. Button Group 3: Centered at 2xl (2xl:justify-center) */}
      <div className="font-moralana flex gap-3 mt-4 mb-4 xxs:ml-5 2xl:ml-0 2xl:justify-center">
        <button
          className="relative sm:px-10 md:px-12 xs:px-5 xxs:px-4 py-3 bg-black!
     text-white font-bold rounded-md overflow-hidden
     group cursor-pointer hover:scale-105 duration-300 text-xl xxs:text-sm"
        >
          <span
            className="absolute inset-0 bg-white! opacity-30
      rotate-45 -translate-x-full group-hover:translate-x-full
      blur-sm transition-transform duration-500"
          ></span>
          <span className="relative z-10"></span>
          API's
        </button>
        {/* ... (other buttons) ... */}
        <button
          className="relative sm:px-10 mdd:px-15 xs:px-5 xxs:px-4 py-3 bg-black!
     text-white font-bold rounded-md overflow-hidden
     group cursor-pointer hover:scale-105 duration-300 text-xl xxs:text-sm"
        >
          <span
            className="absolute inset-0 bg-white! opacity-30
      rotate-45 -translate-x-full group-hover:translate-x-full
      blur-sm transition-transform duration-500"
          ></span>
          <span className="relative z-10"></span>
          JSON
        </button>
        <button
          className="relative sm:px-10 md:px-9 xs:px-5.5 xxs:px-4 py-3 bg-black!
     text-white font-bold rounded-md overflow-hidden
     group cursor-pointer hover:scale-105 duration-300 text-xl xxs:text-sm"
        >
          <span
            className="absolute inset-0 bg-white! opacity-30
      rotate-45 -translate-x-full group-hover:translate-x-full
      blur-sm transition-transform duration-500"
          ></span>
          <span className="relative z-10"></span>
          Netlify
        </button>
        <button
          className="relative sm:px-9 md:px-13 xs:px-6 xxs:px-4 py-3 bg-black!
     text-white font-bold rounded-md overflow-hidden
     group cursor-pointer hover:scale-105 duration-300 text-xl xxs:text-sm"
        >
          <span
            className="absolute inset-0 bg-white! opacity-30
      rotate-45 -translate-x-full group-hover:translate-x-full
      blur-sm transition-transform duration-500"
          ></span>
          <span className="relative z-10"></span>
          HTML
        </button>
        <button
          className="relative sm:px-9 md:px-12 xs:px-6 xxs:px-3 py-3 bg-black!
     text-white font-bold rounded-md overflow-hidden
     group cursor-pointer hover:scale-105 duration-300 text-xl xxs:text-sm"
        >
          <span
            className="absolute inset-0 bg-white! opacity-30
      rotate-45 -translate-x-full group-hover:translate-x-full
      blur-sm transition-transform duration-500"
          ></span>
          <span className="relative z-10"></span>
          CSS
        </button>
      </div>
    </div>
  );
}