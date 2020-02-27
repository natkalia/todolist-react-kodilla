import React from 'react';
import Container from '../Container/Container';
import {faqContents} from '../../data/dataStore';
import Hero from '../Hero/Hero';

const Faq = () => (
  <Container>
    <Hero 
      title={faqContents.titleFaq}
      image={faqContents.imageFaq}
    />
    <p>{faqContents.contentFaq}</p>
  </Container>
);

export default Faq;