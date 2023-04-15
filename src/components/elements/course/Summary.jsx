import { MdCode, MdMovie, MdQuiz } from "react-icons/md";
import useAuth from "../../../hooks/useAuth";
import { Link } from "react-router-dom";

const Summary = (props) => {
  const [auth] = useAuth();

  return (
    <div className="bg-slate-200 rounded-xl flex flex-col justify-between gap-4 p-4">
      <span className="text-center font-bold text-xl">PODSUMOWANIE</span>
      {auth ? (
        <section className="flex gap-8">
          <div className="w-full flex flex-col gap-2">
            <div className="bg-slate-500 hover:bg-slate-600 btn-anim rounded-xl flex flex-col items-center gap-2 p-4">
              <span className="text-5xl text-slate-50">
                <MdQuiz />
              </span>
              <span className="text-2xl font-black text-slate-50">QUIZ</span>
            </div>
            <div className="w-full flex justify-center items-center p-2 bg-gray-500 font-bold text-slate-50 rounded-xl">
              NIE UKOŃCZONO
            </div>
          </div>
          <div className="w-full flex flex-col gap-2">
            <div className="bg-slate-500 hover:bg-slate-600 btn-anim rounded-xl flex flex-col items-center gap-2 p-4">
              <span className="text-5xl text-slate-50">
                <MdMovie />
              </span>
              <span className="text-2xl font-black text-slate-50">FILM</span>
            </div>
            <div className="w-full flex justify-center items-center p-2 bg-green-500 font-bold text-slate-50 rounded-xl">
              UKOŃCZONO
            </div>
          </div>
          <div className="w-full flex flex-col gap-2">
            <div className="bg-slate-500 hover:bg-slate-600 btn-anim rounded-xl flex flex-col items-center gap-2 p-4">
              <span className="text-5xl text-slate-50">
                <MdCode />
              </span>
              <span className="text-2xl font-black text-slate-50">ZADANIE</span>
            </div>
            <div className="w-full flex justify-center items-center p-2 bg-gray-500 font-bold text-slate-50 rounded-xl">
              NIE UKOŃCZONO
            </div>
          </div>
        </section>
      ) : (
        <div className="flex justify-center">
          <Link to="/login" className="text-lg text-white font-bold p-4 bg-slate-500 hover:bg-slate-600 btn-anim rounded-xl">
            Zaloguj się aby mieć dostęp
          </Link>
        </div>
      )}
    </div>
  );
};

export default Summary;
