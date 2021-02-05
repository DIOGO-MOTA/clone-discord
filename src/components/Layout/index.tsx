import React from 'react';
import ServerList from '../ServerList';
import ServerName from '../ServerName';

import { Grid } from './styles';

const Layout: React.FC = () => {
  return (

    <Grid>
      <ServerName />
      <ServerList />
    </Grid>


  );
}

export default Layout;