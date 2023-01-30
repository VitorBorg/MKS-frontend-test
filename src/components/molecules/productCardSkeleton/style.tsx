import styled from "styled-components";


export const Grid = styled.div`
  margin: 100px 0px 100px 0px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  
  border-radius: 8px 8px 8px 8px;

    ul {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      gap: 22px;

      list-style-type: none;
      padding: 0;

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