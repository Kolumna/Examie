import QuizComponent from "./QuizComponent";
import { useState, useEffect } from "react";

const quizy = [
  {
    _id: 0,
    title:
      "Czy Sebastian Puszakowski jest bambikiem?",
    values: [
      {
        name: "Definitywnie",
        correct: true,
      },
      { name: "Nie, bo ma v-dolce", correct: false },
      { name: "Może", correct: true },
      { name: "Czasami", correct: true },
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
    _id: 5,
    title: "Kto jest szpiegiem CISCO?",
    values: [
      { name: "Michał Szymczak", correct: true },
      { name: "Kacper Skrzeczyna", correct: false },
      { name: "Profesor Grubas", correct: false },
      { name: "Woody", correct: false },
    ],
  },
];

function FetchQuiz(props) {
  const [currentQuiz, setCurrentQuiz] = useState({});
  const [currentQuizes, setCurrentQuizes] = useState({});
  const [loading, setLoading] = useState(true);

  const fetch = (single) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(
          single ? quizy[Math.floor(Math.random() * quizy.length)] : quizy
        );
      }, 500);
    });
  };

  const fetchQuiz = async () => {
    setLoading(true);
    const res = await fetch(true);
    res.values.sort(() => Math.random() - 0.5);
    res.values = res.values.map(
      (answer) => (answer = { ...answer, id: Math.random() })
    );
    setCurrentQuiz(res);
    setLoading(false);
  };

  const fetchQuizes = async () => {
    setLoading(true);
    const res = await fetch(false);
    res.map((quiz) => {
      quiz.values.sort(() => Math.random() - 0.5);
      quiz.values = quiz.values.map(
        (answer) => (answer = { ...answer, id: Math.random() })
      );
    });
    setCurrentQuizes(res);
    setLoading(false);
  };

  useEffect(() => {
    if (props.exam) {
      fetchQuizes();
    } else {
      fetchQuiz();
    }
  }, []);

  return (
    <>
      {!props.exam ? (
        <QuizComponent data={currentQuiz} loading={loading} title="Quiz" />
      ) : !loading ? (
        currentQuizes.map((quiz, number) => {
          return (
            <QuizComponent
              data={quiz}
              key={quiz._id}
              title={`Pytanie ${number + 1}`}
            />
          );
        })
      ) : (
        <span className="text-3xl font-bold p-4">Ładowanie...</span>
      )}

      {!props.exam && (
        <div>
          <button
            onClick={fetchQuiz}
            className="bg-zinc-800 hover:bg-slate-500 btn-anim p-4 px-8 rounded-full text-slate-100 font-bold"
          >
            KOLEJNE
          </button>
        </div>
      )}
    </>
  );
}

export default FetchQuiz;
