import axios from "axios";
import { useState, useEffect } from "react";
import { MdPhoto } from "react-icons/md";
import Modal from "react-modal";
import useAuth from "../../../../hooks/useAuth";
import { objectToArrayWithId } from "../../../../helpers/objects";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    border: "8px solid #64748b",
    padding: "0",
    borderRadius: 10,
    backgroundColor: "#fbbf24",
    transform: "translate(-50%, -50%)",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "8px",
    overflow: "hidden",
  },
};

function QuizComponent(props) {
  const [result, setResult] = useState(null);
  const [modal, setModal] = useState(false);
  const [user, setUser] = useState(null);
  const [auth] = useAuth();

  const currentQuiz = props.data;

  const fetchUser = async () => {
    const res = await axios.get(
      `https://janieccms-default-rtdb.europe-west1.firebasedatabase.app/users/${auth.userId}.json`
    );
    setUser(objectToArrayWithId(res.data)[0]);
  };

  const addQuiz = async () => {
    console.log("add quiz");
    try {
      await axios.patch(
        `https://janieccms-default-rtdb.europe-west1.firebasedatabase.app/users/${auth.userId}/${user._id}.json`,
        { quizy: [...user?.quizy, `${currentQuiz._id}`] }
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setResult(null);
  }, [currentQuiz]);

  useEffect(() => {
    fetchUser();
  }, []);

  const answerHanlder = (e, correct) => {
    if (!result && !correct) {
      e.currentTarget.style.backgroundColor = "#ef4444";
    }
    if (correct && (!user.quizy || !user.quizy.includes(currentQuiz._id))) {
      addQuiz();
    }
    setResult(true);
  };

  return (
    <section className="flex w-full justify-center flex-col gap-24 px-8 md:px-12 items-center">
      {currentQuiz.img && (
        <Modal
          isOpen={modal}
          ariaHideApp={false}
          onRequestClose={() => setModal(false)}
          style={customStyles}
          contentLabel="Quiz zdjęcie"
        >
          <img src={currentQuiz.img} />
        </Modal>
      )}
      <div className="text-6xl font-black gap-4 text-zinc-900 mt-12 flex justify-center items-end">
        <h1>{props.title}</h1>
        {!props.exam && (
          <span className="text-lg bg-slate-500 text-slate-100 p-2 rounded-lg">
            {props.module}
          </span>
        )}
      </div>
      <section className="w-full container mx-auto flex flex-col justify-center items-center gap-8 bg-slate-100 p-2 md:p-4 rounded-xl">
        <div
          className={`bg-amber-400 ${
            props.loading && "animate-pulse bg-amber-500"
          } w-full rounded-lg text-center flex ${
            currentQuiz.img ? "justify-between" : "justify-center"
          } items-center`}
        >
          <div className="flex justify-center w-full p-8">
            <div
              className={`font-bold text-3xl ${
                !props.loading && "bg-white"
              } p-4 w-full md:w-auto rounded-lg text-lg md:text-2xl`}
            >
              {props.loading ? (
                <p className="opacity-0">loading</p>
              ) : (
                currentQuiz.title
              )}
            </div>
            {currentQuiz.img && !props.loading && (
              <button
                onClick={() => setModal(true)}
                className="bg-white hover:bg-slate-100 btn-anim ml-2 px-4 rounded-lg text-4xl"
              >
                <MdPhoto />
              </button>
            )}
          </div>
        </div>
        <span className="font-black text-lg md:text-2xl">ODPOWIEDZI</span>
        <div className="grid md:grid-cols-2 gap-4 md:gap-8 container w-full">
          {props.loading ? (
            <>
              <div className="animate-pulse w-full bg-amber-500 p-4 rounded-lg font-bold text-left transition-all duration-200">
                <p className="opacity-0 p-2">loading</p>
              </div>
              <div className="animate-pulse w-full bg-amber-500 p-4 rounded-lg font-bold text-left transition-all duration-200">
                <p className="opacity-0 p-2">loading</p>
              </div>
              <div className="animate-pulse w-full bg-amber-500 p-4 rounded-lg font-bold text-left transition-all duration-200">
                <p className="opacity-0 p-2">loading</p>
              </div>
              <div className="animate-pulse w-full bg-amber-500 p-4 rounded-lg font-bold text-left transition-all duration-200">
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
                      : "bg-amber-400"
                    : "bg-amber-400"
                } p-4 rounded-lg font-bold text-left w-full ${
                  !result && "hover:bg-amber-300"
                } flex items-start`}
              >
                <span className="bg-slate-500 h-full flex items-center justify-center p-2 px-4 rounded-l-lg text-white">
                  {key === 0 ? "A" : key === 1 ? "B" : key === 2 ? "C" : "D"}
                </span>
                <span className="bg-white p-2 px-4 rounded-r-lg">
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
