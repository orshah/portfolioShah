import { Suspense, lazy } from 'react';
// components
import LoadingScreen from '../components/loading-screen';

// ----------------------------------------------------------------------

const Loadable = (Component) => (props) =>
  (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );

// ----------------------------------------------------------------------

// E-LEARNING
export const ElearningAboutPage = Loadable(
  lazy(() => import('../pages/e-learning/ElearningAboutPage'))
);
export const ElearningBlogPage = Loadable(
  lazy(() => import('../pages/e-learning/ElearningBlogPage'))
);
export const ElearningContactPage = Loadable(
  lazy(() => import('../pages/e-learning/ElearningContactPage'))
);
export const ElearningCoursePage = Loadable(
  lazy(() => import('../pages/e-learning/ElearningCoursePage'))
);
export const ElearningCoursesPage = Loadable(
  lazy(() => import('../pages/e-learning/ElearningCoursesPage'))
);
export const ElearningLandingPage = Loadable(
  lazy(() => import('../pages/e-learning/ElearningLandingPage'))
);
export const ElearningPostPage = Loadable(
  lazy(() => import('../pages/e-learning/ElearningPostPage'))
);

// COMMON
export const ComingSoonPage = Loadable(lazy(() => import('../pages/ComingSoonPage')));
export const HomePage = Loadable(lazy(() => import('../pages/HomePage')));
export const MaintenancePage = Loadable(lazy(() => import('../pages/MaintenancePage')));
export const Page404 = Loadable(lazy(() => import('../pages/Page404')));
export const Page500 = Loadable(lazy(() => import('../pages/Page500')));
export const PaymentPage = Loadable(lazy(() => import('../pages/PaymentPage')));
export const Pricing01Page = Loadable(lazy(() => import('../pages/Pricing01Page')));
export const Pricing02Page = Loadable(lazy(() => import('../pages/Pricing02Page')));
export const SupportPage = Loadable(lazy(() => import('../pages/SupportPage')));

// COMPONENTS
export const ComponentsPage = Loadable(lazy(() => import('../pages/components/ComponentsPage')));
export const DemoAnimatePage = Loadable(lazy(() => import('../pages/components/DemoAnimatePage')));
export const DemoCarouselsPage = Loadable(
  lazy(() => import('../pages/components/DemoCarouselsPage'))
);
export const DemoCountUpPage = Loadable(lazy(() => import('../pages/components/DemoCountUpPage')));
export const DemoFormValidationPage = Loadable(
  lazy(() => import('../pages/components/DemoFormValidationPage'))
);
export const DemoIconsPage = Loadable(lazy(() => import('../pages/components/DemoIconsPage')));
export const DemoImagePage = Loadable(lazy(() => import('../pages/components/DemoImagePage')));
export const DemoLabelPage = Loadable(lazy(() => import('../pages/components/DemoLabelPage')));
export const DemoLightboxPage = Loadable(
  lazy(() => import('../pages/components/DemoLightboxPage'))
);
export const DemoMarkdownPage = Loadable(
  lazy(() => import('../pages/components/DemoMarkdownPage'))
);
export const DemoMegaMenuPage = Loadable(
  lazy(() => import('../pages/components/DemoMegaMenuPage'))
);
export const DemoNavigationBarPage = Loadable(
  lazy(() => import('../pages/components/DemoNavigationBarPage'))
);
export const DemoPlayerPage = Loadable(lazy(() => import('../pages/components/DemoPlayerPage')));
export const DemoScrollbarPage = Loadable(
  lazy(() => import('../pages/components/DemoScrollbarPage'))
);
export const DemoTextMaxLinePage = Loadable(
  lazy(() => import('../pages/components/DemoTextMaxLinePage'))
);
