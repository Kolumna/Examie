import { useParams } from "react-router-dom";
import FetchQuiz from "../../../components/elements/modules/quiz/FetchQuiz";
import { useState, useEffect } from "react";
import moment from "moment/moment";

function Exam() {
  const [start, setStart] = useState(false);
  const [odliczanie, setOdliczanie] = useState("Zaczynamy!");

  const endTime = moment().add(30, "minutes");

  const { modules } = useParams();

  useEffect(() => {
    setOdliczanie("Zaczynamy!");
    if (start) {
      const interval = setInterval(() => {
        const leftTime = -moment().diff(endTime) / 1000;
        const minutes = Math.floor(leftTime / 60);
        const seconds = Math.floor(leftTime % 60);
        setOdliczanie(`${minutes}min ${seconds}s`);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [start]);

  return (
    <section className="flex flex-col justify-center items-center">
      {start && (
        <div className="fixed top-[88px] z-20 border-b-4 border-zinc-900 bg-red-500 px-20 py-2 rounded-b-2xl">
          <span className="text-xl font-bold text-white">{odliczanie}</span>
        </div>
      )}
      <section className="bg-slate-500 w-full px-12">
        <div className="container mx-auto flex justify-between items-center text-white">
          <div className="flex items-start flex-col gap-4">
            <h1 className="font-bold text-6xl">
              EGZAMIN {modules.toUpperCase()}
            </h1>
            <span className="text-xl font-bold bg-orange-500 p-1 px-4 rounded-lg text-slate-100">
              BETA
            </span>
          </div>
          <div className="flex flex-col gap-8 py-12 items-end">
            <p className="font-bold text-2xl bg-white text-slate-500 p-4 rounded-xl">
              <strong>40</strong> PYTAŃ
            </p>
            <p className="font-bold text-2xl bg-white text-slate-500 p-4 rounded-xl">
              <strong>30</strong> MINUT
            </p>
            <p className="font-bold text-2xl bg-white text-slate-500 p-4 rounded-xl">
              BAZA <strong>300</strong> PYTAŃ
            </p>
          </div>
        </div>
      </section>
      {!start ? (
        <section className="bg-white p-24">
          <button
            onClick={() => setStart(!start)}
            className="container mx-auto bg-slate-500 hover:bg-yellow-500 btn-anim p-8 text-2xl font-black rounded-xl text-slate-50"
          >
            ROZPOCZNIJ
          </button>
        </section>
      ) : (
        <div className="flex flex-col w-full gap-8 mt-8 items-center">
          <FetchQuiz finished={false} exam />
          {/* <section className="px-12 w-full">
            <section className="grid grid-cols-4 w-full gap-8 container mx-auto pt-24">
              <button className="bg-yellow-500 hover:bg-yellow-400 text-left btn-anim p-8 px-12 font-bold text-2xl border-8 border-zinc-800">
                Zadanie 1
              </button>
              <button className="bg-yellow-500 hover:bg-yellow-400 text-left btn-anim  p-8 px-12 font-bold text-2xl border-8 border-zinc-800">
                Zadanie 2
              </button>
              <button className="bg-yellow-500 hover:bg-yellow-400 text-left btn-anim  p-8 px-12 font-bold text-2xl border-8 border-zinc-800">
                Zadanie 3
              </button>
              <button className="bg-yellow-500 hover:bg-yellow-400 text-left btn-anim  p-8 px-12 font-bold text-2xl border-8 border-zinc-800">
                Zadanie 4
              </button>
              <button className="bg-yellow-500 hover:bg-yellow-400 text-left btn-anim  p-8 px-12 font-bold text-2xl border-8 border-zinc-800">
                Zadanie 5
              </button>
              <button className="bg-yellow-500 hover:bg-yellow-400 text-left btn-anim  p-8 px-12 font-bold text-2xl border-8 border-zinc-800">
                Zadanie 6
              </button>
              <button className="bg-yellow-500 hover:bg-yellow-400 text-left btn-anim  p-8 px-12 font-bold text-2xl border-8 border-zinc-800">
                Zadanie 7
              </button>
              <button className="bg-yellow-500 hover:bg-yellow-400 text-left btn-anim  p-8 px-12 font-bold text-2xl border-8 border-zinc-800">
                Zadanie 8
              </button>
            </section>
          </section> */}

          <section className="p-24">
            <button
              onClick={(prev) => setStart(!prev)}
              className="bg-slate-500 p-4 px-6 text-xl btn-anim hover:bg-slate-400 font-bold text-slate-100 rounded-xl"
            >
              ZAKOŃCZ
            </button>
          </section>
        </div>
      )}
    </section>
  );
}

export default Exam;
