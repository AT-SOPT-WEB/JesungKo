import { style } from '@vanilla-extract/css';

export const navBar = style({
    height: '110px',
    width: 'calc(100vw - 80px)',
    backgroundColor: 'lightgreen',
    padding: '10px 40px 10px 40px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
});

export const menuSection = style({
    display: 'flex',
    gap: '20px',
});

export const menuButton = style({
    background: 'none',
    border: 'none',
    fontSize: '20px',
});
