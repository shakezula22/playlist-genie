import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/Home';
import ErrorPage from './pages/Error';
import LogInPage from './pages/LogIn';
import CustomPlaylistPage from './pages/CustomPlaylist';
import CreatePlaylistPage from './pages/CreatePlaylist';
import AuthCallbackPage from './pages/AuthCallback';
import { AuthProvider } from './context/user-context';
import PlaylistProvider from './context/playlist-context';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <LogInPage />,
    },
    {
      path: '/dashboard',
      element: <HomePage />,
      errorElement: <ErrorPage />,
    },

    {
      path: '/callback',
      element: <AuthCallbackPage />,
    },
    {
      path: '/customplaylist',
      element: <CustomPlaylistPage />,
    },
    {
      path: '/createplaylist',
      element: <CreatePlaylistPage />,
    },
  ]);

  return (
    <AuthProvider>
      <PlaylistProvider>
        <RouterProvider router={router} />
      </PlaylistProvider>
    </AuthProvider>
  );
}

export default App;
