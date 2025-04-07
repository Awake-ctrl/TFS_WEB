import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';

import ArticlePage from "./pages/ArticlePage";
import Author from "./pages/Authors/Author";

import Home from "./pages/Home";
import Bytes from "./pages/Bytes";
// import News from "./pages/News";
// import Sports from "./pages/Sports";
// import Spotlight from "./pages/Spotlight";
// import Interviews from "./pages/Interviews";
import About_us from "./pages/About";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  // const [token, setToken] = useState(false);
  return (
    <Router>
      <Routes>
        <Route path="/Article/:id" element={<ArticlePage />} />
        <Route path="/Authors/:author" element={<Author />} />
        <Route path="/" element={<Home />} />
        <Route path="/Bytes" element={<Bytes />} />
        {/* <Route path="/News" element={<News />} /> */}
        {/* <Route path="/Sports" element={<Sports />} /> */}
        {/* <Route path="/Spotlight" element={<Spotlight />} /> */}
        {/* <Route path="/Interviews" element={<Interviews />} /> */}
        <Route path="/About_us" element={<About_us />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
