import { useParams } from "react-router-dom";
import FetchQuiz from "../../../components/elements/modules/quiz/FetchQuiz";
import { useState, useEffect } from "react";
import moment from "moment/moment";
import axios from "axios";

function Exam() {
  const [start, setStart] = useState(false);
  const [odliczanie, setOdliczanie] = useState("Zaczynamy!");
  const [quizesLength, setQuizesLength] = useState(null);
  const [goodAnswers, setGoodAnswers] = useState(0);
  const [results, setResults] = useState(false);
  const [time, setTime] = useState(null);

  const endTime = moment().add(60, "minutes");

  const { modules } = useParams();

  const fetchQuizesLength = async () => {
    const res = await axios.get(
      `https://examie-default-rtdb.europe-west1.firebasedatabase.app/quizes/${modules}.json?shallow=true`
    );
    setQuizesLength(Object.keys(res.data).length);
  };

  const examResults = () => {
    const result = goodAnswers / quizesLength;
    console.log(result);
    setStart(false);
    setResults(true);
    setTime(odliczanie);
  };

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

  useEffect(() => {
    fetchQuizesLength();
  }, []);

  if (results) {
    return (
      <section
        className="flex flex-col gap-12 px-4 md:px-8 justify-center
       items-center pt-24 pb-24"
      >
        <span className="bg-green-400 text-white text-4xl font-bold p-4 rounded-xl">
          WYNIK <span className="font-black text-zinc-800">{goodAnswers}</span>{" "}
          / {quizesLength}
        </span>
        <span className="text-xl font-bold">Pozostały czas: {time}</span>
        <button
          onClick={() => {
            setResults(false);
            setStart(true);
            setGoodAnswers(0);
          }}
          className="bg-slate-400 p-4 text-white px-8 rounded-xl hover:bg-slate-500 btn-anim font-bold text-xl"
        >
          NOWY EGZAMIN
        </button>
      </section>
    );
  }

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
              <strong>60</strong> MINUT
            </p>
            <p className="font-bold text-2xl bg-white text-slate-500 p-4 rounded-xl">
              BAZA <strong>{quizesLength}</strong> PYTAŃ
            </p>
          </div>
        </div>
      </section>
      {!start ? (
        <section className="bg-white p-24">
          <button
            onClick={() => setStart(!start)}
            className="container mx-auto bg-slate-500 hover:bg-amber-400 btn-anim p-8 text-2xl font-black rounded-xl text-slate-50"
          >
            ROZPOCZNIJ
          </button>
        </section>
      ) : (
        <div className="flex flex-col w-full gap-8 mt-8 items-center">
          <FetchQuiz
            finished={true}
            goodAnswers={goodAnswers}
            setGoodAnswers={(value) => setGoodAnswers(value)}
            exam
          />
          <section className="p-24">
            <button
              onClick={examResults}
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
