import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "./components/Layout/Layout";
import ShopPage from "./pages/ShopPage/ShopPage";
import CartPage from "./pages/CartPage/CartPage";
import HistoryPage from "./pages/HistoryPage/HistoryPage";

function App() {
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <Layout />,
        children: [
          {
            index: true,
            element: <ShopPage />,
          },
          {
            path: "/cart",
            element: <CartPage />,
          },
          {
            path: "/history",
            element: <HistoryPage />,
          },
        ],
      },
    ],
    { basename: "/delivery-app" }
  );

  return (
    <div className="App">
      <RouterProvider router={router} />
      <ToastContainer />
    </div>
  );
}

export default App;
