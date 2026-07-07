export default function About() {
  return (
    <div className="flex flex-col items-start gap-5 pt-12 sm:pt-15 pb-10 px-5 bg-black">
      <div className="flex items-center gap-3 font-mono w-full">
        <p className="text-orange-500 text-md">01</p>
        <p className="text-gray-500 text-sm font-bold">ABOUT</p>
        <hr className="border-t border-white/20 flex-1" />
      </div>
      <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl text-white font-sora font-extrabold text-center">
        DESIGN<span className="text-orange-500">+</span>DEVELOPMENT
      </h1>
      <div className="flex flex-col md:flex-row gap-4 md:gap-8 font-sora w-full sm:w-[90%] md:w-[85%] lg:w-[75%] max-w-4xl text-sm sm:text-md sm:text-base text-left md:text-left">
        <p className="text-white">
          I'm a Full-Stack Web Developer and Computer Science graduate of Atlas
          School in Tulsa, Oklahoma. My journey into development is fueled by an
          early fascination with technology and graphic design.
        </p>
        <p className="text-white/60">
          This unique blend lets me craft applications that are not only
          technically sound but also highly intuitive and visually engaging —
          user-friendly solutions built across diverse web and mobile platforms.
        </p>
        <div className="flex text-2xl">
          <div className="flex flex-col">
            <p className="font-sora font-bold">20<span className="text-orange-500">mo</span></p>
            <p className="text-sm font-mono text-gray-400">IMMERSIVE PROGRAM</p>
          </div>
          <div className="flex flex-col">
            <p className="font-sora font-bold">Full-Stack</p>
            <p className="text-sm font-mono text-gray-400">FRONT · BACK · DEVOPS</p>
          </div>
          <div className="flex flex-col">
            <p className="font-sora font-bold">Web<span className="text-orange-500">+</span>Mobile</p>
            <p className="text-sm font-mono text-gray-400">REACT & REACT NATIVE</p>
          </div>
        </div>
      </div>
    </div>
  );
}
