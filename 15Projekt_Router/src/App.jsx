import {
  createBrowserRouter,
  //createRoutesFromElements,
  RouterProvider,
  // Route,
} from 'react-router-dom';
import HomePage from './pages/Home';
import ProductsPage from './pages/Products';
import RootLeyout from './pages/Root';
import ErrorPage from './pages/Error';
import ProductDetailPage from './pages/ProductDetails';

// const routerDefinitions = createRoutesFromElements(
//   <Route>
//     <Route
//       path='/'
//       element={<HomePage />}
//     />
//     <Route
//       path='/products'
//       element={<ProductsPage />}
//     />
//   </Route>
// );

// const router= createBrowserRouter(routerDefinitions)

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLeyout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: '/products', element: <ProductsPage /> },
      { path: '/products/:productId', element: <ProductDetailPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
