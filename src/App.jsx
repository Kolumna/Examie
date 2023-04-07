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
import Course from "./pages/learning/Course";
import Arkusze from "./pages/Arkusze";
import Forum from "./pages/Forum";
import Login from "./pages/auth/Login";

function App() {
  const header = <Header />;

  //Routing stron
  const content = (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sheets" element={<Arkusze />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/learning" element={<Learning />} />
        <Route path="/learning/:course" element={<Course />} />
        <Route path="/learning/:course/:lesson" element={<Course />} />
        <Route path="/modules" element={<About />} />
        <Route path="/modules/:modules" element={<Module />} />
        <Route path="/modules/:modules/quiz" element={<Quiz />} />
        <Route path="/modules/:modules/quiz/exam" element={<Exam />} />
        <Route path="/videos/" element={<Videos />} />
        <Route path="/videos/:what/" element={<Videos />} />
        <Route path="/videos/:what/:video" element={<Videos />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Suspense>
  );

  const footer = <Footer />;

  return (
    <main className="bg-amber-400 min-h-screen">
      <Router>
        <ScrollToUp>
          <Layout header={header} content={content} footer={footer} />
        </ScrollToUp>
      </Router>
    </main>
  );
}

export default App;
