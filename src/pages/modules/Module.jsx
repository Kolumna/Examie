import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Banner from "../../components/elements/modules/Banner";
import { MdPlayArrow } from "react-icons/md";

export default function Module(props) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  const { modules } = useParams();

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // });

  useEffect(() => {
    setTimeout(() => {
      setData({
        nrKwalifikacji: modules,
        typ: "TECHNIK",
        kwalifikacje: ["INFORMATYK", "PROGRAMISTA"],
        opisy: [
          "TWORZENIE I ADMINISTROWANIE STRONAMI I APLIKACJAMI INTERNETOWYMI",
          "TWORZENIE I ADMINISTROWANIE BAZAMI DANYCH",
        ],
      });
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <section>
      {!loading ? (
        <>
          <Banner
            title={`WITAJ W MODULE KWALIFIKACJI ${modules.toUpperCase()}`}
            {...data}
          />

          <section className="bg-slate-400">
            <div className="container mx-auto pb-24">
              <div className="flex text-slate-700 justify-center items-center font-extrabold text-5xl p-24">
                <h1>SEKCJE</h1>
              </div>
              <div className="flex gap-12">
                <div className="bg-slate-300 transition-all duration-200 hover:bg-yellow-500 flex-col border-8 border-zinc-900 w-96 h-36 flex justify-center items-center text-4xl font-bold">
                  <span className="text-2xl font-black">JavaScript</span>
                </div>
                <div className="bg-slate-300 transition-all duration-200 hover:bg-yellow-500  border-8 border-zinc-900 w-96 h-36 flex justify-center items-center text-4xl font-bold">
                  <span className="text-2xl font-black">SQL</span>
                </div>
                <div className="bg-slate-300 transition-all duration-200 hover:bg-yellow-500 gap-4  border-8 border-zinc-900 w-96 h-36 flex justify-center items-center text-4xl font-bold">
                  <span className="text-2xl font-black">HTML/CSS</span>
                </div>
                <div className="bg-slate-300 transition-all duration-200 hover:bg-yellow-500  border-8 border-zinc-900 w-96 h-36 flex justify-center items-center text-4xl font-bold">
                  <span className="text-2xl font-black">PHP</span>
                </div>
              </div>
            </div>
          </section>
          <section className="bg-slate-200">
            <div className="container flex gap-16 justify-center items-center mx-auto p-24">
              <div className="flex justify-center items-center font-extrabold text-5xl">
                <h1>ĆWICZENIA</h1>
              </div>
              <div className="flex justify-center">
                <div className="bg-zinc-900 text-slate-200 hover:bg-zinc-700 cursor-pointer duration-200 transition-all  rounded-xl w-36 h-24 flex justify-center items-center text-5xl font-bold">
                  <MdPlayArrow />
                </div>
              </div>
            </div>
          </section>
          <section className="bg-slate-100">
            <div className="container flex flex-col gap-24 text-center justify-center items-center mx-auto p-24">
              <div className="flex justify-center items-center font-extrabold text-4xl">
                <h1>NAGRANIA Z ROZWIĄZYWANIA</h1>
              </div>
              <div className="flex justify-center">
                <div className="bg-slate-300 hover:bg-slate-200 cursor-pointer duration-200 transition-all  rounded-xl p-4 px-8 font-black flex justify-center items-center text-2xl">
                  ZOBACZ
                </div>
              </div>
            </div>
          </section>
        </>
      ) : (
        <>
          <Banner loading />
          <section className="flex justify-center items-center">
            <span className="mt-24 font-bold text-6xl animate-bounce">Ładowanie</span>
          </section>
        </>
      )}
    </section>
  );
}
