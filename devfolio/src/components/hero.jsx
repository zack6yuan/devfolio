import ActionButtons from "./actionButtons";

export default function HeroSection() {
  return (
    <div className="flex flex-col md:ml-10">
      <div className=" text-white h-50 justify-center text-left md:w-100 sm:mt-50 md:-mt-50 xs:mt-50">
        <div className="">
          <h1 className="2xl:text-7xl 2xl:w-107 xl:text-6xl lg:text-6xl md:text-6xl sm:text-7xl xs:text-7xl xxs:text-6xl">Hi, I'm <span className="text-[#ff7400]!">Zack</span>. 👋</h1>
        </div>
        <div className="2xl:text-2xl 2xl:w-107 xl:text-xl lg:text-xl md:text-xl md:w-200 sm:text-2xl sm:mb-25 xs:text-2xl xs:mb-25 xxs:text-xl">
          <p>Full Stack React Developer: Web to Native</p>
        </div>
        <div className="md:-mt-20">
          <ActionButtons />
        </div>
      </div>
    </div>
  );
}
