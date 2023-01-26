import styled from "styled-components";

export const Grid = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  margin-top: 40px;
  
  border-radius: 8px 8px 8px 8px;

    ul {
      display: grid;
      grid-template-columns: 1fr;
      gap: 22px;
      width: 100%;

      list-style-type: none;
      padding: 0;

      li {
        background: ${(props) => props.theme.colors.background};
        border-radius: 8px;
      }

      @media (max-width: ${(props) => props.theme.screen.lg}) {
        grid-template-columns: 1fr 1fr 1fr;
      }

      @media (max-width: ${(props) => props.theme.screen.md}) {
        grid-template-columns: 1fr 1fr;
      }

      @media (max-width: ${(props) => props.theme.screen.sm}) {
        grid-template-columns: 1fr;
      }
    }
  }
`;