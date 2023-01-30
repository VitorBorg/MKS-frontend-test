import React from "react";
import * as S from "./style";
import ContentLoader from 'react-content-loader'

const ProductCardSkeleton = ({cards} : any) => {
  
  return (
    <S.Grid data-testid="loading">
      <ul>
      {Array(cards).fill(0)
        .map((item, index) => (
          <li key={index}>
            <ContentLoader 
          speed={2}
          width={220}
          height={285}
          viewBox="0 0 220 285"
          backgroundColor="#cfcfcf"
          foregroundColor="#ecebeb"
        >
          <rect x="155" y="158" rx="3" ry="3" width="54" height="13" /> 
          <rect x="14" y="208" rx="3" ry="3" width="190" height="3" /> 
          <rect x="14" y="218" rx="3" ry="3" width="190" height="3" /> 
          <rect x="13" y="229" rx="3" ry="3" width="170" height="3" /> 
          <circle cx="494" cy="176" r="54" /> 
          <rect x="11" y="158" rx="3" ry="3" width="122" height="12" /> 
          <rect x="14" y="242" rx="3" ry="3" width="194" height="38" /> 
          <rect x="11" y="175" rx="3" ry="3" width="105" height="12" /> 
          <circle cx="108" cy="76" r="66" />
        </ContentLoader>
          </li>
        ))}
      </ul>
    </S.Grid>
  );
};

export default ProductCardSkeleton;