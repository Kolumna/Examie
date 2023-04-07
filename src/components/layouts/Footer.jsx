import { MdFavorite } from "react-icons/md";
import logoFotter from "../../assets/svgs/logoFooter.svg";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <section className="bg-amber-400 flex flex-col gap-10 p-12 items-center">
      <div className="font-black text-xl md:text-2xl flex items-center gap-2">
        MADE WITH{" "}
        <span className="text-red-600 text-3xl">
          <MdFavorite />
        </span>
      </div>
      <Link
        to="https://www.janiectheme.site/"
        target="_blank"
        className="font-black text-2xl"
      >
        <img width={320} height={"100%"} src={logoFotter} alt="logo Examie" />
      </Link>
      {/* <div className="flex gap-4">
        <div className="hover:bg-zinc-800 btn-anim cursor-pointer w-8 h-8 text-sm md:text-lg md:w-12 md:h-12 bg-zinc-900 rounded-full flex justify-center items-center text-yellow-500 font-bold">
          FB
        </div>
        <div className="hover:bg-zinc-800 btn-anim cursor-pointer w-8 h-8 text-sm md:text-lg md:w-12 md:h-12 bg-zinc-900 rounded-full flex justify-center items-center text-yellow-500 font-bold">
          IN
        </div>
        <div className="hover:bg-zinc-800 btn-anim cursor-pointer w-8 h-8 text-sm md:text-lg md:w-12 md:h-12 bg-zinc-900 rounded-full flex justify-center items-center text-yellow-500 font-bold">
          GG
        </div>
        <div className="hover:bg-zinc-800 btn-anim cursor-pointer w-8 h-8 text-sm md:text-lg md:w-12 md:h-12 bg-zinc-900 rounded-full flex justify-center items-center text-yellow-500 font-bold">
          YT
        </div>
      </div> */}
      <div className="font-black text-sm md:text-lg">
        &#169;2023 JaniecParadaise
      </div>
    </section>
  );
}
