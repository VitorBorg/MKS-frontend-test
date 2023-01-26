import styled from "styled-components";

export const Header = styled.section`
  height: 100px;
  background-color: ${(props) => props.theme.colors.blue};

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  padding: 0px 50px 0px 50px;
  }
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1920px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  }
`;

export const Logo = styled.div`
  display: flex;
  flex-direction: row;
  height: fit-content;
  align-items: flex-end;
  gap: 7px;
  }
`;


export const Cart = styled.div`
`;