import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import WorkIcon from '@mui/icons-material/Work';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import EducationIcon from '@mui/icons-material/School';
import GradeIcon from '@mui/icons-material/Grade';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material';

const DescriptionTypography = styled(Typography)(({ theme }) => ({
  '&.MuiTypography-root': {
    // Use theme.typography.body2 for body2 variant
    ...theme.typography.body2,
    color: theme.palette.text.secondary,
    marginBottom: '10px',
    overflow: 'auto',
    maxHeight: '150px',
  },
}));

// Define a styled component based on Typography
const TitleTypography = styled(({ variant, component, ...props }) => (
  <Typography variant={variant} component={component} {...props} />
))(({ theme }) => ({}));

export default function CustomizedTimeline() {
  return (
    <Timeline position='alternate'>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align='right'
          variant='body2'
          color='text.secondary'
        >
          Oct 21 - Present
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color='success'>
            <WorkIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant='h6' component='span'>
            Senior Software Engineer, Perfomatix
          </Typography>
          <DescriptionTypography>
            Full-Stack Development: Node.js, React.js, MongoDB, Express.js |
            Database Management: MySQL, PostgreSQL, MongoDB | Optimization: Code
            and query performance enhancements | Leadership & Mentoring: Guiding
            teams towards success | Agile Methodologies: Efficient project
            delivery
          </DescriptionTypography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant='body2'
          color='text.secondary'
        >
          Jul 2019 - Nov 2022 . 2yrs 5mos
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color='primary'>
            <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <TitleTypography variant='h6' component='span'>
            Software Engineer, Perfomatix
          </TitleTypography>
          <DescriptionTypography>
            {`Led the development of a high-traffic web application that
            improved user engagement by 30%. | Spearheaded the migration of
            legacy systems to modern MERN stack architecture, resulting in a 50%
            increase in system performance. | Developed and implemented a
            comprehensive testing strategy that reduced bugs in production by
            40%.`}
          </DescriptionTypography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant='body2'
          color='text.secondary'
        >
          2018
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color='primary' variant='outlined'>
            <EducationIcon />
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <TitleTypography variant='h6' component='span'>
            Graduated
          </TitleTypography>
          <DescriptionTypography>
            Electronics and Communications Engineering from Kerala University
          </DescriptionTypography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
