import styled from "styled-components";


export const Cart = styled.button`
  background-color: ${(props) => props.theme.colors.background};
  border: none;
  cursor:pointer;

  display: flex;
  flex-direction: row;
  height: fit-content;
  align-items: center;
  gap: 15px;
  padding 10px 16px;
  border-radius: 8px;

  span {
    font-weight: 700;
    size: 18px;
    line-height: 22px;
  }
  }
`;

export const MenuAside = styled.aside`
  position: fixed;
  top: 0px;
  bottom: 0px;
  right: 0px;
  width: min(100vw, 480px);
  z-index: 10;
  background-color: ${(props) => props.theme.colors.blue};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 5vh;
  
  box-shadow: -5px 0px 6px rgba(0, 0, 0, 0.13);
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  padding: 40px 40px 0px 40px;
  height: 100%;
  align-items: space-between;
  justify-content: space-between;
`;

export const Header = styled.div`
 display: flex;
 flex-direction: row;
 flex: 1;
 justify-content: space-between;
 width: 100%;
`;

export const Title = styled.div`
  width: min-content;
`;


export const ButtonMobileClose = styled.button`
  display: flex;
  background: ${(props) => props.theme.colors.black};
  

  border: none;
  border-radius:50%;
  height: 35px;
  width:  35px;

  align-items: center;
  justify-content: center;

  outline: inherit;
  z-index: 15;
  cursor: pointer;

  span {
    color: ${(props) => props.theme.colors.letterLight};
    font-size: 20px;
    font-weight: 400;
    line-height: 15px;
  }

  @media (max-width: ${(props) => props.theme.screen.xl}) {
    display: block;
  }
  :hover {
    transform: scale(1.3, 1.3);
  }
`;

export const Items = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

export const Price = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const HeaderAndItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
`

export const FinishButton = styled.button`
    background-color: ${(props) => props.theme.colors.black};
    width: 100%;
    height: 100px;
    border: none;
`

export const Span = styled.span`
    color:  ${(props) => props.theme.colors.letterLight};
    font-size: 28px;
    font-weight: 700;
    line-height: 32px;
    white-space: nowrap;
`