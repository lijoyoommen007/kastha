import './App.css';
import Home from './pages/Home';
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes
} from "react-router-dom";
import TopBar from './Components/NavBarHeader/TopBar';
import NavBarHeader from './Components/NavBarHeader/NavBarHeader';
import DoorsPage from './pages/DoorsPage';
import veenerData from "./Datas/doorsData.json"
import Features from './pages/Features';
import ContactUsPage from './pages/ContactUsPage';
import GalleryPage from './pages/GalleryPage';
import Clients from './pages/Clients';

function App() {
  return (
    <Router>
      <TopBar />
      <NavBarHeader/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/veener-doors" element={<DoorsPage data={veenerData} />} />
        <Route path="/features" element={<Features/>} />
        <Route path="/contactus" element={<ContactUsPage/>} />
        <Route path="/gallery" element={<GalleryPage/>} />
        <Route path="/clients" element={<Clients/>} />

      </Routes>
    </Router>
  );
}

export default App;
