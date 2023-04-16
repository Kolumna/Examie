import { MdCode, MdMovie, MdQuiz } from "react-icons/md";
import useAuth from "../../../hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Modal from "react-modal";
import LogoPBE from "../../../assets/svgs/poweredExamie.svg";
import axios from "axios";
import { objectToArrayWithId } from "../../../helpers/objects";

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
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({});
  const [quizModal, setQuizModal] = useState(false);
  const [filmModal, setFilmModal] = useState(false);
  const [taskModal, setTaskModal] = useState(false);
  const [completed, setCompleted] = useState({
    quiz: false,
    film: false,
    task: false,
  });
  const [courses, setCourses] = useState(null);
  const [rawCourses, setRawCourses] = useState(null);

  const fetchUser = async () => {
    setLoading(true);
    const res = await axios.get(
      `https://janieccms-default-rtdb.europe-west1.firebasedatabase.app/users/${auth.userId}.json`
    );
    if (objectToArrayWithId(res.data)[0].kursy !== undefined) {
      setCompleted({
        quiz:
          objectToArrayWithId(res.data)[0].kursy[
            props.course
          ]?.completed.includes(props.lesson.id) ?? null,
        film:
          objectToArrayWithId(res.data)[0].kursy[
            props.course
          ]?.completed.includes(props.lesson.id) ?? null,
        task: objectToArrayWithId(res.data)[0].kursy[
          props.course
        ]?.completed.includes(props.lesson.id),
        status: objectToArrayWithId(res.data)[0].kursy[
          props.course
        ]?.completed.includes(props.lesson.id)
          ? "done"
          : null,
      });
    }
    setUser(objectToArrayWithId(res.data)[0]);
    setCourses(objectToArrayWithId(res.data)[0].kursy ?? "empty");
    setLoading(false);
  };

  const patchUser = async () => {
    await axios.patch(
      `https://janieccms-default-rtdb.europe-west1.firebasedatabase.app/users/${auth.userId}/${user._id}/kursy.json`,
      rawCourses
    );
  };

  const navigation = useNavigate();

  const answerHandler = (type) => {
    switch (type) {
      case "quiz":
        setQuizModal(false);
        setCompleted({ ...completed, quiz: true });
        break;
      case "film":
        setFilmModal(false);
        setCompleted({ ...completed, film: true });
        break;
      case "task":
        setTaskModal(false);
        setCompleted({ ...completed, task: true });
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    if (courses === "empty" && courses !== null && !courses[props.course]) {
      setRawCourses({
        [props.course]: {
          completed: [props.lesson.id],
          id: props.courseId,
        },
      });
    } else if (courses !== null && !courses[props.course]) {
      setRawCourses({
        ...courses,
        [props.course]: {
          completed: [props.lesson.id],
          id: props.courseId,
        },
      });
    } else if (courses !== null && courses[props.course]) {
      setRawCourses({
        ...courses,
        [props.course]: {
          completed: [...courses[props.course].completed, props.lesson.id],
          id: props.courseId,
        },
      });
    }
  }, [courses, props.course, props.courseId]);

  useEffect(() => {
    setCompleted({
      quiz: "",
      film: "",
      task: "",
    });
  }, [navigation]);

  useEffect(() => {
    if (auth) {
      fetchUser();
    }
  }, [auth, navigation]);

  useEffect(() => {
    if (
      completed.quiz &&
      completed.film &&
      completed.task &&
      !completed.status
    ) {
      patchUser();
    }
  }, [completed]);

  return (
    <div className="bg-slate-200 rounded-xl flex flex-col justify-between gap-4 p-4">
      <Modal
        isOpen={quizModal}
        ariaHideApp={false}
        onRequestClose={() => setQuizModal(false)}
        style={customStyles}
        contentLabel="Quiz modal"
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
        <div className="flex gap-2 w-full justify-center mb-4">
          <button
            className="bg-slate-400 p-2 mt-4 px-4 rounded-full font-bold hover:bg-slate-500 btn-anim"
            onClick={() => setQuizModal(false)}
          >
            WYJDŹ
          </button>
          <button
            className="bg-green-400 p-2 mt-4 px-4 rounded-full font-bold hover:bg-green-500 btn-anim"
            onClick={() => answerHandler("quiz")}
          >
            SPRAWDŹ
          </button>
        </div>
        <div>
          <img className="mt-4" width={150} src={LogoPBE} />
        </div>
      </Modal>
      <Modal
        isOpen={filmModal}
        ariaHideApp={false}
        onRequestClose={() => setFilmModal(false)}
        style={customStyles}
        contentLabel="Film modal"
      >
        <div className="flex flex-col gap-8 w-full p-8">
          <h2 className="text-4xl font-bold text-center">FILM</h2>
          <div className="flex justify-center">
            <video
              width={1000}
              className="rounded-xl"
              controls
              src="https://firebasestorage.googleapis.com/v0/b/examie.appspot.com/o/vecteezy_funny-corgi-dog-near-the-sea_4192384.mp4?alt=media&token=f127acef-f7d1-44bd-9e1f-0d1ee1241bba"
            >
              film
            </video>
          </div>
        </div>
        <div className="flex gap-2 w-full justify-center mb-4">
          <button
            className="bg-slate-400 p-2 mt-4 px-4 rounded-full font-bold hover:bg-slate-500 btn-anim"
            onClick={() => setFilmModal(false)}
          >
            WYJDŹ
          </button>
          <button
            className="bg-green-400 p-2 mt-4 px-4 rounded-full font-bold hover:bg-green-500 btn-anim"
            onClick={() => answerHandler("film")}
          >
            ZALICZ
          </button>
        </div>
        <div>
          <img className="mt-4" width={150} src={LogoPBE} />
        </div>
      </Modal>
      <Modal
        isOpen={taskModal}
        ariaHideApp={false}
        onRequestClose={() => setTaskModal(false)}
        style={customStyles}
        contentLabel="Task modal"
      >
        <div className="flex flex-col gap-8 w-full p-8">
          <h2 className="text-4xl font-bold text-center">ZADANIE</h2>
          <div className="flex flex-col gap-4">
            <span>Tu będzie jakieś zadanie z pisania kodu</span>
          </div>
        </div>
        <div className="flex gap-2 w-full justify-center mb-4">
          <button
            className="bg-slate-400 p-2 mt-4 px-4 rounded-full font-bold hover:bg-slate-500 btn-anim"
            onClick={() => setTaskModal(false)}
          >
            WYJDŹ
          </button>
          <button
            className="bg-green-400 p-2 mt-4 px-4 rounded-full font-bold hover:bg-green-500 btn-anim"
            onClick={() => answerHandler("task")}
          >
            SPRAWDŹ
          </button>
        </div>
        <div>
          <img className="mt-4" width={150} src={LogoPBE} />
        </div>
      </Modal>
      <span className="text-center font-bold text-xl">PODSUMOWANIE</span>
      {auth ? (
        !loading ? (
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
              {completed.quiz ? (
                <div className="w-full flex justify-center items-center p-2 bg-green-500 font-bold text-slate-50 rounded-xl">
                  UKOŃCZONO
                </div>
              ) : (
                <div className="w-full flex justify-center items-center p-2 bg-gray-500 font-bold text-slate-50 rounded-xl">
                  NIE UKOŃCZONO
                </div>
              )}
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
              {completed.film ? (
                <div className="w-full flex justify-center items-center p-2 bg-green-500 font-bold text-slate-50 rounded-xl">
                  UKOŃCZONO
                </div>
              ) : (
                <div className="w-full flex justify-center items-center p-2 bg-gray-500 font-bold text-slate-50 rounded-xl">
                  NIE UKOŃCZONO
                </div>
              )}
            </div>
            <div className="w-full flex flex-col gap-2">
              <button
                onClick={() => setTaskModal(true)}
                className="bg-slate-500 hover:bg-slate-600 btn-anim rounded-xl flex flex-col items-center gap-2 p-4"
              >
                <span className="text-5xl text-slate-50">
                  <MdCode />
                </span>
                <span className="text-2xl font-black text-slate-50">
                  ZADANIE
                </span>
              </button>
              {completed.task ? (
                <div className="w-full flex justify-center items-center p-2 bg-green-500 font-bold text-slate-50 rounded-xl">
                  UKOŃCZONO
                </div>
              ) : (
                <div className="w-full flex justify-center items-center p-2 bg-gray-500 font-bold text-slate-50 rounded-xl">
                  NIE UKOŃCZONO
                </div>
              )}
            </div>
          </section>
        ) : (
          <div className="flex justify-center py-16" role="status">
            <svg
              aria-hidden="true"
              className="w-12 h-12 text-white animate-spin fill-amber-400"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
        )
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
