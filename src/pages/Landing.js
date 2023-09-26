import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import { useState, useEffect } from "react";
import Register from "./Register";
import Login from "./Login";
import axios from "axios";

function Landing() {
  const PAGES = {
    LOGIN: "Logged In",
    REGISTER: "Register",
    MAIN: "Main",
  };

  const api = axios.create({
    baseURL: "https://dummyjson.com",
  });

  const [currentPage, setCurrentPage] = useState(PAGES.MAIN);

  const updatePage = (selectedPage) => {
    setCurrentPage(selectedPage);
  };

  useEffect(() => {
    api
      .get("/products")
      .then((resp) => {
        console.log(resp);
      })
      .catch((error) => console.log(error));
  }, []);

  const post = () => {
    api.post("/products/add", {
      title: "very interesting book",
    });
  };

  return (
    <div className="container">
      <div className="header">
        <Header
          currentPage={currentPage}
          updatePage={updatePage}
          pages={PAGES}
        />
      </div>
      {currentPage === PAGES.MAIN && (
        <div className="main">
          <Main />
        </div>
      )}
      {currentPage === PAGES.LOGIN && (
        <div className="login">
          <Login />
        </div>
      )}

      {currentPage === PAGES.REGISTER && (
        <div className="register">
          <Register />
        </div>
      )}

      <button onClick={post}> Make post request</button>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default Landing;
