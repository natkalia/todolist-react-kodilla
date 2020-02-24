import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import {infoContents} from '../../data/dataStore';

const Info = () => (
  <Container>
    <Hero
      titleText={infoContents.titleInfo}
      imageSource={infoContents.imageInfo}
    />
    <p>{infoContents.contentInfo}</p>
  </Container>
);

export default Info;