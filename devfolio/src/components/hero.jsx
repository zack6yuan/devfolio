import ActionButtons from "./actionButtons";

export default function HeroSection() {
  return (
    <div className="flex flex-col">
      <div className=" text-black h-50 text-center xs:-mt-40">
        <div className="">
          <h1 className="2xl:text-7xl xl:text-6xl lg:text-6xl md:text-6xl sm:text-6xl xs:text-5xl xs:mb-3 xxs:text-6xl font-moralana">
            Versatility in Action
          </h1>
        </div>
        <div className="2xl:text-2xl xl:text-xl lg:text-xl md:text-xl sm:text-xl xs:text-lg xs:mb-25 xxs:text-xl">
          <p className="font-moralana">
            From code architecture, to pixel-perfect UI
          </p>
          <ActionButtons />
        </div>
      </div>
    </div>
  );
}
