import { useState, useEffect } from 'react';
import { 
  Box, 
  IconButton, 
  Typography,
  Paper,
  useMediaQuery,
  Container,
  Grid2,
  Fade
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import NewsCard from './newscard';

// Sample data with descriptions
export const newsItems = [
  {
    id: 1,
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Developments in Northeast India',
    author: '@bkristastucchio',
    description: 'Recent infrastructure developments in Northeast India are transforming the region. New highways, railways, and airports are connecting remote areas to the mainstream economy, bringing opportunities for tourism and trade. Local communities are seeing improved access to healthcare and education, while traditional cultures are being preserved through sustainable development initiatives.',
    category: 'National'
  },
  {
    id: 2,
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'India\'s Tech Boom',
    author: '@rollelflex_graphy726',
    description: 'India\'s technology sector continues to grow at an unprecedented rate, with startups emerging across various domains from fintech to healthtech. The country now boasts over 100 unicorns with a combined valuation exceeding $300 billion. Government initiatives like Digital India and Startup India have created a favorable ecosystem for innovation, while investments from global venture capital firms remain strong despite economic headwinds.',
    category: 'Technology'
  },
  {
    id: 3,
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Climate Initiatives in Rajasthan',
    author: '@helloimnik',
    description: 'Rajasthan is leading the way in renewable energy adoption with its ambitious solar projects. The state government has partnered with international organizations to develop large-scale solar farms that harness the abundant sunlight of the desert region. These initiatives are creating thousands of green jobs while reducing carbon emissions. Local communities are also benefiting from microgrids that provide reliable electricity to previously underserved areas.',
    category: 'Environment'
  },
  {
    id: 4,
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Kerala\'s Culinary Heritage',
    author: '@nolanissac',
    description: 'Kerala\'s rich culinary traditions are gaining international recognition as more people discover the complex flavors and health benefits of this regional cuisine. From the aromatic spices of Malabar to the seafood delicacies of the coastal areas, Kerala\'s food represents a perfect balance of taste and nutrition. Local chefs are now showcasing these traditional recipes with modern presentations, bringing global attention to India\'s diverse food heritage.',
    category: 'Culture'
  },
  {
    id: 5,
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Indian Fashion at Global Stage',
    author: '@hjrc33',
    description: 'Indian fashion designers are making waves on international runways, blending traditional craftsmanship with contemporary aesthetics. Handloom textiles, embroidery techniques, and sustainable practices from India are influencing global fashion trends. Major luxury brands are now collaborating with Indian artisans to incorporate their skills into high-end collections, creating economic opportunities for rural communities while preserving cultural heritage.',
    category: 'Lifestyle'
  },
  {
    id: 6,
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Agricultural Innovations',
    author: '@arwinneil',
    description: 'Farmers across India are adopting technology-driven solutions to improve productivity and sustainability. From precision farming using drones and IoT sensors to AI-powered crop disease detection, these innovations are helping address the challenges of climate change and water scarcity. Startups focused on agritech are connecting farmers directly to markets through mobile applications, eliminating middlemen and improving income for small-scale producers.',
    category: 'Agriculture'
  },
  {
    id: 7,
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Sports Development Programs',
    author: '@tjdragotta',
    description: 'India is investing heavily in sports infrastructure and training programs to nurture talent across various disciplines. The government\'s Khelo India initiative is identifying promising athletes from grassroots levels and providing them with world-class coaching and facilities. Private academies founded by former champions are also contributing to the development of sports culture. These efforts aim to improve India\'s performance in international competitions and promote physical fitness nationwide.',
    category: 'Sports'
  },
  {
    id: 8,
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Biodiversity Conservation Efforts',
    author: '@katie_wasserman',
    description: 'India\'s biodiversity conservation projects are showing promising results in protecting endangered species and their habitats. Community-led initiatives in forest management have reduced poaching while creating sustainable livelihoods for tribal populations. Marine conservation areas along the coastline are helping restore coral reefs and fish stocks. Scientists are documenting previously unknown species, highlighting the importance of preserving these rich ecosystems for future generations.',
    category: 'Environment'
  }
];

function HomePage() {
  const [cardIndex, setCardIndex] = useState(0);
  const [showDescription, setShowDescription] = useState(false);
  const totalCards = newsItems.length;
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  const handleSwipeUp = () => {
    if (cardIndex < totalCards - 1) {
      setCardIndex(cardIndex + 1);
      setShowDescription(false);
    }
  };

  const handleSwipeDown = () => {
    if (cardIndex > 0) {
      setCardIndex(cardIndex - 1);
      setShowDescription(false);
    }
  };

  const handleCardClick = () => {
    setShowDescription(true);
  };

  const handleBackClick = () => {
    setShowDescription(false);
  };

  useEffect(() => {
    setShowDescription(false);
  }, [isMobile, isTablet, isDesktop]);

  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientY);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientY);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isSwipeDown = distance < -50;
    const isSwipeUp = distance > 50;
    
    if (isSwipeUp) {
      handleSwipeUp();
    }
    if (isSwipeDown) {
      handleSwipeDown();
    }
    
    setTouchStart(null);
    setTouchEnd(null);
  };

  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          pt: 3,
          pb: 5,
          minHeight: 'calc(100vh - 80px)',
          position: 'relative',
        }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <Typography variant="h4" component="h1" gutterBottom align="center" sx={{ mb: 4 }}>
          Today's Top Stories
        </Typography>

        <Box sx={{ 
          position: 'fixed', 
          right: 20, 
          top: '50%', 
          transform: 'translateY(-50%)',
          zIndex: 10,
          display: { xs: 'none', sm: 'block' }
        }}>
          <IconButton 
            onClick={handleSwipeDown} 
            disabled={cardIndex === 0}
            sx={{ 
              mb: 1, 
              bgcolor: 'background.paper', 
              boxShadow: 2,
              '&:hover': { bgcolor: 'background.default' },
              opacity: cardIndex === 0 ? 0.5 : 1
            }}
          >
            <KeyboardArrowUpIcon />
          </IconButton>
          <IconButton 
            onClick={handleSwipeUp} 
            disabled={cardIndex === totalCards - 1}
            sx={{ 
              bgcolor: 'background.paper', 
              boxShadow: 2,
              '&:hover': { bgcolor: 'background.default' },
              opacity: cardIndex === totalCards - 1 ? 0.5 : 1
            }}
          >
            <KeyboardArrowDownIcon />
          </IconButton>
        </Box>

       
        {isMobile ? (
         
          <Box sx={{ width: '100%' }}>
            <Fade in={!showDescription}>
              <Box sx={{ display: showDescription ? 'none' : 'block' }}>
                <Box 
                  onClick={handleCardClick} 
                  sx={{ cursor: 'pointer', mx: 'auto', maxWidth: '100%' }}
                >
                  <NewsCard cardData={newsItems[cardIndex]} />
                </Box>
              </Box>
            </Fade>

            {/* Description view */}
            <Fade in={showDescription}>
              <Box sx={{ display: !showDescription ? 'none' : 'block' }}>
                <Paper
                  elevation={3}
                  sx={{
                    p: 3,
                    borderRadius: 2,
                    mb: 2
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <IconButton 
                      onClick={handleBackClick} 
                      sx={{ mr: 1 }}
                      color="primary"
                    >
                      <ArrowBackIcon />
                    </IconButton>
                    <Typography variant="h5">
                      {newsItems[cardIndex].title}
                    </Typography>
                  </Box>
                  
                  <Typography variant="body1" paragraph>
                    {newsItems[cardIndex].description}
                  </Typography>
                  
                  <Box display="flex" justifyContent="space-between" alignItems="center" mt={2}>
                    <Typography variant="subtitle1" color="text.secondary">
                      by: {newsItems[cardIndex].author}
                    </Typography>
                    <Typography variant="subtitle1" color="primary.main">
                      {newsItems[cardIndex].category}
                    </Typography>
                  </Box>
                </Paper>
              </Box>
            </Fade>
          </Box>
        ) : (

          <Grid2 container spacing={3}>
            <Grid2 item xs={12} md={showDescription ? 5 : 12}>
              <Box 
                onClick={handleCardClick} 
                sx={{ 
                  cursor: 'pointer', 
                  mx: 'auto', 
                  maxWidth: 500, 
                  transition: 'all 0.3s ease'
                }}
              >
                <NewsCard cardData={newsItems[cardIndex]} />
              </Box>
            </Grid2>
            
            <Grid2 item xs={12} md={7} sx={{ display: showDescription ? 'block' : 'none' }}>
              <Fade in={showDescription}>
                <Paper
                  elevation={3}
                  sx={{
                    p: 4,
                    borderRadius: 2,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <IconButton 
                      onClick={handleBackClick} 
                      sx={{ mr: 2, display: { md: 'none' } }}
                      color="primary"
                    >
                      <ArrowBackIcon />
                    </IconButton>
                    <Typography variant="h4">
                      {newsItems[cardIndex].title}
                    </Typography>
                  </Box>
                  
                  <Typography variant="body1" paragraph sx={{ flexGrow: 1 }}>
                    {newsItems[cardIndex].description}
                  </Typography>
                  
                  <Box display="flex" justifyContent="space-between" alignItems="center" mt={3}>
                    <Typography variant="subtitle1" color="text.secondary">
                      by: {newsItems[cardIndex].author}
                    </Typography>
                    <Typography variant="subtitle1" color="primary.main" fontWeight="bold">
                      {newsItems[cardIndex].category}
                    </Typography>
                  </Box>
                </Paper>
              </Fade>
            </Grid2>
          </Grid2>
        )}

        {/* Navigation dots */}
        <Box
          sx={{
            position: 'fixed',
            bottom: 16,
            left: 0,
            right: 0,
            display: 'flex',
            justifyContent: 'center',
            gap: 1,
            zIndex: 5
          }}
        >
          {newsItems.map((_, idx) => (
            <Box
              key={idx}
              sx={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                bgcolor: idx === cardIndex ? 'primary.main' : 'grey.400',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
              onClick={() => {
                setCardIndex(idx);
                setShowDescription(false);
              }}
            />
          ))}
        </Box>
      </Box>
    </Container>
  );
}

export default HomePage;