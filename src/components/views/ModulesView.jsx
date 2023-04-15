import { useEffect, useState } from "react";
import Kafel from "../Kafel";
import axios from "axios";
import { nestedObjectToArray } from "../../helpers/nestedObjects";

function ModulesView(props) {
  const [modules, setModules] = useState([{}]);
  const [loading, setLoading] = useState(true);

  const fetchModules = async () => {
    const res = await axios.get(
      `https://examie-default-rtdb.europe-west1.firebasedatabase.app/modules.json`
    );
    setModules(nestedObjectToArray(res.data));
    setLoading(false);
  };

  useEffect(() => {
    fetchModules();
  }, []);

  console.log(modules);

  return (
    <section className="flex justify-between w-full gap-8">
      {!loading &&
        (props.all
          ? modules.map((kafel) => (
              <Kafel
                key={kafel._id}
                nrKwalifikacji={kafel.nrKwalifikacji}
                kwalifikacje={[...kafel.kwalifikacje.name]}
                inf={kafel.typKwalifikacji}
                technik={kafel.zawod}
                className={`${kafel.color} ${kafel.border}`}
                active={kafel.active}
              />
            ))
          : modules
              .filter((kafel) => kafel.active)
              .map((kafel) => (
                <Kafel
                  key={kafel._id}
                  nrKwalifikacji={kafel.nrKwalifikacji}
                  kwalifikacje={[...kafel.kwalifikacje.name]}
                  inf={kafel.typKwalifikacji}
                  technik={kafel.zawod}
                  className={`${kafel.color} ${kafel.border}`}
                  active={kafel.active}
                />
              )))}
      {loading && (
        <>
          <div className="bg-slate-400 w-[384px] h-[256px] rounded-xl animate-pulse"></div>
          <div className="bg-slate-400 w-[384px] h-[256px] rounded-xl animate-pulse"></div>
          <div className="bg-slate-400 w-[384px] h-[256px] rounded-xl animate-pulse"></div>
        </>
      )}
    </section>
  );
}

export default ModulesView;
