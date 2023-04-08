import { MdBuild } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Kafel(props) {
  const className = props.className ? props.className : "";

  return (
    <>
      <Link to={`/modules/inf${props.nrKwalifikacji}`}>
        <div
          className={`p-6 ${
            !props.active ? "justify-between" : "justify-end"
          } h-64 w-96 hover:bg-amber-400 border-[6px] hover:border-amber-400 items-start transition-all duration-200 rounded-xl flex flex-col ${className}`}
        >
          {!props.active && (
            <span className="font-black flex items-center gap-2 text-slate-50 bg-orange-500 p-1 px-2 rounded-lg">
              <MdBuild /> W TRAKTCIE TWORZENIA
            </span>
          )}
          <div>
            <div className="text-slate-50 font-black">
              {props.kwalifikacje.map((kwalifikacja) => (
                <p key={kwalifikacja}>
                  <span className="text-zinc-900">
                    {props.technik ? "TECHNIK" : "BRAK"}
                  </span>{" "}
                  {kwalifikacja}
                </p>
              ))}
            </div>
            <p className="text-7xl text-slate-50 font-black">
              <span className="text-zinc-900">
                {props.inf ? "INF" : "BRAK"}
              </span>
              {props.nrKwalifikacji}
            </p>
          </div>
        </div>
      </Link>
    </>
  );
}
