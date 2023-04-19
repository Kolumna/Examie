const ListField = (props) => {
  return (
    <div className="bg-slate-100 p-8 rounded-xl">
      <h2 className="text-2xl mb-8 font-bold">{props.label}</h2>
      <ul className="text-2xl font-semibold flex flex-col gap-2">
        {props.value.map((item) => {
          return (
            <li className="text-xl bg-white p-4 rounded-xl" key={item}>
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ListField;
