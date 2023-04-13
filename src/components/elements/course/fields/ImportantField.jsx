import { MdInfo } from "react-icons/md";

const ImportantField = (props) => {
  return (
    <p
      className="text-2xl flex gap-5 border-4 border-slate-200 items-center p-5 bg-slate-100 rounded-xl font-bold"
    >
      <span className="text-3xl">
        <MdInfo />
      </span>
      {props.value}
    </p>
  );
};

export default ImportantField;
