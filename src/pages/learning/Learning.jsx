import { useParams } from "react-router-dom";

function Learning(props) {
  const { course } = useParams();

  return (
    <section className="px-12 pt-16">
      <section className="container flex flex-col mx-auto">
        <h1 className="text-6xl font-bold mb-4">
          Poznaj{" "}
          <span className="text-slate-500 font-black">
            {course.toUpperCase()}
          </span>
          !
        </h1>
      </section>
      <section className="h-96">
        
      </section>
    </section>
  );
}

export default Learning;
