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
import MakeAdmin from './pages/AdminPanel/MakeAdmin/MakeAdmin';
import AddEvent from './pages/AdminPanel/AddEvent/AddEvent';
import Contact from './pages/Contact/Contact';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';
import Profile from './pages/Profile/Profile';
import ParticipentList from './pages/AdminPanel/ParticipantList/ParticipentList';
import List from './pages/AdminPanel/List/List';
import AddCauses from './pages/AdminPanel/AddCauses/AddCauses';
import CausesHome from './pages/Causes/CausesHome/CausesHome';
import AdminHome from './pages/AdminPanel/AdminHome/AdminHome'
import DonationHome from './pages/Donation/DonationHome/DonationHome';
import { useEffect, useState } from 'react';
import Loaders from './pages/Shared/Loaders/Loaders';
import Credits from './pages/AdminPanel/Credits/Credits';
import NotFound from './pages/NotFound/NotFound';

function App() {
  const [isPreLoader, setIsPreLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsPreLoader(false);
    }, 2500);
  });
  return (
    isPreLoader === true ? <Loaders />
      :
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
              <Route path="eventDetail/:id" element={
                <PrivateRoute> <EventDetail /></PrivateRoute>
              } />

              <Route path="adminPanel" element={
                <AdminHome />
              } >
                <Route path="makeAdmin" element={<MakeAdmin />} />
                <Route path="projectMembers" element={<Credits />} />
                <Route path="addEvent" element={<AddEvent />} />
                <Route path="addCauses" element={<AddCauses />} />
                <Route path="participant" element={<ParticipentList />} >
                  <Route path="list/:title" element={<List />} />
                </Route>
              </Route>


              <Route path="/contact" element={<Contact></Contact>} />
              <Route path="donation" element={
                <PrivateRoute><DonationHome /></PrivateRoute>
              } />
              <Route path="about" element={<ServiceHome />} />
              <Route path="profile" element={<Profile />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </AuthProvider>
      </div >
  );
}

export default App;
