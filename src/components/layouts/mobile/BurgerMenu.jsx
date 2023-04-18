import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
import arenaLogo from "../../../assets/svgs/arenaLogo.svg";

const BurgerMenu = (props) => {
  return (
    <section
      className={`absolute ${
        !props.isMobile ? "translate-x-full" : "translate-x-0"
      } w-full transition-all flex flex-col justify-start items-end p-4 ease-in-out duration-500 h-screen top-0 left-0 z-50 bg-amber-400`}
    >
      <button
        onClick={() => {
          props.setIsMobile(false);
        }}
      >
        <div className="text-4xl">
          <MdClose />
        </div>
      </button>
      <div className="flex w-full flex-col gap-4 mt-4">
        <Link
          to="/learning"
          className="bg-white hover:bg-slate-100 btn-anim w-full rounded-xl p-4 font-bold text-center"
        >
          <div className="w-full">NAUKA</div>
        </Link>
        <Link
          to="/arkusuze"
          className="bg-white hover:bg-slate-100 btn-anim w-full rounded-xl p-4 font-bold text-center"
        >
          <div className="w-full">AKURSZE</div>
        </Link>
        <Link
          to="/about"
          className="bg-white hover:bg-slate-100 btn-anim w-full rounded-xl p-4 font-bold text-center"
        >
          <div className="w-full">O NAS</div>
        </Link>
      </div>
      <div className="flex w-full flex-col gap-4 mt-8 bg-amber-300 p-4 rounded-xl">
        <Link
          to="https://examie-arena.vercel.app/"
          target="_blank"
          className="bg-red-400 text-white hover:bg-red-500 btn-anim w-full rounded-xl p-4 font-bold text-center"
        >
          <div className="w-full flex justify-center gap-2 items-center">
            <img height={"100%"} width={16} src={arenaLogo} />
            ARENA
          </div>
        </Link>
        {props.auth ? (
          <button
            onClick={() => {
              props.setAuth(false);
            }}
            className="bg-gray-400 text-white hover:bg-gray-500 btn-anim w-full rounded-xl p-4 font-bold text-center"
          >
            <div className="w-full">WYLOGU</div>
          </button>
        ) : (
          <Link
            to="/login"
            className="bg-gray-400 text-white hover:bg-gray-500 btn-anim w-full rounded-xl p-4 font-bold text-center"
          >
            <div className="w-full">ZALOGUJ</div>
          </Link>
        )}
      </div>
    </section>
  );
};

export default BurgerMenu;
