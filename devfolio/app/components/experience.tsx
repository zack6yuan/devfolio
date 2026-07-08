export default function Experience() {
    return (
      <div id="experience" className="flex flex-col items-start gap-5 pt-12 sm:pt-15 pb-10 px-5 bg-black">
        <div className="flex items-center gap-3 font-mono w-full">
          <p className="text-orange-500 text-base">04</p>
          <p className="text-gray-500 text-sm font-bold">EXPERIENCE & EDUCATION</p>
          <hr className="border-t border-white/20 flex-1" />
        </div>
  
        <h1 className="text-3xl w-full text-left sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl text-white font-sora font-extrabold wrap-break-word">
          EXPERIENCE<span className="text-orange-500">+</span>EDUCATION
        </h1>

        <div className="flex flex-col gap-8 font-sora w-full text-sm sm:text-base text-left">
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-8">
            <div className="w-24 shrink-0">
              <p className="font-mono text-sm lg:text-base text-orange-500 font-bold">PRESENT</p>
            </div>
            <div className="flex flex-col flex-1">
              <p className="font-sora font-bold text-lg lg:text-2xl">Web Developer</p>
              <p className="text-sm lg:text-base text-white">Leadline Performance Marketing</p>
              <p className="text-sm lg:text-base text-gray-400 mt-1">
                Building and shipping full-stack web experiences — turning
                marketing strategy into fast, reliable, design-minded product.
              </p>
            </div>
            <div className="w-28 shrink-0 sm:text-right">
              <p className="font-mono text-sm lg:text-base text-gray-500 font-bold">TULSA, OK</p>
            </div>
          </div>

          <hr className="border-t border-white/20" />

          <div className="flex flex-col sm:flex-row gap-2 sm:gap-8">
            <div className="w-24 shrink-0 hidden sm:block" aria-hidden="true" />
            <div className="flex flex-col flex-1">
              <p className="font-sora font-bold text-lg lg:text-2xl">Full-Stack Web Development</p>
              <p className="text-sm lg:text-base text-white">Atlas School</p>
              <p className="text-sm lg:text-base text-gray-400 mt-1">
              A peer-and project based software engineering program took me from the basics of C programming to the complexities of full-stack web development covering Front-End, Back-End, and DevOps
              </p>
            </div>
            <div className="w-28 shrink-0 sm:text-right">
              <p className="font-mono text-sm lg:text-base text-gray-500 font-bold">TULSA, OK</p>
            </div>
          </div>
        </div>
      </div>
    );
  }