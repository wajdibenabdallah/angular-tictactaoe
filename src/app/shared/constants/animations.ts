import { animate, state, style, transition } from '@angular/animations';

export const animations: Record<string, any> = {
  '012': {
    style: {
      margin: '5rem 2rem',
      width: '25rem',
    },
    transformStyle: 'translateX(100%)',
    transformAnimate: 'translateX(0%)',
  },
  '345': {
    style: {
      margin: '15rem 2rem',
      width: '25rem',
    },
    transformStyle: 'translateX(100%)',
    transformAnimate: 'translateX(0%)',
  },
  '678': {
    style: {
      margin: '25rem 2rem',
      width: '25rem',
    },
    transformStyle: 'translateX(100%)',
    transformAnimate: 'translateX(0%)',
  },
  '036': {
    style: {
      margin: '14rem -7.5rem',
      transform: 'rotate(90deg)',
      'border-left': '25rem solid',
    },
    transformStyle: 'translateY(100%)',
    transformAnimate: 'translateY(0)',
  },
  '147': {
    style: {
      margin: '14rem -7.5rem',
      transform: 'rotate(90deg)',
      'border-left': '25rem solid',
    },
    transformStyle: 'translateY(100%)',
    transformAnimate: 'translateY(0%)',
  },
};

const _147 = {
  from: state('start147', style({ transform: 'rotate(90deg)' })),
  to: state(
    'end147',
    style({
      margin: '15rem 2rem',
      transform: 'rotate(90deg)',
      'border-left': '25rem solid',
    })
  ),
  transition: transition('start147 => end147', [animate('0.2s')]),
};

const _258 = {
  from: state('start258', style({ transform: 'rotate(90deg)' })),
  to: state(
    'end258',
    style({
      margin: '15rem 12rem',
      transform: 'rotate(90deg)',
      'border-left': '25rem solid',
    })
  ),
  transition: transition('start258 => end258', [animate('0.2s')]),
};

const _048 = {
  from: state(
    'start048',
    style({ margin: '1rem 1rem', transform: 'rotate(45deg)' })
  ),
  to: state(
    'end048',
    style({
      width: '39rem',
      margin: '1rem 1rem',
      transform: 'rotate(45deg)',
      'transform-origin': 'left',
    })
  ),
  transition: transition('start048 => end048', [animate('0.2s')]),
};

const _246 = {
  from: state(
    'start246',
    style({ margin: '1rem 1rem', transform: 'rotate(-45deg)' })
  ),
  to: state(
    'end246',
    style({
      width: '39rem',
      margin: '1rem -11rem',
      transform: 'rotate(-45deg)',
      'transform-origin': 'right',
    })
  ),
  transition: transition('start246 => end246', [animate('0.2s')]),
};
