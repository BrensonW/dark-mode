import React from 'react';
import styled from 'styled-components';


const Card = styled.div`
display: flex;
justify-content: space-evenly;
background: #f68819;
margin: 7% 5% 7% 0;
width: 50%;
height: auto;
box-shadow: 3px 15px 20px 10px;
`;

const StretchPage = () => {
  return (
    <div class='stretchPageCont'>
      <h1>Random Facts</h1>

      <div className='facts'>
          <Card>
        <h2 className='fact'>
          Cryptocurrency is a digital currency that uses encryption
          (cryptography) to generate money and to verify transactions.
          Transactions are added to a public ledger – also called a Transaction
          Block Chain – and new coins are created through a process known as
          mining.
        </h2>
        </Card>
        <Card>
        <h2 className='fact'>
          If you want to get cryptocurrency you can mine it, trade goods and
          services for it, or buy it via brokers and exchanges using dollars and
          other cryptocurrencies. Check out Coinbase for a
          broker/exchange/wallet solution.
        </h2>
        </Card>
        <Card>
        <h2 className='fact'>
          The first decentralized digital cryptocurrency can arguably be traced
          back to “bit gold” (not to be confused with Bitgold), which was worked
          on by Nick Szabo between 1998 and 2005 but was never implemented.
        </h2>
        </Card>
      </div>
    </div>
  );
};

export default StretchPage;