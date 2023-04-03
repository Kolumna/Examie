import { Link } from "react-router-dom";

export default function Kafel(props) {
  const className = props.className
    ? props.className
    : "bg-slate-400 p-6 h-64 w-96 rounded-xl flex flex-col justify-end";

  return (
    <>
      <Link to={`/modules/inf${props.nrKwalifikacji}`}>
        <div
          className={`p-6 h-64 w-96 hover:bg-yellow-500 transition-all duration-200 rounded-xl flex flex-col justify-end ${className}`}
        >
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
            <span className="text-zinc-900">{props.inf ? "INF" : "BRAK"}</span>
            {props.nrKwalifikacji}
          </p>
        </div>
      </Link>
    </>
  );
}
