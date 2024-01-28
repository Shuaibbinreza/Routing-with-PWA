import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import ProdectPage from "./pages/ProdectPage";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import ProductDetailsPage from "./pages/ProductDetails";

// const routeDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<HomePage />} />
//     <Route path="/products" element={<ProductsPage />} />
//   </Route>
// );

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement:<ErrorPage />,
    children: [
      { index: true, element: <Home/> },
      { path: 'products', element: <ProdectPage /> },
      { path: 'products/:productId', element: <ProductDetailsPage /> }
    ],
  }
]);

function App() {
  return (
    <>
      <RouterProvider router={router}/>
      {/* <Home/> */}
    </>
  );
}

export default App;
