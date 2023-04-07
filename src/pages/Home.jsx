import Banner from "../components/elements/home/Banner";
import Section from "../components/elements/home/Section";
import { egzaminyZawodowe } from "../helpers/api";

export default function Home(props) {
  return (
    <>
      <Banner />
      <Section
        className="bg-slate-200"
        label="EGZAMINY ZAWODOWE"
        kafle={egzaminyZawodowe.slice(0, 3).map((kafel) => kafel)}
        inf
        technik
      />
      <Section
        className="bg-slate-100"
        label="MATURKA Z INFY"
        content="JUŻ WKRÓTCE!"
      />
    </>
  );
}
