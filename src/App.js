
import { useState } from 'react';
import { Box, IconButton } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Typography } from '@mui/material';
import NewsCard from './newscard';
import Header from './header';

export const itemData = [
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
  },
  {
    id: 9,
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
    author: '@peterlaster',
    description: 'Marine life exploration focusing on sea stars. This article discusses different species, habitat, ecological role, and conservation efforts.',
    category: 'Environment'
  },
  {
    id: 10,
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
    author: '@southside_customs',
    description: 'The world of custom bikes and cycling culture. This article covers design trends, technical innovations, community events, and notable custom builders.',
    category: 'Environment'
  },
];

function App() {
  const [cardIndex, setCardIndex] = useState(0);
  const [showDescription, setShowDescription] = useState(false);
  const totalCards = itemData.length;

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

  const handleScroll = (e) => {
    if (e.target.scrollTop + e.target.offsetHeight >= e.target.scrollHeight) {
      handleSwipeUp();
    } else if (e.target.scrollTop === 0) {
      handleSwipeDown();
    }
  };

  return (
    <>
      <Header />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: 'calc(100vh - 80px)', 
          overflow: 'hidden',
          position: 'relative',
          touchAction: 'pan-y',
        }}
        onScroll={handleScroll}
      >
  
        <Box sx={{ position: 'absolute', top: 20, right: 20, zIndex: 10 }}>
          <IconButton 
            onClick={handleSwipeDown} 
            disabled={cardIndex === 0}
            sx={{ bgcolor: 'rgba(255,255,255,0.7)', mb: 1 }}
          >
            <KeyboardArrowUpIcon />
          </IconButton>
          <IconButton 
            onClick={handleSwipeUp} 
            disabled={cardIndex === totalCards - 1}
            sx={{ bgcolor: 'rgba(255,255,255,0.7)' }}
          >
            <KeyboardArrowDownIcon />
          </IconButton>
        </Box>
      
        {/* This is the parent box */}
        <Box
          sx={{
            width: '100%',
            height: '100%',
            display: 'flex',
            
            // transform: `,
          }}
        >
          {/* This is the news box */}
          <Box
            sx={{
              width: showDescription ? '50%' : '100%',
              height: '100%',
              padding: 2,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              transition: 'width 0.3s ease',
            }}
            onClick={handleCardClick}
          >
            <NewsCard cardData={itemData[cardIndex]} />
          </Box>

          {/* This is the description box */}
          <Box
            sx={{
              width: '50%',
              display: showDescription ? 'block' : 'none',
              height: '100%',
              padding: 3,
              bgcolor: 'background.paper',
              boxShadow: 1,
              overflow: 'auto',
              transition: 'width 0.3s ease',
            }}
          >
            <IconButton 
              onClick={handleBackClick}
              sx={{ mb: 2 }}
            >
              <ArrowBackIcon />
            </IconButton>
            
            <Typography variant="h4" gutterBottom>
              {itemData[cardIndex].title}
            </Typography>
            
            <Typography variant="body1" paragraph>
              {itemData[cardIndex].description || 
                `This is a detailed article about ${itemData[cardIndex].title}. 
                 The full content would appear here, allowing users to read the complete 
                 story after clicking on the card preview.`}
            </Typography>
            
            <Typography variant="subtitle1" color="text.secondary">
              by: {itemData[cardIndex].author}
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            position: 'absolute',
            bottom: 16,
            left: 0,
            right: 0,
            display: 'flex',
            justifyContent: 'center',
            gap: 1,
          }}
        >
          {itemData.map((_, idx) => (
            <Box
              key={idx}
              sx={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                bgcolor: idx === cardIndex ? 'primary.main' : 'grey.400',
              }}
            />
          ))}
        </Box>
      </Box>
    </>
  );
}

export default App;