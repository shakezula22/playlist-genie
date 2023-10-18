import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/Home';
import ErrorPage from './pages/Error';
import LogInPage from './pages/LogIn';
import AuthCallbackPage from './pages/AuthCallback';
import { AuthProvider } from './context/user-context';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage />,
      errorElement: <ErrorPage />,
    },
    {
      path: '/login',
      element: <LogInPage />,
    },
    {
      path: '/callback',
      element: <AuthCallbackPage />,
    },
  ]);

  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
