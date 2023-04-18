const Title = (props) => {
  return (
    <div
      className={`flex ${props.textColor} justify-center text-center items-center font-extrabold ${props.size}`}
    >
      <h1>{props.title}</h1>
    </div>
  );
};

export default Title;
