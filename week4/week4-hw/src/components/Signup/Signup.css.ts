import { style } from '@vanilla-extract/css';

export const article = style({
    width: '30vw',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '20px',
});

export const title = style({
    justifyItems: 'flex-start',
    width: '70%',
});
