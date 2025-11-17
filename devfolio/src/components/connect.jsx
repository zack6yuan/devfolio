export default function Connect() {
  return (
    <div className="flex flex-col items-center">
      <div className="">
        <h1 className="text-6xl text-white mb-8">
          Connect with me!
        </h1>
      </div>
      <div className="text-white text-xl justify-between mb-8">
        <p className="text-center w-300">
          I am actively seeking a Full-Stack or UX / UI role where I can leverage my expertise in the React ecosystem to build cohesive, high-performance web and mobile applications. Whether you're interested in discussing a potential opportunity, collaborating on a new project, or just connecting about development, I'm always open to a conversation. Let's build something great together.
        </p>
      </div>
      <div className="flex flex-col gap-3">
        <input type="text" className="border border-white p-4 w-60 placeholder-white text-white rounded-md" placeholder="Name" />
        <input type="text" className="border border-white p-4 w-60 placeholder-white text-white rounded-md" placeholder="Email" />
        <input type="text" className="border border-white p-4 w-60 placeholder-white text-white rounded-md" placeholder="Inquiry" />
      </div>
      <div className="ml-2 mt-5">
        <button
        className="relative px-23 py-3 bg-[#ff7400]!
     text-white font-bold rounded-md overflow-hidden
     group cursor-pointer hover:scale-105 duration-300 text-xl mr-2"
      >
        <span
          className="absolute inset-0 bg-white! opacity-30
      rotate-45 -translate-x-full group-hover:translate-x-full
      blur-sm transition-transform duration-500"
        ></span>
        <span className="relative z-10"></span>
        Submit
      </button>
      </div>
    </div>
  );
}