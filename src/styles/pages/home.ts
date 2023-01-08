import { styled } from '@stitches/react'

export const HomeContainer = styled('main', {
  display: 'flex',
  // gap: '3rem',
  maxWidth: 'calc(100vw - ((100vw - 1080px) / 2))',
  width: '100%',
  marginLeft: 'auto',
})

export const Product = styled('div', {
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  // padding: '0.25rem',
  cursor: 'pointer',
  position: 'relative',
  overflow: 'hidden',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover',
  },

  footer: {
    position: 'absolute',
    bottom: '0.25rem',
    left: '0.25rem',
    right: '0.25rem',
    padding: '2rem',

    borderRadius: 6,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    backgroundColor: 'rgba(0, 0, 0, 0.6)',

    transform: 'translateY(110%)',
    opacity: 0,
    transition: 'all 0.2s ease-in-out',

    div: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.25rem',

      strong: {
        fonsSize: '$lg',
        color: '$gray100',
      },

      span: {
        fontSize: '$xl',
        fontWeight: 'bold',
        color: '$green300',
      },
    },

    button: {
      padding: '0.75rem',
      background: '$green500',
      border: 'none',
      borderRadius: 6,
      cursor: 'pointer',

      '&:hover': {
        background: '$green300',
        transition: 'backgound 0.2s',
      },

      svg: {
        color: '$white',
      },
    },
  },

  '&:hover': {
    footer: {
      transform: 'translateY(0%)',
      opacity: 1,
    },
  },
})
