import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { useSelector, useDispatch } from "react-redux";
import { addToFavorites, removeFromFavorites } from "./redux/favoritesSlice";
import NavBar from "./components/NavBar";
import Films from "./components/Films";
import FilmDetails from "./components/FilmDetails";
import Form from "./components/Form";
import Table from "./components/Table";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Favourites from "./components/Favourites";
import NotFound from "./components/NotFound";
import Register from "./components/Register";
import Login from "./components/Login";

function App() {
  const favorites = useSelector((state) => state.favorites);
  const dispatch = useDispatch();

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <AppContent
          favorites={favorites}
          isAuthenticated={isAuthenticated}
          setIsAuthenticated={setIsAuthenticated}
        />
      </Router>
    </Provider>
  );
}

const AppContent = ({ favorites, isAuthenticated, setIsAuthenticated }) => {
  const location = useLocation();
  const hideNavBar =
    location.pathname === "/" || location.pathname === "/login";

  return (
    <div
      style={{
        backgroundColor: "#181818",
        minHeight: "100vh",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: hideNavBar ? "center" : "flex-start",
        paddingTop: hideNavBar ? "0" : "",
      }}
    >
      {!hideNavBar && <NavBar favoritesCount={favorites.length} />}
      <div className="container" style={{ width: "100%" }}>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route
            path="/login"
            element={<Login setIsAuthenticated={setIsAuthenticated} />}
          />
          <Route path="/films" element={<Films />} />
          <Route path="/film/:id" element={<FilmDetails />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/form" element={<Form />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
