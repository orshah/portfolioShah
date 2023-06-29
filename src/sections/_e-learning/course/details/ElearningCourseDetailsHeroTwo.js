import PropTypes from 'prop-types';
import { useState } from 'react';
// @mui
import { alpha, styled } from '@mui/material/styles';
import {
  Box,
  Fab,
  Link,
  Stack,
  Avatar,
  Divider,
  Container,
  Typography,
  Unstable_Grid2 as Grid,
} from '@mui/material';
// routes
import { paths } from 'src/routes/paths';
// hooks
import useResponsive from 'src/hooks/useResponsive';
// utils
import { bgGradient } from 'src/utils/cssStyles';
import { fShortenNumber } from 'src/utils/formatNumber';
// _mock
import _mock from 'src/_mock';
// components
import Label from 'src/components/label';
import Image from 'src/components/image';
import Iconify from 'src/components/iconify';
import { PlayerDialog } from 'src/components/player';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';

// ----------------------------------------------------------------------

const StyledOverlay = styled('div')(({ theme }) => ({
  ...bgGradient({
    startColor: `${alpha(theme.palette.common.black, 0)} 0%`,
    endColor: `${theme.palette.common.black} 75%`,
  }),
  top: 0,
  left: 0,
  zIndex: 8,
  width: '100%',
  height: '100%',
  position: 'absolute',
}));

// ----------------------------------------------------------------------

export default function ElearningCourseDetailsHero({ course }) {
  const {
    slug,
    level,
    ratings,
    quizzes,
    lessons,
    category,
    coverImg,
    languages,
    bestSeller,
    totalHours,
    description,
    reviews,
    students,
    teachers = [],
  } = course;

  const isMdUp = useResponsive('up', 'md');

  // const [openVideo, setOpenVideo] = useState(false);

  // const handleOpenVideo = () => {
  //   setOpenVideo(true);
  // };

  // const handleCloseVideo = () => {
  //   setOpenVideo(false);
  // };

  return (
    <>
      <Box
        sx={{
          bgcolor: 'background.neutral',
          pb: { xs: 5, md: 10 },
        }}
      >
        <Container sx={{ overflow: 'hidden' }}>
          <CustomBreadcrumbs
            links={[
              { name: 'Home', href: '/' },
              { name: 'Projects', href: paths.eLearning.courses },
              { name: course.slug || '' },
            ]}
            sx={{
              pt: 5,
              mb: { xs: 5, md: 10 },
            }}
          />

          <Grid container spacing={{ xs: 5, md: 10 }} direction="row-reverse">
            {/* <iframe
              title="something"
              width="400"
              height="450"
              src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FTL4ZW14DDKjvK8ozSb7A4s%2FDEALERSHIP%3Fpage-id%3D0%253A1%26type%3Ddesign%26node-id%3D5-20557%26viewport%3D543%252C361%252C0.33%26scaling%3Dscale-down%26starting-point-node-id%3D5%253A20557%26mode%3Ddesign"
              allowfullscreen
            /> */}

            <Grid xs={12} md={7}>
              <Stack spacing={3}>
                <Stack spacing={2} alignItems="flex-start">
                  {bestSeller && (
                    <Label color="warning" variant="filled" sx={{ textTransform: 'uppercase' }}>
                      Best Seller
                    </Label>
                  )}

                  <Typography variant="overline" sx={{ color: 'secondary.main' }}>
                    {category}
                  </Typography>

                  <Typography variant="h3" component="h1">
                    {slug}
                  </Typography>

                  <Typography sx={{ color: 'text.secondary' }}>{description}</Typography>
                </Stack>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>
      {/* <PlayerDialog /> */}
    </>
  );
}

ElearningCourseDetailsHero.propTypes = {
  course: PropTypes.shape({
    bestSeller: PropTypes.bool,
    category: PropTypes.string,
    coverImg: PropTypes.string,
    description: PropTypes.string,
    languages: PropTypes.array,
    lessons: PropTypes.array,
    level: PropTypes.string,
    quizzes: PropTypes.number,
    ratings: PropTypes.number,
    reviews: PropTypes.number,
    slug: PropTypes.string,
    students: PropTypes.number,
    teachers: PropTypes.array,
    totalHours: PropTypes.number,
  }),
};