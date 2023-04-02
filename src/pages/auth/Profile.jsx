import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Profile() {
  const [form, setForm] = useState({
    baza: "",
    title: "",
    img: "",
    values: [
      { name: "", correct: false },
      { name: "", correct: false },
      { name: "", correct: false },
      { name: "", correct: false },
    ],
  });
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log('czyszczonko', form)
    setForm({
      baza: "",
      title: "",
      img: "",
      values: [
        { name: "", correct: false },
        { name: "", correct: false },
        { name: "", correct: false },
        { name: "", correct: false },
      ],
    });
    await axios.post(
      `https://examie-default-rtdb.europe-west1.firebasedatabase.app/quizes/${form.baza}.json`,
      JSON.stringify(form)
    );
    setLoading(false);
  };

  const answerHanlder = (e, index) => {
    const newValues = [...form.values];
    newValues[index].name = e.target.value;
    setForm({ ...form, values: newValues });
  };

  const checkboxHandler = (e, index) => {
    const newValues = [...form.values];
    newValues[index].correct = e.target.checked ? true : false;
    setForm({ ...form, values: newValues });
  };

  return (
    <section className="flex flex-col items-center justify-center">
      <h1 className="text-4xl m-12 font-bold">Dodaj quiz</h1>
      <form onSubmit={submit} className="flex flex-col gap-2 mb-24 w-96">
        <label htmlFor="baza">Baza</label>
        <select
          onChange={(e) => setForm({ ...form, baza: e.target.value })}
          id="baza"
          value={form.baza}
        >
          <option value="">Wybierz bazę</option>
          <option value="inf02">INF02</option>
          <option value="inf03">INF03</option>
          <option value="inf04">INF04</option>
        </select>

        <label htmlFor="title">Pytanie</label>
        <textarea
          onChange={(e) => {
            setForm({ ...form, title: e.target.value });
          }}
          type="text"
          id="title"
          value={form.title}
        />

        <label htmlFor="file">Zdjęcie(na razie tylko link)</label>
        <input
          onChange={(e) => {
            setForm({ ...form, img: e.target.value });
          }}
          id="file"
          type="text"
          value={form.img}
        />

        <label htmlFor="odp1">Odp1</label>
        <div className="flex gap-4">
          <textarea
            onChange={(e) => answerHanlder(e, 0)}
            className="w-full"
            type="text"
            id="odp1"
            value={form.values[0].name}
          />
          <div>
            <label>
              Poprawna{" "}
              <input onChange={(e) => checkboxHandler(e, 0)} type="checkbox" />
            </label>
          </div>
        </div>

        <label htmlFor="odp2">Odp2</label>
        <div className="flex gap-4">
          <textarea
            onChange={(e) => answerHanlder(e, 1)}
            className="w-full"
            type="text"
            id="odp1"
            value={form.values[1].name}
          />
          <div>
            <label>
              Poprawna{" "}
              <input onChange={(e) => checkboxHandler(e, 1)} type="checkbox" />
            </label>
          </div>
        </div>

        <label htmlFor="odp3">Odp3</label>
        <div className="flex gap-4">
          <textarea
            onChange={(e) => answerHanlder(e, 2)}
            className="w-full"
            type="text"
            id="odp1"
            value={form.values[2].name}
          />
          <div>
            <label>
              Poprawna{" "}
              <input onChange={(e) => checkboxHandler(e, 2)} type="checkbox" />
            </label>
          </div>
        </div>

        <label htmlFor="odp4">Odp4</label>
        <div className="flex gap-4">
          <textarea
            onChange={(e) => answerHanlder(e, 3)}
            className="w-full"
            type="text"
            id="odp1"
            value={form.values[3].name}
          />
          <div>
            <label>
              Poprawna{" "}
              <input onChange={(e) => checkboxHandler(e, 3)} type="checkbox" />
            </label>
          </div>
        </div>

        <div>
          {!loading ? (
            <button
              className="mt-5 bg-slate-500 btn-anim hover:bg-slate-400 text-slate-100 p-2 px-4 font-bold"
              type="submit"
            >
              Dodaj
            </button>
          ) : (
            <span>Dodawanie...</span>
          )}
        </div>
      </form>
    </section>
  );
}

export default Profile;
