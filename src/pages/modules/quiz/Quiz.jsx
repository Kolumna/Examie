import { MdDescription } from "react-icons/md";
import { Link, useParams } from "react-router-dom";
import FetchQuiz from "../../../components/elements/modules/quiz/FetchQuiz";

function Quiz(props) {
  const { modules } = useParams();

  return (
    <>
      <section className="flex flex-col justify-center items-center gap-24">
        <FetchQuiz title={props.title} module={modules.toUpperCase()} />
      </section>
      <section className="">
        <div className="bg-slate-500 p-12 py-20 mt-24">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col items-center md:items-start gap-8">
              <h1 className="text-4xl text-center md:text-left md:text-6xl font-black text-slate-100">
                SPRAWDŹ SIĘ NA EGZAMINIE!
              </h1>
              <p className="text-white text-2xl text-center md:text-left">
                Egzamin składa się z <strong>20 pytań</strong>, na które musisz
                odpowiedzieć w ciągu <strong>20 min</strong>.
              </p>
              <span className="text-2xl bg-white p-4 items-center rounded-lg flex text-slate-500 gap-2 font-black">
                {modules.toUpperCase()}
                <MdDescription />
              </span>
            </div>
            <div className="flex flex-col gap-2 mt-24 md:mt-0 md:ml-12">
              <Link
                to="/modules/inf03/quiz/exam"
                className="bg-white text-3xl hover:bg-slate-200 btn-anim p-8 rounded-lg font-black text-zinc-900"
              >
                ROZPOCZNIJ
              </Link>
              <span className="text-xl text-center font-bold bg-orange-500 p-1 px-2 rounded-lg text-slate-100">BETA</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Quiz;
