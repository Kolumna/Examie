import { useEffect, useState } from "react";
import { MdCheckCircle, MdDescription } from "react-icons/md";
import { useParams } from "react-router-dom";

const quizzy = [
  {
    _id: 0,
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ut repellat odio similique nobis dicta provident sapiente reiciendis aliquid accusamus eius nam quos, itaque commodi, libero repudiandae quia. Perspiciatis, vel!",
    values: [
      {
        name: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ut repellat odio similique nobis dicta provident sapiente reiciendis aliquid accusamus eius nam quos, itaque commodi, libero repudiandae quia. Perspiciatis, vel!",
        correct: false,
      },
      { name: "B", correct: false },
      { name: "C", correct: false },
      { name: "D", correct: true },
    ],
  },
  {
    _id: 1,
    title: "Jaki jest najlepszy samolot na świecie?",
    values: [
      { name: "Boeing 737-800", correct: false },
      { name: "Boeing 787-8", correct: false },
      { name: "Boeing 777-300ER", correct: false },
      { name: "Airbus A320", correct: true },
    ],
  },
  {
    _id: 2,
    title: "Jaki system jest prawidłowy?",
    values: [
      { name: "Linux", correct: false },
      { name: "MacOS", correct: false },
      { name: "Windows", correct: true },
    ],
  },
  {
    _id: 3,
    title: "Czy Sebuś jest kochany?❤️",
    values: [
      { name: "Oczywiście", correct: true },
      { name: "Nie ma innej odpowiedzi", correct: true },
      { name: "Największy słodziak na świecie!", correct: true },
      { name: "Don't be gey pls", correct: true },
    ],
  },
  {
    _id: 4,
    title: "Kto jest najszybszym człowiekiem na świecie?",
    values: [
      { name: "Mikołaj Piwoński", correct: true },
      { name: "Święty Mikołaj", correct: false },
      { name: "Pani Jadzia", correct: false },
      { name: "Flash", correct: false },
    ],
  },
  {
    _id: 4,
    title: "Kto jest szpiegiem CISCO?",
    values: [
      { name: "Michał Szymczak", correct: true },
      { name: "Kacper Skrzeczyna", correct: false },
      { name: "Profesor Grubas", correct: false },
      { name: "Woody", correct: false },
    ],
  },
];

function Quizz(props) {
  const [currentQuiz, setCurrentQuiz] = useState({});
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState(null);

  const { modules } = useParams();

  useEffect(() => {
    fetchQuiz();
  }, []);

  const fetch = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(quizzy[Math.floor(Math.random() * quizzy.length)]);
      }, 500);
    });
  };

  const fetchQuiz = async () => {
    setLoading(true);
    setResult(null);
    const res = await fetch();
    res.values.sort(() => Math.random() - 0.5);
    res.values = res.values.map(
      (answer) => (answer = { ...answer, id: Math.random() })
    );
    setCurrentQuiz(res);
    setLoading(false);
  };

  const answerHanlder = (e, correct) => {
    if (!result && !correct) {
      console.log(result);
      e.target.style.backgroundColor = "#ef4444";
    }
    setResult(true);
  };

  return (
    <>
      <section className="flex justify-center flex-col gap-24 px-12 items-center">
        <h1 className="text-6xl font-black text-zinc-900 mt-24">QUIZZ</h1>
        <div
          className={`bg-yellow-500 ${
            loading && "animate-pulse bg-yellow-600"
          } w-full container mx-auto p-12 rounded-lg text-center`}
        >
          <span className="font-bold text-3xl">
            {loading ? <p className="opacity-0">a</p> : currentQuiz.title}
          </span>
        </div>
        <div className="grid grid-cols-2 gap-8 container w-full">
          {loading ? (
            <>
              <div className="animate-pulse w-full bg-yellow-600 p-4 rounded-lg font-bold text-left transition-all duration-200">
                <p className="opacity-0">a</p>
              </div>
              <div className="animate-pulse w-full bg-yellow-600 p-4 rounded-lg font-bold text-left transition-all duration-200">
                <p className="opacity-0">a</p>
              </div>
              <div className="animate-pulse w-full bg-yellow-600 p-4 rounded-lg font-bold text-left transition-all duration-200">
                <p className="opacity-0">a</p>
              </div>
              <div className="animate-pulse w-full bg-yellow-600 p-4 rounded-lg font-bold text-left transition-all duration-200">
                <p className="opacity-0">a</p>
              </div>
            </>
          ) : (
            currentQuiz.values &&
            currentQuiz.values.map((answer) => (
              <button
                onClick={(e) => answerHanlder(e, answer.correct)}
                key={answer.id}
                className={`${
                  result
                    ? answer.correct
                      ? "bg-green-500"
                      : "bg-yellow-500"
                    : "bg-yellow-500"
                } p-4 rounded-lg font-bold text-left w-full ${
                  !result && "hover:bg-yellow-400"
                } btn-anim flex items-start`}
              >
                {answer.name}
              </button>
            ))
          )}
        </div>
        <div>
          <button
            onClick={fetchQuiz}
            className="bg-zinc-800 hover:bg-slate-500 btn-anim p-4 px-8 rounded-full text-slate-100 font-bold"
          >
            KOLEJNE
          </button>
        </div>
      </section>
      <section>
        <div className="bg-slate-500 p-12 py-16 mt-24">
          <div className="container mx-auto flex justify-between items-center">
            <div className="flex flex-col items-start gap-12">
              <h1 className="text-6xl font-black text-slate-100">
                SPRAWDŹ SIĘ NA EGZAMINIE!
              </h1>
              <p className="text-slate-100 text-2xl">
                Egzamin składa się z <strong>20 pytań</strong>, które musisz
                odpowiedzieć w <strong>20 min</strong>.
              </p>
              <span className="text-5xl bg-slate-200 p-8 rounded-lg flex text-slate-500 gap-4 font-black">
                {modules.toUpperCase()}
                <MdDescription />
              </span>
            </div>
            <div className="flex flex-col gap-4 ml-12">
              <button className="bg-slate-100 text-3xl hover:bg-slate-200 btn-anim p-8 rounded-lg font-black text-zinc-900">
                ROZPOCZNIJ
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Quizz;
