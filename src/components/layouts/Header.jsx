import { Link } from "react-router-dom";
import examieLogo from "../../assets/svgs/logo2.svg";
import { MdAccountCircle } from "react-icons/md";
import arenaLogo from "../../assets/svgs/arenaLogo.svg";

export default function Header() {
  return (
    <section className="px-8 bg-slate-50 py-5 w-full flex items-center">
      <div className="flex justify-between w-full">
        <div className="flex gap-12 items-center">
          <Link to="/">
            <img
              height={"100%"}
              width={"100%"}
              className="h-8 md:h-12"
              src={examieLogo}
              alt="Examie logo"
            />
          </Link>
          <div className="gap-4 hidden md:flex">
            <Link to="/learning">
              <button className="bg-amber-400 hover:bg-amber-300 transition-all duration-300 p-2 px-6 text-xs rounded-full text-zinc-900 font-extrabold">
                NAUKA
              </button>
            </Link>
            <Link to="/sheets">
              <button className="bg-amber-400 hover:bg-amber-300 transition-all duration-300 p-2 px-6 text-xs rounded-full text-zinc-900 font-extrabold">
                ARKUSZE
              </button>
            </Link>
            <Link to="/forum">
              <button className="bg-amber-400 hover:bg-amber-300 transition-all duration-300 p-2 px-6 text-xs rounded-full text-zinc-900 font-extrabold">
                FORUM
              </button>
            </Link>
          </div>
        </div>
        <div className="items-center gap-4 hidden md:flex">
          <Link to="https://examie-arena.vercel.app/" target="_blank">
            <button className="bg-red-500 hover:bg-red-400 flex gap-2 transition-all duration-300 p-2 px-4 text-xs rounded-full text-slate-50 font-extrabold">
              ARENA
              <img height={"100%"} width={16} src={arenaLogo} />
            </button>
          </Link>
          <Link
            to="/login"
            className="bg-amber-400 hover:bg-amber-300 transition-all duration-300 p-2 text-xl rounded-full text-zinc-90 font-extrabold"
          >
            <MdAccountCircle />
          </Link>
        </div>
      </div>
    </section>
  );
}
