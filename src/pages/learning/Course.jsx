import { useEffect, useState } from "react";
import { MdContentCopy, MdInfo } from "react-icons/md";
import { Link, useNavigate, useParams } from "react-router-dom";
import { kursy } from "../../helpers/api";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

function Course(props) {
  const [names, setNames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});
  const [copied, setCopied] = useState(false);
  const [notfound, setNotFound] = useState(false);

  const { course } = useParams();
  const { lesson } = useParams();

  const navigate = useNavigate();

  const copyToClipboard = (str) => {
    navigator.clipboard.writeText(str);
    setCopied(true);
  };

  useEffect(() => {
    const fetchCourse = async () => {
      const res = kursy.filter((item) => item.name.toLowerCase() === course)[0];
      setData(res ? res : setNotFound(true));
      setLoading(false);
    };

    fetchCourse();
  }, []);

  useEffect(() => {
    if (data?.modules) {
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

  useEffect(() => {
    if (copied) {
      setCopied(false);
    }
  }, [lesson]);

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
        <ul className="bg-slate-200 pr-4 py-4 rounded-lg text-lg flex flex-col gap-2">
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
        <section id="opis" className="flex flex-col gap-16">
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
                    <div key={item.value} className="flex items-center gap-8">
                      {item.img && (
                        <img width={64} height={"100%"} src={item.img} />
                      )}
                      <h1 className="text-5xl font-bold">{item.value}</h1>
                    </div>
                  );

                case "text":
                  return (
                    <p key={item.value} className="text-2xl font-semibold">
                      {item.value}
                    </p>
                  );

                case "important":
                  return (
                    <p
                      key={item.value}
                      className="text-2xl flex gap-6 items-center p-6 bg-slate-200 rounded-xl font-bold"
                    >
                      <span className="text-3xl">
                        <MdInfo />
                      </span>
                      {item.value}
                    </p>
                  );

                case "lista":
                  return (
                    <div key={item.value}>
                      <h2 className="text-2xl mb-8 font-bold">{item.label}</h2>
                      <ul className="text-2xl font-semibold list-disc ml-14">
                        {item.value.map((item) => {
                          return (
                            <li className="text-2xl" key={item}>
                              {item}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  );

                case "code":
                  return (
                    <div key={item.value} className="flex flex-col gap-2">
                      <SyntaxHighlighter
                        language={item.language}
                        style={docco}
                        customStyle={{
                          backgroundColor: "#f1f5f9",
                          borderRadius: 10,
                          fontSize: 24,
                          padding: 20,
                        }}
                      >
                        {item.value}
                      </SyntaxHighlighter>
                      <div className="flex w-full justify-end">
                        <button
                          onClick={() => copyToClipboard(item.value)}
                          className={`${
                            copied
                              ? "bg-green-300"
                              : "bg-slate-100 hover:bg-slate-200"
                          } p-2 rounded-lg btn-anim font-bold flex items-center gap-2`}
                        >
                          <MdContentCopy />
                          {copied ? "skopiowano!" : "skopiuj kod"}
                        </button>
                      </div>
                    </div>
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
                  return <p>{item.value}</p>;
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
          {names[names.length - 1]?.toLowerCase() !== lesson && (
            <button
              onClick={nextLesson}
              className="btn-anim hover:bg-slate-300 p-2 px-6 bg-slate-200 rounded-lg font-bold"
            >
              Przejdź do{" "}
              {names[names.indexOf(lesson) + 1 ? names.indexOf(lesson) + 1 : 1]}
            </button>
          )}
        </footer>
      </section>

      <section className="">
        <h2 className="mb-6 font-bold">Na tej stronie</h2>
        <ul className="text-sm w-48 flex flex-col gap-2">
          <li className="p-2 px-4 bg-slate-200 hover:bg-slate-100 cursor-pointer rounded-lg font-bold">
            Opis
          </li>
          <li className="p-2 px-4 rounded-lg hover:bg-slate-100 cursor-pointer font-semibold">
            Ważne informacje
          </li>
          <li className="p-2 px-4 rounded-lg hover:bg-slate-100 cursor-pointer font-semibold">
            Etapy kursu
          </li>
        </ul>
      </section>
    </section>
  );
}

export default Course;
