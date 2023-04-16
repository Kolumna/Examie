import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Banner from "../../components/elements/modules/Banner";
import { MdDescription, MdMovie, MdPlayArrow } from "react-icons/md";
import Section from "../../components/elements/modules/Section";
import LanguageKafel from "../../components/elements/modules/UI/buttons/LanguageKafel";
import Title from "../../components/elements/modules/UI/Title";
import axios from "axios";
import { objectToArrayWithId } from "../../helpers/objects";
import useAuth from "../../hooks/useAuth";

export default function Module() {
  const [module, setModule] = useState({});
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [color, setColor] = useState("");
  const [text, setText] = useState("");
  const [quizesLength, setQuizesLength] = useState(null);
  const [auth] = useAuth();

  const { modules } = useParams();

  const fetchModule = async () => {
    const res = await axios.get(
      `https://examie-default-rtdb.europe-west1.firebasedatabase.app/modules/${modules}.json`
    );
    setModule(objectToArrayWithId(res.data));
    if (!auth) {
      setLoading(false);
    }
  };

  const fetchUser = async () => {
    const res = await axios.get(
      `https://janieccms-default-rtdb.europe-west1.firebasedatabase.app/users/${auth.userId}.json`
    );
    setUser(objectToArrayWithId(res.data)[0]);
    setLoading(false);
  };

  const fetchQuizesLength = async () => {
    const res = await axios.get(
      `https://examie-default-rtdb.europe-west1.firebasedatabase.app/quizes/${module[0].typKwalifikacji.toLowerCase()}${module[0].nrKwalifikacji.toLowerCase()}.json?shallow=true`
    );
    setQuizesLength(Object.keys(res.data).length);
  };

  useEffect(() => {
    if (auth) {
      fetchUser();
    }
    fetchModule();

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

  useEffect(() => {
    if (module[0]) {
      fetchQuizesLength();
    }
  }, [module]);

  // if (!module[0]?.active) {
  //   return <h1>NI MA</h1>;
  // }

  return (
    <section>
      {!loading ? (
        <>
          <Banner
            title={`${module[0]?.typKwalifikacji}${module[0]?.nrKwalifikacji}`}
            {...module[0]}
            bgColor={color}
            text={text}
          />

          <Section bgColor={color} col>
            <Title title="KURSY" size="text-5xl" textColor={text} />
            <div className="grid grid-cols-4 gap-12 w-full">
              {module[0]?.kursy &&
                module[0]?.kursy.map((kurs) => (
                  <LanguageKafel
                    key={kurs}
                    language={kurs}
                    progress={
                      user?.kursy &&
                      auth &&
                      (user.kursy[kurs.toLowerCase()]?.completed ?? null)
                    }
                    progressId={
                      user?.kursy &&
                      auth &&
                      (user.kursy[kurs.toLowerCase()]?.id ?? null)
                    }
                    auth={auth}
                  />
                ))}
            </div>
          </Section>

          <Section bgColor="bg-slate-100" color="bg-slate-300" col left>
            <div className="flex flex-col gap-4">
              <div className="flex gap-4 justify-between">
                <div className="flex justify-center">
                  <Link
                    to="/quizes/inf03"
                    className="bg-zinc-800 text-slate-200 hover:bg-zinc-700 cursor-pointer duration-200 transition-all  rounded-3xl p-4 px-4 flex justify-center items-center text-5xl font-bold"
                  >
                    <MdPlayArrow />
                  </Link>
                </div>
                <div className="flex items-center bg-slate-200 px-8 rounded-2xl">
                  <Title
                    title="ĆWICZENIA"
                    size="text-5xl"
                    textColor="text-zinc-800"
                  />
                </div>
              </div>
              {auth ? (
                <div className="flex justify-between text-center gap-4 w-full">
                  <span className="bg-slate-300 p-4 px-8 w-full rounded-2xl font-black text-xl">
                    UKOŃCZONO{" "}
                    <span className="text-slate-500">{user.quizy.ilosc}</span>/
                    {quizesLength ?? "0"}
                  </span>
                  <div className="bg-yellow-300 flex items-center gap-2 p-4 px-8 rounded-2xl font-black text-3xl">
                    <MdDescription />
                    <span className="text-xl">{user.exams.ilosc}</span>
                  </div>
                </div>
              ) : (
                <span className="bg-slate-300 font-black text-xl p-4 px-8 w-full rounded-2xl">
                  ZALOGUJ SIĘ PO WIĘCEJ INFORMACJI
                </span>
              )}
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
                className="bg-slate-300 hover:bg-slate-200 cursor-pointer duration-200 transition-all  rounded-xl p-4 px-8 font-black flex justify-center items-center gap-2 text-2xl"
              >
                <MdMovie /> ZOBACZ
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
