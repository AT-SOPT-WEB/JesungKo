import { style } from '@vanilla-extract/css';

export const loginContainer = style({
    display: 'flex',
    height: '100vh',
    backgroundColor: 'red',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
});

export const mypageContainer = style({
    display: 'flex',
    height: 'calc(100vh - 150px)',
    backgroundColor: 'red',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
});
