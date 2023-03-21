export default function App() {
  return (
    <section className="bg-slate-300 w-full h-96 flex items-center justify-between">
      <div className="px-12 max-w-7xl flex flex-col items-start gap-2">
        <div className="bg-slate-100 p-2 text-5xl font-black">ZDAJ</div>
        <div className="bg-slate-100 p-2 text-5xl font-black">EGZAMIN</div>
        <div className="bg-slate-100 p-2 text-5xl font-black">NA</div>
        <div className="bg-slate-100 p-2 text-5xl font-black">POZIOMIE!</div>
      </div>
      <div className="bg-slate-600 w-2/3 h-full px-12 flex items-center justify-end gap-12">
        <button className="w-72 h-48 flex justify-center flex-col items-center gap-8 bg-yellow-500 hover:bg-yellow-600 transition-all duration-300 rounded-xl font-black text-3xl">
          <div className="w-18 h-18">
            <img src="https://img.icons8.com/external-phatplus-lineal-color-phatplus/64/null/external-practice-online-courses-phatplus-lineal-color-phatplus.png" />
          </div>
          <span>ĆWICZENIA</span>
        </button>
        <button className="w-72 h-48 flex justify-center flex-col items-center gap-8 bg-yellow-500 hover:bg-yellow-600 transition-all duration-300 rounded-xl font-black text-3xl">
          <div className="w-18 h-18">
            <img src="https://img.icons8.com/external-phatplus-lineal-color-phatplus/64/null/external-checklist-online-courses-phatplus-lineal-color-phatplus.png" />
          </div>
          <span>QUIZY</span>
        </button>
        <button className="w-72 h-48 flex justify-center flex-col items-center gap-8 bg-yellow-500 hover:bg-yellow-600 transition-all duration-300 rounded-xl font-black text-3xl">
          <div className="w-18 h-18">
            <img src="https://img.icons8.com/external-phatplus-lineal-color-phatplus/64/null/external-file-online-courses-phatplus-lineal-color-phatplus.png" />
          </div>
          <span>ARKUSZE</span>
        </button>
      </div>
    </section>
  );
}
