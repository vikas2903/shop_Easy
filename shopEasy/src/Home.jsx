import React, { useContext } from 'react';
import styled from 'styled-components';
import Slideshow from './components/Slideshow';
import FeatureProducts from './components/Featureproducts';
import { AppContext } from './context/Productcontext'; 
import Ourbrandhome from './components/Ourbrandhome';

function Home() {
  const { shoesData, bagsData } = useContext(AppContext);

  return (
    <Wrapper>
      <Slideshow />
      <FeatureProducts data={bagsData} />
      <Ourbrandhome />
      <FeatureProducts data={shoesData} />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  background-color: ${({ theme }) => theme.colors.bg };
`;

export default Home;
