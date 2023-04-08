import { useEffect } from "react";

const TitleField = (props) => {
  useEffect(() => {
    props.stepsHandler(props.value.split(" ").join("-"));
  }, [props.value]);

  return (
    <div className="flex flex-col">
      <span className="text-gray-300 font-bold">TEMAT</span>
      <hr className="border-2 mb-12"></hr>
      <div
        id={props.value.split(" ").join("-")}
        key={props.value}
        className="flex items-center gap-8"
      >
        {props.img && <img width={64} height={"100%"} src={props.img} />}
        <h1 className="text-5xl font-bold">{props.value}</h1>
      </div>
    </div>
  );
};

export default TitleField;
