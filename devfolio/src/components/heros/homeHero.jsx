import ActionButtons from "../actionButtons";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <div className="flex flex-col">
      <div className=" text-black h-50 text-center xs:-mt-40">
        <div className="">
          <h1 className="2xl:text-7xl xl:text-6xl lg:text-6xl md:text-6xl sm:text-6xl xxs:text-4xl xs:mb-3 font-moralana">
            Versatility in Action
          </h1>
        </div>
        <div className="2xl:text-2xl xl:text-xl lg:text-xl md:text-xl sm:text-xl xs:text-lg xs:mb-25 xxs:text-md">
          <p className="font-moralana">
            From code architecture, to pixel-perfect UI
          </p>
          <Link to="/about">
            <div className="">
              <ActionButtons />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
