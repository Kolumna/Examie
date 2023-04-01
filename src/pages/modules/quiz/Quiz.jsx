import { MdCheckCircle, MdDescription } from "react-icons/md";
import { Link, useParams } from "react-router-dom";
import QuizComponent from "../../../components/elements/modules/quiz/QuizComponent";
import { useState, useEffect } from "react";

const quizy = [
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

function Quiz(props) {
  const { modules } = useParams();
  const [currentQuiz, setCurrentQuiz] = useState({});
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState(null);

  const fetch = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(quizy[Math.floor(Math.random() * quizy.length)]);
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
      e.target.style.backgroundColor = "#ef4444";
    }
    setResult(true);
  };

  useEffect(() => {
    fetchQuiz();
  }, []);

  return (
    <>
      <section className="flex flex-col justify-center items-center gap-24">
        <QuizComponent
          loading={loading}
          currentQuiz={currentQuiz}
          answerHanlder={answerHanlder}
          result={result}
        />
        <div>
          <button
            onClick={fetchQuiz}
            disabled={loading}
            className="bg-zinc-800 hover:bg-slate-500 btn-anim p-4 px-8 rounded-full text-slate-100 font-bold"
          >
            KOLEJNE
          </button>
        </div>
      </section>
      <section>
        <div className="bg-slate-500 p-12 py-16 mt-24">
          <div className="container mx-auto flex justify-between items-center">
            <div className="flex flex-col items-start gap-8">
              <h1 className="text-6xl font-black text-slate-100">
                SPRAWDŹ SIĘ NA EGZAMINIE!
              </h1>
              <p className="text-slate-100 text-2xl">
                Egzamin składa się z <strong>20 pytań</strong>, na które musisz
                odpowiedzieć w ciągu <strong>20 min</strong>.
              </p>
              <span className="text-2xl bg-slate-200 p-4 items-center rounded-lg flex text-slate-500 gap-2 font-black">
                {modules.toUpperCase()}
                <MdDescription />
              </span>
            </div>
            <div className="flex flex-col gap-4 ml-12">
              <Link
                to="/modules/inf03/quiz/exam"
                className="bg-slate-100 text-3xl hover:bg-slate-200 btn-anim p-8 rounded-lg font-black text-zinc-900"
              >
                ROZPOCZNIJ
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Quiz;
