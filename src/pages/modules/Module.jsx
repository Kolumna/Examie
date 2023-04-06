import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Banner from "../../components/elements/modules/Banner";
import { MdDescription, MdPlayArrow } from "react-icons/md";
import Section from "../../components/elements/modules/Section";
import LanguageKafel from "../../components/elements/modules/UI/buttons/LanguageKafel";
import Title from "../../components/elements/modules/UI/Title";

export default function Module(props) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [color, setColor] = useState("");
  const [text, setText] = useState("");

  const { modules } = useParams();

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
    }, 300);

    switch (modules) {
      case "inf02":
        setColor("bg-zinc-400");
        setText("text-zinc-700");
        break;
      case "inf04":
        setColor("bg-gray-400");
        setText("text-gray-700");
        break;
      case "inf03":
        setColor("bg-slate-400");
        setText("text-slate-700");
        break;
      default:
        setColor("bg-slate-400");
        setText("text-slate-700");
    }
  }, []);

  return (
    <section>
      {!loading ? (
        <>
          <Banner
            title={`${modules.toUpperCase()}`}
            {...data}
            bgColor={color}
            text={text}
          />

          <Section bgColor={color} col>
            <Title title="KURSY" size="text-5xl" textColor={text} />
            <div className="grid grid-cols-4 gap-12 w-full">
              <LanguageKafel language="HTML&CSS" />
              <LanguageKafel complete language="JavaScript" />
              <LanguageKafel language="SQL" />
              <LanguageKafel language="PHP" />
            </div>
          </Section>

          <Section bgColor="bg-slate-200" color="bg-slate-300" col left>
            <div className="flex flex-col gap-4">
              <div className="flex gap-4 justify-between">
                <div className="flex justify-center">
                  <Link
                    to="/modules/inf03/quiz"
                    className="bg-zinc-800 text-slate-200 hover:bg-zinc-700 cursor-pointer duration-200 transition-all  rounded-3xl p-4 px-4 flex justify-center items-center text-5xl font-bold"
                  >
                    <MdPlayArrow />
                  </Link>
                </div>
                <div className="flex items-center bg-slate-100 px-8 rounded-2xl">
                  <Title
                    title="ĆWICZENIA"
                    size="text-5xl"
                    textColor="text-zinc-800"
                  />
                </div>
              </div>
              <div className="flex justify-between text-center gap-4 w-full">
                <span className="bg-slate-300 p-4 px-8 w-full rounded-2xl font-black text-xl">
                  UKOŃCZONO <span className="text-slate-500">5</span>/300
                </span>
                <div className="bg-yellow-300 flex items-center gap-2 p-4 px-8 rounded-2xl font-black text-3xl">
                  <MdDescription />
                  <span className="text-xl">2</span>
                </div>
              </div>
            </div>
          </Section>

          <Section bgColor="bg-slate-100" color="bg-slate-300" right col>
            <Title
              title="NAGRANIA Z ROZWIĄZYWANIA"
              size="text-4xl"
              textColor="text-zinc-900"
            />
            <div className="flex justify-center">
              <Link
                to="/videos/inf03/"
                className="bg-slate-300 hover:bg-slate-200 cursor-pointer duration-200 transition-all  rounded-xl p-4 px-8 font-black flex justify-center items-center text-2xl"
              >
                ZOBACZ
              </Link>
            </div>
          </Section>
        </>
      ) : (
        <>
          <Banner loading />
          <section className="flex justify-center items-center">
            {/* <span className="mt-24 font-bold text-6xl animate-bounce">
              Ładowanie
            </span> */}
          </section>
        </>
      )}
    </section>
  );
}
