import Banner from "../components/elements/home/Banner";
import Section from "../components/elements/home/Section";

export default function Home(props) {
  return (
    <>
      <Banner />
      <Section
        className="bg-slate-100"
        label="EGZAMINY ZAWODOWE"
        kafle={[
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
        ]}
        inf
        technik
      />
      <Section
        className="bg-slate-200"
        label="MATURKA Z INFY"
        content="JUŻ WKRÓTCE!"
      />
    </>
  );
}
