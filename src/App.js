import React from 'react';
import Grid from '@mui/material/Grid2';
import Header from './header';
import NewsCard from './newscard';
import logo from './logo192.png'
import NewsCard2 from './news2';
import { Box } from '@mui/material';

function App() {
  return (
    <>

      <Header />
      <Box sx={{ display: 'flex', justifyContent: 'center' , width: '100%'}}>
        <NewsCard2 />
      </Box>



    </>

  );
}

export default App;
