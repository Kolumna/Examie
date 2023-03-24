import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Banner from "../../components/elements/modules/Banner";

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
        kwalifikacje: { name: ["INFORMATYK", "PROGRAMISTA"] },
        color: "bg-gray-400",
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

          <section className="bg-slate-200">
            <div className="container mx-auto pb-24">
              <div className="flex justify-center items-center font-extrabold text-5xl p-24">
                <h1>SEKCJE</h1>
              </div>
              <div className="flex gap-12">
                <div className="bg-yellow-500 flex-col border-8 border-zinc-900 w-96 h-36 flex justify-center items-center text-4xl font-bold">
                  <span className="text-lg">JavaScript</span>
                </div>
                <div className="bg-yellow-500  border-8 border-zinc-900 w-96 h-36 flex justify-center items-center text-4xl font-bold"><span className="text-lg">SQL</span></div>
                <div className="bg-yellow-500 gap-4  border-8 border-zinc-900 w-96 h-36 flex justify-center items-center text-4xl font-bold"><span className="text-lg">HTML/CSS</span></div>
                <div className="bg-yellow-500  border-8 border-zinc-900 w-96 h-36 flex justify-center items-center text-4xl font-bold"><span className="text-lg">PHP</span></div>
              </div>
            </div>
          </section>
          <section className="bg-slate-100">
            <div className="container flex justify-center items-center mx-auto p-24">
              <div className="flex justify-center items-center font-extrabold text-5xl p-24">
                <h1>ĆWICZENIA</h1>
              </div>
              <div className="flex justify-center">
                <div className="bg-slate-300 rounded-xl w-96 h-36 flex justify-center items-center text-4xl font-bold">
                  OBEJRZYJ
                </div>
              </div>
            </div>
          </section>
        </>
      ) : (
        <Banner loading />
      )}
    </section>
  );
}
