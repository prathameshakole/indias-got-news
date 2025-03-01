// import { Card, CardMedia, CardContent, Typography } from '@mui/material';

// const NewsCard = ({ cardData }) => {
//   return (
//     <Card 
//       sx={{ 
//         maxWidth: 500, 
//         width: '100%',
//         boxShadow: 3,
//         cursor: 'pointer',
//         '&:hover': {
//           boxShadow: 6,
//           transform: 'scale(1.02)',
//           transition: 'transform 0.3s ease'
//         }
//       }}
//     >
//       <CardMedia
//         component="img"
//         height="300"
//         image={cardData.img}
//         alt={cardData.title}
//       />
//       <CardContent>
//         <Typography gutterBottom variant="h5" component="div">
//           {cardData.title}
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//           by: {cardData.author}
//         </Typography>
//       </CardContent>
//     </Card>
//   );
// };

// export default NewsCard;

import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Chip
} from '@mui/material';

const NewsCard = ({ cardData }) => {
  return (
    <Card
      sx={{
        maxWidth: 500,
        width: '100%',
        boxShadow: 3,
        cursor: 'pointer',    
        '&:hover': {
            boxShadow: 6,
            transform: 'translateY(-8px)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease'
          }
        }
      }
        >
      <CardMedia
        component="img"
        height="300"
        image={cardData.img}
        alt={cardData.title}
      />
      <Box 
        sx={{ 
          position: 'absolute', 
          top: 16, 
          right: 16, 
          zIndex: 1 
        }}
      >
        <Chip 
          label={cardData.category} 
          color="primary" 
          sx={{ 
            fontWeight: 'bold',
            color: 'white',
            boxShadow: 2
          }} 
        />
      </Box>
      <CardContent sx={{ p: 3 }}>
        <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
          {cardData.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          by: {cardData.author}
        </Typography>
        <Typography variant="body2" color="text.primary" sx={{ mt: 2, display: '-webkit-box', overflow: 'hidden', textOverflow: 'ellipsis', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical' }}>
          {cardData.description.substring(0, 120)}...
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
          <Typography variant="body2" color="primary.main" fontWeight="bold">
            Click to read more
          </Typography>
        </Box>
      </CardContent>
    </Card >
  );
};

export default NewsCard;