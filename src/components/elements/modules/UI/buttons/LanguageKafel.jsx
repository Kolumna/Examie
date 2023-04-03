import { Link } from "react-router-dom";

const LanguageKafel = (props) => {
  const param = props.language.toLowerCase();

  return (
    <Link
      to={`/learning/${param}`}
      className="bg-slate-300 transition-all duration-200 hover:bg-yellow-500 flex-col border-8 border-zinc-900 p-12 flex justify-center items-center text-4xl font-bold"
    >
      <span className="text-2xl font-black">{props.language}</span>
    </Link>
  );
};

export default LanguageKafel;
