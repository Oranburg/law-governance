/* % voice-check: skip (CSS custom-property names require -- syntax) */
import { Routes, Route, useLocation } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Breadcrumb from "./components/Breadcrumb";
import Home from "./pages/book/Home";
import Framework from "./pages/book/Framework";
import ConceptDetail from "./pages/book/ConceptDetail";
import About from "./pages/book/About";
import ComingSoon from "./pages/learn/ComingSoon";

function PageWrapper({ children }) {
  const location = useLocation();
  const trail = [{ label: "oranburg.law", href: "https://oranburg.law" }];
  const labelMap = {
    "/": "How Law Creates and Destroys the Capacity to Govern",
    "/framework": "Framework",
    "/book": "About the Book",
  };
  const current = labelMap[location.pathname] ?? location.pathname.split("/").filter(Boolean).pop();
  return (
    <>
      <Breadcrumb trail={trail} current={current} />
      {children}
    </>
  );
}

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
      <PageWrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/framework" element={<Framework />} />
          <Route path="/framework/:conceptId" element={<ConceptDetail />} />
          <Route path="/book" element={<About />} />
          <Route path="/learn/:discipline" element={<ComingSoon />} />
        </Routes>
      </PageWrapper>
      <Footer
        links={[
          { label: "oranburg.law", href: "https://oranburg.law" },
          { label: "Scholarship", href: "https://oranburg.law/scholarship/" },
        ]}
        copyright="© 2026 Seth C. Oranburg. All rights reserved."
      />
    </div>
  );
}
