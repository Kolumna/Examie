import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Login() {
  const [auth, setAuth] = useAuth();
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();

    setLoading(true);
    try {
      const res = await axios.post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${
          import.meta.env.VITE_API_KEY
        }`,
        {
          email: login.email,
          password: login.password,
          returnSecureToken: true,
        }
      );
      setAuth({
        token: res.data.idToken,
        userId: res.data.localId,
        email: res.data.email,
      });
      navigate("/");
    } catch (err) {
      console.log(err);
      setError(err.response.data.error.message);
      setLoading(false);
    }
  };

  return (
    <section className="">
      <section className="flex flex-col gap-24 items-center justify-center pt-24 px-8">
        <form
          onSubmit={submit}
          className="flex flex-col items-center gap-8 mb-24 bg-slate-100 p-12 rounded-xl"
        >
          <h1 className="text-6xl font-bold p-4 rounded-xl">Logowanie</h1>
          {error && (
            <div className="bg-white text-lg p-4 w-full rounded-xl flex items-center gap-2 text-red-500">
              <span>
                <MdInfo />
              </span>
              <p className="font-bold">{error}</p>
            </div>
          )}
          <input
            className="border-4 mt-12 border-zinc-800 p-2 w-full focus:border-amber-500 placeholder:font-bold placeholder:text-zinc-400"
            type="text"
            onChange={(e) => setLogin({ ...login, email: e.target.value })}
            placeholder="EMAIL"
            required
          />
          <input
            className="border-4 border-zinc-800 p-2 w-full focus:border-amber-500 placeholder:font-bold placeholder:text-zinc-400"
            onChange={(e) => setLogin({ ...login, password: e.target.value })}
            type="password"
            placeholder="HASŁO"
            required
          />
          {loading ? (
            <button
              className="mt-12 bg-slate-300 p-2 px-6 font-bold btn-anim rounded-full"
              disabled
            >
              LOGOWANIE...
            </button>
          ) : (
            <button
              className="mt-12 bg-slate-300 p-2 px-6 font-bold hover:bg-slate-400 btn-anim rounded-full"
              type="submit"
            >
              ZALOGUJ
            </button>
          )}
        </form>
      </section>
      <section className="">
        <div className="bg-slate-500 p-12 py-20 mt-24">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col items-center md:items-start gap-8">
              <h1 className="text-4xl text-center md:text-left md:text-6xl font-black text-slate-100">
                STWÓRZ KONTO I ĆWICZ!
              </h1>
              <p className="text-slate-100 text-2xl w-3/4 text-center md:text-left">
                Posiadając konto masz dostęp do obserwacji swoich postępów w
                nauce widząc swoje wyniki w quizach oraz postęp w kursie.
              </p>
            </div>
            <div className="flex flex-col gap-2 mt-24 md:mt-0 md:ml-12">
              <Link
                to="/register"
                className="bg-slate-100 whitespace-nowrap text-3xl hover:bg-slate-200 btn-anim p-8 rounded-lg font-black text-zinc-900"
              >
                ZAREJESTRUJ SIĘ
              </Link>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Login;
