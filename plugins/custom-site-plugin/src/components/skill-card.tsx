/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';

type ProjectCardProps = {
    language: string;
    bg: string;

};

const SkillCard = ({ language,bg }: ProjectCardProps) => (

    <div
    sx={{
        width: `100%`,
        textAlign:'center',
        boxShadow: `lg`,
        position: `relative`,
        textDecoration: `none`,
        borderRadius: `lg`,
        px: 3,
        py: [1, 2],
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
      {language}
    </div>
      
);

export default SkillCard;
