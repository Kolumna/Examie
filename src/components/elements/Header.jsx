import { Link } from "react-router-dom";
import examieLogo from "../../assets/svgs/logo.svg";

export default function Header() {
  return (
    <header className="px-12 bg-slate-100 py-6 w-full flex items-center">
      <div className="flex justify-between w-full max-w-7xl mx-auto">
        <div className="flex gap-12">
          <Link to="/">
            <img className="h-12" src={examieLogo} alt="Examie logo" />
          </Link>
          <div className="flex items-center">
            <Link to="o-nas">
              <button className="bg-yellow-500 hover:bg-yellow-600 transition-all duration-300 p-2 px-6 text-xs rounded-full text-slate-50 font-black">
                O NAS
              </button>
            </Link>
          </div>
        </div>
        <div className="flex items-center">
          <button className="bg-yellow-500 hover:bg-yellow-600 transition-all duration-300 p-2 px-6 text-xs rounded-full text-slate-50 font-black">
            ZALOGUJ
          </button>
        </div>
      </div>
    </header>
  );
}
