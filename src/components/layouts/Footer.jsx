import { MdFavorite } from "react-icons/md";
import logoFotter from "../../assets/svgs/logoFooter.svg";
import { Link } from "react-router-dom";

export default function Footer(props) {
  return (
    <footer className="bg-yellow-500 flex flex-col gap-12 p-12 items-center">
      <div className="font-black text-2xl flex items-center gap-2">
        MADE WITH{" "}
        <span className="text-red-600 text-3xl">
          <MdFavorite />
        </span>
      </div>
      <Link to="https://www.janiectheme.site/" target="_blank" className="font-black text-2xl">
        <img className="h-24" src={logoFotter} />
      </Link>
      <div className="flex gap-4">
        <div className="w-12 h-12 bg-zinc-900 rounded-full flex justify-center items-center text-yellow-500 font-bold">
          FB
        </div>
        <div className="w-12 h-12 bg-zinc-900 rounded-full flex justify-center items-center text-yellow-500 font-bold">
          IN
        </div>
        <div className="w-12 h-12 bg-zinc-900 rounded-full flex justify-center items-center text-yellow-500 font-bold">
          GG
        </div>
        <div className="w-12 h-12 bg-zinc-900 rounded-full flex justify-center items-center text-yellow-500 font-bold">
          YT
        </div>
      </div>
      <div className="font-black text-lg">&#169;2023</div>
    </footer>
  );
}
