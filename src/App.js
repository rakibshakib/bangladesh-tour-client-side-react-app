import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import AuthProvider from './context/AuthProvider';
import Home from './pages/Home/Home';
import AllPackages from './pages/AllPackages/AllPackages';
import BookingPackage from './components/BookingPackage/BookingPackage';
import LoginUser from './components/LoginUser/LoginUser';
import RegisterUser from './components/RegisterUser/RegisterUser'
import NotFound from './components/NotFound/NotFound';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <NavBar />
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route exact path='/home'>
              <Home />
            </Route>
            <Route exact path='/allpackages'>
              <AllPackages />
            </Route>
            {/* private route */}
            <PrivateRoute exact path='/bookingpackage/:id'>
              <BookingPackage />
            </PrivateRoute>
            
            <Route exact path='/signin'>
              <LoginUser />
            </Route>
            <Route exact path='/signup'>
              <RegisterUser />
            </Route>
            <Route path='*'>
              <NotFound />
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
