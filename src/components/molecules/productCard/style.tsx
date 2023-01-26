import styled from "styled-components";

export const Card = styled.div`
  width: 220px;
  height: 285px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
  border-radius: 8px 8px 8px 8px;
  }
`;

export const Content = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 5px 15px 0px 15px;
  align-items: center;
  width: fit-content;
  }
`;

export const Image = styled.div`
    img {
      max-height: 138px;
    }
  }
`;

export const NamePrice = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  list-style: none;
  position: relative;
`;

export const PriceDiv = styled.div`
  background: ${(props) => props.theme.colors.dark};
  color: ${(props) => props.theme.colors.letterLight};
  border-radius: 4px;
  padding: 6px 6px 6px 6px;
  margin-left: 3px;
  height: fit-content;
`;

export const Description = styled.div`
  margin-top: 15px;

  p {
    font-size: 10px;
    font-weight: 300px
    line-height: 12px;
  }
`;

export const Button = styled.button`
  width: 100%;
  min-height: 32px;

  cursor: pointer;
  border: none;

  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.blue};
  color: ${(props) => props.theme.colors.letterLight};

  gap: 10px;

  border-radius: 0px 0px 8px 8px;

  p {
    font-weight: 600;
    font-size 14px;
    line-height: 18px;
  }
`;