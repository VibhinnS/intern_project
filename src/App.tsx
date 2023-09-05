import Home from "./pages/home/Home";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Users from "./pages/users/Users";
import Products from "./pages/products/Products";
// import Login from "./pages/login/Login";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Menu from "./components/menu/Menu";
import "./styles/global.scss";
import Main from "./pages/main/Main";
import LandingPage from "./pages/landing/landingPage";
import LOGIN from "./components/login/login";

function App() {
  const Layout = ()=> {
    return (
      <div className="main">
        {/* <Navbar /> */}
        <div className="container">
          {/* <div className="menuContainer">
            <Menu />
          </div> */}
          <div className="contentContainer">
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children:[
        {
          path:"/",
          element: <LandingPage/>
        },
        {
          path:"/dashboard",
          element: <Main/>
        },
        {
          path:"/users",
          element: <Users/>
        },
        {
          path:"/products",
          element: <Products/>
        },
        {
          path: "/login",
          element: <LOGIN />
        }
      ]
    },
  ]);
  

  return <RouterProvider router={router} />;
}

export default App;