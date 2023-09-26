import { animate, state, style, transition } from '@angular/animations';

const _012 = {
  from: state(
    'start012',
    style({
      margin: '6rem 2rem',
    })
  ),
  to: state(
    'end012',
    style({
      width: '25rem',
      margin: '6rem 2rem',
    })
  ),
  transition: transition('start012 => end012', [animate('0.2s')]),
};

const _345 = {
  from: state(
    'start345',
    style({
      margin: '15rem 2rem',
    })
  ),
  to: state(
    'end345',
    style({
      width: '25rem',
      margin: '15rem 2rem',
    })
  ),
  transition: transition('start345 => end345', [animate('0.2s')]),
};

const _678 = {
  from: state(
    'start678',
    style({
      margin: '25rem 2rem',
    })
  ),
  to: state(
    'end678',
    style({
      width: '25rem',
      margin: '25rem 2rem',
    })
  ),
  transition: transition('start678 => end678', [animate('0.2s')]),
};

const _036 = {
  from: state(
    'start036',
    style({
      transform: 'rotate(90deg)',
    })
  ),
  to: state(
    'end036',
    style({
      margin: '15rem -7rem',
      transform: 'rotate(90deg)',
      'border-left': '25rem solid',
    })
  ),
  transition: transition('start036 => end036', [animate('0.2s')]),
};

const _147 = {
  from: state(
    'start147',
    style({
      transform: 'rotate(90deg)',
    })
  ),
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
  from: state(
    'start258',
    style({
      transform: 'rotate(90deg)',
    })
  ),
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
    style({
      margin: '1rem 1rem',
      transform: 'rotate(45deg)',
    })
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
    style({
      margin: '1rem 1rem',
      transform: 'rotate(-45deg)',
    })
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

export { _012, _345, _678, _036, _147, _258, _048, _246 };
