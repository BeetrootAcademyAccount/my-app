import { NavLink, Outlet, useLocation } from "react-router-dom";
import React from "react";

export const ThemeContext = React.createContext();

function RouterLayout() {
  const breadcrumb = useLocation();

  return (
    <ThemeContext.Provider value="dark">
      <div>
        <header>
          <nav>
            <NavLink className="mx-2" to="login">
              Login
            </NavLink>
            <NavLink to="register" className="mx-2">
              Register
            </NavLink>
            <NavLink to="list" className="mx-2">
              List
            </NavLink>
            <NavLink to="memo">Memo</NavLink>
          </nav>
          <nav>{breadcrumb.pathname}</nav>
        </header>
        <main>
          <Outlet></Outlet>
        </main>
      </div>
    </ThemeContext.Provider>
  );
}

export default RouterLayout;
