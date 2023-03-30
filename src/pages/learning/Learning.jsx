import { useParams } from "react-router-dom";

function Learning(props) {
  const { course } = useParams();

  return (
    <section>
      <h1>Learning {course}</h1>
      <video className="w-full" src="https://www.w3schools.com/html/mov_bbb.mp4" controls>
        Niestety twoja przeglądarka nie obsługuje odtwarzacza video :(
      </video>
    </section>
  );
}

export default Learning;
