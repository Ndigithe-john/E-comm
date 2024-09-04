import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Layout from '@components/Layout';

import store from './store';

import {
  HomeScreen,
  ErrorScreen,
  ProductDetailsScreen,
  CartScreen,
  LoginScreen,
  RegisterScreen,
  ShippingScreen,
} from '@screens';
import PrivateRoute from '@components/PrivateRoute';

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
      {
        path: '/login',
        element: <LoginScreen />,
      },
      {
        path: '/register',
        element: <RegisterScreen />,
      },
      {
        path: '/shipping',
        element: <ShippingScreen />,
      },
      {
        path: '',
        element: <PrivateRoute />,
        children: [
          {
            path: '/shipping',
            element: <ShippingScreen />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />;
      <ToastContainer
        position='bottom-right'
        autoClose={5000}
        hideProgressBar
        theme='light'
      />
    </Provider>
  );
}

export default App;
