import examieLogo from "../../assets/svgs/logo.svg";

export default function Header() {
  return (
    <header className="px-12 bg-slate-100 py-6 w-full flex items-center">
      <div className="flex justify-between w-full">
        <div className="flex gap-12">
          <a href="#">
            <img className="h-12" src={examieLogo} alt="Examie logo" />
          </a>
          <div className="flex items-center">
            <button className="bg-yellow-500 hover:bg-yellow-600 transition-all duration-300 p-2 px-6 text-sm rounded-full text-slate-50 font-black">
              O NAS
            </button>
          </div>
        </div>
        <div className="flex items-center">
          <button className="bg-yellow-500 hover:bg-yellow-600 transition-all duration-300 p-2 px-6 text-sm rounded-full text-slate-50 font-black">
            ZALOGUJ
          </button>
        </div>
      </div>
    </header>
  );
}
