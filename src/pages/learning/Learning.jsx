import { useParams } from "react-router-dom";

function Learning(props) {
  const { course } = useParams();

  return (
    <section className="px-12">
      <section className="container mx-auto">
        <h1 className="text-7xl py-24 font-bold">
          Nauka {course} już wkrótce!
        </h1>
      </section>
    </section>
  );
}

export default Learning;
