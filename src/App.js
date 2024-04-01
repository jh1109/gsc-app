import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import GlobalStyle from './GlobalStyle';
import MainPage from './pages/Mainpage';
import ContactPage from './pages/ContactPage';
import B2BPage from './pages/B2BPage';
import TECHFPage from './pages/TECHFPage';
import AboutPage from './pages/About';
import RootLayout from './pages/Root';
import ICTedu from './pages/ICTedu';
import Cases from './pages/Cases';
import Classroom from './pages/Classroom';

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
      { path: '/service-ICTedu', element: <ICTedu />},
      { path: '/service-cases', element: <Cases />},
      { path: '/service-classroom', element: <Classroom />},
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
