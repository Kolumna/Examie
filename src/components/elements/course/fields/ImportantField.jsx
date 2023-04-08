import { MdInfo } from "react-icons/md";

const ImportantField = (props) => {
  return (
    <p
      className="text-2xl flex gap-6 items-center p-5 py-8 bg-slate-200 rounded-xl font-bold"
    >
      <span className="text-3xl">
        <MdInfo />
      </span>
      {props.value}
    </p>
  );
};

export default ImportantField;
