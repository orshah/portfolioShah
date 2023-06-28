import { useState, useEffect } from 'react';
// @mui
import { alpha } from '@mui/material/styles';
import {
  Stack,
  Button,
  Divider,
  Container,
  Typography,
  Unstable_Grid2 as Grid,
} from '@mui/material';
// hooks
import useResponsive from 'src/hooks/useResponsive';
// _mock
import _mock, { _socials, _courses } from 'src/_mock';
// components
import Iconify from 'src/components/iconify';
import LoadingScreen from 'src/components/loading-screen';
//
import Advertisement from '../../advertisement';
import NewsletterElearning from '../../newsletter/e-learning';
import ReviewElearning from '../../review/e-learning';
import { ElearningCourseListSimilar } from '../course/list';
import {
  ElearningCourseDetailsInfo,
  ElearningCourseDetailsHero,
  ElearningCourseDetailsSummary,
  ElearningCourseDetailsTeachersInfo,
} from '../course/details';

// ----------------------------------------------------------------------

const _mockCourse = _courses[0];

export default function ElearningCourseView() {
  const isMdUp = useResponsive('up', 'md');

  const [loading, setLoading] = useState(true);

  const courseSimilar = _courses.slice(-3);

  useEffect(() => {
    const fakeLoading = async () => {
      await new Promise((resolve) => setTimeout(resolve, 500));
      setLoading(false);
    };
    fakeLoading();
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <>
      <ElearningCourseDetailsHero course={_mockCourse} />

      <Container
        sx={{
          overflow: 'hidden',
          pt: { xs: 5, md: 10 },
          pb: { xs: 15, md: 10 },
        }}
      >
        <Grid container spacing={{ xs: 5, md: 8 }}>
          {!isMdUp && (
            <Grid xs={12}>
              <ElearningCourseDetailsInfo course={_mockCourse} />
            </Grid>
          )}
        </Grid>
      </Container>
    </>
  );
}
