import { Head, About, Contact, Footer, Main } from "./components/index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {

  return (
    <Router>
      <div className="flex flex-col justify-center items-center min-h-screen">
        <Head />
        <div className="grow self-stretch flex justify-center items-center">
          <Routes >
            <Route path="/cryptoFOMO/" element={<Main />}/>
            <Route path="/cryptoFOMO/about" element={<About />}/>
            <Route path="/cryptoFOMO/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
