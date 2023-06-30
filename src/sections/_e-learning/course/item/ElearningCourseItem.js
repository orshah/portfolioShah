import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
// @mui
import { Divider, Stack, Card, Typography, Box, Link, Avatar } from '@mui/material';
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

// ----------------------------------------------------------------------

export default function ElearningCourseItem({ course, vertical }) {
  const {
    slug,
    level,
    price,
    ratings,
    reviews,
    teachers,
    students,
    coverImg,
    category,
    priceSale,
    bestSeller,
    totalHours,
    description,
  } = course;

  return (
    <Card
      sx={{
        display: { sm: 'flex' },
        '&:hover': {
          boxShadow: (theme) => theme.customShadows.z24,
        },
        ...(vertical && {
          flexDirection: 'column',
        }),
      }}
    >
      <Box sx={{ flexShrink: { sm: 0, height: '15rem' } }}>
        <Image
          alt={slug}
          src={coverImg}
          sx={{
            height: 1,
            objectFit: 'cover',
            width: { sm: 240 },
            ...(vertical && {
              width: { sm: 1 },
            }),
          }}
        />
      </Box>

      <Stack spacing={3} sx={{ p: 3 }}>
        <Stack
          spacing={{
            xs: 3,
            sm: vertical ? 3 : 1,
          }}
        >
          <Stack direction="row" alignItems="center" justifyContent="space-between">
            {/* <Typography variant="overline" sx={{ color: 'primary.main' }}>
              {category}
            </Typography> */}
          </Stack>

          <Stack spacing={1}>
            <Link component={RouterLink} to={paths.eLearning.course} color="inherit">
              <TextMaxLine variant="h6" line={1}>
                {slug}
              </TextMaxLine>
            </Link>

            <TextMaxLine
              variant="body2"
              color="text.secondary"
              sx={{
                ...(vertical && {
                  display: { sm: 'none' },
                }),
              }}
            >
              {description}
            </TextMaxLine>
          </Stack>
        </Stack>
      </Stack>
    </Card>
  );
}

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
  vertical: PropTypes.bool,
};
