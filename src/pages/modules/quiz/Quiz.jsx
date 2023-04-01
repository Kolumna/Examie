import { MdCheckCircle, MdDescription } from "react-icons/md";
import { Link, useParams } from "react-router-dom";
import QuizComponent from "../../../components/elements/modules/quiz/QuizComponent";
import FetchQuiz from "../../../components/elements/modules/quiz/fetchQuiz";

function Quiz(props) {
  const { modules } = useParams();

  return (
    <>
      <section className="flex flex-col justify-center items-center gap-24">
        <FetchQuiz title={props.title} />
      </section>
      <section>
        <div className="bg-slate-500 p-12 py-16 mt-24">
          <div className="container mx-auto flex justify-between items-center">
            <div className="flex flex-col items-start gap-8">
              <h1 className="text-6xl font-black text-slate-100">
                SPRAWDŹ SIĘ NA EGZAMINIE!
              </h1>
              <p className="text-slate-100 text-2xl">
                Egzamin składa się z <strong>20 pytań</strong>, na które musisz
                odpowiedzieć w ciągu <strong>20 min</strong>.
              </p>
              <span className="text-2xl bg-slate-200 p-4 items-center rounded-lg flex text-slate-500 gap-2 font-black">
                {modules.toUpperCase()}
                <MdDescription />
              </span>
            </div>
            <div className="flex flex-col gap-4 ml-12">
              <Link
                to="/modules/inf03/quiz/exam"
                className="bg-slate-100 text-3xl hover:bg-slate-200 btn-anim p-8 rounded-lg font-black text-zinc-900"
              >
                ROZPOCZNIJ
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Quiz;
