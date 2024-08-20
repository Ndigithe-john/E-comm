import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';

import Layout from '@components/Layout';
import HomeScreen from '@screens/Home';
import ErrorScreen from '@screens/Error';
import ProductDetailsScreen from '@screens/ProductDetails';
import store from './store';

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
  return (
    <Provider store={store}>
      <RouterProvider router={router} />;
    </Provider>
  );
}

export default App;
