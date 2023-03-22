import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/elements/Footer";
import Header from "./components/elements/Header";
import Home from "./pages/Home";
import Module from "./pages/modules/Module";
import About from "./pages/About";

function App() {
  const content = (
    <section className="min-h-screen bg-slate-100">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/o-nas" element={<About />} />
        <Route path="/modules/:modules" element={<Module />} />
      </Routes>
    </section>
  );

  return (
    <main className="bg-yellow-500 min-h-screen">
      <Router>
        <Header />
        {content}
        <Footer />
      </Router>
    </main>
  );
}

export default App;
