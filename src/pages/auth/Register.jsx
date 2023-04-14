import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { MdInfo } from "react-icons/md";

function Register() {
  const [auth, setAuth] = useAuth();
  const [login, setLogin] = useState({
    email: "",
    password: "",
    password2: "",
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();

    if (login.password !== login.password2) {
      setError("Hasła nie są takie same");
      return;
    }

    setLoading(true);
    try {
      const res = await axios.post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${
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
          <h1 className="text-6xl font-bold p-4 rounded-xl">Rejestracja</h1>
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
          <input
            className="border-4 border-zinc-800 p-2 w-full focus:border-amber-500 placeholder:font-bold placeholder:text-zinc-400"
            onChange={(e) => setLogin({ ...login, password2: e.target.value })}
            type="password"
            placeholder="POWTÓRZ HASŁO"
            required
          />
          {loading ? (
            <button
              className="mt-12 bg-slate-300 p-2 px-6 font-bold btn-anim rounded-full"
              disabled
            >
              REJESTROWANIE...
            </button>
          ) : (
            <button
              className="mt-12 bg-slate-300 p-2 px-6 font-bold hover:bg-slate-400 btn-anim rounded-full"
              type="submit"
            >
              ZAREJESTRUJ
            </button>
          )}
        </form>
      </section>
    </section>
  );
}

export default Register;
