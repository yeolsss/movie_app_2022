import React, { useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import styled from 'styled-components';
const Container = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`;

const Header = styled.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px 0px;
`;
const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`;

const Loader = styled.span`
  display: block;
  text-align: center;
`;

const Img = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 20px;
`;

interface RouteParams {
  coinId: string;
}
interface LocationSate {
  state: {
    coin: {
      id: string;
      name: string;
      symbol: string;
      rank: number;
      is_new: boolean;
      is_active: boolean;
      type: string;
    };
  };
}

function Coin() {
  const [loading, setLoading] = useState(true);
  const { coinId } = useParams<keyof RouteParams>() as RouteParams;
  const {
    state: { coin },
  } = useLocation() as LocationSate;
  return (
    <Container>
      <Header>
        <Img
          src={`https://coinicons-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`}
        />
        <Title>{coin?.name || 'Loading...'}</Title>
      </Header>
      {loading ? <Loader>Loading...</Loader> : null}
    </Container>
  );
}
export default Coin;
