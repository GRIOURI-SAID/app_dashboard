import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
//

import Page404 from './pages/Page404';
import WeeklyPage from './pages/WeeklyPage';

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      path: '/',
      element: <DashboardLayout />,
      children: [
        
        { element: <Navigate to="/app" />, index: true },
        { path: 'app', element: <WeeklyPage /> },
        
    
       
        
      ],
    },
    
    
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
