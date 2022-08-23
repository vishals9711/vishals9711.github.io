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

const timelineArray = [
  {
    icon: <SchoolIcon />,
    heading: 'Bachelor of Engineering, Computer Engineering',
    subheading: 'Goa College of Engineering',
    date: '2015 - 2019',
  },
  {
    icon: <WorkIcon />,
    heading: 'Market Research Intern',
    subheading: 'Get My Parking',
    date: 'Jun 2017 - Jul 2017',
  },
  {
    icon: <WorkIcon />,
    heading: 'Web Development Intern',
    subheading: 'Linker Logic Technologies',
    date: 'Jan 2018 - Feb 2018',
  },
  {
    icon: <WorkIcon />,
    heading: 'Fellowship',
    subheading: 'Analog Devices',
    date: 'Feb 2018 - Aug 2018 ',
  },
  {
    icon: <WorkIcon />,
    heading: 'Software Engineer',
    subheading: 'Persistent Systems',
    date: 'Jul 2019 - Jul 2021 ',
  },
  {
    icon: <SchoolIcon />,
    heading: 'Master of Science, Computer Science',
    subheading: 'San Francisco State University',
    date: '2021 - 2023',
  },
  {
    icon: <WorkIcon />,
    heading: 'Customer Experience Intern',
    subheading: 'Privacera',
    date: 'Jun 2022 - Present',
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
            <h3 className='vertical-timeline-element-title'>{data.heading}</h3>
            <h4 className='vertical-timeline-element-subtitle'>{data.subheading}</h4>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default Timeline;
