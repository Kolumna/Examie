import TitleField from "../elements/course/fields/TitleFiled";

const CourseLoading = () => {
  return (
    <>
      <section className="flex flex-col font-bold text-md">
        <ul className="bg-slate-200 pr-4 py-4 rounded-lg text-lg flex flex-col gap-2 sticky top-[120px]">
          <div className="flex items-center gap-2">
            <span className="h-full px-5 flex items-center bg-slate-500 text-slate-50 rounded-r-lg"></span>
            <div className="p-6 w-64 bg-slate-50 animate-pulse cursor-pointer rounded-lg"></div>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-full px-5 flex items-center bg-slate-500 text-slate-50 rounded-r-lg"></span>
            <div className="p-6 w-64 bg-slate-50 animate-pulse cursor-pointer rounded-lg"></div>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-full px-5 flex items-center bg-slate-500 text-slate-50 rounded-r-lg"></span>
            <div className="p-6 w-64 bg-slate-50 animate-pulse cursor-pointer rounded-lg"></div>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-full px-5 flex items-center bg-slate-500 text-slate-50 rounded-r-lg"></span>
            <div className="p-6 w-64 bg-slate-50 animate-pulse cursor-pointer rounded-lg"></div>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-full px-5 flex items-center bg-slate-500 text-slate-50 rounded-r-lg"></span>
            <div className="p-6 w-64 bg-slate-50 animate-pulse cursor-pointer rounded-lgl"></div>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-full px-5 flex items-center bg-slate-500 text-slate-50 rounded-r-lg"></span>
            <div className="p-6 w-64 bg-slate-50 animate-pulse cursor-pointer rounded-lg"></div>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-full px-5 flex items-center bg-slate-500 text-slate-50 rounded-r-lg"></span>
            <div className="p-6 w-64 bg-slate-50 animate-pulse cursor-pointer rounded-lg"></div>
          </div>
        </ul>
      </section>

      <section className="max-w-5xl px-4 flex flex-col gap-12">
        <section className="flex flex-col gap-16">
          <TitleField loading />
          <div className="bg-slate-200 w-full rounded-lg h-72 animate-pulse"></div>
          <div className="bg-slate-200 w-full rounded-lg h-48 animate-pulse"></div>
          <div className="bg-slate-200 w-full rounded-lg h-24 animate-pulse"></div>
        </section>
        <footer className="flex justify-end gap-4">
          <div className="animate-pulse hover:bg-slate-300 p-4 px-12 bg-slate-200 rounded-lg font-bold"></div>
          <div className="animate-pulsem hover:bg-slate-300 p-4 px-12 bg-slate-200 rounded-lg font-bold"></div>
        </footer>
      </section>

      <section className="">
        <div className="sticky top-[120px]">
          <h2 className="mb-6 font-bold">Na tej stronie</h2>
          <ul className="text-sm w-48 flex flex-col gap-2">
            <li className="flex items-center gap-2 cursor-pointer w-full">
              <div className="p-4 bg-slate-200 animate-pulse cursor-pointer rounded-lg font-bold w-full"></div>
            </li>
            <li className="flex items-center gap-2 cursor-pointer w-full">
              <div className="p-4 bg-slate-200 animate-pulse cursor-pointer rounded-lg font-bold w-full"></div>
            </li>
            <li className="flex items-center gap-2 cursor-pointer w-full">
              <div className="p-4 bg-slate-200 animate-pulse cursor-pointer rounded-lg font-bold w-full"></div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default CourseLoading;
