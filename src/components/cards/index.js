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
import { Code, Star } from '@mui/icons-material';

const cardsData = [
  {
    name: 'Canvas',
    description: `Application for Content Creators for monetize their work.`,
    tech: 'Node. JS - Express, MongoDB, Next JS, NFT, Opensea, Web3.js, Metamask',
  },
  {
    name: 'Emo Myloh',
    description: `The scope of the project was to design and develop a Mental Health Mobile Application for Myloh. 
    The deliverable is an eBuddy mobile application that helps users fulfill their goals and build mental resilience`,
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
  {
    name: 'Regulatory reporting system',
    description: `This App was intended mainly for Singapore based organizations and it was mainly used to upload trial balance sheets and forecast the financial setup of the organizations.
    Graphical representations of the same on yearly and monthly basis are also available in the system`,
    tech: 'Node JS- loopback and Postgres',
  },
  {
    name: 'Self-Management Tool',
    description: `A mobile application for patients who are having secretion clearance diseases such as COPD,
    bronchiectasis etc. The application will enable the patient and care team to identify their health
    trends so that proper actions can be taken to potentially prevent the risks and improve their health.
    And to develop an admin web app to manage the users in the mobile app.`,
    tech: 'Node JS- NestJS and Postgres',
  },
  {
    name: 'Nutrien',
    description: `This application is basically for Australian growers who have acres of land i.e., large scale agriculture
    to provide with the best possible seed grading and treatment services.
    This application will provide you with expert and reliable seed grading and seed treatment services,
    from seed cleaning through to protecting your seed against disease and pests.`,
    tech: 'Node JS- NestJS and Mysql, NextJS',
  },
  {
    name: 'Hydroinformatics',
    description: `This project deals with the development of Radar Rainfall Monitoring and Nowcasting System for
    Urban Flood Management in Singapore.
    And development of Seawater quality monitoring and provide support services for model
    development and model integration`,
    tech: 'Node JS, Python, Vanila js',
  },
  {
    name: 'Carbon Footprint Calculator',
    description: `This App creates an awareness app, which helps the user to know his/her carbon footprint based
    on the actions they do like the food they eat, mode of travel they prefer, etc.`,
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
    <div
      style={{
        backgroundColor: '#f0f0f0',
      }}
    >
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
        <h2
          className='pb-2 border-bottom'
          style={{
            marginBottom: '32px',
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
                margin: '8px 12px',
                boxShadow: 3,
                borderRadius: 5,
                transition: 'transform 0.3s',
                background:
                  'linear-gradient(to bottom right, #ffffff, #f0f0f0)',
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: '0 12px 24px rgba(0, 0, 0, 0.3)',
                },
                maxWidth: '400px',
                height: '300px',
              }}
            >
              <CardContent sx={{ padding: '20px' }}>
                <Box display='flex' alignItems='center' mb={2}>
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
                  sx={{
                    marginBottom: '10px',
                    overflow: 'auto',
                    maxHeight: '150px',
                  }}
                >
                  {card.description}
                </Typography>
                <Divider sx={{ marginBottom: '15px' }} />
                <Box display='flex' alignItems='center'>
                  <Code sx={{ mr: 1, color: 'primary.main' }} />
                  <Typography variant='body2' color='textPrimary'>
                    <strong>Technologies:</strong> {card.tech}
                  </Typography>
                </Box>
              </CardContent>
            </MuiCard>
          ))}
        </Slider>
      </div>
    </div>
  );
}
