import styled from "styled-components";

export const ItemContainer = styled.div`
  width: 80%;

  h3 {
    font-size: 32px;
    color: #fafafa;
  }

  p {
    font-size: 16px;
    color: #fafafa60;
  }

  span.remover {
    color: #ff0000;
    margin-top: 20px;
    text-decoration: underline;
  }

  span.remover:hover {
    cursor: pointer;
  }

  hr {
    color: #fafafa60;
    margin: 20px 0;
  }
`;
