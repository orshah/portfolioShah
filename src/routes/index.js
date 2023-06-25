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
  PaymentPage,
  SupportPage,
  Pricing01Page,
  Pricing02Page,
  MaintenancePage,
  // Components
  DemoIconsPage,
  DemoImagePage,
  DemoLabelPage,
  ComponentsPage,
  DemoPlayerPage,
  DemoAnimatePage,
  DemoCountUpPage,
  DemoLightboxPage,
  DemoMarkdownPage,
  DemoMegaMenuPage,
  DemoCarouselsPage,
  DemoScrollbarPage,
  DemoTextMaxLinePage,
  DemoNavigationBarPage,
  DemoFormValidationPage,
} from './elements';

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    // Main layout
    {
      element: <MainLayout />,
      children: [
        { element: <HomePage />, index: true },
        { path: 'support', element: <SupportPage /> },
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
        {
          path: 'components',
          children: [
            { element: <ComponentsPage />, index: true },
            { path: 'animate', element: <DemoAnimatePage /> },
            { path: 'carousel', element: <DemoCarouselsPage /> },
            { path: 'count-up', element: <DemoCountUpPage /> },
            { path: 'form-validation', element: <DemoFormValidationPage /> },
            { path: 'icons', element: <DemoIconsPage /> },
            { path: 'image', element: <DemoImagePage /> },
            { path: 'label', element: <DemoLabelPage /> },
            { path: 'lightbox', element: <DemoLightboxPage /> },
            { path: 'markdown', element: <DemoMarkdownPage /> },
            { path: 'mega-menu', element: <DemoMegaMenuPage /> },
            { path: 'navigation-bar', element: <DemoNavigationBarPage /> },
            { path: 'scroll', element: <DemoScrollbarPage /> },
            { path: 'player', element: <DemoPlayerPage /> },
            { path: 'text-max-line', element: <DemoTextMaxLinePage /> },
          ],
        },
      ],
    },
    // Simple layout
    {
      element: <SimpleLayout />,
      children: [
        { path: 'payment', element: <PaymentPage /> },
        { path: 'pricing-01', element: <Pricing01Page /> },
        { path: 'pricing-02', element: <Pricing02Page /> },
      ],
    },
    // Compact layout
    {
      element: <CompactLayout />,
      children: [
        { path: 'maintenance', element: <MaintenancePage /> },
        { path: '500', element: <Page500 /> },
        { path: '404', element: <Page404 /> },
      ],
    },
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}
