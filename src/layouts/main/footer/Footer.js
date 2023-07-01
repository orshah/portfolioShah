import { useLocation } from 'react-router-dom';
// @mui
import { Stack, Divider, Container, Typography, Unstable_Grid2 as Grid } from '@mui/material';
// hooks
// _mock
// components
//
// import { pageLinks, navConfig } from '../nav/config-navigation';
import lgo from '../../../_mock/assets/logo/linkedin.png';

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

export default function Footer() {
  const { pathname } = useLocation();

  // const mobileList = navConfig.find((i) => i.title === 'Pages')?.children || [];

  // const desktopList = pageLinks.sort((listA, listB) => Number(listA.order) - Number(listB.order));

  // const renderLists = isMdUp ? desktopList : mobileList;

  const isHome = pathname === '/';

  const simpleFooter = (
    <Container sx={{ py: 8, textAlign: 'center' }}>
      <Typography variant="caption" component="div" sx={{ color: 'text.secondary' }}>
        © 2023. All rights reserved by Shah Oripov
      </Typography>
    </Container>
  );

  const mainFooter = (
    <>
      <Divider />
      <Divider />
      <Container>
        <Stack
          spacing={2.5}
          direction={{ xs: 'column', md: 'row' }}
          justifyContent="space-around"
          sx={{ py: 3, textAlign: 'center' }}
        >
          <Typography variant="caption" sx={{ color: 'text.secondary' }}>
            © 2023. All rights reserved by Shahzod Oripov
          </Typography>
        </Stack>
      </Container>
    </>
  );

  return <footer>{isHome ? simpleFooter : mainFooter}</footer>;
}

// ----------------------------------------------------------------------
