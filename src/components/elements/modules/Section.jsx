const Section = (props) => {
  return (
    <section className={`${props.bgColor ?? "bg-slate-100"}`}>
      <div className={`container mx-auto p-24 flex justify-center gap-24 ${props.col ? "flex-col" : ""}`}>
        {props.children}
      </div>
    </section>
  );
};

export default Section;
