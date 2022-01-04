import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home/Home';
import ServiceHome from './pages/Services/ServiceHome/ServiceHome';
import AuthProvider from './context/AuthProvider';
import Login from './pages/Login/Login/Login';
import Resister from './pages/Login/Resister/Resister';
import EventsHome from './pages/Events/EventsHome/EventsHome';
import EventDetail from './pages/Events/EventDetail/EventDetail';
import AdminHome from './pages/AdminPanel/AdminHome/AdminHome';
import MakeAdmin from './pages/AdminPanel/MakeAdmin/MakeAdmin';
import AddEvent from './pages/AdminPanel/AddEvent/AddEvent';
import Contact from './pages/Contact/Contact';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';

import AddCauses from './pages/AdminPanel/AddCauses/AddCauses';
import CausesHome from './pages/Causes/CausesHome/CausesHome';

import DonationHome from './pages/Donation/DonationHome/DonationHome';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}>
              <Route index element={<Home />} />
            </Route>
            <Route path="/home" element={<Home />} />
            <Route path="login" element={<Login />}></Route>
            <Route path="resister" element={<Resister />}></Route>

            <Route path="getStarted" element={<EventsHome />} />
            <Route path="causes" element={<CausesHome />} />
            <Route path="eventDetail/:id" element={<EventDetail />} />

            <Route path="adminPanel" element={
              <AdminHome />
            } >
              <Route path="makeAdmin" element={<MakeAdmin />} />
              <Route path="addEvent" element={<AddEvent />} />
              <Route path="addCauses" element={<AddCauses />} />
            </Route>

            <Route path="/contact" element={<Contact></Contact>} />
            <Route path="donation" element={<DonationHome />} />
            <Route path="about" element={
              <PrivateRoute><ServiceHome /></PrivateRoute>
            } />
            <Route path="*" element={<h1>Not found</h1>} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div >
  );
}

export default App;
