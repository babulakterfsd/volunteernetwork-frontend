import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import AuthProvider from "./Assets/Context/AuthProvider";
import Footer from "./Common/commonComponents/Footer";
import Header from "./Common/commonComponents/Header";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import AllPackages from "./Pages/AllPackages/AllPackages";
import Home from "./Pages/Home/Home";
import NotFound from "./Pages/NotFound/NotFound";
import Process from "./Pages/Process/Process";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import PrivateRoute from "./Common/utilityComponents/PrivateRoute";
import DetailedService from "./Pages/DetailedService/DetailedService";
import Events from "./Pages/Events/Events";
import Order from "./Pages/Order/Order";
import AddUser from "./Pages/AddUser/AddUser";
import UpdatePack from "./Pages/UpdatePack/UpdatePack";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route exact path="/home">
            <Home></Home>
          </Route>

          <Route exact path="/about">
            <About></About>
          </Route>

          <Route exact path="/allpackages">
            <AllPackages></AllPackages>
          </Route>

          <Route exact path="/process">
            <Process></Process>
          </Route>

          <PrivateRoute exact path="/events">
            <Events></Events>
          </PrivateRoute>

          <PrivateRoute exact path="/order">
            <Order></Order>
          </PrivateRoute>

          <Route exact path="/contact">
            <Contact></Contact>
          </Route>

          <Route exact path="/login">
            <Login></Login>
          </Route>

          <Route exact path="/register">
            <Register></Register>
          </Route>

          <PrivateRoute exact path="/DetailedService/:packageId">
            <DetailedService></DetailedService>
          </PrivateRoute>

          <PrivateRoute exact path="/DetailedService/:packageId/updatepack">
            <UpdatePack></UpdatePack>
          </PrivateRoute>

          <PrivateRoute exact path="/adduser">
            <AddUser></AddUser>
          </PrivateRoute>

          <Route path="*">
            <NotFound></NotFound>
          </Route>
          
        </Switch>
        <Footer></Footer>
      </Router>
    </AuthProvider>
  );
}

export default App;
