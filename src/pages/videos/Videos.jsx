import { useParams } from "react-router-dom";

function Videos(props) {
  const { what } = useParams();

  return <h1>Videos {what}</h1>;
}

export default Videos;
