import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import MainLayout from '../layouts/main';
import SimpleLayout from '../layouts/simple';
import CompactLayout from '../layouts/compact';
//
import {
  // E-Learning
  ElearningBlogPage,
  ElearningPostPage,
  ElearningAboutPage,
  ElearningCoursePage,
  ElearningContactPage,
  ElearningCoursesPage,
  ElearningLandingPage,

  // Common
  Page404,
  Page500,
  HomePage,
} from './elements';

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    // Main layout
    {
      element: <MainLayout />,
      children: [
        { element: <HomePage />, index: true },
        // E-learning
        {
          path: 'e-learning',
          children: [
            { path: 'landing', element: <ElearningLandingPage /> },
            { path: 'courses', element: <ElearningCoursesPage /> },
            { path: 'course', element: <ElearningCoursePage /> },
            { path: 'posts', element: <ElearningBlogPage /> },
            { path: 'post', element: <ElearningPostPage /> },
            { path: 'about', element: <ElearningAboutPage /> },
            { path: 'contact', element: <ElearningContactPage /> },
          ],
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
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}
