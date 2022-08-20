/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';

type ProjectCardProps = {
  link: string;
  title: string;
  children: React.ReactNode;
  bg: string;
  languages: string[];
};

const ProjectCard = ({ link, title, children, bg, languages }: ProjectCardProps) => (
  <a
    href={link}
    target='_blank'
    rel='noreferrer noopener'
    sx={{
      width: `100%`,
      boxShadow: `lg`,
      position: `relative`,
      textDecoration: `none`,
      borderRadius: `lg`,
      px: 4,
      py: [4, 5],
      color: `white`,
      background: bg || `none`,
      transition: `all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important`,
      '&:hover': {
        color: `white !important`,
        transform: `translateY(-5px)`,
        boxShadow: `xl`,
      },
    }}
  >
    <div
      sx={{
        textTransform: `uppercase`,
        letterSpacing: `wide`,
        fontSize: [4, 5],
        fontWeight: `medium`,
        lineHeight: 1,
      }}
    >
      {title}
    </div>
    <div sx={{ opacity: 0.85, textShadow: `0 2px 10px rgba(0, 0, 0, 0.3)`, pt: 4 }}>{children}</div>
    <div sx={{ display: 'flex', flexWrap: 'wrap', pt: 4 }}>
      {languages.map((data, index) => (
        <React.Fragment key={index}>
          <div sx={{ my: 1, display: 'flex' }}>
            <div
              sx={{
                letterSpacing: `wide`,
                fontSize: [1, 2],
                fontWeight: `small`,
                lineHeight: 1,
                textShadow: `0 2px 10px rgba(0, 0, 0, 0.3)`,
              }}
            >
              {data}
            </div>
            {index < languages.length - 1 ? <hr sx={{ height: '16px', mx: '12px', my: 'auto', backgroundColor: 'currentcolor' }} /> : null}
          </div>
        </React.Fragment>
      ))}
    </div>
  </a>
);

export default ProjectCard;
