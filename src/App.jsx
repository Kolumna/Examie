import Footer from "./components/elements/Footer";
import Header from "./components/elements/Header";
import Banner from "./components/elements/home/Banner";
import Section from "./components/elements/home/Section";

function App() {
  return (
    <main className="bg-yellow-500 min-h-screen">
      <Header />
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
      <Section className="bg-slate-200" label="MATURKA Z INFY" content="JUŻ WKRÓTCE!" />
      <Footer />
    </main>
  );
}

export default App;
