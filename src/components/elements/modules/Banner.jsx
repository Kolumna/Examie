import { MdHelp, MdInfo } from "react-icons/md";
import { Link } from "react-router-dom";

const Banner = (props) => {
  return (
    <section className="bg-slate-200 w-full flex items-center justify-between">
      <div className="lg:container flex flex-col md:flex-row justify-between mx-auto w-full">
        <div
          className={`${props.bgColor} flex py-8 md:py-0 md:w-1/3 md:flex-col gap-8 justify-between items-center md:items-start px-4 md:px-12`}
        >
          <div className="text-5xl md:text-6xl xl:text-8xl font-black w-full">
            {props.loading ? (
              // <div className="flex flex-col gap-4">
              //   <div className="h-12 w-full bg-zinc-700 animate-pulse"></div>
              //   <div className="h-12 w-2/3 bg-zinc-700 animate-pulse"></div>
              //   <div className="h-12 w-2/4 bg-zinc-700 animate-pulse"></div>
              //   <div className="h-12 w-3/4 bg-zinc-700 animate-pulse"></div>
              // </div>
              <span className="text-sm lg:text-xl">Ładowanie...</span>
            ) : (
              <div className={`flex flex-col items-center md:items-start md:pt-8 gap-2 ${props.text}`}>
                <div className={props.text}>
                  {props.title.slice(0, -2)}
                  <span className="text-slate-100">
                    {props.title.slice(-2)}
                  </span>
                </div>
                <span className="text-sm md:text-xl xl:text-3xl">KWALIFIKACJA</span>
              </div>
            )}
          </div>
          {!props.loading && (
            <div className="hidden md:flex flex-col gap-2">
              <Link
                className="p-2 bg-slate-300 hover:bg-slate-200 transition-all duration-200"
                to="https://cke.gov.pl/"
                target="_blank"
              >
                <img
                  className="w-24 md:w-36 xl:w-48"
                  src="https://upload.wikimedia.org/wikipedia/commons/7/71/Logo_CKE.png"
                />
              </Link>
              <span className="text-slate-700 p-2 px-4 text-xs md:text-sm xl:text-md text-center bg-slate-300 font-bold">
                ORGAN CERTYFIKUJĄCY
              </span>
            </div>
          )}
        </div>
        <div className="lg:h-96 md:w-2/3 flex flex-col gap-12 items-start py-12 px-4 md:px-0 md:pl-12">
          {!props.loading ? (
            <h1 className="md:text-2xl xl:text-4xl flex items-center gap-4 font-black">
              <MdInfo />
              KRÓTKIE INFO NA TEMAT KWALIFIKACJI
            </h1>
          ) : (
            <div className="w-full h-16 bg-zinc-600 animate-pulse"></div>
          )}
          <div className="flex flex-col lg:flex-row justify-between gap-8 w-full">
            {!props.loading ? (
              <div className="text-sm xl:text-md font-bold p-4 bg-slate-50 md:mr-8 rounded-lg">
                <h2 className="text-xl xl:text-2xl mb-4">KIERUNEK</h2>

                {props.kwalifikacje?.name.map((kwalifikacja) => (
                  <p key={kwalifikacja}>
                    {props.zawod.toUpperCase()}{" "}
                    <span className="text-slate-500">{kwalifikacja}</span>
                  </p>
                ))}
              </div>
            ) : (
              <div className="text-md font-bold w-full h-36 bg-slate-50 animate-pulse"></div>
            )}
            {!props.loading && (
              <div className="text-sm xl:text-md font-bold p-4 bg-slate-50 md:mr-8 rounded-lg">
                <h2 className="text-xl xl:text-2xl mb-4">OPIS</h2>
                {props.opis &&
                  props.opis.map((opis) => <p key={opis}>{opis}</p>)}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
