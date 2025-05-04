import { style } from '@vanilla-extract/css';

export const buttonStyle = style({
    width: '73%',
    padding: '5px 10px 5px 10px',
    height: '40px',
    borderRadius: '5px',
    border: 'none',
});

export const buttonEnable = style({
    backgroundColor: 'lightgreen',
    color: 'black',
});

export const buttonDisable = style({
    backgroundColor: 'lightgray',
    color: 'white',
});
