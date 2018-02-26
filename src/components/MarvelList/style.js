import React from 'react';
import styled from 'styled-components';

export const MainContainer = styled.div`
  text-align: left;
  margin: 3em 0em;
`;

export const RowContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  overflow: scroll;
  justify-content: left;
  align-items: center;
  padding-right: 3em;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const GridContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  overflow: scroll;
  justify-content: center;
  align-items: center;
  ::-webkit-scrollbar {
    display: none;
  }
`;
