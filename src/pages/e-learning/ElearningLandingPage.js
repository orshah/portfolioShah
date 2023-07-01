import { Helmet } from 'react-helmet-async';
// sections
import { ElearningLandingView } from 'src/sections/_e-learning/view';

// ----------------------------------------------------------------------

export default function ElearningLandingPage() {
  return (
    <>
      <Helmet>
        <title>Main</title>
      </Helmet>

      <ElearningLandingView />
    </>
  );
}
