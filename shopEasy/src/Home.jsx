import React from 'react'
import styled from 'styled-components'

function Home() {
  return (
    <Wrapper>
    </Wrapper>
  )
}

const Wrapper = styled.section`
background-color: ${({theme}) => theme.colors.bg }
`;
export default Home
