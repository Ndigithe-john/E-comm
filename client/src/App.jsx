import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Layout from '@components/Layout';
import HomeScreen from '@screens/Home';
import ErrorScreen from '@screens/Error';
import ProductDetailsScreen from '@screens/ProductDetails';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorScreen />,
    children: [
      {
        index: true,
        element: <HomeScreen />,
      },
      {
        path: '/product/:productID',
        element: <ProductDetailsScreen />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
