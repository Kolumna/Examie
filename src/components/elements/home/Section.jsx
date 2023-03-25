import Kafel from "../../Kafel";

export default function Section(props) {
  const className = props.className ? props.className : "px-12";

  return (
    <section className={`${className} px-12`}>
      <section className="container flex items-center flex-col mx-auto">
        <div className="text-4xl font-black p-12 pt-20">
          <h1>{props.label}</h1>
        </div>
        <div className="flex justify-between w-full py-12">
          {props.kafle &&
            props.kafle.map((kafel) => (
              <Kafel
                key={kafel.nrKwalifikacji}
                nrKwalifikacji={kafel.nrKwalifikacji}
                kwalifikacje={[...kafel.kwalifikacje.name]}
                inf={props.inf}
                technik={props.technik}
                className={kafel.color}
              />
            ))}
          {props.content && (
            <div className="text-4xl font-black flex justify-center w-full text-yellow-500 p-12 pt-20">
              <h1>{props.content}</h1>
            </div>
          )}
        </div>
        <div className="p-12">
          <button className="bg-slate-400 text-slate-800 hover:bg-slate-300 transition-all duration-300 p-4 px-12 rounded-full font-black">
            WIĘCEJ
          </button>
        </div>
      </section>
    </section>
  );
}
