import React from 'react';
import Bar from './components/Bar';
import Content from './components/Content';
import Nav from './components/Nav';
import TestimonialSection from './components/TestimonialSection';
import QuoteSection from './components/QuoteSection.jsx';
import Container from './components/Container';


function App() {
  return (
    <div className="">
      <Nav />
      <TestimonialSection />
      <Bar />

      <Content />
      <QuoteSection />
      <Container />
    </div>
  );
}

export default App;
