import Banner from "../components/elements/home/Banner";
import Section from "../components/elements/home/Section";

export default function Home() {
  return (
    <>
      <Banner />
      <Section
        className="bg-slate-200"
        label="EGZAMINY ZAWODOWE"
        kafle
        inf
        technik
      />
      <Section
        className="bg-white"
        label="MATURKA Z INFY"
        content="JUŻ WKRÓTCE!"
      />
    </>
  );
}
