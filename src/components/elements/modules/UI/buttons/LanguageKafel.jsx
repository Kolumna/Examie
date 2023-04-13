import { Link } from "react-router-dom";
import IconCorrect from "../../../../icons/IconCorrect";

const LanguageKafel = (props) => {
  const param = props.language.toLowerCase();

  return (
    <Link
      to={`/learning/${param}`}
      className="bg-slate-200 gap-8 transition-all duration-200 hover:bg-yellow-500 border-[8px] border-zinc-900 p-8 flex justify-between items-center text-4xl font-bold"
    >
      <div className="w-full flex justify-center">
        <span className="text-2xl font-black">{props.language}</span>
      </div>
      {!props.complete && (
        <div className="w-full flex justify-end">
          <div className="h-4 flex justify-start items-center w-full bg-zinc-900 rounded-full">
            <div className="h-4 w-1/3 bg-yellow-500 border-4 border-black rounded-full"></div>
          </div>
        </div>
      )}
      {props.complete && (
        <div className="flex justify-end">
          <IconCorrect/>
        </div>
      )}
    </Link>
  );
};

export default LanguageKafel;
