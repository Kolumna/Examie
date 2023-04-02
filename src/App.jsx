import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/layouts/Footer";
import Header from "./components/layouts/Header";
import Home from "./pages/Home";
import Module from "./pages/modules/Module";
import About from "./pages/About";
import Layout from "./components/layouts/Layout";
import Quiz from "./pages/modules/quiz/Quiz";
import { Suspense } from "react";
import ScrollToUp from "./hoc/ScrollToUp";
import Learning from "./pages/learning/Learning";
import Exam from "./pages/modules/quiz/Exam";
import Videos from "./pages/videos/Videos";
import Profile from "./pages/auth/Profile";

function App() {
  const header = <Header />;

  //Routing stron
  const content = (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/learning" element={<Learning />} />
        <Route path="/learning/:course" element={<Learning />} />
        <Route path="/modules" element={<About />} />
        <Route path="/modules/:modules" element={<Module />} />
        <Route path="/modules/:modules/quiz" element={<Quiz />} />
        <Route path="/modules/:modules/quiz/exam" element={<Exam />} />
        <Route path="/videos/" element={<Videos />} />
        <Route path="/videos/:what/" element={<Videos />} />
        <Route path="/videos/:what/:video" element={<Videos />} />
        <Route path="/profile" element={<Profile />} />
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
