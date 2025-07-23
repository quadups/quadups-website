/**
 * @file App.tsx
 * @description Main entry point for the application, handles routing and conditional layout rendering
 * @author Quadups Dev Team
 * @last_modified 2025
 */

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './Pages/Home.tsx';
import { About } from './Pages/About.tsx';
import Services from './Pages/Services.tsx';
import AppLayout from './components/Layout/AppLayout.tsx';
import StartProject from './Pages/StartProject.tsx';
import LoadingScreen from './components/ui/LoadingScreen.tsx';
import { useEffect, useState } from 'react';

/**
 * App component, serves as the root of the application
 * Responsible for defining the routing structure and managing layout conditionally
 * 
 * @component
 * @returns {JSX.Element} Rendered App component with routing logic
 */
function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Only restore scroll position on page refresh (not navigation)
    const savedScrollPosition = sessionStorage.getItem('scrollPosition');
    const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming | undefined;
    const isPageRefresh = performance.navigation?.type === 1 ||
                         navigationEntry?.type === 'reload';
    
    if (savedScrollPosition && isPageRefresh) {
      setTimeout(() => {
        window.scrollTo(0, parseInt(savedScrollPosition));
        sessionStorage.removeItem('scrollPosition');
      }, 100);
    }

    // Save scroll position before page unload (refresh/close)
    const handleBeforeUnload = () => {
      sessionStorage.setItem('scrollPosition', window.scrollY.toString());
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/startaproject' element={<StartProject />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

// /**
//  * LayoutWrapper component, responsible for conditionally rendering the AppLayout
//  * or directly rendering specific components based on the current route
//  * 
//  * @component
//  * @returns {JSX.Element} Either AppLayout or a specific page component based on pathname
//  */
// function LayoutWrapper() {
//   const location = useLocation(); // Get the current location object, which contains the pathname

//   /**
//    * Conditionally render the layout
//    * If the current pathname matches '/startaproject', do not render AppLayout
//    * Otherwise, render AppLayout as the layout wrapper for the child components
//    */
//   if (location.pathname === '/startaproject') {
//     return <StartProject />;
//   }

//   // Render the default layout for all other pages
//   return <AppLayout />;
// }

export default App;
