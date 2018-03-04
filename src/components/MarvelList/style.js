import React from 'react';
import styled from 'styled-components';

const Common = styled.div`
  display: flex;
  overflow: scroll;
  align-items: center;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const MainContainer = styled.div`
  text-align: left;
  margin: 3em 0em;
`;

const RowContainer = styled(Common)`
  flex-flow: row nowrap;
  justify-content: left;
  padding-right: 3em;
`;

const GridContainer = styled(Common)`
  flex-flow: row wrap;
  justify-content: center;
`;

export default {
  MainContainer,
  Row: RowContainer,
  Grid: GridContainer
};
