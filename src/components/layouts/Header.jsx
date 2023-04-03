import { Link } from "react-router-dom";
import examieLogo from "../../assets/svgs/logo.svg";
import { MdAccountCircle } from "react-icons/md";

export default function Header() {
  return (
    <section className="px-8 md:px-12 bg-slate-50 py-6 w-full flex items-center">
      <div className="flex justify-between w-full container mx-auto">
        <div className="flex gap-12 items-center">
          <Link to="/">
            <img className="h-8 md:h-12" src={examieLogo} alt="Examie logo" />
          </Link>
          <div className="gap-4 hidden md:flex">
            <Link to="/about">
              <button className="bg-yellow-500 hover:bg-red-400 transition-all duration-300 p-2 px-6 text-xs rounded-full text-zinc-900 font-extrabold">
                ARENA
              </button>
            </Link>
            <Link to="/about">
              <button className="bg-yellow-500 hover:bg-yellow-400 transition-all duration-300 p-2 px-6 text-xs rounded-full text-zinc-900 font-extrabold">
                ARKUSZE
              </button>
            </Link>
            <Link to="/about">
              <button className="bg-yellow-500 hover:bg-yellow-400 transition-all duration-300 p-2 px-6 text-xs rounded-full text-zinc-900 font-extrabold">
                FORUM
              </button>
            </Link>
          </div>
        </div>
        <div className="items-center hidden md:flex">
          <Link to="/profile" className="bg-yellow-500 hover:bg-yellow-400 transition-all duration-300 p-2 text-xl rounded-full text-zinc-90 font-extrabold">
            <MdAccountCircle/>
          </Link>
        </div>
      </div>
    </section>
  );
}
