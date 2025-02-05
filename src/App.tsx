import React from 'react';
import Bar from './components/Bar';
import Content from './components/Content';
import Nav from './components/Nav';
import TestimonialSection from './components/TestimonialSection.jsx';
import QuoteSection from './components/QuoteSection.jsx';
import Container from './components/Container';
import Security from './components/Security';
import GlobalF from './components/GlobalF.jsx';

function App() {

  const securityReasons = [
   {
      heading:"99.99% service uptime?",
      spans:"Yup!"
  },
  {
    heading:"Licenced and regulated?",
    spans:"Yup!"
  },
  {
    heading:"Great Interest Rates?",
    spans:"Yup!"
  },
   {
    heading:"Diversified investment portfolio?",
    spans:"Sure!"
  },
   {
    heading:"Secured savings?",
    spans:"Bet!"
  },
  
  {
    heading:"Convinced?",
    spans:"Sign Up Now",
    // color:"blue"
  },

  ]
  const data={securityReasons,}
  return (
    <div className="">
      <Nav />
      <TestimonialSection />
      <Bar />

      <Content />
      <QuoteSection />
      <Container />

      <Security  {...data} />

      <GlobalF  />
    </div>
  );
}

export default App;
