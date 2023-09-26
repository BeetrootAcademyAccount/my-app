import Main from "./pages/Main";
import Register from "./pages/Register";
import Login from "./pages/Login";
import {
  BrowserRouter,
  NavLink,
  Route,
  Routes,
  Link,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import RouterLayout from "./pages/RouterLayout";
import ListLayout from "./pages/ListLayout";
import Error404 from "./pages/Error404";
import List, { fetchProducts } from "./pages/List";

import Item, { fetchProductDetails } from "./pages/Item";
import ErrorPage from "./pages/ErrorPage";
import Memo from "./pages/Memo";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RouterLayout />}>
      <Route index element={<Main />} />
      <Route path="register" element={<Register />} />
      <Route path="login" element={<Login />} />
      <Route path="memo" element={<Memo />} />
      <Route path="list" element={<ListLayout />} loader={fetchProducts}>
        <Route index element={<List />} loader={fetchProducts} />
        <Route
          path=":id"
          element={<Item />}
          loader={fetchProductDetails}
          errorElement={<ErrorPage />}
        />
      </Route>
      <Route path="*" element={<Error404 />} />
    </Route>
  )
);
/*
const router = createBrowserRouter([
  {
    path: "/",
    element: <RouterLayout />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
]);
*/

function App() {
  return <RouterProvider router={router} />;
}

export default App;
