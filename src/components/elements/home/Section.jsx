import { Link } from "react-router-dom";
import Kafel from "../../Kafel";
import ModulesView from "../../views/ModulesView";

export default function Section(props) {
  const className = props.className ? props.className : "px-12";

  return (
    <section className={`${className} px-8 md:px-12`}>
      <section className="container flex items-center flex-col mx-auto">
        <div className="text-4xl font-black p-12 pt-20">
          <h1 className="text-center">{props.label}</h1>
        </div>
        <div className="flex justify-between w-full md:py-12">
          {props.kafle && <ModulesView all />}
          {props.content && (
            <div className="md:text-4xl font-black flex justify-center w-full text-white p-12 pt-20">
              <h1 className="bg-slate-400 p-4 px-8 rounded-2xl text-center">
                {props.content}
              </h1>
            </div>
          )}
        </div>
        <div className="p-12">
          <Link
            to="/learning"
            className="bg-slate-300 text-xs md:text-md text-slate-800 hover:bg-amber-400 transition-all duration-300 p-4 px-12 rounded-full font-black"
          >
            WIĘCEJ
          </Link>
        </div>
      </section>
    </section>
  );
}
