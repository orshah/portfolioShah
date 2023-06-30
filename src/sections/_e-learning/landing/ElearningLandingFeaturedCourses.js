import PropTypes from 'prop-types';
import { useRef } from 'react';
// @mui
import { useTheme } from '@mui/material/styles';
// hooks
import useResponsive from 'src/hooks/useResponsive';
// components
import Carousel, { CarouselArrows } from 'src/components/carousel';
//
import { Link as RouterLink } from 'react-router-dom';
// @mui
import {
  Divider,
  Card,
  Link,
  Avatar,
  Container,
  Stack,
  Typography,
  Box,
  Button,
} from '@mui/material';
// routes
import { paths } from 'src/routes/paths';
// utils
import { fCurrency, fShortenNumber } from 'src/utils/formatNumber';
// components
import Image from 'src/components/image';
import Label from 'src/components/label';
import Iconify from 'src/components/iconify';
import TextMaxLine from 'src/components/text-max-line';
import { height } from '@mui/system';
import './elearningLandingFeaturedCourses.style.css';
import { ElearningCourseItem } from '../course/item';
import img1 from '../../../_mock/assets/course/course_1.jpg';
import img2 from '../../../_mock/assets/course/course_2.jpg';
import img3 from '../../../_mock/assets/course/course_3.jpg';
import img4 from '../../../_mock/assets/course/course_4.jpg';
import img5 from '../../../_mock/assets/course/course_5.jpg';

// ----------------------------------------------------------------------

const myProjects = [
  {
    title: 'Car Dealership',
    url: 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FTL4ZW14DDKjvK8ozSb7A4s%2FDEALERSHIP%3Fpage-id%3D0%253A1%26type%3Ddesign%26node-id%3D5-20557%26viewport%3D543%252C361%252C0.33%26scaling%3Dscale-down%26starting-point-node-id%3D5%253A20557%26mode%3Ddesign',
    img: img1,
    alt: 'car dealership',
    description:
      'Lorem impsum Nullam accumsan lorem in dui. Praesent ac massa at ligula laoreet iaculis.',
  },
  {
    title: 'Daycare',
    url: 'https://helenlucydaycare.netlify.app/',
    img: img2,
    alt: 'daycare',
    description:
      'Nullam accumsan lorem in dui. Praesent ac massa at ligula laoreet iaculis.Lorem impsum',
  },
  {
    title: 'Spy Game',
    url: 'https://spygame.netlify.app/',
    img: img3,
    alt: 'spy game',
    description:
      'Lorem impsumNullam accumsan lorem in dui. Praesent ac massa at ligula laoreet iaculis.',
  },
  {
    title: 'Online Store',
    url: 'https://myperfectstore.netlify.app/',
    img: img4,
    alt: 'online store',
    description:
      'Nullam accumsan lorem in dui. Praesent ac massa at ligula laoreet iaculis.Lorem impsum',
  },
  {
    title: 'Weather App',
    url: 'https://weatherappsh.netlify.app/',
    img: img5,
    alt: 'weather app',
    description:
      'Lorem impsumNullam accumsan lorem in dui. Praesent ac massa at ligula laoreet iaculis.',
  },
];

export default function ElearningLandingFeaturedCourses({ courses }) {
  const theme = useTheme();

  const isMdUp = useResponsive('up', 'md');

  const carouselRef = useRef(null);

  const carouselSettings = {
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    rtl: Boolean(theme.direction === 'rtl'),
    responsive: [
      {
        breakpoint: theme.breakpoints.values.lg,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: theme.breakpoints.values.md,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  const handlePrev = () => {
    carouselRef.current?.slickPrev();
  };

  const handleNext = () => {
    carouselRef.current?.slickNext();
  };

  return (
    <Container
      sx={{
        pt: { xs: 5, md: 10 },
      }}
    >
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        alignItems={{ md: 'flex-end' }}
        sx={{
          textAlign: { xs: 'center', md: 'unset' },
        }}
      >
        <Stack spacing={3} flexGrow={1}>
          <Typography variant="h2">My projects</Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            Nullam accumsan lorem in dui. Praesent ac massa at ligula laoreet iaculis.
          </Typography>
        </Stack>

        {isMdUp && <CarouselArrows spacing={2} onNext={handleNext} onPrev={handlePrev} />}
      </Stack>

      <Box
        sx={{
          position: 'relative',
          ml: { md: -2 },
          width: { md: 'calc(100% + 32px)' },
        }}
      >
        <CarouselArrows
          onNext={handleNext}
          onPrev={handlePrev}
          leftButtonProps={{
            sx: {
              left: -16,
              opacity: 1,
              color: 'common.white',
              bgcolor: 'primary.main',
              '&:hover': { bgcolor: 'primary.dark' },
              ...(isMdUp && { display: 'none' }),
            },
          }}
          rightButtonProps={{
            sx: {
              right: -16,
              opacity: 1,
              color: 'common.white',
              bgcolor: 'primary.main',
              '&:hover': { bgcolor: 'primary.dark' },
              ...(isMdUp && { display: 'none' }),
            },
          }}
        >
          <Carousel ref={carouselRef} {...carouselSettings}>
            {myProjects.map((proj) => (
              <Box
                key={proj.title}
                sx={{
                  px: 2,
                  pt: { xs: 8, md: 10 },
                  pb: { xs: 10, md: 15 },
                }}
              >
                <h1>{proj.title}</h1>
                <div className="projects__container">
                  <img src={proj.img} alt={proj.alt} />
                  <Typography
                    sx={{ color: 'text.secondary', paddingTop: '1rem', paddingBottom: '2rem' }}
                  >
                    {proj.description}
                  </Typography>
                  <Button variant="outlined" size="large" color="inherit">
                    <a href={proj.url} style={{ textDecoration: 'none', color: 'black' }}>
                      View the project
                    </a>
                  </Button>
                </div>
              </Box>
            ))}
          </Carousel>
        </CarouselArrows>
      </Box>
    </Container>
  );
}

ElearningLandingFeaturedCourses.propTypes = {
  courses: PropTypes.array,
};

ElearningCourseItem.propTypes = {
  course: PropTypes.shape({
    bestSeller: PropTypes.bool,
    category: PropTypes.string,
    coverImg: PropTypes.string,
    description: PropTypes.string,
    level: PropTypes.string,
    price: PropTypes.number,
    priceSale: PropTypes.number,
    ratings: PropTypes.number,
    reviews: PropTypes.number,
    slug: PropTypes.string,
    students: PropTypes.number,
    teachers: PropTypes.array,
    totalHours: PropTypes.number,
  }),
  // vertical: PropTypes.bool,
};
