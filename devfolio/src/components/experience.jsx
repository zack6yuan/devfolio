export default function Experience() {
  return (
    <div className="text-black text-xl flex flex-col items-center justify-center">
      <h1 className="font-moralana text-center sm:text-5xl sm:mt-10 md:text-6xl xs:text-5xl lg:mb-2 xxs:text-3xl">
        Education
      </h1>
      <p className="font-moralana text-center max-w-lg sm:text-md xs:text-lg xs:mt-4 lg:text-xl xxs:text-sm xxs:mt-2 px-4">
        I'm a Full-Stack Web Developer and Computer Science student at{" "}
        <span className="text-[#64cfb2] hover:text-black transition duration-300">
          <a href="https://www.atlasschool.com/">Atlas School</a>
        </span>{" "}
        in Tulsa, Oklahoma. I specialize in developing user-friendly solutions
        across diverse platforms, leveraging my proficiency with various
        computing and mobile technologies.
      </p>
    </div>
  );
}