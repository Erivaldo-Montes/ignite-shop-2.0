import { styled } from '@stitches/react'

export const Container = styled('div', {
  display: 'flex',
  gap: '1.25rem',

  '& > :nth-child(1)': {
    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
    width: '6.30rem',
    maxHeight: '5.8rem',

    img: {
      objectFit: 'cover',
    },
  },

  '& > :nth-child(2)': {
    display: 'flex',
    flexDirection: 'column',

    '& > p': {
      fontSize: '$md',
      lineHeight: '160%',
      color: '$gray300',
    },

    '& > span': {
      margginTop: '0.125rem',
      fontSize: '$md',
      fontWeight: 'bold',
      padding: 0,
    },

    '& > button': {
      background: 'transparent',
      border: 'none',
      color: '$green500',
      marginTop: 'auto',
      width: '4rem',

      textAlign: 'left',
      cursor: 'pointer',

      '&:hover': {
        color: '$green300',
      },
    },
  },
})
