import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { kursy } from "../../helpers/api";
import CodeField from "../../components/elements/course/fields/CodeField";
import TextField from "../../components/elements/course/fields/TextField";
import TitleField from "../../components/elements/course/fields/TitleFiled";
import ImportantField from "../../components/elements/course/fields/ImportantField";
import ListaField from "../../components/elements/course/fields/ListField";
import { HashLink } from "react-router-hash-link";

function Course() {
  const [names, setNames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});
  const [copied, setCopied] = useState(false);
  const [notfound, setNotFound] = useState(false);
  const [steps, setSteps] = useState([]);

  const { course } = useParams();
  const { lesson } = useParams();
  const { hash } = useLocation();

  const navigate = useNavigate();

  useEffect(() => {
    if (copied) {
      setCopied(false);
    }
    return () => setSteps([]);
  }, [lesson]);

  useEffect(() => {
    const fetchCourse = async () => {
      const res = kursy.filter((item) => item.name.toLowerCase() === course)[0];
      setData(res ? res : setNotFound(true));
      setLoading(false);
    };

    fetchCourse();
  }, []);

  useEffect(() => {
    if (data?.modules && names.length === 0) {
      data.modules.map((item) => {
        setNames((names) =>
          item.id === 0
            ? [...names, "start"]
            : [...names, item.nazwa.toLowerCase()]
        );
      });
    }
  }, [data]);

  useEffect(() => {
    if (names.length > 0) {
      if (!names.includes(lesson ?? "start")) {
        setNotFound(true);
      }
    }
  }, [names, lesson, loading]);

  const nextLesson = () => {
    if (lesson) {
      const index = names.indexOf(lesson);
      if (index < names.length - 1) {
        navigate(`/learning/${course}/${names[index + 1]}`);
      } else {
        navigate(`/learning/${course}`);
      }
    } else {
      navigate(`/learning/${course}/${names[1]}`);
    }
  };

  const prevLesson = () => {
    if (lesson) {
      const index = names.indexOf(lesson);
      if (index > 0) {
        navigate(
          `/learning/${course}/${
            names[index - 1] === "start" ? "" : names[index - 1]
          }`
        );
      } else {
        navigate(`/learning/${course}`);
      }
    }
  };

  const stepsHandler = (step) => {
    if (steps.includes(step)) return;
    setSteps((steps) => [...steps, step]);
  };

  if (notfound) {
    return (
      <section className="h-screen flex flex-col gap-8 justify-center items-center text-7xl font-black">
        <h1>404</h1>
        <span className="text-2xl font-bold">Taka strona nie istnieje</span>
        <Link
          className="text-lg btn-anim bg-slate-500 hover:bg-slate-400 text-slate-50 p-4 px-6 rounded-full"
          to="/"
        >
          Strona główna
        </Link>
      </section>
    );
  }

  return (
    <section className="flex justify-between p-8 gap-12 pb-24">
      
      <section className="flex flex-col font-bold text-md w-72">
        <ul className="bg-slate-200 pr-4 py-4 rounded-lg text-lg flex flex-col gap-2 sticky top-[120px]">
          {data.modules?.map((module) => {
            return (
              <div key={module.id} className="flex items-center gap-2">
                <span className="h-full px-4 flex items-center bg-slate-500 text-slate-50 rounded-r-lg">
                  {module.id + 1}
                </span>
                <Link
                  to={`/learning/${course}/${
                    module.id === 0 ? "" : module.nazwa.toLowerCase()
                  }`}
                  className={`p-3 ${
                    lesson === module.nazwa.toLowerCase()
                      ? "bg-slate-50"
                      : !lesson && module.id === 0
                      ? "bg-slate-50"
                      : "hover:bg-slate-100"
                  } cursor-pointer rounded-lg w-full`}
                >
                  {module.nazwa}
                </Link>
              </div>
            );
          })}
        </ul>
      </section>

      <section className="max-w-5xl px-4 flex flex-col gap-12">
        <section className="flex flex-col gap-16">
          {!loading &&
            data.modules[
              lesson
                ? data.modules.findIndex(
                    (item) => item.nazwa.toLowerCase() === lesson
                  )
                : 0
            ]?.content?.map((item) => {
              switch (item.type) {
                case "title":
                  return (
                    <TitleField
                      key={item.value}
                      value={item.value}
                      img={item.img}
                      stepsHandler={stepsHandler}
                    />
                  );

                case "text":
                  return <TextField key={item.value} value={item.value} />;

                case "important":
                  return <ImportantField key={item.value} value={item.value} />;

                case "list":
                  return (
                    <ListaField
                      key={item.value}
                      value={item.value}
                      label={item.label}
                    />
                  );

                case "code":
                  return (
                    <CodeField
                      key={item.value}
                      language={item.language}
                      value={item.value}
                    />
                  );

                case "video":
                  return (
                    <video
                      key={item.value}
                      className="rounded-xl"
                      controls
                      src={item.value}
                    />
                  );

                default:
                  return (
                    <p className="text-red-500 font-bold">
                      Błędny typ paragrafu ({item.value})
                    </p>
                  );
              }
            })}
        </section>
        <footer className="flex justify-end gap-4">
          {lesson && (
            <button
              onClick={prevLesson}
              className="btn-anim hover:bg-slate-300 p-2 px-6 bg-slate-200 rounded-lg font-bold"
            >
              Cofnij do{" "}
              {names[names.indexOf(lesson) - 1 ? names.indexOf(lesson) - 1 : 0]}
            </button>
          )}
          {names.length > 1 &&
            names[names.length - 1]?.toLowerCase() !== lesson && (
              <button
                onClick={nextLesson}
                className="btn-anim hover:bg-slate-300 p-2 px-6 bg-slate-200 rounded-lg font-bold"
              >
                Przejdź do{" "}
                {
                  names[
                    names.indexOf(lesson) + 1 ? names.indexOf(lesson) + 1 : 1
                  ]
                }
              </button>
            )}
        </footer>
      </section>

      <section className="">
        <div className="sticky top-[120px]">
          <h2 className="mb-6 font-bold">Na tej stronie</h2>
          <ul className="text-sm w-48 flex flex-col gap-2">
            {steps.map((step) => {
              return (
                <li
                  key={step}
                  className="flex items-center gap-2 cursor-pointer w-full"
                >
                  {step.split("-").length > 1 ? (
                    <HashLink
                      scroll={(el) =>
                        el.scrollIntoView({
                          behavior: "smooth",
                          block: "center",
                        })
                      }
                      className={`${
                        step === hash.split("#")[1]
                          ? "bg-slate-200 border-slate-300"
                          : "hover:bg-slate-100"
                      } p-2 px-4 cursor-pointer rounded-lg font-bold w-full`}
                      to={`#${step.split(" ").join("-")}`}
                    >
                     {step.split("-").join(" ")}
                    </HashLink>
                  ) : (
                    <HashLink
                      scroll={(el) =>
                        el.scrollIntoView({
                          behavior: "smooth",
                          block: "center",
                        })
                      }
                      className={`${
                        step === hash.split("#")[1]
                          ? "bg-slate-200 border-slate-300"
                          : "hover:bg-slate-100"
                      } p-2 px-4 cursor-pointer rounded-lg font-bold w-full`}
                      to={`#${step}`}
                    >
                      {step}
                    </HashLink>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </section>
  );
}

export default Course;
