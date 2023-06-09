import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/layouts/Footer";
import Header from "./components/layouts/Header";
import Home from "./pages/Home";
import Module from "./pages/modules/Module";
import About from "./pages/About";
import Layout from "./components/layouts/Layout";
import Quiz from "./pages/modules/quiz/Quiz";
import ScrollToUp from "./hoc/ScrollToUp";
import Learning from "./pages/learning/Learning";
import Exam from "./pages/modules/quiz/Exam";
import Videos from "./pages/videos/Videos";
import Course from "./pages/learning/Course";
import Arkusze from "./pages/Arkusze";
import Forum from "./pages/Forum";
import Login from "./pages/auth/Login";
import AuthContext from "./context/authContext";
import { useEffect, useState } from "react";
import Register from "./pages/auth/Register";

function App() {
  const [auth, setAuth] = useState({
    isAuth: localStorage.getItem("user") ? true : false,
    user: localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : null,
  });
  const [textSize, setTextSize] = useState(2);
  const [textStyle, setTextStyle] = useState("");

  useEffect(() => {
    switch(textSize) {
      case 1:
        setTextStyle("text-sm");
        break;
      case 2:
        setTextStyle("text-base");
        break;
      case 3:
        setTextStyle("text-lg");
        break;
      case 4:
        setTextStyle("text-xl");
    }
  }, [textSize])

  const header = <Header setTextSize={(value) => setTextSize(value)} />;

  //Routing stron
  const content = (
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
      <Route path="/quizes/:modules" element={<Quiz />} />
      <Route path="/exams/:modules" element={<Exam />} />
      <Route path="/videos/" element={<Videos />} />
      <Route path="/videos/:what/" element={<Videos />} />
      <Route path="/videos/:what/:video" element={<Videos />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );

  const footer = <Footer />;

  return (
    <main className={`bg-amber-400 min-h-screen transition-all duration-200`}>
      <Router>
        <AuthContext.Provider
          value={{
            user: auth.user,
            login: (user) => {
              setAuth({ isAuth: true, user });
              localStorage.setItem("user", JSON.stringify(user));
            },
            logout: () => {
              setAuth({ isAuth: false, user: null });
              localStorage.removeItem("user");
            },
          }}
        >
          <ScrollToUp>
            <Layout header={header} content={content} footer={footer} />
          </ScrollToUp>
        </AuthContext.Provider>
      </Router>
    </main>
  );
}

export default App;
