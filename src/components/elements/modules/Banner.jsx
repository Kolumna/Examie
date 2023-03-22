const Banner = (props) => {
  return (
    <section>
      {props.loading ? (
        <div className="bg-slate-300 w-full h-96 flex items-center justify-between">
          <div className="bg-slate-400 flex-col w-1/3 h-96 flex items-start justify-center gap-4 px-12">
            <div className="h-12 w-2/3 bg-zinc-900 animate-pulse"></div>
            <div className="h-12 w-full bg-zinc-900 animate-pulse"></div>
            <div className="h-12 w-3/4 bg-zinc-900 animate-pulse"></div>
            <div className="h-12 w-full bg-zinc-900 animate-pulse"></div>
          </div>
          <div className="bg-slate-300 w-full h-36 flex items-center justify-between"></div>
        </div>
      ) : (
        <div className="bg-slate-300 w-full h-96 flex items-center justify-between">
          <div className="bg-slate-400 w-1/3 h-96 flex items-center justify-between px-12">
            <span className="text-6xl font-black">
              {props.title}
              <span className="text-slate-200"></span>
            </span>
          </div>
          <div className="bg-slate-300 w-full h-36 flex items-center justify-between"></div>
        </div>
      )}
    </section>
  );
};

export default Banner;
