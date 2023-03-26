import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/layouts/Footer";
import Header from "./components/layouts/Header";
import Home from "./pages/Home";
import Module from "./pages/modules/Module";
import About from "./pages/About";
import Layout from "./components/layouts/Layout";
import Quizz from "./pages/modules/Quizz";

function App() {
  const header = <Header />;

  const content = (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/modules" element={<About />} />
      <Route path="/modules/:modules" element={<Module />} />
      <Route path="/modules/:modules/quizzes" element={<Quizz />} />
    </Routes>
  );

  const footer = <Footer />;

  return (
    <main className="bg-yellow-500 min-h-screen">
      <Router>
        <Layout header={header} content={content} footer={footer} />
      </Router>
    </main>
  );
}

export default App;
