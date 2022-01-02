import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './pages/Home/Home/Home';
import ServiceHome from './pages/Services/ServiceHome/ServiceHome';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Home />} />
          </Route>
          <Route path="getStarted" element={<h1>Get Started</h1>} />
          <Route path="donation" element={<h1>Donation</h1>} />
          <Route path="services" element={<ServiceHome/>} />
          <Route path="*" element={<h1>Not found</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
