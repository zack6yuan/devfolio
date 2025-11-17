import ActionButtons from "./actionButtons";
import SocialLinks from "./socialLinks";

export default function HeroSection() {
  return (
    <div className="">
      <div className=" text-white h-50 justify-center text-left">
        <div className="">
          <h1 className="text-7xl">Hi, I'm Zack!</h1>
        </div>
        <div className="text-2xl">
          <p>I'm a Full-Stack Developer from Tulsa, Oklahoma</p>
        </div>
        <div className="">
          <ActionButtons />
        </div>
      </div>
    </div>
  );
}
