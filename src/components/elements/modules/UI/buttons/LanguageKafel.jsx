const LanguageKafel = (props) => {
  return (
    <div className="bg-slate-300 transition-all duration-200 hover:bg-yellow-500 flex-col border-8 border-zinc-900 w-96 h-36 flex justify-center items-center text-4xl font-bold">
      <span className="text-2xl font-black">{props.language}</span>
    </div>
  );
};

export default LanguageKafel;
