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
    <section className="flex w-full justify-center flex-col gap-24 px-8 md:px-12 items-center">
      <div className="text-6xl font-black gap-4 text-zinc-900 mt-12 md:mt-24 flex justify-center items-end">
        <h1>{props.title}</h1>
        {!props.exam && (
          <span className="text-lg bg-slate-500 text-slate-100 p-2 rounded-lg">
            {props.module}
          </span>
        )}
      </div>
      <section className="w-full container mx-auto flex flex-col justify-center items-center gap-12 md:gap-24 bg-slate-200 p-4 md:p-8 rounded-xl">
        <div
          className={`bg-yellow-500 ${
            props.loading && "animate-pulse bg-yellow-600"
          } w-full p-4 md:p-12 rounded-lg text-center flex justify-center items-center flex-col gap-2`}
        >
          <span
            className={`font-bold text-3xl ${
              !props.loading && "bg-slate-100"
            } p-2 rounded-lg text-lg md:text-2xl`}
          >
            {props.loading ? (
              <p className="opacity-0">loading</p>
            ) : (
              currentQuiz.title
            )}
          </span>
          {currentQuiz.img && !props.loading && (
            <img
              src={currentQuiz.img}
              alt="quizZdjęcie"
              className="w-auto h-96 mt-8 rounded-lg bg-slate-100 p-2"
            />
          )}
        </div>
        <div className="grid md:grid-cols-2 gap-4 md:gap-8 container w-full">
          {props.loading ? (
            <>
              <div className="animate-pulse w-full bg-yellow-600 p-4 rounded-lg font-bold text-left transition-all duration-200">
                <p className="opacity-0 p-2">loading</p>
              </div>
              <div className="animate-pulse w-full bg-yellow-600 p-4 rounded-lg font-bold text-left transition-all duration-200">
                <p className="opacity-0 p-2">loading</p>
              </div>
              <div className="animate-pulse w-full bg-yellow-600 p-4 rounded-lg font-bold text-left transition-all duration-200">
                <p className="opacity-0 p-2">loading</p>
              </div>
              <div className="animate-pulse w-full bg-yellow-600 p-4 rounded-lg font-bold text-left transition-all duration-200">
                <p className="opacity-0 p-2">loading</p>
              </div>
            </>
          ) : (
            currentQuiz.values &&
            currentQuiz.values.map((answer, key) => (
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
                <span className="bg-slate-500 p-2 px-4 rounded-l-lg text-slate-100">
                  {key === 0 ? "A" : key === 1 ? "B" : key === 2 ? "C" : "D"}
                </span>
                <span className="bg-slate-100 p-2 px-4 rounded-r-lg">
                  {answer.name}
                </span>
              </button>
            ))
          )}
        </div>
      </section>
    </section>
  );
}

export default QuizComponent;
