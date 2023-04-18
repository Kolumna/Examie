import { MdPhoto } from "react-icons/md";

const Section = (props) => {
  return (
    <section className={`${props.bgColor ?? "bg-slate-100"} px-4 md:px-8`}>
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
              className={`flex justify-center gap-12 md:gap-24 ${
                props.col ? "flex-col" : ""
              }`}
            >
              {props.children}
            </div>
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
