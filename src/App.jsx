import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { Suspense } from "react";
import Splash from "./components/Splash";
const MainLayout = React.lazy(() => import("./layout/MainLayout"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const Home = React.lazy(() => import("./pages/Home"));
const HomePage = React.lazy(() => import("./pages/HomePage"));
const About = React.lazy(() => import("./pages/About"));
const Works = React.lazy(() => import("./pages/Works"));
const Contact = React.lazy(() => import("./pages/Contact"));

function App() {
  return (
    <Suspense fallback={<Splash />}>
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/homepage" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/works" element={<Works />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </Router>
    </Suspense>
  );
}

export default App;
