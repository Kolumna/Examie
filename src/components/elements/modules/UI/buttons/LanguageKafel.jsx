import { Link } from "react-router-dom";
import IconCorrect from "../../../../icons/IconCorrect";
import useAuth from "../../../../../hooks/useAuth";
import axios from "axios";

const LanguageKafel = (props) => {
  const param = props.language.toLowerCase();
  const auth = props.auth;

  const getLength = async () => {
    const res = await axios.get(
      `https://examie-default-rtdb.europe-west1.firebasedatabase.app/courses/${props.language.toLowerCase()}/-NSfWdM8rl_o2NdybVHQ/modules.json?shallow=true`
    );
  };

  return (
    <Link
      to={`/learning/${param}`}
      className="bg-slate-200 gap-8 transition-all duration-200 hover:bg-amber-400 border-[8px] border-zinc-900 p-5 pt-12 flex justify-between items-end text-4xl font-bold"
    >
      <div className="w-full flex flex-col justify-end gap-4">
        <span className="text-4xl font-black">{props.language}</span>
        {props.progress && auth && (
          <div className="flex gap-2 bg-slate-500 rounded-full pr-2">
            <div className="h-5 flex justify-start items-center w-full bg-zinc-900 rounded-full">
              <div
                style={{ width: `${props.progress ?? 0}%` }}
                className={`h-full bg-amber-400 border-4 border-black rounded-full transition-all duration-200`}
              ></div>
            </div>
            <span className="text-sm text-white">{props.progress}%</span>
          </div>
        )}
        {!props.progress && (
          <span className="text-sm">
            {auth ? "NIE ROZPOCZĘTO" : "ZALOGUJ SIĘ ABY ŚLEDZIĆ POSTĘP"}
          </span>
        )}
      </div>
      {/* {!props.complete && (
        <div className="w-full flex justify-end">
          <div className="h-4 flex justify-start items-center w-full bg-zinc-900 rounded-full">
            <div className="h-4 w-1/3 bg-yellow-500 border-4 border-black rounded-full"></div>
          </div>
        </div>
      )} */}
      {props.complete && (
        <div className="flex justify-end">
          <IconCorrect />
        </div>
      )}
    </Link>
  );
};

export default LanguageKafel;
