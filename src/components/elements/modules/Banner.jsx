import { MdInfo } from "react-icons/md";
import { Link } from "react-router-dom";

const Banner = (props) => {
  return (
    <section>
      <section className="bg-slate-300 w-full flex items-center justify-between">
        <div className="container flex justify-between mx-auto w-full">
          <div className="bg-slate-400 h-96 w-1/3 flex flex-col gap-8 items-start p-12">
            <span className="text-5xl font-black w-full">
              {props.loading ? (
                <div className="flex flex-col gap-4">
                  <div className="h-12 w-full bg-zinc-700 animate-pulse"></div>
                  <div className="h-12 w-2/3 bg-zinc-700 animate-pulse"></div>
                  <div className="h-12 w-2/4 bg-zinc-700 animate-pulse"></div>
                  <div className="h-12 w-3/4 bg-zinc-700 animate-pulse"></div>
                </div>
              ) : (
                <div className="text-slate-700">
                  {props.title.slice(0, -2)}
                  <span className="text-slate-200">
                    {props.title.slice(-2)}
                  </span>
                </div>
              )}
            </span>
            {!props.loading && (
              <Link
                className="p-2 bg-slate-300 hover:bg-slate-200 transition-all duration-200"
                to="https://cke.gov.pl/"
                target="_blank"
              >
                <img
                  className="w-48"
                  src="https://upload.wikimedia.org/wikipedia/commons/7/71/Logo_CKE.png"
                />
              </Link>
            )}
          </div>
          <div className="h-96 w-2/3 flex flex-col gap-8 items-start py-12 pl-12">
            {!props.loading ? <h1 className="text-4xl flex items-center gap-4 MdOutlineInfo font-bold">
              <MdInfo />
              KRÓTKIE INFO NA TEMAT KWALIFIKACJI
            </h1> : <div className="w-full h-16 bg-zinc-600 animate-pulse"></div>}
            <div className="flex justify-between gap-8 w-full">
              {!props.loading ? (
                <div className="text-md font-bold p-4 bg-slate-200">
                  <h2 className="text-2xl mb-4">KIERUNEK</h2>

                  {props.kwalifikacje.map((kwalifikacja) => (
                    <p key={kwalifikacja}>
                      {props.typ}{" "}
                      <span className="text-slate-500">{kwalifikacja}</span>
                    </p>
                  ))}
                </div>
              ) : (
                <div className="text-md font-bold w-full h-36 bg-slate-200 animate-pulse"></div>
              )}
              {!props.loading && (
                <div className="text-md font-bold p-4 bg-slate-200">
                  <h2 className="text-2xl mb-4">OPIS</h2>
                  {props.opisy.map((opis) => (
                    <p key={opis}>{opis}</p>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Banner;
