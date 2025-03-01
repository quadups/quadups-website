/**
 * @file App.tsx
 * @description Main entry point for the application, handles routing and layout rendering
 * @author Quadups Dev Team
 * @last_modified 2025
 */

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './Pages/Home.tsx';
import { About } from './Pages/About.tsx';
import Services from './Pages/Services.tsx';
import AppLayout from './components/Layout/AppLayout.tsx';
import StartProject from './Pages/StartProject.tsx';

/**
 * App component, serves as the root of the application
 * Responsible for defining the routing structure and managing layout
 * 
 * @component
 * @returns {JSX.Element} Rendered App component with routing logic
 */
function App() {
  return (
    <BrowserRouter>
      {/* Main routing structure for the application */}
      <Routes>
        {/* Apply AppLayout wrapper to all routes */}
        <Route element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/startaproject' element={<StartProject />}   />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
