import { Head, About, Contact, Footer, Main } from "./components/index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {

  return (
    <Router>
      <div className="flex flex-col justify-center items-center min-h-screen">
        <Head />
        <div className="grow self-stretch">
          <Routes >
            <Route path="/" element={<Main />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
