import { MdPhoto } from "react-icons/md";

const Section = (props) => {
  return (
    <section className={`${props.bgColor ?? "bg-slate-100"} px-4`}>
      <section className="container mx-auto flex items-center justify-between gap-24 py-16 xl:py-24">
        {!props.right && !props.left && (
          <div className={`container mx-auto`}>
            <div
              className={`flex justify-center gap-16 xl:gap-24 ${
                props.col ? "flex-col" : ""
              }`}
            >
              {props.children}
            </div>
          </div>
        )}
        {props.right && (
          <div className={`container mx-auto`}>
            <div
              className={`flex justify-center gap-24 ${
                props.col ? "flex-col" : ""
              }`}
            >
              {props.children}
            </div>
          </div>
        )}
        {(props.left || props.right) && (
          <div
            className={`w-full hidden h-64 lg:h-96 ${
              props.color ?? "bg-slate-400"
            } rounded-xl md:flex justify-center items-center text-7xl text-zinc-800`}
          >
            <MdPhoto />
          </div>
        )}
        {props.left && (
          <div className={`container mx-auto`}>
            <div
              className={`flex justify-center items-center gap-12 ${
                props.col ? "flex-col" : ""
              }`}
            >
              {props.children}
            </div>
          </div>
        )}
      </section>
    </section>
  );
};

export default Section;
