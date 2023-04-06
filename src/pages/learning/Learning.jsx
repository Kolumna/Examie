import { useEffect, useState } from "react";
import { kursy } from "../../helpers/api";
import { Link, useLocation } from "react-router-dom";

function Learning() {
  const [data, setData] = useState([{}]);
  const [loading, setLoading] = useState(true);

  const { pathname } = useLocation();
  console.log(pathname);

  useEffect(() => {
    const fetchCourse = async () => {
      setData(kursy);
      setLoading(false);
    };

    fetchCourse();
  }, []);

  console.log(data);

  return (
    <section>
      <div className="flex flex-col">
        {!loading &&
          data.map((el) => (
            <Link key={el.name} to={`${pathname}/${el.name.toLowerCase()}`}>
              {el.name}
            </Link>
          ))}
      </div>
    </section>
  );
}

export default Learning;
