import axios from "axios";
import QuizComponent from "./QuizComponent";
import { useState, useEffect } from "react";
import { objectToArrayWithId } from "../../../../helpers/objects";

const quizy = [
  {
    _id: 0,
    title: "Czy egzamin zawodowy ma sens?",
    values: [
      {
        name: "Definitywnie",
        correct: false,
      },
      { name: "Nie, bo ma v-dolce", correct: true },
      { name: "Jeszcze jak", correct: false },
      { name: "Idiota to wymyślił", correct: false },
    ],
  },
  {
    _id: 1,
    title: "Czy Sebastian Puszakowski jest bambikiem?",
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
    _id: 2,
    title: "Jaki jest najlepszy samolot na świecie?",
    values: [
      { name: "Boeing 737-800", correct: false },
      { name: "Boeing 787-8", correct: false },
      { name: "Boeing 777-300ER", correct: false },
      { name: "Airbus A320", correct: true },
    ],
  },
  {
    _id: 3,
    title: "Jaki system jest prawidłowy?",
    values: [
      { name: "Linux", correct: false },
      { name: "MacOS", correct: false },
      { name: "Windows", correct: true },
    ],
    img: "https://i.ytimg.com/vi/4EhWaLwxSW8/maxresdefault.jpg",
  },
  {
    _id: 4,
    title: "Czy Sebuś jest kochany?❤️",
    values: [
      { name: "Oczywiście", correct: true },
      { name: "Nie ma innej odpowiedzi", correct: true },
      { name: "Największy słodziak na świecie!", correct: true },
      { name: "Don't be gey pls", correct: true },
    ],
  },
  {
    _id: 5,
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
  const [last, setLast] = useState(null);

  const fetch = (single) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        let random = quizy[Math.floor(Math.random() * quizy.length)];
        if (single) {
          if (random._id === last) {
            while (random._id === last) {
              random = quizy[Math.floor(Math.random() * quizy.length)];
              resolve(random);
            }
          } else {
            setLast(random._id);
            resolve(random);
          }
        } else {
          resolve(quizy);
        }
      }, 500);
    });
  };

  const fetchQuiz = async () => {
    setLoading(true);
    let res = await axios.get(
      `${import.meta.env.VITE_API_LINK}/quizes/inf03.json`
    );
    res = objectToArrayWithId(res.data);
    const randomRes = res[Math.floor(Math.random() * res.length)];
    randomRes.values.sort(() => Math.random() - 0.5);
    randomRes.values = randomRes.values.map(
      (answer) => (answer = { ...answer, id: Math.random() })
    );
    setCurrentQuiz(randomRes);
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

  // useEffect(() => {
  //   window.scrollTo({
  //     top: 0,
  //     // behavior: "smooth",
  //   });;
  // }, [currentQuiz])

  return (
    <>
      {!props.exam ? (
        <QuizComponent
          data={currentQuiz}
          loading={loading}
          title="Quiz"
          module={props.module}
        />
      ) : !loading ? (
        currentQuizes.map((quiz, number) => {
          return (
            <QuizComponent
              exam
              data={quiz}
              key={quiz._id}
              title={`Pytanie ${number + 1}`}
              module={props.module}
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
            disabled={loading}
            className={`${
              !loading ? "bg-zinc-800 hover:bg-slate-500" : "bg-gray-500"
            } btn-anim p-4 px-8 rounded-full text-slate-100 font-bold`}
          >
            {!loading ? "KOLEJNE" : "ŁADOWANIE..."}
          </button>
        </div>
      )}
    </>
  );
}

export default FetchQuiz;
