import styled from "styled-components";

export const Footer = styled.section`
  height: 100px;
  background-color: ${(props) => props.theme.colors.FooterBackground};

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  span {
    color: ${(props:any) => props.theme.fontSize.dark}
    font-weight: 600;
    font-size: 12px;
    line-height: 14.63px;
  }
  }
`;