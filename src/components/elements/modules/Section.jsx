const Section = (props) => {
  console.log(props.bgColor)

  return (
    <section className={`${props.bgColor ?? "bg-slate-100"}`}>
      <section className="container mx-auto flex items-center justify-between gap-24 py-24">
        {!props.right && !props.left && (
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
          <div className={`w-full h-96 ${props.color ?? "bg-slate-400"} rounded-xl`}></div>
        )}
        {props.left && (
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
      </section>
    </section>
  );
};

export default Section;
