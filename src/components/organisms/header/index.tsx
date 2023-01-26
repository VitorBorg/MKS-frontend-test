
import * as S from "./style";
import Cart from "../cart";

const PageHeader = () => {


  return (
    <S.Header>
      <S.Content>
        <S.Logo>
          <h1>MKS</h1> 
          <h2>Sistemas</h2>
        </S.Logo>

        <S.Cart>
          <Cart />
        </S.Cart>

      </S.Content>
    </S.Header>
  );
};

export default PageHeader;