/** @jsx jsx */
import { Heading, jsx, Text } from 'theme-ui';
import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { useThemeUI } from 'theme-ui';
import { PROJECT_CARD_BG } from '../constants';

const WorkIcon = () => (
  <svg focusable='false' viewBox='0 0 24 24' aria-hidden='true'>
    <path fill='none' d='M0 0h24v24H0z'></path>
    <path d='M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z'></path>
  </svg>
);

const SchoolIcon = () => (
  <svg focusable='false' viewBox='0 0 24 24' aria-hidden='true'>
    <path fill='none' d='M0 0h24v24H0z'></path>
    <path d='M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z'></path>
  </svg>
);

const LocationIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" /></svg>
)

const StarIcon = () => (
  <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="StarIcon"><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
)

const timelineArray = [
  {
    icon: <SchoolIcon />,
    heading: 'Bachelor of Engineering, Computer Engineering',
    subheading: 'Goa College of Engineering',
    date: '2015 - 2019',
    location: 'Goa, India'
  },
  {
    icon: <WorkIcon />,
    heading: 'Market Research Intern',
    subheading: 'Get My Parking',
    date: 'Jun 2017 - Jul 2017',
    location: 'Goa, India'
  },
  {
    icon: <WorkIcon />,
    heading: 'Web Development Intern',
    subheading: 'Linker Logic Technologies',
    date: 'Jan 2018 - Feb 2018',
    location: 'Remote'
  },
  {
    icon: <WorkIcon />,
    heading: 'Fellowship',
    subheading: 'Analog Devices',
    date: 'Feb 2018 - Aug 2018 ',
    location: 'Bangalore, India'
  },
  {
    icon: <WorkIcon />,
    heading: 'Software Engineer',
    subheading: 'Persistent Systems',
    date: 'Jul 2019 - Jul 2021 ',
    location: 'Goa, India'
  },
  {
    icon: <SchoolIcon />,
    heading: 'Master of Science, Computer Science',
    subheading: 'San Francisco State University',
    date: '2021 - 2023',
    location: 'San Francisco, CA'
  },
  {
    icon: <WorkIcon />,
    heading: 'Customer Experience Intern',
    subheading: 'Privacera',
    date: 'Jun 2022 - Present',
    location: 'Fremont, CA'
  },
];

const Timeline = () => {
  const context = useThemeUI();
  const { colorMode } = context;

  const color = colorMode && colorMode === 'dark' ? '#FFF' : '#000';
  return (
    <div>
      <VerticalTimeline lineColor={color}>
        {timelineArray.reverse().map((data, index) => (
          <VerticalTimelineElement
            className='vertical-timeline-element--work'
            contentStyle={{ background: PROJECT_CARD_BG[index % 4], color: color }}
            contentArrowStyle={{ borderRight: `7px solid ${colorMode === 'dark' ? '#FFF' : '#000'}`, color: colorMode === 'dark' ? '#000' : '#FFF' }}
            date={data.date}
            iconStyle={{ background: 'rgb(33, 150, 243)', color: color }}
            icon={data.icon}
            key={index}
          >
            <Heading as={'h3'} className='vertical-timeline-element-title' sx={{ paddingBottom: 3, color: color }}>{data.heading}</Heading>
            <Heading as={'h4'} className='vertical-timeline-element-subtitle'>{data.subheading}</Heading>
            <Text sx={{ display: 'flex', marginTop: 3 }}><div sx={{ position: 'relative', top: '4px', marginRight: 2 }}><LocationIcon /></div> <span>{data.location}</span></Text>
          </VerticalTimelineElement>
        ))}
        <VerticalTimelineElement
            iconStyle={{ background: 'rgb(33, 150, 243)', color: color }}
            icon={<StarIcon />}
        />
      </VerticalTimeline>
    </div>
  );
};

export default Timeline;
