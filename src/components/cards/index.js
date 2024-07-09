import {
  Card as MuiCard,
  CardContent,
  Typography,
  Box,
  Divider,
} from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Card from './card';

import './styles.css';
import { Star } from '@mui/icons-material';

const cardsData = [
  {
    name: 'Canvas',
    description: `Application for Content Creators for monetize their work.`,
    tech: 'Node. JS - Express, MongoDB, Next JS, NFT, Opensea, Web3.js, Metamask',
  },
  {
    name: 'Emo Myloh',
    description: `The deliverable is an eBuddy mobile application that helps users fulfill their goals and build mental resilience`,
    tech: 'Node. JS - NestJS, Postgres',
  },
  {
    name: 'Nuper',
    description: `A Taxi Booking Application similar to Uber`,
    tech: 'Node. JS - Express, MongoDB.',
  },
  {
    name: 'Data Automation Tool',
    description: `Application for Data automation to reduce the manual effort by 90%.`,
    tech: 'Node JS- loopback and Postgres',
  },
];

export default function Cards() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const projects = [
    {
      title: 'ToDo',
      description:
        'A simple Todo List App built for everyone using React and Redux',
      route: '/tasks',
    },
    {
      title: 'MOViE',
      description:
        'A movies application with search functionality build for you!',
      route: '/movies',
    },
    {
      title: 'Kanban Board',
      description: 'Kanban board for visual treat',
      route: '/board',
    },
  ];
  return (
    <>
      <div className='container px-4 py-5' id='featured-3'>
        <h2 className='pb-2 border-bottom'>My Apps</h2>
        <div className='row g-4 py-5 row-cols-1 row-cols-lg-3'>
          {projects.map(({ title, description, route }) => (
            <Card title={title} paragraph={description} navigateTo={route} ha />
          ))}
          <div className='feature col movie-card'>
            <h3 className='fs-2 text-body-emphasis'>Coming soon!</h3>
            <p>On the way...</p>
            <a href='#' className='icon-link'>
              Call to action
            </a>
          </div>
        </div>
      </div>
      <div className='container'>
        <h2
          className='pb-2 border-bottom'
          style={{
            bottom: '32px',
            position: 'relative',
          }}
        >
          My Key Projects
        </h2>
        <Slider {...settings}>
          {cardsData.map((card, index) => (
            <MuiCard
              key={index}
              sx={{
                margin: '0 10px',
                boxShadow: 3,
                maxWidth: '400px',
                height: '200px',
              }}
            >
              <CardContent sx={{ padding: '20px' }}>
                <Box display='flex' alignItems='center' mb={1}>
                  <Star color='primary' sx={{ mr: 1 }} />
                  <Typography
                    variant='h5'
                    component='div'
                    sx={{ fontWeight: 'bold' }}
                  >
                    {card.name}
                  </Typography>
                </Box>
                <Typography
                  variant='body2'
                  color='textSecondary'
                  sx={{ marginBottom: '10px' }}
                >
                  {card.description}
                </Typography>
                <Divider sx={{ marginBottom: '10px' }} />
                <Typography variant='body2' color='textPrimary'>
                  <strong>Technologies:</strong> {card.tech}
                </Typography>
              </CardContent>
            </MuiCard>
          ))}
        </Slider>
      </div>
    </>
  );
}
