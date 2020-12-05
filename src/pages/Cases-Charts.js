import React from 'react';
import Helmet from 'react-helmet';

import Layout from 'components/Layout';
import Container from 'components/Container';

import './cool.css';

const SecondPage = () => {
  return (
    <Layout pageName="two">
      <Helmet>
        <title>Corona Cases Graphs</title>
      </Helmet>
      <Container type="content" className="text-center">

    <h2> Top 59 countries with corona virus cases</h2>
        <h4>⬇️(Click the Image below for the graphs)⬇️</h4>
  <h5> Multiple Charts Created Because the differences from most to least are too big for one video</h5>
  <h6> There is no American Data as it is too big </h6>
  <h6> Data as of 4/26/20 </h6>

    <a href="https://coviddashoard.github.io/Dashboard/bargraph.html" className="w3-round">
<img border="0" alt="W3Schools" src="https://images7.alphacoders.com/314/314030.png" width="600" height="600"/>
</a>

       <h2> Bottom 59 countries with corona virus cases</h2>
        <h4>⬇️(Click the Image below for the graphs)⬇️</h4>

    <a href="https://coviddashoard.github.io/Dashboard/bargraph3.html" className="w3-round">
<img border="0" alt="W3Schools" src="https://images7.alphacoders.com/314/314030.png" width="600" height="600"/>
</a> 
    
    <h2> Middle 94 countries with corona virus cases</h2>
        <h4>⬇️(Click the Image below for the graphs)⬇️</h4>

    <a href="https://coviddashoard.github.io/Dashboard/bargraph2.html" className="w3-round">
<img border="0" alt="W3Schools" src="https://images7.alphacoders.com/314/314030.png" width="600" height="600"/>
</a>
      </Container>
    </Layout>

  );
};

export default SecondPage;
