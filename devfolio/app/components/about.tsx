export default function About() {
  return (
    <div id="about" className="flex flex-col items-start gap-5 pt-12 sm:pt-15 pb-10 px-5 bg-black">
      <div className="flex items-center gap-3 font-mono w-full">
        <p className="text-orange-500 text-base">01</p>
        <p className="text-gray-500 text-sm font-bold">ABOUT</p>
        <hr className="border-t border-white/20 flex-1" />
      </div>
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl text-white font-sora font-extrabold text-left wrap-break-word">
        DESIGN<span className="text-orange-500">+</span>DEVELOPMENT
      </h1>
      <div className="flex flex-col gap-8 lg:gap-10 font-sora w-full sm:w-[90%] md:w-[85%] lg:w-[75%] max-w-4xl 2xl:max-w-5xl">
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 text-sm sm:text-base lg:text-lg xl:text-xl text-left">
          <p className="text-white flex-1">
            I&apos;m a Full-Stack Web Developer and Computer Science graduate of
            Atlas School in Tulsa, Oklahoma. Technology and graphic design pulled
            me in early, and the pull between the two is still what drives my work.
          </p>
          <p className="text-white flex-1">
            I&apos;m a developer who cares about the whole picture — the code that
            makes things run and the design that makes them worth using. I build
            web and mobile apps that hold up over time and feel good to use.
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-8">
          <div className="flex flex-col">
            <p className="font-sora font-bold text-lg sm:text-2xl xl:text-3xl">20<span className="text-orange-500">mo</span></p>
            <p className="text-xs sm:text-sm xl:text-base font-mono text-gray-400">IMMERSIVE PROGRAM</p>
          </div>
          <div className="flex flex-col">
            <p className="font-sora font-bold text-lg sm:text-2xl xl:text-3xl">Full<span className="text-orange-500">-</span>Stack</p>
            <p className="text-xs sm:text-sm xl:text-base font-mono text-gray-400">FRONT · BACK · DEVOPS</p>
          </div>
          <div className="flex flex-col">
            <p className="font-sora font-bold text-lg sm:text-2xl xl:text-3xl">Web<span className="text-orange-500">+</span>Mobile</p>
            <p className="text-xs sm:text-sm xl:text-base font-mono text-gray-400">REACT & REACT NATIVE</p>
          </div>
          <div className="flex flex-col">
            <p className="font-sora font-bold text-lg sm:text-2xl xl:text-3xl">AI<span className="text-orange-500">-</span>Powered Workflows</p>
            <p className="text-xs sm:text-sm xl:text-base font-mono text-gray-400">AUGMENTED, NOT AUTOMATED</p>
          </div>
        </div>
      </div>
    </div>
  );
}
