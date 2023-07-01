import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import SimpleLayout from '../layouts/simple';
import CompactLayout from '../layouts/compact';
//
import {
  // E-Learning

  ElearningLandingPage,

  // Common
  Page404,
  Page500,
} from './elements';

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    // Main layout
    {
      // element: <MainLayout />,
      children: [
        // E-learning
        {
          path: 'myportfolio',
          element: <ElearningLandingPage />,
        },
        // Demo Components
      ],
    },
    // Simple layout
    {
      element: <SimpleLayout />,
    },
    // Compact layout
    {
      element: <CompactLayout />,
      children: [
        { path: '500', element: <Page500 /> },
        { path: '404', element: <Page404 /> },
      ],
    },
    { path: '*', element: <Navigate to="myportfolio" replace /> },
  ]);
}
