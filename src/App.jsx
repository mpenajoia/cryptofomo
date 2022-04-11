import { Head, About, Contact, Footer, Main } from "./components/index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {

  return (
    <Router>
      <div>
        <Head />
        <Routes >
          <Route path="/" element={<Main />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
