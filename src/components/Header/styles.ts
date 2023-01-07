import { styled } from '@stitches/react'

export const Header = styled('header', {
  padding: '2rem 0',
  width: '100%',
  maxWidth: 1100,
  margin: '0 auto',

  display: 'flex',
  justifyContent: 'space-between',

  span: {
    padding: '0.75rem',
    background: '$gray800',
    borderRadius: 6,
    cursor: 'pointer',

    svg: {
      color: '#8D8D99',
    },
  },
})
