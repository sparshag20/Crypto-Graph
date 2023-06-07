
import {BrowserRouter,Routes,Route} from "react-router-dom";
import './App.css';
import Header from "./components/Header";
import Coin from "./pages/Coin"
import CoinsData from "./pages/CoinsData";
import HomePage from "./pages/HomePage";
import News from "./pages/News";
import './index.css';
function App() {
  return(
  <BrowserRouter>
  <div>
  <Header />
  <Routes>
    <Route path="/" element={<HomePage />}></Route>
    <Route path="/news" element={<News />}></Route>
    <Route path="/coins" element={<CoinsData/>}></Route>
    <Route path="/coins/:id" element={<Coin />}></Route>
  </Routes>
  </div>
  </BrowserRouter>
  );
}

export default App;
