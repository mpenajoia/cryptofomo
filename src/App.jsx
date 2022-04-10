import { Head, About, Contact, Footer, Main } from "./components/index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {

  return (
    <Router>
      <Head />
      <Routes >
        <Route path="/" element={<Main />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
