import React from 'react';
import { 
  Container, 
  Typography, 
  Grid2, 
  Card, 
  CardMedia, 
  CardContent, 
  CardActions, 
  Button, 
  Chip, 
  Box 
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const blogPosts = [
  {
    id: 1,
    title: 'The Future of Renewable Energy in India',
    summary: 'How solar, wind and hydroelectric power are transforming India\'s energy landscape',
    content: 'India has made significant strides in renewable energy development over the past decade. With abundant sunshine, long coastlines for wind energy, and numerous rivers for hydroelectric power, the country is naturally positioned to be a renewable energy leader. The government has set ambitious targets of achieving 500 GW of renewable energy capacity by 2030, which would make up 50% of the country\'s energy mix.\n\nSolar power has seen particularly explosive growth, with the cost of solar panels falling dramatically while efficiency continues to improve. Large-scale solar parks in Rajasthan, Gujarat, and Tamil Nadu are generating clean electricity at increasingly competitive rates. Meanwhile, rooftop solar installations are empowering individual households and businesses to generate their own power, reducing strain on the national grid.\n\nWind energy is another area of rapid development, especially in coastal states. Advanced turbine technology is enabling better energy capture even in areas with moderate wind speeds. Offshore wind farms are being planned to take advantage of stronger and more consistent winds over the ocean.\n\nHydroelectric power, while more established, continues to play a vital role, particularly in the Himalayan states. Small-scale hydroelectric projects are being promoted as environmentally friendlier alternatives to massive dams.\n\nThese developments are not just environmentally significant but economically transformative. The renewable energy sector has created hundreds of thousands of jobs across the value chain, from manufacturing to installation and maintenance. As India continues this green transition, it is positioning itself as a global leader in clean energy technology and implementation.',
    author: 'Priya Sharma',
    date: 'February 25, 2025',
    category: 'Environment',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276'
  },
  {
    id: 2,
    title: 'Digital Transformation in Rural India',
    summary: 'How technology is bridging the urban-rural divide and creating new opportunities',
    content: 'The digital revolution is finally reaching India\'s countryside, transforming lives and livelihoods in ways previously unimaginable. With over 65% of India\'s population living in rural areas, this digital transformation has immense potential to drive inclusive growth and development.\n\nInternet connectivity has been the cornerstone of this change. Government initiatives like BharatNet, which aims to connect all of India\'s villages with optical fiber, have significantly improved access. Meanwhile, affordable smartphones and some of the world\'s cheapest data plans have put the internet within reach of millions of rural residents.\n\nDigital financial services have been particularly impactful. With traditional banks often absent in remote areas, mobile banking and payment apps have brought basic financial services to previously unbanked populations. Farmers can now receive subsidies directly in their accounts, eliminating intermediaries and reducing corruption.\n\nE-commerce platforms have opened new markets for rural artisans and farmers, allowing them to sell their products nationwide without relying on middlemen. This has led to better prices for producers and preserved traditional crafts that might otherwise disappear.\n\nInformation access has been transformative for agriculture. Farmers can now check weather forecasts, market prices, and agricultural best practices on their phones, helping them make better decisions about planting, harvesting, and selling their crops.\n\nEducation and healthcare have also been revolutionized. During the pandemic, digital classrooms kept rural students learning when schools were closed. Telemedicine services have connected rural patients with specialist doctors in cities, providing consultations that would otherwise require expensive, time-consuming travel.\n\nChallenges remain, particularly in digital literacy and infrastructure reliability. However, the trajectory is clear',
    author: 'Prathamesh Akole',      
    date: 'March 10, 2025',
    category: 'Technology',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276'
  },
];

const Blog = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Blog</h1>
      <Grid2 container spacing={2}>
        {blogPosts.map((post) => (
          <Grid2 item xs={12} sm={6} md={4} key={post.id}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={post.image}
                alt={post.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {post.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {post.summary}
                </Typography>
              </CardContent>              
              <CardActions>                
                <Button size="small" onClick={() => navigate(`/blog/${post.id}`)}>Read More</Button>                
              </CardActions>
            </Card>             
          </Grid2>
        ))}        
      </Grid2>
    </div>    
  );
};  

export default Blog;