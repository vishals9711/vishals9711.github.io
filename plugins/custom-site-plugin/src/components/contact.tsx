/** @jsx jsx */
import { jsx } from 'theme-ui';
import Divider from '../elements/divider';
import Inner from '../elements/inner';
import Content from '../elements/content';
import Svg from './svg';
import { UpDown, UpDownWide, waveAnimation } from '../styles/animations';
import Footer from './footer';
// @ts-ignore
import ContactMDX from '../sections/contact';
import { IconButton } from 'theme-ui'

const openNewTab = (url: string) => window.open(url, '_blank');


const Contact = ({ offset, factor = 1 }: { offset: number; factor?: number }) => (
  <div>
    <Divider fill='divider' speed={0.2} offset={offset} factor={factor}>
      <div sx={{ position: `absolute`, bottom: 0, width: `full`, transform: `matrix(1, 0, 0, -1, 0, 0)` }}>
        <div
          sx={{
            position: `relative`,
            height: `full`,
            svg: { width: `100%`, height: `40vh` },
            path: { animation: waveAnimation(`20s`) },
          }}
        >
          <svg xmlns='http://www.w3.org/2000/svg' id='contact-wave' viewBox='0 0 800 338.05' preserveAspectRatio='none'>
            <path>
              <animate
                attributeName='d'
                values='M 0 100 Q 250 50 400 200 Q 550 350 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 200 150 400 200 Q 600 250 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 150 350 400 200 Q 650 50 800 300 L 800 0 L 0 0 L 0 100 Z'
                repeatCount='indefinite'
                dur='30s'
              />
            </path>
          </svg>
        </div>
      </div>
    </Divider>
    <Content speed={0.3} offset={offset} factor={factor}>
      <Inner sx={{ textAlign: 'center' }}>
        <ContactMDX />
        <IconButton
          aria-label='mailButton'
          onClick={() => openNewTab('mailto:vishalsharma1907@gmail.com')}
          name="maillink"
          sx={{
            height: 8,
            width: 8,
            cursor:'pointer',
            ':after': {
              transition: 'all ease-in-out .3s',
              background: 'none repeat scroll 0 0 currentcolor',
              display: 'block',
              height: '3px',
              width: '0px',
            },
            ':hover': {
              ':after': { width: '100%' },
            },
          }}
        >
          <svg
            viewBox='0 0 512 512'
            sx={{
              height: 8,
              width: 8,
              display: 'inline-block',
              lineHeight: '1em',
              flexShrink: 0,
              vertical: 'middle',
              fill: 'currentcolor',
              // stroke: 'inherit',
            }}
            focusable='false'
          >
            <path d='M424 80H88a56.06 56.06 0 00-56 56v240a56.06 56.06 0 0056 56h336a56.06 56.06 0 0056-56V136a56.06 56.06 0 00-56-56zm-14.18 92.63l-144 112a16 16 0 01-19.64 0l-144-112a16 16 0 1119.64-25.26L256 251.73l134.18-104.36a16 16 0 0119.64 25.26z'></path>
          </svg>
        </IconButton>
        <IconButton
          aria-label='githubButton'
          onClick={() => openNewTab('https://github.com/vishals9711')}
          sx={{
            height: 8,
            width: 8,
            mx: 4,
            cursor:'pointer',
            ':after': {
              transition: 'all ease-in-out .3s',
              background: 'none repeat scroll 0 0 currentcolor',
              display: 'block',
              height: '3px',
              width: '0px',
            },
            ':hover': {
              ':after': { width: '100%' },
            },
          }}
        >
          <svg
            viewBox='0 0 512 512'
            focusable='false'
            sx={{
              height: 8,
              width: 8,
              display: 'inline-block',
              lineHeight: '1em',
              flexShrink: 0,
              color: 'currentcolor',
              vertical: 'middle',
              fill: 'currentcolor',
              stroke: 'currentcolor',
            }}
          >
            <path d='M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 003.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 01-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0025.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 015-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 01112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 015 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 004-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z'></path>
          </svg>
        </IconButton>
        <IconButton
          aria-label='linkedinbutton'
          onClick={() => openNewTab('https://www.linkedin.com/in/vishals9711/')}
          sx={{
            height: 8,
            width: 8,
            cursor:'pointer',
            ':after': {
              transition: 'all ease-in-out .3s',
              background: 'none repeat scroll 0 0 currentcolor',
              display: 'block',
              height: '3px',
              width: '0px',
            },
            ':hover': {
              ':after': { width: '100%' },
            },
          }}
        >
          <svg
            sx={{
              height: 8,
              width: 8,
              display: 'inline-block',
              lineHeight: '1em',
              flexShrink: 0,
              color: 'currentcolor',
              vertical: 'middle',
              fill: 'currentcolor',
              stroke: 'currentcolor',
            }}
            viewBox='0 0 512 512'
            focusable='false'
          >
            <path d='M444.17 32H70.28C49.85 32 32 46.7 32 66.89v374.72C32 461.91 49.85 480 70.28 480h373.78c20.54 0 35.94-18.21 35.94-38.39V66.89C480.12 46.7 464.6 32 444.17 32zm-273.3 373.43h-64.18V205.88h64.18zM141 175.54h-.46c-20.54 0-33.84-15.29-33.84-34.43 0-19.49 13.65-34.42 34.65-34.42s33.85 14.82 34.31 34.42c-.01 19.14-13.31 34.43-34.66 34.43zm264.43 229.89h-64.18V296.32c0-26.14-9.34-44-32.56-44-17.74 0-28.24 12-32.91 23.69-1.75 4.2-2.22 9.92-2.22 15.76v113.66h-64.18V205.88h64.18v27.77c9.34-13.3 23.93-32.44 57.88-32.44 42.13 0 74 27.77 74 87.64z'></path>
          </svg>
        </IconButton>

      </Inner>
      <Footer />
    </Content>
    <Divider speed={0.1} offset={offset} factor={factor}>
      <UpDown>
        <Svg icon='upDown' hiddenMobile width={8} color='icon_darkest' left='70%' top='20%' />
        <Svg icon='triangle' width={8} stroke color='icon_darkest' left='25%' top='5%' />
      </UpDown>
      <UpDownWide>
        <Svg icon='triangle' width={12} stroke color='icon_brightest' left='95%' top='50%' />
        <Svg icon='circle' width={6} color='icon_brightest' left='85%' top='15%' />
        <Svg icon='upDown' hiddenMobile width={8} color='icon_darkest' left='45%' top='10%' />
      </UpDownWide>
      <Svg icon='circle' width={6} color='icon_brightest' left='4%' top='20%' />
      <Svg icon='circle' width={12} color='icon_darkest' left='70%' top='60%' />
      <Svg icon='box' width={12} color='icon_darkest' left='20%' top='30%' />
      <Svg icon='hexa' width={8} stroke color='icon_darkest' left='80%' top='70%' />
    </Divider>
  </div>
);

export default Contact;
