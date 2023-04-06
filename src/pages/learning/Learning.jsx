import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";

const kursy = [
  {
    id: 0,
    name: "JavaScript",
    modules: [
      {
        id: 0,
        nazwa: "Wstęp do JavaScript",
        content: [
          {
            type: "title",
            value: "Wstęp do JavaScript",
          },
          {
            type: "text",
            value:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia magni, harum id deleniti assumenda minus, quaerat at laborum illo unde ratione dicta pariatur, veritatis itaque molestiae delectus doloremque tenetur! Iure!",
          },
          {
            type: "important",
            value:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia magni, harum id deleniti assumenda minus, quaerat at laborum illo unde ratione dicta pariatur, veritatis itaque molestiae delectus doloremque tenetur! Iure!",
          },
          {
            type: "text",
            value:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia magni, harum id deleniti assumenda minus, quaerat at laborum illo unde ratione dicta pariatur, veritatis itaque molestiae delectus doloremque tenetur! Iure!",
          },
        ],
      },
      {
        id: 1,
        nazwa: "Zmienne",
        content: [
          {
            type: "title",
            value: "Zmienne",
          },
          {
            type: "text",
            value:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia magni, harum id deleniti assumenda minus, quaerat at laborum illo unde ratione dicta pariatur, veritatis itaque molestiae delectus doloremque tenetur! Iure!",
          },
        ],
      },
      {
        id: 2,
        nazwa: "Typy danych",
        content: [
          {
            type: "title",
            value: "Typy danych",
          },
          {
            type: "text",
            value:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia magni, harum id deleniti assumenda minus, quaerat at laborum illo unde ratione dicta pariatur, veritatis itaque molestiae delectus doloremque tenetur! Iure!",
          },
        ],
      },
      {
        id: 3,
        nazwa: "Operatory",
        content: [
          {
            type: "title",
            value: "Operatory",
          },
          {
            type: "text",
            value:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia magni, harum id deleniti assumenda minus, quaerat at laborum illo unde ratione dicta pariatur, veritatis itaque molestiae delectus doloremque tenetur! Iure!",
          },
        ],
      },
      {
        id: 4,
        nazwa: "Funkcje",
      },
      {
        id: 5,
        nazwa: "Obiekty",
      },
      {
        id: 6,
        nazwa: "Tablice",
      },
      {
        id: 7,
        nazwa: "Pętle",
      },
      {
        id: 8,
        nazwa: "Warunki",
      },
    ],
  },
];

function Learning(props) {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});

  const { course } = useParams();
  const { lesson } = useParams();

  useEffect(() => {
    const fetchCourse = async () => {
      setData(kursy[0]);
      setLoading(false);
    };

    fetchCourse();
  }, []);

  useEffect(() => {
    switch (course) {
      case "javascript":
        setName("JavaScript");
        break;
      case "php":
        setName("PHP");
        break;
      default:
        setName(course);
        break;
    }
  }, [course]);
  return (
    <section className="flex justify-between p-8 gap-12">
      <section className="flex flex-col font-bold text-md">
        <ul className="bg-slate-200 p-4 rounded-lg flex flex-col gap-2">
          {data.modules?.map((module) => {
            return (
              <Link
                to={`/learning/${course}/${
                  module.id === 0 ? "" : module.nazwa.toLowerCase()
                }`}
                key={module.id}
                className={`p-4 px-6 ${
                  lesson === module.nazwa.toLowerCase() ? "bg-slate-50" : ""
                } ${
                  !lesson && module.id === 0 ? "bg-slate-50" : ""
                } hover:bg-slate-100 cursor-pointer rounded-lg`}
              >
                {module.nazwa}
              </Link>
            );
          })}
        </ul>
      </section>

      <section className="max-w-5xl px-4 flex flex-col gap-24">
        <section id="opis" className="flex flex-col gap-16">
          {!loading &&
            data.modules[
              lesson
                ? data.modules.findIndex(
                    (item) => item.nazwa.toLowerCase() === lesson
                  )
                : 0
            ].content?.map((item) => {
              switch (item.type) {
                case "title":
                  return (
                    <h1 className="text-5xl font-semibold">{item.value}</h1>
                  );
                case "text":
                  return <p className="text-2xl">{item.value}</p>;
                case "important":
                  return (
                    <p className="text-2xl p-6 bg-slate-200 rounded-xl font-semibold">
                      {item.value}
                    </p>
                  );
              }
            })}
        </section>
        <footer className="flex gap-4">
          {lesson && (
            <button className="btn-anim hover:bg-slate-200 p-2 px-6 bg-slate-300 rounded-lg font-bold">
              Wstecz
            </button>
          )}
          <button className="btn-anim hover:bg-slate-200 p-2 px-6 bg-slate-300 rounded-lg font-bold">
            Dalej
          </button>
        </footer>
      </section>

      <section className="">
        <h2 className="mb-6 font-bold">Na tej stronie</h2>
        <ul className="text-sm w-48 flex flex-col gap-2">
          <li className="p-2 px-4 bg-slate-200 hover:bg-slate-100 cursor-pointer rounded-lg font-semibold">
            Opis
          </li>
          <li className="p-2 px-4 rounded-lg hover:bg-slate-100 cursor-pointer">
            Ważne informacje
          </li>
          <li className="p-2 px-4 rounded-lg hover:bg-slate-100 cursor-pointer">
            Etapy kursu
          </li>
        </ul>
      </section>
    </section>
  );
}

export default Learning;
