import { style } from '@vanilla-extract/css';

export const navBar = style({
    height: '110px',
    width: 'calc(100vw - 40px)',
    backgroundColor: 'lightgreen',
    padding: '20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
});
