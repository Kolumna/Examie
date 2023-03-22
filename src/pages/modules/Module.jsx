import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Banner from "../../components/elements/modules/Banner";

export default function Module(props) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  const { modules } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setData({
        nrKwalifikacji: modules,
        kwalifikacje: { name: ["INFORMATYK", "PROGRAMISTA"] },
        color: "bg-gray-400",
      });
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <section>
      {!loading ? (
        <Banner title={`WITAJ W MODULE KWALIFIKACJI ${modules.toUpperCase()}`} />
      ) : (
        <Banner loading />
      )}
    </section>
  );
}
