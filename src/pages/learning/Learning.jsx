import { useEffect, useState } from "react";
import { kursy } from "../../helpers/api";
import { Link, useLocation } from "react-router-dom";
import { egzaminyZawodowe } from "../../helpers/api";
import Section from "../../components/elements/home/Section";
import Kafel from "../../components/Kafel";

function Learning() {
  const [data, setData] = useState([{}]);
  const [loading, setLoading] = useState(true);

  const { pathname } = useLocation();

  useEffect(() => {
    const fetchCourse = async () => {
      setData(kursy);
      setLoading(false);
    };

    fetchCourse();
  }, []);

  return (
    <section className="py-12 flex flex-col gap-24">
      <section className="container mx-auto flex flex-col items-start gap-12 flex-wrap">
        <h1 className="text-4xl font-black">KURSY</h1>
        <div className="flex items-center gap-8">
          {!loading &&
            data.map((el) => (
              <Link
                className="bg-slate-200 hover:bg-yellow-500 btn-anim p-8 w-60 flex justify-center items-center text-2xl rounded-xl text-zinc-800 font-bold"
                key={el.name}
                to={`${pathname}/${el.name.toLowerCase()}`}
              >
                {el.name}
              </Link>
            ))}
        </div>
      </section>
      <section className="container mx-auto flex flex-col items-start gap-12 flex-wrap">
        <h1 className="text-4xl font-black">KWALIFIKACJE</h1>
        <div className="flex items-center gap-8 flex-wrap">
          {egzaminyZawodowe.map(
            (kafel) =>
              kafel.active && (
                <Kafel
                  key={kafel.nrKwalifikacji}
                  nrKwalifikacji={kafel.nrKwalifikacji}
                  kwalifikacje={[...kafel.kwalifikacje.name]}
                  inf
                  technik
                  className={kafel.color}
                  active
                />
              )
          )}
        </div>
      </section>
    </section>
  );
}

export default Learning;
