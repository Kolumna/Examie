import axios from "axios";
import QuizComponent from "./QuizComponent";
import { useState, useEffect } from "react";
import { objectToArrayWithId } from "../../../../helpers/objects";

function FetchQuiz(props) {
  const [currentQuiz, setCurrentQuiz] = useState({});
  const [currentQuizes, setCurrentQuizes] = useState(null);
  const [loading, setLoading] = useState(true);
  // const [last, setLast] = useState(null);

  // const fetch = (single) => {
  //   return new Promise((resolve) => {
  //     setTimeout(() => {
  //       let random = quizy[Math.floor(Math.random() * quizy.length)];
  //       if (single) {
  //         if (random._id === last) {
  //           while (random._id === last) {
  //             random = quizy[Math.floor(Math.random() * quizy.length)];
  //             resolve(random);
  //           }
  //         } else {
  //           setLast(random._id);
  //           resolve(random);
  //         }
  //       } else {
  //         resolve(quizy);
  //       }
  //     }, 500);
  //   });
  // };

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
    const res = await axios.get(
      `${import.meta.env.VITE_API_LINK}/quizes/inf03.json`
    );
    const sorted = objectToArrayWithId(res.data).sort(() => Math.random() - 0.5);

    console.log(sorted);
    setCurrentQuizes(sorted);
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
          finished={props.finished}
          title="Quiz"
          module={props.module}
        />
      ) : !loading && currentQuizes ? (
        currentQuizes.map((quiz, number) => {
          return (
            <QuizComponent
              exam
              finished={props.finished}
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
