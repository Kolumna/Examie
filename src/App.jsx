import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/layouts/Footer";
import Header from "./components/layouts/Header";
import Home from "./pages/Home";
import Module from "./pages/modules/Module";
import About from "./pages/About";
import Layout from "./components/layouts/Layout";
import Quizz from "./pages/modules/Quizz";
import { Suspense } from "react";
import ScrollToUp from "./helpers/ScrollToUp";

function App() {
  const header = <Header />;

  const content = (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/modules" element={<About />} />
        <Route path="/modules/:modules" element={<Module />} />
        <Route path="/modules/:modules/quizzes" element={<Quizz />} />
      </Routes>
    </Suspense>
  );

  const footer = <Footer />;

  return (
    <main className="bg-yellow-500 min-h-screen">
      <Router>
        <ScrollToUp>
          <Layout header={header} content={content} footer={footer} />
        </ScrollToUp>
      </Router>
    </main>
  );
}

export default App;
