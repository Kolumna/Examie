import { useParams } from "react-router-dom";
import QuizComponent from "../../../components/elements/modules/quiz/QuizComponent";

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

function Exam(props) {
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
    <section className="flex flex-col justify-center items-center">
      <div>
        <h1>EGZAMIN {modules.toUpperCase()}</h1>
      </div>
      {quizy.map((quiz, number) => (
        <QuizComponent exam data={quiz} number={number} />
      ))}
    </section>
  );
}

export default Exam;
