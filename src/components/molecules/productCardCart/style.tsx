import styled from "styled-components";

export const Card = styled.div`
  position: relative;
  width: 100%;
  height: 100px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
  border-radius: 8px 8px 8px 8px;
  }
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex: 1;
  padding: 5px 15px 0px 15px;
  justify-content: space-between;
  align-items: center;
  }
`;

export const ImageName = styled.div`
  width: min-content;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  position: relative;
  gap: 10px;

  img {
    max-height: 70px;
  }

  h3 {
    width: min-content;
  }
`;

export const PriceDiv = styled.div`
  color: ${(props) => props.theme.colors.letter};
  border-radius: 4px;
  padding: 6px 6px 6px 6px;
  margin-left: 3px;
  height: fit-content;
`;

export const Quantity = styled.div`
  width: 50px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-left: 15px;
  border: 0.3px solid #BFBFBF;
  border-radius: 4px;

  p {
    font-size: 12px;
    font-weight: 300px
    line-height: 12px;
  }

  p:after {
    width: 1px;
    height: 100%;
    background: black;
  }


  button {
    background: none;
    border: none;
  }
`;


export const ButtonDeleteProduct = styled.button`
  position: absolute;
  right: -5px;
  top: -7px;  

  display: flex;
  background: ${(props) => props.theme.colors.black};
  

  border: none;
  border-radius:50%;
  height: 20px;
  width:  20px;

  align-items: center;
  justify-content: center;

  outline: inherit;
  z-index: 15;
  cursor: pointer;

  span {
    color: ${(props) => props.theme.colors.letterLight};
    font-size: 12px;
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