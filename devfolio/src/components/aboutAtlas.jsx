import AtlasLogo from "../assets/AtlasLogo.png"

export default function Development() {
  return (
    <div className="text-white text-xl flex items-center justify-between">
      <h1 className="text-5xl">What is Atlas School?</h1>
      <img src={AtlasLogo} alt="" className="w-20 h-20" />
      <p className="text-right w-150">My software engineering education at Atlas School, a 20-month peer and project-based program in Tulsa, Oklahoma, took me from the basics of C programming to the complexities of Full-Stack Web Development, covering Front-End, Back-End, and DevOps.</p>
    </div>
  )
}