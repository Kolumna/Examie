import { useParams } from "react-router-dom";
import FetchQuiz from "../../../components/elements/modules/quiz/FetchQuiz";

function Exam(props) {
  const { modules } = useParams();

  return (
    <section className="flex flex-col justify-center items-center">
      <div>
        <h1>EGZAMIN {modules.toUpperCase()}</h1>
      </div>
      <FetchQuiz exam />
    </section>
  );
}

export default Exam;
