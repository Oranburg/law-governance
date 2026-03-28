import { Routes, Route } from "react-router-dom";
import { B, fonts } from "./brand/tokens";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/book/Home";
import Framework from "./pages/book/Framework";
import ConceptDetail from "./pages/book/ConceptDetail";
import About from "./pages/book/About";

export default function App() {
  return (
    <div
      style={{
        maxWidth: 1100,
        margin: "0 auto",
        background: B.white,
        minHeight: "100vh",
        fontFamily: fonts.body,
      }}
    >
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/framework" element={<Framework />} />
        <Route path="/framework/:conceptId" element={<ConceptDetail />} />
        <Route path="/book" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}
