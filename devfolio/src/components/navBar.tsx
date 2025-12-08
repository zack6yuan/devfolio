export default function navBar() {
  return (
    <div className="text-white flex justify-between">
      <div className="flex-row">
        <p className="text-3xl">Zack Yuan</p>
      </div>
      <div className="flex flex-row gap-10 text-xl">
        <a href="#">
          <p className="hover:text-[#ff7400]! transition ease-in-out">My Experience</p>
        </a>
        <a href="#">
          <p className="hover:text-[#ff7400]! transition ease-in-out">Tech Stack</p>
        </a>
        <a href="#">
          <p className="hover:text-[#ff7400]! transition ease-in-out">Projects</p>
        </a>
        <a href="#">
          <p className="hover:text-[#ff7400]! transition ease-in-out">Connect</p>
        </a>
      </div>
    </div>
  )
}