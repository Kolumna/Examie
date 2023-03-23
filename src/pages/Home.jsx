import Banner from "../components/elements/home/Banner";
import Section from "../components/elements/home/Section";

const egzaminyZawodowe = [
  {
    nrKwalifikacji: "02",
    kwalifikacje: { name: ["INFORMATYK"] },
    color: "bg-slate-400",
  },
  {
    nrKwalifikacji: "03",
    kwalifikacje: { name: ["INFORMATYK", "PROGRAMISTA"] },
    color: "bg-gray-400",
  },
  {
    nrKwalifikacji: "04",
    kwalifikacje: { name: ["PROGRAMISTA"] },
    color: "bg-zinc-400",
  },
  {
    nrKwalifikacji: "05",
    kwalifikacje: { name: ["TEST"] },
    color: "bg-green-400",
  },
];

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
