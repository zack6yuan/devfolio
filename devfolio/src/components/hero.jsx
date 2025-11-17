import ActionButtons from "./actionButtons";

export default function HeroSection() {
  return (
    <div className="">
      <div className=" text-white h-50 justify-center text-left">
        <div className="">
          <h1 className="2xl:text-7xl xl:text-6xl lg:text-5xl">Hi, I'm <span className="text-[#ff7400]!">Zack</span>. 👋</h1>
        </div>
        <div className="2xl:text-2xl xl:text-xl lg:text-md">
          <p>Full Stack React Developer: Web to Native</p>
        </div>
        <div className="">
          <ActionButtons />
        </div>
      </div>
    </div>
  );
}
