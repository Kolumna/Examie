import { useEffect } from "react";

const TitleField = (props) => {
  useEffect(() => {
    props.stepsHandler && props.stepsHandler(props.value.split(" ").join("-"));
  }, [props.value]);

  return (
    <div className="flex flex-col">
      {props.value && (
        <>
          <span className="text-gray-300 font-bold">TEMAT</span>
          <hr className="border-2 mb-12"></hr>
        </>
      )}
      <div
        id={props.value && props.value.split(" ").join("-")}
        key={props.value && props.value}
        className="flex items-center gap-8"
      >
        {props.img && <img width={64} height={"100%"} src={props.img} />}
        {props.value && <h1 className="text-5xl font-bold">{props.value}</h1>}
        {props.loading && (
          <div className="flex gap-8">
            <div className="animate-pulse h-24 w-1/6 bg-slate-200 rounded-lg"></div>
            <div className="animate-pulse h-24 w-[900px] bg-slate-200 rounded-lg"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TitleField;
