import { style } from '@vanilla-extract/css';

export const inputArticleStyle = style({
    display: 'flex',
    width: '70%',
    height: '35px',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
});

export const inputStyle = style({
    width: '100%',
    borderRadius: '10px',
    height: '100%',
    border: 'none',
    padding: '5px 10px 5px 10px',
});

export const inputBtn = style({
    position: 'absolute',
    right: '10px',
});
