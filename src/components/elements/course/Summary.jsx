import { MdCode, MdMovie, MdQuiz } from "react-icons/md";
import useAuth from "../../../hooks/useAuth";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Modal from "react-modal";
import LogoPBE from "../../../assets/svgs/poweredExamie.svg"

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    border: "8px solid #94a3b8",
    borderRadius: 10,
    backgroundColor: "#475569",
    transform: "translate(-50%, -50%)",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "8px",
  },
};

const Summary = (props) => {
  const [auth] = useAuth();
  const [quizModal, setQuizModal] = useState(false);
  const [filmModal, setFilmModal] = useState(false);
  const [taskModal, setTaskModal] = useState(false);

  return (
    <div className="bg-slate-200 rounded-xl flex flex-col justify-between gap-4 p-4">
      <Modal
        isOpen={quizModal}
        ariaHideApp={false}
        onRequestClose={() => setQuizModal(false)}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="flex flex-col gap-8 w-full p-8">
          <h2 className="text-4xl font-bold text-center">QUIZ</h2>
          <div className="flex flex-col gap-4">
            <h3 className="text-3xl text-center">LUBISZ PLACKI?</h3>
            <div className="grid grid-cols-2 gap-2">
              <button className="bg-amber-500 p-2 rounded-full hover:bg-amber-600 font-bold btn-anim">
                TAK
              </button>
              <button className="bg-amber-500 p-2 rounded-full hover:bg-amber-600 font-bold btn-anim">
                TAK
              </button>
              <button className="bg-amber-500 p-2 rounded-full hover:bg-amber-600 font-bold btn-anim">
                TAK
              </button>
              <button className="bg-amber-500 p-2 rounded-full hover:bg-amber-600 font-bold btn-anim">
                TAK
              </button>
            </div>
          </div>
        </div>
        <label>
          ZALICZ
          <input type="checkbox" />
        </label>
        <div className="flex gap-2 w-full justify-center mb-4">
          <button
            className="bg-slate-400 p-2 mt-4 px-4 rounded-full font-bold hover:bg-slate-500 btn-anim"
            onClick={() => setQuizModal(false)}
          >
            WYJDŹ
          </button>
          <button
            className="bg-green-400 p-2 mt-4 px-4 rounded-full font-bold hover:bg-green-500 btn-anim"
            onClick={() => setQuizModal(false)}
          >
            SPRAWDŹ
          </button>
        </div>
        <div>
          <img className="mt-4" width={150} src={LogoPBE}/>
        </div>
      </Modal>
      <Modal
        isOpen={filmModal}
        ariaHideApp={false}
        onRequestClose={() => setFilmModal(false)}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="flex flex-col gap-8 w-full p-8">
          <h2 className="text-4xl font-bold text-center">FILM</h2>
          <div className="flex justify-center">
            <video width={1000} className="rounded-xl" controls src="https://firebasestorage.googleapis.com/v0/b/examie.appspot.com/o/vecteezy_funny-corgi-dog-near-the-sea_4192384.mp4?alt=media&token=f127acef-f7d1-44bd-9e1f-0d1ee1241bba">
              film
            </video>
          </div>
        </div>
        <label>
          ZALICZ
          <input type="checkbox" />
        </label>
        <div className="flex gap-2 w-full justify-center mb-4">
          <button
            className="bg-slate-400 p-2 mt-4 px-4 rounded-full font-bold hover:bg-slate-500 btn-anim"
            onClick={() => setFilmModal(false)}
          >
            WYJDŹ
          </button>
          <button
            className="bg-green-400 p-2 mt-4 px-4 rounded-full font-bold hover:bg-green-500 btn-anim"
            onClick={() => setFilmModal(false)}
          >
            ZALICZ
          </button>
        </div>
        <div>
          <img className="mt-4" width={150} src={LogoPBE}/>
        </div>
      </Modal>
      <Modal
        isOpen={taskModal}
        ariaHideApp={false}
        onRequestClose={() => setTaskModal(false)}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="flex flex-col gap-8 w-full p-8">
          <h2 className="text-4xl font-bold text-center">ZADANIE</h2>
          <div className="flex flex-col gap-4">
            <span>Tu będzie jakieś zadanie z pisania kodu</span>
          </div>
        </div>
        <label>
          ZALICZ
          <input type="checkbox" />
        </label>
        <div className="flex gap-2 w-full justify-center mb-4">
          <button
            className="bg-slate-400 p-2 mt-4 px-4 rounded-full font-bold hover:bg-slate-500 btn-anim"
            onClick={() => setTaskModal(false)}
          >
            WYJDŹ
          </button>
          <button
            className="bg-green-400 p-2 mt-4 px-4 rounded-full font-bold hover:bg-green-500 btn-anim"
            onClick={() => setTaskModal(false)}
          >
            SPRAWDŹ
          </button>
        </div>
        <div>
          <img className="mt-4" width={150} src={LogoPBE}/>
        </div>
      </Modal>
      <span className="text-center font-bold text-xl">PODSUMOWANIE</span>
      {auth ? (
        <section className="flex gap-8">
          <div className="w-full flex flex-col gap-2">
            <button
              onClick={() => setQuizModal(true)}
              className="bg-slate-500 hover:bg-slate-600 btn-anim rounded-xl flex flex-col items-center gap-2 p-4"
            >
              <span className="text-5xl text-slate-50">
                <MdQuiz />
              </span>
              <span className="text-2xl font-black text-slate-50">QUIZ</span>
            </button>
            <div className="w-full flex justify-center items-center p-2 bg-gray-500 font-bold text-slate-50 rounded-xl">
              NIE UKOŃCZONO
            </div>
          </div>
          <div className="w-full flex flex-col gap-2">
            <button
              onClick={() => setFilmModal(true)}
              className="bg-slate-500 hover:bg-slate-600 btn-anim rounded-xl flex flex-col items-center gap-2 p-4"
            >
              <span className="text-5xl text-slate-50">
                <MdMovie />
              </span>
              <span className="text-2xl font-black text-slate-50">FILM</span>
            </button>
            <div className="w-full flex justify-center items-center p-2 bg-green-500 font-bold text-slate-50 rounded-xl">
              UKOŃCZONO
            </div>
          </div>
          <div className="w-full flex flex-col gap-2">
            <button
              onClick={() => setTaskModal(true)}
              className="bg-slate-500 hover:bg-slate-600 btn-anim rounded-xl flex flex-col items-center gap-2 p-4"
            >
              <span className="text-5xl text-slate-50">
                <MdCode />
              </span>
              <span className="text-2xl font-black text-slate-50">ZADANIE</span>
            </button>
            <div className="w-full flex justify-center items-center p-2 bg-gray-500 font-bold text-slate-50 rounded-xl">
              NIE UKOŃCZONO
            </div>
          </div>
        </section>
      ) : (
        <div className="flex justify-center">
          <Link
            to="/login"
            className="text-lg text-white font-bold p-4 bg-slate-500 hover:bg-slate-600 btn-anim rounded-xl"
          >
            Zaloguj się aby mieć dostęp
          </Link>
        </div>
      )}
    </div>
  );
};

export default Summary;
