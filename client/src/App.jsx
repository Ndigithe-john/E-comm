import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';

import Layout from '@components/Layout';

import store from './store';

import {
  HomeScreen,
  ErrorScreen,
  ProductDetailsScreen,
  CartScreen,
  LoginScreen,
} from '@screens';

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
      {
        path: '/cart',
        element: <CartScreen />,
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
