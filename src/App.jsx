import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/book/Home";
import Framework from "./pages/book/Framework";
import ConceptDetail from "./pages/book/ConceptDetail";
import About from "./pages/book/About";
import ComingSoon from "./pages/learn/ComingSoon";

export default function App() {
  return (
    <div
      style={{
        maxWidth: "var(--max-width)",
        margin: "0 auto",
        background: "var(--bg)",
        minHeight: "100vh",
        fontFamily: "var(--font-body)",
      }}
    >
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/framework" element={<Framework />} />
        <Route path="/framework/:conceptId" element={<ConceptDetail />} />
        <Route path="/book" element={<About />} />
        <Route path="/learn/:discipline" element={<ComingSoon />} />
      </Routes>
      <Footer />
    </div>
  );
}
