import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import {infoContents} from '../../data/dataStore';

const Info = () => (
  <Container>
    <Hero
      title={infoContents.titleInfo}
      image={infoContents.imageInfo}
    />
    <p>{infoContents.contentInfo}</p>
  </Container>
);

export default Info;