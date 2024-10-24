'use client';

import React from 'react';
import { Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import { HeaderSection } from 'src/layouts/core/header-section';
import { LayoutSection } from 'src/layouts/core/layout-section';
import { Main } from 'src/layouts/main/main';
import { useBoolean } from 'src/hooks/use-boolean';
import { navData } from 'src/layouts/config-nav-account';
import { MenuButton } from 'src/layouts/components/menu-button';
import { NavMobile } from 'src/layouts/main/nav/mobile';
import { NavDesktop } from 'src/layouts/main/nav/desktop';

export default function SubDomainLayout({ sx, children, header }) {
  const theme = useTheme();

  const openMobileNav = useBoolean();
  const layoutQuery = 'md';

  return (
    <LayoutSection
      headerSection={
        <HeaderSection
          layoutQuery={layoutQuery}
          slots={{
            leftArea: (
              <>
                {/* -- Menu button -- */}
                <MenuButton
                  onClick={openMobileNav.onTrue}
                  sx={{
                    mr: 1,
                    ml: -1,
                    [theme.breakpoints.up(layoutQuery)]: { display: 'none' },
                  }}
                />
                <NavMobile
                  data={navData}
                  open={openMobileNav.value}
                  onClose={openMobileNav.onFalse}
                />
                <Typography variant="h4">Blogtify</Typography>
                {/* <Logo /> */}
              </>
            ),
            centerArea: (
              <NavDesktop
                data={navData}
                sx={{
                  display: 'none',
                  [theme.breakpoints.up(layoutQuery)]: { display: 'flex' },
                }}
              />
            ),
          }}
        />
      }
    >
      <Main>{children}</Main>
    </LayoutSection>
  );
}
