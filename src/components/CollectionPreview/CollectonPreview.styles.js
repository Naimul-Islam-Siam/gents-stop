import styled from 'styled-components';

export const CollectionPreviewContainer = styled.div`
   display: flex;
   flex-direction: column;
   margin-bottom: 60px;

   @media screen and (max-width: 800px) {
      align-items: center;
   }
`;

export const TitleContainer = styled.h1`
   font-size: 28px;
   margin-bottom: 35px;
   margin-left: auto;
   margin-right: auto;
   cursor: pointer;
   border-bottom: 3px solid black;
   width: fit-content;

   &:hover {
      border-bottom: 3px solid transparent;
   }
`;

export const PreviewContainer = styled.div`
   display: flex;
   justify-content: space-between;

   @media screen and (max-width: 800px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 15px;
   }
`;