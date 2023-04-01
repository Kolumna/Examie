import { useState, useEffect } from "react";

function QuizComponent(props) {
  const [result, setResult] = useState(null);

  const currentQuiz = props.data;

  useEffect(() => {
    setResult(null);
  }, [currentQuiz]);

  const answerHanlder = (e, correct) => {
    if (!result && !correct) {
      e.target.style.backgroundColor = "#ef4444";
    }
    setResult(true);
  };

  return (
    <section className="flex w-full justify-center flex-col gap-24 px-12 items-center">
      <h1 className="text-6xl font-black text-zinc-900 mt-24">{props.title}</h1>
      <div
        className={`bg-yellow-500 ${
          props.loading && "animate-pulse bg-yellow-600"
        } w-full container mx-auto p-12 rounded-lg text-center`}
      >
        <span className="font-bold text-3xl">
          {props.loading ? <p className="opacity-0">loading</p> : currentQuiz.title}
        </span>
      </div>
      <div className="grid grid-cols-2 gap-8 container w-full">
        {props.loading ? (
          <>
            <div className="animate-pulse w-full bg-yellow-600 p-4 rounded-lg font-bold text-left transition-all duration-200">
              <p className="opacity-0">loading</p>
            </div>
            <div className="animate-pulse w-full bg-yellow-600 p-4 rounded-lg font-bold text-left transition-all duration-200">
              <p className="opacity-0">loading</p>
            </div>
            <div className="animate-pulse w-full bg-yellow-600 p-4 rounded-lg font-bold text-left transition-all duration-200">
              <p className="opacity-0">loading</p>
            </div>
            <div className="animate-pulse w-full bg-yellow-600 p-4 rounded-lg font-bold text-left transition-all duration-200">
              <p className="opacity-0">loading</p>
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
    </section>
  );
}

export default QuizComponent;
