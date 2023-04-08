const ListaField = (props) => {
  return (
    <div>
      <h2 className="text-2xl mb-8 font-bold">{props.label}</h2>
      <ul className="text-2xl font-semibold list-disc ml-14">
        {props.value.map((item) => {
          return (
            <li className="text-2xl" key={item}>
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ListaField;
