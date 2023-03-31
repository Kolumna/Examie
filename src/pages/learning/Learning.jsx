import { useParams } from "react-router-dom";

function Learning(props) {
  const { course } = useParams();

  return (
    <section>
      <h1>Learning {course}</h1>
    </section>
  );
}

export default Learning;
