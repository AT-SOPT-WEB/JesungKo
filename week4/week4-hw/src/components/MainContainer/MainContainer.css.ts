import { style } from '@vanilla-extract/css';

export const loginContainer = style({
    display: 'flex',
    height: '100vh',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
});

export const mypageContainer = style({
    display: 'flex',
    minHeight: 'calc(100vh - 150px)',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
});
