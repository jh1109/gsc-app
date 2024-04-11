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
import CLevelDX from './pages/CLevelDX';
import TeamsDX from './pages/TeamsDX';
import OjtDX from './pages/OjtDX';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: '/', element: <MainPage />},
      { path: '/contact', element: <ContactPage />},
      { path: '/b2b', element: <B2BPage />},
      { path: '/TECHF', element: <TECHFPage />},
      { path: '/aboutgsc', element: <AboutPage />},
      { path: '/service-ICTedu', element: <ICTedu />},
      { path: '/service-educases', element: <Cases />},
      { path: '/service-academy', element: <Classroom />},
      { path: '/b2b-newcomerDX', element: <OjtDX />},
      { path: '/b2b-juniorDX', element: <TeamsDX />},
      { path: '/b2b-seniorDX', element: <CLevelDX />},
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
