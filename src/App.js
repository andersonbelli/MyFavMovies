import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

import logo from '../src/assets/logo.png';

import { isUserLogged } from './env_variables';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

import Home from './Components/Home/Home';
import FavMovies from './Components/FavMovies';
import SearchBox from './Components/SearchBox/SearchBox';
import Login from './Components/Login/Login';
import SearchPage from './Components/SearchPage/SearchPage';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function App() {
  const history = useHistory();

  return (
    <Router>
      <Navbar bg="dark" variant="dark" expand="lg">
        {/* <Navbar bg="light" variant="light" expand="lg"> */}
        <Container>
          <Navbar.Brand href="/">
            <img
              alt="logo"
              src={logo}
              // className="d-inline-block logo" />
              className=" logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="buttonCollapse" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-3">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/fav">Favorites</Nav.Link>
            </Nav>

            <Navbar.Collapse className="d-sm-flex justify-content-end">
              <Navbar.Text>
                {
                  isUserLogged ?
                    <div>Signed in as: <a href="/login">Belli Anderson</a></div> :
                    <div>
                      <a className="px-2" href="/user/login">Login</a>
                      |
                      <a className="px-2" href="/user/signup">SignUp</a>
                    </div>
                }
              </Navbar.Text>
            </Navbar.Collapse>

            <SearchBox title="Search" />

          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Switch>
        <Route exact path="/" component={props => <Home title="Recommendations">{props.children}</Home>} />
        <Route exact path="/search" component={props => <SearchPage title="SearchApp">{props.children}</SearchPage>} />
        <Route path="/fav" component={props => <FavMovies title="Favorites">{props.children}</FavMovies>} />
        <Route path="/user" component={Login} />
        {/* <PrivateRoute path="/protected">
              <ProtectedPage />
            </PrivateRoute> */}
      </Switch>
    </Router>
  );
}

export default App;
