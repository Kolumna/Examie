import { Link } from "react-router-dom";
import examieLogo from "../../assets/svgs/logo.svg";

export default function Header() {
  return (
    <header className="px-12 bg-slate-100 py-6 w-full flex items-center">
      <div className="flex justify-between w-full container mx-auto">
        <div className="flex gap-12 items-center">
          <Link to="/">
            <img className="h-12" src={examieLogo} alt="Examie logo" />
          </Link>
          <div className="flex gap-4">
            <Link to="/about">
              <button className="bg-yellow-500 hover:bg-yellow-400 transition-all duration-300 p-2 px-6 text-xs rounded-full text-zinc-900 font-extrabold">
                O NAS
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
        <div className="flex items-center">
          <button className="bg-yellow-500 hover:bg-yellow-400 transition-all duration-300 p-2 px-6 text-xs rounded-full text-zinc-90 font-extrabold">
            ZALOGUJ
          </button>
        </div>
      </div>
    </header>
  );
}
