import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import GlobalStyle from './GlobalStyle';
import MainPage from './pages/Mainpage';
import ContactPage from './pages/ContactPage';
import B2BPage from './pages/B2BPage';
import TECHFPage from './pages/TECHFPage';
import AboutPage from './pages/About';
import RootLayout from './pages/Root';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: '/', element: <MainPage />},
      { path: '/contact', element: <ContactPage />},
      { path: '/b2b', element: <B2BPage />},
      { path: '/techfrontiers', element: <TECHFPage />},
      { path: '/about', element: <AboutPage />},
    ],
  },

]);

function App() {
  return (
    <>
    <GlobalStyle/>
    <RouterProvider router={router} />
    </>
  );
}

export default App;
