import { Link } from "react-router-dom";
import examieLogo from "../../assets/svgs/logo2.svg";
import {
  MdAccountCircle,
  MdContrast,
  MdHelp,
  MdTextDecrease,
  MdTextIncrease,
} from "react-icons/md";
import arenaLogo from "../../assets/svgs/arenaLogo.svg";

export default function Header() {
  return (
    <section className="px-8 bg-slate-50 py-5 w-full flex items-center shadow-md">
      <div className="flex justify-between w-full">
        <div className="flex gap-12 items-center">
          <Link title="Wróć do strony głównej" to="/">
            <img
              height={"100%"}
              width={"100%"}
              className="h-8 md:h-12"
              src={examieLogo}
              alt="Examie logo"
            />
          </Link>
          <div className="gap-4 hidden md:flex">
            <Link title="Nauka" to="/learning">
              <button className="bg-amber-400 hover:bg-amber-300 transition-all duration-300 p-2 px-6 text-xs rounded-full text-zinc-900 font-extrabold">
                NAUKA
              </button>
            </Link>
            <Link title="Arkusze" to="/sheets">
              <button className="bg-amber-400 hover:bg-amber-300 transition-all duration-300 p-2 px-6 text-xs rounded-full text-zinc-900 font-extrabold">
                ARKUSZE
              </button>
            </Link>
            <Link title="Forum" to="/forum">
              <button className="bg-amber-400 hover:bg-amber-300 transition-all duration-300 p-2 px-6 text-xs rounded-full text-zinc-900 font-extrabold">
                FORUM
              </button>
            </Link>
            <Link title="O nas" to="/about">
              <button className="bg-amber-400 hover:bg-amber-300 transition-all duration-300 p-2 text-md rounded-full text-zinc-90 font-extrabold">
                <MdHelp />
              </button>
            </Link>
          </div>
        </div>
        <div className="items-center gap-4 hidden md:flex">
          <button
            title="wersja kontrastowa"
            className="font-black bg-slate-200 hover:bg-slate-300 btn-anim w-8 h-8 rounded-full flex justify-center items-center"
          >
            <MdContrast />
          </button>
          <button
            title="zmniejsz wielkość czcionki"
            className="font-black bg-slate-200 hover:bg-slate-300 btn-anim w-8 h-8 rounded-full flex justify-center items-center"
          >
            <MdTextDecrease />
          </button>
          <button
            title="zwiększ wielkość czcionki"
            className="font-black bg-slate-200 hover:bg-slate-300 btn-anim w-8 h-8 rounded-full flex justify-center items-center"
          >
            <MdTextIncrease />
          </button>
          <Link
            title="Examie arena"
            to="https://examie-arena.vercel.app/"
            target="_blank"
          >
            <button className="bg-red-500 hover:bg-red-400 flex gap-2 transition-all duration-300 p-2 px-4 text-xs rounded-full text-slate-50 font-extrabold">
              ARENA
              <img height={"100%"} width={16} src={arenaLogo} />
            </button>
          </Link>
          <Link
            title="Twoje konto"
            to="/login"
            className="bg-amber-400 hover:bg-amber-300 transition-all duration-300 p-2 text-md rounded-full text-zinc-90 font-extrabold"
          >
            <MdAccountCircle />
          </Link>
        </div>
      </div>
    </section>
  );
}
