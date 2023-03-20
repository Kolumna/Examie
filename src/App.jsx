import { useState } from "react";
import examieLogo from "././assets/svgs/logo.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="bg-slate-100 min-h-screen py-8">
      <header className="px-12 pb-8 h-24 w-full flex items-center">
        <div className="flex justify-between w-full">
          <div className="flex gap-12">
            <img src={examieLogo} alt="Examie logo" />
            <div className="flex items-center">
              <button className="bg-yellow-500 hover:bg-yellow-600 transition-all duration-300 p-2 px-6 text-sm rounded-full text-slate-50 font-black">
                O NAS
              </button>
            </div>
          </div>

          <div className="flex items-center">
            <button className="bg-yellow-500 hover:bg-yellow-600 transition-all duration-300 p-2 px-6 text-sm rounded-full text-slate-50 font-black">
              ZALOGUJ
            </button>
          </div>
        </div>
      </header>
      <section className="bg-slate-300 w-full h-96 flex items-center justify-between">
        <div className="px-12 flex flex-col items-start gap-2">
          <div className="bg-slate-100 p-2 text-5xl font-black">ZDAJ</div>
          <div className="bg-slate-100 p-2 text-5xl font-black">EGZAMIN</div>
          <div className="bg-slate-100 p-2 text-5xl font-black">NA</div>
          <div className="bg-slate-100 p-2 text-5xl font-black">POZIOMIE!</div>
        </div>
        <div className="bg-slate-600 w-2/3 h-full px-12 flex items-center justify-between">
          <button className="w-72 h-48 flex justify-center flex-col items-center gap-8 bg-yellow-500 hover:bg-yellow-600 transition-all duration-300 rounded-xl font-black text-3xl">
            <div className="w-12 h-12 bg-black"></div>
            <span>ĆWICZENIA</span>
          </button>
          <button className="w-72 h-48 flex justify-center flex-col items-center gap-8 bg-yellow-500 hover:bg-yellow-600 transition-all duration-300 rounded-xl font-black text-3xl">
            <div className="w-12 h-12 bg-black"></div>
            <span>QUIZY</span>
          </button>
          <button className="w-72 h-48 flex justify-center flex-col items-center gap-8 bg-yellow-500 hover:bg-yellow-600 transition-all duration-300 rounded-xl font-black text-3xl">
            <div className="w-12 h-12 bg-black"></div>
            <span>ARKUSZE</span>
          </button>
        </div>
      </section>
      <section className="px-12 flex justify-evenly items-center flex-col">
        <div className="p-16 text-5xl font-black">
          <h1>EGZAMINY ZAWODOWE</h1>
        </div>
        <div className="flex justify-between w-full">
          <div className="bg-zinc-400 p-6 h-64 w-96 rounded-xl flex flex-col justify-end">
            <p className="text-slate-100 font-black">
              <span className="text-zinc-900">TECHNIK</span> INFORMATYK
            </p>
            <p className="text-7xl text-slate-100 font-black"><span className="text-zinc-900">INF</span>02</p>
          </div>
          <div className="bg-slate-400 p-6 h-64 w-96 rounded-xl flex flex-col justify-end">
            <p className="text-slate-100 font-black">
              <span className="text-zinc-900">TECHNIK</span> INFORMATYK
            </p>
            <p className="text-slate-100 font-black">
              <span className="text-zinc-900">TECHNIK</span> PROGRAMISTA
            </p>
            <p className="text-7xl text-slate-100 font-black"><span className="text-zinc-900">INF</span>03</p>
          </div>
          <div className="bg-gray-400 p-6 h-64 w-96 rounded-xl flex flex-col justify-end">
            <p className="text-slate-100 font-black">
              <span className="text-zinc-900">TECHNIK</span> PROGRAMISTA
            </p>
            <p className="text-7xl text-slate-100 font-black"><span className="text-zinc-900">INF</span>04</p>
          </div>
        </div>
        <div></div>
      </section>
    </main>
  );
}

export default App;
